#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""六维（1地理/2技术/3制度/4社会/5思想/6事件）覆盖审计工具。

用途：让「全时段·六维」缺口数据驱动、可复现，而非凭印象手写。
- 报告每个 epoch 的六维场景覆盖（缺某维=该维在该时段偏薄）
- 报告全局六维断言总数（定位最薄维度）
- 列出 thin 场景（断言数 <= THIN 阈值，默认 5）
- 列出「全时段」缺口：无场景的 epoch（由 --epochs 指定合法 epoch 全集）

纯函数 + CLI，无副作用，供 gates / 手动审计复用。
"""
import json
import os
import sys
from collections import defaultdict, Counter

DIM_NAMES = ["地理", "技术", "制度", "社会", "思想", "事件"]
DIM_BY_CODE = {i + 1: n for i, n in enumerate(DIM_NAMES)}

THIN_DEFAULT = 5


def load_scenes(scenes_path="data/scenes.json"):
    with open(scenes_path, encoding="utf-8") as f:
        return json.load(f)


def scene_dims(scene_dir):
    """读取场景断言 dims 并集。"""
    aj = os.path.join(scene_dir, "assertions.jsonl")
    if not os.path.exists(aj):
        return set()
    dims = set()
    for ln in open(aj, encoding="utf-8"):
        ln = ln.strip()
        if not ln:
            continue
        try:
            o = json.loads(ln)
        except Exception:
            continue
        for d in (o.get("dims") or []):
            dims.add(d)
    return dims


def audit(root="data", scenes_path=None, thin=THIN_DEFAULT):
    """返回结构化审计结果。"""
    if scenes_path is None:
        scenes_path = os.path.join(root, "scenes.json")
    reg = load_scenes(scenes_path)
    sc = reg["scenes"]

    ep_dim = defaultdict(lambda: Counter())      # epoch -> dim -> 场景数
    ep_total = Counter()
    alldim = Counter()                            # 全局六维断言总数
    thin_scenes = []                             # (key, n)
    scene_count = 0

    for k, v in sc.items():
        scene_count += 1
        ep = v.get("epoch")
        ep_total[ep] += 1
        dims = scene_dims(os.path.join(root, k))
        for d in dims:
            ep_dim[ep][d] += 1
        # 全局断言数
        aj = os.path.join(root, k, "assertions.jsonl")
        if os.path.exists(aj):
            n = 0
            for ln in open(aj, encoding="utf-8"):
                if not ln.strip():
                    continue
                n += 1
                try:
                    o = json.loads(ln)
                except Exception:
                    continue
                for d in (o.get("dims") or []):
                    alldim[d] += 1
            if n <= thin:
                thin_scenes.append((k, n, ep, v.get("kind")))

    # 排序：thin 在前
    thin_scenes.sort(key=lambda x: x[1])

    return {
        "scene_count": scene_count,
        "ep_dim": {ep: dict(ep_dim[ep]) for ep in ep_dim},
        "ep_total": dict(ep_total),
        "alldim": dict(alldim),
        "thin_scenes": thin_scenes,
        "thin_threshold": thin,
    }


def report(a, epochs_universe=None):
    """人类可读报告。epochs_universe: 合法 epoch 全集（用于查「全时段」缺口）。"""
    lines = []
    lines.append("=== 六维覆盖审计 ===")
    lines.append("场景总数: %d" % a["scene_count"])
    lines.append("")
    lines.append("=== 各 epoch 六维场景覆盖（地/技/制/社/思/事）===")
    for ep in sorted(a["ep_dim"]):
        d = a["ep_dim"][ep]
        row = " ".join("%s%d" % (DIM_NAMES[i][:1], d.get(i + 1, 0)) for i in range(6))
        missing = [DIM_NAMES[i] for i in range(6) if d.get(i + 1, 0) == 0]
        note = (" 缺:" + ",".join(missing)) if missing else ""
        lines.append("  %-14s %s%s" % (ep, row, note))
    if epochs_universe:
        have = set(a["ep_dim"])
        gap = [e for e in epochs_universe if e not in have]
        if gap:
            lines.append("  [全时段缺口] 无场景 epoch: " + ", ".join(gap))
        else:
            lines.append("  [全时段] 所有合法 epoch 均有场景 ✓")
    lines.append("")
    lines.append("=== 全局六维断言总数 ===")
    for i in range(6):
        lines.append("  %s: %d" % (DIM_NAMES[i], a["alldim"].get(i + 1, 0)))
    thin_dim = min(a["alldim"], key=lambda x: a["alldim"][x])
    lines.append("  最薄维: %s (%d)" % (DIM_NAMES[thin_dim - 1], a["alldim"][thin_dim]))
    lines.append("")
    lines.append("=== thin 场景（断言<= %d）共 %d 个 ===" % (a["thin_threshold"], len(a["thin_scenes"])))
    for k, n, ep, kd in a["thin_scenes"]:
        lines.append("  %-24s n=%-2d %-14s %s" % (k, n, ep, kd))
    return "\n".join(lines)


def main():
    import argparse
    ap = argparse.ArgumentParser(description="六维覆盖审计")
    ap.add_argument("--root", default="data")
    ap.add_argument("--scenes", default=None)
    ap.add_argument("--thin", type=int, default=THIN_DEFAULT)
    ap.add_argument("--epochs", nargs="*", default=None, help="合法 epoch 全集（查全时段缺口）")
    ap.add_argument("--json", action="store_true", help="输出 JSON")
    args = ap.parse_args()
    a = audit(root=args.root, scenes_path=args.scenes, thin=args.thin)
    if args.json:
        print(json.dumps(a, ensure_ascii=False, indent=2))
    else:
        print(report(a, epochs_universe=args.epochs))


if __name__ == "__main__":
    main()
