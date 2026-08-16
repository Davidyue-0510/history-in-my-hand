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
   "bias_note": "黄巾与东汉双方记载悬殊：官方视「贼」、民间多同情；此处综合《后汉书》与近代研究。",
   "stance_label": "私修编年·综合",
   "distance_label": "成书南朝宋（范晔《后汉书》约 5 世纪），距事约 250 年"
  },
  {
   "id": "hj_rebel_src",
   "title": "黄巾方文献",
   "name": "太平道相关",
   "party": "黄巾军",
   "faction": "hj_rebel",
   "bias_note": "民间道门叙事，几无文字传世，多经官书转述。",
   "stance_label": "民间·几无文字传世",
   "distance_label": "黄巾方自身无文献，多经官书转述"
  },
  {
   "id": "hj_court_src",
   "title": "东汉讨伐军文献",
   "name": "《后汉书·皇甫嵩传》",
   "party": "汉军",
   "faction": "hj_court",
   "bias_note": "朝廷纪功，叙平乱之功。",
   "stance_label": "后世官修·纪功",
   "distance_label": "《后汉书·皇甫嵩传》成书约 5 世纪，距事约 250 年"
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
  },
  {
   "id": "zhao",
   "name": "朝那",
   "lon": 106.2,
   "lat": 35.9,
   "note": "皇甫嵩故里",
   "elev": 1989
  },
  {
   "id": "shangyu",
   "name": "上虞",
   "lon": 120.87,
   "lat": 30.03,
   "note": "朱儁故里",
   "elev": 71
  },
  {
   "id": "zhuozhou",
   "name": "涿州",
   "lon": 115.98,
   "lat": 39.48,
   "note": "卢植故里",
   "elev": 35
  }
 ],
 "persons": [
  {
   "id": "zhangjiao",
   "name": "张角",
   "side": "黄巾",
   "influence": 0,
   "hometown": "钜鹿"
  },
  {
   "id": "huangfusong",
   "name": "皇甫嵩",
   "side": "汉",
   "influence": 0,
   "hometown": "朝那"
  },
  {
   "id": "zhujun",
   "name": "朱儁",
   "side": "汉",
   "influence": 0,
   "hometown": "上虞"
  },
  {
   "id": "luzhi",
   "name": "卢植",
   "side": "汉",
   "influence": 0,
   "hometown": "涿州"
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
  },
  {
   "id": "SX001_M61",
   "subject": "event:hj_184",
   "predicate": "爆发",
   "value_text": "张角以太平道倡言苍天已死、黄天当立，三十六方并起",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "公元184年张角以太平道倡言苍天已死、黄天当立，三十六方并起",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文用公元纪年，年号据史实补为中平元年",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M62",
   "subject": "event:hj_184",
   "predicate": "参与者",
   "value_text": "张角",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "张角以太平道倡言",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M60",
   "subject": "event:hj_184",
   "predicate": "口号",
   "value_text": "苍天已死、黄天当立",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "倡言苍天已死、黄天当立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M62",
   "subject": "event:hj_184",
   "predicate": "规模",
   "value_text": "三十六方并起",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "三十六方并起",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M60",
   "subject": "event:hj_184",
   "predicate": "别称",
   "value_text": "黄巾之乱",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "黄巾之乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M56",
   "subject": "event:hj_spread",
   "predicate": "波及范围",
   "value_text": "三十六方并起，波及全国",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "guangzong",
   "source": "synthesis",
   "quote": "三十六方并起",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "由三十六方并起推断波及范围广",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M42",
   "subject": "event:hj_184",
   "predicate": "持续时间",
   "value_text": "约八年",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "公元184年……公元192年乱平",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "由起止年份推算",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M37",
   "subject": "event:hj_184",
   "predicate": "史料矛盾",
   "value_text": "原文仅记公元年，未记年号",
   "time": {
    "era_text": "中平元年",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": "julu_up",
   "source": "synthesis",
   "quote": "公元184年",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文用公元纪年，年号系补注，需核验",
   "lead": {
    "where": "synthesis",
    "skills": [
     "历史纪年换算"
    ],
    "accept": "确认中平元年对应公元184年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HUANGJING01",
   "subject": "event:hj_184",
   "predicate": "史料缺环",
   "value_text": "此次起事的兵力、战损与平息过程，胜败双方史述各异，民间歌谣与正史口径不同，相关叙述存在缺口。",
   "time": {
    "era_text": "中平",
    "start": "184-01-01",
    "end": "184-12-31",
    "gregorian_year": 184
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "uprising",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HJ_FX1",
   "subject": "event:hj_184",
   "predicate": "利益对立",
   "value_text": "张角以太平道聚众，号「苍天已死，黄天当立」，底层流民对东汉赋役压榨的总爆发。",
   "source": "hj_rebel_src",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "中平元年",
    "start": 184,
    "end": 184,
    "gregorian_year": 184
   },
   "place": "julu_up",
   "quote": "苍天已死，黄天当立",
   "note": "流民利益 vs 皇权秩序",
   "_party": "黄巾军",
   "_faction": "hj_rebel"
  },
  {
   "id": "HJ_FX2",
   "subject": "event:hj_185",
   "predicate": "镇压叙事",
   "value_text": "皇甫嵩、朱儁等分兵镇压，张角已死、张梁战广宗，黄巾主力平——朝廷倚各地豪强兵源。",
   "source": "hj_court_src",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "中平二年",
    "start": 185,
    "end": 185,
    "gregorian_year": 185
   },
   "place": "guangzong",
   "quote": "嵩等讨破之",
   "note": "讨伐军将领籍贯分散=兵源地方化",
   "_party": "汉军",
   "_faction": "hj_court"
  },
  {
   "id": "HJ_GAP1",
   "subject": "event:hj_184",
   "predicate": "史料缺环",
   "value_text": "黄巾兵力、战损与平息过程，胜败双方记载悬殊，民间歌谣与正史口径不同。",
   "source": "synthesis",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0,
   "time": {
    "era_text": "中平",
    "start": 184,
    "end": 184,
    "gregorian_year": 184
   },
   "place": null,
   "lead": {
    "where": "后汉书与民间史料对读",
    "skills": [
     "多源比对"
    ],
    "accept": "补黄巾方视角与兵力估计"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX010_M37",
  "HUANGJING01",
  "HJ_GAP1"
 ],
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
  },
  "factions": {
   "hj_rebel": {
    "name": "太平道·黄巾",
    "period": "184 起事",
    "interest": "张角以太平道聚众数十万，三十六方同日反，代表底层流民对东汉压榨的反抗。",
    "key_figures": [
     "张角",
     "张宝",
     "张梁"
    ],
    "typical_sources": [
     "后汉书·皇甫嵩传"
    ],
    "bias_note": "官方视「贼」、民间多同情；兵力与战损双方记载悬殊。",
    "bases": [
     "钜鹿",
     "广宗"
    ],
    "geo_note": "张角钜鹿人，起兵于冀州钜鹿、广宗一带，蔓延八州。"
   },
   "hj_court": {
    "name": "东汉朝廷讨伐军",
    "period": "184—185",
    "interest": "皇甫嵩、朱儁、卢植等率州郡兵镇压，代表衰败的东汉皇权与豪强秩序。",
    "key_figures": [
     "皇甫嵩",
     "朱儁",
     "卢植",
     "何进"
    ],
    "typical_sources": [
     "后汉书·皇甫嵩传"
    ],
    "bias_note": "朝廷纪功叙事，淡化镇压之酷与流民之困。",
    "bases": [
     "朝那",
     "上虞",
     "涿州",
     "南阳"
    ],
    "geo_note": "皇甫嵩安定朝那（西北将种）、朱儁会稽上虞（江南）、卢植涿郡（河北）、何进南阳（外戚）——讨伐军将领籍贯分散，反映朝廷倚各地豪强兵源。"
   }
  },
  "faction_colors": {
   "hj_rebel": "#c0392b",
   "hj_court": "#2b6cb0"
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "江南/巴蜀",
     "determination": "genuine_gap",
     "note": "黄巾主力在冀州—中原，江南巴蜀非核心。"
    }
   ]
  }
 },
 "faction_geo": {
  "hj_rebel": {
   "name": "太平道·黄巾",
   "color": "#c0392b",
   "geo_note": "张角钜鹿人，起兵于冀州钜鹿、广宗一带，蔓延八州。",
   "points": [
    {
     "name": "钜鹿",
     "lon": 115.04,
     "lat": 37.67,
     "note": "魏征故里，今河北晋州",
     "resolved": true
    },
    {
     "name": "广宗",
     "lon": 115.1,
     "lat": 37.1,
     "note": "张梁战死处，今河北广宗",
     "resolved": true
    }
   ]
  },
  "hj_court": {
   "name": "东汉朝廷讨伐军",
   "color": "#2b6cb0",
   "geo_note": "皇甫嵩安定朝那（西北将种）、朱儁会稽上虞（江南）、卢植涿郡（河北）、何进南阳（外戚）——讨伐军将领籍贯分散，反映朝廷倚各地豪强兵源。",
   "points": [
    {
     "name": "朝那",
     "lon": 106.2,
     "lat": 35.9,
     "note": "皇甫嵩故里，安定朝那，今宁夏彭阳",
     "resolved": true
    },
    {
     "name": "上虞",
     "lon": 120.87,
     "lat": 30.03,
     "note": "朱儁故里，会稽上虞，今浙江上虞",
     "resolved": true
    },
    {
     "name": "涿州",
     "lon": 115.98,
     "lat": 39.48,
     "note": "卢植故里，涿郡，今河北涿州",
     "resolved": true
    },
    {
     "name": "南阳",
     "lon": 112.53,
     "lat": 32.99,
     "note": "汉宗室/光武舂陵起兵，舂陵在今湖北枣阳，郡治宛今河南南阳",
     "resolved": true
    }
   ]
  }
 }
};
