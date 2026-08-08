"""CHGIS（中国历史地理信息系统）适配器占位。

真实实现：运行时下载 CHGIS 地名点，映射为 place 记录（含 lon/lat）。
本占位只定义接口与缓存约定，构建期不触发网络。
"""
from .base import DataSource


class CHGISAdapter(DataSource):
    SOURCE = "CHGIS · 中国历史地理信息系统"

    def fetch(self, query):
        # 真实实现应：下载/查询 CHGIS → 映射为 {"id","name","lon","lat","note"} 的 place 记录。
        raise NotImplementedError(
            "CHGISAdapter.fetch 待实现：运行时下载 %s 地名点并映射为 place 记录；"
            "数据缓存到本地、不打包入 git。" % self.SOURCE
        )
