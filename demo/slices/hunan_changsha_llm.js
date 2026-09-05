// 本文件由 tools/build.py 自动生成（切片 hunan_changsha_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hunan_changsha_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hunan_changsha_llm"] = {
 "meta": {
  "kind": "fusion",
  "region": "hunan",
  "province": "hunan",
  "title": "汉长沙国·马王堆（前202–前157）",
  "dossier_label": "hunan_changsha_llm",
  "subtitle": "",
  "primary_place": "linxiang",
  "dossier_event": "event:ev_hunan_changsha_llm_01",
  "vocab_pack": "inline:hunan_changsha_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "han",
  "scale_tier": "strategic",
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
    "note": "制度+思想→汉封长沙国，异姓诸侯仅存者，与中央削藩张力"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→临湘为江南枢纽，湘江水道连荆扬，国用赖农织"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→长沙国领湖南，蛮汉杂处，马王堆见侯国丧葬与工艺"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→扼湘江中游、控荆楚—岭南通道，汉初西南屏藩"
   }
  },
  "subject_names": [
   "person:HUN__p01",
   "person:HUN__p02",
   "person:HUN__p03",
   "person:HUN__p04",
   "place:linxiang",
   "place:mawangdui",
   "event:ev_hunan_changsha_llm_01",
   "event:ev_hunan_changsha_llm_02",
   "event:ev_hunan_changsha_llm_03"
  ],
  "page": "county.html?scene=hunan_changsha_llm",
  "key": "hunan_changsha_llm",
  "scene_id": "hunan_changsha_llm"
 },
 "sources": [
  {
   "id": "shi_ji_changsha_llm",
   "title": "史记·高祖本纪·长沙国（马王堆）",
   "party": "汉官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "汉",
   "note": ""
  },
  {
   "id": "synthesis",
   "title": "綜合研判·缺口標註",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "諸場景據原始文獻綜合研判，缺環以 gap 層誠實標註。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "linxiang",
   "name": "临湘",
   "type": "city",
   "modern": "今湖南长沙",
   "note": "长沙国都城",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 112.94,
   "lat": 28.23,
   "geo_unresolved": false,
   "elev": 42
  },
  {
   "id": "mawangdui",
   "name": "马王堆",
   "type": "yi",
   "modern": "今湖南长沙",
   "note": "汉墓群所在地",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 112.99,
   "lat": 28.21,
   "geo_unresolved": false,
   "elev": 41
  }
 ],
 "persons": [
  {
   "id": "HUN__p01",
   "name": "吴芮",
   "role": "长沙王",
   "note": "汉高祖封为长沙王",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HUN__p02",
   "name": "利苍",
   "role": "轪侯",
   "note": "马王堆汉墓墓主",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HUN__p03",
   "name": "汉高祖",
   "role": "皇帝",
   "note": "封吴芮为长沙王",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HUN__p04",
   "name": "汉景帝",
   "role": "皇帝",
   "note": "削长沙国",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HUN_001",
   "subject": "event:ev_hunan_changsha_llm_01",
   "predicate": "封王",
   "value_text": "汉高祖封吴芮为长沙王",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "汉高祖五年，封吴芮为长沙王",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖五年，封吴芮为长沙王",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_002",
   "subject": "event:ev_hunan_changsha_llm_01",
   "predicate": "都城",
   "value_text": "都临湘，今长沙",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "都临湘（今长沙）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "都临湘（今长沙）",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_003",
   "subject": "event:ev_hunan_changsha_llm_02",
   "predicate": "削国",
   "value_text": "长沙国传五世至景帝削",
   "time": {
    "era_text": "汉景帝时",
    "start": "-157"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "国传五世，至景帝削",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "国传五世，至景帝削",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_004",
   "subject": "event:ev_hunan_changsha_llm_02",
   "predicate": "异姓诸侯",
   "value_text": "长沙国为汉初异姓仅存",
   "time": {
    "era_text": "汉景帝时",
    "start": "-157"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "长沙国为汉初异姓诸侯仅存者",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "长沙国为汉初异姓诸侯仅存者",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_005",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "出土",
   "value_text": "马王堆汉墓出土帛书等",
   "time": {
    "era_text": "1970年代",
    "start": "1970"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "1970年代马王堆汉墓出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "1970年代马王堆汉墓出",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_006",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "墓主",
   "value_text": "轪侯利苍家族葬具",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "轪侯利苍家族葬具",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "轪侯利苍家族葬具",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_007",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "工艺",
   "value_text": "素纱襌衣见工艺之盛",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "素纱襌衣，见西汉长沙国丧葬与工艺之盛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    4
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "素纱襌衣，见西汉长沙国丧葬与工艺之盛",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_008",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "丧葬",
   "value_text": "马王堆反映丧葬制度",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "见西汉长沙国丧葬与工艺之盛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "见西汉长沙国丧葬与工艺之盛",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_009",
   "subject": "event:ev_hunan_changsha_llm_01",
   "predicate": "辖境",
   "value_text": "辖今湖南境",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "辖今湖南境",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "辖今湖南境",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_010",
   "subject": "event:ev_hunan_changsha_llm_02",
   "predicate": "削国原因",
   "value_text": "景帝削国原因未明",
   "time": {
    "era_text": "汉景帝时",
    "start": "-157"
   },
   "place": "linxiang",
   "source": "shi_ji_changsha_llm",
   "quote": "至景帝削",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "汉书·诸侯王表",
    "skills": [
     "文献考据"
    ],
    "accept": "景帝削国具体原因待考"
   },
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "至景帝削",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_011",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "帛书内容",
   "value_text": "帛书具体内容未详",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "帛书",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "lead": {
    "where": "马王堆帛书整理报告",
    "skills": [
     "古文字学"
    ],
    "accept": "帛书具体篇目待考"
   },
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "帛书",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUN_012",
   "subject": "event:ev_hunan_changsha_llm_03",
   "predicate": "墓葬年代",
   "value_text": "墓葬具体年代有争议",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "mawangdui",
   "source": "shi_ji_changsha_llm",
   "quote": "1970年代马王堆汉墓出",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "学界对下葬年代有分歧",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "1970年代马王堆汉墓出",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HUNAG3",
   "subject": "event:ev_hunan_changsha_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「制度」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "hunan_changsha_llm",
    "start": "-202",
    "end": "-202",
    "gregorian_year": -202
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "fusion",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補制度維直接史料與學界考訂"
   },
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HUN_010",
  "HUN_011",
  "HUNAG3"
 ],
 "events": [
  {
   "id": "ev_hunan_changsha_llm_01",
   "subject": "event:ev_hunan_changsha_llm_01",
   "year": -202,
   "era": "汉高祖五年",
   "title": "封吴芮为长沙王",
   "kind": "建置",
   "text": "汉高祖封吴芮为长沙王，都临湘",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hunan_changsha_llm_02",
   "subject": "event:ev_hunan_changsha_llm_02",
   "year": -157,
   "era": "汉景帝时",
   "title": "长沙国被削",
   "kind": "行政",
   "text": "长沙国传五世，至景帝削",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hunan_changsha_llm_03",
   "subject": "event:ev_hunan_changsha_llm_03",
   "year": -168,
   "era": "西汉",
   "title": "马王堆汉墓下葬",
   "kind": "其他",
   "text": "轪侯利苍家族葬于马王堆",
   "_source_idx": 0,
   "_source_name": "史记·高祖本纪·长沙国（马王堆）",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [],
 "control_seats": [],
 "control_years": null,
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap",
   "conflict"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "汉官修",
   "综合史料"
  ],
  "party_bucket": {
   "汉官修": "汉官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "汉官修": "#8C6239",
   "综合史料": "#9B7B5A"
  },
  "factions": {},
  "faction_colors": {}
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
