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

1. 在门户 `demo/portal.html` 的「当前可认领的研究线索」里挑一条 `gap`，或自行发现可补的史料
   （线索数据实时来自 `data/leads.json`）。
2. 查史料，补一条断言；若来源不在 `sources.json`，**先加来源**再引用。
3. **跑 `python tools/gates.py --strict`** —— 一条命令跑完四道闸门
   （lint 守门 → 不变量 test → 重算 leads → 重编译 data.js），比分开跑更省事。
4. 提交 PR，commit 加 `Signed-off-by`（DCO，见下「贡献许可」）。
5. **不用本地跑也行**：开 PR 后 GitHub Actions 会自动跑同一套 gates 并给出红/绿，
   非技术贡献者（数字人文 / 美工）靠这个反馈即可，不必装 Python。

## 新增切片

本项目是**声明式**的：一个新切片 = 一份六件套数据 + 注册表里一条记录，**前端零改动**。

1. 在 `data/<新切片>/` 建六件套：
   - `sources.json` / `places.json` / `persons.json` / `events.json` / `edges.json`（可选）/ `assertions.jsonl`
   - 各文件字段约束见上。events.json **必须**给承载断言的事件填 `subject`（指向 `event:xxx`），否则时间轴点不到史料。
2. 在 `data/scenes.json` 的 `scenes` 里加一条注册（kind / region / title / primary_place / dossier_event / lead / …），
   并把 key 加进 `order` 数组。
   - Hub 地图（`demo/hub.js`）与门户会自动从注册表渲染新切片，**无需改任何前端代码**。
3. 若来源不在 `sources.json`，**先加来源**再引用（source id 跨切片必须唯一一致）。
4. 跑 `python tools/gates.py --strict` 确认能编译、冲突 / 缺口计数正确、不变量通过。

> 批量骨架可用生成器 `tools/seed_liaoxi.py`（辽西 / 辽南五县即由此生成）。改 `SKELETONS` 字典即可复用。

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

---

## 贡献许可（DCO 与授权）

- 提交 PR 时请加 `Signed-off-by`（DCO）：`git commit -s`。这一行即表示你确认有权贡献，
  **并同意以项目许可授权你的贡献**——代码以 AGPL-3.0（见根目录 `LICENSE`）、数据以 CC BY 4.0（见 `LICENSE-data`）。
- 你保留对自己贡献的署名权；项目（与任何衍生服务）可在遵守上述许可的前提下使用。
- 古籍原文（公有领域）可自由录入；点校本 / 今人译注本请先核实著作权（见下「授权提醒」）。

## 设计契约（不可破的几条）

这些是「立场靠来源派生」「缺口是一等公民」能成立的前提。改之前先想清楚后果：

1. **分类 / 立场只有单一真值**：`data/vocab.json` 的 `party_bucket` 是立场分桶的唯一来源。
   绝不在 `county.js` / `resonance.py` / `lint.py` 里硬编码立场映射——三处写歪就会静默串味
   （v0.3 萨尔浒共振度曾被此坑到 0.2，归一到 vocab.json 后才跳回 0.383）。
2. **网格外县不许伪造高程**：地形只覆盖 122–126.8°E / 40–43.3°N。`county.js` 对网格外县会标
   「地形网格外」横幅并跳过高程绘制。不要为了"好看"给网格外县填假海拔——诚实边界优先于视觉完整。
3. **缺口是一等公民**：`layer: gap` 的断言必须带 `lead` 块（where / skills / accept），否则在「线索」页签里是空壳
   （W09 会抓）。别把缺口偷偷改成断言而不补来源；别删 lead 块。
4. **空字段就是 bug**：`record` 层缺 `quote`（E10）、`gap` 层 `value_text` 为空（W07）在界面上渲染为空白，
   但下游共振度 / 冲突会据此算错。任何提交必须过 `tools/gates.py`。
5. **断言命名空间挂钩**：断言 `subject: event:xxx` 必须有对应 `events.json` 的 `subject`，反之亦然（W05），
   否则时间轴切不到史料面板。

## 治理与冲突

- **维护者（仓库主）拥有最终合并权**，目前为 BDFL 模式：PR 由维护者审阅并合并。
- **数据端冲突靠"谁有原始出处谁赢"**：两位贡献者对同一事实给出不同 mapping 或结论时，
  甩出原始出处（最好一手史料）的一方优先；双方都有出处则**并存为冲突组**——这是项目特性，不是 bug。
- 读者端冲突由内核"只投影、不裁判"处理：用户用来源开关自决采信，不在此限。
- 对来源归属有疑问，**改 `data/vocab.json` 并写明 `_party_notes`**，全站共振度会自动重算。

## 署名

数据以 CC BY 4.0 发布，**必须保留贡献者署名**。两种方式二选一或并存：

- 断言加 `contributor` 字段（谁录入的这条）；
- 在 `CONTRIBUTORS.md` 的荣誉榜登记（门户「合作者」入口会引用它）。

维护者会在版本说明中致谢所有贡献者。

## 直引（verbatim）约定

项目的核心产品是**断言层**，不是数字校勘全集。我们不强求全文录入，但鼓励给重要断言附上
**可核验的原文摘录**——这同时强化「来源依赖度压力测试」（关掉二手综述，看哪些结论会塌）。

- 每条断言已有的 `quote`（单句代表引文）+ `quote_status`（`verbatim` / `paraphrase_unverified` / `generated`）保持不变。
- **新增可选字段 `quotes`**：数组，每条目是一段直引摘录，结构示例：

  ```json
  "quotes": [
    {"text": "原文逐字摘录", "source_id": "ming_shenzong_shilu", "ref": "卷三五九·万历二十九年五月庚子"}
  ]
  ```

  - `text`：必填，非空，且应为逐字（与 `quote_status: verbatim` 配合）。
  - `source_id`：指向本切片 `sources.json` 里的来源；省略时默认取本断言的 `source`。
  - `ref`：卷页 / 出处定位，方便他人核对。
- `lint.py` 的 **W11** 会检查：`quotes` 条目 `text` 不能空、`source_id` 必须存在；违反只是 warning，不阻断。
- 点校本、今人译注本可能享有著作权，录入前请核实（见「授权提醒」）。