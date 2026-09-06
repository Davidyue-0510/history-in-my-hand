// 本文件由 tools/build.py 自动生成（切片 ming_tumu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ming_tumu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ming_tumu_llm"] = {
 "meta": {
  "kind": "battle",
  "scale_tier": "operational",
  "region": "huabei",
  "province": null,
  "title": "明·土木堡之变（LLM 抽取·人工校订）",
  "dossier_label": "明·土木堡之变（LLM 抽取落库）",
  "subtitle": "亲征溃败与英宗北狩",
  "primary_place": null,
  "dossier_event": "ev_ming_tumu_02",
  "vocab_pack": "inline:ming_tumu_llm",
  "terrain_grid": "china_coarse",
  "lead": "土木堡之变使明军精锐丧尽、御驾被俘，北京保卫战成为国运转折点。",
  "parties_note": "叙事方=明廷/瓦剌；来源=后世官修（基于《明史》现代概述）。",
  "dims": [
   3,
   6
  ],
  "subject_names": {
   "person:MIN__p01": "明英宗",
   "person:MIN__p02": "王振",
   "person:MIN__p03": "也先",
   "person:MIN__p04": "于谦",
   "person:MIN__p05": "郕王",
   "event:ev_ming_tumu_02": "英宗亲征",
   "event:ev_ming_tumu_03": "土木堡之变",
   "event:ev_ming_tumu_04": "景泰帝立",
   "place:datong": "大同",
   "place:juyongguan": "居庸关",
   "place:tumu": "土木堡"
  },
  "epoch": "ming",
  "strategic": {
   "political_cohesion": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     3,
     4
    ],
    "layer": "inference",
    "note": "王振乱政、文官—宦官失衡致决策失灵"
   },
   "material_logistics": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "五十万大军后勤脱节、饮水被断"
   },
   "population_mobilization": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "京营腐化、边军调度失灵"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "瓦剌控漠南通道、土木堡处补给死地"
   }
  },
  "page": "ming_tumu_llm.html",
  "key": "ming_tumu_llm",
  "scene_id": "ming_tumu_llm"
 },
 "sources": [
  {
   "id": "ming_tumu_src_llm",
   "title": "明·土木堡之变（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "后世官修",
   "period": "后世",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "datong",
   "name": "大同",
   "type": "city",
   "modern": "今山西大同",
   "note": "明军前线",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.3,
   "lat": 40.08,
   "geo_note": "北魏旧都，鲜卑保守派根基，今山西大同",
   "elev": 1054
  },
  {
   "id": "juyongguan",
   "name": "居庸关",
   "type": "fortress",
   "modern": "今北京昌平",
   "note": "出关北征",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "tumu",
   "name": "土木堡",
   "type": "fortress",
   "modern": "今河北怀来",
   "note": "战败之地",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "MIN__p01",
   "name": "明英宗",
   "role": "明朝皇帝",
   "note": "亲征被俘",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p02",
   "name": "王振",
   "role": "宦官",
   "note": "挟帝亲征",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p03",
   "name": "也先",
   "role": "瓦剌太师",
   "note": "犯边统帅",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p04",
   "name": "于谦",
   "role": "兵部尚书",
   "note": "立景泰帝",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "MIN__p05",
   "name": "郕王",
   "role": "景泰帝",
   "note": "继位",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "MIN_001",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "战役结果",
   "value_text": "明军溃败英宗被俘",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "明军溃败，英宗被俘",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军溃败，英宗被俘",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_002",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军兵力",
   "value_text": "仓促集兵五十万",
   "time": {
    "era_text": "正统十四年",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "juyongguan",
   "source": "ming_tumu_src_llm",
   "quote": "仓促集兵五十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "仓促集兵五十万",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_003",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军伤亡",
   "value_text": "从征文武死者数十人",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "从征文武死者数十人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "从征文武死者数十人",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_004",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "王振结局",
   "value_text": "为乱军所杀",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "王振为乱军所杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王振为乱军所杀",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_005",
   "subject": "event:ev_ming_tumu_04",
   "predicate": "继位",
   "value_text": "于谦立郕王为景泰帝",
   "time": {
    "era_text": "正统十四年九月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "datong",
   "source": "ming_tumu_src_llm",
   "quote": "于谦立郕王为景泰帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "于谦立郕王为景泰帝",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_006",
   "subject": "event:ev_ming_tumu_04",
   "predicate": "英宗归还",
   "value_text": "次年也先送还英宗",
   "time": {
    "era_text": "景泰元年",
    "start": "1450-01-01",
    "end": "1450-12-31",
    "gregorian_year": 1450
   },
   "place": "datong",
   "source": "ming_tumu_src_llm",
   "quote": "次年也先送还英宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "次年也先送还英宗",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_007",
   "subject": "event:ev_ming_tumu_02",
   "predicate": "亲征决策",
   "value_text": "王振挟英宗亲征",
   "time": {
    "era_text": "正统十四年",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "juyongguan",
   "source": "ming_tumu_src_llm",
   "quote": "王振挟英宗亲征",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王振挟英宗亲征",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_008",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "退兵理由",
   "value_text": "闻前方败绩慌忙回师",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "datong",
   "source": "ming_tumu_src_llm",
   "quote": "闻前方败绩，慌忙回师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闻前方败绩，慌忙回师",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_009",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军伤亡",
   "value_text": "明军伤亡惨重",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "明军溃败",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "史载不一",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军溃败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_010",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军伤亡",
   "value_text": "伤亡数十万",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "死者数十万",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "theater",
   "note": "异说",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "死者数十万",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_011",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "英宗被俘",
   "value_text": "英宗被俘",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "英宗被俘",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英宗被俘",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_012",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "瓦剌兵力",
   "value_text": "瓦剌兵力不详",
   "time": {
    "era_text": "正统十四年",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "瓦剌太师也先大举犯边",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "史料未载",
   "dims": [
    3
   ],
   "lead": {
    "where": "瓦剌方记载",
    "skills": [
     "蒙古史"
    ],
    "accept": "瓦剌兵力数据"
   },
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "瓦剌太师也先大举犯边",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_013",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军统帅",
   "value_text": "英宗亲征",
   "time": {
    "era_text": "正统十四年",
    "start": "1449-01-01",
    "end": "1449-12-31",
    "gregorian_year": 1449
   },
   "place": "juyongguan",
   "source": "ming_tumu_src_llm",
   "quote": "英宗亲征",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "英宗亲征",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "MIN_014",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军溃败",
   "value_text": "明军溃败",
   "time": {
    "era_text": "正统十四年八月",
    "start": "1449-08-14",
    "gregorian_year": 1449
   },
   "place": "tumu",
   "source": "ming_tumu_src_llm",
   "quote": "明军溃败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明军溃败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_ming_tumu_03|明军伤亡",
   "subject": "event:ev_ming_tumu_03",
   "predicate": "明军伤亡",
   "kind": "record_vs_scholarship",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "MIN_003",
    "MIN_009",
    "MIN_010"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "MIN_012"
 ],
 "events": [
  {
   "id": "ev_ming_tumu_02",
   "subject": "event:ev_ming_tumu_02",
   "year": 1449,
   "era": "正统十四年",
   "title": "英宗亲征",
   "kind": "行政",
   "text": "王振挟英宗亲征",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ming_tumu_03",
   "subject": "event:ev_ming_tumu_03",
   "year": 1449,
   "era": "正统十四年八月",
   "title": "土木堡之变",
   "kind": "战事",
   "text": "明军溃败英宗被俘",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_ming_tumu_04",
   "subject": "event:ev_ming_tumu_04",
   "year": 1449,
   "era": "正统十四年九月",
   "title": "景泰帝立",
   "kind": "行政",
   "text": "于谦立郕王为帝",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "juyongguan",
   "to": "datong",
   "type": "military",
   "label": "明军亲征路线",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "datong",
   "to": "tumu",
   "type": "military",
   "label": "回师路线",
   "_source_idx": 0,
   "_source_name": "明·土木堡之变（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "datong",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "datong",
   "name": "大同",
   "lon": 113.3,
   "lat": 40.08,
   "region": "huabei"
  }
 ],
 "control_years": [
  1900,
  2000
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
        112.3,
        39.08
       ],
       [
        112.3,
        41.08
       ],
       [
        114.3,
        41.08
       ],
       [
        114.3,
        39.08
       ],
       [
        112.3,
        39.08
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
         114.3,
         39.08
        ],
        [
         114.3,
         41.08
        ],
        [
         113.85,
         41.08
        ],
        [
         113.869,
         41.069
        ],
        [
         113.973,
         40.983
        ],
        [
         113.995,
         40.939
        ],
        [
         114.058,
         40.925
        ],
        [
         114.042,
         40.918
        ],
        [
         114.055,
         40.868
        ],
        [
         114.074,
         40.857
        ],
        [
         114.045,
         40.831
        ],
        [
         114.08,
         40.79
        ],
        [
         114.104,
         40.798
        ],
        [
         114.103,
         40.771
        ],
        [
         114.135,
         40.737
        ],
        [
         114.162,
         40.714
        ],
        [
         114.183,
         40.672
        ],
        [
         114.236,
         40.607
        ],
        [
         114.283,
         40.591
        ],
        [
         114.274,
         40.553
        ],
        [
         114.294,
         40.552
        ],
        [
         114.282,
         40.495
        ],
        [
         114.267,
         40.474
        ],
        [
         114.3,
         40.44
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.397
        ],
        [
         114.3,
         40.232
        ],
        [
         114.293,
         40.23
        ],
        [
         114.255,
         40.236
        ],
        [
         114.236,
         40.198
        ],
        [
         114.18,
         40.191
        ],
        [
         114.136,
         40.175
        ],
        [
         114.098,
         40.194
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.102,
         40.1
        ],
        [
         114.087,
         40.072
        ],
        [
         114.046,
         40.057
        ],
        [
         114.018,
         40.104
        ],
        [
         113.989,
         40.112
        ],
        [
         113.959,
         40.033
        ],
        [
         113.91,
         40.016
        ],
        [
         114.029,
         39.986
        ],
        [
         114.028,
         39.959
        ],
        [
         114.047,
         39.916
        ],
        [
         114.068,
         39.923
        ],
        [
         114.174,
         39.898
        ],
        [
         114.212,
         39.919
        ],
        [
         114.229,
         39.9
        ],
        [
         114.204,
         39.885
        ],
        [
         114.216,
         39.862
        ],
        [
         114.287,
         39.871
        ],
        [
         114.286,
         39.858
        ],
        [
         114.3,
         39.859
        ],
        [
         114.3,
         39.08
        ],
        [
         114.091,
         39.08
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.064,
         39.094
        ],
        [
         114.051,
         39.136
        ],
        [
         114.007,
         39.123
        ],
        [
         113.995,
         39.096
        ],
        [
         113.962,
         39.101
        ],
        [
         113.944,
         39.08
        ],
        [
         114.3,
         39.08
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
         112.3,
         39.08
        ],
        [
         113.944,
         39.08
        ],
        [
         113.962,
         39.101
        ],
        [
         113.995,
         39.096
        ],
        [
         114.007,
         39.123
        ],
        [
         114.051,
         39.136
        ],
        [
         114.064,
         39.094
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.091,
         39.08
        ],
        [
         114.3,
         39.08
        ],
        [
         114.3,
         39.859
        ],
        [
         114.286,
         39.858
        ],
        [
         114.287,
         39.871
        ],
        [
         114.216,
         39.862
        ],
        [
         114.204,
         39.885
        ],
        [
         114.229,
         39.9
        ],
        [
         114.212,
         39.919
        ],
        [
         114.174,
         39.898
        ],
        [
         114.068,
         39.923
        ],
        [
         114.047,
         39.916
        ],
        [
         114.028,
         39.959
        ],
        [
         114.029,
         39.986
        ],
        [
         113.91,
         40.016
        ],
        [
         113.959,
         40.033
        ],
        [
         113.989,
         40.112
        ],
        [
         114.018,
         40.104
        ],
        [
         114.046,
         40.057
        ],
        [
         114.087,
         40.072
        ],
        [
         114.102,
         40.1
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.098,
         40.194
        ],
        [
         114.136,
         40.175
        ],
        [
         114.18,
         40.191
        ],
        [
         114.236,
         40.198
        ],
        [
         114.255,
         40.236
        ],
        [
         114.293,
         40.23
        ],
        [
         114.3,
         40.232
        ],
        [
         114.3,
         40.397
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.44
        ],
        [
         114.267,
         40.474
        ],
        [
         114.282,
         40.495
        ],
        [
         114.294,
         40.552
        ],
        [
         114.274,
         40.553
        ],
        [
         114.283,
         40.591
        ],
        [
         114.236,
         40.607
        ],
        [
         114.183,
         40.672
        ],
        [
         114.162,
         40.714
        ],
        [
         114.135,
         40.737
        ],
        [
         114.085,
         40.73
        ],
        [
         114.064,
         40.707
        ],
        [
         114.072,
         40.679
        ],
        [
         114.042,
         40.609
        ],
        [
         114.077,
         40.576
        ],
        [
         114.08,
         40.548
        ],
        [
         114.062,
         40.529
        ],
        [
         114.011,
         40.516
        ],
        [
         113.949,
         40.515
        ],
        [
         113.89,
         40.467
        ],
        [
         113.851,
         40.461
        ],
        [
         113.795,
         40.518
        ],
        [
         113.763,
         40.474
        ],
        [
         113.689,
         40.448
        ],
        [
         113.56,
         40.348
        ],
        [
         113.5,
         40.334
        ],
        [
         113.388,
         40.319
        ],
        [
         113.317,
         40.32
        ],
        [
         113.276,
         40.389
        ],
        [
         113.251,
         40.413
        ],
        [
         113.083,
         40.375
        ],
        [
         113.033,
         40.369
        ],
        [
         112.898,
         40.329
        ],
        [
         112.849,
         40.207
        ],
        [
         112.744,
         40.167
        ],
        [
         112.712,
         40.179
        ],
        [
         112.63,
         40.236
        ],
        [
         112.512,
         40.269
        ],
        [
         112.456,
         40.3
        ],
        [
         112.418,
         40.295
        ],
        [
         112.349,
         40.257
        ],
        [
         112.31,
         40.256
        ],
        [
         112.3,
         40.212
        ],
        [
         112.3,
         39.08
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.3,
        41.08
       ],
       [
        112.3,
        40.212
       ],
       [
        112.31,
        40.256
       ],
       [
        112.349,
        40.257
       ],
       [
        112.418,
        40.295
       ],
       [
        112.456,
        40.3
       ],
       [
        112.512,
        40.269
       ],
       [
        112.63,
        40.236
       ],
       [
        112.712,
        40.179
       ],
       [
        112.744,
        40.167
       ],
       [
        112.849,
        40.207
       ],
       [
        112.898,
        40.329
       ],
       [
        113.033,
        40.369
       ],
       [
        113.083,
        40.375
       ],
       [
        113.251,
        40.413
       ],
       [
        113.276,
        40.389
       ],
       [
        113.317,
        40.32
       ],
       [
        113.388,
        40.319
       ],
       [
        113.5,
        40.334
       ],
       [
        113.56,
        40.348
       ],
       [
        113.689,
        40.448
       ],
       [
        113.763,
        40.474
       ],
       [
        113.795,
        40.518
       ],
       [
        113.851,
        40.461
       ],
       [
        113.89,
        40.467
       ],
       [
        113.949,
        40.515
       ],
       [
        114.011,
        40.516
       ],
       [
        114.062,
        40.529
       ],
       [
        114.08,
        40.548
       ],
       [
        114.077,
        40.576
       ],
       [
        114.042,
        40.609
       ],
       [
        114.072,
        40.679
       ],
       [
        114.064,
        40.707
       ],
       [
        114.085,
        40.73
       ],
       [
        114.135,
        40.737
       ],
       [
        114.103,
        40.771
       ],
       [
        114.104,
        40.798
       ],
       [
        114.08,
        40.79
       ],
       [
        114.045,
        40.831
       ],
       [
        114.074,
        40.857
       ],
       [
        114.055,
        40.868
       ],
       [
        114.042,
        40.918
       ],
       [
        114.058,
        40.925
       ],
       [
        113.995,
        40.939
       ],
       [
        113.973,
        40.983
       ],
       [
        113.869,
        41.069
       ],
       [
        113.85,
        41.08
       ],
       [
        112.3,
        41.08
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   112.3,
   39.08,
   114.3,
   41.08
  ]
 }
};
