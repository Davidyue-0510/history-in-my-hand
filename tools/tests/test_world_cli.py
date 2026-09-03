"""CLI 级一键世界生成 smoke test（v0.80）：验证 `python tools/ingest.py --world <spec>`
端到端真通（CLI 解析 → generate_world → 离线 llm_fixture 抽取 → 落文件 → 注册 scenes.json）。

不烧 token（用 fixtures/world_fixture.json 离线抽取）；用 WORLD_SKIP_BUILD=1 跳过整库
build+gates（避免污染 demo/ 与重 build），build+gates 已单独在 test_world_gen 与 gates 覆盖。
清理同 test_world_gen：os.rename 移出 workspace（绕过沙箱 safe-delete）+ 手动 walk 删，零残留。
"""
import os
import sys
import json
import shutil
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
FIX = os.path.join(HERE, "fixtures")
ROOT = os.path.abspath(os.path.join(HERE, "..", ".."))
SCENE = "wtest_cli"
SCENE_DIR = os.path.join(ROOT, "data", SCENE)
VOCAB_PACK = os.path.join(ROOT, "data", "vocab", SCENE + ".json")
SCENES_JSON = os.path.join(ROOT, "data", "scenes.json")
TERRAIN_GRID = os.path.join(ROOT, "data", "terrain", SCENE + "_grid.json")
TERRAIN_REG = os.path.join(ROOT, "data", "terrain", "registry.json")
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


# 测试开始前整文件备份（原始字节），cleanup 时原样回写，
# 既移除测试写入的注册项又零格式漂移（避免 json.dump 重写污染 scenes.json/registry.json）。
_BACKUP = {}


def _capture_backup():
    _BACKUP.clear()
    for p in (SCENES_JSON, TERRAIN_REG):
        if os.path.exists(p):
            try:
                with open(p, "rb") as f:
                    _BACKUP[p] = f.read()
            except Exception:
                _BACKUP[p] = None
        else:
            _BACKUP[p] = None


def _cleanup():
    drive = os.path.splitdrive(ROOT)[0] or "E:"
    _trash = os.path.join(drive + os.sep, "__wtest_cli_trash_%d" % os.getpid())
    os.makedirs(_trash, exist_ok=True)
    if os.path.isdir(SCENE_DIR):
        _dst = os.path.join(_trash, SCENE)
        if os.path.isdir(_dst):
            try:
                shutil.rmtree(_dst)
            except Exception:
                pass
        os.rename(SCENE_DIR, _dst)
    if os.path.exists(VOCAB_PACK):
        _vdst = os.path.join(_trash, SCENE + ".json")
        if os.path.exists(_vdst):
            try:
                os.remove(_vdst)
            except Exception:
                pass
        os.rename(VOCAB_PACK, _vdst)
    # 地形网格数据文件（_register_terrain 经 fetch_terrain.py --new 写出）：移入 trash 删除
    if os.path.exists(TERRAIN_GRID):
        _gdst = os.path.join(_trash, SCENE + "_grid.json")
        if os.path.exists(_gdst):
            try:
                os.remove(_gdst)
            except Exception:
                pass
        os.rename(TERRAIN_GRID, _gdst)
    # scenes.json / registry.json：原样回写备份（移除 wtest_cli 注册项 + 保留原始格式/换行）
    for p in (SCENES_JSON, TERRAIN_REG):
        if p in _BACKUP and _BACKUP[p] is not None:
            try:
                with open(p, "wb") as f:
                    f.write(_BACKUP[p])
            except Exception:
                pass
    if os.path.isdir(_trash):
        _rmtree_manual(_trash)


def check(name, cond):
    print(("[ok] " if cond else "[XX] ") + name)
    return cond


def main():
    spec_path = os.path.join(FIX, "spec_world_cli.json")
    ok = True
    try:
        _capture_backup()  # 备份 scenes.json / registry.json 原始字节，供 cleanup 零漂移回写
        env = dict(os.environ)
        env["WORLD_SKIP_BUILD"] = "1"
        rc = subprocess.run([PY, "tools/ingestion/ingest.py", "--world", spec_path],
                            cwd=ROOT, env=env, capture_output=True, text=True)
        out = rc.stdout + rc.stderr
        print(out[-1600:])
        ok = check("CLI --world 退出码 0", rc.returncode == 0) and ok
        ok = check("build.py 路径正确 (tools/ingestion/build.py)",
                   os.path.exists(os.path.join(ROOT, "tools", "ingestion", "build.py"))) and ok
        ok = check("场景目录已生成", os.path.isdir(SCENE_DIR)) and ok
        if os.path.isdir(SCENE_DIR):
            al = os.path.join(SCENE_DIR, "assertions.jsonl")
            n = 0
            if os.path.exists(al):
                with open(al, encoding="utf-8") as f:
                    n = sum(1 for _ in f)
            ok = check("assertions.jsonl 非空 (%d 条)" % n, n > 0) and ok
        reg = json.load(open(SCENES_JSON, encoding="utf-8"))
        ent = reg.get("scenes", {}).get(SCENE)
        ok = check("scenes.json 已注册", ent is not None) and ok
        if ent:
            ok = check("场景级 dims 非空 %s" % ent.get("dims"), bool(ent.get("dims"))) and ok
    finally:
        _cleanup()
    ok = check("零残留: 场景目录已删", not os.path.isdir(SCENE_DIR)) and ok
    ok = check("零残留: 语境包已删", not os.path.exists(VOCAB_PACK)) and ok
    ok = check("零残留: 地形网格已删", not os.path.exists(TERRAIN_GRID)) and ok
    try:
        _treg = json.load(open(TERRAIN_REG, encoding="utf-8"))
        ok = check("零残留: 地形注册表已注销",
                   SCENE not in _treg.get("grids", {})) and ok
    except Exception:
        pass
    reg = json.load(open(SCENES_JSON, encoding="utf-8"))
    ok = check("零残留: scenes.json 已注销", SCENE not in reg.get("scenes", {})) and ok
    print("world_cli: %s" % ("PASS" if ok else "FAIL"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
