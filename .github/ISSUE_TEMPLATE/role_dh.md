name: 数字人文从业人
about: 史料核实、断言补录、研究线索认领（data/*/assertions.jsonl）
title: "[史料] "
labels: content, good-first-issue
assignees: ""
---

## 认领的线索 id
（来自 `data/leads.json`，或各切片「线索」页签；如 `tieling` 的 T016）

## 史料依据
- 来源：`sources.json` 里的 id
- 卷页 / 原文（直引请填 `quote`，并标 `quote_status: verbatim`）

## 拟补录的断言
（id / subject / 来源 / value_text；缺口仍写 `layer:"gap"` + `lead` 块）

## 验收
- [ ] `python tools/lint.py` 0 error
- [ ] `python tools/test_assertions.py` 全绿
- [ ] `quote_status` 至少从 `paraphrase_unverified` 推进一步
