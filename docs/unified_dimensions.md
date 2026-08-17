# 统一维度本体（整合契约）

> 缘起：用户原话——"优化历史模拟器吗？将历史模拟器和实际历史合在一起？看看这两个方向各自有哪些维度是没有考虑到的，把双方各自缺少的整合一下（这些维度可以不显示，但是不能没有！！）"
>
> 本文不是新设计，而是把已有的两份设计骨架 + 现有代码**缝合**成一张"维度级整合清单"：
> - `03-通用世界模型-schema.md`（schema 骨架：`worlds/`、`sim_config.json`、`timeline.json` 分支、断言 `layer:conflict`）
> - `04-evolution-rules.md`（rules 骨架：三阶层理性人模型 + 战争裁决 + 4 期路线）
> - 现有代码：`demo/county.js`(ControlLayer/ImpactLayer) / `demo/agent_sim.html`(通用 ABM) / `demo/whatif.html`(后勤) / `demo/branch_timeline.html`(分支)
>
> **核心裁决（用户强调）**：16 维在统一模型里**全部必须有字段占位**；UI 可隐藏，但数据契约里不能缺。隐藏维度靠 gates/build 校验兜底（见 §4）。

---

## 1. 两大模型现状（精炼）

| 模型 | 现状 | 关键文件 |
|---|---|---|
| **实际历史** | 证据驱动、空间+时间呈现完整；缺因果机制/演化/概率/分支 | `data/<scene>/{assertions.jsonl,events.json,persons.json,control.json,impact.json,sources.json}` + `vocab.json` + `demo/county.js` |
| **模拟器** | 已有两个雏形，但**彼此不一致、且都不读真实数据**：① `agent_sim.html` 通用 ABM（土地兼并+教育垄断→阶级固化→叛乱），用的是**双引擎**而非 `04` 的**三阶层**模型；② `whatif.html` 后勤约束；③ `branch_timeline.html` 分支时间线；④ `03/04` 的 `sim_config.json`/`timeline.json.branch` 仍是**占位空壳** | `demo/agent_sim.html` / `demo/whatif.html` / `demo/branch_timeline.html` |

**结论**：两方向不是二选一。A（优化模拟器）的精华＝给模拟器喂真实历史基底，本就是 B 的第一步。推荐走 **B（合并）**，分期落地（见 §6）。

---

## 2. 16 维整合清单（核心）

图例：提供方＝实际历史 / 模拟器 / 共建 / 新增；现状＝`specified`(03/04已设计) / `implemented`(代码已有) / `missing`(两边都没有，需新建)。
**显隐**：`显`=UI 可渲染；`隐`=字段必须存在但默认不上屏（驱动模拟/引擎）。

| # | 维度 | 提供方 | 现状 | 存储位置（具体文件+字段） | 显隐 |
|---|------|--------|------|--------------------------|------|
| 1 | 时空基准(year+经纬度) | 实际 | implemented | `places.json`(经纬度) + `assertions.time` + `control.seats[{lon,lat}]` | 显 |
| 2 | 政权实控状态 | 实际 | implemented | `data/<scene>/control.json`（schema 见 `03` §12）；sim 写入**终态** | 显 |
| 3 | 派系/立场动因 | 共建 | implemented(数据)/missing(模拟消费) | `persons[].faction` + `vocab.factions/parties`；sim 读为 `agent.factionDriver` | 隐（驱动） |
| 4 | 史料4层+诚实缺口 | 实际 | implemented | `assertions.jsonl`（`layer`:record/scholarship/inference/gap/conflict）；`gap.conf=0` + `lead` | 缺口显 / 参数隐 |
| 5 | 来源党派偏见 | 实际 | implemented | `sources[].party` + `vocab.stance_buckets`；sim 读为 `obs = true + bias(party)` | 隐 |
| 6 | 因果机制/规则引擎 | 模拟 | specified(04)/missing(落地文件) | **待建** `worlds/<w>/rules.yaml`（或 `sim/rules/<scene>.json`），声明式；把 `agent_sim` 硬编码抽出 | 隐 |
| 7 | 概率/不确定性传播 | 共建 | missing | **待建** `assertions[].dist`(gap→prior) + `sim_config` 参数 `dist`；替代现有 `confidence` 标量 | 隐 |
| 8 | 决策主体能动性 | 模拟 | specified(04)/partial(未绑真实) | `04` Phase3 agent；绑定 `persons[].id` 作 `agent.utility(state)→action` | 隐 |
| 9 | 后勤/补给约束 | 模拟 | partial(whatif局部)/missing(通用化) | **待建** `data/<scene>/logistics.json`（routes/capacity/attrition）或并入 `rules` | 隐 |
| 10 | 人口/经济基底 | 共建 | implemented(impact)/implemented(sim state) | `impact.json`(`deaths/mortality`) + sim `state.pop / landGini / eduGini` | 部分显 |
| 11 | 时间演化步长 | 模拟 | specified(03§5,04)/implemented(agent_sim tick) | `timeline.json`(year) + `sim_config.steps`；统一为**1 回合=1 年** | 轴显 / 内隐 |
| 12 | 反事实分支管理 | 模拟 | specified(03§5)/partial | `timeline.json` nodes[].branch + `assertions[].branch`(隐藏元数据) | 隐 |
| 13 | 反馈循环 | 模拟 | specified(04)/implemented(agent_sim) | `rules` 带 back-edge（控失→派变→再失）；`04` 阶层固化循环 | 隐 |
| 14 | 多政权并存交互 | 实际 | implemented(数据)/missing(模拟对抗) | `vocab.parties` + `control` per party；sim 做多 agent 对抗网 | 显 / 隐 |
| 15 | 可解释归因(provenance) | 共建 | implemented(实际)/missing(模拟) | 模拟输出带 `trace:[{mechanism,initialCondition,seed}]`；断言保 `source/lead` | 可选显 |
| 16 | 参数化初始条件 | 模拟 | specified(03§6)/missing(落地) | `03` `sim_config.initial_state_ref` + **待建** `data/<scene>/sim_ic.json`（year Y 的控制/人物/参数快照） | 隐 |

---

## 3. 两方向各自缺什么 → 整合动作

### A. 优化历史模拟器（模拟器单边）
**缺**（全来自实际历史基底）：#1 空间、#2 实控初值、#3 派系消费、#4 gap→未知、#5 偏见、#9 后勤通用化、#14 多政权对抗、#16 真实 IC。
**整合动作**：让 `agent_sim`/`whatif` 读 `worlds/`(或 `data/<scene>`) 数据——ControlLayer 实控作初始控制态、persons/factions 作 agent、sources 偏见作观测噪声。仅此一步即可让模拟器"不再悬空"。

### B. 合并（统一模型）
**实际历史缺、由模拟器补**：#6 机制文件、#7 概率 dist、#8 agency 绑 persons、#11 步长引擎、#12 branch 字段落地、#13 feedback 规则、#15 模拟 provenance、#16 IC 文件。
**模拟器缺、由实际历史补**：#1 空间、#2 实控、#3 派系、#4 缺口、#5 偏见、#14 多政权、#16 真实 IC。
**双方都弱、B 必须新加**：#7 概率分布（两边同时只有标量/阈值）、#9 全局后勤（whatif 只局部）、#15 模拟侧 provenance、#6 声明式 rules 文件（`agent_sim` 硬编码未抽出）。

---

## 4. "隐藏但必须存在"的 gates 落地

把用户"可以不显示但不能没有"钉进守门员，避免隐藏维度被悄悄删空：

- **新增 lint `E18`（维度字段存在性）**：任一 world 若 `world.json` 声明 `sim_enabled:true`，则必须存在 `sim_config.json` 且含 `engine / initial_state_ref / rules / steps / branches` 字段（rules 可为空数组，但**字段不可缺**）。
- **新增 build 校验**：`assertions.jsonl` 的 `gap` 层必须带 `dist`（即便退化为 `{type:"degenerate"}`），否则视为"假装确定"→ 拦下。
- 现有 `E17/W12`(control)、`W12`(party∈vocab)、`E11`(timeline.parent) 继续复用。
- 原则不变：外部来源进库前必过 lint；单一真值只在 `vocab.json` 定义。

---

## 5. 与 03 / 04 的关系

```
03 通用世界模型-schema.md  ──►  schema 骨架（worlds/、sim_config、timeline.branch、assertions layer）
04 evolution-rules.md      ──►  rules 骨架（三阶层、战争裁决、4 期路线）
本文 unified_dimensions.md ──►  维度级缝合 + 显隐裁决 + gates 兜底
                                  （把 03/04 的占位字段落到 16 维的具体存储 + 标记 missing 项）
```

**一致性待解决（重要坑）**：`agent_sim.html` 用的是"土地兼并+教育垄断"双引擎，而 `04` 设计的是"center/local/grassroot 三阶层"。合并前必须先统一机制本体——建议以 `04` 三阶层为权威，把 `agent_sim` 的双引擎重写为三阶层的一个**特例/实例化**，再抽出为声明式 `rules.yaml`（对应 #6）。

---

## 6. 落地分期（承接 04 的 Phase 1–4）

| 阶段 | 内容 | 对应维度 | 风险 |
|---|---|---|---|
| **阶段0（本文件）** | 维度契约定稿 + gates 兜底 | 全部 16 | 低（只改文档+lint） |
| **阶段1（A 的落地）** | `agent_sim`/`whatif` 消费真实历史基底跑锚定演示 | #1 #2 #3 #14 #16 | 低 |
| **阶段2（04 Phase2）** | 单场景确定性推演：声明式 `rules` + 手工 IC，算不同分支终局 | #6 #11 #12 #16 | 中 |
| **阶段3（04 Phase3）** | Agent 模型接真实 `persons`；多政权对抗 | #8 #14 #3 | 中 |
| **阶段4（04 Phase4）** | Monte Carlo + 概率分布 + provenance 输出 | #7 #13 #15 | 高 |

阶段0 已完成（本文）。下一步可从阶段1（数据打通）或先补 #7（概率维度单点垂直打通）切入。
