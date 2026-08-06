# -*- coding: utf-8 -*-
"""
三方史料共振引擎（Phase 2）。

为每个事件（subject 以 "event:" 开头）聚合 明方 / 清方 / 朝鲜 / 综述 阵营，
计算三个维度：
  - coverage 覆盖度：三方有几方有该事件的直接记载
  - divergence 分歧度：同谓词下不同值的比例（参照 build_conflicts）
  - gap_rate 缺口率：事件下 gap 层断言 / 总断言

共振度（可量化"立场靠来源派生"）
  resonance = (coverage / 3) * (1 - divergence) * (1 - gap_rate)

输出：
  - 控制台报告
  - data/resonance_report.json（结构化）
  - data/resonance_report.md（人读）
"""
import json
import os
import sys
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

PARTY_BUCKET = {
    '明·开原兵备道': '明方', '清修·明臣': '明方', '明': '明方', '明廷官方': '明方',
    '清': '清方', '清修官史': '清方', '清·地方志': '清方',
    '朝鲜': '朝鲜', '朝鲜官方': '朝鲜', '盟国旁观': '朝鲜',
    '学界': '综述考订', '中性考订': '综述考订', '综述': '综述考订', '二手综述': '综述考订',
}
PARTIES = ['明方', '清方', '朝鲜']

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
}


def bucket(party):
    return PARTY_BUCKET.get(party, party or '其他')


def resonance_for_subject(assertions, src_party, subject):
    rel = [a for a in assertions if a.get('subject') == subject]
    if not rel:
        return None

    by_party = defaultdict(list)
    for a in rel:
        p = bucket(src_party.get(a['source']))
        by_party[p].append(a)

    coverage = sum(1 for p in PARTIES if by_party.get(p))

    pred_values = defaultdict(set)
    for a in rel:
        if a.get('layer') == 'gap':
            continue
        pred_values[a['predicate']].add(str(a.get('value')))
    n_pred = len(pred_values)
    n_div = sum(1 for v in pred_values.values() if len(v) > 1)
    divergence = (n_div / n_pred) if n_pred else 0.0

    total = len(rel)
    gap_n = sum(1 for a in rel if a.get('layer') == 'gap')
    gap_rate = (gap_n / total) if total else 0.0

    resonance = (coverage / 3.0) * (1.0 - divergence) * (1.0 - gap_rate)

    def _party_list(name):
        items = by_party.get(name, [])
        return [{
            'id': a['id'],
            'predicate': a['predicate'],
            'value_text': a.get('value_text'),
            'source': a['source'],
            'layer': a['layer'],
        } for a in items]

    return {
        'subject': subject,
        'name': EVENT_NAMES.get(subject, subject),
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


def load_kaiyuan_assertions():
    rows = []
    with open(os.path.join(ROOT, 'data', 'kaiyuan', 'assertions.jsonl'),
              'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('//'):
                rows.append(json.loads(line))
    sources = json.load(open(os.path.join(ROOT, 'data', 'kaiyuan', 'sources.json'),
                              encoding='utf-8'))['sources']
    src_party = {s['id']: s.get('party', '其他') for s in sources}
    return rows, src_party


def load_sarhu_assertions():
    rows = []
    with open(os.path.join(ROOT, 'data', 'sarhu', 'assertions.jsonl'),
              'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('//'):
                rows.append(json.loads(line))
    sources = json.load(open(os.path.join(ROOT, 'data', 'sarhu', 'sources.json'),
                              encoding='utf-8'))['sources']
    src_party = {s['id']: s.get('party', '其他') for s in sources}
    return rows, src_party


def fmt_report(rs):
    lines = []
    lines.append('  %-32s 共振 %.3f  覆盖 %s  分歧 %.2f  缺口 %.2f  (%d 条)'
                 % (rs['name'] + ' [' + rs['subject'] + ']',
                    rs['resonance'], rs['coverage'],
                    rs['divergence'], rs['gap_rate'], rs['total']))
    for p in PARTIES + ['综述考订']:
        n = rs['party_counts'].get(p, 0)
        if n:
            lines.append('      %s：%d 条' % (p, n))
    return '\n'.join(lines)


def main():
    kaiyuan_a, kaiyuan_sp = load_kaiyuan_assertions()
    sarhu_a, sarhu_sp = load_sarhu_assertions()

    all_assertions = kaiyuan_a + sarhu_a
    all_party = {**kaiyuan_sp, **sarhu_sp}

    subjects = sorted({a['subject'] for a in all_assertions
                       if a.get('subject', '').startswith('event:')})

    results = []
    print('=' * 64)
    print('三方史料共振报告（Phase 2）')
    print('=' * 64)
    for s in subjects:
        rs = resonance_for_subject(all_assertions, all_party, s)
        if rs is None:
            continue
        results.append(rs)
        print(fmt_report(rs))
        print()

    # 按共振度升序（最不共振的最值得补）
    results_sorted = sorted(results, key=lambda r: r['resonance'])

    out_json = {
        'meta': {
            'definition': 'resonance = (coverage/3) * (1 - divergence) * (1 - gap_rate)',
            'parties': PARTIES + ['综述考订'],
        },
        'events': results_sorted,
    }
    json_path = os.path.join(ROOT, 'data', 'resonance_report.json')
    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(out_json, f, ensure_ascii=False, indent=2)
    print('已写出 %s' % json_path)

    md_path = os.path.join(ROOT, 'data', 'resonance_report.md')
    lines = ['# 三方史料共振报告', '',
             '> 生成：tools/resonance.py · 公式 '
             '`resonance = (coverage/3) × (1−divergence) × (1−gap_rate)`',
             '> 立场（明方 / 清方 / 朝鲜 / 综述考订）按来源 `source.party` 派生，',
             '> 不手动贴标签——这是本项目与所有历史可视化产品的分界线。', '',
             '## 事件共振表（按共振度升序：最不共振的最值得补）', '',
             '| 事件 | 共振 | 覆盖 | 分歧 | 缺口 | 总数 | 明/清/朝鲜/综述 |',
             '|---|---|---|---|---|---|---|']
    for rs in results_sorted:
        pc = rs['party_counts']
        lines.append('| %s | **%.3f** | %s | %.2f | %.2f | %d | %d / %d / %d / %d |'
                     % (rs['name'], rs['resonance'], rs['coverage'],
                        rs['divergence'], rs['gap_rate'], rs['total'],
                        pc.get('明方', 0), pc.get('清方', 0),
                        pc.get('朝鲜', 0), pc.get('综述考订', 0)))
    lines += ['', '## 解读', '',
              '- **高共振**（≈1.0）：三方都覆盖、无分歧、无缺口 → 这件事史料共识强。',
              '- **低共振**（≈0.0）：覆盖不足、分歧剧烈、或充满缺口 → 这就是"补这条史料能撬动多大"的最直白答案。',
              '- 萨尔浒 `event:sarhu` 与开铁 `event:kaifa` 已在上一轮通过 K026 / K026a–d 完成三方闭合。',
              '']
    with open(md_path, 'w', encoding='utf-8') as f:
        f.write('\n'.join(lines))
    print('已写出 %s' % md_path)


if __name__ == '__main__':
    main()