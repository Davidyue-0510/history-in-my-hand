// 本文件由 tools/build.py 自动生成（切片 jiangxi_nanchang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangxi_nanchang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangxi_nanchang_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "uprising",
  "province": "jiangxi",
  "title": "南昌起义",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "nanchang",
  "dossier_event": "event:ev_jiangxi_nanchang_llm_01",
  "vocab_pack": "jiangxi_nanchang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing_modern",
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
    "note": "南昌起义：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南昌起义：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "南昌起义：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "南昌起义：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   6
  ],
  "page": "jiangxi_nanchang_llm.html",
  "key": "jiangxi_nanchang_llm",
  "scene_id": "jiangxi_nanchang_llm"
 },
 "sources": [
  {
   "id": "jiangxi_nanchang_src_llm",
   "title": "南昌起义史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "nanchang",
   "name": "南昌",
   "type": "city",
   "modern": "今中国江西省南昌市",
   "note": "起义发生地。坐标据地名志条目：南昌，标 approx。",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 115.858,
   "lat": 28.683,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：南昌（诚实回填 v0.221）。",
   "elev": 57
  },
  {
   "id": "jiangxi",
   "name": "江西",
   "type": "region",
   "modern": "今中国江西省",
   "note": "起义省份",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "hunan",
   "name": "湘南",
   "type": "region",
   "modern": "今中国湖南省南部",
   "note": "转战地区",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "周恩来",
   "role": "中共前敌委员会书记",
   "note": "南昌起义主要领导人",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p02",
   "name": "贺龙",
   "role": "起义军总指挥",
   "note": "南昌起义主要领导人",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p03",
   "name": "叶挺",
   "role": "起义军前敌总指挥",
   "note": "南昌起义主要领导人",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p04",
   "name": "朱德",
   "role": "起义军主要领导人",
   "note": "南昌起义主要领导人",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p05",
   "name": "刘伯承",
   "role": "起义军参谋长",
   "note": "南昌起义主要领导人",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义时间",
   "value_text": "民国十六年八月一日",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "民国十六年八月一日",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "民国十六年八月一日",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义领导者",
   "value_text": "周恩来、贺龙、叶挺、朱德、刘伯承",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "周恩来、贺龙、叶挺、朱德、刘伯承等领导",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周恩来、贺龙、叶挺、朱德、刘伯承等领导",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义性质",
   "value_text": "武装反抗国民党反动派第一枪",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "打响了武装反抗国民党反动派的第一枪",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "打响了武装反抗国民党反动派的第一枪",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "event:ev_jiangxi_nanchang_llm_02",
   "predicate": "占领南昌城",
   "value_text": "起义军占领南昌城",
   "time": {
    "era_text": "民国十六年八月",
    "start": "1927-01-01",
    "end": "1927-12-31",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "起义军占领南昌城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "起义军占领南昌城",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "event:ev_jiangxi_nanchang_llm_03",
   "predicate": "成立革命委员会",
   "value_text": "成立中国国民党革命委员会",
   "time": {
    "era_text": "民国十六年八月",
    "start": "1927-01-01",
    "end": "1927-12-31",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "成立中国国民党革命委员会",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "成立中国国民党革命委员会",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "event:ev_jiangxi_nanchang_llm_04",
   "predicate": "撤离原因",
   "value_text": "敌众我寡主动撤离",
   "time": {
    "era_text": "民国十六年八月",
    "start": "1927-01-01",
    "end": "1927-12-31",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "因敌众我寡主动撤离南下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "因敌众我寡主动撤离南下",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "event:ev_jiangxi_nanchang_llm_04",
   "predicate": "撤离方向",
   "value_text": "南下转战湘南",
   "time": {
    "era_text": "民国十六年八月",
    "start": "1927-01-01",
    "end": "1927-12-31",
    "gregorian_year": 1927
   },
   "place": "hunan",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "撤离南下，转战湘南",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "撤离南下，转战湘南",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "历史意义",
   "value_text": "创建人民军队、独立领导武装斗争开端",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "创建人民军队、独立领导武装斗争的开端",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "创建人民军队、独立领导武装斗争的开端",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军兵力",
   "value_text": "兵力不详",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "未提及兵力",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "南昌起义相关档案或回忆录",
    "skills": [
     "史料考证"
    ],
    "accept": "起义军具体兵力数字"
   },
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "未提及兵力",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军伤亡",
   "value_text": "伤亡数字未记载",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "未提及伤亡",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "南昌起义战史资料",
    "skills": [
     "军事史研究"
    ],
    "accept": "起义军伤亡具体数字"
   },
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "未提及伤亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军与国民党军兵力对比",
   "value_text": "敌众我寡",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "敌众我寡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "敌众我寡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军后续行动",
   "value_text": "南下转战湘南",
   "time": {
    "era_text": "民国十六年八月",
    "start": "1927-01-01",
    "end": "1927-12-31",
    "gregorian_year": 1927
   },
   "place": "hunan",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "转战湘南",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "转战湘南",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_013",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军与国民党军关系",
   "value_text": "武装反抗国民党",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "武装反抗国民党反动派",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武装反抗国民党反动派",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_014",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军与中共关系",
   "value_text": "中共领导起义",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "中国共产党发动",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中国共产党发动",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_015",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "predicate": "起义军与国民党军兵力对比",
   "value_text": "敌众我寡",
   "time": {
    "era_text": "民国十六年八月一日",
    "start": "1927-08-01",
    "gregorian_year": 1927
   },
   "place": "nanchang",
   "source": "jiangxi_nanchang_src_llm",
   "quote": "敌众我寡",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "史料记载一致",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "敌众我寡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_009",
  "JIA_010"
 ],
 "events": [
  {
   "id": "ev_jiangxi_nanchang_llm_01",
   "subject": "event:ev_jiangxi_nanchang_llm_01",
   "year": 1927,
   "era": "民国十六年八月一日",
   "title": "南昌起义爆发",
   "kind": "战事",
   "text": "中共在南昌发动武装起义",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_nanchang_llm_02",
   "subject": "event:ev_jiangxi_nanchang_llm_02",
   "year": 1927,
   "era": "民国十六年八月",
   "title": "占领南昌城",
   "kind": "战事",
   "text": "起义军占领南昌城",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_nanchang_llm_03",
   "subject": "event:ev_jiangxi_nanchang_llm_03",
   "year": 1927,
   "era": "民国十六年八月",
   "title": "成立革命委员会",
   "kind": "行政",
   "text": "成立中国国民党革命委员会",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jiangxi_nanchang_llm_04",
   "subject": "event:ev_jiangxi_nanchang_llm_04",
   "year": 1927,
   "era": "民国十六年八月",
   "title": "撤离南昌南下",
   "kind": "战事",
   "text": "因敌众我寡主动撤离南下",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "nanchang",
   "to": "hunan",
   "type": "military",
   "label": "起义军撤离南下路线",
   "_source_idx": 0,
   "_source_name": "南昌起义史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "nanchang",
   "party": "后世官修",
   "start": 1927,
   "end": 1927,
   "basis": "auto: 场景主地点 nanchang 叙事控制方=后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "nanchang",
   "name": "南昌",
   "lon": 115.858,
   "lat": 28.683,
   "region": "uprising"
  }
 ],
 "control_years": [
  1927,
  1927
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
        114.858,
        27.683
       ],
       [
        114.858,
        29.683
       ],
       [
        116.858,
        29.683
       ],
       [
        116.858,
        27.683
       ],
       [
        114.858,
        27.683
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
         116.686,
         29.683
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
         116.858,
         29.588
        ],
        [
         116.858,
         29.683
        ],
        [
         116.686,
         29.683
        ]
       ]
      ],
      [
       [
        [
         116.677,
         29.683
        ],
        [
         116.68,
         29.681
        ],
        [
         116.686,
         29.683
        ],
        [
         116.677,
         29.683
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
         116.858,
         27.683
        ],
        [
         116.858,
         29.588
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
         116.677,
         29.683
        ],
        [
         115.404,
         29.683
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
         115.117,
         29.683
        ],
        [
         115.114,
         29.683
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
         114.948,
         29.543
        ],
        [
         114.967,
         29.522
        ],
        [
         114.94,
         29.494
        ],
        [
         114.901,
         29.506
        ],
        [
         114.86,
         29.476
        ],
        [
         114.889,
         29.436
        ],
        [
         114.918,
         29.454
        ],
        [
         114.905,
         29.473
        ],
        [
         114.936,
         29.487
        ],
        [
         114.947,
         29.465
        ],
        [
         114.931,
         29.423
        ],
        [
         114.895,
         29.398
        ],
        [
         114.866,
         29.404
        ],
        [
         114.858,
         29.401
        ],
        [
         114.858,
         27.683
        ],
        [
         116.858,
         27.683
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
         114.858,
         29.683
        ],
        [
         114.858,
         29.401
        ],
        [
         114.866,
         29.404
        ],
        [
         114.895,
         29.398
        ],
        [
         114.931,
         29.423
        ],
        [
         114.947,
         29.465
        ],
        [
         114.936,
         29.487
        ],
        [
         114.905,
         29.473
        ],
        [
         114.918,
         29.454
        ],
        [
         114.889,
         29.436
        ],
        [
         114.86,
         29.476
        ],
        [
         114.901,
         29.506
        ],
        [
         114.94,
         29.494
        ],
        [
         114.967,
         29.522
        ],
        [
         114.948,
         29.543
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
         115.114,
         29.683
        ],
        [
         115.117,
         29.683
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
         115.404,
         29.683
        ],
        [
         114.858,
         29.683
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
       116.174,
       29.683
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
       115.298,
       27.683
      ],
      [
       115.369,
       27.785
      ],
      [
       115.445,
       27.966
      ],
      [
       115.577,
       28.11
      ],
      [
       115.765,
       28.218
      ],
      [
       115.848,
       28.317
      ],
      [
       115.818,
       28.452
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
        116.102,
        29.683
       ],
       [
        116.232,
        29.683
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
   }
  ],
  "_bbox": [
   114.858,
   27.683,
   116.858,
   29.683
  ]
 }
};
