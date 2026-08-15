// 本文件由 tools/build.py 自动生成（切片 huangjin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huangjin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huangjin"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "黄巾起义",
  "dossier_label": "黄巾起义",
  "subtitle": "184 · 张角 vs 东汉",
  "primary_place": "julu_up",
  "dossier_event": "event:hj_184",
  "terrain_grid": "china_coarse",
  "lead": "张角创太平道，十余年为乱世张本；184 年「苍天已死，黄天当立」举事，八州响应，汉室发州郡兵镇压，虽平而衰。",
  "parties_note": "黄巾与东汉双方记载悬殊：官方视「贼」、民间多同情；此处综合《后汉书》与近代研究。",
  "subject_names": {
   "person:zhangjiao": "张角",
   "person:huangfusong": "皇甫嵩"
  },
  "page": "county.html?scene=huangjin",
  "key": "huangjin",
  "scene_id": "huangjin",
  "vocab_pack": "inline:huangjin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "黄巾起义·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "黄巾与东汉双方记载悬殊：官方视「贼」、民间多同情；此处综合《后汉书》与近代研究。"
  }
 ],
 "places": [
  {
   "id": "julu_up",
   "name": "巨鹿",
   "lon": 115.04,
   "lat": 37.07,
   "note": "张角起兵地",
   "elev": 32
  },
  {
   "id": "luoyang_up",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉都，黄巾威胁",
   "elev": 171
  },
  {
   "id": "guangzong",
   "name": "广宗",
   "lon": 115.1,
   "lat": 37.1,
   "note": "张角弟张梁战死处",
   "elev": 33
  }
 ],
 "persons": [
  {
   "id": "zhangjiao",
   "name": "张角",
   "side": "黄巾",
   "influence": 0
  },
  {
   "id": "huangfusong",
   "name": "皇甫嵩",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hj_184",
   "subject": "event:hj_184",
   "predicate": "战事",
   "value_text": "张角以太平道聚众数十万，三十六方同日反，皆著黄巾，史称黄巾起义。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 184,
    "end": 184,
    "era_text": "中平元年"
   },
   "place": "julu_up",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hj_spread",
   "subject": "event:hj_spread",
   "predicate": "战事",
   "value_text": "黄巾蔓延青徐幽冀荆扬兖豫八州，京师震动，汉灵帝发天下兵讨之。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 184,
    "end": 184,
    "era_text": "中平元年"
   },
   "place": "luoyang_up",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hj_185",
   "subject": "event:hj_185",
   "predicate": "战事",
   "value_text": "皇甫嵩、朱儁等破黄巾，张角已死、张梁战广宗，黄巾主力平，余部流为军阀。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 185,
    "end": 185,
    "era_text": "中平二年"
   },
   "place": "guangzong",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hj_184",
   "subject": "event:hj_184",
   "year": 184,
   "era": "中平元年",
   "title": "张角举事",
   "kind": "战事",
   "text": "张角以太平道聚众数十万，三十六方同日反，皆著黄巾，史称黄巾起义。",
   "place": "julu_up"
  },
  {
   "id": "ev_hj_spread",
   "subject": "event:hj_spread",
   "year": 184,
   "era": "中平元年",
   "title": "八州响应",
   "kind": "战事",
   "text": "黄巾蔓延青徐幽冀荆扬兖豫八州，京师震动，汉灵帝发天下兵讨之。",
   "place": "luoyang_up"
  },
  {
   "id": "ev_hj_185",
   "subject": "event:hj_185",
   "year": 185,
   "era": "中平二年",
   "title": "主力被镇压",
   "kind": "战事",
   "text": "皇甫嵩、朱儁等破黄巾，张角已死、张梁战广宗，黄巾主力平，余部流为军阀。",
   "place": "guangzong"
  }
 ],
 "routes": [
  {
   "id": "rt_hj_spread",
   "name": "黄巾蔓延",
   "side": "a",
   "nodes": [
    {
     "place": "julu_up",
     "at": "184",
     "label": "巨鹿起"
    },
    {
     "place": "luoyang_up",
     "at": "184",
     "label": "逼洛阳"
    },
    {
     "place": "guangzong",
     "at": "184",
     "label": "广宗决战"
    }
   ],
   "outcome": {
    "at": "184",
    "type": "victory",
    "text": "八州响应"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_hj_main",
   "name": "广宗之战",
   "at": "185",
   "era": "中平二年",
   "place": "guangzong",
   "winner": "b",
   "outcome": "皇甫嵩夜袭黄巾营，张梁战死，斩首数万，黄巾主力溃。",
   "subject": "event:hj_185",
   "sides": [
    {
     "side": "a",
     "commander": "张梁",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 300,
     "posture": "死守",
     "commit_basis": "黄巾据营顽抗，粮尽援绝。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "皇甫嵩",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 320,
     "posture": "夜袭",
     "commit_basis": "汉军乘懈夜攻，一举破营。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "184",
   "era": "中平元",
   "label": "张角举事",
   "key": true
  },
  {
   "at": "184",
   "era": "中平元",
   "label": "八州响应",
   "key": false
  },
  {
   "at": "185",
   "era": "中平二",
   "label": "广宗破·主力平",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "185",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "185",
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
   "黄巾军",
   "汉军",
   "综合史料"
  ],
  "party_bucket": {
   "黄巾军": "黄巾军",
   "汉军": "汉军",
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
     "label": "黄巾军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "汉军胜",
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
     "label": "黄巾军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "汉军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
