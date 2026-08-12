# -*- coding: utf-8 -*-
"""三阶层理性人 Agent 模型（v0.36 · 演化引擎 Phase 3）。

数据契约：docs/04-evolution-rules.md ——
  center: 稳定、发展（最大资源=人口）
  local:  家族延续>国家认同（教育+生产资料垄断）
  grassroot: 稳定、日子有盼头（无系统教育→果实易被窃取）

阶级固化循环：教育垄断>0.7 → 固3代 → 底层动员>0.8 → 革命 → local重组 → 新轮回
战争裁决不变：局部多打少 → 比>1.5占领（simulate.py 的裁决函数仍在使用）。
"""


class Agent:
    """城级 agent 基类。"""

    __slots__ = ("place_id", "cls", "resources", "family_id", "holds",
                 "grievance", "solidarity")

    def __init__(self, place_id, cls="grassroot", family_id=None):
        self.place_id = place_id
        self.cls = cls          # center | local | grassroot
        self.resources = {"troops": 0, "grain": 0, "edu_control": 0.0}
        self.family_id = family_id
        self.holds = True       # 是否仍控制该城
        self.grievance = 0.0    # 不满度（0-1）
        self.solidarity = 0.5   # 阶级凝聚力（当前城内的同阶级比例）

    def utility(self, regime_party, neighbors):
        """返回该 agent 在当前条件下的利益函数值。子类实现。"""
        return 0.0

    def decide(self, state):
        """返回本回合的行动：('maintain', ...) | ('rebel', ...) | ('switch', party)。"""
        return ("maintain",)


class CenterAgent(Agent):
    """center 层：统治者/皇室——希望稳定税基、压制地方膨胀、避免多线战争。"""

    def __init__(self, place_id):
        super().__init__(place_id, cls="center")

    def utility(self, regime_party, neighbors):
        """利益 = 控制城数 × 人口系数 - 叛乱风险。"""
        return self.resources["troops"] * 0.5 + self.resources["grain"] * 0.3

    def decide(self, state):
        # center 总是维持（叛乱由外部事件触发）
        return ("maintain",)


class LocalAgent(Agent):
    """local 层：士绅/门阀/官僚——家族延续胜过政权认同，政治分散投机。"""

    def __init__(self, place_id, family_id=None):
        super().__init__(place_id, cls="local", family_id=family_id)

    def utility(self, regime_party, neighbors):
        """利益 = 各城教育垄断 + 各家族控制城数。"""
        return (self.resources.get("edu_control", 0) * 10
                + self.resources["troops"] * 0.3
                + self.resources["grain"] * 0.2)

    def decide(self, state):
        # 若 grievance > 0.6 且相邻城属于不同政权 → 可能投机切换
        if self.grievance > 0.6 and state.get("alt_regime"):
            return ("switch", state["alt_regime"])
        return ("maintain",)


class GrassrootAgent(Agent):
    """grassroot 层：农民/手工业者——稳定第一，被垄断教育和生产资料。"""

    def __init__(self, place_id):
        super().__init__(place_id, cls="grassroot")

    def utility(self, regime_party, neighbors):
        return self.resources["grain"] * 0.8 + self.resources["troops"] * 0.1

    def decide(self, state):
        # 动员度 > 0.8 → 革命
        if state.get("mobilization", 0) > 0.8 and self.grievance > 0.5:
            return ("rebel",)
        return ("maintain",)


def create_agents(place_list, control_data, start_year, timeline="main"):
    """从控制权数据初始化所有 agent。

    规则：
    - center: 当前控制方的 party 标识的首都/核心城
    - local:  一个 family 控制多城的 >1 城场景
    - grassroot: 无特殊标记的普通城
    """
    agents = {}
    party_cities = {}
    for c in control_data:
        if c.get("timeline", "main") != timeline:
            continue
        pid = c.get("place_id")
        if not pid or pid not in place_list:
            continue
        st = c.get("start") or 0
        en = c.get("end") or 9999
        if st <= start_year <= en:
            party_cities.setdefault(c.get("party", "unknown"), []).append(pid)

    # 每个 party 的第一个城 = center，其余 = local（精英对基层的代理），
    # 无 party 的城 = grassroot
    family_counter = 0
    for party, cities in party_cities.items():
        for i, pid in enumerate(cities):
            if i == 0:
                agents[pid] = CenterAgent(pid)
            else:
                fid = "f_%s_%d" % (party, family_counter)
                family_counter += 1
                agents[pid] = LocalAgent(pid, family_id=fid)

    for pid in place_list:
        if pid not in agents:
            agents[pid] = GrassrootAgent(pid)

    return agents


def compute_metrics(agents, garrison):
    """计算全局阶级指标。

    Returns: {
      education_monopoly: float,     # local 控制教育资源的比例
      mobilization: float,           # grassroot 动员度
      class_solidarity: {cls: float}, # 各阶级内部凝聚力
      grievance_avg: {cls: float},   # 各阶级平均不满度
    }
    """
    total_edu = 0.0
    local_edu = 0.0
    class_counts = {}
    class_grievance = {}

    for pid, a in agents.items():
        cls = a.cls
        class_counts[cls] = class_counts.get(cls, 0) + 1
        class_grievance[cls] = class_grievance.get(cls, 0) + a.grievance
        total_edu += a.resources.get("edu_control", 0)
        if cls == "local":
            local_edu += a.resources.get("edu_control", 0)

    n = len(agents) or 1
    education_monopoly = local_edu / max(total_edu, 0.01)
    # 教育垄断越低，底层越有组织能力 → 动员度越高
    mobilization = (1 - education_monopoly) * 0.5
    # 如果 grassroot grievance 高，动员度进一步上升
    gc = class_counts.get("grassroot", 0)
    gg = class_grievance.get("grassroot", 0) / max(gc, 1)
    mobilization += gg * 0.3

    solidarity = {}
    for cls, count in class_counts.items():
        # 各阶级内部相同 family 的人数占比（local 侧重家族）
        if cls == "local":
            families = {}
            for pid, a in agents.items():
                if a.cls == "local" and a.family_id:
                    families[a.family_id] = families.get(a.family_id, 0) + 1
            # 最高的家族的城数 / 总 local 城数
            max_fam = max(families.values()) if families else 0
            solidarity[cls] = max_fam / max(count, 1)
        else:
            solidarity[cls] = 1.0 - (class_grievance.get(cls, 0) / max(count, 1))

    return {
        "education_monopoly": min(education_monopoly, 1.0),
        "mobilization": min(mobilization, 1.0),
        "class_solidarity": solidarity,
        "grievance_avg": {c: g / max(class_counts.get(c, 1), 1)
                          for c, g in class_grievance.items()},
    }
