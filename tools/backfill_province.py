#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""v0.109 · 回刷 province：为存量场景补 province 地理字段（北极星①「全地域」可度量前置）。

根因：scenes.json 的 `region` 混用「地理单元 + 朝代桶 + 主题桶」，导致「全地域覆盖」
无法干净度量。本脚本按 province_map.REGION_TO_PROVINCE 把 region → province 派生出来，
单独成字段，使「中国 34 省级覆盖」可定量统计。

规则（与 backfill_dim_source.py 一致，幂等、零漂移）：
  - 场景已带合法 province → 跳过（尊重手工设定，幂等）。
  - 场景 province 非法 → 用派生值覆盖（修正）。
  - 场景无 province → 按 region 派生填入。
  - 仅新增/修正 province 字段，不动其余字段（json.dump(indent=1) 已验证对 scenes.json 无损）。
"""
import json
import os
import sys

sys.path.insert(0, os.path.join(os.getcwd(), "tools", "ingestion"))
from province_map import (derive_province, is_legal_province,
                          provinces_touched, PROVINCE_CODES, PROVINCE_OVERRIDES)

REG_PATH = os.path.join(os.getcwd(), "data", "scenes.json")


def main():
    reg = json.load(open(REG_PATH, encoding="utf-8"))
    scenes = reg.get("scenes", {})

    # 1) 文档化：_field_notes 补 province 字段说明（幂等）
    fn = reg.setdefault("_field_notes", {})
    if "province" not in fn:
        fn["province"] = (
            "地理省份（现代中国 34 省级行政区码），从 region 的「地理+主题桶」混用里拆出，"
            "专供「全地域覆盖」度量。取值：省份码字符串 / 省份码列表 / null（主题·朝代桶不绑省份）"
            "/ \"fiction\"（虚构世界）/ \"overseas\"（外国战区·海域）。合法码见 tools/ingestion/province_map.py。"
        )

    n_set = 0       # 本次新填（此前缺 province）
    n_fixed = 0     # 本次修正非法 / 被 override 改写
    n_kept = 0      # 已合法且等于目标值，跳过（幂等）
    n_override = 0  # 其中由 PROVINCE_OVERRIDES 显式写省份
    for sid, sm in scenes.items():
        if not isinstance(sm, dict):
            continue
        override = PROVINCE_OVERRIDES.get(sid)
        target = override if override is not None else derive_province(sm.get("region"), None)
        cur = sm.get("province", "__ABSENT__")
        if cur != "__ABSENT__" and is_legal_province(cur) and cur == target:
            n_kept += 1
            continue
        if override is not None:
            n_override += 1
        if cur != "__ABSENT__" and is_legal_province(cur):
            n_fixed += 1
        else:
            n_set += 1
        sm["province"] = target

    with open(REG_PATH, "w", encoding="utf-8", newline="") as f:
        json.dump(reg, f, ensure_ascii=False, indent=1)
        f.write("\n")

    # 覆盖报告
    touched = provinces_touched(sm.get("province") for sm in scenes.values())
    print("BACKFILL_PROVINCE: 新填=%d  override写=%d  修正=%d  已合法跳过=%d  总场景=%d"
          % (n_set, n_override, n_fixed, n_kept, len(scenes)))
    print("PROVINCE_TOUCHED=%d/%d  -> %s"
          % (len(touched), len(PROVINCE_CODES),
             ",".join(sorted(touched)) or "(空)"))


if __name__ == "__main__":
    main()
