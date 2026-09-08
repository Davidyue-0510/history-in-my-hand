// 本文件由 tools/build.py 自动生成（切片 dagukou_battle_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dagukou_battle_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dagukou_battle_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "huabei",
  "province": "tianjin",
  "title": "大沽口之战（第二次鸦片战争）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dagukou",
  "dossier_event": "event:ev_dagukou_battle_llm_01",
  "vocab_pack": "inline:dagukou_battle_llm",
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
    "note": "大沽口之战（第二次鸦片战争）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "大沽口之战（第二次鸦片战争）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "大沽口之战（第二次鸦片战争）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "大沽口之战（第二次鸦片战争）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "dagukou_battle_llm.html",
  "key": "dagukou_battle_llm",
  "scene_id": "dagukou_battle_llm"
 },
 "sources": [
  {
   "id": "dagukou_src_llm",
   "title": "第二次鸦片战争·大沽口战事（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "world-gen 抽取",
   "period": "清咸丰八至十年（1858–1860）",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dagukou",
   "name": "大沽口",
   "type": "port",
   "modern": "今天津市滨海新区",
   "note": "海河入海处，津门门户",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "tianjin",
   "name": "天津",
   "type": "city",
   "modern": "今天津市",
   "note": "联军攻占",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.2,
   "lat": 39.13,
   "geo_note": "平津战役·天津攻坚战",
   "elev": 8
  },
  {
   "id": "beijing",
   "name": "北京",
   "type": "city",
   "modern": "今北京市",
   "note": "联军进逼",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.4,
   "lat": 39.9,
   "geo_note": "平津战役·傅作义起义",
   "elev": 44
  },
  {
   "id": "yuanmingyuan",
   "name": "圆明园",
   "type": "region",
   "modern": "今北京市海淀区",
   "note": "被焚毁",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "DAG__p01",
   "name": "僧格林沁",
   "role": "清钦差大臣、科尔沁亲王",
   "note": "第二次大沽口之战清军统帅",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "DAG__p02",
   "name": "额尔金",
   "role": "英国全权专使",
   "note": "率英法联军北犯",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "DAG__p03",
   "name": "葛罗",
   "role": "法国全权专使",
   "note": "与额尔金同率联军",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "DAG__p04",
   "name": "咸丰帝",
   "role": "清帝",
   "note": "决策与联军议和",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DAG_001",
   "subject": "event:ev_dagukou_battle_llm_01",
   "predicate": "战役结果",
   "value_text": "英法联军攻占大沽炮台",
   "time": {
    "era_text": "咸丰八年",
    "start": "1858-01-01",
    "end": "1858-12-31",
    "gregorian_year": 1858
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "英法联军北犯，占大沽口炮台",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英法联军北犯，占大沽口炮台",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_002",
   "subject": "event:ev_dagukou_battle_llm_02",
   "predicate": "条约签订",
   "value_text": "逼签《天津条约》",
   "time": {
    "era_text": "咸丰八年",
    "start": "1858-01-01",
    "end": "1858-12-31",
    "gregorian_year": 1858
   },
   "place": "tianjin",
   "source": "dagukou_src_llm",
   "quote": "逼签《天津条约》",
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
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "逼签《天津条约》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_003",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "战役结果",
   "value_text": "联军再陷大沽，清军溃退",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "联军再陷大沽、攻天津",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "联军再陷大沽、攻天津",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_004",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "清军统帅",
   "value_text": "僧格林沁所部溃退",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "僧格林沁所部溃退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧格林沁所部溃退",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_005",
   "subject": "event:ev_dagukou_battle_llm_04",
   "predicate": "暴行",
   "value_text": "联军火烧圆明园",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "yuanmingyuan",
   "source": "dagukou_src_llm",
   "quote": "火烧圆明园",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "火烧圆明园",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_006",
   "subject": "event:ev_dagukou_battle_llm_05",
   "predicate": "条约签订",
   "value_text": "旋订《北京条约》",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "beijing",
   "source": "dagukou_src_llm",
   "quote": "旋订《北京条约》",
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
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "旋订《北京条约》",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_007",
   "subject": "place:dagukou",
   "predicate": "战略地位",
   "value_text": "大沽口为津门门户",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "大沽口地处海河入海处，为津门门户",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大沽口地处海河入海处，为津门门户",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_008",
   "subject": "place:dagukou",
   "predicate": "海防地位",
   "value_text": "炮台扼水陆要冲",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "炮台扼水陆要冲，历为京畿海防重心",
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
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "炮台扼水陆要冲，历为京畿海防重心",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_009",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "清军伤亡",
   "value_text": "清军溃退，伤亡未详",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "僧格林沁所部溃退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "theater",
   "note": "原文未载具体伤亡",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧格林沁所部溃退",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_010",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "联军兵力",
   "value_text": "联军兵力未详",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "英法联军北犯",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未载兵力",
   "dims": [
    6
   ],
   "lead": {
    "where": "英国国家档案馆、法国陆军档案",
    "skills": [
     "军事史",
     "档案学"
    ],
    "accept": "查联军参战兵力"
   },
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英法联军北犯",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_011",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "清军兵力",
   "value_text": "清军兵力未详",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "僧格林沁所部",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未载兵力",
   "dims": [
    6
   ],
   "lead": {
    "where": "中国第一历史档案馆",
    "skills": [
     "清史",
     "军事档案"
    ],
    "accept": "查僧格林沁部兵力"
   },
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧格林沁所部",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_012",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "战役性质",
   "value_text": "第二次鸦片战争一部分",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "第二次鸦片战争",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.9,
   "scale": "empire",
   "note": "学界共识",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "第二次鸦片战争",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_013",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "清军战术",
   "value_text": "清军战术未详",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "僧格林沁所部溃退",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未载战术",
   "dims": [
    2,
    6
   ],
   "lead": {
    "where": "清军战报、英法战史",
    "skills": [
     "军事史"
    ],
    "accept": "查清军防御部署"
   },
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "僧格林沁所部溃退",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DAG_014",
   "subject": "event:ev_dagukou_battle_llm_03",
   "predicate": "联军战术",
   "value_text": "联军战术未详",
   "time": {
    "era_text": "咸丰十年",
    "start": "1860-01-01",
    "end": "1860-12-31",
    "gregorian_year": 1860
   },
   "place": "dagukou",
   "source": "dagukou_src_llm",
   "quote": "英法联军北犯",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未载战术",
   "dims": [
    2,
    6
   ],
   "lead": {
    "where": "英法海军档案",
    "skills": [
     "海军史"
    ],
    "accept": "查联军登陆战术"
   },
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英法联军北犯",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DAG_010",
  "DAG_011",
  "DAG_013",
  "DAG_014"
 ],
 "events": [
  {
   "id": "ev_dagukou_battle_llm_01",
   "subject": "event:ev_dagukou_battle_llm_01",
   "year": 1858,
   "era": "咸丰八年",
   "title": "第一次大沽口之战",
   "kind": "战事",
   "text": "英法联军攻占大沽炮台",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dagukou_battle_llm_02",
   "subject": "event:ev_dagukou_battle_llm_02",
   "year": 1858,
   "era": "咸丰八年",
   "title": "签订天津条约",
   "kind": "外交",
   "text": "逼签《天津条约》",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dagukou_battle_llm_03",
   "subject": "event:ev_dagukou_battle_llm_03",
   "year": 1860,
   "era": "咸丰十年",
   "title": "第二次大沽口之战",
   "kind": "战事",
   "text": "联军再陷大沽，僧格林沁溃退",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dagukou_battle_llm_04",
   "subject": "event:ev_dagukou_battle_llm_04",
   "year": 1860,
   "era": "咸丰十年",
   "title": "火烧圆明园",
   "kind": "战事",
   "text": "联军进逼北京，焚毁圆明园",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dagukou_battle_llm_05",
   "subject": "event:ev_dagukou_battle_llm_05",
   "year": 1860,
   "era": "咸丰十年",
   "title": "签订北京条约",
   "kind": "外交",
   "text": "旋订《北京条约》",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "dagukou",
   "to": "tianjin",
   "type": "military",
   "label": "联军攻天津",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "tianjin",
   "to": "beijing",
   "type": "military",
   "label": "联军进逼北京",
   "_source_idx": 0,
   "_source_name": "第二次鸦片战争·大沽口战事（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "tianjin",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  },
  {
   "place_id": "beijing",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "tianjin",
   "name": "天津",
   "lon": 117.2,
   "lat": 39.13,
   "region": "huabei"
  },
  {
   "place_id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "region": "huabei"
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
        118.2,
        38.152
       ],
       [
        118.015,
        38.183
       ],
       [
        117.767,
        38.312
       ],
       [
        117.656,
        38.424
       ],
       [
        117.558,
        38.625
       ],
       [
        117.554,
        38.691
       ],
       [
        117.617,
        38.853
       ],
       [
        117.785,
        39.134
       ],
       [
        117.866,
        39.191
       ],
       [
        118.041,
        39.227
       ],
       [
        118.148,
        39.195
       ],
       [
        118.2,
        39.151
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
        115.4,
        38.13
       ],
       [
        115.4,
        40.9
       ],
       [
        118.2,
        40.9
       ],
       [
        118.2,
        39.151
       ],
       [
        118.148,
        39.195
       ],
       [
        118.041,
        39.227
       ],
       [
        117.866,
        39.191
       ],
       [
        117.785,
        39.134
       ],
       [
        117.617,
        38.853
       ],
       [
        117.554,
        38.691
       ],
       [
        117.558,
        38.625
       ],
       [
        117.656,
        38.424
       ],
       [
        117.767,
        38.312
       ],
       [
        118.015,
        38.183
       ],
       [
        118.2,
        38.152
       ],
       [
        118.2,
        38.13
       ],
       [
        115.4,
        38.13
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
         117.349,
         40.581
        ],
        [
         117.39,
         40.562
        ],
        [
         117.43,
         40.576
        ],
        [
         117.413,
         40.605
        ],
        [
         117.467,
         40.65
        ],
        [
         117.467,
         40.65
        ],
        [
         117.501,
         40.637
        ],
        [
         117.515,
         40.66
        ],
        [
         117.494,
         40.675
        ],
        [
         117.409,
         40.687
        ],
        [
         117.342,
         40.674
        ],
        [
         117.32,
         40.658
        ],
        [
         117.278,
         40.664
        ],
        [
         117.208,
         40.695
        ],
        [
         117.117,
         40.7
        ],
        [
         117.112,
         40.707
        ],
        [
         117.012,
         40.694
        ],
        [
         116.965,
         40.71
        ],
        [
         116.927,
         40.745
        ],
        [
         116.924,
         40.774
        ],
        [
         116.848,
         40.839
        ],
        [
         116.813,
         40.848
        ],
        [
         116.76,
         40.89
        ],
        [
         116.736,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.476,
         40.9
        ],
        [
         116.34,
         40.9
        ],
        [
         116.438,
         40.819
        ],
        [
         116.466,
         40.774
        ],
        [
         116.454,
         40.766
        ],
        [
         116.317,
         40.772
        ],
        [
         116.311,
         40.755
        ],
        [
         116.273,
         40.763
        ],
        [
         116.247,
         40.792
        ],
        [
         116.22,
         40.744
        ],
        [
         116.205,
         40.74
        ],
        [
         116.172,
         40.696
        ],
        [
         116.163,
         40.662
        ],
        [
         116.134,
         40.667
        ],
        [
         116.099,
         40.631
        ],
        [
         116.005,
         40.584
        ],
        [
         115.982,
         40.579
        ],
        [
         115.972,
         40.602
        ],
        [
         115.908,
         40.617
        ],
        [
         115.885,
         40.595
        ],
        [
         115.828,
         40.588
        ],
        [
         115.82,
         40.559
        ],
        [
         115.785,
         40.558
        ],
        [
         115.755,
         40.54
        ],
        [
         115.736,
         40.503
        ],
        [
         115.781,
         40.493
        ],
        [
         115.772,
         40.444
        ],
        [
         115.864,
         40.359
        ],
        [
         115.918,
         40.354
        ],
        [
         115.952,
         40.282
        ],
        [
         115.969,
         40.264
        ],
        [
         115.899,
         40.234
        ],
        [
         115.87,
         40.186
        ],
        [
         115.856,
         40.189
        ],
        [
         115.848,
         40.147
        ],
        [
         115.806,
         40.153
        ],
        [
         115.774,
         40.176
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.6,
         40.12
        ],
        [
         115.591,
         40.096
        ],
        [
         115.527,
         40.076
        ],
        [
         115.485,
         40.04
        ],
        [
         115.455,
         40.03
        ],
        [
         115.45,
         39.993
        ],
        [
         115.429,
         39.984
        ],
        [
         115.426,
         39.951
        ],
        [
         115.481,
         39.936
        ],
        [
         115.523,
         39.899
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.526,
         39.876
        ],
        [
         115.514,
         39.838
        ],
        [
         115.567,
         39.816
        ],
        [
         115.553,
         39.795
        ],
        [
         115.506,
         39.784
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.444,
         39.786
        ],
        [
         115.44,
         39.752
        ],
        [
         115.487,
         39.742
        ],
        [
         115.492,
         39.67
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.522,
         39.64
        ],
        [
         115.518,
         39.597
        ],
        [
         115.546,
         39.619
        ],
        [
         115.587,
         39.59
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.668,
         39.615
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.753,
         39.516
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.828,
         39.541
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.957,
         39.561
        ],
        [
         115.978,
         39.596
        ],
        [
         115.995,
         39.577
        ],
        [
         116.026,
         39.588
        ],
        [
         116.036,
         39.572
        ],
        [
         116.099,
         39.575
        ],
        [
         116.13,
         39.568
        ],
        [
         116.152,
         39.583
        ],
        [
         116.199,
         39.589
        ],
        [
         116.241,
         39.564
        ],
        [
         116.258,
         39.5
        ],
        [
         116.307,
         39.488
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.435,
         39.443
        ],
        [
         116.455,
         39.453
        ],
        [
         116.444,
         39.482
        ],
        [
         116.412,
         39.483
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.51
        ],
        [
         116.438,
         39.527
        ],
        [
         116.478,
         39.535
        ],
        [
         116.473,
         39.553
        ],
        [
         116.508,
         39.551
        ],
        [
         116.524,
         39.596
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.665,
         39.606
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.749,
         39.62
        ],
        [
         116.791,
         39.596
        ],
        [
         116.812,
         39.616
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.677
        ],
        [
         116.906,
         39.688
        ],
        [
         116.89,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.917,
         39.731
        ],
        [
         116.902,
         39.764
        ],
        [
         116.949,
         39.779
        ],
        [
         116.918,
         39.846
        ],
        [
         116.908,
         39.832
        ],
        [
         116.866,
         39.844
        ],
        [
         116.812,
         39.89
        ],
        [
         116.784,
         39.891
        ],
        [
         116.783,
         39.948
        ],
        [
         116.758,
         39.968
        ],
        [
         116.781,
         40.035
        ],
        [
         116.82,
         40.028
        ],
        [
         116.831,
         40.051
        ],
        [
         116.868,
         40.042
        ],
        [
         116.928,
         40.055
        ],
        [
         116.945,
         40.041
        ],
        [
         117.025,
         40.03
        ],
        [
         117.052,
         40.06
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.14,
         40.064
        ],
        [
         117.16,
         40.077
        ],
        [
         117.204,
         40.07
        ],
        [
         117.21,
         40.082
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.274,
         40.106
        ],
        [
         117.307,
         40.137
        ],
        [
         117.349,
         40.137
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.384,
         40.188
        ],
        [
         117.39,
         40.228
        ],
        [
         117.351,
         40.23
        ],
        [
         117.331,
         40.29
        ],
        [
         117.295,
         40.278
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.243,
         40.369
        ],
        [
         117.226,
         40.369
        ],
        [
         117.234,
         40.417
        ],
        [
         117.264,
         40.442
        ],
        [
         117.209,
         40.502
        ],
        [
         117.263,
         40.513
        ],
        [
         117.248,
         40.54
        ],
        [
         117.27,
         40.561
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.766,
         39.401
        ],
        [
         117.847,
         39.408
        ],
        [
         117.872,
         39.412
        ],
        [
         117.87,
         39.455
        ],
        [
         117.9,
         39.474
        ],
        [
         117.912,
         39.517
        ],
        [
         117.912,
         39.517
        ],
        [
         117.905,
         39.534
        ],
        [
         117.934,
         39.574
        ],
        [
         117.868,
         39.597
        ],
        [
         117.83,
         39.59
        ],
        [
         117.767,
         39.599
        ],
        [
         117.754,
         39.58
        ],
        [
         117.754,
         39.58
        ],
        [
         117.745,
         39.548
        ],
        [
         117.716,
         39.53
        ],
        [
         117.707,
         39.576
        ],
        [
         117.685,
         39.589
        ],
        [
         117.654,
         39.575
        ],
        [
         117.637,
         39.603
        ],
        [
         117.663,
         39.636
        ],
        [
         117.669,
         39.667
        ],
        [
         117.627,
         39.704
        ],
        [
         117.578,
         39.727
        ],
        [
         117.596,
         39.746
        ],
        [
         117.561,
         39.755
        ],
        [
         117.546,
         39.776
        ],
        [
         117.562,
         39.8
        ],
        [
         117.529,
         39.859
        ],
        [
         117.529,
         39.859
        ],
        [
         117.508,
         39.902
        ],
        [
         117.508,
         39.902
        ],
        [
         117.512,
         39.909
        ],
        [
         117.512,
         39.909
        ],
        [
         117.513,
         39.911
        ],
        [
         117.513,
         39.911
        ],
        [
         117.515,
         39.947
        ],
        [
         117.535,
         39.955
        ],
        [
         117.546,
         39.999
        ],
        [
         117.595,
         39.995
        ],
        [
         117.595,
         39.995
        ],
        [
         117.615,
         39.973
        ],
        [
         117.671,
         39.974
        ],
        [
         117.691,
         39.985
        ],
        [
         117.756,
         39.965
        ],
        [
         117.782,
         39.967
        ],
        [
         117.782,
         39.967
        ],
        [
         117.795,
         39.997
        ],
        [
         117.795,
         39.997
        ],
        [
         117.793,
         40.006
        ],
        [
         117.793,
         40.006
        ],
        [
         117.769,
         40.022
        ],
        [
         117.769,
         40.022
        ],
        [
         117.744,
         40.018
        ],
        [
         117.748,
         40.047
        ],
        [
         117.776,
         40.06
        ],
        [
         117.753,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.675,
         40.082
        ],
        [
         117.656,
         40.11
        ],
        [
         117.656,
         40.11
        ],
        [
         117.654,
         40.115
        ],
        [
         117.654,
         40.115
        ],
        [
         117.652,
         40.123
        ],
        [
         117.652,
         40.123
        ],
        [
         117.613,
         40.158
        ],
        [
         117.613,
         40.158
        ],
        [
         117.61,
         40.16
        ],
        [
         117.61,
         40.16
        ],
        [
         117.577,
         40.179
        ],
        [
         117.572,
         40.219
        ],
        [
         117.549,
         40.233
        ],
        [
         117.505,
         40.227
        ],
        [
         117.45,
         40.253
        ],
        [
         117.416,
         40.249
        ],
        [
         117.39,
         40.228
        ],
        [
         117.384,
         40.188
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.349,
         40.137
        ],
        [
         117.307,
         40.137
        ],
        [
         117.274,
         40.106
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.21,
         40.082
        ],
        [
         117.192,
         40.066
        ],
        [
         117.198,
         39.993
        ],
        [
         117.151,
         39.945
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.228,
         39.853
        ],
        [
         117.248,
         39.861
        ],
        [
         117.252,
         39.834
        ],
        [
         117.192,
         39.833
        ],
        [
         117.156,
         39.817
        ],
        [
         117.158,
         39.797
        ],
        [
         117.206,
         39.764
        ],
        [
         117.162,
         39.749
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.178,
         39.645
        ],
        [
         117.153,
         39.624
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.016,
         39.654
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.688
        ],
        [
         116.906,
         39.677
        ],
        [
         116.85,
         39.668
        ],
        [
         116.812,
         39.616
        ],
        [
         116.808,
         39.576
        ],
        [
         116.787,
         39.554
        ],
        [
         116.82,
         39.529
        ],
        [
         116.821,
         39.482
        ],
        [
         116.785,
         39.466
        ],
        [
         116.832,
         39.436
        ],
        [
         116.876,
         39.435
        ],
        [
         116.84,
         39.413
        ],
        [
         116.84,
         39.378
        ],
        [
         116.818,
         39.374
        ],
        [
         116.829,
         39.339
        ],
        [
         116.871,
         39.358
        ],
        [
         116.89,
         39.338
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.856,
         39.216
        ],
        [
         116.87,
         39.154
        ],
        [
         116.909,
         39.151
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.755,
         39.003
        ],
        [
         116.728,
         38.975
        ],
        [
         116.708,
         38.932
        ],
        [
         116.722,
         38.897
        ],
        [
         116.723,
         38.853
        ],
        [
         116.751,
         38.831
        ],
        [
         116.738,
         38.785
        ],
        [
         116.746,
         38.754
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.859,
         38.741
        ],
        [
         116.877,
         38.681
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         117.039,
         38.688
        ],
        [
         117.068,
         38.681
        ],
        [
         117.055,
         38.639
        ],
        [
         117.071,
         38.608
        ],
        [
         117.11,
         38.585
        ],
        [
         117.151,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.238,
         38.581
        ],
        [
         117.253,
         38.556
        ],
        [
         117.369,
         38.565
        ],
        [
         117.432,
         38.602
        ],
        [
         117.479,
         38.616
        ],
        [
         117.558,
         38.614
        ],
        [
         117.639,
         38.627
        ],
        [
         117.657,
         38.66
        ],
        [
         117.729,
         38.68
        ],
        [
         117.741,
         38.7
        ],
        [
         117.741,
         38.754
        ],
        [
         117.671,
         38.772
        ],
        [
         117.647,
         38.789
        ],
        [
         117.646,
         38.829
        ],
        [
         117.752,
         38.848
        ],
        [
         117.779,
         38.869
        ],
        [
         117.848,
         38.856
        ],
        [
         117.876,
         38.92
        ],
        [
         117.898,
         38.949
        ],
        [
         117.856,
         38.957
        ],
        [
         117.838,
         39.057
        ],
        [
         117.872,
         39.123
        ],
        [
         117.965,
         39.173
        ],
        [
         117.977,
         39.206
        ],
        [
         118.033,
         39.22
        ],
        [
         118.035,
         39.219
        ],
        [
         118.065,
         39.231
        ],
        [
         118.065,
         39.256
        ],
        [
         118.037,
         39.265
        ],
        [
         118.024,
         39.289
        ],
        [
         118.024,
         39.289
        ],
        [
         117.982,
         39.299
        ],
        [
         117.982,
         39.299
        ],
        [
         117.979,
         39.301
        ],
        [
         117.979,
         39.301
        ],
        [
         117.973,
         39.312
        ],
        [
         117.973,
         39.312
        ],
        [
         117.966,
         39.315
        ],
        [
         117.966,
         39.315
        ],
        [
         117.92,
         39.318
        ],
        [
         117.92,
         39.318
        ],
        [
         117.889,
         39.332
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.851,
         39.364
        ],
        [
         117.851,
         39.364
        ],
        [
         117.811,
         39.355
        ],
        [
         117.805,
         39.373
        ],
        [
         117.785,
         39.377
        ],
        [
         117.745,
         39.355
        ],
        [
         117.671,
         39.358
        ],
        [
         117.67,
         39.323
        ],
        [
         117.595,
         39.349
        ],
        [
         117.536,
         39.338
        ],
        [
         117.521,
         39.357
        ],
        [
         117.571,
         39.405
        ],
        [
         117.601,
         39.419
        ],
        [
         117.614,
         39.407
        ],
        [
         117.669,
         39.412
        ],
        [
         117.673,
         39.387
        ],
        [
         117.7,
         39.407
        ],
        [
         117.766,
         39.401
        ]
       ]
      ],
      [
       [
        [
         117.805,
         39.373
        ],
        [
         117.852,
         39.381
        ],
        [
         117.847,
         39.408
        ],
        [
         117.766,
         39.401
        ],
        [
         117.785,
         39.377
        ],
        [
         117.805,
         39.373
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.467,
         40.65
        ],
        [
         117.413,
         40.605
        ],
        [
         117.43,
         40.576
        ],
        [
         117.39,
         40.562
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ],
        [
         117.27,
         40.561
        ],
        [
         117.248,
         40.54
        ],
        [
         117.263,
         40.513
        ],
        [
         117.209,
         40.502
        ],
        [
         117.264,
         40.442
        ],
        [
         117.234,
         40.417
        ],
        [
         117.226,
         40.369
        ],
        [
         117.243,
         40.369
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.295,
         40.278
        ],
        [
         117.331,
         40.29
        ],
        [
         117.351,
         40.23
        ],
        [
         117.39,
         40.228
        ],
        [
         117.416,
         40.249
        ],
        [
         117.45,
         40.253
        ],
        [
         117.505,
         40.227
        ],
        [
         117.549,
         40.233
        ],
        [
         117.572,
         40.219
        ],
        [
         117.577,
         40.179
        ],
        [
         117.61,
         40.16
        ],
        [
         117.61,
         40.16
        ],
        [
         117.613,
         40.158
        ],
        [
         117.613,
         40.158
        ],
        [
         117.652,
         40.123
        ],
        [
         117.652,
         40.123
        ],
        [
         117.654,
         40.115
        ],
        [
         117.654,
         40.115
        ],
        [
         117.656,
         40.11
        ],
        [
         117.656,
         40.11
        ],
        [
         117.675,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.719,
         40.082
        ],
        [
         117.753,
         40.082
        ],
        [
         117.776,
         40.06
        ],
        [
         117.748,
         40.047
        ],
        [
         117.744,
         40.018
        ],
        [
         117.769,
         40.022
        ],
        [
         117.769,
         40.022
        ],
        [
         117.793,
         40.006
        ],
        [
         117.793,
         40.006
        ],
        [
         117.795,
         39.997
        ],
        [
         117.795,
         39.997
        ],
        [
         117.782,
         39.967
        ],
        [
         117.782,
         39.967
        ],
        [
         117.756,
         39.965
        ],
        [
         117.691,
         39.985
        ],
        [
         117.671,
         39.974
        ],
        [
         117.615,
         39.973
        ],
        [
         117.595,
         39.995
        ],
        [
         117.595,
         39.995
        ],
        [
         117.546,
         39.999
        ],
        [
         117.535,
         39.955
        ],
        [
         117.515,
         39.947
        ],
        [
         117.513,
         39.911
        ],
        [
         117.513,
         39.911
        ],
        [
         117.512,
         39.909
        ],
        [
         117.512,
         39.909
        ],
        [
         117.508,
         39.902
        ],
        [
         117.508,
         39.902
        ],
        [
         117.529,
         39.859
        ],
        [
         117.529,
         39.859
        ],
        [
         117.562,
         39.8
        ],
        [
         117.546,
         39.776
        ],
        [
         117.561,
         39.755
        ],
        [
         117.596,
         39.746
        ],
        [
         117.578,
         39.727
        ],
        [
         117.627,
         39.704
        ],
        [
         117.669,
         39.667
        ],
        [
         117.663,
         39.636
        ],
        [
         117.637,
         39.603
        ],
        [
         117.654,
         39.575
        ],
        [
         117.685,
         39.589
        ],
        [
         117.707,
         39.576
        ],
        [
         117.716,
         39.53
        ],
        [
         117.745,
         39.548
        ],
        [
         117.754,
         39.58
        ],
        [
         117.754,
         39.58
        ],
        [
         117.767,
         39.599
        ],
        [
         117.83,
         39.59
        ],
        [
         117.868,
         39.597
        ],
        [
         117.934,
         39.574
        ],
        [
         117.905,
         39.534
        ],
        [
         117.912,
         39.517
        ],
        [
         117.912,
         39.517
        ],
        [
         117.9,
         39.474
        ],
        [
         117.87,
         39.455
        ],
        [
         117.872,
         39.412
        ],
        [
         117.847,
         39.408
        ],
        [
         117.852,
         39.381
        ],
        [
         117.805,
         39.373
        ],
        [
         117.811,
         39.355
        ],
        [
         117.851,
         39.364
        ],
        [
         117.851,
         39.364
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.854,
         39.328
        ],
        [
         117.855,
         39.328
        ],
        [
         117.889,
         39.332
        ],
        [
         117.92,
         39.318
        ],
        [
         117.92,
         39.318
        ],
        [
         117.966,
         39.315
        ],
        [
         117.966,
         39.315
        ],
        [
         117.973,
         39.312
        ],
        [
         117.973,
         39.312
        ],
        [
         117.979,
         39.301
        ],
        [
         117.979,
         39.301
        ],
        [
         117.982,
         39.299
        ],
        [
         117.982,
         39.299
        ],
        [
         118.024,
         39.289
        ],
        [
         118.024,
         39.289
        ],
        [
         118.037,
         39.265
        ],
        [
         118.065,
         39.256
        ],
        [
         118.065,
         39.231
        ],
        [
         118.035,
         39.219
        ],
        [
         118.026,
         39.202
        ],
        [
         118.07,
         39.214
        ],
        [
         118.078,
         39.202
        ],
        [
         118.125,
         39.183
        ],
        [
         118.163,
         39.136
        ],
        [
         118.191,
         39.081
        ],
        [
         118.2,
         39.068
        ],
        [
         118.2,
         40.9
        ],
        [
         115.4,
         40.9
        ],
        [
         115.4,
         38.13
        ],
        [
         117.759,
         38.13
        ],
        [
         117.771,
         38.135
        ],
        [
         117.767,
         38.159
        ],
        [
         117.789,
         38.181
        ],
        [
         117.809,
         38.228
        ],
        [
         117.849,
         38.255
        ],
        [
         117.896,
         38.302
        ],
        [
         117.949,
         38.347
        ],
        [
         117.958,
         38.376
        ],
        [
         117.937,
         38.388
        ],
        [
         117.846,
         38.368
        ],
        [
         117.781,
         38.374
        ],
        [
         117.73,
         38.425
        ],
        [
         117.725,
         38.457
        ],
        [
         117.679,
         38.477
        ],
        [
         117.645,
         38.528
        ],
        [
         117.686,
         38.539
        ],
        [
         117.638,
         38.545
        ],
        [
         117.639,
         38.627
        ],
        [
         117.558,
         38.614
        ],
        [
         117.479,
         38.616
        ],
        [
         117.432,
         38.602
        ],
        [
         117.369,
         38.565
        ],
        [
         117.253,
         38.556
        ],
        [
         117.238,
         38.581
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.151,
         38.618
        ],
        [
         117.11,
         38.585
        ],
        [
         117.071,
         38.608
        ],
        [
         117.055,
         38.639
        ],
        [
         117.068,
         38.681
        ],
        [
         117.039,
         38.688
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.877,
         38.681
        ],
        [
         116.859,
         38.741
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.746,
         38.754
        ],
        [
         116.738,
         38.785
        ],
        [
         116.751,
         38.831
        ],
        [
         116.723,
         38.853
        ],
        [
         116.722,
         38.897
        ],
        [
         116.708,
         38.932
        ],
        [
         116.728,
         38.975
        ],
        [
         116.755,
         39.003
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.909,
         39.151
        ],
        [
         116.87,
         39.154
        ],
        [
         116.856,
         39.216
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.89,
         39.338
        ],
        [
         116.871,
         39.358
        ],
        [
         116.829,
         39.339
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.378
        ],
        [
         116.84,
         39.413
        ],
        [
         116.876,
         39.435
        ],
        [
         116.832,
         39.436
        ],
        [
         116.785,
         39.466
        ],
        [
         116.821,
         39.482
        ],
        [
         116.82,
         39.529
        ],
        [
         116.787,
         39.554
        ],
        [
         116.808,
         39.576
        ],
        [
         116.812,
         39.616
        ],
        [
         116.791,
         39.596
        ],
        [
         116.749,
         39.62
        ],
        [
         116.709,
         39.618
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.621,
         39.602
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.508,
         39.551
        ],
        [
         116.473,
         39.553
        ],
        [
         116.478,
         39.535
        ],
        [
         116.438,
         39.527
        ],
        [
         116.444,
         39.51
        ],
        [
         116.402,
         39.528
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.482
        ],
        [
         116.455,
         39.453
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.338,
         39.456
        ],
        [
         116.307,
         39.488
        ],
        [
         116.258,
         39.5
        ],
        [
         116.241,
         39.564
        ],
        [
         116.199,
         39.589
        ],
        [
         116.152,
         39.583
        ],
        [
         116.13,
         39.568
        ],
        [
         116.099,
         39.575
        ],
        [
         116.036,
         39.572
        ],
        [
         116.026,
         39.588
        ],
        [
         115.995,
         39.577
        ],
        [
         115.978,
         39.596
        ],
        [
         115.957,
         39.561
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.828,
         39.541
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.753,
         39.516
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.668,
         39.615
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.587,
         39.59
        ],
        [
         115.546,
         39.619
        ],
        [
         115.518,
         39.597
        ],
        [
         115.522,
         39.64
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.492,
         39.67
        ],
        [
         115.487,
         39.742
        ],
        [
         115.44,
         39.752
        ],
        [
         115.444,
         39.786
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.506,
         39.784
        ],
        [
         115.553,
         39.795
        ],
        [
         115.567,
         39.816
        ],
        [
         115.514,
         39.838
        ],
        [
         115.526,
         39.876
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.523,
         39.899
        ],
        [
         115.481,
         39.936
        ],
        [
         115.426,
         39.951
        ],
        [
         115.429,
         39.984
        ],
        [
         115.45,
         39.993
        ],
        [
         115.455,
         40.03
        ],
        [
         115.485,
         40.04
        ],
        [
         115.527,
         40.076
        ],
        [
         115.591,
         40.096
        ],
        [
         115.6,
         40.12
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.774,
         40.176
        ],
        [
         115.806,
         40.153
        ],
        [
         115.848,
         40.147
        ],
        [
         115.856,
         40.189
        ],
        [
         115.87,
         40.186
        ],
        [
         115.899,
         40.234
        ],
        [
         115.969,
         40.264
        ],
        [
         115.952,
         40.282
        ],
        [
         115.918,
         40.354
        ],
        [
         115.864,
         40.359
        ],
        [
         115.772,
         40.444
        ],
        [
         115.781,
         40.493
        ],
        [
         115.736,
         40.503
        ],
        [
         115.755,
         40.54
        ],
        [
         115.785,
         40.558
        ],
        [
         115.82,
         40.559
        ],
        [
         115.828,
         40.588
        ],
        [
         115.885,
         40.595
        ],
        [
         115.908,
         40.617
        ],
        [
         115.972,
         40.602
        ],
        [
         115.982,
         40.579
        ],
        [
         116.005,
         40.584
        ],
        [
         116.099,
         40.631
        ],
        [
         116.134,
         40.667
        ],
        [
         116.163,
         40.662
        ],
        [
         116.172,
         40.696
        ],
        [
         116.205,
         40.74
        ],
        [
         116.22,
         40.744
        ],
        [
         116.247,
         40.792
        ],
        [
         116.273,
         40.763
        ],
        [
         116.311,
         40.755
        ],
        [
         116.317,
         40.772
        ],
        [
         116.454,
         40.766
        ],
        [
         116.466,
         40.774
        ],
        [
         116.438,
         40.819
        ],
        [
         116.34,
         40.9
        ],
        [
         116.476,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.477,
         40.9
        ],
        [
         116.736,
         40.9
        ],
        [
         116.76,
         40.89
        ],
        [
         116.813,
         40.848
        ],
        [
         116.848,
         40.839
        ],
        [
         116.924,
         40.774
        ],
        [
         116.927,
         40.745
        ],
        [
         116.965,
         40.71
        ],
        [
         117.012,
         40.694
        ],
        [
         117.112,
         40.707
        ],
        [
         117.117,
         40.7
        ],
        [
         117.208,
         40.695
        ],
        [
         117.278,
         40.664
        ],
        [
         117.32,
         40.658
        ],
        [
         117.342,
         40.674
        ],
        [
         117.409,
         40.687
        ],
        [
         117.494,
         40.675
        ],
        [
         117.515,
         40.66
        ],
        [
         117.501,
         40.637
        ],
        [
         117.467,
         40.65
        ],
        [
         117.467,
         40.65
        ]
       ]
      ],
      [
       [
        [
         117.21,
         40.082
        ],
        [
         117.204,
         40.07
        ],
        [
         117.16,
         40.077
        ],
        [
         117.14,
         40.064
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.052,
         40.06
        ],
        [
         117.025,
         40.03
        ],
        [
         116.945,
         40.041
        ],
        [
         116.928,
         40.055
        ],
        [
         116.868,
         40.042
        ],
        [
         116.831,
         40.051
        ],
        [
         116.82,
         40.028
        ],
        [
         116.781,
         40.035
        ],
        [
         116.758,
         39.968
        ],
        [
         116.783,
         39.948
        ],
        [
         116.784,
         39.891
        ],
        [
         116.812,
         39.89
        ],
        [
         116.866,
         39.844
        ],
        [
         116.908,
         39.832
        ],
        [
         116.918,
         39.846
        ],
        [
         116.949,
         39.779
        ],
        [
         116.902,
         39.764
        ],
        [
         116.917,
         39.731
        ],
        [
         116.887,
         39.725
        ],
        [
         116.89,
         39.688
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.964,
         39.643
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         117.016,
         39.654
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.153,
         39.624
        ],
        [
         117.178,
         39.645
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.162,
         39.749
        ],
        [
         117.206,
         39.764
        ],
        [
         117.158,
         39.797
        ],
        [
         117.156,
         39.817
        ],
        [
         117.192,
         39.833
        ],
        [
         117.252,
         39.834
        ],
        [
         117.248,
         39.861
        ],
        [
         117.228,
         39.853
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.151,
         39.945
        ],
        [
         117.198,
         39.993
        ],
        [
         117.192,
         40.066
        ],
        [
         117.21,
         40.082
        ]
       ]
      ],
      [
       [
        [
         117.785,
         39.377
        ],
        [
         117.766,
         39.401
        ],
        [
         117.7,
         39.407
        ],
        [
         117.673,
         39.387
        ],
        [
         117.669,
         39.412
        ],
        [
         117.614,
         39.407
        ],
        [
         117.601,
         39.419
        ],
        [
         117.571,
         39.405
        ],
        [
         117.521,
         39.357
        ],
        [
         117.536,
         39.338
        ],
        [
         117.595,
         39.349
        ],
        [
         117.67,
         39.323
        ],
        [
         117.671,
         39.358
        ],
        [
         117.745,
         39.355
        ],
        [
         117.785,
         39.377
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
         118.2,
         38.13
        ],
        [
         118.2,
         38.164
        ],
        [
         118.178,
         38.186
        ],
        [
         118.112,
         38.21
        ],
        [
         118.045,
         38.214
        ],
        [
         118.019,
         38.202
        ],
        [
         117.897,
         38.279
        ],
        [
         117.896,
         38.302
        ],
        [
         117.849,
         38.255
        ],
        [
         117.809,
         38.228
        ],
        [
         117.789,
         38.181
        ],
        [
         117.767,
         38.159
        ],
        [
         117.771,
         38.135
        ],
        [
         117.759,
         38.13
        ],
        [
         118.2,
         38.13
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   115.4,
   38.13,
   118.2,
   40.9
  ]
 }
};
