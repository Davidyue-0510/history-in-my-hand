// 本文件由 tools/build.py 自动生成（切片 jiupin_zhongzheng_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiupin_zhongzheng_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiupin_zhongzheng_llm"] = {
 "meta": {
  "kind": "reform",
  "region": "three_kingdoms",
  "province": "henan",
  "title": "曹魏·九品中正制",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "zhoujun",
  "dossier_event": "event:ev_jiupin_zhongzheng_llm_01",
  "vocab_pack": "inline:jiupin_zhongzheng_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
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
    "note": "曹魏·九品中正制：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "曹魏·九品中正制：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "曹魏·九品中正制：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "曹魏·九品中正制：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5
  ],
  "page": "county.html?scene=jiupin_zhongzheng_llm",
  "key": "jiupin_zhongzheng_llm",
  "scene_id": "jiupin_zhongzheng_llm"
 },
 "sources": [
  {
   "id": "jiupin_src",
   "title": "通典·选举（九品中正）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "杜佑",
   "period": "唐",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "luoyang",
   "name": "洛阳",
   "type": "city",
   "modern": "中国河南洛阳",
   "note": "曹魏都城",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.45,
   "lat": 34.62,
   "geo_note": "唐东都，今洛阳",
   "elev": 171
  },
  {
   "id": "zhoujun",
   "name": "州郡",
   "type": "region",
   "modern": "中国各地",
   "note": "州郡置中正",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIU__p01",
   "name": "魏文帝",
   "role": "曹魏皇帝",
   "note": "延康元年受禅称帝",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIU__p02",
   "name": "陈群",
   "role": "吏部尚书",
   "note": "创九品官人法",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIU__p03",
   "name": "中正",
   "role": "州郡中正官",
   "note": "品评人物之官",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIU_001",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "创立时间",
   "value_text": "延康元年",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "luoyang",
   "source": "jiupin_src",
   "quote": "魏文帝延康元年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "魏文帝延康元年",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_002",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "创立者",
   "value_text": "陈群",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "luoyang",
   "source": "jiupin_src",
   "quote": "吏部尚书陈群",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "吏部尚书陈群",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_003",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "制度内容",
   "value_text": "州郡置中正，品第高下",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "州郡皆置中正",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "州郡皆置中正",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_004",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "选官标准",
   "value_text": "贤有识鉴者",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "择州郡之贤有识鉴者",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "择州郡之贤有识鉴者",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_005",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "等级划分",
   "value_text": "分为九等",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "分为九等",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "分为九等",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_006",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "社会影响",
   "value_text": "上品无寒门，下品无势族",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "上品无寒门，下品无势族",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "上品无寒门，下品无势族",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_007",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "门阀影响",
   "value_text": "世家大族因缘据其上",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "世家大族因缘据其上",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世家大族因缘据其上",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_008",
   "subject": "event:ev_jiupin_zhongzheng_llm_02",
   "predicate": "制度延续",
   "value_text": "晋承魏制",
   "time": {
    "era_text": "晋武帝泰始元年",
    "start": "265"
   },
   "place": "luoyang",
   "source": "jiupin_src",
   "quote": "晋承魏制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "晋承魏制",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_009",
   "subject": "event:ev_jiupin_zhongzheng_llm_02",
   "predicate": "门阀强化",
   "value_text": "门阀之势益固",
   "time": {
    "era_text": "晋武帝泰始元年",
    "start": "265"
   },
   "place": "luoyang",
   "source": "jiupin_src",
   "quote": "门阀之势由是益固",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "门阀之势由是益固",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_010",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "制度动机",
   "value_text": "天朝选用不尽本土",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "luoyang",
   "source": "jiupin_src",
   "quote": "天朝选用，不尽本土",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天朝选用，不尽本土",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_011",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "制度评价",
   "value_text": "九品中正制影响深远",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "九品官人之法",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "九品官人之法",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIU_012",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "predicate": "制度细节",
   "value_text": "中正品评具体标准未详",
   "time": {
    "era_text": "延康元年",
    "start": "220-01-01",
    "end": "220-12-31",
    "gregorian_year": 220
   },
   "place": "zhoujun",
   "source": "jiupin_src",
   "quote": "区别人物，第其高下",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "州郡中正品评记录",
    "skills": [
     "制度史",
     "文献考据"
    ],
    "accept": "中正品评的具体标准"
   },
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "区别人物，第其高下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIU_012"
 ],
 "events": [
  {
   "id": "ev_jiupin_zhongzheng_llm_01",
   "subject": "event:ev_jiupin_zhongzheng_llm_01",
   "year": 220,
   "era": "延康元年",
   "title": "立九品官人法",
   "kind": "行政",
   "text": "陈群立九品官人之法",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiupin_zhongzheng_llm_02",
   "subject": "event:ev_jiupin_zhongzheng_llm_02",
   "year": 265,
   "era": "晋武帝泰始元年",
   "title": "晋承魏制",
   "kind": "行政",
   "text": "晋朝继承九品中正制",
   "_source_idx": 0,
   "_source_name": "通典·选举（九品中正）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "luoyang",
   "party": "后世官修",
   "start": 220,
   "end": 265,
   "timeline": "main"
  },
  {
   "place_id": "zhoujun",
   "party": "后世官修",
   "start": 220,
   "end": 265,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "region": "three_kingdoms"
  }
 ],
 "control_years": [
  220,
  265
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
        111.45,
        33.62
       ],
       [
        111.45,
        35.62
       ],
       [
        113.45,
        35.62
       ],
       [
        113.45,
        33.62
       ],
       [
        111.45,
        33.62
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
         111.45,
         35.62
        ],
        [
         111.45,
         34.837
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.45,
         35.512
        ],
        [
         113.45,
         35.62
        ],
        [
         111.45,
         35.62
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.45,
         33.62
        ],
        [
         113.45,
         35.512
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.45,
         34.837
        ],
        [
         111.45,
         33.62
        ],
        [
         113.45,
         33.62
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
        111.45,
        34.852
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.45,
        34.976
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.45,
   33.62,
   113.45,
   35.62
  ]
 }
};
