# 北极星功能全景 · Feature Catalog

> 生成日期：2026-08-12 · 版本 v1.3c · 364 个跟踪文件 / 99 个提交 / 33 个 Python 工具 / 28 个场景切片

---

## 北极星一句话

导入**文字资料 + 地图** → 系统自动呈现**可质证、可演化**的世界——可以是真实历史、虚构小说、反事实分支。

明末清初的辽东是参考实现，不是终态。

---

## 一、全时段 · 全地域 · 导入即呈现

### 1.1 文本→结构化：ingestion pipeline

**入口**：`tools/ingest.py`

| 功能 | 命令 / 参数 | 说明 |
|---|---|---|
| LLM 一键世界生成 | `--world spec.json` | 一份 spec → 全量 JSON 输出（人/事/地/边/断言） |
| 多源互证 | `--multi spec.json` | 多个来源逐源 LLM 抽取 → 合并 → 自动标 cross_source_conflict |
| 启发式预抽取 | `--provider heuristic` | 纯本地规则抽取年号/人名/地名，零 token 消耗 |
| 手工 fixture 入 | `--fixture` | 手工 JSON 直入，绕过 LLM，用于测试/补录 |
| 自动地名落点 | `--geocode` | 调用 `geocode.py` 给所有 place 自动补 lon/lat |
| 实体白名单约束 | `--scene <id>` | 加载已有场景的 person/place/source 列表，约束 LLM 只用已登记 ID |
| 年号归一化 | 内置 | 全部年号经 `reign_era.py` 转为公元年，schema 校验 |

### 1.2 年号换算

**入口**：`tools/reign_era.py`

- 数据驱动：`ERAS` 表覆盖秦汉至民国 80+ 年号
- 查表 + 算术（非 LLM），零幻觉
- 14 项单元测试（`test_reign.py`）
- 支持农历月/日（基础）

### 1.3 地名→坐标

**入口**：`tools/geocode.py` + `data/geo/gazetteer.json`

- 本地地名表（`gazetteer.json`）
- 三级匹配链：精确匹配 → 去通名后缀逐级剥离 → 子串兜底
- 未命中返回 `None`，诚实标注缺口
- `tools/datasources/chgis.py`：占位适配器，可切换为官方 CHGIS 下载

### 1.4 场景注册

**入口**：`data/scenes.json`（声明式，新增场景只需一行 JSON）

- 每个场景 = `data/<id>/` 目录 + `scenes.json` 一条注册
- 自动派生：vocab、terrain、control_sim
- `tools/registry_rebuild.py`：批量重建注册表

### 1.5 编译与构建

**入口**：`tools/build.py`

- 扫 `scenes.json` → 遍历所有切片 → 合并为 `demo/data.js`
- 28 个 `demo/slices/*.js` 分片（按场景拆分，按需加载）
- 冲突对计算（跨来源 assertion 碰撞）

### 1.6 闸门系统

**入口**：`tools/gates.py`（一条命令跑全量 19 道闸门）

| 闸门 | 工具 |
|---|---|
| lint（空字段 / 脏数据 / 源登记） | `tools/lint.py` |
| test_assertions（断言 schema 不变量） | `tools/test_assertions.py` |
| test_reign（年号换算单测） | `tools/test_reign.py` |
| test_world_query（跨场景查询） | `tools/test_world_query.py` |
| test_vocab（词表一致性） | `tools/test_vocab.py` |
| test_terrain（地形网格） | `tools/test_terrain.py` |
| test_sharding（分片完整性） | `tools/test_sharding.py` |
| test_geocode（地名落点） | `tools/test_geocode.py` |
| test_control（控制权数据） | `tools/test_control.py` |
| test_simulate（推演不变量） | `tools/test_simulate.py` |
| test_alias（别名校正） | `tools/test_alias.py` |
| test_lunar（农历换算） | `tools/test_lunar.py` |
| leads（研究线索生成） | `tools/leads.py` |
| build（前端数据编译） | `tools/build.py` |
| stats（全量统计） | `tools/stats.py` |
| check_scenes（跨场景一致性） | `tools/check_scenes.py` |

### 1.7 数据查询

| 功能 | 工具 |
|---|---|
| 跨场景断言查询（支持 party / faction 过滤） | `tools/world_query.py` |
| 共振度分析（同 subject 各来源分歧度） | `tools/resonance.py` |
| 地形分析（高程/坡度/行军耗时） | `tools/terrain_model.py` |
| 行军路线张力计算 | `tools/route_strain.py` |

### 1.8 数据接入层（扩展预留）

| 数据源 | 适配器 | 状态 |
|---|---|---|
| CHGIS（中国历史 GIS） | `tools/datasources/chgis.py` | 占位就绪，待合作者连官方下载 |
| CBDB（中国历代人物传记） | `tools/datasources/cbdb.py` | 占位就绪 |
| ASTER 高程数据 | `tools/mapproviders/aster.py` | 已接入 |
| 用户自传 GeoTIFF | `tools/mapproviders/user_geotiff.py` | 已接入 |
| 自定义数据源 | `tools/datasources/base.py` | 抽象基类 + 模板 |

---

## 二、任意文字 → 生成一个世界

### 2.1 史料输入

| 功能 | 说明 |
|---|---|
| 古籍原文（Wikisource / ctext） | `tools/ingest.py` LLM 抽取 → 自动年号换算 → 落点 |
| 编年体卷次→纪年定位 | v0.19 实战沉淀：索引页繁体标题 → 年号 → 干支→公元→API 验存在→抓子页 |
| 跨语言 Wikisource | 朝鲜实录（韩文页面名）、日本外史（zh.wikisource） |
| 来源党派 = 作者党派 | 明史→清方、三朝辽事实录→明方、朝鲜实录→朝鲜方 |

### 2.2 虚构世界输入

| 功能 | 说明 |
|---|---|
| 小说全文→结构化世界 | `data/novel_fandao/` 系列（9 个副本全量生成） |
| IS_ABSTRACT 模式 | 无真实坐标 → 自动转为关系图渲染 |
| 边类型数据驱动 | 每个虚构 world 自带 `edge_types`，不套用辽东模板 |
| 立场靠来源派生 | 同真实史料同构：`source.party → 词表 → 自动分桶` |

### 2.3 多源互证

| 功能 | 说明 |
|---|---|
| 逐源 LLM 独立抽取 | `--multi` 模式，每源不交叉污染 |
| 跨源冲突自动标注 | `_cross_conflicts` 字段记录矛盾断言对 |
| 断言层不变 | 同一 (subject, predicate) 不同 value_text → 多条 assertion 并列呈现 |

---

## 三、世界自由演化 / 反事实模拟

### 3.1 确定性推演引擎

**入口**：`tools/simulate.py`

| 功能 | 说明 |
|---|---|
| 兵棋对撞 | 局部兵力比 > 1.5 → 占领（邻接网格扩散） |
| 增援注入 | `reinforcements` 按年份/party/兵力/入口城自动投放 |
| 分支时间线 | `timeline` 字段支持多分支并列推演 |
| 控制权时序 | 输出 `control_sim_*.json`（place_id + party + year） |
| 三阶层 Agent 层 | `tools/agent_model.py` 集成：center 维稳 / local 投机叛逃 / grassroot 革命 |

### 3.2 独立模拟器（Web App）

**入口**：`demo/agent_sim.html`（单文件，26KB，零依赖）

在线链接：`https://davidyue-0510.github.io/history-in-my-hand/agent_sim.html`

**数据模型**：
| 阶层 | 行为 | 关键参数 |
|---|---|---|
| Center（朝廷，蓝点） | 维稳、保税基、镇压叛乱 | 兵力/粮/合法性 |
| Local（士绅，绿点） | 土地兼并、教育垄断、家族竞争、投机叛逃 | 土地/教育/不满 |
| Grassroot（庶民，灰点） | 生存、交税、革命 | 粮/不满/文盲率 |

**双引擎循环**：
```
土地兼并（每年 local ← grassroot 1.5%）→ 税基萎缩 → 财政危机
教育垄断（每年 +0.3%）→ 释经权旁落 → 合法性衰减 → 控制力崩塌
```

**功能清单**：
| 功能 | 说明 |
|---|---|
| 实时参数调节 | 税率 / 军费 / 官僚开支（拖滑块即时生效） |
| 治国预设 | 法家（重税强军）、儒家（秩序优先）、道家（休养生息）、兵家（扩张）、墨家（节用尚贤） |
| 事件注入 | 入侵·加税速决 / 入侵·慢慢打 / 天灾 / 均田令 / 减税 / 肃贪 / 征兵 / 普及教育 |
| 家族竞争 | 强族侵吞弱族土地、内部政变夺权 |
| 士绅内部分化 | 弱势家族标记 _marginal（暗绿），叛逃门槛更低 |
| 王朝周期 | 兴盛→阶级固化→革命→京城被围→王朝覆灭→新朝建立→循环 |
| 革命果实窃取 | 士绅出身叛军优先成为新朝廷核心（未受教育者守不住果实） |
| 图表可视化 | 兼并(黄) / 教育垄断(蓝) / 边患(红) / 叛乱(灰) 四线实时 |
| 手机适配 | 竖屏堆叠+☰折叠 / 横屏左右栏，自动适配 |
| requestAnimationFrame 循环 | 每帧最多 20 tick，标签页隐藏自动休眠，图表 50 帧/次防卡死 |
| 内存管理 | hist 滚动窗口 500 年，日志超过 200 条自动裁剪 |

### 3.3 三阶层 Agent 模型（Python）

**入口**：`tools/agent_model.py`

| 类 | 决策函数 |
|---|---|
| `CenterAgent` | 维持秩序，维持控制力 |
| `LocalAgent` | 家族利益优先，grievance > threshold → 叛逃 |
| `GrassrootAgent` | 动员度 > 0.8 + grievance > 0.4 → 革命 |
| `create_agents()` | 从 control.json 自动初始化所有 agent |
| `compute_metrics()` | 每回合产出 education_monopoly / mobilization / class_solidarity / grievance_avg |

---

## 四、前端渲染

### 4.1 页面矩阵

| 页面 | 文件 | 功能 |
|---|---|---|
| 合作者门户 | `demo/portal.html` | 项目总览 + 北极星说明 + 招募入口 |
| 切片枢纽 | `demo/index.html` | 28 场景地图索引 |
| 通用县级切片 | `demo/county.html?scene=xxx` | 任一场景的地形+断言面板 |
| 主题页 | `demo/sarhu.html` 等 | 特定战役专题页 |

### 4.2 技术栈

| 层 | 文件 |
|---|---|
| 数据入口 | `demo/data.js`（build.py 自动生成） |
| 数据加载 | `demo/data_loader.js` |
| 地形渲染 | `demo/county.js` |
| 控制权图层 | `demo/control_layer.js` |
| 断言面板 | `demo/app.js` |
| 枢纽逻辑 | `demo/hub.js` |
| 28 个按需分片 | `demo/slices/*.js` |

---

## 五、数据资产

| 类型 | 数量 | 说明 |
|---|---|---|
| 历史切片 | 14 | 萨尔浒 + 开原/铁岭/叶赫/辽阳/沈阳/抚顺/海州/盖州/广宁/锦州/宁远/复州/金州 |
| 虚构世界 | 9 | 《反派他爸教做人[快穿]》全书 9 副本 |
| 跨时代切片 | 5 | 秦灭六国 / 唐·淮西 / 壬辰战争 / 清末三大战役 / 黄海海战(1894) |
| 史料/来源 | 35 | 一手+二手去重，含崇祯实录、清太宗实录 |
| 断言总数 | 290+ | record 182 / scholarship 49 / inference 19 / gap 40 |
| 可认领线索 | 40 | 与缺口一一对应 |
| 地形网格 | 8 | 辽东(1km) / 朝鲜 / 全国粗格 / 秦 / 唐 / 三大战役 / 黄海 |
| 语境包 | 5 | ming_qing / qin / tang / three_campaigns / _base |
| 受控词表 | 每包 | parties + factions + faction_colors + party_colors + edge_types |

---

## 六、可扩展性（插件体系）

| 层 | 扩展点 | 接入方式 |
|---|---|---|
| 数据源 | `tools/datasources/` | 继承 `base.py`，实现 `fetch()` 方法 |
| 数据富化 | `tools/enrichers/` | 继承 `base.py`，实现 `enrich()` 方法 |
| 文本抽取器 | `tools/extractors/` | 继承 `base.py`，实现 `extract()` 方法 |
| 地图源 | `tools/mapproviders/` | 继承 `base.py`，实现 `get_tile()` 方法 |

---

## 七、待完善（非缺失，是深化）

| 项目 | 性质 | 现状 |
|---|---|---|
| 模拟器偶发卡死 | Bug | 间歇性，已加 RAF + 20tick/帧 上限 |
| 农历月/日完整换算 | 数据 | `tools/lunar_date.py` 基础就绪，需补查表数据 |
| 历史政区/古地图层 | 数据接入 | 占位就绪，待合作者接入 CHGIS |
| 前端 UI 美化 | 装修 | 等 GUI 合作者 |
| 演化引擎更复杂分支 | 深化 | Agent 模型已就绪，参数可调 |
| CI/CD | 运维 | `.github/workflows/ci.yml` 已配置 |
