// 本文件由 tools/build.py 自动生成（切片 ningxia_xixia），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ningxia_xixia"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ningxia_xixia"] = {
 "meta": {
  "kind": "dynasty",
  "region": "guangzhong",
  "province": "ningxia",
  "title": "西夏·兴庆府（宋辽夏之际）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "xiazhou",
  "dossier_event": "event:ev_ningxia_xixia_01",
  "vocab_pack": "inline:ningxia_xixia",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "song",
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
    "note": "西夏·兴庆府（宋辽夏之际）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "西夏·兴庆府（宋辽夏之际）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "西夏·兴庆府（宋辽夏之际）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "西夏·兴庆府（宋辽夏之际）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=ningxia_xixia",
  "key": "ningxia_xixia",
  "scene_id": "ningxia_xixia"
 },
 "sources": [
  {
   "id": "songshi_xixia",
   "title": "《宋史·夏国传》与西夏",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "xiazhou",
   "name": "夏州",
   "type": "city",
   "modern": "今陕西靖边",
   "note": "拓跋思恭镇守之地。坐标据地名志条目（别名 夏州→靖边），标 approx。",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.76,
   "lat": 37.58,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 夏州→靖边）（诚实回填 v0.221）。",
   "elev": 1363
  },
  {
   "id": "xingqingfu",
   "name": "兴庆府",
   "type": "city",
   "modern": "今宁夏银川",
   "note": "西夏都城",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "helan",
   "name": "贺兰山",
   "type": "region",
   "modern": "今宁夏贺兰山",
   "note": "兴庆府屏障",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "NIN__p01",
   "name": "李元昊",
   "role": "西夏开国皇帝",
   "note": "称帝建大夏，都兴庆府",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "NIN__p02",
   "name": "拓跋思恭",
   "role": "定难军节度使",
   "note": "唐末镇夏州，赐姓李",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "NIN_001",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "称帝",
   "value_text": "李元昊称帝，国号大夏",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "显道元年称帝，国号大夏",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "显道元年称帝，国号大夏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_002",
   "subject": "event:ev_ningxia_xixia_02",
   "predicate": "定都",
   "value_text": "都兴庆府，倚贺兰为屏",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "都兴庆府，倚贺兰为屏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都兴庆府，倚贺兰为屏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_003",
   "subject": "person:NIN__p01",
   "predicate": "创建西夏文",
   "value_text": "创西夏文，崇佛译经",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "创西夏文，崇佛译经",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "创西夏文，崇佛译经",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_004",
   "subject": "person:NIN__p02",
   "predicate": "赐姓",
   "value_text": "拓跋思恭赐姓李",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xiazhou",
   "source": "songshi_xixia",
   "quote": "拓跋思恭镇夏州，赐姓李",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "拓跋思恭镇夏州，赐姓李",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_005",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "与宋辽鼎峙",
   "value_text": "与宋、辽鼎峙",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "与宋、辽鼎峙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与宋、辽鼎峙",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_006",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "国祚",
   "value_text": "屹立西陲二百年",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "屹立西陲二百年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屹立西陲二百年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_007",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "称帝时间",
   "value_text": "显道元年称帝",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "显道元年称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "显道元年称帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_008",
   "subject": "event:ev_ningxia_xixia_02",
   "predicate": "都城位置",
   "value_text": "兴庆府今银川",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "都兴庆府（今银川）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都兴庆府（今银川）",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_009",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "国号",
   "value_text": "国号大夏",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "国号大夏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "国号大夏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_010",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "疆域",
   "value_text": "雄据河西",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "雄据河西",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雄据河西",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_011",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "世系",
   "value_text": "拓跋思恭后裔",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xiazhou",
   "source": "songshi_xixia",
   "quote": "拓跋思恭镇夏州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "拓跋思恭镇夏州",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_012",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "文化",
   "value_text": "创西夏文，崇佛译经",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "创西夏文，崇佛译经",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "创西夏文，崇佛译经",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_013",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "存续",
   "value_text": "二百年",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "屹立西陲二百年",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家估算",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屹立西陲二百年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_014",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "都城防御",
   "value_text": "贺兰山为屏障",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "helan",
   "source": "songshi_xixia",
   "quote": "倚贺兰为屏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "倚贺兰为屏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NIN_015",
   "subject": "event:ev_ningxia_xixia_01",
   "predicate": "史料缺失",
   "value_text": "西夏史料多佚",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "史料多佚",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "待考",
   "dims": [
    6
   ],
   "lead": {
    "where": "西夏故地",
    "skills": [
     "文献考据"
    ],
    "accept": "新出土史料"
   },
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史料多佚",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ningxia_xixia_DIM2",
   "subject": "技术:城防营造",
   "predicate": "技术维度",
   "value_text": "西夏·兴庆府（宋辽夏之际） 的史料涉及城防营造（「\"predicate\": \"都城防御\", \"value_text」），补标技术维度（推断）。",
   "time": {
    "era_text": "显道元年",
    "start": "1038"
   },
   "place": "xingqingfu",
   "source": "songshi_xixia",
   "quote": "「\"predicate\": \"都城防御\", \"value_text」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "NIN_015"
 ],
 "events": [
  {
   "id": "ev_ningxia_xixia_01",
   "subject": "event:ev_ningxia_xixia_01",
   "year": 1038,
   "era": "显道元年",
   "title": "李元昊称帝",
   "kind": "建置",
   "text": "李元昊称帝，国号大夏，都兴庆府",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ningxia_xixia_02",
   "subject": "event:ev_ningxia_xixia_02",
   "year": 1038,
   "era": "显道元年",
   "title": "定都兴庆府",
   "kind": "建置",
   "text": "定都兴庆府，倚贺兰为屏",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "xiazhou",
   "to": "xingqingfu",
   "type": "military",
   "label": "拓跋氏迁都路线",
   "_source_idx": 0,
   "_source_name": "《宋史·夏国传》与西夏",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
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
        107.76,
        36.58
       ],
       [
        107.76,
        38.58
       ],
       [
        109.76,
        38.58
       ],
       [
        109.76,
        36.58
       ],
       [
        107.76,
        36.58
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        107.76,
        38.58
       ],
       [
        107.76,
        37.844
       ],
       [
        107.843,
        37.829
       ],
       [
        107.885,
        37.808
       ],
       [
        107.982,
        37.787
       ],
       [
        107.993,
        37.735
       ],
       [
        108.026,
        37.696
       ],
       [
        108.013,
        37.669
       ],
       [
        108.025,
        37.65
       ],
       [
        108.055,
        37.652
       ],
       [
        108.134,
        37.622
       ],
       [
        108.194,
        37.638
       ],
       [
        108.206,
        37.656
       ],
       [
        108.246,
        37.666
       ],
       [
        108.293,
        37.657
       ],
       [
        108.301,
        37.641
       ],
       [
        108.422,
        37.649
       ],
       [
        108.485,
        37.678
       ],
       [
        108.533,
        37.691
       ],
       [
        108.628,
        37.652
       ],
       [
        108.7,
        37.67
       ],
       [
        108.721,
        37.684
       ],
       [
        108.778,
        37.684
       ],
       [
        108.792,
        37.7
       ],
       [
        108.785,
        37.765
       ],
       [
        108.8,
        37.784
       ],
       [
        108.792,
        37.873
       ],
       [
        108.798,
        37.934
       ],
       [
        108.827,
        37.989
       ],
       [
        108.798,
        38.048
       ],
       [
        108.831,
        38.05
       ],
       [
        108.883,
        38.014
       ],
       [
        108.894,
        37.978
       ],
       [
        108.935,
        37.923
       ],
       [
        108.974,
        37.932
       ],
       [
        108.983,
        37.964
       ],
       [
        109.019,
        37.972
       ],
       [
        109.038,
        38.022
       ],
       [
        109.07,
        38.023
       ],
       [
        109.051,
        38.055
       ],
       [
        109.069,
        38.091
       ],
       [
        108.964,
        38.155
       ],
       [
        108.939,
        38.208
       ],
       [
        108.976,
        38.245
       ],
       [
        108.962,
        38.265
       ],
       [
        109.008,
        38.359
       ],
       [
        109.051,
        38.385
       ],
       [
        109.054,
        38.434
       ],
       [
        109.129,
        38.48
       ],
       [
        109.176,
        38.519
       ],
       [
        109.197,
        38.553
       ],
       [
        109.228,
        38.58
       ],
       [
        107.76,
        38.58
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.76,
         36.58
        ],
        [
         109.76,
         38.58
        ],
        [
         109.228,
         38.58
        ],
        [
         109.197,
         38.553
        ],
        [
         109.176,
         38.519
        ],
        [
         109.129,
         38.48
        ],
        [
         109.054,
         38.434
        ],
        [
         109.051,
         38.385
        ],
        [
         109.008,
         38.359
        ],
        [
         108.962,
         38.265
        ],
        [
         108.976,
         38.245
        ],
        [
         108.939,
         38.208
        ],
        [
         108.964,
         38.155
        ],
        [
         109.069,
         38.091
        ],
        [
         109.051,
         38.055
        ],
        [
         109.07,
         38.023
        ],
        [
         109.038,
         38.022
        ],
        [
         109.019,
         37.972
        ],
        [
         108.983,
         37.964
        ],
        [
         108.974,
         37.932
        ],
        [
         108.935,
         37.923
        ],
        [
         108.894,
         37.978
        ],
        [
         108.883,
         38.014
        ],
        [
         108.831,
         38.05
        ],
        [
         108.798,
         38.048
        ],
        [
         108.827,
         37.989
        ],
        [
         108.798,
         37.934
        ],
        [
         108.792,
         37.873
        ],
        [
         108.8,
         37.784
        ],
        [
         108.785,
         37.765
        ],
        [
         108.792,
         37.7
        ],
        [
         108.778,
         37.684
        ],
        [
         108.721,
         37.684
        ],
        [
         108.7,
         37.67
        ],
        [
         108.628,
         37.652
        ],
        [
         108.533,
         37.691
        ],
        [
         108.485,
         37.678
        ],
        [
         108.422,
         37.649
        ],
        [
         108.301,
         37.641
        ],
        [
         108.293,
         37.657
        ],
        [
         108.246,
         37.666
        ],
        [
         108.206,
         37.656
        ],
        [
         108.194,
         37.638
        ],
        [
         108.134,
         37.622
        ],
        [
         108.055,
         37.652
        ],
        [
         108.025,
         37.65
        ],
        [
         108.013,
         37.669
        ],
        [
         108.026,
         37.696
        ],
        [
         107.993,
         37.735
        ],
        [
         107.982,
         37.787
        ],
        [
         107.885,
         37.808
        ],
        [
         107.843,
         37.829
        ],
        [
         107.76,
         37.844
        ],
        [
         107.76,
         36.799
        ],
        [
         107.768,
         36.793
        ],
        [
         107.867,
         36.767
        ],
        [
         107.907,
         36.75
        ],
        [
         107.914,
         36.721
        ],
        [
         107.941,
         36.695
        ],
        [
         107.939,
         36.656
        ],
        [
         108.007,
         36.683
        ],
        [
         108.023,
         36.648
        ],
        [
         108.002,
         36.639
        ],
        [
         108.061,
         36.592
        ],
        [
         108.08,
         36.614
        ],
        [
         108.093,
         36.587
        ],
        [
         108.115,
         36.58
        ],
        [
         108.172,
         36.58
        ],
        [
         108.198,
         36.63
        ],
        [
         108.223,
         36.631
        ],
        [
         108.205,
         36.607
        ],
        [
         108.205,
         36.607
        ],
        [
         108.21,
         36.58
        ],
        [
         109.76,
         36.58
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
         107.76,
         36.58
        ],
        [
         108.21,
         36.58
        ],
        [
         108.205,
         36.607
        ],
        [
         108.205,
         36.607
        ],
        [
         108.223,
         36.631
        ],
        [
         108.198,
         36.63
        ],
        [
         108.172,
         36.58
        ],
        [
         108.115,
         36.58
        ],
        [
         108.093,
         36.587
        ],
        [
         108.08,
         36.614
        ],
        [
         108.061,
         36.592
        ],
        [
         108.002,
         36.639
        ],
        [
         108.023,
         36.648
        ],
        [
         108.007,
         36.683
        ],
        [
         107.939,
         36.656
        ],
        [
         107.941,
         36.695
        ],
        [
         107.914,
         36.721
        ],
        [
         107.907,
         36.75
        ],
        [
         107.867,
         36.767
        ],
        [
         107.768,
         36.793
        ],
        [
         107.76,
         36.799
        ],
        [
         107.76,
         36.58
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
   107.76,
   36.58,
   109.76,
   38.58
  ]
 }
};
