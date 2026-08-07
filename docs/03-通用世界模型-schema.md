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

输入：`tools/ingest.py --world <id> --text <file.txt> [--map <image>]`
输出：在 `worlds/<id>/` 下生成 sources/places/persons/events/edges/assertions + 初版 vocab + timeline。

抽取规范（`tools/ingest_prompt.md`）要求模型严格产出上述 schema 的 JSON，
且**每条断言必须带 `source_id` 与 `claim`，缺口显式标 `layer:gap`**——
这样 ingestion 的产物能直接过现有四闸门（lint/test/leads/build）。
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
