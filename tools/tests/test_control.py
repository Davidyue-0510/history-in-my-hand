# -*- coding: utf-8 -*-
"""实际控制层契约测试（v0.24 场景化修复的守门）。

锁死「控制层单例被新切片污染」的修复语义：
  1. 全局 SD.control_seats 只含 control 数据覆盖的 place_id —— 新切片
     （唐/壬辰）的 primary_place 不得混进辽东 Voronoi 网格（曾致 caizhou/
     pyongyang 成空洞、辽东色块错位）。
  2. 场景级注入三分法：
       data/<dir>/control.json 存在        → bundle.control/control_seats/control_years
       无文件且 region∈辽东体系（liaoxi…）  → 不注入（前端 fallback 全局，v0.10 行为不变）
       无文件且 region∉辽东体系            → control=[]（显式无，前端隐藏面板）
  3. 场景 control_years 用场景窗口（如壬辰 [1592,1598]），不被全局 clamp 到 1616-1644。
  4. 场景 control 里的 place_id 必须在该场景 places.json 里（否则几何缺失留白）。
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
sys.stdout.reconfigure(encoding="utf-8", errors="replace")

ok = fail = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1
        print("  [ok] %s" % name)
    else:
        fail += 1
        print("  [XX] %s" % name)


def _strip_slice(text):
    body = "\n".join(l for l in text.splitlines() if not l.strip().startswith("//"))
    m = re.search(r'window\.SANDBOX_SLICES\["(.+?)"\] = (\{.*\})\s*;', body, re.DOTALL)
    if not m:
        raise RuntimeError("切片格式不符")
    return m.group(1), json.loads(m.group(2))


def get_slice(key):
    p = os.path.join(ROOT, "demo", "slices", key + ".js")
    with open(p, encoding="utf-8") as f:
        return _strip_slice(f.read())[1]


def main():
    # 0) 读壳
    with open(os.path.join(ROOT, "demo", "data.js"), encoding="utf-8") as f:
        t = f.read()
    m = re.search(r"window\.SANDBOX_DATA = (\{.*?\});\n\nwindow\.SANDBOX_SLICES", t, re.DOTALL)
    sd = json.loads(m.group(1))
    ctrl_places = {c.get("place_id") for c in sd.get("control", [])}
    seats = [s["place_id"] for s in sd.get("control_seats", [])]

    # 1) 全局治所 = 控制权数据覆盖的 place，无新切片污染
    check("全局 control_seats 非空（辽东 13 治所）", len(seats) >= 13)
    check("全局 seats ⊆ control 数据 place_id", set(seats) <= ctrl_places)
    check("caizhou 未混入全局控制层", "caizhou" not in seats)
    check("pyongyang 未混入全局控制层", "pyongyang" not in seats)

    # 2) 场景级三分法
    im = get_slice("imjin")
    check("imjin 自带 control（22 条）", isinstance(im.get("control"), list) and len(im["control"]) >= 20)
    im_seats = [s["place_id"] for s in im.get("control_seats", [])]
    check("imjin control_seats 非空（8 治所）", len(im_seats) >= 8)
    check("imjin 治所几何齐全（lon/lat 非 None）",
          all(s.get("lon") is not None and s.get("lat") is not None for s in im.get("control_seats", [])))
    check("imjin 场景窗口 [1592,1598]（不被 clamp 到 1616）",
          im.get("control_years") == [1592, 1598])
    im_places = {p["id"] for p in im.get("places", [])}
    check("imjin control 的 place_id ⊆ 场景 places",
          {c.get("place_id") for c in im["control"]} <= im_places)

    ta = get_slice("tang_huai_xi")
    check("tang 显式 control=[]（前端隐藏控制层）", ta.get("control") == [])

    gu = get_slice("guangning")
    check("guangning（辽东体系）不注入 control → fallback 全局", "control" not in gu)

    print("\ncontrol 契约: %d ok, %d fail" % (ok, fail))
    sys.exit(1 if fail else 0)


if __name__ == "__main__":
    main()
