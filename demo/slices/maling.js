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
   "influence": 0
  },
  {
   "id": "pangjuan",
   "name": "庞涓",
   "side": "魏",
   "influence": 0
  },
  {
   "id": "tianji",
   "name": "田忌",
   "side": "齐",
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
