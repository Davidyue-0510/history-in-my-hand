// 本文件由 tools/build.py 自动生成（切片 shandong_kongzi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shandong_kongzi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shandong_kongzi"] = {
 "meta": {
  "kind": "thought",
  "region": "huabei",
  "province": "shandong",
  "title": "孔子与儒家学派创立（春秋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qufu",
  "dossier_event": "event:ev_shandong_kongzi_01",
  "vocab_pack": "inline:shandong_kongzi",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "spring_autumn",
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
    "note": "孔子与儒家学派创立（春秋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "孔子与儒家学派创立（春秋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "孔子与儒家学派创立（春秋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "孔子与儒家学派创立（春秋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shandong_kongzi",
  "key": "shandong_kongzi",
  "scene_id": "shandong_kongzi"
 },
 "sources": [
  {
   "id": "lunyu_kongzi",
   "title": "《论语》与孔门言行",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "孔门弟子",
   "period": "春秋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qufu",
   "name": "曲阜",
   "type": "city",
   "modern": "今中国山东省曲阜市",
   "note": "孔子故里",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.99,
   "lat": 35.58,
   "geo_note": "今山东曲阜市",
   "elev": 69
  },
  {
   "id": "lu",
   "name": "鲁",
   "type": "region",
   "modern": "今中国山东省南部",
   "note": "孔子出生地",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.0,
   "lat": 35.0,
   "geo_note": "今山东南部（鲁地代表点）",
   "elev": 37
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "孔丘",
   "role": "鲁人，私学创立者",
   "note": "字仲尼，儒家学派创始人",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 6
  },
  {
   "id": "SHA__p02",
   "name": "汉武帝",
   "role": "汉朝皇帝",
   "note": "独尊儒术，确立官方地位",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "person:SHA__p01",
   "predicate": "设私学",
   "value_text": "孔子设私学，有教无类",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "有教无类",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "有教无类",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "person:SHA__p01",
   "predicate": "弟子数量",
   "value_text": "弟子三千，贤者七十二",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "弟子三千，贤者七十二",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "弟子三千，贤者七十二",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p01",
   "predicate": "思想主张",
   "value_text": "倡仁、礼、中庸",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "仁、礼、中庸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "仁、礼、中庸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "person:SHA__p01",
   "predicate": "治学态度",
   "value_text": "述而不作，删述六经",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "述而不作",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "述而不作",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shandong_kongzi_01",
   "predicate": "教育理念",
   "value_text": "有教无类，不分贵贱",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "有教无类",
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
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "有教无类",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shandong_kongzi_03",
   "predicate": "政策影响",
   "value_text": "儒学成两千年主流",
   "time": {
    "era_text": "汉武帝时期",
    "start": "-0136"
   },
   "place": "qufu",
   "source": "lunyu_kongzi",
   "quote": "独尊儒术",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "独尊儒术",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:qufu",
   "predicate": "文化地位",
   "value_text": "孔庙遍天下，曲阜为故里",
   "time": {
    "era_text": "汉武帝时期",
    "start": "-0136"
   },
   "place": "qufu",
   "source": "lunyu_kongzi",
   "quote": "孔庙遍天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孔庙遍天下",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "person:SHA__p01",
   "predicate": "著作",
   "value_text": "言行辑为《论语》",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0479"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "门人辑为《论语》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "门人辑为《论语》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "person:SHA__p01",
   "predicate": "历史评价",
   "value_text": "儒家学派创始人",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "儒家学派创立",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "儒家学派创立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "person:SHA__p01",
   "predicate": "弟子数量",
   "value_text": "弟子三千或为虚数",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "弟子三千",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "学界有争议",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "弟子三千",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "person:SHA__p01",
   "predicate": "生卒年",
   "value_text": "生卒年无确考",
   "time": {
    "era_text": "春秋晚期",
    "start": "-0551"
   },
   "place": "lu",
   "source": "lunyu_kongzi",
   "quote": "春秋晚期",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "曲阜",
    "skills": [
     "考古",
     "文献考据"
    ],
    "accept": "出土材料佐证"
   },
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "春秋晚期",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shandong_kongzi_03",
   "predicate": "政策时间",
   "value_text": "独尊儒术具体年份存疑",
   "time": {
    "era_text": "汉武帝时期",
    "start": "-0136"
   },
   "place": "qufu",
   "source": "lunyu_kongzi",
   "quote": "自汉武独尊儒术",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "长安",
    "skills": [
     "史源考证"
    ],
    "accept": "汉代诏书"
   },
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自汉武独尊儒术",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:SHA__p01|弟子数量",
   "subject": "person:SHA__p01",
   "predicate": "弟子数量",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SHA_002",
    "SHA_010"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "SHA_011",
  "SHA_012"
 ],
 "events": [
  {
   "id": "ev_shandong_kongzi_01",
   "subject": "event:ev_shandong_kongzi_01",
   "year": -551,
   "era": "春秋晚期",
   "title": "孔子设私学",
   "kind": "其他",
   "text": "孔子设私学，有教无类",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shandong_kongzi_03",
   "subject": "event:ev_shandong_kongzi_03",
   "year": -136,
   "era": "汉武帝时期",
   "title": "独尊儒术",
   "kind": "行政",
   "text": "汉武帝独尊儒术，定一尊",
   "_source_idx": 0,
   "_source_name": "《论语》与孔门言行",
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
        115.99,
        34.0
       ],
       [
        115.99,
        36.58
       ],
       [
        118.0,
        36.58
       ],
       [
        118.0,
        34.0
       ],
       [
        115.99,
        34.0
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
         117.312,
         34.562
        ],
        [
         117.273,
         34.557
        ],
        [
         117.304,
         34.542
        ],
        [
         117.268,
         34.533
        ],
        [
         117.273,
         34.5
        ],
        [
         117.253,
         34.487
        ],
        [
         117.248,
         34.451
        ],
        [
         117.166,
         34.434
        ],
        [
         117.139,
         34.527
        ],
        [
         117.152,
         34.559
        ],
        [
         117.104,
         34.649
        ],
        [
         117.073,
         34.639
        ],
        [
         117.062,
         34.676
        ],
        [
         117.07,
         34.714
        ],
        [
         117.022,
         34.759
        ],
        [
         116.969,
         34.772
        ],
        [
         116.951,
         34.811
        ],
        [
         116.979,
         34.815
        ],
        [
         116.966,
         34.845
        ],
        [
         116.929,
         34.843
        ],
        [
         116.922,
         34.895
        ],
        [
         116.858,
         34.929
        ],
        [
         116.822,
         34.93
        ],
        [
         116.816,
         34.965
        ],
        [
         116.789,
         34.975
        ],
        [
         116.781,
         34.917
        ],
        [
         116.678,
         34.939
        ],
        [
         116.622,
         34.94
        ],
        [
         116.614,
         34.923
        ],
        [
         116.558,
         34.909
        ],
        [
         116.445,
         34.896
        ],
        [
         116.408,
         34.851
        ],
        [
         116.403,
         34.756
        ],
        [
         116.369,
         34.749
        ],
        [
         116.364,
         34.715
        ],
        [
         116.392,
         34.71
        ],
        [
         116.374,
         34.64
        ],
        [
         116.43,
         34.651
        ],
        [
         116.433,
         34.63
        ],
        [
         116.477,
         34.615
        ],
        [
         116.491,
         34.574
        ],
        [
         116.594,
         34.512
        ],
        [
         116.592,
         34.494
        ],
        [
         116.662,
         34.473
        ],
        [
         116.723,
         34.472
        ],
        [
         116.774,
         34.454
        ],
        [
         116.783,
         34.43
        ],
        [
         116.828,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.969,
         34.389
        ],
        [
         116.961,
         34.364
        ],
        [
         116.983,
         34.348
        ],
        [
         116.969,
         34.284
        ],
        [
         117.051,
         34.221
        ],
        [
         117.025,
         34.167
        ],
        [
         117.047,
         34.152
        ],
        [
         117.124,
         34.128
        ],
        [
         117.131,
         34.102
        ],
        [
         117.192,
         34.069
        ],
        [
         117.257,
         34.066
        ],
        [
         117.277,
         34.079
        ],
        [
         117.312,
         34.068
        ],
        [
         117.357,
         34.088
        ],
        [
         117.404,
         34.032
        ],
        [
         117.435,
         34.028
        ],
        [
         117.515,
         34.061
        ],
        [
         117.543,
         34.039
        ],
        [
         117.562,
         34.0
        ],
        [
         117.612,
         34.0
        ],
        [
         117.613,
         34.0
        ],
        [
         117.629,
         34.029
        ],
        [
         117.663,
         34.0
        ],
        [
         118.0,
         34.0
        ],
        [
         118.0,
         34.665
        ],
        [
         117.952,
         34.678
        ],
        [
         117.91,
         34.671
        ],
        [
         117.903,
         34.644
        ],
        [
         117.794,
         34.652
        ],
        [
         117.791,
         34.583
        ],
        [
         117.802,
         34.519
        ],
        [
         117.684,
         34.547
        ],
        [
         117.659,
         34.501
        ],
        [
         117.61,
         34.491
        ],
        [
         117.593,
         34.463
        ],
        [
         117.538,
         34.467
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.551
        ],
        [
         117.403,
         34.57
        ],
        [
         117.371,
         34.585
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.6,
         34.014
        ],
        [
         116.616,
         34.0
        ],
        [
         117.663,
         34.0
        ],
        [
         117.629,
         34.029
        ],
        [
         117.613,
         34.0
        ],
        [
         117.612,
         34.0
        ],
        [
         117.562,
         34.0
        ],
        [
         117.543,
         34.039
        ],
        [
         117.515,
         34.061
        ],
        [
         117.435,
         34.028
        ],
        [
         117.404,
         34.032
        ],
        [
         117.357,
         34.088
        ],
        [
         117.312,
         34.068
        ],
        [
         117.277,
         34.079
        ],
        [
         117.257,
         34.066
        ],
        [
         117.192,
         34.069
        ],
        [
         117.131,
         34.102
        ],
        [
         117.124,
         34.128
        ],
        [
         117.047,
         34.152
        ],
        [
         117.025,
         34.167
        ],
        [
         117.051,
         34.221
        ],
        [
         116.969,
         34.284
        ],
        [
         116.983,
         34.348
        ],
        [
         116.961,
         34.364
        ],
        [
         116.969,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.828,
         34.389
        ],
        [
         116.783,
         34.43
        ],
        [
         116.774,
         34.454
        ],
        [
         116.723,
         34.472
        ],
        [
         116.662,
         34.473
        ],
        [
         116.592,
         34.494
        ],
        [
         116.594,
         34.512
        ],
        [
         116.491,
         34.574
        ],
        [
         116.477,
         34.615
        ],
        [
         116.433,
         34.63
        ],
        [
         116.43,
         34.651
        ],
        [
         116.374,
         34.64
        ],
        [
         116.334,
         34.621
        ],
        [
         116.325,
         34.601
        ],
        [
         116.286,
         34.609
        ],
        [
         116.248,
         34.552
        ],
        [
         116.197,
         34.576
        ],
        [
         116.191,
         34.536
        ],
        [
         116.204,
         34.508
        ],
        [
         116.178,
         34.496
        ],
        [
         116.162,
         34.46
        ],
        [
         116.179,
         34.43
        ],
        [
         116.216,
         34.403
        ],
        [
         116.213,
         34.382
        ],
        [
         116.256,
         34.377
        ],
        [
         116.302,
         34.342
        ],
        [
         116.358,
         34.32
        ],
        [
         116.372,
         34.266
        ],
        [
         116.409,
         34.274
        ],
        [
         116.409,
         34.274
        ],
        [
         116.457,
         34.269
        ],
        [
         116.516,
         34.296
        ],
        [
         116.562,
         34.286
        ],
        [
         116.582,
         34.266
        ],
        [
         116.545,
         34.242
        ],
        [
         116.543,
         34.204
        ],
        [
         116.566,
         34.169
        ],
        [
         116.536,
         34.151
        ],
        [
         116.528,
         34.123
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.374,
         34.64
        ],
        [
         116.392,
         34.71
        ],
        [
         116.364,
         34.715
        ],
        [
         116.369,
         34.749
        ],
        [
         116.403,
         34.756
        ],
        [
         116.408,
         34.851
        ],
        [
         116.445,
         34.896
        ],
        [
         116.558,
         34.909
        ],
        [
         116.614,
         34.923
        ],
        [
         116.622,
         34.94
        ],
        [
         116.678,
         34.939
        ],
        [
         116.781,
         34.917
        ],
        [
         116.789,
         34.975
        ],
        [
         116.816,
         34.965
        ],
        [
         116.822,
         34.93
        ],
        [
         116.858,
         34.929
        ],
        [
         116.922,
         34.895
        ],
        [
         116.929,
         34.843
        ],
        [
         116.966,
         34.845
        ],
        [
         116.979,
         34.815
        ],
        [
         116.951,
         34.811
        ],
        [
         116.969,
         34.772
        ],
        [
         117.022,
         34.759
        ],
        [
         117.07,
         34.714
        ],
        [
         117.062,
         34.676
        ],
        [
         117.073,
         34.639
        ],
        [
         117.104,
         34.649
        ],
        [
         117.152,
         34.559
        ],
        [
         117.139,
         34.527
        ],
        [
         117.166,
         34.434
        ],
        [
         117.248,
         34.451
        ],
        [
         117.253,
         34.487
        ],
        [
         117.273,
         34.5
        ],
        [
         117.268,
         34.533
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.557
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.371,
         34.585
        ],
        [
         117.403,
         34.57
        ],
        [
         117.403,
         34.551
        ],
        [
         117.465,
         34.485
        ],
        [
         117.538,
         34.467
        ],
        [
         117.593,
         34.463
        ],
        [
         117.61,
         34.491
        ],
        [
         117.659,
         34.501
        ],
        [
         117.684,
         34.547
        ],
        [
         117.802,
         34.519
        ],
        [
         117.791,
         34.583
        ],
        [
         117.794,
         34.652
        ],
        [
         117.903,
         34.644
        ],
        [
         117.91,
         34.671
        ],
        [
         117.952,
         34.678
        ],
        [
         118.0,
         34.665
        ],
        [
         118.0,
         36.58
        ],
        [
         115.99,
         36.58
        ],
        [
         115.99,
         36.046
        ],
        [
         116.058,
         36.105
        ],
        [
         116.099,
         36.112
        ],
        [
         116.063,
         36.029
        ],
        [
         116.049,
         35.97
        ],
        [
         115.99,
         35.974
        ],
        [
         115.99,
         34.611
        ],
        [
         115.991,
         34.615
        ],
        [
         116.037,
         34.593
        ],
        [
         116.101,
         34.606
        ],
        [
         116.135,
         34.56
        ],
        [
         116.157,
         34.554
        ],
        [
         116.197,
         34.576
        ],
        [
         116.248,
         34.552
        ],
        [
         116.286,
         34.609
        ],
        [
         116.325,
         34.601
        ],
        [
         116.334,
         34.621
        ],
        [
         116.374,
         34.64
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.99,
         34.0
        ],
        [
         116.616,
         34.0
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.528,
         34.123
        ],
        [
         116.536,
         34.151
        ],
        [
         116.566,
         34.169
        ],
        [
         116.543,
         34.204
        ],
        [
         116.545,
         34.242
        ],
        [
         116.582,
         34.266
        ],
        [
         116.562,
         34.286
        ],
        [
         116.516,
         34.296
        ],
        [
         116.457,
         34.269
        ],
        [
         116.409,
         34.274
        ],
        [
         116.409,
         34.274
        ],
        [
         116.372,
         34.266
        ],
        [
         116.358,
         34.32
        ],
        [
         116.302,
         34.342
        ],
        [
         116.256,
         34.377
        ],
        [
         116.213,
         34.382
        ],
        [
         116.216,
         34.403
        ],
        [
         116.179,
         34.43
        ],
        [
         116.162,
         34.46
        ],
        [
         116.178,
         34.496
        ],
        [
         116.204,
         34.508
        ],
        [
         116.191,
         34.536
        ],
        [
         116.197,
         34.576
        ],
        [
         116.157,
         34.554
        ],
        [
         116.135,
         34.56
        ],
        [
         116.101,
         34.606
        ],
        [
         116.037,
         34.593
        ],
        [
         115.991,
         34.615
        ],
        [
         115.99,
         34.611
        ],
        [
         115.99,
         35.974
        ],
        [
         116.049,
         35.97
        ],
        [
         116.063,
         36.029
        ],
        [
         116.099,
         36.112
        ],
        [
         116.058,
         36.105
        ],
        [
         115.99,
         36.046
        ],
        [
         115.99,
         34.0
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.99,
       36.009
      ],
      [
       116.036,
       36.071
      ],
      [
       116.078,
       36.11
      ],
      [
       116.116,
       36.143
      ],
      [
       116.227,
       36.201
      ],
      [
       116.451,
       36.339
      ],
      [
       116.581,
       36.44
      ],
      [
       116.593,
       36.49
      ],
      [
       116.644,
       36.561
      ],
      [
       116.662,
       36.58
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
        117.326,
        34.587
       ],
       [
        117.295,
        34.549
       ],
       [
        117.25,
        34.502
       ],
       [
        117.21,
        34.498
       ],
       [
        117.174,
        34.543
       ],
       [
        117.141,
        34.612
       ],
       [
        117.128,
        34.663
       ],
       [
        117.139,
        34.725
       ],
       [
        117.179,
        34.719
       ],
       [
        117.266,
        34.665
       ],
       [
        117.318,
        34.621
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   115.99,
   34.0,
   118.0,
   36.58
  ]
 }
};
