// 本文件由 tools/build.py 自动生成（切片 chengpu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chengpu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chengpu"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "城濮之战",
  "dossier_label": "城濮之战",
  "subtitle": "周襄王二十年（前632）· 晋 vs 楚",
  "primary_place": "chengpu",
  "dossier_event": "event:cp_chu",
  "terrain_grid": "china_coarse",
  "lead": "晋文公退避三舍后反击，城濮大败楚军，践土会盟称霸。",
  "parties_note": "晋方叙尊王攘楚，楚方讳败。",
  "subject_names": {
   "person:jinwen": "晋文公",
   "person:ziyu": "子玉",
   "person:xianzhen": "先轸"
  },
  "page": "chengpu.html",
  "key": "chengpu",
  "scene_id": "chengpu",
  "vocab_pack": "inline:chengpu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "城濮之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "晋方叙尊王攘楚，楚方讳败。"
  }
 ],
 "places": [
  {
   "id": "chengpu",
   "name": "城濮",
   "lon": 115.49,
   "lat": 35.59,
   "note": "今山东鄄城西南",
   "elev": 38
  },
  {
   "id": "ying",
   "name": "郢",
   "lon": 112.24,
   "lat": 30.33,
   "note": "楚都，今荆州",
   "elev": 28
  },
  {
   "id": "jiang",
   "name": "绛",
   "lon": 111.69,
   "lat": 35.63,
   "note": "晋都，今山西翼城",
   "elev": 601
  },
  {
   "id": "wen",
   "name": "践土",
   "lon": 113.8,
   "lat": 35.3,
   "note": "会盟地，今河南原阳",
   "elev": 73
  }
 ],
 "persons": [
  {
   "id": "jinwen",
   "name": "晋文公",
   "side": "晋",
   "influence": 0
  },
  {
   "id": "ziyu",
   "name": "子玉",
   "side": "楚",
   "influence": 0
  },
  {
   "id": "xianzhen",
   "name": "先轸",
   "side": "晋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cp_chu",
   "subject": "event:cp_chu",
   "predicate": "战事",
   "value_text": "楚成王围宋，宋乞援于晋。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -632,
    "end": -632,
    "era_text": "周襄王二十年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cp_jin",
   "subject": "event:cp_jin",
   "predicate": "战事",
   "value_text": "晋文公退避三舍救宋。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -632,
    "end": -632,
    "era_text": "周襄王二十年"
   },
   "place": "chengpu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cp_jz",
   "subject": "event:cp_jz",
   "predicate": "战事",
   "value_text": "晋军城濮破楚，践土会盟。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -632,
    "end": -632,
    "era_text": "周襄王二十年"
   },
   "place": "chengpu",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_cp_chu",
   "subject": "event:cp_chu",
   "year": -632,
   "era": "周襄王二十年",
   "title": "楚围宋",
   "kind": "战事",
   "text": "楚成王围宋，宋乞援于晋。"
  },
  {
   "id": "ev_cp_jin",
   "subject": "event:cp_jin",
   "year": -632,
   "era": "周襄王二十年",
   "title": "晋伐曹卫",
   "kind": "战事",
   "text": "晋文公退避三舍救宋。",
   "place": "chengpu"
  },
  {
   "id": "ev_cp_jz",
   "subject": "event:cp_jz",
   "year": -632,
   "era": "周襄王二十年",
   "title": "城濮大败楚",
   "kind": "战事",
   "text": "晋军城濮破楚，践土会盟。",
   "place": "chengpu"
  }
 ],
 "engagements": [
  {
   "id": "eng_cp_main",
   "name": "城濮决战",
   "at": "B632-04",
   "era": "周襄王二十年四月",
   "place": "chengpu",
   "winner": "a",
   "outcome": "晋军退避三舍后分击楚军左右翼，楚左师先溃，全军退。",
   "subject": "event:cp_jz",
   "sides": [
    {
     "side": "a",
     "commander": "晋文公/先轸",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 240,
     "posture": "诱敌侧击",
     "commit_basis": "晋伪遁诱楚，集中击其弱翼。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "子玉",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 260,
     "posture": "冒进",
     "commit_basis": "楚军骄纵，两翼不协调。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_cp_jin",
   "name": "晋军救宋",
   "side": "a",
   "nodes": [
    {
     "place": "jiang",
     "at": "B632-01",
     "label": "晋出兵"
    },
    {
     "place": "chengpu",
     "at": "B632-04",
     "label": "退避三舍后决战"
    }
   ],
   "outcome": {
    "at": "B632-04",
    "type": "victory",
    "text": "晋退避三舍，城濮败楚"
   }
  },
  {
   "id": "rt_cp_chu",
   "name": "楚军北上",
   "side": "b",
   "nodes": [
    {
     "place": "ying",
     "at": "B632-01",
     "label": "楚围宋"
    },
    {
     "place": "chengpu",
     "at": "B632-04",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "B632-03",
    "type": "defeat",
    "text": "楚军北上会战败北"
   }
  }
 ],
 "timeline": [
  {
   "at": "B632-01",
   "era": "周襄王二十年",
   "label": "晋楚对峙",
   "key": false
  },
  {
   "at": "B632-03",
   "era": "三月",
   "label": "晋退避三舍",
   "key": false
  },
  {
   "at": "B632-04",
   "era": "四月",
   "label": "城濮决战·楚败",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B632-04",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B632-04",
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
   "晋军",
   "楚军",
   "综合史料"
  ],
  "party_bucket": {
   "晋军": "晋军",
   "楚军": "楚军",
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
     "label": "晋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "楚军胜",
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
     "label": "晋军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "楚军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
