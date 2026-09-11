// 本文件由 tools/build.py 自动生成（切片 langzhong），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["langzhong"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["langzhong"] = {
 "meta": {
  "kind": "county",
  "region": "chuan_gui",
  "province": "sichuan",
  "title": "阆中（张飞镇巴西）",
  "dossier_label": "阆中",
  "subtitle": "蜀汉巴西郡治 · 张飞镇守七年 · 宕渠破张郃",
  "primary_place": "langzhong_cheng",
  "dossier_event": "event:ev_langzhong_02",
  "vocab_pack": "langzhong",
  "terrain_grid": "china_coarse",
  "lead": "阆中为蜀汉巴西郡治，张飞镇守七年（约214—221），宕渠破张郃、保东北边郡。下方为任官、战事与遇害三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以三国志、华阳国志等后世官修为本，现代考订作学界补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_langzhong_01": "张飞镇巴西",
   "event:ev_langzhong_02": "宕渠之战",
   "event:ev_langzhong_03": "张飞遇害",
   "place:langzhong_cheng": "阆中城",
   "person:zhangfei": "张飞"
  },
  "epoch": "three_kingdoms",
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
    "note": "蜀汉以张飞领巴西太守维系东北边郡，军政合一，为边郡常制"
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
    "note": "阆中依嘉陵江水道与山险，补给与地形为守土之资"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "巴西郡多賨人，夷汉治理为镇守根基"
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
    "note": "阆中为蜀汉东北门户，北拒曹魏、连结汉中"
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
  "page": "county.html?scene=langzhong",
  "key": "langzhong",
  "scene_id": "langzhong"
 },
 "sources": [
  {
   "id": "sanguozhi",
   "title": "三国志（魏书/蜀书/吴书）",
   "party": "西晋·私修",
   "stance_label": "西晋陈寿私修史，整合三国",
   "distance_label": "西晋陈寿撰，距三国最近者数十年，最远者约六十年",
   "color": "#6C7A89",
   "compiler": "陈寿（西晋）",
   "period": "晋",
   "note": "本切片主干史料，距事最近的正史。注意其定位与 guandu_llm 切片不同：彼处 source id 为 `sanguozhi_wudi`，只用《武帝纪》叙魏事、归『魏』桶；此处 id 为 `sanguozhi`，通取魏书/蜀书/吴书叙三国、归『后世官修』桶。同一部书拆两个 id，是因为所写对象不同、归属的立场桶就不同——用同一 id 会让跨切片共振统计把两种立场混为一谈。判断依据始终是作者立场与叙述对象，不是书名。陈寿身仕西晋，以魏为正统的基本框架贯穿全书，且蜀汉『国不置史』使其叙蜀事时先天材料不足——这正是 SG017 缺口的史料根源"
  },
  {
   "id": "huayangguozhi",
   "title": "华阳国志",
   "party": "后世官修",
   "distance_label": "成书东晋（常璩，约 348—354），距事约 130 年",
   "stance_label": "东晋官修·地方志体",
   "compiler": "常璩（东晋）撰",
   "color": "#8C5A3C",
   "period": "东晋"
  },
  {
   "id": "zizhi_tongjian",
   "title": "资治通鉴",
   "party": "宋·官修",
   "distance_label": "宋司马光撰（1084 成书），距三国八百余年",
   "stance_label": "北宋官修编年通史",
   "compiler": "司马光（北宋）",
   "color": "#6C7A89",
   "period": "宋"
  },
  {
   "id": "lzhixianzhi",
   "title": "阆中县志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距蜀汉事约 1700 年",
   "stance_label": "地方志",
   "compiler": "《阆中县志》（1993 年版等）",
   "color": "#7A6A52",
   "period": "清/民"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "三国史与历史地理综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "langzhong_cheng",
   "name": "阆中城（巴西郡治）",
   "lon": 105.967,
   "lat": 31.5783,
   "type": "capital",
   "modern": "今四川阆中市（南充代管）",
   "note": "蜀汉巴西郡治，张飞镇守七年。坐标据 Wikipedia 31°35′N 105°58′E，标 approx（城市级精度）（CHGIS V6 治所坐标，WGS84：阆中县/阆中郡）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：阆中县/阆中郡（CHGIS 阆中县/郡治所（蜀汉巴西郡治所在））",
   "elev": 502
  },
  {
   "id": "zhangfei_miao",
   "name": "汉桓侯祠（张飞庙）",
   "lon": 105.97,
   "lat": 31.57,
   "type": "temple",
   "modern": "阆中古城内·汉桓侯祠",
   "note": "张飞墓祠，后世屡修，今全国重点文保。在古城内，坐标 approx（与城同区）。",
   "elev": 496
  },
  {
   "id": "jialing_river",
   "name": "嘉陵江（阆中段）",
   "lon": 105.97,
   "lat": 31.56,
   "type": "river",
   "modern": "嘉陵江纵贯阆中市境",
   "note": "古城三面环水（锦屏山隔江南峙），为阆中形胜。坐标取城畔江段中线，approx。",
   "elev": 489
  },
  {
   "id": "dangqu",
   "name": "宕渠（宕渠之战战场）",
   "lon": 107.0627,
   "lat": 31.0038,
   "type": "battlefield",
   "modern": "今四川渠县（宕渠故城）",
   "note": "东汉属巴西郡，张飞破张郃之处。渠县坐标据公开地理数据，approx（CHGIS V6 治所坐标，WGS84：宕渠郡）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：宕渠郡（CHGIS 宕渠郡治所（宕渠之战区域））",
   "elev": 363
  },
  {
   "id": "chengdu",
   "name": "成都（蜀汉都城）",
   "lon": 104.0754,
   "lat": 30.6661,
   "type": "capital",
   "modern": "今四川成都市",
   "note": "蜀汉都城，刘备称帝于此。坐标据公开地理数据，approx（CHGIS V6 治所坐标，WGS84：成都府/成都县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：成都府/成都县（CHGIS 成都府/县治所（蜀汉都城所在））",
   "elev": 489
  }
 ],
 "persons": [
  {
   "id": "zhangfei",
   "name": "张飞",
   "role": "巴西太守·车骑将军",
   "side": "shu",
   "note": "（?–221）字益德。刘备定益州后领巴西太守镇阆中七年；宕渠破张郃。章武元年将伐吴，临发为部将张达、范强所杀，追谥桓侯，葬阆中。",
   "influence": 2
  },
  {
   "id": "zhanghe",
   "name": "张郃",
   "role": "曹魏荡寇将军",
   "side": "wei",
   "note": "建安二十年进侵巴西，为张飞所破，弃马缘山而退。后败于木门，蜀汉名将之劲敌。",
   "influence": 0
  },
  {
   "id": "liubei",
   "name": "刘备",
   "role": "蜀汉昭烈帝",
   "side": "shu",
   "note": "定益州后以张飞镇巴西；章武元年称帝，将伐吴而张飞先死。",
   "influence": 0
  },
  {
   "id": "zhangda",
   "name": "张达",
   "role": "张飞帐下将",
   "side": "shu",
   "note": "章武元年与范强杀张飞，持其首奔孙权。",
   "influence": 0
  },
  {
   "id": "fanqiang",
   "name": "范强",
   "role": "张飞帐下将",
   "side": "shu",
   "note": "章武元年与张达杀张飞，持其首奔孙权。（后世小说作『范疆』）",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "LZ_R01",
   "subject": "event:ev_langzhong_01",
   "predicate": "任职镇守",
   "value_text": "刘备定益州，以张飞为巴西太守，镇守阆中",
   "value": 214,
   "source": "sanguozhi",
   "layer": "record",
   "era": "建安十九年",
   "place": "langzhong_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "先主既定益州，以飞为巴西太守。",
   "note": "三国志·张飞传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_R02",
   "subject": "event:ev_langzhong_02",
   "predicate": "战役结果",
   "value_text": "张飞大破张郃于宕渠，巴西遂安",
   "value": 215,
   "source": "sanguozhi",
   "layer": "record",
   "era": "建安二十年",
   "place": "dangqu",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "飞遂破郃。",
   "note": "三国志·张飞传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_R03",
   "subject": "event:ev_langzhong_03",
   "predicate": "遇害",
   "value_text": "章武元年，张飞被部将张达、范强所杀，首送孙权",
   "value": 221,
   "source": "sanguozhi",
   "layer": "record",
   "era": "章武元年",
   "place": "langzhong_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "其帐下将张达、范强杀飞，持其首，顺流奔孙权。",
   "note": "三国志·张飞传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_R04",
   "subject": "person:zhangfei",
   "predicate": "追谥葬地",
   "value_text": "刘禅追谥张飞为桓侯，张飞葬于阆中",
   "value": 263,
   "source": "sanguozhi",
   "layer": "record",
   "era": "景耀三年",
   "place": "langzhong_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "追谥飞曰桓侯。",
   "note": "三国志·张飞传；葬阆中见华阳国志/阆中县志",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_R05",
   "subject": "event:ev_langzhong_02",
   "predicate": "张郃败退",
   "value_text": "张郃弃马缘山，独与麾下十余人从间道退走",
   "value": 215,
   "source": "sanguozhi",
   "layer": "record",
   "era": "建安二十年",
   "place": "dangqu",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "郃弃马缘山，独与麾下十余人从间道退。",
   "note": "三国志·张飞传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_R06",
   "subject": "place:langzhong_cheng",
   "predicate": "形胜",
   "value_text": "阆中水绕三方、山围四面，为巴西郡要会",
   "value": null,
   "source": "huayangguozhi",
   "layer": "record",
   "era": "东晋",
   "place": "langzhong_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "阆中……水绕三方，山围四面。",
   "note": "华阳国志·巴志（转述待核）",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LZ_S01",
   "subject": "event:ev_langzhong_02",
   "predicate": "年代异说",
   "value_text": "宕渠之战系年有建安二十/二十一年异说",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "dangqu",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "宕渠之战系年，诸家异辞。",
   "note": "学界考证",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LZ_S02",
   "subject": "person:zhangfei",
   "predicate": "性格与败因",
   "value_text": "张飞爱敬君子而不恤小人，暴而无恩，以短取败",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "langzhong_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "飞爱敬君子而不恤小人。",
   "note": "学界引三国志评曰『暴而无恩，以短取败』",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LZ_S03",
   "subject": "place:langzhong_cheng",
   "predicate": "战略地位",
   "value_text": "阆中居蜀汉东北门户，为汉中—成都间节点与北伐前沿",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "langzhong_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "阆中为蜀汉东北门户。",
   "note": "现代历史地理研究",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LZ_I01",
   "subject": "place:langzhong_cheng",
   "predicate": "地理形胜",
   "value_text": "嘉陵江三面环城，锦屏山隔江南峙，形成天然护城河",
   "value": null,
   "source": "huayangguozhi",
   "layer": "inference",
   "era": "推算",
   "place": "langzhong_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据华阳国志地形描述推断",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LZ_I02",
   "subject": "event:ev_langzhong_02",
   "predicate": "战术",
   "value_text": "张飞据山道迮狭之地截断张郃，使曹军前后不相救",
   "value": null,
   "source": "sanguozhi",
   "layer": "inference",
   "era": "推算",
   "place": "dangqu",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据『山道迮狭，前后不得相救』推断战术意图",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "LZ_I03",
   "subject": "place:langzhong_cheng",
   "predicate": "制度",
   "value_text": "张飞以将军领巴西太守，军政合一，为蜀汉边郡常制",
   "value": null,
   "source": "zizhi_tongjian",
   "layer": "inference",
   "era": "推算",
   "place": "langzhong_cheng",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据资治通鉴职官记载推断",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "LZ_I04",
   "subject": "place:langzhong_cheng",
   "predicate": "社会",
   "value_text": "巴西郡多賨人（板楯蛮），张飞镇守涉及夷汉治理",
   "value": null,
   "source": "huayangguozhi",
   "layer": "inference",
   "era": "推算",
   "place": "langzhong_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据华阳国志巴郡土著记载推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LZ_I05",
   "subject": "person:zhangfei",
   "predicate": "思想符号",
   "value_text": "张飞死后立庙阆中，民间忠勇崇拜始于蜀汉",
   "value": null,
   "source": "lzhixianzhi",
   "layer": "inference",
   "era": "推算",
   "place": "langzhong_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据阆中县志祠庙记载推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LZ_G01",
   "subject": "place:langzhong_cheng",
   "predicate": "治理措施",
   "value_text": "张飞镇守七年间的日常民政措施史缺载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "langzhong_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "张飞巴西太守任内民政措施",
    "skills": [
     "考据"
    ],
    "accept": "需三国地方行政史料"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LZ_G02",
   "subject": "event:ev_langzhong_02",
   "predicate": "兵力",
   "value_text": "宕渠之战双方兵力无确载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "dangqu",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "宕渠之战双方兵力",
    "skills": [
     "考据"
    ],
    "accept": "需三国兵志对勘"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LZ_G03",
   "subject": "place:zhangfei_miao",
   "predicate": "早期形制",
   "value_text": "张飞墓祠早期形制无考，今祠为后世屡修",
   "value": null,
   "source": "lzhixianzhi",
   "layer": "gap",
   "era": "今",
   "place": "zhangfei_miao",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "汉桓侯祠早期形制",
    "skills": [
     "考古",
     "方志"
    ],
    "accept": "需考古与方志互证"
   },
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "LZ_G01",
  "LZ_G02",
  "LZ_G03"
 ],
 "events": [
  {
   "id": "ev_langzhong_01",
   "year": 214,
   "era": "建安十九年",
   "kind": "任官",
   "title": "张飞领巴西太守镇阆中",
   "place": "langzhong_cheng",
   "text": "刘备平定益州，以张飞为巴西太守，镇守阆中（巴西郡治）。张飞自此守巴西约七年，为蜀汉东北边郡屏藩。",
   "subject": "event:ev_langzhong_01"
  },
  {
   "id": "ev_langzhong_02",
   "year": 215,
   "era": "建安二十年",
   "kind": "战事",
   "title": "宕渠之战·张飞破张郃",
   "place": "dangqu",
   "text": "曹魏张郃进侵巴西，欲徙民。张飞率精卒万余人邀其于宕渠、蒙头、荡石，据山道迮狭之地，使魏军前后不相救，大破张郃。郃弃马缘山，独与麾下十余人从间道退走，巴西遂安。",
   "subject": "event:ev_langzhong_02"
  },
  {
   "id": "ev_langzhong_03",
   "year": 221,
   "era": "章武元年",
   "kind": "遇害",
   "title": "张飞被部曲所杀",
   "place": "langzhong_cheng",
   "text": "刘备称帝，迁张飞为车骑将军、领司隶校尉，进封西乡侯，将伐吴，令飞率兵会于江州。临发，其帐下将张达、范强杀飞，持其首顺流奔孙权。张飞葬阆中，后主时追谥桓侯。",
   "subject": "event:ev_langzhong_03"
  }
 ],
 "edges": [
  {
   "from": "chengdu",
   "to": "langzhong_cheng",
   "type": "admin",
   "label": "刘备定益州，张飞自成都赴巴西镇阆中"
  },
  {
   "from": "langzhong_cheng",
   "to": "dangqu",
   "type": "mil",
   "label": "张飞率军赴宕渠拒张郃"
  },
  {
   "from": "dangqu",
   "to": "langzhong_cheng",
   "type": "mil",
   "label": "破郃后巴西遂安，张飞还镇阆中"
  },
  {
   "from": "langzhong_cheng",
   "to": "jialing_river",
   "type": "geo",
   "label": "嘉陵江三面环城，为阆中形胜"
  },
  {
   "from": "langzhong_cheng",
   "to": "zhangfei_miao",
   "type": "mem",
   "label": "张飞葬阆中，立汉桓侯祠"
  }
 ],
 "control": [],
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
   "后世官修",
   "学界",
   "西晋·私修",
   "宋·官修"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "学界": "学界",
   "西晋·私修": "西晋·私修",
   "宋·官修": "宋·官修"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "学界": "#2E7D8F",
   "西晋·私修": "#8E7CC3",
   "宋·官修": "#6C7A89"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   },
   "f_西晋·私修": {
    "name": "西晋·私修",
    "macro_party": "西晋·私修",
    "note": "auto"
   },
   "f_宋·官修": {
    "name": "宋·官修",
    "macro_party": "宋·官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A",
   "f_学界": "#2E7D8F",
   "f_西晋·私修": "#8E7CC3",
   "f_宋·官修": "#6C7A89"
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
        103.075,
        29.666
       ],
       [
        103.075,
        32.578
       ],
       [
        108.063,
        32.578
       ],
       [
        108.063,
        29.666
       ],
       [
        103.075,
        29.666
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
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         108.063,
         29.666
        ],
        [
         108.063,
         31.259
        ],
        [
         108.039,
         31.253
        ],
        [
         108.031,
         31.217
        ],
        [
         108.063,
         31.228
        ],
        [
         108.063,
         31.167
        ],
        [
         108.026,
         31.116
        ],
        [
         108.009,
         31.11
        ],
        [
         108.027,
         31.062
        ],
        [
         108.06,
         31.052
        ],
        [
         108.004,
         31.026
        ],
        [
         107.983,
         30.984
        ],
        [
         107.943,
         30.989
        ],
        [
         107.948,
         30.919
        ],
        [
         107.995,
         30.909
        ],
        [
         107.956,
         30.883
        ],
        [
         107.851,
         30.793
        ],
        [
         107.788,
         30.82
        ],
        [
         107.764,
         30.817
        ],
        [
         107.761,
         30.863
        ],
        [
         107.74,
         30.884
        ],
        [
         107.693,
         30.876
        ],
        [
         107.645,
         30.821
        ],
        [
         107.577,
         30.848
        ],
        [
         107.516,
         30.855
        ],
        [
         107.483,
         30.839
        ],
        [
         107.499,
         30.809
        ],
        [
         107.454,
         30.772
        ],
        [
         107.454,
         30.772
        ],
        [
         107.425,
         30.74
        ],
        [
         107.458,
         30.705
        ],
        [
         107.478,
         30.665
        ],
        [
         107.517,
         30.645
        ],
        [
         107.486,
         30.598
        ],
        [
         107.428,
         30.547
        ],
        [
         107.443,
         30.533
        ],
        [
         107.409,
         30.522
        ],
        [
         107.369,
         30.469
        ],
        [
         107.339,
         30.386
        ],
        [
         107.288,
         30.337
        ],
        [
         107.258,
         30.267
        ],
        [
         107.221,
         30.214
        ],
        [
         107.103,
         30.09
        ],
        [
         107.08,
         30.094
        ],
        [
         107.085,
         30.064
        ],
        [
         107.058,
         30.043
        ],
        [
         107.056,
         30.04
        ],
        [
         107.054,
         30.041
        ],
        [
         107.054,
         30.044
        ],
        [
         107.021,
         30.037
        ],
        [
         106.982,
         30.085
        ],
        [
         106.976,
         30.083
        ],
        [
         106.945,
         30.037
        ],
        [
         106.913,
         30.025
        ],
        [
         106.862,
         30.033
        ],
        [
         106.837,
         30.05
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.785,
         30.017
        ],
        [
         106.732,
         30.027
        ],
        [
         106.724,
         30.059
        ],
        [
         106.7,
         30.074
        ],
        [
         106.7,
         30.112
        ],
        [
         106.673,
         30.122
        ],
        [
         106.677,
         30.157
        ],
        [
         106.632,
         30.186
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.642,
         30.246
        ],
        [
         106.612,
         30.292
        ],
        [
         106.56,
         30.315
        ],
        [
         106.545,
         30.297
        ],
        [
         106.499,
         30.296
        ],
        [
         106.44,
         30.308
        ],
        [
         106.429,
         30.255
        ],
        [
         106.402,
         30.242
        ],
        [
         106.349,
         30.245
        ],
        [
         106.334,
         30.226
        ],
        [
         106.307,
         30.238
        ],
        [
         106.296,
         30.206
        ],
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.197
        ],
        [
         106.233,
         30.186
        ],
        [
         106.18,
         30.233
        ],
        [
         106.169,
         30.304
        ],
        [
         106.132,
         30.324
        ],
        [
         106.133,
         30.303
        ],
        [
         106.073,
         30.334
        ],
        [
         106.032,
         30.374
        ],
        [
         105.943,
         30.372
        ],
        [
         105.901,
         30.405
        ],
        [
         105.847,
         30.41
        ],
        [
         105.826,
         30.436
        ],
        [
         105.792,
         30.427
        ],
        [
         105.76,
         30.384
        ],
        [
         105.755,
         30.343
        ],
        [
         105.715,
         30.323
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.67,
         30.254
        ],
        [
         105.625,
         30.276
        ],
        [
         105.62,
         30.234
        ],
        [
         105.662,
         30.21
        ],
        [
         105.643,
         30.186
        ],
        [
         105.561,
         30.184
        ],
        [
         105.551,
         30.179
        ],
        [
         105.536,
         30.153
        ],
        [
         105.596,
         30.159
        ],
        [
         105.574,
         30.131
        ],
        [
         105.58,
         30.13
        ],
        [
         105.583,
         30.127
        ],
        [
         105.583,
         30.124
        ],
        [
         105.642,
         30.101
        ],
        [
         105.639,
         30.076
        ],
        [
         105.677,
         30.068
        ],
        [
         105.687,
         30.039
        ],
        [
         105.72,
         30.043
        ],
        [
         105.754,
         30.018
        ],
        [
         105.723,
         29.975
        ],
        [
         105.731,
         29.958
        ],
        [
         105.702,
         29.925
        ],
        [
         105.717,
         29.894
        ],
        [
         105.739,
         29.891
        ],
        [
         105.708,
         29.841
        ],
        [
         105.611,
         29.837
        ],
        [
         105.583,
         29.819
        ],
        [
         105.575,
         29.744
        ],
        [
         105.529,
         29.708
        ],
        [
         105.482,
         29.718
        ],
        [
         105.477,
         29.675
        ],
        [
         105.42,
         29.688
        ],
        [
         105.405,
         29.666
        ],
        [
         108.063,
         29.666
        ]
       ]
      ],
      [
       [
        [
         105.583,
         30.124
        ],
        [
         105.583,
         30.127
        ],
        [
         105.58,
         30.13
        ],
        [
         105.574,
         30.131
        ],
        [
         105.583,
         30.124
        ]
       ]
      ],
      [
       [
        [
         107.058,
         30.043
        ],
        [
         107.054,
         30.044
        ],
        [
         107.054,
         30.041
        ],
        [
         107.056,
         30.04
        ],
        [
         107.058,
         30.043
        ]
       ]
      ]
     ]
    },
    "n": "重庆市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         103.075,
         32.578
        ],
        [
         103.075,
         29.666
        ],
        [
         105.405,
         29.666
        ],
        [
         105.42,
         29.688
        ],
        [
         105.477,
         29.675
        ],
        [
         105.482,
         29.718
        ],
        [
         105.529,
         29.708
        ],
        [
         105.575,
         29.744
        ],
        [
         105.583,
         29.819
        ],
        [
         105.611,
         29.837
        ],
        [
         105.708,
         29.841
        ],
        [
         105.739,
         29.891
        ],
        [
         105.717,
         29.894
        ],
        [
         105.702,
         29.925
        ],
        [
         105.731,
         29.958
        ],
        [
         105.723,
         29.975
        ],
        [
         105.754,
         30.018
        ],
        [
         105.72,
         30.043
        ],
        [
         105.687,
         30.039
        ],
        [
         105.677,
         30.068
        ],
        [
         105.639,
         30.076
        ],
        [
         105.642,
         30.101
        ],
        [
         105.583,
         30.124
        ],
        [
         105.574,
         30.131
        ],
        [
         105.596,
         30.159
        ],
        [
         105.536,
         30.153
        ],
        [
         105.551,
         30.179
        ],
        [
         105.556,
         30.187
        ],
        [
         105.559,
         30.185
        ],
        [
         105.561,
         30.184
        ],
        [
         105.643,
         30.186
        ],
        [
         105.662,
         30.21
        ],
        [
         105.62,
         30.234
        ],
        [
         105.625,
         30.276
        ],
        [
         105.67,
         30.254
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.715,
         30.323
        ],
        [
         105.755,
         30.343
        ],
        [
         105.76,
         30.384
        ],
        [
         105.792,
         30.427
        ],
        [
         105.826,
         30.436
        ],
        [
         105.847,
         30.41
        ],
        [
         105.901,
         30.405
        ],
        [
         105.943,
         30.372
        ],
        [
         106.032,
         30.374
        ],
        [
         106.073,
         30.334
        ],
        [
         106.133,
         30.303
        ],
        [
         106.132,
         30.324
        ],
        [
         106.169,
         30.304
        ],
        [
         106.18,
         30.233
        ],
        [
         106.233,
         30.186
        ],
        [
         106.26,
         30.197
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.208
        ],
        [
         106.264,
         30.21
        ],
        [
         106.296,
         30.206
        ],
        [
         106.307,
         30.238
        ],
        [
         106.334,
         30.226
        ],
        [
         106.349,
         30.245
        ],
        [
         106.402,
         30.242
        ],
        [
         106.429,
         30.255
        ],
        [
         106.44,
         30.308
        ],
        [
         106.499,
         30.296
        ],
        [
         106.545,
         30.297
        ],
        [
         106.56,
         30.315
        ],
        [
         106.612,
         30.292
        ],
        [
         106.642,
         30.246
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.632,
         30.186
        ],
        [
         106.677,
         30.157
        ],
        [
         106.673,
         30.122
        ],
        [
         106.7,
         30.112
        ],
        [
         106.7,
         30.074
        ],
        [
         106.724,
         30.059
        ],
        [
         106.732,
         30.027
        ],
        [
         106.785,
         30.017
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.837,
         30.05
        ],
        [
         106.862,
         30.033
        ],
        [
         106.913,
         30.025
        ],
        [
         106.945,
         30.037
        ],
        [
         106.976,
         30.083
        ],
        [
         106.976,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.981,
         30.088
        ],
        [
         106.982,
         30.085
        ],
        [
         107.021,
         30.037
        ],
        [
         107.054,
         30.044
        ],
        [
         107.058,
         30.043
        ],
        [
         107.085,
         30.064
        ],
        [
         107.08,
         30.094
        ],
        [
         107.103,
         30.09
        ],
        [
         107.221,
         30.214
        ],
        [
         107.258,
         30.267
        ],
        [
         107.288,
         30.337
        ],
        [
         107.339,
         30.386
        ],
        [
         107.369,
         30.469
        ],
        [
         107.409,
         30.522
        ],
        [
         107.443,
         30.533
        ],
        [
         107.428,
         30.547
        ],
        [
         107.486,
         30.598
        ],
        [
         107.517,
         30.645
        ],
        [
         107.478,
         30.665
        ],
        [
         107.458,
         30.705
        ],
        [
         107.425,
         30.74
        ],
        [
         107.454,
         30.772
        ],
        [
         107.454,
         30.772
        ],
        [
         107.499,
         30.809
        ],
        [
         107.483,
         30.839
        ],
        [
         107.516,
         30.855
        ],
        [
         107.577,
         30.848
        ],
        [
         107.645,
         30.821
        ],
        [
         107.693,
         30.876
        ],
        [
         107.74,
         30.884
        ],
        [
         107.761,
         30.863
        ],
        [
         107.764,
         30.817
        ],
        [
         107.788,
         30.82
        ],
        [
         107.851,
         30.793
        ],
        [
         107.956,
         30.883
        ],
        [
         107.995,
         30.909
        ],
        [
         107.948,
         30.919
        ],
        [
         107.943,
         30.989
        ],
        [
         107.983,
         30.984
        ],
        [
         108.004,
         31.026
        ],
        [
         108.06,
         31.052
        ],
        [
         108.027,
         31.062
        ],
        [
         108.009,
         31.11
        ],
        [
         108.026,
         31.116
        ],
        [
         108.063,
         31.167
        ],
        [
         108.063,
         31.228
        ],
        [
         108.031,
         31.217
        ],
        [
         108.039,
         31.253
        ],
        [
         108.063,
         31.259
        ],
        [
         108.063,
         32.226
        ],
        [
         108.018,
         32.212
        ],
        [
         108.025,
         32.177
        ],
        [
         107.98,
         32.146
        ],
        [
         107.925,
         32.197
        ],
        [
         107.89,
         32.214
        ],
        [
         107.864,
         32.201
        ],
        [
         107.812,
         32.248
        ],
        [
         107.754,
         32.338
        ],
        [
         107.708,
         32.332
        ],
        [
         107.681,
         32.397
        ],
        [
         107.648,
         32.414
        ],
        [
         107.598,
         32.412
        ],
        [
         107.527,
         32.382
        ],
        [
         107.49,
         32.425
        ],
        [
         107.457,
         32.418
        ],
        [
         107.461,
         32.454
        ],
        [
         107.439,
         32.466
        ],
        [
         107.436,
         32.53
        ],
        [
         107.382,
         32.54
        ],
        [
         107.357,
         32.507
        ],
        [
         107.314,
         32.49
        ],
        [
         107.288,
         32.457
        ],
        [
         107.264,
         32.403
        ],
        [
         107.212,
         32.429
        ],
        [
         107.19,
         32.468
        ],
        [
         107.127,
         32.482
        ],
        [
         107.08,
         32.542
        ],
        [
         107.097,
         32.578
        ],
        [
         103.075,
         32.578
        ]
       ]
      ],
      [
       [
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.208
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.197
        ],
        [
         106.264,
         30.21
        ]
       ]
      ],
      [
       [
        [
         106.977,
         30.088
        ],
        [
         106.976,
         30.088
        ],
        [
         106.976,
         30.083
        ],
        [
         106.982,
         30.085
        ],
        [
         106.981,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ]
       ]
      ],
      [
       [
        [
         105.559,
         30.185
        ],
        [
         105.556,
         30.187
        ],
        [
         105.551,
         30.179
        ],
        [
         105.561,
         30.184
        ],
        [
         105.559,
         30.185
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         108.063,
         32.578
        ],
        [
         107.097,
         32.578
        ],
        [
         107.08,
         32.542
        ],
        [
         107.127,
         32.482
        ],
        [
         107.19,
         32.468
        ],
        [
         107.212,
         32.429
        ],
        [
         107.264,
         32.403
        ],
        [
         107.288,
         32.457
        ],
        [
         107.314,
         32.49
        ],
        [
         107.357,
         32.507
        ],
        [
         107.382,
         32.54
        ],
        [
         107.436,
         32.53
        ],
        [
         107.439,
         32.466
        ],
        [
         107.461,
         32.454
        ],
        [
         107.457,
         32.418
        ],
        [
         107.49,
         32.425
        ],
        [
         107.527,
         32.382
        ],
        [
         107.598,
         32.412
        ],
        [
         107.648,
         32.414
        ],
        [
         107.681,
         32.397
        ],
        [
         107.708,
         32.332
        ],
        [
         107.754,
         32.338
        ],
        [
         107.812,
         32.248
        ],
        [
         107.864,
         32.201
        ],
        [
         107.89,
         32.214
        ],
        [
         107.925,
         32.197
        ],
        [
         107.98,
         32.146
        ],
        [
         108.025,
         32.177
        ],
        [
         108.018,
         32.212
        ],
        [
         108.063,
         32.226
        ],
        [
         108.063,
         32.578
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       106.909,
       29.666
      ],
      [
       106.998,
       29.763
      ],
      [
       107.084,
       29.787
      ],
      [
       107.15,
       29.721
      ],
      [
       107.237,
       29.699
      ],
      [
       107.345,
       29.718
      ],
      [
       107.419,
       29.771
      ],
      [
       107.458,
       29.856
      ],
      [
       107.53,
       29.89
      ],
      [
       107.634,
       29.873
      ],
      [
       107.842,
       30.043
      ],
      [
       108.063,
       30.297
      ]
     ]
    },
    "n": "Chang Jiang"
   }
  ],
  "lakes": [],
  "_bbox": [
   103.075,
   29.666,
   108.063,
   32.578
  ]
 }
};
