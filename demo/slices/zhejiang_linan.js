// 本文件由 tools/build.py 自动生成（切片 zhejiang_linan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhejiang_linan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhejiang_linan"] = {
 "meta": {
  "kind": "exchange",
  "region": "jiangnan",
  "province": "zhejiang",
  "title": "南宋行在临安·江南繁华（宋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "linan",
  "dossier_event": "event:ev_zhejiang_linan_01",
  "vocab_pack": "inline:zhejiang_linan",
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
    "note": "南宋行在临安·江南繁华（宋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南宋行在临安·江南繁华（宋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "南宋行在临安·江南繁华（宋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南宋行在临安·江南繁华（宋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   4,
   5,
   6
  ],
  "page": "county.html?scene=zhejiang_linan",
  "key": "zhejiang_linan",
  "scene_id": "zhejiang_linan"
 },
 "sources": [
  {
   "id": "linan_fanhua",
   "title": "《梦粱录》与临安风物",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "吴自牧",
   "period": "南宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "linan",
   "name": "临安",
   "type": "city",
   "modern": "今中国浙江省杭州市",
   "note": "南宋行在。坐标据地名志条目（modern 含 杭州→杭州），标 gazetteer。",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 120.15,
   "lat": 30.27,
   "geo_match": "gazetteer",
   "geo_note": "坐标据地名志条目（modern 含 杭州→杭州）（诚实回填 v0.221）。",
   "elev": 98
  },
  {
   "id": "jiangnan",
   "name": "江南",
   "type": "region",
   "modern": "今中国长江以南",
   "note": "天下财赋之薮",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "ZHE__p01",
   "name": "宋高宗",
   "role": "南宋皇帝",
   "note": "南渡后定行在于临安",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "ZHE__p02",
   "name": "马可波罗",
   "role": "意大利旅行家",
   "note": "称临安为天城",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "ZHE_001",
   "subject": "event:ev_zhejiang_linan_01",
   "predicate": "南渡定都",
   "value_text": "宋室南迁，以杭州为行在",
   "time": {
    "era_text": "靖康二年",
    "start": "1127-01-01",
    "end": "1127-12-31",
    "gregorian_year": 1127
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "靖康南渡，宋室播迁，以杭州为行在",
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
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "靖康南渡，宋室播迁，以杭州为行在",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_002",
   "subject": "event:ev_zhejiang_linan_02",
   "predicate": "升府",
   "value_text": "升杭州为临安府",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "升临安府",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "升临安府",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_003",
   "subject": "place:linan",
   "predicate": "商业繁荣",
   "value_text": "四方商贾云集，市列珠玑",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "四方商贾云集，市列珠玑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "四方商贾云集，市列珠玑",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_004",
   "subject": "place:linan",
   "predicate": "文化娱乐",
   "value_text": "瓦舍勾栏，百戏繁盛",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "瓦舍勾栏，百戏繁盛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "瓦舍勾栏，百戏繁盛",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_005",
   "subject": "place:linan",
   "predicate": "交通漕运",
   "value_text": "运河漕运通达，市舶司互市",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "运河漕运通达，海上市舶司互市",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "运河漕运通达，海上市舶司互市",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_006",
   "subject": "person:ZHE__p02",
   "predicate": "评价",
   "value_text": "马可波罗叹为天城",
   "time": {
    "era_text": "元",
    "start": "1275"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "马可波罗叹为天城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "马可波罗叹为天城",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_007",
   "subject": "place:jiangnan",
   "predicate": "经济地位",
   "value_text": "江南为天下财赋之薮",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "jiangnan",
   "source": "linan_fanhua",
   "quote": "江南自此为天下财赋之薮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "江南自此为天下财赋之薮",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_008",
   "subject": "place:linan",
   "predicate": "人口规模",
   "value_text": "户盈罗绮，人口众多",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "户盈罗绮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "户盈罗绮",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_009",
   "subject": "place:linan",
   "predicate": "海外贸易",
   "value_text": "市舶司管理海外贸易",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "海上市舶司互市",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "海上市舶司互市",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_010",
   "subject": "place:linan",
   "predicate": "城市景观",
   "value_text": "市列珠玑，繁华富庶",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "市列珠玑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "市列珠玑",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_011",
   "subject": "place:linan",
   "predicate": "城市地位",
   "value_text": "行在非正式都城",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "以杭州为行在",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "行在名义上非正式都城",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "以杭州为行在",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_012",
   "subject": "place:linan",
   "predicate": "城市人口",
   "value_text": "具体人口数未载",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "linan",
   "source": "linan_fanhua",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体人口",
   "dims": [
    4
   ],
   "lead": {
    "where": "临安府志",
    "skills": [
     "历史人口学"
    ],
    "accept": "临安人口峰值"
   },
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "ZHE_012"
 ],
 "events": [
  {
   "id": "ev_zhejiang_linan_01",
   "subject": "event:ev_zhejiang_linan_01",
   "year": 1127,
   "era": "靖康二年",
   "title": "靖康南渡",
   "kind": "其他",
   "text": "宋室南迁，以杭州为行在",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zhejiang_linan_02",
   "subject": "event:ev_zhejiang_linan_02",
   "year": 1138,
   "era": "绍兴八年",
   "title": "升临安府",
   "kind": "建置",
   "text": "升杭州为临安府",
   "_source_idx": 0,
   "_source_name": "《梦粱录》与临安风物",
   "_source_party": "宋官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
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
   "宋官修"
  ],
  "party_bucket": {
   "宋官修": "宋官修"
  },
  "party_colors": {
   "宋官修": "#A0473A"
  },
  "factions": {
   "f_宋官修": {
    "name": "宋官修",
    "macro_party": "宋官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_宋官修": "#A0473A"
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
        29.27
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
        29.27
       ],
       [
        119.15,
        29.27
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
         29.27
        ],
        [
         121.15,
         29.27
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
         29.27
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
   29.27,
   121.15,
   31.27
  ]
 }
};
