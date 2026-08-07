# 成为合作者 · CONTRIBUTORS

> **小菜狗的文明图景** —— 断言驱动的明清之际东北历史沙盒。
> 立场靠来源派生，缺口是一等公民，内核只投影、不裁判。
> 这个版本（v0.5）就是为拉人入局准备的：三类合作者各有一张上手地图。

---

## 〇、先跑起来（三个角色都一样）

```bash
git clone https://github.com/davidyue-0510/history-in-my-hand.git
cd history-in-my-hand
python -m http.server 8787
# 打开 http://localhost:8787/demo/portal.html
```

改了数据后，过四道闸门再提交（**一条命令全跑**）：

```bash
python tools/gates.py             # lint + test + leads + build 一气呵成
```

拆开看：

```bash
python tools/lint.py              # 守门员：数据完整性（空引文/分类散落/时间轴脱钩）
python tools/test_assertions.py   # 不变量回归（30+ 条硬性约束）
python tools/leads.py             # 重算研究线索（data/leads.json）
python tools/build.py             # 重编译 demo/data.js
```

> CI / 严格模式：`python tools/gates.py --strict`（任何 warning 也视为失败）。

> Windows 上若 `python` 指向系统版本，请用仓库指定的托管 Python；路径见 `demo/` 与 `tools/` 顶部注释。

---

## 一、项目结构速览

```
data/
  scenes.json           切片注册表（v0.5 起唯一真值：加一个县=此加一条）
  vocab.json            受控词表：source.party → 立场分桶（改这里全站重算）
  leads.json            可认领研究线索总览（tools/leads.py 自动生成，勿手改）
  corridors.json        跨切片走廊（路线张力）
  <切片>/               每切片六件套：
      sources.json  places.json  persons.json
      events.json   edges.json   assertions.jsonl
tools/
  lint.py              数据守门员（E=错误 W=警告）
  build.py             把 data/ 编译进 demo/data.js
  resonance.py         三方史料共振度计算
  test_assertions.py   不变量回归测试
  leads.py             汇总 gap 断言的 lead 块 → leads.json
demo/
  portal.html          你正在看的这个招募页
  index.html           枢纽（九切片地图）
  county.html?scene=   通用县级切片页（沈阳/辽阳/开原…共用）
  hub.js  county.js     前端引擎
  kaiyuan.css          主要样式表（美工的主战场之一）
```

---

## 二、三种角色

<a id="art"></a>
### 🎨 美工 / 界面设计

**你面对的现状**：工程审美，功能正确但视觉朴素。地图配色、图层可读性、移动端排版、缺口/冲突的视觉语言都等专业眼睛。

**该碰的文件**
- `demo/kaiyuan.css` —— 主样式表
- `demo/county.html` / `demo/index.html` 内联 `<style>` 与 SVG
- `demo/county.js` 里的 SVG 投影（颜色常量、`LAYER_META`、`SKILL_COLOR`）

**设计语言约束**（已有，请延续而不是推翻）
- 纸感暖色底 `#F3EBD9` / 卡片 `#FBF6EA`；墨色文字 `#2A2521`
- 语义色：明方/后朝官修 `#8C6239`（土）、朝鲜 `#6B7A3A`（苔）、综述考订 `#3F6B8A`（蓝）、缺口/冲突 `#A8421C`（锈）
- 地形是真实高程网格，别把它画成示意图

**第一个上手任务** ★☆☆
> 给三类语义定一套**图例与视觉语言**，替换现在散落的文字说明：
> - 缺口（gap）= 虚线描边
> - 冲突（同 subject 不同 value）= 双色描边
> - 共振度高/低 = 色温（暖=多方印证，冷=单方孤证）
>
> 交付：一份图例说明 + 在 `kaiyuan.css` 落地的对应 class。验收：在 `county.html?scene=shenyang` 打开，三种语义一眼可辨。

**怎么验证**：`python -m http.server` 后浏览器打开对应页面即可，无需跑工具链。

---

<a id="eng"></a>
### ⚙️ 程序优化评估

**你面对的现状**：`tools/*.py` 是「能跑」的脚本，不是「优雅」的库；`demo/county.js` 是一个 700+ 行的 IIFE 投影引擎。我们**需要独立审计报告**，不要求你亲手重写。

**该碰的文件**
- `tools/build.py` `tools/lint.py` `tools/resonance.py` —— 编译/守门/共振
- `demo/county.js` —— 前端引擎（投影、断言内核、时间轴、关系图）
- `data/scenes.json` —— 声明式注册表（架构亮点，值得在报告里点名）

**第一个上手任务** ★★☆
> 写一份**基准报告**，不需要改代码：
> 1. 九切片加载时长（用 DevTools / `performance.now()` 测 `SANDBOX_DATA` 解析 + 首屏 SVG 绘制）
> 2. 单文件体积（`demo/data.js` 当前约 X KB，九切片全量打包）
> 3. 指出最该先优化的 1–2 处，附理由（如：是否该按需加载切片而非全量 `data.js`？`county.js` 是否该拆模块？）
>
> 交付：一份 `.md` 或 issue，贴在仓库 `Issues` 里（模板选「程序优化评估」）。

**怎么验证**：你的交付物本身是报告；若顺手给了补丁，过三道闸门即可。

---

<a id="dh"></a>
### 📜 数字人文从业人

**你面对的现状**：这是项目的内容心脏。骨架已搭（9 切片 / 175 断言 / 19 缺口），但大量「缺口」正等被认领成「断言」。你的史料功底直接决定质量。

**断言数据模型**（`data/<切片>/assertions.jsonl`，每行一条 JSON）

| 字段 | 含义 |
|---|---|
| `id` | 切片内唯一，如 `S021` |
| `subject` | 主语，`place:xxx` / `event:xxx` / `person:xxx` |
| `predicate` | 谓词（人话短句） |
| `value_text` | 断言内容 |
| `source` | 来源 id（须登记在 `sources.json`） |
| `layer` | `record`(原始史料) / `scholarship`(综述考订) / `gap`(缺口) / `inference`(推論) |
| `era` / `place` | 时间 / 地点 id |
| `confidence` | 0–1 采信度 |
| `quote_status` | `verbatim`(直引) / `paraphrase_unverified`(转述未核) |
| `quote` | 原文引文（空=没引，lint 会标 E10） |
| `lead` | **仅 gap 需要**：`{where, skills, accept, effort}` |

**该碰的文件**
- `data/<切片>/assertions.jsonl` —— 加断言
- `data/leads.json` —— 自动生成，勿手改（改源头断言）
- `data/vocab.json` —— 若发现来源立场分桶不对，改这里

**怎么加一条断言（最小流程）**
1. 打开某切片 `assertions.jsonl`，追加一行 JSON（`layer:"record"`，填 `source`/`quote`/`value_text`）。
2. 若发现「我们不知道」，`layer:"gap"` 并补 `lead` 块（where/skills/accept/effort）。
3. `python tools/leads.py` 自动把它收进 `leads.json`。
4. 跑三道闸门；`lint` 报 `E10`(空引文) 就回去补 `quote`。

**第一个上手任务** ★★☆
> 认领 `data/leads.json` 里任一条线索（如 `tieling` 的「铁岭陷落兵数详考」T016），补 1–3 条带出处的断言，跑通工具链，提一个 PR。验收：lint 0 error，且新断言的 `quote_status` 至少从 `paraphrase_unverified` 推进一步。

**怎么验证**：`tools/lint.py` 0 error + `tools/test_assertions.py` 全绿。

---

## 三、共同守则

1. **提交前先过 lint**。`lint` 的 E 类是硬错误（空引文、分类散落、时间轴脱钩），会静默污染下游计算，必须清零。W 类是警告（如骨架县暂未引用的来源），可接受但别无视。
2. **分类规则单一真值**。`vocab.json` 是立场分桶的唯一来源；别在 `county.js` 里另写一份硬编码。
3. **不编造**。`quote_status: verbatim` 必须真有原文；拿不准就标 `paraphrase_unverified` 或干脆写 `gap`。宁可标缺口，不要编数字。
4. **声明式优于硬编码**。加一个县 = `data/<dir>/` 六件套 + `scenes.json` 一条，前端零改动。别回去抄 HTML。

## 四、认领研究线索的流程

1. 在 `data/leads.json`（或各切片「线索」页签）挑一条线索。
2. 去仓库 `Issues` 用对应模板建 issue（选「美工」「程序优化」「数字人文」之一），标题含线索 id。
3. 补完史料/代码后，在 PR 里 `close #issue`。

> 没有 GitHub 账号也不碍事——直接把补好的 `assertions.jsonl` 片段发给我（仓库主）即可并入。

---

*历史由多种因素导致，某种意义上其实是必然。本项目的全部意义，是让「多种因素」可以被一条条看见、被一条条质疑。欢迎拉你的朋友入局。*
