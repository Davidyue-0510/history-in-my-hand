// 本文件由 tools/build.py 自动生成（切片 hubei_zenghouyi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hubei_zenghouyi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hubei_zenghouyi"] = {
 "meta": {
  "kind": "tech",
  "region": "warring_states",
  "province": "hubei",
  "title": "战国·曾侯乙编钟（青铜礼乐之极）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "suizhou",
  "dossier_event": "event:ev_hubei_zenghouyi_01",
  "vocab_pack": "inline:hubei_zenghouyi",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "warring_states",
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
    "note": "战国·曾侯乙编钟（青铜礼乐之极）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "战国·曾侯乙编钟（青铜礼乐之极）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "战国·曾侯乙编钟（青铜礼乐之极）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "战国·曾侯乙编钟（青铜礼乐之极）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   5,
   6
  ],
  "page": "county.html?scene=hubei_zenghouyi",
  "key": "hubei_zenghouyi",
  "scene_id": "hubei_zenghouyi"
 },
 "sources": [
  {
   "id": "zenghouyi_bianzhong",
   "title": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "湖北省博物馆",
   "period": "战国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "suizhou",
   "name": "随州",
   "type": "city",
   "modern": "今湖北随州",
   "note": "曾侯乙墓所在地。",
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.37,
   "lat": 31.69,
   "geo_note": "今湖北随州（曾侯乙墓）",
   "elev": 87
  }
 ],
 "persons": [
  {
   "id": "HUB__p01",
   "name": "曾侯乙",
   "role": "曾国君",
   "note": "战国早期曾国君主，墓葬出土编钟。",
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HUB_001",
   "subject": "event:ev_hubei_zenghouyi_01",
   "predicate": "下葬时间",
   "value_text": "战国早期，约公元前433年。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "战国早期，曾国君乙卒",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "战国早期，曾国君乙卒",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_002",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "出土时间",
   "value_text": "1978年出土编钟。",
   "time": {
    "era_text": "1978年",
    "start": "1978-01-01",
    "end": "1978-12-31",
    "gregorian_year": 1978
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "一九七八年出土编钟六十五枚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一九七八年出土编钟六十五枚",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_003",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "编钟数量",
   "value_text": "出土编钟六十五枚。",
   "time": {
    "era_text": "1978年",
    "start": "1978-01-01",
    "end": "1978-12-31",
    "gregorian_year": 1978
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "出土编钟六十五枚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "出土编钟六十五枚",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_004",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "一钟双音",
   "value_text": "每钟可发两音。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "一钟双音",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一钟双音",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_005",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "音域宽广",
   "value_text": "音域跨五个八度。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "音域宽广",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "音域宽广",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_006",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "铸铭律吕",
   "value_text": "钟体铸有律名铭文。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "铸铭律吕",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "铸铭律吕",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_007",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "礼乐极则",
   "value_text": "代表周代礼乐最高成就。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "周代礼乐与青铜铸造之极则",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周代礼乐与青铜铸造之极则",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_008",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "楚地乐律",
   "value_text": "证明楚地乐律精妙。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "足证楚地乐律之精",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "足证楚地乐律之精",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_009",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "铸造工艺",
   "value_text": "青铜铸造工艺精湛。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "青铜铸造之极则",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "青铜铸造之极则",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_010",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "学术争议",
   "value_text": "编钟音律体系尚存争议。",
   "time": {
    "era_text": "现代",
    "start": "1978"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUB_011",
   "subject": "event:ev_hubei_zenghouyi_02",
   "predicate": "铸造年代",
   "value_text": "具体铸造年份不明。",
   "time": {
    "era_text": "战国早期",
    "start": "-0433"
   },
   "place": "suizhou",
   "source": "zenghouyi_bianzhong",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "曾侯乙墓出土铭文及碳十四测年",
    "skills": [
     "考古学",
     "古文字学"
    ],
    "accept": "确定编钟具体铸造年份"
   },
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HUB_011"
 ],
 "events": [
  {
   "id": "ev_hubei_zenghouyi_01",
   "subject": "event:ev_hubei_zenghouyi_01",
   "year": -433,
   "era": "战国早期",
   "title": "曾侯乙下葬",
   "kind": "其他",
   "text": "曾侯乙卒，葬于随州。",
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hubei_zenghouyi_02",
   "subject": "event:ev_hubei_zenghouyi_02",
   "year": 1978,
   "era": "公元1978年",
   "title": "编钟出土",
   "kind": "其他",
   "text": "曾侯乙墓编钟出土。",
   "_source_idx": 0,
   "_source_name": "《曾侯乙墓》编钟与战国礼乐（考古）",
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
        112.37,
        30.69
       ],
       [
        112.37,
        32.69
       ],
       [
        114.37,
        32.69
       ],
       [
        114.37,
        30.69
       ],
       [
        112.37,
        30.69
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
         113.625,
         32.361
        ],
        [
         113.651,
         32.413
        ],
        [
         113.7,
         32.421
        ],
        [
         113.736,
         32.411
        ],
        [
         113.768,
         32.37
        ],
        [
         113.754,
         32.328
        ],
        [
         113.769,
         32.301
        ],
        [
         113.768,
         32.284
        ],
        [
         113.758,
         32.277
        ],
        [
         113.749,
         32.273
        ],
        [
         113.739,
         32.256
        ],
        [
         113.753,
         32.216
        ],
        [
         113.782,
         32.185
        ],
        [
         113.75,
         32.116
        ],
        [
         113.723,
         32.124
        ],
        [
         113.729,
         32.083
        ],
        [
         113.792,
         32.036
        ],
        [
         113.758,
         31.99
        ],
        [
         113.817,
         31.964
        ],
        [
         113.806,
         31.929
        ],
        [
         113.832,
         31.919
        ],
        [
         113.831,
         31.879
        ],
        [
         113.854,
         31.843
        ],
        [
         113.894,
         31.847
        ],
        [
         113.915,
         31.877
        ],
        [
         113.958,
         31.853
        ],
        [
         113.952,
         31.794
        ],
        [
         113.989,
         31.75
        ],
        [
         114.018,
         31.771
        ],
        [
         114.087,
         31.782
        ],
        [
         114.122,
         31.809
        ],
        [
         114.134,
         31.843
        ],
        [
         114.192,
         31.852
        ],
        [
         114.236,
         31.833
        ],
        [
         114.293,
         31.753
        ],
        [
         114.35,
         31.756
        ],
        [
         114.37,
         31.752
        ],
        [
         114.37,
         32.69
        ],
        [
         112.37,
         32.69
        ],
        [
         112.37,
         32.367
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
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.769,
         32.301
        ],
        [
         113.749,
         32.273
        ],
        [
         113.758,
         32.277
        ],
        [
         113.768,
         32.284
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
         112.37,
         30.69
        ],
        [
         114.37,
         30.69
        ],
        [
         114.37,
         31.752
        ],
        [
         114.35,
         31.756
        ],
        [
         114.293,
         31.753
        ],
        [
         114.236,
         31.833
        ],
        [
         114.192,
         31.852
        ],
        [
         114.134,
         31.843
        ],
        [
         114.122,
         31.809
        ],
        [
         114.087,
         31.782
        ],
        [
         114.018,
         31.771
        ],
        [
         113.989,
         31.75
        ],
        [
         113.952,
         31.794
        ],
        [
         113.958,
         31.853
        ],
        [
         113.915,
         31.877
        ],
        [
         113.894,
         31.847
        ],
        [
         113.854,
         31.843
        ],
        [
         113.831,
         31.879
        ],
        [
         113.832,
         31.919
        ],
        [
         113.806,
         31.929
        ],
        [
         113.817,
         31.964
        ],
        [
         113.758,
         31.99
        ],
        [
         113.792,
         32.036
        ],
        [
         113.729,
         32.083
        ],
        [
         113.723,
         32.124
        ],
        [
         113.75,
         32.116
        ],
        [
         113.782,
         32.185
        ],
        [
         113.753,
         32.216
        ],
        [
         113.739,
         32.256
        ],
        [
         113.749,
         32.273
        ],
        [
         113.769,
         32.301
        ],
        [
         113.754,
         32.328
        ],
        [
         113.768,
         32.37
        ],
        [
         113.736,
         32.411
        ],
        [
         113.7,
         32.421
        ],
        [
         113.651,
         32.413
        ],
        [
         113.625,
         32.361
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
         112.37,
         32.367
        ],
        [
         112.37,
         30.69
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
        112.37,
        31.675
       ],
       [
        112.39,
        31.657
       ],
       [
        112.432,
        31.586
       ],
       [
        112.44,
        31.496
       ],
       [
        112.417,
        31.388
       ],
       [
        112.434,
        31.308
       ],
       [
        112.521,
        31.23
       ],
       [
        112.556,
        31.219
       ],
       [
        112.572,
        31.183
       ],
       [
        112.58,
        31.118
       ],
       [
        112.569,
        31.096
       ],
       [
        112.539,
        31.077
       ],
       [
        112.523,
        31.039
       ],
       [
        112.556,
        30.939
       ],
       [
        112.599,
        30.875
       ],
       [
        112.634,
        30.848
       ],
       [
        112.632,
        30.815
       ],
       [
        112.622,
        30.787
       ],
       [
        112.605,
        30.713
       ],
       [
        112.617,
        30.69
       ]
      ]
     ]
    },
    "n": "Han"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.37,
   30.69,
   114.37,
   32.69
  ]
 }
};
