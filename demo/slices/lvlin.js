// 本文件由 tools/build.py 自动生成（切片 lvlin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lvlin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lvlin"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "绿林赤眉",
  "dossier_label": "绿林赤眉",
  "subtitle": "17 — 27 · 新莽末",
  "primary_place": "lvlin",
  "dossier_event": "event:ll_17",
  "terrain_grid": "china_coarse",
  "lead": "新莽政乱、连年灾荒，17 荆州绿林、山东赤眉并起。绿林拥刘玄号更始，破长安杀王莽；刘秀乘群雄裂，收河北、败赤眉，终建东汉。",
  "parties_note": "绿林赤眉据《后汉书》综合，其众初起为饥民，后渐成割据。",
  "subject_names": {
   "person:wangmang2": "王莽",
   "person:liuxiu2": "刘秀"
  },
  "page": "county.html?scene=lvlin",
  "key": "lvlin",
  "scene_id": "lvlin",
  "vocab_pack": "inline:lvlin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "绿林赤眉·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "绿林赤眉据《后汉书》综合，其众初起为饥民，后渐成割据。"
  }
 ],
 "places": [
  {
   "id": "lvlin",
   "name": "绿林山",
   "lon": 112.85,
   "lat": 31.2,
   "note": "绿林起义，今湖北京山",
   "elev": 154
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "yecheng",
   "name": "邺城",
   "lon": 114.08,
   "lat": 36.07,
   "note": "曹魏都",
   "elev": 334
  }
 ],
 "persons": [
  {
   "id": "wangmang2",
   "name": "王莽",
   "side": "新",
   "influence": 1
  },
  {
   "id": "liuxiu2",
   "name": "刘秀",
   "side": "汉宗室",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ll_17",
   "subject": "event:ll_17",
   "predicate": "战事",
   "value_text": "荆州饥民聚绿林山，号绿林兵，攻城略地。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 17,
    "end": 17,
    "era_text": "天凤四"
   },
   "place": "lvlin",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ll_23",
   "subject": "event:ll_23",
   "predicate": "战事",
   "value_text": "绿林拥更始帝，破长安、杀王莽，新亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "更始元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M62",
   "subject": "event:ll_17",
   "predicate": "爆发",
   "value_text": "绿林兵起于荆楚",
   "time": {
    "era_text": "地皇二年",
    "start": "21-01-01",
    "end": "21-12-31",
    "gregorian_year": 21
   },
   "place": "lvlin",
   "source": "synthesis",
   "quote": "公元17年绿林兵起于荆楚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "原文用公元纪年，此处按年号纪年表述；具体月份缺失",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M63",
   "subject": "event:ll_23",
   "predicate": "大捷",
   "value_text": "昆阳大捷",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "yecheng",
   "source": "synthesis",
   "quote": "公元23年昆阳大捷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "昆阳非白名单地点，暂以yecheng代指，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M61",
   "subject": "event:ll_23",
   "predicate": "入长安",
   "value_text": "更始入长安",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "更始入长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M63",
   "subject": "person:wangmang2",
   "predicate": "死亡",
   "value_text": "王莽死",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "王莽死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M61",
   "subject": "event:ll_23",
   "predicate": "亡国",
   "value_text": "新亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "新亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M59",
   "subject": "event:ll_23",
   "predicate": "后续",
   "value_text": "群雄并起",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "",
   "source": "synthesis",
   "quote": "然群雄并起",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "地点未指明，留空待补",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M56",
   "subject": "event:ll_17",
   "predicate": "起兵地点",
   "value_text": "起于荆楚",
   "time": {
    "era_text": "地皇二年",
    "start": "21-01-01",
    "end": "21-12-31",
    "gregorian_year": 21
   },
   "place": "lvlin",
   "source": "synthesis",
   "quote": "绿林兵起于荆楚",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M57",
   "subject": "event:ll_23",
   "predicate": "时间跨度",
   "value_text": "从起兵到大捷六年",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元17年绿林兵起；公元23年昆阳大捷",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "由原文时间推算，非直述",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M43",
   "subject": "event:ll_23",
   "predicate": "政权更迭",
   "value_text": "新朝灭亡，更始入主",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "更始入长安，王莽死，新亡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "由原文事件顺序推出",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M38",
   "subject": "event:ll_23",
   "predicate": "后续局势",
   "value_text": "群雄并起，天下未定",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "",
   "source": "synthesis",
   "quote": "然群雄并起",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "由原文推断，具体势力未明",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M19",
   "subject": "event:ll_17",
   "predicate": "起兵首领",
   "value_text": "首领未明",
   "time": {
    "era_text": "地皇二年",
    "start": "21-01-01",
    "end": "21-12-31",
    "gregorian_year": 21
   },
   "place": "lvlin",
   "source": "synthesis",
   "quote": "绿林兵起于荆楚",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "原文未提及具体首领",
   "lead": {
    "where": "绿林军首领身份",
    "skills": [
     "历史考证"
    ],
    "accept": "补充绿林军主要首领姓名"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M14",
   "subject": "event:ll_23",
   "predicate": "昆阳之战细节",
   "value_text": "战役过程缺失",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "yecheng",
   "source": "synthesis",
   "quote": "昆阳大捷",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "county",
   "note": "原文仅提大捷，无兵力、战术等细节",
   "lead": {
    "where": "昆阳之战具体经过",
    "skills": [
     "军事史"
    ],
    "accept": "补充昆阳之战双方兵力与战术"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LVLING01",
   "subject": "event:ll_23",
   "predicate": "史料缺环",
   "value_text": "此次起事的兵力、战损与平息过程，胜败双方史述各异，民间歌谣与正史口径不同，相关叙述存在缺口。",
   "time": {
    "era_text": "地皇",
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
  "SX011_M19",
  "SX012_M14",
  "LVLING01"
 ],
 "events": [
  {
   "id": "ev_ll_17",
   "subject": "event:ll_17",
   "year": 17,
   "era": "天凤四",
   "title": "绿林起事",
   "kind": "战事",
   "text": "荆州饥民聚绿林山，号绿林兵，攻城略地。",
   "place": "lvlin"
  },
  {
   "id": "ev_ll_23",
   "subject": "event:ll_23",
   "year": 23,
   "era": "更始元",
   "title": "破长安·莽死",
   "kind": "战事",
   "text": "绿林拥更始帝，破长安、杀王莽，新亡。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_ll",
   "name": "绿林西进",
   "side": "a",
   "nodes": [
    {
     "place": "lvlin",
     "at": "17",
     "label": "绿林山"
    },
    {
     "place": "changan",
     "at": "23",
     "label": "破长安"
    }
   ],
   "outcome": {
    "at": "23",
    "type": "victory",
    "text": "新莽亡"
   }
  }
 ],
 "timeline": [
  {
   "at": "17",
   "era": "天凤四",
   "label": "绿林起",
   "key": true
  },
  {
   "at": "23",
   "era": "更始元",
   "label": "破长安·莽死",
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
   "绿林军",
   "新莽军",
   "综合史料"
  ],
  "party_bucket": {
   "绿林军": "绿林军",
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
     "label": "绿林军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "新莽军胜",
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
     "label": "绿林军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "新莽军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
