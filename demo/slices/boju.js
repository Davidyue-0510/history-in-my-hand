// 本文件由 tools/build.py 自动生成（切片 boju），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["boju"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["boju"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "柏举之战",
  "dossier_label": "柏举之战",
  "subtitle": "周敬王十四年（前506）· 吴 vs 楚",
  "primary_place": "boju",
  "dossier_event": "event:bj_wu",
  "terrain_grid": "china_coarse",
  "lead": "吴王阖闾、孙武破楚，柏举大败楚军，五战入郢。",
  "parties_note": "吴方叙孙武用兵，楚方讳败。",
  "subject_names": {
   "person:sunwu": "孙武",
   "person:helu": "阖闾",
   "person:nangwa": "囊瓦"
  },
  "page": "boju.html",
  "key": "boju",
  "scene_id": "boju",
  "vocab_pack": "inline:boju"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "柏举之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "吴方叙孙武用兵，楚方讳败。"
  }
 ],
 "places": [
  {
   "id": "boju",
   "name": "柏举",
   "lon": 115.01,
   "lat": 31.18,
   "note": "今湖北麻城",
   "elev": 79
  },
  {
   "id": "gusu",
   "name": "姑苏",
   "lon": 120.58,
   "lat": 31.3,
   "note": "吴都，今苏州",
   "elev": 6
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
   "id": "hanshui",
   "name": "汉水",
   "lon": 112.3,
   "lat": 30.6,
   "note": "吴楚隔汉相持",
   "elev": 54
  }
 ],
 "persons": [
  {
   "id": "sunwu",
   "name": "孙武",
   "side": "吴",
   "influence": 0
  },
  {
   "id": "helu",
   "name": "阖闾",
   "side": "吴",
   "influence": 0
  },
  {
   "id": "nangwa",
   "name": "囊瓦",
   "side": "楚",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bj_wu",
   "subject": "event:bj_wu",
   "predicate": "战事",
   "value_text": "吴联蔡、唐伐楚。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -506,
    "end": -506,
    "era_text": "周敬王十四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_bj",
   "subject": "event:bj_bj",
   "predicate": "战事",
   "value_text": "吴军柏举大败楚主力。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -506,
    "end": -506,
    "era_text": "周敬王十四年"
   },
   "place": "boju",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_ruying",
   "subject": "event:bj_ruying",
   "predicate": "战事",
   "value_text": "吴五战及郢，楚昭王奔随。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -506,
    "end": -506,
    "era_text": "周敬王十四年"
   },
   "place": "ying",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_bj_wu",
   "subject": "event:bj_wu",
   "year": -506,
   "era": "周敬王十四年",
   "title": "吴蔡唐联军",
   "kind": "战事",
   "text": "吴联蔡、唐伐楚。"
  },
  {
   "id": "ev_bj_bj",
   "subject": "event:bj_bj",
   "year": -506,
   "era": "周敬王十四年",
   "title": "柏举决战",
   "kind": "战事",
   "text": "吴军柏举大败楚主力。",
   "place": "boju"
  },
  {
   "id": "ev_bj_ruying",
   "subject": "event:bj_ruying",
   "year": -506,
   "era": "周敬王十四年",
   "title": "吴入郢",
   "kind": "战事",
   "text": "吴五战及郢，楚昭王奔随。",
   "place": "ying"
  }
 ],
 "engagements": [
  {
   "id": "eng_bj_main",
   "name": "柏举决战",
   "at": "B506-11",
   "era": "周敬王十四年十一月",
   "place": "boju",
   "winner": "a",
   "outcome": "孙武以迂为直，吴军抢渡汉水、柏举击溃楚中军，楚师溃散。",
   "subject": "event:bj_bj",
   "sides": [
    {
     "side": "a",
     "commander": "阖闾/孙武",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 300,
     "posture": "速决",
     "commit_basis": "吴军百里奔袭，抢渡击其懈。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "囊瓦",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 320,
     "posture": "被动",
     "commit_basis": "楚军沿汉布防，调度失机。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_bj_wu",
   "name": "吴军西进",
   "side": "a",
   "nodes": [
    {
     "place": "gusu",
     "at": "B506-09",
     "label": "吴起兵"
    },
    {
     "place": "hanshui",
     "at": "B506-11",
     "label": "抢渡汉水"
    },
    {
     "place": "boju",
     "at": "B506-11",
     "label": "柏举决战"
    },
    {
     "place": "ying",
     "at": "B506-11",
     "label": "入郢"
    }
   ],
   "outcome": {
    "at": "B506-11",
    "type": "victory",
    "text": "吴五战入郢"
   }
  },
  {
   "id": "rt_bj_chu",
   "name": "楚军布防",
   "side": "b",
   "nodes": [
    {
     "place": "ying",
     "at": "B506-09",
     "label": "楚调兵"
    },
    {
     "place": "hanshui",
     "at": "B506-11",
     "label": "沿汉防御"
    }
   ],
   "outcome": {
    "at": "B506-10",
    "type": "defeat",
    "text": "楚军沿汉被动防御败北"
   }
  }
 ],
 "timeline": [
  {
   "at": "B506-09",
   "era": "周敬王十四年",
   "label": "吴联蔡唐伐楚",
   "key": false
  },
  {
   "at": "B506-11",
   "era": "十一月",
   "label": "柏举决战",
   "key": true
  },
  {
   "at": "B506-11",
   "era": "十一月",
   "label": "吴入郢",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B506-11",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B506-11",
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
   "吴军",
   "楚军",
   "综合史料"
  ],
  "party_bucket": {
   "吴军": "吴军",
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
     "label": "吴军胜",
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
     "label": "吴军行军",
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
