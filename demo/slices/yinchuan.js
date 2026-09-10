// 本文件由 tools/build.py 自动生成（切片 yinchuan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yinchuan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yinchuan"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "province": "ningxia",
  "title": "银川（西夏兴庆府·贺兰山·党项故地）",
  "dossier_label": "银川",
  "subtitle": "西夏兴庆府 · 贺兰山 · 西夏王陵 · 塞上江南",
  "primary_place": "yinchuan_city",
  "dossier_event": "event:ev_yinchuan_01",
  "vocab_pack": "yinchuan",
  "terrain_grid": "china_coarse",
  "lead": "银川位于宁夏平原中部、贺兰山与黄河之间，古称兴庆府。1038年党项首领李元昊于此称帝，国号大夏，史称西夏，定都兴庆府，与宋、辽形成三足鼎立。贺兰山东麓的西夏王陵是西夏帝王陵寝群，被誉为「东方金字塔」。青铜峡黄河古渠网络灌溉银川平原，形成「塞上粮仓」。镇北堡为明代边防要塞，灵州（今灵武）则是唐至西夏时期的西北军政枢纽。银川的西夏遗存、贺兰山岩画与黄河灌区共同构成中国西北独特的农牧交错文明景观。",
  "parties_note": "史料以西夏书事、宋史等为主，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_yinchuan_01": "元昊称帝",
   "event:ev_yinchuan_02": "庆历和议",
   "event:ev_yinchuan_03": "王陵考古",
   "place:yinchuan_city": "兴庆府",
   "person:li_yuannhao": "李元昊"
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
    "note": "西夏文/蕃学+都城制度+王陵佛教→党项政治认同与意识形态"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     4
    ],
    "layer": "inference",
    "note": "黄河灌区+青铜峡水利+丝路北道→兴庆府物资与农业基础"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     5
    ],
    "layer": "inference",
    "note": "党项部众+蕃学官僚+军屯商旅+考古遗产→多族群社会汇聚"
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
    "note": "贺兰山形胜+河套西口+宋夏和议→兴庆府控西北三足格局"
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
  "page": "county.html?scene=yinchuan",
  "key": "yinchuan",
  "scene_id": "yinchuan"
 },
 "sources": [
  {
   "id": "songshi",
   "title": "宋史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正五年（1345），距事约340年",
   "color": "#6C7A89",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": "夏国传、地理志载西夏立国、兴庆府、灵州及宋夏和战，元人修宋史，视角非宋当代。"
  },
  {
   "id": "xixia_shushi",
   "title": "西夏书事",
   "party": "清·私修",
   "stance_label": "清人私修·西夏史专著",
   "distance_label": "清乾隆间吴广成撰，距西夏事约600年",
   "color": "#7B5C3E",
   "compiler": "吴广成（清）",
   "period": "清",
   "note": "清代私修西夏编年史，记李元昊建国、兴庆府、蕃学、宋夏和战等，为西夏史核心史料之一。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "西夏王陵考古队/宁夏文物考古研究所等综合研究",
   "period": "今",
   "note": "西夏王陵考古报告、岩画研究、兴庆府历史地理等现代综合研究，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "yinchuan_city",
   "name": "兴庆府/银川城",
   "lon": 106.274,
   "lat": 38.467,
   "type": "古城/都城遗址",
   "modern": "宁夏银川市兴庆区",
   "note": "西夏都城兴庆府故地，今宁夏银川市城区，西夏政治、经济、文化中心。（CHGIS V6 治所坐标，WGS84：宁夏府）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：宁夏府（CHGIS 宁夏府治所（明清华北治所，即西夏兴庆府/银川城所在，现代银川））",
   "elev": 1104
  },
  {
   "id": "xixia_tombs",
   "name": "西夏王陵",
   "lon": 105.99,
   "lat": 38.44,
   "type": "陵墓/考古遗址",
   "modern": "宁夏银川市西夏区贺兰山东麓",
   "note": "西夏帝王陵寝群，位于贺兰山东麓，现存九座帝陵及二百余座陪葬墓，被誉为「东方金字塔」。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "西夏王陵景区近似坐标（105.99, 38.44），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 1352
  },
  {
   "id": "helan_mountain",
   "name": "贺兰山",
   "lon": 105.95,
   "lat": 38.5,
   "type": "山脉/自然屏障",
   "modern": "宁夏银川市西，与内蒙古交界",
   "note": "横亘于银川平原西侧，自古为中原王朝与北方游牧势力的分界线，西夏视为西陲屏障，山中有大量史前岩画。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "贺兰山银川段近似坐标（105.95, 38.50），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 1635
  },
  {
   "id": "lingzhou",
   "name": "灵州/灵武",
   "lon": 106.1745,
   "lat": 38.0053,
   "type": "古城/军政枢纽",
   "modern": "宁夏灵武市",
   "note": "汉唐以来西北重镇，唐肃宗曾于此即位；北宋时期为宋夏争夺的战略要地，西夏立国后仍为东南门户。（CHGIS V6 治所坐标，WGS84：灵州/灵武郡）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：灵州/灵武郡（CHGIS 灵州/灵武郡治所）",
   "elev": 1121
  },
  {
   "id": "qingtongxia",
   "name": "青铜峡/黄河灌区",
   "lon": 105.95,
   "lat": 38.02,
   "type": "水利/灌溉区",
   "modern": "宁夏青铜峡市",
   "note": "黄河中上游峡谷与灌区，秦渠、汉渠、唐徕渠等古渠流经，是银川平原「塞上江南」农业的根基。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "青铜峡市近似坐标（105.95, 38.02），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 1182
  },
  {
   "id": "zhenbeibao",
   "name": "镇北堡",
   "lon": 106.05,
   "lat": 38.6,
   "type": "古堡/长城要塞",
   "modern": "宁夏银川市西夏区镇北堡镇",
   "note": "明代宁夏镇北路屯兵城堡，位于贺兰山口，控扼蒙古与河套南下通道，后成为著名影视基地。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "镇北堡 approximate coordinates（106.05, 38.60），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 1404
  }
 ],
 "persons": [
  {
   "id": "li_yuannhao",
   "name": "李元昊",
   "era": "西夏",
   "role": "西夏开国皇帝·党项领袖",
   "note": "党项拓跋部首领，1038年称帝建国号大夏，定都兴庆府，创制西夏文，设立蕃学，奠定西夏政治与文化基础。",
   "influence": 1
  },
  {
   "id": "yelirenrong",
   "name": "野利仁荣",
   "era": "西夏",
   "role": "西夏文创造者·蕃学主持者",
   "note": "党项贵族、学者，受李元昊命主持创制西夏文，并领蕃学，翻译儒家经典，推动党项文化的制度化。",
   "influence": 0
  },
  {
   "id": "wodaochong",
   "name": "斡道冲",
   "era": "西夏",
   "role": "西夏译经学者·宰相",
   "note": "西夏仁宗时期大臣，将《论语》《孝经》等汉文经典译成西夏文，以蕃字教授国人，促进蕃汉文化融合。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "YC_R01",
   "subject": "event:ev_yinchuan_01",
   "predicate": "李元昊于兴庆府称帝，国号大夏，定都兴庆府",
   "value_text": "1038年，党项首领李元昊在兴庆府（今银川）称帝，国号大夏，史称西夏，定都兴庆府，与宋、辽形成三足鼎立。",
   "value": "",
   "source": "xixia_shushi",
   "layer": "record",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "大庆三年，元昊遂称帝，国号大夏，改元天授礼法延祚，定都兴庆府（西夏书事）。",
   "note": "事件（建国）+ 制度（都城）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "YC_R02",
   "subject": "event:ev_yinchuan_02",
   "predicate": "宋夏庆历和议，宋册封元昊为夏国主",
   "value_text": "1044年，北宋与西夏达成庆历和议，宋册封李元昊为夏国主，西夏向宋称臣，宋岁赐绢、银、茶，双方战事暂息。",
   "value": "",
   "source": "songshi",
   "layer": "record",
   "era": "北宋",
   "place": "yinchuan_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "庆历四年，宋夏和议成，宋册元昊为夏国主，岁赐绢十三万匹、银五万两、茶二万斤（宋史·夏国传）。",
   "note": "事件（和议）+ 制度（册封）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YC_R03",
   "subject": "event:ev_yinchuan_03",
   "predicate": "1972年西夏王陵考古发掘启动",
   "value_text": "1972年起，宁夏文物考古部门对贺兰山东麓西夏王陵进行系统调查与发掘，确认九座帝陵及二百余座陪葬墓，开启现代西夏考古。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "当代",
   "place": "xixia_tombs",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "1972年起，宁夏文物考古部门对贺兰山东麓西夏王陵进行系统调查与发掘，确认帝王陵寝九座及陪葬墓二百余座（西夏王陵考古报告）。",
   "note": "事件（考古）+ 社会（遗产认知）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_R04",
   "subject": "place:yinchuan_city",
   "predicate": "兴庆府为西夏都城，城垣宫阙规模宏阔",
   "value_text": "兴庆府位于今宁夏银川，为西夏都城，城周二十余里，宫室门阙仿中原制度，是西夏政治、经济、文化中心。",
   "value": "",
   "source": "xixia_shushi",
   "layer": "record",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "兴庆府负贺兰而面黄河，城周二十余里，门阙宫殿咸仿中国制度（西夏书事）。",
   "note": "地理（都城位置）+ 制度（都城制度）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "YC_R05",
   "subject": "place:helan_mountain",
   "predicate": "贺兰山横亘银川西陲，为西夏西界屏障",
   "value_text": "贺兰山位于银川平原西侧，南北绵延，自古为中原王朝与北方游牧势力的分界线，西夏据以为西部屏障。",
   "value": "",
   "source": "songshi",
   "layer": "record",
   "era": "西夏",
   "place": "helan_mountain",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "贺兰山盘纡数百里，夏人据以为固，控扼西路（宋史·夏国传）。",
   "note": "地理（山脉）+ 事件（边防）。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YC_R06",
   "subject": "place:xixia_tombs",
   "predicate": "贺兰山东麓西夏王陵为西夏帝王陵寝群",
   "value_text": "西夏王陵位于银川市西贺兰山东麓，南北长约十公里，现存九座帝陵及二百余座陪葬墓，是西夏 royal necropolis。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "当代",
   "place": "xixia_tombs",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "西夏王陵位于银川市西贺兰山东麓，南北长约十公里，现存九座帝陵及二百余座陪葬墓（西夏王陵考古报告/ 现代考订）。",
   "note": "地理（陵区）+ 制度（王陵制度）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_S01",
   "subject": "place:xixia_tombs",
   "predicate": "西夏王陵融合佛教塔式与中原陵寝制度",
   "value_text": "西夏王陵以佛塔形封土为标志，兼具党项旧俗、佛教信仰与唐宋陵寝制度，体现王权与佛教的合一。",
   "value": "",
   "source": "xixia_shushi",
   "layer": "scholarship",
   "era": "西夏",
   "place": "xixia_tombs",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "西夏王陵以佛塔为封土，兼具党项旧俗与唐宋陵制，体现佛教王权合一（西夏书事研究/ 佛教考古）。",
   "note": "制度（陵制）+ 社会（丧葬）+ 思想（佛教）。",
   "dims": [
    3,
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "YC_S02",
   "subject": "place:lingzhou",
   "predicate": "灵州为唐至西夏时期西北军政枢纽",
   "value_text": "灵州位于黄河东岸、银川平原东南缘，汉唐以来为西北重镇，唐肃宗曾于此即位；北宋时期为宋夏争夺的战略要地。",
   "value": "",
   "source": "songshi",
   "layer": "scholarship",
   "era": "宋",
   "place": "lingzhou",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "灵州控扼黄河，西通凉瓜，北接契丹，为西北重镇，夏人恃为根本（宋史·地理志/ 夏国传）。",
   "note": "地理（枢纽）+ 制度（军政）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YC_S03",
   "subject": "person:li_yuannhao",
   "predicate": "李元昊命野利仁荣创制西夏文，设蕃学",
   "value_text": "李元昊建国后，命大臣野利仁荣创制西夏文，并在兴庆府设立蕃学，以蕃字教授官僚子弟，推动党项文化制度化。",
   "value": "",
   "source": "xixia_shushi",
   "layer": "scholarship",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "元昊既建国，令野利仁荣演绎蕃书，教国人纪事，尊为国字，立蕃学以教群僚子弟（西夏书事）。",
   "note": "制度（教育）+ 思想（文字/认同）。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "YC_I01",
   "subject": "place:qingtongxia",
   "predicate": "青铜峡黄河灌区支撑兴庆府农业与人口",
   "value_text": "青铜峡一带的黄河古渠（秦渠、汉渠、唐徕渠等）灌溉银川平原，使兴庆府周边成为「塞上粮仓」，支撑都城人口与驻军。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "西夏",
   "place": "qingtongxia",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "银川平原引黄河灌溉，秦有秦渠，汉有汉渠，唐徕渠尤著，西夏因之以成塞上粮仓（学界历史地理推论）。",
   "note": "地理（灌区）+ 技术（水利）+ 社会（农业）。",
   "dims": [
    1,
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_I02",
   "subject": "place:zhenbeibao",
   "predicate": "镇北堡明长城要塞折射农牧交界与边防社会",
   "value_text": "镇北堡位于贺兰山口，明代为宁夏镇北路屯兵城堡，控扼蒙古与河套南下通道，体现农牧交错带的边防与社会形态。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明",
   "place": "zhenbeibao",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "镇北堡为明代宁夏镇北路屯兵城堡，位于贺兰山口，控扼蒙古与河套南下通道（学界边疆史推论）。",
   "note": "地理（要塞）+ 制度（边防）+ 社会（军屯）。",
   "dims": [
    1,
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_I03",
   "subject": "place:yinchuan_city",
   "predicate": "兴庆府控河套西口与丝绸之路北道节点",
   "value_text": "兴庆府地处河套西口，东南接宋境，北通蒙古高原，西连河西走廊，是丝绸之路北道上的重要转输与政治节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "兴庆府当河套西口，东南接宋，北通鞑靼，西连河西，为丝绸之路北道重要转输点（学界历史地理推论）。",
   "note": "地理（节点）+ 制度（贸易）+ 社会（商旅）。",
   "dims": [
    1,
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_I04",
   "subject": "place:helan_mountain",
   "predicate": "贺兰山岩画与西夏佛教信仰层叠为多元宗教景观",
   "value_text": "贺兰山保存大量青铜时代至早期铁器时代的岩画，西夏时期佛教寺院与岩画分布区重叠，形成山岳信仰的多重层累。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "西夏",
   "place": "helan_mountain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "贺兰山岩画早至青铜时代，西夏时期佛教寺院与岩画分布区重叠，构成山岳信仰的多重层累（学界宗教考古推论）。",
   "note": "地理（山岳）+ 思想（宗教）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_I05",
   "subject": "person:yelirenrong",
   "predicate": "野利仁荣主持蕃学，推动党项精英儒学化",
   "value_text": "野利仁荣领蕃学后，主持用西夏文翻译《孝经》《尔雅》等儒家经典，以蕃字教授官僚子弟，使蕃汉文化在兴庆府交融。",
   "value": "",
   "source": "xixia_shushi",
   "layer": "inference",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "野利仁荣领蕃学，译孝经、尔雅、四言杂字，以蕃字教授官僚子弟，使蕃汉文化交融（西夏书事/ 思想史推论）。",
   "note": "思想（儒化）+ 事件（文教）。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "YC_G01",
   "subject": "place:xixia_tombs",
   "predicate": "西夏王陵地宫结构与陪葬品细节公开有限",
   "value_text": "西夏王陵地面建筑与陵城布局已有考古成果，但帝陵地宫结构、墓道形制与陪葬品清单等细节公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "西夏",
   "place": "xixia_tombs",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：地宫考古。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "西夏王陵未发掘帝陵地宫考古报告与出土器物图录",
    "skills": [
     "考古学",
     "西夏史",
     "美术史"
    ],
    "accept": "若有地宫发掘报告或陪葬品清单公开，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_G02",
   "subject": "place:yinchuan_city",
   "predicate": "兴庆府城垣街道与市井布局的考古复原公开有限",
   "value_text": "兴庆府作为西夏都城，其城垣基址、街道网络、宫市布局与手工业作坊区的考古复原资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "西夏",
   "place": "yinchuan_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：都城城市史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "兴庆府遗址城墙基址、道路网、手工业作坊考古",
    "skills": [
     "城市考古",
     "西夏史",
     "历史地理"
    ],
    "accept": "若有城垣基址测绘或街坊布局报告，可补技术(2)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YC_G03",
   "subject": "place:lingzhou",
   "predicate": "灵州唐代城址与党项内附时期行政档案公开有限",
   "value_text": "灵州在唐代朔方节度使治所、党项内附安置及宋夏争夺时期的城址变迁、行政档案与日常管理细节公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "lingzhou",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：唐灵州考古。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "灵州故城遗址考古、唐代朔方节度使档案、党项内附户籍",
    "skills": [
     "考古学",
     "唐史",
     "党项史"
    ],
    "accept": "若有唐代城址测绘或党项内附行政文书，可补地理(1)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YC_G01",
  "YC_G02",
  "YC_G03"
 ],
 "events": [
  {
   "id": "ev_yinchuan_01",
   "year": 1038,
   "era": "西夏大庆三年",
   "kind": "建国",
   "title": "李元昊称帝建西夏，定都兴庆府",
   "place": "yinchuan_city",
   "text": "1038年，党项首领李元昊于兴庆府（今银川）称帝，国号大夏，史称西夏，定都兴庆府，与宋、辽形成三足鼎立。",
   "subject": "event:ev_yinchuan_01"
  },
  {
   "id": "ev_yinchuan_02",
   "year": 1044,
   "era": "北宋庆历四年",
   "kind": "和议",
   "title": "宋夏庆历和议，册封夏国主",
   "place": "yinchuan_city",
   "text": "1044年，北宋与西夏达成庆历和议，宋册封李元昊为夏国主，西夏向宋称臣，宋岁赐绢、银、茶，双方战事暂息。",
   "subject": "event:ev_yinchuan_02"
  },
  {
   "id": "ev_yinchuan_03",
   "year": 1972,
   "era": "1972年",
   "kind": "考古",
   "title": "西夏王陵考古发掘启动",
   "place": "xixia_tombs",
   "text": "1972年起，宁夏文物考古部门对贺兰山东麓西夏王陵进行系统调查与发掘，确认九座帝陵及二百余座陪葬墓，开启现代西夏考古。",
   "subject": "event:ev_yinchuan_03"
  }
 ],
 "edges": [
  {
   "from": "xixia_tombs",
   "to": "yinchuan_city",
   "relation": "位于都城西侧",
   "note": "西夏王陵位于兴庆府以西约35公里的贺兰山东麓，是西夏 royal necropolis。",
   "label": "位于都城西侧",
   "type": "misc"
  },
  {
   "from": "helan_mountain",
   "to": "yinchuan_city",
   "relation": "屏其西",
   "note": "贺兰山横亘于兴庆府/银川西侧，既是自然屏障，也是西夏西界与信仰空间。",
   "label": "屏其西",
   "type": "misc"
  },
  {
   "from": "lingzhou",
   "to": "yinchuan_city",
   "relation": "东南门户",
   "note": "灵州位于兴庆府东南，为唐至西夏时期西北军政枢纽，控扼黄河东南通道。",
   "label": "东南门户",
   "type": "misc"
  },
  {
   "from": "qingtongxia",
   "to": "yinchuan_city",
   "relation": "黄河灌区上游",
   "note": "青铜峡黄河灌区位于兴庆府以南，古渠网络支撑银川平原农业，是西夏都城的粮食根基。",
   "label": "黄河灌区上游",
   "type": "misc"
  },
  {
   "from": "zhenbeibao",
   "to": "yinchuan_city",
   "relation": "北部门户",
   "note": "镇北堡位于兴庆府以北贺兰山口，明代为宁夏镇北路屯兵城堡，控扼河套南下通道。",
   "label": "北部门户",
   "type": "misc"
  }
 ],
 "control": [
  {
   "place_id": "yinchuan_city",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  },
  {
   "place_id": "xixia_tombs",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  },
  {
   "place_id": "helan_mountain",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  },
  {
   "place_id": "lingzhou",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  },
  {
   "place_id": "qingtongxia",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  },
  {
   "place_id": "zhenbeibao",
   "party": "学界",
   "start": 1038,
   "end": 1972,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "yinchuan_city",
   "name": "兴庆府/银川城",
   "lon": 106.274,
   "lat": 38.467,
   "region": "xibei"
  },
  {
   "place_id": "xixia_tombs",
   "name": "西夏王陵",
   "lon": 105.99,
   "lat": 38.44,
   "region": "xibei"
  },
  {
   "place_id": "helan_mountain",
   "name": "贺兰山",
   "lon": 105.95,
   "lat": 38.5,
   "region": "xibei"
  },
  {
   "place_id": "lingzhou",
   "name": "灵州/灵武",
   "lon": 106.1745,
   "lat": 38.0053,
   "region": "xibei"
  },
  {
   "place_id": "qingtongxia",
   "name": "青铜峡/黄河灌区",
   "lon": 105.95,
   "lat": 38.02,
   "region": "xibei"
  },
  {
   "place_id": "zhenbeibao",
   "name": "镇北堡",
   "lon": 106.05,
   "lat": 38.6,
   "region": "xibei"
  }
 ],
 "control_years": [
  1038,
  1972
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
   "清·私修",
   "学界"
  ],
  "party_bucket": {
   "元·官修": "元·官修",
   "清·私修": "清·私修",
   "学界": "学界"
  },
  "party_colors": {
   "元·官修": "#6C7A89",
   "清·私修": "#7B5C3E",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_清·私修": {
    "name": "清·私修",
    "macro_party": "清·私修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_元·官修": "#6C7A89",
   "f_清·私修": "#7B5C3E",
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
        104.95,
        37.005
       ],
       [
        104.95,
        39.6
       ],
       [
        107.274,
        39.6
       ],
       [
        107.274,
        37.005
       ],
       [
        104.95,
        37.005
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
        104.95,
        39.6
       ],
       [
        104.95,
        37.574
       ],
       [
        105.028,
        37.581
       ],
       [
        105.111,
        37.634
       ],
       [
        105.188,
        37.658
       ],
       [
        105.222,
        37.677
       ],
       [
        105.315,
        37.702
       ],
       [
        105.404,
        37.71
       ],
       [
        105.467,
        37.695
       ],
       [
        105.599,
        37.699
       ],
       [
        105.616,
        37.723
       ],
       [
        105.622,
        37.778
       ],
       [
        105.677,
        37.772
       ],
       [
        105.761,
        37.8
       ],
       [
        105.804,
        37.862
       ],
       [
        105.8,
        37.94
       ],
       [
        105.84,
        38.004
       ],
       [
        105.781,
        38.085
       ],
       [
        105.768,
        38.121
       ],
       [
        105.775,
        38.187
       ],
       [
        105.803,
        38.22
       ],
       [
        105.842,
        38.241
       ],
       [
        105.866,
        38.296
       ],
       [
        105.821,
        38.367
       ],
       [
        105.835,
        38.387
       ],
       [
        105.827,
        38.432
       ],
       [
        105.851,
        38.444
       ],
       [
        105.837,
        38.476
       ],
       [
        105.864,
        38.535
       ],
       [
        105.856,
        38.57
       ],
       [
        105.874,
        38.593
       ],
       [
        105.853,
        38.642
       ],
       [
        105.895,
        38.696
       ],
       [
        105.886,
        38.717
       ],
       [
        105.908,
        38.737
       ],
       [
        105.909,
        38.791
       ],
       [
        105.993,
        38.857
       ],
       [
        105.971,
        38.909
       ],
       [
        106.021,
        38.954
       ],
       [
        106.061,
        38.969
       ],
       [
        106.087,
        39.006
       ],
       [
        106.078,
        39.026
       ],
       [
        106.097,
        39.085
       ],
       [
        106.146,
        39.153
       ],
       [
        106.171,
        39.163
       ],
       [
        106.193,
        39.143
       ],
       [
        106.251,
        39.131
       ],
       [
        106.285,
        39.146
       ],
       [
        106.296,
        39.168
       ],
       [
        106.28,
        39.262
       ],
       [
        106.403,
        39.292
       ],
       [
        106.512,
        39.272
       ],
       [
        106.525,
        39.308
       ],
       [
        106.556,
        39.322
       ],
       [
        106.602,
        39.376
       ],
       [
        106.644,
        39.358
       ],
       [
        106.684,
        39.358
       ],
       [
        106.751,
        39.382
       ],
       [
        106.782,
        39.372
       ],
       [
        106.807,
        39.319
       ],
       [
        106.806,
        39.277
       ],
       [
        106.791,
        39.241
       ],
       [
        106.796,
        39.214
       ],
       [
        106.825,
        39.194
       ],
       [
        106.859,
        39.108
       ],
       [
        106.879,
        39.091
       ],
       [
        106.934,
        39.077
       ],
       [
        106.968,
        39.055
       ],
       [
        106.972,
        39.026
       ],
       [
        106.954,
        38.941
       ],
       [
        106.838,
        38.848
       ],
       [
        106.756,
        38.749
       ],
       [
        106.709,
        38.719
       ],
       [
        106.663,
        38.602
       ],
       [
        106.648,
        38.471
       ],
       [
        106.6,
        38.39
       ],
       [
        106.482,
        38.319
       ],
       [
        106.556,
        38.264
       ],
       [
        106.628,
        38.233
       ],
       [
        106.655,
        38.229
       ],
       [
        106.738,
        38.198
       ],
       [
        106.779,
        38.172
       ],
       [
        106.859,
        38.156
       ],
       [
        106.942,
        38.132
       ],
       [
        107.01,
        38.121
       ],
       [
        107.051,
        38.123
       ],
       [
        107.071,
        38.139
       ],
       [
        107.119,
        38.134
       ],
       [
        107.139,
        38.161
       ],
       [
        107.191,
        38.154
       ],
       [
        107.24,
        38.112
       ],
       [
        107.274,
        38.102
       ],
       [
        107.274,
        39.6
       ],
       [
        104.95,
        39.6
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
         107.274,
         37.005
        ],
        [
         107.274,
         37.402
        ],
        [
         107.258,
         37.337
        ],
        [
         107.273,
         37.291
        ],
        [
         107.274,
         37.29
        ],
        [
         107.274,
         37.23
        ],
        [
         107.271,
         37.229
        ],
        [
         107.274,
         37.227
        ],
        [
         107.274,
         37.111
        ],
        [
         107.269,
         37.099
        ],
        [
         107.274,
         37.086
        ],
        [
         107.274,
         37.005
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         105.105,
         37.005
        ],
        [
         105.059,
         37.023
        ],
        [
         105.04,
         37.007
        ],
        [
         105.005,
         37.035
        ],
        [
         104.955,
         37.04
        ],
        [
         104.954,
         37.077
        ],
        [
         104.95,
         37.08
        ],
        [
         104.95,
         37.005
        ],
        [
         107.274,
         37.005
        ],
        [
         107.274,
         37.086
        ],
        [
         107.269,
         37.099
        ],
        [
         107.235,
         37.097
        ],
        [
         107.182,
         37.143
        ],
        [
         107.134,
         37.135
        ],
        [
         107.096,
         37.116
        ],
        [
         107.03,
         37.141
        ],
        [
         107.031,
         37.108
        ],
        [
         106.998,
         37.107
        ],
        [
         106.906,
         37.151
        ],
        [
         106.912,
         37.11
        ],
        [
         106.891,
         37.098
        ],
        [
         106.819,
         37.142
        ],
        [
         106.776,
         37.158
        ],
        [
         106.773,
         37.12
        ],
        [
         106.75,
         37.099
        ],
        [
         106.729,
         37.121
        ],
        [
         106.688,
         37.13
        ],
        [
         106.673,
         37.111
        ],
        [
         106.617,
         37.135
        ],
        [
         106.605,
         37.128
        ],
        [
         106.645,
         37.065
        ],
        [
         106.667,
         37.017
        ],
        [
         106.653,
         37.005
        ],
        [
         105.105,
         37.005
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.269,
         37.099
        ],
        [
         107.274,
         37.111
        ],
        [
         107.274,
         37.227
        ],
        [
         107.271,
         37.229
        ],
        [
         107.274,
         37.23
        ],
        [
         107.274,
         37.29
        ],
        [
         107.273,
         37.291
        ],
        [
         107.258,
         37.337
        ],
        [
         107.274,
         37.402
        ],
        [
         107.274,
         38.102
        ],
        [
         107.24,
         38.112
        ],
        [
         107.191,
         38.154
        ],
        [
         107.139,
         38.161
        ],
        [
         107.119,
         38.134
        ],
        [
         107.071,
         38.139
        ],
        [
         107.051,
         38.123
        ],
        [
         107.01,
         38.121
        ],
        [
         106.942,
         38.132
        ],
        [
         106.859,
         38.156
        ],
        [
         106.779,
         38.172
        ],
        [
         106.738,
         38.198
        ],
        [
         106.655,
         38.229
        ],
        [
         106.628,
         38.233
        ],
        [
         106.556,
         38.264
        ],
        [
         106.482,
         38.319
        ],
        [
         106.6,
         38.39
        ],
        [
         106.648,
         38.471
        ],
        [
         106.663,
         38.602
        ],
        [
         106.709,
         38.719
        ],
        [
         106.756,
         38.749
        ],
        [
         106.838,
         38.848
        ],
        [
         106.954,
         38.941
        ],
        [
         106.972,
         39.026
        ],
        [
         106.968,
         39.055
        ],
        [
         106.934,
         39.077
        ],
        [
         106.879,
         39.091
        ],
        [
         106.859,
         39.108
        ],
        [
         106.825,
         39.194
        ],
        [
         106.796,
         39.214
        ],
        [
         106.791,
         39.241
        ],
        [
         106.806,
         39.277
        ],
        [
         106.807,
         39.319
        ],
        [
         106.782,
         39.372
        ],
        [
         106.751,
         39.382
        ],
        [
         106.684,
         39.358
        ],
        [
         106.644,
         39.358
        ],
        [
         106.602,
         39.376
        ],
        [
         106.556,
         39.322
        ],
        [
         106.525,
         39.308
        ],
        [
         106.512,
         39.272
        ],
        [
         106.403,
         39.292
        ],
        [
         106.28,
         39.262
        ],
        [
         106.296,
         39.168
        ],
        [
         106.285,
         39.146
        ],
        [
         106.251,
         39.131
        ],
        [
         106.193,
         39.143
        ],
        [
         106.171,
         39.163
        ],
        [
         106.146,
         39.153
        ],
        [
         106.097,
         39.085
        ],
        [
         106.078,
         39.026
        ],
        [
         106.087,
         39.006
        ],
        [
         106.061,
         38.969
        ],
        [
         106.021,
         38.954
        ],
        [
         105.971,
         38.909
        ],
        [
         105.993,
         38.857
        ],
        [
         105.909,
         38.791
        ],
        [
         105.908,
         38.737
        ],
        [
         105.886,
         38.717
        ],
        [
         105.895,
         38.696
        ],
        [
         105.853,
         38.642
        ],
        [
         105.874,
         38.593
        ],
        [
         105.856,
         38.57
        ],
        [
         105.864,
         38.535
        ],
        [
         105.837,
         38.476
        ],
        [
         105.851,
         38.444
        ],
        [
         105.827,
         38.432
        ],
        [
         105.835,
         38.387
        ],
        [
         105.821,
         38.367
        ],
        [
         105.866,
         38.296
        ],
        [
         105.842,
         38.241
        ],
        [
         105.803,
         38.22
        ],
        [
         105.775,
         38.187
        ],
        [
         105.768,
         38.121
        ],
        [
         105.781,
         38.085
        ],
        [
         105.84,
         38.004
        ],
        [
         105.8,
         37.94
        ],
        [
         105.804,
         37.862
        ],
        [
         105.761,
         37.8
        ],
        [
         105.677,
         37.772
        ],
        [
         105.622,
         37.778
        ],
        [
         105.616,
         37.723
        ],
        [
         105.599,
         37.699
        ],
        [
         105.467,
         37.695
        ],
        [
         105.404,
         37.71
        ],
        [
         105.315,
         37.702
        ],
        [
         105.222,
         37.677
        ],
        [
         105.188,
         37.658
        ],
        [
         105.111,
         37.634
        ],
        [
         105.028,
         37.581
        ],
        [
         104.95,
         37.574
        ],
        [
         104.95,
         37.08
        ],
        [
         104.954,
         37.077
        ],
        [
         104.955,
         37.04
        ],
        [
         105.005,
         37.035
        ],
        [
         105.04,
         37.007
        ],
        [
         105.059,
         37.023
        ],
        [
         105.105,
         37.005
        ],
        [
         106.653,
         37.005
        ],
        [
         106.667,
         37.017
        ],
        [
         106.645,
         37.065
        ],
        [
         106.605,
         37.128
        ],
        [
         106.617,
         37.135
        ],
        [
         106.673,
         37.111
        ],
        [
         106.688,
         37.13
        ],
        [
         106.729,
         37.121
        ],
        [
         106.75,
         37.099
        ],
        [
         106.773,
         37.12
        ],
        [
         106.776,
         37.158
        ],
        [
         106.819,
         37.142
        ],
        [
         106.891,
         37.098
        ],
        [
         106.912,
         37.11
        ],
        [
         106.906,
         37.151
        ],
        [
         106.998,
         37.107
        ],
        [
         107.031,
         37.108
        ],
        [
         107.03,
         37.141
        ],
        [
         107.096,
         37.116
        ],
        [
         107.134,
         37.135
        ],
        [
         107.182,
         37.143
        ],
        [
         107.235,
         37.097
        ],
        [
         107.269,
         37.099
        ]
       ]
      ]
     ]
    },
    "n": "宁夏回族自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        104.95,
        37.414
       ],
       [
        104.957,
        37.415
       ],
       [
        104.998,
        37.461
       ],
       [
        105.152,
        37.483
       ],
       [
        105.433,
        37.495
       ],
       [
        105.649,
        37.522
       ],
       [
        105.8,
        37.565
       ],
       [
        105.905,
        37.661
       ],
       [
        105.964,
        37.81
       ],
       [
        106.037,
        37.916
       ],
       [
        106.125,
        37.977
       ],
       [
        106.196,
        38.064
       ],
       [
        106.251,
        38.177
       ],
       [
        106.338,
        38.282
       ],
       [
        106.457,
        38.378
       ],
       [
        106.531,
        38.498
       ],
       [
        106.559,
        38.64
       ],
       [
        106.64,
        38.78
       ],
       [
        106.774,
        38.918
       ],
       [
        106.851,
        39.017
       ],
       [
        106.871,
        39.075
       ],
       [
        106.849,
        39.183
       ],
       [
        106.783,
        39.34
       ],
       [
        106.759,
        39.483
       ],
       [
        106.775,
        39.6
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   104.95,
   37.005,
   107.274,
   39.6
  ]
 }
};
