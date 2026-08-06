# 小菜狗的文明图景 / Vege-civilization

> 人类一切有记载的文字资料，都能在同一张地图上相互比较、争论、补缺。
> 史料的不同版本，不是 bug，是产品。

## 这是什么

一个**断言驱动的开源历史沙盒**：每一则史料被拆成
`(主体, 谓词, 值, 来源, 证据层, 时间, 地点, 置信度, 引文, 引文状态)`
的原子断言；不同来源在同一张真实地形地图上**并列、冲突、补缺**。
立场不靠人工标签，而由来源本身的 `party / stance / distance / layer / geographic_origin` 自动派生。

当前已有两个垂直切片（共用同一套 ASTER 真实地形）：

- **萨尔浒之战（1619）** —— 战役级 LOD（`demo/sarhu.html`）
- **开原（明卫所 → 清州县）** —— 县级 LOD，含明 / 清 / 朝鲜三方史料共振（`demo/kaiyuan.html`）

## 三步看懂

1. 打开 **`demo/index.html`** —— 主枢纽，无需服务器，双击即可。
2. 进入任一切片，点左栏**史料开关** —— 切换采信的史料版本，地图当场改变。
3. 看右栏**「三方史料」「史料冲突」「缺口」** —— 同一事实的不同记载**并列陈列、不裁决**；
   地图上的 `?` 是学界至今说不清的，也是众包最该先补的。

## 快速开始（本地）

```bash
python tools/build.py        # 把 data/ 编译进 demo/data.js
# 然后用浏览器打开 demo/index.html
```

> 不跑 build 也行：`demo/data.js` 已随仓库提交，可直接打开 `demo/index.html` 看当前数据。

## 目录

| 路径 | 内容 |
|------|------|
| `demo/` | Web 演示：主枢纽 `index.html`、萨尔浒 `sarhu.html`、开原 `kaiyuan.html` |
| `data/` | 史料数据（JSON / JSONL，git 友好）；真实地形 `data/terrain/liaodong_grid.json` |
| `tools/` | `build.py`(编译) · `terrain_model.py` / `route_strain.py`(Tobler 行军紧张度) · `resonance.py`(三方共振度) · `fetch_terrain.py`(地形获取) |
| `docs/` | `00-架构纲要` · `01-开放策略与数据授权` · `02-12h路线图-v0.3` |

## 数据模型（一句话）

```
(subject, predicate, value, source, layer, time, place, confidence, quote, quote_status)
```

- `layer`：`record`(史料原文) / `scholarship`(学界考证) / `inference`(模型推算) / `gap`(已知缺口) 物理隔离
- `quote_status`：`verbatim`(逐字) / `paraphrase_unverified`(意译未核) / `generated`(生成推算) —— 未核引文在 UI 呈〔意译未核〕
- 冲突由 `build_conflicts()` 在 `(subject, predicate)` 上**自动发现**，无需手工标注

想录入史料？先读 `CONTRIBUTING.md` 与 `docs/01-开放策略与数据授权.md`。

## 路线图

见 `docs/02-12h路线图-v0.3.md`。v0.3 已完成：多切片枢纽、开原进军路线地形紧张度、
三方史料共振引擎、K024 朔闰闭环、K028 里距层。

## 许可证

- 代码：AGPL-3.0（见 `LICENSE-code`）
- 核心数据：CC BY 4.0（见 `LICENSE-data`）
- 贡献者协议：DCO（Sign-off，不需 CLA —— CLA 会劝退贡献者）

> 注：`.workbuddy/` 等本地记忆与个人信息**不纳入本仓库**。
