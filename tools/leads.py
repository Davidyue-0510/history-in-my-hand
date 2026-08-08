# -*- coding: utf-8 -*-
"""
从 data/*/assertions.jsonl 中扫出所有 gap 层断言，
把每条 gap 的 lead 块汇总成 data/leads.json —— 这是 hub「线索」页签的总览。

设计要点：
    leads 本身就是「缺口 = 任务」这条主张的载体。
    录入者每加一条 gap，只要写一段 lead 块（where / skills / accept），
    就自动出现在合作者的「可认领任务」清单里。

    几条硬规则：
    1. lead 缺字段时记录本身是 gap——它会被漏过，但 lint 会标 W09。
       这里的扫描只挑 lead 完整的，不掩盖问题。
    2. scene 字段由当前数据目录名直接取自 data/<scene>/。
    3. effort 缺失时打「—」。
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')
OUT = os.path.join(DATA, 'leads.json')


def load_jsonl(path):
    rows = []
    with open(path, encoding='utf-8') as f:
        for lineno, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith('//'):
                continue
            rows.append((lineno, json.loads(line)))
    return rows


def main():
    leads = []
    for d in sorted(os.listdir(DATA)):
        ap = os.path.join(DATA, d, 'assertions.jsonl')
        if not os.path.exists(ap):
            continue
        for lineno, a in load_jsonl(ap):
            if a.get('layer') != 'gap':
                continue
            lead = a.get('lead') or {}
            if not all(k in lead and lead[k] for k in ('where', 'skills', 'accept')):
                # lead 块缺字段，跳过——让 lint W09 单独报
                continue
            # skills 必须是数组：写成字符串时 ' / '.join 会把整串打散成单字
            # （"文本回查" → "文 / 本 / 回 / 查"）。lint E13 会硬报错拦住源数据，
            # 这里再兜一层，保证即使有人跳过 lint 也不会产出被污染的 leads.json。
            skills = lead.get('skills', [])
            if isinstance(skills, str):
                skills = [s.strip() for s in skills.split('/') if s.strip()]
            elif not isinstance(skills, list):
                skills = [str(skills)]
            skills = [str(s).strip() for s in skills if str(s).strip()]

            leads.append({
                "id": a['id'],
                "scene": d,
                "subject": a.get('subject', ''),
                "title": a.get('value_text', '')[:60] + ('…' if len(a.get('value_text', '')) > 60 else ''),
                "missing": ' / '.join(skills) or '未填',
                "where": lead.get('where', ''),
                "skills": skills,
                "accept": lead.get('accept', ''),
                "effort": lead.get('effort', '—'),
                # issue_url 由合作者认领时再加——本脚本不臆造
                "issue_url": None,
                "_src_line": lineno,
            })

    leads.sort(key=lambda x: (x['scene'], x['id']))

    bundle = {
        "_comment": "可认领的研究线索（v0.5）。每条 gap 断言的 lead 块汇总而成。"
                    "新增 gap + lead 即可出现在此；hub / county 页的「线索」页签自动渲染。",
        "_schema_version": "0.1",
        "leads": leads,
    }

    with open(OUT, 'w', encoding='utf-8', newline='\n') as f:
        json.dump(bundle, f, ensure_ascii=False, indent=1)

    print("已生成 %s —— %d 条线索" % (OUT, len(leads)))
    by_scene = {}
    for l in leads:
        by_scene.setdefault(l['scene'], 0)
        by_scene[l['scene']] += 1
    for s, n in sorted(by_scene.items()):
        print("  · %s —— %d 条" % (s, n))


if __name__ == '__main__':
    main()