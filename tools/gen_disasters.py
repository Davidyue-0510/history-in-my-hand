# -*- coding: utf-8 -*-
"""只重建 5 个明末灾难切片（不跑全量 seeder，避免 rmtree 误删其它场景的手补数据）。

调用 seed_civ_events.build_one 逐个生成：
  data/<scene>/{vocab,places,events,sources,persons,assertions.jsonl,impact}.json
impact.json 含 deaths / mortality / deaths_approx / mortality_approx 字段（v0.49+ 升级）。
"""
import os
import sys

TOOLS = os.path.dirname(os.path.abspath(__file__))
sys.path.insert(0, TOOLS)

import seed_civ_events as S  # noqa: E402  (仅导入，不触发 main())
from civ_events_expand import EXPAND  # noqa: E402

IDS = {"mingmo_jihuang", "chongzhen_han", "chongzhen_huangzai", "mingmo_shuyi", "kaifeng_juekou"}

found = 0
for d in EXPAND:
    if d["id"] in IDS:
        S.build_one(d)
        found += 1
        print("built:", d["id"], "(places=%d, impact=%d)"
              % (len(d.get("places", [])), len(d.get("impact", {}).get("impact", []))))

print("done: %d / %d 灾难切片已重建" % (found, len(IDS)))
