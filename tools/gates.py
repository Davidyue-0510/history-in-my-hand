#!/usr/bin/env python3
"""一键跑全部守门闸门：lint -> test -> leads -> build -> interaction。

合作者、CI、本地提交前跑一条命令即可：

    python tools/gates.py                    # 警告不阻断
    python tools/gates.py --strict           # 任何 warning 也视为失败（CI 用）
    python tools/gates.py --no-interaction   # 跳过浏览器交互闸门（无 Node/浏览器环境）

任意闸门失败会立即中止并报 exit=1，方便在坏数据进入提交前拦住。

第 5 道「交互闸门」跑无头浏览器，用真实鼠标事件验证地图点得动。
它抓的是前四道抓不到的一类缺陷：数据全对、编译全对、截图也正常，
但浏览器里所有 click 监听器都是死的（详见 tools/probe_interaction.js 顶部注释）。
Node 或浏览器缺失时该闸门自动跳过，不会误伤没有图形环境的 CI。
"""
import shutil
import subprocess
import sys
import os

# Windows 控制台默认 GBK，非 ASCII 符号（✓/✗/✅）会抛 UnicodeEncodeError。
# 统一用 ASCII，且尽量强制 stdout 为 UTF-8，避免协作者在本机跑时崩溃。
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
    sys.stderr.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STEPS = [
    ("守门员 lint · 数据完整性",     ["tools/lint.py"]),
    ("不变量回归 test",              ["tools/test_assertions.py"]),
    ("年号换算 test",                ["tools/test_reign.py"]),
    ("世界模型查询 test",            ["tools/test_world_query.py"]),
    ("语境包 test",                  ["tools/test_vocab.py"]),
    ("地形契约 test",                ["tools/test_terrain.py"]),
    ("分片契约 test",                ["tools/test_sharding.py"]),
    ("地名落点 test",                ["tools/test_geocode.py"]),
    ("控制层契约 test",              ["tools/test_control.py"]),
    ("农历转换 test",                ["tools/test_lunar.py"]),
    ("别名校正 test",                ["tools/test_alias.py"]),
    ("重算研究线索 leads",            ["tools/leads.py"]),
    ("重编译 demo/data.js · build",  ["tools/build.py"]),
    ("统计快照 stats",                ["tools/stats.py"]),
    ("场景注册表一致性 check",         ["tools/check_scenes.py"]),
]


def find_node():
    """交互闸门需要 Node >= 20（内置 fetch / WebSocket）。找不到就跳过，不误伤 CI。"""
    for cand in (os.environ.get("WORLD_NODE"), "node", "nodejs"):
        if not cand:
            continue
        p = cand if os.path.isabs(cand) and os.path.exists(cand) else shutil.which(cand)
        if p:
            return p
    return None


def main():
    args = sys.argv[1:]
    strict = "--strict" in args
    want_interaction = "--no-interaction" not in args

    total = len(STEPS) + (1 if want_interaction else 0)
    ok = True
    for i, (name, rel) in enumerate(STEPS, 1):
        cmd = [sys.executable, os.path.join(ROOT, rel[0])]
        if name.startswith("守门员") and strict:
            cmd.append("--strict")
        print("\n=== [%d/%d] %s ===" % (i, total, name))
        rc = subprocess.run(cmd, cwd=ROOT).returncode
        if rc != 0:
            ok = False
            print("[FAIL] %s (exit=%d)" % (name, rc))
            break
        print("[PASS] %s" % name)

    if ok and want_interaction:
        print("\n=== [%d/%d] 交互闸门 · 无头浏览器真实点击 ===" % (total, total))
        node = find_node()
        if not node:
            print("[SKIP] 未找到 Node，交互闸门跳过（装 Node>=20 或设 WORLD_NODE 后可启用）")
        else:
            rc = subprocess.run([node, os.path.join(ROOT, "tools", "probe_interaction.js")],
                                cwd=ROOT).returncode
            if rc != 0:
                ok = False
                print("[FAIL] 交互闸门 (exit=%d)" % rc)
            else:
                print("[PASS] 交互闸门")

    print("\n" + ("全部闸门通过，可以提交。" if ok
                  else "有闸门未通过，先修再提交。"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
