// 本文件由 tools/build.py 自动生成（切片 warring_states_shangyang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["warring_states_shangyang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["warring_states_shangyang_llm"] = {
 "meta": {
  "kind": "reform",
  "scale_tier": "strategic",
  "region": "guangzhong",
  "province": null,
  "title": "战国·商鞅变法（LLM 抽取·人工校订）",
  "dossier_label": "战国·商鞅变法（LLM 抽取落库）",
  "subtitle": "秦富强的制度底座",
  "primary_place": null,
  "dossier_event": "ev_warring_states_shangyang_01",
  "vocab_pack": "inline:warring_states_shangyang_llm",
  "terrain_grid": "china_coarse",
  "lead": "商鞅变法以军功爵制与县制重构秦的国家能力，是战国国力竞赛的胜负手。",
  "parties_note": "叙事方=秦廷（商鞅）；来源=后世官修（基于《史记·商君列传》现代概述）。",
  "dims": [
   3,
   4,
   5,
   6
  ],
  "subject_names": {
   "person:WAR__p01": "商鞅",
   "person:WAR__p02": "秦孝公",
   "event:ev_warring_states_shangyang_01": "商鞅变法开始",
   "event:ev_warring_states_shangyang_02": "迁都咸阳",
   "place:xianyang": "咸阳"
  },
  "epoch": "warring_states",
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
    "note": "军功爵制把贵族—平民绑上国家战车"
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
    "note": "废井田开阡陌释放农耕产能"
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
    "note": "什伍连坐把人口变成可征发的单元"
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
    "note": "县制+集权使秦成战争机器"
   }
  },
  "page": "county.html?scene=warring_states_shangyang_llm",
  "key": "warring_states_shangyang_llm",
  "scene_id": "warring_states_shangyang_llm"
 },
 "sources": [
  {
   "id": "warring_states_shangyang_src_llm",
   "title": "战国·商鞅变法（现代概述）",
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
   "modern": "今中国陕西省咸阳市",
   "note": "秦国新都",
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
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
   "id": "WAR__p01",
   "name": "商鞅",
   "role": "左庶长",
   "note": "主持变法",
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "WAR__p02",
   "name": "秦孝公",
   "role": "秦国国君",
   "note": "任用商鞅",
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "WAR_001",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "value_text": "令民什伍连坐，告奸者赏。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "令民为什伍而相牧司连坐",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "令民为什伍而相牧司连坐",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_002",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "value_text": "废井田，开阡陌，奖励耕织。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "废井田、开阡陌；奖励耕织",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "废井田、开阡陌；奖励耕织",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_003",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "value_text": "军功授爵，宗室无军功除籍。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "有军功者各以率受上爵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "有军功者各以率受上爵",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_004",
   "subject": "event:ev_warring_states_shangyang_02",
   "predicate": "迁都",
   "value_text": "秦徙都咸阳，行县制。",
   "time": {
    "era_text": "秦孝公十二年",
    "start": "-350"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "前350年徙都咸阳，行县制",
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
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "前350年徙都咸阳，行县制",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_005",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法成效",
   "value_text": "变法十年，秦民殷盛富强。",
   "time": {
    "era_text": "秦孝公十六年",
    "start": "-346"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "变法十年，秦民殷盛，国以富强",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "变法十年，秦民殷盛，国以富强",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_006",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法影响",
   "value_text": "为日后横扫六国奠基。",
   "time": {
    "era_text": "秦孝公十六年",
    "start": "-346"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "为日后横扫六国奠基",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家评价",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为日后横扫六国奠基",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_007",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法争议",
   "value_text": "商鞅变法严酷，争议颇多。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "不告奸者腰斩",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后世对酷法评价不一",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "不告奸者腰斩",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_008",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法细节",
   "value_text": "事末利怠而贫者收为奴。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "事末利怠而贫者举以为收孥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "事末利怠而贫者举以为收孥",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_009",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "value_text": "告奸者与斩敌同赏。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "告奸者与斩敌同赏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "告奸者与斩敌同赏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_010",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "value_text": "宗室无军功者不得入属籍。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "宗室无军功论其属籍",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宗室无军功论其属籍",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_011",
   "subject": "event:ev_warring_states_shangyang_02",
   "predicate": "建置",
   "value_text": "行县制，地方行政改革。",
   "time": {
    "era_text": "秦孝公十二年",
    "start": "-350"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "行县制",
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
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "行县制",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_012",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法背景",
   "value_text": "秦孝公图强，任商鞅变法。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "秦孝公任商鞅为左庶长，变法图强",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "秦孝公任商鞅为左庶长，变法图强",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_013",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法细节",
   "value_text": "连坐制下，邻里互相监视。",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "令民为什伍而相牧司连坐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "令民为什伍而相牧司连坐",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAR_014",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法争议",
   "value_text": "商鞅变法是否过于激进？",
   "time": {
    "era_text": "秦孝公六年",
    "start": "-356"
   },
   "place": "xianyang",
   "source": "warring_states_shangyang_src_llm",
   "quote": "变法图强",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载反对意见",
   "dims": [
    5
   ],
   "lead": {
    "where": "秦国朝堂",
    "skills": [
     "政治史",
     "制度史"
    ],
    "accept": "寻找反对变法的记载"
   },
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "变法图强",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_warring_states_shangyang_01|变法措施",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法措施",
   "kind": "record_vs_record",
   "count": 5,
   "spread": null,
   "assertion_ids": [
    "WAR_001",
    "WAR_002",
    "WAR_003",
    "WAR_009",
    "WAR_010"
   ]
  },
  {
   "id": "cf:event:ev_warring_states_shangyang_01|变法细节",
   "subject": "event:ev_warring_states_shangyang_01",
   "predicate": "变法细节",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "WAR_008",
    "WAR_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "WAR_014"
 ],
 "events": [
  {
   "id": "ev_warring_states_shangyang_01",
   "subject": "event:ev_warring_states_shangyang_01",
   "year": -356,
   "era": "秦孝公六年",
   "title": "商鞅变法开始",
   "kind": "行政",
   "text": "秦孝公任商鞅为左庶长，推行变法。",
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_warring_states_shangyang_02",
   "subject": "event:ev_warring_states_shangyang_02",
   "year": -350,
   "era": "秦孝公十二年",
   "title": "迁都咸阳",
   "kind": "建置",
   "text": "秦徙都咸阳，并推行县制。",
   "_source_idx": 0,
   "_source_name": "战国·商鞅变法（现代概述）",
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
