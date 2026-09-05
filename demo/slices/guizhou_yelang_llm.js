// 本文件由 tools/build.py 自动生成（切片 guizhou_yelang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guizhou_yelang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guizhou_yelang_llm"] = {
 "meta": {
  "kind": "fusion",
  "region": "chuan_gui",
  "province": "guizhou",
  "title": "汉通西南夷·夜郎（前135–前111）",
  "dossier_label": "guizhou_yelang_llm",
  "subtitle": "",
  "primary_place": "yelang",
  "dossier_event": "event:ev_guizhou_yelang_llm_01",
  "vocab_pack": "inline:guizhou_yelang_llm",
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
  "epoch": "han",
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
    "note": "制度+思想→汉置牂柯郡、封夜郎王，西南夷纳入边郡与羁縻双轨"
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
    "note": "技術+制度→西南夷道自僰道指牂柯江，巴蜀物资与军镇连线"
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
    "note": "社會+制度→夜郎诸部归附、汉民与夷人杂处，边郡编户"
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
    "note": "地理+制度→扼牂柯江—滇黔通道，控西南夷与交趾—巴蜀三角"
   }
  },
  "subject_names": [
   "person:GUI__p01",
   "person:GUI__p02",
   "person:GUI__p03",
   "place:yelang",
   "place:zangke",
   "place:qielan",
   "place:bodaozhi",
   "place:zangkejiang",
   "event:ev_guizhou_yelang_llm_01",
   "event:ev_guizhou_yelang_llm_02",
   "event:ev_guizhou_yelang_llm_03"
  ],
  "page": "county.html?scene=guizhou_yelang_llm",
  "key": "guizhou_yelang_llm",
  "scene_id": "guizhou_yelang_llm"
 },
 "sources": [
  {
   "id": "shi_ji_xi_nanyi_llm",
   "title": "史记·西南夷列传（夜郎）",
   "party": "汉官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁",
   "period": "汉",
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
   "id": "yelang",
   "name": "夜郎",
   "type": "yi",
   "modern": "今贵州西部",
   "note": "夜郎国地",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 106.7,
   "lat": 26.85,
   "geo_unresolved": false,
   "elev": 1313
  },
  {
   "id": "zangke",
   "name": "牂柯",
   "type": "region",
   "modern": "今贵州大部",
   "note": "牂柯郡地",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 107.0,
   "lat": 26.9,
   "geo_unresolved": false,
   "elev": 1202
  },
  {
   "id": "qielan",
   "name": "且兰",
   "type": "yi",
   "modern": "今贵州福泉一带",
   "note": "且兰国",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 107.5,
   "lat": 26.7,
   "geo_unresolved": false,
   "elev": 1075
  },
  {
   "id": "bodaozhi",
   "name": "僰道",
   "type": "city",
   "modern": "今四川宜宾",
   "note": "通西南夷起点",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 104.62,
   "lat": 28.77,
   "geo_unresolved": false,
   "elev": 358
  },
  {
   "id": "zangkejiang",
   "name": "牂柯江",
   "type": "river",
   "modern": "今贵州北盘江",
   "note": "通西南夷道所经",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 105.5,
   "lat": 25.8,
   "geo_unresolved": false,
   "elev": 1573
  }
 ],
 "persons": [
  {
   "id": "GUI__p01",
   "name": "唐蒙",
   "role": "汉使者",
   "note": "通西南夷，说服夜郎侯",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "GUI__p02",
   "name": "多同",
   "role": "夜郎侯",
   "note": "请置吏，后入朝封王",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "GUI__p03",
   "name": "汉武帝",
   "role": "汉帝",
   "note": "决策通西南夷",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GUI_001",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "通使",
   "value_text": "唐蒙通夜郎，多同请置吏",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "唐蒙通西南夷，夜郎侯多同请置吏",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "唐蒙通西南夷，夜郎侯多同请置吏",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_002",
   "subject": "event:ev_guizhou_yelang_llm_02",
   "predicate": "建置",
   "value_text": "平南越且兰，置牂柯郡",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "zangke",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "平南越、且兰，置牂柯郡",
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
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "平南越、且兰，置牂柯郡",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_003",
   "subject": "event:ev_guizhou_yelang_llm_03",
   "predicate": "封王",
   "value_text": "夜郎侯入朝，封为王",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎侯入朝，封为王",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎侯入朝，封为王",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_004",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，不知汉广大",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎自大",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_005",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，实因交通闭塞",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎自大",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "后世解释",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_006",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "置吏",
   "value_text": "多同请置吏，汉设吏",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎侯多同请置吏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎侯多同请置吏",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_007",
   "subject": "event:ev_guizhou_yelang_llm_02",
   "predicate": "平且兰",
   "value_text": "且兰叛，汉平之",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "qielan",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "平南越、且兰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "平南越、且兰",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_008",
   "subject": "place:zangkejiang",
   "predicate": "交通",
   "value_text": "汉通西南夷道，自僰道指牂柯江",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "zangkejiang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "自僰道指牂柯江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "自僰道指牂柯江",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_009",
   "subject": "place:yelang",
   "predicate": "经济",
   "value_text": "巴蜀财物流入夜郎",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "巴蜀财物流入",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "巴蜀财物流入",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_010",
   "subject": "event:ev_guizhou_yelang_llm_03",
   "predicate": "入朝",
   "value_text": "夜郎侯入朝，汉封王",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎侯入朝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎侯入朝",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_011",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "通使",
   "value_text": "唐蒙通夜郎，多同请置吏",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "唐蒙通西南夷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "唐蒙通西南夷",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_012",
   "subject": "event:ev_guizhou_yelang_llm_02",
   "predicate": "置郡",
   "value_text": "置牂柯郡，领夜郎",
   "time": {
    "era_text": "元鼎六年",
    "start": "-111-01-01",
    "end": "-111-12-31",
    "gregorian_year": -111
   },
   "place": "zangke",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "置牂柯郡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "置牂柯郡",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_013",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，因不知汉广大",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎自大",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_014",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，或为汉人偏见",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎自大",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "后世质疑",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUI_015",
   "subject": "place:yelang",
   "predicate": "自大",
   "value_text": "夜郎自大，史料未载原话",
   "time": {
    "era_text": "元狩元年",
    "start": "-122-01-01",
    "end": "-122-12-31",
    "gregorian_year": -122
   },
   "place": "yelang",
   "source": "shi_ji_xi_nanyi_llm",
   "quote": "夜郎自大",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "原文未载对话",
   "dims": [
    5
   ],
   "lead": {
    "where": "夜郎",
    "skills": [
     "文献考据"
    ],
    "accept": "需查《史记》原文"
   },
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "夜郎自大",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "GUIZG2",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "guizhou_yelang_llm",
    "start": "-111",
    "end": "-111",
    "gregorian_year": -111
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "fusion",
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
   "dist": {
    "type": "degenerate"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:place:yelang|自大",
   "subject": "place:yelang",
   "predicate": "自大",
   "kind": "record_vs_scholarship",
   "count": 4,
   "spread": null,
   "assertion_ids": [
    "GUI_004",
    "GUI_005",
    "GUI_013",
    "GUI_014"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "GUI_015",
  "GUIZG2"
 ],
 "events": [
  {
   "id": "ev_guizhou_yelang_llm_01",
   "subject": "event:ev_guizhou_yelang_llm_01",
   "year": -122,
   "era": "元狩元年",
   "title": "唐蒙通夜郎",
   "kind": "外交",
   "text": "唐蒙出使夜郎，多同请置吏",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_guizhou_yelang_llm_02",
   "subject": "event:ev_guizhou_yelang_llm_02",
   "year": -111,
   "era": "元鼎六年",
   "title": "置牂柯郡",
   "kind": "建置",
   "text": "平南越且兰，置牂柯郡",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_guizhou_yelang_llm_03",
   "subject": "event:ev_guizhou_yelang_llm_03",
   "year": -111,
   "era": "元鼎六年",
   "title": "夜郎侯入朝",
   "kind": "外交",
   "text": "夜郎侯入朝，封为王",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "bodaozhi",
   "to": "zangkejiang",
   "type": "military",
   "label": "汉通西南夷道",
   "_source_idx": 0,
   "_source_name": "史记·西南夷列传（夜郎）",
   "_source_party": "汉官修",
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
   "汉官修",
   "综合史料"
  ],
  "party_bucket": {
   "汉官修": "汉官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "汉官修": "#8C6239",
   "综合史料": "#9B7B5A"
  },
  "factions": {},
  "faction_colors": {}
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
        103.62,
        24.8
       ],
       [
        103.62,
        29.77
       ],
       [
        108.5,
        29.77
       ],
       [
        108.5,
        24.8
       ],
       [
        103.62,
        24.8
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
         108.5,
         29.77
        ],
        [
         108.441,
         29.77
        ],
        [
         108.437,
         29.741
        ],
        [
         108.461,
         29.741
        ],
        [
         108.5,
         29.711
        ],
        [
         108.5,
         29.77
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
         108.5,
         24.8
        ],
        [
         108.5,
         25.436
        ],
        [
         108.472,
         25.459
        ],
        [
         108.419,
         25.443
        ],
        [
         108.4,
         25.491
        ],
        [
         108.36,
         25.513
        ],
        [
         108.349,
         25.536
        ],
        [
         108.308,
         25.526
        ],
        [
         108.281,
         25.48
        ],
        [
         108.241,
         25.462
        ],
        [
         108.252,
         25.43
        ],
        [
         108.193,
         25.459
        ],
        [
         108.162,
         25.445
        ],
        [
         108.193,
         25.405
        ],
        [
         108.143,
         25.391
        ],
        [
         108.152,
         25.324
        ],
        [
         108.143,
         25.27
        ],
        [
         108.115,
         25.21
        ],
        [
         108.081,
         25.194
        ],
        [
         108.002,
         25.197
        ],
        [
         107.928,
         25.156
        ],
        [
         107.872,
         25.141
        ],
        [
         107.839,
         25.116
        ],
        [
         107.763,
         25.125
        ],
        [
         107.789,
         25.155
        ],
        [
         107.76,
         25.188
        ],
        [
         107.762,
         25.229
        ],
        [
         107.742,
         25.24
        ],
        [
         107.701,
         25.194
        ],
        [
         107.696,
         25.22
        ],
        [
         107.662,
         25.259
        ],
        [
         107.66,
         25.316
        ],
        [
         107.632,
         25.31
        ],
        [
         107.6,
         25.251
        ],
        [
         107.577,
         25.257
        ],
        [
         107.513,
         25.209
        ],
        [
         107.472,
         25.214
        ],
        [
         107.49,
         25.277
        ],
        [
         107.481,
         25.3
        ],
        [
         107.433,
         25.289
        ],
        [
         107.409,
         25.347
        ],
        [
         107.421,
         25.393
        ],
        [
         107.376,
         25.412
        ],
        [
         107.359,
         25.394
        ],
        [
         107.318,
         25.402
        ],
        [
         107.308,
         25.433
        ],
        [
         107.337,
         25.461
        ],
        [
         107.264,
         25.543
        ],
        [
         107.232,
         25.557
        ],
        [
         107.229,
         25.605
        ],
        [
         107.205,
         25.608
        ],
        [
         107.186,
         25.579
        ],
        [
         107.064,
         25.559
        ],
        [
         107.067,
         25.509
        ],
        [
         107.016,
         25.496
        ],
        [
         106.997,
         25.443
        ],
        [
         106.964,
         25.438
        ],
        [
         106.988,
         25.359
        ],
        [
         107.013,
         25.353
        ],
        [
         107.014,
         25.276
        ],
        [
         106.976,
         25.233
        ],
        [
         106.933,
         25.251
        ],
        [
         106.904,
         25.232
        ],
        [
         106.888,
         25.182
        ],
        [
         106.853,
         25.187
        ],
        [
         106.788,
         25.171
        ],
        [
         106.765,
         25.183
        ],
        [
         106.732,
         25.162
        ],
        [
         106.691,
         25.179
        ],
        [
         106.645,
         25.165
        ],
        [
         106.64,
         25.133
        ],
        [
         106.591,
         25.088
        ],
        [
         106.551,
         25.083
        ],
        [
         106.52,
         25.054
        ],
        [
         106.45,
         25.033
        ],
        [
         106.442,
         25.019
        ],
        [
         106.333,
         24.988
        ],
        [
         106.305,
         24.974
        ],
        [
         106.254,
         24.971
        ],
        [
         106.216,
         24.982
        ],
        [
         106.191,
         24.953
        ],
        [
         106.145,
         24.954
        ],
        [
         106.198,
         24.886
        ],
        [
         106.206,
         24.851
        ],
        [
         106.188,
         24.8
        ],
        [
         105.609,
         24.8
        ],
        [
         105.608,
         24.804
        ],
        [
         105.587,
         24.8
        ],
        [
         105.556,
         24.8
        ],
        [
         105.497,
         24.809
        ],
        [
         105.493,
         24.833
        ],
        [
         105.457,
         24.871
        ],
        [
         105.428,
         24.931
        ],
        [
         105.366,
         24.943
        ],
        [
         105.334,
         24.927
        ],
        [
         105.268,
         24.929
        ],
        [
         105.252,
         24.967
        ],
        [
         105.213,
         24.996
        ],
        [
         105.178,
         24.985
        ],
        [
         105.157,
         24.959
        ],
        [
         105.131,
         24.96
        ],
        [
         105.096,
         24.929
        ],
        [
         105.096,
         24.928
        ],
        [
         105.082,
         24.916
        ],
        [
         105.078,
         24.918
        ],
        [
         105.039,
         24.873
        ],
        [
         105.027,
         24.816
        ],
        [
         105.031,
         24.8
        ],
        [
         108.5,
         24.8
        ]
       ]
      ],
      [
       [
        [
         105.096,
         24.928
        ],
        [
         105.096,
         24.929
        ],
        [
         105.078,
         24.918
        ],
        [
         105.082,
         24.916
        ],
        [
         105.096,
         24.928
        ]
       ]
      ]
     ]
    },
    "n": "广西壮族自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         106.374,
         28.526
        ],
        [
         106.403,
         28.57
        ],
        [
         106.477,
         28.53
        ],
        [
         106.505,
         28.545
        ],
        [
         106.467,
         28.586
        ],
        [
         106.493,
         28.591
        ],
        [
         106.503,
         28.661
        ],
        [
         106.528,
         28.678
        ],
        [
         106.492,
         28.742
        ],
        [
         106.462,
         28.761
        ],
        [
         106.453,
         28.817
        ],
        [
         106.474,
         28.833
        ],
        [
         106.562,
         28.756
        ],
        [
         106.561,
         28.719
        ],
        [
         106.588,
         28.692
        ],
        [
         106.617,
         28.691
        ],
        [
         106.618,
         28.667
        ],
        [
         106.652,
         28.649
        ],
        [
         106.618,
         28.645
        ],
        [
         106.637,
         28.623
        ],
        [
         106.607,
         28.593
        ],
        [
         106.615,
         28.549
        ],
        [
         106.568,
         28.524
        ],
        [
         106.565,
         28.485
        ],
        [
         106.632,
         28.504
        ],
        [
         106.698,
         28.477
        ],
        [
         106.708,
         28.451
        ],
        [
         106.747,
         28.467
        ],
        [
         106.726,
         28.518
        ],
        [
         106.738,
         28.555
        ],
        [
         106.778,
         28.563
        ],
        [
         106.757,
         28.607
        ],
        [
         106.785,
         28.627
        ],
        [
         106.807,
         28.589
        ],
        [
         106.831,
         28.623
        ],
        [
         106.867,
         28.625
        ],
        [
         106.889,
         28.696
        ],
        [
         106.866,
         28.69
        ],
        [
         106.824,
         28.756
        ],
        [
         106.846,
         28.781
        ],
        [
         106.872,
         28.777
        ],
        [
         106.923,
         28.81
        ],
        [
         106.952,
         28.767
        ],
        [
         106.989,
         28.776
        ],
        [
         106.984,
         28.851
        ],
        [
         107.019,
         28.862
        ],
        [
         107.016,
         28.883
        ],
        [
         107.142,
         28.888
        ],
        [
         107.207,
         28.869
        ],
        [
         107.195,
         28.838
        ],
        [
         107.227,
         28.836
        ],
        [
         107.211,
         28.818
        ],
        [
         107.219,
         28.773
        ],
        [
         107.247,
         28.762
        ],
        [
         107.261,
         28.793
        ],
        [
         107.328,
         28.811
        ],
        [
         107.34,
         28.846
        ],
        [
         107.384,
         28.849
        ],
        [
         107.414,
         28.912
        ],
        [
         107.441,
         28.944
        ],
        [
         107.413,
         28.96
        ],
        [
         107.397,
         28.994
        ],
        [
         107.364,
         29.009
        ],
        [
         107.396,
         29.041
        ],
        [
         107.37,
         29.092
        ],
        [
         107.412,
         29.095
        ],
        [
         107.428,
         29.129
        ],
        [
         107.409,
         29.138
        ],
        [
         107.402,
         29.185
        ],
        [
         107.441,
         29.204
        ],
        [
         107.487,
         29.174
        ],
        [
         107.571,
         29.218
        ],
        [
         107.589,
         29.15
        ],
        [
         107.606,
         29.165
        ],
        [
         107.66,
         29.163
        ],
        [
         107.701,
         29.141
        ],
        [
         107.749,
         29.2
        ],
        [
         107.811,
         29.139
        ],
        [
         107.785,
         29.048
        ],
        [
         107.824,
         29.034
        ],
        [
         107.81,
         28.984
        ],
        [
         107.867,
         28.96
        ],
        [
         107.883,
         29.006
        ],
        [
         107.909,
         29.007
        ],
        [
         107.926,
         29.032
        ],
        [
         108.026,
         29.04
        ],
        [
         108.071,
         29.086
        ],
        [
         108.15,
         29.053
        ],
        [
         108.193,
         29.072
        ],
        [
         108.256,
         29.04
        ],
        [
         108.278,
         29.092
        ],
        [
         108.307,
         29.079
        ],
        [
         108.298,
         29.046
        ],
        [
         108.32,
         28.961
        ],
        [
         108.345,
         28.943
        ],
        [
         108.358,
         28.893
        ],
        [
         108.347,
         28.86
        ],
        [
         108.353,
         28.816
        ],
        [
         108.386,
         28.803
        ],
        [
         108.385,
         28.772
        ],
        [
         108.347,
         28.736
        ],
        [
         108.332,
         28.679
        ],
        [
         108.439,
         28.634
        ],
        [
         108.5,
         28.627
        ],
        [
         108.5,
         29.711
        ],
        [
         108.461,
         29.741
        ],
        [
         108.437,
         29.741
        ],
        [
         108.441,
         29.77
        ],
        [
         105.578,
         29.77
        ],
        [
         105.575,
         29.744
        ],
        [
         105.529,
         29.708
        ],
        [
         105.482,
         29.718
        ],
        [
         105.477,
         29.675
        ],
        [
         105.42,
         29.688
        ],
        [
         105.381,
         29.628
        ],
        [
         105.348,
         29.622
        ],
        [
         105.333,
         29.592
        ],
        [
         105.297,
         29.571
        ],
        [
         105.305,
         29.532
        ],
        [
         105.338,
         29.459
        ],
        [
         105.334,
         29.441
        ],
        [
         105.387,
         29.455
        ],
        [
         105.387,
         29.455
        ],
        [
         105.399,
         29.439
        ],
        [
         105.373,
         29.421
        ],
        [
         105.426,
         29.419
        ],
        [
         105.442,
         29.401
        ],
        [
         105.418,
         29.352
        ],
        [
         105.42,
         29.311
        ],
        [
         105.465,
         29.323
        ],
        [
         105.459,
         29.289
        ],
        [
         105.513,
         29.283
        ],
        [
         105.521,
         29.265
        ],
        [
         105.558,
         29.279
        ],
        [
         105.632,
         29.28
        ],
        [
         105.648,
         29.253
        ],
        [
         105.695,
         29.287
        ],
        [
         105.712,
         29.219
        ],
        [
         105.704,
         29.177
        ],
        [
         105.729,
         29.134
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.106
        ],
        [
         105.758,
         29.069
        ],
        [
         105.742,
         29.039
        ],
        [
         105.766,
         29.014
        ],
        [
         105.762,
         28.991
        ],
        [
         105.802,
         28.958
        ],
        [
         105.797,
         28.936
        ],
        [
         105.831,
         28.945
        ],
        [
         105.853,
         28.927
        ],
        [
         105.91,
         28.92
        ],
        [
         105.969,
         28.966
        ],
        [
         106.001,
         28.974
        ],
        [
         106.041,
         28.955
        ],
        [
         106.049,
         28.906
        ],
        [
         106.071,
         28.92
        ],
        [
         106.102,
         28.899
        ],
        [
         106.148,
         28.902
        ],
        [
         106.173,
         28.92
        ],
        [
         106.207,
         28.905
        ],
        [
         106.265,
         28.846
        ],
        [
         106.246,
         28.818
        ],
        [
         106.268,
         28.779
        ],
        [
         106.274,
         28.739
        ],
        [
         106.305,
         28.704
        ],
        [
         106.304,
         28.65
        ],
        [
         106.347,
         28.584
        ],
        [
         106.332,
         28.553
        ],
        [
         106.374,
         28.526
        ]
       ]
      ]
     ]
    },
    "n": "重庆市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         103.62,
         29.77
        ],
        [
         103.62,
         28.25
        ],
        [
         103.644,
         28.26
        ],
        [
         103.692,
         28.232
        ],
        [
         103.702,
         28.199
        ],
        [
         103.74,
         28.236
        ],
        [
         103.771,
         28.234
        ],
        [
         103.829,
         28.285
        ],
        [
         103.877,
         28.316
        ],
        [
         103.853,
         28.357
        ],
        [
         103.86,
         28.384
        ],
        [
         103.829,
         28.44
        ],
        [
         103.83,
         28.46
        ],
        [
         103.782,
         28.525
        ],
        [
         103.803,
         28.563
        ],
        [
         103.839,
         28.587
        ],
        [
         103.833,
         28.605
        ],
        [
         103.851,
         28.667
        ],
        [
         103.888,
         28.62
        ],
        [
         103.91,
         28.631
        ],
        [
         103.954,
         28.601
        ],
        [
         104.06,
         28.628
        ],
        [
         104.096,
         28.604
        ],
        [
         104.118,
         28.634
        ],
        [
         104.171,
         28.643
        ],
        [
         104.231,
         28.636
        ],
        [
         104.253,
         28.661
        ],
        [
         104.277,
         28.632
        ],
        [
         104.315,
         28.616
        ],
        [
         104.373,
         28.649
        ],
        [
         104.426,
         28.627
        ],
        [
         104.418,
         28.598
        ],
        [
         104.376,
         28.595
        ],
        [
         104.356,
         28.555
        ],
        [
         104.323,
         28.541
        ],
        [
         104.261,
         28.536
        ],
        [
         104.268,
         28.499
        ],
        [
         104.254,
         28.404
        ],
        [
         104.282,
         28.343
        ],
        [
         104.314,
         28.307
        ],
        [
         104.343,
         28.334
        ],
        [
         104.385,
         28.33
        ],
        [
         104.393,
         28.291
        ],
        [
         104.42,
         28.27
        ],
        [
         104.45,
         28.27
        ],
        [
         104.463,
         28.241
        ],
        [
         104.443,
         28.211
        ],
        [
         104.402,
         28.203
        ],
        [
         104.406,
         28.173
        ],
        [
         104.445,
         28.162
        ],
        [
         104.449,
         28.114
        ],
        [
         104.401,
         28.092
        ],
        [
         104.373,
         28.051
        ],
        [
         104.304,
         28.051
        ],
        [
         104.309,
         28.036
        ],
        [
         104.363,
         28.013
        ],
        [
         104.401,
         27.952
        ],
        [
         104.45,
         27.928
        ],
        [
         104.508,
         27.878
        ],
        [
         104.525,
         27.889
        ],
        [
         104.573,
         27.841
        ],
        [
         104.608,
         27.858
        ],
        [
         104.633,
         27.851
        ],
        [
         104.676,
         27.881
        ],
        [
         104.743,
         27.902
        ],
        [
         104.762,
         27.884
        ],
        [
         104.797,
         27.901
        ],
        [
         104.843,
         27.9
        ],
        [
         104.888,
         27.915
        ],
        [
         104.918,
         27.939
        ],
        [
         104.904,
         27.962
        ],
        [
         104.975,
         28.021
        ],
        [
         104.981,
         28.063
        ],
        [
         105.002,
         28.064
        ],
        [
         105.062,
         28.097
        ],
        [
         105.12,
         28.072
        ],
        [
         105.168,
         28.072
        ],
        [
         105.187,
         28.055
        ],
        [
         105.168,
         28.021
        ],
        [
         105.186,
         27.995
        ],
        [
         105.218,
         27.991
        ],
        [
         105.248,
         28.009
        ],
        [
         105.271,
         27.997
        ],
        [
         105.285,
         27.936
        ],
        [
         105.233,
         27.896
        ],
        [
         105.26,
         27.828
        ],
        [
         105.313,
         27.811
        ],
        [
         105.274,
         27.795
        ],
        [
         105.293,
         27.771
        ],
        [
         105.29,
         27.712
        ],
        [
         105.308,
         27.705
        ],
        [
         105.354,
         27.749
        ],
        [
         105.44,
         27.775
        ],
        [
         105.508,
         27.769
        ],
        [
         105.56,
         27.72
        ],
        [
         105.605,
         27.716
        ],
        [
         105.624,
         27.666
        ],
        [
         105.664,
         27.684
        ],
        [
         105.72,
         27.684
        ],
        [
         105.723,
         27.706
        ],
        [
         105.768,
         27.718
        ],
        [
         105.848,
         27.707
        ],
        [
         105.868,
         27.733
        ],
        [
         105.923,
         27.747
        ],
        [
         105.928,
         27.73
        ],
        [
         105.985,
         27.75
        ],
        [
         106.023,
         27.747
        ],
        [
         106.064,
         27.777
        ],
        [
         106.121,
         27.78
        ],
        [
         106.193,
         27.754
        ],
        [
         106.243,
         27.767
        ],
        [
         106.307,
         27.809
        ],
        [
         106.337,
         27.859
        ],
        [
         106.325,
         27.899
        ],
        [
         106.305,
         27.899
        ],
        [
         106.308,
         27.937
        ],
        [
         106.328,
         27.953
        ],
        [
         106.286,
         28.007
        ],
        [
         106.246,
         28.012
        ],
        [
         106.267,
         28.067
        ],
        [
         106.207,
         28.134
        ],
        [
         106.145,
         28.163
        ],
        [
         106.094,
         28.163
        ],
        [
         105.976,
         28.108
        ],
        [
         105.944,
         28.143
        ],
        [
         105.895,
         28.12
        ],
        [
         105.861,
         28.16
        ],
        [
         105.89,
         28.238
        ],
        [
         105.848,
         28.256
        ],
        [
         105.824,
         28.306
        ],
        [
         105.787,
         28.336
        ],
        [
         105.765,
         28.308
        ],
        [
         105.765,
         28.308
        ],
        [
         105.738,
         28.303
        ],
        [
         105.73,
         28.272
        ],
        [
         105.689,
         28.284
        ],
        [
         105.64,
         28.324
        ],
        [
         105.655,
         28.363
        ],
        [
         105.644,
         28.431
        ],
        [
         105.613,
         28.439
        ],
        [
         105.624,
         28.518
        ],
        [
         105.683,
         28.534
        ],
        [
         105.693,
         28.589
        ],
        [
         105.713,
         28.587
        ],
        [
         105.745,
         28.617
        ],
        [
         105.757,
         28.59
        ],
        [
         105.784,
         28.611
        ],
        [
         105.808,
         28.6
        ],
        [
         105.885,
         28.595
        ],
        [
         105.89,
         28.671
        ],
        [
         105.938,
         28.687
        ],
        [
         105.967,
         28.761
        ],
        [
         106.001,
         28.744
        ],
        [
         106.031,
         28.695
        ],
        [
         106.086,
         28.682
        ],
        [
         106.103,
         28.636
        ],
        [
         106.148,
         28.643
        ],
        [
         106.171,
         28.629
        ],
        [
         106.185,
         28.589
        ],
        [
         106.255,
         28.539
        ],
        [
         106.293,
         28.537
        ],
        [
         106.305,
         28.505
        ],
        [
         106.349,
         28.474
        ],
        [
         106.379,
         28.48
        ],
        [
         106.374,
         28.526
        ],
        [
         106.332,
         28.553
        ],
        [
         106.347,
         28.584
        ],
        [
         106.304,
         28.65
        ],
        [
         106.305,
         28.704
        ],
        [
         106.274,
         28.739
        ],
        [
         106.268,
         28.779
        ],
        [
         106.246,
         28.818
        ],
        [
         106.265,
         28.846
        ],
        [
         106.207,
         28.905
        ],
        [
         106.173,
         28.92
        ],
        [
         106.148,
         28.902
        ],
        [
         106.102,
         28.899
        ],
        [
         106.071,
         28.92
        ],
        [
         106.049,
         28.906
        ],
        [
         106.041,
         28.955
        ],
        [
         106.001,
         28.974
        ],
        [
         105.969,
         28.966
        ],
        [
         105.91,
         28.92
        ],
        [
         105.853,
         28.927
        ],
        [
         105.831,
         28.945
        ],
        [
         105.797,
         28.936
        ],
        [
         105.802,
         28.958
        ],
        [
         105.762,
         28.991
        ],
        [
         105.766,
         29.014
        ],
        [
         105.742,
         29.039
        ],
        [
         105.758,
         29.069
        ],
        [
         105.729,
         29.106
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.134
        ],
        [
         105.704,
         29.177
        ],
        [
         105.712,
         29.219
        ],
        [
         105.695,
         29.287
        ],
        [
         105.648,
         29.253
        ],
        [
         105.632,
         29.28
        ],
        [
         105.558,
         29.279
        ],
        [
         105.521,
         29.265
        ],
        [
         105.513,
         29.283
        ],
        [
         105.459,
         29.289
        ],
        [
         105.465,
         29.323
        ],
        [
         105.42,
         29.311
        ],
        [
         105.418,
         29.352
        ],
        [
         105.442,
         29.401
        ],
        [
         105.426,
         29.419
        ],
        [
         105.373,
         29.421
        ],
        [
         105.399,
         29.439
        ],
        [
         105.387,
         29.455
        ],
        [
         105.387,
         29.455
        ],
        [
         105.334,
         29.441
        ],
        [
         105.338,
         29.459
        ],
        [
         105.305,
         29.532
        ],
        [
         105.297,
         29.571
        ],
        [
         105.333,
         29.592
        ],
        [
         105.348,
         29.622
        ],
        [
         105.381,
         29.628
        ],
        [
         105.42,
         29.688
        ],
        [
         105.477,
         29.675
        ],
        [
         105.482,
         29.718
        ],
        [
         105.529,
         29.708
        ],
        [
         105.575,
         29.744
        ],
        [
         105.578,
         29.77
        ],
        [
         103.62,
         29.77
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         108.5,
         28.627
        ],
        [
         108.439,
         28.634
        ],
        [
         108.332,
         28.679
        ],
        [
         108.347,
         28.736
        ],
        [
         108.385,
         28.772
        ],
        [
         108.386,
         28.803
        ],
        [
         108.353,
         28.816
        ],
        [
         108.347,
         28.86
        ],
        [
         108.358,
         28.893
        ],
        [
         108.345,
         28.943
        ],
        [
         108.32,
         28.961
        ],
        [
         108.298,
         29.046
        ],
        [
         108.307,
         29.079
        ],
        [
         108.278,
         29.092
        ],
        [
         108.256,
         29.04
        ],
        [
         108.193,
         29.072
        ],
        [
         108.15,
         29.053
        ],
        [
         108.071,
         29.086
        ],
        [
         108.026,
         29.04
        ],
        [
         107.926,
         29.032
        ],
        [
         107.909,
         29.007
        ],
        [
         107.883,
         29.006
        ],
        [
         107.867,
         28.96
        ],
        [
         107.81,
         28.984
        ],
        [
         107.824,
         29.034
        ],
        [
         107.785,
         29.048
        ],
        [
         107.811,
         29.139
        ],
        [
         107.749,
         29.2
        ],
        [
         107.701,
         29.141
        ],
        [
         107.66,
         29.163
        ],
        [
         107.606,
         29.165
        ],
        [
         107.589,
         29.15
        ],
        [
         107.571,
         29.218
        ],
        [
         107.487,
         29.174
        ],
        [
         107.441,
         29.204
        ],
        [
         107.402,
         29.185
        ],
        [
         107.409,
         29.138
        ],
        [
         107.428,
         29.129
        ],
        [
         107.412,
         29.095
        ],
        [
         107.37,
         29.092
        ],
        [
         107.396,
         29.041
        ],
        [
         107.364,
         29.009
        ],
        [
         107.397,
         28.994
        ],
        [
         107.413,
         28.96
        ],
        [
         107.441,
         28.944
        ],
        [
         107.414,
         28.912
        ],
        [
         107.384,
         28.849
        ],
        [
         107.34,
         28.846
        ],
        [
         107.328,
         28.811
        ],
        [
         107.261,
         28.793
        ],
        [
         107.247,
         28.762
        ],
        [
         107.219,
         28.773
        ],
        [
         107.211,
         28.818
        ],
        [
         107.227,
         28.836
        ],
        [
         107.195,
         28.838
        ],
        [
         107.207,
         28.869
        ],
        [
         107.142,
         28.888
        ],
        [
         107.016,
         28.883
        ],
        [
         107.019,
         28.862
        ],
        [
         106.984,
         28.851
        ],
        [
         106.989,
         28.776
        ],
        [
         106.952,
         28.767
        ],
        [
         106.923,
         28.81
        ],
        [
         106.872,
         28.777
        ],
        [
         106.846,
         28.781
        ],
        [
         106.824,
         28.756
        ],
        [
         106.866,
         28.69
        ],
        [
         106.889,
         28.696
        ],
        [
         106.867,
         28.625
        ],
        [
         106.831,
         28.623
        ],
        [
         106.807,
         28.589
        ],
        [
         106.785,
         28.627
        ],
        [
         106.757,
         28.607
        ],
        [
         106.778,
         28.563
        ],
        [
         106.738,
         28.555
        ],
        [
         106.726,
         28.518
        ],
        [
         106.747,
         28.467
        ],
        [
         106.708,
         28.451
        ],
        [
         106.698,
         28.477
        ],
        [
         106.632,
         28.504
        ],
        [
         106.565,
         28.485
        ],
        [
         106.568,
         28.524
        ],
        [
         106.615,
         28.549
        ],
        [
         106.607,
         28.593
        ],
        [
         106.637,
         28.623
        ],
        [
         106.618,
         28.645
        ],
        [
         106.652,
         28.649
        ],
        [
         106.618,
         28.667
        ],
        [
         106.617,
         28.691
        ],
        [
         106.588,
         28.692
        ],
        [
         106.561,
         28.719
        ],
        [
         106.562,
         28.756
        ],
        [
         106.474,
         28.833
        ],
        [
         106.453,
         28.817
        ],
        [
         106.462,
         28.761
        ],
        [
         106.492,
         28.742
        ],
        [
         106.528,
         28.678
        ],
        [
         106.503,
         28.661
        ],
        [
         106.493,
         28.591
        ],
        [
         106.467,
         28.586
        ],
        [
         106.505,
         28.545
        ],
        [
         106.477,
         28.53
        ],
        [
         106.403,
         28.57
        ],
        [
         106.374,
         28.526
        ],
        [
         106.379,
         28.48
        ],
        [
         106.349,
         28.474
        ],
        [
         106.305,
         28.505
        ],
        [
         106.293,
         28.537
        ],
        [
         106.255,
         28.539
        ],
        [
         106.185,
         28.589
        ],
        [
         106.171,
         28.629
        ],
        [
         106.148,
         28.643
        ],
        [
         106.103,
         28.636
        ],
        [
         106.086,
         28.682
        ],
        [
         106.031,
         28.695
        ],
        [
         106.001,
         28.744
        ],
        [
         105.967,
         28.761
        ],
        [
         105.938,
         28.687
        ],
        [
         105.89,
         28.671
        ],
        [
         105.885,
         28.595
        ],
        [
         105.808,
         28.6
        ],
        [
         105.784,
         28.611
        ],
        [
         105.757,
         28.59
        ],
        [
         105.745,
         28.617
        ],
        [
         105.713,
         28.587
        ],
        [
         105.693,
         28.589
        ],
        [
         105.683,
         28.534
        ],
        [
         105.624,
         28.518
        ],
        [
         105.613,
         28.439
        ],
        [
         105.644,
         28.431
        ],
        [
         105.655,
         28.363
        ],
        [
         105.64,
         28.324
        ],
        [
         105.689,
         28.284
        ],
        [
         105.73,
         28.272
        ],
        [
         105.738,
         28.303
        ],
        [
         105.765,
         28.308
        ],
        [
         105.765,
         28.308
        ],
        [
         105.787,
         28.336
        ],
        [
         105.824,
         28.306
        ],
        [
         105.848,
         28.256
        ],
        [
         105.89,
         28.238
        ],
        [
         105.861,
         28.16
        ],
        [
         105.895,
         28.12
        ],
        [
         105.944,
         28.143
        ],
        [
         105.976,
         28.108
        ],
        [
         106.094,
         28.163
        ],
        [
         106.145,
         28.163
        ],
        [
         106.207,
         28.134
        ],
        [
         106.267,
         28.067
        ],
        [
         106.246,
         28.012
        ],
        [
         106.286,
         28.007
        ],
        [
         106.328,
         27.953
        ],
        [
         106.308,
         27.937
        ],
        [
         106.305,
         27.899
        ],
        [
         106.325,
         27.899
        ],
        [
         106.337,
         27.859
        ],
        [
         106.307,
         27.809
        ],
        [
         106.243,
         27.767
        ],
        [
         106.193,
         27.754
        ],
        [
         106.121,
         27.78
        ],
        [
         106.064,
         27.777
        ],
        [
         106.023,
         27.747
        ],
        [
         105.985,
         27.75
        ],
        [
         105.928,
         27.73
        ],
        [
         105.923,
         27.747
        ],
        [
         105.868,
         27.733
        ],
        [
         105.848,
         27.707
        ],
        [
         105.768,
         27.718
        ],
        [
         105.723,
         27.706
        ],
        [
         105.72,
         27.684
        ],
        [
         105.664,
         27.684
        ],
        [
         105.624,
         27.666
        ],
        [
         105.605,
         27.716
        ],
        [
         105.56,
         27.72
        ],
        [
         105.508,
         27.769
        ],
        [
         105.44,
         27.775
        ],
        [
         105.354,
         27.749
        ],
        [
         105.308,
         27.705
        ],
        [
         105.296,
         27.632
        ],
        [
         105.305,
         27.612
        ],
        [
         105.256,
         27.582
        ],
        [
         105.232,
         27.547
        ],
        [
         105.26,
         27.515
        ],
        [
         105.234,
         27.489
        ],
        [
         105.233,
         27.437
        ],
        [
         105.183,
         27.367
        ],
        [
         105.184,
         27.393
        ],
        [
         105.121,
         27.418
        ],
        [
         105.068,
         27.418
        ],
        [
         105.011,
         27.379
        ],
        [
         104.913,
         27.327
        ],
        [
         104.872,
         27.291
        ],
        [
         104.852,
         27.299
        ],
        [
         104.857,
         27.332
        ],
        [
         104.825,
         27.353
        ],
        [
         104.771,
         27.317
        ],
        [
         104.754,
         27.346
        ],
        [
         104.612,
         27.307
        ],
        [
         104.57,
         27.332
        ],
        [
         104.54,
         27.328
        ],
        [
         104.497,
         27.415
        ],
        [
         104.467,
         27.414
        ],
        [
         104.363,
         27.468
        ],
        [
         104.309,
         27.407
        ],
        [
         104.296,
         27.374
        ],
        [
         104.248,
         27.337
        ],
        [
         104.249,
         27.292
        ],
        [
         104.211,
         27.297
        ],
        [
         104.173,
         27.263
        ],
        [
         104.114,
         27.338
        ],
        [
         104.084,
         27.331
        ],
        [
         104.017,
         27.384
        ],
        [
         104.015,
         27.429
        ],
        [
         103.956,
         27.425
        ],
        [
         103.932,
         27.444
        ],
        [
         103.905,
         27.386
        ],
        [
         103.903,
         27.348
        ],
        [
         103.874,
         27.331
        ],
        [
         103.866,
         27.282
        ],
        [
         103.8,
         27.265
        ],
        [
         103.802,
         27.25
        ],
        [
         103.749,
         27.21
        ],
        [
         103.696,
         27.126
        ],
        [
         103.633,
         27.121
        ],
        [
         103.621,
         27.097
        ],
        [
         103.653,
         27.093
        ],
        [
         103.66,
         27.066
        ],
        [
         103.62,
         27.078
        ],
        [
         103.62,
         27.04
        ],
        [
         103.624,
         27.035
        ],
        [
         103.623,
         27.007
        ],
        [
         103.675,
         27.052
        ],
        [
         103.705,
         27.049
        ],
        [
         103.732,
         27.019
        ],
        [
         103.754,
         26.964
        ],
        [
         103.775,
         26.951
        ],
        [
         103.763,
         26.906
        ],
        [
         103.779,
         26.874
        ],
        [
         103.722,
         26.851
        ],
        [
         103.706,
         26.795
        ],
        [
         103.725,
         26.743
        ],
        [
         103.773,
         26.717
        ],
        [
         103.759,
         26.689
        ],
        [
         103.749,
         26.624
        ],
        [
         103.763,
         26.585
        ],
        [
         103.816,
         26.552
        ],
        [
         103.82,
         26.53
        ],
        [
         103.866,
         26.512
        ],
        [
         103.953,
         26.521
        ],
        [
         104.009,
         26.512
        ],
        [
         104.068,
         26.515
        ],
        [
         104.068,
         26.573
        ],
        [
         104.121,
         26.638
        ],
        [
         104.161,
         26.647
        ],
        [
         104.222,
         26.62
        ],
        [
         104.269,
         26.618
        ],
        [
         104.275,
         26.634
        ],
        [
         104.313,
         26.613
        ],
        [
         104.354,
         26.621
        ],
        [
         104.398,
         26.686
        ],
        [
         104.424,
         26.709
        ],
        [
         104.468,
         26.644
        ],
        [
         104.459,
         26.603
        ],
        [
         104.488,
         26.58
        ],
        [
         104.557,
         26.59
        ],
        [
         104.58,
         26.568
        ],
        [
         104.571,
         26.525
        ],
        [
         104.599,
         26.521
        ],
        [
         104.639,
         26.478
        ],
        [
         104.632,
         26.452
        ],
        [
         104.666,
         26.434
        ],
        [
         104.665,
         26.398
        ],
        [
         104.684,
         26.377
        ],
        [
         104.66,
         26.335
        ],
        [
         104.593,
         26.318
        ],
        [
         104.543,
         26.253
        ],
        [
         104.549,
         26.227
        ],
        [
         104.519,
         26.166
        ],
        [
         104.528,
         26.114
        ],
        [
         104.5,
         26.071
        ],
        [
         104.46,
         26.086
        ],
        [
         104.471,
         26.009
        ],
        [
         104.439,
         25.928
        ],
        [
         104.415,
         25.91
        ],
        [
         104.442,
         25.869
        ],
        [
         104.424,
         25.842
        ],
        [
         104.398,
         25.762
        ],
        [
         104.371,
         25.73
        ],
        [
         104.329,
         25.761
        ],
        [
         104.31,
         25.648
        ],
        [
         104.333,
         25.599
        ],
        [
         104.389,
         25.596
        ],
        [
         104.429,
         25.576
        ],
        [
         104.436,
         25.521
        ],
        [
         104.419,
         25.499
        ],
        [
         104.435,
         25.472
        ],
        [
         104.45,
         25.495
        ],
        [
         104.483,
         25.495
        ],
        [
         104.524,
         25.527
        ],
        [
         104.557,
         25.525
        ],
        [
         104.543,
         25.401
        ],
        [
         104.567,
         25.403
        ],
        [
         104.616,
         25.365
        ],
        [
         104.646,
         25.357
        ],
        [
         104.64,
         25.296
        ],
        [
         104.69,
         25.296
        ],
        [
         104.736,
         25.268
        ],
        [
         104.816,
         25.263
        ],
        [
         104.827,
         25.236
        ],
        [
         104.807,
         25.224
        ],
        [
         104.823,
         25.17
        ],
        [
         104.802,
         25.164
        ],
        [
         104.754,
         25.214
        ],
        [
         104.724,
         25.195
        ],
        [
         104.732,
         25.168
        ],
        [
         104.695,
         25.122
        ],
        [
         104.686,
         25.078
        ],
        [
         104.62,
         25.061
        ],
        [
         104.685,
         25.054
        ],
        [
         104.713,
         24.996
        ],
        [
         104.664,
         24.965
        ],
        [
         104.636,
         24.904
        ],
        [
         104.587,
         24.873
        ],
        [
         104.54,
         24.814
        ],
        [
         104.54,
         24.8
        ],
        [
         105.031,
         24.8
        ],
        [
         105.027,
         24.816
        ],
        [
         105.039,
         24.873
        ],
        [
         105.078,
         24.918
        ],
        [
         105.096,
         24.929
        ],
        [
         105.131,
         24.96
        ],
        [
         105.157,
         24.959
        ],
        [
         105.178,
         24.985
        ],
        [
         105.213,
         24.996
        ],
        [
         105.252,
         24.967
        ],
        [
         105.268,
         24.929
        ],
        [
         105.334,
         24.927
        ],
        [
         105.366,
         24.943
        ],
        [
         105.428,
         24.931
        ],
        [
         105.457,
         24.871
        ],
        [
         105.493,
         24.833
        ],
        [
         105.497,
         24.809
        ],
        [
         105.556,
         24.8
        ],
        [
         105.587,
         24.8
        ],
        [
         105.608,
         24.804
        ],
        [
         105.609,
         24.8
        ],
        [
         106.188,
         24.8
        ],
        [
         106.206,
         24.851
        ],
        [
         106.198,
         24.886
        ],
        [
         106.145,
         24.954
        ],
        [
         106.191,
         24.953
        ],
        [
         106.216,
         24.982
        ],
        [
         106.254,
         24.971
        ],
        [
         106.305,
         24.974
        ],
        [
         106.333,
         24.988
        ],
        [
         106.442,
         25.019
        ],
        [
         106.45,
         25.033
        ],
        [
         106.52,
         25.054
        ],
        [
         106.551,
         25.083
        ],
        [
         106.591,
         25.088
        ],
        [
         106.64,
         25.133
        ],
        [
         106.645,
         25.165
        ],
        [
         106.691,
         25.179
        ],
        [
         106.732,
         25.162
        ],
        [
         106.765,
         25.183
        ],
        [
         106.788,
         25.171
        ],
        [
         106.853,
         25.187
        ],
        [
         106.888,
         25.182
        ],
        [
         106.904,
         25.232
        ],
        [
         106.933,
         25.251
        ],
        [
         106.976,
         25.233
        ],
        [
         107.014,
         25.276
        ],
        [
         107.013,
         25.353
        ],
        [
         106.988,
         25.359
        ],
        [
         106.964,
         25.438
        ],
        [
         106.997,
         25.443
        ],
        [
         107.016,
         25.496
        ],
        [
         107.067,
         25.509
        ],
        [
         107.064,
         25.559
        ],
        [
         107.186,
         25.579
        ],
        [
         107.205,
         25.608
        ],
        [
         107.229,
         25.605
        ],
        [
         107.232,
         25.557
        ],
        [
         107.264,
         25.543
        ],
        [
         107.337,
         25.461
        ],
        [
         107.308,
         25.433
        ],
        [
         107.318,
         25.402
        ],
        [
         107.359,
         25.394
        ],
        [
         107.376,
         25.412
        ],
        [
         107.421,
         25.393
        ],
        [
         107.409,
         25.347
        ],
        [
         107.433,
         25.289
        ],
        [
         107.481,
         25.3
        ],
        [
         107.49,
         25.277
        ],
        [
         107.472,
         25.214
        ],
        [
         107.513,
         25.209
        ],
        [
         107.577,
         25.257
        ],
        [
         107.6,
         25.251
        ],
        [
         107.632,
         25.31
        ],
        [
         107.66,
         25.316
        ],
        [
         107.662,
         25.259
        ],
        [
         107.696,
         25.22
        ],
        [
         107.701,
         25.194
        ],
        [
         107.742,
         25.24
        ],
        [
         107.762,
         25.229
        ],
        [
         107.76,
         25.188
        ],
        [
         107.789,
         25.155
        ],
        [
         107.763,
         25.125
        ],
        [
         107.839,
         25.116
        ],
        [
         107.872,
         25.141
        ],
        [
         107.928,
         25.156
        ],
        [
         108.002,
         25.197
        ],
        [
         108.081,
         25.194
        ],
        [
         108.115,
         25.21
        ],
        [
         108.143,
         25.27
        ],
        [
         108.152,
         25.324
        ],
        [
         108.143,
         25.391
        ],
        [
         108.193,
         25.405
        ],
        [
         108.162,
         25.445
        ],
        [
         108.193,
         25.459
        ],
        [
         108.252,
         25.43
        ],
        [
         108.241,
         25.462
        ],
        [
         108.281,
         25.48
        ],
        [
         108.308,
         25.526
        ],
        [
         108.349,
         25.536
        ],
        [
         108.36,
         25.513
        ],
        [
         108.4,
         25.491
        ],
        [
         108.419,
         25.443
        ],
        [
         108.472,
         25.459
        ],
        [
         108.5,
         25.436
        ],
        [
         108.5,
         28.627
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         105.308,
         27.705
        ],
        [
         105.29,
         27.712
        ],
        [
         105.293,
         27.771
        ],
        [
         105.274,
         27.795
        ],
        [
         105.313,
         27.811
        ],
        [
         105.26,
         27.828
        ],
        [
         105.233,
         27.896
        ],
        [
         105.285,
         27.936
        ],
        [
         105.271,
         27.997
        ],
        [
         105.248,
         28.009
        ],
        [
         105.218,
         27.991
        ],
        [
         105.186,
         27.995
        ],
        [
         105.168,
         28.021
        ],
        [
         105.187,
         28.055
        ],
        [
         105.168,
         28.072
        ],
        [
         105.12,
         28.072
        ],
        [
         105.062,
         28.097
        ],
        [
         105.002,
         28.064
        ],
        [
         104.981,
         28.063
        ],
        [
         104.975,
         28.021
        ],
        [
         104.904,
         27.962
        ],
        [
         104.918,
         27.939
        ],
        [
         104.888,
         27.915
        ],
        [
         104.843,
         27.9
        ],
        [
         104.797,
         27.901
        ],
        [
         104.762,
         27.884
        ],
        [
         104.743,
         27.902
        ],
        [
         104.676,
         27.881
        ],
        [
         104.633,
         27.851
        ],
        [
         104.608,
         27.858
        ],
        [
         104.573,
         27.841
        ],
        [
         104.525,
         27.889
        ],
        [
         104.508,
         27.878
        ],
        [
         104.45,
         27.928
        ],
        [
         104.401,
         27.952
        ],
        [
         104.363,
         28.013
        ],
        [
         104.309,
         28.036
        ],
        [
         104.304,
         28.051
        ],
        [
         104.373,
         28.051
        ],
        [
         104.401,
         28.092
        ],
        [
         104.449,
         28.114
        ],
        [
         104.445,
         28.162
        ],
        [
         104.406,
         28.173
        ],
        [
         104.402,
         28.203
        ],
        [
         104.443,
         28.211
        ],
        [
         104.463,
         28.241
        ],
        [
         104.45,
         28.27
        ],
        [
         104.42,
         28.27
        ],
        [
         104.393,
         28.291
        ],
        [
         104.385,
         28.33
        ],
        [
         104.343,
         28.334
        ],
        [
         104.314,
         28.307
        ],
        [
         104.282,
         28.343
        ],
        [
         104.254,
         28.404
        ],
        [
         104.268,
         28.499
        ],
        [
         104.261,
         28.536
        ],
        [
         104.323,
         28.541
        ],
        [
         104.356,
         28.555
        ],
        [
         104.376,
         28.595
        ],
        [
         104.418,
         28.598
        ],
        [
         104.426,
         28.627
        ],
        [
         104.373,
         28.649
        ],
        [
         104.315,
         28.616
        ],
        [
         104.277,
         28.632
        ],
        [
         104.253,
         28.661
        ],
        [
         104.231,
         28.636
        ],
        [
         104.171,
         28.643
        ],
        [
         104.118,
         28.634
        ],
        [
         104.096,
         28.604
        ],
        [
         104.06,
         28.628
        ],
        [
         103.954,
         28.601
        ],
        [
         103.91,
         28.631
        ],
        [
         103.888,
         28.62
        ],
        [
         103.851,
         28.667
        ],
        [
         103.833,
         28.605
        ],
        [
         103.839,
         28.587
        ],
        [
         103.803,
         28.563
        ],
        [
         103.782,
         28.525
        ],
        [
         103.83,
         28.46
        ],
        [
         103.829,
         28.44
        ],
        [
         103.86,
         28.384
        ],
        [
         103.853,
         28.357
        ],
        [
         103.877,
         28.316
        ],
        [
         103.829,
         28.285
        ],
        [
         103.771,
         28.234
        ],
        [
         103.74,
         28.236
        ],
        [
         103.702,
         28.199
        ],
        [
         103.692,
         28.232
        ],
        [
         103.644,
         28.26
        ],
        [
         103.62,
         28.25
        ],
        [
         103.62,
         24.8
        ],
        [
         104.54,
         24.8
        ],
        [
         104.54,
         24.814
        ],
        [
         104.587,
         24.873
        ],
        [
         104.636,
         24.904
        ],
        [
         104.664,
         24.965
        ],
        [
         104.713,
         24.996
        ],
        [
         104.685,
         25.054
        ],
        [
         104.62,
         25.061
        ],
        [
         104.686,
         25.078
        ],
        [
         104.695,
         25.122
        ],
        [
         104.732,
         25.168
        ],
        [
         104.724,
         25.195
        ],
        [
         104.754,
         25.214
        ],
        [
         104.802,
         25.164
        ],
        [
         104.823,
         25.17
        ],
        [
         104.807,
         25.224
        ],
        [
         104.827,
         25.236
        ],
        [
         104.816,
         25.263
        ],
        [
         104.736,
         25.268
        ],
        [
         104.69,
         25.296
        ],
        [
         104.64,
         25.296
        ],
        [
         104.646,
         25.357
        ],
        [
         104.616,
         25.365
        ],
        [
         104.567,
         25.403
        ],
        [
         104.543,
         25.401
        ],
        [
         104.557,
         25.525
        ],
        [
         104.524,
         25.527
        ],
        [
         104.483,
         25.495
        ],
        [
         104.45,
         25.495
        ],
        [
         104.435,
         25.472
        ],
        [
         104.419,
         25.499
        ],
        [
         104.436,
         25.521
        ],
        [
         104.429,
         25.576
        ],
        [
         104.389,
         25.596
        ],
        [
         104.333,
         25.599
        ],
        [
         104.31,
         25.648
        ],
        [
         104.329,
         25.761
        ],
        [
         104.371,
         25.73
        ],
        [
         104.398,
         25.762
        ],
        [
         104.424,
         25.842
        ],
        [
         104.442,
         25.869
        ],
        [
         104.415,
         25.91
        ],
        [
         104.439,
         25.928
        ],
        [
         104.471,
         26.009
        ],
        [
         104.46,
         26.086
        ],
        [
         104.5,
         26.071
        ],
        [
         104.528,
         26.114
        ],
        [
         104.519,
         26.166
        ],
        [
         104.549,
         26.227
        ],
        [
         104.543,
         26.253
        ],
        [
         104.593,
         26.318
        ],
        [
         104.66,
         26.335
        ],
        [
         104.684,
         26.377
        ],
        [
         104.665,
         26.398
        ],
        [
         104.666,
         26.434
        ],
        [
         104.632,
         26.452
        ],
        [
         104.639,
         26.478
        ],
        [
         104.599,
         26.521
        ],
        [
         104.571,
         26.525
        ],
        [
         104.58,
         26.568
        ],
        [
         104.557,
         26.59
        ],
        [
         104.488,
         26.58
        ],
        [
         104.459,
         26.603
        ],
        [
         104.468,
         26.644
        ],
        [
         104.424,
         26.709
        ],
        [
         104.398,
         26.686
        ],
        [
         104.354,
         26.621
        ],
        [
         104.313,
         26.613
        ],
        [
         104.275,
         26.634
        ],
        [
         104.269,
         26.618
        ],
        [
         104.222,
         26.62
        ],
        [
         104.161,
         26.647
        ],
        [
         104.121,
         26.638
        ],
        [
         104.068,
         26.573
        ],
        [
         104.068,
         26.515
        ],
        [
         104.009,
         26.512
        ],
        [
         103.953,
         26.521
        ],
        [
         103.866,
         26.512
        ],
        [
         103.82,
         26.53
        ],
        [
         103.816,
         26.552
        ],
        [
         103.763,
         26.585
        ],
        [
         103.749,
         26.624
        ],
        [
         103.759,
         26.689
        ],
        [
         103.773,
         26.717
        ],
        [
         103.725,
         26.743
        ],
        [
         103.706,
         26.795
        ],
        [
         103.722,
         26.851
        ],
        [
         103.779,
         26.874
        ],
        [
         103.763,
         26.906
        ],
        [
         103.775,
         26.951
        ],
        [
         103.754,
         26.964
        ],
        [
         103.732,
         27.019
        ],
        [
         103.705,
         27.049
        ],
        [
         103.675,
         27.052
        ],
        [
         103.623,
         27.007
        ],
        [
         103.624,
         27.035
        ],
        [
         103.62,
         27.04
        ],
        [
         103.62,
         27.078
        ],
        [
         103.66,
         27.066
        ],
        [
         103.653,
         27.093
        ],
        [
         103.621,
         27.097
        ],
        [
         103.633,
         27.121
        ],
        [
         103.696,
         27.126
        ],
        [
         103.749,
         27.21
        ],
        [
         103.802,
         27.25
        ],
        [
         103.8,
         27.265
        ],
        [
         103.866,
         27.282
        ],
        [
         103.874,
         27.331
        ],
        [
         103.903,
         27.348
        ],
        [
         103.905,
         27.386
        ],
        [
         103.932,
         27.444
        ],
        [
         103.956,
         27.425
        ],
        [
         104.015,
         27.429
        ],
        [
         104.017,
         27.384
        ],
        [
         104.084,
         27.331
        ],
        [
         104.114,
         27.338
        ],
        [
         104.173,
         27.263
        ],
        [
         104.211,
         27.297
        ],
        [
         104.249,
         27.292
        ],
        [
         104.248,
         27.337
        ],
        [
         104.296,
         27.374
        ],
        [
         104.309,
         27.407
        ],
        [
         104.363,
         27.468
        ],
        [
         104.467,
         27.414
        ],
        [
         104.497,
         27.415
        ],
        [
         104.54,
         27.328
        ],
        [
         104.57,
         27.332
        ],
        [
         104.612,
         27.307
        ],
        [
         104.754,
         27.346
        ],
        [
         104.771,
         27.317
        ],
        [
         104.825,
         27.353
        ],
        [
         104.857,
         27.332
        ],
        [
         104.852,
         27.299
        ],
        [
         104.872,
         27.291
        ],
        [
         104.913,
         27.327
        ],
        [
         105.011,
         27.379
        ],
        [
         105.068,
         27.418
        ],
        [
         105.121,
         27.418
        ],
        [
         105.184,
         27.393
        ],
        [
         105.183,
         27.367
        ],
        [
         105.233,
         27.437
        ],
        [
         105.234,
         27.489
        ],
        [
         105.26,
         27.515
        ],
        [
         105.232,
         27.547
        ],
        [
         105.256,
         27.582
        ],
        [
         105.305,
         27.612
        ],
        [
         105.296,
         27.632
        ],
        [
         105.308,
         27.705
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
       103.851,
       28.668
      ],
      [
       103.942,
       28.627
      ],
      [
       104.094,
       28.621
      ],
      [
       104.335,
       28.636
      ],
      [
       104.492,
       28.679
      ],
      [
       104.564,
       28.749
      ],
      [
       104.62,
       28.779
      ],
      [
       104.65,
       28.795
      ],
      [
       104.753,
       28.817
      ],
      [
       104.833,
       28.816
      ],
      [
       104.893,
       28.79
      ],
      [
       104.939,
       28.793
      ],
      [
       104.985,
       28.79
      ],
      [
       105.012,
       28.778
      ],
      [
       105.043,
       28.746
      ],
      [
       105.091,
       28.724
      ],
      [
       105.128,
       28.732
      ],
      [
       105.153,
       28.769
      ],
      [
       105.209,
       28.786
      ],
      [
       105.296,
       28.785
      ],
      [
       105.351,
       28.805
      ],
      [
       105.373,
       28.848
      ],
      [
       105.424,
       28.877
      ],
      [
       105.503,
       28.892
      ],
      [
       105.547,
       28.915
      ],
      [
       105.577,
       28.922
      ],
      [
       105.619,
       28.906
      ],
      [
       105.673,
       28.898
      ],
      [
       105.741,
       28.918
      ],
      [
       105.785,
       28.906
      ],
      [
       105.803,
       28.862
      ],
      [
       105.829,
       28.839
      ],
      [
       105.861,
       28.837
      ],
      [
       105.882,
       28.852
      ],
      [
       105.89,
       28.884
      ],
      [
       105.876,
       28.915
      ],
      [
       105.838,
       28.943
      ],
      [
       105.834,
       28.98
      ],
      [
       105.865,
       29.025
      ],
      [
       105.946,
       29.058
      ],
      [
       106.076,
       29.08
      ],
      [
       106.146,
       29.125
      ],
      [
       106.157,
       29.195
      ],
      [
       106.253,
       29.274
      ],
      [
       106.434,
       29.363
      ],
      [
       106.518,
       29.426
      ],
      [
       106.505,
       29.462
      ],
      [
       106.523,
       29.516
      ],
      [
       106.572,
       29.589
      ],
      [
       106.618,
       29.612
      ],
      [
       106.66,
       29.586
      ],
      [
       106.721,
       29.578
      ],
      [
       106.802,
       29.588
      ],
      [
       106.894,
       29.65
      ],
      [
       106.998,
       29.763
      ],
      [
       107.023,
       29.77
      ],
      [
       107.101,
       29.77
      ],
      [
       107.15,
       29.721
      ],
      [
       107.237,
       29.699
      ],
      [
       107.345,
       29.718
      ],
      [
       107.417,
       29.77
      ]
     ]
    },
    "n": "Chang Jiang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       103.62,
       29.237
      ],
      [
       103.644,
       29.236
      ],
      [
       103.655,
       29.289
      ],
      [
       103.639,
       29.321
      ],
      [
       103.62,
       29.327
      ],
      [
       103.62,
       29.477
      ],
      [
       103.642,
       29.495
      ],
      [
       103.677,
       29.525
      ],
      [
       103.719,
       29.537
      ]
     ]
    },
    "n": "Dadu"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       106.944,
       25.225
      ],
      [
       106.963,
       25.223
      ],
      [
       106.974,
       25.2
      ],
      [
       106.982,
       25.134
      ],
      [
       107.019,
       25.061
      ],
      [
       107.063,
       25.029
      ],
      [
       107.156,
       25.009
      ],
      [
       107.277,
       24.875
      ],
      [
       107.313,
       24.8
      ]
     ]
    },
    "n": "Hongshui"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        103.62,
        28.262
       ],
       [
        103.626,
        28.264
       ],
       [
        103.663,
        28.257
       ],
       [
        103.702,
        28.229
       ],
       [
        103.762,
        28.243
       ],
       [
        103.841,
        28.298
       ],
       [
        103.859,
        28.377
       ],
       [
        103.816,
        28.48
       ],
       [
        103.809,
        28.565
       ],
       [
        103.851,
        28.668
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
       103.719,
       29.537
      ],
      [
       103.767,
       29.517
      ],
      [
       103.832,
       29.386
      ],
      [
       103.866,
       29.316
      ],
      [
       103.857,
       29.29
      ],
      [
       103.926,
       29.224
      ],
      [
       104.145,
       29.062
      ],
      [
       104.251,
       28.996
      ],
      [
       104.291,
       28.948
      ],
      [
       104.302,
       28.896
      ],
      [
       104.38,
       28.849
      ],
      [
       104.62,
       28.779
      ]
     ]
    },
    "n": "Min"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       103.922,
       25.879
      ],
      [
       103.855,
       25.801
      ],
      [
       103.836,
       25.725
      ],
      [
       103.846,
       25.574
      ],
      [
       103.883,
       25.341
      ],
      [
       103.867,
       25.219
      ],
      [
       103.81,
       25.129
      ],
      [
       103.713,
       25.048
      ],
      [
       103.62,
       25.003
      ],
      [
       104.995,
       24.8
      ],
      [
       105.056,
       24.85
      ],
      [
       105.144,
       24.956
      ],
      [
       105.208,
       24.991
      ],
      [
       105.247,
       24.956
      ],
      [
       105.308,
       24.937
      ],
      [
       105.39,
       24.935
      ],
      [
       105.45,
       24.905
      ],
      [
       105.489,
       24.847
      ],
      [
       105.566,
       24.8
      ],
      [
       106.162,
       24.8
      ],
      [
       106.188,
       24.862
      ],
      [
       106.166,
       24.928
      ],
      [
       106.231,
       24.979
      ],
      [
       106.381,
       25.017
      ],
      [
       106.509,
       25.07
      ],
      [
       106.614,
       25.139
      ],
      [
       106.742,
       25.189
      ],
      [
       106.874,
       25.215
      ],
      [
       106.944,
       25.225
      ]
     ]
    },
    "n": "Nanpan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        107.505,
        26.338
       ],
       [
        107.501,
        26.239
       ],
       [
        107.519,
        26.191
       ],
       [
        107.558,
        26.164
       ],
       [
        107.61,
        26.167
       ],
       [
        107.708,
        26.218
       ],
       [
        107.78,
        26.358
       ],
       [
        107.8,
        26.432
       ],
       [
        107.793,
        26.485
       ],
       [
        107.826,
        26.53
       ],
       [
        107.9,
        26.564
       ],
       [
        107.959,
        26.617
       ],
       [
        108.005,
        26.688
       ],
       [
        108.072,
        26.753
       ],
       [
        108.159,
        26.812
       ],
       [
        108.251,
        26.839
       ],
       [
        108.348,
        26.835
       ],
       [
        108.396,
        26.817
       ],
       [
        108.396,
        26.785
       ],
       [
        108.453,
        26.725
       ],
       [
        108.5,
        26.689
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   103.62,
   24.8,
   108.5,
   29.77
  ]
 }
};
