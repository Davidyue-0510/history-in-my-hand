# -*- coding: utf-8 -*-
"""为 data/scenes.json 落地「战略维度契约」（方向重定位 2026-08-19）。

落点（见 .workbuddy/memory/MEMORY.md「维度预留」）：
  - 时代背景七维 → 顶层 epochs 全局参数表，每 era 含 7 子表
    tech / international / economy / society / doctrine / anchors / strategic。
  - 战略层四维 → 顶层 strategic_dims（政治凝聚 / 物质后勤 / 人口动员 / 地缘战略），
    每 world 的 strategic 块是「扩展配方」：from(epoch子表)+from_dims(6维)+layer+note，
    值从 epoch 子表 + 6 维经关联规则算出，不手编造假。
  - scale_tier（tactical/operational/strategic）→ 每 world 标注，战略层视图据此聚合、省略个体。
  - vocab 单源：三套目录(epochs/strategic_dims/scale_tiers)即单一真值，hub/闸共用。

方法论（用户 2026-08-19 指令）：从已落地的 6 维出发，用「史料 + 关联推断」扩展出
当时整体社会情况；细节缺资料处显式 layer:gap/inference，不假装确定。
例：技术↔生产力，人口↔常驻军。

epoch 内容：明/清/明清之际 填真实关联推断；其余被引用的 era 显式 stub + gap 占位，
供增量填充（不编造不确定史实）。

用法：python assign_strategic.py          # 干跑：打印 era 分布 + 漏网
      python assign_strategic.py --write    # 写回 scenes.json
"""
import json, sys

PATH = "data/scenes.json"

# ── 战略层四维（单一真值，hub/闸门共用）──
STRATEGIC_DIMS = {
    "political_cohesion": {
        "name": "政治凝聚", "short": "凝聚",
        "note": "朝堂/派系凝聚力，派生自 制度+思想（R6 courtCohesion/infight）"},
    "material_logistics": {
        "name": "物质后勤", "short": "后勤",
        "note": "技术↔生产力、赋税↔后勤半径（R7 物理后勤）"},
    "population_mobilization": {
        "name": "人口动员", "short": "动员",
        "note": "人口↔常驻军、流民↔动员潜力（社会维扩展）"},
    "geopolitical_strategy": {
        "name": "地缘战略", "short": "地缘",
        "note": "地形/关隘/外交→战略重心与窗口（地理+事件维扩展）"},
}

# ── scale_tier（单一真值）──
SCALE_TIERS = {
    "tactical":    {"name": "战术", "note": "交战/个役，展开个体视角"},
    "operational": {"name": "战役", "note": "会战/战区，中等聚合"},
    "strategic":   {"name": "战略", "note": "全局/时代，聚合省略个体"},
}

# 时代背景七维子表键（单一真值）
EPOCH_SUBS = ["tech", "international", "economy", "society", "doctrine", "anchors", "strategic"]

ERA_LABELS = {
    "ming_qing": "明清之际（1570–1683）",
    "ming": "明（1368–1644）",
    "qing": "清（1644–1912）",
    "qing_modern": "清及近代（1685–1900）",
    "song": "宋（960–1279）",
    "tang": "唐（618–907）",
    "han": "汉（前202–220）",
    "warring_states": "战国（前475–前221）",
    "qin": "秦（前230–前207）",
    "qin_han": "秦汉（前221–220）",
    "three_kingdoms": "三国（190–280）",
    "two_jin": "两晋南北朝（265–589）",
    "sui_tang": "隋唐（581–907）",
    "sui_yuan": "隋唐—元（581–1368）",
    "yuan": "元（1271–1368）",
    "yuan_ming": "元明之际（1363±）",
    "guangzhong": "秦末（前209–前202）",
    "cross_dynastic": "跨朝代（以黄河为例）",
    "fiction": "虚构世界",
    "huabei": "近现代（1911–1950）",
}

# ── 已填内容的 era（真实关联推断，qualitative，不编精确数字）──
FILLED = {
    "ming_qing": {
        "label": ERA_LABELS["ming_qing"],
        "status": "derived",
        "note": "辽东走廊从萨尔浒到宁远、松锦的军政网络易手期；小冰期叠加卫所崩坏。",
        "tech": {
            "productivity": {"value": "低—人畜力为主，火器初兴", "layer": "scholarship",
                             "basis": "技术↔生产力：辽东驻军依赖屯田与驿站，非农具革命"},
            "energy_base": {"value": "生物能（人/畜/风/水）", "layer": "scholarship"},
            "key_techs": ["卫所屯田", "佛郎机/红夷炮(渐入)", "驿站驿传"],
            "engineering": {"value": "边墙+堡坞+漕运", "layer": "scholarship"},
        },
        "international": {
            "neighbors": ["蒙古(林丹汗)", "朝鲜(藩属)", "日本(丰臣朝鲜之役)"],
            "diplomatic_posture": "宗藩+九边防御",
            "external_threat": "后金崛起 / 壬辰倭乱余波", "layer": "scholarship",
        },
        "economy": {
            "tax_system": "一条鞭法(万历)", "currency": "白银本位(美洲流入)",
            "market_integration": "运河—海运漕运命脉",
            "fiscal_health": {"value": "辽东军费透支+加派(辽饷)", "layer": "scholarship",
                               "basis": "赋税↔后勤半径：加派直接决定边镇补给"},
        },
        "society": {
            "population_scale": "辽东卫所军户+民户，小冰期灾荒",
            "social_structure": ["军户", "民户", "女真羁縻"],
            "standing_army_link": {"value": "卫所军制→兵额与户均绑定，人口↔常驻军",
                                   "layer": "scholarship",
                                   "basis": "人口↔常驻军：军户即兵源，户数衰减=战力衰减"},
            "livelihood": {"value": "灾荒+加派→流民(李自成之源)", "layer": "inference"},
        },
        "doctrine": {
            "dominant_ideology": "程朱理学(官学)",
            "state_religion": "儒教(非国教但正统)",
            "knowledge_system": "科举/实学萌芽",
            "public_opinion": "清议/东林", "layer": "scholarship",
        },
        "anchors": {
            "key_institutions": ["辽东都司", "奴儿干都司(废)", "九边"],
            "geographic_pivots": ["广宁", "沈阳", "辽阳", "赫图阿拉"],
            "critical_nodes": ["抚顺关", "山海关"], "layer": "scholarship",
        },
        "strategic": {
            "grand_strategy": "凭边墙+屯田守辽东，以夷制夷",
            "center_of_gravity": "辽阳—沈阳防线",
            "vulnerabilities": ["卫所崩坏", "小冰期粮荒", "党争误国"],
            "windows": ["1618 后金破抚顺"], "layer": "inference",
        },
    },
    "ming": {
        "label": ERA_LABELS["ming"],
        "status": "derived",
        "note": "明代（含万历朝鲜之役、九边、江南、西南土司等切片）。",
        "tech": {"productivity": {"value": "农业精耕+棉纺，人畜力为主", "layer": "scholarship",
                                  "basis": "技术↔生产力"},
                 "key_techs": ["夯土/砖包边墙", "漕运船闸", "火器(神机营)"]},
        "international": {"neighbors": ["蒙古", "女真", "日本", "朝鲜(藩属)"],
                          "diplomatic_posture": "宗藩+朝贡", "layer": "scholarship"},
        "economy": {"tax_system": "一条鞭法(后期)", "currency": "白银本位",
                    "market_integration": "运河—海运", "layer": "scholarship"},
        "society": {"standing_army_link": {"value": "卫所军户制→兵农合一，人口↔常驻军",
                                          "layer": "scholarship", "basis": "人口↔常驻军"},
                    "social_structure": ["军户", "民户", "匠户", "灶户"]},
        "doctrine": {"dominant_ideology": "程朱理学(官学)/阳明心学(民间)",
                     "layer": "scholarship"},
        "anchors": {"geographic_pivots": ["北京", "南京", "九边重镇"], "layer": "scholarship"},
        "strategic": {"grand_strategy": "守内虚外、以文驭武", "layer": "inference"},
    },
    "qing": {
        "label": ERA_LABELS["qing"],
        "status": "derived",
        "note": "清代（入关后至近代）。",
        "tech": {"productivity": {"value": "承明农技，摊丁入亩促垦", "layer": "scholarship",
                                  "basis": "技术↔生产力"},
                 "key_techs": ["绿营/八旗驻防", "火器渐制"]},
        "international": {"neighbors": ["准噶尔", "俄罗斯", "藩属朝贡国"],
                          "diplomatic_posture": "天朝朝贡+条约(后期)", "layer": "scholarship"},
        "economy": {"tax_system": "摊丁入亩", "currency": "白银+铜钱",
                    "market_integration": "全国市场成型", "layer": "scholarship"},
        "society": {"standing_army_link": {"value": "八旗+绿营，旗民分治，人口↔常驻军",
                                          "layer": "scholarship", "basis": "人口↔常驻军"},
                    "social_structure": ["旗人", "民人", "苗瑶土司"]},
        "doctrine": {"dominant_ideology": "程朱理学+钦定典籍", "layer": "scholarship"},
        "anchors": {"geographic_pivots": ["北京", "承德", "边疆将军辖区"], "layer": "scholarship"},
        "strategic": {"grand_strategy": "满汉并治、边疆封禁与拓张并行", "layer": "inference"},
    },
    "song": {
        "label": ERA_LABELS["song"],
        "status": "derived",
        "note": "宋代（火器萌芽、纸币、文人政治）。",
        "tech": {"productivity": {"value": "农业+手工业(瓷器/纺织)高峰，火药武器化", "layer": "scholarship",
                                  "basis": "技术↔生产力"},
                 "key_techs": ["火药武器", "指南针航海", "活字印刷"]},
        "international": {"neighbors": ["辽/金", "西夏", "大理"],
                          "diplomatic_posture": "岁币/盟约", "external_threat": "辽金蒙",
                          "layer": "scholarship"},
        "economy": {"currency": "铜钱+交子(世界最早纸币)", "market_integration": "突破坊市制",
                    "layer": "scholarship"},
        "society": {"standing_army_link": {"value": "募兵(禁军)+更戍法，财政养兵→人口↔常驻军(财政视角)",
                                          "layer": "scholarship", "basis": "人口↔常驻军"},
                    "social_structure": ["士农工商", "厢军/乡兵"]},
        "doctrine": {"dominant_ideology": "理学(程朱)成型", "layer": "scholarship"},
        "anchors": {"geographic_pivots": ["开封/临安", "燕云(失)"], "layer": "scholarship"},
        "strategic": {"grand_strategy": "守内虚外、重文抑武", "layer": "inference"},
    },
    "tang": {
        "label": ERA_LABELS["tang"],
        "status": "derived",
        "note": "唐代（均田/府兵、盛世与藩镇）。",
        "tech": {"productivity": {"value": "曲辕犁+筒车，农业跃升", "layer": "scholarship",
                                  "basis": "技术↔生产力"},
                 "key_techs": ["雕版印刷", "大运河(承隋)"]},
        "international": {"neighbors": ["突厥", "吐蕃", "回纥", "新罗", "日本"],
                          "diplomatic_posture": "天可汗/羁縻", "external_threat": "安史后藩镇",
                          "layer": "scholarship"},
        "economy": {"tax_system": "租庸调制→两税法", "layer": "scholarship"},
        "society": {"standing_army_link": {"value": "府兵制：兵农合一，均田民户即兵源→人口↔常驻军",
                                          "layer": "scholarship", "basis": "人口↔常驻军"}},
        "doctrine": {"dominant_ideology": "儒释道并流", "layer": "scholarship"},
        "anchors": {"geographic_pivots": ["长安", "洛阳", "节度使藩镇"], "layer": "scholarship"},
        "strategic": {"grand_strategy": "羁縻+藩镇，安史后由盛转衰", "layer": "inference"},
    },
    "han": {
        "label": ERA_LABELS["han"],
        "status": "derived",
        "note": "汉代（含黄巾与流民）。",
        "tech": {"productivity": {"value": "牛耕普及+耧车，铁器推广", "layer": "scholarship",
                                  "basis": "技术↔生产力"}},
        "international": {"neighbors": ["匈奴", "西域诸国", "南越", "朝鲜"],
                          "diplomatic_posture": "和亲/征伐/通西域", "external_threat": "匈奴",
                          "layer": "scholarship"},
        "economy": {"tax_system": "田租+算赋口赋", "currency": "五铢钱",
                    "market_integration": "盐铁官营", "layer": "scholarship"},
        "society": {"standing_army_link": {"value": "征兵(郡国兵)+东汉募兵，黄巾后军阀私兵→人口↔常驻军",
                                          "layer": "scholarship", "basis": "人口↔常驻军"},
                    "livelihood": {"value": "黄巾→流民，坞堡自保", "layer": "inference"}},
        "doctrine": {"dominant_ideology": "独尊儒术(汉武)", "layer": "scholarship"},
        "anchors": {"geographic_pivots": ["长安", "洛阳"], "layer": "scholarship"},
        "strategic": {"grand_strategy": "强干弱枝、经略西域", "layer": "inference"},
    },
}


def make_stub(era):
    """显式 gap 占位：schema 完整(7 子表)，内容待按史料扩展。诚实，不编。"""
    return {
        "label": ERA_LABELS.get(era, era),
        "status": "stub",
        "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断"
                "（见 docs/unified_dimensions.md 扩展方法论）。",
        "tech": {"_gap": "待补：关键技术/生产力水平（技术↔生产力）"},
        "international": {"_gap": "待补：邻邦/外交态势"},
        "economy": {"_gap": "待补：赋税/货币/市场整合"},
        "society": {"_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"},
        "doctrine": {"_gap": "待补：主流意识形态/知识体系"},
        "anchors": {"_gap": "待补：关键制度/地理支点"},
        "strategic": {"_gap": "待补：大战略/重心/脆弱性"},
    }


# ── 跨朝代主题的显式 era 覆盖（region/id 规则不够准时用，单一真值、可复核）──
ERA_OVERRIDES = {
    # ecology 灾害（多跨朝代，按具体事件落 era）
    "huaxian": "ming", "little_ice": "ming_qing", "dong_han_yi": "han",
    "dingwu": "qing_modern", "song_he_jue": "song", "kaifeng_juekou": "ming",
    "mingmo_jihuang": "ming", "mingmo_shuyi": "ming",
    "chongzhen_han": "ming", "chongzhen_huangzai": "ming",
    "huanghe": "cross_dynastic", "locust": "cross_dynastic",  # 黄河改道/蝗灾 真跨朝
    # fusion
    "xiaowen": "two_jin", "wencheng": "tang",
    "zhaowulian": "warring_states", "zhaofen": "warring_states",
    # court
    "xuanwu": "tang", "beijiu": "song", "jiuzi": "qing", "wugu": "han", "shaqiu": "qin",
    # thought
    "baijia": "warring_states", "fenshu": "qin",
    "fotao": "cross_dynastic", "lixue": "song", "dunzun": "tang", "keju": "sui_tang",
    # tech
    "four_inv": "cross_dynastic", "bencao": "tang",
    "zuchongzhi": "two_jin", "shenkuo": "song", "jiasixie": "two_jin",
    # exchange
    "zhenghe": "ming", "xuanzang": "tang", "jianzhen": "tang",
}

# ── region / id → era 声明式映射 ──
ERA_REGIONS = {"warring_states", "qin_han", "three_kingdoms", "two_jin",
               "sui_tang", "song", "yuan_ming", "qing_modern", "guangzhong", "huabei"}


def era_of(key, sc):
    if key in ERA_OVERRIDES:
        return ERA_OVERRIDES[key]
    region = sc.get("region")
    if region in ERA_REGIONS:
        return region
    if region in {"liaodong", "liaobei", "liaonan", "liaoxi", "jianzhou"}:
        return "ming_qing"
    m = {
        "tang": "tang", "imjin": "ming", "yellow_sea": "qing_modern",
        "chuan_gui": "ming", "xibei": "ming", "jiangnan": "ming",
        "ecology": "cross_dynastic", "engineering": "sui_yuan", "fiction": "fiction",
        "dynasty": "qin", "reform": "warring_states", "uprising": "han",
    }
    if region in m:
        return m[region]
    # id 关键词兜底
    for kw, era in (("ming", "ming"), ("qing", "qing"), ("tang", "tang"),
                    ("song", "song"), ("sui", "sui_yuan"), ("yuan", "yuan"),
                    ("han", "han"), ("donghan", "han"), ("warring", "warring_states"),
                    ("qin", "qin"), ("three_kingdoms", "three_kingdoms"),
                    ("jin", "two_jin"), ("liang", "cross_dynastic"),
                    ("wei", "three_kingdoms"), ("north", "cross_dynastic")):
        if kw in key:
            return era
    return "cross_dynastic"  # 兜底（干跑会打印，供复核）


OPERATIONAL_KINDS = {"battle", "county", "engineering", "disaster"}


def scale_tier_of(kind):
    return "operational" if kind in OPERATIONAL_KINDS else "strategic"


# 战略四维扩展配方（每 world 同构：值由 epoch 子表 + 6 维经关联规则算出）
FROM = {
    "political_cohesion": ["strategic", "doctrine"],
    "material_logistics": ["tech", "economy"],
    "population_mobilization": ["society"],
    "geopolitical_strategy": ["international", "anchors"],
}
FROMS = {
    "political_cohesion": [3, 5],
    "material_logistics": [2, 3],
    "population_mobilization": [4],
    "geopolitical_strategy": [1, 6],
}
NOTE = {
    "political_cohesion": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）",
    "material_logistics": "技术↔生产力；赋税/漕运→后勤半径（R7）",
    "population_mobilization": "人口↔常驻军；流民→动员潜力",
    "geopolitical_strategy": "地形/关隘/外交→战略重心与窗口",
}


def strategic_block():
    return {k: {"from": FROM[k], "from_dims": FROMS[k],
                "layer": "inference", "note": NOTE[k]} for k in STRATEGIC_DIMS}


def main():
    reg = json.load(open(PATH, encoding="utf-8"))
    scenes = reg["scenes"]

    # 计算被引用 era 集合
    needed = {}
    unmapped = []
    for key, sc in scenes.items():
        era = era_of(key, sc)
        needed[era] = needed.get(era, 0) + 1
        if era == "cross_dynastic" and sc.get("region") not in (None,):
            # 仅当确为兜底（非本就属 cross_dynastic）才提示
            unmapped.append((key, sc.get("region"), sc.get("kind")))

    # 构建 epochs（引用到的 era 才建；FILLED 优先，否则 stub）
    epochs = {}
    for era in needed:
        epochs[era] = FILLED.get(era, make_stub(era))

    # 顶层目录（单一真值）
    reg["epochs"] = epochs
    reg["strategic_dims"] = STRATEGIC_DIMS
    reg["scale_tiers"] = SCALE_TIERS

    # 每 world 注入
    for key, sc in scenes.items():
        sc["epoch"] = era_of(key, sc)
        sc["scale_tier"] = scale_tier_of(sc.get("kind"))
        sc["strategic"] = strategic_block()

    # ── 报告 ──
    print("=== epoch 分布（共 %d world，引用 %d 个 era）===" % (len(scenes), len(needed)))
    for era, n in sorted(needed.items(), key=lambda x: -x[1]):
        tag = "filled" if era in FILLED else "stub"
        print("  %-16s %2d  [%s] %s" % (era, n, tag, ERA_LABELS.get(era, era)))
    print("\n=== 兜底为 cross_dynastic 的 world（请复核 era 映射）===")
    if unmapped:
        for k, r, kd in unmapped:
            print("  %s  region=%s kind=%s" % (k, r, kd))
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
