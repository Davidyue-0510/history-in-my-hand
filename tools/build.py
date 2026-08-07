# -*- coding: utf-8 -*-
"""
把 data/ 下的权威数据编译成 demo 可直接加载的 data.js。

设计要点：
    冲突不是手工标注的。凡是 (subject, predicate) 相同而值不同的断言，
    自动聚合成一个「冲突组」。录入者只需忠实记录各版本说了什么，
    矛盾会自己浮现 —— 这是本项目与所有历史可视化产品的分界线。

    多场景：萨尔浒（战役切片）+ 开原（县级 LOD 切片）共用一套地形与江河边墙。
    地形网格与江河边墙是「单一真相」，不随场景复制。

用法：
    python tools/build.py
"""
import json
import os
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SARHU = os.path.join(ROOT, "data", "sarhu")
KAIYUAN = os.path.join(ROOT, "data", "kaiyuan")
TIELING = os.path.join(ROOT, "data", "tieling")
LIAOYANG = os.path.join(ROOT, "data", "liaoyang")
OUT = os.path.join(ROOT, "demo", "data.js")
TERRAIN = os.path.join(ROOT, "data", "terrain", "liaodong_grid.json")
VOCAB = os.path.join(ROOT, "data", "vocab.json")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))


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
                sys.exit("assertions.jsonl 第 %d 行解析失败: %s" % (lineno, e))
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


def build_scene(dirpath, meta, extra_files):
    """构建单个场景包（不含地形——地形在所有场景间共享）。"""
    sources = load_json(dirpath, "sources.json")
    places = load_json(dirpath, "places.json")
    persons = load_json(dirpath, "persons.json")
    assertions = load_jsonl(dirpath, "assertions.jsonl")

    src_by_id = {s["id"]: s for s in sources["sources"]}
    for a in assertions:
        s = src_by_id.get(a["source"])
        a["_party"] = s["party"] if s else "unknown"

    conflicts = build_conflicts(assertions)
    gaps = [a["id"] for a in assertions if a.get("layer") == "gap"]

    bundle = {
        "meta": meta,
        "sources": sources["sources"],
        "places": places["places"],
        "persons": persons["persons"],
        "assertions": assertions,
        "conflicts": conflicts,
        "gaps": gaps,
    }
    bundle["_raw"] = {}
    for f in extra_files:
        bundle["_raw"][f] = load_json(dirpath, f + ".json")
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
    sd = {
        "meta": {
            "project": "小菜狗的文明图景 / Vege-civilization",
            "slice": "multi-scene (sarhu-1619 + kaiyuan / tieling / liaoyang county)",
            "note": "演示切片。所有引文均标注 quote_status，未经点校本逐字核对者标记为 paraphrase_unverified。",
        }
    }

    # 共享受控词表（立场派生规则的单一真值，见 data/vocab.json）
    with open(VOCAB, "r", encoding="utf-8") as f:
        vocab = json.load(f)
    sd["vocab"] = {k: v for k, v in vocab.items() if not k.startswith("_")}

    # 共享地形
    terr, grid = load_terrain_grid()
    sd["terrain"] = grid

    # 共享江河 / 边墙（取自萨尔浒片层的辽东风土，投影范围一致，开原在其内）
    sarhu_places = load_json(SARHU, "places.json")
    sd["rivers"] = sarhu_places["rivers"]
    sd["wall"] = sarhu_places["wall"]

    # ── 场景一：萨尔浒（战役切片）──
    sarhu = build_scene(SARHU, {
        "kind": "battle",
        "title": "萨尔浒之战",
        "dossier_label": "萨尔浒之战",
        "subtitle": "万历四十七年二月—三月 · 天命四年",
        "primary_place": "hetuala",
        "dossier_event": "event:sarhu",
    }, extra_files=["routes", "engagements"])
    # 从 _raw 中提取萨尔浒特有的包装字段
    sarhu["routes"] = sarhu["_raw"]["routes"]["routes"]
    sarhu["timeline"] = sarhu["_raw"]["routes"]["timeline"]
    sarhu["columns"] = load_json(SARHU, "persons.json")["columns"]
    sarhu["engagements"] = sarhu["_raw"]["engagements"]["engagements"]
    sarhu["attrition"] = sarhu["_raw"]["engagements"]["attrition"]
    sarhu["fatigue_weight"] = sarhu["_raw"]["engagements"]["fatigue_weight"]
    del sarhu["_raw"]

    # ── 场景二：开原（县级 LOD 切片）──
    kaiyuan = build_scene(KAIYUAN, {
        "kind": "county",
        "title": "开原",
        "dossier_label": "开原",
        "subtitle": "辽北第一重镇 · 明卫所—清州县 · 万历末陷落",
        "primary_place": "kaiyuan_cheng",
        "dossier_event": "event:kaifa",
    }, extra_files=["events", "edges", "route_kaiyuan"])
    kaiyuan["events"] = kaiyuan["_raw"]["events"]["events"]
    kaiyuan["edges"] = kaiyuan["_raw"]["edges"]["edges"]
    kaiyuan["route"] = kaiyuan["_raw"]["route_kaiyuan"]["route"]
    kaiyuan["route_report"] = kaiyuan["_raw"]["route_kaiyuan"]["report"]
    kaiyuan["route_verdict"] = kaiyuan["_raw"]["route_kaiyuan"].get("verdict")
    del kaiyuan["_raw"]

    # ── 场景三：铁岭（县级 LOD 切片）──
    tieling = build_scene(TIELING, {
        "kind": "county",
        "title": "铁岭",
        "dossier_label": "铁岭",
        "subtitle": "李成梁故里 · 辽东锁钥 · 万历四十七年陷落",
        "primary_place": "tieling_cheng",
        "dossier_event": "event:tieling_fall",
        "back": "萨尔浒",
    }, extra_files=["events", "edges"])
    tieling["events"] = tieling["_raw"]["events"]["events"]
    tieling["edges"] = tieling["_raw"]["edges"]["edges"]
    del tieling["_raw"]

    # ── 场景四：辽阳（县级 LOD 切片）──
    liaoyang = build_scene(LIAOYANG, {
        "kind": "county",
        "title": "辽阳",
        "dossier_label": "辽阳",
        "subtitle": "辽东都司治所 · 东京辽阳府 · 天启元年改运",
        "primary_place": "liaoyang_cheng",
        "dossier_event": "event:liaoyang_fall",
        "back": "萨尔浒",
    }, extra_files=["events", "edges"])
    liaoyang["events"] = liaoyang["_raw"]["events"]["events"]
    liaoyang["edges"] = liaoyang["_raw"]["edges"]["edges"]
    del liaoyang["_raw"]

    # 给每个场景的地名补真实海拔（共享网格）
    if terr:
        for sc in (sarhu, kaiyuan, tieling, liaoyang):
            for p in sc["places"]:
                p["elev"] = round(terr.at(p["lon"], p["lat"]))

    # 萨尔浒行军地形代价（仅该场景有 routes）
    if terr:
        import terrain_model
        sarhu["route_terrain"] = [
            terrain_model.analyze_route(terr, r, {p["id"]: p for p in sarhu["places"]})
            for r in sarhu["routes"]
        ]
    else:
        sarhu["route_terrain"] = []

    sd["scenes"] = {"sarhu": sarhu, "kaiyuan": kaiyuan, "tieling": tieling, "liaoyang": liaoyang}

    # 共振报告（hub 页面用）—— 与 tools/resonance.py 的输出同步
    rp = os.path.join(ROOT, "data", "resonance_report.json")
    if os.path.exists(rp):
        with open(rp, encoding="utf-8") as f:
            sd["resonance"] = json.load(f)
    else:
        sd["resonance"] = {"scene_summary": [], "events": []}

    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("// 本文件由 tools/build.py 自动生成，请勿手工编辑。\n")
        f.write("// 权威数据源：data/sarhu/、data/kaiyuan/、data/tieling/、data/liaoyang/\n")
        f.write("window.SANDBOX_DATA = ")
        json.dump(sd, f, ensure_ascii=False, indent=1)
        f.write(";\n")

    size_kb = os.path.getsize(OUT) / 1024.0
    print("已生成 %s  (%.0f KB)" % (OUT, size_kb))
    for key, sc in (("萨尔浒", sarhu), ("开原", kaiyuan), ("铁岭", tieling), ("辽阳", liaoyang)):
        print("  · %s：史料 %d / 地名 %d / 人物 %d / 断言 %d / 冲突 %d / 缺口 %d"
              % (key, len(sc["sources"]), len(sc["places"]), len(sc["persons"]),
                 len(sc["assertions"]), len(sc["conflicts"]), len(sc["gaps"])))

    # 地形代价报告
    if sarhu["route_terrain"]:
        print("\n  行军地形代价（模型日数 / 史料日数 = 紧张度）：")
        for t in sarhu["route_terrain"]:
            strain = t["strain"]
            flag = ""
            if strain is not None:
                if strain > 1.35:
                    flag = "  ← 史料所记速度快于模型，值得复查"
                elif strain < 0.5:
                    flag = "  ← 远慢于地形所允许"
            print("    %-12s %5.0f 里  爬升 %5d m  模型 %4.1f 日 / 史料 %d 日  紧张度 %s%s"
                  % (t["route"], t["total_li"], t["total_ascent_m"],
                     t["model_days"], t["reported_days"],
                     ("%.2f" % strain) if strain else "-", flag))


if __name__ == "__main__":
    main()
