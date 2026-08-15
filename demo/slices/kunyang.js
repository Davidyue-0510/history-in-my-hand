// 本文件由 tools/build.py 自动生成（切片 kunyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["kunyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["kunyang"] = {
 "meta": {
  "kind": "battle",
  "region": "qin_han",
  "title": "昆阳之战",
  "dossier_label": "昆阳之战",
  "subtitle": "新莽地皇四年（23）· 汉（刘秀） vs 新莽",
  "primary_place": "kunyang",
  "dossier_event": "event:ky_wan",
  "terrain_grid": "china_coarse",
  "lead": "刘秀率数千骑突阵，昆阳内外夹击，莽军溃，王寻死、王邑走。",
  "parties_note": "汉方叙刘秀勇略，莽方讳败。",
  "subject_names": {
   "person:liuxiu": "刘秀",
   "person:wangxun": "王寻",
   "person:wangyi": "王邑"
  },
  "page": "kunyang.html",
  "key": "kunyang",
  "scene_id": "kunyang",
  "vocab_pack": "inline:kunyang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "昆阳之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "汉方叙刘秀勇略，莽方讳败。"
  }
 ],
 "places": [
  {
   "id": "kunyang",
   "name": "昆阳",
   "lon": 113.36,
   "lat": 33.62,
   "note": "今河南叶县",
   "elev": 101
  },
  {
   "id": "wan",
   "name": "宛",
   "lon": 112.53,
   "lat": 32.99,
   "note": "汉军别部",
   "elev": 132
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "新莽都",
   "elev": 391
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "莽东方重镇",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "liuxiu",
   "name": "刘秀",
   "side": "汉",
   "influence": 2
  },
  {
   "id": "wangxun",
   "name": "王寻",
   "side": "新莽",
   "influence": 1
  },
  {
   "id": "wangyi",
   "name": "王邑",
   "side": "新莽",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ky_wan",
   "subject": "event:ky_wan",
   "predicate": "战事",
   "value_text": "绿林军立更始，围宛。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "地皇四年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ky_liu",
   "subject": "event:ky_liu",
   "predicate": "战事",
   "value_text": "刘秀率十三骑夜出，招兵还战。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "地皇四年"
   },
   "place": "kunyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ky_jz",
   "subject": "event:ky_jz",
   "predicate": "战事",
   "value_text": "内外夹击，莽军溃，王寻死。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "地皇四年"
   },
   "place": "kunyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M20",
   "subject": "event:ky_wan",
   "predicate": "爆发",
   "value_text": "王莽遣王寻、王邑将兵围昆阳",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "王莽遣大司徒王寻、大司空王邑将兵四十二万，围昆阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M20",
   "subject": "event:ky_wan",
   "predicate": "兵力",
   "value_text": "兵四十二万（号百万）",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "将兵四十二万（号百万）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "原文记载四十二万，号称百万，实数存疑",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M19",
   "subject": "person:liuxiu",
   "predicate": "官职",
   "value_text": "太常偏将军",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "刘秀时为太常偏将军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M20",
   "subject": "person:liuxiu",
   "predicate": "出击路线",
   "value_text": "率十三骑夜出求援",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "自率十三骑夜出求援",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M20",
   "subject": "event:ky_wan",
   "predicate": "战斗过程",
   "value_text": "刘秀选敢死士三千冲其中坚",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "选敢死士三千，从城西水上冲其中坚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M20",
   "subject": "person:wangxun",
   "predicate": "阵亡",
   "value_text": "被斩",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "斩王寻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M19",
   "subject": "event:ky_wan",
   "predicate": "结果",
   "value_text": "莽军大溃",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "中外合势，莽军大溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M20",
   "subject": "event:ky_wan",
   "predicate": "天象",
   "value_text": "大雷风，雨下如注",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "会大雷风，屋瓦皆飞，雨下如注",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M20",
   "subject": "event:ky_wan",
   "predicate": "伤亡",
   "value_text": "士卒溺死以万数",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "士卒溺死以万数，水为不流",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M20",
   "subject": "event:ky_wan",
   "predicate": "影响",
   "value_text": "新室精锐丧尽",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "新室精锐丧尽，旋即土崩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M14",
   "subject": "event:ky_wan",
   "predicate": "兵力对比",
   "value_text": "刘秀敢死士三千 vs 王莽军四十二万",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "选敢死士三千……将兵四十二万",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "county",
   "note": "由原文兵力数字对比推出，悬殊极大",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M9",
   "subject": "event:ky_wan",
   "predicate": "兵力实数",
   "value_text": "四十二万为虚数，实数待考",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "kunyang",
   "source": "synthesis",
   "quote": "将兵四十二万（号百万）",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "原文记载四十二万，号称百万，实数存疑",
   "lead": {
    "where": "kunyang",
    "skills": [
     "quantitative_analysis",
     "historical_criticism"
    ],
    "accept": "考证王莽军实际兵力，对比其他史料记载"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "KUNYANGG01",
   "subject": "event:ky_wan",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "battle",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补败方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX012_M9",
  "KUNYANGG01"
 ],
 "events": [
  {
   "id": "ev_ky_wan",
   "subject": "event:ky_wan",
   "year": 23,
   "era": "地皇四年",
   "title": "汉围宛",
   "kind": "战事",
   "text": "绿林军立更始，围宛。"
  },
  {
   "id": "ev_ky_liu",
   "subject": "event:ky_liu",
   "year": 23,
   "era": "地皇四年",
   "title": "刘秀突阵",
   "kind": "战事",
   "text": "刘秀率十三骑夜出，招兵还战。",
   "place": "kunyang"
  },
  {
   "id": "ev_ky_jz",
   "subject": "event:ky_jz",
   "year": 23,
   "era": "地皇四年",
   "title": "昆阳破莽",
   "kind": "战事",
   "text": "内外夹击，莽军溃，王寻死。",
   "place": "kunyang"
  }
 ],
 "engagements": [
  {
   "id": "eng_ky_main",
   "name": "昆阳决战",
   "at": "23-06",
   "era": "地皇四年六月",
   "place": "kunyang",
   "winner": "a",
   "outcome": "刘秀以数千锐卒冲莽中军，昆阳守军鼓噪而出，莽军大溃，王寻战死、王邑遁。",
   "subject": "event:ky_jz",
   "sides": [
    {
     "side": "a",
     "commander": "刘秀",
     "committed_ratio": 0.4,
     "fatigue": "fresh",
     "march_72h_li": 120,
     "posture": "突阵",
     "commit_basis": "汉军锐卒集中冲其指挥，以少击众。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "王寻/王邑",
     "committed_ratio": 1.0,
     "fatigue": "marching",
     "march_72h_li": 150,
     "posture": "分守",
     "commit_basis": "莽军号称百万，指挥庞杂。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_ky_liu",
   "name": "刘秀赴援",
   "side": "a",
   "nodes": [
    {
     "place": "wan",
     "at": "23-05",
     "label": "刘秀在宛"
    },
    {
     "place": "kunyang",
     "at": "23-06",
     "label": "突阵还战"
    }
   ],
   "outcome": {
    "at": "23-06",
    "type": "victory",
    "text": "昆阳内外夹击破莽"
   }
  },
  {
   "id": "rt_ky_mang",
   "name": "莽军围城",
   "side": "b",
   "nodes": [
    {
     "place": "luoyang",
     "at": "23-04",
     "label": "莽军南下"
    },
    {
     "place": "kunyang",
     "at": "23-05",
     "label": "围城"
    }
   ],
   "outcome": {
    "at": "23-05",
    "type": "defeat",
    "text": "莽军围城反溃"
   }
  }
 ],
 "timeline": [
  {
   "at": "23-04",
   "era": "地皇四年",
   "label": "莽军围昆阳",
   "key": false
  },
  {
   "at": "23-05",
   "era": "五月",
   "label": "刘秀夜出",
   "key": false
  },
  {
   "at": "23-06",
   "era": "六月",
   "label": "昆阳决战·莽溃",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "23-06",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "23-06",
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
   "新莽军",
   "综合史料"
  ],
  "party_bucket": {
   "汉军": "汉军",
   "新莽军": "新莽军",
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
     "label": "新莽军胜",
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
     "label": "新莽军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
