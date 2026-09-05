// 本文件由 tools/build.py 自动生成（切片 chibi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chibi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chibi"] = {
 "meta": {
  "kind": "battle",
  "region": "three_kingdoms",
  "title": "赤壁之战",
  "dossier_label": "赤壁之战",
  "subtitle": "汉献帝建安十三年（208）· 孙刘 vs 曹",
  "primary_place": "chibi",
  "dossier_event": "event:cb_cao",
  "terrain_grid": "china_coarse",
  "lead": "周瑜黄盖火攻，赤壁大破曹操水师，操北还，三分始定。",
  "parties_note": "吴方叙周瑜火攻，魏方讳败北。",
  "subject_names": {
   "person:zhouyu": "周瑜",
   "person:huanggai": "黄盖",
   "person:caocao": "曹操",
   "person:zhugeliang": "诸葛亮"
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
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
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）"
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
    "note": "技术↔生产力；赋税/漕运→后勤半径（R7）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；流民→动员潜力"
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
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "province": null,
  "page": "chibi.html",
  "key": "chibi",
  "scene_id": "chibi",
  "vocab_pack": "inline:chibi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "赤壁之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "吴方叙周瑜火攻，魏方讳败北。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "chibi",
   "name": "赤壁",
   "lon": 113.92,
   "lat": 29.72,
   "note": "今湖北赤壁市西北",
   "elev": 174
  },
  {
   "id": "wulin",
   "name": "乌林",
   "lon": 113.9,
   "lat": 29.85,
   "note": "曹军屯处，江北",
   "elev": 35
  },
  {
   "id": "jiangling",
   "name": "江陵",
   "lon": 112.24,
   "lat": 30.35,
   "note": "曹军基地",
   "elev": 28
  },
  {
   "id": "xiaokou",
   "name": "夏口",
   "lon": 114.3,
   "lat": 30.59,
   "note": "刘备屯",
   "elev": 40
  },
  {
   "id": "chaisang",
   "name": "柴桑",
   "lon": 115.99,
   "lat": 29.71,
   "note": "孙权治，周瑜出兵",
   "elev": 20
  }
 ],
 "persons": [
  {
   "id": "zhouyu",
   "name": "周瑜",
   "side": "吴",
   "influence": 2
  },
  {
   "id": "huanggai",
   "name": "黄盖",
   "side": "吴",
   "influence": 2
  },
  {
   "id": "caocao",
   "name": "曹操",
   "side": "曹",
   "influence": 0
  },
  {
   "id": "zhugeliang",
   "name": "诸葛亮",
   "side": "蜀",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cb_cao",
   "subject": "event:cb_cao",
   "predicate": "战事",
   "value_text": "操取荆州，顺流东下。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 208,
    "end": 208,
    "era_text": "建安十三年"
   },
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cb_lk",
   "subject": "event:cb_lk",
   "predicate": "战事",
   "value_text": "诸葛亮说权，孙刘联兵拒曹。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 208,
    "end": 208,
    "era_text": "建安十三年"
   },
   "place": "chibi",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cb_jz",
   "subject": "event:cb_jz",
   "predicate": "战事",
   "value_text": "黄盖诈降火攻，曹军大溃。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 208,
    "end": 208,
    "era_text": "建安十三年冬"
   },
   "place": "chibi",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M7",
   "subject": "event:cb_cao",
   "predicate": "爆发",
   "value_text": "建安十三年曹操取荆州，顺江东下",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "jiangling",
   "source": "synthesis",
   "quote": "建安十三年曹操取荆州，顺江东下",
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
   "id": "SX002_M7",
   "subject": "event:cb_cao",
   "predicate": "联盟",
   "value_text": "孙权刘备联盟，周瑜为左都督、诸葛亮参谋",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "孙权刘备联盟，周瑜为左都督、诸葛亮参谋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M6",
   "subject": "event:cb_cao",
   "predicate": "驻军",
   "value_text": "曹军驻乌林，联军据赤壁",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "synthesis",
   "quote": "曹军驻乌林，联军据赤壁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
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
   "id": "SX004_M7",
   "subject": "event:cb_cao",
   "predicate": "火攻",
   "value_text": "黄盖诈降，乘东南风火攻曹舰",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "周瑜部将黄盖诈降，乘东南风火攻曹舰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M7",
   "subject": "event:cb_cao",
   "predicate": "延烧",
   "value_text": "延烧乌林岸营",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "wulin",
   "source": "synthesis",
   "quote": "延烧乌林岸营",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
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
   "id": "SX006_M7",
   "subject": "event:cb_cao",
   "predicate": "败退",
   "value_text": "曹军大败，曹操自华容道退江陵北还",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "jiangling",
   "source": "synthesis",
   "quote": "曹军大败，曹操自华容道退江陵北还",
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
   "id": "SX007_M6",
   "subject": "event:cb_cao",
   "predicate": "影响",
   "value_text": "三分雏形始现",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "",
   "source": "synthesis",
   "quote": "三分雏形始现",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文未明说，属合理推断",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M7",
   "subject": "person:huanggai",
   "predicate": "诈降",
   "value_text": "黄盖诈降",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "周瑜部将黄盖诈降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M7",
   "subject": "person:zhouyu",
   "predicate": "指挥",
   "value_text": "周瑜为左都督",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "周瑜为左都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M7",
   "subject": "person:zhugeliang",
   "predicate": "参谋",
   "value_text": "诸葛亮参谋",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "诸葛亮参谋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "CHIBIG01",
   "subject": "event:cb_jz",
   "predicate": "叙事缺环",
   "value_text": "此战纪年与细节诸书互歧，现存叙述多据后世胜者所修史书，敌方视角的兵力、伤亡与动机常缺。",
   "time": {
    "era_text": "建安十三年",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补败方视角与纪年异文"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002",
   "subject": "person:zhouyu",
   "predicate": "任命",
   "value_text": "前部大督",
   "time": {
    "era_text": "建安十三年冬",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "孙权命周瑜为前部大督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003",
   "subject": "army:wu_total",
   "predicate": "兵力",
   "value_text": "吴军三万",
   "time": {
    "era_text": "建安十三年冬",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "率吴军三万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "army:wu_total 未在白名单，改用 note 说明",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004",
   "subject": "army:liubei_total",
   "predicate": "兵力",
   "value_text": "刘备军二万",
   "time": {
    "era_text": "建安十三年冬",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "与刘备军二万会于樊口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "army:liubei_total 未在白名单，改用 note 说明",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008",
   "subject": "person:huanggai",
   "predicate": "火攻",
   "value_text": "诈降火攻之策",
   "time": {
    "era_text": "建安十三年冬",
    "start": "208-01-01",
    "end": "208-12-31",
    "gregorian_year": 208
   },
   "place": "chibi",
   "source": "synthesis",
   "quote": "周瑜用黄盖诈降火攻之策",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "GAP_EXPAND",
   "subject": "event:cb_jz",
   "predicate": "史料缺环",
   "value_text": "此役孙刘联军与曹方兵力、火攻具体部署与伤亡数字多据后世追述，三方记载互有出入，相关数字与因果链存在缺口。",
   "time": {
    "era_text": "建安十三年",
    "gregorian_year": 208,
    "start": "208-01-01",
    "end": "208-12-31"
   },
   "place": "",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "多源纪年需对读",
   "lead": {
    "where": "《三国志》魏蜀吴三方本纪/传记对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补曹方视角与纪年异文"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CHIBIG01",
  "GAP_EXPAND"
 ],
 "events": [
  {
   "id": "ev_cb_cao",
   "subject": "event:cb_cao",
   "year": 208,
   "era": "建安十三年",
   "title": "曹操南下",
   "kind": "战事",
   "text": "操取荆州，顺流东下。"
  },
  {
   "id": "ev_cb_lk",
   "subject": "event:cb_lk",
   "year": 208,
   "era": "建安十三年",
   "title": "孙刘结盟",
   "kind": "战事",
   "text": "诸葛亮说权，孙刘联兵拒曹。",
   "place": "chibi"
  },
  {
   "id": "ev_cb_jz",
   "subject": "event:cb_jz",
   "year": 208,
   "era": "建安十三年冬",
   "title": "赤壁火攻",
   "kind": "战事",
   "text": "黄盖诈降火攻，曹军大溃。",
   "place": "chibi"
  }
 ],
 "engagements": [
  {
   "id": "eng_cb_main",
   "name": "赤壁火攻",
   "at": "208-12",
   "era": "建安十三年冬",
   "place": "chibi",
   "winner": "a",
   "outcome": "黄盖以艨艟火攻曹连锁战舰，风猛火烈，曹军岸营尽焚，退走江陵。",
   "subject": "event:cb_jz",
   "sides": [
    {
     "side": "a",
     "commander": "周瑜/黄盖",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 120,
     "posture": "火攻",
     "commit_basis": "联吴水军顺风纵火，击其连锁之舰。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "曹操",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 160,
     "posture": "不习水",
     "commit_basis": "北兵不服水土，舟连为疫所苦。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_cb_wu",
   "name": "孙刘西进",
   "side": "a",
   "nodes": [
    {
     "place": "chaisang",
     "at": "208-11",
     "label": "周瑜率兵"
    },
    {
     "place": "xiaokou",
     "at": "208-11",
     "label": "会刘备"
    },
    {
     "place": "chibi",
     "at": "208-12",
     "label": "赤壁列阵"
    }
   ],
   "outcome": {
    "at": "208-12",
    "type": "victory",
    "text": "赤壁火攻破曹"
   }
  },
  {
   "id": "rt_cb_cao",
   "name": "曹军东下",
   "side": "b",
   "nodes": [
    {
     "place": "jiangling",
     "at": "208-09",
     "label": "操据荆州"
    },
    {
     "place": "wulin",
     "at": "208-11",
     "label": "屯乌林"
    },
    {
     "place": "chibi",
     "at": "208-12",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "208-11",
    "type": "defeat",
    "text": "曹军下江陵遇火攻败北"
   }
  }
 ],
 "timeline": [
  {
   "at": "208-09",
   "era": "建安十三年",
   "label": "曹操取荆州",
   "key": false
  },
  {
   "at": "208-11",
   "era": "十一月",
   "label": "孙刘结盟",
   "key": false
  },
  {
   "at": "208-12",
   "era": "冬",
   "label": "赤壁火攻·曹北还",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "208-12",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "208-12",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，胜败方损失数字多为估算，界面应视为待核实。"
 },
 "fatigue_weight": {
  "fresh": 1.0,
  "marching": 0.85,
  "exhausted": 0.7
 },
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
   "孙刘联军",
   "曹军",
   "综合史料"
  ],
  "party_bucket": {
   "孙刘联军": "孙刘联军",
   "曹军": "曹军",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "a": "#c0392b",
   "b": "#2b6cb0",
   "综合史料": "#7f8c8d"
  },
  "legend": {
   "battle": [
    {
     "key": "a",
     "label": "孙刘联军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "曹军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未接战/不分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "孙刘联军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "曹军行军",
     "color": "#2b6cb0"
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
        111.24,
        28.71
       ],
       [
        111.24,
        31.59
       ],
       [
        116.99,
        31.59
       ],
       [
        116.99,
        28.71
       ],
       [
        111.24,
        28.71
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
         115.443,
         31.59
        ],
        [
         115.44,
         31.588
        ],
        [
         115.416,
         31.526
        ],
        [
         115.371,
         31.496
        ],
        [
         115.39,
         31.45
        ],
        [
         115.374,
         31.406
        ],
        [
         115.393,
         31.39
        ],
        [
         115.372,
         31.349
        ],
        [
         115.407,
         31.338
        ],
        [
         115.444,
         31.344
        ],
        [
         115.473,
         31.265
        ],
        [
         115.508,
         31.268
        ],
        [
         115.54,
         31.232
        ],
        [
         115.54,
         31.195
        ],
        [
         115.586,
         31.144
        ],
        [
         115.604,
         31.174
        ],
        [
         115.655,
         31.211
        ],
        [
         115.701,
         31.201
        ],
        [
         115.779,
         31.112
        ],
        [
         115.798,
         31.128
        ],
        [
         115.838,
         31.127
        ],
        [
         115.867,
         31.148
        ],
        [
         115.888,
         31.109
        ],
        [
         115.94,
         31.072
        ],
        [
         115.939,
         31.047
        ],
        [
         116.006,
         31.035
        ],
        [
         116.015,
         31.012
        ],
        [
         116.059,
         31.013
        ],
        [
         116.072,
         30.957
        ],
        [
         116.04,
         30.958
        ],
        [
         115.976,
         30.932
        ],
        [
         115.933,
         30.89
        ],
        [
         115.865,
         30.864
        ],
        [
         115.849,
         30.828
        ],
        [
         115.864,
         30.816
        ],
        [
         115.851,
         30.757
        ],
        [
         115.783,
         30.752
        ],
        [
         115.763,
         30.685
        ],
        [
         115.814,
         30.637
        ],
        [
         115.819,
         30.598
        ],
        [
         115.849,
         30.602
        ],
        [
         115.877,
         30.582
        ],
        [
         115.888,
         30.543
        ],
        [
         115.91,
         30.519
        ],
        [
         115.895,
         30.453
        ],
        [
         115.921,
         30.416
        ],
        [
         115.885,
         30.38
        ],
        [
         115.915,
         30.338
        ],
        [
         115.903,
         30.314
        ],
        [
         115.986,
         30.291
        ],
        [
         115.998,
         30.253
        ],
        [
         116.066,
         30.205
        ],
        [
         116.056,
         30.181
        ],
        [
         116.088,
         30.11
        ],
        [
         116.079,
         30.062
        ],
        [
         116.091,
         30.036
        ],
        [
         116.074,
         29.97
        ],
        [
         116.128,
         29.898
        ],
        [
         116.135,
         29.82
        ],
        [
         116.173,
         29.828
        ],
        [
         116.228,
         29.817
        ],
        [
         116.25,
         29.786
        ],
        [
         116.281,
         29.789
        ],
        [
         116.343,
         29.836
        ],
        [
         116.468,
         29.896
        ],
        [
         116.526,
         29.897
        ],
        [
         116.552,
         29.91
        ],
        [
         116.585,
         30.046
        ],
        [
         116.621,
         30.073
        ],
        [
         116.667,
         30.077
        ],
        [
         116.72,
         30.054
        ],
        [
         116.747,
         30.057
        ],
        [
         116.784,
         30.031
        ],
        [
         116.803,
         29.996
        ],
        [
         116.831,
         30.005
        ],
        [
         116.833,
         29.958
        ],
        [
         116.869,
         29.98
        ],
        [
         116.9,
         29.949
        ],
        [
         116.883,
         29.894
        ],
        [
         116.781,
         29.793
        ],
        [
         116.762,
         29.802
        ],
        [
         116.674,
         29.71
        ],
        [
         116.699,
         29.708
        ],
        [
         116.706,
         29.697
        ],
        [
         116.707,
         29.696
        ],
        [
         116.705,
         29.689
        ],
        [
         116.68,
         29.681
        ],
        [
         116.652,
         29.637
        ],
        [
         116.717,
         29.591
        ],
        [
         116.722,
         29.565
        ],
        [
         116.76,
         29.599
        ],
        [
         116.781,
         29.57
        ],
        [
         116.849,
         29.576
        ],
        [
         116.874,
         29.61
        ],
        [
         116.94,
         29.649
        ],
        [
         116.975,
         29.657
        ],
        [
         116.99,
         29.676
        ],
        [
         116.99,
         31.59
        ],
        [
         115.443,
         31.59
        ]
       ]
      ],
      [
       [
        [
         116.699,
         29.708
        ],
        [
         116.674,
         29.71
        ],
        [
         116.654,
         29.695
        ],
        [
         116.68,
         29.681
        ],
        [
         116.705,
         29.689
        ],
        [
         116.707,
         29.696
        ],
        [
         116.706,
         29.697
        ],
        [
         116.699,
         29.708
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
         116.99,
         28.71
        ],
        [
         116.99,
         29.676
        ],
        [
         116.975,
         29.657
        ],
        [
         116.94,
         29.649
        ],
        [
         116.874,
         29.61
        ],
        [
         116.849,
         29.576
        ],
        [
         116.781,
         29.57
        ],
        [
         116.76,
         29.599
        ],
        [
         116.722,
         29.565
        ],
        [
         116.717,
         29.591
        ],
        [
         116.652,
         29.637
        ],
        [
         116.68,
         29.681
        ],
        [
         116.654,
         29.695
        ],
        [
         116.674,
         29.71
        ],
        [
         116.762,
         29.802
        ],
        [
         116.781,
         29.793
        ],
        [
         116.883,
         29.894
        ],
        [
         116.9,
         29.949
        ],
        [
         116.869,
         29.98
        ],
        [
         116.833,
         29.958
        ],
        [
         116.831,
         30.005
        ],
        [
         116.803,
         29.996
        ],
        [
         116.784,
         30.031
        ],
        [
         116.747,
         30.057
        ],
        [
         116.72,
         30.054
        ],
        [
         116.667,
         30.077
        ],
        [
         116.621,
         30.073
        ],
        [
         116.585,
         30.046
        ],
        [
         116.552,
         29.91
        ],
        [
         116.526,
         29.897
        ],
        [
         116.468,
         29.896
        ],
        [
         116.343,
         29.836
        ],
        [
         116.281,
         29.789
        ],
        [
         116.25,
         29.786
        ],
        [
         116.228,
         29.817
        ],
        [
         116.173,
         29.828
        ],
        [
         116.135,
         29.82
        ],
        [
         116.087,
         29.795
        ],
        [
         116.05,
         29.762
        ],
        [
         115.966,
         29.724
        ],
        [
         115.91,
         29.724
        ],
        [
         115.837,
         29.748
        ],
        [
         115.763,
         29.793
        ],
        [
         115.707,
         29.838
        ],
        [
         115.668,
         29.85
        ],
        [
         115.612,
         29.841
        ],
        [
         115.512,
         29.84
        ],
        [
         115.479,
         29.811
        ],
        [
         115.471,
         29.74
        ],
        [
         115.413,
         29.689
        ],
        [
         115.355,
         29.65
        ],
        [
         115.305,
         29.637
        ],
        [
         115.286,
         29.618
        ],
        [
         115.251,
         29.66
        ],
        [
         115.177,
         29.655
        ],
        [
         115.113,
         29.685
        ],
        [
         115.118,
         29.656
        ],
        [
         115.144,
         29.646
        ],
        [
         115.12,
         29.598
        ],
        [
         115.157,
         29.585
        ],
        [
         115.154,
         29.51
        ],
        [
         115.086,
         29.526
        ],
        [
         115.087,
         29.56
        ],
        [
         115.033,
         29.547
        ],
        [
         115.001,
         29.572
        ],
        [
         114.948,
         29.543
        ],
        [
         114.967,
         29.522
        ],
        [
         114.94,
         29.494
        ],
        [
         114.901,
         29.506
        ],
        [
         114.86,
         29.476
        ],
        [
         114.889,
         29.436
        ],
        [
         114.918,
         29.454
        ],
        [
         114.905,
         29.473
        ],
        [
         114.936,
         29.487
        ],
        [
         114.947,
         29.465
        ],
        [
         114.931,
         29.423
        ],
        [
         114.895,
         29.398
        ],
        [
         114.866,
         29.404
        ],
        [
         114.812,
         29.383
        ],
        [
         114.784,
         29.386
        ],
        [
         114.76,
         29.363
        ],
        [
         114.741,
         29.387
        ],
        [
         114.673,
         29.396
        ],
        [
         114.622,
         29.38
        ],
        [
         114.59,
         29.353
        ],
        [
         114.52,
         29.326
        ],
        [
         114.466,
         29.324
        ],
        [
         114.44,
         29.342
        ],
        [
         114.376,
         29.323
        ],
        [
         114.342,
         29.328
        ],
        [
         114.307,
         29.365
        ],
        [
         114.259,
         29.344
        ],
        [
         114.252,
         29.235
        ],
        [
         114.17,
         29.217
        ],
        [
         114.063,
         29.205
        ],
        [
         114.035,
         29.152
        ],
        [
         113.987,
         29.126
        ],
        [
         113.952,
         29.093
        ],
        [
         113.942,
         29.047
        ],
        [
         113.962,
         28.999
        ],
        [
         113.955,
         28.979
        ],
        [
         113.974,
         28.938
        ],
        [
         114.009,
         28.955
        ],
        [
         114.005,
         28.918
        ],
        [
         114.028,
         28.891
        ],
        [
         114.06,
         28.903
        ],
        [
         114.056,
         28.872
        ],
        [
         114.077,
         28.834
        ],
        [
         114.125,
         28.843
        ],
        [
         114.154,
         28.829
        ],
        [
         114.138,
         28.78
        ],
        [
         114.157,
         28.762
        ],
        [
         114.144,
         28.71
        ],
        [
         116.99,
         28.71
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
         114.555,
         31.59
        ],
        [
         114.561,
         31.561
        ],
        [
         114.573,
         31.554
        ],
        [
         114.617,
         31.585
        ],
        [
         114.642,
         31.582
        ],
        [
         114.696,
         31.526
        ],
        [
         114.779,
         31.521
        ],
        [
         114.789,
         31.48
        ],
        [
         114.83,
         31.459
        ],
        [
         114.87,
         31.479
        ],
        [
         114.884,
         31.469
        ],
        [
         114.962,
         31.495
        ],
        [
         114.995,
         31.471
        ],
        [
         115.023,
         31.528
        ],
        [
         115.096,
         31.508
        ],
        [
         115.115,
         31.53
        ],
        [
         115.107,
         31.568
        ],
        [
         115.12,
         31.59
        ],
        [
         115.179,
         31.59
        ],
        [
         115.213,
         31.555
        ],
        [
         115.236,
         31.555
        ],
        [
         115.218,
         31.515
        ],
        [
         115.211,
         31.442
        ],
        [
         115.253,
         31.422
        ],
        [
         115.251,
         31.392
        ],
        [
         115.301,
         31.384
        ],
        [
         115.339,
         31.404
        ],
        [
         115.374,
         31.406
        ],
        [
         115.39,
         31.45
        ],
        [
         115.371,
         31.496
        ],
        [
         115.416,
         31.526
        ],
        [
         115.44,
         31.588
        ],
        [
         115.443,
         31.59
        ],
        [
         114.555,
         31.59
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         111.24,
         31.59
        ],
        [
         111.24,
         30.041
        ],
        [
         111.242,
         30.04
        ],
        [
         111.267,
         30.011
        ],
        [
         111.332,
         29.971
        ],
        [
         111.343,
         29.945
        ],
        [
         111.383,
         29.95
        ],
        [
         111.394,
         29.913
        ],
        [
         111.437,
         29.93
        ],
        [
         111.476,
         29.919
        ],
        [
         111.527,
         29.926
        ],
        [
         111.554,
         29.894
        ],
        [
         111.669,
         29.889
        ],
        [
         111.669,
         29.889
        ],
        [
         111.705,
         29.89
        ],
        [
         111.724,
         29.909
        ],
        [
         111.724,
         29.909
        ],
        [
         111.758,
         29.92
        ],
        [
         111.811,
         29.901
        ],
        [
         111.861,
         29.857
        ],
        [
         111.899,
         29.856
        ],
        [
         111.899,
         29.856
        ],
        [
         111.926,
         29.837
        ],
        [
         111.966,
         29.833
        ],
        [
         111.955,
         29.797
        ],
        [
         112.008,
         29.779
        ],
        [
         112.076,
         29.744
        ],
        [
         112.066,
         29.681
        ],
        [
         112.09,
         29.685
        ],
        [
         112.111,
         29.659
        ],
        [
         112.178,
         29.657
        ],
        [
         112.202,
         29.634
        ],
        [
         112.244,
         29.659
        ],
        [
         112.234,
         29.616
        ],
        [
         112.303,
         29.586
        ],
        [
         112.281,
         29.537
        ],
        [
         112.291,
         29.517
        ],
        [
         112.333,
         29.545
        ],
        [
         112.369,
         29.541
        ],
        [
         112.425,
         29.599
        ],
        [
         112.44,
         29.634
        ],
        [
         112.499,
         29.629
        ],
        [
         112.542,
         29.601
        ],
        [
         112.572,
         29.624
        ],
        [
         112.64,
         29.608
        ],
        [
         112.651,
         29.592
        ],
        [
         112.694,
         29.602
        ],
        [
         112.714,
         29.649
        ],
        [
         112.733,
         29.645
        ],
        [
         112.789,
         29.681
        ],
        [
         112.794,
         29.736
        ],
        [
         112.861,
         29.783
        ],
        [
         112.894,
         29.784
        ],
        [
         112.902,
         29.791
        ],
        [
         112.929,
         29.774
        ],
        [
         112.924,
         29.767
        ],
        [
         112.927,
         29.692
        ],
        [
         112.945,
         29.683
        ],
        [
         112.975,
         29.733
        ],
        [
         113.026,
         29.773
        ],
        [
         113.005,
         29.694
        ],
        [
         112.916,
         29.621
        ],
        [
         112.912,
         29.607
        ],
        [
         112.95,
         29.473
        ],
        [
         113.035,
         29.524
        ],
        [
         113.057,
         29.523
        ],
        [
         113.078,
         29.438
        ],
        [
         113.1,
         29.46
        ],
        [
         113.145,
         29.449
        ],
        [
         113.182,
         29.486
        ],
        [
         113.222,
         29.544
        ],
        [
         113.277,
         29.595
        ],
        [
         113.378,
         29.703
        ],
        [
         113.572,
         29.849
        ],
        [
         113.575,
         29.809
        ],
        [
         113.551,
         29.768
        ],
        [
         113.559,
         29.727
        ],
        [
         113.54,
         29.7
        ],
        [
         113.547,
         29.676
        ],
        [
         113.606,
         29.667
        ],
        [
         113.663,
         29.684
        ],
        [
         113.681,
         29.643
        ],
        [
         113.704,
         29.635
        ],
        [
         113.739,
         29.579
        ],
        [
         113.71,
         29.555
        ],
        [
         113.631,
         29.523
        ],
        [
         113.678,
         29.514
        ],
        [
         113.755,
         29.447
        ],
        [
         113.731,
         29.394
        ],
        [
         113.675,
         29.388
        ],
        [
         113.661,
         29.333
        ],
        [
         113.632,
         29.316
        ],
        [
         113.61,
         29.251
        ],
        [
         113.652,
         29.226
        ],
        [
         113.693,
         29.226
        ],
        [
         113.692,
         29.197
        ],
        [
         113.663,
         29.169
        ],
        [
         113.691,
         29.115
        ],
        [
         113.696,
         29.077
        ],
        [
         113.723,
         29.105
        ],
        [
         113.75,
         29.061
        ],
        [
         113.776,
         29.095
        ],
        [
         113.816,
         29.105
        ],
        [
         113.853,
         29.059
        ],
        [
         113.882,
         29.065
        ],
        [
         113.877,
         29.038
        ],
        [
         113.898,
         29.029
        ],
        [
         113.942,
         29.047
        ],
        [
         113.952,
         29.093
        ],
        [
         113.987,
         29.126
        ],
        [
         114.035,
         29.152
        ],
        [
         114.063,
         29.205
        ],
        [
         114.17,
         29.217
        ],
        [
         114.252,
         29.235
        ],
        [
         114.259,
         29.344
        ],
        [
         114.307,
         29.365
        ],
        [
         114.342,
         29.328
        ],
        [
         114.376,
         29.323
        ],
        [
         114.44,
         29.342
        ],
        [
         114.466,
         29.324
        ],
        [
         114.52,
         29.326
        ],
        [
         114.59,
         29.353
        ],
        [
         114.622,
         29.38
        ],
        [
         114.673,
         29.396
        ],
        [
         114.741,
         29.387
        ],
        [
         114.76,
         29.363
        ],
        [
         114.784,
         29.386
        ],
        [
         114.812,
         29.383
        ],
        [
         114.866,
         29.404
        ],
        [
         114.895,
         29.398
        ],
        [
         114.931,
         29.423
        ],
        [
         114.947,
         29.465
        ],
        [
         114.936,
         29.487
        ],
        [
         114.905,
         29.473
        ],
        [
         114.918,
         29.454
        ],
        [
         114.889,
         29.436
        ],
        [
         114.86,
         29.476
        ],
        [
         114.901,
         29.506
        ],
        [
         114.94,
         29.494
        ],
        [
         114.967,
         29.522
        ],
        [
         114.948,
         29.543
        ],
        [
         115.001,
         29.572
        ],
        [
         115.033,
         29.547
        ],
        [
         115.087,
         29.56
        ],
        [
         115.086,
         29.526
        ],
        [
         115.154,
         29.51
        ],
        [
         115.157,
         29.585
        ],
        [
         115.12,
         29.598
        ],
        [
         115.144,
         29.646
        ],
        [
         115.118,
         29.656
        ],
        [
         115.113,
         29.685
        ],
        [
         115.177,
         29.655
        ],
        [
         115.251,
         29.66
        ],
        [
         115.286,
         29.618
        ],
        [
         115.305,
         29.637
        ],
        [
         115.355,
         29.65
        ],
        [
         115.413,
         29.689
        ],
        [
         115.471,
         29.74
        ],
        [
         115.479,
         29.811
        ],
        [
         115.512,
         29.84
        ],
        [
         115.612,
         29.841
        ],
        [
         115.668,
         29.85
        ],
        [
         115.707,
         29.838
        ],
        [
         115.763,
         29.793
        ],
        [
         115.837,
         29.748
        ],
        [
         115.91,
         29.724
        ],
        [
         115.966,
         29.724
        ],
        [
         116.05,
         29.762
        ],
        [
         116.087,
         29.795
        ],
        [
         116.135,
         29.82
        ],
        [
         116.128,
         29.898
        ],
        [
         116.074,
         29.97
        ],
        [
         116.091,
         30.036
        ],
        [
         116.079,
         30.062
        ],
        [
         116.088,
         30.11
        ],
        [
         116.056,
         30.181
        ],
        [
         116.066,
         30.205
        ],
        [
         115.998,
         30.253
        ],
        [
         115.986,
         30.291
        ],
        [
         115.903,
         30.314
        ],
        [
         115.915,
         30.338
        ],
        [
         115.885,
         30.38
        ],
        [
         115.921,
         30.416
        ],
        [
         115.895,
         30.453
        ],
        [
         115.91,
         30.519
        ],
        [
         115.888,
         30.543
        ],
        [
         115.877,
         30.582
        ],
        [
         115.849,
         30.602
        ],
        [
         115.819,
         30.598
        ],
        [
         115.814,
         30.637
        ],
        [
         115.763,
         30.685
        ],
        [
         115.783,
         30.752
        ],
        [
         115.851,
         30.757
        ],
        [
         115.864,
         30.816
        ],
        [
         115.849,
         30.828
        ],
        [
         115.865,
         30.864
        ],
        [
         115.933,
         30.89
        ],
        [
         115.976,
         30.932
        ],
        [
         116.04,
         30.958
        ],
        [
         116.072,
         30.957
        ],
        [
         116.059,
         31.013
        ],
        [
         116.015,
         31.012
        ],
        [
         116.006,
         31.035
        ],
        [
         115.939,
         31.047
        ],
        [
         115.94,
         31.072
        ],
        [
         115.888,
         31.109
        ],
        [
         115.867,
         31.148
        ],
        [
         115.838,
         31.127
        ],
        [
         115.798,
         31.128
        ],
        [
         115.779,
         31.112
        ],
        [
         115.701,
         31.201
        ],
        [
         115.655,
         31.211
        ],
        [
         115.604,
         31.174
        ],
        [
         115.586,
         31.144
        ],
        [
         115.54,
         31.195
        ],
        [
         115.54,
         31.232
        ],
        [
         115.508,
         31.268
        ],
        [
         115.473,
         31.265
        ],
        [
         115.444,
         31.344
        ],
        [
         115.407,
         31.338
        ],
        [
         115.372,
         31.349
        ],
        [
         115.393,
         31.39
        ],
        [
         115.374,
         31.406
        ],
        [
         115.339,
         31.404
        ],
        [
         115.301,
         31.384
        ],
        [
         115.251,
         31.392
        ],
        [
         115.253,
         31.422
        ],
        [
         115.211,
         31.442
        ],
        [
         115.218,
         31.515
        ],
        [
         115.236,
         31.555
        ],
        [
         115.213,
         31.555
        ],
        [
         115.179,
         31.59
        ],
        [
         115.12,
         31.59
        ],
        [
         115.107,
         31.568
        ],
        [
         115.115,
         31.53
        ],
        [
         115.096,
         31.508
        ],
        [
         115.023,
         31.528
        ],
        [
         114.995,
         31.471
        ],
        [
         114.962,
         31.495
        ],
        [
         114.884,
         31.469
        ],
        [
         114.87,
         31.479
        ],
        [
         114.83,
         31.459
        ],
        [
         114.789,
         31.48
        ],
        [
         114.779,
         31.521
        ],
        [
         114.696,
         31.526
        ],
        [
         114.642,
         31.582
        ],
        [
         114.617,
         31.585
        ],
        [
         114.573,
         31.554
        ],
        [
         114.561,
         31.561
        ],
        [
         114.555,
         31.59
        ],
        [
         111.24,
         31.59
        ]
       ]
      ],
      [
       [
        [
         112.902,
         29.791
        ],
        [
         112.894,
         29.784
        ],
        [
         112.924,
         29.767
        ],
        [
         112.929,
         29.774
        ],
        [
         112.902,
         29.791
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
         114.144,
         28.71
        ],
        [
         114.157,
         28.762
        ],
        [
         114.138,
         28.78
        ],
        [
         114.154,
         28.829
        ],
        [
         114.125,
         28.843
        ],
        [
         114.077,
         28.834
        ],
        [
         114.056,
         28.872
        ],
        [
         114.06,
         28.903
        ],
        [
         114.028,
         28.891
        ],
        [
         114.005,
         28.918
        ],
        [
         114.009,
         28.955
        ],
        [
         113.974,
         28.938
        ],
        [
         113.955,
         28.979
        ],
        [
         113.962,
         28.999
        ],
        [
         113.942,
         29.047
        ],
        [
         113.898,
         29.029
        ],
        [
         113.877,
         29.038
        ],
        [
         113.882,
         29.065
        ],
        [
         113.853,
         29.059
        ],
        [
         113.816,
         29.105
        ],
        [
         113.776,
         29.095
        ],
        [
         113.75,
         29.061
        ],
        [
         113.723,
         29.105
        ],
        [
         113.696,
         29.077
        ],
        [
         113.691,
         29.115
        ],
        [
         113.663,
         29.169
        ],
        [
         113.692,
         29.197
        ],
        [
         113.693,
         29.226
        ],
        [
         113.652,
         29.226
        ],
        [
         113.61,
         29.251
        ],
        [
         113.632,
         29.316
        ],
        [
         113.661,
         29.333
        ],
        [
         113.675,
         29.388
        ],
        [
         113.731,
         29.394
        ],
        [
         113.755,
         29.447
        ],
        [
         113.678,
         29.514
        ],
        [
         113.631,
         29.523
        ],
        [
         113.71,
         29.555
        ],
        [
         113.739,
         29.579
        ],
        [
         113.704,
         29.635
        ],
        [
         113.681,
         29.643
        ],
        [
         113.663,
         29.684
        ],
        [
         113.606,
         29.667
        ],
        [
         113.547,
         29.676
        ],
        [
         113.54,
         29.7
        ],
        [
         113.559,
         29.727
        ],
        [
         113.551,
         29.768
        ],
        [
         113.575,
         29.809
        ],
        [
         113.572,
         29.849
        ],
        [
         113.378,
         29.703
        ],
        [
         113.277,
         29.595
        ],
        [
         113.222,
         29.544
        ],
        [
         113.182,
         29.486
        ],
        [
         113.145,
         29.449
        ],
        [
         113.1,
         29.46
        ],
        [
         113.078,
         29.438
        ],
        [
         113.057,
         29.523
        ],
        [
         113.035,
         29.524
        ],
        [
         112.95,
         29.473
        ],
        [
         112.912,
         29.607
        ],
        [
         112.916,
         29.621
        ],
        [
         113.005,
         29.694
        ],
        [
         113.026,
         29.773
        ],
        [
         112.975,
         29.733
        ],
        [
         112.945,
         29.683
        ],
        [
         112.927,
         29.692
        ],
        [
         112.924,
         29.767
        ],
        [
         112.894,
         29.784
        ],
        [
         112.861,
         29.783
        ],
        [
         112.794,
         29.736
        ],
        [
         112.789,
         29.681
        ],
        [
         112.733,
         29.645
        ],
        [
         112.714,
         29.649
        ],
        [
         112.694,
         29.602
        ],
        [
         112.651,
         29.592
        ],
        [
         112.64,
         29.608
        ],
        [
         112.572,
         29.624
        ],
        [
         112.542,
         29.601
        ],
        [
         112.499,
         29.629
        ],
        [
         112.44,
         29.634
        ],
        [
         112.425,
         29.599
        ],
        [
         112.369,
         29.541
        ],
        [
         112.333,
         29.545
        ],
        [
         112.291,
         29.517
        ],
        [
         112.281,
         29.537
        ],
        [
         112.303,
         29.586
        ],
        [
         112.234,
         29.616
        ],
        [
         112.244,
         29.659
        ],
        [
         112.202,
         29.634
        ],
        [
         112.178,
         29.657
        ],
        [
         112.111,
         29.659
        ],
        [
         112.09,
         29.685
        ],
        [
         112.066,
         29.681
        ],
        [
         112.076,
         29.744
        ],
        [
         112.008,
         29.779
        ],
        [
         111.955,
         29.797
        ],
        [
         111.966,
         29.833
        ],
        [
         111.926,
         29.837
        ],
        [
         111.899,
         29.856
        ],
        [
         111.899,
         29.856
        ],
        [
         111.861,
         29.857
        ],
        [
         111.811,
         29.901
        ],
        [
         111.758,
         29.92
        ],
        [
         111.724,
         29.909
        ],
        [
         111.724,
         29.909
        ],
        [
         111.705,
         29.89
        ],
        [
         111.669,
         29.889
        ],
        [
         111.669,
         29.889
        ],
        [
         111.554,
         29.894
        ],
        [
         111.527,
         29.926
        ],
        [
         111.476,
         29.919
        ],
        [
         111.437,
         29.93
        ],
        [
         111.394,
         29.913
        ],
        [
         111.383,
         29.95
        ],
        [
         111.343,
         29.945
        ],
        [
         111.332,
         29.971
        ],
        [
         111.267,
         30.011
        ],
        [
         111.242,
         30.04
        ],
        [
         111.24,
         30.041
        ],
        [
         111.24,
         28.71
        ],
        [
         114.144,
         28.71
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.982,
       29.279
      ],
      [
       116.034,
       29.319
      ],
      [
       116.088,
       29.437
      ],
      [
       116.198,
       29.751
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.905,
        29.031
       ],
       [
        112.801,
        28.927
       ],
       [
        112.693,
        28.874
       ],
       [
        112.545,
        28.838
       ],
       [
        112.351,
        28.861
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.994,
        29.147
       ],
       [
        113.071,
        29.389
       ]
      ]
     ]
    },
    "n": "Yuan"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       111.24,
       30.765
      ],
      [
       111.309,
       30.673
      ],
      [
       111.399,
       30.507
      ],
      [
       111.465,
       30.418
      ],
      [
       111.507,
       30.407
      ],
      [
       111.52,
       30.384
      ],
      [
       111.507,
       30.351
      ],
      [
       111.512,
       30.318
      ],
      [
       111.538,
       30.287
      ],
      [
       111.571,
       30.287
      ],
      [
       111.612,
       30.311
      ],
      [
       111.736,
       30.389
      ],
      [
       111.818,
       30.426
      ],
      [
       111.86,
       30.421
      ],
      [
       111.911,
       30.387
      ],
      [
       111.969,
       30.323
      ],
      [
       112.058,
       30.293
      ],
      [
       112.179,
       30.295
      ],
      [
       112.247,
       30.278
      ],
      [
       112.263,
       30.242
      ],
      [
       112.252,
       30.191
      ],
      [
       112.215,
       30.125
      ],
      [
       112.252,
       30.068
      ],
      [
       112.363,
       30.018
      ],
      [
       112.406,
       29.927
      ],
      [
       112.381,
       29.793
      ],
      [
       112.41,
       29.738
      ],
      [
       112.492,
       29.762
      ],
      [
       112.544,
       29.792
      ],
      [
       112.569,
       29.784
      ],
      [
       112.593,
       29.766
      ],
      [
       112.604,
       29.752
      ],
      [
       112.629,
       29.752
      ],
      [
       112.632,
       29.765
      ],
      [
       112.657,
       29.788
      ],
      [
       112.707,
       29.799
      ],
      [
       112.739,
       29.786
      ],
      [
       112.732,
       29.772
      ],
      [
       112.745,
       29.754
      ],
      [
       112.782,
       29.744
      ],
      [
       112.819,
       29.737
      ],
      [
       112.885,
       29.76
      ],
      [
       112.942,
       29.74
      ],
      [
       112.955,
       29.691
      ],
      [
       112.94,
       29.669
      ],
      [
       112.917,
       29.6
      ],
      [
       112.924,
       29.53
      ],
      [
       112.951,
       29.508
      ],
      [
       112.989,
       29.505
      ],
      [
       113.017,
       29.494
      ],
      [
       113.031,
       29.481
      ],
      [
       113.053,
       29.469
      ],
      [
       113.097,
       29.456
      ],
      [
       113.128,
       29.463
      ]
     ]
    },
    "n": "Chang Jiang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       115.867,
       28.71
      ],
      [
       115.869,
       28.716
      ],
      [
       115.975,
       28.888
      ],
      [
       116.016,
       29.05
      ],
      [
       115.982,
       29.279
      ]
     ]
    },
    "n": "Gan"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.429,
        31.59
       ],
       [
        112.432,
        31.586
       ],
       [
        112.44,
        31.496
       ],
       [
        112.417,
        31.388
       ],
       [
        112.434,
        31.308
       ],
       [
        112.521,
        31.23
       ],
       [
        112.556,
        31.219
       ],
       [
        112.572,
        31.183
       ],
       [
        112.58,
        31.118
       ],
       [
        112.569,
        31.096
       ],
       [
        112.539,
        31.077
       ],
       [
        112.523,
        31.039
       ],
       [
        112.556,
        30.939
       ],
       [
        112.599,
        30.875
       ],
       [
        112.634,
        30.848
       ],
       [
        112.632,
        30.815
       ],
       [
        112.622,
        30.787
       ],
       [
        112.605,
        30.713
       ],
       [
        112.627,
        30.67
       ],
       [
        112.689,
        30.658
       ],
       [
        112.713,
        30.627
       ],
       [
        112.707,
        30.601
       ],
       [
        112.716,
        30.575
       ],
       [
        112.754,
        30.572
       ],
       [
        112.797,
        30.564
       ],
       [
        112.849,
        30.519
       ],
       [
        112.886,
        30.515
       ],
       [
        112.973,
        30.531
       ],
       [
        113.073,
        30.475
       ],
       [
        113.21,
        30.43
       ],
       [
        113.381,
        30.407
       ],
       [
        113.512,
        30.443
       ],
       [
        113.602,
        30.538
       ],
       [
        113.672,
        30.597
       ],
       [
        113.769,
        30.626
       ],
       [
        113.801,
        30.622
       ],
       [
        113.838,
        30.63
       ],
       [
        113.86,
        30.644
       ],
       [
        113.9,
        30.637
       ],
       [
        113.926,
        30.644
       ],
       [
        113.939,
        30.66
       ],
       [
        113.964,
        30.657
       ],
       [
        114.009,
        30.615
       ],
       [
        114.096,
        30.586
       ],
       [
        114.288,
        30.572
       ]
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.128,
        29.463
       ],
       [
        113.166,
        29.484
       ],
       [
        113.21,
        29.538
       ],
       [
        113.53,
        29.832
       ],
       [
        113.696,
        29.949
       ],
       [
        113.76,
        29.939
       ],
       [
        113.86,
        29.972
       ],
       [
        113.995,
        30.05
       ],
       [
        114.011,
        30.124
       ],
       [
        113.909,
        30.196
       ],
       [
        113.885,
        30.246
       ],
       [
        113.94,
        30.276
       ],
       [
        113.99,
        30.279
       ],
       [
        114.032,
        30.253
       ],
       [
        114.116,
        30.328
       ],
       [
        114.288,
        30.572
       ],
       [
        114.303,
        30.593
       ],
       [
        114.396,
        30.664
       ],
       [
        114.472,
        30.661
       ],
       [
        114.558,
        30.603
       ],
       [
        114.662,
        30.582
       ],
       [
        114.784,
        30.598
       ],
       [
        114.841,
        30.565
       ],
       [
        114.833,
        30.482
       ],
       [
        114.885,
        30.423
       ],
       [
        114.997,
        30.387
       ],
       [
        115.058,
        30.336
       ],
       [
        115.067,
        30.269
       ],
       [
        115.102,
        30.229
       ],
       [
        115.16,
        30.216
       ],
       [
        115.252,
        30.128
       ],
       [
        115.376,
        29.966
       ],
       [
        115.504,
        29.879
       ],
       [
        115.638,
        29.867
       ],
       [
        115.751,
        29.828
       ],
       [
        115.843,
        29.764
       ],
       [
        115.983,
        29.746
       ],
       [
        116.171,
        29.775
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.198,
        29.751
       ],
       [
        116.212,
        29.785
       ]
      ],
      [
       [
        116.212,
        29.785
       ],
       [
        116.327,
        29.815
       ],
       [
        116.451,
        29.868
       ],
       [
        116.544,
        29.931
       ],
       [
        116.606,
        30.006
       ],
       [
        116.683,
        30.061
       ],
       [
        116.776,
        30.097
       ],
       [
        116.847,
        30.168
       ],
       [
        116.896,
        30.272
       ],
       [
        116.913,
        30.349
       ],
       [
        116.9,
        30.399
       ],
       [
        116.972,
        30.446
       ],
       [
        116.99,
        30.451
       ]
      ]
     ]
    },
    "n": "Yangtze"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.24,
        28.772
       ],
       [
        111.279,
        28.762
       ],
       [
        111.405,
        28.791
       ],
       [
        111.522,
        28.986
       ],
       [
        111.559,
        29.005
       ],
       [
        111.593,
        28.99
       ],
       [
        111.626,
        28.996
       ],
       [
        111.655,
        29.013
       ],
       [
        111.679,
        29.013
       ],
       [
        111.705,
        28.992
       ],
       [
        111.744,
        28.988
       ],
       [
        111.796,
        29.01
       ],
       [
        111.865,
        29.012
       ],
       [
        111.993,
        28.985
       ]
      ],
      [
       [
        112.905,
        29.031
       ],
       [
        112.994,
        29.147
       ]
      ],
      [
       [
        113.069,
        29.388
       ],
       [
        113.128,
        29.463
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.706,
        29.136
       ],
       [
        116.709,
        29.102
       ],
       [
        116.672,
        29.098
       ],
       [
        116.635,
        29.102
       ],
       [
        116.618,
        29.115
       ],
       [
        116.581,
        29.128
       ],
       [
        116.521,
        29.143
       ],
       [
        116.496,
        29.122
       ],
       [
        116.477,
        29.043
       ],
       [
        116.503,
        28.953
       ],
       [
        116.53,
        28.894
       ],
       [
        116.537,
        28.845
       ],
       [
        116.512,
        28.804
       ],
       [
        116.468,
        28.805
       ],
       [
        116.441,
        28.86
       ],
       [
        116.418,
        28.88
       ],
       [
        116.409,
        28.905
       ],
       [
        116.348,
        28.906
       ],
       [
        116.329,
        28.961
       ],
       [
        116.097,
        29.106
       ],
       [
        116.064,
        29.149
       ],
       [
        116.047,
        29.19
       ],
       [
        115.982,
        29.279
       ],
       [
        115.965,
        29.311
       ],
       [
        116.002,
        29.394
       ],
       [
        116.026,
        29.453
       ],
       [
        116.091,
        29.555
       ],
       [
        116.117,
        29.653
       ],
       [
        116.1,
        29.688
       ],
       [
        116.082,
        29.703
       ],
       [
        116.113,
        29.726
       ],
       [
        116.18,
        29.751
       ],
       [
        116.198,
        29.751
       ],
       [
        116.23,
        29.698
       ],
       [
        116.235,
        29.666
       ],
       [
        116.207,
        29.645
       ],
       [
        116.199,
        29.604
       ],
       [
        116.181,
        29.573
       ],
       [
        116.159,
        29.519
       ],
       [
        116.145,
        29.454
       ],
       [
        116.11,
        29.427
       ],
       [
        116.115,
        29.402
       ],
       [
        116.143,
        29.386
       ],
       [
        116.188,
        29.382
       ],
       [
        116.196,
        29.362
       ],
       [
        116.153,
        29.334
       ],
       [
        116.137,
        29.309
       ],
       [
        116.153,
        29.253
       ],
       [
        116.31,
        29.232
       ],
       [
        116.343,
        29.234
       ],
       [
        116.368,
        29.223
       ],
       [
        116.358,
        29.186
       ],
       [
        116.362,
        29.154
       ],
       [
        116.407,
        29.176
       ],
       [
        116.44,
        29.236
       ],
       [
        116.469,
        29.25
       ],
       [
        116.54,
        29.24
       ],
       [
        116.604,
        29.237
       ],
       [
        116.64,
        29.237
       ],
       [
        116.664,
        29.226
       ],
       [
        116.661,
        29.19
       ],
       [
        116.674,
        29.159
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ],
       [
        116.706,
        29.136
       ]
      ]
     ]
    },
    "n": "Poyang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.461,
        30.055
       ],
       [
        116.496,
        30.02
       ],
       [
        116.52,
        29.988
       ],
       [
        116.498,
        29.964
       ],
       [
        116.388,
        29.966
       ],
       [
        116.29,
        29.994
       ],
       [
        116.259,
        30.048
       ],
       [
        116.257,
        30.094
       ],
       [
        116.281,
        30.079
       ],
       [
        116.298,
        30.086
       ],
       [
        116.327,
        30.087
       ],
       [
        116.386,
        30.069
       ],
       [
        116.442,
        30.077
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ],
       [
        116.461,
        30.055
       ]
      ]
     ]
    },
    "n": "Daguan Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.195,
        30.038
       ],
       [
        116.242,
        30.032
       ],
       [
        116.253,
        30.01
       ],
       [
        116.26,
        29.976
       ],
       [
        116.254,
        29.935
       ],
       [
        116.211,
        29.908
       ],
       [
        116.131,
        29.898
       ],
       [
        116.044,
        29.881
       ],
       [
        115.977,
        29.952
       ],
       [
        115.985,
        30.016
       ],
       [
        116.073,
        30.0
       ],
       [
        116.118,
        30.0
       ],
       [
        116.129,
        30.026
       ],
       [
        116.15,
        30.061
       ],
       [
        116.195,
        30.038
       ]
      ]
     ]
    },
    "n": "Long Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.35,
        30.196
       ],
       [
        114.371,
        30.211
       ],
       [
        114.395,
        30.236
       ],
       [
        114.406,
        30.268
       ],
       [
        114.444,
        30.285
       ],
       [
        114.496,
        30.289
       ],
       [
        114.501,
        30.311
       ],
       [
        114.474,
        30.333
       ],
       [
        114.458,
        30.364
       ],
       [
        114.501,
        30.366
       ],
       [
        114.539,
        30.345
       ],
       [
        114.603,
        30.3
       ],
       [
        114.623,
        30.258
       ],
       [
        114.642,
        30.133
       ],
       [
        114.623,
        30.096
       ],
       [
        114.581,
        30.137
       ],
       [
        114.542,
        30.188
       ],
       [
        114.509,
        30.194
       ],
       [
        114.474,
        30.158
       ],
       [
        114.445,
        30.085
       ],
       [
        114.408,
        30.106
       ],
       [
        114.365,
        30.165
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ],
       [
        114.35,
        30.196
       ]
      ]
     ]
    },
    "n": "Liangzi Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        116.424,
        30.108
       ],
       [
        116.401,
        30.118
       ],
       [
        116.387,
        30.143
       ],
       [
        116.373,
        30.161
       ],
       [
        116.351,
        30.175
       ],
       [
        116.317,
        30.203
       ],
       [
        116.314,
        30.23
       ],
       [
        116.335,
        30.234
       ],
       [
        116.357,
        30.245
       ],
       [
        116.371,
        30.244
       ],
       [
        116.39,
        30.224
       ],
       [
        116.443,
        30.207
       ],
       [
        116.472,
        30.204
       ],
       [
        116.514,
        30.208
       ],
       [
        116.539,
        30.207
       ],
       [
        116.54,
        30.18
       ],
       [
        116.527,
        30.149
       ],
       [
        116.525,
        30.116
       ],
       [
        116.526,
        30.089
       ],
       [
        116.506,
        30.078
       ],
       [
        116.494,
        30.085
       ],
       [
        116.468,
        30.104
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ],
       [
        116.424,
        30.108
       ]
      ]
     ]
    },
    "n": "Po Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.451,
        29.94
       ],
       [
        113.454,
        29.914
       ],
       [
        113.426,
        29.876
       ],
       [
        113.391,
        29.826
       ],
       [
        113.369,
        29.785
       ],
       [
        113.34,
        29.76
       ],
       [
        113.312,
        29.749
       ],
       [
        113.275,
        29.78
       ],
       [
        113.237,
        29.848
       ],
       [
        113.23,
        29.893
       ],
       [
        113.249,
        29.904
       ],
       [
        113.302,
        29.888
       ],
       [
        113.331,
        29.894
       ],
       [
        113.362,
        29.949
       ],
       [
        113.406,
        29.953
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ],
       [
        113.451,
        29.94
       ]
      ]
     ]
    },
    "n": "Hong Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.839,
        30.287
       ],
       [
        114.812,
        30.283
       ],
       [
        114.783,
        30.278
       ],
       [
        114.753,
        30.283
       ],
       [
        114.739,
        30.279
       ],
       [
        114.743,
        30.263
       ],
       [
        114.76,
        30.238
       ],
       [
        114.781,
        30.221
       ],
       [
        114.778,
        30.215
       ],
       [
        114.762,
        30.211
       ],
       [
        114.735,
        30.212
       ],
       [
        114.704,
        30.212
       ],
       [
        114.679,
        30.228
       ],
       [
        114.679,
        30.25
       ],
       [
        114.68,
        30.277
       ],
       [
        114.674,
        30.3
       ],
       [
        114.713,
        30.33
       ],
       [
        114.764,
        30.345
       ],
       [
        114.784,
        30.344
       ],
       [
        114.806,
        30.345
       ],
       [
        114.834,
        30.327
       ],
       [
        114.846,
        30.302
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
       ],
       [
        114.839,
        30.287
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
        114.601,
        30.662
       ],
       [
        114.622,
        30.656
       ],
       [
        114.64,
        30.66
       ],
       [
        114.649,
        30.674
       ],
       [
        114.646,
        30.715
       ],
       [
        114.674,
        30.724
       ],
       [
        114.703,
        30.735
       ],
       [
        114.719,
        30.751
       ],
       [
        114.746,
        30.738
       ],
       [
        114.781,
        30.701
       ],
       [
        114.786,
        30.663
       ],
       [
        114.756,
        30.65
       ],
       [
        114.696,
        30.613
       ],
       [
        114.622,
        30.608
       ],
       [
        114.584,
        30.65
       ],
       [
        114.586,
        30.663
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
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
        114.601,
        30.344
       ],
       [
        114.553,
        30.384
       ],
       [
        114.499,
        30.418
       ],
       [
        114.482,
        30.431
       ],
       [
        114.495,
        30.439
       ],
       [
        114.533,
        30.435
       ],
       [
        114.575,
        30.405
       ],
       [
        114.601,
        30.399
       ],
       [
        114.631,
        30.42
       ],
       [
        114.633,
        30.44
       ],
       [
        114.629,
        30.456
       ],
       [
        114.607,
        30.483
       ],
       [
        114.609,
        30.496
       ],
       [
        114.64,
        30.486
       ],
       [
        114.666,
        30.49
       ],
       [
        114.678,
        30.497
       ],
       [
        114.701,
        30.512
       ],
       [
        114.739,
        30.494
       ],
       [
        114.756,
        30.477
       ],
       [
        114.752,
        30.463
       ],
       [
        114.748,
        30.443
       ],
       [
        114.753,
        30.429
       ],
       [
        114.727,
        30.42
       ],
       [
        114.683,
        30.397
       ],
       [
        114.655,
        30.346
       ],
       [
        114.623,
        30.339
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
       ],
       [
        114.601,
        30.344
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
        114.301,
        30.025
       ],
       [
        114.289,
        30.002
       ],
       [
        114.252,
        29.972
       ],
       [
        114.244,
        29.938
       ],
       [
        114.264,
        29.915
       ],
       [
        114.255,
        29.906
       ],
       [
        114.218,
        29.901
       ],
       [
        114.171,
        29.921
       ],
       [
        114.143,
        29.988
       ],
       [
        114.147,
        30.083
       ],
       [
        114.177,
        30.114
       ],
       [
        114.218,
        30.141
       ],
       [
        114.249,
        30.141
       ],
       [
        114.246,
        30.115
       ],
       [
        114.237,
        30.084
       ],
       [
        114.253,
        30.045
       ],
       [
        114.273,
        30.044
       ],
       [
        114.294,
        30.043
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ],
       [
        114.301,
        30.025
       ]
      ]
     ]
    },
    "n": "Huangtang Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.158,
        29.872
       ],
       [
        114.137,
        29.862
       ],
       [
        114.114,
        29.883
       ],
       [
        114.087,
        29.934
       ],
       [
        114.063,
        29.927
       ],
       [
        114.029,
        29.898
       ],
       [
        113.99,
        29.879
       ],
       [
        113.969,
        29.88
       ],
       [
        113.963,
        29.892
       ],
       [
        113.984,
        29.916
       ],
       [
        114.003,
        29.942
       ],
       [
        113.996,
        29.959
       ],
       [
        113.97,
        29.963
       ],
       [
        113.944,
        29.966
       ],
       [
        113.941,
        29.981
       ],
       [
        114.019,
        30.001
       ],
       [
        114.074,
        30.027
       ],
       [
        114.101,
        30.022
       ],
       [
        114.13,
        29.935
       ],
       [
        114.152,
        29.89
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ],
       [
        114.158,
        29.872
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "_bbox": [
   111.24,
   28.71,
   116.99,
   31.59
  ]
 }
};
