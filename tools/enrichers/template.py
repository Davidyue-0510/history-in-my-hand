"""占位补全器：把已有 note 当作 intro 回显，证明接口可跑通。

接 LLM 时，新建 LLMEnricher(BaseEnricher) 实现 enrich() 即可。
"""
from .base import BaseEnricher


class TemplateEnricher(BaseEnricher):
    def enrich(self, entity, world_meta=None):
        out = {}
        if "intro" not in entity and entity.get("note"):
            out["intro"] = entity["note"]
        return out
