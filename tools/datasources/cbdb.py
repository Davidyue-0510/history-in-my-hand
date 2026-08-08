"""CBDB（中国历代人物传记数据库）适配器占位。

真实实现：运行时请求 CBDB API（或下载本地缓存），把人物查成 person 记录。
本占位只定义接口与缓存约定，构建期不触发网络。
"""
from .base import DataSource


class CBDBAdapter(DataSource):
    API = "https://cbdb.fas.harvard.edu"

    def fetch(self, query):
        # 真实实现应：请求 API → 映射为 {"id","name","note",...} 的 person 记录。
        # 此处留接口，避免构建期联网。
        raise NotImplementedError(
            "CBDBAdapter.fetch 待实现：运行时请求 %s 并映射为 person 记录；"
            "数据缓存到本地、不打包入 git。" % self.API
        )
