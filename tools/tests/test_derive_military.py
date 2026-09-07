# -*- coding: utf-8 -*-
"""军事场景 IC/rules 通用派生产物零漂移 + 结构不变量回归测试（北极星③ G1 · 军事通用化）。

闭合缺口④：军事 SIM_IC / SIM_RULES 由 derive_military_sim.build(scene) 从
military_seeds/<scene>.json（场景专属）+ military_seeds/_shared.json（通用三阶层模型）
合成，取代手书样例。本测试确保：

  1) 零漂移：build() 合成对象 与 tools/tests/fixtures/sim_ic_<scene>.json /
     sim_rules_<scene>.json（由 extract_military_seeds.js 从手书样例抽取的基准）
     深度相等 —— 生成器未引入静默数据漂移；
  2) 诚实边界：两产物 meta._auto_derived 标 True（派生产物，非手 authoring 考据）；
  3) 结构不变量：control / personsByFaction / params / threeTier / missing_dims /
     rules R1-R7 / branches B1_* / tick=1 / keySeats 场景一致性；
  4)（可选）若 demo/sim_ic_<scene>.js / sim_rules_<scene>.js 已重生，node --check 语法。
"""
import json, os, sys

HERE = os.path.dirname(os.path.abspath(__file__))
TOOLS = os.path.dirname(HERE)
DERIV = os.path.join(TOOLS, "derivation")
ROOT = os.path.dirname(TOOLS)
FIX = os.path.join(HERE, "fixtures")
sys.path.insert(0, DERIV)

import derive_military_sim as dm

ok, fail = 0, 0
def check(n, c):
    global ok, fail
    if c:
        ok += 1
        print("  [ok]", n)
    else:
        fail += 1
        print("  [XX]", n)

THREE_TIER_KEYS = ("centerStability", "localEduMono", "grassrootMob",
                   "legitimacy", "treasury", "milPower", "poverty")


def deep_eq(a, b):
    return json.dumps(a, sort_keys=True, ensure_ascii=False) == \
           json.dumps(b, sort_keys=True, ensure_ascii=False)


def main():
    scenes = dm.list_scenes()
    check("至少 1 个军事场景种子", len(scenes) >= 1)
    if not scenes:
        return 1

    for scene in scenes:
        seed = dm.load_seed(scene)
        ic, rules = dm.build(scene, seed)
        rel = "military[%s]" % scene

        # ── 1) 零漂移：与手书基准夹具深度相等 ──
        fx_ic = os.path.join(FIX, "sim_ic_%s.json" % scene)
        fx_ru = os.path.join(FIX, "sim_rules_%s.json" % scene)
        has_fx = os.path.exists(fx_ic) and os.path.exists(fx_ru)
        check("%s 基准夹具齐全" % rel, has_fx)
        if has_fx:
            with open(fx_ic, "r", encoding="utf-8") as f:
                fxic = json.load(f)
            with open(fx_ru, "r", encoding="utf-8") as f:
                fxru = json.load(f)
            check("%s build(ic) 零漂移 == 夹具" % rel, deep_eq(ic, fxic))
            check("%s build(rules) 零漂移 == 夹具" % rel, deep_eq(rules, fxru))

        # ── 2) 诚实边界：_auto_derived 标真 ──
        check("%s ic.meta._auto_derived 标真" % rel,
              bool(ic.get("meta", {}).get("_auto_derived")))
        check("%s rules.meta._auto_derived 标真" % rel,
              bool(rules.get("meta", {}).get("_auto_derived")))

        # ── 3) IC 结构不变量 ──
        ctrl = ic.get("control", {})
        check("%s ic.control 存在且非空" % rel, isinstance(ctrl, dict) and len(ctrl) > 0)
        if scene == "liaodong":
            # 辽东为规范场景：36 治所硬约束（阶段2 维度契约 #16）
            check("%s ic.control == 36 治所（硬约束）" % rel, len(ctrl) == 36)
        pbf = ic.get("personsByFaction", {})
        check("%s ic.personsByFaction 含 feng_jiang/无派系" % rel,
              "feng_jiang" in pbf and "无派系" in pbf)
        params = ic.get("params", {})
        check("%s ic.params 含 qingExec/mingExec" % rel,
              "qingExec" in params and "mingExec" in params)
        tt = ic.get("threeTier", {})
        check("%s ic.threeTier 七阶层指标齐全" % rel,
              all(k in tt for k in THREE_TIER_KEYS))
        imd = ic.get("missing_dims", {})
        check("%s ic.missing_dims 含 population/dist（#10 诚实占位）" % rel,
              "population" in imd and all("dist" in imd.get(k, {}) for k in imd))

        # ── 4) RULES 结构不变量 ──
        ids = [r.get("id") for r in rules.get("rules", [])]
        check("%s rules 含 R1-R7（#6 声明式规则）" % rel,
              set("R%d" % i for i in range(1, 8)).issubset(set(ids)))
        bids = [b.get("id") for b in rules.get("branches", [])]
        check("%s branches 含 B1_* 反事实分支（#12）" % rel,
              any(isinstance(b, str) and b.startswith("B1_") for b in bids))
        rmd = rules.get("missing_dims", {})
        check("%s rules.missing_dims 含 probability/logistics/population（#7/#9/#10）" % rel,
              all(k in rmd for k in ("probability", "logistics", "population")))
        check("%s rules.meta.tick == 1（#11 步长=1年）" % rel,
              rules.get("meta", {}).get("tick") == 1)
        # keySeats 场景一致性：种子有则产物必有，无则必无
        want_ks = "keySeats" in seed.get("rules", {})
        have_ks = "keySeats" in rules
        check("%s keySeats 与种子一致（%s）" % (rel, "有" if want_ks else "无"),
              want_ks == have_ks)

    # ── 5) 可选：node --check 已重生的 demo JS（语法不腐烂）──
    node = None
    for cand in ("node", "nodejs"):
        import shutil
        p = shutil.which(cand)
        if p:
            node = p
            break
    if node:
        import subprocess
        # 直接校验 demo 下对应文件（若存在）
        for scene in scenes:
            seed_s = dm.load_seed(scene)
            ig = seed_s.get("ic_global")
            rg = seed_s.get("rules_global")
            for g, fn in ((ig, "sim_ic_%s.js" % scene), (rg, "sim_rules_%s.js" % scene)):
                fp = os.path.join(ROOT, "demo", fn)
                if not os.path.exists(fp):
                    continue
                rc = subprocess.run([node, "--check", fp],
                                    cwd=ROOT, capture_output=True)
                check("%s demo/%s node --check 语法" % (scene, fn), rc.returncode == 0)
    else:
        print("  [--] 未找到 node，跳过 demo JS 语法校验（重建 demo 后跑）")

    print("\n[derive_military] ok=%d fail=%d" % (ok, fail))
    return 0 if fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())
