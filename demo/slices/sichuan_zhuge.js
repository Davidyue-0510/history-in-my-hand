// 本文件由 tools/build.py 自动生成（切片 sichuan_zhuge），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sichuan_zhuge"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sichuan_zhuge"] = {
 "meta": {
  "kind": "court",
  "region": "jiangnan",
  "province": "sichuan",
  "title": "蜀汉丞相诸葛亮治蜀（三国）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "chengdu",
  "dossier_event": "event:ev_sichuan_zhuge_01",
  "vocab_pack": "inline:sichuan_zhuge",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "three_kingdoms",
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
    "note": "蜀汉丞相诸葛亮治蜀（三国）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "蜀汉丞相诸葛亮治蜀（三国）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "蜀汉丞相诸葛亮治蜀（三国）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "蜀汉丞相诸葛亮治蜀（三国）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=sichuan_zhuge",
  "key": "sichuan_zhuge",
  "scene_id": "sichuan_zhuge"
 },
 "sources": [
  {
   "id": "zhuge_liang_zhi_shu",
   "title": "《出师表》与诸葛治蜀",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "陈寿",
   "period": "三国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "chengdu",
   "name": "成都",
   "type": "city",
   "modern": "今中国四川成都",
   "note": "蜀汉都城",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 104.07,
   "lat": 30.66,
   "geo_note": "今四川成都",
   "elev": 489
  },
  {
   "id": "nanzhong",
   "name": "南中",
   "type": "region",
   "modern": "今中国云南贵州一带",
   "note": "南征区域",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "wuzhangyuan",
   "name": "五丈原",
   "type": "yi",
   "modern": "今中国陕西岐山",
   "note": "诸葛亮病逝地",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SIC__p01",
   "name": "诸葛亮",
   "role": "蜀汉丞相",
   "note": "治蜀核心人物",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 7
  },
  {
   "id": "SIC__p02",
   "name": "刘备",
   "role": "蜀汉先主",
   "note": "入蜀称帝",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SIC__p03",
   "name": "孟获",
   "role": "南中首领",
   "note": "七擒七纵对象",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SIC_001",
   "subject": "event:ev_sichuan_zhuge_01",
   "predicate": "建都",
   "value_text": "刘备成都称帝",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "刘备入蜀称帝于成都",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "刘备入蜀称帝于成都",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_002",
   "subject": "person:SIC__p01",
   "predicate": "职务",
   "value_text": "诸葛亮为丞相",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "以诸葛亮为丞相",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以诸葛亮为丞相",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_003",
   "subject": "event:ev_sichuan_zhuge_02",
   "predicate": "战役结果",
   "value_text": "七擒孟获平定南中",
   "time": {
    "era_text": "建兴三年",
    "start": "225-01-01",
    "end": "225-12-31",
    "gregorian_year": 225
   },
   "place": "nanzhong",
   "source": "zhuge_liang_zhi_shu",
   "quote": "七擒孟获",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "七擒孟获",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_004",
   "subject": "person:SIC__p01",
   "predicate": "外交策略",
   "value_text": "外联孙吴北拒曹魏",
   "time": {
    "era_text": "建兴年间",
    "start": "223-01-01",
    "end": "223-12-31",
    "gregorian_year": 223
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "外联孙吴、北拒曹魏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "外联孙吴、北拒曹魏",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_005",
   "subject": "person:SIC__p01",
   "predicate": "内政措施",
   "value_text": "赏罚严明务农殖谷",
   "time": {
    "era_text": "建兴年间",
    "start": "223-01-01",
    "end": "223-12-31",
    "gregorian_year": 223
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "赏罚严明，务农殖谷",
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
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赏罚严明，务农殖谷",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_006",
   "subject": "person:SIC__p01",
   "predicate": "名言",
   "value_text": "鞠躬尽瘁死而后已",
   "time": {
    "era_text": "建兴五年",
    "start": "227-01-01",
    "end": "227-12-31",
    "gregorian_year": 227
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "鞠躬尽瘁，死而后已",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鞠躬尽瘁，死而后已",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_007",
   "subject": "event:ev_sichuan_zhuge_03",
   "predicate": "死亡地点",
   "value_text": "病逝于五丈原",
   "time": {
    "era_text": "建兴十二年",
    "start": "234-01-01",
    "end": "234-12-31",
    "gregorian_year": 234
   },
   "place": "wuzhangyuan",
   "source": "zhuge_liang_zhi_shu",
   "quote": "五丈原病逝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "五丈原病逝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_008",
   "subject": "person:SIC__p01",
   "predicate": "后世祭祀",
   "value_text": "蜀人立庙祭祀",
   "time": {
    "era_text": "建兴十二年后",
    "start": "234-01-01",
    "end": "234-12-31",
    "gregorian_year": 234
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "蜀人立庙祀之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "蜀人立庙祀之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_009",
   "subject": "person:SIC__p01",
   "predicate": "治蜀评价",
   "value_text": "励精图治",
   "time": {
    "era_text": "建兴年间",
    "start": "223-01-01",
    "end": "223-12-31",
    "gregorian_year": 223
   },
   "place": "chengdu",
   "source": "zhuge_liang_zhi_shu",
   "quote": "励精图治",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "励精图治",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_010",
   "subject": "person:SIC__p01",
   "predicate": "南征策略",
   "value_text": "七擒七纵攻心为上",
   "time": {
    "era_text": "建兴三年",
    "start": "225-01-01",
    "end": "225-12-31",
    "gregorian_year": 225
   },
   "place": "nanzhong",
   "source": "zhuge_liang_zhi_shu",
   "quote": "七擒孟获",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "后世解读",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "七擒孟获",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_011",
   "subject": "person:SIC__p01",
   "predicate": "北伐次数",
   "value_text": "五次北伐",
   "time": {
    "era_text": "建兴年间",
    "start": "223-01-01",
    "end": "223-12-31",
    "gregorian_year": 223
   },
   "place": "wuzhangyuan",
   "source": "zhuge_liang_zhi_shu",
   "quote": "北拒曹魏",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "原文未明言次数",
   "dims": [
    6
   ],
   "lead": {
    "where": "三国志诸葛亮传",
    "skills": [
     "文献考据"
    ],
    "accept": "需查证北伐具体次数"
   },
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "北拒曹魏",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SIC_012",
   "subject": "person:SIC__p01",
   "predicate": "南征兵力",
   "value_text": "兵力不详",
   "time": {
    "era_text": "建兴三年",
    "start": "225-01-01",
    "end": "225-12-31",
    "gregorian_year": 225
   },
   "place": "nanzhong",
   "source": "zhuge_liang_zhi_shu",
   "quote": "平定南中",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "原文未载",
   "dims": [
    2
   ],
   "lead": {
    "where": "华阳国志",
    "skills": [
     "军事史"
    ],
    "accept": "需查南征兵力记载"
   },
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "平定南中",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SIC_011",
  "SIC_012"
 ],
 "events": [
  {
   "id": "ev_sichuan_zhuge_01",
   "subject": "event:ev_sichuan_zhuge_01",
   "year": 221,
   "era": "蜀汉章武元年",
   "title": "刘备称帝",
   "kind": "建置",
   "text": "刘备成都称帝，诸葛亮为丞相",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sichuan_zhuge_02",
   "subject": "event:ev_sichuan_zhuge_02",
   "year": 225,
   "era": "蜀汉建兴三年",
   "title": "平定南中",
   "kind": "战事",
   "text": "诸葛亮南征，七擒孟获",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sichuan_zhuge_03",
   "subject": "event:ev_sichuan_zhuge_03",
   "year": 234,
   "era": "蜀汉建兴十二年",
   "title": "五丈原病逝",
   "kind": "其他",
   "text": "诸葛亮病逝五丈原",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "chengdu",
   "to": "nanzhong",
   "type": "military",
   "label": "南征路线",
   "_source_idx": 0,
   "_source_name": "《出师表》与诸葛治蜀",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "chengdu",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "chengdu",
   "name": "成都",
   "lon": 104.07,
   "lat": 30.66,
   "region": "jiangnan"
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
        103.07,
        29.66
       ],
       [
        103.07,
        31.66
       ],
       [
        105.07,
        31.66
       ],
       [
        105.07,
        29.66
       ],
       [
        103.07,
        29.66
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
         103.07,
         31.66
        ],
        [
         103.07,
         29.66
        ],
        [
         105.07,
         29.66
        ],
        [
         105.07,
         31.66
        ],
        [
         103.07,
         31.66
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   103.07,
   29.66,
   105.07,
   31.66
  ]
 }
};
