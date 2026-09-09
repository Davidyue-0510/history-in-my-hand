// 本文件由 tools/build.py 自动生成（切片 xizang_amban_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xizang_amban_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xizang_amban_llm"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "province": "xizang",
  "title": "清朝驻藏大臣与金瓶掣签（清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "tibet",
  "dossier_event": "event:ev_xizang_amban_llm_01",
  "vocab_pack": "inline:xizang_amban_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "qing",
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
    "note": "清朝驻藏大臣与金瓶掣签（清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清朝驻藏大臣与金瓶掣签（清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "清朝驻藏大臣与金瓶掣签（清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "清朝驻藏大臣与金瓶掣签（清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=xizang_amban_llm",
  "key": "xizang_amban_llm",
  "scene_id": "xizang_amban_llm"
 },
 "sources": [
  {
   "id": "amban_src",
   "title": "清史稿·西藏传 / 卫藏通志",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "赵尔巽等",
   "period": "民国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "tibet",
   "name": "西藏",
   "type": "region",
   "modern": "中国西藏",
   "note": "驻藏大臣辖区",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "yonghegong",
   "name": "雍和宫",
   "type": "fortress",
   "modern": "中国北京",
   "note": "金瓶掣签处",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 107.39,
   "lat": 34.52,
   "geo_note": "秦都（德公至献公），今陕西凤翔",
   "geo_match": "substring",
   "elev": 910
  }
 ],
 "persons": [
  {
   "id": "XIZ__p01",
   "name": "雍正帝",
   "role": "清朝皇帝",
   "note": "设驻藏大臣",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIZ__p02",
   "name": "乾隆帝",
   "role": "清朝皇帝",
   "note": "颁金瓶掣签章程",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIZ__p03",
   "name": "达赖喇嘛",
   "role": "西藏政教领袖",
   "note": "转世需掣签",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIZ__p04",
   "name": "班禅额尔德尼",
   "role": "西藏政教领袖",
   "note": "转世需掣签",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "XIZ__p05",
   "name": "驻藏大臣",
   "role": "清朝驻藏官员",
   "note": "总理西藏事务",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "XIZ_001",
   "subject": "event:ev_xizang_amban_llm_01",
   "predicate": "设立时间",
   "value_text": "雍正五年设驻藏大臣",
   "time": {
    "era_text": "雍正五年",
    "start": "1727-01-01",
    "end": "1727-12-31",
    "gregorian_year": 1727
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "雍正五年设驻藏大臣",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雍正五年设驻藏大臣",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_002",
   "subject": "event:ev_xizang_amban_llm_01",
   "predicate": "职权",
   "value_text": "总理西藏事务与达赖班禅平行",
   "time": {
    "era_text": "雍正五年",
    "start": "1727-01-01",
    "end": "1727-12-31",
    "gregorian_year": 1727
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "总理西藏事务，与达赖、班禅平行",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "总理西藏事务，与达赖、班禅平行",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_003",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "颁布时间",
   "value_text": "乾隆五十八年颁章程",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "乾隆五十八年颁钦定章程",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "乾隆五十八年颁钦定章程",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_004",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "掣签地点",
   "value_text": "雍和宫金瓶掣签",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "yonghegong",
   "source": "amban_src",
   "quote": "定大座掣签于雍和宫金瓶",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "定大座掣签于雍和宫金瓶",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_005",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "掣签范围",
   "value_text": "达赖班禅及大呼图克图转世需掣签",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "yonghegong",
   "source": "amban_src",
   "quote": "达赖、班禅及大呼图克图转世，必经金瓶掣签",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "达赖、班禅及大呼图克图转世，必经金瓶掣签",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_006",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "监视官员",
   "value_text": "朝廷特派大臣监视",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "yonghegong",
   "source": "amban_src",
   "quote": "朝廷特派大臣监视",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "朝廷特派大臣监视",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_007",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "管辖内容",
   "value_text": "驿道兵制赋税归节制",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "驿道、兵制、赋税皆归节制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "驿道、兵制、赋税皆归节制",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_008",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "主权意义",
   "value_text": "主权所系体制乃定",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "主权所系，体制乃定",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "主权所系，体制乃定",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_009",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "制度评价",
   "value_text": "金瓶掣签体现中央权威",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "yonghegong",
   "source": "amban_src",
   "quote": "朝廷特派大臣监视",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者认为此举强化控制",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "朝廷特派大臣监视",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_010",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "历史影响",
   "value_text": "奠定清对藏主权基础",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "主权所系，体制乃定",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "后世视为重要制度",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "主权所系，体制乃定",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "XIZ_011",
   "subject": "event:ev_xizang_amban_llm_02",
   "predicate": "具体实施",
   "value_text": "掣签细节未详",
   "time": {
    "era_text": "乾隆五十八年",
    "start": "1793-01-01",
    "end": "1793-12-31",
    "gregorian_year": 1793
   },
   "place": "yonghegong",
   "source": "amban_src",
   "quote": "定大座掣签于雍和宫金瓶",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏具体仪式记载",
   "dims": [
    3,
    6
   ],
   "lead": {
    "where": "清宫档案",
    "skills": [
     "历史档案学"
    ],
    "accept": "补充仪式细节"
   },
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "定大座掣签于雍和宫金瓶",
   "source_text": "雍正五年（一七二七）设驻藏大臣，'总理西藏事务，与达赖、班禅平行'。乾隆五十八年（一七九三）颁《钦定藏内善后章程》，定大座掣签于雍和宫金瓶，'达赖、班禅及大呼图克图转世，必经金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系，体制乃定。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "xizang_amban_llm_DIM2",
   "subject": "技术:交通航运",
   "predicate": "技术维度",
   "value_text": "清朝驻藏大臣与金瓶掣签（清） 的史料涉及交通航运（「金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系」），补标技术维度（推断）。",
   "time": {
    "era_text": "雍正五年",
    "start": "1727-01-01",
    "end": "1727-12-31",
    "gregorian_year": 1727
   },
   "place": "tibet",
   "source": "amban_src",
   "quote": "「金瓶掣签，朝廷特派大臣监视'。驿道、兵制、赋税皆归节制，主权所系」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "XIZ_011"
 ],
 "events": [
  {
   "id": "ev_xizang_amban_llm_01",
   "subject": "event:ev_xizang_amban_llm_01",
   "year": 1727,
   "era": "雍正五年",
   "title": "设驻藏大臣",
   "kind": "建置",
   "text": "设驻藏大臣总理西藏事务",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_xizang_amban_llm_02",
   "subject": "event:ev_xizang_amban_llm_02",
   "year": 1793,
   "era": "乾隆五十八年",
   "title": "颁钦定章程",
   "kind": "行政",
   "text": "颁《钦定藏内善后章程》定金瓶掣签",
   "_source_idx": 0,
   "_source_name": "清史稿·西藏传 / 卫藏通志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "tibet",
   "party": "后世官修",
   "start": 1727,
   "end": 1793,
   "timeline": "main"
  },
  {
   "place_id": "yonghegong",
   "party": "后世官修",
   "start": 1727,
   "end": 1793,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "yonghegong",
   "name": "雍和宫",
   "lon": 107.39,
   "lat": 34.52,
   "region": "court"
  }
 ],
 "control_years": [
  1727,
  1793
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
        106.39,
        33.52
       ],
       [
        106.39,
        35.52
       ],
       [
        108.39,
        35.52
       ],
       [
        108.39,
        33.52
       ],
       [
        106.39,
        33.52
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
         108.39,
         33.52
        ],
        [
         108.39,
         35.52
        ],
        [
         108.39,
         35.52
        ],
        [
         108.39,
         35.279
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.667,
         35.257
        ],
        [
         107.652,
         35.245
        ],
        [
         107.686,
         35.218
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.675,
         34.951
        ],
        [
         107.639,
         34.935
        ],
        [
         107.62,
         34.965
        ],
        [
         107.564,
         34.969
        ],
        [
         107.524,
         34.91
        ],
        [
         107.455,
         34.917
        ],
        [
         107.401,
         34.933
        ],
        [
         107.369,
         34.918
        ],
        [
         107.35,
         34.934
        ],
        [
         107.287,
         34.932
        ],
        [
         107.253,
         34.881
        ],
        [
         107.189,
         34.893
        ],
        [
         107.162,
         34.944
        ],
        [
         107.12,
         34.95
        ],
        [
         107.09,
         34.977
        ],
        [
         107.083,
         35.024
        ],
        [
         107.013,
         35.03
        ],
        [
         106.991,
         35.068
        ],
        [
         106.95,
         35.067
        ],
        [
         106.902,
         35.095
        ],
        [
         106.838,
         35.08
        ],
        [
         106.711,
         35.101
        ],
        [
         106.706,
         35.082
        ],
        [
         106.615,
         35.071
        ],
        [
         106.577,
         35.089
        ],
        [
         106.542,
         35.084
        ],
        [
         106.522,
         35.028
        ],
        [
         106.495,
         35.006
        ],
        [
         106.495,
         35.006
        ],
        [
         106.485,
         34.984
        ],
        [
         106.493,
         34.941
        ],
        [
         106.528,
         34.877
        ],
        [
         106.556,
         34.861
        ],
        [
         106.551,
         34.829
        ],
        [
         106.575,
         34.77
        ],
        [
         106.539,
         34.746
        ],
        [
         106.506,
         34.747
        ],
        [
         106.487,
         34.715
        ],
        [
         106.457,
         34.704
        ],
        [
         106.442,
         34.675
        ],
        [
         106.471,
         34.634
        ],
        [
         106.419,
         34.643
        ],
        [
         106.39,
         34.625
        ],
        [
         106.39,
         34.524
        ],
        [
         106.455,
         34.532
        ],
        [
         106.514,
         34.512
        ],
        [
         106.514,
         34.498
        ],
        [
         106.559,
         34.488
        ],
        [
         106.611,
         34.454
        ],
        [
         106.638,
         34.391
        ],
        [
         106.717,
         34.369
        ],
        [
         106.691,
         34.338
        ],
        [
         106.705,
         34.3
        ],
        [
         106.682,
         34.256
        ],
        [
         106.653,
         34.244
        ],
        [
         106.634,
         34.26
        ],
        [
         106.589,
         34.254
        ],
        [
         106.577,
         34.281
        ],
        [
         106.527,
         34.292
        ],
        [
         106.496,
         34.238
        ],
        [
         106.532,
         34.254
        ],
        [
         106.558,
         34.23
        ],
        [
         106.585,
         34.15
        ],
        [
         106.56,
         34.11
        ],
        [
         106.502,
         34.105
        ],
        [
         106.506,
         34.056
        ],
        [
         106.472,
         34.024
        ],
        [
         106.474,
         33.971
        ],
        [
         106.411,
         33.909
        ],
        [
         106.428,
         33.866
        ],
        [
         106.475,
         33.876
        ],
        [
         106.491,
         33.835
        ],
        [
         106.462,
         33.79
        ],
        [
         106.488,
         33.758
        ],
        [
         106.483,
         33.707
        ],
        [
         106.535,
         33.695
        ],
        [
         106.576,
         33.631
        ],
        [
         106.581,
         33.576
        ],
        [
         106.545,
         33.52
        ],
        [
         106.51,
         33.52
        ],
        [
         106.457,
         33.533
        ],
        [
         106.447,
         33.613
        ],
        [
         106.39,
         33.612
        ],
        [
         106.39,
         33.52
        ],
        [
         108.39,
         33.52
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         106.444,
         35.52
        ],
        [
         106.466,
         35.481
        ],
        [
         106.49,
         35.481
        ],
        [
         106.483,
         35.45
        ],
        [
         106.504,
         35.415
        ],
        [
         106.501,
         35.364
        ],
        [
         106.472,
         35.311
        ],
        [
         106.416,
         35.276
        ],
        [
         106.39,
         35.275
        ],
        [
         106.39,
         33.612
        ],
        [
         106.447,
         33.613
        ],
        [
         106.457,
         33.533
        ],
        [
         106.51,
         33.52
        ],
        [
         106.545,
         33.52
        ],
        [
         106.581,
         33.576
        ],
        [
         106.576,
         33.631
        ],
        [
         106.535,
         33.695
        ],
        [
         106.483,
         33.707
        ],
        [
         106.488,
         33.758
        ],
        [
         106.462,
         33.79
        ],
        [
         106.491,
         33.835
        ],
        [
         106.475,
         33.876
        ],
        [
         106.428,
         33.866
        ],
        [
         106.411,
         33.909
        ],
        [
         106.474,
         33.971
        ],
        [
         106.472,
         34.024
        ],
        [
         106.506,
         34.056
        ],
        [
         106.502,
         34.105
        ],
        [
         106.56,
         34.11
        ],
        [
         106.585,
         34.15
        ],
        [
         106.558,
         34.23
        ],
        [
         106.532,
         34.254
        ],
        [
         106.496,
         34.238
        ],
        [
         106.527,
         34.292
        ],
        [
         106.577,
         34.281
        ],
        [
         106.589,
         34.254
        ],
        [
         106.634,
         34.26
        ],
        [
         106.653,
         34.244
        ],
        [
         106.682,
         34.256
        ],
        [
         106.705,
         34.3
        ],
        [
         106.691,
         34.338
        ],
        [
         106.717,
         34.369
        ],
        [
         106.638,
         34.391
        ],
        [
         106.611,
         34.454
        ],
        [
         106.559,
         34.488
        ],
        [
         106.514,
         34.498
        ],
        [
         106.514,
         34.512
        ],
        [
         106.455,
         34.532
        ],
        [
         106.39,
         34.524
        ],
        [
         106.39,
         34.625
        ],
        [
         106.419,
         34.643
        ],
        [
         106.471,
         34.634
        ],
        [
         106.442,
         34.675
        ],
        [
         106.457,
         34.704
        ],
        [
         106.487,
         34.715
        ],
        [
         106.506,
         34.747
        ],
        [
         106.539,
         34.746
        ],
        [
         106.575,
         34.77
        ],
        [
         106.551,
         34.829
        ],
        [
         106.556,
         34.861
        ],
        [
         106.528,
         34.877
        ],
        [
         106.493,
         34.941
        ],
        [
         106.485,
         34.984
        ],
        [
         106.495,
         35.006
        ],
        [
         106.495,
         35.006
        ],
        [
         106.522,
         35.028
        ],
        [
         106.542,
         35.084
        ],
        [
         106.577,
         35.089
        ],
        [
         106.615,
         35.071
        ],
        [
         106.706,
         35.082
        ],
        [
         106.711,
         35.101
        ],
        [
         106.838,
         35.08
        ],
        [
         106.902,
         35.095
        ],
        [
         106.95,
         35.067
        ],
        [
         106.991,
         35.068
        ],
        [
         107.013,
         35.03
        ],
        [
         107.083,
         35.024
        ],
        [
         107.09,
         34.977
        ],
        [
         107.12,
         34.95
        ],
        [
         107.162,
         34.944
        ],
        [
         107.189,
         34.893
        ],
        [
         107.253,
         34.881
        ],
        [
         107.287,
         34.932
        ],
        [
         107.35,
         34.934
        ],
        [
         107.369,
         34.918
        ],
        [
         107.401,
         34.933
        ],
        [
         107.455,
         34.917
        ],
        [
         107.524,
         34.91
        ],
        [
         107.564,
         34.969
        ],
        [
         107.62,
         34.965
        ],
        [
         107.639,
         34.935
        ],
        [
         107.675,
         34.951
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.686,
         35.218
        ],
        [
         107.652,
         35.245
        ],
        [
         107.667,
         35.257
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.39,
         35.279
        ],
        [
         108.39,
         35.52
        ],
        [
         106.444,
         35.52
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
         106.39,
         35.52
        ],
        [
         106.39,
         35.275
        ],
        [
         106.416,
         35.276
        ],
        [
         106.472,
         35.311
        ],
        [
         106.501,
         35.364
        ],
        [
         106.504,
         35.415
        ],
        [
         106.483,
         35.45
        ],
        [
         106.49,
         35.481
        ],
        [
         106.466,
         35.481
        ],
        [
         106.444,
         35.52
        ],
        [
         106.39,
         35.52
        ]
       ]
      ]
     ]
    },
    "n": "宁夏回族自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   106.39,
   33.52,
   108.39,
   35.52
  ]
 }
};
