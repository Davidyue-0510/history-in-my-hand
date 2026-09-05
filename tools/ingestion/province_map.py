# -*- coding: utf-8 -*-
"""v0.109 · province 字段单一真值：把「地理省份」从 region 的「地理+主题桶」混用里拆出来。

根因（北极星①完成度评估，2026-09-05）：
  scenes.json 的 `region` 字段混用了三类东西 ——
    ① 真实地理单元（辽北/辽东/辽南/辽西/关外女真）；
    ② 朝代/时期桶（tang/imjin/song/warring_states/...）；
    ③ 主题桶（court/thought/reform/uprising/fusion/ecology/engineering/...）。
  → 「全地域覆盖」无法干净度量：region 里既有地理也有主题，统计省份覆盖会失真。

本模块给出唯一真相：
  - PROVINCE_CODES / PROVINCE_NAMES：现代中国 34 个省级行政区（单一真值，供 UI / 闸门 / 审计消费）。
  - SENTINELS：province 允许的非省份取值 —— "fiction"（虚构世界）、"overseas"（外国战区/海域，
    无中国省份主体，如万历朝鲜之役、甲午）。null = 该场景是「主题/朝代桶」，不绑定单一省份（诚实标注）。
  - REGION_TO_PROVINCE：region id → province 取值（省份码 / 码列表 / null / 哨兵），确定性映射。
  - derive_province(region, explicit=None)：注册/回刷时派生 province；explicit 优先（尊重手工设定）。

约定：
  - 地理微区（辽* / 关外女真）→ 落在对应省份（辽宁）。
  - 朝代/时期桶若本身是全国性主题（warring_states/song/...）→ null（不冒充单一省份）。
  - 跨国的外战战区（imjin/yellow_sea）→ "overseas"。
  - 明确单省地理（guangzhong=关中=陕西；chuan_gui=川贵=四川+贵州）→ 对应省份。
  - 虚构世界（fiction）→ "fiction"。
"""
# 现代中国 34 省级行政区：4 直辖市 + 23 省 + 5 自治区 + 2 特别行政区。
# 内容合规：台湾作为省份纳入（台湾/taiwan），香港/澳门作为特别行政区纳入。
PROVINCE_NAMES = {
    # 直辖市
    "beijing": "北京", "tianjin": "天津", "shanghai": "上海", "chongqing": "重庆",
    # 省
    "hebei": "河北", "shanxi": "山西", "liaoning": "辽宁", "jilin": "吉林",
    "heilongjiang": "黑龙江", "jiangsu": "江苏", "zhejiang": "浙江", "anhui": "安徽",
    "fujian": "福建", "jiangxi": "江西", "shandong": "山东", "henan": "河南",
    "hubei": "湖北", "hunan": "湖南", "guangdong": "广东", "hainan": "海南",
    "sichuan": "四川", "guizhou": "贵州", "yunnan": "云南", "shaanxi": "陕西",
    "gansu": "甘肃", "qinghai": "青海", "taiwan": "台湾",
    # 自治区
    "neimenggu": "内蒙古", "guangxi": "广西", "xizang": "西藏",
    "ningxia": "宁夏", "xinjiang": "新疆",
    # 特别行政区
    "xianggang": "香港", "aomen": "澳门",
}

PROVINCE_CODES = list(PROVINCE_NAMES.keys())

# province 字段允许的非省份取值（除 null 外）。
SENTINELS = {
    "fiction": "虚构世界（无真实地形参照，不计入中国省份覆盖）",
    "overseas": "外国战区 / 海域（无中国省份主体，如万历朝鲜之役、甲午）",
}

# region id → province 取值。
#   - 字符串 / 字符串列表：对应省份码（必在 PROVINCE_CODES）；
#   - None：该 region 是主题/朝代桶，不绑定单一省份（诚实标注，不计入省份覆盖）；
#   - "fiction" / "overseas"：哨兵。
REGION_TO_PROVINCE = {
    # ── ① 真实地理微区（辽宁）──
    "liaobei": "liaoning",      # 辽北 = 辽宁北部（开原—铁岭—叶赫）
    "liaodong": "liaoning",     # 辽东（沈阳—辽阳—抚顺）
    "liaonan": "liaoning",      # 辽南（海州—盖州—复州—金州）
    "liaoxi": "liaoning",       # 辽西走廊（广宁—义州—锦州—宁远）
    "jianzhou": "liaoning",     # 关外女真（赫图阿拉，今辽宁新宾一带）

    # ── ② 朝代 / 时期桶（全国性主题，不冒充单省）──
    "tang": None,
    "warring_states": None,
    "qin_han": None,
    "three_kingdoms": None,
    "two_jin": None,
    "sui_tang": None,
    "song": None,
    "yuan_ming": None,
    "qing_modern": None,
    "nan_bei_chao": None,
    "huabei": None,             # 华北（国共内战）宏观战区，跨多省
    "xibei": None,              # 西北九边宏观，跨多省
    "jiangnan": None,           # 江南宏观，跨多省

    # ── ②b 跨国战区（外国主体）──
    "imjin": "overseas",        # 万历朝鲜之役：朝鲜半岛 / 日本 / 黄海
    "yellow_sea": "overseas",   # 甲午：黄海 / 朝鲜 / 日本

    # ── ②c 明确单省 / 多省地理 ──
    "guangzhong": "shaanxi",    # 关中 = 陕西
    "chuan_gui": ["sichuan", "guizhou"],  # 川贵西南

    # ── ③ 主题桶（不绑定地理）──
    "ecology": None,            # 天灾与生态（黄河改道，全国性主题）
    "engineering": None,        # 重大工程（大运河，跨多省）
    "dynasty": None,            # 王朝更迭（全国性主题）
    "reform": None,             # 改革与变法（全国性主题）
    "uprising": None,           # 农民起义（全国性主题）
    "fusion": None,             # 民族融合（全国性主题）
    "court": None,              # 宫廷斗争（全国性主题）
    "thought": None,            # 思想文化（全国性主题）
    "tech": None,               # 科技医学（全国性主题）
    "exchange": None,           # 对外交流（全国性主题）

    # ── 虚构世界 ──
    "fiction": "fiction",
}

# ── P1 地理深化：场景级省份覆盖写（v0.110）──────────────────────────────────
# 根因：v0.109 的 REGION_TO_PROVINCE 对「朝代/时期桶」一律 null（诚实不冒充单省）。
# 但许多这类桶下的场景其实是**具体战役/事件、落在确知单省**，被保守地标了 null，
# 导致「全地域覆盖」低估。本表对**地理可确证**的现存场景显式写省份，把覆盖从 4/34 拉起。
# 原则（诚实边界）：
#   - 仅写「具体战役/事件、位置无争议」的场景；全国性主题概述（reform/court/thought/
#     uprising/ecology/engineering/exchange 桶的泛论场景）仍留 null，不冒充单省。
#   - 跨多省的战役写省份码列表（如三大战役）；外国战区写 "overseas"。
#   - 取值必须是 PROVINCE_CODES / 合法列表 / "overseas"；本表优先于 REGION_TO_PROVINCE。
#   - 单一真值，版本控制；新增覆盖只需在此追加一行，回刷脚本自动生效。
PROVINCE_OVERRIDES = {
    # 三国·湖北
    "chibi": "hubei", "yiling": "hubei", "boju": "hubei",   # 赤壁/夷陵/柏举 皆今湖北
    # 河南（官渡/昆阳/澶渊/陈桥/淮西/河决/睢阳/郾城/张衡/虎牢/牧野）
    "guandu": "henan", "guandu_llm": "henan", "kunyang": "henan",
    "chanyuan": "henan", "chenqiao": "henan", "tang_huai_xi": "henan",
    "kaifeng_juekou": "henan", "song_he_jue": "henan", "suiyang": "henan",
    "sui_yang_llm": "henan", "yancheng": "henan", "zhangheng": "henan",
    "hulao": "henan", "wuwang": "henan",                   # 牧野在河南淇县
    # 安徽（淝水/垓下/逍遥津/采石矶/钟离/陈胜/亳州/楚汉垓下）
    "feishui": "anhui", "feishui_llm": "anhui", "gaixia": "anhui",
    "xiaoyaojin": "anhui", "caishiji": "anhui", "zhongli": "anhui",
    "chensheng": "anhui", "bozhou": "anhui", "chuhai_llm": "anhui",
    # 楚汉之争跨彭城(江苏)+垓下(安徽)
    "chu_han": ["jiangsu", "anhui"],
    # 山西（长平）
    "changping": "shanxi", "changping_llm": "shanxi",
    # 河北（巨鹿/土木堡/沙丘/赵州桥）
    "julu": "hebei", "tumu": "hebei", "shaqiu": "hebei", "zhaozhou": "hebei",
    # 山东（马陵/桂陵/城濮/齐民要术）
    "maling": "shandong", "guiling": "shandong", "chengpu": "shandong", "jiasixie": "shandong",
    # 江苏（隋灭陈/天京/扬州/郑和/鉴真 + 楚汉）
    "sui_mie_chen": "jiangsu", "sui_mie_chen_llm": "jiangsu",
    "tianjing": "jiangsu", "yangzhou": "jiangsu", "zhenghe": "jiangsu", "jianzhen": "jiangsu",
    # 广东（虎门/崖山）
    "humen": "guangdong", "yaoshan": "guangdong", "yashan": "guangdong",
    # 重庆（钓鱼城）
    "diaoyucheng": "chongqing",
    # 内蒙古（参合陂/昭君出塞）
    "canhebei": "neimenggu", "zhaofen": "neimenggu",
    # 江西（鄱阳湖）
    "poyanghu": "jiangxi",
    # 宁夏（宁夏之役）
    "ningxia": "ningxia",
    # 西藏（文成公主入藏）
    "wencheng": "xizang",
    # 北京（戊戌/紫禁城/九子夺嫡/北京保卫战 + 三大战役）
    "wuxu": "beijing", "zijincheng": "beijing", "jiuzi": "beijing", "beijing": "beijing",
    # 黑龙江（雅克萨）
    "yaksa": "heilongjiang",
    # 广西（灵渠）
    "lingqu": "guangxi",
    # 三大战役跨 辽沈(辽宁)+淮海(苏皖)+平津(京津冀)
    "three_campaigns": ["liaoning", "jiangsu", "anhui", "beijing", "tianjin"],
    # 陕西（已覆盖，补具体事件场景）：商鞅/隋大兴/巫蛊/玄武门/张骞/焚书坑儒
    "shangyang": "shaanxi", "sui_daxing": "shaanxi", "wugu": "shaanxi",
    "xuanwu": "shaanxi", "zhangqian": "shaanxi", "fenshu": "shaanxi",
    # 四川（已覆盖，补都江堰）
    "dujiangyan": "sichuan",
}


def is_legal_province(value):
    """province 字段是否合法（供闸门校验）。

    合法取值：
      - None（主题/朝代桶，不绑定省份）
      - "fiction" / "overseas"（哨兵）
      - 单个省份码（str，在 PROVINCE_CODES）
      - 省份码列表（list，每个元素在 PROVINCE_CODES）
    """
    if value is None:
        return True
    if isinstance(value, str):
        return value in PROVINCE_CODES or value in SENTINELS
    if isinstance(value, list):
        return len(value) > 0 and all(
            isinstance(x, str) and x in PROVINCE_CODES for x in value)
    return False


def derive_province(region, explicit=None):
    """注册 / 回刷时派生 province。

    - explicit 非 None 且合法 → 优先采用（尊重手工设定，幂等）。
    - 否则按 REGION_TO_PROVINCE 映射 region → province。
    - region 未在映射表（未知 region）→ 返回 None（诚实：不猜省份）。
    """
    if explicit is not None and is_legal_province(explicit):
        return explicit
    return REGION_TO_PROVINCE.get(region, None)


def provinces_touched(province_values):
    """从一组 province 取值里收集去重后的中国省份码（不含哨兵/null）。

    province_values: 可迭代，每个元素是一个场景的 province 字段取值。
    返回 set（省份码）。
    """
    touched = set()
    for v in province_values:
        if isinstance(v, str) and v in PROVINCE_CODES:
            touched.add(v)
        elif isinstance(v, list):
            for x in v:
                if x in PROVINCE_CODES:
                    touched.add(x)
    return touched
