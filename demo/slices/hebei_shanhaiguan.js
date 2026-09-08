// 本文件由 tools/build.py 自动生成（切片 hebei_shanhaiguan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hebei_shanhaiguan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hebei_shanhaiguan"] = {
 "meta": {
  "kind": "engineering",
  "region": "huabei",
  "province": "hebei",
  "title": "明·山海关筑城（明长城东端锁钥）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "shanhaiguan",
  "dossier_event": "event:ev_hebei_shanhaiguan_01",
  "vocab_pack": "inline:hebei_shanhaiguan",
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
    "note": "明·山海关筑城（明长城东端锁钥）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·山海关筑城（明长城东端锁钥）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明·山海关筑城（明长城东端锁钥）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·山海关筑城（明长城东端锁钥）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "county.html?scene=hebei_shanhaiguan",
  "key": "hebei_shanhaiguan",
  "scene_id": "hebei_shanhaiguan"
 },
 "sources": [
  {
   "id": "mingshi_shanhai",
   "title": "《明史·地理志》与山海关",
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
   "id": "shanhaiguan",
   "name": "山海关",
   "type": "fortress",
   "modern": "今中国河北省秦皇岛市山海关区",
   "note": "长城东端锁钥",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.0,
   "lat": 39.0,
   "geo_note": "华北区域",
   "geo_match": "substring",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "guangning",
    "jinzhou",
    "ningyuan"
   ],
   "elev": 16
  },
  {
   "id": "yuguan",
   "name": "榆关",
   "type": "yi",
   "modern": "今中国河北省秦皇岛市抚宁区",
   "note": "山海关故地",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "liaoxi",
   "name": "辽西走廊",
   "type": "region",
   "modern": "今中国辽宁省锦州至山海关一带",
   "note": "连接关内外的通道",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "jiliao",
   "name": "蓟辽",
   "type": "region",
   "modern": "今中国河北北部及辽宁西部",
   "note": "明代军事重镇",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HEB__p01",
   "name": "徐达",
   "role": "魏国公，明开国元勋",
   "note": "经略北边，建山海关",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HEB_001",
   "subject": "event:ev_hebei_shanhaiguan_01",
   "predicate": "建置",
   "value_text": "徐达筑山海关",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "洪武十四年，魏国公徐达经略北边，设关城于榆关故地",
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
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洪武十四年，魏国公徐达经略北边，设关城于榆关故地",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_002",
   "subject": "place:shanhaiguan",
   "predicate": "地理特征",
   "value_text": "依山襟海，为长城东端锁钥",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "依山襟海，赐名山海关，为长城东端锁钥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依山襟海，赐名山海关，为长城东端锁钥",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_003",
   "subject": "place:shanhaiguan",
   "predicate": "战略地位",
   "value_text": "扼蓟辽孔道，控建州蒙古",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "关扼蓟辽孔道，屯兵戍守，控建州、蒙古之冲",
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
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关扼蓟辽孔道，屯兵戍守，控建州、蒙古之冲",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_004",
   "subject": "person:HEB__p01",
   "predicate": "官职",
   "value_text": "魏国公",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "魏国公徐达",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "魏国公徐达",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_005",
   "subject": "event:ev_hebei_shanhaiguan_01",
   "predicate": "筑城时间",
   "value_text": "洪武十四年",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "洪武十四年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "洪武十四年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_006",
   "subject": "place:shanhaiguan",
   "predicate": "命名由来",
   "value_text": "赐名山海关",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "赐名山海关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赐名山海关",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_007",
   "subject": "place:shanhaiguan",
   "predicate": "军事功能",
   "value_text": "屯兵戍守",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "屯兵戍守",
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
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "屯兵戍守",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_008",
   "subject": "place:shanhaiguan",
   "predicate": "防御对象",
   "value_text": "建州、蒙古",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "控建州、蒙古之冲",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "控建州、蒙古之冲",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_009",
   "subject": "place:shanhaiguan",
   "predicate": "位置",
   "value_text": "辽西走廊",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "liaoxi",
   "source": "mingshi_shanhai",
   "quote": "于辽西走廊设关城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于辽西走廊设关城",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_010",
   "subject": "place:shanhaiguan",
   "predicate": "前身",
   "value_text": "榆关故地",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "yuguan",
   "source": "mingshi_shanhai",
   "quote": "于榆关故地",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于榆关故地",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_011",
   "subject": "event:ev_hebei_shanhaiguan_01",
   "predicate": "筑城者",
   "value_text": "徐达",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "魏国公徐达经略北边",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "魏国公徐达经略北边",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_012",
   "subject": "place:shanhaiguan",
   "predicate": "长城关联",
   "value_text": "长城东端",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "为长城东端锁钥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为长城东端锁钥",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_013",
   "subject": "place:shanhaiguan",
   "predicate": "史料记载",
   "value_text": "明史有载",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "明洪武十四年",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "史料来源为明史",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明洪武十四年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEB_014",
   "subject": "place:shanhaiguan",
   "predicate": "建置细节",
   "value_text": "具体规制不详",
   "time": {
    "era_text": "洪武十四年",
    "start": "1381-01-01",
    "end": "1381-12-31",
    "gregorian_year": 1381
   },
   "place": "shanhaiguan",
   "source": "mingshi_shanhai",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载关城规模",
   "dims": [
    2
   ],
   "lead": {
    "where": "山海关地方志或明代档案",
    "skills": [
     "历史地理",
     "考古学"
    ],
    "accept": "补充关城形制"
   },
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
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
  "HEB_014"
 ],
 "events": [
  {
   "id": "ev_hebei_shanhaiguan_01",
   "subject": "event:ev_hebei_shanhaiguan_01",
   "year": 1381,
   "era": "洪武十四年",
   "title": "徐达筑山海关",
   "kind": "建置",
   "text": "徐达设关城于榆关故地",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "yuguan",
   "to": "shanhaiguan",
   "type": "military",
   "label": "设关于榆关故地",
   "_source_idx": 0,
   "_source_name": "《明史·地理志》与山海关",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "shanhaiguan",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "shanhaiguan",
   "name": "山海关",
   "lon": 116.0,
   "lat": 39.0,
   "region": "huabei"
  }
 ],
 "control_years": [
  1900,
  2000
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
        115.0,
        38.0
       ],
       [
        115.0,
        40.0
       ],
       [
        117.0,
        40.0
       ],
       [
        117.0,
        38.0
       ],
       [
        115.0,
        38.0
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
         115.451,
         40.0
        ],
        [
         115.45,
         39.993
        ],
        [
         115.429,
         39.984
        ],
        [
         115.426,
         39.951
        ],
        [
         115.481,
         39.936
        ],
        [
         115.523,
         39.899
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.526,
         39.876
        ],
        [
         115.514,
         39.838
        ],
        [
         115.567,
         39.816
        ],
        [
         115.553,
         39.795
        ],
        [
         115.506,
         39.784
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.444,
         39.786
        ],
        [
         115.44,
         39.752
        ],
        [
         115.487,
         39.742
        ],
        [
         115.492,
         39.67
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.522,
         39.64
        ],
        [
         115.518,
         39.597
        ],
        [
         115.546,
         39.619
        ],
        [
         115.587,
         39.59
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.668,
         39.615
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.753,
         39.516
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.828,
         39.541
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.957,
         39.561
        ],
        [
         115.978,
         39.596
        ],
        [
         115.995,
         39.577
        ],
        [
         116.026,
         39.588
        ],
        [
         116.036,
         39.572
        ],
        [
         116.099,
         39.575
        ],
        [
         116.13,
         39.568
        ],
        [
         116.152,
         39.583
        ],
        [
         116.199,
         39.589
        ],
        [
         116.241,
         39.564
        ],
        [
         116.258,
         39.5
        ],
        [
         116.307,
         39.488
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.435,
         39.443
        ],
        [
         116.455,
         39.453
        ],
        [
         116.444,
         39.482
        ],
        [
         116.412,
         39.483
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.51
        ],
        [
         116.438,
         39.527
        ],
        [
         116.478,
         39.535
        ],
        [
         116.473,
         39.553
        ],
        [
         116.508,
         39.551
        ],
        [
         116.524,
         39.596
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.665,
         39.606
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.749,
         39.62
        ],
        [
         116.791,
         39.596
        ],
        [
         116.812,
         39.616
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.677
        ],
        [
         116.906,
         39.688
        ],
        [
         116.89,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.917,
         39.731
        ],
        [
         116.902,
         39.764
        ],
        [
         116.949,
         39.779
        ],
        [
         116.918,
         39.846
        ],
        [
         116.908,
         39.832
        ],
        [
         116.866,
         39.844
        ],
        [
         116.812,
         39.89
        ],
        [
         116.784,
         39.891
        ],
        [
         116.783,
         39.948
        ],
        [
         116.758,
         39.968
        ],
        [
         116.769,
         40.0
        ],
        [
         115.451,
         40.0
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.0,
         39.646
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.688
        ],
        [
         116.906,
         39.677
        ],
        [
         116.85,
         39.668
        ],
        [
         116.812,
         39.616
        ],
        [
         116.808,
         39.576
        ],
        [
         116.787,
         39.554
        ],
        [
         116.82,
         39.529
        ],
        [
         116.821,
         39.482
        ],
        [
         116.785,
         39.466
        ],
        [
         116.832,
         39.436
        ],
        [
         116.876,
         39.435
        ],
        [
         116.84,
         39.413
        ],
        [
         116.84,
         39.378
        ],
        [
         116.818,
         39.374
        ],
        [
         116.829,
         39.339
        ],
        [
         116.871,
         39.358
        ],
        [
         116.89,
         39.338
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.856,
         39.216
        ],
        [
         116.87,
         39.154
        ],
        [
         116.909,
         39.151
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.755,
         39.003
        ],
        [
         116.728,
         38.975
        ],
        [
         116.708,
         38.932
        ],
        [
         116.722,
         38.897
        ],
        [
         116.723,
         38.853
        ],
        [
         116.751,
         38.831
        ],
        [
         116.738,
         38.785
        ],
        [
         116.746,
         38.754
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.859,
         38.741
        ],
        [
         116.877,
         38.681
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         117.0,
         38.689
        ],
        [
         117.0,
         39.646
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.0,
         40.0
        ],
        [
         115.0,
         38.0
        ],
        [
         117.0,
         38.0
        ],
        [
         117.0,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.877,
         38.681
        ],
        [
         116.859,
         38.741
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.746,
         38.754
        ],
        [
         116.738,
         38.785
        ],
        [
         116.751,
         38.831
        ],
        [
         116.723,
         38.853
        ],
        [
         116.722,
         38.897
        ],
        [
         116.708,
         38.932
        ],
        [
         116.728,
         38.975
        ],
        [
         116.755,
         39.003
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.909,
         39.151
        ],
        [
         116.87,
         39.154
        ],
        [
         116.856,
         39.216
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.89,
         39.338
        ],
        [
         116.871,
         39.358
        ],
        [
         116.829,
         39.339
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.378
        ],
        [
         116.84,
         39.413
        ],
        [
         116.876,
         39.435
        ],
        [
         116.832,
         39.436
        ],
        [
         116.785,
         39.466
        ],
        [
         116.821,
         39.482
        ],
        [
         116.82,
         39.529
        ],
        [
         116.787,
         39.554
        ],
        [
         116.808,
         39.576
        ],
        [
         116.812,
         39.616
        ],
        [
         116.791,
         39.596
        ],
        [
         116.749,
         39.62
        ],
        [
         116.709,
         39.618
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.621,
         39.602
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.508,
         39.551
        ],
        [
         116.473,
         39.553
        ],
        [
         116.478,
         39.535
        ],
        [
         116.438,
         39.527
        ],
        [
         116.444,
         39.51
        ],
        [
         116.402,
         39.528
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.482
        ],
        [
         116.455,
         39.453
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.338,
         39.456
        ],
        [
         116.307,
         39.488
        ],
        [
         116.258,
         39.5
        ],
        [
         116.241,
         39.564
        ],
        [
         116.199,
         39.589
        ],
        [
         116.152,
         39.583
        ],
        [
         116.13,
         39.568
        ],
        [
         116.099,
         39.575
        ],
        [
         116.036,
         39.572
        ],
        [
         116.026,
         39.588
        ],
        [
         115.995,
         39.577
        ],
        [
         115.978,
         39.596
        ],
        [
         115.957,
         39.561
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.828,
         39.541
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.753,
         39.516
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.668,
         39.615
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.587,
         39.59
        ],
        [
         115.546,
         39.619
        ],
        [
         115.518,
         39.597
        ],
        [
         115.522,
         39.64
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.492,
         39.67
        ],
        [
         115.487,
         39.742
        ],
        [
         115.44,
         39.752
        ],
        [
         115.444,
         39.786
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.506,
         39.784
        ],
        [
         115.553,
         39.795
        ],
        [
         115.567,
         39.816
        ],
        [
         115.514,
         39.838
        ],
        [
         115.526,
         39.876
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.523,
         39.899
        ],
        [
         115.481,
         39.936
        ],
        [
         115.426,
         39.951
        ],
        [
         115.429,
         39.984
        ],
        [
         115.45,
         39.993
        ],
        [
         115.451,
         40.0
        ],
        [
         115.0,
         40.0
        ]
       ]
      ],
      [
       [
        [
         117.0,
         40.0
        ],
        [
         116.769,
         40.0
        ],
        [
         116.758,
         39.968
        ],
        [
         116.783,
         39.948
        ],
        [
         116.784,
         39.891
        ],
        [
         116.812,
         39.89
        ],
        [
         116.866,
         39.844
        ],
        [
         116.908,
         39.832
        ],
        [
         116.918,
         39.846
        ],
        [
         116.949,
         39.779
        ],
        [
         116.902,
         39.764
        ],
        [
         116.917,
         39.731
        ],
        [
         116.887,
         39.725
        ],
        [
         116.89,
         39.688
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.964,
         39.643
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         117.0,
         39.646
        ],
        [
         117.0,
         40.0
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   115.0,
   38.0,
   117.0,
   40.0
  ]
 }
};
