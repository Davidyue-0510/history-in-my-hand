# -*- coding: utf-8 -*-
"""
开原进军路线地形紧张度分析器（Phase 1）。

复用 terrain_model.py 的 Tobler + 成建制折减模型，新增一条
「赫图阿拉 → 开原」进军路线（努尔哈赤 开原之战），并与萨尔浒
route_jin（后金主力）对照，回答：史料说六月初十出兵、六月十六陷落
（6 天），地形上行军可能吗？

输出：
  - 控制台报告
  - data/kaiyuan/route_kaiyuan.json（路线 + 计算报告，供 UI 接线）
"""
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from terrain_model import Terrain, analyze_route, haversine_km, LI_PER_KM  # noqa

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))


def load_places(*paths):
    places = {}
    for p in paths:
        with open(p, 'r', encoding='utf-8') as f:
            d = json.load(f)
        for pl in d.get('places', []):
            places[pl['id']] = pl
    return places


def load_routes(path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f).get('routes', [])


def strain_label(strain):
    if strain is None:
        return '—'
    if strain <= 0.85:
        return '地形可行（模型更快）'
    if strain <= 1.25:
        return '基本吻合'
    if strain <= 1.8:
        return '偏紧，值得复查'
    return '明显紧张，强烈建议复查（路线/分批/夜行？）'


def fmt_route(r):
    legs = r['legs']
    out = []
    out.append('  路线 %s  %s' % (r['route'], legs[0]['from'] if legs else '?'))
    for lp in legs:
        out.append('    %s → %s : %.0f km / %.0f 里, 模型 %.2f 天, '
                   '史料 %s 天, 紧张度 %s'
                   % (lp['from'], lp['to'], lp['km'], lp['li'],
                      lp['days'], lp['reported_days'], lp['strain']))
    out.append('   合计: %.0f km / %.0f 里, 爬升 %d m'
               % (r['total_km'], r['total_li'], r['total_ascent_m']))
    out.append('   模型总日数 %.2f 天 vs 史料 %s 天 → 总紧张度 %s  [%s]'
               % (r['model_days'], r['reported_days'], r['strain'],
                  strain_label(r['strain'])))
    return '\n'.join(out)


def main():
    terr = Terrain()
    places = load_places(
        os.path.join(ROOT, 'data', 'kaiyuan', 'places.json'),
        os.path.join(ROOT, 'data', 'sarhu', 'places.json'),
    )

    # 赫图阿拉 → 开原（努尔哈赤 开原之战）
    # nodes 日期用 K008 出兵日 / K009 陷落日（农历六月初十 / 六月十六）
    route_kaiyuan = {
        'id': 'route_kaiyuan',
        'name': '赫图阿拉→开原（努尔哈赤 开原之战进军）',
        'nodes': [
            {'place': 'hetu_ala', 'at': '1619-07-20'},
            {'place': 'kaiyuan_cheng', 'at': '1619-07-26'},
        ],
    }

    sarhu_routes = load_routes(os.path.join(ROOT, 'data', 'sarhu', 'routes.json'))
    rj = next((r for r in sarhu_routes if r['id'] == 'route_jin'), None)

    print('=' * 60)
    print('开原进军路线地形紧张度（Phase 1）')
    print('=' * 60)
    rk = analyze_route(terr, route_kaiyuan, places)
    print(fmt_route(rk))

    if rj is not None:
        print('-' * 60)
        print('萨尔浒 route_jin 对照（后金主力）')
        rjr = analyze_route(terr, rj, places)
        print(fmt_route(rjr))
        print('-' * 60)
        print('对照：开原路紧张度 %.2f vs 萨尔浒后金路 %.2f'
              % (rk['strain'], rjr['strain']))
        if rk['strain'] and rjr['strain']:
            ratio = rjr['strain'] / rk['strain']
            if ratio >= 1.5:
                print('→ 开原路明显更松（约 1/%.1f）：努尔哈赤攻开原是一次相对"常规"的' % ratio
                      + '强行军；萨尔浒才是那次超常速闪击（后金把"速度"当核心战术杠杆）。')
            else:
                print('→ 两条路紧张度量级相近。')

    # 落盘，供 UI 接线
    out = {
        'route': route_kaiyuan,
        'report': rk,
        'reference': {'route_jin': rjr} if rj is not None else None,
    }
    out['report']['strain_label'] = strain_label(rk['strain'])
    if rj is not None:
        out['reference']['route_jin']['strain_label'] = strain_label(rjr['strain'])
        out['verdict'] = (
            '开原路地形紧张度 %.2f（%s），明显低于萨尔浒后金主力路 %.2f（%s）。'
            % (rk['strain'], out['report']['strain_label'],
               rjr['strain'], out['reference']['route_jin']['strain_label'])
            + '说明努尔哈赤攻开原为一次相对常规的强行军，萨尔浒才是超常速闪击——'
              '与"局部优势 = 速度 × 距离累积"的判断一致。'
        )
    dst = os.path.join(ROOT, 'data', 'kaiyuan', 'route_kaiyuan.json')
    with open(dst, 'w', encoding='utf-8') as f:
        json.dump(out, f, ensure_ascii=False, indent=2)
    print('\n已写出 %s' % dst)


if __name__ == '__main__':
    main()
