# -*- coding: utf-8 -*-
"""
把 data/ 下的权威数据编译成 demo 可直接加载的 data.js。

设计要点：
    冲突不是手工标注的。凡是 (subject, predicate) 相同而值不同的断言，
    自动聚合成一个「冲突组」。录入者只需忠实记录各版本说了什么，
    矛盾会自己浮现 —— 这是本项目与所有历史可视化产品的分界线。

    v0.5 起，场景不再硬编码在本文件里。切片注册表是 data/scenes.json，
    本文件只负责遍历它。新增一个县 = 建 data/<dir>/ 六件套 + 注册表加一条，
    build.py / lint.py / resonance.py / hub.js 全部零改动。

    地形网格与江河边墙是「单一真相」，不随场景复制。

用法：
    python tools/build.py
"""
import json
import os
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")
OUT = os.path.join(ROOT, "demo", "data.js")
TERRAIN = os.path.join(DATA, "terrain", "liaodong_grid.json")
VOCAB = os.path.join(DATA, "vocab.json")
REGISTRY = os.path.join(DATA, "scenes.json")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

# meta 里属于「配置」而非「内容」的键，不需要原样带进 bundle.meta 的字段
_REGISTRY_ONLY = {"dir", "extra_files"}


def load_registry():
    """读取切片注册表，补全缺省字段。其他工具（lint / resonance）也调用本函数，
    以保证「有哪些切片」这个问题在全项目只有一个答案。"""
    with open(REGISTRY, "r", encoding="utf-8") as f:
        reg = json.load(f)
    scenes = reg["scenes"]
    order = reg.get("order") or list(scenes.keys())
    # 注册表里写了但 order 漏掉的，追加在末尾——不静默丢弃
    for k in scenes:
        if k not in order:
            order.append(k)
    resolved = []
    for key in order:
        sc = scenes.get(key)
        if sc is None:
            print("  ! 注册表 order 中的 '%s' 没有对应的 scenes 条目，跳过" % key)
            continue
        sc = dict(sc)
        sc.setdefault("dir", key)
        sc.setdefault("kind", "county")
        sc.setdefault("extra_files", ["events", "edges"])
        if "page" not in sc:
            sc["page"] = ("%s.html" % key) if sc["kind"] == "battle" \
                else ("county.html?scene=%s" % key)
        sc["_key"] = key
        resolved.append(sc)
    reg["_resolved"] = resolved
    return reg


def scene_dir(sc):
    return os.path.join(DATA, sc["dir"])


def load_json(dirpath, name):
    with open(os.path.join(dirpath, name), "r", encoding="utf-8") as f:
        return json.load(f)


def load_jsonl(dirpath, name):
    rows = []
    with open(os.path.join(dirpath, name), "r", encoding="utf-8") as f:
        for lineno, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith("//"):
                continue
            try:
                rows.append(json.loads(line))
            except json.JSONDecodeError as e:
                sys.exit("%s/assertions.jsonl 第 %d 行解析失败: %s" % (dirpath, lineno, e))
    return rows


def build_conflicts(assertions):
    """按 (subject, predicate) 聚合，值不唯一者即为冲突组。"""
    groups = defaultdict(list)
    for a in assertions:
        if a.get("layer") == "gap":
            continue
        groups[(a["subject"], a["predicate"])].append(a)

    conflicts = []
    for (subject, predicate), items in groups.items():
        values = {str(i.get("value", i.get("value_text", ""))) for i in items}
        if len(values) <= 1:
            continue

        layers = {i.get("layer") for i in items}
        if layers == {"scholarship"}:
            kind = "scholarly_divergence"
        elif "record" in layers and "scholarship" in layers:
            kind = "record_vs_scholarship"
        else:
            kind = "record_vs_record"

        spread = None
        nums = [i["value"] for i in items if isinstance(i.get("value"), (int, float))]
        if len(nums) >= 2 and min(nums) > 0:
            spread = round(max(nums) / min(nums), 2)

        # 冲突 id 由 (subject, predicate) 派生而非自增——这样同一处冲突在多次
        # 重建之间保持稳定，可以被外部引用、被 lint 追踪、被 URL 深链。
        cid = "cf:%s|%s" % (subject, predicate)

        conflicts.append({
            "id": cid,
            "subject": subject,
            "predicate": predicate,
            "kind": kind,
            "count": len(items),
            "spread": spread,
            "assertion_ids": [i["id"] for i in items],
        })

    conflicts.sort(key=lambda c: (c["spread"] or 0), reverse=True)
    return conflicts


def build_scene(sc):
    """构建单个场景包（不含地形——地形在所有场景间共享）。"""
    dirpath = scene_dir(sc)
    sources = load_json(dirpath, "sources.json")
    places = load_json(dirpath, "places.json")
    persons = load_json(dirpath, "persons.json")
    assertions = load_jsonl(dirpath, "assertions.jsonl")

    src_by_id = {s["id"]: s for s in sources["sources"]}
    for a in assertions:
        s = src_by_id.get(a["source"])
        a["_party"] = s["party"] if s else "unknown"

    meta = {k: v for k, v in sc.items()
            if k not in _REGISTRY_ONLY and not k.startswith("_")}
    meta["key"] = sc["_key"]

    bundle = {
        "meta": meta,
        "sources": sources["sources"],
        "places": places["places"],
        "persons": persons["persons"],
        "assertions": assertions,
        "conflicts": build_conflicts(assertions),
        "gaps": [a["id"] for a in assertions if a.get("layer") == "gap"],
    }

    # 额外文件：约定 <name>.json 的顶层键就叫 <name>，直接摊平到 bundle。
    # 顶层键不同名的（routes 里还带 timeline、route_kaiyuan 里带 report/verdict）
    # 在下面的 hook 里处理——这些是切片的特有结构，不是通例。
    raw = {}
    for f in sc["extra_files"]:
        raw[f] = load_json(dirpath, f + ".json")
        if f in raw[f]:
            bundle[f] = raw[f][f]

    # 战役切片的行军路线
    if "routes" in raw:
        bundle["timeline"] = raw["routes"].get("timeline", [])
        bundle["columns"] = persons.get("columns", [])
    if "engagements" in raw:
        bundle["attrition"] = raw["engagements"].get("attrition")
        bundle["fatigue_weight"] = raw["engagements"].get("fatigue_weight")
    # 县级切片的单条进军路线（文件名 route_<key>.json）
    for f in sc["extra_files"]:
        if f.startswith("route_"):
            bundle["route"] = raw[f].get("route")
            bundle["route_report"] = raw[f].get("report")
            bundle["route_verdict"] = raw[f].get("verdict")

    bundle.setdefault("events", [])
    bundle.setdefault("edges", [])
    return bundle


def load_terrain_grid():
    if not os.path.exists(TERRAIN):
        print("  ! 未找到高程网格，跳过地形层。先运行 tools/fetch_terrain.py")
        return None, None
    import terrain_model
    terr = terrain_model.Terrain(TERRAIN)
    grid = {
        "lon0": terr.lon0, "lat0": terr.lat0, "step": terr.step,
        "nx": terr.nx, "ny": terr.ny,
        "elev": [int(e) if e is not None else 0 for e in terr.elev],
        "source": terr.meta.get("_source"),
        "source_url": terr.meta.get("_source_url"),
        "min": terr.meta.get("min"), "max": terr.meta.get("max"),
    }
    return terr, grid


def main():
    reg = load_registry()
    resolved = reg["_resolved"]

    sd = {
        "meta": {
            "project": "小菜狗的文明图景 / Vege-civilization",
            "slice": "multi-scene · %d 个切片" % len(resolved),
            "note": "所有引文均标注 quote_status，未经点校本逐字核对者标记为 paraphrase_unverified。",
        },
        "regions": reg.get("regions", []),
        "scene_order": [sc["_key"] for sc in resolved],
    }

    # 共享受控词表（立场派生规则的单一真值，见 data/vocab.json）
    with open(VOCAB, "r", encoding="utf-8") as f:
        vocab = json.load(f)
    sd["vocab"] = {k: v for k, v in vocab.items() if not k.startswith("_")}

    # 共享地形
    terr, grid = load_terrain_grid()
    sd["terrain"] = grid

    # 共享江河 / 边墙（取自萨尔浒片层的辽东风土，投影范围一致，各县在其内）
    sarhu_places = load_json(os.path.join(DATA, "sarhu"), "places.json")
    sd["rivers"] = sarhu_places["rivers"]
    sd["wall"] = sarhu_places["wall"]

    scenes = {}
    for sc in resolved:
        bundle = build_scene(sc)
        if terr:
            for p in bundle["places"]:
                p["elev"] = round(terr.at(p["lon"], p["lat"]))
        scenes[sc["_key"]] = bundle

    # 萨尔浒行军地形代价（只有带 routes 的切片才有）
    if terr:
        import terrain_model
        for key, bundle in scenes.items():
            if not bundle.get("routes"):
                continue
            pmap = {p["id"]: p for p in bundle["places"]}
            bundle["route_terrain"] = [
                terrain_model.analyze_route(terr, r, pmap) for r in bundle["routes"]
            ]

    sd["scenes"] = scenes

    # 走廊路线（跨切片，读 data/corridors.json）
    corr_path = os.path.join(DATA, "corridors.json")
    if os.path.exists(corr_path):
        with open(corr_path, encoding="utf-8") as f:
            sd["corridors"] = json.load(f).get("corridors", [])
    else:
        sd["corridors"] = []

    # 研究线索（由 tools/leads.py 从 gap 断言生成）
    leads_path = os.path.join(DATA, "leads.json")
    if os.path.exists(leads_path):
        with open(leads_path, encoding="utf-8") as f:
            sd["leads"] = json.load(f)
    else:
        sd["leads"] = {"leads": []}

    # 共振报告（hub 页面用）—— 与 tools/resonance.py 的输出同步
    rp = os.path.join(DATA, "resonance_report.json")
    if os.path.exists(rp):
        with open(rp, encoding="utf-8") as f:
            sd["resonance"] = json.load(f)
    else:
        sd["resonance"] = {"scene_summary": [], "events": []}

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("// 本文件由 tools/build.py 自动生成，请勿手工编辑。\n")
        f.write("// 权威数据源：data/scenes.json 注册的 %d 个切片\n" % len(resolved))
        f.write("window.SANDBOX_DATA = ")
        json.dump(sd, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    size_kb = os.path.getsize(OUT) / 1024.0
    print("已生成 %s  (%.0f KB)" % (OUT, size_kb))
    tot = defaultdict(int)
    for sc in resolved:
        b = scenes[sc["_key"]]
        n = (len(b["sources"]), len(b["places"]), len(b["persons"]),
             len(b["assertions"]), len(b["conflicts"]), len(b["gaps"]))
        for i, k in enumerate(("src", "place", "person", "assert", "conflict", "gap")):
            tot[k] += n[i]
        print("  · %-10s 史料 %2d / 地名 %2d / 人物 %2d / 断言 %3d / 冲突 %2d / 缺口 %2d"
              % ((sc.get("title", sc["_key"]),) + n))
    print("  ── 合计：史料 %d / 地名 %d / 人物 %d / 断言 %d / 冲突 %d / 缺口 %d"
          % (tot["src"], tot["place"], tot["person"],
             tot["assert"], tot["conflict"], tot["gap"]))

    # 地形代价报告
    for key, b in scenes.items():
        if not b.get("route_terrain"):
            continue
        print("\n  %s · 行军地形代价（模型日数 / 史料日数 = 紧张度）：" % key)
        for t in b["route_terrain"]:
            strain = t["strain"]
            flag = ""
            if strain is not None:
                if strain > 1.35:
                    flag = "  ← 史料所记速度快于模型，值得复查"
                elif strain < 0.5:
                    flag = "  ← 远慢于地形所允许"
            print("    %-12s %5.0f 里  爬升 %5d m  模型 %4.1f 日 / 史料 %s 日  紧张度 %s%s"
                  % (t["route"], t["total_li"], t["total_ascent_m"],
                     t["model_days"], t["reported_days"],
                     ("%.2f" % strain) if strain else "-", flag))


if __name__ == "__main__":
    main()
