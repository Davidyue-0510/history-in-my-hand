// 本文件由 tools/build.py 自动生成（切片 luoyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["luoyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["luoyang"] = {
 "meta": {
  "kind": "county",
  "region": "sui_tang",
  "province": "henan",
  "title": "洛阳（十三朝古都·龙门石窟·隋唐东都）",
  "dossier_label": "洛阳",
  "subtitle": "十三朝古都 · 龙门石窟 · 隋唐东都 · 丝路东端",
  "primary_place": "longmen_grottoes",
  "dossier_event": "event:ev_luoyang_03",
  "vocab_pack": "luoyang",
  "terrain_grid": "china_coarse",
  "lead": "洛阳居伊洛盆地、北依邙山、南对龙门、洛水贯城，自东周迄五代累为都，为十三朝古都与中土形胜之枢。周平王元年（前770）东迁雒邑，洛阳起为都；北魏太和十七年（493）孝文帝迁都洛阳、行汉化，龙门石窟随之始凿；唐咸亨三年至上元二年（672—675）武则天助脂粉钱营龙门奉先寺卢舍那大像，为隋唐东都佛教艺术象征。汉明帝永平中求法、立白马寺于城西，佛教东传、译经来华之始；隋唐东都置含嘉仓、转漕关东，里坊市易成制、胡商蕃客聚于津桥。龙门石窟现存窟龛两千余、造像十万尊余，2000年列入UNESCO（编号1003）。",
  "parties_note": "史料以史记/汉书/旧唐书等官修为主，洛阳伽蓝记为北魏私修城市佛教地理名著，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_luoyang_01": "周平王东迁",
   "event:ev_luoyang_02": "孝文帝迁都",
   "event:ev_luoyang_03": "营奉先寺",
   "place:longmen_grottoes": "龙门石窟",
   "person:wu_zetian": "武则天"
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
    "note": "都城礼制+汉化改革+佛教东传→洛阳中古文明秩序"
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
    "note": "龙门石窟营造+官仓漕运+丝路东端→洛阳物资与艺术枢纽"
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
    "note": "里坊胡商+寺观社会+文人雅集→多元社会汇聚"
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
    "note": "伊洛形胜+丝路东端+东迁迁都事件→洛阳控中原枢要与东西交流"
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
  "page": "county.html?scene=luoyang",
  "key": "luoyang",
  "scene_id": "luoyang"
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
   "note": "周本纪、十二诸侯年表载周平王东迁雒邑、东周之始，为洛阳建都之纬。"
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
   "note": "地理志、西域传载洛阳形胜、汉明帝求法与白马寺、佛教东传，为洛阳建都与佛教入华核心史料。"
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
   "note": "则天皇后纪、食货志、地理志载武则天营龙门奉先寺、东都含嘉仓与里坊市易，为隋唐洛阳核心史料。"
  },
  {
   "id": "luoyang_galan_ji",
   "title": "洛阳伽蓝记",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "北魏杨衒之记当代洛阳佛寺，后世辑为城市佛教地理名著",
   "color": "#2E7D8F",
   "compiler": "杨衒之（北魏）",
   "period": "北魏",
   "note": "记北魏洛阳城伽蓝、里坊与迁都后佛事之盛，用于孝文帝迁都、龙门始凿、白马寺与中古都市信仰等断言。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "洛阳历史地理与中古文明综合研究",
   "period": "今",
   "note": "历史地理、城市史、美术史、丝路史等现代研究的综合推论，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "luoyang_city",
   "name": "洛阳城（雒邑·东都）",
   "lon": 112.4351,
   "lat": 34.6716,
   "type": "城/都",
   "modern": "河南省洛阳市",
   "note": "处伊洛盆地、北依邙山、南对龙门、洛水贯城，自东周迄五代累为都城，十三朝古都，中土形胜之枢（CHGIS V6 治所坐标，WGS84：洛阳郡/洛阳县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：洛阳郡/洛阳县（洛阳郡/县治所）",
   "elev": 212
  },
  {
   "id": "longmen_grottoes",
   "name": "龙门石窟",
   "lon": 112.47,
   "lat": 34.52,
   "type": "石窟寺/文化遗产",
   "modern": "洛阳市南郊伊河两岸",
   "note": "北魏孝文帝迁都后始凿，盛于唐（奉先寺卢舍那）；现存窟龛两千余、造像十万尊余，2000年列入UNESCO（编号1003）。",
   "geo_match": "approx",
   "geo_note": "龙门石窟近似坐标（112.47, 34.52），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 182
  },
  {
   "id": "luoyang_plain",
   "name": "伊洛盆地（洛阳盆地）",
   "lon": 112.4,
   "lat": 34.6,
   "type": "盆地/平原",
   "modern": "洛阳周边",
   "note": "北邙南伊、洛水贯中，四塞险固、土厚水便，为历代建都之形胜依托。",
   "elev": 181
  },
  {
   "id": "luo_river",
   "name": "洛水（洛河）",
   "lon": 112.45,
   "lat": 34.68,
   "type": "河流",
   "modern": "穿洛阳城而过",
   "note": "伊洛水系干流，贯洛阳城、通漕运、润郊畿，支撑都城营缮与农业，地理形势之血脉。",
   "elev": 210
  },
  {
   "id": "baima_temple",
   "name": "白马寺",
   "lon": 112.59,
   "lat": 34.72,
   "type": "寺院/文化遗产",
   "modern": "洛阳市东郊",
   "note": "汉明帝永平中遣使西域求法、白马驮经所立，佛教东传、译经来华之始，后世誉中国第一古刹。",
   "elev": 194
  },
  {
   "id": "hanjia_cang",
   "name": "含嘉仓遗址（隋唐东都官仓）",
   "lon": 112.45,
   "lat": 34.7,
   "type": "遗址/官仓",
   "modern": "洛阳市老城北",
   "note": "隋唐东都大型官仓，窖藏巨万、转漕关东租赋，考古出炭化谷物印证其盛，见东都物资与漕运枢纽之制。",
   "elev": 223
  }
 ],
 "persons": [
  {
   "id": "xiao_wen_di",
   "name": "北魏孝文帝（元宏）",
   "era": "北魏",
   "role": "迁都洛阳·汉化改革",
   "note": "太和十七年（493）自平城迁都洛阳，行改姓、易服、定礼仪诸汉化之政，龙门石窟随之始凿，奠定洛阳中古都城格局。",
   "influence": 0
  },
  {
   "id": "wu_zetian",
   "name": "武则天",
   "era": "唐",
   "role": "营龙门奉先寺卢舍那大像",
   "note": "咸亨三年至上元二年（672—675）助脂粉钱营建龙门奉先寺卢舍那大像，窟龛恢宏，为隋唐东都佛教艺术与武周意象象征。",
   "influence": 0
  },
  {
   "id": "bai_juyi",
   "name": "白居易",
   "era": "唐",
   "role": "香山居士·洛阳文人代表",
   "note": "晚年居洛阳龙门东山，自号香山居士，结香山九老、营墓于斯；其诗文书信见中唐洛阳文人雅集与都市文化生活。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "LY_R01",
   "subject": "event:ev_luoyang_01",
   "predicate": "周平王东迁雒邑，洛阳为东周都城之始",
   "value_text": "周平王元年（前770）东迁雒邑（成周），避犬戎之逼、依晋郑之援，史称东周，洛阳由是起为都，开十三朝建都之绪。",
   "value": "",
   "source": "shiji",
   "layer": "record",
   "era": "东周",
   "place": "luoyang_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "平王东迁于洛邑，避戎难而依晋郑，自是周室东徙，洛邑为都，诸侯政由方伯（史记·周本纪/ 十二诸侯年表）。",
   "note": "事件（东迁）+ 制度（都城之始）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "LY_R02",
   "subject": "event:ev_luoyang_02",
   "predicate": "北魏孝文帝迁都洛阳，行汉化、始凿龙门",
   "value_text": "北魏太和十七年（493）孝文帝自平城迁都洛阳，营宫室、改姓易服、定礼仪，龙门石窟随之始凿，洛阳为汉化改革与石窟艺术中枢。",
   "value": "",
   "source": "luoyang_galan_ji",
   "layer": "record",
   "era": "北魏",
   "place": "luoyang_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "太和迁都洛阳，营构宫庙、革弊用夏，龙门岩壁于是凿龛造像，京邑佛事之盛冠于一时（洛阳伽蓝记/ 魏书·高祖纪）。",
   "note": "事件（迁都）+ 制度（汉化改革）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_R03",
   "subject": "event:ev_luoyang_03",
   "predicate": "武则天营龙门奉先寺卢舍那大像，唐东都象征",
   "value_text": "唐咸亨三年至上元二年（672—675）武则天助脂粉钱营龙门奉先寺，凿卢舍那大像，窟龛壮丽为龙门之冠，成隋唐东都佛教艺术象征。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "longmen_grottoes",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "武太后出脂粉钱营奉先寺，凿卢舍那像，龛制恢宏、相好端严，为龙门之极观（旧唐书·则天皇后纪/ 龙门碑刻）。",
   "note": "事件（营窟）+ 技术（石窟营造）。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LY_R04",
   "subject": "place:baima_temple",
   "predicate": "白马寺为汉明帝永平求法所立，佛教入华第一古刹",
   "value_text": "汉明帝永平中遣使西域求法，立白马寺于洛阳城西，为佛教东传、译经来华之始，后世誉为中国第一古刹。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "东汉",
   "place": "baima_temple",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "明帝梦金人，遣使天竺求法，白马驮经至洛，立寺城西，浮屠之教始流中土（汉书·西域传/ 释老志）。",
   "note": "思想（佛教东传）+ 制度（官立译场）。",
   "dims": [
    5,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "LY_R05",
   "subject": "place:hanjia_cang",
   "predicate": "隋唐东都置含嘉仓，为大型官仓、漕粟聚于河洛",
   "value_text": "隋唐于东都洛阳置含嘉仓等官仓，窖藏粟米、转输关东租赋，考古出炭化谷物印证其巨，见东都物资与漕运枢纽之制。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "隋唐",
   "place": "hanjia_cang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "东都置含嘉仓，窖粟巨万、转漕关东，考古出炭谷以证其盛，河洛为漕粟所凑（旧唐书·食货志/ 仓廪志）。",
   "note": "制度（官仓）+ 社会（漕运供给）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LY_R06",
   "subject": "place:luoyang_city",
   "predicate": "洛阳居伊洛盆地、北依邙山、洛水贯城，形胜为十三朝都",
   "value_text": "洛阳处伊洛盆地，北倚邙山、南对龙门、洛水贯城而过，四塞险固、土厚水便，自东周迄五代累为都城，得形胜之利。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "汉—唐",
   "place": "luoyang_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洛阳居天下之中，背邙面洛、山水明秀，历代相仍以为都，形胜甲于中土（汉书·地理志/ 河南志）。",
   "note": "地理（形胜）+ 制度（都城选址）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "LY_S01",
   "subject": "place:longmen_grottoes",
   "predicate": "龙门石窟融中原线描与犍陀罗造像，北朝—唐艺术范",
   "value_text": "龙门石窟北魏至盛唐造像兼采中原线描与犍陀罗凹凸之法，宾阳、奉先诸窟见民族化风格演进，为佛教艺术本土化之范。",
   "value": "",
   "source": "luoyang_galan_ji",
   "layer": "scholarship",
   "era": "北魏—唐",
   "place": "longmen_grottoes",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "龙门之工，梵汉并施，线描与凹凸晕染相参，自魏逮唐风格递变，学者以为造像本土化之范（龙门石窟研究/ 美术史）。",
   "note": "技术（石窟技法）+ 思想（艺术本土化）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_S02",
   "subject": "place:baima_temple",
   "predicate": "汉唐洛阳佛寺林立，儒释道与多元信仰叠合",
   "value_text": "汉明帝立白马寺后，洛阳佛寺渐兴，北魏时伽蓝遍地，与儒道并立，见中古洛阳多元信仰与思想叠合。",
   "value": "",
   "source": "luoyang_galan_ji",
   "layer": "scholarship",
   "era": "汉—北魏",
   "place": "baima_temple",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "自白马立寺，伽蓝日盛，至魏京刹相望，释老与儒并陈于市，中古信仰之汇于此可见（洛阳伽蓝记/ 释教录）。",
   "note": "思想（多元信仰）+ 社会（寺观社会）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_S03",
   "subject": "place:luoyang_city",
   "predicate": "隋唐东都里坊市易成制，胡商蕃客聚于津桥",
   "value_text": "隋唐东都洛阳规划里坊、设市肆，运河通而商旅集，胡商蕃客往来津桥，见中古都市经济与国际化社会之形。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "隋唐",
   "place": "luoyang_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "东都坊市有制，漕渠既通、贾胡踵至，津桥之市胡汉错居，中古都市之盛可观（旧唐书·地理志/ 两京新记）。",
   "note": "社会（都市经济）+ 地理（运河枢纽）。",
   "dims": [
    4,
    1
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LY_I01",
   "subject": "place:luo_river",
   "predicate": "洛水与伊洛水利支撑都城营缮与漕运",
   "value_text": "洛水贯洛阳城、汇伊河，伊洛水利既供都城营缮与园囿，亦通漕运、润郊畿，地理形势支撑千年建都。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "luo_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "洛水贯郭、伊洛相凑，溉田通漕、资都邑之营，水利与形胜相济，千年建都赖此（学界历史地理推论）。",
   "note": "地理（河流）+ 技术（水利漕运）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_I02",
   "subject": "place:longmen_grottoes",
   "predicate": "石窟供养折射隋唐东都所聚之财富与信仰",
   "value_text": "龙门累世开窟造像、写经妆銮，其费多出官私供养，折射隋唐东都既聚财富、亦重福田，艺术投入与社会信仰相表里。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "北魏—唐",
   "place": "longmen_grottoes",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "凿龛妆銮，费不赀而相继，官私竞施，东都既富且崇福，艺事因以盛（学界中古经济推论）。",
   "note": "技术（石窟）+ 社会（供养财富）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_I03",
   "subject": "place:luoyang_city",
   "predicate": "洛阳为丝路东端枢纽，西来文明于此交汇",
   "value_text": "洛阳处中原腹心、接河西丝路东端，西域僧侣、商胡与典经由此东传，佛教译经与胡风文物交汇，成欧亚文明东端节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—唐",
   "place": "luoyang_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "道通河西、风靡中土，释梵之典与胡商之货并凑于洛，洛阳乃丝路东端文明所交之枢（学界丝路文明推论）。",
   "note": "地理（丝路东端）+ 思想（文明交汇）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_I04",
   "subject": "place:luoyang_plain",
   "predicate": "伊洛盆地四塞形胜使洛阳成中原攻防枢要",
   "value_text": "洛阳盆地北邙南伊、东西有轘辕崤函之险，地理形势使洛阳为中原攻防枢要，历代定都、争雄皆系于此。",
   "value": "",
   "source": "hanshu",
   "layer": "inference",
   "era": "汉—唐",
   "place": "luoyang_plain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "邙洛为襟、崤函为限，四塞险固，争雄者所必据，形胜系乎中原轻重（汉书/ 形胜志）。",
   "note": "地理（盆地形胜）+ 制度（攻防枢要）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "LY_I05",
   "subject": "person:bai_juyi",
   "predicate": "白居易居洛、号香山居士，中唐洛阳文人社会之代表",
   "value_text": "白居易晚年居洛阳龙门东山，自号香山居士，结香山九老、营墓于斯，其诗文书信见中唐洛阳文人雅集与都市文化生活。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐",
   "place": "longmen_grottoes",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "乐天晚栖龙门，自号香山，九老相酬、白园成趣，中唐洛下文人社会之盛可征（学界唐史/ 文学推论）。",
   "note": "思想（文人文化）+ 社会（雅集网络）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_G01",
   "subject": "place:longmen_grottoes",
   "predicate": "龙门北魏早期窟（宾阳中洞等）营造年代与匠籍数据有限",
   "value_text": "龙门北魏早期洞窟（如宾阳中洞）的具体营造年代序列、匠作籍贯与粉本来源等数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "北魏",
   "place": "longmen_grottoes",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：龙门早期窟营造史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "龙门北魏早期洞窟（宾阳中洞等）营造年代序列、匠籍与粉本来源",
    "skills": [
     "美术史",
     "考古学",
     "石窟艺术"
    ],
    "accept": "若有窟题记与造像碑对照，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_G02",
   "subject": "place:luoyang_city",
   "predicate": "北魏—隋唐洛阳基层里坊、寺户与人口结构文献有限",
   "value_text": "北魏至隋唐洛阳基层里坊组织、寺户、蕃客聚落的具体社会结构与人口分布，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "北魏—唐",
   "place": "luoyang_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：中古洛阳基层社会。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "北魏—隋唐洛阳里坊组织、寺户、蕃客聚落与人口结构",
    "skills": [
     "社会史",
     "历史地理",
     "城市史"
    ],
    "accept": "若有洛阳籍帐、里坊图与出土墓志对照，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LY_G03",
   "subject": "place:luoyang_city",
   "predicate": "汉晋至隋唐洛阳城址与今洛阳市叠压关系考古有限",
   "value_text": "汉晋洛阳城、隋唐东都洛阳城的具体城址范围、城门与今洛阳市（洛河两岸）的位置叠压对应关系，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "汉—唐",
   "place": "luoyang_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：古城址叠压。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "汉晋至隋唐洛阳城址范围、城门与今洛阳市的叠压对应",
    "skills": [
     "考古学",
     "历史地理",
     "GIS"
    ],
    "accept": "若有东都洛阳城考古测绘，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "LY_G01",
  "LY_G02",
  "LY_G03"
 ],
 "events": [
  {
   "id": "ev_luoyang_01",
   "year": -770,
   "era": "东周平王元年",
   "kind": "迁都",
   "title": "周平王东迁雒邑·东周始",
   "place": "luoyang_city",
   "text": "周平王元年（前770）避犬戎之逼、依晋郑之援，东迁雒邑（成周），史称东周。洛阳由是起为都，开十三朝建都之绪，中土王畿重心自此东移。",
   "subject": "event:ev_luoyang_01"
  },
  {
   "id": "ev_luoyang_02",
   "year": 493,
   "era": "北魏太和十七年",
   "kind": "迁都·营窟",
   "title": "孝文帝迁都洛阳·龙门始凿",
   "place": "luoyang_city",
   "text": "北魏太和十七年（493）孝文帝自平城迁都洛阳，营宫室、改姓易服、定礼仪以行汉化；龙门石窟随之始凿，洛阳为汉化改革与石窟艺术中枢，京邑佛事之盛冠于一时。",
   "subject": "event:ev_luoyang_02"
  },
  {
   "id": "ev_luoyang_03",
   "year": 675,
   "era": "唐上元二年",
   "kind": "营窟",
   "title": "武则天营龙门奉先寺·卢舍那大像",
   "place": "longmen_grottoes",
   "text": "唐咸亨三年至上元二年（672—675）武则天助脂粉钱营龙门奉先寺，凿卢舍那大像，窟龛壮丽为龙门之冠，成隋唐东都佛教艺术与武周政权意象之象征。",
   "subject": "event:ev_luoyang_03"
  }
 ],
 "edges": [
  {
   "from": "longmen_grottoes",
   "to": "luoyang_city",
   "relation": "南郊伊河两岸",
   "note": "龙门石窟在洛阳城西南伊河两岸，北魏迁都后始凿、唐营奉先寺，为东都近郊石窟艺术中枢。",
   "label": "南郊伊河两岸",
   "type": "misc"
  },
  {
   "from": "luo_river",
   "to": "luoyang_city",
   "relation": "贯城而过",
   "note": "洛水自洛阳城穿流，汇伊河、通漕运、润郊畿，为都城形胜与水利之血脉。",
   "label": "贯城而过",
   "type": "misc"
  },
  {
   "from": "luoyang_plain",
   "to": "luoyang_city",
   "relation": "环抱",
   "note": "伊洛盆地北邙南伊、四塞险固，洛阳城处其中，形胜为十三朝建都之依托。",
   "label": "环抱",
   "type": "misc"
  },
  {
   "from": "baima_temple",
   "to": "luoyang_city",
   "relation": "城东",
   "note": "白马寺在洛阳城东，汉明帝求法所立，佛教东传第一古刹，与城中西域译场相表里。",
   "label": "城东",
   "type": "misc"
  },
  {
   "from": "hanjia_cang",
   "to": "luoyang_city",
   "relation": "城北",
   "note": "含嘉仓在洛阳城北，隋唐东都官仓、转漕关东，见东都物资枢纽与漕运之制。",
   "label": "城北",
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
   "学界"
  ],
  "party_bucket": {
   "汉·官修": "汉·官修",
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·官修": "#B23A48",
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
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
   "f_学界": "#2E7D8F"
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
        111.4,
        33.52
       ],
       [
        111.4,
        35.72
       ],
       [
        113.59,
        35.72
       ],
       [
        113.59,
        33.52
       ],
       [
        111.4,
        33.52
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
         111.4,
         35.72
        ],
        [
         111.4,
         34.82
        ],
        [
         111.439,
         34.838
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.59,
         35.633
        ],
        [
         113.59,
         35.716
        ],
        [
         113.59,
         35.72
        ],
        [
         111.4,
         35.72
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.59,
         33.52
        ],
        [
         113.59,
         35.72
        ],
        [
         113.59,
         35.72
        ],
        [
         113.59,
         35.716
        ],
        [
         113.59,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.439,
         34.838
        ],
        [
         111.4,
         34.82
        ],
        [
         111.4,
         33.52
        ],
        [
         113.59,
         33.52
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.4,
        34.847
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.59,
        34.959
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.4,
   33.52,
   113.59,
   35.72
  ]
 }
};
