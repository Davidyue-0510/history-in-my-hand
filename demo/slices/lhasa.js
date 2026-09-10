// 本文件由 tools/build.py 自动生成（切片 lhasa），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lhasa"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lhasa"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "province": "xizang",
  "title": "拉萨（逻娑·吐蕃都城·布达拉宫·唐蕃会盟碑）",
  "dossier_label": "拉萨",
  "subtitle": "逻娑 · 布达拉宫 · 大昭寺 · 唐蕃会盟碑",
  "primary_place": "lhasa_city",
  "dossier_event": "event:ev_lhasa_01",
  "vocab_pack": "lhasa",
  "terrain_grid": "china_coarse",
  "lead": "拉萨古称逻娑，位于青藏高原中部拉萨河谷，是吐蕃王朝都城、唐蕃古道终点与藏传佛教格鲁派根本道场所在。约633年松赞干布迁都逻娑；641年文成公主经青海道入藏和亲，开启唐蕃长期交往；约647年始建大昭寺；822年唐蕃长庆会盟，汉藏双语碑立于大昭寺前。清顺治二年（1645）五世达赖喇嘛重建布达拉宫，拉萨遂成格鲁派政教中心。雅鲁藏布江—拉萨河谷是青藏高原南北交通与唐蕃—青藏走廊枢纽，罗布林卡夏宫体现藏汉园林技术交融。拉萨集吐蕃王统、唐蕃盟约与格鲁派圣地于一体，是青藏高原文明交汇的节点。",
  "parties_note": "史料以汉书、旧唐书、宋史等官修为主，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_lhasa_01": "文成入藏",
   "event:ev_lhasa_02": "大昭寺始建",
   "event:ev_lhasa_03": "布宫重建",
   "place:lhasa_city": "逻娑",
   "person:ngawang_lobsang_gyatso": "五世达赖"
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
    "note": "吐蕃王朝+唐蕃会盟+格鲁派政教合一→拉萨多元政治与宗教秩序"
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
    "note": "拉萨河谷灌溉+茶马互市+布宫营造+汉藏商旅→拉萨物资与交通基础"
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
    "note": "吐蕃臣民+汉地工匠+尼泊尔商僧+朝圣信众→多族群高原社会"
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
    "note": "雅鲁藏布江—拉萨河谷+唐蕃—青藏走廊+布宫政教→拉萨控青藏高原中心"
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
  "page": "county.html?scene=lhasa",
  "key": "lhasa",
  "scene_id": "lhasa"
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
   "note": "西域传载西域诸国与羌中道，为中原认知青藏东北缘与吐蕃周边的最早系统汉文坐标。"
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
   "note": "吐蕃传载文成公主入藏、松赞干布迁都逻娑、大昭寺始建与唐蕃会盟，为唐蕃关系核心史料。"
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
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "西藏历史地理与藏传佛教综合研究",
   "period": "今",
   "note": "布达拉宫志、拉萨历史地理、唐蕃古道与藏传佛教研究等现代综合研究，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "lhasa_city",
   "name": "拉萨/逻娑",
   "lon": 91.14,
   "lat": 29.65,
   "type": "古城/都城遗址",
   "modern": "西藏自治区拉萨市",
   "note": "古称逻娑，吐蕃王朝都城；唐蕃古道终点、藏传佛教格鲁派根本道场所在，青藏高原政治与宗教中心。",
   "geo_match": "approx",
   "geo_note": "拉萨市中心近似坐标（91.14, 29.65），取自公开地理数据，待CHGIS精修",
   "elev": 4093
  },
  {
   "id": "potala",
   "name": "布达拉宫",
   "lon": 91.117,
   "lat": 29.657,
   "type": "宫殿/宗教圣地",
   "modern": "西藏自治区拉萨市城关区",
   "note": "初为松赞干布红山宫，五世达赖1645年重建扩建；宫堡、寺院、灵塔合一，藏传佛教与政教合一象征。",
   "geo_match": "approx",
   "geo_note": "布达拉宫近似坐标（91.117, 29.657），取自公开地理数据，待CHGIS精修",
   "elev": 4103
  },
  {
   "id": "jokhang",
   "name": "大昭寺",
   "lon": 91.132,
   "lat": 29.653,
   "type": "寺庙/宗教圣地",
   "modern": "西藏自治区拉萨市城关区八廓街",
   "note": "约647年松赞干布时期始建，供奉释迦牟尼像；唐蕃会盟碑立于寺前，汉藏商旅与朝圣交汇中心。",
   "geo_match": "approx",
   "geo_note": "大昭寺近似坐标（91.132, 29.653），取自公开地理数据，待CHGIS精修",
   "elev": 4099
  },
  {
   "id": "lhasa_river",
   "name": "拉萨河/吉曲",
   "lon": 91.13,
   "lat": 29.66,
   "type": "河流/农业区",
   "modern": "西藏自治区拉萨市",
   "note": "雅鲁藏布江支流，纵贯拉萨河谷，灌溉便利，是拉萨城市、农业与人口发展的基础。",
   "geo_match": "approx",
   "geo_note": "拉萨河拉萨段近似坐标（91.13, 29.66），取自公开地理数据，待CHGIS精修",
   "elev": 4137
  },
  {
   "id": "yarlung_tsangpo",
   "name": "雅鲁藏布江",
   "lon": 91.1,
   "lat": 29.4,
   "type": "河流/地理标志",
   "modern": "西藏自治区拉萨市以南",
   "note": "拉萨河谷段为青藏高原南北交通与唐蕃—青藏走廊枢纽，东接工布、西连后藏、北通青海。",
   "geo_match": "approx",
   "geo_note": "雅鲁藏布江拉萨段近似坐标（91.10, 29.40），取自公开地理数据，待CHGIS精修",
   "elev": 4365
  },
  {
   "id": "norbulingka",
   "name": "罗布林卡",
   "lon": 91.09,
   "lat": 29.64,
   "type": "园林/夏宫",
   "modern": "西藏自治区拉萨市城关区",
   "note": "清乾隆以来历代达赖夏宫，融藏式园林与汉地营造之法，是藏、汉、蒙古园林技术交融实例。",
   "geo_match": "approx",
   "geo_note": "罗布林卡近似坐标（91.09, 29.64），取自公开地理数据，待CHGIS精修",
   "elev": 4033
  }
 ],
 "persons": [
  {
   "id": "songtsen_gampo",
   "name": "松赞干布",
   "era": "唐",
   "role": "吐蕃赞普",
   "note": "约617—650年在位，统一吐蕃、迁都逻娑（拉萨）、迎娶文成公主，奠定吐蕃王朝与唐蕃交往格局。",
   "influence": 1
  },
  {
   "id": "wencheng_gongzhu",
   "name": "文成公主",
   "era": "唐",
   "role": "唐宗室女·吐蕃赞普松赞干布王妃",
   "note": "641年奉唐太宗命入藏和亲，经青海道入吐蕃，被后世视为汉藏文化交流的象征人物。",
   "influence": 0
  },
  {
   "id": "ngawang_lobsang_gyatso",
   "name": "五世达赖喇嘛",
   "era": "清",
   "role": "格鲁派领袖·布达拉宫重建者",
   "note": "1617—1682年，受清廷册封、主政卫藏，1645年重建布达拉宫，确立拉萨为格鲁派政教中心。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "LH_R01",
   "subject": "event:ev_lhasa_01",
   "predicate": "文成公主入藏和亲，唐蕃结盟",
   "value_text": "641年，唐太宗以宗室女文成公主嫁吐蕃赞普松赞干布，公主经青海道入吐蕃，唐蕃之间长期的政治与文化交往由此开启。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "lhasa_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "贞观十五年，以宗女文成公主妻吐蕃赞普弄赞，弄赞遣使请婚，帝许之，以公主妻之（旧唐书·吐蕃传）。",
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
   "id": "LH_R02",
   "subject": "place:lhasa_city",
   "predicate": "松赞干布迁都逻娑，拉萨为吐蕃政治中心",
   "value_text": "约633年，吐蕃赞普松赞干布迁都逻娑（今拉萨），拉萨自此成为吐蕃王朝的政治与宗教中心。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "lhasa_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "弄赞迁都逻娑，雄才粉饰，都城立于红山，号令吐蕃诸部（旧唐书·吐蕃传/ 后世地理志）。",
   "note": "地理（都城）+ 制度（政权）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LH_R03",
   "subject": "event:ev_lhasa_02",
   "predicate": "松赞干布时期始建大昭寺，供养释迦像",
   "value_text": "约647年，松赞干布为文成公主始建大昭寺（逻娑），供奉释迦牟尼像，成为吐蕃佛教弘传与汉藏交往的核心圣地。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "jokhang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "贞观中，弄赞为公主筑城邑以居，大昭寺因之始建，以供释迦像（旧唐书·吐蕃传/ 西藏佛教史）。",
   "note": "事件（建寺）+ 思想（佛教）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LH_R04",
   "subject": "place:jokhang",
   "predicate": "唐蕃长庆会盟，汉藏双语碑立于逻娑",
   "value_text": "822年（唐长庆二年），唐与吐蕃会盟，汉藏双语的唐蕃会盟碑立于逻娑大昭寺前，是唐蕃关系与汉藏盟约的制度性物证。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "jokhang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "长庆元年，吐蕃遣使请盟，二年盟于京师，又遣使赴逻娑，立汉蕃双语碑于大昭寺前（旧唐书·吐蕃传）。",
   "note": "地理（碑址）+ 制度（盟约）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LH_R05",
   "subject": "event:ev_lhasa_03",
   "predicate": "五世达赖1645年重建布达拉宫",
   "value_text": "布达拉宫初为松赞干布所建红山宫，五世达赖喇嘛于清顺治二年（1645）大规模重建扩建，遂成今日宫堡之制。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "清",
   "place": "potala",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "布达拉宫初为松赞干布红山宫，五世达赖喇嘛于清顺治二年（1645）大规模重建，遂成今制（布达拉宫志/ 现代考订）。",
   "note": "事件（重建）+ 技术（藏式营造）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_R06",
   "subject": "person:ngawang_lobsang_gyatso",
   "predicate": "五世达赖受清廷册封，拉萨为格鲁派政教中心",
   "value_text": "五世达赖喇嘛受清廷册封、主政卫藏，以拉萨为格鲁派根本道场，布达拉宫为冬宫，拉萨成为藏传佛教政教中心。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "清",
   "place": "potala",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "五世达赖喇嘛受清廷册封，主政卫藏，以拉萨为格鲁派政教中心，布达拉宫为冬宫（清实录/ 现代考订）。",
   "note": "制度（册封）+ 思想（佛教中心）。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_S01",
   "subject": "place:lhasa_city",
   "predicate": "汉书·西域传为吐蕃周边最早汉文系统坐标",
   "value_text": "汉书·西域传记载西域诸国与羌中道，河湟—羌中一线是中原认知青藏高原东北缘与吐蕃周边地缘的最早系统汉文坐标。",
   "value": "",
   "source": "hanshu",
   "layer": "scholarship",
   "era": "汉—唐",
   "place": "lhasa_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "汉书·西域传 载西域诸国与羌中道，河湟—羌中一线为中原认知青藏东北缘之最早系统坐标（汉书·西域传）。",
   "note": "地理（地缘坐标）+ 思想（认知史）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "LH_S02",
   "subject": "place:potala",
   "predicate": "红山（玛布日）与拉萨河谷的地理形胜",
   "value_text": "逻娑（拉萨）据红山（玛布日）之下，临拉萨河谷，形胜天成，吐蕃据此立都、营建宫堡。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "唐",
   "place": "potala",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "逻娑据红山（玛布日）之下，临拉萨河谷，形胜天成，吐蕃因之立都（旧唐书·吐蕃传/ 西藏历史地理研究）。",
   "note": "地理（山—谷形胜）+ 思想（象征）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "LH_S03",
   "subject": "person:songtsen_gampo",
   "predicate": "吐蕃王朝后裔在宋代的延续",
   "value_text": "吐蕃王朝瓦解后，其裔散处河湟、青唐之间，宋史·吐蕃传载其君长世代，可视作拉萨吐蕃王统在宋代的延续。",
   "value": "",
   "source": "songshi",
   "layer": "scholarship",
   "era": "宋",
   "place": "lhasa_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "吐蕃之裔散处河湟、青唐间，宋史·吐蕃传 载其君长世代，为拉萨吐蕃王统之延续（宋史·吐蕃传）。",
   "note": "制度（王统延续）+ 思想（族群记忆）。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "LH_I01",
   "subject": "place:lhasa_river",
   "predicate": "拉萨河灌溉支撑河谷农业与聚落",
   "value_text": "拉萨河（吉曲）纵贯河谷，灌溉便利，为宜农宜居之地，支撑了拉萨城市的兴起与人口集聚。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "lhasa_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "拉萨河（吉曲）纵贯河谷，灌溉便利，为宜农宜居之地，聚落因之兴起（学界历史地理推论）。",
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
   "id": "LH_I02",
   "subject": "place:yarlung_tsangpo",
   "predicate": "雅鲁藏布江—拉萨河谷是青藏南北交通节点",
   "value_text": "雅鲁藏布江—拉萨河谷东接工布、西连后藏，北逾唐古拉通青海，是青藏高原南北交通与唐蕃—青藏走廊的枢纽节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "yarlung_tsangpo",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "雅鲁藏布江—拉萨河谷东接工布、西连后藏，北逾唐古拉通青海，为青藏高原南北交通节点（学界交通史推论）。",
   "note": "地理（节点）+ 制度（交通）+ 社会（商旅）。",
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
   "id": "LH_I03",
   "subject": "place:jokhang",
   "predicate": "大昭寺—八廓街是汉藏尼泊尔商旅与朝圣交汇",
   "value_text": "大昭寺周环八廓街，汉、藏、尼泊尔商僧与朝圣者汇聚，形成青藏高原的宗教—商贸复合节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "jokhang",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "大昭寺周环八廓街，汉、藏、尼泊尔商僧与朝圣者汇聚，形成宗教—商贸复合节点（学界社会经济史推论）。",
   "note": "制度（互市）+ 社会（商旅）+ 思想（朝圣）。",
   "dims": [
    3,
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_I04",
   "subject": "place:potala",
   "predicate": "布达拉宫是政教合一象征，整合卫藏政治与佛教",
   "value_text": "布达拉宫集宫堡、寺院、灵塔于一体，象征政教合一，整合卫藏地区的政治权威与藏传佛教宗教权威。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清—今",
   "place": "potala",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "布达拉宫集宫堡、寺院、灵塔于一体，象征政教合一，整合卫藏政治与藏传佛教权威（学界政治史/ 宗教史推论）。",
   "note": "制度（政教合一）+ 思想（佛教权威）+ 事件（象征）。",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_I05",
   "subject": "place:norbulingka",
   "predicate": "罗布林卡夏宫体现清—藏—汉园林技术交融",
   "value_text": "罗布林卡夏宫融藏式园林与汉地营造之法，是清代以来藏、汉、蒙古园林技术交融的实例。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清—今",
   "place": "norbulingka",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "罗布林卡夏宫融藏式园林与汉地营造之法，为清—藏—汉技术交融之例（学界建筑史推论）。",
   "note": "技术（园林）+ 社会（宫廷）+ 思想（交融）。",
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
   "id": "LH_G01",
   "subject": "place:potala",
   "predicate": "松赞干布时期红山宫原始形制考古公开有限",
   "value_text": "松赞干布所建红山宫的原始城垣范围、宫殿形制与吐蕃时期地层考古资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "potala",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：松赞干布红山宫原始形制。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "布达拉宫红山宫早期建筑基址、吐蕃时期地层与营造工艺考古",
    "skills": [
     "吐蕃考古",
     "建筑史",
     "藏式营造"
    ],
    "accept": "若有松赞干布时期红山宫基址或地层报告，可补技术(2)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_G02",
   "subject": "place:jokhang",
   "predicate": "大昭寺始建确切年份与早期地层考古公开有限",
   "value_text": "大昭寺始建的确切年份、唐代以前地层与释迦殿早期营造工艺的考古资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "jokhang",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：大昭寺始建年份与早期地层。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "大昭寺始建确切年份、唐代以前地层与释迦殿早期营造考古",
    "skills": [
     "佛教考古",
     "建筑史",
     "吐蕃史"
    ],
    "accept": "若有始建年份碑铭或早期地层报告，可补地理(1)/技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LH_G03",
   "subject": "place:yarlung_tsangpo",
   "predicate": "吐蕃时期拉萨聚落人口规模公开有限",
   "value_text": "吐蕃时期拉萨（逻娑）聚落的具体范围、人口规模与族群构成，公开资料有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "yarlung_tsangpo",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：吐蕃时期拉萨聚落人口。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "吐蕃时期拉萨（逻娑）聚落范围、人口与族群构成考古",
    "skills": [
     "历史人口",
     "吐蕃史",
     "考古学"
    ],
    "accept": "若有聚落面积测绘或人口估算，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "LH_G01",
  "LH_G02",
  "LH_G03"
 ],
 "events": [
  {
   "id": "ev_lhasa_01",
   "year": 641,
   "era": "唐贞观十五年",
   "kind": "和亲",
   "title": "文成公主入藏和亲，唐蕃结盟",
   "place": "lhasa_city",
   "text": "641年，唐太宗以宗室女文成公主嫁吐蕃赞普松赞干布，公主经青海道入吐蕃，开启了唐蕃之间长期的政治与文化交往。",
   "subject": "event:ev_lhasa_01"
  },
  {
   "id": "ev_lhasa_02",
   "year": 647,
   "era": "唐贞观二十一年",
   "kind": "建寺",
   "title": "松赞干布时期始建大昭寺",
   "place": "jokhang",
   "text": "约647年，松赞干布为文成公主始建大昭寺（逻娑），供奉释迦牟尼像，成为吐蕃佛教弘传与汉藏交往的核心圣地。",
   "subject": "event:ev_lhasa_02"
  },
  {
   "id": "ev_lhasa_03",
   "year": 1645,
   "era": "清顺治二年",
   "kind": "重建",
   "title": "五世达赖重建布达拉宫",
   "place": "potala",
   "text": "布达拉宫初为松赞干布所建红山宫，五世达赖喇嘛于清顺治二年（1645）大规模重建扩建，遂成今日宫堡之制，拉萨成为格鲁派政教中心。",
   "subject": "event:ev_lhasa_03"
  }
 ],
 "edges": [
  {
   "from": "lhasa_city",
   "to": "potala",
   "relation": "城北红山",
   "note": "布达拉宫位于拉萨城北红山（玛布日）之上，与拉萨城区共同构成吐蕃—格鲁派政教中心。",
   "label": "城北红山",
   "type": "misc"
  },
  {
   "from": "lhasa_city",
   "to": "jokhang",
   "relation": "城心八廓",
   "note": "大昭寺位于拉萨城心，周环八廓街，是汉藏尼泊尔商旅与朝圣者的交汇节点。",
   "label": "城心八廓",
   "type": "misc"
  },
  {
   "from": "lhasa_river",
   "to": "lhasa_city",
   "relation": "穿城而过",
   "note": "拉萨河（吉曲）纵贯拉萨河谷，为城市、农业与人口提供水源与交通廊道。",
   "label": "穿城而过",
   "type": "misc"
  },
  {
   "from": "lhasa_city",
   "to": "yarlung_tsangpo",
   "relation": "南临约25公里",
   "note": "拉萨城区南临雅鲁藏布江，河谷是青藏高原南北交通与唐蕃—青藏走廊的枢纽节点。",
   "label": "南临约25公里",
   "type": "misc"
  },
  {
   "from": "norbulingka",
   "to": "potala",
   "relation": "西南约2公里",
   "note": "罗布林卡夏宫位于布达拉宫西南，与布宫共同构成达赖的冬夏政治—宗教空间。",
   "label": "西南约2公里",
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
        90.09,
        28.4
       ],
       [
        90.09,
        30.66
       ],
       [
        92.14,
        30.66
       ],
       [
        92.14,
        28.4
       ],
       [
        90.09,
        28.4
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
         90.09,
         30.66
        ],
        [
         90.09,
         28.4
        ],
        [
         92.14,
         28.4
        ],
        [
         92.14,
         30.66
        ],
        [
         90.09,
         30.66
        ]
       ]
      ]
     ]
    },
    "n": "西藏自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       90.09,
       29.359
      ],
      [
       90.218,
       29.344
      ],
      [
       90.321,
       29.315
      ],
      [
       90.392,
       29.274
      ],
      [
       90.506,
       29.278
      ],
      [
       90.662,
       29.329
      ],
      [
       90.746,
       29.34
      ],
      [
       90.759,
       29.31
      ],
      [
       90.786,
       29.308
      ],
      [
       90.828,
       29.332
      ],
      [
       90.897,
       29.337
      ],
      [
       91.038,
       29.317
      ],
      [
       92.076,
       29.281
      ],
      [
       92.14,
       29.273
      ]
     ]
    },
    "n": "Yarlung"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        90.346,
        30.524
       ],
       [
        90.314,
        30.573
       ],
       [
        90.299,
        30.66
       ],
       [
        90.746,
        30.66
       ],
       [
        90.714,
        30.641
       ],
       [
        90.596,
        30.596
       ],
       [
        90.346,
        30.524
       ],
       [
        90.346,
        30.524
       ],
       [
        90.346,
        30.524
       ]
      ]
     ]
    },
    "n": "Nam Co"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        90.931,
        28.923
       ],
       [
        90.89,
        28.934
       ],
       [
        90.867,
        28.927
       ],
       [
        90.856,
        28.928
       ],
       [
        90.835,
        28.933
       ],
       [
        90.808,
        28.938
       ],
       [
        90.768,
        28.914
       ],
       [
        90.752,
        28.875
       ],
       [
        90.739,
        28.866
       ],
       [
        90.715,
        28.883
       ],
       [
        90.67,
        28.864
       ],
       [
        90.631,
        28.838
       ],
       [
        90.59,
        28.797
       ],
       [
        90.566,
        28.787
       ],
       [
        90.535,
        28.786
       ],
       [
        90.508,
        28.804
       ],
       [
        90.479,
        28.835
       ],
       [
        90.454,
        28.86
       ],
       [
        90.447,
        28.878
       ],
       [
        90.456,
        28.887
       ],
       [
        90.474,
        28.885
       ],
       [
        90.492,
        28.87
       ],
       [
        90.51,
        28.859
       ],
       [
        90.53,
        28.861
       ],
       [
        90.561,
        28.874
       ],
       [
        90.594,
        28.903
       ],
       [
        90.621,
        28.939
       ],
       [
        90.647,
        28.975
       ],
       [
        90.672,
        29.011
       ],
       [
        90.664,
        29.047
       ],
       [
        90.659,
        29.089
       ],
       [
        90.654,
        29.126
       ],
       [
        90.63,
        29.151
       ],
       [
        90.59,
        29.167
       ],
       [
        90.534,
        29.165
       ],
       [
        90.477,
        29.145
       ],
       [
        90.424,
        29.111
       ],
       [
        90.388,
        29.093
       ],
       [
        90.386,
        29.107
       ],
       [
        90.424,
        29.138
       ],
       [
        90.503,
        29.188
       ],
       [
        90.562,
        29.211
       ],
       [
        90.633,
        29.192
       ],
       [
        90.692,
        29.161
       ],
       [
        90.729,
        29.13
       ],
       [
        90.726,
        29.109
       ],
       [
        90.719,
        29.094
       ],
       [
        90.721,
        29.072
       ],
       [
        90.73,
        29.052
       ],
       [
        90.768,
        29.012
       ],
       [
        90.788,
        28.991
       ],
       [
        90.829,
        28.989
       ],
       [
        90.844,
        29.013
       ],
       [
        90.876,
        29.024
       ],
       [
        90.919,
        29.021
       ],
       [
        90.963,
        29.003
       ],
       [
        90.992,
        28.978
       ],
       [
        90.988,
        28.951
       ],
       [
        91.003,
        28.904
       ],
       [
        90.993,
        28.892
       ],
       [
        90.956,
        28.912
       ],
       [
        90.931,
        28.923
       ],
       [
        90.931,
        28.923
       ],
       [
        90.931,
        28.923
       ],
       [
        90.931,
        28.923
       ]
      ]
     ]
    },
    "n": "Yamzho Yumco"
   }
  ],
  "_bbox": [
   90.09,
   28.4,
   92.14,
   30.66
  ]
 }
};
