// 本文件由 tools/build.py 自动生成（切片 heshangyuan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["heshangyuan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["heshangyuan"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "和尚原之战",
  "dossier_label": "和尚原之战",
  "subtitle": "绍兴元年（1131）· 宋 vs 金",
  "primary_place": "heshangyuan",
  "dossier_event": "event:hs_jin",
  "terrain_grid": "china_coarse",
  "lead": "吴玠、吴璘据和尚原险，金兀术兵败退。",
  "parties_note": "宋方叙吴氏兄弟守险，金方讳败。",
  "subject_names": {
   "person:wuju": "吴玠",
   "person:wulin": "吴璘",
   "person:wuzhu": "兀术"
  },
  "page": "heshangyuan.html",
  "key": "heshangyuan",
  "scene_id": "heshangyuan",
  "vocab_pack": "inline:heshangyuan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "和尚原之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙吴氏兄弟守险，金方讳败。"
  }
 ],
 "places": [
  {
   "id": "heshangyuan",
   "name": "和尚原",
   "lon": 106.95,
   "lat": 34.35,
   "note": "今陕西宝鸡西南",
   "elev": 972
  },
  {
   "id": "baoji",
   "name": "宝鸡",
   "lon": 107.24,
   "lat": 34.36,
   "note": "宋边镇",
   "elev": 854
  },
  {
   "id": "fengxiang",
   "name": "凤翔",
   "lon": 107.39,
   "lat": 34.52,
   "note": "金据",
   "elev": 910
  },
  {
   "id": "linan",
   "name": "临安",
   "lon": 120.15,
   "lat": 30.27,
   "note": "宋都",
   "elev": 98
  }
 ],
 "persons": [
  {
   "id": "wuju",
   "name": "吴玠",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "wulin",
   "name": "吴璘",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "wuzhu",
   "name": "兀术",
   "side": "金",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hs_jin",
   "subject": "event:hs_jin",
   "predicate": "战事",
   "value_text": "金自凤翔攻和尚原图入蜀。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1131,
    "end": 1131,
    "era_text": "绍兴元年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hs_wu",
   "subject": "event:hs_wu",
   "predicate": "战事",
   "value_text": "吴玠据原设伏。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1131,
    "end": 1131,
    "era_text": "绍兴元年"
   },
   "place": "heshangyuan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hs_jz",
   "subject": "event:hs_jz",
   "predicate": "战事",
   "value_text": "宋军断金粮道，金军溃退。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1131,
    "end": 1131,
    "era_text": "绍兴元年"
   },
   "place": "heshangyuan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hs_jin",
   "subject": "event:hs_jin",
   "year": 1131,
   "era": "绍兴元年",
   "title": "金攻蜀",
   "kind": "战事",
   "text": "金自凤翔攻和尚原图入蜀。"
  },
  {
   "id": "ev_hs_wu",
   "subject": "event:hs_wu",
   "year": 1131,
   "era": "绍兴元年",
   "title": "吴玠拒险",
   "kind": "战事",
   "text": "吴玠据原设伏。",
   "place": "heshangyuan"
  },
  {
   "id": "ev_hs_jz",
   "subject": "event:hs_jz",
   "year": 1131,
   "era": "绍兴元年",
   "title": "和尚原破金",
   "kind": "战事",
   "text": "宋军断金粮道，金军溃退。",
   "place": "heshangyuan"
  }
 ],
 "engagements": [
  {
   "id": "eng_hs_main",
   "name": "和尚原拒险",
   "at": "1131-10",
   "era": "绍兴元年十月",
   "place": "heshangyuan",
   "winner": "a",
   "outcome": "吴玠据险列栅，金军仰攻不利，宋断其粮道，金兵大溃。",
   "subject": "event:hs_jz",
   "sides": [
    {
     "side": "a",
     "commander": "吴玠/吴璘",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 90,
     "posture": "据险",
     "commit_basis": "宋军扼隘设伏，以寡待众。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "兀术",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 110,
     "posture": "仰攻",
     "commit_basis": "金军攻坚于险地，粮道为断。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_hs_song",
   "name": "宋军西守",
   "side": "a",
   "nodes": [
    {
     "place": "baoji",
     "at": "1131-09",
     "label": "吴玠进驻"
    },
    {
     "place": "heshangyuan",
     "at": "1131-10",
     "label": "设伏"
    }
   ],
   "outcome": {
    "at": "1131-10",
    "type": "victory",
    "text": "和尚原破金"
   }
  },
  {
   "id": "rt_hs_jin",
   "name": "金军攻蜀",
   "side": "b",
   "nodes": [
    {
     "place": "fengxiang",
     "at": "1131-09",
     "label": "金起"
    },
    {
     "place": "heshangyuan",
     "at": "1131-10",
     "label": "仰攻"
    }
   ],
   "outcome": {
    "at": "1131-10",
    "type": "defeat",
    "text": "金攻和尚原败退"
   }
  }
 ],
 "timeline": [
  {
   "at": "1131-09",
   "era": "绍兴元年",
   "label": "金攻和尚原",
   "key": false
  },
  {
   "at": "1131-10",
   "era": "十月",
   "label": "吴玠设伏",
   "key": false
  },
  {
   "at": "1131-10",
   "era": "十月",
   "label": "和尚原破金",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1131-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1131-10",
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
   "宋军",
   "金军",
   "综合史料"
  ],
  "party_bucket": {
   "宋军": "宋军",
   "金军": "金军",
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
     "label": "宋军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "金军胜",
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
     "label": "宋军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "金军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
