// 本文件由 tools/build.py 自动生成（切片 shanghai_xiaodaohui_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanghai_xiaodaohui_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanghai_xiaodaohui_llm"] = {
 "meta": {
  "kind": "uprising",
  "region": "jiangnan",
  "province": "shanghai",
  "title": "上海小刀会起义（1853—1855）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "shanghai_county",
  "dossier_event": "event:ev_shanghai_xiaodaohui_llm_01",
  "vocab_pack": "shanghai_xiaodaohui_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing_modern",
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
    "note": "上海小刀会起义（1853—1855）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "上海小刀会起义（1853—1855）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "上海小刀会起义（1853—1855）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "上海小刀会起义（1853—1855）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shanghai_xiaodaohui_llm",
  "key": "shanghai_xiaodaohui_llm",
  "scene_id": "shanghai_xiaodaohui_llm"
 },
 "sources": [
  {
   "id": "xiaodaohui_llm_src",
   "title": "上海小刀会起义史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1853—1855",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shanghai_county",
   "name": "上海县城",
   "type": "city",
   "modern": "今中国上海市",
   "note": "起义军占领之地。坐标据地名志条目（modern 含 上海→上海），标 chgis。",
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 121.48676,
   "lat": 31.22443,
   "geo_match": "chgis",
   "geo_note": "坐标据地名志条目（modern 含 上海→上海）（诚实回填 v0.221）。",
   "elev": 11
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "刘丽川",
   "role": "上海小刀会首领，大明国元帅",
   "note": "领导起义，后战死",
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "SHA__p02",
   "name": "袁祖德",
   "role": "上海知县",
   "note": "被起义军所杀",
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义时间",
   "value_text": "咸丰三年八月初五",
   "time": {
    "era_text": "咸丰三年八月初五",
    "start": "1853-09-07",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "咸丰三年八月初五（1853年9月7日）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "咸丰三年八月初五（1853年9月7日）",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义结果",
   "value_text": "攻占上海县城，杀知县",
   "time": {
    "era_text": "咸丰三年八月初五",
    "start": "1853-09-07",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "攻占上海县城，杀知县袁祖德",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "攻占上海县城，杀知县袁祖德",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p01",
   "predicate": "称号",
   "value_text": "称元帅，建大明国",
   "time": {
    "era_text": "咸丰三年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "建立『大明国』政权，刘丽川称元帅",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建立『大明国』政权，刘丽川称元帅",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "predicate": "城破时间",
   "value_text": "咸丰五年正月城破",
   "time": {
    "era_text": "咸丰五年正月",
    "start": "1855-01-01",
    "end": "1855-12-31",
    "gregorian_year": 1855
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "咸丰五年正月（1855年2月）城破",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "咸丰五年正月（1855年2月）城破",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "person:SHA__p01",
   "predicate": "结局",
   "value_text": "突围战死",
   "time": {
    "era_text": "咸丰五年正月",
    "start": "1855-01-01",
    "end": "1855-12-31",
    "gregorian_year": 1855
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "刘丽川突围战死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "刘丽川突围战死",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "predicate": "围困方",
   "value_text": "清政府联合外国租界势力",
   "time": {
    "era_text": "咸丰三年至五年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "清政府联合外国租界势力围困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清政府联合外国租界势力围困",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义性质",
   "value_text": "太平天国时期反清斗争",
   "time": {
    "era_text": "咸丰三年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "是太平天国时期东南地区重要反清斗争",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "是太平天国时期东南地区重要反清斗争",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义历时",
   "value_text": "历时十七个月",
   "time": {
    "era_text": "咸丰三年八月至五年正月",
    "start": "1853-09-07",
    "end": "1855-02",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "起义历时十七个月",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "起义历时十七个月",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义背景",
   "value_text": "小刀会属天地会支派",
   "time": {
    "era_text": "咸丰三年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "小刀会是清代民间秘密结社，属天地会支派",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "小刀会是清代民间秘密结社，属天地会支派",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "predicate": "失败原因",
   "value_text": "清军联合外国势力围困",
   "time": {
    "era_text": "咸丰五年",
    "start": "1855-01-01",
    "end": "1855-12-31",
    "gregorian_year": 1855
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "清政府联合外国租界势力围困",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清政府联合外国租界势力围困",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义军控制范围",
   "value_text": "控制县城及周边",
   "time": {
    "era_text": "咸丰三年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "起义军控制县城及周边",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "起义军控制县城及周边",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "与清军关系",
   "value_text": "与清军相持",
   "time": {
    "era_text": "咸丰三年至五年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "与清军相持",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与清军相持",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "predicate": "城破细节",
   "value_text": "城破后刘丽川突围战死",
   "time": {
    "era_text": "咸丰五年正月",
    "start": "1855-01-01",
    "end": "1855-12-31",
    "gregorian_year": 1855
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "城破，刘丽川突围战死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "城破，刘丽川突围战死",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "predicate": "起义军领袖",
   "value_text": "刘丽川领导起义",
   "time": {
    "era_text": "咸丰三年",
    "start": "1853-01-01",
    "end": "1853-12-31",
    "gregorian_year": 1853
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "在刘丽川领导下起义",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "在刘丽川领导下起义",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "predicate": "起义失败影响",
   "value_text": "东南反清斗争受挫",
   "time": {
    "era_text": "咸丰五年",
    "start": "1855-01-01",
    "end": "1855-12-31",
    "gregorian_year": 1855
   },
   "place": "shanghai_county",
   "source": "xiaodaohui_llm_src",
   "quote": "起义失败",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏具体影响记载",
   "dims": [
    5
   ],
   "lead": {
    "where": "上海及周边",
    "skills": [
     "史料考据"
    ],
    "accept": "起义失败对太平天国的影响"
   },
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "起义失败",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_015"
 ],
 "events": [
  {
   "id": "ev_shanghai_xiaodaohui_llm_01",
   "subject": "event:ev_shanghai_xiaodaohui_llm_01",
   "year": 1853,
   "era": "咸丰三年八月初五",
   "title": "上海小刀会起义",
   "kind": "战事",
   "text": "起义军攻占上海县城，杀知县袁祖德",
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanghai_xiaodaohui_llm_02",
   "subject": "event:ev_shanghai_xiaodaohui_llm_02",
   "year": 1855,
   "era": "咸丰五年正月",
   "title": "上海县城陷落",
   "kind": "战事",
   "text": "清军联合外国势力破城，刘丽川战死",
   "_source_idx": 0,
   "_source_name": "上海小刀会起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "shanghai_county",
   "party": "后世官修",
   "start": 1853,
   "end": 1855,
   "basis": "auto: 场景主地点 shanghai_county 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "shanghai_county",
   "name": "上海县城",
   "lon": 121.48676,
   "lat": 31.22443,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1853,
  1855
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
     "type": "LineString",
     "coordinates": [
      [
       121.577,
       31.637
      ],
      [
       121.542,
       31.674
      ],
      [
       121.492,
       31.694
      ],
      [
       121.464,
       31.756
      ],
      [
       121.339,
       31.797
      ],
      [
       121.211,
       31.805
      ],
      [
       121.227,
       31.758
      ],
      [
       121.336,
       31.644
      ],
      [
       121.52,
       31.55
      ],
      [
       121.78,
       31.464
      ],
      [
       121.863,
       31.492
      ],
      [
       121.844,
       31.526
      ],
      [
       121.808,
       31.552
      ],
      [
       121.577,
       31.637
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
        121.435,
        30.224
       ],
       [
        121.433,
        30.227
       ],
       [
        121.341,
        30.282
       ],
       [
        121.258,
        30.304
       ],
       [
        121.159,
        30.302
       ],
       [
        121.02,
        30.224
       ],
       [
        120.559,
        30.224
       ],
       [
        120.495,
        30.303
       ],
       [
        120.487,
        30.3
       ],
       [
        120.487,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.31,
        30.7
       ],
       [
        121.419,
        30.79
       ],
       [
        121.528,
        30.841
       ],
       [
        121.675,
        30.864
       ],
       [
        121.769,
        30.87
       ],
       [
        121.878,
        30.917
       ],
       [
        121.834,
        31.062
       ],
       [
        121.786,
        31.163
       ],
       [
        121.661,
        31.32
       ],
       [
        121.351,
        31.485
       ],
       [
        121.205,
        31.628
       ],
       [
        121.055,
        31.719
       ],
       [
        120.938,
        31.75
       ],
       [
        120.788,
        31.82
       ],
       [
        120.752,
        31.923
       ],
       [
        120.716,
        31.984
       ],
       [
        120.497,
        32.02
       ],
       [
        120.487,
        32.015
       ],
       [
        120.487,
        32.092
       ],
       [
        120.52,
        32.106
       ],
       [
        120.661,
        32.081
       ],
       [
        120.792,
        32.032
       ],
       [
        120.974,
        31.869
       ],
       [
        121.146,
        31.842
       ],
       [
        121.266,
        31.863
       ],
       [
        121.352,
        31.859
       ],
       [
        121.681,
        31.712
       ],
       [
        121.764,
        31.7
       ],
       [
        121.866,
        31.704
       ],
       [
        121.856,
        31.816
       ],
       [
        121.832,
        31.9
       ],
       [
        121.751,
        31.993
       ],
       [
        121.674,
        32.051
       ],
       [
        121.491,
        32.121
       ],
       [
        121.451,
        32.153
       ],
       [
        121.404,
        32.206
       ],
       [
        121.404,
        32.224
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
        121.863,
        31.492
       ],
       [
        121.78,
        31.464
       ],
       [
        121.52,
        31.55
       ],
       [
        121.336,
        31.644
       ],
       [
        121.227,
        31.758
       ],
       [
        121.211,
        31.805
       ],
       [
        121.339,
        31.797
       ],
       [
        121.464,
        31.756
       ],
       [
        121.492,
        31.694
       ],
       [
        121.542,
        31.674
       ],
       [
        121.577,
        31.637
       ],
       [
        121.808,
        31.552
       ],
       [
        121.844,
        31.526
       ],
       [
        121.863,
        31.492
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
        120.487,
        30.224
       ],
       [
        120.487,
        32.224
       ],
       [
        121.404,
        32.224
       ],
       [
        121.404,
        32.206
       ],
       [
        121.451,
        32.153
       ],
       [
        121.491,
        32.121
       ],
       [
        121.674,
        32.051
       ],
       [
        121.751,
        31.993
       ],
       [
        121.832,
        31.9
       ],
       [
        121.856,
        31.816
       ],
       [
        121.866,
        31.704
       ],
       [
        121.764,
        31.7
       ],
       [
        121.681,
        31.712
       ],
       [
        121.352,
        31.859
       ],
       [
        121.266,
        31.863
       ],
       [
        121.146,
        31.842
       ],
       [
        120.974,
        31.869
       ],
       [
        120.792,
        32.032
       ],
       [
        120.661,
        32.081
       ],
       [
        120.52,
        32.106
       ],
       [
        120.487,
        32.092
       ],
       [
        120.487,
        32.015
       ],
       [
        120.497,
        32.02
       ],
       [
        120.716,
        31.984
       ],
       [
        120.752,
        31.923
       ],
       [
        120.788,
        31.82
       ],
       [
        120.938,
        31.75
       ],
       [
        121.055,
        31.719
       ],
       [
        121.205,
        31.628
       ],
       [
        121.351,
        31.485
       ],
       [
        121.661,
        31.32
       ],
       [
        121.786,
        31.163
       ],
       [
        121.834,
        31.062
       ],
       [
        121.878,
        30.917
       ],
       [
        121.769,
        30.87
       ],
       [
        121.675,
        30.864
       ],
       [
        121.528,
        30.841
       ],
       [
        121.419,
        30.79
       ],
       [
        121.31,
        30.7
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.487,
        30.388
       ],
       [
        120.487,
        30.3
       ],
       [
        120.495,
        30.303
       ],
       [
        120.559,
        30.224
       ],
       [
        121.02,
        30.224
       ],
       [
        121.159,
        30.302
       ],
       [
        121.258,
        30.304
       ],
       [
        121.341,
        30.282
       ],
       [
        121.433,
        30.227
       ],
       [
        121.435,
        30.224
       ],
       [
        120.487,
        30.224
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
         120.901,
         31.017
        ],
        [
         120.94,
         31.01
        ],
        [
         120.949,
         31.03
        ],
        [
         120.989,
         31.014
        ],
        [
         121.001,
         30.938
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.175,
         30.772
        ],
        [
         121.217,
         30.786
        ],
        [
         121.232,
         30.756
        ],
        [
         121.272,
         30.724
        ],
        [
         121.275,
         30.677
        ],
        [
         121.362,
         30.68
        ],
        [
         121.426,
         30.73
        ],
        [
         121.517,
         30.775
        ],
        [
         121.601,
         30.805
        ],
        [
         121.681,
         30.819
        ],
        [
         121.905,
         30.814
        ],
        [
         121.944,
         30.777
        ],
        [
         121.97,
         30.789
        ],
        [
         121.955,
         30.826
        ],
        [
         121.994,
         30.863
        ],
        [
         121.991,
         30.969
        ],
        [
         121.977,
         31.016
        ],
        [
         121.947,
         31.066
        ],
        [
         121.81,
         31.197
        ],
        [
         121.722,
         31.304
        ],
        [
         121.599,
         31.375
        ],
        [
         121.521,
         31.395
        ],
        [
         121.405,
         31.479
        ],
        [
         121.344,
         31.512
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.248,
         31.477
        ],
        [
         121.242,
         31.493
        ],
        [
         121.175,
         31.449
        ],
        [
         121.143,
         31.392
        ],
        [
         121.114,
         31.375
        ],
        [
         121.13,
         31.344
        ],
        [
         121.143,
         31.275
        ],
        [
         121.09,
         31.292
        ],
        [
         121.06,
         31.245
        ],
        [
         121.077,
         31.158
        ],
        [
         121.018,
         31.134
        ],
        [
         120.93,
         31.141
        ],
        [
         120.881,
         31.135
        ],
        [
         120.859,
         31.1
        ],
        [
         120.891,
         31.094
        ],
        [
         120.901,
         31.017
        ]
       ]
      ],
      [
       [
        [
         121.975,
         31.617
        ],
        [
         121.715,
         31.674
        ],
        [
         121.643,
         31.698
        ],
        [
         121.6,
         31.703
        ],
        [
         121.499,
         31.753
        ],
        [
         121.432,
         31.769
        ],
        [
         121.385,
         31.833
        ],
        [
         121.323,
         31.868
        ],
        [
         121.265,
         31.864
        ],
        [
         121.2,
         31.835
        ],
        [
         121.119,
         31.759
        ],
        [
         121.145,
         31.754
        ],
        [
         121.289,
         31.617
        ],
        [
         121.372,
         31.553
        ],
        [
         121.395,
         31.585
        ],
        [
         121.434,
         31.591
        ],
        [
         121.547,
         31.531
        ],
        [
         121.626,
         31.502
        ],
        [
         121.683,
         31.491
        ],
        [
         121.819,
         31.438
        ],
        [
         121.891,
         31.429
        ],
        [
         121.982,
         31.464
        ],
        [
         121.996,
         31.493
        ],
        [
         121.975,
         31.617
        ]
       ]
      ],
      [
       [
        [
         121.796,
         31.33
        ],
        [
         121.793,
         31.363
        ],
        [
         121.742,
         31.407
        ],
        [
         121.586,
         31.455
        ],
        [
         121.567,
         31.483
        ],
        [
         121.521,
         31.494
        ],
        [
         121.51,
         31.482
        ],
        [
         121.572,
         31.436
        ],
        [
         121.728,
         31.355
        ],
        [
         121.764,
         31.315
        ],
        [
         121.785,
         31.311
        ],
        [
         121.796,
         31.33
        ]
       ]
      ],
      [
       [
        [
         121.802,
         31.357
        ],
        [
         121.804,
         31.329
        ],
        [
         121.841,
         31.295
        ],
        [
         121.932,
         31.283
        ],
        [
         122.016,
         31.282
        ],
        [
         122.098,
         31.256
        ],
        [
         122.123,
         31.307
        ],
        [
         122.117,
         31.321
        ],
        [
         122.041,
         31.324
        ],
        [
         121.952,
         31.337
        ],
        [
         121.846,
         31.375
        ],
        [
         121.793,
         31.378
        ],
        [
         121.802,
         31.357
        ]
       ]
      ],
      [
       [
        [
         121.627,
         31.445
        ],
        [
         121.632,
         31.457
        ],
        [
         121.579,
         31.48
        ],
        [
         121.627,
         31.445
        ]
       ]
      ],
      [
       [
        [
         121.944,
         31.216
        ],
        [
         121.96,
         31.159
        ],
        [
         121.996,
         31.161
        ],
        [
         122.009,
         31.221
        ],
        [
         121.951,
         31.229
        ],
        [
         121.944,
         31.216
        ]
       ]
      ],
      [
       [
        [
         121.883,
         31.241
        ],
        [
         121.909,
         31.195
        ],
        [
         121.924,
         31.234
        ],
        [
         121.883,
         31.241
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.487,
         32.224
        ],
        [
         120.487,
         30.77
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.709,
         30.933
        ],
        [
         120.685,
         30.955
        ],
        [
         120.698,
         30.971
        ],
        [
         120.746,
         30.962
        ],
        [
         120.77,
         30.997
        ],
        [
         120.821,
         31.007
        ],
        [
         120.866,
         30.99
        ],
        [
         120.901,
         31.017
        ],
        [
         120.891,
         31.094
        ],
        [
         120.859,
         31.1
        ],
        [
         120.881,
         31.135
        ],
        [
         120.93,
         31.141
        ],
        [
         121.018,
         31.134
        ],
        [
         121.077,
         31.158
        ],
        [
         121.06,
         31.245
        ],
        [
         121.09,
         31.292
        ],
        [
         121.143,
         31.275
        ],
        [
         121.13,
         31.344
        ],
        [
         121.114,
         31.375
        ],
        [
         121.143,
         31.392
        ],
        [
         121.175,
         31.449
        ],
        [
         121.242,
         31.493
        ],
        [
         121.248,
         31.477
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.344,
         31.512
        ],
        [
         121.372,
         31.553
        ],
        [
         121.289,
         31.617
        ],
        [
         121.145,
         31.754
        ],
        [
         121.119,
         31.759
        ],
        [
         121.2,
         31.835
        ],
        [
         121.265,
         31.864
        ],
        [
         121.323,
         31.868
        ],
        [
         121.385,
         31.833
        ],
        [
         121.432,
         31.769
        ],
        [
         121.499,
         31.753
        ],
        [
         121.6,
         31.703
        ],
        [
         121.643,
         31.698
        ],
        [
         121.715,
         31.674
        ],
        [
         121.975,
         31.617
        ],
        [
         121.97,
         31.719
        ],
        [
         121.889,
         31.866
        ],
        [
         121.856,
         31.955
        ],
        [
         121.772,
         32.033
        ],
        [
         121.759,
         32.059
        ],
        [
         121.525,
         32.136
        ],
        [
         121.543,
         32.152
        ],
        [
         121.459,
         32.177
        ],
        [
         121.499,
         32.211
        ],
        [
         121.498,
         32.224
        ],
        [
         120.487,
         32.224
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.487,
         30.224
        ],
        [
         121.527,
         30.224
        ],
        [
         121.498,
         30.259
        ],
        [
         121.395,
         30.338
        ],
        [
         121.372,
         30.371
        ],
        [
         121.328,
         30.397
        ],
        [
         121.225,
         30.405
        ],
        [
         121.183,
         30.434
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.189,
         30.633
        ],
        [
         121.239,
         30.649
        ],
        [
         121.275,
         30.677
        ],
        [
         121.272,
         30.724
        ],
        [
         121.232,
         30.756
        ],
        [
         121.217,
         30.786
        ],
        [
         121.175,
         30.772
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         121.001,
         30.938
        ],
        [
         120.989,
         31.014
        ],
        [
         120.949,
         31.03
        ],
        [
         120.94,
         31.01
        ],
        [
         120.901,
         31.017
        ],
        [
         120.866,
         30.99
        ],
        [
         120.821,
         31.007
        ],
        [
         120.77,
         30.997
        ],
        [
         120.746,
         30.962
        ],
        [
         120.698,
         30.971
        ],
        [
         120.685,
         30.955
        ],
        [
         120.709,
         30.933
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.487,
         30.77
        ],
        [
         120.487,
         30.224
        ]
       ]
      ],
      [
       [
        [
         122.428,
         30.738
        ],
        [
         122.427,
         30.698
        ],
        [
         122.487,
         30.697
        ],
        [
         122.487,
         30.717
        ],
        [
         122.475,
         30.714
        ],
        [
         122.446,
         30.745
        ],
        [
         122.428,
         30.738
        ]
       ]
      ],
      [
       [
        [
         122.163,
         30.33
        ],
        [
         122.058,
         30.292
        ],
        [
         122.154,
         30.245
        ],
        [
         122.232,
         30.235
        ],
        [
         122.247,
         30.301
        ],
        [
         122.228,
         30.33
        ],
        [
         122.191,
         30.33
        ],
        [
         122.176,
         30.352
        ],
        [
         122.163,
         30.33
        ]
       ]
      ],
      [
       [
        [
         122.317,
         30.25
        ],
        [
         122.278,
         30.243
        ],
        [
         122.359,
         30.236
        ],
        [
         122.365,
         30.255
        ],
        [
         122.417,
         30.239
        ],
        [
         122.407,
         30.273
        ],
        [
         122.333,
         30.273
        ],
        [
         122.317,
         30.25
        ]
       ]
      ],
      [
       [
        [
         122.43,
         30.409
        ],
        [
         122.433,
         30.445
        ],
        [
         122.374,
         30.462
        ],
        [
         122.278,
         30.472
        ],
        [
         122.282,
         30.418
        ],
        [
         122.319,
         30.407
        ],
        [
         122.353,
         30.422
        ],
        [
         122.43,
         30.409
        ]
       ]
      ],
      [
       [
        [
         121.944,
         30.777
        ],
        [
         121.968,
         30.689
        ],
        [
         121.997,
         30.659
        ],
        [
         122.087,
         30.602
        ],
        [
         122.133,
         30.595
        ],
        [
         122.075,
         30.648
        ],
        [
         122.011,
         30.669
        ],
        [
         121.993,
         30.695
        ],
        [
         121.988,
         30.753
        ],
        [
         121.97,
         30.789
        ],
        [
         121.944,
         30.777
        ]
       ]
      ],
      [
       [
        [
         121.958,
         30.288
        ],
        [
         122.001,
         30.308
        ],
        [
         121.989,
         30.34
        ],
        [
         121.942,
         30.333
        ],
        [
         121.921,
         30.307
        ],
        [
         121.958,
         30.288
        ]
       ]
      ],
      [
       [
        [
         122.264,
         30.27
        ],
        [
         122.254,
         30.237
        ],
        [
         122.316,
         30.25
        ],
        [
         122.3,
         30.271
        ],
        [
         122.264,
         30.27
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   }
  ],
  "rivers": [],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.602,
        31.087
       ],
       [
        120.487,
        31.023
       ],
       [
        120.487,
        31.096
       ],
       [
        120.54,
        31.127
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   }
  ],
  "_bbox": [
   120.487,
   30.224,
   122.487,
   32.224
  ]
 }
};
