// 本文件由 tools/build.py 自动生成（切片 qinghai_tuyuhun_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qinghai_tuyuhun_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qinghai_tuyuhun_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "xibei",
  "province": "qinghai",
  "title": "隋炀帝西征吐谷浑·青海道（609）",
  "dossier_label": "qinghai_tuyuhun_llm",
  "subtitle": "",
  "primary_place": "qinghai",
  "dossier_event": "event:ev_qinghai_tuyuhun_llm_01",
  "vocab_pack": "qinghai_tuyuhun_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   3,
   4,
   6
  ],
  "epoch": "sui",
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
    "note": "制度+思想→隋炀帝西巡耀兵，置四郡纳青海于郡县体系，吐谷浑远遁"
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
    "note": "技術+制度→大斗拔谷通道、河西—青海连线，兵站驿传支撑远征"
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
    "note": "社會+制度→吐谷浑部众降附、党项内徙，边郡编户与屯田"
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
    "note": "地理+制度→经青海道通西域，复畅丝路南道，扼吐谷浑故地"
   }
  },
  "subject_names": [
   "person:QIN__p01",
   "person:QIN__p02",
   "place:qinghai",
   "place:dadoubagu",
   "place:xihai",
   "place:heyuan",
   "place:shanshan",
   "place:qiemo",
   "place:dangxiang",
   "event:ev_qinghai_tuyuhun_llm_01",
   "event:ev_qinghai_tuyuhun_llm_02",
   "event:ev_qinghai_tuyuhun_llm_03"
  ],
  "page": "county.html?scene=qinghai_tuyuhun_llm",
  "key": "qinghai_tuyuhun_llm",
  "scene_id": "qinghai_tuyuhun_llm"
 },
 "sources": [
  {
   "id": "qinghai_tuyuhun_src_llm",
   "title": "吐谷浑史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "两晋南北朝",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "fu_han",
   "name": "枹罕",
   "type": "city",
   "modern": "今甘肃临夏",
   "note": "吐谷浑西迁途经地。坐标据地名志条目（别名 枹罕→临夏），标 approx。",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 103.204,
   "lat": 35.607,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 枹罕→临夏）（诚实回填 v0.221）。",
   "elev": 2251
  },
  {
   "id": "qinghai_lake",
   "name": "青海湖",
   "type": "region",
   "modern": "今青海省东北部",
   "note": "吐谷浑核心区域",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "he_yuan",
   "name": "河源",
   "type": "region",
   "modern": "今青海省南部",
   "note": "吐谷浑控扼之地",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "QIN__p01",
   "name": "吐谷浑",
   "role": "鲜卑慕容部首领",
   "note": "率部西迁，建立吐谷浑政权",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "QIN__p02",
   "name": "阿豺",
   "role": "吐谷浑首领",
   "note": "有折箭遗训，睦族治国",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "QIN_001",
   "subject": "event:ev_qinghai_tuyuhun_llm_01",
   "predicate": "西迁原因",
   "value_text": "鲜卑慕容部首领吐谷浑率部西迁",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "fu_han",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "西晋末年，鲜卑慕容部首领吐谷浑率部西迁至枹罕",
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
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "西晋末年，鲜卑慕容部首领吐谷浑率部西迁至枹罕",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_002",
   "subject": "event:ev_qinghai_tuyuhun_llm_01",
   "predicate": "迁徙终点",
   "value_text": "辗转至青海湖一带，据有羌地",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "后辗转至青海湖一带，据有羌地",
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
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "后辗转至青海湖一带，据有羌地",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_003",
   "subject": "place:qinghai_lake",
   "predicate": "疆域范围",
   "value_text": "东西三千里，南北千里",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "其地东西三千里、南北千里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "其地东西三千里、南北千里",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_004",
   "subject": "place:qinghai_lake",
   "predicate": "控扼要地",
   "value_text": "控青海、河源，扼丝路南道",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "控青海、河源，扼丝路南道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "控青海、河源，扼丝路南道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_005",
   "subject": "person:QIN__p02",
   "predicate": "治国遗训",
   "value_text": "阿豺有折箭遗训，睦族",
   "time": {
    "era_text": "吐谷浑时期",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "传至阿豺，有「折箭遗训」睦族",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "传至阿豺，有「折箭遗训」睦族",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_006",
   "subject": "event:ev_qinghai_tuyuhun_llm_02",
   "predicate": "灭亡原因",
   "value_text": "吐谷浑为吐蕃所灭",
   "time": {
    "era_text": "663年",
    "start": "663-01-01",
    "end": "663-12-31",
    "gregorian_year": 663
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "终为吐蕃所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "终为吐蕃所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_007",
   "subject": "event:ev_qinghai_tuyuhun_llm_01",
   "predicate": "立国时间",
   "value_text": "立国二百八十年（283—663）",
   "time": {
    "era_text": "283-663",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "吐谷浑立国二百八十年（283—663）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "吐谷浑立国二百八十年（283—663）",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_008",
   "subject": "place:qinghai_lake",
   "predicate": "民族归属",
   "value_text": "鲜卑慕容部所建政权",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "鲜卑慕容部首领吐谷浑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鲜卑慕容部首领吐谷浑",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_009",
   "subject": "place:qinghai_lake",
   "predicate": "地理位置",
   "value_text": "位于青海湖一带",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "辗转至青海湖一带",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "辗转至青海湖一带",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_010",
   "subject": "place:fu_han",
   "predicate": "途经地点",
   "value_text": "西迁途经枹罕",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "fu_han",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "率部西迁至枹罕",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率部西迁至枹罕",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_011",
   "subject": "event:ev_qinghai_tuyuhun_llm_02",
   "predicate": "灭亡时间",
   "value_text": "663年灭亡",
   "time": {
    "era_text": "663年",
    "start": "663-01-01",
    "end": "663-12-31",
    "gregorian_year": 663
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "终为吐蕃所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "终为吐蕃所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_012",
   "subject": "event:ev_qinghai_tuyuhun_llm_01",
   "predicate": "政权性质",
   "value_text": "吐谷浑为地方政权",
   "time": {
    "era_text": "西晋末年",
    "start": "283"
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "号吐谷浑",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学界对政权性质有不同看法",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "号吐谷浑",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "QIN_013",
   "subject": "event:ev_qinghai_tuyuhun_llm_02",
   "predicate": "灭亡细节",
   "value_text": "吐蕃灭吐谷浑的具体过程不详",
   "time": {
    "era_text": "663年",
    "start": "663-01-01",
    "end": "663-12-31",
    "gregorian_year": 663
   },
   "place": "qinghai_lake",
   "source": "qinghai_tuyuhun_src_llm",
   "quote": "终为吐蕃所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体战役",
   "dims": [
    6
   ],
   "lead": {
    "where": "青海湖周边",
    "skills": [
     "考古发掘",
     "文献比对"
    ],
    "accept": "吐蕃灭吐谷浑的具体过程"
   },
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "终为吐蕃所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "QIN_013"
 ],
 "events": [
  {
   "id": "ev_qinghai_tuyuhun_llm_01",
   "subject": "event:ev_qinghai_tuyuhun_llm_01",
   "year": 283,
   "era": "西晋太康四年",
   "title": "吐谷浑西迁",
   "kind": "其他",
   "text": "吐谷浑率部西迁至青海湖一带",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_qinghai_tuyuhun_llm_02",
   "subject": "event:ev_qinghai_tuyuhun_llm_02",
   "year": 663,
   "era": "唐龙朔三年",
   "title": "吐谷浑灭亡",
   "kind": "战事",
   "text": "吐谷浑为吐蕃所灭",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "fu_han",
   "to": "qinghai_lake",
   "type": "military",
   "label": "吐谷浑西迁路线",
   "_source_idx": 0,
   "_source_name": "吐谷浑史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "fu_han",
   "party": "后世官修",
   "start": 283,
   "end": 663,
   "basis": "auto: 场景主地点 fu_han 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "fu_han",
   "name": "枹罕",
   "lon": 103.204,
   "lat": 35.607,
   "region": "xibei"
  }
 ],
 "control_years": [
  283,
  663
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
        102.204,
        34.607
       ],
       [
        102.204,
        36.607
       ],
       [
        104.204,
        36.607
       ],
       [
        104.204,
        34.607
       ],
       [
        102.204,
        34.607
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
         104.204,
         34.607
        ],
        [
         104.204,
         36.607
        ],
        [
         102.72,
         36.607
        ],
        [
         102.715,
         36.599
        ],
        [
         102.762,
         36.569
        ],
        [
         102.734,
         36.562
        ],
        [
         102.753,
         36.526
        ],
        [
         102.793,
         36.498
        ],
        [
         102.772,
         36.474
        ],
        [
         102.83,
         36.366
        ],
        [
         102.832,
         36.366
        ],
        [
         102.839,
         36.346
        ],
        [
         102.836,
         36.345
        ],
        [
         102.846,
         36.332
        ],
        [
         102.897,
         36.332
        ],
        [
         102.923,
         36.298
        ],
        [
         103.025,
         36.257
        ],
        [
         103.021,
         36.233
        ],
        [
         103.067,
         36.217
        ],
        [
         103.049,
         36.199
        ],
        [
         102.987,
         36.193
        ],
        [
         102.966,
         36.152
        ],
        [
         102.949,
         36.151
        ],
        [
         102.941,
         36.105
        ],
        [
         102.882,
         36.083
        ],
        [
         102.933,
         36.048
        ],
        [
         102.968,
         36.044
        ],
        [
         102.952,
         36.022
        ],
        [
         102.972,
         35.996
        ],
        [
         102.942,
         35.927
        ],
        [
         102.955,
         35.859
        ],
        [
         102.945,
         35.83
        ],
        [
         102.914,
         35.845
        ],
        [
         102.817,
         35.85
        ],
        [
         102.787,
         35.863
        ],
        [
         102.739,
         35.821
        ],
        [
         102.715,
         35.816
        ],
        [
         102.686,
         35.772
        ],
        [
         102.708,
         35.705
        ],
        [
         102.744,
         35.658
        ],
        [
         102.764,
         35.653
        ],
        [
         102.763,
         35.612
        ],
        [
         102.809,
         35.56
        ],
        [
         102.747,
         35.545
        ],
        [
         102.729,
         35.523
        ],
        [
         102.783,
         35.528
        ],
        [
         102.743,
         35.495
        ],
        [
         102.695,
         35.528
        ],
        [
         102.571,
         35.548
        ],
        [
         102.532,
         35.58
        ],
        [
         102.503,
         35.585
        ],
        [
         102.499,
         35.545
        ],
        [
         102.438,
         35.455
        ],
        [
         102.448,
         35.437
        ],
        [
         102.408,
         35.409
        ],
        [
         102.315,
         35.434
        ],
        [
         102.294,
         35.424
        ],
        [
         102.288,
         35.366
        ],
        [
         102.318,
         35.343
        ],
        [
         102.312,
         35.314
        ],
        [
         102.281,
         35.303
        ],
        [
         102.312,
         35.283
        ],
        [
         102.37,
         35.264
        ],
        [
         102.366,
         35.236
        ],
        [
         102.404,
         35.179
        ],
        [
         102.347,
         35.164
        ],
        [
         102.31,
         35.129
        ],
        [
         102.296,
         35.072
        ],
        [
         102.253,
         35.049
        ],
        [
         102.218,
         35.057
        ],
        [
         102.211,
         35.035
        ],
        [
         102.204,
         35.035
        ],
        [
         102.204,
         34.607
        ],
        [
         104.204,
         34.607
        ]
       ]
      ],
      [
       [
        [
         102.832,
         36.366
        ],
        [
         102.83,
         36.366
        ],
        [
         102.836,
         36.345
        ],
        [
         102.839,
         36.346
        ],
        [
         102.832,
         36.366
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
         102.83,
         36.366
        ],
        [
         102.772,
         36.474
        ],
        [
         102.793,
         36.498
        ],
        [
         102.753,
         36.526
        ],
        [
         102.734,
         36.562
        ],
        [
         102.762,
         36.569
        ],
        [
         102.715,
         36.599
        ],
        [
         102.72,
         36.607
        ],
        [
         102.204,
         36.607
        ],
        [
         102.204,
         34.607
        ],
        [
         102.204,
         34.607
        ],
        [
         102.204,
         35.035
        ],
        [
         102.211,
         35.035
        ],
        [
         102.218,
         35.057
        ],
        [
         102.253,
         35.049
        ],
        [
         102.296,
         35.072
        ],
        [
         102.31,
         35.129
        ],
        [
         102.347,
         35.164
        ],
        [
         102.404,
         35.179
        ],
        [
         102.366,
         35.236
        ],
        [
         102.37,
         35.264
        ],
        [
         102.312,
         35.283
        ],
        [
         102.281,
         35.303
        ],
        [
         102.312,
         35.314
        ],
        [
         102.318,
         35.343
        ],
        [
         102.288,
         35.366
        ],
        [
         102.294,
         35.424
        ],
        [
         102.315,
         35.434
        ],
        [
         102.408,
         35.409
        ],
        [
         102.448,
         35.437
        ],
        [
         102.438,
         35.455
        ],
        [
         102.499,
         35.545
        ],
        [
         102.503,
         35.585
        ],
        [
         102.532,
         35.58
        ],
        [
         102.571,
         35.548
        ],
        [
         102.695,
         35.528
        ],
        [
         102.743,
         35.495
        ],
        [
         102.783,
         35.528
        ],
        [
         102.729,
         35.523
        ],
        [
         102.747,
         35.545
        ],
        [
         102.809,
         35.56
        ],
        [
         102.763,
         35.612
        ],
        [
         102.764,
         35.653
        ],
        [
         102.744,
         35.658
        ],
        [
         102.708,
         35.705
        ],
        [
         102.686,
         35.772
        ],
        [
         102.715,
         35.816
        ],
        [
         102.739,
         35.821
        ],
        [
         102.787,
         35.863
        ],
        [
         102.817,
         35.85
        ],
        [
         102.914,
         35.845
        ],
        [
         102.945,
         35.83
        ],
        [
         102.955,
         35.859
        ],
        [
         102.942,
         35.927
        ],
        [
         102.972,
         35.996
        ],
        [
         102.952,
         36.022
        ],
        [
         102.968,
         36.044
        ],
        [
         102.933,
         36.048
        ],
        [
         102.882,
         36.083
        ],
        [
         102.941,
         36.105
        ],
        [
         102.949,
         36.151
        ],
        [
         102.966,
         36.152
        ],
        [
         102.987,
         36.193
        ],
        [
         103.049,
         36.199
        ],
        [
         103.067,
         36.217
        ],
        [
         103.021,
         36.233
        ],
        [
         103.025,
         36.257
        ],
        [
         102.923,
         36.298
        ],
        [
         102.897,
         36.332
        ],
        [
         102.846,
         36.332
        ],
        [
         102.836,
         36.345
        ],
        [
         102.83,
         36.366
        ]
       ]
      ]
     ]
    },
    "n": "青海省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        102.204,
        35.848
       ],
       [
        102.356,
        35.873
       ],
       [
        102.61,
        35.86
       ],
       [
        102.948,
        35.806
       ],
       [
        103.177,
        35.812
       ],
       [
        103.299,
        35.878
       ],
       [
        103.317,
        35.931
       ],
       [
        103.232,
        35.97
       ],
       [
        103.256,
        36.04
       ],
       [
        103.388,
        36.139
       ],
       [
        103.56,
        36.158
       ],
       [
        103.771,
        36.096
       ],
       [
        103.916,
        36.068
       ],
       [
        103.995,
        36.075
       ],
       [
        104.031,
        36.104
       ],
       [
        104.023,
        36.156
       ],
       [
        104.072,
        36.229
       ],
       [
        104.179,
        36.322
       ],
       [
        104.204,
        36.337
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   102.204,
   34.607,
   104.204,
   36.607
  ]
 }
};
