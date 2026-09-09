// 本文件由 tools/build.py 自动生成（切片 shanxi_xunzi_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanxi_xunzi_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanxi_xunzi_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "huabei",
  "province": "shanxi",
  "title": "荀子·赵地与性恶论（战国）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "zhao",
  "dossier_event": "event:ev_shanxi_xunzi_llm_01",
  "vocab_pack": "inline:shanxi_xunzi_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "warring_states",
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
    "note": "荀子·赵地与性恶论（战国）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "荀子·赵地与性恶论（战国）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "荀子·赵地与性恶论（战国）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "荀子·赵地与性恶论（战国）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   5,
   6
  ],
  "page": "county.html?scene=shanxi_xunzi_llm",
  "key": "shanxi_xunzi_llm",
  "scene_id": "shanxi_xunzi_llm"
 },
 "sources": [
  {
   "id": "shanxi_xunzi_src",
   "title": "荀子·性恶 / 史记·荀卿列传",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "刘向",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zhao",
   "name": "赵",
   "type": "region",
   "modern": "今中国山西南部",
   "note": "荀况故里",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.0,
   "lat": 36.0,
   "geo_note": "今山西南部（赵地代表点）",
   "elev": 1062
  },
  {
   "id": "jixia",
   "name": "稷下",
   "type": "city",
   "modern": "今中国山东淄博",
   "note": "齐国学宫",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.05,
   "lat": 36.82,
   "geo_note": "今山东淄博临淄（稷下学宫）",
   "elev": 67
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "荀况",
   "role": "思想家，稷下学宫祭酒",
   "note": "赵人，性恶论倡导者",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 7
  },
  {
   "id": "SHA__p02",
   "name": "韩非",
   "role": "荀子弟子，法家代表",
   "note": "传荀子之术",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p03",
   "name": "李斯",
   "role": "荀子弟子，秦相",
   "note": "传荀子之术",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "person:SHA__p01",
   "predicate": "籍贯",
   "value_text": "赵人，今山西南部",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "zhao",
   "source": "shanxi_xunzi_src",
   "quote": "荀况，赵人",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荀况，赵人",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "person:SHA__p01",
   "predicate": "经历",
   "value_text": "游学齐国稷下，三为祭酒",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "jixia",
   "source": "shanxi_xunzi_src",
   "quote": "游学齐国稷下，三为祭酒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "游学齐国稷下，三为祭酒",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p01",
   "predicate": "主张",
   "value_text": "性恶论，善者伪也",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "jixia",
   "source": "shanxi_xunzi_src",
   "quote": "人之性恶，其善者伪也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "人之性恶，其善者伪也",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "person:SHA__p01",
   "predicate": "主张",
   "value_text": "化性起伪，礼法并施",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "jixia",
   "source": "shanxi_xunzi_src",
   "quote": "化性起伪，礼法并施",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "化性起伪，礼法并施",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "person:SHA__p01",
   "predicate": "弟子",
   "value_text": "韩非、李斯传其术",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "jixia",
   "source": "shanxi_xunzi_src",
   "quote": "弟子韩非、李斯传其术",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "弟子韩非、李斯传其术",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "person:SHA__p01",
   "predicate": "思想",
   "value_text": "隆礼尊贤而王",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "zhao",
   "source": "shanxi_xunzi_src",
   "quote": "隆礼尊贤而王",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "隆礼尊贤而王",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "person:SHA__p01",
   "predicate": "思想",
   "value_text": "重法爱民而霸",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "zhao",
   "source": "shanxi_xunzi_src",
   "quote": "重法爱民而霸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "重法爱民而霸",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "person:SHA__p01",
   "predicate": "影响",
   "value_text": "儒法之间，启秦汉治术",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "zhao",
   "source": "shanxi_xunzi_src",
   "quote": "儒法之间的赵地基调，遂启秦汉之治术",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世评价",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "儒法之间的赵地基调，遂启秦汉之治术",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "person:SHA__p01",
   "predicate": "籍贯",
   "value_text": "赵地具体位置有争议",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "zhao",
   "source": "shanxi_xunzi_src",
   "quote": "赵人（今山西南部）",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "今山西南部为推测",
   "dims": [
    1
   ],
   "lead": {
    "where": "山西南部考古与文献",
    "skills": [
     "历史地理",
     "考古学"
    ],
    "accept": "确认荀况具体出生地"
   },
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赵人（今山西南部）",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "shanxi_xunzi_llm_EV01",
   "subject": "event:ev_shanxi_xunzi_llm_01",
   "predicate": "沿革",
   "value_text": "荀子·赵地与性恶论（战国）。",
   "time": {
    "era_text": "战国",
    "start": "-300"
   },
   "place": "",
   "source": "shanxi_xunzi_src",
   "quote": "荀子·赵地与性恶论（战国）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荀况，赵人",
   "source_text": "荀况，赵人（今山西南部），游学齐国稷下，『三为祭酒』。倡『人之性恶，其善者伪也』，主『化性起伪』、礼法并施；弟子韩非、李斯传其术。『隆礼尊贤而王，重法爱民而霸』，儒法之间的赵地基调，遂启秦汉之治术。",
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:SHA__p01|主张",
   "subject": "person:SHA__p01",
   "predicate": "主张",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SHA_003",
    "SHA_004"
   ]
  },
  {
   "id": "cf:person:SHA__p01|思想",
   "subject": "person:SHA__p01",
   "predicate": "思想",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SHA_006",
    "SHA_007"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "SHA_009"
 ],
 "events": [
  {
   "id": "ev_shanxi_xunzi_llm_01",
   "subject": "event:ev_shanxi_xunzi_llm_01",
   "year": {
    "era_text": "战国",
    "start": "-300"
   },
   "era": "warring_states",
   "title": "荀子·赵地与性恶论（战国）",
   "kind": "沿革",
   "text": "荀子·赵地与性恶论（战国）。"
  }
 ],
 "edges": [
  {
   "from": "zhao",
   "to": "jixia",
   "type": "military",
   "label": "荀况游学路线",
   "_source_idx": 0,
   "_source_name": "荀子·性恶 / 史记·荀卿列传",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "zhao",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "jixia",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "zhao",
   "name": "赵",
   "lon": 112.0,
   "lat": 36.0,
   "region": "huabei"
  },
  {
   "place_id": "jixia",
   "name": "稷下",
   "lon": 118.05,
   "lat": 36.82,
   "region": "huabei"
  }
 ],
 "control_years": [
  -200,
  -100
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
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.05,
        37.242
       ],
       [
        118.953,
        37.331
       ],
       [
        118.991,
        37.641
       ],
       [
        119.05,
        37.673
       ],
       [
        119.038,
        37.777
       ],
       [
        119.035,
        37.82
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        111.0,
        35.0
       ],
       [
        119.035,
        37.82
       ],
       [
        119.038,
        37.777
       ],
       [
        119.05,
        37.673
       ],
       [
        118.991,
        37.641
       ],
       [
        118.953,
        37.331
       ],
       [
        119.05,
        37.242
       ],
       [
        111.0,
        35.0
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
         113.976,
         37.82
        ],
        [
         114.007,
         37.813
        ],
        [
         113.997,
         37.73
        ],
        [
         114.068,
         37.722
        ],
        [
         114.14,
         37.676
        ],
        [
         114.119,
         37.591
        ],
        [
         114.015,
         37.425
        ],
        [
         113.963,
         37.356
        ],
        [
         113.886,
         37.239
        ],
        [
         113.832,
         37.168
        ],
        [
         113.774,
         37.107
        ],
        [
         113.788,
         37.06
        ],
        [
         113.792,
         36.988
        ],
        [
         113.793,
         36.895
        ],
        [
         113.732,
         36.859
        ],
        [
         113.697,
         36.882
        ],
        [
         113.681,
         36.79
        ],
        [
         113.549,
         36.753
        ],
        [
         113.5,
         36.741
        ],
        [
         113.507,
         36.705
        ],
        [
         113.487,
         36.635
        ],
        [
         113.54,
         36.594
        ],
        [
         113.589,
         36.548
        ],
        [
         113.554,
         36.495
        ],
        [
         113.636,
         36.451
        ],
        [
         113.708,
         36.423
        ],
        [
         113.755,
         36.366
        ],
        [
         113.857,
         36.329
        ],
        [
         113.882,
         36.354
        ],
        [
         113.963,
         36.354
        ],
        [
         114.003,
         36.334
        ],
        [
         114.043,
         36.303
        ],
        [
         114.129,
         36.28
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.241,
         36.251
        ],
        [
         114.299,
         36.246
        ],
        [
         114.356,
         36.23
        ],
        [
         114.417,
         36.206
        ],
        [
         114.48,
         36.178
        ],
        [
         114.587,
         36.141
        ],
        [
         114.64,
         36.137
        ],
        [
         114.735,
         36.156
        ],
        [
         114.858,
         36.128
        ],
        [
         114.913,
         36.141
        ],
        [
         114.914,
         36.052
        ],
        [
         115.046,
         36.113
        ],
        [
         115.063,
         36.178
        ],
        [
         115.125,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.302,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.451,
         36.152
        ],
        [
         115.484,
         36.149
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.423,
         36.322
        ],
        [
         115.369,
         36.342
        ],
        [
         115.298,
         36.413
        ],
        [
         115.291,
         36.46
        ],
        [
         115.331,
         36.55
        ],
        [
         115.366,
         36.622
        ],
        [
         115.452,
         36.702
        ],
        [
         115.525,
         36.764
        ],
        [
         115.712,
         36.883
        ],
        [
         115.797,
         36.969
        ],
        [
         115.856,
         37.061
        ],
        [
         115.88,
         37.151
        ],
        [
         115.91,
         37.207
        ],
        [
         115.976,
         37.337
        ],
        [
         116.086,
         37.374
        ],
        [
         116.169,
         37.384
        ],
        [
         116.236,
         37.361
        ],
        [
         116.226,
         37.428
        ],
        [
         116.225,
         37.48
        ],
        [
         116.241,
         37.49
        ],
        [
         116.29,
         37.484
        ],
        [
         116.295,
         37.554
        ],
        [
         116.367,
         37.566
        ],
        [
         116.381,
         37.523
        ],
        [
         116.381,
         37.523
        ],
        [
         116.448,
         37.503
        ],
        [
         116.576,
         37.611
        ],
        [
         116.663,
         37.686
        ],
        [
         116.725,
         37.744
        ],
        [
         116.754,
         37.793
        ],
        [
         113.976,
         37.82
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
         111.0,
         37.82
        ],
        [
         111.723,
         35.0
        ],
        [
         111.807,
         35.033
        ],
        [
         111.933,
         35.083
        ],
        [
         112.019,
         35.069
        ],
        [
         112.062,
         35.056
        ],
        [
         112.066,
         35.153
        ],
        [
         112.079,
         35.219
        ],
        [
         112.138,
         35.271
        ],
        [
         112.242,
         35.235
        ],
        [
         112.288,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.637,
         35.226
        ],
        [
         112.72,
         35.206
        ],
        [
         112.822,
         35.258
        ],
        [
         112.934,
         35.263
        ],
        [
         112.992,
         35.296
        ],
        [
         112.996,
         35.362
        ],
        [
         113.126,
         35.332
        ],
        [
         113.165,
         35.413
        ],
        [
         113.19,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.348,
         35.468
        ],
        [
         113.439,
         35.507
        ],
        [
         113.514,
         35.574
        ],
        [
         113.548,
         35.657
        ],
        [
         113.625,
         35.633
        ],
        [
         113.593,
         35.692
        ],
        [
         113.605,
         35.798
        ],
        [
         113.661,
         35.837
        ],
        [
         113.654,
         35.932
        ],
        [
         113.679,
         35.986
        ],
        [
         113.66,
         36.035
        ],
        [
         113.671,
         36.116
        ],
        [
         113.713,
         36.13
        ],
        [
         113.651,
         36.174
        ],
        [
         113.682,
         36.216
        ],
        [
         113.712,
         36.303
        ],
        [
         113.731,
         36.363
        ],
        [
         113.67,
         36.425
        ],
        [
         113.587,
         36.461
        ],
        [
         113.56,
         36.529
        ],
        [
         113.57,
         36.586
        ],
        [
         113.545,
         36.623
        ],
        [
         113.477,
         36.655
        ],
        [
         113.465,
         36.708
        ],
        [
         113.536,
         36.732
        ],
        [
         113.6,
         36.753
        ],
        [
         113.676,
         36.856
        ],
        [
         113.732,
         36.879
        ],
        [
         113.773,
         36.855
        ],
        [
         113.761,
         36.956
        ],
        [
         113.772,
         37.017
        ],
        [
         113.758,
         37.075
        ],
        [
         113.773,
         37.152
        ],
        [
         113.853,
         37.215
        ],
        [
         113.902,
         37.31
        ],
        [
         113.974,
         37.403
        ],
        [
         114.037,
         37.494
        ],
        [
         114.116,
         37.62
        ],
        [
         114.128,
         37.698
        ],
        [
         113.994,
         37.707
        ],
        [
         114.045,
         37.762
        ],
        [
         113.977,
         37.817
        ],
        [
         111.0,
         37.82
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
         119.05,
         35.0
        ],
        [
         119.027,
         35.056
        ],
        [
         118.928,
         35.051
        ],
        [
         118.862,
         35.0
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         118.862,
         35.0
        ],
        [
         118.928,
         35.051
        ],
        [
         119.027,
         35.056
        ],
        [
         119.05,
         37.269
        ],
        [
         119.001,
         37.319
        ],
        [
         118.94,
         37.527
        ],
        [
         119.024,
         37.642
        ],
        [
         119.05,
         37.82
        ],
        [
         116.754,
         37.793
        ],
        [
         116.725,
         37.744
        ],
        [
         116.663,
         37.686
        ],
        [
         116.576,
         37.611
        ],
        [
         116.448,
         37.503
        ],
        [
         116.381,
         37.523
        ],
        [
         116.381,
         37.523
        ],
        [
         116.367,
         37.566
        ],
        [
         116.295,
         37.554
        ],
        [
         116.29,
         37.484
        ],
        [
         116.241,
         37.49
        ],
        [
         116.225,
         37.48
        ],
        [
         116.226,
         37.428
        ],
        [
         116.236,
         37.361
        ],
        [
         116.169,
         37.384
        ],
        [
         116.086,
         37.374
        ],
        [
         115.976,
         37.337
        ],
        [
         115.91,
         37.207
        ],
        [
         115.88,
         37.151
        ],
        [
         115.856,
         37.061
        ],
        [
         115.797,
         36.969
        ],
        [
         115.712,
         36.883
        ],
        [
         115.525,
         36.764
        ],
        [
         115.452,
         36.702
        ],
        [
         115.366,
         36.622
        ],
        [
         115.331,
         36.55
        ],
        [
         115.291,
         36.46
        ],
        [
         115.298,
         36.413
        ],
        [
         115.369,
         36.342
        ],
        [
         115.423,
         36.322
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.484,
         36.149
        ],
        [
         115.449,
         36.047
        ],
        [
         115.363,
         35.972
        ],
        [
         115.364,
         35.894
        ],
        [
         115.363,
         35.78
        ],
        [
         115.46,
         35.868
        ],
        [
         115.495,
         35.896
        ],
        [
         115.513,
         35.89
        ],
        [
         115.649,
         35.923
        ],
        [
         115.775,
         35.975
        ],
        [
         115.817,
         36.013
        ],
        [
         115.899,
         36.027
        ],
        [
         116.058,
         36.105
        ],
        [
         116.063,
         36.029
        ],
        [
         115.985,
         35.974
        ],
        [
         115.908,
         35.927
        ],
        [
         115.883,
         35.88
        ],
        [
         115.817,
         35.844
        ],
        [
         115.735,
         35.833
        ],
        [
         115.694,
         35.754
        ],
        [
         115.529,
         35.734
        ],
        [
         115.383,
         35.569
        ],
        [
         115.356,
         35.49
        ],
        [
         115.237,
         35.423
        ],
        [
         115.126,
         35.418
        ],
        [
         115.092,
         35.416
        ],
        [
         115.043,
         35.377
        ],
        [
         114.929,
         35.245
        ],
        [
         114.861,
         35.182
        ],
        [
         114.883,
         35.099
        ],
        [
         114.819,
         35.052
        ],
        [
         114.824,
         35.012
        ],
        [
         114.885,
         35.0
        ],
        [
         115.075,
         35.001
        ],
        [
         115.131,
         35.0
        ]
       ]
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.513,
         35.89
        ],
        [
         115.495,
         35.896
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
         115.131,
         35.0
        ],
        [
         115.075,
         35.001
        ],
        [
         114.885,
         35.0
        ],
        [
         114.824,
         35.012
        ],
        [
         114.819,
         35.052
        ],
        [
         114.883,
         35.099
        ],
        [
         114.861,
         35.182
        ],
        [
         114.929,
         35.245
        ],
        [
         115.043,
         35.377
        ],
        [
         115.092,
         35.416
        ],
        [
         115.126,
         35.418
        ],
        [
         115.237,
         35.423
        ],
        [
         115.356,
         35.49
        ],
        [
         115.383,
         35.569
        ],
        [
         115.529,
         35.734
        ],
        [
         115.694,
         35.754
        ],
        [
         115.735,
         35.833
        ],
        [
         115.817,
         35.844
        ],
        [
         115.883,
         35.88
        ],
        [
         115.908,
         35.927
        ],
        [
         115.985,
         35.974
        ],
        [
         116.063,
         36.029
        ],
        [
         116.058,
         36.105
        ],
        [
         115.899,
         36.027
        ],
        [
         115.817,
         36.013
        ],
        [
         115.775,
         35.975
        ],
        [
         115.649,
         35.923
        ],
        [
         115.513,
         35.89
        ],
        [
         115.46,
         35.868
        ],
        [
         115.363,
         35.78
        ],
        [
         115.364,
         35.894
        ],
        [
         115.363,
         35.972
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.149
        ],
        [
         115.451,
         36.152
        ],
        [
         115.366,
         36.099
        ],
        [
         115.302,
         36.128
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.125,
         36.21
        ],
        [
         115.063,
         36.178
        ],
        [
         115.046,
         36.113
        ],
        [
         114.914,
         36.052
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.128
        ],
        [
         114.735,
         36.156
        ],
        [
         114.64,
         36.137
        ],
        [
         114.587,
         36.141
        ],
        [
         114.48,
         36.178
        ],
        [
         114.417,
         36.206
        ],
        [
         114.356,
         36.23
        ],
        [
         114.299,
         36.246
        ],
        [
         114.241,
         36.251
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.129,
         36.28
        ],
        [
         114.043,
         36.303
        ],
        [
         114.003,
         36.334
        ],
        [
         113.963,
         36.354
        ],
        [
         113.882,
         36.354
        ],
        [
         113.857,
         36.329
        ],
        [
         113.755,
         36.366
        ],
        [
         113.736,
         36.325
        ],
        [
         113.716,
         36.262
        ],
        [
         113.698,
         36.182
        ],
        [
         113.706,
         36.149
        ],
        [
         113.655,
         36.125
        ],
        [
         113.686,
         36.056
        ],
        [
         113.695,
         36.027
        ],
        [
         113.649,
         35.994
        ],
        [
         113.638,
         35.87
        ],
        [
         113.583,
         35.818
        ],
        [
         113.588,
         35.737
        ],
        [
         113.623,
         35.675
        ],
        [
         113.578,
         35.633
        ],
        [
         113.558,
         35.622
        ],
        [
         113.499,
         35.532
        ],
        [
         113.392,
         35.507
        ],
        [
         113.312,
         35.481
        ],
        [
         113.243,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.149,
         35.351
        ],
        [
         113.067,
         35.354
        ],
        [
         112.986,
         35.34
        ],
        [
         112.936,
         35.284
        ],
        [
         112.884,
         35.244
        ],
        [
         112.773,
         35.208
        ],
        [
         112.628,
         35.263
        ],
        [
         112.513,
         35.218
        ],
        [
         112.368,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.217,
         35.253
        ],
        [
         112.059,
         35.28
        ],
        [
         112.04,
         35.194
        ],
        [
         112.056,
         35.099
        ],
        [
         112.039,
         35.046
        ],
        [
         111.978,
         35.067
        ],
        [
         111.81,
         35.062
        ],
        [
         111.74,
         35.005
        ],
        [
         115.131,
         35.0
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
         111.0,
         35.0
        ],
        [
         111.0,
         37.82
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.693,
        35.0
       ],
       [
        111.844,
        35.074
       ],
       [
        112.182,
        35.0
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
       114.866,
       35.145
      ],
      [
       115.014,
       35.33
      ],
      [
       115.272,
       35.459
      ],
      [
       115.341,
       35.538
      ],
      [
       115.463,
       35.681
      ],
      [
       115.781,
       35.83
      ],
      [
       115.866,
       35.91
      ],
      [
       115.924,
       35.966
      ],
      [
       116.036,
       36.071
      ],
      [
       116.116,
       36.143
      ],
      [
       116.451,
       36.339
      ],
      [
       116.593,
       36.49
      ],
      [
       116.735,
       36.656
      ],
      [
       117.024,
       36.773
      ],
      [
       117.24,
       36.994
      ],
      [
       117.485,
       37.127
      ],
      [
       117.608,
       37.228
      ],
      [
       117.825,
       37.26
      ],
      [
       118.128,
       37.347
      ],
      [
       118.298,
       37.541
      ],
      [
       118.498,
       37.619
      ],
      [
       118.826,
       37.78
      ],
      [
       118.968,
       37.82
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.0,
   35.0,
   119.05,
   37.82
  ]
 }
};
