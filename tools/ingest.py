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
    ap.add_argument("--lenient", action="store_true",
                    help="丢弃无法归一化年份/缺必填/层非法的断言后继续（不伪造年份），其余照常落库")
    args = ap.parse_args()

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

    # 5) 可选跑 gates
    if args.run_gates:
        print("\n=== 跑 gates --no-interaction ===")
        rc = subprocess.run([sys.executable, os.path.join(ROOT, "tools", "gates.py"),
                             "--no-interaction"], cwd=ROOT).returncode
        if rc != 0:
            print("[FAIL] gates 未通过 (exit=%d)" % rc); return rc

    print("\n[ingest] 完成：%d 条断言全部通过年号归一化与 schema 校验。" % len(assertions))
    return 0


if __name__ == "__main__":
    sys.exit(main())
