// 本文件由 tools/build.py 自动生成（切片 hunan_mawangdui_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hunan_mawangdui_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hunan_mawangdui_llm"] = {
 "meta": {
  "kind": "tech",
  "region": "hunan",
  "province": "hunan",
  "title": "马王堆汉墓",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "mawangdui",
  "dossier_event": "event:ev_hunan_mawangdui_llm_01",
  "vocab_pack": "hunan_mawangdui_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "han",
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
    "note": "马王堆汉墓：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "马王堆汉墓：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "马王堆汉墓：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "马王堆汉墓：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=hunan_mawangdui_llm",
  "key": "hunan_mawangdui_llm",
  "scene_id": "hunan_mawangdui_llm"
 },
 "sources": [
  {
   "id": "hunan_mawangdui_src_llm",
   "title": "马王堆汉墓史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "mawangdui",
   "name": "马王堆",
   "type": "region",
   "modern": "今中国湖南省长沙市",
   "note": "汉墓所在地",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.99,
   "lat": 28.21,
   "geo_note": "今湖南长沙马王堆",
   "elev": 41
  },
  {
   "id": "changsha",
   "name": "长沙",
   "type": "city",
   "modern": "今中国湖南省长沙市",
   "note": "马王堆所在城市",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.94,
   "lat": 28.23,
   "geo_note": "今湖南长沙市",
   "elev": 42
  }
 ],
 "persons": [
  {
   "id": "HUN__p01",
   "name": "利苍",
   "role": "西汉长沙国丞相",
   "note": "马王堆汉墓一号墓主辛追之夫",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "HUN__p02",
   "name": "辛追",
   "role": "利苍之妻",
   "note": "一号墓主，出土完好女尸",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HUN_001",
   "subject": "event:ev_hunan_mawangdui_llm_01",
   "predicate": "墓葬年代",
   "value_text": "西汉初年",
   "time": {
    "era_text": "西汉初年",
    "start": "-168"
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "西汉长沙国丞相利苍家族墓",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西汉长沙国丞相利苍家族墓",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_002",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "发掘时间",
   "value_text": "1972至1974年",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "1972至1974年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1972至1974年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_003",
   "subject": "person:HUN__p01",
   "predicate": "身份",
   "value_text": "长沙国丞相",
   "time": {
    "era_text": "西汉初年",
    "start": "-168"
   },
   "place": "changsha",
   "source": "hunan_mawangdui_src_llm",
   "quote": "西汉长沙国丞相利苍",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西汉长沙国丞相利苍",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_004",
   "subject": "person:HUN__p02",
   "predicate": "身份",
   "value_text": "利苍之妻",
   "time": {
    "era_text": "西汉初年",
    "start": "-168"
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "一号墓为利苍妻辛追",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一号墓为利苍妻辛追",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_005",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "出土文物",
   "value_text": "漆器、帛书、帛画等",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "出土漆器、帛书、帛画、竹简、乐器",
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
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "出土漆器、帛书、帛画、竹简、乐器",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_006",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "女尸保存",
   "value_text": "完好女尸",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "完好女尸",
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
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "完好女尸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_007",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "重要文物",
   "value_text": "帛书《老子》《五星占》",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "帛书《老子》《五星占》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    5
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "帛书《老子》《五星占》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_008",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "研究价值",
   "value_text": "研究西汉工艺医药天文",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "为研究西汉工艺、医药、天文与丧葬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为研究西汉工艺、医药、天文与丧葬",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_009",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "发掘时间",
   "value_text": "1974年结束",
   "time": {
    "era_text": "1974年",
    "start": "1974-01-01",
    "end": "1974-12-31",
    "gregorian_year": 1974
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "1974年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1974年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_010",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "墓主身份",
   "value_text": "利苍家族墓",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "利苍家族墓",
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
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "利苍家族墓",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_011",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "出土文物",
   "value_text": "T形帛画",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "T形帛画",
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
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "T形帛画",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_012",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "出土文物",
   "value_text": "竹简、乐器",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "竹简、乐器",
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
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "竹简、乐器",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_013",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "研究价值",
   "value_text": "丧葬制度",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "丧葬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "丧葬",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_014",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "研究价值",
   "value_text": "工艺技术",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "工艺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    5
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "工艺",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUN_015",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "研究价值",
   "value_text": "医药知识",
   "time": {
    "era_text": "1972年",
    "start": "1972-01-01",
    "end": "1972-12-31",
    "gregorian_year": 1972
   },
   "place": "mawangdui",
   "source": "hunan_mawangdui_src_llm",
   "quote": "医药",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    5
   ],
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "医药",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_hunan_mawangdui_llm_02|发掘时间",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "发掘时间",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "HUN_002",
    "HUN_009"
   ]
  },
  {
   "id": "cf:event:ev_hunan_mawangdui_llm_02|出土文物",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "出土文物",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "HUN_005",
    "HUN_011",
    "HUN_012"
   ]
  },
  {
   "id": "cf:event:ev_hunan_mawangdui_llm_02|研究价值",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "predicate": "研究价值",
   "kind": "record_vs_record",
   "count": 4,
   "spread": null,
   "assertion_ids": [
    "HUN_008",
    "HUN_013",
    "HUN_014",
    "HUN_015"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hunan_mawangdui_llm_01",
   "subject": "event:ev_hunan_mawangdui_llm_01",
   "year": -168,
   "era": "西汉初年",
   "title": "利苍家族葬于马王堆",
   "kind": "其他",
   "text": "利苍家族葬于马王堆",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hunan_mawangdui_llm_02",
   "subject": "event:ev_hunan_mawangdui_llm_02",
   "year": 1972,
   "era": "1972年",
   "title": "马王堆汉墓发掘",
   "kind": "其他",
   "text": "1972年发掘马王堆汉墓",
   "_source_idx": 0,
   "_source_name": "马王堆汉墓史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "mawangdui",
   "party": "后世官修",
   "start": -168,
   "end": -141,
   "basis": "auto: 场景主地点 mawangdui 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "mawangdui",
   "name": "马王堆",
   "lon": 112.99,
   "lat": 28.21,
   "region": "hunan"
  }
 ],
 "control_years": [
  -168,
  -141
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
        111.94,
        27.21
       ],
       [
        111.94,
        29.23
       ],
       [
        113.99,
        29.23
       ],
       [
        113.99,
        27.21
       ],
       [
        111.94,
        27.21
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
         113.99,
         27.21
        ],
        [
         113.99,
         29.127
        ],
        [
         113.987,
         29.126
        ],
        [
         113.952,
         29.093
        ],
        [
         113.942,
         29.047
        ],
        [
         113.962,
         28.999
        ],
        [
         113.955,
         28.979
        ],
        [
         113.974,
         28.938
        ],
        [
         113.99,
         28.946
        ],
        [
         113.99,
         28.038
        ],
        [
         113.97,
         28.041
        ],
        [
         113.966,
         28.018
        ],
        [
         113.936,
         28.019
        ],
        [
         113.914,
         27.991
        ],
        [
         113.864,
         28.005
        ],
        [
         113.845,
         27.972
        ],
        [
         113.823,
         27.982
        ],
        [
         113.752,
         27.934
        ],
        [
         113.728,
         27.875
        ],
        [
         113.756,
         27.86
        ],
        [
         113.763,
         27.799
        ],
        [
         113.699,
         27.741
        ],
        [
         113.697,
         27.72
        ],
        [
         113.652,
         27.664
        ],
        [
         113.607,
         27.625
        ],
        [
         113.609,
         27.585
        ],
        [
         113.579,
         27.545
        ],
        [
         113.583,
         27.525
        ],
        [
         113.627,
         27.5
        ],
        [
         113.591,
         27.468
        ],
        [
         113.598,
         27.429
        ],
        [
         113.632,
         27.405
        ],
        [
         113.606,
         27.389
        ],
        [
         113.617,
         27.346
        ],
        [
         113.658,
         27.347
        ],
        [
         113.7,
         27.332
        ],
        [
         113.728,
         27.35
        ],
        [
         113.873,
         27.385
        ],
        [
         113.873,
         27.347
        ],
        [
         113.854,
         27.305
        ],
        [
         113.873,
         27.29
        ],
        [
         113.847,
         27.222
        ],
        [
         113.837,
         27.21
        ],
        [
         113.99,
         27.21
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.645,
         29.23
        ],
        [
         113.652,
         29.226
        ],
        [
         113.693,
         29.226
        ],
        [
         113.692,
         29.197
        ],
        [
         113.663,
         29.169
        ],
        [
         113.691,
         29.115
        ],
        [
         113.696,
         29.077
        ],
        [
         113.723,
         29.105
        ],
        [
         113.75,
         29.061
        ],
        [
         113.776,
         29.095
        ],
        [
         113.816,
         29.105
        ],
        [
         113.853,
         29.059
        ],
        [
         113.882,
         29.065
        ],
        [
         113.877,
         29.038
        ],
        [
         113.898,
         29.029
        ],
        [
         113.942,
         29.047
        ],
        [
         113.952,
         29.093
        ],
        [
         113.987,
         29.126
        ],
        [
         113.99,
         29.127
        ],
        [
         113.99,
         29.23
        ],
        [
         113.645,
         29.23
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.837,
         27.21
        ],
        [
         113.847,
         27.222
        ],
        [
         113.873,
         27.29
        ],
        [
         113.854,
         27.305
        ],
        [
         113.873,
         27.347
        ],
        [
         113.873,
         27.385
        ],
        [
         113.728,
         27.35
        ],
        [
         113.7,
         27.332
        ],
        [
         113.658,
         27.347
        ],
        [
         113.617,
         27.346
        ],
        [
         113.606,
         27.389
        ],
        [
         113.632,
         27.405
        ],
        [
         113.598,
         27.429
        ],
        [
         113.591,
         27.468
        ],
        [
         113.627,
         27.5
        ],
        [
         113.583,
         27.525
        ],
        [
         113.579,
         27.545
        ],
        [
         113.609,
         27.585
        ],
        [
         113.607,
         27.625
        ],
        [
         113.652,
         27.664
        ],
        [
         113.697,
         27.72
        ],
        [
         113.699,
         27.741
        ],
        [
         113.763,
         27.799
        ],
        [
         113.756,
         27.86
        ],
        [
         113.728,
         27.875
        ],
        [
         113.752,
         27.934
        ],
        [
         113.823,
         27.982
        ],
        [
         113.845,
         27.972
        ],
        [
         113.864,
         28.005
        ],
        [
         113.914,
         27.991
        ],
        [
         113.936,
         28.019
        ],
        [
         113.966,
         28.018
        ],
        [
         113.97,
         28.041
        ],
        [
         113.99,
         28.038
        ],
        [
         113.99,
         28.946
        ],
        [
         113.974,
         28.938
        ],
        [
         113.955,
         28.979
        ],
        [
         113.962,
         28.999
        ],
        [
         113.942,
         29.047
        ],
        [
         113.898,
         29.029
        ],
        [
         113.877,
         29.038
        ],
        [
         113.882,
         29.065
        ],
        [
         113.853,
         29.059
        ],
        [
         113.816,
         29.105
        ],
        [
         113.776,
         29.095
        ],
        [
         113.75,
         29.061
        ],
        [
         113.723,
         29.105
        ],
        [
         113.696,
         29.077
        ],
        [
         113.691,
         29.115
        ],
        [
         113.663,
         29.169
        ],
        [
         113.692,
         29.197
        ],
        [
         113.693,
         29.226
        ],
        [
         113.652,
         29.226
        ],
        [
         113.645,
         29.23
        ],
        [
         111.94,
         29.23
        ],
        [
         111.94,
         27.21
        ],
        [
         113.837,
         27.21
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.905,
        29.031
       ],
       [
        112.801,
        28.927
       ],
       [
        112.693,
        28.874
       ],
       [
        112.545,
        28.838
       ],
       [
        112.351,
        28.861
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.994,
        29.147
       ],
       [
        113.02,
        29.23
       ]
      ]
     ]
    },
    "n": "Yuan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.94,
        28.996
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.905,
        29.031
       ],
       [
        112.994,
        29.147
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.94,
   27.21,
   113.99,
   29.23
  ]
 }
};
