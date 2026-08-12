# -*- coding: utf-8 -*-
"""农历日期转契约测试：年号月日 → 公元日期。
锁死查表方案的正确性与可扩展性。
"""
import os
import sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "ingestion"))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import lunar_date as L

ok = fail = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1
        print("  [ok] %s" % name)
    else:
        fail += 1
        print("  [XX] %s" % name)


# 1) 已知重要日期的精确转换
r = L.era_to_gregorian("万历四十七年", 3, 1)
check("萨尔浒之战（万历四十七年三月初一）→ 1619-04-14", r["solar"] == "1619-04-14")

r = L.era_to_gregorian("万历四十七年", 3, 3)
check("萨尔浒·杜松覆没（三月三日）→ 1619-04-16", r["solar"] == "1619-04-16")

r = L.era_to_gregorian("万历二十一年", 1, 27)
check("碧蹄馆（正月二十七）→ 1593-02-27", r["solar"] == "1593-02-27")

r = L.era_to_gregorian("天命四年", 3, 1)
check("后金侧萨尔浒 → 1619-04-14（同年号不同）", r["solar"] == "1619-04-14")

# 2) 唐日期
r = L.era_to_gregorian("元和十二年", 10, 15)
check("雪夜入蔡州 → 0817-11-26", r["solar"] == "0817-11-26")

# 3) 缺月日 → 友好提示
r = L.era_to_gregorian("万历四十七年")
check("缺月日 → 提示需要参数", r["solar"] is None and "需要" in r.get("note", ""))

# 4) 未知日期 → gap
r = L.era_to_gregorian("万历元年", 1, 1)
check("查表无 → 返回 None + 提示", r["solar"] is None)

# 5) 表中有 label
r = L.era_to_gregorian("万历二十年", 4, 13)
check("日军登陆釜山 → 1592-05-23", r["solar"] == "1592-05-23")

print("\nlunar: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
