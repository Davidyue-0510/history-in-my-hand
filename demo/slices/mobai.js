// 本文件由 tools/build.py 自动生成（切片 mobai），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["mobai"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["mobai"] = {
 "meta": {
  "kind": "battle",
  "region": "qin_han",
  "title": "漠北之战",
  "dossier_label": "漠北之战",
  "subtitle": "汉武帝元狩四年（前119）· 汉 vs 匈奴",
  "primary_place": "mobei",
  "dossier_event": "event:mb_chu",
  "terrain_grid": "china_coarse",
  "lead": "卫青出定襄、霍去病出代郡，深入漠北击匈奴主力，霍去病封狼居胥。",
  "parties_note": "汉方纪功，匈奴无文字记载。",
  "subject_names": {
   "person:huoqb": "霍去病",
   "person:weiqing": "卫青",
   "person:yizhixie": "伊稚斜单于"
  },
  "page": "mobai.html",
  "key": "mobai",
  "scene_id": "mobai",
  "vocab_pack": "inline:mobai"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "漠北之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "汉方纪功，匈奴无文字记载。"
  }
 ],
 "places": [
  {
   "id": "mobei",
   "name": "漠北",
   "lon": 106.9,
   "lat": 47.9,
   "note": "今蒙古高原",
   "elev": 1712
  },
  {
   "id": "chang",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉都",
   "elev": 391
  },
  {
   "id": "dai",
   "name": "代郡",
   "lon": 115.0,
   "lat": 39.4,
   "note": "汉北边",
   "elev": 737
  },
  {
   "id": "langjuxu",
   "name": "狼居胥",
   "lon": 111.0,
   "lat": 49.0,
   "note": "霍去病封禅处",
   "elev": 1119
  }
 ],
 "persons": [
  {
   "id": "huoqb",
   "name": "霍去病",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "weiqing",
   "name": "卫青",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "yizhixie",
   "name": "伊稚斜单于",
   "side": "匈奴",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_mb_chu",
   "subject": "event:mb_chu",
   "predicate": "战事",
   "value_text": "卫青、霍去病各将五万骑出塞。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -119,
    "end": -119,
    "era_text": "元狩四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_mb_hq",
   "subject": "event:mb_hq",
   "predicate": "战事",
   "value_text": "霍去病绝大漠，封狼居胥而还。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -119,
    "end": -119,
    "era_text": "元狩四年"
   },
   "place": "langjuxu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_mb_wq",
   "subject": "event:mb_wq",
   "predicate": "战事",
   "value_text": "卫青出定襄击单于。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -119,
    "end": -119,
    "era_text": "元狩四年"
   },
   "place": "mobei",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_mb_chu",
   "subject": "event:mb_chu",
   "year": -119,
   "era": "元狩四年",
   "title": "汉分道出塞",
   "kind": "战事",
   "text": "卫青、霍去病各将五万骑出塞。"
  },
  {
   "id": "ev_mb_hq",
   "subject": "event:mb_hq",
   "year": -119,
   "era": "元狩四年",
   "title": "霍去病封狼居胥",
   "kind": "战事",
   "text": "霍去病绝大漠，封狼居胥而还。",
   "place": "langjuxu"
  },
  {
   "id": "ev_mb_wq",
   "subject": "event:mb_wq",
   "year": -119,
   "era": "元狩四年",
   "title": "卫青漠北破单于",
   "kind": "战事",
   "text": "卫青出定襄击单于。",
   "place": "mobei"
  }
 ],
 "engagements": [
  {
   "id": "eng_mb_main",
   "name": "漠北决战",
   "at": "B119-06",
   "era": "元狩四年夏",
   "place": "mobei",
   "winner": "a",
   "outcome": "汉军两路深入大漠，卫青击单于、霍去病歼左贤王，匈奴远遁漠北。",
   "subject": "event:mb_wq",
   "sides": [
    {
     "side": "a",
     "commander": "卫青/霍去病",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 600,
     "posture": "远征",
     "commit_basis": "汉骑兵远程奔袭，补给艰难。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "伊稚斜单于",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 500,
     "posture": "退避",
     "commit_basis": "匈奴主动北撤，避汉锋。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_mb_hq",
   "name": "霍去病出代",
   "side": "a",
   "nodes": [
    {
     "place": "dai",
     "at": "B119-04",
     "label": "出代郡"
    },
    {
     "place": "mobei",
     "at": "B119-06",
     "label": "绝漠"
    },
    {
     "place": "langjuxu",
     "at": "B119-06",
     "label": "封狼居胥"
    }
   ],
   "outcome": {
    "at": "B119-06",
    "type": "victory",
    "text": "霍去病封狼居胥"
   }
  },
  {
   "id": "rt_mb_wq",
   "name": "卫青出定襄",
   "side": "a",
   "nodes": [
    {
     "place": "chang",
     "at": "B119-04",
     "label": "出定襄"
    },
    {
     "place": "mobei",
     "at": "B119-06",
     "label": "击单于"
    }
   ],
   "outcome": {
    "at": "B119-06",
    "type": "victory",
    "text": "卫青漠北破单于"
   }
  }
 ],
 "timeline": [
  {
   "at": "B119-04",
   "era": "元狩四年",
   "label": "汉两道出塞",
   "key": false
  },
  {
   "at": "B119-06",
   "era": "夏",
   "label": "漠北决战",
   "key": true
  },
  {
   "at": "B119-06",
   "era": "夏",
   "label": "封狼居胥",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "B119-06",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "B119-06",
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
   "匈奴",
   "综合史料"
  ],
  "party_bucket": {
   "汉军": "汉军",
   "匈奴": "匈奴",
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
     "label": "匈奴胜",
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
     "label": "匈奴行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
