// 本文件由 tools/build.py 自动生成（切片 maling），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["maling"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["maling"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "马陵之战",
  "dossier_label": "马陵之战",
  "subtitle": "周显王二十八—二十九年（前341—前340）· 齐 vs 魏",
  "primary_place": "maling",
  "dossier_event": "event:ml_wei",
  "terrain_grid": "china_coarse",
  "lead": "齐魏马陵道，孙膑减灶诱庞涓轻进，伏弩尽杀魏军，庞涓死、太子申虏。",
  "parties_note": "齐方叙谋略，魏方讳败。",
  "subject_names": {
   "person:sunbin": "孙膑",
   "person:pangjuan": "庞涓",
   "person:tianji": "田忌"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
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
    "note": "马陵之战：朝堂凝聚力——“避实击虚”“攻其无备”，桂陵、马陵连续示弱设伏的兵学范例"
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
    "note": "马陵之战：后勤物力——道狭，齐军万弩伏发"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "马陵之战：人口动员——齐威王遣田忌、孙膑救韩；三晋（魏赵韩）内耗，诸侯离心"
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
    "note": "马陵之战：地缘战略——魏攻韩"
   }
  },
  "province": "shandong",
  "page": "maling.html",
  "key": "maling",
  "scene_id": "maling",
  "vocab_pack": "inline:maling"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "马陵之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "齐方叙谋略，魏方讳败。",
   "distance_label": "综合诸家记述（非单一典籍；各场景具体来源见 stance_label）"
  }
 ],
 "places": [
  {
   "id": "maling",
   "name": "马陵",
   "lon": 115.66,
   "lat": 36.24,
   "note": "今山东莘县马陵道",
   "elev": 38
  },
  {
   "id": "daliang",
   "name": "大梁",
   "lon": 114.3,
   "lat": 34.8,
   "note": "魏都",
   "elev": 76
  },
  {
   "id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "note": "齐都",
   "elev": 70
  },
  {
   "id": "xiang",
   "name": "大梁郊",
   "lon": 114.3,
   "lat": 34.8,
   "note": "魏军出境",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "sunbin",
   "name": "孙膑",
   "side": "齐",
   "influence": 1
  },
  {
   "id": "pangjuan",
   "name": "庞涓",
   "side": "魏",
   "influence": 3
  },
  {
   "id": "tianji",
   "name": "田忌",
   "side": "齐",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ml_wei",
   "subject": "event:ml_wei",
   "predicate": "战事",
   "value_text": "魏攻韩，韩请救于齐。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -341,
    "end": -341,
    "era_text": "周显王二十八年"
   },
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ml_qi",
   "subject": "event:ml_qi",
   "predicate": "战事",
   "value_text": "孙膑减灶诱敌。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -340,
    "end": -340,
    "era_text": "周显王二十九年"
   },
   "place": "maling",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ml_jz",
   "subject": "event:ml_jz",
   "predicate": "战事",
   "value_text": "庞涓夜追中伏，魏军溃，庞涓死。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -340,
    "end": -340,
    "era_text": "周显王二十九年"
   },
   "place": "maling",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M7",
   "subject": "event:ml_wei",
   "predicate": "爆发",
   "value_text": "魏攻韩",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元前342年魏攻韩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M7",
   "subject": "event:ml_wei",
   "predicate": "求救",
   "value_text": "韩求救于齐",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "韩求救于齐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M6",
   "subject": "person:tianji",
   "predicate": "受命",
   "value_text": "齐威王使田忌、孙膑救韩",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "齐威王使田忌、孙膑救韩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M7",
   "subject": "event:ml_wei",
   "predicate": "策略",
   "value_text": "围魏救韩直趋大梁",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "daliang",
   "source": "synthesis",
   "quote": "复行「围魏救韩」直趋大梁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M7",
   "subject": "person:pangjuan",
   "predicate": "回师",
   "value_text": "庞涓回师",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "庞涓回师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M7",
   "subject": "person:sunbin",
   "predicate": "用计",
   "value_text": "减灶诱敌，逐日减灶伪示兵减",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "孙膑用减灶诱敌，逐日减灶伪示兵减",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M6",
   "subject": "person:pangjuan",
   "predicate": "追击",
   "value_text": "轻骑追击至马陵",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "maling",
   "source": "synthesis",
   "quote": "庞涓轻骑追击至马陵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M7",
   "subject": "event:ml_jz",
   "predicate": "伏击",
   "value_text": "道狭，齐军万弩伏发",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "maling",
   "source": "synthesis",
   "quote": "道狭，齐军万弩伏发",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
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
   "id": "SX009_M7",
   "subject": "person:pangjuan",
   "predicate": "阵亡",
   "value_text": "庞涓自杀",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "maling",
   "source": "synthesis",
   "quote": "庞涓自杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M7",
   "subject": "event:ml_jz",
   "predicate": "俘虏",
   "value_text": "太子申被俘",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "maling",
   "source": "synthesis",
   "quote": "太子申被俘",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M7",
   "subject": "event:ml_jz",
   "predicate": "结果",
   "value_text": "魏军全歼，魏势大衰",
   "time": {
    "era_text": "公元前342年",
    "start": "-342-01-01",
    "end": "-342-12-31",
    "gregorian_year": -342
   },
   "place": "",
   "source": "synthesis",
   "quote": "魏军全歼，魏势大衰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "无年号纪年，仅公元纪年，待核验",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "MALINGG01",
   "subject": "event:ml_jz",
   "predicate": "叙事缺环",
   "value_text": "此战纪年与细节诸书互歧，现存叙述多据后世胜者所修史书，敌方视角的兵力、伤亡与动机常缺。",
   "time": {
    "era_text": "周显王二十八年",
    "start": "-341-01-01",
    "end": "-341-12-31",
    "gregorian_year": -341
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
   "id": "MALING_THK1",
   "subject": "event:ml_wei",
   "predicate": "运动调动",
   "value_text": "魏以太子申、庞涓将主力攻韩；“围魏救赵”后再“围魏救韩”，调动敌军",
   "time": {
    "start": -341,
    "end": -341,
    "era_text": "周显王二十八年"
   },
   "place": "",
   "source": "synthesis",
   "quote": "围魏救韩",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "运动战调动",
   "dims": [
    3
   ],
   "dim_source": "inferred",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "MALING_THK2",
   "subject": "event:ml_wei",
   "predicate": "三晋内耗",
   "value_text": "齐威王遣田忌、孙膑救韩；三晋（魏赵韩）内耗，诸侯离心",
   "time": {
    "start": -341,
    "end": -341,
    "era_text": "周显王二十八年"
   },
   "place": "",
   "source": "synthesis",
   "quote": "三晋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "三晋格局",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "MALING_THK3",
   "subject": "event:ml_wei",
   "predicate": "兵学范例",
   "value_text": "“避实击虚”“攻其无备”，桂陵、马陵连续示弱设伏的兵学范例",
   "time": {
    "start": -341,
    "end": -341,
    "era_text": "周显王二十八年"
   },
   "place": "",
   "source": "synthesis",
   "quote": "避实击虚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "兵学",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "MALINGG01"
 ],
 "events": [
  {
   "id": "ev_ml_wei",
   "subject": "event:ml_wei",
   "year": -341,
   "era": "周显王二十八年",
   "title": "魏攻韩",
   "kind": "战事",
   "text": "魏攻韩，韩请救于齐。"
  },
  {
   "id": "ev_ml_qi",
   "subject": "event:ml_qi",
   "year": -340,
   "era": "周显王二十九年",
   "title": "齐救韩伐魏",
   "kind": "战事",
   "text": "孙膑减灶诱敌。",
   "place": "maling"
  },
  {
   "id": "ev_ml_jz",
   "subject": "event:ml_jz",
   "year": -340,
   "era": "周显王二十九年",
   "title": "马陵伏击",
   "kind": "战事",
   "text": "庞涓夜追中伏，魏军溃，庞涓死。",
   "place": "maling"
  }
 ],
 "engagements": [
  {
   "id": "eng_ml_main",
   "name": "马陵伏击",
   "at": "B340-03",
   "era": "周显王二十九年三月",
   "place": "maling",
   "winner": "a",
   "outcome": "孙膑逐日减灶示弱，庞涓弃步军轻骑夜追，入马陵道伏弩齐发，魏军尽没。",
   "subject": "event:ml_jz",
   "sides": [
    {
     "side": "a",
     "commander": "田忌/孙膑",
     "committed_ratio": 0.6,
     "fatigue": "fresh",
     "march_72h_li": 220,
     "posture": "设伏",
     "commit_basis": "齐军据险待敌，弩手密布隘道。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "庞涓",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 260,
     "posture": "轻进",
     "commit_basis": "魏军轻骑冒进，入伏无援。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_ml_qi",
   "name": "齐军诱敌",
   "side": "a",
   "nodes": [
    {
     "place": "linzi",
     "at": "B340-01",
     "label": "齐起兵救韩"
    },
    {
     "place": "maling",
     "at": "B340-03",
     "label": "减灶设伏"
    }
   ],
   "outcome": {
    "at": "B340-03",
    "type": "victory",
    "text": "齐减灶诱敌，马陵破魏"
   }
  },
  {
   "id": "rt_ml_wei",
   "name": "魏军轻进",
   "side": "b",
   "nodes": [
    {
     "place": "xiang",
     "at": "B340-01",
     "label": "魏攻韩"
    },
    {
     "place": "maling",
     "at": "B340-03",
     "label": "轻骑夜追"
    }
   ],
   "outcome": {
    "at": "B340-02",
    "type": "defeat",
    "text": "庞涓弃大军轻进中伏"
   }
  }
 ],
 "timeline": [
  {
   "at": "B341-01",
   "era": "周显王二十八年",
   "label": "魏攻韩",
   "key": false
  },
  {
   "at": "B340-01",
   "era": "二十九年",
   "label": "齐救韩",
   "key": false
  },
  {
   "at": "B340-03",
   "era": "三月",
   "label": "马陵伏击·庞涓死",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B340-03",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B340-03",
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
   "齐军",
   "魏军",
   "综合史料"
  ],
  "party_bucket": {
   "齐军": "齐军",
   "魏军": "魏军",
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
     "label": "齐军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "魏军胜",
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
     "label": "齐军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "魏军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.05,
        37.242
       ],
       [
        118.998,
        37.277
       ],
       [
        118.953,
        37.331
       ],
       [
        118.955,
        37.494
       ],
       [
        118.991,
        37.641
       ],
       [
        119.033,
        37.661
       ],
       [
        119.05,
        37.673
       ],
       [
        119.05,
        37.766
       ],
       [
        119.038,
        37.777
       ],
       [
        119.036,
        37.809
       ],
       [
        119.036,
        37.81
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        113.3,
        33.8
       ],
       [
        113.3,
        37.81
       ],
       [
        119.036,
        37.81
       ],
       [
        119.036,
        37.809
       ],
       [
        119.038,
        37.777
       ],
       [
        119.05,
        37.766
       ],
       [
        119.05,
        37.673
       ],
       [
        119.033,
        37.661
       ],
       [
        118.991,
        37.641
       ],
       [
        118.955,
        37.494
       ],
       [
        118.953,
        37.331
       ],
       [
        118.998,
        37.277
       ],
       [
        119.05,
        37.242
       ],
       [
        119.05,
        33.8
       ],
       [
        113.3,
        33.8
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
         114.009,
         37.81
        ],
        [
         114.045,
         37.762
        ],
        [
         113.997,
         37.73
        ],
        [
         113.994,
         37.707
        ],
        [
         114.068,
         37.722
        ],
        [
         114.128,
         37.698
        ],
        [
         114.14,
         37.676
        ],
        [
         114.116,
         37.62
        ],
        [
         114.119,
         37.591
        ],
        [
         114.037,
         37.494
        ],
        [
         114.015,
         37.425
        ],
        [
         113.974,
         37.403
        ],
        [
         113.963,
         37.356
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
        ],
        [
         113.832,
         37.168
        ],
        [
         113.773,
         37.152
        ],
        [
         113.774,
         37.107
        ],
        [
         113.758,
         37.075
        ],
        [
         113.788,
         37.06
        ],
        [
         113.772,
         37.017
        ],
        [
         113.792,
         36.988
        ],
        [
         113.761,
         36.956
        ],
        [
         113.793,
         36.895
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.859
        ],
        [
         113.732,
         36.879
        ],
        [
         113.697,
         36.882
        ],
        [
         113.676,
         36.856
        ],
        [
         113.681,
         36.79
        ],
        [
         113.6,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.57,
         36.586
        ],
        [
         113.589,
         36.548
        ],
        [
         113.56,
         36.529
        ],
        [
         113.554,
         36.495
        ],
        [
         113.587,
         36.461
        ],
        [
         113.636,
         36.451
        ],
        [
         113.67,
         36.425
        ],
        [
         113.708,
         36.423
        ],
        [
         113.731,
         36.363
        ],
        [
         113.755,
         36.366
        ],
        [
         113.813,
         36.332
        ],
        [
         113.857,
         36.329
        ],
        [
         113.849,
         36.348
        ],
        [
         113.882,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.963,
         36.354
        ],
        [
         113.982,
         36.318
        ],
        [
         114.003,
         36.334
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.712,
         36.883
        ],
        [
         115.758,
         36.902
        ],
        [
         115.797,
         36.969
        ],
        [
         115.777,
         36.993
        ],
        [
         115.856,
         37.061
        ],
        [
         115.888,
         37.112
        ],
        [
         115.88,
         37.151
        ],
        [
         115.912,
         37.177
        ],
        [
         115.91,
         37.207
        ],
        [
         115.97,
         37.24
        ],
        [
         115.976,
         37.337
        ],
        [
         116.024,
         37.36
        ],
        [
         116.086,
         37.374
        ],
        [
         116.106,
         37.369
        ],
        [
         116.169,
         37.384
        ],
        [
         116.193,
         37.366
        ],
        [
         116.236,
         37.361
        ],
        [
         116.285,
         37.404
        ],
        [
         116.226,
         37.428
        ],
        [
         116.243,
         37.448
        ],
        [
         116.225,
         37.48
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.276,
         37.467
        ],
        [
         116.29,
         37.484
        ],
        [
         116.279,
         37.525
        ],
        [
         116.295,
         37.554
        ],
        [
         116.336,
         37.581
        ],
        [
         116.367,
         37.566
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.434,
         37.473
        ],
        [
         116.448,
         37.503
        ],
        [
         116.483,
         37.522
        ],
        [
         116.576,
         37.611
        ],
        [
         116.605,
         37.625
        ],
        [
         116.663,
         37.686
        ],
        [
         116.679,
         37.729
        ],
        [
         116.725,
         37.744
        ],
        [
         116.754,
         37.77
        ],
        [
         116.754,
         37.793
        ],
        [
         116.769,
         37.81
        ],
        [
         114.009,
         37.81
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
         113.3,
         37.81
        ],
        [
         113.3,
         35.429
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.638,
         35.87
        ],
        [
         113.654,
         35.932
        ],
        [
         113.649,
         35.994
        ],
        [
         113.679,
         35.986
        ],
        [
         113.695,
         36.027
        ],
        [
         113.66,
         36.035
        ],
        [
         113.686,
         36.056
        ],
        [
         113.671,
         36.116
        ],
        [
         113.655,
         36.125
        ],
        [
         113.713,
         36.13
        ],
        [
         113.706,
         36.149
        ],
        [
         113.651,
         36.174
        ],
        [
         113.698,
         36.182
        ],
        [
         113.682,
         36.216
        ],
        [
         113.716,
         36.262
        ],
        [
         113.712,
         36.303
        ],
        [
         113.736,
         36.325
        ],
        [
         113.731,
         36.363
        ],
        [
         113.708,
         36.423
        ],
        [
         113.67,
         36.425
        ],
        [
         113.636,
         36.451
        ],
        [
         113.587,
         36.461
        ],
        [
         113.554,
         36.495
        ],
        [
         113.56,
         36.529
        ],
        [
         113.589,
         36.548
        ],
        [
         113.57,
         36.586
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.6,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.676,
         36.856
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.879
        ],
        [
         113.732,
         36.859
        ],
        [
         113.773,
         36.855
        ],
        [
         113.793,
         36.895
        ],
        [
         113.761,
         36.956
        ],
        [
         113.792,
         36.988
        ],
        [
         113.772,
         37.017
        ],
        [
         113.788,
         37.06
        ],
        [
         113.758,
         37.075
        ],
        [
         113.774,
         37.107
        ],
        [
         113.773,
         37.152
        ],
        [
         113.832,
         37.168
        ],
        [
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.963,
         37.356
        ],
        [
         113.974,
         37.403
        ],
        [
         114.015,
         37.425
        ],
        [
         114.037,
         37.494
        ],
        [
         114.119,
         37.591
        ],
        [
         114.116,
         37.62
        ],
        [
         114.14,
         37.676
        ],
        [
         114.128,
         37.698
        ],
        [
         114.068,
         37.722
        ],
        [
         113.994,
         37.707
        ],
        [
         113.997,
         37.73
        ],
        [
         114.045,
         37.762
        ],
        [
         114.009,
         37.81
        ],
        [
         113.3,
         37.81
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.312,
         34.562
        ],
        [
         117.273,
         34.557
        ],
        [
         117.304,
         34.542
        ],
        [
         117.268,
         34.533
        ],
        [
         117.273,
         34.5
        ],
        [
         117.253,
         34.487
        ],
        [
         117.248,
         34.451
        ],
        [
         117.166,
         34.434
        ],
        [
         117.139,
         34.527
        ],
        [
         117.152,
         34.559
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
         116.491,
         34.574
        ],
        [
         116.594,
         34.512
        ],
        [
         116.592,
         34.494
        ],
        [
         116.662,
         34.473
        ],
        [
         116.723,
         34.472
        ],
        [
         116.774,
         34.454
        ],
        [
         116.783,
         34.43
        ],
        [
         116.828,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.969,
         34.389
        ],
        [
         116.961,
         34.364
        ],
        [
         116.983,
         34.348
        ],
        [
         116.969,
         34.284
        ],
        [
         117.051,
         34.221
        ],
        [
         117.025,
         34.167
        ],
        [
         117.047,
         34.152
        ],
        [
         117.124,
         34.128
        ],
        [
         117.131,
         34.102
        ],
        [
         117.192,
         34.069
        ],
        [
         117.257,
         34.066
        ],
        [
         117.277,
         34.079
        ],
        [
         117.312,
         34.068
        ],
        [
         117.357,
         34.088
        ],
        [
         117.404,
         34.032
        ],
        [
         117.435,
         34.028
        ],
        [
         117.515,
         34.061
        ],
        [
         117.543,
         34.039
        ],
        [
         117.569,
         33.985
        ],
        [
         117.613,
         34.0
        ],
        [
         117.629,
         34.029
        ],
        [
         117.671,
         33.992
        ],
        [
         117.673,
         33.935
        ],
        [
         117.715,
         33.879
        ],
        [
         117.754,
         33.891
        ],
        [
         117.759,
         33.874
        ],
        [
         117.747,
         33.8
        ],
        [
         119.05,
         33.8
        ],
        [
         119.05,
         35.055
        ],
        [
         119.027,
         35.056
        ],
        [
         118.943,
         35.041
        ],
        [
         118.928,
         35.051
        ],
        [
         118.863,
         35.026
        ],
        [
         118.861,
         34.944
        ],
        [
         118.805,
         34.873
        ],
        [
         118.8,
         34.843
        ],
        [
         118.772,
         34.794
        ],
        [
         118.739,
         34.793
        ],
        [
         118.719,
         34.745
        ],
        [
         118.764,
         34.74
        ],
        [
         118.784,
         34.723
        ],
        [
         118.739,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.664,
         34.694
        ],
        [
         118.608,
         34.694
        ],
        [
         118.601,
         34.714
        ],
        [
         118.546,
         34.706
        ],
        [
         118.461,
         34.656
        ],
        [
         118.474,
         34.623
        ],
        [
         118.439,
         34.626
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.508
        ],
        [
         118.416,
         34.474
        ],
        [
         118.405,
         34.428
        ],
        [
         118.38,
         34.415
        ],
        [
         118.29,
         34.425
        ],
        [
         118.277,
         34.405
        ],
        [
         118.22,
         34.406
        ],
        [
         118.218,
         34.379
        ],
        [
         118.18,
         34.38
        ],
        [
         118.178,
         34.453
        ],
        [
         118.133,
         34.483
        ],
        [
         118.165,
         34.505
        ],
        [
         118.185,
         34.544
        ],
        [
         118.079,
         34.57
        ],
        [
         118.115,
         34.614
        ],
        [
         118.084,
         34.656
        ],
        [
         118.054,
         34.651
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
         117.791,
         34.583
        ],
        [
         117.802,
         34.519
        ],
        [
         117.684,
         34.547
        ],
        [
         117.659,
         34.501
        ],
        [
         117.61,
         34.491
        ],
        [
         117.593,
         34.463
        ],
        [
         117.538,
         34.467
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.551
        ],
        [
         117.403,
         34.57
        ],
        [
         117.371,
         34.585
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
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
         116.6,
         34.014
        ],
        [
         116.642,
         33.978
        ],
        [
         116.643,
         33.897
        ],
        [
         116.631,
         33.888
        ],
        [
         116.567,
         33.908
        ],
        [
         116.558,
         33.881
        ],
        [
         116.486,
         33.87
        ],
        [
         116.438,
         33.846
        ],
        [
         116.437,
         33.801
        ],
        [
         116.408,
         33.806
        ],
        [
         116.405,
         33.8
        ],
        [
         116.059,
         33.8
        ],
        [
         116.056,
         33.805
        ],
        [
         116.059,
         33.861
        ],
        [
         115.982,
         33.917
        ],
        [
         116.0,
         33.965
        ],
        [
         115.958,
         34.008
        ],
        [
         115.904,
         34.01
        ],
        [
         115.877,
         34.029
        ],
        [
         115.877,
         34.003
        ],
        [
         115.85,
         34.005
        ],
        [
         115.846,
         34.029
        ],
        [
         115.809,
         34.062
        ],
        [
         115.769,
         34.062
        ],
        [
         115.736,
         34.077
        ],
        [
         115.706,
         34.06
        ],
        [
         115.658,
         34.061
        ],
        [
         115.642,
         34.032
        ],
        [
         115.607,
         34.03
        ],
        [
         115.579,
         33.974
        ],
        [
         115.578,
         33.95
        ],
        [
         115.548,
         33.875
        ],
        [
         115.632,
         33.87
        ],
        [
         115.619,
         33.8
        ],
        [
         117.747,
         33.8
        ],
        [
         117.759,
         33.874
        ],
        [
         117.754,
         33.891
        ],
        [
         117.715,
         33.879
        ],
        [
         117.673,
         33.935
        ],
        [
         117.671,
         33.992
        ],
        [
         117.629,
         34.029
        ],
        [
         117.613,
         34.0
        ],
        [
         117.569,
         33.985
        ],
        [
         117.543,
         34.039
        ],
        [
         117.515,
         34.061
        ],
        [
         117.435,
         34.028
        ],
        [
         117.404,
         34.032
        ],
        [
         117.357,
         34.088
        ],
        [
         117.312,
         34.068
        ],
        [
         117.277,
         34.079
        ],
        [
         117.257,
         34.066
        ],
        [
         117.192,
         34.069
        ],
        [
         117.131,
         34.102
        ],
        [
         117.124,
         34.128
        ],
        [
         117.047,
         34.152
        ],
        [
         117.025,
         34.167
        ],
        [
         117.051,
         34.221
        ],
        [
         116.969,
         34.284
        ],
        [
         116.983,
         34.348
        ],
        [
         116.961,
         34.364
        ],
        [
         116.969,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.828,
         34.389
        ],
        [
         116.783,
         34.43
        ],
        [
         116.774,
         34.454
        ],
        [
         116.723,
         34.472
        ],
        [
         116.662,
         34.473
        ],
        [
         116.592,
         34.494
        ],
        [
         116.594,
         34.512
        ],
        [
         116.491,
         34.574
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
         116.248,
         34.552
        ],
        [
         116.197,
         34.576
        ],
        [
         116.191,
         34.536
        ],
        [
         116.204,
         34.508
        ],
        [
         116.178,
         34.496
        ],
        [
         116.162,
         34.46
        ],
        [
         116.179,
         34.43
        ],
        [
         116.216,
         34.403
        ],
        [
         116.213,
         34.382
        ],
        [
         116.256,
         34.377
        ],
        [
         116.302,
         34.342
        ],
        [
         116.358,
         34.32
        ],
        [
         116.372,
         34.266
        ],
        [
         116.409,
         34.274
        ],
        [
         116.409,
         34.274
        ],
        [
         116.457,
         34.269
        ],
        [
         116.516,
         34.296
        ],
        [
         116.562,
         34.286
        ],
        [
         116.582,
         34.266
        ],
        [
         116.545,
         34.242
        ],
        [
         116.543,
         34.204
        ],
        [
         116.566,
         34.169
        ],
        [
         116.536,
         34.151
        ],
        [
         116.528,
         34.123
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
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
         117.152,
         34.559
        ],
        [
         117.139,
         34.527
        ],
        [
         117.166,
         34.434
        ],
        [
         117.248,
         34.451
        ],
        [
         117.253,
         34.487
        ],
        [
         117.273,
         34.5
        ],
        [
         117.268,
         34.533
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.557
        ],
        [
         117.312,
         34.562
        ],
        [
         117.312,
         34.562
        ],
        [
         117.322,
         34.567
        ],
        [
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
        ],
        [
         117.325,
         34.573
        ],
        [
         117.371,
         34.585
        ],
        [
         117.403,
         34.57
        ],
        [
         117.403,
         34.551
        ],
        [
         117.465,
         34.485
        ],
        [
         117.538,
         34.467
        ],
        [
         117.593,
         34.463
        ],
        [
         117.61,
         34.491
        ],
        [
         117.659,
         34.501
        ],
        [
         117.684,
         34.547
        ],
        [
         117.802,
         34.519
        ],
        [
         117.791,
         34.583
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
         118.054,
         34.651
        ],
        [
         118.084,
         34.656
        ],
        [
         118.115,
         34.614
        ],
        [
         118.079,
         34.57
        ],
        [
         118.185,
         34.544
        ],
        [
         118.165,
         34.505
        ],
        [
         118.133,
         34.483
        ],
        [
         118.178,
         34.453
        ],
        [
         118.18,
         34.38
        ],
        [
         118.218,
         34.379
        ],
        [
         118.22,
         34.406
        ],
        [
         118.277,
         34.405
        ],
        [
         118.29,
         34.425
        ],
        [
         118.38,
         34.415
        ],
        [
         118.405,
         34.428
        ],
        [
         118.416,
         34.474
        ],
        [
         118.439,
         34.508
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.626
        ],
        [
         118.474,
         34.623
        ],
        [
         118.461,
         34.656
        ],
        [
         118.546,
         34.706
        ],
        [
         118.601,
         34.714
        ],
        [
         118.608,
         34.694
        ],
        [
         118.664,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.739,
         34.694
        ],
        [
         118.784,
         34.723
        ],
        [
         118.764,
         34.74
        ],
        [
         118.719,
         34.745
        ],
        [
         118.739,
         34.793
        ],
        [
         118.772,
         34.794
        ],
        [
         118.8,
         34.843
        ],
        [
         118.805,
         34.873
        ],
        [
         118.861,
         34.944
        ],
        [
         118.863,
         35.026
        ],
        [
         118.928,
         35.051
        ],
        [
         118.943,
         35.041
        ],
        [
         119.027,
         35.056
        ],
        [
         119.05,
         35.055
        ],
        [
         119.05,
         37.269
        ],
        [
         119.04,
         37.304
        ],
        [
         119.001,
         37.319
        ],
        [
         118.943,
         37.497
        ],
        [
         118.94,
         37.527
        ],
        [
         118.989,
         37.621
        ],
        [
         119.024,
         37.642
        ],
        [
         119.05,
         37.645
        ],
        [
         119.05,
         37.81
        ],
        [
         116.769,
         37.81
        ],
        [
         116.754,
         37.793
        ],
        [
         116.754,
         37.77
        ],
        [
         116.725,
         37.744
        ],
        [
         116.679,
         37.729
        ],
        [
         116.663,
         37.686
        ],
        [
         116.605,
         37.625
        ],
        [
         116.576,
         37.611
        ],
        [
         116.483,
         37.522
        ],
        [
         116.448,
         37.503
        ],
        [
         116.434,
         37.473
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.381,
         37.523
        ],
        [
         116.38,
         37.522
        ],
        [
         116.367,
         37.566
        ],
        [
         116.336,
         37.581
        ],
        [
         116.295,
         37.554
        ],
        [
         116.279,
         37.525
        ],
        [
         116.29,
         37.484
        ],
        [
         116.276,
         37.467
        ],
        [
         116.241,
         37.49
        ],
        [
         116.241,
         37.49
        ],
        [
         116.225,
         37.48
        ],
        [
         116.243,
         37.448
        ],
        [
         116.226,
         37.428
        ],
        [
         116.285,
         37.404
        ],
        [
         116.236,
         37.361
        ],
        [
         116.193,
         37.366
        ],
        [
         116.169,
         37.384
        ],
        [
         116.106,
         37.369
        ],
        [
         116.086,
         37.374
        ],
        [
         116.024,
         37.36
        ],
        [
         115.976,
         37.337
        ],
        [
         115.97,
         37.24
        ],
        [
         115.91,
         37.207
        ],
        [
         115.912,
         37.177
        ],
        [
         115.88,
         37.151
        ],
        [
         115.888,
         37.112
        ],
        [
         115.856,
         37.061
        ],
        [
         115.777,
         36.993
        ],
        [
         115.797,
         36.969
        ],
        [
         115.758,
         36.902
        ],
        [
         115.712,
         36.883
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.335,
         35.797
        ],
        [
         115.363,
         35.78
        ],
        [
         115.408,
         35.809
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.495,
         35.896
        ],
        [
         115.505,
         35.899
        ],
        [
         115.513,
         35.89
        ],
        [
         115.584,
         35.922
        ],
        [
         115.649,
         35.923
        ],
        [
         115.699,
         35.966
        ],
        [
         115.775,
         35.975
        ],
        [
         115.78,
         35.994
        ],
        [
         115.817,
         36.013
        ],
        [
         115.86,
         36.004
        ],
        [
         115.899,
         36.027
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
         115.912,
         35.96
        ],
        [
         115.908,
         35.927
        ],
        [
         115.873,
         35.919
        ],
        [
         115.883,
         35.88
        ],
        [
         115.86,
         35.858
        ],
        [
         115.817,
         35.844
        ],
        [
         115.774,
         35.854
        ],
        [
         115.735,
         35.833
        ],
        [
         115.696,
         35.789
        ],
        [
         115.694,
         35.754
        ],
        [
         115.623,
         35.739
        ],
        [
         115.529,
         35.734
        ],
        [
         115.486,
         35.71
        ],
        [
         115.383,
         35.569
        ],
        [
         115.345,
         35.554
        ],
        [
         115.356,
         35.49
        ],
        [
         115.307,
         35.48
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.317,
         34.859
        ],
        [
         115.427,
         34.805
        ],
        [
         115.449,
         34.744
        ],
        [
         115.434,
         34.725
        ],
        [
         115.461,
         34.637
        ],
        [
         115.516,
         34.582
        ],
        [
         115.553,
         34.569
        ],
        [
         115.623,
         34.574
        ],
        [
         115.686,
         34.556
        ],
        [
         115.697,
         34.594
        ],
        [
         115.788,
         34.581
        ],
        [
         115.827,
         34.558
        ],
        [
         115.838,
         34.568
        ],
        [
         115.984,
         34.589
        ],
        [
         115.991,
         34.615
        ],
        [
         116.037,
         34.593
        ],
        [
         116.101,
         34.606
        ],
        [
         116.135,
         34.56
        ],
        [
         116.157,
         34.554
        ],
        [
         116.197,
         34.576
        ],
        [
         116.248,
         34.552
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
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.488,
         35.881
        ],
        [
         115.513,
         35.89
        ],
        [
         115.505,
         35.899
        ],
        [
         115.495,
         35.896
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
         113.3,
         33.8
        ],
        [
         115.619,
         33.8
        ],
        [
         115.632,
         33.87
        ],
        [
         115.548,
         33.875
        ],
        [
         115.578,
         33.95
        ],
        [
         115.579,
         33.974
        ],
        [
         115.607,
         34.03
        ],
        [
         115.642,
         34.032
        ],
        [
         115.658,
         34.061
        ],
        [
         115.706,
         34.06
        ],
        [
         115.736,
         34.077
        ],
        [
         115.769,
         34.062
        ],
        [
         115.809,
         34.062
        ],
        [
         115.846,
         34.029
        ],
        [
         115.85,
         34.005
        ],
        [
         115.877,
         34.003
        ],
        [
         115.877,
         34.029
        ],
        [
         115.904,
         34.01
        ],
        [
         115.958,
         34.008
        ],
        [
         116.0,
         33.965
        ],
        [
         115.982,
         33.917
        ],
        [
         116.059,
         33.861
        ],
        [
         116.056,
         33.805
        ],
        [
         116.059,
         33.8
        ],
        [
         116.405,
         33.8
        ],
        [
         116.408,
         33.806
        ],
        [
         116.437,
         33.801
        ],
        [
         116.438,
         33.846
        ],
        [
         116.486,
         33.87
        ],
        [
         116.558,
         33.881
        ],
        [
         116.567,
         33.908
        ],
        [
         116.631,
         33.888
        ],
        [
         116.643,
         33.897
        ],
        [
         116.642,
         33.978
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.528,
         34.123
        ],
        [
         116.536,
         34.151
        ],
        [
         116.566,
         34.169
        ],
        [
         116.543,
         34.204
        ],
        [
         116.545,
         34.242
        ],
        [
         116.582,
         34.266
        ],
        [
         116.562,
         34.286
        ],
        [
         116.516,
         34.296
        ],
        [
         116.457,
         34.269
        ],
        [
         116.409,
         34.274
        ],
        [
         116.409,
         34.274
        ],
        [
         116.372,
         34.266
        ],
        [
         116.358,
         34.32
        ],
        [
         116.302,
         34.342
        ],
        [
         116.256,
         34.377
        ],
        [
         116.213,
         34.382
        ],
        [
         116.216,
         34.403
        ],
        [
         116.179,
         34.43
        ],
        [
         116.162,
         34.46
        ],
        [
         116.178,
         34.496
        ],
        [
         116.204,
         34.508
        ],
        [
         116.191,
         34.536
        ],
        [
         116.197,
         34.576
        ],
        [
         116.157,
         34.554
        ],
        [
         116.135,
         34.56
        ],
        [
         116.101,
         34.606
        ],
        [
         116.037,
         34.593
        ],
        [
         115.991,
         34.615
        ],
        [
         115.984,
         34.589
        ],
        [
         115.838,
         34.568
        ],
        [
         115.827,
         34.558
        ],
        [
         115.788,
         34.581
        ],
        [
         115.697,
         34.594
        ],
        [
         115.686,
         34.556
        ],
        [
         115.623,
         34.574
        ],
        [
         115.553,
         34.569
        ],
        [
         115.516,
         34.582
        ],
        [
         115.461,
         34.637
        ],
        [
         115.434,
         34.725
        ],
        [
         115.449,
         34.744
        ],
        [
         115.427,
         34.805
        ],
        [
         115.317,
         34.859
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.307,
         35.48
        ],
        [
         115.356,
         35.49
        ],
        [
         115.345,
         35.554
        ],
        [
         115.383,
         35.569
        ],
        [
         115.486,
         35.71
        ],
        [
         115.529,
         35.734
        ],
        [
         115.623,
         35.739
        ],
        [
         115.694,
         35.754
        ],
        [
         115.696,
         35.789
        ],
        [
         115.735,
         35.833
        ],
        [
         115.774,
         35.854
        ],
        [
         115.817,
         35.844
        ],
        [
         115.86,
         35.858
        ],
        [
         115.883,
         35.88
        ],
        [
         115.873,
         35.919
        ],
        [
         115.908,
         35.927
        ],
        [
         115.912,
         35.96
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
         115.899,
         36.027
        ],
        [
         115.86,
         36.004
        ],
        [
         115.817,
         36.013
        ],
        [
         115.78,
         35.994
        ],
        [
         115.775,
         35.975
        ],
        [
         115.699,
         35.966
        ],
        [
         115.649,
         35.923
        ],
        [
         115.584,
         35.922
        ],
        [
         115.513,
         35.89
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.408,
         35.809
        ],
        [
         115.363,
         35.78
        ],
        [
         115.335,
         35.797
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.003,
         36.334
        ],
        [
         113.982,
         36.318
        ],
        [
         113.963,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.882,
         36.354
        ],
        [
         113.849,
         36.348
        ],
        [
         113.857,
         36.329
        ],
        [
         113.813,
         36.332
        ],
        [
         113.755,
         36.366
        ],
        [
         113.731,
         36.363
        ],
        [
         113.736,
         36.325
        ],
        [
         113.712,
         36.303
        ],
        [
         113.716,
         36.262
        ],
        [
         113.682,
         36.216
        ],
        [
         113.698,
         36.182
        ],
        [
         113.651,
         36.174
        ],
        [
         113.706,
         36.149
        ],
        [
         113.713,
         36.13
        ],
        [
         113.655,
         36.125
        ],
        [
         113.671,
         36.116
        ],
        [
         113.686,
         36.056
        ],
        [
         113.66,
         36.035
        ],
        [
         113.695,
         36.027
        ],
        [
         113.679,
         35.986
        ],
        [
         113.649,
         35.994
        ],
        [
         113.654,
         35.932
        ],
        [
         113.638,
         35.87
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.3,
         35.429
        ],
        [
         113.3,
         33.8
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
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.3,
        34.944
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.34,
       35.503
      ],
      [
       115.341,
       35.538
      ],
      [
       115.382,
       35.597
      ],
      [
       115.463,
       35.681
      ],
      [
       115.596,
       35.758
      ],
      [
       115.781,
       35.83
      ],
      [
       115.871,
       35.88
      ],
      [
       115.866,
       35.91
      ],
      [
       115.883,
       35.939
      ],
      [
       115.924,
       35.966
      ],
      [
       115.966,
       35.976
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
       116.735,
       36.656
      ],
      [
       116.862,
       36.726
      ],
      [
       117.024,
       36.773
      ],
      [
       117.151,
       36.862
      ],
      [
       117.24,
       36.994
      ],
      [
       117.352,
       37.082
      ],
      [
       117.485,
       37.127
      ],
      [
       117.571,
       37.175
      ],
      [
       117.608,
       37.228
      ],
      [
       117.693,
       37.256
      ],
      [
       117.825,
       37.26
      ],
      [
       117.97,
       37.29
      ],
      [
       118.128,
       37.347
      ],
      [
       118.238,
       37.431
      ],
      [
       118.298,
       37.541
      ],
      [
       118.385,
       37.604
      ],
      [
       118.498,
       37.619
      ],
      [
       118.645,
       37.678
      ],
      [
       118.826,
       37.78
      ],
      [
       118.909,
       37.81
      ],
      [
       119.03,
       37.81
      ],
      [
       119.036,
       37.809
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
        117.326,
        34.587
       ],
       [
        117.295,
        34.549
       ],
       [
        117.25,
        34.502
       ],
       [
        117.21,
        34.498
       ],
       [
        117.174,
        34.543
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
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   113.3,
   33.8,
   119.05,
   37.81
  ]
 }
};
