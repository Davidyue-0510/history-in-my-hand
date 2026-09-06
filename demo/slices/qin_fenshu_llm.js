// 本文件由 tools/build.py 自动生成（切片 qin_fenshu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qin_fenshu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qin_fenshu_llm"] = {
 "meta": {
  "kind": "thought",
  "scale_tier": "strategic",
  "region": "guangzhong",
  "province": null,
  "title": "秦·焚书坑儒（LLM 抽取·人工校订）",
  "dossier_label": "秦·焚书坑儒（LLM 抽取落库）",
  "subtitle": "中央集权对思想多元的清洗",
  "primary_place": null,
  "dossier_event": "ev_qin_fenshu_01",
  "vocab_pack": "inline:qin_fenshu_llm",
  "terrain_grid": "china_coarse",
  "lead": "始皇兼并六国后，以焚书坑儒统一思想口径，为帝国法家秩序扫清异论。",
  "parties_note": "叙事方=秦廷（法家主导）；来源=后世官修（基于《史记·秦始皇本纪》现代概述）。",
  "dims": [
   1,
   3,
   5,
   6
  ],
  "subject_names": {
   "person:QIN__p01": "秦始皇",
   "person:QIN__p02": "李斯",
   "person:QIN__p03": "侯生",
   "person:QIN__p04": "卢生",
   "event:ev_qin_fenshu_01": "焚书令",
   "event:ev_qin_fenshu_02": "坑儒",
   "place:xianyang": "咸阳"
  },
  "epoch": "qin",
  "strategic": {
   "political_cohesion": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     3,
     4
    ],
    "layer": "inference",
    "note": "焚书以法家口径统一舆论，朝堂思想凝聚力高度集中于皇权"
   },
   "material_logistics": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "郡县制与书同文支撑政令直达"
   },
   "population_mobilization": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "编户齐民与连坐制最大化社会控制"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "统一文字度量衡，降低治理地缘摩擦"
   }
  },
  "page": "county.html?scene=qin_fenshu_llm",
  "key": "qin_fenshu_llm",
  "scene_id": "qin_fenshu_llm"
 },
 "sources": [
  {
   "id": "qin_fenshu_src_llm",
   "title": "秦·焚书坑儒（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "后世",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "type": "city",
   "modern": "今中国陕西咸阳",
   "note": "秦都，坑儒发生地",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.7,
   "lat": 34.33,
   "geo_note": "秦都",
   "elev": 434
  }
 ],
 "persons": [
  {
   "id": "QIN__p01",
   "name": "秦始皇",
   "role": "秦始皇帝",
   "note": "焚书坑儒的决策者",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p02",
   "name": "李斯",
   "role": "丞相",
   "note": "建议焚书",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "QIN__p03",
   "name": "侯生",
   "role": "方士",
   "note": "求仙药不得而亡去",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "QIN__p04",
   "name": "卢生",
   "role": "方士",
   "note": "求仙药不得而亡去",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "QIN_001",
   "subject": "event:ev_qin_fenshu_01",
   "predicate": "焚书令内容",
   "value_text": "焚诗书百家语，不焚医药卜筮种树",
   "time": {
    "era_text": "秦始皇三十四年",
    "start": "-213"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "臣请史官非秦记皆烧之",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "臣请史官非秦记皆烧之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_002",
   "subject": "event:ev_qin_fenshu_01",
   "predicate": "焚书令惩罚",
   "value_text": "令下三十日不烧者黥为城旦",
   "time": {
    "era_text": "秦始皇三十四年",
    "start": "-213"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "令下三十日不烧，黥为城旦",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "令下三十日不烧，黥为城旦",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_003",
   "subject": "event:ev_qin_fenshu_02",
   "predicate": "坑儒人数",
   "value_text": "坑杀犯禁者四百六十余人",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "坑杀犯禁者四百六十余人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "坑杀犯禁者四百六十余人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_004",
   "subject": "event:ev_qin_fenshu_02",
   "predicate": "坑儒原因",
   "value_text": "方士亡去，始皇怒而案问诸生",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "侯生、卢生亡去，始皇怒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "侯生、卢生亡去，始皇怒",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_005",
   "subject": "person:QIN__p02",
   "predicate": "焚书建议",
   "value_text": "李斯奏请焚毁诗书百家语",
   "time": {
    "era_text": "秦始皇三十四年",
    "start": "-213"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "丞相李斯奏请焚毁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "丞相李斯奏请焚毁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_006",
   "subject": "person:QIN__p03",
   "predicate": "逃亡",
   "value_text": "侯生求仙药不得而亡去",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "侯生、卢生求仙药不得而亡去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "侯生、卢生求仙药不得而亡去",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_007",
   "subject": "person:QIN__p04",
   "predicate": "逃亡",
   "value_text": "卢生求仙药不得而亡去",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "侯生、卢生求仙药不得而亡去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "侯生、卢生求仙药不得而亡去",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_008",
   "subject": "event:ev_qin_fenshu_01",
   "predicate": "焚书范围",
   "value_text": "医药卜筮种树之书不焚",
   "time": {
    "era_text": "秦始皇三十四年",
    "start": "-213"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "医药卜筮种树之书不焚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "医药卜筮种树之书不焚",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_009",
   "subject": "event:ev_qin_fenshu_02",
   "predicate": "坑儒地点",
   "value_text": "坑杀于咸阳",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "坑杀犯禁者四百六十余人于咸阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "坑杀犯禁者四百六十余人于咸阳",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_010",
   "subject": "event:ev_qin_fenshu_01",
   "predicate": "焚书目的",
   "value_text": "统一思想，巩固中央集权",
   "time": {
    "era_text": "秦始皇三十四年",
    "start": "-213"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "以吏为师",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家解读",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以吏为师",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_011",
   "subject": "event:ev_qin_fenshu_02",
   "predicate": "坑儒性质",
   "value_text": "坑杀方士而非儒生，争议",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "所坑者或为方士",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "现代学者质疑",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "所坑者或为方士",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_012",
   "subject": "event:ev_qin_fenshu_02",
   "predicate": "坑儒人数",
   "value_text": "或云四百六十余人，或云七百余人",
   "time": {
    "era_text": "秦始皇三十五年",
    "start": "-212"
   },
   "place": "xianyang",
   "source": "qin_fenshu_src_llm",
   "quote": "诸书所载不一",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料记载有异",
   "dims": [
    6
   ],
   "lead": {
    "where": "咸阳",
    "skills": [
     "文献考据"
    ],
    "accept": "需进一步考证"
   },
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "诸书所载不一",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "QIN_012"
 ],
 "events": [
  {
   "id": "ev_qin_fenshu_01",
   "subject": "event:ev_qin_fenshu_01",
   "year": -213,
   "era": "秦始皇三十四年",
   "title": "焚书令",
   "kind": "行政",
   "text": "李斯奏请焚毁诗书百家语",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_qin_fenshu_02",
   "subject": "event:ev_qin_fenshu_02",
   "year": -212,
   "era": "秦始皇三十五年",
   "title": "坑儒",
   "kind": "其他",
   "text": "坑杀犯禁者四百六十余人于咸阳",
   "_source_idx": 0,
   "_source_name": "秦·焚书坑儒（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "xianyang",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  1900,
  2000
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
        107.7,
        33.33
       ],
       [
        107.7,
        35.33
       ],
       [
        109.7,
        35.33
       ],
       [
        109.7,
        33.33
       ],
       [
        107.7,
        33.33
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
         109.7,
         33.33
        ],
        [
         109.7,
         35.33
        ],
        [
         108.614,
         35.33
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
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.7,
         35.262
        ],
        [
         107.7,
         35.195
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.7,
         34.952
        ],
        [
         107.7,
         33.33
        ],
        [
         109.7,
         33.33
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
         107.7,
         35.33
        ],
        [
         107.7,
         34.952
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.7,
         35.195
        ],
        [
         107.7,
         35.262
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
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
         108.614,
         35.33
        ],
        [
         107.7,
         35.33
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   107.7,
   33.33,
   109.7,
   35.33
  ]
 }
};
