#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v0.106+ · 一键世界生成批量驱动（北极星②「任意文字→生成世界」的规模化入口）。

用法：
  # 1) 已有 spec 批量生成（emit 阶段可并行）
  python tools/ingestion/batch_world_gen.py --specs-dir <DIR> [--jobs N]
      [--register] [--build/--no-build] [--run-gates]
      [--emits-dir DIR] [--force] [--limit N] [--retries N] [--report FILE] [--dry-run]

  # 2) 任意文字目录批量导入（最贴近「任意文字生成世界」语义）
  python tools/ingestion/batch_world_gen.py --texts-dir <DIR> [--jobs N]
      [--register] [--run-gates] [--default-party 明方] [--default-region liaodong]

  # 3) 单文件一键流水线（任意文字 → 世界 的单行入口）
  python tools/ingestion/batch_world_gen.py --from-text 史料.txt
      [--register] [--run-gates] [--default-party 明方]

设计要点（v0.106 → v0.108 优化）：
  - emit 阶段：逐个 subprocess 调 `--world <spec> --emit <emit>`（纯 LLM 抽取→写文件，
    零 repo 副作用）。subprocess 隔离 _terr_cache/全局状态，可安全并行（--jobs N）。
  - 断点续跑：emit 文件已存在则跳过（--force 覆盖重跑），省 LLM token（规模化关键）。
  - 重试：--retries N 对 emit 瞬时失败（限流/5xx）自动重试 + 退避，规模化稳定性关键。
  - register 阶段：每个成功 emit 调 `--from-json`（写文件/注册/地形），但设
    WORLD_SKIP_BUILD=1 跳过各自的整轮 build；收尾**只跑一次** build.py（O(1) 而非 O(n)）。
    串行 register（共享 data/scenes.json / demo/data.js 不可并行写）。
  - 任意文字：--texts-dir 扫描 *.txt/*.md / --from-text 单文件，自动裹成 spec
    （slug 化文件名作 id，source_text=文件全文，title=首行/文件名），进入同一条流水线。
  - 结构化报告：--report FILE 落 JSON（配置 + 每 spec 结果 + 汇总），供 CI/gates 集成。
  - --limit N：大目录先跑前 N 个做冒烟（不烧整批 token）。

为什么 subprocess 而非 in-process：隔离全局状态；并行零侵入；单 spec 失败不中断整批。
"""
from __future__ import annotations

import argparse
import glob
import json
import os
import re
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


# ── 朝代/区域/层级 启发式（框架级；真实断代由 LLM 文献理解补正，北极星②「框架优先」） ──
_EPOCH_KW = [
    ("ming_qing", ["明清", "萨尔浒", "辽东", "后金", "努尔哈赤", "万历", "天启", "崇祯", "清", "明"]),
    ("song", ["宋", "北宋", "南宋", "王安石", "靖康", "澶渊", "宋朝"]),
    ("tang", ["唐", "贞观", "开元", "安史", "李唐", "唐王朝"]),
    ("yuan", ["元", "蒙古", "忽必烈", "元朝"]),
    ("ming", ["明", "洪武", "永乐", "郑和", "明朝"]),
    ("qing", ["清", "康熙", "乾隆", "鸦片战争", "清末", "晚清"]),
    ("qin", ["秦", "始皇", "秦朝", "商鞅"]),
    ("han", ["汉", "刘邦", "汉武帝", "文景", "汉朝"]),
    ("sui", ["隋", "炀帝", "开运河", "隋朝"]),
    ("three_kingdoms", ["三国", "赤壁", "曹操", "蜀汉"]),
    ("two_jin", ["两晋", "西晋", "东晋", "八王"]),
    ("warring_states", ["战国", "商鞅", "合纵", "连横", "七雄"]),
    ("qin_han", ["秦汉", "秦制"]),
    ("sui_tang", ["隋唐"]),
    ("yuan_ming", ["元明"]),
    ("sui_yuan", ["隋元"]),
    ("cross_dynastic", ["历代", "通史", "古今"]),
    ("guangzhong", ["关中", "咸阳", "长安"]),
    ("huabei", ["华北", "河北"]),
    ("qing_modern", ["近代", "民国", "洋务"]),
    ("fiction", ["小说", "演义", "虚构", "架空"]),
]
_REGION_KW = [
    ("liaodong", ["辽东", "辽河", "沈阳", "盛京", "赫图阿拉"]),
    ("liaobei", ["辽北", "开原", "铁岭"]),
    ("guangzhong", ["关中", "咸阳", "长安", "陕西"]),
    ("huabei", ["华北", "河北", "幽州"]),
    ("jiangnan", ["江南", "江淮", "南京", "临安", "杭州"]),
    ("guanzhong", ["关东"]),
]
_SCALE_STRATEGIC_KW = ["改革", "制度", "思想", "对外交流", "民族融合", "宫廷", "礼制",
                        "科举", "变法", "新政", "新法", "改制", "维新"]
_SCALE_TACTICAL_KW = ["战役", "之战", "战争", "大战", "交战", "会战", "阵战", "决战"]


def _derive_epoch(text: str, default: str) -> str:
    for epoch, kws in _EPOCH_KW:
        for kw in kws:
            if kw in text:
                return epoch
    return default


def _derive_region(text: str, default: str) -> str:
    for region, kws in _REGION_KW:
        for kw in kws:
            if kw in text:
                return region
    return default


def _derive_scale_tier(text: str, default: str) -> str:
    for kw in _SCALE_STRATEGIC_KW:
        if kw in text:
            return "strategic"
    for kw in _SCALE_TACTICAL_KW:
        if kw in text:
            return "tactical"
    return default


def _wrap_text(path: str, default_party: str, default_region: str,
               default_kind: str, default_epoch: str = "cross_dynastic") -> dict:
    """把一个 .txt/.md 文件裹成「富 spec」dict（v0.123 框架自动富化）。

    目标：落库即过闸，无需事后手 patch（北极星②「框架优先、LLM 仅做理解」）。
    - id 自动加 _llm 后缀（与既有 world-gen 约定一致，省去事后补后缀）；
    - 启发式从 文件名+正文前段 推导 epoch/region/scale_tier（真实断代交给 LLM 文献理解）；
    - vocab_pack=auto（每场景自带语境包）；terrain_grid=china_coarse（复用全国网格，
      避免批量建数百个微小网格；ingest._register_terrain 已做「已存在则跳过」）；
    - strategic 四维块不在此硬编码——交由 ingest._register_scene 的框架骨架兜底，
      LLM 文献理解后续补正推导（保持「框架优先、理解后置」分工）。"""
    with open(path, encoding="utf-8") as f:
        text = f.read()
    base = os.path.splitext(os.path.basename(path))[0]
    slug = _slugify(base)
    if not slug.endswith("_llm"):
        slug = slug + "_llm"
    # title：从正文稳健提取（框架对真实 wikitext/带注释头的任意文本都稳）
    #   1) 跳过 `#` 注释行；2) 优先 `# 标题: X` / `标题：X` 约定；
    #   3) 否则取首条非注释短行（≤40字）；4) 兜底文件名（humanized）。
    #   （paraphrase_unverified / 来源: 标记行仅作诚实溯源，不污染 title）
    title = None
    for line in text.splitlines():
        s = line.strip()
        if not s:
            continue
        if s.startswith("#"):
            m = re.match(r"^#\s*标题[:：]\s*(.+)$", s)
            if m:
                title = m.group(1).strip()
                break
            continue
        if "paraphrase_unverified" in s or s.startswith("来源:"):
            continue
        if 0 < len(s) <= 40:
            title = s
            break
        break  # 首条正文行过长（如整段正文），放弃用正文，回退文件名
    if not title:
        title = base
    head = base + "\n" + text[:2000]
    epoch = _derive_epoch(head, default_epoch)
    region = _derive_region(head, default_region)
    scale_tier = _derive_scale_tier(head, "operational")
    return {
        "id": slug,
        "title": title,
        "kind": default_kind,
        "region": region,
        "epoch": epoch,
        "scale_tier": scale_tier,
        "vocab_pack": "auto",
        "terrain_grid": "china_coarse",
        "source": {"id": slug, "title": title,
                   "party": default_party, "credibility": None},
        "source_text": text,
    }


def _emit_one(python: str, spec_path: str, emit_path: str, dry: bool,
              timeout: int, retries: int = 0, retry_delay: float = 3.0) -> dict:
    """单 spec emit（subprocess）。返回结构化结果。对瞬时失败自动重试。"""
    if dry:
        return {"spec": spec_path, "emit": emit_path, "rc": "DRY",
                "ok": True, "skipped": False, "err": "", "attempts": 1}
    attempts = 0
    last = None
    for attempt in range(1 + max(0, retries)):
        attempts = attempt + 1
        t0 = time.time()
        try:
            proc = subprocess.run(
                [python, INGEST, "--world", spec_path, "--emit", emit_path],
                cwd=ROOT, capture_output=True, text=True, timeout=timeout)
        except subprocess.TimeoutExpired:
            last = {"spec": spec_path, "emit": emit_path, "rc": -1,
                    "ok": False, "skipped": False, "err": "timeout",
                    "secs": round(time.time() - t0, 1), "attempts": attempts}
            print("  ⚠ emit 超时(重试 %d/%d) %s" % (attempts, 1 + retries, spec_path))
        else:
            rc = proc.returncode
            last = {"spec": spec_path, "emit": emit_path, "rc": rc, "ok": rc == 0,
                    "skipped": False,
                    "err": (proc.stderr or proc.stdout).strip()[-300:] if rc != 0 else "",
                    "secs": round(time.time() - t0, 1), "attempts": attempts}
            if rc == 0:
                return last
            print("  ⚠ emit 失败 rc=%s(重试 %d/%d) %s" % (rc, attempts, 1 + retries, spec_path))
        if attempt < retries:
            time.sleep(retry_delay)
    return last if last is not None else {"spec": spec_path, "emit": emit_path,
                                           "rc": -1, "ok": False, "skipped": False,
                                           "err": "no-attempt", "attempts": attempts}


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
                              args.default_kind, args.default_epoch)
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

    if args.from_text:
        # 单文件：裹成 spec 进同一条流水线（北极星② 单行入口）
        td = tempfile.mkdtemp(prefix="batch_from_text_")
        temp_dirs.append(td)
        spec = _wrap_text(args.from_text, args.default_party, args.default_region,
                          args.default_kind, args.default_epoch)
        key = spec["id"]
        if key in seen:
            key = "%s_%d" % (key, len(seen))
            spec["id"] = key
        seen.add(key)
        out = os.path.join(td, key + ".spec.json")
        with open(out, "w", encoding="utf-8") as f:
            json.dump(spec, f, ensure_ascii=False, indent=1)
            f.write("\n")
        specs.append((key, out, True))

    # --limit N：大目录先跑前 N 个做冒烟（不烧整批 token）
    if args.limit and args.limit > 0 and len(specs) > args.limit:
        print("[batch] --limit %d：仅处理前 %d / %d 个 spec"
              % (args.limit, args.limit, len(specs)))
        specs = specs[:args.limit]
    return specs, temp_dirs


def main() -> int:
    ap = argparse.ArgumentParser(
        description="批量 world-gen：specs/texts-dir → emit(并行) → 可选 register + build + gates")
    ap.add_argument("--specs-dir", default=None, help="含 *.spec.json 的目录")
    ap.add_argument("--texts-dir", default=None,
                    help="含 *.txt/*.md 的目录（自动裹成 spec，直击北极星②）")
    ap.add_argument("--from-text", default=None,
                    help="单文件一键流水线（任意文字 → 世界 的单行入口）")
    ap.add_argument("--emits-dir", default=None, help="emit JSON 输出目录（默认 .tmp/batch_emits）")
    ap.add_argument("--jobs", type=int, default=1,
                    help="emit 阶段并行 worker 数（默认 1；LLM 调用密集，受 API 限速）")
    ap.add_argument("--limit", type=int, default=0,
                    help="最多处理前 N 个 spec（大目录冒烟用，默认 0=不限制）")
    ap.add_argument("--retries", type=int, default=0,
                    help="emit 瞬时失败自动重试次数（限流/5xx，默认 0=不重试）")
    ap.add_argument("--retry-delay", type=float, default=3.0, help="emit 重试退避秒数")
    ap.add_argument("--register", action="store_true",
                    help="emit 后逐个 --from-json 回灌（WORLD_SKIP_BUILD=1）+ 收尾单次 build")
    ap.add_argument("--no-build", action="store_true",
                    help="配合 --register：跳过收尾 build.py（仅写文件/注册/地形）")
    ap.add_argument("--run-gates", action="store_true", help="收尾跑 tools/gates.py --strict")
    ap.add_argument("--force", action="store_true",
                    help="忽略已存在的 emit 文件，强制重跑 LLM")
    ap.add_argument("--report", default=None, help="写出 JSON 汇总报告路径")
    ap.add_argument("--default-party", default="后世官修",
                    help="--texts-dir/--from-text 自动裹 spec 的默认 source.party（按语料设，默认「后世官修」）")
    ap.add_argument("--default-region", default="liaodong", help="--texts-dir/--from-text 默认 region（启发式可覆盖）")
    ap.add_argument("--default-epoch", default="cross_dynastic",
                    help="--texts-dir/--from-text 断代兜底（启发式命中则覆盖，默认 cross_dynastic）")
    ap.add_argument("--default-kind", default="county", help="--texts-dir/--from-text 默认 kind")
    ap.add_argument("--dry-run", action="store_true", help="只打印计划，不调 LLM / 不写库")
    ap.add_argument("--python", default=sys.executable, help="调 ingest.py 的 python 解释器")
    args = ap.parse_args()

    if not args.specs_dir and not args.texts_dir and not args.from_text:
        print("[batch] 需 --specs-dir / --texts-dir / --from-text 之一")
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
          "  limit=%d  retries=%d"
          % (len(specs), emits_dir, jobs, args.register, args.run_gates, args.force,
             args.limit, args.retries))

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
                    args.python, sp, emit, args.dry_run, 900,
                    args.retries, args.retry_delay)})
        else:
            with ThreadPoolExecutor(max_workers=jobs) as ex:
                futs = {ex.submit(_emit_one, args.python, sp, emit, False, 900,
                                  args.retries, args.retry_delay): key
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
                       "from_text": args.from_text, "emits_dir": emits_dir,
                       "jobs": jobs, "limit": args.limit, "retries": args.retries,
                       "register": args.register, "no_build": args.no_build,
                       "run_gates": args.run_gates, "force": args.force},
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
