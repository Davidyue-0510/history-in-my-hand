// 本文件由 tools/build.py 自动生成（切片 yunnan_dali），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yunnan_dali"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yunnan_dali"] = {
 "meta": {
  "kind": "dynasty",
  "region": "guangzhong",
  "province": "yunnan",
  "title": "宋·大理国（宋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "yangjumie",
  "dossier_event": "event:ev_yunnan_dali_01",
  "vocab_pack": "inline:yunnan_dali",
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
    "note": "宋·大理国（宋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·大理国（宋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·大理国（宋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·大理国（宋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=yunnan_dali",
  "key": "yunnan_dali",
  "scene_id": "yunnan_dali"
 },
 "sources": [
  {
   "id": "dali_guo",
   "title": "《大理国史》与段氏",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "郭松年",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yangjumie",
   "name": "羊苴咩城",
   "type": "city",
   "modern": "今云南大理",
   "note": "大理国都城。坐标据地名志条目（别名 羊苴咩城→大理），标 approx。",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 100.267,
   "lat": 25.606,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 羊苴咩城→大理）（诚实回填 v0.221）。",
   "elev": 2250
  },
  {
   "id": "dali",
   "name": "大理",
   "type": "region",
   "modern": "今云南大理",
   "note": "大理国核心区域",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "jinsha",
   "name": "金沙江",
   "type": "river",
   "modern": "今金沙江",
   "note": "渡江灭大理",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
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
   "name": "段思平",
   "role": "大理国开国君主",
   "note": "建立大理国",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "YUN__p02",
   "name": "忽必烈",
   "role": "元世祖",
   "note": "率军灭大理",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "YUN_001",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "建国",
   "value_text": "段思平建大理国",
   "time": {
    "era_text": "后晋天福二年",
    "start": "937"
   },
   "place": "yangjumie",
   "source": "dali_guo",
   "quote": "段思平建大理国",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "段思平建大理国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_002",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "都城",
   "value_text": "都羊苴咩城",
   "time": {
    "era_text": "后晋天福二年",
    "start": "937"
   },
   "place": "yangjumie",
   "source": "dali_guo",
   "quote": "都羊苴咩城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都羊苴咩城",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_003",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "传位",
   "value_text": "传二十二主",
   "time": {
    "era_text": "大理国时期",
    "start": "937"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "传二十二主",
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
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "传二十二主",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_004",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "与宋关系",
   "value_text": "与宋通好，称臣纳贡",
   "time": {
    "era_text": "宋代",
    "start": "960"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "与宋通好，累世称臣纳贡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与宋通好，累世称臣纳贡",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_005",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "宗教",
   "value_text": "崇佛，寺塔林立",
   "time": {
    "era_text": "大理国时期",
    "start": "937"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "崇佛，寺塔林立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "崇佛，寺塔林立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_006",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "美誉",
   "value_text": "有妙香国之誉",
   "time": {
    "era_text": "大理国时期",
    "start": "937"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "有妙香国之誉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "有妙香国之誉",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_007",
   "subject": "event:ev_yunnan_dali_01",
   "predicate": "贸易",
   "value_text": "茶马古道通吐蕃中原",
   "time": {
    "era_text": "大理国时期",
    "start": "937"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "茶马古道通吐蕃、中原",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "茶马古道通吐蕃、中原",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_008",
   "subject": "event:ev_yunnan_dali_02",
   "predicate": "灭国",
   "value_text": "元灭大理，归元",
   "time": {
    "era_text": "元宪宗三年",
    "start": "1253"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "大理归元",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大理归元",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_009",
   "subject": "event:ev_yunnan_dali_02",
   "predicate": "进军路线",
   "value_text": "革囊渡金沙江",
   "time": {
    "era_text": "元宪宗三年",
    "start": "1253"
   },
   "place": "jinsha",
   "source": "dali_guo",
   "quote": "革囊渡金沙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "革囊渡金沙",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_010",
   "subject": "event:ev_yunnan_dali_02",
   "predicate": "灭亡原因",
   "value_text": "蒙古军力强盛",
   "time": {
    "era_text": "元宪宗三年",
    "start": "1253"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "元世祖革囊渡金沙",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "推测",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元世祖革囊渡金沙",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_011",
   "subject": "event:ev_yunnan_dali_02",
   "predicate": "灭亡时间",
   "value_text": "具体年份存疑",
   "time": {
    "era_text": "元宪宗三年",
    "start": "1253"
   },
   "place": "dali",
   "source": "dali_guo",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    6
   ],
   "lead": {
    "where": "大理国末期",
    "skills": [
     "考古",
     "文献"
    ],
    "accept": "精确年份"
   },
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YUN_011"
 ],
 "events": [
  {
   "id": "ev_yunnan_dali_01",
   "subject": "event:ev_yunnan_dali_01",
   "year": 937,
   "era": "后晋天福二年",
   "title": "段思平建大理国",
   "kind": "建置",
   "text": "段思平建大理国，都羊苴咩城。",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_dali_02",
   "subject": "event:ev_yunnan_dali_02",
   "year": 1253,
   "era": "元宪宗三年",
   "title": "蒙古灭大理",
   "kind": "战事",
   "text": "忽必烈革囊渡金沙，灭大理。",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jinsha",
   "to": "yangjumie",
   "type": "military",
   "label": "蒙古军渡江攻大理",
   "_source_idx": 0,
   "_source_name": "《大理国史》与段氏",
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
