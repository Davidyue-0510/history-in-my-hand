// 本文件由 tools/build.py 自动生成（切片 xining），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xining"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xining"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "province": "qinghai",
  "title": "西宁（唐蕃古道·唃厮啰青唐城·塔尔寺）",
  "dossier_label": "西宁",
  "subtitle": "唐蕃古道 · 青唐城 · 塔尔寺 · 青海湖",
  "primary_place": "xining_city",
  "dossier_event": "event:ev_xining_01",
  "vocab_pack": "xining",
  "terrain_grid": "china_coarse",
  "lead": "西宁位于青藏高原东北缘、湟水谷地，古称青唐城。641年文成公主经青海道、日月山入藏和亲，开启了唐蕃长期交往。约1032年吐蕃后裔唃厮啰徙居青唐城，建立河湟地区最重要的吐蕃政权。明洪武十二年（1379），宗喀巴诞生地湟中始建塔尔寺，后成为藏传佛教格鲁派六大寺院之一与根本道场。青海湖古称西海，西汉曾设西海郡。湟水谷地的灌溉农业支撑了西宁城市的发展，丹噶尔古城则是明清茶马互市的重要集镇。西宁集唐蕃古道、青唐政权、格鲁派圣地与高原生态于一体，是青藏高原与中原文明交汇的节点。",
  "parties_note": "史料以汉书、旧唐书、宋史等官修为主，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_xining_01": "文成入藏",
   "event:ev_xining_02": "唃厮啰建城",
   "event:ev_xining_03": "塔尔寺始建",
   "place:xining_city": "青唐城",
   "person:wencheng_gongzhu": "文成公主"
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
    "note": "唐蕃和亲+唃厮啰政权+格鲁派塔尔寺→西宁多元政治与宗教认同"
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
    "note": "湟水灌溉+茶马互市+唐蕃古道+青唐道→西宁物资与交通基础"
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
    "note": "汉藏商旅+吐蕃部众+僧侣僧团+和亲队伍→多族群社会汇聚"
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
    "note": "湟水谷地+唐蕃古道+青海湖+西海郡→西宁控青藏高原东北门户"
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
  "page": "county.html?scene=xining",
  "key": "xining",
  "scene_id": "xining"
 },
 "sources": [
  {
   "id": "hanshu",
   "title": "汉书",
   "party": "汉·后朝官修",
   "stance_label": "汉后朝官修",
   "distance_label": "成书东汉明帝—章帝时，距楚汉约二百余年",
   "color": "#C0584F",
   "compiler": "班固（东汉）",
   "period": "汉",
   "note": "地理志、王莽传载西海郡设置与青海湖地区，东汉官修西汉史。"
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
   "note": "吐蕃传、地理志载文成公主入藏、唐蕃和亲与青海道，为唐蕃关系核心史料。"
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
   "note": "吐蕃传、唃厮啰传载青唐城、唃厮啰政权与宋夏青唐之争，元人修宋史，视角非宋当代。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "青海历史地理与藏传佛教综合研究",
   "period": "今",
   "note": "塔尔寺研究、青海历史地理、唐蕃古道考古等现代综合研究，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "xining_city",
   "name": "西宁/青唐城",
   "lon": 101.78,
   "lat": 36.62,
   "type": "古城/都城遗址",
   "modern": "青海省西宁市",
   "note": "古称青唐城，北宋时期为唃厮啰政权中心；明清为西宁卫/西宁府，是青藏高原东北门户与汉藏交通咽喉。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "西宁市中心近似坐标（101.78, 36.62），取自公开地理数据，待CHGIS精修",
   "elev": 2624
  },
  {
   "id": "qinghai_lake",
   "name": "青海湖",
   "lon": 100.13,
   "lat": 36.99,
   "type": "湖泊/自然地理标志",
   "modern": "青海省海南藏族自治州与海北藏族自治州之间",
   "note": "中国最大的内陆咸水湖，古称西海；西汉曾设西海郡，是青藏高原东北缘的生态与交通地标。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "青海湖中心近似坐标（100.13, 36.99），取自公开地理数据，待CHGIS精修",
   "elev": 3191
  },
  {
   "id": "taer_si",
   "name": "塔尔寺",
   "lon": 101.57,
   "lat": 36.49,
   "type": "寺庙/宗教圣地",
   "modern": "青海省西宁市湟中区",
   "note": "藏传佛教格鲁派（黄教）六大寺院之一，宗喀巴大师诞生地，始建于明洪武十二年（1379）。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "塔尔寺近似坐标（101.57, 36.49），取自公开地理数据，待CHGIS精修",
   "elev": 2924
  },
  {
   "id": "riyue_mountain",
   "name": "日月山",
   "lon": 101.05,
   "lat": 36.42,
   "type": "山口/交通地标",
   "modern": "青海省西宁市湟源县西南",
   "note": "唐蕃古道要隘，传说中文成公主入藏经此，是农耕区与游牧区的自然与历史分界线。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "日月山近似坐标（101.05, 36.42），取自公开地理数据，待CHGIS精修",
   "elev": 3608
  },
  {
   "id": "huangshui_river",
   "name": "湟水/西宁河谷",
   "lon": 101.8,
   "lat": 36.62,
   "type": "河流/农业区",
   "modern": "青海省东部，流经西宁市",
   "note": "黄河上游重要支流，湟水谷地是西宁平原农业、人口与城市发展的基础。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "湟水西宁段近似坐标（101.80, 36.62），取自公开地理数据，待CHGIS精修",
   "elev": 2609
  },
  {
   "id": "dangeer_old_city",
   "name": "丹噶尔古城",
   "lon": 101.25,
   "lat": 36.69,
   "type": "古城/商贸遗址",
   "modern": "青海省西宁市湟源县",
   "note": "明清时期茶马互市与汉藏贸易重镇，有「海藏咽喉」「茶马商都」之称。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "丹噶尔古城近似坐标（101.25, 36.69），取自公开地理数据，待CHGIS精修",
   "elev": 3368
  }
 ],
 "persons": [
  {
   "id": "wencheng_gongzhu",
   "name": "文成公主",
   "era": "唐",
   "role": "唐宗室女·吐蕃赞普松赞干布王妃",
   "note": "641年奉唐太宗命入藏和亲，经青海道、日月山入吐蕃，被后世视为汉藏文化交流的象征人物。",
   "influence": 0
  },
  {
   "id": "gusiluo",
   "name": "唃厮啰",
   "era": "北宋",
   "role": "青唐吐蕃政权首领",
   "note": "吐蕃赞普后裔，约1032年以青唐城（今西宁）为中心建立政权，与宋、夏并立于河湟地区。",
   "influence": 0
  },
  {
   "id": "tsongkhapa",
   "name": "宗喀巴",
   "era": "明",
   "role": "藏传佛教格鲁派创始人",
   "note": "1357年出生于今青海湟中，后创立格鲁派（黄教）；其诞生地后建塔尔寺，成为格鲁派根本道场。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "XN_R01",
   "subject": "event:ev_xining_01",
   "predicate": "文成公主入藏过青海，唐蕃和亲",
   "value_text": "641年，唐太宗以文成公主嫁吐蕃赞普松赞干布，公主一行经青海道、日月山入藏，开启了唐蕃之间长期的政治与文化交往。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "riyue_mountain",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "贞观十五年，文成公主出降吐蕃赞普弄赞，诏江夏王道宗持节送公主入藏，由青海道逾日月山（旧唐书·吐蕃传）。",
   "note": "事件（和亲）+ 社会（汉藏交往）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XN_R02",
   "subject": "event:ev_xining_02",
   "predicate": "唃厮啰筑青唐城，建吐蕃政权",
   "value_text": "约1032年，吐蕃后裔唃厮啰徙居青唐城（今西宁），以此为都建立政权，成为北宋时期河湟地区最重要的吐蕃势力中心。",
   "value": "",
   "source": "songshi",
   "layer": "record",
   "era": "北宋",
   "place": "xining_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "唃厮啰者，绪出赞普之后，景祐中徙居青唐，拥众数万，立文法，自为蕃部君长（宋史·吐蕃传）。",
   "note": "事件（建城）+ 制度（政权）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "XN_R03",
   "subject": "event:ev_xining_03",
   "predicate": "塔尔寺始建，纪念宗喀巴",
   "value_text": "1379年，宗喀巴大师的母亲与众信徒在其出生地湟中修建莲聚宝塔，后渐成塔尔寺，成为格鲁派六大寺院之一。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "明",
   "place": "taer_si",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "明洪武十二年，宗喀巴诞生地湟中始建莲聚宝塔，后扩建为塔尔寺，遂成格鲁派根本道场（塔尔寺志/ 现代考订）。",
   "note": "事件（建寺）+ 思想（佛教）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_R04",
   "subject": "place:xining_city",
   "predicate": "青唐城为唃厮啰政权中心，控河湟要地",
   "value_text": "青唐城位于今青海西宁，北宋时期为唃厮啰政权都城，控扼河湟谷地，是青藏高原与中原之间的军政枢纽。",
   "value": "",
   "source": "songshi",
   "layer": "record",
   "era": "北宋",
   "place": "xining_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "青唐城据湟水之会，东距秦州，西通青海，南控吐蕃，为河湟根本（宋史·吐蕃传）。",
   "note": "地理（都城）+ 制度（军政）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "XN_R05",
   "subject": "place:qinghai_lake",
   "predicate": "汉设西海郡，青海湖为西北地理标志",
   "value_text": "青海湖古称西海，西汉平帝元始年间王莽摄政时设西海郡，青海湖成为中原王朝经略青藏高原东北缘的地理标志。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "西汉",
   "place": "qinghai_lake",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "莽诱塞外羌献西海之地，置西海郡，徙天下犯禁者处之（汉书·王莽传/ 地理志）。",
   "note": "地理（湖泊）+ 事件（设郡）。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "XN_R06",
   "subject": "place:taer_si",
   "predicate": "塔尔寺为宗喀巴诞生地与格鲁派圣地",
   "value_text": "塔尔寺位于今青海湟中，是藏传佛教格鲁派创始人宗喀巴的诞生地，始建于明，为格鲁派六大寺院之一。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "明",
   "place": "taer_si",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "塔尔寺在湟中县鲁沙尔镇，为宗喀巴大师降生之地，明洪武间建塔，后成格鲁派根本道场（塔尔寺志/ 现代考订）。",
   "note": "地理（寺院）+ 思想（佛教）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_S01",
   "subject": "place:qinghai_lake",
   "predicate": "青海湖是高原—河西走廊之间的生态缓冲与游牧中心",
   "value_text": "青海湖周边草原是青藏高原东北缘的重要牧场，历史上是吐谷浑、吐蕃、蒙古等游牧势力与河西走廊农耕政权之间的生态与战略缓冲地带。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "唐—清",
   "place": "qinghai_lake",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "青海湖盆地连接河西走廊与青藏高原，是游牧、农耕与交通网络的交汇地带（青海历史地理研究）。",
   "note": "地理（生态）+ 社会（游牧）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_S02",
   "subject": "place:riyue_mountain",
   "predicate": "日月山是唐蕃古道地标与农牧分界线",
   "value_text": "日月山位于西宁西南，是唐蕃古道必经之地，也是黄土高原农耕区与青藏高原游牧区的自然与文化分界线。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "唐",
   "place": "riyue_mountain",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "公主自日月山入吐蕃，山界东西，西皆羌戎牧场，东为农耕之地（旧唐书·吐蕃传/ 后世地理志研究）。",
   "note": "地理（山口）+ 思想（分界象征）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XN_S03",
   "subject": "person:tsongkhapa",
   "predicate": "宗喀巴创立格鲁派，塔尔寺成为根本道场",
   "value_text": "宗喀巴在西藏创立格鲁派，强调戒律与显密并重；其诞生地湟中因塔尔寺而成为格鲁派信徒心中的圣地。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "明",
   "place": "taer_si",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "宗喀巴改革藏传佛教，创立格鲁派；其诞生地建塔尔寺，遂成该派根本道场与朝圣中心（藏传佛教史研究）。",
   "note": "思想（教派）+ 事件（建寺）。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_I01",
   "subject": "place:huangshui_river",
   "predicate": "湟水谷地是西宁农业、人口与城市发展的基础",
   "value_text": "湟水及其支流冲刷形成的河谷平原，是青藏高原东北缘少见的宜农地带，支撑了西宁城市的兴起与人口集聚。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "huangshui_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "湟水谷地海拔较低、灌溉便利，为青藏高原东北缘主要农业区，西宁因之而成聚落中心（学界历史地理推论）。",
   "note": "地理（河谷）+ 技术（水利）+ 社会（农业）。",
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
   "id": "XN_I02",
   "subject": "place:dangeer_old_city",
   "predicate": "丹噶尔古城是明清茶马互市与汉藏贸易节点",
   "value_text": "丹噶尔古城位于西宁以西湟源县，明清时期是汉藏、农牧产品交换的集镇，有「茶马商都」之称。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "dangeer_old_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "丹噶尔为青海东路门户，明清设厅，商贾云集，茶马互市繁盛，为汉藏贸易枢纽（学界边疆经济史推论）。",
   "note": "制度（贸易）+ 社会（商帮）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_I03",
   "subject": "place:xining_city",
   "predicate": "西宁控唐蕃古道与丝绸之路南道交汇",
   "value_text": "西宁地处湟水谷地，东接关中，西通西域，南入吐蕃，是唐蕃古道、丝绸之路南道与青唐道的交汇枢纽。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "inference",
   "era": "唐—宋",
   "place": "xining_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "由长安经鄯州、日月山入吐蕃，或由河西逾祁连入青海，西宁常为中转之会（学界交通史/ 唐蕃古道研究推论）。",
   "note": "地理（节点）+ 制度（交通）+ 社会（商旅）。",
   "dims": [
    1,
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XN_I04",
   "subject": "place:taer_si",
   "predicate": "塔尔寺艺术与教育推动河湟地区佛教文化扩散",
   "value_text": "塔尔寺除宗教功能外，还发展出壁画、酥油花、堆绣等艺术形式，并承担僧侣教育，影响了河湟乃至安多地区的佛教文化。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明—清",
   "place": "taer_si",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "塔尔寺艺术三绝与显密学经制度，使河湟地区成为安多藏传佛教文化中心（学界宗教艺术推论）。",
   "note": "技术（艺术）+ 思想（教育）+ 社会（僧团）。",
   "dims": [
    2,
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_I05",
   "subject": "person:wencheng_gongzhu",
   "predicate": "文成公主入藏促进中原文化与佛教在青海道传播",
   "value_text": "文成公主入藏队伍携带典籍、工匠与佛教文物，经青海道沿途停留，促进了中原制度、技术与佛教形象在河湟—吐蕃一线的传播。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "inference",
   "era": "唐",
   "place": "riyue_mountain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "公主入蕃，携释典、营造、医药、蚕桑之工，沿途传习，汉藏文化因之交融（学界唐蕃交流史推论）。",
   "note": "社会（文化传播）+ 思想（佛教）+ 事件（和亲）。",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "XN_G01",
   "subject": "place:xining_city",
   "predicate": "青唐城早期城址与唃厮啰时期街道布局公开有限",
   "value_text": "唃厮啰时期青唐城的具体城垣范围、街道布局、宫殿与市场区考古资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "北宋",
   "place": "xining_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：青唐城城市考古。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "青唐城遗址城墙基址、道路网、官署与宗教建筑考古",
    "skills": [
     "城市考古",
     "吐蕃史",
     "宋史"
    ],
    "accept": "若有城垣基址测绘或唃厮啰时期建筑遗迹报告，可补技术(2)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_G02",
   "subject": "place:taer_si",
   "predicate": "塔尔寺早期建筑层与宗喀巴故居考古公开有限",
   "value_text": "塔尔寺建寺初期建筑布局、宗喀巴出生民居遗址及明代以前地层考古资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明",
   "place": "taer_si",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：塔尔寺早期建筑考古。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "塔尔寺早期殿塔基址、宗喀巴故居遗址与明代以前地层发掘",
    "skills": [
     "佛教考古",
     "建筑史",
     "藏传佛教史"
    ],
    "accept": "若有早期建筑测绘或地层报告，可补技术(2)/思想(5)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "XN_G03",
   "subject": "place:qinghai_lake",
   "predicate": "青海湖古代水文变化与西海郡治所确切位置公开有限",
   "value_text": "西汉西海郡治所的具体位置、青海湖历史时期水位变化及周边古代聚落分布，公开资料有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "西汉",
   "place": "qinghai_lake",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：古湖泊与郡治考古。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "青海湖周边西海郡城址勘探、古水文沉积与汉代聚落考古",
    "skills": [
     "历史地理",
     "考古学",
     "环境科学"
    ],
    "accept": "若有西海郡城址坐标或古水位重建数据，可补地理(1)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XN_G01",
  "XN_G02",
  "XN_G03"
 ],
 "events": [
  {
   "id": "ev_xining_01",
   "year": 641,
   "era": "唐贞观十五年",
   "kind": "和亲",
   "title": "文成公主入藏过青海，唐蕃和亲",
   "place": "riyue_mountain",
   "text": "641年，唐太宗以文成公主嫁吐蕃赞普松赞干布，公主一行经青海道、日月山入藏，开启了唐蕃之间长期的政治与文化交往。",
   "subject": "event:ev_xining_01"
  },
  {
   "id": "ev_xining_02",
   "year": 1032,
   "era": "北宋景祐五年/西夏大庆元年",
   "kind": "建城",
   "title": "唃厮啰筑青唐城，建吐蕃政权",
   "place": "xining_city",
   "text": "约1032年，吐蕃后裔唃厮啰徙居青唐城（今西宁），以此为都建立政权，成为北宋时期河湟地区最重要的吐蕃势力中心。",
   "subject": "event:ev_xining_02"
  },
  {
   "id": "ev_xining_03",
   "year": 1379,
   "era": "明洪武十二年",
   "kind": "建寺",
   "title": "塔尔寺始建，纪念宗喀巴",
   "place": "taer_si",
   "text": "1379年，宗喀巴大师的母亲与众信徒在其出生地湟中修建莲聚宝塔，后渐成塔尔寺，成为格鲁派六大寺院之一与藏传佛教圣地。",
   "subject": "event:ev_xining_03"
  }
 ],
 "edges": [
  {
   "from": "xining_city",
   "to": "qinghai_lake",
   "relation": "向西北约150公里",
   "note": "西宁经唐蕃古道向西北可达青海湖，青海湖是青藏高原东北缘的生态与交通地标。",
   "label": "向西北约150公里",
   "type": "misc"
  },
  {
   "from": "xining_city",
   "to": "taer_si",
   "relation": "西南约25公里",
   "note": "塔尔寺位于西宁西南湟中区，是宗喀巴诞生地，与西宁共同构成河湟佛教文化中心。",
   "label": "西南约25公里",
   "type": "misc"
  },
  {
   "from": "xining_city",
   "to": "riyue_mountain",
   "relation": "西南约90公里",
   "note": "日月山位于西宁西南的唐蕃古道上，是文成公主入藏行经之地与农牧分界线。",
   "label": "西南约90公里",
   "type": "misc"
  },
  {
   "from": "xining_city",
   "to": "dangeer_old_city",
   "relation": "向西约50公里",
   "note": "丹噶尔古城位于西宁以西湟源县，是明清时期汉藏茶马互市的重要集镇。",
   "label": "向西约50公里",
   "type": "misc"
  },
  {
   "from": "huangshui_river",
   "to": "xining_city",
   "relation": "穿城而过",
   "note": "湟水及其支流贯穿西宁河谷，为西宁城市、农业与人口提供水源与交通廊道。",
   "label": "穿城而过",
   "type": "misc"
  }
 ],
 "control": [
  {
   "place_id": "riyue_mountain",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  },
  {
   "place_id": "xining_city",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  },
  {
   "place_id": "taer_si",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  },
  {
   "place_id": "qinghai_lake",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  },
  {
   "place_id": "huangshui_river",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  },
  {
   "place_id": "dangeer_old_city",
   "party": "学界",
   "start": 641,
   "end": 1379,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "riyue_mountain",
   "name": "日月山",
   "lon": 101.05,
   "lat": 36.42,
   "region": "xibei"
  },
  {
   "place_id": "xining_city",
   "name": "西宁/青唐城",
   "lon": 101.78,
   "lat": 36.62,
   "region": "xibei"
  },
  {
   "place_id": "taer_si",
   "name": "塔尔寺",
   "lon": 101.57,
   "lat": 36.49,
   "region": "xibei"
  },
  {
   "place_id": "qinghai_lake",
   "name": "青海湖",
   "lon": 100.13,
   "lat": 36.99,
   "region": "xibei"
  },
  {
   "place_id": "huangshui_river",
   "name": "湟水/西宁河谷",
   "lon": 101.8,
   "lat": 36.62,
   "region": "xibei"
  },
  {
   "place_id": "dangeer_old_city",
   "name": "丹噶尔古城",
   "lon": 101.25,
   "lat": 36.69,
   "region": "xibei"
  }
 ],
 "control_years": [
  641,
  1379
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
   "汉·后朝官修",
   "五代·官修",
   "元·官修",
   "学界"
  ],
  "party_bucket": {
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "元·官修": "元·官修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
   "元·官修": "#6C7A89",
   "学界": "#2E7D8F"
  },
  "factions": {
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
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·后朝官修": "#C0584F",
   "f_五代·官修": "#7A6A53",
   "f_元·官修": "#6C7A89",
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
        99.13,
        35.42
       ],
       [
        99.13,
        37.99
       ],
       [
        102.8,
        37.99
       ],
       [
        102.8,
        35.42
       ],
       [
        99.13,
        35.42
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
         102.8,
         35.42
        ],
        [
         102.8,
         37.99
        ],
        [
         100.999,
         37.99
        ],
        [
         101.077,
         37.942
        ],
        [
         101.103,
         37.947
        ],
        [
         101.114,
         37.92
        ],
        [
         101.152,
         37.891
        ],
        [
         101.159,
         37.868
        ],
        [
         101.203,
         37.847
        ],
        [
         101.277,
         37.837
        ],
        [
         101.363,
         37.791
        ],
        [
         101.383,
         37.822
        ],
        [
         101.459,
         37.866
        ],
        [
         101.552,
         37.836
        ],
        [
         101.598,
         37.828
        ],
        [
         101.67,
         37.754
        ],
        [
         101.659,
         37.733
        ],
        [
         101.792,
         37.696
        ],
        [
         101.816,
         37.654
        ],
        [
         101.855,
         37.665
        ],
        [
         101.873,
         37.687
        ],
        [
         101.946,
         37.728
        ],
        [
         101.999,
         37.725
        ],
        [
         102.036,
         37.685
        ],
        [
         102.049,
         37.652
        ],
        [
         102.035,
         37.628
        ],
        [
         102.102,
         37.582
        ],
        [
         102.131,
         37.546
        ],
        [
         102.103,
         37.483
        ],
        [
         102.125,
         37.485
        ],
        [
         102.177,
         37.459
        ],
        [
         102.197,
         37.42
        ],
        [
         102.3,
         37.391
        ],
        [
         102.299,
         37.37
        ],
        [
         102.368,
         37.328
        ],
        [
         102.428,
         37.309
        ],
        [
         102.419,
         37.294
        ],
        [
         102.453,
         37.271
        ],
        [
         102.458,
         37.248
        ],
        [
         102.49,
         37.223
        ],
        [
         102.533,
         37.217
        ],
        [
         102.578,
         37.173
        ],
        [
         102.6,
         37.175
        ],
        [
         102.642,
         37.1
        ],
        [
         102.583,
         37.105
        ],
        [
         102.488,
         37.078
        ],
        [
         102.506,
         37.019
        ],
        [
         102.45,
         36.968
        ],
        [
         102.5,
         36.955
        ],
        [
         102.526,
         36.928
        ],
        [
         102.561,
         36.92
        ],
        [
         102.587,
         36.87
        ],
        [
         102.639,
         36.853
        ],
        [
         102.72,
         36.768
        ],
        [
         102.692,
         36.776
        ],
        [
         102.639,
         36.733
        ],
        [
         102.613,
         36.738
        ],
        [
         102.601,
         36.71
        ],
        [
         102.631,
         36.651
        ],
        [
         102.684,
         36.619
        ],
        [
         102.724,
         36.614
        ],
        [
         102.715,
         36.599
        ],
        [
         102.762,
         36.569
        ],
        [
         102.734,
         36.562
        ],
        [
         102.753,
         36.526
        ],
        [
         102.793,
         36.498
        ],
        [
         102.772,
         36.474
        ],
        [
         102.8,
         36.421
        ],
        [
         102.8,
         35.857
        ],
        [
         102.787,
         35.863
        ],
        [
         102.739,
         35.821
        ],
        [
         102.715,
         35.816
        ],
        [
         102.686,
         35.772
        ],
        [
         102.708,
         35.705
        ],
        [
         102.744,
         35.658
        ],
        [
         102.764,
         35.653
        ],
        [
         102.763,
         35.612
        ],
        [
         102.8,
         35.57
        ],
        [
         102.8,
         35.558
        ],
        [
         102.747,
         35.545
        ],
        [
         102.729,
         35.523
        ],
        [
         102.783,
         35.528
        ],
        [
         102.743,
         35.495
        ],
        [
         102.695,
         35.528
        ],
        [
         102.571,
         35.548
        ],
        [
         102.532,
         35.58
        ],
        [
         102.503,
         35.585
        ],
        [
         102.499,
         35.545
        ],
        [
         102.438,
         35.455
        ],
        [
         102.448,
         35.437
        ],
        [
         102.423,
         35.42
        ],
        [
         102.369,
         35.42
        ],
        [
         102.315,
         35.434
        ],
        [
         102.294,
         35.424
        ],
        [
         102.293,
         35.42
        ],
        [
         102.8,
         35.42
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
         102.8,
         36.421
        ],
        [
         102.772,
         36.474
        ],
        [
         102.793,
         36.498
        ],
        [
         102.753,
         36.526
        ],
        [
         102.734,
         36.562
        ],
        [
         102.762,
         36.569
        ],
        [
         102.715,
         36.599
        ],
        [
         102.724,
         36.614
        ],
        [
         102.684,
         36.619
        ],
        [
         102.631,
         36.651
        ],
        [
         102.601,
         36.71
        ],
        [
         102.613,
         36.738
        ],
        [
         102.639,
         36.733
        ],
        [
         102.692,
         36.776
        ],
        [
         102.72,
         36.768
        ],
        [
         102.639,
         36.853
        ],
        [
         102.587,
         36.87
        ],
        [
         102.561,
         36.92
        ],
        [
         102.526,
         36.928
        ],
        [
         102.5,
         36.955
        ],
        [
         102.45,
         36.968
        ],
        [
         102.506,
         37.019
        ],
        [
         102.488,
         37.078
        ],
        [
         102.583,
         37.105
        ],
        [
         102.642,
         37.1
        ],
        [
         102.6,
         37.175
        ],
        [
         102.578,
         37.173
        ],
        [
         102.533,
         37.217
        ],
        [
         102.49,
         37.223
        ],
        [
         102.458,
         37.248
        ],
        [
         102.453,
         37.271
        ],
        [
         102.419,
         37.294
        ],
        [
         102.428,
         37.309
        ],
        [
         102.368,
         37.328
        ],
        [
         102.299,
         37.37
        ],
        [
         102.3,
         37.391
        ],
        [
         102.197,
         37.42
        ],
        [
         102.177,
         37.459
        ],
        [
         102.125,
         37.485
        ],
        [
         102.103,
         37.483
        ],
        [
         102.131,
         37.546
        ],
        [
         102.102,
         37.582
        ],
        [
         102.035,
         37.628
        ],
        [
         102.049,
         37.652
        ],
        [
         102.036,
         37.685
        ],
        [
         101.999,
         37.725
        ],
        [
         101.946,
         37.728
        ],
        [
         101.873,
         37.687
        ],
        [
         101.855,
         37.665
        ],
        [
         101.816,
         37.654
        ],
        [
         101.792,
         37.696
        ],
        [
         101.659,
         37.733
        ],
        [
         101.67,
         37.754
        ],
        [
         101.598,
         37.828
        ],
        [
         101.552,
         37.836
        ],
        [
         101.459,
         37.866
        ],
        [
         101.383,
         37.822
        ],
        [
         101.363,
         37.791
        ],
        [
         101.277,
         37.837
        ],
        [
         101.203,
         37.847
        ],
        [
         101.159,
         37.868
        ],
        [
         101.152,
         37.891
        ],
        [
         101.114,
         37.92
        ],
        [
         101.103,
         37.947
        ],
        [
         101.077,
         37.942
        ],
        [
         100.999,
         37.99
        ],
        [
         99.13,
         37.99
        ],
        [
         99.13,
         35.42
        ],
        [
         102.293,
         35.42
        ],
        [
         102.294,
         35.424
        ],
        [
         102.315,
         35.434
        ],
        [
         102.369,
         35.42
        ],
        [
         102.423,
         35.42
        ],
        [
         102.448,
         35.437
        ],
        [
         102.438,
         35.455
        ],
        [
         102.499,
         35.545
        ],
        [
         102.503,
         35.585
        ],
        [
         102.532,
         35.58
        ],
        [
         102.571,
         35.548
        ],
        [
         102.695,
         35.528
        ],
        [
         102.743,
         35.495
        ],
        [
         102.783,
         35.528
        ],
        [
         102.729,
         35.523
        ],
        [
         102.747,
         35.545
        ],
        [
         102.8,
         35.558
        ],
        [
         102.8,
         35.57
        ],
        [
         102.763,
         35.612
        ],
        [
         102.764,
         35.653
        ],
        [
         102.744,
         35.658
        ],
        [
         102.708,
         35.705
        ],
        [
         102.686,
         35.772
        ],
        [
         102.715,
         35.816
        ],
        [
         102.739,
         35.821
        ],
        [
         102.787,
         35.863
        ],
        [
         102.8,
         35.857
        ],
        [
         102.8,
         36.421
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        100.169,
        35.42
       ],
       [
        100.166,
        35.424
       ],
       [
        100.172,
        35.543
       ],
       [
        100.255,
        35.695
       ],
       [
        100.334,
        35.774
       ],
       [
        100.409,
        35.777
       ],
       [
        100.546,
        35.869
       ],
       [
        100.744,
        36.05
       ],
       [
        100.898,
        36.142
       ],
       [
        101.009,
        36.145
       ],
       [
        101.071,
        36.135
       ],
       [
        101.085,
        36.112
       ],
       [
        101.176,
        36.089
       ],
       [
        101.343,
        36.065
       ],
       [
        101.495,
        36.086
       ],
       [
        101.63,
        36.151
       ],
       [
        101.763,
        36.152
       ],
       [
        101.893,
        36.086
       ],
       [
        101.993,
        35.997
       ],
       [
        102.064,
        35.886
       ],
       [
        102.185,
        35.845
       ],
       [
        102.356,
        35.873
       ],
       [
        102.61,
        35.86
       ],
       [
        102.8,
        35.83
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        100.753,
        36.811
       ],
       [
        100.746,
        36.781
       ],
       [
        100.723,
        36.745
       ],
       [
        100.723,
        36.673
       ],
       [
        100.704,
        36.589
       ],
       [
        100.628,
        36.557
       ],
       [
        100.523,
        36.58
       ],
       [
        100.431,
        36.641
       ],
       [
        100.228,
        36.645
       ],
       [
        99.958,
        36.679
       ],
       [
        99.827,
        36.739
       ],
       [
        99.7,
        36.853
       ],
       [
        99.65,
        36.911
       ],
       [
        99.681,
        36.947
       ],
       [
        99.762,
        36.948
       ],
       [
        99.816,
        36.955
       ],
       [
        99.834,
        36.988
       ],
       [
        99.804,
        37.067
       ],
       [
        99.787,
        37.149
       ],
       [
        99.836,
        37.182
       ],
       [
        99.956,
        37.218
       ],
       [
        100.104,
        37.202
       ],
       [
        100.275,
        37.15
       ],
       [
        100.448,
        37.025
       ],
       [
        100.586,
        36.903
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ]
      ]
     ]
    },
    "n": "Qinghai Hu"
   }
  ],
  "_bbox": [
   99.13,
   35.42,
   102.8,
   37.99
  ]
 }
};
