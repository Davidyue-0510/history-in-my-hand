# -*- coding: utf-8 -*-
"""复刻 demo/whatif.html 的「真实底图」投影，用场景真实坐标生成等价 SVG 预览工件。

不依赖浏览器，作为 CDP 截图不可用时的视觉证据。与 whatif.html 共用单一真值
basemap.build_china_overview()（全国尺度 Natural Earth 真实省界/河流/湖泊/海岸），
证明「a」：疆域底图已从手绘轮廓换成真实省界/地形。投影参数与 drawMapSVG 严格一致。

用法：python tools/ingestion/gen_map_preview.py <scene_id> [whatif|real] [out.svg]
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, "tools", "ingestion"))

import basemap as BM  # noqa: E402

W, H, padL, padR, padT, padB = 720, 400, 44, 18, 16, 30
LON0, LON1, LAT0, LAT1 = 73, 135, 18, 54


def px(lon):
    return padL + (lon - LON0) / (LON1 - LON0) * (W - padL - padR)


def py(lat):
    return padT + (LAT1 - lat) / (LAT1 - LAT0) * (H - padT - padB)


def _geom(g, style):
    if not g:
        return ""
    t = g["type"]
    c = g["coordinates"]
    if t == "Polygon":
        return "".join('<polygon points="%s" style="%s"/>' % (" ".join("%s,%s" % (round(px(p[0]), 1), round(py(p[1]), 1)) for p in r), style) for r in c)
    if t == "MultiPolygon":
        return "".join(
            "".join('<polygon points="%s" style="%s"/>' % (" ".join("%s,%s" % (round(px(p[0]), 1), round(py(p[1]), 1)) for p in r), style) for r in poly)
            for poly in c)
    if t == "LineString":
        return '<polyline points="%s" style="%s"/>' % (" ".join("%s,%s" % (round(px(p[0]), 1), round(py(p[1]), 1)) for p in c), style)
    if t == "MultiLineString":
        return "".join('<polyline points="%s" style="%s"/>' % (" ".join("%s,%s" % (round(px(p[0]), 1), round(py(p[1]), 1)) for p in line), style) for line in c)
    return ""


def gen(scene, branch="whatif"):
    sp = os.path.join(ROOT, "data", scene, "places.json")
    with open(sp, encoding="utf-8") as f:
        P = json.load(f)
    places = P.get("places", P if isinstance(P, list) else [])
    coords = [p for p in places if p.get("lon") is not None and p.get("lat") is not None]
    hist_file = os.path.join(ROOT, "data", scene, "state_hist_%s.json" % ("whatif" if branch == "whatif" else "real"))
    years = []
    if os.path.exists(hist_file):
        with open(hist_file, encoding="utf-8") as f:
            HJ = json.load(f)
        yrs = HJ if isinstance(HJ, list) else HJ.get("state_hist", [])
        if isinstance(yrs, dict):
            yrs = yrs.get("state_hist", [])
        years = [s.get("year") for s in yrs if isinstance(s, dict) and "year" in s]
    y0 = years[0] if years else 1000
    y1 = years[-1] if years else 1100
    n = len(coords)
    step = max(1, int((y1 - y0) / (n - 1))) if n > 1 else 0
    nodes = []
    for i, p in enumerate(coords):
        nodes.append({"name": p.get("name") or p.get("label") or p.get("id"),
                      "lon": p["lon"], "lat": p["lat"],
                      "adopt": y0 if i == 0 else min(y1, y0 + i * step)})

    # 真实底图（单一真值：build_china_overview）
    bm = BM.build_china_overview()
    base_svg = []
    for f in bm.get("land", []):
        base_svg.append(_geom(f["g"], "fill:#ece3cc;fill-opacity:.30;"))
    for f in bm.get("lakes", []):
        base_svg.append(_geom(f["g"], "fill:#bfe0f0;fill-opacity:.55;"))
    for f in bm.get("rivers", []):
        base_svg.append(_geom(f["g"], "fill:none;stroke:#7fa7c4;stroke-width:1.2;stroke-opacity:.85;"))
    for f in bm.get("admin1", []):
        base_svg.append(_geom(f["g"], "fill:none;stroke:#9a8a63;stroke-width:.7;"))
    for f in bm.get("coastline", []):
        base_svg.append(_geom(f["g"], "fill:none;stroke:#6a5f4f;stroke-width:1.3;"))

    svg = ['<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" preserveAspectRatio="xMidYMid meet">' % (W, H)]
    svg += base_svg
    for lo in [80, 90, 100, 110, 120, 130]:
        x = px(lo)
        svg.append('<line x1="%.1f" y1="%d" x2="%.1f" y2="%d" stroke="#e3dccb"/>' % (x, padT, x, H - padB))
        svg.append('<text x="%.1f" y="%d" font-size="9" fill="#9a9286" text-anchor="middle">%d°E</text>' % (x, H - padB + 12, lo))
    for la in [20, 30, 40, 50]:
        y = py(la)
        svg.append('<line x1="%d" y1="%.1f" x2="%d" y2="%.1f" stroke="#e3dccb"/>' % (padL, y, W - padR, y))
        svg.append('<text x="%d" y="%.1f" font-size="9" fill="#9a9286" text-anchor="end">%d°N</text>' % (padL - 4, y + 3, la))
    svg.append('<rect x="%d" y="%d" width="%d" height="%d" fill="none" stroke="#c9bfa8"/>' % (padL, padT, W - padL - padR, H - padT - padB))
    for nd in nodes:
        x = px(nd["lon"]); y = py(nd["lat"])
        svg.append('<circle cx="%.1f" cy="%.1f" r="9" fill="#c9bfa8" fill-opacity="0.92" stroke="#332d27" stroke-width="1"/>' % (x, y))
        svg.append('<text x="%.1f" y="%.1f" font-size="12" fill="#332d27">%s</text>' % (x + 11, y + 3, nd["name"]))
        svg.append('<text x="%.1f" y="%.1f" font-size="9" fill="#9a9286">%d 激活</text>' % (x + 11, y + 14, nd["adopt"]))
    svg.append('</svg>')
    return "\n".join(svg), nodes


if __name__ == "__main__":
    scene = sys.argv[1]
    branch = sys.argv[2] if len(sys.argv) > 2 else "whatif"
    out = sys.argv[3] if len(sys.argv) > 3 else os.path.join(ROOT, ".tmp", "%s_map_%s.svg" % (scene, branch))
    s, nodes = gen(scene, branch)
    with open(out, "w", encoding="utf-8") as f:
        f.write(s)
    print("SVG_SAVED", out, "nodes=", len(nodes))
    for nd in nodes:
        print("  ", nd["name"], nd["lon"], nd["lat"], "adopt", nd["adopt"])
