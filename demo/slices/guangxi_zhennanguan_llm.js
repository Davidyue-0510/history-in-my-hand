// 本文件由 tools/build.py 自动生成（切片 guangxi_zhennanguan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guangxi_zhennanguan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guangxi_zhennanguan_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "qing_modern",
  "province": "guangxi",
  "title": "镇南关大捷（1885）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "zhennanguan",
  "dossier_event": "event:ev_guangxi_zhennanguan_llm_01",
  "vocab_pack": "guangxi_zhennanguan_llm",
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
    "note": "镇南关大捷（1885）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "镇南关大捷（1885）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "镇南关大捷（1885）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "镇南关大捷（1885）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   5,
   6
  ],
  "page": "guangxi_zhennanguan_llm.html",
  "key": "guangxi_zhennanguan_llm",
  "scene_id": "guangxi_zhennanguan_llm"
 },
 "sources": [
  {
   "id": "zhennanguan_llm_src",
   "title": "镇南关大捷史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1885",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zhennanguan",
   "name": "鎮南關",
   "type": "fortress",
   "modern": "今中國廣西友誼關",
   "note": "中越邊境關隘。坐标据地名志条目（别名 鎮南關→友谊关），标 approx。",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 106.72,
   "lat": 21.95,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 鎮南關→友谊关）（诚实回填 v0.221）。",
   "elev": 352
  },
  {
   "id": "liangshan",
   "name": "諒山",
   "type": "city",
   "modern": "今越南諒山省",
   "note": "越南北部重鎮",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "GUA__p01",
   "name": "馮子材",
   "role": "幫辦廣西軍務",
   "note": "老將，持矛躍出，大敗法軍",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "GUA__p02",
   "name": "法軍主將",
   "role": "法軍指揮官",
   "note": "率三路攻鎮南關",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "GUA__p03",
   "name": "清廷",
   "role": "朝廷決策者",
   "note": "戰後妥協簽約",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GUA_001",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "戰役結果",
   "value_text": "清軍大敗法軍",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "大敗法軍於鎮南關",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大敗法軍於鎮南關",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_002",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "戰役損失",
   "value_text": "法軍損失慘重",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "法軍分三路撲關",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "法軍分三路撲關",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_003",
   "subject": "person:GUA__p01",
   "predicate": "戰術",
   "value_text": "築長牆掘壕待敵",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "築長牆、掘壕待敵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "築長牆、掘壕待敵",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_004",
   "subject": "person:GUA__p01",
   "predicate": "作戰表現",
   "value_text": "持矛躍出，諸軍肉搏",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "馮子材持矛躍出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "馮子材持矛躍出",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_005",
   "subject": "event:ev_guangxi_zhennanguan_llm_02",
   "predicate": "戰果",
   "value_text": "乘勝克復諒山",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "liangshan",
   "source": "zhennanguan_llm_src",
   "quote": "乘勝克諒山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "乘勝克諒山",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_006",
   "subject": "event:ev_guangxi_zhennanguan_llm_03",
   "predicate": "條約性質",
   "value_text": "清廷妥協簽約",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "清廷仍行妥協",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清廷仍行妥協",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_007",
   "subject": "event:ev_guangxi_zhennanguan_llm_03",
   "predicate": "時人評價",
   "value_text": "法國不勝而勝，中國不敗而敗",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "法國不勝而勝，中國不敗而敗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "法國不勝而勝，中國不敗而敗",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_008",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "戰略影響",
   "value_text": "扭轉戰局促成和談",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "扭轉戰局，促成停戰談判",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "扭轉戰局，促成停戰談判",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_009",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "兵力對比",
   "value_text": "法軍三路進攻",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "法軍分三路撲關",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "法軍分三路撲關",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_010",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "戰役損失",
   "value_text": "法軍傷亡數字不詳",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "大敗法軍",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "缺乏具體傷亡數據",
   "dims": [
    6
   ],
   "lead": {
    "where": "清代檔案或法方戰報",
    "skills": [
     "歷史考據",
     "數據比對"
    ],
    "accept": "具體傷亡數字"
   },
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大敗法軍",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_011",
   "subject": "event:ev_guangxi_zhennanguan_llm_03",
   "predicate": "條約內容",
   "value_text": "具體條款未詳述",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "簽《中法新約》",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "原文未提供細節",
   "dims": [
    3
   ],
   "lead": {
    "where": "條約文本或相關檔案",
    "skills": [
     "文獻解讀"
    ],
    "accept": "具體條款"
   },
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "簽《中法新約》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUA_012",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "predicate": "戰役意義",
   "value_text": "被視為清朝難得勝利",
   "time": {
    "era_text": "光緒十一年",
    "start": "1885-01-01",
    "end": "1885-12-31",
    "gregorian_year": 1885
   },
   "place": "zhennanguan",
   "source": "zhennanguan_llm_src",
   "quote": "鎮南關大捷",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "theater",
   "note": "史家評價",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鎮南關大捷",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "GUA_010",
  "GUA_011"
 ],
 "events": [
  {
   "id": "ev_guangxi_zhennanguan_llm_01",
   "subject": "event:ev_guangxi_zhennanguan_llm_01",
   "year": 1885,
   "era": "光緒十一年",
   "title": "鎮南關大捷",
   "kind": "戰事",
   "text": "馮子材率軍大敗法軍於鎮南關",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_guangxi_zhennanguan_llm_02",
   "subject": "event:ev_guangxi_zhennanguan_llm_02",
   "year": 1885,
   "era": "光緒十一年",
   "title": "乘勝克諒山",
   "kind": "戰事",
   "text": "清軍乘勝收復諒山",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_guangxi_zhennanguan_llm_03",
   "subject": "event:ev_guangxi_zhennanguan_llm_03",
   "year": 1885,
   "era": "光緒十一年",
   "title": "簽訂中法新約",
   "kind": "外交",
   "text": "清廷妥協，簽訂新約",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "zhennanguan",
   "to": "liangshan",
   "type": "military",
   "label": "清軍乘勝追擊",
   "_source_idx": 0,
   "_source_name": "镇南关大捷史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "zhennanguan",
   "party": "后世官修",
   "start": 1885,
   "end": 1885,
   "basis": "auto: 场景主地点 zhennanguan 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "zhennanguan",
   "name": "鎮南關",
   "lon": 106.72,
   "lat": 21.95,
   "region": "qing_modern"
  }
 ],
 "control_years": [
  1885,
  1885
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
       107.476,
       21.269
      ],
      [
       107.453,
       21.235
      ],
      [
       107.404,
       21.094
      ],
      [
       107.459,
       21.092
      ],
      [
       107.603,
       21.217
      ],
      [
       107.563,
       21.22
      ],
      [
       107.476,
       21.269
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
       107.479,
       20.952
      ],
      [
       107.475,
       20.95
      ],
      [
       107.534,
       20.95
      ],
      [
       107.551,
       20.981
      ],
      [
       107.551,
       21.034
      ],
      [
       107.519,
       21.013
      ],
      [
       107.479,
       20.952
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
        106.68,
        20.95
       ],
       [
        106.675,
        20.96
       ],
       [
        106.683,
        21.0
       ],
       [
        106.725,
        21.0
       ],
       [
        106.76,
        20.991
       ],
       [
        106.821,
        20.958
       ],
       [
        106.886,
        20.95
       ],
       [
        106.936,
        20.974
       ],
       [
        106.981,
        20.971
       ],
       [
        107.019,
        20.991
       ],
       [
        107.075,
        20.999
       ],
       [
        107.112,
        20.96
       ],
       [
        107.159,
        20.95
       ],
       [
        107.167,
        20.95
       ],
       [
        107.354,
        21.055
       ],
       [
        107.373,
        21.128
       ],
       [
        107.376,
        21.194
       ],
       [
        107.41,
        21.285
       ],
       [
        107.527,
        21.336
       ],
       [
        107.637,
        21.368
       ],
       [
        107.707,
        21.406
       ],
       [
        107.72,
        21.417
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
        107.603,
        21.217
       ],
       [
        107.459,
        21.092
       ],
       [
        107.404,
        21.094
       ],
       [
        107.453,
        21.235
       ],
       [
        107.476,
        21.269
       ],
       [
        107.563,
        21.22
       ],
       [
        107.603,
        21.217
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
        107.475,
        20.95
       ],
       [
        107.479,
        20.952
       ],
       [
        107.519,
        21.013
       ],
       [
        107.551,
        21.034
       ],
       [
        107.551,
        20.981
       ],
       [
        107.534,
        20.95
       ],
       [
        107.475,
        20.95
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
        105.72,
        20.95
       ],
       [
        105.72,
        22.95
       ],
       [
        107.72,
        22.95
       ],
       [
        107.72,
        21.417
       ],
       [
        107.707,
        21.406
       ],
       [
        107.637,
        21.368
       ],
       [
        107.527,
        21.336
       ],
       [
        107.41,
        21.285
       ],
       [
        107.376,
        21.194
       ],
       [
        107.373,
        21.128
       ],
       [
        107.354,
        21.055
       ],
       [
        107.167,
        20.95
       ],
       [
        107.159,
        20.95
       ],
       [
        107.112,
        20.96
       ],
       [
        107.075,
        20.999
       ],
       [
        107.019,
        20.991
       ],
       [
        106.981,
        20.971
       ],
       [
        106.936,
        20.974
       ],
       [
        106.886,
        20.95
       ],
       [
        106.821,
        20.958
       ],
       [
        106.76,
        20.991
       ],
       [
        106.725,
        21.0
       ],
       [
        106.683,
        21.0
       ],
       [
        106.675,
        20.96
       ],
       [
        106.68,
        20.95
       ],
       [
        105.72,
        20.95
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
         107.72,
         22.95
        ],
        [
         105.86,
         22.95
        ],
        [
         105.879,
         22.917
        ],
        [
         105.894,
         22.937
        ],
        [
         105.959,
         22.949
        ],
        [
         105.994,
         22.938
        ],
        [
         106.0,
         22.95
        ],
        [
         106.232,
         22.95
        ],
        [
         106.27,
         22.907
        ],
        [
         106.258,
         22.89
        ],
        [
         106.287,
         22.867
        ],
        [
         106.366,
         22.858
        ],
        [
         106.371,
         22.878
        ],
        [
         106.414,
         22.877
        ],
        [
         106.504,
         22.91
        ],
        [
         106.526,
         22.947
        ],
        [
         106.562,
         22.923
        ],
        [
         106.606,
         22.926
        ],
        [
         106.631,
         22.881
        ],
        [
         106.657,
         22.863
        ],
        [
         106.675,
         22.892
        ],
        [
         106.717,
         22.882
        ],
        [
         106.709,
         22.866
        ],
        [
         106.775,
         22.813
        ],
        [
         106.776,
         22.814
        ],
        [
         106.778,
         22.814
        ],
        [
         106.779,
         22.814
        ],
        [
         106.78,
         22.813
        ],
        [
         106.781,
         22.813
        ],
        [
         106.785,
         22.813
        ],
        [
         106.796,
         22.812
        ],
        [
         106.802,
         22.815
        ],
        [
         106.804,
         22.817
        ],
        [
         106.809,
         22.818
        ],
        [
         106.814,
         22.818
        ],
        [
         106.839,
         22.803
        ],
        [
         106.821,
         22.769
        ],
        [
         106.769,
         22.739
        ],
        [
         106.78,
         22.709
        ],
        [
         106.756,
         22.69
        ],
        [
         106.712,
         22.575
        ],
        [
         106.65,
         22.575
        ],
        [
         106.614,
         22.602
        ],
        [
         106.585,
         22.517
        ],
        [
         106.588,
         22.473
        ],
        [
         106.56,
         22.456
        ],
        [
         106.589,
         22.374
        ],
        [
         106.563,
         22.346
        ],
        [
         106.663,
         22.331
        ],
        [
         106.67,
         22.283
        ],
        [
         106.689,
         22.26
        ],
        [
         106.702,
         22.207
        ],
        [
         106.673,
         22.182
        ],
        [
         106.706,
         22.161
        ],
        [
         106.692,
         22.135
        ],
        [
         106.716,
         22.09
        ],
        [
         106.706,
         22.022
        ],
        [
         106.683,
         22.0
        ],
        [
         106.698,
         21.96
        ],
        [
         106.738,
         22.008
        ],
        [
         106.79,
         22.005
        ],
        [
         106.802,
         21.982
        ],
        [
         106.859,
         21.986
        ],
        [
         106.926,
         21.968
        ],
        [
         106.936,
         21.934
        ],
        [
         106.974,
         21.923
        ],
        [
         107.0,
         21.948
        ],
        [
         107.06,
         21.915
        ],
        [
         107.059,
         21.887
        ],
        [
         107.019,
         21.859
        ],
        [
         107.018,
         21.819
        ],
        [
         107.094,
         21.803
        ],
        [
         107.149,
         21.759
        ],
        [
         107.195,
         21.737
        ],
        [
         107.199,
         21.719
        ],
        [
         107.242,
         21.703
        ],
        [
         107.272,
         21.727
        ],
        [
         107.311,
         21.734
        ],
        [
         107.357,
         21.668
        ],
        [
         107.364,
         21.602
        ],
        [
         107.388,
         21.594
        ],
        [
         107.431,
         21.642
        ],
        [
         107.478,
         21.66
        ],
        [
         107.501,
         21.614
        ],
        [
         107.487,
         21.596
        ],
        [
         107.547,
         21.586
        ],
        [
         107.585,
         21.615
        ],
        [
         107.603,
         21.598
        ],
        [
         107.713,
         21.616
        ],
        [
         107.72,
         21.619
        ],
        [
         107.72,
         22.95
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       105.898,
       20.95
      ],
      [
       105.897,
       20.964
      ],
      [
       105.836,
       21.051
      ],
      [
       105.725,
       21.122
      ],
      [
       105.72,
       21.124
      ]
     ]
    },
    "n": "Hong"
   }
  ],
  "lakes": [],
  "_bbox": [
   105.72,
   20.95,
   107.72,
   22.95
  ]
 }
};
