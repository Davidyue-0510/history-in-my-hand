// 本文件由 tools/build.py 自动生成（切片 liangzhou_meeting_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["liangzhou_meeting_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["liangzhou_meeting_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "xibei",
  "province": "gansu",
  "title": "凉州会谈（1247，西藏归附蒙古）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "liangzhou",
  "dossier_event": "event:ev_liangzhou_meeting_llm_01",
  "vocab_pack": "inline:liangzhou_meeting_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "yuan",
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
    "note": "凉州会谈（1247，西藏归附蒙古）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "凉州会谈（1247，西藏归附蒙古）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "凉州会谈（1247，西藏归附蒙古）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "凉州会谈（1247，西藏归附蒙古）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   5,
   6
  ],
  "page": "county.html?scene=liangzhou_meeting_llm",
  "key": "liangzhou_meeting_llm",
  "scene_id": "liangzhou_meeting_llm"
 },
 "sources": [
  {
   "id": "liangzhou_src_llm",
   "title": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "world-gen 抽取",
   "period": "乃马真后称制元年（1247）",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "liangzhou",
   "name": "凉州",
   "type": "city",
   "modern": "今中国甘肃武威",
   "note": "阔端驻兵地",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 102.63,
   "lat": 37.93,
   "geo_note": "今甘肃武威",
   "elev": 1640
  }
 ],
 "persons": [
  {
   "id": "LIA__p01",
   "name": "阔端",
   "role": "蒙古皇子，驻凉州经略秦陇青藏",
   "note": "蒙古太宗窝阔台之子",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "LIA__p02",
   "name": "萨迦·班智达贡嘎坚赞",
   "role": "西藏佛教萨迦派领袖",
   "note": "简称萨班",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "LIA_001",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "predicate": "会谈地点",
   "value_text": "凉州",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "皇子阔端驻兵凉州",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "皇子阔端驻兵凉州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_002",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "predicate": "会谈双方",
   "value_text": "阔端与萨班",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "萨班应阔端之邀赴凉州会谈",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "萨班应阔端之邀赴凉州会谈",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_003",
   "subject": "event:ev_liangzhou_meeting_llm_02",
   "predicate": "会谈结果",
   "value_text": "西藏归顺蒙古",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "议定西藏归顺蒙古",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "议定西藏归顺蒙古",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_004",
   "subject": "event:ev_liangzhou_meeting_llm_03",
   "predicate": "文书",
   "value_text": "呈《致蕃人书》",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "呈《致蕃人书》劝谕诸部纳款",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "呈《致蕃人书》劝谕诸部纳款",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_005",
   "subject": "event:ev_liangzhou_meeting_llm_02",
   "predicate": "确立宗主权",
   "value_text": "蒙古对西藏宗主权",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "确立蒙古对西藏的宗主权",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "确立蒙古对西藏的宗主权",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_006",
   "subject": "event:ev_liangzhou_meeting_llm_02",
   "predicate": "治理格局",
   "value_text": "僧俗治理格局",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "僧俗治理格局",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧俗治理格局",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_007",
   "subject": "event:ev_liangzhou_meeting_llm_02",
   "predicate": "版图归属",
   "value_text": "西藏纳入元朝版图",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "自此西藏纳入元朝版图",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自此西藏纳入元朝版图",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_008",
   "subject": "person:LIA__p01",
   "predicate": "驻兵地",
   "value_text": "凉州",
   "time": {
    "era_text": "蒙古太宗窝阔台灭金后",
    "start": "1234"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "皇子阔端驻兵凉州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "皇子阔端驻兵凉州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_009",
   "subject": "person:LIA__p01",
   "predicate": "经略范围",
   "value_text": "秦陇青藏",
   "time": {
    "era_text": "蒙古太宗窝阔台灭金后",
    "start": "1234"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "经略秦陇青藏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "经略秦陇青藏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_010",
   "subject": "person:LIA__p02",
   "predicate": "身份",
   "value_text": "萨迦派领袖",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "西藏佛教萨迦派领袖",
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
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西藏佛教萨迦派领袖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_011",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "predicate": "会谈性质",
   "value_text": "西藏归附蒙古",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "凉州会谈（1247，西藏归附蒙古）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凉州会谈（1247，西藏归附蒙古）",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_012",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "predicate": "历史意义",
   "value_text": "西藏纳入元朝版图",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "自此西藏纳入元朝版图",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "学界共识",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自此西藏纳入元朝版图",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIA_013",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "predicate": "会谈细节",
   "value_text": "具体谈判过程不详",
   "time": {
    "era_text": "乃马真后称制元年",
    "start": "1247"
   },
   "place": "liangzhou",
   "source": "liangzhou_src_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    6
   ],
   "lead": {
    "where": "凉州会谈现场",
    "skills": [
     "历史考据",
     "藏文文献"
    ],
    "accept": "会谈具体议程与参与人员"
   },
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
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
  "LIA_013"
 ],
 "events": [
  {
   "id": "ev_liangzhou_meeting_llm_01",
   "subject": "event:ev_liangzhou_meeting_llm_01",
   "year": 1247,
   "era": "乃马真后称制元年",
   "title": "凉州会谈",
   "kind": "外交",
   "text": "萨班应阔端邀赴凉州会谈",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_liangzhou_meeting_llm_02",
   "subject": "event:ev_liangzhou_meeting_llm_02",
   "year": 1247,
   "era": "乃马真后称制元年",
   "title": "议定归顺",
   "kind": "外交",
   "text": "议定西藏归顺蒙古",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_liangzhou_meeting_llm_03",
   "subject": "event:ev_liangzhou_meeting_llm_03",
   "year": 1247,
   "era": "乃马真后称制元年",
   "title": "致蕃人书",
   "kind": "行政",
   "text": "萨班呈《致蕃人书》劝谕纳款",
   "_source_idx": 0,
   "_source_name": "萨迦班智达与阔端凉州会谈记述（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "liangzhou",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "liangzhou",
   "name": "凉州",
   "lon": 102.63,
   "lat": 37.93,
   "region": "xibei"
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
        101.63,
        36.93
       ],
       [
        101.63,
        38.93
       ],
       [
        103.63,
        38.93
       ],
       [
        103.63,
        36.93
       ],
       [
        101.63,
        36.93
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        101.63,
        38.93
       ],
       [
        101.63,
        38.669
       ],
       [
        101.673,
        38.691
       ],
       [
        101.777,
        38.66
       ],
       [
        101.874,
        38.734
       ],
       [
        101.942,
        38.809
       ],
       [
        102.075,
        38.891
       ],
       [
        102.046,
        38.905
       ],
       [
        102.018,
        38.93
       ],
       [
        103.63,
        38.93
       ],
       [
        103.63,
        38.52
       ],
       [
        103.416,
        38.405
       ],
       [
        103.465,
        38.353
       ],
       [
        103.508,
        38.281
       ],
       [
        103.535,
        38.157
       ],
       [
        103.369,
        38.089
       ],
       [
        103.362,
        38.038
       ],
       [
        103.407,
        37.861
       ],
       [
        103.628,
        37.798
       ],
       [
        103.63,
        37.797
       ],
       [
        103.63,
        38.93
       ],
       [
        101.63,
        38.93
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         103.63,
         36.93
        ],
        [
         103.63,
         37.797
        ],
        [
         103.628,
         37.798
        ],
        [
         103.407,
         37.861
        ],
        [
         103.362,
         38.038
        ],
        [
         103.369,
         38.089
        ],
        [
         103.535,
         38.157
        ],
        [
         103.508,
         38.281
        ],
        [
         103.465,
         38.353
        ],
        [
         103.416,
         38.405
        ],
        [
         103.63,
         38.52
        ],
        [
         103.63,
         38.93
        ],
        [
         102.018,
         38.93
        ],
        [
         102.046,
         38.905
        ],
        [
         102.075,
         38.891
        ],
        [
         101.942,
         38.809
        ],
        [
         101.874,
         38.734
        ],
        [
         101.777,
         38.66
        ],
        [
         101.673,
         38.691
        ],
        [
         101.63,
         38.669
        ],
        [
         101.63,
         37.795
        ],
        [
         101.67,
         37.754
        ],
        [
         101.659,
         37.733
        ],
        [
         101.792,
         37.696
        ],
        [
         101.816,
         37.654
        ],
        [
         101.855,
         37.665
        ],
        [
         101.873,
         37.687
        ],
        [
         101.946,
         37.728
        ],
        [
         101.999,
         37.725
        ],
        [
         102.036,
         37.685
        ],
        [
         102.049,
         37.652
        ],
        [
         102.035,
         37.628
        ],
        [
         102.102,
         37.582
        ],
        [
         102.131,
         37.546
        ],
        [
         102.103,
         37.483
        ],
        [
         102.125,
         37.485
        ],
        [
         102.177,
         37.459
        ],
        [
         102.197,
         37.42
        ],
        [
         102.3,
         37.391
        ],
        [
         102.299,
         37.37
        ],
        [
         102.368,
         37.328
        ],
        [
         102.428,
         37.309
        ],
        [
         102.419,
         37.294
        ],
        [
         102.453,
         37.271
        ],
        [
         102.458,
         37.248
        ],
        [
         102.49,
         37.223
        ],
        [
         102.533,
         37.217
        ],
        [
         102.578,
         37.173
        ],
        [
         102.6,
         37.175
        ],
        [
         102.642,
         37.1
        ],
        [
         102.583,
         37.105
        ],
        [
         102.488,
         37.078
        ],
        [
         102.506,
         37.019
        ],
        [
         102.45,
         36.968
        ],
        [
         102.5,
         36.955
        ],
        [
         102.524,
         36.93
        ],
        [
         103.63,
         36.93
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         102.524,
         36.93
        ],
        [
         102.5,
         36.955
        ],
        [
         102.45,
         36.968
        ],
        [
         102.506,
         37.019
        ],
        [
         102.488,
         37.078
        ],
        [
         102.583,
         37.105
        ],
        [
         102.642,
         37.1
        ],
        [
         102.6,
         37.175
        ],
        [
         102.578,
         37.173
        ],
        [
         102.533,
         37.217
        ],
        [
         102.49,
         37.223
        ],
        [
         102.458,
         37.248
        ],
        [
         102.453,
         37.271
        ],
        [
         102.419,
         37.294
        ],
        [
         102.428,
         37.309
        ],
        [
         102.368,
         37.328
        ],
        [
         102.299,
         37.37
        ],
        [
         102.3,
         37.391
        ],
        [
         102.197,
         37.42
        ],
        [
         102.177,
         37.459
        ],
        [
         102.125,
         37.485
        ],
        [
         102.103,
         37.483
        ],
        [
         102.131,
         37.546
        ],
        [
         102.102,
         37.582
        ],
        [
         102.035,
         37.628
        ],
        [
         102.049,
         37.652
        ],
        [
         102.036,
         37.685
        ],
        [
         101.999,
         37.725
        ],
        [
         101.946,
         37.728
        ],
        [
         101.873,
         37.687
        ],
        [
         101.855,
         37.665
        ],
        [
         101.816,
         37.654
        ],
        [
         101.792,
         37.696
        ],
        [
         101.659,
         37.733
        ],
        [
         101.67,
         37.754
        ],
        [
         101.63,
         37.795
        ],
        [
         101.63,
         36.93
        ],
        [
         102.524,
         36.93
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   101.63,
   36.93,
   103.63,
   38.93
  ]
 }
};
