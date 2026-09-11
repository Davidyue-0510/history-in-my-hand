// 本文件由 tools/build.py 自动生成（切片 acheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["acheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["acheng"] = {
 "meta": {
  "kind": "county",
  "region": "jianzhou",
  "province": "heilongjiang",
  "title": "阿城（金上京会宁府）",
  "dossier_label": "阿城",
  "subtitle": "女真建国 · 金上京 · 金源文化",
  "primary_place": "acheng_cheng",
  "dossier_event": "event:ev_acheng_01",
  "vocab_pack": "acheng",
  "terrain_grid": "china_coarse",
  "lead": "阿城位于阿什河畔、松嫩平原东南缘，1115 年完颜阿骨打称帝建金，定都会宁府，是为金源。下方为建国、灭辽与迁都三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以元修金史为本，辽史、宋史作旁证，现代考订作学界补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_acheng_01": "完颜阿骨打称帝建金",
   "event:ev_acheng_02": "金灭辽",
   "event:ev_acheng_03": "海陵王迁都燕京",
   "place:acheng_cheng": "阿城",
   "person:wanyan_aguda": "完颜阿骨打"
  },
  "epoch": "song",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "女真勃极烈制与猛安谋克组织以上京为核心，形成军政合一的建国基础"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "阿什河航运与松嫩平原农牧业支撑上京物资"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "上京聚集女真宗室、俘户、工匠，形成多族群都市"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     6,
     5
    ],
    "layer": "inference",
    "note": "上京据东北腹地，北控契丹旧地、东联高丽、南向辽东"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=acheng",
  "key": "acheng",
  "scene_id": "acheng"
 },
 "sources": [
  {
   "id": "jinshi",
   "title": "金史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正三年（1343），距金亡约110年",
   "color": "#6C7A89",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": "本纪、地理志、完颜希尹传载金初建国、上京会宁府与女真制度，为阿城/金源核心史料。"
  },
  {
   "id": "liaoshi",
   "title": "辽史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正四年（1344），距事约340年",
   "color": "#5E6E7C",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": "圣宗纪载辽南侵与萧挞凛之死；元修，作者非辽人，不能冒充辽方声音"
  },
  {
   "id": "songshi",
   "title": "宋史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正五年（1345），距事约340年",
   "color": "#6C7A89",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": "吐蕃传载吐蕃后裔诸部与王统世代，为拉萨吐蕃王统在宋代延续的汉文佐证。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "潮州史与海上丝路综合研究",
   "color": "#2E7D8F",
   "period": "今"
  },
  {
   "id": "acheng_fuzhi",
   "title": "阿城县志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距金上京约八百年",
   "color": "#7A6A52",
   "compiler": "《阿城县志》（清修）",
   "period": "清/民",
   "note": "阿城地方志，载山川形胜、金源遗址沿革与地方社会。"
  }
 ],
 "places": [
  {
   "id": "acheng_cheng",
   "name": "阿城（金上京会宁府）",
   "lon": 126.96,
   "lat": 45.53,
   "type": "capital",
   "modern": "今黑龙江省哈尔滨市阿城区",
   "note": "金初都城上京会宁府所在，女真建国核心。坐标取阿城区中心，approx（城市级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城市级精度），待 CHGIS 精修",
   "elev": 190
  },
  {
   "id": "huining_fuqin",
   "name": "会宁府皇城遗址",
   "lon": 126.97,
   "lat": 45.52,
   "type": "ruins",
   "modern": "阿城区南郊·金上京会宁府遗址",
   "note": "金上京南北二城与皇城遗址，全国重点文物保护单位。坐标取遗址区，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（遗址区精度），待 CHGIS 精修",
   "elev": 193
  },
  {
   "id": "jin_taizu_ling",
   "name": "金太祖陵址（完颜阿骨打陵）",
   "lon": 126.97,
   "lat": 45.51,
   "type": "tomb",
   "modern": "阿城区阿什河街道·金太祖陵公园",
   "note": "金太祖完颜阿骨打陵寝所在，后世重修。坐标 approx（城内点位）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城内点位），待 CHGIS 精修",
   "elev": 194
  },
  {
   "id": "ashhe_river",
   "name": "阿什河（按出虎水）",
   "lon": 127.0,
   "lat": 45.5,
   "type": "river",
   "modern": "纵贯阿城区，汇入松花江",
   "note": "女真语「按出虎水」（金之源），阿什河滋养松嫩平原东南缘，为金源文化发祥地。坐标取阿城段中线，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江段中线），待 CHGIS 精修",
   "elev": 203
  },
  {
   "id": "songhua_river",
   "name": "松花江（哈尔滨段）",
   "lon": 126.8,
   "lat": 45.8,
   "type": "river",
   "modern": "今哈尔滨市北·松花江干流",
   "note": "黑龙江最大支流，上京地区对外水运通道。坐标取哈尔滨—阿城间江段，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江段中线），待 CHGIS 精修",
   "elev": 141
  }
 ],
 "persons": [
  {
   "id": "wanyan_aguda",
   "name": "完颜阿骨打",
   "era": "金",
   "role": "金太祖·女真联盟都勃极烈",
   "note": "（1068—1123）统一女真诸部，1115 年称帝建金，定都会宁府；在位期间攻辽、创制女真大字。",
   "influence": 1
  },
  {
   "id": "wanyan_wuqimai",
   "name": "完颜吴乞买",
   "era": "金",
   "role": "金太宗",
   "note": "（1075—1135）阿骨打之弟，继位后灭辽、攻宋（靖康之变），巩固金朝对华北的占领。",
   "influence": 0
  },
  {
   "id": "wanyan_liang",
   "name": "完颜亮",
   "era": "金",
   "role": "海陵王·金熙宗后第四位皇帝",
   "note": "（1122—1161）1153 年迁都燕京（中都），1156 年下令毁掉上京宫殿，强化中央集权。",
   "influence": 0
  },
  {
   "id": "wanyan_xiyin",
   "name": "完颜希尹",
   "era": "金",
   "role": "女真大字创制者",
   "note": "（？—1140）金初重臣，仿汉字、契丹字创制女真大字，为金源文化重要奠基人。",
   "influence": 1
  },
  {
   "id": "wanyan_zongjun",
   "name": "完颜宗峻",
   "era": "金",
   "role": "女真宗室·猛安谋克贵族",
   "note": "金太祖之子，代表上京宗室集团；猛安谋克制度下的女真军事贵族。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AC_R01",
   "subject": "event:ev_acheng_01",
   "predicate": "称帝建金",
   "value_text": "收国元年（1115），完颜阿骨打称帝，国号大金，建元收国，定都会宁府",
   "value": 1115,
   "source": "jinshi",
   "layer": "record",
   "era": "收国元年",
   "place": "acheng_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（金史·太祖本纪：即皇帝位，国号大金）",
   "note": "金史·太祖本纪",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_R02",
   "subject": "event:ev_acheng_01",
   "predicate": "定都",
   "value_text": "金初以会宁府为上京，建皇城、宫殿，为金源政治中心",
   "value": null,
   "source": "jinshi",
   "layer": "record",
   "era": "金初",
   "place": "acheng_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（金史：以会宁府为上京）",
   "note": "金史·地理志",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_R03",
   "subject": "event:ev_acheng_02",
   "predicate": "灭辽",
   "value_text": "天辅五年至天会三年（1121—1125），金攻灭辽朝，俘辽天祚帝",
   "value": 1125,
   "source": "jinshi",
   "layer": "record",
   "era": "天会三年",
   "place": "acheng_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（金史：辽主天祚败亡）",
   "note": "金史·太祖/太宗本纪",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_R04",
   "subject": "event:ev_acheng_03",
   "predicate": "迁都",
   "value_text": "贞元元年（1153），海陵王完颜亮迁都燕京，改燕京为中都，会宁府降为陪都",
   "value": 1153,
   "source": "jinshi",
   "layer": "record",
   "era": "贞元元年",
   "place": "acheng_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（金史·海陵本纪：贞元元年迁都燕京）",
   "note": "金史·海陵本纪",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_R05",
   "subject": "place:acheng_cheng",
   "predicate": "形胜",
   "value_text": "阿城位于阿什河畔、松嫩平原东南缘，为金源腹地，农牧兼宜",
   "value": null,
   "source": "acheng_fuzhi",
   "layer": "record",
   "era": "清/今",
   "place": "acheng_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "（阿城县志：阿什河环绕，松嫩平原沃野）",
   "note": "阿城县志；地理公开数据",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AC_R06",
   "subject": "person:wanyan_xiyin",
   "predicate": "创制文字",
   "value_text": "完颜希尹仿汉字楷字、契丹字制度，创制女真大字，金太祖命颁行之",
   "value": 1119,
   "source": "jinshi",
   "layer": "record",
   "era": "天辅三年",
   "place": "acheng_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（金史·完颜希尹传：希尹乃依仿汉人楷字，因契丹字制度，合本国语，制女真字）",
   "note": "金史·完颜希尹传",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_S01",
   "subject": "place:acheng_cheng",
   "predicate": "都城规模",
   "value_text": "金上京城分南北二城，周长约11公里，皇城位于南城中部偏西",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "上京城址周长约11公里。",
   "note": "学界考证：考古测量",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_S02",
   "subject": "place:acheng_cheng",
   "predicate": "猛安谋克",
   "value_text": "金代以猛安谋克组织女真社会，上京为这一制度的发源地与核心",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "猛安谋克为女真基本社会组织。",
   "note": "学界考证",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_S03",
   "subject": "place:acheng_cheng",
   "predicate": "金源文化",
   "value_text": "金源文化指女真崛起于按出虎水（阿什河），以会宁府为核心形成的地方文化传统",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "金源文化以会宁府为中心。",
   "note": "学界考证：地方文化史",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_S04",
   "subject": "event:ev_acheng_02",
   "predicate": "辽金战争",
   "value_text": "辽亡与金崛起改变了燕云以北的政治格局，金取代辽成为东亚最强政权",
   "value": null,
   "source": "liaoshi",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "辽金战争以辽亡告终。",
   "note": "辽史·天祚帝纪",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_S05",
   "subject": "event:ev_acheng_03",
   "predicate": "迁都影响",
   "value_text": "迁都燕京标志着金政治中心南移，会宁府由上京降为陪都，地位下降",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "海陵王迁都使上京降为陪都。",
   "note": "学界考证",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_S06",
   "subject": "place:acheng_cheng",
   "predicate": "宋人视角",
   "value_text": "宋人记载上京遥远苦寒、女真兵马强劲，反映中原士人对东北边疆的想象",
   "value": null,
   "source": "songshi",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "宋史载金人起于东北。",
   "note": "宋史·金国传",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_S07",
   "subject": "person:wanyan_aguda",
   "predicate": "建国研究",
   "value_text": "学界对阿骨打称帝建国动机、女真联盟整合过程有综合研究",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "阿骨打建国整合女真诸部。",
   "note": "学界考证",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_I01",
   "subject": "place:acheng_cheng",
   "predicate": "地理影响",
   "value_text": "阿什河航运与松嫩平原农业支撑上京的物资供应",
   "value": null,
   "source": "acheng_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据阿城县志推断",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AC_I02",
   "subject": "place:acheng_cheng",
   "predicate": "军事地理",
   "value_text": "上京据东北腹地，北控契丹旧地、东联高丽、南向辽东",
   "value": null,
   "source": "jinshi",
   "layer": "inference",
   "era": "推算",
   "place": "acheng_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据金史·太祖本纪推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_I03",
   "subject": "place:acheng_cheng",
   "predicate": "制度",
   "value_text": "勃极烈制与猛安谋克构成军政合一的女真社会组织",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "acheng_cheng",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据金史制度记载推断",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_I04",
   "subject": "person:wanyan_xiyin",
   "predicate": "思想",
   "value_text": "女真大字创制使女真文化得以书面化，强化族群认同",
   "value": null,
   "source": "jinshi",
   "layer": "inference",
   "era": "推算",
   "place": "acheng_cheng",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据金史·完颜希尹传推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_I05",
   "subject": "place:acheng_cheng",
   "predicate": "社会",
   "value_text": "上京聚集女真宗室、俘户、工匠，形成多族群都市",
   "value": null,
   "source": "acheng_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "acheng_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据阿城县志推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AC_G01",
   "subject": "place:huining_fuqin",
   "predicate": "皇城布局",
   "value_text": "上京皇城宫殿具体布局与建筑形制考古未完全明了",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "huining_fuqin",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "上京皇城宫殿布局",
    "skills": [
     "考古",
     "建筑史"
    ],
    "accept": "需金上京遗址考古报告"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "AC_G02",
   "subject": "event:ev_acheng_01",
   "predicate": "即位仪式",
   "value_text": "1115 年称帝具体仪式与即位地点无详载",
   "value": null,
   "source": "jinshi",
   "layer": "gap",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "收国元年即位仪式",
    "skills": [
     "史料",
     "考古"
    ],
    "accept": "需金史与考古互证"
   },
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "AC_G03",
   "subject": "place:acheng_cheng",
   "predicate": "人口规模",
   "value_text": "金上京鼎盛期人口与城市规模无确载",
   "value": null,
   "source": "acheng_fuzhi",
   "layer": "gap",
   "era": "今",
   "place": "acheng_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "上京会宁府人口规模",
    "skills": [
     "历史地理",
     "方志"
    ],
    "accept": "需考古与文献互证"
   },
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "AC_G01",
  "AC_G02",
  "AC_G03"
 ],
 "events": [
  {
   "id": "ev_acheng_01",
   "year": 1115,
   "era": "收国元年",
   "kind": "建国称帝",
   "title": "完颜阿骨打称帝建金，定都会宁",
   "place": "acheng_cheng",
   "text": "收国元年（1115），完颜阿骨打统一女真诸部后，在按出虎水（阿什河）畔称帝，国号大金，建元收国，定都会宁府（今阿城），标志着金朝肇基。",
   "subject": "event:ev_acheng_01"
  },
  {
   "id": "ev_acheng_02",
   "year": 1125,
   "era": "天会三年",
   "kind": "灭国",
   "title": "金灭辽",
   "place": "acheng_cheng",
   "text": "天辅五年至天会三年（1121—1125），金军攻灭辽朝，俘辽天祚帝。辽亡后，金成为东亚最强政权，为随后南下攻宋奠定基础。",
   "subject": "event:ev_acheng_02"
  },
  {
   "id": "ev_acheng_03",
   "year": 1153,
   "era": "贞元元年",
   "kind": "迁都",
   "title": "海陵王迁都燕京",
   "place": "acheng_cheng",
   "text": "贞元元年（1153），海陵王完颜亮正式迁都燕京，改燕京为中都，会宁府降为陪都。金代政治中心由此南移，但上京仍保有「金源」象征意义。",
   "subject": "event:ev_acheng_03"
  }
 ],
 "edges": [
  {
   "from": "acheng_cheng",
   "to": "huining_fuqin",
   "type": "mem",
   "label": "会宁府皇城在阿城城区南郊，为金初宫殿所在"
  },
  {
   "from": "acheng_cheng",
   "to": "jin_taizu_ling",
   "type": "mem",
   "label": "金太祖完颜阿骨打陵寝在阿城近郊"
  },
  {
   "from": "acheng_cheng",
   "to": "ashhe_river",
   "type": "geo",
   "label": "阿城位于阿什河畔，按出虎水为金源"
  },
  {
   "from": "acheng_cheng",
   "to": "songhua_river",
   "type": "geo",
   "label": "松花江为北上京地区对外水运通道"
  },
  {
   "from": "ashhe_river",
   "to": "songhua_river",
   "type": "geo",
   "label": "阿什河汇入松花江"
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "vocab": {
  "layers": {
   "record": "原始史料",
   "scholarship": "学界研究",
   "inference": "合理推断",
   "gap": "证据缺口"
  },
  "quote_status": {
   "verbatim": "直接引文",
   "paraphrase_unverified": "转述待核",
   "generated": "生成"
  },
  "parties": [
   "元·官修",
   "学界",
   "后世官修"
  ],
  "party_bucket": {
   "元·官修": "元·官修",
   "学界": "学界",
   "后世官修": "后世官修"
  },
  "party_colors": {
   "元·官修": "#6C7A89",
   "学界": "#2E7D8F",
   "后世官修": "#7A6A52"
  },
  "factions": {
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_元·官修": "#6C7A89",
   "f_学界": "#2E7D8F",
   "f_后世官修": "#7A6A52"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        122.43,
        40.35
       ],
       [
        122.43,
        46.8
       ],
       [
        128.0,
        46.8
       ],
       [
        128.0,
        40.35
       ],
       [
        122.43,
        40.35
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        122.43,
        46.8
       ],
       [
        122.43,
        42.732
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.43,
        42.771
       ],
       [
        122.43,
        42.842
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.704,
        43.37
       ],
       [
        123.608,
        43.366
       ],
       [
        123.545,
        43.415
       ],
       [
        123.52,
        43.402
       ],
       [
        123.486,
        43.445
       ],
       [
        123.442,
        43.438
       ],
       [
        123.42,
        43.41
       ],
       [
        123.383,
        43.469
       ],
       [
        123.364,
        43.483
       ],
       [
        123.316,
        43.492
       ],
       [
        123.33,
        43.519
       ],
       [
        123.305,
        43.551
       ],
       [
        123.36,
        43.567
       ],
       [
        123.453,
        43.546
       ],
       [
        123.461,
        43.569
       ],
       [
        123.434,
        43.575
       ],
       [
        123.421,
        43.598
       ],
       [
        123.512,
        43.593
       ],
       [
        123.51,
        43.625
       ],
       [
        123.537,
        43.634
       ],
       [
        123.518,
        43.682
       ],
       [
        123.52,
        43.708
       ],
       [
        123.483,
        43.737
       ],
       [
        123.498,
        43.771
       ],
       [
        123.462,
        43.823
       ],
       [
        123.468,
        43.854
       ],
       [
        123.397,
        43.955
       ],
       [
        123.371,
        43.97
       ],
       [
        123.401,
        43.979
       ],
       [
        123.366,
        44.014
       ],
       [
        123.331,
        44.029
       ],
       [
        123.328,
        44.084
       ],
       [
        123.351,
        44.093
       ],
       [
        123.363,
        44.133
       ],
       [
        123.387,
        44.162
       ],
       [
        123.324,
        44.18
       ],
       [
        123.287,
        44.212
       ],
       [
        123.277,
        44.253
       ],
       [
        123.197,
        44.345
       ],
       [
        123.129,
        44.367
       ],
       [
        123.114,
        44.403
       ],
       [
        123.142,
        44.428
       ],
       [
        123.126,
        44.455
       ],
       [
        123.137,
        44.486
       ],
       [
        123.125,
        44.51
       ],
       [
        123.066,
        44.506
       ],
       [
        123.025,
        44.493
       ],
       [
        122.856,
        44.398
       ],
       [
        122.761,
        44.37
       ],
       [
        122.703,
        44.319
       ],
       [
        122.675,
        44.286
       ],
       [
        122.642,
        44.284
       ],
       [
        122.516,
        44.251
       ],
       [
        122.483,
        44.237
       ],
       [
        122.43,
        44.236
       ],
       [
        122.43,
        45.917
       ],
       [
        122.446,
        45.917
       ],
       [
        122.496,
        45.858
       ],
       [
        122.505,
        45.787
       ],
       [
        122.523,
        45.787
       ],
       [
        122.556,
        45.822
       ],
       [
        122.603,
        45.778
       ],
       [
        122.641,
        45.771
       ],
       [
        122.65,
        45.731
       ],
       [
        122.672,
        45.7
       ],
       [
        122.742,
        45.705
       ],
       [
        122.751,
        45.736
       ],
       [
        122.792,
        45.766
       ],
       [
        122.752,
        45.835
       ],
       [
        122.773,
        45.857
       ],
       [
        122.8,
        45.857
       ],
       [
        122.829,
        45.912
       ],
       [
        122.793,
        46.073
       ],
       [
        123.046,
        46.1
       ],
       [
        123.07,
        46.124
       ],
       [
        123.113,
        46.13
       ],
       [
        123.103,
        46.172
       ],
       [
        123.127,
        46.175
       ],
       [
        123.129,
        46.211
       ],
       [
        123.178,
        46.248
       ],
       [
        123.142,
        46.298
       ],
       [
        123.09,
        46.348
       ],
       [
        123.012,
        46.435
       ],
       [
        123.01,
        46.525
       ],
       [
        123.002,
        46.575
       ],
       [
        123.053,
        46.58
       ],
       [
        123.046,
        46.618
       ],
       [
        123.077,
        46.622
       ],
       [
        123.098,
        46.603
       ],
       [
        123.181,
        46.614
       ],
       [
        123.228,
        46.588
       ],
       [
        123.279,
        46.617
       ],
       [
        123.276,
        46.661
       ],
       [
        123.318,
        46.662
       ],
       [
        123.366,
        46.678
       ],
       [
        123.475,
        46.687
       ],
       [
        123.603,
        46.689
       ],
       [
        123.632,
        46.729
       ],
       [
        123.63,
        46.8
       ],
       [
        123.197,
        46.8
       ],
       [
        123.164,
        46.74
       ],
       [
        123.103,
        46.735
       ],
       [
        123.077,
        46.745
       ],
       [
        123.026,
        46.719
       ],
       [
        123.004,
        46.731
       ],
       [
        122.997,
        46.761
       ],
       [
        122.921,
        46.8
       ],
       [
        122.43,
        46.8
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         124.732,
         40.35
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.896,
         43.361
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.852,
         43.406
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.797,
         43.49
        ],
        [
         123.748,
         43.472
        ],
        [
         123.749,
         43.439
        ],
        [
         123.71,
         43.417
        ],
        [
         123.704,
         43.37
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.43,
         42.842
        ],
        [
         122.43,
         42.771
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.43,
         42.732
        ],
        [
         122.43,
         40.35
        ],
        [
         124.732,
         40.35
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         128.0,
         44.097
        ],
        [
         127.95,
         44.088
        ],
        [
         127.913,
         44.065
        ],
        [
         127.863,
         44.063
        ],
        [
         127.846,
         44.082
        ],
        [
         127.808,
         44.087
        ],
        [
         127.783,
         44.072
        ],
        [
         127.729,
         44.099
        ],
        [
         127.736,
         44.114
        ],
        [
         127.712,
         44.199
        ],
        [
         127.682,
         44.167
        ],
        [
         127.642,
         44.194
        ],
        [
         127.626,
         44.188
        ],
        [
         127.59,
         44.228
        ],
        [
         127.624,
         44.278
        ],
        [
         127.579,
         44.311
        ],
        [
         127.486,
         44.41
        ],
        [
         127.509,
         44.437
        ],
        [
         127.464,
         44.485
        ],
        [
         127.465,
         44.517
        ],
        [
         127.485,
         44.529
        ],
        [
         127.536,
         44.522
        ],
        [
         127.57,
         44.55
        ],
        [
         127.557,
         44.575
        ],
        [
         127.393,
         44.632
        ],
        [
         127.276,
         44.64
        ],
        [
         127.262,
         44.613
        ],
        [
         127.214,
         44.625
        ],
        [
         127.229,
         44.643
        ],
        [
         127.182,
         44.645
        ],
        [
         127.139,
         44.607
        ],
        [
         127.095,
         44.616
        ],
        [
         127.09,
         44.594
        ],
        [
         127.05,
         44.567
        ],
        [
         127.042,
         44.591
        ],
        [
         127.044,
         44.654
        ],
        [
         127.031,
         44.673
        ],
        [
         127.041,
         44.712
        ],
        [
         126.997,
         44.765
        ],
        [
         126.984,
         44.824
        ],
        [
         127.0,
         44.874
        ],
        [
         127.022,
         44.899
        ],
        [
         127.073,
         44.907
        ],
        [
         127.093,
         44.947
        ],
        [
         127.05,
         45.004
        ],
        [
         127.018,
         45.024
        ],
        [
         126.985,
         45.068
        ],
        [
         126.971,
         45.071
        ],
        [
         126.964,
         45.132
        ],
        [
         126.856,
         45.146
        ],
        [
         126.793,
         45.135
        ],
        [
         126.787,
         45.159
        ],
        [
         126.732,
         45.187
        ],
        [
         126.686,
         45.188
        ],
        [
         126.64,
         45.214
        ],
        [
         126.645,
         45.225
        ],
        [
         126.569,
         45.253
        ],
        [
         126.54,
         45.239
        ],
        [
         126.519,
         45.248
        ],
        [
         126.403,
         45.223
        ],
        [
         126.356,
         45.186
        ],
        [
         126.293,
         45.18
        ],
        [
         126.285,
         45.162
        ],
        [
         126.235,
         45.14
        ],
        [
         126.226,
         45.154
        ],
        [
         126.166,
         45.133
        ],
        [
         126.143,
         45.148
        ],
        [
         126.092,
         45.149
        ],
        [
         126.048,
         45.171
        ],
        [
         125.998,
         45.162
        ],
        [
         125.993,
         45.192
        ],
        [
         125.958,
         45.201
        ],
        [
         125.915,
         45.197
        ],
        [
         125.85,
         45.239
        ],
        [
         125.824,
         45.238
        ],
        [
         125.816,
         45.265
        ],
        [
         125.762,
         45.291
        ],
        [
         125.726,
         45.337
        ],
        [
         125.695,
         45.352
        ],
        [
         125.712,
         45.389
        ],
        [
         125.712,
         45.478
        ],
        [
         125.688,
         45.514
        ],
        [
         125.66,
         45.507
        ],
        [
         125.617,
         45.518
        ],
        [
         125.583,
         45.492
        ],
        [
         125.497,
         45.469
        ],
        [
         125.48,
         45.486
        ],
        [
         125.425,
         45.486
        ],
        [
         125.435,
         45.463
        ],
        [
         125.398,
         45.417
        ],
        [
         125.362,
         45.393
        ],
        [
         125.319,
         45.423
        ],
        [
         125.302,
         45.402
        ],
        [
         125.249,
         45.418
        ],
        [
         125.19,
         45.399
        ],
        [
         125.138,
         45.41
        ],
        [
         125.097,
         45.383
        ],
        [
         125.066,
         45.399
        ],
        [
         125.089,
         45.421
        ],
        [
         125.05,
         45.429
        ],
        [
         125.026,
         45.493
        ],
        [
         124.961,
         45.495
        ],
        [
         124.937,
         45.534
        ],
        [
         124.911,
         45.536
        ],
        [
         124.885,
         45.495
        ],
        [
         124.886,
         45.443
        ],
        [
         124.84,
         45.456
        ],
        [
         124.793,
         45.437
        ],
        [
         124.776,
         45.468
        ],
        [
         124.729,
         45.444
        ],
        [
         124.691,
         45.452
        ],
        [
         124.625,
         45.437
        ],
        [
         124.575,
         45.451
        ],
        [
         124.58,
         45.424
        ],
        [
         124.544,
         45.412
        ],
        [
         124.507,
         45.425
        ],
        [
         124.481,
         45.456
        ],
        [
         124.399,
         45.441
        ],
        [
         124.374,
         45.458
        ],
        [
         124.352,
         45.497
        ],
        [
         124.369,
         45.513
        ],
        [
         124.349,
         45.547
        ],
        [
         124.288,
         45.539
        ],
        [
         124.264,
         45.555
        ],
        [
         124.273,
         45.584
        ],
        [
         124.239,
         45.592
        ],
        [
         124.227,
         45.634
        ],
        [
         124.162,
         45.616
        ],
        [
         124.128,
         45.642
        ],
        [
         124.147,
         45.665
        ],
        [
         124.122,
         45.669
        ],
        [
         124.135,
         45.69
        ],
        [
         124.102,
         45.701
        ],
        [
         124.098,
         45.723
        ],
        [
         124.054,
         45.751
        ],
        [
         124.015,
         45.75
        ],
        [
         124.002,
         45.771
        ],
        [
         124.064,
         45.802
        ],
        [
         124.036,
         45.838
        ],
        [
         124.067,
         45.84
        ],
        [
         124.061,
         45.886
        ],
        [
         123.996,
         45.907
        ],
        [
         123.969,
         45.937
        ],
        [
         123.974,
         45.974
        ],
        [
         124.012,
         45.982
        ],
        [
         123.989,
         46.012
        ],
        [
         124.04,
         46.02
        ],
        [
         124.034,
         46.045
        ],
        [
         124.01,
         46.058
        ],
        [
         124.016,
         46.088
        ],
        [
         123.994,
         46.101
        ],
        [
         124.017,
         46.119
        ],
        [
         123.992,
         46.143
        ],
        [
         124.002,
         46.167
        ],
        [
         123.972,
         46.17
        ],
        [
         123.956,
         46.206
        ],
        [
         123.98,
         46.229
        ],
        [
         123.952,
         46.257
        ],
        [
         123.96,
         46.288
        ],
        [
         123.936,
         46.287
        ],
        [
         123.918,
         46.257
        ],
        [
         123.896,
         46.304
        ],
        [
         123.85,
         46.302
        ],
        [
         123.776,
         46.263
        ],
        [
         123.726,
         46.256
        ],
        [
         123.674,
         46.259
        ],
        [
         123.605,
         46.252
        ],
        [
         123.57,
         46.224
        ],
        [
         123.57,
         46.224
        ],
        [
         123.499,
         46.26
        ],
        [
         123.453,
         46.233
        ],
        [
         123.43,
         46.244
        ],
        [
         123.357,
         46.232
        ],
        [
         123.357,
         46.232
        ],
        [
         123.321,
         46.254
        ],
        [
         123.286,
         46.25
        ],
        [
         123.248,
         46.273
        ],
        [
         123.178,
         46.248
        ],
        [
         123.129,
         46.211
        ],
        [
         123.127,
         46.175
        ],
        [
         123.103,
         46.172
        ],
        [
         123.113,
         46.13
        ],
        [
         123.07,
         46.124
        ],
        [
         123.046,
         46.1
        ],
        [
         122.793,
         46.073
        ],
        [
         122.829,
         45.912
        ],
        [
         122.8,
         45.857
        ],
        [
         122.773,
         45.857
        ],
        [
         122.752,
         45.835
        ],
        [
         122.792,
         45.766
        ],
        [
         122.751,
         45.736
        ],
        [
         122.742,
         45.705
        ],
        [
         122.672,
         45.7
        ],
        [
         122.65,
         45.731
        ],
        [
         122.641,
         45.771
        ],
        [
         122.603,
         45.778
        ],
        [
         122.556,
         45.822
        ],
        [
         122.523,
         45.787
        ],
        [
         122.505,
         45.787
        ],
        [
         122.496,
         45.858
        ],
        [
         122.446,
         45.917
        ],
        [
         122.43,
         45.917
        ],
        [
         122.43,
         44.236
        ],
        [
         122.483,
         44.237
        ],
        [
         122.516,
         44.251
        ],
        [
         122.642,
         44.284
        ],
        [
         122.675,
         44.286
        ],
        [
         122.703,
         44.319
        ],
        [
         122.761,
         44.37
        ],
        [
         122.856,
         44.398
        ],
        [
         123.025,
         44.493
        ],
        [
         123.066,
         44.506
        ],
        [
         123.125,
         44.51
        ],
        [
         123.137,
         44.486
        ],
        [
         123.126,
         44.455
        ],
        [
         123.142,
         44.428
        ],
        [
         123.114,
         44.403
        ],
        [
         123.129,
         44.367
        ],
        [
         123.197,
         44.345
        ],
        [
         123.277,
         44.253
        ],
        [
         123.287,
         44.212
        ],
        [
         123.324,
         44.18
        ],
        [
         123.387,
         44.162
        ],
        [
         123.363,
         44.133
        ],
        [
         123.351,
         44.093
        ],
        [
         123.328,
         44.084
        ],
        [
         123.331,
         44.029
        ],
        [
         123.366,
         44.014
        ],
        [
         123.401,
         43.979
        ],
        [
         123.371,
         43.97
        ],
        [
         123.397,
         43.955
        ],
        [
         123.468,
         43.854
        ],
        [
         123.462,
         43.823
        ],
        [
         123.498,
         43.771
        ],
        [
         123.483,
         43.737
        ],
        [
         123.52,
         43.708
        ],
        [
         123.518,
         43.682
        ],
        [
         123.537,
         43.634
        ],
        [
         123.51,
         43.625
        ],
        [
         123.512,
         43.593
        ],
        [
         123.421,
         43.598
        ],
        [
         123.434,
         43.575
        ],
        [
         123.461,
         43.569
        ],
        [
         123.453,
         43.546
        ],
        [
         123.453,
         43.546
        ],
        [
         123.36,
         43.567
        ],
        [
         123.305,
         43.551
        ],
        [
         123.33,
         43.519
        ],
        [
         123.316,
         43.492
        ],
        [
         123.364,
         43.483
        ],
        [
         123.383,
         43.469
        ],
        [
         123.42,
         43.41
        ],
        [
         123.442,
         43.438
        ],
        [
         123.486,
         43.445
        ],
        [
         123.52,
         43.402
        ],
        [
         123.545,
         43.415
        ],
        [
         123.608,
         43.366
        ],
        [
         123.704,
         43.37
        ],
        [
         123.71,
         43.417
        ],
        [
         123.749,
         43.439
        ],
        [
         123.748,
         43.472
        ],
        [
         123.797,
         43.49
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.852,
         43.406
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.896,
         43.361
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.354,
         41.245
        ],
        [
         126.373,
         41.289
        ],
        [
         126.437,
         41.353
        ],
        [
         126.497,
         41.375
        ],
        [
         126.524,
         41.349
        ],
        [
         126.539,
         41.367
        ],
        [
         126.497,
         41.407
        ],
        [
         126.56,
         41.548
        ],
        [
         126.583,
         41.563
        ],
        [
         126.564,
         41.609
        ],
        [
         126.593,
         41.625
        ],
        [
         126.608,
         41.669
        ],
        [
         126.645,
         41.661
        ],
        [
         126.688,
         41.674
        ],
        [
         126.724,
         41.711
        ],
        [
         126.691,
         41.728
        ],
        [
         126.695,
         41.751
        ],
        [
         126.723,
         41.753
        ],
        [
         126.8,
         41.703
        ],
        [
         126.809,
         41.749
        ],
        [
         126.848,
         41.734
        ],
        [
         126.856,
         41.76
        ],
        [
         126.887,
         41.792
        ],
        [
         126.931,
         41.813
        ],
        [
         126.953,
         41.804
        ],
        [
         126.94,
         41.773
        ],
        [
         126.979,
         41.777
        ],
        [
         127.006,
         41.749
        ],
        [
         127.051,
         41.745
        ],
        [
         127.058,
         41.704
        ],
        [
         127.038,
         41.677
        ],
        [
         127.103,
         41.648
        ],
        [
         127.093,
         41.63
        ],
        [
         127.127,
         41.622
        ],
        [
         127.136,
         41.6
        ],
        [
         127.178,
         41.6
        ],
        [
         127.125,
         41.566
        ],
        [
         127.119,
         41.54
        ],
        [
         127.165,
         41.543
        ],
        [
         127.188,
         41.527
        ],
        [
         127.241,
         41.521
        ],
        [
         127.289,
         41.502
        ],
        [
         127.254,
         41.487
        ],
        [
         127.296,
         41.486
        ],
        [
         127.361,
         41.466
        ],
        [
         127.36,
         41.48
        ],
        [
         127.406,
         41.479
        ],
        [
         127.42,
         41.46
        ],
        [
         127.459,
         41.462
        ],
        [
         127.465,
         41.479
        ],
        [
         127.526,
         41.468
        ],
        [
         127.547,
         41.477
        ],
        [
         127.564,
         41.433
        ],
        [
         127.619,
         41.433
        ],
        [
         127.637,
         41.414
        ],
        [
         127.684,
         41.423
        ],
        [
         127.78,
         41.427
        ],
        [
         127.855,
         41.421
        ],
        [
         127.869,
         41.404
        ],
        [
         127.882,
         41.448
        ],
        [
         127.91,
         41.43
        ],
        [
         127.932,
         41.445
        ],
        [
         127.97,
         41.439
        ],
        [
         127.991,
         41.421
        ],
        [
         128.0,
         41.443
        ],
        [
         128.0,
         44.097
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         123.57,
         46.224
        ],
        [
         123.605,
         46.252
        ],
        [
         123.674,
         46.259
        ],
        [
         123.726,
         46.256
        ],
        [
         123.776,
         46.263
        ],
        [
         123.85,
         46.302
        ],
        [
         123.896,
         46.304
        ],
        [
         123.918,
         46.257
        ],
        [
         123.936,
         46.287
        ],
        [
         123.96,
         46.288
        ],
        [
         123.952,
         46.257
        ],
        [
         123.98,
         46.229
        ],
        [
         123.956,
         46.206
        ],
        [
         123.972,
         46.17
        ],
        [
         124.002,
         46.167
        ],
        [
         123.992,
         46.143
        ],
        [
         124.017,
         46.119
        ],
        [
         123.994,
         46.101
        ],
        [
         124.016,
         46.088
        ],
        [
         124.01,
         46.058
        ],
        [
         124.034,
         46.045
        ],
        [
         124.04,
         46.02
        ],
        [
         123.989,
         46.012
        ],
        [
         124.012,
         45.982
        ],
        [
         123.974,
         45.974
        ],
        [
         123.969,
         45.937
        ],
        [
         123.996,
         45.907
        ],
        [
         124.061,
         45.886
        ],
        [
         124.067,
         45.84
        ],
        [
         124.036,
         45.838
        ],
        [
         124.064,
         45.802
        ],
        [
         124.002,
         45.771
        ],
        [
         124.015,
         45.75
        ],
        [
         124.054,
         45.751
        ],
        [
         124.098,
         45.723
        ],
        [
         124.102,
         45.701
        ],
        [
         124.135,
         45.69
        ],
        [
         124.122,
         45.669
        ],
        [
         124.147,
         45.665
        ],
        [
         124.128,
         45.642
        ],
        [
         124.162,
         45.616
        ],
        [
         124.227,
         45.634
        ],
        [
         124.239,
         45.592
        ],
        [
         124.273,
         45.584
        ],
        [
         124.264,
         45.555
        ],
        [
         124.288,
         45.539
        ],
        [
         124.349,
         45.547
        ],
        [
         124.369,
         45.513
        ],
        [
         124.352,
         45.497
        ],
        [
         124.374,
         45.458
        ],
        [
         124.399,
         45.441
        ],
        [
         124.481,
         45.456
        ],
        [
         124.507,
         45.425
        ],
        [
         124.544,
         45.412
        ],
        [
         124.58,
         45.424
        ],
        [
         124.575,
         45.451
        ],
        [
         124.625,
         45.437
        ],
        [
         124.691,
         45.452
        ],
        [
         124.729,
         45.444
        ],
        [
         124.776,
         45.468
        ],
        [
         124.793,
         45.437
        ],
        [
         124.84,
         45.456
        ],
        [
         124.886,
         45.443
        ],
        [
         124.885,
         45.495
        ],
        [
         124.911,
         45.536
        ],
        [
         124.937,
         45.534
        ],
        [
         124.961,
         45.495
        ],
        [
         125.026,
         45.493
        ],
        [
         125.05,
         45.429
        ],
        [
         125.089,
         45.421
        ],
        [
         125.066,
         45.399
        ],
        [
         125.097,
         45.383
        ],
        [
         125.138,
         45.41
        ],
        [
         125.19,
         45.399
        ],
        [
         125.249,
         45.418
        ],
        [
         125.302,
         45.402
        ],
        [
         125.319,
         45.423
        ],
        [
         125.362,
         45.393
        ],
        [
         125.398,
         45.417
        ],
        [
         125.435,
         45.463
        ],
        [
         125.425,
         45.486
        ],
        [
         125.48,
         45.486
        ],
        [
         125.497,
         45.469
        ],
        [
         125.583,
         45.492
        ],
        [
         125.617,
         45.518
        ],
        [
         125.66,
         45.507
        ],
        [
         125.688,
         45.514
        ],
        [
         125.712,
         45.478
        ],
        [
         125.712,
         45.389
        ],
        [
         125.695,
         45.352
        ],
        [
         125.726,
         45.337
        ],
        [
         125.762,
         45.291
        ],
        [
         125.816,
         45.265
        ],
        [
         125.824,
         45.238
        ],
        [
         125.85,
         45.239
        ],
        [
         125.915,
         45.197
        ],
        [
         125.958,
         45.201
        ],
        [
         125.993,
         45.192
        ],
        [
         125.998,
         45.162
        ],
        [
         126.048,
         45.171
        ],
        [
         126.092,
         45.149
        ],
        [
         126.143,
         45.148
        ],
        [
         126.166,
         45.133
        ],
        [
         126.226,
         45.154
        ],
        [
         126.235,
         45.14
        ],
        [
         126.285,
         45.162
        ],
        [
         126.293,
         45.18
        ],
        [
         126.356,
         45.186
        ],
        [
         126.403,
         45.223
        ],
        [
         126.519,
         45.248
        ],
        [
         126.54,
         45.239
        ],
        [
         126.569,
         45.253
        ],
        [
         126.645,
         45.225
        ],
        [
         126.64,
         45.214
        ],
        [
         126.686,
         45.188
        ],
        [
         126.732,
         45.187
        ],
        [
         126.787,
         45.159
        ],
        [
         126.793,
         45.135
        ],
        [
         126.856,
         45.146
        ],
        [
         126.964,
         45.132
        ],
        [
         126.971,
         45.071
        ],
        [
         126.985,
         45.068
        ],
        [
         127.018,
         45.024
        ],
        [
         127.05,
         45.004
        ],
        [
         127.093,
         44.947
        ],
        [
         127.073,
         44.907
        ],
        [
         127.022,
         44.899
        ],
        [
         127.0,
         44.874
        ],
        [
         126.984,
         44.824
        ],
        [
         126.997,
         44.765
        ],
        [
         127.041,
         44.712
        ],
        [
         127.031,
         44.673
        ],
        [
         127.044,
         44.654
        ],
        [
         127.042,
         44.591
        ],
        [
         127.05,
         44.567
        ],
        [
         127.09,
         44.594
        ],
        [
         127.095,
         44.616
        ],
        [
         127.139,
         44.607
        ],
        [
         127.182,
         44.645
        ],
        [
         127.229,
         44.643
        ],
        [
         127.214,
         44.625
        ],
        [
         127.262,
         44.613
        ],
        [
         127.276,
         44.64
        ],
        [
         127.393,
         44.632
        ],
        [
         127.557,
         44.575
        ],
        [
         127.57,
         44.55
        ],
        [
         127.536,
         44.522
        ],
        [
         127.485,
         44.529
        ],
        [
         127.465,
         44.517
        ],
        [
         127.464,
         44.485
        ],
        [
         127.509,
         44.437
        ],
        [
         127.486,
         44.41
        ],
        [
         127.579,
         44.311
        ],
        [
         127.624,
         44.278
        ],
        [
         127.59,
         44.228
        ],
        [
         127.626,
         44.188
        ],
        [
         127.642,
         44.194
        ],
        [
         127.682,
         44.167
        ],
        [
         127.712,
         44.199
        ],
        [
         127.736,
         44.114
        ],
        [
         127.729,
         44.099
        ],
        [
         127.783,
         44.072
        ],
        [
         127.808,
         44.087
        ],
        [
         127.846,
         44.082
        ],
        [
         127.863,
         44.063
        ],
        [
         127.913,
         44.065
        ],
        [
         127.95,
         44.088
        ],
        [
         128.0,
         44.097
        ],
        [
         128.0,
         46.8
        ],
        [
         122.921,
         46.8
        ],
        [
         122.997,
         46.761
        ],
        [
         123.004,
         46.731
        ],
        [
         123.026,
         46.719
        ],
        [
         123.077,
         46.745
        ],
        [
         123.103,
         46.735
        ],
        [
         123.164,
         46.74
        ],
        [
         123.197,
         46.8
        ],
        [
         123.63,
         46.8
        ],
        [
         123.632,
         46.729
        ],
        [
         123.603,
         46.689
        ],
        [
         123.475,
         46.687
        ],
        [
         123.366,
         46.678
        ],
        [
         123.318,
         46.662
        ],
        [
         123.276,
         46.661
        ],
        [
         123.279,
         46.617
        ],
        [
         123.228,
         46.588
        ],
        [
         123.181,
         46.614
        ],
        [
         123.098,
         46.603
        ],
        [
         123.077,
         46.622
        ],
        [
         123.046,
         46.618
        ],
        [
         123.053,
         46.58
        ],
        [
         123.002,
         46.575
        ],
        [
         123.01,
         46.525
        ],
        [
         123.012,
         46.435
        ],
        [
         123.09,
         46.348
        ],
        [
         123.142,
         46.298
        ],
        [
         123.178,
         46.248
        ],
        [
         123.248,
         46.273
        ],
        [
         123.286,
         46.25
        ],
        [
         123.321,
         46.254
        ],
        [
         123.357,
         46.232
        ],
        [
         123.357,
         46.232
        ],
        [
         123.43,
         46.244
        ],
        [
         123.453,
         46.233
        ],
        [
         123.499,
         46.26
        ],
        [
         123.57,
         46.224
        ],
        [
         123.57,
         46.224
        ]
       ]
      ]
     ]
    },
    "n": "黑龙江省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.554,
       43.483
      ],
      [
       123.614,
       43.399
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.43,
       41.175
      ],
      [
       122.43,
       41.075
      ],
      [
       122.44,
       41.055
      ],
      [
       122.43,
       41.037
      ]
     ]
    },
    "n": "Liao"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        124.675,
        45.45
       ],
       [
        124.814,
        45.446
       ],
       [
        124.875,
        45.466
       ],
       [
        124.902,
        45.511
       ],
       [
        124.947,
        45.523
       ],
       [
        125.01,
        45.503
       ],
       [
        125.052,
        45.466
       ],
       [
        125.072,
        45.413
       ],
       [
        125.156,
        45.389
       ],
       [
        125.302,
        45.395
       ],
       [
        125.394,
        45.42
       ],
       [
        125.432,
        45.463
       ],
       [
        125.549,
        45.488
       ],
       [
        125.745,
        45.495
       ],
       [
        125.888,
        45.55
       ],
       [
        125.979,
        45.652
       ],
       [
        126.107,
        45.702
       ],
       [
        126.273,
        45.698
       ],
       [
        126.415,
        45.711
       ],
       [
        126.534,
        45.741
       ],
       [
        126.63,
        45.797
       ],
       [
        126.704,
        45.876
       ],
       [
        126.802,
        45.943
       ],
       [
        126.923,
        45.997
       ],
       [
        127.083,
        45.998
       ],
       [
        127.284,
        45.945
       ],
       [
        127.416,
        45.922
       ],
       [
        127.479,
        45.93
       ],
       [
        127.527,
        45.961
       ],
       [
        127.559,
        46.014
       ],
       [
        127.64,
        46.011
       ],
       [
        127.772,
        45.953
       ],
       [
        127.91,
        45.922
       ],
       [
        128.0,
        45.919
       ]
      ]
     ]
    },
    "n": "Songhua"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       122.43,
       43.739
      ],
      [
       122.449,
       43.748
      ],
      [
       122.624,
       43.795
      ],
      [
       122.769,
       43.815
      ],
      [
       122.886,
       43.808
      ],
      [
       123.017,
       43.765
      ],
      [
       123.162,
       43.687
      ],
      [
       123.269,
       43.647
      ],
      [
       123.338,
       43.643
      ],
      [
       123.405,
       43.628
      ],
      [
       123.468,
       43.6
      ],
      [
       123.513,
       43.561
      ],
      [
       123.554,
       43.483
      ]
     ]
    },
    "n": "Xiliao"
   }
  ],
  "lakes": [],
  "_bbox": [
   122.43,
   40.35,
   128.0,
   46.8
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
