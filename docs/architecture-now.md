# 小菜狗的文明图景 · 当前功能与逻辑架构梳理（v0.9 快照）

> 写于 2026-08-08，作为「现在到底有什么、怎么搭的」的基准快照。
> 北极星目标见 `docs/02-北极星与架构演进.md` 与 `docs/03-通用世界模型-schema.md`。

## 0. 一句话定位

**断言驱动的文明沙盒**：导入「文字资料 + 地图」就把信息呈现出来；并支持「任意文字资料生成一个世界」+「给初始条件让世界自由演化 / 反事实分支」。
v0.9 已把**断言模型、双模渲染、四闸门、9 个小说 world、GitHub App 推送**全部跑通；**LLM 抽取（ingestion）** 与 **演化引擎（simulation）** 尚未实现，但内核已是这些目标的通用基底。

## 1. 现在真实可用的功能（用户能感知）

| 功能 | 现状 | 入口 |
|---|---|---|
| 历史切片浏览（14 个） | 枢纽地图打点 + 通用县页地理投影（ASTER 高程网格） | `demo/index.html` → `demo/county.html?scene=xxx` |
| 虚构 world 浏览（9 个） | 无坐标，自动以**关系图**呈现（人=紫点/地=白点/按 edge_types 上色） | `demo/county.html?scene=novel_fandao_3` |
| 立场靠来源派生 | 明/清/朝鲜三方 + 小说作者/系统/角色视角，自动分桶、算共振度 | 县页「立场」面板 + `resonance.py` |
| 断言四层 + 缺口→线索 | record/scholarship/inference/gap；portal 汇总 40 条可认领线索 | `demo/portal.html` |
| 反事实分支（数据层） | 时间轴带 `branch` 节点，N06/N07 自动聚成冲突组 | world 的 `timeline.json` |
| 声明式扩展 | 新增一个 world = 往 `data/scenes.json` 加一条，hub/portal 自动扫描 | `data/scenes.json` |
| 四闸门 CI | lint → test → leads → build，fail-fast | `python tools/gates.py --strict` |
| 无 PAT 推送 | GitHub App 安装令牌，私钥本地不入库 | `node tools/push_app.js` |

## 2. 逻辑架构（分层 + 数据流）

```
            ┌─────────────────────────────────────────────────────────┐
 浏览器 ←── ① 渲染/前端层   portal.html · index.html+hub.js · county.js   │
            │              （IS_ABSTRACT 双模：地理投影 / 关系图）         │
            └───────────────────────────┬─────────────────────────────┘
                                         ↑ 读
            ┌───────────────────────────┴─────────────────────────────┐
            │ ② 编译产物 demo/data.js（build.py 生成，勿手改）            │
            │    SANDBOX_DATA + 每 world 注入 edge_types / 归一化 edges  │
            └───────────────────────────┬─────────────────────────────┘
                                         ↑ 由
            ┌───────────────────────────┴─────────────────────────────┐
            │ ③ 守门工具链 tools/gates.py --strict（fail-fast）          │
            │    lint → test_assertions → leads → build                │
            │    + ingest.py(装配) · resonance/route_strain(历史专用)    │
            └───────────────────────────┬─────────────────────────────┘
                                         ↑ 读
            ┌───────────────────────────┴─────────────────────────────┐
            │ ④ 数据层 · 每 world 8~9 文件 (data/<dir>/)                 │
            │    sources/places/persons/events/edges/timeline/          │
            │    sim_config/vocab + assertions.jsonl(四层)              │
            │    23 worlds = 14 历史(1 battle+13 county)+9 虚构         │
            └───────────────────────────┬─────────────────────────────┘
                                         ↑ 喂
            ┌───────────────────────────┴─────────────────────────────┐
            │ ⑤ 注册表 & 受控词表（单一真值）                            │
            │    scenes.json(声明式注册) · 每 world vocab.json          │
            │    parties/party_bucket/edge_types · 立场靠来源派生        │
            └─────────────────────────────────────────────────────────┘

 ⑥ 推送层 push_app.js（GitHub App 安装令牌）→ 一次性 URL 推送整仓
 ╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌╌
 北极星（规划中·未实现）：LLM ingestion（任意文字→world）· simulation 演化引擎
 · 全时段全地域地图导入（现写死辽东 ASTER 网格）
```

## 3. 核心数据模型

**一个 world = 目录 `data/<key>/` 下 8~9 个文件：**
- `sources.json` 来源（含 `party` 字段，是立场派生的根）
- `places.json` 地点（历史 world 有 lon/lat；虚构 world 无 → 触发 IS_ABSTRACT）
- `persons.json` 人物
- `events.json` 事件（带 `subject:"event:xxx"` 钩子，挂时间轴）
- `edges.json` 关系（`type` + `label`，按 per-world `edge_types` 上色）
- `timeline.json` 时间轴（含 `branch` 反事实节点）
- `sim_config.json` 演化配置（**现占位**，尚未驱动世界前进）
- `vocab.json` 本 world 受控词表（parties/party_bucket/edge_types）
- `assertions.jsonl` 断言流（四层，每行一条 JSON）

**断言四层（立场派生的载体）：**
- `record` 一手/二手史料直述（182）
- `scholarship` 学界综述/二手（49）
- `inference` 由已知推未知，含反事实分支（19）
- `gap` 证据不足处，写成可认领线索（40 → 聚合进 `data/leads.json`）

**立场靠来源派生（不手贴标签）：** `source.party → vocab.party_bucket → 分桶`；
改一处词表，全站共振度自动重算。这是「可审计」的前提。

## 4. 工具链（四闸门 + 辅助）

| 工具 | 职责 |
|---|---|
| `lint.py` | 守门员：空字段是 bug（E07/E10）、时间轴脱钩（W05）、未引用来源（W03）、gap 缺 lead（W09）等 |
| `test_assertions.py` | 不变量测试：断言命名空间/引用闭合，重写保险 |
| `leads.py` | 扫所有 world 的 gap 层 → 聚合 `data/leads.json`（可认领线索） |
| `build.py` | 编译：读各 world 文件 → 归一化 edges → 注入 edge_types → 写 `demo/data.js` |
| `gates.py` | 编排上述四步，`--strict` 下 warning 也算失败，CI 用 |
| `ingest.py` | `parse` 启发式预抽取 + `assemble` 把 spec 装配成 world 并注册（确定性，不含文学理解） |
| `resonance.py` / `route_strain.py` | 辽东专用：三方共振度、路线 strain（历史 world 用） |
| `push_app.js` | GitHub App 安装令牌推送，替代 PAT |

## 5. 前端双模渲染（IS_ABSTRACT）

`demo/county.js` 启动时判定：
```
IS_ABSTRACT = META.fictional || !places.some(p => 数值 lon/lat)
```
- **有坐标（历史）**：`dataBounds()`→辽东投影，`drawBase/drawTerrain` 画高程，`drawDynamic` 画事件/断言/地点。
- **无坐标（虚构）**：`dataBounds()`→画布边界，`drawBase/drawTerrain` 跳过，`drawDynamic` 改走 `drawAbstractGraph`（人物紫点 / 地点白点 / 按 per-world `edge_types` 上色连线）。
- **图例数据驱动**：`renderEdgeLegend()` 只画该 world 实际存在的 edge_types——`互市/部族同盟` 这类辽东专属栏目**绝不出现在小说 world**。直接落地用户那句「并非所有地图都有这些栏目」。

## 6. 北极星 vs 当前差距（诚实边界）

| 北极星目标 | 现状 | 缺什么 |
|---|---|---|
| 全时段全地域：导入「文字+地图」即呈现 | 断言模型 + 双模渲染通用；但地图导入写死辽东 ASTER 网格 | 地图导入泛化（用户图/GeoTIFF/坐标 + 动态投影） |
| 任意文字→一个世界 | ingest.py 做确定性装配；9 小说副本已验证 | LLM 抽取「文学理解」层（把原文→spec） |
| 世界自由演化 / 反事实 | 时间轴 branch + sim_config 数据层已建 | 演化引擎（agent/规则驱动世界前进、产生分叉）未实现 |
| 立场语义/缺口语义统一 | 真实史料=来源视角/证据不足；虚构=叙述者视角/作者未写 | 同一内核已验证可服务两者 |

## 7. 关键设计决策（踩坑沉淀）

1. **词表散落是债务** → 所有分类规则（立场/关系类型）只放 `vocab.json` 一处，消费者只读它。
2. **空字段是 bug** → 空引文/空断言在 UI 渲染为空白，但会污染下游计算；`lint.py` 守门，build 前必跑。
3. **声明式 > 硬编码** → hub/portal 扫描 `scenes.json` 自动渲染，新增 world 零前端改动。
4. **回归测试是重写保险** → 大改前先有不变量测试 + 视觉对照 + lint 三道闸门。
5. **诚实边界** → 地形网格外的县显式标「地形网格外」绝不伪造高程；虚构 world 不硬套地理栏目。
6. **推送去 PAT** → GitHub App 安装令牌，私钥 gitignore、一次性 URL、输出打码。

## 8. 当前数据规模（v0.9）

- 世界：**23**（14 历史：1 battle 萨尔浒 + 13 county；9 虚构：小说 9 副本）
- 断言：**290**（record 182 / scholarship 49 / inference 19 / gap 40）
- 可认领线索：**40** · 来源：**31（跨 world 去重）**
- 四闸门：`tools/gates.py --strict` 全绿（EXIT=0）
- 提交：`bd46fef`(v0.9) → `3ced0a4`(App 推送) → `2d1d3d8`(封装) 均已上 GitHub main

## 9. 接下去可做的（按北极星优先级）

1. **M6 演化引擎**：让 `sim_config` + `timeline.branch` 真正驱动世界前进、产生分叉（最硬也最关键）。
2. **LLM ingestion**：接 LLM-API 把原文 → `ingest.py` 的 spec，把「任意文字→world」从确定性装配走向自动抽取。
3. **地图导入泛化**：接受用户地图（图片/GeoTIFF/坐标），投影改动态并集边界（已从 ASTER 写死改为动态，是起点）。
4. **hub 入口**：给 9 个虚构 world 在枢纽页加关系图入口卡片。
