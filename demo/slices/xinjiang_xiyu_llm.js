// 本文件由 tools/build.py 自动生成（切片 xinjiang_xiyu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xinjiang_xiyu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xinjiang_xiyu_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "xibei",
  "province": "xinjiang",
  "title": "西域都护府",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "wulei",
  "dossier_event": "event:ev_xinjiang_xiyu_llm_01",
  "vocab_pack": "xinjiang_xiyu_llm",
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
    "note": "西域都护府：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "西域都护府：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "西域都护府：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "西域都护府：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=xinjiang_xiyu_llm",
  "key": "xinjiang_xiyu_llm",
  "scene_id": "xinjiang_xiyu_llm"
 },
 "sources": [
  {
   "id": "xinjiang_xiyu_src_llm",
   "title": "西域都护府史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "wulei",
   "name": "乌垒城",
   "type": "city",
   "modern": "今新疆轮台县",
   "note": "西域都护府治所。坐标据地名志条目（别名 乌垒城→轮台），标 approx。",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 84.25,
   "lat": 41.97,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 乌垒城→轮台）（诚实回填 v0.221）。",
   "elev": 1124
  },
  {
   "id": "xiongnu",
   "name": "匈奴",
   "type": "region",
   "modern": "今蒙古高原",
   "note": "北方游牧政权",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "XIN__p01",
   "name": "郑吉",
   "role": "首任西域都护",
   "note": "西汉首任西域都护，统辖西域三十六国",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIN__p02",
   "name": "日逐王",
   "role": "匈奴王",
   "note": "匈奴日逐王，降汉归附",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "XIN_001",
   "subject": "event:ev_xinjiang_xiyu_llm_01",
   "predicate": "降汉",
   "value_text": "匈奴日逐王降汉",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "匈奴日逐王降汉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "匈奴日逐王降汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_002",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "建置",
   "value_text": "设西域都护府于乌垒城",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "汉于乌垒城设西域都护府",
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
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉于乌垒城设西域都护府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_003",
   "subject": "person:XIN__p01",
   "predicate": "首任都护",
   "value_text": "郑吉为首任都护",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "郑吉为首任都护",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑吉为首任都护",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_004",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "统辖范围",
   "value_text": "统三十六国，护南北两道",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "统三十六国，护南北两道",
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
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "统三十六国，护南北两道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_005",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "治理措施",
   "value_text": "颁汉法、征赋税、行屯田",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "颁汉法、征赋税、行屯田",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "颁汉法、征赋税、行屯田",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_006",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "历史意义",
   "value_text": "标志西域正式纳入中国版图",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "标志西域正式纳入中国版图",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "标志西域正式纳入中国版图",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_007",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "历史意义",
   "value_text": "中原与西域政治一体，丝路畅通",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "自此中原与西域政治一体，丝绸之路畅通",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自此中原与西域政治一体，丝绸之路畅通",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_008",
   "subject": "event:ev_xinjiang_xiyu_llm_01",
   "predicate": "降汉原因",
   "value_text": "匈奴内乱，日逐王降汉",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "xiongnu",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "匈奴日逐王降汉",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "empire",
   "note": "史料未明言降因，推测与匈奴内乱有关",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "匈奴日逐王降汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_009",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府性质",
   "value_text": "汉朝在西域的行政军事机构",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "设西域都护府",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界对都护府性质有不同解读",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设西域都护府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_010",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府性质",
   "value_text": "汉朝对西域的羁縻统治机构",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "设西域都护府",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "empire",
   "note": "有学者认为都护府为羁縻性质",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设西域都护府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_011",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府性质",
   "value_text": "汉朝对西域的直接管辖机构",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "设西域都护府",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "empire",
   "note": "有学者强调都护府为直接管辖",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设西域都护府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_012",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府治所",
   "value_text": "乌垒城具体位置存疑",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "汉于乌垒城设西域都护府",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "乌垒城今址有争议",
   "dims": [
    1
   ],
   "lead": {
    "where": "新疆轮台县",
    "skills": [
     "考古发掘",
     "文献考据"
    ],
    "accept": "确认乌垒城确切位置"
   },
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉于乌垒城设西域都护府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_013",
   "subject": "event:ev_xinjiang_xiyu_llm_01",
   "predicate": "降汉时间",
   "value_text": "日逐王降汉具体月份不详",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "xiongnu",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "匈奴日逐王降汉",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料仅记年份",
   "dims": [
    6
   ],
   "lead": {
    "where": "匈奴故地",
    "skills": [
     "史料比对"
    ],
    "accept": "确定降汉具体时间"
   },
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "匈奴日逐王降汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIN_014",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府辖国数",
   "value_text": "三十六国具体名单不详",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "统三十六国",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未列国名",
   "dims": [
    3
   ],
   "lead": {
    "where": "西域",
    "skills": [
     "文献考据"
    ],
    "accept": "列出三十六国名单"
   },
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "统三十六国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "xinjiang_xiyu_llm_DIM2",
   "subject": "技术:农业水利",
   "predicate": "技术维度",
   "value_text": "西域都护府 的史料涉及农业水利（「xt\": \"颁汉法、征赋税、行屯田\", \"time\": {\"er」），补标技术维度（推断）。",
   "time": {
    "era_text": "汉宣帝神爵二年",
    "start": "-0060"
   },
   "place": "wulei",
   "source": "xinjiang_xiyu_src_llm",
   "quote": "「xt\": \"颁汉法、征赋税、行屯田\", \"time\": {\"er」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_xinjiang_xiyu_llm_02|历史意义",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "历史意义",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "XIN_006",
    "XIN_007"
   ]
  },
  {
   "id": "cf:event:ev_xinjiang_xiyu_llm_02|都护府性质",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "predicate": "都护府性质",
   "kind": "scholarly_divergence",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "XIN_009",
    "XIN_010",
    "XIN_011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "XIN_012",
  "XIN_013",
  "XIN_014"
 ],
 "events": [
  {
   "id": "ev_xinjiang_xiyu_llm_01",
   "subject": "event:ev_xinjiang_xiyu_llm_01",
   "year": -60,
   "era": "汉宣帝神爵二年",
   "title": "日逐王降汉",
   "kind": "外交",
   "text": "匈奴日逐王降汉，西域诸国悉定",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xinjiang_xiyu_llm_02",
   "subject": "event:ev_xinjiang_xiyu_llm_02",
   "year": -60,
   "era": "汉宣帝神爵二年",
   "title": "设西域都护府",
   "kind": "建置",
   "text": "汉于乌垒城设西域都护府，统三十六国",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "xiongnu",
   "to": "wulei",
   "type": "military",
   "label": "日逐王降汉路线",
   "_source_idx": 0,
   "_source_name": "西域都护府史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "wulei",
   "party": "后世官修",
   "start": -60,
   "end": 10,
   "basis": "auto: 场景主地点 wulei 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "wulei",
   "name": "乌垒城",
   "lon": 84.25,
   "lat": 41.97,
   "region": "xibei"
  }
 ],
 "control_years": [
  -60,
  10
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
