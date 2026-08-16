// 本文件由 tools/build.py 自动生成（切片 lizicheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lizicheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lizicheng"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "李自成起义",
  "dossier_label": "李自成起义",
  "subtitle": "1628—1645 · 闯军 vs 明",
  "primary_place": "beijing",
  "dossier_event": "event:lc_1628",
  "terrain_grid": "china_coarse",
  "lead": "李自成号「闯王」，提出「均田免赋」，饥民景从。1644 破北京，崇祯自缢；山海关败于清吴联军，次年殁于九宫山。",
  "parties_note": "李自成一方记载多清修，立场需对读；此处综合《明史·流贼传》与近代研究。",
  "subject_names": {
   "person:lizicheng4": "李自成",
   "person:chongzhen2": "崇祯帝"
  },
  "page": "county.html?scene=lizicheng",
  "key": "lizicheng",
  "scene_id": "lizicheng",
  "vocab_pack": "inline:lizicheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "李自成起义·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "李自成一方记载多清修，立场需对读；此处综合《明史·流贼传》与近代研究。"
  }
 ],
 "places": [
  {
   "id": "yanan",
   "name": "延安",
   "lon": 109.5,
   "lat": 36.6,
   "note": "陕北，闯王起事地",
   "elev": 978
  },
  {
   "id": "luoyang_lc",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "1641 闯军破洛，杀福王",
   "elev": 171
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "1644 破京，明亡",
   "elev": 44
  },
  {
   "id": "jiugong",
   "name": "九宫山",
   "lon": 114.5,
   "lat": 29.5,
   "note": "1645 李自成殁于此（鄂南）",
   "elev": 490
  }
 ],
 "persons": [
  {
   "id": "lizicheng4",
   "name": "李自成",
   "side": "闯",
   "influence": 2
  },
  {
   "id": "chongzhen2",
   "name": "崇祯帝",
   "side": "明",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_lc_1628",
   "subject": "event:lc_1628",
   "predicate": "战事",
   "value_text": "陕北饥民从李自成（继高迎祥）起事，号「闯王」，流动作战于秦晋豫。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1628,
    "end": 1628,
    "era_text": "崇祯元年"
   },
   "place": "yanan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1641",
   "subject": "event:lc_1641",
   "predicate": "战事",
   "value_text": "闯军破洛阳，杀福王，散财赈饥，「均田免赋」声威大振。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1641,
    "end": 1641,
    "era_text": "十四年"
   },
   "place": "luoyang_lc",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1644",
   "subject": "event:lc_1644",
   "predicate": "战事",
   "value_text": "闯军破京师，崇祯自缢煤山，明亡；旋山海关败于清吴联军。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1644,
    "end": 1644,
    "era_text": "十七年三月"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lc_1645",
   "subject": "event:lc_1645",
   "predicate": "战事",
   "value_text": "闯军败退，李自成卒于湖北九宫山（死因史载不一）。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1645,
    "end": 1645,
    "era_text": "永昌二年"
   },
   "place": "jiugong",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M64",
   "subject": "person:lizicheng4",
   "predicate": "投奔",
   "value_text": "投闯王高迎祥",
   "time": {
    "era_text": "崇祯二年",
    "start": "1629-01-01",
    "end": "1629-12-31",
    "gregorian_year": 1629
   },
   "place": "",
   "source": "synthesis",
   "quote": "崇祯二年，李自成投闯王高迎祥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "高迎祥为闯王，李自成后袭其号",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M65",
   "subject": "event:lc_1644",
   "predicate": "破城",
   "value_text": "破北京",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "崇祯十七年破北京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M63",
   "subject": "person:chongzhen2",
   "predicate": "自缢",
   "value_text": "崇祯帝自缢",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "崇祯帝自缢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M65",
   "subject": "event:lc_1644",
   "predicate": "败于",
   "value_text": "败于山海关",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "",
   "source": "synthesis",
   "quote": "旋败于山海关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "山海关不在白名单，未映射",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M63",
   "subject": "event:lc_1645",
   "predicate": "南走",
   "value_text": "南走而殁",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "",
   "source": "synthesis",
   "quote": "南走而殁",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "南走具体地点未明，殁于何处存疑",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M61",
   "subject": "event:lc_1645",
   "predicate": "结局",
   "value_text": "李自成南走而殁",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "",
   "source": "synthesis",
   "quote": "南走而殁",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文未明言死因与地点，推断为南逃途中死亡",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M58",
   "subject": "event:lc_1644",
   "predicate": "时间线",
   "value_text": "破北京后旋败",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "破北京；旋败于山海关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "时间紧凑，未明具体间隔",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M59",
   "subject": "event:lc_1644",
   "predicate": "关联",
   "value_text": "崇祯帝自缢与城破相关",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "破北京，崇祯帝自缢",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文并列，推断因果关系",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M44",
   "subject": "person:lizicheng4",
   "predicate": "身份",
   "value_text": "闯王高迎祥部下",
   "time": {
    "era_text": "崇祯二年",
    "start": "1629-01-01",
    "end": "1629-12-31",
    "gregorian_year": 1629
   },
   "place": "",
   "source": "synthesis",
   "quote": "投闯王高迎祥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M39",
   "subject": "event:lc_1645",
   "predicate": "死亡",
   "value_text": "南走而殁",
   "time": {
    "era_text": "崇祯十七年",
    "start": "1644-01-01",
    "end": "1644-12-31",
    "gregorian_year": 1644
   },
   "place": "",
   "source": "synthesis",
   "quote": "南走而殁",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "死亡时间、地点、方式均未详述",
   "lead": {
    "where": "南走路线与死亡地点",
    "skills": [
     "明清史",
     "史料考据"
    ],
    "accept": "考证李自成南走具体路线及死亡详情"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LIZICHENGG01",
   "subject": "event:lc_1644",
   "predicate": "史料缺环",
   "value_text": "此次起事的兵力、战损与平息过程，胜败双方史述各异，民间歌谣与正史口径不同，相关叙述存在缺口。",
   "time": {
    "era_text": "崇祯",
    "start": "1629-01-01",
    "end": "1629-12-31",
    "gregorian_year": 1629
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
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX010_M39",
  "LIZICHENGG01"
 ],
 "events": [
  {
   "id": "ev_lc_1628",
   "subject": "event:lc_1628",
   "year": 1628,
   "era": "崇祯元年",
   "title": "闯王起事",
   "kind": "战事",
   "text": "陕北饥民从李自成（继高迎祥）起事，号「闯王」，流动作战于秦晋豫。",
   "place": "yanan"
  },
  {
   "id": "ev_lc_1641",
   "subject": "event:lc_1641",
   "year": 1641,
   "era": "十四年",
   "title": "破洛阳",
   "kind": "战事",
   "text": "闯军破洛阳，杀福王，散财赈饥，「均田免赋」声威大振。",
   "place": "luoyang_lc"
  },
  {
   "id": "ev_lc_1644",
   "subject": "event:lc_1644",
   "year": 1644,
   "era": "十七年三月",
   "title": "破北京·明亡",
   "kind": "战事",
   "text": "闯军破京师，崇祯自缢煤山，明亡；旋山海关败于清吴联军。",
   "place": "beijing"
  },
  {
   "id": "ev_lc_1645",
   "subject": "event:lc_1645",
   "year": 1645,
   "era": "永昌二年",
   "title": "九宫山殁",
   "kind": "结局",
   "text": "闯军败退，李自成卒于湖北九宫山（死因史载不一）。",
   "place": "jiugong"
  }
 ],
 "routes": [
  {
   "id": "rt_lc_march",
   "name": "闯军东进",
   "side": "a",
   "nodes": [
    {
     "place": "yanan",
     "at": "1628",
     "label": "陕北起"
    },
    {
     "place": "luoyang_lc",
     "at": "1641",
     "label": "破洛阳"
    },
    {
     "place": "beijing",
     "at": "1644",
     "label": "破北京"
    }
   ],
   "outcome": {
    "at": "1644",
    "type": "victory",
    "text": "破京灭明"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_lc_ly",
   "name": "洛阳之战",
   "at": "1641",
   "era": "崇祯十四年",
   "place": "luoyang_lc",
   "winner": "a",
   "outcome": "闯军破洛阳，福王被擒杀，开仓赈饥，声威大振。",
   "subject": "event:lc_1641",
   "sides": [
    {
     "side": "a",
     "commander": "李自成",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 200,
     "posture": "流动作战",
     "commit_basis": "闯军机动，破城散财聚民心。",
     "commit_confidence": 0.55
    },
    {
     "side": "b",
     "commander": "明守军",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 220,
     "posture": "孤守",
     "commit_basis": "明军缺饷离心，城破。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "timeline": [
  {
   "at": "1628",
   "era": "崇祯元",
   "label": "闯王起事",
   "key": true
  },
  {
   "at": "1641",
   "era": "十四",
   "label": "破洛阳",
   "key": false
  },
  {
   "at": "1644",
   "era": "十七",
   "label": "破北京·明亡",
   "key": true
  },
  {
   "at": "1645",
   "era": "永昌二",
   "label": "九宫山殁",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "1645",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "1645",
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
   "闯军",
   "明军",
   "综合史料"
  ],
  "party_bucket": {
   "闯军": "闯军",
   "明军": "明军",
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
     "label": "闯军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "明军胜",
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
     "label": "闯军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "明军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
