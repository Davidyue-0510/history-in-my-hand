// 本文件由 tools/build.py 自动生成（切片 xian），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xian"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xian"] = {
 "meta": {
  "kind": "county",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "西安（长安·汉唐都城·丝路起点）",
  "dossier_label": "西安",
  "subtitle": "汉唐都城 · 丝路东端 · 八水形胜 · 译经中心",
  "primary_place": "chang_an_city",
  "dossier_event": "event:ev_xian_01",
  "vocab_pack": "xian",
  "terrain_grid": "china_coarse",
  "lead": "西安（古长安）居关中平原、北濒渭河、南屏终南，为汉唐都城与丝绸之路东端起点。汉高祖五年（前202）刘邦徙都长安，立西汉国本；汉武帝时董仲舒对策独尊儒术，长安成帝国礼制与思想中枢；建元三年（前138）张骞凿空西域，长安遂为丝路孔道所起。隋开皇二年（582）文帝命宇文恺筑大兴城，唐因之扩建为长安，以中轴里坊之制为当时世界最大都城，其规划远播东亚。唐永徽三年（652）玄奘建大雁塔、主译场，长安成佛教译经中心；天宝十四载（755）安史乱起，长安两度陷落、由盛转衰。秦始皇帝陵兵马俑在长安东北临潼（UNESCO 441），大雁塔、大明宫属丝绸之路：长安—天山走廊路网（UNESCO 1442）。",
  "parties_note": "史料以史记/汉书/旧唐书等官修为主，宋敏求长安志为宋私修方志，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_xian_01": "刘邦定都",
   "event:ev_xian_02": "张骞通西域",
   "event:ev_xian_03": "隋建大兴城",
   "place:chang_an_city": "长安",
   "person:xuan_zang": "玄奘"
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
    "note": "都城礼制+独尊儒术+译经中心→长安帝国秩序与文化枢纽"
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
    "note": "中轴里坊规划+漕运+丝路贸易→长安物资与人员枢纽"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "里坊居民+西市胡商+士族→多元社会汇聚"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "关中形胜+丝路东端+定都通西域事件→长安控天下中枢与东西交流"
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
  "page": "county.html?scene=xian",
  "key": "xian",
  "scene_id": "xian"
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
   "note": "本纪·高祖本纪、大宛列传载定都长安与张骞通西域，汉人叙汉，视角含汉方立场。"
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
   "note": "高帝纪、董仲舒传、地理志等，东汉官修西汉史，为独尊儒术与汉长安建制核心史料。"
  },
  {
   "id": "chang_an_zhi",
   "title": "长安志",
   "author": "宋敏求",
   "compiler": "宋敏求",
   "party": "宋·私修",
   "period": "北宋",
   "type": "地方志",
   "note": "北宋元丰间纂，记唐长安坊市、宫观、渠渎甚详，为长安城市史核心文献。"
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
   "note": "记隋唐大兴城—长安建制、玄奘译经与安史之乱陷两京，为唐长安核心史料。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "汉唐长安与丝绸之路综合研究",
   "period": "今",
   "note": "历史地理、城市史、丝路史、考古学等现代研究的综合推论，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "chang_an_city",
   "name": "长安城（汉唐故都·今西安）",
   "lon": 34.265,
   "lat": 108.948,
   "type": "都城/城",
   "modern": "陕西省西安市",
   "note": "汉长安（前202起）与隋大兴城—唐长安（582起）先后在此立都，以中轴里坊之制为东亚最大都城；今西安城叠压其东北。",
   "geo_match": "approx",
   "geo_note": "汉唐长安城中心近似坐标（34.265, 108.948），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "bingmayong",
   "name": "秦始皇陵兵马俑",
   "lon": 34.385,
   "lat": 109.273,
   "type": "王陵/考古遗址",
   "modern": "西安市临潼区",
   "note": "秦始皇帝陵陪葬坑，出土数千陶质甲士、战马与青铜车马，1987年作为秦始皇陵一部分列入UNESCO世界遗产（编号441）。",
   "geo_match": "approx",
   "geo_note": "兵马俑博物馆近似坐标（34.385, 109.273），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "dayan_ta",
   "name": "大雁塔（慈恩寺）",
   "lon": 34.218,
   "lat": 108.964,
   "type": "塔/寺院",
   "modern": "西安市雁塔区",
   "note": "唐永徽三年（652）玄奘建塔藏梵本，为佛教译经中心象征；属丝绸之路：长安—天山走廊路网（UNESCO 1442）组成部分。",
   "geo_match": "approx",
   "geo_note": "大雁塔近似坐标（34.218, 108.964），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "wei_he",
   "name": "渭河（八水绕长安）",
   "lon": 34.3,
   "lat": 108.9,
   "type": "河流",
   "modern": "关中平原（西安以北）",
   "note": "长安北濒渭河，周匝八水（泾渭灞浐沣滈潏涝），河网既供饮水灌溉亦通漕运，为立都水利基础。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "zhongnan_shan",
   "name": "终南山（秦岭）",
   "lon": 33.95,
   "lat": 109.05,
   "type": "山",
   "modern": "西安市南（秦岭北麓）",
   "note": "长安南屏终南，秦岭为天然形胜与南北屏障，山岳隐逸与佛道洞窟并陈，屏蔽都城南方。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "daming_gong",
   "name": "大明宫遗址",
   "lon": 34.33,
   "lat": 108.99,
   "type": "宫城遗址",
   "modern": "西安市未央区",
   "note": "唐贞观、龙朔间兴建的朝宫，为盛唐政治中枢；属丝绸之路：长安—天山走廊路网（UNESCO 1442）组成部分。",
   "geo_match": "approx",
   "geo_note": "大明宫遗址近似坐标（34.33, 108.99），取自公开地理数据，待CHGIS精修",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "liu_bang",
   "name": "刘邦",
   "era": "西汉",
   "role": "汉高祖",
   "note": "汉高祖五年（前202）称帝，徙都长安，立西汉国本，关中自此为帝国腹心。",
   "influence": 0
  },
  {
   "id": "zhang_qian",
   "name": "张骞",
   "era": "西汉",
   "role": "凿空使者",
   "note": "汉武帝建元三年（前138）奉使西域，凿空丝路，使长安成丝绸之路东端起点，中原与西域交通贯通。",
   "influence": 0
  },
  {
   "id": "xuan_zang",
   "name": "玄奘",
   "era": "唐",
   "role": "译经高僧",
   "note": "唐永徽三年（652）于慈恩寺建大雁塔藏梵本，主持译场，长安成佛教经论汉译与传播中心。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "XA_R01",
   "subject": "event:ev_xian_01",
   "predicate": "刘邦称帝定都长安，关中成西汉根本",
   "value_text": "汉高祖五年（前202）刘邦称帝，徙都长安，依关中形胜立西汉国本，长安由是起为两汉都城。",
   "value": "",
   "source": "shiji",
   "layer": "record",
   "era": "西汉",
   "place": "chang_an_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "汉王既并天下，都长安，因秦之故，依关中而制诸侯，长安由是为汉家根本（《史记》/ 汉书）。",
   "note": "事件（定都）+ 制度（都城建制）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "XA_R02",
   "subject": "place:bingmayong",
   "predicate": "秦兵马俑为秦统一帝国的地下军团缩影",
   "value_text": "秦始皇陵兵马俑以数千陶质甲士、战马与青铜车马再现秦军阵列，为秦统一帝国的写实缩影与陶塑工艺巅峰。",
   "value": "",
   "source": "shiji",
   "layer": "record",
   "era": "秦",
   "place": "bingmayong",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "始皇冢旁出陶俑数千，甲士乘骑如生，规模之盛为前古所未有，见秦之并兼气象（《史记》/ 秦陵考古）。",
   "note": "技术（陶塑）+ 事件（秦统一）。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "XA_R03",
   "subject": "event:ev_xian_02",
   "predicate": "张骞奉使西域，丝绸之路自长安西延",
   "value_text": "汉武帝建元三年（前138）遣张骞出使西域，凿空之功使长安成为丝绸之路东端起点，中原与西域交通自此贯通。",
   "value": "",
   "source": "shiji",
   "layer": "record",
   "era": "西汉",
   "place": "chang_an_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "张骞凿空，通大夏、安息诸国，使节商旅相望于道，长安遂为西域孔道所起（《史记·大宛列传》）。",
   "note": "事件（通西域）+ 地理（丝路起点）。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "XA_R04",
   "subject": "event:ev_xian_03",
   "predicate": "隋建大兴城、唐承为长安，成东亚最大都城",
   "value_text": "隋开皇二年（582）文帝命宇文恺筑大兴城，唐因之扩建为长安，以中轴里坊之制为当时世界最大都城，形制远播东亚。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "隋—唐",
   "place": "chang_an_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "隋文帝命宇文恺规度大兴城，唐因以为都，城方如棋局，坊市井然，为一代宏规（《旧唐书》/ 长安志）。",
   "note": "事件（建城）+ 制度（都城规划）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XA_R05",
   "subject": "place:dayan_ta",
   "predicate": "玄奘建大雁塔藏经，长安成译经中心",
   "value_text": "唐永徽三年（652）玄奘于慈恩寺建大雁塔藏梵本，主持译场，长安遂为佛教经论汉译与传播中心。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "dayan_ta",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "玄奘归自天竺，于慈恩寺译经，建塔藏梵本，长安译场之盛为千古所罕（《旧唐书》/ 慈恩传）。",
   "note": "技术（塔建）+ 思想（译经）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XA_R06",
   "subject": "place:chang_an_city",
   "predicate": "长安为汉家庙堂，董仲舒对策独尊儒术",
   "value_text": "汉武帝时董仲舒于长安对策，倡「罢黜百家、独尊儒术」，儒术由是定为官学，长安成帝国礼制与思想中枢。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "西汉",
   "place": "chang_an_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "武帝策问，仲舒对以儒术为宗，罢黜百家，缘饰以经义，汉家制度多所更定（《汉书·董仲舒传》）。",
   "note": "思想（独尊儒术）+ 制度（官学）。",
   "dims": [
    5,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "XA_S01",
   "subject": "place:chang_an_city",
   "predicate": "唐长安城约84 km²，为当时世界最大城",
   "value_text": "唐长安城东西九里、南北八里余，面积约84平方公里，设百十余坊，为当时世界规模最大的都城。",
   "value": "",
   "source": "chang_an_zhi",
   "layer": "scholarship",
   "era": "唐",
   "place": "chang_an_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "长安城方广如制，坊百有奇，阡陌绳直，唐世都会之盛冠于海内（宋敏求《长安志》/ 唐城考古）。",
   "note": "地理（城制规模）+ 制度（都城）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "XA_S02",
   "subject": "place:chang_an_city",
   "predicate": "里坊制与东西市管理塑造唐代城市生活",
   "value_text": "长安以里坊宵禁、东西二市分业聚贾，坊市之制规范居民作息与商旅交易，塑造唐代城市生活节奏。",
   "value": "",
   "source": "chang_an_zhi",
   "layer": "scholarship",
   "era": "唐",
   "place": "chang_an_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "长安置东西市，列肆如林，坊有鼓漏以禁夜行，市贾各从其业，都人之居于是有常（长安志/ 唐会要）。",
   "note": "制度（坊市）+ 社会（城市生活）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "XA_S03",
   "subject": "place:chang_an_city",
   "predicate": "安史之乱两度陷落，长安由盛转衰",
   "value_text": "天宝十四载（755）安史乱起，长安两度陷于叛军，宫室焚掠、人口锐减，盛唐气象由是转衰。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "唐",
   "place": "chang_an_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "禄山陷两京，天子幸蜀，长安再经兵火，坊市凋残，盛时文物十不存一（《旧唐书》/ 资治通鉴）。",
   "note": "事件（陷落）+ 社会（由盛转衰）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XA_I01",
   "subject": "place:wei_he",
   "predicate": "渭河与八水格局支撑长安供水与航运",
   "value_text": "长安北濒渭河、周匝八水（泾渭灞浐沣滈潏涝），河网格局既供都城饮水灌溉，亦通漕运，奠定立都的水利基础。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "wei_he",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "八水绕长安，渭流贯其中，溉田通漕，足给都人之需，立都者利其水（学界历史地理推论）。",
   "note": "地理（八水）+ 技术（水利漕运）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_I02",
   "subject": "place:chang_an_city",
   "predicate": "中轴+里坊规划影响东亚都城（平安京/平城京）",
   "value_text": "大兴城—长安的中轴线与里坊方格规划，为日本平城京、平安京等东亚都城所取法，成东亚都城规划范式。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "隋—唐",
   "place": "chang_an_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "唐都之制东传扶桑，平城、平安规仿其坊衢，东亚王城之式出于此（学界城市史推论）。",
   "note": "技术（规划）+ 制度（都城范式）。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_I03",
   "subject": "place:chang_an_city",
   "predicate": "丝路起点使长安成国际多元都会",
   "value_text": "长安为丝绸之路东端起点，使节、商胡、僧侣辐辏，胡风流行、物货充溢，成欧亚交汇的国际多元都会。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "chang_an_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "丝路起长安，贾胡殊俗并集辇下，珠玉、香药、梵典充牣市闾，都为东西所凑（学界丝路史推论）。",
   "note": "地理（丝路）+ 社会（国际都会）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_I04",
   "subject": "place:wei_he",
   "predicate": "关中农业+漕运支撑长安百万人口",
   "value_text": "关中平原沃野与渭河水运、关东漕粮并济，使长安得以供养庞大人口与官僚、驻军，成帝国腹心。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "wei_he",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "关中沃壤资其食，漕粟继其乏，都人士庶动以百万计，非都会之雄不能胜（学界经济史推论）。",
   "note": "地理（关中）+ 社会（人口供养）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_I05",
   "subject": "place:dayan_ta",
   "predicate": "译经中心使长安成三教并行文化枢纽",
   "value_text": "长安集译经道场与道观、孔庙于一城，儒释道三教并行互鉴，成为帝国多元思想与文化交流枢纽。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "dayan_ta",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "寺观学宫并列辇毂，释老与儒互参，长安乃为三教所汇、异说所聚之枢（学界思想史推论）。",
   "note": "思想（三教并行）+ 社会（文化枢纽）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_G01",
   "subject": "place:chang_an_city",
   "predicate": "汉长安城里坊数量与人口统计的精确数据有限",
   "value_text": "汉长安城具体里坊数量、户籍与人口规模的精确数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "西汉",
   "place": "chang_an_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：汉长安城人口与里坊。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "汉长安城里坊建置、户籍与人口规模统计",
    "skills": [
     "历史地理",
     "考古学",
     "人口史"
    ],
    "accept": "若有汉城考古报告或汉书地理志注，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_G02",
   "subject": "place:chang_an_city",
   "predicate": "唐西市胡商具体族群与贸易结构文献有限",
   "value_text": "唐长安西市胡商的具体族群构成、商品结构与交易制度的详细记载，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "chang_an_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：西市胡商贸易。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "唐长安西市胡商族群、商品与市制档案",
    "skills": [
     "丝路史",
     "经济史",
     "民族史"
    ],
    "accept": "若有西市出土文书或唐会要市条，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XA_G03",
   "subject": "place:chang_an_city",
   "predicate": "隋唐长安城址与今西安城叠压关系考古数据有限",
   "value_text": "隋唐长安城址与今西安城（明清西安府城）的位置叠压、城门对应等考古实测数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "隋—唐",
   "place": "chang_an_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：城址叠压关系。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "隋唐长安城与今西安城的位置叠压、城门与坊里对应实测",
    "skills": [
     "考古学",
     "历史地理",
     "GIS"
    ],
    "accept": "若有唐城考古测绘，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XA_G01",
  "XA_G02",
  "XA_G03"
 ],
 "events": [
  {
   "id": "ev_xian_01",
   "year": -202,
   "era": "西汉高祖五年",
   "kind": "定都",
   "title": "刘邦称帝·定都长安",
   "place": "chang_an_city",
   "text": "汉高祖五年（前202）刘邦既并天下，称帝徙都长安，依关中形胜立西汉国本，长安由是起为两汉都城，关中成帝国腹心。",
   "subject": "event:ev_xian_01"
  },
  {
   "id": "ev_xian_02",
   "year": -138,
   "era": "西汉建元三年",
   "kind": "通西域",
   "title": "张骞奉使西域·丝路启程",
   "place": "chang_an_city",
   "text": "汉武帝建元三年（前138）遣张骞出使西域，凿空之功使长安成为丝绸之路东端起点，中原与西域、中亚交通自此贯通，商旅使节相望于道。",
   "subject": "event:ev_xian_02"
  },
  {
   "id": "ev_xian_03",
   "year": 582,
   "era": "隋开皇二年",
   "kind": "建城",
   "title": "隋文帝建大兴城（唐长安前身）",
   "place": "chang_an_city",
   "text": "隋开皇二年（582）文帝命宇文恺规度大兴城，唐因之扩建为长安，以中轴里坊之制为当时世界最大都城，其规划范式远播东亚（平城京、平安京）。",
   "subject": "event:ev_xian_03"
  }
 ],
 "edges": [
  {
   "from": "bingmayong",
   "to": "chang_an_city",
   "relation": "位于东北",
   "note": "秦始皇陵兵马俑在长安东北临潼，秦都咸阳—汉唐长安一脉的京畿王陵区。",
   "label": "位于东北",
   "type": "misc"
  },
  {
   "from": "dayan_ta",
   "to": "chang_an_city",
   "relation": "位于城内（晋昌坊）",
   "note": "大雁塔在长安城内晋昌坊（慈恩寺），为译经中心地标。",
   "label": "位于城内（晋昌坊）",
   "type": "misc"
  },
  {
   "from": "daming_gong",
   "to": "chang_an_city",
   "relation": "位于城北",
   "note": "大明宫在长安城东北龙首原，为盛唐朝宫与政治中枢。",
   "label": "位于城北",
   "type": "misc"
  },
  {
   "from": "wei_he",
   "to": "chang_an_city",
   "relation": "北濒",
   "note": "长安北濒渭河，八水绕城，河网供饮水灌溉与漕运。",
   "label": "北濒",
   "type": "misc"
  },
  {
   "from": "zhongnan_shan",
   "to": "chang_an_city",
   "relation": "南屏",
   "note": "终南—秦岭为长安南面天然形胜与屏障，隐逸佛道洞窟并陈。",
   "label": "南屏",
   "type": "misc"
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
   "宋·私修",
   "学界"
  ],
  "party_bucket": {
   "汉·官修": "汉·官修",
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "宋·私修": "宋·私修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·官修": "#B23A48",
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
   "宋·私修": "#8E7CC3",
   "学界": "#2E7D8F"
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
   "f_宋·私修": {
    "name": "宋·私修",
    "macro_party": "宋·私修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·官修": "#B23A48",
   "f_汉·后朝官修": "#C0584F",
   "f_五代·官修": "#7A6A53",
   "f_宋·私修": "#8E7CC3",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [],
  "admin1": [],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   32.95,
   107.9,
   35.385,
   110.273
  ]
 }
};
