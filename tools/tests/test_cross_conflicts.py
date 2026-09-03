"""跨源融合冲突汇总单测（v0.80）：验证 build.build_cross_conflicts 能从断言级
_cross_conflicts（generate_world_multi 写入）正确汇总成场景级 crossConflicts 对。

纯函数单测，不依赖文件系统、不烧 token。挂 gates 防回归。
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, os.path.join(HERE, "..", "ingestion"))
import build as B


def check(name, cond):
    print(("[ok] " if cond else "[XX] ") + name)
    return cond


def main():
    A = [
        {"id": "a1", "subject": "event:x", "predicate": "result", "layer": "record",
         "_source_idx": 0, "_party": "明方", "source": "srcA", "_source_name": "明实录",
         "_source_credibility": "高", "value_text": "胜", "_cross_conflicts": ["a2"]},
        {"id": "a2", "subject": "event:x", "predicate": "result", "layer": "record",
         "_source_idx": 1, "_party": "清方", "source": "srcB", "_source_name": "清实录",
         "_source_credibility": "中", "value_text": "败", "_cross_conflicts": ["a1"]},
        # 同 subject/predicate 但无冲突标记（第三源同值）→ 不应产生额外对
        {"id": "a3", "subject": "event:x", "predicate": "result", "layer": "record",
         "_source_idx": 0, "_party": "明方", "source": "srcA", "value_text": "胜"},
        # 不同 subject → 不参与
        {"id": "a4", "subject": "person:y", "predicate": "role", "layer": "record",
         "_source_idx": 0, "_party": "明方", "source": "srcA", "_source_name": "明实录",
         "_source_credibility": "高", "value_text": "将", "_cross_conflicts": ["a5"]},
        {"id": "a5", "subject": "person:y", "predicate": "role", "layer": "record",
         "_source_idx": 1, "_party": "清方", "source": "srcB", "_source_name": "清实录",
         "_source_credibility": "中", "value_text": "帅", "_cross_conflicts": ["a4"]},
    ]
    out = B.build_cross_conflicts(A)
    ok = True
    ok = check("跨源冲突检出 2 对", len(out) == 2) and ok
    if out:
        c0 = out[0]
        ok = check("subject 正确", c0["subject"] in ("event:x", "person:y")) and ok
        ok = check("a/b 双方 party 不同", c0["a"]["party"] != c0["b"]["party"]) and ok
        ok = check("a/b 双方 value_text 不同",
                   c0["a"]["value_text"] != c0["b"]["value_text"]) and ok
        ok = check("a/b 双方 source 不同", c0["a"]["source"] != c0["b"]["source"]) and ok
        ok = check("a 携带 source_name", c0["a"].get("source_name") == "明实录") and ok
        ok = check("a 携带 credibility", c0["a"].get("credibility") == "高") and ok
        ok = check("b 携带 credibility", c0["b"].get("credibility") == "中") and ok
    # 单源场景（全同 _source_idx）应无跨源冲突
    A2 = [dict(a, _source_idx=0, _cross_conflicts=[]) for a in A[:2]]
    ok = check("单源（同 _source_idx）无跨源冲突", len(B.build_cross_conflicts(A2)) == 0) and ok
    # gap 层应被忽略
    A3 = [dict(a, layer="gap") for a in A[:2]]
    ok = check("gap 层不参与跨源冲突", len(B.build_cross_conflicts(A3)) == 0) and ok
    print("cross_conflicts: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
