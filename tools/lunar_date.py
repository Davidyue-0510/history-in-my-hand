# -*- coding: utf-8 -*-
"""农历/年号月日 → 公元日期转换小插件。

「时序同一把公元尺」之前只落到「年」粒度，大量史料有月日。
本插件补齐最后一步：年号月日 → 公元年月日。

数据源：`data/lunar_calendar.json`（《两千年中西历对照表》手动核验后的查表方案）。
lunardate 库范围仅 1900-2100，不适用明清唐代——故用精选查表法，新增一行即加一个日期，
API 不变，未来可替换为全量表或天文算法后端。

用法:
    python tools/lunar_date.py --era 万历四十七年 --month 3 --day 1
    python tools/lunar_date.py --era 万历四十七年 --month 3  --day 3
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
TB_PATH = os.path.join(ROOT, "data", "lunar_calendar.json")

_WARNED = False  # 无数据时只警告一次（不骚扰每个查询）


def _load_table():
    if not os.path.exists(TB_PATH):
        return {}
    with open(TB_PATH, encoding="utf-8") as f:
        return json.load(f)


def era_to_gregorian(era_text, month=None, day=None):
    """年号月日 → 公元日期字符串 (YYYY-MM-DD)。

    返回 {"solar": "YYYY-MM-DD", "label": "...", "source": "lookup"} 或
    若未命中则返回 {"solar": None, "note": "不在查表范围内"}。
    月/日缺省时只返回年（查表也行，但月日缺省时不精确）。
    """
    tbl = _load_table()
    entries = tbl.get("entries", [])
    # 精确匹配 年号+月+日
    for e in entries:
        if e["era"] == era_text and e.get("month") == month and e.get("day") == day:
            return {"solar": e["solar"], "label": e.get("label", ""), "source": "lookup"}
    # 月日缺省时只查年号级别（返回 None 提示需要月日）
    if month is None or day is None:
        return {"solar": None, "note": "需要月/日参数才能查表"}
    return {"solar": None, "note": "年号 %s %d月%d日 不在查表范围内（可手动添加一行到 data/lunar_calendar.json）" % (era_text, month, day)}


def main():
    ap = argparse.ArgumentParser(description="农历/年号月日 → 公元日期（查表）")
    ap.add_argument("--era", help="年号文本，如 '万历四十七年'")
    ap.add_argument("--month", type=int, help="农历月份")
    ap.add_argument("--day", type=int, help="农历日")
    args = ap.parse_args()

    if not args.era:
        print("[FAIL] 需要 --era")
        return 2

    r = era_to_gregorian(args.era, args.month, args.day)
    if r["solar"]:
        print("公元 %s" % r["solar"])
        if r.get("label"):
            print("  事件: %s" % r["label"])
    else:
        print("[GAP] %s" % r.get("note", "未命中"))
    return 0 if r["solar"] else 1


if __name__ == "__main__":
    sys.exit(main())
