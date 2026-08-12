# 工具链目录（tools/）· 四层架构

> 按架构分层重组（2026-08-12）。命令路径沿用旧习惯仍可用（见各层说明）。

## 目录结构

```
tools/
├── gates.py                 # 编排 19 道闸门（一键全跑）
├── fetch_terrain.py         # 地形网格拉取（ASTER）
├── seed_counties.py         # 辽东切片生成器
├── seed_liaoxi.py           # 辽西切片生成器
├── probe_interaction.js     # 无头浏览器交互探针（CI 闸门）
├── push_app.js              # GitHub Pages 发布辅助
│
├── ingestion/               # 【摄入与构建层】
│   ├── ingest.py            #   文本→世界 三后端（LLM/启发式/手工）
│   ├── reign_era.py         #   年号→公元（查表+算术）
│   ├── lunar_date.py        #   农历日期→公历（查表）
│   ├── geocode.py           #   地名→经纬度（三级匹配链）
│   ├── alias_resolver.py    #   实体 ID 别名校正
│   ├── vocab_loader.py      #   语境包/受控词表加载
│   ├── build.py             #   编译 demo/data.js + 冲突对
│   ├── registry_rebuild.py  #   场景注册表重建
│   ├── lint.py              #   数据完整性守门（E07/E10/W07）
│   ├── check_scenes.py      #   跨场景一致性校验
│   ├── leads.py             #   研究线索（缺口）生成
│   └── stats.py             #   全量统计快照
│
├── simulation/              # 【推演与模拟层】
│   ├── simulate.py          #   确定性兵棋推演（多分支时间线）
│   └── agent_model.py       #   三阶层 Agent 模型（center/local/grassroot）
│
├── analysis/                # 【查询与分析层】
│   ├── world_query.py       #   跨场景断言查询
│   ├── resonance.py         #   跨来源共振度分析
│   ├── terrain_model.py     #   地形/行军耗时模型
│   └── route_strain.py      #   行军路线张力计算
│
├── tests/                   # 【测试层】（被 gates.py 编排）
│   ├── test_assertions.py   #   断言 schema 不变量
│   ├── test_reign.py        #   年号换算单测
│   ├── test_lunar.py        #   农历换算单测
│   ├── test_geocode.py      #   地名落点单测
│   ├── test_vocab.py        #   词表一致性单测
│   ├── test_terrain.py      #   地形契约单测
│   ├── test_sharding.py     #   分片完整性单测
│   ├── test_control.py      #   控制权数据单测
│   ├── test_alias.py        #   别名校正单测
│   ├── test_world_query.py  #   查询单测
│   └── test_simulate.py     #   推演不变量单测
│
├── datasources/             # 【插件·数据源】（抽象基类+适配器）
├── enrichers/               # 【插件·数据富化】
├── extractors/              # 【插件·文本抽取器】
└── mapproviders/            # 【插件·地图源】
```

## 命令行入口（旧路径已兼容）

| 命令 | 说明 |
|---|---|
| `python tools/gates.py --strict` | 19 道闸门一键全跑（CI 用） |
| `python tools/ingestion/ingest.py --world spec.json` | 文字→世界 |
| `python tools/ingestion/ingest.py --multi spec.json` | 多源互证 |
| `python tools/simulation/simulate.py --scene imjin ...` | 确定性推演 |
| `python tools/ingestion/build.py` | 重编译前端数据 |
| `python tools/analysis/world_query.py ...` | 跨场景查询 |

> 注意：文件已移入子目录，命令路径为 `tools/<layer>/xxx.py`。
> Python 代码内引用保持 flat 命名（`import reign_era`），靠各文件顶部 sys.path 注入同层/跨层目录解析——这是本项目的历史约定，未改。

## 层间依赖规则（单向）

```
ingestion ──→ 无（最底层）
simulation ──→ ingestion（读场景数据）
analysis ──→ ingestion（读词表/年号） + 无→simulation
tests ──→ 全层（只读，不反写）
gates ──→ 全层（编排，subprocess 调用）
插件层 ──→ 各自对 ingestion 的数据格式有隐含契约
```

## 为什么平铺改分层

- 33 个工具平铺在一个目录里，新人无法从目录结构看出职责边界
- 分层后：一眼看清「哪个文件管吃、哪个管算、哪个管推演、哪个管守门」
- gates.py 的 17 步输出也按层分组，CI 日志可读性↑
- 移动后 19 道闸门全绿验证，无功能回归
