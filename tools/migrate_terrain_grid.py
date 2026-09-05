#!/usr/bin/env python3
"""v0.104 · 地形网格迁移（手术式、零漂移）。
把主地点落在当前 terrain_grid bbox 外、但落在 china_coarse 内的场景改判为 china_coarse，
使其获得真实地形（零下载、零架构改动）。

不重写整个 JSON：用括号深度定位每个场景对象，仅替换其 terrain_grid 行的值，
保留原缩进 / 逗号 / key 顺序 / 注释 / _comment 等一切格式。可复跑（已迁移或主地点仍在
原网格内的场景不动）。
"""
import json, os, re

ROOT = os.getcwd()
SCENES = os.path.join(ROOT, "data", "scenes.json")
REG = os.path.join(ROOT, "data", "terrain", "registry.json")


def load(p):
    with open(p, encoding="utf-8") as f:
        return json.load(f)


scenes = load(SCENES)
reg = load(REG)["grids"]


def scene_places(sid):
    p = os.path.join(ROOT, "data", sid, "places.json")
    if not os.path.exists(p):
        return {}
    d = load(p)
    lst = d.get("places", d) if isinstance(d, dict) else d
    return {x.get("id"): x for x in lst if isinstance(x, dict)}


def inside(lon, lat, b):
    if not b or len(b) != 4 or None in b:
        return False
    return (b[0] <= lon <= b[2]) and (b[1] <= lat <= b[3])


coarse = reg["china_coarse"]
migrate = {}  # sid -> old_value
for sid, s in scenes["scenes"].items():
    tg = s.get("terrain_grid")
    if tg == "china_coarse":
        continue
    pid = s.get("primary_place")
    pl = scene_places(sid).get(pid) if pid else None
    if not pl:
        continue
    lon, lat = pl.get("lon"), pl.get("lat")
    if lon is None or lat is None:
        continue
    g = reg.get(tg)
    if inside(lon, lat, (g or {}).get("bbox")):
        continue  # 当前网格已覆盖，不动
    if inside(lon, lat, coarse.get("bbox")):
        migrate[sid] = tg


def brace_delta(ln):
    """字符串感知的括号净变化：忽略引号内的 { }（如注释/引文里的花括号）。"""
    d = 0
    in_str = False
    esc = False
    for ch in ln:
        if esc:
            esc = False
            continue
        if ch == "\\":
            esc = True
            continue
        if ch == '"':
            in_str = not in_str
            continue
        if not in_str:
            if ch == "{":
                d += 1
            elif ch == "}":
                d -= 1
    return d


# ── 手术式行替换（括号深度定位场景对象，仅改 terrain_grid 行的值）──
raw = open(SCENES, encoding="utf-8").read()
lines = raw.split("\n")
depths = []
d = 0
for ln in lines:
    depths.append(d)
    d += brace_delta(ln)
base = next(i for i, ln in enumerate(lines)
            if re.match(r'^\s*"scenes":\s*\{', ln))
scene_depth = depths[base] + 1
scene_starts = {}
for i, ln in enumerate(lines):
    if depths[i] == scene_depth:
        m = re.match(r'^\s*"([^"]+)":\s*\{', ln)
        if m and m.group(1) in migrate:
            scene_starts[m.group(1)] = i

n = 0
# 倒序处理：插入新行不会让已处理的更高行号场景索引错位
for sid, start in sorted(scene_starts.items(), key=lambda kv: kv[1], reverse=True):
    net = 0
    target = -1
    for k in range(start, len(lines)):
        net += brace_delta(lines[k])
        if '"terrain_grid"' in lines[k]:
            target = k
        if net == 0 and k > start:
            break
    if target >= 0:
        old = lines[target]
        lines[target] = re.sub(r'("terrain_grid":\s*)"[^"]*"',
                               r'\1"china_coarse"', lines[target])
        lines[target] = re.sub(r'("terrain_grid":\s*)null',
                               r'\1"china_coarse"', lines[target])
        if lines[target] != old:
            n += 1
            print("  %s: %s -> china_coarse" % (sid, migrate[sid]))
    else:
        # 字段缺失：在场景对象首行后插入（保留原缩进 + 1）
        indent = len(lines[start]) - len(lines[start].lstrip())
        lines.insert(start + 1, " " * (indent + 1) + '"terrain_grid": "china_coarse",')
        n += 1
        print("  %s: (缺失字段) 插入 terrain_grid=china_coarse" % sid)

open(SCENES, "w", encoding="utf-8").write("\n".join(lines))
print("MIGRATED=%d" % n)
