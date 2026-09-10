// 本文件由 tools/build.py 自动生成（切片 jianzhou_nuerhaci_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jianzhou_nuerhaci_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jianzhou_nuerhaci_llm"] = {
 "meta": {
  "kind": "dynasty",
  "region": "jianzhou",
  "province": "jilin",
  "title": "明·建州女真崛起（努尔哈赤）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "feala",
  "dossier_event": "event:ev_jianzhou_nuerhaci_llm_01",
  "vocab_pack": "inline:jianzhou_nuerhaci_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "yuan_ming",
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
    "note": "明·建州女真崛起（努尔哈赤）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·建州女真崛起（努尔哈赤）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明·建州女真崛起（努尔哈赤）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·建州女真崛起（努尔哈赤）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=jianzhou_nuerhaci_llm",
  "key": "jianzhou_nuerhaci_llm",
  "scene_id": "jianzhou_nuerhaci_llm"
 },
 "sources": [
  {
   "id": "jianzhou_nuerhaci_src",
   "title": "清太祖武皇帝实录（起兵）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "清国史馆",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "sukesuhu",
   "name": "苏克素浒河",
   "type": "river",
   "modern": "今中国辽宁",
   "note": "建州女真居地",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "feala",
   "name": "费阿拉城",
   "type": "fortress",
   "modern": "今中国辽宁新宾",
   "note": "努尔哈赤所筑。坐标据地名志条目（别名 费阿拉城→新宾），标 approx。",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 125.02,
   "lat": 41.72,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 费阿拉城→新宾）（诚实回填 v0.221）。",
   "elev": 599
  },
  {
   "id": "guleshan",
   "name": "古勒山",
   "type": "region",
   "modern": "今中国辽宁新宾",
   "note": "古勒山之战地",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "努尔哈赤",
   "role": "建州女真首领",
   "note": "后金开国者",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "guangning",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang"
   ]
  },
  {
   "id": "JIA__p02",
   "name": "尼堪外兰",
   "role": "图伦城主",
   "note": "努尔哈赤讨伐对象",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "event:ev_jianzhou_nuerhaci_llm_01",
   "predicate": "起兵",
   "value_text": "以十三遗甲起兵",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "以十三遗甲起兵",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以十三遗甲起兵",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "event:ev_jianzhou_nuerhaci_llm_01",
   "predicate": "讨伐对象",
   "value_text": "讨尼堪外兰",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "讨尼堪外兰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "讨尼堪外兰",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "event:ev_jianzhou_nuerhaci_llm_02",
   "predicate": "建城",
   "value_text": "筑费阿拉城",
   "time": {
    "era_text": "万历十五年",
    "start": "1587-01-01",
    "end": "1587-12-31",
    "gregorian_year": 1587
   },
   "place": "feala",
   "source": "jianzhou_nuerhaci_src",
   "quote": "筑费阿拉城",
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
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "筑费阿拉城",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "event:ev_jianzhou_nuerhaci_llm_02",
   "predicate": "定国政",
   "value_text": "定国政、禁暴乱、通商贾",
   "time": {
    "era_text": "万历十五年",
    "start": "1587-01-01",
    "end": "1587-12-31",
    "gregorian_year": 1587
   },
   "place": "feala",
   "source": "jianzhou_nuerhaci_src",
   "quote": "定国政、禁暴乱、通商贾",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "定国政、禁暴乱、通商贾",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "predicate": "战役结果",
   "value_text": "破九部之师",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "guleshan",
   "source": "jianzhou_nuerhaci_src",
   "quote": "破九部之师于古勒山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "破九部之师于古勒山",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "predicate": "影响",
   "value_text": "威行诸部，满洲之基以立",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "guleshan",
   "source": "jianzhou_nuerhaci_src",
   "quote": "威行诸部，满洲之基以立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "威行诸部，满洲之基以立",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "person:JIA__p01",
   "predicate": "身份",
   "value_text": "建州女真首领",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "建州女真居长白山之西",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建州女真居长白山之西",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "person:JIA__p02",
   "predicate": "身份",
   "value_text": "图伦城主",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "讨尼堪外兰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "讨尼堪外兰",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "place:feala",
   "predicate": "建置",
   "value_text": "费阿拉城为都城",
   "time": {
    "era_text": "万历十五年",
    "start": "1587-01-01",
    "end": "1587-12-31",
    "gregorian_year": 1587
   },
   "place": "feala",
   "source": "jianzhou_nuerhaci_src",
   "quote": "筑费阿拉城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "筑费阿拉城",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "event:ev_jianzhou_nuerhaci_llm_01",
   "predicate": "兵力",
   "value_text": "十三副遗甲",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "十三遗甲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "十三遗甲",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "predicate": "九部联军",
   "value_text": "九部之师",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "guleshan",
   "source": "jianzhou_nuerhaci_src",
   "quote": "九部之师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "九部之师",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "predicate": "战役损失",
   "value_text": "九部败绩",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "guleshan",
   "source": "jianzhou_nuerhaci_src",
   "quote": "破九部之师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "破九部之师",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_013",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "predicate": "战略意义",
   "value_text": "奠定满洲基础",
   "time": {
    "era_text": "万历二十一年",
    "start": "1593-01-01",
    "end": "1593-12-31",
    "gregorian_year": 1593
   },
   "place": "guleshan",
   "source": "jianzhou_nuerhaci_src",
   "quote": "满洲之基以立",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "theater",
   "note": "后世史家评",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "满洲之基以立",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_014",
   "subject": "event:ev_jianzhou_nuerhaci_llm_01",
   "predicate": "起兵原因",
   "value_text": "为父祖复仇",
   "time": {
    "era_text": "万历十一年",
    "start": "1583-01-01",
    "end": "1583-12-31",
    "gregorian_year": 1583
   },
   "place": "sukesuhu",
   "source": "jianzhou_nuerhaci_src",
   "quote": "以十三遗甲起兵",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未明言",
   "dims": [
    6
   ],
   "lead": {
    "where": "清实录",
    "skills": [
     "文本分析"
    ],
    "accept": "需考订"
   },
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以十三遗甲起兵",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_014"
 ],
 "events": [
  {
   "id": "ev_jianzhou_nuerhaci_llm_01",
   "subject": "event:ev_jianzhou_nuerhaci_llm_01",
   "year": 1583,
   "era": "万历十一年",
   "title": "十三遗甲起兵",
   "kind": "战事",
   "text": "努尔哈赤以十三遗甲起兵讨尼堪外兰",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jianzhou_nuerhaci_llm_02",
   "subject": "event:ev_jianzhou_nuerhaci_llm_02",
   "year": 1587,
   "era": "万历十五年",
   "title": "筑费阿拉城",
   "kind": "建置",
   "text": "筑费阿拉城，定国政",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jianzhou_nuerhaci_llm_03",
   "subject": "event:ev_jianzhou_nuerhaci_llm_03",
   "year": 1593,
   "era": "万历二十一年",
   "title": "古勒山之战",
   "kind": "战事",
   "text": "破九部之师于古勒山",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "feala",
   "to": "guleshan",
   "type": "military",
   "label": "努尔哈赤率军",
   "_source_idx": 0,
   "_source_name": "清太祖武皇帝实录（起兵）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "control": [
  {
   "place_id": "sukesuhu",
   "party": "后世官修",
   "start": 1583,
   "end": 1593,
   "timeline": "main"
  },
  {
   "place_id": "feala",
   "party": "后世官修",
   "start": 1583,
   "end": 1593,
   "timeline": "main"
  },
  {
   "place_id": "guleshan",
   "party": "后世官修",
   "start": 1583,
   "end": 1593,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "feala",
   "name": "费阿拉城",
   "lon": 125.02,
   "lat": 41.72,
   "region": "jianzhou"
  }
 ],
 "control_years": [
  1583,
  1593
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
        122.43,
        40.35
       ],
       [
        122.43,
        43.35
       ],
       [
        126.35,
        43.35
       ],
       [
        126.35,
        40.35
       ],
       [
        122.43,
        40.35
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
        122.43,
        43.35
       ],
       [
        122.43,
        42.732
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.43,
        42.771
       ],
       [
        122.43,
        42.842
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.703,
        43.35
       ],
       [
        122.43,
        43.35
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
         124.732,
         40.35
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.934,
         43.35
        ],
        [
         123.703,
         43.35
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.43,
         42.842
        ],
        [
         122.43,
         42.771
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.43,
         42.732
        ],
        [
         122.43,
         40.35
        ],
        [
         124.732,
         40.35
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         126.35,
         43.35
        ],
        [
         123.934,
         43.35
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.35,
         41.243
        ],
        [
         126.35,
         43.35
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.609,
       43.35
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.43,
       41.175
      ],
      [
       122.43,
       41.075
      ],
      [
       122.44,
       41.055
      ],
      [
       122.43,
       41.037
      ]
     ]
    },
    "n": "Liao"
   }
  ],
  "lakes": [],
  "_bbox": [
   122.43,
   40.35,
   126.35,
   43.35
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
