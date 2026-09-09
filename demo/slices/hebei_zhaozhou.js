// 本文件由 tools/build.py 自动生成（切片 hebei_zhaozhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hebei_zhaozhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hebei_zhaozhou"] = {
 "meta": {
  "kind": "tech",
  "region": "huabei",
  "province": "hebei",
  "title": "隋·赵州桥李春（隋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "zhaozhou",
  "dossier_event": "event:ev_hebei_zhaozhou_01",
  "vocab_pack": "inline:hebei_zhaozhou",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "sui",
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
    "note": "隋·赵州桥李春（隋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "隋·赵州桥李春（隋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "隋·赵州桥李春（隋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "隋·赵州桥李春（隋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   6
  ],
  "page": "county.html?scene=hebei_zhaozhou",
  "key": "hebei_zhaozhou",
  "scene_id": "hebei_zhaozhou"
 },
 "sources": [
  {
   "id": "zhaozhou_qiao",
   "title": "《赵州桥铭》与隋代工匠",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "李春",
   "period": "隋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zhaozhou",
   "name": "赵州",
   "type": "city",
   "modern": "今中国河北省赵县",
   "note": "桥所在地",
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.78,
   "lat": 37.76,
   "geo_note": "今河北赵县（赵州桥）",
   "elev": 37
  },
  {
   "id": "xiaohe",
   "name": "洨河",
   "type": "region",
   "modern": "今中国河北省赵县境内",
   "note": "桥跨之河",
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.78,
   "lat": 37.74,
   "geo_note": "今河北赵县洨河",
   "elev": 36
  }
 ],
 "persons": [
  {
   "id": "HEB__p01",
   "name": "李春",
   "role": "匠师",
   "note": "赵州桥的设计建造者",
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HEB_001",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "建造者",
   "value_text": "李春建造",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "隋大业间，匠师李春于赵州洨河上建安济桥",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隋大业间，匠师李春于赵州洨河上建安济桥",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_002",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "桥型",
   "value_text": "敞肩券拱",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "敞肩券拱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "敞肩券拱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_003",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "技术特点",
   "value_text": "大弧平，减水攻省材",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "跨大弧平，敞肩券拱，减水攻、省材力",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "跨大弧平，敞肩券拱，减水攻、省材力",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_004",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "历史地位",
   "value_text": "世界最古敞肩石拱桥",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "为世界现存最古之敞肩石拱桥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为世界现存最古之敞肩石拱桥",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_005",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "耐久性",
   "value_text": "历千余年不圮",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "历千余年不圮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "历千余年不圮",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_006",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "技艺评价",
   "value_text": "隋代营造技艺之冠",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "隋代营造技艺之冠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隋代营造技艺之冠",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_007",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "建造年代",
   "value_text": "隋大业年间",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "隋大业间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隋大业间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_008",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "桥名",
   "value_text": "安济桥",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "建安济桥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建安济桥",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_009",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "桥址",
   "value_text": "赵州洨河上",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "于赵州洨河上",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于赵州洨河上",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_010",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "结构创新",
   "value_text": "敞肩券拱减水攻",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "敞肩券拱，减水攻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "敞肩券拱，减水攻",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_011",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "材料节省",
   "value_text": "省材力",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "省材力",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "省材力",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_012",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "现存状态",
   "value_text": "现存完好",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "历千余年不圮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "历千余年不圮",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_013",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "学术评价",
   "value_text": "世界桥梁史重要",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
   "quote": "世界现存最古之敞肩石拱桥",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世界现存最古之敞肩石拱桥",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_014",
   "subject": "event:ev_hebei_zhaozhou_01",
   "predicate": "建造细节",
   "value_text": "具体工艺未详",
   "time": {
    "era_text": "隋大业间",
    "start": "605-01-01",
    "end": "605-12-31",
    "gregorian_year": 605
   },
   "place": "zhaozhou",
   "source": "zhaozhou_qiao",
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
    "where": "赵州桥遗址",
    "skills": [
     "考古",
     "建筑史"
    ],
    "accept": "补充建造工艺细节"
   },
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
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
  "HEB_014"
 ],
 "events": [
  {
   "id": "ev_hebei_zhaozhou_01",
   "subject": "event:ev_hebei_zhaozhou_01",
   "year": 605,
   "era": "隋大业年间",
   "title": "赵州桥建造",
   "kind": "建置",
   "text": "李春于赵州洨河上建安济桥",
   "_source_idx": 0,
   "_source_name": "《赵州桥铭》与隋代工匠",
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
        113.78,
        36.74
       ],
       [
        113.78,
        38.76
       ],
       [
        115.78,
        38.76
       ],
       [
        115.78,
        36.74
       ],
       [
        113.78,
        36.74
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
         113.839,
         38.76
        ],
        [
         113.84,
         38.758
        ],
        [
         113.828,
         38.76
        ],
        [
         113.801,
         38.76
        ],
        [
         113.78,
         38.719
        ],
        [
         113.78,
         38.166
        ],
        [
         113.797,
         38.163
        ],
        [
         113.832,
         38.169
        ],
        [
         113.811,
         38.118
        ],
        [
         113.877,
         38.055
        ],
        [
         113.872,
         37.99
        ],
        [
         113.901,
         37.985
        ],
        [
         113.936,
         37.923
        ],
        [
         113.959,
         37.906
        ],
        [
         113.977,
         37.817
        ],
        [
         114.007,
         37.813
        ],
        [
         114.045,
         37.762
        ],
        [
         113.997,
         37.73
        ],
        [
         113.994,
         37.707
        ],
        [
         114.068,
         37.722
        ],
        [
         114.128,
         37.698
        ],
        [
         114.14,
         37.676
        ],
        [
         114.116,
         37.62
        ],
        [
         114.119,
         37.591
        ],
        [
         114.037,
         37.494
        ],
        [
         114.015,
         37.425
        ],
        [
         113.974,
         37.403
        ],
        [
         113.963,
         37.356
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
        ],
        [
         113.832,
         37.168
        ],
        [
         113.78,
         37.154
        ],
        [
         113.78,
         37.064
        ],
        [
         113.788,
         37.06
        ],
        [
         113.78,
         37.038
        ],
        [
         113.78,
         37.005
        ],
        [
         113.792,
         36.988
        ],
        [
         113.78,
         36.976
        ],
        [
         113.78,
         36.92
        ],
        [
         113.793,
         36.895
        ],
        [
         113.78,
         36.869
        ],
        [
         113.78,
         36.74
        ],
        [
         115.47,
         36.74
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.712,
         36.883
        ],
        [
         115.758,
         36.902
        ],
        [
         115.78,
         36.94
        ],
        [
         115.78,
         36.989
        ],
        [
         115.777,
         36.993
        ],
        [
         115.78,
         36.996
        ],
        [
         115.78,
         38.76
        ],
        [
         113.839,
         38.76
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
         113.78,
         38.76
        ],
        [
         113.78,
         36.869
        ],
        [
         113.793,
         36.895
        ],
        [
         113.78,
         36.92
        ],
        [
         113.78,
         36.976
        ],
        [
         113.792,
         36.988
        ],
        [
         113.78,
         37.005
        ],
        [
         113.78,
         37.038
        ],
        [
         113.788,
         37.06
        ],
        [
         113.78,
         37.064
        ],
        [
         113.78,
         37.154
        ],
        [
         113.832,
         37.168
        ],
        [
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.963,
         37.356
        ],
        [
         113.974,
         37.403
        ],
        [
         114.015,
         37.425
        ],
        [
         114.037,
         37.494
        ],
        [
         114.119,
         37.591
        ],
        [
         114.116,
         37.62
        ],
        [
         114.14,
         37.676
        ],
        [
         114.128,
         37.698
        ],
        [
         114.068,
         37.722
        ],
        [
         113.994,
         37.707
        ],
        [
         113.997,
         37.73
        ],
        [
         114.045,
         37.762
        ],
        [
         114.007,
         37.813
        ],
        [
         113.977,
         37.817
        ],
        [
         113.959,
         37.906
        ],
        [
         113.936,
         37.923
        ],
        [
         113.901,
         37.985
        ],
        [
         113.872,
         37.99
        ],
        [
         113.877,
         38.055
        ],
        [
         113.811,
         38.118
        ],
        [
         113.832,
         38.169
        ],
        [
         113.797,
         38.163
        ],
        [
         113.78,
         38.166
        ],
        [
         113.78,
         38.719
        ],
        [
         113.801,
         38.76
        ],
        [
         113.828,
         38.76
        ],
        [
         113.84,
         38.758
        ],
        [
         113.839,
         38.76
        ],
        [
         113.78,
         38.76
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
         115.78,
         36.74
        ],
        [
         115.78,
         36.996
        ],
        [
         115.777,
         36.993
        ],
        [
         115.78,
         36.989
        ],
        [
         115.78,
         36.94
        ],
        [
         115.758,
         36.902
        ],
        [
         115.712,
         36.883
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.47,
         36.74
        ],
        [
         115.78,
         36.74
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
   113.78,
   36.74,
   115.78,
   38.76
  ]
 }
};
