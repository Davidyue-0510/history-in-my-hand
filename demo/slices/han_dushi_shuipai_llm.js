// 本文件由 tools/build.py 自动生成（切片 han_dushi_shuipai_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["han_dushi_shuipai_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["han_dushi_shuipai_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "huabei",
  "province": "henan",
  "title": "杜诗水排与水力鼓铸（汉·南阳）",
  "dossier_label": "杜诗水排与水力鼓铸（汉·南阳）",
  "subtitle": "杜诗水排与水力鼓铸（汉·南阳）",
  "primary_place": "nanyang",
  "dossier_event": "event:ev_han_dushi_shuipai_llm_02",
  "vocab_pack": "inline:han_dushi_shuipai_llm",
  "terrain_grid": "china_coarse",
  "lead": "杜诗水排与水力鼓铸（汉·南阳）——2技术维加厚（v0.192，han/henan 冷门真实科技主题）。",
  "parties_note": null,
  "subject_names": null,
  "epoch": "han",
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
    "note": "杜诗水排与水力鼓铸（汉·南阳）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "杜诗水排与水力鼓铸（汉·南阳）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "杜诗水排与水力鼓铸（汉·南阳）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "杜诗水排与水力鼓铸（汉·南阳）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=han_dushi_shuipai_llm",
  "key": "han_dushi_shuipai_llm",
  "scene_id": "han_dushi_shuipai_llm"
 },
 "sources": [
  {
   "id": "houhanshu_dushi",
   "title": "《后汉书·杜诗传》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "范晔",
   "period": "刘宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "nanyang",
   "name": "南阳",
   "type": "city",
   "modern": "今中国河南省南阳市",
   "note": "杜诗任太守之地",
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.53,
   "lat": 32.99,
   "geo_note": "汉宗室/光武舂陵起兵，舂陵在今湖北枣阳，郡治宛今河南南阳",
   "elev": 132
  }
 ],
 "persons": [
  {
   "id": "HAN__p01",
   "name": "杜诗",
   "role": "南阳太守",
   "note": "东汉南阳太守，造作水排",
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HAN_001",
   "subject": "person:HAN__p01",
   "predicate": "官职",
   "value_text": "迁南阳太守",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "迁南阳太守",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.475,
   "scale": "province",
   "note": "[alias] person:han__p01 → HAN__p01 (fuzzy_edit_dist_0) | [auto] 补层 inference",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "迁南阳太守",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_002",
   "subject": "person:HAN__p01",
   "predicate": "能力",
   "value_text": "善于计略，省爱民役",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "善于计略，省爱民役",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:han__p01 → HAN__p01 (fuzzy_edit_dist_0)",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "善于计略，省爱民役",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_003",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "技术发明",
   "value_text": "造作水排，铸为农器",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "造作水排，铸为农器",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "造作水排，铸为农器",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_004",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "效率",
   "value_text": "用力少，见功多",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "用力少，见功多",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "用力少，见功多",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_005",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "社会影响",
   "value_text": "百姓便之",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "百姓便之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "百姓便之",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_006",
   "subject": "event:ev_han_dushi_shuipai_llm_03",
   "predicate": "水利建设",
   "value_text": "修治陂池，广拓土田",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "修治陂池，广拓土田",
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
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "修治陂池，广拓土田",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_007",
   "subject": "event:ev_han_dushi_shuipai_llm_03",
   "predicate": "经济成果",
   "value_text": "郡内比室殷足",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "郡内比室殷足",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郡内比室殷足",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_008",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "技术类型",
   "value_text": "水力鼓风冶铸",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "水排",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学界多认为水排为水力鼓风机",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "水排",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_009",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "技术起源",
   "value_text": "水排或早于杜诗",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "造作水排",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "有学者认为水排可能更早出现",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "造作水排",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_010",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "技术细节",
   "value_text": "水排具体结构未载",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "造作水排",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未详述水排构造",
   "dims": [
    2
   ],
   "lead": {
    "where": "南阳",
    "skills": [
     "机械工程",
     "考古学"
    ],
    "accept": "水排的复原模型或图像资料"
   },
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "造作水排",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_011",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "predicate": "影响范围",
   "value_text": "水排技术传播不明",
   "time": {
    "era_text": "建武七年",
    "start": "31-01-01",
    "end": "31-12-31",
    "gregorian_year": 31
   },
   "place": "nanyang",
   "source": "houhanshu_dushi",
   "quote": "百姓便之",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "未载是否推广至他郡",
   "dims": [
    2,
    6
   ],
   "lead": {
    "where": "南阳",
    "skills": [
     "历史地理",
     "技术传播"
    ],
    "accept": "后世文献或考古证据"
   },
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "百姓便之",
   "source_text": "迁南阳太守，善于计略，省爱民役。造作水排，铸为农器，用力少，见功多，百姓便之。又修治陂池，广拓土田，郡内比室殷足。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HAN_010",
  "HAN_011"
 ],
 "events": [
  {
   "id": "ev_han_dushi_shuipai_llm_02",
   "subject": "event:ev_han_dushi_shuipai_llm_02",
   "year": 31,
   "era": "建武七年",
   "title": "造作水排",
   "kind": "建置",
   "text": "造作水排，铸为农器",
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_han_dushi_shuipai_llm_03",
   "subject": "event:ev_han_dushi_shuipai_llm_03",
   "year": 31,
   "era": "建武七年",
   "title": "修治陂池",
   "kind": "建置",
   "text": "修治陂池，广拓土田",
   "_source_idx": 0,
   "_source_name": "《后汉书·杜诗传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "nanyang",
   "party": "后世官修",
   "start": 11,
   "end": 51,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "nanyang",
   "name": "南阳",
   "lon": 112.53,
   "lat": 32.99,
   "region": "huabei"
  }
 ],
 "control_years": [
  11,
  51
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
        111.53,
        31.99
       ],
       [
        111.53,
        33.99
       ],
       [
        113.53,
        33.99
       ],
       [
        113.53,
        31.99
       ],
       [
        111.53,
        31.99
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
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.776,
         32.359
        ],
        [
         112.861,
         32.396
        ],
        [
         112.889,
         32.377
        ],
        [
         112.912,
         32.391
        ],
        [
         112.992,
         32.378
        ],
        [
         113.001,
         32.417
        ],
        [
         113.026,
         32.425
        ],
        [
         113.079,
         32.395
        ],
        [
         113.108,
         32.399
        ],
        [
         113.119,
         32.376
        ],
        [
         113.156,
         32.381
        ],
        [
         113.159,
         32.411
        ],
        [
         113.212,
         32.432
        ],
        [
         113.237,
         32.407
        ],
        [
         113.334,
         32.336
        ],
        [
         113.318,
         32.327
        ],
        [
         113.354,
         32.295
        ],
        [
         113.376,
         32.298
        ],
        [
         113.429,
         32.271
        ],
        [
         113.512,
         32.317
        ],
        [
         113.53,
         32.324
        ],
        [
         113.53,
         33.99
        ],
        [
         111.53,
         33.99
        ],
        [
         111.53,
         32.629
        ],
        [
         111.53,
         32.628
        ],
        [
         111.578,
         32.593
        ],
        [
         111.641,
         32.635
        ],
        [
         111.646,
         32.606
        ],
        [
         111.713,
         32.606
        ],
        [
         111.809,
         32.537
        ],
        [
         111.858,
         32.529
        ],
        [
         111.89,
         32.503
        ],
        [
         111.949,
         32.517
        ],
        [
         111.976,
         32.472
        ],
        [
         112.015,
         32.45
        ],
        [
         112.064,
         32.474
        ],
        [
         112.081,
         32.426
        ],
        [
         112.156,
         32.377
        ],
        [
         112.15,
         32.412
        ],
        [
         112.173,
         32.385
        ],
        [
         112.206,
         32.393
        ],
        [
         112.328,
         32.322
        ],
        [
         112.36,
         32.366
        ],
        [
         112.391,
         32.371
        ],
        [
         112.449,
         32.343
        ],
        [
         112.477,
         32.381
        ],
        [
         112.531,
         32.377
        ],
        [
         112.546,
         32.404
        ],
        [
         112.589,
         32.381
        ],
        [
         112.612,
         32.387
        ],
        [
         112.645,
         32.368
        ],
        [
         112.717,
         32.358
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         111.53,
         31.99
        ],
        [
         113.53,
         31.99
        ],
        [
         113.53,
         32.324
        ],
        [
         113.512,
         32.317
        ],
        [
         113.429,
         32.271
        ],
        [
         113.376,
         32.298
        ],
        [
         113.354,
         32.295
        ],
        [
         113.318,
         32.327
        ],
        [
         113.334,
         32.336
        ],
        [
         113.237,
         32.407
        ],
        [
         113.212,
         32.432
        ],
        [
         113.159,
         32.411
        ],
        [
         113.156,
         32.381
        ],
        [
         113.119,
         32.376
        ],
        [
         113.108,
         32.399
        ],
        [
         113.079,
         32.395
        ],
        [
         113.026,
         32.425
        ],
        [
         113.001,
         32.417
        ],
        [
         112.992,
         32.378
        ],
        [
         112.912,
         32.391
        ],
        [
         112.889,
         32.377
        ],
        [
         112.861,
         32.396
        ],
        [
         112.776,
         32.359
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ],
        [
         112.645,
         32.368
        ],
        [
         112.612,
         32.387
        ],
        [
         112.589,
         32.381
        ],
        [
         112.546,
         32.404
        ],
        [
         112.531,
         32.377
        ],
        [
         112.477,
         32.381
        ],
        [
         112.449,
         32.343
        ],
        [
         112.391,
         32.371
        ],
        [
         112.36,
         32.366
        ],
        [
         112.328,
         32.322
        ],
        [
         112.206,
         32.393
        ],
        [
         112.173,
         32.385
        ],
        [
         112.15,
         32.412
        ],
        [
         112.156,
         32.377
        ],
        [
         112.081,
         32.426
        ],
        [
         112.064,
         32.474
        ],
        [
         112.015,
         32.45
        ],
        [
         111.976,
         32.472
        ],
        [
         111.949,
         32.517
        ],
        [
         111.89,
         32.503
        ],
        [
         111.858,
         32.529
        ],
        [
         111.809,
         32.537
        ],
        [
         111.713,
         32.606
        ],
        [
         111.646,
         32.606
        ],
        [
         111.641,
         32.635
        ],
        [
         111.578,
         32.593
        ],
        [
         111.53,
         32.628
        ],
        [
         111.53,
         32.629
        ],
        [
         111.53,
         31.99
        ]
       ]
      ],
      [
       [
        [
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.53,
        32.526
       ],
       [
        111.602,
        32.468
       ],
       [
        111.642,
        32.407
       ],
       [
        111.639,
        32.354
       ],
       [
        111.685,
        32.265
       ],
       [
        111.78,
        32.141
       ],
       [
        111.919,
        32.065
       ],
       [
        112.101,
        32.036
       ],
       [
        112.159,
        31.99
       ]
      ]
     ]
    },
    "n": "Han"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.53,
   31.99,
   113.53,
   33.99
  ]
 }
};
