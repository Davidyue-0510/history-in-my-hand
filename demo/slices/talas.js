// 本文件由 tools/build.py 自动生成（切片 talas），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["talas"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["talas"] = {
 "meta": {
  "kind": "battle",
  "region": "sui_tang",
  "title": "怛罗斯之战",
  "dossier_label": "怛罗斯之战",
  "subtitle": "天宝十载（751）· 唐 vs 大食（阿拔斯）",
  "primary_place": "talas",
  "dossier_event": "event:tl_tang",
  "terrain_grid": "china_coarse",
  "lead": "高仙芝远征怛罗斯，葛逻禄叛，唐军败于大食。",
  "parties_note": "唐方叙高仙芝远征，大食叙胜。",
  "subject_names": {
   "person:gaoxianzhi": "高仙芝",
   "person:abumuslim": "阿布·穆斯林"
  },
  "page": "talas.html",
  "key": "talas",
  "scene_id": "talas",
  "vocab_pack": "inline:talas"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "怛罗斯之战·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "唐方叙高仙芝远征，大食叙胜。"
  }
 ],
 "places": [
  {
   "id": "talas",
   "name": "怛罗斯",
   "lon": 71.37,
   "lat": 42.87,
   "note": "今哈萨克斯坦江布尔",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "suye",
   "name": "碎叶",
   "lon": 75.23,
   "lat": 42.84,
   "note": "唐安西重镇",
   "elev": 930
  },
  {
   "id": "anxi",
   "name": "安西",
   "lon": 82.95,
   "lat": 41.72,
   "note": "龟兹，安西都护",
   "elev": 1084
  },
  {
   "id": "changan_tx",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐都",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "gaoxianzhi",
   "name": "高仙芝",
   "side": "唐",
   "influence": 2
  },
  {
   "id": "abumuslim",
   "name": "阿布·穆斯林",
   "side": "大食",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_tl_tang",
   "subject": "event:tl_tang",
   "predicate": "战事",
   "value_text": "高仙芝率唐兵与蕃兵西进。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 751,
    "end": 751,
    "era_text": "天宝十载"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tl_gel",
   "subject": "event:tl_gel",
   "predicate": "战事",
   "value_text": "唐军蕃兵葛逻禄临阵叛。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 751,
    "end": 751,
    "era_text": "天宝十载"
   },
   "place": "talas",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tl_jz",
   "subject": "event:tl_jz",
   "predicate": "战事",
   "value_text": "唐军为大食所败，纸术西传。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 751,
    "end": 751,
    "era_text": "天宝十载"
   },
   "place": "talas",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M17",
   "subject": "event:tl_tang",
   "predicate": "爆发",
   "value_text": "唐与大食战于怛罗斯",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "talas",
   "source": "synthesis",
   "quote": "两军遇于怛罗斯",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M17",
   "subject": "person:gaoxianzhi",
   "predicate": "率兵",
   "value_text": "以蕃汉兵数万讨石国",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "",
   "source": "synthesis",
   "quote": "高仙芝以蕃汉兵数万讨石国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "兵力具体数目未载，仅言数万",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M16",
   "subject": "event:tl_tang",
   "predicate": "相持",
   "value_text": "相持五日",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "talas",
   "source": "synthesis",
   "quote": "相持五日",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M17",
   "subject": "event:tl_gel",
   "predicate": "叛变",
   "value_text": "葛罗禄部叛，与大食夹击",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "talas",
   "source": "synthesis",
   "quote": "唐军所募葛罗禄部叛，与大食夹击",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M17",
   "subject": "event:tl_tang",
   "predicate": "战败",
   "value_text": "唐师大败",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "talas",
   "source": "synthesis",
   "quote": "唐师大败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M17",
   "subject": "person:gaoxianzhi",
   "predicate": "败退",
   "value_text": "率残众得还",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "",
   "source": "synthesis",
   "quote": "仙芝率残众得还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M16",
   "subject": "event:tl_tang",
   "predicate": "影响",
   "value_text": "唐失中亚角逐之机",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "",
   "source": "synthesis",
   "quote": "此役唐失中亚角逐之机",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为后世评述，非当日记录",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M17",
   "subject": "event:tl_tang",
   "predicate": "技术传播",
   "value_text": "被俘唐匠将造纸术西传",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "",
   "source": "synthesis",
   "quote": "被俘唐匠将造纸术西传",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "学界公认，但具体路径存争议",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M17",
   "subject": "event:tl_tang",
   "predicate": "后续",
   "value_text": "唐于西域经营未辍",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "",
   "source": "synthesis",
   "quote": "唐于西域之经营，未以一战而辍",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为总结性陈述",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M17",
   "subject": "event:tl_tang",
   "predicate": "兵力对比",
   "value_text": "唐军数万，大食兵数不详",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
   },
   "place": "talas",
   "source": "synthesis",
   "quote": "高仙芝以蕃汉兵数万讨石国，石国约大食兵拒之",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "双方兵力均无精确数字，大食方更缺",
   "lead": {
    "where": "talas",
    "skills": [
     "阿拉伯史",
     "唐代军事"
    ],
    "accept": "补充怛罗斯之战双方兵力估算"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "TALASG01",
   "subject": "event:tl_tang",
   "predicate": "叙事缺环",
   "value_text": "此役细节诸书记载互有出入，胜者所修史书常省略败方视角、兵力与伤亡之确切数字，相关叙述存在缺口。",
   "time": {
    "era_text": "天宝十载",
    "start": "751-01-01",
    "end": "751-12-31",
    "gregorian_year": 751
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
  "SX010_M17",
  "TALASG01"
 ],
 "events": [
  {
   "id": "ev_tl_tang",
   "subject": "event:tl_tang",
   "year": 751,
   "era": "天宝十载",
   "title": "高仙芝西征",
   "kind": "战事",
   "text": "高仙芝率唐兵与蕃兵西进。"
  },
  {
   "id": "ev_tl_gel",
   "subject": "event:tl_gel",
   "year": 751,
   "era": "天宝十载",
   "title": "葛逻禄叛",
   "kind": "战事",
   "text": "唐军蕃兵葛逻禄临阵叛。",
   "place": "talas"
  },
  {
   "id": "ev_tl_jz",
   "subject": "event:tl_jz",
   "year": 751,
   "era": "天宝十载",
   "title": "怛罗斯败",
   "kind": "战事",
   "text": "唐军为大食所败，纸术西传。",
   "place": "talas"
  }
 ],
 "engagements": [
  {
   "id": "eng_tl_main",
   "name": "怛罗斯决战",
   "at": "751-07",
   "era": "天宝十载七月",
   "place": "talas",
   "winner": "b",
   "outcome": "唐军深入，葛逻禄叛离，侧背受敌，高仙芝夜走，唐退出中亚。",
   "subject": "event:tl_jz",
   "sides": [
    {
     "side": "a",
     "commander": "高仙芝",
     "committed_ratio": 1.0,
     "fatigue": "exhausted",
     "march_72h_li": 300,
     "posture": "远征",
     "commit_basis": "唐军越葱岭远征，兵疲粮远。",
     "commit_confidence": 0.5
    },
    {
     "side": "b",
     "commander": "阿布·穆斯林",
     "committed_ratio": 1.0,
     "fatigue": "fresh",
     "march_72h_li": 320,
     "posture": "以逸",
     "commit_basis": "大食本土之师，以众待劳。",
     "commit_confidence": 0.5
    }
   ]
  }
 ],
 "routes": [
  {
   "id": "rt_tl_tang",
   "name": "唐军西进",
   "side": "a",
   "nodes": [
    {
     "place": "anxi",
     "at": "751-04",
     "label": "高仙芝起"
    },
    {
     "place": "suye",
     "at": "751-06",
     "label": "过碎叶"
    },
    {
     "place": "talas",
     "at": "751-07",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "751-07",
    "type": "defeat",
    "text": "怛罗斯败于大食"
   }
  },
  {
   "id": "rt_tl_dashi",
   "name": "大食东拒",
   "side": "b",
   "nodes": [
    {
     "place": "talas",
     "at": "751-06",
     "label": "大食进军"
    },
    {
     "place": "talas",
     "at": "751-07",
     "label": "决战"
    }
   ],
   "outcome": {
    "at": "751-07",
    "type": "victory",
    "text": "大食败唐于怛罗斯"
   }
  }
 ],
 "timeline": [
  {
   "at": "751-04",
   "era": "天宝十载",
   "label": "高仙芝西征",
   "key": false
  },
  {
   "at": "751-07",
   "era": "七月",
   "label": "葛逻禄叛",
   "key": true
  },
  {
   "at": "751-07",
   "era": "七月",
   "label": "怛罗斯败",
   "key": true
  }
 ],
 "columns": [],
 "attrition": {
  "a": [
   {
    "after": "751-07",
    "lost": 0,
    "basis": "胜方损失多无精确记载，待史料核实。"
   }
  ],
  "b": [
   {
    "after": "751-07",
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
   "唐军",
   "大食军",
   "综合史料"
  ],
  "party_bucket": {
   "唐军": "唐军",
   "大食军": "大食军",
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
     "label": "唐军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "大食军胜",
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
     "label": "唐军行军",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "大食军行军",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
