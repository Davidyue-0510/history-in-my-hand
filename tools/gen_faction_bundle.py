# -*- coding: utf-8 -*-
"""把 data/vocab/ming_qing.json 的派系推演参数编译成前端可用的单一真值包。

产物：demo/_faction_ming.js  ->  window.FACTION_VOCAB
消费者：demo/sim_ic_liaodong.js / demo/sim_ic_sarhu.js（factions / factionDynamics）
        demo/sim_engine.html（R6 朝堂内耗 / 党派面板）
        demo/sim_map.html（沙盘+模拟器合体页派系面板）

设计要点
--------
1. 单一真值：九派的 power / self_interest / reinforce_willingness / belief_no_fall
   过去硬编码在两个 sim_ic_*.js 里（双份、易漂移）。现在只在 vocab 维护，
   本脚本负责 snake_case -> camelCase 归一化，前端只读编译产物。
2. 配色也来自 vocab 的 faction_colors（配色单一真值原则）。
3. file:// 可用：产物是普通 <script> 标签数据，不走 fetch。
4. 纯确定性：无随机、无网络；派系顺序沿用 vocab 里的声明顺序（与旧 IC 数组同序）。
"""
from __future__ import annotations

import io
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOCAB = os.path.join(ROOT, 'data', 'vocab', 'ming_qing.json')
OUT = os.path.join(ROOT, 'demo', '_faction_ming.js')

REQUIRED_SIM = ('power', 'self_interest', 'reinforce_willingness', 'belief_no_fall')


def load_vocab() -> dict:
    with io.open(VOCAB, 'r', encoding='utf-8') as f:
        return json.load(f)


def build(v: dict) -> dict:
    factions = v.get('factions') or {}
    colors = v.get('faction_colors') or {}
    dyn = v.get('faction_dynamics') or {}
    if not factions:
        raise SystemExit('[FAIL] vocab.factions 为空')
    if not dyn:
        raise SystemExit('[FAIL] vocab.faction_dynamics 缺失（原 sim_ic 的 factionDynamics 应已提升为单源）')

    out = []
    for fid, f in factions.items():
        sim = f.get('sim')
        if not isinstance(sim, dict):
            raise SystemExit('[FAIL] 派系 %s 缺 sim 子对象（推演参数未提升为单源）' % fid)
        missing = [k for k in REQUIRED_SIM if k not in sim]
        if missing:
            raise SystemExit('[FAIL] 派系 %s 的 sim 缺字段：%s' % (fid, ','.join(missing)))
        yrs = f.get('period_years')
        if not (isinstance(yrs, list) and len(yrs) == 2 and all(isinstance(x, int) for x in yrs)):
            raise SystemExit('[FAIL] 派系 %s 的 period_years 必须是 [起,止] 公元整数年' % fid)
        if yrs[0] > yrs[1]:
            raise SystemExit('[FAIL] 派系 %s 的 period_years 起 > 止' % fid)
        color = colors.get(fid)
        if not color:
            raise SystemExit('[FAIL] 派系 %s 在 faction_colors 无配色（配色单一真值）' % fid)
        for k in ('power', 'self_interest', 'reinforce_willingness'):
            val = sim[k]
            if not isinstance(val, (int, float)) or not (0.0 <= float(val) <= 1.0):
                raise SystemExit('[FAIL] 派系 %s 的 sim.%s 必须是 0–1 标量' % (fid, k))
        out.append({
            'id': fid,
            'name': f.get('name') or fid,
            'color': color,
            'side': sim.get('side', 'ming'),
            'period': [int(yrs[0]), int(yrs[1])],
            'power': round(float(sim['power']), 4),
            'selfInterest': round(float(sim['self_interest']), 4),
            'reinforce': round(float(sim['reinforce_willingness']), 4),
            'beliefNoFall': bool(sim['belief_no_fall']),
            'beliefNote': sim.get('belief_note', ''),
            'interest': f.get('interest', ''),
            'biasNote': f.get('bias_note', ''),
            'bases': f.get('bases') or [],
        })

    bundle = {
        'meta': {
            'source': 'data/vocab/ming_qing.json',
            'generated_by': 'tools/gen_faction_bundle.py',
            'count': len(out),
            'schema': 'faction-sim/1',
            'note': ('明末九派推演参数单一真值。power=朝堂相对影响力(prior)；selfInterest=私利优先度；'
                     'reinforce=愿向前线增援度；beliefNoFall=是否相信「明不亡」（九派皆真，历史 irony：'
                     '正因不信会亡才内斗不止）。beliefNote 记录各派具体的自欺逻辑（心怀鬼胎）。'
                     '三个 0–1 标量均为先验估计，故 SIM_RULES/SIM_IC 的 missing_dims.faction 带 dist 诚实标注。'),
        },
        'factions': out,
        'dynamics': {
            'courtCohesionBase': dyn.get('court_cohesion_base'),
            'infightAmp': dyn.get('infight_amp'),
            'note': dyn.get('note', ''),
        },
    }
    for k in ('courtCohesionBase', 'infightAmp'):
        val = bundle['dynamics'][k]
        if not isinstance(val, (int, float)):
            raise SystemExit('[FAIL] faction_dynamics 缺 %s' % k)
    return bundle


def emit(bundle: dict) -> str:
    body = json.dumps(bundle, ensure_ascii=False, indent=1)
    by_id = '\n'.join([
        '(function(){ var B=window.FACTION_VOCAB; B.byId={};',
        ' B.factions.forEach(function(f){ B.byId[f.id]=f; });',
        ' B.activeAt=function(Y,side){ return B.factions.filter(function(f){',
        '   return (!side || f.side===side) && Y>=f.period[0] && Y<=f.period[1]; }); };',
        ' // 把单源派系挂到某个 SIM_IC 上（各场景 IC 共用同一份九派；深拷贝防跨场景串改）。',
        ' B.attachTo=function(ic){',
        '   if(!ic) return false;',
        '   ic.factions = B.factions.map(function(f){ return Object.assign({}, f); });',
        '   ic.factionDynamics = Object.assign({}, B.dynamics);',
        '   ic.factionSource = B.meta.source;',
        '   return true;',
        ' };',
        '})();',
    ])
    head = (
        '// 自动生成 —— 请勿手改。源：data/vocab/ming_qing.json\n'
        '//   （factions[].sim + factions[].period_years + faction_colors + faction_dynamics）\n'
        '// 生成器：python tools/gen_faction_bundle.py\n'
        '// 用途：明末九派推演参数的**唯一**前端真值源。sim_ic_*.js 与 sim_engine/sim_map 只读这里，\n'
        '//       禁止在任何 demo 文件里再硬编码 power/selfInterest/reinforce/beliefNoFall。\n'
        '// file:// 可用（普通 script 标签，不走 fetch）。\n'
    )
    return head + 'window.FACTION_VOCAB = ' + body + ';\n' + by_id + '\n'


def main() -> int:
    v = load_vocab()
    bundle = build(v)
    js = emit(bundle)
    with io.open(OUT, 'w', encoding='utf-8', newline='\n') as f:
        f.write(js)
    fs = bundle['factions']
    print('[OK] %s  (%d 派, cohesion=%s, amp=%s)' % (
        os.path.relpath(OUT, ROOT).replace('\\', '/'), len(fs),
        bundle['dynamics']['courtCohesionBase'], bundle['dynamics']['infightAmp']))
    print('     ' + ' / '.join('%s:%s' % (f['id'], f['power']) for f in fs))
    believers = sum(1 for f in fs if f['beliefNoFall'])
    print('     信「明不亡」: %d/%d；带 belief_note: %d' % (
        believers, len(fs), sum(1 for f in fs if f['beliefNote'])))
    return 0


if __name__ == '__main__':
    sys.exit(main())
