# -*- coding: utf-8 -*-
"""Natural Earth 矢量底图：按需裁剪 → 注入每个场景。

v0.38 引入。此前共享「手绘辽东江河」(data/sarhu/places.json 的 6 条 path) 太丑且
只覆盖辽东；现统一用 Natural Earth 1:50m 公共领域数据：
  - admin_1_states_provinces  (省/州界)
  - rivers_lake_centerlines   (河流)
  - lakes                     (湖泊)
  - coastline                 (海岸线)
  - land                      (陆地掩膜，用于填色)

设计：
  - 原始数据存 data/geo/natural_earth/ne_50m_*.json（FeatureCollection）。
  - build 时按「场景视野 bbox」裁剪（feature 级 + 坐标级），只把视口内要素注入
    切片 bundle["basemap"]；壳用中国裁剪版 SD.basemap。
  - 前端 county.js/app.js 的 drawBase 改为读 basemap，不再读手绘 SD.rivers/SD.wall。
  - 诚实边界：超出 bbox 的要素直接丢弃（不插值、不伪造），地图视口之外即空白。

坐标精度统一压到 3 位小数（~100m），控制切片体积。
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
NE_DIR = os.path.join(ROOT, "data", "geo", "natural_earth")

# 中国省级行政区中文名（NE admin1 默认给英文名，历史中文受众需要中文标注）
_CN_PROV_ZH = {
    "Anhui": "安徽", "Beijing": "北京", "Chongqing": "重庆", "Fujian": "福建",
    "Gansu": "甘肃", "Guangdong": "广东", "Guangxi": "广西", "Guizhou": "贵州",
    "Hainan": "海南", "Hebei": "河北", "Heilongjiang": "黑龙江", "Henan": "河南",
    "Hong Kong": "香港", "Hubei": "湖北", "Hunan": "湖南", "Jiangsu": "江苏",
    "Jiangxi": "江西", "Jilin": "吉林", "Liaoning": "辽宁", "Macau": "澳门",
    "Nei Mongol": "内蒙古", "Ningxia Hui": "宁夏", "Qinghai": "青海",
    "Shaanxi": "陕西", "Shandong": "山东", "Shanghai": "上海", "Shanxi": "山西",
    "Sichuan": "四川", "Tianjin": "天津", "Xinjiang Uygur": "新疆",
    "Xizang": "西藏", "Yunnan": "云南", "Zhejiang": "浙江",
    "Taiwan": "台湾",
}

# 中国裁剪 bbox（供壳/总览页使用）：73.5–135.1°E, 18–53.6°N
CHINA_BBOX = (73.5, 18.0, 135.1, 53.6)

_cache = {}


def _load(layer):
    """加载并缓存一个 NE 图层（解析后的 FeatureCollection）。"""
    if layer in _cache:
        return _cache[layer]
    path = os.path.join(NE_DIR, "ne_50m_%s.json" % layer)
    if not os.path.exists(path):
        _cache[layer] = None
        return None
    with open(path, encoding="utf-8") as f:
        _cache[layer] = json.load(f)
    return _cache[layer]


def _name(props):
    """挑一个可读名称：本地名优先，其次英文名。"""
    for k in ("name", "name_en", "name_zh", "name_local"):
        v = props.get(k)
        if v:
            return v
    return None


def _round_coords(coords, nd=3):
    if isinstance(coords[0], (int, float)):
        return [round(coords[0], nd), round(coords[1], nd)]
    return [_round_coords(c, nd) for c in coords]


def _in(lo, la, b):
    return b[0] <= lo <= b[2] and b[1] <= la <= b[3]


def _liang_barsky(p1, p2, b):
    """Liang-Barsky 线段裁剪：返回裁剪后端点 (a,c) 或 None（线段完全在 bbox 外）。
    正确处理折线跨 bbox 边界的情形——在边界处插入交点，而不是简单地丢弃越界顶点。
    曲线参数 t∈[0,1] 用标准四边 (左/右/下/上) 迭代；p,q 配对为
    (-dx, x1-xmin) / (dx, xmax-x1) / (-dy, y1-ymin) / (dy, ymax-y1)。"""
    xmin, ymin, xmax, ymax = b
    x1, y1 = p1[0], p1[1]
    x2, y2 = p2[0], p2[1]
    dx = x2 - x1
    dy = y2 - y1
    t0, t1 = 0.0, 1.0
    for p, q in ((-dx, x1 - xmin), (dx, xmax - x1),
                 (-dy, y1 - ymin), (dy, ymax - y1)):
        if p == 0:
            if q < 0:
                return None  # 与边界平行且在外侧
            continue
        r = q / p
        if p < 0:  # 进入边：收紧 t0
            if r > t1:
                return None
            if r > t0:
                t0 = r
        else:       # 离开边：收紧 t1
            if r < t0:
                return None
            if r < t1:
                t1 = r
    a = [x1 + t0 * dx, y1 + t0 * dy]
    c = [x1 + t1 * dx, y1 + t1 * dy]
    return a, c


def _clip_linestring(coords, b, nd=3):
    """Liang-Barsky 折线裁剪：保留每段在 bbox 内的部分，跨边界处插入交点。"""
    out = []
    for i in range(len(coords) - 1):
        seg = _liang_barsky(coords[i], coords[i + 1], b)
        if not seg:
            continue
        a, c = seg
        ra = [round(a[0], nd), round(a[1], nd)]
        rc = [round(c[0], nd), round(c[1], nd)]
        if not out:
            out.append(ra)
        elif ra[0] != out[-1][0] or ra[1] != out[-1][1]:
            # 上一段被裁掉，本段起点接续（避免断线）
            out.append(ra)
        out.append(rc)
    return out


def _sh_clip_ring(ring, b, nd=3):
    """Sutherland-Hodgman 闭合多边形环裁剪，返回闭合环或 None。
    正确处理大陆级多边形被小 bbox 裁剪的情形——沿边界插入交点，保留拓扑。
    旧实现用「坐标级过滤」会让横跨 bbox 的大陆多边形退化为局部残片。"""
    xmin, ymin, xmax, ymax = b

    def inside(p, edge):
        if edge == 0: return p[0] >= xmin
        if edge == 1: return p[0] <= xmax
        if edge == 2: return p[1] >= ymin
        if edge == 3: return p[1] <= ymax

    def cross(p1, p2, edge):
        x1, y1 = p1[0], p1[1]
        x2, y2 = p2[0], p2[1]
        if edge == 0:
            t = (xmin - x1) / (x2 - x1) if x2 != x1 else 0
            return [xmin, y1 + t * (y2 - y1)]
        if edge == 1:
            t = (xmax - x1) / (x2 - x1) if x2 != x1 else 0
            return [xmax, y1 + t * (y2 - y1)]
        if edge == 2:
            t = (ymin - y1) / (y2 - y1) if y2 != y1 else 0
            return [x1 + t * (x2 - x1), ymin]
        if edge == 3:
            t = (ymax - y1) / (y2 - y1) if y2 != y1 else 0
            return [x1 + t * (x2 - x1), ymax]

    v = [list(p) for p in ring]
    for edge in range(4):
        nv = []
        m = len(v)
        if m == 0:
            return None
        for i in range(m):
            curr = v[i]
            prev = v[(i - 1) % m]
            ci = inside(curr, edge)
            pi = inside(prev, edge)
            if ci:
                if not pi:
                    nv.append(cross(prev, curr, edge))
                nv.append(curr)
            elif pi:
                nv.append(cross(prev, curr, edge))
        v = nv
    if len(v) < 3:
        return None
    if v[0] != v[-1]:
        v.append(v[0])
    return [[round(p[0], nd), round(p[1], nd)] for p in v]


def _clip_geom(g, b, nd=3):
    t = g["type"]
    c = g["coordinates"]
    if t == "Polygon":
        rings = [r for r in (_sh_clip_ring(ring, b, nd) for ring in c) if r and len(r) >= 4]
        return {"type": "Polygon", "coordinates": rings} if rings else None
    if t == "MultiPolygon":
        polys = []
        for poly in c:
            rings = [r for r in (_sh_clip_ring(ring, b, nd) for ring in poly) if r and len(r) >= 4]
            if rings:
                polys.append(rings)
        return {"type": "MultiPolygon", "coordinates": polys} if polys else None
    if t == "LineString":
        l = _clip_linestring(c, b, nd)
        return {"type": "LineString", "coordinates": l} if len(l) >= 2 else None
    if t == "MultiLineString":
        ls = [l for l in (_clip_linestring(line, b, nd) for line in c) if len(l) >= 2]
        return {"type": "MultiLineString", "coordinates": ls} if ls else None
    if t == "Point":
        if b[0] <= c[0] <= b[2] and b[1] <= c[1] <= b[3]:
            return {"type": "Point", "coordinates": [round(c[0], nd), round(c[1], nd)]}
        return None
    return None


def _feat_bbox(geom):
    """快速计算 geometry 的 bbox（递归扫坐标），用于 feature 级预筛。"""
    lo0 = la0 = 1e9
    lo1 = la1 = -1e9

    def walk(c):
        nonlocal lo0, la0, lo1, la1
        if isinstance(c[0], (int, float)):
            lo0 = min(lo0, c[0]); la0 = min(la0, c[1])
            lo1 = max(lo1, c[0]); la1 = max(la1, c[1])
        else:
            for x in c:
                walk(x)

    walk(geom.get("coordinates", []))
    if lo0 > lo1:
        return None
    return (lo0, la0, lo1, la1)


def _expand(b, frac=0.15, minpad=1.0):
    """扩大 bbox 留上下文；frac 按跨度比例或最小 pad 取大。"""
    w = b[2] - b[0]
    h = b[3] - b[1]
    pad = max(minpad, w * frac, h * frac)
    return (b[0] - pad, b[1] - pad, b[2] + pad, b[3] + pad)


def _decimate_geom(g, s):
    """抽稀几何顶点：每 s 个点保留一个。全国尺度下肉眼无损，体积大砍。
    多边形外环保持闭合（首点末点一致）。"""
    if not s or s <= 1 or not g:
        return g
    t = g["type"]
    c = g["coordinates"]

    def _line(l):
        if len(l) <= s:
            return l
        d = l[::s]
        if d[0] != l[0]:
            d = d + [l[0]]
        return d

    if t == "Polygon":
        return {"type": "Polygon", "coordinates": [_line(r) for r in c]}
    if t == "MultiPolygon":
        return {"type": "MultiPolygon",
                "coordinates": [[_line(r) for r in p] for p in c]}
    if t in ("LineString", "MultiLineString"):
        return {"type": t, "coordinates": _line(c) if t == "LineString" else [_line(l) for l in c]}
    return g


def clip_layer(layer, bbox, name_zh=None, nd=3):
    """裁剪一个 NE 图层到 bbox，返回紧凑 feature 列表 [{n?, g}]。nd=坐标精度位数。"""
    fc = _load(layer)
    if not fc:
        return []
    out = []
    for f in fc.get("features", []):
        g = f.get("geometry")
        if not g:
            continue
        fb = _feat_bbox(g)
        if fb and (fb[2] < bbox[0] or fb[0] > bbox[2] or fb[3] < bbox[1] or fb[1] > bbox[3]):
            continue  # feature 级预筛：完全在 bbox 外
        cg = _clip_geom(g, bbox, nd)
        if not cg:
            continue
        props = f.get("properties", {})
        rec = {"g": cg}
        nm = _name(props)
        if nm:
            if name_zh and nm in name_zh:
                rec["n"] = name_zh[nm]
            else:
                rec["n"] = nm
        out.append(rec)
    return out


def scene_bbox(bundle):
    """从场景 places + 地形网格推导视野 bbox。"""
    xs, ys = [], []
    for p in bundle.get("places", []):
        if isinstance(p.get("lon"), (int, float)):
            xs.append(p["lon"]); ys.append(p["lat"])
    tg = bundle.get("terrain")
    if tg and tg.get("bbox"):
        xs += [tg["bbox"][0], tg["bbox"][2]]
        ys += [tg["bbox"][1], tg["bbox"][3]]
    if not xs:
        return CHINA_BBOX
    b = (min(xs), min(ys), max(xs), max(ys))
    return _expand(b)


def _fidelity(span):
    """按视野跨度选坐标精度 nd 与抽稀步长 stride：

    - 局部战役（span<=8°）：完整精度 nd=3 / stride=1，河流省界锐利。
    - 区域（8<span<=20°）：nd=3 / stride=2，体积减半。
    - 全国尺度（span>20°）：nd=2 / stride=3，轮廓即可（朝廷党争等跨域场景）。
    避免「朝廷党争」这类全国跨度场景把切片撑到 3.5MB。
    """
    if span <= 8:
        return 3, 1
    if span <= 20:
        return 3, 2
    return 2, 3


def _clip_all(bbox, nd, stride, with_admin1=True):
    """裁剪全部 NE 图层并按 stride 抽稀，返回 basemap 字典。"""
    out = {
        "coastline": clip_layer("coastline", bbox, nd=nd),
        "land": clip_layer("land", bbox, nd=nd),
    }
    if with_admin1:
        out["admin1"] = clip_layer("admin1", bbox, _CN_PROV_ZH, nd=nd)
        out["rivers"] = clip_layer("rivers", bbox, nd=nd)
        out["lakes"] = clip_layer("lakes", bbox, nd=nd)
    for k in list(out.keys()):
        out[k] = [{"g": _decimate_geom(f["g"], stride), "n": f.get("n")} for f in out[k]]
    return out


def build_basemap(bundle, shell=False):
    """返回注入用的 basemap 字典。

    - shell=True：总览/壳页只需「中国轮廓」（陆地+海岸线）作底，省界/河流/湖泊
      细节推到逐场景切片（视野小、体积小），避免壳变成巨石（守「不再巨石」闸门）。
    - shell=False：按场景视野裁剪全部图层（admin1/rivers/lakes/coastline/land）；
      精度/抽稀随视野跨度自适应（见 _fidelity），全国跨度场景自动变轻。
    """
    if shell:
        # 总览是全国尺度：nd=2 + stride=2，体积大砍以守「不再巨石」闸门（壳文件 < 500KB）。
        emb = _clip_all(CHINA_BBOX, nd=2, stride=2, with_admin1=False)
        emb["_bbox"] = [round(x, 3) for x in CHINA_BBOX]
        return emb
    bbox = scene_bbox(bundle)
    span = max(bbox[2] - bbox[0], bbox[3] - bbox[1])
    nd, stride = _fidelity(span)
    emb = _clip_all(bbox, nd=nd, stride=stride, with_admin1=True)
    emb["_bbox"] = [round(x, 3) for x in bbox]
    return emb


if __name__ == "__main__":
    # 自检：裁剪辽宁场景，看要素数量
    test = {"places": [{"lon": 123.43, "lat": 41.80}, {"lon": 124.1, "lat": 41.9}],
            "terrain": {"bbox": [122.0, 40.0, 126.8, 43.3]}}
    bm = build_basemap(test)
    for k, v in bm.items():
        if k == "_bbox":
            print("bbox", v)
        else:
            print("  %-10s %d features" % (k, len(v)))
