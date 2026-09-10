// 本文件由 tools/build.py 自动生成（切片 jilin_bohai_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jilin_bohai_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jilin_bohai_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "jianzhou",
  "province": "jilin",
  "title": "渤海国",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dongmou_shan",
  "dossier_event": "event:ev_jilin_bohai_llm_01",
  "vocab_pack": "jilin_bohai_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "tang",
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
    "note": "渤海国：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "渤海国：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "渤海国：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "渤海国：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=jilin_bohai_llm",
  "key": "jilin_bohai_llm",
  "scene_id": "jilin_bohai_llm"
 },
 "sources": [
  {
   "id": "jilin_bohai_src_llm",
   "title": "渤海国史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "唐",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dongmou_shan",
   "name": "东牟山",
   "type": "fortress",
   "modern": "今中国吉林敦化",
   "note": "大祚荣据此山建震国。坐标据地名志条目（别名 东牟山→敦化），标 approx。",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 128.23,
   "lat": 43.37,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 东牟山→敦化）（诚实回填 v0.221）。",
   "elev": 544
  },
  {
   "id": "huhan_zhou",
   "name": "忽汗州",
   "type": "region",
   "modern": "今中国吉林敦化一带",
   "note": "唐置忽汗州都督府",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIL__p01",
   "name": "大祚荣",
   "role": "粟末靺鞨首领、震国王",
   "note": "渤海国建立者",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIL__p02",
   "name": "唐玄宗",
   "role": "唐朝皇帝",
   "note": "册封大祚荣为渤海郡王",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIL__p03",
   "name": "辽太祖",
   "role": "辽朝皇帝",
   "note": "灭渤海国",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIL_001",
   "subject": "event:ev_jilin_bohai_llm_01",
   "predicate": "建国",
   "value_text": "大祚荣据东牟山自立为震国王",
   "time": {
    "era_text": "唐圣历元年",
    "start": "698-01-01",
    "end": "698-12-31",
    "gregorian_year": 698
   },
   "place": "dongmou_shan",
   "source": "jilin_bohai_src_llm",
   "quote": "唐圣历元年，粟末靺鞨首领大祚荣据东牟山，自立为震国王",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐圣历元年，粟末靺鞨首领大祚荣据东牟山，自立为震国王",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_002",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "册封",
   "value_text": "唐册封大祚荣为渤海郡王",
   "time": {
    "era_text": "唐开元元年",
    "start": "713-01-01",
    "end": "713-12-31",
    "gregorian_year": 713
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "开元元年，唐遣使册封大祚荣为渤海郡王",
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
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开元元年，唐遣使册封大祚荣为渤海郡王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_003",
   "subject": "event:ev_jilin_bohai_llm_03",
   "predicate": "灭亡",
   "value_text": "辽太祖灭渤海国",
   "time": {
    "era_text": "926年",
    "start": "926-01-01",
    "end": "926-12-31",
    "gregorian_year": 926
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "926年为辽太祖所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "926年为辽太祖所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_004",
   "subject": "place:dongmou_shan",
   "predicate": "位置",
   "value_text": "东牟山在今吉林敦化",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dongmou_shan",
   "source": "jilin_bohai_src_llm",
   "quote": "据东牟山（今吉林敦化）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "据东牟山（今吉林敦化）",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_005",
   "subject": "place:huhan_zhou",
   "predicate": "行政隶属",
   "value_text": "渤海隶忽汗州都督府",
   "time": {
    "era_text": "唐开元元年",
    "start": "713-01-01",
    "end": "713-12-31",
    "gregorian_year": 713
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "隶忽汗州都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隶忽汗州都督",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_006",
   "subject": "event:ev_jilin_bohai_llm_01",
   "predicate": "国号",
   "value_text": "初称震国，后称渤海",
   "time": {
    "era_text": "唐圣历元年",
    "start": "698-01-01",
    "end": "698-12-31",
    "gregorian_year": 698
   },
   "place": "dongmou_shan",
   "source": "jilin_bohai_src_llm",
   "quote": "自立为震国王，称渤海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自立为震国王，称渤海",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_007",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "册封意义",
   "value_text": "唐承认渤海国地位",
   "time": {
    "era_text": "唐开元元年",
    "start": "713-01-01",
    "end": "713-12-31",
    "gregorian_year": 713
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "册封大祚荣为渤海郡王",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "册封大祚荣为渤海郡王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_008",
   "subject": "event:ev_jilin_bohai_llm_03",
   "predicate": "灭亡原因",
   "value_text": "辽太祖灭渤海",
   "time": {
    "era_text": "926年",
    "start": "926-01-01",
    "end": "926-12-31",
    "gregorian_year": 926
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "926年为辽太祖所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "926年为辽太祖所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_009",
   "subject": "event:ev_jilin_bohai_llm_01",
   "predicate": "民族",
   "value_text": "粟末靺鞨首领大祚荣",
   "time": {
    "era_text": "唐圣历元年",
    "start": "698-01-01",
    "end": "698-12-31",
    "gregorian_year": 698
   },
   "place": "dongmou_shan",
   "source": "jilin_bohai_src_llm",
   "quote": "粟末靺鞨首领大祚荣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "粟末靺鞨首领大祚荣",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_010",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "制度",
   "value_text": "渤海仿唐制",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "仿唐制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "仿唐制",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_011",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "外交",
   "value_text": "渤海通聘日本",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "通聘日本",
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
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "通聘日本",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_012",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "文化",
   "value_text": "渤海称海东盛国",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "文化称海东盛国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文化称海东盛国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_013",
   "subject": "event:ev_jilin_bohai_llm_02",
   "predicate": "疆域",
   "value_text": "全盛时五京十五府六十二州",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "五京十五府六十二州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五京十五府六十二州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_014",
   "subject": "event:ev_jilin_bohai_llm_03",
   "predicate": "灭亡时间",
   "value_text": "926年渤海亡",
   "time": {
    "era_text": "926年",
    "start": "926-01-01",
    "end": "926-12-31",
    "gregorian_year": 926
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "926年为辽太祖所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "926年为辽太祖所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIL_015",
   "subject": "event:ev_jilin_bohai_llm_03",
   "predicate": "灭亡影响",
   "value_text": "渤海国灭亡",
   "time": {
    "era_text": "926年",
    "start": "926-01-01",
    "end": "926-12-31",
    "gregorian_year": 926
   },
   "place": "huhan_zhou",
   "source": "jilin_bohai_src_llm",
   "quote": "926年为辽太祖所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "渤海灭亡后遗民去向",
    "skills": [
     "历史地理",
     "民族史"
    ],
    "accept": "进一步研究"
   },
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "926年为辽太祖所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIL_015"
 ],
 "events": [
  {
   "id": "ev_jilin_bohai_llm_01",
   "subject": "event:ev_jilin_bohai_llm_01",
   "year": 698,
   "era": "唐圣历元年",
   "title": "大祚荣建震国",
   "kind": "建置",
   "text": "大祚荣据东牟山自立为震国王",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jilin_bohai_llm_02",
   "subject": "event:ev_jilin_bohai_llm_02",
   "year": 713,
   "era": "唐开元元年",
   "title": "唐册封渤海郡王",
   "kind": "外交",
   "text": "唐遣使册封大祚荣为渤海郡王",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jilin_bohai_llm_03",
   "subject": "event:ev_jilin_bohai_llm_03",
   "year": 926,
   "era": "辽天显元年",
   "title": "渤海国灭亡",
   "kind": "战事",
   "text": "辽太祖灭渤海国",
   "_source_idx": 0,
   "_source_name": "渤海国史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
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
   "place_id": "dongmou_shan",
   "party": "后世官修",
   "start": 698,
   "end": 926,
   "basis": "auto: 场景主地点 dongmou_shan 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "dongmou_shan",
   "name": "东牟山",
   "lon": 128.23,
   "lat": 43.37,
   "region": "jianzhou"
  }
 ],
 "control_years": [
  698,
  926
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
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        128.814,
        40.35
       ],
       [
        128.843,
        40.358
       ],
       [
        128.945,
        40.428
       ],
       [
        129.11,
        40.491
       ],
       [
        129.23,
        40.642
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
        122.43,
        40.35
       ],
       [
        122.43,
        44.37
       ],
       [
        129.23,
        44.37
       ],
       [
        129.23,
        40.642
       ],
       [
        129.11,
        40.491
       ],
       [
        128.945,
        40.428
       ],
       [
        128.843,
        40.358
       ],
       [
        128.814,
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
        44.37
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
        123.704,
        43.37
       ],
       [
        123.608,
        43.366
       ],
       [
        123.545,
        43.415
       ],
       [
        123.52,
        43.402
       ],
       [
        123.486,
        43.445
       ],
       [
        123.442,
        43.438
       ],
       [
        123.42,
        43.41
       ],
       [
        123.383,
        43.469
       ],
       [
        123.364,
        43.483
       ],
       [
        123.316,
        43.492
       ],
       [
        123.33,
        43.519
       ],
       [
        123.305,
        43.551
       ],
       [
        123.36,
        43.567
       ],
       [
        123.453,
        43.546
       ],
       [
        123.461,
        43.569
       ],
       [
        123.434,
        43.575
       ],
       [
        123.421,
        43.598
       ],
       [
        123.512,
        43.593
       ],
       [
        123.51,
        43.625
       ],
       [
        123.537,
        43.634
       ],
       [
        123.518,
        43.682
       ],
       [
        123.52,
        43.708
       ],
       [
        123.483,
        43.737
       ],
       [
        123.498,
        43.771
       ],
       [
        123.462,
        43.823
       ],
       [
        123.468,
        43.854
       ],
       [
        123.397,
        43.955
       ],
       [
        123.371,
        43.97
       ],
       [
        123.401,
        43.979
       ],
       [
        123.366,
        44.014
       ],
       [
        123.331,
        44.029
       ],
       [
        123.328,
        44.084
       ],
       [
        123.351,
        44.093
       ],
       [
        123.363,
        44.133
       ],
       [
        123.387,
        44.162
       ],
       [
        123.324,
        44.18
       ],
       [
        123.287,
        44.212
       ],
       [
        123.277,
        44.253
       ],
       [
        123.197,
        44.345
       ],
       [
        123.129,
        44.367
       ],
       [
        123.127,
        44.37
       ],
       [
        122.762,
        44.37
       ],
       [
        122.761,
        44.37
       ],
       [
        122.703,
        44.319
       ],
       [
        122.675,
        44.286
       ],
       [
        122.642,
        44.284
       ],
       [
        122.516,
        44.251
       ],
       [
        122.483,
        44.237
       ],
       [
        122.43,
        44.236
       ],
       [
        122.43,
        44.37
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
         123.896,
         43.361
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.852,
         43.406
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.797,
         43.49
        ],
        [
         123.748,
         43.472
        ],
        [
         123.749,
         43.439
        ],
        [
         123.71,
         43.417
        ],
        [
         123.704,
         43.37
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
         129.23,
         43.799
        ],
        [
         129.212,
         43.785
        ],
        [
         129.23,
         43.718
        ],
        [
         129.23,
         43.707
        ],
        [
         129.214,
         43.695
        ],
        [
         129.217,
         43.649
        ],
        [
         129.23,
         43.637
        ],
        [
         129.23,
         43.593
        ],
        [
         129.169,
         43.562
        ],
        [
         129.145,
         43.57
        ],
        [
         129.094,
         43.548
        ],
        [
         129.038,
         43.54
        ],
        [
         129.014,
         43.523
        ],
        [
         128.963,
         43.539
        ],
        [
         128.95,
         43.554
        ],
        [
         128.878,
         43.54
        ],
        [
         128.835,
         43.588
        ],
        [
         128.821,
         43.637
        ],
        [
         128.787,
         43.687
        ],
        [
         128.768,
         43.732
        ],
        [
         128.729,
         43.737
        ],
        [
         128.76,
         43.756
        ],
        [
         128.739,
         43.807
        ],
        [
         128.719,
         43.817
        ],
        [
         128.761,
         43.857
        ],
        [
         128.73,
         43.89
        ],
        [
         128.696,
         43.903
        ],
        [
         128.636,
         43.891
        ],
        [
         128.64,
         43.948
        ],
        [
         128.61,
         43.961
        ],
        [
         128.585,
         43.99
        ],
        [
         128.575,
         44.048
        ],
        [
         128.529,
         44.112
        ],
        [
         128.472,
         44.158
        ],
        [
         128.45,
         44.203
        ],
        [
         128.472,
         44.248
        ],
        [
         128.454,
         44.258
        ],
        [
         128.472,
         44.32
        ],
        [
         128.447,
         44.34
        ],
        [
         128.476,
         44.346
        ],
        [
         128.481,
         44.37
        ],
        [
         128.183,
         44.37
        ],
        [
         128.173,
         44.347
        ],
        [
         128.137,
         44.358
        ],
        [
         128.095,
         44.355
        ],
        [
         128.075,
         44.37
        ],
        [
         128.074,
         44.37
        ],
        [
         128.05,
         44.35
        ],
        [
         128.065,
         44.307
        ],
        [
         128.102,
         44.293
        ],
        [
         128.064,
         44.251
        ],
        [
         128.104,
         44.23
        ],
        [
         128.092,
         44.182
        ],
        [
         128.06,
         44.169
        ],
        [
         128.088,
         44.158
        ],
        [
         128.091,
         44.133
        ],
        [
         128.043,
         44.104
        ],
        [
         127.95,
         44.088
        ],
        [
         127.913,
         44.065
        ],
        [
         127.863,
         44.063
        ],
        [
         127.846,
         44.082
        ],
        [
         127.808,
         44.087
        ],
        [
         127.783,
         44.072
        ],
        [
         127.729,
         44.099
        ],
        [
         127.736,
         44.114
        ],
        [
         127.712,
         44.199
        ],
        [
         127.682,
         44.167
        ],
        [
         127.642,
         44.194
        ],
        [
         127.626,
         44.188
        ],
        [
         127.59,
         44.228
        ],
        [
         127.624,
         44.278
        ],
        [
         127.579,
         44.311
        ],
        [
         127.524,
         44.37
        ],
        [
         122.43,
         44.37
        ],
        [
         122.43,
         44.236
        ],
        [
         122.483,
         44.237
        ],
        [
         122.516,
         44.251
        ],
        [
         122.642,
         44.284
        ],
        [
         122.675,
         44.286
        ],
        [
         122.703,
         44.319
        ],
        [
         122.761,
         44.37
        ],
        [
         122.762,
         44.37
        ],
        [
         123.127,
         44.37
        ],
        [
         123.129,
         44.367
        ],
        [
         123.197,
         44.345
        ],
        [
         123.277,
         44.253
        ],
        [
         123.287,
         44.212
        ],
        [
         123.324,
         44.18
        ],
        [
         123.387,
         44.162
        ],
        [
         123.363,
         44.133
        ],
        [
         123.351,
         44.093
        ],
        [
         123.328,
         44.084
        ],
        [
         123.331,
         44.029
        ],
        [
         123.366,
         44.014
        ],
        [
         123.401,
         43.979
        ],
        [
         123.371,
         43.97
        ],
        [
         123.397,
         43.955
        ],
        [
         123.468,
         43.854
        ],
        [
         123.462,
         43.823
        ],
        [
         123.498,
         43.771
        ],
        [
         123.483,
         43.737
        ],
        [
         123.52,
         43.708
        ],
        [
         123.518,
         43.682
        ],
        [
         123.537,
         43.634
        ],
        [
         123.51,
         43.625
        ],
        [
         123.512,
         43.593
        ],
        [
         123.421,
         43.598
        ],
        [
         123.434,
         43.575
        ],
        [
         123.461,
         43.569
        ],
        [
         123.453,
         43.546
        ],
        [
         123.453,
         43.546
        ],
        [
         123.36,
         43.567
        ],
        [
         123.305,
         43.551
        ],
        [
         123.33,
         43.519
        ],
        [
         123.316,
         43.492
        ],
        [
         123.364,
         43.483
        ],
        [
         123.383,
         43.469
        ],
        [
         123.42,
         43.41
        ],
        [
         123.442,
         43.438
        ],
        [
         123.486,
         43.445
        ],
        [
         123.52,
         43.402
        ],
        [
         123.545,
         43.415
        ],
        [
         123.608,
         43.366
        ],
        [
         123.704,
         43.37
        ],
        [
         123.71,
         43.417
        ],
        [
         123.749,
         43.439
        ],
        [
         123.748,
         43.472
        ],
        [
         123.797,
         43.49
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.852,
         43.406
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.896,
         43.361
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
         126.354,
         41.245
        ],
        [
         126.373,
         41.289
        ],
        [
         126.437,
         41.353
        ],
        [
         126.497,
         41.375
        ],
        [
         126.524,
         41.349
        ],
        [
         126.539,
         41.367
        ],
        [
         126.497,
         41.407
        ],
        [
         126.56,
         41.548
        ],
        [
         126.583,
         41.563
        ],
        [
         126.564,
         41.609
        ],
        [
         126.593,
         41.625
        ],
        [
         126.608,
         41.669
        ],
        [
         126.645,
         41.661
        ],
        [
         126.688,
         41.674
        ],
        [
         126.724,
         41.711
        ],
        [
         126.691,
         41.728
        ],
        [
         126.695,
         41.751
        ],
        [
         126.723,
         41.753
        ],
        [
         126.8,
         41.703
        ],
        [
         126.809,
         41.749
        ],
        [
         126.848,
         41.734
        ],
        [
         126.856,
         41.76
        ],
        [
         126.887,
         41.792
        ],
        [
         126.931,
         41.813
        ],
        [
         126.953,
         41.804
        ],
        [
         126.94,
         41.773
        ],
        [
         126.979,
         41.777
        ],
        [
         127.006,
         41.749
        ],
        [
         127.051,
         41.745
        ],
        [
         127.058,
         41.704
        ],
        [
         127.038,
         41.677
        ],
        [
         127.103,
         41.648
        ],
        [
         127.093,
         41.63
        ],
        [
         127.127,
         41.622
        ],
        [
         127.136,
         41.6
        ],
        [
         127.178,
         41.6
        ],
        [
         127.125,
         41.566
        ],
        [
         127.119,
         41.54
        ],
        [
         127.165,
         41.543
        ],
        [
         127.188,
         41.527
        ],
        [
         127.241,
         41.521
        ],
        [
         127.289,
         41.502
        ],
        [
         127.254,
         41.487
        ],
        [
         127.296,
         41.486
        ],
        [
         127.361,
         41.466
        ],
        [
         127.36,
         41.48
        ],
        [
         127.406,
         41.479
        ],
        [
         127.42,
         41.46
        ],
        [
         127.459,
         41.462
        ],
        [
         127.465,
         41.479
        ],
        [
         127.526,
         41.468
        ],
        [
         127.547,
         41.477
        ],
        [
         127.564,
         41.433
        ],
        [
         127.619,
         41.433
        ],
        [
         127.637,
         41.414
        ],
        [
         127.684,
         41.423
        ],
        [
         127.78,
         41.427
        ],
        [
         127.855,
         41.421
        ],
        [
         127.869,
         41.404
        ],
        [
         127.882,
         41.448
        ],
        [
         127.91,
         41.43
        ],
        [
         127.932,
         41.445
        ],
        [
         127.97,
         41.439
        ],
        [
         127.991,
         41.421
        ],
        [
         128.0,
         41.443
        ],
        [
         128.04,
         41.393
        ],
        [
         128.111,
         41.393
        ],
        [
         128.091,
         41.375
        ],
        [
         128.115,
         41.364
        ],
        [
         128.169,
         41.404
        ],
        [
         128.204,
         41.411
        ],
        [
         128.243,
         41.477
        ],
        [
         128.238,
         41.498
        ],
        [
         128.301,
         41.54
        ],
        [
         128.318,
         41.576
        ],
        [
         128.302,
         41.628
        ],
        [
         128.249,
         41.681
        ],
        [
         128.209,
         41.689
        ],
        [
         128.164,
         41.722
        ],
        [
         128.148,
         41.781
        ],
        [
         128.113,
         41.794
        ],
        [
         128.104,
         41.843
        ],
        [
         128.116,
         41.897
        ],
        [
         128.107,
         41.95
        ],
        [
         128.034,
         42.0
        ],
        [
         128.091,
         42.023
        ],
        [
         128.294,
         42.026
        ],
        [
         128.405,
         42.019
        ],
        [
         128.466,
         42.021
        ],
        [
         128.499,
         42.001
        ],
        [
         128.598,
         42.007
        ],
        [
         128.607,
         42.03
        ],
        [
         128.638,
         42.035
        ],
        [
         128.658,
         42.019
        ],
        [
         128.702,
         42.02
        ],
        [
         128.738,
         42.05
        ],
        [
         128.779,
         42.034
        ],
        [
         128.795,
         42.042
        ],
        [
         128.898,
         42.017
        ],
        [
         128.953,
         42.026
        ],
        [
         128.955,
         42.084
        ],
        [
         128.971,
         42.097
        ],
        [
         129.009,
         42.092
        ],
        [
         129.039,
         42.108
        ],
        [
         129.048,
         42.137
        ],
        [
         129.114,
         42.141
        ],
        [
         129.167,
         42.188
        ],
        [
         129.216,
         42.208
        ],
        [
         129.209,
         42.238
        ],
        [
         129.181,
         42.242
        ],
        [
         129.183,
         42.262
        ],
        [
         129.216,
         42.265
        ],
        [
         129.23,
         42.282
        ],
        [
         129.23,
         42.284
        ],
        [
         129.209,
         42.293
        ],
        [
         129.23,
         42.311
        ],
        [
         129.23,
         43.799
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         127.524,
         44.37
        ],
        [
         127.579,
         44.311
        ],
        [
         127.624,
         44.278
        ],
        [
         127.59,
         44.228
        ],
        [
         127.626,
         44.188
        ],
        [
         127.642,
         44.194
        ],
        [
         127.682,
         44.167
        ],
        [
         127.712,
         44.199
        ],
        [
         127.736,
         44.114
        ],
        [
         127.729,
         44.099
        ],
        [
         127.783,
         44.072
        ],
        [
         127.808,
         44.087
        ],
        [
         127.846,
         44.082
        ],
        [
         127.863,
         44.063
        ],
        [
         127.913,
         44.065
        ],
        [
         127.95,
         44.088
        ],
        [
         128.043,
         44.104
        ],
        [
         128.091,
         44.133
        ],
        [
         128.088,
         44.158
        ],
        [
         128.06,
         44.169
        ],
        [
         128.092,
         44.182
        ],
        [
         128.104,
         44.23
        ],
        [
         128.064,
         44.251
        ],
        [
         128.102,
         44.293
        ],
        [
         128.065,
         44.307
        ],
        [
         128.05,
         44.35
        ],
        [
         128.074,
         44.37
        ],
        [
         128.075,
         44.37
        ],
        [
         128.095,
         44.355
        ],
        [
         128.137,
         44.358
        ],
        [
         128.173,
         44.347
        ],
        [
         128.183,
         44.37
        ],
        [
         128.481,
         44.37
        ],
        [
         128.476,
         44.346
        ],
        [
         128.447,
         44.34
        ],
        [
         128.472,
         44.32
        ],
        [
         128.454,
         44.258
        ],
        [
         128.472,
         44.248
        ],
        [
         128.45,
         44.203
        ],
        [
         128.472,
         44.158
        ],
        [
         128.529,
         44.112
        ],
        [
         128.575,
         44.048
        ],
        [
         128.585,
         43.99
        ],
        [
         128.61,
         43.961
        ],
        [
         128.64,
         43.948
        ],
        [
         128.636,
         43.891
        ],
        [
         128.696,
         43.903
        ],
        [
         128.73,
         43.89
        ],
        [
         128.761,
         43.857
        ],
        [
         128.719,
         43.817
        ],
        [
         128.739,
         43.807
        ],
        [
         128.76,
         43.756
        ],
        [
         128.729,
         43.737
        ],
        [
         128.768,
         43.732
        ],
        [
         128.787,
         43.687
        ],
        [
         128.821,
         43.637
        ],
        [
         128.835,
         43.588
        ],
        [
         128.878,
         43.54
        ],
        [
         128.95,
         43.554
        ],
        [
         128.963,
         43.539
        ],
        [
         129.014,
         43.523
        ],
        [
         129.038,
         43.54
        ],
        [
         129.094,
         43.548
        ],
        [
         129.145,
         43.57
        ],
        [
         129.169,
         43.562
        ],
        [
         129.23,
         43.593
        ],
        [
         129.23,
         43.637
        ],
        [
         129.217,
         43.649
        ],
        [
         129.214,
         43.695
        ],
        [
         129.23,
         43.707
        ],
        [
         129.23,
         43.718
        ],
        [
         129.212,
         43.785
        ],
        [
         129.23,
         43.799
        ],
        [
         129.23,
         44.37
        ],
        [
         127.524,
         44.37
        ]
       ]
      ]
     ]
    },
    "n": "黑龙江省"
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
       123.554,
       43.483
      ],
      [
       123.614,
       43.399
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
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       122.43,
       43.739
      ],
      [
       122.449,
       43.748
      ],
      [
       122.624,
       43.795
      ],
      [
       122.769,
       43.815
      ],
      [
       122.886,
       43.808
      ],
      [
       123.017,
       43.765
      ],
      [
       123.162,
       43.687
      ],
      [
       123.269,
       43.647
      ],
      [
       123.338,
       43.643
      ],
      [
       123.405,
       43.628
      ],
      [
       123.468,
       43.6
      ],
      [
       123.513,
       43.561
      ],
      [
       123.554,
       43.483
      ]
     ]
    },
    "n": "Xiliao"
   }
  ],
  "lakes": [],
  "_bbox": [
   122.43,
   40.35,
   129.23,
   44.37
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
