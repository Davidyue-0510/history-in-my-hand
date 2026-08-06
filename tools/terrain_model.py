# -*- coding: utf-8 -*-
"""
地形与行军模型。

这个模块回答一个问题：史料说某部几日行军几百里，这在地形上可能吗？

它不判断史料真假。它只算出一个数，然后把差距摆出来。
差距大的地方，要么是我们的模型错了，要么是史料漏了什么
（走了别的路线？分批行进？夜行？记日有误？）——
两种可能都指向同一件事：这里值得再查一次。

模型：Tobler 徒步函数
    W = 6 · exp(-3.5 · |S + 0.05|)   km/h,  S = 坡度 (dh/dx)
    +0.05 的偏移意味着最快速度出现在 -2.86° 的缓下坡，符合实测。

军队修正：
    Tobler 描述的是单人徒步。成建制部队（携辎重、需列阵、有掉队者）
    的行进速度远低于此。这里取 army_factor = 0.42，
    使平地日行（8 小时）约合 17 km ≈ 34 里 —— 与明清兵书「日行三十里为一舍」
    的常识吻合。这个系数是可调参数，不是史实。
"""
import json
import math
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
GRID_FILE = os.path.join(ROOT, 'data', 'terrain', 'liaodong_grid.json')

ARMY_FACTOR = 0.42       # 成建制部队相对单人徒步的速度折减
MARCH_HOURS = 8.0        # 每日有效行军时数
LI_PER_KM = 1.0 / 0.576  # 明代一里约 576 米


class Terrain(object):
    def __init__(self, path=GRID_FILE):
        with open(path, 'r', encoding='utf-8') as f:
            g = json.load(f)
        self.lon0 = g['lon0']
        self.lat0 = g['lat0']
        self.step = g['step']
        self.nx = g['nx']
        self.ny = g['ny']
        self.elev = g['elev']
        self.meta = {k: v for k, v in g.items() if k != 'elev'}

    def at(self, lon, lat):
        """双线性插值取高程，越界返回边缘值。"""
        fx = (lon - self.lon0) / self.step
        fy = (lat - self.lat0) / self.step
        ix = max(0, min(self.nx - 2, int(math.floor(fx))))
        iy = max(0, min(self.ny - 2, int(math.floor(fy))))
        tx = max(0.0, min(1.0, fx - ix))
        ty = max(0.0, min(1.0, fy - iy))

        def v(x, y):
            e = self.elev[y * self.nx + x]
            return 0.0 if e is None else float(e)

        a = v(ix, iy) * (1 - tx) + v(ix + 1, iy) * tx
        b = v(ix, iy + 1) * (1 - tx) + v(ix + 1, iy + 1) * tx
        return a * (1 - ty) + b * ty


def haversine_km(lon1, lat1, lon2, lat2):
    R = 6371.0
    p1, p2 = math.radians(lat1), math.radians(lat2)
    dp = p2 - p1
    dl = math.radians(lon2 - lon1)
    a = math.sin(dp / 2) ** 2 + math.cos(p1) * math.cos(p2) * math.sin(dl / 2) ** 2
    return 2 * R * math.asin(math.sqrt(a))


def tobler_kmh(slope):
    return 6.0 * math.exp(-3.5 * abs(slope + 0.05))


def leg_profile(terr, lon1, lat1, lon2, lat2, sample_km=1.5):
    """把一段航线切成小段，逐段算坡度与通行成本。"""
    total_km = haversine_km(lon1, lat1, lon2, lat2)
    n = max(2, int(math.ceil(total_km / sample_km)))

    pts = []
    for i in range(n + 1):
        t = i / float(n)
        lo = lon1 + (lon2 - lon1) * t
        la = lat1 + (lat2 - lat1) * t
        pts.append((lo, la, terr.at(lo, la)))

    hours = 0.0
    ascent = 0.0
    descent = 0.0
    max_slope = 0.0
    seg_km = total_km / n if n else 0.0

    for i in range(n):
        dh = pts[i + 1][2] - pts[i][2]
        if dh > 0:
            ascent += dh
        else:
            descent -= dh
        slope = (dh / 1000.0) / seg_km if seg_km > 1e-9 else 0.0
        max_slope = max(max_slope, abs(slope))
        speed = tobler_kmh(slope) * ARMY_FACTOR
        hours += seg_km / max(speed, 0.15)

    return {
        'km': round(total_km, 1),
        'li': round(total_km * LI_PER_KM),
        'hours': round(hours, 2),
        'days': round(hours / MARCH_HOURS, 2),
        'ascent_m': round(ascent),
        'descent_m': round(descent),
        'max_slope_pct': round(max_slope * 100, 1),
        'elev_start': round(pts[0][2]),
        'elev_end': round(pts[-1][2]),
        'elev_max': round(max(p[2] for p in pts)),
        'profile': [round(p[2]) for p in pts],
    }


def analyze_route(terr, route, places):
    """给一条行军路线算地形代价，并与史料记载的日期对比。"""
    legs = []
    nodes = route['nodes']
    for i in range(len(nodes) - 1):
        a, b = nodes[i], nodes[i + 1]
        pa, pb = places[a['place']], places[b['place']]
        if pa['lon'] == pb['lon'] and pa['lat'] == pb['lat']:
            continue
        lp = leg_profile(terr, pa['lon'], pa['lat'], pb['lon'], pb['lat'])
        lp['from'] = a['place']
        lp['to'] = b['place']
        lp['from_at'] = a['at']
        lp['to_at'] = b['at']
        lp['reported_days'] = _days_between(a['at'], b['at'])
        lp['strain'] = (round(lp['days'] / lp['reported_days'], 2)
                        if lp['reported_days'] and lp['reported_days'] > 0 else None)
        legs.append(lp)

    total_km = sum(l['km'] for l in legs)
    total_days_model = sum(l['days'] for l in legs)
    reported = _days_between(nodes[0]['at'], nodes[-1]['at'])

    return {
        'route': route['id'],
        'legs': legs,
        'total_km': round(total_km, 1),
        'total_li': round(total_km * LI_PER_KM),
        'total_ascent_m': sum(l['ascent_m'] for l in legs),
        'model_days': round(total_days_model, 2),
        'reported_days': reported,
        'strain': round(total_days_model / reported, 2) if reported else None,
        'flat_equiv_days': round(total_km / (tobler_kmh(0) * ARMY_FACTOR * MARCH_HOURS), 2),
    }


def _days_between(a, b):
    """两个 YYYY-MM-DD 之间的天数。"""
    from datetime import date
    ya, ma, da = (int(x) for x in a.split('-'))
    yb, mb, db = (int(x) for x in b.split('-'))
    return (date(yb, mb, db) - date(ya, ma, da)).days
