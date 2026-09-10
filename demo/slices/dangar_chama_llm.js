// 本文件由 tools/build.py 自动生成（切片 dangar_chama_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dangar_chama_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dangar_chama_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "xibei",
  "province": "qinghai",
  "title": "清·丹噶尔厅茶马互市",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dangar",
  "dossier_event": "event:ev_dangar_chama_llm_01",
  "vocab_pack": "inline:dangar_chama_llm",
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
    "note": "清·丹噶尔厅茶马互市：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·丹噶尔厅茶马互市：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "清·丹噶尔厅茶马互市：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·丹噶尔厅茶马互市：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   6
  ],
  "page": "county.html?scene=dangar_chama_llm",
  "key": "dangar_chama_llm",
  "scene_id": "dangar_chama_llm"
 },
 "sources": [
  {
   "id": "dangar_chama_src",
   "title": "丹噶尔厅志·市易（茶马）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "地方修",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dangar",
   "name": "丹噶爾",
   "type": "city",
   "modern": "今中國青海省湟源縣",
   "note": "青海湖入河湟之衝。坐标据地名志条目（别名 丹噶爾→湟源），标 approx。",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 101.25,
   "lat": 36.68,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 丹噶爾→湟源）（诚实回填 v0.221）。",
   "elev": 3366
  },
  {
   "id": "qinghaihu",
   "name": "青海湖",
   "type": "region",
   "modern": "今中國青海省",
   "note": "丹噶爾當其入河湟之衝",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "hehuang",
   "name": "河湟",
   "type": "region",
   "modern": "今中國青海省東部及甘肅省",
   "note": "河湟之西一大都會",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "DAN__p01",
   "name": "理藩院員",
   "role": "管理茶馬互市之官員",
   "note": "雍正設廳後遣員董理互市",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DAN_001",
   "subject": "event:ev_dangar_chama_llm_01",
   "predicate": "建置時間",
   "value_text": "雍正設廳",
   "time": {
    "era_text": "雍正",
    "start": "1725"
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "雍正設廳",
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
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雍正設廳",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_002",
   "subject": "event:ev_dangar_chama_llm_01",
   "predicate": "管理機構",
   "value_text": "理藩院遣員董之",
   "time": {
    "era_text": "雍正",
    "start": "1725"
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "理藩院遣員董之",
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
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "理藩院遣員董之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_003",
   "subject": "event:ev_dangar_chama_llm_02",
   "predicate": "商業盛況",
   "value_text": "商賈駢集，號小北京",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "商賈駢集，號為小北京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "商賈駢集，號為小北京",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_004",
   "subject": "event:ev_dangar_chama_llm_02",
   "predicate": "年市馬匹數",
   "value_text": "年市馬數萬匹",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "年市馬數萬匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "年市馬數萬匹",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_005",
   "subject": "event:ev_dangar_chama_llm_02",
   "predicate": "茶引數量",
   "value_text": "茶引數十萬斤",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "茶引數十萬斤",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "茶引數十萬斤",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_006",
   "subject": "place:dangar",
   "predicate": "地理位置",
   "value_text": "當青海湖入河湟之衝",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "當青海湖入河湟之衝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "當青海湖入河湟之衝",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_007",
   "subject": "place:dangar",
   "predicate": "歷史地位",
   "value_text": "唐蕃古道要津",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "為唐蕃古道要津",
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
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "為唐蕃古道要津",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_008",
   "subject": "place:dangar",
   "predicate": "城市稱號",
   "value_text": "河湟之西一大都會",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "河湟之西一大都會也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "河湟之西一大都會也",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_009",
   "subject": "place:dangar",
   "predicate": "互市商品",
   "value_text": "蒙藏驅馬輸鹽，漢商出茶布",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "蒙藏番族驅馬、攜毛、輸鹽來市，漢商出湖茶、布匹、銅鐵償之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    4
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蒙藏番族驅馬、攜毛、輸鹽來市，漢商出湖茶、布匹、銅鐵償之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_010",
   "subject": "place:dangar",
   "predicate": "互市參與者",
   "value_text": "蒙藏番族與漢商交易",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "蒙藏番族驅馬、攜毛、輸鹽來市，漢商出湖茶、布匹、銅鐵償之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蒙藏番族驅馬、攜毛、輸鹽來市，漢商出湖茶、布匹、銅鐵償之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_011",
   "subject": "event:ev_dangar_chama_llm_02",
   "predicate": "史料來源",
   "value_text": "出自地方志或遊記",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "原文未註明出處",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAN_012",
   "subject": "event:ev_dangar_chama_llm_02",
   "predicate": "年市馬匹數",
   "value_text": "實際數量可能少於記載",
   "time": {
    "era_text": "乾隆間",
    "start": "1736-01-01",
    "end": "1736-12-31",
    "gregorian_year": 1736
   },
   "place": "dangar",
   "source": "dangar_chama_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏官方檔案佐證",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "清代檔案、方志",
    "skills": [
     "文獻考證",
     "量化分析"
    ],
    "accept": "需核實具體稅收記錄"
   },
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DAN_012"
 ],
 "events": [
  {
   "id": "ev_dangar_chama_llm_01",
   "subject": "event:ev_dangar_chama_llm_01",
   "year": 1725,
   "era": "雍正三年",
   "title": "設丹噶爾廳",
   "kind": "建置",
   "text": "雍正設廳，置茶馬互市",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dangar_chama_llm_02",
   "subject": "event:ev_dangar_chama_llm_02",
   "year": 1736,
   "era": "乾隆元年",
   "title": "茶馬互市鼎盛",
   "kind": "其他",
   "text": "乾隆間商賈駢集，號小北京",
   "_source_idx": 0,
   "_source_name": "丹噶尔厅志·市易（茶马）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "dangar",
   "party": "后世官修",
   "start": 1725,
   "end": 1736,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "dangar",
   "name": "丹噶爾",
   "lon": 101.25,
   "lat": 36.68,
   "region": "xibei"
  }
 ],
 "control_years": [
  1725,
  1736
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
        100.25,
        35.68
       ],
       [
        100.25,
        37.68
       ],
       [
        102.25,
        37.68
       ],
       [
        102.25,
        35.68
       ],
       [
        100.25,
        35.68
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
         102.25,
         35.68
        ],
        [
         102.25,
         37.68
        ],
        [
         101.801,
         37.68
        ],
        [
         101.816,
         37.654
        ],
        [
         101.855,
         37.665
        ],
        [
         101.868,
         37.68
        ],
        [
         102.038,
         37.68
        ],
        [
         102.049,
         37.652
        ],
        [
         102.035,
         37.628
        ],
        [
         102.102,
         37.582
        ],
        [
         102.131,
         37.546
        ],
        [
         102.103,
         37.483
        ],
        [
         102.125,
         37.485
        ],
        [
         102.177,
         37.459
        ],
        [
         102.197,
         37.42
        ],
        [
         102.25,
         37.405
        ],
        [
         102.25,
         35.68
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         102.25,
         35.68
        ],
        [
         102.25,
         37.405
        ],
        [
         102.197,
         37.42
        ],
        [
         102.177,
         37.459
        ],
        [
         102.125,
         37.485
        ],
        [
         102.103,
         37.483
        ],
        [
         102.131,
         37.546
        ],
        [
         102.102,
         37.582
        ],
        [
         102.035,
         37.628
        ],
        [
         102.049,
         37.652
        ],
        [
         102.038,
         37.68
        ],
        [
         101.868,
         37.68
        ],
        [
         101.855,
         37.665
        ],
        [
         101.816,
         37.654
        ],
        [
         101.801,
         37.68
        ],
        [
         100.25,
         37.68
        ],
        [
         100.25,
         35.68
        ],
        [
         102.25,
         35.68
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        100.25,
        35.686
       ],
       [
        100.255,
        35.695
       ],
       [
        100.334,
        35.774
       ],
       [
        100.409,
        35.777
       ],
       [
        100.546,
        35.869
       ],
       [
        100.744,
        36.05
       ],
       [
        100.898,
        36.142
       ],
       [
        101.009,
        36.145
       ],
       [
        101.071,
        36.135
       ],
       [
        101.085,
        36.112
       ],
       [
        101.176,
        36.089
       ],
       [
        101.343,
        36.065
       ],
       [
        101.495,
        36.086
       ],
       [
        101.63,
        36.151
       ],
       [
        101.763,
        36.152
       ],
       [
        101.893,
        36.086
       ],
       [
        101.993,
        35.997
       ],
       [
        102.064,
        35.886
       ],
       [
        102.185,
        35.845
       ],
       [
        102.25,
        35.856
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        100.753,
        36.811
       ],
       [
        100.746,
        36.781
       ],
       [
        100.723,
        36.745
       ],
       [
        100.723,
        36.673
       ],
       [
        100.704,
        36.589
       ],
       [
        100.628,
        36.557
       ],
       [
        100.523,
        36.58
       ],
       [
        100.431,
        36.641
       ],
       [
        100.25,
        36.644
       ],
       [
        100.25,
        37.158
       ],
       [
        100.275,
        37.15
       ],
       [
        100.448,
        37.025
       ],
       [
        100.586,
        36.903
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ],
       [
        100.753,
        36.811
       ]
      ]
     ]
    },
    "n": "Qinghai Hu"
   }
  ],
  "_bbox": [
   100.25,
   35.68,
   102.25,
   37.68
  ]
 }
};
