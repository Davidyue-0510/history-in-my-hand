// 本文件由 tools/build.py 自动生成（切片 taiwan_zhengchenggong_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_zhengchenggong_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_zhengchenggong_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "taiwan",
  "province": "taiwan",
  "title": "中国台湾·郑成功收复台湾（1661—1662）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "jinmen_liaoluo",
  "dossier_event": "event:ev_taiwan_zhengchenggong_llm_01",
  "vocab_pack": "taiwan_zhengchenggong_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming",
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
    "note": "中国台湾·郑成功收复台湾（1661—1662）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·郑成功收复台湾（1661—1662）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "中国台湾·郑成功收复台湾（1661—1662）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "中国台湾·郑成功收复台湾（1661—1662）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   5,
   6
  ],
  "page": "taiwan_zhengchenggong_llm.html",
  "key": "taiwan_zhengchenggong_llm",
  "scene_id": "taiwan_zhengchenggong_llm"
 },
 "sources": [
  {
   "id": "zhengchenggong_llm_src",
   "title": "郑成功收复台湾史料摘录",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "LLM 摘要（paraphrase_unverified）",
   "period": "1661—1662",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jinmen_liaoluo",
   "name": "金門料羅灣",
   "type": "port",
   "modern": "今臺灣金門縣",
   "note": "鄭軍出發地。坐标据地名志条目（别名 金門料羅灣→金门），标 approx。",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.323,
   "lat": 24.433,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 金門料羅灣→金门）（诚实回填 v0.221）。",
   "elev": 28
  },
  {
   "id": "taiwan_strait",
   "name": "臺灣海峽",
   "type": "region",
   "modern": "今中國福建省與臺灣之間",
   "note": "橫渡之海域",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "luerhmen",
   "name": "鹿耳門",
   "type": "port",
   "modern": "今臺灣臺南市安平區",
   "note": "登陸地",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "zeelandia",
   "name": "熱蘭遮城",
   "type": "fortress",
   "modern": "今臺灣臺南市安平區",
   "note": "荷蘭據點",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "chengtianfu",
   "name": "承天府",
   "type": "city",
   "modern": "今臺灣臺南市",
   "note": "鄭氏行政中心",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "TAI__p01",
   "name": "鄭成功",
   "role": "南明延平郡王，東征主帥",
   "note": "率師東征，收復臺灣",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "TAI__p02",
   "name": "揆一",
   "role": "荷蘭東印度公司臺灣總督",
   "note": "守熱蘭遮城，後投降",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAI__p03",
   "name": "鄭經",
   "role": "鄭成功之子，繼承延平郡王",
   "note": "鄭成功病逝後繼位",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "event:ev_taiwan_zhengchenggong_llm_01",
   "predicate": "出發地",
   "value_text": "自金門料羅灣出發",
   "time": {
    "era_text": "清順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "jinmen_liaoluo",
   "source": "zhengchenggong_llm_src",
   "quote": "自金門料羅灣出發",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "自金門料羅灣出發",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "event:ev_taiwan_zhengchenggong_llm_01",
   "predicate": "登陸地",
   "value_text": "於鹿耳門登陸",
   "time": {
    "era_text": "清順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "luerhmen",
   "source": "zhengchenggong_llm_src",
   "quote": "於鹿耳門登陸",
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
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "於鹿耳門登陸",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "event:ev_taiwan_zhengchenggong_llm_03",
   "predicate": "投降時間",
   "value_text": "1662年二月荷蘭總督揆一投降",
   "time": {
    "era_text": "清康熙元年二月",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "zeelandia",
   "source": "zhengchenggong_llm_src",
   "quote": "次年二月荷蘭總督揆一投降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "次年二月荷蘭總督揆一投降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "event:ev_taiwan_zhengchenggong_llm_03",
   "predicate": "結果",
   "value_text": "臺灣重回中國版圖",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "taiwan_strait",
   "source": "zhengchenggong_llm_src",
   "quote": "臺灣重回中國版圖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "臺灣重回中國版圖",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "event:ev_taiwan_zhengchenggong_llm_04",
   "predicate": "行政措施",
   "value_text": "設承天府，寓兵於農",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "chengtianfu",
   "source": "zhengchenggong_llm_src",
   "quote": "設承天府，寓兵於農",
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
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "設承天府，寓兵於農",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "person:TAI__p01",
   "predicate": "病逝",
   "value_text": "鄭成功同年病逝",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "chengtianfu",
   "source": "zhengchenggong_llm_src",
   "quote": "惜同年病逝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "惜同年病逝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "person:TAI__p03",
   "predicate": "繼位",
   "value_text": "子鄭經繼之",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "chengtianfu",
   "source": "zhengchenggong_llm_src",
   "quote": "子鄭經繼之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "子鄭經繼之",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "place:taiwan_strait",
   "predicate": "歷史歸屬",
   "value_text": "臺灣自古為中國領土",
   "time": {
    "era_text": "",
    "start": ""
   },
   "place": "taiwan_strait",
   "source": "zhengchenggong_llm_src",
   "quote": "臺灣自古為中國領土",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "史觀表述",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "臺灣自古為中國領土",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_zhengchenggong_llm_03",
   "predicate": "荷軍損失",
   "value_text": "荷蘭損失未詳",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "zeelandia",
   "source": "zhengchenggong_llm_src",
   "quote": "荷蘭損失未詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載",
   "dims": [
    6
   ],
   "lead": {
    "where": "荷蘭東印度公司檔案",
    "skills": [
     "荷蘭語文獻解讀"
    ],
    "accept": "需查荷方記載"
   },
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷蘭損失未詳",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "event:ev_taiwan_zhengchenggong_llm_01",
   "predicate": "兵力",
   "value_text": "鄭軍兵力未詳",
   "time": {
    "era_text": "清順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "jinmen_liaoluo",
   "source": "zhengchenggong_llm_src",
   "quote": "兵力未詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載",
   "dims": [
    6
   ],
   "lead": {
    "where": "南明史料",
    "skills": [
     "明清檔案研究"
    ],
    "accept": "需查鄭軍編制"
   },
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "兵力未詳",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "event:ev_taiwan_zhengchenggong_llm_02",
   "predicate": "登陸時間",
   "value_text": "登陸時間未詳",
   "time": {
    "era_text": "清順治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "luerhmen",
   "source": "zhengchenggong_llm_src",
   "quote": "登陸時間未詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載",
   "dims": [
    6
   ],
   "lead": {
    "where": "鄭成功日記",
    "skills": [
     "日記解讀"
    ],
    "accept": "需查確切日期"
   },
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "登陸時間未詳",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "event:ev_taiwan_zhengchenggong_llm_03",
   "predicate": "投降條件",
   "value_text": "投降條件未詳",
   "time": {
    "era_text": "清康熙元年",
    "start": "1662-01-01",
    "end": "1662-12-31",
    "gregorian_year": 1662
   },
   "place": "zeelandia",
   "source": "zhengchenggong_llm_src",
   "quote": "投降條件未詳",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未載",
   "dims": [
    6
   ],
   "lead": {
    "where": "條約文書",
    "skills": [
     "外交文獻"
    ],
    "accept": "需查和約內容"
   },
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "投降條件未詳",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAI_009",
  "TAI_010",
  "TAI_011",
  "TAI_012"
 ],
 "events": [
  {
   "id": "ev_taiwan_zhengchenggong_llm_01",
   "subject": "event:ev_taiwan_zhengchenggong_llm_01",
   "year": 1661,
   "era": "清順治十八年",
   "title": "鄭成功率師東征",
   "kind": "戰事",
   "text": "自金門料羅灣出發，橫渡臺灣海峽",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_zhengchenggong_llm_02",
   "subject": "event:ev_taiwan_zhengchenggong_llm_02",
   "year": 1661,
   "era": "清順治十八年",
   "title": "鹿耳門登陸",
   "kind": "戰事",
   "text": "於鹿耳門登陸，進圍熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_zhengchenggong_llm_03",
   "subject": "event:ev_taiwan_zhengchenggong_llm_03",
   "year": 1662,
   "era": "清康熙元年",
   "title": "荷蘭投降",
   "kind": "戰事",
   "text": "揆一投降，臺灣重回中國版圖",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_zhengchenggong_llm_04",
   "subject": "event:ev_taiwan_zhengchenggong_llm_04",
   "year": 1662,
   "era": "清康熙元年",
   "title": "設承天府",
   "kind": "行政",
   "text": "以臺灣為抗清基地，設承天府",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jinmen_liaoluo",
   "to": "luerhmen",
   "type": "military",
   "label": "鄭軍東征路線",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "luerhmen",
   "to": "zeelandia",
   "type": "battle",
   "label": "圍攻熱蘭遮城",
   "_source_idx": 0,
   "_source_name": "郑成功收复台湾史料摘录",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "chengtianfu",
   "party": "后世官修",
   "start": 1661,
   "end": 1662,
   "basis": "auto: 场景主地点 chengtianfu 叙事控制方=后世官修"
  }
 ],
 "control_seats": [],
 "control_years": [
  1661,
  1662
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
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.323,
        23.71
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
        119.164,
        25.433
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
        117.323,
        25.433
       ],
       [
        119.164,
        25.433
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
        117.323,
        23.71
       ],
       [
        117.323,
        25.433
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
         119.323,
         25.232
        ],
        [
         119.323,
         25.3
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
         119.211,
         25.433
        ],
        [
         119.264,
         25.433
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
         119.323,
         25.411
        ],
        [
         119.323,
         25.433
        ],
        [
         117.323,
         25.433
        ],
        [
         117.323,
         23.552
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
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   117.323,
   23.433,
   119.323,
   25.433
  ]
 }
};
