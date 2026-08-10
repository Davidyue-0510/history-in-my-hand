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
r = S.simulate("imjin", "main", 1592, 1594,
               {"朝鲜":20000, "日本方":28000},
               [(1593, "明方", 55000, "uiju")])
check("明方入局·1593占平壤", len(r) >= 3 and any(
    c["place_id"] == "pyongyang" and c["party"] == "明方" for c in r))

r2 = S.simulate("imjin", "imjin_ming_full_commit", 1592, 1594,
                {"朝鲜":20000, "日本方":28000},
                [(1593, "明方", 55000, "uiju")])
check("分支推演也产出", len(r2) >= 2)

print("\nsimulate: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
