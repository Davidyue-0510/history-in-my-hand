// 本文件由 tools/build.py 自动生成（切片 nan_song_linan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["nan_song_linan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["nan_song_linan_llm"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "province": "zhejiang",
  "title": "南宋定都临安（杭州）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "hangzhou",
  "dossier_event": "event:ev_nan_song_linan_llm_01",
  "vocab_pack": "inline:nan_song_linan_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
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
    "note": "南宋定都临安（杭州）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南宋定都临安（杭州）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "南宋定都临安（杭州）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南宋定都临安（杭州）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=nan_song_linan_llm",
  "key": "nan_song_linan_llm",
  "scene_id": "nan_song_linan_llm"
 },
 "sources": [
  {
   "id": "songshi_linan_llm",
   "title": "宋史·高宗本纪",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱等",
   "period": "元",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "hangzhou",
   "name": "杭州",
   "type": "city",
   "modern": "今中国浙江省杭州市",
   "note": "高宗驻跸地",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.15,
   "lat": 30.27,
   "geo_note": "浙党核心，今浙江杭州",
   "elev": 98
  },
  {
   "id": "linan",
   "name": "临安府",
   "type": "city",
   "modern": "今中国浙江省杭州市",
   "note": "南宋行在所",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.15,
   "lat": 30.27,
   "geo_unresolved": true,
   "elev": 98
  },
  {
   "id": "xihu",
   "name": "西湖",
   "type": "region",
   "modern": "今中国浙江省杭州市西湖",
   "note": "临安倚西湖之胜",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.15,
   "lat": 30.25,
   "geo_unresolved": true,
   "elev": 112
  }
 ],
 "persons": [
  {
   "id": "NAN__p01",
   "name": "宋高宗",
   "role": "南宋皇帝",
   "note": "南渡后驻跸杭州，升临安府",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "NAN__p02",
   "name": "孟元老",
   "role": "南宋文人",
   "note": "著《梦粱录》载临安繁盛",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "NAN_001",
   "subject": "event:ev_nan_song_linan_llm_01",
   "predicate": "驻跸",
   "value_text": "建炎三年高宗南渡驻跸杭州",
   "time": {
    "era_text": "建炎三年",
    "start": "1129-01-01",
    "end": "1129-12-31",
    "gregorian_year": 1129
   },
   "place": "hangzhou",
   "source": "songshi_linan_llm",
   "quote": "建炎三年宋高宗南渡，驻跸杭州",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建炎三年宋高宗南渡，驻跸杭州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_002",
   "subject": "event:ev_nan_song_linan_llm_01",
   "predicate": "升府",
   "value_text": "升杭州为临安府以为行在所",
   "time": {
    "era_text": "建炎三年",
    "start": "1129-01-01",
    "end": "1129-12-31",
    "gregorian_year": 1129
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "升为临安府以为行在所",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "升为临安府以为行在所",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_003",
   "subject": "event:ev_nan_song_linan_llm_02",
   "predicate": "定都",
   "value_text": "绍兴八年正式定都临安",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "绍兴八年正式定都临安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绍兴八年正式定都临安",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_004",
   "subject": "place:linan",
   "predicate": "地理形胜",
   "value_text": "临安倚西湖之胜，为东南都会",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "xihu",
   "source": "songshi_linan_llm",
   "quote": "临安倚西湖之胜，为东南都会",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "临安倚西湖之胜，为东南都会",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_005",
   "subject": "place:linan",
   "predicate": "户口",
   "value_text": "户口蕃盛，商贾辐辏",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "户口蕃盛，商贾辐辏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "户口蕃盛，商贾辐辏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_006",
   "subject": "place:linan",
   "predicate": "市井文化",
   "value_text": "瓦舍勾栏林立，市井繁华",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "瓦舍勾栏林立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "瓦舍勾栏林立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_007",
   "subject": "person:NAN__p02",
   "predicate": "文献记载",
   "value_text": "孟元老《梦粱录》备载临安繁盛",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "孟元老《梦粱录》备载其繁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孟元老《梦粱录》备载其繁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_008",
   "subject": "event:ev_nan_song_linan_llm_03",
   "predicate": "亡国",
   "value_text": "德祐二年元军破临安，南宋亡",
   "time": {
    "era_text": "德祐二年",
    "start": "1276-01-01",
    "end": "1276-12-31",
    "gregorian_year": 1276
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "德祐二年元军破临安，南宋亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "德祐二年元军破临安，南宋亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_009",
   "subject": "event:ev_nan_song_linan_llm_03",
   "predicate": "破城",
   "value_text": "元军攻破临安城",
   "time": {
    "era_text": "德祐二年",
    "start": "1276-01-01",
    "end": "1276-12-31",
    "gregorian_year": 1276
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "元军破临安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元军破临安",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_010",
   "subject": "event:ev_nan_song_linan_llm_01",
   "predicate": "行在性质",
   "value_text": "临安为行在所，非正式都城",
   "time": {
    "era_text": "建炎三年",
    "start": "1129-01-01",
    "end": "1129-12-31",
    "gregorian_year": 1129
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "以为行在所",
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
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以为行在所",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_011",
   "subject": "event:ev_nan_song_linan_llm_02",
   "predicate": "定都性质",
   "value_text": "绍兴八年正式定都，行在转正",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "正式定都临安",
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
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "正式定都临安",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_012",
   "subject": "place:linan",
   "predicate": "都城地位",
   "value_text": "临安为南宋实际政治中心",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "为东南都会",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "学界对行在与都城性质有讨论",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为东南都会",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_013",
   "subject": "place:linan",
   "predicate": "都城地位",
   "value_text": "临安仅为行在，非正式都城",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "以为行在所",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "empire",
   "note": "部分学者强调行在名义",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以为行在所",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NAN_014",
   "subject": "place:linan",
   "predicate": "城市规模",
   "value_text": "临安户口蕃盛的具体数据待考",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "songshi_linan_llm",
   "quote": "户口蕃盛",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "原文未载具体户口数",
   "dims": [
    4
   ],
   "lead": {
    "where": "《梦粱录》及南宋方志",
    "skills": [
     "历史地理",
     "文献考据"
    ],
    "accept": "临安具体户口数据"
   },
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "户口蕃盛",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:place:linan|都城地位",
   "subject": "place:linan",
   "predicate": "都城地位",
   "kind": "scholarly_divergence",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "NAN_012",
    "NAN_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "NAN_014"
 ],
 "events": [
  {
   "id": "ev_nan_song_linan_llm_01",
   "subject": "event:ev_nan_song_linan_llm_01",
   "year": 1129,
   "era": "建炎三年",
   "title": "宋高宗南渡驻跸杭州",
   "kind": "行政",
   "text": "高宗南渡，驻跸杭州，升为临安府",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_nan_song_linan_llm_02",
   "subject": "event:ev_nan_song_linan_llm_02",
   "year": 1138,
   "era": "绍兴八年",
   "title": "正式定都临安",
   "kind": "建置",
   "text": "绍兴八年正式定都临安",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_nan_song_linan_llm_03",
   "subject": "event:ev_nan_song_linan_llm_03",
   "year": 1276,
   "era": "德祐二年",
   "title": "元军破临安",
   "kind": "战事",
   "text": "德祐二年元军破临安，南宋亡",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "hangzhou",
   "to": "linan",
   "type": "administrative",
   "label": "杭州升为临安府",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "hangzhou",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "hangzhou",
   "name": "杭州",
   "lon": 120.15,
   "lat": 30.27,
   "region": "court"
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
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        121.15,
        30.297
       ],
       [
        120.904,
        30.161
       ],
       [
        120.633,
        30.133
       ],
       [
        120.495,
        30.303
       ],
       [
        120.353,
        30.247
       ],
       [
        120.261,
        30.263
       ],
       [
        120.229,
        30.25
       ],
       [
        120.195,
        30.241
       ],
       [
        120.246,
        30.284
       ],
       [
        120.45,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.15,
        30.627
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
        119.15,
        29.25
       ],
       [
        119.15,
        31.27
       ],
       [
        121.15,
        31.27
       ],
       [
        121.15,
        30.627
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.45,
        30.388
       ],
       [
        120.246,
        30.284
       ],
       [
        120.195,
        30.241
       ],
       [
        120.229,
        30.25
       ],
       [
        120.261,
        30.263
       ],
       [
        120.353,
        30.247
       ],
       [
        120.495,
        30.303
       ],
       [
        120.633,
        30.133
       ],
       [
        120.904,
        30.161
       ],
       [
        121.15,
        30.297
       ],
       [
        121.15,
        29.25
       ],
       [
        119.15,
        29.25
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
         120.901,
         31.017
        ],
        [
         120.94,
         31.01
        ],
        [
         120.949,
         31.03
        ],
        [
         120.989,
         31.014
        ],
        [
         121.001,
         30.938
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.15,
         30.775
        ],
        [
         121.15,
         31.27
        ],
        [
         121.076,
         31.27
        ],
        [
         121.06,
         31.245
        ],
        [
         121.077,
         31.158
        ],
        [
         121.018,
         31.134
        ],
        [
         120.93,
         31.141
        ],
        [
         120.881,
         31.135
        ],
        [
         120.859,
         31.1
        ],
        [
         120.891,
         31.094
        ],
        [
         120.901,
         31.017
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.2,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.341,
         31.27
        ],
        [
         119.368,
         31.27
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.81,
         31.149
        ],
        [
         119.827,
         31.174
        ],
        [
         119.878,
         31.161
        ],
        [
         119.921,
         31.17
        ],
        [
         119.946,
         31.106
        ],
        [
         119.989,
         31.059
        ],
        [
         120.001,
         31.027
        ],
        [
         120.053,
         31.006
        ],
        [
         120.111,
         30.956
        ],
        [
         120.15,
         30.937
        ],
        [
         120.224,
         30.927
        ],
        [
         120.316,
         30.934
        ],
        [
         120.371,
         30.949
        ],
        [
         120.358,
         30.887
        ],
        [
         120.423,
         30.903
        ],
        [
         120.435,
         30.921
        ],
        [
         120.442,
         30.861
        ],
        [
         120.46,
         30.84
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.709,
         30.933
        ],
        [
         120.685,
         30.955
        ],
        [
         120.698,
         30.971
        ],
        [
         120.746,
         30.962
        ],
        [
         120.77,
         30.997
        ],
        [
         120.821,
         31.007
        ],
        [
         120.866,
         30.99
        ],
        [
         120.901,
         31.017
        ],
        [
         120.891,
         31.094
        ],
        [
         120.859,
         31.1
        ],
        [
         120.881,
         31.135
        ],
        [
         120.93,
         31.141
        ],
        [
         121.018,
         31.134
        ],
        [
         121.077,
         31.158
        ],
        [
         121.06,
         31.245
        ],
        [
         121.076,
         31.27
        ],
        [
         119.2,
         31.27
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.15,
         29.25
        ],
        [
         121.15,
         29.25
        ],
        [
         121.15,
         30.465
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.15,
         30.601
        ],
        [
         121.15,
         30.775
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         121.001,
         30.938
        ],
        [
         120.989,
         31.014
        ],
        [
         120.949,
         31.03
        ],
        [
         120.94,
         31.01
        ],
        [
         120.901,
         31.017
        ],
        [
         120.866,
         30.99
        ],
        [
         120.821,
         31.007
        ],
        [
         120.77,
         30.997
        ],
        [
         120.746,
         30.962
        ],
        [
         120.698,
         30.971
        ],
        [
         120.685,
         30.955
        ],
        [
         120.709,
         30.933
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.46,
         30.84
        ],
        [
         120.442,
         30.861
        ],
        [
         120.435,
         30.921
        ],
        [
         120.423,
         30.903
        ],
        [
         120.358,
         30.887
        ],
        [
         120.371,
         30.949
        ],
        [
         120.316,
         30.934
        ],
        [
         120.224,
         30.927
        ],
        [
         120.15,
         30.937
        ],
        [
         120.111,
         30.956
        ],
        [
         120.053,
         31.006
        ],
        [
         120.001,
         31.027
        ],
        [
         119.989,
         31.059
        ],
        [
         119.946,
         31.106
        ],
        [
         119.921,
         31.17
        ],
        [
         119.878,
         31.161
        ],
        [
         119.827,
         31.174
        ],
        [
         119.81,
         31.149
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.634,
         31.019
        ],
        [
         119.58,
         30.967
        ],
        [
         119.582,
         30.932
        ],
        [
         119.564,
         30.919
        ],
        [
         119.557,
         30.874
        ],
        [
         119.576,
         30.83
        ],
        [
         119.554,
         30.826
        ],
        [
         119.527,
         30.779
        ],
        [
         119.48,
         30.772
        ],
        [
         119.483,
         30.704
        ],
        [
         119.445,
         30.65
        ],
        [
         119.408,
         30.645
        ],
        [
         119.39,
         30.686
        ],
        [
         119.343,
         30.664
        ],
        [
         119.323,
         30.63
        ],
        [
         119.239,
         30.609
        ],
        [
         119.265,
         30.575
        ],
        [
         119.237,
         30.547
        ],
        [
         119.272,
         30.51
        ],
        [
         119.326,
         30.533
        ],
        [
         119.336,
         30.509
        ],
        [
         119.335,
         30.448
        ],
        [
         119.368,
         30.385
        ],
        [
         119.403,
         30.375
        ],
        [
         119.349,
         30.349
        ],
        [
         119.326,
         30.372
        ],
        [
         119.277,
         30.341
        ],
        [
         119.247,
         30.341
        ],
        [
         119.236,
         30.297
        ],
        [
         119.201,
         30.291
        ],
        [
         119.15,
         30.301
        ],
        [
         119.15,
         29.25
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.15,
         31.27
        ],
        [
         119.15,
         30.301
        ],
        [
         119.201,
         30.291
        ],
        [
         119.236,
         30.297
        ],
        [
         119.247,
         30.341
        ],
        [
         119.277,
         30.341
        ],
        [
         119.326,
         30.372
        ],
        [
         119.349,
         30.349
        ],
        [
         119.403,
         30.375
        ],
        [
         119.368,
         30.385
        ],
        [
         119.335,
         30.448
        ],
        [
         119.336,
         30.509
        ],
        [
         119.326,
         30.533
        ],
        [
         119.272,
         30.51
        ],
        [
         119.237,
         30.547
        ],
        [
         119.265,
         30.575
        ],
        [
         119.239,
         30.609
        ],
        [
         119.323,
         30.63
        ],
        [
         119.343,
         30.664
        ],
        [
         119.39,
         30.686
        ],
        [
         119.408,
         30.645
        ],
        [
         119.445,
         30.65
        ],
        [
         119.483,
         30.704
        ],
        [
         119.48,
         30.772
        ],
        [
         119.527,
         30.779
        ],
        [
         119.554,
         30.826
        ],
        [
         119.576,
         30.83
        ],
        [
         119.557,
         30.874
        ],
        [
         119.564,
         30.919
        ],
        [
         119.582,
         30.932
        ],
        [
         119.58,
         30.967
        ],
        [
         119.634,
         31.019
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.368,
         31.27
        ],
        [
         119.341,
         31.27
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.2,
         31.27
        ],
        [
         119.15,
         31.27
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   }
  ],
  "rivers": [],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.602,
        31.087
       ],
       [
        120.394,
        30.971
       ],
       [
        120.236,
        30.936
       ],
       [
        120.103,
        30.973
       ],
       [
        119.978,
        31.091
       ],
       [
        119.939,
        31.253
       ],
       [
        119.945,
        31.27
       ],
       [
        120.357,
        31.27
       ],
       [
        120.357,
        31.27
       ],
       [
        120.391,
        31.227
       ],
       [
        120.431,
        31.2
       ],
       [
        120.44,
        31.153
       ],
       [
        120.395,
        31.1
       ],
       [
        120.423,
        31.083
       ],
       [
        120.461,
        31.081
       ],
       [
        120.54,
        31.127
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   }
  ],
  "_bbox": [
   119.15,
   29.25,
   121.15,
   31.27
  ]
 }
};
