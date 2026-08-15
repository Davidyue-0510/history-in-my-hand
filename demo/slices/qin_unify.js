// 本文件由 tools/build.py 自动生成（切片 qin_unify），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["qin_unify"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["qin_unify"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "秦灭六国",
  "dossier_label": "秦灭六国",
  "subtitle": "前230—前221 · 秦 vs 六国",
  "primary_place": "xianyang",
  "dossier_event": "event:qn_230",
  "terrain_grid": "china_coarse",
  "lead": "秦凭商鞅变法之积、远交近攻之策，十年并六国。前221 年齐降，嬴政称始皇帝，废分封、行郡县。",
  "parties_note": "秦方纪功（如《史记·秦始皇本纪》），六国方多散见诸国世家；灭国次序以《史记》为据。",
  "subject_names": {
   "person:yingzheng": "嬴政",
   "person:wangjian": "王翦"
  },
  "page": "county.html?scene=qin_unify",
  "key": "qin_unify",
  "scene_id": "qin_unify",
  "vocab_pack": "inline:qin_unify"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "秦灭六国·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "秦方纪功（如《史记·秦始皇本纪》），六国方多散见诸国世家；灭国次序以《史记》为据。"
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
  },
  {
   "id": "xinzheng",
   "name": "新郑",
   "lon": 113.8,
   "lat": 34.4,
   "note": "韩都，前230 灭韩",
   "elev": 99
  },
  {
   "id": "handan",
   "name": "邯郸",
   "lon": 114.49,
   "lat": 36.61,
   "note": "赵都，前228 灭赵",
   "elev": 76
  },
  {
   "id": "daliang",
   "name": "大梁",
   "lon": 114.3,
   "lat": 34.8,
   "note": "魏都，前225 灭魏",
   "elev": 76
  },
  {
   "id": "shouchun",
   "name": "寿春",
   "lon": 116.78,
   "lat": 32.57,
   "note": "楚都（后期），前223 灭楚",
   "elev": 20
  },
  {
   "id": "ji",
   "name": "蓟",
   "lon": 116.4,
   "lat": 39.9,
   "note": "燕都，前222 灭燕",
   "elev": 44
  },
  {
   "id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "note": "齐都，前221 灭齐",
   "elev": 70
  }
 ],
 "persons": [
  {
   "id": "yingzheng",
   "name": "嬴政",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "wangjian",
   "name": "王翦",
   "side": "秦",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_qn_230",
   "subject": "event:qn_230",
   "predicate": "战事",
   "value_text": "内史腾灭韩，俘韩王安，韩亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -230,
    "end": -230,
    "era_text": "秦王政十七年"
   },
   "place": "xinzheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qn_228",
   "subject": "event:qn_228",
   "predicate": "战事",
   "value_text": "王翦大破赵军，俘赵王迁，赵亡（公子嘉走代）。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -228,
    "end": -228,
    "era_text": "十九年"
   },
   "place": "handan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qn_225",
   "subject": "event:qn_225",
   "predicate": "战事",
   "value_text": "王贲引河沟灌大梁，魏王假降，魏亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -225,
    "end": -225,
    "era_text": "二十二年"
   },
   "place": "daliang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qn_223",
   "subject": "event:qn_223",
   "predicate": "战事",
   "value_text": "王翦倾国六十万伐楚，破寿春，虏楚王负刍，楚亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -223,
    "end": -223,
    "era_text": "二十四年"
   },
   "place": "shouchun",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qn_222",
   "subject": "event:qn_222",
   "predicate": "战事",
   "value_text": "王贲破辽东，俘燕王喜；又灭代，燕赵尽亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -222,
    "end": -222,
    "era_text": "二十五年"
   },
   "place": "ji",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_qn_221",
   "subject": "event:qn_221",
   "predicate": "战事",
   "value_text": "王贲自燕南下灭齐，齐王建降。六国尽，嬴政称始皇帝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -221,
    "end": -221,
    "era_text": "二十六年"
   },
   "place": "linzi",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_qn_230",
   "subject": "event:qn_230",
   "year": -230,
   "era": "秦王政十七年",
   "title": "灭韩",
   "kind": "战事",
   "text": "内史腾灭韩，俘韩王安，韩亡。",
   "place": "xinzheng"
  },
  {
   "id": "ev_qn_228",
   "subject": "event:qn_228",
   "year": -228,
   "era": "十九年",
   "title": "灭赵",
   "kind": "战事",
   "text": "王翦大破赵军，俘赵王迁，赵亡（公子嘉走代）。",
   "place": "handan"
  },
  {
   "id": "ev_qn_225",
   "subject": "event:qn_225",
   "year": -225,
   "era": "二十二年",
   "title": "灭魏",
   "kind": "战事",
   "text": "王贲引河沟灌大梁，魏王假降，魏亡。",
   "place": "daliang"
  },
  {
   "id": "ev_qn_223",
   "subject": "event:qn_223",
   "year": -223,
   "era": "二十四年",
   "title": "灭楚",
   "kind": "战事",
   "text": "王翦倾国六十万伐楚，破寿春，虏楚王负刍，楚亡。",
   "place": "shouchun"
  },
  {
   "id": "ev_qn_222",
   "subject": "event:qn_222",
   "year": -222,
   "era": "二十五年",
   "title": "灭燕代",
   "kind": "战事",
   "text": "王贲破辽东，俘燕王喜；又灭代，燕赵尽亡。",
   "place": "ji"
  },
  {
   "id": "ev_qn_221",
   "subject": "event:qn_221",
   "year": -221,
   "era": "二十六年",
   "title": "灭齐·一统",
   "kind": "战事",
   "text": "王贲自燕南下灭齐，齐王建降。六国尽，嬴政称始皇帝。",
   "place": "linzi"
  }
 ],
 "routes": [
  {
   "id": "rt_qn_east",
   "name": "秦军东进",
   "side": "a",
   "nodes": [
    {
     "place": "xianyang",
     "at": "B230",
     "label": "出兵"
    },
    {
     "place": "xinzheng",
     "at": "B230",
     "label": "灭韩"
    },
    {
     "place": "handan",
     "at": "B228",
     "label": "灭赵"
    },
    {
     "place": "daliang",
     "at": "B225",
     "label": "灭魏"
    },
    {
     "place": "shouchun",
     "at": "B223",
     "label": "灭楚"
    },
    {
     "place": "linzi",
     "at": "B221",
     "label": "灭齐"
    }
   ],
   "outcome": {
    "at": "B221",
    "type": "victory",
    "text": "十年并六国"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_qn_chu",
   "name": "灭楚之战",
   "at": "B223",
   "era": "秦王政二十四年",
   "place": "shouchun",
   "winner": "a",
   "outcome": "王翎倾国六十万伐楚，坚壁疲之，乘楚东撤一举破寿春、虏负刍。",
   "subject": "event:qn_223",
   "sides": [
    {
     "side": "a",
     "commander": "王翦",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 600,
     "posture": "倾国",
     "commit_basis": "秦以举国之力，稳扎疲楚。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "项燕",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 620,
     "posture": "转进",
     "commit_basis": "楚军东撤失据，为秦所破。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "B230",
   "era": "十七年",
   "label": "灭韩",
   "key": true
  },
  {
   "at": "B228",
   "era": "十九年",
   "label": "灭赵",
   "key": false
  },
  {
   "at": "B225",
   "era": "二十二年",
   "label": "灭魏",
   "key": false
  },
  {
   "at": "B223",
   "era": "二十四年",
   "label": "灭楚",
   "key": true
  },
  {
   "at": "B222",
   "era": "二十五年",
   "label": "灭燕代",
   "key": false
  },
  {
   "at": "B221",
   "era": "二十六年",
   "label": "灭齐·一统",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B221",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B221",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，数字多为估算，界面应视为待核实。"
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
   "秦军",
   "六国",
   "综合史料"
  ],
  "party_bucket": {
   "秦军": "秦军",
   "六国": "六国",
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
     "label": "秦军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "六国胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "秦军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "六国行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
