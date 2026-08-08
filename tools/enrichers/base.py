"""补全器协议：给实体补富字段（intro / aliases / significance）。

实体 = places.json / persons.json 里的单条记录。enrich() 返回要合并进
该实体的字段字典。下游（build.py）把这些字段透传进 data.js，前端据此渲染
地点介绍 / 人物简介。
"""


class BaseEnricher:
    """补全协议。子类实现 enrich()。"""

    def enrich(self, entity, world_meta=None):
        """返回要合并进 entity 的字段字典。

        :param entity: 单条 place / person 记录
        :param world_meta: 可选，本 world 的元信息（title/kind 等）
        :returns: dict，如 {"intro": "...", "aliases": "...", "significance": "..."}
        """
        raise NotImplementedError
