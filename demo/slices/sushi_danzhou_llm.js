// 本文件由 tools/build.py 自动生成（切片 sushi_danzhou_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sushi_danzhou_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sushi_danzhou_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "song",
  "province": "hainan",
  "title": "宋·苏东坡贬儋州",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "danzhou",
  "dossier_event": "event:ev_sushi_danzhou_llm_01",
  "vocab_pack": "inline:sushi_danzhou_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "song",
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
    "note": "宋·苏东坡贬儋州：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·苏东坡贬儋州：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·苏东坡贬儋州：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·苏东坡贬儋州：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=sushi_danzhou_llm",
  "key": "sushi_danzhou_llm",
  "scene_id": "sushi_danzhou_llm"
 },
 "sources": [
  {
   "id": "sushi_danzhou_src",
   "title": "东坡先生年谱（贬儋）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "本地修",
   "period": "近世",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "danzhou",
   "name": "儋州",
   "type": "city",
   "modern": "今海南省儋州市",
   "note": "苏轼贬所",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.58,
   "lat": 19.52,
   "geo_note": "今海南儋州市",
   "elev": 163
  },
  {
   "id": "zaijiutang",
   "name": "载酒堂",
   "type": "yi",
   "modern": "今海南省儋州市中和镇",
   "note": "苏轼讲学处",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.55,
   "lat": 19.5,
   "geo_note": "今海南儋州中和镇（苏轼载酒堂）",
   "elev": 191
  },
  {
   "id": "danser",
   "name": "儋耳",
   "type": "region",
   "modern": "今海南省儋州市",
   "note": "儋州古称",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 109.58,
   "lat": 19.52,
   "geo_note": "今海南儋州（古儋耳）",
   "elev": 163
  }
 ],
 "persons": [
  {
   "id": "SUS__p01",
   "name": "苏轼",
   "role": "琼州别驾、昌化军安置",
   "note": "北宋文学家，贬儋州兴文教",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 6
  }
 ],
 "assertions": [
  {
   "id": "SUS_001",
   "subject": "person:SUS__p01",
   "predicate": "贬谪",
   "value_text": "责授琼州别驾，安置昌化军",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "绍圣四年，苏轼责授琼州别驾、昌化军安置",
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
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绍圣四年，苏轼责授琼州别驾、昌化军安置",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_002",
   "subject": "event:ev_sushi_danzhou_llm_02",
   "predicate": "讲学",
   "value_text": "筑室载酒堂，日与诸生讲学",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "zaijiutang",
   "source": "sushi_danzhou_src",
   "quote": "筑室载酒堂，日与黎汉诸生讲学",
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
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "筑室载酒堂，日与黎汉诸生讲学",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_003",
   "subject": "person:SUS__p01",
   "predicate": "著作",
   "value_text": "作《书传》《易传》",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "作《书传》《易传》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "作《书传》《易传》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_004",
   "subject": "person:SUS__p01",
   "predicate": "教化",
   "value_text": "勉农劝学，文教渐兴",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "勉农劝学，文教渐兴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "勉农劝学，文教渐兴",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_005",
   "subject": "person:SUS__p01",
   "predicate": "赦还",
   "value_text": "元符三年赦还",
   "time": {
    "era_text": "元符三年",
    "start": "1100-01-01",
    "end": "1100-12-31",
    "gregorian_year": 1100
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "元符三年赦还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元符三年赦还",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_006",
   "subject": "event:ev_sushi_danzhou_llm_03",
   "predicate": "立祠",
   "value_text": "士人立祠祀之",
   "time": {
    "era_text": "元符三年",
    "start": "1100-01-01",
    "end": "1100-12-31",
    "gregorian_year": 1100
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "士人立祠祀之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "士人立祠祀之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_007",
   "subject": "person:SUS__p01",
   "predicate": "影响",
   "value_text": "海南衣冠文物之盛自苏公启",
   "time": {
    "era_text": "元符三年",
    "start": "1100-01-01",
    "end": "1100-12-31",
    "gregorian_year": 1100
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "海南衣冠文物之盛实自苏公启",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "海南衣冠文物之盛实自苏公启",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_008",
   "subject": "person:SUS__p01",
   "predicate": "生活",
   "value_text": "黎人馈芋，邻翁送酒",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "黎人馈芋、邻翁送酒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "黎人馈芋、邻翁送酒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_009",
   "subject": "place:danzhou",
   "predicate": "荒僻",
   "value_text": "儋耳虽荒",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "儋耳虽荒",
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
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "儋耳虽荒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_010",
   "subject": "person:SUS__p01",
   "predicate": "身份",
   "value_text": "琼州别驾、昌化军安置",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "责授琼州别驾、昌化军安置",
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
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "责授琼州别驾、昌化军安置",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_011",
   "subject": "event:ev_sushi_danzhou_llm_02",
   "predicate": "讲学对象",
   "value_text": "黎汉诸生",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "zaijiutang",
   "source": "sushi_danzhou_src",
   "quote": "日与黎汉诸生讲学",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "日与黎汉诸生讲学",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_012",
   "subject": "event:ev_sushi_danzhou_llm_01",
   "predicate": "贬谪原因",
   "value_text": "史料未明",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "史料未明",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "danzhou",
    "skills": [
     "历史考据"
    ],
    "accept": "需查宋史本传"
   },
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史料未明",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SUS_013",
   "subject": "event:ev_sushi_danzhou_llm_02",
   "predicate": "讲学成效",
   "value_text": "文教渐兴",
   "time": {
    "era_text": "绍圣四年",
    "start": "1097-01-01",
    "end": "1097-12-31",
    "gregorian_year": 1097
   },
   "place": "danzhou",
   "source": "sushi_danzhou_src",
   "quote": "文教渐兴",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后世评价",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文教渐兴",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SUS_012"
 ],
 "events": [
  {
   "id": "ev_sushi_danzhou_llm_01",
   "subject": "event:ev_sushi_danzhou_llm_01",
   "year": 1097,
   "era": "绍圣四年",
   "title": "苏轼贬儋州",
   "kind": "行政",
   "text": "苏轼责授琼州别驾，安置昌化军",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sushi_danzhou_llm_02",
   "subject": "event:ev_sushi_danzhou_llm_02",
   "year": 1097,
   "era": "绍圣四年",
   "title": "载酒堂讲学",
   "kind": "其他",
   "text": "筑室载酒堂，日与黎汉诸生讲学",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sushi_danzhou_llm_03",
   "subject": "event:ev_sushi_danzhou_llm_03",
   "year": 1100,
   "era": "元符三年",
   "title": "苏轼赦还",
   "kind": "行政",
   "text": "元符三年赦还，士人立祠祀之",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "danzhou",
   "to": "zaijiutang",
   "type": "military",
   "label": "苏轼筑室讲学",
   "_source_idx": 0,
   "_source_name": "东坡先生年谱（贬儋）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "danzhou",
   "party": "后世官修",
   "start": 1097,
   "end": 1100,
   "timeline": "main"
  },
  {
   "place_id": "zaijiutang",
   "party": "后世官修",
   "start": 1097,
   "end": 1100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "danzhou",
   "name": "儋州",
   "lon": 109.58,
   "lat": 19.52,
   "region": "song"
  },
  {
   "place_id": "zaijiutang",
   "name": "载酒堂",
   "lon": 109.55,
   "lat": 19.5,
   "region": "song"
  }
 ],
 "control_years": [
  1097,
  1100
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
       110.58,
       19.98
      ],
      [
       110.418,
       20.055
      ],
      [
       110.394,
       20.059
      ],
      [
       110.388,
       20.018
      ],
      [
       110.392,
       19.976
      ],
      [
       110.344,
       20.039
      ],
      [
       110.213,
       20.056
      ],
      [
       110.172,
       20.054
      ],
      [
       110.083,
       19.993
      ],
      [
       109.906,
       19.963
      ],
      [
       109.651,
       19.984
      ],
      [
       109.584,
       19.97
      ],
      [
       109.514,
       19.904
      ],
      [
       109.418,
       19.889
      ],
      [
       109.315,
       19.904
      ],
      [
       109.263,
       19.883
      ],
      [
       109.219,
       19.843
      ],
      [
       109.177,
       19.768
      ],
      [
       109.22,
       19.757
      ],
      [
       109.277,
       19.761
      ],
      [
       109.179,
       19.674
      ],
      [
       109.063,
       19.614
      ],
      [
       108.903,
       19.481
      ],
      [
       108.791,
       19.418
      ],
      [
       108.694,
       19.338
      ],
      [
       108.666,
       19.304
      ],
      [
       108.65,
       19.265
      ],
      [
       108.636,
       18.908
      ],
      [
       108.638,
       18.866
      ],
      [
       108.676,
       18.75
      ],
      [
       108.702,
       18.535
      ],
      [
       108.767,
       18.5
      ],
      [
       110.052,
       18.5
      ],
      [
       110.049,
       18.505
      ],
      [
       110.156,
       18.57
      ],
      [
       110.252,
       18.656
      ],
      [
       110.291,
       18.67
      ],
      [
       110.334,
       18.673
      ],
      [
       110.4,
       18.698
      ],
      [
       110.451,
       18.748
      ],
      [
       110.478,
       18.813
      ],
      [
       110.519,
       18.97
      ],
      [
       110.566,
       19.099
      ],
      [
       110.562,
       19.135
      ],
      [
       110.572,
       19.172
      ],
      [
       110.58,
       19.181
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
        109.857,
        20.52
       ],
       [
        109.861,
        20.514
       ],
       [
        109.946,
        20.474
       ],
       [
        109.968,
        20.448
       ],
       [
        109.984,
        20.403
       ],
       [
        109.932,
        20.399
       ],
       [
        109.886,
        20.413
       ],
       [
        109.883,
        20.364
       ],
       [
        109.938,
        20.295
       ],
       [
        110.123,
        20.264
       ],
       [
        110.345,
        20.295
       ],
       [
        110.45,
        20.355
       ],
       [
        110.487,
        20.427
       ],
       [
        110.518,
        20.46
       ],
       [
        110.512,
        20.518
       ],
       [
        110.509,
        20.52
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
        110.58,
        19.181
       ],
       [
        110.572,
        19.172
       ],
       [
        110.562,
        19.135
       ],
       [
        110.566,
        19.099
       ],
       [
        110.519,
        18.97
       ],
       [
        110.478,
        18.813
       ],
       [
        110.451,
        18.748
       ],
       [
        110.4,
        18.698
       ],
       [
        110.334,
        18.673
       ],
       [
        110.291,
        18.67
       ],
       [
        110.252,
        18.656
       ],
       [
        110.156,
        18.57
       ],
       [
        110.049,
        18.505
       ],
       [
        110.052,
        18.5
       ],
       [
        108.767,
        18.5
       ],
       [
        108.702,
        18.535
       ],
       [
        108.676,
        18.75
       ],
       [
        108.638,
        18.866
       ],
       [
        108.636,
        18.908
       ],
       [
        108.65,
        19.265
       ],
       [
        108.666,
        19.304
       ],
       [
        108.694,
        19.338
       ],
       [
        108.791,
        19.418
       ],
       [
        108.903,
        19.481
       ],
       [
        109.063,
        19.614
       ],
       [
        109.179,
        19.674
       ],
       [
        109.277,
        19.761
       ],
       [
        109.22,
        19.757
       ],
       [
        109.177,
        19.768
       ],
       [
        109.219,
        19.843
       ],
       [
        109.263,
        19.883
       ],
       [
        109.315,
        19.904
       ],
       [
        109.418,
        19.889
       ],
       [
        109.514,
        19.904
       ],
       [
        109.584,
        19.97
       ],
       [
        109.651,
        19.984
       ],
       [
        109.906,
        19.963
       ],
       [
        110.083,
        19.993
       ],
       [
        110.172,
        20.054
       ],
       [
        110.213,
        20.056
       ],
       [
        110.344,
        20.039
       ],
       [
        110.392,
        19.976
       ],
       [
        110.388,
        20.018
       ],
       [
        110.394,
        20.059
       ],
       [
        110.418,
        20.055
       ],
       [
        110.58,
        19.98
       ],
       [
        110.58,
        19.181
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
        108.55,
        18.5
       ],
       [
        108.55,
        20.52
       ],
       [
        110.509,
        20.52
       ],
       [
        110.512,
        20.518
       ],
       [
        110.518,
        20.46
       ],
       [
        110.487,
        20.427
       ],
       [
        110.45,
        20.355
       ],
       [
        110.345,
        20.295
       ],
       [
        110.123,
        20.264
       ],
       [
        109.938,
        20.295
       ],
       [
        109.883,
        20.364
       ],
       [
        109.886,
        20.413
       ],
       [
        109.932,
        20.399
       ],
       [
        109.984,
        20.403
       ],
       [
        109.968,
        20.448
       ],
       [
        109.946,
        20.474
       ],
       [
        109.861,
        20.514
       ],
       [
        109.857,
        20.52
       ],
       [
        108.55,
        20.52
       ],
       [
        108.55,
        18.5
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
         109.823,
         20.52
        ],
        [
         109.84,
         20.489
        ],
        [
         109.888,
         20.475
        ],
        [
         109.896,
         20.428
        ],
        [
         109.865,
         20.402
        ],
        [
         109.861,
         20.377
        ],
        [
         109.916,
         20.317
        ],
        [
         109.909,
         20.237
        ],
        [
         109.929,
         20.212
        ],
        [
         109.994,
         20.254
        ],
        [
         110.082,
         20.259
        ],
        [
         110.118,
         20.22
        ],
        [
         110.169,
         20.22
        ],
        [
         110.22,
         20.252
        ],
        [
         110.297,
         20.249
        ],
        [
         110.349,
         20.259
        ],
        [
         110.384,
         20.293
        ],
        [
         110.425,
         20.291
        ],
        [
         110.453,
         20.311
        ],
        [
         110.491,
         20.374
        ],
        [
         110.541,
         20.42
        ],
        [
         110.55,
         20.473
        ],
        [
         110.527,
         20.52
        ],
        [
         109.823,
         20.52
        ]
       ]
      ],
      [
       [
        [
         110.557,
         20.327
        ],
        [
         110.58,
         20.348
        ],
        [
         110.58,
         20.37
        ],
        [
         110.557,
         20.327
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
         110.106,
         20.027
        ],
        [
         110.042,
         19.991
        ],
        [
         109.997,
         19.98
        ],
        [
         109.965,
         19.994
        ],
        [
         109.899,
         19.994
        ],
        [
         109.855,
         19.984
        ],
        [
         109.814,
         19.993
        ],
        [
         109.761,
         19.981
        ],
        [
         109.712,
         20.017
        ],
        [
         109.658,
         20.012
        ],
        [
         109.585,
         19.988
        ],
        [
         109.527,
         19.944
        ],
        [
         109.498,
         19.873
        ],
        [
         109.411,
         19.895
        ],
        [
         109.349,
         19.899
        ],
        [
         109.301,
         19.918
        ],
        [
         109.259,
         19.899
        ],
        [
         109.256,
         19.867
        ],
        [
         109.231,
         19.863
        ],
        [
         109.159,
         19.79
        ],
        [
         109.17,
         19.736
        ],
        [
         109.147,
         19.705
        ],
        [
         109.094,
         19.69
        ],
        [
         109.049,
         19.62
        ],
        [
         108.993,
         19.587
        ],
        [
         108.929,
         19.524
        ],
        [
         108.855,
         19.469
        ],
        [
         108.806,
         19.451
        ],
        [
         108.765,
         19.401
        ],
        [
         108.694,
         19.387
        ],
        [
         108.645,
         19.35
        ],
        [
         108.609,
         19.277
        ],
        [
         108.591,
         19.142
        ],
        [
         108.599,
         19.056
        ],
        [
         108.631,
         19.003
        ],
        [
         108.638,
         18.924
        ],
        [
         108.595,
         18.872
        ],
        [
         108.593,
         18.809
        ],
        [
         108.653,
         18.74
        ],
        [
         108.664,
         18.673
        ],
        [
         108.641,
         18.566
        ],
        [
         108.644,
         18.5
        ],
        [
         110.115,
         18.5
        ],
        [
         110.117,
         18.507
        ],
        [
         110.214,
         18.579
        ],
        [
         110.246,
         18.61
        ],
        [
         110.329,
         18.642
        ],
        [
         110.368,
         18.632
        ],
        [
         110.499,
         18.652
        ],
        [
         110.499,
         18.752
        ],
        [
         110.578,
         18.784
        ],
        [
         110.58,
         18.792
        ],
        [
         110.58,
         20.115
        ],
        [
         110.562,
         20.11
        ],
        [
         110.526,
         20.075
        ],
        [
         110.495,
         20.077
        ],
        [
         110.387,
         20.113
        ],
        [
         110.318,
         20.109
        ],
        [
         110.289,
         20.056
        ],
        [
         110.243,
         20.077
        ],
        [
         110.145,
         20.075
        ],
        [
         110.106,
         20.027
        ]
       ]
      ]
     ]
    },
    "n": "海南省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   108.55,
   18.5,
   110.58,
   20.52
  ]
 }
};
