# 三方史料共振报告

> 生成：`tools/resonance.py` · 公式 `resonance = (coverage/3) × (1−divergence) × (1−gap_rate)`
> 立场（明方 / 清方 / 朝鲜 / 综述考订）按来源 `source.party` 派生，
> 不手动贴标签——这是本项目与所有历史可视化产品的分界线。

> v0.4 起本报告自动扫描 `data/*/assertions.jsonl`，新切片落盘即入表。

## 切片汇总

| 切片 | 断言 | 事件 | 平均共振 | 最高共振事件 | 四层分布 |
|---|---|---|---|---|---|
| fushun | 8 | 3 | **0.472** | event:fushun_fall（0.750） | gap 2 / record 5 / scholarship 1 |
| fuzhou | 6 | 2 | **0.333** | event:fuzhou_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| gaizhou | 6 | 2 | **0.389** | event:gaizhou_fall（0.444） | gap 2 / record 3 / scholarship 1 |
| guangning | 7 | 3 | **0.355** | event:guangning_fall（0.400） | gap 2 / record 4 / scholarship 1 |
| haizhou | 7 | 3 | **0.472** | event:haizhou_fall（0.750） | gap 2 / record 4 / scholarship 1 |
| jinzhou | 7 | 2 | **0.567** | event:jinzhou_songjin（0.800） | gap 2 / record 4 / scholarship 1 |
| jinzhouwei | 6 | 3 | **0.278** | event:jinzhouwei_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| 开原 | 44 | 3 | **0.495** | 开铁之战（开原陷落）（0.818） | gap 2 / inference 8 / record 29 / scholarship 5 |
| 辽阳 | 20 | 2 | **0.230** | 浑河之战（1621）（0.333） | gap 3 / record 9 / scholarship 8 |
| ningyuan | 7 | 4 | **0.333** | event:ningjin_dajie（0.333） | gap 2 / record 4 / scholarship 1 |
| 萨尔浒 | 60 | 5 | **0.383** | 阿布达里岗（东路·刘綎）（0.667） | gap 2 / inference 3 / record 45 / scholarship 10 |
| shenyang | 24 | 6 | **0.404** | event:shenyang_relief（0.923） | gap 3 / record 19 / scholarship 2 |
| 铁岭 | 20 | 2 | **0.158** | 弃宽甸六堡（0.167） | gap 2 / record 12 / scholarship 6 |
| yehe | 7 | 3 | **0.389** | event:yehe_fall（0.667） | gap 2 / record 4 / scholarship 1 |

## 事件共振表（按共振度升序：最不共振的最值得补）

| 事件 | 切片 | 共振 | 覆盖 | 分歧 | 缺口 | 总数 | 明/清/朝鲜/综述 |
|---|---|---|---|---|---|---|---|
| 辽阳陷落（1621） | 辽阳 | **0.127** | 1/3 | 0.33 | 0.43 | 7 | 0 / 3 / 0 / 4 |
| 铁岭陷落（1619） | 铁岭 | **0.148** | 1/3 | 0.33 | 0.33 | 6 | 0 / 2 / 0 / 4 |
| event:ice_walls | shenyang | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 2 / 0 / 0 / 0 |
| event:jinzhouwei_mao | jinzhouwei | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 0 / 2 / 0 |
| 弃宽甸六堡 | 铁岭 | **0.167** | 1/3 | 0.50 | 0.00 | 3 | 2 / 0 / 0 / 1 |
| event:yehe_kaiyuan_attack | yehe | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 2 / 0 / 0 / 0 |
| 萨尔浒主战场 | 萨尔浒 | **0.250** | 1/3 | 0.00 | 0.25 | 4 | 1 / 0 / 0 / 3 |
| 杜松渡浑河（西路） | 萨尔浒 | **0.333** | 2/3 | 0.50 | 0.00 | 3 | 2 / 1 / 0 / 0 |
| event:fushun_founded | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:fushun_mashi | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 1 / 0 / 0 / 1 |
| event:fuzhou_fall | fuzhou | **0.333** | 2/3 | 0.00 | 0.50 | 4 | 0 / 2 / 2 / 0 |
| event:fuzhou_founded | fuzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:gaizhou_founded | gaizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:guangning_founded | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:guangning_zhen | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:haizhou_founded | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:haizhou_mashi | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| 浑河之战（1621） | 辽阳 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:jinzhou_founded | jinzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:jinzhouwei_fall | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:jinzhouwei_founded | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:ningjin_dajie | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:ningyuan_battle | ningyuan | **0.333** | 2/3 | 0.00 | 0.50 | 2 | 1 / 1 / 0 / 0 |
| event:ningyuan_founded | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:ningyuan_wusangui | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| 萨尔浒之战（广义） | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 0 / 1 / 0 |
| 尚间崖（北路·马林） | 萨尔浒 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:shenyang_founded | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:shenyang_jurchen_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_qing_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_walls | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| 南路溃逃（李如柏） | 萨尔浒 | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 2 / 0 / 0 / 0 |
| 叶赫灭亡 | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:yehe_founded | yehe | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:guangning_fall | guangning | **0.400** | 2/3 | 0.00 | 0.40 | 5 | 3 / 0 / 1 / 1 |
| event:gaizhou_fall | gaizhou | **0.444** | 2/3 | 0.00 | 0.33 | 3 | 2 / 1 / 0 / 0 |
| 阿布达里岗（东路·刘綎） | 萨尔浒 | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 0 / 1 / 1 / 0 |
| event:yehe_fall | yehe | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 1 / 1 / 0 / 0 |
| event:fushun_fall | fushun | **0.750** | 3/3 | 0.00 | 0.25 | 4 | 2 / 1 / 1 / 0 |
| event:haizhou_fall | haizhou | **0.750** | 3/3 | 0.00 | 0.25 | 4 | 2 / 1 / 1 / 0 |
| event:jinzhou_songjin | jinzhou | **0.800** | 3/3 | 0.00 | 0.20 | 5 | 2 / 1 / 1 / 1 |
| 开铁之战（开原陷落） | 开原 | **0.818** | 3/3 | 0.00 | 0.18 | 11 | 4 / 2 / 1 / 4 |
| event:shenyang_relief | shenyang | **0.923** | 3/3 | 0.00 | 0.08 | 13 | 6 / 3 / 2 / 2 |

## 解读

- **高共振**（≈1.0）：三方都覆盖、无分歧、无缺口 → 这件事史料共识强。
- **低共振**（≈0.0）：覆盖不足、分歧剧烈、或充满缺口 → 这就是"补这条史料能撬动多大"的最直白答案。
- 萨尔浒 `event:sarhu` 与开铁 `event:kaifa` 已通过 K026 / K026a–d 完成三方闭合。
- 新入表的铁岭 / 辽阳切片当前共振偏低，**这不是 bug，是待补清单**：缺的主要是朝鲜方视角与清方细节，见各切片 `layer: gap` 断言。
