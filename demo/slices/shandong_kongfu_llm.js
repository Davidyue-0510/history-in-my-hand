// 本文件由 tools/build.py 自动生成（切片 shandong_kongfu_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shandong_kongfu_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shandong_kongfu_llm"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "province": "shandong",
  "title": "孔府与衍圣公世袭（宋—清）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qufu",
  "dossier_event": "event:ev_shandong_kongfu_llm_01",
  "vocab_pack": "inline:shandong_kongfu_llm",
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
    "note": "孔府与衍圣公世袭（宋—清）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "孔府与衍圣公世袭（宋—清）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "孔府与衍圣公世袭（宋—清）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "孔府与衍圣公世袭（宋—清）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shandong_kongfu_llm",
  "key": "shandong_kongfu_llm",
  "scene_id": "shandong_kongfu_llm"
 },
 "sources": [
  {
   "id": "kongfu_src",
   "title": "宋史·礼志 / 阙里文献考",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "脱脱/孔继汾",
   "period": "元/清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "qufu",
   "name": "曲阜",
   "type": "city",
   "modern": "今中国山东省曲阜市",
   "note": "孔子故里，阙里所在。坐标据地名志条目：曲阜，标 chgis。",
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.98052,
   "lat": 35.59756,
   "geo_match": "chgis",
   "geo_note": "坐标据地名志条目：曲阜（诚实回填 v0.221）。",
   "elev": 64
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "孔宗愿",
   "role": "孔子四十六代孙",
   "note": "宋仁宗朝封衍圣公",
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "person:SHA__p01",
   "predicate": "受封衍圣公",
   "value_text": "宋仁宗朝封衍圣公",
   "time": {
    "era_text": "宋仁宗朝",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[alias] person:孔宗愿 → SHA__p01 (name_match) | [auto] 补层 inference",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shandong_kongfu_llm_01",
   "predicate": "世袭",
   "value_text": "此后世袭不绝",
   "time": {
    "era_text": "宋仁宗朝",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "此后世袭不绝",
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
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "此后世袭不绝",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "place:qufu",
   "predicate": "赐田免税",
   "value_text": "赐田免税置官属",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "曲阜阙里赐田、免税、置官属",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "曲阜阙里赐田、免税、置官属",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "place:qufu",
   "predicate": "庙学合一",
   "value_text": "庙学合一，天下文枢",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "庙学合一，天下文枢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    5
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "庙学合一，天下文枢",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "person:SHA__p01",
   "predicate": "封号沿革",
   "value_text": "褒成侯之号，衍圣公之封",
   "time": {
    "era_text": "宋仁宗朝",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "褒成侯之号，衍圣公之封",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "[alias] person:孔宗愿 → SHA__p01 (name_match)",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "褒成侯之号，衍圣公之封",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "place:qufu",
   "predicate": "历代优礼",
   "value_text": "元明清皆优礼",
   "time": {
    "era_text": "元明清",
    "start": "1271"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "元明清皆优礼",
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
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "元明清皆优礼",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:qufu",
   "predicate": "班列文官之首",
   "value_text": "班列文官之首",
   "time": {
    "era_text": "元明清",
    "start": "1271"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "班列文官之首",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "班列文官之首",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:qufu",
   "predicate": "世袭贵族特例",
   "value_text": "孔府为世袭贵族特例",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "孔府遂为世袭贵族之特例",
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
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孔府遂为世袭贵族之特例",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "place:qufu",
   "predicate": "与国咸休",
   "value_text": "与国咸休，同天并老",
   "time": {
    "era_text": "明清",
    "start": "1368"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "与国咸休，同天并老",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "与国咸休，同天并老",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:qufu",
   "predicate": "世袭制度",
   "value_text": "世袭不绝，代有宠命",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "代有宠命",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "代有宠命",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:qufu",
   "predicate": "孔府地位",
   "value_text": "孔府为世袭贵族特例",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "孔府遂为世袭贵族之特例",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学者观点",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "孔府遂为世袭贵族之特例",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "place:qufu",
   "predicate": "世袭中断",
   "value_text": "世袭是否中断待考",
   "time": {
    "era_text": "宋至清",
    "start": "1042"
   },
   "place": "qufu",
   "source": "kongfu_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载中断",
   "dims": [
    3,
    6
   ],
   "lead": {
    "where": "曲阜孔府档案",
    "skills": [
     "历史考证"
    ],
    "accept": "需查证世系"
   },
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "孔子四十六代孙孔宗愿于宋仁宗朝封'衍圣公'，此后世袭不绝，'褒成侯之号，衍圣公之封，代有宠命'。曲阜阙里赐田、免税、置官属，庙学合一，天下文枢。元明清皆优礼，班列文官之首，'与国咸休，同天并老'，孔府遂为世袭贵族之特例。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_012"
 ],
 "events": [
  {
   "id": "ev_shandong_kongfu_llm_01",
   "subject": "event:ev_shandong_kongfu_llm_01",
   "year": 1042,
   "era": "宋仁宗庆历二年",
   "title": "孔宗愿封衍圣公",
   "kind": "行政",
   "text": "孔宗愿受封衍圣公，世袭始",
   "_source_idx": 0,
   "_source_name": "宋史·礼志 / 阙里文献考",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "qufu",
   "party": "后世官修",
   "start": 1042,
   "end": 1368,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "qufu",
   "name": "曲阜",
   "lon": 116.98052,
   "lat": 35.59756,
   "region": "court"
  }
 ],
 "control_years": [
  1042,
  1368
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
        115.981,
        34.598
       ],
       [
        115.981,
        36.598
       ],
       [
        117.981,
        36.598
       ],
       [
        117.981,
        34.598
       ],
       [
        115.981,
        34.598
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
         117.131,
         34.598
        ],
        [
         117.104,
         34.649
        ],
        [
         117.073,
         34.639
        ],
        [
         117.062,
         34.676
        ],
        [
         117.07,
         34.714
        ],
        [
         117.022,
         34.759
        ],
        [
         116.969,
         34.772
        ],
        [
         116.951,
         34.811
        ],
        [
         116.979,
         34.815
        ],
        [
         116.966,
         34.845
        ],
        [
         116.929,
         34.843
        ],
        [
         116.922,
         34.895
        ],
        [
         116.858,
         34.929
        ],
        [
         116.822,
         34.93
        ],
        [
         116.816,
         34.965
        ],
        [
         116.789,
         34.975
        ],
        [
         116.781,
         34.917
        ],
        [
         116.678,
         34.939
        ],
        [
         116.622,
         34.94
        ],
        [
         116.614,
         34.923
        ],
        [
         116.558,
         34.909
        ],
        [
         116.445,
         34.896
        ],
        [
         116.408,
         34.851
        ],
        [
         116.403,
         34.756
        ],
        [
         116.369,
         34.749
        ],
        [
         116.364,
         34.715
        ],
        [
         116.392,
         34.71
        ],
        [
         116.374,
         34.64
        ],
        [
         116.43,
         34.651
        ],
        [
         116.433,
         34.63
        ],
        [
         116.477,
         34.615
        ],
        [
         116.483,
         34.598
        ],
        [
         117.981,
         34.598
        ],
        [
         117.981,
         34.671
        ],
        [
         117.952,
         34.678
        ],
        [
         117.91,
         34.671
        ],
        [
         117.903,
         34.644
        ],
        [
         117.794,
         34.652
        ],
        [
         117.792,
         34.598
        ],
        [
         117.131,
         34.598
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
         116.483,
         34.598
        ],
        [
         116.477,
         34.615
        ],
        [
         116.433,
         34.63
        ],
        [
         116.43,
         34.651
        ],
        [
         116.374,
         34.64
        ],
        [
         116.334,
         34.621
        ],
        [
         116.325,
         34.601
        ],
        [
         116.286,
         34.609
        ],
        [
         116.278,
         34.598
        ],
        [
         116.483,
         34.598
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
         116.374,
         34.64
        ],
        [
         116.392,
         34.71
        ],
        [
         116.364,
         34.715
        ],
        [
         116.369,
         34.749
        ],
        [
         116.403,
         34.756
        ],
        [
         116.408,
         34.851
        ],
        [
         116.445,
         34.896
        ],
        [
         116.558,
         34.909
        ],
        [
         116.614,
         34.923
        ],
        [
         116.622,
         34.94
        ],
        [
         116.678,
         34.939
        ],
        [
         116.781,
         34.917
        ],
        [
         116.789,
         34.975
        ],
        [
         116.816,
         34.965
        ],
        [
         116.822,
         34.93
        ],
        [
         116.858,
         34.929
        ],
        [
         116.922,
         34.895
        ],
        [
         116.929,
         34.843
        ],
        [
         116.966,
         34.845
        ],
        [
         116.979,
         34.815
        ],
        [
         116.951,
         34.811
        ],
        [
         116.969,
         34.772
        ],
        [
         117.022,
         34.759
        ],
        [
         117.07,
         34.714
        ],
        [
         117.062,
         34.676
        ],
        [
         117.073,
         34.639
        ],
        [
         117.104,
         34.649
        ],
        [
         117.131,
         34.598
        ],
        [
         117.792,
         34.598
        ],
        [
         117.794,
         34.652
        ],
        [
         117.903,
         34.644
        ],
        [
         117.91,
         34.671
        ],
        [
         117.952,
         34.678
        ],
        [
         117.981,
         34.671
        ],
        [
         117.981,
         36.598
        ],
        [
         115.981,
         36.598
        ],
        [
         115.981,
         36.043
        ],
        [
         115.99,
         36.045
        ],
        [
         116.058,
         36.105
        ],
        [
         116.099,
         36.112
        ],
        [
         116.063,
         36.029
        ],
        [
         116.049,
         35.97
        ],
        [
         115.985,
         35.974
        ],
        [
         115.981,
         35.973
        ],
        [
         115.981,
         34.598
        ],
        [
         115.986,
         34.598
        ],
        [
         115.991,
         34.615
        ],
        [
         116.028,
         34.598
        ],
        [
         116.059,
         34.598
        ],
        [
         116.101,
         34.606
        ],
        [
         116.107,
         34.598
        ],
        [
         116.278,
         34.598
        ],
        [
         116.286,
         34.609
        ],
        [
         116.325,
         34.601
        ],
        [
         116.334,
         34.621
        ],
        [
         116.374,
         34.64
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.981,
         34.598
        ],
        [
         116.107,
         34.598
        ],
        [
         116.101,
         34.606
        ],
        [
         116.059,
         34.598
        ],
        [
         116.028,
         34.598
        ],
        [
         115.991,
         34.615
        ],
        [
         115.986,
         34.598
        ],
        [
         115.981,
         34.598
        ],
        [
         115.981,
         35.973
        ],
        [
         115.985,
         35.974
        ],
        [
         116.049,
         35.97
        ],
        [
         116.063,
         36.029
        ],
        [
         116.099,
         36.112
        ],
        [
         116.058,
         36.105
        ],
        [
         115.99,
         36.045
        ],
        [
         115.981,
         36.043
        ],
        [
         115.981,
         34.598
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.981,
       35.996
      ],
      [
       116.036,
       36.071
      ],
      [
       116.078,
       36.11
      ],
      [
       116.116,
       36.143
      ],
      [
       116.227,
       36.201
      ],
      [
       116.451,
       36.339
      ],
      [
       116.581,
       36.44
      ],
      [
       116.593,
       36.49
      ],
      [
       116.644,
       36.561
      ],
      [
       116.679,
       36.598
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.148,
        34.598
       ],
       [
        117.141,
        34.612
       ],
       [
        117.128,
        34.663
       ],
       [
        117.139,
        34.725
       ],
       [
        117.179,
        34.719
       ],
       [
        117.266,
        34.665
       ],
       [
        117.318,
        34.621
       ],
       [
        117.324,
        34.598
       ],
       [
        117.148,
        34.598
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   115.981,
   34.598,
   117.981,
   36.598
  ]
 }
};
