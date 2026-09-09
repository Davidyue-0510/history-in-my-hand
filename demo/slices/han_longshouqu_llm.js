// 本文件由 tools/build.py 自动生成（切片 han_longshouqu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["han_longshouqu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["han_longshouqu_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "龙首渠与井渠法（汉）",
  "dossier_label": "龙首渠与井渠法（汉）",
  "subtitle": "龙首渠与井渠法（汉）",
  "primary_place": "luoshui",
  "dossier_event": "event:ev_han_longshouqu_llm_01",
  "vocab_pack": "inline:han_longshouqu_llm",
  "terrain_grid": "china_coarse",
  "lead": "龙首渠与井渠法（汉）——2技术维加厚（v0.192，han/shaanxi 冷门真实科技主题）。",
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
    "note": "龙首渠与井渠法（汉）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "龙首渠与井渠法（汉）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "龙首渠与井渠法（汉）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "龙首渠与井渠法（汉）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   6
  ],
  "page": "county.html?scene=han_longshouqu_llm",
  "key": "han_longshouqu_llm",
  "scene_id": "han_longshouqu_llm"
 },
 "sources": [
  {
   "id": "shiji_hequq",
   "title": "《史记·河渠书》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shangyan",
   "name": "商颜山",
   "type": "mountain",
   "modern": "今中国陕西大荔县北",
   "note": "渠线所经",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.9,
   "lat": 34.8,
   "geo_note": "今陕西大荔北商颜山（龙首渠）",
   "elev": 353
  },
  {
   "id": "longshouqu",
   "name": "龙首渠",
   "type": "canal",
   "modern": "今中国陕西",
   "note": "所凿之渠",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.5,
   "lat": 34.7,
   "geo_note": "今陕西龙首渠代表点",
   "elev": 353
  },
  {
   "id": "luoshui",
   "name": "洛水",
   "type": "river",
   "modern": "今中国陕西洛河",
   "note": "引水起点",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.5,
   "lat": 35.5,
   "geo_note": "今陕西洛河代表点",
   "elev": 846
  }
 ],
 "persons": [
  {
   "id": "HAN__p01",
   "name": "庄熊罴",
   "role": "建议开渠者",
   "note": "上书建议穿洛水渠",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HAN_001",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "开凿原因",
   "value_text": "岸善崩，故凿井",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "岸善崩，乃凿井",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岸善崩，乃凿井",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_002",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "井深",
   "value_text": "深者四十余丈",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "深者四十余丈",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "深者四十余丈",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_003",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "井渠法",
   "value_text": "井下相通行水",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "井下相通行水",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "井下相通行水",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_004",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "渠线长度",
   "value_text": "东至山领十余里",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "东至山领十余里间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "东至山领十余里间",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_005",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "灌溉面积",
   "value_text": "溉卤地万余顷",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "longshouqu",
   "source": "shiji_hequq",
   "quote": "溉卤地万余顷",
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
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "溉卤地万余顷",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_006",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "井渠起源",
   "value_text": "井渠之生自此始",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "井渠之生自此始",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "井渠之生自此始",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_007",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "施工困难",
   "value_text": "岸善崩，易塌方",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "岸善崩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岸善崩",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_008",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "工程技术",
   "value_text": "竖井法解决塌方",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "shangyan",
   "source": "shiji_hequq",
   "quote": "乃凿井，深者四十余丈",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "后世学者推断",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "乃凿井，深者四十余丈",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_009",
   "subject": "event:ev_han_longshouqu_llm_01",
   "predicate": "渠成与否",
   "value_text": "未记载最终通水",
   "time": {
    "era_text": "元封二年",
    "start": "-109-01-01",
    "end": "-109-12-31",
    "gregorian_year": -109
   },
   "place": "longshouqu",
   "source": "shiji_hequq",
   "quote": "未详",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未明",
   "dims": [
    6
   ],
   "lead": {
    "where": "龙首渠遗址",
    "skills": [
     "考古",
     "水利史"
    ],
    "accept": "考古证据可补"
   },
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "未详",
   "source_text": "自征引洛水至商颜山下。岸善崩，乃凿井，深者四十余丈。往往为井，井下相通行水，水颓以绝商颜，东至山领十余里间。井渠之生自此始，溉卤地万余顷。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HAN_009"
 ],
 "events": [
  {
   "id": "ev_han_longshouqu_llm_01",
   "subject": "event:ev_han_longshouqu_llm_01",
   "year": -109,
   "era": "元封二年",
   "title": "开凿龙首渠",
   "kind": "建置",
   "text": "引洛水至商颜山下，凿井通渠",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "luoshui",
   "to": "shangyan",
   "type": "military",
   "label": "引水路线",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "shangyan",
   "party": "后世官修",
   "start": -129,
   "end": -89,
   "timeline": "main"
  },
  {
   "place_id": "longshouqu",
   "party": "后世官修",
   "start": -129,
   "end": -89,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "shangyan",
   "name": "商颜山",
   "lon": 109.9,
   "lat": 34.8,
   "region": "guangzhong"
  },
  {
   "place_id": "longshouqu",
   "name": "龙首渠",
   "lon": 109.5,
   "lat": 34.7,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  -129,
  -89
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
        108.5,
        33.7
       ],
       [
        108.5,
        36.5
       ],
       [
        110.9,
        36.5
       ],
       [
        110.9,
        33.7
       ],
       [
        108.5,
        33.7
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
         110.379,
         34.601
        ],
        [
         110.425,
         34.588
        ],
        [
         110.488,
         34.611
        ],
        [
         110.533,
         34.583
        ],
        [
         110.611,
         34.608
        ],
        [
         110.71,
         34.605
        ],
        [
         110.749,
         34.652
        ],
        [
         110.792,
         34.65
        ],
        [
         110.825,
         34.616
        ],
        [
         110.884,
         34.644
        ],
        [
         110.9,
         34.665
        ],
        [
         110.9,
         36.5
        ],
        [
         110.501,
         36.5
        ],
        [
         110.504,
         36.488
        ],
        [
         110.473,
         36.453
        ],
        [
         110.49,
         36.43
        ],
        [
         110.487,
         36.394
        ],
        [
         110.46,
         36.328
        ],
        [
         110.474,
         36.307
        ],
        [
         110.474,
         36.248
        ],
        [
         110.456,
         36.227
        ],
        [
         110.447,
         36.164
        ],
        [
         110.468,
         36.075
        ],
        [
         110.492,
         36.035
        ],
        [
         110.493,
         35.994
        ],
        [
         110.517,
         35.972
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.919
        ],
        [
         110.512,
         35.88
        ],
        [
         110.549,
         35.878
        ],
        [
         110.55,
         35.838
        ],
        [
         110.571,
         35.801
        ],
        [
         110.578,
         35.702
        ],
        [
         110.61,
         35.632
        ],
        [
         110.589,
         35.602
        ],
        [
         110.568,
         35.54
        ],
        [
         110.531,
         35.511
        ],
        [
         110.478,
         35.414
        ],
        [
         110.45,
         35.328
        ],
        [
         110.375,
         35.252
        ],
        [
         110.379,
         35.211
        ],
        [
         110.364,
         35.198
        ],
        [
         110.374,
         35.134
        ],
        [
         110.321,
         35.005
        ],
        [
         110.262,
         34.944
        ],
        [
         110.231,
         34.881
        ],
        [
         110.247,
         34.789
        ],
        [
         110.243,
         34.726
        ],
        [
         110.23,
         34.693
        ],
        [
         110.269,
         34.63
        ],
        [
         110.295,
         34.611
        ],
        [
         110.379,
         34.601
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
         110.9,
         33.7
        ],
        [
         110.9,
         34.665
        ],
        [
         110.884,
         34.644
        ],
        [
         110.825,
         34.616
        ],
        [
         110.792,
         34.65
        ],
        [
         110.749,
         34.652
        ],
        [
         110.71,
         34.605
        ],
        [
         110.611,
         34.608
        ],
        [
         110.533,
         34.583
        ],
        [
         110.488,
         34.611
        ],
        [
         110.425,
         34.588
        ],
        [
         110.379,
         34.601
        ],
        [
         110.367,
         34.567
        ],
        [
         110.405,
         34.558
        ],
        [
         110.372,
         34.544
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.504,
         34.337
        ],
        [
         110.452,
         34.293
        ],
        [
         110.429,
         34.288
        ],
        [
         110.44,
         34.243
        ],
        [
         110.508,
         34.217
        ],
        [
         110.552,
         34.213
        ],
        [
         110.558,
         34.193
        ],
        [
         110.622,
         34.177
        ],
        [
         110.642,
         34.161
        ],
        [
         110.614,
         34.113
        ],
        [
         110.592,
         34.102
        ],
        [
         110.587,
         34.023
        ],
        [
         110.621,
         34.036
        ],
        [
         110.671,
         33.966
        ],
        [
         110.666,
         33.938
        ],
        [
         110.627,
         33.925
        ],
        [
         110.629,
         33.91
        ],
        [
         110.587,
         33.888
        ],
        [
         110.612,
         33.852
        ],
        [
         110.663,
         33.853
        ],
        [
         110.712,
         33.834
        ],
        [
         110.741,
         33.799
        ],
        [
         110.782,
         33.796
        ],
        [
         110.817,
         33.751
        ],
        [
         110.832,
         33.714
        ],
        [
         110.828,
         33.7
        ],
        [
         110.9,
         33.7
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
         110.379,
         34.601
        ],
        [
         110.295,
         34.611
        ],
        [
         110.269,
         34.63
        ],
        [
         110.23,
         34.693
        ],
        [
         110.243,
         34.726
        ],
        [
         110.247,
         34.789
        ],
        [
         110.231,
         34.881
        ],
        [
         110.262,
         34.944
        ],
        [
         110.321,
         35.005
        ],
        [
         110.374,
         35.134
        ],
        [
         110.364,
         35.198
        ],
        [
         110.379,
         35.211
        ],
        [
         110.375,
         35.252
        ],
        [
         110.45,
         35.328
        ],
        [
         110.478,
         35.414
        ],
        [
         110.531,
         35.511
        ],
        [
         110.568,
         35.54
        ],
        [
         110.589,
         35.602
        ],
        [
         110.61,
         35.632
        ],
        [
         110.578,
         35.702
        ],
        [
         110.571,
         35.801
        ],
        [
         110.55,
         35.838
        ],
        [
         110.549,
         35.878
        ],
        [
         110.512,
         35.88
        ],
        [
         110.517,
         35.919
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.972
        ],
        [
         110.493,
         35.994
        ],
        [
         110.492,
         36.035
        ],
        [
         110.468,
         36.075
        ],
        [
         110.447,
         36.164
        ],
        [
         110.456,
         36.227
        ],
        [
         110.474,
         36.248
        ],
        [
         110.474,
         36.307
        ],
        [
         110.46,
         36.328
        ],
        [
         110.487,
         36.394
        ],
        [
         110.49,
         36.43
        ],
        [
         110.473,
         36.453
        ],
        [
         110.504,
         36.488
        ],
        [
         110.501,
         36.5
        ],
        [
         108.5,
         36.5
        ],
        [
         108.5,
         36.428
        ],
        [
         108.515,
         36.446
        ],
        [
         108.51,
         36.474
        ],
        [
         108.563,
         36.439
        ],
        [
         108.619,
         36.434
        ],
        [
         108.652,
         36.385
        ],
        [
         108.642,
         36.359
        ],
        [
         108.646,
         36.254
        ],
        [
         108.713,
         36.139
        ],
        [
         108.682,
         36.062
        ],
        [
         108.689,
         36.021
        ],
        [
         108.66,
         35.991
        ],
        [
         108.652,
         35.948
        ],
        [
         108.594,
         35.951
        ],
        [
         108.563,
         35.921
        ],
        [
         108.519,
         35.905
        ],
        [
         108.5,
         35.873
        ],
        [
         108.5,
         35.871
        ],
        [
         108.528,
         35.824
        ],
        [
         108.534,
         35.746
        ],
        [
         108.518,
         35.7
        ],
        [
         108.539,
         35.606
        ],
        [
         108.618,
         35.557
        ],
        [
         108.626,
         35.537
        ],
        [
         108.606,
         35.503
        ],
        [
         108.631,
         35.419
        ],
        [
         108.61,
         35.355
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.5,
         35.281
        ],
        [
         108.5,
         33.7
        ],
        [
         110.828,
         33.7
        ],
        [
         110.832,
         33.714
        ],
        [
         110.817,
         33.751
        ],
        [
         110.782,
         33.796
        ],
        [
         110.741,
         33.799
        ],
        [
         110.712,
         33.834
        ],
        [
         110.663,
         33.853
        ],
        [
         110.612,
         33.852
        ],
        [
         110.587,
         33.888
        ],
        [
         110.629,
         33.91
        ],
        [
         110.627,
         33.925
        ],
        [
         110.666,
         33.938
        ],
        [
         110.671,
         33.966
        ],
        [
         110.621,
         34.036
        ],
        [
         110.587,
         34.023
        ],
        [
         110.592,
         34.102
        ],
        [
         110.614,
         34.113
        ],
        [
         110.642,
         34.161
        ],
        [
         110.622,
         34.177
        ],
        [
         110.558,
         34.193
        ],
        [
         110.552,
         34.213
        ],
        [
         110.508,
         34.217
        ],
        [
         110.44,
         34.243
        ],
        [
         110.429,
         34.288
        ],
        [
         110.452,
         34.293
        ],
        [
         110.504,
         34.337
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.372,
         34.544
        ],
        [
         110.405,
         34.558
        ],
        [
         110.367,
         34.567
        ],
        [
         110.379,
         34.601
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         108.5,
         35.281
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.61,
         35.355
        ],
        [
         108.631,
         35.419
        ],
        [
         108.606,
         35.503
        ],
        [
         108.626,
         35.537
        ],
        [
         108.618,
         35.557
        ],
        [
         108.539,
         35.606
        ],
        [
         108.518,
         35.7
        ],
        [
         108.534,
         35.746
        ],
        [
         108.528,
         35.824
        ],
        [
         108.5,
         35.871
        ],
        [
         108.5,
         35.873
        ],
        [
         108.519,
         35.905
        ],
        [
         108.563,
         35.921
        ],
        [
         108.594,
         35.951
        ],
        [
         108.652,
         35.948
        ],
        [
         108.66,
         35.991
        ],
        [
         108.689,
         36.021
        ],
        [
         108.682,
         36.062
        ],
        [
         108.713,
         36.139
        ],
        [
         108.646,
         36.254
        ],
        [
         108.642,
         36.359
        ],
        [
         108.652,
         36.385
        ],
        [
         108.619,
         36.434
        ],
        [
         108.563,
         36.439
        ],
        [
         108.51,
         36.474
        ],
        [
         108.515,
         36.446
        ],
        [
         108.5,
         36.428
        ],
        [
         108.5,
         35.281
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.478,
        36.5
       ],
       [
        110.486,
        36.429
       ],
       [
        110.46,
        36.237
       ],
       [
        110.49,
        36.006
       ],
       [
        110.576,
        35.733
       ],
       [
        110.579,
        35.534
       ],
       [
        110.459,
        35.343
       ],
       [
        110.366,
        35.234
       ],
       [
        110.316,
        35.135
       ],
       [
        110.278,
        35.008
       ],
       [
        110.262,
        34.868
       ],
       [
        110.27,
        34.637
       ],
       [
        110.465,
        34.597
       ],
       [
        110.619,
        34.604
       ],
       [
        110.795,
        34.645
       ],
       [
        110.89,
        34.683
       ],
       [
        110.9,
        34.688
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   108.5,
   33.7,
   110.9,
   36.5
  ]
 }
};
