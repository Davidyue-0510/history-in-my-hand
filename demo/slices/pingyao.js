// 本文件由 tools/build.py 自动生成（切片 pingyao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["pingyao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["pingyao"] = {
 "meta": {
  "kind": "county",
  "region": "huabei",
  "province": "shanxi",
  "title": "平遥（明清票号金融·晋商·城墙）",
  "dossier_label": "平遥",
  "subtitle": "汾河平川 · 明初城墙 · 日昇昌票号 · 晋商金融中枢",
  "primary_place": "pingyao_cheng",
  "dossier_event": "event:ev_pingyao_02",
  "vocab_pack": "pingyao",
  "terrain_grid": "china_coarse",
  "lead": "平遥古城为现存最完整之明清县级城池：1370 年重筑城墙，1823 年雷履泰创日昇昌（中国第一家票号），清季平遥票号汇通天下成全国金融中枢，1997 年列世界遗产。下方为筑城、立号与申遗三条主线。",
  "parties_note": "史料以平遥县志、日昇昌票号史料、晋商史料为本，UNESCO 为现代权威认定，学界考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_pingyao_01": "重筑城墙",
   "event:ev_pingyao_02": "日昇昌创立",
   "event:ev_pingyao_03": "列入世遗",
   "place:pingyao_cheng": "平遥古城",
   "place:riishengchang": "日昇昌旧址",
   "person:lei_lvtai": "雷履泰"
  },
  "epoch": "qing",
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
    "note": "票号制度+关公诚信伦理→晋商以信义维系跨地域金融网络，平遥为中枢"
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
    "note": "城墙城防技术+票号汇兑制度→平遥兼具城防与金融节点双重功能"
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
    "note": "晋商三层社会+股份制→平遥聚集财东掌柜伙计，形成金融城市社会"
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
    "note": "汾河平川形胜+清季金融事件→平遥控南北商道、汇通天下"
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
  "page": "county.html?scene=pingyao",
  "key": "pingyao",
  "scene_id": "pingyao"
 },
 "sources": [
  {
   "id": "pingyao_xianzhi",
   "title": "平遥县志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距明清城事约数十年至数百年",
   "stance_label": "地方志",
   "compiler": "《平遥县志》（清/民各版及今纂）",
   "color": "#A0473A",
   "period": "清/民"
  },
  {
   "id": "riishengchang_zhi",
   "title": "日昇昌票号史料",
   "party": "后世官修",
   "distance_label": "近现代辑录，距票号事约数十年至百年",
   "stance_label": "票号专史辑录",
   "compiler": "《日昇昌票号史料》等辑本",
   "color": "#A0473A",
   "period": "近现代"
  },
  {
   "id": "jinshang_shiliao",
   "title": "晋商史料",
   "party": "后世官修",
   "distance_label": "近现代研究辑录，距清季晋商事约数十年至百年",
   "stance_label": "晋商专史",
   "compiler": "晋商史与票号史综合辑录",
   "color": "#A0473A",
   "period": "近现代"
  },
  {
   "id": "unesco",
   "title": "UNESCO 世界遗产中心",
   "party": "国际机构",
   "distance_label": "1997 年认定，距城事为现代权威鉴定",
   "stance_label": "国际机构认定",
   "compiler": "UNESCO World Heritage Centre（编号 812）",
   "color": "#5B7C99",
   "period": "今"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "明清经济史与历史地理综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "pingyao_cheng",
   "name": "平遥古城",
   "lon": 112.178944,
   "lat": 37.203694,
   "type": "城池",
   "modern": "山西省晋中市平遥县古陶镇",
   "note": "UNESCO 世界遗产中心编号 812-001（N37°12′13.30″ E112°10′44.60″）。明清县城范本，现存最完整县级古城池。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心平遥古城中心点（812-001）",
   "elev": 786
  },
  {
   "id": "zhenguo_si",
   "name": "镇国寺",
   "lon": 112.278907,
   "lat": 37.286204,
   "type": "寺院",
   "modern": "平遥县城东北约 12 千米",
   "note": "UNESCO 编号 812-002（N37°17′10.33″ E112°16′44.07″）。万佛殿为五代遗构，与古城同列世遗。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心镇国寺中心点（812-002）",
   "elev": 804
  },
  {
   "id": "shuanglin_si",
   "name": "双林寺",
   "lon": 112.131745,
   "lat": 37.170739,
   "type": "寺院",
   "modern": "平遥县城西南约 6 千米",
   "note": "UNESCO 编号 812-003（N37°10′14.66″ E112°07′54.28″）。存宋至清彩塑逾两千尊，明代泥塑精绝。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心双林寺中心点（812-003）",
   "elev": 833
  },
  {
   "id": "riishengchang",
   "name": "日昇昌票号旧址",
   "lon": 112.179,
   "lat": 37.202,
   "type": "商号旧址",
   "modern": "平遥古城内西大街",
   "note": "中国第一家票号旧址，位于平遥古城内西大街，约取古城中心近似坐标。",
   "geo_match": "approx",
   "geo_note": "位于平遥古城内，约取古城中心近似坐标（112.179, 37.202），待CHGIS精修",
   "elev": 786
  },
  {
   "id": "fen_he",
   "name": "汾河",
   "lon": 112.05,
   "lat": 37.22,
   "type": "河流",
   "modern": "平遥县西北邻汾河谷地",
   "note": "平遥古城西北紧邻汾河谷地，汾河为晋中母亲河，明清河道摆动影响城郊水利交通。",
   "geo_match": "approx",
   "geo_note": "平遥西北邻汾河谷地，约取城西北近似坐标（112.05, 37.22），待CHGIS精修",
   "elev": 736
  },
  {
   "id": "liugen_he",
   "name": "柳根河",
   "lon": 112.17,
   "lat": 37.19,
   "type": "河流",
   "modern": "平遥古城南",
   "note": "旧称中都河，平遥古城处其冲积扇尾部，地势东南高、西北低。",
   "geo_match": "approx",
   "geo_note": "平遥古城南柳根河，约取城南沙河近似坐标（112.17, 37.19），待CHGIS精修",
   "elev": 809
  }
 ],
 "persons": [
  {
   "id": "lei_lvtai",
   "name": "雷履泰",
   "role": "日昇昌首任掌柜·票号制度奠基",
   "side": "jinshang",
   "note": "（约 1770–1849）平遥人，日昇昌首任掌柜，主汇兑、立章规，创信汇之法，被推为票号之祖。",
   "influence": 2
  },
  {
   "id": "li_daquan",
   "name": "李大全",
   "role": "日昇昌财东",
   "side": "jinshang",
   "note": "清季平遥富商，出资设日昇昌票号，任财东；奉行财东出本、掌柜行权之股份制。",
   "influence": 1
  },
  {
   "id": "mao_honghui",
   "name": "毛鸿翙",
   "role": "协同庆等票号掌柜",
   "side": "jinshang",
   "note": "清季平遥票号巨擘，历主多家票号（如同协庆），与雷履泰并称，同业网络广；生平私人记载相对稀少。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "PY_R01",
   "subject": "place:pingyao_cheng",
   "predicate": "位于晋中平原、汾河之滨",
   "value_text": "平遥古城位于山西省晋中市平遥县，地处太原盆地南缘、汾河之滨、柳根河冲积扇尾部。",
   "value": "",
   "source": "pingyao_xianzhi",
   "layer": "record",
   "era": "明清",
   "place": "pingyao_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "平遥古城位于平遥县境西北部平原区，惠济河、柳根河冲积扇尾部，西北紧邻汾河谷地（《平遥县志》/ 公开地理资料）。",
   "note": "地理形胜：汾河河谷平原、居南北商道要冲。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_R02",
   "subject": "event:ev_pingyao_01",
   "predicate": "洪武三年重筑城墙",
   "value_text": "洪武三年（1370）重筑平遥城墙，周长约 6.4 里，夯土包砖，现存城垣为明初规制。",
   "value": "",
   "source": "pingyao_xianzhi",
   "layer": "record",
   "era": "明",
   "place": "pingyao_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武三年（1370）重筑平遥城，周四里许，夯土包砖，门六、角楼具，今存城垣为明初旧制（《平遥县志》）。",
   "note": "城防技术 + 建制事件。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_R03",
   "subject": "event:ev_pingyao_02",
   "predicate": "日昇昌为中国第一家票号",
   "value_text": "道光三年（1823）日昇昌票号于平遥创立，为中国第一家专营汇兑的票号。",
   "value": "",
   "source": "riishengchang_zhi",
   "layer": "record",
   "era": "清",
   "place": "riishengchang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "道光三年（1823），雷履泰主日昇昌，创汇兑之法，为中国票号之始，号址在平遥西大街（《日昇昌票号史料》）。",
   "note": "金融制度 + 标志性事件。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_R04",
   "subject": "event:ev_pingyao_03",
   "predicate": "列入世界遗产名录",
   "value_text": "1997 年 12 月平遥古城列入联合国教科文组织《世界遗产名录》（编号 812）。",
   "value": "",
   "source": "unesco",
   "layer": "record",
   "era": "今",
   "place": "pingyao_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "1997 年 12 月，联合国教科文组织世界遗产委员会将平遥古城列入《世界遗产名录》（参考号 812，亚太区）。",
   "note": "现代认定事件，坐标亦取自 UNESCO 中心。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "国际机构",
   "_faction": null
  },
  {
   "id": "PY_R05",
   "subject": "person:lei_lvtai",
   "predicate": "任日昇昌首任掌柜、票号制度奠基",
   "value_text": "雷履泰任日昇昌首任掌柜，创信汇之法，为票号制度奠基。",
   "value": "",
   "source": "riishengchang_zhi",
   "layer": "record",
   "era": "清",
   "place": "riishengchang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "雷履泰，平遥人，日昇昌首任掌柜，主汇兑、立章规，票号之制实始于此（《日昇昌票号史料》）。",
   "note": "人物 + 制度。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_R06",
   "subject": "place:liugen_he",
   "predicate": "冲积扇尾部提供平坦城址",
   "value_text": "柳根河（旧中都河）冲积扇尾部为平遥古城提供平坦城址，地势由东南向西北倾斜。",
   "value": "",
   "source": "pingyao_xianzhi",
   "layer": "record",
   "era": "明清",
   "place": "liugen_he",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "平遥古城处柳根河冲积扇尾部，地势东南高、西北低，平均坡度约 5‰，城址平广（《平遥县志》/ 公开地理资料）。",
   "note": "地理形胜细节。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_S01",
   "subject": "person:li_daquan",
   "predicate": "票号股份制：财东出资、掌柜经营、顶身股",
   "value_text": "票号实行财东出资、掌柜经营、顶身股分红的股份制，财东不干预日常经营。",
   "value": "",
   "source": "jinshang_shiliao",
   "layer": "scholarship",
   "era": "清",
   "place": "riishengchang",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "票号之制，财东出本、掌柜行权，盈余按顶身股（人身股）分红，财东不预号事（晋商史料通考）。",
   "note": "制度 + 社会结构。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_S02",
   "subject": "place:shuanglin_si",
   "predicate": "双林寺明代彩塑为代表作",
   "value_text": "双林寺存宋至清彩塑二千余尊，明代泥塑为艺术代表，寺为平遥三处世遗之一。",
   "value": "",
   "source": "unesco",
   "layer": "scholarship",
   "era": "明清",
   "place": "shuanglin_si",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "双林寺（812-003）存宋至清彩塑逾两千尊，明代泥塑精绝，与平遥古城、镇国寺同列世界遗产。",
   "note": "技术（彩塑工艺）+ 思想（宗教艺术）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "国际机构",
   "_faction": null
  },
  {
   "id": "PY_S03",
   "subject": "person:lei_lvtai",
   "predicate": "晋商三层社会结构、重乡谊",
   "value_text": "晋商形成财东—掌柜—伙计三层结构，重乡谊、行学徒制，平遥为票号总号集中地。",
   "value": "",
   "source": "jinshang_shiliao",
   "layer": "scholarship",
   "era": "清",
   "place": "pingyao_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "晋商以财东、掌柜、伙计分三层，同乡相援引，号内行学徒制，平遥一城总号林立（晋商史料）。",
   "note": "社会结构。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_I01",
   "subject": "place:pingyao_cheng",
   "predicate": "地利促成明清华商与票号云集",
   "value_text": "平遥居汾河河谷平原、当南北商道要冲，地利促成明清华商与票号云集。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "pingyao_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "平遥扼晋中商道、邻汾河平川，明清华商循此聚散，票号因利乘便设总号于此（学界综合推论）。",
   "note": "地理→制度推力。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_I02",
   "subject": "place:riishengchang",
   "predicate": "票号密押与汇票防伪为金融技术代表",
   "value_text": "票号以汉字密押编汇票号、凭信汇通兑，是清代金融防伪技术的代表。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "riishengchang",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "票号以汉字代号（密押）编汇票、凭票即兑，防伪之术为清季金融技术之代表（学界综合推论）。",
   "note": "技术（金融防伪）。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_I03",
   "subject": "place:pingyao_cheng",
   "predicate": "关公信仰为晋商伦理内核",
   "value_text": "关帝庙遍布、关公信仰（诚信·义）构成晋商伦理内核，商号多奉关帝。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "pingyao_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "平遥关帝庙遍及城乡，商号奉关帝为财神与信义之主，诚信·义构成晋商伦理内核（学界综合推论）。",
   "note": "思想（关公信仰）+ 社会。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_I04",
   "subject": "event:ev_pingyao_02",
   "predicate": "总分号连锁使平遥成全国金融中枢",
   "value_text": "总分号连锁与信汇网络使平遥成清季全国金融中枢，票号汇通天下，占全国票号半数以上。",
   "value": "",
   "source": "jinshang_shiliao",
   "layer": "inference",
   "era": "清",
   "place": "pingyao_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "清季平遥票号设总分号于通都大邑，汇通天下，一城号庄之盛占全国票号之半（晋商史料推论）。",
   "note": "制度→事件（金融中枢）。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "PY_I05",
   "subject": "place:pingyao_cheng",
   "predicate": "形成金融业主导的商业城市社会",
   "value_text": "清季城内票号、镖局、商铺林立，形成以金融业主导的商业城市社会。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "pingyao_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "清季平遥城内票号、镖局、商铺夹峙市衢，商贾辐凑，成以金融业主导之商业城市社会（学界综合推论）。",
   "note": "社会（商业城市）。",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_G01",
   "subject": "place:pingyao_cheng",
   "predicate": "城墙细部营造尺度缺系统测绘",
   "value_text": "平遥城墙夯土层与包砖工艺的细部营造尺度，缺系统测绘数据公布。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明",
   "place": "pingyao_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：城墙营造尺度的公开测绘资料有限。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "平遥城墙夯土与包砖工艺的细部尺度（如夯层厚、砖规格、收分）",
    "skills": [
     "建筑史",
     "历史地理",
     "文保测绘"
    ],
    "accept": "若有《平遥城墙修缮报告》或考古测绘图，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_G02",
   "subject": "person:mao_honghui",
   "predicate": "协同庆掌柜生平与同业网络记载稀少",
   "value_text": "毛鸿翙等协同庆掌柜的生平与同业网络，县志外私人记载稀少。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "清",
   "place": "pingyao_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：次要票号人物私人记载稀缺。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "毛鸿翙（协同庆等票号掌柜）生平与同业网络",
    "skills": [
     "晋商史",
     "人物传记"
    ],
    "accept": "若有票号往来书信、号规抄本，可补社会(4)层人物断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "PY_G03",
   "subject": "place:fen_he",
   "predicate": "汾河河道摆动对城郊影响缺连续记载",
   "value_text": "汾河明清河道摆动对平遥城郊水利与交通的具体影响，缺连续方志记载。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "fen_he",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：汾河摆动的连续地方记载不足。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "汾河明清河道摆动对平遥城郊水利、渡口与交通的影响",
    "skills": [
     "历史地理",
     "河流地貌",
     "方志学"
    ],
    "accept": "若有连续河工/水利方志，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "PY_G01",
  "PY_G02",
  "PY_G03"
 ],
 "events": [
  {
   "id": "ev_pingyao_01",
   "year": 1370,
   "era": "洪武三年",
   "kind": "城防",
   "title": "重筑平遥城墙",
   "place": "pingyao_cheng",
   "text": "洪武三年（1370）重筑平遥城，周四里许，夯土包砖，设六门、角楼、敌台，城垣规制沿袭至今，为现存最完整之县级古城池之一。",
   "subject": "event:ev_pingyao_01"
  },
  {
   "id": "ev_pingyao_02",
   "year": 1823,
   "era": "道光三年",
   "kind": "金融",
   "title": "日昇昌票号创立",
   "place": "riishengchang",
   "text": "道光三年（1823）雷履泰主日昇昌，创汇兑之法，为中国第一家专营异地汇划之票号；其后平遥票号林立，总号汇通天下，成清季全国金融中枢。",
   "subject": "event:ev_pingyao_02"
  },
  {
   "id": "ev_pingyao_03",
   "year": 1997,
   "era": "1997年",
   "kind": "认定",
   "title": "列入世界遗产名录",
   "place": "pingyao_cheng",
   "text": "1997 年 12 月，联合国教科文组织世界遗产委员会将平遥古城（含古城墙、镇国寺、双林寺）列入《世界遗产名录》（编号 812），为现存最完整之明清县城范本。",
   "subject": "event:ev_pingyao_03"
  }
 ],
 "edges": [
  {
   "from": "riishengchang",
   "to": "pingyao_cheng",
   "kind": "within",
   "note": "日昇昌票号旧址位于平遥古城内西大街",
   "label": "",
   "type": "misc"
  },
  {
   "from": "zhenguo_si",
   "to": "pingyao_cheng",
   "kind": "near",
   "note": "镇国寺在平遥古城东北约 12 千米，同列世遗",
   "label": "",
   "type": "misc"
  },
  {
   "from": "shuanglin_si",
   "to": "pingyao_cheng",
   "kind": "near",
   "note": "双林寺在平遥古城西南约 6 千米，同列世遗",
   "label": "",
   "type": "misc"
  },
  {
   "from": "fen_he",
   "to": "pingyao_cheng",
   "kind": "adjacent",
   "note": "汾河谷地在平遥古城西北，为城郊水利交通依托",
   "label": "",
   "type": "misc"
  },
  {
   "from": "liugen_he",
   "to": "pingyao_cheng",
   "kind": "adjacent",
   "note": "柳根河冲积扇尾部为平遥古城提供平坦城址",
   "label": "",
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
   "后世官修",
   "国际机构",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "国际机构": "国际机构",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "国际机构": "#5B7C99",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_国际机构": {
    "name": "国际机构",
    "macro_party": "国际机构",
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
   "f_国际机构": "#5B7C99",
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
        111.05,
        36.171
       ],
       [
        111.05,
        38.286
       ],
       [
        113.279,
        38.286
       ],
       [
        113.279,
        36.171
       ],
       [
        111.05,
        36.171
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
         111.05,
         38.286
        ],
        [
         111.05,
         36.171
        ],
        [
         113.279,
         36.171
        ],
        [
         113.279,
         38.286
        ],
        [
         111.05,
         38.286
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   111.05,
   36.171,
   113.279,
   38.286
  ]
 }
};
