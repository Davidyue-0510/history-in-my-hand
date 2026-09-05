// 本文件由 tools/build.py 自动生成（切片 wugu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wugu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wugu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "巫蛊之祸",
  "dossier_label": "巫蛊之祸",
  "subtitle": "前91 · 汉武帝晚年",
  "primary_place": "changan",
  "dossier_event": "event:wg_91",
  "terrain_grid": "china_coarse",
  "lead": "征和年间江充构陷太子据行巫蛊，武帝信谗、太子惶恐起兵，长安流血数日。太子兵败自尽，皇后卫子夫殉，牵连数万，武帝晚节丧其嗣，悔而建思子宫。",
  "parties_note": "巫蛊据《汉书·武帝纪》《戾太子传》综合，江充之谮为祸根。",
  "subject_names": {
   "person:hanwu2": "汉武帝",
   "person:litai": "卫太子据"
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "epoch": "han",
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
    "note": "巫蛊之祸：朝堂凝聚力——武帝悟"
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
    "note": "巫蛊之祸：后勤物力——族江充"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "巫蛊之祸：人口动员——江充告太子据行巫蛊"
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
    "note": "巫蛊之祸：地缘战略——武帝悟"
   }
  },
  "province": "shaanxi",
  "page": "county.html?scene=wugu",
  "key": "wugu",
  "scene_id": "wugu",
  "vocab_pack": "inline:wugu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "巫蛊之祸·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "巫蛊据《汉书·武帝纪》《戾太子传》综合，江充之谮为祸根。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "hanwu2",
   "name": "汉武帝",
   "side": "汉",
   "influence": 4
  },
  {
   "id": "litai",
   "name": "卫太子据",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wg_91",
   "subject": "event:wg_91",
   "predicate": "事件",
   "value_text": "江充诬太子行巫蛊，掘蛊于宫，武帝怒、太子惧。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -91,
    "end": -91,
    "era_text": "征和二"
   },
   "place": "changan",
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
   "id": "AX_ev_wg_war",
   "subject": "event:wg_war",
   "predicate": "事件",
   "value_text": "太子发兵捕江充、旋败走，自尽湖县，卫后殉。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -91,
    "end": -91,
    "era_text": "同年"
   },
   "place": "changan",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M54",
   "subject": "event:wg_war",
   "predicate": "起因",
   "value_text": "江充告太子据行巫蛊",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江充告太子据行巫蛊",
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
   "id": "SX002_M55",
   "subject": "event:wg_war",
   "predicate": "结果",
   "value_text": "戾太子起兵败亡",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M53",
   "subject": "person:hanwu2",
   "predicate": "态度转变",
   "value_text": "武帝悟",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "武帝悟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M55",
   "subject": "person:hanwu2",
   "predicate": "处置",
   "value_text": "族江充",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "族江充",
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
   "id": "SX005_M53",
   "subject": "person:hanwu2",
   "predicate": "纪念行为",
   "value_text": "作思子宫",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "作思子宫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M52",
   "subject": "person:hanwu2",
   "predicate": "悔过诏书",
   "value_text": "轮台诏悔过",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "轮台诏悔过",
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
   "id": "SX007_M49",
   "subject": "event:wg_91",
   "predicate": "关联",
   "value_text": "巫蛊之祸引发太子兵变",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江充告太子据行巫蛊，戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "推断巫蛊案与太子兵变的因果关系",
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
   "id": "SX008_M49",
   "subject": "event:wg_war",
   "predicate": "时间跨度",
   "value_text": "征和二年至征和四年",
   "time": {
    "era_text": "征和二年至征和四年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "征和二年……征和四年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "从原文时间点推断事件延续",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M37",
   "subject": "event:wg_war",
   "predicate": "性质",
   "value_text": "宫廷政变",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "推断为宫廷内部权力斗争",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M32",
   "subject": "person:hanwu2",
   "predicate": "晚年政策转向",
   "value_text": "由征伐转向休养",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "轮台诏悔过",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界普遍认为轮台诏标志政策转向",
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
   "id": "SX011_M18",
   "subject": "event:wg_war",
   "predicate": "伤亡",
   "value_text": "太子败亡",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M13",
   "subject": "event:wg_war",
   "predicate": "后续影响",
   "value_text": "武帝悔悟并清算",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "武帝悟，族江充",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "从原文行为推断悔悟",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WUGUG01",
   "subject": "event:wg_war",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "征和",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "court",
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
    6
   ],
   "dim_source": "fallback",
   "dist": {
    "type": "degenerate"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "WUGUG01"
 ],
 "events": [
  {
   "id": "ev_wg_91",
   "subject": "event:wg_91",
   "year": -91,
   "era": "征和二",
   "title": "江充构陷",
   "kind": "冤狱",
   "text": "江充诬太子行巫蛊，掘蛊于宫，武帝怒、太子惧。",
   "place": "changan"
  },
  {
   "id": "ev_wg_war",
   "subject": "event:wg_war",
   "year": -91,
   "era": "同年",
   "title": "太子兵败",
   "kind": "结局",
   "text": "太子发兵捕江充、旋败走，自尽湖县，卫后殉。",
   "place": "changan"
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
        107.94,
        33.34
       ],
       [
        107.94,
        35.62
       ],
       [
        113.45,
        35.62
       ],
       [
        113.45,
        33.34
       ],
       [
        107.94,
        33.34
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
         110.379,
         34.601
        ],
        [
         110.425,
         34.588
        ],
        [
         110.488,
         34.611
        ],
        [
         110.533,
         34.583
        ],
        [
         110.611,
         34.608
        ],
        [
         110.71,
         34.605
        ],
        [
         110.749,
         34.652
        ],
        [
         110.792,
         34.65
        ],
        [
         110.825,
         34.616
        ],
        [
         110.884,
         34.644
        ],
        [
         110.903,
         34.669
        ],
        [
         110.92,
         34.73
        ],
        [
         110.976,
         34.706
        ],
        [
         111.035,
         34.741
        ],
        [
         111.118,
         34.757
        ],
        [
         111.149,
         34.808
        ],
        [
         111.233,
         34.79
        ],
        [
         111.255,
         34.82
        ],
        [
         111.292,
         34.807
        ],
        [
         111.346,
         34.832
        ],
        [
         111.389,
         34.815
        ],
        [
         111.439,
         34.838
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
         110.601,
         35.62
        ],
        [
         110.589,
         35.602
        ],
        [
         110.568,
         35.54
        ],
        [
         110.531,
         35.511
        ],
        [
         110.478,
         35.414
        ],
        [
         110.45,
         35.328
        ],
        [
         110.375,
         35.252
        ],
        [
         110.379,
         35.211
        ],
        [
         110.364,
         35.198
        ],
        [
         110.374,
         35.134
        ],
        [
         110.321,
         35.005
        ],
        [
         110.262,
         34.944
        ],
        [
         110.231,
         34.881
        ],
        [
         110.247,
         34.789
        ],
        [
         110.243,
         34.726
        ],
        [
         110.23,
         34.693
        ],
        [
         110.269,
         34.63
        ],
        [
         110.295,
         34.611
        ],
        [
         110.379,
         34.601
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
         33.34
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
         111.439,
         34.838
        ],
        [
         111.389,
         34.815
        ],
        [
         111.346,
         34.832
        ],
        [
         111.292,
         34.807
        ],
        [
         111.255,
         34.82
        ],
        [
         111.233,
         34.79
        ],
        [
         111.149,
         34.808
        ],
        [
         111.118,
         34.757
        ],
        [
         111.035,
         34.741
        ],
        [
         110.976,
         34.706
        ],
        [
         110.92,
         34.73
        ],
        [
         110.903,
         34.669
        ],
        [
         110.884,
         34.644
        ],
        [
         110.825,
         34.616
        ],
        [
         110.792,
         34.65
        ],
        [
         110.749,
         34.652
        ],
        [
         110.71,
         34.605
        ],
        [
         110.611,
         34.608
        ],
        [
         110.533,
         34.583
        ],
        [
         110.488,
         34.611
        ],
        [
         110.425,
         34.588
        ],
        [
         110.379,
         34.601
        ],
        [
         110.367,
         34.567
        ],
        [
         110.405,
         34.558
        ],
        [
         110.372,
         34.544
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.504,
         34.337
        ],
        [
         110.452,
         34.293
        ],
        [
         110.429,
         34.288
        ],
        [
         110.44,
         34.243
        ],
        [
         110.508,
         34.217
        ],
        [
         110.552,
         34.213
        ],
        [
         110.558,
         34.193
        ],
        [
         110.622,
         34.177
        ],
        [
         110.642,
         34.161
        ],
        [
         110.614,
         34.113
        ],
        [
         110.592,
         34.102
        ],
        [
         110.587,
         34.023
        ],
        [
         110.621,
         34.036
        ],
        [
         110.671,
         33.966
        ],
        [
         110.666,
         33.938
        ],
        [
         110.627,
         33.925
        ],
        [
         110.629,
         33.91
        ],
        [
         110.587,
         33.888
        ],
        [
         110.612,
         33.852
        ],
        [
         110.663,
         33.853
        ],
        [
         110.712,
         33.834
        ],
        [
         110.741,
         33.799
        ],
        [
         110.782,
         33.796
        ],
        [
         110.817,
         33.751
        ],
        [
         110.832,
         33.714
        ],
        [
         110.824,
         33.686
        ],
        [
         110.879,
         33.634
        ],
        [
         110.967,
         33.609
        ],
        [
         111.004,
         33.579
        ],
        [
         111.003,
         33.536
        ],
        [
         111.027,
         33.478
        ],
        [
         111.027,
         33.468
        ],
        [
         110.996,
         33.436
        ],
        [
         111.026,
         33.375
        ],
        [
         111.026,
         33.34
        ],
        [
         113.45,
         33.34
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.295,
         34.611
        ],
        [
         110.269,
         34.63
        ],
        [
         110.23,
         34.693
        ],
        [
         110.243,
         34.726
        ],
        [
         110.247,
         34.789
        ],
        [
         110.231,
         34.881
        ],
        [
         110.262,
         34.944
        ],
        [
         110.321,
         35.005
        ],
        [
         110.374,
         35.134
        ],
        [
         110.364,
         35.198
        ],
        [
         110.379,
         35.211
        ],
        [
         110.375,
         35.252
        ],
        [
         110.45,
         35.328
        ],
        [
         110.478,
         35.414
        ],
        [
         110.531,
         35.511
        ],
        [
         110.568,
         35.54
        ],
        [
         110.589,
         35.602
        ],
        [
         110.601,
         35.62
        ],
        [
         108.536,
         35.62
        ],
        [
         108.539,
         35.606
        ],
        [
         108.618,
         35.557
        ],
        [
         108.626,
         35.537
        ],
        [
         108.606,
         35.503
        ],
        [
         108.631,
         35.419
        ],
        [
         108.61,
         35.355
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
         107.94,
         35.262
        ],
        [
         107.94,
         33.34
        ],
        [
         111.026,
         33.34
        ],
        [
         111.026,
         33.375
        ],
        [
         110.996,
         33.436
        ],
        [
         111.027,
         33.468
        ],
        [
         111.021,
         33.471
        ],
        [
         111.022,
         33.476
        ],
        [
         111.027,
         33.478
        ],
        [
         111.003,
         33.536
        ],
        [
         111.004,
         33.579
        ],
        [
         110.967,
         33.609
        ],
        [
         110.879,
         33.634
        ],
        [
         110.824,
         33.686
        ],
        [
         110.832,
         33.714
        ],
        [
         110.817,
         33.751
        ],
        [
         110.782,
         33.796
        ],
        [
         110.741,
         33.799
        ],
        [
         110.712,
         33.834
        ],
        [
         110.663,
         33.853
        ],
        [
         110.612,
         33.852
        ],
        [
         110.587,
         33.888
        ],
        [
         110.629,
         33.91
        ],
        [
         110.627,
         33.925
        ],
        [
         110.666,
         33.938
        ],
        [
         110.671,
         33.966
        ],
        [
         110.621,
         34.036
        ],
        [
         110.587,
         34.023
        ],
        [
         110.592,
         34.102
        ],
        [
         110.614,
         34.113
        ],
        [
         110.642,
         34.161
        ],
        [
         110.622,
         34.177
        ],
        [
         110.558,
         34.193
        ],
        [
         110.552,
         34.213
        ],
        [
         110.508,
         34.217
        ],
        [
         110.44,
         34.243
        ],
        [
         110.429,
         34.288
        ],
        [
         110.452,
         34.293
        ],
        [
         110.504,
         34.337
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.372,
         34.544
        ],
        [
         110.405,
         34.558
        ],
        [
         110.367,
         34.567
        ],
        [
         110.379,
         34.601
        ]
       ]
      ],
      [
       [
        [
         111.027,
         33.478
        ],
        [
         111.022,
         33.476
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.468
        ],
        [
         111.027,
         33.478
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
         107.94,
         35.62
        ],
        [
         107.94,
         35.262
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
         108.61,
         35.355
        ],
        [
         108.631,
         35.419
        ],
        [
         108.606,
         35.503
        ],
        [
         108.626,
         35.537
        ],
        [
         108.618,
         35.557
        ],
        [
         108.539,
         35.606
        ],
        [
         108.536,
         35.62
        ],
        [
         107.94,
         35.62
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.578,
        35.62
       ],
       [
        110.579,
        35.534
       ],
       [
        110.459,
        35.343
       ],
       [
        110.366,
        35.234
       ],
       [
        110.316,
        35.135
       ],
       [
        110.278,
        35.008
       ],
       [
        110.262,
        34.868
       ],
       [
        110.27,
        34.637
       ],
       [
        110.465,
        34.597
       ],
       [
        110.619,
        34.604
       ],
       [
        110.795,
        34.645
       ],
       [
        110.89,
        34.683
       ],
       [
        110.97,
        34.724
       ],
       [
        111.027,
        34.746
       ],
       [
        111.101,
        34.795
       ],
       [
        111.243,
        34.83
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
   107.94,
   33.34,
   113.45,
   35.62
  ]
 }
};
