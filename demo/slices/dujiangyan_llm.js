// 本文件由 tools/build.py 自动生成（切片 dujiangyan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dujiangyan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dujiangyan_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "chuan_gui",
  "province": "sichuan",
  "title": "都江堰与战国蜀的水利革命",
  "dossier_label": "都江堰与战国蜀的水利革命",
  "subtitle": "都江堰与战国蜀的水利革命",
  "primary_place": "lijian",
  "dossier_event": "event:ev_dujiangyan_llm_01",
  "vocab_pack": "inline:dujiangyan_llm",
  "terrain_grid": "china_coarse",
  "lead": "都江堰与战国蜀的水利革命——技术维（dim 2）最薄补强，warring_states/sichuan 跨时代科技切片。",
  "parties_note": null,
  "subject_names": null,
  "epoch": "warring_states",
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
    "note": "都江堰与战国蜀的水利革命：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "都江堰与战国蜀的水利革命：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "都江堰与战国蜀的水利革命：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "都江堰与战国蜀的水利革命：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   6
  ],
  "page": "county.html?scene=dujiangyan_llm",
  "key": "dujiangyan_llm",
  "scene_id": "dujiangyan_llm"
 },
 "sources": [
  {
   "id": "shiji_hequq",
   "title": "《史记·河渠书》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "lijian",
   "name": "离碓",
   "type": "fortress",
   "modern": "今四川省都江堰市",
   "note": "李冰所凿之离堆",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "chengdu",
   "name": "成都",
   "type": "city",
   "modern": "今四川省成都市",
   "note": "二江穿流之地",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 104.07,
   "lat": 30.66,
   "geo_note": "今四川成都",
   "elev": 489
  },
  {
   "id": "moshui",
   "name": "沫水",
   "type": "region",
   "modern": "今四川省大渡河",
   "note": "李冰所辟之水",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "DUJ__p01",
   "name": "李冰",
   "role": "蜀守",
   "note": "主持开凿离碓，修建都江堰",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "DUJ_001",
   "subject": "event:ev_dujiangyan_llm_01",
   "predicate": "工程目的",
   "value_text": "辟沫水之害",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "lijian",
   "source": "shiji_hequq",
   "quote": "凿离碓，辟沫水之害",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凿离碓，辟沫水之害",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_002",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "工程功能",
   "value_text": "可行舟，有余灌溉",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "此渠皆可行舟，有余则用溉浸",
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
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "此渠皆可行舟，有余则用溉浸",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_003",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "灌溉效益",
   "value_text": "百姓飨其利",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "百姓飨其利",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "百姓飨其利",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_004",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "灌溉规模",
   "value_text": "所过引水，以万亿计",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "以万亿计，然莫足数也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以万亿计，然莫足数也",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_005",
   "subject": "person:DUJ__p01",
   "predicate": "官职",
   "value_text": "蜀守李冰",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "蜀守冰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀守冰",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_006",
   "subject": "event:ev_dujiangyan_llm_01",
   "predicate": "工程性质",
   "value_text": "水利工程，非军事",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "lijian",
   "source": "shiji_hequq",
   "quote": "凿离碓，辟沫水之害",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "后世学者多认为此为水利工程",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凿离碓，辟沫水之害",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_007",
   "subject": "event:ev_dujiangyan_llm_01",
   "predicate": "工程时间",
   "value_text": "具体年代不详",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "lijian",
   "source": "shiji_hequq",
   "quote": "蜀守冰凿离碓",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体年份",
   "dims": [
    6
   ],
   "lead": {
    "where": "shiji_hequq",
    "skills": [
     "历史考证"
    ],
    "accept": "需进一步考证具体年代"
   },
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀守冰凿离碓",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_008",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "二江名称",
   "value_text": "二江具体名称未载",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "穿二江成都之中",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载二江名称",
   "dims": [
    6
   ],
   "lead": {
    "where": "shiji_hequq",
    "skills": [
     "地理考证"
    ],
    "accept": "需进一步考证二江名称"
   },
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "穿二江成都之中",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_009",
   "subject": "event:ev_dujiangyan_llm_01",
   "predicate": "工程难度",
   "value_text": "凿山开渠，工程艰巨",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "lijian",
   "source": "shiji_hequq",
   "quote": "凿离碓",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学者推测工程难度大",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凿离碓",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_010",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "灌溉范围",
   "value_text": "灌溉范围广大",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "以万亿计",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者认为灌溉面积巨大",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以万亿计",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_011",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "航运功能",
   "value_text": "可行舟，通航运",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "此渠皆可行舟",
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
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "此渠皆可行舟",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DUJ_012",
   "subject": "event:ev_dujiangyan_llm_02",
   "predicate": "农业效益",
   "value_text": "百姓受益，农业发达",
   "time": {
    "era_text": "秦昭襄王时期",
    "start": "-256"
   },
   "place": "chengdu",
   "source": "shiji_hequq",
   "quote": "百姓飨其利",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "学者认为农业受益显著",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "百姓飨其利",
   "source_text": "于蜀，蜀守冰凿离碓，辟沫水之害，穿二江成都之中。此渠皆可行舟，有余则用溉浸，百姓飨其利。至于所过，往往引其水益用溉田畴之渠，以万亿计，然莫足数也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DUJ_007",
  "DUJ_008"
 ],
 "events": [
  {
   "id": "ev_dujiangyan_llm_01",
   "subject": "event:ev_dujiangyan_llm_01",
   "year": -256,
   "era": "秦昭襄王时期",
   "title": "凿离碓",
   "kind": "建置",
   "text": "李冰凿离碓，辟沫水之害",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dujiangyan_llm_02",
   "subject": "event:ev_dujiangyan_llm_02",
   "year": -256,
   "era": "秦昭襄王时期",
   "title": "穿二江",
   "kind": "建置",
   "text": "穿二江成都之中，可行舟灌溉",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "lijian",
   "to": "chengdu",
   "type": "battle",
   "label": "凿离碓穿二江",
   "_source_idx": 0,
   "_source_name": "《史记·河渠书》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "lijian",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "chengdu",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "chengdu",
   "name": "成都",
   "lon": 104.07,
   "lat": 30.66,
   "region": "chuan_gui"
  }
 ],
 "control_years": [
  -200,
  -100
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
        103.07,
        29.66
       ],
       [
        103.07,
        31.66
       ],
       [
        105.07,
        31.66
       ],
       [
        105.07,
        29.66
       ],
       [
        103.07,
        29.66
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
         103.07,
         31.66
        ],
        [
         103.07,
         29.66
        ],
        [
         105.07,
         29.66
        ],
        [
         105.07,
         31.66
        ],
        [
         103.07,
         31.66
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   103.07,
   29.66,
   105.07,
   31.66
  ]
 }
};
