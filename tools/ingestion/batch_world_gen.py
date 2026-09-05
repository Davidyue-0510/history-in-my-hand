#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v0.106+ · 一键世界生成批量驱动（北极星②「任意文字→生成世界」的规模化入口）。

用法：
  # 1) 已有 spec 批量生成（emit 阶段可并行）
  python tools/ingestion/batch_world_gen.py --specs-dir <DIR> [--jobs N]
      [--register] [--build/--no-build] [--run-gates]
      [--emits-dir DIR] [--force] [--report FILE] [--dry-run]

  # 2) 任意文字目录批量导入（最贴近「任意文字生成世界」语义）
  python tools/ingestion/batch_world_gen.py --texts-dir <DIR> [--jobs N]
      [--register] [--run-gates] [--default-party 明方] [--default-region liaodong]

设计要点（v0.106 → v0.107 优化）：
  - emit 阶段：逐个 subprocess 调 `--world <spec> --emit <emit>`（纯 LLM 抽取→写文件，
    零 repo 副作用）。subprocess 隔离 _terr_cache/全局状态，可安全并行（--jobs N）。
  - 断点续跑：emit 文件已存在则跳过（--force 覆盖重跑），省 LLM token（规模化关键）。
  - register 阶段：每个成功 emit 调 `--from-json`（写文件/注册/地形），但设
    WORLD_SKIP_BUILD=1 跳过各自的整轮 build；收尾**只跑一次** build.py（O(1) 而非 O(n)）。
    串行 register（共享 data/scenes.json / demo/data.js 不可并行写）。
  - 任意文字：--texts-dir 扫描 *.txt/*.md，自动裹成 spec（slug 化文件名作 id，
    source_text=文件全文，title=首行/文件名），进入同一条流水线。
  - 结构化报告：--report FILE 落 JSON（配置 + 每 spec 结果 + 汇总），供 CI/gates 集成。

为什么 subprocess 而非 in-process：隔离全局状态；并行零侵入；单 spec 失败不中断整批。
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import shutil
import subprocess
import sys
import tempfile
import time
from concurrent.futures import ThreadPoolExecutor, as_completed

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
INGEST = os.path.join(ROOT, "tools", "ingestion", "ingest.py")
BUILD = os.path.join(ROOT, "tools", "ingestion", "build.py")
GATES = os.path.join(ROOT, "tools", "gates.py")


def _key_of(spec_path: str) -> str:
    base = os.path.basename(spec_path)
    for suf in (".spec.json", ".json"):
        if base.endswith(suf):
            return base[: -len(suf)]
    return os.path.splitext(base)[0]


def _slugify(name: str) -> str:
    """文件名→合法场景 id（小写字母数字下划线，限长）。"""
    s = "".join(ch if (ch.isalnum() or ch in "-_ ") else "_" for ch in name.strip())
    s = s.strip().replace(" ", "_").lower()
    s = "_".join(p for p in s.split("_") if p)[:48] or "text"
    return s


def _wrap_text(path: str, default_party: str, default_region: str,
               default_kind: str) -> dict:
    """把一个 .txt/.md 文件裹成 world spec dict。"""
    with open(path, encoding="utf-8") as f:
        text = f.read()
    base = os.path.splitext(os.path.basename(path))[0]
    slug = _slugify(base)
    # title：首行非空且较短者优先，否则用文件名
    title = base
    for line in text.splitlines():
        line = line.strip().lstrip("#").strip()
        if line:
            title = line[:40]
            break
    return {
        "id": slug,
        "title": title,
        "kind": default_kind,
        "region": default_region,
        "source": {"id": slug, "title": title,
                   "party": default_party, "credibility": None},
        "source_text": text,
    }


def _emit_one(python: str, spec_path: str, emit_path: str, dry: bool,
              timeout: int) -> dict:
    """单 spec emit（subprocess）。返回结构化结果。"""
    if dry:
        return {"spec": spec_path, "emit": emit_path, "rc": "DRY",
                "ok": True, "skipped": False, "err": ""}
    t0 = time.time()
    try:
        proc = subprocess.run(
            [python, INGEST, "--world", spec_path, "--emit", emit_path],
            cwd=ROOT, capture_output=True, text=True, timeout=timeout)
    except subprocess.TimeoutExpired:
        return {"spec": spec_path, "emit": emit_path, "rc": -1,
                "ok": False, "skipped": False, "err": "timeout",
                "secs": round(time.time() - t0, 1)}
    rc = proc.returncode
    return {"spec": spec_path, "emit": emit_path, "rc": rc, "ok": rc == 0,
            "skipped": False,
            "err": (proc.stderr or proc.stdout).strip()[-300:] if rc != 0 else "",
            "secs": round(time.time() - t0, 1)}


def _register_one(python: str, emit_path: str, dry: bool) -> dict:
    """单 emit 回灌（WORLD_SKIP_BUILD=1，写文件/注册/地形，不 build）。"""
    if dry:
        return {"emit": emit_path, "rc": "DRY", "ok": True, "err": ""}
    env = dict(os.environ, WORLD_SKIP_BUILD="1")
    proc = subprocess.run(
        [python, INGEST, "--from-json", emit_path],
        cwd=ROOT, capture_output=True, text=True, timeout=900, env=env)
    rc = proc.returncode
    return {"emit": emit_path, "rc": rc, "ok": rc == 0,
            "err": (proc.stderr or proc.stdout).strip()[-300:] if rc != 0 else ""}


def _run_build(python: str, dry: bool):
    if dry:
        return {"rc": "DRY", "ok": True, "err": ""}
    proc = subprocess.run([python, BUILD], cwd=ROOT,
                          capture_output=True, text=True, timeout=900)
    rc = proc.returncode
    return {"rc": rc, "ok": rc == 0,
            "err": (proc.stderr or proc.stdout).strip()[-400:] if rc != 0 else ""}


def _run_gates(python: str, dry: bool):
    if dry:
        return {"rc": "DRY", "ok": True, "err": ""}
    proc = subprocess.run([python, GATES, "--strict", "--no-interaction"],
                          cwd=ROOT, capture_output=True, text=True, timeout=900)
    rc = proc.returncode
    return {"rc": rc, "ok": rc == 0,
            "err": (proc.stderr or proc.stdout).strip()[-400:] if rc != 0 else ""}


def _collect_specs(args) -> tuple:
    """返回 (specs_list, temp_dirs)。specs_list = [(key, path, is_wrapped)]。"""
    specs: list = []
    temp_dirs: list = []
    seen: set = set()

    if args.specs_dir:
        for sp in sorted(glob.glob(os.path.join(args.specs_dir, "*.spec.json"))):
            key = _key_of(sp)
            if key in seen:
                continue
            seen.add(key)
            specs.append((key, sp, False))

    if args.texts_dir:
        td = tempfile.mkdtemp(prefix="batch_text_specs_")
        temp_dirs.append(td)
        texts = sorted(glob.glob(os.path.join(args.texts_dir, "*.txt")) +
                       glob.glob(os.path.join(args.texts_dir, "*.md")))
        for tp in texts:
            spec = _wrap_text(tp, args.default_party, args.default_region,
                              args.default_kind)
            key = spec["id"]
            # id 撞名 → 后缀区分
            if key in seen:
                key = "%s_%d" % (key, len(seen))
                spec["id"] = key
            seen.add(key)
            out = os.path.join(td, key + ".spec.json")
            with open(out, "w", encoding="utf-8") as f:
                json.dump(spec, f, ensure_ascii=False, indent=1)
                f.write("\n")
            specs.append((key, out, True))
    return specs, temp_dirs


def main() -> int:
    ap = argparse.ArgumentParser(
        description="批量 world-gen：specs/texts-dir → emit(并行) → 可选 register + build + gates")
    ap.add_argument("--specs-dir", default=None, help="含 *.spec.json 的目录")
    ap.add_argument("--texts-dir", default=None,
                    help="含 *.txt/*.md 的目录（自动裹成 spec，直击北极星②）")
    ap.add_argument("--emits-dir", default=None, help="emit JSON 输出目录（默认 .tmp/batch_emits）")
    ap.add_argument("--jobs", type=int, default=1,
                    help="emit 阶段并行 worker 数（默认 1；LLM 调用密集，受 API 限速）")
    ap.add_argument("--register", action="store_true",
                    help="emit 后逐个 --from-json 回灌（WORLD_SKIP_BUILD=1）+ 收尾单次 build")
    ap.add_argument("--no-build", action="store_true",
                    help="配合 --register：跳过收尾 build.py（仅写文件/注册/地形）")
    ap.add_argument("--run-gates", action="store_true", help="收尾跑 tools/gates.py --strict")
    ap.add_argument("--force", action="store_true",
                    help="忽略已存在的 emit 文件，强制重跑 LLM")
    ap.add_argument("--report", default=None, help="写出 JSON 汇总报告路径")
    ap.add_argument("--default-party", default="unknown",
                    help="--texts-dir 自动裹 spec 的默认 source.party（按语料设）")
    ap.add_argument("--default-region", default="liaodong", help="--texts-dir 默认 region")
    ap.add_argument("--default-kind", default="county", help="--texts-dir 默认 kind")
    ap.add_argument("--dry-run", action="store_true", help="只打印计划，不调 LLM / 不写库")
    ap.add_argument("--python", default=sys.executable, help="调 ingest.py 的 python 解释器")
    args = ap.parse_args()

    if not args.specs_dir and not args.texts_dir:
        print("[batch] 需 --specs-dir 或 --texts-dir")
        return 2

    emits_dir = args.emits_dir or os.path.join(ROOT, ".tmp", "batch_emits")
    if not args.dry_run:
        os.makedirs(emits_dir, exist_ok=True)

    specs, temp_dirs = _collect_specs(args)
    if not specs:
        print("[batch] 未发现可处理的 spec（%s / %s）" % (args.specs_dir, args.texts_dir))
        return 2

    jobs = max(1, min(args.jobs, 8))
    print("[batch] specs=%d  emits-dir=%s  jobs=%d  register=%s  gates=%s  force=%s"
          % (len(specs), emits_dir, jobs, args.register, args.run_gates, args.force))

    # ── 1) emit 阶段（并行，可续跑） ──
    emit_results: list = []
    pending: list = []  # 待跑（emit 不存在或 --force）
    for key, sp, wrapped in specs:
        emit = os.path.join(emits_dir, key + ".json")
        already = os.path.exists(emit)
        if already and not args.force and not args.dry_run:
            print("  ↷ 跳过(续跑) %s" % key)
            emit_results.append({"key": key, "spec": sp, "emit": emit,
                                 "rc": 0, "ok": True, "skipped": True, "err": "", "secs": 0.0})
            continue
        pending.append((key, sp, emit, wrapped))

    if pending:
        if jobs <= 1 or args.dry_run:
            for key, sp, emit, wrapped in pending:
                print("----  emit %s  →  %s%s" % (key, os.path.basename(emit),
                                                  "  (dry)" if args.dry_run else ""))
                emit_results.append({"key": key, **_emit_one(
                    args.python, sp, emit, args.dry_run, 900)})
        else:
            with ThreadPoolExecutor(max_workers=jobs) as ex:
                futs = {ex.submit(_emit_one, args.python, sp, emit, False, 900): key
                        for key, sp, emit, _ in pending}
                for fut in as_completed(futs):
                    r = fut.result()
                    r["key"] = futs[fut]
                    emit_results.append(r)
                    print("  %s emit %s rc=%s (%.1fs)" % (
                        "✓" if r["ok"] else "✗", r["key"], r["rc"], r.get("secs", 0)))

    # ── 2) register 阶段（串行，跳过 build）+ 收尾单次 build ──
    reg_results: list = []
    build_res = None
    if args.register and not args.dry_run:
        for r in emit_results:
            if not r.get("ok") or r.get("skipped"):
                continue
            rr = _register_one(args.python, r["emit"], False)
            rr["key"] = r["key"]
            reg_results.append(rr)
            print("  %s register %s rc=%s" % ("✓" if rr["ok"] else "✗", rr["key"], rr["rc"]))
        if not args.no_build:
            print("----  收尾单次 build.py")
            build_res = _run_build(args.python, False)
            print("  build rc=%s" % build_res["rc"])

    # ── 3) gates（可选） ──
    gates_res = None
    if args.run_gates and not args.dry_run:
        print("----  收尾 gates")
        gates_res = _run_gates(args.python, False)
        print("  gates rc=%s" % gates_res["rc"])

    # ── 汇总 ──
    n_ok = sum(1 for r in emit_results if r.get("ok"))
    n_skip = sum(1 for r in emit_results if r.get("skipped"))
    n_emit_fail = sum(1 for r in emit_results if not r.get("ok") and not r.get("skipped"))
    n_reg_fail = sum(1 for r in reg_results if not r.get("ok"))
    print("----  收尾：emit_ok=%d  skipped=%d  emit_fail=%d  register_fail=%d"
          % (n_ok, n_skip, n_emit_fail, n_reg_fail))
    if build_res and not build_res["ok"]:
        print("  build 失败: %s" % build_res["err"])
    if gates_res and not gates_res["ok"]:
        print("  gates 失败: %s" % gates_res["err"])

    # ── 报告 ──
    if args.report and not args.dry_run:
        report = {
            "config": {"specs_dir": args.specs_dir, "texts_dir": args.texts_dir,
                       "emits_dir": emits_dir, "jobs": jobs, "register": args.register,
                       "no_build": args.no_build, "run_gates": args.run_gates,
                       "force": args.force},
            "totals": {"specs": len(specs), "emit_ok": n_ok, "skipped": n_skip,
                       "emit_fail": n_emit_fail, "register_fail": n_reg_fail},
            "build": build_res, "gates": gates_res,
            "emits": emit_results, "registers": reg_results,
        }
        with open(args.report, "w", encoding="utf-8") as f:
            json.dump(report, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("  报告 → %s" % args.report)

    # 清理临时 wrapped specs 目录（系统 temp，rmtree 真删）
    for td in temp_dirs:
        shutil.rmtree(td, ignore_errors=True)

    if args.run_gates and gates_res is not None and not gates_res["ok"]:
        return gates_res["rc"] or 1
    if build_res is not None and not build_res["ok"]:
        return 1
    return 0 if (n_emit_fail == 0 and n_reg_fail == 0) else 1


if __name__ == "__main__":
    sys.exit(main())
