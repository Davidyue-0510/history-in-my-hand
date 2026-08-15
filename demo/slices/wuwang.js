// 本文件由 tools/build.py 自动生成（切片 wuwang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wuwang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wuwang"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "武王克商",
  "dossier_label": "武王克商",
  "subtitle": "前1046 · 商周革命",
  "primary_place": "muye",
  "dossier_event": "event:ww_1048",
  "terrain_grid": "china_coarse",
  "lead": "商纣暴虐、众叛亲离，周武王率诸侯伐纣。前1046 牧野一战，商军倒戈，纣自焚于鹿台，周人克商，分封宗亲功臣，开启八百年基业。",
  "parties_note": "克商年代有「夏商周断代工程」前1046 之说，与古本记载略有出入，此处取主流定年。",
  "subject_names": {
   "person:wuwang": "周武王",
   "person:zhouwang": "商纣王"
  },
  "page": "county.html?scene=wuwang",
  "key": "wuwang",
  "scene_id": "wuwang",
  "vocab_pack": "inline:wuwang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "武王克商·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "克商年代有「夏商周断代工程」前1046 之说，与古本记载略有出入，此处取主流定年。"
  }
 ],
 "places": [
  {
   "id": "muye",
   "name": "牧野",
   "lon": 114.17,
   "lat": 35.6,
   "note": "武王伐纣决战地，今淇县",
   "elev": 109
  },
  {
   "id": "zhaoge",
   "name": "朝歌",
   "lon": 114.18,
   "lat": 35.56,
   "note": "商纣都",
   "elev": 98
  },
  {
   "id": "zhouyuan",
   "name": "周原",
   "lon": 107.9,
   "lat": 34.5,
   "note": "周人兴起地，今岐山",
   "elev": 904
  }
 ],
 "persons": [
  {
   "id": "wuwang",
   "name": "周武王",
   "side": "周",
   "influence": 0
  },
  {
   "id": "zhouwang",
   "name": "商纣王",
   "side": "商",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ww_1048",
   "subject": "event:ww_1048",
   "predicate": "战事",
   "value_text": "武王东观兵孟津，诸侯不期而会者八百，示伐纣之势。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -1048,
    "end": -1048,
    "era_text": "文王受命"
   },
   "place": "zhouyuan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ww_1046",
   "subject": "event:ww_1046",
   "predicate": "战事",
   "value_text": "武王誓师牧野，商军前徒倒戈，纣登鹿台自焚，商亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -1046,
    "end": -1046,
    "era_text": "牧野之朝"
   },
   "place": "muye",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_ww_1048",
   "subject": "event:ww_1048",
   "year": -1048,
   "era": "文王受命",
   "title": "孟津观兵",
   "kind": "会盟",
   "text": "武王东观兵孟津，诸侯不期而会者八百，示伐纣之势。",
   "place": "zhouyuan"
  },
  {
   "id": "ev_ww_1046",
   "subject": "event:ww_1046",
   "year": -1046,
   "era": "牧野之朝",
   "title": "牧野克商",
   "kind": "战事",
   "text": "武王誓师牧野，商军前徒倒戈，纣登鹿台自焚，商亡。",
   "place": "muye"
  }
 ],
 "routes": [
  {
   "id": "rt_ww",
   "name": "周师东进",
   "side": "a",
   "nodes": [
    {
     "place": "zhouyuan",
     "at": "-1048",
     "label": "孟津观兵"
    },
    {
     "place": "muye",
     "at": "-1046",
     "label": "牧野决战"
    }
   ],
   "outcome": {
    "at": "-1046",
    "type": "victory",
    "text": "克商建周"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_ww",
   "name": "牧野之战",
   "at": "-1046",
   "era": "牧野之朝",
   "place": "muye",
   "winner": "a",
   "outcome": "武王率戎车三百、虎贲三千伐商，商军倒戈，一举破之。",
   "subject": "event:ww_1046",
   "sides": [
    {
     "side": "a",
     "commander": "周武王",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 300,
     "posture": "誓师",
     "commit_basis": "周师同德、士气旺盛。",
     "commit_confidence": 0.6
    },
    {
     "side": "b",
     "commander": "商纣王",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 700,
     "posture": "离心",
     "commit_basis": "纣师多囚俘、临阵倒戈。",
     "commit_confidence": 0.35
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "-1048",
   "era": "文王受命",
   "label": "孟津观兵",
   "key": true
  },
  {
   "at": "-1046",
   "era": "牧野",
   "label": "克商·商亡",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "-1046",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "-1046",
    "lost": 0,
    "basis": "败方损失数字以现代考订折中，置信度待核。"
   }
  ],
  "confidence": {
   "a": 0.4,
   "b": 0.4
  },
  "gap_note": "本切片为综合史料整理，数字多为估算，界面应视为待核实。"
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
   "周军",
   "商军",
   "综合史料"
  ],
  "party_bucket": {
   "周军": "周军",
   "商军": "商军",
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
     "label": "周军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "商军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "周军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "商军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
