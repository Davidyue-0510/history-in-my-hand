// 本文件由 tools/build.py 自动生成（切片 aomen_portugal_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["aomen_portugal_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["aomen_portugal_llm"] = {
 "meta": {
  "kind": "exchange",
  "region": "exchange",
  "province": "aomen",
  "title": "葡人租居澳门（1553–1573）",
  "dossier_label": "aomen_portugal_llm",
  "subtitle": "",
  "primary_place": "aomen",
  "dossier_event": "event:ev_aomen_portugal_llm_01",
  "vocab_pack": "inline:aomen_portugal_llm",
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
  "epoch": "ming",
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
    "note": "制度+思想→明以朝贡—市舶体系待葡人，主权在县官，岁输地租"
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
    "note": "技術+制度→葡人筑城列炮、据为互市埠，中西货物转口"
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
    "note": "社會+制度→蕃商、教士、工匠聚居，澳门华葡双轨社会初成"
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
    "note": "地理+制度→澳门扼珠江口外海道，为中西互市初埠，权犹在中国"
   }
  },
  "subject_names": [
   "person:AOM__p01",
   "person:AOM__p02",
   "person:AOM__p03",
   "place:aomen",
   "event:ev_aomen_portugal_llm_01",
   "event:ev_aomen_portugal_llm_02"
  ],
  "page": "county.html?scene=aomen_portugal_llm",
  "key": "aomen_portugal_llm",
  "scene_id": "aomen_portugal_llm"
 },
 "sources": [
  {
   "id": "ming_shi_folangji_llm",
   "title": "明史·佛郎机传（澳门）",
   "party": "明官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清",
   "note": ""
  },
  {
   "id": "synthesis",
   "title": "綜合研判·缺口標註",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "諸場景據原始文獻綜合研判，缺環以 gap 層誠實標註。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "aomen",
   "name": "澳门",
   "type": "port",
   "modern": "今中国澳门特别行政区",
   "note": "中西互市之初埠",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "lon": 113.55,
   "lat": 22.2,
   "geo_unresolved": false,
   "elev": 115
  }
 ],
 "persons": [
  {
   "id": "AOM__p01",
   "name": "佛郎机人",
   "role": "葡萄牙商人",
   "note": "托言舟触礁，请晾渍物，贿税使，得租居澳门",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "AOM__p02",
   "name": "税使",
   "role": "明朝税使",
   "note": "受葡人贿赂，允其租居",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "AOM__p03",
   "name": "守澳官",
   "role": "明朝守澳官",
   "note": "岁输地租，权犹在中国",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AOM_001",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "租居原因",
   "value_text": "托言舟触礁，请晾渍物",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "佛郎机（葡）人托言舟触礁，请晾渍物",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "佛郎机（葡）人托言舟触礁，请晾渍物",
   "dim_source": "fallback",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_002",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "租居手段",
   "value_text": "贿税使，遂得租居",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "贿税使，遂得租居澳门",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "贿税使，遂得租居澳门",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_003",
   "subject": "event:ev_aomen_portugal_llm_02",
   "predicate": "建置行为",
   "value_text": "筑城列炮，据为互市之埠",
   "time": {
    "era_text": "万历中",
    "start": "1573"
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "万历中，筑城列炮，据为互市之埠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "万历中，筑城列炮，据为互市之埠",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_004",
   "subject": "place:aomen",
   "predicate": "行政管辖",
   "value_text": "明设守澳官，岁输地租",
   "time": {
    "era_text": "嘉靖三十二年后",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "明设守澳官，岁输地租",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "明设守澳官，岁输地租",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_005",
   "subject": "place:aomen",
   "predicate": "主权归属",
   "value_text": "权犹在中国",
   "time": {
    "era_text": "嘉靖三十二年后",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "权犹在中国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "权犹在中国",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_006",
   "subject": "place:aomen",
   "predicate": "历史地位",
   "value_text": "中西互市之初埠",
   "time": {
    "era_text": "万历中",
    "start": "1573"
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "澳门遂为中西互市之初埠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "澳门遂为中西互市之初埠",
   "dim_source": "fallback",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_007",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "租居性质",
   "value_text": "非正式割让，仅租居",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "遂得租居澳门",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "学界对租居性质有争议",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "遂得租居澳门",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_008",
   "subject": "event:ev_aomen_portugal_llm_02",
   "predicate": "筑城时间",
   "value_text": "万历中，具体年份不详",
   "time": {
    "era_text": "万历中",
    "start": "1573"
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "万历中，筑城列炮",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "筑城确切年份待考",
   "dims": [
    6
   ],
   "lead": {
    "where": "澳门",
    "skills": [
     "历史考据"
    ],
    "accept": "万历年间具体筑城年份"
   },
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "万历中，筑城列炮",
   "dim_source": "fallback",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_009",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "租居合法性",
   "value_text": "未经明廷正式批准",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "贿税使，遂得租居",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学界认为系地方官员私自允许",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "贿税使，遂得租居",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_010",
   "subject": "place:aomen",
   "predicate": "地租缴纳",
   "value_text": "岁输地租，明廷收租",
   "time": {
    "era_text": "嘉靖三十二年后",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "岁输地租",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "岁输地租",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_011",
   "subject": "place:aomen",
   "predicate": "军事防御",
   "value_text": "葡人筑城列炮，加强防御",
   "time": {
    "era_text": "万历中",
    "start": "1573"
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "筑城列炮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "筑城列炮",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_012",
   "subject": "place:aomen",
   "predicate": "贸易功能",
   "value_text": "成为互市港口",
   "time": {
    "era_text": "万历中",
    "start": "1573"
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "据为互市之埠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "据为互市之埠",
   "dim_source": "fallback",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_013",
   "subject": "place:aomen",
   "predicate": "主权象征",
   "value_text": "明设守澳官，行使主权",
   "time": {
    "era_text": "嘉靖三十二年后",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "明设守澳官",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "明设守澳官",
   "dim_source": "declared",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOM_014",
   "subject": "place:aomen",
   "predicate": "租居起始",
   "value_text": "嘉靖三十二年始租居",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "aomen",
   "source": "ming_shi_folangji_llm",
   "quote": "嘉靖三十二年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null,
   "_source_quote": "嘉靖三十二年",
   "dim_source": "fallback",
   "_party": "明官修",
   "_faction": null
  },
  {
   "id": "AOMEG1",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「地理」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "aomen_portugal_llm",
    "start": "1557",
    "end": "1557",
    "gregorian_year": 1557
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "exchange",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補地理維直接史料與學界考訂"
   },
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AOMEG4",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「社會」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "aomen_portugal_llm",
    "start": "1557",
    "end": "1557",
    "gregorian_year": 1557
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "exchange",
   "note": "補維度覆蓋（誠實缺口）",
   "lead": {
    "where": "原始史料對讀",
    "skills": [
     "紀年校勘",
     "多源比對"
    ],
    "accept": "補社會維直接史料與學界考訂"
   },
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AOMEG5",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「思想」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "aomen_portugal_llm",
    "start": "1557",
    "end": "1557",
    "gregorian_year": 1557
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "exchange",
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
  },
  {
   "id": "AOMEN_PORTUGAL_LLM_THK1",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "族群杂居",
   "value_text": "澳门“蕃坊”华葡杂居；“番寺（教堂）”与“妈阁”并立",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "",
   "source": "synthesis",
   "quote": "蕃坊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "族群杂居",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AOMEN_PORTUGAL_LLM_THK2",
   "subject": "event:ev_aomen_portugal_llm_01",
   "predicate": "中西初遇",
   "value_text": "“朝贡贸易”框架下“许夷侨居”，中西初遇的制度弹性",
   "time": {
    "era_text": "嘉靖三十二年",
    "start": "1553-01-01",
    "end": "1553-12-31",
    "gregorian_year": 1553
   },
   "place": "",
   "source": "synthesis",
   "quote": "朝贡框架",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "中西初遇",
   "dims": [
    5
   ],
   "dim_source": "inferred",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "AOM_008",
  "AOMEG1",
  "AOMEG4",
  "AOMEG5"
 ],
 "events": [
  {
   "id": "ev_aomen_portugal_llm_01",
   "subject": "event:ev_aomen_portugal_llm_01",
   "year": 1553,
   "era": "嘉靖三十二年",
   "title": "葡人租居澳门",
   "kind": "行政",
   "text": "葡人托言舟触礁，贿税使得居澳门",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null
  },
  {
   "id": "ev_aomen_portugal_llm_02",
   "subject": "event:ev_aomen_portugal_llm_02",
   "year": 1573,
   "era": "万历年间",
   "title": "筑城列炮",
   "kind": "建置",
   "text": "葡人筑城列炮，据为互市之埠",
   "_source_idx": 0,
   "_source_name": "明史·佛郎机传（澳门）",
   "_source_party": "明官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
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
   "明官修",
   "综合史料"
  ],
  "party_bucket": {
   "明官修": "明官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "明官修": "#8C6239",
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
       114.134,
       22.292
      ],
      [
       114.139,
       22.268
      ],
      [
       114.207,
       22.195
      ],
      [
       114.232,
       22.211
      ],
      [
       114.244,
       22.234
      ],
      [
       114.247,
       22.264
      ],
      [
       114.187,
       22.297
      ],
      [
       114.134,
       22.292
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
       113.465,
       22.905
      ],
      [
       113.404,
       22.903
      ],
      [
       113.426,
       22.859
      ],
      [
       113.463,
       22.832
      ],
      [
       113.486,
       22.828
      ],
      [
       113.564,
       22.758
      ],
      [
       113.555,
       22.804
      ],
      [
       113.521,
       22.852
      ],
      [
       113.465,
       22.905
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
       112.782,
       21.772
      ],
      [
       112.761,
       21.733
      ],
      [
       112.713,
       21.698
      ],
      [
       112.733,
       21.67
      ],
      [
       112.742,
       21.618
      ],
      [
       112.771,
       21.582
      ],
      [
       112.79,
       21.602
      ],
      [
       112.801,
       21.695
      ],
      [
       112.813,
       21.712
      ],
      [
       112.863,
       21.753
      ],
      [
       112.839,
       21.765
      ],
      [
       112.782,
       21.772
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
       112.559,
       21.675
      ],
      [
       112.55,
       21.661
      ],
      [
       112.55,
       21.619
      ],
      [
       112.644,
       21.64
      ],
      [
       112.648,
       21.71
      ],
      [
       112.559,
       21.675
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
       113.998,
       22.21
      ],
      [
       114.003,
       22.278
      ],
      [
       114.044,
       22.333
      ],
      [
       113.882,
       22.28
      ],
      [
       113.839,
       22.242
      ],
      [
       113.852,
       22.22
      ],
      [
       113.877,
       22.21
      ],
      [
       113.998,
       22.21
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
        112.55,
        21.793
       ],
       [
        112.586,
        21.777
       ],
       [
        112.634,
        21.82
       ],
       [
        112.661,
        21.859
       ],
       [
        112.725,
        21.902
       ],
       [
        112.809,
        21.945
       ],
       [
        112.904,
        21.881
       ],
       [
        112.954,
        21.907
       ],
       [
        112.984,
        21.938
       ],
       [
        113.008,
        22.119
       ],
       [
        113.089,
        22.208
       ],
       [
        113.149,
        22.075
       ],
       [
        113.266,
        22.089
       ],
       [
        113.328,
        22.145
       ],
       [
        113.367,
        22.165
       ],
       [
        113.416,
        22.178
       ],
       [
        113.499,
        22.202
       ],
       [
        113.548,
        22.223
       ],
       [
        113.576,
        22.297
       ],
       [
        113.589,
        22.35
       ],
       [
        113.551,
        22.404
       ],
       [
        113.553,
        22.594
       ],
       [
        113.485,
        22.692
       ],
       [
        113.45,
        22.726
       ],
       [
        113.432,
        22.789
       ],
       [
        113.345,
        22.865
       ],
       [
        113.338,
        22.889
       ],
       [
        113.331,
        22.912
       ],
       [
        113.442,
        22.941
       ],
       [
        113.46,
        22.996
       ],
       [
        113.445,
        23.055
       ],
       [
        113.52,
        23.102
       ],
       [
        113.621,
        23.127
       ],
       [
        113.592,
        23.077
       ],
       [
        113.586,
        23.02
       ],
       [
        113.603,
        22.969
       ],
       [
        113.62,
        22.861
       ],
       [
        113.661,
        22.802
       ],
       [
        113.754,
        22.734
       ],
       [
        113.828,
        22.607
       ],
       [
        113.931,
        22.531
       ],
       [
        114.015,
        22.512
       ],
       [
        114.007,
        22.484
       ],
       [
        113.896,
        22.428
       ],
       [
        113.903,
        22.396
       ],
       [
        113.937,
        22.365
       ],
       [
        114.033,
        22.376
       ],
       [
        114.139,
        22.348
       ],
       [
        114.268,
        22.296
       ],
       [
        114.288,
        22.325
       ],
       [
        114.291,
        22.374
       ],
       [
        114.335,
        22.396
       ],
       [
        114.325,
        22.437
       ],
       [
        114.285,
        22.458
       ],
       [
        114.291,
        22.499
       ],
       [
        114.266,
        22.541
       ],
       [
        114.341,
        22.593
       ],
       [
        114.42,
        22.583
       ],
       [
        114.496,
        22.527
       ],
       [
        114.55,
        22.529
       ],
       [
        114.55,
        22.568
       ],
       [
        114.544,
        22.621
       ],
       [
        114.55,
        22.627
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
        114.232,
        22.211
       ],
       [
        114.207,
        22.195
       ],
       [
        114.139,
        22.268
       ],
       [
        114.134,
        22.292
       ],
       [
        114.187,
        22.297
       ],
       [
        114.247,
        22.264
       ],
       [
        114.244,
        22.234
       ],
       [
        114.232,
        22.211
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
        113.555,
        22.804
       ],
       [
        113.564,
        22.758
       ],
       [
        113.486,
        22.828
       ],
       [
        113.463,
        22.832
       ],
       [
        113.426,
        22.859
       ],
       [
        113.404,
        22.903
       ],
       [
        113.465,
        22.905
       ],
       [
        113.521,
        22.852
       ],
       [
        113.555,
        22.804
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
        112.79,
        21.602
       ],
       [
        112.771,
        21.582
       ],
       [
        112.742,
        21.618
       ],
       [
        112.733,
        21.67
       ],
       [
        112.713,
        21.698
       ],
       [
        112.761,
        21.733
       ],
       [
        112.782,
        21.772
       ],
       [
        112.839,
        21.765
       ],
       [
        112.863,
        21.753
       ],
       [
        112.813,
        21.712
       ],
       [
        112.801,
        21.695
       ],
       [
        112.79,
        21.602
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
        112.644,
        21.64
       ],
       [
        112.55,
        21.619
       ],
       [
        112.55,
        21.661
       ],
       [
        112.559,
        21.675
       ],
       [
        112.648,
        21.71
       ],
       [
        112.644,
        21.64
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
        113.998,
        22.21
       ],
       [
        113.877,
        22.21
       ],
       [
        113.852,
        22.22
       ],
       [
        113.839,
        22.242
       ],
       [
        113.882,
        22.28
       ],
       [
        114.044,
        22.333
       ],
       [
        114.003,
        22.278
       ],
       [
        113.998,
        22.21
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
        112.55,
        23.2
       ],
       [
        114.55,
        23.2
       ],
       [
        114.55,
        22.627
       ],
       [
        114.544,
        22.621
       ],
       [
        114.55,
        22.568
       ],
       [
        114.55,
        22.529
       ],
       [
        114.496,
        22.527
       ],
       [
        114.42,
        22.583
       ],
       [
        114.341,
        22.593
       ],
       [
        114.266,
        22.541
       ],
       [
        114.291,
        22.499
       ],
       [
        114.285,
        22.458
       ],
       [
        114.325,
        22.437
       ],
       [
        114.335,
        22.396
       ],
       [
        114.291,
        22.374
       ],
       [
        114.288,
        22.325
       ],
       [
        114.268,
        22.296
       ],
       [
        114.139,
        22.348
       ],
       [
        114.033,
        22.376
       ],
       [
        113.937,
        22.365
       ],
       [
        113.903,
        22.396
       ],
       [
        113.896,
        22.428
       ],
       [
        114.007,
        22.484
       ],
       [
        114.015,
        22.512
       ],
       [
        113.931,
        22.531
       ],
       [
        113.828,
        22.607
       ],
       [
        113.754,
        22.734
       ],
       [
        113.661,
        22.802
       ],
       [
        113.62,
        22.861
       ],
       [
        113.603,
        22.969
       ],
       [
        113.586,
        23.02
       ],
       [
        113.592,
        23.077
       ],
       [
        113.621,
        23.127
       ],
       [
        113.52,
        23.102
       ],
       [
        113.445,
        23.055
       ],
       [
        113.46,
        22.996
       ],
       [
        113.442,
        22.941
       ],
       [
        113.331,
        22.912
       ],
       [
        113.338,
        22.889
       ],
       [
        113.345,
        22.865
       ],
       [
        113.432,
        22.789
       ],
       [
        113.45,
        22.726
       ],
       [
        113.485,
        22.692
       ],
       [
        113.553,
        22.594
       ],
       [
        113.551,
        22.404
       ],
       [
        113.589,
        22.35
       ],
       [
        113.576,
        22.297
       ],
       [
        113.548,
        22.223
       ],
       [
        113.499,
        22.202
       ],
       [
        113.416,
        22.178
       ],
       [
        113.367,
        22.165
       ],
       [
        113.328,
        22.145
       ],
       [
        113.266,
        22.089
       ],
       [
        113.149,
        22.075
       ],
       [
        113.089,
        22.208
       ],
       [
        113.008,
        22.119
       ],
       [
        112.984,
        21.938
       ],
       [
        112.954,
        21.907
       ],
       [
        112.904,
        21.881
       ],
       [
        112.809,
        21.945
       ],
       [
        112.725,
        21.902
       ],
       [
        112.661,
        21.859
       ],
       [
        112.634,
        21.82
       ],
       [
        112.586,
        21.777
       ],
       [
        112.55,
        21.793
       ],
       [
        112.55,
        23.2
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
         113.559,
         22.212
        ],
        [
         113.594,
         22.229
        ],
        [
         113.596,
         22.304
        ],
        [
         113.618,
         22.315
        ],
        [
         113.605,
         22.34
        ],
        [
         113.628,
         22.349
        ],
        [
         113.67,
         22.417
        ],
        [
         113.666,
         22.439
        ],
        [
         113.625,
         22.443
        ],
        [
         113.609,
         22.409
        ],
        [
         113.574,
         22.412
        ],
        [
         113.631,
         22.476
        ],
        [
         113.668,
         22.481
        ],
        [
         113.692,
         22.515
        ],
        [
         113.74,
         22.534
        ],
        [
         113.717,
         22.645
        ],
        [
         113.678,
         22.726
        ],
        [
         113.734,
         22.736
        ],
        [
         113.758,
         22.683
        ],
        [
         113.766,
         22.666
        ],
        [
         113.803,
         22.593
        ],
        [
         113.857,
         22.54
        ],
        [
         113.87,
         22.46
        ],
        [
         113.894,
         22.443
        ],
        [
         113.953,
         22.487
        ],
        [
         113.955,
         22.491
        ],
        [
         113.976,
         22.511
        ],
        [
         114.032,
         22.504
        ],
        [
         114.082,
         22.512
        ],
        [
         114.095,
         22.534
        ],
        [
         114.157,
         22.544
        ],
        [
         114.166,
         22.559
        ],
        [
         114.223,
         22.553
        ],
        [
         114.233,
         22.54
        ],
        [
         114.295,
         22.564
        ],
        [
         114.322,
         22.587
        ],
        [
         114.382,
         22.602
        ],
        [
         114.427,
         22.589
        ],
        [
         114.472,
         22.522
        ],
        [
         114.476,
         22.459
        ],
        [
         114.507,
         22.439
        ],
        [
         114.549,
         22.466
        ],
        [
         114.55,
         22.466
        ],
        [
         114.55,
         22.659
        ],
        [
         114.515,
         22.655
        ],
        [
         114.55,
         22.676
        ],
        [
         114.55,
         23.2
        ],
        [
         112.55,
         23.2
        ],
        [
         112.55,
         21.754
        ],
        [
         112.647,
         21.758
        ],
        [
         112.686,
         21.811
        ],
        [
         112.793,
         21.921
        ],
        [
         112.841,
         21.921
        ],
        [
         112.894,
         21.844
        ],
        [
         112.93,
         21.839
        ],
        [
         112.99,
         21.869
        ],
        [
         113.048,
         21.957
        ],
        [
         113.054,
         22.012
        ],
        [
         113.032,
         22.046
        ],
        [
         113.046,
         22.089
        ],
        [
         113.087,
         22.126
        ],
        [
         113.092,
         22.065
        ],
        [
         113.143,
         22.012
        ],
        [
         113.152,
         21.98
        ],
        [
         113.235,
         21.888
        ],
        [
         113.267,
         21.872
        ],
        [
         113.32,
         21.909
        ],
        [
         113.33,
         21.962
        ],
        [
         113.442,
         22.009
        ],
        [
         113.46,
         22.044
        ],
        [
         113.528,
         22.074
        ],
        [
         113.567,
         22.075
        ],
        [
         113.554,
         22.107
        ],
        [
         113.554,
         22.142
        ],
        [
         113.535,
         22.174
        ],
        [
         113.538,
         22.209
        ],
        [
         113.559,
         22.212
        ]
       ]
      ],
      [
       [
        [
         112.853,
         21.741
        ],
        [
         112.876,
         21.773
        ],
        [
         112.841,
         21.777
        ],
        [
         112.783,
         21.74
        ],
        [
         112.724,
         21.72
        ],
        [
         112.706,
         21.679
        ],
        [
         112.735,
         21.667
        ],
        [
         112.78,
         21.672
        ],
        [
         112.731,
         21.614
        ],
        [
         112.775,
         21.564
        ],
        [
         112.817,
         21.59
        ],
        [
         112.799,
         21.611
        ],
        [
         112.821,
         21.656
        ],
        [
         112.805,
         21.687
        ],
        [
         112.833,
         21.737
        ],
        [
         112.853,
         21.741
        ]
       ]
      ],
      [
       [
        [
         112.55,
         21.588
        ],
        [
         112.563,
         21.591
        ],
        [
         112.571,
         21.62
        ],
        [
         112.621,
         21.606
        ],
        [
         112.666,
         21.643
        ],
        [
         112.639,
         21.673
        ],
        [
         112.666,
         21.684
        ],
        [
         112.664,
         21.714
        ],
        [
         112.592,
         21.693
        ],
        [
         112.56,
         21.667
        ],
        [
         112.571,
         21.646
        ],
        [
         112.55,
         21.636
        ],
        [
         112.55,
         21.588
        ]
       ]
      ],
      [
       [
        [
         114.231,
         22.017
        ],
        [
         114.311,
         22.041
        ],
        [
         114.303,
         22.05
        ],
        [
         114.24,
         22.035
        ],
        [
         114.231,
         22.017
        ]
       ]
      ],
      [
       [
        [
         113.765,
         21.962
        ],
        [
         113.774,
         21.998
        ],
        [
         113.742,
         21.992
        ],
        [
         113.765,
         21.962
        ]
       ]
      ],
      [
       [
        [
         113.723,
         21.922
        ],
        [
         113.743,
         21.95
        ],
        [
         113.719,
         21.952
        ],
        [
         113.723,
         21.922
        ]
       ]
      ],
      [
       [
        [
         113.143,
         21.832
        ],
        [
         113.162,
         21.854
        ],
        [
         113.204,
         21.861
        ],
        [
         113.168,
         21.877
        ],
        [
         113.137,
         21.869
        ],
        [
         113.143,
         21.832
        ]
       ]
      ],
      [
       [
        [
         113.82,
         22.396
        ],
        [
         113.814,
         22.42
        ],
        [
         113.787,
         22.414
        ],
        [
         113.82,
         22.396
        ]
       ]
      ],
      [
       [
        [
         114.19,
         21.987
        ],
        [
         114.229,
         21.995
        ],
        [
         114.181,
         22.01
        ],
        [
         114.19,
         21.987
        ]
       ]
      ],
      [
       [
        [
         114.154,
         21.975
        ],
        [
         114.172,
         22.0
        ],
        [
         114.124,
         21.985
        ],
        [
         114.154,
         21.975
        ]
       ]
      ],
      [
       [
        [
         113.025,
         21.848
        ],
        [
         113.046,
         21.883
        ],
        [
         113.007,
         21.869
        ],
        [
         113.025,
         21.848
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
         114.032,
         22.504
        ],
        [
         114.001,
         22.491
        ],
        [
         113.978,
         22.457
        ],
        [
         113.918,
         22.418
        ],
        [
         113.92,
         22.368
        ],
        [
         113.952,
         22.355
        ],
        [
         113.957,
         22.36
        ],
        [
         113.98,
         22.366
        ],
        [
         114.026,
         22.348
        ],
        [
         113.955,
         22.299
        ],
        [
         113.97,
         22.321
        ],
        [
         113.898,
         22.309
        ],
        [
         113.889,
         22.272
        ],
        [
         113.843,
         22.229
        ],
        [
         113.849,
         22.191
        ],
        [
         113.899,
         22.216
        ],
        [
         113.936,
         22.205
        ],
        [
         113.981,
         22.23
        ],
        [
         113.997,
         22.206
        ],
        [
         114.026,
         22.229
        ],
        [
         114.005,
         22.239
        ],
        [
         114.03,
         22.263
        ],
        [
         114.035,
         22.301
        ],
        [
         114.07,
         22.327
        ],
        [
         114.121,
         22.321
        ],
        [
         114.146,
         22.301
        ],
        [
         114.12,
         22.272
        ],
        [
         114.165,
         22.227
        ],
        [
         114.201,
         22.232
        ],
        [
         114.203,
         22.207
        ],
        [
         114.266,
         22.201
        ],
        [
         114.249,
         22.275
        ],
        [
         114.262,
         22.295
        ],
        [
         114.285,
         22.264
        ],
        [
         114.313,
         22.264
        ],
        [
         114.316,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.278,
         22.329
        ],
        [
         114.283,
         22.387
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.324,
         22.385
        ],
        [
         114.324,
         22.384
        ],
        [
         114.357,
         22.34
        ],
        [
         114.395,
         22.362
        ],
        [
         114.385,
         22.412
        ],
        [
         114.406,
         22.433
        ],
        [
         114.406,
         22.434
        ],
        [
         114.376,
         22.436
        ],
        [
         114.326,
         22.479
        ],
        [
         114.279,
         22.436
        ],
        [
         114.22,
         22.428
        ],
        [
         114.205,
         22.45
        ],
        [
         114.233,
         22.467
        ],
        [
         114.253,
         22.445
        ],
        [
         114.341,
         22.503
        ],
        [
         114.31,
         22.497
        ],
        [
         114.289,
         22.523
        ],
        [
         114.264,
         22.542
        ],
        [
         114.263,
         22.542
        ],
        [
         114.26,
         22.548
        ],
        [
         114.233,
         22.529
        ],
        [
         114.233,
         22.54
        ],
        [
         114.223,
         22.553
        ],
        [
         114.166,
         22.559
        ],
        [
         114.157,
         22.544
        ],
        [
         114.095,
         22.534
        ],
        [
         114.082,
         22.512
        ],
        [
         114.032,
         22.504
        ]
       ]
      ],
      [
       [
        [
         114.143,
         22.214
        ],
        [
         114.124,
         22.239
        ],
        [
         114.12,
         22.178
        ],
        [
         114.155,
         22.178
        ],
        [
         114.167,
         22.205
        ],
        [
         114.143,
         22.214
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.372
        ],
        [
         114.314,
         22.341
        ],
        [
         114.333,
         22.353
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.372
        ]
       ]
      ],
      [
       [
        [
         114.32,
         22.381
        ],
        [
         114.324,
         22.384
        ],
        [
         114.324,
         22.385
        ],
        [
         114.323,
         22.386
        ],
        [
         114.323,
         22.386
        ],
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.382
        ],
        [
         114.32,
         22.381
        ]
       ]
      ],
      [
       [
        [
         114.306,
         22.37
        ],
        [
         114.306,
         22.372
        ],
        [
         114.305,
         22.373
        ],
        [
         114.306,
         22.37
        ]
       ]
      ],
      [
       [
        [
         114.316,
         22.299
        ],
        [
         114.317,
         22.299
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.3
        ],
        [
         114.316,
         22.299
        ]
       ]
      ],
      [
       [
        [
         114.319,
         22.382
        ],
        [
         114.32,
         22.381
        ],
        [
         114.32,
         22.382
        ],
        [
         114.319,
         22.382
        ]
       ]
      ],
      [
       [
        [
         114.372,
         22.323
        ],
        [
         114.373,
         22.324
        ],
        [
         114.372,
         22.324
        ],
        [
         114.372,
         22.323
        ]
       ]
      ],
      [
       [
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ],
        [
         114.324,
         22.298
        ]
       ]
      ]
     ]
    },
    "n": "香港特别行政区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.554,
         22.107
        ],
        [
         113.604,
         22.132
        ],
        [
         113.576,
         22.195
        ],
        [
         113.559,
         22.212
        ],
        [
         113.538,
         22.209
        ],
        [
         113.535,
         22.174
        ],
        [
         113.554,
         22.142
        ],
        [
         113.554,
         22.107
        ]
       ]
      ],
      [
       [
        [
         113.586,
         22.201
        ],
        [
         113.576,
         22.201
        ],
        [
         113.576,
         22.195
        ],
        [
         113.586,
         22.201
        ]
       ]
      ]
     ]
    },
    "n": "澳门特别行政区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.035,
        22.795
       ],
       [
        113.095,
        22.73
       ],
       [
        113.166,
        22.576
       ],
       [
        113.214,
        22.483
       ],
       [
        113.264,
        22.363
       ],
       [
        113.416,
        22.178
       ]
      ],
      [
       [
        113.035,
        22.795
       ],
       [
        113.299,
        22.698
       ],
       [
        113.395,
        22.651
       ],
       [
        113.444,
        22.599
       ],
       [
        113.492,
        22.591
       ],
       [
        113.552,
        22.587
       ]
      ],
      [
       [
        112.98,
        23.041
       ],
       [
        113.445,
        23.055
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.819,
        23.082
       ],
       [
        112.891,
        22.918
       ],
       [
        112.963,
        22.822
       ],
       [
        113.035,
        22.795
       ]
      ],
      [
       [
        112.805,
        23.148
       ],
       [
        112.912,
        23.113
       ],
       [
        112.974,
        23.052
       ],
       [
        113.024,
        22.954
       ],
       [
        113.09,
        22.907
       ],
       [
        113.213,
        22.912
       ],
       [
        113.338,
        22.889
       ]
      ],
      [
       [
        112.55,
        23.124
       ],
       [
        112.563,
        23.136
       ],
       [
        112.643,
        23.165
       ],
       [
        112.736,
        23.164
       ],
       [
        112.805,
        23.148
       ]
      ]
     ]
    },
    "n": "Xi"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.55,
   21.2,
   114.55,
   23.2
  ]
 }
};
