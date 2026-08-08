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
| 实际控制辖区图层 | 时间滑块看县/国家控制权易手（明方红→清方绿），治所最近邻 Voronoi 示意辖区 | 战役图/县页右侧「控制权」面板 |
| 一键史料 ingestion 管线 | 文本→断言四层→年号归一化→校验→可选跑 gates，实现「导入即呈现」最小闭环（heuristic/llm/fixture 三后端） | `tools/ingest.py` |
| 全国尺度时序主干 | 年号↔公元覆盖唐/宋/元/辽/金/隋/明/清（含「元/正」年号名），`dynasty_at()` 反查公元年属哪些朝代 | `tools/reign_era.py` |
| 反事实分支（数据层） | 时间轴带 `branch` 节点，N06/N07 自动聚成冲突组 | world 的 `timeline.json` |
| 声明式扩展 | 新增一个 world = 往 `data/scenes.json` 加一条，hub/portal 自动扫描 | `data/scenes.json` |
| 五闸门 CI | lint → test → leads → build → interaction，fail-fast | `python tools/gates.py --strict` |
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
            │    lint → test_assertions → leads → build → interaction  │
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

### 3.1 实际控制层（空间控制权维度，v0.10）

断言模型负责「谁说了什么」，实际控制层负责「谁在什么时候按住哪块地」——
是 assertion-driven 在**空间维度**上的平行扩展，二者共用同一套 parties 词表与诚实边界。

- **事实只存控制权，不存边界**：`data/control_liaodong.json` 每条 segment = `{place_id, party, start, end, basis, note}`，
  `end:null` 表示延续至今（本切片时间窗 1644 之后）。几何**不入库**——由 `build.py` 按各县
  `primary_place` 的 lon/lat 推 `control_seats`，前端 `control_layer.js` 在合成网格上做
  **治所最近邻（Voronoi 近似）** 现算辖区。日后换 CHGIS 真实边界，只需改 build 注入，前端不动。
- **年份驱动重算**：`rebuild()` 只在 year/scope 变化时才重算离屏 ImageData；纯视图变化只 `repaint()`，
  保证拖拽缩放流畅。某城 1617 属明方、1625 属清方，就是同一个 `controllerAt(seat,year)` 按年查表得来。
- **县 / 国家两级范围**：
  - 县范围：13 个治所各画边界，呈现「县与县的拼图」；
  - 国家范围：只画**跨党派外缘边界**、省略同党派内部县界，视觉上把同党县**合并成国家板块**，
    图例同步显示「明方 N 县 / 清方 M 县」的全国统计（`ControlLayer.tally(year)`）。
- **诚实边界落到几何**：面板注「示意辖区（按治所最近邻）· 控制权据明末清初辽东史实」；
  辽南沿海明方反攻（东江镇）等拉锯处记在 segment `note` 里，属已知缺口，不冒充精确边界。
- **虚构 world 跳过**：`IS_ABSTRACT` 为真时 `county.js` 不 `setup` 控制层，面板隐藏——无真实地理不该硬套辖区。
- **零交互死区**：控制层 `<canvas>` 置于地形层之上、SVG 之下，`pointer-events:none` + 不进 `UI_SEL`，
  绝不重新制造此前修过的「点击全死」问题。
- **守门**：`lint.py` 新增 `check_control`（E17/W12）校验 place_id 是已登记地点、party 在词表、
  start/end 整数且 end≥start、同地点时段不重叠、每个县治所有记录；`probe_interaction.js` 新增 6 项
  真实点击断言（含「#controlCv 非透明像素」「年份驱动明方→清方」）。

### 3.2 ingestion 管线 + 全国尺度时序主干（v0.11，北极星「导入即呈现」的最小闭环）

这是把「数据库 + LLM」两块缺口从 0 推到可用的最小实物——**不需要先搭重数据库或历史 GIS**。

**`tools/ingest.py`（ingestion 管线）**
- 输入史料文本（`--source` 文件或 `--text`），输出与 demo `assertions.jsonl` **完全兼容**的 JSONL。
- 三后端可换：`heuristic`（无 key 冒烟测试，用 `reign_era` 找年号提及，证明机械链路通顺）、
  `llm`（openai 兼容 Chat API，需 `LLM_API_KEY`/`LLM_BASE_URL`/`LLM_MODEL`，生产级抽取）、
  `fixture`（直接载入一份已抽 JSON，验证「LLM 产出的结构能接住」）。
- 抽取契约复用 `tools/spikes/extraction_demo/prompt.md`（断言四层 + 年份一律留年号 + 反幻觉约束）。
- 归一化：`reign_era.normalize_year(era_text)` 把「万历四十七年三月」变公元 1619，写回 `time.start`——
  **所有史料共用一把公元尺**，且年号换算错误能被单测+闸门抓住（不会像手工填 lon/lat 那样静默留白）。
- 守门：校验断言四层 schema + 年份可归一化；`--run-gates` 写完直接跑全闸门，脏数据进提交前拦住。
- `--scene <id>` 把归一化断言追加进已注册场景的 `assertions.jsonl`，即「导入即呈现」。

**`tools/reign_era.py`（时间本体接缝，确定性代码而非 AI）**
- 年号纪年是「封闭集合的查表 + 算术」，用数据表 + 纯函数比让 AI 现猜更准、可审计、零幻觉。
- `ERAS` 内置唐/宋/元/辽/金/隋/明/清常用年号（seed，可被单测钉死）；`DYNASTIES` 朝代跨度表，
  `dynasty_at(year)` 反查某公元年属哪些朝代（1644 同时属明/清，供控制层「国家范围」朝代归属）。
- 生产级「全朝代逐帝年号」应另存 `data/eras.json`，由 `load_eras()` 载入（单一真值、DH 校对后一处更新全站重算）
  ——这把「数据/代码」分离，避免长表硬编码进源码。
- 月日农历转换（`lunar_to_solar`）留 TODO 桩：历史朔闰与今历有系统差，需接历史朔闰表后再补并补单测。

## 4. 工具链（五闸门 + 辅助）

| 工具 | 职责 |
|---|---|
| `lint.py` | 守门员：空字段是 bug（E07/E10）、时间轴脱钩（W05）、未引用来源（W03）、gap 缺 lead（W09）等 |
| `test_assertions.py` | 不变量测试：断言命名空间/引用闭合，重写保险 |
| `leads.py` | 扫所有 world 的 gap 层 → 聚合 `data/leads.json`（可认领线索） |
| `build.py` | 编译：读各 world 文件 → 归一化 edges → 注入 edge_types → 写 `demo/data.js` |
| `gates.py` | 编排上述五步，`--strict` 下 warning 也算失败，CI 用；`--no-interaction` 可跳过浏览器闸门 |
| `probe_interaction.js` | **交互闸门**：零依赖静态服务 + 无头浏览器，用 CDP 发**真实鼠标事件**断言「点得动」。抓的是前四道抓不到的一类缺陷——数据全对、编译全对、截图正常，但浏览器里所有 click 监听器都是死的 |
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
5. **「渲染正确」不等于「点得动」** → `setPointerCapture` 在 pointerdown 阶段夺取捕获会让 Chromium 把 click 重定向到捕获元素，地图内所有监听器静默失效；数据闸门与截图都看不出来。必须有真实输入事件的交互闸门。
5. **诚实边界** → 地形网格外的县显式标「地形网格外」绝不伪造高程；虚构 world 不硬套地理栏目。
6. **推送去 PAT** → GitHub App 安装令牌，私钥 gitignore、一次性 URL、输出打码。

## 8. 当前数据规模（v0.9）

- 世界：**23**（14 历史：1 battle 萨尔浒 + 13 county；9 虚构：小说 9 副本）
- 断言：**290**（record 182 / scholarship 49 / inference 19 / gap 40）
- 可认领线索：**40** · 来源：**31（跨 world 去重）**
- 五闸门：`tools/gates.py --strict` 全绿（EXIT=0），含 12 项真实点击断言
- 提交：`bd46fef`(v0.9) → `3ced0a4`(App 推送) → `2d1d3d8`(封装) 均已上 GitHub main

## 9. 接下去可做的（按北极星优先级）

1. **M6 演化引擎**：让 `sim_config` + `timeline.branch` 真正驱动世界前进、产生分叉（最硬也最关键）。
2. **LLM ingestion**：接 LLM-API 把原文 → `ingest.py` 的 spec，把「任意文字→world」从确定性装配走向自动抽取。
3. **地图导入泛化**：接受用户地图（图片/GeoTIFF/坐标），投影改动态并集边界（已从 ASTER 写死改为动态，是起点）。
4. **hub 入口**：给 9 个虚构 world 在枢纽页加关系图入口卡片。
