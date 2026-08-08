# -*- coding: utf-8 -*-
"""年号换算单元测试（pytest-free，纯断言，进 gates 常驻闸门）。

验证封闭集合换算的硬不变量：
  R1  万历四十七年 = 1619           (萨尔浒之战，明方纪年)
  R2  天命三年     = 1618           (抚顺之陷次年)
  R3  天命四年     = 1619           (萨尔浒之战，后金纪年，与 R1 同年)
  R4  崇祯十七年   = 1644           (明亡)
  R5  顺治元年     = 1644           (清入关，与 R4 同年无歧义)
  R6  泰昌元年     = 1620
  R7  洪武元年     = 1368
  R8  纯数字原样返回
  R9  带月份字符串取年号对应公元年（月日忽略）
  R10 带干支括号正常解析
  R11 复合表述取首段年号
  R12 越界 / 未知年号 / 非法年份 -> 抛异常（不静默返回错误值）

用法：
    python tools/test_reign.py
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import reign_era as R

OK, FAIL = 0, 0


def check(name, got, exp):
    global OK, FAIL
    if got == exp:
        OK += 1
        print("  [ok] %s  (%r -> %r)" % (name, exp, got))
    else:
        FAIL += 1
        print("  [XX] %s  expected %r got %r" % (name, exp, got))


def check_raises(name, fn):
    global OK, FAIL
    try:
        fn()
        FAIL += 1
        print("  [XX] %s  expected exception, none raised" % name)
    except Exception:
        OK += 1
        print("  [ok] %s  (raises as expected)" % name)


check("R1 万历四十七年", R.normalize_year("万历四十七年"), 1619)
check("R2 天命三年", R.normalize_year("天命三年"), 1618)
check("R3 天命四年", R.normalize_year("天命四年"), 1619)
check("R4 崇祯十七年", R.normalize_year("崇祯十七年"), 1644)
check("R5 顺治元年", R.normalize_year("顺治元年"), 1644)
check("R6 泰昌元年", R.normalize_year("泰昌元年"), 1620)
check("R7 洪武元年", R.normalize_year("洪武元年"), 1368)
check("R8 纯数字 1619", R.normalize_year("1619"), 1619)
check("R9 带月份 天命四年二月廿九", R.normalize_year("天命四年二月廿九"), 1619)
check("R10 带干支 天命四年（己未）", R.normalize_year("天命四年（己未）"), 1619)
check("R11 复合 万历四十七年即天命四年", R.normalize_year("万历四十七年即天命四年"), 1619)

check_raises("R12a 万历四十九年越界", lambda: R.to_gregorian("万历", 49))
check_raises("R12b 未知年号", lambda: R.to_gregorian("不存在", 1))
check_raises("R12c 非法年份字符", lambda: R.to_gregorian("万历", "甲"))

print("\nreign_era: %d ok, %d fail" % (OK, FAIL))
sys.exit(1 if FAIL else 0)
