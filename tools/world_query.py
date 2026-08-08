# -*- coding: utf-8 -*-
"""跨场景「世界模型」可查询工具 —— 北极星「数据库」角色在 demo 量级的落地。

为什么不用先上 Postgres：当前 demo 量级（每场景一个 assertions.jsonl）已经
可以被「一次扫描 + 内存索引」满足全部查询。world_query 证明了「导入即呈现」
之上还能「导入即可查」——这是「可查询、跨场景、带溯源的世界模型」的最小实物，
不依赖任何重量级存储。等要覆盖全中国、多 world、随时问「1644 年所有战役」时，
把本文件的查询函数换成图库/空间库实现即可，CLI 不变。

查询维度
--------
  --year 1619           按公元年（含区间重叠）
  --era  "万历四十七年"  年号（经 reign_era 归一化后转 --year）
  --place shenyang      按地点 id
  --source mingshi      按史料来源 id
  --scene sarhu         限定场景（不传则跨全部场景）
  --layer record        按断言层（record/scholarship/inference/gap）
  --json                输出 JSON（默认人类可读表格）

退出码 0 = 有结果；2 = 无匹配（便于管道判断）。
"""
import argparse
import json
import os
import re
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import reign_era as R

DATA = os.path.join(ROOT, "data")


def _load_scenes():
    reg = json.load(open(os.path.join(DATA, "scenes.json"), encoding="utf-8"))
    scenes = reg.get("scenes", {})
    out = {}
    for k in reg.get("order", list(scenes.keys())):
        sc = scenes.get(k)
        if not sc:
            continue
        out[k] = {"dir": sc.get("dir", k), "title": sc.get("title", k)}
    return out


def _load_assertions(scene_id, scene):
    path = os.path.join(DATA, scene["dir"], "assertions.jsonl")
    if not os.path.exists(path):
        return []
    rows = []
    with open(path, encoding="utf-8") as f:
        for ln in f:
            ln = ln.strip()
            if not ln or ln.startswith("//"):
                continue
            try:
                rows.append(json.loads(ln))
            except json.JSONDecodeError:
                pass
    for a in rows:
        a["_scene"] = scene_id
    return rows


def _year_of(a):
    """返回该断言的公元年（区间则取起年），无则返回 None。"""
    t = a.get("time") or {}
    if "gregorian_year" in t and isinstance(t["gregorian_year"], int):
        return t["gregorian_year"]
    s = t.get("start")
    if isinstance(s, str):
        m = re.match(r"(\d{4})", s)
        if m:
            return int(m.group(1))
    if "start" in t and isinstance(t["start"], int):
        return t["start"]
    return None


def _overlaps_year(a, year):
    t = a.get("time") or {}
    y0 = _year_of(a)
    if y0 is None:
        return False
    # 有 end 区间则判断 year 是否落在 [y0, y1]
    e = t.get("end")
    y1 = y0
    if isinstance(e, str):
        m = re.match(r"(\d{4})", e)
        if m:
            y1 = int(m.group(1))
    elif isinstance(e, int):
        y1 = e
    return y0 <= year <= y1


def query(year=None, era=None, place=None, source=None, scene=None, layer=None):
    if era is not None:
        gy = R.normalize_year(era)
        if gy is None:
            raise ValueError("年号 %r 无法归一化" % era)
        year = gy
    scenes = _load_scenes()
    if scene:
        if scene not in scenes:
            raise ValueError("场景 %r 不存在" % scene)
        scenes = {scene: scenes[scene]}
    results = []
    for sid, sc in scenes.items():
        for a in _load_assertions(sid, sc):
            if year is not None and not _overlaps_year(a, year):
                continue
            if place and a.get("place") != place:
                continue
            if source and a.get("source") != source:
                continue
            if layer and a.get("layer") != layer:
                continue
            results.append(a)
    return results


def _fmt_table(rows):
    if not rows:
        return "(无匹配断言)"
    lines = []
    for a in rows:
        y = _year_of(a)
        lines.append(
            "%-7s | %-10s | %-4s | %-12s | %s"
            % (a.get("_scene", "?"), a.get("id", "?"),
               y if y else "?", a.get("layer", "?"),
               (a.get("value_text") or a.get("predicate") or "")[:40]))
    header = "%-7s | %-10s | %-4s | %-12s | %s" % ("scene", "id", "year", "layer", "value_text")
    return header + "\n" + "\n".join(lines)


def main():
    ap = argparse.ArgumentParser(description="跨场景世界模型查询（demo 量级「数据库」角色）")
    ap.add_argument("--year", type=int, help="公元年")
    ap.add_argument("--era", help="年号（经 reign_era 归一化）")
    ap.add_argument("--place", help="地点 id")
    ap.add_argument("--source", help="史料来源 id")
    ap.add_argument("--scene", help="限定场景 id")
    ap.add_argument("--layer", choices=["record", "scholarship", "inference", "gap"])
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    args = ap.parse_args()

    try:
        rows = query(year=args.year, era=args.era, place=args.place,
                     source=args.source, scene=args.scene, layer=args.layer)
    except ValueError as e:
        print("[FAIL] %s" % e)
        return 2

    if args.json:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
    else:
        print(_fmt_table(rows))
    print("\n匹配 %d 条" % len(rows))
    return 0 if rows else 2


if __name__ == "__main__":
    sys.exit(main())
