#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""军事场景 SIM_IC / SIM_RULES 通用派生产生器（北极星③ G1 · 军事 IC/rules 通用化）。

背景
----
军事推演活在 demo/ 手书 JS（SIM_IC / SIM_RULES 全局变量），由 sim_engine.js 按
场景全局变量名读取，与非军事 sim_config.json 是两套独立消费者。原本每新增一个
军事历史事件都要手书一整对 IC/rules 文件（现仅 liaodong / sarhu 两个样例），
违反「换朝代=加数据，零改代码」的扩展范式。

本生成器闭合缺口④：把军事 IC/rules 的派生通用化——
- 通用块（明清华三阶层模型本体：IC params / threeTier / IC missing_dims、
  RULES state_vars / RULES missing_dims）单源固化于 military_seeds/_shared.json
  （由 extract_military_seeds.js 从手书样例抽取，避免重复硬编码与漂移）；
- 每场景专属数据（control / 人物派系 / meta / rules 全表 / branches / keySeats 等）
  活在 military_seeds/<scene>.json（零手 authoring 引擎的唯一输入）；
- build(scene, seed) 合成 window.SIM_IC_<scene> / SIM_RULES_<scene> 数据对象，
  标 _auto_derived=true（诚实边界：派生产物，非手 authoring 考据）；
- emit_js(out_dir) 写盘（IC 含派系单源挂载 IIFE；IFFE 仅替换全局名，逻辑与手书一致）。

任何新军事历史事件：写一份种子 JSON + 在 sim_engine.js SCENES 注册全局名，
即得完整 SIM 三件套，零改造引擎（契约已在 docs/unified_dimensions.md §4 锁定）。

CLI
---
  python tools/derivation/derive_military_sim.py --scene liaodong [--out demo]
  python tools/derivation/derive_military_sim.py --emit-all [--out demo]
  python tools/derivation/derive_military_sim.py --list
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SEED_DIR = os.path.join(HERE, "military_seeds")
SHARED_PATH = os.path.join(SEED_DIR, "_shared.json")
ROOT = os.path.dirname(os.path.dirname(HERE))


def _load(p):
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)


def load_shared():
    return _load(SHARED_PATH)


def load_seed(scene):
    return _load(os.path.join(SEED_DIR, scene + ".json"))


def list_scenes():
    return sorted(fn[:-5] for fn in os.listdir(SEED_DIR)
                  if fn.endswith(".json") and fn != "_shared.json")


def build(scene, seed=None, shared=None):
    """合成 (ic, rules) 数据对象（dict）。seed 缺通用块时回退 shared。"""
    seed = seed or load_seed(scene)
    shared = shared or load_shared()
    ic_seed = seed.get("ic", {})
    rules_seed = seed.get("rules", {})

    # ── IC ──
    ic = {}
    ic["meta"] = dict(ic_seed.get("meta", {}))
    ic["meta"]["_auto_derived"] = True
    ic["control"] = ic_seed["control"]
    ic["params"] = ic_seed.get("params", shared["ic_params"])
    ic["personsByFaction"] = ic_seed["personsByFaction"]
    ic["threeTier"] = ic_seed.get("threeTier", shared["ic_threeTier"])
    # missing_dims 的 note/desc 逐场景不同，优先用种子；shared 仅作回退默认
    ic["missing_dims"] = ic_seed.get("missing_dims", shared["ic_missing_dims"])

    # ── RULES ──（keySeats 仅萨尔浒等部分场景有，置于 meta 之后）
    rules = {}
    rules["meta"] = dict(rules_seed.get("meta", {}))
    rules["meta"]["_auto_derived"] = True
    if "keySeats" in rules_seed:
        rules["keySeats"] = rules_seed["keySeats"]
    rules["state_vars"] = rules_seed.get("state_vars", shared["rules_state_vars"])
    rules["params"] = rules_seed["params"]
    rules["rules"] = rules_seed["rules"]
    rules["branches"] = rules_seed["branches"]
    # missing_dims 的 desc 逐场景不同，优先用种子；shared 仅作回退默认
    rules["missing_dims"] = rules_seed.get("missing_dims", shared["rules_missing_dims"])
    return ic, rules


def _emit_ic(scene, ic, ic_global, out_dir):
    path = os.path.join(out_dir, "sim_ic_%s.js" % scene)
    lines = [
        "// 军事推演初始条件（IC，维度#16）— 由 tools/derivation/derive_military_sim.py 自动派生",
        "// 单一信息源 = military_seeds/%s.json（场景专属）+ military_seeds/_shared.json（通用三阶层模型）。" % scene,
        "// 标 _auto_derived=true：派生产物，非手 authoring 考据；勿手改本文件，改种子后重跑生成器。",
        "window.%s = %s;" % (ic_global, json.dumps(ic, ensure_ascii=False, indent=2)),
        "",
        "// ── 派系单源挂载（#3）：见 demo/_faction_ming.js ──",
        "(function(){",
        "  var V = window.FACTION_VOCAB;",
        "  if(!V || typeof V.attachTo!=='function'){",
        "    console.error('[%s] 缺少 _faction_ming.js（派系单一真值）：请先加载它并跑 python tools/gen_faction_bundle.py。');" % ic_global,
        "    window.%s.factions = [];" % ic_global,
        "    window.%s.factionDynamics = null;" % ic_global,
        "    return;",
        "  }",
        "  V.attachTo(window.%s);" % ic_global,
        "})();",
        "",
    ]
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    return path


def _emit_rules(scene, rules, rules_global, out_dir):
    path = os.path.join(out_dir, "sim_rules_%s.js" % scene)
    lines = [
        "// 军事演化规则（声明式三阶层）— 由 tools/derivation/derive_military_sim.py 自动派生",
        "// 单一信息源 = military_seeds/%s.json（场景专属）+ military_seeds/_shared.json（通用 R1-R7 模型本体）。" % scene,
        "// 标 _auto_derived=true：派生产物，非手 authoring 考据；勿手改本文件，改种子后重跑生成器。",
        "window.%s = %s;" % (rules_global, json.dumps(rules, ensure_ascii=False, indent=2)),
        "",
    ]
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n".join(lines))
    return path


def emit(scene, out_dir, seed=None, shared=None):
    seed = seed or load_seed(scene)
    ic, rules = build(scene, seed, shared)
    p1 = _emit_ic(scene, ic, seed["ic_global"], out_dir)
    p2 = _emit_rules(scene, rules, seed["rules_global"], out_dir)
    return p1, p2


def emit_all(out_dir):
    shared = load_shared()
    paths = []
    for scene in list_scenes():
        p1, p2 = emit(scene, out_dir, load_seed(scene), shared)
        paths.append((scene, p1, p2))
    return paths


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--scene", help="单个场景名（对应 military_seeds/<scene>.json）")
    ap.add_argument("--out", default="demo", help="输出目录（默认 demo）")
    ap.add_argument("--emit-all", action="store_true", help="重生成全部军事场景 IC/rules")
    ap.add_argument("--list", action="store_true", help="列出可用场景")
    args = ap.parse_args()

    if args.list:
        print("scenes:", ", ".join(list_scenes()))
        return 0

    out_dir = args.out if os.path.isabs(args.out) else os.path.join(ROOT, args.out)
    os.makedirs(out_dir, exist_ok=True)

    if args.emit_all:
        for scene, p1, p2 in emit_all(out_dir):
            print("[emit] %s -> %s , %s" % (scene, p1, p2))
        return 0
    if args.scene:
        p1, p2 = emit(args.scene, out_dir)
        print("[emit] %s -> %s , %s" % (args.scene, p1, p2))
        return 0
    print("需 --scene <name> / --emit-all / --list", file=sys.stderr)
    return 2


if __name__ == "__main__":
    sys.exit(main())
