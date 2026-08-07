# -*- coding: utf-8 -*-
"""
断言内核校验器（v0.4）。

这个项目的全部主张——"冲突自动发现""立场靠来源派生""缺口是一等公民"——
都建立在一个前提上：**数据本身是规整的**。
一旦 source.party 写歪、layer 写错、quote_status 漏标，上层的共振度、冲突
面板、四层开关就会静默给出错误答案，而且没人会发现。

本工具就是那个守门员。它检查：

  E 级（error，必须修）
    E01 断言缺必填字段
    E02 layer 不在受控词表
    E03 quote_status 不在受控词表
    E04 断言引用了不存在的 source
    E05 source.party 不在受控词表（→ 该来源会被共振统计静默丢弃）
    E06 同一 source id 在不同切片声明了不同 party
    E07 断言 id 在切片内重复
    E08 断言引用了不存在的 place / person / event
    E09 conflicts 引用了不存在的断言 id
    E10 record 层断言没有 quote
    E11 record 层却标 quote_status=generated（史料层不能是推演出来的）
    E12 gap 层 confidence 不为 0（缺口没有置信度可言）

  W 级（warning，该修）
    W01 引文标 verbatim 但项目整体尚未完成点校本核对
    W02 同一书名用了不同的 source id（跨切片）
    W03 某切片的 sources 有条目从未被任何断言引用
    W04 事件三方覆盖为 0（谁都没记，多半是 party 配错而非真没史料）
    W05 断言 subject 为 event:* 但没有任何 events.json 条目 subject 指向它
        （时间轴与断言两个命名空间脱钩，点时间轴切不到史料面板）
    W06 切片间 schema 漂移：某些切片的 source 有 stance 字段，某些没有
    W08 同一 source id 在不同切片的 stance / distance_label 不一致
        （同一本书不可能在开原是当代记录、在铁岭是后朝追述）
    W07 gap 层断言的 value_text 为空（缺口必须说清缺什么）

用法：
    python tools/lint.py            # 全量检查
    python tools/lint.py --strict   # 有 warning 也返回非零（用于 CI）

退出码：0 = 无 error；1 = 有 error（--strict 下 warning 也算）
"""
import glob
import json
import os
import sys
from collections import defaultdict

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')

with open(os.path.join(DATA, 'vocab.json'), encoding='utf-8') as f:
    VOCAB = json.load(f)

LAYERS = set(VOCAB['layers'])
QUOTE_STATUS = set(VOCAB['quote_status'])
PARTY_BUCKET = VOCAB['party_bucket']
PARTIES3 = [p for p in VOCAB['parties'] if p != '综述考订']

REQUIRED = ['id', 'subject', 'predicate', 'source', 'layer']

SCENE_NAMES = {'sarhu': '萨尔浒', 'kaiyuan': '开原',
               'tieling': '铁岭', 'liaoyang': '辽阳'}


class Report:
    def __init__(self):
        self.errors = []
        self.warnings = []

    def err(self, code, scene, msg):
        self.errors.append((code, scene, msg))

    def warn(self, code, scene, msg):
        self.warnings.append((code, scene, msg))

    def ok(self):
        return not self.errors


def load_jsonl(path):
    rows = []
    with open(path, encoding='utf-8') as f:
        for lineno, line in enumerate(f, 1):
            line = line.strip()
            if not line or line.startswith('//'):
                continue
            try:
                r = json.loads(line)
            except json.JSONDecodeError as e:
                raise SystemExit('%s 第 %d 行 JSON 解析失败: %s' % (path, lineno, e))
            r['_lineno'] = lineno
            rows.append(r)
    return rows


def load_scene(scene):
    d = os.path.join(DATA, scene)
    out = {'scene': scene}
    for name in ('sources', 'places', 'persons', 'events', 'edges', 'engagements'):
        p = os.path.join(d, name + '.json')
        out[name] = json.load(open(p, encoding='utf-8')) if os.path.exists(p) else None
    ap = os.path.join(d, 'assertions.jsonl')
    out['assertions'] = load_jsonl(ap) if os.path.exists(ap) else []
    return out


def scene_dirs():
    return sorted(os.path.basename(os.path.dirname(p))
                  for p in glob.glob(os.path.join(DATA, '*', 'assertions.jsonl')))


def check_scene(sc, rep):
    scene = sc['scene']
    srcs = (sc['sources'] or {}).get('sources', [])
    src_ids = {s['id'] for s in srcs}
    src_by_id = {s['id']: s for s in srcs}

    places = (sc['places'] or {}).get('places', [])
    persons = (sc['persons'] or {}).get('persons', [])
    events = (sc['events'] or {}).get('events', [])
    place_ids = {p['id'] for p in places}
    person_ids = {p['id'] for p in persons}
    event_ids = {e['id'] for e in events}
    # 时间轴事件 / 交战点通过显式 subject 字段与断言 subject 挂钩
    # （见 events.json / engagements.json 的 _comment_subject）
    engagements = (sc['engagements'] or {}).get('engagements', [])
    event_subjects = ({e['subject'] for e in events if e.get('subject')} |
                      {e['subject'] for e in engagements if e.get('subject')})

    # ── sources ──
    for s in srcs:
        party = s.get('party')
        if party not in PARTY_BUCKET:
            rep.err('E05', scene,
                    'source「%s」(%s) 的 party =「%s」不在 data/vocab.json 受控词表内，'
                    '该来源将被共振统计静默丢弃' % (s['id'], s.get('title', ''), party))

    # ── assertions ──
    seen_ids = {}
    used_sources = set()
    for a in sc['assertions']:
        aid = a.get('id', '<无 id>')
        loc = '%s:L%d' % (scene, a.get('_lineno', 0))

        for k in REQUIRED:
            if not a.get(k):
                rep.err('E01', scene, '%s %s 缺必填字段「%s」' % (loc, aid, k))

        if a.get('layer') not in LAYERS:
            rep.err('E02', scene, '%s %s 的 layer =「%s」不合法（应为 %s）'
                    % (loc, aid, a.get('layer'), '/'.join(sorted(LAYERS))))

        qs = a.get('quote_status')
        if qs is not None and qs not in QUOTE_STATUS:
            rep.err('E03', scene, '%s %s 的 quote_status =「%s」不合法' % (loc, aid, qs))

        src = a.get('source')
        if src and src not in src_ids:
            rep.err('E04', scene, '%s %s 引用了不存在的 source「%s」' % (loc, aid, src))
        if src:
            used_sources.add(src)

        if aid in seen_ids:
            rep.err('E07', scene, '断言 id「%s」重复（L%d 与 L%d）'
                    % (aid, seen_ids[aid], a.get('_lineno', 0)))
        else:
            seen_ids[aid] = a.get('_lineno', 0)

        subj = a.get('subject', '')
        if ':' in subj:
            kind, key = subj.split(':', 1)
            if kind == 'place' and key not in place_ids:
                rep.err('E08', scene, '%s %s 的 subject 指向未登记的地点「%s」' % (loc, aid, key))
            elif kind == 'person' and key not in person_ids:
                rep.err('E08', scene, '%s %s 的 subject 指向未登记的人物「%s」' % (loc, aid, key))
            elif kind == 'event' and subj not in event_subjects:
                rep.warn('W05', scene,
                         '%s %s 的 subject 是「%s」，但 events.json 中没有条目声明 '
                         'subject = "%s"——时间轴点不到这批史料' % (loc, aid, subj, subj))

        if a.get('layer') == 'record' and not a.get('quote'):
            rep.err('E10', scene, '%s %s 是 record 层却没有 quote（史料层必须能指到原文）'
                    % (loc, aid))

        if a.get('layer') == 'record' and qs == 'generated':
            rep.err('E11', scene, '%s %s 是 record 层却标 quote_status=generated——'
                    '史料层不能是推演出来的，应改 inference 层或改标 paraphrase_unverified'
                    % (loc, aid))

        if a.get('layer') == 'gap' and a.get('confidence'):
            rep.err('E12', scene, '%s %s 是 gap 层但 confidence=%s（缺口没有置信度可言，应为 0）'
                    % (loc, aid, a.get('confidence')))

        if a.get('layer') == 'gap' and not (a.get('value_text') or '').strip():
            rep.warn('W07', scene, '%s %s 是 gap 层但 value_text 为空——缺口必须说清缺什么'
                     % (loc, aid))

        if qs == 'verbatim':
            rep.warn('W01', scene, '%s %s 标为 verbatim；本项目尚未完成点校本逐字核对，'
                     '请确认已核对，否则应降级为 paraphrase_unverified' % (loc, aid))

    for sid in sorted(src_ids - used_sources):
        rep.warn('W03', scene, 'source「%s」(%s) 登记了但没有任何断言引用它'
                 % (sid, src_by_id[sid].get('title', '')))

    # ── conflicts（若切片自带 conflicts.json）──
    cpath = os.path.join(DATA, scene, 'conflicts.json')
    if os.path.exists(cpath):
        cf = json.load(open(cpath, encoding='utf-8')).get('conflicts', [])
        for c in cf:
            for aid in c.get('assertion_ids', []):
                if aid not in seen_ids:
                    rep.err('E09', scene, 'conflict「%s」引用了不存在的断言 id「%s」'
                            % (c.get('id', '?'), aid))


def check_cross_scene(scenes, rep):
    party_by_src = defaultdict(set)
    title_by_id = defaultdict(set)
    id_by_title = defaultdict(set)
    meta_by_src = defaultdict(set)
    has_stance = {}

    for sc in scenes:
        srcs = (sc['sources'] or {}).get('sources', [])
        has_stance[sc['scene']] = any('stance' in s for s in srcs)
        for s in srcs:
            party_by_src[s['id']].add(s.get('party'))
            title_by_id[s['id']].add(s.get('title'))
            id_by_title[s.get('title')].add(s['id'])
            meta_by_src[s['id']].add((s.get('stance'), s.get('distance_label')))

    for sid, metas in sorted(meta_by_src.items()):
        if len(metas) > 1:
            rep.warn('W08', '*', 'source id「%s」在不同切片的 stance/时间距离不一致：%s'
                     % (sid, ' | '.join(sorted('%s / %s' % m for m in metas))))

    for sid, parties in sorted(party_by_src.items()):
        if len(parties) > 1:
            rep.err('E06', '*', 'source id「%s」在不同切片声明了不同 party：%s'
                    % (sid, ' / '.join(sorted(str(p) for p in parties))))

    for title, ids in sorted(id_by_title.items()):
        if len(ids) > 1:
            rep.warn('W02', '*', '同一书名《%s》使用了不同的 source id：%s'
                     % (title, ' / '.join(sorted(ids))))

    yes = [k for k, v in has_stance.items() if v]
    no = [k for k, v in has_stance.items() if not v]
    if yes and no:
        rep.warn('W06', '*', 'schema 漂移：%s 的 source 带 stance 字段，%s 不带'
                 % ('/'.join(sorted(yes)), '/'.join(sorted(no))))


def check_coverage(scenes, rep):
    """事件三方覆盖为 0 —— 多半是 party 配错，而不是真的三方都没记。"""
    for sc in scenes:
        srcs = (sc['sources'] or {}).get('sources', [])
        pmap = {s['id']: PARTY_BUCKET.get(s.get('party')) for s in srcs}
        by_event = defaultdict(set)
        for a in sc['assertions']:
            if a.get('subject', '').startswith('event:'):
                by_event[a['subject']].add(pmap.get(a.get('source')))
        for ev, ps in sorted(by_event.items()):
            if not (ps & set(PARTIES3)):
                rep.warn('W04', sc['scene'],
                         '事件「%s」的三方覆盖为 0（现有来源分桶：%s）——'
                         '检查 source.party 是否配错' % (ev, ps or '{}'))


def main():
    strict = '--strict' in sys.argv
    names = scene_dirs()
    scenes = [load_scene(n) for n in names]

    rep = Report()
    for sc in scenes:
        check_scene(sc, rep)
    check_cross_scene(scenes, rep)
    check_coverage(scenes, rep)

    print('=' * 70)
    print('断言内核校验（tools/lint.py）')
    print('切片：%s' % '、'.join(SCENE_NAMES.get(n, n) for n in names))
    print('断言总数：%d' % sum(len(s['assertions']) for s in scenes))
    print('=' * 70)

    def dump(items, kind):
        if not items:
            print('  %s：无' % kind)
            return
        by_code = defaultdict(list)
        for code, scene, msg in items:
            by_code[code].append((scene, msg))
        for code in sorted(by_code):
            rows = by_code[code]
            print('\n  [%s] × %d' % (code, len(rows)))
            for scene, msg in rows[:12]:
                print('      · (%s) %s' % (SCENE_NAMES.get(scene, scene), msg))
            if len(rows) > 12:
                print('      · …… 另有 %d 条同类' % (len(rows) - 12))

    print('\n【ERROR】%d 条' % len(rep.errors))
    dump(rep.errors, 'error')
    print('\n【WARNING】%d 条' % len(rep.warnings))
    dump(rep.warnings, 'warning')

    print('\n' + '=' * 70)
    if rep.errors:
        print('结论：%d 个 error 必须修。' % len(rep.errors))
        return 1
    if strict and rep.warnings:
        print('结论：无 error，但 --strict 模式下 %d 个 warning 视为失败。' % len(rep.warnings))
        return 1
    print('结论：无 error。%d 个 warning 建议处理。' % len(rep.warnings))
    return 0


if __name__ == '__main__':
    sys.exit(main())
