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
| `id` | 切片内唯一，建议 `K` + 序号（如 `K028`） |
| `subject` | 主体：事件 `event:xxx` · 距离 `dist:A:B` · 关系 `relation:xxx` |
| `predicate` | 谓词（一句话说明这条断言在说什么） |
| `value_text` | 人读的结论 |
| `value` | 可选数值（里距、日期等） |
| `source` | **必须**对应 `sources.json` 里的某个 id |
| `layer` | `record`(史料原文) / `scholarship`(学界考证) / `inference`(模型推算) / `gap`(已知缺口) |
| `era` | 时代标签 |
| `place` | 地点 id（对应 `places.json`）；无地点用切片主城 |
| `confidence` | 0–1 置信度 |
| `quote_status` | `verbatim`(逐字) / `paraphrase_unverified`(意译未核) / `generated`(生成推算) |
| `quote` | 原文引文（如有） |
| `note` | 来源、存疑说明 |

## 工作流

1. 在 `资料清单.md` 找标注为 `gap` 的缺口断言，或自行发现可补的史料。
2. 查史料，补一条断言；若来源不在 `sources.json`，**先加来源**再引用。
3. 跑 `python tools/build.py` 确认能编译、冲突 / 缺口计数正确。
4. 提交 PR，commit 加 `Signed-off-by`（DCO）。

## 授权提醒（重要）

- 古籍原文（公有领域）可自由录入。
- 点校本、今人译注本可能享有著作权，录入前请核实。
- CHGIS / CBDB 等第三方数据集受「非商用 / 不可再分发」约束，**不得打包入本仓库**（见 `LICENSE-data`）。
- 数据接入鼓励「适配器 + 运行时下载」模式，而非把受版权数据塞进 git。

详见 `docs/01-开放策略与数据授权.md`。
