// 本文件由 tools/build.py 自动生成（切片 yunnan_duwenxiu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yunnan_duwenxiu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yunnan_duwenxiu_llm"] = {
 "meta": {
  "kind": "uprising",
  "region": "yunnan",
  "province": "yunnan",
  "title": "云南回民起义与杜文秀大理政权（1856—1873）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "dali",
  "dossier_event": "event:ev_yunnan_duwenxiu_llm_01",
  "vocab_pack": "inline:yunnan_duwenxiu_llm",
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
    "note": "云南回民起义与杜文秀大理政权（1856—1873）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "云南回民起义与杜文秀大理政权（1856—1873）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "云南回民起义与杜文秀大理政权（1856—1873）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "云南回民起义与杜文秀大理政权（1856—1873）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=yunnan_duwenxiu_llm",
  "key": "yunnan_duwenxiu_llm",
  "scene_id": "yunnan_duwenxiu_llm"
 },
 "sources": [
  {
   "id": "duwenxiu_dali_src",
   "title": "回民起义·云南回民起义史料",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "中国史学会",
   "period": "现代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yunnan",
   "name": "云南",
   "type": "region",
   "modern": "今云南省",
   "note": "起义发生地",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "dali",
   "name": "大理",
   "type": "city",
   "modern": "今云南省大理市",
   "note": "杜文秀政权中心。坐标据地名志条目：大理，标 approx。",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 100.267,
   "lat": 25.606,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：大理（诚实回填 v0.221）。",
   "elev": 2250
  }
 ],
 "persons": [
  {
   "id": "YUN__p01",
   "name": "杜文秀",
   "role": "总统兵马大元帅",
   "note": "大理政权领袖，回民起义核心人物",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 4
  },
  {
   "id": "YUN__p02",
   "name": "清廷官员",
   "role": "清方官员",
   "note": "云南官绅，与回民构衅",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "YUN_001",
   "subject": "event:ev_yunnan_duwenxiu_llm_01",
   "predicate": "起事原因",
   "value_text": "官绅构衅致回民起事",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "yunnan",
   "source": "duwenxiu_dali_src",
   "quote": "因官绅构衅起事",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "因官绅构衅起事",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_002",
   "subject": "event:ev_yunnan_duwenxiu_llm_02",
   "predicate": "政权建立",
   "value_text": "杜文秀据大理建政权",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "杜文秀据大理",
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
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "杜文秀据大理",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_003",
   "subject": "person:YUN__p01",
   "predicate": "称号",
   "value_text": "称总统兵马大元帅",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "称总统兵马大元帅",
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
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "称总统兵马大元帅",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_004",
   "subject": "event:ev_yunnan_duwenxiu_llm_02",
   "predicate": "辖域",
   "value_text": "辖滇西二十余州县",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "辖滇西二十余州县",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "辖滇西二十余州县",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_005",
   "subject": "event:ev_yunnan_duwenxiu_llm_02",
   "predicate": "持续时间",
   "value_text": "与清廷抗十八年",
   "time": {
    "era_text": "咸丰六年至同治十二年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "与清廷抗十八年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与清廷抗十八年",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_006",
   "subject": "person:YUN__p01",
   "predicate": "政策",
   "value_text": "薄赋税、释奴婢、均田亩",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "薄赋税、释奴婢、均田亩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "薄赋税、释奴婢、均田亩",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_007",
   "subject": "person:YUN__p01",
   "predicate": "民族政策",
   "value_text": "调和汉回彝白诸族",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "调和汉、回、彝、白诸族",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "调和汉、回、彝、白诸族",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_008",
   "subject": "person:YUN__p01",
   "predicate": "战略",
   "value_text": "用兵保卫桑梓不事远图",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "用兵以保卫桑梓为念",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "用兵以保卫桑梓为念",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_009",
   "subject": "event:ev_yunnan_duwenxiu_llm_03",
   "predicate": "结局",
   "value_text": "杜文秀服毒赴清营殉节",
   "time": {
    "era_text": "同治十二年",
    "start": "1873-01-01",
    "end": "1873-12-31",
    "gregorian_year": 1873
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "杜文秀服毒赴清营",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "杜文秀服毒赴清营",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_010",
   "subject": "event:ev_yunnan_duwenxiu_llm_03",
   "predicate": "家族结局",
   "value_text": "全家殉节",
   "time": {
    "era_text": "同治十二年",
    "start": "1873-01-01",
    "end": "1873-12-31",
    "gregorian_year": 1873
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "全家殉节",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "全家殉节",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_011",
   "subject": "event:ev_yunnan_duwenxiu_llm_03",
   "predicate": "战役结束",
   "value_text": "滇西之役始平",
   "time": {
    "era_text": "同治十二年",
    "start": "1873-01-01",
    "end": "1873-12-31",
    "gregorian_year": 1873
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "滇西之役始平",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "滇西之役始平",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_012",
   "subject": "event:ev_yunnan_duwenxiu_llm_01",
   "predicate": "起事性质",
   "value_text": "回民起义因官绅构衅",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "yunnan",
   "source": "duwenxiu_dali_src",
   "quote": "回民因官绅构衅起事",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "史料记载简略，具体构衅细节待考",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "回民因官绅构衅起事",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_013",
   "subject": "event:ev_yunnan_duwenxiu_llm_02",
   "predicate": "政权性质",
   "value_text": "大理政权辖滇西二十余州县",
   "time": {
    "era_text": "咸丰六年",
    "start": "1856-01-01",
    "end": "1856-12-31",
    "gregorian_year": 1856
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "建大理政权，辖滇西二十余州县",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "政权具体行政架构未详述",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建大理政权，辖滇西二十余州县",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YUN_014",
   "subject": "event:ev_yunnan_duwenxiu_llm_03",
   "predicate": "清军兵力",
   "value_text": "清军合围大理兵力不详",
   "time": {
    "era_text": "同治十二年",
    "start": "1873-01-01",
    "end": "1873-12-31",
    "gregorian_year": 1873
   },
   "place": "dali",
   "source": "duwenxiu_dali_src",
   "quote": "清军合围大理",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "原文未载清军具体兵力",
   "dims": [
    2,
    6
   ],
   "lead": {
    "where": "清军围大理兵力部署",
    "skills": [
     "军事史",
     "档案检索"
    ],
    "accept": "清军围城兵力及将领"
   },
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "清军合围大理",
   "source_text": "咸丰六年（一八五六），云南回民因官绅构衅起事，杜文秀据大理，称'总统兵马大元帅'，建大理政权，辖滇西二十余州县，与清廷抗十八年。杜文秀颁新政令：薄赋税、释奴婢、均田亩、举贤能，并调和汉、回、彝、白诸族。其用兵以保卫桑梓为念，不事远图。同治十二年（一八七三），清军合围大理，杜文秀服毒赴清营，全家殉节，滇西之役始平。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YUN_014"
 ],
 "events": [
  {
   "id": "ev_yunnan_duwenxiu_llm_01",
   "subject": "event:ev_yunnan_duwenxiu_llm_01",
   "year": 1856,
   "era": "咸丰六年",
   "title": "云南回民起义",
   "kind": "战事",
   "text": "回民因官绅构衅起事",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_duwenxiu_llm_02",
   "subject": "event:ev_yunnan_duwenxiu_llm_02",
   "year": 1856,
   "era": "咸丰六年",
   "title": "杜文秀据大理",
   "kind": "建置",
   "text": "杜文秀据大理建政权",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_yunnan_duwenxiu_llm_03",
   "subject": "event:ev_yunnan_duwenxiu_llm_03",
   "year": 1873,
   "era": "同治十二年",
   "title": "清军合围大理",
   "kind": "战事",
   "text": "清军合围大理，杜文秀殉节",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "yunnan",
   "to": "dali",
   "type": "military",
   "label": "回民起义据大理",
   "_source_idx": 0,
   "_source_name": "回民起义·云南回民起义史料",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "yunnan",
   "party": "后世官修",
   "start": 1856,
   "end": 1873,
   "timeline": "main"
  },
  {
   "place_id": "dali",
   "party": "后世官修",
   "start": 1856,
   "end": 1873,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "dali",
   "name": "大理",
   "lon": 100.267,
   "lat": 25.606,
   "region": "yunnan"
  }
 ],
 "control_years": [
  1856,
  1873
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
        99.267,
        24.606
       ],
       [
        99.267,
        26.606
       ],
       [
        101.267,
        26.606
       ],
       [
        101.267,
        24.606
       ],
       [
        99.267,
        24.606
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
         101.267,
         24.606
        ],
        [
         101.267,
         26.606
        ],
        [
         99.267,
         26.606
        ],
        [
         99.267,
         24.606
        ],
        [
         101.267,
         24.606
        ]
       ]
      ]
     ]
    },
    "n": "云南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       101.168,
       24.606
      ],
      [
       101.118,
       24.655
      ],
      [
       100.931,
       24.891
      ],
      [
       100.812,
       25.003
      ],
      [
       100.76,
       24.993
      ],
      [
       100.642,
       25.021
      ],
      [
       100.459,
       25.088
      ],
      [
       100.351,
       25.15
      ],
      [
       100.303,
       25.235
      ],
      [
       100.183,
       25.443
      ]
     ]
    },
    "n": "Hong"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        100.425,
        26.606
       ],
       [
        100.444,
        26.499
       ],
       [
        100.449,
        26.378
       ],
       [
        100.425,
        26.326
       ],
       [
        100.428,
        26.279
       ],
       [
        100.459,
        26.236
       ],
       [
        100.582,
        26.203
       ],
       [
        100.798,
        26.178
       ],
       [
        100.961,
        26.211
       ],
       [
        101.071,
        26.301
       ],
       [
        101.2,
        26.357
       ],
       [
        101.267,
        26.368
       ]
      ]
     ]
    },
    "n": "Jinsha"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       99.267,
       25.71
      ],
      [
       99.31,
       25.644
      ],
      [
       99.341,
       25.521
      ],
      [
       99.308,
       25.423
      ],
      [
       99.341,
       25.315
      ],
      [
       99.44,
       25.198
      ],
      [
       99.525,
       25.129
      ],
      [
       99.599,
       25.109
      ],
      [
       99.7,
       25.017
      ],
      [
       99.828,
       24.853
      ],
      [
       99.939,
       24.762
      ],
      [
       100.031,
       24.743
      ],
      [
       100.087,
       24.718
      ],
      [
       100.106,
       24.687
      ],
      [
       100.14,
       24.69
      ],
      [
       100.187,
       24.727
      ],
      [
       100.251,
       24.747
      ],
      [
       100.332,
       24.75
      ],
      [
       100.418,
       24.682
      ],
      [
       100.47,
       24.606
      ]
     ]
    },
    "n": "Lancang"
   }
  ],
  "lakes": [],
  "_bbox": [
   99.267,
   24.606,
   101.267,
   26.606
  ]
 }
};
