// 本文件由 tools/build.py 自动生成（切片 heilongjiang_jin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["heilongjiang_jin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["heilongjiang_jin"] = {
 "meta": {
  "kind": "dynasty",
  "region": "huabei",
  "province": "heilongjiang",
  "title": "金上京·女真建国（辽金之际）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "huining",
  "dossier_event": "event:ev_heilongjiang_jin_01",
  "vocab_pack": "inline:heilongjiang_jin",
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
    "note": "金上京·女真建国（辽金之际）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "金上京·女真建国（辽金之际）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "金上京·女真建国（辽金之际）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "金上京·女真建国（辽金之际）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   5,
   6
  ],
  "page": "county.html?scene=heilongjiang_jin",
  "key": "heilongjiang_jin",
  "scene_id": "heilongjiang_jin"
 },
 "sources": [
  {
   "id": "jinshi_shangjing",
   "title": "《金史》与上京会宁府",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱",
   "period": "金",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "huining",
   "name": "会宁府",
   "type": "city",
   "modern": "今黑龙江省哈尔滨市阿城区",
   "note": "金上京。坐标据地名志条目（别名 会宁府→阿城），标 approx。",
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 126.63,
   "lat": 45.32,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 会宁府→阿城）（诚实回填 v0.221）。",
   "elev": 177
  },
  {
   "id": "anchuhu",
   "name": "按出虎水",
   "type": "region",
   "modern": "今黑龙江省哈尔滨市阿城区阿什河",
   "note": "女真语金水",
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HEI__p01",
   "name": "完颜阿骨打",
   "role": "金太祖",
   "note": "女真完颜部首领，称都勃极烈，建金称帝",
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HEI_001",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "建国",
   "value_text": "阿骨打称帝，国号大金",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "收国元年（1115）即皇帝位，国号大金",
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
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "收国元年（1115）即皇帝位，国号大金",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_002",
   "subject": "event:ev_heilongjiang_jin_02",
   "predicate": "建都",
   "value_text": "筑会宁府，号上京",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "于按出虎水畔筑会宁府，是为上京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于按出虎水畔筑会宁府，是为上京",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_003",
   "subject": "place:huining",
   "predicate": "地理",
   "value_text": "位于按出虎水畔",
   "time": {
    "era_text": "辽季",
    "start": "1115"
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "于按出虎水畔筑会宁府",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于按出虎水畔筑会宁府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_004",
   "subject": "person:HEI__p01",
   "predicate": "称号",
   "value_text": "称都勃极烈",
   "time": {
    "era_text": "辽季",
    "start": "1115"
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "阿骨打称都勃极烈",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "阿骨打称都勃极烈",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_005",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "国号",
   "value_text": "国号大金",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "国号大金",
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
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "国号大金",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_006",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "战事",
   "value_text": "屡破辽军",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "屡破辽军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屡破辽军",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_007",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "后续",
   "value_text": "后灭辽克宋",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "后灭辽克宋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "后灭辽克宋",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_008",
   "subject": "place:huining",
   "predicate": "地位",
   "value_text": "金肇兴之都",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "会宁为其肇兴之都",
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
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "会宁为其肇兴之都",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_009",
   "subject": "place:anchuhu",
   "predicate": "名称",
   "value_text": "按出虎水，女真语金水",
   "time": {
    "era_text": "辽季",
    "start": "1115"
   },
   "place": "anchuhu",
   "source": "jinshi_shangjing",
   "quote": "按出虎水",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "按出虎为女真语金水",
   "dims": [
    1,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "按出虎水",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_010",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "建号时间",
   "value_text": "收国元年即帝位",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "收国元年（1115）即皇帝位",
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
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "收国元年（1115）即皇帝位",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_011",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "都城",
   "value_text": "会宁府为上京",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "是为上京",
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
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "是为上京",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_012",
   "subject": "event:ev_heilongjiang_jin_01",
   "predicate": "对峙",
   "value_text": "与南宋对峙",
   "time": {
    "era_text": "收国元年",
    "start": "1115-01-01",
    "end": "1115-12-31",
    "gregorian_year": 1115
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "与南宋对峙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与南宋对峙",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEI_013",
   "subject": "place:huining",
   "predicate": "建置时间",
   "value_text": "建置年代不详",
   "time": {
    "era_text": "辽季",
    "start": "1115"
   },
   "place": "huining",
   "source": "jinshi_shangjing",
   "quote": "筑会宁府",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "lead": {
    "where": "会宁府",
    "skills": [
     "考古",
     "文献"
    ],
    "accept": "会宁府始建年代"
   },
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "筑会宁府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HEI_013"
 ],
 "events": [
  {
   "id": "ev_heilongjiang_jin_01",
   "subject": "event:ev_heilongjiang_jin_01",
   "year": 1115,
   "era": "收国元年",
   "title": "阿骨打称帝建金",
   "kind": "建置",
   "text": "阿骨打即皇帝位，国号大金",
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_heilongjiang_jin_02",
   "subject": "event:ev_heilongjiang_jin_02",
   "year": 1115,
   "era": "收国元年",
   "title": "筑会宁府",
   "kind": "建置",
   "text": "于按出虎水畔筑会宁府，为上京",
   "_source_idx": 0,
   "_source_name": "《金史》与上京会宁府",
   "_source_party": "后世官修",
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
        125.63,
        44.32
       ],
       [
        125.63,
        46.32
       ],
       [
        127.63,
        46.32
       ],
       [
        127.63,
        44.32
       ],
       [
        125.63,
        44.32
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
         127.571,
         44.32
        ],
        [
         127.486,
         44.41
        ],
        [
         127.509,
         44.437
        ],
        [
         127.464,
         44.485
        ],
        [
         127.465,
         44.517
        ],
        [
         127.485,
         44.529
        ],
        [
         127.536,
         44.522
        ],
        [
         127.57,
         44.55
        ],
        [
         127.557,
         44.575
        ],
        [
         127.393,
         44.632
        ],
        [
         127.276,
         44.64
        ],
        [
         127.262,
         44.613
        ],
        [
         127.214,
         44.625
        ],
        [
         127.229,
         44.643
        ],
        [
         127.182,
         44.645
        ],
        [
         127.139,
         44.607
        ],
        [
         127.095,
         44.616
        ],
        [
         127.09,
         44.594
        ],
        [
         127.05,
         44.567
        ],
        [
         127.042,
         44.591
        ],
        [
         127.044,
         44.654
        ],
        [
         127.031,
         44.673
        ],
        [
         127.041,
         44.712
        ],
        [
         126.997,
         44.765
        ],
        [
         126.984,
         44.824
        ],
        [
         127.0,
         44.874
        ],
        [
         127.022,
         44.899
        ],
        [
         127.073,
         44.907
        ],
        [
         127.093,
         44.947
        ],
        [
         127.05,
         45.004
        ],
        [
         127.018,
         45.024
        ],
        [
         126.985,
         45.068
        ],
        [
         126.971,
         45.071
        ],
        [
         126.964,
         45.132
        ],
        [
         126.856,
         45.146
        ],
        [
         126.793,
         45.135
        ],
        [
         126.787,
         45.159
        ],
        [
         126.732,
         45.187
        ],
        [
         126.686,
         45.188
        ],
        [
         126.64,
         45.214
        ],
        [
         126.645,
         45.225
        ],
        [
         126.569,
         45.253
        ],
        [
         126.54,
         45.239
        ],
        [
         126.519,
         45.248
        ],
        [
         126.403,
         45.223
        ],
        [
         126.356,
         45.186
        ],
        [
         126.293,
         45.18
        ],
        [
         126.285,
         45.162
        ],
        [
         126.235,
         45.14
        ],
        [
         126.226,
         45.154
        ],
        [
         126.166,
         45.133
        ],
        [
         126.143,
         45.148
        ],
        [
         126.092,
         45.149
        ],
        [
         126.048,
         45.171
        ],
        [
         125.998,
         45.162
        ],
        [
         125.993,
         45.192
        ],
        [
         125.958,
         45.201
        ],
        [
         125.915,
         45.197
        ],
        [
         125.85,
         45.239
        ],
        [
         125.824,
         45.238
        ],
        [
         125.816,
         45.265
        ],
        [
         125.762,
         45.291
        ],
        [
         125.726,
         45.337
        ],
        [
         125.695,
         45.352
        ],
        [
         125.712,
         45.389
        ],
        [
         125.712,
         45.478
        ],
        [
         125.688,
         45.514
        ],
        [
         125.66,
         45.507
        ],
        [
         125.63,
         45.515
        ],
        [
         125.63,
         44.32
        ],
        [
         127.571,
         44.32
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         125.63,
         46.32
        ],
        [
         125.63,
         45.515
        ],
        [
         125.66,
         45.507
        ],
        [
         125.688,
         45.514
        ],
        [
         125.712,
         45.478
        ],
        [
         125.712,
         45.389
        ],
        [
         125.695,
         45.352
        ],
        [
         125.726,
         45.337
        ],
        [
         125.762,
         45.291
        ],
        [
         125.816,
         45.265
        ],
        [
         125.824,
         45.238
        ],
        [
         125.85,
         45.239
        ],
        [
         125.915,
         45.197
        ],
        [
         125.958,
         45.201
        ],
        [
         125.993,
         45.192
        ],
        [
         125.998,
         45.162
        ],
        [
         126.048,
         45.171
        ],
        [
         126.092,
         45.149
        ],
        [
         126.143,
         45.148
        ],
        [
         126.166,
         45.133
        ],
        [
         126.226,
         45.154
        ],
        [
         126.235,
         45.14
        ],
        [
         126.285,
         45.162
        ],
        [
         126.293,
         45.18
        ],
        [
         126.356,
         45.186
        ],
        [
         126.403,
         45.223
        ],
        [
         126.519,
         45.248
        ],
        [
         126.54,
         45.239
        ],
        [
         126.569,
         45.253
        ],
        [
         126.645,
         45.225
        ],
        [
         126.64,
         45.214
        ],
        [
         126.686,
         45.188
        ],
        [
         126.732,
         45.187
        ],
        [
         126.787,
         45.159
        ],
        [
         126.793,
         45.135
        ],
        [
         126.856,
         45.146
        ],
        [
         126.964,
         45.132
        ],
        [
         126.971,
         45.071
        ],
        [
         126.985,
         45.068
        ],
        [
         127.018,
         45.024
        ],
        [
         127.05,
         45.004
        ],
        [
         127.093,
         44.947
        ],
        [
         127.073,
         44.907
        ],
        [
         127.022,
         44.899
        ],
        [
         127.0,
         44.874
        ],
        [
         126.984,
         44.824
        ],
        [
         126.997,
         44.765
        ],
        [
         127.041,
         44.712
        ],
        [
         127.031,
         44.673
        ],
        [
         127.044,
         44.654
        ],
        [
         127.042,
         44.591
        ],
        [
         127.05,
         44.567
        ],
        [
         127.09,
         44.594
        ],
        [
         127.095,
         44.616
        ],
        [
         127.139,
         44.607
        ],
        [
         127.182,
         44.645
        ],
        [
         127.229,
         44.643
        ],
        [
         127.214,
         44.625
        ],
        [
         127.262,
         44.613
        ],
        [
         127.276,
         44.64
        ],
        [
         127.393,
         44.632
        ],
        [
         127.557,
         44.575
        ],
        [
         127.57,
         44.55
        ],
        [
         127.536,
         44.522
        ],
        [
         127.485,
         44.529
        ],
        [
         127.465,
         44.517
        ],
        [
         127.464,
         44.485
        ],
        [
         127.509,
         44.437
        ],
        [
         127.486,
         44.41
        ],
        [
         127.571,
         44.32
        ],
        [
         127.63,
         44.32
        ],
        [
         127.63,
         46.32
        ],
        [
         125.63,
         46.32
        ]
       ]
      ]
     ]
    },
    "n": "黑龙江省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        125.63,
        45.491
       ],
       [
        125.745,
        45.495
       ],
       [
        125.888,
        45.55
       ],
       [
        125.979,
        45.652
       ],
       [
        126.107,
        45.702
       ],
       [
        126.273,
        45.698
       ],
       [
        126.415,
        45.711
       ],
       [
        126.534,
        45.741
       ],
       [
        126.63,
        45.797
       ],
       [
        126.704,
        45.876
       ],
       [
        126.802,
        45.943
       ],
       [
        126.923,
        45.997
       ],
       [
        127.083,
        45.998
       ],
       [
        127.284,
        45.945
       ],
       [
        127.416,
        45.922
       ],
       [
        127.479,
        45.93
       ],
       [
        127.527,
        45.961
       ],
       [
        127.559,
        46.014
       ],
       [
        127.63,
        46.012
       ]
      ]
     ]
    },
    "n": "Songhua"
   }
  ],
  "lakes": [],
  "_bbox": [
   125.63,
   44.32,
   127.63,
   46.32
  ]
 }
};
