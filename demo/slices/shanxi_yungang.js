// 本文件由 tools/build.py 自动生成（切片 shanxi_yungang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanxi_yungang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanxi_yungang"] = {
 "meta": {
  "kind": "tech",
  "region": "two_jin",
  "province": "shanxi",
  "title": "北魏·云冈石窟（昙曜五窟）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "pingcheng",
  "dossier_event": "event:ev_shanxi_yungang_01",
  "vocab_pack": "inline:shanxi_yungang",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "two_jin",
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
    "note": "北魏·云冈石窟（昙曜五窟）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "北魏·云冈石窟（昙曜五窟）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "北魏·云冈石窟（昙曜五窟）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "北魏·云冈石窟（昙曜五窟）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=shanxi_yungang",
  "key": "shanxi_yungang",
  "scene_id": "shanxi_yungang"
 },
 "sources": [
  {
   "id": "weishu_shilao",
   "title": "《魏书·释老志》与云冈石窟",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "魏收",
   "period": "北魏",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "pingcheng",
   "name": "平城",
   "type": "city",
   "modern": "今山西省大同市",
   "note": "北魏都城",
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.3,
   "lat": 40.08,
   "geo_note": "北魏旧都，鲜卑保守派根基，今山西大同",
   "elev": 1054
  },
  {
   "id": "wuzhousai",
   "name": "武州塞",
   "type": "fortress",
   "modern": "今山西省大同市西",
   "note": "云冈石窟所在地",
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "昙曜",
   "role": "沙门统",
   "note": "北魏高僧，主持开凿五窟",
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "文成帝",
   "role": "北魏皇帝",
   "note": "和平初年下令开窟",
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟时间",
   "value_text": "文成帝和平初年",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "文成帝和平初",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文成帝和平初",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "主持者",
   "value_text": "沙门统昙曜主持",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "沙门统昙曜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "沙门统昙曜",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟数量",
   "value_text": "开窟五所",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "开窟五所",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "开窟五所",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "佛像高度",
   "value_text": "高者七十尺，次六十尺",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "高者七十尺，次六十尺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "高者七十尺，次六十尺",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "雕饰评价",
   "value_text": "雕饰奇伟，冠于一世",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "雕饰奇伟，冠于一世",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雕饰奇伟，冠于一世",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "后世命名",
   "value_text": "后世称昙曜五窟",
   "time": {
    "era_text": "后世",
    "start": ""
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "后世谓昙曜五窟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "后世谓昙曜五窟",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "历史地位",
   "value_text": "云冈石窟之始",
   "time": {
    "era_text": "后世",
    "start": ""
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "云冈石窟之始也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "云冈石窟之始也",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟地点",
   "value_text": "平城西武州塞",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "平城西武州塞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平城西武州塞",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟方式",
   "value_text": "凿山石壁",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "凿山石壁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凿山石壁",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "佛像数量",
   "value_text": "每窟镌建佛像各一",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "镌建佛像各一",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "镌建佛像各一",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟动机",
   "value_text": "史料未载具体动机",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "lead": {
    "where": "魏书·释老志",
    "skills": [
     "佛教史",
     "政治史"
    ],
    "accept": "结合文成帝复兴佛法背景推断"
   },
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟工匠来源",
   "value_text": "史料未载工匠来源",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "云冈石窟考古报告",
    "skills": [
     "考古学",
     "美术史"
    ],
    "accept": "通过风格分析比对凉州工匠影响"
   },
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shanxi_yungang_01",
   "predicate": "开窟经费来源",
   "value_text": "推测为皇家资助",
   "time": {
    "era_text": "和平初",
    "start": "0460"
   },
   "place": "wuzhousai",
   "source": "weishu_shilao",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学界普遍观点",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
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
  "SHA_011",
  "SHA_012"
 ],
 "events": [
  {
   "id": "ev_shanxi_yungang_01",
   "subject": "event:ev_shanxi_yungang_01",
   "year": 460,
   "era": "北魏文成帝和平初",
   "title": "昙曜开凿五窟",
   "kind": "建置",
   "text": "于武州塞凿山开窟五所",
   "_source_idx": 0,
   "_source_name": "《魏书·释老志》与云冈石窟",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "pingcheng",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "pingcheng",
   "name": "平城",
   "lon": 113.3,
   "lat": 40.08,
   "region": "two_jin"
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
        112.3,
        39.08
       ],
       [
        112.3,
        41.08
       ],
       [
        114.3,
        41.08
       ],
       [
        114.3,
        39.08
       ],
       [
        112.3,
        39.08
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
         114.3,
         39.08
        ],
        [
         114.3,
         41.08
        ],
        [
         113.85,
         41.08
        ],
        [
         113.869,
         41.069
        ],
        [
         113.973,
         40.983
        ],
        [
         113.995,
         40.939
        ],
        [
         114.058,
         40.925
        ],
        [
         114.042,
         40.918
        ],
        [
         114.055,
         40.868
        ],
        [
         114.074,
         40.857
        ],
        [
         114.045,
         40.831
        ],
        [
         114.08,
         40.79
        ],
        [
         114.104,
         40.798
        ],
        [
         114.103,
         40.771
        ],
        [
         114.135,
         40.737
        ],
        [
         114.162,
         40.714
        ],
        [
         114.183,
         40.672
        ],
        [
         114.236,
         40.607
        ],
        [
         114.283,
         40.591
        ],
        [
         114.274,
         40.553
        ],
        [
         114.294,
         40.552
        ],
        [
         114.282,
         40.495
        ],
        [
         114.267,
         40.474
        ],
        [
         114.3,
         40.44
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.397
        ],
        [
         114.3,
         40.232
        ],
        [
         114.293,
         40.23
        ],
        [
         114.255,
         40.236
        ],
        [
         114.236,
         40.198
        ],
        [
         114.18,
         40.191
        ],
        [
         114.136,
         40.175
        ],
        [
         114.098,
         40.194
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.102,
         40.1
        ],
        [
         114.087,
         40.072
        ],
        [
         114.046,
         40.057
        ],
        [
         114.018,
         40.104
        ],
        [
         113.989,
         40.112
        ],
        [
         113.959,
         40.033
        ],
        [
         113.91,
         40.016
        ],
        [
         114.029,
         39.986
        ],
        [
         114.028,
         39.959
        ],
        [
         114.047,
         39.916
        ],
        [
         114.068,
         39.923
        ],
        [
         114.174,
         39.898
        ],
        [
         114.212,
         39.919
        ],
        [
         114.229,
         39.9
        ],
        [
         114.204,
         39.885
        ],
        [
         114.216,
         39.862
        ],
        [
         114.287,
         39.871
        ],
        [
         114.286,
         39.858
        ],
        [
         114.3,
         39.859
        ],
        [
         114.3,
         39.08
        ],
        [
         114.091,
         39.08
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.064,
         39.094
        ],
        [
         114.051,
         39.136
        ],
        [
         114.007,
         39.123
        ],
        [
         113.995,
         39.096
        ],
        [
         113.962,
         39.101
        ],
        [
         113.944,
         39.08
        ],
        [
         114.3,
         39.08
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.3,
         39.08
        ],
        [
         113.944,
         39.08
        ],
        [
         113.962,
         39.101
        ],
        [
         113.995,
         39.096
        ],
        [
         114.007,
         39.123
        ],
        [
         114.051,
         39.136
        ],
        [
         114.064,
         39.094
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.091,
         39.08
        ],
        [
         114.3,
         39.08
        ],
        [
         114.3,
         39.859
        ],
        [
         114.286,
         39.858
        ],
        [
         114.287,
         39.871
        ],
        [
         114.216,
         39.862
        ],
        [
         114.204,
         39.885
        ],
        [
         114.229,
         39.9
        ],
        [
         114.212,
         39.919
        ],
        [
         114.174,
         39.898
        ],
        [
         114.068,
         39.923
        ],
        [
         114.047,
         39.916
        ],
        [
         114.028,
         39.959
        ],
        [
         114.029,
         39.986
        ],
        [
         113.91,
         40.016
        ],
        [
         113.959,
         40.033
        ],
        [
         113.989,
         40.112
        ],
        [
         114.018,
         40.104
        ],
        [
         114.046,
         40.057
        ],
        [
         114.087,
         40.072
        ],
        [
         114.102,
         40.1
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.098,
         40.194
        ],
        [
         114.136,
         40.175
        ],
        [
         114.18,
         40.191
        ],
        [
         114.236,
         40.198
        ],
        [
         114.255,
         40.236
        ],
        [
         114.293,
         40.23
        ],
        [
         114.3,
         40.232
        ],
        [
         114.3,
         40.397
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.44
        ],
        [
         114.267,
         40.474
        ],
        [
         114.282,
         40.495
        ],
        [
         114.294,
         40.552
        ],
        [
         114.274,
         40.553
        ],
        [
         114.283,
         40.591
        ],
        [
         114.236,
         40.607
        ],
        [
         114.183,
         40.672
        ],
        [
         114.162,
         40.714
        ],
        [
         114.135,
         40.737
        ],
        [
         114.085,
         40.73
        ],
        [
         114.064,
         40.707
        ],
        [
         114.072,
         40.679
        ],
        [
         114.042,
         40.609
        ],
        [
         114.077,
         40.576
        ],
        [
         114.08,
         40.548
        ],
        [
         114.062,
         40.529
        ],
        [
         114.011,
         40.516
        ],
        [
         113.949,
         40.515
        ],
        [
         113.89,
         40.467
        ],
        [
         113.851,
         40.461
        ],
        [
         113.795,
         40.518
        ],
        [
         113.763,
         40.474
        ],
        [
         113.689,
         40.448
        ],
        [
         113.56,
         40.348
        ],
        [
         113.5,
         40.334
        ],
        [
         113.388,
         40.319
        ],
        [
         113.317,
         40.32
        ],
        [
         113.276,
         40.389
        ],
        [
         113.251,
         40.413
        ],
        [
         113.083,
         40.375
        ],
        [
         113.033,
         40.369
        ],
        [
         112.898,
         40.329
        ],
        [
         112.849,
         40.207
        ],
        [
         112.744,
         40.167
        ],
        [
         112.712,
         40.179
        ],
        [
         112.63,
         40.236
        ],
        [
         112.512,
         40.269
        ],
        [
         112.456,
         40.3
        ],
        [
         112.418,
         40.295
        ],
        [
         112.349,
         40.257
        ],
        [
         112.31,
         40.256
        ],
        [
         112.3,
         40.212
        ],
        [
         112.3,
         39.08
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.3,
        41.08
       ],
       [
        112.3,
        40.212
       ],
       [
        112.31,
        40.256
       ],
       [
        112.349,
        40.257
       ],
       [
        112.418,
        40.295
       ],
       [
        112.456,
        40.3
       ],
       [
        112.512,
        40.269
       ],
       [
        112.63,
        40.236
       ],
       [
        112.712,
        40.179
       ],
       [
        112.744,
        40.167
       ],
       [
        112.849,
        40.207
       ],
       [
        112.898,
        40.329
       ],
       [
        113.033,
        40.369
       ],
       [
        113.083,
        40.375
       ],
       [
        113.251,
        40.413
       ],
       [
        113.276,
        40.389
       ],
       [
        113.317,
        40.32
       ],
       [
        113.388,
        40.319
       ],
       [
        113.5,
        40.334
       ],
       [
        113.56,
        40.348
       ],
       [
        113.689,
        40.448
       ],
       [
        113.763,
        40.474
       ],
       [
        113.795,
        40.518
       ],
       [
        113.851,
        40.461
       ],
       [
        113.89,
        40.467
       ],
       [
        113.949,
        40.515
       ],
       [
        114.011,
        40.516
       ],
       [
        114.062,
        40.529
       ],
       [
        114.08,
        40.548
       ],
       [
        114.077,
        40.576
       ],
       [
        114.042,
        40.609
       ],
       [
        114.072,
        40.679
       ],
       [
        114.064,
        40.707
       ],
       [
        114.085,
        40.73
       ],
       [
        114.135,
        40.737
       ],
       [
        114.103,
        40.771
       ],
       [
        114.104,
        40.798
       ],
       [
        114.08,
        40.79
       ],
       [
        114.045,
        40.831
       ],
       [
        114.074,
        40.857
       ],
       [
        114.055,
        40.868
       ],
       [
        114.042,
        40.918
       ],
       [
        114.058,
        40.925
       ],
       [
        113.995,
        40.939
       ],
       [
        113.973,
        40.983
       ],
       [
        113.869,
        41.069
       ],
       [
        113.85,
        41.08
       ],
       [
        112.3,
        41.08
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   112.3,
   39.08,
   114.3,
   41.08
  ]
 }
};
