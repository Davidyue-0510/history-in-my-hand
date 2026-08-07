#!/usr/bin/env python3
"""一键跑全部守门闸门：lint -> test -> leads -> build。

合作者、CI、本地提交前跑一条命令即可：

    python tools/gates.py          # 警告不阻断
    python tools/gates.py --strict # 任何 warning 也视为失败（CI 用）

任意闸门失败会立即中止并报 exit=1，方便在坏数据进入提交前拦住。
"""
import subprocess
import sys
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

STEPS = [
    ("守门员 lint · 数据完整性",     ["tools/lint.py"]),
    ("不变量回归 test",              ["tools/test_assertions.py"]),
    ("重算研究线索 leads",            ["tools/leads.py"]),
    ("重编译 demo/data.js · build",  ["tools/build.py"]),
]


def main():
    strict = "--strict" in sys.argv[1:]
    ok = True
    for i, (name, rel) in enumerate(STEPS, 1):
        cmd = [sys.executable, os.path.join(ROOT, rel[0])]
        if name.startswith("守门员") and strict:
            cmd.append("--strict")
        print("\n=== [%d/%d] %s ===" % (i, len(STEPS), name))
        rc = subprocess.run(cmd, cwd=ROOT).returncode
        if rc != 0:
            ok = False
            print("✗ %s 失败 (exit=%d)" % (name, rc))
            break
        print("✓ %s 通过" % name)

    print("\n" + ("全部闸门通过 ✅ 可以提交。" if ok
                  else "有闸门未通过 ❌ 先修再提交。"))
    return 0 if ok else 1


if __name__ == "__main__":
    sys.exit(main())
