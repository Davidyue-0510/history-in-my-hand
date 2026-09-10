// 本文件由 tools/build.py 自动生成（切片 fujian_xiamen_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fujian_xiamen_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fujian_xiamen_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "jiangnan",
  "province": "fujian",
  "title": "厦门五口通商",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "xiamen",
  "dossier_event": "event:ev_fujian_xiamen_llm_01",
  "vocab_pack": "fujian_xiamen_llm",
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
    "note": "厦门五口通商：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "厦门五口通商：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "厦门五口通商：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "厦门五口通商：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   6
  ],
  "page": "county.html?scene=fujian_xiamen_llm",
  "key": "fujian_xiamen_llm",
  "scene_id": "fujian_xiamen_llm"
 },
 "sources": [
  {
   "id": "fujian_xiamen_src_llm",
   "title": "厦门五口通商史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "xiamen",
   "name": "厦门",
   "type": "port",
   "modern": "今中国福建省厦门市",
   "note": "五口通商口岸之一。坐标据地名志条目：厦门，标 approx。",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.089,
   "lat": 24.479,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：厦门（诚实回填 v0.221）。",
   "elev": 11
  },
  {
   "id": "gulangyu",
   "name": "鼓浪屿",
   "type": "island",
   "modern": "今中国福建省厦门市鼓浪屿",
   "note": "公共地界",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "siming",
   "name": "思明",
   "type": "region",
   "modern": "今中国福建省厦门市思明区",
   "note": "厦门旧称",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "FUJ__p01",
   "name": "耆英",
   "role": "清钦差大臣",
   "note": "签订《南京条约》",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "FUJ__p02",
   "name": "璞鼎查",
   "role": "英国全权代表",
   "note": "签订《南京条约》",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "FUJ__p03",
   "name": "道光帝",
   "role": "清朝皇帝",
   "note": "批准条约",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "FUJ_001",
   "subject": "event:ev_fujian_xiamen_llm_01",
   "predicate": "开埠口岸",
   "value_text": "厦门为五口通商之一",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "开五口通商，厦门（思明）为其中之一",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开五口通商，厦门（思明）为其中之一",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_002",
   "subject": "event:ev_fujian_xiamen_llm_02",
   "predicate": "开埠时间",
   "value_text": "1843年厦门正式开埠",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "1843年厦门正式开埠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1843年厦门正式开埠",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_003",
   "subject": "place:gulangyu",
   "predicate": "公共地界",
   "value_text": "鼓浪屿成为公共地界",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "gulangyu",
   "source": "fujian_xiamen_src_llm",
   "quote": "鼓浪屿旋成公共地界",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鼓浪屿旋成公共地界",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_004",
   "subject": "event:ev_fujian_xiamen_llm_03",
   "predicate": "领事馆设立",
   "value_text": "英、美、法等设领事馆",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "英、美、法等设领事馆与洋行",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英、美、法等设领事馆与洋行",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_005",
   "subject": "place:xiamen",
   "predicate": "经济地位",
   "value_text": "厦门成东南外贸与侨汇枢纽",
   "time": {
    "era_text": "道光二十三年后",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "厦门遂为东南外贸与侨汇枢纽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "厦门遂为东南外贸与侨汇枢纽",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_006",
   "subject": "place:xiamen",
   "predicate": "近代设施",
   "value_text": "近代学堂、医院、铁路兴办",
   "time": {
    "era_text": "道光二十三年后",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "近代学堂、医院、铁路相继兴办",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "近代学堂、医院、铁路相继兴办",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_007",
   "subject": "place:xiamen",
   "predicate": "半殖民地印记",
   "value_text": "厦门载半殖民地通商印记",
   "time": {
    "era_text": "道光二十三年后",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "亦载半殖民地通商印记",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "亦载半殖民地通商印记",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_008",
   "subject": "event:ev_fujian_xiamen_llm_01",
   "predicate": "条约性质",
   "value_text": "《南京条约》为不平等条约",
   "time": {
    "era_text": "道光二十二年",
    "start": "1842-01-01",
    "end": "1842-12-31",
    "gregorian_year": 1842
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "鸦片战争后，1842年《南京条约》",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "empire",
   "note": "学界共识",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鸦片战争后，1842年《南京条约》",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_009",
   "subject": "event:ev_fujian_xiamen_llm_02",
   "predicate": "开埠影响",
   "value_text": "开埠促进厦门近代化",
   "time": {
    "era_text": "道光二十三年后",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "近代学堂、医院、铁路相继兴办",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "近代化进程",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "近代学堂、医院、铁路相继兴办",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_010",
   "subject": "place:gulangyu",
   "predicate": "公共地界形成",
   "value_text": "鼓浪屿公共地界形成原因",
   "time": {
    "era_text": "道光二十三年",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "gulangyu",
   "source": "fujian_xiamen_src_llm",
   "quote": "鼓浪屿旋成公共地界",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "具体过程不详",
   "dims": [
    6
   ],
   "lead": {
    "where": "鼓浪屿",
    "skills": [
     "历史档案",
     "外交史"
    ],
    "accept": "公共地界形成机制"
   },
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鼓浪屿旋成公共地界",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_011",
   "subject": "place:xiamen",
   "predicate": "侨汇枢纽",
   "value_text": "侨汇枢纽地位形成时间",
   "time": {
    "era_text": "道光二十三年后",
    "start": "1843-01-01",
    "end": "1843-12-31",
    "gregorian_year": 1843
   },
   "place": "xiamen",
   "source": "fujian_xiamen_src_llm",
   "quote": "侨汇枢纽",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "具体数据缺失",
   "dims": [
    6
   ],
   "lead": {
    "where": "厦门",
    "skills": [
     "经济史",
     "华侨史"
    ],
    "accept": "侨汇规模与影响"
   },
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "侨汇枢纽",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FUJ_010",
  "FUJ_011"
 ],
 "events": [
  {
   "id": "ev_fujian_xiamen_llm_01",
   "subject": "event:ev_fujian_xiamen_llm_01",
   "year": 1842,
   "era": "道光二十二年",
   "title": "《南京条约》签订",
   "kind": "外交",
   "text": "开五口通商，厦门为其中之一",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_fujian_xiamen_llm_02",
   "subject": "event:ev_fujian_xiamen_llm_02",
   "year": 1843,
   "era": "道光二十三年",
   "title": "厦门开埠",
   "kind": "行政",
   "text": "正式开埠，鼓浪屿成公共地界",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_fujian_xiamen_llm_03",
   "subject": "event:ev_fujian_xiamen_llm_03",
   "year": 1843,
   "era": "道光二十三年",
   "title": "列强设领事馆",
   "kind": "外交",
   "text": "英、美、法等设领事馆与洋行",
   "_source_idx": 0,
   "_source_name": "厦门五口通商史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "xiamen",
   "party": "后世官修",
   "start": 1843,
   "end": 1949,
   "basis": "auto: 场景主地点 xiamen 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "xiamen",
   "name": "厦门",
   "lon": 118.089,
   "lat": 24.479,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1843,
  1949
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
       118.339,
       24.469
      ],
      [
       118.287,
       24.477
      ],
      [
       118.295,
       24.436
      ],
      [
       118.433,
       24.414
      ],
      [
       118.451,
       24.456
      ],
      [
       118.407,
       24.522
      ],
      [
       118.339,
       24.469
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
       118.077,
       24.501
      ],
      [
       118.089,
       24.489
      ],
      [
       118.091,
       24.446
      ],
      [
       118.15,
       24.436
      ],
      [
       118.183,
       24.496
      ],
      [
       118.171,
       24.519
      ],
      [
       118.104,
       24.552
      ],
      [
       118.093,
       24.541
      ],
      [
       118.077,
       24.501
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
        117.089,
        23.581
       ],
       [
        117.148,
        23.599
       ],
       [
        117.225,
        23.647
       ],
       [
        117.291,
        23.714
       ],
       [
        117.331,
        23.709
       ],
       [
        117.347,
        23.636
       ],
       [
        117.368,
        23.589
       ],
       [
        117.417,
        23.621
       ],
       [
        117.462,
        23.736
       ],
       [
        117.46,
        23.771
       ],
       [
        117.433,
        23.792
       ],
       [
        117.466,
        23.841
       ],
       [
        117.579,
        23.857
       ],
       [
        117.628,
        23.837
       ],
       [
        117.668,
        23.939
       ],
       [
        117.742,
        24.015
       ],
       [
        117.839,
        24.012
       ],
       [
        117.904,
        24.106
       ],
       [
        118.056,
        24.246
       ],
       [
        118.051,
        24.327
       ],
       [
        118.024,
        24.38
       ],
       [
        117.879,
        24.396
       ],
       [
        117.848,
        24.432
       ],
       [
        117.843,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.935,
        24.474
       ],
       [
        118.006,
        24.482
       ],
       [
        118.014,
        24.56
       ],
       [
        118.087,
        24.627
       ],
       [
        118.195,
        24.626
       ],
       [
        118.295,
        24.573
       ],
       [
        118.412,
        24.601
       ],
       [
        118.56,
        24.58
       ],
       [
        118.657,
        24.621
       ],
       [
        118.719,
        24.746
       ],
       [
        118.692,
        24.782
       ],
       [
        118.64,
        24.809
       ],
       [
        118.637,
        24.836
       ],
       [
        118.708,
        24.85
       ],
       [
        118.822,
        24.911
       ],
       [
        118.909,
        24.929
       ],
       [
        118.956,
        25.005
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.089,
        25.218
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
        118.407,
        24.522
       ],
       [
        118.451,
        24.456
       ],
       [
        118.433,
        24.414
       ],
       [
        118.295,
        24.436
       ],
       [
        118.287,
        24.477
       ],
       [
        118.339,
        24.469
       ],
       [
        118.407,
        24.522
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
        118.183,
        24.496
       ],
       [
        118.15,
        24.436
       ],
       [
        118.091,
        24.446
       ],
       [
        118.089,
        24.489
       ],
       [
        118.077,
        24.501
       ],
       [
        118.093,
        24.541
       ],
       [
        118.104,
        24.552
       ],
       [
        118.171,
        24.519
       ],
       [
        118.183,
        24.496
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
        117.089,
        25.479
       ],
       [
        119.089,
        25.479
       ],
       [
        119.089,
        25.218
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.956,
        25.005
       ],
       [
        118.909,
        24.929
       ],
       [
        118.822,
        24.911
       ],
       [
        118.708,
        24.85
       ],
       [
        118.637,
        24.836
       ],
       [
        118.64,
        24.809
       ],
       [
        118.692,
        24.782
       ],
       [
        118.719,
        24.746
       ],
       [
        118.657,
        24.621
       ],
       [
        118.56,
        24.58
       ],
       [
        118.412,
        24.601
       ],
       [
        118.295,
        24.573
       ],
       [
        118.195,
        24.626
       ],
       [
        118.087,
        24.627
       ],
       [
        118.014,
        24.56
       ],
       [
        118.006,
        24.482
       ],
       [
        117.935,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.843,
        24.474
       ],
       [
        117.848,
        24.432
       ],
       [
        117.879,
        24.396
       ],
       [
        118.024,
        24.38
       ],
       [
        118.051,
        24.327
       ],
       [
        118.056,
        24.246
       ],
       [
        117.904,
        24.106
       ],
       [
        117.839,
        24.012
       ],
       [
        117.742,
        24.015
       ],
       [
        117.668,
        23.939
       ],
       [
        117.628,
        23.837
       ],
       [
        117.579,
        23.857
       ],
       [
        117.466,
        23.841
       ],
       [
        117.433,
        23.792
       ],
       [
        117.46,
        23.771
       ],
       [
        117.462,
        23.736
       ],
       [
        117.417,
        23.621
       ],
       [
        117.368,
        23.589
       ],
       [
        117.347,
        23.636
       ],
       [
        117.331,
        23.709
       ],
       [
        117.291,
        23.714
       ],
       [
        117.225,
        23.647
       ],
       [
        117.148,
        23.599
       ],
       [
        117.089,
        23.581
       ],
       [
        117.089,
        25.479
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
         119.005,
         24.97
        ],
        [
         118.989,
         24.974
        ],
        [
         119.024,
         25.044
        ],
        [
         119.017,
         25.058
        ],
        [
         118.975,
         25.025
        ],
        [
         118.945,
         25.029
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.089,
         25.101
        ],
        [
         119.089,
         25.479
        ],
        [
         117.089,
         25.479
        ],
        [
         117.089,
         23.671
        ],
        [
         117.124,
         23.647
        ],
        [
         117.147,
         23.654
        ],
        [
         117.193,
         23.629
        ],
        [
         117.193,
         23.562
        ],
        [
         117.291,
         23.571
        ],
        [
         117.302,
         23.55
        ],
        [
         117.387,
         23.555
        ],
        [
         117.464,
         23.585
        ],
        [
         117.455,
         23.628
        ],
        [
         117.493,
         23.643
        ],
        [
         117.501,
         23.704
        ],
        [
         117.544,
         23.716
        ],
        [
         117.602,
         23.702
        ],
        [
         117.66,
         23.789
        ],
        [
         117.652,
         23.815
        ],
        [
         117.672,
         23.878
        ],
        [
         117.691,
         23.889
        ],
        [
         117.763,
         23.887
        ],
        [
         117.793,
         23.906
        ],
        [
         117.807,
         23.948
        ],
        [
         117.865,
         24.005
        ],
        [
         117.91,
         24.012
        ],
        [
         117.928,
         24.04
        ],
        [
         117.936,
         24.1
        ],
        [
         118.0,
         24.152
        ],
        [
         118.019,
         24.197
        ],
        [
         118.075,
         24.226
        ],
        [
         118.115,
         24.229
        ],
        [
         118.159,
         24.27
        ],
        [
         118.112,
         24.357
        ],
        [
         118.082,
         24.357
        ],
        [
         118.088,
         24.409
        ],
        [
         118.049,
         24.418
        ],
        [
         118.084,
         24.529
        ],
        [
         118.122,
         24.57
        ],
        [
         118.151,
         24.584
        ],
        [
         118.169,
         24.56
        ],
        [
         118.243,
         24.512
        ],
        [
         118.375,
         24.536
        ],
        [
         118.364,
         24.568
        ],
        [
         118.444,
         24.615
        ],
        [
         118.513,
         24.608
        ],
        [
         118.557,
         24.573
        ],
        [
         118.558,
         24.512
        ],
        [
         118.614,
         24.522
        ],
        [
         118.68,
         24.582
        ],
        [
         118.687,
         24.634
        ],
        [
         118.661,
         24.622
        ],
        [
         118.653,
         24.654
        ],
        [
         118.67,
         24.68
        ],
        [
         118.704,
         24.665
        ],
        [
         118.779,
         24.744
        ],
        [
         118.786,
         24.777
        ],
        [
         118.651,
         24.809
        ],
        [
         118.648,
         24.844
        ],
        [
         118.702,
         24.865
        ],
        [
         118.699,
         24.849
        ],
        [
         118.749,
         24.842
        ],
        [
         118.808,
         24.871
        ],
        [
         118.834,
         24.854
        ],
        [
         118.864,
         24.888
        ],
        [
         118.933,
         24.871
        ],
        [
         118.989,
         24.879
        ],
        [
         118.987,
         24.898
        ],
        [
         118.933,
         24.907
        ],
        [
         118.919,
         24.933
        ],
        [
         118.946,
         24.954
        ],
        [
         119.014,
         24.941
        ],
        [
         119.033,
         24.961
        ],
        [
         119.033,
         24.962
        ],
        [
         119.007,
         24.963
        ],
        [
         119.005,
         24.97
        ]
       ]
      ],
      [
       [
        [
         118.412,
         24.515
        ],
        [
         118.375,
         24.459
        ],
        [
         118.319,
         24.487
        ],
        [
         118.298,
         24.478
        ],
        [
         118.312,
         24.425
        ],
        [
         118.282,
         24.413
        ],
        [
         118.33,
         24.382
        ],
        [
         118.353,
         24.415
        ],
        [
         118.406,
         24.428
        ],
        [
         118.458,
         24.412
        ],
        [
         118.477,
         24.438
        ],
        [
         118.452,
         24.507
        ],
        [
         118.412,
         24.515
        ]
       ]
      ],
      [
       [
        [
         118.231,
         24.401
        ],
        [
         118.274,
         24.441
        ],
        [
         118.234,
         24.446
        ],
        [
         118.231,
         24.401
        ]
       ]
      ],
      [
       [
        [
         118.204,
         24.505
        ],
        [
         118.192,
         24.537
        ],
        [
         118.145,
         24.561
        ],
        [
         118.093,
         24.541
        ],
        [
         118.069,
         24.463
        ],
        [
         118.084,
         24.436
        ],
        [
         118.143,
         24.421
        ],
        [
         118.194,
         24.463
        ],
        [
         118.204,
         24.505
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.089,
         23.537
        ],
        [
         117.193,
         23.562
        ],
        [
         117.193,
         23.629
        ],
        [
         117.147,
         23.654
        ],
        [
         117.124,
         23.647
        ],
        [
         117.089,
         23.671
        ],
        [
         117.089,
         23.537
        ]
       ]
      ],
      [
       [
        [
         117.132,
         23.479
        ],
        [
         117.129,
         23.483
        ],
        [
         117.123,
         23.479
        ],
        [
         117.132,
         23.479
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   117.089,
   23.479,
   119.089,
   25.479
  ]
 }
};
