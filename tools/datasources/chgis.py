"""CHGIS（中国历史地理信息系统）适配器。

真实后端：本地 curated 地名表（tools/geocode.py）。CHGIS 官方下载在沙箱不可靠，
这份本地表先顶上，覆盖常见朝代/地域核心地名；未知地名返回空（由调用方记为缺口）。
未来要接官方 CHGIS，只需把 fetch 内部换成下载+映射，本文件接口不变。
"""
from .base import DataSource

import os
import sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__)))))
from ingestion.geocode import geocode  # noqa: E402


class CHGISAdapter(DataSource):
    SOURCE = "CHGIS · 中国历史地理信息系统（本地地名表后端）"

    def fetch(self, query):
        """按地名查询，返回 place 记录列表。

        :param query: 地名（中文）
        :returns: list[dict]，形如 {"id","name","lon","lat","note","source"}
                  未命中返回空列表（诚实：不伪造坐标）。
        """
        r = geocode(query)
        if not r:
            return []
        return [{
            "id": query,
            "name": query,
            "lon": r["lon"],
            "lat": r["lat"],
            "note": r.get("note"),
            "source": self.SOURCE,
        }]
