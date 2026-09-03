"""v0.86 跨会话记忆载体测试（离线 fixture，不烧 token）：
验证 emit JSON 作为「A 会话生成 → B 会话 --from-json 接着扩」的记忆载体：
  1. A 会话 --emit 产出 base 快照（断言带 _source_idx/_source_quote）；
  2. B 会话 --extend-json base + --multi 新来源，产出扩展 emit：
     - base 断言 id / _source_* / 引文 完整保留（记忆不漂移、无损）；
     - 新来源断言追加（_source_idx 接续 base_n）；
     - 同名事件（萨尔浒之战）对齐后，base vs 新 的「result」跨会话冲突被检测；
     - meta.sources 含 base + 新 全部来源（来源谱系完整）。
  3. 零 repo 副作用：emit-only 模式不创建 data/<id>/、不改 scenes.json、不建 vocab。
清理：emit 产物写到系统 temp（_rmtree_manual 真删），零残留。
"""
import os
import sys
import json
import tempfile
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
FIX = os.path.join(HERE, "fixtures")
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
SCENES_JSON = os.path.join(ROOT, "data", "scenes.json")
PY = sys.executable


def _rmtree_manual(d):
    for r, ds, fs in os.walk(d, topdown=False):
        for fn in fs:
            try:
                os.remove(os.path.join(r, fn))
            except Exception:
                pass
        for dn in ds:
            try:
                os.rmdir(os.path.join(r, dn))
            except Exception:
                pass
    try:
        os.rmdir(d)
    except Exception:
        pass


def _sha(p):
    if not os.path.exists(p):
        return None
    import hashlib
    h = hashlib.sha256()
    with open(p, "rb") as f:
        h.update(f.read())
    return h.hexdigest()


def check(name, cond):
    print(("[ok] " if cond else "[XX] ") + name)
    return cond


def _run(args):
    return subprocess.run([PY] + args, cwd=ROOT, capture_output=True, text=True)


def main():
    ok = True
    d = tempfile.mkdtemp(prefix="emit_carrier_")
    out_base = os.path.join(d, "base.json")
    out_ext = os.path.join(d, "ext.json")

    scenes_before = _sha(SCENES_JSON)

    # ── A 会话：emit base 快照 ──
    rc = _run(["tools/ingestion/ingest.py", "--world",
               os.path.join(FIX, "spec_extend_base.json"), "--emit", out_base])
    out = rc.stdout + rc.stderr
    print(out[-1400:])
    ok = check("A 会话 --emit 退出码 0", rc.returncode == 0) and ok
    ok = check("base emit 产物存在", os.path.exists(out_base)) and ok
    base = json.load(open(out_base, encoding="utf-8")) if os.path.exists(out_base) else {}
    bast = base.get("assertions", [])
    ok = check("base 断言 2 条", len(bast) == 2) and ok
    if bast:
        ok = check("base 断言 _source_idx=0", all(a.get("_source_idx") == 0 for a in bast)) and ok
        ok = check("base 断言带 _source_quote",
                   all(a.get("_source_quote") for a in bast)) and ok

    # ── B 会话：extend 追加新来源 ──
    rc = _run(["tools/ingestion/ingest.py", "--extend-json", out_base,
               "--multi", os.path.join(FIX, "spec_extend_new.json"), "--emit", out_ext])
    out = rc.stdout + rc.stderr
    print(out[-1600:])
    ok = check("B 会话 --extend-json 退出码 0", rc.returncode == 0) and ok
    ok = check("ext emit 产物存在", os.path.exists(out_ext)) and ok
    ext = json.load(open(out_ext, encoding="utf-8")) if os.path.exists(out_ext) else {}
    east = ext.get("assertions", [])
    esrc = ext.get("meta", {}).get("sources", [])

    # 累积：base 2 + 新 1 = 3
    ok = check("扩展后断言 3 条（base 2 + 新 1）", len(east) == 3) and ok
    ok = check("meta.sources 含 2 源（base + 新）", len(esrc) == 2) and ok

    # base 无损保留
    base_vals = {a.get("value_text") for a in east if a.get("_source_idx") == 0}
    ok = check("base 断言完整保留（含『明军大捷』）", "明军大捷" in base_vals) and ok
    ok = check("base 原始引文保留（『明军四路出师，萨尔浒师大败』）",
               any(a.get("_source_quote") == "明军四路出师，萨尔浒师大败" for a in east)) and ok
    # base 断言 id 不重编号（记忆不漂移）
    ok = check("base 断言 id 保留（WTE001 仍在）",
               any(a.get("id") == "WTE001" for a in east)) and ok

    # 新来源追加 + 线程
    new_as = [a for a in east if a.get("_source_idx") == 1]
    ok = check("新来源断言 _source_idx=1（接续 base_n）", len(new_as) == 1) and ok
    if new_as:
        ok = check("新来源断言值『后金破明』", new_as[0].get("value_text") == "后金破明") and ok
        ok = check("新来源断言带 _source_quote",
                   new_as[0].get("_source_quote") == "我军大破明兵，斩获甚众") and ok
        ok = check("新来源断言 id 独立命名空间（WTE_E1_0_001）",
                   new_as[0].get("id") == "WTE_E1_0_001") and ok

    # 跨会话冲突检测：base(result) vs 新(result) 同名事件、不同 value
    cc = [a for a in east if a.get("_cross_conflicts")]
    ok = check("检测到跨会话冲突（≥1 条带 _cross_conflicts）", len(cc) >= 1) and ok
    if cc:
        ids = set()
        for a in cc:
            ids.update(a.get("_cross_conflicts", []))
            ids.add(a["id"])
        # 冲突双方分属不同 _source_idx
        idxs = {a.get("_source_idx") for a in east if a.get("id") in ids}
        ok = check("冲突双方分属 base(0) 与 新(1)", idxs == {0, 1}) and ok

    # 零 repo 副作用（emit-only）
    ok = check("零残留: 未创建 data/wtest_emit_base",
               not os.path.isdir(os.path.join(ROOT, "data", "wtest_emit_base"))) and ok
    ok = check("零残留: scenes.json 未改动", _sha(SCENES_JSON) == scenes_before) and ok
    ok = check("零残留: 未建 vocab 包",
               not os.path.exists(os.path.join(ROOT, "data", "vocab", "wtest_emit_base.json"))) and ok

    _rmtree_manual(d)
    print("emit_memory_carrier: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
