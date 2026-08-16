# -*- coding: utf-8 -*-
"""战—朝关联契约测试（v0.46 新增）。

守的是「战争 ↔ 朝堂」这条 join 链：

    engagements.json.sides[].commander  →  persons.json 的人  →  person.faction
                                                                    ↓
                                                        vocab.<pack>.factions

链子任一环断掉，前端 #warCourtPane 会**静默降级**：面板照样渲染、闸门照样全绿，
只是派系那一栏空着 or 直接把 id 当人名显示（v0.46 前就是这样——sarhu 的
kanghongli / liruibai 两个拼错 id 让朝鲜营与南路主将变成生 id 字符串）。
这正是本项目反复吃过的「空字段就是 bug」那一类：看得见的地方没报错，
看不见的地方数据是错的。

四条断言
--------
 I1  commander 必须可解析成人：id 命中 persons.json，或**汉文名**命中，
     或复合写法「阖闾/孙武」拆分后至少命中一个。
     豁免：集体单位（明守军/建文军/英远征军…）—— 见 COLLECTIVE 白名单。
 I2  person.faction 的取值必须在该场景语境包的 factions 里（否则前端
     FDEF[fid] 取不到，色点和名字都出不来）。
 I3  faction_colors 必须覆盖 factions 全部键（配色单一真值，v0.24c 教训）。
 I4  已标注 faction 的人物里，至少要有一位真的出现在某场 engagement 的
     commander 位（否则「战争↔朝堂」这条线在数据上根本没接通）。
     仅对 ming_qing 语境包的辽东系场景要求。
"""
import glob
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
try:
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
except Exception:
    pass

ok = fail = 0
warn = 0


def check(name, cond):
    global ok, fail
    if cond:
        ok += 1
        print("  [ok] %s" % name)
    else:
        fail += 1
        print("  [XX] %s" % name)


def note(msg):
    global warn
    warn += 1
    print("  [--] %s" % msg)


# 集体单位：本就不是个人，commander 位放的是部队/势力名，豁免 I1。
COLLECTIVE = {
    "明守军", "建文军", "英远征军", "商纣王", "陈后主", "阿布·穆斯林",
    "伊稚斜单于", "英宗/王振",
}


def load(p):
    with open(p, encoding="utf-8") as fh:
        return json.load(fh)


def scene_vocab(scene):
    """场景 → 语境包 factions / faction_colors（无则空）。"""
    reg = load(os.path.join(ROOT, "data", "scenes.json"))
    sc = (reg.get("scenes") or {}).get(scene) or {}
    # 多数场景不写 vocab_pack，靠注册表顶层 default_vocab_pack 兜底（sarhu 即如此）。
    # 早期版本漏了这个 fallback，导致 factions 恒空、I4 永远判不通过。
    pack = sc.get("vocab_pack") or reg.get("default_vocab_pack")
    if not pack:
        return {}, {}
    vp = os.path.join(ROOT, "data", "vocab", pack + ".json")
    if not os.path.exists(vp):
        return {}, {}
    v = load(vp)
    return (v.get("factions") or {}), (v.get("faction_colors") or {})


def resolve(raw, by_id, by_name):
    """复刻 county.js resolveCommanders 的三级解析，保持前后端同一语义。"""
    if not raw or raw == "-":
        return []
    if raw in by_id:
        return [by_id[raw]]
    if raw in by_name:
        return [by_name[raw]]
    out = []
    if "/" in raw:
        for seg in raw.split("/"):
            t = seg.strip()
            if not t:
                continue
            hit = by_id.get(t) or by_name.get(t)
            if hit:
                out.append(hit)
    return out


def main():
    print("战—朝关联契约 test")

    broken = []            # I1
    bad_faction = []       # I2
    linked_scenes = []     # I4 统计

    for ef in sorted(glob.glob(os.path.join(ROOT, "data", "*", "engagements.json"))):
        scene = os.path.basename(os.path.dirname(ef))
        pf = os.path.join(ROOT, "data", scene, "persons.json")
        if not os.path.exists(pf):
            note("%s 有 engagements 但无 persons.json" % scene)
            continue
        persons = (load(pf).get("persons") or [])
        by_id = {p["id"]: p for p in persons}
        by_name = {}
        for p in persons:
            if p.get("name") and p["name"] not in by_name:
                by_name[p["name"]] = p

        facs, fcols = scene_vocab(scene)

        # I2：faction 取值合法性
        for p in persons:
            fa = p.get("faction")
            if fa and facs and fa not in facs:
                bad_faction.append((scene, p["id"], fa))

        # I1：commander 可解析
        eng = load(ef).get("engagements") or []
        commander_pids = set()
        for e in eng:
            for s in (e.get("sides") or []):
                raw = s.get("commander")
                if not raw or raw == "-":
                    continue
                hits = resolve(raw, by_id, by_name)
                if hits:
                    for h in hits:
                        commander_pids.add(h["id"])
                elif raw not in COLLECTIVE:
                    broken.append((scene, e.get("id"), raw))

        # I4：该场景是否真的把「有派系的人」接到了 commander 位
        if facs:
            hit_fac = [pid for pid in commander_pids
                       if (by_id.get(pid) or {}).get("faction")]
            if hit_fac:
                linked_scenes.append(scene)

    check("I1 engagements.commander 全部可解析成人物（或属集体单位白名单）",
          not broken)
    if broken:
        for scene, eid, raw in broken[:20]:
            print("       %s / %s  commander=%r 解析不到" % (scene, eid, raw))
        if len(broken) > 20:
            print("       …共 %d 条" % len(broken))

    check("I2 person.faction 取值均在语境包 factions 内", not bad_faction)
    for scene, pid, fa in bad_faction[:12]:
        print("       %s / %s faction=%r 不在语境包" % (scene, pid, fa))

    # I3：配色单一真值
    i3_bad = []
    for vp in sorted(glob.glob(os.path.join(ROOT, "data", "vocab", "*.json"))):
        v = load(vp)
        facs = v.get("factions") or {}
        cols = v.get("faction_colors") or {}
        if not facs:
            continue
        missing = [k for k in facs if k not in cols]
        if missing:
            i3_bad.append((os.path.basename(vp), missing))
    check("I3 faction_colors 覆盖 factions 全部键", not i3_bad)
    for f, m in i3_bad:
        print("       %s 缺色：%s" % (f, m))

    check("I4 至少一个场景把「带派系的人物」接到 commander 位（战↔朝真的接通）",
          len(linked_scenes) > 0)
    if linked_scenes:
        print("       已接通场景：%s" % "、".join(linked_scenes))

    print("\n  ok=%d fail=%d warn=%d" % (ok, fail, warn))
    return 1 if fail else 0


if __name__ == "__main__":
    sys.exit(main())
