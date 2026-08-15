// 本文件由 tools/build.py 自动生成（切片 beijing），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["beijing"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["beijing"] = {
 "meta": {
  "kind": "battle",
  "region": "yuan_ming",
  "title": "北京保卫战",
  "dossier_label": "北京保卫战",
  "subtitle": "正统十四年（1449）· 明 vs 瓦剌",
  "primary_place": "beijing",
  "dossier_event": "event:bj_yu",
  "terrain_grid": "china_coarse",
  "lead": "于谦立景泰、励军民，北京九门拒瓦剌，敌退。",
  "parties_note": "明方叙于谦社稷功，瓦剌讳攻城不下。",
  "subject_names": {
   "person:yuqian": "于谦",
   "person:yexian": "也先",
   "person:jingtai": "景泰帝"
  },
  "page": "beijing.html",
  "key": "beijing",
  "scene_id": "beijing",
  "vocab_pack": "inline:beijing"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "北京保卫战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "明方叙于谦社稷功，瓦剌讳攻城不下。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "明都",
   "elev": 44
  },
  {
   "id": "desheng",
   "name": "德胜门",
   "lon": 116.39,
   "lat": 39.94,
   "note": "于谦拒敌",
   "elev": 44
  },
  {
   "id": "juyong",
   "name": "居庸关",
   "lon": 116.07,
   "lat": 40.3,
   "note": "北边要隘",
   "elev": 392
  },
  {
   "id": "tumu",
   "name": "土木堡",
   "lon": 115.47,
   "lat": 40.45,
   "note": "帝被俘处",
   "elev": 821
  }
 ],
 "persons": [
  {
   "id": "yuqian",
   "name": "于谦",
   "side": "明",
   "influence": 0
  },
  {
   "id": "yexian",
   "name": "也先",
   "side": "瓦剌",
   "influence": 0
  },
  {
   "id": "jingtai",
   "name": "景泰帝",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bj_yu",
   "subject": "event:bj_yu",
   "predicate": "战事",
   "value_text": "于谦立景泰帝，誓守北京。",
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
   "id": "AX_ev_bj_wa",
   "subject": "event:bj_wa",
   "predicate": "战事",
   "value_text": "也先挟英宗攻北京。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_jz",
   "subject": "event:bj_jz",
   "predicate": "战事",
   "value_text": "明军九门拒守，瓦剌退。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1449,
    "end": 1449,
    "era_text": "正统十四年"
   },
   "place": "desheng",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_bj_yu",
   "subject": "event:bj_yu",
   "year": 1449,
   "era": "正统十四年",
   "title": "于谦主战",
   "kind": "战事",
   "text": "于谦立景泰帝，誓守北京。"
  },
  {
   "id": "ev_bj_wa",
   "subject": "event:bj_wa",
   "year": 1449,
   "era": "正统十四年",
   "title": "瓦剌逼京",
   "kind": "战事",
   "text": "也先挟英宗攻北京。",
   "place": "beijing"
  },
  {
   "id": "ev_bj_jz",
   "subject": "event:bj_jz",
   "year": 1449,
   "era": "正统十四年",
   "title": "北京拒敌",
   "kind": "战事",
   "text": "明军九门拒守，瓦剌退。",
   "place": "desheng"
  }
 ],
 "engagements": [
  {
   "id": "eng_bj_main",
   "name": "北京拒守",
   "at": "1449-10",
   "era": "正统十四年十月",
   "place": "desheng",
   "winner": "a",
   "outcome": "于谦亲督军门，军民死守，瓦剌攻城不克，闻关外袭威胁退。",
   "subject": "event:bj_jz",
   "sides": [
    {
     "side": "a",
     "commander": "于谦",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 60,
     "posture": "死守",
     "commit_basis": "明军据城励众，背城借一。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "也先",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 80,
     "posture": "顿兵",
     "commit_basis": "瓦剌挟帝攻坚不下，师老兵疲。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_bj_ming",
   "name": "明军守京",
   "side": "a",
   "nodes": [
    {
     "place": "beijing",
     "at": "1449-09",
     "label": "于谦整军"
    },
    {
     "place": "desheng",
     "at": "1449-10",
     "label": "九门拒敌"
    }
   ],
   "outcome": {
    "at": "1449-10",
    "type": "victory",
    "text": "北京拒瓦剌"
   }
  },
  {
   "id": "rt_bj_wa",
   "name": "瓦剌逼京",
   "side": "b",
   "nodes": [
    {
     "place": "tumu",
     "at": "1449-09",
     "label": "挟帝北还"
    },
    {
     "place": "juyong",
     "at": "1449-10",
     "label": "入关"
    },
    {
     "place": "desheng",
     "at": "1449-10",
     "label": "攻城"
    }
   ],
   "outcome": {
    "at": "1449-10",
    "type": "defeat",
    "text": "瓦剌攻北京不克退"
   }
  }
 ],
 "timeline": [
  {
   "at": "1449-09",
   "era": "正统十四年",
   "label": "于谦主战",
   "key": false
  },
  {
   "at": "1449-10",
   "era": "十月",
   "label": "瓦剌逼京",
   "key": false
  },
  {
   "at": "1449-10",
   "era": "十月",
   "label": "北京拒敌",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1449-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1449-10",
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
