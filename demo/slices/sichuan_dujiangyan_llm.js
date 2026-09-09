// 本文件由 tools/build.py 自动生成（切片 sichuan_dujiangyan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sichuan_dujiangyan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sichuan_dujiangyan_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "province": "sichuan",
  "title": "都江堰",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dujiangyan",
  "dossier_event": "event:ev_sichuan_dujiangyan_llm_01",
  "vocab_pack": "sichuan_dujiangyan_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qin",
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
    "note": "都江堰：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "都江堰：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "都江堰：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "都江堰：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=sichuan_dujiangyan_llm",
  "key": "sichuan_dujiangyan_llm",
  "scene_id": "sichuan_dujiangyan_llm"
 },
 "sources": [
  {
   "id": "sichuan_dujiangyan_src_llm",
   "title": "都江堰史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "秦",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dujiangyan",
   "name": "都江堰",
   "type": "yi",
   "modern": "今中国四川省都江堰市",
   "note": "岷江出山口",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 103.62,
   "lat": 31.0,
   "geo_note": "今四川都江堰市",
   "elev": 848
  },
  {
   "id": "minjiang",
   "name": "岷江",
   "type": "region",
   "modern": "今中国四川省",
   "note": "长江支流",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 103.4,
   "lat": 31.0,
   "geo_note": "今四川岷江（代表点）",
   "elev": 2032
  },
  {
   "id": "chengdu_pingyuan",
   "name": "成都平原",
   "type": "region",
   "modern": "今中国四川省成都平原",
   "note": "天府之国",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 104.07,
   "lat": 30.66,
   "geo_note": "今四川成都",
   "geo_match": "substring",
   "elev": 489
  }
 ],
 "persons": [
  {
   "id": "SIC__p01",
   "name": "李冰",
   "role": "蜀郡守",
   "note": "主持修建都江堰",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SIC__p02",
   "name": "李二郎",
   "role": "李冰之子",
   "note": "协助建堰",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SIC_001",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "主持者",
   "value_text": "李冰父子主持",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "蜀郡守李冰父子主持",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀郡守李冰父子主持",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_002",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "工程组成",
   "value_text": "鱼嘴、飞沙堰、宝瓶口",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "分水鱼嘴、飞沙堰、宝瓶口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "分水鱼嘴、飞沙堰、宝瓶口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_003",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "设计原则",
   "value_text": "乘势利导、无坝引水",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "乘势利导、无坝引水",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "乘势利导、无坝引水",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_004",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "效果",
   "value_text": "成都平原水旱从人",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "chengdu_pingyuan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "水旱从人，不知饥馑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "水旱从人，不知饥馑",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_005",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "历史地位",
   "value_text": "世界最古无坝引水工程",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "世界现存最古无坝引水工程",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世界现存最古无坝引水工程",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_006",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "持续功能",
   "value_text": "至今仍在灌田",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "至今仍在灌田",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "至今仍在灌田",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_007",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "建造年代",
   "value_text": "约前256年",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "秦昭襄王时（约前256）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "秦昭襄王时（约前256）",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_008",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "建造者身份",
   "value_text": "李冰为蜀郡守",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "蜀郡守李冰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀郡守李冰",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_009",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "工程位置",
   "value_text": "岷江出山口",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "minjiang",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "于岷江出山口筑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于岷江出山口筑",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_010",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "工程效益",
   "value_text": "旱涝由人",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "chengdu_pingyuan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "旱涝由人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "旱涝由人",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_011",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "别称",
   "value_text": "成都平原号天府之国",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "chengdu_pingyuan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "号天府之国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "号天府之国",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_012",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "工程类型",
   "value_text": "无坝引水",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "无坝引水",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "无坝引水",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_013",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "建造者争议",
   "value_text": "或谓李冰父子，或谓李冰",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "李冰父子主持",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "史料记载不一",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "李冰父子主持",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_014",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "predicate": "具体建造年份",
   "value_text": "确切年份待考",
   "time": {
    "era_text": "秦昭襄王时",
    "start": "-256"
   },
   "place": "dujiangyan",
   "source": "sichuan_dujiangyan_src_llm",
   "quote": "约前256",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载确切年份",
   "dims": [
    6
   ],
   "lead": {
    "where": "秦代蜀郡守府档案",
    "skills": [
     "古文字学",
     "历史地理"
    ],
    "accept": "发现确切纪年"
   },
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "约前256",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SIC_014"
 ],
 "events": [
  {
   "id": "ev_sichuan_dujiangyan_llm_01",
   "subject": "event:ev_sichuan_dujiangyan_llm_01",
   "year": -256,
   "era": "秦昭襄王时",
   "title": "都江堰修建",
   "kind": "建置",
   "text": "李冰父子主持筑都江堰",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "minjiang",
   "to": "dujiangyan",
   "type": "military",
   "label": "岷江出山口筑堰",
   "_source_idx": 0,
   "_source_name": "都江堰史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "dujiangyan",
   "party": "后世官修",
   "start": -256,
   "end": 2000,
   "basis": "auto: 场景主地点 dujiangyan 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "dujiangyan",
   "name": "都江堰",
   "lon": 103.62,
   "lat": 31.0,
   "region": "engineering"
  }
 ],
 "control_years": [
  -256,
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
        102.4,
        29.66
       ],
       [
        102.4,
        32.0
       ],
       [
        105.07,
        32.0
       ],
       [
        105.07,
        29.66
       ],
       [
        102.4,
        29.66
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
         102.4,
         32.0
        ],
        [
         102.4,
         29.66
        ],
        [
         105.07,
         29.66
        ],
        [
         105.07,
         32.0
        ],
        [
         102.4,
         32.0
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   102.4,
   29.66,
   105.07,
   32.0
  ]
 }
};
