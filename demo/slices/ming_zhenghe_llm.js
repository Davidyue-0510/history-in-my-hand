// 本文件由 tools/build.py 自动生成（切片 ming_zhenghe_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ming_zhenghe_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ming_zhenghe_llm"] = {
 "meta": {
  "kind": "exchange",
  "scale_tier": "strategic",
  "region": "jiangnan",
  "province": "jiangsu",
  "title": "郑和下西洋（LLM 抽取·人工校订）",
  "dossier_label": "郑和下西洋（LLM 抽取落库）",
  "subtitle": "永乐三年—宣德八年（1405–1433）· 明远洋",
  "primary_place": "liujiagang",
  "dossier_event": "ev_ming_zhenghe_llm_01",
  "vocab_pack": "inline:ming_zhenghe_llm",
  "terrain_grid": "china_coarse",
  "lead": "郑和下西洋（1405–1433）：永乐三年至宣德八年郑和七下西洋，率宝船百余艘、将士二万余，历占城、满剌加、锡兰、古里、忽鲁谟斯等三十余国，最远抵东非、红海，宣威通商、朝贡往来，为世界航海史空前壮举；后明清海禁，远洋终止。本切片为『真实 LLM 抽取（DeepSeek-chat）+ 人工校订落库』：LLM 依《明史·郑和传》概述抽取断言，curate 报 BLOCK 0，人工补控制层（明方 control 航线枢纽）与战略四维（inference）。引文全 paraphrase_unverified；来源《明史》为清张廷玉等官修，归『后世官修』；控制层『明方』。",
  "parties_note": "《明史·郑和传》为清张廷玉等官修，归『后世官修』；郑和为明廷使节，控制层『明方』。系统不裁决，只并列。",
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "subject_names": {
   "person:MIN__p01": "郑和",
   "person:MIN__p02": "明成祖",
   "person:MIN__p03": "明宣宗",
   "event:ev_ming_zhenghe_llm_01": "首下西洋",
   "event:ev_ming_zhenghe_llm_02": "七下西洋终",
   "place:zhancheng": "占城",
   "place:manlajia": "满剌加",
   "place:xilan": "锡兰",
   "place:guli": "古里",
   "place:hulumosi": "忽鲁谟斯",
   "place:dongfei": "东非",
   "place:honghai": "红海"
  },
  "epoch": "ming",
  "strategic": {
   "political_cohesion": {
    "from": [
     "society",
     "anchors"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "朝贡体系宣威海外，巩固明初国际地位"
   },
   "material_logistics": {
    "from": [
     "economy"
    ],
    "from_dims": [
     3
    ],
    "layer": "inference",
    "note": "宝船舰队跨洋补给，后勤规模空前"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "二万余将士远征，民力倾注"
   },
   "geopolitical_strategy": {
    "from": [
     "international"
    ],
    "from_dims": [
     6
    ],
    "layer": "inference",
    "note": "海上丝路拓展，然海禁后中断"
   }
  },
  "page": "county.html?scene=ming_zhenghe_llm",
  "key": "ming_zhenghe_llm",
  "scene_id": "ming_zhenghe_llm"
 },
 "sources": [
  {
   "id": "ming_zhenghe_src_llm",
   "title": "明史·郑和传（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "张廷玉等（清）",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zhancheng",
   "name": "占城",
   "type": "region",
   "modern": "今越南中南部",
   "note": "下西洋首站。坐标据地名志条目：占城，标 approx。",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.9,
   "lat": 15.9,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：占城（诚实回填 v0.221）。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "manlajia",
   "name": "满剌加",
   "type": "port",
   "modern": "今马来西亚马六甲",
   "note": "重要中转港",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "xilan",
   "name": "锡兰",
   "type": "region",
   "modern": "今斯里兰卡",
   "note": "途经国",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "guli",
   "name": "古里",
   "type": "port",
   "modern": "今印度卡利卡特",
   "note": "郑和碑记地",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "hulumosi",
   "name": "忽鲁谟斯",
   "type": "port",
   "modern": "今伊朗霍尔木兹",
   "note": "西洋远点",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "dongfei",
   "name": "东非",
   "type": "region",
   "modern": "今非洲东部",
   "note": "最远航区",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "honghai",
   "name": "红海",
   "type": "region",
   "modern": "今红海沿岸",
   "note": "最远航区",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "MIN__p01",
   "name": "郑和",
   "role": "明提督太监",
   "note": "七下西洋正使",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p02",
   "name": "明成祖",
   "role": "明皇帝",
   "note": "遣郑和下西洋",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p03",
   "name": "明宣宗",
   "role": "明皇帝",
   "note": "遣郑和最后一次下西洋",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "MIN_001",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "船队规模",
   "value_text": "宝船百余艘",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "zhancheng",
   "source": "ming_zhenghe_src_llm",
   "quote": "宝船百余艘",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宝船百余艘",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_002",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "兵力",
   "value_text": "将士二万余",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "zhancheng",
   "source": "ming_zhenghe_src_llm",
   "quote": "将士二万余",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "将士二万余",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_003",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "目的",
   "value_text": "宣威通商",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "宣威通商",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宣威通商",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_004",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "目的",
   "value_text": "朝贡往来",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "朝贡往来",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "朝贡往来",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_005",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "航程",
   "value_text": "历三十余国",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "hulumosi",
   "source": "ming_zhenghe_src_llm",
   "quote": "历三十余国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "历三十余国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_006",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "航程",
   "value_text": "最远抵东非红海",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "dongfei",
   "source": "ming_zhenghe_src_llm",
   "quote": "最远抵东非、红海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "最远抵东非、红海",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_007",
   "subject": "event:ev_ming_zhenghe_llm_02",
   "predicate": "终止原因",
   "value_text": "明清海禁",
   "time": {
    "era_text": "宣德八年",
    "start": "1433-01-01",
    "end": "1433-12-31",
    "gregorian_year": 1433
   },
   "place": "honghai",
   "source": "ming_zhenghe_src_llm",
   "quote": "后明清海禁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "后明清海禁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_008",
   "subject": "event:ev_ming_zhenghe_llm_02",
   "predicate": "终止原因",
   "value_text": "远洋终止",
   "time": {
    "era_text": "宣德八年",
    "start": "1433-01-01",
    "end": "1433-12-31",
    "gregorian_year": 1433
   },
   "place": "honghai",
   "source": "ming_zhenghe_src_llm",
   "quote": "远洋终止",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "远洋终止",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_009",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "历史评价",
   "value_text": "世界航海史空前壮举",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "世界航海史空前壮举",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世界航海史空前壮举",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_010",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "船队规模",
   "value_text": "宝船数有争议",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "zhancheng",
   "source": "ming_zhenghe_src_llm",
   "quote": "宝船百余艘",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "empire",
   "note": "史料记载不一",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宝船百余艘",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_011",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "航行次数",
   "value_text": "七下西洋",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "七下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "七下西洋",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_012",
   "subject": "event:ev_ming_zhenghe_llm_02",
   "predicate": "航行次数",
   "value_text": "实际次数存疑",
   "time": {
    "era_text": "宣德八年",
    "start": "1433-01-01",
    "end": "1433-12-31",
    "gregorian_year": 1433
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "七下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "明代档案",
    "skills": [
     "档案考据"
    ],
    "accept": "确认航行次数"
   },
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "七下西洋",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MZ_016",
   "subject": "ev_ming_zhenghe_llm_01",
   "predicate": "下西洋时间",
   "value_text": "永乐三年至宣德八年七下西洋（1405–1433）",
   "time": {
    "era_text": "永乐三年—宣德八年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "guli",
   "source": "ming_zhenghe_src_llm",
   "quote": "永乐三年命郑和率舟师下西洋，首尾凡七次",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "史载确凿年份，归 record",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_ming_zhenghe_llm_01|船队规模",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "船队规模",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "MIN_001",
    "MIN_010"
   ]
  },
  {
   "id": "cf:event:ev_ming_zhenghe_llm_01|目的",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "目的",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "MIN_003",
    "MIN_004"
   ]
  },
  {
   "id": "cf:event:ev_ming_zhenghe_llm_01|航程",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "predicate": "航程",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "MIN_005",
    "MIN_006"
   ]
  },
  {
   "id": "cf:event:ev_ming_zhenghe_llm_02|终止原因",
   "subject": "event:ev_ming_zhenghe_llm_02",
   "predicate": "终止原因",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "MIN_007",
    "MIN_008"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "MIN_012"
 ],
 "events": [
  {
   "id": "ev_ming_zhenghe_llm_01",
   "subject": "event:ev_ming_zhenghe_llm_01",
   "year": 1405,
   "era": "永乐三年",
   "title": "首下西洋",
   "kind": "外交",
   "text": "郑和率船队首航西洋",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ming_zhenghe_llm_02",
   "subject": "event:ev_ming_zhenghe_llm_02",
   "year": 1433,
   "era": "宣德八年",
   "title": "七下西洋终",
   "kind": "外交",
   "text": "郑和第七次下西洋返航",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "zhancheng",
   "to": "manlajia",
   "type": "military",
   "label": "船队西行",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "manlajia",
   "to": "xilan",
   "type": "military",
   "label": "船队西行",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "xilan",
   "to": "guli",
   "type": "military",
   "label": "船队西行",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "guli",
   "to": "hulumosi",
   "type": "military",
   "label": "船队西行",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "hulumosi",
   "to": "dongfei",
   "type": "military",
   "label": "远抵东非",
   "_source_idx": 0,
   "_source_name": "明史·郑和传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
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
   "后世官修"
  ],
  "party_bucket": {
   "后世官修": "后世官修"
  },
  "party_colors": {
   "后世官修": "#A0473A"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A"
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
        108.982,
        14.9
       ],
       [
        108.94,
        15.001
       ],
       [
        108.898,
        15.181
       ],
       [
        108.821,
        15.378
       ],
       [
        108.743,
        15.427
       ],
       [
        108.674,
        15.484
       ],
       [
        108.578,
        15.585
       ],
       [
        108.447,
        15.763
       ],
       [
        108.395,
        15.872
       ],
       [
        108.286,
        15.989
       ],
       [
        108.274,
        16.029
       ],
       [
        108.267,
        16.09
       ],
       [
        108.241,
        16.101
       ],
       [
        108.209,
        16.091
       ],
       [
        108.17,
        16.164
       ],
       [
        108.088,
        16.243
       ],
       [
        108.029,
        16.331
       ],
       [
        107.991,
        16.337
       ],
       [
        107.936,
        16.329
       ],
       [
        107.9,
        16.316
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
        107.9,
        14.9
       ],
       [
        107.9,
        16.9
       ],
       [
        107.9,
        16.9
       ],
       [
        107.9,
        16.316
       ],
       [
        107.936,
        16.329
       ],
       [
        107.991,
        16.337
       ],
       [
        108.029,
        16.331
       ],
       [
        108.088,
        16.243
       ],
       [
        108.17,
        16.164
       ],
       [
        108.209,
        16.091
       ],
       [
        108.241,
        16.101
       ],
       [
        108.267,
        16.09
       ],
       [
        108.274,
        16.029
       ],
       [
        108.286,
        15.989
       ],
       [
        108.395,
        15.872
       ],
       [
        108.447,
        15.763
       ],
       [
        108.578,
        15.585
       ],
       [
        108.674,
        15.484
       ],
       [
        108.743,
        15.427
       ],
       [
        108.821,
        15.378
       ],
       [
        108.898,
        15.181
       ],
       [
        108.94,
        15.001
       ],
       [
        108.982,
        14.9
       ],
       [
        107.9,
        14.9
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   107.9,
   14.9,
   109.9,
   16.9
  ]
 }
};
