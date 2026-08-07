#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
tools/ingest.py —— 文字资料 → 结构化「世界」的导入管线（北极星(2) 工程骨架）

设计原则
--------
- **抽取智能 与 装配 解耦**。本脚本只负责确定性、可复用的部分：
  切分、装配八件套、per-world vocab 注入、scenes.json 注册、四闸门校验。
  它不替你做文学理解。「抽取智能」以 *spec* 为中间格式，可由
  人工 / LLM-API / 本脚本的 `parse` 启发式预抽取提供。
- **虚构 world 走 kind:"fiction"**：无真实坐标、立场派生于来源、豁免 W04/W06 与共振。
- 所有产物过 `gates.py --strict`，保证不破坏既有数据（fail-fast）。

子命令
------
  parse     <txt>  [--id ID] [--out DIR]
            启发式预抽取（章节切分 / 候选人名 / 引文样本）→ <DIR>/_extract.json
            产物是「脚手架」，请人工或 LLM 据此补全 spec。

  assemble  <spec.json> [--no-gates]
            spec → data/<id>/ 八件套 + scenes.json 注册 + 跑闸门校验。
            这是本脚本的主入口：把一份结构化抽取变成可上线、过闸门的 world。

  validate  <world_id>
            仅对已有 world 重跑 lint + build（不重新生成文件）。

spec.json 结构（顶层字段）
-------------------------
  world_id, title, subtitle, kind(默认 fiction), region(默认 fiction),
  primary_place, fictional(默认 true), lead, parties_note?, subject_names?,
  vocab {parties:[...], party_bucket:{party:bucket}, edge_types?:[{k,name,color,dash}]},
  sources:[{id,title,party}],
  places:[{id,name,fictional:true}],
  persons:[{id,name,desc?}],
  events:[{id,subject,title,year?,summary?}],
  edges:[{from,to,relation?,type?,label?,note?}],
    # 边类型 per-world（docs/03 §3）：辽东用 mashi/tribe/mil/admin；
    # 小说等 world 用自己的（亲子/夫妻/情感/敌对/委托…）。也可在顶层写 edge_types 自动并入 vocab。
    # 每条边可带 type+label；缺省由 relation/rel 推 label、type 回退 'misc'。
  timeline:[{id,t,subject,label,branch?:false,note?}],
  assertions:[ <断言记录，逐行等价 assertions.jsonl> ],
  sim_config? (缺省用 M6 占位)
"""
import argparse
import json
import os
import re
import subprocess
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
DATA = os.path.join(ROOT, "data")
SCENES = os.path.join(DATA, "scenes.json")

try:
    sys.stdout.reconfigure(encoding="utf-8")
except Exception:
    pass


def _log(msg):
    print(msg)


def _load_json(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def _write_json(path, obj):
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, ensure_ascii=False, indent=2)
        f.write("\n")


# ───────────────────────── parse（启发式预抽取） ─────────────────────────
SPEECH_VERBS = "说说道问道骂喊叫想着看叹嘆念称呼喝吼"
QUOTE_PAIRS = [("“", "”"), ("「", "」"), ("『", "』"), ("‘", "’")]
CN_NUM = "零一二三四五六七八九十百千"
STOP_NAME = set("他她们你我自各其这那什么怎么为何如何此彼谁哪")


def _read_text(path):
    raw = open(path, "rb").read()
    for enc in ("utf-8", "gb18030", "gbk"):
        try:
            return raw.decode(enc)
        except Exception:
            continue
    return raw.decode("utf-8", errors="replace")


def _chapters(text):
    ms = list(re.finditer(r"第[" + CN_NUM + r"0-9]+章", text))
    out = []
    for i, m in enumerate(ms):
        start = m.start()
        end = ms[i + 1].start() if i + 1 < len(ms) else len(text)
        title = text[m.start():m.start() + 40].split("\n")[0].strip()
        out.append({"index": i + 1, "pos": start, "title": title, "len": end - start})
    return out


def _quoted(text, limit=200):
    out = []
    for o, c in QUOTE_PAIRS:
        for m in re.finditer(re.escape(o) + r"(.+?)" + re.escape(c), text, re.S):
            s = m.group(1).strip().replace("\n", " ")
            if 4 <= len(s) <= 80:
                out.append(s)
            if len(out) >= limit:
                return out
    return out[:limit]


def _candidate_persons(text, top=40):
    pat = re.compile(r"([\u4e00-\u9fa5]{1,3})(?:[" + SPEECH_VERBS + r"])")
    cnt = {}
    for m in pat.finditer(text):
        name = m.group(1)
        if len(name) < 2:
            continue
        if any(ch in STOP_NAME for ch in name):
            continue
        if name in ("自己", "各自", "他人", "别人"):
            continue
        cnt[name] = cnt.get(name, 0) + 1
    return [n for n, _ in sorted(cnt.items(), key=lambda x: -x[1])[:top]]


def cmd_parse(args):
    text = _read_text(args.txt)
    chs = _chapters(text)
    extract = {
        "_comment": "ingest.py parse 启发式预抽取骨架；请人工/LLM 据此补全 spec 后跑 assemble。",
        "source_file": os.path.basename(args.txt),
        "chars": len(text),
        "chapters": chs,
        "candidate_persons": _candidate_persons(text),
        "quoted_samples": _quoted(text),
    }
    out_dir = args.out or os.path.join(DATA, args.id or "novel_unknown")
    os.makedirs(out_dir, exist_ok=True)
    path = os.path.join(out_dir, "_extract.json")
    _write_json(path, extract)
    _log("[PARSE] wrote %s  (%d chapters, %d candidate persons)"
         % (path, len(chs), len(extract["candidate_persons"])))
    return 0


# ───────────────────────── assemble（spec → world） ─────────────────────────
DEFAULT_SIM = {
    "_comment": "M6 占位：演化引擎未建。引擎接口见 docs/03 §6。",
    "engine": "llm-step",
    "mode": "counterfactual",
    "rules": ["branch_on_assertion_conflict", "propagate_family_relations"],
    "entry_event": None,
    "horizon_steps": 20,
    "status": "spec-only",
}


def _assertions_to_jsonl(assertions, path):
    with open(path, "w", encoding="utf-8") as f:
        for a in assertions:
            f.write(json.dumps(a, ensure_ascii=False) + "\n")


def _register_scene(spec):
    sc = _load_json(SCENES)
    wid = spec["world_id"]
    region_id = spec.get("region", "fiction")

    regions = sc.setdefault("regions", [])
    if not any(r["id"] == region_id for r in regions):
        regions.append({
            "id": region_id,
            "name": spec.get("region_name", region_id),
            "note": spec.get("region_note", ""),
        })

    order = sc.setdefault("order", [])
    if wid not in order:
        order.append(wid)

    scenes = sc.setdefault("scenes", {})
    if wid not in scenes:
        entry = {
            "kind": spec.get("kind", "fiction"),
            "region": region_id,
            "title": spec.get("title", wid),
            "dossier_label": spec.get("dossier_label", spec.get("title", wid)),
            "subtitle": spec.get("subtitle", ""),
            "primary_place": spec.get("primary_place"),
            "dossier_event": spec.get("dossier_event"),
            "back": "枢纽",
            "extra_files": spec.get("extra_files", ["events", "edges", "timeline"]),
            "fictional": spec.get("fictional", True),
            "lead": spec.get("lead", ""),
        }
        if spec.get("parties_note"):
            entry["parties_note"] = spec["parties_note"]
        if spec.get("subject_names"):
            entry["subject_names"] = spec["subject_names"]
        scenes[wid] = entry

    _write_json(SCENES, sc)


def cmd_assemble(args):
    spec = _load_json(args.spec)
    wid = spec["world_id"]
    d = os.path.join(DATA, wid)
    os.makedirs(d, exist_ok=True)

    # vocab —— per-world 受控词表（docs/03 §3）。party_bucket 须覆盖 sources 用到的 party。
    # edge_types 支持顶层声明或写进 vocab，二者都会被写入 per-world vocab.json，
    # 供 demo/county.js 的图例/配色按本 world 实际关系类型数据驱动。
    vocab = spec.get("vocab", {"parties": [], "party_bucket": {}})
    if "edge_types" in spec:
        vocab["edge_types"] = spec["edge_types"]
    _write_json(os.path.join(d, "vocab.json"), vocab)
    _write_json(os.path.join(d, "sources.json"), {"sources": spec.get("sources", [])})
    _write_json(os.path.join(d, "places.json"), {"places": spec.get("places", [])})
    _write_json(os.path.join(d, "persons.json"), {"persons": spec.get("persons", [])})
    _write_json(os.path.join(d, "events.json"), {"events": spec.get("events", [])})
    # 边归一化：保证每条边有 label（回退 relation/rel）与 type（回退 'misc'），
    # 与 tools/build.py 的口径一致，demo 不再把 undefined 画上地图。
    edges = []
    for e in spec.get("edges", []):
        e2 = dict(e)
        e2.setdefault("label", e.get("relation") or e.get("rel") or "")
        e2.setdefault("type", "misc")
        edges.append(e2)
    _write_json(os.path.join(d, "edges.json"), {"edges": edges})
    _write_json(os.path.join(d, "timeline.json"), {"timeline": spec.get("timeline", [])})
    _write_json(os.path.join(d, "sim_config.json"), spec.get("sim_config", DEFAULT_SIM))
    _assertions_to_jsonl(spec.get("assertions", []), os.path.join(d, "assertions.jsonl"))

    _register_scene(spec)
    _log("[ASSEMBLE] wrote 8 files to %s" % d)

    if args.no_gates:
        _log("[ASSEMBLE] skipped gates (--no-gates). Remember to run: python tools/gates.py --strict")
        return 0

    r = subprocess.run([sys.executable, os.path.join(HERE, "gates.py"), "--strict"], cwd=ROOT)
    return r.returncode


def cmd_validate(args):
    wid = args.world_id
    d = os.path.join(DATA, wid)
    if not os.path.isdir(d):
        _log("[VALIDATE] no such world dir: %s" % d)
        return 1
    # 仅重跑 lint + build，不重新生成文件
    r1 = subprocess.run([sys.executable, os.path.join(HERE, "lint.py")], cwd=ROOT)
    r2 = subprocess.run([sys.executable, os.path.join(HERE, "build.py")], cwd=ROOT)
    return 1 if (r1.returncode or r2.returncode) else 0


def main():
    ap = argparse.ArgumentParser(description="文字资料 → 结构化世界 的导入管线")
    sub = ap.add_subparsers(dest="cmd", required=True)

    p = sub.add_parser("parse", help="启发式预抽取脚手架")
    p.add_argument("txt", help="小说/文本 txt 路径")
    p.add_argument("--id", help="world_id（决定输出目录名）")
    p.add_argument("--out", help="输出目录（默认 data/<id>）")
    p.set_defaults(func=cmd_parse)

    a = sub.add_parser("assemble", help="spec → 八件套 + 注册 + 闸门")
    a.add_argument("spec", help="spec.json 路径")
    a.add_argument("--no-gates", action="store_true", help="跳过 gates 校验")
    a.set_defaults(func=cmd_assemble)

    v = sub.add_parser("validate", help="对已有 world 重跑 lint+build")
    v.add_argument("world_id")
    v.set_defaults(func=cmd_validate)

    args = ap.parse_args()
    sys.exit(args.func(args))


if __name__ == "__main__":
    main()
