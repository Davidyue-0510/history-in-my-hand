#!/usr/bin/env python3
"""v0.106 · 一键世界生成批量驱动（北极星②「任意文字→生成世界」的规模化入口）。

用法：
  python tools/ingestion/batch_world_gen.py --specs-dir <DIR> [--emits-dir DIR]
                                             [--register] [--run-gates] [--dry-run]

设计：
  - 扫描 <specs-dir> 下所有 *.spec.json；逐个 subprocess 调
        python tools/ingestion/ingest.py --world <spec> --emit <emits-dir>/<key>.json
    错误隔离（单 spec 失败不中断整批）。
  - --register：对每个成功 emit 再调 --from-json 回灌场景（写文件/注册/地形/build）。
  - --run-gates：全部收尾后跑一次 gates --strict --no-interaction。
  - --dry-run：只打印计划，不调 LLM / 不写文件。

为什么 subprocess 而非 in-process：
  - 隔离 _terr_cache / 数据缓存 / 全局状态；批量越大越稳。
  - 允许后续并行（--jobs N）零侵入接入。
"""
from __future__ import annotations

import argparse
import glob
import os
import subprocess
import sys
import time

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
INGEST = os.path.join(ROOT, "tools", "ingestion", "ingest.py")
GATES = os.path.join(ROOT, "tools", "gates.py")


def _key_of(spec_path: str) -> str:
    base = os.path.basename(spec_path)
    for suf in (".spec.json", ".json"):
        if base.endswith(suf):
            return base[: -len(suf)]
    return os.path.splitext(base)[0]


def _run(cmd: list[str], dry: bool) -> tuple:
    if dry:
        return ("DRY", " ".join(cmd), 0, "")
    proc = subprocess.run(cmd, cwd=ROOT, capture_output=True, text=True, timeout=600)
    return (proc.returncode, proc.stdout, proc.returncode, proc.stderr)


def main() -> int:
    ap = argparse.ArgumentParser(description="批量 world-gen：specs-dir → emit → 可选 register + gates")
    ap.add_argument("--specs-dir", required=True, help="含 *.spec.json 的目录")
    ap.add_argument("--emits-dir", default=None, help="emit JSON 输出目录（默认 .tmp/batch_emits）")
    ap.add_argument("--register", action="store_true", help="emit 后逐个 --from-json 回灌")
    ap.add_argument("--run-gates", action="store_true", help="收尾跑 tools/gates.py --strict")
    ap.add_argument("--dry-run", action="store_true", help="只打印计划，不调 LLM / 不写文件")
    ap.add_argument("--python", default=sys.executable, help="调 ingest.py 的 python 解释器")
    args = ap.parse_args()

    emits_dir = args.emits_dir or os.path.join(ROOT, ".tmp", "batch_emits")
    if not args.dry_run:
        os.makedirs(emits_dir, exist_ok=True)

    specs = sorted(glob.glob(os.path.join(args.specs_dir, "*.spec.json")))
    if not specs:
        print("[batch] %s 下未发现 *.spec.json" % args.specs_dir)
        return 2

    print("[batch] specs=%d  emits-dir=%s  register=%s  gates=%s" % (
        len(specs), emits_dir, args.register, args.run_gates))

    n_ok = n_emit_fail = n_reg_fail = 0
    for sp in specs:
        key = _key_of(sp)
        emit = os.path.join(emits_dir, key + ".json")
        print("----  %s  →  %s" % (os.path.basename(sp), os.path.basename(emit)))

        # 1) emit
        rc, so, _, se = _run(
            [args.python, INGEST, "--world", sp, "--emit", emit], args.dry_run)
        if rc != 0 and not args.dry_run:
            print("  ✗ emit 失败 rc=%d\n    %s" % (rc, (se or so).strip()[:300]))
            n_emit_fail += 1
            continue

        # 2) register (optional)
        if args.register and not args.dry_run:
            rc2, so2, _, se2 = _run(
                [args.python, INGEST, "--from-json", emit], False)
            if rc2 != 0:
                print("  ✗ register 失败 rc=%d\n    %s" % (rc2, (se2 or so2).strip()[:300]))
                n_reg_fail += 1
                continue
            print("  ✓ emit + register OK")
        else:
            print("  ✓ emit OK" + ("  (dry)" if args.dry_run else ""))
        n_ok += 1

    print("----  收尾：ok=%d  emit_fail=%d  register_fail=%d" % (n_ok, n_emit_fail, n_reg_fail))

    # 3) gates (optional)
    if args.run_gates and not args.dry_run:
        rc3, so3, _, se3 = _run(
            [args.python, GATES, "--strict", "--no-interaction"], False)
        print("  gates rc=%d\n%s%s" % (rc3, so3[-400:] if so3 else "",
                                       ("\n" + se3[-200:]) if se3 else ""))
        return rc3

    return 0 if n_emit_fail == 0 and n_reg_fail == 0 else 1


if __name__ == "__main__":
    sys.exit(main())