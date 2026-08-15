// 本文件由 tools/build.py 自动生成（切片 feishui），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["feishui"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["feishui"] = {
 "meta": {
  "kind": "battle",
  "region": "two_jin",
  "title": "淝水之战",
  "dossier_label": "淝水之战",
  "subtitle": "太元八年（383）· 东晋 vs 前秦",
  "primary_place": "feishui",
  "dossier_event": "event:fs_qin",
  "terrain_grid": "china_coarse",
  "lead": "谢玄率北府兵渡淝水击前秦，秦军自溃，苻坚北还。",
  "parties_note": "晋方叙风声鹤唳，秦方叙恃众轻敌。",
  "subject_names": {
   "person:xiexuan": "谢玄",
   "person:fuijian": "苻坚",
   "person:xiean": "谢安"
  },
  "page": "feishui.html",
  "key": "feishui",
  "scene_id": "feishui",
  "vocab_pack": "inline:feishui"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "淝水之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "晋方叙风声鹤唳，秦方叙恃众轻敌。"
  }
 ],
 "places": [
  {
   "id": "feishui",
   "name": "淝水",
   "lon": 116.78,
   "lat": 32.57,
   "note": "今安徽寿县东南",
   "elev": 20
  },
  {
   "id": "shouyang",
   "name": "寿阳",
   "lon": 116.78,
   "lat": 32.57,
   "note": "秦军据",
   "elev": 20
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "note": "晋都",
   "elev": 17
  },
  {
   "id": "changan_qin",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "前秦都",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "xiexuan",
   "name": "谢玄",
   "side": "晋",
   "influence": 0
  },
  {
   "id": "fuijian",
   "name": "苻坚",
   "side": "前秦",
   "influence": 0
  },
  {
   "id": "xiean",
   "name": "谢安",
   "side": "晋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_fs_qin",
   "subject": "event:fs_qin",
   "predicate": "战事",
   "value_text": "前秦百万南侵，列阵淝水。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 383,
    "end": 383,
    "era_text": "太元八年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fs_jin",
   "subject": "event:fs_jin",
   "predicate": "战事",
   "value_text": "谢玄请秦军小却，渡水决战。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 383,
    "end": 383,
    "era_text": "太元八年"
   },
   "place": "feishui",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fs_jz",
   "subject": "event:fs_jz",
   "predicate": "战事",
   "value_text": "秦军却阵自溃，晋追击大破之。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 383,
    "end": 383,
    "era_text": "太元八年"
   },
   "place": "feishui",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_fs_qin",
   "subject": "event:fs_qin",
   "year": 383,
   "era": "太元八年",
   "title": "苻坚南征",
   "kind": "战事",
   "text": "前秦百万南侵，列阵淝水。"
  },
  {
   "id": "ev_fs_jin",
   "subject": "event:fs_jin",
   "year": 383,
   "era": "太元八年",
   "title": "晋请战",
   "kind": "战事",
   "text": "谢玄请秦军小却，渡水决战。",
   "place": "feishui"
  },
  {
   "id": "ev_fs_jz",
   "subject": "event:fs_jz",
   "year": 383,
   "era": "太元八年",
   "title": "淝水溃秦",
   "kind": "战事",
   "text": "秦军却阵自溃，晋追击大破之。",
   "place": "feishui"
  }
 ],
 "engagements": [
  {
   "id": "eng_fs_main",
   "name": "淝水渡击",
   "at": "383-10",
   "era": "太元八年十月",
   "place": "feishui",
   "winner": "a",
   "outcome": "谢玄趁秦军后撤阵脚移动，率锐渡水奋击，秦军自溃不可止。",
   "subject": "event:fs_jz",
   "sides": [
    {
     "side": "a",
     "commander": "谢玄",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 90,
     "posture": "渡击",
     "commit_basis": "北府兵精锐，趁敌移阵突击。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "苻坚",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 120,
     "posture": "轻敌",
     "commit_basis": "秦军杂凑，一退而全军惊溃。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_fs_jin",
   "name": "晋军北拒",
   "side": "a",
   "nodes": [
    {
     "place": "jiankang",
     "at": "383-08",
     "label": "晋备战"
    },
    {
     "place": "feishui",
     "at": "383-10",
     "label": "渡水决战"
    }
   ],
   "outcome": {
    "at": "383-10",
    "type": "victory",
    "text": "淝水破前秦"
   }
  },
  {
   "id": "rt_fs_qin",
   "name": "秦军南下",
   "side": "b",
   "nodes": [
    {
     "place": "changan_qin",
     "at": "383-07",
     "label": "苻坚起兵"
    },
    {
     "place": "shouyang",
     "at": "383-09",
     "label": "据寿阳"
    },
    {
     "place": "feishui",
     "at": "383-10",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "383-09",
    "type": "defeat",
    "text": "前秦南下自溃"
   }
  }
 ],
 "timeline": [
  {
   "at": "383-07",
   "era": "太元八年",
   "label": "前秦南侵",
   "key": false
  },
  {
   "at": "383-10",
   "era": "十月",
   "label": "秦军小却",
   "key": false
  },
  {
   "at": "383-10",
   "era": "十月",
   "label": "淝水溃秦",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "383-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "383-10",
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
   "东晋军",
   "前秦军",
   "综合史料"
  ],
  "party_bucket": {
   "东晋军": "东晋军",
   "前秦军": "前秦军",
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
     "label": "东晋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "前秦军胜",
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
     "label": "东晋军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "前秦军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
