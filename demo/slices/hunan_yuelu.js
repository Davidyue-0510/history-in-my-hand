// 本文件由 tools/build.py 自动生成（切片 hunan_yuelu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hunan_yuelu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hunan_yuelu"] = {
 "meta": {
  "kind": "thought",
  "region": "jiangnan",
  "province": "hunan",
  "title": "宋·岳麓书院与湖湘学（宋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "tanzhou",
  "dossier_event": "event:ev_hunan_yuelu_01",
  "vocab_pack": "inline:hunan_yuelu",
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
    "note": "宋·岳麓书院与湖湘学（宋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·岳麓书院与湖湘学（宋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·岳麓书院与湖湘学（宋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·岳麓书院与湖湘学（宋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   4,
   5,
   6
  ],
  "page": "county.html?scene=hunan_yuelu",
  "key": "hunan_yuelu",
  "scene_id": "hunan_yuelu"
 },
 "sources": [
  {
   "id": "yuelu_shuyuan",
   "title": "《岳麓书院志》",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "朱熹、张栻",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "tanzhou",
   "name": "潭州",
   "type": "city",
   "modern": "今中国湖南省长沙市",
   "note": "岳麓书院所在地",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 112.94,
   "lat": 28.23,
   "geo_note": "今湖南长沙（唐潭州）",
   "elev": 42
  },
  {
   "id": "yuelu_shuyuan",
   "name": "岳麓书院",
   "type": "yi",
   "modern": "今中国湖南省长沙市岳麓区",
   "note": "四大书院之一",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 112.93,
   "lat": 28.17,
   "geo_note": "今长沙岳麓区岳麓书院",
   "elev": 41
  }
 ],
 "persons": [
  {
   "id": "HUN__p01",
   "name": "朱熹",
   "role": "南宋理学家",
   "note": "与张栻会讲于岳麓书院",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HUN__p02",
   "name": "张栻",
   "role": "南宋理学家，湖湘学派代表",
   "note": "主持岳麓书院教事",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HUN_001",
   "subject": "event:ev_hunan_yuelu_01",
   "predicate": "建置时间",
   "value_text": "北宋开宝中创建",
   "time": {
    "era_text": "北宋开宝中",
    "start": "0976"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "北宋开宝中，潭州建岳麓书院",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "北宋开宝中，潭州建岳麓书院",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_002",
   "subject": "event:ev_hunan_yuelu_01",
   "predicate": "书院地位",
   "value_text": "列为四大书院之一",
   "time": {
    "era_text": "北宋开宝中",
    "start": "0976"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "为四大书院之一",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "为四大书院之一",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_003",
   "subject": "event:ev_hunan_yuelu_02",
   "predicate": "会讲人物",
   "value_text": "朱熹与张栻会讲",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "南宋朱张会讲",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "南宋朱张会讲",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_004",
   "subject": "event:ev_hunan_yuelu_02",
   "predicate": "学派兴起",
   "value_text": "湖湘学派蔚兴",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "湖湘学派蔚兴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "湖湘学派蔚兴",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_005",
   "subject": "event:ev_hunan_yuelu_02",
   "predicate": "学术主张",
   "value_text": "主张经世务实、涵养心性",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "主张经世务实、涵养心性",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "主张经世务实、涵养心性",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_006",
   "subject": "place:yuelu_shuyuan",
   "predicate": "藏书规模",
   "value_text": "藏书万卷",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "藏书万卷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "藏书万卷",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_007",
   "subject": "place:yuelu_shuyuan",
   "predicate": "讲学活动",
   "value_text": "聚徒讲学",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "书院聚徒讲学",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "书院聚徒讲学",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_008",
   "subject": "place:yuelu_shuyuan",
   "predicate": "后世影响",
   "value_text": "湘学经世之风绵延后世",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "湘学经世之风绵延后世",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "湘学经世之风绵延后世",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_009",
   "subject": "place:tanzhou",
   "predicate": "文教影响",
   "value_text": "长沙文教因之鼎盛",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "tanzhou",
   "source": "yuelu_shuyuan",
   "quote": "长沙文教因之鼎盛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "长沙文教因之鼎盛",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_010",
   "subject": "event:ev_hunan_yuelu_02",
   "predicate": "学派传承",
   "value_text": "湖湘学派传承脉络待考",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "湖湘学派蔚兴",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "lead": {
    "where": "岳麓书院相关史料",
    "skills": [
     "宋史",
     "学术史"
    ],
    "accept": "补充学派传承具体谱系"
   },
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "湖湘学派蔚兴",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_011",
   "subject": "event:ev_hunan_yuelu_01",
   "predicate": "创建背景",
   "value_text": "创建背景与官方支持待考",
   "time": {
    "era_text": "北宋开宝中",
    "start": "0976"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "北宋开宝中，潭州建岳麓书院",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "北宋地方志",
    "skills": [
     "历史地理"
    ],
    "accept": "确认创建者及官方背景"
   },
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "北宋开宝中，潭州建岳麓书院",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "HUN_012",
   "subject": "event:ev_hunan_yuelu_02",
   "predicate": "会讲影响",
   "value_text": "会讲具体内容记载不详",
   "time": {
    "era_text": "南宋",
    "start": "1167"
   },
   "place": "yuelu_shuyuan",
   "source": "yuelu_shuyuan",
   "quote": "南宋朱张会讲",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "lead": {
    "where": "朱子文集",
    "skills": [
     "文献学"
    ],
    "accept": "补充会讲讲学内容"
   },
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "南宋朱张会讲",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HUN_010",
  "HUN_011",
  "HUN_012"
 ],
 "events": [
  {
   "id": "ev_hunan_yuelu_01",
   "subject": "event:ev_hunan_yuelu_01",
   "year": 976,
   "era": "北宋开宝中",
   "title": "岳麓书院创建",
   "kind": "建置",
   "text": "潭州建岳麓书院",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hunan_yuelu_02",
   "subject": "event:ev_hunan_yuelu_02",
   "year": 1167,
   "era": "南宋乾道三年",
   "title": "朱张会讲",
   "kind": "其他",
   "text": "朱熹张栻会讲于书院",
   "_source_idx": 0,
   "_source_name": "《岳麓书院志》",
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
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        111.93,
        27.17
       ],
       [
        111.93,
        29.23
       ],
       [
        113.94,
        29.23
       ],
       [
        113.94,
        27.17
       ],
       [
        111.93,
        27.17
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
         113.94,
         27.17
        ],
        [
         113.94,
         28.019
        ],
        [
         113.936,
         28.019
        ],
        [
         113.914,
         27.991
        ],
        [
         113.864,
         28.005
        ],
        [
         113.845,
         27.972
        ],
        [
         113.823,
         27.982
        ],
        [
         113.752,
         27.934
        ],
        [
         113.728,
         27.875
        ],
        [
         113.756,
         27.86
        ],
        [
         113.763,
         27.799
        ],
        [
         113.699,
         27.741
        ],
        [
         113.697,
         27.72
        ],
        [
         113.652,
         27.664
        ],
        [
         113.607,
         27.625
        ],
        [
         113.609,
         27.585
        ],
        [
         113.579,
         27.545
        ],
        [
         113.583,
         27.525
        ],
        [
         113.627,
         27.5
        ],
        [
         113.591,
         27.468
        ],
        [
         113.598,
         27.429
        ],
        [
         113.632,
         27.405
        ],
        [
         113.606,
         27.389
        ],
        [
         113.617,
         27.346
        ],
        [
         113.658,
         27.347
        ],
        [
         113.7,
         27.332
        ],
        [
         113.728,
         27.35
        ],
        [
         113.873,
         27.385
        ],
        [
         113.873,
         27.347
        ],
        [
         113.854,
         27.305
        ],
        [
         113.873,
         27.29
        ],
        [
         113.847,
         27.222
        ],
        [
         113.805,
         27.17
        ],
        [
         113.94,
         27.17
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.645,
         29.23
        ],
        [
         113.652,
         29.226
        ],
        [
         113.693,
         29.226
        ],
        [
         113.692,
         29.197
        ],
        [
         113.663,
         29.169
        ],
        [
         113.691,
         29.115
        ],
        [
         113.696,
         29.077
        ],
        [
         113.723,
         29.105
        ],
        [
         113.75,
         29.061
        ],
        [
         113.776,
         29.095
        ],
        [
         113.816,
         29.105
        ],
        [
         113.853,
         29.059
        ],
        [
         113.882,
         29.065
        ],
        [
         113.877,
         29.038
        ],
        [
         113.898,
         29.029
        ],
        [
         113.94,
         29.046
        ],
        [
         113.94,
         29.23
        ],
        [
         113.645,
         29.23
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.805,
         27.17
        ],
        [
         113.847,
         27.222
        ],
        [
         113.873,
         27.29
        ],
        [
         113.854,
         27.305
        ],
        [
         113.873,
         27.347
        ],
        [
         113.873,
         27.385
        ],
        [
         113.728,
         27.35
        ],
        [
         113.7,
         27.332
        ],
        [
         113.658,
         27.347
        ],
        [
         113.617,
         27.346
        ],
        [
         113.606,
         27.389
        ],
        [
         113.632,
         27.405
        ],
        [
         113.598,
         27.429
        ],
        [
         113.591,
         27.468
        ],
        [
         113.627,
         27.5
        ],
        [
         113.583,
         27.525
        ],
        [
         113.579,
         27.545
        ],
        [
         113.609,
         27.585
        ],
        [
         113.607,
         27.625
        ],
        [
         113.652,
         27.664
        ],
        [
         113.697,
         27.72
        ],
        [
         113.699,
         27.741
        ],
        [
         113.763,
         27.799
        ],
        [
         113.756,
         27.86
        ],
        [
         113.728,
         27.875
        ],
        [
         113.752,
         27.934
        ],
        [
         113.823,
         27.982
        ],
        [
         113.845,
         27.972
        ],
        [
         113.864,
         28.005
        ],
        [
         113.914,
         27.991
        ],
        [
         113.936,
         28.019
        ],
        [
         113.94,
         28.019
        ],
        [
         113.94,
         29.046
        ],
        [
         113.898,
         29.029
        ],
        [
         113.877,
         29.038
        ],
        [
         113.882,
         29.065
        ],
        [
         113.853,
         29.059
        ],
        [
         113.816,
         29.105
        ],
        [
         113.776,
         29.095
        ],
        [
         113.75,
         29.061
        ],
        [
         113.723,
         29.105
        ],
        [
         113.696,
         29.077
        ],
        [
         113.691,
         29.115
        ],
        [
         113.663,
         29.169
        ],
        [
         113.692,
         29.197
        ],
        [
         113.693,
         29.226
        ],
        [
         113.652,
         29.226
        ],
        [
         113.645,
         29.23
        ],
        [
         111.93,
         29.23
        ],
        [
         111.93,
         27.17
        ],
        [
         113.805,
         27.17
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.905,
        29.031
       ],
       [
        112.801,
        28.927
       ],
       [
        112.693,
        28.874
       ],
       [
        112.545,
        28.838
       ],
       [
        112.351,
        28.861
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.994,
        29.147
       ],
       [
        113.02,
        29.23
       ]
      ]
     ]
    },
    "n": "Yuan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.93,
        28.998
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.905,
        29.031
       ],
       [
        112.994,
        29.147
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.93,
   27.17,
   113.94,
   29.23
  ]
 }
};
