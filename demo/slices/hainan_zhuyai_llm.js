// 本文件由 tools/build.py 自动生成（切片 hainan_zhuyai_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hainan_zhuyai_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hainan_zhuyai_llm"] = {
 "meta": {
  "kind": "frontier",
  "region": "exchange",
  "province": "hainan",
  "title": "汉置珠崖儋耳二郡（前110–前46）",
  "dossier_label": "hainan_zhuyai_llm",
  "subtitle": "",
  "primary_place": "hepu",
  "dossier_event": "event:ev_hainan_zhuyai_llm_01",
  "vocab_pack": "inline:hainan_zhuyai_llm",
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
    "note": "制度+思想→汉平南越渡海置珠崖儋耳，郡县初及海南，后弃守争议"
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
    "note": "技術+制度→自合浦徐闻渡海，楼船—烽堠支撑海岛管控"
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
    "note": "社會+制度→黎民数反、赋敛繁重，贾捐之谏弃珠崖，移民与岛民张力"
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
    "note": "地理+制度→海南孤悬海外，汉初据为海上南疆，后罢郡属合浦"
   }
  },
  "subject_names": [
   "person:HAI__p01",
   "person:HAI__p02",
   "place:hepu",
   "place:xuwen",
   "place:zhuyai",
   "place:daner",
   "event:ev_hainan_zhuyai_llm_01",
   "event:ev_hainan_zhuyai_llm_02"
  ],
  "page": "county.html?scene=hainan_zhuyai_llm",
  "key": "hainan_zhuyai_llm",
  "scene_id": "hainan_zhuyai_llm"
 },
 "sources": [
  {
   "id": "han_shu_zhuyai_llm",
   "title": "汉书·地理志·贾捐之传（珠崖）",
   "party": "汉官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
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
   "id": "hepu",
   "name": "合浦",
   "type": "city",
   "modern": "今广西合浦",
   "note": "渡海出发地",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 109.12,
   "lat": 21.67,
   "geo_unresolved": false,
   "elev": 18
  },
  {
   "id": "xuwen",
   "name": "徐闻",
   "type": "city",
   "modern": "今广东徐闻",
   "note": "渡海港口",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 110.17,
   "lat": 20.35,
   "geo_unresolved": false,
   "elev": 57
  },
  {
   "id": "zhuyai",
   "name": "珠崖",
   "type": "region",
   "modern": "今海南岛北部",
   "note": "汉郡",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 110.35,
   "lat": 20.05,
   "geo_unresolved": false,
   "elev": 19
  },
  {
   "id": "daner",
   "name": "儋耳",
   "type": "region",
   "modern": "今海南儋州",
   "note": "汉郡",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "lon": 109.58,
   "lat": 19.52,
   "geo_unresolved": false,
   "elev": 163
  }
 ],
 "persons": [
  {
   "id": "HAI__p01",
   "name": "汉武帝",
   "role": "汉皇帝",
   "note": "元封元年置郡",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAI__p02",
   "name": "贾捐之",
   "role": "汉臣",
   "note": "谏弃珠崖",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HAI_001",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "置郡",
   "value_text": "元封元年置珠崖儋耳",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "元封元年……置珠崖、儋耳二郡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "元封元年……置珠崖、儋耳二郡",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_002",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "行军路线",
   "value_text": "自合浦徐闻渡海",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "xuwen",
   "source": "han_shu_zhuyai_llm",
   "quote": "自合浦徐闻渡海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "自合浦徐闻渡海",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_003",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "治理",
   "value_text": "初郡赋敛繁重",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "初郡县赋敛繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "初郡县赋敛繁重",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_004",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "民变",
   "value_text": "黎民数反",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "黎民数反",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "黎民数反",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_005",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "罢郡",
   "value_text": "初元三年罢珠崖郡",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "初元三年……罢郡",
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
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "初元三年……罢郡",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_006",
   "subject": "person:HAI__p02",
   "predicate": "谏言",
   "value_text": "贾捐之谏弃珠崖",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "贾捐之谏弃珠崖",
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
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "贾捐之谏弃珠崖",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_007",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "归属",
   "value_text": "罢郡后县属合浦",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "hepu",
   "source": "han_shu_zhuyai_llm",
   "quote": "县属合浦",
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
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "县属合浦",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_008",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "后续",
   "value_text": "隋大业复置珠崖郡",
   "time": {
    "era_text": "隋大业",
    "start": "605"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "至隋大业复置珠崖郡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "至隋大业复置珠崖郡",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_009",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "行政层级",
   "value_text": "二郡领海南岛",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "领海南岛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "领海南岛",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_010",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "军事行动",
   "value_text": "汉平南越后置郡",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "汉平南越",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "汉平南越",
   "dim_source": "fallback",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_011",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "罢郡原因",
   "value_text": "因民反及成本高",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "黎民数反",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "推断",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "黎民数反",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_012",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "赋敛政策",
   "value_text": "赋敛繁重致反",
   "time": {
    "era_text": "元封元年",
    "start": "-110-01-01",
    "end": "-110-12-31",
    "gregorian_year": -110
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "赋敛繁重",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "学者分析",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "赋敛繁重",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_013",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "弃置争议",
   "value_text": "贾捐之主张放弃",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "谏弃珠崖",
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
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "谏弃珠崖",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAI_014",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "predicate": "史料缺失",
   "value_text": "罢郡后行政细节缺",
   "time": {
    "era_text": "初元三年",
    "start": "-46"
   },
   "place": "zhuyai",
   "source": "han_shu_zhuyai_llm",
   "quote": "县属合浦",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "待考",
   "dims": [
    3
   ],
   "lead": {
    "where": "汉书·地理志",
    "skills": [
     "历史地理"
    ],
    "accept": "补充罢郡后治理"
   },
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null,
   "_source_quote": "县属合浦",
   "dim_source": "declared",
   "_party": "汉官修",
   "_faction": null
  },
  {
   "id": "HAING2",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "hainan_zhuyai_llm",
    "start": "-110",
    "end": "-110",
    "gregorian_year": -110
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
  "HAI_014",
  "HAING2"
 ],
 "events": [
  {
   "id": "ev_hainan_zhuyai_llm_01",
   "subject": "event:ev_hainan_zhuyai_llm_01",
   "year": -110,
   "era": "元封元年",
   "title": "置珠崖儋耳二郡",
   "kind": "建置",
   "text": "汉平南越，置二郡",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "id": "ev_hainan_zhuyai_llm_02",
   "subject": "event:ev_hainan_zhuyai_llm_02",
   "year": -46,
   "era": "初元三年",
   "title": "罢珠崖郡",
   "kind": "行政",
   "text": "贾捐之谏，罢郡",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "hepu",
   "to": "xuwen",
   "type": "military",
   "label": "汉军行军",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
   "_source_party": "汉官修",
   "_source_credibility": null
  },
  {
   "from": "xuwen",
   "to": "zhuyai",
   "type": "military",
   "label": "渡海路线",
   "_source_idx": 0,
   "_source_name": "汉书·地理志·贾捐之传（珠崖）",
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       110.971,
       19.883
      ],
      [
       110.938,
       19.948
      ],
      [
       110.889,
       19.992
      ],
      [
       110.809,
       20.014
      ],
      [
       110.745,
       20.059
      ],
      [
       110.679,
       20.137
      ],
      [
       110.652,
       20.138
      ],
      [
       110.598,
       20.098
      ],
      [
       110.589,
       20.072
      ],
      [
       110.588,
       19.976
      ],
      [
       110.418,
       20.055
      ],
      [
       110.394,
       20.059
      ],
      [
       110.388,
       20.018
      ],
      [
       110.392,
       19.976
      ],
      [
       110.344,
       20.039
      ],
      [
       110.213,
       20.056
      ],
      [
       110.172,
       20.054
      ],
      [
       110.083,
       19.993
      ],
      [
       109.906,
       19.963
      ],
      [
       109.651,
       19.984
      ],
      [
       109.584,
       19.97
      ],
      [
       109.514,
       19.904
      ],
      [
       109.418,
       19.889
      ],
      [
       109.315,
       19.904
      ],
      [
       109.263,
       19.883
      ],
      [
       109.219,
       19.843
      ],
      [
       109.177,
       19.768
      ],
      [
       109.22,
       19.757
      ],
      [
       109.277,
       19.761
      ],
      [
       109.179,
       19.674
      ],
      [
       109.063,
       19.614
      ],
      [
       108.903,
       19.481
      ],
      [
       108.791,
       19.418
      ],
      [
       108.694,
       19.338
      ],
      [
       108.666,
       19.304
      ],
      [
       108.65,
       19.265
      ],
      [
       108.636,
       18.908
      ],
      [
       108.638,
       18.866
      ],
      [
       108.676,
       18.75
      ],
      [
       108.702,
       18.535
      ],
      [
       108.73,
       18.52
      ],
      [
       110.073,
       18.52
      ],
      [
       110.156,
       18.57
      ],
      [
       110.252,
       18.656
      ],
      [
       110.291,
       18.67
      ],
      [
       110.334,
       18.673
      ],
      [
       110.4,
       18.698
      ],
      [
       110.451,
       18.748
      ],
      [
       110.478,
       18.813
      ],
      [
       110.519,
       18.97
      ],
      [
       110.566,
       19.099
      ],
      [
       110.562,
       19.135
      ],
      [
       110.572,
       19.172
      ],
      [
       110.603,
       19.207
      ],
      [
       110.641,
       19.291
      ],
      [
       110.822,
       19.558
      ],
      [
       110.913,
       19.586
      ],
      [
       111.014,
       19.655
      ],
      [
       110.998,
       19.765
      ],
      [
       110.971,
       19.883
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
       110.522,
       21.083
      ],
      [
       110.422,
       21.059
      ],
      [
       110.385,
       21.093
      ],
      [
       110.31,
       21.075
      ],
      [
       110.265,
       21.025
      ],
      [
       110.281,
       21.001
      ],
      [
       110.34,
       20.998
      ],
      [
       110.422,
       21.007
      ],
      [
       110.504,
       20.968
      ],
      [
       110.539,
       21.018
      ],
      [
       110.54,
       21.039
      ],
      [
       110.522,
       21.083
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
        108.12,
        21.552
       ],
       [
        108.146,
        21.565
       ],
       [
        108.246,
        21.558
       ],
       [
        108.302,
        21.622
       ],
       [
        108.325,
        21.694
       ],
       [
        108.355,
        21.697
       ],
       [
        108.383,
        21.679
       ],
       [
        108.444,
        21.607
       ],
       [
        108.502,
        21.633
       ],
       [
        108.526,
        21.671
       ],
       [
        108.493,
        21.739
       ],
       [
        108.481,
        21.829
       ],
       [
        108.48,
        21.905
       ],
       [
        108.594,
        21.901
       ],
       [
        108.616,
        21.869
       ],
       [
        108.589,
        21.816
       ],
       [
        108.616,
        21.77
       ],
       [
        108.675,
        21.725
       ],
       [
        108.744,
        21.651
       ],
       [
        108.772,
        21.63
       ],
       [
        108.846,
        21.634
       ],
       [
        108.922,
        21.624
       ],
       [
        109.031,
        21.627
       ],
       [
        109.102,
        21.59
       ],
       [
        109.133,
        21.544
       ],
       [
        109.098,
        21.487
       ],
       [
        109.082,
        21.44
       ],
       [
        109.149,
        21.426
       ],
       [
        109.22,
        21.443
       ],
       [
        109.347,
        21.454
       ],
       [
        109.436,
        21.479
       ],
       [
        109.544,
        21.538
       ],
       [
        109.521,
        21.693
       ],
       [
        109.566,
        21.691
       ],
       [
        109.594,
        21.672
       ],
       [
        109.687,
        21.525
       ],
       [
        109.743,
        21.528
       ],
       [
        109.759,
        21.56
       ],
       [
        109.83,
        21.484
       ],
       [
        109.931,
        21.481
       ],
       [
        109.921,
        21.376
       ],
       [
        109.78,
        21.337
       ],
       [
        109.76,
        21.228
       ],
       [
        109.681,
        21.132
       ],
       [
        109.704,
        21.053
       ],
       [
        109.663,
        20.917
       ],
       [
        109.685,
        20.874
       ],
       [
        109.726,
        20.839
       ],
       [
        109.767,
        20.781
       ],
       [
        109.805,
        20.711
       ],
       [
        109.792,
        20.622
       ],
       [
        109.861,
        20.514
       ],
       [
        109.946,
        20.474
       ],
       [
        109.968,
        20.448
       ],
       [
        109.984,
        20.403
       ],
       [
        109.932,
        20.399
       ],
       [
        109.886,
        20.413
       ],
       [
        109.883,
        20.364
       ],
       [
        109.938,
        20.295
       ],
       [
        110.123,
        20.264
       ],
       [
        110.345,
        20.295
       ],
       [
        110.45,
        20.355
       ],
       [
        110.487,
        20.427
       ],
       [
        110.518,
        20.46
       ],
       [
        110.512,
        20.518
       ],
       [
        110.313,
        20.672
       ],
       [
        110.326,
        20.72
       ],
       [
        110.371,
        20.752
       ],
       [
        110.388,
        20.791
       ],
       [
        110.365,
        20.838
       ],
       [
        110.18,
        20.859
       ],
       [
        110.154,
        20.945
       ],
       [
        110.194,
        21.038
       ],
       [
        110.331,
        21.131
       ],
       [
        110.375,
        21.172
       ],
       [
        110.397,
        21.248
       ],
       [
        110.411,
        21.338
       ],
       [
        110.435,
        21.327
       ],
       [
        110.458,
        21.231
       ],
       [
        110.504,
        21.207
       ],
       [
        110.567,
        21.214
       ],
       [
        110.652,
        21.279
       ],
       [
        110.771,
        21.387
       ],
       [
        110.878,
        21.396
       ],
       [
        110.997,
        21.43
       ],
       [
        111.017,
        21.512
       ],
       [
        111.061,
        21.511
       ],
       [
        111.101,
        21.485
       ],
       [
        111.144,
        21.482
       ],
       [
        111.221,
        21.494
       ],
       [
        111.319,
        21.486
       ],
       [
        111.35,
        21.507
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
        110.889,
        19.992
       ],
       [
        110.938,
        19.948
       ],
       [
        110.971,
        19.883
       ],
       [
        110.998,
        19.765
       ],
       [
        111.014,
        19.655
       ],
       [
        110.913,
        19.586
       ],
       [
        110.822,
        19.558
       ],
       [
        110.641,
        19.291
       ],
       [
        110.603,
        19.207
       ],
       [
        110.572,
        19.172
       ],
       [
        110.562,
        19.135
       ],
       [
        110.566,
        19.099
       ],
       [
        110.519,
        18.97
       ],
       [
        110.478,
        18.813
       ],
       [
        110.451,
        18.748
       ],
       [
        110.4,
        18.698
       ],
       [
        110.334,
        18.673
       ],
       [
        110.291,
        18.67
       ],
       [
        110.252,
        18.656
       ],
       [
        110.156,
        18.57
       ],
       [
        110.073,
        18.52
       ],
       [
        108.73,
        18.52
       ],
       [
        108.702,
        18.535
       ],
       [
        108.676,
        18.75
       ],
       [
        108.638,
        18.866
       ],
       [
        108.636,
        18.908
       ],
       [
        108.65,
        19.265
       ],
       [
        108.666,
        19.304
       ],
       [
        108.694,
        19.338
       ],
       [
        108.791,
        19.418
       ],
       [
        108.903,
        19.481
       ],
       [
        109.063,
        19.614
       ],
       [
        109.179,
        19.674
       ],
       [
        109.277,
        19.761
       ],
       [
        109.22,
        19.757
       ],
       [
        109.177,
        19.768
       ],
       [
        109.219,
        19.843
       ],
       [
        109.263,
        19.883
       ],
       [
        109.315,
        19.904
       ],
       [
        109.418,
        19.889
       ],
       [
        109.514,
        19.904
       ],
       [
        109.584,
        19.97
       ],
       [
        109.651,
        19.984
       ],
       [
        109.906,
        19.963
       ],
       [
        110.083,
        19.993
       ],
       [
        110.172,
        20.054
       ],
       [
        110.213,
        20.056
       ],
       [
        110.344,
        20.039
       ],
       [
        110.392,
        19.976
       ],
       [
        110.388,
        20.018
       ],
       [
        110.394,
        20.059
       ],
       [
        110.418,
        20.055
       ],
       [
        110.588,
        19.976
       ],
       [
        110.589,
        20.072
       ],
       [
        110.598,
        20.098
       ],
       [
        110.652,
        20.138
       ],
       [
        110.679,
        20.137
       ],
       [
        110.745,
        20.059
       ],
       [
        110.809,
        20.014
       ],
       [
        110.889,
        19.992
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
        110.385,
        21.093
       ],
       [
        110.422,
        21.059
       ],
       [
        110.522,
        21.083
       ],
       [
        110.54,
        21.039
       ],
       [
        110.539,
        21.018
       ],
       [
        110.504,
        20.968
       ],
       [
        110.422,
        21.007
       ],
       [
        110.34,
        20.998
       ],
       [
        110.281,
        21.001
       ],
       [
        110.265,
        21.025
       ],
       [
        110.31,
        21.075
       ],
       [
        110.385,
        21.093
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
        108.12,
        18.52
       ],
       [
        108.12,
        22.67
       ],
       [
        111.35,
        22.67
       ],
       [
        111.35,
        21.507
       ],
       [
        111.319,
        21.486
       ],
       [
        111.221,
        21.494
       ],
       [
        111.144,
        21.482
       ],
       [
        111.101,
        21.485
       ],
       [
        111.061,
        21.511
       ],
       [
        111.017,
        21.512
       ],
       [
        110.997,
        21.43
       ],
       [
        110.878,
        21.396
       ],
       [
        110.771,
        21.387
       ],
       [
        110.652,
        21.279
       ],
       [
        110.567,
        21.214
       ],
       [
        110.504,
        21.207
       ],
       [
        110.458,
        21.231
       ],
       [
        110.435,
        21.327
       ],
       [
        110.411,
        21.338
       ],
       [
        110.397,
        21.248
       ],
       [
        110.375,
        21.172
       ],
       [
        110.331,
        21.131
       ],
       [
        110.194,
        21.038
       ],
       [
        110.154,
        20.945
       ],
       [
        110.18,
        20.859
       ],
       [
        110.365,
        20.838
       ],
       [
        110.388,
        20.791
       ],
       [
        110.371,
        20.752
       ],
       [
        110.326,
        20.72
       ],
       [
        110.313,
        20.672
       ],
       [
        110.512,
        20.518
       ],
       [
        110.518,
        20.46
       ],
       [
        110.487,
        20.427
       ],
       [
        110.45,
        20.355
       ],
       [
        110.345,
        20.295
       ],
       [
        110.123,
        20.264
       ],
       [
        109.938,
        20.295
       ],
       [
        109.883,
        20.364
       ],
       [
        109.886,
        20.413
       ],
       [
        109.932,
        20.399
       ],
       [
        109.984,
        20.403
       ],
       [
        109.968,
        20.448
       ],
       [
        109.946,
        20.474
       ],
       [
        109.861,
        20.514
       ],
       [
        109.792,
        20.622
       ],
       [
        109.805,
        20.711
       ],
       [
        109.767,
        20.781
       ],
       [
        109.726,
        20.839
       ],
       [
        109.685,
        20.874
       ],
       [
        109.663,
        20.917
       ],
       [
        109.704,
        21.053
       ],
       [
        109.681,
        21.132
       ],
       [
        109.76,
        21.228
       ],
       [
        109.78,
        21.337
       ],
       [
        109.921,
        21.376
       ],
       [
        109.931,
        21.481
       ],
       [
        109.83,
        21.484
       ],
       [
        109.759,
        21.56
       ],
       [
        109.743,
        21.528
       ],
       [
        109.687,
        21.525
       ],
       [
        109.594,
        21.672
       ],
       [
        109.566,
        21.691
       ],
       [
        109.521,
        21.693
       ],
       [
        109.544,
        21.538
       ],
       [
        109.436,
        21.479
       ],
       [
        109.347,
        21.454
       ],
       [
        109.22,
        21.443
       ],
       [
        109.149,
        21.426
       ],
       [
        109.082,
        21.44
       ],
       [
        109.098,
        21.487
       ],
       [
        109.133,
        21.544
       ],
       [
        109.102,
        21.59
       ],
       [
        109.031,
        21.627
       ],
       [
        108.922,
        21.624
       ],
       [
        108.846,
        21.634
       ],
       [
        108.772,
        21.63
       ],
       [
        108.744,
        21.651
       ],
       [
        108.675,
        21.725
       ],
       [
        108.616,
        21.77
       ],
       [
        108.589,
        21.816
       ],
       [
        108.616,
        21.869
       ],
       [
        108.594,
        21.901
       ],
       [
        108.48,
        21.905
       ],
       [
        108.481,
        21.829
       ],
       [
        108.493,
        21.739
       ],
       [
        108.526,
        21.671
       ],
       [
        108.502,
        21.633
       ],
       [
        108.444,
        21.607
       ],
       [
        108.383,
        21.679
       ],
       [
        108.355,
        21.697
       ],
       [
        108.325,
        21.694
       ],
       [
        108.302,
        21.622
       ],
       [
        108.246,
        21.558
       ],
       [
        108.146,
        21.565
       ],
       [
        108.12,
        21.552
       ],
       [
        108.12,
        18.52
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
         111.35,
         22.67
        ],
        [
         111.071,
         22.67
        ],
        [
         111.056,
         22.649
        ],
        [
         110.997,
         22.632
        ],
        [
         110.959,
         22.637
        ],
        [
         110.95,
         22.611
        ],
        [
         110.896,
         22.613
        ],
        [
         110.898,
         22.592
        ],
        [
         110.812,
         22.576
        ],
        [
         110.778,
         22.585
        ],
        [
         110.749,
         22.557
        ],
        [
         110.763,
         22.518
        ],
        [
         110.74,
         22.499
        ],
        [
         110.741,
         22.464
        ],
        [
         110.688,
         22.478
        ],
        [
         110.712,
         22.441
        ],
        [
         110.711,
         22.37
        ],
        [
         110.741,
         22.362
        ],
        [
         110.749,
         22.33
        ],
        [
         110.787,
         22.283
        ],
        [
         110.759,
         22.275
        ],
        [
         110.725,
         22.296
        ],
        [
         110.688,
         22.25
        ],
        [
         110.647,
         22.221
        ],
        [
         110.679,
         22.173
        ],
        [
         110.629,
         22.149
        ],
        [
         110.599,
         22.163
        ],
        [
         110.603,
         22.183
        ],
        [
         110.558,
         22.196
        ],
        [
         110.506,
         22.143
        ],
        [
         110.457,
         22.19
        ],
        [
         110.414,
         22.208
        ],
        [
         110.378,
         22.165
        ],
        [
         110.348,
         22.196
        ],
        [
         110.326,
         22.152
        ],
        [
         110.364,
         22.126
        ],
        [
         110.352,
         22.098
        ],
        [
         110.36,
         22.016
        ],
        [
         110.353,
         21.976
        ],
        [
         110.375,
         21.968
        ],
        [
         110.375,
         21.968
        ],
        [
         110.379,
         21.94
        ],
        [
         110.379,
         21.94
        ],
        [
         110.392,
         21.894
        ],
        [
         110.337,
         21.888
        ],
        [
         110.291,
         21.918
        ],
        [
         110.284,
         21.892
        ],
        [
         110.224,
         21.882
        ],
        [
         110.224,
         21.882
        ],
        [
         110.212,
         21.886
        ],
        [
         110.212,
         21.886
        ],
        [
         110.196,
         21.9
        ],
        [
         110.129,
         21.903
        ],
        [
         110.101,
         21.87
        ],
        [
         110.051,
         21.857
        ],
        [
         110.0,
         21.882
        ],
        [
         109.945,
         21.844
        ],
        [
         109.94,
         21.769
        ],
        [
         109.916,
         21.669
        ],
        [
         109.888,
         21.652
        ],
        [
         109.888,
         21.652
        ],
        [
         109.84,
         21.637
        ],
        [
         109.786,
         21.638
        ],
        [
         109.778,
         21.67
        ],
        [
         109.743,
         21.616
        ],
        [
         109.755,
         21.556
        ],
        [
         109.789,
         21.491
        ],
        [
         109.785,
         21.457
        ],
        [
         109.819,
         21.445
        ],
        [
         109.895,
         21.442
        ],
        [
         109.904,
         21.43
        ],
        [
         109.869,
         21.366
        ],
        [
         109.771,
         21.36
        ],
        [
         109.758,
         21.347
        ],
        [
         109.764,
         21.227
        ],
        [
         109.675,
         21.137
        ],
        [
         109.674,
         21.068
        ],
        [
         109.656,
         20.929
        ],
        [
         109.665,
         20.862
        ],
        [
         109.712,
         20.775
        ],
        [
         109.73,
         20.72
        ],
        [
         109.745,
         20.621
        ],
        [
         109.793,
         20.616
        ],
        [
         109.814,
         20.575
        ],
        [
         109.812,
         20.542
        ],
        [
         109.84,
         20.489
        ],
        [
         109.888,
         20.475
        ],
        [
         109.896,
         20.428
        ],
        [
         109.865,
         20.402
        ],
        [
         109.861,
         20.377
        ],
        [
         109.916,
         20.317
        ],
        [
         109.909,
         20.237
        ],
        [
         109.929,
         20.212
        ],
        [
         109.994,
         20.254
        ],
        [
         110.082,
         20.259
        ],
        [
         110.118,
         20.22
        ],
        [
         110.169,
         20.22
        ],
        [
         110.22,
         20.252
        ],
        [
         110.297,
         20.249
        ],
        [
         110.349,
         20.259
        ],
        [
         110.384,
         20.293
        ],
        [
         110.425,
         20.291
        ],
        [
         110.453,
         20.311
        ],
        [
         110.491,
         20.374
        ],
        [
         110.541,
         20.42
        ],
        [
         110.55,
         20.473
        ],
        [
         110.5,
         20.572
        ],
        [
         110.487,
         20.64
        ],
        [
         110.466,
         20.68
        ],
        [
         110.411,
         20.671
        ],
        [
         110.392,
         20.683
        ],
        [
         110.408,
         20.732
        ],
        [
         110.393,
         20.816
        ],
        [
         110.351,
         20.842
        ],
        [
         110.328,
         20.848
        ],
        [
         110.269,
         20.84
        ],
        [
         110.21,
         20.86
        ],
        [
         110.184,
         20.892
        ],
        [
         110.181,
         20.982
        ],
        [
         110.205,
         21.003
        ],
        [
         110.209,
         21.051
        ],
        [
         110.242,
         21.016
        ],
        [
         110.25,
         21.045
        ],
        [
         110.297,
         21.094
        ],
        [
         110.391,
         21.125
        ],
        [
         110.422,
         21.191
        ],
        [
         110.451,
         21.186
        ],
        [
         110.501,
         21.218
        ],
        [
         110.534,
         21.204
        ],
        [
         110.626,
         21.216
        ],
        [
         110.66,
         21.24
        ],
        [
         110.713,
         21.312
        ],
        [
         110.769,
         21.365
        ],
        [
         110.796,
         21.375
        ],
        [
         110.889,
         21.368
        ],
        [
         110.929,
         21.376
        ],
        [
         111.035,
         21.439
        ],
        [
         111.104,
         21.456
        ],
        [
         111.171,
         21.458
        ],
        [
         111.283,
         21.486
        ],
        [
         111.276,
         21.443
        ],
        [
         111.25,
         21.451
        ],
        [
         111.258,
         21.415
        ],
        [
         111.286,
         21.419
        ],
        [
         111.35,
         21.462
        ],
        [
         111.35,
         22.67
        ]
       ]
      ],
      [
       [
        [
         110.433,
         21.171
        ],
        [
         110.49,
         21.139
        ],
        [
         110.509,
         21.141
        ],
        [
         110.545,
         21.084
        ],
        [
         110.583,
         21.095
        ],
        [
         110.632,
         21.211
        ],
        [
         110.589,
         21.195
        ],
        [
         110.525,
         21.19
        ],
        [
         110.499,
         21.213
        ],
        [
         110.445,
         21.185
        ],
        [
         110.432,
         21.181
        ],
        [
         110.433,
         21.171
        ]
       ]
      ],
      [
       [
        [
         110.518,
         21.079
        ],
        [
         110.46,
         21.063
        ],
        [
         110.398,
         21.096
        ],
        [
         110.353,
         21.08
        ],
        [
         110.306,
         21.088
        ],
        [
         110.276,
         21.033
        ],
        [
         110.211,
         20.987
        ],
        [
         110.201,
         20.938
        ],
        [
         110.31,
         20.964
        ],
        [
         110.348,
         20.985
        ],
        [
         110.408,
         20.99
        ],
        [
         110.473,
         20.983
        ],
        [
         110.512,
         20.917
        ],
        [
         110.536,
         20.923
        ],
        [
         110.539,
         20.988
        ],
        [
         110.56,
         21.061
        ],
        [
         110.518,
         21.079
        ]
       ]
      ],
      [
       [
        [
         110.405,
         20.678
        ],
        [
         110.438,
         20.678
        ],
        [
         110.414,
         20.71
        ],
        [
         110.405,
         20.678
        ]
       ]
      ],
      [
       [
        [
         110.645,
         20.936
        ],
        [
         110.584,
         20.949
        ],
        [
         110.549,
         20.909
        ],
        [
         110.563,
         20.861
        ],
        [
         110.611,
         20.86
        ],
        [
         110.647,
         20.917
        ],
        [
         110.645,
         20.936
        ]
       ]
      ],
      [
       [
        [
         110.557,
         20.327
        ],
        [
         110.594,
         20.36
        ],
        [
         110.586,
         20.381
        ],
        [
         110.557,
         20.327
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
         108.12,
         22.67
        ],
        [
         108.12,
         21.51
        ],
        [
         108.194,
         21.52
        ],
        [
         108.156,
         21.551
        ],
        [
         108.206,
         21.598
        ],
        [
         108.241,
         21.6
        ],
        [
         108.25,
         21.561
        ],
        [
         108.211,
         21.506
        ],
        [
         108.23,
         21.491
        ],
        [
         108.33,
         21.54
        ],
        [
         108.398,
         21.533
        ],
        [
         108.493,
         21.555
        ],
        [
         108.592,
         21.677
        ],
        [
         108.626,
         21.68
        ],
        [
         108.659,
         21.644
        ],
        [
         108.678,
         21.659
        ],
        [
         108.736,
         21.628
        ],
        [
         108.734,
         21.627
        ],
        [
         108.746,
         21.603
        ],
        [
         108.802,
         21.627
        ],
        [
         108.833,
         21.611
        ],
        [
         108.881,
         21.627
        ],
        [
         108.938,
         21.59
        ],
        [
         109.094,
         21.579
        ],
        [
         109.099,
         21.571
        ],
        [
         109.11,
         21.568
        ],
        [
         109.139,
         21.568
        ],
        [
         109.142,
         21.512
        ],
        [
         109.075,
         21.49
        ],
        [
         109.04,
         21.458
        ],
        [
         109.046,
         21.424
        ],
        [
         109.095,
         21.419
        ],
        [
         109.139,
         21.389
        ],
        [
         109.186,
         21.391
        ],
        [
         109.246,
         21.426
        ],
        [
         109.417,
         21.439
        ],
        [
         109.485,
         21.453
        ],
        [
         109.53,
         21.437
        ],
        [
         109.541,
         21.466
        ],
        [
         109.577,
         21.493
        ],
        [
         109.604,
         21.524
        ],
        [
         109.612,
         21.557
        ],
        [
         109.655,
         21.493
        ],
        [
         109.704,
         21.463
        ],
        [
         109.785,
         21.457
        ],
        [
         109.789,
         21.491
        ],
        [
         109.755,
         21.556
        ],
        [
         109.743,
         21.616
        ],
        [
         109.778,
         21.67
        ],
        [
         109.786,
         21.638
        ],
        [
         109.84,
         21.637
        ],
        [
         109.888,
         21.652
        ],
        [
         109.888,
         21.652
        ],
        [
         109.916,
         21.669
        ],
        [
         109.94,
         21.769
        ],
        [
         109.945,
         21.844
        ],
        [
         110.0,
         21.882
        ],
        [
         110.051,
         21.857
        ],
        [
         110.101,
         21.87
        ],
        [
         110.129,
         21.903
        ],
        [
         110.196,
         21.9
        ],
        [
         110.212,
         21.886
        ],
        [
         110.212,
         21.886
        ],
        [
         110.224,
         21.882
        ],
        [
         110.224,
         21.882
        ],
        [
         110.284,
         21.892
        ],
        [
         110.291,
         21.918
        ],
        [
         110.337,
         21.888
        ],
        [
         110.392,
         21.894
        ],
        [
         110.379,
         21.94
        ],
        [
         110.379,
         21.94
        ],
        [
         110.375,
         21.968
        ],
        [
         110.375,
         21.968
        ],
        [
         110.353,
         21.976
        ],
        [
         110.36,
         22.016
        ],
        [
         110.352,
         22.098
        ],
        [
         110.364,
         22.126
        ],
        [
         110.326,
         22.152
        ],
        [
         110.348,
         22.196
        ],
        [
         110.378,
         22.165
        ],
        [
         110.414,
         22.208
        ],
        [
         110.457,
         22.19
        ],
        [
         110.506,
         22.143
        ],
        [
         110.558,
         22.196
        ],
        [
         110.603,
         22.183
        ],
        [
         110.599,
         22.163
        ],
        [
         110.629,
         22.149
        ],
        [
         110.679,
         22.173
        ],
        [
         110.647,
         22.221
        ],
        [
         110.688,
         22.25
        ],
        [
         110.725,
         22.296
        ],
        [
         110.759,
         22.275
        ],
        [
         110.787,
         22.283
        ],
        [
         110.749,
         22.33
        ],
        [
         110.741,
         22.362
        ],
        [
         110.711,
         22.37
        ],
        [
         110.712,
         22.441
        ],
        [
         110.688,
         22.478
        ],
        [
         110.741,
         22.464
        ],
        [
         110.74,
         22.499
        ],
        [
         110.763,
         22.518
        ],
        [
         110.749,
         22.557
        ],
        [
         110.778,
         22.585
        ],
        [
         110.812,
         22.576
        ],
        [
         110.898,
         22.592
        ],
        [
         110.896,
         22.613
        ],
        [
         110.95,
         22.611
        ],
        [
         110.959,
         22.637
        ],
        [
         110.997,
         22.632
        ],
        [
         111.056,
         22.649
        ],
        [
         111.071,
         22.67
        ],
        [
         108.12,
         22.67
        ]
       ]
      ],
      [
       [
        [
         109.088,
         21.015
        ],
        [
         109.112,
         21.025
        ],
        [
         109.118,
         21.018
        ],
        [
         109.144,
         21.041
        ],
        [
         109.139,
         21.067
        ],
        [
         109.093,
         21.057
        ],
        [
         109.089,
         21.031
        ],
        [
         109.088,
         21.015
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
         110.106,
         20.027
        ],
        [
         110.042,
         19.991
        ],
        [
         109.997,
         19.98
        ],
        [
         109.965,
         19.994
        ],
        [
         109.899,
         19.994
        ],
        [
         109.855,
         19.984
        ],
        [
         109.814,
         19.993
        ],
        [
         109.761,
         19.981
        ],
        [
         109.712,
         20.017
        ],
        [
         109.658,
         20.012
        ],
        [
         109.585,
         19.988
        ],
        [
         109.527,
         19.944
        ],
        [
         109.498,
         19.873
        ],
        [
         109.411,
         19.895
        ],
        [
         109.349,
         19.899
        ],
        [
         109.301,
         19.918
        ],
        [
         109.259,
         19.899
        ],
        [
         109.256,
         19.867
        ],
        [
         109.231,
         19.863
        ],
        [
         109.159,
         19.79
        ],
        [
         109.17,
         19.736
        ],
        [
         109.147,
         19.705
        ],
        [
         109.094,
         19.69
        ],
        [
         109.049,
         19.62
        ],
        [
         108.993,
         19.587
        ],
        [
         108.929,
         19.524
        ],
        [
         108.855,
         19.469
        ],
        [
         108.806,
         19.451
        ],
        [
         108.765,
         19.401
        ],
        [
         108.694,
         19.387
        ],
        [
         108.645,
         19.35
        ],
        [
         108.609,
         19.277
        ],
        [
         108.591,
         19.142
        ],
        [
         108.599,
         19.056
        ],
        [
         108.631,
         19.003
        ],
        [
         108.638,
         18.924
        ],
        [
         108.595,
         18.872
        ],
        [
         108.593,
         18.809
        ],
        [
         108.653,
         18.74
        ],
        [
         108.664,
         18.673
        ],
        [
         108.641,
         18.566
        ],
        [
         108.643,
         18.52
        ],
        [
         110.135,
         18.52
        ],
        [
         110.214,
         18.579
        ],
        [
         110.246,
         18.61
        ],
        [
         110.329,
         18.642
        ],
        [
         110.368,
         18.632
        ],
        [
         110.499,
         18.652
        ],
        [
         110.499,
         18.752
        ],
        [
         110.578,
         18.784
        ],
        [
         110.591,
         18.839
        ],
        [
         110.586,
         18.881
        ],
        [
         110.619,
         19.152
        ],
        [
         110.677,
         19.286
        ],
        [
         110.706,
         19.32
        ],
        [
         110.73,
         19.379
        ],
        [
         110.787,
         19.4
        ],
        [
         110.844,
         19.45
        ],
        [
         110.888,
         19.519
        ],
        [
         110.921,
         19.553
        ],
        [
         111.009,
         19.604
        ],
        [
         111.062,
         19.612
        ],
        [
         111.072,
         19.629
        ],
        [
         111.044,
         19.763
        ],
        [
         111.014,
         19.85
        ],
        [
         110.966,
         20.018
        ],
        [
         110.941,
         20.028
        ],
        [
         110.871,
         20.012
        ],
        [
         110.809,
         20.036
        ],
        [
         110.778,
         20.068
        ],
        [
         110.745,
         20.074
        ],
        [
         110.717,
         20.149
        ],
        [
         110.688,
         20.164
        ],
        [
         110.656,
         20.134
        ],
        [
         110.562,
         20.11
        ],
        [
         110.526,
         20.075
        ],
        [
         110.495,
         20.077
        ],
        [
         110.387,
         20.113
        ],
        [
         110.318,
         20.109
        ],
        [
         110.289,
         20.056
        ],
        [
         110.243,
         20.077
        ],
        [
         110.145,
         20.075
        ],
        [
         110.106,
         20.027
        ]
       ]
      ],
      [
       [
        [
         111.203,
         19.926
        ],
        [
         111.203,
         19.925
        ],
        [
         111.204,
         19.926
        ],
        [
         111.204,
         19.926
        ],
        [
         111.203,
         19.926
        ]
       ]
      ]
     ]
    },
    "n": "海南省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   108.12,
   18.52,
   111.35,
   22.67
  ]
 }
};
