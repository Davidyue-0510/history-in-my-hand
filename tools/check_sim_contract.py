#!/usr/bin/env python3
"""phase-2 维度契约兜底闸门（docs/unified_dimensions.md §4）。

校验两件事：
 (A)【阻断】仿真产物含阶段2 维度字段占位（#6/#7/#9/#10/#11/#12/#16）。
     SIM_RULES / SIM_IC / SIM_DATA 三件套结构必须完整；隐藏维度必须带 dist
     （"可以不显示但不能没有"）。任一关键结构缺失 → exit 1。
 (B)【警告】gap 层断言必须带 dist（概率/不确定性传播，维度#7）。
     现有(legacy)缺 dist 的仅警告并列出文件，不阻断（待迁移）；
     新断言应补齐 dist（即便退化为 {"type":"degenerate"}）。

依赖：纯 stdlib，不依赖 Node；结构校验用文本/正则，因为三个阶段2 文件均为
纯数据 JS（键带引号、无函数），正则足以判定字段存在性。
"""
import glob
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DEMO = os.path.join(ROOT, "demo")


def read(path):
    with open(path, "r", encoding="utf-8") as f:
        return f.read()


def count(hay, needle):
    return hay.count(needle)


def main():
    fails = []   # 阻断项
    warns = []   # 警告项

    # ── (A) SIM_RULES（声明式规则，#6）──
    rp = os.path.join(DEMO, "sim_rules_liaodong.js")
    if not os.path.exists(rp):
        fails.append("缺失 SIM_RULES 文件: demo/sim_rules_liaodong.js")
    else:
        r = read(rp)
        if '"rules"' not in r or '"id": "R1"' not in r:
            fails.append("SIM_RULES 缺少 rules/R1（adjudicate_transition，#6）")
        if '"branches"' not in r or '"id": "B1_guard_guangning"' not in r:
            fails.append("SIM_RULES 缺少 branches/B1（反事实分支，#12）")
        if '"missing_dims"' not in r or '"probability"' not in r or '"logistics"' not in r or '"population"' not in r:
            fails.append("SIM_RULES 缺少 missing_dims（#7/#9/#10 诚实占位）")
        if '"dist"' not in r:
            fails.append("SIM_RULES.missing_dims 缺少 dist（#7 概率占位必须带 dist）")
        if not re.search(r'"tick"\s*:\s*1', r):
            fails.append("SIM_RULES.meta.tick 应为 1（步长=1年，#11）")

    # ── (A) SIM_IC（初始条件，#16）──
    ip = os.path.join(DEMO, "sim_ic_liaodong.js")
    if not os.path.exists(ip):
        fails.append("缺失 SIM_IC 文件: demo/sim_ic_liaodong.js")
    else:
        i = read(ip)
        if '"control"' not in i:
            fails.append("SIM_IC 缺少 control 初始控制快照（#16）")
        else:
            # 控制项计数：明方/清方/contested 值出现次数之和应=36 治所
            ctrl = count(i, ': "明方"') + count(i, ': "清方"') + count(i, ': "contested"')
            if ctrl != 36:
                fails.append("SIM_IC.control 控制项应为 36（实际 %d，#16）" % ctrl)
        if '"personsByFaction"' not in i or '"feng_jiang"' not in i or '"无派系"' not in i:
            fails.append("SIM_IC 缺 personsByFaction 分组（#3 派系动因）")
        if '"params"' not in i or '"qingExec"' not in i or '"mingExec"' not in i:
            fails.append("SIM_IC 缺 params 参数快照（#16 参数化初值）")
        if '"threeTier"' not in i:
            fails.append("SIM_IC 缺 threeTier 三阶层指标初值（#13 反馈环输入）")
        else:
            for need in ("centerStability", "localEduMono", "grassrootMob", "legitimacy", "treasury", "milPower", "poverty"):
                if '"%s"' % need not in i:
                    fails.append("SIM_IC.threeTier 缺 %s" % need)
        if '"missing_dims"' not in i or '"population"' not in i or '"dist"' not in i:
            fails.append("SIM_IC.missing_dims 缺 population/dist（#10 诚实占位）")

    # ── (A) SIM_DATA（真实基底锚，阶段1 产物）──
    dp = os.path.join(DEMO, "_sim_liaodong.js")
    if not os.path.exists(dp):
        fails.append("缺失 SIM_DATA 文件: demo/_sim_liaodong.js（阶段1 真实数据桥）")
    else:
        d = read(dp)
        for need in ("seats", "transitions", "persons", "startControl", "terminalReal"):
            if '"%s"' % need not in d:
                fails.append("SIM_DATA 缺 %s 字段" % need)
        lon = count(d, '"lon":')
        if lon != 36:
            fails.append("SIM_DATA.seats 经纬度点应为 36（实际 %d）" % lon)

    # ── (B) gap 层断言必须带 dist（#7，警告不阻断）──
    gap_files = 0
    gap_missing_dist = []
    for fp in glob.glob(os.path.join(ROOT, "data", "**", "assertions.jsonl"), recursive=True):
        try:
            with open(fp, "r", encoding="utf-8") as f:
                for ln, line in enumerate(f, 1):
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        obj = json.loads(line)
                    except Exception:
                        continue
                    layer = obj.get("layer")
                    if layer in ("gap", "conflict"):
                        gap_files += 1
                        if "dist" not in obj:
                            gap_missing_dist.append("%s:%d (layer=%s)" % (os.path.relpath(fp, ROOT), ln, layer))
        except Exception:
            pass
    if gap_missing_dist:
        warns.append("gap/conflict 断言缺 dist（%d 条，待迁移补齐；当前仅警告）：%s"
                     % (len(gap_missing_dist), ", ".join(gap_missing_dist[:8])
                        + ("…" if len(gap_missing_dist) > 8 else "")))

    # ── 报告 ──
    print("== 仿真维度契约闸门（unified_dimensions §4）==")
    print("[A] 阶段2 结构契约（#6/#7/#9/#10/#11/#12/#16）：")
    if not fails:
        print("    ✓ SIM_RULES / SIM_IC / SIM_DATA 三维结构完整，隐藏维度均带 dist")
    for f in fails:
        print("    ✗ " + f)
    if warns:
        print("[B] gap/conflict 断言 dist（警告）：")
        for w in warns:
            print("    ⚠ " + w)

    if fails:
        print("\n[FAILED] 存在阻断项，先补齐仿真维度契约再提交。")
        return 1
    print("\n[PASS] 仿真维度契约通过（gap.dist 为警告项，已列出待迁移）。")
    return 0


if __name__ == "__main__":
    sys.exit(main())
