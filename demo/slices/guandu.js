// 本文件由 tools/build.py 自动生成（切片 guandu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guandu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guandu"] = {
 "meta": {
  "kind": "battle",
  "region": "three_kingdoms",
  "title": "官渡之战",
  "dossier_label": "官渡之战",
  "subtitle": "汉献帝建安五年（200）· 曹 vs 袁",
  "primary_place": "guandu",
  "dossier_event": "event:gd_yuan",
  "terrain_grid": "china_coarse",
  "lead": "曹操奇袭乌巢焚袁绍粮，官渡大败袁军，奠定统一北方。",
  "parties_note": "曹方叙用奇，袁方叙刚愎。",
  "subject_names": {
   "person:caocao": "曹操",
   "person:yuanshao": "袁绍",
   "person:xunyou": "荀攸"
  },
  "page": "guandu.html",
  "key": "guandu",
  "scene_id": "guandu",
  "vocab_pack": "inline:guandu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "官渡之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "曹方叙用奇，袁方叙刚愎。"
  }
 ],
 "places": [
  {
   "id": "guandu",
   "name": "官渡",
   "lon": 113.97,
   "lat": 34.73,
   "note": "今河南中牟北",
   "elev": 81
  },
  {
   "id": "wuchao",
   "name": "乌巢",
   "lon": 113.95,
   "lat": 34.8,
   "note": "袁绍粮屯，今河南延津东南",
   "elev": 73
  },
  {
   "id": "xuchang",
   "name": "许昌",
   "lon": 113.85,
   "lat": 34.04,
   "note": "曹操据",
   "elev": 72
  },
  {
   "id": "liyang",
   "name": "黎阳",
   "lon": 114.67,
   "lat": 35.67,
   "note": "袁军渡河",
   "elev": 56
  },
  {
   "id": "ye",
   "name": "邺",
   "lon": 114.62,
   "lat": 36.35,
   "note": "袁绍治",
   "elev": 64
  }
 ],
 "persons": [
  {
   "id": "caocao",
   "name": "曹操",
   "side": "曹",
   "influence": 0
  },
  {
   "id": "yuanshao",
   "name": "袁绍",
   "side": "袁",
   "influence": 0
  },
  {
   "id": "xunyou",
   "name": "荀攸",
   "side": "曹",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_gd_yuan",
   "subject": "event:gd_yuan",
   "predicate": "战事",
   "value_text": "袁绍率众屯黎阳，南攻许。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 200,
    "end": 200,
    "era_text": "建安五年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gd_wuchao",
   "subject": "event:gd_wuchao",
   "predicate": "战事",
   "value_text": "曹操亲袭乌巢，焚袁粮。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 200,
    "end": 200,
    "era_text": "建安五年"
   },
   "place": "guandu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gd_jz",
   "subject": "event:gd_jz",
   "predicate": "战事",
   "value_text": "袁军闻粮尽溃，曹追破之。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 200,
    "end": 200,
    "era_text": "建安五年"
   },
   "place": "guandu",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_gd_yuan",
   "subject": "event:gd_yuan",
   "year": 200,
   "era": "建安五年",
   "title": "袁绍南渡",
   "kind": "战事",
   "text": "袁绍率众屯黎阳，南攻许。"
  },
  {
   "id": "ev_gd_wuchao",
   "subject": "event:gd_wuchao",
   "year": 200,
   "era": "建安五年",
   "title": "乌巢焚粮",
   "kind": "战事",
   "text": "曹操亲袭乌巢，焚袁粮。",
   "place": "guandu"
  },
  {
   "id": "ev_gd_jz",
   "subject": "event:gd_jz",
   "year": 200,
   "era": "建安五年",
   "title": "官渡决战",
   "kind": "战事",
   "text": "袁军闻粮尽溃，曹追破之。",
   "place": "guandu"
  }
 ],
 "engagements": [
  {
   "id": "eng_gd_main",
   "name": "官渡决战",
   "at": "200-10",
   "era": "建安五年十月",
   "place": "guandu",
   "winner": "a",
   "outcome": "曹操以轻兵袭乌巢焚袁绍积谷，袁军心动摇溃散，坑卒七万。",
   "subject": "event:gd_jz",
   "sides": [
    {
     "side": "a",
     "commander": "曹操",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 150,
     "posture": "奇袭",
     "commit_basis": "曹选锐卒夜袭粮屯，孤注一掷。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "袁绍",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 180,
     "posture": "分守",
     "commit_basis": "袁军势众而粮道疏，闻变自溃。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_gd_cao",
   "name": "曹袭乌巢",
   "side": "a",
   "nodes": [
    {
     "place": "xuchang",
     "at": "200-09",
     "label": "曹屯官渡"
    },
    {
     "place": "guandu",
     "at": "200-10",
     "label": "正面相持"
    },
    {
     "place": "wuchao",
     "at": "200-10",
     "label": "奇袭乌巢"
    }
   ],
   "outcome": {
    "at": "200-10",
    "type": "victory",
    "text": "焚袁粮，官渡破绍"
   }
  },
  {
   "id": "rt_gd_yuan",
   "name": "袁军南下",
   "side": "b",
   "nodes": [
    {
     "place": "ye",
     "at": "200-01",
     "label": "袁起兵"
    },
    {
     "place": "liyang",
     "at": "200-02",
     "label": "渡河"
    },
    {
     "place": "guandu",
     "at": "200-09",
     "label": "屯官渡"
    }
   ],
   "outcome": {
    "at": "200-09",
    "type": "defeat",
    "text": "袁绍南攻受阻于官渡"
   }
  }
 ],
 "timeline": [
  {
   "at": "200-01",
   "era": "建安五年",
   "label": "袁绍南攻",
   "key": false
  },
  {
   "at": "200-09",
   "era": "九月",
   "label": "官渡相持",
   "key": false
  },
  {
   "at": "200-10",
   "era": "十月",
   "label": "乌巢焚粮·袁溃",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "200-10",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "200-10",
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
   "曹操军",
   "袁绍军",
   "综合史料"
  ],
  "party_bucket": {
   "曹操军": "曹操军",
   "袁绍军": "袁绍军",
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
     "label": "曹操军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "袁绍军胜",
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
     "label": "曹操军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "袁绍军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
