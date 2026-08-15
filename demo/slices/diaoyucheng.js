// 本文件由 tools/build.py 自动生成（切片 diaoyucheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["diaoyucheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["diaoyucheng"] = {
 "meta": {
  "kind": "battle",
  "region": "song",
  "title": "钓鱼城之战",
  "dossier_label": "钓鱼城之战",
  "subtitle": "开庆元年（1259）· 宋 vs 蒙古",
  "primary_place": "diaoyucheng",
  "dossier_event": "event:dy_meng",
  "terrain_grid": "china_coarse",
  "lead": "王坚、张珏死守钓鱼城，蒙哥汗战死城下，漠北争位。",
  "parties_note": "宋方叙孤城死守，蒙古讳汗死。",
  "subject_names": {
   "person:wangjian": "王坚",
   "person:zhangjue": "张珏",
   "person:mengge": "蒙哥"
  },
  "page": "diaoyucheng.html",
  "key": "diaoyucheng",
  "scene_id": "diaoyucheng",
  "vocab_pack": "inline:diaoyucheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "钓鱼城之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "宋方叙孤城死守，蒙古讳汗死。"
  }
 ],
 "places": [
  {
   "id": "diaoyucheng",
   "name": "钓鱼城",
   "lon": 106.3,
   "lat": 30.0,
   "note": "今重庆合川东",
   "elev": 203
  },
  {
   "id": "hezhou",
   "name": "合州",
   "lon": 106.27,
   "lat": 30.03,
   "note": "宋州",
   "elev": 225
  },
  {
   "id": "chongqing",
   "name": "重庆",
   "lon": 106.55,
   "lat": 29.56,
   "note": "宋川蜀",
   "elev": 265
  },
  {
   "id": "dadu",
   "name": "大都",
   "lon": 116.4,
   "lat": 39.9,
   "note": "蒙古都",
   "elev": 44
  }
 ],
 "persons": [
  {
   "id": "wangjian",
   "name": "王坚",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "zhangjue",
   "name": "张珏",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "mengge",
   "name": "蒙哥",
   "side": "蒙古",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dy_meng",
   "subject": "event:dy_meng",
   "predicate": "战事",
   "value_text": "蒙哥自汉中攻四川，围钓鱼城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_wang",
   "subject": "event:dy_wang",
   "predicate": "战事",
   "value_text": "王坚、张珏死守钓鱼城。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "place": "diaoyucheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dy_jz",
   "subject": "event:dy_jz",
   "predicate": "战事",
   "value_text": "蒙哥汗攻城死，蒙古退师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1259,
    "end": 1259,
    "era_text": "开庆元年"
   },
   "place": "diaoyucheng",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_dy_meng",
   "subject": "event:dy_meng",
   "year": 1259,
   "era": "开庆元年",
   "title": "蒙哥南征",
   "kind": "战事",
   "text": "蒙哥自汉中攻四川，围钓鱼城。"
  },
  {
   "id": "ev_dy_wang",
   "subject": "event:dy_wang",
   "year": 1259,
   "era": "开庆元年",
   "title": "王坚守城",
   "kind": "战事",
   "text": "王坚、张珏死守钓鱼城。",
   "place": "diaoyucheng"
  },
  {
   "id": "ev_dy_jz",
   "subject": "event:dy_jz",
   "year": 1259,
   "era": "开庆元年",
   "title": "蒙哥死城下",
   "kind": "战事",
   "text": "蒙哥汗攻城死，蒙古退师。",
   "place": "diaoyucheng"
  }
 ],
 "engagements": [
  {
   "id": "eng_dy_main",
   "name": "钓鱼城死守",
   "at": "1259-07",
   "era": "开庆元年七月",
   "place": "diaoyucheng",
   "winner": "a",
   "outcome": "钓鱼城凭山筑垒，蒙古久攻不下，蒙哥中砲死，旭烈兀西征军东归争位。",
   "subject": "event:dy_jz",
   "sides": [
    {
     "side": "a",
     "commander": "王坚/张珏",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 40,
     "posture": "死守",
     "commit_basis": "孤城天险，军民死守岁余。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "蒙哥",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 60,
     "posture": "顿兵",
     "commit_basis": "蒙古顿于坚城，暑疫主将死。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_dy_song",
   "name": "宋军守城",
   "side": "a",
   "nodes": [
    {
     "place": "hezhou",
     "at": "1258-01",
     "label": "王坚守合州"
    },
    {
     "place": "diaoyucheng",
     "at": "1259-01",
     "label": "据城死守"
    }
   ],
   "outcome": {
    "at": "1259-07",
    "type": "victory",
    "text": "蒙哥死城下，蒙古退"
   }
  },
  {
   "id": "rt_dy_meng",
   "name": "蒙古南下",
   "side": "b",
   "nodes": [
    {
     "place": "dadu",
     "at": "1258-01",
     "label": "蒙哥起"
    },
    {
     "place": "diaoyucheng",
     "at": "1259-02",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "1259-06",
    "type": "defeat",
    "text": "蒙古围钓鱼城，汗死退师"
   }
  }
 ],
 "timeline": [
  {
   "at": "1258-01",
   "era": "宝祐六年",
   "label": "蒙哥攻蜀",
   "key": false
  },
  {
   "at": "1259-02",
   "era": "开庆元年",
   "label": "围钓鱼城",
   "key": false
  },
  {
   "at": "1259-07",
   "era": "七月",
   "label": "蒙哥死城下",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1259-07",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1259-07",
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
   "蒙古军",
   "综合史料"
  ],
  "party_bucket": {
   "宋军": "宋军",
   "蒙古军": "蒙古军",
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
     "label": "蒙古军胜",
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
     "label": "蒙古军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
