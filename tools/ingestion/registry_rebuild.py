# -*- coding: utf-8 -*-
"""重建全局实体注册表 data/entities/global.json。

扫描所有场景的 persons.json + places.json，按名字去重，记录跨场景出现。
"""
import json, glob, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
SKIP = {"geo", "terrain", "vocab", "bibliography", "control"}

registry = {"persons": {}, "places": {}}

for scene_dir in sorted(glob.glob(os.path.join(ROOT, "data", "*"))):
    sid = os.path.basename(scene_dir)
    if not os.path.isdir(scene_dir) or sid in SKIP:
        continue
    for fname, key in [("persons.json", "persons"), ("places.json", "places")]:
        fp = os.path.join(scene_dir, fname)
        if not os.path.exists(fp):
            continue
        for ent in json.load(open(fp, encoding="utf-8")).get(key, []):
            pid = ent["id"]
            name = ent.get("name", "")
            if not name:
                continue
            reg = registry[key].setdefault(name, {"id": pid, "scenes": [], "aliases": []})
            if sid not in reg["scenes"]:
                reg["scenes"].append(sid)
            if pid != reg["id"] and pid not in reg["aliases"]:
                reg["aliases"].append(pid)

out = os.path.join(ROOT, "data", "entities", "global.json")
os.makedirs(os.path.dirname(out), exist_ok=True)
json.dump(registry, open(out, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
print("Global registry: %d persons, %d places" % (
    len(registry["persons"]), len(registry["places"])))
