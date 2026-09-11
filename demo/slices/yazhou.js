// 本文件由 tools/build.py 自动生成（切片 yazhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yazhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yazhou"] = {
 "meta": {
  "kind": "county",
  "region": "thought",
  "province": "hainan",
  "title": "崖州（贬谪文脉·黎峒·琼崖）",
  "dossier_label": "崖州",
  "subtitle": "唐置崖州 · 鉴真驻锡 · 李德裕贬死 · 海南贬谪文化之渊薮",
  "primary_place": "yazhou_cheng",
  "dossier_event": "event:ev_yazhou_01",
  "vocab_pack": "yazhou",
  "terrain_grid": "china_coarse",
  "lead": "崖州孤悬海南南鄙，唐武德置州、天宝鉴真驻锡、大中李德裕贬死，宋世苏轼、卢多逊、胡铨相继贬琼，贬谪文脉与黎峒社会交织，为海南历史文化之渊薮。下方为置州、弘法、贬谪三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以新旧唐书、资治通鉴、宋史等后世官修为本，崖州志、广东通志、太平寰宇记与地方志作补充，现代考订为学界视角；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_yazhou_01": "唐置崖州",
   "event:ev_yazhou_02": "鉴真驻锡",
   "event:ev_yazhou_03": "李德裕贬",
   "place:yazhou_cheng": "崖州城",
   "person:li_deyu": "李德裕"
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
    "note": "唐置崖州、宋贬士人经略，州县建制嵌入海南社会治理"
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
    "note": "崖州港为南海航线津渡，海运连中原与琼南"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "黎汉错居、贬谪士人带来文教，海南社会格局渐定"
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
    "note": "崖州南扼南海、北控黎峒，为经略海南与南海之锁钥"
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
  "page": "county.html?scene=yazhou",
  "key": "yazhou",
  "scene_id": "yazhou"
 },
 "sources": [
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
   "id": "yazhou_zhi",
   "title": "崖州志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距唐崖州约千余年",
   "color": "#7A6A52",
   "compiler": "《崖州志》（清修）",
   "period": "清/民",
   "note": "崖州地方志，载贬谪人物、山川形胜、寺观与海防。"
  },
  {
   "id": "guangdong_tongzhi",
   "title": "广东通志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清修（郝玉麟等），距明以来黎事数百年",
   "color": "#7A6A52",
   "compiler": "《广东通志》（清修）",
   "period": "清",
   "note": "广东通志，载黎族（黎峒）分布与州县建制。"
  },
  {
   "id": "taiping_huanyuji",
   "title": "太平寰宇记",
   "party": "宋·官修",
   "stance_label": "北宋官修地理总志",
   "distance_label": "成书宋太宗太平兴国年间（约980），距唐崖州约百年",
   "color": "#6C7A89",
   "compiler": "乐史（宋）",
   "period": "宋",
   "note": "北宋地理总志，振州（崖州）山川风俗所出。"
  }
 ],
 "places": [
  {
   "id": "yazhou_cheng",
   "name": "崖州城（崖城）",
   "lon": 109.12,
   "lat": 18.377,
   "type": "capital",
   "modern": "今海南三亚市崖州区（崖城镇）",
   "note": "唐武德五年置崖州，州治屡迁，明清崖州治于此（崖城）。孤悬海南南鄙，南临南海，北倚黎峒山地，为海南岛南部军政与贬谪要会。坐标取崖城，approx（城镇级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城镇级精度），待 CHGIS 精修",
   "elev": 132
  },
  {
   "id": "nanshan",
   "name": "南山（鉴真驻锡处）",
   "lon": 109.21,
   "lat": 18.3,
   "type": "religious",
   "modern": "今三亚市崖州区南山",
   "note": "唐天宝七载鉴真东渡遇风漂至振州（崖州），于南山一带驻锡建寺弘法，为海南佛教始传之地说。坐标取南山景区，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（景区级精度），待 CHGIS 精修",
   "elev": 86
  },
  {
   "id": "li_settlement",
   "name": "黎峒（黎族山地聚落）",
   "lon": 109.45,
   "lat": 18.5,
   "type": "settlement",
   "modern": "今海南岛中部—南部山地（五指山—雅加大岭一带）",
   "note": "黎族为海南岛原住族群，聚于中部山地（黎峒），与沿海州县错居。崖州北境黎峒尤盛，土流分治。坐标取黎族山地聚落，approx（山脉级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（山地级精度），待 CHGIS 精修",
   "elev": 376
  },
  {
   "id": "sanya_bay",
   "name": "三亚湾（临川海滨）",
   "lon": 109.51,
   "lat": 18.23,
   "type": "coast",
   "modern": "今三亚湾",
   "note": "崖州南滨南海，三亚湾（临川）为滨海沃壤，舟舶可泊，贬谪士人多由此登陆或经此。坐标取三亚湾，approx（海岸级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（海岸级精度），待 CHGIS 精修",
   "elev": 25
  },
  {
   "id": "yazhou_port",
   "name": "崖州港（临川港）",
   "lon": 109.13,
   "lat": 18.25,
   "type": "port",
   "modern": "今三亚港一带",
   "note": "崖州港为海南岛南部通舟楫之津，南海航线所经，历代贬谪与海运登陆处。坐标取临川港一带，approx（港埠级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（港埠级精度），待 CHGIS 精修",
   "elev": 38
  }
 ],
 "persons": [
  {
   "id": "li_deyu",
   "name": "李德裕",
   "era": "唐",
   "role": "宰相·崖州司户参军（贬）",
   "note": "唐武宗朝宰相，牛李党争中李党领袖；大中三年贬崖州司户，卒于贬所，为崖州贬谪文脉之开。",
   "influence": 1
  },
  {
   "id": "jianzhen",
   "name": "鉴真",
   "era": "唐",
   "role": "高僧·东渡弘法",
   "note": "扬州大明寺高僧，六次东渡日本；天宝七载遇风漂至振州（崖州），驻锡建寺，为佛教入琼之始。",
   "influence": 0
  },
  {
   "id": "su_shi",
   "name": "苏轼",
   "era": "宋",
   "role": "文豪·贬儋州（过崖州）",
   "note": "北宋文豪，绍圣四年（1097）贬琼州别驾、昌化军（儋州）安置，渡海经崖州，留题咏，海南文脉因之大兴。",
   "influence": 1
  },
  {
   "id": "lu_duoxin",
   "name": "卢多逊",
   "era": "宋",
   "role": "宰相·贬崖州（流）",
   "note": "北宋初宰相，太平兴国七年（982）坐事流崖州，卒于贬所，宋初贬琼名臣之一。",
   "influence": 1
  },
  {
   "id": "hu_da",
   "name": "胡铨",
   "era": "宋",
   "role": "忠谏之臣·贬吉阳军",
   "note": "南宋主战派名臣，绍兴间上书乞斩秦桧，远谪吉阳军（今三亚崖州一带），居琼数年，讲学著书，海南士风赖之。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "YZ_R01",
   "subject": "event:ev_yazhou_01",
   "predicate": "置州建制",
   "value_text": "唐武德五年平萧铣，于海南岛置崖州（珠崖郡），领数县，海南岛南部纳入州县体系",
   "value": 622,
   "source": "xin_tangshu",
   "layer": "record",
   "era": "唐武德五年",
   "place": "yazhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（新唐书·地理志：崖州珠崖郡，本隋珠崖郡）",
   "note": "新唐书·地理志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "YZ_R02",
   "subject": "event:ev_yazhou_03",
   "predicate": "贬谪",
   "value_text": "唐大中三年，李德裕由太子少保分司东都贬为崖州司户参军，渡海抵崖州，逾年卒",
   "value": 849,
   "source": "zizhi_tongjian",
   "layer": "record",
   "era": "唐大中三年",
   "place": "yazhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（资治通鉴·唐纪：贬李德裕为崖州司户）",
   "note": "资治通鉴·唐纪；新唐书·李德裕传",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "YZ_R03",
   "subject": "event:ev_yazhou_02",
   "predicate": "驻锡弘法",
   "value_text": "唐天宝七载，鉴真东渡遇飓风漂至振州（崖州），居一年余，建寺弘法、补造佛像，为佛教入琼之始",
   "value": 748,
   "source": "yazhou_zhi",
   "layer": "record",
   "era": "唐天宝七载",
   "place": "nanshan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（崖州志：鉴真驻锡建寺）",
   "note": "崖州志；唐大和尚东征传",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YZ_R04",
   "subject": "place:li_settlement",
   "predicate": "黎族聚居",
   "value_text": "黎族为海南岛原住族群，聚于中部山地（黎峒），与沿海州县错居，崖州北境黎峒尤盛",
   "value": null,
   "source": "guangdong_tongzhi",
   "layer": "record",
   "era": "清",
   "place": "li_settlement",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（广东通志：黎峒错居崖州之北）",
   "note": "广东通志；黎族社会史",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YZ_R05",
   "subject": "place:yazhou_cheng",
   "predicate": "形胜",
   "value_text": "崖州孤悬海南南鄙，南临南海，北倚黎峒山地，为海南岛南部军政与交通要会",
   "value": null,
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "yazhou_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（旧唐书·地理志：崖州，岭南道）",
   "note": "旧唐书·地理志",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "YZ_R06",
   "subject": "person:su_shi",
   "predicate": "过崖题咏",
   "value_text": "宋绍圣四年，苏轼贬昌化军（儋州）安置，渡海经崖州，留题咏，海南文脉因之大兴",
   "value": 1097,
   "source": "songshi",
   "layer": "record",
   "era": "宋元符",
   "place": "yazhou_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（宋史·苏轼传：贬琼州别驾、昌化军安置）",
   "note": "宋史·苏轼传；苏东坡海外集",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YZ_S01",
   "subject": "place:yazhou_cheng",
   "predicate": "贬谪传统",
   "value_text": "崖州为唐宋琼南贬谪要地，李德裕、苏轼、卢多逊、胡铨等相继贬琼，贬谪文化蔚为大观",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "yazhou_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "崖州为海南贬谪文化中心。",
   "note": "学界考证：海南贬谪文化",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_S02",
   "subject": "place:nanshan",
   "predicate": "佛教始传",
   "value_text": "鉴真驻锡崖州建寺弘法，为佛教正式传入海南之始，中原礼义与佛学并播琼南",
   "value": null,
   "source": "taiping_huanyuji",
   "layer": "scholarship",
   "era": "今",
   "place": "nanshan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "太平寰宇记载振州（崖州）风俗。",
   "note": "学界考证：海南佛教史",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "YZ_S03",
   "subject": "person:li_deyu",
   "predicate": "党争结局",
   "value_text": "李德裕为牛李党争李党领袖，失势遭贬死崖州，其遭遇折射中晚唐党争之烈",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "yazhou_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "李德裕贬死崖州。",
   "note": "学界考证：牛李党争",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_S04",
   "subject": "place:li_settlement",
   "predicate": "黎汉关系",
   "value_text": "黎族与沿海州县长期错居互动，土流分治、征抚相参，海南社会格局由此而定",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "li_settlement",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "黎汉错居互动。",
   "note": "学界考证：海南社会史",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_S05",
   "subject": "person:lu_duoxin",
   "predicate": "宋初贬琼",
   "value_text": "北宋初宰相卢多逊坐事流崖州，卒于贬所，为宋初贬琼名臣",
   "value": null,
   "source": "songshi",
   "layer": "scholarship",
   "era": "今",
   "place": "yazhou_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（宋史·卢多逊传：流崖州）",
   "note": "宋史·卢多逊传",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YZ_S06",
   "subject": "person:hu_da",
   "predicate": "南宋贬琼",
   "value_text": "南宋主战名臣胡铨上书乞斩秦桧，远谪吉阳军（崖州一带），居琼数年讲学著书",
   "value": null,
   "source": "songshi",
   "layer": "scholarship",
   "era": "今",
   "place": "yazhou_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（宋史·胡铨传：谪吉阳军）",
   "note": "宋史·胡铨传",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "YZ_S07",
   "subject": "place:yazhou_port",
   "predicate": "海运津渡",
   "value_text": "崖州港居海南岛南部，为南海航线所经、历代贬谪与海运登陆之津",
   "value": null,
   "source": "yazhou_zhi",
   "layer": "scholarship",
   "era": "今",
   "place": "yazhou_port",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（崖州志：崖州港舟舶所聚）",
   "note": "崖州志；海南海运史",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YZ_I01",
   "subject": "place:yazhou_port",
   "predicate": "地理影响",
   "value_text": "崖州港居南海航线要冲，为大陆通海南与南洋之津，海运连中原与琼南",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "yazhou_port",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据海南海运史推断",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_I02",
   "subject": "place:yazhou_cheng",
   "predicate": "军事地理",
   "value_text": "崖州孤悬海南南鄙，北控黎峒、南扼南海，为经略海南与南海之锁钥",
   "value": null,
   "source": "xin_tangshu",
   "layer": "inference",
   "era": "推算",
   "place": "yazhou_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据新唐书·地理志推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "YZ_I03",
   "subject": "place:li_settlement",
   "predicate": "制度",
   "value_text": "黎峒与州县并立，土官（黎首）与流官分治，为海南土流分治之制",
   "value": null,
   "source": "guangdong_tongzhi",
   "layer": "inference",
   "era": "推算",
   "place": "li_settlement",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据广东通志推断",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YZ_I04",
   "subject": "place:yazhou_cheng",
   "predicate": "社会",
   "value_text": "贬谪士人带来中原礼义与文教，崖州文脉渐兴，海南士风因之丕变",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "yazhou_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据海南文化史推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_I05",
   "subject": "person:jianzhen",
   "predicate": "思想符号",
   "value_text": "鉴真弘法，佛教与中原礼义并播海南，宗教—文化纽带由此贯通",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "nanshan",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据佛教史推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_G01",
   "subject": "place:li_settlement",
   "predicate": "早期黎史",
   "value_text": "黎族早期社会组织（峒制）与迁徙脉络史缺详载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "li_settlement",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    4,
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "黎族早期峒制与迁徙",
    "skills": [
     "民族史",
     "考古"
    ],
    "accept": "需黎族社会史与海南考古"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YZ_G02",
   "subject": "place:yazhou_cheng",
   "predicate": "城址沿革",
   "value_text": "崖州城历代迁治（舍城—崖城等）与确切城址沿革无定论",
   "value": null,
   "source": "yazhou_zhi",
   "layer": "gap",
   "era": "今",
   "place": "yazhou_cheng",
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
    "where": "崖州城历代迁治",
    "skills": [
     "历史地理",
     "方志"
    ],
    "accept": "需海南方志与考古"
   },
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YZ_G03",
   "subject": "person:su_shi",
   "predicate": "题咏散佚",
   "value_text": "苏轼崖州题咏多散佚，贬琼诗文完整篇目待辑",
   "value": null,
   "source": "songshi",
   "layer": "gap",
   "era": "今",
   "place": "yazhou_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "苏轼崖州题咏辑佚",
    "skills": [
     "文献学"
    ],
    "accept": "需苏东坡海外集校笺"
   },
   "_party": "元·官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YZ_G01",
  "YZ_G02",
  "YZ_G03"
 ],
 "events": [
  {
   "id": "ev_yazhou_01",
   "year": 622,
   "era": "唐武德五年",
   "kind": "置州建制",
   "title": "唐置崖州",
   "place": "yazhou_cheng",
   "text": "唐武德五年（622），平萧铣，于海南岛置崖州（珠崖郡），领县数，州治屡迁。崖州之设，使海南岛南部纳入州县建制与经略体系，为后世治理黎族、控扼南海之基。",
   "subject": "event:ev_yazhou_01"
  },
  {
   "id": "ev_yazhou_02",
   "year": 748,
   "era": "唐天宝七载",
   "kind": "弘法驻锡",
   "title": "鉴真东渡驻锡崖州",
   "place": "nanshan",
   "text": "唐天宝七载（748），鉴真和尚第五次东渡日本，遇飓风漂至振州（今三亚崖州），居一年余，于南山一带建寺弘法、补造佛像，为佛教正式传入海南之始，亦凿通中原与海南的宗教—文化纽带。",
   "subject": "event:ev_yazhou_02"
  },
  {
   "id": "ev_yazhou_03",
   "year": 849,
   "era": "唐大中三年",
   "kind": "贬谪",
   "title": "李德裕贬崖州司户",
   "place": "yazhou_cheng",
   "text": "唐大中三年（849），牛李党争中失势的宰相李德裕贬为崖州司户参军，渡海抵崖州，逾年卒于贬所。李德裕为唐代名相，其贬死崖州，开崖州贬谪文脉，与后世苏轼、卢多逊、胡铨等贬琼士人相继，蔚为海南贬谪文化。",
   "subject": "event:ev_yazhou_03"
  }
 ],
 "edges": [
  {
   "from": "yazhou_cheng",
   "to": "nanshan",
   "type": "mem",
   "label": "鉴真驻锡南山建寺，崖州因之弘法"
  },
  {
   "from": "yazhou_cheng",
   "to": "li_settlement",
   "type": "geo",
   "label": "崖州北倚黎峒山地，黎汉错居"
  },
  {
   "from": "yazhou_cheng",
   "to": "yazhou_port",
   "type": "mil",
   "label": "崖州港通舟楫，贬谪登陆与海运所聚"
  },
  {
   "from": "yazhou_cheng",
   "to": "sanya_bay",
   "type": "geo",
   "label": "南临三亚湾，滨海而治"
  },
  {
   "from": "nanshan",
   "to": "yazhou_port",
   "type": "geo",
   "label": "南山临海，鉴真舟舶所泊"
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
   "五代·官修",
   "宋·官修",
   "元·官修",
   "学界",
   "后世官修"
  ],
  "party_bucket": {
   "五代·官修": "五代·官修",
   "宋·官修": "宋·官修",
   "元·官修": "元·官修",
   "学界": "学界",
   "后世官修": "后世官修"
  },
  "party_colors": {
   "五代·官修": "#7A6A53",
   "宋·官修": "#6C7A89",
   "元·官修": "#5E6E7C",
   "学界": "#2E7D8F",
   "后世官修": "#A0473A"
  },
  "factions": {
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
   "f_五代·官修": "#7A6A53",
   "f_宋·官修": "#6C7A89",
   "f_元·官修": "#5E6E7C",
   "f_学界": "#2E7D8F",
   "f_后世官修": "#A0473A"
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       108.925,
       19.5
      ],
      [
       108.903,
       19.481
      ],
      [
       108.791,
       19.418
      ],
      [
       108.694,
       19.338
      ],
      [
       108.666,
       19.304
      ],
      [
       108.65,
       19.265
      ],
      [
       108.636,
       18.908
      ],
      [
       108.638,
       18.866
      ],
      [
       108.676,
       18.75
      ],
      [
       108.702,
       18.535
      ],
      [
       108.922,
       18.416
      ],
      [
       109.03,
       18.368
      ],
      [
       109.183,
       18.325
      ],
      [
       109.341,
       18.3
      ],
      [
       109.4,
       18.281
      ],
      [
       109.519,
       18.218
      ],
      [
       109.59,
       18.226
      ],
      [
       109.681,
       18.247
      ],
      [
       109.703,
       18.259
      ],
      [
       109.76,
       18.348
      ],
      [
       109.816,
       18.397
      ],
      [
       109.968,
       18.422
      ],
      [
       110.02,
       18.416
      ],
      [
       110.067,
       18.448
      ],
      [
       110.066,
       18.476
      ],
      [
       110.049,
       18.505
      ],
      [
       110.156,
       18.57
      ],
      [
       110.252,
       18.656
      ],
      [
       110.291,
       18.67
      ],
      [
       110.334,
       18.673
      ],
      [
       110.4,
       18.698
      ],
      [
       110.451,
       18.748
      ],
      [
       110.478,
       18.813
      ],
      [
       110.51,
       18.935
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
        110.51,
        19.5
       ],
       [
        110.51,
        18.935
       ],
       [
        110.478,
        18.813
       ],
       [
        110.451,
        18.748
       ],
       [
        110.4,
        18.698
       ],
       [
        110.334,
        18.673
       ],
       [
        110.291,
        18.67
       ],
       [
        110.252,
        18.656
       ],
       [
        110.156,
        18.57
       ],
       [
        110.049,
        18.505
       ],
       [
        110.066,
        18.476
       ],
       [
        110.067,
        18.448
       ],
       [
        110.02,
        18.416
       ],
       [
        109.968,
        18.422
       ],
       [
        109.816,
        18.397
       ],
       [
        109.76,
        18.348
       ],
       [
        109.703,
        18.259
       ],
       [
        109.681,
        18.247
       ],
       [
        109.59,
        18.226
       ],
       [
        109.519,
        18.218
       ],
       [
        109.4,
        18.281
       ],
       [
        109.341,
        18.3
       ],
       [
        109.183,
        18.325
       ],
       [
        109.03,
        18.368
       ],
       [
        108.922,
        18.416
       ],
       [
        108.702,
        18.535
       ],
       [
        108.676,
        18.75
       ],
       [
        108.638,
        18.866
       ],
       [
        108.636,
        18.908
       ],
       [
        108.65,
        19.265
       ],
       [
        108.666,
        19.304
       ],
       [
        108.694,
        19.338
       ],
       [
        108.791,
        19.418
       ],
       [
        108.903,
        19.481
       ],
       [
        108.925,
        19.5
       ],
       [
        110.51,
        19.5
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
        108.12,
        17.23
       ],
       [
        108.12,
        19.5
       ],
       [
        108.12,
        19.5
       ],
       [
        108.12,
        17.23
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
         108.896,
         19.5
        ],
        [
         108.855,
         19.469
        ],
        [
         108.806,
         19.451
        ],
        [
         108.765,
         19.401
        ],
        [
         108.694,
         19.387
        ],
        [
         108.645,
         19.35
        ],
        [
         108.609,
         19.277
        ],
        [
         108.591,
         19.142
        ],
        [
         108.599,
         19.056
        ],
        [
         108.631,
         19.003
        ],
        [
         108.638,
         18.924
        ],
        [
         108.595,
         18.872
        ],
        [
         108.593,
         18.809
        ],
        [
         108.653,
         18.74
        ],
        [
         108.664,
         18.673
        ],
        [
         108.641,
         18.566
        ],
        [
         108.645,
         18.487
        ],
        [
         108.689,
         18.448
        ],
        [
         108.777,
         18.442
        ],
        [
         108.881,
         18.416
        ],
        [
         108.905,
         18.389
        ],
        [
         108.945,
         18.314
        ],
        [
         109.006,
         18.323
        ],
        [
         109.109,
         18.324
        ],
        [
         109.139,
         18.268
        ],
        [
         109.174,
         18.26
        ],
        [
         109.288,
         18.265
        ],
        [
         109.356,
         18.215
        ],
        [
         109.441,
         18.199
        ],
        [
         109.467,
         18.174
        ],
        [
         109.527,
         18.169
        ],
        [
         109.585,
         18.144
        ],
        [
         109.662,
         18.175
        ],
        [
         109.726,
         18.178
        ],
        [
         109.75,
         18.194
        ],
        [
         109.785,
         18.34
        ],
        [
         109.92,
         18.375
        ],
        [
         110.023,
         18.36
        ],
        [
         110.071,
         18.376
        ],
        [
         110.09,
         18.399
        ],
        [
         110.117,
         18.507
        ],
        [
         110.214,
         18.579
        ],
        [
         110.246,
         18.61
        ],
        [
         110.329,
         18.642
        ],
        [
         110.368,
         18.632
        ],
        [
         110.499,
         18.652
        ],
        [
         110.499,
         18.752
        ],
        [
         110.51,
         18.756
        ],
        [
         110.51,
         19.5
        ],
        [
         108.896,
         19.5
        ]
       ]
      ]
     ]
    },
    "n": "海南省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   108.12,
   17.23,
   110.51,
   19.5
  ]
 }
};
