# -*- coding: utf-8 -*-
"""六维信息类别契约校验（E18：维度可不显示但不能没有）。

职责
----
1. 每条断言必须带 `dims` 字段：list，元素为 1..6 的整数，非空。
2. 每个场景 scenes.json 的 `dims` 必须等于该场景所有断言 dims 的**并集**（源驱动，
   与 assign_dims 启发式解耦；不一致即契约破损，需重跑 tag_dims / recompute）。
3. 退出码非零 = 契约失败（应在提交前阻断）。同时打印六维场景覆盖率，供人工审阅。

用法
----
  python tools/check_dims_contract.py
"""
import json
import os
import sys
import glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DIMS = [1, 2, 3, 4, 5, 6]
DIM_NAMES = {1: "地理", 2: "技术", 3: "制度", 4: "社会", 5: "思想", 6: "事件"}


def main():
    reg_path = os.path.join(ROOT, "data", "scenes.json")
    reg = json.load(open(reg_path, encoding="utf-8"))
    scenes = reg.get("scenes", {})

    errors = 0
    total_asserts = 0
    scene_cover = {d: 0 for d in DIMS}
    checked = 0

    for sid, sc in scenes.items():
        apath = os.path.join(ROOT, "data", sid, "assertions.jsonl")
        if not os.path.exists(apath):
            continue
        checked += 1
        union = set()
        with open(apath, encoding="utf-8") as f:
            for line in f:
                line = line.strip()
                if not line:
                    continue
                try:
                    a = json.loads(line)
                except Exception:
                    continue
                total_asserts += 1
                dims = a.get("dims")
                aid = a.get("id", "?")
                if not isinstance(dims, list) or not dims:
                    print("  [XX] %s/%s dims 缺失或为空" % (sid, aid))
                    errors += 1
                    continue
                bad = [d for d in dims if not isinstance(d, int) or not (1 <= d <= 6)]
                if bad:
                    print("  [XX] %s/%s dims 含非法值 %s" % (sid, aid, bad))
                    errors += 1
                    continue
                for d in dims:
                    if isinstance(d, int) and 1 <= d <= 6:
                        union.add(d)
        # 场景 dims 一致性
        expect = sorted(union)
        got = sc.get("dims")
        if got != expect:
            print("  [XX] %s 场景 dims 不一致：scenes.json=%s 断言并集=%s"
                  % (sid, got, expect))
            errors += 1
        for d in expect:
            scene_cover[d] += 1

    print("\n=== 六维信息类别契约 ===")
    print("校验场景：%d · 断言：%d" % (checked, total_asserts))
    print("\n六维场景覆盖率（源驱动并集，非启发式）：")
    for d in DIMS:
        n = scene_cover[d]
        pct = round(n / checked * 100) if checked else 0
        bar = "█" * (pct // 5) + "░" * (20 - pct // 5)
        print("  %d %s：%3d/%d  %s %d%%"
              % (d, DIM_NAMES[d], n, checked, bar, pct))

    if errors:
        print("\n[FAIL] 契约破损：%d 处错误" % errors)
        return 1
    print("\n[OK] 所有断言带合法 dims，且场景 dims = 断言并集一致。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
