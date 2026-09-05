# -*- coding: utf-8 -*-
"""v0.107 批量 world-gen 驱动 test（离线，不烧 token，零/最小 repo 副作用）。

覆盖：
  1. --help 退出码 0
  2. --specs-dir 缺失 → rc 2
  3. --dry-run 打印计划、rc 0、零副作用
  4. 离线 fixture spec 真实 emit（subprocess --world --emit，零 repo 副作用）→ rc 0 + 产物存在
  5. 断点续跑：emit 已存在则跳过（--force 覆盖重跑）
  6. --jobs N 并行 emit（3 个离线 fixture 副本并发 → 全成功）
  7. 错误隔离：无 API 的 LLM spec 失败快速返回，批继续，summary emit_fail>=1，rc=1
  8. --report 写出合法 JSON（totals/emits/无 build/gates）
  9. --texts-dir --dry-run：任意文字自动裹 spec 进入计划、rc 0、零副作用

清理：emits-dir 与 text 临时目录都用系统 temp + shutil.rmtree（系统 temp 不受
项目内批量删除守卫拦截）。不 register（避免 repo 污染）。
"""
import os
import sys
import json
import shutil
import tempfile
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
FIX = os.path.join(HERE, "fixtures")
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
PY = sys.executable
BATCH = os.path.join(ROOT, "tools", "ingestion", "batch_world_gen.py")


def _rmtree(d):
    shutil.rmtree(d, ignore_errors=True)


def check(name, cond):
    print(("[ok] " if cond else "[XX] ") + name)
    return cond


def _copy_fixture_specs(dst_dir, n=1):
    """把 spec_emit_single.json + world_fixture.json 拷入 dst_dir，按需生成 n 个副本（不同 id）。"""
    os.makedirs(dst_dir, exist_ok=True)
    shutil.copy(os.path.join(FIX, "world_fixture.json"),
                os.path.join(dst_dir, "world_fixture.json"))
    base = json.load(open(os.path.join(FIX, "spec_emit_single.json"), encoding="utf-8"))
    paths = []
    for i in range(n):
        spec = dict(base)
        if n > 1:
            spec["id"] = "%s_%d" % (base["id"], i)
        # llm_fixture 相对解析依赖 spec 同目录的 world_fixture.json（已拷入）
        p = os.path.join(dst_dir, "copy%d.spec.json" % i)
        json.dump(spec, open(p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
        paths.append(p)
    return paths


def main():
    ok = True

    # 1) --help
    rc = subprocess.run([PY, BATCH, "--help"], cwd=ROOT,
                        capture_output=True, text=True)
    ok = check("--help 退出码 0", rc.returncode == 0) and ok

    # 2) 缺失 specs-dir → rc 2
    td = tempfile.mkdtemp(prefix="batch_missing_")
    rc = subprocess.run([PY, BATCH, "--specs-dir", td], cwd=ROOT,
                        capture_output=True, text=True)
    ok = check("缺失 specs-dir → rc 2", rc.returncode == 2) and ok
    _rmtree(td)

    # 3) --dry-run（无副作用）
    sd = tempfile.mkdtemp(prefix="batch_specs_")
    _copy_fixture_specs(sd, 1)
    ed = tempfile.mkdtemp(prefix="batch_emits_")
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd, "--emits-dir", ed,
                         "--dry-run"], cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    ok = check("--dry-run 退出码 0", rc.returncode == 0) and ok
    ok = check("--dry-run 零副作用（emits 目录空/未写）", not any(
        fn.endswith(".json") for fn in os.listdir(ed))) and ok
    _rmtree(sd); _rmtree(ed)

    # 4) 离线真实 emit（零 repo 副作用）
    sd = tempfile.mkdtemp(prefix="batch_specs_")
    _copy_fixture_specs(sd, 1)
    ed = tempfile.mkdtemp(prefix="batch_emits_")
    scenes_before = None
    scenes_path = os.path.join(ROOT, "data", "scenes.json")
    if os.path.exists(scenes_path):
        scenes_before = open(scenes_path, "rb").read()
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd, "--emits-dir", ed,
                         "--jobs", "1"], cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    print(out[-1200:])
    ok = check("离线 emit 退出码 0", rc.returncode == 0) and ok
    # emit 文件名按 spec 文件名派生（copy0.spec.json → copy0.json），内部 meta.id 才是场景 id
    emit_file = None
    for fn in os.listdir(ed):
        if fn.endswith(".json"):
            p = os.path.join(ed, fn)
            try:
                j = json.load(open(p, encoding="utf-8"))
            except Exception:
                continue
            if j.get("meta", {}).get("id") == "wtest_emit_single":
                emit_file = p
                break
    ok = check("emit 产物存在（按 meta.id 定位）", emit_file is not None) and ok
    emit = {}
    if emit_file:
        emit = json.load(open(emit_file, encoding="utf-8"))
    ok = check("emit 含 meta.id", emit.get("meta", {}).get("id") == "wtest_emit_single") and ok
    ok = check("emit 断言非空", len(emit.get("assertions", [])) > 0) and ok
    # 零 repo 副作用
    ok = check("零残留: 未创建 data/wtest_emit_single",
               not os.path.isdir(os.path.join(ROOT, "data", "wtest_emit_single"))) and ok
    if scenes_before is not None:
        cur = open(scenes_path, "rb").read() if os.path.exists(scenes_path) else b""
        ok = check("零残留: scenes.json 未改动", cur == scenes_before) and ok

    # 5) 断点续跑：emit 已存在则跳过
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd, "--emits-dir", ed,
                         "--jobs", "1"], cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    ok = check("续跑退出码 0", rc.returncode == 0) and ok
    ok = check("续跑打印跳过标记", "跳过(续跑)" in out) and ok

    # 6) --jobs N 并行 emit（3 副本）
    sd3 = tempfile.mkdtemp(prefix="batch_specs3_")
    _copy_fixture_specs(sd3, 3)
    ed3 = tempfile.mkdtemp(prefix="batch_emits3_")
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd3, "--emits-dir", ed3,
                         "--jobs", "3"], cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    print(out[-800:])
    ok = check("并行 emit 退出码 0", rc.returncode == 0) and ok
    n_emit = sum(1 for fn in os.listdir(ed3) if fn.endswith(".json"))
    ok = check("并行 emit 产出 3 个文件", n_emit == 3) and ok
    _rmtree(sd3); _rmtree(ed3)

    # 7) 错误隔离（确定性离线崩溃：spec 缺 source.id → _llm_extract_world KeyError → rc!=0；批继续）
    sd_bad = tempfile.mkdtemp(prefix="batch_bad_")
    bad_spec = {"id": "batch_bad_x", "title": "坏 spec",
                "source": {"title": "x", "party": "明方"},  # 缺 id → KeyError
                "source_text": "这是一段缺少 source.id 的测试文本。"}
    bad_p = os.path.join(sd_bad, "bad.spec.json")
    json.dump(bad_spec, open(bad_p, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    ed_bad = tempfile.mkdtemp(prefix="batch_emits_bad_")
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd_bad, "--emits-dir", ed_bad,
                         "--jobs", "1"], cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    print(out[-800:])
    ok = check("错误隔离: 批继续返回 rc=1", rc.returncode == 1) and ok
    ok = check("错误隔离: 汇总 emit_fail>=1", "emit_fail=1" in out) and ok
    ok = check("错误隔离: 坏 spec 未污染 data/",
               not os.path.isdir(os.path.join(ROOT, "data", "batch_bad_x"))) and ok
    _rmtree(sd_bad); _rmtree(ed_bad)
    # 清理第4步残留（仅 emits 目录）
    _rmtree(sd); _rmtree(ed)

    # 8) --report 合法 JSON
    sd = tempfile.mkdtemp(prefix="batch_specs_")
    _copy_fixture_specs(sd, 1)
    ed = tempfile.mkdtemp(prefix="batch_emits_")
    rep = os.path.join(ed, "report.json")
    rc = subprocess.run([PY, BATCH, "--specs-dir", sd, "--emits-dir", ed,
                         "--jobs", "1", "--report", rep], cwd=ROOT,
                        capture_output=True, text=True)
    ok = check("--report 退出码 0", rc.returncode == 0) and ok
    ok = check("报告文件存在", os.path.exists(rep)) and ok
    rep_obj = {}
    if os.path.exists(rep):
        rep_obj = json.load(open(rep, encoding="utf-8"))
    ok = check("报告含 totals.specs==1", rep_obj.get("totals", {}).get("specs") == 1) and ok
    ok = check("报告 emits 全 ok", all(
        e.get("ok") for e in rep_obj.get("emits", []))) and ok
    ok = check("报告 build/gates 为 None（未 register）",
               rep_obj.get("build") is None and rep_obj.get("gates") is None) and ok
    _rmtree(sd); _rmtree(ed)

    # 9) --texts-dir --dry-run（任意文字自动裹 spec）
    td_txt = tempfile.mkdtemp(prefix="batch_texts_")
    with open(os.path.join(td_txt, "三国志_曹操.txt"), "w", encoding="utf-8") as f:
        f.write("官渡之战\n曹操以少胜多，火烧乌巢，大破袁绍。\n")
    with open(os.path.join(td_txt, "note.md"), "w", encoding="utf-8") as f:
        f.write("# 淝水之战\n苻坚投鞭断流，谢玄以八千北府兵破前秦。\n")
    rc = subprocess.run([PY, BATCH, "--texts-dir", td_txt, "--dry-run"],
                        cwd=ROOT, capture_output=True, text=True)
    out = rc.stdout + rc.stderr
    ok = check("--texts-dir --dry-run 退出码 0", rc.returncode == 0) and ok
    # slug 由文件名派生并保留中文（三国志_曹操.txt → 三国志_曹操；note.md → note）
    ok = check("--texts-dir 计划含裹出的 txt spec（三国志_曹操）",
               "三国志_曹操" in out) and ok
    ok = check("--texts-dir 计划含裹出的 md spec（note）",
               "note" in out) and ok
    _rmtree(td_txt)

    print("\nbatch_world_gen: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
