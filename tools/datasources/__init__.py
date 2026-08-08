"""外接史料库包：CBDB / CHGIS 等学术数据集的适配器。

重要约定（沿用项目版权策略）：
  - 适配器只通过「运行时下载 / 本地缓存」获取数据，**绝不把数据集打包进 git**。
  - 适配器只产出 world 模型对象（persons / places），不写 UI、不绕过断言层。
  - 真实网络请求在 fetch() 内发生；本包只放协议与占位实现，构建期不会触发下载。
"""
from .base import DataSource
from .cbdb import CBDBAdapter
from .chgis import CHGISAdapter

__all__ = ["DataSource", "CBDBAdapter", "CHGISAdapter"]
