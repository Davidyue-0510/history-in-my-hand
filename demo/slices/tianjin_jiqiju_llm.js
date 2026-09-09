// 本文件由 tools/build.py 自动生成（切片 tianjin_jiqiju_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tianjin_jiqiju_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tianjin_jiqiju_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "huabei",
  "province": "tianjin",
  "title": "清·天津机器局",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "tianjin",
  "dossier_event": "event:ev_tianjin_jiqiju_llm_01",
  "vocab_pack": "inline:tianjin_jiqiju_llm",
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
    "note": "清·天津机器局：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·天津机器局：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "清·天津机器局：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·天津机器局：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=tianjin_jiqiju_llm",
  "key": "tianjin_jiqiju_llm",
  "scene_id": "tianjin_jiqiju_llm"
 },
 "sources": [
  {
   "id": "tianjin_jiqiju_src",
   "title": "清史稿·洋务运动（天津机器局）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "赵尔巽等",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "tianjin",
   "name": "天津",
   "type": "city",
   "modern": "中国天津市",
   "note": "机器局所在地",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.2,
   "lat": 39.13,
   "geo_note": "平津战役·天津攻坚战",
   "elev": 8
  },
  {
   "id": "jiagujia",
   "name": "贾家沽",
   "type": "yi",
   "modern": "中国天津市东郊",
   "note": "东局所在",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.3,
   "lat": 39.1,
   "geo_note": "今天津市东郊",
   "elev": 8
  },
  {
   "id": "haiguangsi",
   "name": "海光寺",
   "type": "yi",
   "modern": "中国天津市南开区",
   "note": "西局所在",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.17,
   "lat": 39.13,
   "geo_note": "今天津南开区海光寺",
   "elev": 7
  }
 ],
 "persons": [
  {
   "id": "TIA__p01",
   "name": "李鸿章",
   "role": "直隶总督兼北洋大臣",
   "note": "督办天津机器局",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TIA__p02",
   "name": "总理各国事务衙门",
   "role": "中央外交机构",
   "note": "奏设机器局",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TIA_001",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "奏设",
   "value_text": "总理衙门奏设天津机器局",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "总理各国事务衙门奏设天津机器局",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "总理各国事务衙门奏设天津机器局",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_002",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "督办",
   "value_text": "命李鸿章督办",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "命李鸿章督办",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "命李鸿章督办",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_003",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "购置设备",
   "value_text": "购西洋机器、募洋匠",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "购西洋机器、募洋匠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    3
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "购西洋机器、募洋匠",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_004",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "产品",
   "value_text": "制造枪炮、火药、弹丸",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "制造枪炮、火药、弹丸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "制造枪炮、火药、弹丸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_005",
   "subject": "event:ev_tianjin_jiqiju_llm_02",
   "predicate": "东局职能",
   "value_text": "东局造枪炮、轮船机器",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "jiagujia",
   "source": "tianjin_jiqiju_src",
   "quote": "城东贾家沽设东局，专造枪炮、轮船机器",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "城东贾家沽设东局，专造枪炮、轮船机器",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_006",
   "subject": "event:ev_tianjin_jiqiju_llm_02",
   "predicate": "西局职能",
   "value_text": "西局仿造洋式火药、铜帽、洋枪",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "haiguangsi",
   "source": "tianjin_jiqiju_src",
   "quote": "城西海光寺设西局，仿造洋式火药、铜帽、洋枪",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "城西海光寺设西局，仿造洋式火药、铜帽、洋枪",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_007",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "影响",
   "value_text": "北洋军火渐充",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "自是北洋军火渐充",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自是北洋军火渐充",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_008",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "意义",
   "value_text": "洋务制造之政兴",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "洋务制造之政兴焉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洋务制造之政兴焉",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_009",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "经费来源",
   "value_text": "未明言经费来源",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "档案或奏折",
    "skills": [
     "经济史"
    ],
    "accept": "查得拨款数额"
   },
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_010",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "洋匠人数",
   "value_text": "未载洋匠人数",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "lead": {
    "where": "海关报告",
    "skills": [
     "技术史"
    ],
    "accept": "查得雇佣记录"
   },
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_011",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "产量",
   "value_text": "未载具体产量",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "lead": {
    "where": "局厂档案",
    "skills": [
     "经济史"
    ],
    "accept": "查得产量数据"
   },
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TIA_012",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "predicate": "评价",
   "value_text": "时人评价待考",
   "time": {
    "era_text": "同治六年",
    "start": "1867-01-01",
    "end": "1867-12-31",
    "gregorian_year": 1867
   },
   "place": "tianjin",
   "source": "tianjin_jiqiju_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "需查文集",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TIA_009",
  "TIA_010",
  "TIA_011"
 ],
 "events": [
  {
   "id": "ev_tianjin_jiqiju_llm_01",
   "subject": "event:ev_tianjin_jiqiju_llm_01",
   "year": 1867,
   "era": "同治六年",
   "title": "奏设天津机器局",
   "kind": "建置",
   "text": "总理衙门奏设，命李鸿章督办",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tianjin_jiqiju_llm_02",
   "subject": "event:ev_tianjin_jiqiju_llm_02",
   "year": 1867,
   "era": "同治六年",
   "title": "分设东西两局",
   "kind": "建置",
   "text": "东局造枪炮，西局造火药",
   "_source_idx": 0,
   "_source_name": "清史稿·洋务运动（天津机器局）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "tianjin",
   "party": "后世官修",
   "start": 1867,
   "end": 1900,
   "timeline": "main"
  },
  {
   "place_id": "jiagujia",
   "party": "后世官修",
   "start": 1867,
   "end": 1900,
   "timeline": "main"
  },
  {
   "place_id": "haiguangsi",
   "party": "后世官修",
   "start": 1867,
   "end": 1900,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "tianjin",
   "name": "天津",
   "lon": 117.2,
   "lat": 39.13,
   "region": "huabei"
  },
  {
   "place_id": "jiagujia",
   "name": "贾家沽",
   "lon": 117.3,
   "lat": 39.1,
   "region": "huabei"
  },
  {
   "place_id": "haiguangsi",
   "name": "海光寺",
   "lon": 117.17,
   "lat": 39.13,
   "region": "huabei"
  }
 ],
 "control_years": [
  1867,
  1900
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
        118.3,
        38.136
       ],
       [
        118.015,
        38.183
       ],
       [
        117.767,
        38.312
       ],
       [
        117.656,
        38.424
       ],
       [
        117.558,
        38.625
       ],
       [
        117.554,
        38.691
       ],
       [
        117.617,
        38.853
       ],
       [
        117.785,
        39.134
       ],
       [
        117.866,
        39.191
       ],
       [
        118.041,
        39.227
       ],
       [
        118.148,
        39.195
       ],
       [
        118.298,
        39.067
       ],
       [
        118.3,
        39.068
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
        116.17,
        38.1
       ],
       [
        116.17,
        40.13
       ],
       [
        118.3,
        40.13
       ],
       [
        118.3,
        39.068
       ],
       [
        118.298,
        39.067
       ],
       [
        118.148,
        39.195
       ],
       [
        118.041,
        39.227
       ],
       [
        117.866,
        39.191
       ],
       [
        117.785,
        39.134
       ],
       [
        117.617,
        38.853
       ],
       [
        117.554,
        38.691
       ],
       [
        117.558,
        38.625
       ],
       [
        117.656,
        38.424
       ],
       [
        117.767,
        38.312
       ],
       [
        118.015,
        38.183
       ],
       [
        118.3,
        38.136
       ],
       [
        118.3,
        38.1
       ],
       [
        116.17,
        38.1
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
         116.17,
         40.13
        ],
        [
         116.17,
         39.586
        ],
        [
         116.199,
         39.589
        ],
        [
         116.241,
         39.564
        ],
        [
         116.258,
         39.5
        ],
        [
         116.307,
         39.488
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.435,
         39.443
        ],
        [
         116.455,
         39.453
        ],
        [
         116.444,
         39.482
        ],
        [
         116.412,
         39.483
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.51
        ],
        [
         116.438,
         39.527
        ],
        [
         116.478,
         39.535
        ],
        [
         116.473,
         39.553
        ],
        [
         116.508,
         39.551
        ],
        [
         116.524,
         39.596
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.665,
         39.606
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.749,
         39.62
        ],
        [
         116.791,
         39.596
        ],
        [
         116.812,
         39.616
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.677
        ],
        [
         116.906,
         39.688
        ],
        [
         116.89,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.917,
         39.731
        ],
        [
         116.902,
         39.764
        ],
        [
         116.949,
         39.779
        ],
        [
         116.918,
         39.846
        ],
        [
         116.908,
         39.832
        ],
        [
         116.866,
         39.844
        ],
        [
         116.812,
         39.89
        ],
        [
         116.784,
         39.891
        ],
        [
         116.783,
         39.948
        ],
        [
         116.758,
         39.968
        ],
        [
         116.781,
         40.035
        ],
        [
         116.82,
         40.028
        ],
        [
         116.831,
         40.051
        ],
        [
         116.868,
         40.042
        ],
        [
         116.928,
         40.055
        ],
        [
         116.945,
         40.041
        ],
        [
         117.025,
         40.03
        ],
        [
         117.052,
         40.06
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.14,
         40.064
        ],
        [
         117.16,
         40.077
        ],
        [
         117.204,
         40.07
        ],
        [
         117.21,
         40.082
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.274,
         40.106
        ],
        [
         117.3,
         40.13
        ],
        [
         116.17,
         40.13
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.766,
         39.401
        ],
        [
         117.847,
         39.408
        ],
        [
         117.872,
         39.412
        ],
        [
         117.87,
         39.455
        ],
        [
         117.9,
         39.474
        ],
        [
         117.912,
         39.517
        ],
        [
         117.912,
         39.517
        ],
        [
         117.905,
         39.534
        ],
        [
         117.934,
         39.574
        ],
        [
         117.868,
         39.597
        ],
        [
         117.83,
         39.59
        ],
        [
         117.767,
         39.599
        ],
        [
         117.754,
         39.58
        ],
        [
         117.754,
         39.58
        ],
        [
         117.745,
         39.548
        ],
        [
         117.716,
         39.53
        ],
        [
         117.707,
         39.576
        ],
        [
         117.685,
         39.589
        ],
        [
         117.654,
         39.575
        ],
        [
         117.637,
         39.603
        ],
        [
         117.663,
         39.636
        ],
        [
         117.669,
         39.667
        ],
        [
         117.627,
         39.704
        ],
        [
         117.578,
         39.727
        ],
        [
         117.596,
         39.746
        ],
        [
         117.561,
         39.755
        ],
        [
         117.546,
         39.776
        ],
        [
         117.562,
         39.8
        ],
        [
         117.529,
         39.859
        ],
        [
         117.529,
         39.859
        ],
        [
         117.508,
         39.902
        ],
        [
         117.508,
         39.902
        ],
        [
         117.512,
         39.909
        ],
        [
         117.512,
         39.909
        ],
        [
         117.513,
         39.911
        ],
        [
         117.513,
         39.911
        ],
        [
         117.515,
         39.947
        ],
        [
         117.535,
         39.955
        ],
        [
         117.546,
         39.999
        ],
        [
         117.595,
         39.995
        ],
        [
         117.595,
         39.995
        ],
        [
         117.615,
         39.973
        ],
        [
         117.671,
         39.974
        ],
        [
         117.691,
         39.985
        ],
        [
         117.756,
         39.965
        ],
        [
         117.782,
         39.967
        ],
        [
         117.782,
         39.967
        ],
        [
         117.795,
         39.997
        ],
        [
         117.795,
         39.997
        ],
        [
         117.793,
         40.006
        ],
        [
         117.793,
         40.006
        ],
        [
         117.769,
         40.022
        ],
        [
         117.769,
         40.022
        ],
        [
         117.744,
         40.018
        ],
        [
         117.748,
         40.047
        ],
        [
         117.776,
         40.06
        ],
        [
         117.753,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.675,
         40.082
        ],
        [
         117.656,
         40.11
        ],
        [
         117.656,
         40.11
        ],
        [
         117.654,
         40.115
        ],
        [
         117.654,
         40.115
        ],
        [
         117.652,
         40.123
        ],
        [
         117.652,
         40.123
        ],
        [
         117.644,
         40.13
        ],
        [
         117.3,
         40.13
        ],
        [
         117.274,
         40.106
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.21,
         40.082
        ],
        [
         117.192,
         40.066
        ],
        [
         117.198,
         39.993
        ],
        [
         117.151,
         39.945
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.228,
         39.853
        ],
        [
         117.248,
         39.861
        ],
        [
         117.252,
         39.834
        ],
        [
         117.192,
         39.833
        ],
        [
         117.156,
         39.817
        ],
        [
         117.158,
         39.797
        ],
        [
         117.206,
         39.764
        ],
        [
         117.162,
         39.749
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.178,
         39.645
        ],
        [
         117.153,
         39.624
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.016,
         39.654
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.688
        ],
        [
         116.906,
         39.677
        ],
        [
         116.85,
         39.668
        ],
        [
         116.812,
         39.616
        ],
        [
         116.808,
         39.576
        ],
        [
         116.787,
         39.554
        ],
        [
         116.82,
         39.529
        ],
        [
         116.821,
         39.482
        ],
        [
         116.785,
         39.466
        ],
        [
         116.832,
         39.436
        ],
        [
         116.876,
         39.435
        ],
        [
         116.84,
         39.413
        ],
        [
         116.84,
         39.378
        ],
        [
         116.818,
         39.374
        ],
        [
         116.829,
         39.339
        ],
        [
         116.871,
         39.358
        ],
        [
         116.89,
         39.338
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.856,
         39.216
        ],
        [
         116.87,
         39.154
        ],
        [
         116.909,
         39.151
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.755,
         39.003
        ],
        [
         116.728,
         38.975
        ],
        [
         116.708,
         38.932
        ],
        [
         116.722,
         38.897
        ],
        [
         116.723,
         38.853
        ],
        [
         116.751,
         38.831
        ],
        [
         116.738,
         38.785
        ],
        [
         116.746,
         38.754
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.859,
         38.741
        ],
        [
         116.877,
         38.681
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         117.039,
         38.688
        ],
        [
         117.068,
         38.681
        ],
        [
         117.055,
         38.639
        ],
        [
         117.071,
         38.608
        ],
        [
         117.11,
         38.585
        ],
        [
         117.151,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.238,
         38.581
        ],
        [
         117.253,
         38.556
        ],
        [
         117.369,
         38.565
        ],
        [
         117.432,
         38.602
        ],
        [
         117.479,
         38.616
        ],
        [
         117.558,
         38.614
        ],
        [
         117.639,
         38.627
        ],
        [
         117.657,
         38.66
        ],
        [
         117.729,
         38.68
        ],
        [
         117.741,
         38.7
        ],
        [
         117.741,
         38.754
        ],
        [
         117.671,
         38.772
        ],
        [
         117.647,
         38.789
        ],
        [
         117.646,
         38.829
        ],
        [
         117.752,
         38.848
        ],
        [
         117.779,
         38.869
        ],
        [
         117.848,
         38.856
        ],
        [
         117.876,
         38.92
        ],
        [
         117.898,
         38.949
        ],
        [
         117.856,
         38.957
        ],
        [
         117.838,
         39.057
        ],
        [
         117.872,
         39.123
        ],
        [
         117.965,
         39.173
        ],
        [
         117.977,
         39.206
        ],
        [
         118.033,
         39.22
        ],
        [
         118.035,
         39.219
        ],
        [
         118.065,
         39.231
        ],
        [
         118.065,
         39.256
        ],
        [
         118.037,
         39.265
        ],
        [
         118.024,
         39.289
        ],
        [
         118.024,
         39.289
        ],
        [
         117.982,
         39.299
        ],
        [
         117.982,
         39.299
        ],
        [
         117.979,
         39.301
        ],
        [
         117.979,
         39.301
        ],
        [
         117.973,
         39.312
        ],
        [
         117.973,
         39.312
        ],
        [
         117.966,
         39.315
        ],
        [
         117.966,
         39.315
        ],
        [
         117.92,
         39.318
        ],
        [
         117.92,
         39.318
        ],
        [
         117.889,
         39.332
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.851,
         39.364
        ],
        [
         117.851,
         39.364
        ],
        [
         117.811,
         39.355
        ],
        [
         117.805,
         39.373
        ],
        [
         117.785,
         39.377
        ],
        [
         117.745,
         39.355
        ],
        [
         117.671,
         39.358
        ],
        [
         117.67,
         39.323
        ],
        [
         117.595,
         39.349
        ],
        [
         117.536,
         39.338
        ],
        [
         117.521,
         39.357
        ],
        [
         117.571,
         39.405
        ],
        [
         117.601,
         39.419
        ],
        [
         117.614,
         39.407
        ],
        [
         117.669,
         39.412
        ],
        [
         117.673,
         39.387
        ],
        [
         117.7,
         39.407
        ],
        [
         117.766,
         39.401
        ]
       ]
      ],
      [
       [
        [
         117.805,
         39.373
        ],
        [
         117.852,
         39.381
        ],
        [
         117.847,
         39.408
        ],
        [
         117.766,
         39.401
        ],
        [
         117.785,
         39.377
        ],
        [
         117.805,
         39.373
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.644,
         40.13
        ],
        [
         117.652,
         40.123
        ],
        [
         117.652,
         40.123
        ],
        [
         117.654,
         40.115
        ],
        [
         117.654,
         40.115
        ],
        [
         117.656,
         40.11
        ],
        [
         117.656,
         40.11
        ],
        [
         117.675,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.753,
         40.082
        ],
        [
         117.776,
         40.06
        ],
        [
         117.748,
         40.047
        ],
        [
         117.744,
         40.018
        ],
        [
         117.769,
         40.022
        ],
        [
         117.769,
         40.022
        ],
        [
         117.793,
         40.006
        ],
        [
         117.793,
         40.006
        ],
        [
         117.795,
         39.997
        ],
        [
         117.795,
         39.997
        ],
        [
         117.782,
         39.967
        ],
        [
         117.782,
         39.967
        ],
        [
         117.756,
         39.965
        ],
        [
         117.691,
         39.985
        ],
        [
         117.671,
         39.974
        ],
        [
         117.615,
         39.973
        ],
        [
         117.595,
         39.995
        ],
        [
         117.595,
         39.995
        ],
        [
         117.546,
         39.999
        ],
        [
         117.535,
         39.955
        ],
        [
         117.515,
         39.947
        ],
        [
         117.513,
         39.911
        ],
        [
         117.513,
         39.911
        ],
        [
         117.512,
         39.909
        ],
        [
         117.512,
         39.909
        ],
        [
         117.508,
         39.902
        ],
        [
         117.508,
         39.902
        ],
        [
         117.529,
         39.859
        ],
        [
         117.529,
         39.859
        ],
        [
         117.562,
         39.8
        ],
        [
         117.546,
         39.776
        ],
        [
         117.561,
         39.755
        ],
        [
         117.596,
         39.746
        ],
        [
         117.578,
         39.727
        ],
        [
         117.627,
         39.704
        ],
        [
         117.669,
         39.667
        ],
        [
         117.663,
         39.636
        ],
        [
         117.637,
         39.603
        ],
        [
         117.654,
         39.575
        ],
        [
         117.685,
         39.589
        ],
        [
         117.707,
         39.576
        ],
        [
         117.716,
         39.53
        ],
        [
         117.745,
         39.548
        ],
        [
         117.754,
         39.58
        ],
        [
         117.754,
         39.58
        ],
        [
         117.767,
         39.599
        ],
        [
         117.83,
         39.59
        ],
        [
         117.868,
         39.597
        ],
        [
         117.934,
         39.574
        ],
        [
         117.905,
         39.534
        ],
        [
         117.912,
         39.517
        ],
        [
         117.912,
         39.517
        ],
        [
         117.9,
         39.474
        ],
        [
         117.87,
         39.455
        ],
        [
         117.872,
         39.412
        ],
        [
         117.847,
         39.408
        ],
        [
         117.852,
         39.381
        ],
        [
         117.805,
         39.373
        ],
        [
         117.811,
         39.355
        ],
        [
         117.851,
         39.364
        ],
        [
         117.851,
         39.364
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.889,
         39.332
        ],
        [
         117.92,
         39.318
        ],
        [
         117.92,
         39.318
        ],
        [
         117.966,
         39.315
        ],
        [
         117.966,
         39.315
        ],
        [
         117.973,
         39.312
        ],
        [
         117.973,
         39.312
        ],
        [
         117.979,
         39.301
        ],
        [
         117.979,
         39.301
        ],
        [
         117.982,
         39.299
        ],
        [
         117.982,
         39.299
        ],
        [
         118.024,
         39.289
        ],
        [
         118.024,
         39.289
        ],
        [
         118.037,
         39.265
        ],
        [
         118.065,
         39.256
        ],
        [
         118.065,
         39.231
        ],
        [
         118.035,
         39.219
        ],
        [
         118.026,
         39.202
        ],
        [
         118.07,
         39.214
        ],
        [
         118.078,
         39.202
        ],
        [
         118.125,
         39.183
        ],
        [
         118.163,
         39.136
        ],
        [
         118.191,
         39.081
        ],
        [
         118.225,
         39.035
        ],
        [
         118.3,
         39.015
        ],
        [
         118.3,
         40.13
        ],
        [
         116.17,
         40.13
        ],
        [
         116.17,
         38.1
        ],
        [
         117.725,
         38.1
        ],
        [
         117.747,
         38.125
        ],
        [
         117.771,
         38.135
        ],
        [
         117.767,
         38.159
        ],
        [
         117.789,
         38.181
        ],
        [
         117.809,
         38.228
        ],
        [
         117.849,
         38.255
        ],
        [
         117.896,
         38.302
        ],
        [
         117.949,
         38.347
        ],
        [
         117.958,
         38.376
        ],
        [
         117.937,
         38.388
        ],
        [
         117.846,
         38.368
        ],
        [
         117.781,
         38.374
        ],
        [
         117.73,
         38.425
        ],
        [
         117.725,
         38.457
        ],
        [
         117.679,
         38.477
        ],
        [
         117.645,
         38.528
        ],
        [
         117.686,
         38.539
        ],
        [
         117.638,
         38.545
        ],
        [
         117.639,
         38.627
        ],
        [
         117.558,
         38.614
        ],
        [
         117.479,
         38.616
        ],
        [
         117.432,
         38.602
        ],
        [
         117.369,
         38.565
        ],
        [
         117.253,
         38.556
        ],
        [
         117.238,
         38.581
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.151,
         38.618
        ],
        [
         117.11,
         38.585
        ],
        [
         117.071,
         38.608
        ],
        [
         117.055,
         38.639
        ],
        [
         117.068,
         38.681
        ],
        [
         117.039,
         38.688
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.877,
         38.681
        ],
        [
         116.859,
         38.741
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.746,
         38.754
        ],
        [
         116.738,
         38.785
        ],
        [
         116.751,
         38.831
        ],
        [
         116.723,
         38.853
        ],
        [
         116.722,
         38.897
        ],
        [
         116.708,
         38.932
        ],
        [
         116.728,
         38.975
        ],
        [
         116.755,
         39.003
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.909,
         39.151
        ],
        [
         116.87,
         39.154
        ],
        [
         116.856,
         39.216
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.89,
         39.338
        ],
        [
         116.871,
         39.358
        ],
        [
         116.829,
         39.339
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.378
        ],
        [
         116.84,
         39.413
        ],
        [
         116.876,
         39.435
        ],
        [
         116.832,
         39.436
        ],
        [
         116.785,
         39.466
        ],
        [
         116.821,
         39.482
        ],
        [
         116.82,
         39.529
        ],
        [
         116.787,
         39.554
        ],
        [
         116.808,
         39.576
        ],
        [
         116.812,
         39.616
        ],
        [
         116.791,
         39.596
        ],
        [
         116.749,
         39.62
        ],
        [
         116.709,
         39.618
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.621,
         39.602
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.508,
         39.551
        ],
        [
         116.473,
         39.553
        ],
        [
         116.478,
         39.535
        ],
        [
         116.438,
         39.527
        ],
        [
         116.444,
         39.51
        ],
        [
         116.402,
         39.528
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.482
        ],
        [
         116.455,
         39.453
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.338,
         39.456
        ],
        [
         116.307,
         39.488
        ],
        [
         116.258,
         39.5
        ],
        [
         116.241,
         39.564
        ],
        [
         116.199,
         39.589
        ],
        [
         116.17,
         39.586
        ],
        [
         116.17,
         40.13
        ],
        [
         117.644,
         40.13
        ]
       ]
      ],
      [
       [
        [
         117.21,
         40.082
        ],
        [
         117.204,
         40.07
        ],
        [
         117.16,
         40.077
        ],
        [
         117.14,
         40.064
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.052,
         40.06
        ],
        [
         117.025,
         40.03
        ],
        [
         116.945,
         40.041
        ],
        [
         116.928,
         40.055
        ],
        [
         116.868,
         40.042
        ],
        [
         116.831,
         40.051
        ],
        [
         116.82,
         40.028
        ],
        [
         116.781,
         40.035
        ],
        [
         116.758,
         39.968
        ],
        [
         116.783,
         39.948
        ],
        [
         116.784,
         39.891
        ],
        [
         116.812,
         39.89
        ],
        [
         116.866,
         39.844
        ],
        [
         116.908,
         39.832
        ],
        [
         116.918,
         39.846
        ],
        [
         116.949,
         39.779
        ],
        [
         116.902,
         39.764
        ],
        [
         116.917,
         39.731
        ],
        [
         116.887,
         39.725
        ],
        [
         116.89,
         39.688
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.964,
         39.643
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         117.016,
         39.654
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.153,
         39.624
        ],
        [
         117.178,
         39.645
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.162,
         39.749
        ],
        [
         117.206,
         39.764
        ],
        [
         117.158,
         39.797
        ],
        [
         117.156,
         39.817
        ],
        [
         117.192,
         39.833
        ],
        [
         117.252,
         39.834
        ],
        [
         117.248,
         39.861
        ],
        [
         117.228,
         39.853
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.151,
         39.945
        ],
        [
         117.198,
         39.993
        ],
        [
         117.192,
         40.066
        ],
        [
         117.21,
         40.082
        ]
       ]
      ],
      [
       [
        [
         117.785,
         39.377
        ],
        [
         117.766,
         39.401
        ],
        [
         117.7,
         39.407
        ],
        [
         117.673,
         39.387
        ],
        [
         117.669,
         39.412
        ],
        [
         117.614,
         39.407
        ],
        [
         117.601,
         39.419
        ],
        [
         117.571,
         39.405
        ],
        [
         117.521,
         39.357
        ],
        [
         117.536,
         39.338
        ],
        [
         117.595,
         39.349
        ],
        [
         117.67,
         39.323
        ],
        [
         117.671,
         39.358
        ],
        [
         117.745,
         39.355
        ],
        [
         117.785,
         39.377
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         118.3,
         38.1
        ],
        [
         118.3,
         38.131
        ],
        [
         118.217,
         38.147
        ],
        [
         118.178,
         38.186
        ],
        [
         118.112,
         38.21
        ],
        [
         118.045,
         38.214
        ],
        [
         118.019,
         38.202
        ],
        [
         117.897,
         38.279
        ],
        [
         117.896,
         38.302
        ],
        [
         117.849,
         38.255
        ],
        [
         117.809,
         38.228
        ],
        [
         117.789,
         38.181
        ],
        [
         117.767,
         38.159
        ],
        [
         117.771,
         38.135
        ],
        [
         117.747,
         38.125
        ],
        [
         117.725,
         38.1
        ],
        [
         118.3,
         38.1
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   116.17,
   38.1,
   118.3,
   40.13
  ]
 }
};
