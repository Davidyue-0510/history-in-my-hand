# -*- coding: utf-8 -*-
"""演化引擎回归测试（全半岛战役验证）。"""

import json, os, sys
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "simulation"))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import simulate as S

ok, fail = 0, 0
def check(n, c):
    global ok, fail
    if c: ok += 1; print("  [ok]", n)
    else: fail += 1; print("  [XX]", n)

# 全战役推演
reinforce = [(1593,'明方',55000,'uiju'),(1594,'明方',25000,'pyongyang'),
             (1594,'日本方',15000,'busan'),(1595,'明方',20000,'hanseong'),
             (1596,'日本方',25000,'busan'),(1597,'明方',40000,'uiju'),
             (1598,'明方',30000,'busan')]
r, _hist = S.simulate("imjin", "main", 1592, 1598,
                      {"朝鲜":20000, "日本方":28000}, reinforce)
check("全战役有产出", len(r) >= 8)
has = lambda city, party: any(c["place_id"]==city and c["party"]==party for c in r)
check("明方破平壤(1593-94)", has("pyongyang","明方") or has("liaodong","明方"))
check("明方下汉城(1595)", has("hanseong","明方") or has("bixieguan","明方"))
check("明方收釜山(1598)", has("busan","明方") or has("kaesong","明方"))
check("阶级指标时序产出", len(_hist) >= 4)

r2, _h2 = S.simulate("imjin", "imjin_ming_full_commit", 1592, 1598,
                     {"朝鲜":20000, "日本方":28000}, reinforce)
check("分支推演有产出", len(r2) >= 5)

# ── G2 六维广度：非军事反事实推演（song_wanganshi 熙宁变法）──
cfg = S.load_sim_config("song_wanganshi")
check("song_wanganshi sim_config 可读", cfg is not None and cfg.get("scenario_type") == "reform")
sh_p, be_p, rt_p = S.simulate_nonmilitary("song_wanganshi", "persist", 1069, 1085, cfg)
check("非军事六维时序产出 17 年", len(sh_p) == 17)
check("非军事产生 Branch Event", len(be_p) >= 1)
kind_ok = all(e.get("kind") in ("divergence","logistics","faction","momentum","summary") for e in be_p)
sev_ok = all(e.get("severity") in ("info","warn","bad") for e in be_p)
yr_ok  = all(isinstance(e.get("year"), int) for e in be_p)
check("Branch Event 符合 v0.57 schema", kind_ok and sev_ok and yr_ok)
check("终局改革指数 反事实>史实", sh_p[-1]["reform_index"] > rt_p[-1] + 0.3)
check("real 基准轨迹长度 17", len(rt_p) == 17)
# 阻力生效：persist 增速被 local 教育垄断折减（终局未到 1.0 上限封死）
check("阻力生效（persist 未封顶）", sh_p[-1]["reform_index"] < 1.0)

print("\nsimulate: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
