// 本文件由 tools/build.py 自动生成（切片 huabei_jingzhang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huabei_jingzhang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huabei_jingzhang_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "huabei",
  "province": "hebei",
  "title": "京张铁路与詹天佑（1905–1909）",
  "dossier_label": "京张铁路与詹天佑（1905–1909）",
  "subtitle": "京张铁路与詹天佑（1905–1909）",
  "primary_place": "beijing",
  "dossier_event": "event:ev_huabei_jingzhang_llm_01",
  "vocab_pack": "inline:huabei_jingzhang_llm",
  "terrain_grid": "china_coarse",
  "lead": "京张铁路与詹天佑（1905–1909）——floor-8 epoch 收口，huabei/hebei 补强（engineering）。",
  "parties_note": null,
  "subject_names": null,
  "epoch": "huabei",
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
    "note": "京张铁路与詹天佑（1905–1909）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "京张铁路与詹天佑（1905–1909）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "京张铁路与詹天佑（1905–1909）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "京张铁路与詹天佑（1905–1909）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   6
  ],
  "page": "county.html?scene=huabei_jingzhang_llm",
  "key": "huabei_jingzhang_llm",
  "scene_id": "huabei_jingzhang_llm"
 },
 "sources": [
  {
   "id": "qingshi_jiaotong",
   "title": "《清史稿·交通志》",
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
   "id": "beijing",
   "name": "京师",
   "type": "city",
   "modern": "今中国北京",
   "note": "铁路起点",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "zhangjiakou",
   "name": "张家口",
   "type": "city",
   "modern": "今中国河北张家口",
   "note": "铁路终点",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.88,
   "lat": 40.82,
   "geo_note": "平津战役西线",
   "elev": 824
  },
  {
   "id": "badaling",
   "name": "八达岭",
   "type": "region",
   "modern": "今中国北京延庆",
   "note": "设人字形折返线",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HUA__p01",
   "name": "詹天佑",
   "role": "总工程师",
   "note": "主持京张铁路设计施工",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "HUA__p02",
   "name": "袁世凯",
   "role": "直隶总督",
   "note": "奏派詹天佑为总工程师",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HUA_001",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "开工时间",
   "value_text": "光绪三十一年开工",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "光绪三十一年，袁世凯奏派詹天佑为总工程师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "光绪三十一年，袁世凯奏派詹天佑为总工程师",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_002",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "通车时间",
   "value_text": "宣统元年全线通车",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "zhangjiakou",
   "source": "qingshi_jiaotong",
   "quote": "宣统元年全线通车",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宣统元年全线通车",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_003",
   "subject": "person:HUA__p01",
   "predicate": "职务",
   "value_text": "任总工程师",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "袁世凯奏派詹天佑为总工程师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "袁世凯奏派詹天佑为总工程师",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_004",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "设计特点",
   "value_text": "八达岭设人字形折返线",
   "time": {
    "era_text": "光绪三十一年至宣统元年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "badaling",
   "source": "qingshi_jiaotong",
   "quote": "于八达岭段设「人」字形折返线",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于八达岭段设「人」字形折返线",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_005",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "建设方式",
   "value_text": "不借外资、不雇外籍工程师",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "zhangjiakou",
   "source": "qingshi_jiaotong",
   "quote": "不借外资、不雇外籍工程师而成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "不借外资、不雇外籍工程师而成",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_006",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "历史意义",
   "value_text": "我国自建铁路之始",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "zhangjiakou",
   "source": "qingshi_jiaotong",
   "quote": "为我国自建铁路之嚆矢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为我国自建铁路之嚆矢",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_007",
   "subject": "person:HUA__p01",
   "predicate": "技术贡献",
   "value_text": "创新人字形折返线",
   "time": {
    "era_text": "光绪三十一年至宣统元年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "badaling",
   "source": "qingshi_jiaotong",
   "quote": "天佑创新思维",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天佑创新思维",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_008",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "铁路长度",
   "value_text": "长二百余公里",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "长二百余公里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "长二百余公里",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_009",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "通车方式",
   "value_text": "机车推挽越岭",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "badaling",
   "source": "qingshi_jiaotong",
   "quote": "以机车推挽越岭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以机车推挽越岭",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_010",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "奏派者",
   "value_text": "袁世凯奏派",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "总督袁世凯奏派",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "总督袁世凯奏派",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_011",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "铁路性质",
   "value_text": "自建铁路",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "zhangjiakou",
   "source": "qingshi_jiaotong",
   "quote": "为我国自建铁路之嚆矢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为我国自建铁路之嚆矢",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_012",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "资金来源",
   "value_text": "不借外资",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "不借外资",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "不借外资",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_013",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "工程难度",
   "value_text": "八达岭段艰险",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "badaling",
   "source": "qingshi_jiaotong",
   "quote": "于八达岭段设「人」字形折返线",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "由设计推断",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于八达岭段设「人」字形折返线",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_014",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "predicate": "通车意义",
   "value_text": "中国自建铁路开端",
   "time": {
    "era_text": "宣统元年",
    "start": "1909-01-01",
    "end": "1909-12-31",
    "gregorian_year": 1909
   },
   "place": "zhangjiakou",
   "source": "qingshi_jiaotong",
   "quote": "为我国自建铁路之嚆矢",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学界共识",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为我国自建铁路之嚆矢",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HUA_015",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "predicate": "具体开工日期",
   "value_text": "史料未载具体日期",
   "time": {
    "era_text": "光绪三十一年",
    "start": "1905-01-01",
    "end": "1905-12-31",
    "gregorian_year": 1905
   },
   "place": "beijing",
   "source": "qingshi_jiaotong",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "待考",
   "dims": [
    6
   ],
   "lead": {
    "where": "清宫档案或袁世凯奏折",
    "skills": [
     "档案检索"
    ],
    "accept": "具体月日"
   },
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "京张铁路，自京师达张家口，长二百余公里。总督袁世凯奏派詹天佑为总工程师。天佑创新思维，于八达岭段设「人」字形折返线，以机车推挽越岭。宣统元年全线通车，为我国自建铁路之嚆矢，不借外资、不雇外籍工程师而成。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HUA_015"
 ],
 "events": [
  {
   "id": "ev_huabei_jingzhang_llm_01",
   "subject": "event:ev_huabei_jingzhang_llm_01",
   "year": 1905,
   "era": "光绪三十一年",
   "title": "京张铁路开工",
   "kind": "建置",
   "text": "袁世凯奏派詹天佑，京张铁路始建",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_huabei_jingzhang_llm_02",
   "subject": "event:ev_huabei_jingzhang_llm_02",
   "year": 1909,
   "era": "宣统元年",
   "title": "京张铁路通车",
   "kind": "建置",
   "text": "全线通车，自建铁路之始",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "beijing",
   "to": "zhangjiakou",
   "type": "military",
   "label": "铁路路线",
   "_source_idx": 0,
   "_source_name": "《清史稿·交通志》",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "beijing",
   "party": "后世官修",
   "start": 1905,
   "end": 1909,
   "timeline": "main"
  },
  {
   "place_id": "zhangjiakou",
   "party": "后世官修",
   "start": 1905,
   "end": 1909,
   "timeline": "main"
  },
  {
   "place_id": "badaling",
   "party": "后世官修",
   "start": 1905,
   "end": 1909,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "zhangjiakou",
   "name": "张家口",
   "lon": 114.88,
   "lat": 40.82,
   "region": "huabei"
  }
 ],
 "control_years": [
  1905,
  1909
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
        113.88,
        39.82
       ],
       [
        113.88,
        41.82
       ],
       [
        115.88,
        41.82
       ],
       [
        115.88,
        39.82
       ],
       [
        113.88,
        39.82
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
         115.88,
         39.82
        ],
        [
         115.88,
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
         115.88,
         40.358
        ],
        [
         115.88,
         40.202
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
         115.558,
         39.82
        ],
        [
         115.88,
         39.82
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
         115.88,
         41.82
        ],
        [
         115.623,
         41.82
        ],
        [
         115.574,
         41.806
        ],
        [
         115.52,
         41.768
        ],
        [
         115.488,
         41.761
        ],
        [
         115.43,
         41.729
        ],
        [
         115.347,
         41.712
        ],
        [
         115.319,
         41.692
        ],
        [
         115.361,
         41.661
        ],
        [
         115.346,
         41.636
        ],
        [
         115.378,
         41.603
        ],
        [
         115.31,
         41.593
        ],
        [
         115.29,
         41.623
        ],
        [
         115.266,
         41.616
        ],
        [
         115.257,
         41.581
        ],
        [
         115.204,
         41.571
        ],
        [
         115.195,
         41.602
        ],
        [
         115.099,
         41.624
        ],
        [
         115.056,
         41.602
        ],
        [
         115.016,
         41.615
        ],
        [
         114.861,
         41.601
        ],
        [
         114.895,
         41.636
        ],
        [
         114.903,
         41.696
        ],
        [
         114.896,
         41.768
        ],
        [
         114.869,
         41.814
        ],
        [
         114.899,
         41.82
        ],
        [
         114.234,
         41.82
        ],
        [
         114.201,
         41.79
        ],
        [
         114.215,
         41.756
        ],
        [
         114.207,
         41.739
        ],
        [
         114.238,
         41.699
        ],
        [
         114.215,
         41.685
        ],
        [
         114.259,
         41.623
        ],
        [
         114.226,
         41.617
        ],
        [
         114.221,
         41.582
        ],
        [
         114.231,
         41.514
        ],
        [
         114.101,
         41.538
        ],
        [
         114.032,
         41.53
        ],
        [
         113.977,
         41.506
        ],
        [
         113.954,
         41.484
        ],
        [
         113.933,
         41.487
        ],
        [
         113.92,
         41.454
        ],
        [
         113.88,
         41.432
        ],
        [
         113.88,
         41.411
        ],
        [
         113.945,
         41.392
        ],
        [
         113.925,
         41.326
        ],
        [
         113.899,
         41.316
        ],
        [
         113.915,
         41.295
        ],
        [
         113.951,
         41.283
        ],
        [
         113.971,
         41.24
        ],
        [
         113.992,
         41.27
        ],
        [
         114.016,
         41.232
        ],
        [
         113.997,
         41.192
        ],
        [
         113.961,
         41.171
        ],
        [
         113.92,
         41.172
        ],
        [
         113.88,
         41.119
        ],
        [
         113.88,
         41.059
        ],
        [
         113.973,
         40.983
        ],
        [
         113.995,
         40.939
        ],
        [
         114.058,
         40.925
        ],
        [
         114.042,
         40.918
        ],
        [
         114.055,
         40.868
        ],
        [
         114.074,
         40.857
        ],
        [
         114.045,
         40.831
        ],
        [
         114.08,
         40.79
        ],
        [
         114.104,
         40.798
        ],
        [
         114.103,
         40.771
        ],
        [
         114.135,
         40.737
        ],
        [
         114.162,
         40.714
        ],
        [
         114.183,
         40.672
        ],
        [
         114.236,
         40.607
        ],
        [
         114.283,
         40.591
        ],
        [
         114.274,
         40.553
        ],
        [
         114.294,
         40.552
        ],
        [
         114.282,
         40.495
        ],
        [
         114.267,
         40.474
        ],
        [
         114.3,
         40.44
        ],
        [
         114.286,
         40.425
        ],
        [
         114.312,
         40.373
        ],
        [
         114.381,
         40.363
        ],
        [
         114.39,
         40.351
        ],
        [
         114.439,
         40.372
        ],
        [
         114.481,
         40.348
        ],
        [
         114.531,
         40.345
        ],
        [
         114.511,
         40.303
        ],
        [
         114.47,
         40.268
        ],
        [
         114.406,
         40.246
        ],
        [
         114.363,
         40.25
        ],
        [
         114.293,
         40.23
        ],
        [
         114.255,
         40.236
        ],
        [
         114.236,
         40.198
        ],
        [
         114.18,
         40.191
        ],
        [
         114.136,
         40.175
        ],
        [
         114.098,
         40.194
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.102,
         40.1
        ],
        [
         114.087,
         40.072
        ],
        [
         114.046,
         40.057
        ],
        [
         114.018,
         40.104
        ],
        [
         113.989,
         40.112
        ],
        [
         113.959,
         40.033
        ],
        [
         113.91,
         40.016
        ],
        [
         114.029,
         39.986
        ],
        [
         114.028,
         39.959
        ],
        [
         114.047,
         39.916
        ],
        [
         114.068,
         39.923
        ],
        [
         114.174,
         39.898
        ],
        [
         114.212,
         39.919
        ],
        [
         114.229,
         39.9
        ],
        [
         114.204,
         39.885
        ],
        [
         114.216,
         39.862
        ],
        [
         114.287,
         39.871
        ],
        [
         114.286,
         39.858
        ],
        [
         114.395,
         39.867
        ],
        [
         114.407,
         39.833
        ],
        [
         114.391,
         39.82
        ],
        [
         115.558,
         39.82
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
         115.88,
         40.202
        ],
        [
         115.88,
         40.358
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
         115.88,
         40.595
        ],
        [
         115.88,
         41.82
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
         113.88,
         39.82
        ],
        [
         114.391,
         39.82
        ],
        [
         114.407,
         39.833
        ],
        [
         114.395,
         39.867
        ],
        [
         114.286,
         39.858
        ],
        [
         114.287,
         39.871
        ],
        [
         114.216,
         39.862
        ],
        [
         114.204,
         39.885
        ],
        [
         114.229,
         39.9
        ],
        [
         114.212,
         39.919
        ],
        [
         114.174,
         39.898
        ],
        [
         114.068,
         39.923
        ],
        [
         114.047,
         39.916
        ],
        [
         114.028,
         39.959
        ],
        [
         114.029,
         39.986
        ],
        [
         113.91,
         40.016
        ],
        [
         113.959,
         40.033
        ],
        [
         113.989,
         40.112
        ],
        [
         114.018,
         40.104
        ],
        [
         114.046,
         40.057
        ],
        [
         114.087,
         40.072
        ],
        [
         114.102,
         40.1
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.098,
         40.194
        ],
        [
         114.136,
         40.175
        ],
        [
         114.18,
         40.191
        ],
        [
         114.236,
         40.198
        ],
        [
         114.255,
         40.236
        ],
        [
         114.293,
         40.23
        ],
        [
         114.363,
         40.25
        ],
        [
         114.406,
         40.246
        ],
        [
         114.47,
         40.268
        ],
        [
         114.511,
         40.303
        ],
        [
         114.531,
         40.345
        ],
        [
         114.481,
         40.348
        ],
        [
         114.439,
         40.372
        ],
        [
         114.39,
         40.351
        ],
        [
         114.381,
         40.363
        ],
        [
         114.312,
         40.373
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.44
        ],
        [
         114.267,
         40.474
        ],
        [
         114.282,
         40.495
        ],
        [
         114.294,
         40.552
        ],
        [
         114.274,
         40.553
        ],
        [
         114.283,
         40.591
        ],
        [
         114.236,
         40.607
        ],
        [
         114.183,
         40.672
        ],
        [
         114.162,
         40.714
        ],
        [
         114.135,
         40.737
        ],
        [
         114.085,
         40.73
        ],
        [
         114.064,
         40.707
        ],
        [
         114.072,
         40.679
        ],
        [
         114.042,
         40.609
        ],
        [
         114.077,
         40.576
        ],
        [
         114.08,
         40.548
        ],
        [
         114.062,
         40.529
        ],
        [
         114.011,
         40.516
        ],
        [
         113.949,
         40.515
        ],
        [
         113.89,
         40.467
        ],
        [
         113.88,
         40.465
        ],
        [
         113.88,
         39.82
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.88,
        41.82
       ],
       [
        113.88,
        40.465
       ],
       [
        113.89,
        40.467
       ],
       [
        113.949,
        40.515
       ],
       [
        114.011,
        40.516
       ],
       [
        114.062,
        40.529
       ],
       [
        114.08,
        40.548
       ],
       [
        114.077,
        40.576
       ],
       [
        114.042,
        40.609
       ],
       [
        114.072,
        40.679
       ],
       [
        114.064,
        40.707
       ],
       [
        114.085,
        40.73
       ],
       [
        114.135,
        40.737
       ],
       [
        114.103,
        40.771
       ],
       [
        114.104,
        40.798
       ],
       [
        114.08,
        40.79
       ],
       [
        114.045,
        40.831
       ],
       [
        114.074,
        40.857
       ],
       [
        114.055,
        40.868
       ],
       [
        114.042,
        40.918
       ],
       [
        114.058,
        40.925
       ],
       [
        113.995,
        40.939
       ],
       [
        113.973,
        40.983
       ],
       [
        113.88,
        41.059
       ],
       [
        113.88,
        41.119
       ],
       [
        113.92,
        41.172
       ],
       [
        113.961,
        41.171
       ],
       [
        113.997,
        41.192
       ],
       [
        114.016,
        41.232
       ],
       [
        113.992,
        41.27
       ],
       [
        113.971,
        41.24
       ],
       [
        113.951,
        41.283
       ],
       [
        113.915,
        41.295
       ],
       [
        113.899,
        41.316
       ],
       [
        113.925,
        41.326
       ],
       [
        113.945,
        41.392
       ],
       [
        113.88,
        41.411
       ],
       [
        113.88,
        41.432
       ],
       [
        113.92,
        41.454
       ],
       [
        113.933,
        41.487
       ],
       [
        113.954,
        41.484
       ],
       [
        113.977,
        41.506
       ],
       [
        114.032,
        41.53
       ],
       [
        114.101,
        41.538
       ],
       [
        114.231,
        41.514
       ],
       [
        114.221,
        41.582
       ],
       [
        114.226,
        41.617
       ],
       [
        114.259,
        41.623
       ],
       [
        114.215,
        41.685
       ],
       [
        114.238,
        41.699
       ],
       [
        114.207,
        41.739
       ],
       [
        114.215,
        41.756
       ],
       [
        114.201,
        41.79
       ],
       [
        114.234,
        41.82
       ],
       [
        114.899,
        41.82
       ],
       [
        114.869,
        41.814
       ],
       [
        114.896,
        41.768
       ],
       [
        114.903,
        41.696
       ],
       [
        114.895,
        41.636
       ],
       [
        114.861,
        41.601
       ],
       [
        115.016,
        41.615
       ],
       [
        115.056,
        41.602
       ],
       [
        115.099,
        41.624
       ],
       [
        115.195,
        41.602
       ],
       [
        115.204,
        41.571
       ],
       [
        115.257,
        41.581
       ],
       [
        115.266,
        41.616
       ],
       [
        115.29,
        41.623
       ],
       [
        115.31,
        41.593
       ],
       [
        115.378,
        41.603
       ],
       [
        115.346,
        41.636
       ],
       [
        115.361,
        41.661
       ],
       [
        115.319,
        41.692
       ],
       [
        115.347,
        41.712
       ],
       [
        115.43,
        41.729
       ],
       [
        115.488,
        41.761
       ],
       [
        115.52,
        41.768
       ],
       [
        115.574,
        41.806
       ],
       [
        115.623,
        41.82
       ],
       [
        113.88,
        41.82
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   113.88,
   39.82,
   115.88,
   41.82
  ]
 }
};
