// 本文件由 tools/build.py 自动生成（切片 xianggang_tunmen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xianggang_tunmen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xianggang_tunmen"] = {
 "meta": {
  "kind": "battle",
  "region": "jiangnan",
  "province": "xianggang",
  "title": "明·屯门海防（明）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "tunmen",
  "dossier_event": "event:ev_xianggang_tunmen_01",
  "vocab_pack": "inline:xianggang_tunmen",
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
    "note": "明·屯门海防（明）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·屯门海防（明）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明·屯门海防（明）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·屯门海防（明）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "xianggang_tunmen.html",
  "key": "xianggang_tunmen",
  "scene_id": "xianggang_tunmen"
 },
 "sources": [
  {
   "id": "mingshi_folangi",
   "title": "《明史·外国传》与屯门",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "张廷玉",
   "period": "明",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "tunmen",
   "name": "屯门",
   "type": "port",
   "modern": "今中国香港新界",
   "note": "佛郎机据为舶口。坐标据地名志条目（modern 含 香港→香港），标 approx。",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.173,
   "lat": 22.32,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（modern 含 香港→香港）（诚实回填 v0.221）。",
   "elev": 144
  },
  {
   "id": "langbai_ao",
   "name": "浪白澳",
   "type": "port",
   "modern": "今中国广东珠海",
   "note": "佛郎机舶口之一",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "nantou",
   "name": "南头",
   "type": "fortress",
   "modern": "今中国广东深圳",
   "note": "明设守御所",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "XIA__p01",
   "name": "汪鋐",
   "role": "明广东提刑按察使",
   "note": "嘉靖元年率军驱逐佛郎机",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIA__p02",
   "name": "佛郎机首领",
   "role": "葡萄牙殖民者首领",
   "note": "据屯门为舶口",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "XIA_001",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "战役结果",
   "value_text": "明军焚舟，驱逐佛郎机",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "明军逐之，焚其舟",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军逐之，焚其舟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_002",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "战役损失",
   "value_text": "佛郎机舟焚，损失不详",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "焚其舟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "焚其舟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_003",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "明军伤亡",
   "value_text": "明军伤亡未载",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "未载",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "明实录",
    "skills": [
     "考据"
    ],
    "accept": "明军伤亡数据"
   },
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "未载",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_004",
   "subject": "event:ev_xianggang_tunmen_02",
   "predicate": "建置",
   "value_text": "设南头守御所",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "nantou",
   "source": "mingshi_folangi",
   "quote": "明于南头设守御所",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明于南头设守御所",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_005",
   "subject": "place:tunmen",
   "predicate": "地理位置",
   "value_text": "屯门为佛郎机舶口",
   "time": {
    "era_text": "正德间",
    "start": "1506-01-01",
    "end": "1506-12-31",
    "gregorian_year": 1506
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "据屯门、浪白澳为舶口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "据屯门、浪白澳为舶口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_006",
   "subject": "place:langbai_ao",
   "predicate": "地理位置",
   "value_text": "浪白澳亦为舶口",
   "time": {
    "era_text": "正德间",
    "start": "1506-01-01",
    "end": "1506-12-31",
    "gregorian_year": 1506
   },
   "place": "langbai_ao",
   "source": "mingshi_folangi",
   "quote": "据屯门、浪白澳为舶口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "据屯门、浪白澳为舶口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_007",
   "subject": "person:XIA__p01",
   "predicate": "指挥官",
   "value_text": "汪鋐率军驱逐",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "明军逐之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军逐之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_008",
   "subject": "person:XIA__p02",
   "predicate": "身份",
   "value_text": "佛郎机首领据屯门",
   "time": {
    "era_text": "正德间",
    "start": "1506-01-01",
    "end": "1506-12-31",
    "gregorian_year": 1506
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "佛郎机泛海至粤",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "佛郎机泛海至粤",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_009",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "技术优势",
   "value_text": "佛郎机恃铳横行",
   "time": {
    "era_text": "正德间",
    "start": "1506-01-01",
    "end": "1506-12-31",
    "gregorian_year": 1506
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "恃铳横行",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "恃铳横行",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_010",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "明军战术",
   "value_text": "焚舟以破敌",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "焚其舟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "焚其舟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_011",
   "subject": "event:ev_xianggang_tunmen_02",
   "predicate": "海防政策",
   "value_text": "设所加强海防",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "nantou",
   "source": "mingshi_folangi",
   "quote": "滨海防务以饬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "滨海防务以饬",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_012",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "战役影响",
   "value_text": "屯门复归明",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "屯门乃复",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屯门乃复",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_013",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "战役时间",
   "value_text": "嘉靖元年发生",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "嘉靖元年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "嘉靖元年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIA_014",
   "subject": "event:ev_xianggang_tunmen_01",
   "predicate": "史料考订",
   "value_text": "明军逐之记载简略",
   "time": {
    "era_text": "嘉靖元年",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "tunmen",
   "source": "mingshi_folangi",
   "quote": "明军逐之",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "需考订细节",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军逐之",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XIA_003"
 ],
 "events": [
  {
   "id": "ev_xianggang_tunmen_01",
   "subject": "event:ev_xianggang_tunmen_01",
   "year": 1522,
   "era": "嘉靖元年",
   "title": "屯门海战",
   "kind": "战事",
   "text": "明军驱逐佛郎机，焚其舟",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xianggang_tunmen_02",
   "subject": "event:ev_xianggang_tunmen_02",
   "year": 1522,
   "era": "嘉靖元年",
   "title": "设南头守御所",
   "kind": "建置",
   "text": "明设南头守御所，加强海防",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "tunmen",
   "to": "nantou",
   "type": "battle",
   "label": "明军自南头攻屯门",
   "_source_idx": 0,
   "_source_name": "《明史·外国传》与屯门",
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
       114.134,
       22.292
      ],
      [
       114.139,
       22.268
      ],
      [
       114.207,
       22.195
      ],
      [
       114.232,
       22.211
      ],
      [
       114.244,
       22.234
      ],
      [
       114.247,
       22.264
      ],
      [
       114.187,
       22.297
      ],
      [
       114.134,
       22.292
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
       113.465,
       22.905
      ],
      [
       113.404,
       22.903
      ],
      [
       113.426,
       22.859
      ],
      [
       113.463,
       22.832
      ],
      [
       113.486,
       22.828
      ],
      [
       113.564,
       22.758
      ],
      [
       113.555,
       22.804
      ],
      [
       113.521,
       22.852
      ],
      [
       113.465,
       22.905
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
       113.998,
       22.21
      ],
      [
       114.003,
       22.278
      ],
      [
       114.044,
       22.333
      ],
      [
       113.882,
       22.28
      ],
      [
       113.839,
       22.242
      ],
      [
       113.852,
       22.22
      ],
      [
       113.877,
       22.21
      ],
      [
       113.998,
       22.21
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
        113.173,
        22.078
       ],
       [
        113.266,
        22.089
       ],
       [
        113.328,
        22.145
       ],
       [
        113.367,
        22.165
       ],
       [
        113.416,
        22.178
       ],
       [
        113.499,
        22.202
       ],
       [
        113.548,
        22.223
       ],
       [
        113.576,
        22.297
       ],
       [
        113.589,
        22.35
       ],
       [
        113.551,
        22.404
       ],
       [
        113.553,
        22.594
       ],
       [
        113.485,
        22.692
       ],
       [
        113.45,
        22.726
       ],
       [
        113.432,
        22.789
       ],
       [
        113.345,
        22.865
       ],
       [
        113.338,
        22.889
       ],
       [
        113.331,
        22.912
       ],
       [
        113.442,
        22.941
       ],
       [
        113.46,
        22.996
       ],
       [
        113.445,
        23.055
       ],
       [
        113.52,
        23.102
       ],
       [
        113.621,
        23.127
       ],
       [
        113.592,
        23.077
       ],
       [
        113.586,
        23.02
       ],
       [
        113.603,
        22.969
       ],
       [
        113.62,
        22.861
       ],
       [
        113.661,
        22.802
       ],
       [
        113.754,
        22.734
       ],
       [
        113.828,
        22.607
       ],
       [
        113.931,
        22.531
       ],
       [
        114.015,
        22.512
       ],
       [
        114.007,
        22.484
       ],
       [
        113.896,
        22.428
       ],
       [
        113.903,
        22.396
       ],
       [
        113.937,
        22.365
       ],
       [
        114.033,
        22.376
       ],
       [
        114.139,
        22.348
       ],
       [
        114.268,
        22.296
       ],
       [
        114.288,
        22.325
       ],
       [
        114.291,
        22.374
       ],
       [
        114.335,
        22.396
       ],
       [
        114.325,
        22.437
       ],
       [
        114.285,
        22.458
       ],
       [
        114.291,
        22.499
       ],
       [
        114.266,
        22.541
       ],
       [
        114.341,
        22.593
       ],
       [
        114.42,
        22.583
       ],
       [
        114.496,
        22.527
       ],
       [
        114.554,
        22.529
       ],
       [
        114.544,
        22.621
       ],
       [
        114.572,
        22.654
       ],
       [
        114.593,
        22.698
       ],
       [
        114.652,
        22.755
       ],
       [
        114.711,
        22.739
       ],
       [
        114.75,
        22.626
       ],
       [
        114.854,
        22.617
       ],
       [
        114.896,
        22.64
       ],
       [
        114.914,
        22.685
       ],
       [
        115.012,
        22.709
       ],
       [
        115.092,
        22.782
       ],
       [
        115.173,
        22.81
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
        114.232,
        22.211
       ],
       [
        114.207,
        22.195
       ],
       [
        114.139,
        22.268
       ],
       [
        114.134,
        22.292
       ],
       [
        114.187,
        22.297
       ],
       [
        114.247,
        22.264
       ],
       [
        114.244,
        22.234
       ],
       [
        114.232,
        22.211
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
        113.555,
        22.804
       ],
       [
        113.564,
        22.758
       ],
       [
        113.486,
        22.828
       ],
       [
        113.463,
        22.832
       ],
       [
        113.426,
        22.859
       ],
       [
        113.404,
        22.903
       ],
       [
        113.465,
        22.905
       ],
       [
        113.521,
        22.852
       ],
       [
        113.555,
        22.804
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
        113.998,
        22.21
       ],
       [
        113.877,
        22.21
       ],
       [
        113.852,
        22.22
       ],
       [
        113.839,
        22.242
       ],
       [
        113.882,
        22.28
       ],
       [
        114.044,
        22.333
       ],
       [
        114.003,
        22.278
       ],
       [
        113.998,
        22.21
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
        113.173,
        23.32
       ],
       [
        115.173,
        23.32
       ],
       [
        115.173,
        22.81
       ],
       [
        115.092,
        22.782
       ],
       [
        115.012,
        22.709
       ],
       [
        114.914,
        22.685
       ],
       [
        114.896,
        22.64
       ],
       [
        114.854,
        22.617
       ],
       [
        114.75,
        22.626
       ],
       [
        114.711,
        22.739
       ],
       [
        114.652,
        22.755
       ],
       [
        114.593,
        22.698
       ],
       [
        114.572,
        22.654
       ],
       [
        114.544,
        22.621
       ],
       [
        114.554,
        22.529
       ],
       [
        114.496,
        22.527
       ],
       [
        114.42,
        22.583
       ],
       [
        114.341,
        22.593
       ],
       [
        114.266,
        22.541
       ],
       [
        114.291,
        22.499
       ],
       [
        114.285,
        22.458
       ],
       [
        114.325,
        22.437
       ],
       [
        114.335,
        22.396
       ],
       [
        114.291,
        22.374
       ],
       [
        114.288,
        22.325
       ],
       [
        114.268,
        22.296
       ],
       [
        114.139,
        22.348
       ],
       [
        114.033,
        22.376
       ],
       [
        113.937,
        22.365
       ],
       [
        113.903,
        22.396
       ],
       [
        113.896,
        22.428
       ],
       [
        114.007,
        22.484
       ],
       [
        114.015,
        22.512
       ],
       [
        113.931,
        22.531
       ],
       [
        113.828,
        22.607
       ],
       [
        113.754,
        22.734
       ],
       [
        113.661,
        22.802
       ],
       [
        113.62,
        22.861
       ],
       [
        113.603,
        22.969
       ],
       [
        113.586,
        23.02
       ],
       [
        113.592,
        23.077
       ],
       [
        113.621,
        23.127
       ],
       [
        113.52,
        23.102
       ],
       [
        113.445,
        23.055
       ],
       [
        113.46,
        22.996
       ],
       [
        113.442,
        22.941
       ],
       [
        113.331,
        22.912
       ],
       [
        113.338,
        22.889
       ],
       [
        113.345,
        22.865
       ],
       [
        113.432,
        22.789
       ],
       [
        113.45,
        22.726
       ],
       [
        113.485,
        22.692
       ],
       [
        113.553,
        22.594
       ],
       [
        113.551,
        22.404
       ],
       [
        113.589,
        22.35
       ],
       [
        113.576,
        22.297
       ],
       [
        113.548,
        22.223
       ],
       [
        113.499,
        22.202
       ],
       [
        113.416,
        22.178
       ],
       [
        113.367,
        22.165
       ],
       [
        113.328,
        22.145
       ],
       [
        113.266,
        22.089
       ],
       [
        113.173,
        22.078
       ],
       [
        113.173,
        23.32
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
         113.559,
         22.212
        ],
        [
         113.594,
         22.229
        ],
        [
         113.596,
         22.304
        ],
        [
         113.618,
         22.315
        ],
        [
         113.605,
         22.34
        ],
        [
         113.628,
         22.349
        ],
        [
         113.67,
         22.417
        ],
        [
         113.666,
         22.439
        ],
        [
         113.625,
         22.443
        ],
        [
         113.609,
         22.409
        ],
        [
         113.574,
         22.412
        ],
        [
         113.631,
         22.476
        ],
        [
         113.668,
         22.481
        ],
        [
         113.692,
         22.515
        ],
        [
         113.74,
         22.534
        ],
        [
         113.717,
         22.645
        ],
        [
         113.678,
         22.726
        ],
        [
         113.734,
         22.736
        ],
        [
         113.758,
         22.683
        ],
        [
         113.766,
         22.666
        ],
        [
         113.803,
         22.593
        ],
        [
         113.857,
         22.54
        ],
        [
         113.87,
         22.46
        ],
        [
         113.894,
         22.443
        ],
        [
         113.953,
         22.487
        ],
        [
         113.955,
         22.491
        ],
        [
         113.976,
         22.511
        ],
        [
         114.032,
         22.504
        ],
        [
         114.082,
         22.512
        ],
        [
         114.095,
         22.534
        ],
        [
         114.157,
         22.544
        ],
        [
         114.166,
         22.559
        ],
        [
         114.223,
         22.553
        ],
        [
         114.233,
         22.54
        ],
        [
         114.295,
         22.564
        ],
        [
         114.322,
         22.587
        ],
        [
         114.382,
         22.602
        ],
        [
         114.427,
         22.589
        ],
        [
         114.472,
         22.522
        ],
        [
         114.476,
         22.459
        ],
        [
         114.507,
         22.439
        ],
        [
         114.549,
         22.466
        ],
        [
         114.611,
         22.482
        ],
        [
         114.629,
         22.514
        ],
        [
         114.614,
         22.545
        ],
        [
         114.568,
         22.561
        ],
        [
         114.559,
         22.584
        ],
        [
         114.603,
         22.639
        ],
        [
         114.58,
         22.661
        ],
        [
         114.515,
         22.655
        ],
        [
         114.567,
         22.686
        ],
        [
         114.592,
         22.69
        ],
        [
         114.602,
         22.731
        ],
        [
         114.69,
         22.767
        ],
        [
         114.71,
         22.788
        ],
        [
         114.75,
         22.764
        ],
        [
         114.735,
         22.724
        ],
        [
         114.728,
         22.651
        ],
        [
         114.744,
         22.633
        ],
        [
         114.746,
         22.582
        ],
        [
         114.866,
         22.592
        ],
        [
         114.885,
         22.539
        ],
        [
         114.922,
         22.549
        ],
        [
         114.928,
         22.622
        ],
        [
         114.945,
         22.645
        ],
        [
         115.039,
         22.714
        ],
        [
         115.023,
         22.726
        ],
        [
         115.054,
         22.748
        ],
        [
         115.076,
         22.788
        ],
        [
         115.155,
         22.802
        ],
        [
         115.173,
         22.787
        ],
        [
         115.173,
         23.32
        ],
        [
         113.173,
         23.32
        ],
        [
         113.173,
         21.956
        ],
        [
         113.235,
         21.888
        ],
        [
         113.267,
         21.872
        ],
        [
         113.32,
         21.909
        ],
        [
         113.33,
         21.962
        ],
        [
         113.442,
         22.009
        ],
        [
         113.46,
         22.044
        ],
        [
         113.528,
         22.074
        ],
        [
         113.567,
         22.075
        ],
        [
         113.554,
         22.107
        ],
        [
         113.554,
         22.142
        ],
        [
         113.535,
         22.174
        ],
        [
         113.538,
         22.209
        ],
        [
         113.559,
         22.212
        ]
       ]
      ],
      [
       [
        [
         114.231,
         22.017
        ],
        [
         114.311,
         22.041
        ],
        [
         114.303,
         22.05
        ],
        [
         114.24,
         22.035
        ],
        [
         114.231,
         22.017
        ]
       ]
      ],
      [
       [
        [
         113.765,
         21.962
        ],
        [
         113.774,
         21.998
        ],
        [
         113.742,
         21.992
        ],
        [
         113.765,
         21.962
        ]
       ]
      ],
      [
       [
        [
         113.723,
         21.922
        ],
        [
         113.743,
         21.95
        ],
        [
         113.719,
         21.952
        ],
        [
         113.723,
         21.922
        ]
       ]
      ],
      [
       [
        [
         113.173,
         21.856
        ],
        [
         113.204,
         21.861
        ],
        [
         113.173,
         21.874
        ],
        [
         113.173,
         21.856
        ]
       ]
      ],
      [
       [
        [
         113.82,
         22.396
        ],
        [
         113.814,
         22.42
        ],
        [
         113.787,
         22.414
        ],
        [
         113.82,
         22.396
        ]
       ]
      ],
      [
       [
        [
         114.19,
         21.987
        ],
        [
         114.229,
         21.995
        ],
        [
         114.181,
         22.01
        ],
        [
         114.19,
         21.987
        ]
       ]
      ],
      [
       [
        [
         114.154,
         21.975
        ],
        [
         114.172,
         22.0
        ],
        [
         114.124,
         21.985
        ],
        [
         114.154,
         21.975
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.032,
         22.504
        ],
        [
         114.001,
         22.491
        ],
        [
         113.978,
         22.457
        ],
        [
         113.918,
         22.418
        ],
        [
         113.92,
         22.368
        ],
        [
         113.952,
         22.355
        ],
        [
         113.957,
         22.36
        ],
        [
         113.98,
         22.366
        ],
        [
         114.026,
         22.348
        ],
        [
         113.955,
         22.299
        ],
        [
         113.97,
         22.321
        ],
        [
         113.898,
         22.309
        ],
        [
         113.889,
         22.272
        ],
        [
         113.843,
         22.229
        ],
        [
         113.849,
         22.191
        ],
        [
         113.899,
         22.216
        ],
        [
         113.936,
         22.205
        ],
        [
         113.981,
         22.23
        ],
        [
         113.997,
         22.206
        ],
        [
         114.026,
         22.229
        ],
        [
         114.005,
         22.239
        ],
        [
         114.03,
         22.263
        ],
        [
         114.035,
         22.301
        ],
        [
         114.07,
         22.327
        ],
        [
         114.121,
         22.321
        ],
        [
         114.146,
         22.301
        ],
        [
         114.12,
         22.272
        ],
        [
         114.165,
         22.227
        ],
        [
         114.201,
         22.232
        ],
        [
         114.203,
         22.207
        ],
        [
         114.266,
         22.201
        ],
        [
         114.249,
         22.275
        ],
        [
         114.262,
         22.295
        ],
        [
         114.285,
         22.264
        ],
        [
         114.313,
         22.264
        ],
        [
         114.316,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.278,
         22.329
        ],
        [
         114.283,
         22.387
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.324,
         22.385
        ],
        [
         114.324,
         22.384
        ],
        [
         114.357,
         22.34
        ],
        [
         114.395,
         22.362
        ],
        [
         114.385,
         22.412
        ],
        [
         114.406,
         22.433
        ],
        [
         114.406,
         22.434
        ],
        [
         114.376,
         22.436
        ],
        [
         114.326,
         22.479
        ],
        [
         114.279,
         22.436
        ],
        [
         114.22,
         22.428
        ],
        [
         114.205,
         22.45
        ],
        [
         114.233,
         22.467
        ],
        [
         114.253,
         22.445
        ],
        [
         114.341,
         22.503
        ],
        [
         114.31,
         22.497
        ],
        [
         114.289,
         22.523
        ],
        [
         114.264,
         22.542
        ],
        [
         114.263,
         22.542
        ],
        [
         114.26,
         22.548
        ],
        [
         114.233,
         22.529
        ],
        [
         114.233,
         22.54
        ],
        [
         114.223,
         22.553
        ],
        [
         114.166,
         22.559
        ],
        [
         114.157,
         22.544
        ],
        [
         114.095,
         22.534
        ],
        [
         114.082,
         22.512
        ],
        [
         114.032,
         22.504
        ]
       ]
      ],
      [
       [
        [
         114.143,
         22.214
        ],
        [
         114.124,
         22.239
        ],
        [
         114.12,
         22.178
        ],
        [
         114.155,
         22.178
        ],
        [
         114.167,
         22.205
        ],
        [
         114.143,
         22.214
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.372
        ],
        [
         114.314,
         22.341
        ],
        [
         114.333,
         22.353
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.372
        ]
       ]
      ],
      [
       [
        [
         114.32,
         22.381
        ],
        [
         114.324,
         22.384
        ],
        [
         114.324,
         22.385
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.382
        ],
        [
         114.32,
         22.381
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.37
        ],
        [
         114.306,
         22.372
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.37
        ]
       ]
      ],
      [
       [
        [
         114.316,
         22.299
        ],
        [
         114.317,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.299
        ]
       ]
      ],
      [
       [
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.381
        ],
        [
         114.32,
         22.382
        ],
        [
         114.319,
         22.382
        ]
       ]
      ],
      [
       [
        [
         114.372,
         22.323
        ],
        [
         114.373,
         22.324
        ],
        [
         114.372,
         22.324
        ],
        [
         114.372,
         22.323
        ]
       ]
      ],
      [
       [
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ]
       ]
      ]
     ]
    },
    "n": "香港特别行政区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.554,
         22.107
        ],
        [
         113.604,
         22.132
        ],
        [
         113.576,
         22.195
        ],
        [
         113.559,
         22.212
        ],
        [
         113.538,
         22.209
        ],
        [
         113.535,
         22.174
        ],
        [
         113.554,
         22.142
        ],
        [
         113.554,
         22.107
        ]
       ]
      ],
      [
       [
        [
         113.586,
         22.201
        ],
        [
         113.576,
         22.201
        ],
        [
         113.576,
         22.195
        ],
        [
         113.586,
         22.201
        ]
       ]
      ]
     ]
    },
    "n": "澳门特别行政区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.173,
        22.561
       ],
       [
        113.214,
        22.483
       ],
       [
        113.264,
        22.363
       ],
       [
        113.416,
        22.178
       ]
      ],
      [
       [
        113.173,
        22.745
       ],
       [
        113.299,
        22.698
       ],
       [
        113.395,
        22.651
       ],
       [
        113.444,
        22.599
       ],
       [
        113.492,
        22.591
       ],
       [
        113.552,
        22.587
       ]
      ],
      [
       [
        113.173,
        23.047
       ],
       [
        113.445,
        23.055
       ]
      ],
      [
       [
        113.173,
        22.91
       ],
       [
        113.213,
        22.912
       ],
       [
        113.338,
        22.889
       ]
      ]
     ]
    },
    "n": "Xi"
   }
  ],
  "lakes": [],
  "_bbox": [
   113.173,
   21.32,
   115.173,
   23.32
  ]
 }
};
