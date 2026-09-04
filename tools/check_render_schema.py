# -*- coding: utf-8 -*-
"""渲染层字段契约扫描（v0.96 专项探针）。

events.json 的「undefined undefined」暴露了一类通病：数据条数对、lint 过，
但前端渲染器读取的字段与文件实际字段不匹配，导致**静默不渲染 / 显 undefined**。
本工具把同一思路扩展到其他被渲染层直接消费的数据维度：

  places.json  : lon/lat 须为数字才能绘到地形网格；name/id 缺失则标签空白
  edges.json   : from/to 须解析到已知 place/person id，否则边被静默丢弃
  control.json : （各切片自带，lint E17 只校验全局 control_liaodong.json）
                 place_id 须命中 places、party 须合法、start/end 须整数或 null

只报「无歧义的真 bug」（类型错 / 悬空引用 / 必填缺失），不误伤虚构切片的有意设计。
退出码：0 = 无 error；1 = 有 error。warning 不影响退出码（除非 --strict）。
"""
import json
import os
import sys
import glob

sys.stdout.reconfigure(encoding='utf-8')
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, 'data')

with open(os.path.join(DATA, 'scenes.json'), encoding='utf-8') as f:
    REG = json.load(f)
REG_SCENES = REG['scenes']


def load(name, d):
    p = os.path.join(DATA, d, name + '.json')
    if not os.path.exists(p):
        return None
    try:
        return json.load(open(p, encoding='utf-8'))
    except Exception as e:
        return {'_parse_error': str(e)}


def main():
    strict = '--strict' in sys.argv
    errors, warnings = [], []

    def err(scene, msg): errors.append((scene, msg))
    def warn(scene, msg): warnings.append((scene, msg))

    for key, sc in sorted(REG_SCENES.items()):
        d = sc.get('dir', key)
        dp = os.path.join(DATA, d)
        if not os.path.isdir(dp):
            continue
        is_fiction = sc.get('kind') == 'fiction'

        places = (load('places', d) or {}).get('places', []) or []
        persons = (load('persons', d) or {}).get('persons', []) or []
        edges = (load('edges', d) or {}).get('edges', []) or []
        control = load('control', d)

        place_ids = {p.get('id') for p in places}
        person_ids = {p.get('id') for p in persons}
        node_ids = place_ids | person_ids

        # ── places ──
        for p in places:
            pid = p.get('id', '<无 id>')
            if not p.get('id'):
                err(d, 'places.json 地点缺 id')
            if not p.get('name') and not p.get('title'):
                warn(d, 'places.json 地点「%s」缺 name/title（标签空白）' % pid)
            lon, lat = p.get('lon'), p.get('lat')
            if lon is not None and not isinstance(lon, (int, float)):
                err(d, 'places.json 地点「%s」的 lon=%r 不是数字——前端 typeof 校验失败，该点静默不绘到地图'
                       % (pid, lon))
            if lat is not None and not isinstance(lat, (int, float)):
                err(d, 'places.json 地点「%s」的 lat=%r 不是数字——前端 typeof 校验失败，该点静默不绘到地图'
                       % (pid, lat))

        # 非抽象切片若存在「有坐标地点」，则其余地点缺坐标 = 静默漏绘
        has_coord = any(isinstance(p.get('lon'), (int, float)) and
                        isinstance(p.get('lat'), (int, float)) for p in places)
        if has_coord:
            for p in places:
                pid = p.get('id', '<无 id>')
                if not (isinstance(p.get('lon'), (int, float)) and
                        isinstance(p.get('lat'), (int, float))):
                    warn(d, 'places.json 地点「%s」缺数字 lon/lat（同切片其他地点有坐标，此点将静默不绘）' % pid)

        # ── edges ──
        # 注：虚构切片（kind=fiction）的叙事图常引用抽象节点（如 system_setting /
        # other_cat），from/to 不在 place/person 注册表里是有意设计，跳过 dangling 与
        # label 校验，避免误报。非虚构切片的边若悬空则前端静默丢弃，属真 bug。
        if not is_fiction:
            for i, e in enumerate(edges):
                tag = 'edges[%d]' % i
                frm, to = e.get('from'), e.get('to')
                if frm not in node_ids:
                    err(d, '%s 的 from=「%s」解析不到已知 place/person id——该边被前端静默丢弃' % (tag, frm))
                if to not in node_ids:
                    err(d, '%s 的 to=「%s」解析不到已知 place/person id——该边被前端静默丢弃' % (tag, to))
                if not e.get('type'):
                    warn(d, '%s 缺 type（图例分类缺失）' % tag)
                if not e.get('label'):
                    warn(d, '%s 缺 label（关系文字空白）' % tag)

        # ── per-scene control.json ──
        if control:
            if '_parse_error' in control:
                err(d, 'control.json 解析失败：%s' % control['_parse_error'])
                continue
            segs = control.get('control', []) or []
            seats = control.get('seats', []) or []
            seat_ids = {s.get('place_id') for s in seats if s.get('place_id')}
            parties = set()
            # 受控 party 词表：默认包 parties + contested；切片内 vocab 亦可补充
            vpack = sc.get('vocab_pack')
            if vpack and not str(vpack).startswith('inline:'):
                vp = os.path.join(DATA, 'vocab', str(vpack).split(':')[-1] + '.json')
                if os.path.exists(vp):
                    try:
                        parties |= set(json.load(open(vp, encoding='utf-8')).get('parties', []))
                    except Exception:
                        pass
            if not parties:
                parties = {'明方', '清方', '朝鲜', '综述考订', '日本方', 'contested'}
            for i, s in enumerate(segs):
                tag = 'control[%d]' % i
                pid = s.get('place_id')
                if not pid:
                    err(d, '%s 缺 place_id' % tag)
                elif seat_ids and pid not in seat_ids and pid not in place_ids:
                    err(d, '%s 的 place_id「%s」不在 seats/places——控制层静默不绘该辖区' % (tag, pid))
                party = s.get('party')
                if party not in parties:
                    err(d, '%s 的 party「%s」不在受控词表（控制层配色静默失败）' % (tag, party))
                st, en = s.get('start'), s.get('end')
                if not isinstance(st, int):
                    err(d, '%s 的 start=%r 不是整数年' % (tag, st))
                if en is not None and not isinstance(en, int):
                    err(d, '%s 的 end=%r 不是整数或 null' % (tag, en))

    print('=' * 70)
    print('渲染层字段契约扫描（tools/check_render_schema.py）')
    print('=' * 70)
    if errors:
        print('\n【ERROR】%d 条' % len(errors))
        for scene, msg in errors[:60]:
            print('  · (%s) %s' % (scene, msg))
        if len(errors) > 60:
            print('  · …… 另有 %d 条' % (len(errors) - 60))
    else:
        print('\n【ERROR】无')
    print('\n【WARNING】%d 条' % len(warnings))
    for scene, msg in warnings[:40]:
        print('  · (%s) %s' % (scene, msg))
    if len(warnings) > 40:
        print('  · …… 另有 %d 条' % (len(warnings) - 40))

    print('\n' + '=' * 70)
    if errors:
        print('结论：%d 个 error（静默不渲染类 bug）必须修。' % len(errors))
        return 1
    if strict and warnings:
        print('结论：无 error，但 --strict 下 %d 个 warning 视为失败。' % len(warnings))
        return 1
    print('结论：无 error。%d 个 warning 建议处理。' % len(warnings))
    return 0


if __name__ == '__main__':
    sys.exit(main())
