// 本文件由 tools/build.py 自动生成（切片 taiwan_shilang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_shilang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_shilang_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "taiwan",
  "province": "taiwan",
  "title": "中国台湾·施琅统一台湾",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "taiwan",
  "dossier_event": "event:ev_taiwan_shilang_llm_01",
  "vocab_pack": "taiwan_shilang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming",
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
    "note": "中国台湾·施琅统一台湾：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·施琅统一台湾：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中国台湾·施琅统一台湾：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·施琅统一台湾：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "taiwan_shilang_llm.html",
  "key": "taiwan_shilang_llm",
  "scene_id": "taiwan_shilang_llm"
 },
 "sources": [
  {
   "id": "taiwan_shilang_src_llm",
   "title": "施琅统一台湾史料摘录",
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
   "id": "taiwan",
   "name": "台湾",
   "type": "region",
   "modern": "中国台湾",
   "note": "明郑据点。坐标据地名志条目：台湾，标 chgis。",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.6712,
   "lat": 24.14238,
   "geo_match": "chgis",
   "geo_note": "坐标据地名志条目：台湾（诚实回填 v0.221）。",
   "elev": 155
  },
  {
   "id": "penghu",
   "name": "澎湖",
   "type": "yi",
   "modern": "中国台湾澎湖",
   "note": "海战地",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "fujian",
   "name": "福建",
   "type": "region",
   "modern": "中国福建省",
   "note": "台湾府隶属",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "TAI__p01",
   "name": "施琅",
   "role": "清水师提督",
   "note": "率军攻台，力主守台",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "TAI__p02",
   "name": "郑克塽",
   "role": "明郑延平王",
   "note": "澎湖败后请降",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAI__p03",
   "name": "康熙帝",
   "role": "清帝",
   "note": "决策设府",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "predicate": "战役结果",
   "value_text": "清军克澎湖",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "penghu",
   "source": "taiwan_shilang_src_llm",
   "quote": "率舟师取澎湖",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率舟师取澎湖",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "event:ev_taiwan_shilang_llm_02",
   "predicate": "投降",
   "value_text": "郑克塽请降",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "郑克塽请降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑克塽请降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "event:ev_taiwan_shilang_llm_03",
   "predicate": "行政建置",
   "value_text": "设台湾府隶福建",
   "time": {
    "era_text": "康熙二十三年",
    "start": "1684-01-01",
    "end": "1684-12-31",
    "gregorian_year": 1684
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "设台湾府，隶福建省",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设台湾府，隶福建省",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "person:TAI__p01",
   "predicate": "主张",
   "value_text": "力主守台",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "力主守台",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "力主守台",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "person:TAI__p01",
   "predicate": "上疏",
   "value_text": "上《台湾弃留疏》",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "上《台湾弃留疏》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "上《台湾弃留疏》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "place:taiwan",
   "predicate": "地理价值",
   "value_text": "野沃土腴，东南屏蔽",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "野沃土腴，乃东南之屏蔽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "野沃土腴，乃东南之屏蔽",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "predicate": "兵力",
   "value_text": "施琅率舟师",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "penghu",
   "source": "taiwan_shilang_src_llm",
   "quote": "率舟师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率舟师",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "event:ev_taiwan_shilang_llm_02",
   "predicate": "投降原因",
   "value_text": "澎湖败后请降",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "郑克塽请降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑克塽请降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_shilang_llm_03",
   "predicate": "隶属关系",
   "value_text": "台湾府隶福建",
   "time": {
    "era_text": "康熙二十三年",
    "start": "1684-01-01",
    "end": "1684-12-31",
    "gregorian_year": 1684
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "隶福建省",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隶福建省",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "predicate": "战役性质",
   "value_text": "清郑海战",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "penghu",
   "source": "taiwan_shilang_src_llm",
   "quote": "取澎湖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "取澎湖",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "event:ev_taiwan_shilang_llm_03",
   "predicate": "历史意义",
   "value_text": "台湾重归一统",
   "time": {
    "era_text": "康熙二十三年",
    "start": "1684-01-01",
    "end": "1684-12-31",
    "gregorian_year": 1684
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "台湾重归一统",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "台湾重归一统",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "predicate": "战役损失",
   "value_text": "郑军败绩",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "penghu",
   "source": "taiwan_shilang_src_llm",
   "quote": "郑克塽请降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "theater",
   "note": "原文未详",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑克塽请降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_013",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "predicate": "战役损失",
   "value_text": "清军伤亡未载",
   "time": {
    "era_text": "康熙二十二年",
    "start": "1683-01-01",
    "end": "1683-12-31",
    "gregorian_year": 1683
   },
   "place": "penghu",
   "source": "taiwan_shilang_src_llm",
   "quote": "率舟师取澎湖",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "史料缺",
   "dims": [
    6
   ],
   "lead": {
    "where": "澎湖海战",
    "skills": [
     "军事史"
    ],
    "accept": "清军伤亡数据"
   },
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率舟师取澎湖",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_014",
   "subject": "event:ev_taiwan_shilang_llm_03",
   "predicate": "行政归属",
   "value_text": "台湾府隶福建",
   "time": {
    "era_text": "康熙二十三年",
    "start": "1684-01-01",
    "end": "1684-12-31",
    "gregorian_year": 1684
   },
   "place": "taiwan",
   "source": "taiwan_shilang_src_llm",
   "quote": "隶福建省",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "学界共识",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隶福建省",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAI_013"
 ],
 "events": [
  {
   "id": "ev_taiwan_shilang_llm_01",
   "subject": "event:ev_taiwan_shilang_llm_01",
   "year": 1683,
   "era": "康熙二十二年",
   "title": "澎湖海战",
   "kind": "战事",
   "text": "施琅率舟师取澎湖，郑军败",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_shilang_llm_02",
   "subject": "event:ev_taiwan_shilang_llm_02",
   "year": 1683,
   "era": "康熙二十二年",
   "title": "郑克塽降清",
   "kind": "行政",
   "text": "郑克塽请降，台湾归清",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_shilang_llm_03",
   "subject": "event:ev_taiwan_shilang_llm_03",
   "year": 1684,
   "era": "康熙二十三年",
   "title": "设台湾府",
   "kind": "建置",
   "text": "清设台湾府，隶福建省",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "fujian",
   "to": "penghu",
   "type": "military",
   "label": "施琅舟师攻澎湖",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "penghu",
   "to": "taiwan",
   "type": "military",
   "label": "郑军败退台湾",
   "_source_idx": 0,
   "_source_name": "施琅统一台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "taiwan",
   "party": "后世官修",
   "start": 1683,
   "end": 1684,
   "basis": "auto: 场景主地点 taiwan 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "taiwan",
   "name": "台湾",
   "lon": 120.6712,
   "lat": 24.14238,
   "region": "taiwan"
  }
 ],
 "control_years": [
  1683,
  1684
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
       121.317,
       25.142
      ],
      [
       121.095,
       25.065
      ],
      [
       121.041,
       25.033
      ],
      [
       120.964,
       24.928
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
       120.074,
       23.142
      ],
      [
       121.385,
       23.142
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
       121.671,
       24.181
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
        120.074,
        23.142
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
        120.964,
        24.928
       ],
       [
        121.041,
        25.033
       ],
       [
        121.095,
        25.065
       ],
       [
        121.317,
        25.142
       ],
       [
        121.671,
        25.142
       ],
       [
        121.671,
        24.181
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
        121.385,
        23.142
       ],
       [
        120.074,
        23.142
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
         121.429,
         23.142
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
         121.671,
         24.127
        ],
        [
         121.671,
         25.142
        ],
        [
         121.324,
         25.142
        ],
        [
         121.32,
         25.141
        ],
        [
         121.209,
         25.127
        ],
        [
         121.133,
         25.078
        ],
        [
         121.102,
         25.075
        ],
        [
         121.025,
         25.041
        ],
        [
         121.01,
         24.994
        ],
        [
         120.961,
         24.94
        ],
        [
         120.915,
         24.865
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
         120.039,
         23.142
        ],
        [
         121.429,
         23.142
        ]
       ]
      ],
      [
       [
        [
         119.671,
         23.549
        ],
        [
         119.691,
         23.547
        ],
        [
         119.678,
         23.6
        ],
        [
         119.671,
         23.601
        ],
        [
         119.671,
         23.549
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
   119.671,
   23.142,
   121.671,
   25.142
  ]
 }
};
