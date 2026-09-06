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

# ── G1 自动反事实派生（v0.125 · derive_sim_config.py）──
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, os.path.join(ROOT, "tools", "derivation"))
import derive_sim_config as D   # noqa: E402

hw_dir = os.path.join(ROOT, "data", "han_wudi_ruxue")
hw_as = D.load_assertions(os.path.join(hw_dir, "assertions.jsonl"))
hw_cfg = D.derive_config(hw_as)
check("G1 派生 _auto_derived 标真", hw_cfg.get("_auto_derived") is True)
check("G1 派生 scenario_type 合法",
      hw_cfg["scenario_type"] in ("reform", "engineering", "thought", "economic", "social"))
check("G1 派生 dim_targets 排除地理", "地理" not in hw_cfg["dim_targets"])
bids = [b["id"] for b in hw_cfg["branches"]]
check("G1 派生含 real+whatif 分支", "real" in bids and any(b.startswith("whatif") for b in bids))
check("G1 派生 real_branch 在分支内", hw_cfg["real_branch"] in bids)
hw_places = D.derive_places(hw_as)
check("G1 派生 places 含 changan/luoyang",
      {p["id"] for p in hw_places["places"]} >= {"changan", "luoyang"})
check("G1 派生年份跨度 -136..-100", D.derive_year_span(hw_as) == (-136, -100))

# G1 派生配置可直接喂入推演（零手 authoring 端到端）
sh_g1, be_g1, rt_g1 = S.simulate_nonmilitary("han_wudi_ruxue", "real",
                                             hw_cfg["start_year"], hw_cfg["end_year"], hw_cfg)
check("G1 派生→非军事推演 37 年时序", len(sh_g1) == 37)
check("G1 派生→Branch Event 产出", len(be_g1) >= 1)
check("G1 派生→whatif 偏离史实", any(e.get("kind") == "divergence" for e in
      S.simulate_nonmilitary("han_wudi_ruxue", "whatif", hw_cfg["start_year"], hw_cfg["end_year"], hw_cfg)[1]))

# ── G2 六维广度扩展：economic（两税法）/ social（北魏孝文帝）──
cfg2 = S.load_sim_config("tang_liangshuifa")
check("两税法 scenario_type=economic", cfg2 and cfg2["scenario_type"] == "economic")
sh2, be2, rt2 = S.simulate_nonmilitary("tang_liangshuifa", "real", 780, 800, cfg2)
check("两税法 21 年时序", len(sh2) == 21)
check("两税法 Branch Event 合规",
      all(e.get("kind") in ("divergence", "logistics", "faction", "momentum", "summary")
          and e.get("severity") in ("info", "warn", "bad")
          and isinstance(e.get("year"), int) for e in be2))
check("两税法 反事实偏离史实", abs(sh2[-1]["reform_index"] - rt2[-1]) >= 0.1)

cfg3 = S.load_sim_config("wei_xiaowen")
check("北魏 scenario_type=social", cfg3 and cfg3["scenario_type"] == "social")
sh3, be3, rt3 = S.simulate_nonmilitary("wei_xiaowen", "real", 494, 500, cfg3)
check("北魏 7 年时序", len(sh3) == 7)
check("北魏 Branch Event 产出", len(be3) >= 1)
check("北魏 反事实偏离史实", abs(sh3[-1]["reform_index"] - rt3[-1]) >= 0.1)

# ── G2 六维广度扩展：engineering（隋·大运河）──
cfg4 = S.load_sim_config("sui_canal")
check("大运河 scenario_type=engineering", cfg4 and cfg4["scenario_type"] == "engineering")
sh4, be4, rt4 = S.simulate_nonmilitary("sui_canal", "real", 605, 612, cfg4)
check("大运河 8 年时序", len(sh4) == 8)
check("大运河 Branch Event 合规",
      all(e.get("kind") in ("divergence", "logistics", "faction", "momentum", "summary")
          and e.get("severity") in ("info", "warn", "bad")
          and isinstance(e.get("year"), int) for e in be4))
check("大运河 反事实偏离史实", abs(sh4[-1]["reform_index"] - rt4[-1]) >= 0.1)

print("\nsimulate: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
