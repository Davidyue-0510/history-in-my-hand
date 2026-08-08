# 通用世界模型 Schema

> 配套文档：[`02-北极星与架构演进.md`](02-北极星与架构演进.md)
> 本文定义"一个 world"在磁盘上的文件结构与时序约定。辽东 demo 将作为第一个 world 迁移至此结构（见 §8）。

## 1. 目录结构

```
worlds/
  _template/             # 新 world 骨架生成器读取的模板（替代原 tools/seed_liaoxi.py 思路）
  liaodong/              # 第一个 world（原 data/ 下的辽东切片整体迁移而来）
    world.json           # 清单：id / 标题 / 类型 / 时代范围 / 地图引用 / vocab 引用
    vocab.json           # 本 world 自己的 parties/factions/sources 类型 + 立场分桶规则
    sources.json
    places.json
    persons.json
    events.json
    edges.json
    assertions.jsonl
    timeline.json        # 分支时间线（alt-history / 演化分叉）
    sim_config.json      # 演化引擎配置（M6 才用，先占位）
```

要点：**`slice` / `scene` 概念升级为 `world`**；`demo/` 下的页面改为扫描 `worlds/`，
不再依赖 `data/scenes.json` 的硬编码顺序（仍保留一个 `worlds/index.json` 做注册，等价于原 scenes.json 的 order）。

## 2. world.json（清单）

```json
{
  "id": "liaodong",
  "title": "明末清初 · 辽东走廊",
  "kind": "geographic",            // geographic | fictional | hybrid
  "era_scope": "1570-1650",       // 人类可读的时代范围
  "description": "辽东走廊从萨尔浒到宁远、松锦的军政网络……",
  "geo_ref": {                     // 地图引用；fictional 可无
    "type": "raster",              // raster(图片) | geotiff | coords
    "src": "assets/liaodong.tif",  // 用户导入的地图
    "crs": "EPSG:4326",
    "bounds": [122.0, 40.0, 126.8, 43.3]
  },
  "vocab_ref": "vocab.json",
  "primary_place": "shenyang_cheng",
  "honesty": {                     // 诚实边界策略，按 world 可调
    "no_fabricated_geometry": true,
    "mark_generated_geometry": true
  }
}
```

## 3. vocab.json（每个 world 自带，单一真值）

```json
{
  "_party_notes": "本 world 的立场来源说明，改这一行全 world 共振度重算",
  "parties": {
    "ming_official": {"label": "明廷官方", "stance": "official_contemporary"},
    "qing_hist":    {"label": "清修官史", "stance": "official_enemy"}
  },
  "factions": {                    // 虚构 world 用：阵营
    "sect_a": {"label": "某某宗", "stance": "first_person"}
  },
  "stance_buckets": {              // 分桶规则：stance -> 桶
    "official_contemporary": "contemporary",
    "official_enemy": "enemy",
    "first_person": "intra"
  },
  "bucket_labels": {
    "contemporary": "当事方叙事",
    "enemy": "对手方叙事",
    "intra": "阵营内叙事"
  }
}
```

规则：**任何"立场分类"只在本文件里定义**，消费者（共振 / 渲染 / lint）只读它。

## 4. 实体与断言（泛化，复用现有形状）

- `sources.json`：`{ "sources": [ { "id", "title", "party", "stance", "url"? } ] }`
  —— `party` 必须出现在本 world 的 `vocab.json`。
- `places.json` / `persons.json`：沿用现有字段；fictional world 可加 `fictional: true`。
- `events.json`：事件必须带 `subject`（指向 `event:<id>`），供断言引用（lint I9 不变）。
- `assertions.jsonl`：每行一条，字段：

```json
{
  "id": "L001",
  "layer": "record",              // record | scholarship | inference | gap | conflict
  "subject": "event:xxx_founded", // 或 place:/person:/world:
  "source_id": "ming_shilu",
  "party": "ming_official",        // 从 source 派生，lint 校验与 vocab 一致
  "claim": "广宁卫于某年置。",
  "quote": "《明实录》：……",        // record 层建议有；gap 层可空
  "confidence": 0.8,
  "quotes": [                      // 可选：直引摘录（CONTRIBUTING 已约定）
    {"text": "……", "source_id": "ming_shilu", "ref": "卷123"}
  ]
}
```

`layer` 在通用世界下的语义：
- `record`：原文直接说法
- `scholarship`：学界考据
- `inference`：推论 / 设定推导
- `gap`：缺口（史料证据不足 / 小说作者未写明）
- `conflict`：不同来源冲突（含反事实分支的"另一选择"）

## 5. timeline.json（分支时间线）

```json
{
  "nodes": [
    {"id": "t1", "label": "萨尔浒之战", "year": 1619, "parent": null},
    {"id": "t2", "label": "广宁陷",     "year": 1622, "parent": "t1"},
    {"id": "t2_alt", "label": "假如广宁未陷", "year": 1622, "parent": "t1",
     "branch": {"alternative_choice": "明军死守广宁", "label": "反事实A"}}
  ]
}
```

呈现层据此画"主时间线 + 分叉支线"；反事实分支即历史假设的可视化。

## 6. sim_config.json（演化引擎，M6 占位）

```json
{
  "engine": "hybrid",              // rule-based | llm-step | agent | hybrid
  "initial_state_ref": "timeline.json#t2",
  "rules": ["assets/rules/liaodong.yaml"],
  "steps": 12,
  "branches": [
    {"at_event": "t2", "alternative_choice": "明军死守广宁", "label": "反事实A"}
  ],
  "output": "worlds/liaodong/sim_runs/run_001.json"
}
```

最小可用原型先做 `llm-step`：给定初始状态 + 一步规则，让 LLM 推演"下一步发生了什么"，
产出新的 timeline 节点，循环若干步。规则文件先手工、后从抽取沉淀。

## 7. ingestion 接口约定（文本 → 世界模型）

历史史料抽取是「导入即呈现」的真正瓶颈（不是 UI、也不是数据库）。已落地的管线：

- **工具**：`tools/ingest.py`
  - `python tools/ingest.py --source 某史料.txt --provider llm --scene <id> --run-gates`
  - `python tools/ingest.py --provider fixture --fixture extracted.json`（验证 LLM 形状的 JSON 能接住）
  - `python tools/ingest.py --source 某史料.txt --provider heuristic`（无 key 冒烟测试）
- **三后端**：`heuristic`（无 key，用 `reign_era` 找年号提及，证明机械链路通顺，非生产抽取） /
  `llm`（openai 兼容 Chat API，需 `LLM_API_KEY`/`LLM_BASE_URL`/`LLM_MODEL`，生产级） /
  `fixture`（直接载入已抽 JSON）。
- **抽取规范**：复用 `tools/spikes/extraction_demo/prompt.md`——断言四层 + 年份一律留 `era_text` 年号
  （换算交给 `reign_era`）+ 反幻觉约束（只抽原文/学界公认，gap 不强行合并）。
- **时间本体接缝**：每条 `time.era_text`（如「万历四十七年三月」）经 `tools/reign_era.py`
  `normalize_year()` 归一化为公元年写回 `time.start`，**所有史料共用一把公元尺**。
- **输出兼容**：产物是 JSONL，字段与 demo `assertions.jsonl` 完全一致，可直接喂 `build.py`；
  `--scene <id>` 追加进已注册场景即「导入即呈现」。
- **守门**：ingestion 产物必须过现有闸门（lint/test/leads/build）；年号换算单测
  （`tools/test_reign.py`，已进 `gates.py`）钉死 `ERAS` 数据，脏年号会被拦在提交前。

人工校验环节（DH）只补 `quote` / 修正 `party`，不重写结构。

## 8. 辽东 demo → 通用 world 迁移对照

| 现有 | 通用 world |
|---|---|
| `data/scenes.json` 的 order + 每切片注册 | `worlds/index.json`（world 级注册） |
| `data/<县>/` 六件套 | `worlds/liaodong/<县作为子实体>` 或整体作为一个 world 的六件套（先整体迁移，子切片作为 places/events） |
| `data/vocab.json`（全局明清） | `worlds/liaodong/vocab.json`（world 级） |
| `demo/hub.js` 扫描 `SD.scenes` | `demo/hub.js` 扫描 `worlds/`，多 world 可切换 |
| `tools/seed_liaoxi.py` | `tools/seed_world.py`（通用骨架生成器，读 `_template/`） |
| 无 time 分支 | 新增 `timeline.json`（辽东先单链，预留分叉） |

迁移原则：**数据不丢、闸门不破**。先整库迁到 `worlds/liaodong/`，跑通四闸门全绿，再逐步子结构化。

## 9. 闸门 / lint 如何扩展

- `lint.py`：现有规则（E07/E10/W07/I9/W11…）全部复用；新增：
  - `W12` 断言 `party` 必须命中本 world `vocab.json` 的 `parties`。
  - `W13` `world.json.geo_ref` 存在时，places 的 lon/lat 应落在 bounds 内（越界标 OFF_GRID，不报错）。
  - `E11` `timeline.json` 分支节点的 `parent` 必须存在。
- `gates.py --strict`：四闸门不变；M3 起在 build 后加一步"ingest 自检"（抽出来的断言能过 lint）。

## 10. 诚实原则在 schema 里的落点

- `world.json.honesty.no_fabricated_geometry=true`：地图外 / 无据几何，渲染层留白 + 横幅（沿用 OFF_GRID 思路）。
- `layer:gap`：永远显式，不偷偷填。
- `quotes[]`：可质证，设定 / 史料出处可追。
- 虚构 world 若定位娱乐向，可降低 `quotes` 强制度，但 `gap` 仍保留（作者没写=缺口）。

## 11. 交互与扩展接口（v0.9.1 新增字段 + 四个接缝）

### 11.1 新增可选字段（均向后兼容，缺则优雅降级）
- `places[].intro` / `aliases` / `significance`：地点介绍面板内容（点击地图地点即切换显示）。
- `persons[].intro`：人物简介（人物视图"断言"页上方显示）。
- `persons[].influence`：**构建期由 build.py 计算**（统计引用该人物的 `record`/`scholarship` 断言数），前端据此把"关联人物"按史料记载量定大小。不手写。
- `events[].actors: [{person, role, year}]`：事件参与者，驱动"轨迹时间线"与"事件影响"页。
- `edges[].from` / `edges[].to`：关系起止年（可选），供"关联人物"按时间窗过滤；缺则展示全部。

### 11.2 四个扩展接缝（全部喂入同一 world 模型，断言为审计层）
| 包 | 协议 | 具体实现（占位） | 用途 |
|---|---|---|---|
| `tools/extractors/` | `BaseExtractor.extract(text, meta) -> WorldSpec` | `TemplateExtractor` | 文本 → world（LLM 抽取即插即用，ingest 装配不变） |
| `tools/enrichers/` | `BaseEnricher.enrich(entity) -> {intro,aliases,significance}` | `TemplateEnricher` | 补全地点/人物简介（LLM 补全即插即用） |
| `tools/datasources/` | `DataSource.fetch(query) -> [record]` | `CBDBAdapter` / `CHGISAdapter` | 外接学术库；**运行时下载不打包入 git** |
| `tools/mapproviders/` | `MapProvider.load(region) -> grid` | `AsterMapProvider`（真实）/ `UserGeoTIFFProvider`（占位） | 地图源可插拔；用户 GeoTIFF/坐标 → 动态投影 |

### 11.3 单一真值原则
所有接缝只产出 `places/persons/events/edges/assertions`，绝不绕过断言层。校验仍走四闸门（lint/test/leads/build），外部来源进库前必须过 lint。

### 11.4 人物视图（county.js）
点选人物展开多标签：断言（默认）/ 轨迹（events.actors 排序，可按 year 时间窗过滤）/ 关联人物（edges+influence，点大小=史料记载量，点密集=影响力集中；点击跳转）/ 事件影响 / 立场剖面（按 source.party 统计）/ 史料缺口 / 比较·反事实（占位，待 M6 演化引擎）。抽象图模式下选中人物会高亮其关系网（ego network）。

## 12. 空间控制权数据（control_liaodong.json）

断言模型描述「谁说了什么」，空间控制权数据描述「谁在何时按住哪块地」——是 assertion-driven 在**空间维度**的平行扩展，二者共用 `vocab.json` 的 `parties` 词表与同一套诚实边界。

```json
{
  "_comment": "辽东实际控制态势（v0.10）。几何不入库，由 build.py 按各县 primary_place 推 control_seats，前端 Voronoi 近似。",
  "control": [
    {"place_id":"fushun","party":"明方","start":1368,"end":1617,"basis":"明抚顺千户所","note":""},
    {"place_id":"fushun","party":"清方","start":1618,"end":null,"basis":"抚顺陷落 1618","note":"李永芳降"},
    {"place_id":"shenyang_cheng","party":"明方","start":1368,"end":1620,"basis":"明沈阳中卫","note":""},
    {"place_id":"shenyang_cheng","party":"清方","start":1621,"end":null,"basis":"沈阳陷落 1621","note":"后金迁都盛京"}
  ]
}
```

**字段约束（由 `lint.py` 的 `check_control`（E17/W12）守门）：**
- `place_id` 必须是某**县切片** `places.json` 已登记的地点（即 build 推 `control_seats` 所用的 `primary_place`）。短时窗内 Voronoi 网格按这些治所 lon/lat 生成；若 id 无主，该城在图上静默留白。
- `party` 必须在 `vocab.json` 的 `parties` 受控词表内。
- `start` / `end` 为整数年；`end:null` 表示「延续至今（本切片时间窗之后）」。`end >= start`。
- 同一 `place_id` 的时间段**不可重叠**（重叠年控制权会被静默取第一条）。
- 每个县治所**至少应有 1 条** segment（W12；否则图层该城留白，疑似漏写）。

**编译期注入（build.py）：** `control`、`control_seats`（各 county `primary_place` 的 lon/lat/name/region）、`control_years`（由 segments 起止年夹到 `[1616,1644]`）一并写进 `demo/data.js`。前端 `control_layer.js` 据此：年份/范围变才 `rebuild` 离屏 ImageData，纯视图变只 `repaint`；县范围画 13 个治所拼图，国家范围只画跨党派外缘、把同党县合并成板块并 `tally(year)` 出全国县数。虚构 world（`IS_ABSTRACT`）不 `setup` 此层。

