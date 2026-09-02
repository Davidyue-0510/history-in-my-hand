# -*- coding: utf-8 -*-
"""生成 data/stats.json —— 世界模型的「实时统计快照」，供门户 portal.html 动态渲染，
避免门户把断言数/来源数写死成会过期的常量（过去写死 290 断言/31 来源，实际早已增长）。

统计维度：
  * 切片总数 / 历史切片 / 虚构世界
  * 已录入断言总数
  * 史料来源总数（跨场景去重）
  * 派系数（vocab.factions）
  * 研究线索总数（来自 leads.json）
  * 每切片：断言数 + 派系分布
  * scene_titles：id→title 全量映射（修复门户 leads 卡片显示原始 id 的 bug）

由 gates 在 build 之后调用，产物 data/stats.json 进版本库。
"""
import json
import os
import sys

sys.stdout.reconfigure(encoding="utf-8", errors="replace")
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))
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
    reg = _load(os.path.join(DATA, "scenes.json")) or {}
    scenes = reg.get("scenes", {})
    order = reg.get("order", list(scenes.keys()))

    vocab = VL.load_default()
    factions_total = len(vocab.get("factions") or {})
    vocab_packs = VL.list_packs()

    leads = _load(os.path.join(DATA, "leads.json")) or {}
    leads_total = len(leads.get("leads", []))

    scenes_total = 0
    historical = 0
    fictional = 0
    assertions_total = 0
    source_ids = set()
    per_scene = []
    scene_titles = {}

    for sid in order:
        sc = scenes.get(sid)
        if not sc:
            continue
        d = os.path.join(DATA, sc.get("dir", sid))
        if not os.path.isdir(d):
            continue
        scenes_total += 1
        title = sc.get("title", sid)
        scene_titles[sid] = title
        kind = sc.get("kind", "county")
        # 虚构与否由场景自己声明（scenes.json 的 fictional 字段），不按 kind 猜。
        # 起因：kind 只有 battle/county 两类时，白名单判定 `kind in (...)` 尚能凑合；
        # 后来 kind 扩到 13 类（天灾/宫廷/改革/起义/融合/王朝/思想/科技/工程/边疆），
        # 白名单把其中 73 个真实历史场景全算成「虚构」——portal 的「虚构世界」卡片
        # 因此显示成 82（真实值 9）。分类判定必须读已声明的单一真值，不能另发明一套。
        if sc.get("fictional"):
            fictional += 1
        else:
            historical += 1

        # 源
        src = _load(os.path.join(d, "sources.json")) or {}
        src_by_id = {s.get("id"): s for s in src.get("sources", [])}
        for s in src.get("sources", []):
            if s.get("id"):
                source_ids.add(s["id"])

        # 断言 + 派系分布
        ap = os.path.join(d, "assertions.jsonl")
        cnt = 0
        fac = {}
        if os.path.exists(ap):
            with open(ap, encoding="utf-8") as f:
                for ln in f:
                    ln = ln.strip()
                    if not ln or ln.startswith("//"):
                        continue
                    try:
                        a = json.loads(ln)
                    except json.JSONDecodeError:
                        continue
                    cnt += 1
                    fid = (src_by_id.get(a.get("source"), {}) or {}).get("faction")
                    if fid:
                        fac[fid] = fac.get(fid, 0) + 1
        assertions_total += cnt
        per_scene.append({
            "id": sid, "title": title, "kind": kind,
            "assertions": cnt, "factions": fac,
        })

    stats = {
        "scenes_total": scenes_total,
        "historical": historical,
        "fictional": fictional,
        "assertions_total": assertions_total,
        "sources_total": len(source_ids),
        "factions_total": factions_total,
        "vocab_packs": vocab_packs,
        "default_vocab_pack": VL.default_pack_id(),
        "leads_total": leads_total,
        "per_scene": per_scene,
        "scene_titles": scene_titles,
    }
    out = os.path.join(DATA, "stats.json")
    with open(out, "w", encoding="utf-8") as f:
        json.dump(stats, f, ensure_ascii=False, indent=2)
    print("wrote %s: %d 切片 / %d 断言 / %d 来源 / %d 派系 / %d 线索"
          % (out, scenes_total, assertions_total, len(source_ids), factions_total, leads_total))
    return 0


if __name__ == "__main__":
    sys.exit(main())
