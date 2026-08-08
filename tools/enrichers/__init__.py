"""补全器包：给 place / person 补 intro / aliases / significance 等富字段。

LLM 补全器可即插即用：实现 enrich(entity) 返回 {intro, aliases, significance}。
模板实现直接回显已有 note，证明接口可跑通。所有补全只写 entity 字段，
不绕过断言层。
"""
from .base import BaseEnricher
from .template import TemplateEnricher

__all__ = ["BaseEnricher", "TemplateEnricher"]
