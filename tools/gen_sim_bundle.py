#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
生成模拟器真实数据桥（阶段1：让模拟器"不悬空"）。

输入：
  data/control_liaodong.json   —— 真实治所(经纬度) + 1616-1644 逐年控制权
  data/sarhu/persons.json       —— 真实人物(含 faction 派系)
输出：
  demo/_sim_liaodong.js         —— window.SIM_DATA（file:// 安全，脚本标签注入，无需 fetch）

设计要点（诚实边界）：
  - 模拟器的"世界" = 真实数据；机制只决定每条史实征服在给定参数下是否"成功施加"。
  - 默认参数 = 精确重放史实（推演==史实，可核验）；调参 = 反事实偏离。
  - 配色沿用 control_layer.js 单一真值，不另起炉灶。
"""
import json, math, os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
CTRL = os.path.join(ROOT, "data", "control_liaodong.json")
PERSONS = os.path.join(ROOT, "data", "sarhu", "persons.json")
OUT = os.path.join(ROOT, "demo", "_sim_liaodong.js")

# 单一真值：control_layer.js partyColor
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
        # x 按纬度余弦压缩，避免横向拉伸失真
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

    # startControl / terminalReal
    start_control, terminal_real = {}, {}
    transitions = []
    for pid, segs in by_place.items():
        if not segs:
            continue
        first = segs[0]
        start_control[pid] = first["party"]
        last = segs[-1]
        terminal_real[pid] = last["party"]
        # 相邻区间变化 = 一次控制权转移
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
            })

    bundle = {
        "meta": {
            "title": "明末辽东—漠南 实控演变（史实锚定）",
            "startYear": start_year, "endYear": end_year,
            "source": "data/control_liaodong.json (社科院近代史所《努尔哈赤与皇太极亡明辨》等)",
            "mechanism": "每条史实征服按参数'是否成功施加'；默认=精确重放史实，调参=反事实偏离",
        },
        "partyColors": PARTY_COLORS,
        "seats": norm_seats,
        "startControl": start_control,
        "terminalReal": terminal_real,
        "transitions": transitions,
        "persons": persons,
    }

    js = "// 自动生成，勿手改；改 tools/gen_sim_bundle.py 后重跑。\n"
    js += "window.SIM_DATA = " + json.dumps(bundle, ensure_ascii=False, indent=1) + ";\n"
    with open(OUT, "w", encoding="utf-8") as f:
        f.write(js)

    print(f"✓ 生成 {OUT}")
    print(f"  seats={len(norm_seats)} transitions={len(transitions)} "
          f"persons={len(persons)} years={start_year}-{end_year}")
    # 校验：起止态覆盖所有 seat
    miss = [s["id"] for s in norm_seats if s["id"] not in start_control or s["id"] not in terminal_real]
    if miss:
        print(f"  ⚠ 缺失起止态: {miss}")
    else:
        print("  ✓ 起止态完整覆盖全部治所")


if __name__ == "__main__":
    main()
