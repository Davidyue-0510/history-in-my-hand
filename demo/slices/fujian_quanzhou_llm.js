// 本文件由 tools/build.py 自动生成（切片 fujian_quanzhou_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fujian_quanzhou_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fujian_quanzhou_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "jiangnan",
  "province": "fujian",
  "title": "泉州刺桐港·海上丝路（宋元）",
  "dossier_label": "fujian_quanzhou_llm",
  "subtitle": "",
  "primary_place": "quanzhou",
  "dossier_event": "event:ev_fujian_quanzhou_llm_01",
  "vocab_pack": "fujian_quanzhou_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "epoch": "song",
  "scale_tier": "strategic",
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
    "note": "制度+思想→宋元市舶司建制、蕃商留居，海商社会相对自治；朝贡—互市双轨"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→刺桐港舟舶之利、番货堆积，海路连接埃及波斯，转口贸易枢纽"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→蕃商番客侨居、闽南航海族群兴起，沿海社会商业化"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→泉州滨海扼海上丝路东端，澎湖巡检司辖琉求，控东海—南海通道"
   }
  },
  "subject_names": [
   "person:FUJ__p01",
   "place:quanzhou",
   "place:citong_gang",
   "place:penghu",
   "place:liuqiu",
   "place:aiji",
   "place:bosi",
   "event:ev_fujian_quanzhou_llm_01",
   "event:ev_fujian_quanzhou_llm_02"
  ],
  "page": "county.html?scene=fujian_quanzhou_llm",
  "key": "fujian_quanzhou_llm",
  "scene_id": "fujian_quanzhou_llm"
 },
 "sources": [
  {
   "id": "quanzhou_llm_src",
   "title": "泉州港海上丝路史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1087—1368",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "quanzhou",
   "name": "泉州",
   "type": "port",
   "modern": "今中国福建省泉州市",
   "note": "宋元海上丝绸之路起点",
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.58,
   "lat": 24.91,
   "geo_note": "吕惠卿故里，今福建泉州",
   "elev": 41
  },
  {
   "id": "citong",
   "name": "刺桐",
   "type": "port",
   "modern": "今泉州古称",
   "note": "泉州港别称",
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "FUJ__p01",
   "name": "马可·波罗",
   "role": "意大利旅行家",
   "note": "称刺桐为世界最大港口之一",
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "FUJ_001",
   "subject": "event:ev_fujian_quanzhou_llm_01",
   "predicate": "设市舶司",
   "value_text": "北宋元祐二年设市舶司",
   "time": {
    "era_text": "北宋元祐二年",
    "start": "1087-01-01",
    "end": "1087-12-31",
    "gregorian_year": 1087
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "北宋元祐二年（1087）设市舶司",
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
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "北宋元祐二年（1087）设市舶司",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_002",
   "subject": "place:quanzhou",
   "predicate": "贸易规模",
   "value_text": "元代与亚非百余国通贸",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "与亚非百余国通贸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与亚非百余国通贸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_003",
   "subject": "place:quanzhou",
   "predicate": "港口地位",
   "value_text": "号为东方第一大港",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "号为东方第一大港",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "号为东方第一大港",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_004",
   "subject": "place:quanzhou",
   "predicate": "宗教多元",
   "value_text": "清净寺、草庵、印度教石刻并存",
   "time": {
    "era_text": "宋元",
    "start": "960"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "伊斯兰教清净寺、摩尼教草庵、印度教石刻并存",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "伊斯兰教清净寺、摩尼教草庵、印度教石刻并存",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_005",
   "subject": "person:FUJ__p01",
   "predicate": "评价",
   "value_text": "称刺桐为世界最大港口之一",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "citong",
   "source": "quanzhou_llm_src",
   "quote": "马可·波罗称刺桐为世界最大港口之一",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "[alias] person:马可·波罗 → FUJ__p01 (name_match)",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "马可·波罗称刺桐为世界最大港口之一",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_006",
   "subject": "event:ev_fujian_quanzhou_llm_03",
   "predicate": "海禁影响",
   "value_text": "市舶渐罢，港埠衰落",
   "time": {
    "era_text": "明初",
    "start": "1368"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "明初海禁，市舶渐罢，港埠衰落",
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
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明初海禁，市舶渐罢，港埠衰落",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_007",
   "subject": "place:quanzhou",
   "predicate": "贸易重心转移",
   "value_text": "贸易重心北移",
   "time": {
    "era_text": "明初",
    "start": "1368"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "贸易重心北移",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贸易重心北移",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_008",
   "subject": "place:quanzhou",
   "predicate": "海交史迹",
   "value_text": "留下丰富海交史迹",
   "time": {
    "era_text": "宋元",
    "start": "960"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "泉州留下丰富的海交史迹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "泉州留下丰富的海交史迹",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_009",
   "subject": "place:quanzhou",
   "predicate": "港口规模",
   "value_text": "涨海声中万国商",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "涨海声中万国商",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "涨海声中万国商",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_010",
   "subject": "place:quanzhou",
   "predicate": "港口地位",
   "value_text": "马可·波罗称世界最大港口之一",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "citong",
   "source": "quanzhou_llm_src",
   "quote": "马可·波罗称刺桐为世界最大港口之一",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "学者对马可·波罗记载真实性有争议",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "马可·波罗称刺桐为世界最大港口之一",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_011",
   "subject": "place:quanzhou",
   "predicate": "贸易范围",
   "value_text": "与亚非百余国通贸",
   "time": {
    "era_text": "元代",
    "start": "1271"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "与亚非百余国通贸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与亚非百余国通贸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_012",
   "subject": "place:quanzhou",
   "predicate": "宗教并存",
   "value_text": "多元宗教辉映",
   "time": {
    "era_text": "宋元",
    "start": "960"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "多元宗教辉映",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "多元宗教辉映",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_013",
   "subject": "place:quanzhou",
   "predicate": "港口衰落",
   "value_text": "明初海禁致港埠衰落",
   "time": {
    "era_text": "明初",
    "start": "1368"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "明初海禁，市舶渐罢，港埠衰落",
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
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明初海禁，市舶渐罢，港埠衰落",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_014",
   "subject": "place:quanzhou",
   "predicate": "贸易重心",
   "value_text": "重心北移具体港口未明",
   "time": {
    "era_text": "明初",
    "start": "1368"
   },
   "place": "quanzhou",
   "source": "quanzhou_llm_src",
   "quote": "贸易重心北移",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "未指明北移何处",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "泉州港衰落后的贸易重心",
    "skills": [
     "历史地理",
     "经济史"
    ],
    "accept": "需进一步考证北移港口"
   },
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贸易重心北移",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:place:quanzhou|港口地位",
   "subject": "place:quanzhou",
   "predicate": "港口地位",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "FUJ_003",
    "FUJ_010"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "FUJ_014"
 ],
 "events": [
  {
   "id": "ev_fujian_quanzhou_llm_01",
   "subject": "event:ev_fujian_quanzhou_llm_01",
   "year": 1087,
   "era": "北宋元祐二年",
   "title": "泉州设市舶司",
   "kind": "建置",
   "text": "北宋设市舶司管理海外贸易",
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_fujian_quanzhou_llm_03",
   "subject": "event:ev_fujian_quanzhou_llm_03",
   "year": 1368,
   "era": "明洪武元年",
   "title": "明初海禁",
   "kind": "行政",
   "text": "海禁致市舶渐罢，港埠衰落",
   "_source_idx": 0,
   "_source_name": "泉州港海上丝路史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "quanzhou",
   "party": "后世官修",
   "start": 1087,
   "end": 1368,
   "basis": "auto: 场景主地点 quanzhou 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "quanzhou",
   "name": "泉州",
   "lon": 118.58,
   "lat": 24.91,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1087,
  1368
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
       118.339,
       24.469
      ],
      [
       118.287,
       24.477
      ],
      [
       118.295,
       24.436
      ],
      [
       118.433,
       24.414
      ],
      [
       118.451,
       24.456
      ],
      [
       118.407,
       24.522
      ],
      [
       118.339,
       24.469
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
       118.077,
       24.501
      ],
      [
       118.089,
       24.489
      ],
      [
       118.091,
       24.446
      ],
      [
       118.15,
       24.436
      ],
      [
       118.183,
       24.496
      ],
      [
       118.171,
       24.519
      ],
      [
       118.104,
       24.552
      ],
      [
       118.093,
       24.541
      ],
      [
       118.077,
       24.501
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
        117.657,
        23.91
       ],
       [
        117.668,
        23.939
       ],
       [
        117.742,
        24.015
       ],
       [
        117.839,
        24.012
       ],
       [
        117.904,
        24.106
       ],
       [
        118.056,
        24.246
       ],
       [
        118.051,
        24.327
       ],
       [
        118.024,
        24.38
       ],
       [
        117.879,
        24.396
       ],
       [
        117.848,
        24.432
       ],
       [
        117.843,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.935,
        24.474
       ],
       [
        118.006,
        24.482
       ],
       [
        118.014,
        24.56
       ],
       [
        118.087,
        24.627
       ],
       [
        118.195,
        24.626
       ],
       [
        118.295,
        24.573
       ],
       [
        118.412,
        24.601
       ],
       [
        118.56,
        24.58
       ],
       [
        118.657,
        24.621
       ],
       [
        118.719,
        24.746
       ],
       [
        118.692,
        24.782
       ],
       [
        118.64,
        24.809
       ],
       [
        118.637,
        24.836
       ],
       [
        118.708,
        24.85
       ],
       [
        118.822,
        24.911
       ],
       [
        118.909,
        24.929
       ],
       [
        118.956,
        25.005
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.236,
        25.206
       ],
       [
        119.286,
        25.232
       ],
       [
        119.244,
        25.307
       ],
       [
        119.169,
        25.356
       ],
       [
        119.146,
        25.414
       ],
       [
        119.18,
        25.45
       ],
       [
        119.263,
        25.468
       ],
       [
        119.344,
        25.446
       ],
       [
        119.422,
        25.46
       ],
       [
        119.499,
        25.409
       ],
       [
        119.58,
        25.374
       ],
       [
        119.58,
        25.513
       ],
       [
        119.539,
        25.591
       ],
       [
        119.553,
        25.699
       ],
       [
        119.58,
        25.751
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
        118.407,
        24.522
       ],
       [
        118.451,
        24.456
       ],
       [
        118.433,
        24.414
       ],
       [
        118.295,
        24.436
       ],
       [
        118.287,
        24.477
       ],
       [
        118.339,
        24.469
       ],
       [
        118.407,
        24.522
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
        118.183,
        24.496
       ],
       [
        118.15,
        24.436
       ],
       [
        118.091,
        24.446
       ],
       [
        118.089,
        24.489
       ],
       [
        118.077,
        24.501
       ],
       [
        118.093,
        24.541
       ],
       [
        118.104,
        24.552
       ],
       [
        118.171,
        24.519
       ],
       [
        118.183,
        24.496
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
        117.58,
        23.91
       ],
       [
        117.58,
        25.91
       ],
       [
        119.58,
        25.91
       ],
       [
        119.58,
        25.751
       ],
       [
        119.553,
        25.699
       ],
       [
        119.539,
        25.591
       ],
       [
        119.58,
        25.513
       ],
       [
        119.58,
        25.374
       ],
       [
        119.499,
        25.409
       ],
       [
        119.422,
        25.46
       ],
       [
        119.344,
        25.446
       ],
       [
        119.263,
        25.468
       ],
       [
        119.18,
        25.45
       ],
       [
        119.146,
        25.414
       ],
       [
        119.169,
        25.356
       ],
       [
        119.244,
        25.307
       ],
       [
        119.286,
        25.232
       ],
       [
        119.236,
        25.206
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.956,
        25.005
       ],
       [
        118.909,
        24.929
       ],
       [
        118.822,
        24.911
       ],
       [
        118.708,
        24.85
       ],
       [
        118.637,
        24.836
       ],
       [
        118.64,
        24.809
       ],
       [
        118.692,
        24.782
       ],
       [
        118.719,
        24.746
       ],
       [
        118.657,
        24.621
       ],
       [
        118.56,
        24.58
       ],
       [
        118.412,
        24.601
       ],
       [
        118.295,
        24.573
       ],
       [
        118.195,
        24.626
       ],
       [
        118.087,
        24.627
       ],
       [
        118.014,
        24.56
       ],
       [
        118.006,
        24.482
       ],
       [
        117.935,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.843,
        24.474
       ],
       [
        117.848,
        24.432
       ],
       [
        117.879,
        24.396
       ],
       [
        118.024,
        24.38
       ],
       [
        118.051,
        24.327
       ],
       [
        118.056,
        24.246
       ],
       [
        117.904,
        24.106
       ],
       [
        117.839,
        24.012
       ],
       [
        117.742,
        24.015
       ],
       [
        117.668,
        23.939
       ],
       [
        117.657,
        23.91
       ],
       [
        117.58,
        23.91
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
         119.005,
         24.97
        ],
        [
         118.989,
         24.974
        ],
        [
         119.024,
         25.044
        ],
        [
         119.017,
         25.058
        ],
        [
         118.975,
         25.025
        ],
        [
         118.945,
         25.029
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.134,
         25.106
        ],
        [
         119.107,
         25.075
        ],
        [
         119.119,
         25.013
        ],
        [
         119.147,
         25.057
        ],
        [
         119.166,
         25.146
        ],
        [
         119.137,
         25.155
        ],
        [
         119.108,
         25.194
        ],
        [
         119.132,
         25.223
        ],
        [
         119.19,
         25.176
        ],
        [
         119.232,
         25.189
        ],
        [
         119.269,
         25.16
        ],
        [
         119.315,
         25.19
        ],
        [
         119.295,
         25.237
        ],
        [
         119.332,
         25.231
        ],
        [
         119.381,
         25.25
        ],
        [
         119.333,
         25.288
        ],
        [
         119.299,
         25.329
        ],
        [
         119.248,
         25.334
        ],
        [
         119.241,
         25.317
        ],
        [
         119.219,
         25.368
        ],
        [
         119.145,
         25.388
        ],
        [
         119.151,
         25.427
        ],
        [
         119.192,
         25.424
        ],
        [
         119.232,
         25.442
        ],
        [
         119.22,
         25.469
        ],
        [
         119.256,
         25.489
        ],
        [
         119.275,
         25.477
        ],
        [
         119.263,
         25.428
        ],
        [
         119.288,
         25.411
        ],
        [
         119.353,
         25.412
        ],
        [
         119.344,
         25.472
        ],
        [
         119.359,
         25.522
        ],
        [
         119.401,
         25.494
        ],
        [
         119.453,
         25.494
        ],
        [
         119.438,
         25.412
        ],
        [
         119.463,
         25.449
        ],
        [
         119.491,
         25.443
        ],
        [
         119.486,
         25.419
        ],
        [
         119.507,
         25.396
        ],
        [
         119.487,
         25.37
        ],
        [
         119.549,
         25.366
        ],
        [
         119.579,
         25.401
        ],
        [
         119.556,
         25.429
        ],
        [
         119.578,
         25.446
        ],
        [
         119.58,
         25.437
        ],
        [
         119.58,
         25.591
        ],
        [
         119.535,
         25.585
        ],
        [
         119.541,
         25.625
        ],
        [
         119.479,
         25.632
        ],
        [
         119.473,
         25.662
        ],
        [
         119.544,
         25.685
        ],
        [
         119.58,
         25.685
        ],
        [
         119.58,
         25.91
        ],
        [
         117.58,
         25.91
        ],
        [
         117.58,
         23.91
        ],
        [
         117.794,
         23.91
        ],
        [
         117.807,
         23.948
        ],
        [
         117.865,
         24.005
        ],
        [
         117.91,
         24.012
        ],
        [
         117.928,
         24.04
        ],
        [
         117.936,
         24.1
        ],
        [
         118.0,
         24.152
        ],
        [
         118.019,
         24.197
        ],
        [
         118.075,
         24.226
        ],
        [
         118.115,
         24.229
        ],
        [
         118.159,
         24.27
        ],
        [
         118.112,
         24.357
        ],
        [
         118.082,
         24.357
        ],
        [
         118.088,
         24.409
        ],
        [
         118.049,
         24.418
        ],
        [
         118.084,
         24.529
        ],
        [
         118.122,
         24.57
        ],
        [
         118.151,
         24.584
        ],
        [
         118.169,
         24.56
        ],
        [
         118.243,
         24.512
        ],
        [
         118.375,
         24.536
        ],
        [
         118.364,
         24.568
        ],
        [
         118.444,
         24.615
        ],
        [
         118.513,
         24.608
        ],
        [
         118.557,
         24.573
        ],
        [
         118.558,
         24.512
        ],
        [
         118.614,
         24.522
        ],
        [
         118.68,
         24.582
        ],
        [
         118.687,
         24.634
        ],
        [
         118.661,
         24.622
        ],
        [
         118.653,
         24.654
        ],
        [
         118.67,
         24.68
        ],
        [
         118.704,
         24.665
        ],
        [
         118.779,
         24.744
        ],
        [
         118.786,
         24.777
        ],
        [
         118.651,
         24.809
        ],
        [
         118.648,
         24.844
        ],
        [
         118.702,
         24.865
        ],
        [
         118.699,
         24.849
        ],
        [
         118.749,
         24.842
        ],
        [
         118.808,
         24.871
        ],
        [
         118.834,
         24.854
        ],
        [
         118.864,
         24.888
        ],
        [
         118.933,
         24.871
        ],
        [
         118.989,
         24.879
        ],
        [
         118.987,
         24.898
        ],
        [
         118.933,
         24.907
        ],
        [
         118.919,
         24.933
        ],
        [
         118.946,
         24.954
        ],
        [
         119.014,
         24.941
        ],
        [
         119.033,
         24.961
        ],
        [
         119.033,
         24.962
        ],
        [
         119.007,
         24.963
        ],
        [
         119.005,
         24.97
        ]
       ]
      ],
      [
       [
        [
         118.412,
         24.515
        ],
        [
         118.375,
         24.459
        ],
        [
         118.319,
         24.487
        ],
        [
         118.298,
         24.478
        ],
        [
         118.312,
         24.425
        ],
        [
         118.282,
         24.413
        ],
        [
         118.33,
         24.382
        ],
        [
         118.353,
         24.415
        ],
        [
         118.406,
         24.428
        ],
        [
         118.458,
         24.412
        ],
        [
         118.477,
         24.438
        ],
        [
         118.452,
         24.507
        ],
        [
         118.412,
         24.515
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.507,
         25.183
        ],
        [
         119.525,
         25.158
        ],
        [
         119.549,
         25.162
        ],
        [
         119.567,
         25.21
        ],
        [
         119.541,
         25.202
        ],
        [
         119.501,
         25.217
        ],
        [
         119.474,
         25.26
        ],
        [
         119.443,
         25.239
        ],
        [
         119.444,
         25.202
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         118.231,
         24.401
        ],
        [
         118.274,
         24.441
        ],
        [
         118.234,
         24.446
        ],
        [
         118.231,
         24.401
        ]
       ]
      ],
      [
       [
        [
         118.204,
         24.505
        ],
        [
         118.192,
         24.537
        ],
        [
         118.145,
         24.561
        ],
        [
         118.093,
         24.541
        ],
        [
         118.069,
         24.463
        ],
        [
         118.084,
         24.436
        ],
        [
         118.143,
         24.421
        ],
        [
         118.194,
         24.463
        ],
        [
         118.204,
         24.505
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   117.58,
   23.91,
   119.58,
   25.91
  ]
 }
};
