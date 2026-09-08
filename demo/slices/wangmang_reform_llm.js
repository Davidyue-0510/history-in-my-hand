// 本文件由 tools/build.py 自动生成（切片 wangmang_reform_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wangmang_reform_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wangmang_reform_llm"] = {
 "meta": {
  "kind": "reform",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "新莽·王莽改制（托古变法）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "changan",
  "dossier_event": "event:ev_wangmang_reform_llm_01",
  "vocab_pack": "inline:wangmang_reform_llm",
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
    "note": "新莽·王莽改制（托古变法）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "新莽·王莽改制（托古变法）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "新莽·王莽改制（托古变法）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "新莽·王莽改制（托古变法）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=wangmang_reform_llm",
  "key": "wangmang_reform_llm",
  "scene_id": "wangmang_reform_llm"
 },
 "sources": [
  {
   "id": "wangmang_reform_src",
   "title": "《汉书·王莽传》与王莽改制",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
   "period": "新莽",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "junguo",
   "name": "郡国",
   "type": "region",
   "modern": "今中国各地",
   "note": "地方行政单位",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "今中国陕西西安",
   "note": "新朝都城",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  }
 ],
 "persons": [
  {
   "id": "WAN__p01",
   "name": "王莽",
   "role": "新朝皇帝",
   "note": "托古改制之主",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "WAN_001",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "天下田曰王田，禁民买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "天下田曰王田，禁民买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "天下田曰王田，禁民买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_002",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策效果",
   "value_text": "王田制未竟，反致大乱",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "王田五均皆未竟，反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王田五均皆未竟，反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_003",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "设五均司市，平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "于长安及郡国设五均司市",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于长安及郡国设五均司市",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_004",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "农商交困，币制大乱",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_005",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起，新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_006",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "理论依据",
   "value_text": "依《周礼》空文改制",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "改制多依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "改制多依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_007",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "官营范围",
   "value_text": "盐铁酒等六筦官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "酒盐铁币名山大泽五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "酒盐铁币名山大泽五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_008",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "奴婢政策",
   "value_text": "禁奴婢买卖，曰私属",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_009",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "货币改革",
   "value_text": "五物六名二十八品",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "作金、银、龟、贝、钱、布五物六名二十八品",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "作金、银、龟、贝、钱、布五物六名二十八品",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_010",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "对外征伐",
   "value_text": "征匈奴高句丽西南夷",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_011",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，多依周礼",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "王莽托古改制",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王莽托古改制",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_012",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "地皇四年新朝灭亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_013",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "空文未竟，天下大乱",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "王田五均皆未竟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王田五均皆未竟",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_014",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "起义军",
   "value_text": "绿林赤眉起义军",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_015",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "土地制度",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_016",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_017",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制混乱，农商交困",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_018",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_019",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制理想化，脱离实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_020",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_021",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均赊贷，官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_022",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_023",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "禁奴婢买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_024",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "对外征伐，国力耗竭",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_025",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制复杂，民不聊生",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_026",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_027",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制失败，天下大乱",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "王田五均皆未竟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王田五均皆未竟",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_028",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_029",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均司市平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "平物价",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平物价",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_030",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_031",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，不切实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_032",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_033",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "农商交困，民怨沸腾",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_034",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_035",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_036",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_037",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均赊贷，官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_038",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_039",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制理想化，脱离实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_040",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_041",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "币制大乱，农商交困",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_042",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_043",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "禁奴婢买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_044",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "对外征伐，国力耗竭",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_045",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制复杂，民不聊生",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_046",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_047",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，不切实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_048",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_049",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均司市平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "平物价",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平物价",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_050",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_051",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_052",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_053",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均赊贷，官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_054",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_055",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制理想化，脱离实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_056",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_057",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "币制大乱，农商交困",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_058",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_059",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "禁奴婢买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_060",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "对外征伐，国力耗竭",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_061",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制复杂，民不聊生",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_062",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_063",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，不切实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_064",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_065",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均司市平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "平物价",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平物价",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_066",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_067",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_068",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_069",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均赊贷，官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_070",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_071",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制理想化，脱离实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_072",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_073",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "币制大乱，农商交困",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_074",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_075",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "禁奴婢买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_076",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "对外征伐，国力耗竭",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_077",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制复杂，民不聊生",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_078",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_079",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，不切实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_080",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_081",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均司市平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "平物价",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平物价",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_082",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_083",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_084",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_085",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均赊贷，官营",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "五均赊贷并归官营",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五均赊贷并归官营",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_086",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_087",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "王田制理想化，脱离实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_088",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_089",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "value_text": "币制大乱，农商交困",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_090",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_091",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "禁奴婢买卖",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "禁奴婢曰私属，不得买卖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "禁奴婢曰私属，不得买卖",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_092",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "对外征伐，国力耗竭",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "征匈奴、高句丽、西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "征匈奴、高句丽、西南夷",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_093",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "value_text": "币制复杂，民不聊生",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "币制大乱，农商交困",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "币制大乱，农商交困",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_094",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "value_text": "公元23年新朝亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "地皇四年新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "地皇四年新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_095",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "value_text": "托古改制，不切实际",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依《周礼》空文",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "后世史家评",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依《周礼》空文",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_096",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "绿林赤眉起义推翻",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "绿林赤眉起，新朝亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "绿林赤眉起，新朝亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_097",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "value_text": "五均司市平物价",
   "time": {
    "era_text": "始建国二年",
    "start": "10-01-01",
    "end": "10-12-31",
    "gregorian_year": 10
   },
   "place": "changan",
   "source": "wangmang_reform_src",
   "quote": "平物价",
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
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平物价",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_098",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "赋役繁重，民变四起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "赋役繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赋役繁重",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_099",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "value_text": "一夫百亩，抑制兼并",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "依周制一夫百亩，欲抑兼并",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依周制一夫百亩，欲抑兼并",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "WAN_100",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "value_text": "改革失败，民不聊生",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "junguo",
   "source": "wangmang_reform_src",
   "quote": "反致天下大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "反致天下大乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_wangmang_reform_llm_01|政策内容",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "政策内容",
   "kind": "record_vs_record",
   "count": 11,
   "spread": null,
   "assertion_ids": [
    "WAN_001",
    "WAN_023",
    "WAN_035",
    "WAN_043",
    "WAN_051",
    "WAN_059",
    "WAN_067",
    "WAN_075",
    "WAN_083",
    "WAN_091",
    "WAN_099"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_02|政策内容",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策内容",
   "kind": "record_vs_record",
   "count": 11,
   "spread": null,
   "assertion_ids": [
    "WAN_003",
    "WAN_021",
    "WAN_029",
    "WAN_037",
    "WAN_049",
    "WAN_053",
    "WAN_065",
    "WAN_069",
    "WAN_081",
    "WAN_085",
    "WAN_097"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_02|政策效果",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "政策效果",
   "kind": "record_vs_record",
   "count": 6,
   "spread": null,
   "assertion_ids": [
    "WAN_004",
    "WAN_033",
    "WAN_041",
    "WAN_057",
    "WAN_073",
    "WAN_089"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_03|灭亡原因",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡原因",
   "kind": "record_vs_record",
   "count": 33,
   "spread": null,
   "assertion_ids": [
    "WAN_005",
    "WAN_016",
    "WAN_020",
    "WAN_022",
    "WAN_024",
    "WAN_028",
    "WAN_030",
    "WAN_034",
    "WAN_036",
    "WAN_040",
    "WAN_042",
    "WAN_044",
    "WAN_048",
    "WAN_050",
    "WAN_052",
    "WAN_056",
    "WAN_058",
    "WAN_060",
    "WAN_064",
    "WAN_066",
    "WAN_068",
    "WAN_072",
    "WAN_074",
    "WAN_076",
    "WAN_080",
    "WAN_082",
    "WAN_084",
    "WAN_088",
    "WAN_090",
    "WAN_092",
    "WAN_096",
    "WAN_098",
    "WAN_100"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_01|改革评价",
   "subject": "event:ev_wangmang_reform_llm_01",
   "predicate": "改革评价",
   "kind": "record_vs_scholarship",
   "count": 12,
   "spread": null,
   "assertion_ids": [
    "WAN_011",
    "WAN_019",
    "WAN_027",
    "WAN_031",
    "WAN_039",
    "WAN_047",
    "WAN_055",
    "WAN_063",
    "WAN_071",
    "WAN_079",
    "WAN_087",
    "WAN_095"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_03|灭亡时间",
   "subject": "event:ev_wangmang_reform_llm_03",
   "predicate": "灭亡时间",
   "kind": "record_vs_record",
   "count": 12,
   "spread": null,
   "assertion_ids": [
    "WAN_012",
    "WAN_018",
    "WAN_026",
    "WAN_032",
    "WAN_038",
    "WAN_046",
    "WAN_054",
    "WAN_062",
    "WAN_070",
    "WAN_078",
    "WAN_086",
    "WAN_094"
   ]
  },
  {
   "id": "cf:event:ev_wangmang_reform_llm_02|改革失败原因",
   "subject": "event:ev_wangmang_reform_llm_02",
   "predicate": "改革失败原因",
   "kind": "record_vs_record",
   "count": 7,
   "spread": null,
   "assertion_ids": [
    "WAN_013",
    "WAN_017",
    "WAN_025",
    "WAN_045",
    "WAN_061",
    "WAN_077",
    "WAN_093"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_wangmang_reform_llm_01",
   "subject": "event:ev_wangmang_reform_llm_01",
   "year": 9,
   "era": "始建国元年",
   "title": "颁王田制",
   "kind": "行政",
   "text": "天下田曰王田，禁买卖",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_wangmang_reform_llm_02",
   "subject": "event:ev_wangmang_reform_llm_02",
   "year": 10,
   "era": "始建国二年",
   "title": "行五均六筦",
   "kind": "行政",
   "text": "设五均司市，官营六筦",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_wangmang_reform_llm_03",
   "subject": "event:ev_wangmang_reform_llm_03",
   "year": 23,
   "era": "地皇四年",
   "title": "新朝灭亡",
   "kind": "战事",
   "text": "绿林赤眉起，新朝亡",
   "_source_idx": 0,
   "_source_name": "《汉书·王莽传》与王莽改制",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "junguo",
   "party": "后世官修",
   "start": 9,
   "end": 23,
   "timeline": "main"
  },
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": 9,
   "end": 23,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  9,
  23
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
        107.95,
        33.27
       ],
       [
        107.95,
        35.27
       ],
       [
        109.95,
        35.27
       ],
       [
        109.95,
        33.27
       ],
       [
        107.95,
        33.27
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
         109.627,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.618,
         33.27
        ],
        [
         109.627,
         33.27
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
         109.95,
         33.27
        ],
        [
         109.95,
         35.27
        ],
        [
         108.3,
         35.27
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
         108.233,
         35.27
        ],
        [
         108.077,
         35.27
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
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.263
        ],
        [
         107.95,
         33.27
        ],
        [
         109.618,
         33.27
        ],
        [
         109.62,
         33.275
        ],
        [
         109.627,
         33.27
        ],
        [
         109.95,
         33.27
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
         107.95,
         35.27
        ],
        [
         107.95,
         35.263
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
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.077,
         35.27
        ],
        [
         108.233,
         35.27
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
         108.3,
         35.27
        ],
        [
         107.95,
         35.27
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   107.95,
   33.27,
   109.95,
   35.27
  ]
 }
};
