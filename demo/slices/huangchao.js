// 本文件由 tools/build.py 自动生成（切片 huangchao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huangchao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huangchao"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "黄巢起义",
  "dossier_label": "黄巢起义",
  "subtitle": "875—884 · 唐末",
  "primary_place": "changan",
  "dossier_event": "event:hc_875",
  "terrain_grid": "china_coarse",
  "lead": "唐末苛政、灾荒并作，875 王仙芝、黄巢起于濮阳。黄巢转战十余省、渡江跨浙闽入广州，880 破潼关入长安称大齐，唐僖宗奔蜀，帝国崩解由此加速。",
  "parties_note": "起义据《旧唐书·黄巢传》综合，流动作战之长与屠城之酷并存于记载。",
  "subject_names": {
   "person:huangchao2": "黄巢",
   "person:tangxizong": "唐僖宗"
  },
  "page": "county.html?scene=huangchao",
  "key": "huangchao",
  "scene_id": "huangchao",
  "vocab_pack": "inline:huangchao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "黄巢起义·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "起义据《旧唐书·黄巢传》综合，流动作战之长与屠城之酷并存于记载。",
   "stance_label": "私修编年·综合",
   "distance_label": "成书后晋开运二年（945《旧唐书》），距事约 60–70 年"
  },
  {
   "id": "hc_rebel_src",
   "title": "黄巢方文献",
   "name": "《旧唐书·黄巢传》",
   "party": "黄巢军",
   "faction": "hc_rebel",
   "bias_note": "官书转述，多贬。",
   "stance_label": "后朝官修·贬起义方",
   "distance_label": "《旧唐书·黄巢传》成书 945，距事约 60–70 年"
  },
  {
   "id": "hc_court_src",
   "title": "唐廷文献",
   "name": "《旧唐书·僖宗纪》",
   "party": "唐军",
   "faction": "hc_court",
   "bias_note": "唐廷纪功。",
   "stance_label": "后朝官修·纪功",
   "distance_label": "《旧唐书·僖宗纪》成书 945，距事约 60–70 年"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "guangzhou",
   "name": "广州",
   "lon": 113.26,
   "lat": 23.13,
   "note": "黄巢曾克广州",
   "elev": 44
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  },
  {
   "id": "caozhou",
   "name": "曹州",
   "lon": 115.4,
   "lat": 35.2,
   "note": "黄巢故里",
   "elev": 52
  }
 ],
 "persons": [
  {
   "id": "huangchao2",
   "name": "黄巢",
   "side": "大齐",
   "influence": 2,
   "hometown": "曹州"
  },
  {
   "id": "tangxizong",
   "name": "唐僖宗",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "gaopian",
   "name": "高骈",
   "side": "唐",
   "influence": 0,
   "hometown": "幽州"
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hc_875",
   "subject": "event:hc_875",
   "predicate": "战事",
   "value_text": "黄巢应王仙芝起于山东，号冲天大将军，转战中原。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 875,
    "end": 875,
    "era_text": "乾符二"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hc_880",
   "subject": "event:hc_880",
   "predicate": "战事",
   "value_text": "黄巢破潼关入长安，僖宗奔蜀，自称大齐皇帝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 880,
    "end": 880,
    "era_text": "广明元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M60",
   "subject": "event:hc_875",
   "predicate": "爆发",
   "value_text": "乾符二年，盐商黄巢起兵",
   "time": {
    "era_text": "乾符二年",
    "start": "875-01-01",
    "end": "875-12-31",
    "gregorian_year": 875
   },
   "place": "",
   "source": "synthesis",
   "quote": "乾符二年，盐商黄巢起兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "起兵地点未明，待考",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M61",
   "subject": "person:huangchao2",
   "predicate": "身份",
   "value_text": "盐商",
   "time": {
    "era_text": "乾符二年",
    "start": "875-01-01",
    "end": "875-12-31",
    "gregorian_year": 875
   },
   "place": "",
   "source": "synthesis",
   "quote": "盐商黄巢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M59",
   "subject": "event:hc_880",
   "predicate": "入长安",
   "value_text": "广明元年入长安",
   "time": {
    "era_text": "广明元年",
    "start": "880-01-01",
    "end": "880-12-31",
    "gregorian_year": 880
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "广明元年入长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M61",
   "subject": "event:hc_880",
   "predicate": "建号",
   "value_text": "号大齐，改元金统",
   "time": {
    "era_text": "广明元年",
    "start": "880-01-01",
    "end": "880-12-31",
    "gregorian_year": 880
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "号大齐，改元金统",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M59",
   "subject": "event:hc_880",
   "predicate": "国号",
   "value_text": "大齐",
   "time": {
    "era_text": "广明元年",
    "start": "880-01-01",
    "end": "880-12-31",
    "gregorian_year": 880
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "号大齐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M58",
   "subject": "event:hc_880",
   "predicate": "年号",
   "value_text": "金统",
   "time": {
    "era_text": "广明元年",
    "start": "880-01-01",
    "end": "880-12-31",
    "gregorian_year": 880
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "改元金统",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M55",
   "subject": "person:huangchao2",
   "predicate": "败死",
   "value_text": "中和四年败死",
   "time": {
    "era_text": "中和四年",
    "start": "884-01-01",
    "end": "884-12-31",
    "gregorian_year": 884
   },
   "place": "",
   "source": "synthesis",
   "quote": "中和四年败死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "败死地点未明，待考",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M55",
   "subject": "event:hc_875",
   "predicate": "结局",
   "value_text": "中和四年败死",
   "time": {
    "era_text": "中和四年",
    "start": "884-01-01",
    "end": "884-12-31",
    "gregorian_year": 884
   },
   "place": "",
   "source": "synthesis",
   "quote": "中和四年败死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M41",
   "subject": "event:hc_880",
   "predicate": "结局",
   "value_text": "中和四年败死",
   "time": {
    "era_text": "中和四年",
    "start": "884-01-01",
    "end": "884-12-31",
    "gregorian_year": 884
   },
   "place": "",
   "source": "synthesis",
   "quote": "中和四年败死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M36",
   "subject": "event:hc_875",
   "predicate": "影响",
   "value_text": "唐室益衰",
   "time": {
    "era_text": "中和四年",
    "start": "884-01-01",
    "end": "884-12-31",
    "gregorian_year": 884
   },
   "place": "",
   "source": "synthesis",
   "quote": "唐室益衰",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为结果陈述，推断为对唐朝国势的负面影响",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HUANGCHAOG01",
   "subject": "event:hc_880",
   "predicate": "史料缺环",
   "value_text": "此次起事的兵力、战损与平息过程，胜败双方史述各异，民间歌谣与正史口径不同，相关叙述存在缺口。",
   "time": {
    "era_text": "乾符",
    "start": "875-01-01",
    "end": "875-12-31",
    "gregorian_year": 875
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
   "id": "HC_FX1",
   "subject": "event:hc_875",
   "predicate": "利益对立",
   "value_text": "黄巢曹州冤句盐贩，聚众数万反唐，号「冲天大将军」，均平口号动天下流民。",
   "source": "hc_rebel_src",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "乾符",
    "start": 875,
    "end": 875,
    "gregorian_year": 875
   },
   "place": "caozhou",
   "quote": "（巢）募众数万，陷州县",
   "note": "私盐利益集团 vs 唐廷专卖",
   "_party": "黄巢军",
   "_faction": "hc_rebel"
  },
  {
   "id": "HC_FX2",
   "subject": "event:hc_881",
   "predicate": "镇压叙事",
   "value_text": "高骈拥兵淮南观望，唐僖宗奔蜀；黄巢入长安称帝，唐廷赖李克用等藩镇反攻。",
   "source": "hc_court_src",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "中和元年",
    "start": 881,
    "end": 881,
    "gregorian_year": 881
   },
   "place": "changan",
   "quote": "（僖宗）奔蜀",
   "note": "唐廷倚河朔—关中兵，藩镇割据并行",
   "_party": "唐军",
   "_faction": "hc_court"
  },
  {
   "id": "HC_GAP1",
   "subject": "event:hc_875",
   "predicate": "史料缺环",
   "value_text": "黄巢兵力与流动作战路线，官书多讳，民间记载零散；「均平」口号的实际社会基础待考。",
   "source": "synthesis",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0,
   "time": {
    "era_text": "乾符",
    "start": 875,
    "end": 875,
    "gregorian_year": 875
   },
   "place": null,
   "lead": {
    "where": "旧唐书与唐末笔记对读",
    "skills": [
     "多源比对"
    ],
    "accept": "补黄巢军社会构成与路线"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "HUANGCHAOG01",
  "HC_GAP1"
 ],
 "events": [
  {
   "id": "ev_hc_875",
   "subject": "event:hc_875",
   "year": 875,
   "era": "乾符二",
   "title": "濮州起兵",
   "kind": "战事",
   "text": "黄巢应王仙芝起于山东，号冲天大将军，转战中原。",
   "place": "kaofeng"
  },
  {
   "id": "ev_hc_880",
   "subject": "event:hc_880",
   "year": 880,
   "era": "广明元",
   "title": "入长安称帝",
   "kind": "战事",
   "text": "黄巢破潼关入长安，僖宗奔蜀，自称大齐皇帝。",
   "place": "changan"
  },
  {
   "id": "ev_hc_881",
   "subject": "event:hc_881",
   "year": 881,
   "era": "中和元年",
   "title": "黄巢入长安",
   "kind": "结局",
   "text": "黄巢入长安称帝，僖宗奔蜀。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_hc",
   "name": "黄巢转战",
   "side": "a",
   "nodes": [
    {
     "place": "kaofeng",
     "at": "875",
     "label": "中原起"
    },
    {
     "place": "guangzhou",
     "at": "879",
     "label": "克广州"
    },
    {
     "place": "changan",
     "at": "880",
     "label": "入长安"
    }
   ],
   "outcome": {
    "at": "880",
    "type": "victory",
    "text": "破京称帝"
   }
  }
 ],
 "timeline": [
  {
   "at": "875",
   "era": "乾符二",
   "label": "起兵",
   "key": true
  },
  {
   "at": "880",
   "era": "广明元",
   "label": "入长安",
   "key": true
  }
 ],
 "columns": [],
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
   "黄巢军",
   "唐军",
   "综合史料"
  ],
  "party_bucket": {
   "黄巢军": "黄巢军",
   "唐军": "唐军",
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
     "label": "黄巢军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "唐军胜",
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
     "label": "黄巢军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "唐军行动",
     "color": "#2b6cb0"
    }
   ]
  },
  "factions": {
   "hc_rebel": {
    "name": "黄巢起义军",
    "period": "875—884",
    "interest": "黄巢曹州冤句人，盐贩起事，转战南北，破长安称大齐皇帝。",
    "key_figures": [
     "黄巢",
     "黄揆",
     "尚让"
    ],
    "typical_sources": [
     "旧唐书·黄巢传"
    ],
    "bias_note": "官书称「贼」，其均平口号与流动作战被妖魔化。",
    "bases": [
     "曹州"
    ],
    "geo_note": "黄巢曹州冤句（今山东菏泽）人，私盐贩出身，山东为盐患重区。"
   },
   "hc_court": {
    "name": "唐廷讨伐军",
    "period": "875—884",
    "interest": "高骈、王铎等率兵镇压，唐僖宗奔蜀。",
    "key_figures": [
     "高骈",
     "王铎",
     "唐僖宗"
    ],
    "typical_sources": [
     "旧唐书·僖宗纪"
    ],
    "bias_note": "唐廷纪功，叙收复之功，讳藩镇割据之实。",
    "bases": [
     "幽州",
     "长安"
    ],
    "geo_note": "高骈幽州人（河朔藩镇），唐僖宗在长安——唐廷倚关中与河朔兵。"
   }
  },
  "faction_colors": {
   "hc_rebel": "#c0392b",
   "hc_court": "#2b6cb0"
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "岭南",
     "determination": "genuine_gap",
     "note": "黄巢曾转战岭南，非核心根基。"
    }
   ]
  }
 },
 "faction_geo": {
  "hc_rebel": {
   "name": "黄巢起义军",
   "color": "#c0392b",
   "geo_note": "黄巢曹州冤句（今山东菏泽）人，私盐贩出身，山东为盐患重区。",
   "points": [
    {
     "name": "曹州",
     "lon": 115.4,
     "lat": 35.2,
     "note": "黄巢故里，曹州冤句，今山东菏泽",
     "resolved": true
    }
   ]
  },
  "hc_court": {
   "name": "唐廷讨伐军",
   "color": "#2b6cb0",
   "geo_note": "高骈幽州人（河朔藩镇），唐僖宗在长安——唐廷倚关中与河朔兵。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "长安",
     "lon": 108.95,
     "lat": 34.27,
     "note": "唐都，今西安",
     "resolved": true
    }
   ]
  }
 }
};
