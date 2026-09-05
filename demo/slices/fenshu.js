// 本文件由 tools/build.py 自动生成（切片 fenshu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fenshu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fenshu"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "焚书坑儒",
  "dossier_label": "焚书坑儒",
  "subtitle": "前213—前212 · 秦",
  "primary_place": "xianyang",
  "dossier_event": "event:fs_213",
  "terrain_grid": "china_coarse",
  "lead": "始皇三十四年（前213）李斯请焚《诗》《书》百家语，以吏为师；次年方士卢生等求仙不成亡去，始皇怒坑术士儒生四百六十余人于咸阳。文化专制之烈，后世讥之。",
  "parties_note": "焚坑据《史记·秦始皇本纪》综合，坑儒人数与对象有考辨争议。",
  "subject_names": {
   "person:lisi2": "李斯",
   "person:qinshihuang3": "秦始皇"
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "epoch": "qin",
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
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）"
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
    "note": "技术↔生产力；赋税/漕运→后勤半径（R7）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；流民→动员潜力"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "page": "county.html?scene=fenshu",
  "key": "fenshu",
  "scene_id": "fenshu",
  "vocab_pack": "inline:fenshu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "焚书坑儒·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "焚坑据《史记·秦始皇本纪》综合，坑儒人数与对象有考辨争议。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "lisi2",
   "name": "李斯",
   "side": "秦",
   "influence": 1
  },
  {
   "id": "qinshihuang3",
   "name": "秦始皇",
   "side": "秦",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_fs_213",
   "subject": "event:fs_213",
   "predicate": "事件",
   "value_text": "李斯请焚民间《诗》《书》百家语，欲以法家一统思想。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -213,
    "end": -213,
    "era_text": "始皇三四"
   },
   "place": "xianyang",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fs_212",
   "subject": "event:fs_212",
   "predicate": "事件",
   "value_text": "方士亡去、谤议朝政，始皇坑儒生于咸阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -212,
    "end": -212,
    "era_text": "始皇三五"
   },
   "place": "xianyang",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M24",
   "subject": "event:fs_213",
   "predicate": "发生",
   "value_text": "秦始皇从李斯之议焚书",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "秦始皇从丞相李斯之议，焚《诗》《书》及百家语",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文未用年号纪年，直接使用公元纪年，此处保留原文表述",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M25",
   "subject": "event:fs_213",
   "predicate": "法令",
   "value_text": "令下三十日不烧者黥为城旦",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "令下三十日不烧者黥为城旦",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M23",
   "subject": "person:lisi2",
   "predicate": "提议",
   "value_text": "李斯提议焚书",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "秦始皇从丞相李斯之议",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M25",
   "subject": "event:fs_212",
   "predicate": "发生",
   "value_text": "坑术士方士于咸阳",
   "time": {
    "era_text": "公元前212年",
    "start": "-212-01-01",
    "end": "-212-12-31",
    "gregorian_year": -212
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "坑术士方士于咸阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M24",
   "subject": "event:fs_212",
   "predicate": "别称",
   "value_text": "史称焚书坑儒",
   "time": {
    "era_text": "公元前212年",
    "start": "-212-01-01",
    "end": "-212-12-31",
    "gregorian_year": -212
   },
   "place": "",
   "source": "synthesis",
   "quote": "史称焚书坑儒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "焚书坑儒为后世合称，原文分述两事",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M25",
   "subject": "event:fs_213",
   "predicate": "关联人物",
   "value_text": "秦始皇主导焚书",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "秦始皇从丞相李斯之议",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文主语为秦始皇，推断其为主导者",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M23",
   "subject": "event:fs_212",
   "predicate": "关联人物",
   "value_text": "秦始皇主导坑儒",
   "time": {
    "era_text": "公元前212年",
    "start": "-212-01-01",
    "end": "-212-12-31",
    "gregorian_year": -212
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "坑术士方士于咸阳",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文未明说主语，但承接前文推断为秦始皇",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M24",
   "subject": "event:fs_213",
   "predicate": "时间关系",
   "value_text": "焚书发生于坑儒之前",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元前213年……公元前212年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文按时间顺序叙述",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M24",
   "subject": "event:fs_213",
   "predicate": "焚书范围",
   "value_text": "焚《诗》《书》及百家语",
   "time": {
    "era_text": "公元前213年",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": "",
   "source": "synthesis",
   "quote": "焚《诗》《书》及百家语",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M23",
   "subject": "event:fs_212",
   "predicate": "地点",
   "value_text": "坑儒发生于咸阳",
   "time": {
    "era_text": "公元前212年",
    "start": "-212-01-01",
    "end": "-212-12-31",
    "gregorian_year": -212
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "坑术士方士于咸阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "FENSHUG01",
   "subject": "event:fs_213",
   "predicate": "史料缺环",
   "value_text": "此学派或议题的师承、著作与影响，诸子文献散佚、后世追述不一，相关脉络存在缺口。",
   "time": {
    "era_text": "秦始皇",
    "start": "-213-01-01",
    "end": "-213-12-31",
    "gregorian_year": -213
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "thought",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FENSHUG01"
 ],
 "events": [
  {
   "id": "ev_fs_213",
   "subject": "event:fs_213",
   "year": -213,
   "era": "始皇三四",
   "title": "焚诗书",
   "kind": "统制",
   "text": "李斯请焚民间《诗》《书》百家语，欲以法家一统思想。",
   "place": "xianyang"
  },
  {
   "id": "ev_fs_212",
   "subject": "event:fs_212",
   "year": -212,
   "era": "始皇三五",
   "title": "坑儒生",
   "kind": "惨案",
   "text": "方士亡去、谤议朝政，始皇坑儒生于咸阳。",
   "place": "xianyang"
  }
 ],
 "edges": [],
 "control": [],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
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
        107.7,
        33.33
       ],
       [
        107.7,
        35.34
       ],
       [
        109.94,
        35.34
       ],
       [
        109.94,
        33.33
       ],
       [
        107.7,
        33.33
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
         109.94,
         33.33
        ],
        [
         109.94,
         35.34
        ],
        [
         108.613,
         35.34
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.7,
         35.262
        ],
        [
         107.7,
         35.195
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.7,
         34.952
        ],
        [
         107.7,
         33.33
        ],
        [
         109.94,
         33.33
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.7,
         35.34
        ],
        [
         107.7,
         34.952
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.7,
         35.195
        ],
        [
         107.7,
         35.262
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.613,
         35.34
        ],
        [
         107.7,
         35.34
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   107.7,
   33.33,
   109.94,
   35.34
  ]
 }
};
