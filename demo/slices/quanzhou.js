// 本文件由 tools/build.py 自动生成（切片 quanzhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["quanzhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["quanzhou"] = {
 "meta": {
  "kind": "county",
  "region": "jiangnan",
  "province": "fujian",
  "title": "泉州（刺桐港·海丝起点）",
  "dossier_label": "泉州",
  "subtitle": "宋元刺桐港 · 市舶司 · 蕃商云集 · 多教并存",
  "primary_place": "quanzhou_cheng",
  "dossier_event": "event:ev_quanzhou_01",
  "vocab_pack": "quanzhou",
  "terrain_grid": "china_coarse",
  "lead": "泉州为宋元海上丝路东方大港，1087 年设市舶司、1276 年蒲寿庚降元、西人记其为世界大港。下方为设官、易代与西人记载三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以泉州府志、宋史、元史等后世/官修为本，诸蕃志、岛夷志略为私修航海见闻，现代考订作学界补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_quanzhou_01": "设市舶司",
   "event:ev_quanzhou_02": "蒲寿庚降元",
   "event:ev_quanzhou_03": "西人记大港",
   "place:quanzhou_cheng": "泉州城",
   "place:citong_gang": "刺桐港",
   "person:pubaigeng": "蒲寿庚"
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
    "note": "市舶司制度+海洋商贸思想→中央专营海贸税利，泉州为东方大港之基"
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
    "note": "造船/航海技术+市舶制度→刺桐港舟舶之利、番货堆积，海路连埃及波斯"
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
    "note": "蕃商番客侨居+市舶管理→多元族群社会，沿海商业化"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→泉州扼海上丝路东端，辖澎湖控东海—南海通道"
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
  "page": "county.html?scene=quanzhou",
  "key": "quanzhou",
  "scene_id": "quanzhou"
 },
 "sources": [
  {
   "id": "quanzhou_fuzhi",
   "title": "泉州府志",
   "party": "后世官修",
   "distance_label": "明·阳思谦等修（万历），清屡修，距宋元事约 400–700 年",
   "stance_label": "地方志·后世官修",
   "compiler": "《泉州府志》（万历本及清续修本）",
   "color": "#A0473A",
   "period": "明/清"
  },
  {
   "id": "zhufanzhi",
   "title": "诸蕃志（赵汝适）",
   "party": "宋·私修",
   "distance_label": "南宋赵汝适撰（宝庆，约 1225），距事最近数十年",
   "stance_label": "南宋宗室·市舶司提举私修地理志",
   "compiler": "赵汝适（南宋）",
   "color": "#8E7CC3",
   "period": "宋"
  },
  {
   "id": "songshi",
   "title": "宋史",
   "party": "元·官修",
   "distance_label": "成书元顺帝至正五年（1345），距事约340年",
   "stance_label": "后朝官修",
   "compiler": "脱脱等（元）",
   "color": "#6C7A89",
   "period": "元",
   "note": "本纪·真宗纪、寇准传载澶渊之事，元人修宋史，视角非宋当代"
  },
  {
   "id": "yuan_shi",
   "title": "元史",
   "party": "明修官史",
   "distance_label": "1369 年修成，距元亡仅一年但史源杂糅未及考订",
   "stance_label": "后朝官修·仓促成书",
   "compiler": "宋濂等",
   "color": "#6C5C3E",
   "period": "明修"
  },
  {
   "id": "daoyi_zhilue",
   "title": "岛夷志略（汪大渊）",
   "party": "元·私修",
   "distance_label": "元汪大渊撰（至正，约 1349），距事最近",
   "stance_label": "元航海家私修海外见闻录",
   "compiler": "汪大渊（元）",
   "color": "#7E8CA8",
   "period": "元"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "海上丝路与泉州港历史地理综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "quanzhou_cheng",
   "name": "泉州城（刺桐城）",
   "lon": 118.583,
   "lat": 24.907,
   "type": "capital",
   "modern": "今福建泉州市鲤城区（历史城区）",
   "note": "宋元泉州府治，刺桐城。历史城区核心在开元寺—清净寺一带。",
   "geo_note": "approx·公开地理数据（城市级，约1km），待CHGIS/天地图精修",
   "geo_match": "approx",
   "elev": 39
  },
  {
   "id": "citong_gang",
   "name": "刺桐港（后渚港）",
   "lon": 118.695,
   "lat": 24.905,
   "type": "port",
   "modern": "今泉州丰泽区东海·后渚港区",
   "note": "宋元泉州外港，番舶云集。后渚港为元代主要港区之一。",
   "geo_note": "approx·公开地理数据（港区级，约1km），待CHGIS精修",
   "geo_match": "approx",
   "elev": 15
  },
  {
   "id": "jinjiang",
   "name": "晋江（入海口）",
   "lon": 118.6,
   "lat": 24.8,
   "type": "river",
   "modern": "晋江下游入海口（今泉州湾南岸）",
   "note": "晋江绕城东入海，为城舶淡水补给与内河转运所资。",
   "geo_note": "approx·公开地理数据（河口级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 11
  },
  {
   "id": "quanzhou_wan",
   "name": "泉州湾",
   "lon": 118.75,
   "lat": 24.88,
   "type": "bay",
   "modern": "今泉州湾（东海—洛阳江口之间）",
   "note": "三面据海、避风良港，为刺桐港天然形胜。",
   "geo_note": "approx·公开地理数据（海域级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 9
  },
  {
   "id": "qingjing_si",
   "name": "清净寺（艾苏哈卜寺）",
   "lon": 118.587,
   "lat": 24.906,
   "type": "mosque",
   "modern": "今泉州鲤城区涂门街·清净寺",
   "note": "北宋大中祥符二年（1009）阿拉伯穆斯林所建，中国现存最古清真寺之一。坐标据丝绸之路遗产数据库世遗点中心坐标（24°54′21″N 118°35′13″E）。",
   "geo_note": "权威源·丝绸之路遗产数据库(silkroads.org.cn) 泉州世遗点中心坐标，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 38
  },
  {
   "id": "kaiyuan_si",
   "name": "开元寺",
   "lon": 118.581,
   "lat": 24.917,
   "type": "temple",
   "modern": "今泉州鲤城区西街·开元寺",
   "note": "唐垂拱二年（686）始建，宋元妈祖/海商供养之佛教中心。坐标据丝绸之路遗产数据库世遗点中心坐标（24°55′01″N 118°34′52″E）。",
   "geo_note": "权威源·丝绸之路遗产数据库(silkroads.org.cn) 泉州世遗点中心坐标，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 42
  },
  {
   "id": "cao_an",
   "name": "草庵（摩尼光佛）",
   "lon": 118.53,
   "lat": 24.774,
   "type": "shrine",
   "modern": "今晋江市罗山镇华表山·草庵",
   "note": "世界上唯一现存摩尼教石窟造像。坐标据丝绸之路遗产数据库世遗点中心坐标（24°46′25″N 118°31′47″E）。",
   "geo_note": "权威源·丝绸之路遗产数据库(silkroads.org.cn) 泉州世遗点中心坐标，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 16
  },
  {
   "id": "luoyang_qiao",
   "name": "洛阳桥（万安桥）",
   "lon": 118.672,
   "lat": 24.958,
   "type": "bridge",
   "modern": "今泉州惠安县洛阳镇·洛阳桥",
   "note": "北宋皇祐—嘉祐间（1053–1059）建，跨洛阳江入海口，海丝造桥技术代表。坐标据丝绸之路遗产数据库世遗点中心坐标（24°57′30″N 118°40′18″E）。",
   "geo_note": "权威源·丝绸之路遗产数据库(silkroads.org.cn) 泉州世遗点中心坐标，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 28
  },
  {
   "id": "penghu",
   "name": "澎湖",
   "lon": 119.553,
   "lat": 23.571,
   "type": "islands",
   "modern": "今台湾省澎湖县（群岛）",
   "note": "宋元于澎湖设巡检司，辖琉求，为泉州海丝南延与东海—南海通道节点。",
   "geo_note": "approx·公开地理数据（群岛级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 0
  }
 ],
 "persons": [
  {
   "id": "pubaigeng",
   "name": "蒲寿庚",
   "role": "泉州市舶司提举·降元",
   "side": "yuan",
   "note": "（约 1227–1290）本阿拉伯裔，仕宋掌泉州市舶，景炎元年（1276）以城降元。兼具蕃商血统与宋官身份，为宋元海贸与蕃汉融合之关键人物。",
   "influence": 0
  },
  {
   "id": "zhaorukuo",
   "name": "赵汝适",
   "role": "南宋·市舶司提举·诸蕃志作者",
   "side": "song",
   "note": "（1170–1231）南宋宗室，提举福建路市舶，撰《诸蕃志》记海外诸国风物与舟舶之利，为研究宋代数贸易之要籍。",
   "influence": 0
  },
  {
   "id": "wangdayuan",
   "name": "汪大渊",
   "role": "元·岛夷志略作者",
   "side": "yuan",
   "note": "（约 1311–1350）元航海家，两下西洋，撰《岛夷志略》记二百余国航路物产，补足诸蕃志之后海外见闻。",
   "influence": 0
  },
  {
   "id": "makeboluo",
   "name": "马可波罗",
   "role": "元·外来旅行者",
   "side": "foreign",
   "note": "（1254–1324）威尼斯商人，元初游历中国，归国后口述《马可波罗行纪》盛称刺桐（泉州）为世界大港。",
   "influence": 0
  },
  {
   "id": "yibenbaitai",
   "name": "伊本·白图泰",
   "role": "元·外来旅行者",
   "side": "foreign",
   "note": "（1304–1377）摩洛哥旅行家，1340年代游历泉州，记其清真寺、蕃商与市舶之盛，与马可波罗相印证。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "QZ_R01",
   "subject": "place:quanzhou_cheng",
   "predicate": "地理形胜",
   "value_text": "泉州位于福建东南沿海，晋江入海口北岸，扼泉州湾，为天然良港",
   "value": null,
   "source": "quanzhou_fuzhi",
   "layer": "record",
   "era": "宋元",
   "place": "quanzhou_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "泉州……东南负山面海，为海丝要港。",
   "note": "泉州府志·舆地；现代历史地理综合",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QZ_R02",
   "subject": "event:ev_quanzhou_01",
   "predicate": "设官",
   "value_text": "北宋元祐二年（1087）复置市舶司于泉州，掌海上贸易征税",
   "value": 1087,
   "source": "songshi",
   "layer": "record",
   "era": "元祐二年",
   "place": "quanzhou_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "元祐二年，复置市舶司于泉州。",
   "note": "宋史·食货志下（市舶）",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "QZ_R03",
   "subject": "event:ev_quanzhou_02",
   "predicate": "易代降附",
   "value_text": "南宋景炎元年（1276）蒲寿庚以泉州城及市舶之利降元",
   "value": 1276,
   "source": "yuan_shi",
   "layer": "record",
   "era": "景炎元年",
   "place": "quanzhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（蒲寿庚）以城降。",
   "note": "元史·世祖纪；蒲寿庚传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "QZ_R04",
   "subject": "place:qingjing_si",
   "predicate": "宗教并存",
   "value_text": "泉州有清净寺（1009）、开元寺、草庵摩尼光佛等多教并存遗迹",
   "value": 1009,
   "source": "quanzhou_fuzhi",
   "layer": "record",
   "era": "北宋",
   "place": "qingjing_si",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（清净寺）宋绍兴元年建，艾苏哈卜寺也。",
   "note": "泉州府志·寺观；世遗点清净寺、开元寺、草庵",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QZ_R05",
   "subject": "place:citong_gang",
   "predicate": "造船技术",
   "value_text": "宋元泉州造尖底福船，远洋航行，大者载数百人",
   "value": null,
   "source": "zhufanzhi",
   "layer": "record",
   "era": "南宋",
   "place": "citong_gang",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "舶大者数百人。",
   "note": "诸蕃志·志物（舟舶）；转述待核",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "QZ_R06",
   "subject": "place:quanzhou_cheng",
   "predicate": "蕃商社会",
   "value_text": "阿拉伯、波斯、南亚蕃商番客侨居泉州，立蕃坊",
   "value": null,
   "source": "songshi",
   "layer": "record",
   "era": "宋",
   "place": "quanzhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "蕃商大抵居泉州，号蕃坊。",
   "note": "宋史·大食传/蕃商；转述待核",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "QZ_S01",
   "subject": "place:citong_gang",
   "predicate": "航海技术",
   "value_text": "指南针罗盘航海在宋代已成熟，泉州为应用前沿",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "citong_gang",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "舟师识地理，夜则观星，昼则观日，阴晦则观指南针。",
   "note": "学界考证（朱彧萍洲可谈等）；具体年代有异说",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QZ_S02",
   "subject": "event:ev_quanzhou_03",
   "predicate": "西人记载",
   "value_text": "马可波罗（1290s）、伊本·白图泰（1340s）均记泉州为世界大港",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "citong_gang",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（刺桐）为世界最大港之一。",
   "note": "西人记载与方志互证；到访年代有出入",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QZ_S03",
   "subject": "event:ev_quanzhou_01",
   "predicate": "市舶制度",
   "value_text": "市舶司抽解（关税）加博买（官市）为宋代海贸管理范式",
   "value": null,
   "source": "songshi",
   "layer": "scholarship",
   "era": "今",
   "place": "quanzhou_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "宋史·食货志；学界制度史综述",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "QZ_I01",
   "subject": "place:quanzhou_wan",
   "predicate": "地理形胜",
   "value_text": "泉州湾避风、晋江淡水补给，三面据海，为天然良港形胜",
   "value": null,
   "source": "quanzhou_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "quanzhou_wan",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据泉州府志地形与港湾描述推断",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QZ_I02",
   "subject": "place:citong_gang",
   "predicate": "造船技术",
   "value_text": "水密隔舱造船术降低远洋风险，为泉州海舶远洋优势之一",
   "value": null,
   "source": "daoyi_zhilue",
   "layer": "inference",
   "era": "推算",
   "place": "citong_gang",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据岛夷志略舟舶记载与造船史推断",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "元·私修",
   "_faction": null
  },
  {
   "id": "QZ_I03",
   "subject": "person:pubaigeng",
   "predicate": "社会结构",
   "value_text": "蒲寿庚家族兼具阿拉伯血统与宋官身份，体现蕃汉融合社会结构",
   "value": null,
   "source": "yuan_shi",
   "layer": "inference",
   "era": "推算",
   "place": "quanzhou_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据元史蒲寿庚传身份记载推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "QZ_I04",
   "subject": "place:qingjing_si",
   "predicate": "思想底色",
   "value_text": "多教并存反映宋元泉州重商容异的海洋商贸思想底色",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "qingjing_si",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据多教遗迹并存现象推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QZ_I05",
   "subject": "event:ev_quanzhou_01",
   "predicate": "制度布局",
   "value_text": "市舶司置于泉州而非福州，反映中央对海贸税利的专门经营",
   "value": null,
   "source": "songshi",
   "layer": "inference",
   "era": "推算",
   "place": "quanzhou_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据宋史职官与地理志推断",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "QZ_G01",
   "subject": "place:citong_gang",
   "predicate": "造船工艺",
   "value_text": "福船水密隔舱具体工艺与单船载重量，方志载而不详",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "citong_gang",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "福船水密隔舱工艺与载重量",
    "skills": [
     "考据",
     "造船史"
    ],
    "accept": "需宋元造船考古与方志互证"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QZ_G02",
   "subject": "place:quanzhou_cheng",
   "predicate": "蕃坊治理",
   "value_text": "蕃坊内部治理（蕃长职掌、司法自治程度）史料缺口",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "quanzhou_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "蕃坊内部治理与蕃长职掌",
    "skills": [
     "考据",
     "海外贸易史"
    ],
    "accept": "需宋元法令与蕃商碑刻互证"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "QZ_G03",
   "subject": "event:ev_quanzhou_02",
   "predicate": "降元决策",
   "value_text": "蒲寿庚降元决策过程与兵力部署，详载缺失，仅见结果",
   "value": null,
   "source": "yuan_shi",
   "layer": "gap",
   "era": "今",
   "place": "quanzhou_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "蒲寿庚降元决策过程与兵力",
    "skills": [
     "考据",
     "军事史"
    ],
    "accept": "需宋元之际军政史料对勘"
   },
   "_party": "明修官史",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "QZ_G01",
  "QZ_G02",
  "QZ_G03"
 ],
 "events": [
  {
   "id": "ev_quanzhou_01",
   "year": 1087,
   "era": "元祐二年",
   "kind": "设官",
   "title": "复置市舶司于泉州",
   "place": "quanzhou_cheng",
   "text": "北宋元祐二年（1087），于泉州设福建路市舶司，掌海外贸易之征榷、博买与蕃商管理。刺桐港由此渐为东方第一大港。",
   "subject": "event:ev_quanzhou_01"
  },
  {
   "id": "ev_quanzhou_02",
   "year": 1276,
   "era": "景炎元年",
   "kind": "易代",
   "title": "蒲寿庚以泉州降元",
   "place": "quanzhou_cheng",
   "text": "南宋景炎元年（1276），权掌泉州市舶的蒲寿庚以城降元，市舶之利尽归于元，泉州在海丝网络中的地位不坠反盛。",
   "subject": "event:ev_quanzhou_02"
  },
  {
   "id": "ev_quanzhou_03",
   "year": 1320,
   "era": "元中期",
   "kind": "交流",
   "title": "西人记泉州为世界大港",
   "place": "citong_gang",
   "text": "马可波罗（约1290年代离华）、伊本·白图泰（1340年代游历）皆记述泉州（刺桐）为世界最大港口之一，番货堆积、蕃商云集。",
   "subject": "event:ev_quanzhou_03"
  }
 ],
 "edges": [
  {
   "from": "quanzhou_cheng",
   "to": "citong_gang",
   "type": "geo",
   "label": "刺桐港附城为泉州外港，番舶出入"
  },
  {
   "from": "quanzhou_cheng",
   "to": "jinjiang",
   "type": "geo",
   "label": "晋江绕城东入海，淡水补给与内河转运"
  },
  {
   "from": "quanzhou_cheng",
   "to": "quanzhou_wan",
   "type": "geo",
   "label": "泉州湾三面据海，避风良港形胜"
  },
  {
   "from": "quanzhou_cheng",
   "to": "qingjing_si",
   "type": "mem",
   "label": "清净寺为阿拉伯蕃商所建，宗教并存之证"
  },
  {
   "from": "quanzhou_cheng",
   "to": "kaiyuan_si",
   "type": "mem",
   "label": "开元寺为海商供养的佛教中心"
  },
  {
   "from": "quanzhou_cheng",
   "to": "cao_an",
   "type": "mem",
   "label": "草庵摩尼光佛，世界唯一摩尼教石窟造像"
  },
  {
   "from": "quanzhou_cheng",
   "to": "luoyang_qiao",
   "type": "geo",
   "label": "洛阳桥跨洛阳江，海丝造桥技术代表"
  },
  {
   "from": "quanzhou_cheng",
   "to": "penghu",
   "type": "admin",
   "label": "澎湖巡检司辖琉求，海丝南延控东海—南海"
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
   "宋·私修",
   "元·官修",
   "元·私修",
   "明修官史",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "宋·私修": "宋·私修",
   "元·官修": "元·官修",
   "元·私修": "元·私修",
   "明修官史": "明修官史",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "宋·私修": "#8E7CC3",
   "元·官修": "#6C7A89",
   "元·私修": "#7E8CA8",
   "明修官史": "#6C5C3E",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_宋·私修": {
    "name": "宋·私修",
    "macro_party": "宋·私修",
    "note": "auto"
   },
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_元·私修": {
    "name": "元·私修",
    "macro_party": "元·私修",
    "note": "auto"
   },
   "f_明修官史": {
    "name": "明修官史",
    "macro_party": "明修官史",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A",
   "f_宋·私修": "#8E7CC3",
   "f_元·官修": "#6C7A89",
   "f_元·私修": "#7E8CA8",
   "f_明修官史": "#6C5C3E",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       120.553,
       24.353
      ],
      [
       120.159,
       23.709
      ],
      [
       120.132,
       23.653
      ],
      [
       120.125,
       23.527
      ],
      [
       120.143,
       23.399
      ],
      [
       120.121,
       23.305
      ],
      [
       120.086,
       23.212
      ],
      [
       120.072,
       23.15
      ],
      [
       120.083,
       23.094
      ],
      [
       120.122,
       23.037
      ],
      [
       120.15,
       22.975
      ],
      [
       120.233,
       22.718
      ],
      [
       120.273,
       22.627
      ],
      [
       120.308,
       22.571
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.339,
       24.469
      ],
      [
       118.287,
       24.477
      ],
      [
       118.295,
       24.436
      ],
      [
       118.433,
       24.414
      ],
      [
       118.451,
       24.456
      ],
      [
       118.407,
       24.522
      ],
      [
       118.339,
       24.469
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.077,
       24.501
      ],
      [
       118.089,
       24.489
      ],
      [
       118.091,
       24.446
      ],
      [
       118.15,
       24.436
      ],
      [
       118.183,
       24.496
      ],
      [
       118.171,
       24.519
      ],
      [
       118.104,
       24.552
      ],
      [
       118.093,
       24.541
      ],
      [
       118.077,
       24.501
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       119.797,
       25.623
      ],
      [
       119.778,
       25.653
      ],
      [
       119.723,
       25.639
      ],
      [
       119.696,
       25.591
      ],
      [
       119.723,
       25.551
      ],
      [
       119.699,
       25.495
      ],
      [
       119.7,
       25.433
      ],
      [
       119.747,
       25.411
      ],
      [
       119.821,
       25.457
      ],
      [
       119.832,
       25.48
      ],
      [
       119.809,
       25.508
      ],
      [
       119.839,
       25.56
      ],
      [
       119.838,
       25.591
      ],
      [
       119.829,
       25.607
      ],
      [
       119.797,
       25.623
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.53,
        23.85
       ],
       [
        117.579,
        23.857
       ],
       [
        117.628,
        23.837
       ],
       [
        117.668,
        23.939
       ],
       [
        117.742,
        24.015
       ],
       [
        117.839,
        24.012
       ],
       [
        117.904,
        24.106
       ],
       [
        118.056,
        24.246
       ],
       [
        118.051,
        24.327
       ],
       [
        118.024,
        24.38
       ],
       [
        117.879,
        24.396
       ],
       [
        117.848,
        24.432
       ],
       [
        117.843,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.935,
        24.474
       ],
       [
        118.006,
        24.482
       ],
       [
        118.014,
        24.56
       ],
       [
        118.087,
        24.627
       ],
       [
        118.195,
        24.626
       ],
       [
        118.295,
        24.573
       ],
       [
        118.412,
        24.601
       ],
       [
        118.56,
        24.58
       ],
       [
        118.657,
        24.621
       ],
       [
        118.719,
        24.746
       ],
       [
        118.692,
        24.782
       ],
       [
        118.64,
        24.809
       ],
       [
        118.637,
        24.836
       ],
       [
        118.708,
        24.85
       ],
       [
        118.822,
        24.911
       ],
       [
        118.909,
        24.929
       ],
       [
        118.956,
        25.005
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.236,
        25.206
       ],
       [
        119.286,
        25.232
       ],
       [
        119.244,
        25.307
       ],
       [
        119.169,
        25.356
       ],
       [
        119.146,
        25.414
       ],
       [
        119.18,
        25.45
       ],
       [
        119.263,
        25.468
       ],
       [
        119.344,
        25.446
       ],
       [
        119.422,
        25.46
       ],
       [
        119.499,
        25.409
       ],
       [
        119.593,
        25.368
       ],
       [
        119.622,
        25.391
       ],
       [
        119.619,
        25.437
       ],
       [
        119.539,
        25.591
       ],
       [
        119.553,
        25.699
       ],
       [
        119.617,
        25.823
       ],
       [
        119.648,
        25.919
       ],
       [
        119.635,
        25.958
       ],
       [
        119.423,
        25.958
       ],
       [
        119.418,
        25.954
       ],
       [
        119.332,
        25.949
       ],
       [
        119.308,
        25.958
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.553,
        22.571
       ],
       [
        120.308,
        22.571
       ],
       [
        120.273,
        22.627
       ],
       [
        120.233,
        22.718
       ],
       [
        120.15,
        22.975
       ],
       [
        120.122,
        23.037
       ],
       [
        120.083,
        23.094
       ],
       [
        120.072,
        23.15
       ],
       [
        120.086,
        23.212
       ],
       [
        120.121,
        23.305
       ],
       [
        120.143,
        23.399
       ],
       [
        120.125,
        23.527
       ],
       [
        120.132,
        23.653
       ],
       [
        120.159,
        23.709
       ],
       [
        120.553,
        24.353
       ],
       [
        120.553,
        22.571
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.407,
        24.522
       ],
       [
        118.451,
        24.456
       ],
       [
        118.433,
        24.414
       ],
       [
        118.295,
        24.436
       ],
       [
        118.287,
        24.477
       ],
       [
        118.339,
        24.469
       ],
       [
        118.407,
        24.522
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.183,
        24.496
       ],
       [
        118.15,
        24.436
       ],
       [
        118.091,
        24.446
       ],
       [
        118.089,
        24.489
       ],
       [
        118.077,
        24.501
       ],
       [
        118.093,
        24.541
       ],
       [
        118.104,
        24.552
       ],
       [
        118.171,
        24.519
       ],
       [
        118.183,
        24.496
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.821,
        25.457
       ],
       [
        119.747,
        25.411
       ],
       [
        119.7,
        25.433
       ],
       [
        119.699,
        25.495
       ],
       [
        119.723,
        25.551
       ],
       [
        119.696,
        25.591
       ],
       [
        119.723,
        25.639
       ],
       [
        119.778,
        25.653
       ],
       [
        119.797,
        25.623
       ],
       [
        119.829,
        25.607
       ],
       [
        119.838,
        25.591
       ],
       [
        119.839,
        25.56
       ],
       [
        119.809,
        25.508
       ],
       [
        119.832,
        25.48
       ],
       [
        119.821,
        25.457
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.53,
        25.958
       ],
       [
        119.308,
        25.958
       ],
       [
        119.332,
        25.949
       ],
       [
        119.418,
        25.954
       ],
       [
        119.423,
        25.958
       ],
       [
        119.635,
        25.958
       ],
       [
        119.648,
        25.919
       ],
       [
        119.617,
        25.823
       ],
       [
        119.553,
        25.699
       ],
       [
        119.539,
        25.591
       ],
       [
        119.619,
        25.437
       ],
       [
        119.622,
        25.391
       ],
       [
        119.593,
        25.368
       ],
       [
        119.499,
        25.409
       ],
       [
        119.422,
        25.46
       ],
       [
        119.344,
        25.446
       ],
       [
        119.263,
        25.468
       ],
       [
        119.18,
        25.45
       ],
       [
        119.146,
        25.414
       ],
       [
        119.169,
        25.356
       ],
       [
        119.244,
        25.307
       ],
       [
        119.286,
        25.232
       ],
       [
        119.236,
        25.206
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.956,
        25.005
       ],
       [
        118.909,
        24.929
       ],
       [
        118.822,
        24.911
       ],
       [
        118.708,
        24.85
       ],
       [
        118.637,
        24.836
       ],
       [
        118.64,
        24.809
       ],
       [
        118.692,
        24.782
       ],
       [
        118.719,
        24.746
       ],
       [
        118.657,
        24.621
       ],
       [
        118.56,
        24.58
       ],
       [
        118.412,
        24.601
       ],
       [
        118.295,
        24.573
       ],
       [
        118.195,
        24.626
       ],
       [
        118.087,
        24.627
       ],
       [
        118.014,
        24.56
       ],
       [
        118.006,
        24.482
       ],
       [
        117.935,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.843,
        24.474
       ],
       [
        117.848,
        24.432
       ],
       [
        117.879,
        24.396
       ],
       [
        118.024,
        24.38
       ],
       [
        118.051,
        24.327
       ],
       [
        118.056,
        24.246
       ],
       [
        117.904,
        24.106
       ],
       [
        117.839,
        24.012
       ],
       [
        117.742,
        24.015
       ],
       [
        117.668,
        23.939
       ],
       [
        117.628,
        23.837
       ],
       [
        117.579,
        23.857
       ],
       [
        117.53,
        23.85
       ],
       [
        117.53,
        25.958
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
         119.005,
         24.97
        ],
        [
         118.989,
         24.974
        ],
        [
         119.024,
         25.044
        ],
        [
         119.017,
         25.058
        ],
        [
         118.975,
         25.025
        ],
        [
         118.945,
         25.029
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.134,
         25.106
        ],
        [
         119.107,
         25.075
        ],
        [
         119.119,
         25.013
        ],
        [
         119.147,
         25.057
        ],
        [
         119.166,
         25.146
        ],
        [
         119.137,
         25.155
        ],
        [
         119.108,
         25.194
        ],
        [
         119.132,
         25.223
        ],
        [
         119.19,
         25.176
        ],
        [
         119.232,
         25.189
        ],
        [
         119.269,
         25.16
        ],
        [
         119.315,
         25.19
        ],
        [
         119.295,
         25.237
        ],
        [
         119.332,
         25.231
        ],
        [
         119.381,
         25.25
        ],
        [
         119.333,
         25.288
        ],
        [
         119.299,
         25.329
        ],
        [
         119.248,
         25.334
        ],
        [
         119.241,
         25.317
        ],
        [
         119.219,
         25.368
        ],
        [
         119.145,
         25.388
        ],
        [
         119.151,
         25.427
        ],
        [
         119.192,
         25.424
        ],
        [
         119.232,
         25.442
        ],
        [
         119.22,
         25.469
        ],
        [
         119.256,
         25.489
        ],
        [
         119.275,
         25.477
        ],
        [
         119.263,
         25.428
        ],
        [
         119.288,
         25.411
        ],
        [
         119.353,
         25.412
        ],
        [
         119.344,
         25.472
        ],
        [
         119.359,
         25.522
        ],
        [
         119.401,
         25.494
        ],
        [
         119.453,
         25.494
        ],
        [
         119.438,
         25.412
        ],
        [
         119.463,
         25.449
        ],
        [
         119.491,
         25.443
        ],
        [
         119.486,
         25.419
        ],
        [
         119.507,
         25.396
        ],
        [
         119.487,
         25.37
        ],
        [
         119.549,
         25.366
        ],
        [
         119.579,
         25.401
        ],
        [
         119.556,
         25.429
        ],
        [
         119.578,
         25.446
        ],
        [
         119.591,
         25.398
        ],
        [
         119.583,
         25.374
        ],
        [
         119.597,
         25.335
        ],
        [
         119.649,
         25.343
        ],
        [
         119.665,
         25.372
        ],
        [
         119.657,
         25.397
        ],
        [
         119.67,
         25.436
        ],
        [
         119.623,
         25.434
        ],
        [
         119.675,
         25.468
        ],
        [
         119.682,
         25.446
        ],
        [
         119.689,
         25.441
        ],
        [
         119.774,
         25.396
        ],
        [
         119.764,
         25.434
        ],
        [
         119.805,
         25.458
        ],
        [
         119.867,
         25.455
        ],
        [
         119.864,
         25.47
        ],
        [
         119.863,
         25.475
        ],
        [
         119.811,
         25.507
        ],
        [
         119.817,
         25.532
        ],
        [
         119.861,
         25.531
        ],
        [
         119.884,
         25.546
        ],
        [
         119.831,
         25.58
        ],
        [
         119.843,
         25.598
        ],
        [
         119.79,
         25.614
        ],
        [
         119.786,
         25.668
        ],
        [
         119.7,
         25.617
        ],
        [
         119.684,
         25.593
        ],
        [
         119.717,
         25.551
        ],
        [
         119.716,
         25.512
        ],
        [
         119.681,
         25.498
        ],
        [
         119.675,
         25.475
        ],
        [
         119.634,
         25.475
        ],
        [
         119.612,
         25.52
        ],
        [
         119.616,
         25.557
        ],
        [
         119.587,
         25.592
        ],
        [
         119.535,
         25.585
        ],
        [
         119.541,
         25.625
        ],
        [
         119.479,
         25.632
        ],
        [
         119.473,
         25.662
        ],
        [
         119.544,
         25.685
        ],
        [
         119.603,
         25.685
        ],
        [
         119.603,
         25.715
        ],
        [
         119.626,
         25.723
        ],
        [
         119.628,
         25.872
        ],
        [
         119.638,
         25.89
        ],
        [
         119.695,
         25.904
        ],
        [
         119.71,
         25.958
        ],
        [
         117.53,
         25.958
        ],
        [
         117.53,
         23.712
        ],
        [
         117.544,
         23.716
        ],
        [
         117.602,
         23.702
        ],
        [
         117.66,
         23.789
        ],
        [
         117.652,
         23.815
        ],
        [
         117.672,
         23.878
        ],
        [
         117.691,
         23.889
        ],
        [
         117.763,
         23.887
        ],
        [
         117.793,
         23.906
        ],
        [
         117.807,
         23.948
        ],
        [
         117.865,
         24.005
        ],
        [
         117.91,
         24.012
        ],
        [
         117.928,
         24.04
        ],
        [
         117.936,
         24.1
        ],
        [
         118.0,
         24.152
        ],
        [
         118.019,
         24.197
        ],
        [
         118.075,
         24.226
        ],
        [
         118.115,
         24.229
        ],
        [
         118.159,
         24.27
        ],
        [
         118.112,
         24.357
        ],
        [
         118.082,
         24.357
        ],
        [
         118.088,
         24.409
        ],
        [
         118.049,
         24.418
        ],
        [
         118.084,
         24.529
        ],
        [
         118.122,
         24.57
        ],
        [
         118.151,
         24.584
        ],
        [
         118.169,
         24.56
        ],
        [
         118.243,
         24.512
        ],
        [
         118.375,
         24.536
        ],
        [
         118.364,
         24.568
        ],
        [
         118.444,
         24.615
        ],
        [
         118.513,
         24.608
        ],
        [
         118.557,
         24.573
        ],
        [
         118.558,
         24.512
        ],
        [
         118.614,
         24.522
        ],
        [
         118.68,
         24.582
        ],
        [
         118.687,
         24.634
        ],
        [
         118.661,
         24.622
        ],
        [
         118.653,
         24.654
        ],
        [
         118.67,
         24.68
        ],
        [
         118.704,
         24.665
        ],
        [
         118.779,
         24.744
        ],
        [
         118.786,
         24.777
        ],
        [
         118.651,
         24.809
        ],
        [
         118.648,
         24.844
        ],
        [
         118.702,
         24.865
        ],
        [
         118.699,
         24.849
        ],
        [
         118.749,
         24.842
        ],
        [
         118.808,
         24.871
        ],
        [
         118.834,
         24.854
        ],
        [
         118.864,
         24.888
        ],
        [
         118.933,
         24.871
        ],
        [
         118.989,
         24.879
        ],
        [
         118.987,
         24.898
        ],
        [
         118.933,
         24.907
        ],
        [
         118.919,
         24.933
        ],
        [
         118.946,
         24.954
        ],
        [
         119.014,
         24.941
        ],
        [
         119.033,
         24.961
        ],
        [
         119.033,
         24.962
        ],
        [
         119.007,
         24.963
        ],
        [
         119.005,
         24.97
        ]
       ]
      ],
      [
       [
        [
         118.412,
         24.515
        ],
        [
         118.375,
         24.459
        ],
        [
         118.319,
         24.487
        ],
        [
         118.298,
         24.478
        ],
        [
         118.312,
         24.425
        ],
        [
         118.282,
         24.413
        ],
        [
         118.33,
         24.382
        ],
        [
         118.353,
         24.415
        ],
        [
         118.406,
         24.428
        ],
        [
         118.458,
         24.412
        ],
        [
         118.477,
         24.438
        ],
        [
         118.452,
         24.507
        ],
        [
         118.412,
         24.515
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.507,
         25.183
        ],
        [
         119.525,
         25.158
        ],
        [
         119.549,
         25.162
        ],
        [
         119.567,
         25.21
        ],
        [
         119.541,
         25.202
        ],
        [
         119.501,
         25.217
        ],
        [
         119.474,
         25.26
        ],
        [
         119.443,
         25.239
        ],
        [
         119.444,
         25.202
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         119.58,
         25.627
        ],
        [
         119.612,
         25.669
        ],
        [
         119.581,
         25.65
        ],
        [
         119.58,
         25.627
        ]
       ]
      ],
      [
       [
        [
         118.231,
         24.401
        ],
        [
         118.274,
         24.441
        ],
        [
         118.234,
         24.446
        ],
        [
         118.231,
         24.401
        ]
       ]
      ],
      [
       [
        [
         118.204,
         24.505
        ],
        [
         118.192,
         24.537
        ],
        [
         118.145,
         24.561
        ],
        [
         118.093,
         24.541
        ],
        [
         118.069,
         24.463
        ],
        [
         118.084,
         24.436
        ],
        [
         118.143,
         24.421
        ],
        [
         118.194,
         24.463
        ],
        [
         118.204,
         24.505
        ]
       ]
      ],
      [
       [
        [
         119.662,
         25.647
        ],
        [
         119.674,
         25.633
        ],
        [
         119.719,
         25.635
        ],
        [
         119.717,
         25.665
        ],
        [
         119.662,
         25.647
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.553,
         22.571
        ],
        [
         120.553,
         24.38
        ],
        [
         120.547,
         24.37
        ],
        [
         120.521,
         24.312
        ],
        [
         120.471,
         24.243
        ],
        [
         120.452,
         24.182
        ],
        [
         120.392,
         24.118
        ],
        [
         120.316,
         23.985
        ],
        [
         120.278,
         23.928
        ],
        [
         120.246,
         23.84
        ],
        [
         120.175,
         23.807
        ],
        [
         120.102,
         23.701
        ],
        [
         120.095,
         23.588
        ],
        [
         120.122,
         23.505
        ],
        [
         120.108,
         23.341
        ],
        [
         120.082,
         23.292
        ],
        [
         120.019,
         23.073
        ],
        [
         120.03,
         23.049
        ],
        [
         120.133,
         23.001
        ],
        [
         120.149,
         22.896
        ],
        [
         120.2,
         22.721
        ],
        [
         120.269,
         22.571
        ],
        [
         120.553,
         22.571
        ]
       ]
      ],
      [
       [
        [
         119.646,
         23.551
        ],
        [
         119.691,
         23.547
        ],
        [
         119.678,
         23.6
        ],
        [
         119.61,
         23.604
        ],
        [
         119.602,
         23.576
        ],
        [
         119.567,
         23.585
        ],
        [
         119.562,
         23.531
        ],
        [
         119.579,
         23.503
        ],
        [
         119.609,
         23.504
        ],
        [
         119.646,
         23.551
        ]
       ]
      ],
      [
       [
        [
         119.506,
         23.626
        ],
        [
         119.506,
         23.577
        ],
        [
         119.472,
         23.557
        ],
        [
         119.519,
         23.56
        ],
        [
         119.525,
         23.625
        ],
        [
         119.506,
         23.626
        ]
       ]
      ],
      [
       [
        [
         119.498,
         23.387
        ],
        [
         119.495,
         23.35
        ],
        [
         119.517,
         23.35
        ],
        [
         119.498,
         23.387
        ]
       ]
      ],
      [
       [
        [
         119.557,
         23.667
        ],
        [
         119.608,
         23.62
        ],
        [
         119.615,
         23.661
        ],
        [
         119.586,
         23.676
        ],
        [
         119.557,
         23.667
        ]
       ]
      ],
      [
       [
        [
         119.421,
         23.217
        ],
        [
         119.436,
         23.186
        ],
        [
         119.453,
         23.216
        ],
        [
         119.421,
         23.217
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   117.53,
   22.571,
   120.553,
   25.958
  ]
 }
};
