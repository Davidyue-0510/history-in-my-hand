# 一句话分享（直接复制粘贴）

> 我在做一个开源历史可视化项目 **「小菜狗的文明图景」**：把明清之际辽东的明方/清方/朝鲜三方史料拆成可核验的「断言」，叠在真实地形上，让你自己看冲突和缺口在哪里。立场不靠我贴标签，靠来源自动派生。
>
> 现在是 v0.5，9 个历史切片、175 条断言、19 条可认领的研究线索。我在拉三类合作者：**美工/界面设计**、**程序优化评估**、**数字人文从业人**。
>
> 先看总览页 👉 https://davidyue-0510.github.io/history-in-my-hand/demo/portal.html
> 想加入看这里 👉 https://github.com/davidyue-0510/history-in-my-hand/blob/main/CONTRIBUTORS.md

---

## 本地跑起来

```bash
git clone https://github.com/davidyue-0510/history-in-my-hand.git
cd history-in-my-hand
python -m http.server 8787
# 打开 http://localhost:8787/demo/portal.html
```

## 三种角色一句话

- 🎨 **美工 / 界面设计**：地图配色、缺口/冲突的视觉语言，第一个活是给三类语义定图例。难度 ★☆☆
- ⚙️ **程序优化评估**：审 `tools/*.py` 和 `county.js`，写一份加载时长/体积基准报告。难度 ★★☆
- 📜 **数字人文从业人**：认领研究线索、补带出处的断言。难度 ★★☆

详见 CONTRIBUTORS.md。
