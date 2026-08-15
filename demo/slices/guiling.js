// 本文件由 tools/build.py 自动生成（切片 guiling），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guiling"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guiling"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "桂陵之战",
  "dossier_label": "桂陵之战",
  "subtitle": "周显王十五年（前354）· 齐 vs 魏",
  "primary_place": "guiling",
  "dossier_event": "event:gl_wei",
  "terrain_grid": "china_coarse",
  "lead": "齐将田忌、孙膑围魏救赵，袭大梁、邀魏军于桂陵，擒庞涓。",
  "parties_note": "齐方叙孙膑谋略，魏方讳败。",
  "subject_names": {
   "person:sunbin": "孙膑",
   "person:pangjuan": "庞涓",
   "person:tianji": "田忌"
  },
  "page": "guiling.html",
  "key": "guiling",
  "scene_id": "guiling",
  "vocab_pack": "inline:guiling"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "桂陵之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "齐方叙孙膑谋略，魏方讳败。"
  }
 ],
 "places": [
  {
   "id": "guiling",
   "name": "桂陵",
   "lon": 114.67,
   "lat": 35.2,
   "note": "今河南长垣北",
   "elev": 67
  },
  {
   "id": "daliang",
   "name": "大梁",
   "lon": 114.3,
   "lat": 34.8,
   "note": "魏都，今开封",
   "elev": 76
  },
  {
   "id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "note": "齐都，今淄博",
   "elev": 70
  },
  {
   "id": "handan",
   "name": "邯郸",
   "lon": 114.49,
   "lat": 36.61,
   "note": "赵都",
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
   "id": "AX_ev_gl_wei",
   "subject": "event:gl_wei",
   "predicate": "战事",
   "value_text": "魏拔邯郸，赵告急于齐。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -354,
    "end": -354,
    "era_text": "周显王十五年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gl_qi",
   "subject": "event:gl_qi",
   "predicate": "战事",
   "value_text": "孙膑袭大梁，魏军回救。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -353,
    "end": -353,
    "era_text": "周显王十六年"
   },
   "place": "guiling",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gl_jz",
   "subject": "event:gl_jz",
   "predicate": "战事",
   "value_text": "齐邀魏军于桂陵，擒庞涓。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -353,
    "end": -353,
    "era_text": "周显王十六年"
   },
   "place": "guiling",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_gl_wei",
   "subject": "event:gl_wei",
   "year": -354,
   "era": "周显王十五年",
   "title": "魏围邯郸",
   "kind": "战事",
   "text": "魏拔邯郸，赵告急于齐。"
  },
  {
   "id": "ev_gl_qi",
   "subject": "event:gl_qi",
   "year": -353,
   "era": "周显王十六年",
   "title": "齐围魏救赵",
   "kind": "战事",
   "text": "孙膑袭大梁，魏军回救。",
   "place": "guiling"
  },
  {
   "id": "ev_gl_jz",
   "subject": "event:gl_jz",
   "year": -353,
   "era": "周显王十六年",
   "title": "桂陵擒庞涓",
   "kind": "战事",
   "text": "齐邀魏军于桂陵，擒庞涓。",
   "place": "guiling"
  }
 ],
 "engagements": [
  {
   "id": "eng_gl_main",
   "name": "桂陵邀击",
   "at": "B353-11",
   "era": "周显王十六年十一月",
   "place": "guiling",
   "winner": "a",
   "outcome": "孙膑避实击虚，齐军于桂陵邀击回救的魏军主力，庞涓被擒，魏军溃。",
   "subject": "event:gl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "田忌/孙膑",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 260,
     "posture": "截击",
     "commit_basis": "齐军轻兵袭大梁后回师设伏。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "庞涓",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 300,
     "posture": "回救",
     "commit_basis": "魏军攻坚后长途回救，师老兵疲。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_gl_qi",
   "name": "齐军袭大梁",
   "side": "a",
   "nodes": [
    {
     "place": "linzi",
     "at": "B353-10",
     "label": "齐起兵"
    },
    {
     "place": "daliang",
     "at": "B353-11",
     "label": "袭大梁"
    },
    {
     "place": "guiling",
     "at": "B353-11",
     "label": "桂陵设伏"
    }
   ],
   "outcome": {
    "at": "B353-11",
    "type": "victory",
    "text": "齐围魏救赵，桂陵破魏"
   }
  },
  {
   "id": "rt_gl_wei",
   "name": "魏军回救",
   "side": "b",
   "nodes": [
    {
     "place": "handan",
     "at": "B353-10",
     "label": "魏军围邯郸"
    },
    {
     "place": "guiling",
     "at": "B353-11",
     "label": "回救中伏"
    }
   ],
   "outcome": {
    "at": "B353-10",
    "type": "defeat",
    "text": "魏军被迫弃邯郸回救"
   }
  }
 ],
 "timeline": [
  {
   "at": "B354-01",
   "era": "周显王十五年",
   "label": "魏围邯郸",
   "key": false
  },
  {
   "at": "B353-10",
   "era": "十六年十月",
   "label": "齐起兵袭大梁",
   "key": true
  },
  {
   "at": "B353-11",
   "era": "十一月",
   "label": "桂陵擒庞涓",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B353-11",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B353-11",
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
