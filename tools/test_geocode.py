# -*- coding: utf-8 -*-
"""geocoder 契约测试：历史地名 -> 坐标。

锁定「任意史料导入」最关键的落点能力：
  - 精确匹配（含别名）
  - 去通名后缀（蔡州城 -> 蔡州）
  - 子串兜底（汝南旧城 -> 汝南 -> 蔡州）
  - 未知 -> None（诚实，不伪造坐标）
  - 批量落点：命中填 lon/lat，未命中置 null 并记为 gap
"""
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import geocode as G

ok = fail = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1
        print("  [ok] %s" % name)
    else:
        fail += 1
        print("  [XX] %s" % name)


# 1) 地名表可加载
gaz = G.load_gazetteer()
check("地名表非空", len(gaz) > 0)
check("含蔡州", "蔡州" in gaz)

# 2) 精确匹配
r = G.geocode("蔡州")
check("蔡州 精确命中", r and abs(r["lon"] - 114.35) < 0.5 and abs(r["lat"] - 33.53) < 0.5)

# 3) 别名命中
r = G.geocode("汝南")
check("汝南(别名) 命中蔡州", r and abs(r["lon"] - 114.35) < 0.5)

# 4) 去通名后缀
r = G.geocode("蔡州城")
check("蔡州城 去后缀命中", r and r.get("matched_by") == "strip_suffix")

# 5) 子串兜底
r = G.geocode("汝南旧城")
check("汝南旧城 子串兜底命中", r and abs(r["lon"] - 114.35) < 0.5 and r.get("matched_by") == "substring")

# 6) 未知 -> None
check("未知地名返回 None", G.geocode("火星基地") is None)

# 7) 批量落点
places = [
    {"name": "蔡州"}, {"name": "长安"}, {"name": "不存在的城"},
]
resolved, gaps = G.geocode_places(places)
check("批量命中 2", len(resolved) == 2)
check("批量缺口 1", len(gaps) == 1)
check("未命中置 null 并标 unresolved",
      places[2]["lon"] is None and places[2]["lat"] is None and places[2].get("geo_unresolved") is True)
check("命中者已填坐标", places[0]["lon"] == 114.35 and places[1]["lat"] == 34.27)

print("\ngeocode: %d ok, %d fail" % (ok, fail))
sys.exit(1 if fail else 0)
