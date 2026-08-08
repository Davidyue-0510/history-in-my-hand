# 史料 → 断言四层 抽取 Prompt 模板（ingestion spike）

用途：把一段原始史料（如《明史》《实录》《皇清开国方略》）变成项目可消费的
`assertions.jsonl`，直接喂进 `tools/gates.py`（lint → test → leads → build）。
本 spike 的 `extracted.json` 就是按此模板由 LLM 抽出的样例。

## 输出契约（每条断言一个 JSON 对象，数组返回）

| 字段 | 类型 | 说明 |
|------|------|------|
| `id` | str | 场景内唯一，如 `SX001` |
| `subject` | str | 实体引用：`army:ming_total` / `person:yanghao` / `event:sarhu` / `place:fushunguan` |
| `predicate` | str | 谓词：`兵力` / `出击路线` / `阵亡` / `集兵` … |
| `value_text` | str | 原文表述的值，如「兵六万」「分四路来攻」 |
| `time.era_text` | str | **年号纪年原文**，如「万历四十七年三月」「天命四年二月廿九」。<br>⚠️ 必须保留年号，不要自己换算成公元——换算交给 `tools/reign_era.py` |
| `place` | str | 地点 id（能消歧就填，不能留空并记 `note`） |
| `source` | str | 出处 id，如 `huangqing_kaioguo_fanglue` |
| `quote` | str | 直接引文 |
| `quote_status` | str | `primary_extract`（本 spike 标记，待 DH 核验） |
| `layer` | str | `record`(原始史料) / `scholarship`(学界研究) / `inference`(合理推断) / `gap`(证据缺口) |
| `confidence` | float | 0–1，按来源可信度给 |
| `scale` | str | `empire` / `province` / `county` |
| `note` | str | 立场/缺口/口径说明 |

## 四层抽取规则（对应项目「立场靠来源派生」主张）

- **record**：原文直述的事实（谁、几月、哪路、多少兵）。来源方视角=立场，不要改。
- **scholarship**：现代研究对 record 的修正/量化（如「明军实数约八万八千」）。
- **inference**：原文未明说但可合理推出（如「杜松轻敌冒进」）。
- **gap**：原文矛盾/缺失处（如「号称四十七万」vs「实录二十万」vs「实数八万八千」——
  这种分歧**不要强行合并**，记成 gap，由 leads 汇总成可认领线索）。

## 关键：年份一律留年号

LLM 不要输出 `time.start: "1619-..."`。只输出 `time.era_text: "万历四十七年三月"`。
管线里的 `reign_era.normalize_year()` 会把它变成公元年——这样**所有史料共用同一把
公元尺**，且年号换算错误能被单元测试 + 闸门抓住（不会像手工填 lon/lat 那样静默留白）。

## 反幻觉约束

- 只抽原文出现或学界公认的内容；推测标 `inference` 并降 `confidence`。
- 数字优先用原文表述；折算标 `scholarship` 并注出来源。
- 地名/人名能映射到既有 `places.json` / `persons.json` 的 id 就映射，否则留 `note` 待消歧。
