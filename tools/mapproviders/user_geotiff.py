"""用户地图提供方（占位 seam）。

对应北极星"全时段全地域地图导入"：用户传入 GeoTIFF / 图片 / 坐标，
load() 应把它栅格化成与 AsterMapProvider 同构的 grid（动态投影、并集边界）。
本占位只定义接口与输入约定，具体栅格化（GDAL / canvas）待实现。
"""
from .base import MapProvider


class UserGeoTIFFProvider(MapProvider):
    def load(self, region=None):
        # region 期望：{"type": "geotiff"|"image"|"coords",
        #               "src": "<文件或坐标>", "bounds": [w,s,e,n], "crs": "EPSG:4326"}
        # 真实实现应：读栅格 → 重采样到统一 step → 输出 elev 数组 + lon0/lat0/step/nx/ny。
        raise NotImplementedError(
            "UserGeoTIFFProvider.load 待实现：把用户地图（GeoTIFF/图片/坐标）栅格化为 "
            "同构 grid；投影已改动态并集边界，是现成的起点。"
        )
