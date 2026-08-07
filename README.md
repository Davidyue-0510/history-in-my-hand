# 小菜狗的文明图景 / Vege-civilization

> 人类一切有记载的文字资料，都能在同一张地图上相互比较、争论、补缺。
> 史料的不同版本，不是 bug，是产品。

## 这是什么

一个**断言驱动的开源历史沙盒**：每一则史料被拆成
`(主体, 谓词, 值, 来源, 证据层, 时间, 地点, 置信度, 引文, 引文状态)`
的原子断言；不同来源在同一张真实地形地图上**并列、冲突、补缺**。
立场不靠人工标签，而由来源本身的 `party / stance / distance / layer / geographic_origin` 自动派生。

当前已有四个垂直切片（共用同一套 ASTER 真实地形 + 江河 + 边墙）：

| 切片 | LOD | 文件 | 主要事件 |
|---|---|---|---|
| **萨尔浒之战** | 战役级 | `demo/sarhu.html` | 1619 二月—三月，五路进军 |
| **开原** | 县级 | `demo/kaiyuan.html` | 1619 万历四十七年陷落（含三方共振） |
| **铁岭** | 县级 | `demo/tieling.html` | 1388 卫城 → 1619 陷落 → 1664 县治 |
| **辽阳** | 县级 | `demo/liaoyang.html` | 唐 645 / 辽 938 / 金 1116 / 明 1375 都司 / 1621 陷落 |

四个切片共用同一片辽东走廊的真实地形、同一份江河、同一道辽东边墙——
**这是"开源文明的图纸可以比照"在技术上的具体含义**。

## 三步看懂

1. 打开 **`demo/index.html`** —— 主枢纽，无需服务器，双击即可。
2. 进入任一切片，点左栏**史料开关** —— 切换采信的史料版本，地图当场改变。
3. 看右栏**「三方史料」「史料冲突」「缺口」** —— 同一事实的不同记载**并列陈列、不裁决**；
   地图上的 `?` 是学界至今说不清的，也是众包最该先补的。

## 快速开始（本地）

```bash
python tools/build.py        # 把 data/ 编译进 demo/data.js
python tools/resonance.py    # 重算三方共振度（自动扫所有切片）
python tools/lint.py         # 校验断言内核（自动扫所有切片）
# 然后用浏览器打开 demo/index.html
```

> 不跑 build 也行：`demo/data.js` 已随仓库提交，可直接打开 `demo/index.html` 看当前数据。

## 目录

| 路径 | 内容 |
|------|------|
| `demo/` | Web 演示：主枢纽 `index.html`、四个切片 `sarhu/kaiyuan/tieling/liaoyang.html` |
| `data/` | 史料数据（JSON / JSONL，git 友好）；受控词表 `vocab.json`；真实地形 `data/terrain/liaodong_grid.json` |
| `tools/` | `build.py`(编译) · `terrain_model.py` / `route_strain.py`(Tobler 行军紧张度) · `resonance.py`(三方共振度) · `lint.py`(数据守门) · `fetch_terrain.py`(地形获取) |
| `docs/` | `00-架构纲要` · `01-开放策略与数据授权` · `02-12h路线图-v0.3` |

## 数据模型（一句话）

```
(subject, predicate, value, source, layer, time, place, confidence, quote, quote_status)
```

- **`layer`**：`record`(史料原文) / `scholarship`(学界考证) / `inference`(模型推算) / `gap`(已知缺口) 物理隔离
- **`quote_status`**：`verbatim`(逐字) / `paraphrase_unverified`(意译未核) / `generated`(生成推算) —— 未核引文在 UI 呈〔意译未核〕
- **`source.party`**：来源的立场归属；分桶规则**不在 county.js / resonance.py 里硬编码**，统一来自 `data/vocab.json`
- 冲突由 `build_conflicts()` 在 `(subject, predicate)` 上**自动发现**，无需手工标注
- 时间轴事件通过 `events.json` / `engagements.json` 的 `subject` 字段与断言 subject 命名空间挂钩

想录入史料？先读 `CONTRIBUTING.md` 与 `docs/01-开放策略与数据授权.md`。

## 受控词表（v0.4 起为单一真值）

任何立场派生、词表扩展、四层开关的渲染、共振度的计算，都读 `data/vocab.json`。
改一处，全站同步。这是"立场靠来源派生"这句话能被审计的前提。

```
明方      ← 明廷官方 / 明·开原兵备道 / 明·私修 / 明修官史 / 清修·明臣
清方      ← 清修官史 / 清·地方志
朝鲜      ← 朝鲜官方 / 朝鲜·亲历
综述考订   ← 学界 / 二手综述
```

`vocab.json` 里每条映射都附了**编辑判断说明**（`_party_notes`），例如：

> 《明史》《元史》这类『后朝官修前朝史』归入被记录的一方，而非修撰的一方。理由：其史源主体是前朝实录与档案。**这是一个编辑判断，不是客观事实**——若不同意，改这一行即可，全站共振度会随之重算。

## Lint（数据守门员）

```bash
python tools/lint.py            # 检查 + 报告
python tools/lint.py --strict   # CI 用：warning 也算失败
python tools/test_assertions.py # 不变量回归测试（30 项）
```

当前规则（`tools/lint.py` 顶部有清单）：

- **E01–E12** 字段完整性 / layer 合法性 / quote_status 合法性 / source / event / person / place 引用存在性 / 冲突 id 引用 / record 层必须有 quote / record 层不得标 generated / gap 层 confidence 必须为 0
- **W01–W08** verbatim 未校核警告 / 同书名跨切片用不同 id / source 登记但未使用 / 事件三方覆盖为 0 / 时间轴未挂钩 subject / stance 漂移 / 缺口 value_text 为空 / stance / distance 跨切片不一致

每次跑 `python tools/build.py` 之前先跑 lint——这是项目自己的"数据 CI"。
`test_assertions.py` 是更高层的回归测试：三层证据共存、冲突可反查、每切片有 ground truth、共振报告含全部切片等。

## 路线图

见 `docs/02-12h路线图-v0.3.md`。v0.3 → v0.4 增量：

- 多切片通用引擎（`demo/county.js`，参数化 `COUNTY_SCENE` / `COUNTY_CONF`）
- 新增 2 个县级切片（铁岭 / 辽阳）
- `data/vocab.json` 统一立场派生规则
- `tools/lint.py` 自动校验断言内核
- `county.js` 词表外 source 不再静默丢弃，标红提示

## 许可证

- 代码：AGPL-3.0（见 `LICENSE-code`）
- 核心数据：CC BY 4.0（见 `LICENSE-data`）
- 贡献者协议：DCO（Sign-off，不需 CLA —— CLA 会劝退贡献者）

> 注：`.workbuddy/` 等本地记忆与个人信息**不纳入本仓库**。