# -*- coding: utf-8 -*-
"""项目现状定量审计：测「声明覆盖」vs「断言真实支撑」的差距。"""
import json, os, collections, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
D = lambda *p: os.path.join(ROOT, *p)

def jload(p):
    try:
        with open(p, encoding='utf-8') as f: return json.load(f)
    except Exception: return None

def jloadl(p):
    out=[]
    try:
        with open(p, encoding='utf-8') as f:
            for ln in f:
                ln=ln.strip()
                if ln: out.append(json.loads(ln))
    except Exception: pass
    return out

scenes_meta = jload(D('data','scenes.json'))
scenes = scenes_meta.get('scenes', {})
epochs = scenes_meta.get('epochs', {})
regions = scenes_meta.get('regions', [])
stats = jload(D('data','stats.json')) or {}

print('='*74)
print('SECTION 1 · 规模基本盘')
print('='*74)
print(f'场景总数 (scenes.json) : {len(scenes)}')
print(f'区域 (regions)         : {len(regions)}')
print(f'时代 (epochs)          : {len(epochs)}')
print(f'stats.json 总量        : {json.dumps({k:v for k,v in stats.items() if isinstance(v,(int,float,str))}, ensure_ascii=False)[:220]}')

# ── 逐场景扫描 ──
recs=[]
for sid, sm in scenes.items():
    ddir = D('data', sm.get('dossier_label') or sid)
    if not os.path.isdir(ddir): ddir = D('data', sid)
    a = jloadl(D(ddir,'assertions.jsonl')) if os.path.isdir(ddir) else []
    ctl = jload(D(ddir,'control.json')) or {}
    ctl_list = ctl.get('control',[]) if isinstance(ctl,dict) else (ctl if isinstance(ctl,list) else [])
    pl = jload(D(ddir,'places.json')) or {}
    ev = jload(D(ddir,'events.json')) or {}
    pe = jload(D(ddir,'persons.json')) or {}
    so = jload(D(ddir,'sources.json')) or {}
    n_pl = len(pl.get('places',pl) if isinstance(pl,dict) else [])
    n_ev = len(ev.get('events',ev) if isinstance(ev,dict) else [])
    n_pe = len(pe.get('persons',pe) if isinstance(pe,dict) else [])
    n_so = len(so.get('sources',so) if isinstance(so,dict) else [])

    # 断言级 dims 真值
    union=set(); fallback=0; ds=collections.Counter()
    for x in a:
        dims = x.get('dims') or []
        union |= set(dims)
        if set(dims) <= {6} and dims: fallback += 1
        ds[x.get('dim_source') or '(none)'] += 1
    declared = set(sm.get('dims') or [])
    recs.append(dict(id=sid, kind=sm.get('kind'), region=sm.get('region'),
                     epoch=sm.get('epoch'), n_a=len(a), union=union, declared=declared,
                     fallback=fallback, ds=ds, n_ctl=len(ctl_list),
                     n_pl=n_pl, n_ev=n_ev, n_pe=n_pe, n_so=n_so,
                     llm=sid.endswith('_llm')))

tot_a = sum(r['n_a'] for r in recs)
tot_ctl = sum(r['n_ctl'] for r in recs)
tot_pl = sum(r['n_pl'] for r in recs)
tot_ev = sum(r['n_ev'] for r in recs)
tot_pe = sum(r['n_pe'] for r in recs)
tot_so = sum(r['n_so'] for r in recs)
print(f'实际文件汇总        : 断言 {tot_a} | 人物 {tot_pe} | 地点 {tot_pl} | 事件 {tot_ev} | 来源 {tot_so} | 控制段 {tot_ctl}')

print()
print('='*74)
print('SECTION 2 · 时段 / 区域 / 类型 分布')
print('='*74)
def dist(key, title, n=40):
    c=collections.Counter(r[key] or '(空)' for r in recs)
    print(f'-- {title} (共 {len(c)} 类) --')
    for k,v in c.most_common(n): print(f'   {str(k)[:26]:<28} {v:>4}')
dist('epoch','按时代 (epoch)')
print()
dist('kind','按类型 (kind)')
print()
dist('region','按区域 (region)')

print()
print('='*74)
print('SECTION 3 · 六维覆盖真相（核心：声明 vs 断言真值）')
print('='*74)
full_real, full_declared_only, weak, empty = [], [], [], []
for r in recs:
    u, dcl = r['union'], r['declared']
    if not r['n_a']: empty.append(r); continue
    real6 = (u == {1,2,3,4,5,6})
    decl6 = (dcl == {1,2,3,4,5,6})
    if real6: full_real.append(r)
    elif decl6: full_declared_only.append(r)
    else: weak.append(r)
print(f'✅ 断言真实支撑六维全集的场景 : {len(full_real)}')
print(f'⚠️  仅 scenes.json 声明六维、断言未支撑 : {len(full_declared_only)}   <-- 名不副实')
print(f'🔶 断言未覆盖六维（诚实欠覆盖）: {len(weak)}')
print(f'⬜ 零断言空壳场景            : {len(empty)}')
print()
print(f'-- 仅声明未支撑（前 25）-- scene / 断言数 / 声明 / 断言并集 --')
for r in full_declared_only[:25]:
    print(f'   {r["id"][:30]:<32} n={r["n_a"]:<4} 声明={sorted(r["declared"])} 实际={sorted(r["union"])}')
print()
print(f'-- 断言未覆盖六维（前 20，看缺哪几维）--')
for r in weak[:20]:
    miss = sorted({1,2,3,4,5,6} - r['union'])
    print(f'   {r["id"][:30]:<32} n={r["n_a"]:<4} 缺={miss}')

print()
print('='*74)
print('SECTION 4 · 断言 dims 质量：fallback 兜底率')
print('='*74)
tot_fb = sum(r['fallback'] for r in recs)
print(f'断言总数 {tot_a}｜其中 dims 仅 [6] 兜底 {tot_fb}  ({tot_fb*100.0/max(tot_a,1):.1f}%)')
print()
print('-- dim_source 分布（全局）--')
allds=collections.Counter()
for r in recs: allds.update(r['ds'])
for k,v in allds.most_common(): print(f'   {str(k):<16} {v:>6}  ({v*100.0/max(tot_a,1):.1f}%)')
print()
print('-- fallback 率最高（全靠 [6] 兜底）的场景 前 20 --')
cand=[r for r in recs if r['n_a']>=5]
cand.sort(key=lambda r:-(r['fallback']*1.0/r['n_a']))
for r in cand[:20]:
    print(f'   {r["id"][:30]:<32} n={r["n_a"]:<4} 兜底={r["fallback"]}/{r["n_a"]}  ({r["fallback"]*100.0//r["n_a"]}%)')

print()
print('='*74)
print('SECTION 5 · 产出方式：真实 LLM 管线 vs 种子脚本')
print('='*74)
llm=[r for r in recs if r['llm']]
print(f'真实 LLM 端到端落库（*_llm）: {len(llm)} / {len(recs)}  ({len(llm)*100.0/len(recs):.1f}%)')
for r in sorted(llm,key=lambda x:x['id']):
    print(f'   {r["id"][:30]:<32} 断言{r["n_a"]:<4} 并集{sorted(r["union"])} 控制段{r["n_ctl"]}')
print()
print(f'其余 {len(recs)-len(llm)} 个为种子脚本/手工生成（未经真实 LLM 抽取管线）')

print()
print('='*74)
print('SECTION 6 · 图层齐备度')
print('='*74)
def cnt(f): return sum(1 for r in recs if r[f]>0)
print(f'有控制段 (control.json 非空) : {cnt("n_ctl")} / {len(recs)}')
print(f'有地点坐标 (places)          : {cnt("n_pl")} / {len(recs)}')
print(f'有事件 (events)              : {cnt("n_ev")} / {len(recs)}')
print(f'有来源 (sources)             : {cnt("n_so")} / {len(recs)}')
thin=[r for r in recs if r['n_a']<5]
print(f'薄片（断言 < 5）             : {len(thin)}')
print(f'  分布: {collections.Counter(r["n_a"] for r in thin).most_common(8)}')

print()
print('='*74)
print('SECTION 7 · 时代七维 (epochs) 真假：实填 vs 空壳 stub')
print('='*74)
def leaves(o):
    if isinstance(o,dict):
        s=0
        for v in o.values(): s+=leaves(v)
        return s
    if isinstance(o,list): return sum(leaves(v) for v in o)
    return 0 if o in (None,'',[],{}) else 1
real_ep, stub_ep = [], []
for ek, ev in epochs.items():
    sub = {k:ev.get(k) for k in ('tech','international','economy','society','doctrine','anchors','strategic') if k in ev}
    n = leaves(sub)
    (real_ep if n>=8 else stub_ep).append((ek,n))
print(f'实填时代（七个维表叶子值 >= 8）: {len(real_ep)}')
for ek,n in sorted(real_ep,key=lambda x:-x[1]): print(f'   {ek[:24]:<26} 叶子值 {n}')
print()
print(f'空壳/近乎空壳时代 (< 8)      : {len(stub_ep)}')
for ek,n in sorted(stub_ep,key=lambda x:x[1]): print(f'   {ek[:24]:<26} 叶子值 {n}')
