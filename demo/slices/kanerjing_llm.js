// 本文件由 tools/build.py 自动生成（切片 kanerjing_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["kanerjing_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["kanerjing_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "xibei",
  "province": "xinjiang",
  "title": "清·新疆坎儿井",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "turpan",
  "dossier_event": "event:ev_kanerjing_llm_01",
  "vocab_pack": "inline:kanerjing_llm",
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
    "note": "清·新疆坎儿井：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·新疆坎儿井：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "清·新疆坎儿井：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清·新疆坎儿井：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=kanerjing_llm",
  "key": "kanerjing_llm",
  "scene_id": "kanerjing_llm"
 },
 "sources": [
  {
   "id": "kanerjing_src",
   "title": "新疆图志·沟渠志（坎儿井）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "王树枏等",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "turpan",
   "name": "吐魯番",
   "type": "city",
   "modern": "今中國新疆吐魯番市",
   "note": "地燥少雨，用坎兒井",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 89.18,
   "lat": 42.95,
   "geo_note": "今新疆吐鲁番市",
   "elev": 145
  },
  {
   "id": "hami",
   "name": "哈密",
   "type": "city",
   "modern": "今中國新疆哈密市",
   "note": "地燥少雨，用坎兒井",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 93.51,
   "lat": 42.83,
   "geo_note": "今新疆哈密市",
   "elev": 766
  },
  {
   "id": "yili",
   "name": "伊犁",
   "type": "region",
   "modern": "今中國新疆伊犁哈薩克自治州",
   "note": "林則徐遣戍地",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 81.33,
   "lat": 43.92,
   "geo_note": "今新疆伊犁哈萨克自治州",
   "elev": 679
  },
  {
   "id": "xinjiang",
   "name": "新疆",
   "type": "region",
   "modern": "今中國新疆維吾爾自治區",
   "note": "左宗棠收復之地",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 85.0,
   "lat": 41.0,
   "geo_note": "今新疆代表点",
   "elev": 904
  }
 ],
 "persons": [
  {
   "id": "KAN__p01",
   "name": "林則徐",
   "role": "遣戍伊犁之大臣",
   "note": "倡浚渠築壩",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "KAN__p02",
   "name": "左宗棠",
   "role": "收復新疆之統帥",
   "note": "營屯田修坎井",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "KAN_001",
   "subject": "place:turpan",
   "predicate": "地理特徵",
   "value_text": "地燥少雨",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "吐魯番、哈密地燥少雨",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "吐魯番、哈密地燥少雨",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_002",
   "subject": "place:hami",
   "predicate": "地理特徵",
   "value_text": "地燥少雨",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "hami",
   "source": "kanerjing_src",
   "quote": "吐魯番、哈密地燥少雨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "吐魯番、哈密地燥少雨",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_003",
   "subject": "place:turpan",
   "predicate": "水源",
   "value_text": "引雪山之水",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "民引雪山之水",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "民引雪山之水",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_004",
   "subject": "place:turpan",
   "predicate": "坎兒井技術",
   "value_text": "穿井及泉，暗渠行地下",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "穿井及泉，相地疏鑿，連環如竇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "穿井及泉，相地疏鑿，連環如竇",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_005",
   "subject": "place:turpan",
   "predicate": "灌溉面積",
   "value_text": "溉田萬餘頃",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "溉田萬餘頃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "溉田萬餘頃",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_006",
   "subject": "person:KAN__p01",
   "predicate": "治水活動",
   "value_text": "倡浚渠築壩",
   "time": {
    "era_text": "道光年間",
    "start": "1821-01-01",
    "end": "1821-12-31",
    "gregorian_year": 1821
   },
   "place": "yili",
   "source": "kanerjing_src",
   "quote": "林則徐遣戍伊犁，曾倡浚渠、築壩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    3
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "林則徐遣戍伊犁，曾倡浚渠、築壩",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_007",
   "subject": "person:KAN__p01",
   "predicate": "影響",
   "value_text": "民賴其利",
   "time": {
    "era_text": "道光年間",
    "start": "1821-01-01",
    "end": "1821-12-31",
    "gregorian_year": 1821
   },
   "place": "yili",
   "source": "kanerjing_src",
   "quote": "民賴其利",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "民賴其利",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_008",
   "subject": "person:KAN__p02",
   "predicate": "屯田修井",
   "value_text": "營屯田、修坎井",
   "time": {
    "era_text": "光緒年間",
    "start": "1875-01-01",
    "end": "1875-12-31",
    "gregorian_year": 1875
   },
   "place": "xinjiang",
   "source": "kanerjing_src",
   "quote": "左宗棠收復新疆，營屯田、修坎井",
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
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "左宗棠收復新疆，營屯田、修坎井",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_009",
   "subject": "place:xinjiang",
   "predicate": "農業恢復",
   "value_text": "綠洲可耕，兵民足食",
   "time": {
    "era_text": "光緒年間",
    "start": "1875-01-01",
    "end": "1875-12-31",
    "gregorian_year": 1875
   },
   "place": "xinjiang",
   "source": "kanerjing_src",
   "quote": "綠洲可耕，兵民足食",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "綠洲可耕，兵民足食",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_010",
   "subject": "place:xinjiang",
   "predicate": "經濟復興",
   "value_text": "西域耕牧之利復興",
   "time": {
    "era_text": "光緒年間",
    "start": "1875-01-01",
    "end": "1875-12-31",
    "gregorian_year": 1875
   },
   "place": "xinjiang",
   "source": "kanerjing_src",
   "quote": "西域耕牧之利復興",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西域耕牧之利復興",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_011",
   "subject": "place:turpan",
   "predicate": "坎兒井功效",
   "value_text": "不及於蒸，節節出水",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "暗渠行地下數十里，節節出水，不及於蒸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "暗渠行地下數十里，節節出水，不及於蒸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_012",
   "subject": "event:ev_kanerjing_llm_01",
   "predicate": "歷史作用",
   "value_text": "林則徐治水影響深遠",
   "time": {
    "era_text": "道光年間",
    "start": "1821-01-01",
    "end": "1821-12-31",
    "gregorian_year": 1821
   },
   "place": "yili",
   "source": "kanerjing_src",
   "quote": "民賴其利",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "後世評價",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "民賴其利",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_013",
   "subject": "event:ev_kanerjing_llm_02",
   "predicate": "歷史作用",
   "value_text": "左宗棠屯田鞏固邊防",
   "time": {
    "era_text": "光緒年間",
    "start": "1875-01-01",
    "end": "1875-12-31",
    "gregorian_year": 1875
   },
   "place": "xinjiang",
   "source": "kanerjing_src",
   "quote": "兵民足食",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "後世評價",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "兵民足食",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "KAN_014",
   "subject": "place:turpan",
   "predicate": "坎兒井起源",
   "value_text": "具體起源時間不詳",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "turpan",
   "source": "kanerjing_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "文獻未載",
   "dims": [
    2
   ],
   "lead": {
    "where": "吐魯番盆地",
    "skills": [
     "考古學",
     "歷史地理"
    ],
    "accept": "需進一步考證"
   },
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
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
  "KAN_014"
 ],
 "events": [
  {
   "id": "ev_kanerjing_llm_01",
   "subject": "event:ev_kanerjing_llm_01",
   "year": 1842,
   "era": "道光二十二年",
   "title": "林則徐遣戍伊犁",
   "kind": "其他",
   "text": "林則徐遣戍伊犁，倡浚渠築壩。",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_kanerjing_llm_02",
   "subject": "event:ev_kanerjing_llm_02",
   "year": 1878,
   "era": "光緒四年",
   "title": "左宗棠收復新疆",
   "kind": "戰事",
   "text": "左宗棠收復新疆，營屯田修坎井。",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "turpan",
   "to": "hami",
   "type": "military",
   "label": "坎兒井分佈區域",
   "_source_idx": 0,
   "_source_name": "新疆图志·沟渠志（坎儿井）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "turpan",
   "party": "后世官修",
   "start": 1821,
   "end": 1875,
   "timeline": "main"
  },
  {
   "place_id": "hami",
   "party": "后世官修",
   "start": 1821,
   "end": 1875,
   "timeline": "main"
  },
  {
   "place_id": "yili",
   "party": "后世官修",
   "start": 1821,
   "end": 1875,
   "timeline": "main"
  },
  {
   "place_id": "xinjiang",
   "party": "后世官修",
   "start": 1821,
   "end": 1875,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "turpan",
   "name": "吐魯番",
   "lon": 89.18,
   "lat": 42.95,
   "region": "xibei"
  },
  {
   "place_id": "hami",
   "name": "哈密",
   "lon": 93.51,
   "lat": 42.83,
   "region": "xibei"
  },
  {
   "place_id": "yili",
   "name": "伊犁",
   "lon": 81.33,
   "lat": 43.92,
   "region": "xibei"
  },
  {
   "place_id": "xinjiang",
   "name": "新疆",
   "lon": 85.0,
   "lat": 41.0,
   "region": "xibei"
  }
 ],
 "control_years": [
  1821,
  1875
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
        79.503,
        39.173
       ],
       [
        95.337,
        45.747
       ],
       [
        79.503,
        39.173
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
         95.337,
         39.173
        ],
        [
         95.336,
         41.644
        ],
        [
         95.247,
         41.613
        ],
        [
         95.199,
         41.719
        ],
        [
         95.136,
         41.773
        ],
        [
         95.012,
         41.727
        ],
        [
         94.862,
         41.668
        ],
        [
         94.75,
         41.538
        ],
        [
         94.184,
         41.268
        ],
        [
         93.908,
         40.984
        ],
        [
         93.821,
         40.794
        ],
        [
         93.506,
         40.648
        ],
        [
         92.92,
         40.392
        ],
        [
         92.797,
         40.154
        ],
        [
         92.688,
         39.657
        ],
        [
         92.526,
         39.369
        ],
        [
         92.339,
         39.237
        ],
        [
         93.101,
         39.173
        ],
        [
         93.124,
         39.173
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
         93.124,
         39.173
        ],
        [
         93.101,
         39.173
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
         95.337,
         44.028
        ],
        [
         95.337,
         44.054
        ],
        [
         95.239,
         44.277
        ],
        [
         94.999,
         44.253
        ],
        [
         94.826,
         44.32
        ],
        [
         94.723,
         44.341
        ],
        [
         94.606,
         44.448
        ],
        [
         94.471,
         44.509
        ],
        [
         94.359,
         44.516
        ],
        [
         94.28,
         44.604
        ],
        [
         94.215,
         44.668
        ],
        [
         94.066,
         44.732
        ],
        [
         93.716,
         44.894
        ],
        [
         93.509,
         44.968
        ],
        [
         93.377,
         44.985
        ],
        [
         93.314,
         44.98
        ],
        [
         93.174,
         45.015
        ],
        [
         93.062,
         45.018
        ],
        [
         92.933,
         45.018
        ],
        [
         92.884,
         45.047
        ],
        [
         92.779,
         45.051
        ],
        [
         92.548,
         45.018
        ],
        [
         92.414,
         45.018
        ],
        [
         92.316,
         45.029
        ],
        [
         92.1,
         45.081
        ],
        [
         91.886,
         45.079
        ],
        [
         91.695,
         45.065
        ],
        [
         91.5,
         45.104
        ],
        [
         91.429,
         45.157
        ],
        [
         91.335,
         45.13
        ],
        [
         91.231,
         45.154
        ],
        [
         91.171,
         45.2
        ],
        [
         91.05,
         45.209
        ],
        [
         90.962,
         45.201
        ],
        [
         90.867,
         45.209
        ],
        [
         90.877,
         45.281
        ],
        [
         90.805,
         45.295
        ],
        [
         90.774,
         45.406
        ],
        [
         90.723,
         45.465
        ],
        [
         90.677,
         45.582
        ],
        [
         90.729,
         45.747
        ],
        [
         82.29,
         45.716
        ],
        [
         82.267,
         45.62
        ],
        [
         82.448,
         45.461
        ],
        [
         82.601,
         45.346
        ],
        [
         82.563,
         45.205
        ],
        [
         82.345,
         45.219
        ],
        [
         82.207,
         45.237
        ],
        [
         82.091,
         45.222
        ],
        [
         82.053,
         45.256
        ],
        [
         81.921,
         45.233
        ],
        [
         81.832,
         45.32
        ],
        [
         81.677,
         45.355
        ],
        [
         81.583,
         45.337
        ],
        [
         81.537,
         45.304
        ],
        [
         81.463,
         45.264
        ],
        [
         81.399,
         45.275
        ],
        [
         81.328,
         45.261
        ],
        [
         81.237,
         45.247
        ],
        [
         81.17,
         45.211
        ],
        [
         81.081,
         45.183
        ],
        [
         80.966,
         45.168
        ],
        [
         80.898,
         45.127
        ],
        [
         80.817,
         45.153
        ],
        [
         80.686,
         45.129
        ],
        [
         80.519,
         45.109
        ],
        [
         80.446,
         45.098
        ],
        [
         80.405,
         45.049
        ],
        [
         80.328,
         45.07
        ],
        [
         80.244,
         45.032
        ],
        [
         80.145,
         45.059
        ],
        [
         80.112,
         45.053
        ],
        [
         80.057,
         45.011
        ],
        [
         79.952,
         44.958
        ],
        [
         79.888,
         44.909
        ],
        [
         79.954,
         44.849
        ],
        [
         79.999,
         44.794
        ],
        [
         80.116,
         44.815
        ],
        [
         80.188,
         44.826
        ],
        [
         80.201,
         44.757
        ],
        [
         80.313,
         44.705
        ],
        [
         80.412,
         44.605
        ],
        [
         80.383,
         44.401
        ],
        [
         80.413,
         44.265
        ],
        [
         80.407,
         44.15
        ],
        [
         80.45,
         44.078
        ],
        [
         80.458,
         43.981
        ],
        [
         80.475,
         43.938
        ],
        [
         80.522,
         43.816
        ],
        [
         80.761,
         43.447
        ],
        [
         80.736,
         43.39
        ],
        [
         80.693,
         43.32
        ],
        [
         80.769,
         43.266
        ],
        [
         80.79,
         43.202
        ],
        [
         80.794,
         43.137
        ],
        [
         80.732,
         43.131
        ],
        [
         80.651,
         43.147
        ],
        [
         80.556,
         43.105
        ],
        [
         80.417,
         43.057
        ],
        [
         80.398,
         42.997
        ],
        [
         80.591,
         42.923
        ],
        [
         80.504,
         42.882
        ],
        [
         80.407,
         42.835
        ],
        [
         80.28,
         42.838
        ],
        [
         80.259,
         42.791
        ],
        [
         80.228,
         42.693
        ],
        [
         80.164,
         42.63
        ],
        [
         80.222,
         42.533
        ],
        [
         80.226,
         42.486
        ],
        [
         80.239,
         42.39
        ],
        [
         80.284,
         42.32
        ],
        [
         80.292,
         42.26
        ],
        [
         80.233,
         42.21
        ],
        [
         80.164,
         42.153
        ],
        [
         80.168,
         42.097
        ],
        [
         80.142,
         42.035
        ],
        [
         79.924,
         42.042
        ],
        [
         79.855,
         41.984
        ],
        [
         79.776,
         41.892
        ],
        [
         79.641,
         41.885
        ],
        [
         79.551,
         41.834
        ],
        [
         79.503,
         39.173
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
         95.337,
         44.028
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
       80.888,
       40.467
      ],
      [
       81.129,
       40.535
      ],
      [
       81.343,
       40.574
      ],
      [
       81.546,
       40.707
      ],
      [
       81.81,
       40.752
      ],
      [
       82.121,
       40.886
      ],
      [
       82.749,
       41.004
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
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       79.503,
       39.82
      ],
      [
       80.097,
       40.108
      ],
      [
       80.437,
       40.361
      ],
      [
       80.888,
       40.467
      ]
     ]
    },
    "n": "Yarkant"
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
   79.503,
   39.173,
   95.337,
   45.747
  ]
 }
};
