# 参与贡献

欢迎！这个版本（v0.5）就是为拉人入局准备的。

请先读这两份，再决定认领哪类任务：

- **[demo/portal.html](demo/portal.html)** —— 项目总览 + 三种合作者入口（可认领的研究线索实时列表）
- **[CONTRIBUTORS.md](CONTRIBUTORS.md)** —— 三种角色的详细上手地图（该碰的文件、第一个任务、验收标准）

建 issue 时请选用对应模板（美工 / 程序优化 / 数字人文）。没有 GitHub 账号也行——把补好的 `assertions.jsonl` 片段直接发给仓库主即可并入。

提交前务必过三道闸门：`python tools/lint.py` → `python tools/test_assertions.py` → `python tools/build.py`。
