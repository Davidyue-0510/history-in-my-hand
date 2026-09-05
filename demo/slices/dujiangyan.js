// 本文件由 tools/build.py 自动生成（切片 dujiangyan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dujiangyan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dujiangyan"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "都江堰",
  "dossier_label": "都江堰",
  "subtitle": "约公元前256 · 李冰筑",
  "primary_place": "dujiangyan",
  "dossier_event": "event:dj_256",
  "terrain_grid": "china_coarse",
  "lead": "秦昭襄王时蜀守李冰凿离堆、分岷江为内江外江，鱼嘴分水、飞沙堰泄洪、宝瓶口引水，成都平原「水旱从人，不知饥馑」。",
  "parties_note": "都江堰年代据《华阳国志》《水经注》综合，李冰父子身世细节史载有限。",
  "subject_names": {
   "person:libing": "李冰",
   "person:wengong": "文翁"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "sui_yuan",
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
    "note": "都江堰：朝堂凝聚力——李冰“深淘滩，低作堰”，分水鱼嘴+飞沙堰+宝瓶口三体工程"
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
    "note": "都江堰：后勤物力——旱溉潦泄"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "都江堰：人口动员——成都平原“水旱从人，不知饥馑”，沃野千里为“天府”"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "都江堰：地缘战略——旱溉潦泄"
   }
  },
  "province": "sichuan",
  "page": "county.html?scene=dujiangyan",
  "key": "dujiangyan",
  "scene_id": "dujiangyan",
  "vocab_pack": "inline:dujiangyan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "都江堰·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "都江堰年代据《华阳国志》《水经注》综合，李冰父子身世细节史载有限。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "dujiangyan",
   "name": "都江堰",
   "lon": 103.62,
   "lat": 31.0,
   "note": "今四川都江堰市（原灌县）",
   "elev": 848
  },
  {
   "id": "chengdu",
   "name": "成都",
   "lon": 104.07,
   "lat": 30.67,
   "note": "受益的成都平原",
   "elev": 490
  },
  {
   "id": "minjiang",
   "name": "岷江",
   "lon": 103.6,
   "lat": 31.2,
   "note": "被分流的大江",
   "elev": 1575
  }
 ],
 "persons": [
  {
   "id": "libing",
   "name": "李冰",
   "side": "秦蜀守",
   "influence": 1
  },
  {
   "id": "wengong",
   "name": "文翁",
   "side": "西汉蜀守",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dj_256",
   "subject": "event:dj_256",
   "predicate": "事件",
   "value_text": "蜀守李冰凿离堆、作堋江鱼嘴分岷为内外江，无坝引水，成都平原始免水患并获灌溉。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -256,
    "end": -256,
    "era_text": "秦昭襄王后期"
   },
   "place": "dujiangyan",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dj_168",
   "subject": "event:dj_168",
   "predicate": "事件",
   "value_text": "蜀郡守文翁踵李冰迹，穿湔江、增灌田，都江堰体系渐成。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -168,
    "end": -168,
    "era_text": "西汉景帝"
   },
   "place": "chengdu",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dj_today",
   "subject": "event:dj_today",
   "predicate": "事件",
   "value_text": "2000 余年沿用至今，2000 年列入世界文化遗产，仍灌溉成都平原上千万亩。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 2000,
    "end": 2000,
    "era_text": "至今"
   },
   "place": "dujiangyan",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M71",
   "subject": "event:dj_256",
   "predicate": "筑成",
   "value_text": "蜀守李冰筑都江堰",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "公元前256年蜀守李冰筑都江堰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "原文无年号，仅记公元前256年，按原文表述保留",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M71",
   "subject": "event:dj_256",
   "predicate": "分水",
   "value_text": "分岷江为内外江",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "分岷江为内外江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M70",
   "subject": "event:dj_256",
   "predicate": "功能",
   "value_text": "旱溉潦泄",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "旱溉潦泄",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M72",
   "subject": "place:chengdu",
   "predicate": "受益",
   "value_text": "成都平原沃野千里",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "chengdu",
   "source": "synthesis",
   "quote": "成都平原沃野千里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M68",
   "subject": "event:dj_256",
   "predicate": "地位",
   "value_text": "为天府之源",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "为天府之源",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M62",
   "subject": "person:libing",
   "predicate": "主持修建",
   "value_text": "蜀守李冰筑都江堰",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "蜀守李冰筑都江堰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "李冰为蜀守，主持修建",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M64",
   "subject": "place:minjiang",
   "predicate": "被分",
   "value_text": "分岷江为内外江",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "minjiang",
   "source": "synthesis",
   "quote": "分岷江为内外江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M47",
   "subject": "event:dj_256",
   "predicate": "影响范围",
   "value_text": "成都平原沃野千里",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "chengdu",
   "source": "synthesis",
   "quote": "成都平原沃野千里",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "原文未明说影响范围，但'沃野千里'可合理推出",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M42",
   "subject": "event:dj_256",
   "predicate": "历史评价",
   "value_text": "为天府之源",
   "time": {
    "era_text": "公元前256年",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": "dujiangyan",
   "source": "synthesis",
   "quote": "为天府之源",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "原文为评价性表述，非直接事实",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DUJIANGYANG01",
   "subject": "event:dj_256",
   "predicate": "史料缺环",
   "value_text": "此工程的营造工期、用工与耗费，历代记载繁简不一，民间传说更增益其辞，细节存在缺口。",
   "time": {
    "era_text": "秦昭襄王",
    "start": "-256-01-01",
    "end": "-256-12-31",
    "gregorian_year": -256
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "engineering",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DUJIANGYAN_THK1",
   "subject": "event:dj_256",
   "predicate": "水利工程",
   "value_text": "李冰“深淘滩，低作堰”，分水鱼嘴+飞沙堰+宝瓶口三体工程",
   "time": {
    "start": -256,
    "end": -256,
    "era_text": "秦昭襄王后期"
   },
   "place": "",
   "source": "synthesis",
   "quote": "深淘滩低作堰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "水利工程",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DUJIANGYAN_THK2",
   "subject": "event:dj_256",
   "predicate": "农业社会",
   "value_text": "成都平原“水旱从人，不知饥馑”，沃野千里为“天府”",
   "time": {
    "start": -256,
    "end": -256,
    "era_text": "秦昭襄王后期"
   },
   "place": "",
   "source": "synthesis",
   "quote": "水旱从人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "农业社会",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "DUJIANGYAN_THK3",
   "subject": "event:dj_256",
   "predicate": "工程思想",
   "value_text": "“乘势利导，因时制宜”的无坝引水生态智慧，沿用两千年",
   "time": {
    "start": -256,
    "end": -256,
    "era_text": "秦昭襄王后期"
   },
   "place": "",
   "source": "synthesis",
   "quote": "乘势利导",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "工程思想",
   "dims": [
    5
   ],
   "dim_source": "inferred",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DUJIANGYANG01"
 ],
 "events": [
  {
   "id": "ev_dj_256",
   "subject": "event:dj_256",
   "year": -256,
   "era": "秦昭襄王后期",
   "title": "李冰筑都江堰",
   "kind": "工程",
   "text": "蜀守李冰凿离堆、作堋江鱼嘴分岷为内外江，无坝引水，成都平原始免水患并获灌溉。",
   "place": "dujiangyan"
  },
  {
   "id": "ev_dj_168",
   "subject": "event:dj_168",
   "year": -168,
   "era": "西汉景帝",
   "title": "文翁续修·灌区扩",
   "kind": "工程",
   "text": "蜀郡守文翁踵李冰迹，穿湔江、增灌田，都江堰体系渐成。",
   "place": "chengdu"
  },
  {
   "id": "ev_dj_today",
   "subject": "event:dj_today",
   "year": 2000,
   "era": "至今",
   "title": "列入世遗·仍灌田",
   "kind": "工程",
   "text": "2000 余年沿用至今，2000 年列入世界文化遗产，仍灌溉成都平原上千万亩。",
   "place": "dujiangyan"
  }
 ],
 "edges": [],
 "control": [],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
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
        102.6,
        29.67
       ],
       [
        102.6,
        32.2
       ],
       [
        105.07,
        32.2
       ],
       [
        105.07,
        29.67
       ],
       [
        102.6,
        29.67
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
         102.6,
         32.2
        ],
        [
         102.6,
         29.67
        ],
        [
         105.07,
         29.67
        ],
        [
         105.07,
         32.2
        ],
        [
         102.6,
         32.2
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
   102.6,
   29.67,
   105.07,
   32.2
  ]
 }
};
