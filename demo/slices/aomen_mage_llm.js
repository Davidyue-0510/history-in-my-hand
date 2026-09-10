// 本文件由 tools/build.py 自动生成（切片 aomen_mage_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["aomen_mage_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["aomen_mage_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "exchange",
  "province": "aomen",
  "title": "中国澳门·妈阁文化",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "aomen",
  "dossier_event": "event:ev_aomen_mage_llm_01",
  "vocab_pack": "inline:aomen_mage_llm",
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
    "note": "中国澳门·妈阁文化：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国澳门·妈阁文化：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中国澳门·妈阁文化：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国澳门·妈阁文化：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
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
  "page": "county.html?scene=aomen_mage_llm",
  "key": "aomen_mage_llm",
  "scene_id": "aomen_mage_llm"
 },
 "sources": [
  {
   "id": "aomen_mage_src_llm",
   "title": "澳门妈阁文化史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "明清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "aomen",
   "name": "澳门",
   "type": "city",
   "modern": "中国澳门特别行政区",
   "note": "明清中西贸易节点。坐标据地名志条目：澳门，标 approx。",
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.54,
   "lat": 22.2,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：澳门（诚实回填 v0.221）。",
   "elev": 122
  },
  {
   "id": "mage_miao",
   "name": "妈阁庙",
   "type": "yi",
   "modern": "中国澳门妈阁庙",
   "note": "澳门最古庙宇",
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "AOM__p01",
   "name": "妈祖",
   "role": "海神",
   "note": "澳门妈阁庙供奉的主神",
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AOM_001",
   "subject": "place:mage_miao",
   "predicate": "始建时间",
   "value_text": "明成化年间建",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "明成化间，闽粤渔民建妈祖阁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明成化间，闽粤渔民建妈祖阁",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_002",
   "subject": "place:mage_miao",
   "predicate": "建造者",
   "value_text": "闽粤渔民",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "闽粤渔民于澳门半岛西南建妈祖阁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闽粤渔民于澳门半岛西南建妈祖阁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_003",
   "subject": "place:mage_miao",
   "predicate": "位置",
   "value_text": "澳门半岛西南",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "于澳门半岛西南建妈祖阁",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于澳门半岛西南建妈祖阁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_004",
   "subject": "place:mage_miao",
   "predicate": "地位",
   "value_text": "澳门最古庙宇",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "为澳门最古庙宇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为澳门最古庙宇",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_005",
   "subject": "place:aomen",
   "predicate": "名称来源",
   "value_text": "由阿妈阁音转",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "aomen",
   "source": "aomen_mage_src_llm",
   "quote": "「Macau」一名即由「阿妈阁」音转而来",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "「Macau」一名即由「阿妈阁」音转而来",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_006",
   "subject": "place:aomen",
   "predicate": "历史地位",
   "value_text": "中西贸易与传教节点",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "aomen",
   "source": "aomen_mage_src_llm",
   "quote": "明清澳门为中西海上贸易与传教节点",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    3
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明清澳门为中西海上贸易与传教节点",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_007",
   "subject": "place:aomen",
   "predicate": "宗教共存",
   "value_text": "妈祖信仰与天主教堂并存",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "aomen",
   "source": "aomen_mage_src_llm",
   "quote": "妈祖信仰与天主教堂并存",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "妈祖信仰与天主教堂并存",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_008",
   "subject": "place:aomen",
   "predicate": "文化意义",
   "value_text": "见证中华海洋文化远洋交流",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "aomen",
   "source": "aomen_mage_src_llm",
   "quote": "见证中华海洋文化远洋交流",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "见证中华海洋文化远洋交流",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_009",
   "subject": "place:aomen",
   "predicate": "领土归属",
   "value_text": "自古为中国领土",
   "time": {
    "era_text": "自古",
    "start": "0001"
   },
   "place": "aomen",
   "source": "aomen_mage_src_llm",
   "quote": "澳门自古为中国领土",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "澳门自古为中国领土",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_010",
   "subject": "place:mage_miao",
   "predicate": "供奉神祇",
   "value_text": "奉海神妈祖",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "奉海神妈祖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "奉海神妈祖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_011",
   "subject": "place:mage_miao",
   "predicate": "始建年代",
   "value_text": "成化年间",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "明成化间",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "成化年号跨1465-1487",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明成化间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_012",
   "subject": "place:mage_miao",
   "predicate": "始建年代",
   "value_text": "确切年份无考",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "明成化间",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体年份",
   "dims": [
    6
   ],
   "lead": {
    "where": "地方志或碑刻",
    "skills": [
     "历史考据"
    ],
    "accept": "发现具体建庙年份"
   },
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明成化间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "AOM_013",
   "subject": "event:ev_aomen_mage_llm_01",
   "predicate": "始建",
   "value_text": "闽粤渔民于澳门半岛西南建妈祖阁",
   "time": {
    "era_text": "明成化间",
    "start": "1465-01-01",
    "end": "1465-12-31",
    "gregorian_year": 1465
   },
   "place": "mage_miao",
   "source": "aomen_mage_src_llm",
   "quote": "明成化间，闽粤渔民建妈祖阁",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明成化间，闽粤渔民建妈祖阁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "AOM_012"
 ],
 "events": [
  {
   "id": "ev_aomen_mage_llm_01",
   "subject": "event:ev_aomen_mage_llm_01",
   "year": 1465,
   "era": "明成化元年",
   "title": "妈祖阁始建",
   "kind": "宗教",
   "text": "闽粤渔民于澳门半岛西南建妈祖阁，奉海神妈祖，为澳门最古庙宇",
   "_source_idx": 0,
   "_source_name": "澳门妈阁文化史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "aomen",
   "party": "后世官修",
   "start": 1488,
   "end": 1999,
   "basis": "auto: 场景主地点 aomen 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "aomen",
   "name": "澳门",
   "lon": 113.54,
   "lat": 22.2,
   "region": "exchange"
  }
 ],
 "control_years": [
  1488,
  1999
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
       112.782,
       21.772
      ],
      [
       112.761,
       21.733
      ],
      [
       112.713,
       21.698
      ],
      [
       112.733,
       21.67
      ],
      [
       112.742,
       21.618
      ],
      [
       112.771,
       21.582
      ],
      [
       112.79,
       21.602
      ],
      [
       112.801,
       21.695
      ],
      [
       112.813,
       21.712
      ],
      [
       112.863,
       21.753
      ],
      [
       112.839,
       21.765
      ],
      [
       112.782,
       21.772
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
       112.559,
       21.675
      ],
      [
       112.54,
       21.646
      ],
      [
       112.54,
       21.62
      ],
      [
       112.546,
       21.619
      ],
      [
       112.644,
       21.64
      ],
      [
       112.648,
       21.71
      ],
      [
       112.559,
       21.675
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
        112.54,
        21.798
       ],
       [
        112.586,
        21.777
       ],
       [
        112.634,
        21.82
       ],
       [
        112.661,
        21.859
       ],
       [
        112.725,
        21.902
       ],
       [
        112.809,
        21.945
       ],
       [
        112.904,
        21.881
       ],
       [
        112.954,
        21.907
       ],
       [
        112.984,
        21.938
       ],
       [
        113.008,
        22.119
       ],
       [
        113.089,
        22.208
       ],
       [
        113.149,
        22.075
       ],
       [
        113.266,
        22.089
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
        114.268,
        22.296
       ],
       [
        114.288,
        22.325
       ],
       [
        114.291,
        22.374
       ],
       [
        114.335,
        22.396
       ],
       [
        114.325,
        22.437
       ],
       [
        114.285,
        22.458
       ],
       [
        114.291,
        22.499
       ],
       [
        114.266,
        22.541
       ],
       [
        114.341,
        22.593
       ],
       [
        114.42,
        22.583
       ],
       [
        114.496,
        22.527
       ],
       [
        114.54,
        22.528
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
        112.79,
        21.602
       ],
       [
        112.771,
        21.582
       ],
       [
        112.742,
        21.618
       ],
       [
        112.733,
        21.67
       ],
       [
        112.713,
        21.698
       ],
       [
        112.761,
        21.733
       ],
       [
        112.782,
        21.772
       ],
       [
        112.839,
        21.765
       ],
       [
        112.863,
        21.753
       ],
       [
        112.813,
        21.712
       ],
       [
        112.801,
        21.695
       ],
       [
        112.79,
        21.602
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
        112.644,
        21.64
       ],
       [
        112.546,
        21.619
       ],
       [
        112.54,
        21.62
       ],
       [
        112.54,
        21.646
       ],
       [
        112.559,
        21.675
       ],
       [
        112.648,
        21.71
       ],
       [
        112.644,
        21.64
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
        112.54,
        23.2
       ],
       [
        114.54,
        23.2
       ],
       [
        114.54,
        22.528
       ],
       [
        114.496,
        22.527
       ],
       [
        114.42,
        22.583
       ],
       [
        114.341,
        22.593
       ],
       [
        114.266,
        22.541
       ],
       [
        114.291,
        22.499
       ],
       [
        114.285,
        22.458
       ],
       [
        114.325,
        22.437
       ],
       [
        114.335,
        22.396
       ],
       [
        114.291,
        22.374
       ],
       [
        114.288,
        22.325
       ],
       [
        114.268,
        22.296
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
        113.266,
        22.089
       ],
       [
        113.149,
        22.075
       ],
       [
        113.089,
        22.208
       ],
       [
        113.008,
        22.119
       ],
       [
        112.984,
        21.938
       ],
       [
        112.954,
        21.907
       ],
       [
        112.904,
        21.881
       ],
       [
        112.809,
        21.945
       ],
       [
        112.725,
        21.902
       ],
       [
        112.661,
        21.859
       ],
       [
        112.634,
        21.82
       ],
       [
        112.586,
        21.777
       ],
       [
        112.54,
        21.798
       ],
       [
        112.54,
        23.2
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
         114.295,
         22.564
        ],
        [
         114.322,
         22.587
        ],
        [
         114.382,
         22.602
        ],
        [
         114.427,
         22.589
        ],
        [
         114.472,
         22.522
        ],
        [
         114.476,
         22.459
        ],
        [
         114.507,
         22.439
        ],
        [
         114.54,
         22.46
        ],
        [
         114.54,
         22.658
        ],
        [
         114.515,
         22.655
        ],
        [
         114.54,
         22.67
        ],
        [
         114.54,
         23.2
        ],
        [
         112.54,
         23.2
        ],
        [
         112.54,
         21.754
        ],
        [
         112.647,
         21.758
        ],
        [
         112.686,
         21.811
        ],
        [
         112.793,
         21.921
        ],
        [
         112.841,
         21.921
        ],
        [
         112.894,
         21.844
        ],
        [
         112.93,
         21.839
        ],
        [
         112.99,
         21.869
        ],
        [
         113.048,
         21.957
        ],
        [
         113.054,
         22.012
        ],
        [
         113.032,
         22.046
        ],
        [
         113.046,
         22.089
        ],
        [
         113.087,
         22.126
        ],
        [
         113.092,
         22.065
        ],
        [
         113.143,
         22.012
        ],
        [
         113.152,
         21.98
        ],
        [
         113.235,
         21.888
        ],
        [
         113.267,
         21.872
        ],
        [
         113.32,
         21.909
        ],
        [
         113.33,
         21.962
        ],
        [
         113.442,
         22.009
        ],
        [
         113.46,
         22.044
        ],
        [
         113.528,
         22.074
        ],
        [
         113.567,
         22.075
        ],
        [
         113.554,
         22.107
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
         112.853,
         21.741
        ],
        [
         112.876,
         21.773
        ],
        [
         112.841,
         21.777
        ],
        [
         112.783,
         21.74
        ],
        [
         112.724,
         21.72
        ],
        [
         112.706,
         21.679
        ],
        [
         112.735,
         21.667
        ],
        [
         112.78,
         21.672
        ],
        [
         112.731,
         21.614
        ],
        [
         112.775,
         21.564
        ],
        [
         112.817,
         21.59
        ],
        [
         112.799,
         21.611
        ],
        [
         112.821,
         21.656
        ],
        [
         112.805,
         21.687
        ],
        [
         112.833,
         21.737
        ],
        [
         112.853,
         21.741
        ]
       ]
      ],
      [
       [
        [
         112.54,
         21.586
        ],
        [
         112.563,
         21.591
        ],
        [
         112.571,
         21.62
        ],
        [
         112.621,
         21.606
        ],
        [
         112.666,
         21.643
        ],
        [
         112.639,
         21.673
        ],
        [
         112.666,
         21.684
        ],
        [
         112.664,
         21.714
        ],
        [
         112.592,
         21.693
        ],
        [
         112.56,
         21.667
        ],
        [
         112.571,
         21.646
        ],
        [
         112.54,
         21.631
        ],
        [
         112.54,
         21.586
        ]
       ]
      ],
      [
       [
        [
         114.231,
         22.017
        ],
        [
         114.311,
         22.041
        ],
        [
         114.303,
         22.05
        ],
        [
         114.24,
         22.035
        ],
        [
         114.231,
         22.017
        ]
       ]
      ],
      [
       [
        [
         113.765,
         21.962
        ],
        [
         113.774,
         21.998
        ],
        [
         113.742,
         21.992
        ],
        [
         113.765,
         21.962
        ]
       ]
      ],
      [
       [
        [
         113.723,
         21.922
        ],
        [
         113.743,
         21.95
        ],
        [
         113.719,
         21.952
        ],
        [
         113.723,
         21.922
        ]
       ]
      ],
      [
       [
        [
         113.143,
         21.832
        ],
        [
         113.162,
         21.854
        ],
        [
         113.204,
         21.861
        ],
        [
         113.168,
         21.877
        ],
        [
         113.137,
         21.869
        ],
        [
         113.143,
         21.832
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
      ],
      [
       [
        [
         114.19,
         21.987
        ],
        [
         114.229,
         21.995
        ],
        [
         114.181,
         22.01
        ],
        [
         114.19,
         21.987
        ]
       ]
      ],
      [
       [
        [
         114.154,
         21.975
        ],
        [
         114.172,
         22.0
        ],
        [
         114.124,
         21.985
        ],
        [
         114.154,
         21.975
        ]
       ]
      ],
      [
       [
        [
         113.025,
         21.848
        ],
        [
         113.046,
         21.883
        ],
        [
         113.007,
         21.869
        ],
        [
         113.025,
         21.848
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
         114.266,
         22.201
        ],
        [
         114.249,
         22.275
        ],
        [
         114.262,
         22.295
        ],
        [
         114.285,
         22.264
        ],
        [
         114.313,
         22.264
        ],
        [
         114.316,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.278,
         22.329
        ],
        [
         114.283,
         22.387
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.324,
         22.385
        ],
        [
         114.324,
         22.384
        ],
        [
         114.357,
         22.34
        ],
        [
         114.395,
         22.362
        ],
        [
         114.385,
         22.412
        ],
        [
         114.406,
         22.433
        ],
        [
         114.406,
         22.434
        ],
        [
         114.376,
         22.436
        ],
        [
         114.326,
         22.479
        ],
        [
         114.279,
         22.436
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
         114.341,
         22.503
        ],
        [
         114.31,
         22.497
        ],
        [
         114.289,
         22.523
        ],
        [
         114.264,
         22.542
        ],
        [
         114.263,
         22.542
        ],
        [
         114.26,
         22.548
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
      ],
      [
       [
        [
         114.306,
         22.372
        ],
        [
         114.314,
         22.341
        ],
        [
         114.333,
         22.353
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.372
        ]
       ]
      ],
      [
       [
        [
         114.32,
         22.381
        ],
        [
         114.324,
         22.384
        ],
        [
         114.324,
         22.385
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.382
        ],
        [
         114.32,
         22.381
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.37
        ],
        [
         114.306,
         22.372
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.37
        ]
       ]
      ],
      [
       [
        [
         114.316,
         22.299
        ],
        [
         114.317,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.299
        ]
       ]
      ],
      [
       [
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.381
        ],
        [
         114.32,
         22.382
        ],
        [
         114.319,
         22.382
        ]
       ]
      ],
      [
       [
        [
         114.372,
         22.323
        ],
        [
         114.373,
         22.324
        ],
        [
         114.372,
         22.324
        ],
        [
         114.372,
         22.323
        ]
       ]
      ],
      [
       [
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
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
         113.554,
         22.107
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
         22.107
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
        112.54,
        23.116
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
   112.54,
   21.2,
   114.54,
   23.2
  ]
 }
};
