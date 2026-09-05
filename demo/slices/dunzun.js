// 本文件由 tools/build.py 自动生成（切片 dunzun），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dunzun"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dunzun"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "独尊儒术",
  "dossier_label": "独尊儒术",
  "subtitle": "前134 · 汉武帝时",
  "primary_place": "changan_dz",
  "dossier_event": "event:dz_134",
  "terrain_grid": "china_coarse",
  "lead": "武帝即位，董仲舒上《天人三策》，请「诸不在六艺之科者罢去」，儒术定于一尊，立五经博士、兴太学，影响两千年。",
  "parties_note": "思想政策据《汉书·董仲舒传》《武帝纪》综合；「独尊」后百家并未尽绝，实为儒术官学化。",
  "subject_names": {
   "person:wudi": "汉武帝",
   "person:dongzhongshu": "董仲舒"
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "epoch": "tang",
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
    "note": "独尊儒术：朝堂凝聚力——为五经博士置弟子员，太学兴，儒生入仕之途大开。"
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
    "note": "独尊儒术：后勤物力——为五经博士置弟子员，太学兴，儒生入仕之途大开。"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "独尊儒术：人口动员——为五经博士置弟子员，太学兴，儒生入仕之途大开。"
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
    "note": "独尊儒术：地缘战略——为五经博士置弟子员，太学兴，儒生入仕之途大开。"
   }
  },
  "province": null,
  "page": "county.html?scene=dunzun",
  "key": "dunzun",
  "scene_id": "dunzun",
  "vocab_pack": "inline:dunzun"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "独尊儒术·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "思想政策据《汉书·董仲舒传》《武帝纪》综合；「独尊」后百家并未尽绝，实为儒术官学化。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "changan_dz",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉都，策问之所",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "wudi",
   "name": "汉武帝",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "dongzhongshu",
   "name": "董仲舒",
   "side": "儒者",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dz_134",
   "subject": "event:dz_134",
   "predicate": "事件",
   "value_text": "武帝诏举贤良，董仲舒对天人三策，请罢黜百家、独尊儒术，立五经博士。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -134,
    "end": -134,
    "era_text": "元光元年"
   },
   "place": "changan_dz",
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
   "id": "AX_ev_dz_taixue",
   "subject": "event:dz_taixue",
   "predicate": "事件",
   "value_text": "为五经博士置弟子员，太学兴，儒生入仕之途大开。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -124,
    "end": -124,
    "era_text": "元朔五年"
   },
   "place": "changan_dz",
   "dims": [
    3,
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DUNZUNG01",
   "subject": "event:dz_taixue",
   "predicate": "史料缺环",
   "value_text": "此学派或议题的师承、著作与影响，诸子文献散佚、后世追述不一，相关脉络存在缺口。",
   "time": {
    "era_text": "正始",
    "start": "240-01-01",
    "end": "240-12-31",
    "gregorian_year": 240
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
   "dist": {
    "type": "degenerate"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_134",
   "predicate": "背景",
   "value_text": "汉初七十年黄老无为，至武帝国力既盛，亟需『有为』之指导思想，儒术代之而起。",
   "time": {
    "start": -134,
    "end": -134,
    "era_text": "元光元年"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    5
   ],
   "id": "dunzun_01",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_boshi",
   "predicate": "制度",
   "value_text": "设五经博士，儒家经典立为官学，经学传授纳入体制。",
   "time": {
    "start": -136,
    "end": -136,
    "era_text": "建元五年"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    3
   ],
   "id": "dunzun_02",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_chaju",
   "predicate": "制度",
   "value_text": "诏郡国举孝廉、茂才，察举以儒术为标准，儒生得由乡举入朝。",
   "time": {
    "start": -134,
    "end": -134,
    "era_text": "元光元年"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    3,
    4
   ],
   "id": "dunzun_03",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_taixue",
   "predicate": "社会",
   "value_text": "太学弟子员岁增，明经入仕之途大开，寒畯儒生得以进身。",
   "time": {
    "start": -124,
    "end": -124,
    "era_text": "元朔五年"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    4
   ],
   "id": "dunzun_04",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_jinwen",
   "predicate": "思想",
   "value_text": "今文经学据『微言大义』说经，援阴阳灾异，开谶纬之先。",
   "time": {
    "start": -130,
    "end": -130,
    "era_text": "约元光中"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    5
   ],
   "id": "dunzun_05",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_134",
   "predicate": "思想",
   "value_text": "董仲舒以『天人感应』『大一统』说君权神授与思想一统，儒术遂为皇权合法性张本。",
   "time": {
    "start": -134,
    "end": -134,
    "era_text": "元光元年"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    3,
    5
   ],
   "id": "dunzun_06",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_legacy",
   "predicate": "制度",
   "value_text": "儒术定于一尊影响两千年，科举以经义取士、学校以儒为宗，皆自此出。",
   "time": {
    "start": -100,
    "end": -100,
    "era_text": "武帝后期"
   },
   "place": "changan_dz",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "dims": [
    3,
    5
   ],
   "id": "dunzun_07",
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "subject": "event:dz_jinwen",
   "predicate": "史料缺环",
   "value_text": "董仲舒对策原本与师说流传，后世辑佚不一，今传本或经窜乱，具体文本存在缺口。",
   "time": {
    "era_text": "武帝时",
    "start": -130,
    "end": -130
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "thought",
   "note": "对策文本流传不一",
   "lead": {
    "where": "今文辑佚对读",
    "skills": [
     "经学辑佚",
     "文本校勘"
    ],
    "accept": "补师说异文"
   },
   "dims": [
    5
   ],
   "id": "dunzun_08",
   "dim_source": "declared",
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
  "DUNZUNG01",
  "dunzun_08"
 ],
 "events": [
  {
   "id": "ev_dz_134",
   "subject": "event:dz_134",
   "year": -134,
   "era": "元光元年",
   "title": "天人三策·独尊儒术",
   "kind": "文化",
   "text": "武帝诏举贤良，董仲舒对天人三策，请罢黜百家、独尊儒术，立五经博士。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_taixue",
   "subject": "event:dz_taixue",
   "year": -124,
   "era": "元朔五年",
   "title": "兴太学",
   "kind": "制度",
   "text": "为五经博士置弟子员，太学兴，儒生入仕之途大开。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_boshi",
   "subject": "event:dz_boshi",
   "year": -136,
   "era": "建元五年",
   "title": "置五经博士",
   "kind": "制度",
   "text": "罢传记博士，专立五经博士，儒家经典定为官学。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_chaju",
   "subject": "event:dz_chaju",
   "year": -134,
   "era": "元光元年",
   "title": "诏举孝廉",
   "kind": "制度",
   "text": "诏郡国岁举孝廉一人，察举以儒术为归。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_jinwen",
   "subject": "event:dz_jinwen",
   "year": -130,
   "era": "约元光中",
   "title": "今文经学兴",
   "kind": "思想",
   "text": "今文博士援阴阳灾异说经，开谶纬先声。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_legacy",
   "subject": "event:dz_legacy",
   "year": -100,
   "era": "武帝后期",
   "title": "儒术定于一尊",
   "kind": "影响",
   "text": "经学立为官学、学校以儒为宗，影响迄于清季。",
   "place": "changan_dz"
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
        35.34
       ],
       [
        109.94,
        35.34
       ],
       [
        109.94,
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
         109.94,
         33.34
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
         107.94,
         35.262
        ],
        [
         107.94,
         33.34
        ],
        [
         109.94,
         33.34
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
         35.34
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
         108.613,
         35.34
        ],
        [
         107.94,
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
   107.94,
   33.34,
   109.94,
   35.34
  ]
 }
};
