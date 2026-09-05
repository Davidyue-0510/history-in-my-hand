#!/usr/bin/env python3
"""v0.104 · 回刷 dim_source：为存量断言补 dim_source 溯源标记（诚实特性生效前置）。

根因：四条 world-gen 路径此前提前 return 跳过 normalize_and_validate，导致全库断言
缺 dim_source → demo 的「只看声明」开关 / 「推」徽标恒 false（死 UI）。本脚本回刷存量。

规则（与 normalize_and_validate 的维度分支一致，且把单维[6]诚实标 fallback）：
  - 已带合法 dim_source → 跳过（幂等）
  - dims 合法且多维(len>=2) 或 dims!=[6] → declared（作者显式声明）
  - dims==[6]（事件兜底）→ fallback（无法证明是 deliberate 事件-only，诚实披露欠维）
  - dims 非法/缺失 → 词表推断 inferred；词表无命中 → fallback([6])

仅写 dim_source（必要时纠正 dims），不碰 time/year，未变更行原样保留（零漂移）。
"""
import glob
import json
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "tools", "ingestion"))
from ingest import infer_dims_lexical

VALID = ("declared", "inferred", "fallback")


def annotate(a):
    """原地补 dim_source。返回 True 表示本行需重写。"""
    if a.get("dim_source") in VALID:
        return False
    dims = a.get("dims")
    declared = isinstance(dims, list) and len(dims) > 0
    if declared:
        cleaned = sorted({int(d) for d in dims
                          if isinstance(d, (int, float)) and 1 <= int(d) <= 6})
        if cleaned:
            a["dims"] = cleaned
            if cleaned == [6]:
                a["dim_source"] = "fallback"   # 事件兜底，诚实标
            else:
                a["dim_source"] = "declared"
        else:
            inf = infer_dims_lexical(a)
            if inf:
                a["dims"] = inf
                a["dim_source"] = "inferred"
            else:
                a["dims"] = [6]
                a["dim_source"] = "fallback"
    else:
        inf = infer_dims_lexical(a)
        if inf:
            a["dims"] = inf
            a["dim_source"] = "inferred"
        else:
            a["dims"] = [6]
            a["dim_source"] = "fallback"
    return True


def main():
    ROOT = os.getcwd()
    files = sorted(glob.glob(os.path.join(ROOT, "data", "*", "assertions.jsonl")))
    total = 0
    scenes_touched = 0
    for fp in files:
        sid = os.path.basename(os.path.dirname(fp))
        raw = open(fp, encoding="utf-8", newline="").read()
        lines = raw.split("\n")
        out = []
        n_changed = 0
        for ln in lines:
            if ln == "":
                continue
            a = json.loads(ln)
            if annotate(a):
                n_changed += 1
                out.append(json.dumps(a, ensure_ascii=False))
            else:
                out.append(ln)  # 未变更行原样保留（零漂移）
        if n_changed:
            open(fp, "w", encoding="utf-8", newline="").write("\n".join(out) + "\n")
            total += n_changed
            scenes_touched += 1
            print("  %s: +%d" % (sid, n_changed))
    print("BACKFILL_TOTAL=%d  涉及场景=%d" % (total, scenes_touched))


if __name__ == "__main__":
    main()
