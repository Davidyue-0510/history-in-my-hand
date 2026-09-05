// 本文件由 tools/build.py 自动生成（切片 guangning），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guangning"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guangning"] = {
 "meta": {
  "kind": "county",
  "region": "liaoxi",
  "title": "广宁",
  "dossier_label": "广宁",
  "subtitle": "辽西军政中心 · 广宁卫 · 天启二年 (1622) 陷落",
  "primary_place": "guangning",
  "dossier_event": "event:guangning_fall",
  "back": "枢纽",
  "lead": "广宁是辽西军政中心：洪武二十五年 (1392) 置广宁卫，正统后辽东镇移驻。天启二年 (1622) 努尔哈赤取广宁，王化贞弃城、孙得功降、熊廷弼护辽西百万难民入山海关。明尽失辽西。经抚不和是直接原因。",
  "parties_note": "广宁之失主因经略熊廷弼（主守）与巡抚王化贞（主战）经抚不和，明、清、现代三方对责任归属侧重不同。系统不裁决，只并列。",
  "subject_names": {
   "event:guangning_founded": "广宁卫建置",
   "event:guangning_zhen": "辽东镇移驻广宁",
   "event:guangning_fall": "广宁陷落",
   "place:guangning": "广宁城",
   "person:xiongtingbing": "熊廷弼",
   "person:wang_huazhen": "王化贞",
   "person:sun_degong": "孙得功",
   "person:nuerhaci": "努尔哈赤"
  },
  "terrain_grid": "china_coarse",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "ming_qing",
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
    "note": "广宁：朝堂凝聚力——巡按辽东"
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
    "note": "广宁：后勤物力——巡按辽东"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "广宁：人口动员——得功有异志，大呼兵败先奔"
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
    "note": "广宁：地缘战略——巡按辽东"
   }
  },
  "province": "liaoning",
  "page": "county.html?scene=guangning",
  "key": "guangning",
  "scene_id": "guangning",
  "vocab_pack": "ming_qing"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "party": "清修·明臣",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清修"
  },
  {
   "id": "ming_xizong_shilu",
   "title": "明熹宗实录",
   "party": "明廷官方",
   "stance_label": "本朝官修·当代",
   "distance_label": "明当代官修，距天启事约数年",
   "color": "#A0473A",
   "compiler": "明史馆",
   "period": "天启朝"
  },
  {
   "id": "chao_xiandai",
   "title": "李朝实录·宣祖/光海日记",
   "party": "朝鲜官方",
   "stance_label": "第三国当代官修",
   "distance_label": "成书当代至 100 年内，与明清并行",
   "color": "#2E5C8F",
   "compiler": "李朝史官",
   "period": "万历"
  },
  {
   "id": "modern",
   "title": "现代史学综述",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "多家学术著作",
   "period": "现代"
  },
  {
   "id": "zhuozhongzhi",
   "title": "酌中志",
   "juan": "卷上·先监张公纪略 / 忧危竑议 / 缢略（魏忠贤专政、诛东林、熊廷弼之死）",
   "compiler": "刘若愚（内臣）",
   "compiled_year": 1640,
   "stance_label": "内臣自述·半独立",
   "distance_label": "魏忠贤败后追记，距事约 15 年",
   "party": "明·内臣文献",
   "faction": "nei_guan",
   "color": "#7A6A53",
   "note": "宦官刘若愚所撰宫禁内臣自述，价值在内部视角；魏忠贤败后作此自辩，亦带立场。记魏忠贤专政、诛东林、宫内规制。"
  },
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "juan": "卷八十（万历四十七年·萨尔浒）／卷八十二（天启二年·广宁）",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），综合实录奏议并附考异",
   "party": "二手综述",
   "color": "#6C7A89",
   "note": "夏燮私修明编年，广采实录、奏议、私史并附考异。叙事相对平允，但立场属后世综合，非当代当事人；其经抚不和、门户之争的记载尤可印证明内部派系互攻。",
   "faction": null,
   "availability": "fetched",
   "url": "https://zh.wikisource.org/wiki/%E6%98%8E%E9%80%9A%E9%91%91/%E5%8D%B7080",
   "cached_text": "已抓卷080（万历四十七年·萨尔浒）与卷082（天启二年·广宁）原文到 .tmp/mingtongjian_080.txt / _082.txt。",
   "period": "晚清"
  }
 ],
 "places": [
  {
   "id": "guangning",
   "name": "广宁城",
   "lon": 121.78,
   "lat": 41.62,
   "type": "city",
   "modern": "辽宁北镇市",
   "note": "明广宁卫/辽东镇驻地，辽西最后重心",
   "elev": 129
  },
  {
   "id": "guangning_wei",
   "name": "广宁卫",
   "lon": 121.78,
   "lat": 41.62,
   "type": "wei",
   "modern": "辽宁北镇市",
   "note": "洪武二十五年置，隶辽东都司",
   "elev": 129
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.75,
   "lat": 40.0,
   "type": "guan",
   "modern": "河北秦皇岛",
   "note": "辽西走廊终端，明蓟镇门户",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ],
   "elev": 11
  },
  {
   "id": "shenyang_cheng",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.81,
   "type": "city",
   "modern": "辽宁沈阳市",
   "note": "1621 陷后辽东重心西迁广宁",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "haizhou",
    "kaiyuan",
    "liaoyang",
    "tieling"
   ],
   "elev": 42
  },
  {
   "id": "yanshan",
   "name": "燕山",
   "lon": 119.5,
   "lat": 40.4,
   "type": "mountain",
   "modern": "冀辽交界",
   "note": "辽西走廊北缘",
   "elev": 801
  }
 ],
 "persons": [
  {
   "id": "xiongtingbing",
   "name": "熊廷弼",
   "role": "辽东经略",
   "note": "主守，与王化贞经抚不和，广宁陷后受诛",
   "faction": "feng_jiang",
   "influence": 11,
   "_global_id": "xiongtingbing",
   "_other_scenes": [
    "kaiyuan",
    "tieling"
   ]
  },
  {
   "id": "wang_huazhen",
   "name": "王化贞",
   "role": "辽东巡抚",
   "note": "主战，广宁之战弃城逃",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "sun_degong",
   "name": "孙得功",
   "role": "广宁将",
   "note": "广宁陷前通敌，开门迎后金",
   "faction": "feng_jiang",
   "influence": 1
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1622 年正月取广宁",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang",
    "ningyuan"
   ]
  },
  {
   "id": "xiong_tingbi",
   "name": "熊廷弼",
   "faction": "feng_jiang",
   "note": "辽东经略，广宁之失后被逮，天启五年遭阉党诛杀。",
   "influence": 1,
   "_global_id": "xiongtingbing",
   "_other_scenes": [
    "kaiyuan",
    "tieling"
   ]
  },
  {
   "id": "liu_ruoyu",
   "name": "刘若愚",
   "faction": "nei_guan",
   "note": "内臣，《酌中志》作者，魏忠贤败后自辩，记宫禁内部与阉党事。",
   "influence": 5
  },
  {
   "id": "wei_zhongxian",
   "name": "魏忠贤",
   "faction": "eunuch",
   "note": "阉党首领，天启朝专政。",
   "influence": 1
  },
  {
   "id": "feng_quan",
   "name": "冯铨",
   "faction": "eunuch",
   "note": "阉党骨干，与熊廷弼有私怨，借讲筵奏请诛之。",
   "influence": 0
  },
  {
   "id": "yang_lian",
   "name": "杨涟",
   "faction": "donglin",
   "note": "东林骨干，弹魏忠贤二十四罪，死于阉党诏狱。",
   "influence": 2
  },
  {
   "id": "cui_chengxiu",
   "name": "崔呈秀",
   "faction": "eunuch",
   "note": "阉党骨干，进《点将录》《天鉴录》列东林姓名。",
   "influence": 0
  },
  {
   "id": "ke_shi",
   "name": "客氏",
   "faction": "eunuch",
   "note": "奉圣夫人，魏忠贤私党。",
   "influence": 0
  },
  {
   "id": "wang_tigan",
   "name": "王体乾",
   "faction": "eunuch",
   "note": "司礼监掌印，党附魏忠贤。",
   "influence": 0
  },
  {
   "id": "luo_yiguan",
   "name": "罗一贯",
   "role": "西平堡守将",
   "note": "广宁陷前拒降死战，城破遇杀。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "role": "总兵",
   "note": "广宁之战赴援，平阳桥败后走觉华岛。",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ]
  }
 ],
 "assertions": [
  {
   "id": "G001",
   "subject": "event:guangning_founded",
   "predicate": "建置年",
   "value_text": "洪武二十五年 (1392) 始置广宁卫, 隶辽东都司",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武二十五年",
   "place": "guangning",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武二十五年, 置广宁卫, 隶辽东都司。",
   "note": "广宁在辽代即为显州, 明初降为卫, 正统后辽东镇移驻。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "G002",
   "subject": "event:guangning_zhen",
   "predicate": "军政地位",
   "value_text": "正统十四年 (1449) 土木之变后, 辽东镇总兵移驻广宁, 成为辽西军政中心",
   "source": "mingshi",
   "layer": "record",
   "era": "正统十四年",
   "place": "guangning",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "土木之变, 辽东镇总兵移驻广宁, 节制辽西诸卫。",
   "note": "广宁由此成为明在辽西的最高军事支点。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "G003",
   "subject": "event:guangning_fall",
   "predicate": "陷落年份",
   "value_text": "天启二年正月 (1622), 努尔哈赤取广宁, 王化贞弃城, 孙得功降, 熊廷弼护辽西难民入山海关",
   "source": "ming_xizong_shilu",
   "layer": "record",
   "era": "天启二年正月",
   "place": "guangning",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "天启二年正月, 后金取广宁, 王化贞弃城走, 孙得功降, 熊廷弼以辽西民众入关。",
   "note": "经略熊廷弼主守、巡抚王化贞主战, 经抚不和是广宁速陷的直接原因。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "G004",
   "subject": "event:guangning_fall",
   "predicate": "朝鲜视角",
   "value_text": "李朝闻广宁陷, 知明失辽西, 急议防鸭绿江、增兵边境",
   "source": "chao_xiandai",
   "layer": "record",
   "era": "天启二年",
   "place": "guangning",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "广宁已陷, 辽西尽失, 朝议沿江增戍, 以防清兵渡。",
   "note": "朝鲜对广宁之陷的反应, 与明方记载相互印证明已无辽西屏障。",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "G005",
   "subject": "event:guangning_fall",
   "predicate": "败因主流说",
   "value_text": "学界主流：广宁之失主因经略熊廷弼与巡抚王化贞战略相左、经抚不和, 非单纯兵力不敌",
   "source": "modern",
   "layer": "scholarship",
   "era": "天启二年",
   "place": "guangning",
   "confidence": 0.88,
   "quote_status": "paraphrase_unverified",
   "quote": "广宁之败, 经抚异议, 事权不一, 非战之罪也。",
   "note": "亦有学者强调明辽东总体战略空虚, 广宁孤城难守, 不应全归咎于人争。",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "G010",
   "subject": "event:guangning_fall",
   "predicate": "明军兵力部署",
   "value_text": "广宁之战明军在辽西的实际总兵力与阵地部署, 三方记载数字不一, 未见统一核定",
   "source": "mingshi",
   "layer": "gap",
   "era": "天启二年正月",
   "place": "guangning",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》天启二年正月至二月逐卷 / 《明史·熊廷弼王化贞传》/ 清初《满文老档》天命七年",
    "skills": [
     "古文",
     "统计"
    ],
    "accept": "给出广宁陷落时明军在辽西的估计兵力区间与主要部署, 注明分歧来源",
    "effort": "2-3 周"
   },
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "G011",
   "subject": "event:guangning_fall",
   "predicate": "经抚责任归属",
   "value_text": "熊廷弼「主守」与王化贞「主战」孰应为广宁之失负主责, 明、清、现代三方叙事侧重不同",
   "source": "mingshi",
   "layer": "gap",
   "era": "天启二年",
   "place": "guangning",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明史·熊廷弼传》《明史·王化贞传》/ 《明熹宗实录》/ 现代研究 (如 李光涛 相关考)",
    "skills": [
     "古文"
    ],
    "accept": "整理至少两方史料对经抚责任的不同表述, 标出史料政治立场的影响",
    "effort": "1-2 周"
   },
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX001",
   "subject": "person:xiongtingbing",
   "predicate": "巡按辽东",
   "value_text": "巡按辽东",
   "time": {
    "era_text": "万历三十六年",
    "start": "1608-01-01",
    "end": "1608-12-31",
    "gregorian_year": 1608
   },
   "place": "",
   "source": "mingshi",
   "quote": "三十六年，巡按遼東。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX002",
   "subject": "person:xiongtingbing",
   "predicate": "上言",
   "value_text": "请集兵十八万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "乃上方略，請集兵十八萬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX003",
   "subject": "person:xiongtingbing",
   "predicate": "主张",
   "value_text": "防边以守为上",
   "time": {
    "era_text": "万历三十六年",
    "start": "1608-01-01",
    "end": "1608-12-31",
    "gregorian_year": 1608
   },
   "place": "",
   "source": "mingshi",
   "quote": "廷弼言防邊以守為上",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX004",
   "subject": "person:xiongtingbing",
   "predicate": "经略辽东",
   "value_text": "代镐经略",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "代鎬經略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX005",
   "subject": "person:xiongtingbing",
   "predicate": "主张",
   "value_text": "守御为主",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "至是主守禦益堅",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006",
   "subject": "person:xiongtingbing",
   "predicate": "被劾",
   "value_text": "无谋者八、欺君者三",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "御史馮三元劾廷弼無謀者八、欺君者三",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "time 为推断，原文未明确纪年",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007",
   "subject": "person:xiongtingbing",
   "predicate": "建策",
   "value_text": "三方布置策",
   "time": {
    "era_text": "天启元年六月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "",
   "source": "mingshi",
   "quote": "乃建三方佈置策",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX008",
   "subject": "person:xiongtingbing",
   "predicate": "主张",
   "value_text": "不宜分兵防河",
   "time": {
    "era_text": "天启元年",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "",
   "source": "mingshi",
   "quote": "斷不宜分兵防河，先為自弱之計也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "place 未在白名单，待消歧",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009",
   "subject": "person:xiongtingbing",
   "predicate": "被论死",
   "value_text": "廷弼、化贞并论死",
   "time": {
    "era_text": "天启二年四月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingshi",
   "quote": "廷弼、化貞並論死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX010",
   "subject": "person:xiongtingbing",
   "predicate": "被弃市",
   "value_text": "弃市，传首九边",
   "time": {
    "era_text": "天启五年八月",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "",
   "source": "mingshi",
   "quote": "遂以五年八月棄市，傳首九邊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "place 未在白名单，待消歧",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011",
   "subject": "person:xiongtingbing",
   "predicate": "被昭雪",
   "value_text": "诏许其子持首归葬",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "",
   "source": "mingshi",
   "quote": "詔許其子持首歸葬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "time 为推断，原文未明确纪年",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "ZZ001",
   "subject": "person:liu_ruoyu",
   "predicate": "自述遭阉党排斥",
   "value_text": "天启元年冬被魏忠贤退于御马监",
   "time": {
    "era_text": "天启元年",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "天啟元年冬，自司禮監被魏忠賢退於御馬監",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "内臣刘若愚自述，魏忠贤专政下被排挤出司礼监。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ002",
   "subject": "person:liu_ruoyu",
   "predicate": "自述遭贬斥",
   "value_text": "天启七年十二月被降为净军发往南京",
   "time": {
    "era_text": "天启七年",
    "start": "1627-01-01",
    "end": "1627-12-31",
    "gregorian_year": 1627
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "天啟七年十二月，著降做淨軍，發去南京孝陵衛種菜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "刘若愚自述。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ003",
   "subject": "person:liu_ruoyu",
   "predicate": "自述下狱",
   "value_text": "崇祯元年五月被逮入刑部狱",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "崇禎元年五月初一，逮入刑部獄",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "阉党败后刘若愚仍被牵入诏狱。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ004",
   "subject": "person:liu_ruoyu",
   "predicate": "自述拟斩",
   "value_text": "崇祯元年六月被会审拟斩",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "崇禎元年六月二十日，中府會審……李永貞、若愚、李實俱引……俱決不待時",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "刘若愚自辩：暗害杨、左者非己。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ005",
   "subject": "person:liu_ruoyu",
   "predicate": "自述改判绞",
   "value_text": "崇祯八年五月被改判绞刑",
   "time": {
    "era_text": "崇祯八年",
    "start": "1635-01-01",
    "end": "1635-12-31",
    "gregorian_year": 1635
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "崇禎八年五月內，遂將若愚改從而加功者絞之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "刘若愚自述冤苦。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ006",
   "subject": "event:guangning_fall",
   "predicate": "熊廷弼之死源于阉党私怨",
   "value_text": "阉党冯铨因坊间小说《辽东传》'冯布政父子奔逃'情节羞愤，借讲筵奏请诛熊廷弼，非纯军事失败",
   "time": {
    "era_text": "天启五年",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "其害經略熊廷弼者，因書坊賣《遼東傳》，其四十八回內有《馮布政父子奔逃》一節，極恥而恨之，令妖弁蔣應暘發其事於講筵，以此傳出袖中而奏。致熊正法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "county",
   "note": "内臣刘若愚直指熊廷弼之死源于阉党冯铨个人私怨（小说情节羞辱），是明朝内派系倾轧致封疆大吏被杀的典型，印证'派系因自身利益润色夸张'。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ007",
   "subject": "person:yang_lian",
   "predicate": "弹魏忠贤二十四罪",
   "value_text": "天启四年五月杨涟上疏参魏忠贤二十四罪，阉党由此反扑",
   "time": {
    "era_text": "天启四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "五月二十九日，憲臣楊漣參逆賢二十四罪之疏上矣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "东林杨涟弹阉党首领，引发阉党大狱，杨涟死于诏狱。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ008",
   "subject": "person:yang_lian",
   "predicate": "被列入阉党迫害名录",
   "value_text": "崔呈秀进《点将录》《天鉴录》列东林渠魁（叶向高、杨涟、左光斗等），阉党据此迫害",
   "time": {
    "era_text": "天启五年",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "崔呈秀密付逆賢之《天鑒錄》者，首列東林渠魁葉向高、韓爌、孫承宗、劉一燝、趙南星、楊漣、惠世揚、高攀龍、左光斗……《點將錄》者……大刀楊漣、智多星繆昌期等共三十六人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "阉党编纂名录系统性诬东林，杨涟被列为'大刀'。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "ZZ009",
   "subject": "person:wei_zhongxian",
   "predicate": "专政党附",
   "value_text": "魏忠贤专政，客氏、王体乾党附，矫旨杀内臣王安等",
   "time": {
    "era_text": "天启元年",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "guangning",
   "source": "zhuozhongzhi",
   "quote": "客氏造謀也。其母老矣……王體乾殺王太監安、王國臣等，皆客氏造謀也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "person",
   "note": "内臣视角记魏忠贤—客氏—王体乾阉党核心。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "明·内臣文献",
   "_faction": "nei_guan"
  },
  {
   "id": "MT_G01",
   "subject": "event:guangning_fall",
   "predicate": "西平堡陷落",
   "value_text": "天启二年正月，后金克西平堡，为广宁门户失守之始。",
   "quote": "丁巳，大清兵克西平堡。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "天启二年正月",
   "place": "guangning",
   "confidence": 0.85,
   "note": "西平堡为广宁外围要冲，其陷落直接动摇广宁。",
   "source": "mingtongjian",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_G02",
   "subject": "event:guangning_fall",
   "predicate": "经抚不和与门户",
   "value_text": "经抚不和：王化贞大言「愿得兵六万一举荡平」，首辅叶向高（其座主）右之，廷臣多右化贞；惟何乔远、江秉谦、周宗建等少数与熊廷弼合。熊廷弼疏言「经抚不和，恃有言官；言官交攻，恃有枢部；枢部佐斗，恃有阁臣」。",
   "quote": "王化贞屡出师辄引还……为熊廷弼所劾。而化贞奏辨，辄大言「愿得兵六万，一举荡平」……时首辅叶向高当国，化贞座主也，颇右之。廷臣惟太仆少卿何乔远、御史江秉谦、周宗建等与廷弼合，余皆右化贞。廷弼不能节制，复抗疏言：「……经、抚不和，恃有言官；言官交攻，恃有枢部；枢部佐斗，恃有阁臣……」",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "天启二年",
   "place": "guangning",
   "confidence": 0.85,
   "note": "明通鉴所载经抚不和，清楚暴露中枢（阁臣叶向高）、枢部（张鹤鸣）、言官、封疆间的门户对立——熊廷弼孤立，广宁速陷之根。",
   "source": "mingtongjian",
   "dims": [
    3,
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_G03",
   "subject": "event:guangning_fall",
   "predicate": "化贞弃城",
   "value_text": "广宁败，王化贞弃城走，遇熊廷弼于大凌河；廷弼笑曰「六万众一举荡平，竟如何？」，仍以所将五千人授化贞为殿，尽焚积聚，护难民入关。",
   "quote": "及化贞弃城走，廷弼遇之大凌河。化贞哭，廷弼微笑曰：「六万众一举荡平，竟如何？」化贞惭，议守宁远及前屯，廷弼曰：「嘻！已晚，惟护难民入关可耳。」乃以已所将五千人授化贞为殿，尽焚积聚……先后入关。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "天启二年正月",
   "place": "guangning",
   "confidence": 0.85,
   "note": "广宁溃败现场：经略与巡抚的最后一幕，亦是封疆大吏互卸责的缩影。",
   "source": "mingtongjian",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_G04",
   "subject": "event:guangning_fall",
   "predicate": "战后追责",
   "value_text": "广宁败后，逮王化贞，削熊廷弼职回籍听勘。",
   "quote": "己卯，逮王化贞，削熊廷弼职，回籍听勘。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "天启二年",
   "place": "guangning",
   "confidence": 0.8,
   "note": "经抚同败而处分各异，熊廷弼终因阉党构陷被诛（见酌中志 ZZ006），王化贞久系后亦死。",
   "source": "mingtongjian",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD001",
   "subject": "event:guangning_fall",
   "predicate": "攻城",
   "value_text": "布梯藋攻城，四面兵皆溃",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "乃布梯藋攻城，四面兵皆溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD002",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "罗一贯遇杀，陈尚仁、王崇信死之",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "一贯遂遇杀，都司陈尚仁、王崇信亦死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "考异指出《明史》本传作自刎，此处从《实录》书法",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD003",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "刘渠、祁秉忠、刘征、黑云鹤等死之",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "渠、秉忠及副将刘征、参将黑云鹤等皆死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD004",
   "subject": "person:sun_degong",
   "predicate": "叛降",
   "value_text": "得功有异志，大呼兵败先奔",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "得功有异志，大呼兵败，与参将鲍承先等先奔",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD005",
   "subject": "event:guangning_fall",
   "predicate": "城陷",
   "value_text": "化贞弃广宁，踉跄西走",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "遂弃广宁，踉跄西走",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD006",
   "subject": "event:guangning_fall",
   "predicate": "降附",
   "value_text": "远近四十余城守御皆率属降",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "远近四十余城守御宜皆率属降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD007",
   "subject": "person:xiong_tingbi",
   "predicate": "讥讽",
   "value_text": "六万众一举荡平，竟如何？",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "廷弼微笑曰：“六万众一举荡平，竟如何？”",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD008",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "高邦佐于杏山驿自经死",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "独邦佐否杏山驿自经死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD009",
   "subject": "event:guangning_fall",
   "predicate": "追击",
   "value_text": "大清兵乘胜追击五十里，至平阳桥",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "大清兵乘胜追击五十里，至平阳桥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD010",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "麻承宗于沙岭遇大清兵死之",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "副总兵麻承宗赴援，遇大清兵于沙岭，亦死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD011",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "顾颐力屈死之",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "辽海道左参政顾颐，力屈死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD012",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "value_text": "罗一贯死因有自刎与遇杀两说",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "guangning",
   "source": "mingtongjian",
   "quote": "按一贯生非自刎，而谕降不从，则其从容就义，非死于乱军之北也",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "《明史》本传作自刎，《三编》据《实录》改斩一贯，此处从遇杀",
   "lead": {
    "where": "罗一贯死因",
    "skills": [
     "史料考异",
     "明清史"
    ],
    "accept": "核实罗一贯死因，判定自刎或遇杀"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:xiongtingbing|主张",
   "subject": "person:xiongtingbing",
   "predicate": "主张",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX003",
    "SX005",
    "SX008"
   ]
  },
  {
   "id": "cf:event:guangning_fall|阵亡",
   "subject": "event:guangning_fall",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 5,
   "spread": null,
   "assertion_ids": [
    "GD002",
    "GD003",
    "GD008",
    "GD010",
    "GD011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "G010",
  "G011",
  "GD012"
 ],
 "events": [
  {
   "id": "guangning_founded",
   "subject": "event:guangning_founded",
   "year": 1392,
   "era": "洪武二十五年",
   "title": "广宁卫建置",
   "kind": "建置",
   "text": "明置广宁卫，隶辽东都司，为辽西重镇。"
  },
  {
   "id": "guangning_zhen",
   "subject": "event:guangning_zhen",
   "year": 1449,
   "era": "正统十四年",
   "title": "辽东镇移驻广宁",
   "kind": "行政",
   "text": "土木之变后辽东镇总兵移驻广宁，成为辽西军政中心。"
  },
  {
   "id": "guangning_fall",
   "subject": "event:guangning_fall",
   "year": 1622,
   "era": "天启二年正月",
   "title": "广宁陷落",
   "kind": "战事",
   "text": "沈阳辽阳既陷，明经略熊廷弼、巡抚王化贞经抚不和；努尔哈赤取广宁，王化贞弃城，孙得功降，熊廷弼护辽西百万难民入山海关。明尽失辽西。"
  }
 ],
 "edges": [
  {
   "from": "guangning",
   "to": "shenyang_cheng",
   "type": "admin",
   "label": "广宁—沈阳（辽西—辽东）"
  },
  {
   "from": "guangning",
   "to": "shanhaiguan",
   "type": "admin",
   "label": "广宁—山海关（辽西走廊）"
  }
 ],
 "faction_geo": {
  "donglin": {
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "geo_note": "东林以江南无锡东林书院为舆论中心（顾宪成、高攀龙），成员近三成出自南直隶，余布各省清流。",
   "points": [
    {
     "name": "无锡",
     "lon": 120.3,
     "lat": 31.57,
     "note": "顾宪成故里、东林书院所在，今江苏无锡",
     "resolved": true
    },
    {
     "name": "常州",
     "lon": 119.97,
     "lat": 31.81,
     "note": "吴中行故里，今江苏常州",
     "resolved": true
    },
    {
     "name": "苏州",
     "lon": null,
     "lat": null,
     "note": "",
     "resolved": false
    }
   ]
  },
  "eunuch": {
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "geo_note": "阉党依附魏忠贤（北直隶/河间）与客氏，核心是内廷宦官+北直隶依附官僚。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "赫图阿拉",
     "lon": 124.7,
     "lat": 41.6,
     "note": "后金/满洲发祥地，今辽宁新宾",
     "resolved": true
    }
   ]
  },
  "zhe_dang": {
   "name": "浙党",
   "color": "#B9770E",
   "geo_note": "浙党以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢。",
   "points": [
    {
     "name": "杭州",
     "lon": 120.15,
     "lat": 30.27,
     "note": "浙党核心，今浙江杭州",
     "resolved": true
    }
   ]
  },
  "chu_dang": {
   "name": "楚党",
   "color": "#CA6F1E",
   "geo_note": "楚党以楚籍官僚官应震、吴亮嗣为首，与浙党合攻东林。",
   "points": [
    {
     "name": "武昌",
     "lon": 114.3,
     "lat": 30.59,
     "note": "楚党核心，今湖北武汉",
     "resolved": true
    }
   ]
  },
  "qi_dang": {
   "name": "齐党",
   "color": "#B7950B",
   "geo_note": "齐党以齐籍官僚亓诗教、周永春为首，多居主兵中枢。",
   "points": [
    {
     "name": "济南",
     "lon": 117.0,
     "lat": 36.65,
     "note": "齐党核心，今山东济南",
     "resolved": true
    }
   ]
  },
  "xuan_kun": {
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "geo_note": "宣党（汤宾尹/宣城）与昆党（顾天埈/昆山）小集团，主要影响科举京察。",
   "points": [
    {
     "name": "宣城",
     "lon": 118.75,
     "lat": 30.94,
     "note": "宣党核心，今安徽宣城",
     "resolved": true
    },
    {
     "name": "昆山",
     "lon": 120.98,
     "lat": 31.39,
     "note": "昆党核心，今江苏昆山",
     "resolved": true
    }
   ]
  },
  "yan_shang": {
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "geo_note": "盐商/盐政利益以两淮（扬州）盐商及其利益相关官僚为主体。",
   "points": [
    {
     "name": "扬州",
     "lon": 119.41,
     "lat": 32.39,
     "note": "今江苏扬州",
     "resolved": true
    }
   ]
  },
  "nei_guan": {
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "geo_note": "内臣/宦官系统独立于阉党，监军镇守矿税监多出自内廷，北直隶为活动中心。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    }
   ]
  },
  "feng_jiang": {
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "geo_note": "封疆大吏/辽东经略系据辽东边镇（辽阳、沈阳），对败绩诿过、战功夸张。",
   "points": [
    {
     "name": "辽阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "唐安东都护府，今辽宁辽阳",
     "resolved": true
    },
    {
     "name": "沈阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "辽沈战役·沈阳解放",
     "resolved": true
    }
   ]
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        118.5,
        39.129
       ],
       [
        118.626,
        39.177
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
        121.375,
        39.0
       ],
       [
        121.674,
        39.0
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
        121.777,
        39.0
       ],
       [
        121.869,
        39.0
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
        124.43,
        39.853
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
        118.5,
        39.0
       ],
       [
        118.5,
        42.81
       ],
       [
        124.43,
        42.81
       ],
       [
        124.43,
        39.853
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
        121.869,
        39.0
       ],
       [
        121.777,
        39.0
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
        121.674,
        39.0
       ],
       [
        121.375,
        39.0
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
        118.626,
        39.177
       ],
       [
        118.5,
        39.129
       ],
       [
        118.5,
        39.0
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
         118.5,
         39.0
        ],
        [
         118.57,
         39.0
        ],
        [
         118.533,
         39.091
        ],
        [
         118.588,
         39.108
        ],
        [
         118.579,
         39.131
        ],
        [
         118.637,
         39.157
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
         118.742,
         41.324
        ],
        [
         118.677,
         41.35
        ],
        [
         118.63,
         41.347
        ],
        [
         118.528,
         41.355
        ],
        [
         118.5,
         41.35
        ],
        [
         118.5,
         39.0
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
        118.5,
        42.81
       ],
       [
        118.5,
        41.35
       ],
       [
        118.528,
        41.355
       ],
       [
        118.63,
        41.347
       ],
       [
        118.677,
        41.35
       ],
       [
        118.742,
        41.324
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
        122.359,
        42.81
       ],
       [
        122.577,
        42.81
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
        123.149,
        42.81
       ],
       [
        118.5,
        42.81
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
         124.43,
         40.146
        ],
        [
         124.43,
         42.81
        ],
        [
         123.149,
         42.81
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
         122.577,
         42.81
        ],
        [
         122.359,
         42.81
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
         121.327,
         39.0
        ],
        [
         121.669,
         39.0
        ],
        [
         121.671,
         39.01
        ],
        [
         121.732,
         39.0
        ],
        [
         121.739,
         39.0
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
         121.797,
         39.0
        ],
        [
         121.902,
         39.0
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
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.574,
       42.81
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
   }
  ],
  "lakes": [],
  "_bbox": [
   118.5,
   39.0,
   124.43,
   42.81
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
