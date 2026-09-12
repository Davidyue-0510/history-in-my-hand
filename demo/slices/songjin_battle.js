// 本文件由 tools/build.py 自动生成（切片 songjin_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["songjin_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["songjin_battle"] = {
 "meta": {
  "kind": "county",
  "region": "liaoxi",
  "title": "松锦之战",
  "dossier_label": "松锦之战",
  "subtitle": "崇祯十三年—十五年（1640–1642）· 明 vs 清",
  "primary_place": "jinzhou",
  "dossier_event": "event:songjin_ding",
  "vocab_pack": "songjin_battle",
  "terrain_grid": "china_coarse",
  "lead": "崇祯十三年（1640）皇太极遣师围锦州，清军据义州前沿；十四年洪承畴集八镇兵援锦，陈新甲、张若麒趣战，王朴先遁、诸镇溃乱，洪承畴退守松山被围；十五年松山、锦州、塔山、杏山次第陷清，祖大寿降、洪承畴被俘后降，明失关外精锐与辽西要塞，仅保宁远、山海关。实控区随事件年份由明据辽西走廊翻为清控关外。",
  "parties_note": "本切片主干为后世官修史（明史、清史稿）与现代学界综论；明、清双方亲历档案多经后世回叙，明军内部决策、粮饷实况与洪承畴降清细节为结构性缺口，系统不裁决，只并列。",
  "subject_names": {
   "event:songjin_weijin": "清军围锦州",
   "event:songjin_jiyuan": "洪承畴集八镇兵援锦",
   "event:songjin_songshan_wei": "松山被围·明军溃遁",
   "event:songjin_songshan_xian": "松山陷·洪承畴被俘",
   "event:jinzhou_xiang": "锦州降",
   "event:tashan_xingshan_xian": "塔山杏山陷",
   "event:songjin_ding": "松锦底定",
   "place:jinzhou": "锦州",
   "place:songshan": "松山",
   "place:xingshan": "杏山",
   "place:tashan": "塔山",
   "place:ningyuan": "宁远",
   "place:shanhaiguan": "山海关",
   "place:yizhou": "义州",
   "person:hong_chengchou": "洪承畴",
   "person:zu_dashou": "祖大寿",
   "person:wu_sangui": "吴三桂",
   "person:wang_pu": "王朴",
   "person:huang_taiji": "皇太极",
   "person:dorgon": "多尔衮",
   "person:jirgalang": "济尔哈朗",
   "person:zhang_ruoqi": "张若麒",
   "person:chen_xinjia": "陈新甲"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "ming",
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
    "note": "松锦之战：朝堂凝聚力——崇祯中枢与陈新甲趣战、洪承畴持重之间决策撕裂，诸镇号令不一加速崩溃"
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
    "note": "松锦之战：后勤物力——锦州被围两年粮尽，明援锦粮道屡被清军截断，宁远—山海关成为最后补给线"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "松锦之战：人口动员——辽西将门（祖氏、吴氏）与八镇兵马被卷入，关外社会结构随明清易代重组"
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
    "note": "松锦之战：地缘战略——辽西走廊是华北—东北咽喉，松锦底定后山海关成为明清对峙最后关隘"
   }
  },
  "province": "liaoning",
  "related": [],
  "page": "county.html?scene=songjin_battle",
  "key": "songjin_battle",
  "scene_id": "songjin_battle"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百五十八·洪承畴传／卷二百七十一·祖大寿传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，洪承畴、祖大寿入《贰臣传》。记松锦战事偏清方视角，于明方溃遁、内应开门多有直书。"
  },
  {
   "id": "qingshigao",
   "title": "清史稿",
   "juan": "太宗本纪／睿忠亲王多尔衮传",
   "compiler": "赵尔巽等",
   "compiled_year": 1928,
   "stance_label": "后世官修·清方",
   "distance_label": "成书 1928（民国未定稿），距所记明清战事约 280–300 年",
   "party": "清修官史",
   "color": "#5B4636",
   "note": "民国清史馆修，记太宗围锦、困松山、下锦州，立场归清方。"
  },
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "juan": "卷九十一（崇祯十三年·清围锦州）／卷九十二（崇祯十五年·松山陷、锦州降）",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），综合实录奏议并附考异",
   "party": "二手综述",
   "color": "#6C7A89",
   "note": "夏燮私修明编年。松锦叙事采实录与清方记载并附考异，平允但属后世综合；其记陈新甲趣战、张若麒监军、松山内应等细节可与其他方互证。",
   "faction": null,
   "period": "晚清",
   "availability": "fetched",
   "url": "https://zh.wikisource.org/wiki/%E6%98%8E%E9%80%9A%E9%91%91",
   "cached_text": "已抓卷091/092 松锦叙事原文到 .tmp/mingtongjian_091.txt / _092.txt。"
  },
  {
   "id": "modern",
   "title": "现代明史学界综论",
   "juan": "综合研究（李光涛、孙文良、李治亭等松锦之战论述）",
   "compiler": "学界综论",
   "compiled_year": 2000,
   "stance_label": "现代学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "party": "学界",
   "color": "#3C78D8",
   "note": "现代明清史学界对松锦之战的归因与战略评估，多综合明、清、朝鲜三方记载。",
   "faction": null,
   "period": "现代",
   "availability": "synthesis",
   "url": "",
   "cached_text": ""
  }
 ],
 "places": [
  {
   "id": "jinzhou",
   "name": "锦州",
   "lat": 41.1,
   "lon": 121.15,
   "type": "city",
   "note": "明关外第一重镇，辽西走廊咽喉；松锦之战核心围城目标，祖大寿守此近两年后降清",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 49
  },
  {
   "id": "songshan",
   "name": "松山",
   "lat": 41.2,
   "lon": 121.25,
   "type": "city",
   "note": "松山古城遗址（今辽宁凌海松山镇附近），洪承畴援锦大军屯驻及被围处，城破后明关外精锐尽丧",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 60
  },
  {
   "id": "xingshan",
   "name": "杏山",
   "lat": 41.15,
   "lon": 121.2,
   "type": "city",
   "note": "辽西走廊中继堡，松山—塔山间要地；松锦战后与塔山同陷，明辽西走廊遂断",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 54
  },
  {
   "id": "tashan",
   "name": "塔山",
   "lat": 40.75,
   "lon": 120.85,
   "type": "city",
   "note": "今辽宁葫芦岛连山区塔山一带，明辽西走廊南段屏障；松锦战后陷清，宁远—山海关直接受威胁",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 27
  },
  {
   "id": "ningyuan",
   "name": "宁远",
   "lat": 40.58,
   "lon": 120.42,
   "type": "city",
   "note": "今辽宁兴城，明关外最后重镇；松锦战后明在关外仅保宁远、山海关一线",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 72
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lat": 39.98,
   "lon": 119.75,
   "type": "city",
   "note": "明长城东起点、京师最后屏障；松锦战后成为明清对峙最前沿",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "guangning",
    "jinzhou",
    "ningyuan"
   ],
   "elev": 10
  },
  {
   "id": "yizhou",
   "name": "义州",
   "lat": 41.53,
   "lon": 121.23,
   "type": "city",
   "note": "今辽宁义县，清军围锦前进基地与后勤枢纽；松锦之战期间始终为清控",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 70
  }
 ],
 "persons": [
  {
   "id": "hong_chengchou",
   "name": "洪承畴",
   "party": "明",
   "note": "明蓟辽总督，率八总兵援锦，松山城破被俘后降清",
   "influence": 1
  },
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "party": "明",
   "note": "锦州守将，明末辽西将门代表，松锦战后粮尽出降",
   "influence": 1,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ]
  },
  {
   "id": "wu_sangui",
   "name": "吴三桂",
   "party": "明",
   "note": "明辽东总兵，松锦战后率残部退守宁远、山海关",
   "influence": 0
  },
  {
   "id": "wang_pu",
   "name": "王朴",
   "party": "明",
   "note": "明总兵，松山决战时先遁，导致诸镇溃乱",
   "influence": 0
  },
  {
   "id": "huang_taiji",
   "name": "皇太极",
   "party": "清",
   "note": "清太宗，亲征松锦，决策长围困锦、截击援军",
   "influence": 0,
   "_global_id": "huangtaiji",
   "_other_scenes": [
    "jinzhou",
    "liaoyang",
    "ningyuan",
    "sarhu",
    "shenyang"
   ]
  },
  {
   "id": "dorgon",
   "name": "多尔衮",
   "party": "清",
   "note": "清睿亲王，参与围锦、截击明援诸役",
   "influence": 0
  },
  {
   "id": "jirgalang",
   "name": "济尔哈朗",
   "party": "清",
   "note": "清郑亲王，先率军围锦州，筑垒掘壕断明援",
   "influence": 0
  },
  {
   "id": "zhang_ruoqi",
   "name": "张若麒",
   "party": "明",
   "note": "明兵部职方司郎中、监军，与陈新甲共趣洪承畴决战",
   "influence": 0
  },
  {
   "id": "chen_xinjia",
   "name": "陈新甲",
   "party": "明",
   "note": "明兵部尚书，主速战，屡趣洪承畴进兵，松山溃后弃市",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SJ001",
   "subject": "event:songjin_weijin",
   "predicate": "清军围锦州",
   "value_text": "皇太极遣济尔哈朗、多尔衮等率师围锦州，掘壕筑垒，断明援路；明关外诸城震恐，辽西战局陡紧。",
   "time": {
    "era_text": "崇祯十三年（1640）",
    "gregorian_year": 1640
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "太宗遣将围锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/地理维度（1）：清军围锦州是松锦之战开端，辽西走廊咽喉被扼。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ002",
   "subject": "event:jinzhou_xiang",
   "predicate": "锦州降",
   "value_text": "锦州被围近两年，祖大寿粮尽，率众出降；明在辽西最重要堡垒失守，关外防线动摇。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "大寿以锦州降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：锦州城防与围困攻防是松锦之战核心，祖大寿降标志明辽西最重堡垒易手。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ003",
   "subject": "event:songjin_songshan_xian",
   "predicate": "松山陷",
   "value_text": "松山被困经年，粮尽援绝，副将夏成德为内应，城破；洪承畴被俘，后降清，明关外精锐尽丧。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "mingshi",
   "quote": "松山破，承畴被执",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/地理维度（1）：松山为明援锦大军屯驻处，其陷落使明关外精锐尽丧。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ004",
   "subject": "event:songjin_jiyuan",
   "predicate": "洪承畴集八镇兵援锦",
   "value_text": "崇祯命蓟辽总督洪承畴率八总兵、步骑十三万（号称）出宁远援锦州，屯于松山、杏山、塔山间，与清军对峙。",
   "time": {
    "era_text": "崇祯十四年（1641）",
    "gregorian_year": 1641
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "承畴集八总兵援锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：崇祯中枢命洪承畴总督蓟辽、集八镇兵援锦，体现明末督抚制度与中枢决策。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ005",
   "subject": "event:songjin_songshan_wei",
   "predicate": "松山被围明军溃",
   "value_text": "陈新甲、张若麒屡趣战，洪承畴被迫决战；王朴先遁，诸镇溃乱，清军截击，明援军大挫，洪承畴退守松山，旋被围。",
   "time": {
    "era_text": "崇祯十四年（1641）",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingshi",
   "quote": "王朴先遁，诸军皆溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/社会维度（4）：明军诸镇号令不一、王朴先遁，反映明末军事组织与社会动员之弊。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ006",
   "subject": "event:tashan_xingshan_xian",
   "predicate": "塔山杏山陷",
   "value_text": "松山、锦州既下，清军乘势攻拔塔山、杏山，明辽西走廊诸城次第陷落，关外几尽入清。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "tashan",
   "source": "mingshi",
   "quote": "塔山、杏山皆下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/地理维度（1）：塔山、杏山陷落意味着明辽西走廊彻底断裂。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ007",
   "subject": "event:songjin_ding",
   "predicate": "松锦底定辽西易主",
   "value_text": "松锦之战以清军全胜告终，明失关外精锐与辽西要塞，宁远、山海关一线成为最后屏障；明清辽西战略主动权彻底易手。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "shanhaiguan",
   "source": "mingshi",
   "quote": "关外几尽入我朝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：松锦底定标志明清辽西战略主动权转移，明中枢对关外控制崩溃。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ008",
   "subject": "place:jinzhou",
   "predicate": "锦州要塞",
   "value_text": "锦州为明关外第一重镇、辽西走廊咽喉；清军长期围困、祖大寿死守近两年，是松锦之战的空间核心。",
   "time": {
    "era_text": "崇祯十三年（1640）",
    "gregorian_year": 1640
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "锦州为关外重镇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：锦州控扼辽西走廊，是明清关外交锋的第一锁钥。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ009",
   "subject": "place:ningyuan",
   "predicate": "宁远基地",
   "value_text": "宁远为明关外最后重镇，袁崇焕曾据此却努尔哈赤、皇太极；松锦战后明在关外仅保宁远、山海关一线。",
   "time": {
    "era_text": "崇祯十三年（1640）",
    "gregorian_year": 1640
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "宁远为关外根本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/社会维度（4）：宁远为明军关外基地与民心所系，松锦战后成为最后防线。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ010",
   "subject": "person:hong_chengchou",
   "predicate": "洪承畴督师",
   "value_text": "洪承畴以蓟辽总督督八总兵援锦，松山城破被俘后降清；其去就折射出明末重臣在鼎革之际的抉择。",
   "time": {
    "era_text": "崇祯十四年（1641）",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingshi",
   "quote": "承畴总督蓟辽，援锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "制度维度（3）/思想维度（5）：洪承畴督师与降清是明末督抚制度、忠义观念与鼎革叙事的关键节点。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ011",
   "subject": "person:zu_dashou",
   "predicate": "祖大寿守锦",
   "value_text": "祖大寿守锦州近两年，粮尽出降；辽西将门祖氏在明清易代中反复依违，是关外军事社会结构的缩影。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "大寿守锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "社会维度（4）/思想维度（5）：辽西将门降叛与明清易代中的身份认同。",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ012",
   "subject": "event:songjin_weijin",
   "predicate": "皇太极亲征",
   "value_text": "清太宗皇太极亲征松锦，决策长围困锦、截击援军，体现清初军国体制与皇帝亲领前线的传统。",
   "time": {
    "era_text": "崇祯十三年（1640）",
    "gregorian_year": 1640
   },
   "place": "yizhou",
   "source": "qingshigao",
   "quote": "太宗亲征锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：皇太极亲征是清方能围点打援、最终全胜的关键决策。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SJ013",
   "subject": "event:songjin_songshan_wei",
   "predicate": "明军溃因考订",
   "value_text": "《明通鉴》载陈新甲、张若麒屡趣洪承畴速战，明军诸镇号令不一、王朴先遁；中枢促战与将帅不和共同导致松山大溃。",
   "time": {
    "era_text": "崇祯十四年（1641）",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "新甲趣战，若麒监军，诸将解体",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "operational",
   "note": "技术维度（2）/制度维度（3）：《明通鉴》综合实录与清方记载，对明军溃败原因作后世考订。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ014",
   "subject": "event:songjin_jiyuan",
   "predicate": "兵力推断",
   "value_text": "明史载洪承畴援锦步骑十三万，现代研究多认为实数约数万至十万，且诸镇互不统属；清军围锦与打援兵力亦在数万量级（本项目推断值）。",
   "time": {
    "era_text": "崇祯十四年（1641）",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "modern",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于明清双方兵力记载互证的可复现推断。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SJ015",
   "subject": "place:shanhaiguan",
   "predicate": "战略地位推断",
   "value_text": "山海关为明长城东起点、京师最后屏障；松锦战后明仅保宁远—山海关一线，山海关成为明清对峙最前沿与清军入关前的最后关隘。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "shanhaiguan",
   "source": "modern",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "地理维度（1）/制度维度（3）：山海关控扼华北—东北通道，其战略地位随松锦底定而陡升。",
   "dims": [
    1,
    3
   ],
   "dim_source": "inference",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SJ016",
   "subject": "event:songjin_songshan_xian",
   "predicate": "洪承畴降清细节缺口",
   "value_text": "洪承畴被俘后是否立即降清、降清动机与过程，《明史》与《清史稿》叙述不一；原始审讯与招降文书多不存，降清细节为结构性未知，仅能给区间而非定点。",
   "time": {
    "era_text": "崇祯十五年（1642）",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "modern",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：洪承畴降清细节与心理为弱证据区间。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "洪承畴被俘至降清的具体过程与动机",
    "skills": [
     "比对《明史·洪承畴传》与《清史稿·洪承畴传》的叙事差异",
     "核实现存清代档案中关于洪承畴招降的记录",
     "查李光涛等现代研究对洪承畴降清过程的考订"
    ],
    "accept": "承认洪承畴降清细节为结构性未知，仅给区间而非定点"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SJ017",
   "subject": "event:songjin_weijin",
   "predicate": "明军内部视角缺口",
   "value_text": "松锦之战明方亲历记录多佚，祖大寿、吴三桂等辽西将门的内部决策、军粮实数与诸镇矛盾，主要经清修《明史》与后世研究回叙；明军内部视角为弱证据，缺口本身即结论。",
   "time": {
    "era_text": "崇祯十三年（1640）",
    "gregorian_year": 1640
   },
   "place": "jinzhou",
   "source": "modern",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：松锦之战明军内部视角与原始档案缺失。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "明军诸镇内部决策、粮饷实况与将帅矛盾",
    "skills": [
     "比对《明史》与《明通鉴》对明军溃败归因的处理",
     "查明代兵部题本、辽东塘报等原始档案的存佚情况"
    ],
    "accept": "明确明军内部视角为结构性缺失，不伪造填补"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SJ016",
  "SJ017"
 ],
 "events": [
  {
   "id": "ev_songjin_weijin",
   "subject": "event:songjin_weijin",
   "year": 1640,
   "era": "崇祯十三年（1640）",
   "title": "清军围锦州·辽西告急",
   "kind": "战事·围困",
   "text": "皇太极遣济尔哈朗、多尔衮等率师围锦州，掘壕筑垒，断明援路；明关外诸城震恐，辽西战局陡紧。"
  },
  {
   "id": "ev_songjin_jiyuan",
   "subject": "event:songjin_jiyuan",
   "year": 1641,
   "era": "崇祯十四年（1641）",
   "title": "洪承畴集八镇兵援锦",
   "kind": "战事·集结",
   "text": "崇祯命蓟辽总督洪承畴率八总兵、步骑十三万（号称）出宁远援锦州，屯于松山、杏山、塔山间，与清军对峙。"
  },
  {
   "id": "ev_songjin_songshan_wei",
   "subject": "event:songjin_songshan_wei",
   "year": 1641,
   "era": "崇祯十四年（1641）",
   "title": "松山被围·明军溃遁",
   "kind": "战事·溃败",
   "text": "陈新甲、张若麒屡趣战，洪承畴被迫决战；王朴先遁，诸镇溃乱，清军截击，明援军大挫，洪承畴退守松山，旋被围。"
  },
  {
   "id": "ev_songjin_songshan_xian",
   "subject": "event:songjin_songshan_xian",
   "year": 1642,
   "era": "崇祯十五年（1642）",
   "title": "松山陷·洪承畴被俘",
   "kind": "战事·城陷",
   "text": "松山被困经年，粮尽援绝，副将夏成德为内应，城破；洪承畴被俘，后降清，明关外精锐尽丧。"
  },
  {
   "id": "ev_jinzhou_xiang",
   "subject": "event:jinzhou_xiang",
   "year": 1642,
   "era": "崇祯十五年（1642）",
   "title": "锦州降·祖大寿再降清",
   "kind": "变局·献城",
   "text": "锦州被围近两年，祖大寿粮尽，率众出降；明在辽西最重要堡垒失守，关外防线动摇。"
  },
  {
   "id": "ev_tashan_xingshan_xian",
   "subject": "event:tashan_xingshan_xian",
   "year": 1642,
   "era": "崇祯十五年（1642）",
   "title": "塔山杏山陷·辽西尽失",
   "kind": "战事·扫荡",
   "text": "松山、锦州既下，清军乘势攻拔塔山、杏山，明辽西走廊诸城次第陷落，关外几尽入清。"
  },
  {
   "id": "ev_songjin_ding",
   "subject": "event:songjin_ding",
   "year": 1642,
   "era": "崇祯十五年（1642）",
   "title": "松锦底定·明清辽西易主",
   "kind": "变局·大势转移",
   "text": "松锦之战以清军全胜告终，明失关外精锐与辽西要塞，宁远、山海关一线成为最后屏障；明清辽西战略主动权彻底易手。"
  }
 ],
 "edges": [
  {
   "from": "ningyuan",
   "to": "jinzhou",
   "type": "military",
   "label": "宁远—锦州（明援锦主轴）"
  },
  {
   "from": "jinzhou",
   "to": "songshan",
   "type": "military",
   "label": "锦州—松山（围城与援军屯驻）"
  },
  {
   "from": "songshan",
   "to": "xingshan",
   "type": "military",
   "label": "松山—杏山（走廊中继）"
  },
  {
   "from": "xingshan",
   "to": "tashan",
   "type": "military",
   "label": "杏山—塔山（走廊南段）"
  },
  {
   "from": "tashan",
   "to": "ningyuan",
   "type": "military",
   "label": "塔山—宁远（明退守线）"
  },
  {
   "from": "ningyuan",
   "to": "shanhaiguan",
   "type": "military",
   "label": "宁远—山海关（明最后屏障）"
  },
  {
   "from": "yizhou",
   "to": "jinzhou",
   "type": "military",
   "label": "义州—锦州（清军围锦前沿）"
  },
  {
   "from": "hong_chengchou",
   "to": "wu_sangui",
   "type": "command",
   "label": "洪承畴—吴三桂（督师—总兵）"
  },
  {
   "from": "hong_chengchou",
   "to": "wang_pu",
   "type": "command",
   "label": "洪承畴—王朴（督师—总兵）"
  },
  {
   "from": "huang_taiji",
   "to": "dorgon",
   "type": "command",
   "label": "皇太极—多尔衮（君—亲王）"
  },
  {
   "from": "huang_taiji",
   "to": "jirgalang",
   "type": "command",
   "label": "皇太极—济尔哈朗（君—亲王）"
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "control": [
  {
   "place_id": "yizhou",
   "party": "清",
   "start": 1640,
   "end": null,
   "basis": "义州为清军围锦前进基地与后勤枢纽，松锦之战期间始终清控",
   "note": "清前沿"
  },
  {
   "place_id": "jinzhou",
   "party": "明",
   "start": 1640,
   "end": 1641,
   "basis": "1640—1641 锦州为祖大寿所守，明在辽西最重堡垒",
   "note": "明重镇"
  },
  {
   "place_id": "jinzhou",
   "party": "清",
   "start": 1642,
   "end": null,
   "basis": "1642 祖大寿粮尽出降，锦州归清",
   "note": "战后属清"
  },
  {
   "place_id": "songshan",
   "party": "明",
   "start": 1640,
   "end": 1641,
   "basis": "1640—1641 松山为明援锦大军屯驻处，后退守被围",
   "note": "明援军屯"
  },
  {
   "place_id": "songshan",
   "party": "清",
   "start": 1642,
   "end": null,
   "basis": "1642 松山城破，洪承畴被俘，松山归清",
   "note": "战后属清"
  },
  {
   "place_id": "xingshan",
   "party": "明",
   "start": 1640,
   "end": 1641,
   "basis": "1640—1641 杏山为明辽西走廊中继堡",
   "note": "明走廊中继"
  },
  {
   "place_id": "xingshan",
   "party": "清",
   "start": 1642,
   "end": null,
   "basis": "1642 松锦战后杏山陷清",
   "note": "战后属清"
  },
  {
   "place_id": "tashan",
   "party": "明",
   "start": 1640,
   "end": 1641,
   "basis": "1640—1641 塔山为明辽西走廊南段屏障",
   "note": "明南段屏"
  },
  {
   "place_id": "tashan",
   "party": "清",
   "start": 1642,
   "end": null,
   "basis": "1642 松锦战后塔山陷清",
   "note": "战后属清"
  },
  {
   "place_id": "ningyuan",
   "party": "明",
   "start": 1640,
   "end": null,
   "basis": "宁远为明关外最后重镇，松锦战后仍明控",
   "note": "明最后重镇"
  },
  {
   "place_id": "shanhaiguan",
   "party": "明",
   "start": 1640,
   "end": null,
   "basis": "山海关为明京师最后屏障，松锦战后仍明控",
   "note": "明京师屏障"
  }
 ],
 "control_seats": [
  {
   "place_id": "yizhou",
   "name": "义州",
   "lon": 121.23,
   "lat": 41.53,
   "region": "liaoxi"
  },
  {
   "place_id": "jinzhou",
   "name": "锦州",
   "lon": 121.15,
   "lat": 41.1,
   "region": "liaoxi"
  },
  {
   "place_id": "songshan",
   "name": "松山",
   "lon": 121.25,
   "lat": 41.2,
   "region": "liaoxi"
  },
  {
   "place_id": "xingshan",
   "name": "杏山",
   "lon": 121.2,
   "lat": 41.15,
   "region": "liaoxi"
  },
  {
   "place_id": "tashan",
   "name": "塔山",
   "lon": 120.85,
   "lat": 40.75,
   "region": "liaoxi"
  },
  {
   "place_id": "ningyuan",
   "name": "宁远",
   "lon": 120.42,
   "lat": 40.58,
   "region": "liaoxi"
  },
  {
   "place_id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.75,
   "lat": 39.98,
   "region": "liaoxi"
  }
 ],
 "control_years": [
  1640,
  1642
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
   "明",
   "清",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "清修·明臣": "后世官修",
   "清修官史": "后世官修",
   "二手综述": "二手综述",
   "学界": "二手综述"
  },
  "party_colors": {
   "明": "#4A6FA5",
   "清": "#B23A48",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.89,
       39.602
      ],
      [
       124.846,
       39.559
      ],
      [
       124.849,
       39.508
      ],
      [
       124.905,
       39.536
      ],
      [
       124.935,
       39.608
      ],
      [
       124.89,
       39.602
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
        118.75,
        39.161
       ],
       [
        118.752,
        39.16
       ],
       [
        118.826,
        39.172
       ],
       [
        118.912,
        39.166
       ],
       [
        118.977,
        39.183
       ],
       [
        119.04,
        39.222
       ],
       [
        119.225,
        39.408
       ],
       [
        119.261,
        39.561
       ],
       [
        119.322,
        39.662
       ],
       [
        119.391,
        39.752
       ],
       [
        119.591,
        39.903
       ],
       [
        119.85,
        39.987
       ],
       [
        120.369,
        40.204
       ],
       [
        120.479,
        40.231
       ],
       [
        120.771,
        40.589
       ],
       [
        120.841,
        40.649
       ],
       [
        120.922,
        40.683
       ],
       [
        121.003,
        40.749
       ],
       [
        121.086,
        40.842
       ],
       [
        121.175,
        40.901
       ],
       [
        121.537,
        40.878
       ],
       [
        121.599,
        40.843
       ],
       [
        121.729,
        40.846
       ],
       [
        121.766,
        40.876
       ],
       [
        121.809,
        40.969
       ],
       [
        121.835,
        40.974
       ],
       [
        121.859,
        40.842
       ],
       [
        122.14,
        40.688
       ],
       [
        122.179,
        40.603
       ],
       [
        122.275,
        40.542
       ],
       [
        122.264,
        40.5
       ],
       [
        122.203,
        40.396
       ],
       [
        122.191,
        40.358
       ],
       [
        121.983,
        40.136
       ],
       [
        121.869,
        40.046
       ],
       [
        121.801,
        39.951
       ],
       [
        121.517,
        39.845
       ],
       [
        121.474,
        39.755
       ],
       [
        121.514,
        39.685
       ],
       [
        121.518,
        39.639
       ],
       [
        121.47,
        39.64
       ],
       [
        121.406,
        39.621
       ],
       [
        121.267,
        39.545
       ],
       [
        121.286,
        39.519
       ],
       [
        121.3,
        39.452
       ],
       [
        121.275,
        39.385
       ],
       [
        121.356,
        39.377
       ],
       [
        121.513,
        39.375
       ],
       [
        121.785,
        39.401
       ],
       [
        121.818,
        39.387
       ],
       [
        121.758,
        39.348
       ],
       [
        121.665,
        39.269
       ],
       [
        121.628,
        39.22
       ],
       [
        121.68,
        39.109
       ],
       [
        121.319,
        38.98
       ],
       [
        121.656,
        38.98
       ],
       [
        121.677,
        39.003
       ],
       [
        121.745,
        39.01
       ],
       [
        121.805,
        38.991
       ],
       [
        121.864,
        38.996
       ],
       [
        121.923,
        39.037
       ],
       [
        121.982,
        39.053
       ],
       [
        122.048,
        39.094
       ],
       [
        122.121,
        39.152
       ],
       [
        122.225,
        39.267
       ],
       [
        122.335,
        39.366
       ],
       [
        122.84,
        39.601
       ],
       [
        122.961,
        39.62
       ],
       [
        123.032,
        39.674
       ],
       [
        123.227,
        39.687
       ],
       [
        123.269,
        39.727
       ],
       [
        123.348,
        39.763
       ],
       [
        123.49,
        39.768
       ],
       [
        123.581,
        39.786
       ],
       [
        123.611,
        39.841
       ],
       [
        123.651,
        39.882
       ],
       [
        123.76,
        39.822
       ],
       [
        124.106,
        39.841
       ],
       [
        124.267,
        39.924
       ],
       [
        124.35,
        40.012
       ],
       [
        124.362,
        40.004
       ],
       [
        124.375,
        39.996
       ],
       [
        124.349,
        39.907
       ],
       [
        124.404,
        39.866
       ],
       [
        124.557,
        39.791
       ],
       [
        124.608,
        39.717
       ],
       [
        124.638,
        39.615
       ],
       [
        124.699,
        39.632
       ],
       [
        124.732,
        39.652
       ],
       [
        124.739,
        39.742
       ],
       [
        124.775,
        39.758
       ],
       [
        124.868,
        39.702
       ],
       [
        125.1,
        39.59
       ],
       [
        125.18,
        39.583
       ],
       [
        125.361,
        39.527
       ],
       [
        125.374,
        39.428
       ],
       [
        125.413,
        39.326
       ],
       [
        125.41,
        39.288
       ],
       [
        125.223,
        38.98
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
        124.905,
        39.536
       ],
       [
        124.849,
        39.508
       ],
       [
        124.846,
        39.559
       ],
       [
        124.89,
        39.602
       ],
       [
        124.935,
        39.608
       ],
       [
        124.905,
        39.536
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
        118.75,
        38.98
       ],
       [
        118.75,
        43.35
       ],
       [
        126.35,
        43.35
       ],
       [
        126.35,
        38.98
       ],
       [
        125.223,
        38.98
       ],
       [
        125.41,
        39.288
       ],
       [
        125.413,
        39.326
       ],
       [
        125.374,
        39.428
       ],
       [
        125.361,
        39.527
       ],
       [
        125.18,
        39.583
       ],
       [
        125.1,
        39.59
       ],
       [
        124.868,
        39.702
       ],
       [
        124.775,
        39.758
       ],
       [
        124.739,
        39.742
       ],
       [
        124.732,
        39.652
       ],
       [
        124.699,
        39.632
       ],
       [
        124.638,
        39.615
       ],
       [
        124.608,
        39.717
       ],
       [
        124.557,
        39.791
       ],
       [
        124.404,
        39.866
       ],
       [
        124.349,
        39.907
       ],
       [
        124.375,
        39.996
       ],
       [
        124.362,
        40.004
       ],
       [
        124.35,
        40.012
       ],
       [
        124.267,
        39.924
       ],
       [
        124.106,
        39.841
       ],
       [
        123.76,
        39.822
       ],
       [
        123.651,
        39.882
       ],
       [
        123.611,
        39.841
       ],
       [
        123.581,
        39.786
       ],
       [
        123.49,
        39.768
       ],
       [
        123.348,
        39.763
       ],
       [
        123.269,
        39.727
       ],
       [
        123.227,
        39.687
       ],
       [
        123.032,
        39.674
       ],
       [
        122.961,
        39.62
       ],
       [
        122.84,
        39.601
       ],
       [
        122.335,
        39.366
       ],
       [
        122.225,
        39.267
       ],
       [
        122.121,
        39.152
       ],
       [
        122.048,
        39.094
       ],
       [
        121.982,
        39.053
       ],
       [
        121.923,
        39.037
       ],
       [
        121.864,
        38.996
       ],
       [
        121.805,
        38.991
       ],
       [
        121.745,
        39.01
       ],
       [
        121.677,
        39.003
       ],
       [
        121.656,
        38.98
       ],
       [
        121.319,
        38.98
       ],
       [
        121.68,
        39.109
       ],
       [
        121.628,
        39.22
       ],
       [
        121.665,
        39.269
       ],
       [
        121.758,
        39.348
       ],
       [
        121.818,
        39.387
       ],
       [
        121.785,
        39.401
       ],
       [
        121.513,
        39.375
       ],
       [
        121.356,
        39.377
       ],
       [
        121.275,
        39.385
       ],
       [
        121.3,
        39.452
       ],
       [
        121.286,
        39.519
       ],
       [
        121.267,
        39.545
       ],
       [
        121.406,
        39.621
       ],
       [
        121.47,
        39.64
       ],
       [
        121.518,
        39.639
       ],
       [
        121.514,
        39.685
       ],
       [
        121.474,
        39.755
       ],
       [
        121.517,
        39.845
       ],
       [
        121.801,
        39.951
       ],
       [
        121.869,
        40.046
       ],
       [
        121.983,
        40.136
       ],
       [
        122.191,
        40.358
       ],
       [
        122.203,
        40.396
       ],
       [
        122.264,
        40.5
       ],
       [
        122.275,
        40.542
       ],
       [
        122.179,
        40.603
       ],
       [
        122.14,
        40.688
       ],
       [
        121.859,
        40.842
       ],
       [
        121.835,
        40.974
       ],
       [
        121.809,
        40.969
       ],
       [
        121.766,
        40.876
       ],
       [
        121.729,
        40.846
       ],
       [
        121.599,
        40.843
       ],
       [
        121.537,
        40.878
       ],
       [
        121.175,
        40.901
       ],
       [
        121.086,
        40.842
       ],
       [
        121.003,
        40.749
       ],
       [
        120.922,
        40.683
       ],
       [
        120.841,
        40.649
       ],
       [
        120.771,
        40.589
       ],
       [
        120.479,
        40.231
       ],
       [
        120.369,
        40.204
       ],
       [
        119.85,
        39.987
       ],
       [
        119.591,
        39.903
       ],
       [
        119.391,
        39.752
       ],
       [
        119.322,
        39.662
       ],
       [
        119.261,
        39.561
       ],
       [
        119.225,
        39.408
       ],
       [
        119.04,
        39.222
       ],
       [
        118.977,
        39.183
       ],
       [
        118.912,
        39.166
       ],
       [
        118.826,
        39.172
       ],
       [
        118.752,
        39.16
       ],
       [
        118.75,
        39.161
       ],
       [
        118.75,
        38.98
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
         118.75,
         39.136
        ],
        [
         118.761,
         39.134
        ],
        [
         118.815,
         39.139
        ],
        [
         118.858,
         39.163
        ],
        [
         118.897,
         39.151
        ],
        [
         118.92,
         39.172
        ],
        [
         118.951,
         39.179
        ],
        [
         118.896,
         39.14
        ],
        [
         118.89,
         39.119
        ],
        [
         118.926,
         39.123
        ],
        [
         118.978,
         39.163
        ],
        [
         119.024,
         39.187
        ],
        [
         119.038,
         39.212
        ],
        [
         119.096,
         39.242
        ],
        [
         119.121,
         39.282
        ],
        [
         119.185,
         39.342
        ],
        [
         119.273,
         39.364
        ],
        [
         119.317,
         39.411
        ],
        [
         119.317,
         39.437
        ],
        [
         119.27,
         39.498
        ],
        [
         119.366,
         39.735
        ],
        [
         119.474,
         39.813
        ],
        [
         119.536,
         39.809
        ],
        [
         119.52,
         39.84
        ],
        [
         119.541,
         39.888
        ],
        [
         119.588,
         39.911
        ],
        [
         119.62,
         39.905
        ],
        [
         119.642,
         39.925
        ],
        [
         119.682,
         39.923
        ],
        [
         119.726,
         39.941
        ],
        [
         119.787,
         39.951
        ],
        [
         119.82,
         39.979
        ],
        [
         119.843,
         39.956
        ],
        [
         119.872,
         39.961
        ],
        [
         119.854,
         39.989
        ],
        [
         119.846,
         40.001
        ],
        [
         119.846,
         40.001
        ],
        [
         119.854,
         40.033
        ],
        [
         119.817,
         40.05
        ],
        [
         119.817,
         40.05
        ],
        [
         119.787,
         40.042
        ],
        [
         119.787,
         40.042
        ],
        [
         119.783,
         40.047
        ],
        [
         119.783,
         40.047
        ],
        [
         119.772,
         40.081
        ],
        [
         119.737,
         40.105
        ],
        [
         119.761,
         40.136
        ],
        [
         119.746,
         40.208
        ],
        [
         119.717,
         40.196
        ],
        [
         119.672,
         40.239
        ],
        [
         119.639,
         40.232
        ],
        [
         119.639,
         40.232
        ],
        [
         119.652,
         40.272
        ],
        [
         119.598,
         40.334
        ],
        [
         119.587,
         40.375
        ],
        [
         119.605,
         40.455
        ],
        [
         119.554,
         40.502
        ],
        [
         119.572,
         40.524
        ],
        [
         119.559,
         40.548
        ],
        [
         119.504,
         40.554
        ],
        [
         119.478,
         40.533
        ],
        [
         119.429,
         40.54
        ],
        [
         119.302,
         40.53
        ],
        [
         119.256,
         40.543
        ],
        [
         119.22,
         40.569
        ],
        [
         119.231,
         40.604
        ],
        [
         119.178,
         40.609
        ],
        [
         119.163,
         40.6
        ],
        [
         119.145,
         40.632
        ],
        [
         119.185,
         40.68
        ],
        [
         119.166,
         40.693
        ],
        [
         119.115,
         40.667
        ],
        [
         119.055,
         40.665
        ],
        [
         119.028,
         40.692
        ],
        [
         119.011,
         40.687
        ],
        [
         118.961,
         40.72
        ],
        [
         118.95,
         40.748
        ],
        [
         118.895,
         40.754
        ],
        [
         118.908,
         40.775
        ],
        [
         118.879,
         40.783
        ],
        [
         118.846,
         40.822
        ],
        [
         118.873,
         40.848
        ],
        [
         118.902,
         40.961
        ],
        [
         118.917,
         40.97
        ],
        [
         118.977,
         40.959
        ],
        [
         118.977,
         40.959
        ],
        [
         119.001,
         40.967
        ],
        [
         119.013,
         41.007
        ],
        [
         118.952,
         41.018
        ],
        [
         118.937,
         41.053
        ],
        [
         118.965,
         41.079
        ],
        [
         119.038,
         41.068
        ],
        [
         119.081,
         41.096
        ],
        [
         119.081,
         41.132
        ],
        [
         119.126,
         41.139
        ],
        [
         119.189,
         41.198
        ],
        [
         119.17,
         41.223
        ],
        [
         119.204,
         41.223
        ],
        [
         119.209,
         41.245
        ],
        [
         119.249,
         41.28
        ],
        [
         119.24,
         41.314
        ],
        [
         119.212,
         41.308
        ],
        [
         119.198,
         41.283
        ],
        [
         119.169,
         41.295
        ],
        [
         119.093,
         41.294
        ],
        [
         118.98,
         41.306
        ],
        [
         118.949,
         41.318
        ],
        [
         118.891,
         41.301
        ],
        [
         118.845,
         41.343
        ],
        [
         118.843,
         41.375
        ],
        [
         118.77,
         41.353
        ],
        [
         118.75,
         41.332
        ],
        [
         118.75,
         39.136
        ]
       ]
      ],
      [
       [
        [
         118.869,
         39.143
        ],
        [
         118.82,
         39.109
        ],
        [
         118.858,
         39.099
        ],
        [
         118.869,
         39.143
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.75,
        43.35
       ],
       [
        118.75,
        41.332
       ],
       [
        118.77,
        41.353
       ],
       [
        118.843,
        41.375
       ],
       [
        118.845,
        41.343
       ],
       [
        118.891,
        41.301
       ],
       [
        118.949,
        41.318
       ],
       [
        118.98,
        41.306
       ],
       [
        119.093,
        41.294
       ],
       [
        119.169,
        41.295
       ],
       [
        119.198,
        41.283
       ],
       [
        119.212,
        41.308
       ],
       [
        119.24,
        41.314
       ],
       [
        119.296,
        41.325
       ],
       [
        119.331,
        41.385
       ],
       [
        119.31,
        41.406
       ],
       [
        119.376,
        41.422
       ],
       [
        119.378,
        41.46
       ],
       [
        119.402,
        41.472
       ],
       [
        119.406,
        41.503
       ],
       [
        119.362,
        41.546
       ],
       [
        119.362,
        41.566
       ],
       [
        119.42,
        41.568
       ],
       [
        119.416,
        41.59
       ],
       [
        119.342,
        41.618
       ],
       [
        119.308,
        41.657
       ],
       [
        119.3,
        41.706
       ],
       [
        119.319,
        41.727
       ],
       [
        119.318,
        41.764
       ],
       [
        119.293,
        41.791
       ],
       [
        119.313,
        41.806
       ],
       [
        119.334,
        41.872
       ],
       [
        119.323,
        41.89
       ],
       [
        119.341,
        41.927
       ],
       [
        119.324,
        41.937
       ],
       [
        119.325,
        41.97
       ],
       [
        119.376,
        42.023
       ],
       [
        119.385,
        42.09
       ],
       [
        119.352,
        42.118
       ],
       [
        119.315,
        42.12
       ],
       [
        119.309,
        42.147
       ],
       [
        119.287,
        42.155
       ],
       [
        119.278,
        42.185
       ],
       [
        119.238,
        42.201
       ],
       [
        119.274,
        42.239
       ],
       [
        119.28,
        42.261
       ],
       [
        119.348,
        42.301
       ],
       [
        119.433,
        42.317
       ],
       [
        119.483,
        42.347
       ],
       [
        119.503,
        42.388
       ],
       [
        119.54,
        42.363
       ],
       [
        119.572,
        42.359
       ],
       [
        119.572,
        42.336
       ],
       [
        119.54,
        42.298
       ],
       [
        119.558,
        42.289
       ],
       [
        119.609,
        42.277
       ],
       [
        119.617,
        42.253
       ],
       [
        119.68,
        42.241
       ],
       [
        119.745,
        42.212
       ],
       [
        119.842,
        42.216
       ],
       [
        119.855,
        42.17
       ],
       [
        119.838,
        42.135
       ],
       [
        119.846,
        42.097
       ],
       [
        119.876,
        42.078
       ],
       [
        119.897,
        42.031
       ],
       [
        119.921,
        42.014
       ],
       [
        119.924,
        41.989
       ],
       [
        119.951,
        41.974
       ],
       [
        119.954,
        41.923
       ],
       [
        119.99,
        41.899
       ],
       [
        120.023,
        41.817
       ],
       [
        120.041,
        41.819
       ],
       [
        120.051,
        41.776
       ],
       [
        120.025,
        41.738
       ],
       [
        120.036,
        41.708
       ],
       [
        120.096,
        41.697
       ],
       [
        120.138,
        41.729
       ],
       [
        120.127,
        41.773
       ],
       [
        120.183,
        41.827
       ],
       [
        120.189,
        41.848
       ],
       [
        120.216,
        41.853
       ],
       [
        120.252,
        41.884
       ],
       [
        120.287,
        41.88
       ],
       [
        120.29,
        41.897
       ],
       [
        120.26,
        41.904
       ],
       [
        120.272,
        41.925
       ],
       [
        120.318,
        41.937
       ],
       [
        120.309,
        41.952
       ],
       [
        120.373,
        41.995
       ],
       [
        120.399,
        41.985
       ],
       [
        120.457,
        42.016
       ],
       [
        120.45,
        42.057
       ],
       [
        120.494,
        42.074
       ],
       [
        120.466,
        42.106
       ],
       [
        120.568,
        42.152
       ],
       [
        120.584,
        42.167
       ],
       [
        120.625,
        42.154
       ],
       [
        120.722,
        42.204
       ],
       [
        120.746,
        42.224
       ],
       [
        120.79,
        42.219
       ],
       [
        120.821,
        42.228
       ],
       [
        120.83,
        42.253
       ],
       [
        120.883,
        42.243
       ],
       [
        120.883,
        42.27
       ],
       [
        120.934,
        42.28
       ],
       [
        120.993,
        42.265
       ],
       [
        121.029,
        42.243
       ],
       [
        121.071,
        42.254
       ],
       [
        121.088,
        42.279
       ],
       [
        121.121,
        42.281
       ],
       [
        121.134,
        42.3
       ],
       [
        121.185,
        42.333
       ],
       [
        121.219,
        42.372
       ],
       [
        121.285,
        42.388
       ],
       [
        121.315,
        42.428
       ],
       [
        121.305,
        42.436
       ],
       [
        121.386,
        42.474
       ],
       [
        121.435,
        42.475
       ],
       [
        121.479,
        42.496
       ],
       [
        121.506,
        42.482
       ],
       [
        121.571,
        42.487
       ],
       [
        121.608,
        42.516
       ],
       [
        121.604,
        42.495
       ],
       [
        121.666,
        42.437
       ],
       [
        121.699,
        42.439
       ],
       [
        121.748,
        42.485
       ],
       [
        121.803,
        42.515
       ],
       [
        121.818,
        42.504
       ],
       [
        121.831,
        42.534
       ],
       [
        121.844,
        42.522
       ],
       [
        121.89,
        42.557
       ],
       [
        121.921,
        42.606
       ],
       [
        121.916,
        42.656
       ],
       [
        121.942,
        42.666
       ],
       [
        121.939,
        42.688
       ],
       [
        122.019,
        42.699
       ],
       [
        122.062,
        42.724
       ],
       [
        122.073,
        42.71
       ],
       [
        122.161,
        42.685
       ],
       [
        122.205,
        42.685
       ],
       [
        122.205,
        42.733
       ],
       [
        122.261,
        42.696
       ],
       [
        122.325,
        42.685
       ],
       [
        122.339,
        42.67
       ],
       [
        122.396,
        42.684
       ],
       [
        122.396,
        42.707
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.372,
        42.776
       ],
       [
        122.351,
        42.83
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.703,
        43.35
       ],
       [
        118.75,
        43.35
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
         123.534,
         39.788
        ],
        [
         123.547,
         39.756
        ],
        [
         123.579,
         39.781
        ],
        [
         123.613,
         39.775
        ],
        [
         123.642,
         39.796
        ],
        [
         123.645,
         39.824
        ],
        [
         123.675,
         39.827
        ],
        [
         123.688,
         39.808
        ],
        [
         123.795,
         39.823
        ],
        [
         123.812,
         39.831
        ],
        [
         123.951,
         39.818
        ],
        [
         124.003,
         39.8
        ],
        [
         124.103,
         39.823
        ],
        [
         124.099,
         39.777
        ],
        [
         124.151,
         39.746
        ],
        [
         124.173,
         39.841
        ],
        [
         124.214,
         39.865
        ],
        [
         124.215,
         39.883
        ],
        [
         124.217,
         39.894
        ],
        [
         124.218,
         39.896
        ],
        [
         124.219,
         39.899
        ],
        [
         124.242,
         39.928
        ],
        [
         124.287,
         39.932
        ],
        [
         124.288,
         39.963
        ],
        [
         124.349,
         39.989
        ],
        [
         124.372,
         40.022
        ],
        [
         124.336,
         40.05
        ],
        [
         124.347,
         40.08
        ],
        [
         124.428,
         40.144
        ],
        [
         124.458,
         40.178
        ],
        [
         124.49,
         40.184
        ],
        [
         124.514,
         40.218
        ],
        [
         124.515,
         40.22
        ],
        [
         124.627,
         40.292
        ],
        [
         124.723,
         40.322
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.934,
         43.35
        ],
        [
         123.703,
         43.35
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.351,
         42.83
        ],
        [
         122.372,
         42.776
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.396,
         42.707
        ],
        [
         122.396,
         42.684
        ],
        [
         122.339,
         42.67
        ],
        [
         122.325,
         42.685
        ],
        [
         122.261,
         42.696
        ],
        [
         122.205,
         42.733
        ],
        [
         122.205,
         42.685
        ],
        [
         122.161,
         42.685
        ],
        [
         122.073,
         42.71
        ],
        [
         122.062,
         42.724
        ],
        [
         122.019,
         42.699
        ],
        [
         121.939,
         42.688
        ],
        [
         121.942,
         42.666
        ],
        [
         121.916,
         42.656
        ],
        [
         121.921,
         42.606
        ],
        [
         121.89,
         42.557
        ],
        [
         121.844,
         42.522
        ],
        [
         121.831,
         42.534
        ],
        [
         121.818,
         42.504
        ],
        [
         121.803,
         42.515
        ],
        [
         121.748,
         42.485
        ],
        [
         121.699,
         42.439
        ],
        [
         121.666,
         42.437
        ],
        [
         121.604,
         42.495
        ],
        [
         121.608,
         42.516
        ],
        [
         121.571,
         42.487
        ],
        [
         121.506,
         42.482
        ],
        [
         121.479,
         42.496
        ],
        [
         121.435,
         42.475
        ],
        [
         121.386,
         42.474
        ],
        [
         121.305,
         42.436
        ],
        [
         121.315,
         42.428
        ],
        [
         121.285,
         42.388
        ],
        [
         121.219,
         42.372
        ],
        [
         121.185,
         42.333
        ],
        [
         121.134,
         42.3
        ],
        [
         121.121,
         42.281
        ],
        [
         121.088,
         42.279
        ],
        [
         121.071,
         42.254
        ],
        [
         121.029,
         42.243
        ],
        [
         120.993,
         42.265
        ],
        [
         120.934,
         42.28
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.243
        ],
        [
         120.83,
         42.253
        ],
        [
         120.821,
         42.228
        ],
        [
         120.79,
         42.219
        ],
        [
         120.746,
         42.224
        ],
        [
         120.722,
         42.204
        ],
        [
         120.625,
         42.154
        ],
        [
         120.584,
         42.167
        ],
        [
         120.568,
         42.152
        ],
        [
         120.466,
         42.106
        ],
        [
         120.494,
         42.074
        ],
        [
         120.45,
         42.057
        ],
        [
         120.457,
         42.016
        ],
        [
         120.399,
         41.985
        ],
        [
         120.373,
         41.995
        ],
        [
         120.309,
         41.952
        ],
        [
         120.318,
         41.937
        ],
        [
         120.272,
         41.925
        ],
        [
         120.26,
         41.904
        ],
        [
         120.29,
         41.897
        ],
        [
         120.287,
         41.88
        ],
        [
         120.252,
         41.884
        ],
        [
         120.216,
         41.853
        ],
        [
         120.189,
         41.848
        ],
        [
         120.183,
         41.827
        ],
        [
         120.127,
         41.773
        ],
        [
         120.138,
         41.729
        ],
        [
         120.096,
         41.697
        ],
        [
         120.036,
         41.708
        ],
        [
         120.025,
         41.738
        ],
        [
         120.051,
         41.776
        ],
        [
         120.041,
         41.819
        ],
        [
         120.023,
         41.817
        ],
        [
         119.99,
         41.899
        ],
        [
         119.954,
         41.923
        ],
        [
         119.951,
         41.974
        ],
        [
         119.924,
         41.989
        ],
        [
         119.921,
         42.014
        ],
        [
         119.897,
         42.031
        ],
        [
         119.876,
         42.078
        ],
        [
         119.846,
         42.097
        ],
        [
         119.838,
         42.135
        ],
        [
         119.855,
         42.17
        ],
        [
         119.842,
         42.216
        ],
        [
         119.745,
         42.212
        ],
        [
         119.68,
         42.241
        ],
        [
         119.617,
         42.253
        ],
        [
         119.609,
         42.277
        ],
        [
         119.558,
         42.289
        ],
        [
         119.558,
         42.289
        ],
        [
         119.54,
         42.298
        ],
        [
         119.572,
         42.336
        ],
        [
         119.572,
         42.359
        ],
        [
         119.54,
         42.363
        ],
        [
         119.503,
         42.388
        ],
        [
         119.483,
         42.347
        ],
        [
         119.433,
         42.317
        ],
        [
         119.348,
         42.301
        ],
        [
         119.28,
         42.261
        ],
        [
         119.274,
         42.239
        ],
        [
         119.238,
         42.201
        ],
        [
         119.278,
         42.185
        ],
        [
         119.287,
         42.155
        ],
        [
         119.309,
         42.147
        ],
        [
         119.315,
         42.12
        ],
        [
         119.352,
         42.118
        ],
        [
         119.385,
         42.09
        ],
        [
         119.376,
         42.023
        ],
        [
         119.325,
         41.97
        ],
        [
         119.324,
         41.937
        ],
        [
         119.341,
         41.927
        ],
        [
         119.323,
         41.89
        ],
        [
         119.334,
         41.872
        ],
        [
         119.313,
         41.806
        ],
        [
         119.293,
         41.791
        ],
        [
         119.318,
         41.764
        ],
        [
         119.319,
         41.727
        ],
        [
         119.3,
         41.706
        ],
        [
         119.308,
         41.657
        ],
        [
         119.342,
         41.618
        ],
        [
         119.416,
         41.59
        ],
        [
         119.42,
         41.568
        ],
        [
         119.362,
         41.566
        ],
        [
         119.362,
         41.546
        ],
        [
         119.406,
         41.503
        ],
        [
         119.402,
         41.472
        ],
        [
         119.378,
         41.46
        ],
        [
         119.376,
         41.422
        ],
        [
         119.31,
         41.406
        ],
        [
         119.331,
         41.385
        ],
        [
         119.296,
         41.325
        ],
        [
         119.24,
         41.314
        ],
        [
         119.249,
         41.28
        ],
        [
         119.209,
         41.245
        ],
        [
         119.204,
         41.223
        ],
        [
         119.17,
         41.223
        ],
        [
         119.189,
         41.198
        ],
        [
         119.126,
         41.139
        ],
        [
         119.081,
         41.132
        ],
        [
         119.081,
         41.096
        ],
        [
         119.038,
         41.068
        ],
        [
         118.965,
         41.079
        ],
        [
         118.937,
         41.053
        ],
        [
         118.952,
         41.018
        ],
        [
         119.013,
         41.007
        ],
        [
         119.001,
         40.967
        ],
        [
         118.977,
         40.959
        ],
        [
         118.977,
         40.959
        ],
        [
         118.917,
         40.97
        ],
        [
         118.902,
         40.961
        ],
        [
         118.873,
         40.848
        ],
        [
         118.846,
         40.822
        ],
        [
         118.879,
         40.783
        ],
        [
         118.908,
         40.775
        ],
        [
         118.895,
         40.754
        ],
        [
         118.95,
         40.748
        ],
        [
         118.961,
         40.72
        ],
        [
         119.011,
         40.687
        ],
        [
         119.028,
         40.692
        ],
        [
         119.055,
         40.665
        ],
        [
         119.115,
         40.667
        ],
        [
         119.166,
         40.693
        ],
        [
         119.185,
         40.68
        ],
        [
         119.145,
         40.632
        ],
        [
         119.163,
         40.6
        ],
        [
         119.178,
         40.609
        ],
        [
         119.231,
         40.604
        ],
        [
         119.22,
         40.569
        ],
        [
         119.256,
         40.543
        ],
        [
         119.302,
         40.53
        ],
        [
         119.429,
         40.54
        ],
        [
         119.478,
         40.533
        ],
        [
         119.504,
         40.554
        ],
        [
         119.559,
         40.548
        ],
        [
         119.572,
         40.524
        ],
        [
         119.554,
         40.502
        ],
        [
         119.605,
         40.455
        ],
        [
         119.587,
         40.375
        ],
        [
         119.598,
         40.334
        ],
        [
         119.652,
         40.272
        ],
        [
         119.639,
         40.232
        ],
        [
         119.639,
         40.232
        ],
        [
         119.672,
         40.239
        ],
        [
         119.717,
         40.196
        ],
        [
         119.746,
         40.208
        ],
        [
         119.761,
         40.136
        ],
        [
         119.737,
         40.105
        ],
        [
         119.772,
         40.081
        ],
        [
         119.783,
         40.047
        ],
        [
         119.783,
         40.047
        ],
        [
         119.787,
         40.042
        ],
        [
         119.787,
         40.042
        ],
        [
         119.817,
         40.05
        ],
        [
         119.817,
         40.05
        ],
        [
         119.854,
         40.033
        ],
        [
         119.846,
         40.001
        ],
        [
         119.846,
         40.001
        ],
        [
         119.854,
         39.989
        ],
        [
         119.918,
         39.99
        ],
        [
         119.942,
         40.01
        ],
        [
         119.947,
         40.04
        ],
        [
         120.092,
         40.077
        ],
        [
         120.135,
         40.075
        ],
        [
         120.162,
         40.096
        ],
        [
         120.273,
         40.127
        ],
        [
         120.372,
         40.174
        ],
        [
         120.451,
         40.178
        ],
        [
         120.492,
         40.2
        ],
        [
         120.524,
         40.257
        ],
        [
         120.522,
         40.305
        ],
        [
         120.537,
         40.325
        ],
        [
         120.603,
         40.361
        ],
        [
         120.596,
         40.399
        ],
        [
         120.617,
         40.42
        ],
        [
         120.616,
         40.445
        ],
        [
         120.619,
         40.46
        ],
        [
         120.667,
         40.467
        ],
        [
         120.694,
         40.506
        ],
        [
         120.722,
         40.516
        ],
        [
         120.728,
         40.539
        ],
        [
         120.823,
         40.594
        ],
        [
         120.837,
         40.644
        ],
        [
         120.83,
         40.671
        ],
        [
         120.861,
         40.685
        ],
        [
         120.94,
         40.687
        ],
        [
         120.983,
         40.713
        ],
        [
         121.033,
         40.709
        ],
        [
         121.029,
         40.746
        ],
        [
         120.991,
         40.744
        ],
        [
         120.98,
         40.766
        ],
        [
         120.994,
         40.791
        ],
        [
         120.972,
         40.806
        ],
        [
         121.007,
         40.808
        ],
        [
         121.011,
         40.784
        ],
        [
         121.087,
         40.798
        ],
        [
         121.077,
         40.816
        ],
        [
         121.097,
         40.84
        ],
        [
         121.126,
         40.869
        ],
        [
         121.178,
         40.874
        ],
        [
         121.236,
         40.851
        ],
        [
         121.291,
         40.851
        ],
        [
         121.439,
         40.83
        ],
        [
         121.44,
         40.882
        ],
        [
         121.499,
         40.88
        ],
        [
         121.527,
         40.852
        ],
        [
         121.555,
         40.85
        ],
        [
         121.553,
         40.818
        ],
        [
         121.576,
         40.838
        ],
        [
         121.626,
         40.844
        ],
        [
         121.683,
         40.83
        ],
        [
         121.732,
         40.847
        ],
        [
         121.735,
         40.862
        ],
        [
         121.778,
         40.887
        ],
        [
         121.816,
         40.895
        ],
        [
         121.843,
         40.832
        ],
        [
         121.884,
         40.802
        ],
        [
         121.934,
         40.798
        ],
        [
         121.936,
         40.711
        ],
        [
         121.952,
         40.681
        ],
        [
         122.025,
         40.674
        ],
        [
         122.066,
         40.649
        ],
        [
         122.122,
         40.657
        ],
        [
         122.149,
         40.672
        ],
        [
         122.134,
         40.614
        ],
        [
         122.15,
         40.588
        ],
        [
         122.246,
         40.52
        ],
        [
         122.231,
         40.505
        ],
        [
         122.265,
         40.48
        ],
        [
         122.222,
         40.481
        ],
        [
         122.24,
         40.461
        ],
        [
         122.251,
         40.446
        ],
        [
         122.229,
         40.424
        ],
        [
         122.187,
         40.423
        ],
        [
         122.199,
         40.382
        ],
        [
         122.152,
         40.358
        ],
        [
         122.136,
         40.375
        ],
        [
         122.111,
         40.349
        ],
        [
         122.138,
         40.339
        ],
        [
         122.11,
         40.316
        ],
        [
         122.08,
         40.333
        ],
        [
         122.04,
         40.322
        ],
        [
         122.04,
         40.26
        ],
        [
         122.027,
         40.245
        ],
        [
         121.94,
         40.242
        ],
        [
         121.95,
         40.204
        ],
        [
         121.981,
         40.173
        ],
        [
         122.003,
         40.172
        ],
        [
         121.995,
         40.128
        ],
        [
         121.956,
         40.133
        ],
        [
         121.91,
         40.073
        ],
        [
         121.825,
         40.026
        ],
        [
         121.796,
         39.999
        ],
        [
         121.779,
         39.943
        ],
        [
         121.764,
         39.934
        ],
        [
         121.7,
         39.937
        ],
        [
         121.627,
         39.883
        ],
        [
         121.572,
         39.865
        ],
        [
         121.542,
         39.874
        ],
        [
         121.53,
         39.851
        ],
        [
         121.472,
         39.802
        ],
        [
         121.487,
         39.76
        ],
        [
         121.459,
         39.748
        ],
        [
         121.503,
         39.703
        ],
        [
         121.483,
         39.659
        ],
        [
         121.452,
         39.658
        ],
        [
         121.45,
         39.625
        ],
        [
         121.326,
         39.601
        ],
        [
         121.299,
         39.606
        ],
        [
         121.264,
         39.59
        ],
        [
         121.227,
         39.555
        ],
        [
         121.225,
         39.519
        ],
        [
         121.268,
         39.483
        ],
        [
         121.287,
         39.507
        ],
        [
         121.302,
         39.476
        ],
        [
         121.246,
         39.457
        ],
        [
         121.27,
         39.434
        ],
        [
         121.247,
         39.421
        ],
        [
         121.246,
         39.389
        ],
        [
         121.27,
         39.374
        ],
        [
         121.308,
         39.391
        ],
        [
         121.324,
         39.371
        ],
        [
         121.355,
         39.378
        ],
        [
         121.433,
         39.358
        ],
        [
         121.436,
         39.33
        ],
        [
         121.467,
         39.32
        ],
        [
         121.475,
         39.296
        ],
        [
         121.509,
         39.292
        ],
        [
         121.515,
         39.287
        ],
        [
         121.562,
         39.323
        ],
        [
         121.621,
         39.326
        ],
        [
         121.725,
         39.364
        ],
        [
         121.712,
         39.34
        ],
        [
         121.719,
         39.32
        ],
        [
         121.668,
         39.311
        ],
        [
         121.673,
         39.276
        ],
        [
         121.624,
         39.286
        ],
        [
         121.589,
         39.263
        ],
        [
         121.631,
         39.226
        ],
        [
         121.591,
         39.229
        ],
        [
         121.587,
         39.194
        ],
        [
         121.604,
         39.166
        ],
        [
         121.639,
         39.166
        ],
        [
         121.682,
         39.118
        ],
        [
         121.632,
         39.078
        ],
        [
         121.606,
         39.081
        ],
        [
         121.642,
         39.12
        ],
        [
         121.591,
         39.155
        ],
        [
         121.562,
         39.127
        ],
        [
         121.599,
         39.099
        ],
        [
         121.582,
         39.076
        ],
        [
         121.508,
         39.034
        ],
        [
         121.431,
         39.027
        ],
        [
         121.371,
         39.06
        ],
        [
         121.317,
         39.012
        ],
        [
         121.341,
         38.981
        ],
        [
         121.335,
         38.98
        ],
        [
         121.665,
         38.98
        ],
        [
         121.671,
         39.01
        ],
        [
         121.738,
         38.999
        ],
        [
         121.757,
         39.026
        ],
        [
         121.79,
         39.023
        ],
        [
         121.802,
         38.98
        ],
        [
         121.915,
         38.98
        ],
        [
         121.906,
         38.998
        ],
        [
         121.853,
         39.036
        ],
        [
         121.889,
         39.027
        ],
        [
         121.929,
         39.025
        ],
        [
         121.907,
         39.056
        ],
        [
         121.923,
         39.054
        ],
        [
         121.963,
         39.03
        ],
        [
         122.014,
         39.073
        ],
        [
         122.062,
         39.06
        ],
        [
         122.072,
         39.074
        ],
        [
         122.048,
         39.101
        ],
        [
         122.088,
         39.112
        ],
        [
         122.128,
         39.145
        ],
        [
         122.167,
         39.159
        ],
        [
         122.124,
         39.173
        ],
        [
         122.117,
         39.214
        ],
        [
         122.16,
         39.238
        ],
        [
         122.243,
         39.268
        ],
        [
         122.275,
         39.322
        ],
        [
         122.309,
         39.346
        ],
        [
         122.366,
         39.37
        ],
        [
         122.413,
         39.412
        ],
        [
         122.455,
         39.408
        ],
        [
         122.468,
         39.403
        ],
        [
         122.512,
         39.413
        ],
        [
         122.533,
         39.42
        ],
        [
         122.582,
         39.464
        ],
        [
         122.637,
         39.489
        ],
        [
         122.649,
         39.517
        ],
        [
         122.683,
         39.515
        ],
        [
         122.809,
         39.56
        ],
        [
         122.847,
         39.582
        ],
        [
         122.861,
         39.605
        ],
        [
         122.942,
         39.605
        ],
        [
         122.973,
         39.595
        ],
        [
         122.979,
         39.616
        ],
        [
         123.021,
         39.643
        ],
        [
         123.011,
         39.655
        ],
        [
         123.103,
         39.677
        ],
        [
         123.146,
         39.647
        ],
        [
         123.167,
         39.674
        ],
        [
         123.213,
         39.666
        ],
        [
         123.215,
         39.697
        ],
        [
         123.253,
         39.69
        ],
        [
         123.287,
         39.704
        ],
        [
         123.27,
         39.715
        ],
        [
         123.275,
         39.754
        ],
        [
         123.351,
         39.751
        ],
        [
         123.389,
         39.747
        ],
        [
         123.393,
         39.724
        ],
        [
         123.478,
         39.747
        ],
        [
         123.522,
         39.773
        ],
        [
         123.534,
         39.788
        ]
       ]
      ],
      [
       [
        [
         122.64,
         39.286
        ],
        [
         122.593,
         39.278
        ],
        [
         122.539,
         39.308
        ],
        [
         122.509,
         39.29
        ],
        [
         122.577,
         39.27
        ],
        [
         122.679,
         39.269
        ],
        [
         122.673,
         39.27
        ],
        [
         122.663,
         39.274
        ],
        [
         122.656,
         39.277
        ],
        [
         122.641,
         39.288
        ],
        [
         122.64,
         39.286
        ]
       ]
      ],
      [
       [
        [
         122.319,
         39.171
        ],
        [
         122.345,
         39.145
        ],
        [
         122.366,
         39.175
        ],
        [
         122.399,
         39.162
        ],
        [
         122.383,
         39.191
        ],
        [
         122.393,
         39.213
        ],
        [
         122.343,
         39.203
        ],
        [
         122.322,
         39.177
        ],
        [
         122.323,
         39.174
        ],
        [
         122.319,
         39.172
        ],
        [
         122.319,
         39.171
        ]
       ]
      ],
      [
       [
        [
         122.692,
         39.233
        ],
        [
         122.697,
         39.206
        ],
        [
         122.752,
         39.23
        ],
        [
         122.741,
         39.249
        ],
        [
         122.636,
         39.242
        ],
        [
         122.628,
         39.232
        ],
        [
         122.69,
         39.235
        ],
        [
         122.691,
         39.234
        ],
        [
         122.692,
         39.233
        ]
       ]
      ],
      [
       [
        [
         122.739,
         39.035
        ],
        [
         122.705,
         39.044
        ],
        [
         122.733,
         39.014
        ],
        [
         122.758,
         39.01
        ],
        [
         122.739,
         39.037
        ],
        [
         122.739,
         39.035
        ]
       ]
      ],
      [
       [
        [
         123.023,
         39.547
        ],
        [
         122.961,
         39.551
        ],
        [
         122.945,
         39.52
        ],
        [
         122.996,
         39.495
        ],
        [
         123.036,
         39.533
        ],
        [
         123.023,
         39.547
        ]
       ]
      ],
      [
       [
        [
         122.503,
         39.241
        ],
        [
         122.502,
         39.224
        ],
        [
         122.548,
         39.229
        ],
        [
         122.503,
         39.241
        ]
       ]
      ],
      [
       [
        [
         120.787,
         40.474
        ],
        [
         120.833,
         40.492
        ],
        [
         120.83,
         40.516
        ],
        [
         120.805,
         40.526
        ],
        [
         120.774,
         40.48
        ],
        [
         120.787,
         40.474
        ]
       ]
      ],
      [
       [
        [
         123.087,
         39.427
        ],
        [
         123.09,
         39.451
        ],
        [
         123.054,
         39.458
        ],
        [
         123.087,
         39.427
        ]
       ]
      ],
      [
       [
        [
         123.161,
         39.025
        ],
        [
         123.206,
         39.057
        ],
        [
         123.201,
         39.078
        ],
        [
         123.146,
         39.092
        ],
        [
         123.144,
         39.039
        ],
        [
         123.161,
         39.025
        ]
       ]
      ],
      [
       [
        [
         123.717,
         39.745
        ],
        [
         123.757,
         39.754
        ],
        [
         123.72,
         39.763
        ],
        [
         123.717,
         39.745
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         126.35,
         43.35
        ],
        [
         123.934,
         43.35
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.35,
         41.243
        ],
        [
         126.35,
         43.35
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.609,
       43.35
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.401,
       41.133
      ],
      [
       122.44,
       41.055
      ],
      [
       122.409,
       41.003
      ],
      [
       122.326,
       40.963
      ],
      [
       122.294,
       40.898
      ],
      [
       122.236,
       40.852
      ],
      [
       122.152,
       40.823
      ],
      [
       122.147,
       40.78
      ],
      [
       122.14,
       40.688
      ]
     ]
    },
    "n": "Liao"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.75,
       43.251
      ],
      [
       118.911,
       43.237
      ],
      [
       119.22,
       43.229
      ],
      [
       119.484,
       43.262
      ],
      [
       120.178,
       43.35
      ]
     ]
    },
    "n": "Xar Moron"
   }
  ],
  "lakes": [],
  "_bbox": [
   118.75,
   38.98,
   126.35,
   43.35
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
