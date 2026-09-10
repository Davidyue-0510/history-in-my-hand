// 本文件由 tools/build.py 自动生成（切片 jiangsu_jihu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangsu_jihu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangsu_jihu_llm"] = {
 "meta": {
  "kind": "social",
  "region": "jiangnan",
  "province": "jiangsu",
  "title": "江南机户出资与织工社会（明清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "suzhou",
  "dossier_event": "event:ev_jiangsu_jihu_llm_01",
  "vocab_pack": "inline:jiangsu_jihu_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming_qing",
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
    "note": "江南机户出资与织工社会（明清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "江南机户出资与织工社会（明清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "江南机户出资与织工社会（明清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "江南机户出资与织工社会（明清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   4,
   6
  ],
  "page": "county.html?scene=jiangsu_jihu_llm",
  "key": "jiangsu_jihu_llm",
  "scene_id": "jiangsu_jihu_llm"
 },
 "sources": [
  {
   "id": "jiangsu_jihu_src",
   "title": "苏州府志·风俗 / 织工对（蒋以化）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "苏州府志局",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "suzhou",
   "name": "苏州",
   "type": "city",
   "modern": "今中国江苏省苏州市",
   "note": "郡城之东皆习机业。坐标据地名志条目：苏州，标 approx。",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.585,
   "lat": 31.299,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：苏州（诚实回填 v0.221）。",
   "elev": 6
  },
  {
   "id": "changmen",
   "name": "阊门",
   "type": "city",
   "modern": "今苏州阊门",
   "note": "机户出资之地",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "xuanmiaoguan",
   "name": "玄妙观",
   "type": "fortress",
   "modern": "今苏州玄妙观",
   "note": "织工聚集罢工之处",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "机户",
   "role": "雇主",
   "note": "出资开设机房者",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "JIA__p02",
   "name": "机工",
   "role": "织工",
   "note": "受雇于机户，计日受值",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "place:suzhou",
   "predicate": "产业分布",
   "value_text": "郡城之东皆习机业",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "suzhou",
   "source": "jiangsu_jihu_src",
   "quote": "郡城之东，皆习机业",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郡城之东，皆习机业",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "place:changmen",
   "predicate": "生产关系",
   "value_text": "机户出资，机工出力",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "changmen",
   "source": "jiangsu_jihu_src",
   "quote": "机户出资、机工出力",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "机户出资、机工出力",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "person:JIA__p02",
   "predicate": "雇佣方式",
   "value_text": "计日受值",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "changmen",
   "source": "jiangsu_jihu_src",
   "quote": "计日受值",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:机工 → JIA__p02 (name_match)",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "计日受值",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "罢工行动",
   "value_text": "织工聚玄妙观前齐行叫歇",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "xuanmiaoguan",
   "source": "jiangsu_jihu_src",
   "quote": "织工聚玄妙观前齐行叫歇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "织工聚玄妙观前齐行叫歇",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "参与规模",
   "value_text": "千百为群",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "xuanmiaoguan",
   "source": "jiangsu_jihu_src",
   "quote": "千百为群",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "千百为群",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "诉求",
   "value_text": "索增工价",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "xuanmiaoguan",
   "source": "jiangsu_jihu_src",
   "quote": "索增工价",
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
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "索增工价",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "历史意义",
   "value_text": "开近代工运先声",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "suzhou",
   "source": "jiangsu_jihu_src",
   "quote": "实开近代工运之先声",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "实开近代工运之先声",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "place:suzhou",
   "predicate": "社会结构",
   "value_text": "劳资对立显现",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "suzhou",
   "source": "jiangsu_jihu_src",
   "quote": "劳资之争",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "劳资之争",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "person:JIA__p02",
   "predicate": "组织化程度",
   "value_text": "齐行叫歇显示组织",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "xuanmiaoguan",
   "source": "jiangsu_jihu_src",
   "quote": "齐行叫歇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "[alias] person:机工 → JIA__p02 (name_match)",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "齐行叫歇",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "person:JIA__p01",
   "predicate": "经营方式",
   "value_text": "雇募织工",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "changmen",
   "source": "jiangsu_jihu_src",
   "quote": "机户雇募织工",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:机户 → JIA__p01 (name_match)",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "机户雇募织工",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "罢工结果",
   "value_text": "结果未详",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "suzhou",
   "source": "jiangsu_jihu_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "lead": {
    "where": "苏州府志或明实录",
    "skills": [
     "史料检索",
     "考据"
    ],
    "accept": "罢工是否达成增价"
   },
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "place:suzhou",
   "predicate": "经济地位",
   "value_text": "江南市镇经济发达",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "suzhou",
   "source": "jiangsu_jihu_src",
   "quote": "江南市镇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "江南市镇",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_013",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "predicate": "罢工地点",
   "value_text": "玄妙观前",
   "time": {
    "era_text": "明万历二十九年",
    "start": "1601-01-01",
    "end": "1601-12-31",
    "gregorian_year": 1601
   },
   "place": "xuanmiaoguan",
   "source": "jiangsu_jihu_src",
   "quote": "玄妙观前",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "玄妙观前",
   "source_text": "『郡城之东，皆习机业』，苏州阊门内外机户出资、机工出力，『机户雇募织工，计日受值』。明万历二十九年（一六零一）织工聚玄妙观前『齐行叫歇』（罢工），『千百为群，索增工价』。江南市镇雇工社会与劳资之争，实开近代工运之先声。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIA_011"
 ],
 "events": [
  {
   "id": "ev_jiangsu_jihu_llm_01",
   "subject": "event:ev_jiangsu_jihu_llm_01",
   "year": 1601,
   "era": "明万历二十九年",
   "title": "苏州织工罢工",
   "kind": "其他",
   "text": "织工聚玄妙观前齐行叫歇",
   "_source_idx": 0,
   "_source_name": "苏州府志·风俗 / 织工对（蒋以化）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "suzhou",
   "party": "后世官修",
   "start": 1561,
   "end": 1641,
   "timeline": "main"
  },
  {
   "place_id": "changmen",
   "party": "后世官修",
   "start": 1561,
   "end": 1641,
   "timeline": "main"
  },
  {
   "place_id": "xuanmiaoguan",
   "party": "后世官修",
   "start": 1561,
   "end": 1641,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "suzhou",
   "name": "苏州",
   "lon": 120.585,
   "lat": 31.299,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1561,
  1641
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
       121.577,
       31.637
      ],
      [
       121.542,
       31.674
      ],
      [
       121.492,
       31.694
      ],
      [
       121.464,
       31.756
      ],
      [
       121.339,
       31.797
      ],
      [
       121.211,
       31.805
      ],
      [
       121.227,
       31.758
      ],
      [
       121.336,
       31.644
      ],
      [
       121.52,
       31.55
      ],
      [
       121.585,
       31.528
      ],
      [
       121.585,
       31.634
      ],
      [
       121.577,
       31.637
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
        121.277,
        30.299
       ],
       [
        121.258,
        30.304
       ],
       [
        121.159,
        30.302
       ],
       [
        121.154,
        30.299
       ],
       [
        120.498,
        30.299
       ],
       [
        120.495,
        30.303
       ],
       [
        120.484,
        30.299
       ],
       [
        120.276,
        30.299
       ],
       [
        120.45,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.31,
        30.7
       ],
       [
        121.419,
        30.79
       ],
       [
        121.528,
        30.841
       ],
       [
        121.585,
        30.85
       ],
       [
        121.585,
        31.36
       ],
       [
        121.351,
        31.485
       ],
       [
        121.205,
        31.628
       ],
       [
        121.055,
        31.719
       ],
       [
        120.938,
        31.75
       ],
       [
        120.788,
        31.82
       ],
       [
        120.752,
        31.923
       ],
       [
        120.716,
        31.984
       ],
       [
        120.497,
        32.02
       ],
       [
        120.347,
        31.952
       ],
       [
        120.192,
        31.906
       ],
       [
        120.036,
        31.936
       ],
       [
        120.074,
        31.96
       ],
       [
        120.099,
        31.976
       ],
       [
        120.184,
        31.966
       ],
       [
        120.52,
        32.106
       ],
       [
        120.661,
        32.081
       ],
       [
        120.792,
        32.032
       ],
       [
        120.974,
        31.869
       ],
       [
        121.146,
        31.842
       ],
       [
        121.266,
        31.863
       ],
       [
        121.352,
        31.859
       ],
       [
        121.585,
        31.755
       ],
       [
        121.585,
        32.085
       ],
       [
        121.491,
        32.121
       ],
       [
        121.451,
        32.153
       ],
       [
        121.404,
        32.206
       ],
       [
        121.402,
        32.299
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
        121.585,
        31.528
       ],
       [
        121.52,
        31.55
       ],
       [
        121.336,
        31.644
       ],
       [
        121.227,
        31.758
       ],
       [
        121.211,
        31.805
       ],
       [
        121.339,
        31.797
       ],
       [
        121.464,
        31.756
       ],
       [
        121.492,
        31.694
       ],
       [
        121.542,
        31.674
       ],
       [
        121.577,
        31.637
       ],
       [
        121.585,
        31.634
       ],
       [
        121.585,
        31.528
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
        119.585,
        30.299
       ],
       [
        119.585,
        32.299
       ],
       [
        121.402,
        32.299
       ],
       [
        121.404,
        32.206
       ],
       [
        121.451,
        32.153
       ],
       [
        121.491,
        32.121
       ],
       [
        121.585,
        32.085
       ],
       [
        121.585,
        31.755
       ],
       [
        121.352,
        31.859
       ],
       [
        121.266,
        31.863
       ],
       [
        121.146,
        31.842
       ],
       [
        120.974,
        31.869
       ],
       [
        120.792,
        32.032
       ],
       [
        120.661,
        32.081
       ],
       [
        120.52,
        32.106
       ],
       [
        120.184,
        31.966
       ],
       [
        120.099,
        31.976
       ],
       [
        120.074,
        31.96
       ],
       [
        120.036,
        31.936
       ],
       [
        120.192,
        31.906
       ],
       [
        120.347,
        31.952
       ],
       [
        120.497,
        32.02
       ],
       [
        120.716,
        31.984
       ],
       [
        120.752,
        31.923
       ],
       [
        120.788,
        31.82
       ],
       [
        120.938,
        31.75
       ],
       [
        121.055,
        31.719
       ],
       [
        121.205,
        31.628
       ],
       [
        121.351,
        31.485
       ],
       [
        121.585,
        31.36
       ],
       [
        121.585,
        30.85
       ],
       [
        121.528,
        30.841
       ],
       [
        121.419,
        30.79
       ],
       [
        121.31,
        30.7
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.45,
        30.388
       ],
       [
        120.276,
        30.299
       ],
       [
        120.484,
        30.299
       ],
       [
        120.495,
        30.303
       ],
       [
        120.498,
        30.299
       ],
       [
        121.154,
        30.299
       ],
       [
        121.159,
        30.302
       ],
       [
        121.258,
        30.304
       ],
       [
        121.277,
        30.299
       ],
       [
        119.585,
        30.299
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
         120.901,
         31.017
        ],
        [
         120.94,
         31.01
        ],
        [
         120.949,
         31.03
        ],
        [
         120.989,
         31.014
        ],
        [
         121.001,
         30.938
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.175,
         30.772
        ],
        [
         121.217,
         30.786
        ],
        [
         121.232,
         30.756
        ],
        [
         121.272,
         30.724
        ],
        [
         121.275,
         30.677
        ],
        [
         121.362,
         30.68
        ],
        [
         121.426,
         30.73
        ],
        [
         121.517,
         30.775
        ],
        [
         121.585,
         30.8
        ],
        [
         121.585,
         31.378
        ],
        [
         121.521,
         31.395
        ],
        [
         121.405,
         31.479
        ],
        [
         121.344,
         31.512
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.248,
         31.477
        ],
        [
         121.242,
         31.493
        ],
        [
         121.175,
         31.449
        ],
        [
         121.143,
         31.392
        ],
        [
         121.114,
         31.375
        ],
        [
         121.13,
         31.344
        ],
        [
         121.143,
         31.275
        ],
        [
         121.09,
         31.292
        ],
        [
         121.06,
         31.245
        ],
        [
         121.077,
         31.158
        ],
        [
         121.018,
         31.134
        ],
        [
         120.93,
         31.141
        ],
        [
         120.881,
         31.135
        ],
        [
         120.859,
         31.1
        ],
        [
         120.891,
         31.094
        ],
        [
         120.901,
         31.017
        ]
       ]
      ],
      [
       [
        [
         121.585,
         31.71
        ],
        [
         121.499,
         31.753
        ],
        [
         121.432,
         31.769
        ],
        [
         121.385,
         31.833
        ],
        [
         121.323,
         31.868
        ],
        [
         121.265,
         31.864
        ],
        [
         121.2,
         31.835
        ],
        [
         121.119,
         31.759
        ],
        [
         121.145,
         31.754
        ],
        [
         121.289,
         31.617
        ],
        [
         121.372,
         31.553
        ],
        [
         121.395,
         31.585
        ],
        [
         121.434,
         31.591
        ],
        [
         121.547,
         31.531
        ],
        [
         121.585,
         31.517
        ],
        [
         121.585,
         31.71
        ]
       ]
      ],
      [
       [
        [
         121.585,
         31.456
        ],
        [
         121.567,
         31.483
        ],
        [
         121.521,
         31.494
        ],
        [
         121.51,
         31.482
        ],
        [
         121.572,
         31.436
        ],
        [
         121.585,
         31.429
        ],
        [
         121.585,
         31.456
        ]
       ]
      ],
      [
       [
        [
         121.585,
         31.477
        ],
        [
         121.579,
         31.48
        ],
        [
         121.585,
         31.476
        ],
        [
         121.585,
         31.477
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.585,
         32.299
        ],
        [
         119.585,
         31.12
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.81,
         31.149
        ],
        [
         119.827,
         31.174
        ],
        [
         119.878,
         31.161
        ],
        [
         119.921,
         31.17
        ],
        [
         119.946,
         31.106
        ],
        [
         119.989,
         31.059
        ],
        [
         120.001,
         31.027
        ],
        [
         120.053,
         31.006
        ],
        [
         120.111,
         30.956
        ],
        [
         120.15,
         30.937
        ],
        [
         120.224,
         30.927
        ],
        [
         120.316,
         30.934
        ],
        [
         120.371,
         30.949
        ],
        [
         120.358,
         30.887
        ],
        [
         120.423,
         30.903
        ],
        [
         120.435,
         30.921
        ],
        [
         120.442,
         30.861
        ],
        [
         120.46,
         30.84
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.709,
         30.933
        ],
        [
         120.685,
         30.955
        ],
        [
         120.698,
         30.971
        ],
        [
         120.746,
         30.962
        ],
        [
         120.77,
         30.997
        ],
        [
         120.821,
         31.007
        ],
        [
         120.866,
         30.99
        ],
        [
         120.901,
         31.017
        ],
        [
         120.891,
         31.094
        ],
        [
         120.859,
         31.1
        ],
        [
         120.881,
         31.135
        ],
        [
         120.93,
         31.141
        ],
        [
         121.018,
         31.134
        ],
        [
         121.077,
         31.158
        ],
        [
         121.06,
         31.245
        ],
        [
         121.09,
         31.292
        ],
        [
         121.143,
         31.275
        ],
        [
         121.13,
         31.344
        ],
        [
         121.114,
         31.375
        ],
        [
         121.143,
         31.392
        ],
        [
         121.175,
         31.449
        ],
        [
         121.242,
         31.493
        ],
        [
         121.248,
         31.477
        ],
        [
         121.301,
         31.499
        ],
        [
         121.301,
         31.499
        ],
        [
         121.344,
         31.512
        ],
        [
         121.372,
         31.553
        ],
        [
         121.289,
         31.617
        ],
        [
         121.145,
         31.754
        ],
        [
         121.119,
         31.759
        ],
        [
         121.2,
         31.835
        ],
        [
         121.265,
         31.864
        ],
        [
         121.323,
         31.868
        ],
        [
         121.385,
         31.833
        ],
        [
         121.432,
         31.769
        ],
        [
         121.499,
         31.753
        ],
        [
         121.585,
         31.71
        ],
        [
         121.585,
         32.117
        ],
        [
         121.525,
         32.136
        ],
        [
         121.543,
         32.152
        ],
        [
         121.459,
         32.177
        ],
        [
         121.499,
         32.211
        ],
        [
         121.494,
         32.264
        ],
        [
         121.45,
         32.282
        ],
        [
         121.447,
         32.299
        ],
        [
         119.585,
         32.299
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
         119.585,
         30.299
        ],
        [
         121.446,
         30.299
        ],
        [
         121.395,
         30.338
        ],
        [
         121.372,
         30.371
        ],
        [
         121.328,
         30.397
        ],
        [
         121.225,
         30.405
        ],
        [
         121.183,
         30.434
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.189,
         30.633
        ],
        [
         121.239,
         30.649
        ],
        [
         121.275,
         30.677
        ],
        [
         121.272,
         30.724
        ],
        [
         121.232,
         30.756
        ],
        [
         121.217,
         30.786
        ],
        [
         121.175,
         30.772
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         121.001,
         30.938
        ],
        [
         120.989,
         31.014
        ],
        [
         120.949,
         31.03
        ],
        [
         120.94,
         31.01
        ],
        [
         120.901,
         31.017
        ],
        [
         120.866,
         30.99
        ],
        [
         120.821,
         31.007
        ],
        [
         120.77,
         30.997
        ],
        [
         120.746,
         30.962
        ],
        [
         120.698,
         30.971
        ],
        [
         120.685,
         30.955
        ],
        [
         120.709,
         30.933
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.46,
         30.84
        ],
        [
         120.442,
         30.861
        ],
        [
         120.435,
         30.921
        ],
        [
         120.423,
         30.903
        ],
        [
         120.358,
         30.887
        ],
        [
         120.371,
         30.949
        ],
        [
         120.316,
         30.934
        ],
        [
         120.224,
         30.927
        ],
        [
         120.15,
         30.937
        ],
        [
         120.111,
         30.956
        ],
        [
         120.053,
         31.006
        ],
        [
         120.001,
         31.027
        ],
        [
         119.989,
         31.059
        ],
        [
         119.946,
         31.106
        ],
        [
         119.921,
         31.17
        ],
        [
         119.878,
         31.161
        ],
        [
         119.827,
         31.174
        ],
        [
         119.81,
         31.149
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.634,
         31.019
        ],
        [
         119.585,
         30.972
        ],
        [
         119.585,
         30.299
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.585,
         30.972
        ],
        [
         119.634,
         31.019
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.585,
         31.12
        ],
        [
         119.585,
         30.972
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.585,
        32.232
       ],
       [
        119.643,
        32.235
       ],
       [
        119.771,
        32.207
       ],
       [
        119.867,
        32.1
       ],
       [
        119.941,
        32.04
       ],
       [
        120.074,
        31.96
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.602,
        31.087
       ],
       [
        120.394,
        30.971
       ],
       [
        120.236,
        30.936
       ],
       [
        120.103,
        30.973
       ],
       [
        119.978,
        31.091
       ],
       [
        119.939,
        31.253
       ],
       [
        119.987,
        31.392
       ],
       [
        120.108,
        31.492
       ],
       [
        120.219,
        31.532
       ],
       [
        120.254,
        31.51
       ],
       [
        120.256,
        31.495
       ],
       [
        120.251,
        31.475
       ],
       [
        120.271,
        31.445
       ],
       [
        120.325,
        31.442
       ],
       [
        120.38,
        31.429
       ],
       [
        120.372,
        31.386
       ],
       [
        120.331,
        31.35
       ],
       [
        120.326,
        31.32
       ],
       [
        120.357,
        31.27
       ],
       [
        120.391,
        31.227
       ],
       [
        120.431,
        31.2
       ],
       [
        120.44,
        31.153
       ],
       [
        120.395,
        31.1
       ],
       [
        120.423,
        31.083
       ],
       [
        120.461,
        31.081
       ],
       [
        120.54,
        31.127
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   }
  ],
  "_bbox": [
   119.585,
   30.299,
   121.585,
   32.299
  ]
 }
};
