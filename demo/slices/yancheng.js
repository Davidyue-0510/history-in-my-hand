// 本文件由 tools/build.py 自动生成（切片 yancheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yancheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yancheng"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "郾城之战",
  "dossier_label": "郾城之战",
  "subtitle": "绍兴十年（1140）· 宋（岳家军） vs 金",
  "primary_place": "yancheng",
  "dossier_event": "event:yc_yue",
  "terrain_grid": "china_coarse",
  "lead": "岳飞以步破金骑，郾城大败兀术铁浮图、拐子马。",
  "parties_note": "宋方叙岳飞用兵，金方讳败。",
  "subject_names": {
   "person:yuefei": "岳飞",
   "person:wuzhu": "兀术",
   "person:zhangxian": "张宪"
  },
  "page": "yancheng.html",
  "key": "yancheng",
  "scene_id": "yancheng",
  "vocab_pack": "inline:yancheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "郾城之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙岳飞用兵，金方讳败。"
  }
 ],
 "places": [
  {
   "id": "yancheng",
   "name": "郾城",
   "lon": 113.97,
   "lat": 33.87,
   "note": "今河南漯河",
   "elev": 60
  },
  {
   "id": "yingchang",
   "name": "颍昌",
   "lon": 113.85,
   "lat": 34.04,
   "note": "岳军别部",
   "elev": 72
  },
  {
   "id": "linan",
   "name": "临安",
   "lon": 120.15,
   "lat": 30.27,
   "note": "宋都",
   "elev": 98
  },
  {
   "id": "zhuxian",
   "name": "朱仙镇",
   "lon": 114.3,
   "lat": 34.45,
   "note": "岳飞进抵",
   "elev": 64
  }
 ],
 "persons": [
  {
   "id": "yuefei",
   "name": "岳飞",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "wuzhu",
   "name": "兀术",
   "side": "金",
   "influence": 0
  },
  {
   "id": "zhangxian",
   "name": "张宪",
   "side": "宋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_yc_yue",
   "subject": "event:yc_yue",
   "predicate": "战事",
   "value_text": "岳飞自襄阳北上复颍昌、郾城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1140,
    "end": 1140,
    "era_text": "绍兴十年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yc_wu",
   "subject": "event:yc_wu",
   "predicate": "战事",
   "value_text": "金兀术率铁浮图攻郾城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1140,
    "end": 1140,
    "era_text": "绍兴十年"
   },
   "place": "yancheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_yc_jz",
   "subject": "event:yc_jz",
   "predicate": "战事",
   "value_text": "岳以麻扎刀破铁浮图，金军溃。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1140,
    "end": 1140,
    "era_text": "绍兴十年"
   },
   "place": "yancheng",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_yc_yue",
   "subject": "event:yc_yue",
   "year": 1140,
   "era": "绍兴十年",
   "title": "岳飞北伐",
   "kind": "战事",
   "text": "岳飞自襄阳北上复颍昌、郾城。"
  },
  {
   "id": "ev_yc_wu",
   "subject": "event:yc_wu",
   "year": 1140,
   "era": "绍兴十年",
   "title": "兀术反扑",
   "kind": "战事",
   "text": "金兀术率铁浮图攻郾城。",
   "place": "yancheng"
  },
  {
   "id": "ev_yc_jz",
   "subject": "event:yc_jz",
   "year": 1140,
   "era": "绍兴十年",
   "title": "郾城破金",
   "kind": "战事",
   "text": "岳以麻扎刀破铁浮图，金军溃。",
   "place": "yancheng"
  }
 ],
 "engagements": [
  {
   "id": "eng_yc_main",
   "name": "郾城破骑",
   "at": "1140-07",
   "era": "绍兴十年七月",
   "place": "yancheng",
   "winner": "a",
   "outcome": "岳飞以步兵持麻扎刀入阵，上砍人下砍马，破金铁浮图、拐子马。",
   "subject": "event:yc_jz",
   "sides": [
    {
     "side": "a",
     "commander": "岳飞",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 70,
     "posture": "步击骑",
     "commit_basis": "宋军以步克骑，专破其甲马。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "兀术",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 90,
     "posture": "铁骑",
     "commit_basis": "金军铁浮图重甲，机动为宋步所制。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_yc_yue",
   "name": "岳家军北上",
   "side": "a",
   "nodes": [
    {
     "place": "linan",
     "at": "1140-05",
     "label": "岳飞起"
    },
    {
     "place": "yingchang",
     "at": "1140-06",
     "label": "复颍昌"
    },
    {
     "place": "yancheng",
     "at": "1140-07",
     "label": "郾城"
    },
    {
     "place": "zhuxian",
     "at": "1140-07",
     "label": "抵朱仙镇"
    }
   ],
   "outcome": {
    "at": "1140-07",
    "type": "victory",
    "text": "郾城破金，兵临汴京"
   }
  },
  {
   "id": "rt_yc_jin",
   "name": "金军反扑",
   "side": "b",
   "nodes": [
    {
     "place": "zhuxian",
     "at": "1140-07",
     "label": "金南下"
    },
    {
     "place": "yancheng",
     "at": "1140-07",
     "label": "攻郾城"
    }
   ],
   "outcome": {
    "at": "1140-07",
    "type": "defeat",
    "text": "金反扑遇步击骑败北"
   }
  }
 ],
 "timeline": [
  {
   "at": "1140-05",
   "era": "绍兴十年",
   "label": "岳飞北伐",
   "key": false
  },
  {
   "at": "1140-07",
   "era": "七月",
   "label": "兀术攻郾城",
   "key": false
  },
  {
   "at": "1140-07",
   "era": "七月",
   "label": "郾城破金",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1140-07",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1140-07",
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
   "岳家军",
   "金军",
   "综合史料"
  ],
  "party_bucket": {
   "岳家军": "岳家军",
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
     "label": "岳家军胜",
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
     "label": "岳家军行军",
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
