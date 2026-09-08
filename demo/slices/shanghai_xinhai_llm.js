// 本文件由 tools/build.py 自动生成（切片 shanghai_xinhai_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanghai_xinhai_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanghai_xinhai_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "jiangnan",
  "province": "shanghai",
  "title": "上海光复与沪军都督府（1911）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "shanghai",
  "dossier_event": "event:ev_shanghai_xinhai_llm_01",
  "vocab_pack": "inline:shanghai_xinhai_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming_qing",
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
    "note": "上海光复与沪军都督府（1911）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "上海光复与沪军都督府（1911）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "上海光复与沪军都督府（1911）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "上海光复与沪军都督府（1911）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shanghai_xinhai_llm",
  "key": "shanghai_xinhai_llm",
  "scene_id": "shanghai_xinhai_llm"
 },
 "sources": [
  {
   "id": "shanghai_xinhai_src",
   "title": "近代上海光复史料",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "上海通志馆",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shanghai",
   "name": "上海",
   "type": "city",
   "modern": "中国上海市",
   "note": "光复之地",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "wuchang",
   "name": "武昌",
   "type": "city",
   "modern": "中国武汉市武昌区",
   "note": "首义之地",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.3,
   "lat": 30.59,
   "geo_note": "楚党核心，今湖北武汉",
   "elev": 40
  },
  {
   "id": "zhizaoju",
   "name": "制造局",
   "type": "fortress",
   "modern": "中国上海市",
   "note": "攻击目标",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
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
   "name": "陈其美",
   "role": "沪军都督",
   "note": "上海光复主要领导人",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p02",
   "name": "李平书",
   "role": "上海士绅",
   "note": "参与响应起义",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p03",
   "name": "武昌首义者",
   "role": "革命党人",
   "note": "武昌起义发动者",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "光复时间",
   "value_text": "九月初三光复上海",
   "time": {
    "era_text": "辛亥年九月初三",
    "start": "1911-10-24"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shanghai_xinhai_llm_02",
   "predicate": "成立时间",
   "value_text": "九月十四成立都督府",
   "time": {
    "era_text": "辛亥年九月十四",
    "start": "1911-11-04"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "十四日，沪军都督府成立，陈其美任都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "十四日，沪军都督府成立，陈其美任都督",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p01",
   "predicate": "职务",
   "value_text": "陈其美任沪军都督",
   "time": {
    "era_text": "辛亥年九月十四",
    "start": "1911-11-04"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "陈其美任都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "陈其美任都督",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shanghai_xinhai_llm_02",
   "predicate": "政策",
   "value_text": "颁剪辫令、安民告示",
   "time": {
    "era_text": "辛亥年九月十四",
    "start": "1911-11-04"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "颁剪辫令、安民告示",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "颁剪辫令、安民告示",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "参与力量",
   "value_text": "商团、巡防营、学生军",
   "time": {
    "era_text": "辛亥年九月初三",
    "start": "1911-10-24"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "率商团、巡防营、学生军攻制造局",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率商团、巡防营、学生军攻制造局",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "影响",
   "value_text": "东南各省光复之先声",
   "time": {
    "era_text": "辛亥年",
    "start": "1911"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "是为东南各省光复之先声",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "是为东南各省光复之先声",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "event:ev_shanghai_xinhai_llm_02",
   "predicate": "后续行动",
   "value_text": "参预筹组临时政府",
   "time": {
    "era_text": "辛亥年",
    "start": "1911"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "参预筹组临时政府",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "参预筹组临时政府",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "背景",
   "value_text": "武昌首义后响应",
   "time": {
    "era_text": "辛亥年秋",
    "start": "1911"
   },
   "place": "wuchang",
   "source": "shanghai_xinhai_src",
   "quote": "武昌首义，上海党人谋响应",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武昌首义，上海党人谋响应",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "person:SHA__p02",
   "predicate": "角色",
   "value_text": "李平书参与响应",
   "time": {
    "era_text": "辛亥年",
    "start": "1911"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "陈其美、李平书等谋响应",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "陈其美、李平书等谋响应",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:shanghai",
   "predicate": "特点",
   "value_text": "租界林立、舆论辐辏",
   "time": {
    "era_text": "辛亥年",
    "start": "1911"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "租界林立、舆论辐辏之上海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "租界林立、舆论辐辏之上海",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "伤亡",
   "value_text": "原文未载伤亡",
   "time": {
    "era_text": "辛亥年九月初三",
    "start": "1911-10-24"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "原文未载伤亡",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "上海地方志或报章",
    "skills": [
     "史料检索"
    ],
    "accept": "补充伤亡数据"
   },
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "原文未载伤亡",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shanghai_xinhai_llm_02",
   "predicate": "都督府组织",
   "value_text": "具体机构设置未详",
   "time": {
    "era_text": "辛亥年九月十四",
    "start": "1911-11-04"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "原文未载机构",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "lead": {
    "where": "沪军都督府档案",
    "skills": [
     "档案研究"
    ],
    "accept": "补充组织架构"
   },
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "原文未载机构",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "predicate": "战役损失",
   "value_text": "清方记载或不同",
   "time": {
    "era_text": "辛亥年九月初三",
    "start": "1911-10-24"
   },
   "place": "shanghai",
   "source": "shanghai_xinhai_src",
   "quote": "清方记载或不同",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "待考",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清方记载或不同",
   "source_text": "辛亥秋，武昌首义，上海党人陈其美、李平书等谋响应。九月初三，陈其美率商团、巡防营、学生军攻制造局，旋即光复全沪。十四日，沪军都督府成立，陈其美任都督，颁剪辫令、安民告示，参预筹组临时政府。是为东南各省光复之先声，租界林立、舆论辐辏之上海，由此进入共和之新纪元。",
   "dim_source": "fallback",
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
   "id": "ev_shanghai_xinhai_llm_01",
   "subject": "event:ev_shanghai_xinhai_llm_01",
   "year": 1911,
   "era": "辛亥年九月初三",
   "title": "上海光复",
   "kind": "战事",
   "text": "陈其美率众攻制造局，光复全沪",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanghai_xinhai_llm_02",
   "subject": "event:ev_shanghai_xinhai_llm_02",
   "year": 1911,
   "era": "辛亥年九月十四",
   "title": "沪军都督府成立",
   "kind": "建置",
   "text": "陈其美任都督，颁剪辫令",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "wuchang",
   "to": "shanghai",
   "type": "reinforcement",
   "label": "武昌首义影响上海",
   "_source_idx": 0,
   "_source_name": "近代上海光复史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "shanghai",
   "party": "后世官修",
   "start": 1871,
   "end": 1951,
   "timeline": "main"
  },
  {
   "place_id": "wuchang",
   "party": "后世官修",
   "start": 1871,
   "end": 1951,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "wuchang",
   "name": "武昌",
   "lon": 114.3,
   "lat": 30.59,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1871,
  1951
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
        113.3,
        29.59
       ],
       [
        113.3,
        31.59
       ],
       [
        115.3,
        31.59
       ],
       [
        115.3,
        29.59
       ],
       [
        113.3,
        29.59
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
         115.3,
         29.59
        ],
        [
         115.3,
         29.632
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
         115.113,
         29.685
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
         115.142,
         29.59
        ],
        [
         115.3,
         29.59
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
         114.555,
         31.59
        ],
        [
         114.561,
         31.561
        ],
        [
         114.573,
         31.554
        ],
        [
         114.617,
         31.585
        ],
        [
         114.642,
         31.582
        ],
        [
         114.696,
         31.526
        ],
        [
         114.779,
         31.521
        ],
        [
         114.789,
         31.48
        ],
        [
         114.83,
         31.459
        ],
        [
         114.87,
         31.479
        ],
        [
         114.884,
         31.469
        ],
        [
         114.962,
         31.495
        ],
        [
         114.995,
         31.471
        ],
        [
         115.023,
         31.528
        ],
        [
         115.096,
         31.508
        ],
        [
         115.115,
         31.53
        ],
        [
         115.107,
         31.568
        ],
        [
         115.12,
         31.59
        ],
        [
         115.179,
         31.59
        ],
        [
         115.213,
         31.555
        ],
        [
         115.236,
         31.555
        ],
        [
         115.218,
         31.515
        ],
        [
         115.211,
         31.442
        ],
        [
         115.253,
         31.422
        ],
        [
         115.251,
         31.392
        ],
        [
         115.3,
         31.384
        ],
        [
         115.3,
         31.59
        ],
        [
         114.555,
         31.59
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
         113.3,
         31.59
        ],
        [
         113.3,
         29.619
        ],
        [
         113.378,
         29.703
        ],
        [
         113.572,
         29.849
        ],
        [
         113.575,
         29.809
        ],
        [
         113.551,
         29.768
        ],
        [
         113.559,
         29.727
        ],
        [
         113.54,
         29.7
        ],
        [
         113.547,
         29.676
        ],
        [
         113.606,
         29.667
        ],
        [
         113.663,
         29.684
        ],
        [
         113.681,
         29.643
        ],
        [
         113.704,
         29.635
        ],
        [
         113.732,
         29.59
        ],
        [
         115.142,
         29.59
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
         115.113,
         29.685
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
         115.3,
         29.632
        ],
        [
         115.3,
         31.384
        ],
        [
         115.251,
         31.392
        ],
        [
         115.253,
         31.422
        ],
        [
         115.211,
         31.442
        ],
        [
         115.218,
         31.515
        ],
        [
         115.236,
         31.555
        ],
        [
         115.213,
         31.555
        ],
        [
         115.179,
         31.59
        ],
        [
         115.12,
         31.59
        ],
        [
         115.107,
         31.568
        ],
        [
         115.115,
         31.53
        ],
        [
         115.096,
         31.508
        ],
        [
         115.023,
         31.528
        ],
        [
         114.995,
         31.471
        ],
        [
         114.962,
         31.495
        ],
        [
         114.884,
         31.469
        ],
        [
         114.87,
         31.479
        ],
        [
         114.83,
         31.459
        ],
        [
         114.789,
         31.48
        ],
        [
         114.779,
         31.521
        ],
        [
         114.696,
         31.526
        ],
        [
         114.642,
         31.582
        ],
        [
         114.617,
         31.585
        ],
        [
         114.573,
         31.554
        ],
        [
         114.561,
         31.561
        ],
        [
         114.555,
         31.59
        ],
        [
         113.3,
         31.59
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.3,
         29.59
        ],
        [
         113.732,
         29.59
        ],
        [
         113.704,
         29.635
        ],
        [
         113.681,
         29.643
        ],
        [
         113.663,
         29.684
        ],
        [
         113.606,
         29.667
        ],
        [
         113.547,
         29.676
        ],
        [
         113.54,
         29.7
        ],
        [
         113.559,
         29.727
        ],
        [
         113.551,
         29.768
        ],
        [
         113.575,
         29.809
        ],
        [
         113.572,
         29.849
        ],
        [
         113.378,
         29.703
        ],
        [
         113.3,
         29.619
        ],
        [
         113.3,
         29.59
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.3,
        30.418
       ],
       [
        113.381,
        30.407
       ],
       [
        113.512,
        30.443
       ],
       [
        113.602,
        30.538
       ],
       [
        113.672,
        30.597
       ],
       [
        113.769,
        30.626
       ],
       [
        113.801,
        30.622
       ],
       [
        113.838,
        30.63
       ],
       [
        113.86,
        30.644
       ],
       [
        113.9,
        30.637
       ],
       [
        113.926,
        30.644
       ],
       [
        113.939,
        30.66
       ],
       [
        113.964,
        30.657
       ],
       [
        114.009,
        30.615
       ],
       [
        114.096,
        30.586
       ],
       [
        114.288,
        30.572
       ]
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.3,
        29.621
       ],
       [
        113.53,
        29.832
       ],
       [
        113.696,
        29.949
       ],
       [
        113.76,
        29.939
       ],
       [
        113.86,
        29.972
       ],
       [
        113.995,
        30.05
       ],
       [
        114.011,
        30.124
       ],
       [
        113.909,
        30.196
       ],
       [
        113.885,
        30.246
       ],
       [
        113.94,
        30.276
       ],
       [
        113.99,
        30.279
       ],
       [
        114.032,
        30.253
       ],
       [
        114.116,
        30.328
       ],
       [
        114.288,
        30.572
       ],
       [
        114.303,
        30.593
       ],
       [
        114.396,
        30.664
       ],
       [
        114.472,
        30.661
       ],
       [
        114.558,
        30.603
       ],
       [
        114.662,
        30.582
       ],
       [
        114.784,
        30.598
       ],
       [
        114.841,
        30.565
       ],
       [
        114.833,
        30.482
       ],
       [
        114.885,
        30.423
       ],
       [
        114.997,
        30.387
       ],
       [
        115.058,
        30.336
       ],
       [
        115.067,
        30.269
       ],
       [
        115.102,
        30.229
       ],
       [
        115.16,
        30.216
       ],
       [
        115.252,
        30.128
       ],
       [
        115.3,
        30.065
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.35,
        30.196
       ],
       [
        114.371,
        30.211
       ],
       [
        114.395,
        30.236
       ],
       [
        114.406,
        30.268
       ],
       [
        114.444,
        30.285
       ],
       [
        114.496,
        30.289
       ],
       [
        114.501,
        30.311
       ],
       [
        114.474,
        30.333
       ],
       [
        114.458,
        30.364
       ],
       [
        114.501,
        30.366
       ],
       [
        114.539,
        30.345
       ],
       [
        114.603,
        30.3
       ],
       [
        114.623,
        30.258
       ],
       [
        114.642,
        30.133
       ],
       [
        114.623,
        30.096
       ],
       [
        114.581,
        30.137
       ],
       [
        114.542,
        30.188
       ],
       [
        114.509,
        30.194
       ],
       [
        114.474,
        30.158
       ],
       [
        114.445,
        30.085
       ],
       [
        114.408,
        30.106
       ],
       [
        114.365,
        30.165
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ]
      ]
     ]
    },
    "n": "Liangzi Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.451,
        29.94
       ],
       [
        113.454,
        29.914
       ],
       [
        113.426,
        29.876
       ],
       [
        113.391,
        29.826
       ],
       [
        113.369,
        29.785
       ],
       [
        113.34,
        29.76
       ],
       [
        113.312,
        29.749
       ],
       [
        113.3,
        29.759
       ],
       [
        113.3,
        29.889
       ],
       [
        113.302,
        29.888
       ],
       [
        113.331,
        29.894
       ],
       [
        113.362,
        29.949
       ],
       [
        113.406,
        29.953
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ]
      ]
     ]
    },
    "n": "Hong Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.839,
        30.287
       ],
       [
        114.812,
        30.283
       ],
       [
        114.783,
        30.278
       ],
       [
        114.753,
        30.283
       ],
       [
        114.739,
        30.279
       ],
       [
        114.743,
        30.263
       ],
       [
        114.76,
        30.238
       ],
       [
        114.781,
        30.221
       ],
       [
        114.778,
        30.215
       ],
       [
        114.762,
        30.211
       ],
       [
        114.735,
        30.212
       ],
       [
        114.704,
        30.212
       ],
       [
        114.679,
        30.228
       ],
       [
        114.679,
        30.25
       ],
       [
        114.68,
        30.277
       ],
       [
        114.674,
        30.3
       ],
       [
        114.713,
        30.33
       ],
       [
        114.764,
        30.345
       ],
       [
        114.784,
        30.344
       ],
       [
        114.806,
        30.345
       ],
       [
        114.834,
        30.327
       ],
       [
        114.846,
        30.302
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.601,
        30.662
       ],
       [
        114.622,
        30.656
       ],
       [
        114.64,
        30.66
       ],
       [
        114.649,
        30.674
       ],
       [
        114.646,
        30.715
       ],
       [
        114.674,
        30.724
       ],
       [
        114.703,
        30.735
       ],
       [
        114.719,
        30.751
       ],
       [
        114.746,
        30.738
       ],
       [
        114.781,
        30.701
       ],
       [
        114.786,
        30.663
       ],
       [
        114.756,
        30.65
       ],
       [
        114.696,
        30.613
       ],
       [
        114.622,
        30.608
       ],
       [
        114.584,
        30.65
       ],
       [
        114.586,
        30.663
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.601,
        30.344
       ],
       [
        114.553,
        30.384
       ],
       [
        114.499,
        30.418
       ],
       [
        114.482,
        30.431
       ],
       [
        114.495,
        30.439
       ],
       [
        114.533,
        30.435
       ],
       [
        114.575,
        30.405
       ],
       [
        114.601,
        30.399
       ],
       [
        114.631,
        30.42
       ],
       [
        114.633,
        30.44
       ],
       [
        114.629,
        30.456
       ],
       [
        114.607,
        30.483
       ],
       [
        114.609,
        30.496
       ],
       [
        114.64,
        30.486
       ],
       [
        114.666,
        30.49
       ],
       [
        114.678,
        30.497
       ],
       [
        114.701,
        30.512
       ],
       [
        114.739,
        30.494
       ],
       [
        114.756,
        30.477
       ],
       [
        114.752,
        30.463
       ],
       [
        114.748,
        30.443
       ],
       [
        114.753,
        30.429
       ],
       [
        114.727,
        30.42
       ],
       [
        114.683,
        30.397
       ],
       [
        114.655,
        30.346
       ],
       [
        114.623,
        30.339
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.301,
        30.025
       ],
       [
        114.289,
        30.002
       ],
       [
        114.252,
        29.972
       ],
       [
        114.244,
        29.938
       ],
       [
        114.264,
        29.915
       ],
       [
        114.255,
        29.906
       ],
       [
        114.218,
        29.901
       ],
       [
        114.171,
        29.921
       ],
       [
        114.143,
        29.988
       ],
       [
        114.147,
        30.083
       ],
       [
        114.177,
        30.114
       ],
       [
        114.218,
        30.141
       ],
       [
        114.249,
        30.141
       ],
       [
        114.246,
        30.115
       ],
       [
        114.237,
        30.084
       ],
       [
        114.253,
        30.045
       ],
       [
        114.273,
        30.044
       ],
       [
        114.294,
        30.043
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ]
      ]
     ]
    },
    "n": "Huangtang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.158,
        29.872
       ],
       [
        114.137,
        29.862
       ],
       [
        114.114,
        29.883
       ],
       [
        114.087,
        29.934
       ],
       [
        114.063,
        29.927
       ],
       [
        114.029,
        29.898
       ],
       [
        113.99,
        29.879
       ],
       [
        113.969,
        29.88
       ],
       [
        113.963,
        29.892
       ],
       [
        113.984,
        29.916
       ],
       [
        114.003,
        29.942
       ],
       [
        113.996,
        29.959
       ],
       [
        113.97,
        29.963
       ],
       [
        113.944,
        29.966
       ],
       [
        113.941,
        29.981
       ],
       [
        114.019,
        30.001
       ],
       [
        114.074,
        30.027
       ],
       [
        114.101,
        30.022
       ],
       [
        114.13,
        29.935
       ],
       [
        114.152,
        29.89
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "_bbox": [
   113.3,
   29.59,
   115.3,
   31.59
  ]
 }
};
