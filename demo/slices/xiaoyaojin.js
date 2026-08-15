// 本文件由 tools/build.py 自动生成（切片 xiaoyaojin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xiaoyaojin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xiaoyaojin"] = {
 "meta": {
  "kind": "battle",
  "region": "three_kingdoms",
  "title": "逍遥津之战",
  "dossier_label": "逍遥津之战",
  "subtitle": "建安二十年（215）· 魏 vs 吴",
  "primary_place": "xiaoyaojin",
  "dossier_event": "event:xy_cao",
  "terrain_grid": "china_coarse",
  "lead": "张辽率八百步卒突击孙权大军，逍遥津退敌，孙权几不免。",
  "parties_note": "魏方叙张辽骁勇，吴方讳败。",
  "subject_names": {
   "person:zhangliao": "张辽",
   "person:sunquan": "孙权",
   "person:liudian": "李典"
  },
  "page": "xiaoyaojin.html",
  "key": "xiaoyaojin",
  "scene_id": "xiaoyaojin",
  "vocab_pack": "inline:xiaoyaojin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "逍遥津之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "魏方叙张辽骁勇，吴方讳败。"
  }
 ],
 "places": [
  {
   "id": "xiaoyaojin",
   "name": "逍遥津",
   "lon": 117.27,
   "lat": 31.86,
   "note": "今安徽合肥",
   "elev": 29
  },
  {
   "id": "hefei",
   "name": "合肥",
   "lon": 117.27,
   "lat": 31.86,
   "note": "魏边镇",
   "elev": 29
  },
  {
   "id": "ruxu",
   "name": "濡须",
   "lon": 117.6,
   "lat": 31.4,
   "note": "吴军口",
   "elev": 16
  },
  {
   "id": "chaisang",
   "name": "柴桑",
   "lon": 115.99,
   "lat": 29.71,
   "note": "孙权治",
   "elev": 20
  }
 ],
 "persons": [
  {
   "id": "zhangliao",
   "name": "张辽",
   "side": "魏",
   "influence": 2
  },
  {
   "id": "sunquan",
   "name": "孙权",
   "side": "吴",
   "influence": 1
  },
  {
   "id": "liudian",
   "name": "李典",
   "side": "魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xy_cao",
   "subject": "event:xy_cao",
   "predicate": "战事",
   "value_text": "曹操西征，留张辽守合肥。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 215,
    "end": 215,
    "era_text": "建安二十年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xy_zl",
   "subject": "event:xy_zl",
   "predicate": "战事",
   "value_text": "张辽率八百突击孙权营。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 215,
    "end": 215,
    "era_text": "建安二十年"
   },
   "place": "xiaoyaojin",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xy_jz",
   "subject": "event:xy_jz",
   "predicate": "战事",
   "value_text": "孙权攻合肥不克，退走。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 215,
    "end": 215,
    "era_text": "建安二十年"
   },
   "place": "xiaoyaojin",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M8",
   "subject": "event:xy_jz",
   "predicate": "爆发",
   "value_text": "孙权率十万众围合肥",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "孙权乘曹军西出，亲率十万众围合肥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "孙权攻合肥之战，以event:xy_jz为核心事件",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M8",
   "subject": "event:xy_jz",
   "predicate": "守军兵力",
   "value_text": "七千余人",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "留张辽、李典、乐进率七千余人守合肥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "曹军守合肥兵力",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M7",
   "subject": "event:xy_jz",
   "predicate": "攻城结果",
   "value_text": "攻城十余日不拔",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "攻城十余日不拔",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M8",
   "subject": "person:zhangliao",
   "predicate": "突袭",
   "value_text": "选八百死士突入孙权营垒",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "张辽选八百死士，清晨突入孙权营垒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M8",
   "subject": "person:zhangliao",
   "predicate": "追击",
   "value_text": "率步骑追至逍遥津",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "xiaoyaojin",
   "source": "synthesis",
   "quote": "张辽率步骑追至逍遥津",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M8",
   "subject": "person:sunquan",
   "predicate": "脱险",
   "value_text": "乘峻马越津得脱",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "xiaoyaojin",
   "source": "synthesis",
   "quote": "权乘峻马越津得脱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M7",
   "subject": "event:xy_jz",
   "predicate": "撤军原因",
   "value_text": "士卒疾疫",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "权围合肥十余日，士卒疾疫，撤军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M8",
   "subject": "event:xy_jz",
   "predicate": "结果",
   "value_text": "张辽威震逍遥津",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "xiaoyaojin",
   "source": "synthesis",
   "quote": "张辽威震逍遥津自此流传",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "战役结果与后续影响",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M8",
   "subject": "event:xy_jz",
   "predicate": "兵力对比",
   "value_text": "孙权十万不敌张辽数百死士",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "xiaoyaojin",
   "source": "synthesis",
   "quote": "此役孙权十万之众不敌张辽数百死士",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "原文为后世评价，非直接战报，故标inference",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M8",
   "subject": "place:hefei",
   "predicate": "战略地位",
   "value_text": "江东门户之要",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
   },
   "place": "hefei",
   "source": "synthesis",
   "quote": "亦可见合肥为江东门户之要",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "原文为后世评价，非直接战报，故标inference",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XIAOYAOJING01",
   "subject": "event:xy_jz",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "建安二十年",
    "start": "215-01-01",
    "end": "215-12-31",
    "gregorian_year": 215
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
  "XIAOYAOJING01"
 ],
 "events": [
  {
   "id": "ev_xy_cao",
   "subject": "event:xy_cao",
   "year": 215,
   "era": "建安二十年",
   "title": "曹征张鲁",
   "kind": "战事",
   "text": "曹操西征，留张辽守合肥。"
  },
  {
   "id": "ev_xy_zl",
   "subject": "event:xy_zl",
   "year": 215,
   "era": "建安二十年",
   "title": "张辽突阵",
   "kind": "战事",
   "text": "张辽率八百突击孙权营。",
   "place": "xiaoyaojin"
  },
  {
   "id": "ev_xy_jz",
   "subject": "event:xy_jz",
   "year": 215,
   "era": "建安二十年",
   "title": "吴退走",
   "kind": "战事",
   "text": "孙权攻合肥不克，退走。",
   "place": "xiaoyaojin"
  }
 ],
 "engagements": [
  {
   "id": "eng_xy_main",
   "name": "逍遥津突击",
   "at": "215-08",
   "era": "建安二十年八月",
   "place": "xiaoyaojin",
   "winner": "a",
   "outcome": "张辽晨袭孙权大营，直贯至麾下，吴军惊溃，攻城旬日不克而退。",
   "subject": "event:xy_jz",
   "sides": [
    {
     "side": "a",
     "commander": "张辽",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 80,
     "posture": "突阵",
     "commit_basis": "魏以寡兵趁吴立足未稳突击。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "孙权",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 120,
     "posture": "攻坚",
     "commit_basis": "吴军数万众攻孤城不克，遇袭自乱。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_xy_wei",
   "name": "魏守合肥",
   "side": "a",
   "nodes": [
    {
     "place": "hefei",
     "at": "215-01",
     "label": "张辽守城"
    },
    {
     "place": "xiaoyaojin",
     "at": "215-08",
     "label": "突阵"
    }
   ],
   "outcome": {
    "at": "215-08",
    "type": "victory",
    "text": "逍遥津退吴"
   }
  },
  {
   "id": "rt_xy_wu",
   "name": "吴军北上",
   "side": "b",
   "nodes": [
    {
     "place": "chaisang",
     "at": "215-07",
     "label": "孙权起兵"
    },
    {
     "place": "ruxu",
     "at": "215-08",
     "label": "北上"
    },
    {
     "place": "xiaoyaojin",
     "at": "215-08",
     "label": "攻合肥"
    }
   ],
   "outcome": {
    "at": "215-08",
    "type": "defeat",
    "text": "吴攻合肥不克退走"
   }
  }
 ],
 "timeline": [
  {
   "at": "215-07",
   "era": "建安二十年",
   "label": "孙权攻合肥",
   "key": false
  },
  {
   "at": "215-08",
   "era": "八月",
   "label": "张辽突阵",
   "key": true
  },
  {
   "at": "215-08",
   "era": "八月",
   "label": "吴退走",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "215-08",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "215-08",
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
   "魏军",
   "吴军",
   "综合史料"
  ],
  "party_bucket": {
   "魏军": "魏军",
   "吴军": "吴军",
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
     "label": "魏军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "吴军胜",
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
     "label": "魏军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "吴军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
