// 本文件由 tools/build.py 自动生成（切片 jiangxi_ruijin_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangxi_ruijin_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangxi_ruijin_llm"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "province": "jiangxi",
  "title": "中央苏区与中华苏维埃共和国",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "ruijin",
  "dossier_event": "event:ev_jiangxi_ruijin_llm_01",
  "vocab_pack": "jiangxi_ruijin_llm",
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
    "note": "中央苏区与中华苏维埃共和国：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中央苏区与中华苏维埃共和国：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中央苏区与中华苏维埃共和国：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中央苏区与中华苏维埃共和国：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=jiangxi_ruijin_llm",
  "key": "jiangxi_ruijin_llm",
  "scene_id": "jiangxi_ruijin_llm"
 },
 "sources": [
  {
   "id": "jiangxi_ruijin_src_llm",
   "title": "中央苏区史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "ruijin",
   "name": "瑞金",
   "type": "city",
   "modern": "今中国江西省瑞金市",
   "note": "中华苏维埃共和国首都。坐标据地名志条目：瑞金，标 approx。",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.02,
   "lat": 25.88,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：瑞金（诚实回填 v0.221）。",
   "elev": 257
  },
  {
   "id": "jiangxi",
   "name": "江西",
   "type": "region",
   "modern": "今中国江西省",
   "note": "中央苏区主要省份",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "fujian",
   "name": "福建",
   "type": "region",
   "modern": "今中国福建省",
   "note": "中央苏区辖县省份",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
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
   "name": "毛泽东",
   "role": "中华苏维埃共和国临时中央政府主席",
   "note": "中央苏区主要领导人",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "event:ev_jiangxi_ruijin_llm_01",
   "predicate": "成立时间",
   "value_text": "1931年11月召开",
   "time": {
    "era_text": "1931年11月",
    "start": "1931-11"
   },
   "place": "ruijin",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "1931年11月，中华苏维埃第一次全国代表大会在江西瑞金召开",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1931年11月，中华苏维埃第一次全国代表大会在江西瑞金召开",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "person:JIA__p01",
   "predicate": "职务任命",
   "value_text": "任临时中央政府主席",
   "time": {
    "era_text": "1931年11月",
    "start": "1931-11"
   },
   "place": "ruijin",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "毛泽东任主席",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "毛泽东任主席",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "place:ruijin",
   "predicate": "首都地位",
   "value_text": "定都瑞金，称瑞京",
   "time": {
    "era_text": "1931年11月",
    "start": "1931-11"
   },
   "place": "ruijin",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "定都瑞金（称瑞京）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "定都瑞金（称瑞京）",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "place:jiangxi",
   "predicate": "辖区范围",
   "value_text": "至1933年辖赣闽等二十一县",
   "time": {
    "era_text": "1933年",
    "start": "1933-01-01",
    "end": "1933-12-31",
    "gregorian_year": 1933
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "中央苏区辖赣闽等二十一县",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中央苏区辖赣闽等二十一县",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "place:jiangxi",
   "predicate": "人口数量",
   "value_text": "人口约二百四十万",
   "time": {
    "era_text": "1933年",
    "start": "1933-01-01",
    "end": "1933-12-31",
    "gregorian_year": 1933
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "人口约二百四十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "人口约二百四十万",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "place:jiangxi",
   "predicate": "政策实施",
   "value_text": "开展土地革命、经济建设和民主建政",
   "time": {
    "era_text": "1931-1933年",
    "start": "1931"
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "开展土地革命、经济建设和民主建政",
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
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开展土地革命、经济建设和民主建政",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "event:ev_jiangxi_ruijin_llm_02",
   "predicate": "失败原因",
   "value_text": "第五次反围剿失利",
   "time": {
    "era_text": "1934年",
    "start": "1934-01-01",
    "end": "1934-12-31",
    "gregorian_year": 1934
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "因第五次反「围剿」失利",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "因第五次反「围剿」失利",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "event:ev_jiangxi_ruijin_llm_02",
   "predicate": "行动结果",
   "value_text": "主力红军开始长征",
   "time": {
    "era_text": "1934年",
    "start": "1934-01-01",
    "end": "1934-12-31",
    "gregorian_year": 1934
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "主力红军开始长征",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "主力红军开始长征",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "place:jiangxi",
   "predicate": "后续斗争",
   "value_text": "留下苏区游击斗争",
   "time": {
    "era_text": "1934年",
    "start": "1934-01-01",
    "end": "1934-12-31",
    "gregorian_year": 1934
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "留下苏区游击斗争",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "留下苏区游击斗争",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "event:ev_jiangxi_ruijin_llm_01",
   "predicate": "政权性质",
   "value_text": "成立中华苏维埃共和国临时中央政府",
   "time": {
    "era_text": "1931年11月",
    "start": "1931-11"
   },
   "place": "ruijin",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "宣布成立中华苏维埃共和国临时中央政府",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宣布成立中华苏维埃共和国临时中央政府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "event:ev_jiangxi_ruijin_llm_01",
   "predicate": "历史意义",
   "value_text": "中共建立全国性政权的重要尝试",
   "time": {
    "era_text": "1931年11月",
    "start": "1931-11"
   },
   "place": "ruijin",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "中华苏维埃共和国成立",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学术观点",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中华苏维埃共和国成立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "event:ev_jiangxi_ruijin_llm_02",
   "predicate": "战略转移",
   "value_text": "长征具体路线和目的地未详述",
   "time": {
    "era_text": "1934年",
    "start": "1934-01-01",
    "end": "1934-12-31",
    "gregorian_year": 1934
   },
   "place": "jiangxi",
   "source": "jiangxi_ruijin_src_llm",
   "quote": "主力红军开始长征",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未提及具体路线",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "江西至陕北",
    "skills": [
     "历史地理",
     "军事史"
    ],
    "accept": "补充长征具体路线"
   },
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "主力红军开始长征",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_012"
 ],
 "events": [
  {
   "id": "ev_jiangxi_ruijin_llm_01",
   "subject": "event:ev_jiangxi_ruijin_llm_01",
   "year": 1931,
   "era": "1931年11月",
   "title": "中华苏维埃一大召开",
   "kind": "建置",
   "text": "在瑞金召开，成立临时中央政府",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_ruijin_llm_02",
   "subject": "event:ev_jiangxi_ruijin_llm_02",
   "year": 1934,
   "era": "1934年",
   "title": "红军长征开始",
   "kind": "战事",
   "text": "第五次反围剿失利，主力转移",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jiangxi",
   "to": "ruijin",
   "type": "military",
   "label": "红军长征出发",
   "_source_idx": 0,
   "_source_name": "中央苏区史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "ruijin",
   "party": "后世官修",
   "start": 1931,
   "end": 1934,
   "basis": "auto: 场景主地点 ruijin 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "ruijin",
   "name": "瑞金",
   "lon": 116.02,
   "lat": 25.88,
   "region": "court"
  }
 ],
 "control_years": [
  1931,
  1934
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
        115.02,
        24.88
       ],
       [
        115.02,
        26.88
       ],
       [
        117.02,
        26.88
       ],
       [
        117.02,
        24.88
       ],
       [
        115.02,
        24.88
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
         117.02,
         24.88
        ],
        [
         117.02,
         26.88
        ],
        [
         116.593,
         26.88
        ],
        [
         116.549,
         26.84
        ],
        [
         116.544,
         26.804
        ],
        [
         116.558,
         26.774
        ],
        [
         116.515,
         26.721
        ],
        [
         116.52,
         26.685
        ],
        [
         116.566,
         26.65
        ],
        [
         116.553,
         26.576
        ],
        [
         116.539,
         26.559
        ],
        [
         116.597,
         26.513
        ],
        [
         116.611,
         26.477
        ],
        [
         116.638,
         26.477
        ],
        [
         116.608,
         26.43
        ],
        [
         116.601,
         26.373
        ],
        [
         116.553,
         26.365
        ],
        [
         116.553,
         26.4
        ],
        [
         116.52,
         26.41
        ],
        [
         116.5,
         26.362
        ],
        [
         116.459,
         26.345
        ],
        [
         116.437,
         26.308
        ],
        [
         116.413,
         26.298
        ],
        [
         116.385,
         26.238
        ],
        [
         116.4,
         26.203
        ],
        [
         116.392,
         26.171
        ],
        [
         116.436,
         26.16
        ],
        [
         116.476,
         26.173
        ],
        [
         116.489,
         26.114
        ],
        [
         116.385,
         26.031
        ],
        [
         116.36,
         25.992
        ],
        [
         116.37,
         25.963
        ],
        [
         116.326,
         25.957
        ],
        [
         116.303,
         25.924
        ],
        [
         116.258,
         25.903
        ],
        [
         116.225,
         25.909
        ],
        [
         116.178,
         25.894
        ],
        [
         116.132,
         25.86
        ],
        [
         116.132,
         25.824
        ],
        [
         116.181,
         25.779
        ],
        [
         116.13,
         25.759
        ],
        [
         116.107,
         25.701
        ],
        [
         116.067,
         25.704
        ],
        [
         116.069,
         25.646
        ],
        [
         116.042,
         25.624
        ],
        [
         116.063,
         25.563
        ],
        [
         116.04,
         25.548
        ],
        [
         116.037,
         25.515
        ],
        [
         116.005,
         25.49
        ],
        [
         116.023,
         25.436
        ],
        [
         115.993,
         25.374
        ],
        [
         116.008,
         25.319
        ],
        [
         115.987,
         25.29
        ],
        [
         115.95,
         25.292
        ],
        [
         115.931,
         25.236
        ],
        [
         115.856,
         25.21
        ],
        [
         115.861,
         25.166
        ],
        [
         115.888,
         25.129
        ],
        [
         115.88,
         25.092
        ],
        [
         115.909,
         25.084
        ],
        [
         115.928,
         25.05
        ],
        [
         115.873,
         25.02
        ],
        [
         115.925,
         24.961
        ],
        [
         115.87,
         24.96
        ],
        [
         115.893,
         24.937
        ],
        [
         115.908,
         24.923
        ],
        [
         115.986,
         24.899
        ],
        [
         116.015,
         24.906
        ],
        [
         116.04,
         24.88
        ],
        [
         117.02,
         24.88
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.02,
         26.88
        ],
        [
         115.02,
         24.88
        ],
        [
         115.814,
         24.88
        ],
        [
         115.824,
         24.909
        ],
        [
         115.864,
         24.891
        ],
        [
         115.863,
         24.88
        ],
        [
         115.907,
         24.88
        ],
        [
         115.885,
         24.899
        ],
        [
         115.893,
         24.937
        ],
        [
         115.87,
         24.96
        ],
        [
         115.925,
         24.961
        ],
        [
         115.873,
         25.02
        ],
        [
         115.928,
         25.05
        ],
        [
         115.909,
         25.084
        ],
        [
         115.88,
         25.092
        ],
        [
         115.888,
         25.129
        ],
        [
         115.861,
         25.166
        ],
        [
         115.856,
         25.21
        ],
        [
         115.931,
         25.236
        ],
        [
         115.95,
         25.292
        ],
        [
         115.987,
         25.29
        ],
        [
         116.008,
         25.319
        ],
        [
         115.993,
         25.374
        ],
        [
         116.023,
         25.436
        ],
        [
         116.005,
         25.49
        ],
        [
         116.037,
         25.515
        ],
        [
         116.04,
         25.548
        ],
        [
         116.063,
         25.563
        ],
        [
         116.042,
         25.624
        ],
        [
         116.069,
         25.646
        ],
        [
         116.067,
         25.704
        ],
        [
         116.107,
         25.701
        ],
        [
         116.13,
         25.759
        ],
        [
         116.181,
         25.779
        ],
        [
         116.132,
         25.824
        ],
        [
         116.132,
         25.86
        ],
        [
         116.178,
         25.894
        ],
        [
         116.225,
         25.909
        ],
        [
         116.258,
         25.903
        ],
        [
         116.303,
         25.924
        ],
        [
         116.326,
         25.957
        ],
        [
         116.37,
         25.963
        ],
        [
         116.36,
         25.992
        ],
        [
         116.385,
         26.031
        ],
        [
         116.489,
         26.114
        ],
        [
         116.476,
         26.173
        ],
        [
         116.436,
         26.16
        ],
        [
         116.392,
         26.171
        ],
        [
         116.4,
         26.203
        ],
        [
         116.385,
         26.238
        ],
        [
         116.413,
         26.298
        ],
        [
         116.437,
         26.308
        ],
        [
         116.459,
         26.345
        ],
        [
         116.5,
         26.362
        ],
        [
         116.52,
         26.41
        ],
        [
         116.553,
         26.4
        ],
        [
         116.553,
         26.365
        ],
        [
         116.601,
         26.373
        ],
        [
         116.608,
         26.43
        ],
        [
         116.638,
         26.477
        ],
        [
         116.611,
         26.477
        ],
        [
         116.597,
         26.513
        ],
        [
         116.539,
         26.559
        ],
        [
         116.553,
         26.576
        ],
        [
         116.566,
         26.65
        ],
        [
         116.52,
         26.685
        ],
        [
         116.515,
         26.721
        ],
        [
         116.558,
         26.774
        ],
        [
         116.544,
         26.804
        ],
        [
         116.549,
         26.84
        ],
        [
         116.593,
         26.88
        ],
        [
         115.02,
         26.88
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.04,
         24.88
        ],
        [
         116.015,
         24.906
        ],
        [
         115.986,
         24.899
        ],
        [
         115.908,
         24.923
        ],
        [
         115.893,
         24.937
        ],
        [
         115.885,
         24.899
        ],
        [
         115.907,
         24.88
        ],
        [
         115.863,
         24.88
        ],
        [
         115.864,
         24.891
        ],
        [
         115.824,
         24.909
        ],
        [
         115.814,
         24.88
        ],
        [
         116.04,
         24.88
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.02,
       25.592
      ],
      [
       115.033,
       25.614
      ],
      [
       115.09,
       25.746
      ],
      [
       115.101,
       25.826
      ],
      [
       115.068,
       25.864
      ],
      [
       115.02,
       25.861
      ]
     ]
    },
    "n": "Gan"
   }
  ],
  "lakes": [],
  "_bbox": [
   115.02,
   24.88,
   117.02,
   26.88
  ]
 }
};
