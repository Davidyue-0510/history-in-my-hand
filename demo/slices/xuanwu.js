// 本文件由 tools/build.py 自动生成（切片 xuanwu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xuanwu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xuanwu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "玄武门之变",
  "dossier_label": "玄武门之变",
  "subtitle": "626 · 唐高祖武德九年",
  "primary_place": "xuanwumen",
  "dossier_event": "event:xx_626",
  "terrain_grid": "china_coarse",
  "lead": "秦王李世民与太子建成、齐王元吉争储。武德九年六月四日，世民伏兵玄武门，杀建成、元吉，迫高祖立己为太子，旋即位（太宗）。",
  "parties_note": "事据《旧唐书》《资治通鉴》综合；建成、元吉一方记载多经太宗朝删改。",
  "subject_names": {
   "person:limin2": "李世民",
   "person:jiancheng": "李建成",
   "person:gaozu": "唐高祖"
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
  "page": "county.html?scene=xuanwu",
  "key": "xuanwu",
  "scene_id": "xuanwu",
  "vocab_pack": "inline:xuanwu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "玄武门之变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "事据《旧唐书》《资治通鉴》综合；建成、元吉一方记载多经太宗朝删改。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  },
  {
   "id": "jiu_tang_xx",
   "title": "《旧唐书·太宗纪》",
   "name": "《旧唐书·太宗纪》",
   "party": "官修史书",
   "faction": "qinwang",
   "bias_note": "唐官修，秦王视角，曲笔避血腥。"
  },
  {
   "id": "zztj_xx",
   "title": "《资治通鉴》",
   "name": "《资治通鉴》",
   "party": "编年史",
   "faction": "donggong",
   "bias_note": "司马光于建成、元吉多存同情，保留东宫叙事。"
  }
 ],
 "places": [
  {
   "id": "xuanwumen",
   "name": "玄武门",
   "lon": 108.95,
   "lat": 34.27,
   "note": "唐长安宫城北门，政变处",
   "elev": 436
  },
  {
   "id": "changan_xx",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐都",
   "elev": 391
  },
  {
   "id": "qianliang",
   "name": "太极宫",
   "lon": 108.94,
   "lat": 34.35,
   "note": "高祖临朝处",
   "elev": 386
  }
 ],
 "persons": [
  {
   "id": "limin2",
   "name": "李世民",
   "side": "秦王/太宗",
   "influence": 3,
   "hometown": "成纪"
  },
  {
   "id": "jiancheng",
   "name": "李建成",
   "side": "太子",
   "influence": 1,
   "hometown": "长安"
  },
  {
   "id": "gaozu",
   "name": "唐高祖",
   "side": "唐",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xx_626",
   "subject": "event:xx_626",
   "predicate": "事件",
   "value_text": "世民伏兵玄武门，建成、元吉入朝遇杀，党羽溃；尉迟敬德甲士入宫「宿卫」高祖。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 626,
    "end": 626,
    "era_text": "武德九年六月四"
   },
   "place": "xuanwumen",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xx_after",
   "subject": "event:xx_after",
   "predicate": "事件",
   "value_text": "高祖立世民为太子，旋禅位，是为太宗，开启贞观之治。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 626,
    "end": 626,
    "era_text": "同年八月"
   },
   "place": "changan_xx",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M55",
   "subject": "event:xx_626",
   "predicate": "伏兵",
   "value_text": "李世民伏兵玄武门",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "李世民伏兵玄武门",
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
   "id": "SX002_M56",
   "subject": "event:xx_626",
   "predicate": "杀",
   "value_text": "杀太子建成、齐王元吉",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成、齐王元吉",
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
   "id": "SX003_M54",
   "subject": "person:limin2",
   "predicate": "杀",
   "value_text": "杀太子建成",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "subject 用 event:xx_626 更合适，此处保留 person 以记录其行为",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M56",
   "subject": "person:jiancheng",
   "predicate": "被杀",
   "value_text": "太子建成被杀",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成",
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
   "id": "SX005_M54",
   "subject": "event:xx_626",
   "predicate": "立为太子",
   "value_text": "高祖立为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "地点未明，留空",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M53",
   "subject": "person:limin2",
   "predicate": "立为太子",
   "value_text": "李世民被立为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
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
   "id": "SX007_M50",
   "subject": "event:xx_626",
   "predicate": "即位",
   "value_text": "旋即位",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "旋即位",
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
   "id": "SX008_M50",
   "subject": "person:limin2",
   "predicate": "即位",
   "value_text": "李世民即位",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "旋即位",
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
   "id": "SX009_M38",
   "subject": "person:gaozu",
   "predicate": "立太子",
   "value_text": "高祖立李世民为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
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
   "id": "SX010_M33",
   "subject": "event:xx_after",
   "predicate": "太宗即位",
   "value_text": "是为太宗",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "是为太宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "event:xx_after 表示即位后的事件",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XUANWUG01",
   "subject": "event:xx_626",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "武德",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
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
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XX_FX1",
   "subject": "event:xx_626",
   "predicate": "储位之争",
   "value_text": "武德末秦王与太子争储白热化：建成结元吉、引关陇元老固储位，世民倚山东豪杰与府兵骁将谋夺嫡，双方各树党羽、相互倾陷。",
   "source": "zztj_xx",
   "quote": "建成、元吉日夜谮诉世民于上（李渊）。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "layer": "record",
   "time": {
    "era_text": "公元626年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "两大利益集团的正面博弈",
   "dims": [
    3,
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "编年史",
   "_faction": "donggong"
  },
  {
   "id": "XX_FX2",
   "subject": "event:xx_626",
   "predicate": "暴力解决",
   "value_text": "世民先发制人，伏兵玄武门射杀建成、元吉，随即逼父退位——关东军功集团以武力取代关陇元老支持的东宫正统。",
   "source": "jiu_tang_xx",
   "quote": "太宗手杀建成、元吉，馘其首。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "layer": "record",
   "time": {
    "era_text": "公元626年",
    "start": "626-06-01",
    "end": "626-06-30",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "派系冲突的暴力顶点",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "官修史书",
   "_faction": "qinwang"
  },
  {
   "id": "XX_FX3",
   "subject": "event:xx_after",
   "predicate": "清洗与正统重塑",
   "value_text": "世民即位后，东宫党羽被清洗、魏徵等转仕新朝，官修史书将事变叙述为『自卫靖难』——胜利者重写利益之争的记忆。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "layer": "inference",
   "time": {
    "era_text": "公元626年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "谁胜谁写史的诚实标注",
   "dims": [
    3,
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
  "XUANWUG01"
 ],
 "events": [
  {
   "id": "ev_xx_626",
   "subject": "event:xx_626",
   "year": 626,
   "era": "武德九年六月四",
   "title": "玄武门伏杀",
   "kind": "政变",
   "text": "世民伏兵玄武门，建成、元吉入朝遇杀，党羽溃；尉迟敬德甲士入宫「宿卫」高祖。",
   "place": "xuanwumen"
  },
  {
   "id": "ev_xx_after",
   "subject": "event:xx_after",
   "year": 626,
   "era": "同年八月",
   "title": "世民即位",
   "kind": "结局",
   "text": "高祖立世民为太子，旋禅位，是为太宗，开启贞观之治。",
   "place": "changan_xx"
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
   "综合史料",
   "官修史书",
   "编年史"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "官修史书": "官修史书",
   "编年史": "编年史"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "官修史书": "#6d4c41",
   "编年史": "#2980b9"
  },
  "legend": {},
  "faction_colors": {
   "qinwang": "#2980b9",
   "donggong": "#c0392b"
  },
  "factions": {
   "qinwang": {
    "name": "秦王府集团（天策系）",
    "period": "武德后期—贞观初（公元621—626）",
    "interest": "以李世民军功威望为资本，房玄龄、杜如晦谋夺储位；拥有关东山东豪杰与府兵骁将（尉迟敬德、秦叔宝），欲取东宫而代之。",
    "key_figures": [
     "李世民",
     "房玄龄",
     "杜如晦",
     "尉迟敬德",
     "长孙无忌"
    ],
    "typical_sources": [
     "旧唐书·太宗纪",
     "贞观政要"
    ],
    "bias_note": "贞观史官讳饰玄武门血腥，将秦王塑造为被迫自卫、顺天应人；对喋血禁门多曲笔。",
    "bases": [
     "成纪",
     "临淄",
     "长安",
     "朔州"
    ],
    "geo_note": "秦王府集团：李世民（成纪/陇西）、房玄龄（临淄/山东）、杜如晦（京兆）、尉迟敬德（朔州）——关陇+山东士人联盟。"
   },
   "donggong": {
    "name": "东宫—元老派（建成集团）",
    "period": "武德",
    "interest": "以太子名分与李渊父权为依凭，结纳齐王元吉与关陇元老（裴寂、封德彝），力保储君正统、压制功高震主的秦王。",
    "key_figures": [
     "李建成",
     "李元吉",
     "李渊",
     "裴寂",
     "魏徵（曾仕东宫）"
    ],
    "typical_sources": [
     "资治通鉴",
     "旧唐书·隐太子传"
    ],
    "bias_note": "司马光《通鉴》于建成、元吉多存同情之笔，记其『仁孝』『有干材』，与唐官修史书的贬抑形成对照。",
    "bases": [
     "长安",
     "钜鹿",
     "祁县"
    ],
    "geo_note": "东宫—元老派：李建成（宗室/长安）、魏征（钜鹿/河北）、王珪（祁县/山西）——河北山西旧部。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "江南/岭南",
     "determination": "genuine_gap",
     "note": "玄武门为关陇—山东内部权力之争，江南岭南非核心，无代言。"
    }
   ]
  }
 },
 "faction_geo": {
  "qinwang": {
   "name": "秦王府集团（天策系）",
   "color": "#2980b9",
   "geo_note": "秦王府集团：李世民（成纪/陇西）、房玄龄（临淄/山东）、杜如晦（京兆）、尉迟敬德（朔州）——关陇+山东士人联盟。",
   "points": [
    {
     "name": "成纪",
     "lon": 105.68,
     "lat": 34.86,
     "note": "李唐祖籍，今甘肃秦安",
     "resolved": true
    },
    {
     "name": "临淄",
     "lon": 118.05,
     "lat": 36.81,
     "note": "今山东淄博临淄；房玄龄故里",
     "resolved": true
    },
    {
     "name": "长安",
     "lon": 108.95,
     "lat": 34.27,
     "note": "唐都，今西安",
     "resolved": true
    },
    {
     "name": "朔州",
     "lon": 112.43,
     "lat": 39.33,
     "note": "尉迟敬德故里，今山西朔州",
     "resolved": true
    }
   ]
  },
  "donggong": {
   "name": "东宫—元老派（建成集团）",
   "color": "#c0392b",
   "geo_note": "东宫—元老派：李建成（宗室/长安）、魏征（钜鹿/河北）、王珪（祁县/山西）——河北山西旧部。",
   "points": [
    {
     "name": "长安",
     "lon": 108.95,
     "lat": 34.27,
     "note": "唐都，今西安",
     "resolved": true
    },
    {
     "name": "钜鹿",
     "lon": 115.04,
     "lat": 37.67,
     "note": "魏征故里，今河北晋州",
     "resolved": true
    },
    {
     "name": "祁县",
     "lon": 112.34,
     "lat": 37.36,
     "note": "王珪故里，今山西祁县",
     "resolved": true
    }
   ]
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
        107.94,
        33.27
       ],
       [
        107.94,
        35.35
       ],
       [
        109.95,
        35.35
       ],
       [
        109.95,
        33.27
       ],
       [
        107.94,
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
         35.35
        ],
        [
         108.611,
         35.35
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
         107.94,
         35.35
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
         108.611,
         35.35
        ],
        [
         107.94,
         35.35
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
   33.27,
   109.95,
   35.35
  ]
 }
};
