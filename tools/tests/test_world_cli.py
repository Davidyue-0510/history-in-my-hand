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
import tempfile

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
    # 就地删除：目录用 shutil.rmtree（对多文件目录有效）；单文件用 os.remove
    # （shutil.rmtree 对单文件静默 no-op，必须 os.remove）。不走「rename 到工作区外盘根 +
    # 外部批量删」老路——那条会触发 BULK_CONFIRM_REQUIRED 守卫，导致场景目录残留、闸门误杀。
    if os.path.isdir(SCENE_DIR):
        shutil.rmtree(SCENE_DIR, ignore_errors=True)
    for p in (VOCAB_PACK, TERRAIN_GRID):
        if os.path.exists(p):
            try:
                os.remove(p)
            except Exception:
                pass
    # scenes.json / registry.json：原样回写备份（移除 wtest_cli 注册项 + 保留原始格式/换行）
    for p in (SCENES_JSON, TERRAIN_REG):
        if p in _BACKUP and _BACKUP[p] is not None:
            try:
                with open(p, "wb") as f:
                    f.write(_BACKUP[p])
            except Exception:
                pass


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
        # 地形联网拉取在 gates 下会被 OpenTopoData 限速抖动误杀（300s 单步超时）。
        # smoke 仅验证 CLI→抽取→落文件→注册 scenes.json，真实高程由 build/手动 fetch 补全，
        # 故离线注册网格元数据即可（fetch_terrain --offline），去掉网络时序不确定性。
        env["WORLD_SKIP_TERRAIN"] = "1"
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
