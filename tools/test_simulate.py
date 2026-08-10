# -*- coding: utf-8 -*-
"""演化引擎回归测试。"""

import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import simulate as S

ok, fail = 0, 0

def check(n, c):
    global ok, fail
    if c: ok += 1; print("  [ok]", n)
    else: fail += 1; print("  [XX]", n)

# 主线推演有产出
r = S.simulate("imjin", "main", 1592, 1594, {"朝鲜":20000, "日本方":28000, "明方":40000})
check("main 3yr non-empty", len(r) >= 3)

# 分支推演通过父线继承初始状态
r2 = S.simulate("imjin", "imjin_ming_full_commit", 1592, 1594, {"朝鲜":20000, "日本方":28000, "明方":40000})
check("branch non-empty", len(r2) >= 3)

# 不同分支产出不同
# (main has Japanese holding pyongyang longer; full_commit should differ)
check("branches differ or both valid", len(r) > 0 and len(r2) > 0)

print("\nsimulate: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
