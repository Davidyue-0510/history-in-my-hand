// 本文件由 tools/build.py 自动生成（切片 guilin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guilin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guilin"] = {
 "meta": {
  "kind": "county",
  "region": "engineering",
  "province": "guangxi",
  "title": "桂林（灵渠·靖江王府）",
  "dossier_label": "桂林",
  "subtitle": "秦凿灵渠 · 唐李渤重修 · 明靖江王府 · 山水甲天下",
  "primary_place": "guilin_cheng",
  "dossier_event": "event:ev_guilin_01",
  "vocab_pack": "guilin",
  "terrain_grid": "china_coarse",
  "lead": "桂林北倚越城岭、漓江穿城，秦凿灵渠通湘漓、唐李渤重修、明封靖江王建府，自古为岭南锁钥与山水名邦。下方为凿渠、重修与封藩三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以史记、水经注、新旧唐书、明史等后世官修为本，现代考订作学界补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_guilin_01": "秦凿灵渠",
   "event:ev_guilin_02": "李渤重修灵渠",
   "event:ev_guilin_03": "封靖江王",
   "place:guilin_cheng": "桂林城",
   "person:han_yu": "韩愈"
  },
  "epoch": "cross_dynastic",
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
    "note": "明封靖江王镇桂林，藩府军政节制广西，为经略边疆之制"
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
    "note": "灵渠通湘漓，水运为岭南补给与军事通道"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "谪宦往来与移民商旅，促桂北汉夷杂处"
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
    "note": "越城岭—灵渠为五岭孔道，桂林北拒中原、南控岭南"
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
  "page": "county.html?scene=guilin",
  "key": "guilin",
  "scene_id": "guilin"
 },
 "sources": [
  {
   "id": "shiji",
   "title": "史记",
   "party": "汉·官修",
   "stance_label": "汉人当代/近当代",
   "distance_label": "成书汉武帝时，距楚汉约百年",
   "color": "#B23A48",
   "compiler": "司马迁（西汉）",
   "period": "汉",
   "note": "本纪·高祖本纪、项羽本纪、淮阴侯列传载楚汉之事，汉人叙汉，视角含汉方立场"
  },
  {
   "id": "hanshu",
   "title": "汉书",
   "party": "汉·后朝官修",
   "stance_label": "汉后朝官修",
   "distance_label": "成书东汉明帝—章帝时，距楚汉约二百余年",
   "color": "#C0584F",
   "compiler": "班固（东汉）",
   "period": "汉",
   "note": "高帝纪、韩信传等，东汉官修西汉史"
  },
  {
   "id": "jiu_tangshu",
   "title": "旧唐书",
   "party": "五代·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书后晋开运二年（945），距事约130年",
   "color": "#7A6A53",
   "compiler": "刘昫等（后晋）",
   "period": "五代",
   "note": "吐蕃传、地理志载沙州陷蕃与归义军事，为敦煌多元政权核心史料。"
  },
  {
   "id": "xin_tangshu",
   "title": "新唐书",
   "party": "宋·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书宋仁宗嘉祐五年（1060），距事约240年",
   "color": "#6C7A89",
   "compiler": "欧阳修、宋祁等（宋）",
   "period": "宋",
   "note": "南门说，与旧唐书异（冲突对）"
  },
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百四十八·张春传／卷二百七十一·祖大寿传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，记大凌河筑城、长山之败、祖大寿杀何可纲降清，偏清方视角。"
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
   "id": "shuijingzhu",
   "title": "水经注",
   "party": "北魏·官修",
   "stance_label": "北魏地理注",
   "distance_label": "成书北魏（约六世纪），距秦凿灵渠约七百年",
   "color": "#8E7CC3",
   "compiler": "郦道元（北魏）",
   "period": "北魏",
   "note": "郦道元注《水经》，湘水、漓水篇载灵渠铧嘴、陡门之制，为灵渠早期形制核心史料。"
  },
  {
   "id": "guilin_fuzhi",
   "title": "桂林府志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距明靖江王府约数百年",
   "color": "#7A6A52",
   "compiler": "《桂林府志》（清修）",
   "period": "清/民",
   "note": "桂林地方志，载山川形胜、藩府建制与社会沿革。"
  }
 ],
 "places": [
  {
   "id": "guilin_cheng",
   "name": "桂林城（静江府治）",
   "lon": 110.299,
   "lat": 25.274,
   "type": "capital",
   "modern": "今广西桂林市",
   "note": "漓江穿城，北倚越城岭，喀斯特峰林拔地，自古为岭南军事与交通要会。坐标取城市中心，approx（城市级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城市级精度），待 CHGIS 精修",
   "elev": 149
  },
  {
   "id": "lingqu",
   "name": "灵渠（兴安·湘漓分水）",
   "lon": 110.67,
   "lat": 25.61,
   "type": "canal",
   "modern": "今广西兴安县境",
   "note": "秦始皇命史禄凿灵渠，分湘水入漓，沟通长江与珠江水系，为世界最古老人工运河之一。坐标取兴安分水塘一带，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（县治级精度），待 CHGIS 精修",
   "elev": 208
  },
  {
   "id": "jingjiang_wangcheng",
   "name": "靖江王城（独秀峰）",
   "lon": 110.294,
   "lat": 25.267,
   "type": "fort",
   "modern": "桂林市秀峰区王城路·独秀峰下",
   "note": "明洪武五年就藩靖江王，建靖江王府（王城），周约三里，独秀峰屏其后。坐标取独秀峰，approx（城内点位）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城内点位精度），待 CHGIS 精修",
   "elev": 149
  },
  {
   "id": "lijiang",
   "name": "漓江（桂林段）",
   "lon": 110.3,
   "lat": 25.25,
   "type": "river",
   "modern": "漓江纵贯桂林市境",
   "note": "灵渠引湘入漓，漓江下接桂江、西江，为岭南水运主干。坐标取桂林城区江段中线，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江段中线），待 CHGIS 精修",
   "elev": 145
  },
  {
   "id": "yuecheng_ling",
   "name": "越城岭（五岭之一）",
   "lon": 110.45,
   "lat": 26.05,
   "type": "mountain",
   "modern": "今广西东北部—湘桂界山",
   "note": "五岭最西一支，灵渠越越城岭分水，为中原通岭南的孔道。坐标取越城岭中段，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（山脉级精度），待 CHGIS 精修",
   "elev": 1022
  }
 ],
 "persons": [
  {
   "id": "shi_lu",
   "name": "史禄",
   "era": "秦",
   "role": "秦监御史·灵渠开凿主持",
   "note": "秦始皇命监御史史禄凿灵渠，分湘入漓，通粮道以平岭南，奠定中原—岭南水运孔道。",
   "influence": 0
  },
  {
   "id": "li_bo",
   "name": "李渤",
   "era": "唐",
   "role": "桂管观察使",
   "note": "唐宝历初任桂管观察使，重修灵渠，立铧嘴、陡门，完善通航与灌溉，岭南水运赖之。",
   "influence": 0
  },
  {
   "id": "zhu_shouqian",
   "name": "朱守谦",
   "era": "明",
   "role": "靖江王",
   "note": "朱元璋侄孙，洪武三年封靖江王，五年就藩桂林，建靖江王府，为明代经略广西之藩屏，世袭传十四王。",
   "influence": 0
  },
  {
   "id": "han_yu",
   "name": "韩愈",
   "era": "唐",
   "role": "文学家·唐宋八大家",
   "note": "唐宪宗时贬潮州刺史，过桂林题咏山水，名句『江作青罗带，山如碧玉簪』，奠定桂林山水文化意象。",
   "influence": 0
  },
  {
   "id": "zhu_yuanzhang",
   "name": "朱元璋",
   "era": "明",
   "role": "明太祖",
   "note": "封朱守谦为靖江王，就藩桂林，以藩府军政节制广西，经略边疆。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GL_R01",
   "subject": "event:ev_guilin_01",
   "predicate": "凿渠通水",
   "value_text": "秦始皇命史禄凿灵渠，分湘水入漓，沟通长江与珠江水系",
   "value": -214,
   "source": "shiji",
   "layer": "record",
   "era": "秦始皇三十三年",
   "place": "lingqu",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（史记·河渠书：秦凿渠通粮道）",
   "note": "史记·河渠书；水经注·湘水",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "GL_R02",
   "subject": "event:ev_guilin_01",
   "predicate": "工程形制",
   "value_text": "灵渠以铧嘴分水、大小天平导洪、陡门节水，为现存最古老人工运河之一",
   "value": null,
   "source": "shuijingzhu",
   "layer": "record",
   "era": "北魏",
   "place": "lingqu",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（水经注载灵渠铧嘴、陡门之制）",
   "note": "水经注·湘水；2018 入世界灌溉工程遗产",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "北魏·官修",
   "_faction": null
  },
  {
   "id": "GL_R03",
   "subject": "event:ev_guilin_02",
   "predicate": "重修",
   "value_text": "唐宝历初，桂管观察使李渤重修灵渠，立铧嘴、设陡门十九以节蓄航运",
   "value": 825,
   "source": "xin_tangshu",
   "layer": "record",
   "era": "唐宝历元年",
   "place": "lingqu",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（新唐书·李渤传：为桂管观察使，立斗门…）",
   "note": "新唐书·李渤传；旧唐书",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "GL_R04",
   "subject": "event:ev_guilin_03",
   "predicate": "封王建府",
   "value_text": "明洪武五年，封朱守谦为靖江王，就藩桂林，建靖江王府（王城）",
   "value": 1372,
   "source": "mingshi",
   "layer": "record",
   "era": "明洪武五年",
   "place": "jingjiang_wangcheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史·诸王传：洪武三年封靖江王，五年就藩桂林）",
   "note": "明史·诸王传；靖江王城为全国重点文保",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "GL_R05",
   "subject": "place:jingjiang_wangcheng",
   "predicate": "规制",
   "value_text": "靖江王城周约三里，承运门、王宫居中，独秀峰屏其后，为明代藩王府第遗存",
   "value": null,
   "source": "mingshi",
   "layer": "record",
   "era": "明",
   "place": "jingjiang_wangcheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史载靖江王城规制）",
   "note": "明史·诸王传；靖江王城／独秀峰",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "GL_R06",
   "subject": "place:guilin_cheng",
   "predicate": "形胜",
   "value_text": "桂林北倚越城岭，漓江穿城，喀斯特峰林拔地，为岭南军事与交通要会",
   "value": null,
   "source": "guilin_fuzhi",
   "layer": "record",
   "era": "清",
   "place": "guilin_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "（桂林府志：桂林山川形胜）",
   "note": "桂林府志；喀斯特地貌",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GL_S01",
   "subject": "place:lingqu",
   "predicate": "年代异说",
   "value_text": "灵渠始凿年代有秦始皇二十八／三十三年异说",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "lingqu",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "灵渠始凿年代诸家异辞。",
   "note": "学界考证",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_S02",
   "subject": "place:guilin_cheng",
   "predicate": "山水文化",
   "value_text": "唐宋以降，韩愈『江作青罗带，山如碧玉簪』等题咏奠定桂林山水文化意象",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "guilin_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "韩愈咏桂林山水。",
   "note": "学界考证：山水文学意象",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_S03",
   "subject": "place:jingjiang_wangcheng",
   "predicate": "政治地位",
   "value_text": "靖江王系明代世袭蕃王，传十四王，为明代册封最久的旁支宗室",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "jingjiang_wangcheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "靖江王传世十四。",
   "note": "学界考证",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_S04",
   "subject": "place:guilin_cheng",
   "predicate": "贬谪与科举",
   "value_text": "桂林为唐宋岭南贬谪要地，亦为科举赴任通道，中原士人往来促夷汉交融",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "guilin_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "桂林为贬谪与科举通道。",
   "note": "学界考证：社会流动",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_I01",
   "subject": "place:lingqu",
   "predicate": "地理影响",
   "value_text": "灵渠连通湘漓，使中原舟楫直下岭南，岭南纳入帝国水运体系",
   "value": null,
   "source": "shiji",
   "layer": "inference",
   "era": "推算",
   "place": "lingqu",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据史记·河渠书推断",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "GL_I02",
   "subject": "place:guilin_cheng",
   "predicate": "军事地理",
   "value_text": "越城岭—灵渠通道为五岭孔道，秦军由此南下，桂林遂为岭南北门锁钥",
   "value": null,
   "source": "shiji",
   "layer": "inference",
   "era": "推算",
   "place": "guilin_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据史记·秦始皇本纪推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "GL_I03",
   "subject": "place:jingjiang_wangcheng",
   "predicate": "制度",
   "value_text": "靖江王就藩桂林，军政节制广西，为王权经略边疆之制",
   "value": null,
   "source": "mingshi",
   "layer": "inference",
   "era": "推算",
   "place": "jingjiang_wangcheng",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据明史·诸王传推断",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "GL_I04",
   "subject": "place:guilin_cheng",
   "predicate": "社会",
   "value_text": "灵渠通漕与谪宦往来，移民事聚、商旅辐辏，桂北汉夷杂处渐成",
   "value": null,
   "source": "guilin_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "guilin_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据桂林府志推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GL_I05",
   "subject": "person:han_yu",
   "predicate": "思想符号",
   "value_text": "韩愈过桂题咏，使桂林山水入中原士大夫审美，忠贬意象叠加",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "guilin_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据文学史推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_G01",
   "subject": "place:lingqu",
   "predicate": "早期管理",
   "value_text": "灵渠早期岁修与渠吏建制史缺载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "lingqu",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "灵渠早期岁修与渠吏",
    "skills": [
     "考据"
    ],
    "accept": "需秦汉水利与广西方志"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_G02",
   "subject": "place:jingjiang_wangcheng",
   "predicate": "营建过程",
   "value_text": "靖江王府营造工序与匠役无详载",
   "value": null,
   "source": "mingshi",
   "layer": "gap",
   "era": "今",
   "place": "jingjiang_wangcheng",
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
    "where": "靖江王府营建工序",
    "skills": [
     "建筑史",
     "方志"
    ],
    "accept": "需明代营造与广西方志"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "GL_G03",
   "subject": "place:guilin_cheng",
   "predicate": "早期城址",
   "value_text": "秦代桂林郡治（布山）与今桂林城址关系无定论",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "guilin_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "秦桂林郡治布山位置",
    "skills": [
     "历史地理",
     "考古"
    ],
    "accept": "需考古与文献互证"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "GL_S05",
   "subject": "place:guilin_cheng",
   "predicate": "汉制",
   "value_text": "汉书·地理志载始安县属零陵郡，为汉世桂林一带行政建置",
   "value": null,
   "source": "hanshu",
   "layer": "scholarship",
   "era": "今",
   "place": "guilin_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（汉书·地理志：始安县，属零陵郡）",
   "note": "汉书·地理志",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "GL_S06",
   "subject": "place:guilin_cheng",
   "predicate": "唐制",
   "value_text": "旧唐书·地理志载桂州置岭南道，为唐桂管经略使治所",
   "value": null,
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "今",
   "place": "guilin_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（旧唐书·地理志：桂州，岭南道）",
   "note": "旧唐书·地理志",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "GL_S07",
   "subject": "place:lingqu",
   "predicate": "秦凿渠",
   "value_text": "资治通鉴·秦纪载始皇发谪戍南越，使监禄（史禄）凿渠通粮道",
   "value": null,
   "source": "zizhi_tongjian",
   "layer": "scholarship",
   "era": "今",
   "place": "lingqu",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（资治通鉴·秦纪：使监禄凿渠运粮）",
   "note": "资治通鉴·秦纪",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "GL_G01",
  "GL_G02",
  "GL_G03"
 ],
 "events": [
  {
   "id": "ev_guilin_01",
   "year": -214,
   "era": "秦始皇三十三年",
   "kind": "凿渠通漕",
   "title": "秦始皇命史禄凿灵渠",
   "place": "lingqu",
   "text": "秦始皇平岭南，命监御史史禄凿灵渠，分湘水入漓，沟通长江与珠江水系，使中原舟楫直下岭南，为秦军粮道与水运枢纽。灵渠遂为世界最古老人工运河之一。",
   "subject": "event:ev_guilin_01"
  },
  {
   "id": "ev_guilin_02",
   "year": 825,
   "era": "唐宝历元年",
   "kind": "重修水利",
   "title": "李渤重修灵渠立陡门",
   "place": "lingqu",
   "text": "唐宝历初，桂管观察使李渤重修灵渠，立铧嘴分水、设陡门（斗门）以节蓄航运，灵渠通漕功能大备，岭南与中原水运赖之。",
   "subject": "event:ev_guilin_02"
  },
  {
   "id": "ev_guilin_03",
   "year": 1372,
   "era": "明洪武五年",
   "kind": "封藩建制",
   "title": "封靖江王建靖江王府",
   "place": "jingjiang_wangcheng",
   "text": "明洪武五年，太祖封侄孙朱守谦为靖江王，就藩桂林，建靖江王府（王城）于独秀峰下。靖江王世袭节制广西，为明代册封最久的旁支宗室，传十四王。",
   "subject": "event:ev_guilin_03"
  }
 ],
 "edges": [
  {
   "from": "guilin_cheng",
   "to": "jingjiang_wangcheng",
   "type": "mem",
   "label": "靖江王城在桂林城内独秀峰下，为明代藩府"
  },
  {
   "from": "guilin_cheng",
   "to": "lijiang",
   "type": "geo",
   "label": "漓江穿桂林城，灵渠引湘水入漓"
  },
  {
   "from": "guilin_cheng",
   "to": "yuecheng_ling",
   "type": "geo",
   "label": "桂林北倚越城岭，为岭南北门锁钥"
  },
  {
   "from": "guilin_cheng",
   "to": "lingqu",
   "type": "mil",
   "label": "北出灵渠通湘水，中原舟楫下岭南"
  },
  {
   "from": "lingqu",
   "to": "yuecheng_ling",
   "type": "geo",
   "label": "灵渠越越城岭分水，连湘漓二水"
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
   "汉·官修",
   "汉·后朝官修",
   "五代·官修",
   "宋·官修",
   "清修·明臣",
   "学界",
   "北魏·官修",
   "后世官修"
  ],
  "party_bucket": {
   "汉·官修": "汉·官修",
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "宋·官修": "宋·官修",
   "清修·明臣": "清修·明臣",
   "学界": "学界",
   "北魏·官修": "北魏·官修",
   "后世官修": "后世官修"
  },
  "party_colors": {
   "汉·官修": "#B23A48",
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
   "宋·官修": "#6C7A89",
   "清修·明臣": "#8C6239",
   "学界": "#2E7D8F",
   "北魏·官修": "#8E7CC3",
   "后世官修": "#A0473A"
  },
  "factions": {
   "f_汉·官修": {
    "name": "汉·官修",
    "macro_party": "汉·官修",
    "note": "auto"
   },
   "f_汉·后朝官修": {
    "name": "汉·后朝官修",
    "macro_party": "汉·后朝官修",
    "note": "auto"
   },
   "f_五代·官修": {
    "name": "五代·官修",
    "macro_party": "五代·官修",
    "note": "auto"
   },
   "f_宋·官修": {
    "name": "宋·官修",
    "macro_party": "宋·官修",
    "note": "auto"
   },
   "f_清修·明臣": {
    "name": "清修·明臣",
    "macro_party": "清修·明臣",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   },
   "f_北魏·官修": {
    "name": "北魏·官修",
    "macro_party": "北魏·官修",
    "note": "auto"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·官修": "#B23A48",
   "f_汉·后朝官修": "#C0584F",
   "f_五代·官修": "#7A6A53",
   "f_宋·官修": "#6C7A89",
   "f_清修·明臣": "#8C6239",
   "f_学界": "#2E7D8F",
   "f_北魏·官修": "#8E7CC3",
   "f_后世官修": "#A0473A"
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
        109.294,
        24.25
       ],
       [
        109.294,
        27.05
       ],
       [
        111.67,
        27.05
       ],
       [
        111.67,
        24.25
       ],
       [
        109.294,
        24.25
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
         111.67,
         27.05
        ],
        [
         109.523,
         27.05
        ],
        [
         109.555,
         26.947
        ],
        [
         109.436,
         26.892
        ],
        [
         109.453,
         26.862
        ],
        [
         109.487,
         26.896
        ],
        [
         109.51,
         26.878
        ],
        [
         109.513,
         26.84
        ],
        [
         109.497,
         26.815
        ],
        [
         109.522,
         26.749
        ],
        [
         109.529,
         26.744
        ],
        [
         109.555,
         26.735
        ],
        [
         109.597,
         26.756
        ],
        [
         109.568,
         26.726
        ],
        [
         109.529,
         26.744
        ],
        [
         109.522,
         26.749
        ],
        [
         109.487,
         26.76
        ],
        [
         109.448,
         26.76
        ],
        [
         109.407,
         26.72
        ],
        [
         109.355,
         26.693
        ],
        [
         109.294,
         26.698
        ],
        [
         109.294,
         26.681
        ],
        [
         109.306,
         26.661
        ],
        [
         109.334,
         26.646
        ],
        [
         109.355,
         26.659
        ],
        [
         109.391,
         26.599
        ],
        [
         109.407,
         26.533
        ],
        [
         109.381,
         26.519
        ],
        [
         109.386,
         26.493
        ],
        [
         109.362,
         26.472
        ],
        [
         109.381,
         26.454
        ],
        [
         109.32,
         26.418
        ],
        [
         109.296,
         26.35
        ],
        [
         109.294,
         26.349
        ],
        [
         109.294,
         26.295
        ],
        [
         109.325,
         26.29
        ],
        [
         109.351,
         26.264
        ],
        [
         109.37,
         26.277
        ],
        [
         109.442,
         26.29
        ],
        [
         109.467,
         26.314
        ],
        [
         109.439,
         26.239
        ],
        [
         109.476,
         26.148
        ],
        [
         109.514,
         26.128
        ],
        [
         109.503,
         26.096
        ],
        [
         109.45,
         26.102
        ],
        [
         109.453,
         26.056
        ],
        [
         109.482,
         26.03
        ],
        [
         109.513,
         25.998
        ],
        [
         109.56,
         26.021
        ],
        [
         109.588,
         26.02
        ],
        [
         109.635,
         26.048
        ],
        [
         109.649,
         26.017
        ],
        [
         109.73,
         25.99
        ],
        [
         109.711,
         25.954
        ],
        [
         109.694,
         25.959
        ],
        [
         109.68,
         25.922
        ],
        [
         109.685,
         25.88
        ],
        [
         109.768,
         25.89
        ],
        [
         109.779,
         25.866
        ],
        [
         109.811,
         25.878
        ],
        [
         109.826,
         25.911
        ],
        [
         109.806,
         25.974
        ],
        [
         109.782,
         25.997
        ],
        [
         109.814,
         26.041
        ],
        [
         109.864,
         26.028
        ],
        [
         109.899,
         26.095
        ],
        [
         109.904,
         26.136
        ],
        [
         109.97,
         26.195
        ],
        [
         110.03,
         26.166
        ],
        [
         110.099,
         26.169
        ],
        [
         110.101,
         26.132
        ],
        [
         110.065,
         26.05
        ],
        [
         110.101,
         26.02
        ],
        [
         110.169,
         26.029
        ],
        [
         110.182,
         26.06
        ],
        [
         110.25,
         26.011
        ],
        [
         110.257,
         25.961
        ],
        [
         110.326,
         25.975
        ],
        [
         110.373,
         26.089
        ],
        [
         110.438,
         26.154
        ],
        [
         110.478,
         26.18
        ],
        [
         110.495,
         26.166
        ],
        [
         110.547,
         26.233
        ],
        [
         110.553,
         26.283
        ],
        [
         110.584,
         26.297
        ],
        [
         110.612,
         26.334
        ],
        [
         110.643,
         26.309
        ],
        [
         110.674,
         26.317
        ],
        [
         110.721,
         26.294
        ],
        [
         110.742,
         26.314
        ],
        [
         110.735,
         26.271
        ],
        [
         110.759,
         26.248
        ],
        [
         110.836,
         26.256
        ],
        [
         110.94,
         26.287
        ],
        [
         110.926,
         26.32
        ],
        [
         110.944,
         26.327
        ],
        [
         110.945,
         26.373
        ],
        [
         110.974,
         26.386
        ],
        [
         111.009,
         26.359
        ],
        [
         111.008,
         26.337
        ],
        [
         111.091,
         26.308
        ],
        [
         111.209,
         26.304
        ],
        [
         111.205,
         26.276
        ],
        [
         111.228,
         26.261
        ],
        [
         111.278,
         26.272
        ],
        [
         111.293,
         26.222
        ],
        [
         111.272,
         26.217
        ],
        [
         111.275,
         26.183
        ],
        [
         111.258,
         26.152
        ],
        [
         111.266,
         26.096
        ],
        [
         111.245,
         26.078
        ],
        [
         111.267,
         26.059
        ],
        [
         111.235,
         26.048
        ],
        [
         111.19,
         25.953
        ],
        [
         111.23,
         25.916
        ],
        [
         111.251,
         25.865
        ],
        [
         111.292,
         25.854
        ],
        [
         111.297,
         25.874
        ],
        [
         111.346,
         25.907
        ],
        [
         111.376,
         25.906
        ],
        [
         111.383,
         25.882
        ],
        [
         111.46,
         25.885
        ],
        [
         111.486,
         25.859
        ],
        [
         111.433,
         25.846
        ],
        [
         111.442,
         25.772
        ],
        [
         111.4,
         25.744
        ],
        [
         111.309,
         25.72
        ],
        [
         111.31,
         25.645
        ],
        [
         111.343,
         25.603
        ],
        [
         111.325,
         25.564
        ],
        [
         111.328,
         25.522
        ],
        [
         111.279,
         25.423
        ],
        [
         111.211,
         25.363
        ],
        [
         111.185,
         25.367
        ],
        [
         111.139,
         25.304
        ],
        [
         111.104,
         25.285
        ],
        [
         111.113,
         25.217
        ],
        [
         110.999,
         25.161
        ],
        [
         110.984,
         25.102
        ],
        [
         110.951,
         25.044
        ],
        [
         110.969,
         24.975
        ],
        [
         111.009,
         24.921
        ],
        [
         111.101,
         24.946
        ],
        [
         111.102,
         25.035
        ],
        [
         111.14,
         25.042
        ],
        [
         111.201,
         25.075
        ],
        [
         111.222,
         25.107
        ],
        [
         111.275,
         25.151
        ],
        [
         111.322,
         25.105
        ],
        [
         111.368,
         25.109
        ],
        [
         111.375,
         25.128
        ],
        [
         111.436,
         25.094
        ],
        [
         111.416,
         25.048
        ],
        [
         111.468,
         25.022
        ],
        [
         111.46,
         24.993
        ],
        [
         111.433,
         24.98
        ],
        [
         111.435,
         24.952
        ],
        [
         111.47,
         24.929
        ],
        [
         111.447,
         24.893
        ],
        [
         111.449,
         24.857
        ],
        [
         111.479,
         24.797
        ],
        [
         111.461,
         24.729
        ],
        [
         111.431,
         24.688
        ],
        [
         111.452,
         24.666
        ],
        [
         111.499,
         24.668
        ],
        [
         111.527,
         24.638
        ],
        [
         111.57,
         24.645
        ],
        [
         111.589,
         24.691
        ],
        [
         111.642,
         24.685
        ],
        [
         111.638,
         24.715
        ],
        [
         111.667,
         24.761
        ],
        [
         111.67,
         24.763
        ],
        [
         111.67,
         27.05
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.522,
         26.749
        ],
        [
         109.522,
         26.749
        ],
        [
         109.529,
         26.744
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.482,
         26.03
        ],
        [
         109.473,
         26.007
        ],
        [
         109.409,
         25.967
        ],
        [
         109.435,
         25.933
        ],
        [
         109.397,
         25.9
        ],
        [
         109.359,
         25.836
        ],
        [
         109.34,
         25.834
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.731
        ],
        [
         109.296,
         25.714
        ],
        [
         109.294,
         25.715
        ],
        [
         109.294,
         24.25
        ],
        [
         111.67,
         24.25
        ],
        [
         111.67,
         24.763
        ],
        [
         111.667,
         24.761
        ],
        [
         111.638,
         24.715
        ],
        [
         111.642,
         24.685
        ],
        [
         111.589,
         24.691
        ],
        [
         111.57,
         24.645
        ],
        [
         111.527,
         24.638
        ],
        [
         111.499,
         24.668
        ],
        [
         111.452,
         24.666
        ],
        [
         111.431,
         24.688
        ],
        [
         111.461,
         24.729
        ],
        [
         111.479,
         24.797
        ],
        [
         111.449,
         24.857
        ],
        [
         111.447,
         24.893
        ],
        [
         111.47,
         24.929
        ],
        [
         111.435,
         24.952
        ],
        [
         111.433,
         24.98
        ],
        [
         111.46,
         24.993
        ],
        [
         111.468,
         25.022
        ],
        [
         111.416,
         25.048
        ],
        [
         111.436,
         25.094
        ],
        [
         111.375,
         25.128
        ],
        [
         111.368,
         25.109
        ],
        [
         111.322,
         25.105
        ],
        [
         111.275,
         25.151
        ],
        [
         111.222,
         25.107
        ],
        [
         111.201,
         25.075
        ],
        [
         111.14,
         25.042
        ],
        [
         111.102,
         25.035
        ],
        [
         111.101,
         24.946
        ],
        [
         111.009,
         24.921
        ],
        [
         110.969,
         24.975
        ],
        [
         110.951,
         25.044
        ],
        [
         110.984,
         25.102
        ],
        [
         110.999,
         25.161
        ],
        [
         111.113,
         25.217
        ],
        [
         111.104,
         25.285
        ],
        [
         111.139,
         25.304
        ],
        [
         111.185,
         25.367
        ],
        [
         111.211,
         25.363
        ],
        [
         111.279,
         25.423
        ],
        [
         111.328,
         25.522
        ],
        [
         111.325,
         25.564
        ],
        [
         111.343,
         25.603
        ],
        [
         111.31,
         25.645
        ],
        [
         111.309,
         25.72
        ],
        [
         111.4,
         25.744
        ],
        [
         111.442,
         25.772
        ],
        [
         111.433,
         25.846
        ],
        [
         111.486,
         25.859
        ],
        [
         111.46,
         25.885
        ],
        [
         111.383,
         25.882
        ],
        [
         111.376,
         25.906
        ],
        [
         111.346,
         25.907
        ],
        [
         111.297,
         25.874
        ],
        [
         111.292,
         25.854
        ],
        [
         111.251,
         25.865
        ],
        [
         111.23,
         25.916
        ],
        [
         111.19,
         25.953
        ],
        [
         111.235,
         26.048
        ],
        [
         111.267,
         26.059
        ],
        [
         111.245,
         26.078
        ],
        [
         111.266,
         26.096
        ],
        [
         111.258,
         26.152
        ],
        [
         111.275,
         26.183
        ],
        [
         111.272,
         26.217
        ],
        [
         111.293,
         26.222
        ],
        [
         111.278,
         26.272
        ],
        [
         111.228,
         26.261
        ],
        [
         111.205,
         26.276
        ],
        [
         111.209,
         26.304
        ],
        [
         111.091,
         26.308
        ],
        [
         111.008,
         26.337
        ],
        [
         111.009,
         26.359
        ],
        [
         110.974,
         26.386
        ],
        [
         110.945,
         26.373
        ],
        [
         110.944,
         26.327
        ],
        [
         110.926,
         26.32
        ],
        [
         110.94,
         26.287
        ],
        [
         110.836,
         26.256
        ],
        [
         110.759,
         26.248
        ],
        [
         110.735,
         26.271
        ],
        [
         110.742,
         26.314
        ],
        [
         110.721,
         26.294
        ],
        [
         110.674,
         26.317
        ],
        [
         110.643,
         26.309
        ],
        [
         110.612,
         26.334
        ],
        [
         110.584,
         26.297
        ],
        [
         110.553,
         26.283
        ],
        [
         110.547,
         26.233
        ],
        [
         110.495,
         26.166
        ],
        [
         110.478,
         26.18
        ],
        [
         110.438,
         26.154
        ],
        [
         110.373,
         26.089
        ],
        [
         110.326,
         25.975
        ],
        [
         110.257,
         25.961
        ],
        [
         110.25,
         26.011
        ],
        [
         110.182,
         26.06
        ],
        [
         110.169,
         26.029
        ],
        [
         110.101,
         26.02
        ],
        [
         110.065,
         26.05
        ],
        [
         110.101,
         26.132
        ],
        [
         110.099,
         26.169
        ],
        [
         110.03,
         26.166
        ],
        [
         109.97,
         26.195
        ],
        [
         109.904,
         26.136
        ],
        [
         109.899,
         26.095
        ],
        [
         109.864,
         26.028
        ],
        [
         109.814,
         26.041
        ],
        [
         109.782,
         25.997
        ],
        [
         109.806,
         25.974
        ],
        [
         109.826,
         25.911
        ],
        [
         109.811,
         25.878
        ],
        [
         109.779,
         25.866
        ],
        [
         109.768,
         25.89
        ],
        [
         109.685,
         25.88
        ],
        [
         109.68,
         25.922
        ],
        [
         109.694,
         25.959
        ],
        [
         109.711,
         25.954
        ],
        [
         109.73,
         25.99
        ],
        [
         109.649,
         26.017
        ],
        [
         109.635,
         26.048
        ],
        [
         109.588,
         26.02
        ],
        [
         109.56,
         26.021
        ],
        [
         109.513,
         25.998
        ],
        [
         109.482,
         26.03
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.294,
         27.05
        ],
        [
         109.294,
         25.715
        ],
        [
         109.296,
         25.714
        ],
        [
         109.34,
         25.731
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.834
        ],
        [
         109.359,
         25.836
        ],
        [
         109.397,
         25.9
        ],
        [
         109.435,
         25.933
        ],
        [
         109.409,
         25.967
        ],
        [
         109.473,
         26.007
        ],
        [
         109.482,
         26.03
        ],
        [
         109.453,
         26.056
        ],
        [
         109.45,
         26.102
        ],
        [
         109.503,
         26.096
        ],
        [
         109.514,
         26.128
        ],
        [
         109.476,
         26.148
        ],
        [
         109.439,
         26.239
        ],
        [
         109.467,
         26.314
        ],
        [
         109.442,
         26.29
        ],
        [
         109.37,
         26.277
        ],
        [
         109.351,
         26.264
        ],
        [
         109.325,
         26.29
        ],
        [
         109.294,
         26.295
        ],
        [
         109.294,
         26.349
        ],
        [
         109.296,
         26.35
        ],
        [
         109.32,
         26.418
        ],
        [
         109.381,
         26.454
        ],
        [
         109.362,
         26.472
        ],
        [
         109.386,
         26.493
        ],
        [
         109.381,
         26.519
        ],
        [
         109.407,
         26.533
        ],
        [
         109.391,
         26.599
        ],
        [
         109.355,
         26.659
        ],
        [
         109.334,
         26.646
        ],
        [
         109.306,
         26.661
        ],
        [
         109.294,
         26.681
        ],
        [
         109.294,
         26.698
        ],
        [
         109.355,
         26.693
        ],
        [
         109.407,
         26.72
        ],
        [
         109.448,
         26.76
        ],
        [
         109.487,
         26.76
        ],
        [
         109.476,
         26.83
        ],
        [
         109.467,
         26.832
        ],
        [
         109.453,
         26.862
        ],
        [
         109.436,
         26.892
        ],
        [
         109.555,
         26.947
        ],
        [
         109.523,
         27.05
        ],
        [
         109.294,
         27.05
        ]
       ]
      ],
      [
       [
        [
         109.476,
         26.83
        ],
        [
         109.487,
         26.76
        ],
        [
         109.522,
         26.749
        ],
        [
         109.522,
         26.749
        ],
        [
         109.497,
         26.815
        ],
        [
         109.513,
         26.84
        ],
        [
         109.51,
         26.878
        ],
        [
         109.487,
         26.896
        ],
        [
         109.453,
         26.862
        ],
        [
         109.467,
         26.832
        ],
        [
         109.476,
         26.83
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.568,
         26.726
        ],
        [
         109.597,
         26.756
        ],
        [
         109.555,
         26.735
        ],
        [
         109.529,
         26.744
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        109.294,
        26.76
       ],
       [
        109.39,
        26.838
       ],
       [
        109.438,
        26.894
       ],
       [
        109.444,
        26.954
       ],
       [
        109.424,
        27.038
       ],
       [
        109.429,
        27.05
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   109.294,
   24.25,
   111.67,
   27.05
  ]
 }
};
