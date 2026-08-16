# -*- coding: utf-8 -*-
"""地名 geocoder：历史地名 -> (lon, lat)。

「任意史料导入」最缺的一环：把史料里的中文地名落到坐标上。此前地名全靠
手写 lon/lat，一份新史料进来要人工查坐标——这在「任意」两个字面前是不可接受的。

本模块 = 本地 curated 地名表（data/geo/gazetteer.json）+ 分级匹配：
  1. 精确匹配（含别名）
  2. 去掉通名后缀（州/府/郡/县/城/关/镇/军/监/卫/所/堡/栅/邑）后精确匹配
  3. 子串兜底（任一方含另一方，长度 >= 2）
未知地名诚实返回 None（由调用方记为缺口），绝不伪造坐标。

同时是 tools/datasources/chgis.py 的真实后端：CHGISAdapter.fetch 委托本模块，
「CHGIS 适配器」从占位变成可用（本地表顶上，未来可无缝换官方下载）。

用法：
  python tools/geocode.py data/tang_huai_xi/places.json --write   # 批量落点并写回
  python tools/geocode.py --name 蔡州                              # 单地名查询
"""
import argparse
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
GAZ_PATH = os.path.join(ROOT, "data", "geo", "gazetteer.json")
GN_PATH = os.path.join(ROOT, "data", "geo", "geonames_index.json")

# 通名后缀：去掉后「蔡州城」→「蔡州」、「广宁城」→「广宁」
_SUFFIX = ("州", "府", "郡", "县", "城", "关", "镇", "军", "监", "卫",
           "所", "堡", "栅", "邑", "国", "都", "京")

_GAZ = None


def load_gazetteer(path=GAZ_PATH):
    if not os.path.exists(path):
        return {}
    with open(path, encoding="utf-8") as f:
        blob = json.load(f)
    entries = blob.get("entries", []) if isinstance(blob, dict) else blob
    table = {}
    for e in entries:
        rec = {k: v for k, v in e.items() if k not in ("name", "alias")}
        names = [e["name"]] + list(e.get("alias", []))
        for nm in names:
            table[nm.strip()] = rec
    return table


def _gaz():
    global _GAZ
    if _GAZ is None:
        _GAZ = load_gazetteer()
    return _GAZ


def _strip_suffix_matches(name, g):
    """逐级剥通名后缀（蔡州城 -> 蔡州 -> 蔡），命中即停。返回命中的键或 None。"""
    n = name
    while n and n[-1] in _SUFFIX:
        n = n[:-1]
        if n in g:
            return n
    return None


def geocode(name):
    """地名 -> {lon, lat, note?, matched_by?}；未知返回 None（诚实，不伪造坐标）。"""
    n = (name or "").strip()
    if not n:
        return None
    g = _gaz()
    if n in g:
        return dict(g[n])
    stripped = _strip_suffix_matches(n, g)
    if stripped:
        r = dict(g[stripped])
        r["matched_by"] = "strip_suffix"
        return r
    s = n
    while s and s[-1] in _SUFFIX:
        s = s[:-1]
    for k, r in g.items():
        if len(s) >= 2 and (s in k or k in s):
            out = dict(r)
            out["matched_by"] = "substring"
            return out
    # 兜底：GeoNames 全球地名库（免费 CC BY 4.0）。覆盖 curated 表外的「文献地名」。
    # 仅在 curated 三次匹配全失后才触发（懒加载，避免每次调用都读 ~20MB 索引）。
    gn = _gn()
    if gn:
        if n in gn:
            return _gn_rec(gn[n], "geonames_exact")
        s2 = n
        while s2 and s2[-1] in _SUFFIX:
            s2 = s2[:-1]
            if s2 in gn:
                return _gn_rec(gn[s2], "geonames_strip")
    return None


_GN = None


def _gn():
    global _GN
    if _GN is None:
        if os.path.exists(GN_PATH):
            with open(GN_PATH, encoding="utf-8") as f:
                _GN = json.load(f)
        else:
            _GN = {}  # 未构建索引则静默跳过（不报错，不影响 curated 流程）
    return _GN


def _gn_rec(rec, matched_by):
    """GeoNames 索引记录 = [lon, lat, feature_class, country]。"""
    return {
        "lon": rec[0], "lat": rec[1],
        "geo_source": "GeoNames", "feature": rec[2], "country": rec[3],
        "matched_by": matched_by,
    }


def geocode_places(places):
    """places: list[dict(name, ...)]。原地填 lon/lat。返回 (resolved, gaps) 名单。"""
    resolved, gaps = [], []
    for p in places:
        res = geocode(p.get("name"))
        if res:
            p["lon"] = res["lon"]
            p["lat"] = res["lat"]
            if res.get("note"):
                p.setdefault("geo_note", res["note"])
            if res.get("matched_by"):
                p["geo_match"] = res["matched_by"]
            resolved.append(p.get("name"))
        else:
            p["lon"] = None
            p["lat"] = None
            p["geo_unresolved"] = True
            gaps.append(p.get("name"))
    return resolved, gaps


def main():
    ap = argparse.ArgumentParser(description="历史地名 -> 坐标（本地地名表，离线）")
    ap.add_argument("places", nargs="?", help="places.json 路径；提供则批量落点")
    ap.add_argument("--name", help="直接查单个地名")
    ap.add_argument("--write", action="store_true", help="把 lon/lat 原地写回 places.json")
    args = ap.parse_args()

    if args.name:
        r = geocode(args.name)
        print(json.dumps(r, ensure_ascii=False) if r else "None（未命中）")
        return 0

    if not args.places:
        print("[FAIL] 需要 places.json 路径或 --name")
        return 2

    with open(args.places, encoding="utf-8") as f:
        blob = json.load(f)
    places = blob.get("places", [])
    resolved, gaps = geocode_places(places)
    print("geocode: %d 命中 / %d 未命中" % (len(resolved), len(gaps)))
    for nm in gaps:
        print("  [GAP] 未落点: %s" % nm)
    if gaps:
        print("[warn] 未命中者 lon/lat 置 null（诚实：不伪造坐标），构建时该地点不渲染高程")
    if args.write:
        with open(args.places, "w", encoding="utf-8") as f:
            json.dump(blob, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("[ok] 写回 %s" % args.places)
    return 0


if __name__ == "__main__":
    sys.exit(main())
