// 本文件由 tools/build.py 自动生成（切片 xiyu_dunhu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xiyu_dunhu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xiyu_dunhu_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "xibei",
  "province": "xinjiang",
  "title": "西域都护府之设（前60）",
  "dossier_label": "xiyu_dunhu_llm",
  "subtitle": "",
  "primary_place": "wulei",
  "dossier_event": "event:ev_xiyu_dunhu_llm_01",
  "vocab_pack": "inline:xiyu_dunhu_llm",
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
    "note": "制度+思想→漢設西域都護、頒號令於三十六國，將西域納入朝貢—都護體系 vs 匈奴勢力退出"
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
    "note": "技術+制度→自敦煌西至鹽澤起亭、烽燧相望，驛站與屯田支撐長程管控"
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
    "note": "社會+制度→日逐王率眾降漢、西域諸國質子入侍，兵民一體的邊疆編戶"
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
    "note": "地理+制度→烏壘城居中鎮撫，控天山南北通道，斷匈奴右臂"
   }
  },
  "subject_names": [
   "person:XIY__p01",
   "person:XIY__p02",
   "place:wulei",
   "place:dunhuang",
   "place:yanze",
   "event:ev_xiyu_dunhu_llm_01",
   "event:ev_xiyu_dunhu_llm_02"
  ],
  "page": "county.html?scene=xiyu_dunhu_llm",
  "key": "xiyu_dunhu_llm",
  "scene_id": "xiyu_dunhu_llm"
 },
 "sources": [
  {
   "id": "han_shu_xiyu_llm",
   "title": "汉书·西域传",
   "party": "汉官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
   "period": "汉",
   "note": ""
  },
  {
   "id": "synthesis",
   "title": "綜合研判·缺口標註",
   "party": "综合史料",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）",
   "compiler": "綜合",
   "period": "",
   "note": "",
   "availability": "not_free",
   "bias_note": "諸場景據原始文獻綜合研判，缺環以 gap 層誠實標註。"
  }
 ],
 "places": [
  {
   "id": "wulei",
   "name": "乌垒城",
   "type": "city",
   "modern": "今新疆轮台县",
   "note": "西域都护治所",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 84.36,
   "lat": 41.78,
   "geo_unresolved": false,
   "elev": 945
  },
  {
   "id": "dunhuang",
   "name": "敦煌",
   "type": "city",
   "modern": "今甘肃敦煌",
   "note": "汉西陲重镇",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 94.66,
   "lat": 40.14,
   "geo_unresolved": false,
   "elev": 1254
  },
  {
   "id": "yanze",
   "name": "盐泽",
   "type": "region",
   "modern": "今罗布泊",
   "note": "敦煌西之盐泽",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 90.5,
   "lat": 40.3,
   "geo_unresolved": false,
   "elev": 793
  }
 ],
 "persons": [
  {
   "id": "XIY__p01",
   "name": "郑吉",
   "role": "西域都护",
   "note": "首任西域都护，镇抚西域",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "XIY__p02",
   "name": "先贤掸",
   "role": "匈奴日逐王",
   "note": "率众降汉，导致西域都护设立",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "XIY_001",
   "subject": "event:ev_xiyu_dunhu_llm_01",
   "predicate": "降汉",
   "value_text": "匈奴日逐王率众降汉",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "匈奴日逐王先贤掸率众降汉",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "匈奴日逐王先贤掸率众降汉",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_002",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "设立",
   "value_text": "郑吉为西域都护，治乌垒城",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "郑吉为西域都护，治乌垒城",
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
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "郑吉为西域都护，治乌垒城",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_003",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "镇抚范围",
   "value_text": "镇抚西域三十六国",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "镇抚西域三十六国",
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
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "镇抚西域三十六国",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_004",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "号令颁行",
   "value_text": "汉之号令颁于西域",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "汉之号令颁于西域",
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
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "汉之号令颁于西域",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_005",
   "subject": "place:dunhuang",
   "predicate": "起亭",
   "value_text": "自敦煌西至盐泽起亭",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "dunhuang",
   "source": "han_shu_xiyu_llm",
   "quote": "自敦煌西至盐泽，往往起亭",
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
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "自敦煌西至盐泽，往往起亭",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_006",
   "subject": "place:yanze",
   "predicate": "烽燧相望",
   "value_text": "烽燧相望，西域内服",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "yanze",
   "source": "han_shu_xiyu_llm",
   "quote": "烽燧相望，西域内服",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "烽燧相望，西域内服",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_007",
   "subject": "person:XIY__p01",
   "predicate": "任命",
   "value_text": "郑吉被任命为西域都护",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "郑吉为西域都护",
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
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "郑吉为西域都护",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_008",
   "subject": "person:XIY__p02",
   "predicate": "降汉",
   "value_text": "先贤掸率众降汉",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "匈奴日逐王先贤掸率众降汉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "匈奴日逐王先贤掸率众降汉",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_009",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "治所",
   "value_text": "治乌垒城",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "治乌垒城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "治乌垒城",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_010",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "设立时间",
   "value_text": "神爵二年始设",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "西域都护之设，始于此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "西域都护之设，始于此",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_011",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "历史意义",
   "value_text": "标志汉对西域正式统治",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "汉之号令颁于西域",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界普遍认为",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "汉之号令颁于西域",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_012",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "都护职责",
   "value_text": "镇抚诸国，维护秩序",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "镇抚西域三十六国",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世概括",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "镇抚西域三十六国",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIY_013",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "predicate": "具体辖境",
   "value_text": "三十六国具体名单不详",
   "time": {
    "era_text": "神爵二年",
    "start": "-60"
   },
   "place": "wulei",
   "source": "han_shu_xiyu_llm",
   "quote": "西域三十六国",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载",
   "dims": [
    3
   ],
   "lead": {
    "where": "汉书·西域传",
    "skills": [
     "历史地理"
    ],
    "accept": "待考"
   },
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "西域三十六国",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "XIYUG2",
   "subject": "event:ev_xiyu_dunhu_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "xiyu_dunhu_llm",
    "start": "-60",
    "end": "-60",
    "gregorian_year": -60
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補技術維直接史料與學界考訂"
   },
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIYUG4",
   "subject": "event:ev_xiyu_dunhu_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「社會」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "xiyu_dunhu_llm",
    "start": "-60",
    "end": "-60",
    "gregorian_year": -60
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補社會維直接史料與學界考訂"
   },
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIYUG5",
   "subject": "event:ev_xiyu_dunhu_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「思想」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "xiyu_dunhu_llm",
    "start": "-60",
    "end": "-60",
    "gregorian_year": -60
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補思想維直接史料與學界考訂"
   },
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XIY_013",
  "XIYUG2",
  "XIYUG4",
  "XIYUG5"
 ],
 "events": [
  {
   "id": "ev_xiyu_dunhu_llm_01",
   "subject": "event:ev_xiyu_dunhu_llm_01",
   "year": -60,
   "era": "汉宣帝神爵二年",
   "title": "日逐王降汉",
   "kind": "外交",
   "text": "匈奴日逐王先贤掸率众降汉",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xiyu_dunhu_llm_02",
   "subject": "event:ev_xiyu_dunhu_llm_02",
   "year": -60,
   "era": "汉宣帝神爵二年",
   "title": "设西域都护",
   "kind": "建置",
   "text": "郑吉为西域都护，治乌垒城",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "dunhuang",
   "to": "yanze",
   "type": "military",
   "label": "起亭燧相望",
   "_source_idx": 0,
   "_source_name": "汉书·西域传",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
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
        82.815,
        38.595
       ],
       [
        96.205,
        43.325
       ],
       [
        82.815,
        38.595
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
         96.205,
         38.595
        ],
        [
         96.166,
         42.623
        ],
        [
         96.072,
         42.57
        ],
        [
         96.017,
         42.482
        ],
        [
         96.066,
         42.415
        ],
        [
         96.041,
         42.327
        ],
        [
         96.077,
         42.149
        ],
        [
         96.138,
         42.02
        ],
        [
         96.055,
         41.936
        ],
        [
         95.855,
         41.85
        ],
        [
         95.759,
         41.836
        ],
        [
         95.571,
         41.796
        ],
        [
         95.394,
         41.693
        ],
        [
         95.3,
         41.566
        ],
        [
         95.195,
         41.695
        ],
        [
         95.165,
         41.735
        ],
        [
         95.111,
         41.769
        ],
        [
         94.969,
         41.719
        ],
        [
         94.81,
         41.619
        ],
        [
         94.534,
         41.506
        ],
        [
         94.011,
         41.115
        ],
        [
         93.81,
         40.88
        ],
        [
         93.761,
         40.665
        ],
        [
         92.928,
         40.573
        ],
        [
         92.907,
         40.311
        ],
        [
         92.746,
         39.868
        ],
        [
         92.64,
         39.514
        ],
        [
         92.378,
         39.258
        ],
        [
         92.344,
         39.146
        ],
        [
         92.367,
         39.059
        ],
        [
         92.459,
         39.043
        ],
        [
         92.49,
         39.1
        ],
        [
         92.659,
         39.11
        ],
        [
         92.867,
         39.139
        ],
        [
         92.939,
         39.17
        ],
        [
         93.043,
         39.147
        ],
        [
         93.142,
         39.161
        ],
        [
         93.166,
         39.091
        ],
        [
         93.179,
         38.924
        ],
        [
         93.274,
         38.896
        ],
        [
         93.729,
         38.924
        ],
        [
         93.884,
         38.868
        ],
        [
         93.77,
         38.821
        ],
        [
         93.774,
         38.771
        ],
        [
         93.885,
         38.721
        ],
        [
         93.973,
         38.725
        ],
        [
         94.37,
         38.763
        ],
        [
         96.205,
         38.595
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
         94.445,
         38.595
        ],
        [
         94.281,
         38.76
        ],
        [
         93.952,
         38.715
        ],
        [
         93.8,
         38.751
        ],
        [
         93.756,
         38.807
        ],
        [
         93.884,
         38.826
        ],
        [
         93.835,
         38.868
        ],
        [
         93.453,
         38.916
        ],
        [
         93.238,
         38.916
        ],
        [
         93.198,
         39.046
        ],
        [
         93.132,
         39.108
        ],
        [
         93.115,
         39.18
        ],
        [
         92.978,
         39.143
        ],
        [
         92.889,
         39.16
        ],
        [
         92.766,
         39.137
        ],
        [
         92.546,
         39.111
        ],
        [
         92.459,
         39.064
        ],
        [
         92.41,
         39.038
        ],
        [
         92.38,
         39.0
        ],
        [
         92.198,
         38.984
        ],
        [
         92.109,
         38.964
        ],
        [
         91.881,
         38.899
        ],
        [
         91.806,
         38.873
        ],
        [
         91.681,
         38.853
        ],
        [
         91.447,
         38.814
        ],
        [
         91.243,
         38.752
        ],
        [
         90.993,
         38.695
        ],
        [
         90.9,
         38.68
        ],
        [
         90.66,
         38.674
        ],
        [
         90.646,
         38.635
        ],
        [
         90.609,
         38.595
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         96.205,
         43.019
        ],
        [
         95.88,
         43.28
        ],
        [
         82.815,
         43.325
        ],
        [
         90.609,
         38.595
        ],
        [
         90.646,
         38.635
        ],
        [
         90.66,
         38.674
        ],
        [
         90.9,
         38.68
        ],
        [
         90.993,
         38.695
        ],
        [
         91.243,
         38.752
        ],
        [
         91.447,
         38.814
        ],
        [
         91.681,
         38.853
        ],
        [
         91.806,
         38.873
        ],
        [
         91.881,
         38.899
        ],
        [
         92.109,
         38.964
        ],
        [
         92.198,
         38.984
        ],
        [
         92.38,
         39.0
        ],
        [
         92.41,
         39.038
        ],
        [
         92.366,
         39.096
        ],
        [
         92.339,
         39.237
        ],
        [
         92.526,
         39.369
        ],
        [
         92.688,
         39.657
        ],
        [
         92.797,
         40.154
        ],
        [
         92.92,
         40.392
        ],
        [
         93.506,
         40.648
        ],
        [
         93.821,
         40.794
        ],
        [
         93.908,
         40.984
        ],
        [
         94.184,
         41.268
        ],
        [
         94.75,
         41.538
        ],
        [
         94.862,
         41.668
        ],
        [
         95.012,
         41.727
        ],
        [
         95.136,
         41.773
        ],
        [
         95.199,
         41.719
        ],
        [
         95.247,
         41.613
        ],
        [
         95.336,
         41.644
        ],
        [
         95.445,
         41.72
        ],
        [
         95.656,
         41.826
        ],
        [
         95.801,
         41.848
        ],
        [
         95.998,
         41.906
        ],
        [
         96.117,
         41.986
        ],
        [
         96.139,
         42.054
        ],
        [
         96.178,
         42.218
        ],
        [
         96.042,
         42.353
        ],
        [
         95.979,
         42.437
        ],
        [
         96.024,
         42.543
        ],
        [
         96.104,
         42.604
        ],
        [
         96.205,
         42.642
        ]
       ]
      ]
     ]
    },
    "n": "新疆维吾尔自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       89.387,
       40.633
      ],
      [
       88.715,
       40.69
      ],
      [
       88.286,
       40.815
      ],
      [
       87.943,
       40.877
      ],
      [
       87.659,
       40.958
      ],
      [
       87.397,
       40.957
      ],
      [
       87.114,
       41.016
      ],
      [
       86.991,
       41.13
      ],
      [
       86.749,
       41.294
      ],
      [
       86.372,
       41.243
      ]
     ]
    },
    "n": "Konqi"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       82.815,
       40.978
      ],
      [
       83.082,
       40.928
      ],
      [
       83.455,
       40.998
      ],
      [
       83.793,
       41.001
      ],
      [
       83.896,
       40.998
      ],
      [
       84.091,
       41.131
      ],
      [
       84.477,
       41.195
      ],
      [
       84.984,
       41.129
      ],
      [
       85.218,
       41.028
      ],
      [
       85.617,
       40.993
      ],
      [
       86.038,
       41.071
      ],
      [
       86.335,
       41.037
      ],
      [
       86.505,
       41.1
      ],
      [
       86.345,
       41.206
      ],
      [
       86.382,
       41.278
      ],
      [
       86.334,
       41.275
      ],
      [
       86.163,
       41.352
      ],
      [
       85.959,
       41.388
      ],
      [
       85.814,
       41.496
      ],
      [
       85.795,
       41.651
      ],
      [
       85.888,
       41.738
      ],
      [
       86.085,
       41.752
      ],
      [
       86.212,
       41.815
      ],
      [
       86.443,
       41.786
      ],
      [
       86.753,
       41.826
      ]
     ]
    },
    "n": "Tarim"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        87.375,
        41.851
       ],
       [
        87.102,
        41.901
       ],
       [
        86.753,
        41.825
       ],
       [
        86.735,
        41.903
       ],
       [
        86.829,
        42.073
       ],
       [
        87.008,
        42.084
       ],
       [
        87.375,
        41.908
       ],
       [
        87.375,
        41.851
       ]
      ]
     ]
    },
    "n": "Bosten Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        90.28,
        40.681
       ],
       [
        90.347,
        40.481
       ],
       [
        90.442,
        40.23
       ],
       [
        90.329,
        40.201
       ],
       [
        90.28,
        40.371
       ],
       [
        90.168,
        40.655
       ],
       [
        90.142,
        40.783
       ],
       [
        90.247,
        40.811
       ],
       [
        90.28,
        40.681
       ]
      ]
     ]
    },
    "n": "Lop Nur"
   }
  ],
  "_bbox": [
   82.815,
   38.595,
   96.205,
   43.325
  ]
 }
};
