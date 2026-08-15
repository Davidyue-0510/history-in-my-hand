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
   "bias_note": "齐方叙谋略，魏方讳败。"
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
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
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
 }
};
