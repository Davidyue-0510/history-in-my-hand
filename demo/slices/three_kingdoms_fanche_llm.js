// 本文件由 tools/build.py 自动生成（切片 three_kingdoms_fanche_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["three_kingdoms_fanche_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["three_kingdoms_fanche_llm"] = {
 "meta": {
  "kind": "tech",
  "region": "huabei",
  "province": "henan",
  "title": "马钧与翻车（三国·魏）",
  "dossier_label": "马钧与翻车（三国·魏）",
  "subtitle": "马钧与翻车（三国·魏）",
  "primary_place": "jingdu",
  "dossier_event": "event:ev_three_kingdoms_fanche_llm_01",
  "vocab_pack": "inline:three_kingdoms_fanche_llm",
  "terrain_grid": "china_coarse",
  "lead": "马钧与翻车（三国·魏）——2技术维加厚（v0.192，three_kingdoms/henan 冷门真实科技主题）。",
  "parties_note": null,
  "subject_names": null,
  "epoch": "three_kingdoms",
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
    "note": "马钧与翻车（三国·魏）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "马钧与翻车（三国·魏）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "马钧与翻车（三国·魏）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "马钧与翻车（三国·魏）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=three_kingdoms_fanche_llm",
  "key": "three_kingdoms_fanche_llm",
  "scene_id": "three_kingdoms_fanche_llm"
 },
 "sources": [
  {
   "id": "sanguozhi_majun",
   "title": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "陈寿（裴松之注）",
   "period": "晋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jingdu",
   "name": "京都",
   "type": "city",
   "modern": "今中国河南省洛阳市",
   "note": "魏都洛阳",
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.45,
   "lat": 34.62,
   "geo_note": "今河南洛阳（东汉京都）",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "THR__p01",
   "name": "马钧",
   "role": "魏国给事中、机械发明家",
   "note": "作翻车以灌溉园地",
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "THR_001",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "发明",
   "value_text": "马钧作翻车",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "先生乃作翻车",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "先生乃作翻车",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_002",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "灌溉效果",
   "value_text": "其功百倍于常",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "其功百倍于常",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "其功百倍于常",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_003",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "操作方式",
   "value_text": "令童儿转之",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "令童儿转之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "令童儿转之",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_004",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "灌溉方式",
   "value_text": "灌水自覆，更入更出",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "灌水自覆，更入更出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "灌水自覆，更入更出",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_005",
   "subject": "person:THR__p01",
   "predicate": "身份",
   "value_text": "马钧为魏给事中",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "先生",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "先生",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_006",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "动机",
   "value_text": "患无水以溉",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "患无水以溉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "患无水以溉",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_007",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "技术特征",
   "value_text": "翻车为人力驱动",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "令童儿转之",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "令童儿转之",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_008",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "技术对比",
   "value_text": "功效百倍于常",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "其功百倍于常",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "其功百倍于常",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_009",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "应用场景",
   "value_text": "用于园地灌溉",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "可以为园",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "可以为园",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_010",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "发明者评价",
   "value_text": "变化之巧",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "皆先生之所变化也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "皆先生之所变化也",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_011",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "史料记载",
   "value_text": "出自《三国志》",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "居京都",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "居京都",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "THR_012",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "predicate": "考古证据",
   "value_text": "缺乏实物佐证",
   "time": {
    "era_text": "魏明帝时",
    "start": "235"
   },
   "place": "jingdu",
   "source": "sanguozhi_majun",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "lead": {
    "where": "洛阳周边汉魏遗址",
    "skills": [
     "考古发掘",
     "机械复原"
    ],
    "accept": "出土翻车模型或部件"
   },
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "居京都，城内有地，可以为园，患无水以溉。先生乃作翻车，令童儿转之，而灌水自覆，更入更出，其功百倍于常。此二者（翻车、指南车）皆先生之所变化也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "THR_012"
 ],
 "events": [
  {
   "id": "ev_three_kingdoms_fanche_llm_01",
   "subject": "event:ev_three_kingdoms_fanche_llm_01",
   "year": 235,
   "era": "魏明帝青龙三年",
   "title": "马钧作翻车",
   "kind": "建置",
   "text": "马钧在京都作翻车灌溉园地",
   "_source_idx": 0,
   "_source_name": "《三国志·魏书·杜夔传》注引傅玄《马钧传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "jingdu",
   "party": "后世官修",
   "start": 215,
   "end": 255,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "jingdu",
   "name": "京都",
   "lon": 112.45,
   "lat": 34.62,
   "region": "huabei"
  }
 ],
 "control_years": [
  215,
  255
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
        111.45,
        33.62
       ],
       [
        111.45,
        35.62
       ],
       [
        113.45,
        35.62
       ],
       [
        113.45,
        33.62
       ],
       [
        111.45,
        33.62
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
         111.45,
         35.62
        ],
        [
         111.45,
         34.837
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.45,
         35.512
        ],
        [
         113.45,
         35.62
        ],
        [
         111.45,
         35.62
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.45,
         33.62
        ],
        [
         113.45,
         35.512
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.45,
         34.837
        ],
        [
         111.45,
         33.62
        ],
        [
         113.45,
         33.62
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.45,
        34.852
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.45,
        34.976
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.45,
   33.62,
   113.45,
   35.62
  ]
 }
};
