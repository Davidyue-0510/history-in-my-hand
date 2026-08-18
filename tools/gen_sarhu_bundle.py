#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成萨尔浒模拟场景数据桥（SIM_DATA_SARHU）。

输入：
  data/sarhu/control.json  —— 萨尔浒战略控制点(经纬度) + 1618-1619 控制权
  data/sarhu/persons.json  —— 真实人物(含 faction 派系)
输出：
  demo/sim_data_sarhu.js   —— window.SIM_DATA_SARHU（file:// 安全，脚本标签注入）

与 gen_sim_bundle.py 同构，仅改名空间与路径；验证零侵入辽东现有产物。
"""
import json, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CTRL = os.path.join(ROOT, "data", "sarhu", "control.json")
PERSONS = os.path.join(ROOT, "data", "sarhu", "persons.json")
OUT = os.path.join(ROOT, "demo", "sim_data_sarhu.js")

# 单一真值：control_layer.js partyColor（与辽东同构）
PARTY_COLORS = {
    "明方": [197, 90, 70],
    "清方": [67, 122, 91],
    "contested": [128, 122, 112],
}

def main():
    ctrl = json.load(open(CTRL, encoding="utf-8"))
    seats = ctrl["seats"]
    control = ctrl["control"]
    years = ctrl["years"]
    start_year, end_year = years[0], years[-1]
    meta = ctrl.get("meta", {})

    # 经纬度 -> 归一化 0..1（北在上）
    lons = [s["lon"] for s in seats]
    lats = [s["lat"] for s in seats]
    lon_min, lon_max = min(lons), max(lons)
    lat_min, lat_max = min(lats), max(lats)
    lon_span = (lon_max - lon_min) or 1
    lat_span = (lat_max - lat_min) or 1
    lat_mid = (lat_min + lat_max) / 2
    cos_mid = math.cos(math.radians(lat_mid))

    norm_seats = []
    for s in seats:
        lon_n = (s["lon"] - lon_min) / lon_span
        lat_n = (s["lat"] - lat_min) / lat_span
        x = lon_n * cos_mid
        y = 1.0 - lat_n
        norm_seats.append({
            "id": s["place_id"],
            "name": s["name"],
            "lon": s["lon"], "lat": s["lat"],
            "x": round(x, 4), "y": round(y, 4),
        })
    seat_by_id = {s["id"]: s for s in norm_seats}

    # 每处控制区间按 start 排序
    by_place = {}
    for c in control:
        by_place.setdefault(c["place_id"], []).append(c)
    for pid in by_place:
        by_place[pid].sort(key=lambda c: c["start"])

    start_control, terminal_real = {}, {}
    transitions = []
    for pid, segs in by_place.items():
        if not segs:
            continue
        first = segs[0]
        start_control[pid] = first["party"]
        last = segs[-1]
        terminal_real[pid] = last["party"]
        for i in range(len(segs) - 1):
            a, b = segs[i], segs[i + 1]
            if a["party"] != b["party"]:
                transitions.append({
                    "year": b["start"],
                    "place_id": pid,
                    "from": a["party"],
                    "to": b["party"],
                })
    transitions.sort(key=lambda t: (t["year"], t["place_id"]))

    # 真实人物（派系面板，维度 #3）
    persons = []
    if os.path.exists(PERSONS):
        pj = json.load(open(PERSONS, encoding="utf-8"))
        plist = pj.get("persons", pj if isinstance(pj, list) else [])
        for p in plist:
            persons.append({
                "id": p.get("id"), "name": p.get("name"),
                "side": p.get("side"), "faction": p.get("faction"),
                "role": p.get("role") or p.get("role_hint"),
                "perspective": p.get("perspective"),
            })

    bundle = {
        "meta": {
            "title": meta.get("title", "萨尔浒之战 实控演变（史实锚定）"),
            "startYear": start_year, "endYear": end_year,
            "source": meta.get("source", "data/sarhu/control.json"),
            "mechanism": meta.get("mechanism", "每条史实征服按参数'是否成功施加'；默认=精确重放史实，调参=反事实偏离"),
        },
        "partyColors": PARTY_COLORS,
        "seats": norm_seats,
        "startControl": start_control,
        "terminalReal": terminal_real,
        "transitions": transitions,
        "persons": persons,
    }

    js = "// 自动生成，勿手改；改 tools/gen_sarhu_bundle.py 后重跑。\n"
    js += "window.SIM_DATA_SARHU = " + json.dumps(bundle, ensure_ascii=False, indent=1) + ";\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"✓ 生成 {OUT}")
    print(f"  seats={len(norm_seats)} transitions={len(transitions)} "
          f"persons={len(persons)} years={start_year}-{end_year}")
    miss = [s["id"] for s in norm_seats if s["id"] not in start_control or s["id"] not in terminal_real]
    if miss:
        print(f"  ⚠ 缺失起止态: {miss}")
    else:
        print("  ✓ 起止态完整覆盖全部控制点")


if __name__ == "__main__":
    main()
