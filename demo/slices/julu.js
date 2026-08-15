// 本文件由 tools/build.py 自动生成（切片 julu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["julu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["julu"] = {
 "meta": {
  "kind": "battle",
  "region": "qin_han",
  "title": "巨鹿之战",
  "dossier_label": "巨鹿之战",
  "subtitle": "秦二世三年（前207）· 楚（项羽） vs 秦",
  "primary_place": "julu",
  "dossier_event": "event:jl_qin",
  "terrain_grid": "china_coarse",
  "lead": "项羽破釜沉舟，巨鹿九战绝秦军甬道，俘王离、击走章邯。",
  "parties_note": "楚方叙项羽勇决，秦方讳败。",
  "subject_names": {
   "person:xiangyu": "项羽",
   "person:zhanghan": "章邯",
   "person:wangli": "王离"
  },
  "page": "julu.html",
  "key": "julu",
  "scene_id": "julu",
  "vocab_pack": "inline:julu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "巨鹿之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "楚方叙项羽勇决，秦方讳败。"
  }
 ],
 "places": [
  {
   "id": "julu",
   "name": "巨鹿",
   "lon": 115.04,
   "lat": 37.07,
   "note": "今河北平乡",
   "elev": 32
  },
  {
   "id": "zhangshui",
   "name": "漳水",
   "lon": 114.8,
   "lat": 36.9,
   "note": "楚军北渡",
   "elev": 39
  },
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
  },
  {
   "id": "pengcheng",
   "name": "彭城",
   "lon": 117.18,
   "lat": 34.26,
   "note": "楚怀王都",
   "elev": 63
  }
 ],
 "persons": [
  {
   "id": "xiangyu",
   "name": "项羽",
   "side": "楚",
   "influence": 0
  },
  {
   "id": "zhanghan",
   "name": "章邯",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "wangli",
   "name": "王离",
   "side": "秦",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jl_qin",
   "subject": "event:jl_qin",
   "predicate": "战事",
   "value_text": "秦将章邯、王离围巨鹿，赵乞援。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -207,
    "end": -207,
    "era_text": "秦二世三年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jl_xiang",
   "subject": "event:jl_xiang",
   "predicate": "战事",
   "value_text": "项羽破釜沉舟，渡漳救巨鹿。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -207,
    "end": -207,
    "era_text": "秦二世三年"
   },
   "place": "julu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jl_jz",
   "subject": "event:jl_jz",
   "predicate": "战事",
   "value_text": "九战绝甬道，俘王离。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -207,
    "end": -207,
    "era_text": "秦二世三年"
   },
   "place": "julu",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_jl_qin",
   "subject": "event:jl_qin",
   "year": -207,
   "era": "秦二世三年",
   "title": "章邯围巨鹿",
   "kind": "战事",
   "text": "秦将章邯、王离围巨鹿，赵乞援。"
  },
  {
   "id": "ev_jl_xiang",
   "subject": "event:jl_xiang",
   "year": -207,
   "era": "秦二世三年",
   "title": "项羽渡河",
   "kind": "战事",
   "text": "项羽破釜沉舟，渡漳救巨鹿。",
   "place": "julu"
  },
  {
   "id": "ev_jl_jz",
   "subject": "event:jl_jz",
   "year": -207,
   "era": "秦二世三年",
   "title": "巨鹿破秦",
   "kind": "战事",
   "text": "九战绝甬道，俘王离。",
   "place": "julu"
  }
 ],
 "engagements": [
  {
   "id": "eng_jl_main",
   "name": "巨鹿围歼",
   "at": "B207-12",
   "era": "秦二世三年十二月",
   "place": "julu",
   "winner": "a",
   "outcome": "项羽沉船破釜，九战楚军绝秦甬道，王离被俘、章邯西走，秦主力倾覆。",
   "subject": "event:jl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "项羽",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 200,
     "posture": "死战",
     "commit_basis": "破釜沉舟，士卒必死。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "王离/章邯",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 220,
     "posture": "分守",
     "commit_basis": "秦军分兵围城与护粮，势分。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_jl_xiang",
   "name": "楚军北上",
   "side": "a",
   "nodes": [
    {
     "place": "pengcheng",
     "at": "B207-10",
     "label": "项羽北上"
    },
    {
     "place": "zhangshui",
     "at": "B207-12",
     "label": "渡漳"
    },
    {
     "place": "julu",
     "at": "B207-12",
     "label": "破釜决战"
    }
   ],
   "outcome": {
    "at": "B207-12",
    "type": "victory",
    "text": "巨鹿破秦主力"
   }
  },
  {
   "id": "rt_jl_qin",
   "name": "秦军围巨鹿",
   "side": "b",
   "nodes": [
    {
     "place": "xianyang",
     "at": "B207-09",
     "label": "秦调兵"
    },
    {
     "place": "julu",
     "at": "B207-10",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "B207-11",
    "type": "defeat",
    "text": "秦军围城反被破"
   }
  }
 ],
 "timeline": [
  {
   "at": "B207-09",
   "era": "秦二世三年",
   "label": "秦围巨鹿",
   "key": false
  },
  {
   "at": "B207-12",
   "era": "十二月",
   "label": "项羽渡漳",
   "key": true
  },
  {
   "at": "B207-12",
   "era": "十二月",
   "label": "巨鹿破秦",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B207-12",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B207-12",
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
   "楚军",
   "秦军",
   "综合史料"
  ],
  "party_bucket": {
   "楚军": "楚军",
   "秦军": "秦军",
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
     "label": "楚军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "秦军胜",
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
     "label": "楚军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "秦军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
