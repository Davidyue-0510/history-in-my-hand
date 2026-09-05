#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v0.109 · 闸门33：province 字段合法性 + 中国全地域覆盖报告。

职责（fail-fast 一门，但只拦「非法值」，不拦「覆盖低」）：
  - 校验 scenes.json 每个场景的 province 字段取值合法：
      null（主题/朝代桶不绑省份）| "fiction" | "overseas" | 省份码 | 省份码列表。
    非法 → 打印 [XX] 并 exit 1（脏数据进提交前拦住）。
  - 合法则打印覆盖报告并 exit 0：
      中国 34 省级行政区覆盖 = 去重省份码 / 34；
      各省份场景数；fiction / overseas / null(主题桶) 分布。
  注意：覆盖低（当前 ≈12%）是诚实的研究吞吐缺口，不是 bug，故不阻断 gates；
  本闸门只保证「字段存在且合法」，让「全地域」可被持续度量。

单一真值：tools/ingestion/province_map.py（PROVINCE_CODES / SENTINELS / is_legal_province）。
"""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "tools", "ingestion"))
from province_map import (is_legal_province, provinces_touched,
                          PROVINCE_CODES, PROVINCE_NAMES, SENTINELS)

sys.stdout.reconfigure(encoding="utf-8", errors="replace")

REG_PATH = os.path.join(os.getcwd(), "data", "scenes.json")


def main():
    reg = json.load(open(REG_PATH, encoding="utf-8"))
    scenes = reg.get("scenes", {})
    if not scenes:
        print("[XX] scenes.json 无场景")
        return 1

    illegal = []
    for sid, sm in sorted(scenes.items()):
        if not isinstance(sm, dict):
            illegal.append((sid, "(非对象)"))
            continue
        p = sm.get("province", "__ABSENT__")
        if p == "__ABSENT__":
            illegal.append((sid, "(缺 province 字段)"))
        elif not is_legal_province(p):
            illegal.append((sid, repr(p)))

    if illegal:
        print("[XX] %d 个场景 province 字段非法：" % len(illegal))
        for sid, why in illegal[:40]:
            print("       %-30s %s" % (sid, why))
        return 1

    # ── 覆盖报告 ──
    touched = provinces_touched(sm.get("province") for sm in scenes.values())
    per = {}
    for sm in scenes.values():
        p = sm.get("province")
        if isinstance(p, str) and p in PROVINCE_CODES:
            per[p] = per.get(p, 0) + 1
        elif isinstance(p, list):
            for x in p:
                per[x] = per.get(x, 0) + 1

    n_fiction = sum(1 for sm in scenes.values() if sm.get("province") == "fiction")
    n_overseas = sum(1 for sm in scenes.values() if sm.get("province") == "overseas")
    n_theme = sum(1 for sm in scenes.values()
                  if sm.get("province") is None)

    print("[OK] province 字段全部合法（%d 场景）" % len(scenes))
    print("中国 34 省级覆盖: %d/34 (%.1f%%)"
          % (len(touched), len(touched) * 100.0 / len(PROVINCE_CODES)))
    print("  -- 已覆盖省份（码=场景数）--")
    for code in sorted(touched):
        print("     %-14s %-6s x%d" % (code, PROVINCE_NAMES.get(code, "?"), per.get(code, 0)))
    print("  -- 未覆盖省份（%d）--" % (len(PROVINCE_CODES) - len(touched)))
    for code in PROVINCE_CODES:
        if code not in touched:
            print("     %-14s %s" % (code, PROVINCE_NAMES.get(code, "?")))
    print("  -- 非省份取值 --")
    print("     主题/朝代桶(null) : %d" % n_theme)
    print("     fiction(虚构世界)  : %d" % n_fiction)
    print("     overseas(外国战区) : %d" % n_overseas)
    return 0


if __name__ == "__main__":
    sys.exit(main())
