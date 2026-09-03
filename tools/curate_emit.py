#!/usr/bin/env python3
"""curate_emit.py — LLM --emit 产物的人工校订清单生成器（v0.89 校订门禁）。

用途：北极星②「任意文字→生成世界」的闭环里，LLM --emit 抽的是史料层
（persons/events/places/edges/assertions），assemble_from_emit 原样透传落成 curated，
**不二次 LLM、不核实引文、自动 control 把所有 places 归主方**。所以 emit 产物在
`--from-json` 落地前/后都必须人工校订。本脚本把「人工校订」变成客观可执行的 checklist：
自动揪出诚实边界/六维契约/引用闭合/地理编码/控制层拆分里的待核项，分级输出。

两级：
  BLOCK  落地前必须解决（否则污染 curated / gates 不过 / 假绿）
  WARN   应人工核对（引文真实性、维度兜底、冲突裁决）

输入：
  python tools/curate_emit.py <emit.json>            分析 emit 史料层快照
  python tools/curate_emit.py --scene <scene_id>     分析已落地场景 data/<id>/
        （读 assertions.jsonl + control.json + vocab.json，重点查 auto-control 未拆）

零依赖（仅标准库），只读不写。不调 LLM、不联网。
"""
import json
import sys
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), ".."))
VALID_DIMS = set(range(1, 7))


def _load_emit(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def _load_scene(scene_id):
    d = os.path.join(ROOT, "data", scene_id)
    emit = {"meta": {"id": scene_id, "sources": []}, "persons": [], "events": [],
            "places": [], "edges": [], "assertions": []}
    aj = os.path.join(d, "assertions.jsonl")
    if os.path.exists(aj):
        with open(aj, encoding="utf-8") as f:
            emit["assertions"] = [json.loads(l) for l in f if l.strip()]
    for key, fn in (("persons", "persons.json"), ("events", "events.json"),
                    ("places", "places.json"), ("edges", "edges.json")):
        p = os.path.join(d, fn)
        if os.path.exists(p):
            emit[key] = json.load(open(p, encoding="utf-8")).get(key, [])
    cv = os.path.join(d, "vocab.json")
    if os.path.exists(cv):
        emit["meta"]["sources"] = [{"party": x}
                                    for x in json.load(open(cv, encoding="utf-8")).get("parties", [])]
    emit["_control"] = json.load(open(os.path.join(d, "control.json"), encoding="utf-8")) \
        if os.path.exists(os.path.join(d, "control.json")) else None
    return emit


def analyze(emit):
    issues = []  # (level, code, where, msg)

    def add(level, code, where, msg):
        issues.append((level, code, where, msg))

    meta = emit.get("meta", {})
    sources = meta.get("sources", [])
    parties = [s.get("party", "unknown") for s in sources]
    assertions = emit.get("assertions", [])
    ev_ids = {e.get("id") for e in emit.get("events", [])}
    p_ids = {p.get("id") for p in emit.get("persons", [])}
    pl_ids = {p.get("id") for p in emit.get("places", [])}

    # ── 1. 断言层：引文真实性（诚实边界核心）──
    for a in assertions:
        aid = a.get("id", "?")
        qs = a.get("quote_status")
        q = (a.get("quote") or "").strip()
        layer = a.get("layer")
        if qs == "generated":
            if layer == "gap":
                add("INFO", "QUOTE_GAP", aid,
                    "gap 层 generated 为诚实缺口表达（无引文可核），可接受；保留 note 说明缺口来源")
            else:
                add("BLOCK", "QUOTE_GEN", aid,
                    "quote_status=generated（LLM 生成/未核实引文），严禁入库；须替换 verbatim 或标 paraphrase_unverified+真实出处")
        elif layer != "gap" and not q:
            add("WARN", "QUOTE_EMPTY", aid, "缺引文且非 gap 层；须补真实引文或明确标 gap")
        elif qs == "paraphrase_unverified":
            add("WARN", "QUOTE_UNVERIFIED", aid, "转述待核；落地前核为 verbatim 或保留待核并附出处")

    # ── 2. 断言层：立场桶合法性（v0.87 派系暗病相关）──
    for a in assertions:
        aid = a.get("id", "?")
        party = a.get("_source_party") or a.get("source_party")
        if parties and party is not None and party not in parties:
            add("BLOCK", "PARTY_ILL", aid,
                "立场桶 %r 不在来源 party 列表 %r；综述来源不得伪造对立阵营（共方/国方等），核对 LLM 是否编造" % (party, parties))

    # ── 3. 断言层：六维契约 ──
    for a in assertions:
        aid = a.get("id", "?")
        dims = a.get("dims")
        if not isinstance(dims, list) or not dims:
            add("BLOCK", "DIMS_MISS", aid, "缺 dims（六维必填）")
        else:
            bad = [d for d in dims if not isinstance(d, int) or d not in VALID_DIMS]
            if bad:
                add("BLOCK", "DIMS_BAD", aid, "非法 dims %r（须 1..6）" % bad)
            if dims == [6]:
                add("WARN", "DIMS_FALLBACK", aid, "dims=[6] 为 conform 兜底（词表无命中），须人工确认真实维度")

    # ── 4. 断言层：subject 引用闭合 ──
    for a in assertions:
        aid = a.get("id", "?")
        subj = a.get("subject", "")
        if subj.startswith("event:"):
            sid = subj[6:]
            if sid not in ev_ids and ("ev_" + sid) not in ev_ids:
                add("BLOCK", "REF_BRK", aid, "subject 引用断裂：%s 无对应事件（含 ev_ 前缀）" % subj)
        elif subj.startswith("person:") and subj[7:] not in p_ids:
            add("BLOCK", "REF_BRK", aid, "subject 引用断裂：%s 无对应人物" % subj)
        elif subj.startswith("place:") and subj[6:] not in pl_ids:
            add("BLOCK", "REF_BRK", aid, "subject 引用断裂：%s 无对应地点" % subj)

    # ── 5. id 唯一性 ──
    for key in ("persons", "events", "places"):
        ids = [x.get("id") for x in emit.get(key, [])]
        dups = {x for x in ids if ids.count(x) > 1}
        for d in sorted(dups):
            add("BLOCK", "ID_DUP", key, "重复 id %r" % d)

    # ── 6. edges 引用闭合 ──
    valid_ref = ev_ids | pl_ids | p_ids
    for e in emit.get("edges", []):
        for ep in ("from", "to"):
            if e.get(ep) not in valid_ref:
                add("BLOCK", "EDGE_REF", "edges", "edge %r 引用断裂：%s=%r" % (e.get("id", "?"), ep, e.get(ep)))

    # ── 7. 地理编码（emit 阶段缺坐标是正常的，assemble 才 geocode；scene 模式则必须存在）──
    seen = {}
    for p in emit.get("places", []):
        lat = p.get("lat")
        lng = p.get("lng") if p.get("lng") is not None else p.get("lon")
        if lat is None or lng is None or (lat == 0 and lng == 0):
            add("INFO", "GEO_TODO", p.get("id", "?"),
                "缺坐标；--from-json 时 geocode 处理，核对未命中（虚拟地名须标 OFF_GRID）")
        else:
            c = (round(lat, 3), round(lng, 3))
            if c in seen:
                add("WARN", "GEO_DUP", p.get("id", "?"),
                    "与 %r 同坐标，Voronoi 退化，须排除其一" % seen[c])
            seen[c] = p.get("id")

    # ── 8. 控制层（emit 无 control；scene 模式查 auto-control 未拆）──
    ctrl = emit.get("_control")
    if ctrl is not None:
        segs = ctrl.get("control", [])
        seg_parties = {s.get("party") for s in segs}
        if len(seg_parties) <= 1:
            add("BLOCK", "CTRL_AUTO", "control.json",
                "所有控制段 party 单一（auto-control 特征）；须人工拆成真实多方态势（参考 song_chan_yuan/control.json 诚实处理）")
    else:
        add("WARN", "CTRL_MISS", "control.json",
            "emit 不含控制层；--from-json 会生成 auto-control（全归主方），须人工补真实多方控制")

    # ── 9. 多源冲突 ──
    if emit.get("_cross_conflicts"):
        add("WARN", "XCONF", "multi", "存在跨源冲突标注，须人工裁决（保留双方 vs 一方错），不删来源")

    return issues


def report(emit, issues, src_label):
    blocks = [i for i in issues if i[0] == "BLOCK"]
    warns = [i for i in issues if i[0] == "WARN"]
    infos = [i for i in issues if i[0] == "INFO"]
    n_ass = len(emit.get("assertions", []))
    print("=" * 64)
    print("人工校订清单 | %s" % src_label)
    print("  断言 %d / 事件 %d / 地 %d / 边 %d" % (
        n_ass, len(emit.get("events", [])), len(emit.get("places", [])),
        len(emit.get("edges", []))))
    print("  BLOCK %d | WARN %d | INFO %d" % (len(blocks), len(warns), len(infos)))
    print("=" * 64)
    if blocks:
        print("\n[BLOCK] 落地前必须解决：")
        for lv, code, where, msg in blocks:
            print("  - [%s] %s : %s" % (code, where, msg))
    if warns:
        print("\n[WARN] 应人工核对：")
        for lv, code, where, msg in warns:
            print("  - [%s] %s : %s" % (code, where, msg))
    if infos:
        print("\n[INFO] 提示：")
        for lv, code, where, msg in infos:
            print("  - [%s] %s : %s" % (code, where, msg))
    print("\n[结论] %s" % (
        "有 BLOCK 项，须校订后 --from-json + gates 才能落地"
        if blocks else "无 BLOCK 项，史料层可落地；仍建议过 WARN 项"))
    return 1 if blocks else 0


def main():
    args = sys.argv[1:]
    if not args or args[0] in ("-h", "--help"):
        print(__doc__)
        return 0
    if args[0] == "--scene":
        if len(args) < 2:
            print("[FAIL] --scene 需要 scene_id"); return 2
        emit = _load_scene(args[1])
        return report(emit, analyze(emit), "scene:%s" % args[1])
    path = args[0]
    if not os.path.exists(path):
        print("[FAIL] 文件不存在: %s" % path); return 2
    emit = _load_emit(path)
    return report(emit, analyze(emit), path)


if __name__ == "__main__":
    sys.exit(main())
