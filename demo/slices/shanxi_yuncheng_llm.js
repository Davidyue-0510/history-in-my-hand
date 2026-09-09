// 本文件由 tools/build.py 自动生成（切片 shanxi_yuncheng_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanxi_yuncheng_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanxi_yuncheng_llm"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "province": "shanxi",
  "title": "河东盐池与盐铁之利（汉—清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "hedong_yanchi",
  "dossier_event": "event:ev_shanxi_yuncheng_llm_01",
  "vocab_pack": "inline:shanxi_yuncheng_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "han",
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
    "note": "河东盐池与盐铁之利（汉—清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "河东盐池与盐铁之利（汉—清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "河东盐池与盐铁之利（汉—清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "河东盐池与盐铁之利（汉—清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=shanxi_yuncheng_llm",
  "key": "shanxi_yuncheng_llm",
  "scene_id": "shanxi_yuncheng_llm"
 },
 "sources": [
  {
   "id": "yuncheng_src",
   "title": "史记·货殖列传 / 河东盐法志",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固/盐法志",
   "period": "汉/清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "hedong_yanchi",
   "name": "河东盐池",
   "type": "region",
   "modern": "今山西运城",
   "note": "解池，周百二十里",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 111.23,
   "lat": 35.16,
   "geo_note": "裴氏郡望，今山西闻喜",
   "geo_match": "substring",
   "elev": 597
  },
  {
   "id": "hedong",
   "name": "河东",
   "type": "region",
   "modern": "今山西西南部",
   "note": "河东一道仰给于池",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 111.23,
   "lat": 35.16,
   "geo_note": "裴氏郡望，今山西闻喜",
   "elev": 597
  },
  {
   "id": "puzhou",
   "name": "蒲州",
   "type": "city",
   "modern": "今山西永济",
   "note": "盐池在蒲州东南",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 110.45,
   "lat": 34.85,
   "geo_note": "今山西永济（蒲州渡）",
   "elev": 1017
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "护盐都尉",
   "role": "汉代盐官",
   "note": "汉置护盐都尉管理盐池",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "女盐监",
   "role": "唐代盐官",
   "note": "唐设女盐监管理盐务",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p03",
   "name": "晋商",
   "role": "商人群体",
   "note": "因开中法而兴",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "place:hedong_yanchi",
   "predicate": "地理特征",
   "value_text": "盐池周百二十里",
   "time": {
    "era_text": "汉",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "周百二十里",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周百二十里",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "place:hedong_yanchi",
   "predicate": "生产方式",
   "value_text": "天日生盐，不俟人力",
   "time": {
    "era_text": "汉",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "天日生盐，不俟人力",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天日生盐，不俟人力",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shanxi_yuncheng_llm_01",
   "predicate": "建置",
   "value_text": "汉置护盐都尉",
   "time": {
    "era_text": "汉",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "汉置护盐都尉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉置护盐都尉",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shanxi_yuncheng_llm_02",
   "predicate": "建置",
   "value_text": "唐有女盐监",
   "time": {
    "era_text": "唐",
    "start": "618"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "唐有女盐监",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐有女盐监",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shanxi_yuncheng_llm_03",
   "predicate": "制度",
   "value_text": "宋行钞引",
   "time": {
    "era_text": "宋",
    "start": "960"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "宋行钞引",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋行钞引",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "event:ev_shanxi_yuncheng_llm_04",
   "predicate": "制度",
   "value_text": "明初开中法召商输粮与盐",
   "time": {
    "era_text": "明初",
    "start": "1370"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "召商输粮而与之盐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "召商输粮而与之盐",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "event:ev_shanxi_yuncheng_llm_04",
   "predicate": "影响",
   "value_text": "盐引实边，晋商由此兴",
   "time": {
    "era_text": "明初",
    "start": "1370"
   },
   "place": "hedong",
   "source": "yuncheng_src",
   "quote": "盐引实边，晋商由此兴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "盐引实边，晋商由此兴",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:hedong_yanchi",
   "predicate": "经济地位",
   "value_text": "盐利甲天下",
   "time": {
    "era_text": "汉—清",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "盐利甲天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "盐利甲天下",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "place:hedong",
   "predicate": "经济依赖",
   "value_text": "河东一道仰给于池",
   "time": {
    "era_text": "汉—清",
    "start": "-140"
   },
   "place": "hedong",
   "source": "yuncheng_src",
   "quote": "河东一道仰给于池",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "河东一道仰给于池",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:hedong_yanchi",
   "predicate": "国家财政",
   "value_text": "禁榷之利为国计所倚",
   "time": {
    "era_text": "汉—清",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "禁榷之利为国计所倚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁榷之利为国计所倚",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:hedong_yanchi",
   "predicate": "生产方式",
   "value_text": "天日生盐，不俟人力",
   "time": {
    "era_text": "汉",
    "start": "-140"
   },
   "place": "hedong_yanchi",
   "source": "yuncheng_src",
   "quote": "天日生盐，不俟人力",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者对自然结晶效率有争议",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天日生盐，不俟人力",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shanxi_yuncheng_llm_04",
   "predicate": "制度效果",
   "value_text": "开中法是否长期有效存疑",
   "time": {
    "era_text": "明初",
    "start": "1370"
   },
   "place": "hedong",
   "source": "yuncheng_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏具体盐引数量记载",
   "dims": [
    3
   ],
   "lead": {
    "where": "明代盐引档案",
    "skills": [
     "档案分析"
    ],
    "accept": "开中法实际执行数据"
   },
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "河东盐池（解池）在蒲州东南，周百二十里，'天日生盐，不俟人力'。汉置护盐都尉，唐有女盐监，宋行钞引，明初开中法'召商输粮而与之盐'，盐引实边，晋商由此兴。盐利甲天下，河东一道仰给于池，'禁榷之利为国计所倚'。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_012"
 ],
 "events": [
  {
   "id": "ev_shanxi_yuncheng_llm_01",
   "subject": "event:ev_shanxi_yuncheng_llm_01",
   "year": -140,
   "era": "汉",
   "title": "汉置护盐都尉",
   "kind": "建置",
   "text": "汉设护盐都尉管理河东盐池",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanxi_yuncheng_llm_02",
   "subject": "event:ev_shanxi_yuncheng_llm_02",
   "year": 618,
   "era": "唐",
   "title": "唐设女盐监",
   "kind": "建置",
   "text": "唐设女盐监管理盐务",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanxi_yuncheng_llm_03",
   "subject": "event:ev_shanxi_yuncheng_llm_03",
   "year": 960,
   "era": "宋",
   "title": "宋行钞引",
   "kind": "制度",
   "text": "宋代实行盐钞引制度",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanxi_yuncheng_llm_04",
   "subject": "event:ev_shanxi_yuncheng_llm_04",
   "year": 1370,
   "era": "明初",
   "title": "明行开中法",
   "kind": "制度",
   "text": "明初开中法召商输粮与盐",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 河东盐法志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "hedong_yanchi",
   "party": "后世官修",
   "start": 618,
   "end": 1370,
   "timeline": "main"
  },
  {
   "place_id": "hedong",
   "party": "后世官修",
   "start": 618,
   "end": 1370,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "hedong_yanchi",
   "name": "河东盐池",
   "lon": 111.23,
   "lat": 35.16,
   "region": "tech"
  },
  {
   "place_id": "hedong",
   "name": "河东",
   "lon": 111.23,
   "lat": 35.16,
   "region": "tech"
  }
 ],
 "control_years": [
  618,
  1370
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
        109.45,
        33.85
       ],
       [
        109.45,
        36.16
       ],
       [
        112.23,
        36.16
       ],
       [
        112.23,
        33.85
       ],
       [
        109.45,
        33.85
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
         110.379,
         34.601
        ],
        [
         110.425,
         34.588
        ],
        [
         110.488,
         34.611
        ],
        [
         110.533,
         34.583
        ],
        [
         110.611,
         34.608
        ],
        [
         110.71,
         34.605
        ],
        [
         110.749,
         34.652
        ],
        [
         110.792,
         34.65
        ],
        [
         110.825,
         34.616
        ],
        [
         110.884,
         34.644
        ],
        [
         110.903,
         34.669
        ],
        [
         110.92,
         34.73
        ],
        [
         110.976,
         34.706
        ],
        [
         111.035,
         34.741
        ],
        [
         111.118,
         34.757
        ],
        [
         111.149,
         34.808
        ],
        [
         111.233,
         34.79
        ],
        [
         111.255,
         34.82
        ],
        [
         111.292,
         34.807
        ],
        [
         111.346,
         34.832
        ],
        [
         111.389,
         34.815
        ],
        [
         111.439,
         34.838
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.23,
         35.244
        ],
        [
         112.23,
         36.16
        ],
        [
         110.448,
         36.16
        ],
        [
         110.468,
         36.075
        ],
        [
         110.492,
         36.035
        ],
        [
         110.493,
         35.994
        ],
        [
         110.517,
         35.972
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.919
        ],
        [
         110.512,
         35.88
        ],
        [
         110.549,
         35.878
        ],
        [
         110.55,
         35.838
        ],
        [
         110.571,
         35.801
        ],
        [
         110.578,
         35.702
        ],
        [
         110.61,
         35.632
        ],
        [
         110.589,
         35.602
        ],
        [
         110.568,
         35.54
        ],
        [
         110.531,
         35.511
        ],
        [
         110.478,
         35.414
        ],
        [
         110.45,
         35.328
        ],
        [
         110.375,
         35.252
        ],
        [
         110.379,
         35.211
        ],
        [
         110.364,
         35.198
        ],
        [
         110.374,
         35.134
        ],
        [
         110.321,
         35.005
        ],
        [
         110.262,
         34.944
        ],
        [
         110.231,
         34.881
        ],
        [
         110.247,
         34.789
        ],
        [
         110.243,
         34.726
        ],
        [
         110.23,
         34.693
        ],
        [
         110.269,
         34.63
        ],
        [
         110.295,
         34.611
        ],
        [
         110.379,
         34.601
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.23,
         33.85
        ],
        [
         112.23,
         35.244
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.439,
         34.838
        ],
        [
         111.389,
         34.815
        ],
        [
         111.346,
         34.832
        ],
        [
         111.292,
         34.807
        ],
        [
         111.255,
         34.82
        ],
        [
         111.233,
         34.79
        ],
        [
         111.149,
         34.808
        ],
        [
         111.118,
         34.757
        ],
        [
         111.035,
         34.741
        ],
        [
         110.976,
         34.706
        ],
        [
         110.92,
         34.73
        ],
        [
         110.903,
         34.669
        ],
        [
         110.884,
         34.644
        ],
        [
         110.825,
         34.616
        ],
        [
         110.792,
         34.65
        ],
        [
         110.749,
         34.652
        ],
        [
         110.71,
         34.605
        ],
        [
         110.611,
         34.608
        ],
        [
         110.533,
         34.583
        ],
        [
         110.488,
         34.611
        ],
        [
         110.425,
         34.588
        ],
        [
         110.379,
         34.601
        ],
        [
         110.367,
         34.567
        ],
        [
         110.405,
         34.558
        ],
        [
         110.372,
         34.544
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.504,
         34.337
        ],
        [
         110.452,
         34.293
        ],
        [
         110.429,
         34.288
        ],
        [
         110.44,
         34.243
        ],
        [
         110.508,
         34.217
        ],
        [
         110.552,
         34.213
        ],
        [
         110.558,
         34.193
        ],
        [
         110.622,
         34.177
        ],
        [
         110.642,
         34.161
        ],
        [
         110.614,
         34.113
        ],
        [
         110.592,
         34.102
        ],
        [
         110.587,
         34.023
        ],
        [
         110.621,
         34.036
        ],
        [
         110.671,
         33.966
        ],
        [
         110.666,
         33.938
        ],
        [
         110.627,
         33.925
        ],
        [
         110.629,
         33.91
        ],
        [
         110.587,
         33.888
        ],
        [
         110.612,
         33.852
        ],
        [
         110.663,
         33.853
        ],
        [
         110.67,
         33.85
        ],
        [
         112.23,
         33.85
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
         110.379,
         34.601
        ],
        [
         110.295,
         34.611
        ],
        [
         110.269,
         34.63
        ],
        [
         110.23,
         34.693
        ],
        [
         110.243,
         34.726
        ],
        [
         110.247,
         34.789
        ],
        [
         110.231,
         34.881
        ],
        [
         110.262,
         34.944
        ],
        [
         110.321,
         35.005
        ],
        [
         110.374,
         35.134
        ],
        [
         110.364,
         35.198
        ],
        [
         110.379,
         35.211
        ],
        [
         110.375,
         35.252
        ],
        [
         110.45,
         35.328
        ],
        [
         110.478,
         35.414
        ],
        [
         110.531,
         35.511
        ],
        [
         110.568,
         35.54
        ],
        [
         110.589,
         35.602
        ],
        [
         110.61,
         35.632
        ],
        [
         110.578,
         35.702
        ],
        [
         110.571,
         35.801
        ],
        [
         110.55,
         35.838
        ],
        [
         110.549,
         35.878
        ],
        [
         110.512,
         35.88
        ],
        [
         110.517,
         35.919
        ],
        [
         110.502,
         35.948
        ],
        [
         110.517,
         35.972
        ],
        [
         110.493,
         35.994
        ],
        [
         110.492,
         36.035
        ],
        [
         110.468,
         36.075
        ],
        [
         110.448,
         36.16
        ],
        [
         109.45,
         36.16
        ],
        [
         109.45,
         33.85
        ],
        [
         110.67,
         33.85
        ],
        [
         110.663,
         33.853
        ],
        [
         110.612,
         33.852
        ],
        [
         110.587,
         33.888
        ],
        [
         110.629,
         33.91
        ],
        [
         110.627,
         33.925
        ],
        [
         110.666,
         33.938
        ],
        [
         110.671,
         33.966
        ],
        [
         110.621,
         34.036
        ],
        [
         110.587,
         34.023
        ],
        [
         110.592,
         34.102
        ],
        [
         110.614,
         34.113
        ],
        [
         110.642,
         34.161
        ],
        [
         110.622,
         34.177
        ],
        [
         110.558,
         34.193
        ],
        [
         110.552,
         34.213
        ],
        [
         110.508,
         34.217
        ],
        [
         110.44,
         34.243
        ],
        [
         110.429,
         34.288
        ],
        [
         110.452,
         34.293
        ],
        [
         110.504,
         34.337
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.372,
         34.544
        ],
        [
         110.405,
         34.558
        ],
        [
         110.367,
         34.567
        ],
        [
         110.379,
         34.601
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.47,
        36.16
       ],
       [
        110.49,
        36.006
       ],
       [
        110.576,
        35.733
       ],
       [
        110.579,
        35.534
       ],
       [
        110.459,
        35.343
       ],
       [
        110.366,
        35.234
       ],
       [
        110.316,
        35.135
       ],
       [
        110.278,
        35.008
       ],
       [
        110.262,
        34.868
       ],
       [
        110.27,
        34.637
       ],
       [
        110.465,
        34.597
       ],
       [
        110.619,
        34.604
       ],
       [
        110.795,
        34.645
       ],
       [
        110.89,
        34.683
       ],
       [
        110.97,
        34.724
       ],
       [
        111.027,
        34.746
       ],
       [
        111.101,
        34.795
       ],
       [
        111.243,
        34.83
       ],
       [
        111.453,
        34.852
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.23,
        34.984
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   109.45,
   33.85,
   112.23,
   36.16
  ]
 }
};
