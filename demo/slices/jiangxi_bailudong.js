// 本文件由 tools/build.py 自动生成（切片 jiangxi_bailudong），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangxi_bailudong"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangxi_bailudong"] = {
 "meta": {
  "kind": "thought",
  "region": "jiangnan",
  "province": "jiangxi",
  "title": "宋·白鹿洞书院（朱熹定学规）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "bailudong",
  "dossier_event": "event:ev_jiangxi_bailudong_01",
  "vocab_pack": "inline:jiangxi_bailudong",
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
    "note": "宋·白鹿洞书院（朱熹定学规）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·白鹿洞书院（朱熹定学规）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·白鹿洞书院（朱熹定学规）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·白鹿洞书院（朱熹定学规）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   5,
   6
  ],
  "page": "county.html?scene=jiangxi_bailudong",
  "key": "jiangxi_bailudong",
  "scene_id": "jiangxi_bailudong"
 },
 "sources": [
  {
   "id": "songshi_bailudong",
   "title": "《宋史·朱熹传》与白鹿洞书院",
   "party": "后世官修",
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
   "id": "bailudong",
   "name": "白鹿洞",
   "type": "fortress",
   "modern": "今中国江西省九江市庐山市",
   "note": "书院所在",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 115.97,
   "lat": 29.55,
   "geo_note": "今江西九江庐山白鹿洞书院",
   "elev": 50
  },
  {
   "id": "lushan",
   "name": "庐山",
   "type": "region",
   "modern": "今中国江西省九江市",
   "note": "山名",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 115.97,
   "lat": 29.55,
   "geo_note": "今江西九江市庐山",
   "elev": 50
  },
  {
   "id": "nankangjun",
   "name": "南康军",
   "type": "city",
   "modern": "今中国江西省庐山市",
   "note": "军治",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 115.97,
   "lat": 29.55,
   "geo_note": "今江西庐山市（宋南康军）",
   "elev": 50
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "朱熹",
   "role": "南康军知军，理学家",
   "note": "复兴白鹿洞书院，定学规",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "JIA__p02",
   "name": "朱端章",
   "role": "南康军知军（继任）",
   "note": "续修书院，增置学田",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "event:ev_jiangxi_bailudong_01",
   "predicate": "任职",
   "value_text": "朱熹于淳熙六年知南康军",
   "time": {
    "era_text": "淳熙六年",
    "start": "1179-01-01",
    "end": "1179-12-31",
    "gregorian_year": 1179
   },
   "place": "nankangjun",
   "source": "songshi_bailudong",
   "quote": "宋淳熙间，朱熹知南康军",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.475,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋淳熙间，朱熹知南康军",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "event:ev_jiangxi_bailudong_02",
   "predicate": "复兴书院",
   "value_text": "朱熹复兴白鹿洞书院于庐山",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "复兴白鹿洞书院于庐山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "复兴白鹿洞书院于庐山",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "event:ev_jiangxi_bailudong_03",
   "predicate": "颁布学规",
   "value_text": "朱熹揭《白鹿洞学规》",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "揭《白鹿洞学规》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "揭《白鹿洞学规》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "event:ev_jiangxi_bailudong_03",
   "predicate": "学规内容",
   "value_text": "以五教为纲，穷理笃行为目",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "以五教为纲，穷理笃行为目",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以五教为纲，穷理笃行为目",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "event:ev_jiangxi_bailudong_02",
   "predicate": "教学方式",
   "value_text": "聚徒讲习，厘定书院教法",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "聚徒讲习，厘定书院教法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "聚徒讲习，厘定书院教法",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "event:ev_jiangxi_bailudong_02",
   "predicate": "影响",
   "value_text": "书院之制大备，儒风蔚然",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "书院之制大备，儒风蔚然",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "书院之制大备，儒风蔚然",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "event:ev_jiangxi_bailudong_03",
   "predicate": "后世影响",
   "value_text": "为后世书院矩矱",
   "time": {
    "era_text": "淳熙七年",
    "start": "1180-01-01",
    "end": "1180-12-31",
    "gregorian_year": 1180
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "为后世书院矩矱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为后世书院矩矱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "person:JIA__p01",
   "predicate": "学术贡献",
   "value_text": "朱熹复兴书院，定学规",
   "time": {
    "era_text": "淳熙间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "朱熹知南康军，复兴白鹿洞书院",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "朱熹知南康军，复兴白鹿洞书院",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "person:JIA__p02",
   "predicate": "继任",
   "value_text": "朱端章继任，续修书院",
   "time": {
    "era_text": "淳熙间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "朱端章继任，增置学田",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "朱端章继任，增置学田",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "event:ev_jiangxi_bailudong_02",
   "predicate": "经费来源",
   "value_text": "置田以赡学",
   "time": {
    "era_text": "淳熙间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "置田赡学",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "置田赡学",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "event:ev_jiangxi_bailudong_03",
   "predicate": "学规影响",
   "value_text": "后世书院多仿此",
   "time": {
    "era_text": "淳熙后",
    "start": "1180"
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "为后世矩矱",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "学术史定论",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为后世矩矱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "event:ev_jiangxi_bailudong_02",
   "predicate": "建筑规模",
   "value_text": "具体建筑布局不详",
   "time": {
    "era_text": "淳熙间",
    "start": "1174-01-01",
    "end": "1174-12-31",
    "gregorian_year": 1174
   },
   "place": "bailudong",
   "source": "songshi_bailudong",
   "quote": "复兴书院",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    3
   ],
   "lead": {
    "where": "地方志或书院志",
    "skills": [
     "文献考证"
    ],
    "accept": "书院建筑复原"
   },
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "复兴书院",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_012"
 ],
 "events": [
  {
   "id": "ev_jiangxi_bailudong_01",
   "subject": "event:ev_jiangxi_bailudong_01",
   "year": 1179,
   "era": "淳熙六年",
   "title": "朱熹知南康军",
   "kind": "行政",
   "text": "朱熹出任南康军知军，访白鹿洞遗址",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_bailudong_02",
   "subject": "event:ev_jiangxi_bailudong_02",
   "year": 1180,
   "era": "淳熙七年",
   "title": "复兴白鹿洞书院",
   "kind": "建置",
   "text": "重建书院，聚徒讲习，置田建屋",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_bailudong_03",
   "subject": "event:ev_jiangxi_bailudong_03",
   "year": 1180,
   "era": "淳熙七年",
   "title": "颁布白鹿洞学规",
   "kind": "制度",
   "text": "朱熹手订学规，以五教为纲",
   "_source_idx": 0,
   "_source_name": "《宋史·朱熹传》与白鹿洞书院",
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
        114.97,
        28.55
       ],
       [
        114.97,
        30.55
       ],
       [
        116.97,
        30.55
       ],
       [
        116.97,
        28.55
       ],
       [
        114.97,
        28.55
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
         115.886,
         30.55
        ],
        [
         115.888,
         30.543
        ],
        [
         115.91,
         30.519
        ],
        [
         115.895,
         30.453
        ],
        [
         115.921,
         30.416
        ],
        [
         115.885,
         30.38
        ],
        [
         115.915,
         30.338
        ],
        [
         115.903,
         30.314
        ],
        [
         115.986,
         30.291
        ],
        [
         115.998,
         30.253
        ],
        [
         116.066,
         30.205
        ],
        [
         116.056,
         30.181
        ],
        [
         116.088,
         30.11
        ],
        [
         116.079,
         30.062
        ],
        [
         116.091,
         30.036
        ],
        [
         116.074,
         29.97
        ],
        [
         116.128,
         29.898
        ],
        [
         116.135,
         29.82
        ],
        [
         116.173,
         29.828
        ],
        [
         116.228,
         29.817
        ],
        [
         116.25,
         29.786
        ],
        [
         116.281,
         29.789
        ],
        [
         116.343,
         29.836
        ],
        [
         116.468,
         29.896
        ],
        [
         116.526,
         29.897
        ],
        [
         116.552,
         29.91
        ],
        [
         116.585,
         30.046
        ],
        [
         116.621,
         30.073
        ],
        [
         116.667,
         30.077
        ],
        [
         116.72,
         30.054
        ],
        [
         116.747,
         30.057
        ],
        [
         116.784,
         30.031
        ],
        [
         116.803,
         29.996
        ],
        [
         116.831,
         30.005
        ],
        [
         116.833,
         29.958
        ],
        [
         116.869,
         29.98
        ],
        [
         116.9,
         29.949
        ],
        [
         116.883,
         29.894
        ],
        [
         116.781,
         29.793
        ],
        [
         116.762,
         29.802
        ],
        [
         116.674,
         29.71
        ],
        [
         116.699,
         29.708
        ],
        [
         116.706,
         29.697
        ],
        [
         116.707,
         29.696
        ],
        [
         116.705,
         29.689
        ],
        [
         116.68,
         29.681
        ],
        [
         116.652,
         29.637
        ],
        [
         116.717,
         29.591
        ],
        [
         116.722,
         29.565
        ],
        [
         116.76,
         29.599
        ],
        [
         116.781,
         29.57
        ],
        [
         116.849,
         29.576
        ],
        [
         116.874,
         29.61
        ],
        [
         116.94,
         29.649
        ],
        [
         116.97,
         29.656
        ],
        [
         116.97,
         30.55
        ],
        [
         115.886,
         30.55
        ]
       ]
      ],
      [
       [
        [
         116.699,
         29.708
        ],
        [
         116.674,
         29.71
        ],
        [
         116.654,
         29.695
        ],
        [
         116.68,
         29.681
        ],
        [
         116.705,
         29.689
        ],
        [
         116.707,
         29.696
        ],
        [
         116.706,
         29.697
        ],
        [
         116.699,
         29.708
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
         116.97,
         28.55
        ],
        [
         116.97,
         29.656
        ],
        [
         116.94,
         29.649
        ],
        [
         116.874,
         29.61
        ],
        [
         116.849,
         29.576
        ],
        [
         116.781,
         29.57
        ],
        [
         116.76,
         29.599
        ],
        [
         116.722,
         29.565
        ],
        [
         116.717,
         29.591
        ],
        [
         116.652,
         29.637
        ],
        [
         116.68,
         29.681
        ],
        [
         116.654,
         29.695
        ],
        [
         116.674,
         29.71
        ],
        [
         116.762,
         29.802
        ],
        [
         116.781,
         29.793
        ],
        [
         116.883,
         29.894
        ],
        [
         116.9,
         29.949
        ],
        [
         116.869,
         29.98
        ],
        [
         116.833,
         29.958
        ],
        [
         116.831,
         30.005
        ],
        [
         116.803,
         29.996
        ],
        [
         116.784,
         30.031
        ],
        [
         116.747,
         30.057
        ],
        [
         116.72,
         30.054
        ],
        [
         116.667,
         30.077
        ],
        [
         116.621,
         30.073
        ],
        [
         116.585,
         30.046
        ],
        [
         116.552,
         29.91
        ],
        [
         116.526,
         29.897
        ],
        [
         116.468,
         29.896
        ],
        [
         116.343,
         29.836
        ],
        [
         116.281,
         29.789
        ],
        [
         116.25,
         29.786
        ],
        [
         116.228,
         29.817
        ],
        [
         116.173,
         29.828
        ],
        [
         116.135,
         29.82
        ],
        [
         116.087,
         29.795
        ],
        [
         116.05,
         29.762
        ],
        [
         115.966,
         29.724
        ],
        [
         115.91,
         29.724
        ],
        [
         115.837,
         29.748
        ],
        [
         115.763,
         29.793
        ],
        [
         115.707,
         29.838
        ],
        [
         115.668,
         29.85
        ],
        [
         115.612,
         29.841
        ],
        [
         115.512,
         29.84
        ],
        [
         115.479,
         29.811
        ],
        [
         115.471,
         29.74
        ],
        [
         115.413,
         29.689
        ],
        [
         115.355,
         29.65
        ],
        [
         115.305,
         29.637
        ],
        [
         115.286,
         29.618
        ],
        [
         115.251,
         29.66
        ],
        [
         115.177,
         29.655
        ],
        [
         115.113,
         29.685
        ],
        [
         115.118,
         29.656
        ],
        [
         115.144,
         29.646
        ],
        [
         115.12,
         29.598
        ],
        [
         115.157,
         29.585
        ],
        [
         115.154,
         29.51
        ],
        [
         115.086,
         29.526
        ],
        [
         115.087,
         29.56
        ],
        [
         115.033,
         29.547
        ],
        [
         115.001,
         29.572
        ],
        [
         114.97,
         29.555
        ],
        [
         114.97,
         28.55
        ],
        [
         116.97,
         28.55
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
         114.97,
         30.55
        ],
        [
         114.97,
         29.555
        ],
        [
         115.001,
         29.572
        ],
        [
         115.033,
         29.547
        ],
        [
         115.087,
         29.56
        ],
        [
         115.086,
         29.526
        ],
        [
         115.154,
         29.51
        ],
        [
         115.157,
         29.585
        ],
        [
         115.12,
         29.598
        ],
        [
         115.144,
         29.646
        ],
        [
         115.118,
         29.656
        ],
        [
         115.113,
         29.685
        ],
        [
         115.177,
         29.655
        ],
        [
         115.251,
         29.66
        ],
        [
         115.286,
         29.618
        ],
        [
         115.305,
         29.637
        ],
        [
         115.355,
         29.65
        ],
        [
         115.413,
         29.689
        ],
        [
         115.471,
         29.74
        ],
        [
         115.479,
         29.811
        ],
        [
         115.512,
         29.84
        ],
        [
         115.612,
         29.841
        ],
        [
         115.668,
         29.85
        ],
        [
         115.707,
         29.838
        ],
        [
         115.763,
         29.793
        ],
        [
         115.837,
         29.748
        ],
        [
         115.91,
         29.724
        ],
        [
         115.966,
         29.724
        ],
        [
         116.05,
         29.762
        ],
        [
         116.087,
         29.795
        ],
        [
         116.135,
         29.82
        ],
        [
         116.128,
         29.898
        ],
        [
         116.074,
         29.97
        ],
        [
         116.091,
         30.036
        ],
        [
         116.079,
         30.062
        ],
        [
         116.088,
         30.11
        ],
        [
         116.056,
         30.181
        ],
        [
         116.066,
         30.205
        ],
        [
         115.998,
         30.253
        ],
        [
         115.986,
         30.291
        ],
        [
         115.903,
         30.314
        ],
        [
         115.915,
         30.338
        ],
        [
         115.885,
         30.38
        ],
        [
         115.921,
         30.416
        ],
        [
         115.895,
         30.453
        ],
        [
         115.91,
         30.519
        ],
        [
         115.888,
         30.543
        ],
        [
         115.886,
         30.55
        ],
        [
         114.97,
         30.55
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
     "type": "LineString",
     "coordinates": [
      [
       115.982,
       29.279
      ],
      [
       116.034,
       29.319
      ],
      [
       116.088,
       29.437
      ],
      [
       116.198,
       29.751
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.817,
       28.55
      ],
      [
       115.816,
       28.585
      ],
      [
       115.869,
       28.716
      ],
      [
       115.975,
       28.888
      ],
      [
       116.016,
       29.05
      ],
      [
       115.982,
       29.279
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        114.97,
        30.396
       ],
       [
        114.997,
        30.387
       ],
       [
        115.058,
        30.336
       ],
       [
        115.067,
        30.269
       ],
       [
        115.102,
        30.229
       ],
       [
        115.16,
        30.216
       ],
       [
        115.252,
        30.128
       ],
       [
        115.376,
        29.966
       ],
       [
        115.504,
        29.879
       ],
       [
        115.638,
        29.867
       ],
       [
        115.751,
        29.828
       ],
       [
        115.843,
        29.764
       ],
       [
        115.983,
        29.746
       ],
       [
        116.171,
        29.775
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.198,
        29.751
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.212,
        29.785
       ],
       [
        116.327,
        29.815
       ],
       [
        116.451,
        29.868
       ],
       [
        116.544,
        29.931
       ],
       [
        116.606,
        30.006
       ],
       [
        116.683,
        30.061
       ],
       [
        116.776,
        30.097
       ],
       [
        116.847,
        30.168
       ],
       [
        116.896,
        30.272
       ],
       [
        116.913,
        30.349
       ],
       [
        116.9,
        30.399
       ],
       [
        116.97,
        30.445
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.706,
        29.136
       ],
       [
        116.709,
        29.102
       ],
       [
        116.672,
        29.098
       ],
       [
        116.635,
        29.102
       ],
       [
        116.618,
        29.115
       ],
       [
        116.581,
        29.128
       ],
       [
        116.521,
        29.143
       ],
       [
        116.496,
        29.122
       ],
       [
        116.477,
        29.043
       ],
       [
        116.503,
        28.953
       ],
       [
        116.53,
        28.894
       ],
       [
        116.537,
        28.845
       ],
       [
        116.512,
        28.804
       ],
       [
        116.468,
        28.805
       ],
       [
        116.441,
        28.86
       ],
       [
        116.418,
        28.88
       ],
       [
        116.409,
        28.905
       ],
       [
        116.348,
        28.906
       ],
       [
        116.329,
        28.961
       ],
       [
        116.097,
        29.106
       ],
       [
        116.064,
        29.149
       ],
       [
        116.047,
        29.19
       ],
       [
        115.982,
        29.279
       ],
       [
        115.965,
        29.311
       ],
       [
        116.002,
        29.394
       ],
       [
        116.026,
        29.453
       ],
       [
        116.091,
        29.555
       ],
       [
        116.117,
        29.653
       ],
       [
        116.1,
        29.688
       ],
       [
        116.082,
        29.703
       ],
       [
        116.113,
        29.726
       ],
       [
        116.18,
        29.751
       ],
       [
        116.198,
        29.751
       ],
       [
        116.23,
        29.698
       ],
       [
        116.235,
        29.666
       ],
       [
        116.207,
        29.645
       ],
       [
        116.199,
        29.604
       ],
       [
        116.181,
        29.573
       ],
       [
        116.159,
        29.519
       ],
       [
        116.145,
        29.454
       ],
       [
        116.11,
        29.427
       ],
       [
        116.115,
        29.402
       ],
       [
        116.143,
        29.386
       ],
       [
        116.188,
        29.382
       ],
       [
        116.196,
        29.362
       ],
       [
        116.153,
        29.334
       ],
       [
        116.137,
        29.309
       ],
       [
        116.153,
        29.253
       ],
       [
        116.31,
        29.232
       ],
       [
        116.343,
        29.234
       ],
       [
        116.368,
        29.223
       ],
       [
        116.358,
        29.186
       ],
       [
        116.362,
        29.154
       ],
       [
        116.407,
        29.176
       ],
       [
        116.44,
        29.236
       ],
       [
        116.469,
        29.25
       ],
       [
        116.54,
        29.24
       ],
       [
        116.604,
        29.237
       ],
       [
        116.64,
        29.237
       ],
       [
        116.664,
        29.226
       ],
       [
        116.661,
        29.19
       ],
       [
        116.674,
        29.159
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ]
      ]
     ]
    },
    "n": "Poyang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.461,
        30.055
       ],
       [
        116.496,
        30.02
       ],
       [
        116.52,
        29.988
       ],
       [
        116.498,
        29.964
       ],
       [
        116.388,
        29.966
       ],
       [
        116.29,
        29.994
       ],
       [
        116.259,
        30.048
       ],
       [
        116.257,
        30.094
       ],
       [
        116.281,
        30.079
       ],
       [
        116.298,
        30.086
       ],
       [
        116.327,
        30.087
       ],
       [
        116.386,
        30.069
       ],
       [
        116.442,
        30.077
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ]
      ]
     ]
    },
    "n": "Daguan Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.242,
        30.032
       ],
       [
        116.253,
        30.01
       ],
       [
        116.26,
        29.976
       ],
       [
        116.254,
        29.935
       ],
       [
        116.211,
        29.908
       ],
       [
        116.131,
        29.898
       ],
       [
        116.044,
        29.881
       ],
       [
        115.977,
        29.952
       ],
       [
        115.985,
        30.016
       ],
       [
        116.073,
        30.0
       ],
       [
        116.118,
        30.0
       ],
       [
        116.129,
        30.026
       ],
       [
        116.15,
        30.061
       ],
       [
        116.195,
        30.038
       ]
      ]
     ]
    },
    "n": "Long Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.424,
        30.108
       ],
       [
        116.401,
        30.118
       ],
       [
        116.387,
        30.143
       ],
       [
        116.373,
        30.161
       ],
       [
        116.351,
        30.175
       ],
       [
        116.317,
        30.203
       ],
       [
        116.314,
        30.23
       ],
       [
        116.335,
        30.234
       ],
       [
        116.357,
        30.245
       ],
       [
        116.371,
        30.244
       ],
       [
        116.39,
        30.224
       ],
       [
        116.443,
        30.207
       ],
       [
        116.472,
        30.204
       ],
       [
        116.514,
        30.208
       ],
       [
        116.539,
        30.207
       ],
       [
        116.54,
        30.18
       ],
       [
        116.527,
        30.149
       ],
       [
        116.525,
        30.116
       ],
       [
        116.526,
        30.089
       ],
       [
        116.506,
        30.078
       ],
       [
        116.494,
        30.085
       ],
       [
        116.468,
        30.104
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ]
      ]
     ]
    },
    "n": "Po Hu"
   }
  ],
  "_bbox": [
   114.97,
   28.55,
   116.97,
   30.55
  ]
 }
};
