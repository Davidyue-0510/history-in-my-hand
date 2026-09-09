// 本文件由 tools/build.py 自动生成（切片 shandong_guanzhong_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shandong_guanzhong_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shandong_guanzhong_llm"] = {
 "meta": {
  "kind": "reform",
  "region": "huabei",
  "province": "shandong",
  "title": "管仲相齐与齐桓公霸业（春秋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qi",
  "dossier_event": "event:ev_shandong_guanzhong_llm_02",
  "vocab_pack": "inline:shandong_guanzhong_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "spring_autumn",
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
    "note": "管仲相齐与齐桓公霸业（春秋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "管仲相齐与齐桓公霸业（春秋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "管仲相齐与齐桓公霸业（春秋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "管仲相齐与齐桓公霸业（春秋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=shandong_guanzhong_llm",
  "key": "shandong_guanzhong_llm",
  "scene_id": "shandong_guanzhong_llm"
 },
 "sources": [
  {
   "id": "shandong_guanzhong_src",
   "title": "国语·齐语 / 管子·轻重",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "刘向校",
   "period": "春秋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qi",
   "name": "齐",
   "type": "region",
   "modern": "今山东北部",
   "note": "齐国",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.05,
   "lat": 36.81,
   "geo_note": "今山东淄博临淄；房玄龄故里",
   "elev": 70
  },
  {
   "id": "xing",
   "name": "邢",
   "type": "region",
   "modern": "今河北邢台",
   "note": "邢国",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "wei",
   "name": "卫",
   "type": "region",
   "modern": "今河南淇县",
   "note": "卫国",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 114.18,
   "lat": 35.43,
   "geo_note": "商鞅故里，卫国公族，今河南淇县/卫辉一带",
   "elev": 72
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "管仲",
   "role": "齐相",
   "note": "辅佐齐桓公称霸",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 6
  },
  {
   "id": "SHA__p02",
   "name": "齐桓公",
   "role": "齐君",
   "note": "春秋首霸",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "person:SHA__p01",
   "predicate": "改革措施",
   "value_text": "相地衰征，民不移",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "相地而衰征，则民不移",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[alias] person:管仲 → SHA__p01 (name_match) | [auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "相地而衰征，则民不移",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "person:SHA__p01",
   "predicate": "经济政策",
   "value_text": "行盐铁、轻重之术",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "行盐铁、轻重之术",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    2,
    3
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "行盐铁、轻重之术",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p01",
   "predicate": "外交策略",
   "value_text": "尊王攘夷",
   "time": {
    "era_text": "齐桓公时",
    "start": "-681"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "尊王攘夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "[alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "尊王攘夷",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shandong_guanzhong_llm_03",
   "predicate": "存邢救卫",
   "value_text": "存邢救卫，攘夷",
   "time": {
    "era_text": "齐桓公二十六年",
    "start": "-660"
   },
   "place": "xing",
   "source": "shandong_guanzhong_src",
   "quote": "存邢救卫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "存邢救卫",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shandong_guanzhong_llm_02",
   "predicate": "会盟",
   "value_text": "九合诸侯，一匡天下",
   "time": {
    "era_text": "齐桓公五年",
    "start": "-681"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "九合诸侯，一匡天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "九合诸侯，一匡天下",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "person:SHA__p02",
   "predicate": "霸业",
   "value_text": "春秋首霸",
   "time": {
    "era_text": "齐桓公时",
    "start": "-681"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "桓公为春秋首霸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "[alias] person:齐桓公 → SHA__p02 (name_match)",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "桓公为春秋首霸",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "person:SHA__p01",
   "predicate": "辅佐之功",
   "value_text": "管仲之谋，桓公之业",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "管仲之谋，桓公之业",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "[alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "管仲之谋，桓公之业",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "person:SHA__p01",
   "predicate": "改革评价",
   "value_text": "管仲改革成效显著",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "管仲之谋",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "后世评价 | [alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "管仲之谋",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "person:SHA__p01",
   "predicate": "经济思想",
   "value_text": "轻重之术影响深远",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "轻重之术",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后世经济思想 | [alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    2,
    5
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "轻重之术",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "event:ev_shandong_guanzhong_llm_03",
   "predicate": "救卫路线",
   "value_text": "齐救卫路线未详",
   "time": {
    "era_text": "齐桓公二十六年",
    "start": "-660"
   },
   "place": "wei",
   "source": "shandong_guanzhong_src",
   "quote": "存邢救卫",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "具体行军路线缺失",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "史料未载具体路线",
    "skills": [
     "地理考证"
    ],
    "accept": "需考古或文献补充"
   },
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "存邢救卫",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "person:SHA__p02",
   "predicate": "称霸时间",
   "value_text": "称霸时间有争议",
   "time": {
    "era_text": "齐桓公五年",
    "start": "-681"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "九合诸侯",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "始霸年份存疑 | [alias] person:齐桓公 → SHA__p02 (name_match)",
   "dims": [
    6
   ],
   "lead": {
    "where": "不同史书纪年不同",
    "skills": [
     "年代学"
    ],
    "accept": "需比对多种史料"
   },
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "九合诸侯",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "person:SHA__p01",
   "predicate": "改革内容",
   "value_text": "山泽各致其时",
   "time": {
    "era_text": "齐桓公时",
    "start": "-685"
   },
   "place": "qi",
   "source": "shandong_guanzhong_src",
   "quote": "山泽各致其时",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:管仲 → SHA__p01 (name_match)",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "山泽各致其时",
   "source_text": "管仲相齐桓公，『相地而衰征，则民不移；山泽各致其时』，行盐铁、轻重之术。『尊王攘夷』，存邢救卫，『九合诸侯，一匡天下』，桓公为春秋首霸，『管仲之谋，桓公之业』。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_010",
  "SHA_011"
 ],
 "events": [
  {
   "id": "ev_shandong_guanzhong_llm_02",
   "subject": "event:ev_shandong_guanzhong_llm_02",
   "year": -681,
   "era": "齐桓公五年",
   "title": "北杏之会",
   "kind": "外交",
   "text": "齐桓公会诸侯，始霸",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shandong_guanzhong_llm_03",
   "subject": "event:ev_shandong_guanzhong_llm_03",
   "year": -660,
   "era": "齐桓公二十六年",
   "title": "存邢救卫",
   "kind": "战事",
   "text": "齐救邢卫，攘夷",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "qi",
   "to": "xing",
   "type": "military",
   "label": "救邢",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "qi",
   "to": "wei",
   "type": "military",
   "label": "救卫",
   "_source_idx": 0,
   "_source_name": "国语·齐语 / 管子·轻重",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "qi",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "xing",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "wei",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "qi",
   "name": "齐",
   "lon": 118.05,
   "lat": 36.81,
   "region": "huabei"
  },
  {
   "place_id": "wei",
   "name": "卫",
   "lon": 114.18,
   "lat": 35.43,
   "region": "huabei"
  }
 ],
 "control_years": [
  -200,
  -100
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
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.05,
        37.242
       ],
       [
        118.998,
        37.277
       ],
       [
        118.953,
        37.331
       ],
       [
        118.955,
        37.494
       ],
       [
        118.991,
        37.641
       ],
       [
        119.033,
        37.661
       ],
       [
        119.05,
        37.673
       ],
       [
        119.05,
        37.766
       ],
       [
        119.038,
        37.777
       ],
       [
        119.036,
        37.809
       ],
       [
        119.036,
        37.81
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
        113.18,
        34.43
       ],
       [
        113.18,
        37.81
       ],
       [
        119.036,
        37.81
       ],
       [
        119.036,
        37.809
       ],
       [
        119.038,
        37.777
       ],
       [
        119.05,
        37.766
       ],
       [
        119.05,
        37.673
       ],
       [
        119.033,
        37.661
       ],
       [
        118.991,
        37.641
       ],
       [
        118.955,
        37.494
       ],
       [
        118.953,
        37.331
       ],
       [
        118.998,
        37.277
       ],
       [
        119.05,
        37.242
       ],
       [
        119.05,
        34.43
       ],
       [
        113.18,
        34.43
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
         114.009,
         37.81
        ],
        [
         114.045,
         37.762
        ],
        [
         113.997,
         37.73
        ],
        [
         113.994,
         37.707
        ],
        [
         114.068,
         37.722
        ],
        [
         114.128,
         37.698
        ],
        [
         114.14,
         37.676
        ],
        [
         114.116,
         37.62
        ],
        [
         114.119,
         37.591
        ],
        [
         114.037,
         37.494
        ],
        [
         114.015,
         37.425
        ],
        [
         113.974,
         37.403
        ],
        [
         113.963,
         37.356
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
        ],
        [
         113.832,
         37.168
        ],
        [
         113.773,
         37.152
        ],
        [
         113.774,
         37.107
        ],
        [
         113.758,
         37.075
        ],
        [
         113.788,
         37.06
        ],
        [
         113.772,
         37.017
        ],
        [
         113.792,
         36.988
        ],
        [
         113.761,
         36.956
        ],
        [
         113.793,
         36.895
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.859
        ],
        [
         113.732,
         36.879
        ],
        [
         113.697,
         36.882
        ],
        [
         113.676,
         36.856
        ],
        [
         113.681,
         36.79
        ],
        [
         113.6,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.57,
         36.586
        ],
        [
         113.589,
         36.548
        ],
        [
         113.56,
         36.529
        ],
        [
         113.554,
         36.495
        ],
        [
         113.587,
         36.461
        ],
        [
         113.636,
         36.451
        ],
        [
         113.67,
         36.425
        ],
        [
         113.708,
         36.423
        ],
        [
         113.731,
         36.363
        ],
        [
         113.755,
         36.366
        ],
        [
         113.813,
         36.332
        ],
        [
         113.857,
         36.329
        ],
        [
         113.849,
         36.348
        ],
        [
         113.882,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.963,
         36.354
        ],
        [
         113.982,
         36.318
        ],
        [
         114.003,
         36.334
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.712,
         36.883
        ],
        [
         115.758,
         36.902
        ],
        [
         115.797,
         36.969
        ],
        [
         115.777,
         36.993
        ],
        [
         115.856,
         37.061
        ],
        [
         115.888,
         37.112
        ],
        [
         115.88,
         37.151
        ],
        [
         115.912,
         37.177
        ],
        [
         115.91,
         37.207
        ],
        [
         115.97,
         37.24
        ],
        [
         115.976,
         37.337
        ],
        [
         116.024,
         37.36
        ],
        [
         116.086,
         37.374
        ],
        [
         116.106,
         37.369
        ],
        [
         116.169,
         37.384
        ],
        [
         116.193,
         37.366
        ],
        [
         116.236,
         37.361
        ],
        [
         116.285,
         37.404
        ],
        [
         116.226,
         37.428
        ],
        [
         116.243,
         37.448
        ],
        [
         116.225,
         37.48
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.276,
         37.467
        ],
        [
         116.29,
         37.484
        ],
        [
         116.279,
         37.525
        ],
        [
         116.295,
         37.554
        ],
        [
         116.336,
         37.581
        ],
        [
         116.367,
         37.566
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.434,
         37.473
        ],
        [
         116.448,
         37.503
        ],
        [
         116.483,
         37.522
        ],
        [
         116.576,
         37.611
        ],
        [
         116.605,
         37.625
        ],
        [
         116.663,
         37.686
        ],
        [
         116.679,
         37.729
        ],
        [
         116.725,
         37.744
        ],
        [
         116.754,
         37.77
        ],
        [
         116.754,
         37.793
        ],
        [
         116.769,
         37.81
        ],
        [
         114.009,
         37.81
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
         113.18,
         37.81
        ],
        [
         113.18,
         35.41
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.638,
         35.87
        ],
        [
         113.654,
         35.932
        ],
        [
         113.649,
         35.994
        ],
        [
         113.679,
         35.986
        ],
        [
         113.695,
         36.027
        ],
        [
         113.66,
         36.035
        ],
        [
         113.686,
         36.056
        ],
        [
         113.671,
         36.116
        ],
        [
         113.655,
         36.125
        ],
        [
         113.713,
         36.13
        ],
        [
         113.706,
         36.149
        ],
        [
         113.651,
         36.174
        ],
        [
         113.698,
         36.182
        ],
        [
         113.682,
         36.216
        ],
        [
         113.716,
         36.262
        ],
        [
         113.712,
         36.303
        ],
        [
         113.736,
         36.325
        ],
        [
         113.731,
         36.363
        ],
        [
         113.708,
         36.423
        ],
        [
         113.67,
         36.425
        ],
        [
         113.636,
         36.451
        ],
        [
         113.587,
         36.461
        ],
        [
         113.554,
         36.495
        ],
        [
         113.56,
         36.529
        ],
        [
         113.589,
         36.548
        ],
        [
         113.57,
         36.586
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.6,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.676,
         36.856
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.879
        ],
        [
         113.732,
         36.859
        ],
        [
         113.773,
         36.855
        ],
        [
         113.793,
         36.895
        ],
        [
         113.761,
         36.956
        ],
        [
         113.792,
         36.988
        ],
        [
         113.772,
         37.017
        ],
        [
         113.788,
         37.06
        ],
        [
         113.758,
         37.075
        ],
        [
         113.774,
         37.107
        ],
        [
         113.773,
         37.152
        ],
        [
         113.832,
         37.168
        ],
        [
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.963,
         37.356
        ],
        [
         113.974,
         37.403
        ],
        [
         114.015,
         37.425
        ],
        [
         114.037,
         37.494
        ],
        [
         114.119,
         37.591
        ],
        [
         114.116,
         37.62
        ],
        [
         114.14,
         37.676
        ],
        [
         114.128,
         37.698
        ],
        [
         114.068,
         37.722
        ],
        [
         113.994,
         37.707
        ],
        [
         113.997,
         37.73
        ],
        [
         114.045,
         37.762
        ],
        [
         114.009,
         37.81
        ],
        [
         113.18,
         37.81
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
         117.312,
         34.562
        ],
        [
         117.273,
         34.557
        ],
        [
         117.304,
         34.542
        ],
        [
         117.268,
         34.533
        ],
        [
         117.273,
         34.5
        ],
        [
         117.253,
         34.487
        ],
        [
         117.248,
         34.451
        ],
        [
         117.166,
         34.434
        ],
        [
         117.139,
         34.527
        ],
        [
         117.152,
         34.559
        ],
        [
         117.104,
         34.649
        ],
        [
         117.073,
         34.639
        ],
        [
         117.062,
         34.676
        ],
        [
         117.07,
         34.714
        ],
        [
         117.022,
         34.759
        ],
        [
         116.969,
         34.772
        ],
        [
         116.951,
         34.811
        ],
        [
         116.979,
         34.815
        ],
        [
         116.966,
         34.845
        ],
        [
         116.929,
         34.843
        ],
        [
         116.922,
         34.895
        ],
        [
         116.858,
         34.929
        ],
        [
         116.822,
         34.93
        ],
        [
         116.816,
         34.965
        ],
        [
         116.789,
         34.975
        ],
        [
         116.781,
         34.917
        ],
        [
         116.678,
         34.939
        ],
        [
         116.622,
         34.94
        ],
        [
         116.614,
         34.923
        ],
        [
         116.558,
         34.909
        ],
        [
         116.445,
         34.896
        ],
        [
         116.408,
         34.851
        ],
        [
         116.403,
         34.756
        ],
        [
         116.369,
         34.749
        ],
        [
         116.364,
         34.715
        ],
        [
         116.392,
         34.71
        ],
        [
         116.374,
         34.64
        ],
        [
         116.43,
         34.651
        ],
        [
         116.433,
         34.63
        ],
        [
         116.477,
         34.615
        ],
        [
         116.491,
         34.574
        ],
        [
         116.594,
         34.512
        ],
        [
         116.592,
         34.494
        ],
        [
         116.662,
         34.473
        ],
        [
         116.723,
         34.472
        ],
        [
         116.774,
         34.454
        ],
        [
         116.783,
         34.43
        ],
        [
         119.05,
         34.43
        ],
        [
         119.05,
         35.055
        ],
        [
         119.027,
         35.056
        ],
        [
         118.943,
         35.041
        ],
        [
         118.928,
         35.051
        ],
        [
         118.863,
         35.026
        ],
        [
         118.861,
         34.944
        ],
        [
         118.805,
         34.873
        ],
        [
         118.8,
         34.843
        ],
        [
         118.772,
         34.794
        ],
        [
         118.739,
         34.793
        ],
        [
         118.719,
         34.745
        ],
        [
         118.764,
         34.74
        ],
        [
         118.784,
         34.723
        ],
        [
         118.739,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.664,
         34.694
        ],
        [
         118.608,
         34.694
        ],
        [
         118.601,
         34.714
        ],
        [
         118.546,
         34.706
        ],
        [
         118.461,
         34.656
        ],
        [
         118.474,
         34.623
        ],
        [
         118.439,
         34.626
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.508
        ],
        [
         118.416,
         34.474
        ],
        [
         118.406,
         34.43
        ],
        [
         118.178,
         34.43
        ],
        [
         118.178,
         34.453
        ],
        [
         118.133,
         34.483
        ],
        [
         118.165,
         34.505
        ],
        [
         118.185,
         34.544
        ],
        [
         118.079,
         34.57
        ],
        [
         118.115,
         34.614
        ],
        [
         118.084,
         34.656
        ],
        [
         118.054,
         34.651
        ],
        [
         117.952,
         34.678
        ],
        [
         117.91,
         34.671
        ],
        [
         117.903,
         34.644
        ],
        [
         117.794,
         34.652
        ],
        [
         117.791,
         34.583
        ],
        [
         117.802,
         34.519
        ],
        [
         117.684,
         34.547
        ],
        [
         117.659,
         34.501
        ],
        [
         117.61,
         34.491
        ],
        [
         117.593,
         34.463
        ],
        [
         117.538,
         34.467
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.551
        ],
        [
         117.403,
         34.57
        ],
        [
         117.371,
         34.585
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
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
         116.783,
         34.43
        ],
        [
         116.774,
         34.454
        ],
        [
         116.723,
         34.472
        ],
        [
         116.662,
         34.473
        ],
        [
         116.592,
         34.494
        ],
        [
         116.594,
         34.512
        ],
        [
         116.491,
         34.574
        ],
        [
         116.477,
         34.615
        ],
        [
         116.433,
         34.63
        ],
        [
         116.43,
         34.651
        ],
        [
         116.374,
         34.64
        ],
        [
         116.334,
         34.621
        ],
        [
         116.325,
         34.601
        ],
        [
         116.286,
         34.609
        ],
        [
         116.248,
         34.552
        ],
        [
         116.197,
         34.576
        ],
        [
         116.191,
         34.536
        ],
        [
         116.204,
         34.508
        ],
        [
         116.178,
         34.496
        ],
        [
         116.162,
         34.46
        ],
        [
         116.179,
         34.43
        ],
        [
         116.18,
         34.43
        ],
        [
         116.783,
         34.43
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
         116.374,
         34.64
        ],
        [
         116.392,
         34.71
        ],
        [
         116.364,
         34.715
        ],
        [
         116.369,
         34.749
        ],
        [
         116.403,
         34.756
        ],
        [
         116.408,
         34.851
        ],
        [
         116.445,
         34.896
        ],
        [
         116.558,
         34.909
        ],
        [
         116.614,
         34.923
        ],
        [
         116.622,
         34.94
        ],
        [
         116.678,
         34.939
        ],
        [
         116.781,
         34.917
        ],
        [
         116.789,
         34.975
        ],
        [
         116.816,
         34.965
        ],
        [
         116.822,
         34.93
        ],
        [
         116.858,
         34.929
        ],
        [
         116.922,
         34.895
        ],
        [
         116.929,
         34.843
        ],
        [
         116.966,
         34.845
        ],
        [
         116.979,
         34.815
        ],
        [
         116.951,
         34.811
        ],
        [
         116.969,
         34.772
        ],
        [
         117.022,
         34.759
        ],
        [
         117.07,
         34.714
        ],
        [
         117.062,
         34.676
        ],
        [
         117.073,
         34.639
        ],
        [
         117.104,
         34.649
        ],
        [
         117.152,
         34.559
        ],
        [
         117.139,
         34.527
        ],
        [
         117.166,
         34.434
        ],
        [
         117.248,
         34.451
        ],
        [
         117.253,
         34.487
        ],
        [
         117.273,
         34.5
        ],
        [
         117.268,
         34.533
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.557
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.371,
         34.585
        ],
        [
         117.403,
         34.57
        ],
        [
         117.403,
         34.551
        ],
        [
         117.465,
         34.485
        ],
        [
         117.538,
         34.467
        ],
        [
         117.593,
         34.463
        ],
        [
         117.61,
         34.491
        ],
        [
         117.659,
         34.501
        ],
        [
         117.684,
         34.547
        ],
        [
         117.802,
         34.519
        ],
        [
         117.791,
         34.583
        ],
        [
         117.794,
         34.652
        ],
        [
         117.903,
         34.644
        ],
        [
         117.91,
         34.671
        ],
        [
         117.952,
         34.678
        ],
        [
         118.054,
         34.651
        ],
        [
         118.084,
         34.656
        ],
        [
         118.115,
         34.614
        ],
        [
         118.079,
         34.57
        ],
        [
         118.185,
         34.544
        ],
        [
         118.165,
         34.505
        ],
        [
         118.133,
         34.483
        ],
        [
         118.178,
         34.453
        ],
        [
         118.178,
         34.43
        ],
        [
         118.406,
         34.43
        ],
        [
         118.416,
         34.474
        ],
        [
         118.439,
         34.508
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.626
        ],
        [
         118.474,
         34.623
        ],
        [
         118.461,
         34.656
        ],
        [
         118.546,
         34.706
        ],
        [
         118.601,
         34.714
        ],
        [
         118.608,
         34.694
        ],
        [
         118.664,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.739,
         34.694
        ],
        [
         118.784,
         34.723
        ],
        [
         118.764,
         34.74
        ],
        [
         118.719,
         34.745
        ],
        [
         118.739,
         34.793
        ],
        [
         118.772,
         34.794
        ],
        [
         118.8,
         34.843
        ],
        [
         118.805,
         34.873
        ],
        [
         118.861,
         34.944
        ],
        [
         118.863,
         35.026
        ],
        [
         118.928,
         35.051
        ],
        [
         118.943,
         35.041
        ],
        [
         119.027,
         35.056
        ],
        [
         119.05,
         35.055
        ],
        [
         119.05,
         37.269
        ],
        [
         119.04,
         37.304
        ],
        [
         119.001,
         37.319
        ],
        [
         118.943,
         37.497
        ],
        [
         118.94,
         37.527
        ],
        [
         118.989,
         37.621
        ],
        [
         119.024,
         37.642
        ],
        [
         119.05,
         37.645
        ],
        [
         119.05,
         37.81
        ],
        [
         116.769,
         37.81
        ],
        [
         116.754,
         37.793
        ],
        [
         116.754,
         37.77
        ],
        [
         116.725,
         37.744
        ],
        [
         116.679,
         37.729
        ],
        [
         116.663,
         37.686
        ],
        [
         116.605,
         37.625
        ],
        [
         116.576,
         37.611
        ],
        [
         116.483,
         37.522
        ],
        [
         116.448,
         37.503
        ],
        [
         116.434,
         37.473
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.367,
         37.566
        ],
        [
         116.336,
         37.581
        ],
        [
         116.295,
         37.554
        ],
        [
         116.279,
         37.525
        ],
        [
         116.29,
         37.484
        ],
        [
         116.276,
         37.467
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.225,
         37.48
        ],
        [
         116.243,
         37.448
        ],
        [
         116.226,
         37.428
        ],
        [
         116.285,
         37.404
        ],
        [
         116.236,
         37.361
        ],
        [
         116.193,
         37.366
        ],
        [
         116.169,
         37.384
        ],
        [
         116.106,
         37.369
        ],
        [
         116.086,
         37.374
        ],
        [
         116.024,
         37.36
        ],
        [
         115.976,
         37.337
        ],
        [
         115.97,
         37.24
        ],
        [
         115.91,
         37.207
        ],
        [
         115.912,
         37.177
        ],
        [
         115.88,
         37.151
        ],
        [
         115.888,
         37.112
        ],
        [
         115.856,
         37.061
        ],
        [
         115.777,
         36.993
        ],
        [
         115.797,
         36.969
        ],
        [
         115.758,
         36.902
        ],
        [
         115.712,
         36.883
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.335,
         35.797
        ],
        [
         115.363,
         35.78
        ],
        [
         115.408,
         35.809
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.495,
         35.896
        ],
        [
         115.505,
         35.899
        ],
        [
         115.513,
         35.89
        ],
        [
         115.584,
         35.922
        ],
        [
         115.649,
         35.923
        ],
        [
         115.699,
         35.966
        ],
        [
         115.775,
         35.975
        ],
        [
         115.78,
         35.994
        ],
        [
         115.817,
         36.013
        ],
        [
         115.86,
         36.004
        ],
        [
         115.899,
         36.027
        ],
        [
         115.99,
         36.045
        ],
        [
         116.058,
         36.105
        ],
        [
         116.099,
         36.112
        ],
        [
         116.063,
         36.029
        ],
        [
         116.049,
         35.97
        ],
        [
         115.985,
         35.974
        ],
        [
         115.912,
         35.96
        ],
        [
         115.908,
         35.927
        ],
        [
         115.873,
         35.919
        ],
        [
         115.883,
         35.88
        ],
        [
         115.86,
         35.858
        ],
        [
         115.817,
         35.844
        ],
        [
         115.774,
         35.854
        ],
        [
         115.735,
         35.833
        ],
        [
         115.696,
         35.789
        ],
        [
         115.694,
         35.754
        ],
        [
         115.623,
         35.739
        ],
        [
         115.529,
         35.734
        ],
        [
         115.486,
         35.71
        ],
        [
         115.383,
         35.569
        ],
        [
         115.345,
         35.554
        ],
        [
         115.356,
         35.49
        ],
        [
         115.307,
         35.48
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.317,
         34.859
        ],
        [
         115.427,
         34.805
        ],
        [
         115.449,
         34.744
        ],
        [
         115.434,
         34.725
        ],
        [
         115.461,
         34.637
        ],
        [
         115.516,
         34.582
        ],
        [
         115.553,
         34.569
        ],
        [
         115.623,
         34.574
        ],
        [
         115.686,
         34.556
        ],
        [
         115.697,
         34.594
        ],
        [
         115.788,
         34.581
        ],
        [
         115.827,
         34.558
        ],
        [
         115.838,
         34.568
        ],
        [
         115.984,
         34.589
        ],
        [
         115.991,
         34.615
        ],
        [
         116.037,
         34.593
        ],
        [
         116.101,
         34.606
        ],
        [
         116.135,
         34.56
        ],
        [
         116.157,
         34.554
        ],
        [
         116.197,
         34.576
        ],
        [
         116.248,
         34.552
        ],
        [
         116.286,
         34.609
        ],
        [
         116.325,
         34.601
        ],
        [
         116.334,
         34.621
        ],
        [
         116.374,
         34.64
        ]
       ]
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.488,
         35.881
        ],
        [
         115.513,
         35.89
        ],
        [
         115.505,
         35.899
        ],
        [
         115.495,
         35.896
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         113.18,
         34.43
        ],
        [
         116.18,
         34.43
        ],
        [
         116.179,
         34.43
        ],
        [
         116.162,
         34.46
        ],
        [
         116.178,
         34.496
        ],
        [
         116.204,
         34.508
        ],
        [
         116.191,
         34.536
        ],
        [
         116.197,
         34.576
        ],
        [
         116.157,
         34.554
        ],
        [
         116.135,
         34.56
        ],
        [
         116.101,
         34.606
        ],
        [
         116.037,
         34.593
        ],
        [
         115.991,
         34.615
        ],
        [
         115.984,
         34.589
        ],
        [
         115.838,
         34.568
        ],
        [
         115.827,
         34.558
        ],
        [
         115.788,
         34.581
        ],
        [
         115.697,
         34.594
        ],
        [
         115.686,
         34.556
        ],
        [
         115.623,
         34.574
        ],
        [
         115.553,
         34.569
        ],
        [
         115.516,
         34.582
        ],
        [
         115.461,
         34.637
        ],
        [
         115.434,
         34.725
        ],
        [
         115.449,
         34.744
        ],
        [
         115.427,
         34.805
        ],
        [
         115.317,
         34.859
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.307,
         35.48
        ],
        [
         115.356,
         35.49
        ],
        [
         115.345,
         35.554
        ],
        [
         115.383,
         35.569
        ],
        [
         115.486,
         35.71
        ],
        [
         115.529,
         35.734
        ],
        [
         115.623,
         35.739
        ],
        [
         115.694,
         35.754
        ],
        [
         115.696,
         35.789
        ],
        [
         115.735,
         35.833
        ],
        [
         115.774,
         35.854
        ],
        [
         115.817,
         35.844
        ],
        [
         115.86,
         35.858
        ],
        [
         115.883,
         35.88
        ],
        [
         115.873,
         35.919
        ],
        [
         115.908,
         35.927
        ],
        [
         115.912,
         35.96
        ],
        [
         115.985,
         35.974
        ],
        [
         116.049,
         35.97
        ],
        [
         116.063,
         36.029
        ],
        [
         116.099,
         36.112
        ],
        [
         116.058,
         36.105
        ],
        [
         115.99,
         36.045
        ],
        [
         115.899,
         36.027
        ],
        [
         115.86,
         36.004
        ],
        [
         115.817,
         36.013
        ],
        [
         115.78,
         35.994
        ],
        [
         115.775,
         35.975
        ],
        [
         115.699,
         35.966
        ],
        [
         115.649,
         35.923
        ],
        [
         115.584,
         35.922
        ],
        [
         115.513,
         35.89
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.408,
         35.809
        ],
        [
         115.363,
         35.78
        ],
        [
         115.335,
         35.797
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.003,
         36.334
        ],
        [
         113.982,
         36.318
        ],
        [
         113.963,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.882,
         36.354
        ],
        [
         113.849,
         36.348
        ],
        [
         113.857,
         36.329
        ],
        [
         113.813,
         36.332
        ],
        [
         113.755,
         36.366
        ],
        [
         113.731,
         36.363
        ],
        [
         113.736,
         36.325
        ],
        [
         113.712,
         36.303
        ],
        [
         113.716,
         36.262
        ],
        [
         113.682,
         36.216
        ],
        [
         113.698,
         36.182
        ],
        [
         113.651,
         36.174
        ],
        [
         113.706,
         36.149
        ],
        [
         113.713,
         36.13
        ],
        [
         113.655,
         36.125
        ],
        [
         113.671,
         36.116
        ],
        [
         113.686,
         36.056
        ],
        [
         113.66,
         36.035
        ],
        [
         113.695,
         36.027
        ],
        [
         113.679,
         35.986
        ],
        [
         113.649,
         35.994
        ],
        [
         113.654,
         35.932
        ],
        [
         113.638,
         35.87
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.18,
         35.41
        ],
        [
         113.18,
         34.43
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.18,
        34.887
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.34,
       35.503
      ],
      [
       115.341,
       35.538
      ],
      [
       115.382,
       35.597
      ],
      [
       115.463,
       35.681
      ],
      [
       115.596,
       35.758
      ],
      [
       115.781,
       35.83
      ],
      [
       115.871,
       35.88
      ],
      [
       115.866,
       35.91
      ],
      [
       115.883,
       35.939
      ],
      [
       115.924,
       35.966
      ],
      [
       115.966,
       35.976
      ],
      [
       116.036,
       36.071
      ],
      [
       116.078,
       36.11
      ],
      [
       116.116,
       36.143
      ],
      [
       116.227,
       36.201
      ],
      [
       116.451,
       36.339
      ],
      [
       116.581,
       36.44
      ],
      [
       116.593,
       36.49
      ],
      [
       116.644,
       36.561
      ],
      [
       116.735,
       36.656
      ],
      [
       116.862,
       36.726
      ],
      [
       117.024,
       36.773
      ],
      [
       117.151,
       36.862
      ],
      [
       117.24,
       36.994
      ],
      [
       117.352,
       37.082
      ],
      [
       117.485,
       37.127
      ],
      [
       117.571,
       37.175
      ],
      [
       117.608,
       37.228
      ],
      [
       117.693,
       37.256
      ],
      [
       117.825,
       37.26
      ],
      [
       117.97,
       37.29
      ],
      [
       118.128,
       37.347
      ],
      [
       118.238,
       37.431
      ],
      [
       118.298,
       37.541
      ],
      [
       118.385,
       37.604
      ],
      [
       118.498,
       37.619
      ],
      [
       118.645,
       37.678
      ],
      [
       118.826,
       37.78
      ],
      [
       118.909,
       37.81
      ],
      [
       119.03,
       37.81
      ],
      [
       119.036,
       37.809
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.326,
        34.587
       ],
       [
        117.295,
        34.549
       ],
       [
        117.25,
        34.502
       ],
       [
        117.21,
        34.498
       ],
       [
        117.174,
        34.543
       ],
       [
        117.141,
        34.612
       ],
       [
        117.128,
        34.663
       ],
       [
        117.139,
        34.725
       ],
       [
        117.179,
        34.719
       ],
       [
        117.266,
        34.665
       ],
       [
        117.318,
        34.621
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   113.18,
   34.43,
   119.05,
   37.81
  ]
 }
};
