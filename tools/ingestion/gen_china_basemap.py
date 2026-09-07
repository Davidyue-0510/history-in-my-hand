# -*- coding: utf-8 -*-
"""生成 whatif 通用查看器专用的真实省界底图资产 demo/terrain/china_basemap.js。

单一真值来自 basemap.build_china_overview()（全国尺度裁剪 Natural Earth 1:50m，
含 admin1 省界/河流/湖泊/海岸/陆地）。本脚本只负责把它序列化到前端可直接加载的
window.SANDBOX_BASEMAP 全局，供 whatif.html 用 canvas 地形 + SVG 省界叠加。

与 basemap.py 的契约：
  - 不重复实现裁剪/抽稀逻辑（那在 basemap.py）；
  - 只控制输出文件名与 JS 包装，确保「一次定义、两处消费」（生成器 + gen_map_preview）。

用法：python tools/ingestion/gen_china_basemap.py
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(ROOT, "tools", "ingestion"))

import basemap as BM  # noqa: E402

OUT = os.path.join(ROOT, "demo", "terrain", "china_basemap.js")


def main():
    bm = BM.build_china_overview()
    # 体积自检（诚实披露，便于守「壳 < 500KB」类闸门）
    s = json.dumps(bm, ensure_ascii=False)
    n_admin = len(bm.get("admin1", []))
    n_river = len(bm.get("rivers", []))
    n_lake = len(bm.get("lakes", []))
    n_coast = len(bm.get("coastline", []))
    n_land = len(bm.get("land", []))
    with open(OUT, "w", encoding="utf-8") as f:
        f.write("window.SANDBOX_BASEMAP = window.SANDBOX_BASEMAP || {};\n")
        f.write("window.SANDBOX_BASEMAP['china'] = ")
        json.dump(bm, f, ensure_ascii=False, separators=(",", ":"))
        f.write(";\n")
    print("wrote %s" % OUT)
    print("  bytes ~ %d (%.1f KB)" % (len(s.encode("utf-8")), len(s.encode("utf-8")) / 1024.0))
    print("  features: admin1=%d rivers=%d lakes=%d coastline=%d land=%d"
          % (n_admin, n_river, n_lake, n_coast, n_land))
    print("  _bbox = %s" % bm["_bbox"])


if __name__ == "__main__":
    main()
