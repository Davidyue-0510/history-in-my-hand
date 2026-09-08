// 本文件由 tools/build.py 自动生成（切片 shanghai_kaibu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanghai_kaibu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanghai_kaibu"] = {
 "meta": {
  "kind": "exchange",
  "region": "jiangnan",
  "province": "shanghai",
  "title": "近代·上海开埠（清季）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "shanghai",
  "dossier_event": "event:ev_shanghai_kaibu_01",
  "vocab_pack": "inline:shanghai_kaibu",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing_modern",
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
    "note": "近代·上海开埠（清季）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "近代·上海开埠（清季）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "近代·上海开埠（清季）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "近代·上海开埠（清季）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shanghai_kaibu",
  "key": "shanghai_kaibu",
  "scene_id": "shanghai_kaibu"
 },
 "sources": [
  {
   "id": "nanjing_treaty",
   "title": "《南京条约》与上海开埠",
   "party": "清官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "近代史料",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shanghai",
   "name": "上海",
   "type": "city",
   "modern": "今中国上海市",
   "note": "通商口岸",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "guangzhou",
   "name": "广州",
   "type": "city",
   "modern": "今中国广东省广州市",
   "note": "五口之一",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": 113.26,
   "lat": 23.13,
   "geo_note": "康有为故里，今广东广州",
   "elev": 44
  },
  {
   "id": "xiamen",
   "name": "厦门",
   "type": "city",
   "modern": "今中国福建省厦门市",
   "note": "五口之一",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "fuzhou",
   "name": "福州",
   "type": "city",
   "modern": "今中国福建省福州市",
   "note": "五口之一",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "ningbo",
   "name": "宁波",
   "type": "city",
   "modern": "今中国浙江省宁波市",
   "note": "五口之一",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "耆英",
   "role": "清钦差大臣",
   "note": "代表清廷签订《南京条约》",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "璞鼎查",
   "role": "英国全权代表",
   "note": "英方签约代表",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanghai_kaibu_01",
   "predicate": "条约内容",
   "value_text": "五口通商",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "五口通商",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "五口通商",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shanghai_kaibu_02",
   "predicate": "建置",
   "value_text": "设海关",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "次年设海关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "次年设海关",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "place:shanghai",
   "predicate": "地理优势",
   "value_text": "襟江带海，港阔水深",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "襟江带海，港阔水深",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "襟江带海，港阔水深",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "place:shanghai",
   "predicate": "发展速度",
   "value_text": "不数十年成东南都会",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "不数十年，蔚为东南都会",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "不数十年，蔚为东南都会",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "place:shanghai",
   "predicate": "文化影响",
   "value_text": "中西思想交汇",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "中西货物、学制、思想交汇于此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "中西货物、学制、思想交汇于此",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shanghai_kaibu_01",
   "predicate": "签约人物",
   "value_text": "耆英与璞鼎查",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "耆英、璞鼎查",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "耆英、璞鼎查",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:shanghai",
   "predicate": "租界开辟",
   "value_text": "租界渐辟",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "租界渐辟",
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
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "租界渐辟",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:shanghai",
   "predicate": "外商聚集",
   "value_text": "外商麇集",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "外商麇集",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "外商麇集",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shanghai_kaibu_01",
   "predicate": "通商口岸",
   "value_text": "上海等五口",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "上海与广州、厦门、福州、宁波",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "上海与广州、厦门、福州、宁波",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:shanghai",
   "predicate": "经济地位",
   "value_text": "东南都会",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "蔚为东南都会",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "蔚为东南都会",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:shanghai",
   "predicate": "制度引进",
   "value_text": "学制传入",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "学制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "学制",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "place:shanghai",
   "predicate": "贸易发展",
   "value_text": "中西货物交汇",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "中西货物",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "中西货物",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shanghai_kaibu_01",
   "predicate": "历史意义",
   "value_text": "开埠标志",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "五口通商",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "五口通商",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "place:shanghai",
   "predicate": "发展原因",
   "value_text": "港阔水深",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "港阔水深",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "港阔水深",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "place:shanghai",
   "predicate": "史料缺失",
   "value_text": "具体贸易数据未载",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "shanghai",
   "source": "nanjing_treaty",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "lead": {
    "where": "上海海关档案",
    "skills": [
     "经济史",
     "档案学"
    ],
    "accept": "补充贸易数据"
   },
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_015"
 ],
 "events": [
  {
   "id": "ev_shanghai_kaibu_01",
   "subject": "event:ev_shanghai_kaibu_01",
   "year": 1842,
   "era": "道光二十二年",
   "title": "南京条约签订",
   "kind": "外交",
   "text": "中英订约，五口通商",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanghai_kaibu_02",
   "subject": "event:ev_shanghai_kaibu_02",
   "year": 1843,
   "era": "道光二十三年",
   "title": "上海设关",
   "kind": "行政",
   "text": "设海关，外商始集",
   "_source_idx": 0,
   "_source_name": "《南京条约》与上海开埠",
   "_source_party": "清官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "guangzhou",
   "party": "清官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 清官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "guangzhou",
   "name": "广州",
   "lon": 113.26,
   "lat": 23.13,
   "region": "jiangnan"
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
   "清官修"
  ],
  "party_bucket": {
   "清官修": "清官修"
  },
  "party_colors": {
   "清官修": "#A0473A"
  },
  "factions": {
   "f_清官修": {
    "name": "清官修",
    "macro_party": "清官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_清官修": "#A0473A"
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
