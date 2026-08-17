# 分支事件模板（v0.57·跨事件通用）

> **设计目标**：参考 `demo/whatif.html` 的 ok/warn/bad 可视化与可行性校验哲学，做成**场景无关**的声明式模板。任何历史事件只要提供 `seats/transitions/rules/state/params`，即可复用同一组纯函数派生五类事件。

## 一、为什么是模板而非硬编码

辽东反事实推演会自然地暴露五类高价值结构：

1. **关键偏离** —— 史实路线在该年何处被打破（涉及哪些治所、用到哪些规则）
2. **后勤瓶颈** —— 受季节/距离/半径/冬季系数影响的具体投送
3. **朝堂内耗** —— 派系振幅 × 弹性 = 折扣
4. **势能转折** —— 累计偏离触发临界点（5/10/15/20 处）
5. **分支结局** —— 终局吻合度与偏离量级判定

这五类与具体历史事件（辽东、秦灭六国、赤壁、参合陂…）无关——任何有 seats/transitions/rules/state 的场景都能派生。所以放进 SIM_RULES / SIM_ENGINE 通用层而非辽东特例。

## 二、合约（Schema）

```jsonc
{
  "kind": "divergence|logistics|faction|momentum|summary",   // 必填
  "year": 1621,                                                // 必填
  "place_id": "shenyang",                                      // 可选
  "place_name": "沈阳",                                        // 可选
  "severity": "info|warn|bad",                                 // 必填，对应 whatif ok/warn/bad
  "description": "...",                                        // 可选，叙事文本（一般由模板派生）
  "evidence": { /* 可追溯字段，详见下表 */ }
}
```

| kind      | evidence 字段                                                                  | 触发条件                                                                                |
|-----------|-----------------------------------------------------------------------------|--------------------------------------------------------------------------------------|
| divergence | `rule`(R1/R6/...)、`real_to`、`new_to`                                       | `divergences` 数组中命中 `keySeats`（默认辽东五镇） → `bad`；其他偏离按 `faction` 标记 → `warn`/`info` |
| logistics | `factor`、`dist`、`radius`、`season`、`winter`、`base`、`winterPenalty`     | `logisticsPenalty > 0` 且某 transition 的 `physicalFactor < 0.95` 且 `over>0` 或 `winter`   |
| faction   | `amp`、`inf`、`pen`、`active`(活跃派系计数)                                  | `factionInfightAmp > 0`；扫描全时间轴取 `pen` 最大年；若 `pen > 0.05` 发出                |
| momentum  | `cum`、`threshold`                                                            | 累计偏离达 5/10/15/20 阈值触发；≥15 → `bad`，否则 `warn`                                  |
| summary   | `cum`、`match`、`total`                                                       | 终局：偏离=0 → `info`；<10 → `warn`；否则 `bad`                                          |

## 三、视觉契约（whatif 同源）

CSS 三个 severity 类：

```
.info  → 蓝色边 + 趋势徽章 (#58a6ff)
.warn  → 黄色边 + 风险徽章 (#d29922)
.bad   → 红色边 + 危局徽章 (#f85149)
```

叙事正文中：
- `<span class="hl">` → 红色高亮（关键偏离/超距/触发条件）
- `<span class="ok">` → 绿色高亮（在半径内/回到史实）

## 四、跨事件复用示例：秦灭六国

1. 数据：另建 `data/qin_mie_liu_guo/{seats,transitions,rules}.json`，只要治所有 `lon/lat`、transitions 有 `year/place_id/from/to`、rules 有 `id/condition/effect`，引擎契约不变。
2. 场景 keySeats（可选）：在 `SIM_RULES` 中加 `keySeats:['咸阳','邯郸','郢','临淄','大梁']`；不填则用默认辽东五镇（无关键命中时降级为 warn/info）。
3. 复用本模板：`computeBranchEvents()` 直接读新场景的 `divergences/trace/transitions/IC.factions` 即可——纯函数，对新场景零改动。

## 五、API 探针

`window.SIM_ENGINE` 新增四个探针：

```js
SIM_ENGINE.branchEvents()              // → 当前分支的事件数组
SIM_ENGINE.branchEventHTML()           // → #be 面板 innerHTML（用于截图/回归）
SIM_ENGINE.branchEventKinds()          // → ['divergence','logistics','faction','momentum','summary']
SIM_ENGINE.branchEventTemplateSchema() // → 合约描述（kind_options, severity_options, required, optional）
```

无头探针 `tools/probe_sim_engine.js` 中以 9c 段断言：

- 默认重放：仅 1 个 summary 事件（0 偏离），0 个其他种类
- B5_logistics：含 logistics + summary + divergence + momentum
- B6_both：含 faction + logistics + summary + divergence + momentum
- 事件字段含 `year/kind/severity` 且 severity ∈ {info, warn, bad}

## 六、与 whatif 的关系

| whatif（`demo/whatif.html`）                          | 分支事件模板（v0.57）                                          |
|----------------------------------------------------|-----------------------------------------------------------|
| 单场景硬编码：萨尔浒之役路网 + 季节 + 粮草                          | 通用：任意 seats/transitions/rules 派生五类事件                       |
| 可视化：可行/有风险/不可行 三档（绿/黄/红）                              | 同款：info/warn/bad（蓝/黄/红）                                 |
| 输入：固定路线 + 兵力调度                                              | 输入：当前反事实分支的 `state/divergences/trace/params/IC.factions` |
| 输出：单段预测/违规列表                                                | 输出：按年聚合的事件链（年终态+季内瓶颈+朝堂态势）                              |

whatif 是「单场景深度演示」；模板是「多场景声明式契约」。两者共享可视化语义，不共享代码。

## 七、版本演进（未来）

- v0.58：增加 `kind: 'comparable'` —— 引用一个真实历史类似案例（如「本分支类似萨尔浒之役明方坚守场景」），从 `data/comparables.json` 派生。
- v0.59：增加 `kind: 'agent_diagram'` —— 把 divergence 事件投影到分支时间轴（timeline 分支视图）。
- v0.60：暴露 `branchEventNarrative(event, ctx)` 为可重写钩子，让场景自有叙事。