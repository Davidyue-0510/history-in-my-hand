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
   "bias_note": "吴方叙周瑜火攻，魏方讳败北。"
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
   "influence": 1
  },
  {
   "id": "huanggai",
   "name": "黄盖",
   "side": "吴",
   "influence": 1
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
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "CHIBIG01"
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
 }
};
