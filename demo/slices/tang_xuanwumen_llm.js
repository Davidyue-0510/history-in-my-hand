// 本文件由 tools/build.py 自动生成（切片 tang_xuanwumen_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tang_xuanwumen_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tang_xuanwumen_llm"] = {
 "meta": {
  "kind": "court",
  "scale_tier": "operational",
  "region": "tang",
  "province": null,
  "title": "唐·玄武门之变（LLM 抽取·人工校订）",
  "dossier_label": "唐·玄武门之变（LLM 抽取落库）",
  "subtitle": "夺嫡与贞观前夜",
  "primary_place": null,
  "dossier_event": "ev_tang_xuanwumen_01",
  "vocab_pack": "inline:tang_xuanwumen_llm",
  "terrain_grid": "china_coarse",
  "lead": "玄武门之变以一种房流血方式完成最高权力交接，秦王一系由此主控朝堂。",
  "parties_note": "叙事方=秦王府/东宫；来源=后世官修（基于《旧唐书·太宗本纪》现代概述）。",
  "dims": [
   1,
   3,
   5,
   6
  ],
  "subject_names": {
   "person:TAN__p01": "李世民",
   "person:TAN__p02": "李建成",
   "person:TAN__p03": "李元吉",
   "person:TAN__p04": "李渊",
   "event:ev_tang_xuanwumen_01": "玄武门之变",
   "event:ev_tang_xuanwumen_03": "高祖传位",
   "place:changan": "长安",
   "place:xuanwumen": "玄武门"
  },
  "epoch": "tang",
  "strategic": {
   "political_cohesion": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     3,
     4
    ],
    "layer": "inference",
    "note": "秦王府私兵+元勋支持对抗东宫"
   },
   "material_logistics": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "玄武门处宫城咽喉、控禁军调发"
   },
   "population_mobilization": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "关中旧部与府兵站队决定胜负"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "长安宫城几何即权力中枢"
   }
  },
  "page": "county.html?scene=tang_xuanwumen_llm",
  "key": "tang_xuanwumen_llm",
  "scene_id": "tang_xuanwumen_llm"
 },
 "sources": [
  {
   "id": "tang_xuanwumen_src_llm",
   "title": "唐·玄武门之变（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "后世",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "今中国陕西西安",
   "note": "唐都",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  },
  {
   "id": "xuanwumen",
   "name": "玄武门",
   "type": "fortress",
   "modern": "今中国陕西西安（唐长安宫城北门）",
   "note": "宫城北门，事变发生地",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "TAN__p01",
   "name": "李世民",
   "role": "秦王，后为太子、太宗",
   "note": "玄武门之变主谋，射杀建成、元吉",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "TAN__p02",
   "name": "李建成",
   "role": "太子",
   "note": "被李世民射杀于玄武门",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "TAN__p03",
   "name": "李元吉",
   "role": "齐王",
   "note": "与建成一同被杀",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "TAN__p04",
   "name": "李渊",
   "role": "高祖皇帝",
   "note": "事变后立世民为太子，八月传位",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAN_001",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "事件性质",
   "value_text": "李世民伏杀建成、元吉",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "李世民于玄武门设伏，射杀太子建成、齐王元吉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "李世民于玄武门设伏，射杀太子建成、齐王元吉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_002",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "地点",
   "value_text": "发生于长安宫城玄武门",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "于长安宫城玄武门设伏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于长安宫城玄武门设伏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_003",
   "subject": "person:TAN__p01",
   "predicate": "角色",
   "value_text": "李世民为秦王，后为太子",
   "time": {
    "era_text": "武德九年六月",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "高祖立世民为太子",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "高祖立世民为太子",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_004",
   "subject": "event:ev_tang_xuanwumen_03",
   "predicate": "传位",
   "value_text": "高祖八月传位世民",
   "time": {
    "era_text": "武德九年八月",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "八月传位，是为太宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "八月传位，是为太宗",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_005",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "影响",
   "value_text": "剪除东宫势力，控制朝堂",
   "time": {
    "era_text": "武德九年六月",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "剪除东宫势力，确立秦王一系对朝堂的控制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "剪除东宫势力，确立秦王一系对朝堂的控制",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_006",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "后续",
   "value_text": "开启贞观之治",
   "time": {
    "era_text": "武德九年八月",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "开启贞观之治",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开启贞观之治",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_007",
   "subject": "person:TAN__p02",
   "predicate": "死亡",
   "value_text": "太子建成被射杀",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "射杀太子建成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "射杀太子建成",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_008",
   "subject": "person:TAN__p03",
   "predicate": "死亡",
   "value_text": "齐王元吉被射杀",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "射杀齐王元吉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "射杀齐王元吉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_009",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "性质",
   "value_text": "夺嫡政变",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "夺嫡与贞观前夜",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界多视为夺嫡政变",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夺嫡与贞观前夜",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_010",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "合法性",
   "value_text": "后世评价不一",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "合法性争议",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "存在不同史观",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "合法性争议",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_011",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "细节",
   "value_text": "具体伏兵人数不详",
   "time": {
    "era_text": "武德九年六月四日",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "tang_xuanwumen_src_llm",
   "quote": "设伏细节缺失",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "两唐书、资治通鉴",
    "skills": [
     "史料考据",
     "军事史"
    ],
    "accept": "补充伏兵规模与部署"
   },
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设伏细节缺失",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_012",
   "subject": "event:ev_tang_xuanwumen_01",
   "predicate": "前因",
   "value_text": "兄弟争储矛盾激化",
   "time": {
    "era_text": "武德年间",
    "start": "618-01-01",
    "end": "618-12-31",
    "gregorian_year": 618
   },
   "place": "changan",
   "source": "tang_xuanwumen_src_llm",
   "quote": "夺嫡矛盾",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夺嫡矛盾",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAN_011"
 ],
 "events": [
  {
   "id": "ev_tang_xuanwumen_01",
   "subject": "event:ev_tang_xuanwumen_01",
   "year": 626,
   "era": "武德九年六月四日",
   "title": "玄武门之变",
   "kind": "其他",
   "text": "李世民伏杀建成、元吉",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tang_xuanwumen_03",
   "subject": "event:ev_tang_xuanwumen_03",
   "year": 626,
   "era": "武德九年八月",
   "title": "高祖传位",
   "kind": "行政",
   "text": "高祖传位世民，是为太宗",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "changan",
   "to": "xuanwumen",
   "type": "military",
   "label": "李世民设伏于玄武门",
   "_source_idx": 0,
   "_source_name": "唐·玄武门之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "tang"
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
