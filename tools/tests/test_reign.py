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
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "ingestion"))
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

# —— 全国尺度时序主干：新扩朝代年号 + dynasty_at ——
check("R13 贞观元年=627(唐)", R.normalize_year("贞观元年"), 627)
check("R14 开元元年=713(唐)", R.normalize_year("开元元年"), 713)
check("R15 宣和七年=1125(北宋末)", R.normalize_year("宣和七年"), 1125)
check("R16 靖康元年=1126(北宋亡)", R.normalize_year("靖康元年"), 1126)
check("R17 至正十一年=1351(元末)", R.normalize_year("至正十一年"), 1351)
check("R18 康熙二十三年=1684(清)", R.normalize_year("康熙二十三年"), 1684)
check("R19 乾隆五十八年=1793(清)", R.normalize_year("乾隆五十八年"), 1793)
check("R20 大业元年=605(隋)", R.normalize_year("大业元年"), 605)
check("R21 dynasty_at(1644) 含 明/清（后金 1636 已改清）", set(R.dynasty_at(1644)), {"明", "清"})
check("R22 dynasty_at(755) 含 唐", "唐" in R.dynasty_at(755), True)
check("R23 dynasty_at(1271) 含 元", "元" in R.dynasty_at(1271), True)
check("R24 dynasty_at(1000) 含 北宋", "北宋" in R.dynasty_at(1000), True)

# —— LLM 抽取年份可能随机输出繁体年号，归一化须容错（ERAS 以简化年号为单一真值）——
check("R25 天啟六年正月(繁体)->1626", R.normalize_year("天啟六年正月"), 1626)
check("R26 萬曆四十七年(繁体)->1619", R.normalize_year("萬曆四十七年"), 1619)
check("R27 崇禎十七年(繁体)->1644", R.normalize_year("崇禎十七年"), 1644)
check("R28 順治元年(繁体)->1644", R.normalize_year("順治元年"), 1644)
check("R29 天啟元年三月(繁体)->1621", R.normalize_year("天啟元年三月"), 1621)
# R30-R32 年号级模糊表述「年号+间/年间」：史料未精确到第几年时的兜底，
# 取该年号起始公元年作为默认落点（v0.x 新增，配合 LLM 抽取 era-level 年份）
check("R30 天启年间->1621(年号起始)", R.normalize_year("天启年间"), 1621)
check("R31 万历年间->1573(年号起始)", R.normalize_year("万历年间"), 1573)
check("R32 天啟年間(繁体)->1621", R.normalize_year("天啟年間"), 1621)

print("\nreign_era: %d ok, %d fail" % (OK, FAIL))
sys.exit(1 if FAIL else 0)
