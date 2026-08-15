// 本文件由 tools/build.py 自动生成（切片 zhongli），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhongli"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhongli"] = {
 "meta": {
  "kind": "battle",
  "region": "two_jin",
  "title": "钟离之战",
  "dossier_label": "钟离之战",
  "subtitle": "天监六年（507）· 梁 vs 北魏",
  "primary_place": "zhongli",
  "dossier_event": "event:zl_wei",
  "terrain_grid": "china_coarse",
  "lead": "韦叡筑堰水攻，钟离内外夹击，大破魏军。",
  "parties_note": "梁方叙韦叡方略，魏方讳败。",
  "subject_names": {
   "person:weirui": "韦叡",
   "person:yuanying": "元英"
  },
  "page": "zhongli.html",
  "key": "zhongli",
  "scene_id": "zhongli",
  "vocab_pack": "inline:zhongli"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "钟离之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "梁方叙韦叡方略，魏方讳败。"
  }
 ],
 "places": [
  {
   "id": "zhongli",
   "name": "钟离",
   "lon": 117.43,
   "lat": 32.88,
   "note": "今安徽凤阳东",
   "elev": 25
  },
  {
   "id": "shouyang",
   "name": "寿阳",
   "lon": 116.78,
   "lat": 32.57,
   "note": "魏军据",
   "elev": 20
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "note": "梁都",
   "elev": 17
  },
  {
   "id": "luoyang_wei",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "北魏都",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "weirui",
   "name": "韦叡",
   "side": "梁",
   "influence": 0
  },
  {
   "id": "yuanying",
   "name": "元英",
   "side": "北魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zl_wei",
   "subject": "event:zl_wei",
   "predicate": "战事",
   "value_text": "北魏中山王英围钟离。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zl_wei2",
   "subject": "event:zl_wei2",
   "predicate": "战事",
   "value_text": "韦叡率兵救钟离。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "place": "zhongli",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zl_jz",
   "subject": "event:zl_jz",
   "predicate": "战事",
   "value_text": "梁军水陆夹击，魏军溃。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 507,
    "end": 507,
    "era_text": "天监六年"
   },
   "place": "zhongli",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zl_wei",
   "subject": "event:zl_wei",
   "year": 507,
   "era": "天监六年",
   "title": "魏围钟离",
   "kind": "战事",
   "text": "北魏中山王英围钟离。"
  },
  {
   "id": "ev_zl_wei2",
   "subject": "event:zl_wei2",
   "year": 507,
   "era": "天监六年",
   "title": "韦叡赴援",
   "kind": "战事",
   "text": "韦叡率兵救钟离。",
   "place": "zhongli"
  },
  {
   "id": "ev_zl_jz",
   "subject": "event:zl_jz",
   "year": 507,
   "era": "天监六年",
   "title": "钟离破魏",
   "kind": "战事",
   "text": "梁军水陆夹击，魏军溃。",
   "place": "zhongli"
  }
 ],
 "engagements": [
  {
   "id": "eng_zl_main",
   "name": "钟离夹击",
   "at": "507-04",
   "era": "天监六年四月",
   "place": "zhongli",
   "winner": "a",
   "outcome": "韦叡筑堰蓄水，战舰攻魏桥，城中守军出，内外夹击魏军大溃。",
   "subject": "event:zl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "韦叡",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 130,
     "posture": "水陆夹击",
     "commit_basis": "梁军据城以逸待劳，水攻破其浮桥。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "元英",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 150,
     "posture": "顿兵",
     "commit_basis": "魏军久围疲敝，浮桥为水所破。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_zl_liang",
   "name": "梁军救钟离",
   "side": "a",
   "nodes": [
    {
     "place": "jiankang",
     "at": "507-02",
     "label": "韦叡起"
    },
    {
     "place": "zhongli",
     "at": "507-04",
     "label": "夹击"
    }
   ],
   "outcome": {
    "at": "507-04",
    "type": "victory",
    "text": "钟离破魏"
   }
  },
  {
   "id": "rt_zl_wei",
   "name": "魏军南下",
   "side": "b",
   "nodes": [
    {
     "place": "luoyang_wei",
     "at": "507-01",
     "label": "魏起兵"
    },
    {
     "place": "shouyang",
     "at": "507-02",
     "label": "据寿阳"
    },
    {
     "place": "zhongli",
     "at": "507-03",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "507-03",
    "type": "defeat",
    "text": "魏围钟离反溃"
   }
  }
 ],
 "timeline": [
  {
   "at": "507-01",
   "era": "天监六年",
   "label": "魏围钟离",
   "key": false
  },
  {
   "at": "507-03",
   "era": "三月",
   "label": "韦叡赴援",
   "key": false
  },
  {
   "at": "507-04",
   "era": "四月",
   "label": "钟离破魏",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "507-04",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "507-04",
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
   "梁军",
   "北魏军",
   "综合史料"
  ],
  "party_bucket": {
   "梁军": "梁军",
   "北魏军": "北魏军",
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
     "label": "梁军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "北魏军胜",
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
     "label": "梁军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "北魏军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
