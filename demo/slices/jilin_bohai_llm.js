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
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        127.23,
        42.37
       ],
       [
        127.23,
        44.37
       ],
       [
        129.23,
        44.37
       ],
       [
        129.23,
        42.37
       ],
       [
        127.23,
        42.37
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
         129.23,
         42.37
        ],
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
         127.23,
         44.37
        ],
        [
         127.23,
         42.37
        ],
        [
         129.23,
         42.37
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
  "rivers": [],
  "lakes": [],
  "_bbox": [
   127.23,
   42.37,
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
