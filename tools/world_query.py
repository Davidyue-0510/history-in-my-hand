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
  --party 明方           按立场桶（明方/清方/朝鲜/综述考订）；由 source.party 经 vocab 派生
  --faction feng_jiang  按明朝内派系 id（vocab.factions）；仅对明方桶内断言生效
  --scene sarhu         限定场景（不传则跨全部场景）
  --layer record        按断言层（record/scholarship/inference/gap）
  --by-faction          在结果集上再按派系聚合输出（需配合 --party 明方 或全量）
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


sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import vocab_loader as VL  # noqa: E402


def _load_vocab():
    """默认语境包。跨场景查询时具体某条断言按其所属切片的包派生（见 _bucket_for）。"""
    try:
        return VL.load_default()
    except Exception:
        return {}


VOCAB = _load_vocab()
PARTY_BUCKET = VOCAB.get("party_bucket", {}) or {}


def _bucket_for(scene_id, party):
    """按该切片自己的语境包派生宏观桶。

    跨场景查询天然是多语境的——一次 --party 查询可能同时命中明清切片与虚构世界，
    用一张全局表查会把「作者叙述」这类内联桶算丢。"""
    if scene_id:
        try:
            _pid, v = VL.resolve_for_dir(scene_id)
            return (v.get("party_bucket") or {}).get(party, party)
        except Exception:
            pass
    return PARTY_BUCKET.get(party, party)
FACTIONS = VOCAB.get("factions", {}) or {}


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


def _load_sources(scene_id, scene):
    path = os.path.join(DATA, scene["dir"], "sources.json")
    if not os.path.exists(path):
        return {}
    try:
        arr = json.load(open(path, encoding="utf-8")).get("sources", [])
    except Exception:
        return {}
    return {s.get("id"): s for s in arr}


def _load_assertions(scene_id, scene, src_by_id):
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
                a = json.loads(ln)
            except json.JSONDecodeError:
                continue
            a["_scene"] = scene_id
            src = src_by_id.get(a.get("source"))
            if src:
                a["_party"] = _bucket_for(a.get("_scene"), src.get("party"))
                a["_faction"] = src.get("faction")
            else:
                a["_party"] = None
                a["_faction"] = None
            rows.append(a)
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
    e = t.get("end")
    y1 = y0
    if isinstance(e, str):
        m = re.match(r"(\d{4})", e)
        if m:
            y1 = int(m.group(1))
    elif isinstance(e, int):
        y1 = e
    return y0 <= year <= y1


def query(year=None, era=None, place=None, source=None, party=None,
          faction=None, scene=None, layer=None):
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
        src_by_id = _load_sources(sid, sc)
        for a in _load_assertions(sid, sc, src_by_id):
            if year is not None and not _overlaps_year(a, year):
                continue
            if place and a.get("place") != place:
                continue
            if source and a.get("source") != source:
                continue
            if party and a.get("_party") != party:
                continue
            if faction and a.get("_faction") != faction:
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
            "%-10s | %-13s | %-7s | %-10s | %-4s | %s"
            % (a.get("_scene", "?"), a.get("id", "?"),
               a.get("_party") or "?", a.get("_faction") or "-",
               y if y else "?", (a.get("value_text") or a.get("predicate") or "")[:34]))
    header = "%-10s | %-13s | %-7s | %-10s | %-4s | %s" % (
        "scene", "id", "party", "faction", "year", "value_text")
    return header + "\n" + "\n".join(lines)


def _fmt_by_faction(rows):
    buckets = {}
    for a in rows:
        fid = a.get("_faction") or "(无派系/非明方)"
        buckets.setdefault(fid, []).append(a)
    lines = []
    for fid, arr in sorted(buckets.items(), key=lambda kv: -len(kv[1])):
        name = FACTIONS.get(fid, {}).get("name", fid) if fid != "(无派系/非明方)" else fid
        lines.append("【%s】 %d 条" % (name, len(arr)))
        for a in arr[:8]:
            lines.append("   · %s/%s : %s" % (a.get("_scene"), a.get("id"),
                                             (a.get("value_text") or "")[:50]))
        if len(arr) > 8:
            lines.append("   … 另 %d 条" % (len(arr) - 8))
    return "\n".join(lines) if lines else "(无)"


def main():
    ap = argparse.ArgumentParser(description="跨场景世界模型查询（demo 量级「数据库」角色）")
    ap.add_argument("--year", type=int, help="公元年")
    ap.add_argument("--era", help="年号（经 reign_era 归一化）")
    ap.add_argument("--place", help="地点 id")
    ap.add_argument("--source", help="史料来源 id")
    ap.add_argument("--party", choices=["明方", "清方", "朝鲜", "综述考订"],
                    help="立场桶（由 source.party 经 vocab 派生）")
    ap.add_argument("--faction", help="明朝内派系 id（vocab.factions，如 feng_jiang/nei_guan/donglin）")
    ap.add_argument("--scene", help="限定场景 id")
    ap.add_argument("--layer", choices=["record", "scholarship", "inference", "gap"])
    ap.add_argument("--by-faction", action="store_true", help="结果集按派系聚合输出")
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    args = ap.parse_args()

    try:
        rows = query(year=args.year, era=args.era, place=args.place,
                     source=args.source, party=args.party, faction=args.faction,
                     scene=args.scene, layer=args.layer)
    except ValueError as e:
        print("[FAIL] %s" % e)
        return 2

    if args.by_faction:
        print(_fmt_by_faction(rows))
    elif args.json:
        print(json.dumps(rows, ensure_ascii=False, indent=2))
    else:
        print(_fmt_table(rows))
    print("\n匹配 %d 条" % len(rows))
    return 0 if rows else 2


if __name__ == "__main__":
    sys.exit(main())
