"""ASTER 辽东高程网格提供方（真实实现）。

读取项目既有的 data/terrain/liaodong_grid.json，返回同构 grid。
这是当前默认地图源；渲染层据此投影，不关心网格来自 ASTER 还是用户地图。
"""
import json
import os

from .base import MapProvider

REPO = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


class AsterMapProvider(MapProvider):
    DEFAULT = os.path.join(REPO, "data", "terrain", "liaodong_grid.json")

    def load(self, region=None):
        path = region or self.DEFAULT
        if not os.path.exists(path):
            raise FileNotFoundError("未找到高程网格：%s（先运行地形获取）" % path)
        with open(path, encoding="utf-8") as f:
            d = json.load(f)
        elev = d.get("order") or d.get("elev") or []
        return {
            "lon0": d["lon0"], "lat0": d["lat0"], "step": d["step"],
            "nx": d["nx"], "ny": d["ny"],
            "elev": [int(e) if e is not None else 0 for e in elev],
            "source": d.get("_source"), "source_url": d.get("_source_url"),
            "min": d.get("min"), "max": d.get("max"),
        }
