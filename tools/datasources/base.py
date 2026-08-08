"""外接史料库协议。

适配器把学术数据集（CBDB / CHGIS 等）查成 world 模型对象。
fetch() 返回 list[dict]，每条形如 place / person 记录，由调用方汇入 world。
"""


class DataSource:
    """数据源协议。子类实现 fetch()。"""

    def fetch(self, query):
        """按查询返回记录列表。

        :param query: 查询（人名 / 地名 / id）
        :returns: list[dict]，每条形如 place / person 记录
        """
        raise NotImplementedError

    @staticmethod
    def load_local_cache(path):
        """读取本地缓存（适配器运行时下载所得，绝不入 git）。"""
        import json
        import os
        if not os.path.exists(path):
            return None
        with open(path, encoding="utf-8") as f:
            return json.load(f)
