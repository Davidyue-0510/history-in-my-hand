// 本文件由 tools/build.py 自动生成（切片 yaksa），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yaksa"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yaksa"] = {
 "meta": {
  "kind": "battle",
  "region": "qing_modern",
  "title": "雅克萨之战",
  "dossier_label": "雅克萨之战",
  "subtitle": "康熙二十四—二十五年（1685—1686）· 清 vs 沙俄",
  "primary_place": "yaksa",
  "dossier_event": "event:yk_qing",
  "terrain_grid": "china_coarse",
  "lead": "清军两次围雅克萨，俄人退，订尼布楚条约。",
  "parties_note": "清方叙守边，俄方叙开拓。",
  "subject_names": {
   "person:sabulv": "萨布素",
   "person:pengchun": "彭春",
   "person:tuoer": "托尔布津"
  },
  "page": "yaksa.html",
  "key": "yaksa",
  "scene_id": "yaksa",
  "vocab_pack": "inline:yaksa"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "雅克萨之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "清方叙守边，俄方叙开拓。"
  }
 ],
 "places": [
  {
   "id": "yaksa",
   "name": "雅克萨",
   "lon": 125.73,
   "lat": 53.48,
   "note": "今黑龙江漠河对岸",
   "elev": 350
  },
  {
   "id": "aihui",
   "name": "瑷珲",
   "lon": 127.53,
   "lat": 50.25,
   "note": "清军集",
   "elev": 161
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "清都",
   "elev": 44
  },
  {
   "id": "niuman",
   "name": "牛满河",
   "lon": 127.5,
   "lat": 52.0,
   "note": "俄据点",
   "elev": 317
  }
 ],
 "persons": [
  {
   "id": "sabulv",
   "name": "萨布素",
   "side": "清",
   "influence": 0
  },
  {
   "id": "pengchun",
   "name": "彭春",
   "side": "清",
   "influence": 0
  },
  {
   "id": "tuoer",
   "name": "托尔布津",
   "side": "沙俄",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_yk_qing",
   "subject": "event:yk_qing",
   "predicate": "战事",
   "value_text": "彭春率清军围雅克萨。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1685,
    "end": 1685,
    "era_text": "康熙二十四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yk_e",
   "subject": "event:yk_e",
   "predicate": "战事",
   "value_text": "萨布素再围，俄乞盟。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1686,
    "end": 1686,
    "era_text": "康熙二十五年"
   },
   "place": "yaksa",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yk_meng",
   "subject": "event:yk_meng",
   "predicate": "战事",
   "value_text": "中俄订尼布楚条约。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1689,
    "end": 1689,
    "era_text": "康熙二十八年"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_yk_qing",
   "subject": "event:yk_qing",
   "year": 1685,
   "era": "康熙二十四年",
   "title": "清军围雅克萨",
   "kind": "战事",
   "text": "彭春率清军围雅克萨。"
  },
  {
   "id": "ev_yk_e",
   "subject": "event:yk_e",
   "year": 1686,
   "era": "康熙二十五年",
   "title": "再围雅克萨",
   "kind": "战事",
   "text": "萨布素再围，俄乞盟。",
   "place": "yaksa"
  },
  {
   "id": "ev_yk_meng",
   "subject": "event:yk_meng",
   "year": 1689,
   "era": "康熙二十八年",
   "title": "尼布楚条约",
   "kind": "战事",
   "text": "中俄订尼布楚条约。"
  }
 ],
 "engagements": [
  {
   "id": "eng_yk_main",
   "name": "雅克萨围城",
   "at": "1686-07",
   "era": "康熙二十五年七月",
   "place": "yaksa",
   "winner": "a",
   "outcome": "萨布素围雅克萨久攻，俄守军疫惫请盟，清允撤围议界。",
   "subject": "event:yk_meng",
   "sides": [
    {
     "side": "a",
     "commander": "萨布素",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 120,
     "posture": "围城",
     "commit_basis": "清军据垒久围，断其接济。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "托尔布津",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 140,
     "posture": "孤守",
     "commit_basis": "俄军孤城援绝，疫惫请盟。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_yk_qing",
   "name": "清军北上",
   "side": "a",
   "nodes": [
    {
     "place": "aihui",
     "at": "1685-05",
     "label": "彭春集兵"
    },
    {
     "place": "yaksa",
     "at": "1685-06",
     "label": "围雅克萨"
    }
   ],
   "outcome": {
    "at": "1685-06",
    "type": "victory",
    "text": "清军围雅克萨"
   }
  },
  {
   "id": "rt_yk_e",
   "name": "俄军据点",
   "side": "b",
   "nodes": [
    {
     "place": "niuman",
     "at": "1685-01",
     "label": "俄据点"
    },
    {
     "place": "yaksa",
     "at": "1685-03",
     "label": "守城"
    }
   ],
   "outcome": {
    "at": "1686-06",
    "type": "defeat",
    "text": "俄军守雅克萨请盟"
   }
  }
 ],
 "timeline": [
  {
   "at": "1685-05",
   "era": "康熙二十四年",
   "label": "清军围雅克萨",
   "key": false
  },
  {
   "at": "1686-07",
   "era": "二十五年",
   "label": "再围",
   "key": true
  },
  {
   "at": "1689-01",
   "era": "二十八年",
   "label": "尼布楚条约",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1689-01",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1689-01",
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
   "清军",
   "沙俄军",
   "综合史料"
  ],
  "party_bucket": {
   "清军": "清军",
   "沙俄军": "沙俄军",
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
     "label": "清军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "沙俄军胜",
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
     "label": "清军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "沙俄军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
