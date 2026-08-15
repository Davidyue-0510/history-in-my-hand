// 本文件由 tools/build.py 自动生成（切片 tumu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tumu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tumu"] = {
 "meta": {
  "kind": "battle",
  "region": "yuan_ming",
  "title": "土木堡之变",
  "dossier_label": "土木堡之变",
  "subtitle": "正统十四年（1449）· 明 vs 瓦剌",
  "primary_place": "tumu",
  "dossier_event": "event:tm_ying",
  "terrain_grid": "china_coarse",
  "lead": "王振挟英宗亲征，土木堡溃，英宗被俘，明军精锐丧。",
  "parties_note": "明方叙王振乱政，瓦剌叙俘帝。",
  "subject_names": {
   "person:zhengtong": "明英宗",
   "person:wangzhen": "王振",
   "person:yexian": "也先"
  },
  "page": "tumu.html",
  "key": "tumu",
  "scene_id": "tumu",
  "vocab_pack": "inline:tumu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "土木堡之变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "明方叙王振乱政，瓦剌叙俘帝。"
  }
 ],
 "places": [
  {
   "id": "tumu",
   "name": "土木堡",
   "lon": 115.47,
   "lat": 40.45,
   "note": "今河北怀来西",
   "elev": 821
  },
  {
   "id": "xuanfu",
   "name": "宣府",
   "lon": 115.03,
   "lat": 40.63,
   "note": "明北边",
   "elev": 726
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "明都",
   "elev": 44
  },
  {
   "id": "datong",
   "name": "大同",
   "lon": 113.3,
   "lat": 40.08,
   "note": "瓦剌入",
   "elev": 1054
  }
 ],
 "persons": [
  {
   "id": "zhengtong",
   "name": "明英宗",
   "side": "明",
   "influence": 0
  },
  {
   "id": "wangzhen",
   "name": "王振",
   "side": "明",
   "influence": 0
  },
  {
   "id": "yexian",
   "name": "也先",
   "side": "瓦剌",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_tm_ying",
   "subject": "event:tm_ying",
   "predicate": "战事",
   "value_text": "王振挟英宗亲征瓦剌。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tm_wa",
   "subject": "event:tm_wa",
   "predicate": "战事",
   "value_text": "也先诱明军至土木堡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "tumu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tm_jz",
   "subject": "event:tm_jz",
   "predicate": "战事",
   "value_text": "明军溃，英宗被俘。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "tumu",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_tm_ying",
   "subject": "event:tm_ying",
   "year": 1449,
   "era": "正统十四年",
   "title": "英宗亲征",
   "kind": "战事",
   "text": "王振挟英宗亲征瓦剌。"
  },
  {
   "id": "ev_tm_wa",
   "subject": "event:tm_wa",
   "year": 1449,
   "era": "正统十四年",
   "title": "瓦剌南犯",
   "kind": "战事",
   "text": "也先诱明军至土木堡。",
   "place": "tumu"
  },
  {
   "id": "ev_tm_jz",
   "subject": "event:tm_jz",
   "year": 1449,
   "era": "正统十四年",
   "title": "土木堡溃",
   "kind": "战事",
   "text": "明军溃，英宗被俘。",
   "place": "tumu"
  }
 ],
 "engagements": [
  {
   "id": "eng_tm_main",
   "name": "土木堡溃",
   "at": "1449-08",
   "era": "正统十四年八月",
   "place": "tumu",
   "winner": "b",
   "outcome": "也先佯退诱明军移营，乘雨缺水解围，明军大溃，英宗被俘。",
   "subject": "event:tm_jz",
   "sides": [
    {
     "side": "a",
     "commander": "英宗/王振",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 80,
     "posture": "移营",
     "commit_basis": "明军仓皇移营，指挥乱。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "也先",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 100,
     "posture": "诱击",
     "commit_basis": "瓦剌以逸待劳，乘懈合围。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_tm_ming",
   "name": "明军北征",
   "side": "a",
   "nodes": [
    {
     "place": "beijing",
     "at": "1449-07",
     "label": "英宗出"
    },
    {
     "place": "datong",
     "at": "1449-08",
     "label": "至大同"
    },
    {
     "place": "tumu",
     "at": "1449-08",
     "label": "土木堡溃"
    }
   ],
   "outcome": {
    "at": "1449-08",
    "type": "defeat",
    "text": "土木堡溃，帝被俘"
   }
  },
  {
   "id": "rt_tm_wa",
   "name": "瓦剌南犯",
   "side": "b",
   "nodes": [
    {
     "place": "datong",
     "at": "1449-08",
     "label": "瓦剌入"
    },
    {
     "place": "tumu",
     "at": "1449-08",
     "label": "合围"
    }
   ],
   "outcome": {
    "at": "1449-08",
    "type": "victory",
    "text": "瓦剌俘明英宗"
   }
  }
 ],
 "timeline": [
  {
   "at": "1449-07",
   "era": "正统十四年",
   "label": "英宗亲征",
   "key": false
  },
  {
   "at": "1449-08",
   "era": "八月",
   "label": "瓦剌诱敌",
   "key": false
  },
  {
   "at": "1449-08",
   "era": "八月",
   "label": "土木堡溃",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1449-08",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1449-08",
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
   "明军",
   "瓦剌军",
   "综合史料"
  ],
  "party_bucket": {
   "明军": "明军",
   "瓦剌军": "瓦剌军",
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
     "label": "明军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "瓦剌军胜",
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
     "label": "明军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "瓦剌军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
