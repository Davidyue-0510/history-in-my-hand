// 本文件由 tools/build.py 自动生成（切片 shu_han_found_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shu_han_found_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shu_han_found_llm"] = {
 "meta": {
  "kind": "dynasty",
  "region": "chuan_gui",
  "province": "sichuan",
  "title": "蜀汉建国（成都称帝）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "chengdu",
  "dossier_event": "event:ev_shu_han_found_llm_01",
  "vocab_pack": "inline:shu_han_found_llm",
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
    "note": "蜀汉建国（成都称帝）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "蜀汉建国（成都称帝）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "蜀汉建国（成都称帝）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "蜀汉建国（成都称帝）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shu_han_found_llm",
  "key": "shu_han_found_llm",
  "scene_id": "shu_han_found_llm"
 },
 "sources": [
  {
   "id": "sgz_shuhan_llm",
   "title": "三国志·蜀书",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "陈寿",
   "period": "西晋",
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
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 104.07,
   "lat": 30.66,
   "geo_note": "今四川成都",
   "elev": 489
  },
  {
   "id": "hanzhong",
   "name": "汉中",
   "type": "region",
   "modern": "今中国陕西汉中",
   "note": "刘备称王之地",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 107.97,
   "lat": 33.07,
   "geo_unresolved": true,
   "elev": 643
  }
 ],
 "persons": [
  {
   "id": "SHU__p01",
   "name": "刘备",
   "role": "蜀汉皇帝",
   "note": "汉中王，章武元年称帝",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHU__p02",
   "name": "诸葛亮",
   "role": "丞相",
   "note": "辅政，定策安民",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHU__p03",
   "name": "曹丕",
   "role": "魏文帝",
   "note": "篡汉称帝",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHU_001",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "称帝时间",
   "value_text": "章武元年刘备成都称帝",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "章武元年曹丕篡汉，刘备于成都称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "章武元年曹丕篡汉，刘备于成都称帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_002",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "国号",
   "value_text": "国号仍为汉，史称蜀汉",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "国号仍为汉，史称蜀汉或季汉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "国号仍为汉，史称蜀汉或季汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_003",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "政治口号",
   "value_text": "以兴复汉室为号召",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "以兴复汉室为号召",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以兴复汉室为号召",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_004",
   "subject": "person:SHU__p02",
   "predicate": "任职",
   "value_text": "诸葛亮为丞相",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "诸葛亮为丞相",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "诸葛亮为丞相",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_005",
   "subject": "place:chengdu",
   "predicate": "定都",
   "value_text": "定都成都",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "定都成都",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "定都成都",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_006",
   "subject": "place:chengdu",
   "predicate": "地理形势",
   "value_text": "据益州险塞",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "据益州险塞",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "据益州险塞",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_007",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "经济政策",
   "value_text": "务农殖谷，闭关息民",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "务农殖谷，闭关息民",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "务农殖谷，闭关息民",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_008",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "民族政策",
   "value_text": "南抚夷越，西和诸戎",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "南抚夷越，西和诸戎",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "南抚夷越，西和诸戎",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_009",
   "subject": "event:ev_shu_han_found_llm_01",
   "predicate": "称王",
   "value_text": "建安二十四年刘备称汉中王",
   "time": {
    "era_text": "建安二十四年",
    "start": "219-01-01",
    "end": "219-12-31",
    "gregorian_year": 219
   },
   "place": "hanzhong",
   "source": "sgz_shuhan_llm",
   "quote": "建安二十四年刘备取汉中称汉中王",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "建安二十四年刘备取汉中称汉中王",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_010",
   "subject": "event:ev_shu_han_found_llm_02",
   "predicate": "篡汉",
   "value_text": "曹丕篡汉，建魏代汉",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "章武元年曹丕篡汉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "章武元年曹丕篡汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_011",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "政权合法性",
   "value_text": "蜀汉承汉祚，与魏吴鼎立",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "与曹魏、孙吴鼎立",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "史家对蜀汉正统性有争议",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与曹魏、孙吴鼎立",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_012",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "称帝动机",
   "value_text": "因曹丕篡汉而称帝",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "曹丕篡汉，刘备于成都称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "曹丕篡汉，刘备于成都称帝",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHU_013",
   "subject": "event:ev_shu_han_found_llm_03",
   "predicate": "称帝时间争议",
   "value_text": "史料对刘备称帝年份有异说",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "章武元年曹丕篡汉",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "需考订具体日期",
   "dims": [
    6
   ],
   "lead": {
    "where": "成都武侯祠博物馆",
    "skills": [
     "碑刻考据",
     "历法推算"
    ],
    "accept": "确认章武元年具体称帝月日"
   },
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "章武元年曹丕篡汉",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "shu_han_found_llm_DIM2",
   "subject": "技术:天文历算",
   "predicate": "技术维度",
   "value_text": "蜀汉建国（成都称帝） 的史料涉及天文历算（「ls\": [\"碑刻考据\", \"历法推算\"], \"accept\":」），补标技术维度（推断）。",
   "time": {
    "era_text": "章武元年",
    "start": "221-01-01",
    "end": "221-12-31",
    "gregorian_year": 221
   },
   "place": "chengdu",
   "source": "sgz_shuhan_llm",
   "quote": "「ls\": [\"碑刻考据\", \"历法推算\"], \"accept\":」",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
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
  "SHU_013"
 ],
 "events": [
  {
   "id": "ev_shu_han_found_llm_01",
   "subject": "event:ev_shu_han_found_llm_01",
   "year": 219,
   "era": "建安二十四年",
   "title": "刘备取汉中",
   "kind": "战事",
   "text": "刘备攻取汉中，自立汉中王",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shu_han_found_llm_02",
   "subject": "event:ev_shu_han_found_llm_02",
   "year": 220,
   "era": "建安二十五年/延康元年",
   "title": "曹丕篡汉",
   "kind": "其他",
   "text": "曹丕废汉献帝，建魏",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shu_han_found_llm_03",
   "subject": "event:ev_shu_han_found_llm_03",
   "year": 221,
   "era": "章武元年",
   "title": "刘备成都称帝",
   "kind": "建置",
   "text": "刘备于成都即帝位，国号汉",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "hanzhong",
   "to": "chengdu",
   "type": "military",
   "label": "刘备南下成都称帝",
   "_source_idx": 0,
   "_source_name": "三国志·蜀书",
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
   "region": "chuan_gui"
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
        34.07
       ],
       [
        108.97,
        34.07
       ],
       [
        108.97,
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
         108.97,
         29.66
        ],
        [
         108.97,
         30.626
        ],
        [
         108.894,
         30.565
        ],
        [
         108.839,
         30.503
        ],
        [
         108.809,
         30.491
        ],
        [
         108.79,
         30.513
        ],
        [
         108.744,
         30.495
        ],
        [
         108.699,
         30.545
        ],
        [
         108.689,
         30.588
        ],
        [
         108.643,
         30.579
        ],
        [
         108.65,
         30.539
        ],
        [
         108.568,
         30.469
        ],
        [
         108.556,
         30.488
        ],
        [
         108.513,
         30.502
        ],
        [
         108.473,
         30.487
        ],
        [
         108.427,
         30.492
        ],
        [
         108.411,
         30.439
        ],
        [
         108.43,
         30.416
        ],
        [
         108.402,
         30.377
        ],
        [
         108.431,
         30.354
        ],
        [
         108.461,
         30.36
        ],
        [
         108.501,
         30.315
        ],
        [
         108.524,
         30.31
        ],
        [
         108.545,
         30.27
        ],
        [
         108.582,
         30.256
        ],
        [
         108.552,
         30.164
        ],
        [
         108.568,
         30.157
        ],
        [
         108.546,
         30.104
        ],
        [
         108.514,
         30.058
        ],
        [
         108.532,
         30.052
        ],
        [
         108.536,
         29.983
        ],
        [
         108.518,
         29.939
        ],
        [
         108.516,
         29.885
        ],
        [
         108.468,
         29.864
        ],
        [
         108.434,
         29.88
        ],
        [
         108.371,
         29.841
        ],
        [
         108.424,
         29.816
        ],
        [
         108.422,
         29.773
        ],
        [
         108.443,
         29.779
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
         108.504,
         29.708
        ],
        [
         108.505,
         29.729
        ],
        [
         108.549,
         29.749
        ],
        [
         108.525,
         29.771
        ],
        [
         108.556,
         29.818
        ],
        [
         108.601,
         29.864
        ],
        [
         108.659,
         29.855
        ],
        [
         108.68,
         29.8
        ],
        [
         108.677,
         29.749
        ],
        [
         108.691,
         29.69
        ],
        [
         108.736,
         29.66
        ],
        [
         108.761,
         29.66
        ],
        [
         108.786,
         29.692
        ],
        [
         108.798,
         29.66
        ],
        [
         108.798,
         29.66
        ],
        [
         108.97,
         29.66
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
         108.798,
         29.66
        ],
        [
         108.798,
         29.66
        ],
        [
         108.786,
         29.692
        ],
        [
         108.761,
         29.66
        ],
        [
         108.736,
         29.66
        ],
        [
         108.691,
         29.69
        ],
        [
         108.677,
         29.749
        ],
        [
         108.68,
         29.8
        ],
        [
         108.659,
         29.855
        ],
        [
         108.601,
         29.864
        ],
        [
         108.556,
         29.818
        ],
        [
         108.525,
         29.771
        ],
        [
         108.549,
         29.749
        ],
        [
         108.505,
         29.729
        ],
        [
         108.504,
         29.708
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
         108.443,
         29.779
        ],
        [
         108.422,
         29.773
        ],
        [
         108.424,
         29.816
        ],
        [
         108.371,
         29.841
        ],
        [
         108.434,
         29.88
        ],
        [
         108.468,
         29.864
        ],
        [
         108.516,
         29.885
        ],
        [
         108.518,
         29.939
        ],
        [
         108.536,
         29.983
        ],
        [
         108.532,
         30.052
        ],
        [
         108.514,
         30.058
        ],
        [
         108.546,
         30.104
        ],
        [
         108.568,
         30.157
        ],
        [
         108.552,
         30.164
        ],
        [
         108.582,
         30.256
        ],
        [
         108.545,
         30.27
        ],
        [
         108.524,
         30.31
        ],
        [
         108.501,
         30.315
        ],
        [
         108.461,
         30.36
        ],
        [
         108.431,
         30.354
        ],
        [
         108.402,
         30.377
        ],
        [
         108.43,
         30.416
        ],
        [
         108.411,
         30.439
        ],
        [
         108.427,
         30.492
        ],
        [
         108.473,
         30.487
        ],
        [
         108.513,
         30.502
        ],
        [
         108.556,
         30.488
        ],
        [
         108.568,
         30.469
        ],
        [
         108.65,
         30.539
        ],
        [
         108.643,
         30.579
        ],
        [
         108.689,
         30.588
        ],
        [
         108.699,
         30.545
        ],
        [
         108.744,
         30.495
        ],
        [
         108.79,
         30.513
        ],
        [
         108.809,
         30.491
        ],
        [
         108.839,
         30.503
        ],
        [
         108.894,
         30.565
        ],
        [
         108.97,
         30.626
        ],
        [
         108.97,
         31.981
        ],
        [
         108.902,
         31.985
        ],
        [
         108.838,
         32.039
        ],
        [
         108.788,
         32.049
        ],
        [
         108.751,
         32.076
        ],
        [
         108.734,
         32.107
        ],
        [
         108.677,
         32.103
        ],
        [
         108.585,
         32.172
        ],
        [
         108.544,
         32.178
        ],
        [
         108.51,
         32.201
        ],
        [
         108.48,
         32.183
        ],
        [
         108.399,
         32.194
        ],
        [
         108.37,
         32.172
        ],
        [
         108.38,
         32.154
        ],
        [
         108.38,
         32.154
        ],
        [
         108.379,
         32.154
        ],
        [
         108.379,
         32.154
        ],
        [
         108.4,
         32.147
        ],
        [
         108.453,
         32.09
        ],
        [
         108.43,
         32.061
        ],
        [
         108.373,
         32.077
        ],
        [
         108.344,
         32.067
        ],
        [
         108.362,
         32.036
        ],
        [
         108.329,
         32.02
        ],
        [
         108.37,
         31.989
        ],
        [
         108.352,
         31.972
        ],
        [
         108.307,
         31.997
        ],
        [
         108.259,
         31.967
        ],
        [
         108.344,
         31.861
        ],
        [
         108.386,
         31.854
        ],
        [
         108.391,
         31.83
        ],
        [
         108.429,
         31.809
        ],
        [
         108.455,
         31.814
        ],
        [
         108.462,
         31.78
        ],
        [
         108.535,
         31.758
        ],
        [
         108.506,
         31.734
        ],
        [
         108.515,
         31.694
        ],
        [
         108.547,
         31.665
        ],
        [
         108.519,
         31.666
        ],
        [
         108.469,
         31.636
        ],
        [
         108.443,
         31.634
        ],
        [
         108.39,
         31.592
        ],
        [
         108.386,
         31.544
        ],
        [
         108.339,
         31.539
        ],
        [
         108.344,
         31.513
        ],
        [
         108.255,
         31.499
        ],
        [
         108.234,
         31.507
        ],
        [
         108.191,
         31.492
        ],
        [
         108.193,
         31.468
        ],
        [
         108.224,
         31.464
        ],
        [
         108.216,
         31.41
        ],
        [
         108.154,
         31.371
        ],
        [
         108.186,
         31.337
        ],
        [
         108.095,
         31.268
        ],
        [
         108.039,
         31.253
        ],
        [
         108.031,
         31.217
        ],
        [
         108.076,
         31.232
        ],
        [
         108.09,
         31.205
        ],
        [
         108.026,
         31.116
        ],
        [
         108.009,
         31.11
        ],
        [
         108.027,
         31.062
        ],
        [
         108.06,
         31.052
        ],
        [
         108.004,
         31.026
        ],
        [
         107.983,
         30.984
        ],
        [
         107.943,
         30.989
        ],
        [
         107.948,
         30.919
        ],
        [
         107.995,
         30.909
        ],
        [
         107.956,
         30.883
        ],
        [
         107.851,
         30.793
        ],
        [
         107.788,
         30.82
        ],
        [
         107.764,
         30.817
        ],
        [
         107.761,
         30.863
        ],
        [
         107.74,
         30.884
        ],
        [
         107.693,
         30.876
        ],
        [
         107.645,
         30.821
        ],
        [
         107.577,
         30.848
        ],
        [
         107.516,
         30.855
        ],
        [
         107.483,
         30.839
        ],
        [
         107.499,
         30.809
        ],
        [
         107.454,
         30.772
        ],
        [
         107.454,
         30.772
        ],
        [
         107.425,
         30.74
        ],
        [
         107.458,
         30.705
        ],
        [
         107.478,
         30.665
        ],
        [
         107.517,
         30.645
        ],
        [
         107.486,
         30.598
        ],
        [
         107.428,
         30.547
        ],
        [
         107.443,
         30.533
        ],
        [
         107.409,
         30.522
        ],
        [
         107.369,
         30.469
        ],
        [
         107.339,
         30.386
        ],
        [
         107.288,
         30.337
        ],
        [
         107.258,
         30.267
        ],
        [
         107.221,
         30.214
        ],
        [
         107.103,
         30.09
        ],
        [
         107.08,
         30.094
        ],
        [
         107.085,
         30.064
        ],
        [
         107.058,
         30.043
        ],
        [
         107.056,
         30.04
        ],
        [
         107.054,
         30.041
        ],
        [
         107.054,
         30.044
        ],
        [
         107.021,
         30.037
        ],
        [
         106.982,
         30.085
        ],
        [
         106.976,
         30.083
        ],
        [
         106.945,
         30.037
        ],
        [
         106.913,
         30.025
        ],
        [
         106.862,
         30.033
        ],
        [
         106.837,
         30.05
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.785,
         30.017
        ],
        [
         106.732,
         30.027
        ],
        [
         106.724,
         30.059
        ],
        [
         106.7,
         30.074
        ],
        [
         106.7,
         30.112
        ],
        [
         106.673,
         30.122
        ],
        [
         106.677,
         30.157
        ],
        [
         106.632,
         30.186
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.642,
         30.246
        ],
        [
         106.612,
         30.292
        ],
        [
         106.56,
         30.315
        ],
        [
         106.545,
         30.297
        ],
        [
         106.499,
         30.296
        ],
        [
         106.44,
         30.308
        ],
        [
         106.429,
         30.255
        ],
        [
         106.402,
         30.242
        ],
        [
         106.349,
         30.245
        ],
        [
         106.334,
         30.226
        ],
        [
         106.307,
         30.238
        ],
        [
         106.296,
         30.206
        ],
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.197
        ],
        [
         106.233,
         30.186
        ],
        [
         106.18,
         30.233
        ],
        [
         106.169,
         30.304
        ],
        [
         106.132,
         30.324
        ],
        [
         106.133,
         30.303
        ],
        [
         106.073,
         30.334
        ],
        [
         106.032,
         30.374
        ],
        [
         105.943,
         30.372
        ],
        [
         105.901,
         30.405
        ],
        [
         105.847,
         30.41
        ],
        [
         105.826,
         30.436
        ],
        [
         105.792,
         30.427
        ],
        [
         105.76,
         30.384
        ],
        [
         105.755,
         30.343
        ],
        [
         105.715,
         30.323
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.67,
         30.254
        ],
        [
         105.625,
         30.276
        ],
        [
         105.62,
         30.234
        ],
        [
         105.662,
         30.21
        ],
        [
         105.643,
         30.186
        ],
        [
         105.561,
         30.184
        ],
        [
         105.551,
         30.179
        ],
        [
         105.536,
         30.153
        ],
        [
         105.596,
         30.159
        ],
        [
         105.574,
         30.131
        ],
        [
         105.58,
         30.13
        ],
        [
         105.583,
         30.127
        ],
        [
         105.583,
         30.124
        ],
        [
         105.642,
         30.101
        ],
        [
         105.639,
         30.076
        ],
        [
         105.677,
         30.068
        ],
        [
         105.687,
         30.039
        ],
        [
         105.72,
         30.043
        ],
        [
         105.754,
         30.018
        ],
        [
         105.723,
         29.975
        ],
        [
         105.731,
         29.958
        ],
        [
         105.702,
         29.925
        ],
        [
         105.717,
         29.894
        ],
        [
         105.739,
         29.891
        ],
        [
         105.708,
         29.841
        ],
        [
         105.611,
         29.837
        ],
        [
         105.583,
         29.819
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
         105.401,
         29.66
        ],
        [
         108.798,
         29.66
        ]
       ]
      ],
      [
       [
        [
         105.583,
         30.124
        ],
        [
         105.583,
         30.127
        ],
        [
         105.58,
         30.13
        ],
        [
         105.574,
         30.131
        ],
        [
         105.583,
         30.124
        ]
       ]
      ],
      [
       [
        [
         107.058,
         30.043
        ],
        [
         107.054,
         30.044
        ],
        [
         107.054,
         30.041
        ],
        [
         107.056,
         30.04
        ],
        [
         107.058,
         30.043
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
         103.07,
         34.07
        ],
        [
         103.07,
         29.66
        ],
        [
         105.401,
         29.66
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
         105.583,
         29.819
        ],
        [
         105.611,
         29.837
        ],
        [
         105.708,
         29.841
        ],
        [
         105.739,
         29.891
        ],
        [
         105.717,
         29.894
        ],
        [
         105.702,
         29.925
        ],
        [
         105.731,
         29.958
        ],
        [
         105.723,
         29.975
        ],
        [
         105.754,
         30.018
        ],
        [
         105.72,
         30.043
        ],
        [
         105.687,
         30.039
        ],
        [
         105.677,
         30.068
        ],
        [
         105.639,
         30.076
        ],
        [
         105.642,
         30.101
        ],
        [
         105.583,
         30.124
        ],
        [
         105.574,
         30.131
        ],
        [
         105.596,
         30.159
        ],
        [
         105.536,
         30.153
        ],
        [
         105.551,
         30.179
        ],
        [
         105.556,
         30.187
        ],
        [
         105.559,
         30.185
        ],
        [
         105.561,
         30.184
        ],
        [
         105.643,
         30.186
        ],
        [
         105.662,
         30.21
        ],
        [
         105.62,
         30.234
        ],
        [
         105.625,
         30.276
        ],
        [
         105.67,
         30.254
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.715,
         30.323
        ],
        [
         105.755,
         30.343
        ],
        [
         105.76,
         30.384
        ],
        [
         105.792,
         30.427
        ],
        [
         105.826,
         30.436
        ],
        [
         105.847,
         30.41
        ],
        [
         105.901,
         30.405
        ],
        [
         105.943,
         30.372
        ],
        [
         106.032,
         30.374
        ],
        [
         106.073,
         30.334
        ],
        [
         106.133,
         30.303
        ],
        [
         106.132,
         30.324
        ],
        [
         106.169,
         30.304
        ],
        [
         106.18,
         30.233
        ],
        [
         106.233,
         30.186
        ],
        [
         106.26,
         30.197
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.208
        ],
        [
         106.264,
         30.21
        ],
        [
         106.296,
         30.206
        ],
        [
         106.307,
         30.238
        ],
        [
         106.334,
         30.226
        ],
        [
         106.349,
         30.245
        ],
        [
         106.402,
         30.242
        ],
        [
         106.429,
         30.255
        ],
        [
         106.44,
         30.308
        ],
        [
         106.499,
         30.296
        ],
        [
         106.545,
         30.297
        ],
        [
         106.56,
         30.315
        ],
        [
         106.612,
         30.292
        ],
        [
         106.642,
         30.246
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.632,
         30.186
        ],
        [
         106.677,
         30.157
        ],
        [
         106.673,
         30.122
        ],
        [
         106.7,
         30.112
        ],
        [
         106.7,
         30.074
        ],
        [
         106.724,
         30.059
        ],
        [
         106.732,
         30.027
        ],
        [
         106.785,
         30.017
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.837,
         30.05
        ],
        [
         106.862,
         30.033
        ],
        [
         106.913,
         30.025
        ],
        [
         106.945,
         30.037
        ],
        [
         106.976,
         30.083
        ],
        [
         106.976,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.981,
         30.088
        ],
        [
         106.982,
         30.085
        ],
        [
         107.021,
         30.037
        ],
        [
         107.054,
         30.044
        ],
        [
         107.058,
         30.043
        ],
        [
         107.085,
         30.064
        ],
        [
         107.08,
         30.094
        ],
        [
         107.103,
         30.09
        ],
        [
         107.221,
         30.214
        ],
        [
         107.258,
         30.267
        ],
        [
         107.288,
         30.337
        ],
        [
         107.339,
         30.386
        ],
        [
         107.369,
         30.469
        ],
        [
         107.409,
         30.522
        ],
        [
         107.443,
         30.533
        ],
        [
         107.428,
         30.547
        ],
        [
         107.486,
         30.598
        ],
        [
         107.517,
         30.645
        ],
        [
         107.478,
         30.665
        ],
        [
         107.458,
         30.705
        ],
        [
         107.425,
         30.74
        ],
        [
         107.454,
         30.772
        ],
        [
         107.454,
         30.772
        ],
        [
         107.499,
         30.809
        ],
        [
         107.483,
         30.839
        ],
        [
         107.516,
         30.855
        ],
        [
         107.577,
         30.848
        ],
        [
         107.645,
         30.821
        ],
        [
         107.693,
         30.876
        ],
        [
         107.74,
         30.884
        ],
        [
         107.761,
         30.863
        ],
        [
         107.764,
         30.817
        ],
        [
         107.788,
         30.82
        ],
        [
         107.851,
         30.793
        ],
        [
         107.956,
         30.883
        ],
        [
         107.995,
         30.909
        ],
        [
         107.948,
         30.919
        ],
        [
         107.943,
         30.989
        ],
        [
         107.983,
         30.984
        ],
        [
         108.004,
         31.026
        ],
        [
         108.06,
         31.052
        ],
        [
         108.027,
         31.062
        ],
        [
         108.009,
         31.11
        ],
        [
         108.026,
         31.116
        ],
        [
         108.09,
         31.205
        ],
        [
         108.076,
         31.232
        ],
        [
         108.031,
         31.217
        ],
        [
         108.039,
         31.253
        ],
        [
         108.095,
         31.268
        ],
        [
         108.186,
         31.337
        ],
        [
         108.154,
         31.371
        ],
        [
         108.216,
         31.41
        ],
        [
         108.224,
         31.464
        ],
        [
         108.193,
         31.468
        ],
        [
         108.191,
         31.492
        ],
        [
         108.234,
         31.507
        ],
        [
         108.255,
         31.499
        ],
        [
         108.344,
         31.513
        ],
        [
         108.339,
         31.539
        ],
        [
         108.386,
         31.544
        ],
        [
         108.39,
         31.592
        ],
        [
         108.443,
         31.634
        ],
        [
         108.469,
         31.636
        ],
        [
         108.519,
         31.666
        ],
        [
         108.547,
         31.665
        ],
        [
         108.515,
         31.694
        ],
        [
         108.506,
         31.734
        ],
        [
         108.535,
         31.758
        ],
        [
         108.462,
         31.78
        ],
        [
         108.455,
         31.814
        ],
        [
         108.429,
         31.809
        ],
        [
         108.391,
         31.83
        ],
        [
         108.386,
         31.854
        ],
        [
         108.344,
         31.861
        ],
        [
         108.259,
         31.967
        ],
        [
         108.307,
         31.997
        ],
        [
         108.352,
         31.972
        ],
        [
         108.37,
         31.989
        ],
        [
         108.329,
         32.02
        ],
        [
         108.362,
         32.036
        ],
        [
         108.344,
         32.067
        ],
        [
         108.373,
         32.077
        ],
        [
         108.43,
         32.061
        ],
        [
         108.453,
         32.09
        ],
        [
         108.4,
         32.147
        ],
        [
         108.379,
         32.154
        ],
        [
         108.379,
         32.154
        ],
        [
         108.38,
         32.154
        ],
        [
         108.38,
         32.154
        ],
        [
         108.37,
         32.172
        ],
        [
         108.399,
         32.194
        ],
        [
         108.48,
         32.183
        ],
        [
         108.51,
         32.201
        ],
        [
         108.507,
         32.246
        ],
        [
         108.47,
         32.271
        ],
        [
         108.414,
         32.252
        ],
        [
         108.39,
         32.264
        ],
        [
         108.311,
         32.232
        ],
        [
         108.241,
         32.275
        ],
        [
         108.18,
         32.222
        ],
        [
         108.157,
         32.239
        ],
        [
         108.143,
         32.219
        ],
        [
         108.087,
         32.233
        ],
        [
         108.018,
         32.212
        ],
        [
         108.025,
         32.177
        ],
        [
         107.98,
         32.146
        ],
        [
         107.925,
         32.197
        ],
        [
         107.89,
         32.214
        ],
        [
         107.864,
         32.201
        ],
        [
         107.812,
         32.248
        ],
        [
         107.754,
         32.338
        ],
        [
         107.708,
         32.332
        ],
        [
         107.681,
         32.397
        ],
        [
         107.648,
         32.414
        ],
        [
         107.598,
         32.412
        ],
        [
         107.527,
         32.382
        ],
        [
         107.49,
         32.425
        ],
        [
         107.457,
         32.418
        ],
        [
         107.461,
         32.454
        ],
        [
         107.439,
         32.466
        ],
        [
         107.436,
         32.53
        ],
        [
         107.382,
         32.54
        ],
        [
         107.357,
         32.507
        ],
        [
         107.314,
         32.49
        ],
        [
         107.288,
         32.457
        ],
        [
         107.264,
         32.403
        ],
        [
         107.212,
         32.429
        ],
        [
         107.19,
         32.468
        ],
        [
         107.127,
         32.482
        ],
        [
         107.08,
         32.542
        ],
        [
         107.108,
         32.601
        ],
        [
         107.099,
         32.649
        ],
        [
         107.06,
         32.686
        ],
        [
         107.067,
         32.709
        ],
        [
         107.013,
         32.721
        ],
        [
         106.913,
         32.704
        ],
        [
         106.904,
         32.721
        ],
        [
         106.855,
         32.724
        ],
        [
         106.823,
         32.705
        ],
        [
         106.793,
         32.713
        ],
        [
         106.783,
         32.736
        ],
        [
         106.734,
         32.739
        ],
        [
         106.67,
         32.695
        ],
        [
         106.627,
         32.682
        ],
        [
         106.586,
         32.688
        ],
        [
         106.518,
         32.668
        ],
        [
         106.498,
         32.649
        ],
        [
         106.451,
         32.66
        ],
        [
         106.421,
         32.617
        ],
        [
         106.389,
         32.627
        ],
        [
         106.348,
         32.671
        ],
        [
         106.301,
         32.68
        ],
        [
         106.268,
         32.674
        ],
        [
         106.255,
         32.694
        ],
        [
         106.174,
         32.698
        ],
        [
         106.12,
         32.72
        ],
        [
         106.071,
         32.758
        ],
        [
         106.073,
         32.764
        ],
        [
         106.094,
         32.824
        ],
        [
         106.071,
         32.829
        ],
        [
         106.044,
         32.865
        ],
        [
         106.012,
         32.83
        ],
        [
         105.969,
         32.849
        ],
        [
         105.932,
         32.826
        ],
        [
         105.893,
         32.839
        ],
        [
         105.849,
         32.818
        ],
        [
         105.825,
         32.825
        ],
        [
         105.823,
         32.77
        ],
        [
         105.779,
         32.75
        ],
        [
         105.769,
         32.768
        ],
        [
         105.719,
         32.76
        ],
        [
         105.678,
         32.726
        ],
        [
         105.596,
         32.699
        ],
        [
         105.585,
         32.729
        ],
        [
         105.564,
         32.725
        ],
        [
         105.555,
         32.794
        ],
        [
         105.534,
         32.791
        ],
        [
         105.524,
         32.848
        ],
        [
         105.495,
         32.873
        ],
        [
         105.499,
         32.912
        ],
        [
         105.468,
         32.93
        ],
        [
         105.414,
         32.922
        ],
        [
         105.408,
         32.886
        ],
        [
         105.381,
         32.876
        ],
        [
         105.396,
         32.851
        ],
        [
         105.396,
         32.851
        ],
        [
         105.428,
         32.784
        ],
        [
         105.454,
         32.767
        ],
        [
         105.449,
         32.733
        ],
        [
         105.369,
         32.713
        ],
        [
         105.347,
         32.683
        ],
        [
         105.298,
         32.657
        ],
        [
         105.263,
         32.652
        ],
        [
         105.22,
         32.666
        ],
        [
         105.215,
         32.637
        ],
        [
         105.185,
         32.618
        ],
        [
         105.111,
         32.594
        ],
        [
         105.079,
         32.637
        ],
        [
         105.027,
         32.65
        ],
        [
         104.925,
         32.608
        ],
        [
         104.882,
         32.601
        ],
        [
         104.846,
         32.654
        ],
        [
         104.82,
         32.663
        ],
        [
         104.796,
         32.643
        ],
        [
         104.74,
         32.635
        ],
        [
         104.697,
         32.674
        ],
        [
         104.643,
         32.662
        ],
        [
         104.593,
         32.696
        ],
        [
         104.583,
         32.722
        ],
        [
         104.527,
         32.728
        ],
        [
         104.512,
         32.754
        ],
        [
         104.459,
         32.749
        ],
        [
         104.364,
         32.823
        ],
        [
         104.294,
         32.836
        ],
        [
         104.277,
         32.902
        ],
        [
         104.288,
         32.943
        ],
        [
         104.346,
         32.94
        ],
        [
         104.378,
         32.953
        ],
        [
         104.384,
         32.994
        ],
        [
         104.426,
         33.011
        ],
        [
         104.392,
         33.035
        ],
        [
         104.338,
         33.038
        ],
        [
         104.378,
         33.109
        ],
        [
         104.351,
         33.159
        ],
        [
         104.328,
         33.224
        ],
        [
         104.324,
         33.269
        ],
        [
         104.304,
         33.304
        ],
        [
         104.334,
         33.316
        ],
        [
         104.386,
         33.298
        ],
        [
         104.42,
         33.327
        ],
        [
         104.374,
         33.345
        ],
        [
         104.293,
         33.337
        ],
        [
         104.272,
         33.391
        ],
        [
         104.22,
         33.404
        ],
        [
         104.213,
         33.447
        ],
        [
         104.18,
         33.473
        ],
        [
         104.155,
         33.543
        ],
        [
         104.177,
         33.6
        ],
        [
         104.103,
         33.663
        ],
        [
         104.046,
         33.686
        ],
        [
         103.98,
         33.671
        ],
        [
         103.861,
         33.682
        ],
        [
         103.778,
         33.659
        ],
        [
         103.691,
         33.694
        ],
        [
         103.668,
         33.686
        ],
        [
         103.646,
         33.709
        ],
        [
         103.593,
         33.716
        ],
        [
         103.564,
         33.7
        ],
        [
         103.552,
         33.671
        ],
        [
         103.52,
         33.678
        ],
        [
         103.545,
         33.72
        ],
        [
         103.518,
         33.807
        ],
        [
         103.465,
         33.802
        ],
        [
         103.435,
         33.753
        ],
        [
         103.354,
         33.744
        ],
        [
         103.279,
         33.774
        ],
        [
         103.285,
         33.802
        ],
        [
         103.25,
         33.814
        ],
        [
         103.228,
         33.795
        ],
        [
         103.165,
         33.806
        ],
        [
         103.154,
         33.819
        ],
        [
         103.181,
         33.901
        ],
        [
         103.165,
         33.929
        ],
        [
         103.132,
         33.932
        ],
        [
         103.12,
         33.953
        ],
        [
         103.157,
         33.999
        ],
        [
         103.148,
         34.037
        ],
        [
         103.12,
         34.035
        ],
        [
         103.13,
         34.066
        ],
        [
         103.144,
         34.07
        ],
        [
         103.07,
         34.07
        ]
       ]
      ],
      [
       [
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.208
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.197
        ],
        [
         106.264,
         30.21
        ]
       ]
      ],
      [
       [
        [
         106.977,
         30.088
        ],
        [
         106.976,
         30.088
        ],
        [
         106.976,
         30.083
        ],
        [
         106.982,
         30.085
        ],
        [
         106.981,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ]
       ]
      ],
      [
       [
        [
         105.559,
         30.185
        ],
        [
         105.556,
         30.187
        ],
        [
         105.551,
         30.179
        ],
        [
         105.561,
         30.184
        ],
        [
         105.559,
         30.185
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
         108.97,
         34.07
        ],
        [
         106.505,
         34.07
        ],
        [
         106.506,
         34.056
        ],
        [
         106.472,
         34.024
        ],
        [
         106.474,
         33.971
        ],
        [
         106.411,
         33.909
        ],
        [
         106.428,
         33.866
        ],
        [
         106.475,
         33.876
        ],
        [
         106.491,
         33.835
        ],
        [
         106.462,
         33.79
        ],
        [
         106.488,
         33.758
        ],
        [
         106.483,
         33.707
        ],
        [
         106.535,
         33.695
        ],
        [
         106.576,
         33.631
        ],
        [
         106.581,
         33.576
        ],
        [
         106.54,
         33.513
        ],
        [
         106.457,
         33.533
        ],
        [
         106.447,
         33.613
        ],
        [
         106.385,
         33.612
        ],
        [
         106.352,
         33.587
        ],
        [
         106.304,
         33.605
        ],
        [
         106.238,
         33.564
        ],
        [
         106.187,
         33.547
        ],
        [
         106.108,
         33.57
        ],
        [
         106.118,
         33.603
        ],
        [
         106.087,
         33.617
        ],
        [
         106.047,
         33.61
        ],
        [
         105.972,
         33.613
        ],
        [
         105.94,
         33.571
        ],
        [
         105.903,
         33.556
        ],
        [
         105.871,
         33.511
        ],
        [
         105.842,
         33.49
        ],
        [
         105.831,
         33.452
        ],
        [
         105.838,
         33.411
        ],
        [
         105.827,
         33.38
        ],
        [
         105.71,
         33.383
        ],
        [
         105.755,
         33.329
        ],
        [
         105.753,
         33.292
        ],
        [
         105.792,
         33.278
        ],
        [
         105.799,
         33.258
        ],
        [
         105.863,
         33.234
        ],
        [
         105.917,
         33.238
        ],
        [
         105.965,
         33.204
        ],
        [
         105.969,
         33.154
        ],
        [
         105.932,
         33.178
        ],
        [
         105.897,
         33.147
        ],
        [
         105.924,
         33.148
        ],
        [
         105.935,
         33.112
        ],
        [
         105.915,
         33.066
        ],
        [
         105.927,
         33.043
        ],
        [
         105.917,
         32.994
        ],
        [
         105.862,
         32.939
        ],
        [
         105.827,
         32.951
        ],
        [
         105.736,
         32.905
        ],
        [
         105.657,
         32.895
        ],
        [
         105.638,
         32.879
        ],
        [
         105.59,
         32.877
        ],
        [
         105.566,
         32.907
        ],
        [
         105.528,
         32.919
        ],
        [
         105.499,
         32.912
        ],
        [
         105.495,
         32.873
        ],
        [
         105.524,
         32.848
        ],
        [
         105.534,
         32.791
        ],
        [
         105.555,
         32.794
        ],
        [
         105.564,
         32.725
        ],
        [
         105.585,
         32.729
        ],
        [
         105.596,
         32.699
        ],
        [
         105.678,
         32.726
        ],
        [
         105.719,
         32.76
        ],
        [
         105.769,
         32.768
        ],
        [
         105.779,
         32.75
        ],
        [
         105.823,
         32.77
        ],
        [
         105.825,
         32.825
        ],
        [
         105.849,
         32.818
        ],
        [
         105.893,
         32.839
        ],
        [
         105.932,
         32.826
        ],
        [
         105.969,
         32.849
        ],
        [
         106.012,
         32.83
        ],
        [
         106.044,
         32.865
        ],
        [
         106.071,
         32.829
        ],
        [
         106.094,
         32.824
        ],
        [
         106.073,
         32.764
        ],
        [
         106.077,
         32.764
        ],
        [
         106.076,
         32.759
        ],
        [
         106.071,
         32.758
        ],
        [
         106.12,
         32.72
        ],
        [
         106.174,
         32.698
        ],
        [
         106.255,
         32.694
        ],
        [
         106.268,
         32.674
        ],
        [
         106.301,
         32.68
        ],
        [
         106.348,
         32.671
        ],
        [
         106.389,
         32.627
        ],
        [
         106.421,
         32.617
        ],
        [
         106.451,
         32.66
        ],
        [
         106.498,
         32.649
        ],
        [
         106.518,
         32.668
        ],
        [
         106.586,
         32.688
        ],
        [
         106.627,
         32.682
        ],
        [
         106.67,
         32.695
        ],
        [
         106.734,
         32.739
        ],
        [
         106.783,
         32.736
        ],
        [
         106.793,
         32.713
        ],
        [
         106.823,
         32.705
        ],
        [
         106.855,
         32.724
        ],
        [
         106.904,
         32.721
        ],
        [
         106.913,
         32.704
        ],
        [
         107.013,
         32.721
        ],
        [
         107.067,
         32.709
        ],
        [
         107.06,
         32.686
        ],
        [
         107.099,
         32.649
        ],
        [
         107.108,
         32.601
        ],
        [
         107.08,
         32.542
        ],
        [
         107.127,
         32.482
        ],
        [
         107.19,
         32.468
        ],
        [
         107.212,
         32.429
        ],
        [
         107.264,
         32.403
        ],
        [
         107.288,
         32.457
        ],
        [
         107.314,
         32.49
        ],
        [
         107.357,
         32.507
        ],
        [
         107.382,
         32.54
        ],
        [
         107.436,
         32.53
        ],
        [
         107.439,
         32.466
        ],
        [
         107.461,
         32.454
        ],
        [
         107.457,
         32.418
        ],
        [
         107.49,
         32.425
        ],
        [
         107.527,
         32.382
        ],
        [
         107.598,
         32.412
        ],
        [
         107.648,
         32.414
        ],
        [
         107.681,
         32.397
        ],
        [
         107.708,
         32.332
        ],
        [
         107.754,
         32.338
        ],
        [
         107.812,
         32.248
        ],
        [
         107.864,
         32.201
        ],
        [
         107.89,
         32.214
        ],
        [
         107.925,
         32.197
        ],
        [
         107.98,
         32.146
        ],
        [
         108.025,
         32.177
        ],
        [
         108.018,
         32.212
        ],
        [
         108.087,
         32.233
        ],
        [
         108.143,
         32.219
        ],
        [
         108.157,
         32.239
        ],
        [
         108.18,
         32.222
        ],
        [
         108.241,
         32.275
        ],
        [
         108.311,
         32.232
        ],
        [
         108.39,
         32.264
        ],
        [
         108.414,
         32.252
        ],
        [
         108.47,
         32.271
        ],
        [
         108.507,
         32.246
        ],
        [
         108.51,
         32.201
        ],
        [
         108.544,
         32.178
        ],
        [
         108.585,
         32.172
        ],
        [
         108.677,
         32.103
        ],
        [
         108.734,
         32.107
        ],
        [
         108.751,
         32.076
        ],
        [
         108.788,
         32.049
        ],
        [
         108.838,
         32.039
        ],
        [
         108.902,
         31.985
        ],
        [
         108.97,
         31.981
        ],
        [
         108.97,
         34.07
        ]
       ]
      ],
      [
       [
        [
         106.077,
         32.764
        ],
        [
         106.073,
         32.764
        ],
        [
         106.071,
         32.758
        ],
        [
         106.076,
         32.759
        ],
        [
         106.077,
         32.764
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         103.144,
         34.07
        ],
        [
         103.13,
         34.066
        ],
        [
         103.12,
         34.035
        ],
        [
         103.148,
         34.037
        ],
        [
         103.157,
         33.999
        ],
        [
         103.12,
         33.953
        ],
        [
         103.132,
         33.932
        ],
        [
         103.165,
         33.929
        ],
        [
         103.181,
         33.901
        ],
        [
         103.154,
         33.819
        ],
        [
         103.165,
         33.806
        ],
        [
         103.228,
         33.795
        ],
        [
         103.25,
         33.814
        ],
        [
         103.285,
         33.802
        ],
        [
         103.279,
         33.774
        ],
        [
         103.354,
         33.744
        ],
        [
         103.435,
         33.753
        ],
        [
         103.465,
         33.802
        ],
        [
         103.518,
         33.807
        ],
        [
         103.545,
         33.72
        ],
        [
         103.52,
         33.678
        ],
        [
         103.552,
         33.671
        ],
        [
         103.564,
         33.7
        ],
        [
         103.593,
         33.716
        ],
        [
         103.646,
         33.709
        ],
        [
         103.668,
         33.686
        ],
        [
         103.691,
         33.694
        ],
        [
         103.778,
         33.659
        ],
        [
         103.861,
         33.682
        ],
        [
         103.98,
         33.671
        ],
        [
         104.046,
         33.686
        ],
        [
         104.103,
         33.663
        ],
        [
         104.177,
         33.6
        ],
        [
         104.155,
         33.543
        ],
        [
         104.18,
         33.473
        ],
        [
         104.213,
         33.447
        ],
        [
         104.22,
         33.404
        ],
        [
         104.272,
         33.391
        ],
        [
         104.293,
         33.337
        ],
        [
         104.374,
         33.345
        ],
        [
         104.42,
         33.327
        ],
        [
         104.386,
         33.298
        ],
        [
         104.334,
         33.316
        ],
        [
         104.304,
         33.304
        ],
        [
         104.324,
         33.269
        ],
        [
         104.328,
         33.224
        ],
        [
         104.351,
         33.159
        ],
        [
         104.378,
         33.109
        ],
        [
         104.338,
         33.038
        ],
        [
         104.392,
         33.035
        ],
        [
         104.426,
         33.011
        ],
        [
         104.384,
         32.994
        ],
        [
         104.378,
         32.953
        ],
        [
         104.346,
         32.94
        ],
        [
         104.288,
         32.943
        ],
        [
         104.277,
         32.902
        ],
        [
         104.294,
         32.836
        ],
        [
         104.364,
         32.823
        ],
        [
         104.459,
         32.749
        ],
        [
         104.512,
         32.754
        ],
        [
         104.527,
         32.728
        ],
        [
         104.583,
         32.722
        ],
        [
         104.593,
         32.696
        ],
        [
         104.643,
         32.662
        ],
        [
         104.697,
         32.674
        ],
        [
         104.74,
         32.635
        ],
        [
         104.796,
         32.643
        ],
        [
         104.82,
         32.663
        ],
        [
         104.846,
         32.654
        ],
        [
         104.882,
         32.601
        ],
        [
         104.925,
         32.608
        ],
        [
         105.027,
         32.65
        ],
        [
         105.079,
         32.637
        ],
        [
         105.111,
         32.594
        ],
        [
         105.185,
         32.618
        ],
        [
         105.215,
         32.637
        ],
        [
         105.22,
         32.666
        ],
        [
         105.263,
         32.652
        ],
        [
         105.298,
         32.657
        ],
        [
         105.347,
         32.683
        ],
        [
         105.369,
         32.713
        ],
        [
         105.449,
         32.733
        ],
        [
         105.454,
         32.767
        ],
        [
         105.428,
         32.784
        ],
        [
         105.396,
         32.851
        ],
        [
         105.396,
         32.851
        ],
        [
         105.381,
         32.876
        ],
        [
         105.408,
         32.886
        ],
        [
         105.414,
         32.922
        ],
        [
         105.468,
         32.93
        ],
        [
         105.499,
         32.912
        ],
        [
         105.528,
         32.919
        ],
        [
         105.566,
         32.907
        ],
        [
         105.59,
         32.877
        ],
        [
         105.638,
         32.879
        ],
        [
         105.657,
         32.895
        ],
        [
         105.736,
         32.905
        ],
        [
         105.827,
         32.951
        ],
        [
         105.862,
         32.939
        ],
        [
         105.917,
         32.994
        ],
        [
         105.927,
         33.043
        ],
        [
         105.915,
         33.066
        ],
        [
         105.935,
         33.112
        ],
        [
         105.924,
         33.148
        ],
        [
         105.897,
         33.147
        ],
        [
         105.932,
         33.178
        ],
        [
         105.969,
         33.154
        ],
        [
         105.965,
         33.204
        ],
        [
         105.917,
         33.238
        ],
        [
         105.863,
         33.234
        ],
        [
         105.799,
         33.258
        ],
        [
         105.792,
         33.278
        ],
        [
         105.753,
         33.292
        ],
        [
         105.755,
         33.329
        ],
        [
         105.71,
         33.383
        ],
        [
         105.827,
         33.38
        ],
        [
         105.838,
         33.411
        ],
        [
         105.831,
         33.452
        ],
        [
         105.842,
         33.49
        ],
        [
         105.871,
         33.511
        ],
        [
         105.903,
         33.556
        ],
        [
         105.94,
         33.571
        ],
        [
         105.972,
         33.613
        ],
        [
         106.047,
         33.61
        ],
        [
         106.087,
         33.617
        ],
        [
         106.118,
         33.603
        ],
        [
         106.108,
         33.57
        ],
        [
         106.187,
         33.547
        ],
        [
         106.238,
         33.564
        ],
        [
         106.304,
         33.605
        ],
        [
         106.352,
         33.587
        ],
        [
         106.385,
         33.612
        ],
        [
         106.447,
         33.613
        ],
        [
         106.457,
         33.533
        ],
        [
         106.54,
         33.513
        ],
        [
         106.581,
         33.576
        ],
        [
         106.576,
         33.631
        ],
        [
         106.535,
         33.695
        ],
        [
         106.483,
         33.707
        ],
        [
         106.488,
         33.758
        ],
        [
         106.462,
         33.79
        ],
        [
         106.491,
         33.835
        ],
        [
         106.475,
         33.876
        ],
        [
         106.428,
         33.866
        ],
        [
         106.411,
         33.909
        ],
        [
         106.474,
         33.971
        ],
        [
         106.472,
         34.024
        ],
        [
         106.506,
         34.056
        ],
        [
         106.505,
         34.07
        ],
        [
         103.144,
         34.07
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       106.903,
       29.66
      ],
      [
       106.998,
       29.763
      ],
      [
       107.084,
       29.787
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
       107.419,
       29.771
      ],
      [
       107.458,
       29.856
      ],
      [
       107.53,
       29.89
      ],
      [
       107.634,
       29.873
      ],
      [
       107.842,
       30.043
      ],
      [
       108.308,
       30.58
      ],
      [
       108.391,
       30.692
      ],
      [
       108.418,
       30.755
      ],
      [
       108.417,
       30.808
      ],
      [
       108.443,
       30.853
      ],
      [
       108.496,
       30.892
      ],
      [
       108.757,
       30.936
      ],
      [
       108.97,
       30.959
      ]
     ]
    },
    "n": "Chang Jiang"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        106.398,
        33.068
       ],
       [
        106.676,
        33.142
       ],
       [
        106.832,
        33.134
       ],
       [
        106.931,
        33.102
       ],
       [
        107.026,
        33.042
       ],
       [
        107.189,
        33.063
       ],
       [
        107.42,
        33.165
       ],
       [
        107.596,
        33.2
       ],
       [
        107.718,
        33.171
       ],
       [
        107.807,
        33.178
       ],
       [
        107.861,
        33.222
       ],
       [
        107.905,
        33.234
       ],
       [
        107.939,
        33.216
       ],
       [
        107.956,
        33.175
       ],
       [
        107.956,
        33.112
       ],
       [
        108.036,
        33.062
       ],
       [
        108.195,
        33.024
       ],
       [
        108.266,
        32.964
       ],
       [
        108.247,
        32.881
       ],
       [
        108.288,
        32.811
       ],
       [
        108.388,
        32.753
       ],
       [
        108.411,
        32.734
       ],
       [
        108.411,
        32.709
       ],
       [
        108.425,
        32.665
       ],
       [
        108.512,
        32.55
       ],
       [
        108.651,
        32.506
       ],
       [
        108.718,
        32.528
       ],
       [
        108.759,
        32.599
       ],
       [
        108.782,
        32.614
       ],
       [
        108.798,
        32.617
       ],
       [
        108.819,
        32.609
       ],
       [
        108.836,
        32.603
       ],
       [
        108.855,
        32.608
       ],
       [
        108.922,
        32.636
       ],
       [
        108.97,
        32.669
       ]
      ]
     ]
    },
    "n": "Han"
   }
  ],
  "lakes": [],
  "_bbox": [
   103.07,
   29.66,
   108.97,
   34.07
  ]
 }
};
