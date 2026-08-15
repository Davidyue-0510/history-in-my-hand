// 本文件由 tools/build.py 自动生成（切片 gaixia），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["gaixia"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["gaixia"] = {
 "meta": {
  "kind": "battle",
  "region": "qin_han",
  "title": "垓下之战",
  "dossier_label": "垓下之战",
  "subtitle": "汉高帝五年（前202）· 汉 vs 楚",
  "primary_place": "gaixia",
  "dossier_event": "event:gx_han",
  "terrain_grid": "china_coarse",
  "lead": "韩信十面埋伏，垓下围项羽，四面楚歌，羽走乌江自刎。",
  "parties_note": "汉方叙垓下合围，楚方叙项羽悲歌。",
  "subject_names": {
   "person:hanxin": "韩信",
   "person:xiangyu": "项羽",
   "person:liubang": "刘邦"
  },
  "page": "gaixia.html",
  "key": "gaixia",
  "scene_id": "gaixia",
  "vocab_pack": "inline:gaixia"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "垓下之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "汉方叙垓下合围，楚方叙项羽悲歌。"
  }
 ],
 "places": [
  {
   "id": "gaixia",
   "name": "垓下",
   "lon": 117.56,
   "lat": 33.5,
   "note": "今安徽灵璧南",
   "elev": 20
  },
  {
   "id": "pengcheng",
   "name": "彭城",
   "lon": 117.18,
   "lat": 34.26,
   "note": "楚故都",
   "elev": 63
  },
  {
   "id": "jiangdong",
   "name": "江东",
   "lon": 120.58,
   "lat": 31.3,
   "note": "项羽起兵地",
   "elev": 6
  },
  {
   "id": "wujiang",
   "name": "乌江",
   "lon": 118.25,
   "lat": 31.87,
   "note": "羽自刎处",
   "elev": 23
  }
 ],
 "persons": [
  {
   "id": "hanxin",
   "name": "韩信",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "xiangyu",
   "name": "项羽",
   "side": "楚",
   "influence": 0
  },
  {
   "id": "liubang",
   "name": "刘邦",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_gx_han",
   "subject": "event:gx_han",
   "predicate": "战事",
   "value_text": "韩信率诸侯兵围羽于垓下。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -202,
    "end": -202,
    "era_text": "汉高帝五年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gx_ge",
   "subject": "event:gx_ge",
   "predicate": "战事",
   "value_text": "汉军夜歌楚声，楚军溃散。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -202,
    "end": -202,
    "era_text": "汉高帝五年"
   },
   "place": "gaixia",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gx_wj",
   "subject": "event:gx_wj",
   "predicate": "战事",
   "value_text": "项羽突出重围至乌江自刎。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -202,
    "end": -202,
    "era_text": "汉高帝五年"
   },
   "place": "wujiang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_gx_han",
   "subject": "event:gx_han",
   "year": -202,
   "era": "汉高帝五年",
   "title": "汉围楚",
   "kind": "战事",
   "text": "韩信率诸侯兵围羽于垓下。"
  },
  {
   "id": "ev_gx_ge",
   "subject": "event:gx_ge",
   "year": -202,
   "era": "汉高帝五年",
   "title": "四面楚歌",
   "kind": "战事",
   "text": "汉军夜歌楚声，楚军溃散。",
   "place": "gaixia"
  },
  {
   "id": "ev_gx_wj",
   "subject": "event:gx_wj",
   "year": -202,
   "era": "汉高帝五年",
   "title": "乌江自刎",
   "kind": "战事",
   "text": "项羽突出重围至乌江自刎。",
   "place": "wujiang"
  }
 ],
 "engagements": [
  {
   "id": "eng_gx_main",
   "name": "垓下合围",
   "at": "B202-12",
   "era": "汉高帝五年十二月",
   "place": "gaixia",
   "winner": "a",
   "outcome": "韩信布十面阵，汉军四面合围垓下，楚军夜溃，羽率八百骑走。",
   "subject": "event:gx_wj",
   "sides": [
    {
     "side": "a",
     "commander": "韩信/刘邦",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 240,
     "posture": "十面埋伏",
     "commit_basis": "汉军数重围合，兵力绝对优势。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "项羽",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 200,
     "posture": "突围",
     "commit_basis": "楚军疲敝孤立，四面楚歌。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_gx_han",
   "name": "汉军合围",
   "side": "a",
   "nodes": [
    {
     "place": "pengcheng",
     "at": "B202-10",
     "label": "汉起兵"
    },
    {
     "place": "gaixia",
     "at": "B202-12",
     "label": "垓下合围"
    }
   ],
   "outcome": {
    "at": "B202-12",
    "type": "victory",
    "text": "垓下灭楚"
   }
  },
  {
   "id": "rt_gx_chu",
   "name": "楚军东走",
   "side": "b",
   "nodes": [
    {
     "place": "gaixia",
     "at": "B202-12",
     "label": "羽突出"
    },
    {
     "place": "wujiang",
     "at": "B202-12",
     "label": "乌江自刎"
    }
   ],
   "outcome": {
    "at": "B202-12",
    "type": "defeat",
    "text": "羽走乌江自刎"
   }
  }
 ],
 "timeline": [
  {
   "at": "B202-10",
   "era": "汉高帝五年",
   "label": "汉围楚",
   "key": false
  },
  {
   "at": "B202-12",
   "era": "十二月",
   "label": "四面楚歌",
   "key": true
  },
  {
   "at": "B202-12",
   "era": "十二月",
   "label": "乌江自刎",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B202-12",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B202-12",
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
   "汉军",
   "楚军",
   "综合史料"
  ],
  "party_bucket": {
   "汉军": "汉军",
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
     "label": "汉军胜",
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
     "label": "汉军行军",
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
