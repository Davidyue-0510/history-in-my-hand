#!/usr/bin/env python3
"""战略维度契约兜底闸门（方向重定位 2026-08-19「维度预留」）。

校验「战略层四维 + 时代背景七维 + scale_tier」三件套的字段存在性——
铁律「维度可以不显示但不能没有」，缺字段 = bug（E18 精神）。

规则（单一真值全部来自 data/scenes.json 顶层目录，本脚本只读不写）：
  (A)【阻断】顶层必须存在 epochs（时代背景七维全局参数表）/ strategic_dims（战略四维目录）
      / scale_tiers（层级目录）；epochs 内每个 era 必须含 7 子表
      tech/international/economy/society/doctrine/anchors/strategic。
  (B)【阻断】每个 world 必须：
      - epoch 引用存在（∈ epochs 键）
      - scale_tier 合法（∈ scale_tiers 键）
      - strategic 块含 strategic_dims 全部键，且每维带 from(epoch子表列表) + from_dims(6维id)
        + layer(record|scholarship|inference|gap|conflict) + note。
  (C)【警告】epoch 子表内容以 gap 占位（status=stub）的 era 仅提示，不阻断（诚实缺口）。

依赖：纯 stdlib。
"""
import json
import os
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
REG_PATH = os.path.join(ROOT, "data", "scenes.json")

EPOCH_SUBS = ["tech", "international", "economy", "society", "doctrine", "anchors", "strategic"]
LAYERS = {"record", "scholarship", "inference", "gap", "conflict"}


def main():
    fails = []
    warns = []

    reg = json.load(open(REG_PATH, encoding="utf-8"))

    # ── (A) 顶层目录 ──
    epochs = reg.get("epochs")
    sdims = reg.get("strategic_dims")
    stiers = reg.get("scale_tiers")
    if not isinstance(epochs, dict) or not epochs:
        fails.append("顶层缺失 epochs 目录（时代背景七维全局参数表）")
    if not isinstance(sdims, dict) or not sdims:
        fails.append("顶层缺失 strategic_dims 目录（战略四维单一真值）")
    if not isinstance(stiers, dict) or not stiers:
        fails.append("顶层缺失 scale_tiers 目录（战术/战役/战略层级）")
    if not epochs:
        print("FAIL 顶层 epochs 缺失，中止")
        sys.exit(1)
    if not sdims:
        print("FAIL 顶层 strategic_dims 缺失，中止")
        sys.exit(1)
    if not stiers:
        print("FAIL 顶层 scale_tiers 缺失，中止")
        sys.exit(1)

    # 每个 era 必须含 7 子表
    for era, e in sorted(epochs.items()):
        for sub in EPOCH_SUBS:
            if not isinstance(e.get(sub), dict):
                fails.append("epochs[%s] 缺子表 %s（时代背景七维之一）" % (era, sub))
        if e.get("status") == "stub":
            warns.append("epochs[%s] 为 stub（内容层 gap 占位，待按史料扩展）" % era)

    # ── (B) 每 world 三件套 ──
    scenes = reg.get("scenes", {})
    if not scenes:
        fails.append("scenes 为空")
    expect_sdims = set(sdims.keys())
    for key, sc in scenes.items():
        epoch = sc.get("epoch")
        tier = sc.get("scale_tier")
        strat = sc.get("strategic")
        if not epoch or epoch not in epochs:
            fails.append("%s: epoch=%r 无效（须∈epochs）" % (key, epoch))
        if not tier or tier not in stiers:
            fails.append("%s: scale_tier=%r 无效（须∈scale_tiers）" % (key, tier))
        if not isinstance(strat, dict):
            fails.append("%s: 缺 strategic 块" % key)
        else:
            keys = set(strat.keys())
            if keys != expect_sdims:
                fails.append("%s: strategic 键 %s ≠ 契约 %s"
                             % (key, sorted(keys), sorted(expect_sdims)))
            for dk, dv in strat.items():
                if not isinstance(dv, dict):
                    fails.append("%s.strategic[%s]: 应为对象" % (key, dk))
                    continue
                if not isinstance(dv.get("from"), list) or not dv["from"]:
                    fails.append("%s.strategic[%s].from 须为非空 epoch 子表列表" % (key, dk))
                else:
                    for s in dv["from"]:
                        if s not in EPOCH_SUBS:
                            fails.append("%s.strategic[%s].from 含未知子表 %r" % (key, dk, s))
                if not isinstance(dv.get("from_dims"), list) or not dv["from_dims"]:
                    fails.append("%s.strategic[%s].from_dims 须为非空 6维id 列表" % (key, dk))
                if dv.get("layer") not in LAYERS:
                    fails.append("%s.strategic[%s].layer=%r 非法（须∈%s）"
                                 % (key, dk, dv.get("layer"), sorted(LAYERS)))
                if not dv.get("note"):
                    fails.append("%s.strategic[%s].note 缺失（扩展配方必须解释推导）" % (key, dk))

    # ── 输出 ──
    for f in fails:
        print("FAIL " + f)
    for w in warns:
        print("WARN " + w)
    if fails:
        print("[战略维度契约] %d 处阻断（E18 精神：维度可不显示但不能没有）" % len(fails))
        sys.exit(1)
    print("[战略维度契约] OK：epochs=%d era、strategic_dims=%d 维、scale_tiers=%d 层、worlds=%d"
          % (len(epochs), len(sdims), len(stiers), len(scenes)))
    if warns:
        print("  （%d 条 era stub 提示，不阻断）" % len(warns))
    sys.exit(0)


if __name__ == "__main__":
    main()
