# -*- coding: utf-8 -*-
"""提取 spike 校验：证明 LLM 产出的断言四层 JSON 能接入管线。

职责：
  1. 结构化校验 extracted.json（必填字段、layer 合法）。
  2. 用 reign_era.normalize_year 把每条 time.era_text 归一化为公元年，
     证明「年号换算」正是 ingestion 接缝处缺失的那块——LLM 只给年号，
     管线负责把它变成公元尺。
  3. 把归一化结果写回 time.start，模拟 ingestion 对断言的补全。
  4. 汇总各 layer 条数（gap 即未来 leads 的雏形）。

退出码非零 = 有断言无法归一化（ingestion 缺口），应阻断提交。
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8")
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(HERE)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import reign_era as R

PATH = os.path.join(HERE, "extracted.json")
REQUIRED = ["id", "subject", "predicate", "layer", "time", "source", "confidence"]
LAYERS = {"record", "scholarship", "inference", "gap"}

OK, FAIL = 0, 0


def check(name, cond, detail=""):
    global OK, FAIL
    if cond:
        OK += 1
        print("  [ok] %s" % name)
    else:
        FAIL += 1
        print("  [XX] %s  %s" % (name, detail))


with open(PATH, encoding="utf-8") as f:
    data = json.load(f)

check("extracted.json 是数组且非空", isinstance(data, list) and len(data) > 0, "空数组")

by_layer = {}
for a in data:
    aid = a.get("id", "?")
    for fld in REQUIRED:
        check("%-6s 含字段 %s" % (aid, fld), fld in a, "缺失")
    lv = a.get("layer")
    check("%-6s layer 合法" % aid, lv in LAYERS, "layer=%r" % lv)
    by_layer[lv] = by_layer.get(lv, 0) + 1
    era = (a.get("time") or {}).get("era_text")
    g = R.normalize_year(era) if era else None
    if g is None:
        check("%-6s 年号可归一化 (%s)" % (aid, era), False, "normalize_year 返回 None")
    else:
        print("       %-6s %s -> 公元 %d" % (aid, era, g))
        a.setdefault("time", {})["start"] = "%d" % g

print("\n各 layer 条数:", by_layer)
print("extraction spike: %d ok, %d fail" % (OK, FAIL))
sys.exit(1 if FAIL else 0)
