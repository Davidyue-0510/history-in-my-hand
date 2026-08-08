"""地图源包：把"地形来源"抽象成可插拔的 MapProvider。

现状：AsterMapProvider 读取项目既有的 ASTER 辽东高程网格（真实实现）。
 seam：UserGeoTIFFProvider 是"用户导入地图"的占位（GeoTIFF / 图片 / 坐标），
 对应北极星"全时段全地域地图导入"。新增地图源只需实现 load() 返回同构 grid。
"""
from .base import MapProvider
from .aster import AsterMapProvider
from .user_geotiff import UserGeoTIFFProvider

__all__ = ["MapProvider", "AsterMapProvider", "UserGeoTIFFProvider"]
