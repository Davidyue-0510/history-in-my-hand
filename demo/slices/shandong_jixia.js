// 本文件由 tools/build.py 自动生成（切片 shandong_jixia），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shandong_jixia"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shandong_jixia"] = {
 "meta": {
  "kind": "thought",
  "region": "warring_states",
  "province": "shandong",
  "title": "战国·稷下学宫（诸子百家争鸣）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "linzi",
  "dossier_event": "event:ev_shandong_jixia_01",
  "vocab_pack": "inline:shandong_jixia",
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
    "note": "战国·稷下学宫（诸子百家争鸣）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "战国·稷下学宫（诸子百家争鸣）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "战国·稷下学宫（诸子百家争鸣）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "战国·稷下学宫（诸子百家争鸣）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shandong_jixia",
  "key": "shandong_jixia",
  "scene_id": "shandong_jixia"
 },
 "sources": [
  {
   "id": "jixia_xuegong",
   "title": "《史记·田敬仲完世家》与稷下学宫",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "战国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "linzi",
   "name": "临淄",
   "type": "city",
   "modern": "今山东淄博临淄区",
   "note": "齐国都城",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.05,
   "lat": 36.81,
   "geo_note": "今山东淄博临淄；房玄龄故里",
   "elev": 70
  },
  {
   "id": "jimen",
   "name": "稷门",
   "type": "city",
   "modern": "临淄城西门",
   "note": "学宫所在",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
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
   "name": "齐宣王",
   "role": "齐国君主",
   "note": "设稷下学宫，招贤纳士",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "邹衍",
   "role": "阴阳家代表",
   "note": "五德终始说",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p03",
   "name": "淳于髡",
   "role": "稷下学者",
   "note": "滑稽善辩",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p04",
   "name": "田骈",
   "role": "稷下学者",
   "note": "道家",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p05",
   "name": "慎到",
   "role": "稷下学者",
   "note": "法家",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shandong_jixia_01",
   "predicate": "建置",
   "value_text": "齐宣王设学宫于稷门",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "jimen",
   "source": "jixia_xuegong",
   "quote": "于临淄稷门下设学宫",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于临淄稷门下设学宫",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shandong_jixia_02",
   "predicate": "招贤",
   "value_text": "邹衍等贤士咸集",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "招致天下贤士",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "招致天下贤士",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shandong_jixia_03",
   "predicate": "争鸣",
   "value_text": "各派自由讲学议论",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "各抒所见，议论国政",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "各抒所见，议论国政",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "person:SHA__p02",
   "predicate": "学说",
   "value_text": "邹衍倡五德终始",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "邹衍之徒咸集",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "邹衍之徒咸集",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "person:SHA__p03",
   "predicate": "身份",
   "value_text": "淳于髡为稷下先生",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "淳于髡之徒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "淳于髡之徒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "person:SHA__p04",
   "predicate": "身份",
   "value_text": "田骈为稷下学者",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "田骈之徒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "田骈之徒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "person:SHA__p05",
   "predicate": "身份",
   "value_text": "慎到为稷下学者",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "慎到之徒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "慎到之徒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shandong_jixia_01",
   "predicate": "性质",
   "value_text": "学宫为官办机构",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "jimen",
   "source": "jixia_xuegong",
   "quote": "设学宫",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设学宫",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shandong_jixia_03",
   "predicate": "影响",
   "value_text": "促进百家争鸣",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "倡百家争鸣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "倡百家争鸣",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "event:ev_shandong_jixia_03",
   "predicate": "参与学派",
   "value_text": "阴阳、道、法等家",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "邹衍、淳于髡、田骈、慎到",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "邹衍、淳于髡、田骈、慎到",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "event:ev_shandong_jixia_03",
   "predicate": "讲学方式",
   "value_text": "自由讲学不治议论",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "自由讲学，不治而议论",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自由讲学，不治而议论",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shandong_jixia_01",
   "predicate": "设立者",
   "value_text": "齐宣王设立",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "jimen",
   "source": "jixia_xuegong",
   "quote": "齐宣王时",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "齐宣王时",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shandong_jixia_01",
   "predicate": "地点",
   "value_text": "临淄稷门",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "jimen",
   "source": "jixia_xuegong",
   "quote": "临淄稷门",
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
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "临淄稷门",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "event:ev_shandong_jixia_03",
   "predicate": "历史地位",
   "value_text": "诸子荟萃之枢",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "为诸子荟萃之枢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为诸子荟萃之枢",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "event:ev_shandong_jixia_01",
   "predicate": "存续时间",
   "value_text": "具体存续不详",
   "time": {
    "era_text": "齐宣王时",
    "start": "-319"
   },
   "place": "linzi",
   "source": "jixia_xuegong",
   "quote": "齐宣王时",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "史料未载学宫存续年限",
    "skills": [
     "考古",
     "文献考据"
    ],
    "accept": "需进一步考证"
   },
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "齐宣王时",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_015"
 ],
 "events": [
  {
   "id": "ev_shandong_jixia_01",
   "subject": "event:ev_shandong_jixia_01",
   "year": -319,
   "era": "齐宣王时",
   "title": "设稷下学宫",
   "kind": "建置",
   "text": "齐宣王设学宫于临淄稷门",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shandong_jixia_02",
   "subject": "event:ev_shandong_jixia_02",
   "year": -319,
   "era": "齐宣王时",
   "title": "贤士云集",
   "kind": "其他",
   "text": "邹衍等咸集稷下",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shandong_jixia_03",
   "subject": "event:ev_shandong_jixia_03",
   "year": -319,
   "era": "齐宣王时",
   "title": "百家争鸣",
   "kind": "其他",
   "text": "各抒所见议论国政",
   "_source_idx": 0,
   "_source_name": "《史记·田敬仲完世家》与稷下学宫",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "linzi",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "region": "warring_states"
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
        118.998,
        37.277
       ],
       [
        118.953,
        37.331
       ],
       [
        118.955,
        37.494
       ],
       [
        118.991,
        37.641
       ],
       [
        119.033,
        37.661
       ],
       [
        119.05,
        37.673
       ],
       [
        119.05,
        37.766
       ],
       [
        119.038,
        37.777
       ],
       [
        119.036,
        37.809
       ],
       [
        119.036,
        37.81
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
        117.05,
        35.81
       ],
       [
        117.05,
        37.81
       ],
       [
        119.036,
        37.81
       ],
       [
        119.036,
        37.809
       ],
       [
        119.038,
        37.777
       ],
       [
        119.05,
        37.766
       ],
       [
        119.05,
        37.673
       ],
       [
        119.033,
        37.661
       ],
       [
        118.991,
        37.641
       ],
       [
        118.955,
        37.494
       ],
       [
        118.953,
        37.331
       ],
       [
        118.998,
        37.277
       ],
       [
        119.05,
        37.242
       ],
       [
        119.05,
        35.81
       ],
       [
        117.05,
        35.81
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
         117.05,
         37.81
        ],
        [
         117.05,
         35.81
        ],
        [
         119.05,
         35.81
        ],
        [
         119.05,
         37.269
        ],
        [
         119.04,
         37.304
        ],
        [
         119.001,
         37.319
        ],
        [
         118.943,
         37.497
        ],
        [
         118.94,
         37.527
        ],
        [
         118.989,
         37.621
        ],
        [
         119.024,
         37.642
        ],
        [
         119.05,
         37.645
        ],
        [
         119.05,
         37.81
        ],
        [
         117.05,
         37.81
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       117.05,
       36.791
      ],
      [
       117.151,
       36.862
      ],
      [
       117.24,
       36.994
      ],
      [
       117.352,
       37.082
      ],
      [
       117.485,
       37.127
      ],
      [
       117.571,
       37.175
      ],
      [
       117.608,
       37.228
      ],
      [
       117.693,
       37.256
      ],
      [
       117.825,
       37.26
      ],
      [
       117.97,
       37.29
      ],
      [
       118.128,
       37.347
      ],
      [
       118.238,
       37.431
      ],
      [
       118.298,
       37.541
      ],
      [
       118.385,
       37.604
      ],
      [
       118.498,
       37.619
      ],
      [
       118.645,
       37.678
      ],
      [
       118.826,
       37.78
      ],
      [
       118.909,
       37.81
      ],
      [
       119.03,
       37.81
      ],
      [
       119.036,
       37.809
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   117.05,
   35.81,
   119.05,
   37.81
  ]
 }
};
