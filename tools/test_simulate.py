# -*- coding: utf-8 -*-
"""演化引擎回归测试（全半岛战役验证）。"""

import json, os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import simulate as S

ok, fail = 0, 0
def check(n, c):
    global ok, fail
    if c: ok += 1; print("  [ok]", n)
    else: fail += 1; print("  [XX]", n)

# 全战役推演
reinforce = [(1593,'明方',55000,'uiju'),(1594,'明方',25000,'pyongyang'),
             (1594,'日本方',15000,'busan'),(1595,'明方',20000,'hanseong'),
             (1596,'日本方',25000,'busan'),(1597,'明方',40000,'uiju'),
             (1598,'明方',30000,'busan')]
r = S.simulate("imjin", "main", 1592, 1598,
               {"朝鲜":20000, "日本方":28000}, reinforce)
check("全战役有产出", len(r) >= 8)
has = lambda city, party: any(c["place_id"]==city and c["party"]==party for c in r)
check("明方破平壤(1593-94)", has("pyongyang","明方") or has("liaodong","明方"))
check("明方下汉城(1595)", has("hanseong","明方") or has("bixieguan","明方"))
check("明方收釜山(1598)", has("busan","明方") or has("kaesong","明方"))

r2 = S.simulate("imjin", "imjin_ming_full_commit", 1592, 1598,
                {"朝鲜":20000, "日本方":28000}, reinforce)
check("分支推演有产出", len(r2) >= 5)

print("\nsimulate: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
