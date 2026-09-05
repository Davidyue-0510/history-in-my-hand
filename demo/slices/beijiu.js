// 本文件由 tools/build.py 自动生成（切片 beijiu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["beijiu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["beijiu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "杯酒释兵权",
  "dossier_label": "杯酒释兵权",
  "subtitle": "961 · 宋太祖",
  "primary_place": "kaofeng",
  "dossier_event": "event:bj_961",
  "terrain_grid": "china_coarse",
  "lead": "建隆二年（961）太祖宴石守信等宿将，以「君臣猜疑」为由劝其释兵权、出守藩镇，赏赉优厚。兵权归枢密、将不专兵，宋之「强干弱枝」自此而定。",
  "parties_note": "故事见《续资治通鉴长编》载，后世或疑其详，然抑武之势确然。",
  "subject_names": {
   "person:songtaizu": "宋太祖",
   "person:shishouxin": "石守信"
  },
  "dims": [
   3,
   6
  ],
  "epoch": "song",
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
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）"
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
    "note": "技术↔生产力；赋税/漕运→后勤半径（R7）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；流民→动员潜力"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "page": "county.html?scene=beijiu",
  "key": "beijiu",
  "scene_id": "beijiu",
  "vocab_pack": "inline:beijiu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "杯酒释兵权·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "故事见《续资治通鉴长编》载，后世或疑其详，然抑武之势确然。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  },
  {
   "id": "chenqiao",
   "name": "陈桥驿",
   "lon": 114.2,
   "lat": 34.85,
   "note": "陈桥兵变地，开封东北",
   "elev": 74
  }
 ],
 "persons": [
  {
   "id": "songtaizu",
   "name": "宋太祖",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "shishouxin",
   "name": "石守信",
   "side": "宋将",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bj_961",
   "subject": "event:bj_961",
   "predicate": "事件",
   "value_text": "太祖宴宿将，婉言劝释兵权，诸将拜辞就镇。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 961,
    "end": 961,
    "era_text": "建隆二"
   },
   "place": "kaofeng",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_eff",
   "subject": "event:bj_eff",
   "predicate": "事件",
   "value_text": "兵权归枢密、更戍法行，唐末藩镇之患渐弭。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 962,
    "end": 962,
    "era_text": "建隆三"
   },
   "place": "kaofeng",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M51",
   "subject": "event:bj_961",
   "predicate": "发生",
   "value_text": "宋太祖宴禁军将石守信等",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "宋太祖宴禁军将石守信等",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件主体为杯酒释兵权",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M52",
   "subject": "event:bj_961",
   "predicate": "结果",
   "value_text": "杯酒释兵权",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "杯酒释兵权",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M50",
   "subject": "person:shishouxin",
   "predicate": "参与",
   "value_text": "石守信等被宴请",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "宴禁军将石守信等",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M52",
   "subject": "event:bj_961",
   "predicate": "措施",
   "value_text": "收精兵归枢密",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "收精兵归枢密",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M50",
   "subject": "event:bj_961",
   "predicate": "影响",
   "value_text": "藩镇之祸弭",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "藩镇之祸弭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文评价性表述",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M49",
   "subject": "event:bj_961",
   "predicate": "影响",
   "value_text": "中央集权成",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "中央集权成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文评价性表述",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M46",
   "subject": "person:songtaizu",
   "predicate": "主导",
   "value_text": "宋太祖主导释兵权",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "宋太祖宴禁军将石守信等",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说主导者，但主语为宋太祖",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M46",
   "subject": "event:bj_961",
   "predicate": "性质",
   "value_text": "和平解除兵权",
   "time": {
    "era_text": "建隆二年",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "杯酒释兵权",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "由'杯酒'推断非武力",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "BEIJIUG01",
   "subject": "event:bj_961",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "建隆",
    "start": "961-01-01",
    "end": "961-12-31",
    "gregorian_year": 961
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "court",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:bj_961|影响",
   "subject": "event:bj_961",
   "predicate": "影响",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX005_M50",
    "SX006_M49"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "BEIJIUG01"
 ],
 "events": [
  {
   "id": "ev_bj_961",
   "subject": "event:bj_961",
   "year": 961,
   "era": "建隆二",
   "title": "宴饮释权",
   "kind": "权谋",
   "text": "太祖宴宿将，婉言劝释兵权，诸将拜辞就镇。",
   "place": "kaofeng"
  },
  {
   "id": "ev_bj_eff",
   "subject": "event:bj_eff",
   "year": 962,
   "era": "建隆三",
   "title": "崇文抑武",
   "kind": "结局",
   "text": "兵权归枢密、更戍法行，唐末藩镇之患渐弭。",
   "place": "kaofeng"
  }
 ],
 "edges": [],
 "control": [],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
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
        113.2,
        33.79
       ],
       [
        113.2,
        35.85
       ],
       [
        115.3,
        35.85
       ],
       [
        115.3,
        33.79
       ],
       [
        113.2,
        33.79
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
         113.2,
         35.85
        ],
        [
         113.2,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.652,
         35.85
        ],
        [
         113.2,
         35.85
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.3,
         35.85
        ],
        [
         115.3,
         35.85
        ],
        [
         115.3,
         35.474
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.3,
         34.855
        ],
        [
         115.3,
         35.85
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.2,
         33.79
        ],
        [
         115.3,
         33.79
        ],
        [
         115.3,
         34.855
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.3,
         35.474
        ],
        [
         115.3,
         35.85
        ],
        [
         113.652,
         35.85
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.2,
         35.449
        ],
        [
         113.2,
         33.79
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.2,
        34.897
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.3,
       35.477
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   113.2,
   33.79,
   115.3,
   35.85
  ]
 }
};
