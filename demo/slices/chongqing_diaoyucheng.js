// 本文件由 tools/build.py 自动生成（切片 chongqing_diaoyucheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chongqing_diaoyucheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chongqing_diaoyucheng"] = {
 "meta": {
  "kind": "battle",
  "region": "jiangnan",
  "province": "chongqing",
  "title": "宋·钓鱼城之战（宋蒙）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "diaoyucheng",
  "dossier_event": "event:ev_chongqing_diaoyucheng_01",
  "vocab_pack": "inline:chongqing_diaoyucheng",
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
    "note": "宋·钓鱼城之战（宋蒙）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·钓鱼城之战（宋蒙）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·钓鱼城之战（宋蒙）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·钓鱼城之战（宋蒙）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   6
  ],
  "page": "chongqing_diaoyucheng.html",
  "key": "chongqing_diaoyucheng",
  "scene_id": "chongqing_diaoyucheng"
 },
 "sources": [
  {
   "id": "songshi_diaoyu",
   "title": "《宋史》与钓鱼城",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "diaoyucheng",
   "name": "钓鱼城",
   "type": "fortress",
   "modern": "今重庆合川",
   "note": "依山为垒。坐标据地名志条目：钓鱼城，标 approx。",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 106.3,
   "lat": 30.0,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：钓鱼城（诚实回填 v0.221）。",
   "elev": 203
  },
  {
   "id": "hezhou",
   "name": "合州",
   "type": "city",
   "modern": "今重庆合川",
   "note": "钓鱼城所在",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "CHO__p01",
   "name": "余玠",
   "role": "南宋四川制置使",
   "note": "筑钓鱼城",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHO__p02",
   "name": "蒙哥",
   "role": "蒙古大汗",
   "note": "亲征钓鱼城",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHO__p03",
   "name": "王坚",
   "role": "宋将",
   "note": "守城",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "CHO_001",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役结果",
   "value_text": "蒙哥中飞石而殂",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_002",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "退兵原因",
   "value_text": "蒙哥死，大军乃退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "大军乃退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "大军乃退",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_003",
   "subject": "event:ev_chongqing_diaoyucheng_01",
   "predicate": "筑城时间",
   "value_text": "宝祐间筑城",
   "time": {
    "era_text": "宝祐间",
    "start": "1253-01-01",
    "end": "1253-12-31",
    "gregorian_year": 1253
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "宝祐间筑钓鱼城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "宝祐间筑钓鱼城",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_004",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役影响",
   "value_text": "西征之势为之一挫",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "西征之势为之一挫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "西征之势为之一挫",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_005",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_006",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥病逝，非中石",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "theater",
   "note": "异说",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_007",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥中箭死",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.3,
   "scale": "theater",
   "note": "异说",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_008",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥死于城下",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_009",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_010",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_011",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_012",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_013",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_014",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "CHO_015",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "value_text": "蒙哥殂，蒙古军退",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "中飞石而殂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "中飞石而殂",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "chongqing_diaoyucheng_DIM2",
   "subject": "技术:城防营造",
   "predicate": "技术维度",
   "value_text": "宋·钓鱼城之战（宋蒙） 的史料涉及城防营造（「\"predicate\": \"筑城时间\", \"value_tex」），补标技术维度（推断）。",
   "time": {
    "era_text": "开庆元年",
    "start": "1259-01-01",
    "end": "1259-12-31",
    "gregorian_year": 1259
   },
   "place": "diaoyucheng",
   "source": "songshi_diaoyu",
   "quote": "「\"predicate\": \"筑城时间\", \"value_tex」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "theater",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "宋官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_chongqing_diaoyucheng_02|战役损失",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "predicate": "战役损失",
   "kind": "record_vs_scholarship",
   "count": 11,
   "spread": null,
   "assertion_ids": [
    "CHO_005",
    "CHO_006",
    "CHO_007",
    "CHO_008",
    "CHO_009",
    "CHO_010",
    "CHO_011",
    "CHO_012",
    "CHO_013",
    "CHO_014",
    "CHO_015"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_chongqing_diaoyucheng_01",
   "subject": "event:ev_chongqing_diaoyucheng_01",
   "year": 1243,
   "era": "淳祐三年",
   "title": "余玠筑钓鱼城",
   "kind": "建置",
   "text": "余玠筑城于合州",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chongqing_diaoyucheng_02",
   "subject": "event:ev_chongqing_diaoyucheng_02",
   "year": 1259,
   "era": "开庆元年",
   "title": "蒙哥攻钓鱼城",
   "kind": "战事",
   "text": "蒙哥亲征，中飞石而殂",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "hezhou",
   "to": "diaoyucheng",
   "type": "military",
   "label": "蒙军攻钓鱼城",
   "_source_idx": 0,
   "_source_name": "《宋史》与钓鱼城",
   "_source_party": "宋官修",
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
   "宋官修"
  ],
  "party_bucket": {
   "宋官修": "宋官修"
  },
  "party_colors": {
   "宋官修": "#A0473A"
  },
  "factions": {
   "f_宋官修": {
    "name": "宋官修",
    "macro_party": "宋官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_宋官修": "#A0473A"
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
        105.3,
        29.0
       ],
       [
        105.3,
        31.0
       ],
       [
        107.3,
        31.0
       ],
       [
        107.3,
        29.0
       ],
       [
        105.3,
        29.0
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
         107.3,
         29.0
        ],
        [
         107.3,
         30.349
        ],
        [
         107.288,
         30.337
        ],
        [
         107.258,
         30.267
        ],
        [
         107.221,
         30.214
        ],
        [
         107.103,
         30.09
        ],
        [
         107.08,
         30.094
        ],
        [
         107.085,
         30.064
        ],
        [
         107.058,
         30.043
        ],
        [
         107.056,
         30.04
        ],
        [
         107.054,
         30.041
        ],
        [
         107.054,
         30.044
        ],
        [
         107.021,
         30.037
        ],
        [
         106.982,
         30.085
        ],
        [
         106.976,
         30.083
        ],
        [
         106.945,
         30.037
        ],
        [
         106.913,
         30.025
        ],
        [
         106.862,
         30.033
        ],
        [
         106.837,
         30.05
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.785,
         30.017
        ],
        [
         106.732,
         30.027
        ],
        [
         106.724,
         30.059
        ],
        [
         106.7,
         30.074
        ],
        [
         106.7,
         30.112
        ],
        [
         106.673,
         30.122
        ],
        [
         106.677,
         30.157
        ],
        [
         106.632,
         30.186
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.642,
         30.246
        ],
        [
         106.612,
         30.292
        ],
        [
         106.56,
         30.315
        ],
        [
         106.545,
         30.297
        ],
        [
         106.499,
         30.296
        ],
        [
         106.44,
         30.308
        ],
        [
         106.429,
         30.255
        ],
        [
         106.402,
         30.242
        ],
        [
         106.349,
         30.245
        ],
        [
         106.334,
         30.226
        ],
        [
         106.307,
         30.238
        ],
        [
         106.296,
         30.206
        ],
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.197
        ],
        [
         106.233,
         30.186
        ],
        [
         106.18,
         30.233
        ],
        [
         106.169,
         30.304
        ],
        [
         106.132,
         30.324
        ],
        [
         106.133,
         30.303
        ],
        [
         106.073,
         30.334
        ],
        [
         106.032,
         30.374
        ],
        [
         105.943,
         30.372
        ],
        [
         105.901,
         30.405
        ],
        [
         105.847,
         30.41
        ],
        [
         105.826,
         30.436
        ],
        [
         105.792,
         30.427
        ],
        [
         105.76,
         30.384
        ],
        [
         105.755,
         30.343
        ],
        [
         105.715,
         30.323
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.67,
         30.254
        ],
        [
         105.625,
         30.276
        ],
        [
         105.62,
         30.234
        ],
        [
         105.662,
         30.21
        ],
        [
         105.643,
         30.186
        ],
        [
         105.561,
         30.184
        ],
        [
         105.551,
         30.179
        ],
        [
         105.536,
         30.153
        ],
        [
         105.596,
         30.159
        ],
        [
         105.574,
         30.131
        ],
        [
         105.58,
         30.13
        ],
        [
         105.583,
         30.127
        ],
        [
         105.583,
         30.124
        ],
        [
         105.642,
         30.101
        ],
        [
         105.639,
         30.076
        ],
        [
         105.677,
         30.068
        ],
        [
         105.687,
         30.039
        ],
        [
         105.72,
         30.043
        ],
        [
         105.754,
         30.018
        ],
        [
         105.723,
         29.975
        ],
        [
         105.731,
         29.958
        ],
        [
         105.702,
         29.925
        ],
        [
         105.717,
         29.894
        ],
        [
         105.739,
         29.891
        ],
        [
         105.708,
         29.841
        ],
        [
         105.611,
         29.837
        ],
        [
         105.583,
         29.819
        ],
        [
         105.575,
         29.744
        ],
        [
         105.529,
         29.708
        ],
        [
         105.482,
         29.718
        ],
        [
         105.477,
         29.675
        ],
        [
         105.42,
         29.688
        ],
        [
         105.381,
         29.628
        ],
        [
         105.348,
         29.622
        ],
        [
         105.333,
         29.592
        ],
        [
         105.3,
         29.573
        ],
        [
         105.3,
         29.555
        ],
        [
         105.305,
         29.532
        ],
        [
         105.338,
         29.459
        ],
        [
         105.334,
         29.441
        ],
        [
         105.387,
         29.455
        ],
        [
         105.387,
         29.455
        ],
        [
         105.399,
         29.439
        ],
        [
         105.373,
         29.421
        ],
        [
         105.426,
         29.419
        ],
        [
         105.442,
         29.401
        ],
        [
         105.418,
         29.352
        ],
        [
         105.42,
         29.311
        ],
        [
         105.465,
         29.323
        ],
        [
         105.459,
         29.289
        ],
        [
         105.513,
         29.283
        ],
        [
         105.521,
         29.265
        ],
        [
         105.558,
         29.279
        ],
        [
         105.632,
         29.28
        ],
        [
         105.648,
         29.253
        ],
        [
         105.695,
         29.287
        ],
        [
         105.712,
         29.219
        ],
        [
         105.704,
         29.177
        ],
        [
         105.729,
         29.134
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.106
        ],
        [
         105.758,
         29.069
        ],
        [
         105.742,
         29.039
        ],
        [
         105.766,
         29.014
        ],
        [
         105.764,
         29.0
        ],
        [
         107.3,
         29.0
        ]
       ]
      ],
      [
       [
        [
         105.583,
         30.124
        ],
        [
         105.583,
         30.127
        ],
        [
         105.58,
         30.13
        ],
        [
         105.574,
         30.131
        ],
        [
         105.583,
         30.124
        ]
       ]
      ],
      [
       [
        [
         107.058,
         30.043
        ],
        [
         107.054,
         30.044
        ],
        [
         107.054,
         30.041
        ],
        [
         107.056,
         30.04
        ],
        [
         107.058,
         30.043
        ]
       ]
      ]
     ]
    },
    "n": "重庆市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         105.3,
         31.0
        ],
        [
         105.3,
         29.0
        ],
        [
         105.764,
         29.0
        ],
        [
         105.766,
         29.014
        ],
        [
         105.742,
         29.039
        ],
        [
         105.758,
         29.069
        ],
        [
         105.729,
         29.106
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.134
        ],
        [
         105.704,
         29.177
        ],
        [
         105.712,
         29.219
        ],
        [
         105.695,
         29.287
        ],
        [
         105.648,
         29.253
        ],
        [
         105.632,
         29.28
        ],
        [
         105.558,
         29.279
        ],
        [
         105.521,
         29.265
        ],
        [
         105.513,
         29.283
        ],
        [
         105.459,
         29.289
        ],
        [
         105.465,
         29.323
        ],
        [
         105.42,
         29.311
        ],
        [
         105.418,
         29.352
        ],
        [
         105.442,
         29.401
        ],
        [
         105.426,
         29.419
        ],
        [
         105.373,
         29.421
        ],
        [
         105.399,
         29.439
        ],
        [
         105.387,
         29.455
        ],
        [
         105.387,
         29.455
        ],
        [
         105.334,
         29.441
        ],
        [
         105.338,
         29.459
        ],
        [
         105.305,
         29.532
        ],
        [
         105.3,
         29.555
        ],
        [
         105.3,
         29.573
        ],
        [
         105.333,
         29.592
        ],
        [
         105.348,
         29.622
        ],
        [
         105.381,
         29.628
        ],
        [
         105.42,
         29.688
        ],
        [
         105.477,
         29.675
        ],
        [
         105.482,
         29.718
        ],
        [
         105.529,
         29.708
        ],
        [
         105.575,
         29.744
        ],
        [
         105.583,
         29.819
        ],
        [
         105.611,
         29.837
        ],
        [
         105.708,
         29.841
        ],
        [
         105.739,
         29.891
        ],
        [
         105.717,
         29.894
        ],
        [
         105.702,
         29.925
        ],
        [
         105.731,
         29.958
        ],
        [
         105.723,
         29.975
        ],
        [
         105.754,
         30.018
        ],
        [
         105.72,
         30.043
        ],
        [
         105.687,
         30.039
        ],
        [
         105.677,
         30.068
        ],
        [
         105.639,
         30.076
        ],
        [
         105.642,
         30.101
        ],
        [
         105.583,
         30.124
        ],
        [
         105.574,
         30.131
        ],
        [
         105.596,
         30.159
        ],
        [
         105.536,
         30.153
        ],
        [
         105.551,
         30.179
        ],
        [
         105.556,
         30.187
        ],
        [
         105.559,
         30.185
        ],
        [
         105.561,
         30.184
        ],
        [
         105.643,
         30.186
        ],
        [
         105.662,
         30.21
        ],
        [
         105.62,
         30.234
        ],
        [
         105.625,
         30.276
        ],
        [
         105.67,
         30.254
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.715,
         30.323
        ],
        [
         105.755,
         30.343
        ],
        [
         105.76,
         30.384
        ],
        [
         105.792,
         30.427
        ],
        [
         105.826,
         30.436
        ],
        [
         105.847,
         30.41
        ],
        [
         105.901,
         30.405
        ],
        [
         105.943,
         30.372
        ],
        [
         106.032,
         30.374
        ],
        [
         106.073,
         30.334
        ],
        [
         106.133,
         30.303
        ],
        [
         106.132,
         30.324
        ],
        [
         106.169,
         30.304
        ],
        [
         106.18,
         30.233
        ],
        [
         106.233,
         30.186
        ],
        [
         106.26,
         30.197
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.208
        ],
        [
         106.264,
         30.21
        ],
        [
         106.296,
         30.206
        ],
        [
         106.307,
         30.238
        ],
        [
         106.334,
         30.226
        ],
        [
         106.349,
         30.245
        ],
        [
         106.402,
         30.242
        ],
        [
         106.429,
         30.255
        ],
        [
         106.44,
         30.308
        ],
        [
         106.499,
         30.296
        ],
        [
         106.545,
         30.297
        ],
        [
         106.56,
         30.315
        ],
        [
         106.612,
         30.292
        ],
        [
         106.642,
         30.246
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.632,
         30.186
        ],
        [
         106.677,
         30.157
        ],
        [
         106.673,
         30.122
        ],
        [
         106.7,
         30.112
        ],
        [
         106.7,
         30.074
        ],
        [
         106.724,
         30.059
        ],
        [
         106.732,
         30.027
        ],
        [
         106.785,
         30.017
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.837,
         30.05
        ],
        [
         106.862,
         30.033
        ],
        [
         106.913,
         30.025
        ],
        [
         106.945,
         30.037
        ],
        [
         106.976,
         30.083
        ],
        [
         106.976,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.981,
         30.088
        ],
        [
         106.982,
         30.085
        ],
        [
         107.021,
         30.037
        ],
        [
         107.054,
         30.044
        ],
        [
         107.058,
         30.043
        ],
        [
         107.085,
         30.064
        ],
        [
         107.08,
         30.094
        ],
        [
         107.103,
         30.09
        ],
        [
         107.221,
         30.214
        ],
        [
         107.258,
         30.267
        ],
        [
         107.288,
         30.337
        ],
        [
         107.3,
         30.349
        ],
        [
         107.3,
         31.0
        ],
        [
         105.3,
         31.0
        ]
       ]
      ],
      [
       [
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.208
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.197
        ],
        [
         106.264,
         30.21
        ]
       ]
      ],
      [
       [
        [
         106.977,
         30.088
        ],
        [
         106.976,
         30.088
        ],
        [
         106.976,
         30.083
        ],
        [
         106.982,
         30.085
        ],
        [
         106.981,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ]
       ]
      ],
      [
       [
        [
         105.559,
         30.185
        ],
        [
         105.556,
         30.187
        ],
        [
         105.551,
         30.179
        ],
        [
         105.561,
         30.184
        ],
        [
         105.559,
         30.185
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       105.848,
       29.0
      ],
      [
       105.865,
       29.025
      ],
      [
       105.946,
       29.058
      ],
      [
       106.076,
       29.08
      ],
      [
       106.146,
       29.125
      ],
      [
       106.157,
       29.195
      ],
      [
       106.253,
       29.274
      ],
      [
       106.434,
       29.363
      ],
      [
       106.518,
       29.426
      ],
      [
       106.505,
       29.462
      ],
      [
       106.523,
       29.516
      ],
      [
       106.572,
       29.589
      ],
      [
       106.618,
       29.612
      ],
      [
       106.66,
       29.586
      ],
      [
       106.721,
       29.578
      ],
      [
       106.802,
       29.588
      ],
      [
       106.894,
       29.65
      ],
      [
       106.998,
       29.763
      ],
      [
       107.084,
       29.787
      ],
      [
       107.15,
       29.721
      ],
      [
       107.237,
       29.699
      ],
      [
       107.3,
       29.71
      ]
     ]
    },
    "n": "Chang Jiang"
   }
  ],
  "lakes": [],
  "_bbox": [
   105.3,
   29.0,
   107.3,
   31.0
  ]
 }
};
