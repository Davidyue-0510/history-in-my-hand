// 本文件由 tools/build.py 自动生成（切片 minyue_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["minyue_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["minyue_llm"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "province": "fujian",
  "title": "汉初闽越国（福州）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dongye",
  "dossier_event": "event:ev_minyue_llm_01",
  "vocab_pack": "inline:minyue_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
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
    "note": "汉初闽越国（福州）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉初闽越国（福州）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "汉初闽越国（福州）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉初闽越国（福州）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
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
  "page": "county.html?scene=minyue_llm",
  "key": "minyue_llm",
  "scene_id": "minyue_llm"
 },
 "sources": [
  {
   "id": "shiji_minyue_llm",
   "title": "史记·东越列传",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "西汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dongye",
   "name": "东冶",
   "type": "city",
   "modern": "今中国福建省福州市",
   "note": "闽越国都",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.3,
   "lat": 26.08,
   "geo_unresolved": true,
   "elev": 179
  },
  {
   "id": "dongou",
   "name": "东瓯",
   "type": "city",
   "modern": "今中国浙江省温州市",
   "note": "东海王都城",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.65,
   "lat": 28.0,
   "geo_unresolved": true,
   "elev": 29
  },
  {
   "id": "minzhong",
   "name": "闽中",
   "type": "region",
   "modern": "今中国福建省",
   "note": "秦闽中郡地",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.5,
   "lat": 26.0,
   "geo_unresolved": true,
   "elev": 1127
  },
  {
   "id": "jianghuai",
   "name": "江淮",
   "type": "region",
   "modern": "今中国长江淮河之间",
   "note": "汉徙闽越民于此",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "MIN__p01",
   "name": "无诸",
   "role": "闽越王",
   "note": "汉高祖五年受封",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p02",
   "name": "摇",
   "role": "东海王",
   "note": "孝惠三年受封",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "MIN_001",
   "subject": "event:ev_minyue_llm_01",
   "predicate": "封王",
   "value_text": "汉高祖封无诸为闽越王",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "汉高祖五年立无诸为闽越王",
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
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖五年立无诸为闽越王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_002",
   "subject": "event:ev_minyue_llm_02",
   "predicate": "封王",
   "value_text": "孝惠帝封摇为东海王",
   "time": {
    "era_text": "孝惠三年",
    "start": "-192"
   },
   "place": "dongou",
   "source": "shiji_minyue_llm",
   "quote": "孝惠三年复立摇为东海王",
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
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孝惠三年复立摇为东海王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_003",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "灭国",
   "value_text": "汉发兵灭闽越",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "元封元年汉发兵灭闽越",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元封元年汉发兵灭闽越",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_004",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "徙民",
   "value_text": "徙闽越民于江淮",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "jianghuai",
   "source": "shiji_minyue_llm",
   "quote": "徙其民于江淮之间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "徙其民于江淮之间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_005",
   "subject": "place:dongye",
   "predicate": "都城",
   "value_text": "闽越国都东冶",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "都东冶",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都东冶",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_006",
   "subject": "place:dongou",
   "predicate": "都城",
   "value_text": "东海王都东瓯",
   "time": {
    "era_text": "孝惠三年",
    "start": "-192"
   },
   "place": "dongou",
   "source": "shiji_minyue_llm",
   "quote": "都东瓯",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都东瓯",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_007",
   "subject": "place:minzhong",
   "predicate": "地理特征",
   "value_text": "闽越依山傍海",
   "time": {
    "era_text": "汉初",
    "start": "-202"
   },
   "place": "minzhong",
   "source": "shiji_minyue_llm",
   "quote": "依山傍海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依山傍海",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_008",
   "subject": "place:minzhong",
   "predicate": "风俗",
   "value_text": "椎髻左衽善用舟",
   "time": {
    "era_text": "汉初",
    "start": "-202"
   },
   "place": "minzhong",
   "source": "shiji_minyue_llm",
   "quote": "椎髻左衽善用舟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "椎髻左衽善用舟",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_009",
   "subject": "place:minzhong",
   "predicate": "与汉关系",
   "value_text": "时与汉廷相攻",
   "time": {
    "era_text": "汉初",
    "start": "-202"
   },
   "place": "minzhong",
   "source": "shiji_minyue_llm",
   "quote": "时与汉廷相攻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "时与汉廷相攻",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_010",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "灭国原因",
   "value_text": "汉廷因闽越相攻而发兵",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "时与汉廷相攻",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "推测",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "时与汉廷相攻",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_011",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "灭国影响",
   "value_text": "闽越国灭亡",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "汉发兵灭闽越",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉发兵灭闽越",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_012",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "徙民规模",
   "value_text": "闽越民被徙江淮",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "jianghuai",
   "source": "shiji_minyue_llm",
   "quote": "徙其民于江淮之间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "徙其民于江淮之间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_013",
   "subject": "place:dongye",
   "predicate": "现代对应",
   "value_text": "东冶即今福州",
   "time": {
    "era_text": "现代",
    "start": "2024"
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "今福州",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "现代考订",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "今福州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_014",
   "subject": "place:dongou",
   "predicate": "现代对应",
   "value_text": "东瓯即今温州",
   "time": {
    "era_text": "现代",
    "start": "2024"
   },
   "place": "dongou",
   "source": "shiji_minyue_llm",
   "quote": "今温州",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "现代考订",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "今温州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_015",
   "subject": "event:ev_minyue_llm_03",
   "predicate": "徙民数量",
   "value_text": "徙民数量未详",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "jianghuai",
   "source": "shiji_minyue_llm",
   "quote": "徙其民于江淮之间",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    6
   ],
   "lead": {
    "where": "《史记·东越列传》",
    "skills": [
     "历史人口学"
    ],
    "accept": "需进一步考证"
   },
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "徙其民于江淮之间",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "minyue_llm_DIM2",
   "subject": "技术:矿冶",
   "predicate": "技术维度",
   "value_text": "汉初闽越国（福州） 的史料涉及矿冶（「e_text\": \"闽越国都东冶\", \"time\": {\"er」），补标技术维度（推断）。",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "dongye",
   "source": "shiji_minyue_llm",
   "quote": "「e_text\": \"闽越国都东冶\", \"time\": {\"er」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "MIN_015"
 ],
 "events": [
  {
   "id": "ev_minyue_llm_01",
   "subject": "event:ev_minyue_llm_01",
   "year": -202,
   "era": "汉高祖五年",
   "title": "封无诸为闽越王",
   "kind": "建置",
   "text": "汉高祖封无诸为闽越王",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_minyue_llm_02",
   "subject": "event:ev_minyue_llm_02",
   "year": -192,
   "era": "孝惠三年",
   "title": "封摇为东海王",
   "kind": "建置",
   "text": "孝惠帝封摇为东海王",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_minyue_llm_03",
   "subject": "event:ev_minyue_llm_03",
   "year": -110,
   "era": "元封元年",
   "title": "汉灭闽越",
   "kind": "战事",
   "text": "汉发兵灭闽越，徙民江淮",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "dongye",
   "to": "jianghuai",
   "type": "military",
   "label": "汉徙闽越民路线",
   "_source_idx": 0,
   "_source_name": "史记·东越列传",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.65,
       25.224
      ],
      [
       121.643,
       25.232
      ],
      [
       121.594,
       25.275
      ],
      [
       121.517,
       25.277
      ],
      [
       121.45,
       25.249
      ],
      [
       121.365,
       25.159
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
       121.017,
       25.0
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
       119.797,
       25.623
      ],
      [
       119.778,
       25.653
      ],
      [
       119.723,
       25.639
      ],
      [
       119.696,
       25.591
      ],
      [
       119.723,
       25.551
      ],
      [
       119.699,
       25.495
      ],
      [
       119.7,
       25.433
      ],
      [
       119.747,
       25.411
      ],
      [
       119.821,
       25.457
      ],
      [
       119.832,
       25.48
      ],
      [
       119.809,
       25.508
      ],
      [
       119.839,
       25.56
      ],
      [
       119.838,
       25.591
      ],
      [
       119.829,
       25.607
      ],
      [
       119.797,
       25.623
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
       121.205,
       28.204
      ],
      [
       121.134,
       28.135
      ],
      [
       121.132,
       28.063
      ],
      [
       121.164,
       28.062
      ],
      [
       121.251,
       28.086
      ],
      [
       121.251,
       28.145
      ],
      [
       121.234,
       28.181
      ],
      [
       121.205,
       28.204
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
        118.953,
        25.0
       ],
       [
        118.956,
        25.005
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.236,
        25.206
       ],
       [
        119.286,
        25.232
       ],
       [
        119.244,
        25.307
       ],
       [
        119.169,
        25.356
       ],
       [
        119.146,
        25.414
       ],
       [
        119.18,
        25.45
       ],
       [
        119.263,
        25.468
       ],
       [
        119.344,
        25.446
       ],
       [
        119.422,
        25.46
       ],
       [
        119.499,
        25.409
       ],
       [
        119.593,
        25.368
       ],
       [
        119.622,
        25.391
       ],
       [
        119.619,
        25.437
       ],
       [
        119.539,
        25.591
       ],
       [
        119.553,
        25.699
       ],
       [
        119.617,
        25.823
       ],
       [
        119.648,
        25.919
       ],
       [
        119.619,
        26.004
       ],
       [
        119.501,
        26.009
       ],
       [
        119.418,
        25.954
       ],
       [
        119.332,
        25.949
       ],
       [
        119.264,
        25.975
       ],
       [
        119.139,
        26.122
       ],
       [
        119.232,
        26.104
       ],
       [
        119.313,
        26.063
       ],
       [
        119.37,
        26.054
       ],
       [
        119.463,
        26.055
       ],
       [
        119.567,
        26.127
       ],
       [
        119.693,
        26.236
       ],
       [
        119.797,
        26.3
       ],
       [
        119.881,
        26.334
       ],
       [
        119.876,
        26.371
       ],
       [
        119.84,
        26.414
       ],
       [
        119.831,
        26.45
       ],
       [
        119.785,
        26.547
       ],
       [
        119.726,
        26.609
       ],
       [
        119.638,
        26.621
       ],
       [
        119.624,
        26.676
       ],
       [
        119.59,
        26.73
       ],
       [
        119.588,
        26.785
       ],
       [
        119.652,
        26.747
       ],
       [
        119.71,
        26.729
       ],
       [
        119.767,
        26.775
       ],
       [
        119.789,
        26.831
       ],
       [
        119.824,
        26.846
       ],
       [
        119.815,
        26.798
       ],
       [
        119.821,
        26.737
       ],
       [
        119.842,
        26.689
       ],
       [
        119.879,
        26.683
       ],
       [
        119.882,
        26.61
       ],
       [
        119.968,
        26.586
       ],
       [
        120.043,
        26.634
       ],
       [
        120.087,
        26.672
       ],
       [
        120.097,
        26.781
       ],
       [
        120.139,
        26.886
       ],
       [
        120.279,
        27.097
       ],
       [
        120.385,
        27.156
       ],
       [
        120.469,
        27.256
       ],
       [
        120.54,
        27.318
       ],
       [
        120.608,
        27.412
       ],
       [
        120.629,
        27.482
       ],
       [
        120.588,
        27.581
       ],
       [
        120.665,
        27.639
       ],
       [
        120.661,
        27.688
       ],
       [
        120.685,
        27.745
       ],
       [
        120.833,
        27.891
       ],
       [
        120.833,
        27.938
       ],
       [
        120.763,
        27.977
       ],
       [
        120.748,
        28.01
       ],
       [
        120.813,
        28.013
       ],
       [
        120.892,
        28.004
       ],
       [
        120.959,
        28.037
       ],
       [
        121.035,
        28.157
       ],
       [
        121.098,
        28.291
       ],
       [
        121.146,
        28.327
       ],
       [
        121.217,
        28.346
       ],
       [
        121.272,
        28.222
       ],
       [
        121.355,
        28.23
       ],
       [
        121.51,
        28.324
       ],
       [
        121.61,
        28.292
       ],
       [
        121.602,
        28.367
       ],
       [
        121.538,
        28.521
       ],
       [
        121.475,
        28.641
       ],
       [
        121.519,
        28.714
       ],
       [
        121.59,
        28.735
       ],
       [
        121.63,
        28.768
       ],
       [
        121.65,
        28.819
       ],
       [
        121.65,
        28.86
       ],
       [
        121.54,
        28.932
       ],
       [
        121.641,
        28.916
       ],
       [
        121.65,
        28.925
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
        121.017,
        25.0
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
        121.365,
        25.159
       ],
       [
        121.45,
        25.249
       ],
       [
        121.517,
        25.277
       ],
       [
        121.594,
        25.275
       ],
       [
        121.643,
        25.232
       ],
       [
        121.65,
        25.224
       ],
       [
        121.65,
        25.0
       ],
       [
        121.017,
        25.0
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
        119.821,
        25.457
       ],
       [
        119.747,
        25.411
       ],
       [
        119.7,
        25.433
       ],
       [
        119.699,
        25.495
       ],
       [
        119.723,
        25.551
       ],
       [
        119.696,
        25.591
       ],
       [
        119.723,
        25.639
       ],
       [
        119.778,
        25.653
       ],
       [
        119.797,
        25.623
       ],
       [
        119.829,
        25.607
       ],
       [
        119.838,
        25.591
       ],
       [
        119.839,
        25.56
       ],
       [
        119.809,
        25.508
       ],
       [
        119.832,
        25.48
       ],
       [
        119.821,
        25.457
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
        121.251,
        28.086
       ],
       [
        121.164,
        28.062
       ],
       [
        121.132,
        28.063
       ],
       [
        121.134,
        28.135
       ],
       [
        121.205,
        28.204
       ],
       [
        121.234,
        28.181
       ],
       [
        121.251,
        28.145
       ],
       [
        121.251,
        28.086
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
        116.5,
        25.0
       ],
       [
        116.5,
        29.0
       ],
       [
        121.65,
        29.0
       ],
       [
        121.65,
        28.925
       ],
       [
        121.641,
        28.916
       ],
       [
        121.54,
        28.932
       ],
       [
        121.65,
        28.86
       ],
       [
        121.65,
        28.819
       ],
       [
        121.63,
        28.768
       ],
       [
        121.59,
        28.735
       ],
       [
        121.519,
        28.714
       ],
       [
        121.475,
        28.641
       ],
       [
        121.538,
        28.521
       ],
       [
        121.602,
        28.367
       ],
       [
        121.61,
        28.292
       ],
       [
        121.51,
        28.324
       ],
       [
        121.355,
        28.23
       ],
       [
        121.272,
        28.222
       ],
       [
        121.217,
        28.346
       ],
       [
        121.146,
        28.327
       ],
       [
        121.098,
        28.291
       ],
       [
        121.035,
        28.157
       ],
       [
        120.959,
        28.037
       ],
       [
        120.892,
        28.004
       ],
       [
        120.813,
        28.013
       ],
       [
        120.748,
        28.01
       ],
       [
        120.763,
        27.977
       ],
       [
        120.833,
        27.938
       ],
       [
        120.833,
        27.891
       ],
       [
        120.685,
        27.745
       ],
       [
        120.661,
        27.688
       ],
       [
        120.665,
        27.639
       ],
       [
        120.588,
        27.581
       ],
       [
        120.629,
        27.482
       ],
       [
        120.608,
        27.412
       ],
       [
        120.54,
        27.318
       ],
       [
        120.469,
        27.256
       ],
       [
        120.385,
        27.156
       ],
       [
        120.279,
        27.097
       ],
       [
        120.139,
        26.886
       ],
       [
        120.097,
        26.781
       ],
       [
        120.087,
        26.672
       ],
       [
        120.043,
        26.634
       ],
       [
        119.968,
        26.586
       ],
       [
        119.882,
        26.61
       ],
       [
        119.879,
        26.683
       ],
       [
        119.842,
        26.689
       ],
       [
        119.821,
        26.737
       ],
       [
        119.815,
        26.798
       ],
       [
        119.824,
        26.846
       ],
       [
        119.789,
        26.831
       ],
       [
        119.767,
        26.775
       ],
       [
        119.71,
        26.729
       ],
       [
        119.652,
        26.747
       ],
       [
        119.588,
        26.785
       ],
       [
        119.59,
        26.73
       ],
       [
        119.624,
        26.676
       ],
       [
        119.638,
        26.621
       ],
       [
        119.726,
        26.609
       ],
       [
        119.785,
        26.547
       ],
       [
        119.831,
        26.45
       ],
       [
        119.84,
        26.414
       ],
       [
        119.876,
        26.371
       ],
       [
        119.881,
        26.334
       ],
       [
        119.797,
        26.3
       ],
       [
        119.693,
        26.236
       ],
       [
        119.567,
        26.127
       ],
       [
        119.463,
        26.055
       ],
       [
        119.37,
        26.054
       ],
       [
        119.313,
        26.063
       ],
       [
        119.232,
        26.104
       ],
       [
        119.139,
        26.122
       ],
       [
        119.264,
        25.975
       ],
       [
        119.332,
        25.949
       ],
       [
        119.418,
        25.954
       ],
       [
        119.501,
        26.009
       ],
       [
        119.619,
        26.004
       ],
       [
        119.648,
        25.919
       ],
       [
        119.617,
        25.823
       ],
       [
        119.553,
        25.699
       ],
       [
        119.539,
        25.591
       ],
       [
        119.619,
        25.437
       ],
       [
        119.622,
        25.391
       ],
       [
        119.593,
        25.368
       ],
       [
        119.499,
        25.409
       ],
       [
        119.422,
        25.46
       ],
       [
        119.344,
        25.446
       ],
       [
        119.263,
        25.468
       ],
       [
        119.18,
        25.45
       ],
       [
        119.146,
        25.414
       ],
       [
        119.169,
        25.356
       ],
       [
        119.244,
        25.307
       ],
       [
        119.286,
        25.232
       ],
       [
        119.236,
        25.206
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.956,
        25.005
       ],
       [
        118.953,
        25.0
       ],
       [
        116.5,
        25.0
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
         118.434,
         28.288
        ],
        [
         118.444,
         28.254
        ],
        [
         118.491,
         28.238
        ],
        [
         118.493,
         28.263
        ],
        [
         118.588,
         28.283
        ],
        [
         118.595,
         28.258
        ],
        [
         118.651,
         28.277
        ],
        [
         118.675,
         28.271
        ],
        [
         118.699,
         28.31
        ],
        [
         118.72,
         28.312
        ],
        [
         118.756,
         28.252
        ],
        [
         118.802,
         28.24
        ],
        [
         118.804,
         28.208
        ],
        [
         118.771,
         28.189
        ],
        [
         118.806,
         28.155
        ],
        [
         118.802,
         28.117
        ],
        [
         118.768,
         28.106
        ],
        [
         118.719,
         28.064
        ],
        [
         118.734,
         28.028
        ],
        [
         118.73,
         27.971
        ],
        [
         118.754,
         27.948
        ],
        [
         118.818,
         27.917
        ],
        [
         118.829,
         27.848
        ],
        [
         118.874,
         27.734
        ],
        [
         118.88,
         27.668
        ],
        [
         118.914,
         27.62
        ],
        [
         118.909,
         27.568
        ],
        [
         118.869,
         27.54
        ],
        [
         118.908,
         27.461
        ],
        [
         118.956,
         27.45
        ],
        [
         118.986,
         27.476
        ],
        [
         118.983,
         27.499
        ],
        [
         119.021,
         27.498
        ],
        [
         119.04,
         27.478
        ],
        [
         119.092,
         27.466
        ],
        [
         119.13,
         27.475
        ],
        [
         119.121,
         27.438
        ],
        [
         119.148,
         27.425
        ],
        [
         119.224,
         27.417
        ],
        [
         119.269,
         27.422
        ],
        [
         119.285,
         27.458
        ],
        [
         119.334,
         27.48
        ],
        [
         119.36,
         27.525
        ],
        [
         119.417,
         27.54
        ],
        [
         119.438,
         27.509
        ],
        [
         119.467,
         27.526
        ],
        [
         119.502,
         27.611
        ],
        [
         119.501,
         27.65
        ],
        [
         119.542,
         27.667
        ],
        [
         119.606,
         27.675
        ],
        [
         119.644,
         27.664
        ],
        [
         119.626,
         27.621
        ],
        [
         119.631,
         27.582
        ],
        [
         119.675,
         27.575
        ],
        [
         119.66,
         27.541
        ],
        [
         119.69,
         27.537
        ],
        [
         119.709,
         27.514
        ],
        [
         119.703,
         27.447
        ],
        [
         119.685,
         27.439
        ],
        [
         119.711,
         27.403
        ],
        [
         119.751,
         27.374
        ],
        [
         119.74,
         27.363
        ],
        [
         119.782,
         27.33
        ],
        [
         119.769,
         27.308
        ],
        [
         119.843,
         27.3
        ],
        [
         119.939,
         27.33
        ],
        [
         119.96,
         27.366
        ],
        [
         120.008,
         27.375
        ],
        [
         120.026,
         27.344
        ],
        [
         120.053,
         27.339
        ],
        [
         120.096,
         27.39
        ],
        [
         120.137,
         27.403
        ],
        [
         120.135,
         27.42
        ],
        [
         120.221,
         27.42
        ],
        [
         120.263,
         27.433
        ],
        [
         120.273,
         27.389
        ],
        [
         120.341,
         27.4
        ],
        [
         120.344,
         27.363
        ],
        [
         120.43,
         27.259
        ],
        [
         120.402,
         27.251
        ],
        [
         120.404,
         27.204
        ],
        [
         120.462,
         27.142
        ],
        [
         120.492,
         27.136
        ],
        [
         120.546,
         27.157
        ],
        [
         120.575,
         27.235
        ],
        [
         120.555,
         27.252
        ],
        [
         120.58,
         27.321
        ],
        [
         120.665,
         27.358
        ],
        [
         120.673,
         27.42
        ],
        [
         120.703,
         27.478
        ],
        [
         120.637,
         27.561
        ],
        [
         120.635,
         27.577
        ],
        [
         120.685,
         27.623
        ],
        [
         120.709,
         27.683
        ],
        [
         120.771,
         27.735
        ],
        [
         120.778,
         27.775
        ],
        [
         120.81,
         27.775
        ],
        [
         120.84,
         27.759
        ],
        [
         120.911,
         27.865
        ],
        [
         120.942,
         27.897
        ],
        [
         120.974,
         27.887
        ],
        [
         121.028,
         27.833
        ],
        [
         121.07,
         27.834
        ],
        [
         121.108,
         27.814
        ],
        [
         121.152,
         27.816
        ],
        [
         121.134,
         27.787
        ],
        [
         121.135,
         27.787
        ],
        [
         121.15,
         27.801
        ],
        [
         121.15,
         27.802
        ],
        [
         121.153,
         27.81
        ],
        [
         121.153,
         27.81
        ],
        [
         121.192,
         27.823
        ],
        [
         121.193,
         27.872
        ],
        [
         121.163,
         27.879
        ],
        [
         121.163,
         27.907
        ],
        [
         121.1,
         27.895
        ],
        [
         121.056,
         27.9
        ],
        [
         120.992,
         27.95
        ],
        [
         121.015,
         27.982
        ],
        [
         121.059,
         28.096
        ],
        [
         121.108,
         28.139
        ],
        [
         121.121,
         28.125
        ],
        [
         121.141,
         28.031
        ],
        [
         121.176,
         28.022
        ],
        [
         121.261,
         28.035
        ],
        [
         121.3,
         28.067
        ],
        [
         121.328,
         28.134
        ],
        [
         121.374,
         28.133
        ],
        [
         121.402,
         28.197
        ],
        [
         121.456,
         28.25
        ],
        [
         121.489,
         28.302
        ],
        [
         121.539,
         28.299
        ],
        [
         121.571,
         28.279
        ],
        [
         121.58,
         28.24
        ],
        [
         121.628,
         28.252
        ],
        [
         121.65,
         28.295
        ],
        [
         121.65,
         28.353
        ],
        [
         121.634,
         28.348
        ],
        [
         121.65,
         28.376
        ],
        [
         121.65,
         28.505
        ],
        [
         121.646,
         28.512
        ],
        [
         121.634,
         28.563
        ],
        [
         121.596,
         28.575
        ],
        [
         121.557,
         28.645
        ],
        [
         121.541,
         28.656
        ],
        [
         121.646,
         28.683
        ],
        [
         121.65,
         28.686
        ],
        [
         121.65,
         29.0
        ],
        [
         118.097,
         29.0
        ],
        [
         118.098,
         28.999
        ],
        [
         118.099,
         29.0
        ],
        [
         118.122,
         29.0
        ],
        [
         118.134,
         28.984
        ],
        [
         118.165,
         28.987
        ],
        [
         118.228,
         28.942
        ],
        [
         118.196,
         28.904
        ],
        [
         118.27,
         28.919
        ],
        [
         118.3,
         28.826
        ],
        [
         118.364,
         28.813
        ],
        [
         118.403,
         28.703
        ],
        [
         118.428,
         28.681
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.412,
         28.557
        ],
        [
         118.43,
         28.515
        ],
        [
         118.415,
         28.497
        ],
        [
         118.475,
         28.479
        ],
        [
         118.457,
         28.425
        ],
        [
         118.432,
         28.402
        ],
        [
         118.455,
         28.384
        ],
        [
         118.48,
         28.327
        ],
        [
         118.434,
         28.288
        ]
       ]
      ],
      [
       [
        [
         121.201,
         27.623
        ],
        [
         121.198,
         27.618
        ],
        [
         121.199,
         27.617
        ],
        [
         121.204,
         27.626
        ],
        [
         121.201,
         27.623
        ]
       ]
      ],
      [
       [
        [
         121.066,
         27.478
        ],
        [
         121.066,
         27.461
        ],
        [
         121.107,
         27.444
        ],
        [
         121.067,
         27.478
        ],
        [
         121.066,
         27.478
        ]
       ]
      ],
      [
       [
        [
         121.134,
         27.787
        ],
        [
         121.134,
         27.786
        ],
        [
         121.135,
         27.787
        ],
        [
         121.134,
         27.787
        ]
       ]
      ],
      [
       [
        [
         121.098,
         27.937
        ],
        [
         121.153,
         27.962
        ],
        [
         121.121,
         27.986
        ],
        [
         121.07,
         27.984
        ],
        [
         121.038,
         27.949
        ],
        [
         121.098,
         27.937
        ]
       ]
      ],
      [
       [
        [
         121.186,
         27.963
        ],
        [
         121.238,
         27.988
        ],
        [
         121.198,
         28.001
        ],
        [
         121.171,
         27.979
        ],
        [
         121.186,
         27.963
        ]
       ]
      ],
      [
       [
        [
         121.044,
         27.979
        ],
        [
         121.09,
         27.999
        ],
        [
         121.074,
         28.008
        ],
        [
         121.044,
         27.979
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.002,
         25.0
        ],
        [
         119.024,
         25.044
        ],
        [
         119.017,
         25.058
        ],
        [
         118.975,
         25.025
        ],
        [
         118.945,
         25.029
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.134,
         25.106
        ],
        [
         119.107,
         25.075
        ],
        [
         119.119,
         25.013
        ],
        [
         119.147,
         25.057
        ],
        [
         119.166,
         25.146
        ],
        [
         119.137,
         25.155
        ],
        [
         119.108,
         25.194
        ],
        [
         119.132,
         25.223
        ],
        [
         119.19,
         25.176
        ],
        [
         119.232,
         25.189
        ],
        [
         119.269,
         25.16
        ],
        [
         119.315,
         25.19
        ],
        [
         119.295,
         25.237
        ],
        [
         119.332,
         25.231
        ],
        [
         119.381,
         25.25
        ],
        [
         119.333,
         25.288
        ],
        [
         119.299,
         25.329
        ],
        [
         119.248,
         25.334
        ],
        [
         119.241,
         25.317
        ],
        [
         119.219,
         25.368
        ],
        [
         119.145,
         25.388
        ],
        [
         119.151,
         25.427
        ],
        [
         119.192,
         25.424
        ],
        [
         119.232,
         25.442
        ],
        [
         119.22,
         25.469
        ],
        [
         119.256,
         25.489
        ],
        [
         119.275,
         25.477
        ],
        [
         119.263,
         25.428
        ],
        [
         119.288,
         25.411
        ],
        [
         119.353,
         25.412
        ],
        [
         119.344,
         25.472
        ],
        [
         119.359,
         25.522
        ],
        [
         119.401,
         25.494
        ],
        [
         119.453,
         25.494
        ],
        [
         119.438,
         25.412
        ],
        [
         119.463,
         25.449
        ],
        [
         119.491,
         25.443
        ],
        [
         119.486,
         25.419
        ],
        [
         119.507,
         25.396
        ],
        [
         119.487,
         25.37
        ],
        [
         119.549,
         25.366
        ],
        [
         119.579,
         25.401
        ],
        [
         119.556,
         25.429
        ],
        [
         119.578,
         25.446
        ],
        [
         119.591,
         25.398
        ],
        [
         119.583,
         25.374
        ],
        [
         119.597,
         25.335
        ],
        [
         119.649,
         25.343
        ],
        [
         119.665,
         25.372
        ],
        [
         119.657,
         25.397
        ],
        [
         119.67,
         25.436
        ],
        [
         119.623,
         25.434
        ],
        [
         119.675,
         25.468
        ],
        [
         119.682,
         25.446
        ],
        [
         119.689,
         25.441
        ],
        [
         119.774,
         25.396
        ],
        [
         119.764,
         25.434
        ],
        [
         119.805,
         25.458
        ],
        [
         119.867,
         25.455
        ],
        [
         119.864,
         25.47
        ],
        [
         119.863,
         25.475
        ],
        [
         119.811,
         25.507
        ],
        [
         119.817,
         25.532
        ],
        [
         119.861,
         25.531
        ],
        [
         119.884,
         25.546
        ],
        [
         119.831,
         25.58
        ],
        [
         119.843,
         25.598
        ],
        [
         119.79,
         25.614
        ],
        [
         119.786,
         25.668
        ],
        [
         119.7,
         25.617
        ],
        [
         119.684,
         25.593
        ],
        [
         119.717,
         25.551
        ],
        [
         119.716,
         25.512
        ],
        [
         119.681,
         25.498
        ],
        [
         119.675,
         25.475
        ],
        [
         119.634,
         25.475
        ],
        [
         119.612,
         25.52
        ],
        [
         119.616,
         25.557
        ],
        [
         119.587,
         25.592
        ],
        [
         119.535,
         25.585
        ],
        [
         119.541,
         25.625
        ],
        [
         119.479,
         25.632
        ],
        [
         119.473,
         25.662
        ],
        [
         119.544,
         25.685
        ],
        [
         119.603,
         25.685
        ],
        [
         119.603,
         25.715
        ],
        [
         119.626,
         25.723
        ],
        [
         119.628,
         25.872
        ],
        [
         119.638,
         25.89
        ],
        [
         119.695,
         25.904
        ],
        [
         119.724,
         26.012
        ],
        [
         119.7,
         26.032
        ],
        [
         119.669,
         26.026
        ],
        [
         119.655,
         26.09
        ],
        [
         119.619,
         26.12
        ],
        [
         119.604,
         26.169
        ],
        [
         119.665,
         26.202
        ],
        [
         119.676,
         26.263
        ],
        [
         119.771,
         26.285
        ],
        [
         119.803,
         26.269
        ],
        [
         119.807,
         26.307
        ],
        [
         119.845,
         26.323
        ],
        [
         119.863,
         26.307
        ],
        [
         119.904,
         26.309
        ],
        [
         119.955,
         26.353
        ],
        [
         119.946,
         26.375
        ],
        [
         119.894,
         26.356
        ],
        [
         119.836,
         26.434
        ],
        [
         119.836,
         26.454
        ],
        [
         119.788,
         26.583
        ],
        [
         119.74,
         26.611
        ],
        [
         119.67,
         26.618
        ],
        [
         119.605,
         26.596
        ],
        [
         119.578,
         26.622
        ],
        [
         119.62,
         26.649
        ],
        [
         119.637,
         26.703
        ],
        [
         119.665,
         26.726
        ],
        [
         119.711,
         26.687
        ],
        [
         119.834,
         26.691
        ],
        [
         119.864,
         26.671
        ],
        [
         119.874,
         26.643
        ],
        [
         119.908,
         26.662
        ],
        [
         119.899,
         26.693
        ],
        [
         119.939,
         26.747
        ],
        [
         119.943,
         26.784
        ],
        [
         120.053,
         26.787
        ],
        [
         120.062,
         26.769
        ],
        [
         119.994,
         26.72
        ],
        [
         119.969,
         26.687
        ],
        [
         119.973,
         26.655
        ],
        [
         119.949,
         26.625
        ],
        [
         119.902,
         26.625
        ],
        [
         119.852,
         26.595
        ],
        [
         119.828,
         26.524
        ],
        [
         119.867,
         26.509
        ],
        [
         119.948,
         26.56
        ],
        [
         119.938,
         26.576
        ],
        [
         119.968,
         26.598
        ],
        [
         120.008,
         26.596
        ],
        [
         120.064,
         26.628
        ],
        [
         120.094,
         26.614
        ],
        [
         120.138,
         26.638
        ],
        [
         120.11,
         26.693
        ],
        [
         120.162,
         26.718
        ],
        [
         120.151,
         26.751
        ],
        [
         120.107,
         26.753
        ],
        [
         120.136,
         26.798
        ],
        [
         120.104,
         26.795
        ],
        [
         120.102,
         26.827
        ],
        [
         120.074,
         26.823
        ],
        [
         120.054,
         26.864
        ],
        [
         120.118,
         26.883
        ],
        [
         120.126,
         26.921
        ],
        [
         120.13,
         26.918
        ],
        [
         120.181,
         26.921
        ],
        [
         120.233,
         26.908
        ],
        [
         120.26,
         26.983
        ],
        [
         120.28,
         26.987
        ],
        [
         120.276,
         27.027
        ],
        [
         120.296,
         27.036
        ],
        [
         120.283,
         27.09
        ],
        [
         120.392,
         27.081
        ],
        [
         120.403,
         27.101
        ],
        [
         120.462,
         27.142
        ],
        [
         120.404,
         27.204
        ],
        [
         120.402,
         27.251
        ],
        [
         120.43,
         27.259
        ],
        [
         120.344,
         27.363
        ],
        [
         120.341,
         27.4
        ],
        [
         120.273,
         27.389
        ],
        [
         120.263,
         27.433
        ],
        [
         120.221,
         27.42
        ],
        [
         120.135,
         27.42
        ],
        [
         120.137,
         27.403
        ],
        [
         120.096,
         27.39
        ],
        [
         120.053,
         27.339
        ],
        [
         120.026,
         27.344
        ],
        [
         120.008,
         27.375
        ],
        [
         119.96,
         27.366
        ],
        [
         119.939,
         27.33
        ],
        [
         119.843,
         27.3
        ],
        [
         119.769,
         27.308
        ],
        [
         119.782,
         27.33
        ],
        [
         119.74,
         27.363
        ],
        [
         119.751,
         27.374
        ],
        [
         119.711,
         27.403
        ],
        [
         119.685,
         27.439
        ],
        [
         119.703,
         27.447
        ],
        [
         119.709,
         27.514
        ],
        [
         119.69,
         27.537
        ],
        [
         119.66,
         27.541
        ],
        [
         119.675,
         27.575
        ],
        [
         119.631,
         27.582
        ],
        [
         119.626,
         27.621
        ],
        [
         119.644,
         27.664
        ],
        [
         119.606,
         27.675
        ],
        [
         119.542,
         27.667
        ],
        [
         119.501,
         27.65
        ],
        [
         119.502,
         27.611
        ],
        [
         119.467,
         27.526
        ],
        [
         119.438,
         27.509
        ],
        [
         119.417,
         27.54
        ],
        [
         119.36,
         27.525
        ],
        [
         119.334,
         27.48
        ],
        [
         119.285,
         27.458
        ],
        [
         119.269,
         27.422
        ],
        [
         119.224,
         27.417
        ],
        [
         119.148,
         27.425
        ],
        [
         119.121,
         27.438
        ],
        [
         119.13,
         27.475
        ],
        [
         119.092,
         27.466
        ],
        [
         119.04,
         27.478
        ],
        [
         119.021,
         27.498
        ],
        [
         118.983,
         27.499
        ],
        [
         118.986,
         27.476
        ],
        [
         118.956,
         27.45
        ],
        [
         118.908,
         27.461
        ],
        [
         118.869,
         27.54
        ],
        [
         118.909,
         27.568
        ],
        [
         118.914,
         27.62
        ],
        [
         118.88,
         27.668
        ],
        [
         118.874,
         27.734
        ],
        [
         118.829,
         27.848
        ],
        [
         118.818,
         27.917
        ],
        [
         118.754,
         27.948
        ],
        [
         118.73,
         27.971
        ],
        [
         118.734,
         28.028
        ],
        [
         118.719,
         28.064
        ],
        [
         118.768,
         28.106
        ],
        [
         118.802,
         28.117
        ],
        [
         118.806,
         28.155
        ],
        [
         118.771,
         28.189
        ],
        [
         118.804,
         28.208
        ],
        [
         118.802,
         28.24
        ],
        [
         118.756,
         28.252
        ],
        [
         118.72,
         28.312
        ],
        [
         118.699,
         28.31
        ],
        [
         118.675,
         28.271
        ],
        [
         118.651,
         28.277
        ],
        [
         118.595,
         28.258
        ],
        [
         118.588,
         28.283
        ],
        [
         118.493,
         28.263
        ],
        [
         118.491,
         28.238
        ],
        [
         118.444,
         28.254
        ],
        [
         118.434,
         28.288
        ],
        [
         118.424,
         28.291
        ],
        [
         118.314,
         28.222
        ],
        [
         118.339,
         28.194
        ],
        [
         118.375,
         28.187
        ],
        [
         118.361,
         28.156
        ],
        [
         118.356,
         28.092
        ],
        [
         118.242,
         28.076
        ],
        [
         118.2,
         28.05
        ],
        [
         118.154,
         28.062
        ],
        [
         118.121,
         28.042
        ],
        [
         118.129,
         28.017
        ],
        [
         118.095,
         28.004
        ],
        [
         118.097,
         27.971
        ],
        [
         117.999,
         27.991
        ],
        [
         117.965,
         27.963
        ],
        [
         117.943,
         27.974
        ],
        [
         117.911,
         27.949
        ],
        [
         117.856,
         27.946
        ],
        [
         117.787,
         27.896
        ],
        [
         117.788,
         27.856
        ],
        [
         117.74,
         27.8
        ],
        [
         117.705,
         27.834
        ],
        [
         117.682,
         27.824
        ],
        [
         117.65,
         27.852
        ],
        [
         117.61,
         27.863
        ],
        [
         117.556,
         27.966
        ],
        [
         117.522,
         27.982
        ],
        [
         117.478,
         27.931
        ],
        [
         117.454,
         27.94
        ],
        [
         117.408,
         27.894
        ],
        [
         117.366,
         27.882
        ],
        [
         117.342,
         27.856
        ],
        [
         117.334,
         27.888
        ],
        [
         117.28,
         27.871
        ],
        [
         117.277,
         27.848
        ],
        [
         117.303,
         27.833
        ],
        [
         117.296,
         27.764
        ],
        [
         117.245,
         27.719
        ],
        [
         117.205,
         27.714
        ],
        [
         117.204,
         27.684
        ],
        [
         117.175,
         27.677
        ],
        [
         117.115,
         27.692
        ],
        [
         117.096,
         27.667
        ],
        [
         117.112,
         27.646
        ],
        [
         117.094,
         27.628
        ],
        [
         117.065,
         27.666
        ],
        [
         117.041,
         27.67
        ],
        [
         117.004,
         27.625
        ],
        [
         117.025,
         27.593
        ],
        [
         117.017,
         27.563
        ],
        [
         117.055,
         27.543
        ],
        [
         117.077,
         27.566
        ],
        [
         117.103,
         27.533
        ],
        [
         117.11,
         27.459
        ],
        [
         117.133,
         27.422
        ],
        [
         117.107,
         27.393
        ],
        [
         117.105,
         27.331
        ],
        [
         117.14,
         27.323
        ],
        [
         117.137,
         27.303
        ],
        [
         117.172,
         27.29
        ],
        [
         117.15,
         27.241
        ],
        [
         117.045,
         27.147
        ],
        [
         117.053,
         27.1
        ],
        [
         116.967,
         27.062
        ],
        [
         116.937,
         27.019
        ],
        [
         116.91,
         27.035
        ],
        [
         116.852,
         27.009
        ],
        [
         116.818,
         27.018
        ],
        [
         116.679,
         26.978
        ],
        [
         116.633,
         26.934
        ],
        [
         116.602,
         26.889
        ],
        [
         116.549,
         26.84
        ],
        [
         116.544,
         26.804
        ],
        [
         116.558,
         26.774
        ],
        [
         116.515,
         26.721
        ],
        [
         116.52,
         26.685
        ],
        [
         116.566,
         26.65
        ],
        [
         116.553,
         26.576
        ],
        [
         116.539,
         26.559
        ],
        [
         116.597,
         26.513
        ],
        [
         116.611,
         26.477
        ],
        [
         116.638,
         26.477
        ],
        [
         116.608,
         26.43
        ],
        [
         116.601,
         26.373
        ],
        [
         116.553,
         26.365
        ],
        [
         116.553,
         26.4
        ],
        [
         116.52,
         26.41
        ],
        [
         116.5,
         26.362
        ],
        [
         116.5,
         25.0
        ],
        [
         119.002,
         25.0
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.507,
         25.183
        ],
        [
         119.525,
         25.158
        ],
        [
         119.549,
         25.162
        ],
        [
         119.567,
         25.21
        ],
        [
         119.541,
         25.202
        ],
        [
         119.501,
         25.217
        ],
        [
         119.474,
         25.26
        ],
        [
         119.443,
         25.239
        ],
        [
         119.444,
         25.202
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         119.58,
         25.627
        ],
        [
         119.612,
         25.669
        ],
        [
         119.581,
         25.65
        ],
        [
         119.58,
         25.627
        ]
       ]
      ],
      [
       [
        [
         119.977,
         26.191
        ],
        [
         120.016,
         26.217
        ],
        [
         119.999,
         26.236
        ],
        [
         119.971,
         26.218
        ],
        [
         119.977,
         26.191
        ]
       ]
      ],
      [
       [
        [
         119.907,
         26.69
        ],
        [
         119.927,
         26.665
        ],
        [
         119.951,
         26.693
        ],
        [
         119.907,
         26.69
        ]
       ]
      ],
      [
       [
        [
         119.929,
         26.134
        ],
        [
         119.96,
         26.147
        ],
        [
         119.92,
         26.172
        ],
        [
         119.929,
         26.134
        ]
       ]
      ],
      [
       [
        [
         119.643,
         26.129
        ],
        [
         119.665,
         26.156
        ],
        [
         119.627,
         26.173
        ],
        [
         119.606,
         26.153
        ],
        [
         119.643,
         26.129
        ]
       ]
      ],
      [
       [
        [
         120.034,
         26.489
        ],
        [
         120.067,
         26.498
        ],
        [
         120.072,
         26.521
        ],
        [
         120.036,
         26.516
        ],
        [
         120.034,
         26.489
        ]
       ]
      ],
      [
       [
        [
         119.662,
         25.647
        ],
        [
         119.674,
         25.633
        ],
        [
         119.719,
         25.635
        ],
        [
         119.717,
         25.665
        ],
        [
         119.662,
         25.647
        ]
       ]
      ],
      [
       [
        [
         119.761,
         26.613
        ],
        [
         119.777,
         26.6
        ],
        [
         119.819,
         26.617
        ],
        [
         119.796,
         26.631
        ],
        [
         119.761,
         26.613
        ]
       ]
      ],
      [
       [
        [
         120.136,
         26.551
        ],
        [
         120.167,
         26.572
        ],
        [
         120.154,
         26.605
        ],
        [
         120.118,
         26.569
        ],
        [
         120.136,
         26.551
        ]
       ]
      ],
      [
       [
        [
         120.361,
         26.917
        ],
        [
         120.394,
         26.934
        ],
        [
         120.363,
         26.968
        ],
        [
         120.328,
         26.964
        ],
        [
         120.319,
         26.945
        ],
        [
         120.361,
         26.917
        ]
       ]
      ],
      [
       [
        [
         120.151,
         26.799
        ],
        [
         120.14,
         26.795
        ],
        [
         120.163,
         26.798
        ],
        [
         120.162,
         26.803
        ],
        [
         120.151,
         26.799
        ]
       ]
      ],
      [
       [
        [
         119.668,
         26.628
        ],
        [
         119.721,
         26.636
        ],
        [
         119.759,
         26.659
        ],
        [
         119.749,
         26.681
        ],
        [
         119.713,
         26.669
        ],
        [
         119.674,
         26.681
        ],
        [
         119.652,
         26.657
        ],
        [
         119.668,
         26.628
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.5,
         29.0
        ],
        [
         116.5,
         26.362
        ],
        [
         116.52,
         26.41
        ],
        [
         116.553,
         26.4
        ],
        [
         116.553,
         26.365
        ],
        [
         116.601,
         26.373
        ],
        [
         116.608,
         26.43
        ],
        [
         116.638,
         26.477
        ],
        [
         116.611,
         26.477
        ],
        [
         116.597,
         26.513
        ],
        [
         116.539,
         26.559
        ],
        [
         116.553,
         26.576
        ],
        [
         116.566,
         26.65
        ],
        [
         116.52,
         26.685
        ],
        [
         116.515,
         26.721
        ],
        [
         116.558,
         26.774
        ],
        [
         116.544,
         26.804
        ],
        [
         116.549,
         26.84
        ],
        [
         116.602,
         26.889
        ],
        [
         116.633,
         26.934
        ],
        [
         116.679,
         26.978
        ],
        [
         116.818,
         27.018
        ],
        [
         116.852,
         27.009
        ],
        [
         116.91,
         27.035
        ],
        [
         116.937,
         27.019
        ],
        [
         116.967,
         27.062
        ],
        [
         117.053,
         27.1
        ],
        [
         117.045,
         27.147
        ],
        [
         117.15,
         27.241
        ],
        [
         117.172,
         27.29
        ],
        [
         117.137,
         27.303
        ],
        [
         117.14,
         27.323
        ],
        [
         117.105,
         27.331
        ],
        [
         117.107,
         27.393
        ],
        [
         117.133,
         27.422
        ],
        [
         117.11,
         27.459
        ],
        [
         117.103,
         27.533
        ],
        [
         117.077,
         27.566
        ],
        [
         117.055,
         27.543
        ],
        [
         117.017,
         27.563
        ],
        [
         117.025,
         27.593
        ],
        [
         117.004,
         27.625
        ],
        [
         117.041,
         27.67
        ],
        [
         117.065,
         27.666
        ],
        [
         117.094,
         27.628
        ],
        [
         117.112,
         27.646
        ],
        [
         117.096,
         27.667
        ],
        [
         117.115,
         27.692
        ],
        [
         117.175,
         27.677
        ],
        [
         117.204,
         27.684
        ],
        [
         117.205,
         27.714
        ],
        [
         117.245,
         27.719
        ],
        [
         117.296,
         27.764
        ],
        [
         117.303,
         27.833
        ],
        [
         117.277,
         27.848
        ],
        [
         117.28,
         27.871
        ],
        [
         117.334,
         27.888
        ],
        [
         117.342,
         27.856
        ],
        [
         117.366,
         27.882
        ],
        [
         117.408,
         27.894
        ],
        [
         117.454,
         27.94
        ],
        [
         117.478,
         27.931
        ],
        [
         117.522,
         27.982
        ],
        [
         117.556,
         27.966
        ],
        [
         117.61,
         27.863
        ],
        [
         117.65,
         27.852
        ],
        [
         117.682,
         27.824
        ],
        [
         117.705,
         27.834
        ],
        [
         117.74,
         27.8
        ],
        [
         117.788,
         27.856
        ],
        [
         117.787,
         27.896
        ],
        [
         117.856,
         27.946
        ],
        [
         117.911,
         27.949
        ],
        [
         117.943,
         27.974
        ],
        [
         117.965,
         27.963
        ],
        [
         117.999,
         27.991
        ],
        [
         118.097,
         27.971
        ],
        [
         118.095,
         28.004
        ],
        [
         118.129,
         28.017
        ],
        [
         118.121,
         28.042
        ],
        [
         118.154,
         28.062
        ],
        [
         118.2,
         28.05
        ],
        [
         118.242,
         28.076
        ],
        [
         118.356,
         28.092
        ],
        [
         118.361,
         28.156
        ],
        [
         118.375,
         28.187
        ],
        [
         118.339,
         28.194
        ],
        [
         118.314,
         28.222
        ],
        [
         118.424,
         28.291
        ],
        [
         118.434,
         28.288
        ],
        [
         118.48,
         28.327
        ],
        [
         118.455,
         28.384
        ],
        [
         118.432,
         28.402
        ],
        [
         118.457,
         28.425
        ],
        [
         118.475,
         28.479
        ],
        [
         118.415,
         28.497
        ],
        [
         118.43,
         28.515
        ],
        [
         118.412,
         28.557
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.681
        ],
        [
         118.403,
         28.703
        ],
        [
         118.364,
         28.813
        ],
        [
         118.3,
         28.826
        ],
        [
         118.27,
         28.919
        ],
        [
         118.196,
         28.904
        ],
        [
         118.228,
         28.942
        ],
        [
         118.165,
         28.987
        ],
        [
         118.134,
         28.984
        ],
        [
         118.122,
         29.0
        ],
        [
         118.099,
         29.0
        ],
        [
         118.098,
         28.999
        ],
        [
         118.097,
         29.0
        ],
        [
         116.5,
         29.0
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
         121.65,
         25.0
        ],
        [
         121.65,
         25.251
        ],
        [
         121.623,
         25.295
        ],
        [
         121.585,
         25.309
        ],
        [
         121.535,
         25.308
        ],
        [
         121.445,
         25.271
        ],
        [
         121.413,
         25.239
        ],
        [
         121.372,
         25.16
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
         121.012,
         25.0
        ],
        [
         121.65,
         25.0
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   }
  ],
  "rivers": [],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.5,
        29.0
       ],
       [
        116.5,
        28.964
       ],
       [
        116.503,
        28.953
       ],
       [
        116.53,
        28.894
       ],
       [
        116.537,
        28.845
       ],
       [
        116.512,
        28.804
       ],
       [
        116.5,
        28.804
       ],
       [
        116.5,
        29.0
       ]
      ]
     ]
    },
    "n": "Poyang Hu"
   }
  ],
  "_bbox": [
   116.5,
   25.0,
   121.65,
   29.0
  ]
 }
};
