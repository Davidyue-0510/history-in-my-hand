// 本文件由 tools/build.py 自动生成（切片 gansu_jiayuguan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["gansu_jiayuguan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["gansu_jiayuguan"] = {
 "meta": {
  "kind": "engineering",
  "region": "xibei",
  "province": "gansu",
  "title": "明·嘉峪关筑城（明长城西端锁钥）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "jiayuguan",
  "dossier_event": "event:ev_gansu_jiayuguan_01",
  "vocab_pack": "inline:gansu_jiayuguan",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming",
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
    "note": "明·嘉峪关筑城（明长城西端锁钥）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·嘉峪关筑城（明长城西端锁钥）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明·嘉峪关筑城（明长城西端锁钥）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·嘉峪关筑城（明长城西端锁钥）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "county.html?scene=gansu_jiayuguan",
  "key": "gansu_jiayuguan",
  "scene_id": "gansu_jiayuguan"
 },
 "sources": [
  {
   "id": "mingshi_jiayu",
   "title": "《明史·地理志》与嘉峪关",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "张廷玉",
   "period": "明",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jiayuguan",
   "name": "嘉峪關",
   "type": "fortress",
   "modern": "今中國甘肅嘉峪關市",
   "note": "明長城西端鎖鑰",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 98.29,
   "lat": 39.77,
   "geo_note": "今甘肃嘉峪关市",
   "elev": 1687
  },
  {
   "id": "jiuquan",
   "name": "酒泉",
   "type": "city",
   "modern": "今中國甘肅酒泉市",
   "note": "關城所在",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 98.49,
   "lat": 39.74,
   "geo_note": "今甘肃酒泉市",
   "elev": 1543
  },
  {
   "id": "hexi",
   "name": "河西",
   "type": "region",
   "modern": "今中國甘肅河西走廊",
   "note": "馮勝下河西",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 97.0,
   "lat": 39.5,
   "geo_note": "今甘肃河西走廊代表点",
   "elev": 3349
  },
  {
   "id": "jiayushan",
   "name": "嘉峪山",
   "type": "region",
   "modern": "今中國甘肅嘉峪關市西南",
   "note": "築城倚此山",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 98.1,
   "lat": 39.7,
   "geo_note": "今甘肃嘉峪关市西南嘉峪山",
   "elev": 2052
  }
 ],
 "persons": [
  {
   "id": "GAN__p01",
   "name": "馮勝",
   "role": "宋國公，明征西將軍",
   "note": "洪武五年下河西，築嘉峪關",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "GAN_001",
   "subject": "event:ev_gansu_jiayuguan_01",
   "predicate": "下河西",
   "value_text": "馮勝平定河西",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "hexi",
   "source": "mingshi_jiayu",
   "quote": "宋國公馮勝下河西",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋國公馮勝下河西",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_002",
   "subject": "event:ev_gansu_jiayuguan_02",
   "predicate": "築城",
   "value_text": "於酒泉西置關",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "於酒泉西置關",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "於酒泉西置關",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_003",
   "subject": "place:jiayuguan",
   "predicate": "地理位置",
   "value_text": "倚嘉峪山之險",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "倚嘉峪山之險",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "倚嘉峪山之險",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_004",
   "subject": "place:jiayuguan",
   "predicate": "戰略地位",
   "value_text": "明長城西端鎖鑰",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "為明長城西端鎖鑰",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "為明長城西端鎖鑰",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_005",
   "subject": "place:jiayuguan",
   "predicate": "防禦體系",
   "value_text": "墩堡相連，屯兵戍守",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "墩堡相連，屯兵戍守",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "墩堡相連，屯兵戍守",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_006",
   "subject": "place:jiayuguan",
   "predicate": "絲路咽喉",
   "value_text": "控扼西域孔道",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "扼西域孔道",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "扼西域孔道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_007",
   "subject": "person:GAN__p01",
   "predicate": "築關決策",
   "value_text": "馮勝主導築關",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "宋國公馮勝下河西",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋國公馮勝下河西",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_008",
   "subject": "event:ev_gansu_jiayuguan_02",
   "predicate": "築城時間",
   "value_text": "洪武五年築城",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "洪武五年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洪武五年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_009",
   "subject": "event:ev_gansu_jiayuguan_02",
   "predicate": "築城目的",
   "value_text": "扼守西域交通",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "扼西域孔道",
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
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "扼西域孔道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_010",
   "subject": "place:jiayuguan",
   "predicate": "軍事設施",
   "value_text": "墩堡相連",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "墩堡相連",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "墩堡相連",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_011",
   "subject": "place:jiayuguan",
   "predicate": "戍守兵力",
   "value_text": "屯兵戍守",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "屯兵戍守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屯兵戍守",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_012",
   "subject": "event:ev_gansu_jiayuguan_01",
   "predicate": "下河西時間",
   "value_text": "洪武五年",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "hexi",
   "source": "mingshi_jiayu",
   "quote": "洪武五年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洪武五年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_013",
   "subject": "event:ev_gansu_jiayuguan_02",
   "predicate": "築城選址",
   "value_text": "倚山而築",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "倚嘉峪山之險",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "倚嘉峪山之險",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_014",
   "subject": "place:jiayuguan",
   "predicate": "史料記載",
   "value_text": "明史載築關",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "明史",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "明史記載",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明史",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GAN_015",
   "subject": "place:jiayuguan",
   "predicate": "築城細節",
   "value_text": "具體築城工藝未詳",
   "time": {
    "era_text": "洪武五年",
    "start": "1372-01-01",
    "end": "1372-12-31",
    "gregorian_year": 1372
   },
   "place": "jiayuguan",
   "source": "mingshi_jiayu",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未載",
   "dims": [
    2
   ],
   "lead": {
    "where": "嘉峪關地方志",
    "skills": [
     "考古",
     "文獻考證"
    ],
    "accept": "補充築城技術細節"
   },
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
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
  "GAN_015"
 ],
 "events": [
  {
   "id": "ev_gansu_jiayuguan_01",
   "subject": "event:ev_gansu_jiayuguan_01",
   "year": 1372,
   "era": "洪武五年",
   "title": "馮勝下河西",
   "kind": "戰事",
   "text": "明軍平定河西，置關築城",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_gansu_jiayuguan_02",
   "subject": "event:ev_gansu_jiayuguan_02",
   "year": 1372,
   "era": "洪武五年",
   "title": "嘉峪關築城",
   "kind": "建置",
   "text": "倚山築城，扼西域孔道",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jiuquan",
   "to": "jiayuguan",
   "type": "military",
   "label": "馮勝築關路線",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与嘉峪关",
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
        96.0,
        38.5
       ],
       [
        96.0,
        40.77
       ],
       [
        99.49,
        40.77
       ],
       [
        99.49,
        38.5
       ],
       [
        96.0,
        38.5
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
        98.338,
        40.77
       ],
       [
        98.344,
        40.568
       ],
       [
        98.628,
        40.678
       ],
       [
        98.57,
        40.747
       ],
       [
        98.657,
        40.77
       ],
       [
        98.669,
        40.77
       ],
       [
        98.689,
        40.692
       ],
       [
        98.722,
        40.658
       ],
       [
        98.763,
        40.64
       ],
       [
        98.803,
        40.607
       ],
       [
        98.807,
        40.66
       ],
       [
        98.791,
        40.706
       ],
       [
        98.953,
        40.77
       ],
       [
        98.993,
        40.77
       ],
       [
        99.042,
        40.694
       ],
       [
        99.102,
        40.677
       ],
       [
        99.125,
        40.715
       ],
       [
        99.173,
        40.747
       ],
       [
        99.173,
        40.77
       ],
       [
        99.49,
        40.77
       ],
       [
        99.49,
        39.885
       ],
       [
        99.46,
        39.898
       ],
       [
        99.441,
        39.886
       ],
       [
        99.469,
        39.875
       ],
       [
        99.49,
        39.877
       ],
       [
        99.49,
        40.77
       ],
       [
        98.338,
        40.77
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
         99.49,
         39.877
        ],
        [
         99.469,
         39.875
        ],
        [
         99.441,
         39.886
        ],
        [
         99.46,
         39.898
        ],
        [
         99.49,
         39.885
        ],
        [
         99.49,
         40.77
        ],
        [
         99.173,
         40.77
        ],
        [
         99.173,
         40.747
        ],
        [
         99.125,
         40.715
        ],
        [
         99.102,
         40.677
        ],
        [
         99.042,
         40.694
        ],
        [
         98.993,
         40.77
        ],
        [
         98.953,
         40.77
        ],
        [
         98.791,
         40.706
        ],
        [
         98.807,
         40.66
        ],
        [
         98.803,
         40.607
        ],
        [
         98.763,
         40.64
        ],
        [
         98.722,
         40.658
        ],
        [
         98.689,
         40.692
        ],
        [
         98.669,
         40.77
        ],
        [
         98.657,
         40.77
        ],
        [
         98.57,
         40.747
        ],
        [
         98.628,
         40.678
        ],
        [
         98.344,
         40.568
        ],
        [
         98.338,
         40.77
        ],
        [
         96.0,
         40.77
        ],
        [
         96.0,
         38.5
        ],
        [
         96.696,
         38.5
        ],
        [
         96.707,
         38.506
        ],
        [
         96.781,
         38.504
        ],
        [
         96.8,
         38.528
        ],
        [
         96.768,
         38.552
        ],
        [
         96.809,
         38.582
        ],
        [
         96.794,
         38.608
        ],
        [
         96.847,
         38.599
        ],
        [
         96.877,
         38.58
        ],
        [
         96.961,
         38.558
        ],
        [
         97.056,
         38.595
        ],
        [
         97.047,
         38.654
        ],
        [
         97.058,
         38.673
        ],
        [
         97.009,
         38.702
        ],
        [
         97.023,
         38.756
        ],
        [
         97.0,
         38.761
        ],
        [
         96.988,
         38.793
        ],
        [
         96.994,
         38.835
        ],
        [
         96.984,
         38.869
        ],
        [
         96.941,
         38.908
        ],
        [
         96.939,
         38.956
        ],
        [
         96.965,
         39.017
        ],
        [
         96.958,
         39.042
        ],
        [
         96.97,
         39.098
        ],
        [
         97.012,
         39.142
        ],
        [
         96.962,
         39.198
        ],
        [
         97.018,
         39.208
        ],
        [
         97.06,
         39.198
        ],
        [
         97.141,
         39.2
        ],
        [
         97.221,
         39.193
        ],
        [
         97.315,
         39.165
        ],
        [
         97.347,
         39.168
        ],
        [
         97.371,
         39.141
        ],
        [
         97.401,
         39.147
        ],
        [
         97.459,
         39.118
        ],
        [
         97.505,
         39.077
        ],
        [
         97.581,
         39.052
        ],
        [
         97.679,
         39.011
        ],
        [
         97.701,
         38.963
        ],
        [
         97.829,
         38.93
        ],
        [
         97.876,
         38.898
        ],
        [
         98.009,
         38.859
        ],
        [
         98.029,
         38.834
        ],
        [
         98.068,
         38.816
        ],
        [
         98.092,
         38.786
        ],
        [
         98.168,
         38.84
        ],
        [
         98.242,
         38.881
        ],
        [
         98.235,
         38.919
        ],
        [
         98.277,
         38.964
        ],
        [
         98.288,
         38.992
        ],
        [
         98.281,
         39.027
        ],
        [
         98.317,
         39.041
        ],
        [
         98.384,
         39.03
        ],
        [
         98.401,
         39.002
        ],
        [
         98.432,
         38.996
        ],
        [
         98.428,
         38.976
        ],
        [
         98.458,
         38.953
        ],
        [
         98.527,
         38.956
        ],
        [
         98.585,
         38.93
        ],
        [
         98.624,
         38.959
        ],
        [
         98.612,
         38.977
        ],
        [
         98.662,
         38.994
        ],
        [
         98.705,
         39.044
        ],
        [
         98.731,
         39.057
        ],
        [
         98.744,
         39.087
        ],
        [
         98.817,
         39.086
        ],
        [
         98.818,
         39.065
        ],
        [
         98.886,
         39.041
        ],
        [
         98.903,
         39.012
        ],
        [
         98.952,
         38.988
        ],
        [
         99.055,
         38.977
        ],
        [
         99.108,
         38.952
        ],
        [
         99.072,
         38.921
        ],
        [
         99.069,
         38.897
        ],
        [
         99.141,
         38.853
        ],
        [
         99.222,
         38.789
        ],
        [
         99.291,
         38.766
        ],
        [
         99.362,
         38.718
        ],
        [
         99.376,
         38.685
        ],
        [
         99.412,
         38.666
        ],
        [
         99.451,
         38.604
        ],
        [
         99.49,
         38.61
        ],
        [
         99.49,
         39.877
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
         99.49,
         38.5
        ],
        [
         99.49,
         38.61
        ],
        [
         99.451,
         38.604
        ],
        [
         99.412,
         38.666
        ],
        [
         99.376,
         38.685
        ],
        [
         99.362,
         38.718
        ],
        [
         99.291,
         38.766
        ],
        [
         99.222,
         38.789
        ],
        [
         99.141,
         38.853
        ],
        [
         99.069,
         38.897
        ],
        [
         99.072,
         38.921
        ],
        [
         99.108,
         38.952
        ],
        [
         99.055,
         38.977
        ],
        [
         98.952,
         38.988
        ],
        [
         98.903,
         39.012
        ],
        [
         98.886,
         39.041
        ],
        [
         98.818,
         39.065
        ],
        [
         98.817,
         39.086
        ],
        [
         98.744,
         39.087
        ],
        [
         98.731,
         39.057
        ],
        [
         98.705,
         39.044
        ],
        [
         98.662,
         38.994
        ],
        [
         98.612,
         38.977
        ],
        [
         98.624,
         38.959
        ],
        [
         98.585,
         38.93
        ],
        [
         98.527,
         38.956
        ],
        [
         98.458,
         38.953
        ],
        [
         98.428,
         38.976
        ],
        [
         98.432,
         38.996
        ],
        [
         98.401,
         39.002
        ],
        [
         98.384,
         39.03
        ],
        [
         98.317,
         39.041
        ],
        [
         98.281,
         39.027
        ],
        [
         98.288,
         38.992
        ],
        [
         98.277,
         38.964
        ],
        [
         98.235,
         38.919
        ],
        [
         98.242,
         38.881
        ],
        [
         98.168,
         38.84
        ],
        [
         98.092,
         38.786
        ],
        [
         98.068,
         38.816
        ],
        [
         98.029,
         38.834
        ],
        [
         98.009,
         38.859
        ],
        [
         97.876,
         38.898
        ],
        [
         97.829,
         38.93
        ],
        [
         97.701,
         38.963
        ],
        [
         97.679,
         39.011
        ],
        [
         97.581,
         39.052
        ],
        [
         97.505,
         39.077
        ],
        [
         97.459,
         39.118
        ],
        [
         97.401,
         39.147
        ],
        [
         97.371,
         39.141
        ],
        [
         97.347,
         39.168
        ],
        [
         97.315,
         39.165
        ],
        [
         97.221,
         39.193
        ],
        [
         97.141,
         39.2
        ],
        [
         97.06,
         39.198
        ],
        [
         97.018,
         39.208
        ],
        [
         96.962,
         39.198
        ],
        [
         97.012,
         39.142
        ],
        [
         96.97,
         39.098
        ],
        [
         96.958,
         39.042
        ],
        [
         96.965,
         39.017
        ],
        [
         96.939,
         38.956
        ],
        [
         96.941,
         38.908
        ],
        [
         96.984,
         38.869
        ],
        [
         96.994,
         38.835
        ],
        [
         96.988,
         38.793
        ],
        [
         97.0,
         38.761
        ],
        [
         97.023,
         38.756
        ],
        [
         97.009,
         38.702
        ],
        [
         97.058,
         38.673
        ],
        [
         97.047,
         38.654
        ],
        [
         97.056,
         38.595
        ],
        [
         96.961,
         38.558
        ],
        [
         96.877,
         38.58
        ],
        [
         96.847,
         38.599
        ],
        [
         96.794,
         38.608
        ],
        [
         96.809,
         38.582
        ],
        [
         96.768,
         38.552
        ],
        [
         96.8,
         38.528
        ],
        [
         96.781,
         38.504
        ],
        [
         96.707,
         38.506
        ],
        [
         96.696,
         38.5
        ],
        [
         99.49,
         38.5
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   96.0,
   38.5,
   99.49,
   40.77
  ]
 }
};
