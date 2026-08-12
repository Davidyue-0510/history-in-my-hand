# -*- coding: utf-8 -*-
"""确定性战争推演引擎（v0.32 · 演化引擎 Phase 2）。

输入：场景 id + 分支 timeline_id + 年份范围 + 初始兵力分配
输出：control 控制权序列 JSON（每回合谁占哪城）→ 可被 build.py/ControlLayer 消费。

规则（来自 docs/04-evolution-rules.md）：
  - 攻方每回合选择相邻的守军最弱敌格
  - 局部兵力比 = 攻方投入 / 守方驻军
  - 比 > 1.5 → 占领（攻方胜）；否则僵持
  - 被占领格的驻军清零，攻方分出 1/3 兵力驻守

用法：
  python tools/simulate.py --scene imjin --branch main --years 1592 1598
  python tools/simulate.py --scene imjin --branch imjin_japan_held_pyongyang --years 1592 1598
"""
import argparse
import json
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(os.path.dirname(HERE))
sys.path.insert(0, HERE)
import agent_model as AM


def load_scene_data(scene_id):
    """载入场景的 places/edges/control。"""
    d = os.path.join(ROOT, "data", scene_id)
    places = json.load(open(os.path.join(d, "places.json"), encoding="utf-8"))
    edges = json.load(open(os.path.join(d, "edges.json"), encoding="utf-8"))
    control = json.load(open(os.path.join(d, "control.json"), encoding="utf-8"))
    return places, edges, control


def build_neighbors(places, edges):
    """从行军路线 edges 建立治所间邻接关系。"""
    nb = {}  # place_id → set of neighbor place_ids
    place_ids = {p["id"] for p in places["places"]}
    for e in edges.get("edges", []):
        f, t = e.get("from"), e.get("to")
        if f in place_ids and t in place_ids:
            nb.setdefault(f, set()).add(t)
            nb.setdefault(t, set()).add(f)
    # 补全：无邻接的孤立点，加地理近邻（<1°）
    pmap = {p["id"]: p for p in places["places"]}
    for pid in place_ids:
        nb.setdefault(pid, set())
        if not nb[pid]:
            for pid2 in place_ids:
                if pid2 == pid:
                    continue
                p1, p2 = pmap[pid], pmap[pid2]
                if p1.get("lon") and p2.get("lon"):
                    dist = ((p1["lon"] - p2["lon"]) ** 2 + (p1["lat"] - p2["lat"]) ** 2) ** 0.5
                    if dist < 1.0:
                        nb[pid].add(pid2)
    return nb


def controller_at(control, place_id, year, timeline="main"):
    """某地在某年属于哪个 party。"""
    best = None
    for c in control:
        if c.get("place_id") != place_id:
            continue
        if c.get("timeline", "main") != timeline:
            continue
        st, en = c.get("start") or 0, c.get("end") or 9999
        if st <= year <= en:
            best = c.get("party")
    return best


def simulate(scene, branch, start_year, end_year, forces, reinforcements=None):
    """确定性推演，返回控制权序列。

    forces: {party: initial_troops}
    reinforcements: [(year, party, troops, entry_place), ...]——该年在 entry_place 注入兵力
    """
    places, edges, control_data = load_scene_data(scene)
    nb = build_neighbors(places, edges)
    ctrl = control_data.get("control", [])
    place_list = [p["id"] for p in places["places"]]

    # 分支继承：fork 年前的 control 从 parent 继承
    tl_path = os.path.join(ROOT, "data", scene, "timelines.json")
    parent = "main"
    if os.path.exists(tl_path) and branch != "main":
        tld = json.load(open(tl_path, encoding="utf-8"))
        parent = tld.get("timelines", {}).get(branch, {}).get("parent", "main")

    # 初始兵力分配：各城均匀分
    garrison = {}   # place_id → {party, troops}
    for pid in place_list:
        owner = controller_at(ctrl, pid, start_year, branch)
        if not owner and branch != "main":
            owner = controller_at(ctrl, pid, start_year, parent)
        if not owner:
            for yr in range(start_year - 5, start_year + 1):
                o = controller_at(ctrl, pid, yr, branch)
                if not o and branch != "main":
                    o = controller_at(ctrl, pid, yr, parent)
                if o:
                    owner = o
                    break
        if not owner and pid in nb:
            for adj in nb[pid]:
                o = controller_at(ctrl, adj, start_year, branch)
                if not o and branch != "main":
                    o = controller_at(ctrl, adj, start_year, parent)
                if o:
                    owner = o
                    break
        if not owner:
            continue
        garrison[pid] = {"party": owner, "troops": 0}

    # 按 party 分配初始兵力（均匀分配到该 party 控制的每座城）
    party_cities = {}
    for pid, g in garrison.items():
        party_cities.setdefault(g["party"], []).append(pid)
    for party, cities in party_cities.items():
        total = forces.get(party, 1000)
        per = max(1, total // len(cities))
        for pid in cities:
            garrison[pid]["troops"] = per

    # v0.36 Phase 3: 三阶层 Agent 模型
    agents = AM.create_agents(place_list, ctrl, start_year, branch)
    # 初始资源注入
    for pid, a in agents.items():
        g = garrison.get(pid, {})
        a.resources["troops"] = g.get("troops", 0)
        a.resources["grain"] = max(1, a.resources["troops"] // 2)

    # 推演
    output_control = []
    state_history = []  # v0.36 阶级指标时序
    reinforcements = reinforcements or []
    for year in range(start_year, end_year + 1):
        # 事件注入：新势力/增援入场
        for ry, rparty, rtroops, rentry in reinforcements:
            if ry != year:
                continue
            # 入口城存在 → 优先投放（若敌控则强行占领）
            if rentry in garrison:
                entry = rentry
                if garrison[entry]["party"] != rparty:
                    garrison[entry] = {"party": rparty, "troops": rtroops}
                    print("  [Y%d] INVADE %s +%d takes %s" % (year, rparty, rtroops, entry[:8]))
                else:
                    garrison[entry]["troops"] += rtroops
                    print("  [Y%d] REINFORCE %s +%d at %s" % (year, rparty, rtroops, entry[:8]))
                continue
            # 否则找最近友城
            targets = [pid for pid, g in garrison.items() if g["party"] == rparty]
            if not targets:
                continue
            pmap2 = {p["id"]: p for p in places["places"]}
            ep = pmap2.get(rentry) or {}
            targets.sort(key=lambda pid: abs(pmap2.get(pid, {}).get("lat", 0) - ep.get("lat", 0)))
            entry = targets[0]
            garrison[entry]["troops"] += rtroops
            print("  [Y%d] REINFORCE %s +%d at %s" % (year, rparty, rtroops, entry[:8]))
            print("  [Y%d] REINFORCE %s +%d at %s" % (year, rparty, rtroops, entry[:8]))

        # v0.36 Agent 决策与阶级指标
        # 同步 agent 资源
        for pid, a in agents.items():
            g = garrison.get(pid, {})
            a.resources["troops"] = g.get("troops", 0)
            a.resources["grain"] = max(a.resources.get("grain", 0),
                                       a.resources["troops"] // 3)
            if a.cls == "local":
                a.resources["edu_control"] = min(1.0,
                    a.resources.get("edu_control", 0) + 0.02)

        metrics = AM.compute_metrics(agents, garrison)
        state_history.append({
            "year": year,
            "education_monopoly": round(metrics["education_monopoly"], 3),
            "mobilization": round(metrics["mobilization"], 3),
            "solidarity": {k: round(v, 3)
                           for k, v in metrics["class_solidarity"].items()},
        })

        # Agent 自主决策
        for pid, a in agents.items():
            if not a.holds:
                continue
            party = garrison.get(pid, {}).get("party", "")
            state = {"mobilization": metrics["mobilization"]}
            if party:
                # 给 local agent 提供侧切换选项
                for adj in nb.get(pid, set()):
                    g_adj = garrison.get(adj, {})
                    if g_adj.get("party") and g_adj["party"] != party:
                        state["alt_regime"] = g_adj["party"]
                        break
            action = a.decide(state)
            if action[0] == "rebel":
                # grassroot 革命：随机夺取相邻城
                targets = [adj for adj in nb.get(pid, set())
                           if garrison.get(adj, {}).get("party") != party]
                if targets:
                    tgt = targets[0]
                    garrison[tgt] = {"party": "叛军", "troops": a.resources["troops"] // 2}
                    output_control.append({
                        "place_id": tgt, "party": "叛军",
                        "start": year, "end": None,
                        "timeline": branch,
                        "basis": "agent: grassroot revolt",
                    })
                    a.grievance -= 0.3
                    print("  [Y%d] REVOLT %s -> %s" % (year, pid[:8], tgt[:8]))
            elif action[0] == "switch":
                # local 投机：切换阵营
                new_party = action[1]
                garrison[pid] = {"party": new_party, "troops": a.resources["troops"]}
                output_control.append({
                    "place_id": pid, "party": new_party,
                    "start": year, "end": None,
                    "timeline": branch,
                    "basis": "agent: local defected",
                })
                print("  [Y%d] DEFECT %s -> %s" % (year, pid[:8], new_party))

        # 年度增援：每 party 恢复 10% 兵力（后勤补给）
        party_total_troops = {}
        for pid, g in garrison.items():
            party_total_troops[g["party"]] = party_total_troops.get(g["party"], 0) + g["troops"]
        for party, total in party_total_troops.items():
            replenish = max(1, total // 10)
            cities = [pid for pid, g in garrison.items() if g["party"] == party]
            if cities:
                per = replenish // len(cities)
                for pid in cities:
                    garrison[pid]["troops"] += per
        # 收集该年各 party 控制的城池
        party_holds = {}
        for pid, g in garrison.items():
            party_holds.setdefault(g["party"], []).append(pid)

        # 每 party 选择攻击目标
        captures = {}  # place_id → new_party
        for attacker, my_cities in list(party_holds.items()):
            if not my_cities:
                continue
            # 找相邻敌城（守军最少的前 3 个）
            targets = []
            for my in my_cities:
                for adj in nb.get(my, set()):
                    g = garrison.get(adj)
                    if not g or g["party"] == attacker:
                        continue
                    targets.append((adj, g["troops"], g["party"]))
            targets.sort(key=lambda x: x[1])  # 按守军升序

            # 攻击前 2 个最弱目标
            attacked = set()
            for tgt_id, def_troops, defender in targets[:2]:
                if tgt_id in attacked:
                    continue
                attacked.add(tgt_id)
                # 攻方投入 = 相邻各城的兵力之和（最大 3 城）
                attacker_troops = 0
                supporting = []
                for my in my_cities:
                    if tgt_id in nb.get(my, set()):
                        supporting.append(my)
                # 取最多 3 个支援城
                from_cities = sorted(supporting, key=lambda c: garrison[c]["troops"], reverse=True)[:3]
                for c in from_cities:
                    commit = garrison[c]["troops"] // 2  # 留守一半
                    attacker_troops += commit

                ratio = attacker_troops / max(def_troops, 1)
                if ratio >= 1.5:
                    captures[tgt_id] = attacker
                    print("  [Y%d] %s → %s (%.1f:%d vs %d)" % (
                        year, tgt_id[:8], attacker, ratio, attacker_troops, def_troops))
                    # 被占领 → 驻军清零，后续归攻方
                    garrison[tgt_id] = {"party": attacker, "troops": attacker_troops // 3}
                    # 攻方支援城兵力减少
                    for c in from_cities:
                        garrison[c]["troops"] -= garrison[c]["troops"] // 2

        # 应用占领
        for pid, new_party in captures.items():
            output_control.append({
                "place_id": pid,
                "party": new_party,
                "start": year,
                "end": None,
                "timeline": branch,
                "basis": "sim: 局部兵力比 > 1.5，占",
                "note": "确定性推演第 %d 年" % year,
            })

    return output_control, state_history


def main():
    ap = argparse.ArgumentParser(description="确定性战争推演引擎")
    ap.add_argument("--scene", required=True, help="场景 id，如 imjin")
    ap.add_argument("--branch", default="main", help="分支 timeline id")
    ap.add_argument("--years", nargs=2, type=int, required=True, metavar=("START", "END"))
    ap.add_argument("--forces", nargs="*", help="初始兵力 party=num")
    ap.add_argument("--reinforce", nargs="*", help="增援 year:party:troops:entry")
    ap.add_argument("--out", help="输出路径")
    args = ap.parse_args()

    forces = {}
    if args.forces:
        for f in args.forces:
            k, v = f.split("=")
            forces[k] = int(v)
    else:
        forces = {"朝鲜": 20000, "日本方": 28000}

    reinforcements = []
    if args.reinforce:
        for r in args.reinforce:
            parts = r.split(":")
            reinforcements.append(
                (int(parts[0]), parts[1], int(parts[2]), parts[3]))

    result, _state_history = simulate(args.scene, args.branch,
                      args.years[0], args.years[1], forces, reinforcements)

    out_path = args.out or os.path.join(
        ROOT, "data", args.scene,
        "control_sim_%s.json" % args.branch)

    output = {"_comment": "确定性推演结果 (v0.36 sim+agent)",
              "_branch": args.branch, "_scene": args.scene,
              "_years": list(args.years), "_forces": forces,
              "control": result}
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(output, f, ensure_ascii=False, indent=1)
        f.write("\n")
    # 同时写阶级指标
    hist_path = out_path.replace("control_sim_", "state_hist_")
    json.dump(_state_history, open(hist_path, "w", encoding="utf-8"),
              ensure_ascii=False, indent=1)
    print("[sim] %s · %s · %d-%d: %d 条控制变更 + %d 年阶级指标 → %s" % (
        args.scene, args.branch, args.years[0], args.years[1],
        len(result), len(_state_history), out_path))


if __name__ == "__main__":
    main()
