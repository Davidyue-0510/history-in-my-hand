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

    # ── (A) 所有军事场景的 SIM_IC / SIM_RULES 通用契约（#6/#7/#9/#10/#11/#12/#16）──
    # 北极星③ G1 通用化后，每个军事历史事件都经 derive_military_sim 从种子派生，
    # 不再逐一手书；故契约校验也通用化，扫 demo/sim_ic_*.js / sim_rules_*.js 全对，
    # liaodong 作为规范场景保留 control=36 硬约束（其余场景仅校验 control 为正）。
    ic_files = glob.glob(os.path.join(DEMO, "sim_ic_*.js"))
    rules_files = glob.glob(os.path.join(DEMO, "sim_rules_*.js"))
    sim_scenes = set()
    ic_map, rules_map = {}, {}
    for fp in ic_files:
        s = os.path.basename(fp)[len("sim_ic_"):-3]
        sim_scenes.add(s)
        ic_map[s] = fp
    for fp in rules_files:
        s = os.path.basename(fp)[len("sim_rules_"):-3]
        sim_scenes.add(s)
        rules_map[s] = fp
    if not sim_scenes:
        fails.append("未找到任何 demo/sim_ic_*.js / sim_rules_*.js 军事场景")
    for scene in sorted(sim_scenes):
        ic_text = read(ic_map[scene]) if scene in ic_map else ""
        rules_text = read(rules_map[scene]) if scene in rules_map else ""
        check_sim_pair(scene, ic_text, rules_text, fails)

    # ── (A) SIM_DATA（真实基底锚，阶段1 产物，仅 liaodong 有 _sim_*.js）──
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

    # ── (C) 非军事反事实契约（G2 六维广度 · v0.124）──
    # 扫描 data/**/sim_config.json 与 branch_events_*.json，校验：
    #   - 非军事 sim_config 必须含 scenario_type / dim_targets / branches / real_branch
    #   - 所有 branch_events_*.json 的每条事件必须符 v0.57 schema
    #     （kind∈枚举、year 整数、severity∈枚举）
    KIND_ENUM = {"divergence", "logistics", "faction", "momentum", "summary"}
    SEV_ENUM = {"info", "warn", "bad"}
    for cfgp in glob.glob(os.path.join(ROOT, "data", "**", "sim_config.json"), recursive=True):
        try:
            obj = json.loads(read(cfgp))
        except Exception as e:
            fails.append("sim_config 解析失败 %s: %s" % (os.path.relpath(cfgp, ROOT), e))
            continue
        st = obj.get("scenario_type", "military")
        if st == "military":
            continue
        rel = os.path.relpath(cfgp, ROOT)
        if not obj.get("dim_targets"):
            fails.append("sim_config 非军事缺 dim_targets: %s" % rel)
        if not isinstance(obj.get("branches"), list) or not obj["branches"]:
            fails.append("sim_config 非军事缺 branches: %s" % rel)
        if not obj.get("real_branch"):
            fails.append("sim_config 非军事缺 real_branch: %s" % rel)
        # ── G1 派生诚实边界（v0.125）──
        # 标 _auto_derived 的配置必须：(a) 布尔；(b) 含一条 whatif 前缀的反事实分支，
        # 使前端可据 id 渲染 [what-if] 徽标，绝不把派生产物冒充手 authoring 考据。
        if obj.get("_auto_derived") is not None:
            if not isinstance(obj.get("_auto_derived"), bool):
                fails.append("sim_config _auto_derived 应为布尔: %s" % rel)
            else:
                bids = [b.get("id") for b in obj.get("branches", [])]
                if not any(isinstance(b, str) and b.startswith("whatif") for b in bids):
                    fails.append("派生 sim_config 缺 whatif 反事实分支（honest boundary）: %s" % rel)

    for bep in glob.glob(os.path.join(ROOT, "data", "**", "branch_events_*.json"), recursive=True):
        try:
            obj = json.loads(read(bep))
        except Exception as e:
            fails.append("branch_events 解析失败 %s: %s" % (os.path.relpath(bep, ROOT), e))
            continue
        events = obj.get("events", []) if isinstance(obj, dict) else []
        if not events:
            warns.append("branch_events 无事件（可能为纯史实重放）: %s" % os.path.relpath(bep, ROOT))
        for k, ev in enumerate(events):
            rel = "%s#%d" % (os.path.relpath(bep, ROOT), k)
            if not isinstance(ev, dict):
                fails.append("branch_events 事件非对象: %s" % rel); continue
            if ev.get("kind") not in KIND_ENUM:
                fails.append("branch_events kind 非法: %s (kind=%r)" % (rel, ev.get("kind")))
            if not isinstance(ev.get("year"), int):
                fails.append("branch_events year 非整数: %s" % rel)
            if ev.get("severity") not in SEV_ENUM:
                fails.append("branch_events severity 非法: %s (severity=%r)" % (rel, ev.get("severity")))

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


def check_sim_pair(scene, ic_text, rules_text, fails):
    """通用校验一对 SIM_IC / SIM_RULES（#6/#7/#9/#10/#11/#12/#16）。

    scene=="liaodong" 为规范场景：control 控制项硬约束 = 36 治所（阶段2 #16）。
    其余场景仅校验 control 存在且为正（新军事事件零改引擎即应满足）。
    """
    rel = "SIM[%s]" % scene
    # ── SIM_RULES（声明式规则，#6）──
    if not rules_text:
        fails.append("缺失 SIM_RULES 文件: demo/sim_rules_%s.js" % scene)
    else:
        if '"rules"' not in rules_text or '"id": "R1"' not in rules_text:
            fails.append("%s SIM_RULES 缺少 rules/R1（#6）" % rel)
        if '"branches"' not in rules_text:
            fails.append("%s SIM_RULES 缺少 branches（#12）" % rel)
        else:
            if '"id": "B1_' not in rules_text:
                fails.append("%s SIM_RULES 缺 B1_* 反事实分支（#12）" % rel)
        if '"missing_dims"' not in rules_text or '"probability"' not in rules_text \
                or '"logistics"' not in rules_text or '"population"' not in rules_text:
            fails.append("%s SIM_RULES 缺 missing_dims(probability/logistics/population)（#7/#9/#10）" % rel)
        if '"dist"' not in rules_text:
            fails.append("%s SIM_RULES.missing_dims 缺 dist（#7 概率占位必须带 dist）" % rel)
        if not re.search(r'"tick"\s*:\s*1', rules_text):
            fails.append("%s SIM_RULES.meta.tick 应为 1（步长=1年，#11）" % rel)

    # ── SIM_IC（初始条件，#16）──
    if not ic_text:
        fails.append("缺失 SIM_IC 文件: demo/sim_ic_%s.js" % scene)
    else:
        if '"control"' not in ic_text:
            fails.append("%s SIM_IC 缺少 control 初始控制快照（#16）" % rel)
        else:
            ctrl = count(ic_text, ': "明方"') + count(ic_text, ': "清方"') + count(ic_text, ': "contested"')
            if scene == "liaodong":
                if ctrl != 36:
                    fails.append("%s SIM_IC.control 控制项应为 36（实际 %d，#16 硬约束）" % (rel, ctrl))
            elif ctrl <= 0:
                fails.append("%s SIM_IC.control 控制项应为正数（实际 %d，#16）" % (rel, ctrl))
        if '"personsByFaction"' not in ic_text or '"feng_jiang"' not in ic_text or '"无派系"' not in ic_text:
            fails.append("%s SIM_IC 缺 personsByFaction 分组（#3 派系动因）" % rel)
        if '"params"' not in ic_text or '"qingExec"' not in ic_text or '"mingExec"' not in ic_text:
            fails.append("%s SIM_IC 缺 params 参数快照（#16 参数化初值）" % rel)
        if '"threeTier"' not in ic_text:
            fails.append("%s SIM_IC 缺 threeTier 三阶层指标初值（#13 反馈环输入）" % rel)
        else:
            for need in ("centerStability", "localEduMono", "grassrootMob", "legitimacy", "treasury", "milPower", "poverty"):
                if '"%s"' % need not in ic_text:
                    fails.append("%s SIM_IC.threeTier 缺 %s" % (rel, need))
        if '"missing_dims"' not in ic_text or '"population"' not in ic_text or '"dist"' not in ic_text:
            fails.append("%s SIM_IC.missing_dims 缺 population/dist（#10 诚实占位）" % rel)


if __name__ == "__main__":
    sys.exit(main())
