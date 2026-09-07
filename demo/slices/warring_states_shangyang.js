// 本文件由 tools/build.py 自动生成（切片 warring_states_shangyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["warring_states_shangyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["warring_states_shangyang"] = {
 "meta": {
  "kind": "reform",
  "region": "warring_states",
  "province": "shaanxi",
  "title": "战国·商鞅变法",
  "dossier_label": "商鞅变法",
  "subtitle": "前359—前338 · 战国",
  "terrain_grid": "china_coarse",
  "lead": "商鞅以军功爵制与县制重构秦的国家能力，废井田开阡陌、统一度量衡，是战国国力竞赛的胜负手，亦为秦并六国奠基。本场景由 G1 工具（tools/derivation/derive_sim_config.py）零手 authoring 派生推演三件套，诚实披露基层执行史料缺环。",
  "parties_note": "叙事方=秦廷（商鞅）；来源=后世官修（基于《史记·商君列传》现代概述），归综合史料桶。",
  "subject_names": {
   "event:qiandu": "迁都咸阳",
   "institution:feijingtian": "废井田",
   "institution:junggongjue": "军功爵制"
  },
  "dims": [
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "warring_states",
  "scale_tier": "strategic",
  "strategic": {
   "political_cohesion": {
    "from": [
     "doctrine",
     "strategic"
    ],
    "from_dims": [
     3,
     6
    ],
    "layer": "inference",
    "note": "商鞅变法：军功爵制与县制重构秦廷权威，打破世卿世禄的政治凝聚"
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
    "note": "商鞅变法：废井田、统一度量衡，土地私有与赋税后勤半径扩张"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "商鞅变法：编户齐民与农战之策，人口动员转向耕战"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "international"
    ],
    "from_dims": [
     6,
     2
    ],
    "layer": "inference",
    "note": "商鞅变法：秦据关中、东向争雄，地缘战略由守转攻"
   }
  },
  "page": "county.html?scene=warring_states_shangyang",
  "key": "warring_states_shangyang",
  "scene_id": "warring_states_shangyang",
  "vocab_pack": "ming_qing"
 },
 "sources": [
  {
   "id": "shangyang",
   "title": "shangyang·综合史料",
   "party": "学界",
   "availability": "not_free",
   "bias_note": "G1 自动派生：source 由断言 source 字段汇总，party 归综合史料桶。",
   "distance_label": "综合诸家记述（派生占位）"
  }
 ],
 "places": [
  {
   "id": "yong",
   "name": "yong",
   "lon": 107.39,
   "lat": 34.53,
   "elev": 931
  },
  {
   "id": "xianyang",
   "name": "xianyang",
   "lon": 108.7,
   "lat": 34.33,
   "elev": 434
  }
 ],
 "persons": [],
 "assertions": [
  {
   "id": "SHY_01",
   "subject": "policy:kencao",
   "predicate": "颁行",
   "value_text": "秦孝公三年商鞅颁《垦草令》，励农战、抑游惰，开变法之端。",
   "source": "shangyang",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "time": {
    "era_text": "秦孝公三年",
    "start": "-359-01-01",
    "end": "-359-12-31",
    "gregorian_year": -359
   },
   "place": "yong",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_02",
   "subject": "institution:feijingtian",
   "predicate": "废止",
   "value_text": "废井田、开阡陌封疆，承认土地私有，准许买卖，旧公社田制瓦解。",
   "source": "shangyang",
   "layer": "record",
   "quote": "为田开阡陌封疆，而赋税平。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "秦孝公十二年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_03",
   "subject": "institution:junggongjue",
   "predicate": "创立",
   "value_text": "立军功爵制（二十等爵），依军功授爵赏田，废除世卿世禄。",
   "source": "shangyang",
   "layer": "record",
   "quote": "有军功者，各以率受上爵。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "秦孝公年间",
    "start": "-352-01-01",
    "end": "-352-12-31",
    "gregorian_year": -352
   },
   "place": "xianyang",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_04",
   "subject": "institution:xianzhi",
   "predicate": "推行",
   "value_text": "推行县制，全国置县、丞尉由中央任免，集权于君。",
   "source": "shangyang",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "time": {
    "era_text": "秦孝公十二年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_05",
   "subject": "institution:lianzuo",
   "predicate": "实行",
   "value_text": "行什伍连坐法，民相纠察、同罪连坐，强化基层控制。",
   "source": "shangyang",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "time": {
    "era_text": "秦孝公年间",
    "start": "-352-01-01",
    "end": "-352-12-31",
    "gregorian_year": -352
   },
   "place": "xianyang",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_06",
   "subject": "policy:zhongnong",
   "predicate": "推行",
   "value_text": "重农抑商，奖励耕织，事末利者举以为孥，农战为本。",
   "source": "shangyang",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.65,
   "time": {
    "era_text": "秦孝公年间",
    "start": "-359-01-01",
    "end": "-350-12-31",
    "gregorian_year": -355
   },
   "place": "xianyang",
   "dims": [
    4,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_07",
   "subject": "tech:duiliangheng",
   "predicate": "统一",
   "value_text": "统一度量衡，制商鞅方升，平斗桶权衡丈尺，便赋税贸易。",
   "source": "shangyang",
   "layer": "record",
   "quote": "平斗桶权衡丈尺。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.75,
   "time": {
    "era_text": "秦孝公十八年前后",
    "start": "-344-01-01",
    "end": "-344-12-31",
    "gregorian_year": -344
   },
   "place": "xianyang",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_08",
   "subject": "event:qiandu",
   "predicate": "迁都",
   "value_text": "秦孝公十二年徙都咸阳，筑冀阙宫庭，示变法决心。",
   "source": "shangyang",
   "layer": "record",
   "quote": "作为冀阙宫庭于咸阳，秦自雍徙都之。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "秦孝公十二年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_09",
   "subject": "institution:chelie",
   "predicate": "结局",
   "value_text": "秦孝公崩，商鞅被车裂，然新法留存、秦势已成。",
   "source": "shangyang",
   "layer": "record",
   "quote": "秦惠王车裂商君以徇。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "秦惠王元年",
    "start": "-338-01-01",
    "end": "-338-12-31",
    "gregorian_year": -338
   },
   "place": "xianyang",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_10",
   "subject": "theme:qiangqin",
   "predicate": "影响",
   "value_text": "变法后秦农战之效显，国力骤增，为并吞六国奠基。",
   "source": "shangyang",
   "layer": "inference",
   "confidence": 0.7,
   "time": {
    "era_text": "变法后",
    "start": "-338-01-01",
    "end": "-338-12-31",
    "gregorian_year": -338
   },
   "place": "xianyang",
   "dims": [
    4,
    6
   ],
   "dim_source": "inferred",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_11",
   "subject": "theme:fa_zhi",
   "predicate": "定型",
   "value_text": "商鞅以法治国、弱民强国，法家路线成秦政底色，与山东儒风异趣。",
   "source": "shangyang",
   "layer": "inference",
   "confidence": 0.6,
   "time": {
    "era_text": "战国中后期",
    "start": "-338-01-01",
    "end": "-338-12-31",
    "gregorian_year": -338
   },
   "place": "xianyang",
   "dims": [
    5,
    3
   ],
   "dim_source": "inferred",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SHY_gap_12",
   "subject": "theme:shangyang",
   "predicate": "史料缺环",
   "value_text": "商鞅变法各县令考绩、基层授田与连坐执行细节，传世文献简略，细节存在缺口。",
   "source": "shangyang",
   "layer": "gap",
   "confidence": 0,
   "time": {
    "era_text": "秦孝公年间",
    "start": "-350-01-01",
    "end": "-338-12-31",
    "gregorian_year": -344
   },
   "place": null,
   "scale": "institution",
   "note": "各县推行新制之执行差异史载不明",
   "lead": {
    "where": "《史记·商君列传》《商君书》对读",
    "skills": [
     "官制考证",
     "制度史"
    ],
    "accept": "补县制推行与授田执行细节"
   },
   "dims": [
    3
   ],
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHY_gap_12"
 ],
 "events": [],
 "edges": [],
 "control": [
  {
   "place_id": "yong",
   "party": "综述考订",
   "start": -359,
   "end": -338,
   "timeline": "main"
  },
  {
   "place_id": "xianyang",
   "party": "综述考订",
   "start": -359,
   "end": -338,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "yong",
   "name": "yong",
   "lon": 107.39,
   "lat": 34.53,
   "region": "warring_states"
  },
  {
   "place_id": "xianyang",
   "name": "xianyang",
   "lon": 108.7,
   "lat": 34.33,
   "region": "warring_states"
  }
 ],
 "control_years": [
  -359,
  -338
 ],
 "faction_geo": {
  "donglin": {
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "geo_note": "东林以江南无锡东林书院为舆论中心（顾宪成、高攀龙），成员近三成出自南直隶，余布各省清流。",
   "points": [
    {
     "name": "无锡",
     "lon": 120.3,
     "lat": 31.57,
     "note": "顾宪成故里、东林书院所在，今江苏无锡",
     "resolved": true
    },
    {
     "name": "常州",
     "lon": 119.97,
     "lat": 31.81,
     "note": "吴中行故里，今江苏常州",
     "resolved": true
    },
    {
     "name": "苏州",
     "lon": null,
     "lat": null,
     "note": "",
     "resolved": false
    }
   ]
  },
  "eunuch": {
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "geo_note": "阉党依附魏忠贤（北直隶/河间）与客氏，核心是内廷宦官+北直隶依附官僚。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "赫图阿拉",
     "lon": 124.7,
     "lat": 41.6,
     "note": "后金/满洲发祥地，今辽宁新宾",
     "resolved": true
    }
   ]
  },
  "zhe_dang": {
   "name": "浙党",
   "color": "#B9770E",
   "geo_note": "浙党以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢。",
   "points": [
    {
     "name": "杭州",
     "lon": 120.15,
     "lat": 30.27,
     "note": "浙党核心，今浙江杭州",
     "resolved": true
    }
   ]
  },
  "chu_dang": {
   "name": "楚党",
   "color": "#CA6F1E",
   "geo_note": "楚党以楚籍官僚官应震、吴亮嗣为首，与浙党合攻东林。",
   "points": [
    {
     "name": "武昌",
     "lon": 114.3,
     "lat": 30.59,
     "note": "楚党核心，今湖北武汉",
     "resolved": true
    }
   ]
  },
  "qi_dang": {
   "name": "齐党",
   "color": "#B7950B",
   "geo_note": "齐党以齐籍官僚亓诗教、周永春为首，多居主兵中枢。",
   "points": [
    {
     "name": "济南",
     "lon": 117.0,
     "lat": 36.65,
     "note": "齐党核心，今山东济南",
     "resolved": true
    }
   ]
  },
  "xuan_kun": {
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "geo_note": "宣党（汤宾尹/宣城）与昆党（顾天埈/昆山）小集团，主要影响科举京察。",
   "points": [
    {
     "name": "宣城",
     "lon": 118.75,
     "lat": 30.94,
     "note": "宣党核心，今安徽宣城",
     "resolved": true
    },
    {
     "name": "昆山",
     "lon": 120.98,
     "lat": 31.39,
     "note": "昆党核心，今江苏昆山",
     "resolved": true
    }
   ]
  },
  "yan_shang": {
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "geo_note": "盐商/盐政利益以两淮（扬州）盐商及其利益相关官僚为主体。",
   "points": [
    {
     "name": "扬州",
     "lon": 119.41,
     "lat": 32.39,
     "note": "今江苏扬州",
     "resolved": true
    }
   ]
  },
  "nei_guan": {
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "geo_note": "内臣/宦官系统独立于阉党，监军镇守矿税监多出自内廷，北直隶为活动中心。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    }
   ]
  },
  "feng_jiang": {
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "geo_note": "封疆大吏/辽东经略系据辽东边镇（辽阳、沈阳），对败绩诿过、战功夸张。",
   "points": [
    {
     "name": "辽阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "唐安东都护府，今辽宁辽阳",
     "resolved": true
    },
    {
     "name": "沈阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "辽沈战役·沈阳解放",
     "resolved": true
    }
   ]
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
        106.39,
        33.33
       ],
       [
        106.39,
        35.53
       ],
       [
        109.7,
        35.53
       ],
       [
        109.7,
        33.33
       ],
       [
        106.39,
        33.33
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
         109.7,
         33.33
        ],
        [
         109.7,
         35.53
        ],
        [
         108.622,
         35.53
        ],
        [
         108.606,
         35.503
        ],
        [
         108.631,
         35.419
        ],
        [
         108.61,
         35.355
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.667,
         35.257
        ],
        [
         107.652,
         35.245
        ],
        [
         107.686,
         35.218
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.675,
         34.951
        ],
        [
         107.639,
         34.935
        ],
        [
         107.62,
         34.965
        ],
        [
         107.564,
         34.969
        ],
        [
         107.524,
         34.91
        ],
        [
         107.455,
         34.917
        ],
        [
         107.401,
         34.933
        ],
        [
         107.369,
         34.918
        ],
        [
         107.35,
         34.934
        ],
        [
         107.287,
         34.932
        ],
        [
         107.253,
         34.881
        ],
        [
         107.189,
         34.893
        ],
        [
         107.162,
         34.944
        ],
        [
         107.12,
         34.95
        ],
        [
         107.09,
         34.977
        ],
        [
         107.083,
         35.024
        ],
        [
         107.013,
         35.03
        ],
        [
         106.991,
         35.068
        ],
        [
         106.95,
         35.067
        ],
        [
         106.902,
         35.095
        ],
        [
         106.838,
         35.08
        ],
        [
         106.711,
         35.101
        ],
        [
         106.706,
         35.082
        ],
        [
         106.615,
         35.071
        ],
        [
         106.577,
         35.089
        ],
        [
         106.542,
         35.084
        ],
        [
         106.522,
         35.028
        ],
        [
         106.495,
         35.006
        ],
        [
         106.495,
         35.006
        ],
        [
         106.485,
         34.984
        ],
        [
         106.493,
         34.941
        ],
        [
         106.528,
         34.877
        ],
        [
         106.556,
         34.861
        ],
        [
         106.551,
         34.829
        ],
        [
         106.575,
         34.77
        ],
        [
         106.539,
         34.746
        ],
        [
         106.506,
         34.747
        ],
        [
         106.487,
         34.715
        ],
        [
         106.457,
         34.704
        ],
        [
         106.442,
         34.675
        ],
        [
         106.471,
         34.634
        ],
        [
         106.419,
         34.643
        ],
        [
         106.39,
         34.625
        ],
        [
         106.39,
         34.524
        ],
        [
         106.455,
         34.532
        ],
        [
         106.514,
         34.512
        ],
        [
         106.514,
         34.498
        ],
        [
         106.559,
         34.488
        ],
        [
         106.611,
         34.454
        ],
        [
         106.638,
         34.391
        ],
        [
         106.717,
         34.369
        ],
        [
         106.691,
         34.338
        ],
        [
         106.705,
         34.3
        ],
        [
         106.682,
         34.256
        ],
        [
         106.653,
         34.244
        ],
        [
         106.634,
         34.26
        ],
        [
         106.589,
         34.254
        ],
        [
         106.577,
         34.281
        ],
        [
         106.527,
         34.292
        ],
        [
         106.496,
         34.238
        ],
        [
         106.532,
         34.254
        ],
        [
         106.558,
         34.23
        ],
        [
         106.585,
         34.15
        ],
        [
         106.56,
         34.11
        ],
        [
         106.502,
         34.105
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
         106.39,
         33.612
        ],
        [
         106.39,
         33.33
        ],
        [
         109.7,
         33.33
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
         106.442,
         35.53
        ],
        [
         106.441,
         35.526
        ],
        [
         106.466,
         35.481
        ],
        [
         106.49,
         35.481
        ],
        [
         106.483,
         35.45
        ],
        [
         106.504,
         35.415
        ],
        [
         106.501,
         35.364
        ],
        [
         106.472,
         35.311
        ],
        [
         106.416,
         35.276
        ],
        [
         106.39,
         35.275
        ],
        [
         106.39,
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
         106.502,
         34.105
        ],
        [
         106.56,
         34.11
        ],
        [
         106.585,
         34.15
        ],
        [
         106.558,
         34.23
        ],
        [
         106.532,
         34.254
        ],
        [
         106.496,
         34.238
        ],
        [
         106.527,
         34.292
        ],
        [
         106.577,
         34.281
        ],
        [
         106.589,
         34.254
        ],
        [
         106.634,
         34.26
        ],
        [
         106.653,
         34.244
        ],
        [
         106.682,
         34.256
        ],
        [
         106.705,
         34.3
        ],
        [
         106.691,
         34.338
        ],
        [
         106.717,
         34.369
        ],
        [
         106.638,
         34.391
        ],
        [
         106.611,
         34.454
        ],
        [
         106.559,
         34.488
        ],
        [
         106.514,
         34.498
        ],
        [
         106.514,
         34.512
        ],
        [
         106.455,
         34.532
        ],
        [
         106.39,
         34.524
        ],
        [
         106.39,
         34.625
        ],
        [
         106.419,
         34.643
        ],
        [
         106.471,
         34.634
        ],
        [
         106.442,
         34.675
        ],
        [
         106.457,
         34.704
        ],
        [
         106.487,
         34.715
        ],
        [
         106.506,
         34.747
        ],
        [
         106.539,
         34.746
        ],
        [
         106.575,
         34.77
        ],
        [
         106.551,
         34.829
        ],
        [
         106.556,
         34.861
        ],
        [
         106.528,
         34.877
        ],
        [
         106.493,
         34.941
        ],
        [
         106.485,
         34.984
        ],
        [
         106.495,
         35.006
        ],
        [
         106.495,
         35.006
        ],
        [
         106.522,
         35.028
        ],
        [
         106.542,
         35.084
        ],
        [
         106.577,
         35.089
        ],
        [
         106.615,
         35.071
        ],
        [
         106.706,
         35.082
        ],
        [
         106.711,
         35.101
        ],
        [
         106.838,
         35.08
        ],
        [
         106.902,
         35.095
        ],
        [
         106.95,
         35.067
        ],
        [
         106.991,
         35.068
        ],
        [
         107.013,
         35.03
        ],
        [
         107.083,
         35.024
        ],
        [
         107.09,
         34.977
        ],
        [
         107.12,
         34.95
        ],
        [
         107.162,
         34.944
        ],
        [
         107.189,
         34.893
        ],
        [
         107.253,
         34.881
        ],
        [
         107.287,
         34.932
        ],
        [
         107.35,
         34.934
        ],
        [
         107.369,
         34.918
        ],
        [
         107.401,
         34.933
        ],
        [
         107.455,
         34.917
        ],
        [
         107.524,
         34.91
        ],
        [
         107.564,
         34.969
        ],
        [
         107.62,
         34.965
        ],
        [
         107.639,
         34.935
        ],
        [
         107.675,
         34.951
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.686,
         35.218
        ],
        [
         107.652,
         35.245
        ],
        [
         107.667,
         35.257
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.61,
         35.355
        ],
        [
         108.631,
         35.419
        ],
        [
         108.606,
         35.503
        ],
        [
         108.622,
         35.53
        ],
        [
         106.442,
         35.53
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         106.39,
         35.53
        ],
        [
         106.39,
         35.275
        ],
        [
         106.416,
         35.276
        ],
        [
         106.472,
         35.311
        ],
        [
         106.501,
         35.364
        ],
        [
         106.504,
         35.415
        ],
        [
         106.483,
         35.45
        ],
        [
         106.49,
         35.481
        ],
        [
         106.466,
         35.481
        ],
        [
         106.441,
         35.526
        ],
        [
         106.442,
         35.53
        ],
        [
         106.39,
         35.53
        ]
       ]
      ]
     ]
    },
    "n": "宁夏回族自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   106.39,
   33.33,
   109.7,
   35.53
  ]
 }
};
