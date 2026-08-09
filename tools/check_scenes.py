# -*- coding: utf-8 -*-
"""场景注册表一致性校验 —— 填补 lint 没专门覆盖的「跨文件引用 + 注册表↔文件系统」类静默 bug。

lint 守的是单文件内字段格式；本工具守的是「引用存在性」与「注册表诚实度」：
  * scenes.json 的 order / scenes 是否自洽
  * 注册的场景是否有 data/<dir>/ 目录与六件套（sources/assertions 必具，events/places 推荐）
  * 断言引用的 source id 是否真的在该场景 sources.json 里（孤儿源 → 静默不计入共振）
  * 断言 subject 为 event:<id> 时，裸 id 是否在该场景 events.json 里（事件孤儿 → 该断言在事件层不可见，lesson #14）
  * 断言带 place 时，place id 是否在该场景 places.json 里
  * 断言来源若带 faction，faction id 是否在该场景语境包的 factions（lesson #13 派系 id 拼错静默归错组）
  * 场景声明的 vocab_pack / terrain_grid 是否真的存在（声明了不存在的包 = 构建时静默回退）
  * 存在 data/<dir>/ 但不在注册表里的孤儿目录（忘记注册即上线）

退出码：0 = 无 ERROR（WARNING 也算过，但会打印）；1 = 有 ERROR。
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import vocab_loader as VL  # noqa: E402


def _load(p):
    try:
        with open(p, encoding="utf-8") as f:
            return json.load(f)
    except Exception:
        return None


def main():
    errors, warns = [], []
    reg = _load(os.path.join(DATA, "scenes.json"))
    if not reg:
        print("[ERROR] 无法读取 data/scenes.json")
        return 1
    scenes = reg.get("scenes", {})
    order = reg.get("order", [])

    # 1) order vs scenes 自洽
    for k in order:
        if k not in scenes:
            errors.append("scenes.json order 含 %r 但 scenes 字典无此条目" % k)
    for k in scenes:
        if k not in order:
            warns.append("场景 %r 在 scenes 字典但不在 order（不影响构建，但枢纽顺序缺失）" % k)

    # 2) 注册表 → 文件系统
    # v0.22：faction 受控词表不再是全局单例，按各场景自己的语境包判。
    # 同一个 faction id 在明清包里合法，在唐代包里就该报错——这正是分包的意义。
    def _factions_of(sid, sc):
        try:
            _pid, _v = VL.resolve_for_scene(sid, sc)
            return set((_v.get("factions") or {}).keys()), _pid
        except Exception as e:
            errors.append("场景 %r 的语境包加载失败：%s" % (sid, e))
            return set(), "?"

    for sid, sc in scenes.items():
        d = os.path.join(DATA, sc.get("dir", sid))
        if not os.path.isdir(d):
            errors.append("场景 %r 注册了但 data/%s/ 目录不存在" % (sid, sc.get("dir", sid)))
            continue
        scene_factions, scene_pack = _factions_of(sid, sc)
        # 声明了却不存在的语境包 = 构建时静默回退到默认包，数据看着正常、分桶全错
        declared = sc.get("vocab_pack")
        if declared and declared not in VL.list_packs():
            errors.append("场景 %r 声明 vocab_pack=%r，但 data/vocab/%s.json 不存在（会静默回退默认包）"
                          % (sid, declared, declared))
        src = _load(os.path.join(d, "sources.json")) or {}
        src_ids = {s.get("id") for s in src.get("sources", [])}
        ev = _load(os.path.join(d, "events.json")) or {}
        # 事件命名空间由 subject（event:<id>）承载，而非 events.json 的 id 字段
        # （id 是 ev_xxx，subject 才是断言 subject 对应的 event:xxx）。比对必须用 subject。
        ev_ids = {e.get("subject", "").split(":", 1)[1]
                  for e in ev.get("events", [])
                  if isinstance(e.get("subject"), str) and e["subject"].startswith("event:")}
        pl = _load(os.path.join(d, "places.json")) or {}
        pl_ids = {p.get("id") for p in pl.get("places", [])}

        if not os.path.exists(os.path.join(d, "assertions.jsonl")):
            warns.append("场景 %r 无 assertions.jsonl（空切片）" % sid)
            continue

        # 抽象/虚构世界判定：places 中没有任何带真实经纬度坐标者（与前端 IS_ABSTRACT 一致）。
        # 这类 world 走关系图、不渲染事件时间轴，断言用 event:<剧情相位> 标签分组，
        # 不强求其出现在 events.json——故跳过 event 主题↔events.json 的强校验。
        is_abstract = not any(
            isinstance(p.get("lon"), (int, float)) or isinstance(p.get("lat"), (int, float))
            for p in pl.get("places", [])
        )
        if is_abstract:
            warns.append("场景 %r 为抽象/虚构世界（无真实坐标），跳过 event 主题↔events.json 强校验" % sid)

        with open(os.path.join(d, "assertions.jsonl"), encoding="utf-8") as f:
            for ln in f:
                ln = ln.strip()
                if not ln or ln.startswith("//"):
                    continue
                try:
                    a = json.loads(ln)
                except json.JSONDecodeError:
                    errors.append("场景 %r 断言 JSON 解析失败: %s" % (sid, ln[:40]))
                    continue
                aid = a.get("id", "?")
                # 源孤儿
                if a.get("source") not in src_ids:
                    errors.append("场景 %r 断言 %r 引用源 %r 不在 sources.json（该断言将静默不计入共振）"
                                  % (sid, aid, a.get("source")))
                # 事件孤儿（仅对真实地理场景强制；抽象世界见上）
                subj = a.get("subject", "")
                if subj.startswith("event:") and not is_abstract:
                    bare = subj.split(":", 1)[1]
                    if bare not in ev_ids:
                        errors.append("场景 %r 断言 %r 的 event 主题 %r 不在 events.json（事件层不可见）"
                                      % (sid, aid, bare))
                # 地点孤儿
                if a.get("place") and a["place"] not in pl_ids:
                    errors.append("场景 %r 断言 %r 引用地点 %r 不在 places.json" % (sid, aid, a["place"]))
                # 派系 id 合法
                # faction 来自 source，这里复核 source 的 faction 是否合法
                sdef = next((s for s in src.get("sources", []) if s.get("id") == a.get("source")), None)
                if sdef and sdef.get("faction") and sdef["faction"] not in scene_factions:
                    errors.append("场景 %r 源 %r 的 faction %r 不在语境包 %s 的 factions（静默归错组）"
                                  % (sid, a.get("source"), sdef["faction"], scene_pack))

    # 3) 文件系统 → 注册表（孤儿目录）
    for name in os.listdir(DATA):
        dp = os.path.join(DATA, name)
        if not os.path.isdir(dp) or name.startswith("."):
            continue
        if name not in scenes and os.path.exists(os.path.join(dp, "assertions.jsonl")):
            warns.append("data/%s/ 含断言但不在 scenes.json 注册表（孤儿切片，枢纽不可见）" % name)

    # 输出
    for w in warns:
        print("[WARN] %s" % w)
    for e in errors:
        print("[ERROR] %s" % e)
    print("\n场景一致性：%d 错误 / %d 警告" % (len(errors), len(warns)))
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main())
