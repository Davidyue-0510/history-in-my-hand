// 本文件由 tools/build.py 自动生成（切片 changping），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["changping"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["changping"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "长平之战",
  "dossier_label": "长平之战",
  "subtitle": "周赧王五十三—五十五年（前262—前260）· 秦 vs 赵",
  "primary_place": "changping",
  "dossier_event": "event:cp_sd",
  "terrain_grid": "china_coarse",
  "lead": "白起诱赵括出击，断粮道围歼赵军四十余万，坑杀降卒。战国规模最大的歼灭战。",
  "parties_note": "秦方纪功、赵方讳败；数字以现代考订折中。",
  "subject_names": {
   "person:baiqi": "白起",
   "person:zhao_kuo": "赵括",
   "person:lianpo": "廉颇"
  },
  "page": "changping.html",
  "key": "changping",
  "scene_id": "changping",
  "vocab_pack": "inline:changping"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "长平之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "秦方纪功、赵方讳败；数字以现代考订折中。"
  }
 ],
 "places": [
  {
   "id": "changping",
   "name": "长平",
   "lon": 112.5,
   "lat": 35.78,
   "note": "今山西高平西北长平村",
   "elev": 840
  },
  {
   "id": "danze",
   "name": "丹朱岭",
   "lon": 112.62,
   "lat": 35.85,
   "note": "长平之北屏障",
   "elev": 1067
  },
  {
   "id": "handan",
   "name": "邯郸",
   "lon": 114.49,
   "lat": 36.61,
   "note": "赵都",
   "elev": 76
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
   "id": "shangdang",
   "name": "上党",
   "lon": 112.86,
   "lat": 36.2,
   "note": "归赵引发战端",
   "elev": 961
  }
 ],
 "persons": [
  {
   "id": "baiqi",
   "name": "白起",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "zhao_kuo",
   "name": "赵括",
   "side": "赵",
   "influence": 0
  },
  {
   "id": "lianpo",
   "name": "廉颇",
   "side": "赵",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cp_sd",
   "subject": "event:cp_sd",
   "predicate": "战事",
   "value_text": "秦受韩上党降，取南阳扼赵。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -262,
    "end": -262,
    "era_text": "周赧王五十三年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cp_kr",
   "subject": "event:cp_kr",
   "predicate": "战事",
   "value_text": "赵王以赵括代廉颇，改守为攻。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -260,
    "end": -260,
    "era_text": "周赧王五十五年"
   },
   "place": "changping",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cp_jz",
   "subject": "event:cp_jz",
   "predicate": "战事",
   "value_text": "白起断粮围歼，赵军降卒被坑。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -260,
    "end": -260,
    "era_text": "周赧王五十五年九月"
   },
   "place": "changping",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_cp_sd",
   "subject": "event:cp_sd",
   "year": -262,
   "era": "周赧王五十三年",
   "title": "秦取上党",
   "kind": "战事",
   "text": "秦受韩上党降，取南阳扼赵。"
  },
  {
   "id": "ev_cp_kr",
   "subject": "event:cp_kr",
   "year": -260,
   "era": "周赧王五十五年",
   "title": "赵括代廉颇",
   "kind": "战事",
   "text": "赵王以赵括代廉颇，改守为攻。",
   "place": "changping"
  },
  {
   "id": "ev_cp_jz",
   "subject": "event:cp_jz",
   "year": -260,
   "era": "周赧王五十五年九月",
   "title": "长平决战",
   "kind": "战事",
   "text": "白起断粮围歼，赵军降卒被坑。",
   "place": "changping"
  }
 ],
 "engagements": [
  {
   "id": "eng_cp_main",
   "name": "长平决战",
   "at": "B260-09",
   "era": "周赧王五十五年九月",
   "place": "changping",
   "winner": "a",
   "outcome": "白起诱敌出击后奇兵绝赵粮道，反包围长平，赵军被困四十六日，主将战死，四十余万降卒被坑杀。",
   "subject": "event:cp_jz",
   "sides": [
    {
     "side": "a",
     "commander": "白起",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 190,
     "posture": "钳形反包围",
     "commit_basis": "秦军迂回绝赵粮道，以逸待劳。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "赵括",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 160,
     "posture": "突围",
     "commit_basis": "赵军被困粮尽，突围失败。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_cp_qin",
   "name": "秦军绝粮",
   "side": "a",
   "nodes": [
    {
     "place": "changping",
     "at": "B260-08",
     "label": "出奇兵绝赵粮道"
    },
    {
     "place": "danze",
     "at": "B260-09",
     "label": "合围长平"
    }
   ],
   "outcome": {
    "at": "B260-09",
    "type": "victory",
    "text": "秦军合围长平，赵军覆没"
   }
  },
  {
   "id": "rt_cp_zhao",
   "name": "赵军出击",
   "side": "b",
   "nodes": [
    {
     "place": "handan",
     "at": "B260-07",
     "label": "赵括率军赴长平"
    },
    {
     "place": "changping",
     "at": "B260-08",
     "label": "接战"
    }
   ],
   "outcome": {
    "at": "B260-08",
    "type": "defeat",
    "text": "赵军改守为攻，陷入包围"
   }
  }
 ],
 "timeline": [
  {
   "at": "B260-07",
   "era": "周赧王五十五年七月",
   "label": "赵括赴长平",
   "key": false
  },
  {
   "at": "B260-08",
   "era": "八月",
   "label": "秦绝赵粮道",
   "key": true
  },
  {
   "at": "B260-09",
   "era": "九月",
   "label": "长平决战·赵军覆没",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B260-09",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B260-09",
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
   "秦军",
   "赵军",
   "综合史料"
  ],
  "party_bucket": {
   "秦军": "秦军",
   "赵军": "赵军",
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
     "label": "赵军胜",
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
     "label": "秦军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "赵军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
