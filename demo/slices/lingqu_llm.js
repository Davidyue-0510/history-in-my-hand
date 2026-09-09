// 本文件由 tools/build.py 自动生成（切片 lingqu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lingqu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lingqu_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "province": "guangxi",
  "title": "灵渠与秦始皇南征岭南",
  "dossier_label": "灵渠与秦始皇南征岭南",
  "subtitle": "灵渠与秦始皇南征岭南",
  "primary_place": "lingqu",
  "dossier_event": "event:ev_lingqu_llm_01",
  "vocab_pack": "inline:lingqu_llm",
  "terrain_grid": "china_coarse",
  "lead": "灵渠与秦始皇南征岭南——技术维（dim 2）最薄补强，qin/guangxi 跨时代科技切片。",
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
    "note": "灵渠与秦始皇南征岭南：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "灵渠与秦始皇南征岭南：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "灵渠与秦始皇南征岭南：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "灵渠与秦始皇南征岭南：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=lingqu_llm",
  "key": "lingqu_llm",
  "scene_id": "lingqu_llm"
 },
 "sources": [
  {
   "id": "shiji_qin_b",
   "title": "《史记·秦始皇本纪》",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "lingnan",
   "name": "岭南",
   "type": "region",
   "modern": "今中国广东广西",
   "note": "五岭以南",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 110.0,
   "lat": 23.0,
   "geo_note": "今广东广西（岭南）代表点",
   "elev": 76
  },
  {
   "id": "lingqu",
   "name": "灵渠",
   "type": "canal",
   "modern": "今中国广西兴安",
   "note": "秦凿运河",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 110.68,
   "lat": 25.63,
   "geo_note": "今广西兴安（秦灵渠）",
   "elev": 221
  },
  {
   "id": "xiangjiang",
   "name": "湘江",
   "type": "river",
   "modern": "今中国湖南",
   "note": "长江支流",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.0,
   "lat": 27.5,
   "geo_note": "今湖南湘江（中上游代表点）",
   "elev": 222
  },
  {
   "id": "lijiang",
   "name": "漓江",
   "type": "river",
   "modern": "今中国广西",
   "note": "珠江水系",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 110.5,
   "lat": 25.2,
   "geo_note": "今广西漓江",
   "elev": 142
  }
 ],
 "persons": [
  {
   "id": "LIN__p01",
   "name": "秦始皇",
   "role": "秦帝",
   "note": "南征岭南决策者",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "LIN__p02",
   "name": "监禄",
   "role": "秦监御史",
   "note": "主持凿渠",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "LIN_001",
   "subject": "event:ev_lingqu_llm_01",
   "predicate": "兵力来源",
   "value_text": "发逋亡人、赘婿、贾人",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "发诸尝逋亡人、赘婿、贾人为兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "发诸尝逋亡人、赘婿、贾人为兵",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_002",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "主持者",
   "value_text": "监禄主持凿渠",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "使监禄凿渠运",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "使监禄凿渠运",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_003",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "目的",
   "value_text": "通粮道以济军",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "以通粮道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以通粮道",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_004",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "功能",
   "value_text": "渠成水可通舟",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "渠成而水可通舟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "渠成而水可通舟",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_005",
   "subject": "event:ev_lingqu_llm_03",
   "predicate": "结果",
   "value_text": "湘漓通，岭南定",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "湘漓之通，岭南以定",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "湘漓之通，岭南以定",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_006",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "技术",
   "value_text": "利用湘漓近距",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "因利涉之便",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "因利涉之便",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_007",
   "subject": "event:ev_lingqu_llm_01",
   "predicate": "兵员身份",
   "value_text": "谪戍之民",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "以谪戍",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以谪戍",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_008",
   "subject": "event:ev_lingqu_llm_03",
   "predicate": "战略意义",
   "value_text": "灵渠为平定关键",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "岭南以定",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岭南以定",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_009",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "工程规模",
   "value_text": "具体长度未载",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "凿渠运",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "lead": {
    "where": "灵渠遗址",
    "skills": [
     "考古测量"
    ],
    "accept": "灵渠长度数据"
   },
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "凿渠运",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_010",
   "subject": "event:ev_lingqu_llm_01",
   "predicate": "兵力数量",
   "value_text": "未载具体人数",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "发诸尝逋亡人",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "秦简",
    "skills": [
     "文献考据"
    ],
    "accept": "戍卒数量"
   },
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "发诸尝逋亡人",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_011",
   "subject": "event:ev_lingqu_llm_03",
   "predicate": "军事行动",
   "value_text": "未述具体战事",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "岭南以定",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "岭南地区",
    "skills": [
     "考古发掘"
    ],
    "accept": "秦军遗迹"
   },
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岭南以定",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_012",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "建造时间",
   "value_text": "仅记二十六年",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "二十六年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "二十六年",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_013",
   "subject": "event:ev_lingqu_llm_02",
   "predicate": "地理连接",
   "value_text": "湘漓二水通",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingqu",
   "source": "shiji_qin_b",
   "quote": "湘漓之通",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "湘漓之通",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LIN_014",
   "subject": "event:ev_lingqu_llm_03",
   "predicate": "影响",
   "value_text": "促进岭南开发",
   "time": {
    "era_text": "二十六年",
    "start": "-214"
   },
   "place": "lingnan",
   "source": "shiji_qin_b",
   "quote": "岭南以定",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "theater",
   "note": "后世学者推论",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "岭南以定",
   "source_text": "二十六年，...秦因利涉之便，发诸尝逋亡人、赘婿、贾人为兵，以谪戍。乃使监禄凿渠运以通粮道。渠成而水可通舟，湘漓之通，岭南以定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "LIN_009",
  "LIN_010",
  "LIN_011"
 ],
 "events": [
  {
   "id": "ev_lingqu_llm_01",
   "subject": "event:ev_lingqu_llm_01",
   "year": -214,
   "era": "秦始皇二十六年",
   "title": "发兵戍岭南",
   "kind": "行政",
   "text": "发逋亡人、赘婿、贾人为兵戍岭南",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_lingqu_llm_02",
   "subject": "event:ev_lingqu_llm_02",
   "year": -214,
   "era": "秦始皇二十六年",
   "title": "凿灵渠",
   "kind": "建置",
   "text": "监禄凿渠通粮道",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_lingqu_llm_03",
   "subject": "event:ev_lingqu_llm_03",
   "year": -214,
   "era": "秦始皇二十六年",
   "title": "岭南平定",
   "kind": "战事",
   "text": "渠成舟通，岭南以定",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "xiangjiang",
   "to": "lijiang",
   "type": "military",
   "label": "灵渠连接湘漓",
   "_source_idx": 0,
   "_source_name": "《史记·秦始皇本纪》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "lingnan",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "lingqu",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "lingnan",
   "name": "岭南",
   "lon": 110.0,
   "lat": 23.0,
   "region": "engineering"
  },
  {
   "place_id": "lingqu",
   "name": "灵渠",
   "lon": 110.68,
   "lat": 25.63,
   "region": "engineering"
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
        112.992,
        22.0
       ],
       [
        113.0,
        22.058
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
        109.0,
        22.0
       ],
       [
        109.0,
        28.5
       ],
       [
        113.0,
        28.5
       ],
       [
        113.0,
        22.058
       ],
       [
        112.992,
        22.0
       ],
       [
        109.0,
        22.0
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
         112.024,
         24.74
        ],
        [
         112.034,
         24.771
        ],
        [
         112.124,
         24.841
        ],
        [
         112.149,
         24.837
        ],
        [
         112.167,
         24.86
        ],
        [
         112.175,
         24.928
        ],
        [
         112.12,
         24.963
        ],
        [
         112.122,
         24.99
        ],
        [
         112.156,
         25.026
        ],
        [
         112.152,
         25.056
        ],
        [
         112.177,
         25.107
        ],
        [
         112.187,
         25.182
        ],
        [
         112.247,
         25.185
        ],
        [
         112.256,
         25.159
        ],
        [
         112.303,
         25.157
        ],
        [
         112.316,
         25.175
        ],
        [
         112.365,
         25.192
        ],
        [
         112.415,
         25.142
        ],
        [
         112.443,
         25.186
        ],
        [
         112.458,
         25.152
        ],
        [
         112.563,
         25.125
        ],
        [
         112.628,
         25.141
        ],
        [
         112.66,
         25.133
        ],
        [
         112.712,
         25.083
        ],
        [
         112.715,
         25.026
        ],
        [
         112.742,
         24.999
        ],
        [
         112.743,
         24.96
        ],
        [
         112.778,
         24.948
        ],
        [
         112.781,
         24.897
        ],
        [
         112.874,
         24.897
        ],
        [
         112.905,
         24.922
        ],
        [
         112.942,
         24.916
        ],
        [
         112.995,
         24.927
        ],
        [
         113.0,
         24.945
        ],
        [
         113.0,
         24.996
        ],
        [
         112.979,
         25.034
        ],
        [
         113.0,
         25.08
        ],
        [
         113.0,
         25.096
        ],
        [
         112.968,
         25.142
        ],
        [
         112.974,
         25.168
        ],
        [
         113.0,
         25.181
        ],
        [
         113.0,
         25.239
        ],
        [
         112.993,
         25.247
        ],
        [
         112.958,
         25.255
        ],
        [
         112.898,
         25.238
        ],
        [
         112.867,
         25.25
        ],
        [
         112.855,
         25.338
        ],
        [
         112.891,
         25.34
        ],
        [
         112.924,
         25.297
        ],
        [
         112.935,
         25.326
        ],
        [
         112.97,
         25.35
        ],
        [
         113.0,
         25.352
        ],
        [
         113.0,
         28.5
        ],
        [
         109.274,
         28.5
        ],
        [
         109.274,
         28.495
        ],
        [
         109.261,
         28.465
        ],
        [
         109.264,
         28.393
        ],
        [
         109.289,
         28.374
        ],
        [
         109.269,
         28.338
        ],
        [
         109.275,
         28.313
        ],
        [
         109.318,
         28.278
        ],
        [
         109.335,
         28.294
        ],
        [
         109.388,
         28.268
        ],
        [
         109.368,
         28.255
        ],
        [
         109.34,
         28.19
        ],
        [
         109.338,
         28.142
        ],
        [
         109.314,
         28.104
        ],
        [
         109.298,
         28.036
        ],
        [
         109.336,
         28.063
        ],
        [
         109.379,
         28.035
        ],
        [
         109.362,
         28.008
        ],
        [
         109.32,
         27.989
        ],
        [
         109.302,
         27.956
        ],
        [
         109.322,
         27.868
        ],
        [
         109.347,
         27.838
        ],
        [
         109.333,
         27.783
        ],
        [
         109.378,
         27.737
        ],
        [
         109.367,
         27.722
        ],
        [
         109.414,
         27.725
        ],
        [
         109.471,
         27.68
        ],
        [
         109.457,
         27.674
        ],
        [
         109.47,
         27.629
        ],
        [
         109.451,
         27.586
        ],
        [
         109.462,
         27.568
        ],
        [
         109.405,
         27.551
        ],
        [
         109.303,
         27.476
        ],
        [
         109.3,
         27.424
        ],
        [
         109.245,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.167,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.142,
         27.418
        ],
        [
         109.104,
         27.337
        ],
        [
         109.045,
         27.331
        ],
        [
         109.054,
         27.294
        ],
        [
         109.0,
         27.274
        ],
        [
         109.0,
         27.076
        ],
        [
         109.008,
         27.08
        ],
        [
         109.033,
         27.104
        ],
        [
         109.129,
         27.123
        ],
        [
         109.101,
         27.069
        ],
        [
         109.166,
         27.067
        ],
        [
         109.217,
         27.115
        ],
        [
         109.239,
         27.149
        ],
        [
         109.264,
         27.132
        ],
        [
         109.335,
         27.139
        ],
        [
         109.359,
         27.153
        ],
        [
         109.415,
         27.154
        ],
        [
         109.441,
         27.118
        ],
        [
         109.473,
         27.135
        ],
        [
         109.455,
         27.069
        ],
        [
         109.487,
         27.054
        ],
        [
         109.498,
         27.08
        ],
        [
         109.52,
         27.059
        ],
        [
         109.555,
         26.947
        ],
        [
         109.436,
         26.892
        ],
        [
         109.453,
         26.862
        ],
        [
         109.487,
         26.896
        ],
        [
         109.51,
         26.878
        ],
        [
         109.513,
         26.84
        ],
        [
         109.497,
         26.815
        ],
        [
         109.522,
         26.749
        ],
        [
         109.529,
         26.744
        ],
        [
         109.555,
         26.735
        ],
        [
         109.597,
         26.756
        ],
        [
         109.568,
         26.726
        ],
        [
         109.529,
         26.744
        ],
        [
         109.522,
         26.749
        ],
        [
         109.487,
         26.76
        ],
        [
         109.448,
         26.76
        ],
        [
         109.407,
         26.72
        ],
        [
         109.355,
         26.693
        ],
        [
         109.284,
         26.698
        ],
        [
         109.306,
         26.661
        ],
        [
         109.334,
         26.646
        ],
        [
         109.355,
         26.659
        ],
        [
         109.391,
         26.599
        ],
        [
         109.407,
         26.533
        ],
        [
         109.381,
         26.519
        ],
        [
         109.386,
         26.493
        ],
        [
         109.362,
         26.472
        ],
        [
         109.381,
         26.454
        ],
        [
         109.32,
         26.418
        ],
        [
         109.296,
         26.35
        ],
        [
         109.271,
         26.328
        ],
        [
         109.286,
         26.296
        ],
        [
         109.325,
         26.29
        ],
        [
         109.351,
         26.264
        ],
        [
         109.37,
         26.277
        ],
        [
         109.442,
         26.29
        ],
        [
         109.467,
         26.314
        ],
        [
         109.439,
         26.239
        ],
        [
         109.476,
         26.148
        ],
        [
         109.514,
         26.128
        ],
        [
         109.503,
         26.096
        ],
        [
         109.45,
         26.102
        ],
        [
         109.453,
         26.056
        ],
        [
         109.482,
         26.03
        ],
        [
         109.513,
         25.998
        ],
        [
         109.56,
         26.021
        ],
        [
         109.588,
         26.02
        ],
        [
         109.635,
         26.048
        ],
        [
         109.649,
         26.017
        ],
        [
         109.73,
         25.99
        ],
        [
         109.711,
         25.954
        ],
        [
         109.694,
         25.959
        ],
        [
         109.68,
         25.922
        ],
        [
         109.685,
         25.88
        ],
        [
         109.768,
         25.89
        ],
        [
         109.779,
         25.866
        ],
        [
         109.811,
         25.878
        ],
        [
         109.826,
         25.911
        ],
        [
         109.806,
         25.974
        ],
        [
         109.782,
         25.997
        ],
        [
         109.814,
         26.041
        ],
        [
         109.864,
         26.028
        ],
        [
         109.899,
         26.095
        ],
        [
         109.904,
         26.136
        ],
        [
         109.97,
         26.195
        ],
        [
         110.03,
         26.166
        ],
        [
         110.099,
         26.169
        ],
        [
         110.101,
         26.132
        ],
        [
         110.065,
         26.05
        ],
        [
         110.101,
         26.02
        ],
        [
         110.169,
         26.029
        ],
        [
         110.182,
         26.06
        ],
        [
         110.25,
         26.011
        ],
        [
         110.257,
         25.961
        ],
        [
         110.326,
         25.975
        ],
        [
         110.373,
         26.089
        ],
        [
         110.438,
         26.154
        ],
        [
         110.478,
         26.18
        ],
        [
         110.495,
         26.166
        ],
        [
         110.547,
         26.233
        ],
        [
         110.553,
         26.283
        ],
        [
         110.584,
         26.297
        ],
        [
         110.612,
         26.334
        ],
        [
         110.643,
         26.309
        ],
        [
         110.674,
         26.317
        ],
        [
         110.721,
         26.294
        ],
        [
         110.742,
         26.314
        ],
        [
         110.735,
         26.271
        ],
        [
         110.759,
         26.248
        ],
        [
         110.836,
         26.256
        ],
        [
         110.94,
         26.287
        ],
        [
         110.926,
         26.32
        ],
        [
         110.944,
         26.327
        ],
        [
         110.945,
         26.373
        ],
        [
         110.974,
         26.386
        ],
        [
         111.009,
         26.359
        ],
        [
         111.008,
         26.337
        ],
        [
         111.091,
         26.308
        ],
        [
         111.209,
         26.304
        ],
        [
         111.205,
         26.276
        ],
        [
         111.228,
         26.261
        ],
        [
         111.278,
         26.272
        ],
        [
         111.293,
         26.222
        ],
        [
         111.272,
         26.217
        ],
        [
         111.275,
         26.183
        ],
        [
         111.258,
         26.152
        ],
        [
         111.266,
         26.096
        ],
        [
         111.245,
         26.078
        ],
        [
         111.267,
         26.059
        ],
        [
         111.235,
         26.048
        ],
        [
         111.19,
         25.953
        ],
        [
         111.23,
         25.916
        ],
        [
         111.251,
         25.865
        ],
        [
         111.292,
         25.854
        ],
        [
         111.297,
         25.874
        ],
        [
         111.346,
         25.907
        ],
        [
         111.376,
         25.906
        ],
        [
         111.383,
         25.882
        ],
        [
         111.46,
         25.885
        ],
        [
         111.486,
         25.859
        ],
        [
         111.433,
         25.846
        ],
        [
         111.442,
         25.772
        ],
        [
         111.4,
         25.744
        ],
        [
         111.309,
         25.72
        ],
        [
         111.31,
         25.645
        ],
        [
         111.343,
         25.603
        ],
        [
         111.325,
         25.564
        ],
        [
         111.328,
         25.522
        ],
        [
         111.279,
         25.423
        ],
        [
         111.211,
         25.363
        ],
        [
         111.185,
         25.367
        ],
        [
         111.139,
         25.304
        ],
        [
         111.104,
         25.285
        ],
        [
         111.113,
         25.217
        ],
        [
         110.999,
         25.161
        ],
        [
         110.984,
         25.102
        ],
        [
         110.951,
         25.044
        ],
        [
         110.969,
         24.975
        ],
        [
         111.009,
         24.921
        ],
        [
         111.101,
         24.946
        ],
        [
         111.102,
         25.035
        ],
        [
         111.14,
         25.042
        ],
        [
         111.201,
         25.075
        ],
        [
         111.222,
         25.107
        ],
        [
         111.275,
         25.151
        ],
        [
         111.322,
         25.105
        ],
        [
         111.368,
         25.109
        ],
        [
         111.375,
         25.128
        ],
        [
         111.436,
         25.094
        ],
        [
         111.416,
         25.048
        ],
        [
         111.468,
         25.022
        ],
        [
         111.46,
         24.993
        ],
        [
         111.433,
         24.98
        ],
        [
         111.435,
         24.952
        ],
        [
         111.47,
         24.929
        ],
        [
         111.447,
         24.893
        ],
        [
         111.449,
         24.857
        ],
        [
         111.479,
         24.797
        ],
        [
         111.461,
         24.729
        ],
        [
         111.431,
         24.688
        ],
        [
         111.452,
         24.666
        ],
        [
         111.499,
         24.668
        ],
        [
         111.527,
         24.638
        ],
        [
         111.57,
         24.645
        ],
        [
         111.589,
         24.691
        ],
        [
         111.642,
         24.685
        ],
        [
         111.638,
         24.715
        ],
        [
         111.667,
         24.761
        ],
        [
         111.708,
         24.789
        ],
        [
         111.784,
         24.786
        ],
        [
         111.814,
         24.77
        ],
        [
         111.869,
         24.772
        ],
        [
         111.875,
         24.757
        ],
        [
         111.93,
         24.756
        ],
        [
         111.951,
         24.77
        ],
        [
         112.024,
         24.74
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.522,
         26.749
        ],
        [
         109.522,
         26.749
        ],
        [
         109.529,
         26.744
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.0,
         22.0
        ],
        [
         113.0,
         25.352
        ],
        [
         112.97,
         25.35
        ],
        [
         112.935,
         25.326
        ],
        [
         112.924,
         25.297
        ],
        [
         112.891,
         25.34
        ],
        [
         112.855,
         25.338
        ],
        [
         112.867,
         25.25
        ],
        [
         112.898,
         25.238
        ],
        [
         112.958,
         25.255
        ],
        [
         112.993,
         25.247
        ],
        [
         113.0,
         25.239
        ],
        [
         113.0,
         25.181
        ],
        [
         112.974,
         25.168
        ],
        [
         112.968,
         25.142
        ],
        [
         113.0,
         25.096
        ],
        [
         113.0,
         25.08
        ],
        [
         112.979,
         25.034
        ],
        [
         113.0,
         24.996
        ],
        [
         113.0,
         24.945
        ],
        [
         112.995,
         24.927
        ],
        [
         112.942,
         24.916
        ],
        [
         112.905,
         24.922
        ],
        [
         112.874,
         24.897
        ],
        [
         112.781,
         24.897
        ],
        [
         112.778,
         24.948
        ],
        [
         112.743,
         24.96
        ],
        [
         112.742,
         24.999
        ],
        [
         112.715,
         25.026
        ],
        [
         112.712,
         25.083
        ],
        [
         112.66,
         25.133
        ],
        [
         112.628,
         25.141
        ],
        [
         112.563,
         25.125
        ],
        [
         112.458,
         25.152
        ],
        [
         112.443,
         25.186
        ],
        [
         112.415,
         25.142
        ],
        [
         112.365,
         25.192
        ],
        [
         112.316,
         25.175
        ],
        [
         112.303,
         25.157
        ],
        [
         112.256,
         25.159
        ],
        [
         112.247,
         25.185
        ],
        [
         112.187,
         25.182
        ],
        [
         112.177,
         25.107
        ],
        [
         112.152,
         25.056
        ],
        [
         112.156,
         25.026
        ],
        [
         112.122,
         24.99
        ],
        [
         112.12,
         24.963
        ],
        [
         112.175,
         24.928
        ],
        [
         112.167,
         24.86
        ],
        [
         112.149,
         24.837
        ],
        [
         112.124,
         24.841
        ],
        [
         112.034,
         24.771
        ],
        [
         112.024,
         24.74
        ],
        [
         111.962,
         24.721
        ],
        [
         111.939,
         24.686
        ],
        [
         111.954,
         24.647
        ],
        [
         111.928,
         24.629
        ],
        [
         111.937,
         24.596
        ],
        [
         111.972,
         24.579
        ],
        [
         112.007,
         24.535
        ],
        [
         112.01,
         24.503
        ],
        [
         111.985,
         24.468
        ],
        [
         112.025,
         24.439
        ],
        [
         112.058,
         24.387
        ],
        [
         112.06,
         24.34
        ],
        [
         112.026,
         24.295
        ],
        [
         111.991,
         24.28
        ],
        [
         111.986,
         24.257
        ],
        [
         111.959,
         24.264
        ],
        [
         111.913,
         24.222
        ],
        [
         111.877,
         24.227
        ],
        [
         111.871,
         24.176
        ],
        [
         111.886,
         24.164
        ],
        [
         111.878,
         24.11
        ],
        [
         111.922,
         24.012
        ],
        [
         111.941,
         23.988
        ],
        [
         111.912,
         23.944
        ],
        [
         111.854,
         23.948
        ],
        [
         111.846,
         23.904
        ],
        [
         111.813,
         23.887
        ],
        [
         111.825,
         23.833
        ],
        [
         111.811,
         23.807
        ],
        [
         111.723,
         23.823
        ],
        [
         111.683,
         23.823
        ],
        [
         111.683,
         23.823
        ],
        [
         111.655,
         23.833
        ],
        [
         111.628,
         23.789
        ],
        [
         111.622,
         23.726
        ],
        [
         111.667,
         23.719
        ],
        [
         111.615,
         23.659
        ],
        [
         111.615,
         23.639
        ],
        [
         111.556,
         23.641
        ],
        [
         111.487,
         23.627
        ],
        [
         111.48,
         23.533
        ],
        [
         111.429,
         23.466
        ],
        [
         111.4,
         23.469
        ],
        [
         111.383,
         23.399
        ],
        [
         111.389,
         23.376
        ],
        [
         111.364,
         23.341
        ],
        [
         111.376,
         23.304
        ],
        [
         111.353,
         23.285
        ],
        [
         111.365,
         23.24
        ],
        [
         111.389,
         23.21
        ],
        [
         111.384,
         23.167
        ],
        [
         111.366,
         23.145
        ],
        [
         111.378,
         23.082
        ],
        [
         111.402,
         23.066
        ],
        [
         111.433,
         23.073
        ],
        [
         111.434,
         23.036
        ],
        [
         111.389,
         23.006
        ],
        [
         111.404,
         22.991
        ],
        [
         111.363,
         22.968
        ],
        [
         111.375,
         22.938
        ],
        [
         111.359,
         22.889
        ],
        [
         111.218,
         22.748
        ],
        [
         111.186,
         22.736
        ],
        [
         111.118,
         22.745
        ],
        [
         111.058,
         22.73
        ],
        [
         111.089,
         22.696
        ],
        [
         111.056,
         22.649
        ],
        [
         110.997,
         22.632
        ],
        [
         110.959,
         22.637
        ],
        [
         110.95,
         22.611
        ],
        [
         110.896,
         22.613
        ],
        [
         110.898,
         22.592
        ],
        [
         110.812,
         22.576
        ],
        [
         110.778,
         22.585
        ],
        [
         110.749,
         22.557
        ],
        [
         110.763,
         22.518
        ],
        [
         110.74,
         22.499
        ],
        [
         110.741,
         22.464
        ],
        [
         110.688,
         22.478
        ],
        [
         110.712,
         22.441
        ],
        [
         110.711,
         22.37
        ],
        [
         110.741,
         22.362
        ],
        [
         110.749,
         22.33
        ],
        [
         110.787,
         22.283
        ],
        [
         110.759,
         22.275
        ],
        [
         110.725,
         22.296
        ],
        [
         110.688,
         22.25
        ],
        [
         110.647,
         22.221
        ],
        [
         110.679,
         22.173
        ],
        [
         110.629,
         22.149
        ],
        [
         110.599,
         22.163
        ],
        [
         110.603,
         22.183
        ],
        [
         110.558,
         22.196
        ],
        [
         110.506,
         22.143
        ],
        [
         110.457,
         22.19
        ],
        [
         110.414,
         22.208
        ],
        [
         110.378,
         22.165
        ],
        [
         110.348,
         22.196
        ],
        [
         110.326,
         22.152
        ],
        [
         110.364,
         22.126
        ],
        [
         110.352,
         22.098
        ],
        [
         110.36,
         22.016
        ],
        [
         110.357,
         22.0
        ],
        [
         113.0,
         22.0
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.482,
         26.03
        ],
        [
         109.473,
         26.007
        ],
        [
         109.409,
         25.967
        ],
        [
         109.435,
         25.933
        ],
        [
         109.397,
         25.9
        ],
        [
         109.359,
         25.836
        ],
        [
         109.34,
         25.834
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.731
        ],
        [
         109.296,
         25.714
        ],
        [
         109.207,
         25.74
        ],
        [
         109.207,
         25.788
        ],
        [
         109.148,
         25.742
        ],
        [
         109.132,
         25.763
        ],
        [
         109.144,
         25.795
        ],
        [
         109.095,
         25.805
        ],
        [
         109.078,
         25.777
        ],
        [
         109.048,
         25.791
        ],
        [
         109.0,
         25.781
        ],
        [
         109.0,
         25.728
        ],
        [
         109.008,
         25.735
        ],
        [
         109.043,
         25.739
        ],
        [
         109.079,
         25.721
        ],
        [
         109.075,
         25.694
        ],
        [
         109.031,
         25.63
        ],
        [
         109.052,
         25.567
        ],
        [
         109.088,
         25.551
        ],
        [
         109.025,
         25.512
        ],
        [
         109.0,
         25.527
        ],
        [
         109.0,
         22.0
        ],
        [
         110.357,
         22.0
        ],
        [
         110.36,
         22.016
        ],
        [
         110.352,
         22.098
        ],
        [
         110.364,
         22.126
        ],
        [
         110.326,
         22.152
        ],
        [
         110.348,
         22.196
        ],
        [
         110.378,
         22.165
        ],
        [
         110.414,
         22.208
        ],
        [
         110.457,
         22.19
        ],
        [
         110.506,
         22.143
        ],
        [
         110.558,
         22.196
        ],
        [
         110.603,
         22.183
        ],
        [
         110.599,
         22.163
        ],
        [
         110.629,
         22.149
        ],
        [
         110.679,
         22.173
        ],
        [
         110.647,
         22.221
        ],
        [
         110.688,
         22.25
        ],
        [
         110.725,
         22.296
        ],
        [
         110.759,
         22.275
        ],
        [
         110.787,
         22.283
        ],
        [
         110.749,
         22.33
        ],
        [
         110.741,
         22.362
        ],
        [
         110.711,
         22.37
        ],
        [
         110.712,
         22.441
        ],
        [
         110.688,
         22.478
        ],
        [
         110.741,
         22.464
        ],
        [
         110.74,
         22.499
        ],
        [
         110.763,
         22.518
        ],
        [
         110.749,
         22.557
        ],
        [
         110.778,
         22.585
        ],
        [
         110.812,
         22.576
        ],
        [
         110.898,
         22.592
        ],
        [
         110.896,
         22.613
        ],
        [
         110.95,
         22.611
        ],
        [
         110.959,
         22.637
        ],
        [
         110.997,
         22.632
        ],
        [
         111.056,
         22.649
        ],
        [
         111.089,
         22.696
        ],
        [
         111.058,
         22.73
        ],
        [
         111.118,
         22.745
        ],
        [
         111.186,
         22.736
        ],
        [
         111.218,
         22.748
        ],
        [
         111.359,
         22.889
        ],
        [
         111.375,
         22.938
        ],
        [
         111.363,
         22.968
        ],
        [
         111.404,
         22.991
        ],
        [
         111.389,
         23.006
        ],
        [
         111.434,
         23.036
        ],
        [
         111.433,
         23.073
        ],
        [
         111.402,
         23.066
        ],
        [
         111.378,
         23.082
        ],
        [
         111.366,
         23.145
        ],
        [
         111.384,
         23.167
        ],
        [
         111.389,
         23.21
        ],
        [
         111.365,
         23.24
        ],
        [
         111.353,
         23.285
        ],
        [
         111.376,
         23.304
        ],
        [
         111.364,
         23.341
        ],
        [
         111.389,
         23.376
        ],
        [
         111.383,
         23.399
        ],
        [
         111.4,
         23.469
        ],
        [
         111.429,
         23.466
        ],
        [
         111.48,
         23.533
        ],
        [
         111.487,
         23.627
        ],
        [
         111.556,
         23.641
        ],
        [
         111.615,
         23.639
        ],
        [
         111.615,
         23.659
        ],
        [
         111.667,
         23.719
        ],
        [
         111.622,
         23.726
        ],
        [
         111.628,
         23.789
        ],
        [
         111.655,
         23.833
        ],
        [
         111.683,
         23.823
        ],
        [
         111.683,
         23.823
        ],
        [
         111.723,
         23.823
        ],
        [
         111.811,
         23.807
        ],
        [
         111.825,
         23.833
        ],
        [
         111.813,
         23.887
        ],
        [
         111.846,
         23.904
        ],
        [
         111.854,
         23.948
        ],
        [
         111.912,
         23.944
        ],
        [
         111.941,
         23.988
        ],
        [
         111.922,
         24.012
        ],
        [
         111.878,
         24.11
        ],
        [
         111.886,
         24.164
        ],
        [
         111.871,
         24.176
        ],
        [
         111.877,
         24.227
        ],
        [
         111.913,
         24.222
        ],
        [
         111.959,
         24.264
        ],
        [
         111.986,
         24.257
        ],
        [
         111.991,
         24.28
        ],
        [
         112.026,
         24.295
        ],
        [
         112.06,
         24.34
        ],
        [
         112.058,
         24.387
        ],
        [
         112.025,
         24.439
        ],
        [
         111.985,
         24.468
        ],
        [
         112.01,
         24.503
        ],
        [
         112.007,
         24.535
        ],
        [
         111.972,
         24.579
        ],
        [
         111.937,
         24.596
        ],
        [
         111.928,
         24.629
        ],
        [
         111.954,
         24.647
        ],
        [
         111.939,
         24.686
        ],
        [
         111.962,
         24.721
        ],
        [
         112.024,
         24.74
        ],
        [
         111.951,
         24.77
        ],
        [
         111.93,
         24.756
        ],
        [
         111.875,
         24.757
        ],
        [
         111.869,
         24.772
        ],
        [
         111.814,
         24.77
        ],
        [
         111.784,
         24.786
        ],
        [
         111.708,
         24.789
        ],
        [
         111.667,
         24.761
        ],
        [
         111.638,
         24.715
        ],
        [
         111.642,
         24.685
        ],
        [
         111.589,
         24.691
        ],
        [
         111.57,
         24.645
        ],
        [
         111.527,
         24.638
        ],
        [
         111.499,
         24.668
        ],
        [
         111.452,
         24.666
        ],
        [
         111.431,
         24.688
        ],
        [
         111.461,
         24.729
        ],
        [
         111.479,
         24.797
        ],
        [
         111.449,
         24.857
        ],
        [
         111.447,
         24.893
        ],
        [
         111.47,
         24.929
        ],
        [
         111.435,
         24.952
        ],
        [
         111.433,
         24.98
        ],
        [
         111.46,
         24.993
        ],
        [
         111.468,
         25.022
        ],
        [
         111.416,
         25.048
        ],
        [
         111.436,
         25.094
        ],
        [
         111.375,
         25.128
        ],
        [
         111.368,
         25.109
        ],
        [
         111.322,
         25.105
        ],
        [
         111.275,
         25.151
        ],
        [
         111.222,
         25.107
        ],
        [
         111.201,
         25.075
        ],
        [
         111.14,
         25.042
        ],
        [
         111.102,
         25.035
        ],
        [
         111.101,
         24.946
        ],
        [
         111.009,
         24.921
        ],
        [
         110.969,
         24.975
        ],
        [
         110.951,
         25.044
        ],
        [
         110.984,
         25.102
        ],
        [
         110.999,
         25.161
        ],
        [
         111.113,
         25.217
        ],
        [
         111.104,
         25.285
        ],
        [
         111.139,
         25.304
        ],
        [
         111.185,
         25.367
        ],
        [
         111.211,
         25.363
        ],
        [
         111.279,
         25.423
        ],
        [
         111.328,
         25.522
        ],
        [
         111.325,
         25.564
        ],
        [
         111.343,
         25.603
        ],
        [
         111.31,
         25.645
        ],
        [
         111.309,
         25.72
        ],
        [
         111.4,
         25.744
        ],
        [
         111.442,
         25.772
        ],
        [
         111.433,
         25.846
        ],
        [
         111.486,
         25.859
        ],
        [
         111.46,
         25.885
        ],
        [
         111.383,
         25.882
        ],
        [
         111.376,
         25.906
        ],
        [
         111.346,
         25.907
        ],
        [
         111.297,
         25.874
        ],
        [
         111.292,
         25.854
        ],
        [
         111.251,
         25.865
        ],
        [
         111.23,
         25.916
        ],
        [
         111.19,
         25.953
        ],
        [
         111.235,
         26.048
        ],
        [
         111.267,
         26.059
        ],
        [
         111.245,
         26.078
        ],
        [
         111.266,
         26.096
        ],
        [
         111.258,
         26.152
        ],
        [
         111.275,
         26.183
        ],
        [
         111.272,
         26.217
        ],
        [
         111.293,
         26.222
        ],
        [
         111.278,
         26.272
        ],
        [
         111.228,
         26.261
        ],
        [
         111.205,
         26.276
        ],
        [
         111.209,
         26.304
        ],
        [
         111.091,
         26.308
        ],
        [
         111.008,
         26.337
        ],
        [
         111.009,
         26.359
        ],
        [
         110.974,
         26.386
        ],
        [
         110.945,
         26.373
        ],
        [
         110.944,
         26.327
        ],
        [
         110.926,
         26.32
        ],
        [
         110.94,
         26.287
        ],
        [
         110.836,
         26.256
        ],
        [
         110.759,
         26.248
        ],
        [
         110.735,
         26.271
        ],
        [
         110.742,
         26.314
        ],
        [
         110.721,
         26.294
        ],
        [
         110.674,
         26.317
        ],
        [
         110.643,
         26.309
        ],
        [
         110.612,
         26.334
        ],
        [
         110.584,
         26.297
        ],
        [
         110.553,
         26.283
        ],
        [
         110.547,
         26.233
        ],
        [
         110.495,
         26.166
        ],
        [
         110.478,
         26.18
        ],
        [
         110.438,
         26.154
        ],
        [
         110.373,
         26.089
        ],
        [
         110.326,
         25.975
        ],
        [
         110.257,
         25.961
        ],
        [
         110.25,
         26.011
        ],
        [
         110.182,
         26.06
        ],
        [
         110.169,
         26.029
        ],
        [
         110.101,
         26.02
        ],
        [
         110.065,
         26.05
        ],
        [
         110.101,
         26.132
        ],
        [
         110.099,
         26.169
        ],
        [
         110.03,
         26.166
        ],
        [
         109.97,
         26.195
        ],
        [
         109.904,
         26.136
        ],
        [
         109.899,
         26.095
        ],
        [
         109.864,
         26.028
        ],
        [
         109.814,
         26.041
        ],
        [
         109.782,
         25.997
        ],
        [
         109.806,
         25.974
        ],
        [
         109.826,
         25.911
        ],
        [
         109.811,
         25.878
        ],
        [
         109.779,
         25.866
        ],
        [
         109.768,
         25.89
        ],
        [
         109.685,
         25.88
        ],
        [
         109.68,
         25.922
        ],
        [
         109.694,
         25.959
        ],
        [
         109.711,
         25.954
        ],
        [
         109.73,
         25.99
        ],
        [
         109.649,
         26.017
        ],
        [
         109.635,
         26.048
        ],
        [
         109.588,
         26.02
        ],
        [
         109.56,
         26.021
        ],
        [
         109.513,
         25.998
        ],
        [
         109.482,
         26.03
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
         109.0,
         28.5
        ],
        [
         109.0,
         28.165
        ],
        [
         109.006,
         28.163
        ],
        [
         109.027,
         28.22
        ],
        [
         109.086,
         28.184
        ],
        [
         109.102,
         28.202
        ],
        [
         109.081,
         28.248
        ],
        [
         109.117,
         28.278
        ],
        [
         109.152,
         28.35
        ],
        [
         109.154,
         28.417
        ],
        [
         109.192,
         28.471
        ],
        [
         109.234,
         28.475
        ],
        [
         109.274,
         28.495
        ],
        [
         109.274,
         28.5
        ],
        [
         109.0,
         28.5
        ]
       ]
      ]
     ]
    },
    "n": "重庆市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.274,
         28.495
        ],
        [
         109.234,
         28.475
        ],
        [
         109.192,
         28.471
        ],
        [
         109.154,
         28.417
        ],
        [
         109.152,
         28.35
        ],
        [
         109.117,
         28.278
        ],
        [
         109.081,
         28.248
        ],
        [
         109.102,
         28.202
        ],
        [
         109.086,
         28.184
        ],
        [
         109.027,
         28.22
        ],
        [
         109.006,
         28.163
        ],
        [
         109.0,
         28.165
        ],
        [
         109.0,
         25.527
        ],
        [
         109.025,
         25.512
        ],
        [
         109.088,
         25.551
        ],
        [
         109.052,
         25.567
        ],
        [
         109.031,
         25.63
        ],
        [
         109.075,
         25.694
        ],
        [
         109.079,
         25.721
        ],
        [
         109.043,
         25.739
        ],
        [
         109.008,
         25.735
        ],
        [
         109.0,
         25.728
        ],
        [
         109.0,
         25.781
        ],
        [
         109.048,
         25.791
        ],
        [
         109.078,
         25.777
        ],
        [
         109.095,
         25.805
        ],
        [
         109.144,
         25.795
        ],
        [
         109.132,
         25.763
        ],
        [
         109.148,
         25.742
        ],
        [
         109.207,
         25.788
        ],
        [
         109.207,
         25.74
        ],
        [
         109.296,
         25.714
        ],
        [
         109.34,
         25.731
        ],
        [
         109.328,
         25.762
        ],
        [
         109.34,
         25.834
        ],
        [
         109.359,
         25.836
        ],
        [
         109.397,
         25.9
        ],
        [
         109.435,
         25.933
        ],
        [
         109.409,
         25.967
        ],
        [
         109.473,
         26.007
        ],
        [
         109.482,
         26.03
        ],
        [
         109.453,
         26.056
        ],
        [
         109.45,
         26.102
        ],
        [
         109.503,
         26.096
        ],
        [
         109.514,
         26.128
        ],
        [
         109.476,
         26.148
        ],
        [
         109.439,
         26.239
        ],
        [
         109.467,
         26.314
        ],
        [
         109.442,
         26.29
        ],
        [
         109.37,
         26.277
        ],
        [
         109.351,
         26.264
        ],
        [
         109.325,
         26.29
        ],
        [
         109.286,
         26.296
        ],
        [
         109.271,
         26.328
        ],
        [
         109.296,
         26.35
        ],
        [
         109.32,
         26.418
        ],
        [
         109.381,
         26.454
        ],
        [
         109.362,
         26.472
        ],
        [
         109.386,
         26.493
        ],
        [
         109.381,
         26.519
        ],
        [
         109.407,
         26.533
        ],
        [
         109.391,
         26.599
        ],
        [
         109.355,
         26.659
        ],
        [
         109.334,
         26.646
        ],
        [
         109.306,
         26.661
        ],
        [
         109.284,
         26.698
        ],
        [
         109.355,
         26.693
        ],
        [
         109.407,
         26.72
        ],
        [
         109.448,
         26.76
        ],
        [
         109.487,
         26.76
        ],
        [
         109.476,
         26.83
        ],
        [
         109.467,
         26.832
        ],
        [
         109.453,
         26.862
        ],
        [
         109.436,
         26.892
        ],
        [
         109.555,
         26.947
        ],
        [
         109.52,
         27.059
        ],
        [
         109.498,
         27.08
        ],
        [
         109.487,
         27.054
        ],
        [
         109.455,
         27.069
        ],
        [
         109.473,
         27.135
        ],
        [
         109.441,
         27.118
        ],
        [
         109.415,
         27.154
        ],
        [
         109.359,
         27.153
        ],
        [
         109.335,
         27.139
        ],
        [
         109.264,
         27.132
        ],
        [
         109.239,
         27.149
        ],
        [
         109.217,
         27.115
        ],
        [
         109.166,
         27.067
        ],
        [
         109.101,
         27.069
        ],
        [
         109.129,
         27.123
        ],
        [
         109.033,
         27.104
        ],
        [
         109.008,
         27.08
        ],
        [
         109.0,
         27.076
        ],
        [
         109.0,
         27.274
        ],
        [
         109.054,
         27.294
        ],
        [
         109.045,
         27.331
        ],
        [
         109.104,
         27.337
        ],
        [
         109.142,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.167,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.245,
         27.418
        ],
        [
         109.3,
         27.424
        ],
        [
         109.303,
         27.476
        ],
        [
         109.405,
         27.551
        ],
        [
         109.462,
         27.568
        ],
        [
         109.451,
         27.586
        ],
        [
         109.47,
         27.629
        ],
        [
         109.457,
         27.674
        ],
        [
         109.471,
         27.68
        ],
        [
         109.414,
         27.725
        ],
        [
         109.367,
         27.722
        ],
        [
         109.378,
         27.737
        ],
        [
         109.333,
         27.783
        ],
        [
         109.347,
         27.838
        ],
        [
         109.322,
         27.868
        ],
        [
         109.302,
         27.956
        ],
        [
         109.32,
         27.989
        ],
        [
         109.362,
         28.008
        ],
        [
         109.379,
         28.035
        ],
        [
         109.336,
         28.063
        ],
        [
         109.298,
         28.036
        ],
        [
         109.314,
         28.104
        ],
        [
         109.338,
         28.142
        ],
        [
         109.34,
         28.19
        ],
        [
         109.368,
         28.255
        ],
        [
         109.388,
         28.268
        ],
        [
         109.335,
         28.294
        ],
        [
         109.318,
         28.278
        ],
        [
         109.275,
         28.313
        ],
        [
         109.269,
         28.338
        ],
        [
         109.289,
         28.374
        ],
        [
         109.264,
         28.393
        ],
        [
         109.261,
         28.465
        ],
        [
         109.274,
         28.495
        ]
       ]
      ],
      [
       [
        [
         109.476,
         26.83
        ],
        [
         109.487,
         26.76
        ],
        [
         109.522,
         26.749
        ],
        [
         109.522,
         26.749
        ],
        [
         109.497,
         26.815
        ],
        [
         109.513,
         26.84
        ],
        [
         109.51,
         26.878
        ],
        [
         109.487,
         26.896
        ],
        [
         109.453,
         26.862
        ],
        [
         109.467,
         26.832
        ],
        [
         109.476,
         26.83
        ]
       ]
      ],
      [
       [
        [
         109.529,
         26.744
        ],
        [
         109.568,
         26.726
        ],
        [
         109.597,
         26.756
        ],
        [
         109.555,
         26.735
        ],
        [
         109.529,
         26.744
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       109.0,
       23.663
      ],
      [
       109.112,
       23.712
      ],
      [
       109.192,
       23.723
      ],
      [
       109.238,
       23.695
      ],
      [
       109.281,
       23.688
      ],
      [
       109.322,
       23.7
      ],
      [
       109.369,
       23.746
      ],
      [
       109.423,
       23.825
      ],
      [
       109.469,
       23.847
      ],
      [
       109.529,
       23.796
      ]
     ]
    },
    "n": "Hongshui"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       109.529,
       23.796
      ],
      [
       109.543,
       23.729
      ],
      [
       109.575,
       23.7
      ],
      [
       109.629,
       23.688
      ],
      [
       109.651,
       23.665
      ],
      [
       109.641,
       23.629
      ],
      [
       109.663,
       23.575
      ],
      [
       109.717,
       23.502
      ],
      [
       109.796,
       23.454
      ],
      [
       109.9,
       23.43
      ],
      [
       109.963,
       23.431
      ],
      [
       109.986,
       23.455
      ],
      [
       110.021,
       23.452
      ],
      [
       110.089,
       23.405
      ]
     ]
    },
    "n": "Quan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.98,
        23.041
       ],
       [
        113.0,
        23.042
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.819,
        23.082
       ],
       [
        112.891,
        22.918
       ],
       [
        112.963,
        22.822
       ],
       [
        113.0,
        22.809
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.912,
        23.113
       ],
       [
        112.974,
        23.052
       ],
       [
        113.0,
        23.001
       ]
      ],
      [
       [
        111.301,
        23.481
       ],
       [
        111.433,
        23.449
       ],
       [
        111.499,
        23.375
       ],
       [
        111.542,
        23.249
       ],
       [
        111.707,
        23.161
       ],
       [
        112.137,
        23.09
       ],
       [
        112.271,
        23.142
       ],
       [
        112.353,
        23.132
       ],
       [
        112.427,
        23.076
       ],
       [
        112.498,
        23.078
       ],
       [
        112.563,
        23.136
       ],
       [
        112.643,
        23.165
       ],
       [
        112.736,
        23.164
       ],
       [
        112.805,
        23.148
       ]
      ]
     ]
    },
    "n": "Xi"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       110.089,
       23.408
      ],
      [
       110.201,
       23.545
      ],
      [
       110.334,
       23.555
      ],
      [
       110.622,
       23.45
      ],
      [
       110.745,
       23.466
      ],
      [
       110.814,
       23.447
      ],
      [
       110.868,
       23.397
      ],
      [
       110.997,
       23.399
      ],
      [
       111.301,
       23.481
      ]
     ]
    },
    "n": "Xun"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        109.0,
        26.585
       ],
       [
        109.073,
        26.608
       ],
       [
        109.194,
        26.679
       ],
       [
        109.39,
        26.838
       ],
       [
        109.438,
        26.894
       ],
       [
        109.444,
        26.954
       ],
       [
        109.424,
        27.038
       ],
       [
        109.441,
        27.08
       ],
       [
        109.494,
        27.079
       ],
       [
        109.556,
        27.107
       ],
       [
        109.628,
        27.165
       ],
       [
        109.667,
        27.177
       ],
       [
        109.675,
        27.144
       ],
       [
        109.692,
        27.128
       ],
       [
        109.719,
        27.131
       ],
       [
        109.74,
        27.152
       ],
       [
        109.755,
        27.19
       ],
       [
        109.823,
        27.189
       ],
       [
        109.943,
        27.147
       ],
       [
        110.051,
        27.19
       ],
       [
        110.217,
        27.423
       ],
       [
        110.264,
        27.504
       ],
       [
        110.284,
        27.566
       ],
       [
        110.277,
        27.611
       ],
       [
        110.299,
        27.653
       ],
       [
        110.351,
        27.694
       ],
       [
        110.367,
        27.729
       ],
       [
        110.347,
        27.758
       ],
       [
        110.348,
        27.791
       ],
       [
        110.371,
        27.828
       ],
       [
        110.347,
        27.863
       ],
       [
        110.275,
        27.896
       ],
       [
        110.251,
        27.927
       ],
       [
        110.275,
        27.955
       ],
       [
        110.252,
        27.981
       ],
       [
        110.182,
        28.005
       ],
       [
        110.135,
        28.036
       ],
       [
        110.113,
        28.076
       ],
       [
        110.128,
        28.128
       ],
       [
        110.179,
        28.193
       ],
       [
        110.195,
        28.242
       ],
       [
        110.175,
        28.275
       ],
       [
        110.182,
        28.289
       ],
       [
        110.216,
        28.286
       ],
       [
        110.272,
        28.32
       ],
       [
        110.351,
        28.393
       ],
       [
        110.419,
        28.486
       ],
       [
        110.426,
        28.5
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   109.0,
   22.0,
   113.0,
   28.5
  ]
 }
};
