// 本文件由 tools/build.py 自动生成（切片 zheng_chenggong_taiwan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zheng_chenggong_taiwan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zheng_chenggong_taiwan_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "taiwan",
  "province": "taiwan",
  "title": "郑成功收复台湾（1661–1662）",
  "dossier_label": "zheng_chenggong_taiwan_llm",
  "subtitle": "",
  "primary_place": "xiamen",
  "dossier_event": "event:ev_zheng_chenggong_taiwan_llm_01",
  "vocab_pack": "inline:zheng_chenggong_taiwan_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "qing",
  "scale_tier": "strategic",
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
    "note": "制度+思想→南明抗清的民族復仇意志與海上貿易集團支持 vs 荷蘭東印度公司殖民統治缺乏本地認同"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→熱蘭遮城棱堡防禦 vs 鄭軍水師封鎖海路、斷接濟迫降"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→鄭氏招沿海遷民墾臺、屯田自給；荷方僅據城堡與少數原住民村社"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→自廈門東征、鹿耳門登陸，據臺控海峽，切斷荷蘭東亞航路"
   }
  },
  "subject_names": [
   "person:ZHE__p01",
   "person:ZHE__p02",
   "place:xiamen",
   "place:luerermen",
   "place:taiwan",
   "place:re_lan_che_cheng",
   "event:ev_zheng_chenggong_taiwan_llm_01",
   "event:ev_zheng_chenggong_taiwan_llm_02",
   "event:ev_zheng_chenggong_taiwan_llm_03",
   "event:ev_zheng_chenggong_taiwan_llm_04"
  ],
  "page": "zheng_chenggong_taiwan_llm.html",
  "key": "zheng_chenggong_taiwan_llm",
  "scene_id": "zheng_chenggong_taiwan_llm"
 },
 "sources": [
  {
   "id": "taiwan_tongshi_llm",
   "title": "台湾通史·开辟纪（郑氏据台）",
   "party": "清官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "连横",
   "period": "清末民初",
   "note": ""
  },
  {
   "id": "synthesis",
   "title": "綜合研判·缺口標註",
   "party": "综合史料",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）",
   "compiler": "綜合",
   "period": "",
   "note": "",
   "availability": "not_free",
   "bias_note": "諸場景據原始文獻綜合研判，缺環以 gap 層誠實標註。"
  }
 ],
 "places": [
  {
   "id": "xiamen",
   "name": "廈門",
   "type": "port",
   "modern": "今中國福建省廈門市",
   "note": "鄭成功出發地",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": 118.09,
   "lat": 24.48,
   "geo_unresolved": false,
   "elev": 11
  },
  {
   "id": "luerermen",
   "name": "鹿耳門",
   "type": "port",
   "modern": "今臺灣臺南市安平區",
   "note": "登陸地",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": 120.16,
   "lat": 23.03,
   "geo_unresolved": false,
   "elev": 9
  },
  {
   "id": "taiwan",
   "name": "臺灣",
   "type": "region",
   "modern": "今臺灣",
   "note": "鄭成功攻取之地",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": 120.95,
   "lat": 23.7,
   "geo_unresolved": false,
   "elev": 1075
  },
  {
   "id": "re_lan_che_cheng",
   "name": "熱蘭遮城",
   "type": "fortress",
   "modern": "今臺灣臺南市安平古堡",
   "note": "荷蘭人所築，鄭成功圍攻",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "lon": 120.16,
   "lat": 23.0,
   "geo_unresolved": false,
   "elev": 8
  }
 ],
 "persons": [
  {
   "id": "ZHE__p01",
   "name": "鄭成功",
   "role": "明延平郡王",
   "note": "率師東征，克臺灣",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "ZHE__p02",
   "name": "揆一",
   "role": "荷蘭總督",
   "note": "守熱蘭遮城，後出降",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "ZHE_001",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "predicate": "出征",
   "value_text": "鄭成功自廈門率師東征",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "xiamen",
   "source": "taiwan_tongshi_llm",
   "quote": "永曆十五年，鄭成功自廈門率師東征",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "永曆十五年，鄭成功自廈門率師東征",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_002",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "predicate": "登陸",
   "value_text": "入鹿耳門，登陸臺灣",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "luerermen",
   "source": "taiwan_tongshi_llm",
   "quote": "入鹿耳門，登陸臺灣",
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
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "入鹿耳門，登陸臺灣",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_003",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_02",
   "predicate": "圍城",
   "value_text": "圍熱蘭遮城，斷其接濟",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "成功以兵困之，斷其接濟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "成功以兵困之，斷其接濟",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_004",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_03",
   "predicate": "荷蘭投降",
   "value_text": "揆一出降，荷蘭人退走",
   "time": {
    "era_text": "永曆十六年二月",
    "start": "1662-02"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "揆一乃出降，荷蘭人退走",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "揆一乃出降，荷蘭人退走",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_005",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_03",
   "predicate": "臺灣歸屬",
   "value_text": "臺灣復歸中國",
   "time": {
    "era_text": "永曆十六年二月",
    "start": "1662-02"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi_llm",
   "quote": "臺灣復歸中國",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "臺灣復歸中國",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_006",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_04",
   "predicate": "設府",
   "value_text": "設承天府，以為東都",
   "time": {
    "era_text": "永曆十六年",
    "start": "1662"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi_llm",
   "quote": "設承天府，以為東都",
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
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "設承天府，以為東都",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_007",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_04",
   "predicate": "經濟措施",
   "value_text": "勵耕屯，通貿易，招民開墾",
   "time": {
    "era_text": "永曆十六年",
    "start": "1662"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi_llm",
   "quote": "勵耕屯，通貿易，招沿海之民開墾",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "勵耕屯，通貿易，招沿海之民開墾",
   "dim_source": "declared",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_008",
   "subject": "person:ZHE__p02",
   "predicate": "抵抗",
   "value_text": "揆一拒守熱蘭遮城",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "荷蘭總督揆一拒守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "荷蘭總督揆一拒守",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_009",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_02",
   "predicate": "戰術",
   "value_text": "斷荷蘭接濟，迫其降",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "斷其接濟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "斷其接濟",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_010",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_03",
   "predicate": "時間",
   "value_text": "明年二月出降",
   "time": {
    "era_text": "永曆十六年二月",
    "start": "1662-02"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "明年二月，揆一乃出降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "明年二月，揆一乃出降",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_011",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "predicate": "兵力",
   "value_text": "鄭成功率師東征，兵力不詳",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "xiamen",
   "source": "taiwan_tongshi_llm",
   "quote": "率師東征",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載兵力",
   "dims": [
    6
   ],
   "lead": {
    "where": "廈門",
    "skills": [
     "軍事史"
    ],
    "accept": "查考鄭成功東征兵力"
   },
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "率師東征",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_012",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_02",
   "predicate": "荷蘭損失",
   "value_text": "荷蘭損失不詳",
   "time": {
    "era_text": "永曆十五年",
    "start": "1661"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "圍熱蘭遮城",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載荷蘭損失",
   "dims": [
    6
   ],
   "lead": {
    "where": "熱蘭遮城",
    "skills": [
     "荷蘭東印度公司檔案"
    ],
    "accept": "查荷蘭方面損失"
   },
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "圍熱蘭遮城",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHE_013",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_03",
   "predicate": "荷蘭記載",
   "value_text": "荷蘭記載可能不同",
   "time": {
    "era_text": "永曆十六年",
    "start": "1662"
   },
   "place": "re_lan_che_cheng",
   "source": "taiwan_tongshi_llm",
   "quote": "揆一乃出降",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "荷方史料或異",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null,
   "_source_quote": "揆一乃出降",
   "dim_source": "fallback",
   "_party": "清官修",
   "_faction": null
  },
  {
   "id": "ZHENG2",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "zheng_chenggong_taiwan_llm",
    "start": "1661",
    "end": "1661",
    "gregorian_year": 1661
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補技術維直接史料與學界考訂"
   },
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZHENG5",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「思想」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "zheng_chenggong_taiwan_llm",
    "start": "1661",
    "end": "1661",
    "gregorian_year": 1661
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補思想維直接史料與學界考訂"
   },
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "ZHE_011",
  "ZHE_012",
  "ZHENG2",
  "ZHENG5"
 ],
 "events": [
  {
   "id": "ev_zheng_chenggong_taiwan_llm_01",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_01",
   "year": 1661,
   "era": "永曆十五年",
   "title": "鄭成功率師東征",
   "kind": "戰事",
   "text": "自廈門出師，入鹿耳門，登陸臺灣",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zheng_chenggong_taiwan_llm_02",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_02",
   "year": 1661,
   "era": "永曆十五年",
   "title": "圍攻熱蘭遮城",
   "kind": "戰事",
   "text": "圍城，斷荷蘭接濟",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zheng_chenggong_taiwan_llm_03",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_03",
   "year": 1662,
   "era": "永曆十六年二月",
   "title": "揆一出降",
   "kind": "戰事",
   "text": "荷蘭人退走，臺灣歸中國",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zheng_chenggong_taiwan_llm_04",
   "subject": "event:ev_zheng_chenggong_taiwan_llm_04",
   "year": 1662,
   "era": "永曆十六年",
   "title": "設承天府",
   "kind": "行政",
   "text": "置承天府，以為東都",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "xiamen",
   "to": "luerermen",
   "type": "military",
   "label": "鄭成功東征路線",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  },
  {
   "from": "luerermen",
   "to": "re_lan_che_cheng",
   "type": "battle",
   "label": "圍攻熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "台湾通史·开辟纪（郑氏据台）",
   "_source_party": "清官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap",
   "conflict"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "清官修",
   "综合史料"
  ],
  "party_bucket": {
   "清官修": "清官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "清官修": "#8C6239",
   "综合史料": "#9B7B5A"
  },
  "factions": {},
  "faction_colors": {}
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       121.905,
       25.056
      ],
      [
       121.853,
       25.104
      ],
      [
       121.733,
       25.154
      ],
      [
       121.687,
       25.182
      ],
      [
       121.643,
       25.232
      ],
      [
       121.594,
       25.275
      ],
      [
       121.517,
       25.277
      ],
      [
       121.45,
       25.249
      ],
      [
       121.365,
       25.159
      ],
      [
       121.095,
       25.065
      ],
      [
       121.041,
       25.033
      ],
      [
       120.964,
       24.928
      ],
      [
       120.902,
       24.813
      ],
      [
       120.836,
       24.723
      ],
      [
       120.757,
       24.642
      ],
      [
       120.63,
       24.479
      ],
      [
       120.159,
       23.709
      ],
      [
       120.132,
       23.653
      ],
      [
       120.125,
       23.527
      ],
      [
       120.143,
       23.399
      ],
      [
       120.121,
       23.305
      ],
      [
       120.086,
       23.212
      ],
      [
       120.072,
       23.15
      ],
      [
       120.083,
       23.094
      ],
      [
       120.122,
       23.037
      ],
      [
       120.15,
       22.975
      ],
      [
       120.233,
       22.718
      ],
      [
       120.273,
       22.627
      ],
      [
       120.326,
       22.542
      ],
      [
       120.316,
       22.548
      ],
      [
       120.388,
       22.485
      ],
      [
       120.48,
       22.442
      ],
      [
       120.581,
       22.356
      ],
      [
       120.608,
       22.313
      ],
      [
       120.678,
       22.16
      ],
      [
       120.69,
       22.033
      ],
      [
       120.713,
       22.0
      ],
      [
       120.857,
       22.0
      ],
      [
       120.864,
       22.033
      ],
      [
       120.878,
       22.142
      ],
      [
       120.877,
       22.262
      ],
      [
       120.897,
       22.379
      ],
      [
       120.947,
       22.503
      ],
      [
       121.009,
       22.62
      ],
      [
       121.161,
       22.776
      ],
      [
       121.296,
       22.967
      ],
      [
       121.352,
       23.067
      ],
      [
       121.397,
       23.173
      ],
      [
       121.477,
       23.424
      ],
      [
       121.526,
       23.668
      ],
      [
       121.583,
       23.861
      ],
      [
       121.613,
       24.053
      ],
      [
       121.639,
       24.13
      ],
      [
       121.737,
       24.285
      ],
      [
       121.828,
       24.534
      ],
      [
       121.826,
       24.641
      ],
      [
       121.813,
       24.746
      ],
      [
       121.82,
       24.825
      ],
      [
       121.856,
       24.895
      ],
      [
       121.929,
       24.974
      ],
      [
       121.905,
       25.056
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
       118.339,
       24.469
      ],
      [
       118.287,
       24.477
      ],
      [
       118.295,
       24.436
      ],
      [
       118.433,
       24.414
      ],
      [
       118.451,
       24.456
      ],
      [
       118.407,
       24.522
      ],
      [
       118.339,
       24.469
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
       118.077,
       24.501
      ],
      [
       118.089,
       24.489
      ],
      [
       118.091,
       24.446
      ],
      [
       118.15,
       24.436
      ],
      [
       118.183,
       24.496
      ],
      [
       118.171,
       24.519
      ],
      [
       118.104,
       24.552
      ],
      [
       118.093,
       24.541
      ],
      [
       118.077,
       24.501
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
       119.7,
       25.48
      ],
      [
       119.7,
       25.433
      ],
      [
       119.747,
       25.411
      ],
      [
       119.821,
       25.457
      ],
      [
       119.832,
       25.48
      ],
      [
       119.832,
       25.48
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
        117.09,
        23.581
       ],
       [
        117.148,
        23.599
       ],
       [
        117.225,
        23.647
       ],
       [
        117.291,
        23.714
       ],
       [
        117.331,
        23.709
       ],
       [
        117.347,
        23.636
       ],
       [
        117.368,
        23.589
       ],
       [
        117.417,
        23.621
       ],
       [
        117.462,
        23.736
       ],
       [
        117.46,
        23.771
       ],
       [
        117.433,
        23.792
       ],
       [
        117.466,
        23.841
       ],
       [
        117.579,
        23.857
       ],
       [
        117.628,
        23.837
       ],
       [
        117.668,
        23.939
       ],
       [
        117.742,
        24.015
       ],
       [
        117.839,
        24.012
       ],
       [
        117.904,
        24.106
       ],
       [
        118.056,
        24.246
       ],
       [
        118.051,
        24.327
       ],
       [
        118.024,
        24.38
       ],
       [
        117.879,
        24.396
       ],
       [
        117.848,
        24.432
       ],
       [
        117.843,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.935,
        24.474
       ],
       [
        118.006,
        24.482
       ],
       [
        118.014,
        24.56
       ],
       [
        118.087,
        24.627
       ],
       [
        118.195,
        24.626
       ],
       [
        118.295,
        24.573
       ],
       [
        118.412,
        24.601
       ],
       [
        118.56,
        24.58
       ],
       [
        118.657,
        24.621
       ],
       [
        118.719,
        24.746
       ],
       [
        118.692,
        24.782
       ],
       [
        118.64,
        24.809
       ],
       [
        118.637,
        24.836
       ],
       [
        118.708,
        24.85
       ],
       [
        118.822,
        24.911
       ],
       [
        118.909,
        24.929
       ],
       [
        118.956,
        25.005
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.236,
        25.206
       ],
       [
        119.286,
        25.232
       ],
       [
        119.244,
        25.307
       ],
       [
        119.169,
        25.356
       ],
       [
        119.146,
        25.414
       ],
       [
        119.18,
        25.45
       ],
       [
        119.263,
        25.468
       ],
       [
        119.344,
        25.446
       ],
       [
        119.422,
        25.46
       ],
       [
        119.499,
        25.409
       ],
       [
        119.593,
        25.368
       ],
       [
        119.622,
        25.391
       ],
       [
        119.619,
        25.437
       ],
       [
        119.597,
        25.48
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
        121.009,
        22.62
       ],
       [
        120.947,
        22.503
       ],
       [
        120.897,
        22.379
       ],
       [
        120.877,
        22.262
       ],
       [
        120.878,
        22.142
       ],
       [
        120.864,
        22.033
       ],
       [
        120.857,
        22.0
       ],
       [
        120.713,
        22.0
       ],
       [
        120.69,
        22.033
       ],
       [
        120.678,
        22.16
       ],
       [
        120.608,
        22.313
       ],
       [
        120.581,
        22.356
       ],
       [
        120.48,
        22.442
       ],
       [
        120.388,
        22.485
       ],
       [
        120.316,
        22.548
       ],
       [
        120.326,
        22.542
       ],
       [
        120.273,
        22.627
       ],
       [
        120.233,
        22.718
       ],
       [
        120.15,
        22.975
       ],
       [
        120.122,
        23.037
       ],
       [
        120.083,
        23.094
       ],
       [
        120.072,
        23.15
       ],
       [
        120.086,
        23.212
       ],
       [
        120.121,
        23.305
       ],
       [
        120.143,
        23.399
       ],
       [
        120.125,
        23.527
       ],
       [
        120.132,
        23.653
       ],
       [
        120.159,
        23.709
       ],
       [
        120.63,
        24.479
       ],
       [
        120.757,
        24.642
       ],
       [
        120.836,
        24.723
       ],
       [
        120.902,
        24.813
       ],
       [
        120.964,
        24.928
       ],
       [
        121.041,
        25.033
       ],
       [
        121.095,
        25.065
       ],
       [
        121.365,
        25.159
       ],
       [
        121.45,
        25.249
       ],
       [
        121.517,
        25.277
       ],
       [
        121.594,
        25.275
       ],
       [
        121.643,
        25.232
       ],
       [
        121.687,
        25.182
       ],
       [
        121.733,
        25.154
       ],
       [
        121.853,
        25.104
       ],
       [
        121.905,
        25.056
       ],
       [
        121.929,
        24.974
       ],
       [
        121.856,
        24.895
       ],
       [
        121.82,
        24.825
       ],
       [
        121.813,
        24.746
       ],
       [
        121.826,
        24.641
       ],
       [
        121.828,
        24.534
       ],
       [
        121.737,
        24.285
       ],
       [
        121.639,
        24.13
       ],
       [
        121.613,
        24.053
       ],
       [
        121.583,
        23.861
       ],
       [
        121.526,
        23.668
       ],
       [
        121.477,
        23.424
       ],
       [
        121.397,
        23.173
       ],
       [
        121.352,
        23.067
       ],
       [
        121.296,
        22.967
       ],
       [
        121.161,
        22.776
       ],
       [
        121.009,
        22.62
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
        118.407,
        24.522
       ],
       [
        118.451,
        24.456
       ],
       [
        118.433,
        24.414
       ],
       [
        118.295,
        24.436
       ],
       [
        118.287,
        24.477
       ],
       [
        118.339,
        24.469
       ],
       [
        118.407,
        24.522
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
        118.183,
        24.496
       ],
       [
        118.15,
        24.436
       ],
       [
        118.091,
        24.446
       ],
       [
        118.089,
        24.489
       ],
       [
        118.077,
        24.501
       ],
       [
        118.093,
        24.541
       ],
       [
        118.104,
        24.552
       ],
       [
        118.171,
        24.519
       ],
       [
        118.183,
        24.496
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
        119.821,
        25.457
       ],
       [
        119.747,
        25.411
       ],
       [
        119.7,
        25.433
       ],
       [
        119.7,
        25.48
       ],
       [
        119.832,
        25.48
       ],
       [
        119.832,
        25.48
       ],
       [
        119.821,
        25.457
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
        117.09,
        25.48
       ],
       [
        119.597,
        25.48
       ],
       [
        119.619,
        25.437
       ],
       [
        119.622,
        25.391
       ],
       [
        119.593,
        25.368
       ],
       [
        119.499,
        25.409
       ],
       [
        119.422,
        25.46
       ],
       [
        119.344,
        25.446
       ],
       [
        119.263,
        25.468
       ],
       [
        119.18,
        25.45
       ],
       [
        119.146,
        25.414
       ],
       [
        119.169,
        25.356
       ],
       [
        119.244,
        25.307
       ],
       [
        119.286,
        25.232
       ],
       [
        119.236,
        25.206
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.956,
        25.005
       ],
       [
        118.909,
        24.929
       ],
       [
        118.822,
        24.911
       ],
       [
        118.708,
        24.85
       ],
       [
        118.637,
        24.836
       ],
       [
        118.64,
        24.809
       ],
       [
        118.692,
        24.782
       ],
       [
        118.719,
        24.746
       ],
       [
        118.657,
        24.621
       ],
       [
        118.56,
        24.58
       ],
       [
        118.412,
        24.601
       ],
       [
        118.295,
        24.573
       ],
       [
        118.195,
        24.626
       ],
       [
        118.087,
        24.627
       ],
       [
        118.014,
        24.56
       ],
       [
        118.006,
        24.482
       ],
       [
        117.935,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.843,
        24.474
       ],
       [
        117.848,
        24.432
       ],
       [
        117.879,
        24.396
       ],
       [
        118.024,
        24.38
       ],
       [
        118.051,
        24.327
       ],
       [
        118.056,
        24.246
       ],
       [
        117.904,
        24.106
       ],
       [
        117.839,
        24.012
       ],
       [
        117.742,
        24.015
       ],
       [
        117.668,
        23.939
       ],
       [
        117.628,
        23.837
       ],
       [
        117.579,
        23.857
       ],
       [
        117.466,
        23.841
       ],
       [
        117.433,
        23.792
       ],
       [
        117.46,
        23.771
       ],
       [
        117.462,
        23.736
       ],
       [
        117.417,
        23.621
       ],
       [
        117.368,
        23.589
       ],
       [
        117.347,
        23.636
       ],
       [
        117.331,
        23.709
       ],
       [
        117.291,
        23.714
       ],
       [
        117.225,
        23.647
       ],
       [
        117.148,
        23.599
       ],
       [
        117.09,
        23.581
       ],
       [
        117.09,
        25.48
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
         119.005,
         24.97
        ],
        [
         118.989,
         24.974
        ],
        [
         119.024,
         25.044
        ],
        [
         119.017,
         25.058
        ],
        [
         118.975,
         25.025
        ],
        [
         118.945,
         25.029
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.134,
         25.106
        ],
        [
         119.107,
         25.075
        ],
        [
         119.119,
         25.013
        ],
        [
         119.147,
         25.057
        ],
        [
         119.166,
         25.146
        ],
        [
         119.137,
         25.155
        ],
        [
         119.108,
         25.194
        ],
        [
         119.132,
         25.223
        ],
        [
         119.19,
         25.176
        ],
        [
         119.232,
         25.189
        ],
        [
         119.269,
         25.16
        ],
        [
         119.315,
         25.19
        ],
        [
         119.295,
         25.237
        ],
        [
         119.332,
         25.231
        ],
        [
         119.381,
         25.25
        ],
        [
         119.333,
         25.288
        ],
        [
         119.299,
         25.329
        ],
        [
         119.248,
         25.334
        ],
        [
         119.241,
         25.317
        ],
        [
         119.219,
         25.368
        ],
        [
         119.145,
         25.388
        ],
        [
         119.151,
         25.427
        ],
        [
         119.192,
         25.424
        ],
        [
         119.232,
         25.442
        ],
        [
         119.22,
         25.469
        ],
        [
         119.24,
         25.48
        ],
        [
         119.27,
         25.48
        ],
        [
         119.275,
         25.477
        ],
        [
         119.263,
         25.428
        ],
        [
         119.288,
         25.411
        ],
        [
         119.353,
         25.412
        ],
        [
         119.344,
         25.472
        ],
        [
         119.346,
         25.48
        ],
        [
         119.45,
         25.48
        ],
        [
         119.438,
         25.412
        ],
        [
         119.463,
         25.449
        ],
        [
         119.491,
         25.443
        ],
        [
         119.486,
         25.419
        ],
        [
         119.507,
         25.396
        ],
        [
         119.487,
         25.37
        ],
        [
         119.549,
         25.366
        ],
        [
         119.579,
         25.401
        ],
        [
         119.556,
         25.429
        ],
        [
         119.578,
         25.446
        ],
        [
         119.591,
         25.398
        ],
        [
         119.583,
         25.374
        ],
        [
         119.597,
         25.335
        ],
        [
         119.649,
         25.343
        ],
        [
         119.665,
         25.372
        ],
        [
         119.657,
         25.397
        ],
        [
         119.67,
         25.436
        ],
        [
         119.623,
         25.434
        ],
        [
         119.675,
         25.468
        ],
        [
         119.682,
         25.446
        ],
        [
         119.689,
         25.441
        ],
        [
         119.774,
         25.396
        ],
        [
         119.764,
         25.434
        ],
        [
         119.805,
         25.458
        ],
        [
         119.867,
         25.455
        ],
        [
         119.864,
         25.47
        ],
        [
         119.863,
         25.475
        ],
        [
         119.854,
         25.48
        ],
        [
         119.676,
         25.48
        ],
        [
         119.675,
         25.475
        ],
        [
         119.634,
         25.475
        ],
        [
         119.632,
         25.48
        ],
        [
         117.09,
         25.48
        ],
        [
         117.09,
         23.67
        ],
        [
         117.124,
         23.647
        ],
        [
         117.147,
         23.654
        ],
        [
         117.193,
         23.629
        ],
        [
         117.193,
         23.562
        ],
        [
         117.291,
         23.571
        ],
        [
         117.302,
         23.55
        ],
        [
         117.387,
         23.555
        ],
        [
         117.464,
         23.585
        ],
        [
         117.455,
         23.628
        ],
        [
         117.493,
         23.643
        ],
        [
         117.501,
         23.704
        ],
        [
         117.544,
         23.716
        ],
        [
         117.602,
         23.702
        ],
        [
         117.66,
         23.789
        ],
        [
         117.652,
         23.815
        ],
        [
         117.672,
         23.878
        ],
        [
         117.691,
         23.889
        ],
        [
         117.763,
         23.887
        ],
        [
         117.793,
         23.906
        ],
        [
         117.807,
         23.948
        ],
        [
         117.865,
         24.005
        ],
        [
         117.91,
         24.012
        ],
        [
         117.928,
         24.04
        ],
        [
         117.936,
         24.1
        ],
        [
         118.0,
         24.152
        ],
        [
         118.019,
         24.197
        ],
        [
         118.075,
         24.226
        ],
        [
         118.115,
         24.229
        ],
        [
         118.159,
         24.27
        ],
        [
         118.112,
         24.357
        ],
        [
         118.082,
         24.357
        ],
        [
         118.088,
         24.409
        ],
        [
         118.049,
         24.418
        ],
        [
         118.084,
         24.529
        ],
        [
         118.122,
         24.57
        ],
        [
         118.151,
         24.584
        ],
        [
         118.169,
         24.56
        ],
        [
         118.243,
         24.512
        ],
        [
         118.375,
         24.536
        ],
        [
         118.364,
         24.568
        ],
        [
         118.444,
         24.615
        ],
        [
         118.513,
         24.608
        ],
        [
         118.557,
         24.573
        ],
        [
         118.558,
         24.512
        ],
        [
         118.614,
         24.522
        ],
        [
         118.68,
         24.582
        ],
        [
         118.687,
         24.634
        ],
        [
         118.661,
         24.622
        ],
        [
         118.653,
         24.654
        ],
        [
         118.67,
         24.68
        ],
        [
         118.704,
         24.665
        ],
        [
         118.779,
         24.744
        ],
        [
         118.786,
         24.777
        ],
        [
         118.651,
         24.809
        ],
        [
         118.648,
         24.844
        ],
        [
         118.702,
         24.865
        ],
        [
         118.699,
         24.849
        ],
        [
         118.749,
         24.842
        ],
        [
         118.808,
         24.871
        ],
        [
         118.834,
         24.854
        ],
        [
         118.864,
         24.888
        ],
        [
         118.933,
         24.871
        ],
        [
         118.989,
         24.879
        ],
        [
         118.987,
         24.898
        ],
        [
         118.933,
         24.907
        ],
        [
         118.919,
         24.933
        ],
        [
         118.946,
         24.954
        ],
        [
         119.014,
         24.941
        ],
        [
         119.033,
         24.961
        ],
        [
         119.033,
         24.962
        ],
        [
         119.007,
         24.963
        ],
        [
         119.005,
         24.97
        ]
       ]
      ],
      [
       [
        [
         118.412,
         24.515
        ],
        [
         118.375,
         24.459
        ],
        [
         118.319,
         24.487
        ],
        [
         118.298,
         24.478
        ],
        [
         118.312,
         24.425
        ],
        [
         118.282,
         24.413
        ],
        [
         118.33,
         24.382
        ],
        [
         118.353,
         24.415
        ],
        [
         118.406,
         24.428
        ],
        [
         118.458,
         24.412
        ],
        [
         118.477,
         24.438
        ],
        [
         118.452,
         24.507
        ],
        [
         118.412,
         24.515
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.507,
         25.183
        ],
        [
         119.525,
         25.158
        ],
        [
         119.549,
         25.162
        ],
        [
         119.567,
         25.21
        ],
        [
         119.541,
         25.202
        ],
        [
         119.501,
         25.217
        ],
        [
         119.474,
         25.26
        ],
        [
         119.443,
         25.239
        ],
        [
         119.444,
         25.202
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         118.231,
         24.401
        ],
        [
         118.274,
         24.441
        ],
        [
         118.234,
         24.446
        ],
        [
         118.231,
         24.401
        ]
       ]
      ],
      [
       [
        [
         118.204,
         24.505
        ],
        [
         118.192,
         24.537
        ],
        [
         118.145,
         24.561
        ],
        [
         118.093,
         24.541
        ],
        [
         118.069,
         24.463
        ],
        [
         118.084,
         24.436
        ],
        [
         118.143,
         24.421
        ],
        [
         118.194,
         24.463
        ],
        [
         118.204,
         24.505
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.09,
         23.538
        ],
        [
         117.193,
         23.562
        ],
        [
         117.193,
         23.629
        ],
        [
         117.147,
         23.654
        ],
        [
         117.124,
         23.647
        ],
        [
         117.09,
         23.67
        ],
        [
         117.09,
         23.538
        ]
       ]
      ],
      [
       [
        [
         117.09,
         23.406
        ],
        [
         117.124,
         23.39
        ],
        [
         117.143,
         23.401
        ],
        [
         117.143,
         23.46
        ],
        [
         117.129,
         23.483
        ],
        [
         117.094,
         23.459
        ],
        [
         117.09,
         23.461
        ],
        [
         117.09,
         23.406
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         120.444,
         22.441
        ],
        [
         120.518,
         22.409
        ],
        [
         120.57,
         22.362
        ],
        [
         120.641,
         22.242
        ],
        [
         120.659,
         22.154
        ],
        [
         120.662,
         22.067
        ],
        [
         120.651,
         22.033
        ],
        [
         120.662,
         22.0
        ],
        [
         120.879,
         22.0
        ],
        [
         120.908,
         22.033
        ],
        [
         120.912,
         22.086
        ],
        [
         120.903,
         22.126
        ],
        [
         120.915,
         22.303
        ],
        [
         120.981,
         22.528
        ],
        [
         121.015,
         22.584
        ],
        [
         121.033,
         22.651
        ],
        [
         121.079,
         22.67
        ],
        [
         121.171,
         22.723
        ],
        [
         121.211,
         22.771
        ],
        [
         121.238,
         22.836
        ],
        [
         121.276,
         22.877
        ],
        [
         121.324,
         22.946
        ],
        [
         121.355,
         23.01
        ],
        [
         121.371,
         23.084
        ],
        [
         121.409,
         23.102
        ],
        [
         121.43,
         23.137
        ],
        [
         121.415,
         23.196
        ],
        [
         121.44,
         23.272
        ],
        [
         121.48,
         23.323
        ],
        [
         121.498,
         23.42
        ],
        [
         121.522,
         23.483
        ],
        [
         121.523,
         23.539
        ],
        [
         121.588,
         23.761
        ],
        [
         121.621,
         23.921
        ],
        [
         121.66,
         24.007
        ],
        [
         121.64,
         24.065
        ],
        [
         121.644,
         24.098
        ],
        [
         121.678,
         24.134
        ],
        [
         121.689,
         24.174
        ],
        [
         121.809,
         24.339
        ],
        [
         121.826,
         24.424
        ],
        [
         121.868,
         24.479
        ],
        [
         121.886,
         24.53
        ],
        [
         121.892,
         24.618
        ],
        [
         121.863,
         24.671
        ],
        [
         121.841,
         24.734
        ],
        [
         121.845,
         24.836
        ],
        [
         121.933,
         24.939
        ],
        [
         121.95,
         24.952
        ],
        [
         121.95,
         25.032
        ],
        [
         121.947,
         25.032
        ],
        [
         121.917,
         25.138
        ],
        [
         121.842,
         25.135
        ],
        [
         121.782,
         25.16
        ],
        [
         121.745,
         25.162
        ],
        [
         121.708,
         25.192
        ],
        [
         121.7,
         25.227
        ],
        [
         121.655,
         25.242
        ],
        [
         121.623,
         25.295
        ],
        [
         121.585,
         25.309
        ],
        [
         121.535,
         25.308
        ],
        [
         121.445,
         25.271
        ],
        [
         121.413,
         25.239
        ],
        [
         121.372,
         25.16
        ],
        [
         121.32,
         25.141
        ],
        [
         121.209,
         25.127
        ],
        [
         121.133,
         25.078
        ],
        [
         121.102,
         25.075
        ],
        [
         121.025,
         25.041
        ],
        [
         121.01,
         24.994
        ],
        [
         120.961,
         24.94
        ],
        [
         120.915,
         24.865
        ],
        [
         120.892,
         24.767
        ],
        [
         120.824,
         24.688
        ],
        [
         120.762,
         24.658
        ],
        [
         120.689,
         24.601
        ],
        [
         120.643,
         24.49
        ],
        [
         120.589,
         24.432
        ],
        [
         120.547,
         24.37
        ],
        [
         120.521,
         24.312
        ],
        [
         120.471,
         24.243
        ],
        [
         120.452,
         24.182
        ],
        [
         120.392,
         24.118
        ],
        [
         120.316,
         23.985
        ],
        [
         120.278,
         23.928
        ],
        [
         120.246,
         23.84
        ],
        [
         120.175,
         23.807
        ],
        [
         120.102,
         23.701
        ],
        [
         120.095,
         23.588
        ],
        [
         120.122,
         23.505
        ],
        [
         120.108,
         23.341
        ],
        [
         120.082,
         23.292
        ],
        [
         120.019,
         23.073
        ],
        [
         120.03,
         23.049
        ],
        [
         120.133,
         23.001
        ],
        [
         120.149,
         22.896
        ],
        [
         120.2,
         22.721
        ],
        [
         120.274,
         22.56
        ],
        [
         120.297,
         22.532
        ],
        [
         120.444,
         22.441
        ]
       ]
      ],
      [
       [
        [
         119.646,
         23.551
        ],
        [
         119.691,
         23.547
        ],
        [
         119.678,
         23.6
        ],
        [
         119.61,
         23.604
        ],
        [
         119.602,
         23.576
        ],
        [
         119.567,
         23.585
        ],
        [
         119.562,
         23.531
        ],
        [
         119.579,
         23.503
        ],
        [
         119.609,
         23.504
        ],
        [
         119.646,
         23.551
        ]
       ]
      ],
      [
       [
        [
         119.506,
         23.626
        ],
        [
         119.506,
         23.577
        ],
        [
         119.472,
         23.557
        ],
        [
         119.519,
         23.56
        ],
        [
         119.525,
         23.625
        ],
        [
         119.506,
         23.626
        ]
       ]
      ],
      [
       [
        [
         119.498,
         23.387
        ],
        [
         119.495,
         23.35
        ],
        [
         119.517,
         23.35
        ],
        [
         119.498,
         23.387
        ]
       ]
      ],
      [
       [
        [
         119.557,
         23.667
        ],
        [
         119.608,
         23.62
        ],
        [
         119.615,
         23.661
        ],
        [
         119.586,
         23.676
        ],
        [
         119.557,
         23.667
        ]
       ]
      ],
      [
       [
        [
         121.468,
         22.677
        ],
        [
         121.475,
         22.644
        ],
        [
         121.514,
         22.632
        ],
        [
         121.515,
         22.676
        ],
        [
         121.468,
         22.677
        ]
       ]
      ],
      [
       [
        [
         121.511,
         22.087
        ],
        [
         121.507,
         22.049
        ],
        [
         121.534,
         22.022
        ],
        [
         121.584,
         22.0
        ],
        [
         121.596,
         22.0
        ],
        [
         121.605,
         22.023
        ],
        [
         121.575,
         22.037
        ],
        [
         121.576,
         22.084
        ],
        [
         121.511,
         22.087
        ]
       ]
      ],
      [
       [
        [
         119.421,
         23.217
        ],
        [
         119.436,
         23.186
        ],
        [
         119.453,
         23.216
        ],
        [
         119.421,
         23.217
        ]
       ]
      ],
      [
       [
        [
         120.355,
         22.327
        ],
        [
         120.396,
         22.342
        ],
        [
         120.383,
         22.356
        ],
        [
         120.355,
         22.327
        ]
       ]
      ]
     ]
    },
    "n": "台湾省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   117.09,
   22.0,
   121.95,
   25.48
  ]
 }
};
