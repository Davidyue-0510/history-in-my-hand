// 本文件由 tools/build.py 自动生成（切片 song_yancheng_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["song_yancheng_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["song_yancheng_llm"] = {
 "meta": {
  "kind": "battle",
  "scale_tier": "operational",
  "region": "huabei",
  "province": null,
  "title": "郾城之战（岳飞北伐）（LLM 抽取·人工校订）",
  "dossier_label": "郾城之战（岳飞北伐）（LLM 抽取落库）",
  "subtitle": "绍兴十年（1140）· 宋（岳飞） vs 金（兀术）",
  "primary_place": "yancheng",
  "dossier_event": "ev_song_yancheng_llm_01",
  "vocab_pack": "inline:song_yancheng_llm",
  "terrain_grid": "china_coarse",
  "lead": "郾城之战（1140）：南宋绍兴十年岳飞北伐，于郾城以背嵬军、游奕马军大破金兀术拐子马（铁浮屠），取得郾城大捷；继战颍昌，再败金军。然高宗、秦桧主和，一日十二金字牌召还，罢兵权，次年以莫须有杀害岳飞于风波亭。本切片为『真实 LLM 抽取（DeepSeek-chat）+ 人工校订落库』：LLM 依《宋史·岳飞传》概述抽取断言，curate 报 BLOCK 0，人工补控制层（宋方 control 郾城/颍昌）与战略四维（inference）。引文全 paraphrase_unverified；来源《宋史》为元脱脱等官修，归『后世官修』；控制层『宋方』。",
  "parties_note": "《宋史·岳飞传》为元脱脱等官修，去宋已远，归『后世官修』；岳飞为宋方统帅，控制层『宋方』。金方视角经叙事折射。系统不裁决，只并列。",
  "dims": [
   1,
   2,
   3,
   6
  ],
  "subject_names": {
   "person:SON__p01": "岳飞",
   "person:SON__p02": "金兀术",
   "person:SON__p03": "宋高宗",
   "person:SON__p04": "秦桧",
   "event:ev_song_yancheng_llm_01": "郾城之战",
   "event:ev_song_yancheng_llm_02": "颍昌之战",
   "event:ev_song_yancheng_llm_03": "岳飞遇害",
   "place:yancheng": "郾城",
   "place:yingchang": "颍昌",
   "place:fengboting": "风波亭"
  },
  "epoch": "song",
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
    "note": "岳飞北伐凝聚抗金民心，然中枢主和掣肘"
   },
   "material_logistics": {
    "from": [
     "economy"
    ],
    "from_dims": [
     3
    ],
    "layer": "inference",
    "note": "背嵬军骑兵集团支撑野战突击"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "岳家军『冻死不拆屋』，民力依附"
   },
   "geopolitical_strategy": {
    "from": [
     "international"
    ],
    "from_dims": [
     6
    ],
    "layer": "inference",
    "note": "北伐收复中原态势，因议和中断"
   }
  },
  "page": "song_yancheng_llm.html",
  "key": "song_yancheng_llm",
  "scene_id": "song_yancheng_llm"
 },
 "sources": [
  {
   "id": "song_yancheng_src_llm",
   "title": "宋史·岳飞传（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yancheng",
   "name": "郾城",
   "type": "city",
   "modern": "今中国河南省漯河市",
   "note": "郾城之战发生地",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.97,
   "lat": 33.87,
   "geo_note": "今河南漯河郾城",
   "elev": 60
  },
  {
   "id": "yingchang",
   "name": "颍昌",
   "type": "city",
   "modern": "今中国河南省许昌市",
   "note": "颍昌之战发生地",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "fengboting",
   "name": "风波亭",
   "type": "other",
   "modern": "今中国浙江省杭州市",
   "note": "岳飞遇害处",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SON__p01",
   "name": "岳飞",
   "role": "南宋将领",
   "note": "北伐主帅",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p02",
   "name": "金兀术",
   "role": "金军主将",
   "note": "率拐子马",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p03",
   "name": "宋高宗",
   "role": "南宋皇帝",
   "note": "主和",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SON__p04",
   "name": "秦桧",
   "role": "南宋宰相",
   "note": "主和",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SON_001",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "战役结果",
   "value_text": "宋军大捷",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "大破金兀术拐子马",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大破金兀术拐子马",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_002",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "兵力",
   "value_text": "宋军背嵬军、游奕马军",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "以背嵬军、游奕马军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以背嵬军、游奕马军",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_003",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "金军战术",
   "value_text": "金军使用拐子马",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "金兀术拐子马",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "金兀术拐子马",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_004",
   "subject": "event:ev_song_yancheng_llm_02",
   "predicate": "战役结果",
   "value_text": "宋军再败金军",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yingchang",
   "source": "song_yancheng_src_llm",
   "quote": "再败金军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "再败金军",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_005",
   "subject": "event:ev_song_yancheng_llm_03",
   "predicate": "退兵理由",
   "value_text": "高宗、秦桧主和",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "高宗、秦桧主和",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "高宗、秦桧主和",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_006",
   "subject": "event:ev_song_yancheng_llm_03",
   "predicate": "退兵方式",
   "value_text": "一日十二金字牌召还",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "一日十二金字牌召还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一日十二金字牌召还",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_007",
   "subject": "event:ev_song_yancheng_llm_03",
   "predicate": "罪名",
   "value_text": "莫须有",
   "time": {
    "era_text": "绍兴十一年",
    "start": "1141-01-01",
    "end": "1141-12-31",
    "gregorian_year": 1141
   },
   "place": "fengboting",
   "source": "song_yancheng_src_llm",
   "quote": "莫须有",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "莫须有",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_008",
   "subject": "event:ev_song_yancheng_llm_03",
   "predicate": "遇害地点",
   "value_text": "风波亭",
   "time": {
    "era_text": "绍兴十一年",
    "start": "1141-01-01",
    "end": "1141-12-31",
    "gregorian_year": 1141
   },
   "place": "fengboting",
   "source": "song_yancheng_src_llm",
   "quote": "风波亭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "风波亭",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_009",
   "subject": "event:ev_song_yancheng_llm_03",
   "predicate": "遇害时间",
   "value_text": "次年",
   "time": {
    "era_text": "绍兴十一年",
    "start": "1141-01-01",
    "end": "1141-12-31",
    "gregorian_year": 1141
   },
   "place": "fengboting",
   "source": "song_yancheng_src_llm",
   "quote": "次年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "次年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_010",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "战役损失",
   "value_text": "金军损失惨重",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "大破",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大破",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_011",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "战役损失",
   "value_text": "金军损失轻微",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "大破",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.3,
   "scale": "theater",
   "note": "金方记载可能不同",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大破",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SON_012",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "兵力",
   "value_text": "金军兵力不详",
   "time": {
    "era_text": "绍兴十年",
    "start": "1140-01-01",
    "end": "1140-12-31",
    "gregorian_year": 1140
   },
   "place": "yancheng",
   "source": "song_yancheng_src_llm",
   "quote": "拐子马",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "lead": {
    "where": "金方史料",
    "skills": [
     "金史"
    ],
    "accept": "金军具体兵力"
   },
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "拐子马",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_song_yancheng_llm_01|战役损失",
   "subject": "event:ev_song_yancheng_llm_01",
   "predicate": "战役损失",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SON_010",
    "SON_011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "SON_012"
 ],
 "events": [
  {
   "id": "ev_song_yancheng_llm_01",
   "subject": "event:ev_song_yancheng_llm_01",
   "year": 1140,
   "era": "绍兴十年",
   "title": "郾城之战",
   "kind": "战事",
   "text": "岳飞大破金军拐子马",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_song_yancheng_llm_02",
   "subject": "event:ev_song_yancheng_llm_02",
   "year": 1140,
   "era": "绍兴十年",
   "title": "颍昌之战",
   "kind": "战事",
   "text": "再败金军",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_song_yancheng_llm_03",
   "subject": "event:ev_song_yancheng_llm_03",
   "year": 1141,
   "era": "绍兴十一年",
   "title": "岳飞遇害",
   "kind": "其他",
   "text": "以莫须有罪名杀害",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "yancheng",
   "to": "yingchang",
   "type": "military",
   "label": "岳飞进军路线",
   "_source_idx": 0,
   "_source_name": "宋史·岳飞传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "yancheng",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "yancheng",
   "name": "郾城",
   "lon": 113.97,
   "lat": 33.87,
   "region": "huabei"
  }
 ],
 "control_years": [
  1900,
  2000
 ],
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
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.97,
        32.87
       ],
       [
        112.97,
        34.87
       ],
       [
        114.97,
        34.87
       ],
       [
        114.97,
        32.87
       ],
       [
        112.97,
        32.87
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
         114.97,
         33.14
        ],
        [
         114.966,
         33.147
        ],
        [
         114.933,
         33.154
        ],
        [
         114.903,
         33.13
        ],
        [
         114.897,
         33.087
        ],
        [
         114.913,
         33.083
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
         114.97,
         32.937
        ],
        [
         114.97,
         33.14
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
         112.97,
         34.87
        ],
        [
         112.97,
         32.87
        ],
        [
         114.97,
         32.87
        ],
        [
         114.97,
         32.937
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
         114.913,
         33.083
        ],
        [
         114.897,
         33.087
        ],
        [
         114.903,
         33.13
        ],
        [
         114.933,
         33.154
        ],
        [
         114.966,
         33.147
        ],
        [
         114.97,
         33.14
        ],
        [
         114.97,
         34.87
        ],
        [
         112.97,
         34.87
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.97,
        34.825
       ],
       [
        113.012,
        34.831
       ],
       [
        113.14,
        34.87
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.97,
   32.87,
   114.97,
   34.87
  ]
 }
};
