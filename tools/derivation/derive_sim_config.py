# -*- coding: utf-8 -*-
"""G1 · 反事实配置自动派生（北极星③ · v0.125）。

从场景的 `assertions.jsonl`（六维四层断言内核）零手 authoring 派生出推演所需的
三件套：

  - places.json    地点码 → place 列表；若场景已有真实坐标则保留（honest boundary：不杜撰、不丢坐标）
  - control.json   控制方优先取场景 vocab 合法 party（否则默认「综述考订」）的史实 timeline
  - sim_config.json 非军事反事实配置（scenario_type / dim_targets / branches /
                   real_branch / start_year / end_year），并标 `_auto_derived=true`

设计铁律（延续项目 honest boundary 原则）：
  - 派生产物一律标 `_auto_derived: true`，与手 authoring 配置区分；反事实分支 id
    以 `whatif_` 前缀，UI 据此渲染 `[what-if]` 徽标。
  - 不杜撰坐标：places 只含 id/name，无 lon/lat → 判为抽象世界（不渲染地图，只渲染
    六维时序 + Branch Event）。这与「坐标缺失 = 不伪造」一致。
  - 速率（base_rate）由史料文本关键词启发式推定「史实走向」（推进 vs 逆转），属 best-effort，
    在 `_derivation_note` 中显式说明，绝不冒充精确考据。

用法：
  python tools/derivation/derive_sim_config.py --scene han_wudi_ruxue
  python tools/derivation/derive_sim_config.py --scene han_wudi_ruxue --run
  python tools/derivation/derive_sim_config.py --assertions path.jsonl --out outdir --dry-run

纯函数（供 test_simulate.py 不变量测试）：
  load_assertions / collect_place_codes / derive_year_span / derive_party /
  derive_places / derive_control / derive_scenario_type / derive_dim_targets /
  derive_branches / derive_config / derive_all
"""
import argparse
import json
import os
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))   # tools/derivation -> 项目根
DATA = os.path.join(ROOT, "data")
SIM_PY = os.path.join(ROOT, "tools", "simulation", "simulate.py")

DIM_NAMES = ["地理", "技术", "制度", "社会", "思想", "事件"]   # 索引 0..5 对应 dims 1..6
DIM_BY_CODE = {i + 1: n for i, n in enumerate(DIM_NAMES)}      # {1:地理, 2:技术, ...}

# 派生 source/control 统一归「学界」桶（跨朝代合法 party，受控词表默认含，避免 E05
# 静默丢弃）。v0.218 起控制方 party 也统一回退「学界」（此前误用「综述考订」，
# 县级场景 vocab_pack 不含该词 → gate #9 ERROR）。
DEFAULT_PARTY = "学界"

# 方向关键词：推进 / 逆转（史料文本启发式）
POS_KW = ["立", "设", "颁", "行", "推", "兴", "倡", "尊", "崇", "独尊", "置", "建", "开",
          "兴", "办", "施", "采", "用", "续", "持", "守", "定", "确", "布", "革", "新"]
NEG_KW = ["废", "罢", "黜", "停", "撤", "止", "衰", "弃", "禁", "抑", "废黜", "中止", "弛", "削"]
# 经济类关键词（在制度维基础上进一步细分 economic vs reform）
ECON_KW = ["税", "赋", "钱", "币", "田", "均田", "两税", "租庸", "租调", "市", "商", "盐",
           "铁", "漕", "亩", "户", "口", "徭", "榷"]
# 工程类语义关键词（水利/交通基础设施）：命中即定 scenario_type=engineering，优先于维计数。
# 解决「大运河」等场景因社会维断言增多导致 dim4 计数盖过 dim2、被误判为 social 的问题
# （G1 分类应反映场景实质，而非断言条数占比）。仅含运河/渠/水利等关键词的场景受影响。
ENG_KW = ["运河", "渠", "通济", "永济", "江南河", "水利", "漕河", "河工", "堤", "桥", "堰", "闸"]

# ── v0.181 考据锚定 base_rate（北极星③校准）──────────────────────────────────
# 对「史实走向清晰、学界有较稳定评估」的已知场景，用考据锚定的 (magnitude, sign) 取代
# 纯关键词启发式，使 G2 反事实偏离落在「史实可辩护」区间、且不被断言微调漂移。
#   magnitude ∈ (0, 0.06]：每年改革指数增量上限（growth = magnitude*(1-0.6*resistance)）
#   sign: +1=改革推进（史实基准上升）/ -1=改革逆转（史实基准下降）
#   citation: 可复核的史实依据（写进 _derivation_note，供审计）
# 仅对表中 scene 生效；其余仍走启发式。新增考据锚定只需在此追加一条。
BASE_RATE_ANCHORS = {
    "song_wanganshi_llm": {
        "magnitude": 0.05,
        "sign": 1,
        "citation": "新法 1069–1085 由神宗持续推行约 16 年（青苗/募役/市易/方田均税/保甲/农田水利），元丰八年(1085)神宗崩、司马光拜相尽废新法（元祐更化）；学界共识：改革实质性落地但终被逆转。锚定幅度 0.05（强推进·长周期）。",
    },
    "wangmang_reform_llm": {
        "magnitude": 0.045,
        "sign": 1,
        "citation": "始建国元年(9)王莽称帝即行激进改制（王田/私属/五均六筦/币制/改名），推行约 14 年，地皇四年(23)新朝亡、改制随崩；学界共识：强力推行但极短命且激化矛盾。锚定幅度 0.045（强力·短命崩盘）。",
    },
}


def load_assertions(path):
    """读取 assertions.jsonl → list[dict]。空行 / // 注释跳过。"""
    rows = []
    with open(path, encoding="utf-8") as f:
        for ln in f:
            ln = ln.strip()
            if not ln or ln.startswith("//"):
                continue
            rows.append(json.loads(ln))
    return rows


def load_events(scene_dir):
    """读取 events.json → list[dict]（容忍多种顶层结构）。无则返回 []。"""
    if not scene_dir:
        return []
    p = os.path.join(scene_dir, "events.json")
    if not os.path.isfile(p):
        return []
    try:
        with open(p, encoding="utf-8") as f:
            d = json.load(f)
    except Exception:
        return []
    if isinstance(d, list):
        return d
    if isinstance(d, dict):
        return d.get("events") or d.get("scenes") or []
    return []


def _event_year(ev):
    """从事件取公元年：优先 year（int），否则 time.gregorian_year / time.start。"""
    if not isinstance(ev, dict):
        return None
    y = ev.get("year")
    if isinstance(y, int):
        return y
    t = ev.get("time") or {}
    gy = t.get("gregorian_year")
    if isinstance(gy, int):
        return gy
    s = t.get("start")
    if isinstance(s, int):
        return s
    if isinstance(s, str):
        head = s.split("-")[0].split("T")[0]
        try:
            return int(head)
        except ValueError:
            return None
    return None


def collect_place_codes(assertions):
    """收集非空的 place 码（保持出现顺序，去重）。"""
    seen = []
    for a in assertions:
        p = a.get("place")
        if isinstance(p, str) and p.strip():
            p = p.strip()
            if p not in seen:
                seen.append(p)
        # place 也可能是 null / 数字 → 忽略
    return seen


def _year_of(a):
    """从断言取公元年：优先 time.gregorian_year，否则 time.start（仅当为整数年）。"""
    t = a.get("time") or {}
    gy = t.get("gregorian_year")
    if isinstance(gy, int):
        return gy
    s = t.get("start")
    if isinstance(s, int):
        return s
    # 形如 "-134-01-01" 的日期串 → 取前导整数段
    if isinstance(s, str):
        head = s.split("-")[0].split("T")[0]
        try:
            return int(head)
        except ValueError:
            return None
    return None


def derive_year_span(assertions, events=None):
    """取断言/事件年份的最小/最大；无年份则回退 (None, None)。

    v0.218 修正：县级场景的断言通常不带 time 字段（年份只写在 events.json），
    原逻辑只看断言 → 落到 (-200,-100) 默认假年份。现把 events.json 的事件年
    并入年份池（year 整数 / time.gregorian_year / time.start），使反事实年份跨度
    取场景真实起讫（如 遵义 876–1915），避免凭空假年份。断言年与事件年取并集的
    最小/最大，二者任一来源存在即可。
    """
    ys = [y for y in (_year_of(a) for a in assertions) if isinstance(y, int)]
    if events:
        for ev in events:
            ey = _event_year(ev)
            if isinstance(ey, int):
                ys.append(ey)
    if not ys:
        return None, None
    return min(ys), max(ys)


def _scene_vocab_pack_parties(scene_dir):
    """读 scenes.json 取该场景 vocab_pack → data/vocab/<pack>.json 的 parties。

    与渲染层受控词表（check_render_schema）一致：控制方 party 必须落在 vocab_pack
    parties 内，否则控制层配色静默失败（gate #9 ERROR）。县级场景通常只有 vocab_pack
    （data/vocab/<scene>.json），无 scene_dir/vocab.json，故须解析 vocab_pack。
    """
    if not scene_dir:
        return []
    scene_id = os.path.basename(scene_dir.rstrip(os.sep))
    sj = os.path.join(ROOT, "data", "scenes.json")
    if not os.path.isfile(sj):
        return []
    try:
        d = json.load(open(sj, encoding="utf-8"))
    except Exception:
        return []
    blk = (d.get("scenes") or {}).get(scene_id) or {}
    vpack = blk.get("vocab_pack")
    if not vpack or str(vpack).startswith("inline:"):
        return []
    vp = os.path.join(ROOT, "data", "vocab", str(vpack).split(":")[-1] + ".json")
    if not os.path.isfile(vp):
        return []
    try:
        return json.load(open(vp, encoding="utf-8")).get("parties") or []
    except Exception:
        return []


def derive_party(assertions, scene_dir=None):
    """派生控制方 party。

    解析顺序：① 场景级 vocab.json（手书 party）→ ② 场景 vocab_pack parties（与渲染层
    受控词表一致；优先「学界」通用合成桶）→ ③ 兜底「学界」（跨朝代合法 party 桶，
    受控词表默认含）。v0.218 修正：原兜底误用「综述考订」，而县级场景 vocab_pack 不含
    该词，导致 gate #9「party 不在受控词表」ERROR；统一回退「学界」（与 sources.json
    派生 party 一致，DEFAULT_PARTY=学界）。
    """
    if scene_dir:
        vp = os.path.join(scene_dir, "vocab.json")
        if os.path.isfile(vp):
            try:
                with open(vp, encoding="utf-8") as f:
                    v = json.load(f)
                parties = v.get("parties") or []
                if parties:
                    return parties[0]
            except Exception:
                pass
        pack_parties = _scene_vocab_pack_parties(scene_dir)
        if pack_parties:
            if "学界" in pack_parties:
                return "学界"
            return pack_parties[0]
    return "学界"


def derive_places(assertions, scene_dir=None):
    """地点码 → place 列表。

    若 scene_dir 下已有 places.json，保留其真实坐标（lon/lat/modern/note/type）与非断言码
    手书地点（如籍贯/关联地），honest boundary：不丢坐标、不杜撰几何。仅当某码在旧文件中
    也没有坐标时，才落为无坐标（判抽象世界）。
    """
    codes = collect_place_codes(assertions)
    existing = {}
    if scene_dir and os.path.isfile(os.path.join(scene_dir, "places.json")):
        try:
            with open(os.path.join(scene_dir, "places.json"), encoding="utf-8") as f:
                old = json.load(f)
            for p in (old.get("places") or []):
                if isinstance(p, dict) and p.get("id"):
                    existing[p["id"]] = p
        except Exception:
            pass
    seen = []
    places = []
    for c in codes:
        if c in existing:
            places.append(existing[c])
        else:
            places.append({"id": c, "name": c})
        if c not in seen:
            seen.append(c)
    # 保留断言未引用但手书存在的地点（如籍贯/关联地），不丢数据
    for pid, p in existing.items():
        if pid not in seen:
            places.append(p)
            seen.append(pid)
    return {"places": places}


def derive_control(assertions, party=None, start=None, end=None, scene_dir=None, events=None):
    """控制方的史实 timeline；供 create_agents 生成三阶层阻力。

    返回字典 {"control": [...]}，与 build.py / 军事路径一致（control 键下为控制项数组）。
    每项：place_id / party / start / end / timeline=main。party 优先取 vocab 合法值。
    """
    if party is None:
        party = derive_party(assertions, scene_dir=scene_dir)
    if start is None or end is None:
        sy, ey = derive_year_span(assertions, events)
        start = sy if sy is not None else -200
        end = ey if ey is not None else -100
    codes = collect_place_codes(assertions)
    ctrl = [{
        "place_id": c, "party": party,
        "start": start, "end": end, "timeline": "main",
    } for c in codes]
    return {
        "_comment": "G1 自动派生：单一控制方（%s）稳定控制，供三阶层 Agent 提供改革阻力"
                    "（local 教育垄断→推进减速）。非军事场景，无需邻接线；control 为数组（位于 control 键下）。" % party,
        "control": ctrl,
    }


def _corpus(assertions):
    """拼接全部文本供关键词启发式。"""
    parts = []
    for a in assertions:
        for k in ("value_text", "predicate", "subject", "note"):
            v = a.get(k)
            if isinstance(v, str):
                parts.append(v)
    return " ".join(parts)


def derive_scenario_type(assertions):
    """从 dims 分布 + 文本关键词推断 scenario_type（reform/engineering/thought/economic/social）。"""
    dim_count = {d: 0 for d in range(1, 7)}
    for a in assertions:
        for d in (a.get("dims") or []):
            if isinstance(d, int) and 1 <= d <= 6:
                dim_count[d] += 1
    corpus = _corpus(assertions)

    # 工程语义优先：运河/渠/水利等基础设施场景直接定 engineering（不被社会维条数淹没）
    if any(k in corpus for k in ENG_KW):
        return "engineering"

    score = {"thought": dim_count[5], "engineering": dim_count[2],
             "social": dim_count[4], "reform": dim_count[3], "economic": 0}
    # 制度维若叠加经济关键词 → 归 economic，否则归 reform
    if dim_count[3] > 0 and any(k in corpus for k in ECON_KW):
        score["economic"] = dim_count[3]
        score["reform"] = 0
    # 无任何非地理维 → 默认 reform
    if sum(score.values()) == 0:
        return "reform"
    # 优先级 tie-break：thought > social > economic > engineering > reform
    order = ["thought", "social", "economic", "engineering", "reform"]
    best = max(order, key=lambda t: (score[t], -order.index(t)))
    return best


def derive_dim_targets(assertions):
    """受扰动六维（排除地理，因其恒定占位）。无则默认 制度/社会/思想。"""
    codes = []
    for a in assertions:
        for d in (a.get("dims") or []):
            if isinstance(d, int) and 2 <= d <= 6 and d not in codes:
                codes.append(d)
    if not codes:
        return ["制度", "社会", "思想"]
    return [DIM_BY_CODE[d] for d in sorted(codes)]


def _direction_sign(assertions):
    """史料走向：+1 推进 / -1 逆转 / 0 中性（关键词计数差，confidence 加权）。"""
    pos_w, neg_w = _evidence_weights(assertions)
    if pos_w > neg_w:
        return 1
    if neg_w > pos_w:
        return -1
    return 0


def _evidence_weights(assertions):
    """按 confidence 加权累计 POS/NEG 关键词命中量。"""
    pos_w = 0.0
    neg_w = 0.0
    for a in assertions:
        text = a.get("value_text", "") or ""
        conf = float(a.get("confidence", 0.5) or 0.5)
        for k in POS_KW:
            if k in text:
                pos_w += conf
        for k in NEG_KW:
            if k in text:
                neg_w += conf
    return pos_w, neg_w


def _evidence_strength(assertions):
    """证据强度 ∈ [0, 1]：净差 / 总证据，反映方向决断度。

    0 = 方向互相抵消/无证据；1 = 完全一边倒（高 confidence 强方向）。
    """
    pos_w, neg_w = _evidence_weights(assertions)
    total = pos_w + neg_w
    if total <= 0:
        return 0.0
    return min(1.0, abs(pos_w - neg_w) / total)


def derive_branches(assertions, scenario_type=None, scene_id=None):
    """派生 real_branch（史实基准）+ whatif（反事实·反向推演）。

    base_rate 幅度由证据强度驱动：magnitude = base + strength * scale。
    方向（正/负）由 POS/NEG 关键词 confidence 加权净差决定。
    反事实分支取反向并阻尼 0.7（部分反转比全反转更现实，避免极端化）。

    v0.181 校准：若 scene_id 在 BASE_RATE_ANCHORS，改用考据锚定的 (magnitude, sign)
    替代纯关键词启发式，并在分支标 `_calibrated=true`（protect 反事实偏离不被断言微调漂移）。
    """
    if scenario_type is None:
        scenario_type = derive_scenario_type(assertions)
    anchor = BASE_RATE_ANCHORS.get(scene_id) if scene_id else None
    if anchor:
        sign = int(anchor.get("sign", 1))
        magnitude = round(float(anchor.get("magnitude", 0.0)), 3)
        calibrated = True
    else:
        sign = _direction_sign(assertions)
        strength = _evidence_strength(assertions)
        BASE = 0.015     # 极弱证据的最小推力（保 whatif 不恒零）
        SCALE = 0.045    # 强证据下的最大加成（封顶 0.06）
        magnitude = round(BASE + strength * SCALE, 3)
        calibrated = False
    real_rate = round(sign * magnitude, 3) if sign != 0 else 0.0
    whatif_rate = round(-sign * magnitude * 0.7, 3) if sign != 0 else round(magnitude * 0.7, 3)
    reform0 = 0.5
    branches = [
        {"id": "real", "label": "史实基准", "base_rate": real_rate, "reform0": reform0,
         "_calibrated": calibrated},
        {"id": "whatif", "label": "反事实·反向推演", "base_rate": whatif_rate,
         "reform0": reform0, "_calibrated": calibrated},
    ]
    return branches, "real"


def derive_config(assertions, scene_id=None, events=None):
    """纯函数：从断言派生完整 sim_config（标 _auto_derived）。

    v0.181：scene_id 命中 BASE_RATE_ANCHORS 时，base_rate 走考据锚定，并在
    _derivation_note 追加 [考据锚定] 段（含 magnitude/sign/citation）供审计。
    v0.218：events 并入年份池（县级场景年份来自 events.json）。
    """
    scenario_type = derive_scenario_type(assertions)
    dim_targets = derive_dim_targets(assertions)
    branches, real_branch = derive_branches(assertions, scenario_type, scene_id)
    sy, ey = derive_year_span(assertions, events)
    if sy is None:
        sy, ey = -200, -100
    sign = _direction_sign(assertions)
    pos_w, neg_w = _evidence_weights(assertions)
    strength = _evidence_strength(assertions)
    ysrc = "events.json 事件年" if (sy is not None and not any(_year_of(a) is not None for a in assertions)) else "断言 time 字段"
    note = ("G1 自动派生（零手 authoring）。scenario_type 由 dims 分布推导；"
            "年份跨度 %d–%d 取自%s（县级场景断言常无 time 字段，v0.218 起并入 events.json 事件年，"
            "杜绝 -200/-100 假年份）；"
            "base_rate 方向由 POS/NEG 关键词 confidence 加权净差推定（pos=%.2f neg=%.2f sign=%d），"
            "幅度由证据强度 strength=%.2f 驱动（magnitude=0.015+strength*0.045，封顶 0.06）；"
            "whatif 取反向并阻尼 0.7。places 不杜撰几何（已有坐标则保留真实定位，否则判抽象世界）。"
            % (sy, ey, ysrc, pos_w, neg_w, sign, strength))
    anchor = BASE_RATE_ANCHORS.get(scene_id) if scene_id else None
    if anchor:
        note += (" [考据锚定] scene=%s：magnitude=%.3f sign=%d —— %s"
                 % (scene_id, float(anchor.get("magnitude", 0.0)), int(anchor.get("sign", 1)),
                    anchor.get("citation", "")))
    cfg = {
        "_comment": "G1 自动派生反事实配置（tools/derivation/derive_sim_config.py）",
        "_auto_derived": True,
        "_derivation_note": note,
        "scenario_type": scenario_type,
        "dim_targets": dim_targets,
        "start_year": sy,
        "end_year": ey,
        "real_branch": real_branch,
        "branches": branches,
    }
    return cfg


def derive_all(scene_dir, assertions=None, write_sources=True):
    """在 scene_dir 写入 places.json / control.json / sim_config.json（必要时 sources.json）。

    返回 (places, control, sim_config)。
    """
    if assertions is None:
        assertions = load_assertions(os.path.join(scene_dir, "assertions.jsonl"))
    events = load_events(scene_dir)
    places = derive_places(assertions, scene_dir=scene_dir)
    sy, ey = derive_year_span(assertions, events)
    s = sy if sy is not None else -200
    e = ey if ey is not None else -100
    control = derive_control(assertions, start=s, end=e, scene_dir=scene_dir, events=events)
    scene_id = os.path.basename(scene_dir.rstrip(os.sep)) if scene_dir else None
    sim_config = derive_config(assertions, scene_id, events=events)

    _dump(os.path.join(scene_dir, "places.json"), places)
    _dump(os.path.join(scene_dir, "control.json"), control)
    _dump(os.path.join(scene_dir, "sim_config.json"), sim_config)

    if write_sources:
        sp = os.path.join(scene_dir, "sources.json")
        if not os.path.exists(sp):
            src_ids = []
            for a in assertions:
                s_id = a.get("source")
                if isinstance(s_id, str) and s_id and s_id not in src_ids:
                    src_ids.append(s_id)
            if not src_ids:
                src_ids = ["synthesis"]
            srcs = [{
                "id": sid,
                "title": "%s·综合史料" % sid,
                "party": DEFAULT_PARTY,
                "availability": "not_free",
                "bias_note": "G1 自动派生：source 由断言 source 字段汇总，party 归综合史料桶。",
                "distance_label": "综合诸家记述（派生占位）",
            } for sid in src_ids]
            _dump(sp, {"sources": srcs})
    return places, control, sim_config


def _dump(path, obj):
    with open(path, "w", encoding="utf-8", newline="") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
        f.write("\n")


def _run_sim(scene, cfg, branches):
    """跑真实推演（simulate.py 非军事路径），产出 state_hist + branch_events。"""
    st = cfg.get("scenario_type", "reform")
    sy, ey = cfg["start_year"], cfg["end_year"]
    for br in branches:
        bid = br["id"]
        cmd = [sys.executable, SIM_PY, "--scene", scene, "--branch", bid,
               "--years", str(sy), str(ey), "--scenario-type", st]
        print("[derive] 跑推演 %s · %s · %d-%d" % (scene, bid, sy, ey))
        rc = subprocess.call(cmd, cwd=ROOT)
        if rc != 0:
            print("[derive][WARN] simulate.py 分支 %s 返回 %d" % (bid, rc))


def main():
    ap = argparse.ArgumentParser(description="G1 反事实配置自动派生（v0.125）")
    ap.add_argument("--scene", help="场景 id（data/<scene>/ 目录）")
    ap.add_argument("--assertions", help="断言 jsonl 路径（缺省 data/<scene>/assertions.jsonl）")
    ap.add_argument("--out", help="输出目录（缺省 data/<scene>/）")
    ap.add_argument("--run", action="store_true", help="派生后跑 simulate.py 产出六维时序+Branch Event")
    ap.add_argument("--dry-run", action="store_true", help="只打印派生结果，不写文件")
    args = ap.parse_args()

    if args.assertions:
        a_path = args.assertions
        scene_dir = args.out or os.path.dirname(os.path.abspath(a_path))
    elif args.scene:
        a_path = os.path.join(DATA, args.scene, "assertions.jsonl")
        scene_dir = args.out or os.path.join(DATA, args.scene)
    else:
        print("错误：--scene 或 --assertions 至少给一个")
        return 2

    if not os.path.exists(a_path):
        print("错误：断言文件不存在 %s" % a_path)
        return 2

    assertions = load_assertions(a_path)
    events = load_events(scene_dir)
    cfg = derive_config(assertions, args.scene, events)
    print("== G1 派生 sim_config ==")
    print(json.dumps(cfg, ensure_ascii=False, indent=2))

    if args.dry_run:
        return 0

    os.makedirs(scene_dir, exist_ok=True)
    places, control, sim_config = derive_all(scene_dir, assertions=assertions)
    print("[derive] 写出 places/control/sim_config → %s" % scene_dir)

    if args.run:
        if not args.scene:
            print("[derive][WARN] --run 需要 --scene（simulate.py 按场景读 sim_config）")
        else:
            _run_sim(args.scene, sim_config, sim_config["branches"])
    return 0


if __name__ == "__main__":
    sys.exit(main())
