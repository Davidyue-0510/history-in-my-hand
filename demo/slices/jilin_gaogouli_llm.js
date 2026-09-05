// 本文件由 tools/build.py 自动生成（切片 jilin_gaogouli_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jilin_gaogouli_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jilin_gaogouli_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "jianzhou",
  "province": "jilin",
  "title": "高句丽·集安王城（前37–668）",
  "dossier_label": "jilin_gaogouli_llm",
  "subtitle": "",
  "primary_place": "jilin_ji_an",
  "dossier_event": "event:ev_jilin_gaogouli_llm_01",
  "vocab_pack": "inline:jilin_gaogouli_llm",
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
  "epoch": "two_jin",
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
    "note": "制度+思想→高句丽王城集安，夫余别种立国，与中原政权时臣时叛"
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
    "note": "技術+制度→扼鸭绿江中游、山城防御，好太王拓境控辽东边徼"
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
    "note": "社會+制度→高句丽役属秽貊诸部，五部制凝聚，好太王碑记功"
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
    "note": "地理+制度→据鸭绿江—长白山险，东北亚三角博弈，唐总章灭之"
   }
  },
  "subject_names": [
   "person:JIL__p01",
   "person:JIL__p02",
   "place:jilin_ji_an",
   "place:he_sheng_gu_cheng",
   "place:ya_lu_jiang",
   "event:ev_jilin_gaogouli_llm_01",
   "event:ev_jilin_gaogouli_llm_02",
   "event:ev_jilin_gaogouli_llm_03"
  ],
  "page": "county.html?scene=jilin_gaogouli_llm",
  "key": "jilin_gaogouli_llm",
  "scene_id": "jilin_gaogouli_llm"
 },
 "sources": [
  {
   "id": "wei_shu_gaogouli_llm",
   "title": "魏书·高句丽传（集安）",
   "party": "魏晋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "魏收",
   "period": "北齐",
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
   "id": "jilin_ji_an",
   "name": "集安",
   "type": "city",
   "modern": "今中国吉林省集安市",
   "note": "高句丽早期都城",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "lon": 126.18,
   "lat": 41.12,
   "geo_unresolved": false,
   "elev": 475
  },
  {
   "id": "he_sheng_gu_cheng",
   "name": "纥升骨城",
   "type": "fortress",
   "modern": "今中国吉林省集安市",
   "note": "高句丽都城",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "lon": 126.18,
   "lat": 41.1,
   "geo_unresolved": false,
   "elev": 450
  },
  {
   "id": "ya_lu_jiang",
   "name": "鸭绿江",
   "type": "region",
   "modern": "今中国朝鲜界河",
   "note": "高句丽核心区域",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "lon": 126.0,
   "lat": 40.5,
   "geo_match": "substring",
   "geo_unresolved": false,
   "elev": 684
  }
 ],
 "persons": [
  {
   "id": "JIL__p01",
   "name": "朱蒙",
   "role": "高句丽开国君主",
   "note": "前37年立国，都纥升骨城",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIL__p02",
   "name": "好太王",
   "role": "高句丽国王",
   "note": "391-412年在位，拓境立碑",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIL_001",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "立国时间",
   "value_text": "前37年朱蒙立国",
   "time": {
    "era_text": "汉元帝建昭二年",
    "start": "-37-01-01",
    "end": "-37-12-31",
    "gregorian_year": -37
   },
   "place": "he_sheng_gu_cheng",
   "source": "wei_shu_gaogouli_llm",
   "quote": "汉元帝建昭二年（前37）朱蒙立国",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "汉元帝建昭二年（前37）朱蒙立国",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_002",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "都城",
   "value_text": "都纥升骨城",
   "time": {
    "era_text": "汉元帝建昭二年",
    "start": "-37-01-01",
    "end": "-37-12-31",
    "gregorian_year": -37
   },
   "place": "he_sheng_gu_cheng",
   "source": "wei_shu_gaogouli_llm",
   "quote": "都纥升骨城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "都纥升骨城",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_003",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "族源",
   "value_text": "夫余别种",
   "time": {
    "era_text": "汉元帝建昭二年",
    "start": "-37-01-01",
    "end": "-37-12-31",
    "gregorian_year": -37
   },
   "place": "he_sheng_gu_cheng",
   "source": "wei_shu_gaogouli_llm",
   "quote": "夫余别种",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "夫余别种",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_004",
   "subject": "event:ev_jilin_gaogouli_llm_02",
   "predicate": "拓境",
   "value_text": "好太王拓境",
   "time": {
    "era_text": "好太王在位",
    "start": "0391"
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "好太王（391–412）拓境",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "好太王（391–412）拓境",
   "dim_source": "fallback",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_005",
   "subject": "event:ev_jilin_gaogouli_llm_02",
   "predicate": "碑存",
   "value_text": "碑在今集安",
   "time": {
    "era_text": "好太王在位",
    "start": "0391"
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "碑在今集安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "碑在今集安",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_006",
   "subject": "event:ev_jilin_gaogouli_llm_03",
   "predicate": "灭亡时间",
   "value_text": "668年唐灭高句丽",
   "time": {
    "era_text": "唐总章元年",
    "start": "668-01-01",
    "end": "668-12-31",
    "gregorian_year": 668
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "唐总章元年（668）为唐所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "唐总章元年（668）为唐所灭",
   "dim_source": "fallback",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_007",
   "subject": "place:jilin_ji_an",
   "predicate": "地理位置",
   "value_text": "扼鸭绿江中游",
   "time": {
    "era_text": "无",
    "start": ""
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "扼鸭绿江中游",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "扼鸭绿江中游",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_008",
   "subject": "place:jilin_ji_an",
   "predicate": "战略地位",
   "value_text": "控辽东边徼",
   "time": {
    "era_text": "无",
    "start": ""
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "控辽东边徼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "控辽东边徼",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_009",
   "subject": "place:jilin_ji_an",
   "predicate": "与中原关系",
   "value_text": "与汉魏南北朝时和时战",
   "time": {
    "era_text": "无",
    "start": ""
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "与汉、魏、南北朝时和时战",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "与汉、魏、南北朝时和时战",
   "dim_source": "fallback",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_010",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "都城位置",
   "value_text": "今吉林集安",
   "time": {
    "era_text": "汉元帝建昭二年",
    "start": "-37-01-01",
    "end": "-37-12-31",
    "gregorian_year": -37
   },
   "place": "he_sheng_gu_cheng",
   "source": "wei_shu_gaogouli_llm",
   "quote": "都纥升骨城（今吉林集安）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "都纥升骨城（今吉林集安）",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_011",
   "subject": "event:ev_jilin_gaogouli_llm_02",
   "predicate": "好太王在位时间",
   "value_text": "391-412年在位",
   "time": {
    "era_text": "好太王在位",
    "start": "0391"
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "好太王（391–412）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "好太王（391–412）",
   "dim_source": "fallback",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_012",
   "subject": "event:ev_jilin_gaogouli_llm_03",
   "predicate": "灭国原因",
   "value_text": "唐灭高句丽",
   "time": {
    "era_text": "唐总章元年",
    "start": "668-01-01",
    "end": "668-12-31",
    "gregorian_year": 668
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "为唐所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "为唐所灭",
   "dim_source": "fallback",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_013",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "立国者身份",
   "value_text": "朱蒙为夫余别种",
   "time": {
    "era_text": "汉元帝建昭二年",
    "start": "-37-01-01",
    "end": "-37-12-31",
    "gregorian_year": -37
   },
   "place": "he_sheng_gu_cheng",
   "source": "wei_shu_gaogouli_llm",
   "quote": "夫余别种",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "夫余别种",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_014",
   "subject": "event:ev_jilin_gaogouli_llm_02",
   "predicate": "碑文内容",
   "value_text": "碑文记拓境事迹",
   "time": {
    "era_text": "好太王在位",
    "start": "0391"
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "碑在今集安",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "碑文具体内容未详",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "碑在今集安",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JIL_015",
   "subject": "event:ev_jilin_gaogouli_llm_03",
   "predicate": "灭亡后遗民去向",
   "value_text": "遗民去向未明",
   "time": {
    "era_text": "唐总章元年",
    "start": "668-01-01",
    "end": "668-12-31",
    "gregorian_year": 668
   },
   "place": "jilin_ji_an",
   "source": "wei_shu_gaogouli_llm",
   "quote": "为唐所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载遗民流向",
   "dims": [
    4
   ],
   "lead": {
    "where": "集安及周边",
    "skills": [
     "考古",
     "文献"
    ],
    "accept": "遗民融入当地或迁徙"
   },
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null,
   "_source_quote": "为唐所灭",
   "dim_source": "declared",
   "_party": "魏晋官修",
   "_faction": null
  },
  {
   "id": "JILIG2",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "jilin_gaogouli_llm",
    "start": "391",
    "end": "391",
    "gregorian_year": 391
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
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
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "JIL_015",
  "JILIG2"
 ],
 "events": [
  {
   "id": "ev_jilin_gaogouli_llm_01",
   "subject": "event:ev_jilin_gaogouli_llm_01",
   "year": -37,
   "era": "汉元帝建昭二年",
   "title": "朱蒙立国",
   "kind": "建置",
   "text": "朱蒙立国，都纥升骨城",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jilin_gaogouli_llm_02",
   "subject": "event:ev_jilin_gaogouli_llm_02",
   "year": 391,
   "era": "好太王在位",
   "title": "好太王拓境",
   "kind": "战事",
   "text": "好太王拓境，立碑记功",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_jilin_gaogouli_llm_03",
   "subject": "event:ev_jilin_gaogouli_llm_03",
   "year": 668,
   "era": "唐总章元年",
   "title": "唐灭高句丽",
   "kind": "战事",
   "text": "唐总章元年灭高句丽",
   "_source_idx": 0,
   "_source_name": "魏书·高句丽传（集安）",
   "_source_party": "魏晋官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "ya_lu_jiang",
   "party": "魏晋官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 魏晋官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "ya_lu_jiang",
   "name": "鸭绿江",
   "lon": 126.0,
   "lat": 40.5,
   "region": "jianzhou"
  }
 ],
 "control_years": [
  1900,
  2000
 ],
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
   "魏晋官修",
   "综合史料"
  ],
  "party_bucket": {
   "魏晋官修": "魏晋官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "魏晋官修": "#8C6239",
   "综合史料": "#9B7B5A"
  },
  "factions": {},
  "faction_colors": {}
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        125.0,
        39.638
       ],
       [
        125.1,
        39.59
       ],
       [
        125.18,
        39.583
       ],
       [
        125.361,
        39.527
       ],
       [
        125.364,
        39.5
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
        125.0,
        42.12
       ],
       [
        127.18,
        42.12
       ],
       [
        127.18,
        39.5
       ],
       [
        125.364,
        39.5
       ],
       [
        125.361,
        39.527
       ],
       [
        125.18,
        39.583
       ],
       [
        125.1,
        39.59
       ],
       [
        125.0,
        39.638
       ],
       [
        125.0,
        42.12
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
         125.0,
         42.12
        ],
        [
         125.0,
         40.473
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
         125.471,
         42.12
        ],
        [
         125.0,
         42.12
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
         127.18,
         42.12
        ],
        [
         125.471,
         42.12
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
         126.354,
         41.245
        ],
        [
         126.373,
         41.289
        ],
        [
         126.437,
         41.353
        ],
        [
         126.497,
         41.375
        ],
        [
         126.524,
         41.349
        ],
        [
         126.539,
         41.367
        ],
        [
         126.497,
         41.407
        ],
        [
         126.56,
         41.548
        ],
        [
         126.583,
         41.563
        ],
        [
         126.564,
         41.609
        ],
        [
         126.593,
         41.625
        ],
        [
         126.608,
         41.669
        ],
        [
         126.645,
         41.661
        ],
        [
         126.688,
         41.674
        ],
        [
         126.724,
         41.711
        ],
        [
         126.691,
         41.728
        ],
        [
         126.695,
         41.751
        ],
        [
         126.723,
         41.753
        ],
        [
         126.8,
         41.703
        ],
        [
         126.809,
         41.749
        ],
        [
         126.848,
         41.734
        ],
        [
         126.856,
         41.76
        ],
        [
         126.887,
         41.792
        ],
        [
         126.931,
         41.813
        ],
        [
         126.953,
         41.804
        ],
        [
         126.94,
         41.773
        ],
        [
         126.979,
         41.777
        ],
        [
         127.006,
         41.749
        ],
        [
         127.051,
         41.745
        ],
        [
         127.058,
         41.704
        ],
        [
         127.038,
         41.677
        ],
        [
         127.103,
         41.648
        ],
        [
         127.093,
         41.63
        ],
        [
         127.127,
         41.622
        ],
        [
         127.136,
         41.6
        ],
        [
         127.178,
         41.6
        ],
        [
         127.125,
         41.566
        ],
        [
         127.119,
         41.54
        ],
        [
         127.165,
         41.543
        ],
        [
         127.18,
         41.533
        ],
        [
         127.18,
         42.12
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   125.0,
   39.5,
   127.18,
   42.12
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
