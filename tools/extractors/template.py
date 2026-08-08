"""占位抽取器：返回最小空 spec，证明接口可跑通。

接 LLM 时，新建 LLMExtractor(BaseExtractor) 实现 extract() 即可，
ingest.py 装配逻辑完全不变。
"""
from .base import BaseExtractor, WorldSpec


class TemplateExtractor(BaseExtractor):
    def extract(self, text, meta=None):
        meta = meta or {}
        return WorldSpec({
            "key": meta.get("key", "world_from_template"),
            "title": meta.get("title", "模板世界"),
            "kind": "fiction",
            "parties": [],
            "sources": [],
            "places": [],
            "persons": [],
            "events": [],
            "edges": [],
            "timeline": [],
            "assertions": [],
        })
