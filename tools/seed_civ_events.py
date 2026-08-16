# -*- coding: utf-8 -*-
"""
通用文明事件种子生成器（确定性，零 token）。

把用户列出的「中国古代史核心线索」十类事件批量生成沙盘切片：
  天灾与生态 / 重大工程 / 王朝更迭 / 改革变法 / 农民起义 /
  民族融合 / 宫廷斗争 / 思想文化 / 科技医学 / （对外战争见战役种子器）

与 seed_famous_battles.py 同构，但更通用：
  - kind 不再是写死的 "battle"，而是按类别取 disaster/reform/dynasty/...
  - 冲突类事件（战争/起义/靖难）保留 a/b 双方；非冲突类（天灾/工程/思想/科技）
    只用「综合史料」单一 party，不虚构对立阵营。
  - 黄河改道 / 大运河 / 长城 用 routes 画 polyline（河/墙/运河走向），
    由前端 META.timeline_title 把「行军路线时间轴」重标为「黄河改道时间轴」等。
  - 每事件生成一条 synthesis 断言（满足 I9），layer=scholarship，不虚构 record/gap
    （逼作者造假违背诚实边界；I1/I3 对这些综合史料 kind 豁免，见 test_assertions.py）。

所有日期/地名/史事为常识性综合史料整理，party 统一标「综合史料」，置信度 0.4，
quote_status=paraphrase_unverified——明确告诉读者这是二手综述，非逐源考订。
"""
import os
import json
import shutil

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")

RED = "#c0392b"
BLUE = "#2b6cb0"
GREEN = "#2e7d32"
GREY = "#7f8c8d"

# 综合史料类 kind（I1/I3 豁免，见 test_assertions.py 的 SYNTHESIS_KINDS）
# 这些切片是综合史料整理，断言仅为「事件→引用」的合成存根，不虚构 record/gap 层。

B = []  # 待生成事件列表


def civ(d):
    B.append(d)


# ══════════════════════ 天灾与生态（region: ecology） ══════════════════════
civ({
 "id": "huanghe",
 "title": "黄河改道",
 "kind": "disaster",
 "region": "ecology", "region_name": "天灾与生态",
 "region_note": "黄河以「善淤善决善徙」著称，史称「六年一决、百年一改道」。本切片列其历次大改道与夺淮、北归。",
 "dossier_label": "黄河改道",
 "subtitle": "前602—1855 · 六次大改道",
 "primary_place": "taohuayu",
 "layer_title": "黄河河道叠加",
 "timeline_title": "黄河改道时间轴",
 "lead": "黄河下游河道在渤海与黄海之间反复摆动：先是北流入渤海，南宋初杜充决河阻金致其夺淮入海近七百年，1855 年铜瓦厢决口复北归。地图上线条即各时期下游故道。",
 "parties_note": "河道变迁据谭其骧《中国历史地图集》与《黄河志》综合，具体摆幅与年份学界仍有考订空间。",
 "places": [
   ("taohuayu", "桃花峪", 113.60, 34.92, "郑州西北，黄河下游起点（南北流向分界）"),
   ("suxu", "宿胥口", 114.20, 35.90, "今河南淇县，周定王五年河决处"),
   ("dapi", "大伾山", 114.53, 35.70, "今河南浚县，东汉北流河道所经"),
   ("kaifeng", "开封", 114.30, 34.79, "北宋汴京，南流河道所经"),
   ("tongwaxiang", "铜瓦厢", 114.83, 34.78, "今河南兰考，1855 决口北归处"),
   ("huangkou_n", "渤海口", 118.50, 38.00, "北流入海口（天津以南）"),
   ("huangkou_s", "黄海口", 119.80, 34.20, "南宋—1855 南流入海口（苏北）"),
   ("lanzhou", "兰州", 103.83, 36.06, "黄河上游，各故道共同起点"),
   ("tongguan", "潼关", 110.30, 34.60, "黄河出晋陕峡谷处"),
 ],
 "events": [
   ("ev_hh_yu", "event:hh_yu", -602, "周定王五年", "宿胥口决，大禹河改道", "改道", "《汉书·沟洫志》载「河徙」宿胥口，禹河（走河北）改道，为文献首次明确的大改道。", "suxu"),
   ("ev_hh_wangjing", "event:hh_wangjing", 11, "东汉永平十二年", "王景治河，河入渤海", "改道", "王景修渠堤，黄河自此长期走今山东入渤海（「东汉故道」），安流约千年。", "dapi"),
   ("ev_hh_1128", "event:hh_1128", 1128, "南宋建炎二年", "杜充决河阻金，河夺淮", "决溢", "东京留守杜充决黄河自泗入淮以阻金兵，黄河开始南泛夺淮，为近七百年南流之始。", "huangkou_s"),
   ("ev_hh_1194", "event:hh_1194", 1194, "南宋绍熙五年", "河全入淮", "改道", "黄河主流彻底夺淮入海，淮南河患剧增，江淮之间水系大乱。", "huangkou_s"),
   ("ev_hh_1494", "event:hh_1494", 1494, "明弘治七年", "刘大夏筑太行堤，断北流", "改道", "筑断黄陵冈，黄河全由南流（泗、淮）入海，北流彻底断绝。", "tongwaxiang"),
   ("ev_hh_1855", "event:hh_1855", 1855, "清咸丰五年", "铜瓦厢决口，河复北归", "决溢", "铜瓦厢（兰考）决口，黄河夺大清河复入渤海，奠定今日下游河道（「明清故道」北归）。", "tongwaxiang"),
 ],
 "routes": [
   ("rt_hh_bei1", "禹河/西汉故道（北流）", "b",
    [("lanzhou", "B602", "上游"), ("tongguan", "B602", "出峡谷"), ("suxu", "B602", "宿胥口"), ("huangkou_n", "B602", "入渤海")], {"at": "B602", "type": "none", "text": "前602 前长期北流"}),
   ("rt_hh_bei2", "东汉—北宋北流", "b",
    [("lanzhou", "11", "上游"), ("tongguan", "11", "出峡谷"), ("dapi", "11", "大伾山"), ("huangkou_n", "11", "入渤海")], {"at": "11", "type": "none", "text": "王景治河后千年北流"}),
   ("rt_hh_nan", "南宋—1855 南流（夺淮）", "b",
    [("lanzhou", "1128", "上游"), ("tongguan", "1128", "出峡谷"), ("kaifeng", "1128", "经汴"), ("huangkou_s", "1128", "夺淮入黄海")], {"at": "1128", "type": "none", "text": "杜充决河后南泛"}),
   ("rt_hh_bei3", "1855 后北归", "b",
    [("lanzhou", "1855", "上游"), ("tongguan", "1855", "出峡谷"), ("tongwaxiang", "1855", "铜瓦厢决"), ("huangkou_n", "1855", "复入渤海")], {"at": "1855", "type": "none", "text": "铜瓦厢决口北归"}),
 ],
 "timeline": [
   ("B602", "周定王五年", "宿胥口决·禹河改道", True),
   ("11", "东汉永平十二", "王景治河·北流入渤海", True),
   ("1128", "南宋建炎二", "杜充决河·开始夺淮", True),
   ("1194", "南宋绍熙五", "河全入淮", False),
   ("1494", "明弘治七", "筑太行堤·断北流", False),
   ("1855", "清咸丰五", "铜瓦厢决·复北归", True),
 ],
 "persons": [("wangjing", "王景", "东汉河堤谒者"), ("duchong", "杜充", "南宋东京留守")],
})
civ({
 "id": "locust",
 "title": "蝗灾",
 "kind": "disaster",
 "region": "ecology", "region_name": "天灾与生态",
 "region_note": "蝗灾多与干旱伴生，古代视为「天谴」。本切片列历代重大蝗患。",
 "dossier_label": "蝗灾",
 "subtitle": "622—1943 · 历代大蝗",
 "primary_place": "guanzhong",
 "lead": "蝗灾与旱灾耦合，史不绝书。唐代山东大蝗、明末陕北连蝗、1943 河南大旱蝗皆曾酿成大饥。本切片按发生地标注。",
 "parties_note": "蝗灾记载来自正史《五行志》与方志，范围为「蝗至某州」，具体受灾面积无精确统计。",
 "places": [
   ("guanzhong", "关中", 108.94, 34.34, "唐京畿，武德大蝗"),
   ("shandong", "山东", 117.00, 36.65, "开元大蝗"),
   ("kaifeng", "开封", 114.30, 34.79, "北宋汴京，熙宁蝗"),
   ("yanan", "延安", 109.50, 36.60, "明末陕北蝗"),
   ("henan", "河南", 113.65, 34.76, "1943 大旱蝗"),
 ],
 "events": [
   ("ev_lc_622", "event:lc_622", 622, "唐武德五年", "关中大蝗", "灾异", "《新唐书》载武德五年蝗，太宗吞蝗以示为民请命。", "guanzhong"),
   ("ev_lc_715", "event:lc_715", 715, "唐开元三年", "山东大蝗", "灾异", "姚崇持「夜火坑捕」法灭蝗，山东、河南大蝗赖此稍弭。", "shandong"),
   ("ev_lc_1073", "event:lc_1073", 1073, "北宋熙宁六年", "开封诸路蝗", "灾异", "熙宁中连岁蝗旱，神宗诏赈，王安石行青苗以济。", "kaifeng"),
   ("ev_lc_1628", "event:lc_1628", 1628, "明崇祯元年", "陕北蝗旱", "灾异", "崇祯初陕北连年蝗旱，民大饥，流寇起。", "yanan"),
   ("ev_lc_1943", "event:lc_1943", 1943, "民国三十二年", "河南大旱蝗", "灾异", "1942—1943 河南大旱继以飞蝗，赤地千里，饥殍载道。", "henan"),
 ],
 "persons": [("yaochong", "姚崇", "唐宰相"), ("chongzhen", "崇祯帝", "明")],
})
civ({
 "id": "huaxian",
 "title": "华县大地震",
 "kind": "disaster",
 "region": "ecology", "region_name": "天灾与生态",
 "region_note": "1556 年陕西华县 8 级余地震，史称死亡最惨重地震之一。",
 "dossier_label": "华县大地震",
 "subtitle": "明嘉靖三十四年（1556）· 8级余",
 "primary_place": "huaxian",
 "lead": "1556 年腊月十二（公历 1 月 23 日）陕西华县发生约 8 级地震，震中烈度极高，陕晋豫三省波及，记载死亡约 83 万，为世界震害死亡人数之最。",
 "parties_note": "死亡数字据《明史·五行志》与方志，为当时奏报折中，实际恐更高。",
 "places": [
   ("huaxian", "华县", 109.77, 34.50, "震中，今陕西渭南华州区"),
   ("xian", "西安", 108.94, 34.34, "受灾重，城垣庙宇多圮"),
   ("linfen", "临汾", 111.52, 36.08, "山西震区"),
   ("changan_ming", "渭南", 109.50, 34.50, "震中附近"),
 ],
 "events": [
   ("ev_hx_main", "event:hx_main", 1556, "嘉靖三十四年腊月十二", "华县大地震", "地震", "子夜巨震，山川易形，压死奏报以数十万计，《五行志》谓「震压官吏军民奏报有名者八十三万有奇」。", "huaxian"),
   ("ev_hx_after", "event:hx_after", 1556, "震后", "余震经年·次生灾", "地震", "震后饥疫相继，庐舍尽墟，灾情数岁未复。", "xian"),
   ("ev_hx_legacy", "event:hx_legacy", 1556, "嘉靖三十四年", "灾异入史·天人感应", "灾异", "明代将巨灾系于「窒阏元气」，朝野修省，亦促成地方赈济与城防重修。", "linfen"),
 ],
 "persons": [("jiajing", "嘉靖帝", "明")],
})
civ({
 "id": "little_ice",
 "title": "明末小冰期饥荒",
 "kind": "disaster",
 "region": "ecology", "region_name": "天灾与生态",
 "region_note": "16—17 世纪全球小冰期高峰，明末北中国连年亢旱、低温、蝗饥，催化民变与亡国。",
 "dossier_label": "明末小冰期饥荒",
 "subtitle": "1580—1644 · 北中国连年亢旱",
 "primary_place": "beijing",
 "lead": "明末正值小冰期极盛，北方气温骤降、旱蝗相仍。陕北饥民从贼，李自成起；崇祯朝「十室九空」的奏报不绝，天灾与征敛合力倾明。",
 "parties_note": "气候重建据树木年轮与冰芯（如《中国近千年气候变化》），与史料旱蝗记载互证。",
 "places": [
   ("liaodong_ice", "辽东", 123.43, 41.80, "万历末已连年饥寒，边备渐弛"),
   ("beijing", "北京", 116.40, 39.90, "北直隶大旱中心"),
   ("henan", "河南", 113.65, 34.76, "崇祯中连旱蝗"),
   ("shaanxi", "陕西", 108.94, 34.34, "陕北民变策源"),
 ],
 "events": [
   ("ev_li_1580", "event:li_1580", 1580, "万历前期", "气温转寒·北方早霜", "灾异", "16 世纪后期全球降温，华北生长季缩短，粮食减产渐显。", "beijing"),
   ("ev_li_1637", "event:li_1637", 1637, "崇祯十年", "北直隶大旱", "饥荒", "崇祯十年前后北直隶、山西连旱，麦禾尽枯，人相食。", "beijing"),
   ("ev_li_1640", "event:li_1640", 1640, "崇祯十三年", "河南连旱蝗", "饥荒", "河南「人相食，村舍为墟」，饥民从李自成者日众。", "henan"),
   ("ev_li_1641", "event:li_1641", 1641, "崇祯十四年", "陕西亢旱·流寇炽", "饥荒", "陕北连旱，驿站裁撤失业者多投闯营；民变与天灾相互喂养。", "shaanxi"),
   ("ev_li_1644", "event:li_1644", 1644, "崇祯十七年", "饥荒催化·明亡", "饥荒", "饥馑瓦解统治根基，同年李自成破北京、崇祯自缢，清入关。", "beijing"),
 ],
 "persons": [("chongzhen", "崇祯帝", "明"), ("lizicheng2", "李自成", "闯王")],
})

# ══════════════════════ 重大工程（region: engineering） ══════════════════════
civ({
 "id": "grand_canal",
 "title": "大运河",
 "kind": "engineering",
 "region": "engineering", "region_name": "重大工程",
 "region_note": "隋唐奠基、元朝裁直的南北大运河，是世界最长人工水道，维系帝国漕运命脉。",
 "dossier_label": "大运河",
 "subtitle": "605—1293 · 隋唐凿通·元朝裁直",
 "primary_place": "hangzhou",
 "layer_title": "大运河河道叠加",
 "timeline_title": "大运河修凿时间轴",
 "lead": "隋炀帝开通济渠、邗沟沟通河淮江；元郭守敬开会通河、通惠河，弃绕洛阳、直穿山东，成今日京杭运河雏形。地图线条即运河走向。",
 "parties_note": "运河走向据《中国历史地图集》，具体渠口与年代有考订差异。",
 "places": [
   ("beijing_c", "大都/北京", 116.40, 39.90, "运河北端"),
   ("luoyang_c", "洛阳", 112.45, 34.62, "隋唐运河中枢（隋绕此）"),
   ("huaian", "淮安", 119.02, 33.50, "黄淮交汇，运河要冲"),
   ("yangzhou", "扬州", 119.41, 32.39, "邗沟入江口"),
   ("hangzhou", "杭州", 120.15, 30.27, "运河南端（余杭）"),
   ("linqing", "临清", 115.97, 36.85, "会通河关键枢纽（元裁直所经）"),
 ],
 "events": [
   ("ev_gc_sui", "event:gc_sui", 605, "隋大业元年", "通济渠·邗沟开通", "工程", "炀帝发河南诸郡男女百万开通济渠（河入淮）、重浚邗沟（淮入江），沟通江淮南北。", "yangzhou"),
   ("ev_gc_yuan", "event:gc_yuan", 1283, "元至元二十年", "会通河·通惠河成", "工程", "郭守敬主持开会通河（汶泗至临清）、通惠河（通州入大都），运河弃绕洛阳、直贯山东，裁直近千里。", "linqing"),
   ("ev_gc_ming", "event:gc_ming", 1411, "明永乐九年", "重浚会通河", "工程", "宋礼、陈瑄重浚会通河、建闸坝，罢海运行漕运，运河成明廷生命线。", "linqing"),
 ],
 "routes": [
   ("rt_gc_line", "京杭运河走向", "b",
    [("beijing_c", "605", "北端"), ("linqing", "1283", "山东枢纽"), ("huaian", "605", "黄淮交"), ("yangzhou", "605", "入江"), ("hangzhou", "605", "南端")], {"at": "605", "type": "none", "text": "南北漕运主干"}),
 ],
 "timeline": [
   ("605", "隋大业元", "通济渠·邗沟开通", True),
   ("1283", "元至元二十", "会通河·通惠河成", True),
   ("1411", "明永乐九", "重浚会通河", False),
 ],
 "persons": [("yangdi", "隋炀帝", "隋"), ("guoshoujing", "郭守敬", "元")],
})
civ({
 "id": "dujiangyan",
 "title": "都江堰",
 "kind": "engineering",
 "region": "engineering", "region_name": "重大工程",
 "region_note": "战国李冰父子筑都江堰，无坝引水、乘势利导，至今灌田千年，堪称水利工程典范。",
 "dossier_label": "都江堰",
 "subtitle": "约公元前256 · 李冰筑",
 "primary_place": "dujiangyan",
 "lead": "秦昭襄王时蜀守李冰凿离堆、分岷江为内江外江，鱼嘴分水、飞沙堰泄洪、宝瓶口引水，成都平原「水旱从人，不知饥馑」。",
 "parties_note": "都江堰年代据《华阳国志》《水经注》综合，李冰父子身世细节史载有限。",
 "places": [
   ("dujiangyan", "都江堰", 103.62, 31.00, "今四川都江堰市（原灌县）"),
   ("chengdu", "成都", 104.07, 30.67, "受益的成都平原"),
   ("minjiang", "岷江", 103.60, 31.20, "被分流的大江"),
 ],
 "events": [
   ("ev_dj_256", "event:dj_256", -256, "秦昭襄王后期", "李冰筑都江堰", "工程", "蜀守李冰凿离堆、作堋江鱼嘴分岷为内外江，无坝引水，成都平原始免水患并获灌溉。", "dujiangyan"),
   ("ev_dj_168", "event:dj_168", -168, "西汉景帝", "文翁续修·灌区扩", "工程", "蜀郡守文翁踵李冰迹，穿湔江、增灌田，都江堰体系渐成。", "chengdu"),
   ("ev_dj_today", "event:dj_today", 2000, "至今", "列入世遗·仍灌田", "工程", "2000 余年沿用至今，2000 年列入世界文化遗产，仍灌溉成都平原上千万亩。", "dujiangyan"),
 ],
 "persons": [("libing", "李冰", "秦蜀守"), ("wengong", "文翁", "西汉蜀守")],
})
civ({
 "id": "great_wall",
 "title": "长城",
 "kind": "engineering",
 "region": "engineering", "region_name": "重大工程",
 "region_note": "历代北边防御工程，秦连燕赵、明筑砖石，是世界体量最大的军事工程。",
 "dossier_label": "长城",
 "subtitle": "前214—1644 · 秦连·明筑",
 "primary_place": "badaling",
 "layer_title": "长城走向叠加",
 "timeline_title": "长城修筑时间轴",
 "lead": "战国燕赵秦各筑北边；秦始皇连为万里；明自洪武至万历二百余年垒砖石、建敌台，成今日所见东起山海关、西至嘉峪关之巨防。地图线条为明长城主干示意。",
 "parties_note": "长城具体走向历代不同，此处为明代九边主干示意，非历代重合。",
 "places": [
   ("lintao", "临洮", 103.30, 35.40, "秦长城西端"),
   ("jiayuguan", "嘉峪关", 98.29, 39.77, "明长城西端"),
   ("badaling", "八达岭", 116.02, 40.36, "明长城代表段（北京）"),
   ("shanhai", "山海关", 119.75, 40.00, "明长城东端「天下第一关」"),
   ("datong_w", "大同", 113.30, 40.08, "明九边·大同镇"),
 ],
 "events": [
   ("ev_gw_qin", "event:gw_qin", -214, "秦始皇三十三年", "连秦赵燕长城", "工程", "始皇使蒙恬北逐匈奴，连燕、赵、秦故城，西起临洮东至辽东，为万里长城之始。", "lintao"),
   ("ev_gw_han", "event:gw_han", -121, "汉武帝元狩", "河西长城·障塞", "工程", "汉逐匈奴据河西，筑令居以西障塞、长城，护丝绸之路。", "jiayuguan"),
   ("ev_gw_ming", "event:gw_ming", 1474, "明成化—万历", "九边砖石长城", "工程", "明自洪武至万历，于北边设九镇、垒砖石、建敌台，成今日所见万里巨防。", "badaling"),
 ],
 "routes": [
   ("rt_gw_line", "明长城主干（示意）", "b",
    [("jiayuguan", "1474", "西端"), ("datong_w", "1474", "大同镇"), ("badaling", "1474", "北京段"), ("shanhai", "1474", "东端山海关")], {"at": "1474", "type": "none", "text": "九边巨防"}),
 ],
 "timeline": [
   ("B214", "秦始皇三十三", "连秦赵燕为万里", True),
   ("B121", "汉武帝元狩", "河西障塞·护丝路", False),
   ("1474", "明成化—万历", "九边砖石长城", True),
 ],
 "persons": [("mengtian", "蒙恬", "秦"), ("mingtaizu", "明太祖", "明")],
})

# ══════════════════════ 王朝更迭（region: dynasty） ══════════════════════
civ({
 "id": "qin_unify",
 "title": "秦灭六国",
 "kind": "dynasty",
 "region": "dynasty", "region_name": "王朝更迭",
 "region_note": "前230—前221，秦王嬴政十年间次第灭韩赵魏楚燕齐，建立首个中央集权帝国。",
 "dossier_label": "秦灭六国",
 "subtitle": "前230—前221 · 秦 vs 六国",
 "primary_place": "xianyang",
 "a_name": "秦军", "b_name": "六国",
 "lead": "秦凭商鞅变法之积、远交近攻之策，十年并六国。前221 年齐降，嬴政称始皇帝，废分封、行郡县。",
 "parties_note": "秦方纪功（如《史记·秦始皇本纪》），六国方多散见诸国世家；灭国次序以《史记》为据。",
 "places": [
   ("xianyang", "咸阳", 108.70, 34.33, "秦都"),
   ("xinzheng", "新郑", 113.80, 34.40, "韩都，前230 灭韩"),
   ("handan", "邯郸", 114.49, 36.61, "赵都，前228 灭赵"),
   ("daliang", "大梁", 114.30, 34.80, "魏都，前225 灭魏"),
   ("shouchun", "寿春", 116.78, 32.57, "楚都（后期），前223 灭楚"),
   ("ji", "蓟", 116.40, 39.90, "燕都，前222 灭燕"),
   ("linzi", "临淄", 118.05, 36.81, "齐都，前221 灭齐"),
 ],
 "events": [
   ("ev_qn_230", "event:qn_230", -230, "秦王政十七年", "灭韩", "战事", "内史腾灭韩，俘韩王安，韩亡。", "xinzheng"),
   ("ev_qn_228", "event:qn_228", -228, "十九年", "灭赵", "战事", "王翦大破赵军，俘赵王迁，赵亡（公子嘉走代）。", "handan"),
   ("ev_qn_225", "event:qn_225", -225, "二十二年", "灭魏", "战事", "王贲引河沟灌大梁，魏王假降，魏亡。", "daliang"),
   ("ev_qn_223", "event:qn_223", -223, "二十四年", "灭楚", "战事", "王翦倾国六十万伐楚，破寿春，虏楚王负刍，楚亡。", "shouchun"),
   ("ev_qn_222", "event:qn_222", -222, "二十五年", "灭燕代", "战事", "王贲破辽东，俘燕王喜；又灭代，燕赵尽亡。", "ji"),
   ("ev_qn_221", "event:qn_221", -221, "二十六年", "灭齐·一统", "战事", "王贲自燕南下灭齐，齐王建降。六国尽，嬴政称始皇帝。", "linzi"),
 ],
 "routes": [
   ("rt_qn_east", "秦军东进", "a",
    [("xianyang", "B230", "出兵"), ("xinzheng", "B230", "灭韩"), ("handan", "B228", "灭赵"), ("daliang", "B225", "灭魏"), ("shouchun", "B223", "灭楚"), ("linzi", "B221", "灭齐")], {"at": "B221", "type": "victory", "text": "十年并六国"}),
 ],
 "engagements": [
   ("eng_qn_chu", "灭楚之战", "B223", "秦王政二十四年", "shouchun", "a", "王翎倾国六十万伐楚，坚壁疲之，乘楚东撤一举破寿春、虏负刍。", "event:qn_223",
    [("a", "王翦", 1.0, "fresh", 600, "倾国", "秦以举国之力，稳扎疲楚。", 0.55), ("b", "项燕", 1.0, "marching", 620, "转进", "楚军东撤失据，为秦所破。", 0.5)]),
 ],
 "timeline": [
   ("B230", "十七年", "灭韩", True), ("B228", "十九年", "灭赵", False), ("B225", "二十二年", "灭魏", False),
   ("B223", "二十四年", "灭楚", True), ("B222", "二十五年", "灭燕代", False), ("B221", "二十六年", "灭齐·一统", True),
 ],
 "persons": [("yingzheng", "嬴政", "秦"), ("wangjian", "王翦", "秦"), ("xiangyan", "项燕", "楚")],
})
civ({
 "id": "ming_fall",
 "title": "明亡·崇祯自缢",
 "kind": "dynasty",
 "region": "dynasty", "region_name": "王朝更迭",
 "region_note": "1644 年李自成破北京，崇祯自缢煤山；同年清军入关，明祚终。",
 "dossier_label": "明亡",
 "subtitle": "1644 · 内忧外患·国祚终结",
 "primary_place": "beijing",
 "lead": "明末小冰期饥荒、加派辽饷、党争误国，民变蜂起。1644 李自成破北京，崇祯自缢；山海关吴三桂引清军入关，明亡清兴。",
 "parties_note": "明亡为内外交困之果，非单一缘由；此处综合《明史》《崇祯实录》与近代研究。",
 "places": [
   ("beijing", "北京", 116.40, 39.90, "明都，崇祯自缢处"),
   ("meishan", "煤山", 116.39, 39.93, "今景山，崇祯自缢"),
   ("shanhaiguan", "山海关", 119.75, 40.00, "吴三桂引清兵入关处"),
   ("xingshi", "西安", 108.94, 34.34, "李自成称大顺皇帝"),
 ],
 "events": [
   ("ev_mf_1627", "event:mf_1627", 1627, "天启七—崇祯元", "崇祯即位·危局", "危局", "崇祯即位，朝政败坏、边饷告急，陕北已现民变苗头。", "beijing"),
   ("ev_mf_1644_3", "event:mf_1644_3", 1644, "崇祯十七年三月", "李自成破北京", "亡国", "大顺军破京师，崇祯自缢煤山，明祚亡。", "meishan"),
   ("ev_mf_1644_q", "event:mf_1644_q", 1644, "崇祯十七年四月", "清军入关", "变局", "吴三桂降清、引兵入关，败大顺于一片石，清迁都北京。", "shanhaiguan"),
 ],
 "persons": [("chongzhen", "崇祯帝", "明"), ("lizicheng3", "李自成", "大顺"), ("wu3gui", "吴三桂", "明降将")],
})

# ══════════════════════ 改革与变法（region: reform） ══════════════════════
civ({
 "id": "shangyang",
 "title": "商鞅变法",
 "kind": "reform",
 "region": "reform", "region_name": "改革与变法",
 "region_note": "前356 起商鞅两次变法，废井田、奖耕战、行县制，奠定秦富强之基。",
 "dossier_label": "商鞅变法",
 "subtitle": "前356—前338 · 秦孝公时",
 "primary_place": "xianyang",
 "lead": "商鞅徙木立信，废井田开阡陌、奖励军功、推行县制与连坐，秦国力骤强，为统一奠基；孝公死，商鞅车裂。",
 "parties_note": "变法内容据《史记·商君列传》《韩非子》综合，部分细节（如刑公子虔）有史家考辨。",
 "places": [
   ("xianyang", "咸阳", 108.70, 34.33, "秦都，变法推行中心"),
   ("yueyang", "栎阳", 109.20, 34.50, "秦旧都，变法初行处"),
 ],
 "events": [
   ("ev_sy_356", "event:sy_356", -356, "秦孝公六年", "商鞅变法始", "变法", "商鞅为左庶长，颁垦草、奖军功之法，徙木立信，秦民知令。", "yueyang"),
   ("ev_sy_350", "event:sy_350", -350, "十二年", "徙都咸阳·再变法", "变法", "迁都咸阳，废井田、开阡陌，行县制、统一度量，禁父子同室。", "xianyang"),
   ("ev_sy_338", "event:sy_338", -338, "二十四年", "孝公崩·商鞅车裂", "结局", "秦孝公死，惠文王立，宗室怨鞅，车裂以徇。", "xianyang"),
 ],
 "persons": [("shangyang", "商鞅", "秦"), ("xiaogong", "秦孝公", "秦")],
})
civ({
 "id": "wanganshi",
 "title": "王安石变法",
 "kind": "reform",
 "region": "reform", "region_name": "改革与变法",
 "region_note": "1069 起王安石推行新法，理财强兵，党争激烈，终随神宗崩而废。",
 "dossier_label": "王安石变法",
 "subtitle": "1069—1085 · 宋神宗时",
 "primary_place": "kaifeng",
 "lead": "王安石任参知政事，行青苗、募役、市易、保甲诸法，意在富国强兵；新旧党争由此起，1085 神宗崩、哲宗立，新法渐废。",
 "parties_note": "新法利弊争议千年，司马光等旧党力诋；此处综合《宋史》与近代研究，不偏一方。",
 "places": [
   ("kaifeng", "开封", 114.30, 34.79, "北宋汴京，变法中枢"),
 ],
 "events": [
   ("ev_wa_1069", "event:wa_1069", 1069, "熙宁二年", "王安石执政·变法始", "变法", "王安石任参知政事，设制置三司条例司，颁青苗法，变法启动。", "kaifeng"),
   ("ev_wa_1070", "event:wa_1070", 1070, "三年", "任宰相·推诸法", "变法", "王安石拜相，行募役、市易、保甲、农田水利诸法，朝廷分裂新旧党。", "kaifeng"),
   ("ev_wa_1085", "event:wa_1085", 1085, "元丰八年", "神宗崩·新法废", "结局", "神宗崩、哲宗立，高太后用司马光，新法次第罢废（「元祐更化」）。", "kaifeng"),
 ],
 "persons": [("wanganshi", "王安石", "新党"), ("simaguang", "司马光", "旧党")],
})

# ══════════════════════ 农民起义（region: uprising） ══════════════════════
civ({
 "id": "huangjin",
 "title": "黄巾起义",
 "kind": "uprising",
 "region": "uprising", "region_name": "农民起义",
 "region_note": "184 年张角以太平道聚众，黄巾起义爆发，东汉名存实亡，军阀割据由此起。",
 "dossier_label": "黄巾起义",
 "subtitle": "184 · 张角 vs 东汉",
 "primary_place": "julu_up",
 "a_name": "黄巾军", "b_name": "汉军",
 "lead": "张角创太平道，十余年为乱世张本；184 年「苍天已死，黄天当立」举事，八州响应，汉室发州郡兵镇压，虽平而衰。",
 "parties_note": "黄巾与东汉双方记载悬殊：官方视「贼」、民间多同情；此处综合《后汉书》与近代研究。",
 "places": [
   ("julu_up", "巨鹿", 115.04, 37.07, "张角起兵地"),
   ("luoyang_up", "洛阳", 112.45, 34.62, "东汉都，黄巾威胁"),
   ("guangzong", "广宗", 115.10, 37.10, "张角弟张梁战死处"),
 ],
 "events": [
   ("ev_hj_184", "event:hj_184", 184, "中平元年", "张角举事", "战事", "张角以太平道聚众数十万，三十六方同日反，皆著黄巾，史称黄巾起义。", "julu_up"),
   ("ev_hj_spread", "event:hj_spread", 184, "中平元年", "八州响应", "战事", "黄巾蔓延青徐幽冀荆扬兖豫八州，京师震动，汉灵帝发天下兵讨之。", "luoyang_up"),
   ("ev_hj_185", "event:hj_185", 185, "中平二年", "主力被镇压", "战事", "皇甫嵩、朱儁等破黄巾，张角已死、张梁战广宗，黄巾主力平，余部流为军阀。", "guangzong"),
 ],
 "routes": [
   ("rt_hj_spread", "黄巾蔓延", "a",
    [("julu_up", "184", "巨鹿起"), ("luoyang_up", "184", "逼洛阳"), ("guangzong", "184", "广宗决战")], {"at": "184", "type": "victory", "text": "八州响应"}),
 ],
 "engagements": [
   ("eng_hj_main", "广宗之战", "185", "中平二年", "guangzong", "b", "皇甫嵩夜袭黄巾营，张梁战死，斩首数万，黄巾主力溃。", "event:hj_185",
    [("a", "张梁", 1.0, "exhausted", 300, "死守", "黄巾据营顽抗，粮尽援绝。", 0.5), ("b", "皇甫嵩", 1.0, "fresh", 320, "夜袭", "汉军乘懈夜攻，一举破营。", 0.5)]),
 ],
 "timeline": [
   ("184", "中平元", "张角举事", True), ("184", "中平元", "八州响应", False), ("185", "中平二", "广宗破·主力平", True),
 ],
 "persons": [("zhangjiao", "张角", "黄巾"), ("zhangliang", "张梁", "黄巾"), ("huangfusong", "皇甫嵩", "汉")],
})
civ({
 "id": "lizicheng",
 "title": "李自成起义",
 "kind": "uprising",
 "region": "uprising", "region_name": "农民起义",
 "region_note": "1628 起李自成自陕北起事，1644 破北京灭明，旋败于清军。",
 "dossier_label": "李自成起义",
 "subtitle": "1628—1645 · 闯军 vs 明",
 "primary_place": "beijing",
 "a_name": "闯军", "b_name": "明军",
 "lead": "李自成号「闯王」，提出「均田免赋」，饥民景从。1644 破北京，崇祯自缢；山海关败于清吴联军，次年殁于九宫山。",
 "parties_note": "李自成一方记载多清修，立场需对读；此处综合《明史·流贼传》与近代研究。",
 "places": [
   ("yanan", "延安", 109.50, 36.60, "陕北，闯王起事地"),
   ("luoyang_lc", "洛阳", 112.45, 34.62, "1641 闯军破洛，杀福王"),
   ("beijing", "北京", 116.40, 39.90, "1644 破京，明亡"),
   ("jiugong", "九宫山", 114.50, 29.50, "1645 李自成殁于此（鄂南）"),
 ],
 "events": [
   ("ev_lc_1628", "event:lc_1628", 1628, "崇祯元年", "闯王起事", "战事", "陕北饥民从李自成（继高迎祥）起事，号「闯王」，流动作战于秦晋豫。", "yanan"),
   ("ev_lc_1641", "event:lc_1641", 1641, "十四年", "破洛阳", "战事", "闯军破洛阳，杀福王，散财赈饥，「均田免赋」声威大振。", "luoyang_lc"),
   ("ev_lc_1644", "event:lc_1644", 1644, "十七年三月", "破北京·明亡", "战事", "闯军破京师，崇祯自缢煤山，明亡；旋山海关败于清吴联军。", "beijing"),
   ("ev_lc_1645", "event:lc_1645", 1645, "永昌二年", "九宫山殁", "结局", "闯军败退，李自成卒于湖北九宫山（死因史载不一）。", "jiugong"),
 ],
 "routes": [
   ("rt_lc_march", "闯军东进", "a",
    [("yanan", "1628", "陕北起"), ("luoyang_lc", "1641", "破洛阳"), ("beijing", "1644", "破北京")], {"at": "1644", "type": "victory", "text": "破京灭明"}),
 ],
 "engagements": [
   ("eng_lc_ly", "洛阳之战", "1641", "崇祯十四年", "luoyang_lc", "a", "闯军破洛阳，福王被擒杀，开仓赈饥，声威大振。", "event:lc_1641",
    [("a", "李自成", 1.0, "fresh", 200, "流动作战", "闯军机动，破城散财聚民心。", 0.55), ("b", "明守军", 1.0, "exhausted", 220, "孤守", "明军缺饷离心，城破。", 0.5)]),
 ],
 "timeline": [
   ("1628", "崇祯元", "闯王起事", True), ("1641", "十四", "破洛阳", False), ("1644", "十七", "破北京·明亡", True), ("1645", "永昌二", "九宫山殁", True),
 ],
 "persons": [("lizicheng4", "李自成", "闯"), ("chongzhen2", "崇祯帝", "明")],
})

# ══════════════════════ 民族融合（region: fusion） ══════════════════════
civ({
 "id": "xiaowen",
 "title": "孝文帝汉化",
 "kind": "fusion",
 "region": "fusion", "region_name": "民族融合",
 "region_note": "北魏孝文帝迁都洛阳、禁胡服胡语、改汉姓，推动鲜卑融入华夏。",
 "dossier_label": "孝文帝汉化",
 "subtitle": "493—496 · 北魏",
 "primary_place": "luoyang",
 "lead": "孝文帝自平城迁都洛阳，禁穿胡服、改说汉语、鲜卑姓改汉姓（拓跋→元）、与汉士族通婚，加速北魏政权与文化的华夏化。",
 "parties_note": "汉化措施据《魏书·高祖纪》与《资治通鉴》综合，守旧鲜卑贵族多反对。",
 "places": [
   ("pingcheng", "平城", 113.30, 40.08, "北魏旧都（今大同）"),
   ("luoyang", "洛阳", 112.45, 34.62, "迁都后汉化中心"),
 ],
 "events": [
   ("ev_xw_493", "event:xw_493", 493, "太和十七年", "迁都洛阳", "改革", "孝文帝以南伐为名，率众自平城迁都洛阳，脱离鲜卑守旧势力。", "luoyang"),
   ("ev_xw_494", "event:xw_494", 494, "十八年", "禁胡服·改汉语", "改革", "诏禁士民穿胡服、朝廷说鲜卑语，违者黜官，从汉制。", "luoyang"),
   ("ev_xw_496", "event:xw_496", 496, "二十年", "改姓·定姓族", "改革", "改拓跋等鲜卑姓为汉姓（皇室拓跋→元），定姓族门第，与汉高门通婚。", "luoyang"),
 ],
 "persons": [("xiaowen", "孝文帝", "北魏"), ("fenghou", "冯太后", "北魏")],
})
civ({
 "id": "wencheng",
 "title": "文成公主入藏",
 "kind": "fusion",
 "region": "fusion", "region_name": "民族融合",
 "region_note": "641 年文成公主入吐蕃，带去佛经、工技、谷物，汉藏交流里程碑。",
 "dossier_label": "文成公主入藏",
 "subtitle": "641 · 唐蕃和亲",
 "primary_place": "lhasa",
 "layer_title": "唐蕃通道叠加",
 "timeline_title": "唐蕃和亲时间轴",
 "lead": "贞观十五年文成公主赴吐蕃，与松赞干布和亲，携释迦像、经卷、工技、种子入藏，奠定唐蕃「舅甥」之好，汉藏文化交流开启新篇。",
 "parties_note": "和亲事迹据《旧唐书·吐蕃传》与藏文史料综合，细节（如带物）有传说成分。",
 "places": [
   ("changan_wc", "长安", 108.94, 34.34, "唐都，公主启程"),
   ("lhasa", "逻些", 91.11, 29.65, "吐蕃都（今拉萨）"),
   ("songzhou", "松州", 103.60, 32.90, "唐蕃边界（今松潘）"),
 ],
 "events": [
   ("ev_wc_641", "event:wc_641", 641, "贞观十五年", "文成入藏", "和亲", "文成公主赴吐蕃，与松赞干布和亲；携佛经、工技、谷物、工匠，唐蕃盟好。", "lhasa"),
   ("ev_wc_temple", "event:wc_temple", 641, "同年", "大昭寺·汉藏交融", "融合", "松赞干布建大昭寺供奉公主所带释迦像，汉地工技、历算、医药入藏。", "lhasa"),
 ],
 "routes": [
   ("rt_wc_road", "唐蕃道", "b",
    [("changan_wc", "641", "长安启程"), ("songzhou", "641", "松州界"), ("lhasa", "641", "逻些")], {"at": "641", "type": "none", "text": "唐蕃和亲路"}),
 ],
 "timeline": [
   ("641", "贞观十五", "文成入藏", True), ("641", "同年", "大昭寺·交融", False),
 ],
 "persons": [("wencheng", "文成公主", "唐"), ("songzanganbu", "松赞干布", "吐蕃")],
})

# ══════════════════════ 宫廷斗争（region: court） ══════════════════════
civ({
 "id": "xuanwu",
 "title": "玄武门之变",
 "kind": "court",
 "region": "court", "region_name": "宫廷斗争",
 "region_note": "626 年李世民于玄武门伏杀太子建成、齐王元吉，夺嫡即位。",
 "dossier_label": "玄武门之变",
 "subtitle": "626 · 唐高祖武德九年",
 "primary_place": "xuanwumen",
 "lead": "秦王李世民与太子建成、齐王元吉争储。武德九年六月四日，世民伏兵玄武门，杀建成、元吉，迫高祖立己为太子，旋即位（太宗）。",
 "parties_note": "事据《旧唐书》《资治通鉴》综合；建成、元吉一方记载多经太宗朝删改。",
 "places": [
   ("xuanwumen", "玄武门", 108.95, 34.27, "唐长安宫城北门，政变处"),
   ("changan_xx", "长安", 108.94, 34.34, "唐都"),
   ("qianliang", "太极宫", 108.94, 34.35, "高祖临朝处"),
 ],
 "events": [
   ("ev_xx_626", "event:xx_626", 626, "武德九年六月四", "玄武门伏杀", "政变", "世民伏兵玄武门，建成、元吉入朝遇杀，党羽溃；尉迟敬德甲士入宫「宿卫」高祖。", "xuanwumen"),
   ("ev_xx_after", "event:xx_after", 626, "同年八月", "世民即位", "结局", "高祖立世民为太子，旋禅位，是为太宗，开启贞观之治。", "changan_xx"),
 ],
 "persons": [("limin2", "李世民", "秦王/太宗"), ("jiancheng", "李建成", "太子"), ("gaozu", "唐高祖", "唐")],
})
civ({
 "id": "jingnan",
 "title": "靖难之役",
 "kind": "court",
 "region": "court", "region_name": "宫廷斗争",
 "region_note": "1399—1402 燕王朱棣起兵，夺建文帝位，迁都北京、开创永乐。",
 "dossier_label": "靖难之役",
 "subtitle": "1399—1402 · 燕王 vs 建文",
 "primary_place": "nanjing",
 "a_name": "燕军", "b_name": "建文军",
 "lead": "建文削藩，燕王朱棣以「清君侧」起兵。三年靖难，1402 破南京，建文不知所终，棣即位为成祖，后迁都北京。",
 "parties_note": "官方《太宗实录》多方掩饰夺位；建文一朝事迹多湮，此处综合诸史。",
 "places": [
   ("beiping", "北平", 116.40, 39.90, "燕王封地（今北京）"),
   ("nanjing", "南京", 118.80, 32.06, "明初都，建文帝所在"),
 ],
 "events": [
   ("ev_jn_1399", "event:jn_1399", 1399, "建文元年", "燕王起兵", "战事", "朱棣以「清君侧、靖国难」为名起兵北平，史称靖难之役。", "beiping"),
   ("ev_jn_1402", "event:jn_1402", 1402, "四年六月", "破南京·即位", "战事", "燕军渡江破南京，宫中火起，建文帝失踪；棣即位，是为成祖。", "nanjing"),
 ],
 "routes": [
   ("rt_jn_march", "燕军南下", "a",
    [("beiping", "1399", "北平起"), ("nanjing", "1402", "破南京")], {"at": "1402", "type": "victory", "text": "靖难成功"}),
 ],
 "engagements": [
   ("eng_jn_main", "灵璧—渡江", "1402", "建文四年", "nanjing", "a", "燕军连破官军于灵璧，渡江逼南京，谷王橞等开门迎入，宫火起。", "event:jn_1402",
    [("a", "朱棣", 1.0, "fresh", 240, "远征", "燕军久战骁锐，直趋京师。", 0.55), ("b", "建文军", 1.0, "marching", 260, "分守", "官军调度乖方，诸将离心。", 0.5)]),
 ],
 "timeline": [
   ("1399", "建文元", "燕王起兵", True), ("1402", "四", "破南京·即位", True),
 ],
 "persons": [("zhudi", "朱棣", "燕/成祖"), ("jianwen", "建文帝", "明")],
})

# ══════════════════════ 思想文化（region: thought） ══════════════════════
civ({
 "id": "dunzun",
 "title": "独尊儒术",
 "kind": "thought",
 "region": "thought", "region_name": "思想文化",
 "region_note": "前134 年武帝采董仲舒议，「罢黜百家，独尊儒术」，儒术成正统。",
 "dossier_label": "独尊儒术",
 "subtitle": "前134 · 汉武帝时",
 "primary_place": "changan_dz",
 "lead": "武帝即位，董仲舒上《天人三策》，请「诸不在六艺之科者罢去」，儒术定于一尊，立五经博士、兴太学，影响两千年。",
 "parties_note": "思想政策据《汉书·董仲舒传》《武帝纪》综合；「独尊」后百家并未尽绝，实为儒术官学化。",
 "places": [
   ("changan_dz", "长安", 108.94, 34.34, "汉都，策问之所"),
 ],
 "events": [
   ("ev_dz_134", "event:dz_134", -134, "元光元年", "天人三策·独尊儒术", "文化", "武帝诏举贤良，董仲舒对天人三策，请罢黜百家、独尊儒术，立五经博士。", "changan_dz"),
   ("ev_dz_taixue", "event:dz_taixue", -124, "元朔五年", "兴太学", "制度", "为五经博士置弟子员，太学兴，儒生入仕之途大开。", "changan_dz"),
 ],
 "persons": [("wudi", "汉武帝", "汉"), ("dongzhongshu", "董仲舒", "儒者")],
})
civ({
 "id": "keju",
 "title": "科举制",
 "kind": "thought",
 "region": "thought", "region_name": "思想文化",
 "region_note": "605 年隋设进士科，科举肇始；唐宋完善，1905 年废，绵延一千三百年。",
 "dossier_label": "科举制",
 "subtitle": "605—1905 · 选官制度",
 "primary_place": "luoyang_k",
 "lead": "隋炀帝始置进士科，以试取士代九品中正之阀阅；唐增明经进士、宋行殿试糊名，明清八股；1905 年清廷废科举，兴学堂。",
 "parties_note": "科举沿革据《隋书》《新唐书·选举志》与近代研究综合。",
 "places": [
   ("luoyang_k", "洛阳", 112.45, 34.62, "隋东都，进士科所起"),
   ("changan_k", "长安", 108.94, 34.34, "唐贡院所在"),
 ],
 "events": [
   ("ev_kj_605", "event:kj_605", 605, "隋大业元年", "始设进士科", "制度", "炀帝置进士科，试策取士，科举之制肇端，打破门第垄断。", "luoyang_k"),
   ("ev_kj_tang", "event:kj_tang", 690, "武周—唐", "殿试·科目增", "制度", "武周行殿试、制科，唐明经进士并重，科举成入仕正途。", "changan_k"),
   ("ev_kj_1905", "event:kj_1905", 1905, "清光绪三十一年", "废科举", "结局", "清廷下诏废科举、兴学堂，推行千三百年的选官制终结。", "luoyang_k"),
 ],
 "persons": [("yangdi_k", "隋炀帝", "隋"), ("wuzetian", "武周皇帝", "唐")],
})

# ══════════════════════ 科技医学（region: tech） ══════════════════════
civ({
 "id": "four_inv",
 "title": "四大发明",
 "kind": "tech",
 "region": "tech", "region_name": "科技医学",
 "region_note": "造纸、印刷、火药、指南针——改变世界的中国原创，经丝路与海路西传。",
 "dossier_label": "四大发明",
 "subtitle": "2—13 世纪 · 改变世界的原创",
 "primary_place": "kaifeng_f",
 "lead": "蔡伦改进造纸（105），隋唐雕版、毕昇活字印刷，唐末火药用于军事，宋代指南针用于航海——四大发明先后成熟并外传，深刻重塑世界文明进程。",
 "parties_note": "各发明年代与西传路径据科技史综合；个别（如火药西传）具体年份有考订差异。",
 "places": [
   ("luoyang_f", "洛阳", 112.45, 34.62, "蔡伦改进造纸地（尚方）"),
   ("kaifeng_f", "开封", 114.30, 34.79, "北宋毕昇活字所在"),
   ("changan_f", "长安", 108.94, 34.34, "唐火药、海路起点"),
 ],
 "events": [
   ("ev_fi_paper", "event:fi_paper", 105, "东汉永元十七年", "蔡伦改进造纸", "科技", "蔡伦以树皮麻头敝布渔网为纸，奏上，「蔡侯纸」行世，书写材料革命。", "luoyang_f"),
   ("ev_fi_print", "event:fi_print", 1040, "北宋庆历", "毕昇活字印刷", "科技", "布衣毕昇发明胶泥活字，印书省工省料，为印刷术里程碑。", "kaifeng_f"),
   ("ev_fi_gun", "event:fi_gun", 850, "唐大中", "火药用于军事", "科技", "唐末火药配方渐明，用于飞火、火球；宋设火药作坊，火器始兴。", "changan_f"),
   ("ev_fi_compass", "event:fi_compass", 1119, "北宋宣和", "指南针航海", "科技", "《萍洲可谈》载海舶「夜则观星，昼则观日，阴晦则观指南针」，罗盘用于远洋。", "kaifeng_f"),
 ],
 "persons": [("cailun", "蔡伦", "东汉"), ("bisheng", "毕昇", "北宋")],
})
civ({
 "id": "bencao",
 "title": "本草纲目·授时历",
 "kind": "tech",
 "region": "tech", "region_name": "科技医学",
 "region_note": "李时珍《本草纲目》集药物学大成；郭守敬《授时历》精度冠绝当时。",
 "dossier_label": "本草纲目·授时历",
 "subtitle": "1281 · 1578 · 科技医学高峰",
 "primary_place": "dadu_b",
 "lead": "元郭守敬据实测制《授时历》，一年 365.2425 日，与今公历同；明李时珍历时廿七载成《本草纲目》，载药千八百种，东传日本、西译欧洲。",
 "parties_note": "二书年代据《元史·历志》《明史·方技传》综合。",
 "places": [
   ("dadu_b", "大都", 116.40, 39.90, "郭守敬制历、设司天台"),
   ("qizhou", "蕲州", 115.43, 30.00, "李时珍故里（今湖北蕲春）"),
 ],
 "events": [
   ("ev_bc_1281", "event:bc_1281", 1281, "元至元十八年", "《授时历》颁行", "科技", "郭守敬等依实测天体编《授时历》，岁实 365.2425 日，精度领先世界三百年。", "dadu_b"),
   ("ev_bc_1578", "event:bc_1578", 1578, "明万历六年", "《本草纲目》成", "科技", "李时珍历时廿七载，三易其稿成《本草纲目》，分十六部、载药一八九二种。", "qizhou"),
 ],
 "persons": [("guoshoujing_b", "郭守敬", "元"), ("lishizhen", "李时珍", "明")],
})


# ════════════════ 扩展数据集（铺满各朝代，v2）═══════════════
# 数据集中在 civ_events_expand.py，逻辑复用本文件 build_one()。
try:
    from civ_events_expand import EXPAND as _EXPAND
    B.extend(_EXPAND)
    print("  [并入] civ_events_expand：%d 个扩展切片" % len(_EXPAND))
except Exception as _e:
    print("  [警告] 未能导入 civ_events_expand：%s" % _e)


# ════════════════ 生成器 ════════════════
def to_eng(t):
    (eid, name, at, era, place, winner, outcome, subject, sides) = t
    return {
        "id": eid, "name": name, "at": at, "era": era, "place": place,
        "winner": winner, "outcome": outcome, "subject": subject,
        "sides": [{"side": s[0], "commander": s[1], "committed_ratio": s[2],
                   "fatigue": s[3], "march_72h_li": s[4], "posture": s[5],
                   "commit_basis": s[6], "commit_confidence": s[7]} for s in sides]
    }


def to_route(t):
    (rid, name, side, nodes, outcome) = t
    return {
        "id": rid, "name": name, "side": side,
        "nodes": [{"place": n[0], "at": n[1], "label": n[2]} for n in nodes],
        "outcome": outcome
    }


def to_event(t):
    (eid, subject, year, era, title, kind, text, place) = t
    return {"id": eid, "subject": subject, "year": year, "era": era,
            "title": title, "kind": kind, "text": text,
            "place": place} if place else {"id": eid, "subject": subject,
            "year": year, "era": era, "title": title, "kind": kind, "text": text}


def to_assertion(t, predicate):
    (eid, subject, year, era, title, kind, text, place) = t
    a = {
        "id": "AX_" + eid,
        "subject": subject,
        "predicate": predicate,
        "value_text": text or title,
        "source": "synthesis",
        "layer": "scholarship",
        "quote_status": "paraphrase_unverified",
        "confidence": 0.4,
        "time": {"start": year, "end": year, "era_text": era},
    }
    if place:
        a["place"] = place
    return a


def to_place(t):
    (pid, name, lon, lat, note) = t
    return {"id": pid, "name": name, "lon": float(lon), "lat": float(lat), "note": note}


def to_person(t):
    if len(t) >= 3:
        pid, name, label = t[0], t[1], t[2]
    else:
        pid, name, label = t[0], t[1], ""
    return {"id": pid, "name": name, "side": label, "influence": 0}


def build_one(d):
    sid = d["id"]
    ddir = os.path.join(DATA, sid)
    os.makedirs(ddir, exist_ok=True)
    has_sides = ("a_name" in d and "b_name" in d)
    a, b = (d.get("a_name"), d.get("b_name")) if has_sides else (None, None)
    ac, bc = (d.get("a_color", RED), d.get("b_color", BLUE)) if has_sides else (RED, BLUE)

    # vocab.json（内联语境包，驱动数据驱动图例）。
    # 冲突类：a/b 双方 + 「综合史料」；非冲突类：仅「综合史料」单一 party。
    # 全部 party 为本切片局部键（ming_qing 默认包无这些键），满足 test_vocab 内联包隔离，
    # 也满足 lint E05（在受控词表内）/ E06（synthesis 源 party 跨切片一致）。
    if has_sides:
        parties = [a, b, "综合史料"]
        party_bucket = {a: a, b: b, "综合史料": "综合史料"}
        party_colors = {"a": ac, "b": bc, "综合史料": GREY}
        legend = {
            "battle": [
                {"key": "a", "label": a + "胜", "color": ac},
                {"key": "b", "label": b + "胜", "color": bc},
                {"key": "none", "label": "未分胜", "color": GREY},
            ],
            "route": [
                {"key": "a", "label": a + "行动", "color": ac},
                {"key": "b", "label": b + "行动", "color": bc},
            ],
        }
    else:
        parties = ["综合史料"]
        party_bucket = {"综合史料": "综合史料"}
        party_colors = {"综合史料": GREY}
        # 有 routes（黄河/运河/长城）时给一个河道/路线的图例类别
        legend = {}
        if d.get("routes"):
            legend["route"] = [{"key": "b", "label": d.get("route_legend", "河道/路线"), "color": BLUE}]

    vocab = {
        "_comment": "文明事件图例配置（本切片内联，驱动 battle_layer 数据驱动图例）。legend.route 的 key 须与 routes.side 取值一致。",
        "parties": parties,
        "party_bucket": party_bucket,
        "party_colors": party_colors,
        "legend": legend,
    }
    # places（rivers/wall 占位，全局共享江河仍由 sarhu 提供）
    places = {"places": [to_place(p) for p in d["places"]], "rivers": [], "wall": []}
    # engagements（可选）
    eng = None
    if d.get("engagements"):
        eng = {
            "_comment": "接战（engagement）。winner 取 a/b/none，与 vocab.legend.battle.key 一致。",
            "engagements": [to_eng(e) for e in d["engagements"]],
            "attrition": {
                "a": [{"after": (d["timeline"][-1][0] if d.get("timeline") else ""), "lost": 0, "basis": "胜方损失多无精确记载，待史料核实。"}],
                "b": [{"after": (d["timeline"][-1][0] if d.get("timeline") else ""), "lost": 0, "basis": "败方损失数字以现代考订折中，置信度待核。"}],
                "confidence": {"a": 0.4, "b": 0.4},
                "gap_note": "本切片为综合史料整理，数字多为估算，界面应视为待核实。"
            },
            "fatigue_weight": {"fresh": 1.0, "marching": 0.85, "exhausted": 0.7},
        }
    # routes + timeline（可选）
    routes = None
    if d.get("routes"):
        routes = {"routes": [to_route(r) for r in d["routes"]], "timeline": [
            {"at": t[0], "era": t[1], "label": t[2], "key": t[3]} for t in d["timeline"]]}
    # events
    events = {"events": [to_event(e) for e in d["events"]]}
    # sources（诚实：综合史料，非逐源）。party 用本切片局部键「综合史料」。
    sources = {"sources": [{"id": "synthesis", "title": d["title"] + "·综合史料", "party": "综合史料",
                            "availability": "not_free",
                            "bias_note": d.get("parties_note", "本切片由综合史料整理，史事以主流史载为准，待逐源核对。")}]}
    # persons
    persons = {"persons": [to_person(p) for p in d.get("persons", [])]}
    # assertions（由事件生成综合史料断言，使其 subject 被引用，满足 I9）
    predicate = "战事" if has_sides else "事件"
    assertions = [to_assertion(e, predicate) for e in d["events"]]

    def write_json(name, obj):
        with open(os.path.join(ddir, name), "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, indent=1)

    write_json("vocab.json", vocab)
    write_json("places.json", places)
    if eng:
        write_json("engagements.json", eng)
    if routes:
        write_json("routes.json", routes)
    write_json("events.json", events)
    write_json("sources.json", sources)
    write_json("persons.json", persons)
    # 灾情影响范围（v0.49 独立灾难模型）：disaster 场景可带 impact 字段 → impact.json
    if d.get("impact"):
        write_json("impact.json", d["impact"])
    with open(os.path.join(ddir, "assertions.jsonl"), "w", encoding="utf-8") as f:
        for a_obj in assertions:
            f.write(json.dumps(a_obj, ensure_ascii=False) + "\n")

    # scenes.json 条目
    extra = ["events", "places"]
    if routes:
        extra.append("routes")
    if eng:
        extra.append("engagements")
    entry = {
        "kind": d["kind"], "region": d["region"], "title": d["title"],
        "dossier_label": d["dossier_label"], "subtitle": d["subtitle"],
        "primary_place": d["primary_place"],
        "dossier_event": d["events"][0][1] if d["events"][0][1].startswith("event:") else None,
        "terrain_grid": "china_coarse",
        "extra_files": extra,
        "lead": d["lead"], "parties_note": d.get("parties_note", ""),
        "subject_names": {("person:" + p[0]): p[1] for p in d.get("persons", [])},
    }
    if d.get("layer_title"):
        entry["layer_title"] = d["layer_title"]
    if d.get("timeline_title"):
        entry["timeline_title"] = d["timeline_title"]
    if d.get("route_legend"):
        pass  # 已用于 vocab.legend
    return entry


def main():
    reg_path = os.path.join(DATA, "scenes.json")
    reg = json.load(open(reg_path, encoding="utf-8"))
    regions = reg.get("regions", [])
    scenes = reg["scenes"]
    order = reg.get("order", list(scenes.keys()))

    new_regions = {}
    for d in B:
        new_regions.setdefault(d["region"], (d["region_name"], d["region_note"]))

    existing = {r["id"]: r for r in regions}
    for rid, (name, note) in new_regions.items():
        if rid not in existing:
            regions.append({"id": rid, "name": name, "note": note})

    # 安全清理：任何 scenes.json 中残留、但 data/<sid> 目录已不存在的条目，
    # 直接丢弃（防止 sid 改名后旧键悬空、build.py 加载时崩溃）。
    for sid in list(scenes.keys()):
        if not os.path.isdir(os.path.join(DATA, sid)):
            scenes.pop(sid, None)
            if sid in order:
                order.remove(sid)

    added = 0
    for d in B:
        sid = d["id"]
        if sid in scenes:
            old_dir = os.path.join(DATA, sid)
            if os.path.isdir(old_dir):
                shutil.rmtree(old_dir)
            scenes.pop(sid, None)
            if sid in order:
                order.remove(sid)
        scenes[sid] = build_one(d)
        order.append(sid)
        added += 1

    reg["regions"] = regions
    reg["order"] = order
    json.dump(reg, open(reg_path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("已生成 %d 个文明事件切片，scenes.json 已更新（regions=%d, scenes=%d）"
          % (added, len(regions), len(scenes)))


if __name__ == "__main__":
    main()
