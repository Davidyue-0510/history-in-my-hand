// 本文件由 tools/build.py 自动生成（切片 jiangsu_taizhou_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiangsu_taizhou_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiangsu_taizhou_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "jiangnan",
  "province": "jiangsu",
  "title": "泰州学派·王艮与平民儒学（明）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "taizhou",
  "dossier_event": "event:ev_jiangsu_taizhou_llm_01",
  "vocab_pack": "inline:jiangsu_taizhou_llm",
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
    "note": "泰州学派·王艮与平民儒学（明）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "泰州学派·王艮与平民儒学（明）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "泰州学派·王艮与平民儒学（明）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "泰州学派·王艮与平民儒学（明）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=jiangsu_taizhou_llm",
  "key": "jiangsu_taizhou_llm",
  "scene_id": "jiangsu_taizhou_llm"
 },
 "sources": [
  {
   "id": "jiangsu_taizhou_src",
   "title": "明儒学案·泰州学案 / 王心斋全集",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "黄宗羲",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "taizhou",
   "name": "泰州",
   "type": "city",
   "modern": "今江苏省泰州市",
   "note": "王艮讲学之地",
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.92,
   "lat": 32.46,
   "geo_note": "今江苏泰州市",
   "elev": 11
  },
  {
   "id": "anfengchang",
   "name": "安丰场",
   "type": "yi",
   "modern": "今江苏省东台市安丰镇",
   "note": "王艮出身灶户之地",
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 120.85,
   "lat": 32.75,
   "geo_note": "今江苏东台安丰镇（盐场）",
   "elev": 4
  }
 ],
 "persons": [
  {
   "id": "JIA__p01",
   "name": "王艮",
   "role": "泰州学派创始人",
   "note": "泰州安丰场灶户出身，师事王阳明",
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 10
  },
  {
   "id": "JIA__p02",
   "name": "王阳明",
   "role": "明代思想家",
   "note": "王艮之师，心学集大成者",
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "JIA__p03",
   "name": "李贽",
   "role": "晚明思想家",
   "note": "受泰州学派影响，倡狂禅",
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "JIA_001",
   "subject": "person:JIA__p01",
   "predicate": "师承",
   "value_text": "王艮师事王阳明",
   "time": {
    "era_text": "正德十六年",
    "start": "1521-01-01",
    "end": "1521-12-31",
    "gregorian_year": 1521
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "师事王阳明",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "师事王阳明",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_002",
   "subject": "person:JIA__p01",
   "predicate": "出身",
   "value_text": "王艮为泰州安丰场灶户",
   "time": {
    "era_text": "明中期",
    "start": "1500"
   },
   "place": "anfengchang",
   "source": "jiangsu_taizhou_src",
   "quote": "泰州安丰场灶户",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "泰州安丰场灶户",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_003",
   "subject": "person:JIA__p01",
   "predicate": "思想主张",
   "value_text": "倡百姓日用即道",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "百姓日用即道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "百姓日用即道",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_004",
   "subject": "person:JIA__p01",
   "predicate": "平等观",
   "value_text": "圣人不曾高，市井不曾低",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "圣人不曾高，市井不曾低",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "圣人不曾高，市井不曾低",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_005",
   "subject": "person:JIA__p01",
   "predicate": "讲学对象",
   "value_text": "以樵夫陶匠田夫为讲友",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "以樵夫陶匠田夫为讲友",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以樵夫陶匠田夫为讲友",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_006",
   "subject": "person:JIA__p01",
   "predicate": "思想影响",
   "value_text": "下启李贽狂禅",
   "time": {
    "era_text": "晚明",
    "start": "1600"
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "下启李贽狂禅",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "下启李贽狂禅",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_007",
   "subject": "person:JIA__p01",
   "predicate": "历史地位",
   "value_text": "晚明思想解放之源",
   "time": {
    "era_text": "晚明",
    "start": "1600"
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "晚明思想解放之源",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "晚明思想解放之源",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_008",
   "subject": "person:JIA__p01",
   "predicate": "学派归属",
   "value_text": "创泰州学派",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "创泰州学派",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "创泰州学派",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_009",
   "subject": "person:JIA__p01",
   "predicate": "思想口号",
   "value_text": "满街尧舜之平民儒学",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "满街尧舜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "满街尧舜",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_010",
   "subject": "person:JIA__p01",
   "predicate": "思想评价",
   "value_text": "泰州学派为平民儒学代表",
   "time": {
    "era_text": "嘉靖年间",
    "start": "1522-01-01",
    "end": "1522-12-31",
    "gregorian_year": 1522
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "平民儒学",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "学界共识",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平民儒学",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_011",
   "subject": "person:JIA__p01",
   "predicate": "思想影响",
   "value_text": "泰州学派对晚明思想解放有影响",
   "time": {
    "era_text": "晚明",
    "start": "1600"
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "晚明思想解放之源",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界讨论",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "晚明思想解放之源",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "JIA_012",
   "subject": "person:JIA__p01",
   "predicate": "思想传承",
   "value_text": "泰州学派与阳明心学关系待考",
   "time": {
    "era_text": "明中期",
    "start": "1500"
   },
   "place": "taizhou",
   "source": "jiangsu_taizhou_src",
   "quote": "师事王阳明",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "需进一步考证",
   "dims": [
    5
   ],
   "lead": {
    "where": "泰州学派文献",
    "skills": [
     "思想史分析"
    ],
    "accept": "明确师承关系"
   },
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "师事王阳明",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "jiangsu_taizhou_llm_EV01",
   "subject": "event:ev_jiangsu_taizhou_llm_01",
   "predicate": "沿革",
   "value_text": "泰州学派·王艮与平民儒学（明）。",
   "time": {
    "era_text": "正德十六年",
    "start": "1521-01-01",
    "end": "1521-12-31",
    "gregorian_year": 1521
   },
   "place": "",
   "source": "jiangsu_taizhou_src",
   "quote": "泰州学派·王艮与平民儒学（明）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "明儒学案·泰州学案 / 王心斋全集",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "师事王阳明",
   "source_text": "王艮，泰州安丰场灶户（今江苏东台）出身，师事王阳明，创泰州学派。倡『百姓日用即道』，『圣人不曾高，市井不曾低』，以樵夫、陶匠、田夫为讲友。『满街尧舜』之平民儒学，下启李贽狂禅，晚明思想解放之源也。",
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:JIA__p01|思想影响",
   "subject": "person:JIA__p01",
   "predicate": "思想影响",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "JIA_006",
    "JIA_011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "JIA_012"
 ],
 "events": [
  {
   "id": "ev_jiangsu_taizhou_llm_01",
   "subject": "event:ev_jiangsu_taizhou_llm_01",
   "year": {
    "era_text": "正德十六年",
    "start": "1521"
   },
   "era": "ming",
   "title": "泰州学派·王艮与平民儒学（明）",
   "kind": "沿革",
   "text": "泰州学派·王艮与平民儒学（明）。"
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "taizhou",
   "party": "后世官修",
   "start": 1500,
   "end": 1600,
   "timeline": "main"
  },
  {
   "place_id": "anfengchang",
   "party": "后世官修",
   "start": 1500,
   "end": 1600,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "taizhou",
   "name": "泰州",
   "lon": 119.92,
   "lat": 32.46,
   "region": "jiangnan"
  },
  {
   "place_id": "anfengchang",
   "name": "安丰场",
   "lon": 120.85,
   "lat": 32.75,
   "region": "jiangnan"
  }
 ],
 "control_years": [
  1500,
  1600
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
       121.78,
       31.464
      ],
      [
       121.85,
       31.488
      ],
      [
       121.85,
       31.515
      ],
      [
       121.844,
       31.526
      ],
      [
       121.808,
       31.552
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
        121.398,
        31.46
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
        121.681,
        31.712
       ],
       [
        121.764,
        31.7
       ],
       [
        121.85,
        31.703
       ],
       [
        121.85,
        31.839
       ],
       [
        121.832,
        31.9
       ],
       [
        121.751,
        31.993
       ],
       [
        121.674,
        32.051
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
        121.401,
        32.372
       ],
       [
        121.342,
        32.425
       ],
       [
        121.293,
        32.457
       ],
       [
        120.99,
        32.567
       ],
       [
        120.853,
        32.661
       ],
       [
        120.853,
        32.764
       ],
       [
        120.897,
        32.843
       ],
       [
        120.871,
        33.017
       ],
       [
        120.734,
        33.237
       ],
       [
        120.616,
        33.491
       ],
       [
        120.505,
        33.638
       ],
       [
        120.5,
        33.716
       ],
       [
        120.483,
        33.75
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
        121.85,
        31.488
       ],
       [
        121.78,
        31.464
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
        121.808,
        31.552
       ],
       [
        121.844,
        31.526
       ],
       [
        121.85,
        31.515
       ],
       [
        121.85,
        31.488
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
        118.92,
        31.46
       ],
       [
        118.92,
        33.75
       ],
       [
        120.483,
        33.75
       ],
       [
        120.5,
        33.716
       ],
       [
        120.505,
        33.638
       ],
       [
        120.616,
        33.491
       ],
       [
        120.734,
        33.237
       ],
       [
        120.871,
        33.017
       ],
       [
        120.897,
        32.843
       ],
       [
        120.853,
        32.764
       ],
       [
        120.853,
        32.661
       ],
       [
        120.99,
        32.567
       ],
       [
        121.293,
        32.457
       ],
       [
        121.342,
        32.425
       ],
       [
        121.401,
        32.372
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
        121.674,
        32.051
       ],
       [
        121.751,
        31.993
       ],
       [
        121.832,
        31.9
       ],
       [
        121.85,
        31.839
       ],
       [
        121.85,
        31.703
       ],
       [
        121.764,
        31.7
       ],
       [
        121.681,
        31.712
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
        121.398,
        31.46
       ],
       [
        118.92,
        31.46
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
         121.431,
         31.46
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
         121.191,
         31.46
        ],
        [
         121.431,
         31.46
        ]
       ]
      ],
      [
       [
        [
         121.85,
         31.46
        ],
        [
         121.85,
         31.644
        ],
        [
         121.715,
         31.674
        ],
        [
         121.643,
         31.698
        ],
        [
         121.6,
         31.703
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
         121.626,
         31.502
        ],
        [
         121.683,
         31.491
        ],
        [
         121.763,
         31.46
        ],
        [
         121.85,
         31.46
        ]
       ]
      ],
      [
       [
        [
         121.582,
         31.46
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
         121.54,
         31.46
        ],
        [
         121.582,
         31.46
        ]
       ]
      ],
      [
       [
        [
         121.625,
         31.46
        ],
        [
         121.579,
         31.48
        ],
        [
         121.607,
         31.46
        ],
        [
         121.625,
         31.46
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
         118.92,
         33.75
        ],
        [
         118.92,
         32.939
        ],
        [
         118.934,
         32.939
        ],
        [
         118.993,
         32.958
        ],
        [
         119.021,
         32.956
        ],
        [
         119.055,
         32.875
        ],
        [
         119.113,
         32.823
        ],
        [
         119.185,
         32.826
        ],
        [
         119.212,
         32.708
        ],
        [
         119.209,
         32.641
        ],
        [
         119.231,
         32.607
        ],
        [
         119.22,
         32.577
        ],
        [
         119.153,
         32.558
        ],
        [
         119.168,
         32.536
        ],
        [
         119.142,
         32.5
        ],
        [
         119.085,
         32.453
        ],
        [
         119.041,
         32.515
        ],
        [
         118.976,
         32.505
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.92,
         32.557
        ],
        [
         118.92,
         31.46
        ],
        [
         121.191,
         31.46
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
         121.6,
         31.703
        ],
        [
         121.643,
         31.698
        ],
        [
         121.715,
         31.674
        ],
        [
         121.85,
         31.644
        ],
        [
         121.85,
         31.961
        ],
        [
         121.772,
         32.033
        ],
        [
         121.759,
         32.059
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
         121.426,
         32.431
        ],
        [
         121.39,
         32.461
        ],
        [
         121.352,
         32.474
        ],
        [
         121.27,
         32.483
        ],
        [
         121.153,
         32.529
        ],
        [
         121.122,
         32.569
        ],
        [
         121.077,
         32.576
        ],
        [
         121.02,
         32.605
        ],
        [
         120.962,
         32.612
        ],
        [
         120.98,
         32.636
        ],
        [
         120.964,
         32.683
        ],
        [
         120.916,
         32.701
        ],
        [
         120.953,
         32.714
        ],
        [
         120.972,
         32.761
        ],
        [
         120.981,
         32.86
        ],
        [
         120.957,
         32.893
        ],
        [
         120.933,
         33.006
        ],
        [
         120.918,
         33.026
        ],
        [
         120.872,
         33.047
        ],
        [
         120.874,
         33.094
        ],
        [
         120.843,
         33.21
        ],
        [
         120.819,
         33.238
        ],
        [
         120.834,
         33.275
        ],
        [
         120.814,
         33.303
        ],
        [
         120.77,
         33.307
        ],
        [
         120.741,
         33.338
        ],
        [
         120.717,
         33.437
        ],
        [
         120.68,
         33.52
        ],
        [
         120.623,
         33.615
        ],
        [
         120.611,
         33.627
        ],
        [
         120.584,
         33.668
        ],
        [
         120.548,
         33.75
        ],
        [
         118.92,
         33.75
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
         118.92,
         31.46
        ],
        [
         118.92,
         31.46
        ],
        [
         118.92,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.976,
         32.505
        ],
        [
         119.041,
         32.515
        ],
        [
         119.085,
         32.453
        ],
        [
         119.142,
         32.5
        ],
        [
         119.168,
         32.536
        ],
        [
         119.153,
         32.558
        ],
        [
         119.22,
         32.577
        ],
        [
         119.231,
         32.607
        ],
        [
         119.209,
         32.641
        ],
        [
         119.212,
         32.708
        ],
        [
         119.185,
         32.826
        ],
        [
         119.113,
         32.823
        ],
        [
         119.055,
         32.875
        ],
        [
         119.021,
         32.956
        ],
        [
         118.993,
         32.958
        ],
        [
         118.934,
         32.939
        ],
        [
         118.92,
         32.939
        ],
        [
         118.92,
         31.46
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
        118.92,
        32.183
       ],
       [
        118.961,
        32.203
       ],
       [
        119.324,
        32.227
       ],
       [
        119.53,
        32.229
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
        120.07,
        31.46
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
        120.261,
        31.46
       ],
       [
        120.07,
        31.46
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.407,
        32.794
       ],
       [
        119.392,
        32.751
       ],
       [
        119.35,
        32.749
       ],
       [
        119.3,
        32.748
       ],
       [
        119.253,
        32.736
       ],
       [
        119.201,
        32.691
       ],
       [
        119.173,
        32.686
       ],
       [
        119.165,
        32.706
       ],
       [
        119.147,
        32.753
       ],
       [
        119.125,
        32.798
       ],
       [
        119.092,
        32.836
       ],
       [
        119.079,
        32.855
       ],
       [
        119.084,
        32.866
       ],
       [
        119.13,
        32.877
       ],
       [
        119.188,
        32.878
       ],
       [
        119.229,
        32.882
       ],
       [
        119.242,
        32.896
       ],
       [
        119.241,
        32.919
       ],
       [
        119.253,
        32.943
       ],
       [
        119.251,
        32.978
       ],
       [
        119.245,
        33.013
       ],
       [
        119.264,
        33.034
       ],
       [
        119.296,
        33.041
       ],
       [
        119.314,
        33.054
       ],
       [
        119.303,
        33.085
       ],
       [
        119.269,
        33.121
       ],
       [
        119.237,
        33.154
       ],
       [
        119.215,
        33.156
       ],
       [
        119.18,
        33.148
       ],
       [
        119.168,
        33.118
       ],
       [
        119.164,
        33.09
       ],
       [
        119.154,
        33.065
       ],
       [
        119.099,
        33.027
       ],
       [
        119.035,
        33.031
       ],
       [
        118.966,
        33.038
       ],
       [
        118.92,
        33.053
       ],
       [
        118.92,
        33.074
       ],
       [
        118.957,
        33.071
       ],
       [
        119.059,
        33.058
       ],
       [
        119.102,
        33.069
       ],
       [
        119.135,
        33.144
       ],
       [
        119.17,
        33.186
       ],
       [
        119.226,
        33.2
       ],
       [
        119.254,
        33.201
       ],
       [
        119.304,
        33.164
       ],
       [
        119.349,
        33.078
       ],
       [
        119.346,
        33.024
       ],
       [
        119.372,
        33.0
       ],
       [
        119.397,
        32.916
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ]
      ]
     ]
    },
    "n": "Gaoyou Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.92,
        31.46
       ],
       [
        118.92,
        31.552
       ],
       [
        118.941,
        31.554
       ],
       [
        118.964,
        31.503
       ],
       [
        118.96,
        31.465
       ],
       [
        118.953,
        31.46
       ],
       [
        118.92,
        31.46
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   }
  ],
  "_bbox": [
   118.92,
   31.46,
   121.85,
   33.75
  ]
 }
};
