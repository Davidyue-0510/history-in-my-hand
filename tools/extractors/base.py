"""抽取器协议（与 tools/ingest.py 的 spec 同构）。

任何"文本 → 世界模型"的实现都继承 BaseExtractor 并实现 extract()。
返回的 WorldSpec 直接喂给 ingest.py assemble —— 单一真值：所有来源只产出
places/persons/events/edges/assertions，绝不绕过断言层。
"""


class WorldSpec(dict):
    """ingest.py assemble 期望的结构（与 ingest spec 同构）。

    至少包含：key / title / kind / parties / sources / places / persons /
    events / edges / timeline / assertions。具体字段见 docs/03。
    """


class BaseExtractor:
    """抽取协议。子类实现 extract()。"""

    def extract(self, text, meta=None):
        """把文本变成 WorldSpec。

        :param text: 原始文本（小说 / 史料 / 设定集）
        :param meta: 可选元信息（key / title / kind 等覆盖）
        :returns: WorldSpec
        """
        raise NotImplementedError
