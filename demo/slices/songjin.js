// 本文件由 tools/build.py 自动生成（切片 songjin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["songjin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["songjin"] = {
 "meta": {
  "terrain_grid": "china_coarse",
  "kind": "county",
  "region": "liaoxi",
  "title": "松锦之战",
  "dossier_label": "松锦之战",
  "subtitle": "崇祯十四—十五年 (1641–1642) · 明清辽东决战",
  "primary_place": "jinzhou",
  "dossier_event": "event:songjin_campaign",
  "back": "枢纽",
  "lead": "松锦之战是明清辽东决战：崇祯十三年（1640）清太宗围锦州，明蓟辽总督洪承畴会八镇兵十三万于宁远；十四年（1641）进援驻师松山；十五年（1642）松山城陷、洪承畴被执降清，祖大寿以锦州降。明在辽西的机动兵团至此丧尽，山海关外仅余宁远。",
  "parties_note": "松锦之败，明、清、现代三方侧重不同：明方记监军趣战、兵分夜溃；清方记围城下城、开门内应；现代综述重后勤断绝与庙堂促战。系统不裁决，只并列。",
  "subject_names": {
   "event:songjin_campaign": "松锦之战",
   "event:songjin_jiju": "清围锦州·洪承畴会八镇兵",
   "event:songjin_songshan": "洪承畴驻师松山",
   "event:songjin_songshan_fall": "松山城陷·洪承畴被执",
   "event:songjin_jinzhou_surrender": "祖大寿以锦州降",
   "place:jinzhou": "锦州",
   "place:songshan": "松山堡",
   "place:xingshan": "杏山",
   "place:tashan": "塔山",
   "place:dalinghe": "大凌河",
   "place:ningyuan": "宁远",
   "person:hong_chengchou": "洪承畴",
   "person:zu_dashou": "祖大寿",
   "person:huangtaiji": "皇太极",
   "person:duoergun": "多尔衮",
   "person:cao_bianjiao": "曹变蛟",
   "person:wang_tingchen": "王廷臣",
   "person:wang_pu": "王朴",
   "person:wu_sangui": "吴三桂",
   "person:qiu_minyang": "邱民仰",
   "person:xia_chengde": "夏成德",
   "person:zhang_ruoqi": "张若麒",
   "person:yang_guozhu": "杨国柱",
   "person:chen_xinja": "陈新甲"
  },
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
    "note": "松锦之战：朝堂凝聚力——王朴弃市"
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
    "note": "松锦之战：后勤物力——王朴弃市"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "松锦之战：人口动员——明“十三万”援军粮尽溃败；“祖大寿”锦州降清"
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
    "note": "松锦之战：地缘战略——王朴弃市"
   }
  },
  "province": "liaoning",
  "page": "county.html?scene=songjin",
  "key": "songjin",
  "scene_id": "songjin",
  "vocab_pack": "ming_qing"
 },
 "sources": [
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
   "lon": 121.12,
   "lat": 41.11,
   "type": "city",
   "modern": "辽宁锦州市",
   "note": "明锦州卫，辽西重镇，松锦之战围困核心；据地名表",
   "elev": 54
  },
  {
   "id": "songshan",
   "name": "松山堡",
   "lon": 121.1,
   "lat": 41.05,
   "type": "fortress",
   "modern": "辽宁锦州市松山新区",
   "note": "锦州城南，洪承畴立营被围处；坐标为实址近似",
   "elev": 44
  },
  {
   "id": "xingshan",
   "name": "杏山",
   "lon": 121.2,
   "lat": 41.0,
   "type": "fortress",
   "modern": "辽宁锦州市西南杏山",
   "note": "锦州西南隘口，明护饷兵败于笔架冈；坐标为实址近似",
   "elev": 21
  },
  {
   "id": "tashan",
   "name": "塔山",
   "lon": 121.25,
   "lat": 40.98,
   "type": "fortress",
   "modern": "辽宁葫芦岛市塔山乡",
   "note": "锦州西南、宁远东北，护饷兵败处；坐标为实址近似",
   "elev": 13
  },
  {
   "id": "dalinghe",
   "name": "大凌河",
   "lon": 121.35,
   "lat": 41.16,
   "type": "fortress",
   "modern": "辽宁凌海市大凌河镇",
   "note": "明大凌河所，锦州东北；1631 祖大寿曾据此降，后复据；坐标为实址近似",
   "elev": 38
  },
  {
   "id": "ningyuan",
   "name": "宁远",
   "lon": 120.75,
   "lat": 40.75,
   "type": "city",
   "modern": "辽宁兴城市",
   "note": "关宁锦防线核心，八镇兵初集于此",
   "elev": 44
  },
  {
   "id": "guangning",
   "name": "广宁",
   "lon": 121.78,
   "lat": 41.62,
   "type": "city",
   "modern": "辽宁北镇市",
   "note": "辽西军政旧中心，1622 已陷后金",
   "_global_id": "guangning",
   "_other_scenes": [
    "jinzhou",
    "liaoyang",
    "shenyang"
   ],
   "elev": 129
  },
  {
   "id": "liaoyang",
   "name": "辽阳",
   "lon": 123.17,
   "lat": 41.27,
   "type": "city",
   "modern": "辽宁辽阳市",
   "note": "辽东都司旧治，1621 已陷后金",
   "_global_id": "liaoyang_cheng",
   "_other_scenes": [
    "haizhou",
    "kaiyuan",
    "shenyang",
    "tieling"
   ],
   "elev": 46
  },
  {
   "id": "shenyang",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.8,
   "type": "city",
   "modern": "辽宁沈阳市",
   "note": "后金/清都城（盛京），1621 后金迁都于此",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "guangning",
    "haizhou",
    "kaiyuan",
    "liaoyang",
    "tieling"
   ],
   "elev": 43
  }
 ],
 "persons": [
  {
   "id": "hong_chengchou",
   "name": "洪承畴",
   "role": "蓟辽总督·兵部尚书",
   "note": "崇祯十四年督八镇兵援锦，松山城陷被执，降清",
   "faction": "feng_jiang",
   "influence": 1
  },
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "role": "锦州总兵",
   "note": "坚守锦州经年，松山陷后粮尽以城降清；吴三桂之舅",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ]
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "role": "清太宗",
   "note": "围锦州、亲统大军困松山，定松锦之局",
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
   "id": "duoergun",
   "name": "多尔衮",
   "role": "清睿亲王",
   "note": "清军主将之一，参与围锦、困松山",
   "influence": 0
  },
  {
   "id": "cao_bianjiao",
   "name": "曹变蛟",
   "role": "明总兵",
   "note": "松山北、乳峰山西立营；城陷力战死",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "wang_tingchen",
   "name": "王廷臣",
   "role": "明总兵",
   "note": "八镇之一；松山城陷死之",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "wang_pu",
   "name": "王朴",
   "role": "明大同总兵",
   "note": "八镇之一；松锦之夜率先溃遁",
   "faction": "feng_jiang",
   "influence": 1
  },
  {
   "id": "wu_sangui",
   "name": "吴三桂",
   "role": "明宁远总兵",
   "note": "八镇之一；松锦后独守宁远，1644 引清入关",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "qiu_minyang",
   "name": "邱民仰",
   "role": "辽东巡抚",
   "note": "随洪承畴督师，松山城陷死之",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "xia_chengde",
   "name": "夏成德",
   "role": "明松山副将",
   "note": "遣子为质约为内应，开门献松山",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "zhang_ruoqi",
   "name": "张若麒",
   "role": "职方郎中",
   "note": "监军趣进兵，松山溃后从海逃还",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "yang_guozhu",
   "name": "杨国柱",
   "role": "明宣府总兵",
   "note": "八镇之一；崇祯十四年八月陷伏战死",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "chen_xinja",
   "name": "陈新甲",
   "role": "兵部尚书",
   "note": "力主分进速战，贻书趣洪承畴进兵",
   "faction": "feng_jiang",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SJ001",
   "subject": "event:songjin_campaign",
   "predicate": "集兵",
   "value_text": "八总兵军十三万，马四万，并集宁远",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "合曹变蛟、白广恩、马科、吴三桂、王廷臣八总兵军十三万，马四万，并集宁远",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明军总兵力及集结地",
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
   "id": "SJ002",
   "subject": "event:songjin_campaign",
   "predicate": "分兵",
   "value_text": "分四道进兵",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "尚书陈新甲请分四道进兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "陈新甲主张分兵，洪承畴反对",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ003",
   "subject": "event:songjin_campaign",
   "predicate": "进兵",
   "value_text": "洪承畴援锦州，驻师松山",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "壬寅，洪承畴援锦州...是日，驻师松山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
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
   "id": "SJ004",
   "subject": "event:songjin_songshan",
   "predicate": "阵亡",
   "value_text": "杨国柱败绩，死之",
   "time": {
    "era_text": "崇祯十四年八月",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "qingshigao",
   "quote": "八月，乙巳，宣府总兵官杨国柱败绩，死之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SJ005",
   "subject": "event:songjin_campaign",
   "predicate": "溃败",
   "value_text": "诸镇兵皆溃，失亡五万余人",
   "time": {
    "era_text": "崇祯十四年八月",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "诸镇兵皆溃...先后失亡五万余人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明军溃败及损失",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ006",
   "subject": "event:songjin_songshan_fall",
   "predicate": "城破",
   "value_text": "大清兵克松山",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "mingshi",
   "quote": "戊午，大清兵克松山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "夏成德内应",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SJ007",
   "subject": "event:songjin_songshan_fall",
   "predicate": "被执",
   "value_text": "承畴及祖大乐被执",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "承畴及祖大乐被执",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ008",
   "subject": "person:hong_chengchou",
   "predicate": "降清",
   "value_text": "承畴遂降于大清",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "承畴遂降于大清",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ009",
   "subject": "event:songjin_jinzhou_surrender",
   "predicate": "降清",
   "value_text": "祖大寿以锦州降于大清",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "jinzhou",
   "source": "qingshigao",
   "quote": "己卯，祖大寿以锦州降于大清",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "粮尽人相食",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SJ010",
   "subject": "person:wang_pu",
   "predicate": "弃市",
   "value_text": "王朴弃市",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "丁亥，王朴弃市",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "因先逃被斩",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ011",
   "subject": "person:chen_xinja",
   "predicate": "下狱",
   "value_text": "下陈新甲于狱",
   "time": {
    "era_text": "崇祯十五年",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "丁卯，下陈新甲于狱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "因松锦之失被劾",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ012",
   "subject": "event:songjin_campaign",
   "predicate": "兵力对比",
   "value_text": "明军十三万，失亡五万余",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "承畴所统士卒十三万，先后失亡五万余人",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "由原文数据推出，明军损失惨重",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SJ013",
   "subject": "event:songjin_jiju",
   "predicate": "清围锦州·洪承畴会八镇兵",
   "value_text": "崇祯十三年秋（1640）清兵围锦州；次年（1641）蓟辽总督洪承畴会八镇兵十三万、马四万于宁远，进援辽东。",
   "time": {
    "era_text": "崇祯十三年至十四年",
    "start": "1640-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "蓟辽总督洪承畴会八镇兵于宁远。去年秋，大清兵围锦州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明军总兵力集结与清围锦州之开局",
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
   "id": "SJ014",
   "subject": "event:songjin_campaign",
   "predicate": "败因主流说",
   "value_text": "学界主流：松锦之败主因明廷中枢促战、粮道断绝与监军掣肘，非单纯兵力不敌；清方凭围城打援耗尽明军辽西机动兵团。",
   "time": {
    "era_text": "崇祯十四至十五年",
    "start": "1641-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "modern",
   "quote": "松锦一役，明之精锐尽丧，辽西遂不可为。",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.88,
   "scale": "province",
   "note": "亦有观点强调明长期被动据城、丧失野战主动权，防线本质是消耗。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SJ015",
   "subject": "event:songjin_songshan_fall",
   "predicate": "城内接应细节",
   "value_text": "松山城陷、夏成德内应的具体经过与各方兵力部署，明、清、现代三方记载详略与侧重不一，未见统一核定。",
   "time": {
    "era_text": "崇祯十五年二月",
    "start": "1642-01-01",
    "end": "1642-12-31",
    "gregorian_year": 1642
   },
   "place": "songshan",
   "source": "mingtongjian",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "夏成德内应开门之细节，三方叙事侧重不同",
   "lead": {
    "where": "《明史·流贼·洪承畴传》/《清太宗实录》崇德七年/《明通鉴》卷九十二/现代研究（李光涛、孙文良等松锦考）",
    "skills": [
     "古文",
     "史料考异"
    ],
    "accept": "整理松山城陷与夏成德内应的各家记载，标出史料政治立场影响",
    "effort": "2-3 周"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "dist": {
    "type": "degenerate"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SONGJIN_THK1",
   "subject": "event:songjin_campaign",
   "predicate": "炮兵坚城",
   "value_text": "明“凭坚城用大炮”（红夷炮）守锦州；清“围点打援”破洪承畴",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "",
   "source": "mingshi",
   "quote": "围点打援",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "炮兵坚城",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SONGJIN_THK2",
   "subject": "event:songjin_campaign",
   "predicate": "兵力崩溃",
   "value_text": "明“十三万”援军粮尽溃败；“祖大寿”锦州降清",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "",
   "source": "mingshi",
   "quote": "十三万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "兵力崩溃",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SONGJIN_THK3",
   "subject": "event:songjin_campaign",
   "predicate": "战略转折",
   "value_text": "“取关外以屏关内”的战略转折；松锦败后明疆防门户洞开",
   "time": {
    "era_text": "崇祯十四年",
    "start": "1641-01-01",
    "end": "1641-12-31",
    "gregorian_year": 1641
   },
   "place": "",
   "source": "mingshi",
   "quote": "取关外",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "战略转折",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SJ015"
 ],
 "events": [
  {
   "id": "songjin_campaign",
   "subject": "event:songjin_campaign",
   "year": 1641,
   "era": "崇祯十四年至十五年",
   "title": "松锦之战",
   "kind": "战事",
   "text": "明清辽东决战。崇祯十三年（1640）清太宗围锦州，明蓟辽总督洪承畴会八镇兵十三万于宁远；十四年（1641）洪承畴进援，驻师松山；十五年（1642）松山城陷、洪承畴被执降清，祖大寿以锦州降。明在辽西的机动兵团至此丧尽。"
  },
  {
   "id": "songjin_jiju",
   "subject": "event:songjin_jiju",
   "year": 1640,
   "era": "崇祯十三年",
   "title": "清围锦州·洪承畴会八镇兵",
   "kind": "战事",
   "text": "崇祯十三年，大清兵围锦州，克城西九台，扼松、杏援师之路。蓟辽总督洪承畴会宣府杨国柱、大同王朴、密云唐通、曹变蛟、白广恩、马科、吴三桂、王廷臣八总兵，军十三万、马四万，并集宁远。"
  },
  {
   "id": "songjin_songshan",
   "subject": "event:songjin_songshan",
   "year": 1641,
   "era": "崇祯十四年七月",
   "title": "洪承畴驻师松山",
   "kind": "战事",
   "text": "崇祯十四年七月壬寅，洪承畴以兵部尚书陈新甲、职方郎中张若麒趣进兵，不得已统兵救锦，驻师松山；分营松山东、西、北三面，曹变蛟营松山北、乳峰山西，环以长濠，为久拒计。"
  },
  {
   "id": "songjin_songshan_fall",
   "subject": "event:songjin_songshan_fall",
   "year": 1642,
   "era": "崇祯十五年二月戊午",
   "title": "松山城陷·洪承畴被执",
   "kind": "战事",
   "text": "崇祯十五年二月戊午，松山副将夏成德遣子为质约为内应，清兵至期攻之，城遂下。巡抚邱民仰、总兵曹变蛟、王廷臣、兵备道张斗等皆死之；洪承畴及祖大乐被执，承畴遂降于大清。"
  },
  {
   "id": "songjin_jinzhou_surrender",
   "subject": "event:songjin_jinzhou_surrender",
   "year": 1642,
   "era": "崇祯十五年二月己卯",
   "title": "祖大寿以锦州降",
   "kind": "战事",
   "text": "松山既下，宁远关门劲旅溃丧，锦州城中粮亦尽，人相食。总兵祖大寿战守计穷，遣人投军门乞降，大清遂下锦州。"
  }
 ],
 "edges": [
  {
   "from": "jinzhou",
   "to": "ningyuan",
   "type": "admin",
   "label": "锦州—宁远（关宁锦防线）"
  },
  {
   "from": "jinzhou",
   "to": "guangning",
   "type": "admin",
   "label": "锦州—广宁（辽西）"
  },
  {
   "from": "songshan",
   "to": "jinzhou",
   "type": "admin",
   "label": "松山—锦州（围城与援营）"
  },
  {
   "from": "xingshan",
   "to": "jinzhou",
   "type": "admin",
   "label": "杏山—锦州（护饷隘口）"
  },
  {
   "from": "tashan",
   "to": "ningyuan",
   "type": "admin",
   "label": "塔山—宁远（护饷兵败）"
  },
  {
   "from": "liaoyang",
   "to": "shenyang",
   "type": "admin",
   "label": "辽阳—沈阳（后金/清腹地）"
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
        119.75,
        39.955
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
        121.477,
        39.75
       ],
       [
        123.32,
        39.75
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
        119.75,
        39.75
       ],
       [
        119.75,
        42.8
       ],
       [
        124.43,
        42.8
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
        123.32,
        39.75
       ],
       [
        121.477,
        39.75
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
        119.75,
        39.955
       ],
       [
        119.75,
        39.75
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
         119.75,
         39.945
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
         119.75,
         40.096
        ],
        [
         119.75,
         40.122
        ],
        [
         119.761,
         40.136
        ],
        [
         119.75,
         40.188
        ],
        [
         119.75,
         39.945
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
        119.75,
        42.8
       ],
       [
        119.75,
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
        122.363,
        42.8
       ],
       [
        122.579,
        42.8
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
        123.116,
        42.8
       ],
       [
        119.75,
        42.8
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
         124.144,
         39.75
        ],
        [
         124.152,
         39.75
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
         42.8
        ],
        [
         123.116,
         42.8
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
         122.579,
         42.8
        ],
        [
         122.363,
         42.8
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
         119.75,
         42.212
        ],
        [
         119.75,
         40.188
        ],
        [
         119.761,
         40.136
        ],
        [
         119.75,
         40.122
        ],
        [
         119.75,
         40.096
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
         121.464,
         39.75
        ],
        [
         123.274,
         39.75
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
         123.358,
         39.75
        ],
        [
         123.483,
         39.75
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
         123.738,
         39.75
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
         123.718,
         39.75
        ],
        [
         123.738,
         39.75
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
       123.573,
       42.8
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
   119.75,
   39.75,
   124.43,
   42.8
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
