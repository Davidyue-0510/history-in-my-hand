// 本文件由 tools/build.py 自动生成（切片 dongbei_kanglian_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dongbei_kanglian_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dongbei_kanglian_llm"] = {
 "meta": {
  "kind": "uprising",
  "region": "jianzhou",
  "province": "heilongjiang",
  "title": "东北抗日联军（1931—1945）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dongbei",
  "dossier_event": "event:ev_dongbei_kanglian_llm_01",
  "vocab_pack": "dongbei_kanglian_llm",
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
    "note": "东北抗日联军（1931—1945）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "东北抗日联军（1931—1945）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "东北抗日联军（1931—1945）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "东北抗日联军（1931—1945）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   5,
   6
  ],
  "page": "county.html?scene=dongbei_kanglian_llm",
  "key": "dongbei_kanglian_llm",
  "scene_id": "dongbei_kanglian_llm"
 },
 "sources": [
  {
   "id": "kanglian_llm_src",
   "title": "东北抗联史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1931—1945",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "dongbei",
   "name": "东北",
   "type": "region",
   "modern": "今中国东北地区",
   "note": "抗联活动区域",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "mengjiang",
   "name": "濛江",
   "type": "county",
   "modern": "今中国吉林省靖宇县",
   "note": "杨靖宇殉国地",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "baishan_heishui",
   "name": "白山黑水",
   "type": "region",
   "modern": "今中国东北长白山及黑龙江流域",
   "note": "抗联游击区域",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "DON__p01",
   "name": "杨靖宇",
   "role": "东北抗日联军第一路军总司令",
   "note": "1940年殉国于濛江",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "DON__p02",
   "name": "赵尚志",
   "role": "东北抗日联军第三军军长",
   "note": "抗联主要将领",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "DON__p03",
   "name": "关东军",
   "role": "日本驻东北侵略军",
   "note": "抗联主要作战对象",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DON_001",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "爆发时间",
   "value_text": "1931年九一八事变",
   "time": {
    "era_text": "民国二十年",
    "start": "1931-09-18",
    "gregorian_year": 1931
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "1931年九一八事变",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1931年九一八事变",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_002",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "性质",
   "value_text": "中共领导抗日武装",
   "time": {
    "era_text": "民国二十年",
    "start": "1931-01-01",
    "end": "1931-12-31",
    "gregorian_year": 1931
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "中共领导的东北抗日武装",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中共领导的东北抗日武装",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_003",
   "subject": "person:DON__p01",
   "predicate": "职务",
   "value_text": "第一路军总司令",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "杨靖宇、赵尚志等部",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "杨靖宇、赵尚志等部",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_004",
   "subject": "person:DON__p02",
   "predicate": "职务",
   "value_text": "第三军军长",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "杨靖宇、赵尚志等部",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "杨靖宇、赵尚志等部",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_005",
   "subject": "event:ev_dongbei_kanglian_llm_02",
   "predicate": "殉国地点",
   "value_text": "濛江",
   "time": {
    "era_text": "民国二十九年",
    "start": "1940-01-01",
    "end": "1940-12-31",
    "gregorian_year": 1940
   },
   "place": "mengjiang",
   "source": "kanglian_llm_src",
   "quote": "1940年杨靖宇殉国于濛江",
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
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1940年杨靖宇殉国于濛江",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_006",
   "subject": "event:ev_dongbei_kanglian_llm_02",
   "predicate": "殉国年份",
   "value_text": "1940年",
   "time": {
    "era_text": "民国二十九年",
    "start": "1940-01-01",
    "end": "1940-12-31",
    "gregorian_year": 1940
   },
   "place": "mengjiang",
   "source": "kanglian_llm_src",
   "quote": "1940年杨靖宇殉国于濛江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1940年杨靖宇殉国于濛江",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_007",
   "subject": "event:ev_dongbei_kanglian_llm_03",
   "predicate": "行动",
   "value_text": "配合苏军反攻",
   "time": {
    "era_text": "民国三十四年",
    "start": "1945-01-01",
    "end": "1945-12-31",
    "gregorian_year": 1945
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "1945年抗联配合苏军反攻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "1945年抗联配合苏军反攻",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_008",
   "subject": "event:ev_dongbei_kanglian_llm_03",
   "predicate": "结果",
   "value_text": "光复东北",
   "time": {
    "era_text": "民国三十四年",
    "start": "1945-01-01",
    "end": "1945-12-31",
    "gregorian_year": 1945
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "光复东北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "光复东北",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_009",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "作战对象",
   "value_text": "日军关东军",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "游击日军，牵制关东军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "游击日军，牵制关东军",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_010",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "战略作用",
   "value_text": "牵制关东军",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "牵制关东军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "牵制关东军",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_011",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "活动区域",
   "value_text": "白山黑水间",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "baishan_heishui",
   "source": "kanglian_llm_src",
   "quote": "在白山黑水间游击日军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "在白山黑水间游击日军",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_012",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "持续时间",
   "value_text": "十四年抗战",
   "time": {
    "era_text": "民国二十年至三十四年",
    "start": "1931-01-01",
    "end": "1931-12-31",
    "gregorian_year": 1931
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "十四年抗战中",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "十四年抗战中",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_013",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "艰苦程度",
   "value_text": "艰苦卓绝",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "艰苦卓绝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "艰苦卓绝",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_014",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "领导力量",
   "value_text": "中共领导",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "中共领导的东北抗日武装",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "中共领导的东北抗日武装",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DON_015",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "predicate": "史料不足",
   "value_text": "具体战役细节缺失",
   "time": {
    "era_text": "民国年间",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "dongbei",
   "source": "kanglian_llm_src",
   "quote": "史料未详",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "东北抗联档案",
    "skills": [
     "历史档案检索"
    ],
    "accept": "补充具体战斗记录"
   },
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史料未详",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DON_015"
 ],
 "events": [
  {
   "id": "ev_dongbei_kanglian_llm_01",
   "subject": "event:ev_dongbei_kanglian_llm_01",
   "year": 1931,
   "era": "民国二十年",
   "title": "九一八事变",
   "kind": "战事",
   "text": "日本侵占东北，抗联兴起",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dongbei_kanglian_llm_02",
   "subject": "event:ev_dongbei_kanglian_llm_02",
   "year": 1940,
   "era": "民国二十九年",
   "title": "杨靖宇殉国",
   "kind": "战事",
   "text": "杨靖宇在濛江牺牲",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_dongbei_kanglian_llm_03",
   "subject": "event:ev_dongbei_kanglian_llm_03",
   "year": 1945,
   "era": "民国三十四年",
   "title": "配合苏军反攻",
   "kind": "战事",
   "text": "抗联配合苏军光复东北",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "dongbei",
   "to": "mengjiang",
   "type": "military",
   "label": "抗联游击路线",
   "_source_idx": 0,
   "_source_name": "东北抗联史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "control": [
  {
   "place_id": "dongbei",
   "party": "东北抗联",
   "start": 1931,
   "end": 1945,
   "basis": "historical: kanglian_llm_src 1931-1945"
  }
 ],
 "control_seats": [],
 "control_years": [
  1931,
  1945
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
   "后世官修",
   "东北抗联",
   "日军"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "东北抗联": "东北抗联",
   "日军": "日军"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "东北抗联": "#C62828",
   "日军": "#AD1457"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_东北抗联": {
    "name": "东北抗联",
    "macro_party": "东北抗联",
    "note": "auto"
   },
   "f_日军": {
    "name": "日军",
    "macro_party": "日军",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A",
   "f_东北抗联": "#C62828",
   "f_日军": "#AD1457"
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
        122.43,
        40.35
       ],
       [
        122.43,
        43.35
       ],
       [
        126.35,
        43.35
       ],
       [
        126.35,
        40.35
       ],
       [
        122.43,
        40.35
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        122.43,
        43.35
       ],
       [
        122.43,
        42.732
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.43,
        42.771
       ],
       [
        122.43,
        42.842
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.703,
        43.35
       ],
       [
        122.43,
        43.35
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         124.732,
         40.35
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.934,
         43.35
        ],
        [
         123.703,
         43.35
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.43,
         42.842
        ],
        [
         122.43,
         42.771
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.43,
         42.732
        ],
        [
         122.43,
         40.35
        ],
        [
         124.732,
         40.35
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         126.35,
         43.35
        ],
        [
         123.934,
         43.35
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.35,
         41.243
        ],
        [
         126.35,
         43.35
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.609,
       43.35
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.43,
       41.175
      ],
      [
       122.43,
       41.075
      ],
      [
       122.44,
       41.055
      ],
      [
       122.43,
       41.037
      ]
     ]
    },
    "n": "Liao"
   }
  ],
  "lakes": [],
  "_bbox": [
   122.43,
   40.35,
   126.35,
   43.35
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
