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
   "lon": 121.47,
   "lat": 31.23,
   "geo_note": "今上海市",
   "elev": 11
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
   "lon": 121.47,
   "lat": 31.22,
   "geo_note": "今上海市（江南制造局）",
   "elev": 11
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
   "place_id": "shanghai",
   "name": "上海",
   "lon": 121.47,
   "lat": 31.23,
   "region": "jiangnan"
  },
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.577,
       31.637
      ],
      [
       121.492,
       31.694
      ],
      [
       121.339,
       31.797
      ],
      [
       121.227,
       31.758
      ],
      [
       121.52,
       31.55
      ],
      [
       121.863,
       31.492
      ],
      [
       121.808,
       31.552
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       122.284,
       30.068
      ],
      [
       121.969,
       30.143
      ],
      [
       122.024,
       30.013
      ],
      [
       122.282,
       29.944
      ],
      [
       122.322,
       30.031
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       122.12,
       29.782
      ],
      [
       122.043,
       29.736
      ],
      [
       122.169,
       29.66
      ],
      [
       122.165,
       29.701
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       122.402,
       29.95
      ],
      [
       122.332,
       29.935
      ],
      [
       122.394,
       29.846
      ],
      [
       122.402,
       29.95
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        121.963,
        29.514
       ],
       [
        121.888,
        29.628
       ],
       [
        121.695,
        29.514
       ],
       [
        121.575,
        29.537
       ],
       [
        121.906,
        29.78
       ],
       [
        122.017,
        29.888
       ],
       [
        121.812,
        29.952
       ],
       [
        121.433,
        30.227
       ],
       [
        121.258,
        30.304
       ],
       [
        120.904,
        30.161
       ],
       [
        120.495,
        30.303
       ],
       [
        120.261,
        30.263
       ],
       [
        120.195,
        30.241
       ],
       [
        120.45,
        30.388
       ],
       [
        120.821,
        30.355
       ],
       [
        120.938,
        30.47
       ],
       [
        121.31,
        30.7
       ],
       [
        121.528,
        30.841
       ],
       [
        121.769,
        30.87
       ],
       [
        121.834,
        31.062
       ],
       [
        121.661,
        31.32
       ],
       [
        121.205,
        31.628
       ],
       [
        120.938,
        31.75
       ],
       [
        120.752,
        31.923
       ],
       [
        120.497,
        32.02
       ],
       [
        120.192,
        31.906
       ],
       [
        120.074,
        31.96
       ],
       [
        120.184,
        31.966
       ],
       [
        120.661,
        32.081
       ],
       [
        120.974,
        31.869
       ],
       [
        121.266,
        31.863
       ],
       [
        121.681,
        31.712
       ],
       [
        121.866,
        31.704
       ],
       [
        121.832,
        31.9
       ],
       [
        121.674,
        32.051
       ],
       [
        121.451,
        32.153
       ],
       [
        121.402,
        32.306
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
        121.863,
        31.492
       ],
       [
        121.52,
        31.55
       ],
       [
        121.227,
        31.758
       ],
       [
        121.339,
        31.797
       ],
       [
        121.492,
        31.694
       ],
       [
        121.577,
        31.637
       ],
       [
        121.844,
        31.526
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
        122.296,
        29.963
       ],
       [
        122.158,
        30.001
       ],
       [
        121.978,
        30.064
       ],
       [
        122.111,
        30.14
       ],
       [
        122.322,
        30.031
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
        122.173,
        29.679
       ],
       [
        122.084,
        29.725
       ],
       [
        122.062,
        29.773
       ],
       [
        122.165,
        29.701
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
        122.404,
        29.892
       ],
       [
        122.368,
        29.853
       ],
       [
        122.351,
        29.955
       ],
       [
        122.404,
        29.892
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
        113.224,
        29.514
       ],
       [
        121.402,
        32.306
       ],
       [
        121.451,
        32.153
       ],
       [
        121.674,
        32.051
       ],
       [
        121.832,
        31.9
       ],
       [
        121.866,
        31.704
       ],
       [
        121.681,
        31.712
       ],
       [
        121.266,
        31.863
       ],
       [
        120.974,
        31.869
       ],
       [
        120.661,
        32.081
       ],
       [
        120.184,
        31.966
       ],
       [
        120.074,
        31.96
       ],
       [
        120.192,
        31.906
       ],
       [
        120.497,
        32.02
       ],
       [
        120.752,
        31.923
       ],
       [
        120.938,
        31.75
       ],
       [
        121.205,
        31.628
       ],
       [
        121.661,
        31.32
       ],
       [
        121.834,
        31.062
       ],
       [
        121.769,
        30.87
       ],
       [
        121.528,
        30.841
       ],
       [
        121.31,
        30.7
       ],
       [
        120.938,
        30.47
       ],
       [
        120.821,
        30.355
       ],
       [
        120.45,
        30.388
       ],
       [
        120.195,
        30.241
       ],
       [
        120.261,
        30.263
       ],
       [
        120.495,
        30.303
       ],
       [
        120.904,
        30.161
       ],
       [
        121.258,
        30.304
       ],
       [
        121.433,
        30.227
       ],
       [
        121.812,
        29.952
       ],
       [
        122.017,
        29.888
       ],
       [
        121.906,
        29.78
       ],
       [
        121.575,
        29.537
       ],
       [
        121.695,
        29.514
       ],
       [
        121.888,
        29.628
       ],
       [
        121.963,
        29.514
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
         120.901,
         31.017
        ],
        [
         120.949,
         31.03
        ],
        [
         121.001,
         30.938
        ],
        [
         121.02,
         30.872
        ],
        [
         121.038,
         30.814
        ],
        [
         121.098,
         30.857
        ],
        [
         121.123,
         30.779
        ],
        [
         121.217,
         30.786
        ],
        [
         121.272,
         30.724
        ],
        [
         121.362,
         30.68
        ],
        [
         121.517,
         30.775
        ],
        [
         121.681,
         30.819
        ],
        [
         121.944,
         30.777
        ],
        [
         121.955,
         30.826
        ],
        [
         121.991,
         30.969
        ],
        [
         121.947,
         31.066
        ],
        [
         121.722,
         31.304
        ],
        [
         121.521,
         31.395
        ],
        [
         121.344,
         31.512
        ],
        [
         121.301,
         31.499
        ],
        [
         121.242,
         31.493
        ],
        [
         121.143,
         31.392
        ],
        [
         121.13,
         31.344
        ],
        [
         121.09,
         31.292
        ],
        [
         121.077,
         31.158
        ],
        [
         120.93,
         31.141
        ],
        [
         120.859,
         31.1
        ],
        [
         120.901,
         31.017
        ]
       ]
      ],
      [
       [
        [
         121.975,
         31.617
        ],
        [
         121.643,
         31.698
        ],
        [
         121.499,
         31.753
        ],
        [
         121.385,
         31.833
        ],
        [
         121.265,
         31.864
        ],
        [
         121.119,
         31.759
        ],
        [
         121.289,
         31.617
        ],
        [
         121.395,
         31.585
        ],
        [
         121.547,
         31.531
        ],
        [
         121.683,
         31.491
        ],
        [
         121.891,
         31.429
        ],
        [
         121.996,
         31.493
        ]
       ]
      ],
      [
       [
        [
         121.796,
         31.33
        ],
        [
         121.742,
         31.407
        ],
        [
         121.567,
         31.483
        ],
        [
         121.51,
         31.482
        ],
        [
         121.728,
         31.355
        ],
        [
         121.785,
         31.311
        ]
       ]
      ],
      [
       [
        [
         121.802,
         31.357
        ],
        [
         121.841,
         31.295
        ],
        [
         122.016,
         31.282
        ],
        [
         122.123,
         31.307
        ],
        [
         122.041,
         31.324
        ],
        [
         121.846,
         31.375
        ],
        [
         121.802,
         31.357
        ]
       ]
      ],
      [
       [
        [
         121.627,
         31.445
        ],
        [
         121.579,
         31.48
        ]
       ]
      ],
      [
       [
        [
         121.944,
         31.216
        ],
        [
         121.996,
         31.161
        ],
        [
         121.951,
         31.229
        ]
       ]
      ],
      [
       [
        [
         121.883,
         31.241
        ],
        [
         121.924,
         31.234
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         118.664,
         32.306
        ],
        [
         118.675,
         32.25
        ],
        [
         118.511,
         32.194
        ],
        [
         118.501,
         32.122
        ],
        [
         118.394,
         32.076
        ],
        [
         118.364,
         31.93
        ],
        [
         118.467,
         31.858
        ],
        [
         118.482,
         31.778
        ],
        [
         118.522,
         31.743
        ],
        [
         118.572,
         31.746
        ],
        [
         118.654,
         31.73
        ],
        [
         118.643,
         31.672
        ],
        [
         118.736,
         31.633
        ],
        [
         118.774,
         31.683
        ],
        [
         118.859,
         31.624
        ],
        [
         118.886,
         31.519
        ],
        [
         118.852,
         31.394
        ],
        [
         118.768,
         31.364
        ],
        [
         118.721,
         31.323
        ],
        [
         118.757,
         31.28
        ],
        [
         118.871,
         31.242
        ],
        [
         119.015,
         31.242
        ],
        [
         119.107,
         31.251
        ],
        [
         119.198,
         31.295
        ],
        [
         119.267,
         31.25
        ],
        [
         119.338,
         31.259
        ],
        [
         119.374,
         31.259
        ],
        [
         119.392,
         31.174
        ],
        [
         119.461,
         31.156
        ],
        [
         119.6,
         31.109
        ],
        [
         119.678,
         31.168
        ],
        [
         119.716,
         31.17
        ],
        [
         119.81,
         31.149
        ],
        [
         119.878,
         31.161
        ],
        [
         119.946,
         31.106
        ],
        [
         120.001,
         31.027
        ],
        [
         120.111,
         30.956
        ],
        [
         120.224,
         30.927
        ],
        [
         120.371,
         30.949
        ],
        [
         120.423,
         30.903
        ],
        [
         120.442,
         30.861
        ],
        [
         120.489,
         30.764
        ],
        [
         120.564,
         30.836
        ],
        [
         120.655,
         30.847
        ],
        [
         120.713,
         30.885
        ],
        [
         120.685,
         30.955
        ],
        [
         120.746,
         30.962
        ],
        [
         120.821,
         31.007
        ],
        [
         120.901,
         31.017
        ],
        [
         120.859,
         31.1
        ],
        [
         120.93,
         31.141
        ],
        [
         121.077,
         31.158
        ],
        [
         121.09,
         31.292
        ],
        [
         121.13,
         31.344
        ],
        [
         121.143,
         31.392
        ],
        [
         121.242,
         31.493
        ],
        [
         121.301,
         31.499
        ],
        [
         121.344,
         31.512
        ],
        [
         121.289,
         31.617
        ],
        [
         121.119,
         31.759
        ],
        [
         121.265,
         31.864
        ],
        [
         121.385,
         31.833
        ],
        [
         121.499,
         31.753
        ],
        [
         121.643,
         31.698
        ],
        [
         121.975,
         31.617
        ],
        [
         121.889,
         31.866
        ],
        [
         121.772,
         32.033
        ],
        [
         121.525,
         32.136
        ],
        [
         121.459,
         32.177
        ],
        [
         121.494,
         32.264
        ],
        [
         121.446,
         32.306
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
         121.969,
         29.514
        ],
        [
         121.995,
         29.545
        ],
        [
         121.966,
         29.636
        ],
        [
         121.873,
         29.632
        ],
        [
         121.937,
         29.748
        ],
        [
         122.044,
         29.823
        ],
        [
         122.143,
         29.878
        ],
        [
         122.007,
         29.892
        ],
        [
         121.971,
         29.955
        ],
        [
         121.835,
         29.958
        ],
        [
         121.721,
         29.993
        ],
        [
         121.653,
         30.071
        ],
        [
         121.562,
         30.184
        ],
        [
         121.395,
         30.338
        ],
        [
         121.328,
         30.397
        ],
        [
         121.183,
         30.434
        ],
        [
         121.058,
         30.564
        ],
        [
         121.189,
         30.633
        ],
        [
         121.275,
         30.677
        ],
        [
         121.232,
         30.756
        ],
        [
         121.175,
         30.772
        ],
        [
         121.138,
         30.826
        ],
        [
         121.06,
         30.845
        ],
        [
         120.992,
         30.837
        ],
        [
         120.993,
         30.89
        ],
        [
         120.989,
         31.014
        ],
        [
         120.94,
         31.01
        ],
        [
         120.866,
         30.99
        ],
        [
         120.77,
         30.997
        ],
        [
         120.698,
         30.971
        ],
        [
         120.709,
         30.933
        ],
        [
         120.683,
         30.882
        ],
        [
         120.59,
         30.854
        ],
        [
         120.505,
         30.758
        ],
        [
         120.46,
         30.84
        ],
        [
         120.435,
         30.921
        ],
        [
         120.358,
         30.887
        ],
        [
         120.316,
         30.934
        ],
        [
         120.15,
         30.937
        ],
        [
         120.053,
         31.006
        ],
        [
         119.989,
         31.059
        ],
        [
         119.921,
         31.17
        ],
        [
         119.827,
         31.174
        ],
        [
         119.78,
         31.179
        ],
        [
         119.706,
         31.153
        ],
        [
         119.624,
         31.13
        ],
        [
         119.629,
         31.086
        ],
        [
         119.58,
         30.967
        ],
        [
         119.564,
         30.919
        ],
        [
         119.576,
         30.83
        ],
        [
         119.527,
         30.779
        ],
        [
         119.483,
         30.704
        ],
        [
         119.408,
         30.645
        ],
        [
         119.343,
         30.664
        ],
        [
         119.239,
         30.609
        ],
        [
         119.237,
         30.547
        ],
        [
         119.326,
         30.533
        ],
        [
         119.335,
         30.448
        ],
        [
         119.403,
         30.375
        ],
        [
         119.326,
         30.372
        ],
        [
         119.247,
         30.341
        ],
        [
         119.201,
         30.291
        ],
        [
         119.092,
         30.324
        ],
        [
         118.989,
         30.332
        ],
        [
         118.88,
         30.315
        ],
        [
         118.905,
         30.216
        ],
        [
         118.853,
         30.167
        ],
        [
         118.895,
         30.149
        ],
        [
         118.879,
         30.065
        ],
        [
         118.895,
         29.938
        ],
        [
         118.841,
         29.891
        ],
        [
         118.745,
         29.739
        ],
        [
         118.647,
         29.643
        ],
        [
         118.574,
         29.638
        ],
        [
         118.5,
         29.576
        ],
        [
         118.457,
         29.514
        ]
       ]
      ],
      [
       [
        [
         122.163,
         29.988
        ],
        [
         122.279,
         29.937
        ],
        [
         122.341,
         29.977
        ],
        [
         122.31,
         30.04
        ],
        [
         122.301,
         30.087
        ],
        [
         122.153,
         30.113
        ],
        [
         122.049,
         30.147
        ],
        [
         121.935,
         30.162
        ],
        [
         121.99,
         30.077
        ],
        [
         122.028,
         29.991
        ],
        [
         122.118,
         29.987
        ]
       ]
      ],
      [
       [
        [
         122.214,
         30.186
        ],
        [
         122.153,
         30.191
        ],
        [
         122.168,
         30.138
        ]
       ]
      ],
      [
       [
        [
         122.229,
         29.712
        ],
        [
         122.27,
         29.685
        ],
        [
         122.229,
         29.712
        ]
       ]
      ],
      [
       [
        [
         122.428,
         30.738
        ],
        [
         122.533,
         30.697
        ],
        [
         122.475,
         30.714
        ],
        [
         122.428,
         30.738
        ]
       ]
      ],
      [
       [
        [
         122.163,
         30.33
        ],
        [
         122.154,
         30.245
        ],
        [
         122.247,
         30.301
        ],
        [
         122.191,
         30.33
        ],
        [
         122.163,
         30.33
        ]
       ]
      ],
      [
       [
        [
         122.317,
         30.25
        ],
        [
         122.359,
         30.236
        ],
        [
         122.417,
         30.239
        ],
        [
         122.333,
         30.273
        ]
       ]
      ],
      [
       [
        [
         122.372,
         29.893
        ],
        [
         122.416,
         29.829
        ],
        [
         122.434,
         29.883
        ],
        [
         122.412,
         29.952
        ],
        [
         122.352,
         29.959
        ],
        [
         122.339,
         29.912
        ],
        [
         122.363,
         29.894
        ]
       ]
      ],
      [
       [
        [
         122.43,
         30.409
        ],
        [
         122.374,
         30.462
        ],
        [
         122.282,
         30.418
        ],
        [
         122.353,
         30.422
        ]
       ]
      ],
      [
       [
        [
         122.265,
         29.845
        ],
        [
         122.248,
         29.804
        ],
        [
         122.325,
         29.782
        ],
        [
         122.319,
         29.829
        ]
       ]
      ],
      [
       [
        [
         121.944,
         30.777
        ],
        [
         121.997,
         30.659
        ],
        [
         122.133,
         30.595
        ],
        [
         122.011,
         30.669
        ],
        [
         121.988,
         30.753
        ],
        [
         121.944,
         30.777
        ]
       ]
      ],
      [
       [
        [
         122.183,
         29.651
        ],
        [
         122.2,
         29.713
        ],
        [
         122.131,
         29.789
        ],
        [
         122.048,
         29.72
        ],
        [
         122.096,
         29.717
        ],
        [
         122.183,
         29.651
        ]
       ]
      ],
      [
       [
        [
         122.462,
         29.944
        ],
        [
         122.46,
         29.947
        ],
        [
         122.451,
         29.941
        ],
        [
         122.449,
         29.939
        ],
        [
         122.452,
         29.935
        ],
        [
         122.458,
         29.927
        ],
        [
         122.467,
         29.929
        ],
        [
         122.462,
         29.944
        ]
       ]
      ],
      [
       [
        [
         122.065,
         30.18
        ],
        [
         122.017,
         30.186
        ],
        [
         122.065,
         30.18
        ]
       ]
      ],
      [
       [
        [
         122.391,
         29.971
        ],
        [
         122.378,
         30.024
        ],
        [
         122.391,
         29.971
        ]
       ]
      ],
      [
       [
        [
         121.851,
         29.977
        ],
        [
         121.933,
         29.995
        ],
        [
         121.886,
         30.095
        ],
        [
         121.84,
         30.047
        ],
        [
         121.851,
         29.977
        ]
       ]
      ],
      [
       [
        [
         122.038,
         29.759
        ],
        [
         122.03,
         29.717
        ]
       ]
      ],
      [
       [
        [
         121.94,
         30.115
        ],
        [
         121.946,
         30.064
        ],
        [
         121.94,
         30.115
        ]
       ]
      ],
      [
       [
        [
         121.958,
         30.288
        ],
        [
         121.989,
         30.34
        ],
        [
         121.921,
         30.307
        ]
       ]
      ],
      [
       [
        [
         122.193,
         29.965
        ],
        [
         122.152,
         29.971
        ],
        [
         122.155,
         29.971
        ],
        [
         122.193,
         29.965
        ]
       ]
      ],
      [
       [
        [
         122.288,
         29.724
        ],
        [
         122.258,
         29.754
        ],
        [
         122.213,
         29.772
        ],
        [
         122.288,
         29.724
        ]
       ]
      ],
      [
       [
        [
         122.264,
         30.27
        ],
        [
         122.316,
         30.25
        ],
        [
         122.264,
         30.27
        ]
       ]
      ],
      [
       [
        [
         122.283,
         29.861
        ],
        [
         122.343,
         29.861
        ],
        [
         122.301,
         29.884
        ]
       ]
      ],
      [
       [
        [
         122.454,
         29.957
        ],
        [
         122.446,
         29.952
        ],
        [
         122.448,
         29.948
        ],
        [
         122.458,
         29.952
        ],
        [
         122.454,
         29.957
        ]
       ]
      ],
      [
       [
        [
         122.2,
         29.969
        ],
        [
         122.274,
         29.932
        ],
        [
         122.2,
         29.969
        ]
       ]
      ],
      [
       [
        [
         122.029,
         29.955
        ],
        [
         122.059,
         29.956
        ]
       ]
      ],
      [
       [
        [
         122.471,
         29.927
        ],
        [
         122.473,
         29.925
        ],
        [
         122.471,
         29.927
        ]
       ]
      ],
      [
       [
        [
         122.152,
         29.971
        ],
        [
         122.154,
         29.971
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.906,
         32.306
        ],
        [
         115.942,
         32.166
        ],
        [
         115.929,
         32.003
        ],
        [
         115.92,
         31.92
        ],
        [
         115.894,
         31.832
        ],
        [
         115.886,
         31.776
        ],
        [
         115.808,
         31.77
        ],
        [
         115.767,
         31.788
        ],
        [
         115.676,
         31.778
        ],
        [
         115.534,
         31.699
        ],
        [
         115.477,
         31.643
        ],
        [
         115.44,
         31.588
        ],
        [
         115.371,
         31.496
        ],
        [
         115.374,
         31.406
        ],
        [
         115.372,
         31.349
        ],
        [
         115.444,
         31.344
        ],
        [
         115.508,
         31.268
        ],
        [
         115.54,
         31.195
        ],
        [
         115.604,
         31.174
        ],
        [
         115.701,
         31.201
        ],
        [
         115.798,
         31.128
        ],
        [
         115.867,
         31.148
        ],
        [
         115.94,
         31.072
        ],
        [
         116.006,
         31.035
        ],
        [
         116.059,
         31.013
        ],
        [
         116.04,
         30.958
        ],
        [
         115.933,
         30.89
        ],
        [
         115.849,
         30.828
        ],
        [
         115.851,
         30.757
        ],
        [
         115.763,
         30.685
        ],
        [
         115.819,
         30.598
        ],
        [
         115.877,
         30.582
        ],
        [
         115.91,
         30.519
        ],
        [
         115.921,
         30.416
        ],
        [
         115.915,
         30.338
        ],
        [
         115.986,
         30.291
        ],
        [
         116.066,
         30.205
        ],
        [
         116.088,
         30.11
        ],
        [
         116.091,
         30.036
        ],
        [
         116.128,
         29.898
        ],
        [
         116.173,
         29.828
        ],
        [
         116.25,
         29.786
        ],
        [
         116.343,
         29.836
        ],
        [
         116.526,
         29.897
        ],
        [
         116.585,
         30.046
        ],
        [
         116.667,
         30.077
        ],
        [
         116.747,
         30.057
        ],
        [
         116.803,
         29.996
        ],
        [
         116.833,
         29.958
        ],
        [
         116.9,
         29.949
        ],
        [
         116.781,
         29.793
        ],
        [
         116.674,
         29.71
        ],
        [
         116.706,
         29.697
        ],
        [
         116.705,
         29.689
        ],
        [
         116.652,
         29.637
        ],
        [
         116.722,
         29.565
        ],
        [
         116.781,
         29.57
        ],
        [
         116.874,
         29.61
        ],
        [
         116.975,
         29.657
        ],
        [
         117.042,
         29.681
        ],
        [
         117.108,
         29.752
        ],
        [
         117.123,
         29.799
        ],
        [
         117.127,
         29.862
        ],
        [
         117.172,
         29.921
        ],
        [
         117.246,
         29.915
        ],
        [
         117.253,
         29.835
        ],
        [
         117.339,
         29.848
        ],
        [
         117.382,
         29.841
        ],
        [
         117.409,
         29.802
        ],
        [
         117.454,
         29.688
        ],
        [
         117.53,
         29.654
        ],
        [
         117.543,
         29.589
        ],
        [
         117.648,
         29.615
        ],
        [
         117.69,
         29.556
        ],
        [
         117.795,
         29.571
        ],
        [
         117.934,
         29.549
        ],
        [
         118.043,
         29.566
        ],
        [
         118.095,
         29.534
        ],
        [
         118.457,
         29.514
        ],
        [
         118.5,
         29.576
        ],
        [
         118.574,
         29.638
        ],
        [
         118.647,
         29.643
        ],
        [
         118.745,
         29.739
        ],
        [
         118.841,
         29.891
        ],
        [
         118.895,
         29.938
        ],
        [
         118.879,
         30.065
        ],
        [
         118.895,
         30.149
        ],
        [
         118.853,
         30.167
        ],
        [
         118.905,
         30.216
        ],
        [
         118.88,
         30.315
        ],
        [
         118.989,
         30.332
        ],
        [
         119.092,
         30.324
        ],
        [
         119.201,
         30.291
        ],
        [
         119.247,
         30.341
        ],
        [
         119.326,
         30.372
        ],
        [
         119.403,
         30.375
        ],
        [
         119.335,
         30.448
        ],
        [
         119.326,
         30.533
        ],
        [
         119.237,
         30.547
        ],
        [
         119.239,
         30.609
        ],
        [
         119.343,
         30.664
        ],
        [
         119.408,
         30.645
        ],
        [
         119.483,
         30.704
        ],
        [
         119.527,
         30.779
        ],
        [
         119.576,
         30.83
        ],
        [
         119.564,
         30.919
        ],
        [
         119.58,
         30.967
        ],
        [
         119.629,
         31.086
        ],
        [
         119.624,
         31.13
        ],
        [
         119.533,
         31.159
        ],
        [
         119.439,
         31.177
        ],
        [
         119.36,
         31.213
        ],
        [
         119.35,
         31.301
        ],
        [
         119.294,
         31.263
        ],
        [
         119.198,
         31.27
        ],
        [
         119.158,
         31.295
        ],
        [
         119.105,
         31.235
        ],
        [
         118.985,
         31.237
        ],
        [
         118.795,
         31.229
        ],
        [
         118.726,
         31.282
        ],
        [
         118.746,
         31.373
        ],
        [
         118.824,
         31.376
        ],
        [
         118.884,
         31.5
        ],
        [
         118.866,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.803,
         31.619
        ],
        [
         118.748,
         31.676
        ],
        [
         118.643,
         31.65
        ],
        [
         118.698,
         31.71
        ],
        [
         118.641,
         31.759
        ],
        [
         118.558,
         31.73
        ],
        [
         118.534,
         31.767
        ],
        [
         118.505,
         31.842
        ],
        [
         118.472,
         31.88
        ],
        [
         118.39,
         31.985
        ],
        [
         118.434,
         32.087
        ],
        [
         118.495,
         32.165
        ],
        [
         118.644,
         32.21
        ],
        [
         118.657,
         32.301
        ],
        [
         115.906,
         32.306
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.866,
         31.519
        ]
       ]
      ],
      [
       [
        [
         116.699,
         29.708
        ],
        [
         116.654,
         29.695
        ],
        [
         116.705,
         29.689
        ],
        [
         116.706,
         29.697
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
         118.117,
         29.514
        ],
        [
         118.051,
         29.543
        ],
        [
         118.004,
         29.578
        ],
        [
         117.873,
         29.548
        ],
        [
         117.73,
         29.55
        ],
        [
         117.679,
         29.595
        ],
        [
         117.609,
         29.591
        ],
        [
         117.524,
         29.63
        ],
        [
         117.49,
         29.66
        ],
        [
         117.455,
         29.749
        ],
        [
         117.415,
         29.851
        ],
        [
         117.359,
         29.813
        ],
        [
         117.293,
         29.823
        ],
        [
         117.262,
         29.881
        ],
        [
         117.217,
         29.927
        ],
        [
         117.13,
         29.899
        ],
        [
         117.073,
         29.832
        ],
        [
         117.137,
         29.775
        ],
        [
         117.113,
         29.712
        ],
        [
         116.996,
         29.683
        ],
        [
         116.94,
         29.649
        ],
        [
         116.849,
         29.576
        ],
        [
         116.76,
         29.599
        ],
        [
         116.717,
         29.591
        ],
        [
         116.68,
         29.681
        ],
        [
         116.674,
         29.71
        ],
        [
         116.781,
         29.793
        ],
        [
         116.9,
         29.949
        ],
        [
         116.833,
         29.958
        ],
        [
         116.803,
         29.996
        ],
        [
         116.747,
         30.057
        ],
        [
         116.667,
         30.077
        ],
        [
         116.585,
         30.046
        ],
        [
         116.526,
         29.897
        ],
        [
         116.343,
         29.836
        ],
        [
         116.25,
         29.786
        ],
        [
         116.173,
         29.828
        ],
        [
         116.087,
         29.795
        ],
        [
         115.966,
         29.724
        ],
        [
         115.837,
         29.748
        ],
        [
         115.707,
         29.838
        ],
        [
         115.612,
         29.841
        ],
        [
         115.479,
         29.811
        ],
        [
         115.413,
         29.689
        ],
        [
         115.305,
         29.637
        ],
        [
         115.251,
         29.66
        ],
        [
         115.113,
         29.685
        ],
        [
         115.144,
         29.646
        ],
        [
         115.157,
         29.585
        ],
        [
         115.135,
         29.514
        ],
        [
         115.087,
         29.56
        ],
        [
         115.001,
         29.572
        ],
        [
         114.967,
         29.522
        ],
        [
         118.117,
         29.514
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
         113.342,
         32.306
        ],
        [
         113.376,
         32.298
        ],
        [
         113.492,
         32.306
        ],
        [
         113.769,
         32.301
        ],
        [
         113.758,
         32.277
        ],
        [
         113.739,
         32.256
        ],
        [
         113.782,
         32.185
        ],
        [
         113.723,
         32.124
        ],
        [
         113.792,
         32.036
        ],
        [
         113.817,
         31.964
        ],
        [
         113.832,
         31.919
        ],
        [
         113.854,
         31.843
        ],
        [
         113.915,
         31.877
        ],
        [
         113.952,
         31.794
        ],
        [
         114.018,
         31.771
        ],
        [
         114.122,
         31.809
        ],
        [
         114.192,
         31.852
        ],
        [
         114.293,
         31.753
        ],
        [
         114.403,
         31.747
        ],
        [
         114.531,
         31.743
        ],
        [
         114.586,
         31.762
        ],
        [
         114.548,
         31.624
        ],
        [
         114.573,
         31.554
        ],
        [
         114.642,
         31.582
        ],
        [
         114.779,
         31.521
        ],
        [
         114.83,
         31.459
        ],
        [
         114.884,
         31.469
        ],
        [
         114.995,
         31.471
        ],
        [
         115.096,
         31.508
        ],
        [
         115.107,
         31.568
        ],
        [
         115.164,
         31.605
        ],
        [
         115.236,
         31.555
        ],
        [
         115.211,
         31.442
        ],
        [
         115.251,
         31.392
        ],
        [
         115.339,
         31.404
        ],
        [
         115.39,
         31.45
        ],
        [
         115.416,
         31.526
        ],
        [
         115.485,
         31.609
        ],
        [
         115.495,
         31.673
        ],
        [
         115.554,
         31.695
        ],
        [
         115.731,
         31.767
        ],
        [
         115.808,
         31.77
        ],
        [
         115.852,
         31.787
        ],
        [
         115.915,
         31.815
        ],
        [
         115.895,
         31.865
        ],
        [
         115.909,
         31.943
        ],
        [
         115.922,
         32.05
        ],
        [
         115.913,
         32.228
        ],
        [
         113.342,
         32.306
        ]
       ]
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.749,
         32.273
        ],
        [
         113.768,
         32.284
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
         113.224,
         32.306
        ],
        [
         113.277,
         29.595
        ],
        [
         113.572,
         29.849
        ],
        [
         113.551,
         29.768
        ],
        [
         113.54,
         29.7
        ],
        [
         113.606,
         29.667
        ],
        [
         113.681,
         29.643
        ],
        [
         113.739,
         29.579
        ],
        [
         113.631,
         29.523
        ],
        [
         114.96,
         29.514
        ],
        [
         114.948,
         29.543
        ],
        [
         115.033,
         29.547
        ],
        [
         115.086,
         29.526
        ],
        [
         115.154,
         29.514
        ],
        [
         115.12,
         29.598
        ],
        [
         115.118,
         29.656
        ],
        [
         115.177,
         29.655
        ],
        [
         115.286,
         29.618
        ],
        [
         115.355,
         29.65
        ],
        [
         115.471,
         29.74
        ],
        [
         115.512,
         29.84
        ],
        [
         115.668,
         29.85
        ],
        [
         115.763,
         29.793
        ],
        [
         115.91,
         29.724
        ],
        [
         116.05,
         29.762
        ],
        [
         116.135,
         29.82
        ],
        [
         116.074,
         29.97
        ],
        [
         116.079,
         30.062
        ],
        [
         116.056,
         30.181
        ],
        [
         115.998,
         30.253
        ],
        [
         115.903,
         30.314
        ],
        [
         115.885,
         30.38
        ],
        [
         115.895,
         30.453
        ],
        [
         115.888,
         30.543
        ],
        [
         115.849,
         30.602
        ],
        [
         115.814,
         30.637
        ],
        [
         115.783,
         30.752
        ],
        [
         115.864,
         30.816
        ],
        [
         115.865,
         30.864
        ],
        [
         115.976,
         30.932
        ],
        [
         116.072,
         30.957
        ],
        [
         116.015,
         31.012
        ],
        [
         115.939,
         31.047
        ],
        [
         115.888,
         31.109
        ],
        [
         115.838,
         31.127
        ],
        [
         115.779,
         31.112
        ],
        [
         115.655,
         31.211
        ],
        [
         115.586,
         31.144
        ],
        [
         115.54,
         31.232
        ],
        [
         115.473,
         31.265
        ],
        [
         115.407,
         31.338
        ],
        [
         115.393,
         31.39
        ],
        [
         115.339,
         31.404
        ],
        [
         115.251,
         31.392
        ],
        [
         115.211,
         31.442
        ],
        [
         115.236,
         31.555
        ],
        [
         115.164,
         31.605
        ],
        [
         115.107,
         31.568
        ],
        [
         115.096,
         31.508
        ],
        [
         114.995,
         31.471
        ],
        [
         114.884,
         31.469
        ],
        [
         114.83,
         31.459
        ],
        [
         114.779,
         31.521
        ],
        [
         114.642,
         31.582
        ],
        [
         114.573,
         31.554
        ],
        [
         114.548,
         31.624
        ],
        [
         114.586,
         31.762
        ],
        [
         114.531,
         31.743
        ],
        [
         114.403,
         31.747
        ],
        [
         114.293,
         31.753
        ],
        [
         114.192,
         31.852
        ],
        [
         114.122,
         31.809
        ],
        [
         114.018,
         31.771
        ],
        [
         113.952,
         31.794
        ],
        [
         113.915,
         31.877
        ],
        [
         113.854,
         31.843
        ],
        [
         113.832,
         31.919
        ],
        [
         113.817,
         31.964
        ],
        [
         113.792,
         32.036
        ],
        [
         113.723,
         32.124
        ],
        [
         113.782,
         32.185
        ],
        [
         113.739,
         32.256
        ],
        [
         113.769,
         32.301
        ],
        [
         113.492,
         32.306
        ],
        [
         113.376,
         32.298
        ],
        [
         113.342,
         32.306
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
         113.224,
         29.514
        ],
        [
         113.631,
         29.523
        ],
        [
         113.739,
         29.579
        ],
        [
         113.681,
         29.643
        ],
        [
         113.606,
         29.667
        ],
        [
         113.54,
         29.7
        ],
        [
         113.551,
         29.768
        ],
        [
         113.572,
         29.849
        ],
        [
         113.277,
         29.595
        ],
        [
         113.224,
         29.514
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
     "type": "LineString",
     "coordinates": [
      [
       116.115,
       29.514
      ],
      [
       116.198,
       29.751
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.224,
        30.428
       ],
       [
        113.512,
        30.443
       ],
       [
        113.672,
        30.597
       ],
       [
        113.801,
        30.622
       ],
       [
        113.86,
        30.644
       ],
       [
        113.926,
        30.644
       ],
       [
        113.964,
        30.657
       ],
       [
        114.096,
        30.586
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
        113.224,
        29.551
       ],
       [
        113.696,
        29.949
       ],
       [
        113.86,
        29.972
       ],
       [
        114.011,
        30.124
       ],
       [
        113.885,
        30.246
       ],
       [
        113.99,
        30.279
       ],
       [
        114.116,
        30.328
       ],
       [
        114.303,
        30.593
       ],
       [
        114.472,
        30.661
       ],
       [
        114.662,
        30.582
       ],
       [
        114.841,
        30.565
       ],
       [
        114.885,
        30.423
       ],
       [
        115.058,
        30.336
       ],
       [
        115.102,
        30.229
       ],
       [
        115.252,
        30.128
       ],
       [
        115.504,
        29.879
       ],
       [
        115.751,
        29.828
       ],
       [
        115.983,
        29.746
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.198,
        29.751
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.212,
        29.785
       ],
       [
        116.451,
        29.868
       ],
       [
        116.606,
        30.006
       ],
       [
        116.776,
        30.097
       ],
       [
        116.896,
        30.272
       ],
       [
        116.9,
        30.399
       ],
       [
        117.13,
        30.491
       ],
       [
        117.217,
        30.629
       ],
       [
        117.327,
        30.695
       ],
       [
        117.725,
        30.886
       ],
       [
        117.844,
        31.124
       ],
       [
        117.968,
        31.13
       ],
       [
        118.089,
        31.255
       ],
       [
        118.312,
        31.341
       ],
       [
        118.333,
        31.51
       ],
       [
        118.515,
        31.841
       ],
       [
        118.961,
        32.203
       ],
       [
        119.53,
        32.229
       ],
       [
        119.771,
        32.207
       ],
       [
        119.941,
        32.04
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
        120.602,
        31.087
       ],
       [
        120.236,
        30.936
       ],
       [
        119.978,
        31.091
       ],
       [
        119.987,
        31.392
       ],
       [
        120.219,
        31.532
       ],
       [
        120.256,
        31.495
       ],
       [
        120.271,
        31.445
       ],
       [
        120.38,
        31.429
       ],
       [
        120.331,
        31.35
       ],
       [
        120.357,
        31.27
       ],
       [
        120.431,
        31.2
       ],
       [
        120.395,
        31.1
       ],
       [
        120.461,
        31.081
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.065,
        29.514
       ],
       [
        116.117,
        29.653
       ],
       [
        116.082,
        29.703
       ],
       [
        116.18,
        29.751
       ],
       [
        116.23,
        29.698
       ],
       [
        116.207,
        29.645
       ],
       [
        116.181,
        29.573
       ],
       [
        116.158,
        29.514
       ]
      ]
     ]
    },
    "n": "Poyang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.461,
        30.055
       ],
       [
        116.52,
        29.988
       ],
       [
        116.388,
        29.966
       ],
       [
        116.259,
        30.048
       ],
       [
        116.281,
        30.079
       ],
       [
        116.327,
        30.087
       ],
       [
        116.442,
        30.077
       ],
       [
        116.461,
        30.055
       ]
      ]
     ]
    },
    "n": "Daguan Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.242,
        30.032
       ],
       [
        116.26,
        29.976
       ],
       [
        116.211,
        29.908
       ],
       [
        116.044,
        29.881
       ],
       [
        115.985,
        30.016
       ],
       [
        116.118,
        30.0
       ],
       [
        116.15,
        30.061
       ]
      ]
     ]
    },
    "n": "Long Hu"
   },
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
        114.395,
        30.236
       ],
       [
        114.444,
        30.285
       ],
       [
        114.501,
        30.311
       ],
       [
        114.458,
        30.364
       ],
       [
        114.539,
        30.345
       ],
       [
        114.623,
        30.258
       ],
       [
        114.623,
        30.096
       ],
       [
        114.542,
        30.188
       ],
       [
        114.474,
        30.158
       ],
       [
        114.408,
        30.106
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
        116.424,
        30.108
       ],
       [
        116.387,
        30.143
       ],
       [
        116.351,
        30.175
       ],
       [
        116.314,
        30.23
       ],
       [
        116.357,
        30.245
       ],
       [
        116.39,
        30.224
       ],
       [
        116.472,
        30.204
       ],
       [
        116.539,
        30.207
       ],
       [
        116.527,
        30.149
       ],
       [
        116.526,
        30.089
       ],
       [
        116.494,
        30.085
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ]
      ]
     ]
    },
    "n": "Po Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.78,
        31.409
       ],
       [
        118.747,
        31.459
       ],
       [
        118.724,
        31.522
       ],
       [
        118.758,
        31.545
       ],
       [
        118.941,
        31.554
       ],
       [
        118.96,
        31.465
       ],
       [
        118.85,
        31.393
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
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
        113.426,
        29.876
       ],
       [
        113.369,
        29.785
       ],
       [
        113.312,
        29.749
       ],
       [
        113.237,
        29.848
       ],
       [
        113.249,
        29.904
       ],
       [
        113.331,
        29.894
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
        117.941,
        31.521
       ],
       [
        117.83,
        31.57
       ],
       [
        117.706,
        31.524
       ],
       [
        117.563,
        31.445
       ],
       [
        117.382,
        31.536
       ],
       [
        117.297,
        31.65
       ],
       [
        117.366,
        31.709
       ],
       [
        117.434,
        31.651
       ],
       [
        117.487,
        31.593
       ],
       [
        117.594,
        31.609
       ],
       [
        117.733,
        31.66
       ],
       [
        117.919,
        31.551
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ]
      ]
     ]
    },
    "n": "Chao Hu"
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
        114.783,
        30.278
       ],
       [
        114.739,
        30.279
       ],
       [
        114.76,
        30.238
       ],
       [
        114.778,
        30.215
       ],
       [
        114.735,
        30.212
       ],
       [
        114.679,
        30.228
       ],
       [
        114.68,
        30.277
       ],
       [
        114.713,
        30.33
       ],
       [
        114.784,
        30.344
       ],
       [
        114.834,
        30.327
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
        114.64,
        30.66
       ],
       [
        114.646,
        30.715
       ],
       [
        114.703,
        30.735
       ],
       [
        114.746,
        30.738
       ],
       [
        114.786,
        30.663
       ],
       [
        114.696,
        30.613
       ],
       [
        114.584,
        30.65
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
        114.499,
        30.418
       ],
       [
        114.495,
        30.439
       ],
       [
        114.575,
        30.405
       ],
       [
        114.631,
        30.42
       ],
       [
        114.629,
        30.456
       ],
       [
        114.609,
        30.496
       ],
       [
        114.666,
        30.49
       ],
       [
        114.701,
        30.512
       ],
       [
        114.756,
        30.477
       ],
       [
        114.748,
        30.443
       ],
       [
        114.727,
        30.42
       ],
       [
        114.655,
        30.346
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
        114.252,
        29.972
       ],
       [
        114.264,
        29.915
       ],
       [
        114.218,
        29.901
       ],
       [
        114.143,
        29.988
       ],
       [
        114.177,
        30.114
       ],
       [
        114.249,
        30.141
       ],
       [
        114.237,
        30.084
       ],
       [
        114.273,
        30.044
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
        114.114,
        29.883
       ],
       [
        114.063,
        29.927
       ],
       [
        113.99,
        29.879
       ],
       [
        113.963,
        29.892
       ],
       [
        114.003,
        29.942
       ],
       [
        113.97,
        29.963
       ],
       [
        113.941,
        29.981
       ],
       [
        114.074,
        30.027
       ],
       [
        114.13,
        29.935
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
   113.224,
   29.514,
   122.546,
   32.306
  ]
 }
};
