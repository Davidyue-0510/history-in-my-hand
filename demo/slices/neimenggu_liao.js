// 本文件由 tools/build.py 自动生成（切片 neimenggu_liao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["neimenggu_liao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["neimenggu_liao"] = {
 "meta": {
  "kind": "dynasty",
  "region": "huabei",
  "province": "neimenggu",
  "title": "契丹辽·上京临潢（辽）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "shangjing",
  "dossier_event": "event:ev_neimenggu_liao_01",
  "vocab_pack": "inline:neimenggu_liao",
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
    "note": "契丹辽·上京临潢（辽）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "契丹辽·上京临潢（辽）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "契丹辽·上京临潢（辽）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "契丹辽·上京临潢（辽）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=neimenggu_liao",
  "key": "neimenggu_liao",
  "scene_id": "neimenggu_liao"
 },
 "sources": [
  {
   "id": "liaoshi_shangjing",
   "title": "《辽史》与上京临潢府",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱",
   "period": "辽",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shangjing",
   "name": "上京临潢府",
   "type": "city",
   "modern": "今内蒙古赤峰市巴林左旗",
   "note": "辽代都城。坐标据地名志条目（别名 上京临潢府→巴林左旗），标 approx。",
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.39,
   "lat": 43.98,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 上京临潢府→巴林左旗）（诚实回填 v0.221）。",
   "elev": 569
  },
  {
   "id": "huangshui",
   "name": "潢水",
   "type": "region",
   "modern": "今内蒙古西拉木伦河",
   "note": "契丹发源之地",
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "NEI__p01",
   "name": "耶律阿保机",
   "role": "契丹迭剌部首领，后称帝",
   "note": "契丹开国君主",
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "NEI_001",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "建国时间",
   "value_text": "916年称帝建契丹国",
   "time": {
    "era_text": "916",
    "start": "916-01-01",
    "end": "916-12-31",
    "gregorian_year": 916
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "916 称帝，国号契丹",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "916 称帝，国号契丹",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_002",
   "subject": "event:ev_neimenggu_liao_02",
   "predicate": "建都",
   "value_text": "建上京临潢府于潢水",
   "time": {
    "era_text": "神册三年",
    "start": "918-01-01",
    "end": "918-12-31",
    "gregorian_year": 918
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "于潢水之滨建上京临潢府",
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
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于潢水之滨建上京临潢府",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_003",
   "subject": "person:NEI__p01",
   "predicate": "称号",
   "value_text": "称天皇帝",
   "time": {
    "era_text": "916",
    "start": "916-01-01",
    "end": "916-12-31",
    "gregorian_year": 916
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "称天皇帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "称天皇帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_004",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "国号变更",
   "value_text": "后改国号为辽",
   "time": {
    "era_text": "后",
    "start": "0947"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "后改辽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "后改辽",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_005",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "文字创制",
   "value_text": "创契丹大字",
   "time": {
    "era_text": "建国后",
    "start": "0920"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "创契丹大字",
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
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "创契丹大字",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_006",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "官制",
   "value_text": "行南北面官制",
   "time": {
    "era_text": "建国后",
    "start": "0920"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "行南北面官",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "行南北面官",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_007",
   "subject": "place:shangjing",
   "predicate": "地理位置",
   "value_text": "位于潢水之滨",
   "time": {
    "era_text": "建城时",
    "start": "0918"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "潢水之滨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "潢水之滨",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_008",
   "subject": "place:shangjing",
   "predicate": "现代位置",
   "value_text": "今赤峰一带",
   "time": {
    "era_text": "现代",
    "start": "2024"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "今赤峰一带",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "今赤峰一带",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_009",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "政治格局",
   "value_text": "与五代北宋鼎峙",
   "time": {
    "era_text": "10-12世纪",
    "start": "0916"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "与五代、北宋鼎峙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与五代、北宋鼎峙",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_010",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "部族统一",
   "value_text": "并诸部",
   "time": {
    "era_text": "建国前",
    "start": "0900"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "并诸部",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "并诸部",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_011",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "部族背景",
   "value_text": "契丹迭剌部雄于漠北",
   "time": {
    "era_text": "唐衰",
    "start": "0900"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "契丹迭剌部雄于漠北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "契丹迭剌部雄于漠北",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "NEI_012",
   "subject": "event:ev_neimenggu_liao_01",
   "predicate": "建国时间考证",
   "value_text": "称帝年份有争议",
   "time": {
    "era_text": "现代",
    "start": "2024"
   },
   "place": "shangjing",
   "source": "liaoshi_shangjing",
   "quote": "916 称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "辽史与资治通鉴",
    "skills": [
     "考据"
    ],
    "accept": "916年说"
   },
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "916 称帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "NEI_012"
 ],
 "events": [
  {
   "id": "ev_neimenggu_liao_01",
   "subject": "event:ev_neimenggu_liao_01",
   "year": 916,
   "era": "神册元年",
   "title": "阿保机称帝建契丹",
   "kind": "建置",
   "text": "耶律阿保机称天皇帝，建契丹国",
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_neimenggu_liao_02",
   "subject": "event:ev_neimenggu_liao_02",
   "year": 918,
   "era": "神册三年",
   "title": "建上京临潢府",
   "kind": "建置",
   "text": "于潢水之滨建上京临潢府",
   "_source_idx": 0,
   "_source_name": "《辽史》与上京临潢府",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
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
        118.39,
        42.98
       ],
       [
        118.39,
        44.98
       ],
       [
        120.39,
        44.98
       ],
       [
        120.39,
        42.98
       ],
       [
        118.39,
        42.98
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
        118.39,
        44.98
       ],
       [
        118.39,
        42.98
       ],
       [
        120.39,
        42.98
       ],
       [
        120.39,
        44.98
       ],
       [
        118.39,
        44.98
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.39,
       43.275
      ],
      [
       118.471,
       43.276
      ],
      [
       118.911,
       43.237
      ],
      [
       119.22,
       43.229
      ],
      [
       119.484,
       43.262
      ],
      [
       120.39,
       43.377
      ]
     ]
    },
    "n": "Xar Moron"
   }
  ],
  "lakes": [],
  "_bbox": [
   118.39,
   42.98,
   120.39,
   44.98
  ]
 }
};
