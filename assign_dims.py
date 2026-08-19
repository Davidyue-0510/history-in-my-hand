# -*- coding: utf-8 -*-
"""为 data/scenes.json 的每个 world 显式化 6 维覆盖标签 dims:[1..6]，
并写入顶层 dimensions 目录（单一真值，hub/未来读者共用）。

6 维定义（来自用户「立体场景」框架）：
  1 物理与地理环境  2 技术与物质文明  3 经济与制度运行
  4 社会结构与日常生活 5 思想文化与观念世界 6 重大事件与关键人物

派生规则（声明式、可复现）：
  - 基础映射按 kind（scenes.json 既有权威分类）。
  - 个别 world 跨越多维，用 OVERRIDES 显式覆盖。
  - 未知 kind 回退 [6] 并打印告警，供人工复核。

用法：python assign_dims.py            # 干跑：只打印映射表
      python assign_dims.py --write    # 写回 scenes.json
"""
import json, sys

PATH = "data/scenes.json"

DIMENSIONS = {
    "1": {"name": "物理与地理环境", "short": "地理",
          "note": "古地理 / 气候 / 资源 / 交通关隘"},
    "2": {"name": "技术与物质文明", "short": "技术",
          "note": "生产 / 兵器 / 能源 / 工程 / 信息载体"},
    "3": {"name": "经济与制度运行", "short": "制度",
          "note": "土地 / 赋税 / 货币 / 市场 / 官僚"},
    "4": {"name": "社会结构与日常生活", "short": "社会",
          "note": "人口 / 阶层 / 日常 / 医疗 / 信仰"},
    "5": {"name": "思想文化与观念世界", "short": "思想",
          "note": "意识形态 / 价值 / 知识 / 舆论 / 生死观"},
    "6": {"name": "重大事件与关键人物", "short": "事件",
          "note": "考证 / 决策 / 连锁 / 偶然必然"},
}

# 基础映射：按 kind 推断该 world 触达的维度
KIND_BASE = {
    "battle":      [1, 6],
    "county":      [1, 6],
    "disaster":    [1, 3, 4],
    "engineering": [1, 2],
    "dynasty":     [3, 6],
    "reform":      [3, 5, 6],
    "uprising":    [4, 6],
    "fusion":      [4, 5],
    "court":       [3, 6],
    "thought":     [5, 6],
    "tech":        [2, 5],
    "exchange":    [1, 5],
    "fiction":     [4, 5, 6],
    "frontier":    [1, 6],
    "war":         [1, 6],
    "event":       [6],
    "migration":   [1, 4],
}

# 个别 world 跨越多维，显式覆盖（比单纯 kind 更准确）
OVERRIDES = {
    "ming_fall":         [1, 3, 4, 6],   # 小冰期气候 + 制度崩坏 + 流民社会 + 亡国事件
    "lizicheng":         [3, 4, 6],      # 均田免赋(经济) + 饥民(社会) + 起义事件
    "huangjin":          [4, 5, 6],      # 太平道(信仰/思想) + 流民(社会) + 起义事件
    "taiping":           [3, 4, 5, 6],   # 天朝田亩制度(经济) + 社会 + 拜上帝会(思想) + 战争事件
    "fotao":             [4, 5, 6],      # 佛教道教作为民间信仰(社会) + 思想 + 关键人物
    "chanyuan":          [3, 6],         # 澶渊之盟：条约/制度 + 事件
    "keju":              [3, 5],         # 科举：选官制度 + 功名意识形态
    "liangshui":         [3],            # 两税法：纯经济制度
    "jiupin":            [3],            # 九品中正：选官制度
    "wangmang":          [3, 6],         # 王莽改制：制度 + 事件
    "zhangjuzheng":      [3, 6],         # 张居正改革：制度 + 人物
    "mingmo_dangzheng":  [3, 6],         # 明末党争：制度/政治 + 事件
    "tang_dangzheng":    [3, 6],
    "song_dangzheng":    [3, 6],
    "donghan_danggu":    [3, 6],
    "grand_canal":       [1, 2, 3],      # 运河：工程(技术) + 地理 + 漕运经济
}

def main():
    reg = json.load(open(PATH, encoding="utf-8"))
    scenes = reg["scenes"]
    unknown_kinds = {}
    assigned = {}
    for key, sc in scenes.items():
        kind = sc.get("kind")
        if key in OVERRIDES:
            dims = OVERRIDES[key]
        elif kind in KIND_BASE:
            dims = KIND_BASE[kind]
        else:
            dims = [6]
            unknown_kinds.setdefault(kind, []).append(key)
        sc["dims"] = dims
        assigned[key] = dims

    # 顶层 dimensions 目录（单一真值）
    reg["dimensions"] = DIMENSIONS

    # 汇总
    counts = {int(d): 0 for d in DIMENSIONS}
    for k, ds in assigned.items():
        for d in ds:
            counts[int(d)] += 1
    print("=== 维度覆盖统计（共 %d 个 world）===" % len(assigned))
    for d in sorted(int(x) for x in DIMENSIONS):
        print("  %s %s：%d 个" % (d, DIMENSIONS[str(d)]["short"], counts[d]))
    print("\n=== 未知 kind（已回退 [6]，需复核）===")
    if unknown_kinds:
        for k, ks in unknown_kinds.items():
            print("  kind=%s -> %s" % (k, ", ".join(ks)))
    else:
        print("  （无）")

    if "--write" in sys.argv:
        with open(PATH, "w", encoding="utf-8") as f:
            json.dump(reg, f, ensure_ascii=False, indent=2)
        print("\n已写回 %s" % PATH)
    else:
        print("\n[干跑] 未写回。加 --write 以落盘。")

if __name__ == "__main__":
    main()
