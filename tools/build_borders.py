# -*- coding: utf-8 -*-
"""真实历史政区边界生成器（v0.46）

背景 / 为什么需要这个工具
------------------------------------------------------------------
`demo/control_layer.py` 侧的「县界 / 国界」原先是**示意图**：按治所做最近邻
Voronoi 在合成网格上现算，注释里写着「示意辖区·治所最近邻近似」。它能表达
"控制权归属"的语义，但几何是编的，不是史地实测复原。

本工具把 CHGIS（复旦大学中国历史地理信息系统）镜像里的**真实政区面**转成
前端可直接消费的一份 GeoJSON：

  level='pref'    真实府级政区面（每府一个多边形，带名称/类型）
  level='nation'  由府级面**拓扑合并**出的疆域外轮廓（真实国界线）

数据源选择的诚实说明（重要）
------------------------------------------------------------------
本机 CHGIS 镜像共 10 个 geojson，逐个核过覆盖范围后结论如下：

  * `1911 县级界线`   1499 面，**不含满洲**（辽东战场为空）→ 不可用
  * `1911 省级界线`   18 面，**无奉天/吉林/黑龙江**            → 不可用
  * `1911 府级界线`   267 面，辽东 bbox 仅命中永平/承德/朝阳等边缘 → 不可用
  * `T-S *`（政权/省/府/福建县）  实为**福建·唐宋**专题数据集：
                     11 个政权全是闽国/殷国/清源/平海/东都/东宁，
                     府级时序 2016 面里 1619 年活跃 74 面、
                     落在辽东 bbox 的 **0 面**                  → 不可用
  * `1820 府级界线`   320 面，经纬跨 69.76–144.75E / 3.85–55.92N，
                     覆盖含满洲的全清疆域（奉天府/锦州府/吉林…）→ **唯一可用**

因此几何底本取 **CHGIS 1820 年府级界线**。它比明末实际纪年晚约 200 年，
属于「有真实数据但非本切片纪年」——前端必须**显式标注**，绝不冒充 1619 年
明代政区。这与项目既有的「诚实边界 / 缺口是一等公民」原则一致：宁可标注
时代差，也不伪造几何。

国界怎么来的（无 shapely 的拓扑合并）
------------------------------------------------------------------
本机 Python 无 shapely / gdal。好在 CHGIS 府级面是**拓扑干净**的：把所有环
拆成无向边后统计，65.2% 的边恰好出现 2 次（相邻府共享的内部边），34.8%
出现 1 次，**没有任何边出现 >2 次**。于是：

    出现 2 次的边 = 内部界 → 抵消
    出现 1 次的边 = 疆域外轮廓 → 保留

保留边再首尾相接串成折线，即真实国界。这是标准的 dissolve 等价做法，
不依赖任何几何库。

用法
------------------------------------------------------------------
    python tools/build_borders.py                 # 默认参数生成
    python tools/build_borders.py --tol 0.006     # 调简化容差（度）
"""
from __future__ import annotations

import argparse
import json
import os
from collections import Counter, defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

SRC_PREF = os.path.join(
    ROOT, 'data', 'external', 'chgis', 'converted_ogr',
    '1820 府级界线', 'PII_Boun_1820_Pref.geojson')
OUT = os.path.join(ROOT, 'data', 'external', 'chgis', 'borders_1820.geojson')

# 数据底本纪年（写进 GeoJSON 顶层，前端据此打诚实标注）
SOURCE_YEAR = 1820
SOURCE_NAME = 'CHGIS 1820 年府级界线（复旦大学中国历史地理信息系统）'


# ────────────────────────── 几何工具 ──────────────────────────
def rings_of(geom):
    """Polygon / MultiPolygon 统一摊平成环列表。"""
    if not geom:
        return []
    t = geom.get('type')
    if t == 'Polygon':
        return list(geom.get('coordinates') or [])
    if t == 'MultiPolygon':
        return [r for poly in (geom.get('coordinates') or []) for r in poly]
    return []


def _perp2(pt, a, b):
    """点到线段的垂距平方（用于 Douglas-Peucker）。"""
    ax, ay = a
    bx, by = b
    px, py = pt
    dx, dy = bx - ax, by - ay
    if dx == 0 and dy == 0:
        return (px - ax) ** 2 + (py - ay) ** 2
    t = ((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy)
    t = 0.0 if t < 0 else (1.0 if t > 1 else t)
    cx, cy = ax + t * dx, ay + t * dy
    return (px - cx) ** 2 + (py - cy) ** 2


def simplify(pts, tol):
    """Douglas-Peucker。迭代实现，避免深递归爆栈。"""
    if tol <= 0 or len(pts) < 3:
        return pts
    t2 = tol * tol
    keep = [False] * len(pts)
    keep[0] = keep[-1] = True
    stack = [(0, len(pts) - 1)]
    while stack:
        i, j = stack.pop()
        if j <= i + 1:
            continue
        worst, wi = -1.0, -1
        a, b = pts[i], pts[j]
        for k in range(i + 1, j):
            d = _perp2(pts[k], a, b)
            if d > worst:
                worst, wi = d, k
        if worst > t2 and wi > 0:
            keep[wi] = True
            stack.append((i, wi))
            stack.append((wi, j))
    return [p for p, k in zip(pts, keep) if k]


def simplify_ring(ring, tol):
    """环需保证闭合，简化后若退化则原样返回。"""
    out = simplify(ring, tol)
    if len(out) < 4:
        return ring
    if out[0] != out[-1]:
        out.append(out[0])
    return out


# ────────────────────────── 国界：拓扑合并 ──────────────────────────
def _k(pt, q=6):
    return (round(pt[0], q), round(pt[1], q))


def outer_boundary(features):
    """出现 1 次的无向边 = 疆域外轮廓；再把边串成折线。"""
    cnt = Counter()
    for f in features:
        for ring in rings_of(f['geometry']):
            for i in range(len(ring) - 1):
                a, b = _k(ring[i]), _k(ring[i + 1])
                if a == b:
                    continue
                cnt[(a, b) if a <= b else (b, a)] += 1

    kept = [e for e, n in cnt.items() if n == 1]
    interior = sum(1 for n in cnt.values() if n == 2)
    over = sum(1 for n in cnt.values() if n > 2)
    print('  边统计：唯一 %d · 外轮廓(1次) %d · 内部(2次) %d · 异常(>2次) %d'
          % (len(cnt), len(kept), interior, over))

    # 邻接表 → 贪心串链
    adj = defaultdict(list)
    for a, b in kept:
        adj[a].append(b)
        adj[b].append(a)

    used = set()
    lines = []
    # 先从端点（度数为奇/1）起链，再处理闭环
    starts = [n for n in adj if len(adj[n]) % 2 == 1] + list(adj.keys())
    for s in starts:
        for nxt in list(adj[s]):
            e = (s, nxt) if s <= nxt else (nxt, s)
            if e in used:
                continue
            chain = [s]
            cur, prv = s, None
            while True:
                nbrs = [x for x in adj[cur]
                        if ((cur, x) if cur <= x else (x, cur)) not in used]
                if not nbrs:
                    break
                pick = nxt if (cur == s and prv is None and nxt in nbrs) else nbrs[0]
                ek = (cur, pick) if cur <= pick else (pick, cur)
                used.add(ek)
                chain.append(pick)
                prv, cur = cur, pick
                if cur == chain[0]:
                    break
            if len(chain) > 1:
                lines.append([list(p) for p in chain])
    return lines


# ────────────────────────── 主流程 ──────────────────────────
def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('--tol', type=float, default=0.004,
                    help='府界简化容差（度，约 0.004≈400m）')
    ap.add_argument('--nation-tol', type=float, default=0.008,
                    help='国界简化容差（度）')
    ap.add_argument('--min-line', type=int, default=6,
                    help='国界折线最少顶点数，低于此丢弃（去碎屑）')
    args = ap.parse_args()

    if not os.path.exists(SRC_PREF):
        raise SystemExit('缺少数据源：' + SRC_PREF)

    print('读取', os.path.relpath(SRC_PREF, ROOT))
    src = json.load(open(SRC_PREF, encoding='utf-8'))
    feats_in = src.get('features') or []
    print('  府级面 %d 个' % len(feats_in))

    out_feats = []

    # ── 1) 府级政区面（真实几何，简化后保留名称/类型）
    v_before = v_after = 0
    for f in feats_in:
        p = f.get('properties') or {}
        geom = f.get('geometry') or {}
        t = geom.get('type')
        if t == 'Polygon':
            newc = []
            for ring in geom['coordinates']:
                v_before += len(ring)
                r = simplify_ring(ring, args.tol)
                v_after += len(r)
                newc.append(r)
            g2 = {'type': 'Polygon', 'coordinates': newc}
        elif t == 'MultiPolygon':
            newp = []
            for poly in geom['coordinates']:
                nr = []
                for ring in poly:
                    v_before += len(ring)
                    r = simplify_ring(ring, args.tol)
                    v_after += len(r)
                    nr.append(r)
                newp.append(nr)
            g2 = {'type': 'MultiPolygon', 'coordinates': newp}
        else:
            continue
        out_feats.append({
            'type': 'Feature',
            'properties': {
                'level': 'pref',
                'name': p.get('NAME_CH') or p.get('NAME_PY') or '',
                'type': p.get('TYPE_CH') or '',
                'src_year': SOURCE_YEAR,
            },
            'geometry': g2,
        })
    print('  府界顶点 %d → %d（简化率 %.0f%%）'
          % (v_before, v_after, 100.0 * (1 - v_after / max(1, v_before))))

    # ── 2) 国界（府级面拓扑合并的外轮廓）
    print('合并疆域外轮廓（国界）…')
    lines = outer_boundary(feats_in)
    nb = na = 0
    kept_lines = []
    for ln in lines:
        nb += len(ln)
        s = simplify(ln, args.nation_tol)
        if len(s) < args.min_line:
            continue
        na += len(s)
        kept_lines.append(s)
    print('  折线 %d 条（过滤后 %d 条）· 顶点 %d → %d'
          % (len(lines), len(kept_lines), nb, na))
    if kept_lines:
        out_feats.append({
            'type': 'Feature',
            'properties': {
                'level': 'nation',
                'name': '清疆域界（1820 府级面合并）',
                'type': '国界',
                'src_year': SOURCE_YEAR,
            },
            'geometry': {'type': 'MultiLineString', 'coordinates': kept_lines},
        })

    gj = {
        'type': 'FeatureCollection',
        'source': SOURCE_NAME,
        'source_year': SOURCE_YEAR,
        'note': ('几何为 CHGIS 1820 年府级界线；本机 CHGIS 镜像中 1911 县/省/府 '
                 '与 T-S（福建·唐宋）诸层均不覆盖满洲，故辽东战场只能取 1820 '
                 '年底本。较明末实际纪年晚约 200 年，前端须显式标注时代差。'),
        'levels': {'pref': '真实府级政区面', 'nation': '府级面拓扑合并的疆域外轮廓'},
        'features': out_feats,
    }
    os.makedirs(os.path.dirname(OUT), exist_ok=True)
    with open(OUT, 'w', encoding='utf-8') as fh:
        json.dump(gj, fh, ensure_ascii=False, separators=(',', ':'))
    kb = os.path.getsize(OUT) / 1024.0
    print('写出 %s（%d 要素 · %.0f KB）'
          % (os.path.relpath(OUT, ROOT), len(out_feats), kb))


if __name__ == '__main__':
    main()
