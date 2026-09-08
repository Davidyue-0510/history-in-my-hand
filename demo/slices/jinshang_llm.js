// 本文件由 tools/build.py 自动生成（切片 jinshang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jinshang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jinshang_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "exchange",
  "province": "shanxi",
  "title": "明清晋商与票号",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qixian",
  "dossier_event": "event:ev_jinshang_llm_01",
  "vocab_pack": "inline:jinshang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing_modern",
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
    "note": "明清晋商与票号：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明清晋商与票号：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明清晋商与票号：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明清晋商与票号：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   6
  ],
  "page": "county.html?scene=jinshang_llm",
  "key": "jinshang_llm",
  "scene_id": "jinshang_llm"
 },
 "sources": [
  {
   "id": "jinshang_zhi_llm",
   "title": "山西通志·商贾",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "山西通志",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qixian",
   "name": "祁县",
   "type": "city",
   "modern": "今中国山西省祁县",
   "note": "晋商票号重镇",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.34,
   "lat": 37.36,
   "geo_note": "王珪故里，今山西祁县",
   "elev": 772
  },
  {
   "id": "taigu",
   "name": "太谷",
   "type": "city",
   "modern": "今中国山西省太谷区",
   "note": "晋商票号重镇",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.55,
   "lat": 37.42,
   "geo_unresolved": true,
   "elev": 828
  },
  {
   "id": "pingyao",
   "name": "平遥",
   "type": "city",
   "modern": "今中国山西省平遥县",
   "note": "票号发源地",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.18,
   "lat": 37.2,
   "geo_unresolved": true,
   "elev": 787
  },
  {
   "id": "menggu",
   "name": "蒙古",
   "type": "region",
   "modern": "今蒙古国及中国内蒙古",
   "note": "晋商贸易区域",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIN__p01",
   "name": "乔致庸",
   "role": "晋商巨贾",
   "note": "乔家代表人物",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "JIN__p02",
   "name": "渠本翘",
   "role": "票号经理",
   "note": "渠家票号经营者",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "JIN__p03",
   "name": "曹三喜",
   "role": "晋商富商",
   "note": "曹家商业创始人",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "JIN_001",
   "subject": "event:ev_jinshang_llm_01",
   "predicate": "兴起原因",
   "value_text": "盐业茶马起家",
   "time": {
    "era_text": "明中叶",
    "start": "1550"
   },
   "place": "qixian",
   "source": "jinshang_zhi_llm",
   "quote": "以盐业茶马起家",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以盐业茶马起家",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_002",
   "subject": "event:ev_jinshang_llm_02",
   "predicate": "创立时间",
   "value_text": "道光三年日升昌创立",
   "time": {
    "era_text": "清道光三年",
    "start": "1823-01-01",
    "end": "1823-12-31",
    "gregorian_year": 1823
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "平遥日升昌票号成立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平遥日升昌票号成立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_003",
   "subject": "event:ev_jinshang_llm_03",
   "predicate": "衰亡原因",
   "value_text": "清亡票号衰",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "清亡票号衰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清亡票号衰",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_004",
   "subject": "person:JIN__p01",
   "predicate": "经营特点",
   "value_text": "重信义联号经营",
   "time": {
    "era_text": "清",
    "start": "1800"
   },
   "place": "qixian",
   "source": "jinshang_zhi_llm",
   "quote": "重信义联号经营",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "重信义联号经营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_005",
   "subject": "person:JIN__p02",
   "predicate": "经营特点",
   "value_text": "票号汇通天下",
   "time": {
    "era_text": "清",
    "start": "1850"
   },
   "place": "taigu",
   "source": "jinshang_zhi_llm",
   "quote": "汇通天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汇通天下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_006",
   "subject": "person:JIN__p03",
   "predicate": "经营特点",
   "value_text": "资本雄厚纵横南北",
   "time": {
    "era_text": "清",
    "start": "1800"
   },
   "place": "taigu",
   "source": "jinshang_zhi_llm",
   "quote": "资本雄厚纵横南北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "资本雄厚纵横南北",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_007",
   "subject": "place:pingyao",
   "predicate": "金融地位",
   "value_text": "执晚清金融牛耳",
   "time": {
    "era_text": "晚清",
    "start": "1850"
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "执晚清金融之牛耳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "执晚清金融之牛耳",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_008",
   "subject": "place:qixian",
   "predicate": "商业地位",
   "value_text": "晋商票号重镇",
   "time": {
    "era_text": "清",
    "start": "1800"
   },
   "place": "qixian",
   "source": "jinshang_zhi_llm",
   "quote": "祁县票号汇通天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "祁县票号汇通天下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_009",
   "subject": "place:taigu",
   "predicate": "商业地位",
   "value_text": "晋商票号重镇",
   "time": {
    "era_text": "清",
    "start": "1800"
   },
   "place": "taigu",
   "source": "jinshang_zhi_llm",
   "quote": "太谷票号汇通天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "太谷票号汇通天下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_010",
   "subject": "place:menggu",
   "predicate": "贸易范围",
   "value_text": "足迹远及俄蒙",
   "time": {
    "era_text": "清",
    "start": "1800"
   },
   "place": "menggu",
   "source": "jinshang_zhi_llm",
   "quote": "足迹远及俄蒙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    4
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "足迹远及俄蒙",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_011",
   "subject": "event:ev_jinshang_llm_02",
   "predicate": "票号起源",
   "value_text": "学界认为源于账局",
   "time": {
    "era_text": "清",
    "start": "1823"
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "学界认为源于账局",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "学界认为源于账局",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_012",
   "subject": "event:ev_jinshang_llm_03",
   "predicate": "衰亡原因",
   "value_text": "缺乏官方支持",
   "time": {
    "era_text": "民国",
    "start": "1912"
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "缺乏官方支持",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "缺乏官方支持",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_013",
   "subject": "event:ev_jinshang_llm_03",
   "predicate": "衰亡原因",
   "value_text": "现代银行竞争",
   "time": {
    "era_text": "民国",
    "start": "1912"
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "现代银行竞争",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "现代银行竞争",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIN_014",
   "subject": "event:ev_jinshang_llm_03",
   "predicate": "衰亡原因",
   "value_text": "具体细节待考",
   "time": {
    "era_text": "民国",
    "start": "1912"
   },
   "place": "pingyao",
   "source": "jinshang_zhi_llm",
   "quote": "具体细节待考",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "山西票号档案",
    "skills": [
     "历史考证"
    ],
    "accept": "补充史料"
   },
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "具体细节待考",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_jinshang_llm_03|衰亡原因",
   "subject": "event:ev_jinshang_llm_03",
   "predicate": "衰亡原因",
   "kind": "record_vs_scholarship",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "JIN_003",
    "JIN_012",
    "JIN_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "JIN_014"
 ],
 "events": [
  {
   "id": "ev_jinshang_llm_01",
   "subject": "event:ev_jinshang_llm_01",
   "year": 1550,
   "era": "明中叶",
   "title": "晋商兴起",
   "kind": "其他",
   "text": "山西商人以盐业茶马起家",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jinshang_llm_02",
   "subject": "event:ev_jinshang_llm_02",
   "year": 1823,
   "era": "清道光三年",
   "title": "票号创立",
   "kind": "建置",
   "text": "平遥日升昌票号成立",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jinshang_llm_03",
   "subject": "event:ev_jinshang_llm_03",
   "year": 1912,
   "era": "民国元年",
   "title": "票号衰亡",
   "kind": "其他",
   "text": "清亡票号衰败",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "pingyao",
   "to": "menggu",
   "type": "military",
   "label": "晋商贸易路线",
   "_source_idx": 0,
   "_source_name": "山西通志·商贾",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "qixian",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "qixian",
   "name": "祁县",
   "lon": 112.34,
   "lat": 37.36,
   "region": "exchange"
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
        111.18,
        36.2
       ],
       [
        111.18,
        38.42
       ],
       [
        113.55,
        38.42
       ],
       [
        113.55,
        36.2
       ],
       [
        111.18,
        36.2
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
         113.55,
         38.42
        ],
        [
         113.54,
         38.42
        ],
        [
         113.538,
         38.418
        ],
        [
         113.525,
         38.383
        ],
        [
         113.55,
         38.353
        ],
        [
         113.55,
         38.301
        ],
        [
         113.545,
         38.271
        ],
        [
         113.55,
         38.264
        ],
        [
         113.55,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.55,
         36.591
        ],
        [
         113.55,
         38.42
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         111.18,
         38.42
        ],
        [
         111.18,
         36.2
        ],
        [
         113.55,
         36.2
        ],
        [
         113.55,
         36.591
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.55,
         36.753
        ],
        [
         113.55,
         38.264
        ],
        [
         113.545,
         38.271
        ],
        [
         113.55,
         38.301
        ],
        [
         113.55,
         38.353
        ],
        [
         113.525,
         38.383
        ],
        [
         113.538,
         38.418
        ],
        [
         113.54,
         38.42
        ],
        [
         111.18,
         38.42
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   111.18,
   36.2,
   113.55,
   38.42
  ]
 }
};
