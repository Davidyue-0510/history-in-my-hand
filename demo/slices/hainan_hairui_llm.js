// 本文件由 tools/build.py 自动生成（切片 hainan_hairui_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hainan_hairui_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hainan_hairui_llm"] = {
 "meta": {
  "kind": "court",
  "region": "jiangnan",
  "province": "hainan",
  "title": "海瑞（1514—1587，明代清官）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qiongshan",
  "dossier_event": "event:ev_hainan_hairui_llm_01",
  "vocab_pack": "hainan_hairui_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming",
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
    "note": "海瑞（1514—1587，明代清官）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "海瑞（1514—1587，明代清官）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "海瑞（1514—1587，明代清官）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "海瑞（1514—1587，明代清官）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=hainan_hairui_llm",
  "key": "hainan_hairui_llm",
  "scene_id": "hainan_hairui_llm"
 },
 "sources": [
  {
   "id": "hairui_llm_src",
   "title": "海瑞史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1514—1587",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qiongshan",
   "name": "琼山",
   "type": "city",
   "modern": "今中国海南省海口市",
   "note": "海瑞籍贯",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "nanjing",
   "name": "南京",
   "type": "city",
   "modern": "今中国江苏省南京市",
   "note": "海瑞卒于此",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.78,
   "lat": 32.06,
   "geo_note": "民国首都",
   "elev": 15
  },
  {
   "id": "yingtian",
   "name": "应天",
   "type": "region",
   "modern": "今中国江苏省南京市一带",
   "note": "海瑞巡抚辖区",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HAI__p01",
   "name": "海瑞",
   "role": "明代清官，官至应天巡抚、南京右都御史",
   "note": "字汝贤，海南琼山人，以清廉刚直著称",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 6
  },
  {
   "id": "HAI__p02",
   "name": "明世宗",
   "role": "明朝皇帝，年号嘉靖",
   "note": "迷信道教，不理朝政，海瑞上疏直谏",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAI__p03",
   "name": "明穆宗",
   "role": "明朝皇帝，年号隆庆",
   "note": "即位后释放海瑞",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HAI_001",
   "subject": "person:HAI__p01",
   "predicate": "籍贯",
   "value_text": "海南琼山人",
   "time": {
    "era_text": "",
    "start": "1514"
   },
   "place": "qiongshan",
   "source": "hairui_llm_src",
   "quote": "海南琼山（今海口）人",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "海南琼山（今海口）人",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_002",
   "subject": "person:HAI__p01",
   "predicate": "生卒",
   "value_text": "生于1514年，卒于1587年",
   "time": {
    "era_text": "",
    "start": "1514",
    "end": "1587"
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "海瑞（1514—1587）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "海瑞（1514—1587）",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_003",
   "subject": "event:ev_hainan_hairui_llm_01",
   "predicate": "上疏直谏",
   "value_text": "嘉靖四十五年上治安疏",
   "time": {
    "era_text": "嘉靖四十五年",
    "start": "1566-01-01",
    "end": "1566-12-31",
    "gregorian_year": 1566
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "嘉靖四十五年（1566）上《治安疏》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "嘉靖四十五年（1566）上《治安疏》",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_004",
   "subject": "event:ev_hainan_hairui_llm_01",
   "predicate": "直谏内容",
   "value_text": "谏世宗迷信道教不理朝政",
   "time": {
    "era_text": "嘉靖四十五年",
    "start": "1566-01-01",
    "end": "1566-12-31",
    "gregorian_year": 1566
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "直谏世宗迷信道教、不理朝政",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "直谏世宗迷信道教、不理朝政",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_005",
   "subject": "event:ev_hainan_hairui_llm_01",
   "predicate": "后果",
   "value_text": "触怒下狱，几死",
   "time": {
    "era_text": "嘉靖四十五年",
    "start": "1566-01-01",
    "end": "1566-12-31",
    "gregorian_year": 1566
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "触怒下狱，几死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "触怒下狱，几死",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_006",
   "subject": "event:ev_hainan_hairui_llm_02",
   "predicate": "获释",
   "value_text": "隆庆即位获释",
   "time": {
    "era_text": "隆庆元年",
    "start": "1567-01-01",
    "end": "1567-12-31",
    "gregorian_year": 1567
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "隆庆即位获释",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隆庆即位获释",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_007",
   "subject": "event:ev_hainan_hairui_llm_03",
   "predicate": "巡抚应天",
   "value_text": "隆庆三年任应天巡抚",
   "time": {
    "era_text": "隆庆三年",
    "start": "1569-01-01",
    "end": "1569-12-31",
    "gregorian_year": 1569
   },
   "place": "yingtian",
   "source": "hairui_llm_src",
   "quote": "迁应天巡抚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "迁应天巡抚",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_008",
   "subject": "event:ev_hainan_hairui_llm_03",
   "predicate": "施政",
   "value_text": "抑豪强清丈田亩平冤狱",
   "time": {
    "era_text": "隆庆三年",
    "start": "1569-01-01",
    "end": "1569-12-31",
    "gregorian_year": 1569
   },
   "place": "yingtian",
   "source": "hairui_llm_src",
   "quote": "抑豪强、清丈田亩、平冤狱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "抑豪强、清丈田亩、平冤狱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_009",
   "subject": "person:HAI__p01",
   "predicate": "声誉",
   "value_text": "有海青天之誉",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "有「海青天」之誉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "有「海青天」之誉",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_010",
   "subject": "person:HAI__p01",
   "predicate": "晚年",
   "value_text": "万历初闲居，卒于南京",
   "time": {
    "era_text": "万历初",
    "start": "1573"
   },
   "place": "nanjing",
   "source": "hairui_llm_src",
   "quote": "万历初闲居，卒于南京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "万历初闲居，卒于南京",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_011",
   "subject": "person:HAI__p01",
   "predicate": "品格",
   "value_text": "廉介刚正，垂范后世",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "海瑞廉介刚正，垂范后世",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "海瑞廉介刚正，垂范后世",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_012",
   "subject": "person:HAI__p01",
   "predicate": "民间传说",
   "value_text": "民间多有其传说",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "民间多有其传说",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "民间多有其传说",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_013",
   "subject": "person:HAI__p01",
   "predicate": "历史评价",
   "value_text": "明代著名清官",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "明代著名清官",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "empire",
   "note": "综述性评价",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明代著名清官",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_014",
   "subject": "person:HAI__p01",
   "predicate": "上疏动机",
   "value_text": "原文未详述其动机",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "",
   "source": "hairui_llm_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    5
   ],
   "lead": {
    "where": "治安疏全文及嘉靖朝政治背景",
    "skills": [
     "明史",
     "奏疏分析"
    ],
    "accept": "补充海瑞上疏的具体动机与思想渊源"
   },
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HAI_014"
 ],
 "events": [
  {
   "id": "ev_hainan_hairui_llm_01",
   "subject": "event:ev_hainan_hairui_llm_01",
   "year": 1566,
   "era": "嘉靖四十五年",
   "title": "上治安疏",
   "kind": "其他",
   "text": "海瑞上《治安疏》直谏世宗",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hainan_hairui_llm_02",
   "subject": "event:ev_hainan_hairui_llm_02",
   "year": 1567,
   "era": "隆庆元年",
   "title": "获释复职",
   "kind": "行政",
   "text": "隆庆即位，海瑞获释",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hainan_hairui_llm_03",
   "subject": "event:ev_hainan_hairui_llm_03",
   "year": 1569,
   "era": "隆庆三年",
   "title": "巡抚应天",
   "kind": "行政",
   "text": "任应天巡抚，抑豪强清丈田亩",
   "_source_idx": 0,
   "_source_name": "海瑞史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "qiongshan",
   "party": "后世官修",
   "start": 1514,
   "end": 1587,
   "basis": "auto: 场景主地点 qiongshan 叙事控制方=后世官修"
  }
 ],
 "control_seats": [],
 "control_years": [
  1514,
  1587
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
        117.78,
        31.06
       ],
       [
        117.78,
        33.06
       ],
       [
        119.78,
        33.06
       ],
       [
        119.78,
        31.06
       ],
       [
        117.78,
        31.06
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
         118.235,
         33.06
        ],
        [
         118.244,
         33.028
        ],
        [
         118.245,
         32.998
        ],
        [
         118.269,
         32.969
        ],
        [
         118.304,
         32.969
        ],
        [
         118.292,
         32.946
        ],
        [
         118.252,
         32.937
        ],
        [
         118.233,
         32.914
        ],
        [
         118.25,
         32.848
        ],
        [
         118.301,
         32.846
        ],
        [
         118.3,
         32.783
        ],
        [
         118.334,
         32.762
        ],
        [
         118.363,
         32.771
        ],
        [
         118.375,
         32.719
        ],
        [
         118.411,
         32.716
        ],
        [
         118.451,
         32.744
        ],
        [
         118.484,
         32.721
        ],
        [
         118.56,
         32.73
        ],
        [
         118.572,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.707,
         32.72
        ],
        [
         118.757,
         32.737
        ],
        [
         118.738,
         32.773
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.81,
         32.854
        ],
        [
         118.821,
         32.921
        ],
        [
         118.847,
         32.922
        ],
        [
         118.849,
         32.957
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.893,
         32.941
        ],
        [
         118.934,
         32.939
        ],
        [
         118.993,
         32.958
        ],
        [
         119.021,
         32.956
        ],
        [
         119.055,
         32.875
        ],
        [
         119.113,
         32.823
        ],
        [
         119.185,
         32.826
        ],
        [
         119.212,
         32.708
        ],
        [
         119.209,
         32.641
        ],
        [
         119.231,
         32.607
        ],
        [
         119.22,
         32.577
        ],
        [
         119.153,
         32.558
        ],
        [
         119.168,
         32.536
        ],
        [
         119.142,
         32.5
        ],
        [
         119.085,
         32.453
        ],
        [
         119.041,
         32.515
        ],
        [
         118.976,
         32.505
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.891,
         32.553
        ],
        [
         118.908,
         32.592
        ],
        [
         118.843,
         32.568
        ],
        [
         118.821,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.757,
         32.604
        ],
        [
         118.735,
         32.589
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.689,
         32.588
        ],
        [
         118.659,
         32.594
        ],
        [
         118.633,
         32.578
        ],
        [
         118.597,
         32.601
        ],
        [
         118.569,
         32.586
        ],
        [
         118.564,
         32.562
        ],
        [
         118.609,
         32.537
        ],
        [
         118.592,
         32.481
        ],
        [
         118.629,
         32.468
        ],
        [
         118.691,
         32.472
        ],
        [
         118.685,
         32.404
        ],
        [
         118.703,
         32.329
        ],
        [
         118.657,
         32.301
        ],
        [
         118.675,
         32.25
        ],
        [
         118.644,
         32.21
        ],
        [
         118.511,
         32.194
        ],
        [
         118.495,
         32.165
        ],
        [
         118.501,
         32.122
        ],
        [
         118.434,
         32.087
        ],
        [
         118.394,
         32.076
        ],
        [
         118.39,
         31.985
        ],
        [
         118.364,
         31.93
        ],
        [
         118.472,
         31.88
        ],
        [
         118.467,
         31.858
        ],
        [
         118.505,
         31.842
        ],
        [
         118.482,
         31.778
        ],
        [
         118.534,
         31.767
        ],
        [
         118.522,
         31.743
        ],
        [
         118.558,
         31.73
        ],
        [
         118.572,
         31.746
        ],
        [
         118.641,
         31.759
        ],
        [
         118.654,
         31.73
        ],
        [
         118.698,
         31.71
        ],
        [
         118.643,
         31.672
        ],
        [
         118.643,
         31.65
        ],
        [
         118.736,
         31.633
        ],
        [
         118.748,
         31.676
        ],
        [
         118.774,
         31.683
        ],
        [
         118.803,
         31.619
        ],
        [
         118.859,
         31.624
        ],
        [
         118.882,
         31.564
        ],
        [
         118.886,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.852,
         31.394
        ],
        [
         118.824,
         31.376
        ],
        [
         118.768,
         31.364
        ],
        [
         118.746,
         31.373
        ],
        [
         118.721,
         31.323
        ],
        [
         118.726,
         31.282
        ],
        [
         118.757,
         31.28
        ],
        [
         118.795,
         31.229
        ],
        [
         118.871,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         119.015,
         31.242
        ],
        [
         119.105,
         31.235
        ],
        [
         119.107,
         31.251
        ],
        [
         119.158,
         31.295
        ],
        [
         119.198,
         31.295
        ],
        [
         119.198,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.78,
         31.178
        ],
        [
         119.78,
         33.06
        ],
        [
         118.235,
         33.06
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
         119.78,
         31.06
        ],
        [
         119.78,
         31.178
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.631,
         31.06
        ],
        [
         119.78,
         31.06
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.78,
         33.06
        ],
        [
         117.78,
         31.06
        ],
        [
         119.631,
         31.06
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.198,
         31.27
        ],
        [
         119.198,
         31.295
        ],
        [
         119.158,
         31.295
        ],
        [
         119.107,
         31.251
        ],
        [
         119.105,
         31.235
        ],
        [
         119.015,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         118.871,
         31.242
        ],
        [
         118.795,
         31.229
        ],
        [
         118.757,
         31.28
        ],
        [
         118.726,
         31.282
        ],
        [
         118.721,
         31.323
        ],
        [
         118.746,
         31.373
        ],
        [
         118.768,
         31.364
        ],
        [
         118.824,
         31.376
        ],
        [
         118.852,
         31.394
        ],
        [
         118.884,
         31.5
        ],
        [
         118.857,
         31.506
        ],
        [
         118.866,
         31.519
        ],
        [
         118.886,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.859,
         31.624
        ],
        [
         118.803,
         31.619
        ],
        [
         118.774,
         31.683
        ],
        [
         118.748,
         31.676
        ],
        [
         118.736,
         31.633
        ],
        [
         118.643,
         31.65
        ],
        [
         118.643,
         31.672
        ],
        [
         118.698,
         31.71
        ],
        [
         118.654,
         31.73
        ],
        [
         118.641,
         31.759
        ],
        [
         118.572,
         31.746
        ],
        [
         118.558,
         31.73
        ],
        [
         118.522,
         31.743
        ],
        [
         118.534,
         31.767
        ],
        [
         118.482,
         31.778
        ],
        [
         118.505,
         31.842
        ],
        [
         118.467,
         31.858
        ],
        [
         118.472,
         31.88
        ],
        [
         118.364,
         31.93
        ],
        [
         118.39,
         31.985
        ],
        [
         118.394,
         32.076
        ],
        [
         118.434,
         32.087
        ],
        [
         118.501,
         32.122
        ],
        [
         118.495,
         32.165
        ],
        [
         118.511,
         32.194
        ],
        [
         118.644,
         32.21
        ],
        [
         118.675,
         32.25
        ],
        [
         118.657,
         32.301
        ],
        [
         118.703,
         32.329
        ],
        [
         118.685,
         32.404
        ],
        [
         118.691,
         32.472
        ],
        [
         118.629,
         32.468
        ],
        [
         118.592,
         32.481
        ],
        [
         118.609,
         32.537
        ],
        [
         118.564,
         32.562
        ],
        [
         118.569,
         32.586
        ],
        [
         118.597,
         32.601
        ],
        [
         118.633,
         32.578
        ],
        [
         118.659,
         32.594
        ],
        [
         118.689,
         32.588
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.735,
         32.589
        ],
        [
         118.757,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.821,
         32.604
        ],
        [
         118.843,
         32.568
        ],
        [
         118.908,
         32.592
        ],
        [
         118.891,
         32.553
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.976,
         32.505
        ],
        [
         119.041,
         32.515
        ],
        [
         119.085,
         32.453
        ],
        [
         119.142,
         32.5
        ],
        [
         119.168,
         32.536
        ],
        [
         119.153,
         32.558
        ],
        [
         119.22,
         32.577
        ],
        [
         119.231,
         32.607
        ],
        [
         119.209,
         32.641
        ],
        [
         119.212,
         32.708
        ],
        [
         119.185,
         32.826
        ],
        [
         119.113,
         32.823
        ],
        [
         119.055,
         32.875
        ],
        [
         119.021,
         32.956
        ],
        [
         118.993,
         32.958
        ],
        [
         118.934,
         32.939
        ],
        [
         118.893,
         32.941
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.849,
         32.957
        ],
        [
         118.847,
         32.922
        ],
        [
         118.821,
         32.921
        ],
        [
         118.81,
         32.854
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.738,
         32.773
        ],
        [
         118.757,
         32.737
        ],
        [
         118.707,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.572,
         32.72
        ],
        [
         118.56,
         32.73
        ],
        [
         118.484,
         32.721
        ],
        [
         118.451,
         32.744
        ],
        [
         118.411,
         32.716
        ],
        [
         118.375,
         32.719
        ],
        [
         118.363,
         32.771
        ],
        [
         118.334,
         32.762
        ],
        [
         118.3,
         32.783
        ],
        [
         118.301,
         32.846
        ],
        [
         118.25,
         32.848
        ],
        [
         118.233,
         32.914
        ],
        [
         118.252,
         32.937
        ],
        [
         118.292,
         32.946
        ],
        [
         118.304,
         32.969
        ],
        [
         118.269,
         32.969
        ],
        [
         118.245,
         32.998
        ],
        [
         118.244,
         33.028
        ],
        [
         118.235,
         33.06
        ],
        [
         117.78,
         33.06
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.857,
         31.506
        ],
        [
         118.884,
         31.5
        ],
        [
         118.886,
         31.519
        ],
        [
         118.866,
         31.519
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.787,
        31.06
       ],
       [
        117.844,
        31.124
       ],
       [
        117.916,
        31.104
       ],
       [
        117.968,
        31.13
       ],
       [
        117.999,
        31.202
       ],
       [
        118.089,
        31.255
       ],
       [
        118.24,
        31.29
       ],
       [
        118.312,
        31.341
       ],
       [
        118.305,
        31.406
       ],
       [
        118.333,
        31.51
       ],
       [
        118.395,
        31.653
       ],
       [
        118.515,
        31.841
       ],
       [
        118.692,
        32.074
       ],
       [
        118.961,
        32.203
       ],
       [
        119.324,
        32.227
       ],
       [
        119.53,
        32.229
       ],
       [
        119.643,
        32.235
       ],
       [
        119.771,
        32.207
       ],
       [
        119.78,
        32.197
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.531,
        33.06
       ],
       [
        118.519,
        33.036
       ],
       [
        118.492,
        32.998
       ],
       [
        118.431,
        32.973
       ],
       [
        118.267,
        32.925
       ],
       [
        118.227,
        32.897
       ],
       [
        118.183,
        32.885
       ],
       [
        118.171,
        32.906
       ],
       [
        118.192,
        32.941
       ],
       [
        118.181,
        32.971
       ],
       [
        118.142,
        32.986
       ],
       [
        118.088,
        32.958
       ],
       [
        118.066,
        32.936
       ],
       [
        118.05,
        32.964
       ],
       [
        118.084,
        33.005
       ],
       [
        118.13,
        33.028
       ],
       [
        118.226,
        32.991
       ],
       [
        118.24,
        33.008
       ],
       [
        118.234,
        33.046
       ],
       [
        118.227,
        33.06
       ],
       [
        117.882,
        33.06
       ],
       [
        117.838,
        33.038
       ],
       [
        117.809,
        33.048
       ],
       [
        117.845,
        33.06
       ],
       [
        118.267,
        33.06
       ],
       [
        118.275,
        33.045
       ],
       [
        118.34,
        32.994
       ],
       [
        118.407,
        33.01
       ],
       [
        118.417,
        33.038
       ],
       [
        118.434,
        33.06
       ],
       [
        118.531,
        33.06
       ]
      ]
     ]
    },
    "n": "Hongze Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.407,
        32.794
       ],
       [
        119.392,
        32.751
       ],
       [
        119.35,
        32.749
       ],
       [
        119.3,
        32.748
       ],
       [
        119.253,
        32.736
       ],
       [
        119.201,
        32.691
       ],
       [
        119.173,
        32.686
       ],
       [
        119.165,
        32.706
       ],
       [
        119.147,
        32.753
       ],
       [
        119.125,
        32.798
       ],
       [
        119.092,
        32.836
       ],
       [
        119.079,
        32.855
       ],
       [
        119.084,
        32.866
       ],
       [
        119.13,
        32.877
       ],
       [
        119.188,
        32.878
       ],
       [
        119.229,
        32.882
       ],
       [
        119.242,
        32.896
       ],
       [
        119.241,
        32.919
       ],
       [
        119.253,
        32.943
       ],
       [
        119.251,
        32.978
       ],
       [
        119.245,
        33.013
       ],
       [
        119.264,
        33.034
       ],
       [
        119.296,
        33.041
       ],
       [
        119.314,
        33.054
       ],
       [
        119.312,
        33.06
       ],
       [
        119.147,
        33.06
       ],
       [
        119.099,
        33.027
       ],
       [
        119.035,
        33.031
       ],
       [
        118.966,
        33.038
       ],
       [
        118.907,
        33.058
       ],
       [
        118.904,
        33.06
       ],
       [
        119.043,
        33.06
       ],
       [
        119.059,
        33.058
       ],
       [
        119.067,
        33.06
       ],
       [
        119.348,
        33.06
       ],
       [
        119.346,
        33.024
       ],
       [
        119.372,
        33.0
       ],
       [
        119.397,
        32.916
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ]
      ]
     ]
    },
    "n": "Gaoyou Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.78,
        31.409
       ],
       [
        118.768,
        31.419
       ],
       [
        118.747,
        31.459
       ],
       [
        118.743,
        31.492
       ],
       [
        118.724,
        31.522
       ],
       [
        118.723,
        31.542
       ],
       [
        118.758,
        31.545
       ],
       [
        118.867,
        31.546
       ],
       [
        118.941,
        31.554
       ],
       [
        118.964,
        31.503
       ],
       [
        118.96,
        31.465
       ],
       [
        118.915,
        31.435
       ],
       [
        118.85,
        31.393
       ],
       [
        118.815,
        31.402
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.941,
        31.521
       ],
       [
        117.912,
        31.522
       ],
       [
        117.83,
        31.57
       ],
       [
        117.784,
        31.579
       ],
       [
        117.78,
        31.576
       ],
       [
        117.78,
        31.636
       ],
       [
        117.81,
        31.621
       ],
       [
        117.919,
        31.551
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ]
      ]
     ]
    },
    "n": "Chao Hu"
   }
  ],
  "_bbox": [
   117.78,
   31.06,
   119.78,
   33.06
  ]
 }
};
