// 本文件由 tools/build.py 自动生成（切片 tianjing），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tianjing"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tianjing"] = {
 "meta": {
  "kind": "battle",
  "region": "qing_modern",
  "title": "天京保卫战",
  "dossier_label": "天京保卫战",
  "subtitle": "同治三年（1864）· 太平军 vs 清（湘军）",
  "primary_place": "tianjing",
  "dossier_event": "event:tj_xiang",
  "terrain_grid": "china_coarse",
  "lead": "曾国藩、曾国荃围天京，地堡破城，洪秀全已殁，城陷。",
  "parties_note": "清方叙湘军苦战，太平方叙殉国。",
  "subject_names": {
   "person:zengguofan": "曾国藩",
   "person:zengguoquan": "曾国荃",
   "person:lixiucheng": "李秀成"
  },
  "page": "tianjing.html",
  "key": "tianjing",
  "scene_id": "tianjing",
  "vocab_pack": "inline:tianjing"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "天京保卫战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "清方叙湘军苦战，太平方叙殉国。"
  }
 ],
 "places": [
  {
   "id": "tianjing",
   "name": "天京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "今南京，太平天国都",
   "elev": 17
  },
  {
   "id": "anqing",
   "name": "安庆",
   "lon": 117.05,
   "lat": 30.53,
   "note": "湘军上游据",
   "elev": 15
  },
  {
   "id": "yuhuatai",
   "name": "雨花台",
   "lon": 118.78,
   "lat": 32.03,
   "note": "湘军屯",
   "elev": 15
  },
  {
   "id": "zhenjiang",
   "name": "镇江",
   "lon": 119.45,
   "lat": 32.2,
   "note": "江防",
   "elev": 15
  }
 ],
 "persons": [
  {
   "id": "zengguofan",
   "name": "曾国藩",
   "side": "清",
   "influence": 0
  },
  {
   "id": "zengguoquan",
   "name": "曾国荃",
   "side": "清",
   "influence": 0
  },
  {
   "id": "lixiucheng",
   "name": "李秀成",
   "side": "太平",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_tj_xiang",
   "subject": "event:tj_xiang",
   "predicate": "战事",
   "value_text": "曾国荃屯雨花台围天京。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1862,
    "end": 1862,
    "era_text": "同治元年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tj_di",
   "subject": "event:tj_di",
   "predicate": "战事",
   "value_text": "湘军地道轰城，天京陷。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1864,
    "end": 1864,
    "era_text": "同治三年"
   },
   "place": "tianjing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tj_wang",
   "subject": "event:tj_wang",
   "predicate": "战事",
   "value_text": "洪秀全先殁，城陷国亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1864,
    "end": 1864,
    "era_text": "同治三年"
   },
   "place": "tianjing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_tj_xiang",
   "subject": "event:tj_xiang",
   "year": 1862,
   "era": "同治元年",
   "title": "湘军围天京",
   "kind": "战事",
   "text": "曾国荃屯雨花台围天京。"
  },
  {
   "id": "ev_tj_di",
   "subject": "event:tj_di",
   "year": 1864,
   "era": "同治三年",
   "title": "地堡破城",
   "kind": "战事",
   "text": "湘军地道轰城，天京陷。",
   "place": "tianjing"
  },
  {
   "id": "ev_tj_wang",
   "subject": "event:tj_wang",
   "year": 1864,
   "era": "同治三年",
   "title": "太平天国亡",
   "kind": "战事",
   "text": "洪秀全先殁，城陷国亡。",
   "place": "tianjing"
  }
 ],
 "engagements": [
  {
   "id": "eng_tj_main",
   "name": "天京破城",
   "at": "1864-07",
   "era": "同治三年七月",
   "place": "tianjing",
   "winner": "b",
   "outcome": "曾国荃掘地道轰塌城墙，湘军入城，太平守军巷战溃，天京陷。",
   "subject": "event:tj_wang",
   "sides": [
    {
     "side": "a",
     "commander": "李秀成",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 50,
     "posture": "死守",
     "commit_basis": "太平据城粮尽援绝，巷战。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "曾国荃",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 80,
     "posture": "攻城",
     "commit_basis": "湘军久围掘地道，以轰破城。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_tj_taiping",
   "name": "太平守城",
   "side": "a",
   "nodes": [
    {
     "place": "anqing",
     "at": "1861-01",
     "label": "安庆陷"
    },
    {
     "place": "tianjing",
     "at": "1862-01",
     "label": "据天京守"
    }
   ],
   "outcome": {
    "at": "1864-07",
    "type": "defeat",
    "text": "天京陷，太平天国亡"
   }
  },
  {
   "id": "rt_tj_xiang",
   "name": "湘军东进",
   "side": "b",
   "nodes": [
    {
     "place": "anqing",
     "at": "1861-01",
     "label": "湘军取安庆"
    },
    {
     "place": "yuhuatai",
     "at": "1862-05",
     "label": "屯雨花台"
    },
    {
     "place": "tianjing",
     "at": "1864-07",
     "label": "破城"
    }
   ],
   "outcome": {
    "at": "1864-07",
    "type": "victory",
    "text": "湘军破天京"
   }
  }
 ],
 "timeline": [
  {
   "at": "1862-01",
   "era": "同治元年",
   "label": "湘军围天京",
   "key": false
  },
  {
   "at": "1864-07",
   "era": "三年七月",
   "label": "地堡破城",
   "key": true
  },
  {
   "at": "1864-07",
   "era": "七月",
   "label": "太平天国亡",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1864-07",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1864-07",
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
   "太平军",
   "湘军",
   "综合史料"
  ],
  "party_bucket": {
   "太平军": "太平军",
   "湘军": "湘军",
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
     "label": "太平军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "湘军胜",
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
     "label": "太平军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "湘军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
