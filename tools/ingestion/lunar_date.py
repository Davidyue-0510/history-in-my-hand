# -*- coding: utf-8 -*-
"""农历/年号月日 → 公元日期转换。

设计（诚实优先，契合本项目「缺口是一等公民 / 可核查」原则）：
- `data/lunar_calendar.json` 为「已核验种子表」真值覆盖层：每条均经《两千年中西历对照表》
  及香港天文台历表交叉核验，命中即返回，保证已知日期 100% 正确。
- 未直接命中时：先由 reign_era 把「年号+年」解析为公元年，再在表中按 (公元年, 月, 日)
  二次匹配（同年号年可能以不同年号/写法登记）；仍不中则诚实返回缺口，绝不臆造日期。
- 通用天文算法（覆盖任意历史年代）为后续增强；当前不内置 —— 以避免「自信的错误日期」
  违背可核查原则（宁可标缺口，不产假精确）。

用法:
    python tools/ingestion/lunar_date.py --era 万历四十七年 --month 3 --day 1
    python tools/ingestion/lunar_date.py --era 天命四年 --month 3 --day 3
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
TB_PATH = os.path.join(ROOT, "data", "lunar_calendar.json")
sys.path.insert(0, HERE)
from reign_era import normalize_year  # noqa: E402


def _load_table():
    if not os.path.exists(TB_PATH):
        return {}
    with open(TB_PATH, encoding="utf-8") as f:
        return json.load(f)


def era_to_gregorian(era_text, month=None, day=None):
    """年号月日 → 公元日期。

    返回 {"solar": "YYYY-MM-DD", "label": "...", "source": "lookup"|"lookup-by-year"}
    或 {"solar": None, "note": "..."}（诚实缺口）。
    """
    tbl = _load_table()
    entries = tbl.get("entries", [])

    # 1) 精确匹配：年号 + 月 + 日
    for e in entries:
        if e["era"] == era_text and e.get("month") == month and e.get("day") == day:
            return {"solar": e["solar"], "label": e.get("label", ""), "source": "lookup"}

    # 2) 解析公元年，按 (year, month, day) 二次匹配
    yr = None
    try:
        yr = normalize_year(era_text)
    except Exception:
        yr = None
    if yr is not None and month is not None and day is not None:
        y4 = "%04d" % yr
        for e in entries:
            if e["solar"][:4] == y4 and e.get("month") == month and e.get("day") == day:
                return {"solar": e["solar"], "label": e.get("label", ""),
                        "source": "lookup-by-year"}

    if month is None or day is None:
        return {"solar": None,
                "note": "需要月/日参数才能查表（年号→年已解析为 %s，仍缺月日）" % (yr if yr else "未知")}
    return {"solar": None,
            "note": "年号 %s %d月%d日 不在核验表内（可手动添加一行到 data/lunar_calendar.json）"
                    % (era_text, month, day)}


def main():
    ap = argparse.ArgumentParser(description="农历/年号月日 → 公元日期（核验表 + 年号解析）")
    ap.add_argument("--era", help="年号文本，如 '万历四十七年'")
    ap.add_argument("--month", type=int, help="农历月份")
    ap.add_argument("--day", type=int, help="农历日")
    args = ap.parse_args()

    if not args.era:
        print("[FAIL] 需要 --era")
        return 2

    r = era_to_gregorian(args.era, args.month, args.day)
    if r["solar"]:
        print("公元 %s  (来源: %s)" % (r["solar"], r.get("source")))
        if r.get("label"):
            print("  事件: %s" % r["label"])
    else:
        print("[GAP] %s" % r.get("note", "未命中"))
    return 0 if r["solar"] else 1


if __name__ == "__main__":
    sys.exit(main())
