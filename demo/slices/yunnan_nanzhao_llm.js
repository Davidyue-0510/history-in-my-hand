// 本文件由 tools/build.py 自动生成（切片 yunnan_nanzhao_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yunnan_nanzhao_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yunnan_nanzhao_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "yunnan",
  "province": "yunnan",
  "title": "南诏",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "taihe_cheng",
  "dossier_event": "event:ev_yunnan_nanzhao_llm_01",
  "vocab_pack": "yunnan_nanzhao_llm",
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
    "note": "南诏：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南诏：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "南诏：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南诏：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   6
  ],
  "page": "county.html?scene=yunnan_nanzhao_llm",
  "key": "yunnan_nanzhao_llm",
  "scene_id": "yunnan_nanzhao_llm"
 },
 "sources": [
  {
   "id": "yunnan_nanzhao_src_llm",
   "title": "南诏史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "唐",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "taihe_cheng",
   "name": "太和城",
   "type": "city",
   "modern": "今中国云南省大理市",
   "note": "南诏都城。坐标据地名志条目（别名 太和城→大理），标 approx。",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 100.267,
   "lat": 25.606,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 太和城→大理）（诚实回填 v0.221）。",
   "elev": 2250
  },
  {
   "id": "dali",
   "name": "大理",
   "type": "region",
   "modern": "今中国云南省大理白族自治州",
   "note": "太和城所在区域",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "daduh",
   "name": "大渡河",
   "type": "river",
   "modern": "今中国四川省大渡河",
   "note": "南诏北界",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "yuenan",
   "name": "越南北部",
   "type": "region",
   "modern": "今越南社会主义共和国北部",
   "note": "南诏南界",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "YUN__p01",
   "name": "皮逻阁",
   "role": "南诏王",
   "note": "统一六诏，受封云南王",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "YUN__p02",
   "name": "郑买嗣",
   "role": "权臣",
   "note": "篡位灭南诏",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "YUN_001",
   "subject": "event:ev_yunnan_nanzhao_llm_01",
   "predicate": "统一六诏",
   "value_text": "蒙舍诏统一六诏",
   "time": {
    "era_text": "唐开元二十六年",
    "start": "738-01-01",
    "end": "738-12-31",
    "gregorian_year": 738
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "开元二十六年，皮逻阁统一六诏",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开元二十六年，皮逻阁统一六诏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_002",
   "subject": "person:YUN__p01",
   "predicate": "受封",
   "value_text": "受唐封云南王",
   "time": {
    "era_text": "唐开元二十六年",
    "start": "738-01-01",
    "end": "738-12-31",
    "gregorian_year": 738
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "受封云南王",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "受封云南王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_003",
   "subject": "place:taihe_cheng",
   "predicate": "建都",
   "value_text": "南诏建都太和城",
   "time": {
    "era_text": "唐开元二十六年",
    "start": "738-01-01",
    "end": "738-12-31",
    "gregorian_year": 738
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "都太和城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都太和城",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_004",
   "subject": "event:ev_yunnan_nanzhao_llm_02",
   "predicate": "战役损失",
   "value_text": "唐军惨败",
   "time": {
    "era_text": "唐天宝八载",
    "start": "749-01-01",
    "end": "749-12-31",
    "gregorian_year": 749
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "唐两度征南诏惨败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐两度征南诏惨败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_005",
   "subject": "event:ev_yunnan_nanzhao_llm_03",
   "predicate": "战役损失",
   "value_text": "唐军再败",
   "time": {
    "era_text": "唐天宝十三载",
    "start": "754-01-01",
    "end": "754-12-31",
    "gregorian_year": 754
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "唐两度征南诏惨败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐两度征南诏惨败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_006",
   "subject": "event:ev_yunnan_nanzhao_llm_04",
   "predicate": "灭亡",
   "value_text": "郑买嗣篡位，南诏亡",
   "time": {
    "era_text": "唐天复二年",
    "start": "902-01-01",
    "end": "902-12-31",
    "gregorian_year": 902
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "郑买嗣篡位，南诏亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑买嗣篡位，南诏亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_007",
   "subject": "place:daduh",
   "predicate": "疆域北界",
   "value_text": "北抵大渡河",
   "time": {
    "era_text": "南诏全盛时",
    "start": "8世纪"
   },
   "place": "daduh",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "北抵大渡河",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "北抵大渡河",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_008",
   "subject": "place:yuenan",
   "predicate": "疆域南界",
   "value_text": "南至越南北部",
   "time": {
    "era_text": "南诏全盛时",
    "start": "8世纪"
   },
   "place": "yuenan",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "南至越南北部",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "南至越南北部",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_009",
   "subject": "event:ev_yunnan_nanzhao_llm_01",
   "predicate": "唐支持",
   "value_text": "唐支持南诏统一",
   "time": {
    "era_text": "唐开元二十六年",
    "start": "738-01-01",
    "end": "738-12-31",
    "gregorian_year": 738
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "在唐支持下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "在唐支持下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_010",
   "subject": "event:ev_yunnan_nanzhao_llm_02",
   "predicate": "征讨原因",
   "value_text": "唐征南诏原因未明",
   "time": {
    "era_text": "唐天宝八载",
    "start": "749-01-01",
    "end": "749-12-31",
    "gregorian_year": 749
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "唐两度征南诏",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《新唐书·南诏传》",
    "skills": [
     "历史考据"
    ],
    "accept": "需查证具体战役起因"
   },
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐两度征南诏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_011",
   "subject": "event:ev_yunnan_nanzhao_llm_02",
   "predicate": "唐军伤亡",
   "value_text": "唐军伤亡数字未载",
   "time": {
    "era_text": "唐天宝八载",
    "start": "749-01-01",
    "end": "749-12-31",
    "gregorian_year": 749
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "惨败",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《资治通鉴》",
    "skills": [
     "文献检索"
    ],
    "accept": "需查证具体伤亡"
   },
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "惨败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_012",
   "subject": "event:ev_yunnan_nanzhao_llm_03",
   "predicate": "唐军伤亡",
   "value_text": "唐军伤亡数字未载",
   "time": {
    "era_text": "唐天宝十三载",
    "start": "754-01-01",
    "end": "754-12-31",
    "gregorian_year": 754
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "惨败",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《旧唐书》",
    "skills": [
     "文献检索"
    ],
    "accept": "需查证具体伤亡"
   },
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "惨败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_013",
   "subject": "event:ev_yunnan_nanzhao_llm_04",
   "predicate": "篡位方式",
   "value_text": "郑买嗣篡位细节未详",
   "time": {
    "era_text": "唐天复二年",
    "start": "902-01-01",
    "end": "902-12-31",
    "gregorian_year": 902
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "郑买嗣篡位",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《南诏野史》",
    "skills": [
     "历史考据"
    ],
    "accept": "需查证具体过程"
   },
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑买嗣篡位",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_014",
   "subject": "event:ev_yunnan_nanzhao_llm_01",
   "predicate": "统一过程",
   "value_text": "统一六诏过程未详",
   "time": {
    "era_text": "唐开元二十六年",
    "start": "738-01-01",
    "end": "738-12-31",
    "gregorian_year": 738
   },
   "place": "taihe_cheng",
   "source": "yunnan_nanzhao_src_llm",
   "quote": "统一六诏",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《蛮书》",
    "skills": [
     "历史考据"
    ],
    "accept": "需查证具体过程"
   },
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "统一六诏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YUN_010",
  "YUN_011",
  "YUN_012",
  "YUN_013",
  "YUN_014"
 ],
 "events": [
  {
   "id": "ev_yunnan_nanzhao_llm_01",
   "subject": "event:ev_yunnan_nanzhao_llm_01",
   "year": 738,
   "era": "唐开元二十六年",
   "title": "南诏统一六诏",
   "kind": "建置",
   "text": "蒙舍诏统一六诏，建都太和城",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_nanzhao_llm_02",
   "subject": "event:ev_yunnan_nanzhao_llm_02",
   "year": 749,
   "era": "唐天宝八载",
   "title": "天宝战争第一次征讨",
   "kind": "战事",
   "text": "唐征南诏，败绩",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_nanzhao_llm_03",
   "subject": "event:ev_yunnan_nanzhao_llm_03",
   "year": 754,
   "era": "唐天宝十三载",
   "title": "天宝战争第二次征讨",
   "kind": "战事",
   "text": "唐再征南诏，惨败",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_nanzhao_llm_04",
   "subject": "event:ev_yunnan_nanzhao_llm_04",
   "year": 902,
   "era": "唐天复二年",
   "title": "郑买嗣篡位",
   "kind": "其他",
   "text": "郑买嗣篡位，南诏灭亡",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "daduh",
   "to": "taihe_cheng",
   "type": "military",
   "label": "唐军南征路线",
   "_source_idx": 0,
   "_source_name": "南诏史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "taihe_cheng",
   "party": "后世官修",
   "start": 738,
   "end": 902,
   "basis": "auto: 场景主地点 taihe_cheng 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "taihe_cheng",
   "name": "太和城",
   "lon": 100.267,
   "lat": 25.606,
   "region": "yunnan"
  }
 ],
 "control_years": [
  738,
  902
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
        99.267,
        24.606
       ],
       [
        99.267,
        26.606
       ],
       [
        101.267,
        26.606
       ],
       [
        101.267,
        24.606
       ],
       [
        99.267,
        24.606
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
         101.267,
         24.606
        ],
        [
         101.267,
         26.606
        ],
        [
         99.267,
         26.606
        ],
        [
         99.267,
         24.606
        ],
        [
         101.267,
         24.606
        ]
       ]
      ]
     ]
    },
    "n": "云南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       101.168,
       24.606
      ],
      [
       101.118,
       24.655
      ],
      [
       100.931,
       24.891
      ],
      [
       100.812,
       25.003
      ],
      [
       100.76,
       24.993
      ],
      [
       100.642,
       25.021
      ],
      [
       100.459,
       25.088
      ],
      [
       100.351,
       25.15
      ],
      [
       100.303,
       25.235
      ],
      [
       100.183,
       25.443
      ]
     ]
    },
    "n": "Hong"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        100.425,
        26.606
       ],
       [
        100.444,
        26.499
       ],
       [
        100.449,
        26.378
       ],
       [
        100.425,
        26.326
       ],
       [
        100.428,
        26.279
       ],
       [
        100.459,
        26.236
       ],
       [
        100.582,
        26.203
       ],
       [
        100.798,
        26.178
       ],
       [
        100.961,
        26.211
       ],
       [
        101.071,
        26.301
       ],
       [
        101.2,
        26.357
       ],
       [
        101.267,
        26.368
       ]
      ]
     ]
    },
    "n": "Jinsha"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       99.267,
       25.71
      ],
      [
       99.31,
       25.644
      ],
      [
       99.341,
       25.521
      ],
      [
       99.308,
       25.423
      ],
      [
       99.341,
       25.315
      ],
      [
       99.44,
       25.198
      ],
      [
       99.525,
       25.129
      ],
      [
       99.599,
       25.109
      ],
      [
       99.7,
       25.017
      ],
      [
       99.828,
       24.853
      ],
      [
       99.939,
       24.762
      ],
      [
       100.031,
       24.743
      ],
      [
       100.087,
       24.718
      ],
      [
       100.106,
       24.687
      ],
      [
       100.14,
       24.69
      ],
      [
       100.187,
       24.727
      ],
      [
       100.251,
       24.747
      ],
      [
       100.332,
       24.75
      ],
      [
       100.418,
       24.682
      ],
      [
       100.47,
       24.606
      ]
     ]
    },
    "n": "Lancang"
   }
  ],
  "lakes": [],
  "_bbox": [
   99.267,
   24.606,
   101.267,
   26.606
  ]
 }
};
