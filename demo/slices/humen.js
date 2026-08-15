// 本文件由 tools/build.py 自动生成（切片 humen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["humen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["humen"] = {
 "meta": {
  "kind": "battle",
  "region": "qing_modern",
  "title": "虎门之战",
  "dossier_label": "虎门之战",
  "subtitle": "道光二十一年（1841）· 清 vs 英",
  "primary_place": "humen",
  "dossier_event": "event:hm_ying",
  "terrain_grid": "china_coarse",
  "lead": "英舰破虎门炮台，关天培殉国，广州门户开。",
  "parties_note": "清方叙关天培死节，英方叙船坚炮利。",
  "subject_names": {
   "person:guantianpei": "关天培",
   "person:linzeixu": "林则徐",
   "person:yilie": "义律"
  },
  "page": "humen.html",
  "key": "humen",
  "scene_id": "humen",
  "vocab_pack": "inline:humen"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "虎门之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "清方叙关天培死节，英方叙船坚炮利。"
  }
 ],
 "places": [
  {
   "id": "humen",
   "name": "虎门",
   "lon": 113.58,
   "lat": 22.81,
   "note": "今广东东莞珠江口",
   "elev": 42
  },
  {
   "id": "guangzhou",
   "name": "广州",
   "lon": 113.26,
   "lat": 23.13,
   "note": "清粤省",
   "elev": 44
  },
  {
   "id": "dinghai",
   "name": "定海",
   "lon": 122.07,
   "lat": 30.03,
   "note": "英占",
   "elev": 54
  },
  {
   "id": "ningbo",
   "name": "宁波",
   "lon": 121.55,
   "lat": 29.87,
   "note": "英占",
   "elev": 13
  }
 ],
 "persons": [
  {
   "id": "guantianpei",
   "name": "关天培",
   "side": "清",
   "influence": 0
  },
  {
   "id": "linzeixu",
   "name": "林则徐",
   "side": "清",
   "influence": 0
  },
  {
   "id": "yilie",
   "name": "义律",
   "side": "英",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hm_ying",
   "subject": "event:hm_ying",
   "predicate": "战事",
   "value_text": "英舰集珠江口。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1841,
    "end": 1841,
    "era_text": "道光二十一年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hm_guan",
   "subject": "event:hm_guan",
   "predicate": "战事",
   "value_text": "英破虎门，关天培战死。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1841,
    "end": 1841,
    "era_text": "道光二十一年"
   },
   "place": "humen",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hm_jz",
   "subject": "event:hm_jz",
   "predicate": "战事",
   "value_text": "虎门失，广州震动。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1841,
    "end": 1841,
    "era_text": "道光二十一年"
   },
   "place": "humen",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hm_ying",
   "subject": "event:hm_ying",
   "year": 1841,
   "era": "道光二十一年",
   "title": "英犯虎门",
   "kind": "战事",
   "text": "英舰集珠江口。"
  },
  {
   "id": "ev_hm_guan",
   "subject": "event:hm_guan",
   "year": 1841,
   "era": "道光二十一年",
   "title": "关天培殉国",
   "kind": "战事",
   "text": "英破虎门，关天培战死。",
   "place": "humen"
  },
  {
   "id": "ev_hm_jz",
   "subject": "event:hm_jz",
   "year": 1841,
   "era": "道光二十一年",
   "title": "广州门户开",
   "kind": "战事",
   "text": "虎门失，广州震动。",
   "place": "humen"
  }
 ],
 "engagements": [
  {
   "id": "eng_hm_main",
   "name": "虎门炮台",
   "at": "1841-02",
   "era": "道光二十一年二月",
   "place": "humen",
   "winner": "b",
   "outcome": "英舰以蒸汽船破清炮台链，炮台相继陷，关天培殉国。",
   "subject": "event:hm_jz",
   "sides": [
    {
     "side": "a",
     "commander": "关天培",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 40,
     "posture": "死守",
     "commit_basis": "清炮台陈旧，兵力单弱。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "英远征军",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 60,
     "posture": "舰炮",
     "commit_basis": "英舰船坚炮利，破其江防。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_hm_qing",
   "name": "清军守口",
   "side": "a",
   "nodes": [
    {
     "place": "guangzhou",
     "at": "1841-01",
     "label": "清增防"
    },
    {
     "place": "humen",
     "at": "1841-02",
     "label": "炮台"
    }
   ],
   "outcome": {
    "at": "1841-02",
    "type": "defeat",
    "text": "虎门炮台陷"
   }
  },
  {
   "id": "rt_hm_ying",
   "name": "英舰北上",
   "side": "b",
   "nodes": [
    {
     "place": "dinghai",
     "at": "1840-07",
     "label": "英占定海"
    },
    {
     "place": "ningbo",
     "at": "1841-01",
     "label": "英占宁波"
    },
    {
     "place": "humen",
     "at": "1841-02",
     "label": "破虎门"
    }
   ],
   "outcome": {
    "at": "1841-02",
    "type": "victory",
    "text": "英破虎门炮台"
   }
  }
 ],
 "timeline": [
  {
   "at": "1840-07",
   "era": "道光二十年",
   "label": "英占定海",
   "key": false
  },
  {
   "at": "1841-01",
   "era": "二十一年",
   "label": "英逼广州",
   "key": false
  },
  {
   "at": "1841-02",
   "era": "二月",
   "label": "虎门陷",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1841-02",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1841-02",
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
   "英军",
   "综合史料"
  ],
  "party_bucket": {
   "清军": "清军",
   "英军": "英军",
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
     "label": "英军胜",
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
     "label": "英军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
