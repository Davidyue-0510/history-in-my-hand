// 本文件由 tools/build.py 自动生成（切片 shanxi_sanjiafenjin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanxi_sanjiafenjin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanxi_sanjiafenjin"] = {
 "meta": {
  "kind": "dynasty",
  "region": "huabei",
  "province": "shanxi",
  "title": "三家分晋·战国开端（春秋末）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "jinyang",
  "dossier_event": "event:ev_shanxi_sanjiafenjin_01",
  "vocab_pack": "inline:shanxi_sanjiafenjin",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "warring_states",
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
    "note": "三家分晋·战国开端（春秋末）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "三家分晋·战国开端（春秋末）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "三家分晋·战国开端（春秋末）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "三家分晋·战国开端（春秋末）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   3,
   6
  ],
  "page": "county.html?scene=shanxi_sanjiafenjin",
  "key": "shanxi_sanjiafenjin",
  "scene_id": "shanxi_sanjiafenjin"
 },
 "sources": [
  {
   "id": "zhanguoce_sfj",
   "title": "《战国策》与三家分晋",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "刘向",
   "period": "战国",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "jinyang",
   "name": "晋阳",
   "type": "city",
   "modern": "今山西省太原市",
   "note": "赵氏所居，晋阳之战地",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.55,
   "lat": 37.87,
   "geo_note": "今山西太原",
   "elev": 807
  },
  {
   "id": "san_jin",
   "name": "三晋",
   "type": "region",
   "modern": "今山西省及周边",
   "note": "韩赵魏三家之地",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "智伯瑶",
   "role": "晋国正卿",
   "note": "专权索地，为三家所灭",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p02",
   "name": "韩虔",
   "role": "韩氏家主",
   "note": "受命为诸侯",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p03",
   "name": "赵籍",
   "role": "赵氏家主",
   "note": "受命为诸侯",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p04",
   "name": "魏斯",
   "role": "魏氏家主",
   "note": "受命为诸侯",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p05",
   "name": "周威烈王",
   "role": "周天子",
   "note": "命三家为诸侯",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanxi_sanjiafenjin_01",
   "predicate": "战役过程",
   "value_text": "智伯引水灌晋阳城",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "jinyang",
   "source": "zhanguoce_sfj",
   "quote": "智伯瑶专权，索地于韩魏赵",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "智伯瑶专权，索地于韩魏赵",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shanxi_sanjiafenjin_02",
   "predicate": "战役结果",
   "value_text": "三家反灭智氏",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "卒为三家所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "卒为三家所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "政治格局",
   "value_text": "周王命三家为诸侯",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "命韩虔、赵籍、魏斯为诸侯",
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
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "命韩虔、赵籍、魏斯为诸侯",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "历史分期",
   "value_text": "战国之局遂成",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "战国之局遂成",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家以此为战国开端",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "战国之局遂成",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "place:san_jin",
   "predicate": "地理形势",
   "value_text": "表里山河，中原屏藩",
   "time": {
    "era_text": "春秋末",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "表里山河，为中原屏藩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "表里山河，为中原屏藩",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "person:SHA__p01",
   "predicate": "政治行为",
   "value_text": "索地于韩魏赵",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "索地于韩魏赵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:智伯瑶 → SHA__p01 (name_match)",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "索地于韩魏赵",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "制度变革",
   "value_text": "晋国分裂为三国",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "晋分为三",
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
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "晋分为三",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shanxi_sanjiafenjin_01",
   "predicate": "战役损失",
   "value_text": "晋阳城被水淹",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "jinyang",
   "source": "zhanguoce_sfj",
   "quote": "引水灌城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "引水灌城",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shanxi_sanjiafenjin_02",
   "predicate": "战役损失",
   "value_text": "智氏被灭族",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "卒为三家所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "卒为三家所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "政治合法性",
   "value_text": "周王承认三家地位",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "命韩虔、赵籍、魏斯为诸侯",
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
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "命韩虔、赵籍、魏斯为诸侯",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "历史影响",
   "value_text": "战国七雄格局开启",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "战国之局遂成",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家共识",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "战国之局遂成",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shanxi_sanjiafenjin_01",
   "predicate": "战役原因",
   "value_text": "智伯索地引发冲突",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "索地于韩魏赵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "索地于韩魏赵",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "event:ev_shanxi_sanjiafenjin_02",
   "predicate": "联盟关系",
   "value_text": "韩赵魏联合反智",
   "time": {
    "era_text": "晋出公二十二年",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "卒为三家所灭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "卒为三家所灭",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "晋室衰微",
   "value_text": "晋室衰微，名存实亡",
   "time": {
    "era_text": "春秋末",
    "start": "-453"
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "晋室衰微",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "晋室衰微",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "predicate": "史料缺失",
   "value_text": "三家分晋细节记载不详",
   "time": {
    "era_text": "周威烈王二十三年",
    "start": "-403-01-01",
    "end": "-403-12-31",
    "gregorian_year": -403
   },
   "place": "san_jin",
   "source": "zhanguoce_sfj",
   "quote": "史载简略",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "原始史料简略",
   "dims": [
    6
   ],
   "lead": {
    "where": "san_jin",
    "skills": [
     "史料考据",
     "考古学"
    ],
    "accept": "需更多出土文献佐证"
   },
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史载简略",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_015"
 ],
 "events": [
  {
   "id": "ev_shanxi_sanjiafenjin_01",
   "subject": "event:ev_shanxi_sanjiafenjin_01",
   "year": -453,
   "era": "晋出公二十二年",
   "title": "晋阳之战",
   "kind": "战事",
   "text": "智伯围晋阳，引水灌城",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanxi_sanjiafenjin_02",
   "subject": "event:ev_shanxi_sanjiafenjin_02",
   "year": -453,
   "era": "晋出公二十二年",
   "title": "三家灭智",
   "kind": "战事",
   "text": "韩赵魏反戈，灭智氏",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shanxi_sanjiafenjin_03",
   "subject": "event:ev_shanxi_sanjiafenjin_03",
   "year": -403,
   "era": "周威烈王二十三年",
   "title": "三家分晋",
   "kind": "行政",
   "text": "周王命三家为诸侯",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "jinyang",
   "to": "san_jin",
   "type": "battle",
   "label": "晋阳之战后三家分晋",
   "_source_idx": 0,
   "_source_name": "《战国策》与三家分晋",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "jinyang",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "jinyang",
   "name": "晋阳",
   "lon": 112.55,
   "lat": 37.87,
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
        111.55,
        36.87
       ],
       [
        111.55,
        38.87
       ],
       [
        113.55,
        38.87
       ],
       [
        113.55,
        36.87
       ],
       [
        111.55,
        36.87
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
         113.55,
         36.87
        ],
        [
         113.55,
         38.508
        ],
        [
         113.546,
         38.493
        ],
        [
         113.55,
         38.49
        ],
        [
         113.55,
         38.429
        ],
        [
         113.538,
         38.418
        ],
        [
         113.525,
         38.383
        ],
        [
         113.55,
         38.353
        ],
        [
         113.55,
         38.301
        ],
        [
         113.545,
         38.271
        ],
        [
         113.55,
         38.264
        ],
        [
         113.55,
         36.87
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
         111.55,
         38.87
        ],
        [
         111.55,
         36.87
        ],
        [
         113.55,
         36.87
        ],
        [
         113.55,
         38.264
        ],
        [
         113.545,
         38.271
        ],
        [
         113.55,
         38.301
        ],
        [
         113.55,
         38.353
        ],
        [
         113.525,
         38.383
        ],
        [
         113.538,
         38.418
        ],
        [
         113.55,
         38.429
        ],
        [
         113.55,
         38.49
        ],
        [
         113.546,
         38.493
        ],
        [
         113.55,
         38.508
        ],
        [
         113.55,
         38.87
        ],
        [
         111.55,
         38.87
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   111.55,
   36.87,
   113.55,
   38.87
  ]
 }
};
