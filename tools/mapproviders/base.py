"""地图源协议。

MapProvider.load(region) 返回同构 grid 字典：
  { lon0, lat0, step, nx, ny, elev:[int...], source, source_url, min, max }
渲染层据此投影，不关心网格来自 ASTER 还是用户 GeoTIFF。
"""


class MapProvider:
    """地图源协议。子类实现 load()。"""

    def load(self, region=None):
        """返回网格字典（见包文档）。

        :param region: 区域描述（bounds / 文件名 / 坐标）；缺省返回默认网格
        :returns: dict，含 lon0/lat0/step/nx/ny/elev 等
        """
        raise NotImplementedError
