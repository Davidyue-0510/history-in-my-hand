"""抽取器包：把任意文本变成 tools/ingest.py 可装配的 WorldSpec。

设计：ingest.py 的 assemble 逻辑只认 WorldSpec 的同构结构，不关心是谁产出的。
因此 LLM 抽取器可以即插即用，不碰前端与校验。本包只定义协议 + 一个占位实现。
"""
from .base import BaseExtractor, WorldSpec
from .template import TemplateExtractor

__all__ = ["BaseExtractor", "WorldSpec", "TemplateExtractor"]
