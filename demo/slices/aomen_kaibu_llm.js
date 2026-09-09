// 本文件由 tools/build.py 自动生成（切片 aomen_kaibu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["aomen_kaibu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["aomen_kaibu_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "exchange",
  "province": "aomen",
  "title": "中国澳门·澳门开埠（1553）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "aomen",
  "dossier_event": "event:ev_aomen_kaibu_llm_01",
  "vocab_pack": "aomen_kaibu_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
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
    "note": "中国澳门·澳门开埠（1553）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国澳门·澳门开埠（1553）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中国澳门·澳门开埠（1553）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国澳门·澳门开埠（1553）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=aomen_kaibu_llm",
  "key": "aomen_kaibu_llm",
  "scene_id": "aomen_kaibu_llm"
 },
 "sources": [
  {
   "id": "aomen_kaibu_llm_src",
   "title": "澳门开埠史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1553",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "aomen",
   "name": "澳门",
   "type": "port",
   "modern": "中国澳门特别行政区",
   "note": "葡萄牙人租居地",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "guangzhou",
   "name": "广州",
   "type": "city",
   "modern": "中国广东省广州市",
   "note": "清乾隆后外贸重心北移至此",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.26,
   "lat": 23.13,
   "geo_note": "康有为故里，今广东广州",
   "elev": 44
  }
 ],
 "persons": [
  {
   "id": "AOM__p01",
   "name": "葡萄牙人",
   "role": "商人/殖民者",
   "note": "以晾晒货物为由入居澳门",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "AOM__p02",
   "name": "明地方官吏",
   "role": "明朝地方官员",
   "note": "受贿准许葡人租居",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AOM_001",
   "subject": "event:ev_aomen_kaibu_llm_01",
   "predicate": "入居原因",
   "value_text": "葡人以晾晒水浸货物为由",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "以晾晒水浸货物为由",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以晾晒水浸货物为由",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_002",
   "subject": "event:ev_aomen_kaibu_llm_01",
   "predicate": "入居方式",
   "value_text": "贿赂地方官吏获准租居",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "贿赂地方官吏，获准在澳门半岛租居",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贿赂地方官吏，获准在澳门半岛租居",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_003",
   "subject": "event:ev_aomen_kaibu_llm_02",
   "predicate": "葡人建置",
   "value_text": "万历年间葡人筑城设官",
   "time": {
    "era_text": "万历年间",
    "start": "1573-01-01",
    "end": "1573-12-31",
    "gregorian_year": 1573
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "万历年间葡人筑城设官",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "万历年间葡人筑城设官",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_004",
   "subject": "place:aomen",
   "predicate": "主权归属",
   "value_text": "明政府设海关、收地租、行主权",
   "time": {
    "era_text": "万历年间",
    "start": "1573-01-01",
    "end": "1573-12-31",
    "gregorian_year": 1573
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "明政府仍设海关、收地租、行主权",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明政府仍设海关、收地租、行主权",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_005",
   "subject": "place:aomen",
   "predicate": "贸易角色",
   "value_text": "澳门成为中西贸易与文化交流窗口",
   "time": {
    "era_text": "明中后期",
    "start": "1553"
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "澳门自此成为中西贸易与文化交流之早期窗口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "澳门自此成为中西贸易与文化交流之早期窗口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_006",
   "subject": "place:aomen",
   "predicate": "传教活动",
   "value_text": "天主教传教士自澳入内地",
   "time": {
    "era_text": "明中后期",
    "start": "1553"
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "天主教传教士自澳入内地",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天主教传教士自澳入内地",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_007",
   "subject": "place:aomen",
   "predicate": "地位变化",
   "value_text": "清乾隆后外贸重心北移广州",
   "time": {
    "era_text": "清乾隆后",
    "start": "1736"
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "清乾隆后外贸重心北移广州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清乾隆后外贸重心北移广州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_008",
   "subject": "place:aomen",
   "predicate": "回归时间",
   "value_text": "澳门于1999年回归祖国",
   "time": {
    "era_text": "1999年",
    "start": "1999-01-01",
    "end": "1999-12-31",
    "gregorian_year": 1999
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "澳门于1999年回归祖国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "澳门于1999年回归祖国",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_009",
   "subject": "event:ev_aomen_kaibu_llm_01",
   "predicate": "史料性质",
   "value_text": "葡人入居澳门之记载或为后世建构",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "学界对葡人入居细节有争议",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_010",
   "subject": "event:ev_aomen_kaibu_llm_01",
   "predicate": "入居细节",
   "value_text": "葡人具体贿赂对象与过程不详",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "澳门地方志及明实录",
    "skills": [
     "史料考据",
     "中西档案比对"
    ],
    "accept": "需查证葡人贿赂的具体官员及过程"
   },
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "aomen_kaibu_llm_DIM2",
   "subject": "技术:城防营造",
   "predicate": "技术维度",
   "value_text": "中国澳门·澳门开埠（1553） 的史料涉及城防营造（「_text\": \"万历年间葡人筑城设官\", \"time\": {\"」），补标技术维度（推断）。",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "aomen_kaibu_llm_src",
   "quote": "「_text\": \"万历年间葡人筑城设官\", \"time\": {\"」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "AOM_010"
 ],
 "events": [
  {
   "id": "ev_aomen_kaibu_llm_01",
   "subject": "event:ev_aomen_kaibu_llm_01",
   "year": 1553,
   "era": "嘉靖三十二年",
   "title": "葡人入居澳门",
   "kind": "行政",
   "text": "葡人以晾晒货物为由，贿赂官吏，获准租居澳门",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_aomen_kaibu_llm_02",
   "subject": "event:ev_aomen_kaibu_llm_02",
   "year": 1573,
   "era": "万历元年",
   "title": "葡人筑城设官",
   "kind": "建置",
   "text": "葡人筑城设官，渐成聚居",
   "_source_idx": 0,
   "_source_name": "澳门开埠史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "aomen",
   "party": "后世官修",
   "start": 1553,
   "end": 1553,
   "basis": "auto: 场景主地点 aomen 叙事控制方=后世官修"
  }
 ],
 "control_seats": [],
 "control_years": [
  1553,
  1553
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
     "type": "LineString",
     "coordinates": [
      [
       114.134,
       22.292
      ],
      [
       114.139,
       22.268
      ],
      [
       114.207,
       22.195
      ],
      [
       114.232,
       22.211
      ],
      [
       114.244,
       22.234
      ],
      [
       114.247,
       22.264
      ],
      [
       114.187,
       22.297
      ],
      [
       114.134,
       22.292
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       113.465,
       22.905
      ],
      [
       113.404,
       22.903
      ],
      [
       113.426,
       22.859
      ],
      [
       113.463,
       22.832
      ],
      [
       113.486,
       22.828
      ],
      [
       113.564,
       22.758
      ],
      [
       113.555,
       22.804
      ],
      [
       113.521,
       22.852
      ],
      [
       113.465,
       22.905
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       113.998,
       22.21
      ],
      [
       114.003,
       22.278
      ],
      [
       114.044,
       22.333
      ],
      [
       113.882,
       22.28
      ],
      [
       113.839,
       22.242
      ],
      [
       113.852,
       22.22
      ],
      [
       113.877,
       22.21
      ],
      [
       113.998,
       22.21
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
        113.018,
        22.13
       ],
       [
        113.089,
        22.208
       ],
       [
        113.124,
        22.13
       ],
       [
        113.311,
        22.13
       ],
       [
        113.328,
        22.145
       ],
       [
        113.367,
        22.165
       ],
       [
        113.416,
        22.178
       ],
       [
        113.499,
        22.202
       ],
       [
        113.548,
        22.223
       ],
       [
        113.576,
        22.297
       ],
       [
        113.589,
        22.35
       ],
       [
        113.551,
        22.404
       ],
       [
        113.553,
        22.594
       ],
       [
        113.485,
        22.692
       ],
       [
        113.45,
        22.726
       ],
       [
        113.432,
        22.789
       ],
       [
        113.345,
        22.865
       ],
       [
        113.338,
        22.889
       ],
       [
        113.331,
        22.912
       ],
       [
        113.442,
        22.941
       ],
       [
        113.46,
        22.996
       ],
       [
        113.445,
        23.055
       ],
       [
        113.52,
        23.102
       ],
       [
        113.621,
        23.127
       ],
       [
        113.592,
        23.077
       ],
       [
        113.586,
        23.02
       ],
       [
        113.603,
        22.969
       ],
       [
        113.62,
        22.861
       ],
       [
        113.661,
        22.802
       ],
       [
        113.754,
        22.734
       ],
       [
        113.828,
        22.607
       ],
       [
        113.931,
        22.531
       ],
       [
        114.015,
        22.512
       ],
       [
        114.007,
        22.484
       ],
       [
        113.896,
        22.428
       ],
       [
        113.903,
        22.396
       ],
       [
        113.937,
        22.365
       ],
       [
        114.033,
        22.376
       ],
       [
        114.139,
        22.348
       ],
       [
        114.26,
        22.299
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
        114.232,
        22.211
       ],
       [
        114.207,
        22.195
       ],
       [
        114.139,
        22.268
       ],
       [
        114.134,
        22.292
       ],
       [
        114.187,
        22.297
       ],
       [
        114.247,
        22.264
       ],
       [
        114.244,
        22.234
       ],
       [
        114.232,
        22.211
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
        113.555,
        22.804
       ],
       [
        113.564,
        22.758
       ],
       [
        113.486,
        22.828
       ],
       [
        113.463,
        22.832
       ],
       [
        113.426,
        22.859
       ],
       [
        113.404,
        22.903
       ],
       [
        113.465,
        22.905
       ],
       [
        113.521,
        22.852
       ],
       [
        113.555,
        22.804
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
        113.998,
        22.21
       ],
       [
        113.877,
        22.21
       ],
       [
        113.852,
        22.22
       ],
       [
        113.839,
        22.242
       ],
       [
        113.882,
        22.28
       ],
       [
        114.044,
        22.333
       ],
       [
        114.003,
        22.278
       ],
       [
        113.998,
        22.21
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
        112.26,
        22.13
       ],
       [
        112.26,
        24.13
       ],
       [
        114.26,
        24.13
       ],
       [
        114.26,
        22.299
       ],
       [
        114.139,
        22.348
       ],
       [
        114.033,
        22.376
       ],
       [
        113.937,
        22.365
       ],
       [
        113.903,
        22.396
       ],
       [
        113.896,
        22.428
       ],
       [
        114.007,
        22.484
       ],
       [
        114.015,
        22.512
       ],
       [
        113.931,
        22.531
       ],
       [
        113.828,
        22.607
       ],
       [
        113.754,
        22.734
       ],
       [
        113.661,
        22.802
       ],
       [
        113.62,
        22.861
       ],
       [
        113.603,
        22.969
       ],
       [
        113.586,
        23.02
       ],
       [
        113.592,
        23.077
       ],
       [
        113.621,
        23.127
       ],
       [
        113.52,
        23.102
       ],
       [
        113.445,
        23.055
       ],
       [
        113.46,
        22.996
       ],
       [
        113.442,
        22.941
       ],
       [
        113.331,
        22.912
       ],
       [
        113.338,
        22.889
       ],
       [
        113.345,
        22.865
       ],
       [
        113.432,
        22.789
       ],
       [
        113.45,
        22.726
       ],
       [
        113.485,
        22.692
       ],
       [
        113.553,
        22.594
       ],
       [
        113.551,
        22.404
       ],
       [
        113.589,
        22.35
       ],
       [
        113.576,
        22.297
       ],
       [
        113.548,
        22.223
       ],
       [
        113.499,
        22.202
       ],
       [
        113.416,
        22.178
       ],
       [
        113.367,
        22.165
       ],
       [
        113.328,
        22.145
       ],
       [
        113.311,
        22.13
       ],
       [
        113.124,
        22.13
       ],
       [
        113.089,
        22.208
       ],
       [
        113.018,
        22.13
       ],
       [
        112.26,
        22.13
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
         113.559,
         22.212
        ],
        [
         113.594,
         22.229
        ],
        [
         113.596,
         22.304
        ],
        [
         113.618,
         22.315
        ],
        [
         113.605,
         22.34
        ],
        [
         113.628,
         22.349
        ],
        [
         113.67,
         22.417
        ],
        [
         113.666,
         22.439
        ],
        [
         113.625,
         22.443
        ],
        [
         113.609,
         22.409
        ],
        [
         113.574,
         22.412
        ],
        [
         113.631,
         22.476
        ],
        [
         113.668,
         22.481
        ],
        [
         113.692,
         22.515
        ],
        [
         113.74,
         22.534
        ],
        [
         113.717,
         22.645
        ],
        [
         113.678,
         22.726
        ],
        [
         113.734,
         22.736
        ],
        [
         113.758,
         22.683
        ],
        [
         113.766,
         22.666
        ],
        [
         113.803,
         22.593
        ],
        [
         113.857,
         22.54
        ],
        [
         113.87,
         22.46
        ],
        [
         113.894,
         22.443
        ],
        [
         113.953,
         22.487
        ],
        [
         113.955,
         22.491
        ],
        [
         113.976,
         22.511
        ],
        [
         114.032,
         22.504
        ],
        [
         114.082,
         22.512
        ],
        [
         114.095,
         22.534
        ],
        [
         114.157,
         22.544
        ],
        [
         114.166,
         22.559
        ],
        [
         114.223,
         22.553
        ],
        [
         114.233,
         22.54
        ],
        [
         114.26,
         22.55
        ],
        [
         114.26,
         24.13
        ],
        [
         112.26,
         24.13
        ],
        [
         112.26,
         22.13
        ],
        [
         113.554,
         22.13
        ],
        [
         113.554,
         22.142
        ],
        [
         113.535,
         22.174
        ],
        [
         113.538,
         22.209
        ],
        [
         113.559,
         22.212
        ]
       ]
      ],
      [
       [
        [
         113.82,
         22.396
        ],
        [
         113.814,
         22.42
        ],
        [
         113.787,
         22.414
        ],
        [
         113.82,
         22.396
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.032,
         22.504
        ],
        [
         114.001,
         22.491
        ],
        [
         113.978,
         22.457
        ],
        [
         113.918,
         22.418
        ],
        [
         113.92,
         22.368
        ],
        [
         113.952,
         22.355
        ],
        [
         113.957,
         22.36
        ],
        [
         113.98,
         22.366
        ],
        [
         114.026,
         22.348
        ],
        [
         113.955,
         22.299
        ],
        [
         113.97,
         22.321
        ],
        [
         113.898,
         22.309
        ],
        [
         113.889,
         22.272
        ],
        [
         113.843,
         22.229
        ],
        [
         113.849,
         22.191
        ],
        [
         113.899,
         22.216
        ],
        [
         113.936,
         22.205
        ],
        [
         113.981,
         22.23
        ],
        [
         113.997,
         22.206
        ],
        [
         114.026,
         22.229
        ],
        [
         114.005,
         22.239
        ],
        [
         114.03,
         22.263
        ],
        [
         114.035,
         22.301
        ],
        [
         114.07,
         22.327
        ],
        [
         114.121,
         22.321
        ],
        [
         114.146,
         22.301
        ],
        [
         114.12,
         22.272
        ],
        [
         114.165,
         22.227
        ],
        [
         114.201,
         22.232
        ],
        [
         114.203,
         22.207
        ],
        [
         114.26,
         22.201
        ],
        [
         114.26,
         22.226
        ],
        [
         114.249,
         22.275
        ],
        [
         114.26,
         22.292
        ],
        [
         114.26,
         22.433
        ],
        [
         114.22,
         22.428
        ],
        [
         114.205,
         22.45
        ],
        [
         114.233,
         22.467
        ],
        [
         114.253,
         22.445
        ],
        [
         114.26,
         22.45
        ],
        [
         114.26,
         22.547
        ],
        [
         114.233,
         22.529
        ],
        [
         114.233,
         22.54
        ],
        [
         114.223,
         22.553
        ],
        [
         114.166,
         22.559
        ],
        [
         114.157,
         22.544
        ],
        [
         114.095,
         22.534
        ],
        [
         114.082,
         22.512
        ],
        [
         114.032,
         22.504
        ]
       ]
      ],
      [
       [
        [
         114.143,
         22.214
        ],
        [
         114.124,
         22.239
        ],
        [
         114.12,
         22.178
        ],
        [
         114.155,
         22.178
        ],
        [
         114.167,
         22.205
        ],
        [
         114.143,
         22.214
        ]
       ]
      ]
     ]
    },
    "n": "香港特别行政区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.599,
         22.13
        ],
        [
         113.604,
         22.132
        ],
        [
         113.576,
         22.195
        ],
        [
         113.559,
         22.212
        ],
        [
         113.538,
         22.209
        ],
        [
         113.535,
         22.174
        ],
        [
         113.554,
         22.142
        ],
        [
         113.554,
         22.13
        ],
        [
         113.599,
         22.13
        ]
       ]
      ],
      [
       [
        [
         113.586,
         22.201
        ],
        [
         113.576,
         22.201
        ],
        [
         113.576,
         22.195
        ],
        [
         113.586,
         22.201
        ]
       ]
      ]
     ]
    },
    "n": "澳门特别行政区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.035,
        22.795
       ],
       [
        113.095,
        22.73
       ],
       [
        113.166,
        22.576
       ],
       [
        113.214,
        22.483
       ],
       [
        113.264,
        22.363
       ],
       [
        113.416,
        22.178
       ]
      ],
      [
       [
        113.035,
        22.795
       ],
       [
        113.299,
        22.698
       ],
       [
        113.395,
        22.651
       ],
       [
        113.444,
        22.599
       ],
       [
        113.492,
        22.591
       ],
       [
        113.552,
        22.587
       ]
      ],
      [
       [
        112.98,
        23.041
       ],
       [
        113.445,
        23.055
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.819,
        23.082
       ],
       [
        112.891,
        22.918
       ],
       [
        112.963,
        22.822
       ],
       [
        113.035,
        22.795
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.912,
        23.113
       ],
       [
        112.974,
        23.052
       ],
       [
        113.024,
        22.954
       ],
       [
        113.09,
        22.907
       ],
       [
        113.213,
        22.912
       ],
       [
        113.338,
        22.889
       ]
      ],
      [
       [
        112.26,
        23.138
       ],
       [
        112.271,
        23.142
       ],
       [
        112.353,
        23.132
       ],
       [
        112.427,
        23.076
       ],
       [
        112.498,
        23.078
       ],
       [
        112.563,
        23.136
       ],
       [
        112.643,
        23.165
       ],
       [
        112.736,
        23.164
       ],
       [
        112.805,
        23.148
       ]
      ]
     ]
    },
    "n": "Xi"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.26,
   22.13,
   114.26,
   24.13
  ]
 }
};
