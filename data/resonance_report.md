# 三方史料共振报告

> 生成：`tools/resonance.py` · 公式 `resonance = (coverage/3) × (1−divergence) × (1−gap_rate)`
> 立场（明方 / 清方 / 朝鲜 / 综述考订）按来源 `source.party` 派生，
> 不手动贴标签——这是本项目与所有历史可视化产品的分界线。

> v0.4 起本报告自动扫描 `data/*/assertions.jsonl`，新切片落盘即入表。
> v0.17 起新增「明内部派系细分」：明朝内各利益集团（东林/阉党/浙党/盐商/内臣/封疆）
> 会因自身利害润色夸张记载，立场派生在 `party`（宏观桶）之外再按 `faction`（派系）二次拆分。

## 切片汇总

| 切片 | 断言 | 事件 | 平均共振 | 最高共振事件 | 四层分布 |
|---|---|---|---|---|---|
| fushun | 20 | 3 | **0.415** | event:fushun_fall（0.580） | gap 2 / record 17 / scholarship 1 |
| fuzhou | 6 | 2 | **0.333** | event:fuzhou_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| gaizhou | 6 | 2 | **0.389** | event:gaizhou_fall（0.444） | gap 2 / record 3 / scholarship 1 |
| guangning | 31 | 3 | **0.489** | event:guangning_fall（0.800） | gap 2 / record 28 / scholarship 1 |
| haizhou | 7 | 3 | **0.472** | event:haizhou_fall（0.750） | gap 2 / record 4 / scholarship 1 |
| imjin | 19 | 5 | **0.467** | event:cefeng_heyi（0.667） | gap 2 / inference 2 / record 14 / scholarship 1 |
| jinzhou | 15 | 2 | **0.628** | event:jinzhou_songjin（0.923） | gap 2 / record 12 / scholarship 1 |
| jinzhouwei | 6 | 3 | **0.278** | event:jinzhouwei_fall（0.333） | gap 2 / record 3 / scholarship 1 |
| 开原 | 44 | 3 | **0.495** | 开铁之战（开原陷落）（0.818） | gap 2 / inference 8 / record 29 / scholarship 5 |
| 辽阳 | 53 | 2 | **0.412** | 辽阳陷落（1621）（0.491） | gap 3 / inference 1 / record 41 / scholarship 8 |
| ningyuan | 31 | 4 | **0.319** | event:ningjin_dajie（0.333） | gap 2 / record 28 / scholarship 1 |
| qin_mie_liu_guo | 14 | 5 | **0.000** | event:ev_qin_mie_liu_guo_01（0.000） | gap 2 / record 11 / scholarship 1 |
| 萨尔浒 | 111 | 5 | **0.514** | 阿布达里岗（东路·刘綎）（0.667） | gap 7 / inference 6 / record 87 / scholarship 11 |
| shenyang | 50 | 6 | **0.401** | event:shenyang_relief（0.909） | gap 4 / inference 1 / record 43 / scholarship 2 |
| tang_huai_xi | 12 | 3 | **0.000** | event:huai_xi_jufa（0.000） | gap 1 / inference 1 / record 9 / scholarship 1 |
| three_campaigns | 14 | 3 | **0.000** | event:ev_three_campaigns_01（0.000） | gap 1 / inference 1 / record 11 / scholarship 1 |
| 铁岭 | 31 | 2 | **0.173** | 铁岭陷落（1619）（0.179） | gap 2 / record 23 / scholarship 6 |
| yehe | 7 | 3 | **0.278** | event:yehe_fall（0.333） | gap 2 / record 4 / scholarship 1 |
| yellow_sea_1894 | 15 | 1 | **0.000** | event:ev_yellow_sea_1894_02（0.000） | gap 1 / record 13 / scholarship 1 |

## 明内部派系细分（faction · 明朝利益集团立场）

> 下列统计仅含 `source.faction` 非空的断言——即明朝内部各利益集团。同一事件若不同派系记载冲突，此处可见叙述对立。

| 派系 | 断言数 | 涉及场景 | 代表来源 |
|---|---|---|---|
| 封疆大吏 / 辽东经略系 | 30 | 辽阳、萨尔浒、shenyang | sanchaoliao_shilu |
| 内臣 / 宦官（独立于阉党） | 9 | guangning | zhuozhongzhi |

## 事件共振表（按共振度升序：最不共振的最值得补）

| 事件 | 切片 | 共振 | 覆盖 | 分歧 | 缺口 | 总数 | 明/清/朝鲜/综述 |
|---|---|---|---|---|---|---|---|
| event:ev_qin_mie_liu_guo_01 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_02 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 5 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_03 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.33 | 3 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_04 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.50 | 2 | 0 / 0 / 0 / 0 |
| event:ev_qin_mie_liu_guo_05 | qin_mie_liu_guo | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_01 | three_campaigns | **0.000** | 0/3 | 0.33 | 0.20 | 5 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_02 | three_campaigns | **0.000** | 0/3 | 0.25 | 0.00 | 5 | 0 / 0 / 0 / 0 |
| event:ev_three_campaigns_03 | three_campaigns | **0.000** | 0/3 | 0.33 | 0.00 | 4 | 0 / 0 / 0 / 0 |
| event:ev_yellow_sea_1894_02 | yellow_sea_1894 | **0.000** | 0/3 | 0.57 | 0.07 | 14 | 0 / 0 / 0 / 14 |
| event:huai_xi_jufa | tang_huai_xi | **0.000** | 0/3 | 0.00 | 0.00 | 1 | 0 / 0 / 0 / 0 |
| event:huai_xi_ping | tang_huai_xi | **0.000** | 0/3 | 0.00 | 0.00 | 2 | 0 / 0 / 0 / 0 |
| event:li_su_xueye | tang_huai_xi | **0.000** | 0/3 | 0.33 | 0.20 | 5 | 0 / 0 / 0 / 0 |
| event:ice_walls | shenyang | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 2 / 0 / 0 |
| event:jinzhouwei_mao | jinzhouwei | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 0 / 2 / 0 |
| 弃宽甸六堡 | 铁岭 | **0.167** | 1/3 | 0.50 | 0.00 | 3 | 0 / 2 / 0 / 1 |
| event:yehe_kaiyuan_attack | yehe | **0.167** | 1/3 | 0.00 | 0.50 | 2 | 0 / 2 / 0 / 0 |
| 铁岭陷落（1619） | 铁岭 | **0.179** | 1/3 | 0.25 | 0.29 | 7 | 0 / 3 / 0 / 4 |
| event:ningyuan_battle | ningyuan | **0.278** | 1/3 | 0.00 | 0.17 | 6 | 0 / 6 / 0 / 0 |
| event:bixieguan_battle | imjin | **0.333** | 3/3 | 0.50 | 0.33 | 6 | 0 / 2 / 3 / 0 |
| 杜松渡浑河（西路） | 萨尔浒 | **0.333** | 2/3 | 0.50 | 0.00 | 3 | 1 / 2 / 0 / 0 |
| event:fushun_founded | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:fushun_mashi | fushun | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 1 / 0 / 1 |
| event:fuzhou_fall | fuzhou | **0.333** | 2/3 | 0.00 | 0.50 | 4 | 0 / 2 / 2 / 0 |
| event:fuzhou_founded | fuzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:gaizhou_founded | gaizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:guangning_founded | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:guangning_zhen | guangning | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:haizhou_founded | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:haizhou_mashi | haizhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| 浑河之战（1621） | 辽阳 | **0.333** | 1/3 | 0.00 | 0.00 | 3 | 0 / 1 / 0 / 2 |
| event:jinzhou_founded | jinzhou | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:jinzhouwei_fall | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:jinzhouwei_founded | jinzhouwei | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:ningjin_dajie | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:ningyuan_founded | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 3 | 0 / 3 / 0 / 0 |
| event:ningyuan_wusangui | ningyuan | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:renchen_baofa | imjin | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 0 / 2 / 0 |
| 萨尔浒之战（广义） | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 0 / 1 / 0 |
| 尚间崖（北路·马林） | 萨尔浒 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:shenyang_founded | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 1 / 0 / 0 / 0 |
| event:shenyang_jurchen_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_qing_capital | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:shenyang_walls | shenyang | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:xingzhou_battle | imjin | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 0 / 1 / 0 |
| 叶赫灭亡 | 开原 | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:yehe_fall | yehe | **0.333** | 1/3 | 0.00 | 0.00 | 2 | 0 / 2 / 0 / 0 |
| event:yehe_founded | yehe | **0.333** | 1/3 | 0.00 | 0.00 | 1 | 0 / 1 / 0 / 0 |
| event:gaizhou_fall | gaizhou | **0.444** | 2/3 | 0.00 | 0.33 | 3 | 1 / 2 / 0 / 0 |
| 辽阳陷落（1621） | 辽阳 | **0.491** | 2/3 | 0.13 | 0.15 | 20 | 8 / 6 / 0 / 6 |
| 萨尔浒主战场 | 萨尔浒 | **0.568** | 2/3 | 0.09 | 0.07 | 30 | 11 / 0 / 12 / 7 |
| event:fushun_fall | fushun | **0.580** | 2/3 | 0.07 | 0.06 | 16 | 0 / 15 / 1 / 0 |
| 阿布达里岗（东路·刘綎） | 萨尔浒 | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 0 / 1 / 1 / 0 |
| event:cefeng_heyi | imjin | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 0 / 1 / 0 / 0 |
| event:pyongyang_battle | imjin | **0.667** | 3/3 | 0.33 | 0.00 | 5 | 0 / 1 / 3 / 0 |
| 南路溃逃（李如柏） | 萨尔浒 | **0.667** | 2/3 | 0.00 | 0.00 | 2 | 1 / 1 / 0 / 0 |
| event:haizhou_fall | haizhou | **0.750** | 3/3 | 0.00 | 0.25 | 4 | 1 / 2 / 1 / 0 |
| event:guangning_fall | guangning | **0.800** | 3/3 | 0.00 | 0.20 | 10 | 2 / 2 / 1 / 5 |
| 开铁之战（开原陷落） | 开原 | **0.818** | 3/3 | 0.00 | 0.18 | 11 | 4 / 2 / 1 / 4 |
| event:shenyang_relief | shenyang | **0.909** | 3/3 | 0.00 | 0.09 | 22 | 11 / 5 / 2 / 4 |
| event:jinzhou_songjin | jinzhou | **0.923** | 3/3 | 0.00 | 0.08 | 13 | 2 / 1 / 1 / 9 |

## 解读

- **高共振**（≈1.0）：三方都覆盖、无分歧、无缺口 → 这件事史料共识强。
- **低共振**（≈0.0）：覆盖不足、分歧剧烈、或充满缺口 → 这就是"补这条史料能撬动多大"的最直白答案。
- 萨尔浒 `event:sarhu` 与开铁 `event:kaifa` 已通过 K026 / K026a–d 完成三方闭合。
- 新入表的铁岭 / 辽阳切片当前共振偏低，**这不是 bug，是待补清单**：缺的主要是朝鲜方视角与清方细节，见各切片 `layer: gap` 断言。
- **派系维度（v0.17）**：`明史` 已归「清方」桶（清修），真正明方声音由明人自著（三朝辽事实录等）与朝鲜（光海君日记）承担；明朝内部东林/阉党/浙党/盐商/内臣/封疆各集团又因自身利害润色夸张，详见上方「明内部派系细分」与 `data/bibliography.json`。
