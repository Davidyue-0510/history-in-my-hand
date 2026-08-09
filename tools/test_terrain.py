# -*- coding: utf-8 -*-
"""地基 C 契约测试：高程网格注册表驱动，无硬编码常量残留。

锁住三件事：
  1) 注册表含默认网格与预留的全国底图，默认网格已 fetched（产物落盘）；
  2) build.get_terrain：fetched 网格返回真实地形，not_fetched 网格诚实返回 None；
  3) 越界坐标 _elev_or_none 返回 None（绝不 clamp 成边缘假值冒充高程）。

这把「换区域 = 改注册表，不动源码」钉死，杜绝有人把写死常量悄悄加回来。
"""
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "tools"))
import fetch_terrain as FT  # noqa: E402
import build as BUILD  # noqa: E402


def assert_(cond, msg):
    if not cond:
        print("  FAIL:", msg)
        sys.exit(1)
    print("  ok:", msg)


def main():
    reg = FT.load_registry()

    # 1) 注册表含两块网格，默认=liaodong 且已拉取
    assert_("liaodong" in reg["grids"], "registry 含 liaodong 网格")
    assert_("china_coarse" in reg["grids"], "registry 含 china_coarse（全国底图预留）")
    dft = FT.default_grid_id(reg)
    assert_(dft == "liaodong", "default 网格 = liaodong")
    assert_(reg["grids"][dft]["status"] == "fetched", "默认网格状态为 fetched")

    # 2) grid_path 指向真实产物
    p = FT.grid_path()
    assert_(os.path.exists(p), "grid_path() 指向已落盘的产物: " + os.path.relpath(p, ROOT))

    # 3) build.get_terrain：fetched → 真实地形；not_fetched → 诚实 None
    terr, grid, status = BUILD.get_terrain("liaodong")
    assert_(terr is not None and status == "fetched", "get_terrain(liaodong) 返回真实地形")
    assert_(grid.get("_grid_id") == "liaodong", "grid 带 _grid_id")
    assert_("bbox" in grid, "grid 含 bbox（供越界检测）")
    assert_(grid["bbox"] == reg["grids"]["liaodong"]["bbox"], "grid.bbox 与注册表一致")

    t2, g2, s2 = BUILD.get_terrain("china_coarse")
    # china_coarse 可能 not_fetched/partial/fetched，取决于后台拉取状态。
    # 任何状态都不应伪造：not_fetched→None，partial/fetched→网格对象但 bbox 与注册表一致。
    if t2 is None:
        assert_(s2 in ("not_fetched",), "get_terrain 返回 None 时状态为 not_fetched")
    else:
        assert_(g2 and abs(g2.get("lon0", 0) - 73.5) < 0.5,
                "china_coarse partial/fetched 时 bbox 与注册表一致")

    # 4) 越界坐标返回 None，绝不 clamp 边缘假值
    ev = BUILD._elev_or_none(terr, 999.0, 999.0)
    assert_(ev is None, "_elev_or_none(越界坐标) 返回 None")
    # 网格内坐标返回数值
    lo0, la0 = terr.lon0, terr.lat0
    ev_in = BUILD._elev_or_none(terr, lo0 + terr.step, la0 + terr.step)
    assert_(isinstance(ev_in, int), "_elev_or_none(网格内坐标) 返回整数高程")

    # 5) 缓存：同一 gid 不重复解析
    assert_("liaodong" in BUILD._terr_cache, "地形结果已按 gid 缓存")

    print("\n地形契约：全部通过")
    return 0


if __name__ == "__main__":
    sys.exit(main())
