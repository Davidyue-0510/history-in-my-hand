// 本文件由 tools/build.py 自动生成（切片 taiwan_zhengchenggong），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiwan_zhengchenggong"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiwan_zhengchenggong"] = {
 "meta": {
  "kind": "frontier",
  "region": "jiangnan",
  "province": "taiwan",
  "title": "明·郑成功收复台湾（明郑）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "jinmen",
  "dossier_event": "event:ev_taiwan_zhengchenggong_01",
  "vocab_pack": "inline:taiwan_zhengchenggong",
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
    "note": "明·郑成功收复台湾（明郑）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·郑成功收复台湾（明郑）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明·郑成功收复台湾（明郑）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明·郑成功收复台湾（明郑）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   4,
   5,
   6
  ],
  "page": "county.html?scene=taiwan_zhengchenggong",
  "key": "taiwan_zhengchenggong",
  "scene_id": "taiwan_zhengchenggong"
 },
 "sources": [
  {
   "id": "taiwan_tongshi",
   "title": "《台湾通史》与郑成功",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "连横",
   "period": "明",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jinmen",
   "name": "金门",
   "type": "yi",
   "modern": "今中国福建省金门县",
   "note": "郑军基地之一。坐标据地名志条目：金门，标 approx。",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 118.323,
   "lat": 24.433,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目：金门（诚实回填 v0.221）。",
   "elev": 28
  },
  {
   "id": "xiamen",
   "name": "厦门",
   "type": "yi",
   "modern": "今中国福建省厦门市",
   "note": "郑军基地之一",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "taiwan",
   "name": "台湾",
   "type": "region",
   "modern": "今中国台湾省",
   "note": "郑成功收复之地",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "re_lan_ze_cheng",
   "name": "热兰遮城",
   "type": "fortress",
   "modern": "今中国台湾台南市安平区",
   "note": "荷兰人据点",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
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
   "name": "郑成功",
   "role": "延平郡王，明郑统帅",
   "note": "率军收复台湾",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "TAI__p02",
   "name": "揆一",
   "role": "荷兰东印度公司台湾长官",
   "note": "热兰遮城守将",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAI_001",
   "subject": "event:ev_taiwan_zhengchenggong_01",
   "predicate": "兵力",
   "value_text": "郑成功率舟师渡海",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "率舟师渡海",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率舟师渡海",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_002",
   "subject": "event:ev_taiwan_zhengchenggong_02",
   "predicate": "战役",
   "value_text": "围热兰遮城",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "围热兰遮城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "围热兰遮城",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_003",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "战役结果",
   "value_text": "荷人乃降",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "荷人乃降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷人乃降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_004",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "领土归属",
   "value_text": "台湾复入版图",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "台湾复入版图",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "台湾复入版图",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_005",
   "subject": "person:TAI__p01",
   "predicate": "政策",
   "value_text": "辟屯垦、通鱼盐",
   "time": {
    "era_text": "永历年间",
    "start": "1662"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "辟屯垦、通鱼盐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "辟屯垦、通鱼盐",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_006",
   "subject": "person:TAI__p01",
   "predicate": "政治立场",
   "value_text": "奉永历年号",
   "time": {
    "era_text": "永历年间",
    "start": "1662"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "奉永历年号",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "奉永历年号",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_007",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "荷兰损失",
   "value_text": "荷兰投降，失台湾",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "荷人乃降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷人乃降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_008",
   "subject": "event:ev_taiwan_zhengchenggong_01",
   "predicate": "出发地",
   "value_text": "自金厦出发",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "jinmen",
   "source": "taiwan_tongshi",
   "quote": "以金厦为基",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以金厦为基",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_009",
   "subject": "event:ev_taiwan_zhengchenggong_02",
   "predicate": "围城时间",
   "value_text": "围城数月",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "围热兰遮城",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "theater",
   "note": "原文未明言时长",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "围热兰遮城",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_010",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "荷兰投降条件",
   "value_text": "荷兰投降，未载条件",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "荷人乃降",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "原文未述细节",
   "dims": [
    6
   ],
   "lead": {
    "where": "荷兰东印度公司档案",
    "skills": [
     "荷兰语",
     "档案研究"
    ],
    "accept": "查得投降条约内容"
   },
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷人乃降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_011",
   "subject": "event:ev_taiwan_zhengchenggong_01",
   "predicate": "郑军兵力",
   "value_text": "原文未载兵力",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "率舟师渡海",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "需他书补",
   "dims": [
    6
   ],
   "lead": {
    "where": "《从征实录》",
    "skills": [
     "文献考据"
    ],
    "accept": "查得郑军船数人数"
   },
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率舟师渡海",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_012",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "荷兰伤亡",
   "value_text": "原文未载荷军伤亡",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "re_lan_ze_cheng",
   "source": "taiwan_tongshi",
   "quote": "荷人乃降",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "需荷方史料",
   "dims": [
    6
   ],
   "lead": {
    "where": "荷兰东印度公司档案",
    "skills": [
     "荷兰语",
     "档案研究"
    ],
    "accept": "查得荷军损失数字"
   },
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "荷人乃降",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAI_013",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "predicate": "郑成功评价",
   "value_text": "为明朔海外观瞻",
   "time": {
    "era_text": "永历年间",
    "start": "1662"
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "为明朔海外观瞻",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "史家评语",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为明朔海外观瞻",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "taiwan_zhengchenggong_DIM2",
   "subject": "技术:交通航运",
   "predicate": "技术维度",
   "value_text": "明·郑成功收复台湾（明郑） 的史料涉及交通航运（「ue_text\": \"郑成功率舟师渡海\", \"time\": {\"」），补标技术维度（推断）。",
   "time": {
    "era_text": "顺治十八年",
    "start": "1661-01-01",
    "end": "1661-12-31",
    "gregorian_year": 1661
   },
   "place": "taiwan",
   "source": "taiwan_tongshi",
   "quote": "「ue_text\": \"郑成功率舟师渡海\", \"time\": {\"」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "theater",
   "note": "[auto] 补层 inference dim2（诚实回填：文本含技术关键词）",
   "dims": [
    2
   ],
   "dim_source": "inferred",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TAI_010",
  "TAI_011",
  "TAI_012"
 ],
 "events": [
  {
   "id": "ev_taiwan_zhengchenggong_01",
   "subject": "event:ev_taiwan_zhengchenggong_01",
   "year": 1661,
   "era": "永历十五年（顺治十八年）",
   "title": "郑成功率师渡海",
   "kind": "战事",
   "text": "郑成功率舟师自金厦渡海攻台",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_zhengchenggong_02",
   "subject": "event:ev_taiwan_zhengchenggong_02",
   "year": 1661,
   "era": "永历十五年（顺治十八年）",
   "title": "围热兰遮城",
   "kind": "战事",
   "text": "郑军围攻热兰遮城",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_taiwan_zhengchenggong_03",
   "subject": "event:ev_taiwan_zhengchenggong_03",
   "year": 1662,
   "era": "永历十六年（顺治十八年）",
   "title": "荷兰投降",
   "kind": "战事",
   "text": "揆一降，台湾入明郑版图",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jinmen",
   "to": "taiwan",
   "type": "military",
   "label": "郑军渡海路线",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "xiamen",
   "to": "taiwan",
   "type": "military",
   "label": "郑军渡海路线",
   "_source_idx": 0,
   "_source_name": "《台湾通史》与郑成功",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
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
