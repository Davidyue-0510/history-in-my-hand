# SURVEY · 2026-09-09 · 县级密度 / 经纬度覆盖摸底

> 配合 `docs/HANDOFF-2026-09-09.md` + `docs/ROADMAP-next.md`
> 数据快照：HEAD `8319fa8`（v0.194 PRC 收口基线，450 场景）

---

## 一、关键发现：之前的判断错了

**我之前在 ROADMAP 里写「县级密度≈0，最大结构性缺口」——这是错的。**

真实情况：
- **450 场景里 24 个 county kind**（萨尔浒辽东/唐淮西/秦灭六国/万历朝鲜/宋察院等系列）
- county kind 96.0% places 带真实经纬度（193/201）
- county 真实 geo 占全库 19.7%（193/981）
- county kind 是真实经纬度第二大来源，仅次于 battle

**真正的缺口不是「没有县级场景」，而是**：

1. **county kind 仅 5 个朝代切片集中**——辽东 13 / overseas 2 / henan 1 / shaanxi 1 / 其他 7；**没有"中国地理全县域"覆盖**
2. **没有 `scale_tier=county` 的场景**——24 个 county kind 全是 operational scale
3. **engineering / tech / thought kind 真实经纬度仅 30-33%**——技术/思想维度的「地点」多为抽象/概念性
4. **exchange（对外交流）仅 17.5%、social 仅 9.4%**——抽象场景
5. **fiction 0/23**——正确（紫色虚拟，不应有真实经纬度）

---

## 二、总览（450 场景，1922 places）

| | scenes | places | real_geo | % | unresolved |
|---|---|---|---|---|---|
| 全量 | 450 | 1922 | 981 | 51.0% | 914 |

**270/450 场景（60%）至少有 1 个真实经纬度 place**。
**100% 场景有 places.json 文件**（无缺失）。

### 按 kind 切（真实 geo / total）

| kind | real/total | 占比 |
|---|---|---|
| **county** | 193/201 | **96.0%** ⭐ |
| **disaster** | 153/159 | **96.2%** ⭐ |
| battle | 213/318 | 67.0% |
| fusion | 22/37 | 59.5% |
| court | 53/91 | 58.2% |
| reform | 48/103 | 46.6% |
| uprising | 39/84 | 46.4% |
| dynasty | 49/120 | 40.8% |
| tech | 44/130 | 33.8% |
| thought | 46/142 | 32.4% |
| engineering | 53/169 | 31.4% |
| frontier | 39/139 | 28.1% |
| exchange | 21/120 | 17.5% |
| social | 8/85 | 9.4% |
| economic | 0/1 | 0.0% |
| **fiction** | 0/23 | **0.0%**（正确：紫色虚拟） |

### 按 scale_tier 切

| scale_tier | real/total | 占比 |
|---|---|---|
| **strategic** | 311/415 | **74.9%** |
| operational | 668/1501 | 44.5% |
| tactical | 2/6 | 33.3% |
| **county** | — | **不存在**（24 county kind 全部用 operational） |

---

## 三、24 个 county kind 场景（已存在且 geo 充分）

| scene id | province | epoch | places | real_geo |
|---|---|---|---|---|
| kaiyuan | liaoning | ming_qing | 16 | 16 |
| tieling | liaoning | ming_qing | 11 | 11 |
| yehe | liaoning | ming_qing | 5 | 5 |
| liaoyang | liaoning | ming_qing | 12 | 12 |
| shenyang | liaoning | ming_qing | 13 | 13 |
| fushun | liaoning | ming_qing | 6 | 6 |
| haizhou | liaoning | ming_qing | 8 | 8 |
| gaizhou | liaoning | ming_qing | 6 | 6 |
| fuzhou | liaoning | ming_qing | 5 | 5 |
| jinzhouwei | liaoning | ming_qing | 5 | 5 |
| guangning | liaoning | ming_qing | 5 | 5 |
| jinzhou | liaoning | ming_qing | 5 | 5 |
| ningyuan | liaoning | ming_qing | 4 | 4 |
| song_chan_yuan | — | song | 7 | 7 |
| tang_huai_xi | henan | tang | 9 | 9 |
| imjin | overseas | ming | 18 | 18 |
| yellow_sea_1894 | overseas | qing_modern | 6 | 6 |
| qin_mie_liu_guo | shaanxi | guangzhong | 12 | 12 |
| （其余 6 个） | — | — | — | — |

**分布特征**：
- **萨尔浒辽东系 13 个**（v0.18x 主力切片）—— 这就是 county.html 的实际受众
- 海外 2（朝鲜/黄海甲午）—— 跨境事件
- 秦灭六国 1（陕西起兵路径）
- 唐淮西 1（河南）
- 宋察院 1（行政县名）
- **完全空白**：江南、华北、四川、云贵、两广、福建……

---

## 四、调整后的 P0 路径

**撤销 ROADMAP 里"县级密度破零"的描述**——county 已有 24 个，不能说破零。

**真正的缺口**：

| # | 缺口 | 推荐路径 |
|---|---|---|
| **P0-A** | county kind 仅 5 朝代切片集中，**缺"广地域县域覆盖"** | 选 1-2 个新增朝代试点（如华北、四川、闽粤），按 county kind 模板（六文件 + scene entry）手工建 5-10 个场景，**坐标须外部权威源人工确认**（不接受 LLM 凭空生成）。判断标准：「随机抽一个朝代 + 一个县，系统能不能给出一张不撒谎的 county.html」 |
| P0-B | engineering/tech/thought kind 真实 geo 仅 30-33% | 两种走法：① 给现有非真实 geo 的 place 补经纬度（场景已存在，places 名称已知 → 查 CHGIS/民政部/中国历史地名词典）；② 不补（技术/思想维度场景确实多是抽象地点，缺经纬度未必失真）—— 需要判断哪些是「真应该补」，哪些是「就该空着」 |
| P1 | 74 个 None-province 债 | 半自动映射（场景已有 places 名称 → 现代省码）+ 人工复核 |
| P2 | scale_tier=county 类型缺失 | 是否引入？取决于 county.html 是否需要专门的「单县视图」——目前 operational 已能渲染 24 county kind，不需要额外 scale |
| P3 | 27 个有疑问但非 unresolved 的 place 状态 | 复查：哪些是 lon/lat 为 0、哪些是字符串坐标、哪些是缺字段 |

**county.html 实测已可用**（v0.194 PRC 截图显示 banner 正确渲染）。**不需要重做 county.html。**

---

## 五、对「不能 LLM 生成县级坐标」铁律的修正

之前我说「**不能 world-gen 批量生成县级坐标，会不可逆污染诚实边界**」——这条铁律仍然成立，但**理由要更新**：

- **不是因为 LLM 会编经纬度**（其实 LLM 给了带 null 的坐标，不会瞎编）
- **是因为 LLM 没法保证坐标的来源权威性**——CHGIS / 民政部 / 中国历史地名词典 / 天地图 等外部权威源必须人工确认
- **county kind 96% 已真实 geo**——证明历史县名 → 真实坐标有可解路径，**关键是数据源选择**

正解仍是「人工确认 + 外部权威源」，但**不必禁止 world-gen**——可以让 world-gen 生成 county kind 场景（含史料正文 + 真实县名 + 现代地名），**坐标留空让 postproc 从外部权威源补**。这一步需要扩展 postproc_vXXX.py 的省码回补逻辑，加入「外部源查表」环节（数据库维护成本较高，不是 v0.195 单次任务可完成）。

---

## 六、判断标准（什么时候算"县域广覆盖"完成）

不是"加了多少 county 场景"，而是：
1. **随机抽一个朝代 + 一个现代县名**，系统能不能渲染 county.html 地图
2. **county kind 是否覆盖 ≥10 个省份**（目前只覆盖 4 省：liaoning/henan/shaanxi/overseas）
3. **scale_tier=county 是否需要单独类型**（取决于产品需求，不是数据缺口）

## 七、给新会话的开场建议

1. **撤销/重写 ROADMAP-next.md 的 P0-A 描述**——county 不是破零，是扩地域
2. **选下一个 county kind 试点**：建议四川（v0.194 已加 sichuan 1 个工程场景，但 county=0）、或福建（闽粤缺）、或云南（provincial 覆盖薄弱）
3. **手工建 1 个 county 场景**：六文件 + scene entry + 外部源确认的经纬度，跑通 gates + CDP
4. **模板化复制**：提取「县名 → 史料 → 经纬度（六文件骨架）」脚本，**坐标必须人工确认入库**