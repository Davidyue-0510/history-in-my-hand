#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""每朝代≥N 场景 · 覆盖度量脚本（北极星②规模化进度仪表）。

回答用户的两个问题：
  ①「规模化够了"是到多少场景」——以 --min N 量化每朝代场景数是否达标；
  ②「覆盖到什么程度」——给出 (epoch, 场景数, 自动生成数, 触达省份数) 矩阵，
     并显示距 N 的缺口。

注意：北极星②的「达标」本质是**管线能力**——任意史料+指定地图→自动可视化。
本脚本只度量「已铺多少朝代/多少场景」这一覆盖率指标；管线能力由
tools/ingestion/batch_world_gen.py --texts-dir 的端到端实测（含 strict gates + 无头渲染）证明。

用法：
  python tools/coverage_report.py [--min N] [--json PATH] [--quiet]
"""
import argparse
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REG = os.path.join(ROOT, "data", "scenes.json")
EPOCH_LABELS = {
    "ming_qing": "明清(辽东)", "song": "宋", "tang": "唐", "yuan": "元",
    "ming": "明", "qing": "清", "qin": "秦", "han": "汉", "sui": "隋",
    "three_kingdoms": "三国", "two_jin": "两晋", "warring_states": "战国",
    "qin_han": "秦汉", "sui_tang": "隋唐", "yuan_ming": "元明",
    "sui_yuan": "隋元", "cross_dynastic": "跨朝代", "guangzhong": "关中",
    "huabei": "华北", "qing_modern": "近代", "fiction": "虚构",
}


def main():
    ap = argparse.ArgumentParser(description="每朝代≥N 场景覆盖度量")
    ap.add_argument("--min", type=int, default=3, help="每朝代达标阈值 N（默认 3）")
    ap.add_argument("--json", default=None, help="写出 JSON 报告路径")
    ap.add_argument("--quiet", action="store_true", help="只打印达标/缺口汇总")
    args = ap.parse_args()

    reg = json.load(open(REG, encoding="utf-8"))
    scenes = reg.get("scenes", {})
    epoch_keys = sorted((reg.get("epochs") or {}).keys())

    rows = []
    for ek in epoch_keys:
        scs = [sc for sc in scenes.values() if sc.get("epoch") == ek]
        n_total = len(scs)
        n_auto = sum(1 for sc in scs if sc.get("id", "").endswith("_llm")
                     or sc.get("vocab_pack") == sc.get("id"))
        prov_set = set()
        for sc in scs:
            p = sc.get("province")
            if isinstance(p, list):
                prov_set.update(p)
            elif p:
                prov_set.add(p)
        prov = sorted(prov_set)
        n_prov = len(prov)
        short = max(0, args.min - n_total)
        rows.append({
            "epoch": ek, "label": EPOCH_LABELS.get(ek, ek),
            "total": n_total, "auto": n_auto, "provinces": n_prov,
            "short": short, "ok": short == 0,
        })

    # 未挂 epoch 的场景（应无）
    orphan = [k for k, sc in scenes.items() if not sc.get("epoch")]

    ok_rows = [r for r in rows if r["ok"]]
    short_rows = [r for r in rows if not r["ok"]]
    total_scenes = len(scenes)
    total_auto = sum(r["auto"] for r in rows)

    if not args.quiet:
        print("每朝代>=N 场景覆盖度量（N=%d）" % args.min)
        print("%-16s %-10s %6s %6s %6s %6s  %s" % (
            "epoch", "label", "total", "auto", "prov", "short", "status"))
        print("-" * 70)
        for r in rows:
            status = "OK" if r["ok"] else "缺%d" % r["short"]
            print("%-16s %-10s %6d %6d %6d %6d  %s" % (
                r["epoch"], r["label"], r["total"], r["auto"],
                r["provinces"], r["short"], status))
        print("-" * 70)
    print("[覆盖] 朝代数=%d  达标=%d  缺口=%d  总场景=%d  自动生成=%d"
          % (len(rows), len(ok_rows), len(short_rows), total_scenes, total_auto))
    if short_rows:
        print("[缺口] " + ", ".join("%s(缺%d)" % (r["epoch"], r["short"]) for r in short_rows))
    else:
        print("[缺口] 无（全部朝代>=%d 场景）" % args.min)
    if orphan:
        print("[WARN] %d 个场景缺 epoch 字段：%s" % (len(orphan), orphan[:10]))

    if args.json:
        out = {
            "min": args.min,
            "epochs_total": len(rows),
            "epochs_ok": len(ok_rows),
            "epochs_short": len(short_rows),
            "scenes_total": total_scenes,
            "scenes_auto": total_auto,
            "rows": rows,
            "short_epochs": [r["epoch"] for r in short_rows],
            "orphan_scenes": orphan,
        }
        with open(args.json, "w", encoding="utf-8") as f:
            json.dump(out, f, ensure_ascii=False, indent=1)
            f.write("\n")
        print("  报告 -> %s" % args.json)
    return 0


if __name__ == "__main__":
    sys.exit(main())
