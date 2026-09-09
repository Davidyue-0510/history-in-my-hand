// 本文件由 tools/build.py 自动生成（切片 fujian_tulou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fujian_tulou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fujian_tulou"] = {
 "meta": {
  "kind": "tech",
  "region": "jiangnan",
  "province": "fujian",
  "title": "明清·福建土楼（客家夯土聚族）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "minxi",
  "dossier_event": "event:ev_fujian_tulou_01",
  "vocab_pack": "inline:fujian_tulou",
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
    "note": "明清·福建土楼（客家夯土聚族）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明清·福建土楼（客家夯土聚族）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "明清·福建土楼（客家夯土聚族）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "明清·福建土楼（客家夯土聚族）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   4,
   6
  ],
  "page": "county.html?scene=fujian_tulou",
  "key": "fujian_tulou",
  "scene_id": "fujian_tulou"
 },
 "sources": [
  {
   "id": "minxi_tulou",
   "title": "《福建通志》与客家土楼",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "陈寿祺",
   "period": "明清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "minxi",
   "name": "闽西",
   "type": "region",
   "modern": "今福建西部",
   "note": "客家聚居山区",
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 117.0,
   "lat": 25.5,
   "geo_note": "今福建西部代表点",
   "elev": 920
  }
 ],
 "persons": [
  {
   "id": "FUJ__p01",
   "name": "客家先民",
   "role": "南徙族群",
   "note": "明清之际迁闽西",
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "FUJ__p02",
   "name": "土楼族长",
   "role": "聚族首领",
   "note": "组织夯筑与防御",
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "FUJ_001",
   "subject": "event:ev_fujian_tulou_01",
   "predicate": "迁徙方向",
   "value_text": "客家南徙至闽西",
   "time": {
    "era_text": "明清之际",
    "start": "1368"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "客家南徙闽西",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "客家南徙闽西",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_002",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑方式",
   "value_text": "夯土为垣，环楼而居",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "夯土为垣，环楼而居",
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
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夯土为垣，环楼而居",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_003",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑形制",
   "value_text": "楼分圆方，墙厚丈许",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "楼分圆方，墙厚丈许",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "楼分圆方，墙厚丈许",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_004",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "防御功能",
   "value_text": "外闭内通，御寇自守",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "外闭内通，御寇自守",
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
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "外闭内通，御寇自守",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_005",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "聚族规模",
   "value_text": "大者容数百口",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "大者容数百口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大者容数百口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_006",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "社会结构",
   "value_text": "聚族而居，层楹叠套",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "聚族于斯",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "聚族于斯",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_007",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑评价",
   "value_text": "闽西山居之奇制",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "闽西山居之奇制也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闽西山居之奇制也",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_008",
   "subject": "event:ev_fujian_tulou_01",
   "predicate": "迁徙原因",
   "value_text": "明清之际社会动荡",
   "time": {
    "era_text": "明清之际",
    "start": "1368"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "明清之际",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "推测",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明清之际",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_009",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建造技术",
   "value_text": "夯土版筑技术成熟",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "夯土为垣",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "推断",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "夯土为垣",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_010",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "防御对象",
   "value_text": "御寇自守，防匪患",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "御寇自守",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "推断",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "御寇自守",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_011",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑类型",
   "value_text": "圆楼方楼并存",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "楼分圆方",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "楼分圆方",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_012",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑层数",
   "value_text": "层楹叠套，多层结构",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "层楹叠套",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "层楹叠套",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_013",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑功能",
   "value_text": "兼具居住防御功能",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "外闭内通",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "外闭内通",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_014",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑规模",
   "value_text": "容数百口，规模宏大",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "大者容数百口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    4
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "大者容数百口",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_015",
   "subject": "event:ev_fujian_tulou_02",
   "predicate": "建筑分布",
   "value_text": "闽西山区依山而建",
   "time": {
    "era_text": "明清之际",
    "start": "1644"
   },
   "place": "minxi",
   "source": "minxi_tulou",
   "quote": "依山结寨",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "依山结寨",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_fujian_tulou_01",
   "subject": "event:ev_fujian_tulou_01",
   "year": 1368,
   "era": "明初",
   "title": "客家南徙闽西",
   "kind": "其他",
   "text": "客家南徙，依山结寨",
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_fujian_tulou_02",
   "subject": "event:ev_fujian_tulou_02",
   "year": 1644,
   "era": "明清之际",
   "title": "土楼兴建",
   "kind": "建置",
   "text": "夯土为垣，环楼而居",
   "_source_idx": 0,
   "_source_name": "《福建通志》与客家土楼",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
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
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.0,
        24.5
       ],
       [
        116.0,
        26.5
       ],
       [
        118.0,
        26.5
       ],
       [
        118.0,
        24.5
       ],
       [
        116.0,
        24.5
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
         118.0,
         24.5
        ],
        [
         118.0,
         26.5
        ],
        [
         116.602,
         26.5
        ],
        [
         116.611,
         26.477
        ],
        [
         116.638,
         26.477
        ],
        [
         116.608,
         26.43
        ],
        [
         116.601,
         26.373
        ],
        [
         116.553,
         26.365
        ],
        [
         116.553,
         26.4
        ],
        [
         116.52,
         26.41
        ],
        [
         116.5,
         26.362
        ],
        [
         116.459,
         26.345
        ],
        [
         116.437,
         26.308
        ],
        [
         116.413,
         26.298
        ],
        [
         116.385,
         26.238
        ],
        [
         116.4,
         26.203
        ],
        [
         116.392,
         26.171
        ],
        [
         116.436,
         26.16
        ],
        [
         116.476,
         26.173
        ],
        [
         116.489,
         26.114
        ],
        [
         116.385,
         26.031
        ],
        [
         116.36,
         25.992
        ],
        [
         116.37,
         25.963
        ],
        [
         116.326,
         25.957
        ],
        [
         116.303,
         25.924
        ],
        [
         116.258,
         25.903
        ],
        [
         116.225,
         25.909
        ],
        [
         116.178,
         25.894
        ],
        [
         116.132,
         25.86
        ],
        [
         116.132,
         25.824
        ],
        [
         116.181,
         25.779
        ],
        [
         116.13,
         25.759
        ],
        [
         116.107,
         25.701
        ],
        [
         116.067,
         25.704
        ],
        [
         116.069,
         25.646
        ],
        [
         116.042,
         25.624
        ],
        [
         116.063,
         25.563
        ],
        [
         116.04,
         25.548
        ],
        [
         116.037,
         25.515
        ],
        [
         116.005,
         25.49
        ],
        [
         116.023,
         25.436
        ],
        [
         116.0,
         25.389
        ],
        [
         116.0,
         25.349
        ],
        [
         116.008,
         25.319
        ],
        [
         116.0,
         25.308
        ],
        [
         116.0,
         24.903
        ],
        [
         116.015,
         24.906
        ],
        [
         116.068,
         24.85
        ],
        [
         116.153,
         24.847
        ],
        [
         116.192,
         24.877
        ],
        [
         116.221,
         24.83
        ],
        [
         116.251,
         24.825
        ],
        [
         116.244,
         24.794
        ],
        [
         116.297,
         24.802
        ],
        [
         116.346,
         24.829
        ],
        [
         116.364,
         24.871
        ],
        [
         116.395,
         24.878
        ],
        [
         116.418,
         24.841
        ],
        [
         116.382,
         24.825
        ],
        [
         116.375,
         24.804
        ],
        [
         116.419,
         24.767
        ],
        [
         116.416,
         24.744
        ],
        [
         116.446,
         24.714
        ],
        [
         116.485,
         24.72
        ],
        [
         116.518,
         24.652
        ],
        [
         116.507,
         24.621
        ],
        [
         116.53,
         24.605
        ],
        [
         116.571,
         24.622
        ],
        [
         116.601,
         24.654
        ],
        [
         116.623,
         24.642
        ],
        [
         116.667,
         24.659
        ],
        [
         116.778,
         24.679
        ],
        [
         116.815,
         24.655
        ],
        [
         116.761,
         24.583
        ],
        [
         116.759,
         24.546
        ],
        [
         116.797,
         24.502
        ],
        [
         116.81,
         24.5
        ],
        [
         118.0,
         24.5
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
         116.0,
         26.5
        ],
        [
         116.0,
         25.308
        ],
        [
         116.008,
         25.319
        ],
        [
         116.0,
         25.349
        ],
        [
         116.0,
         25.389
        ],
        [
         116.023,
         25.436
        ],
        [
         116.005,
         25.49
        ],
        [
         116.037,
         25.515
        ],
        [
         116.04,
         25.548
        ],
        [
         116.063,
         25.563
        ],
        [
         116.042,
         25.624
        ],
        [
         116.069,
         25.646
        ],
        [
         116.067,
         25.704
        ],
        [
         116.107,
         25.701
        ],
        [
         116.13,
         25.759
        ],
        [
         116.181,
         25.779
        ],
        [
         116.132,
         25.824
        ],
        [
         116.132,
         25.86
        ],
        [
         116.178,
         25.894
        ],
        [
         116.225,
         25.909
        ],
        [
         116.258,
         25.903
        ],
        [
         116.303,
         25.924
        ],
        [
         116.326,
         25.957
        ],
        [
         116.37,
         25.963
        ],
        [
         116.36,
         25.992
        ],
        [
         116.385,
         26.031
        ],
        [
         116.489,
         26.114
        ],
        [
         116.476,
         26.173
        ],
        [
         116.436,
         26.16
        ],
        [
         116.392,
         26.171
        ],
        [
         116.4,
         26.203
        ],
        [
         116.385,
         26.238
        ],
        [
         116.413,
         26.298
        ],
        [
         116.437,
         26.308
        ],
        [
         116.459,
         26.345
        ],
        [
         116.5,
         26.362
        ],
        [
         116.52,
         26.41
        ],
        [
         116.553,
         26.4
        ],
        [
         116.553,
         26.365
        ],
        [
         116.601,
         26.373
        ],
        [
         116.608,
         26.43
        ],
        [
         116.638,
         26.477
        ],
        [
         116.611,
         26.477
        ],
        [
         116.602,
         26.5
        ],
        [
         116.0,
         26.5
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.0,
         24.5
        ],
        [
         116.81,
         24.5
        ],
        [
         116.797,
         24.502
        ],
        [
         116.759,
         24.546
        ],
        [
         116.761,
         24.583
        ],
        [
         116.815,
         24.655
        ],
        [
         116.778,
         24.679
        ],
        [
         116.667,
         24.659
        ],
        [
         116.623,
         24.642
        ],
        [
         116.601,
         24.654
        ],
        [
         116.571,
         24.622
        ],
        [
         116.53,
         24.605
        ],
        [
         116.507,
         24.621
        ],
        [
         116.518,
         24.652
        ],
        [
         116.485,
         24.72
        ],
        [
         116.446,
         24.714
        ],
        [
         116.416,
         24.744
        ],
        [
         116.419,
         24.767
        ],
        [
         116.375,
         24.804
        ],
        [
         116.382,
         24.825
        ],
        [
         116.418,
         24.841
        ],
        [
         116.395,
         24.878
        ],
        [
         116.364,
         24.871
        ],
        [
         116.346,
         24.829
        ],
        [
         116.297,
         24.802
        ],
        [
         116.244,
         24.794
        ],
        [
         116.251,
         24.825
        ],
        [
         116.221,
         24.83
        ],
        [
         116.192,
         24.877
        ],
        [
         116.153,
         24.847
        ],
        [
         116.068,
         24.85
        ],
        [
         116.015,
         24.906
        ],
        [
         116.0,
         24.903
        ],
        [
         116.0,
         24.5
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   116.0,
   24.5,
   118.0,
   26.5
  ]
 }
};
