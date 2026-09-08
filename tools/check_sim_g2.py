#!/usr/bin/env python3
"""v0.180 — 非军事推演 G2 偏离回归检查（北极星③ 校验）

扫描全部「非军事」sim_config（scenario_type ∈ {reform,economic,engineering,thought,social}），
对每场景取 real / whatif 两条六维时序（state_hist_*.json），计算六维终局最大绝对偏离，
断言 max|Δ| ≥ G2 阈值（默认 0.1）——即反事实必须产生「可观测、非噪声」的政策偏离。

背景：tools/tests/test_simulate.py 仅硬编码校验 4 个样例（song_wanganshi /
warring_states_shangyang / sui_keju / tang_juntian），其余 20 个非军事 sim 从未被 G2
偏离覆盖。本工具把校验扩到全量，作为 gates 之外的常驻回归。

用法：
    python -m tools.check_sim_g2 [--threshold 0.1] [--strict]
退出码：发现 FAIL 且 --strict 时为 1，否则 0（仅警告）。
"""
import argparse
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
NON_MILITARY = {"reform", "economic", "engineering", "thought", "social"}
SIX_DIMS = ["地理", "技术", "制度", "社会", "思想", "事件"]
DEFAULT_THRESHOLD = 0.1


def load(path):
    with open(path, encoding="utf-8") as f:
        return json.load(f)


def final_dims(state_hist):
    """取时序末条的六维字典。"""
    if not state_hist:
        return None
    last = state_hist[-1]
    return last.get("dims")


def real_whatif_paths(scene_dir, sc):
    """返回 (real_path, whatif_path) 或 None。"""
    files = glob.glob(os.path.join(scene_dir, "state_hist_*.json"))
    if len(files) < 2:
        return None
    real_branch = sc.get("real_branch")
    # 文件名 -> branch 名（去 state_hist_ 前缀、去 .json）
    named = {}
    for fp in files:
        base = os.path.basename(fp)
        branch = base[len("state_hist_"):-len(".json")]
        named[branch] = fp
    real_path = None
    whatif_path = None
    if real_branch and real_branch in named:
        real_path = named[real_branch]
        others = [p for b, p in named.items() if b != real_branch]
        whatif_path = others[0] if others else None
    elif "real" in named and "whatif" in named:
        real_path, whatif_path = named["real"], named["whatif"]
    else:
        # 取前两个
        keys = list(named.keys())
        real_path, whatif_path = named[keys[0]], named[keys[1]]
    return real_path, whatif_path


def max_divergence(real_dims, whatif_dims):
    if not real_dims or not whatif_dims:
        return None
    mx = 0.0
    worst = None
    for d in SIX_DIMS:
        a = real_dims.get(d)
        b = whatif_dims.get(d)
        if a is None or b is None:
            continue
        diff = abs(float(a) - float(b))
        if diff > mx:
            mx = diff
            worst = d
    return mx, worst


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--threshold", type=float, default=DEFAULT_THRESHOLD)
    ap.add_argument("--strict", action="store_true",
                    help="任一 FAIL 即退出码 1")
    args = ap.parse_args()

    sims = sorted(glob.glob(os.path.join(ROOT, "data", "*", "sim_config.json")))
    results = []
    for sp in sims:
        sc = load(sp)
        st = sc.get("scenario_type")
        if st not in NON_MILITARY:
            continue
        scene_dir = os.path.dirname(sp)
        scene = os.path.basename(scene_dir)
        paths = real_whatif_paths(scene_dir, sc)
        if not paths or not paths[0] or not paths[1]:
            results.append((scene, st, None, "NO_STATE_HIST", None))
            continue
        real_dims = final_dims(load(paths[0]))
        whatif_dims = final_dims(load(paths[1]))
        div = max_divergence(real_dims, whatif_dims)
        if div is None:
            results.append((scene, st, None, "NO_DIMS", None))
            continue
        mx, worst = div
        ok = mx >= args.threshold
        results.append((scene, st, round(mx, 3), "PASS" if ok else "FAIL", worst))

    # 输出
    print(f"== 非军事 G2 偏离回归（阈值 {args.threshold}）==")
    print(f"{'scene':28s} {'type':12s} {'max|Δ|':8s} {'result':6s} worst_dim")
    print("-" * 70)
    n_pass = n_fail = 0
    for scene, st, mx, status, worst in results:
        if status == "PASS":
            n_pass += 1
        elif status == "FAIL":
            n_fail += 1
        detail = worst if worst else ""
        mxs = f"{mx}" if mx is not None else "?"
        print(f"{scene:28s} {st:12s} {mxs:8s} {status:6s} {detail}")
    print("-" * 70)
    print(f"非军事 sim 总数: {len(results)} | PASS {n_pass} | FAIL {n_fail}")
    if n_fail:
        print(f"[FAIL] {n_fail} 个非军事 sim 偏离 < {args.threshold}，反事实不可观测")
        if args.strict:
            sys.exit(1)
    else:
        print("[PASS] 全部非军事 sim G2 偏离 ≥ 阈值（反事实可观测）")
    sys.exit(0)


if __name__ == "__main__":
    main()
