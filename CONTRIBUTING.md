# 参与贡献

本项目的史料以「**断言（assertion）**」为单位录入。你不需要会写代码，只要会查史料、填 JSON。

## 一条断言长这样

每条断言是 `data/<切片>/assertions.jsonl` 里的**一行 JSON**：

```json
{"id":"K027a","subject":"relation:haixi_mashi","predicate":"互市—海西","value_text":"开原马市（广顺/镇北/新安三关）是明与海西女真互市枢纽","source":"kaiyuan_tushuo","layer":"record","era":"万历","place":"kaiyuan_mashi","confidence":0.9,"quote_status":"paraphrase_unverified","quote":"开原北边，三关互市，东为广顺，西为镇北，中为新安。","note":"冯瑗《开原图说》"}
```

## 字段必填项

| 字段 | 说明 |
|------|------|
| `id` | **切片内唯一**。建议 `<切片前缀>` + 序号，如 `K001` / `T001` / `L001` |
| `subject` | 主体：事件 `event:xxx` · 距离 `dist:A:B` · 关系 `relation:xxx` · 地点 `place:xxx` · 人物 `person:xxx` |
| `predicate` | 谓词（一句话说明这条断言在说什么） |
| `value_text` | 人读的结论（**所有层都需要**） |
| `value` | 可选数值（里距、日期等）。仅文本断言可不填 |
| `source` | **必须**对应 `sources.json` 里的某个 id |
| `layer` | `record`(史料原文) / `scholarship`(学界考证) / `inference`(模型推算) / `gap`(已知缺口) |
| `era` | 时代标签 |
| `place` | 地点 id（对应 `places.json`）；无地点用切片主城 |
| `confidence` | 0–1 置信度。**`gap` 层必须为 0**（缺口没有置信度可言） |
| `quote_status` | `verbatim`(逐字) / `paraphrase_unverified`(意译未核) / `generated`(生成推算) |
| `quote` | 原文引文。**`record` 层必须有 quote**（史料必须能指到原文）；其他层可省略 |
| `note` | 来源、存疑说明、解释路径 |

> ⚠️ **`record` 层不能标 `quote_status: generated`** —— 史料层不能是推演出来的。

## 工作流

1. 在 `资料清单.md` 找标注为 `gap` 的缺口断言，或自行发现可补的史料。
2. 查史料，补一条断言；若来源不在 `sources.json`，**先加来源**再引用。
3. **先跑 `python tools/lint.py`**（推荐 `--strict`）—— 这一步会抓重复 id / 未登记词表 / record 层缺 quote / 缺 value_text 等十几类常见错误，**比 build 早一步**。
4. 再跑 `python tools/build.py` 确认能编译、冲突 / 缺口计数正确。
5. 跑 `python tools/resonance.py` 看事件共振度有没有上升。
6. 提交 PR，commit 加 `Signed-off-by`（DCO）。

## 新增切片

1. 在 `data/<新切片>/` 建以下文件：
   - `sources.json`：列出本切片用到的所有史料
   - `places.json`：本切片涉及的所有地点（需带 `lon` / `lat`）
   - `persons.json`：人物
   - `events.json`：**必须**给承载断言的事件填 `subject` 字段（指向 `event:xxx`）
   - `edges.json`（可选）：关系边
   - `assertions.jsonl`：本切片的断言
2. 在 `tools/build.py` 里注册：
   - 加 `XXX = os.path.join(ROOT, "data", "xxx")`
   - 加 `build_scene(XXX, {...}, extra_files=["events", "edges"])`
   - 把新切片加入 `sd["scenes"]` 字典
   - 在地形海拔注入循环 `for sc in (sarhu, kaiyuan, tieling, liaoyang, xxx)` 里加入
3. 在 `demo/` 加：
   - `<切片>.html`（参考 `kaiyuan.html`）
   - `<切片>.js`（参考 `kaiyuan.js` 的 5 行模板）
4. 在 `data/vocab.json` 不需要改——词表是共享的。
5. 跑 `python tools/lint.py && python tools/resonance.py && python tools/build.py`。

> Hub 页面（`demo/hub.js`）会自动从 `SD.scenes` 渲染新切片，**无需改 hub 代码**。

## 来源（sources.json）的字段约束

| 字段 | 说明 |
|---|---|
| `id` | **跨切片必须唯一且一致**——同一本书在不同切片里 id 必须一样 |
| `title` | 书名 |
| `stance` | `official_contemporary` / `official_later_dynasty` / `official_enemy` / `third_party_official` / `third_party_participant` / `private` / `local_gazetteer` / `scholarship` / `tertiary` |
| `stance_label` | 中文标签 |
| `distance_label` | 时间距离——"成书距事件 X 年"，是冲突裁决的核心依据，不是装饰 |
| `party` | **必须**是 `data/vocab.json` 的 `party_bucket` 内的某个 key，否则共振统计会静默丢弃 |
| `color` | UI 染色 |

## 立场派生规则（`data/vocab.json`）

```
明方      ← 明廷官方 / 明·开原兵备道 / 明·私修 / 明修官史 / 清修·明臣
清方      ← 清修官史 / 清·地方志
朝鲜      ← 朝鲜官方 / 朝鲜·亲历
综述考订   ← 学界 / 二手综述
```

若要新增 / 改立场归属：**改 `data/vocab.json`，不要改 county.js / resonance.py / lint.py**。
这是「立场靠来源派生」这句话能被审计的前提。

## 授权提醒（重要）

- 古籍原文（公有领域）可自由录入。
- 点校本、今人译注本可能享有著作权，录入前请核实。
- CHGIS / CBDB 等第三方数据集受「非商用 / 不可再分发」约束，**不得打包入本仓库**（见 `LICENSE-data`）。
- 数据接入鼓励「适配器 + 运行时下载」模式，而非把受版权数据塞进 git。

详见 `docs/01-开放策略与数据授权.md`。