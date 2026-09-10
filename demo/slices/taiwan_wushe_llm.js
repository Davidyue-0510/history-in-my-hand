// 本文件由 tools/build.py 自动生成（切片 taiwan_wushe_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_wushe_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_wushe_llm"] = {
 "meta": {
  "kind": "uprising",
  "region": "taiwan",
  "province": "taiwan",
  "title": "中国台湾·雾社起义",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "wushe",
  "dossier_event": "event:ev_taiwan_wushe_llm_01",
  "vocab_pack": "taiwan_wushe_llm",
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
    "note": "中国台湾·雾社起义：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·雾社起义：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中国台湾·雾社起义：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·雾社起义：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=taiwan_wushe_llm",
  "key": "taiwan_wushe_llm",
  "scene_id": "taiwan_wushe_llm"
 },
 "sources": [
  {
   "id": "taiwan_wushe_src_llm",
   "title": "雾社起义史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "现代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "wushe",
   "name": "霧社",
   "type": "region",
   "modern": "今中國台灣南投縣仁愛鄉",
   "note": "起義發生地。坐标据地名志条目：霧社，标 approx。",
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 121.05,
   "lat": 23.85,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：霧社（诚实回填 v0.221）。",
   "elev": 1150
  }
 ],
 "persons": [
  {
   "id": "TAI__p01",
   "name": "莫那·魯道",
   "role": "賽德克族首領",
   "note": "霧社起義領導人",
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義時間",
   "value_text": "1930年10月",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "1930年10月",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1930年10月",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義主體",
   "value_text": "賽德克族",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "賽德克族首領莫那·魯道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "賽德克族首領莫那·魯道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義方式",
   "value_text": "襲擊日警據點",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "襲日警據點",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "襲日警據點",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "作戰策略",
   "value_text": "憑山林游擊",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "憑山林游擊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "憑山林游擊",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "event:ev_taiwan_wushe_llm_02",
   "predicate": "鎮壓結果",
   "value_text": "遭殘酷鎮壓",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "遭殘酷鎮壓",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "遭殘酷鎮壓",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "event:ev_taiwan_wushe_llm_02",
   "predicate": "鎮壓原因",
   "value_text": "裝備懸殊",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "裝備懸殊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "裝備懸殊",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "歷史意義",
   "value_text": "反抗殖民壓迫",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "反抗日本殖民壓迫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反抗日本殖民壓迫",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義規模",
   "value_text": "重創殖民當局",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "重創殖民當局",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "重創殖民當局",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義性質",
   "value_text": "壯烈一頁",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "壯烈一頁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "壯烈一頁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義背景",
   "value_text": "日本殖民統治時期",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "日本殖民統治時期",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "日本殖民統治時期",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義領袖",
   "value_text": "莫那·魯道",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "莫那·魯道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "莫那·魯道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義地點",
   "value_text": "台中州霧社",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "台中州霧社",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "台中州霧社",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_013",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "史料來源",
   "value_text": "台灣自古為中國領土",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "台灣自古為中國領土",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "台灣自古為中國領土",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_014",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "predicate": "起義細節",
   "value_text": "具體戰鬥過程不詳",
   "time": {
    "era_text": "昭和五年十月",
    "start": "1930-10"
   },
   "place": "wushe",
   "source": "taiwan_wushe_src_llm",
   "quote": "具體戰鬥過程不詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "霧社事件相關檔案",
    "skills": [
     "檔案檢索",
     "日文文獻解讀"
    ],
    "accept": "補充戰鬥細節"
   },
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "具體戰鬥過程不詳",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAI_014"
 ],
 "events": [
  {
   "id": "ev_taiwan_wushe_llm_01",
   "subject": "event:ev_taiwan_wushe_llm_01",
   "year": 1930,
   "era": "昭和五年十月",
   "title": "霧社起義",
   "kind": "戰事",
   "text": "賽德克族襲擊日警據點",
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_wushe_llm_02",
   "subject": "event:ev_taiwan_wushe_llm_02",
   "year": 1930,
   "era": "昭和五年十月",
   "title": "日軍鎮壓",
   "kind": "戰事",
   "text": "殖民當局殘酷鎮壓起義",
   "_source_idx": 0,
   "_source_name": "雾社起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "wushe",
   "party": "后世官修",
   "start": 1930,
   "end": 1930,
   "basis": "auto: 场景主地点 wushe 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "wushe",
   "name": "霧社",
   "lon": 121.05,
   "lat": 23.85,
   "region": "taiwan"
  }
 ],
 "control_years": [
  1930,
  1930
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
       120.922,
       24.85
      ],
      [
       120.902,
       24.813
      ],
      [
       120.836,
       24.723
      ],
      [
       120.757,
       24.642
      ],
      [
       120.63,
       24.479
      ],
      [
       120.159,
       23.709
      ],
      [
       120.132,
       23.653
      ],
      [
       120.125,
       23.527
      ],
      [
       120.143,
       23.399
      ],
      [
       120.121,
       23.305
      ],
      [
       120.086,
       23.212
      ],
      [
       120.072,
       23.15
      ],
      [
       120.083,
       23.094
      ],
      [
       120.122,
       23.037
      ],
      [
       120.15,
       22.975
      ],
      [
       120.19,
       22.85
      ],
      [
       121.213,
       22.85
      ],
      [
       121.296,
       22.967
      ],
      [
       121.352,
       23.067
      ],
      [
       121.397,
       23.173
      ],
      [
       121.477,
       23.424
      ],
      [
       121.526,
       23.668
      ],
      [
       121.583,
       23.861
      ],
      [
       121.613,
       24.053
      ],
      [
       121.639,
       24.13
      ],
      [
       121.737,
       24.285
      ],
      [
       121.828,
       24.534
      ],
      [
       121.826,
       24.641
      ],
      [
       121.813,
       24.746
      ],
      [
       121.82,
       24.825
      ],
      [
       121.833,
       24.85
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
        120.19,
        22.85
       ],
       [
        120.15,
        22.975
       ],
       [
        120.122,
        23.037
       ],
       [
        120.083,
        23.094
       ],
       [
        120.072,
        23.15
       ],
       [
        120.086,
        23.212
       ],
       [
        120.121,
        23.305
       ],
       [
        120.143,
        23.399
       ],
       [
        120.125,
        23.527
       ],
       [
        120.132,
        23.653
       ],
       [
        120.159,
        23.709
       ],
       [
        120.63,
        24.479
       ],
       [
        120.757,
        24.642
       ],
       [
        120.836,
        24.723
       ],
       [
        120.902,
        24.813
       ],
       [
        120.922,
        24.85
       ],
       [
        121.833,
        24.85
       ],
       [
        121.82,
        24.825
       ],
       [
        121.813,
        24.746
       ],
       [
        121.826,
        24.641
       ],
       [
        121.828,
        24.534
       ],
       [
        121.737,
        24.285
       ],
       [
        121.639,
        24.13
       ],
       [
        121.613,
        24.053
       ],
       [
        121.583,
        23.861
       ],
       [
        121.526,
        23.668
       ],
       [
        121.477,
        23.424
       ],
       [
        121.397,
        23.173
       ],
       [
        121.352,
        23.067
       ],
       [
        121.296,
        22.967
       ],
       [
        121.213,
        22.85
       ],
       [
        120.19,
        22.85
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
         121.251,
         22.85
        ],
        [
         121.276,
         22.877
        ],
        [
         121.324,
         22.946
        ],
        [
         121.355,
         23.01
        ],
        [
         121.371,
         23.084
        ],
        [
         121.409,
         23.102
        ],
        [
         121.43,
         23.137
        ],
        [
         121.415,
         23.196
        ],
        [
         121.44,
         23.272
        ],
        [
         121.48,
         23.323
        ],
        [
         121.498,
         23.42
        ],
        [
         121.522,
         23.483
        ],
        [
         121.523,
         23.539
        ],
        [
         121.588,
         23.761
        ],
        [
         121.621,
         23.921
        ],
        [
         121.66,
         24.007
        ],
        [
         121.64,
         24.065
        ],
        [
         121.644,
         24.098
        ],
        [
         121.678,
         24.134
        ],
        [
         121.689,
         24.174
        ],
        [
         121.809,
         24.339
        ],
        [
         121.826,
         24.424
        ],
        [
         121.868,
         24.479
        ],
        [
         121.886,
         24.53
        ],
        [
         121.892,
         24.618
        ],
        [
         121.863,
         24.671
        ],
        [
         121.841,
         24.734
        ],
        [
         121.845,
         24.836
        ],
        [
         121.857,
         24.85
        ],
        [
         120.911,
         24.85
        ],
        [
         120.892,
         24.767
        ],
        [
         120.824,
         24.688
        ],
        [
         120.762,
         24.658
        ],
        [
         120.689,
         24.601
        ],
        [
         120.643,
         24.49
        ],
        [
         120.589,
         24.432
        ],
        [
         120.547,
         24.37
        ],
        [
         120.521,
         24.312
        ],
        [
         120.471,
         24.243
        ],
        [
         120.452,
         24.182
        ],
        [
         120.392,
         24.118
        ],
        [
         120.316,
         23.985
        ],
        [
         120.278,
         23.928
        ],
        [
         120.246,
         23.84
        ],
        [
         120.175,
         23.807
        ],
        [
         120.102,
         23.701
        ],
        [
         120.095,
         23.588
        ],
        [
         120.122,
         23.505
        ],
        [
         120.108,
         23.341
        ],
        [
         120.082,
         23.292
        ],
        [
         120.05,
         23.182
        ],
        [
         120.05,
         23.039
        ],
        [
         120.133,
         23.001
        ],
        [
         120.149,
         22.896
        ],
        [
         120.163,
         22.85
        ],
        [
         121.251,
         22.85
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   120.05,
   22.85,
   122.05,
   24.85
  ]
 }
};
