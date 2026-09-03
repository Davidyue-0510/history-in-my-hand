#!/usr/bin/env python3
"""test_curate_emit.py — emit 人工校订门禁（v0.89 挂入 gates）。

北极星②「任意文字→生成世界」闭环里，LLM --emit 抽的是史料层快照
（data/<id>/world_emit.json 或 data/_emits/*.json），**未校订严禁 --from-json 落地**。
本闸门扫描整个 data/ 树，找出所有残留的 emit 产物，对每个跑 curate_emit.analyze，
只要有 BLOCK 级问题就 FAIL（exit=1），把「人工校订」变成 CI 级硬门禁。

这是守门的核心价值：一个没校订的 LLM emit 绝不该出现在 curated 仓库里。

退出：
  0  未发现残留 emit 产物（无可校订项，正常提交放行）
  1  发现 emit 产物且存在 BLOCK 级待校订项（须人工校订后重跑）
  2  脚本自身错误（扫描异常）

零依赖（仅标准库）。不调 LLM、不联网。
"""
import glob
import importlib.util
import os
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
DATA = os.path.join(ROOT, "data")


def _load_curate():
    spec = importlib.util.spec_from_file_location(
        "curate_emit", os.path.join(ROOT, "tools", "curate_emit.py"))
    mod = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(mod)
    return mod


def _find_emit_artifacts():
    """递归扫描 data/ 下所有残留的 emit 史料层快照。"""
    hits = set()
    for pat in ("**/world_emit*.json", "**/*_emit.json"):
        for p in glob.glob(os.path.join(DATA, pat), recursive=True):
            hits.add(os.path.normpath(p))
    # 显式暂存目录（若有人把草稿放这里）
    draft_dir = os.path.join(DATA, "_emits")
    if os.path.isdir(draft_dir):
        for p in glob.glob(os.path.join(draft_dir, "*.json"), recursive=False):
            hits.add(os.path.normpath(p))
    return sorted(hits)


def main():
    try:
        curate = _load_curate()
    except Exception as e:
        print("[FAIL] 无法加载 curate_emit.py: %s" % e)
        return 2

    artifacts = _find_emit_artifacts()
    if not artifacts:
        print("[PASS] 未发现残留 emit 产物（无可校订项，提交放行）")
        return 0

    blocked = 0
    total_blocks = 0
    for path in artifacts:
        rel = os.path.relpath(path, ROOT)
        try:
            with open(path, encoding="utf-8") as f:
                emit = __import__("json").load(f)
        except Exception as e:
            print("[FAIL] 解析 emit 产物失败 %s: %s" % (rel, e))
            return 2
        issues = curate.analyze(emit)
        blocks = [i for i in issues if i[0] == "BLOCK"]
        total_blocks += len(blocks)
        if blocks:
            blocked += 1
        # 打印该产物的精简校订结论（复用 curate_emit.report 的展示）
        rc = curate.report(emit, issues, rel)
        print("")  # 空行分隔

    if blocked:
        print("[FAIL] %d/%d 个 emit 产物含 BLOCK 级待校订项（共 %d 条），"
              "须人工校订后 --from-json + gates 才能落地。" % (blocked, len(artifacts), total_blocks))
        print("       校订流程见 tools/curate_emit.py 顶部说明；"
              "校订后删除 emit 产物再提交（它不属于 curated 仓库）。")
        return 1

    print("[PASS] 全部 %d 个 emit 产物无 BLOCK 级问题（可落地）；"
          "仍建议过 WARN 项。" % len(artifacts))
    return 0


if __name__ == "__main__":
    sys.exit(main())
