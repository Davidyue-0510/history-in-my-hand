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
        124.02,
        40.72
       ],
       [
        124.02,
        42.72
       ],
       [
        126.02,
        42.72
       ],
       [
        126.02,
        40.72
       ],
       [
        124.02,
        40.72
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
         124.02,
         42.72
        ],
        [
         124.02,
         40.72
        ],
        [
         125.481,
         40.72
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
         124.97,
         42.72
        ],
        [
         124.02,
         42.72
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
         126.02,
         42.72
        ],
        [
         124.97,
         42.72
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
         126.02,
         40.934
        ],
        [
         126.02,
         42.72
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
       124.02,
       41.889
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
   }
  ],
  "lakes": [],
  "_bbox": [
   124.02,
   40.72,
   126.02,
   42.72
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
