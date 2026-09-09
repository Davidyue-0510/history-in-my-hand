// 本文件由 tools/build.py 自动生成（切片 jiangxi_jingdezhen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangxi_jingdezhen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangxi_jingdezhen"] = {
 "meta": {
  "kind": "tech",
  "region": "jiangnan",
  "province": "jiangxi",
  "title": "宋·景德镇瓷业（宋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "jingdezhen",
  "dossier_event": "event:ev_jiangxi_jingdezhen_01",
  "vocab_pack": "inline:jiangxi_jingdezhen",
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
    "note": "宋·景德镇瓷业（宋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·景德镇瓷业（宋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·景德镇瓷业（宋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·景德镇瓷业（宋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=jiangxi_jingdezhen",
  "key": "jiangxi_jingdezhen",
  "scene_id": "jiangxi_jingdezhen"
 },
 "sources": [
  {
   "id": "jingdezhen_ci",
   "title": "《陶记》与景德镇窑事",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "蒋祈",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jingdezhen",
   "name": "景德镇",
   "type": "city",
   "modern": "今中国江西省景德镇市",
   "note": "原名昌南镇，宋景德年间赐名",
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 117.18,
   "lat": 29.27,
   "geo_note": "今江西景德镇市",
   "elev": 70
  },
  {
   "id": "changnan",
   "name": "昌南镇",
   "type": "city",
   "modern": "今中国江西省景德镇市",
   "note": "景德镇旧称",
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 117.18,
   "lat": 29.27,
   "geo_note": "今江西景德镇（昌南镇）",
   "elev": 70
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "宋真宗",
   "role": "皇帝",
   "note": "以年号景德赐名昌南镇",
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p02",
   "name": "窑工",
   "role": "工匠",
   "note": "景德镇制瓷工匠",
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "place:jingdezhen",
   "predicate": "得名",
   "value_text": "宋真宗以年号赐名",
   "time": {
    "era_text": "宋真宗景德年间",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "宋真宗景德年间以年号赐名",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "宋真宗景德年间以年号赐名",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "place:jingdezhen",
   "predicate": "瓷土",
   "value_text": "土宜瓷，窑火彻夜",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "其土宜瓷，窑火彻夜",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "其土宜瓷，窑火彻夜",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "place:jingdezhen",
   "predicate": "产品特征",
   "value_text": "青白瓷莹润如玉，质薄声脆",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "青白瓷（影青）莹润如玉，质薄声脆",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "青白瓷（影青）莹润如玉，质薄声脆",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "place:jingdezhen",
   "predicate": "声誉",
   "value_text": "天下咸称，瓷都之名著",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "天下咸称，瓷都之名著于当世",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "天下咸称，瓷都之名著于当世",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "place:jingdezhen",
   "predicate": "生产组织",
   "value_text": "民窑官监，舟车辏集",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "民窑官监，舟车辏集",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "民窑官监，舟车辏集",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "place:jingdezhen",
   "predicate": "工艺",
   "value_text": "窑工抟土范模，釉色天成",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "窑工抟土范模，釉色天成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "窑工抟土范模，釉色天成",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "place:jingdezhen",
   "predicate": "原名",
   "value_text": "旧称昌南镇",
   "time": {
    "era_text": "宋前",
    "start": "960"
   },
   "place": "changnan",
   "source": "jingdezhen_ci",
   "quote": "景德镇旧称昌南镇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "景德镇旧称昌南镇",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "place:jingdezhen",
   "predicate": "得名时间",
   "value_text": "景德年间（1004-1007）",
   "time": {
    "era_text": "宋真宗景德年间",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "宋真宗景德年间以年号赐名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "宋真宗景德年间以年号赐名",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "place:jingdezhen",
   "predicate": "瓷都地位",
   "value_text": "瓷都之名著于当世",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "瓷都之名著于当世",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "瓷都之名著于当世",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "place:jingdezhen",
   "predicate": "贸易",
   "value_text": "舟车辏集，贸易繁盛",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "舟车辏集",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "舟车辏集",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "place:jingdezhen",
   "predicate": "瓷器特点",
   "value_text": "质薄声脆，影青莹润",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "质薄声脆",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "质薄声脆",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "place:jingdezhen",
   "predicate": "窑火",
   "value_text": "窑火彻夜，生产不息",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "窑火彻夜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "窑火彻夜",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_013",
   "subject": "place:jingdezhen",
   "predicate": "官监",
   "value_text": "官监民窑，制度存在",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "民窑官监",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "民窑官监",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_014",
   "subject": "place:jingdezhen",
   "predicate": "史料不足",
   "value_text": "官监具体制度不详",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "民窑官监",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "景德镇地方志",
    "skills": [
     "文献考证"
    ],
    "accept": "官监具体形式"
   },
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "民窑官监",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "JIA_015",
   "subject": "event:ev_jiangxi_jingdezhen_01",
   "predicate": "赐名",
   "value_text": "宋真宗景德年间以年号赐名景德镇",
   "time": {
    "era_text": "宋真宗景德年间",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "jingdezhen",
   "source": "jingdezhen_ci",
   "quote": "宋真宗景德年间以年号赐名景德镇",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.9,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_014"
 ],
 "events": [
  {
   "id": "ev_jiangxi_jingdezhen_01",
   "subject": "event:ev_jiangxi_jingdezhen_01",
   "year": 1004,
   "era": "宋真宗景德年间",
   "title": "景德镇赐名",
   "kind": "建置",
   "text": "宋真宗景德年间以年号赐名景德镇",
   "_source_idx": 0,
   "_source_name": "《陶记》与景德镇窑事",
   "_source_party": "宋官修",
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
        116.18,
        28.27
       ],
       [
        116.18,
        30.27
       ],
       [
        118.18,
        30.27
       ],
       [
        118.18,
        28.27
       ],
       [
        116.18,
        28.27
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
         118.18,
         29.324
        ],
        [
         118.167,
         29.314
        ],
        [
         118.178,
         29.298
        ],
        [
         118.139,
         29.284
        ],
        [
         118.078,
         29.291
        ],
        [
         118.074,
         29.217
        ],
        [
         118.042,
         29.21
        ],
        [
         118.028,
         29.168
        ],
        [
         118.045,
         29.149
        ],
        [
         118.038,
         29.102
        ],
        [
         118.076,
         29.075
        ],
        [
         118.067,
         29.054
        ],
        [
         118.098,
         28.999
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.134,
         28.984
        ],
        [
         118.165,
         28.987
        ],
        [
         118.18,
         28.976
        ],
        [
         118.18,
         29.324
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.18,
         30.27
        ],
        [
         116.18,
         29.827
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
         116.975,
         29.657
        ],
        [
         116.996,
         29.683
        ],
        [
         117.042,
         29.681
        ],
        [
         117.113,
         29.712
        ],
        [
         117.108,
         29.752
        ],
        [
         117.137,
         29.775
        ],
        [
         117.123,
         29.799
        ],
        [
         117.073,
         29.832
        ],
        [
         117.127,
         29.862
        ],
        [
         117.13,
         29.899
        ],
        [
         117.172,
         29.921
        ],
        [
         117.217,
         29.927
        ],
        [
         117.246,
         29.915
        ],
        [
         117.262,
         29.881
        ],
        [
         117.253,
         29.835
        ],
        [
         117.293,
         29.823
        ],
        [
         117.339,
         29.848
        ],
        [
         117.359,
         29.813
        ],
        [
         117.382,
         29.841
        ],
        [
         117.415,
         29.851
        ],
        [
         117.409,
         29.802
        ],
        [
         117.455,
         29.749
        ],
        [
         117.454,
         29.688
        ],
        [
         117.49,
         29.66
        ],
        [
         117.53,
         29.654
        ],
        [
         117.524,
         29.63
        ],
        [
         117.543,
         29.589
        ],
        [
         117.609,
         29.591
        ],
        [
         117.648,
         29.615
        ],
        [
         117.679,
         29.595
        ],
        [
         117.69,
         29.556
        ],
        [
         117.73,
         29.55
        ],
        [
         117.795,
         29.571
        ],
        [
         117.873,
         29.548
        ],
        [
         117.934,
         29.549
        ],
        [
         118.004,
         29.578
        ],
        [
         118.043,
         29.566
        ],
        [
         118.051,
         29.543
        ],
        [
         118.095,
         29.534
        ],
        [
         118.144,
         29.49
        ],
        [
         118.128,
         29.472
        ],
        [
         118.136,
         29.419
        ],
        [
         118.18,
         29.401
        ],
        [
         118.18,
         30.27
        ],
        [
         116.18,
         30.27
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
         118.18,
         29.401
        ],
        [
         118.136,
         29.419
        ],
        [
         118.128,
         29.472
        ],
        [
         118.144,
         29.49
        ],
        [
         118.095,
         29.534
        ],
        [
         118.051,
         29.543
        ],
        [
         118.043,
         29.566
        ],
        [
         118.004,
         29.578
        ],
        [
         117.934,
         29.549
        ],
        [
         117.873,
         29.548
        ],
        [
         117.795,
         29.571
        ],
        [
         117.73,
         29.55
        ],
        [
         117.69,
         29.556
        ],
        [
         117.679,
         29.595
        ],
        [
         117.648,
         29.615
        ],
        [
         117.609,
         29.591
        ],
        [
         117.543,
         29.589
        ],
        [
         117.524,
         29.63
        ],
        [
         117.53,
         29.654
        ],
        [
         117.49,
         29.66
        ],
        [
         117.454,
         29.688
        ],
        [
         117.455,
         29.749
        ],
        [
         117.409,
         29.802
        ],
        [
         117.415,
         29.851
        ],
        [
         117.382,
         29.841
        ],
        [
         117.359,
         29.813
        ],
        [
         117.339,
         29.848
        ],
        [
         117.293,
         29.823
        ],
        [
         117.253,
         29.835
        ],
        [
         117.262,
         29.881
        ],
        [
         117.246,
         29.915
        ],
        [
         117.217,
         29.927
        ],
        [
         117.172,
         29.921
        ],
        [
         117.13,
         29.899
        ],
        [
         117.127,
         29.862
        ],
        [
         117.073,
         29.832
        ],
        [
         117.123,
         29.799
        ],
        [
         117.137,
         29.775
        ],
        [
         117.108,
         29.752
        ],
        [
         117.113,
         29.712
        ],
        [
         117.042,
         29.681
        ],
        [
         116.996,
         29.683
        ],
        [
         116.975,
         29.657
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
         116.18,
         29.827
        ],
        [
         116.18,
         28.27
        ],
        [
         118.18,
         28.27
        ],
        [
         118.18,
         28.976
        ],
        [
         118.165,
         28.987
        ],
        [
         118.134,
         28.984
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.098,
         28.999
        ],
        [
         118.067,
         29.054
        ],
        [
         118.076,
         29.075
        ],
        [
         118.038,
         29.102
        ],
        [
         118.045,
         29.149
        ],
        [
         118.028,
         29.168
        ],
        [
         118.042,
         29.21
        ],
        [
         118.074,
         29.217
        ],
        [
         118.078,
         29.291
        ],
        [
         118.139,
         29.284
        ],
        [
         118.178,
         29.298
        ],
        [
         118.167,
         29.314
        ],
        [
         118.18,
         29.324
        ],
        [
         118.18,
         29.401
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       116.18,
       29.701
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
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        116.18,
        29.777
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
        116.894,
        30.27
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
        116.18,
        29.054
       ],
       [
        116.18,
        29.751
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
        116.18,
        29.571
       ],
       [
        116.18,
        29.383
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
        116.18,
        29.351
       ],
       [
        116.18,
        29.249
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
        116.18,
        29.904
       ],
       [
        116.18,
        30.045
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
   116.18,
   28.27,
   118.18,
   30.27
  ]
 }
};
