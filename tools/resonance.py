# -*- coding: utf-8 -*-
"""
三方史料共振引擎（Phase 2 → v0.4 泛化版）。

为每个事件（subject 以 "event:" 开头）聚合 明方 / 清方 / 朝鲜 / 综述 阵营，
计算三个维度：
  - coverage 覆盖度：三方有几方有该事件的直接记载
  - divergence 分歧度：同谓词下不同值的比例（参照 build_conflicts）
  - gap_rate 缺口率：事件下 gap 层断言 / 总断言

共振度（可量化"立场靠来源派生"）
  resonance = (coverage / 3) * (1 - divergence) * (1 - gap_rate)

v0.4 改动：不再硬编码 kaiyuan/sarhu 两个切片，改为自动扫描
`data/*/assertions.jsonl`，任何新切片落盘后无需改代码即可进入共振表。
同一事件被多个切片同时记载时（如 event:sarhu 出现在萨尔浒与开原），
断言会合并统计，并在报告里标出它跨了哪几个切片。

输出：
  - 控制台报告
  - data/resonance_report.json（结构化）
  - data/resonance_report.md（人读）
"""
import glob
import json
import os
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(ROOT, 'data', 'vocab.json'), encoding='utf-8') as _f:
    VOCAB = json.load(_f)
PARTY_BUCKET = VOCAB['party_bucket']
PARTIES = [p for p in VOCAB['parties'] if p != '综述考订']

SCENE_NAMES = {
    'sarhu': '萨尔浒',
    'kaiyuan': '开原',
    'tieling': '铁岭',
    'liaoyang': '辽阳',
}

EVENT_NAMES = {
    'event:sarhu': '萨尔浒之战（广义）',
    'event:sarhu_battle': '萨尔浒主战场',
    'event:dusong_cross': '杜松渡浑河（西路）',
    'event:shangjianya': '尚间崖（北路·马林）',
    'event:abudaligang': '阿布达里岗（东路·刘綎）',
    'event:south_retreat': '南路溃逃（李如柏）',
    'event:kaifa': '开铁之战（开原陷落）',
    'event:yehe': '叶赫灭亡',
    'event:tuoshan': '抚顺之战',
    'event:fushun': '抚顺之战',
    'event:tieling_fall': '铁岭陷落（1619）',
    'event:kuanbian_abandon': '弃宽甸六堡',
    'event:liaoyang_fall': '辽阳陷落（1621）',
    'event:hunhe_zhan': '浑河之战（1621）',
}


def bucket(party):
    return PARTY_BUCKET.get(party, party or '其他')


def party_of(src_party, a):
    """source id 是切片内作用域的——查表必须带切片，否则同名 id 会跨片串味。"""
    return src_party.get((a.get('_scene'), a.get('source')))


def resonance_for_subject(assertions, src_party, subject):
    rel = [a for a in assertions if a.get('subject') == subject]
    if not rel:
        return None

    by_party = defaultdict(list)
    for a in rel:
        p = bucket(party_of(src_party, a))
        by_party[p].append(a)

    coverage = sum(1 for p in PARTIES if by_party.get(p))

    pred_values = defaultdict(set)
    for a in rel:
        if a.get('layer') == 'gap':
            continue
        v = a.get('value', a.get('value_text'))
        pred_values[a['predicate']].add(str(v))
    n_pred = len(pred_values)
    n_div = sum(1 for v in pred_values.values() if len(v) > 1)
    divergence = (n_div / n_pred) if n_pred else 0.0

    total = len(rel)
    gap_n = sum(1 for a in rel if a.get('layer') == 'gap')
    gap_rate = (gap_n / total) if total else 0.0

    resonance = (coverage / 3.0) * (1.0 - divergence) * (1.0 - gap_rate)

    scenes = sorted({a.get('_scene') for a in rel if a.get('_scene')})

    def _party_list(name):
        items = by_party.get(name, [])
        return [{
            'id': a['id'],
            'predicate': a['predicate'],
            'value_text': a.get('value_text'),
            'source': a['source'],
            'layer': a['layer'],
            'scene': a.get('_scene'),
        } for a in items]

    return {
        'subject': subject,
        'name': EVENT_NAMES.get(subject, subject),
        'scenes': scenes,
        'scene_names': [SCENE_NAMES.get(s, s) for s in scenes],
        'total': total,
        'gap_count': gap_n,
        'coverage': '%d/3' % coverage,
        'coverage_frac': round(coverage / 3.0, 3),
        'divergence': round(divergence, 3),
        'gap_rate': round(gap_rate, 3),
        'resonance': round(resonance, 3),
        'party_counts': {p: len(by_party.get(p, [])) for p in PARTIES + ['综述考订']},
        'parties': {
            p: _party_list(p) for p in PARTIES + ['综述考订']
        },
    }


def load_all_scenes():
    """自动扫描 data/<scene>/assertions.jsonl，返回 (断言列表, source→party)。

    每条断言注入 `_scene` 字段，便于报告标注跨切片事件。
    """
    rows = []
    src_party = {}
    scenes = []
    for path in sorted(glob.glob(os.path.join(ROOT, 'data', '*', 'assertions.jsonl'))):
        scene = os.path.basename(os.path.dirname(path))
        scenes.append(scene)
        with open(path, 'r', encoding='utf-8') as f:
            for line in f:
                line = line.strip()
                if line and not line.startswith('//'):
                    r = json.loads(line)
                    r['_scene'] = scene
                    rows.append(r)
        sp = os.path.join(ROOT, 'data', scene, 'sources.json')
        if os.path.exists(sp):
            with open(sp, encoding='utf-8') as f:
                for s in json.load(f)['sources']:
                    src_party[(scene, s['id'])] = s.get('party', '其他')
    return rows, src_party, scenes


def scene_summary(assertions, src_party, scene):
    """单切片层面的汇总：断言数、四层分布、三方覆盖、平均共振。"""
    rel = [a for a in assertions if a.get('_scene') == scene]
    if not rel:
        return None
    layers = defaultdict(int)
    for a in rel:
        layers[a.get('layer', '?')] += 1
    parties = defaultdict(int)
    for a in rel:
        parties[bucket(party_of(src_party, a))] += 1
    subs = sorted({a['subject'] for a in rel if a.get('subject', '').startswith('event:')})
    rs = [resonance_for_subject(rel, src_party, s) for s in subs]
    rs = [r for r in rs if r]
    avg = round(sum(r['resonance'] for r in rs) / len(rs), 3) if rs else 0.0
    best = max(rs, key=lambda r: r['resonance']) if rs else None
    return {
        'scene': scene,
        'name': SCENE_NAMES.get(scene, scene),
        'total': len(rel),
        'layers': dict(layers),
        'party_counts': dict(parties),
        'event_count': len(rs),
        'avg_resonance': avg,
        'best_event': best['name'] if best else None,
        'best_resonance': best['resonance'] if best else None,
    }


def fmt_report(rs):
    lines = []
    tag = ('/'.join(rs['scene_names'])) if rs['scene_names'] else '—'
    lines.append('  %-32s 共振 %.3f  覆盖 %s  分歧 %.2f  缺口 %.2f  (%d 条 · %s)'
                 % (rs['name'] + ' [' + rs['subject'] + ']',
                    rs['resonance'], rs['coverage'],
                    rs['divergence'], rs['gap_rate'], rs['total'], tag))
    for p in PARTIES + ['综述考订']:
        n = rs['party_counts'].get(p, 0)
        if n:
            lines.append('      %s：%d 条' % (p, n))
    return '\n'.join(lines)


def main():
    all_assertions, all_party, scene_list = load_all_scenes()

    subjects = sorted({a['subject'] for a in all_assertions
                       if a.get('subject', '').startswith('event:')})

    results = []
    print('=' * 68)
    print('三方史料共振报告（v0.4 · 全切片自动扫描）')
    print('切片：%s' % '、'.join(SCENE_NAMES.get(s, s) for s in scene_list))
    print('=' * 68)
    for s in subjects:
        rs = resonance_for_subject(all_assertions, all_party, s)
        if rs is None:
            continue
        results.append(rs)
        print(fmt_report(rs))
        print()

    scenes = [scene_summary(all_assertions, all_party, s) for s in scene_list]
    scenes = [s for s in scenes if s]
    print('-' * 68)
    print('切片汇总')
    for s in scenes:
        print('  %-6s 断言 %-4d 事件 %-3d 平均共振 %.3f  最高：%s (%.3f)'
              % (s['name'], s['total'], s['event_count'], s['avg_resonance'],
                 s['best_event'] or '—', s['best_resonance'] or 0.0))
    print()

    # 按共振度升序（最不共振的最值得补）
    results_sorted = sorted(results, key=lambda r: r['resonance'])

    out_json = {
        'meta': {
            'definition': 'resonance = (coverage/3) * (1 - divergence) * (1 - gap_rate)',
            'parties': PARTIES + ['综述考订'],
            'scenes': scene_list,
        },
        'scene_summary': scenes,
        'events': results_sorted,
    }
    json_path = os.path.join(ROOT, 'data', 'resonance_report.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(out_json, f, ensure_ascii=False, indent=2)
    print('已写出 %s' % json_path)

    md_path = os.path.join(ROOT, 'data', 'resonance_report.md')
    lines = ['# 三方史料共振报告', '',
             '> 生成：`tools/resonance.py` · 公式 '
             '`resonance = (coverage/3) × (1−divergence) × (1−gap_rate)`',
             '> 立场（明方 / 清方 / 朝鲜 / 综述考订）按来源 `source.party` 派生，',
             '> 不手动贴标签——这是本项目与所有历史可视化产品的分界线。',
             '',
             '> v0.4 起本报告自动扫描 `data/*/assertions.jsonl`，新切片落盘即入表。',
             '', '## 切片汇总', '',
             '| 切片 | 断言 | 事件 | 平均共振 | 最高共振事件 | 四层分布 |',
             '|---|---|---|---|---|---|']
    for s in scenes:
        lay = ' / '.join('%s %d' % (k, v) for k, v in sorted(s['layers'].items()))
        lines.append('| %s | %d | %d | **%.3f** | %s（%.3f） | %s |'
                     % (s['name'], s['total'], s['event_count'], s['avg_resonance'],
                        s['best_event'] or '—', s['best_resonance'] or 0.0, lay))
    lines += ['', '## 事件共振表（按共振度升序：最不共振的最值得补）', '',
              '| 事件 | 切片 | 共振 | 覆盖 | 分歧 | 缺口 | 总数 | 明/清/朝鲜/综述 |',
              '|---|---|---|---|---|---|---|---|']
    for rs in results_sorted:
        pc = rs['party_counts']
        lines.append('| %s | %s | **%.3f** | %s | %.2f | %.2f | %d | %d / %d / %d / %d |'
                     % (rs['name'], '/'.join(rs['scene_names']) or '—',
                        rs['resonance'], rs['coverage'],
                        rs['divergence'], rs['gap_rate'], rs['total'],
                        pc.get('明方', 0), pc.get('清方', 0),
                        pc.get('朝鲜', 0), pc.get('综述考订', 0)))
    lines += ['', '## 解读', '',
              '- **高共振**（≈1.0）：三方都覆盖、无分歧、无缺口 → 这件事史料共识强。',
              '- **低共振**（≈0.0）：覆盖不足、分歧剧烈、或充满缺口 → 这就是"补这条史料能撬动多大"的最直白答案。',
              '- 萨尔浒 `event:sarhu` 与开铁 `event:kaifa` 已通过 K026 / K026a–d 完成三方闭合。',
              '- 新入表的铁岭 / 辽阳切片当前共振偏低，**这不是 bug，是待补清单**：'
              '缺的主要是朝鲜方视角与清方细节，见各切片 `layer: gap` 断言。',
              '']
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print('已写出 %s' % md_path)


if __name__ == '__main__':
    main()
