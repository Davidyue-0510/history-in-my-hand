// 本文件由 tools/build.py 自动生成（切片 chibi_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chibi_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chibi_battle"] = {
 "meta": {
  "kind": "county",
  "region": "jingzhou",
  "title": "赤壁之战·火烧乌林",
  "dossier_label": "赤壁之战",
  "subtitle": "建安十三年（208）· 曹军 vs 孙刘联军",
  "primary_place": "chibi",
  "dossier_event": "event:huoshao_wulin",
  "vocab_pack": "chibi_battle",
  "terrain_grid": "china_coarse",
  "lead": "建安十三年（208），曹操南征荆州，孙刘联军以火攻大破曹军于赤壁—乌林，奠定三国鼎立之势。",
  "parties_note": "本切片主干为后世官修史（三国志/后汉书/资治通鉴），无曹军、孙刘、荆州三方当代原始档案；三方实况经后世史官回溯叙述，缺口为一等公民。系统不裁决，只并列。",
  "subject_names": {
   "event:huoshao_wulin": "火烧乌林",
   "event:chibi_chuzhan": "赤壁初战",
   "event:sunliu_lianmeng": "孙刘联盟",
   "event:caocao_xia_jingzhou": "曹操下荆州",
   "event:caocao_beiche": "曹操北撤",
   "event:zhouyu_gong_jiangling": "周瑜攻江陵",
   "place:chibi": "赤壁",
   "place:wulin": "乌林",
   "person:cao_cao": "曹操",
   "person:zhou_yu": "周瑜",
   "person:huang_gai": "黄盖"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
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
    "note": "赤壁之战：朝堂凝聚力——曹操挟天子令诸侯、孙刘危局结盟抗曹"
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
    "note": "赤壁之战：后勤物力——曹军横江水师与疫病、孙刘联舟火攻"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "赤壁之战：人口动员——北兵不习水战、荆州新附、沿江流民"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "赤壁之战：地缘战略——长江水道为轴，孙刘据上游扼曹军东下"
   }
  },
  "province": "hubei",
  "related": [],
  "page": "county.html?scene=chibi_battle",
  "key": "chibi_battle",
  "scene_id": "chibi_battle"
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
   "note": "本切片主干史料，距事最近的正史。陈寿身仕西晋，以魏为正统的基本框架贯穿全书，且蜀汉『国不置史』使其叙蜀事时先天材料不足——赤壁叙事多据吴、魏两书后向追述，三方实况含回溯成分。"
  },
  {
   "id": "zizhi_tongjian",
   "title": "资治通鉴",
   "party": "宋·官修",
   "stance_label": "北宋官修编年通史",
   "distance_label": "宋司马光撰（1084 成书），距三国八百余年",
   "color": "#6C7A89",
   "compiler": "司马光（北宋）",
   "period": "宋",
   "note": "三国部分以魏纪年，明确主张魏为正统。其取舍依据是『苟不能使九州合为一统，皆有天子之名而无其实』——北宋大一统修史者的视角。赤壁叙述在此框架下整合魏吴记载。"
  },
  {
   "id": "hou_hanshu",
   "title": "后汉书",
   "party": "汉·后朝官修",
   "stance_label": "南朝宋官修汉史",
   "distance_label": "南朝宋范晔撰，距东汉建安事约二百余年",
   "color": "#6C7A89",
   "compiler": "范晔（南朝宋）",
   "period": "汉",
   "note": "《后汉书·献帝纪》及诸列传载建安年间荆州之事，为南朝宋官修东汉史，距事较远，归『后世官修』桶。"
  },
  {
   "id": "chibi_yanjiu",
   "title": "赤壁研究（现代综述）",
   "party": "二手综述",
   "stance_label": "近现代考订",
   "distance_label": "现代赤壁战史与历史地理研究，距事一千八百余岁",
   "color": "#9B7B5A",
   "compiler": "近现代研究",
   "period": "现代",
   "note": "现代赤壁战史与历史地理考订的二手综述，用于地理考订、兵力区间与推演项；凡依赖此源的断言皆为待升级项，默认可关闭。"
  }
 ],
 "places": [
  {
   "id": "chibi",
   "name": "赤壁",
   "lat": 29.75,
   "lon": 113.85,
   "type": "city",
   "note": "赤壁山（今湖北赤壁市/蒲圻西北），赤壁之战孙刘联军南岸战场（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 103
  },
  {
   "id": "wulin",
   "name": "乌林",
   "lat": 29.85,
   "lon": 113.65,
   "type": "city",
   "note": "长江北岸，与赤壁隔江对垒，曹军水寨与火攻主目标（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 20
  },
  {
   "id": "jiangxia",
   "name": "江夏/武昌",
   "lat": 30.5,
   "lon": 114.3,
   "type": "city",
   "note": "刘琦守江夏，孙刘联军上游据点（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 38
  },
  {
   "id": "xiakou",
   "name": "夏口/汉口",
   "lat": 30.6,
   "lon": 114.3,
   "type": "city",
   "note": "刘备败走后驻屯处，联孙抗曹前沿（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 40
  },
  {
   "id": "fankou",
   "name": "樊口/鄂州",
   "lat": 30.57367,
   "lon": 114.30666,
   "type": "city",
   "note": "刘备败走与周瑜会合处（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：鄂州）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：鄂州",
   "elev": 39
  },
  {
   "id": "huarong",
   "name": "华容道",
   "lat": 29.5,
   "lon": 112.6,
   "type": "region",
   "note": "曹操北撤陆路通道（华容道）（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 80
  },
  {
   "id": "jiangling",
   "name": "江陵/荆州",
   "lat": 30.35044,
   "lon": 112.19077,
   "type": "city",
   "note": "曹军水军基地，曹仁守城，战后周瑜取南郡（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：荆州）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：荆州",
   "elev": 34
  },
  {
   "id": "xiangyang",
   "name": "襄阳",
   "lat": 32.02652,
   "lon": 112.1587,
   "type": "city",
   "note": "刘琮降曹处，曹操南下起点（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：襄阳郡）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：襄阳郡",
   "elev": 78
  },
  {
   "id": "chaisang",
   "name": "柴桑/九江",
   "lat": 29.7,
   "lon": 115.9,
   "type": "city",
   "note": "孙权治所，孙刘联盟决策地（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 22
  },
  {
   "id": "yangtze_river",
   "name": "长江航道",
   "lat": 30.0,
   "lon": 114.0,
   "type": "river",
   "note": "长江航道（江陵—赤壁—夏口段），战役主轴（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 18
  }
 ],
 "persons": [
  {
   "id": "cao_cao",
   "name": "曹操",
   "party": "曹军",
   "note": "丞相/魏王，南征荆州主帅",
   "influence": 0
  },
  {
   "id": "liu_bei",
   "name": "刘备",
   "party": "孙刘联军",
   "note": "左将军，联孙抗曹，败走夏口",
   "influence": 0
  },
  {
   "id": "sun_quan",
   "name": "孙权",
   "party": "孙刘联军",
   "note": "吴侯，决意联刘拒曹",
   "influence": 0
  },
  {
   "id": "zhou_yu",
   "name": "周瑜",
   "party": "孙刘联军",
   "note": "前部大都督，火攻指挥",
   "influence": 0
  },
  {
   "id": "zhuge_liang",
   "name": "诸葛亮",
   "party": "孙刘联军",
   "note": "刘备军师，使柴桑说孙权",
   "influence": 0
  },
  {
   "id": "lu_su",
   "name": "鲁肃",
   "party": "孙刘联军",
   "note": "孙权谋主，力主联刘",
   "influence": 0
  },
  {
   "id": "huang_gai",
   "name": "黄盖",
   "party": "孙刘联军",
   "note": "献诈降火攻之策，操轻舟纵火",
   "influence": 0
  },
  {
   "id": "guan_yu",
   "name": "关羽",
   "party": "孙刘联军",
   "note": "刘备部将，汉津会合水军",
   "influence": 0
  },
  {
   "id": "zhang_fei",
   "name": "张飞",
   "party": "孙刘联军",
   "note": "刘备部将，长坂断后",
   "influence": 0
  },
  {
   "id": "cheng_yu",
   "name": "程昱",
   "party": "曹军",
   "note": "曹操谋臣，谏勿纵敌",
   "influence": 0
  },
  {
   "id": "jia_xu",
   "name": "贾诩",
   "party": "曹军",
   "note": "曹操谋臣，劝抚荆州",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "CB001",
   "subject": "event:liucong_jiangcao",
   "predicate": "举州降曹",
   "value_text": "刘琮继位荆州牧，惧曹操南下，举荆州降；刘备南走江陵。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "xiangyang",
   "source": "sanguozhi",
   "quote": "琮惧，举州降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "制度维度（3）：刘琮降曹，荆州易主，刘备失据南撤。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB002",
   "subject": "event:liubei_nanche",
   "predicate": "南撤败走",
   "value_text": "刘备自樊城南奔江陵，于当阳长坂为曹军轻骑所追破，斜趋汉津会关羽船。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "jiangxia",
   "source": "sanguozhi",
   "quote": "曹公将精骑急追之，一日一夜行三百余里，及于当阳之长坂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/事件维度（6）：刘备南撤路线与长坂之败。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB003",
   "subject": "event:caocao_xia_jingzhou",
   "predicate": "取荆州水军",
   "value_text": "曹操至襄阳受降，取江陵，得荆州水军，顺流东下，声势极盛。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "jiangling",
   "source": "sanguozhi",
   "quote": "操得荆州水军，将士数万，与刘备并力",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "制度维度（3）/事件维度（6）：曹操据荆州水军，构成本战兵力主轴。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB004",
   "subject": "event:sunliu_lianmeng",
   "predicate": "孙刘结盟",
   "value_text": "诸葛亮说孙权，鲁肃赞之，周瑜请兵，孙刘结盟拒曹。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "chaisang",
   "source": "sanguozhi",
   "quote": "权大悦，即遣周瑜、程普将兵与备并力拒曹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "制度维度（3）：孙刘联盟是多体联合抗单体之关键。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB005",
   "subject": "event:chibi_chuzhan",
   "predicate": "初战不利",
   "value_text": "赤壁初交战，曹军值大疫，失利，引次江北乌林。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "sanguozhi",
   "quote": "初一交战，公军败退，引次江北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "技术维度（2）/事件维度（6）：初战曹军不利，退驻乌林。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB006",
   "subject": "event:huoshao_wulin",
   "predicate": "火攻破曹",
   "value_text": "黄盖诈降，乘东南风纵火，焚曹军连环舰于乌林，延及岸营，曹军大溃。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "sanguozhi",
   "quote": "盖放诸船，同时发火，时风盛猛，悉延烧岸上营落",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "技术维度（2）/事件维度（6）：火烧乌林为战役决定性事件，置信度最高。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB007",
   "subject": "event:caocao_beiche",
   "predicate": "引军北还",
   "value_text": "曹操烧剩余船舰，引军北还，留曹仁、满宠屯江陵。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "jiangling",
   "source": "zizhi_tongjian",
   "quote": "引军北还，留曹仁、满宠屯江陵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）：曹操北撤，留曹仁守江陵，战役转入相持。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "CB008",
   "subject": "event:caoren_shou_jiangling",
   "predicate": "守城拒吴",
   "value_text": "曹仁据江陵城拒周瑜，相持岁余。",
   "time": {
    "era_text": "建安十三年—十四年（208—209）",
    "gregorian_year": 208
   },
   "place": "jiangling",
   "source": "hou_hanshu",
   "quote": "仁守江陵城，瑜将数万来攻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）：江陵攻守为赤壁后序战。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "CB009",
   "subject": "event:zhouyu_gong_jiangling",
   "predicate": "攻取南郡",
   "value_text": "周瑜攻江陵岁余，曹仁委城走，孙权得南郡（建安十四年，209）。",
   "time": {
    "era_text": "建安十四年（209）",
    "gregorian_year": 209
   },
   "place": "jiangling",
   "source": "zizhi_tongjian",
   "quote": "瑜攻曹仁岁余，所杀伤甚众，仁委城走",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）：周瑜取南郡，孙刘稳固长江南岸。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "CB010",
   "subject": "place:wulin",
   "predicate": "北岸战场",
   "value_text": "乌林在长江北岸、赤壁对岸，曹军水寨泊此，为火攻主目标。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "sanguozhi",
   "quote": "乌林，赤壁对岸，操舟舰所泊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：乌林—赤壁隔江对垒的地形基础。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB011",
   "subject": "place:chibi",
   "predicate": "江道地形",
   "value_text": "赤壁—乌林段江面转折、江岸仄狭，冬季东南风利于火攻北向。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "sanguozhi",
   "quote": "时东南风急，盖以十舰最著前",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/技术维度（2）：风向与江形是火攻可行性的自然前提。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB012",
   "subject": "event:huoshao_wulin",
   "predicate": "疫疾损益",
   "value_text": "曹军北士不习水战兼大疫，是败因之一；具体舰队规模与疫死数无精确史料。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "sanguozhi",
   "quote": "公军不利于赤壁，兼以疫死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：疫病与兵力损耗，规模未知见 gap。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "CB013",
   "subject": "place:chibi",
   "predicate": "地理考订",
   "value_text": "今赤壁市（蒲圻）赤壁山与黄州（东坡赤壁）二说并存，学界多以蒲圻西北赤壁山为古战场。",
   "time": {
    "era_text": "现代考订",
    "gregorian_year": 2000
   },
   "place": "chibi",
   "source": "chibi_yanjiu",
   "quote": "蒲圻说为主流，黄州说并存",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "operational",
   "note": "地理维度（1）：古战场定位的学界分歧。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CB014",
   "subject": "event:huoshao_wulin",
   "predicate": "火攻推演",
   "value_text": "按曹舰连环泊岸、冬季风况与孙刘上游地利，火攻成功率模型推算偏高（本项目推演，非史料原值）。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "chibi_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于地形/风况/兵力模型的推断值，可复现。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CB015",
   "subject": "place:yangtze_river",
   "predicate": "补给推演",
   "value_text": "曹军补给线自江陵—乌林沿长江拉长，孙刘据夏口、樊口上游扼要，利于以逸待劳。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "yangtze_river",
   "source": "chibi_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "地理维度（1）/制度维度（3）：补给与上游优势推演。",
   "dims": [
    1,
    3
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CB016",
   "subject": "event:huoshao_wulin",
   "predicate": "曹军规模与疫损缺口",
   "value_text": "曹操实际舰队规模与疫病死亡数无精确史料：《三国志》仅言『疫死』，《资治通鉴》『八十万』为夸张叙述；二者皆非可核实数，缺口即结论，仅能给区间而非定点数。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "chibi_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：曹军真实兵力与疫损为结构性未知。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "曹操真实兵力与舰船数、疫病致死规模",
    "skills": [
     "核《三国志·武帝纪/周瑜传》对兵额与疫的表述",
     "比对《资治通鉴》编年叙述的夸张成分",
     "查现代赤壁研究对兵力的估算区间"
    ],
    "accept": "明确曹军兵额与疫病损耗为结构性未知，仅能给区间而非定点数"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CB017",
   "subject": "event:chibi_chuzhan",
   "predicate": "初战—火攻空间缺口",
   "value_text": "赤壁初战与乌林火攻是否同地、初战具体部署，史料简略；孙刘视角与曹方视角均有缺失，初战—火攻的空间—时序衔接为弱证据。",
   "time": {
    "era_text": "建安十三年（208）",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "chibi_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：叙事对初战细节的建构与缺漏。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "赤壁初战与乌林火攻的空间—时序关系",
    "skills": [
     "比对《周瑜传》《吴主传》不同叙述",
     "核地理考据（蒲圻说 vs 黄州说）对战场定位的影响"
    ],
    "accept": "承认初战—火攻的空间衔接在史料上为弱证据"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CB016",
  "CB017"
 ],
 "events": [
  {
   "id": "ev_liucong_jiangcao",
   "subject": "event:liucong_jiangcao",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "刘琮降曹",
   "kind": "政治·投降",
   "text": "刘琮继位荆州牧，惧曹操南下，举荆州降；刘备失据南走江陵。"
  },
  {
   "id": "ev_liubei_nanche",
   "subject": "event:liubei_nanche",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "刘备南撤",
   "kind": "战事·南撤",
   "text": "刘备自樊城南奔江陵，于当阳长坂为曹军轻骑追破，斜趋汉津会关羽水军。"
  },
  {
   "id": "ev_caocao_xia_jingzhou",
   "subject": "event:caocao_xia_jingzhou",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "曹操下荆州",
   "kind": "战事·占领",
   "text": "曹操至襄阳受降，取江陵，得荆州水军，顺流东下，声势极盛。"
  },
  {
   "id": "ev_sunliu_lianmeng",
   "subject": "event:sunliu_lianmeng",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "孙刘联盟",
   "kind": "政治·结盟",
   "text": "诸葛亮说孙权，鲁肃赞之，周瑜请兵，孙刘结盟拒曹。"
  },
  {
   "id": "ev_chibi_chuzhan",
   "subject": "event:chibi_chuzhan",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "赤壁初战",
   "kind": "战事·初战",
   "text": "赤壁初交战，曹军值大疫，失利，引次江北乌林。"
  },
  {
   "id": "ev_huoshao_wulin",
   "subject": "event:huoshao_wulin",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "火烧乌林",
   "kind": "战事·火攻决战",
   "text": "黄盖诈降，乘东南风纵火，焚曹军连环舰于乌林，延及岸营，曹军大溃。"
  },
  {
   "id": "ev_caocao_beiche",
   "subject": "event:caocao_beiche",
   "year": 208,
   "era": "建安十三年（208）",
   "title": "曹操北撤",
   "kind": "战事·北撤",
   "text": "曹操烧剩余船舰，引军北还，留曹仁、满宠屯江陵。"
  },
  {
   "id": "ev_caoren_shou_jiangling",
   "subject": "event:caoren_shou_jiangling",
   "year": 208,
   "era": "建安十三年—十四年（208—209）",
   "title": "曹仁守江陵",
   "kind": "战事·驻守",
   "text": "曹仁据江陵城拒周瑜，相持岁余。"
  },
  {
   "id": "ev_zhouyu_gong_jiangling",
   "subject": "event:zhouyu_gong_jiangling",
   "year": 209,
   "era": "建安十四年（209）",
   "title": "周瑜攻江陵",
   "kind": "战事·攻城",
   "text": "周瑜攻江陵岁余，曹仁委城走，孙权得南郡。"
  }
 ],
 "edges": [
  {
   "from": "xiangyang",
   "to": "jiangling",
   "type": "military",
   "label": "襄阳—江陵（曹军南下取荆州）"
  },
  {
   "from": "jiangling",
   "to": "chibi",
   "type": "military",
   "label": "江陵—赤壁（曹军顺流东下）"
  },
  {
   "from": "chibi",
   "to": "wulin",
   "type": "river",
   "label": "赤壁—乌林（隔江对战）"
  },
  {
   "from": "chibi",
   "to": "xiakou",
   "type": "military",
   "label": "赤壁—夏口（孙刘联军上游据点）"
  },
  {
   "from": "xiakou",
   "to": "fankou",
   "type": "military",
   "label": "夏口—樊口（刘备周瑜会合）"
  },
  {
   "from": "fankou",
   "to": "chaisang",
   "type": "military",
   "label": "樊口—柴桑（孙权决策）"
  },
  {
   "from": "chaisang",
   "to": "xiakou",
   "type": "military",
   "label": "柴桑—夏口（周瑜西上）"
  },
  {
   "from": "wulin",
   "to": "huarong",
   "type": "military",
   "label": "乌林—华容道（曹军北撤）"
  },
  {
   "from": "jiangling",
   "to": "huarong",
   "type": "military",
   "label": "江陵—华容（曹军退路）"
  },
  {
   "from": "jiangling",
   "to": "yangtze_river",
   "type": "river",
   "label": "江陵控长江水道"
  },
  {
   "from": "chibi",
   "to": "yangtze_river",
   "type": "river",
   "label": "赤壁临长江"
  },
  {
   "from": "wulin",
   "to": "yangtze_river",
   "type": "river",
   "label": "乌林临长江"
  }
 ],
 "control": [
  {
   "place_id": "xiangyang",
   "party": "荆州军",
   "start": 208,
   "end": 208,
   "basis": "刘琮继位据襄阳，建安十三年降曹前",
   "note": "荆州牧治所"
  },
  {
   "place_id": "xiangyang",
   "party": "曹军",
   "start": 208,
   "end": null,
   "basis": "刘琮举州降，曹操领襄阳",
   "note": "降后归曹"
  },
  {
   "place_id": "jiangling",
   "party": "荆州军",
   "start": 208,
   "end": 208,
   "basis": "刘琮降前江陵属荆州军",
   "note": ""
  },
  {
   "place_id": "jiangling",
   "party": "曹军",
   "start": 208,
   "end": 209,
   "basis": "曹操取江陵为水军基地，曹仁守城",
   "note": "曹军水军枢纽"
  },
  {
   "place_id": "jiangling",
   "party": "孙刘联军",
   "start": 209,
   "end": null,
   "basis": "周瑜攻取南郡，曹仁委城走",
   "note": "209 后归孙刘"
  },
  {
   "place_id": "chibi",
   "party": "曹军",
   "start": 208,
   "end": 208,
   "basis": "赤壁初战曹军前哨南岸",
   "note": ""
  },
  {
   "place_id": "chibi",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "火攻后孙刘控南岸赤壁",
   "note": ""
  },
  {
   "place_id": "wulin",
   "party": "曹军",
   "start": 208,
   "end": 208,
   "basis": "乌林北岸曹军水寨",
   "note": "火攻主目标"
  },
  {
   "place_id": "wulin",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "火攻后孙刘占乌林对岸",
   "note": ""
  },
  {
   "place_id": "jiangxia",
   "party": "荆州军",
   "start": 208,
   "end": 208,
   "basis": "刘琦守江夏，降前属荆州军",
   "note": ""
  },
  {
   "place_id": "jiangxia",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "刘备/刘琦联孙，江夏归孙刘",
   "note": ""
  },
  {
   "place_id": "xiakou",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "刘备驻夏口，联孙抗曹",
   "note": ""
  },
  {
   "place_id": "fankou",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "刘备败走樊口与周瑜会合",
   "note": ""
  },
  {
   "place_id": "chaisang",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "孙权治所，联盟决策地",
   "note": ""
  },
  {
   "place_id": "huarong",
   "party": "曹军",
   "start": 208,
   "end": 208,
   "basis": "曹操北撤经华容道",
   "note": ""
  },
  {
   "place_id": "huarong",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "北撤后华容道归孙刘",
   "note": ""
  },
  {
   "place_id": "yangtze_river",
   "party": "曹军",
   "start": 208,
   "end": 208,
   "basis": "曹军顺流东下水道",
   "note": "长江航道"
  },
  {
   "place_id": "yangtze_river",
   "party": "孙刘联军",
   "start": 208,
   "end": null,
   "basis": "战后孙刘据上游水道",
   "note": ""
  }
 ],
 "control_seats": [
  {
   "place_id": "xiangyang",
   "name": "襄阳",
   "lon": 112.1587,
   "lat": 32.02652,
   "region": "jingzhou"
  },
  {
   "place_id": "jiangling",
   "name": "江陵/荆州",
   "lon": 112.19077,
   "lat": 30.35044,
   "region": "jingzhou"
  },
  {
   "place_id": "chibi",
   "name": "赤壁",
   "lon": 113.85,
   "lat": 29.75,
   "region": "jingzhou"
  },
  {
   "place_id": "wulin",
   "name": "乌林",
   "lon": 113.65,
   "lat": 29.85,
   "region": "jingzhou"
  },
  {
   "place_id": "jiangxia",
   "name": "江夏/武昌",
   "lon": 114.3,
   "lat": 30.5,
   "region": "jingzhou"
  },
  {
   "place_id": "xiakou",
   "name": "夏口/汉口",
   "lon": 114.3,
   "lat": 30.6,
   "region": "jingzhou"
  },
  {
   "place_id": "fankou",
   "name": "樊口/鄂州",
   "lon": 114.30666,
   "lat": 30.57367,
   "region": "jingzhou"
  },
  {
   "place_id": "chaisang",
   "name": "柴桑/九江",
   "lon": 115.9,
   "lat": 29.7,
   "region": "jingzhou"
  },
  {
   "place_id": "huarong",
   "name": "华容道",
   "lon": 112.6,
   "lat": 29.5,
   "region": "jingzhou"
  },
  {
   "place_id": "yangtze_river",
   "name": "长江航道",
   "lon": 114.0,
   "lat": 30.0,
   "region": "jingzhou"
  }
 ],
 "control_years": [
  208,
  209
 ],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "曹军",
   "孙刘联军",
   "荆州军",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "西晋·私修": "后世官修",
   "宋·官修": "后世官修",
   "汉·后朝官修": "后世官修",
   "三国·官修": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "曹军": "#8E3A3A",
   "孙刘联军": "#3B6E8F",
   "荆州军": "#7D6B3A",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
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
        111.159,
        28.5
       ],
       [
        111.159,
        33.027
       ],
       [
        116.9,
        33.027
       ],
       [
        116.9,
        28.5
       ],
       [
        111.159,
        28.5
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
         114.924,
         33.027
        ],
        [
         114.926,
         33.017
        ],
        [
         114.892,
         33.02
        ],
        [
         114.883,
         32.99
        ],
        [
         114.916,
         32.971
        ],
        [
         114.943,
         32.935
        ],
        [
         115.009,
         32.94
        ],
        [
         115.035,
         32.933
        ],
        [
         115.03,
         32.907
        ],
        [
         115.139,
         32.898
        ],
        [
         115.156,
         32.865
        ],
        [
         115.197,
         32.856
        ],
        [
         115.19,
         32.812
        ],
        [
         115.211,
         32.786
        ],
        [
         115.19,
         32.771
        ],
        [
         115.179,
         32.726
        ],
        [
         115.183,
         32.667
        ],
        [
         115.201,
         32.592
        ],
        [
         115.243,
         32.593
        ],
        [
         115.267,
         32.578
        ],
        [
         115.306,
         32.583
        ],
        [
         115.305,
         32.553
        ],
        [
         115.411,
         32.575
        ],
        [
         115.409,
         32.549
        ],
        [
         115.498,
         32.492
        ],
        [
         115.509,
         32.469
        ],
        [
         115.511,
         32.469
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.468
        ],
        [
         115.509,
         32.467
        ],
        [
         115.523,
         32.442
        ],
        [
         115.571,
         32.419
        ],
        [
         115.604,
         32.426
        ],
        [
         115.626,
         32.405
        ],
        [
         115.658,
         32.429
        ],
        [
         115.668,
         32.41
        ],
        [
         115.705,
         32.495
        ],
        [
         115.742,
         32.476
        ],
        [
         115.772,
         32.505
        ],
        [
         115.789,
         32.469
        ],
        [
         115.861,
         32.537
        ],
        [
         115.891,
         32.576
        ],
        [
         115.91,
         32.567
        ],
        [
         115.876,
         32.542
        ],
        [
         115.846,
         32.502
        ],
        [
         115.883,
         32.488
        ],
        [
         115.865,
         32.459
        ],
        [
         115.899,
         32.391
        ],
        [
         115.913,
         32.228
        ],
        [
         115.942,
         32.166
        ],
        [
         115.922,
         32.05
        ],
        [
         115.929,
         32.003
        ],
        [
         115.909,
         31.943
        ],
        [
         115.92,
         31.92
        ],
        [
         115.895,
         31.865
        ],
        [
         115.894,
         31.832
        ],
        [
         115.915,
         31.815
        ],
        [
         115.886,
         31.776
        ],
        [
         115.852,
         31.787
        ],
        [
         115.808,
         31.77
        ],
        [
         115.808,
         31.77
        ],
        [
         115.767,
         31.788
        ],
        [
         115.731,
         31.767
        ],
        [
         115.676,
         31.778
        ],
        [
         115.554,
         31.695
        ],
        [
         115.534,
         31.699
        ],
        [
         115.495,
         31.673
        ],
        [
         115.477,
         31.643
        ],
        [
         115.485,
         31.609
        ],
        [
         115.44,
         31.588
        ],
        [
         115.416,
         31.526
        ],
        [
         115.371,
         31.496
        ],
        [
         115.39,
         31.45
        ],
        [
         115.374,
         31.406
        ],
        [
         115.393,
         31.39
        ],
        [
         115.372,
         31.349
        ],
        [
         115.407,
         31.338
        ],
        [
         115.444,
         31.344
        ],
        [
         115.473,
         31.265
        ],
        [
         115.508,
         31.268
        ],
        [
         115.54,
         31.232
        ],
        [
         115.54,
         31.195
        ],
        [
         115.586,
         31.144
        ],
        [
         115.604,
         31.174
        ],
        [
         115.655,
         31.211
        ],
        [
         115.701,
         31.201
        ],
        [
         115.779,
         31.112
        ],
        [
         115.798,
         31.128
        ],
        [
         115.838,
         31.127
        ],
        [
         115.867,
         31.148
        ],
        [
         115.888,
         31.109
        ],
        [
         115.94,
         31.072
        ],
        [
         115.939,
         31.047
        ],
        [
         116.006,
         31.035
        ],
        [
         116.015,
         31.012
        ],
        [
         116.059,
         31.013
        ],
        [
         116.072,
         30.957
        ],
        [
         116.04,
         30.958
        ],
        [
         115.976,
         30.932
        ],
        [
         115.933,
         30.89
        ],
        [
         115.865,
         30.864
        ],
        [
         115.849,
         30.828
        ],
        [
         115.864,
         30.816
        ],
        [
         115.851,
         30.757
        ],
        [
         115.783,
         30.752
        ],
        [
         115.763,
         30.685
        ],
        [
         115.814,
         30.637
        ],
        [
         115.819,
         30.598
        ],
        [
         115.849,
         30.602
        ],
        [
         115.877,
         30.582
        ],
        [
         115.888,
         30.543
        ],
        [
         115.91,
         30.519
        ],
        [
         115.895,
         30.453
        ],
        [
         115.921,
         30.416
        ],
        [
         115.885,
         30.38
        ],
        [
         115.915,
         30.338
        ],
        [
         115.903,
         30.314
        ],
        [
         115.986,
         30.291
        ],
        [
         115.998,
         30.253
        ],
        [
         116.066,
         30.205
        ],
        [
         116.056,
         30.181
        ],
        [
         116.088,
         30.11
        ],
        [
         116.079,
         30.062
        ],
        [
         116.091,
         30.036
        ],
        [
         116.074,
         29.97
        ],
        [
         116.128,
         29.898
        ],
        [
         116.135,
         29.82
        ],
        [
         116.173,
         29.828
        ],
        [
         116.228,
         29.817
        ],
        [
         116.25,
         29.786
        ],
        [
         116.281,
         29.789
        ],
        [
         116.343,
         29.836
        ],
        [
         116.468,
         29.896
        ],
        [
         116.526,
         29.897
        ],
        [
         116.552,
         29.91
        ],
        [
         116.585,
         30.046
        ],
        [
         116.621,
         30.073
        ],
        [
         116.667,
         30.077
        ],
        [
         116.72,
         30.054
        ],
        [
         116.747,
         30.057
        ],
        [
         116.784,
         30.031
        ],
        [
         116.803,
         29.996
        ],
        [
         116.831,
         30.005
        ],
        [
         116.833,
         29.958
        ],
        [
         116.869,
         29.98
        ],
        [
         116.9,
         29.949
        ],
        [
         116.9,
         29.949
        ],
        [
         116.883,
         29.894
        ],
        [
         116.781,
         29.793
        ],
        [
         116.762,
         29.802
        ],
        [
         116.674,
         29.71
        ],
        [
         116.699,
         29.708
        ],
        [
         116.706,
         29.697
        ],
        [
         116.707,
         29.696
        ],
        [
         116.705,
         29.689
        ],
        [
         116.68,
         29.681
        ],
        [
         116.652,
         29.637
        ],
        [
         116.717,
         29.591
        ],
        [
         116.722,
         29.565
        ],
        [
         116.76,
         29.599
        ],
        [
         116.781,
         29.57
        ],
        [
         116.849,
         29.576
        ],
        [
         116.874,
         29.61
        ],
        [
         116.9,
         29.625
        ],
        [
         116.9,
         33.027
        ],
        [
         114.924,
         33.027
        ]
       ]
      ],
      [
       [
        [
         116.699,
         29.708
        ],
        [
         116.674,
         29.71
        ],
        [
         116.654,
         29.695
        ],
        [
         116.68,
         29.681
        ],
        [
         116.705,
         29.689
        ],
        [
         116.707,
         29.696
        ],
        [
         116.706,
         29.697
        ],
        [
         116.699,
         29.708
        ]
       ]
      ],
      [
       [
        [
         115.509,
         32.469
        ],
        [
         115.509,
         32.467
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.469
        ],
        [
         115.509,
         32.469
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.9,
         28.5
        ],
        [
         116.9,
         29.625
        ],
        [
         116.874,
         29.61
        ],
        [
         116.849,
         29.576
        ],
        [
         116.781,
         29.57
        ],
        [
         116.76,
         29.599
        ],
        [
         116.722,
         29.565
        ],
        [
         116.717,
         29.591
        ],
        [
         116.652,
         29.637
        ],
        [
         116.68,
         29.681
        ],
        [
         116.654,
         29.695
        ],
        [
         116.674,
         29.71
        ],
        [
         116.762,
         29.802
        ],
        [
         116.781,
         29.793
        ],
        [
         116.883,
         29.894
        ],
        [
         116.9,
         29.949
        ],
        [
         116.9,
         29.949
        ],
        [
         116.869,
         29.98
        ],
        [
         116.833,
         29.958
        ],
        [
         116.831,
         30.005
        ],
        [
         116.803,
         29.996
        ],
        [
         116.784,
         30.031
        ],
        [
         116.747,
         30.057
        ],
        [
         116.72,
         30.054
        ],
        [
         116.667,
         30.077
        ],
        [
         116.621,
         30.073
        ],
        [
         116.585,
         30.046
        ],
        [
         116.552,
         29.91
        ],
        [
         116.526,
         29.897
        ],
        [
         116.468,
         29.896
        ],
        [
         116.343,
         29.836
        ],
        [
         116.281,
         29.789
        ],
        [
         116.25,
         29.786
        ],
        [
         116.228,
         29.817
        ],
        [
         116.173,
         29.828
        ],
        [
         116.135,
         29.82
        ],
        [
         116.087,
         29.795
        ],
        [
         116.05,
         29.762
        ],
        [
         115.966,
         29.724
        ],
        [
         115.91,
         29.724
        ],
        [
         115.837,
         29.748
        ],
        [
         115.763,
         29.793
        ],
        [
         115.707,
         29.838
        ],
        [
         115.668,
         29.85
        ],
        [
         115.612,
         29.841
        ],
        [
         115.512,
         29.84
        ],
        [
         115.479,
         29.811
        ],
        [
         115.471,
         29.74
        ],
        [
         115.413,
         29.689
        ],
        [
         115.355,
         29.65
        ],
        [
         115.305,
         29.637
        ],
        [
         115.286,
         29.618
        ],
        [
         115.251,
         29.66
        ],
        [
         115.177,
         29.655
        ],
        [
         115.113,
         29.685
        ],
        [
         115.118,
         29.656
        ],
        [
         115.144,
         29.646
        ],
        [
         115.12,
         29.598
        ],
        [
         115.157,
         29.585
        ],
        [
         115.154,
         29.51
        ],
        [
         115.086,
         29.526
        ],
        [
         115.087,
         29.56
        ],
        [
         115.033,
         29.547
        ],
        [
         115.001,
         29.572
        ],
        [
         114.948,
         29.543
        ],
        [
         114.967,
         29.522
        ],
        [
         114.94,
         29.494
        ],
        [
         114.901,
         29.506
        ],
        [
         114.86,
         29.476
        ],
        [
         114.889,
         29.436
        ],
        [
         114.918,
         29.454
        ],
        [
         114.905,
         29.473
        ],
        [
         114.936,
         29.487
        ],
        [
         114.947,
         29.465
        ],
        [
         114.931,
         29.423
        ],
        [
         114.895,
         29.398
        ],
        [
         114.866,
         29.404
        ],
        [
         114.812,
         29.383
        ],
        [
         114.784,
         29.386
        ],
        [
         114.76,
         29.363
        ],
        [
         114.741,
         29.387
        ],
        [
         114.673,
         29.396
        ],
        [
         114.622,
         29.38
        ],
        [
         114.59,
         29.353
        ],
        [
         114.52,
         29.326
        ],
        [
         114.466,
         29.324
        ],
        [
         114.44,
         29.342
        ],
        [
         114.376,
         29.323
        ],
        [
         114.342,
         29.328
        ],
        [
         114.307,
         29.365
        ],
        [
         114.259,
         29.344
        ],
        [
         114.252,
         29.235
        ],
        [
         114.17,
         29.217
        ],
        [
         114.063,
         29.205
        ],
        [
         114.035,
         29.152
        ],
        [
         113.987,
         29.126
        ],
        [
         113.952,
         29.093
        ],
        [
         113.942,
         29.047
        ],
        [
         113.962,
         28.999
        ],
        [
         113.955,
         28.979
        ],
        [
         113.974,
         28.938
        ],
        [
         114.009,
         28.955
        ],
        [
         114.005,
         28.918
        ],
        [
         114.028,
         28.891
        ],
        [
         114.06,
         28.903
        ],
        [
         114.056,
         28.872
        ],
        [
         114.077,
         28.834
        ],
        [
         114.125,
         28.843
        ],
        [
         114.154,
         28.829
        ],
        [
         114.138,
         28.78
        ],
        [
         114.157,
         28.762
        ],
        [
         114.122,
         28.623
        ],
        [
         114.132,
         28.607
        ],
        [
         114.086,
         28.558
        ],
        [
         114.138,
         28.534
        ],
        [
         114.154,
         28.507
        ],
        [
         114.175,
         28.5
        ],
        [
         116.9,
         28.5
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.776,
         32.359
        ],
        [
         112.861,
         32.396
        ],
        [
         112.889,
         32.377
        ],
        [
         112.912,
         32.391
        ],
        [
         112.992,
         32.378
        ],
        [
         113.001,
         32.417
        ],
        [
         113.026,
         32.425
        ],
        [
         113.079,
         32.395
        ],
        [
         113.108,
         32.399
        ],
        [
         113.119,
         32.376
        ],
        [
         113.156,
         32.381
        ],
        [
         113.159,
         32.411
        ],
        [
         113.212,
         32.432
        ],
        [
         113.237,
         32.407
        ],
        [
         113.334,
         32.336
        ],
        [
         113.318,
         32.327
        ],
        [
         113.354,
         32.295
        ],
        [
         113.376,
         32.298
        ],
        [
         113.429,
         32.271
        ],
        [
         113.512,
         32.317
        ],
        [
         113.625,
         32.361
        ],
        [
         113.651,
         32.413
        ],
        [
         113.7,
         32.421
        ],
        [
         113.736,
         32.411
        ],
        [
         113.768,
         32.37
        ],
        [
         113.754,
         32.328
        ],
        [
         113.769,
         32.301
        ],
        [
         113.768,
         32.284
        ],
        [
         113.758,
         32.277
        ],
        [
         113.749,
         32.273
        ],
        [
         113.739,
         32.256
        ],
        [
         113.753,
         32.216
        ],
        [
         113.782,
         32.185
        ],
        [
         113.75,
         32.116
        ],
        [
         113.723,
         32.124
        ],
        [
         113.729,
         32.083
        ],
        [
         113.792,
         32.036
        ],
        [
         113.758,
         31.99
        ],
        [
         113.817,
         31.964
        ],
        [
         113.806,
         31.929
        ],
        [
         113.832,
         31.919
        ],
        [
         113.831,
         31.879
        ],
        [
         113.854,
         31.843
        ],
        [
         113.894,
         31.847
        ],
        [
         113.915,
         31.877
        ],
        [
         113.958,
         31.853
        ],
        [
         113.952,
         31.794
        ],
        [
         113.989,
         31.75
        ],
        [
         114.018,
         31.771
        ],
        [
         114.087,
         31.782
        ],
        [
         114.122,
         31.809
        ],
        [
         114.134,
         31.843
        ],
        [
         114.192,
         31.852
        ],
        [
         114.236,
         31.833
        ],
        [
         114.293,
         31.753
        ],
        [
         114.35,
         31.756
        ],
        [
         114.403,
         31.747
        ],
        [
         114.444,
         31.728
        ],
        [
         114.531,
         31.743
        ],
        [
         114.55,
         31.767
        ],
        [
         114.586,
         31.762
        ],
        [
         114.571,
         31.661
        ],
        [
         114.548,
         31.624
        ],
        [
         114.561,
         31.561
        ],
        [
         114.573,
         31.554
        ],
        [
         114.617,
         31.585
        ],
        [
         114.642,
         31.582
        ],
        [
         114.696,
         31.526
        ],
        [
         114.779,
         31.521
        ],
        [
         114.789,
         31.48
        ],
        [
         114.83,
         31.459
        ],
        [
         114.87,
         31.479
        ],
        [
         114.884,
         31.469
        ],
        [
         114.962,
         31.495
        ],
        [
         114.995,
         31.471
        ],
        [
         115.023,
         31.528
        ],
        [
         115.096,
         31.508
        ],
        [
         115.115,
         31.53
        ],
        [
         115.107,
         31.568
        ],
        [
         115.125,
         31.599
        ],
        [
         115.164,
         31.605
        ],
        [
         115.213,
         31.555
        ],
        [
         115.236,
         31.555
        ],
        [
         115.218,
         31.515
        ],
        [
         115.211,
         31.442
        ],
        [
         115.253,
         31.422
        ],
        [
         115.251,
         31.392
        ],
        [
         115.301,
         31.384
        ],
        [
         115.339,
         31.404
        ],
        [
         115.374,
         31.406
        ],
        [
         115.39,
         31.45
        ],
        [
         115.371,
         31.496
        ],
        [
         115.416,
         31.526
        ],
        [
         115.44,
         31.588
        ],
        [
         115.485,
         31.609
        ],
        [
         115.477,
         31.643
        ],
        [
         115.495,
         31.673
        ],
        [
         115.534,
         31.699
        ],
        [
         115.554,
         31.695
        ],
        [
         115.676,
         31.778
        ],
        [
         115.731,
         31.767
        ],
        [
         115.767,
         31.788
        ],
        [
         115.808,
         31.77
        ],
        [
         115.808,
         31.77
        ],
        [
         115.852,
         31.787
        ],
        [
         115.886,
         31.776
        ],
        [
         115.915,
         31.815
        ],
        [
         115.894,
         31.832
        ],
        [
         115.895,
         31.865
        ],
        [
         115.92,
         31.92
        ],
        [
         115.909,
         31.943
        ],
        [
         115.929,
         32.003
        ],
        [
         115.922,
         32.05
        ],
        [
         115.942,
         32.166
        ],
        [
         115.913,
         32.228
        ],
        [
         115.899,
         32.391
        ],
        [
         115.865,
         32.459
        ],
        [
         115.883,
         32.488
        ],
        [
         115.846,
         32.502
        ],
        [
         115.876,
         32.542
        ],
        [
         115.91,
         32.567
        ],
        [
         115.891,
         32.576
        ],
        [
         115.861,
         32.537
        ],
        [
         115.789,
         32.469
        ],
        [
         115.772,
         32.505
        ],
        [
         115.742,
         32.476
        ],
        [
         115.705,
         32.495
        ],
        [
         115.668,
         32.41
        ],
        [
         115.658,
         32.429
        ],
        [
         115.626,
         32.405
        ],
        [
         115.604,
         32.426
        ],
        [
         115.571,
         32.419
        ],
        [
         115.523,
         32.442
        ],
        [
         115.509,
         32.467
        ],
        [
         115.509,
         32.469
        ],
        [
         115.498,
         32.492
        ],
        [
         115.409,
         32.549
        ],
        [
         115.411,
         32.575
        ],
        [
         115.305,
         32.553
        ],
        [
         115.306,
         32.583
        ],
        [
         115.267,
         32.578
        ],
        [
         115.243,
         32.593
        ],
        [
         115.201,
         32.592
        ],
        [
         115.183,
         32.667
        ],
        [
         115.179,
         32.726
        ],
        [
         115.19,
         32.771
        ],
        [
         115.211,
         32.786
        ],
        [
         115.19,
         32.812
        ],
        [
         115.197,
         32.856
        ],
        [
         115.156,
         32.865
        ],
        [
         115.139,
         32.898
        ],
        [
         115.03,
         32.907
        ],
        [
         115.035,
         32.933
        ],
        [
         115.009,
         32.94
        ],
        [
         114.943,
         32.935
        ],
        [
         114.916,
         32.971
        ],
        [
         114.883,
         32.99
        ],
        [
         114.892,
         33.02
        ],
        [
         114.926,
         33.017
        ],
        [
         114.924,
         33.027
        ],
        [
         111.238,
         33.027
        ],
        [
         111.259,
         33.006
        ],
        [
         111.274,
         32.972
        ],
        [
         111.243,
         32.931
        ],
        [
         111.255,
         32.884
        ],
        [
         111.276,
         32.903
        ],
        [
         111.293,
         32.859
        ],
        [
         111.38,
         32.829
        ],
        [
         111.413,
         32.757
        ],
        [
         111.476,
         32.76
        ],
        [
         111.458,
         32.726
        ],
        [
         111.513,
         32.674
        ],
        [
         111.53,
         32.628
        ],
        [
         111.578,
         32.593
        ],
        [
         111.641,
         32.635
        ],
        [
         111.646,
         32.606
        ],
        [
         111.713,
         32.606
        ],
        [
         111.809,
         32.537
        ],
        [
         111.858,
         32.529
        ],
        [
         111.89,
         32.503
        ],
        [
         111.949,
         32.517
        ],
        [
         111.976,
         32.472
        ],
        [
         112.015,
         32.45
        ],
        [
         112.064,
         32.474
        ],
        [
         112.081,
         32.426
        ],
        [
         112.156,
         32.377
        ],
        [
         112.15,
         32.412
        ],
        [
         112.173,
         32.385
        ],
        [
         112.206,
         32.393
        ],
        [
         112.328,
         32.322
        ],
        [
         112.36,
         32.366
        ],
        [
         112.391,
         32.371
        ],
        [
         112.449,
         32.343
        ],
        [
         112.477,
         32.381
        ],
        [
         112.531,
         32.377
        ],
        [
         112.546,
         32.404
        ],
        [
         112.589,
         32.381
        ],
        [
         112.612,
         32.387
        ],
        [
         112.645,
         32.368
        ],
        [
         112.717,
         32.358
        ]
       ]
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.769,
         32.301
        ],
        [
         113.749,
         32.273
        ],
        [
         113.758,
         32.277
        ],
        [
         113.768,
         32.284
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         111.159,
         33.027
        ],
        [
         111.159,
         30.044
        ],
        [
         111.242,
         30.04
        ],
        [
         111.267,
         30.011
        ],
        [
         111.332,
         29.971
        ],
        [
         111.343,
         29.945
        ],
        [
         111.383,
         29.95
        ],
        [
         111.394,
         29.913
        ],
        [
         111.437,
         29.93
        ],
        [
         111.476,
         29.919
        ],
        [
         111.527,
         29.926
        ],
        [
         111.554,
         29.894
        ],
        [
         111.669,
         29.889
        ],
        [
         111.669,
         29.889
        ],
        [
         111.705,
         29.89
        ],
        [
         111.724,
         29.909
        ],
        [
         111.724,
         29.909
        ],
        [
         111.758,
         29.92
        ],
        [
         111.811,
         29.901
        ],
        [
         111.861,
         29.857
        ],
        [
         111.899,
         29.856
        ],
        [
         111.899,
         29.856
        ],
        [
         111.926,
         29.837
        ],
        [
         111.966,
         29.833
        ],
        [
         111.955,
         29.797
        ],
        [
         112.008,
         29.779
        ],
        [
         112.076,
         29.744
        ],
        [
         112.066,
         29.681
        ],
        [
         112.09,
         29.685
        ],
        [
         112.111,
         29.659
        ],
        [
         112.178,
         29.657
        ],
        [
         112.202,
         29.634
        ],
        [
         112.244,
         29.659
        ],
        [
         112.234,
         29.616
        ],
        [
         112.303,
         29.586
        ],
        [
         112.281,
         29.537
        ],
        [
         112.291,
         29.517
        ],
        [
         112.333,
         29.545
        ],
        [
         112.369,
         29.541
        ],
        [
         112.425,
         29.599
        ],
        [
         112.44,
         29.634
        ],
        [
         112.499,
         29.629
        ],
        [
         112.542,
         29.601
        ],
        [
         112.572,
         29.624
        ],
        [
         112.64,
         29.608
        ],
        [
         112.651,
         29.592
        ],
        [
         112.694,
         29.602
        ],
        [
         112.714,
         29.649
        ],
        [
         112.733,
         29.645
        ],
        [
         112.789,
         29.681
        ],
        [
         112.794,
         29.736
        ],
        [
         112.861,
         29.783
        ],
        [
         112.894,
         29.784
        ],
        [
         112.902,
         29.791
        ],
        [
         112.929,
         29.774
        ],
        [
         112.924,
         29.767
        ],
        [
         112.927,
         29.692
        ],
        [
         112.945,
         29.683
        ],
        [
         112.975,
         29.733
        ],
        [
         113.026,
         29.773
        ],
        [
         113.005,
         29.694
        ],
        [
         112.916,
         29.621
        ],
        [
         112.912,
         29.607
        ],
        [
         112.95,
         29.473
        ],
        [
         113.035,
         29.524
        ],
        [
         113.057,
         29.523
        ],
        [
         113.078,
         29.438
        ],
        [
         113.1,
         29.46
        ],
        [
         113.145,
         29.449
        ],
        [
         113.182,
         29.486
        ],
        [
         113.222,
         29.544
        ],
        [
         113.277,
         29.595
        ],
        [
         113.378,
         29.703
        ],
        [
         113.572,
         29.849
        ],
        [
         113.575,
         29.809
        ],
        [
         113.551,
         29.768
        ],
        [
         113.559,
         29.727
        ],
        [
         113.54,
         29.7
        ],
        [
         113.547,
         29.676
        ],
        [
         113.606,
         29.667
        ],
        [
         113.663,
         29.684
        ],
        [
         113.681,
         29.643
        ],
        [
         113.704,
         29.635
        ],
        [
         113.739,
         29.579
        ],
        [
         113.71,
         29.555
        ],
        [
         113.631,
         29.523
        ],
        [
         113.678,
         29.514
        ],
        [
         113.755,
         29.447
        ],
        [
         113.731,
         29.394
        ],
        [
         113.675,
         29.388
        ],
        [
         113.661,
         29.333
        ],
        [
         113.632,
         29.316
        ],
        [
         113.61,
         29.251
        ],
        [
         113.652,
         29.226
        ],
        [
         113.693,
         29.226
        ],
        [
         113.692,
         29.197
        ],
        [
         113.663,
         29.169
        ],
        [
         113.691,
         29.115
        ],
        [
         113.696,
         29.077
        ],
        [
         113.723,
         29.105
        ],
        [
         113.75,
         29.061
        ],
        [
         113.776,
         29.095
        ],
        [
         113.816,
         29.105
        ],
        [
         113.853,
         29.059
        ],
        [
         113.882,
         29.065
        ],
        [
         113.877,
         29.038
        ],
        [
         113.898,
         29.029
        ],
        [
         113.942,
         29.047
        ],
        [
         113.952,
         29.093
        ],
        [
         113.987,
         29.126
        ],
        [
         114.035,
         29.152
        ],
        [
         114.063,
         29.205
        ],
        [
         114.17,
         29.217
        ],
        [
         114.252,
         29.235
        ],
        [
         114.259,
         29.344
        ],
        [
         114.307,
         29.365
        ],
        [
         114.342,
         29.328
        ],
        [
         114.376,
         29.323
        ],
        [
         114.44,
         29.342
        ],
        [
         114.466,
         29.324
        ],
        [
         114.52,
         29.326
        ],
        [
         114.59,
         29.353
        ],
        [
         114.622,
         29.38
        ],
        [
         114.673,
         29.396
        ],
        [
         114.741,
         29.387
        ],
        [
         114.76,
         29.363
        ],
        [
         114.784,
         29.386
        ],
        [
         114.812,
         29.383
        ],
        [
         114.866,
         29.404
        ],
        [
         114.895,
         29.398
        ],
        [
         114.931,
         29.423
        ],
        [
         114.947,
         29.465
        ],
        [
         114.936,
         29.487
        ],
        [
         114.905,
         29.473
        ],
        [
         114.918,
         29.454
        ],
        [
         114.889,
         29.436
        ],
        [
         114.86,
         29.476
        ],
        [
         114.901,
         29.506
        ],
        [
         114.94,
         29.494
        ],
        [
         114.967,
         29.522
        ],
        [
         114.948,
         29.543
        ],
        [
         115.001,
         29.572
        ],
        [
         115.033,
         29.547
        ],
        [
         115.087,
         29.56
        ],
        [
         115.086,
         29.526
        ],
        [
         115.154,
         29.51
        ],
        [
         115.157,
         29.585
        ],
        [
         115.12,
         29.598
        ],
        [
         115.144,
         29.646
        ],
        [
         115.118,
         29.656
        ],
        [
         115.113,
         29.685
        ],
        [
         115.177,
         29.655
        ],
        [
         115.251,
         29.66
        ],
        [
         115.286,
         29.618
        ],
        [
         115.305,
         29.637
        ],
        [
         115.355,
         29.65
        ],
        [
         115.413,
         29.689
        ],
        [
         115.471,
         29.74
        ],
        [
         115.479,
         29.811
        ],
        [
         115.512,
         29.84
        ],
        [
         115.612,
         29.841
        ],
        [
         115.668,
         29.85
        ],
        [
         115.707,
         29.838
        ],
        [
         115.763,
         29.793
        ],
        [
         115.837,
         29.748
        ],
        [
         115.91,
         29.724
        ],
        [
         115.966,
         29.724
        ],
        [
         116.05,
         29.762
        ],
        [
         116.087,
         29.795
        ],
        [
         116.135,
         29.82
        ],
        [
         116.128,
         29.898
        ],
        [
         116.074,
         29.97
        ],
        [
         116.091,
         30.036
        ],
        [
         116.079,
         30.062
        ],
        [
         116.088,
         30.11
        ],
        [
         116.056,
         30.181
        ],
        [
         116.066,
         30.205
        ],
        [
         115.998,
         30.253
        ],
        [
         115.986,
         30.291
        ],
        [
         115.903,
         30.314
        ],
        [
         115.915,
         30.338
        ],
        [
         115.885,
         30.38
        ],
        [
         115.921,
         30.416
        ],
        [
         115.895,
         30.453
        ],
        [
         115.91,
         30.519
        ],
        [
         115.888,
         30.543
        ],
        [
         115.877,
         30.582
        ],
        [
         115.849,
         30.602
        ],
        [
         115.819,
         30.598
        ],
        [
         115.814,
         30.637
        ],
        [
         115.763,
         30.685
        ],
        [
         115.783,
         30.752
        ],
        [
         115.851,
         30.757
        ],
        [
         115.864,
         30.816
        ],
        [
         115.849,
         30.828
        ],
        [
         115.865,
         30.864
        ],
        [
         115.933,
         30.89
        ],
        [
         115.976,
         30.932
        ],
        [
         116.04,
         30.958
        ],
        [
         116.072,
         30.957
        ],
        [
         116.059,
         31.013
        ],
        [
         116.015,
         31.012
        ],
        [
         116.006,
         31.035
        ],
        [
         115.939,
         31.047
        ],
        [
         115.94,
         31.072
        ],
        [
         115.888,
         31.109
        ],
        [
         115.867,
         31.148
        ],
        [
         115.838,
         31.127
        ],
        [
         115.798,
         31.128
        ],
        [
         115.779,
         31.112
        ],
        [
         115.701,
         31.201
        ],
        [
         115.655,
         31.211
        ],
        [
         115.604,
         31.174
        ],
        [
         115.586,
         31.144
        ],
        [
         115.54,
         31.195
        ],
        [
         115.54,
         31.232
        ],
        [
         115.508,
         31.268
        ],
        [
         115.473,
         31.265
        ],
        [
         115.444,
         31.344
        ],
        [
         115.407,
         31.338
        ],
        [
         115.372,
         31.349
        ],
        [
         115.393,
         31.39
        ],
        [
         115.374,
         31.406
        ],
        [
         115.339,
         31.404
        ],
        [
         115.301,
         31.384
        ],
        [
         115.251,
         31.392
        ],
        [
         115.253,
         31.422
        ],
        [
         115.211,
         31.442
        ],
        [
         115.218,
         31.515
        ],
        [
         115.236,
         31.555
        ],
        [
         115.213,
         31.555
        ],
        [
         115.164,
         31.605
        ],
        [
         115.125,
         31.599
        ],
        [
         115.107,
         31.568
        ],
        [
         115.115,
         31.53
        ],
        [
         115.096,
         31.508
        ],
        [
         115.023,
         31.528
        ],
        [
         114.995,
         31.471
        ],
        [
         114.962,
         31.495
        ],
        [
         114.884,
         31.469
        ],
        [
         114.87,
         31.479
        ],
        [
         114.83,
         31.459
        ],
        [
         114.789,
         31.48
        ],
        [
         114.779,
         31.521
        ],
        [
         114.696,
         31.526
        ],
        [
         114.642,
         31.582
        ],
        [
         114.617,
         31.585
        ],
        [
         114.573,
         31.554
        ],
        [
         114.561,
         31.561
        ],
        [
         114.548,
         31.624
        ],
        [
         114.571,
         31.661
        ],
        [
         114.586,
         31.762
        ],
        [
         114.55,
         31.767
        ],
        [
         114.531,
         31.743
        ],
        [
         114.444,
         31.728
        ],
        [
         114.403,
         31.747
        ],
        [
         114.35,
         31.756
        ],
        [
         114.293,
         31.753
        ],
        [
         114.236,
         31.833
        ],
        [
         114.192,
         31.852
        ],
        [
         114.134,
         31.843
        ],
        [
         114.122,
         31.809
        ],
        [
         114.087,
         31.782
        ],
        [
         114.018,
         31.771
        ],
        [
         113.989,
         31.75
        ],
        [
         113.952,
         31.794
        ],
        [
         113.958,
         31.853
        ],
        [
         113.915,
         31.877
        ],
        [
         113.894,
         31.847
        ],
        [
         113.854,
         31.843
        ],
        [
         113.831,
         31.879
        ],
        [
         113.832,
         31.919
        ],
        [
         113.806,
         31.929
        ],
        [
         113.817,
         31.964
        ],
        [
         113.758,
         31.99
        ],
        [
         113.792,
         32.036
        ],
        [
         113.729,
         32.083
        ],
        [
         113.723,
         32.124
        ],
        [
         113.75,
         32.116
        ],
        [
         113.782,
         32.185
        ],
        [
         113.753,
         32.216
        ],
        [
         113.739,
         32.256
        ],
        [
         113.749,
         32.273
        ],
        [
         113.769,
         32.301
        ],
        [
         113.754,
         32.328
        ],
        [
         113.768,
         32.37
        ],
        [
         113.736,
         32.411
        ],
        [
         113.7,
         32.421
        ],
        [
         113.651,
         32.413
        ],
        [
         113.625,
         32.361
        ],
        [
         113.512,
         32.317
        ],
        [
         113.429,
         32.271
        ],
        [
         113.376,
         32.298
        ],
        [
         113.354,
         32.295
        ],
        [
         113.318,
         32.327
        ],
        [
         113.334,
         32.336
        ],
        [
         113.237,
         32.407
        ],
        [
         113.212,
         32.432
        ],
        [
         113.159,
         32.411
        ],
        [
         113.156,
         32.381
        ],
        [
         113.119,
         32.376
        ],
        [
         113.108,
         32.399
        ],
        [
         113.079,
         32.395
        ],
        [
         113.026,
         32.425
        ],
        [
         113.001,
         32.417
        ],
        [
         112.992,
         32.378
        ],
        [
         112.912,
         32.391
        ],
        [
         112.889,
         32.377
        ],
        [
         112.861,
         32.396
        ],
        [
         112.776,
         32.359
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ],
        [
         112.645,
         32.368
        ],
        [
         112.612,
         32.387
        ],
        [
         112.589,
         32.381
        ],
        [
         112.546,
         32.404
        ],
        [
         112.531,
         32.377
        ],
        [
         112.477,
         32.381
        ],
        [
         112.449,
         32.343
        ],
        [
         112.391,
         32.371
        ],
        [
         112.36,
         32.366
        ],
        [
         112.328,
         32.322
        ],
        [
         112.206,
         32.393
        ],
        [
         112.173,
         32.385
        ],
        [
         112.15,
         32.412
        ],
        [
         112.156,
         32.377
        ],
        [
         112.081,
         32.426
        ],
        [
         112.064,
         32.474
        ],
        [
         112.015,
         32.45
        ],
        [
         111.976,
         32.472
        ],
        [
         111.949,
         32.517
        ],
        [
         111.89,
         32.503
        ],
        [
         111.858,
         32.529
        ],
        [
         111.809,
         32.537
        ],
        [
         111.713,
         32.606
        ],
        [
         111.646,
         32.606
        ],
        [
         111.641,
         32.635
        ],
        [
         111.578,
         32.593
        ],
        [
         111.53,
         32.628
        ],
        [
         111.513,
         32.674
        ],
        [
         111.458,
         32.726
        ],
        [
         111.476,
         32.76
        ],
        [
         111.413,
         32.757
        ],
        [
         111.38,
         32.829
        ],
        [
         111.293,
         32.859
        ],
        [
         111.276,
         32.903
        ],
        [
         111.255,
         32.884
        ],
        [
         111.243,
         32.931
        ],
        [
         111.274,
         32.972
        ],
        [
         111.259,
         33.006
        ],
        [
         111.238,
         33.027
        ],
        [
         111.159,
         33.027
        ]
       ]
      ],
      [
       [
        [
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ]
       ]
      ],
      [
       [
        [
         112.902,
         29.791
        ],
        [
         112.894,
         29.784
        ],
        [
         112.924,
         29.767
        ],
        [
         112.929,
         29.774
        ],
        [
         112.902,
         29.791
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.175,
         28.5
        ],
        [
         114.154,
         28.507
        ],
        [
         114.138,
         28.534
        ],
        [
         114.086,
         28.558
        ],
        [
         114.132,
         28.607
        ],
        [
         114.122,
         28.623
        ],
        [
         114.157,
         28.762
        ],
        [
         114.138,
         28.78
        ],
        [
         114.154,
         28.829
        ],
        [
         114.125,
         28.843
        ],
        [
         114.077,
         28.834
        ],
        [
         114.056,
         28.872
        ],
        [
         114.06,
         28.903
        ],
        [
         114.028,
         28.891
        ],
        [
         114.005,
         28.918
        ],
        [
         114.009,
         28.955
        ],
        [
         113.974,
         28.938
        ],
        [
         113.955,
         28.979
        ],
        [
         113.962,
         28.999
        ],
        [
         113.942,
         29.047
        ],
        [
         113.898,
         29.029
        ],
        [
         113.877,
         29.038
        ],
        [
         113.882,
         29.065
        ],
        [
         113.853,
         29.059
        ],
        [
         113.816,
         29.105
        ],
        [
         113.776,
         29.095
        ],
        [
         113.75,
         29.061
        ],
        [
         113.723,
         29.105
        ],
        [
         113.696,
         29.077
        ],
        [
         113.691,
         29.115
        ],
        [
         113.663,
         29.169
        ],
        [
         113.692,
         29.197
        ],
        [
         113.693,
         29.226
        ],
        [
         113.652,
         29.226
        ],
        [
         113.61,
         29.251
        ],
        [
         113.632,
         29.316
        ],
        [
         113.661,
         29.333
        ],
        [
         113.675,
         29.388
        ],
        [
         113.731,
         29.394
        ],
        [
         113.755,
         29.447
        ],
        [
         113.678,
         29.514
        ],
        [
         113.631,
         29.523
        ],
        [
         113.71,
         29.555
        ],
        [
         113.739,
         29.579
        ],
        [
         113.704,
         29.635
        ],
        [
         113.681,
         29.643
        ],
        [
         113.663,
         29.684
        ],
        [
         113.606,
         29.667
        ],
        [
         113.547,
         29.676
        ],
        [
         113.54,
         29.7
        ],
        [
         113.559,
         29.727
        ],
        [
         113.551,
         29.768
        ],
        [
         113.575,
         29.809
        ],
        [
         113.572,
         29.849
        ],
        [
         113.378,
         29.703
        ],
        [
         113.277,
         29.595
        ],
        [
         113.222,
         29.544
        ],
        [
         113.182,
         29.486
        ],
        [
         113.145,
         29.449
        ],
        [
         113.1,
         29.46
        ],
        [
         113.078,
         29.438
        ],
        [
         113.057,
         29.523
        ],
        [
         113.035,
         29.524
        ],
        [
         112.95,
         29.473
        ],
        [
         112.912,
         29.607
        ],
        [
         112.916,
         29.621
        ],
        [
         113.005,
         29.694
        ],
        [
         113.026,
         29.773
        ],
        [
         112.975,
         29.733
        ],
        [
         112.945,
         29.683
        ],
        [
         112.927,
         29.692
        ],
        [
         112.924,
         29.767
        ],
        [
         112.894,
         29.784
        ],
        [
         112.861,
         29.783
        ],
        [
         112.794,
         29.736
        ],
        [
         112.789,
         29.681
        ],
        [
         112.733,
         29.645
        ],
        [
         112.714,
         29.649
        ],
        [
         112.694,
         29.602
        ],
        [
         112.651,
         29.592
        ],
        [
         112.64,
         29.608
        ],
        [
         112.572,
         29.624
        ],
        [
         112.542,
         29.601
        ],
        [
         112.499,
         29.629
        ],
        [
         112.44,
         29.634
        ],
        [
         112.425,
         29.599
        ],
        [
         112.369,
         29.541
        ],
        [
         112.333,
         29.545
        ],
        [
         112.291,
         29.517
        ],
        [
         112.281,
         29.537
        ],
        [
         112.303,
         29.586
        ],
        [
         112.234,
         29.616
        ],
        [
         112.244,
         29.659
        ],
        [
         112.202,
         29.634
        ],
        [
         112.178,
         29.657
        ],
        [
         112.111,
         29.659
        ],
        [
         112.09,
         29.685
        ],
        [
         112.066,
         29.681
        ],
        [
         112.076,
         29.744
        ],
        [
         112.008,
         29.779
        ],
        [
         111.955,
         29.797
        ],
        [
         111.966,
         29.833
        ],
        [
         111.926,
         29.837
        ],
        [
         111.899,
         29.856
        ],
        [
         111.899,
         29.856
        ],
        [
         111.861,
         29.857
        ],
        [
         111.811,
         29.901
        ],
        [
         111.758,
         29.92
        ],
        [
         111.724,
         29.909
        ],
        [
         111.724,
         29.909
        ],
        [
         111.705,
         29.89
        ],
        [
         111.669,
         29.889
        ],
        [
         111.669,
         29.889
        ],
        [
         111.554,
         29.894
        ],
        [
         111.527,
         29.926
        ],
        [
         111.476,
         29.919
        ],
        [
         111.437,
         29.93
        ],
        [
         111.394,
         29.913
        ],
        [
         111.383,
         29.95
        ],
        [
         111.343,
         29.945
        ],
        [
         111.332,
         29.971
        ],
        [
         111.267,
         30.011
        ],
        [
         111.242,
         30.04
        ],
        [
         111.159,
         30.044
        ],
        [
         111.159,
         28.5
        ],
        [
         114.175,
         28.5
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.982,
       29.279
      ],
      [
       116.034,
       29.319
      ],
      [
       116.088,
       29.437
      ],
      [
       116.198,
       29.751
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       111.478,
       32.568
      ],
      [
       111.159,
       32.683
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.905,
        29.031
       ],
       [
        112.801,
        28.927
       ],
       [
        112.693,
        28.874
       ],
       [
        112.545,
        28.838
       ],
       [
        112.351,
        28.861
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.994,
        29.147
       ],
       [
        113.071,
        29.389
       ]
      ]
     ]
    },
    "n": "Yuan"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       111.159,
       30.829
      ],
      [
       111.159,
       30.829
      ],
      [
       111.228,
       30.781
      ],
      [
       111.309,
       30.673
      ],
      [
       111.399,
       30.507
      ],
      [
       111.465,
       30.418
      ],
      [
       111.507,
       30.407
      ],
      [
       111.52,
       30.384
      ],
      [
       111.507,
       30.351
      ],
      [
       111.512,
       30.318
      ],
      [
       111.538,
       30.287
      ],
      [
       111.571,
       30.287
      ],
      [
       111.612,
       30.311
      ],
      [
       111.736,
       30.389
      ],
      [
       111.818,
       30.426
      ],
      [
       111.86,
       30.421
      ],
      [
       111.911,
       30.387
      ],
      [
       111.969,
       30.323
      ],
      [
       112.058,
       30.293
      ],
      [
       112.179,
       30.295
      ],
      [
       112.247,
       30.278
      ],
      [
       112.263,
       30.242
      ],
      [
       112.252,
       30.191
      ],
      [
       112.215,
       30.125
      ],
      [
       112.252,
       30.068
      ],
      [
       112.363,
       30.018
      ],
      [
       112.406,
       29.927
      ],
      [
       112.381,
       29.793
      ],
      [
       112.41,
       29.738
      ],
      [
       112.492,
       29.762
      ],
      [
       112.544,
       29.792
      ],
      [
       112.569,
       29.784
      ],
      [
       112.593,
       29.766
      ],
      [
       112.604,
       29.752
      ],
      [
       112.629,
       29.752
      ],
      [
       112.632,
       29.765
      ],
      [
       112.657,
       29.788
      ],
      [
       112.707,
       29.799
      ],
      [
       112.739,
       29.786
      ],
      [
       112.732,
       29.772
      ],
      [
       112.745,
       29.754
      ],
      [
       112.782,
       29.744
      ],
      [
       112.819,
       29.737
      ],
      [
       112.885,
       29.76
      ],
      [
       112.942,
       29.74
      ],
      [
       112.955,
       29.691
      ],
      [
       112.94,
       29.669
      ],
      [
       112.917,
       29.6
      ],
      [
       112.924,
       29.53
      ],
      [
       112.951,
       29.508
      ],
      [
       112.989,
       29.505
      ],
      [
       113.017,
       29.494
      ],
      [
       113.031,
       29.481
      ],
      [
       113.053,
       29.469
      ],
      [
       113.097,
       29.456
      ],
      [
       113.128,
       29.463
      ]
     ]
    },
    "n": "Chang Jiang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.817,
       28.5
      ],
      [
       115.816,
       28.585
      ],
      [
       115.869,
       28.716
      ],
      [
       115.975,
       28.888
      ],
      [
       116.016,
       29.05
      ],
      [
       115.982,
       29.279
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.478,
        32.568
       ],
       [
        111.602,
        32.468
       ],
       [
        111.642,
        32.407
       ],
       [
        111.639,
        32.354
       ],
       [
        111.685,
        32.265
       ],
       [
        111.78,
        32.141
       ],
       [
        111.919,
        32.065
       ],
       [
        112.101,
        32.036
       ],
       [
        112.189,
        31.966
       ],
       [
        112.181,
        31.853
       ],
       [
        112.225,
        31.771
       ],
       [
        112.322,
        31.719
       ],
       [
        112.39,
        31.657
       ],
       [
        112.432,
        31.586
       ],
       [
        112.44,
        31.496
       ],
       [
        112.417,
        31.388
       ],
       [
        112.434,
        31.308
       ],
       [
        112.521,
        31.23
       ],
       [
        112.556,
        31.219
       ],
       [
        112.572,
        31.183
       ],
       [
        112.58,
        31.118
       ],
       [
        112.569,
        31.096
       ],
       [
        112.539,
        31.077
       ],
       [
        112.523,
        31.039
       ],
       [
        112.556,
        30.939
       ],
       [
        112.599,
        30.875
       ],
       [
        112.634,
        30.848
       ],
       [
        112.632,
        30.815
       ],
       [
        112.622,
        30.787
       ],
       [
        112.605,
        30.713
       ],
       [
        112.627,
        30.67
       ],
       [
        112.689,
        30.658
       ],
       [
        112.713,
        30.627
       ],
       [
        112.707,
        30.601
       ],
       [
        112.716,
        30.575
       ],
       [
        112.754,
        30.572
       ],
       [
        112.797,
        30.564
       ],
       [
        112.849,
        30.519
       ],
       [
        112.886,
        30.515
       ],
       [
        112.973,
        30.531
       ],
       [
        113.073,
        30.475
       ],
       [
        113.21,
        30.43
       ],
       [
        113.381,
        30.407
       ],
       [
        113.512,
        30.443
       ],
       [
        113.602,
        30.538
       ],
       [
        113.672,
        30.597
       ],
       [
        113.769,
        30.626
       ],
       [
        113.801,
        30.622
       ],
       [
        113.838,
        30.63
       ],
       [
        113.86,
        30.644
       ],
       [
        113.9,
        30.637
       ],
       [
        113.926,
        30.644
       ],
       [
        113.939,
        30.66
       ],
       [
        113.964,
        30.657
       ],
       [
        114.009,
        30.615
       ],
       [
        114.096,
        30.586
       ],
       [
        114.288,
        30.572
       ]
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.128,
        29.463
       ],
       [
        113.166,
        29.484
       ],
       [
        113.21,
        29.538
       ],
       [
        113.53,
        29.832
       ],
       [
        113.696,
        29.949
       ],
       [
        113.76,
        29.939
       ],
       [
        113.86,
        29.972
       ],
       [
        113.995,
        30.05
       ],
       [
        114.011,
        30.124
       ],
       [
        113.909,
        30.196
       ],
       [
        113.885,
        30.246
       ],
       [
        113.94,
        30.276
       ],
       [
        113.99,
        30.279
       ],
       [
        114.032,
        30.253
       ],
       [
        114.116,
        30.328
       ],
       [
        114.288,
        30.572
       ],
       [
        114.303,
        30.593
       ],
       [
        114.396,
        30.664
       ],
       [
        114.472,
        30.661
       ],
       [
        114.558,
        30.603
       ],
       [
        114.662,
        30.582
       ],
       [
        114.784,
        30.598
       ],
       [
        114.841,
        30.565
       ],
       [
        114.833,
        30.482
       ],
       [
        114.885,
        30.423
       ],
       [
        114.997,
        30.387
       ],
       [
        115.058,
        30.336
       ],
       [
        115.067,
        30.269
       ],
       [
        115.102,
        30.229
       ],
       [
        115.16,
        30.216
       ],
       [
        115.252,
        30.128
       ],
       [
        115.376,
        29.966
       ],
       [
        115.504,
        29.879
       ],
       [
        115.638,
        29.867
       ],
       [
        115.751,
        29.828
       ],
       [
        115.843,
        29.764
       ],
       [
        115.983,
        29.746
       ],
       [
        116.171,
        29.775
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.198,
        29.751
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.212,
        29.785
       ],
       [
        116.327,
        29.815
       ],
       [
        116.451,
        29.868
       ],
       [
        116.544,
        29.931
       ],
       [
        116.606,
        30.006
       ],
       [
        116.683,
        30.061
       ],
       [
        116.776,
        30.097
       ],
       [
        116.847,
        30.168
       ],
       [
        116.896,
        30.272
       ],
       [
        116.9,
        30.292
       ],
       [
        116.9,
        30.397
       ],
       [
        116.9,
        30.399
       ],
       [
        116.9,
        30.399
       ]
      ]
     ]
    },
    "n": "Yangtze"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.159,
        28.829
       ],
       [
        111.207,
        28.781
       ],
       [
        111.279,
        28.762
       ],
       [
        111.405,
        28.791
       ],
       [
        111.522,
        28.986
       ],
       [
        111.559,
        29.005
       ],
       [
        111.593,
        28.99
       ],
       [
        111.626,
        28.996
       ],
       [
        111.655,
        29.013
       ],
       [
        111.679,
        29.013
       ],
       [
        111.705,
        28.992
       ],
       [
        111.744,
        28.988
       ],
       [
        111.796,
        29.01
       ],
       [
        111.865,
        29.012
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.905,
        29.031
       ],
       [
        112.994,
        29.147
       ]
      ],
      [
       [
        113.069,
        29.388
       ],
       [
        113.128,
        29.463
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.706,
        29.136
       ],
       [
        116.709,
        29.102
       ],
       [
        116.672,
        29.098
       ],
       [
        116.635,
        29.102
       ],
       [
        116.618,
        29.115
       ],
       [
        116.581,
        29.128
       ],
       [
        116.521,
        29.143
       ],
       [
        116.496,
        29.122
       ],
       [
        116.477,
        29.043
       ],
       [
        116.503,
        28.953
       ],
       [
        116.53,
        28.894
       ],
       [
        116.537,
        28.845
       ],
       [
        116.512,
        28.804
       ],
       [
        116.468,
        28.805
       ],
       [
        116.441,
        28.86
       ],
       [
        116.418,
        28.88
       ],
       [
        116.409,
        28.905
       ],
       [
        116.348,
        28.906
       ],
       [
        116.329,
        28.961
       ],
       [
        116.097,
        29.106
       ],
       [
        116.064,
        29.149
       ],
       [
        116.047,
        29.19
       ],
       [
        115.982,
        29.279
       ],
       [
        115.965,
        29.311
       ],
       [
        116.002,
        29.394
       ],
       [
        116.026,
        29.453
       ],
       [
        116.091,
        29.555
       ],
       [
        116.117,
        29.653
       ],
       [
        116.1,
        29.688
       ],
       [
        116.082,
        29.703
       ],
       [
        116.113,
        29.726
       ],
       [
        116.18,
        29.751
       ],
       [
        116.198,
        29.751
       ],
       [
        116.23,
        29.698
       ],
       [
        116.235,
        29.666
       ],
       [
        116.207,
        29.645
       ],
       [
        116.199,
        29.604
       ],
       [
        116.181,
        29.573
       ],
       [
        116.159,
        29.519
       ],
       [
        116.145,
        29.454
       ],
       [
        116.11,
        29.427
       ],
       [
        116.115,
        29.402
       ],
       [
        116.143,
        29.386
       ],
       [
        116.188,
        29.382
       ],
       [
        116.196,
        29.362
       ],
       [
        116.153,
        29.334
       ],
       [
        116.137,
        29.309
       ],
       [
        116.153,
        29.253
       ],
       [
        116.31,
        29.232
       ],
       [
        116.343,
        29.234
       ],
       [
        116.368,
        29.223
       ],
       [
        116.358,
        29.186
       ],
       [
        116.362,
        29.154
       ],
       [
        116.407,
        29.176
       ],
       [
        116.44,
        29.236
       ],
       [
        116.469,
        29.25
       ],
       [
        116.54,
        29.24
       ],
       [
        116.604,
        29.237
       ],
       [
        116.64,
        29.237
       ],
       [
        116.664,
        29.226
       ],
       [
        116.661,
        29.19
       ],
       [
        116.674,
        29.159
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ]
      ]
     ]
    },
    "n": "Poyang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.461,
        30.055
       ],
       [
        116.496,
        30.02
       ],
       [
        116.52,
        29.988
       ],
       [
        116.498,
        29.964
       ],
       [
        116.388,
        29.966
       ],
       [
        116.29,
        29.994
       ],
       [
        116.259,
        30.048
       ],
       [
        116.257,
        30.094
       ],
       [
        116.281,
        30.079
       ],
       [
        116.298,
        30.086
       ],
       [
        116.327,
        30.087
       ],
       [
        116.386,
        30.069
       ],
       [
        116.442,
        30.077
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ]
      ]
     ]
    },
    "n": "Daguan Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.242,
        30.032
       ],
       [
        116.253,
        30.01
       ],
       [
        116.26,
        29.976
       ],
       [
        116.254,
        29.935
       ],
       [
        116.211,
        29.908
       ],
       [
        116.131,
        29.898
       ],
       [
        116.044,
        29.881
       ],
       [
        115.977,
        29.952
       ],
       [
        115.985,
        30.016
       ],
       [
        116.073,
        30.0
       ],
       [
        116.118,
        30.0
       ],
       [
        116.129,
        30.026
       ],
       [
        116.15,
        30.061
       ],
       [
        116.195,
        30.038
       ]
      ]
     ]
    },
    "n": "Long Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.35,
        30.196
       ],
       [
        114.371,
        30.211
       ],
       [
        114.395,
        30.236
       ],
       [
        114.406,
        30.268
       ],
       [
        114.444,
        30.285
       ],
       [
        114.496,
        30.289
       ],
       [
        114.501,
        30.311
       ],
       [
        114.474,
        30.333
       ],
       [
        114.458,
        30.364
       ],
       [
        114.501,
        30.366
       ],
       [
        114.539,
        30.345
       ],
       [
        114.603,
        30.3
       ],
       [
        114.623,
        30.258
       ],
       [
        114.642,
        30.133
       ],
       [
        114.623,
        30.096
       ],
       [
        114.581,
        30.137
       ],
       [
        114.542,
        30.188
       ],
       [
        114.509,
        30.194
       ],
       [
        114.474,
        30.158
       ],
       [
        114.445,
        30.085
       ],
       [
        114.408,
        30.106
       ],
       [
        114.365,
        30.165
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ]
      ]
     ]
    },
    "n": "Liangzi Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.424,
        30.108
       ],
       [
        116.401,
        30.118
       ],
       [
        116.387,
        30.143
       ],
       [
        116.373,
        30.161
       ],
       [
        116.351,
        30.175
       ],
       [
        116.317,
        30.203
       ],
       [
        116.314,
        30.23
       ],
       [
        116.335,
        30.234
       ],
       [
        116.357,
        30.245
       ],
       [
        116.371,
        30.244
       ],
       [
        116.39,
        30.224
       ],
       [
        116.443,
        30.207
       ],
       [
        116.472,
        30.204
       ],
       [
        116.514,
        30.208
       ],
       [
        116.539,
        30.207
       ],
       [
        116.54,
        30.18
       ],
       [
        116.527,
        30.149
       ],
       [
        116.525,
        30.116
       ],
       [
        116.526,
        30.089
       ],
       [
        116.506,
        30.078
       ],
       [
        116.494,
        30.085
       ],
       [
        116.468,
        30.104
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ]
      ]
     ]
    },
    "n": "Po Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.451,
        29.94
       ],
       [
        113.454,
        29.914
       ],
       [
        113.426,
        29.876
       ],
       [
        113.391,
        29.826
       ],
       [
        113.369,
        29.785
       ],
       [
        113.34,
        29.76
       ],
       [
        113.312,
        29.749
       ],
       [
        113.275,
        29.78
       ],
       [
        113.237,
        29.848
       ],
       [
        113.23,
        29.893
       ],
       [
        113.249,
        29.904
       ],
       [
        113.302,
        29.888
       ],
       [
        113.331,
        29.894
       ],
       [
        113.362,
        29.949
       ],
       [
        113.406,
        29.953
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ]
      ]
     ]
    },
    "n": "Hong Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.839,
        30.287
       ],
       [
        114.812,
        30.283
       ],
       [
        114.783,
        30.278
       ],
       [
        114.753,
        30.283
       ],
       [
        114.739,
        30.279
       ],
       [
        114.743,
        30.263
       ],
       [
        114.76,
        30.238
       ],
       [
        114.781,
        30.221
       ],
       [
        114.778,
        30.215
       ],
       [
        114.762,
        30.211
       ],
       [
        114.735,
        30.212
       ],
       [
        114.704,
        30.212
       ],
       [
        114.679,
        30.228
       ],
       [
        114.679,
        30.25
       ],
       [
        114.68,
        30.277
       ],
       [
        114.674,
        30.3
       ],
       [
        114.713,
        30.33
       ],
       [
        114.764,
        30.345
       ],
       [
        114.784,
        30.344
       ],
       [
        114.806,
        30.345
       ],
       [
        114.834,
        30.327
       ],
       [
        114.846,
        30.302
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
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
        114.601,
        30.662
       ],
       [
        114.622,
        30.656
       ],
       [
        114.64,
        30.66
       ],
       [
        114.649,
        30.674
       ],
       [
        114.646,
        30.715
       ],
       [
        114.674,
        30.724
       ],
       [
        114.703,
        30.735
       ],
       [
        114.719,
        30.751
       ],
       [
        114.746,
        30.738
       ],
       [
        114.781,
        30.701
       ],
       [
        114.786,
        30.663
       ],
       [
        114.756,
        30.65
       ],
       [
        114.696,
        30.613
       ],
       [
        114.622,
        30.608
       ],
       [
        114.584,
        30.65
       ],
       [
        114.586,
        30.663
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
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
        114.601,
        30.344
       ],
       [
        114.553,
        30.384
       ],
       [
        114.499,
        30.418
       ],
       [
        114.482,
        30.431
       ],
       [
        114.495,
        30.439
       ],
       [
        114.533,
        30.435
       ],
       [
        114.575,
        30.405
       ],
       [
        114.601,
        30.399
       ],
       [
        114.631,
        30.42
       ],
       [
        114.633,
        30.44
       ],
       [
        114.629,
        30.456
       ],
       [
        114.607,
        30.483
       ],
       [
        114.609,
        30.496
       ],
       [
        114.64,
        30.486
       ],
       [
        114.666,
        30.49
       ],
       [
        114.678,
        30.497
       ],
       [
        114.701,
        30.512
       ],
       [
        114.739,
        30.494
       ],
       [
        114.756,
        30.477
       ],
       [
        114.752,
        30.463
       ],
       [
        114.748,
        30.443
       ],
       [
        114.753,
        30.429
       ],
       [
        114.727,
        30.42
       ],
       [
        114.683,
        30.397
       ],
       [
        114.655,
        30.346
       ],
       [
        114.623,
        30.339
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
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
        114.301,
        30.025
       ],
       [
        114.289,
        30.002
       ],
       [
        114.252,
        29.972
       ],
       [
        114.244,
        29.938
       ],
       [
        114.264,
        29.915
       ],
       [
        114.255,
        29.906
       ],
       [
        114.218,
        29.901
       ],
       [
        114.171,
        29.921
       ],
       [
        114.143,
        29.988
       ],
       [
        114.147,
        30.083
       ],
       [
        114.177,
        30.114
       ],
       [
        114.218,
        30.141
       ],
       [
        114.249,
        30.141
       ],
       [
        114.246,
        30.115
       ],
       [
        114.237,
        30.084
       ],
       [
        114.253,
        30.045
       ],
       [
        114.273,
        30.044
       ],
       [
        114.294,
        30.043
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ]
      ]
     ]
    },
    "n": "Huangtang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.158,
        29.872
       ],
       [
        114.137,
        29.862
       ],
       [
        114.114,
        29.883
       ],
       [
        114.087,
        29.934
       ],
       [
        114.063,
        29.927
       ],
       [
        114.029,
        29.898
       ],
       [
        113.99,
        29.879
       ],
       [
        113.969,
        29.88
       ],
       [
        113.963,
        29.892
       ],
       [
        113.984,
        29.916
       ],
       [
        114.003,
        29.942
       ],
       [
        113.996,
        29.959
       ],
       [
        113.97,
        29.963
       ],
       [
        113.944,
        29.966
       ],
       [
        113.941,
        29.981
       ],
       [
        114.019,
        30.001
       ],
       [
        114.074,
        30.027
       ],
       [
        114.101,
        30.022
       ],
       [
        114.13,
        29.935
       ],
       [
        114.152,
        29.89
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "_bbox": [
   111.159,
   28.5,
   116.9,
   33.027
  ]
 }
};
