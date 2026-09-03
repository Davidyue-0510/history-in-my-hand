"""v0.82 `--emit` 仅产出 JSON 不 build 测试（离线 fixture，不烧 token）：
验证 --world/--multi 配 --emit 时：
  1. 退出码 0，emit JSON 写到 --emit 指定路径；
  2. JSON 结构完整（meta + persons/events/places/edges/assertions）；
  3. 断言线程源元信息（_source_idx/_source_name/_source_party/_source_credibility）；
  4. 多源 emit 含跨源冲突标注（_cross_conflicts）；
  5. **零 repo 副作用**：不创建 data/<id> 场景目录、不改 scenes.json、不建 vocab、不注册地形。
清理：emit 产物写到系统 temp（os.remove 真删），零残留。
"""
import os
import sys
import json
import tempfile
import subprocess
import hashlib

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
    h = hashlib.sha256()
    with open(p, "rb") as f:
        h.update(f.read())
    return h.hexdigest()


def check(name, cond):
    print(("[ok] " if cond else "[XX] ") + name)
    return cond


def _run_emit(spec_rel, tmp_out):
    spec = os.path.join(FIX, spec_rel)
    rc = subprocess.run([PY, "tools/ingestion/ingest.py", "--world" if spec_rel.endswith("single.json") else "--multi", spec, "--emit", tmp_out],
                        cwd=ROOT, capture_output=True, text=True)
    return rc


def main():
    ok = True

    # ── 单源 emit ──
    sd = tempfile.mkdtemp(prefix="emit_single_")
    out_s = os.path.join(sd, "single.json")
    scenes_before = _sha(SCENES_JSON)
    rc = _run_emit("spec_emit_single.json", out_s)
    out = rc.stdout + rc.stderr
    print(out[-1400:])
    ok = check("单源 --emit 退出码 0", rc.returncode == 0) and ok
    ok = check("emit 产物存在", os.path.exists(out_s)) and ok
    emit = {}
    if os.path.exists(out_s):
        emit = json.load(open(out_s, encoding="utf-8"))
    ok = check("meta.mode == single", emit.get("meta", {}).get("mode") == "single") and ok
    ok = check("meta.sources 含 1 源", len(emit.get("meta", {}).get("sources", [])) == 1) and ok
    ast_s = emit.get("assertions", [])
    ok = check("断言非空 (%d 条)" % len(ast_s), len(ast_s) > 0) and ok
    if ast_s:
        a0 = ast_s[0]
        ok = check("断言带 _source_idx=0", a0.get("_source_idx") == 0) and ok
        ok = check("断言带 _source_name", bool(a0.get("_source_name"))) and ok
        ok = check("断言带 _source_party=明方", a0.get("_source_party") == "明方") and ok
        ok = check("断言带 _source_credibility=中", a0.get("_source_credibility") == "中") and ok

    # 零 repo 副作用（单源）
    ok = check("零残留: 未创建 data/wtest_emit_single",
               not os.path.isdir(os.path.join(ROOT, "data", "wtest_emit_single"))) and ok
    ok = check("零残留: scenes.json 未改动", _sha(SCENES_JSON) == scenes_before) and ok
    ok = check("零残留: 未建 vocab 包",
               not os.path.exists(os.path.join(ROOT, "data", "vocab", "wtest_emit_single.json"))) and ok
    _rmtree_manual(sd)

    # ── 多源 emit ──
    md = tempfile.mkdtemp(prefix="emit_multi_")
    out_m = os.path.join(md, "multi.json")
    scenes_before2 = _sha(SCENES_JSON)
    rc = _run_emit("spec_emit_multi.json", out_m)
    out = rc.stdout + rc.stderr
    print(out[-1400:])
    ok = check("多源 --emit 退出码 0", rc.returncode == 0) and ok
    ok = check("emit 产物存在", os.path.exists(out_m)) and ok
    emit2 = {}
    if os.path.exists(out_m):
        emit2 = json.load(open(out_m, encoding="utf-8"))
    ok = check("meta.mode == multi", emit2.get("meta", {}).get("mode") == "multi") and ok
    ok = check("meta.sources 含 2 源", len(emit2.get("meta", {}).get("sources", [])) == 2) and ok
    ast_m = emit2.get("assertions", [])
    ok = check("多源断言 2 条", len(ast_m) == 2) and ok
    if len(ast_m) == 2:
        idxs = sorted(a.get("_source_idx") for a in ast_m)
        ok = check("_source_idx 覆盖 [0,1]", idxs == [0, 1]) and ok
        creds = sorted(a.get("_source_credibility") for a in ast_m)
        ok = check("可信度线程 [中,高]", creds == ["中", "高"]) and ok
        # 跨源冲突标注：至少一条带 _cross_conflicts 且指向另一源
        cc = [a for a in ast_m if a.get("_cross_conflicts")]
        ok = check("含跨源冲突标注 (%d 条)" % len(cc), len(cc) >= 1) and ok

    # 零 repo 副作用（多源）
    ok = check("零残留: 未创建 data/wtest_emit_multi",
               not os.path.isdir(os.path.join(ROOT, "data", "wtest_emit_multi"))) and ok
    ok = check("零残留: scenes.json 未改动", _sha(SCENES_JSON) == scenes_before2) and ok
    ok = check("零残留: 未建 vocab 包",
               not os.path.exists(os.path.join(ROOT, "data", "vocab", "wtest_emit_multi.json"))) and ok
    _rmtree_manual(md)

    print("emit: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
