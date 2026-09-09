// 本文件由 tools/build.py 自动生成（切片 zhejiang_longquan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhejiang_longquan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhejiang_longquan"] = {
 "meta": {
  "kind": "tech",
  "region": "jiangnan",
  "province": "zhejiang",
  "title": "宋·龙泉窑（青瓷之冠）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "longquan",
  "dossier_event": "event:ev_zhejiang_longquan_01",
  "vocab_pack": "inline:zhejiang_longquan",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "song",
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
    "note": "宋·龙泉窑（青瓷之冠）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·龙泉窑（青瓷之冠）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宋·龙泉窑（青瓷之冠）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "宋·龙泉窑（青瓷之冠）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=zhejiang_longquan",
  "key": "zhejiang_longquan",
  "scene_id": "zhejiang_longquan"
 },
 "sources": [
  {
   "id": "songshi_longquan",
   "title": "《宋史·食货志》与龙泉窑",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱",
   "period": "宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "longquan",
   "name": "龙泉",
   "type": "city",
   "modern": "今中国浙江省龙泉市",
   "note": "窑场沿溪弥望",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.14,
   "lat": 28.07,
   "geo_note": "今浙江龙泉市（龙泉窑）",
   "elev": 387
  },
  {
   "id": "chuzhou",
   "name": "处州",
   "type": "region",
   "modern": "今中国浙江省丽水市一带",
   "note": "龙泉窑所在州府",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.92,
   "lat": 28.45,
   "geo_note": "今浙江丽水（宋处州）",
   "elev": 116
  },
  {
   "id": "yueyao",
   "name": "越窑",
   "type": "region",
   "modern": "今中国浙江省绍兴、宁波一带",
   "note": "宋室南渡后衰落",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 121.0,
   "lat": 29.8,
   "geo_note": "今浙江绍兴、宁波一带（越窑代表点）",
   "elev": 206
  }
 ],
 "persons": [
  {
   "id": "ZHE__p01",
   "name": "宋高宗",
   "role": "南宋皇帝",
   "note": "南渡后定都临安，推动南方瓷业发展",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "ZHE_001",
   "subject": "event:ev_zhejiang_longquan_01",
   "predicate": "窑业兴衰",
   "value_text": "宋室南渡后越窑衰，龙泉窑兴",
   "time": {
    "era_text": "宋室南渡",
    "start": "1127"
   },
   "place": "yueyao",
   "source": "songshi_longquan",
   "quote": "宋室南渡，越窑既衰",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宋室南渡，越窑既衰",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_002",
   "subject": "event:ev_zhejiang_longquan_02",
   "predicate": "瓷器品质",
   "value_text": "龙泉瓷青莹，粉青梅子青冠绝",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "琢瓷青莹，粉青、梅子青之色冠绝一时",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "琢瓷青莹，粉青、梅子青之色冠绝一时",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_003",
   "subject": "event:ev_zhejiang_longquan_03",
   "predicate": "海外贸易",
   "value_text": "龙泉瓷舶售海外，番舶争市",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "舶售海外，番舶争市",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "舶售海外，番舶争市",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_004",
   "subject": "place:longquan",
   "predicate": "窑场规模",
   "value_text": "窑场沿溪弥望，规模宏大",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "窑场沿溪弥望",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "窑场沿溪弥望",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_005",
   "subject": "place:longquan",
   "predicate": "经济贡献",
   "value_text": "厘税所入，为国用一助",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "厘税所入，为国用一助",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "厘税所入，为国用一助",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_006",
   "subject": "place:longquan",
   "predicate": "产业地位",
   "value_text": "东南瓷业之盛，以龙泉为最",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "东南瓷业之盛也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "东南瓷业之盛也",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_007",
   "subject": "event:ev_zhejiang_longquan_01",
   "predicate": "窑业转移",
   "value_text": "越窑衰而龙泉兴，中心南移",
   "time": {
    "era_text": "宋室南渡",
    "start": "1127"
   },
   "place": "yueyao",
   "source": "songshi_longquan",
   "quote": "越窑既衰，处州龙泉窑兴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "越窑既衰，处州龙泉窑兴",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_008",
   "subject": "event:ev_zhejiang_longquan_02",
   "predicate": "技术特色",
   "value_text": "粉青、梅子青釉色为青瓷之冠",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "粉青、梅子青之色冠绝一时",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "粉青、梅子青之色冠绝一时",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_009",
   "subject": "event:ev_zhejiang_longquan_03",
   "predicate": "贸易路线",
   "value_text": "龙泉瓷经海路销往海外",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "舶售海外",
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
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "舶售海外",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_010",
   "subject": "place:longquan",
   "predicate": "窑场分布",
   "value_text": "窑场沿溪分布，数量众多",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "窑场沿溪弥望",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "窑场沿溪弥望",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_011",
   "subject": "event:ev_zhejiang_longquan_02",
   "predicate": "历史评价",
   "value_text": "龙泉窑为青瓷之冠，后世推崇",
   "time": {
    "era_text": "后世",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "青瓷之冠",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后世学者评价",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "青瓷之冠",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_012",
   "subject": "event:ev_zhejiang_longquan_03",
   "predicate": "贸易规模",
   "value_text": "番舶争市，外销数量巨大",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "番舶争市",
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
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "番舶争市",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_013",
   "subject": "place:longquan",
   "predicate": "税收贡献",
   "value_text": "厘税收入补充国库，经济重要",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "厘税所入，为国用一助",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "厘税所入，为国用一助",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_014",
   "subject": "place:longquan",
   "predicate": "产业影响",
   "value_text": "龙泉窑带动东南瓷业发展",
   "time": {
    "era_text": "南宋",
    "start": "1200"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "东南瓷业之盛也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "东南瓷业之盛也",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "ZHE_015",
   "subject": "place:longquan",
   "predicate": "窑址考古",
   "value_text": "龙泉窑址分布范围待考",
   "time": {
    "era_text": "现代",
    "start": "2024"
   },
   "place": "longquan",
   "source": "songshi_longquan",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏具体窑址数据",
   "dims": [
    1
   ],
   "lead": {
    "where": "龙泉溪两岸",
    "skills": [
     "考古调查",
     "遥感分析"
    ],
    "accept": "确定窑址分布范围"
   },
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "ZHE_015"
 ],
 "events": [
  {
   "id": "ev_zhejiang_longquan_01",
   "subject": "event:ev_zhejiang_longquan_01",
   "year": 1127,
   "era": "建炎元年",
   "title": "宋室南渡",
   "kind": "其他",
   "text": "宋室南渡，越窑衰，龙泉窑兴",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zhejiang_longquan_02",
   "subject": "event:ev_zhejiang_longquan_02",
   "year": 1200,
   "era": "南宋中期",
   "title": "龙泉窑兴盛",
   "kind": "建置",
   "text": "龙泉窑琢瓷青莹，粉青梅子青冠绝",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_zhejiang_longquan_03",
   "subject": "event:ev_zhejiang_longquan_03",
   "year": 1200,
   "era": "南宋中期",
   "title": "海外贸易",
   "kind": "外交",
   "text": "龙泉瓷舶售海外，番舶争市",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "longquan",
   "to": "chuzhou",
   "type": "military",
   "label": "窑场分布",
   "_source_idx": 0,
   "_source_name": "《宋史·食货志》与龙泉窑",
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
       122.0,
       30.142
      ],
      [
       121.969,
       30.143
      ],
      [
       121.978,
       30.064
      ],
      [
       122.0,
       30.04
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
       121.205,
       28.204
      ],
      [
       121.134,
       28.135
      ],
      [
       121.132,
       28.063
      ],
      [
       121.164,
       28.062
      ],
      [
       121.251,
       28.086
      ],
      [
       121.251,
       28.145
      ],
      [
       121.234,
       28.181
      ],
      [
       121.205,
       28.204
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
        120.261,
        27.07
       ],
       [
        120.279,
        27.097
       ],
       [
        120.385,
        27.156
       ],
       [
        120.469,
        27.256
       ],
       [
        120.54,
        27.318
       ],
       [
        120.608,
        27.412
       ],
       [
        120.629,
        27.482
       ],
       [
        120.588,
        27.581
       ],
       [
        120.665,
        27.639
       ],
       [
        120.661,
        27.688
       ],
       [
        120.685,
        27.745
       ],
       [
        120.833,
        27.891
       ],
       [
        120.833,
        27.938
       ],
       [
        120.763,
        27.977
       ],
       [
        120.748,
        28.01
       ],
       [
        120.813,
        28.013
       ],
       [
        120.892,
        28.004
       ],
       [
        120.959,
        28.037
       ],
       [
        121.035,
        28.157
       ],
       [
        121.098,
        28.291
       ],
       [
        121.146,
        28.327
       ],
       [
        121.217,
        28.346
       ],
       [
        121.272,
        28.222
       ],
       [
        121.355,
        28.23
       ],
       [
        121.51,
        28.324
       ],
       [
        121.61,
        28.292
       ],
       [
        121.602,
        28.367
       ],
       [
        121.538,
        28.521
       ],
       [
        121.475,
        28.641
       ],
       [
        121.519,
        28.714
       ],
       [
        121.59,
        28.735
       ],
       [
        121.63,
        28.768
       ],
       [
        121.662,
        28.851
       ],
       [
        121.54,
        28.932
       ],
       [
        121.641,
        28.916
       ],
       [
        121.68,
        28.953
       ],
       [
        121.665,
        29.011
       ],
       [
        121.521,
        29.118
       ],
       [
        121.448,
        29.131
       ],
       [
        121.487,
        29.193
       ],
       [
        121.534,
        29.237
       ],
       [
        121.656,
        29.236
       ],
       [
        121.717,
        29.256
       ],
       [
        121.791,
        29.226
       ],
       [
        121.854,
        29.129
       ],
       [
        121.918,
        29.135
       ],
       [
        121.968,
        29.491
       ],
       [
        121.941,
        29.606
       ],
       [
        121.888,
        29.628
       ],
       [
        121.822,
        29.605
       ],
       [
        121.69,
        29.511
       ],
       [
        121.506,
        29.485
       ],
       [
        121.575,
        29.537
       ],
       [
        121.677,
        29.584
       ],
       [
        121.906,
        29.78
       ],
       [
        122.0,
        29.828
       ],
       [
        122.0,
        29.889
       ],
       [
        121.944,
        29.894
       ],
       [
        121.812,
        29.952
       ],
       [
        121.678,
        29.979
       ],
       [
        121.433,
        30.227
       ],
       [
        121.341,
        30.282
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
        121.31,
        30.7
       ],
       [
        121.419,
        30.79
       ],
       [
        121.441,
        30.8
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
        122.0,
        30.04
       ],
       [
        121.978,
        30.064
       ],
       [
        121.969,
        30.143
       ],
       [
        122.0,
        30.142
       ],
       [
        122.0,
        30.04
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
        121.251,
        28.086
       ],
       [
        121.164,
        28.062
       ],
       [
        121.132,
        28.063
       ],
       [
        121.134,
        28.135
       ],
       [
        121.205,
        28.204
       ],
       [
        121.234,
        28.181
       ],
       [
        121.251,
        28.145
       ],
       [
        121.251,
        28.086
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
        118.14,
        27.07
       ],
       [
        118.14,
        30.8
       ],
       [
        121.441,
        30.8
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
        121.258,
        30.304
       ],
       [
        121.341,
        30.282
       ],
       [
        121.433,
        30.227
       ],
       [
        121.678,
        29.979
       ],
       [
        121.812,
        29.952
       ],
       [
        121.944,
        29.894
       ],
       [
        122.0,
        29.889
       ],
       [
        122.0,
        29.828
       ],
       [
        121.906,
        29.78
       ],
       [
        121.677,
        29.584
       ],
       [
        121.575,
        29.537
       ],
       [
        121.506,
        29.485
       ],
       [
        121.69,
        29.511
       ],
       [
        121.822,
        29.605
       ],
       [
        121.888,
        29.628
       ],
       [
        121.941,
        29.606
       ],
       [
        121.968,
        29.491
       ],
       [
        121.918,
        29.135
       ],
       [
        121.854,
        29.129
       ],
       [
        121.791,
        29.226
       ],
       [
        121.717,
        29.256
       ],
       [
        121.656,
        29.236
       ],
       [
        121.534,
        29.237
       ],
       [
        121.487,
        29.193
       ],
       [
        121.448,
        29.131
       ],
       [
        121.521,
        29.118
       ],
       [
        121.665,
        29.011
       ],
       [
        121.68,
        28.953
       ],
       [
        121.641,
        28.916
       ],
       [
        121.54,
        28.932
       ],
       [
        121.662,
        28.851
       ],
       [
        121.63,
        28.768
       ],
       [
        121.59,
        28.735
       ],
       [
        121.519,
        28.714
       ],
       [
        121.475,
        28.641
       ],
       [
        121.538,
        28.521
       ],
       [
        121.602,
        28.367
       ],
       [
        121.61,
        28.292
       ],
       [
        121.51,
        28.324
       ],
       [
        121.355,
        28.23
       ],
       [
        121.272,
        28.222
       ],
       [
        121.217,
        28.346
       ],
       [
        121.146,
        28.327
       ],
       [
        121.098,
        28.291
       ],
       [
        121.035,
        28.157
       ],
       [
        120.959,
        28.037
       ],
       [
        120.892,
        28.004
       ],
       [
        120.813,
        28.013
       ],
       [
        120.748,
        28.01
       ],
       [
        120.763,
        27.977
       ],
       [
        120.833,
        27.938
       ],
       [
        120.833,
        27.891
       ],
       [
        120.685,
        27.745
       ],
       [
        120.661,
        27.688
       ],
       [
        120.665,
        27.639
       ],
       [
        120.588,
        27.581
       ],
       [
        120.629,
        27.482
       ],
       [
        120.608,
        27.412
       ],
       [
        120.54,
        27.318
       ],
       [
        120.469,
        27.256
       ],
       [
        120.385,
        27.156
       ],
       [
        120.279,
        27.097
       ],
       [
        120.261,
        27.07
       ],
       [
        118.14,
        27.07
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
         121.13,
         30.8
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
         121.586,
         30.8
        ],
        [
         121.919,
         30.8
        ],
        [
         121.944,
         30.777
        ],
        [
         121.97,
         30.789
        ],
        [
         121.966,
         30.8
        ],
        [
         121.13,
         30.8
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
         120.475,
         30.8
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
         120.537,
         30.8
        ],
        [
         120.475,
         30.8
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
         118.434,
         28.288
        ],
        [
         118.444,
         28.254
        ],
        [
         118.491,
         28.238
        ],
        [
         118.493,
         28.263
        ],
        [
         118.588,
         28.283
        ],
        [
         118.595,
         28.258
        ],
        [
         118.651,
         28.277
        ],
        [
         118.675,
         28.271
        ],
        [
         118.699,
         28.31
        ],
        [
         118.72,
         28.312
        ],
        [
         118.756,
         28.252
        ],
        [
         118.802,
         28.24
        ],
        [
         118.804,
         28.208
        ],
        [
         118.771,
         28.189
        ],
        [
         118.806,
         28.155
        ],
        [
         118.802,
         28.117
        ],
        [
         118.768,
         28.106
        ],
        [
         118.719,
         28.064
        ],
        [
         118.734,
         28.028
        ],
        [
         118.73,
         27.971
        ],
        [
         118.754,
         27.948
        ],
        [
         118.818,
         27.917
        ],
        [
         118.829,
         27.848
        ],
        [
         118.874,
         27.734
        ],
        [
         118.88,
         27.668
        ],
        [
         118.914,
         27.62
        ],
        [
         118.909,
         27.568
        ],
        [
         118.869,
         27.54
        ],
        [
         118.908,
         27.461
        ],
        [
         118.956,
         27.45
        ],
        [
         118.986,
         27.476
        ],
        [
         118.983,
         27.499
        ],
        [
         119.021,
         27.498
        ],
        [
         119.04,
         27.478
        ],
        [
         119.092,
         27.466
        ],
        [
         119.13,
         27.475
        ],
        [
         119.121,
         27.438
        ],
        [
         119.148,
         27.425
        ],
        [
         119.224,
         27.417
        ],
        [
         119.269,
         27.422
        ],
        [
         119.285,
         27.458
        ],
        [
         119.334,
         27.48
        ],
        [
         119.36,
         27.525
        ],
        [
         119.417,
         27.54
        ],
        [
         119.438,
         27.509
        ],
        [
         119.467,
         27.526
        ],
        [
         119.502,
         27.611
        ],
        [
         119.501,
         27.65
        ],
        [
         119.542,
         27.667
        ],
        [
         119.606,
         27.675
        ],
        [
         119.644,
         27.664
        ],
        [
         119.626,
         27.621
        ],
        [
         119.631,
         27.582
        ],
        [
         119.675,
         27.575
        ],
        [
         119.66,
         27.541
        ],
        [
         119.69,
         27.537
        ],
        [
         119.709,
         27.514
        ],
        [
         119.703,
         27.447
        ],
        [
         119.685,
         27.439
        ],
        [
         119.711,
         27.403
        ],
        [
         119.751,
         27.374
        ],
        [
         119.74,
         27.363
        ],
        [
         119.782,
         27.33
        ],
        [
         119.769,
         27.308
        ],
        [
         119.843,
         27.3
        ],
        [
         119.939,
         27.33
        ],
        [
         119.96,
         27.366
        ],
        [
         120.008,
         27.375
        ],
        [
         120.026,
         27.344
        ],
        [
         120.053,
         27.339
        ],
        [
         120.096,
         27.39
        ],
        [
         120.137,
         27.403
        ],
        [
         120.135,
         27.42
        ],
        [
         120.221,
         27.42
        ],
        [
         120.263,
         27.433
        ],
        [
         120.273,
         27.389
        ],
        [
         120.341,
         27.4
        ],
        [
         120.344,
         27.363
        ],
        [
         120.43,
         27.259
        ],
        [
         120.402,
         27.251
        ],
        [
         120.404,
         27.204
        ],
        [
         120.462,
         27.142
        ],
        [
         120.492,
         27.136
        ],
        [
         120.546,
         27.157
        ],
        [
         120.575,
         27.235
        ],
        [
         120.555,
         27.252
        ],
        [
         120.58,
         27.321
        ],
        [
         120.665,
         27.358
        ],
        [
         120.673,
         27.42
        ],
        [
         120.703,
         27.478
        ],
        [
         120.637,
         27.561
        ],
        [
         120.635,
         27.577
        ],
        [
         120.685,
         27.623
        ],
        [
         120.709,
         27.683
        ],
        [
         120.771,
         27.735
        ],
        [
         120.778,
         27.775
        ],
        [
         120.81,
         27.775
        ],
        [
         120.84,
         27.759
        ],
        [
         120.911,
         27.865
        ],
        [
         120.942,
         27.897
        ],
        [
         120.974,
         27.887
        ],
        [
         121.028,
         27.833
        ],
        [
         121.07,
         27.834
        ],
        [
         121.108,
         27.814
        ],
        [
         121.152,
         27.816
        ],
        [
         121.134,
         27.787
        ],
        [
         121.135,
         27.787
        ],
        [
         121.15,
         27.801
        ],
        [
         121.15,
         27.802
        ],
        [
         121.153,
         27.81
        ],
        [
         121.153,
         27.81
        ],
        [
         121.192,
         27.823
        ],
        [
         121.193,
         27.872
        ],
        [
         121.163,
         27.879
        ],
        [
         121.163,
         27.907
        ],
        [
         121.1,
         27.895
        ],
        [
         121.056,
         27.9
        ],
        [
         120.992,
         27.95
        ],
        [
         121.015,
         27.982
        ],
        [
         121.059,
         28.096
        ],
        [
         121.108,
         28.139
        ],
        [
         121.121,
         28.125
        ],
        [
         121.141,
         28.031
        ],
        [
         121.176,
         28.022
        ],
        [
         121.261,
         28.035
        ],
        [
         121.3,
         28.067
        ],
        [
         121.328,
         28.134
        ],
        [
         121.374,
         28.133
        ],
        [
         121.402,
         28.197
        ],
        [
         121.456,
         28.25
        ],
        [
         121.489,
         28.302
        ],
        [
         121.539,
         28.299
        ],
        [
         121.571,
         28.279
        ],
        [
         121.58,
         28.24
        ],
        [
         121.628,
         28.252
        ],
        [
         121.669,
         28.333
        ],
        [
         121.66,
         28.356
        ],
        [
         121.634,
         28.348
        ],
        [
         121.659,
         28.393
        ],
        [
         121.693,
         28.407
        ],
        [
         121.671,
         28.473
        ],
        [
         121.646,
         28.512
        ],
        [
         121.634,
         28.563
        ],
        [
         121.596,
         28.575
        ],
        [
         121.557,
         28.645
        ],
        [
         121.541,
         28.656
        ],
        [
         121.646,
         28.683
        ],
        [
         121.689,
         28.719
        ],
        [
         121.705,
         28.805
        ],
        [
         121.687,
         28.863
        ],
        [
         121.775,
         28.864
        ],
        [
         121.772,
         28.898
        ],
        [
         121.743,
         28.954
        ],
        [
         121.711,
         28.986
        ],
        [
         121.713,
         29.029
        ],
        [
         121.659,
         29.059
        ],
        [
         121.66,
         29.118
        ],
        [
         121.616,
         29.143
        ],
        [
         121.608,
         29.169
        ],
        [
         121.716,
         29.125
        ],
        [
         121.75,
         29.137
        ],
        [
         121.768,
         29.167
        ],
        [
         121.78,
         29.11
        ],
        [
         121.811,
         29.11
        ],
        [
         121.86,
         29.086
        ],
        [
         121.884,
         29.106
        ],
        [
         121.966,
         29.053
        ],
        [
         121.97,
         29.093
        ],
        [
         121.988,
         29.111
        ],
        [
         121.987,
         29.155
        ],
        [
         121.948,
         29.193
        ],
        [
         121.972,
         29.193
        ],
        [
         121.967,
         29.25
        ],
        [
         122.0,
         29.26
        ],
        [
         122.0,
         29.279
        ],
        [
         121.945,
         29.284
        ],
        [
         121.958,
         29.334
        ],
        [
         121.936,
         29.348
        ],
        [
         121.938,
         29.384
        ],
        [
         121.976,
         29.411
        ],
        [
         121.993,
         29.452
        ],
        [
         121.973,
         29.478
        ],
        [
         121.969,
         29.516
        ],
        [
         121.995,
         29.545
        ],
        [
         122.0,
         29.581
        ],
        [
         122.0,
         29.583
        ],
        [
         121.966,
         29.636
        ],
        [
         121.91,
         29.65
        ],
        [
         121.873,
         29.632
        ],
        [
         121.833,
         29.653
        ],
        [
         121.937,
         29.748
        ],
        [
         122.0,
         29.762
        ],
        [
         122.0,
         29.924
        ],
        [
         121.971,
         29.955
        ],
        [
         121.919,
         29.921
        ],
        [
         121.835,
         29.958
        ],
        [
         121.784,
         29.993
        ],
        [
         121.721,
         29.993
        ],
        [
         121.7,
         30.008
        ],
        [
         121.653,
         30.071
        ],
        [
         121.636,
         30.07
        ],
        [
         121.562,
         30.184
        ],
        [
         121.498,
         30.259
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
         121.13,
         30.8
        ],
        [
         120.537,
         30.8
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
         120.475,
         30.8
        ],
        [
         119.539,
         30.8
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
         118.14,
         29.284
        ],
        [
         118.14,
         28.984
        ],
        [
         118.165,
         28.987
        ],
        [
         118.228,
         28.942
        ],
        [
         118.196,
         28.904
        ],
        [
         118.27,
         28.919
        ],
        [
         118.3,
         28.826
        ],
        [
         118.364,
         28.813
        ],
        [
         118.403,
         28.703
        ],
        [
         118.428,
         28.681
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.412,
         28.557
        ],
        [
         118.43,
         28.515
        ],
        [
         118.415,
         28.497
        ],
        [
         118.475,
         28.479
        ],
        [
         118.457,
         28.425
        ],
        [
         118.432,
         28.402
        ],
        [
         118.455,
         28.384
        ],
        [
         118.48,
         28.327
        ],
        [
         118.434,
         28.288
        ]
       ]
      ],
      [
       [
        [
         122.0,
         30.166
        ],
        [
         121.955,
         30.184
        ],
        [
         121.935,
         30.162
        ],
        [
         121.984,
         30.101
        ],
        [
         121.99,
         30.077
        ],
        [
         121.978,
         30.059
        ],
        [
         122.0,
         30.029
        ],
        [
         122.0,
         30.166
        ]
       ]
      ],
      [
       [
        [
         121.838,
         28.77
        ],
        [
         121.863,
         28.782
        ],
        [
         121.862,
         28.814
        ],
        [
         121.838,
         28.77
        ]
       ]
      ],
      [
       [
        [
         121.791,
         29.082
        ],
        [
         121.833,
         29.05
        ],
        [
         121.843,
         29.082
        ],
        [
         121.82,
         29.099
        ],
        [
         121.791,
         29.082
        ]
       ]
      ],
      [
       [
        [
         121.201,
         27.623
        ],
        [
         121.198,
         27.618
        ],
        [
         121.199,
         27.617
        ],
        [
         121.204,
         27.626
        ],
        [
         121.201,
         27.623
        ]
       ]
      ],
      [
       [
        [
         121.944,
         30.777
        ],
        [
         121.968,
         30.689
        ],
        [
         121.997,
         30.659
        ],
        [
         122.0,
         30.657
        ],
        [
         122.0,
         30.685
        ],
        [
         121.993,
         30.695
        ],
        [
         121.988,
         30.753
        ],
        [
         121.97,
         30.789
        ],
        [
         121.944,
         30.777
        ]
       ]
      ],
      [
       [
        [
         121.889,
         28.472
        ],
        [
         121.919,
         28.497
        ],
        [
         121.882,
         28.503
        ],
        [
         121.889,
         28.472
        ]
       ]
      ],
      [
       [
        [
         121.87,
         28.424
        ],
        [
         121.911,
         28.44
        ],
        [
         121.89,
         28.451
        ],
        [
         121.87,
         28.424
        ]
       ]
      ],
      [
       [
        [
         121.851,
         29.977
        ],
        [
         121.875,
         29.965
        ],
        [
         121.933,
         29.995
        ],
        [
         121.924,
         30.052
        ],
        [
         121.886,
         30.095
        ],
        [
         121.849,
         30.101
        ],
        [
         121.84,
         30.047
        ],
        [
         121.845,
         29.983
        ],
        [
         121.851,
         29.977
        ]
       ]
      ],
      [
       [
        [
         121.066,
         27.478
        ],
        [
         121.066,
         27.461
        ],
        [
         121.107,
         27.444
        ],
        [
         121.067,
         27.478
        ],
        [
         121.066,
         27.478
        ]
       ]
      ],
      [
       [
        [
         121.952,
         29.188
        ],
        [
         121.979,
         29.16
        ],
        [
         121.977,
         29.192
        ],
        [
         121.952,
         29.188
        ]
       ]
      ],
      [
       [
        [
         121.94,
         30.115
        ],
        [
         121.91,
         30.089
        ],
        [
         121.946,
         30.064
        ],
        [
         121.963,
         30.106
        ],
        [
         121.94,
         30.115
        ]
       ]
      ],
      [
       [
        [
         121.958,
         30.288
        ],
        [
         122.0,
         30.308
        ],
        [
         122.0,
         30.311
        ],
        [
         121.989,
         30.34
        ],
        [
         121.942,
         30.333
        ],
        [
         121.921,
         30.307
        ],
        [
         121.958,
         30.288
        ]
       ]
      ],
      [
       [
        [
         121.134,
         27.787
        ],
        [
         121.134,
         27.786
        ],
        [
         121.135,
         27.787
        ],
        [
         121.134,
         27.787
        ]
       ]
      ],
      [
       [
        [
         121.098,
         27.937
        ],
        [
         121.153,
         27.962
        ],
        [
         121.121,
         27.986
        ],
        [
         121.07,
         27.984
        ],
        [
         121.038,
         27.949
        ],
        [
         121.098,
         27.937
        ]
       ]
      ],
      [
       [
        [
         121.186,
         27.963
        ],
        [
         121.238,
         27.988
        ],
        [
         121.198,
         28.001
        ],
        [
         121.171,
         27.979
        ],
        [
         121.186,
         27.963
        ]
       ]
      ],
      [
       [
        [
         121.044,
         27.979
        ],
        [
         121.09,
         27.999
        ],
        [
         121.074,
         28.008
        ],
        [
         121.044,
         27.979
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
         118.14,
         30.8
        ],
        [
         118.14,
         29.493
        ],
        [
         118.144,
         29.49
        ],
        [
         118.14,
         29.486
        ],
        [
         118.14,
         29.417
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
         119.539,
         30.8
        ],
        [
         118.14,
         30.8
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
         120.288,
         27.07
        ],
        [
         120.283,
         27.09
        ],
        [
         120.392,
         27.081
        ],
        [
         120.403,
         27.101
        ],
        [
         120.462,
         27.142
        ],
        [
         120.404,
         27.204
        ],
        [
         120.402,
         27.251
        ],
        [
         120.43,
         27.259
        ],
        [
         120.344,
         27.363
        ],
        [
         120.341,
         27.4
        ],
        [
         120.273,
         27.389
        ],
        [
         120.263,
         27.433
        ],
        [
         120.221,
         27.42
        ],
        [
         120.135,
         27.42
        ],
        [
         120.137,
         27.403
        ],
        [
         120.096,
         27.39
        ],
        [
         120.053,
         27.339
        ],
        [
         120.026,
         27.344
        ],
        [
         120.008,
         27.375
        ],
        [
         119.96,
         27.366
        ],
        [
         119.939,
         27.33
        ],
        [
         119.843,
         27.3
        ],
        [
         119.769,
         27.308
        ],
        [
         119.782,
         27.33
        ],
        [
         119.74,
         27.363
        ],
        [
         119.751,
         27.374
        ],
        [
         119.711,
         27.403
        ],
        [
         119.685,
         27.439
        ],
        [
         119.703,
         27.447
        ],
        [
         119.709,
         27.514
        ],
        [
         119.69,
         27.537
        ],
        [
         119.66,
         27.541
        ],
        [
         119.675,
         27.575
        ],
        [
         119.631,
         27.582
        ],
        [
         119.626,
         27.621
        ],
        [
         119.644,
         27.664
        ],
        [
         119.606,
         27.675
        ],
        [
         119.542,
         27.667
        ],
        [
         119.501,
         27.65
        ],
        [
         119.502,
         27.611
        ],
        [
         119.467,
         27.526
        ],
        [
         119.438,
         27.509
        ],
        [
         119.417,
         27.54
        ],
        [
         119.36,
         27.525
        ],
        [
         119.334,
         27.48
        ],
        [
         119.285,
         27.458
        ],
        [
         119.269,
         27.422
        ],
        [
         119.224,
         27.417
        ],
        [
         119.148,
         27.425
        ],
        [
         119.121,
         27.438
        ],
        [
         119.13,
         27.475
        ],
        [
         119.092,
         27.466
        ],
        [
         119.04,
         27.478
        ],
        [
         119.021,
         27.498
        ],
        [
         118.983,
         27.499
        ],
        [
         118.986,
         27.476
        ],
        [
         118.956,
         27.45
        ],
        [
         118.908,
         27.461
        ],
        [
         118.869,
         27.54
        ],
        [
         118.909,
         27.568
        ],
        [
         118.914,
         27.62
        ],
        [
         118.88,
         27.668
        ],
        [
         118.874,
         27.734
        ],
        [
         118.829,
         27.848
        ],
        [
         118.818,
         27.917
        ],
        [
         118.754,
         27.948
        ],
        [
         118.73,
         27.971
        ],
        [
         118.734,
         28.028
        ],
        [
         118.719,
         28.064
        ],
        [
         118.768,
         28.106
        ],
        [
         118.802,
         28.117
        ],
        [
         118.806,
         28.155
        ],
        [
         118.771,
         28.189
        ],
        [
         118.804,
         28.208
        ],
        [
         118.802,
         28.24
        ],
        [
         118.756,
         28.252
        ],
        [
         118.72,
         28.312
        ],
        [
         118.699,
         28.31
        ],
        [
         118.675,
         28.271
        ],
        [
         118.651,
         28.277
        ],
        [
         118.595,
         28.258
        ],
        [
         118.588,
         28.283
        ],
        [
         118.493,
         28.263
        ],
        [
         118.491,
         28.238
        ],
        [
         118.444,
         28.254
        ],
        [
         118.434,
         28.288
        ],
        [
         118.424,
         28.291
        ],
        [
         118.314,
         28.222
        ],
        [
         118.339,
         28.194
        ],
        [
         118.375,
         28.187
        ],
        [
         118.361,
         28.156
        ],
        [
         118.356,
         28.092
        ],
        [
         118.242,
         28.076
        ],
        [
         118.2,
         28.05
        ],
        [
         118.154,
         28.062
        ],
        [
         118.14,
         28.054
        ],
        [
         118.14,
         27.07
        ],
        [
         120.288,
         27.07
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
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
         118.14,
         29.417
        ],
        [
         118.14,
         29.486
        ],
        [
         118.144,
         29.49
        ],
        [
         118.14,
         29.493
        ],
        [
         118.14,
         28.054
        ],
        [
         118.154,
         28.062
        ],
        [
         118.2,
         28.05
        ],
        [
         118.242,
         28.076
        ],
        [
         118.356,
         28.092
        ],
        [
         118.361,
         28.156
        ],
        [
         118.375,
         28.187
        ],
        [
         118.339,
         28.194
        ],
        [
         118.314,
         28.222
        ],
        [
         118.424,
         28.291
        ],
        [
         118.434,
         28.288
        ],
        [
         118.48,
         28.327
        ],
        [
         118.455,
         28.384
        ],
        [
         118.432,
         28.402
        ],
        [
         118.457,
         28.425
        ],
        [
         118.475,
         28.479
        ],
        [
         118.415,
         28.497
        ],
        [
         118.43,
         28.515
        ],
        [
         118.412,
         28.557
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.681
        ],
        [
         118.403,
         28.703
        ],
        [
         118.364,
         28.813
        ],
        [
         118.3,
         28.826
        ],
        [
         118.27,
         28.919
        ],
        [
         118.196,
         28.904
        ],
        [
         118.228,
         28.942
        ],
        [
         118.165,
         28.987
        ],
        [
         118.14,
         28.984
        ],
        [
         118.14,
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
  "rivers": [],
  "lakes": [],
  "_bbox": [
   118.14,
   27.07,
   122.0,
   30.8
  ]
 }
};
