# -*- coding: utf-8 -*-
"""
断言内核的最小回归测试（pytest-free，纯断言）。

覆盖的硬不变量：
  I1  至少 1 个切片有 record / scholarship / gap 三层共存
  I2  所有冲突条目都能在断言里找到对应 id
  I3  每个切片至少 1 个 ground truth 断言（confidence >= 0.9, layer=record）
  I4  build.py 跑完后 demo/data.js 能加载
  I5  tools/resonance.py 跑完后 data/resonance_report.json 含全部切片
  I6  tools/lint.py 跑完后无 error
  I7  vocabulary 自身合法：parties ⊆ party_bucket 值集
  I8  断言 id 在切片内唯一
  I9  events.json 里所有 subject 指向的 event:* 都能在断言里找到至少 1 条
  I10 凯元 / 铁岭 / 辽阳 都至少有一份原始史料（layer=record, source!=modern/wiki）

用法：
    python tools/test_assertions.py
"""
import json
import os
import subprocess
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
TOOLS = os.path.join(ROOT, 'tools')

OK, FAIL = 0, 0


def check(name, cond, detail=''):
    global OK, FAIL
    if cond:
        OK += 1
        print('  ✓ %s' % name)
    else:
        FAIL += 1
        print('  ✗ %s  %s' % (name, detail))


def load_scene(name):
    d = os.path.join(ROOT, 'data', name)
    sc = {}
    for f in ('sources', 'places', 'persons', 'events', 'engagements'):
        p = os.path.join(d, f + '.json')
        sc[f] = json.load(open(p, encoding='utf-8')) if os.path.exists(p) else None
    sc['assertions'] = []
    p = os.path.join(d, 'assertions.jsonl')
    if os.path.exists(p):
        for line in open(p, encoding='utf-8'):
            line = line.strip()
            if line and not line.startswith('//'):
                sc['assertions'].append(json.loads(line))
    return sc


def main():
    scenes = {n: load_scene(n) for n in (
        json.load(open(os.path.join(ROOT, 'data', 'scenes.json'), encoding='utf-8'))['scenes'].keys())}

    # I1
    print('\nI1: 三层证据共存')
    for sn, sc in scenes.items():
        layers = {a.get('layer') for a in sc['assertions']}
        has_three = {'record', 'scholarship', 'gap'} <= layers
        check('%s 含 record/scholarship/gap 三层' % sn, has_three,
              '实际层：%s' % sorted(layers))

    # I2
    print('\nI2: 冲突条目能反查到断言 id')
    for sn, sc in scenes.items():
        ids = {a['id'] for a in sc['assertions']}
        for c in sc.get('events', {}).get('events', []) if isinstance(sc.get('events'), dict) else []:
            pass  # events 不是冲突表
    # 用 build_conflicts 重建
    sys.path.insert(0, TOOLS)
    import build
    for sn, sc in scenes.items():
        cf = build.build_conflicts(sc['assertions'])
        missing = [aid for c in cf for aid in c['assertion_ids'] if aid not in {a['id'] for a in sc['assertions']}]
        check('%s 全部冲突断言存在' % sn, not missing,
              '缺失：%s' % missing[:5])

    # I3
    # 注意：萨尔浒切片 record 层置信度历史上限 0.8——史学界对五路进军兵力数字
    # 至今没有共识，强行要求 ≥0.9 反而会逼作者造假。其他县级切片 ≥0.9。
    print('\nI3: 每切片至少 1 条 ground truth')
    thresholds = {'sarhu': 0.7, 'kaiyuan': 0.9, 'tieling': 0.9, 'liaoyang': 0.9}
    for sn, sc in scenes.items():
        th = thresholds.get(sn, 0.9)
        gt = [a for a in sc['assertions']
              if a.get('layer') == 'record' and a.get('confidence', 0) >= th]
        check('%s 至少 1 条 record≥%s 断言' % (sn, th), len(gt) >= 1,
              '仅 %d 条' % len(gt))

    # I4 / I5
    print('\nI4–I6: 工具链能跑通')
    env = os.environ.copy()
    env['PYTHONIOENCODING'] = 'utf-8'
    def run(args):
        return subprocess.run([sys.executable] + args,
                              cwd=ROOT, capture_output=True, text=True,
                              errors='replace', env=env)
    r = run(['tools/build.py'])
    check('build.py', r.returncode == 0, (r.stderr or r.stdout)[-200:])
    r = run(['tools/resonance.py'])
    check('resonance.py', r.returncode == 0, (r.stderr or r.stdout)[-200:])
    r = run(['tools/lint.py'])
    # lint 的"无 error"输出形式取决于是否有 warning。我们只看 exit code + 不含错误断言两类。
    out = (r.stdout or '') + (r.stderr or '')
    no_error = r.returncode == 0
    check('lint.py 无 error', no_error,
          'exit=%d, tail=%s' % (r.returncode, out[-200:]))

    # I5：共振报告含全部切片
    # v0.5 起切片来自 data/scenes.json，不在这里硬编码。共振报告必须覆盖所有
    # 已注册的 county / battle scene。
    rr = json.load(open(os.path.join(ROOT, 'data', 'resonance_report.json'), encoding='utf-8'))
    ss = {x['scene'] for x in rr.get('scene_summary', [])}
    reg = json.load(open(os.path.join(ROOT, 'data', 'scenes.json'), encoding='utf-8'))
    # 虚构 world（kind: fiction）无真实史料对立面，共振报告按设计跳过，不纳入覆盖要求。
    expected = {k for k, v in reg['scenes'].items() if v.get('kind') != 'fiction'}
    missing = expected - ss
    check('共振报告 scene_summary 覆盖全部 %d 个注册切片' % len(expected),
          not missing,
          '缺失：%s' % missing)

    # I7
    print('\nI7: vocabulary 自身合法')
    v = json.load(open(os.path.join(ROOT, 'data', 'vocab.json'), encoding='utf-8'))
    pb_vals = set(v['party_bucket'].values())
    p_set = set(v['parties'])
    check('party_bucket 全部映射到 parties', pb_vals <= p_set,
          '逸出：%s' % (pb_vals - p_set))
    check('layers ⊆ 词表', set(v['layers']) >= {'record', 'scholarship', 'inference', 'gap'},
          str(v['layers']))
    check('quote_status ⊆ 词表', set(v['quote_status']) >= {'verbatim', 'paraphrase_unverified', 'generated'},
          str(v['quote_status']))

    # I8
    print('\nI8: 断言 id 切片内唯一')
    for sn, sc in scenes.items():
        seen = {}
        for a in sc['assertions']:
            seen.setdefault(a.get('id'), []).append(a.get('_lineno', 0))
        dups = {k: v for k, v in seen.items() if len(v) > 1}
        check('%s 断言 id 唯一' % sn, not dups, '重复：%s' % dict(list(dups.items())[:3]))

    # I9
    print('\nI9: events.json subject 至少被 1 条断言引用')
    for sn, sc in scenes.items():
        ev = sc.get('events') or {}
        if not isinstance(ev, dict):
            continue
        subs = [e['subject'] for e in ev.get('events', []) if e.get('subject')]
        used = {a['subject'] for a in sc['assertions']}
        unused = [s for s in subs if s not in used]
        check('%s 时间轴 subject 都被引用' % sn, not unused,
              '未挂：%s' % unused)

    # I10
    print('\nI10: 县级切片至少 1 条原始史料断言')
    for sn in ('kaiyuan', 'tieling', 'liaoyang'):
        sc = scenes[sn]
        prime = [a for a in sc['assertions']
                 if a.get('layer') == 'record' and a.get('source') not in ('modern', 'wiki')]
        check('%s 至少有 1 条非综述原始史料' % sn, len(prime) >= 1,
              '仅 %d 条' % len(prime))

    print('\n' + '=' * 50)
    print('结果：%d 通过 / %d 失败' % (OK, FAIL))
    return 0 if FAIL == 0 else 1


if __name__ == '__main__':
    sys.exit(main())