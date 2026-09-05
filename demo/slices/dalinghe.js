// 本文件由 tools/build.py 自动生成（切片 dalinghe），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dalinghe"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dalinghe"] = {
 "meta": {
  "terrain_grid": "china_coarse",
  "kind": "county",
  "region": "liaoxi",
  "title": "大凌河之战",
  "dossier_label": "大凌河之战",
  "subtitle": "崇祯四年 (1631) · 祖大寿首次降清",
  "primary_place": "dalinghe",
  "dossier_event": "event:dalinghe_campaign",
  "back": "枢纽",
  "lead": "大凌河之战（崇祯四年，1631）是明在辽西筑城渐进战略的受挫：辽东巡抚邱禾嘉、督师孙承宗议筑大凌河城，城未竟而清兵围之；援军长山、小凌河之战大败，张春等被执；城中粮尽，祖大寿杀副将何可纲降清，寻脱归锦州。此为祖大寿首次降清，明末辽西防御自此更形被动。",
  "parties_note": "大凌河之败，明、清、现代三方侧重不同：明方记筑城受挫、援军溃败与祖大寿权变；清方记围城下城、劝降成功；现代综述重庙堂筑城之议的仓促与粮道之失。系统不裁决，只并列。",
  "subject_names": {
   "event:dalinghe_campaign": "大凌河之战",
   "event:dalinghe_build": "筑大凌河城",
   "event:dalinghe_siege": "清兵围大凌城",
   "event:dalinghe_changshan": "长山·小凌河之战",
   "event:dalinghe_kegang": "祖大寿杀何可纲降清",
   "event:dalinghe_dazuo_return": "祖大寿脱归锦州",
   "place:dalinghe": "大凌河",
   "place:jinzhou": "锦州",
   "place:xiaolinghe": "小凌河",
   "place:changshan": "长山",
   "place:youtun": "右屯",
   "place:yizhou": "义州",
   "place:ningyuan": "宁远",
   "place:shanhaiguan": "山海关",
   "person:zu_dashou": "祖大寿",
   "person:he_kegang": "何可纲",
   "person:zhang_chun": "张春",
   "person:qiu_hejia": "邱禾嘉",
   "person:wu_xiang": "吴襄",
   "person:song_wei": "宋伟",
   "person:sun_chengzong": "孙承宗",
   "person:liang_tingdong": "梁廷栋",
   "person:fang_jina": "方吉纳"
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
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）"
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
    "note": "技术↔生产力；赋税/漕运→后勤半径（R7）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；流民→动员潜力"
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
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "province": "liaoning",
  "page": "county.html?scene=dalinghe",
  "key": "dalinghe",
  "scene_id": "dalinghe",
  "vocab_pack": "ming_qing"
 },
 "sources": [
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "juan": "卷八十六（崇祯三年—四年·大凌河）",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），综合实录奏议并附考异",
   "party": "二手综述",
   "color": "#6C7A89",
   "note": "夏燮私修明编年，大凌河叙事采实录与清方记载并附考异，平允但属后世综合。",
   "faction": null,
   "period": "晚清",
   "availability": "fetched",
   "url": "https://zh.wikisource.org/wiki/%E6%98%8E%E9%80%9A%E9%91%91",
   "cached_text": "已抓卷086 大凌河叙事原文到 .tmp/mingtongjian_086.txt。"
  },
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百四十八·张春传／卷二百七十一·祖大寿传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，记大凌河筑城、长山之败、祖大寿杀何可纲降清，偏清方视角。"
  },
  {
   "id": "modern",
   "title": "现代明史学界综论",
   "juan": "综合研究（李光涛、孙文良等明清战争论述）",
   "compiler": "学界综论",
   "compiled_year": 2000,
   "stance_label": "现代学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "party": "学界",
   "color": "#3C78D8",
   "note": "现代明清史学界对大凌河之战的归因与战略评估。",
   "faction": null,
   "period": "现代",
   "availability": "synthesis",
   "url": "",
   "cached_text": ""
  }
 ],
 "places": [
  {
   "id": "dalinghe",
   "name": "大凌河",
   "lon": 121.35,
   "lat": 41.16,
   "type": "fortress",
   "modern": "辽宁凌海市大凌河镇",
   "note": "明大凌河所，1631 祖大寿据此降清",
   "elev": 38
  },
  {
   "id": "jinzhou",
   "name": "锦州",
   "lon": 121.12,
   "lat": 41.11,
   "type": "city",
   "modern": "辽宁锦州市",
   "note": "辽西重镇，大凌河西南",
   "elev": 54
  },
  {
   "id": "xiaolinghe",
   "name": "小凌河",
   "lon": 121.1,
   "lat": 41.1,
   "type": "river",
   "modern": "辽宁锦州南小凌河",
   "note": "张春筑垒处，长山在其南",
   "elev": 55
  },
  {
   "id": "changshan",
   "name": "长山",
   "lon": 121.2,
   "lat": 41.2,
   "type": "hill",
   "modern": "辽宁锦州东长山",
   "note": "张春援军列营处，距大凌城十五里",
   "elev": 66
  },
  {
   "id": "youtun",
   "name": "右屯",
   "lon": 121.5,
   "lat": 41.2,
   "type": "fortress",
   "modern": "辽宁凌海右卫",
   "note": "邱禾嘉议筑三城之一",
   "elev": 18
  },
  {
   "id": "yizhou",
   "name": "义州",
   "lon": 121.3,
   "lat": 41.5,
   "type": "city",
   "modern": "辽宁义县",
   "note": "邱禾嘉议筑三城之一",
   "elev": 42
  },
  {
   "id": "ningyuan",
   "name": "宁远",
   "lon": 120.75,
   "lat": 40.75,
   "type": "city",
   "modern": "辽宁兴城市",
   "note": "关宁锦防线核心",
   "elev": 44
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.77,
   "lat": 39.97,
   "type": "fortress",
   "modern": "河北秦皇岛山海关",
   "note": "孙承宗督师镇守",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "guangning",
    "jinzhou",
    "ningyuan"
   ],
   "elev": 8
  }
 ],
 "persons": [
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "side": "ming",
   "role": "总兵",
   "note": "辽西明军主将，大凌河首次降清，松锦再降。",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou",
    "ningyuan"
   ]
  },
  {
   "id": "he_kegang",
   "name": "何可纲",
   "side": "ming",
   "role": "副将",
   "note": "祖大寿副将，大凌河粮尽时不肯降，被大寿所杀，含笑而死。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "zhang_chun",
   "name": "张春",
   "side": "ming",
   "role": "太仆少卿",
   "note": "监军援大凌，长山战败被执，清太宗谕降不从。",
   "faction": "feng_jiang",
   "influence": 1
  },
  {
   "id": "qiu_hejia",
   "name": "邱禾嘉",
   "side": "ming",
   "role": "辽东巡抚",
   "note": "倡议筑大凌河等城，援大凌败于长山。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "wu_xiang",
   "name": "吴襄",
   "side": "ming",
   "role": "山海总兵",
   "note": "吴三桂父，从张春援大凌，长山之败先遁。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "song_wei",
   "name": "宋伟",
   "side": "ming",
   "role": "总兵",
   "note": "从张春援大凌，长山力战不支而走。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "sun_chengzong",
   "name": "孙承宗",
   "side": "ming",
   "role": "督师",
   "note": "前督师，议筑城渐进复辽，时镇山海关。",
   "faction": "donglin",
   "influence": 0
  },
  {
   "id": "liang_tingdong",
   "name": "梁廷栋",
   "side": "ming",
   "role": "兵部尚书",
   "note": "力主筑大凌河城，旋罢，廷议撤班军。",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "fang_jina",
   "name": "方吉纳",
   "side": "qing",
   "role": "清使",
   "note": "清方议和使者，大凌河围城期间与明议和。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DLH001",
   "subject": "event:dalinghe_build",
   "predicate": "兴工",
   "value_text": "七月兴工筑大凌河城",
   "time": {
    "era_text": "崇祯四年七月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingshi",
   "quote": "遂以七月兴工，命总兵祖大寿、副将何可纲以兵四千据其地，发班军万四千人筑之，护以石砫土兵万人。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "筑城兵力：祖大寿、何可纲兵四千，班军一万四千，石砫土兵一万。",
   "dims": [
    1,
    2,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH002",
   "subject": "event:dalinghe_siege",
   "predicate": "围城",
   "value_text": "大清兵掘濠树栅四面围合",
   "time": {
    "era_text": "崇祯四年八月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingshi",
   "quote": "乃发兵薄大凌城，掘濠树栅，四面围合",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH003",
   "subject": "event:dalinghe_changshan",
   "predicate": "战败",
   "value_text": "邱禾嘉、吴襄、宋伟援军败绩于长山",
   "time": {
    "era_text": "崇祯四年八月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "changshan",
   "source": "mingshi",
   "quote": "辽东巡抚邱禾嘉，山海总兵官吴襄、宋伟援大凌，败绩于长山。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "战场在长山、小凌河间。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH004",
   "subject": "event:dalinghe_changshan",
   "predicate": "战败",
   "value_text": "张春监吴襄、宋伟军，进次长山，距城十五里",
   "time": {
    "era_text": "崇祯四年九月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "changshan",
   "source": "mingtongjian",
   "quote": "太仆少卿张春复监襄、伟军，过小凌河五里，筑垒列车营，为大凌河声援，进次长山，距城十五里。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "张春军为声援，未直接入城。",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH005",
   "subject": "event:dalinghe_kegang",
   "predicate": "被杀",
   "value_text": "祖大寿杀何可纲降清",
   "time": {
    "era_text": "崇祯四年十月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingshi",
   "quote": "戊辰，祖大寿杀副总兵何可纲，降于大清。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "何可纲不从降，被祖大寿令人掖出城外杀之。",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH006",
   "subject": "event:dalinghe_dazuo_return",
   "predicate": "归锦州",
   "value_text": "祖大寿脱归入锦州",
   "time": {
    "era_text": "崇祯四年十月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "jinzhou",
   "source": "mingshi",
   "quote": "已巳，大寿脱归，入锦州。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "大寿言妻子在锦州，请归设计诱守者降。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH007",
   "subject": "person:zhang_chun",
   "predicate": "被执不屈死",
   "value_text": "张春被执不屈死",
   "time": {
    "era_text": "崇祯四年九月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "changshan",
   "source": "mingtongjian",
   "quote": "太仆少卿张春被执，不屈死。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "张春被执在九月。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH008",
   "subject": "event:dalinghe_campaign",
   "predicate": "起因",
   "value_text": "筑城召衅，大清发兵",
   "time": {
    "era_text": "崇祯四年",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingshi",
   "quote": "时大清以方吉纳等议和，方欲遣使定约，闻大寿等兴城工为拒守计，乃发兵薄大凌城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "筑城为大清出兵的直接原因。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "DLH009",
   "subject": "event:dalinghe_campaign",
   "predicate": "结果",
   "value_text": "大凌城陷，祖大寿降后归锦州",
   "time": {
    "era_text": "崇祯四年十月",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingtongjian",
   "quote": "大寿既杀可纲，遂与副将张存仁等投降。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "城破粮尽，食人马。",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH010",
   "subject": "event:dalinghe_campaign",
   "predicate": "影响",
   "value_text": "孙承宗罢官",
   "time": {
    "era_text": "崇祯四年",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "",
   "source": "mingtongjian",
   "quote": "长山之败，廷臣交章论承宗；及邱禾嘉筑城召衅，承宗遂引病归",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "承宗因长山之败及筑城召衅被论，引病归。",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH011",
   "subject": "event:dalinghe_campaign",
   "predicate": "争议",
   "value_text": "筑城决策争议",
   "time": {
    "era_text": "崇祯四年",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "mingtongjian",
   "quote": "辽东巡抚邱禾嘉议筑广宁、义州、右屯三城，督师孙承宗谓“广宁道远，当先据右屯，筑城大凌河，以渐而进”，兵部尚书梁廷栋力主之。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "邱禾嘉与孙承宗筑城方案不同，梁廷栋支持承宗。",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH012",
   "subject": "event:dalinghe_campaign",
   "predicate": "争议",
   "value_text": "长山之败日期记载不一",
   "time": {
    "era_text": "崇祯四年",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "changshan",
   "source": "mingtongjian",
   "quote": "《三编》系之八月，据大清兵入大凌城连记也。《史稿》则书长山之败于八月戊辰。",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "《三编》与《史稿》对长山之败日期记载不同。",
   "lead": {
    "where": "mingtongjian 考异",
    "skills": [
     "史料考据",
     "日期比对"
    ],
    "accept": "考证长山之败的具体日期，并说明《三编》与《史稿》记载差异的原因。"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "DLH013",
   "subject": "event:dalinghe_campaign",
   "predicate": "败因主流说",
   "value_text": "学界主流：大凌河之败主因庙堂筑城之议仓促、班军撤守反复与援军溃败，非单纯兵力不敌；清方凭围城断粮逼降，祖大寿权变脱归，暴露明辽西防御的脆弱。",
   "time": {
    "era_text": "崇祯四年",
    "start": "1631-01-01",
    "end": "1631-12-31",
    "gregorian_year": 1631
   },
   "place": "dalinghe",
   "source": "modern",
   "quote": "大凌一筑而围，援绝粮尽，辽西之局遂坏。",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.88,
   "scale": "province",
   "note": "亦有观点强调筑城渐进本为稳健之策，惜朝廷中枢摇摆、任将非人，致前功尽弃。",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:dalinghe_changshan|战败",
   "subject": "event:dalinghe_changshan",
   "predicate": "战败",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "DLH003",
    "DLH004"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "DLH012"
 ],
 "events": [
  {
   "id": "dalinghe_campaign",
   "subject": "event:dalinghe_campaign",
   "year": 1631,
   "era": "崇祯四年至五年",
   "title": "大凌河之战",
   "kind": "战事",
   "text": "明崇祯四年（1631），辽东巡抚邱禾嘉、督师孙承宗议筑大凌河城以渐复辽西；城未竟而清兵围之。明援军长山、小凌河之战大败，张春等被执；城中粮尽，祖大寿杀副将何可纲降清，寻脱归锦州。此为祖大寿首次降清，明在辽西的筑城推进受挫。"
  },
  {
   "id": "dalinghe_build",
   "subject": "event:dalinghe_build",
   "year": 1631,
   "era": "崇祯四年七月",
   "title": "筑大凌河城",
   "kind": "战事",
   "text": "崇祯四年七月，辽东巡抚邱禾嘉、总兵祖大寿、副将何可纲率班军万四千人筑大凌河城，护以石砫土兵万人；工垂成而兵部尚书梁廷栋罢，廷议以「大凌荒远」撤班军，留万人守。"
  },
  {
   "id": "dalinghe_siege",
   "subject": "event:dalinghe_siege",
   "year": 1631,
   "era": "崇祯四年",
   "title": "清兵围大凌城",
   "kind": "战事",
   "text": "大凌河城未竣，大清兵围之；明援军屡出战不利，城中粮道渐绝。"
  },
  {
   "id": "dalinghe_changshan",
   "subject": "event:dalinghe_changshan",
   "year": 1631,
   "era": "崇祯四年九月",
   "title": "长山·小凌河之战 张春败",
   "kind": "战事",
   "text": "崇祯四年九月，太仆少卿张春监吴襄、宋伟军援大凌，过小凌河五里筑垒，进次长山；与大清兵战，火器竞发，春军大败，春及诸将三十三人被执。"
  },
  {
   "id": "dalinghe_kegang",
   "subject": "event:dalinghe_kegang",
   "year": 1631,
   "era": "崇祯四年十月",
   "title": "祖大寿杀何可纲降清",
   "kind": "战事",
   "text": "大凌城粮尽，人相食；祖大寿及诸将欲降，副将何可纲不从，大寿令杀之，可纲含笑而死。大寿遂降于大清，已而脱归锦州。"
  },
  {
   "id": "dalinghe_dazuo_return",
   "subject": "event:dalinghe_dazuo_return",
   "year": 1631,
   "era": "崇祯四年十月",
   "title": "祖大寿脱归锦州",
   "kind": "战事",
   "text": "祖大寿降清后，旋脱身归锦州；此后明廷未深究，仍使守辽西，直至松锦之败再降。"
  }
 ],
 "edges": [],
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
        118.77,
        39.163
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
        121.291,
        38.97
       ],
       [
        121.647,
        38.97
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
        122.5,
        39.443
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
        118.77,
        38.97
       ],
       [
        118.77,
        42.5
       ],
       [
        122.5,
        42.5
       ],
       [
        122.5,
        39.443
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
        121.647,
        38.97
       ],
       [
        121.291,
        38.97
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
        118.77,
        39.163
       ],
       [
        118.77,
        38.97
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
         118.77,
         39.135
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
         118.77,
         41.353
        ],
        [
         118.77,
         39.135
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
        118.77,
        42.5
       ],
       [
        118.77,
        41.353
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
        121.587,
        42.5
       ],
       [
        121.605,
        42.5
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
        121.776,
        42.5
       ],
       [
        118.77,
        42.5
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
         122.5,
         42.5
        ],
        [
         121.776,
         42.5
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
         121.605,
         42.5
        ],
        [
         121.587,
         42.5
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
         121.275,
         38.972
        ],
        [
         121.271,
         38.97
        ],
        [
         121.663,
         38.97
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
         121.805,
         38.971
        ],
        [
         121.807,
         38.97
        ],
        [
         121.921,
         38.97
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
         122.5,
         39.411
        ],
        [
         122.5,
         42.5
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
       122.5,
       41.24
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
   118.77,
   38.97,
   122.5,
   42.5
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
