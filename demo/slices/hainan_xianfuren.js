// 本文件由 tools/build.py 自动生成（切片 hainan_xianfuren），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hainan_xianfuren"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hainan_xianfuren"] = {
 "meta": {
  "kind": "court",
  "region": "jiangnan",
  "province": "hainan",
  "title": "隋·冼夫人抚定岭南（隋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "gaoliang",
  "dossier_event": "event:ev_hainan_xianfuren_01",
  "vocab_pack": "inline:hainan_xianfuren",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "sui",
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
    "note": "隋·冼夫人抚定岭南（隋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "隋·冼夫人抚定岭南（隋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "隋·冼夫人抚定岭南（隋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "隋·冼夫人抚定岭南（隋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=hainan_xianfuren",
  "key": "hainan_xianfuren",
  "scene_id": "hainan_xianfuren"
 },
 "sources": [
  {
   "id": "suishu_xian",
   "title": "《隋书·谯国夫人传》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "魏徵",
   "period": "隋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "gaoliang",
   "name": "高凉",
   "type": "region",
   "modern": "今中国广东阳江一带",
   "note": "冼氏世居之地。坐标据地名志条目（别名 高凉→阳江），标 approx。",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 111.98,
   "lat": 21.86,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 高凉→阳江）（诚实回填 v0.221）。",
   "elev": 12
  },
  {
   "id": "hainan",
   "name": "海南",
   "type": "region",
   "modern": "今中国海南省",
   "note": "岭南之外，跨据之地",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "daner",
   "name": "儋耳",
   "type": "region",
   "modern": "今中国海南省儋州市",
   "note": "海南归附之洞",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HAI__p01",
   "name": "冼夫人",
   "role": "俚人首领，岭南圣母",
   "note": "幼贤明，多筹略，能行军用师",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 5
  },
  {
   "id": "HAI__p02",
   "name": "冯魂",
   "role": "冼夫人之孙",
   "note": "奉祖母命迎韦洸",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAI__p03",
   "name": "韦洸",
   "role": "隋将",
   "note": "率隋师南下",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HAI_001",
   "subject": "person:HAI__p01",
   "predicate": "身份",
   "value_text": "世为俚人首领",
   "time": {
    "era_text": "隋前",
    "start": "0589"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "世为俚人首领",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世为俚人首领",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_002",
   "subject": "person:HAI__p01",
   "predicate": "能力",
   "value_text": "幼贤明，多筹略，能行军用师",
   "time": {
    "era_text": "幼年",
    "start": "0540"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "幼贤明，多筹略，能行军用师",
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
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "幼贤明，多筹略，能行军用师",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_003",
   "subject": "event:ev_hainan_xianfuren_01",
   "predicate": "事件",
   "value_text": "陈亡，岭南数郡奉夫人为圣母",
   "time": {
    "era_text": "隋开皇九年",
    "start": "589-01-01",
    "end": "589-12-31",
    "gregorian_year": 589
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "陈亡，岭南数郡奉夫人为圣母",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "陈亡，岭南数郡奉夫人为圣母",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_004",
   "subject": "event:ev_hainan_xianfuren_02",
   "predicate": "归隋",
   "value_text": "夫人审势归隋，遣孙冯魂迎韦洸",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "夫人审势归隋，遣孙冯魂迎韦洸",
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
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夫人审势归隋，遣孙冯魂迎韦洸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_005",
   "subject": "event:ev_hainan_xianfuren_03",
   "predicate": "归附",
   "value_text": "海南儋耳归附者千余洞",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "daner",
   "source": "suishu_xian",
   "quote": "海南儋耳归附者千余洞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "海南儋耳归附者千余洞",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_006",
   "subject": "person:HAI__p01",
   "predicate": "统辖范围",
   "value_text": "跨据高凉、海南",
   "time": {
    "era_text": "陈隋之际",
    "start": "0589"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "跨据高凉、海南",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "跨据高凉、海南",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_007",
   "subject": "person:HAI__p01",
   "predicate": "政治选择",
   "value_text": "审势归隋，避免战乱",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "审势归隋",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "审势归隋",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_008",
   "subject": "event:ev_hainan_xianfuren_02",
   "predicate": "影响",
   "value_text": "岭南遂定",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "岭南遂定",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岭南遂定",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_009",
   "subject": "place:daner",
   "predicate": "归附规模",
   "value_text": "千余洞归附",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "daner",
   "source": "suishu_xian",
   "quote": "归附者千余洞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "归附者千余洞",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_010",
   "subject": "person:HAI__p01",
   "predicate": "军事才能",
   "value_text": "能行军用师，弹压诸越",
   "time": {
    "era_text": "陈隋之际",
    "start": "0589"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "能行军用师，弹压诸越",
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
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "能行军用师，弹压诸越",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_011",
   "subject": "event:ev_hainan_xianfuren_01",
   "predicate": "称号",
   "value_text": "岭南数郡奉为圣母",
   "time": {
    "era_text": "陈亡时",
    "start": "0589"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "奉夫人为圣母",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "奉夫人为圣母",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_012",
   "subject": "person:HAI__p01",
   "predicate": "历史评价",
   "value_text": "贤明多略，保境安民",
   "time": {
    "era_text": "后世",
    "start": "0600"
   },
   "place": "gaoliang",
   "source": "suishu_xian",
   "quote": "贤明多略，保境安民",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "贤明多略，保境安民",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAI_013",
   "subject": "event:ev_hainan_xianfuren_03",
   "predicate": "归附细节",
   "value_text": "具体洞名未载",
   "time": {
    "era_text": "隋开皇十年",
    "start": "590-01-01",
    "end": "590-12-31",
    "gregorian_year": 590
   },
   "place": "daner",
   "source": "suishu_xian",
   "quote": "千余洞",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "海南地方志或族谱",
    "skills": [
     "文献考证",
     "田野调查"
    ],
    "accept": "补充具体归附洞名"
   },
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "千余洞",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HAI_013"
 ],
 "events": [
  {
   "id": "ev_hainan_xianfuren_01",
   "subject": "event:ev_hainan_xianfuren_01",
   "year": 589,
   "era": "隋开皇九年",
   "title": "陈亡岭南奉圣母",
   "kind": "其他",
   "text": "陈亡，岭南数郡奉夫人为圣母",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hainan_xianfuren_02",
   "subject": "event:ev_hainan_xianfuren_02",
   "year": 590,
   "era": "隋开皇十年",
   "title": "冼夫人归隋",
   "kind": "行政",
   "text": "夫人审势归隋，遣孙迎韦洸",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hainan_xianfuren_03",
   "subject": "event:ev_hainan_xianfuren_03",
   "year": 590,
   "era": "隋开皇十年",
   "title": "海南儋耳归附",
   "kind": "行政",
   "text": "海南儋耳归附者千余洞",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "gaoliang",
   "to": "hainan",
   "type": "military",
   "label": "冼氏跨据高凉海南",
   "_source_idx": 0,
   "_source_name": "《隋书·谯国夫人传》",
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       112.782,
       21.772
      ],
      [
       112.761,
       21.733
      ],
      [
       112.713,
       21.698
      ],
      [
       112.733,
       21.67
      ],
      [
       112.742,
       21.618
      ],
      [
       112.771,
       21.582
      ],
      [
       112.79,
       21.602
      ],
      [
       112.801,
       21.695
      ],
      [
       112.813,
       21.712
      ],
      [
       112.863,
       21.753
      ],
      [
       112.839,
       21.765
      ],
      [
       112.782,
       21.772
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       112.559,
       21.675
      ],
      [
       112.525,
       21.623
      ],
      [
       112.546,
       21.619
      ],
      [
       112.644,
       21.64
      ],
      [
       112.648,
       21.71
      ],
      [
       112.559,
       21.675
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.98,
        21.425
       ],
       [
        110.997,
        21.43
       ],
       [
        111.017,
        21.512
       ],
       [
        111.061,
        21.511
       ],
       [
        111.101,
        21.485
       ],
       [
        111.144,
        21.482
       ],
       [
        111.221,
        21.494
       ],
       [
        111.319,
        21.486
       ],
       [
        111.392,
        21.535
       ],
       [
        111.603,
        21.559
       ],
       [
        111.682,
        21.608
       ],
       [
        111.712,
        21.655
       ],
       [
        111.776,
        21.719
       ],
       [
        111.825,
        21.71
       ],
       [
        111.873,
        21.717
       ],
       [
        111.926,
        21.776
       ],
       [
        111.944,
        21.85
       ],
       [
        112.025,
        21.843
       ],
       [
        112.117,
        21.806
       ],
       [
        112.193,
        21.763
       ],
       [
        112.305,
        21.742
       ],
       [
        112.356,
        21.768
       ],
       [
        112.39,
        21.801
       ],
       [
        112.377,
        21.917
       ],
       [
        112.36,
        21.978
       ],
       [
        112.396,
        21.981
       ],
       [
        112.429,
        21.958
       ],
       [
        112.439,
        21.927
       ],
       [
        112.421,
        21.881
       ],
       [
        112.495,
        21.818
       ],
       [
        112.586,
        21.777
       ],
       [
        112.634,
        21.82
       ],
       [
        112.661,
        21.859
       ],
       [
        112.725,
        21.902
       ],
       [
        112.809,
        21.945
       ],
       [
        112.904,
        21.881
       ],
       [
        112.954,
        21.907
       ],
       [
        112.98,
        21.934
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.79,
        21.602
       ],
       [
        112.771,
        21.582
       ],
       [
        112.742,
        21.618
       ],
       [
        112.733,
        21.67
       ],
       [
        112.713,
        21.698
       ],
       [
        112.761,
        21.733
       ],
       [
        112.782,
        21.772
       ],
       [
        112.839,
        21.765
       ],
       [
        112.863,
        21.753
       ],
       [
        112.813,
        21.712
       ],
       [
        112.801,
        21.695
       ],
       [
        112.79,
        21.602
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.644,
        21.64
       ],
       [
        112.546,
        21.619
       ],
       [
        112.525,
        21.623
       ],
       [
        112.559,
        21.675
       ],
       [
        112.648,
        21.71
       ],
       [
        112.644,
        21.64
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        110.98,
        22.86
       ],
       [
        112.98,
        22.86
       ],
       [
        112.98,
        21.934
       ],
       [
        112.954,
        21.907
       ],
       [
        112.904,
        21.881
       ],
       [
        112.809,
        21.945
       ],
       [
        112.725,
        21.902
       ],
       [
        112.661,
        21.859
       ],
       [
        112.634,
        21.82
       ],
       [
        112.586,
        21.777
       ],
       [
        112.495,
        21.818
       ],
       [
        112.421,
        21.881
       ],
       [
        112.439,
        21.927
       ],
       [
        112.429,
        21.958
       ],
       [
        112.396,
        21.981
       ],
       [
        112.36,
        21.978
       ],
       [
        112.377,
        21.917
       ],
       [
        112.39,
        21.801
       ],
       [
        112.356,
        21.768
       ],
       [
        112.305,
        21.742
       ],
       [
        112.193,
        21.763
       ],
       [
        112.117,
        21.806
       ],
       [
        112.025,
        21.843
       ],
       [
        111.944,
        21.85
       ],
       [
        111.926,
        21.776
       ],
       [
        111.873,
        21.717
       ],
       [
        111.825,
        21.71
       ],
       [
        111.776,
        21.719
       ],
       [
        111.712,
        21.655
       ],
       [
        111.682,
        21.608
       ],
       [
        111.603,
        21.559
       ],
       [
        111.392,
        21.535
       ],
       [
        111.319,
        21.486
       ],
       [
        111.221,
        21.494
       ],
       [
        111.144,
        21.482
       ],
       [
        111.101,
        21.485
       ],
       [
        111.061,
        21.511
       ],
       [
        111.017,
        21.512
       ],
       [
        110.997,
        21.43
       ],
       [
        110.98,
        21.425
       ],
       [
        110.98,
        22.86
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
         112.98,
         22.86
        ],
        [
         111.329,
         22.86
        ],
        [
         111.218,
         22.748
        ],
        [
         111.186,
         22.736
        ],
        [
         111.118,
         22.745
        ],
        [
         111.058,
         22.73
        ],
        [
         111.089,
         22.696
        ],
        [
         111.056,
         22.649
        ],
        [
         110.997,
         22.632
        ],
        [
         110.98,
         22.634
        ],
        [
         110.98,
         21.406
        ],
        [
         111.035,
         21.439
        ],
        [
         111.104,
         21.456
        ],
        [
         111.171,
         21.458
        ],
        [
         111.283,
         21.486
        ],
        [
         111.276,
         21.443
        ],
        [
         111.25,
         21.451
        ],
        [
         111.258,
         21.415
        ],
        [
         111.286,
         21.419
        ],
        [
         111.353,
         21.465
        ],
        [
         111.383,
         21.496
        ],
        [
         111.444,
         21.514
        ],
        [
         111.495,
         21.501
        ],
        [
         111.522,
         21.517
        ],
        [
         111.561,
         21.505
        ],
        [
         111.61,
         21.53
        ],
        [
         111.651,
         21.512
        ],
        [
         111.678,
         21.53
        ],
        [
         111.694,
         21.59
        ],
        [
         111.737,
         21.61
        ],
        [
         111.795,
         21.611
        ],
        [
         111.832,
         21.579
        ],
        [
         111.81,
         21.555
        ],
        [
         111.888,
         21.579
        ],
        [
         111.942,
         21.607
        ],
        [
         111.973,
         21.603
        ],
        [
         112.027,
         21.634
        ],
        [
         111.998,
         21.657
        ],
        [
         111.954,
         21.668
        ],
        [
         111.956,
         21.71
        ],
        [
         112.036,
         21.762
        ],
        [
         112.137,
         21.794
        ],
        [
         112.193,
         21.789
        ],
        [
         112.197,
         21.737
        ],
        [
         112.236,
         21.727
        ],
        [
         112.239,
         21.702
        ],
        [
         112.353,
         21.707
        ],
        [
         112.416,
         21.735
        ],
        [
         112.427,
         21.79
        ],
        [
         112.446,
         21.803
        ],
        [
         112.497,
         21.786
        ],
        [
         112.536,
         21.754
        ],
        [
         112.647,
         21.758
        ],
        [
         112.686,
         21.811
        ],
        [
         112.793,
         21.921
        ],
        [
         112.841,
         21.921
        ],
        [
         112.894,
         21.844
        ],
        [
         112.93,
         21.839
        ],
        [
         112.98,
         21.865
        ],
        [
         112.98,
         22.86
        ]
       ]
      ],
      [
       [
        [
         112.853,
         21.741
        ],
        [
         112.876,
         21.773
        ],
        [
         112.841,
         21.777
        ],
        [
         112.783,
         21.74
        ],
        [
         112.724,
         21.72
        ],
        [
         112.706,
         21.679
        ],
        [
         112.735,
         21.667
        ],
        [
         112.78,
         21.672
        ],
        [
         112.731,
         21.614
        ],
        [
         112.775,
         21.564
        ],
        [
         112.817,
         21.59
        ],
        [
         112.799,
         21.611
        ],
        [
         112.821,
         21.656
        ],
        [
         112.805,
         21.687
        ],
        [
         112.833,
         21.737
        ],
        [
         112.853,
         21.741
        ]
       ]
      ],
      [
       [
        [
         112.531,
         21.584
        ],
        [
         112.563,
         21.591
        ],
        [
         112.571,
         21.62
        ],
        [
         112.621,
         21.606
        ],
        [
         112.666,
         21.643
        ],
        [
         112.639,
         21.673
        ],
        [
         112.666,
         21.684
        ],
        [
         112.664,
         21.714
        ],
        [
         112.592,
         21.693
        ],
        [
         112.56,
         21.667
        ],
        [
         112.571,
         21.646
        ],
        [
         112.535,
         21.629
        ],
        [
         112.531,
         21.584
        ]
       ]
      ],
      [
       [
        [
         112.435,
         21.664
        ],
        [
         112.456,
         21.649
        ],
        [
         112.459,
         21.69
        ],
        [
         112.435,
         21.664
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.98,
         22.86
        ],
        [
         110.98,
         22.634
        ],
        [
         110.997,
         22.632
        ],
        [
         111.056,
         22.649
        ],
        [
         111.089,
         22.696
        ],
        [
         111.058,
         22.73
        ],
        [
         111.118,
         22.745
        ],
        [
         111.186,
         22.736
        ],
        [
         111.218,
         22.748
        ],
        [
         111.329,
         22.86
        ],
        [
         110.98,
         22.86
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.935,
        22.86
       ],
       [
        112.963,
        22.822
       ],
       [
        112.98,
        22.816
       ]
      ]
     ]
    },
    "n": "Xi"
   }
  ],
  "lakes": [],
  "_bbox": [
   110.98,
   20.86,
   112.98,
   22.86
  ]
 }
};
