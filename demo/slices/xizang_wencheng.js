// 本文件由 tools/build.py 自动生成（切片 xizang_wencheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xizang_wencheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xizang_wencheng"] = {
 "meta": {
  "kind": "court",
  "region": "guangzhong",
  "province": "xizang",
  "title": "唐·文成公主入藏（唐）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "tubo",
  "dossier_event": "event:ev_xizang_wencheng_01",
  "vocab_pack": "inline:xizang_wencheng",
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
    "note": "唐·文成公主入藏（唐）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "唐·文成公主入藏（唐）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "唐·文成公主入藏（唐）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "唐·文成公主入藏（唐）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=xizang_wencheng",
  "key": "xizang_wencheng",
  "scene_id": "xizang_wencheng"
 },
 "sources": [
  {
   "id": "jiutangshu_tubo",
   "title": "《旧唐书·吐蕃传》与文成公主",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "刘昫",
   "period": "唐",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "tubo",
   "name": "吐蕃",
   "type": "region",
   "modern": "今中国西藏",
   "note": "青藏高原政权",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "chang_an",
   "name": "长安",
   "type": "city",
   "modern": "今中国西安",
   "note": "唐朝都城",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  }
 ],
 "persons": [
  {
   "id": "XIZ__p01",
   "name": "松赞干布",
   "role": "吐蕃赞普",
   "note": "吐蕃第三十三代赞普，迎娶文成公主",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIZ__p02",
   "name": "文成公主",
   "role": "唐宗室女",
   "note": "唐太宗所许宗女，入藏和亲",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIZ__p03",
   "name": "唐太宗",
   "role": "唐朝皇帝",
   "note": "许婚文成公主",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "XIZ_001",
   "subject": "event:ev_xizang_wencheng_01",
   "predicate": "请婚",
   "value_text": "松赞干布遣使请婚",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "贞观十五年，吐蕃赞普松赞干布遣使请婚",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贞观十五年，吐蕃赞普松赞干布遣使请婚",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_002",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "和亲",
   "value_text": "太宗以宗女文成公主妻之",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "chang_an",
   "source": "jiutangshu_tubo",
   "quote": "太宗以宗女文成公主妻之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "太宗以宗女文成公主妻之",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_003",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "携带物品",
   "value_text": "携经卷、工技、谷种",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "携经卷、工技、谷种",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "携经卷、工技、谷种",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_004",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "影响",
   "value_text": "唐蕃通好，甥舅盟好",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "唐蕃通好，甥舅盟好",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐蕃通好，甥舅盟好",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_005",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "文化交流",
   "value_text": "中原文物输入吐蕃",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "自是中原文物输入吐蕃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自是中原文物输入吐蕃",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_006",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "交通",
   "value_text": "青藏之道，使驿不绝",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "青藏之道，使驿不绝",
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
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "青藏之道，使驿不绝",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_007",
   "subject": "person:XIZ__p01",
   "predicate": "身份",
   "value_text": "吐蕃赞普",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "吐蕃赞普松赞干布",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "吐蕃赞普松赞干布",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_008",
   "subject": "person:XIZ__p02",
   "predicate": "身份",
   "value_text": "唐宗室女",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "chang_an",
   "source": "jiutangshu_tubo",
   "quote": "宗女文成公主",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宗女文成公主",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_009",
   "subject": "person:XIZ__p03",
   "predicate": "决策",
   "value_text": "许婚文成公主",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "chang_an",
   "source": "jiutangshu_tubo",
   "quote": "太宗以宗女文成公主妻之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "太宗以宗女文成公主妻之",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_010",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "路线",
   "value_text": "长安至吐蕃",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "公主入藏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "公主入藏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_011",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "历史意义",
   "value_text": "促进唐蕃关系",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "唐蕃通好",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评述",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐蕃通好",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_012",
   "subject": "event:ev_xizang_wencheng_02",
   "predicate": "具体路线",
   "value_text": "入藏具体路线未详",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "tubo",
   "source": "jiutangshu_tubo",
   "quote": "公主入藏",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "lead": {
    "where": "唐蕃古道沿线",
    "skills": [
     "历史地理",
     "考古学"
    ],
    "accept": "需进一步考古发现"
   },
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "公主入藏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XIZ_012"
 ],
 "events": [
  {
   "id": "ev_xizang_wencheng_01",
   "subject": "event:ev_xizang_wencheng_01",
   "year": 641,
   "era": "贞观十五年",
   "title": "吐蕃请婚",
   "kind": "外交",
   "text": "松赞干布遣使请婚",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xizang_wencheng_02",
   "subject": "event:ev_xizang_wencheng_02",
   "year": 641,
   "era": "贞观十五年",
   "title": "文成公主入藏",
   "kind": "外交",
   "text": "太宗以宗女文成公主妻之",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "chang_an",
   "to": "tubo",
   "type": "military",
   "label": "公主入藏路线",
   "_source_idx": 0,
   "_source_name": "《旧唐书·吐蕃传》与文成公主",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "chang_an",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "chang_an",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  1900,
  2000
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
        107.95,
        33.27
       ],
       [
        107.95,
        35.27
       ],
       [
        109.95,
        35.27
       ],
       [
        109.95,
        33.27
       ],
       [
        107.95,
        33.27
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
         109.627,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.618,
         33.27
        ],
        [
         109.627,
         33.27
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.95,
         33.27
        ],
        [
         109.95,
         35.27
        ],
        [
         108.3,
         35.27
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
         108.233,
         35.27
        ],
        [
         108.077,
         35.27
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
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.263
        ],
        [
         107.95,
         33.27
        ],
        [
         109.618,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.627,
         33.27
        ],
        [
         109.95,
         33.27
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
         107.95,
         35.27
        ],
        [
         107.95,
         35.263
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
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.077,
         35.27
        ],
        [
         108.233,
         35.27
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
         108.3,
         35.27
        ],
        [
         107.95,
         35.27
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
   107.95,
   33.27,
   109.95,
   35.27
  ]
 }
};
