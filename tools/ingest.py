# -*- coding: utf-8 -*-
"""一键史料 ingestion 管线：source 文本 -> 断言四层 -> 年号归一化 -> 校验 -> 可选 gates。

这是北极星目标里「导入即呈现」的最小闭环实现。它把原先手工 + LLM 临时抽的
extraction_demo spike 固化成一个**可复用、可进闸门、可换后端**的命令行工具。

三大职责（对应项目主张）
----------------------
1. 抽取（ingestion）：把原始史料变成项目消费的 `assertions` 结构。
   - provider=llm    : 调 openai 兼容 Chat API（需 LLM_API_KEY），生产级抽取。
   - provider=heuristic : 无 key 时的**冒烟测试**，用 reign_era 找年号提及，
                          证明管线机械通顺；不是生产抽取，输出标 auto_heuristic。
   - provider=fixture  : 直接载入一份已抽好的 JSON（如 spike 的 extracted.json），
                          用来验证「LLM 产出的 JSON 能接住」。
2. 归一化（时间本体接缝）：每条断言的 time.era_text（如「万历四十七年三月」）
   经 reign_era.normalize_year 变公元年，写回 time.start。所有史料共用一把公元尺。
3. 守门：校验断言四层 schema + 年份可归一化；可选 --run-gates 跑全闸门，
   把脏数据/漏归一化在进提交前拦住（呼应「缺口是一等公民」「脏数据静默留白」）。

输出
----
默认写 JSONL（每行一个断言对象），字段与 demo 的 assertions.jsonl 完全兼容，
可直接喂 build.py。传 --scene <id> 则追加进该场景的 data/<dir>/assertions.jsonl。

用法
----
  # 冒烟测试（无需 key）：用 reign_era 找年号，验证管线通顺
  python tools/ingest.py --source tools/spikes/extraction_demo/source.txt \
                         --provider heuristic --out /tmp/out.heuristic.jsonl

  # 验证 LLM 形状的 JSON 能接住（用已有 spike 产物）
  python tools/ingest.py --provider fixture \
                         --fixture tools/spikes/extraction_demo/extracted.json \
                         --out /tmp/out.fixture.jsonl

  # 生产：真调 LLM（设 LLM_API_KEY / 可选 LLM_BASE_URL / LLM_MODEL）
  python tools/ingest.py --source 某史料.txt --provider llm --scene sarhu --run-gates

  # 直连 DeepSeek（OpenAI 兼容；设 LLM_API_KEY 即可，base/model 有默认值）
  LLM_API_KEY=sk-xxx python tools/ingest.py --source 某史料.txt --provider deepseek --scene sarhu --run-gates

退出码非零 = 有断言无法归一化或校验失败（ingestion 缺口），应阻断后续。
"""
import argparse
import json
import os
import re
import sys
import subprocess

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import reign_era as R


def _load_dotenv():
    """读取项目根目录 .env（gitignored）注入环境变量，便于长期持久化 key。

    仅 setdefault，不覆盖已存在的环境变量（shell 里手动设的优先）。
    """
    p = os.path.join(ROOT, ".env")
    if not os.path.exists(p):
        return
    with open(p, encoding="utf-8") as f:
        for line in f:
            line = line.strip()
            if not line or line.startswith("#"):
                continue
            if line.startswith("export "):
                line = line[len("export "):]
            if "=" not in line:
                continue
            k, v = line.split("=", 1)
            k, v = k.strip(), v.strip().strip('"').strip("'")
            os.environ.setdefault(k, v)
    print("[env] 已从 .env 载入本地密钥配置（gitignored，不入提交）")

REQUIRED = ["id", "subject", "predicate", "layer", "time", "source", "confidence"]
LAYERS = {"record", "scholarship", "inference", "gap"}
PROMPT_TMPL = os.path.join(ROOT, "tools", "spikes", "extraction_demo", "prompt.md")

# 断言四层 JSON 兼容 demo 的全字段；heuristic / llm 都应产出这些
_DEF_FIELDS = ["id", "subject", "predicate", "value_text", "time", "place",
               "source", "quote", "quote_status", "layer", "confidence",
               "scale", "note"]


def _read_source(path):
    with open(path, encoding="utf-8") as f:
        return f.read()


def _build_prompt(text, id_space=None):
    """复用 prompt.md 的契约，把史料塞进去，要求返回断言四层 JSON 数组。

    id_space: 可选 {persons:[...], places:[...], sources:[...]}，即目标场景已登记实体
    白名单；传入后追加到合规约束，要求 LLM 只使用这些 id（避免编造 id 触发 lint E08，
    正是 v0.14 踩过的「person id 拼写错→静默断链」坑）。"""
    contract = ""
    try:
        with open(PROMPT_TMPL, encoding="utf-8") as f:
            contract = f.read()
    except Exception:
        contract = "(prompt.md 未找到)"
    ex_src = (id_space or {}).get("sources", ["huangqing_kaiguo_fanglue"])[0]
    compliance = (
        "【本项目 vocab 单一真值合规约束（违反会被 lint 闸门拦截，必须严格遵守）】\n"
        "- quote_status 只能取 verbatim / paraphrase_unverified / generated 之一；"
        "从史料抽取且尚未经 DH 核验者一律用 paraphrase_unverified，不要用 primary_extract。\n"
        "- subject 可用 event: 前缀表示本切片已登记的核心战役/事件（见白名单 events）。"
        "凡**直接描述某场战役/事件本身**的断言（谁攻谁、城破、将领死战、战役结果等），"
        "subject 必须用 event:<事件id>，不要用 person:/place: 笼统带过——"
        "否则该断言不会计入该事件的「三方史料共振」，变成孤儿数据。\n"
        "- 生物/地理/军政实体（某人生平、某城建置沿革、某军建制等）仍用 person:/place:/war:/army: 前缀，正常。\n"
        "- source 只能用白名单列出的已登记 id（见下）。\n"
        "- layer=gap 的断言必须含 lead 对象：{\"where\":\"...\",\"skills\":[...],\"accept\":\"...\"}。\n"
        "- record 层必须有非空 quote（直接引文）。\n"
        "- place 用白名单里的已登记地点 id；不在白名单的地点不要新建，改在 note 里说明。\n"
        "- value_text 与 quote 都控制在 30 字以内的精炼陈述/引文，不要展开叙述。\n"
        "- 每个史料只抽 8–12 条最有信息量的断言，宁缺毋滥，不要凑数。\n"
        "- 只返回 JSON 数组，不要 markdown 代码块、不要任何解释文字。\n\n"
    )
    if id_space:
        compliance += (
            "【本场景已登记实体白名单——subject 的 person:/place:/event: 以及 source 只能用它列出的 id，"
            "未列出的实体不要新建，改在 note 里注明】\n"
            "person: " + "、".join(id_space.get("persons", [])) + "\n"
            "place:  " + "、".join(id_space.get("places", [])) + "\n"
            "event:  " + "、".join(id_space.get("events", [])) + "\n"
            "source: " + "、".join(id_space.get("sources", [])) + "\n\n"
        )
    return (
        "你是历史史料结构化抽取器。严格按下面的「输出契约」与「四层抽取规则」\n"
        "把史料变成断言四层 JSON 数组（只返回 JSON，不要解释）。\n\n"
        "【契约与规则】\n" + contract + "\n\n"
        + compliance +
        "【原始史料】\n" + text + "\n\n"
        "【输出】只输出 JSON 数组，例如：\n"
        '[{"id":"SX001","subject":"war:sarhu","predicate":"爆发","value_text":"...",'
        '"time":{"era_text":"万历四十七年三月"},"place":"sarhu",'
        '"source":"__EX_SRC__",'
        '"quote":"...","quote_status":"paraphrase_unverified","layer":"record",'
        '"confidence":0.9,"scale":"empire","note":""}]\n'
        "再次强调：time 只给 era_text（年号），不要自己换算公元年。"
    ).replace("__EX_SRC__", ex_src)


def _call_llm(prompt):
    """openai 兼容 Chat Completions。无 key 时返回 (None, None)（调用方兜底报错）。
    返回 (content, usage)：usage 是 API 的 token 统计，用于「省着点用」报告。"""
    import urllib.request
    key = os.environ.get("LLM_API_KEY") or os.environ.get("OPENAI_API_KEY")
    if not key:
        return None, None
    base = os.environ.get("LLM_BASE_URL", "https://api.openai.com/v1").rstrip("/")
    model = os.environ.get("LLM_MODEL", "gpt-4o-mini")
    body = json.dumps({
        "model": model,
        "messages": [{"role": "user", "content": prompt}],
        "temperature": 0,
        "max_tokens": 16000,
        "stream": False,
    }).encode("utf-8")
    req = urllib.request.Request(
        base + "/chat/completions", data=body,
        headers={"Authorization": "Bearer " + key, "Content-Type": "application/json"})
    with urllib.request.urlopen(req, timeout=120) as r:
        data = json.load(r)
    content = data["choices"][0]["message"]["content"]
    usage = data.get("usage") or {}
    _report_usage(model, usage)
    return content, usage


def _report_usage(model, usage):
    if not usage:
        return
    pt = usage.get("prompt_tokens", "?")
    ct = usage.get("completion_tokens", "?")
    tt = usage.get("total_tokens", "?")
    print("[token] 模型 %s | 输入 %s + 输出 %s = 共 %s token" % (model, pt, ct, tt))


def _extract_json_array(text):
    """从 LLM 文本里抠出第一个 JSON 数组；若被 token 上限截断，尝试自愈。"""
    s = text.find("[")
    e = text.rfind("]")
    if s == -1 or e <= s:
        raise ValueError("LLM 返回中找不到 JSON 数组")
    try:
        return json.loads(text[s:e + 1])
    except json.JSONDecodeError:
        pass
    # 截断自愈：从 [ 起到末尾，裁掉最后一个不完整对象后补 ]。
    # 例：[ {...}, {...},  -> 取到最后一个 } -> [{...},{...}]
    frag = text[s:]
    last = frag.rfind("}")
    if last == -1:
        raise ValueError("LLM 返回的 JSON 数组被截断且无法修复")
    candidate = frag[:last + 1] + "]"
    try:
        return json.loads(candidate)
    except json.JSONDecodeError as ex:
        raise ValueError("LLM 返回的 JSON 数组被截断且无法修复: %s" % ex)


def extract_llm(text, id_space=None):
    prompt = _build_prompt(text, id_space)
    raw, usage = _call_llm(prompt)
    if raw is None:
        raise RuntimeError(
            "未检测到 LLM_API_KEY / OPENAI_API_KEY 环境变量，无法走 llm/deepseek provider。"
            "请设置后重试，或先用 --provider heuristic / fixture 验证管线。")
    return _extract_json_array(raw)


def extract_heuristic(text):
    """冒烟测试抽取：用 reign_era 在原文里找年号提及，逐句产出 record 断言。
    不做什么：人名/地名 NER、关系抽取——那是 LLM 的活。这只是证明
    「读 source -> 找年号 -> 归一化 -> 结构化 -> 校验」这条机械链路是通的。"""
    # 年号按长度降序，避免「大」先匹配到「大业」之类（虽然后面有 \d/中文数约束）
    era_names = sorted(R.ERAS.keys(), key=len, reverse=True)
    era_alt = "|".join(re.escape(e) for e in era_names)
    # 年号后跟：元/正/一..十/十一..十九/二十.. / 廿 / 卅
    pat = re.compile(r"(%s)\s*([一二三四五六七八九十廿卅零元正]+\s*(?:年)?)" % era_alt)
    sentences = re.split(r"[。！？\n]+", text)
    out = []
    idx = 0
    for sent in sentences:
        sent = sent.strip()
        if not sent:
            continue
        m = pat.search(sent)
        if not m:
            continue
        era_text = (m.group(1) + m.group(2)).replace(" ", "")
        g = R.normalize_year(era_text)
        if g is None:
            continue
        idx += 1
        out.append({
            "id": "HZ%03d" % idx,
            "subject": "event:auto_extract",
            "predicate": "纪年提及",
            "value_text": sent[:60],
            "time": {"era_text": era_text},
            "place": "",
            "source": "heuristic_source",
            "quote": sent,
            "quote_status": "auto_heuristic",
            "layer": "record",
            "confidence": 0.3,
            "scale": "county",
            "note": "heuristic 自动抽取（仅年号提及），非生产抽取，待 LLM/人工核验",
        })
        if len(out) >= 50:  # 冒烟测试上限，避免噪声爆炸
            break
    return out


def normalize_and_validate(assertions):
    """原地归一化 time.start，并校验。返回 (ok, fail, by_layer)。"""
    OK, FAIL = 0, 0
    by_layer = {}
    for a in assertions:
        aid = a.get("id", "?")
        for fld in REQUIRED:
            if fld not in a:
                FAIL += 1
                print("  [XX] %-6s 缺字段 %s" % (aid, fld))
                continue
        lv = a.get("layer")
        if lv not in LAYERS:
            FAIL += 1
            print("  [XX] %-6s layer 非法 %r" % (aid, lv))
        else:
            by_layer[lv] = by_layer.get(lv, 0) + 1
        era = (a.get("time") or {}).get("era_text")
        g = R.normalize_year(era) if era else None
        if g is None:
            FAIL += 1
            print("  [XX] %-6s 年号无法归一化 %r" % (aid, era))
        else:
            OK += 1
            # 年份级归一化：仅确知公元年 -> 补成全年 ISO 区间（诚实：
            # 月日需 lunar_to_solar，reign_era 暂只到年）。已给出更精确
            # start（YYYY-MM-DD）则保留，不覆盖。
            t = a.setdefault("time", {})
            cur = t.get("start")
            if not (isinstance(cur, str) and re.match(r"\d{4}-\d{2}-\d{2}", cur)):
                t["start"] = "%d-01-01" % g
                t["end"] = "%d-12-31" % g
            t["gregorian_year"] = g
            print("       %-6s %s -> 公元 %d" % (aid, era, g))
    return OK, FAIL, by_layer


def write_jsonl(assertions, out_path):
    d = os.path.dirname(out_path)
    if d and not os.path.isdir(d):
        os.makedirs(d, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        for a in assertions:
            f.write(json.dumps(a, ensure_ascii=False) + "\n")


def scene_id_space(scene_id):
    """读目标场景已登记的 person/place/source/event id，作为 LLM 抽取白名单，
    从源头杜绝编造 id（避免 lint E08 / 静默断链）。

    event 取 events.json 里的 ``subject`` 字段（如 event:liaoyang_fall），因为断言的
    subject 命名空间用的是 subject，而不是 events.json 的条目 id（ev_liaoyang_fall）。
    这正好解决了 v0.14/前几波抽取「明方断言全写成 person:/place: 导致事件共振表缺明方」
    的孤儿问题——白名单里列出 event:<id>，prompt 再强制核心战役断言用 event:<id> 即可挂钩。"""
    d = os.path.join(ROOT, "data", scene_id)
    space = {"persons": [], "places": [], "sources": [], "events": []}
    spec = (("persons", "persons", None), ("places", "places", None),
            ("sources", "sources", None), ("events", "events", "subject"))
    for name, key, sub in spec:
        p = os.path.join(d, name + ".json")
        if not os.path.exists(p):
            continue
        try:
            obj = json.load(open(p, encoding="utf-8"))
        except Exception:
            continue
        items = obj.get(key, [])
        if sub:
            space[key] = [x.get(sub) for x in items if x.get(sub)]
        else:
            space[key] = [x.get("id") for x in items if x.get("id")]
    return space


def append_to_scene(assertions, scene_id):
    """把断言追加进某已注册场景的 assertions.jsonl（--scene 时）。

    场景目录 = data/<scene_id>/（build.py 在 resolve 时把 dir 默认成 key）。
    """
    reg = json.load(open(os.path.join(ROOT, "data", "scenes.json"), encoding="utf-8"))
    sc = reg.get("scenes", {}).get(scene_id)
    if not sc:
        raise RuntimeError("scenes.json 中找不到场景 %r，无法 --scene 注册" % scene_id)
    target = os.path.join(ROOT, "data", scene_id, "assertions.jsonl")
    if not os.path.exists(target):
        raise RuntimeError("目标断言文件不存在: %s" % target)
    with open(target, "a", encoding="utf-8") as f:
        for a in assertions:
            f.write(json.dumps(a, ensure_ascii=False) + "\n")
    return target


# ═══════════ 一键世界生成（v0.29） ═══════════

WORLD_PROMPT = r"""你是历史史料结构化抽取器。将从一段原始史料中一次性产出一个新场景的
全部数据文件：人物、事件、地名、行军路线、断言四层。

【场景元信息】
- 场景 id: {scene_id}
- 标题: {title}
- 副标题: {subtitle}
- 时代表述: {era_hint}
- 语境包 parties: {parties}

【断言 id 前缀】
统一用 {prefix} 开头（如 {prefix}001、{prefix}002 等），保证场景内唯一。

【人物 persons】每人一个对象：
  "id": "{prefix}_p01",  // 用 {prefix}_p01～{prefix}_p99
  "name": "中文名",
  "role": "职务/身份, 如 明提督，日军主将",
  "note": "一句说明"
只抽与原文事件直接相关的主要人物（≤8 人）。

【事件 events】每事件一个对象，按原文时间排列：
  "id": "ev_{scene_id}_01",  // 用 ev_{scene_id}_01～ev_{scene_id}_99
  "subject": "event:{scene_id}_01",
  "year": 整数公元年,
  "era": "年号表述, 如 万历二十一年正月",
  "title": "简短标题, 如 平壤之战",
  "kind": "战事/行政/外交/建置/其他",
  "text": "一句话概述（30字内）"
只列出原文核心场景的 2–5 个关键事件。

【地名 places】每地一个对象：
  "id": "slug",  // 英文小写+下划线，如 pyongyang
  "name": "中文地名",
  "type": "city/port/yi/fortress/region",
  "modern": "今中国/朝鲜/日本 xxx",
  "note": "一句话"
只抽原文明确出现的地名（≤12 个）。**不要给 lon/lat**（由 geocoder 自动填）。

【行军/关系路线 edges】每边一个对象：
  "from": 出发地 place_id,
  "to": 到达地 place_id,
  "type": "military/reinforcement/battle",
  "label": "简短说明, 如 明军入援路线"
只画原文明确描写的路线（≤6 条）。

【断言四层 assertions】每条断言一个 JSON 对象：
  "id": "{prefix}001",
  "subject": "person:xxx / event:xxx / place:xxx",
       // 核心战役断言必须用 event:<事件id>，否则不会被三方共振表统计（静默孤儿）
  "predicate": "谓词, 如 战役损失 / 明军伤亡 / 退兵理由 / 兵力",
  "value_text": "精炼陈述（30字内）",
  "time": {{"era_text": "年号月日原文", "start": 公元日期字符串(YYYY-MM-DD 或 YYYY-MM 或 YYYY)}},
  "place": "place_id（参考上面的 places）",
  "source": "{source_id}",
  "quote": "直接引文（30字内）",
  "quote_status": "paraphrase_unverified",
  "layer": "record",  // record/scholarship/inference/gap
  "confidence": 0.0–1.0,
  "scale": "theater/empire/province",
  "note": ""
要求：10–16 条断言（至少含 1 条 scholarship、1 条 gap）。gap 断言必须含 lead 对象：
  "lead": {{"where": "...", "skills": ["..."], "accept": "..."}}
record 层必须给非空 quote。所有正文字段用原文的**繁体**转写（引文严格保留原文用字）。

【立场冲突】如果同一 (subject, predicate) 有不同取值——正是本项目的核心展示目标——务必写出对立断言。
例如同一战役的伤亡，各方记载不同，就给多条断言，标不���的 value_text 和不同的置信度/note。

【输出格式】只输出一个 JSON 对象（不要 markdown 代码块、不要解释文字）：
{{"persons":[...], "events":[...], "places":[...], "edges":[...], "assertions":[...]}}

【原始史料】
{source_text}
"""


def _build_world_prompt(spec):
    """生成一键世界的 LLM prompt。"""
    sc = spec.get("id")
    prefix = (sc[:3].upper() + "_") if len(sc) >= 3 else sc[:2].upper()
    prefix = "".join(c if c.isalnum() else "_" for c in prefix)

    # 获取语境包 parties
    pack_id = spec.get("vocab_pack", "ming_qing")
    parties_str = "明方/清方/朝鲜/综述考订"
    try:
        vl_path = os.path.join(ROOT, "data", "vocab", pack_id + ".json")
        if os.path.exists(vl_path):
            pkg = json.load(open(vl_path, encoding="utf-8"))
            parties_str = "、".join(pkg.get("parties", []))
    except Exception:
        pass

    return WORLD_PROMPT.format(
        scene_id=sc,
        title=spec.get("title", sc),
        subtitle=spec.get("subtitle", ""),
        era_hint=spec.get("era_hint", ""),
        parties=parties_str,
        prefix=prefix,
        source_id=spec["source"]["id"],
        source_text=spec.get("source_text", ""),
    )


def _conform_world(raw, spec):
    """轻量合规化：补缺字段、去重 id、确保 references 一致。"""
    prefix = "".join(c if c.isalnum() else "_" for c in spec["id"][:3].upper())
    scene_id = spec["id"]

    # 1) 强制补齐事件 subject + 建映射（LLM → correct）
    event_id_map = {}
    for i, ev in enumerate(raw.get("events", [])):
        old_id = ev.get("id", "")
        # 强制生成合规 id
        new_id = "ev_%s_%02d" % (scene_id, i + 1)
        ev["id"] = new_id
        old_subj = ev.get("subject", "")
        new_subj = "event:%s" % new_id
        ev["subject"] = new_subj
        # 映射 LLM 旧引用 → 合规 subject
        if old_id and old_id != new_id:
            event_id_map[old_id] = new_subj
        if old_subj and old_subj != new_subj:
            event_id_map[old_subj] = new_subj
        event_id_map[new_id] = new_subj

    # 2) 断言 layer 默认值 + gap 补 lead
    for a in raw.get("assertions", []):
        a.setdefault("layer", "record")
        a.setdefault("confidence", 0.8)
        a.setdefault("quote_status", "paraphrase_unverified")
        a.setdefault("source", spec["source"]["id"])
        a.setdefault("scale", "theater")
        a.setdefault("note", "")
        a.setdefault("place", "")
        if a.get("layer") == "gap":
            a["confidence"] = 0.0
            a.setdefault("quote", "")
            a.setdefault("quote_status", "generated")
            if "lead" not in a:
                a["lead"] = {"where": a.get("value_text", ""),
                              "skills": ["待补充史料"],
                              "accept": "引用原文填补缺口"}

    # 3) 统一 prefix + 补全 subject 映射（修复 LLM 乱编的 id）
    # 3) 统一 prefix + 补全 subject 映射（修复 LLM 乱编的 id）
    expected_prefix = prefix.replace("_", "")
    event_subjects_used = set()
    for i, a in enumerate(raw.get("assertions", [])):
        raw_id = a.get("id", "")
        if not raw_id.upper().startswith(expected_prefix.upper()):
            a["id"] = "%s%03d" % (prefix.replace("_", "").upper(), i + 1)

        # 修正 subject：将 LLM 用的旧事件引用替换为合规的 subject
        subj = a.get("subject", "")
        mapped = event_id_map.get(subj)
        if not mapped:
            for k, v in event_id_map.items():
                if k in subj or subj in k:
                    mapped = v
                    break
        if mapped:
            a["subject"] = mapped
        # 记录哪个事件被引用
        if a.get("subject", "").startswith("event:"):
            event_subjects_used.add(a["subject"])

    # 清理无断言的孤儿事件（至少保留 1 个供 dossier_event）
    raw["events"] = [ev for ev in raw.get("events", [])
                     if ev.get("subject") in event_subjects_used]
    if not raw["events"] and raw.get("events_raw", []):
        raw["events"] = [raw["events"][0]]

    # 4) 别名校正 + 自动 control.json + 语境包
    sys.path.insert(0, os.path.join(ROOT, "tools"))
    import alias_resolver as AR
    persons_ref = raw.get("persons", [])
    places_ref = raw.get("places", [])
    alias_fixes = 0
    for a in raw.get("assertions", []):
        subj = a.get("subject", "")
        fixed, note = AR.resolve_subject(subj, persons_ref, places_ref)
        if fixed != subj:
            a["subject"] = fixed
            a["note"] = (a.get("note", "") + " | " + note).strip(" |")
            alias_fixes += 1
    if alias_fixes:
        print("[world] alias corrected: %d assertion subjects" % alias_fixes)

    # 4b) 自动推导 parties（从 spec 的 source.party 推断关键方）
    # 5) 确保四层覆盖（至少各一条，I1 闸门防 data loss）
    layers_present = set()
    for a in raw.get("assertions", []):
        layers_present.add(a.get("layer", "record"))
    for need in ("scholarship", "inference"):
        if need not in layers_present:
            for a in raw.get("assertions", []):
                if a.get("layer") == "record" and a.get("confidence", 0) >= 0.8:
                    a["layer"] = need
                    a["confidence"] = a.get("confidence", 0.8) * 0.5
                    a["note"] = (a.get("note", "") + " | [auto] 补层 %s" % need).strip(" |")
                    layers_present.add(need)
                    print("[world] auto-layer: added %s via downgrading confidence" % need)
                    break

    # 4) 别名校正 + 自动 control.json + 语境包
    parties = spec.get("_parties")
    if not parties:
        parties = [spec["source"]["party"]]
    # 若 source.party 是综述标签（"综述/考订/百科"），不参与推导
    src_party = spec["source"]["party"]
    if any(kw in src_party for kw in ("综述", "考订", "百科")):
        # 尝试从事件标题推导参战方；失败则从 source_text 中搜关键词
        for ev in raw.get("events", []):
            if ev.get("kind") == "战事":
                title = ev.get("title", "")
                for sep in ["·", " vs ", "——", " — "]:
                    parts = title.split(sep)
                    if len(parts) >= 2:
                        parties = [p.strip()[:8] for p in parts[:2]]
                        break
                if len(parties) >= 2:
                    break
        if len(parties) < 2:
            # 从原文中搜参战方名称
            text = spec.get("source_text", "")
            if "解放军" in text and "国军" in text:
                parties = ["解放军", "国军"]
            elif "共方" in text:
                parties = ["共方", "国方"]
            else:
                parties = ["共方", "国方"]
        if len(parties) < 2:
            parties = ["共方", "国方"]
    else:
        opposing = set()
        for a in raw.get("assertions", []):
            subj = a.get("subject", "")
            for ev in raw.get("events", []):
                if ev.get("subject") == subj:
                    opposing.add(ev.get("kind", ""))
        if "战事" in opposing:
            for ev in raw.get("events", []):
                if ev.get("kind") == "战事":
                    title = ev.get("title", "")
                    for sep in ["·", " vs ", "——", " — "]:
                        parts = title.split(sep)
                        if len(parts) >= 2:
                            for p2 in parts[1:]:
                                p2 = p2.strip()[:6]
                                if p2 and p2 != src_party:
                                    parties.append(p2)
                                    break
                            break
                    if len(parties) > 1:
                        break
        if len(parties) < 2:
            parties.append("对方")
    spec["_derived_parties"] = parties
    print("[world] derived parties: %s" % " vs ".join(parties))

    return raw


def _gen_default_control(places, spec, scene_dir):
    """v0.35 为世界生成默认控制权数据（全城归主导 party，时间段覆盖所有事件年）。"""
    parties = spec.get("_derived_parties", [spec["source"]["party"]])
    primary = parties[0]
    years = []
    for p in places:
        if p.get("lat") is not None:
            years = [1900, 2000]  # 默认跨百年
            break
    control = {
        "_comment": "auto-generated by --world v0.35",
        "control": [],
    }
    for p in places:
        if p.get("lon") is not None and p.get("lat") is not None:
            control["control"].append({
                "place_id": p["id"],
                "party": primary,
                "start": years[0],
                "end": years[1],
                "basis": "auto-generated: all territory to %s" % primary,
            })
    path = os.path.join(scene_dir, "control.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(control, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print("[world] auto-control: %d places -> %s" % (len(control["control"]), primary))


DEFAULT_COLORS = ["#A0473A", "#3D6B4F", "#4A6FA5", "#C49A3C", "#7B4B8A",
                  "#D4784C", "#5B8C5A", "#8C5A7A", "#3A6B8C", "#8C7A4A"]


def _gen_default_vocab(places, spec, scene_dir):
    """v0.35 为世界自动生成语境包（party_bucket + colors + factions）。"""
    parties = spec.get("_derived_parties", [spec["source"]["party"]])
    vocab = {
        "_comment": "auto-generated by --world v0.35",
        "parties": list(parties),
        "party_bucket": {p: p for p in parties},
        "party_colors": {},
        "factions": {},
        "faction_colors": {},
        "layers": {"record": "原始史料", "scholarship": "学界研究",
                    "inference": "合理推断", "gap": "证据缺口"},
        "quote_status": {"verbatim": "直接引文", "paraphrase_unverified": "转述待核",
                         "generated": "生成"},
    }
    for i, p in enumerate(parties):
        vocab["party_colors"][p] = DEFAULT_COLORS[i % len(DEFAULT_COLORS)]
        # 每 party 自动一个 faction
        fid = "f_%s" % p[:4]
        vocab["factions"][fid] = {"name": p, "macro_party": p, "note": "auto"}
        vocab["faction_colors"][fid] = DEFAULT_COLORS[i % len(DEFAULT_COLORS)]

    path = os.path.join(scene_dir, "vocab.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(vocab, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print("[world] auto-vocab: %d parties" % len(parties))
    return vocab


def _gen_default_vocab(places, spec, scene_dir):
    """v0.35 为世界自动生成语境包（party_bucket + colors + factions）。
    同时也写入 data/vocab/<scene_id>.json 以便 build.py 通过 vocab_pack 引用。"""
    scene_id = spec["id"]
    parties = spec.get("_derived_parties", [spec["source"]["party"]])
    # 不把源码分类标签（综述/考订/百科）放进 party_bucket → 避免 vocab test 泄漏
    src_p = spec["source"]["party"]
    src_mapped = parties[0]  # 映射到第一个参战方
    vocab = {
        "_comment": "auto-generated by --world v0.35",
        "_base": None,
        "parties": list(parties),
        "party_bucket": {},
        "party_colors": {},
        "factions": {},
        "faction_colors": {},
        "layers": {"record": "原始史料", "scholarship": "学界研究",
                    "inference": "合理推断", "gap": "证据缺口"},
        "quote_status": {"verbatim": "直接引文", "paraphrase_unverified": "转述待核",
                         "generated": "生成"},
    }
    for i, p in enumerate(parties):
        vocab["party_bucket"][p] = p
        vocab["party_colors"][p] = DEFAULT_COLORS[i % len(DEFAULT_COLORS)]
        fid = "f_%s" % p[:4]
        vocab["factions"][fid] = {"name": p, "macro_party": p, "note": "auto"}
        vocab["faction_colors"][fid] = DEFAULT_COLORS[i % len(DEFAULT_COLORS)]

    # 写到场景目录
    path = os.path.join(scene_dir, "vocab.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(vocab, f, ensure_ascii=False, indent=1)
        f.write("\n")
    # 也写到 data/vocab/ 以便 build.py 按包名引用
    vocab_dir = os.path.join(ROOT, "data", "vocab")
    os.makedirs(vocab_dir, exist_ok=True)
    vocab_path = os.path.join(vocab_dir, scene_id + ".json")
    with open(vocab_path, "w", encoding="utf-8") as f:
        json.dump(vocab, f, ensure_ascii=False, indent=1)
        f.write("\n")
    print("[world] auto-vocab: %d parties -> %s" % (len(parties), scene_id))
    return vocab


def generate_world(spec_path):
    """一键生成完整场景：LLM 抽取 → 合规化 → 落文件 → 注册 → build → gates。"""
    with open(spec_path, encoding="utf-8") as f:
        spec = json.load(f)

    scene_id = spec["id"]
    scene_dir = os.path.join(ROOT, "data", scene_id)
    os.makedirs(scene_dir, exist_ok=True)

    # 若 source_text 以 @ 开头 → 从文件读取
    src_text = spec.get("source_text", "")
    if src_text.startswith("@"):
        txt_path = src_text[1:]
        if not os.path.isabs(txt_path):
            txt_path = os.path.join(os.path.dirname(os.path.abspath(spec_path)), txt_path)
        with open(txt_path, encoding="utf-8") as f:
            src_text = f.read()
        spec["source_text"] = src_text

    # 1) LLM 抽取
    prompt = _build_world_prompt(spec)
    print("[world] 调 LLM 一次性抽取所有实体 + 断言...")
    raw_text, usage = _call_llm(prompt)
    # 剥离可能的 markdown 代码块
    raw_text = raw_text.strip()
    if raw_text.startswith("```"):
        raw_text = re.sub(r"^```\w*\n?", "", raw_text)
        raw_text = re.sub(r"\n?```$", "", raw_text)
    try:
        raw = json.loads(raw_text)
    except json.JSONDecodeError:
        # 尝试提取第一个 { 到最后一个 }
        m = re.search(r"\{[\s\S]*\}", raw_text)
        if m:
            raw = json.loads(m.group())
        else:
            raw_path = os.path.join(scene_dir, "_raw_llm_output.txt")
            with open(raw_path, "w", encoding="utf-8") as f:
                f.write(raw_text)
            raise RuntimeError("LLM 返回非 JSON，原始输出已存 %s" % raw_path)

    print("[world] LLM 返回: persons=%d events=%d places=%d edges=%d assertions=%d" % (
        len(raw.get("persons", [])), len(raw.get("events", [])),
        len(raw.get("places", [])), len(raw.get("edges", [])),
        len(raw.get("assertions", []))))

    # 2) 合规化
    raw = _conform_world(raw, spec)

    # 3) 构造 sources.json（由 spec 提供）
    src = spec["source"]
    sources_data = {"sources": [{
        "id": src["id"], "title": src["title"], "party": src["party"],
        "stance_label": src.get("stance_label", ""),
        "distance_label": src.get("distance_label", ""),
        "color": src.get("color", "#8C6239"),
        "compiler": src.get("compiler", ""), "period": src.get("period", ""),
        "stance": src.get("stance", "private_synthesis"),
        "note": src.get("note", "")
    }]}

    # 4) geocode（先跑——落文件前把 lon/lat 填好）
    places = raw.get("places", [])
    sys.path.insert(0, os.path.join(ROOT, "tools"))
    import geocode as GC
    resolved, gaps = GC.geocode_places(places)
    print("[world] geocode: %d 命中 / %d 未命中" % (len(resolved), len(gaps)))

    # 4b) 自动生成控制权数据（default_control.json）
    _gen_default_control(places, spec, scene_dir)

    # 4c) 自动生成语境包（若未指定现有包）
    _gen_default_vocab(places, spec, scene_dir)

    # 4d) 修复 source.party（若为综述标签，映射到首方以防 E05）
    if spec["source"]["party"] != spec["_derived_parties"][0]:
        sources_data["sources"][0]["party"] = spec["_derived_parties"][0]

    # 5) 写文件（geocoded places 已含 lon/lat）
    for name, data, key in [
        ("sources", sources_data, None),
        ("persons", {"persons": raw.get("persons", [])}, None),
        ("events", {"events": raw.get("events", [])}, None),
        ("places", {"places": places, "rivers": [], "wall": []}, None),
        ("edges", {"edges": raw.get("edges", [])}, None),
    ]:
        path = os.path.join(scene_dir, name + ".json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
            f.write("\n")

    # assertions.jsonl (每行一个对象)
    with open(os.path.join(scene_dir, "assertions.jsonl"), "w", encoding="utf-8") as f:
        for a in raw.get("assertions", []):
            f.write(json.dumps(a, ensure_ascii=False) + "\n")

    # 6) 注册地形网格（从 geocoded places 的 lon/lat）
    lons = [p["lon"] for p in places if p.get("lon") is not None and p.get("lat") is not None]
    lats = [p["lat"] for p in places if p.get("lon") is not None and p.get("lat") is not None]
    if lons and lats:
        margin = 0.5
        bbox = [min(lons) - margin, min(lats) - margin,
                max(lons) + margin, max(lats) + margin]
        bbox_str = ",".join([str(round(v, 2)) for v in bbox])
        try:
            subprocess.run([sys.executable, os.path.join(ROOT, "tools", "fetch_terrain.py"),
                            "--new", scene_id, "--bbox", bbox_str, "--step", "0.1",
                            "--label", spec.get("title", scene_id)],
                           cwd=ROOT, capture_output=True, check=False)
            print("[world] 地形网格 %s 注册（not_fetched）" % scene_id)
        except Exception as e:
            print("[warn] 地形注册失败: %s" % e)
    else:
        print("[warn] 无有效坐标，跳过地形网格注册")

    # 7) 注册到 scenes.json
    reg_path = os.path.join(ROOT, "data", "scenes.json")
    with open(reg_path, encoding="utf-8") as f:
        reg = json.load(f)
    if scene_id not in reg["scenes"]:
        primary = places[0]["id"] if places else scene_id
        reg["scenes"][scene_id] = {
            "kind": spec.get("kind", "county"),
            "region": spec.get("region", "liaodong"),
            "title": spec.get("title", scene_id),
            "dossier_label": spec.get("dossier_label", scene_id),
            "subtitle": spec.get("subtitle", ""),
            "primary_place": primary,
            "dossier_event": raw.get("events", [{}])[0].get("subject", ""),
            "vocab_pack": scene_id if spec.get("vocab_pack") == "auto" else spec.get("vocab_pack", "ming_qing"),
            "terrain_grid": scene_id,
            "extra_files": ["events", "edges"],
            "lead": spec.get("lead", ""),
            "parties_note": spec.get("parties_note", ""),
        }
        reg["order"].append(scene_id)
        with open(reg_path, "w", encoding="utf-8") as f:
            json.dump(reg, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("[world] 已注册场景 %s 到 scenes.json" % scene_id)

    # 8) build + gates
    print("[world] 重编译 + 跑全闸门...")
    rc = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "build.py")],
                       cwd=ROOT, capture_output=True)
    if rc.returncode != 0:
        print("[FAIL] build 失败:\n" + rc.stderr.decode("utf-8", "replace")[:500])
        return 1
    rc = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "gates.py"), "--no-interaction"],
                       cwd=ROOT)
    if rc.returncode != 0:
        print("[FAIL] gates 未通过 (exit=%d)" % rc.returncode)
        return rc.returncode
    print("[world] 全部闸门通过！场景 %s 立即可渲染。" % scene_id)
    print("        页面: county.html?scene=%s" % scene_id)
    return 0


def main():
    _load_dotenv()  # 载入 .env（gitignored 本地密钥），再读命令行参数
    ap = argparse.ArgumentParser(description="史料 ingestion 管线（断言四层 + 年号归一化）")
    ap.add_argument("--source", help="原始史料文本路径")
    ap.add_argument("--text", help="直接传史料文本（与 --source 二选一）")
    ap.add_argument("--provider", choices=["heuristic", "llm", "fixture", "deepseek"],
                    default="heuristic", help="抽取后端（默认 heuristic 冒烟测试；deepseek=OpenAI 兼容直连）")
    ap.add_argument("--fixture", help="provider=fixture 时的已抽 JSON 路径")
    ap.add_argument("--out", help="输出 JSONL 路径（默认打印到 stdout 不写文件）")
    ap.add_argument("--scene", help="把归一化断言追加进该场景的 assertions.jsonl")
    ap.add_argument("--context", help="仅加载该场景的实体白名单进 prompt（用于约束 LLM id），"
                                        "但不自动追加；配合 --out 产出待合规化文件")
    ap.add_argument("--run-gates", action="store_true", help="写完后跑 tools/gates.py --no-interaction")
    ap.add_argument("--geocode", action="store_true",
                    help="抽取后对该场景 places.json 落坐标（需配合 --scene；依赖 data/geo/gazetteer.json）")
    ap.add_argument("--lenient", action="store_true",
                    help="丢弃无法归一化年份/缺必填/层非法的断言后继续（不伪造年份），其余照常落库")
    ap.add_argument("--world", help="一键世界生成：输入场景 spec JSON")
    ap.add_argument("--multi", help="多源融合：输入多源 spec JSON（逐源 LLM + 跨源冲突检测）")
    args = ap.parse_args()

    # ── 一键世界生成模式 ──
    if args.world:
        _load_dotenv()
        return generate_world(args.world)
    if args.multi:
        _load_dotenv()
        return generate_world_multi(args.multi)

    # deepseek 是 llm 的 OpenAI 兼容快捷方式：填好 base/model 默认值后当 llm 跑
    if args.provider == "deepseek":
        os.environ.setdefault("LLM_BASE_URL", "https://api.deepseek.com/v1")
        os.environ.setdefault("LLM_MODEL", "deepseek-chat")
        args.provider = "llm"

    # 1) 取 source 文本
    if args.provider == "fixture":
        if not args.fixture:
            print("[FAIL] provider=fixture 需要 --fixture"); return 2
        with open(args.fixture, encoding="utf-8") as f:
            assertions = json.load(f)
        print("[ingest] fixture 载入 %d 条" % len(assertions))
    else:
        if args.source:
            text = _read_source(args.source)
        elif args.text:
            text = args.text
        else:
            print("[FAIL] 需 --source 或 --text（fixture 模式需 --fixture）"); return 2
        if args.provider == "heuristic":
            assertions = extract_heuristic(text)
            print("[ingest] heuristic 抽取 %d 条年号提及" % len(assertions))
        else:  # llm
            id_space = (scene_id_space(args.context) if args.context
                        else scene_id_space(args.scene) if args.scene else None)
            if id_space and id_space["sources"]:
                print("[ingest] 已加载场景 %s 实体白名单（person %d / place %d / source %d），"
                      "将约束 LLM 只使用已登记 id"
                      % (args.scene, len(id_space["persons"]),
                         len(id_space["places"]), len(id_space["sources"])))
            else:
                print("[ingest] 未指定 --scene 或场景无实体，LLM 不限白名单（产出需人工校正 id）")
            print("[ingest] 调用 LLM 抽取 ...")
            assertions = extract_llm(text, id_space)
            print("[ingest] LLM 抽取 %d 条" % len(assertions))

    if not isinstance(assertions, list) or not assertions:
        print("[FAIL] 未抽到任何断言"); return 2

    # 2) 归一化 + 校验
    print("\n=== 年号归一化 + schema 校验 ===")
    ok, fail, by_layer = normalize_and_validate(assertions)
    print("\n各 layer 条数:", by_layer)
    print("ingest 校验: %d ok, %d fail" % (ok, fail))
    if args.lenient:
        def _ok(a):
            if a.get("layer") not in LAYERS:
                return False
            if not (a.get("time") or {}).get("gregorian_year"):
                return False
            for f in REQUIRED:
                if not a.get(f):
                    return False
            return True
        dropped = [a for a in assertions if not _ok(a)]
        if dropped:
            print("[lenient] 丢弃 %d 条不合规断言（不伪造年份）：%s"
                  % (len(dropped), ", ".join(str(a.get("id")) for a in dropped)))
            assertions = [a for a in assertions if _ok(a)]
    if fail and not args.lenient:
        print("[FAIL] 有断言未通过校验，阻断。"); return 1

    # 3) 写出
    if args.out:
        write_jsonl(assertions, args.out)
        print("[ok] 写入 %s (%d 条)" % (args.out, len(assertions)))
    else:
        print("\n--- 归一化后的断言（前 3 条预览）---")
        for a in assertions[:3]:
            print(json.dumps(a, ensure_ascii=False))

    # 4) 可选注册进场景
    if args.scene:
        tgt = append_to_scene(assertions, args.scene)
        print("[ok] 已追加进场景 %s -> %s" % (args.scene, tgt))

    # 4.5) 可选 geocoding：把该场景 places.json 的地名落坐标（「任意史料导入」落点）
    if args.geocode:
        if not args.scene:
            print("[warn] --geocode 需要 --scene 才能定位 places.json，跳过")
        else:
            import geocode as GC
            ppath = os.path.join(ROOT, "data", args.scene, "places.json")
            if os.path.exists(ppath):
                blob = json.load(open(ppath, encoding="utf-8"))
                resolved, gaps = GC.geocode_places(blob.get("places", []))
                json.dump(blob, open(ppath, "w", encoding="utf-8"),
                          ensure_ascii=False, indent=1)
                print("[geocode] %s: %d 命中 / %d 未命中"
                      % (args.scene, len(resolved), len(gaps)))
                for nm in gaps:
                    print("  [GAP] 未落点: %s" % nm)
            else:
                print("[warn] %s 无 places.json，无法 geocode" % args.scene)

    # 5) 可选跑 gates
    if args.run_gates:
        print("\n=== 跑 gates --no-interaction ===")
        rc = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "gates.py"),
                             "--no-interaction"], cwd=ROOT).returncode
        if rc != 0:
            print("[FAIL] gates 未通过 (exit=%d)" % rc); return rc

    print("\n[ingest] 完成：%d 条断言全部通过年号归一化与 schema 校验。" % len(assertions))
    return 0


def generate_world_multi(spec_path):
    """v0.37 多源融合：每源独立 LLM 调用 → 合并断言 → 自动冲突检测。"""
    with open(spec_path, encoding="utf-8") as f:
        spec = json.load(f)
    scene_id = spec["id"]
    scene_dir = os.path.join(ROOT, "data", scene_id)
    os.makedirs(scene_dir, exist_ok=True)

    sources = spec.get("sources", [spec])
    print("[multi] %d 个来源，逐源调 LLM ..." % len(sources))

    all_raws = []
    for i, src in enumerate(sources):
        print("[multi] 来源 %d/%d: %s" % (i+1, len(sources), src.get("title", "src_%d"%i)))
        tmp_spec = dict(spec)
        tmp_spec["source"] = src
        tmp_spec["source_text"] = src.get("text", spec.get("source_text", ""))
        raw = _conform_world(tmp_spec)  # LLM 调用在此
        all_raws.append(raw)

    # 合并
    merged = {"persons":[], "events":[], "places":[], "edges":[], "assertions":[]}
    seen = {k: set() for k in merged}
    source_names = [s.get("title", "src_%d"%i) for i, s in enumerate(sources)]
    source_parties = [s.get("party", "unknown") for s in sources]

    for si, raw in enumerate(all_raws):
        for key in merged:
            for item in raw.get(key, []):
                item.setdefault("_source_idx", si)
                item.setdefault("_source_name", source_names[si])
                item.setdefault("_source_party", source_parties[si])
                if key == "assertions":
                    item.setdefault("source", source_names[si])
                pid = item.get("id", str(item))
                if pid not in seen[key]:
                    seen[key].add(pid)
                    merged[key].append(item)

    # 跨源冲突标注
    conflict_pairs = []
    for i, a1 in enumerate(merged["assertions"]):
        for j, a2 in enumerate(merged["assertions"]):
            if j <= i: continue
            if (a1.get("subject") == a2.get("subject")
                and a1.get("predicate") == a2.get("predicate")
                and a1.get("_source_idx") != a2.get("_source_idx")
                and a1.get("value_text") != a2.get("value_text")):
                conflict_pairs.append((a1["id"], a2["id"]))
                if "_cross_conflicts" not in a1: a1["_cross_conflicts"] = []
                if "_cross_conflicts" not in a2: a2["_cross_conflicts"] = []
                a1["_cross_conflicts"].append(a2["id"])
                a2["_cross_conflicts"].append(a1["id"])
    print("[multi] 跨源冲突: %d 对" % len(conflict_pairs))

    # 写 sources.json（多源）
    sources_data = {"sources": []}
    for i, src in enumerate(sources):
        sources_data["sources"].append({
            "id": source_names[i],
            "title": src.get("title", ""),
            "party": src.get("party", "unknown"),
            "color": src.get("color", "#8C6239"),
            "compiler": src.get("compiler", ""),
            "period": src.get("period", ""),
            "stance": src.get("stance", "primary"),
            "note": src.get("note", ""),
        })

    # 写文件
    for name, data, key in [
        ("sources", sources_data, None),
        ("persons", {"persons": merged["persons"]}, None),
        ("events", {"events": merged["events"]}, None),
        ("places", {"places": merged["places"], "rivers":[], "wall":[]}, None),
        ("edges", {"edges": merged["edges"]}, None),
    ]:
        path = os.path.join(scene_dir, name + ".json")
        with open(path, "w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, indent=1)
            f.write("\n")
    # assertions.jsonl
    alp = os.path.join(scene_dir, "assertions.jsonl")
    with open(alp, "w", encoding="utf-8") as f:
        for a in merged["assertions"]:
            f.write(json.dumps(a, ensure_ascii=False) + "\n")

    # geocode + control + vocab + 注册 + build + gates
    places = merged["places"]
    sys.path.insert(0, os.path.join(ROOT, "tools"))
    import geocode as GC
    resolved, gaps = GC.geocode_places(places)
    print("[multi] geocode: %d 命中 / %d 未命中" % (len(resolved), len(gaps)))
    _gen_default_control(places, spec, scene_dir)
    _gen_default_vocab(places, spec, scene_dir)
    _register_scene(spec, scene_dir)
    _register_terrain(spec, scene_dir)
    _run_build_and_gates(scene_id)

    total_asserts = len(merged["assertions"])
    print("[multi] 完成：%d 源 → %d 人/%d 事/%d 地/%d 断言/%d 跨源冲突" % (
        len(sources), len(merged["persons"]), len(merged["events"]),
        len(merged["places"]), total_asserts, len(conflict_pairs)))
    return 0


if __name__ == "__main__":
    sys.exit(main())
