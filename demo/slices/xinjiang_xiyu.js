// 本文件由 tools/build.py 自动生成（切片 xinjiang_xiyu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xinjiang_xiyu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xinjiang_xiyu"] = {
 "meta": {
  "kind": "frontier",
  "region": "guangzhong",
  "province": "xinjiang",
  "title": "汉·西域都护府（汉）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "wulei",
  "dossier_event": "event:ev_xinjiang_xiyu_01",
  "vocab_pack": "inline:xinjiang_xiyu",
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
    "note": "汉·西域都护府（汉）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉·西域都护府（汉）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "汉·西域都护府（汉）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉·西域都护府（汉）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   6
  ],
  "page": "county.html?scene=xinjiang_xiyu",
  "key": "xinjiang_xiyu",
  "scene_id": "xinjiang_xiyu"
 },
 "sources": [
  {
   "id": "hanshu_xiyu",
   "title": "《汉书·西域传》与都护府",
   "party": "汉官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "wulei",
   "name": "乌垒城",
   "type": "city",
   "modern": "今新疆轮台",
   "note": "都护治所。坐标据地名志条目（别名 乌垒城→轮台），标 approx。",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 84.25,
   "lat": 41.97,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 乌垒城→轮台）（诚实回填 v0.221）。",
   "elev": 1124
  },
  {
   "id": "xiyu",
   "name": "西域",
   "type": "region",
   "modern": "今新疆及中亚",
   "note": "汉之西域",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "XIN__p01",
   "name": "汉武帝",
   "role": "汉帝",
   "note": "通西域，破匈奴",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIN__p02",
   "name": "张骞",
   "role": "汉使",
   "note": "凿空西域",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIN__p03",
   "name": "郑吉",
   "role": "西域都护",
   "note": "首任都护",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIN__p04",
   "name": "汉宣帝",
   "role": "汉帝",
   "note": "设都护",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "XIN_001",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "建置",
   "value_text": "神爵二年设西域都护",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "hanshu_xiyu",
   "quote": "郑吉为西域都护",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "郑吉为西域都护",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_002",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "治所",
   "value_text": "治乌垒城",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "hanshu_xiyu",
   "quote": "治乌垒城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "治乌垒城",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_003",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "辖境",
   "value_text": "总领南北道三十六国",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "总领南北道三十六国",
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
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "总领南北道三十六国",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_004",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "意义",
   "value_text": "西域正式隶汉疆",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "西域正式隶汉疆",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "西域正式隶汉疆",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_005",
   "subject": "event:ev_xinjiang_xiyu_01",
   "predicate": "目的",
   "value_text": "通西域破匈奴",
   "time": {
    "era_text": "建元三年",
    "start": "-138-01-01",
    "end": "-138-12-31",
    "gregorian_year": -138
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "通西域破匈奴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "通西域破匈奴",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_006",
   "subject": "person:XIN__p02",
   "predicate": "功绩",
   "value_text": "张骞凿空西域",
   "time": {
    "era_text": "建元三年",
    "start": "-138-01-01",
    "end": "-138-12-31",
    "gregorian_year": -138
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "张骞凿空",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "张骞凿空",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_007",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "职能",
   "value_text": "镇抚一方",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "hanshu_xiyu",
   "quote": "镇抚一方",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "镇抚一方",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_008",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "影响",
   "value_text": "丝路畅达",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "丝路畅达",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "丝路畅达",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_009",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "影响",
   "value_text": "中西往来不绝",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "xiyu",
   "source": "hanshu_xiyu",
   "quote": "中西往来不绝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "中西往来不绝",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_010",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "性质",
   "value_text": "西域都护为汉之官",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "hanshu_xiyu",
   "quote": "郑吉为西域都护",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学界考订",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "郑吉为西域都护",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIN_011",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "年代",
   "value_text": "都护设置年代有异说",
   "time": {
    "era_text": "神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "hanshu_xiyu",
   "quote": "神爵二年",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "汉书·郑吉传",
    "skills": [
     "考据"
    ],
    "accept": "另说在神爵三年"
   },
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "神爵二年",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_xinjiang_xiyu_02|影响",
   "subject": "event:ev_xinjiang_xiyu_02",
   "predicate": "影响",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "XIN_008",
    "XIN_009"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "XIN_011"
 ],
 "events": [
  {
   "id": "ev_xinjiang_xiyu_01",
   "subject": "event:ev_xinjiang_xiyu_01",
   "year": -138,
   "era": "建元三年",
   "title": "张骞出使",
   "kind": "外交",
   "text": "张骞始通西域",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xinjiang_xiyu_02",
   "subject": "event:ev_xinjiang_xiyu_02",
   "year": -60,
   "era": "神爵二年",
   "title": "设西域都护",
   "kind": "建置",
   "text": "郑吉为都护",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "xiyu",
   "to": "wulei",
   "type": "military",
   "label": "都护镇抚",
   "_source_idx": 0,
   "_source_name": "《汉书·西域传》与都护府",
   "_source_party": "汉官修",
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
   "汉官修"
  ],
  "party_bucket": {
   "汉官修": "汉官修"
  },
  "party_colors": {
   "汉官修": "#A0473A"
  },
  "factions": {
   "f_汉官修": {
    "name": "汉官修",
    "macro_party": "汉官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉官修": "#A0473A"
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
        83.25,
        40.97
       ],
       [
        83.25,
        42.97
       ],
       [
        85.25,
        42.97
       ],
       [
        85.25,
        40.97
       ],
       [
        83.25,
        40.97
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
         85.25,
         40.97
        ],
        [
         85.25,
         42.97
        ],
        [
         83.25,
         42.97
        ],
        [
         83.25,
         40.97
        ],
        [
         85.25,
         40.97
        ]
       ]
      ]
     ]
    },
    "n": "新疆维吾尔自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       83.256,
       40.97
      ],
      [
       83.26,
       40.971
      ],
      [
       83.455,
       40.998
      ],
      [
       83.666,
       41.009
      ],
      [
       83.793,
       41.001
      ],
      [
       83.835,
       40.975
      ],
      [
       83.896,
       40.998
      ],
      [
       83.975,
       41.07
      ],
      [
       84.091,
       41.131
      ],
      [
       84.246,
       41.182
      ],
      [
       84.477,
       41.195
      ],
      [
       84.784,
       41.169
      ],
      [
       84.984,
       41.129
      ],
      [
       85.077,
       41.077
      ],
      [
       85.218,
       41.028
      ],
      [
       85.25,
       41.021
      ]
     ]
    },
    "n": "Tarim"
   }
  ],
  "lakes": [],
  "_bbox": [
   83.25,
   40.97,
   85.25,
   42.97
  ]
 }
};
