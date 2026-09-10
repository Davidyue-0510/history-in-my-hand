// 本文件由 tools/build.py 自动生成（切片 ming_yuzhen_xia_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ming_yuzhen_xia_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ming_yuzhen_xia_llm"] = {
 "meta": {
  "kind": "dynasty",
  "region": "chuan_gui",
  "province": "chongqing",
  "title": "元末·明玉珍大夏国",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "suizhou",
  "dossier_event": "event:ev_ming_yuzhen_xia_llm_01",
  "vocab_pack": "inline:ming_yuzhen_xia_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "yuan_ming",
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
    "note": "元末·明玉珍大夏国：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "元末·明玉珍大夏国：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "元末·明玉珍大夏国：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "元末·明玉珍大夏国：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=ming_yuzhen_xia_llm",
  "key": "ming_yuzhen_xia_llm",
  "scene_id": "ming_yuzhen_xia_llm"
 },
 "sources": [
  {
   "id": "ming_yuzhen_src",
   "title": "明史·明玉珍传",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "chongqing",
   "name": "重庆",
   "type": "city",
   "modern": "今重庆",
   "note": "大夏都城",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "xia",
   "name": "三峡",
   "type": "region",
   "modern": "今重庆至湖北宜昌长江段",
   "note": "明师入峡路线",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "suizhou",
   "name": "随州",
   "type": "city",
   "modern": "今湖北随州",
   "note": "明玉珍籍贯。坐标据地名志条目：随州，标 chgis。",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.36982,
   "lat": 31.7151,
   "geo_match": "chgis",
   "geo_note": "坐标据地名志条目：随州（诚实回填 v0.221）。",
   "elev": 89
  }
 ],
 "persons": [
  {
   "id": "MIN__p01",
   "name": "明玉珍",
   "role": "大夏皇帝",
   "note": "随州人，率舟师入蜀，建大夏",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 3
  },
  {
   "id": "MIN__p02",
   "name": "明昇",
   "role": "大夏末帝",
   "note": "明玉珍子，年幼嗣位，后降明",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "MIN_001",
   "subject": "event:ev_ming_yuzhen_xia_llm_01",
   "predicate": "入蜀时间",
   "value_text": "元至正十七年",
   "time": {
    "era_text": "元至正十七年",
    "start": "1357-01-01",
    "end": "1357-12-31",
    "gregorian_year": 1357
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "元至正十七年，率舟师入蜀",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元至正十七年，率舟师入蜀",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_002",
   "subject": "event:ev_ming_yuzhen_xia_llm_01",
   "predicate": "攻克地点",
   "value_text": "克重庆",
   "time": {
    "era_text": "元至正十七年",
    "start": "1357-01-01",
    "end": "1357-12-31",
    "gregorian_year": 1357
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "克重庆",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "克重庆",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_003",
   "subject": "event:ev_ming_yuzhen_xia_llm_02",
   "predicate": "称帝时间",
   "value_text": "元至正二十二年",
   "time": {
    "era_text": "元至正二十二年",
    "start": "1362-01-01",
    "end": "1362-12-31",
    "gregorian_year": 1362
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "二十二年称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "二十二年称帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_004",
   "subject": "event:ev_ming_yuzhen_xia_llm_02",
   "predicate": "国号",
   "value_text": "大夏",
   "time": {
    "era_text": "元至正二十二年",
    "start": "1362-01-01",
    "end": "1362-12-31",
    "gregorian_year": 1362
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "国号大夏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "国号大夏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_005",
   "subject": "event:ev_ming_yuzhen_xia_llm_02",
   "predicate": "都城",
   "value_text": "都重庆",
   "time": {
    "era_text": "元至正二十二年",
    "start": "1362-01-01",
    "end": "1362-12-31",
    "gregorian_year": 1362
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "都重庆",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "都重庆",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_006",
   "subject": "person:MIN__p01",
   "predicate": "性格",
   "value_text": "性宽厚，禁侵掠",
   "time": {
    "era_text": "元至正二十二年",
    "start": "1362-01-01",
    "end": "1362-12-31",
    "gregorian_year": 1362
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "性宽厚，禁侵掠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "性宽厚，禁侵掠",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_007",
   "subject": "person:MIN__p01",
   "predicate": "政策",
   "value_text": "兴科举，开进士科",
   "time": {
    "era_text": "元至正二十二年",
    "start": "1362-01-01",
    "end": "1362-12-31",
    "gregorian_year": 1362
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "兴科举，开进士科",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "兴科举，开进士科",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_008",
   "subject": "person:MIN__p01",
   "predicate": "卒年",
   "value_text": "元至正二十六年卒",
   "time": {
    "era_text": "元至正二十六年",
    "start": "1366-01-01",
    "end": "1366-12-31",
    "gregorian_year": 1366
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "二十六年卒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "二十六年卒",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_009",
   "subject": "person:MIN__p02",
   "predicate": "嗣位",
   "value_text": "子昇嗣，年幼",
   "time": {
    "era_text": "元至正二十六年",
    "start": "1366-01-01",
    "end": "1366-12-31",
    "gregorian_year": 1366
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "子昇嗣，年幼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "子昇嗣，年幼",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_010",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "predicate": "明师入峡时间",
   "value_text": "洪武四年",
   "time": {
    "era_text": "明洪武四年",
    "start": "1371-01-01",
    "end": "1371-12-31",
    "gregorian_year": 1371
   },
   "place": "xia",
   "source": "ming_yuzhen_src",
   "quote": "洪武四年明师入峡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洪武四年明师入峡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_011",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "predicate": "结果",
   "value_text": "明昇降，夏亡",
   "time": {
    "era_text": "明洪武四年",
    "start": "1371-01-01",
    "end": "1371-12-31",
    "gregorian_year": 1371
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "昇降，夏亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "昇降，夏亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_012",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "predicate": "明师进军路线",
   "value_text": "入峡攻重庆",
   "time": {
    "era_text": "明洪武四年",
    "start": "1371-01-01",
    "end": "1371-12-31",
    "gregorian_year": 1371
   },
   "place": "xia",
   "source": "ming_yuzhen_src",
   "quote": "明师入峡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明师入峡",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_013",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "predicate": "夏亡原因",
   "value_text": "年幼主弱，明师强攻",
   "time": {
    "era_text": "明洪武四年",
    "start": "1371-01-01",
    "end": "1371-12-31",
    "gregorian_year": 1371
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "年幼，明师入峡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "年幼，明师入峡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_014",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "predicate": "明夏兵力对比",
   "value_text": "史料未载具体兵力",
   "time": {
    "era_text": "明洪武四年",
    "start": "1371-01-01",
    "end": "1371-12-31",
    "gregorian_year": 1371
   },
   "place": "xia",
   "source": "ming_yuzhen_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "《明史》及《明实录》",
    "skills": [
     "考据"
    ],
    "accept": "补充兵力数据"
   },
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ming_yuzhen_xia_llm_DIM2",
   "subject": "技术:交通航运",
   "predicate": "技术维度",
   "value_text": "元末·明玉珍大夏国 的史料涉及交通航运（「ote\": \"元至正十七年，率舟师入蜀\", \"quote_sta」），补标技术维度（推断）。",
   "time": {
    "era_text": "元至正十七年",
    "start": "1357-01-01",
    "end": "1357-12-31",
    "gregorian_year": 1357
   },
   "place": "chongqing",
   "source": "ming_yuzhen_src",
   "quote": "「ote\": \"元至正十七年，率舟师入蜀\", \"quote_sta」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "MIN_014"
 ],
 "events": [
  {
   "id": "ev_ming_yuzhen_xia_llm_01",
   "subject": "event:ev_ming_yuzhen_xia_llm_01",
   "year": 1357,
   "era": "元至正十七年",
   "title": "明玉珍入蜀",
   "kind": "战事",
   "text": "率舟师入蜀，克重庆",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ming_yuzhen_xia_llm_02",
   "subject": "event:ev_ming_yuzhen_xia_llm_02",
   "year": 1362,
   "era": "元至正二十二年",
   "title": "明玉珍称帝",
   "kind": "建置",
   "text": "称帝，国号大夏，都重庆",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ming_yuzhen_xia_llm_03",
   "subject": "event:ev_ming_yuzhen_xia_llm_03",
   "year": 1371,
   "era": "明洪武四年",
   "title": "明师入峡",
   "kind": "战事",
   "text": "明师入峡，明昇降，夏亡",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "suizhou",
   "to": "chongqing",
   "type": "military",
   "label": "明玉珍入蜀路线",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "xia",
   "to": "chongqing",
   "type": "battle",
   "label": "明师攻夏路线",
   "_source_idx": 0,
   "_source_name": "明史·明玉珍传",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "chongqing",
   "party": "后世官修",
   "start": 1357,
   "end": 1371,
   "timeline": "main"
  },
  {
   "place_id": "xia",
   "party": "后世官修",
   "start": 1357,
   "end": 1371,
   "timeline": "main"
  }
 ],
 "control_seats": [],
 "control_years": [
  1357,
  1371
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
        112.37,
        30.715
       ],
       [
        112.37,
        32.715
       ],
       [
        114.37,
        32.715
       ],
       [
        114.37,
        30.715
       ],
       [
        112.37,
        30.715
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
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.776,
         32.359
        ],
        [
         112.861,
         32.396
        ],
        [
         112.889,
         32.377
        ],
        [
         112.912,
         32.391
        ],
        [
         112.992,
         32.378
        ],
        [
         113.001,
         32.417
        ],
        [
         113.026,
         32.425
        ],
        [
         113.079,
         32.395
        ],
        [
         113.108,
         32.399
        ],
        [
         113.119,
         32.376
        ],
        [
         113.156,
         32.381
        ],
        [
         113.159,
         32.411
        ],
        [
         113.212,
         32.432
        ],
        [
         113.237,
         32.407
        ],
        [
         113.334,
         32.336
        ],
        [
         113.318,
         32.327
        ],
        [
         113.354,
         32.295
        ],
        [
         113.376,
         32.298
        ],
        [
         113.429,
         32.271
        ],
        [
         113.512,
         32.317
        ],
        [
         113.625,
         32.361
        ],
        [
         113.651,
         32.413
        ],
        [
         113.7,
         32.421
        ],
        [
         113.736,
         32.411
        ],
        [
         113.768,
         32.37
        ],
        [
         113.754,
         32.328
        ],
        [
         113.769,
         32.301
        ],
        [
         113.768,
         32.284
        ],
        [
         113.758,
         32.277
        ],
        [
         113.749,
         32.273
        ],
        [
         113.739,
         32.256
        ],
        [
         113.753,
         32.216
        ],
        [
         113.782,
         32.185
        ],
        [
         113.75,
         32.116
        ],
        [
         113.723,
         32.124
        ],
        [
         113.729,
         32.083
        ],
        [
         113.792,
         32.036
        ],
        [
         113.758,
         31.99
        ],
        [
         113.817,
         31.964
        ],
        [
         113.806,
         31.929
        ],
        [
         113.832,
         31.919
        ],
        [
         113.831,
         31.879
        ],
        [
         113.854,
         31.843
        ],
        [
         113.894,
         31.847
        ],
        [
         113.915,
         31.877
        ],
        [
         113.958,
         31.853
        ],
        [
         113.952,
         31.794
        ],
        [
         113.989,
         31.75
        ],
        [
         114.018,
         31.771
        ],
        [
         114.087,
         31.782
        ],
        [
         114.122,
         31.809
        ],
        [
         114.134,
         31.843
        ],
        [
         114.192,
         31.852
        ],
        [
         114.236,
         31.833
        ],
        [
         114.293,
         31.753
        ],
        [
         114.35,
         31.756
        ],
        [
         114.37,
         31.752
        ],
        [
         114.37,
         32.715
        ],
        [
         112.37,
         32.715
        ],
        [
         112.37,
         32.367
        ],
        [
         112.391,
         32.371
        ],
        [
         112.449,
         32.343
        ],
        [
         112.477,
         32.381
        ],
        [
         112.531,
         32.377
        ],
        [
         112.546,
         32.404
        ],
        [
         112.589,
         32.381
        ],
        [
         112.612,
         32.387
        ],
        [
         112.645,
         32.368
        ],
        [
         112.717,
         32.358
        ]
       ]
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.769,
         32.301
        ],
        [
         113.749,
         32.273
        ],
        [
         113.758,
         32.277
        ],
        [
         113.768,
         32.284
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.37,
         30.715
        ],
        [
         114.37,
         30.715
        ],
        [
         114.37,
         31.752
        ],
        [
         114.35,
         31.756
        ],
        [
         114.293,
         31.753
        ],
        [
         114.236,
         31.833
        ],
        [
         114.192,
         31.852
        ],
        [
         114.134,
         31.843
        ],
        [
         114.122,
         31.809
        ],
        [
         114.087,
         31.782
        ],
        [
         114.018,
         31.771
        ],
        [
         113.989,
         31.75
        ],
        [
         113.952,
         31.794
        ],
        [
         113.958,
         31.853
        ],
        [
         113.915,
         31.877
        ],
        [
         113.894,
         31.847
        ],
        [
         113.854,
         31.843
        ],
        [
         113.831,
         31.879
        ],
        [
         113.832,
         31.919
        ],
        [
         113.806,
         31.929
        ],
        [
         113.817,
         31.964
        ],
        [
         113.758,
         31.99
        ],
        [
         113.792,
         32.036
        ],
        [
         113.729,
         32.083
        ],
        [
         113.723,
         32.124
        ],
        [
         113.75,
         32.116
        ],
        [
         113.782,
         32.185
        ],
        [
         113.753,
         32.216
        ],
        [
         113.739,
         32.256
        ],
        [
         113.749,
         32.273
        ],
        [
         113.769,
         32.301
        ],
        [
         113.754,
         32.328
        ],
        [
         113.768,
         32.37
        ],
        [
         113.736,
         32.411
        ],
        [
         113.7,
         32.421
        ],
        [
         113.651,
         32.413
        ],
        [
         113.625,
         32.361
        ],
        [
         113.512,
         32.317
        ],
        [
         113.429,
         32.271
        ],
        [
         113.376,
         32.298
        ],
        [
         113.354,
         32.295
        ],
        [
         113.318,
         32.327
        ],
        [
         113.334,
         32.336
        ],
        [
         113.237,
         32.407
        ],
        [
         113.212,
         32.432
        ],
        [
         113.159,
         32.411
        ],
        [
         113.156,
         32.381
        ],
        [
         113.119,
         32.376
        ],
        [
         113.108,
         32.399
        ],
        [
         113.079,
         32.395
        ],
        [
         113.026,
         32.425
        ],
        [
         113.001,
         32.417
        ],
        [
         112.992,
         32.378
        ],
        [
         112.912,
         32.391
        ],
        [
         112.889,
         32.377
        ],
        [
         112.861,
         32.396
        ],
        [
         112.776,
         32.359
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ],
        [
         112.645,
         32.368
        ],
        [
         112.612,
         32.387
        ],
        [
         112.589,
         32.381
        ],
        [
         112.546,
         32.404
        ],
        [
         112.531,
         32.377
        ],
        [
         112.477,
         32.381
        ],
        [
         112.449,
         32.343
        ],
        [
         112.391,
         32.371
        ],
        [
         112.37,
         32.367
        ],
        [
         112.37,
         30.715
        ]
       ]
      ],
      [
       [
        [
         112.717,
         32.358
        ],
        [
         112.736,
         32.356
        ],
        [
         112.734,
         32.357
        ],
        [
         112.724,
         32.359
        ],
        [
         112.717,
         32.358
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.37,
        31.675
       ],
       [
        112.39,
        31.657
       ],
       [
        112.432,
        31.586
       ],
       [
        112.44,
        31.496
       ],
       [
        112.417,
        31.388
       ],
       [
        112.434,
        31.308
       ],
       [
        112.521,
        31.23
       ],
       [
        112.556,
        31.219
       ],
       [
        112.572,
        31.183
       ],
       [
        112.58,
        31.118
       ],
       [
        112.569,
        31.096
       ],
       [
        112.539,
        31.077
       ],
       [
        112.523,
        31.039
       ],
       [
        112.556,
        30.939
       ],
       [
        112.599,
        30.875
       ],
       [
        112.634,
        30.848
       ],
       [
        112.632,
        30.815
       ],
       [
        112.622,
        30.787
       ],
       [
        112.605,
        30.715
       ]
      ]
     ]
    },
    "n": "Han"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.37,
   30.715,
   114.37,
   32.715
  ]
 }
};
