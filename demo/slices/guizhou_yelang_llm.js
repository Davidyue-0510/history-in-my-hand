// 本文件由 tools/build.py 自动生成（切片 guizhou_yelang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guizhou_yelang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guizhou_yelang_llm"] = {
 "meta": {
  "kind": "fusion",
  "region": "chuan_gui",
  "province": "guizhou",
  "title": "汉通西南夷·夜郎（前135–前111）",
  "dossier_label": "guizhou_yelang_llm",
  "subtitle": "",
  "primary_place": "yelang",
  "dossier_event": "event:ev_guizhou_yelang_llm_01",
  "vocab_pack": "guizhou_yelang_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   3,
   4,
   5,
   6
  ],
  "epoch": "han",
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
    "note": "制度+思想→汉置牂柯郡、封夜郎王，西南夷纳入边郡与羁縻双轨"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→西南夷道自僰道指牂柯江，巴蜀物资与军镇连线"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→夜郎诸部归附、汉民与夷人杂处，边郡编户"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→扼牂柯江—滇黔通道，控西南夷与交趾—巴蜀三角"
   }
  },
  "subject_names": [
   "person:GUI__p01",
   "person:GUI__p02",
   "person:GUI__p03",
   "place:yelang",
   "place:zangke",
   "place:qielan",
   "place:bodaozhi",
   "place:zangkejiang",
   "event:ev_guizhou_yelang_llm_01",
   "event:ev_guizhou_yelang_llm_02",
   "event:ev_guizhou_yelang_llm_03"
  ],
  "page": "county.html?scene=guizhou_yelang_llm",
  "key": "guizhou_yelang_llm",
  "scene_id": "guizhou_yelang_llm"
 },
 "sources": [
  {
   "id": "guizhou_yelang_src_llm",
   "title": "夜郎史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yelang",
   "name": "夜郎",
   "type": "region",
   "modern": "今中国贵州西部",
   "note": "西汉夜郎国地。坐标据地名志条目：夜郎，标 approx。",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 106.44,
   "lat": 26.24,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：夜郎（诚实回填 v0.221）。",
   "elev": 1304
  },
  {
   "id": "zangke",
   "name": "牂牁郡",
   "type": "region",
   "modern": "今中国贵州西部",
   "note": "元鼎六年置",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "jiaozhi",
   "name": "交趾",
   "type": "region",
   "modern": "今越南北部",
   "note": "夜郎东接",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "dian",
   "name": "滇国",
   "type": "region",
   "modern": "今中国云南",
   "note": "夜郎西有",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "qiongdu",
   "name": "邛都",
   "type": "region",
   "modern": "今中国四川西南",
   "note": "夜郎北有",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "zangkejiang",
   "name": "牂牁江",
   "type": "river",
   "modern": "今中国贵州",
   "note": "夜郎控此江",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "shendu",
   "name": "身毒",
   "type": "region",
   "modern": "今印度",
   "note": "蜀布入身毒",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "GUI__p01",
   "name": "多同",
   "role": "夜郎侯",
   "note": "迎汉使，受封为王",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "GUI__p02",
   "name": "汉武帝",
   "role": "汉帝",
   "note": "元鼎年间开拓西南夷",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GUI_001",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "置郡",
   "value_text": "元鼎六年置牂牁郡",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "zangke",
   "source": "guizhou_yelang_src_llm",
   "quote": "置牂牁郡，封其为王",
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
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "置牂牁郡，封其为王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_002",
   "subject": "person:GUI__p01",
   "predicate": "迎汉使",
   "value_text": "夜郎侯多同迎汉使",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "夜郎侯多同迎汉使",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夜郎侯多同迎汉使",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_003",
   "subject": "place:yelang",
   "predicate": "地理位置",
   "value_text": "东接交趾，西有滇国，北有邛都",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "东接交趾，西有滇国，北有邛都",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "东接交趾，西有滇国，北有邛都",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_004",
   "subject": "place:yelang",
   "predicate": "物产",
   "value_text": "临邛竹杖、蜀布由此入身毒",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "临邛竹杖、蜀布由此入身毒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    4
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "临邛竹杖、蜀布由此入身毒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_005",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，因僻远不知汉广大",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "夜郎自大，盖因僻远未知汉之广大",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大，盖因僻远未知汉之广大",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_006",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "影响",
   "value_text": "夜郎归汉，西南夷遂通",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "夜郎归汉，西南夷遂通",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夜郎归汉，西南夷遂通",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_007",
   "subject": "person:GUI__p01",
   "predicate": "封王",
   "value_text": "汉封多同为王",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "封其为王",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "封其为王",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_008",
   "subject": "place:yelang",
   "predicate": "归汉时间",
   "value_text": "元鼎六年归汉",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "元鼎六年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元鼎六年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_009",
   "subject": "place:yelang",
   "predicate": "疆域",
   "value_text": "控牂牁江",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "控牂牁江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "控牂牁江",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_010",
   "subject": "place:yelang",
   "predicate": "汉使",
   "value_text": "汉使至夜郎",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "迎汉使",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "迎汉使",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_011",
   "subject": "place:yelang",
   "predicate": "自大原因",
   "value_text": "僻远未知汉广大",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "僻远未知汉之广大",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僻远未知汉之广大",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_012",
   "subject": "place:yelang",
   "predicate": "贸易路线",
   "value_text": "蜀布经夜郎入身毒",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "蜀布由此入身毒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    4
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀布由此入身毒",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_013",
   "subject": "place:yelang",
   "predicate": "郡治",
   "value_text": "牂牁郡治夜郎",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "zangke",
   "source": "guizhou_yelang_src_llm",
   "quote": "置牂牁郡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "推测",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "置牂牁郡",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "GUI_014",
   "subject": "place:yelang",
   "predicate": "人口",
   "value_text": "夜郎人口无载",
   "time": {
    "era_text": "西汉",
    "start": "-202"
   },
   "place": "yelang",
   "source": "guizhou_yelang_src_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载",
   "dims": [
    4
   ],
   "lead": {
    "where": "汉书·地理志",
    "skills": [
     "历史人口学"
    ],
    "accept": "牂牁郡户口数"
   },
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
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
  "GUI_014"
 ],
 "events": [
  {
   "id": "ev_guizhou_yelang_llm_01",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "year": -111,
   "era": "元鼎六年",
   "title": "夜郎归汉",
   "kind": "行政",
   "text": "夜郎侯多同迎汉使，置牂牁郡",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "yelang",
   "to": "zangke",
   "type": "administrative",
   "label": "置郡",
   "_source_idx": 0,
   "_source_name": "夜郎史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "yelang",
   "party": "后世官修",
   "start": -135,
   "end": -25,
   "basis": "auto: 场景主地点 yelang 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "yelang",
   "name": "夜郎",
   "lon": 106.44,
   "lat": 26.24,
   "region": "chuan_gui"
  }
 ],
 "control_years": [
  -135,
  -25
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
        105.44,
        25.24
       ],
       [
        105.44,
        27.24
       ],
       [
        107.44,
        27.24
       ],
       [
        107.44,
        25.24
       ],
       [
        105.44,
        25.24
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
         107.44,
         25.24
        ],
        [
         107.44,
         25.291
        ],
        [
         107.433,
         25.289
        ],
        [
         107.409,
         25.347
        ],
        [
         107.421,
         25.393
        ],
        [
         107.376,
         25.412
        ],
        [
         107.359,
         25.394
        ],
        [
         107.318,
         25.402
        ],
        [
         107.308,
         25.433
        ],
        [
         107.337,
         25.461
        ],
        [
         107.264,
         25.543
        ],
        [
         107.232,
         25.557
        ],
        [
         107.229,
         25.605
        ],
        [
         107.205,
         25.608
        ],
        [
         107.186,
         25.579
        ],
        [
         107.064,
         25.559
        ],
        [
         107.067,
         25.509
        ],
        [
         107.016,
         25.496
        ],
        [
         106.997,
         25.443
        ],
        [
         106.964,
         25.438
        ],
        [
         106.988,
         25.359
        ],
        [
         107.013,
         25.353
        ],
        [
         107.014,
         25.276
        ],
        [
         106.982,
         25.24
        ],
        [
         106.959,
         25.24
        ],
        [
         106.933,
         25.251
        ],
        [
         106.917,
         25.24
        ],
        [
         107.44,
         25.24
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.44,
         27.24
        ],
        [
         105.44,
         27.24
        ],
        [
         105.44,
         25.24
        ],
        [
         106.917,
         25.24
        ],
        [
         106.933,
         25.251
        ],
        [
         106.959,
         25.24
        ],
        [
         106.982,
         25.24
        ],
        [
         107.014,
         25.276
        ],
        [
         107.013,
         25.353
        ],
        [
         106.988,
         25.359
        ],
        [
         106.964,
         25.438
        ],
        [
         106.997,
         25.443
        ],
        [
         107.016,
         25.496
        ],
        [
         107.067,
         25.509
        ],
        [
         107.064,
         25.559
        ],
        [
         107.186,
         25.579
        ],
        [
         107.205,
         25.608
        ],
        [
         107.229,
         25.605
        ],
        [
         107.232,
         25.557
        ],
        [
         107.264,
         25.543
        ],
        [
         107.337,
         25.461
        ],
        [
         107.308,
         25.433
        ],
        [
         107.318,
         25.402
        ],
        [
         107.359,
         25.394
        ],
        [
         107.376,
         25.412
        ],
        [
         107.421,
         25.393
        ],
        [
         107.409,
         25.347
        ],
        [
         107.433,
         25.289
        ],
        [
         107.44,
         25.291
        ],
        [
         107.44,
         27.24
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   105.44,
   25.24,
   107.44,
   27.24
  ]
 }
};
