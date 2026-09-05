// 本文件由 tools/build.py 自动生成（切片 zhejiang_linan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhejiang_linan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhejiang_linan_llm"] = {
 "meta": {
  "kind": "dynasty",
  "region": "jiangnan",
  "province": "zhejiang",
  "title": "南宋定都临安（1129–1276）",
  "dossier_label": "zhejiang_linan_llm",
  "subtitle": "",
  "primary_place": "hangzhou",
  "dossier_event": "event:ev_zhejiang_linan_llm_01",
  "vocab_pack": "inline:zhejiang_linan_llm",
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
  "epoch": "song",
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
    "note": "制度+思想→南宋偏安江南，科举文官与理学正统凝聚半壁；与金、蒙对峙，和战之议分裂"
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
    "note": "技術+制度→市舶司海贸、御街厢坊、运河转输，行在物力冠于当时"
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
    "note": "社會+制度→中原衣冠南渡，临安人口百万，客户佃农与瓦舍市井社会"
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
    "note": "地理+制度→倚江淮天险为屏、控明州海路，与金蒙划淮而治"
   }
  },
  "subject_names": [
   "person:ZHE__p01",
   "place:hangzhou",
   "place:xihu",
   "place:yujie",
   "place:jianghuai",
   "event:ev_zhejiang_linan_llm_01",
   "event:ev_zhejiang_linan_llm_02"
  ],
  "page": "county.html?scene=zhejiang_linan_llm",
  "key": "zhejiang_linan_llm",
  "scene_id": "zhejiang_linan_llm"
 },
 "sources": [
  {
   "id": "song_shi_gaozong_llm",
   "title": "宋史·高宗本纪（临安行在）",
   "party": "宋官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱等",
   "period": "元",
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
   "id": "hangzhou",
   "name": "杭州",
   "type": "city",
   "modern": "今中国浙江省杭州市",
   "note": "南宋都城临安",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 120.15,
   "lat": 30.27,
   "geo_unresolved": false,
   "elev": 98
  },
  {
   "id": "xihu",
   "name": "西湖",
   "type": "region",
   "modern": "今中国浙江省杭州市西湖区",
   "note": "临安城西之湖",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 120.13,
   "lat": 30.25,
   "geo_unresolved": false,
   "elev": 125
  },
  {
   "id": "yujie",
   "name": "御街",
   "type": "region",
   "modern": "今中国浙江省杭州市",
   "note": "临安城南北主干道",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 120.16,
   "lat": 30.25,
   "geo_unresolved": false,
   "elev": 105
  },
  {
   "id": "jianghuai",
   "name": "江淮",
   "type": "region",
   "modern": "今中国长江与淮河之间",
   "note": "南宋北方防线",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "lon": 119.0,
   "lat": 32.5,
   "geo_unresolved": false,
   "elev": 22
  }
 ],
 "persons": [
  {
   "id": "ZHE__p01",
   "name": "宋高宗",
   "role": "南宋皇帝",
   "note": "南渡定都临安",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "ZHE_001",
   "subject": "event:ev_zhejiang_linan_llm_01",
   "predicate": "建置",
   "value_text": "升杭州为临安府",
   "time": {
    "era_text": "建炎三年",
    "start": "1129-01-01",
    "end": "1129-12-31",
    "gregorian_year": 1129
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "建炎三年，升杭州为临安府",
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
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "建炎三年，升杭州为临安府",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_002",
   "subject": "event:ev_zhejiang_linan_llm_02",
   "predicate": "定都",
   "value_text": "定都临安，是为行在",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "绍兴八年，定都临安，是为行在",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "绍兴八年，定都临安，是为行在",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_003",
   "subject": "place:xihu",
   "predicate": "地理特征",
   "value_text": "西湖三面环山",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "xihu",
   "source": "song_shi_gaozong_llm",
   "quote": "西湖三面环山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "西湖三面环山",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_004",
   "subject": "place:yujie",
   "predicate": "城市布局",
   "value_text": "御街贯穿南北",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "yujie",
   "source": "song_shi_gaozong_llm",
   "quote": "御街贯穿南北",
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
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "御街贯穿南北",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_005",
   "subject": "place:hangzhou",
   "predicate": "商业繁荣",
   "value_text": "商贾辐辏，市舶之利甲于天下",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "商贾辐辏，海上市舶之利甲于天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "商贾辐辏，海上市舶之利甲于天下",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_006",
   "subject": "place:jianghuai",
   "predicate": "军事防线",
   "value_text": "倚江淮为屏，与金蒙对峙",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "jianghuai",
   "source": "song_shi_gaozong_llm",
   "quote": "倚江淮为屏，与金、蒙对峙百五十载",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "倚江淮为屏，与金、蒙对峙百五十载",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_007",
   "subject": "place:hangzhou",
   "predicate": "文化娱乐",
   "value_text": "瓦舍勾栏林立",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "瓦舍勾栏林立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "瓦舍勾栏林立",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_008",
   "subject": "event:ev_zhejiang_linan_llm_02",
   "predicate": "都城性质",
   "value_text": "临安为行在，非正式都城",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "是为行在",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "学界对行在性质有争议",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "是为行在",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_009",
   "subject": "place:hangzhou",
   "predicate": "经济地位",
   "value_text": "市舶之利甲于天下",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "海上市舶之利甲于天下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "海上市舶之利甲于天下",
   "dim_source": "declared",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_010",
   "subject": "place:jianghuai",
   "predicate": "对峙时间",
   "value_text": "与金蒙对峙百五十载",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "jianghuai",
   "source": "song_shi_gaozong_llm",
   "quote": "与金、蒙对峙百五十载",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "与金、蒙对峙百五十载",
   "dim_source": "fallback",
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_011",
   "subject": "place:hangzhou",
   "predicate": "城市人口",
   "value_text": "临安人口具体数字未载",
   "time": {
    "era_text": "南宋",
    "start": "1127"
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料未载具体人口",
   "dims": [
    4
   ],
   "lead": {
    "where": "临安府志或宋会要",
    "skills": [
     "历史人口学",
     "方志学"
    ],
    "accept": "临安人口具体数据"
   },
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHE_012",
   "subject": "event:ev_zhejiang_linan_llm_02",
   "predicate": "定都原因",
   "value_text": "定都临安原因未明",
   "time": {
    "era_text": "绍兴八年",
    "start": "1138-01-01",
    "end": "1138-12-31",
    "gregorian_year": 1138
   },
   "place": "hangzhou",
   "source": "song_shi_gaozong_llm",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载定都具体原因",
   "dims": [
    3,
    6
   ],
   "lead": {
    "where": "建炎以来系年要录",
    "skills": [
     "宋史",
     "政治地理"
    ],
    "accept": "定都临安决策过程"
   },
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "宋官修",
   "_faction": null
  },
  {
   "id": "ZHEJG2",
   "subject": "event:ev_zhejiang_linan_llm_01",
   "predicate": "研究缺口",
   "value_text": "此場景關於「技術」維度的直接史料與考訂尚有缺環，待按原始文獻擴充。",
   "time": {
    "era_text": "zhejiang_linan_llm",
    "start": "1138",
    "end": "1138",
    "gregorian_year": 1138
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "dynasty",
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
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "ZHE_011",
  "ZHE_012",
  "ZHEJG2"
 ],
 "events": [
  {
   "id": "ev_zhejiang_linan_llm_01",
   "subject": "event:ev_zhejiang_linan_llm_01",
   "year": 1129,
   "era": "建炎三年",
   "title": "升杭州为临安府",
   "kind": "建置",
   "text": "升杭州为临安府",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zhejiang_linan_llm_02",
   "subject": "event:ev_zhejiang_linan_llm_02",
   "year": 1138,
   "era": "绍兴八年",
   "title": "定都临安",
   "kind": "行政",
   "text": "定都临安，是为行在",
   "_source_idx": 0,
   "_source_name": "宋史·高宗本纪（临安行在）",
   "_source_party": "宋官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "hangzhou",
   "party": "宋官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 宋官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "hangzhou",
   "name": "杭州",
   "lon": 120.15,
   "lat": 30.27,
   "region": "jiangnan"
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
   "宋官修",
   "综合史料"
  ],
  "party_bucket": {
   "宋官修": "宋官修",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "宋官修": "#8C6239",
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
        121.16,
        30.302
       ],
       [
        121.159,
        30.302
       ],
       [
        120.904,
        30.161
       ],
       [
        120.633,
        30.133
       ],
       [
        120.495,
        30.303
       ],
       [
        120.353,
        30.247
       ],
       [
        120.261,
        30.263
       ],
       [
        120.229,
        30.25
       ],
       [
        120.195,
        30.241
       ],
       [
        120.246,
        30.284
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
        121.16,
        30.632
       ],
       [
        121.16,
        31.656
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
        121.16,
        31.845
       ],
       [
        121.16,
        32.506
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
        120.609,
        33.5
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
        118.0,
        29.25
       ],
       [
        118.0,
        33.5
       ],
       [
        120.609,
        33.5
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
        121.16,
        32.506
       ],
       [
        121.16,
        31.845
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
        121.16,
        31.656
       ],
       [
        121.16,
        30.632
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
        120.246,
        30.284
       ],
       [
        120.195,
        30.241
       ],
       [
        120.229,
        30.25
       ],
       [
        120.261,
        30.263
       ],
       [
        120.353,
        30.247
       ],
       [
        120.495,
        30.303
       ],
       [
        120.633,
        30.133
       ],
       [
        120.904,
        30.161
       ],
       [
        121.159,
        30.302
       ],
       [
        121.16,
        30.302
       ],
       [
        121.16,
        29.25
       ],
       [
        118.0,
        29.25
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
         121.16,
         30.774
        ],
        [
         121.16,
         31.422
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
         121.16,
         31.798
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
         121.16,
         31.74
        ],
        [
         121.16,
         31.798
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
         118.11,
         33.5
        ],
        [
         118.107,
         33.475
        ],
        [
         118.051,
         33.492
        ],
        [
         118.027,
         33.455
        ],
        [
         118.017,
         33.403
        ],
        [
         118.029,
         33.375
        ],
        [
         118.0,
         33.341
        ],
        [
         118.0,
         33.174
        ],
        [
         118.037,
         33.152
        ],
        [
         118.038,
         33.135
        ],
        [
         118.149,
         33.169
        ],
        [
         118.178,
         33.218
        ],
        [
         118.217,
         33.192
        ],
        [
         118.22,
         33.114
        ],
        [
         118.244,
         33.028
        ],
        [
         118.245,
         32.998
        ],
        [
         118.269,
         32.969
        ],
        [
         118.304,
         32.969
        ],
        [
         118.292,
         32.946
        ],
        [
         118.252,
         32.937
        ],
        [
         118.233,
         32.914
        ],
        [
         118.25,
         32.848
        ],
        [
         118.301,
         32.846
        ],
        [
         118.3,
         32.783
        ],
        [
         118.334,
         32.762
        ],
        [
         118.363,
         32.771
        ],
        [
         118.375,
         32.719
        ],
        [
         118.411,
         32.716
        ],
        [
         118.451,
         32.744
        ],
        [
         118.484,
         32.721
        ],
        [
         118.56,
         32.73
        ],
        [
         118.572,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.707,
         32.72
        ],
        [
         118.757,
         32.737
        ],
        [
         118.738,
         32.773
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.81,
         32.854
        ],
        [
         118.821,
         32.921
        ],
        [
         118.847,
         32.922
        ],
        [
         118.849,
         32.957
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.893,
         32.941
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
         118.891,
         32.553
        ],
        [
         118.908,
         32.592
        ],
        [
         118.843,
         32.568
        ],
        [
         118.821,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.757,
         32.604
        ],
        [
         118.735,
         32.589
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.689,
         32.588
        ],
        [
         118.659,
         32.594
        ],
        [
         118.633,
         32.578
        ],
        [
         118.597,
         32.601
        ],
        [
         118.569,
         32.586
        ],
        [
         118.564,
         32.562
        ],
        [
         118.609,
         32.537
        ],
        [
         118.592,
         32.481
        ],
        [
         118.629,
         32.468
        ],
        [
         118.691,
         32.472
        ],
        [
         118.685,
         32.404
        ],
        [
         118.703,
         32.329
        ],
        [
         118.657,
         32.301
        ],
        [
         118.675,
         32.25
        ],
        [
         118.644,
         32.21
        ],
        [
         118.511,
         32.194
        ],
        [
         118.495,
         32.165
        ],
        [
         118.501,
         32.122
        ],
        [
         118.434,
         32.087
        ],
        [
         118.394,
         32.076
        ],
        [
         118.39,
         31.985
        ],
        [
         118.364,
         31.93
        ],
        [
         118.472,
         31.88
        ],
        [
         118.467,
         31.858
        ],
        [
         118.505,
         31.842
        ],
        [
         118.482,
         31.778
        ],
        [
         118.534,
         31.767
        ],
        [
         118.522,
         31.743
        ],
        [
         118.558,
         31.73
        ],
        [
         118.572,
         31.746
        ],
        [
         118.641,
         31.759
        ],
        [
         118.654,
         31.73
        ],
        [
         118.698,
         31.71
        ],
        [
         118.643,
         31.672
        ],
        [
         118.643,
         31.65
        ],
        [
         118.736,
         31.633
        ],
        [
         118.748,
         31.676
        ],
        [
         118.774,
         31.683
        ],
        [
         118.803,
         31.619
        ],
        [
         118.859,
         31.624
        ],
        [
         118.882,
         31.564
        ],
        [
         118.886,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.852,
         31.394
        ],
        [
         118.824,
         31.376
        ],
        [
         118.768,
         31.364
        ],
        [
         118.746,
         31.373
        ],
        [
         118.721,
         31.323
        ],
        [
         118.726,
         31.282
        ],
        [
         118.757,
         31.28
        ],
        [
         118.795,
         31.229
        ],
        [
         118.871,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         119.015,
         31.242
        ],
        [
         119.105,
         31.235
        ],
        [
         119.107,
         31.251
        ],
        [
         119.158,
         31.295
        ],
        [
         119.198,
         31.295
        ],
        [
         119.198,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
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
         121.16,
         31.422
        ],
        [
         121.16,
         31.74
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
         121.16,
         31.798
        ],
        [
         121.16,
         32.527
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
         120.689,
         33.5
        ],
        [
         118.11,
         33.5
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
         121.16,
         29.25
        ],
        [
         121.16,
         30.456
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
         121.16,
         30.609
        ],
        [
         121.16,
         30.774
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
         119.58,
         30.967
        ],
        [
         119.582,
         30.932
        ],
        [
         119.564,
         30.919
        ],
        [
         119.557,
         30.874
        ],
        [
         119.576,
         30.83
        ],
        [
         119.554,
         30.826
        ],
        [
         119.527,
         30.779
        ],
        [
         119.48,
         30.772
        ],
        [
         119.483,
         30.704
        ],
        [
         119.445,
         30.65
        ],
        [
         119.408,
         30.645
        ],
        [
         119.39,
         30.686
        ],
        [
         119.343,
         30.664
        ],
        [
         119.323,
         30.63
        ],
        [
         119.239,
         30.609
        ],
        [
         119.265,
         30.575
        ],
        [
         119.237,
         30.547
        ],
        [
         119.272,
         30.51
        ],
        [
         119.326,
         30.533
        ],
        [
         119.336,
         30.509
        ],
        [
         119.335,
         30.448
        ],
        [
         119.368,
         30.385
        ],
        [
         119.403,
         30.375
        ],
        [
         119.349,
         30.349
        ],
        [
         119.326,
         30.372
        ],
        [
         119.277,
         30.341
        ],
        [
         119.247,
         30.341
        ],
        [
         119.236,
         30.297
        ],
        [
         119.201,
         30.291
        ],
        [
         119.127,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.063,
         30.305
        ],
        [
         118.989,
         30.332
        ],
        [
         118.954,
         30.36
        ],
        [
         118.88,
         30.315
        ],
        [
         118.878,
         30.283
        ],
        [
         118.905,
         30.216
        ],
        [
         118.93,
         30.203
        ],
        [
         118.853,
         30.167
        ],
        [
         118.852,
         30.15
        ],
        [
         118.895,
         30.149
        ],
        [
         118.874,
         30.115
        ],
        [
         118.879,
         30.065
        ],
        [
         118.903,
         30.029
        ],
        [
         118.895,
         29.938
        ],
        [
         118.839,
         29.935
        ],
        [
         118.841,
         29.891
        ],
        [
         118.741,
         29.815
        ],
        [
         118.745,
         29.739
        ],
        [
         118.701,
         29.706
        ],
        [
         118.647,
         29.643
        ],
        [
         118.62,
         29.654
        ],
        [
         118.574,
         29.638
        ],
        [
         118.532,
         29.589
        ],
        [
         118.5,
         29.576
        ],
        [
         118.496,
         29.519
        ],
        [
         118.382,
         29.505
        ],
        [
         118.348,
         29.474
        ],
        [
         118.33,
         29.495
        ],
        [
         118.306,
         29.479
        ],
        [
         118.316,
         29.423
        ],
        [
         118.248,
         29.431
        ],
        [
         118.193,
         29.395
        ],
        [
         118.205,
         29.344
        ],
        [
         118.167,
         29.314
        ],
        [
         118.178,
         29.298
        ],
        [
         118.139,
         29.284
        ],
        [
         118.078,
         29.291
        ],
        [
         118.076,
         29.25
        ],
        [
         121.16,
         29.25
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
         118.0,
         33.5
        ],
        [
         118.0,
         29.577
        ],
        [
         118.004,
         29.578
        ],
        [
         118.043,
         29.566
        ],
        [
         118.051,
         29.543
        ],
        [
         118.095,
         29.534
        ],
        [
         118.144,
         29.49
        ],
        [
         118.128,
         29.472
        ],
        [
         118.136,
         29.419
        ],
        [
         118.193,
         29.395
        ],
        [
         118.248,
         29.431
        ],
        [
         118.316,
         29.423
        ],
        [
         118.306,
         29.479
        ],
        [
         118.33,
         29.495
        ],
        [
         118.348,
         29.474
        ],
        [
         118.382,
         29.505
        ],
        [
         118.496,
         29.519
        ],
        [
         118.5,
         29.576
        ],
        [
         118.532,
         29.589
        ],
        [
         118.574,
         29.638
        ],
        [
         118.62,
         29.654
        ],
        [
         118.647,
         29.643
        ],
        [
         118.701,
         29.706
        ],
        [
         118.745,
         29.739
        ],
        [
         118.741,
         29.815
        ],
        [
         118.841,
         29.891
        ],
        [
         118.839,
         29.935
        ],
        [
         118.895,
         29.938
        ],
        [
         118.903,
         30.029
        ],
        [
         118.879,
         30.065
        ],
        [
         118.874,
         30.115
        ],
        [
         118.895,
         30.149
        ],
        [
         118.852,
         30.15
        ],
        [
         118.853,
         30.167
        ],
        [
         118.93,
         30.203
        ],
        [
         118.905,
         30.216
        ],
        [
         118.878,
         30.283
        ],
        [
         118.88,
         30.315
        ],
        [
         118.954,
         30.36
        ],
        [
         118.989,
         30.332
        ],
        [
         119.063,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.127,
         30.305
        ],
        [
         119.201,
         30.291
        ],
        [
         119.236,
         30.297
        ],
        [
         119.247,
         30.341
        ],
        [
         119.277,
         30.341
        ],
        [
         119.326,
         30.372
        ],
        [
         119.349,
         30.349
        ],
        [
         119.403,
         30.375
        ],
        [
         119.368,
         30.385
        ],
        [
         119.335,
         30.448
        ],
        [
         119.336,
         30.509
        ],
        [
         119.326,
         30.533
        ],
        [
         119.272,
         30.51
        ],
        [
         119.237,
         30.547
        ],
        [
         119.265,
         30.575
        ],
        [
         119.239,
         30.609
        ],
        [
         119.323,
         30.63
        ],
        [
         119.343,
         30.664
        ],
        [
         119.39,
         30.686
        ],
        [
         119.408,
         30.645
        ],
        [
         119.445,
         30.65
        ],
        [
         119.483,
         30.704
        ],
        [
         119.48,
         30.772
        ],
        [
         119.527,
         30.779
        ],
        [
         119.554,
         30.826
        ],
        [
         119.576,
         30.83
        ],
        [
         119.557,
         30.874
        ],
        [
         119.564,
         30.919
        ],
        [
         119.582,
         30.932
        ],
        [
         119.58,
         30.967
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
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.198,
         31.27
        ],
        [
         119.198,
         31.295
        ],
        [
         119.158,
         31.295
        ],
        [
         119.107,
         31.251
        ],
        [
         119.105,
         31.235
        ],
        [
         119.015,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         118.871,
         31.242
        ],
        [
         118.795,
         31.229
        ],
        [
         118.757,
         31.28
        ],
        [
         118.726,
         31.282
        ],
        [
         118.721,
         31.323
        ],
        [
         118.746,
         31.373
        ],
        [
         118.768,
         31.364
        ],
        [
         118.824,
         31.376
        ],
        [
         118.852,
         31.394
        ],
        [
         118.884,
         31.5
        ],
        [
         118.857,
         31.506
        ],
        [
         118.866,
         31.519
        ],
        [
         118.886,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.859,
         31.624
        ],
        [
         118.803,
         31.619
        ],
        [
         118.774,
         31.683
        ],
        [
         118.748,
         31.676
        ],
        [
         118.736,
         31.633
        ],
        [
         118.643,
         31.65
        ],
        [
         118.643,
         31.672
        ],
        [
         118.698,
         31.71
        ],
        [
         118.654,
         31.73
        ],
        [
         118.641,
         31.759
        ],
        [
         118.572,
         31.746
        ],
        [
         118.558,
         31.73
        ],
        [
         118.522,
         31.743
        ],
        [
         118.534,
         31.767
        ],
        [
         118.482,
         31.778
        ],
        [
         118.505,
         31.842
        ],
        [
         118.467,
         31.858
        ],
        [
         118.472,
         31.88
        ],
        [
         118.364,
         31.93
        ],
        [
         118.39,
         31.985
        ],
        [
         118.394,
         32.076
        ],
        [
         118.434,
         32.087
        ],
        [
         118.501,
         32.122
        ],
        [
         118.495,
         32.165
        ],
        [
         118.511,
         32.194
        ],
        [
         118.644,
         32.21
        ],
        [
         118.675,
         32.25
        ],
        [
         118.657,
         32.301
        ],
        [
         118.703,
         32.329
        ],
        [
         118.685,
         32.404
        ],
        [
         118.691,
         32.472
        ],
        [
         118.629,
         32.468
        ],
        [
         118.592,
         32.481
        ],
        [
         118.609,
         32.537
        ],
        [
         118.564,
         32.562
        ],
        [
         118.569,
         32.586
        ],
        [
         118.597,
         32.601
        ],
        [
         118.633,
         32.578
        ],
        [
         118.659,
         32.594
        ],
        [
         118.689,
         32.588
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.735,
         32.589
        ],
        [
         118.757,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.821,
         32.604
        ],
        [
         118.843,
         32.568
        ],
        [
         118.908,
         32.592
        ],
        [
         118.891,
         32.553
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
         118.893,
         32.941
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.849,
         32.957
        ],
        [
         118.847,
         32.922
        ],
        [
         118.821,
         32.921
        ],
        [
         118.81,
         32.854
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.738,
         32.773
        ],
        [
         118.757,
         32.737
        ],
        [
         118.707,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.572,
         32.72
        ],
        [
         118.56,
         32.73
        ],
        [
         118.484,
         32.721
        ],
        [
         118.451,
         32.744
        ],
        [
         118.411,
         32.716
        ],
        [
         118.375,
         32.719
        ],
        [
         118.363,
         32.771
        ],
        [
         118.334,
         32.762
        ],
        [
         118.3,
         32.783
        ],
        [
         118.301,
         32.846
        ],
        [
         118.25,
         32.848
        ],
        [
         118.233,
         32.914
        ],
        [
         118.252,
         32.937
        ],
        [
         118.292,
         32.946
        ],
        [
         118.304,
         32.969
        ],
        [
         118.269,
         32.969
        ],
        [
         118.245,
         32.998
        ],
        [
         118.244,
         33.028
        ],
        [
         118.22,
         33.114
        ],
        [
         118.217,
         33.192
        ],
        [
         118.178,
         33.218
        ],
        [
         118.149,
         33.169
        ],
        [
         118.038,
         33.135
        ],
        [
         118.037,
         33.152
        ],
        [
         118.0,
         33.174
        ],
        [
         118.0,
         33.341
        ],
        [
         118.029,
         33.375
        ],
        [
         118.017,
         33.403
        ],
        [
         118.027,
         33.455
        ],
        [
         118.051,
         33.492
        ],
        [
         118.107,
         33.475
        ],
        [
         118.11,
         33.5
        ],
        [
         118.0,
         33.5
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.857,
         31.506
        ],
        [
         118.884,
         31.5
        ],
        [
         118.886,
         31.519
        ],
        [
         118.866,
         31.519
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
         118.193,
         29.395
        ],
        [
         118.136,
         29.419
        ],
        [
         118.128,
         29.472
        ],
        [
         118.144,
         29.49
        ],
        [
         118.095,
         29.534
        ],
        [
         118.051,
         29.543
        ],
        [
         118.043,
         29.566
        ],
        [
         118.004,
         29.578
        ],
        [
         118.0,
         29.577
        ],
        [
         118.0,
         29.25
        ],
        [
         118.076,
         29.25
        ],
        [
         118.078,
         29.291
        ],
        [
         118.139,
         29.284
        ],
        [
         118.178,
         29.298
        ],
        [
         118.167,
         29.314
        ],
        [
         118.205,
         29.344
        ],
        [
         118.193,
         29.395
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        118.0,
        31.202
       ],
       [
        118.089,
        31.255
       ],
       [
        118.24,
        31.29
       ],
       [
        118.312,
        31.341
       ],
       [
        118.305,
        31.406
       ],
       [
        118.333,
        31.51
       ],
       [
        118.395,
        31.653
       ],
       [
        118.515,
        31.841
       ],
       [
        118.692,
        32.074
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
        118.605,
        33.172
       ],
       [
        118.574,
        33.141
       ],
       [
        118.519,
        33.036
       ],
       [
        118.492,
        32.998
       ],
       [
        118.431,
        32.973
       ],
       [
        118.267,
        32.925
       ],
       [
        118.227,
        32.897
       ],
       [
        118.183,
        32.885
       ],
       [
        118.171,
        32.906
       ],
       [
        118.192,
        32.941
       ],
       [
        118.181,
        32.971
       ],
       [
        118.142,
        32.986
       ],
       [
        118.088,
        32.958
       ],
       [
        118.066,
        32.936
       ],
       [
        118.05,
        32.964
       ],
       [
        118.084,
        33.005
       ],
       [
        118.13,
        33.028
       ],
       [
        118.226,
        32.991
       ],
       [
        118.24,
        33.008
       ],
       [
        118.234,
        33.046
       ],
       [
        118.182,
        33.139
       ],
       [
        118.102,
        33.144
       ],
       [
        118.0,
        33.143
       ],
       [
        118.0,
        33.189
       ],
       [
        118.114,
        33.215
       ],
       [
        118.175,
        33.21
       ],
       [
        118.227,
        33.143
       ],
       [
        118.275,
        33.045
       ],
       [
        118.34,
        32.994
       ],
       [
        118.407,
        33.01
       ],
       [
        118.417,
        33.038
       ],
       [
        118.44,
        33.068
       ],
       [
        118.46,
        33.099
       ],
       [
        118.47,
        33.128
       ],
       [
        118.454,
        33.16
       ],
       [
        118.322,
        33.182
       ],
       [
        118.249,
        33.221
       ],
       [
        118.233,
        33.288
       ],
       [
        118.273,
        33.267
       ],
       [
        118.318,
        33.268
       ],
       [
        118.392,
        33.338
       ],
       [
        118.446,
        33.407
       ],
       [
        118.49,
        33.401
       ],
       [
        118.57,
        33.372
       ],
       [
        118.607,
        33.376
       ],
       [
        118.547,
        33.437
       ],
       [
        118.511,
        33.5
       ],
       [
        118.624,
        33.5
       ],
       [
        118.664,
        33.463
       ],
       [
        118.774,
        33.443
       ],
       [
        118.861,
        33.357
       ],
       [
        118.861,
        33.339
       ],
       [
        118.834,
        33.304
       ],
       [
        118.778,
        33.176
       ],
       [
        118.716,
        33.089
       ],
       [
        118.681,
        33.077
       ],
       [
        118.678,
        33.124
       ],
       [
        118.653,
        33.174
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ]
      ]
     ]
    },
    "n": "Hongze Hu"
   },
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
        118.907,
        33.058
       ],
       [
        118.882,
        33.077
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
        118.78,
        31.409
       ],
       [
        118.768,
        31.419
       ],
       [
        118.747,
        31.459
       ],
       [
        118.743,
        31.492
       ],
       [
        118.724,
        31.522
       ],
       [
        118.723,
        31.542
       ],
       [
        118.758,
        31.545
       ],
       [
        118.867,
        31.546
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
        118.915,
        31.435
       ],
       [
        118.85,
        31.393
       ],
       [
        118.815,
        31.402
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   }
  ],
  "_bbox": [
   118.0,
   29.25,
   121.16,
   33.5
  ]
 }
};
