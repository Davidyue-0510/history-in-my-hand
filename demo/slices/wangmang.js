// 本文件由 tools/build.py 自动生成（切片 wangmang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wangmang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wangmang"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "王莽改制",
  "dossier_label": "王莽改制",
  "subtitle": "9 — 23 · 新莽",
  "primary_place": "changan",
  "dossier_event": "event:wm_9",
  "terrain_grid": "china_coarse",
  "lead": "王莽篡汉建新，托古易制：王田、五均六筦、改币更制，意在均贫富、抑兼并，然政令繁苛、朝令夕改，农商俱困，绿林赤眉并起，新莽十五年而亡。",
  "parties_note": "改制据《汉书·王莽传》综合，史多贬其迂阔，然亦含均平理想。",
  "subject_names": {
   "person:wangmang": "王莽",
   "person:liuxiu": "刘秀"
  },
  "page": "county.html?scene=wangmang",
  "key": "wangmang",
  "scene_id": "wangmang",
  "vocab_pack": "inline:wangmang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "王莽改制·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "改制据《汉书·王莽传》综合，史多贬其迂阔，然亦含均平理想。"
  },
  {
   "id": "wang_mang_ji",
   "title": "王莽诏令集",
   "name": "王莽诏令集",
   "party": "新朝官方",
   "faction": "waimang",
   "bias_note": "新朝改制派自述，托古立说、宣示符命。"
  },
  {
   "id": "han_shu_wm",
   "title": "《汉书·王莽传》",
   "name": "《汉书·王莽传》",
   "party": "官修史书",
   "faction": "han_zongshi",
   "bias_note": "班固以汉室立场记新莽之失与豪强反莽之乱。"
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
   "id": "lvlin",
   "name": "绿林山",
   "lon": 112.85,
   "lat": 31.2,
   "note": "绿林起义，今湖北京山",
   "elev": 154
  }
 ],
 "persons": [
  {
   "id": "wangmang",
   "name": "王莽",
   "side": "新",
   "influence": 1
  },
  {
   "id": "liuxiu",
   "name": "刘秀",
   "side": "汉宗室",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wm_9",
   "subject": "event:wm_9",
   "predicate": "事件",
   "value_text": "王莽受禅称帝，国号新，托古改制。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 9,
    "end": 9,
    "era_text": "始建国元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wm_reform",
   "subject": "event:wm_reform",
   "predicate": "事件",
   "value_text": "行王田、五均六筦、改币，扰民甚烈。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 9,
    "end": 9,
    "era_text": "同年"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wm_end",
   "subject": "event:wm_end",
   "predicate": "事件",
   "value_text": "绿林破长安，王莽死，新亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 23,
    "end": 23,
    "era_text": "地皇四"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M48",
   "subject": "event:wm_reform",
   "predicate": "推行",
   "value_text": "行王田、五均六筦",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "",
   "source": "synthesis",
   "quote": "始建国元年，王莽代汉建新，行王田、五均六筦",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "王田、五均六筦为改制核心内容",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M49",
   "subject": "event:wm_9",
   "predicate": "爆发",
   "value_text": "绿林破长安",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "地皇四年，绿林破长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M47",
   "subject": "event:wm_end",
   "predicate": "终结",
   "value_text": "莽死，新亡",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "莽死，新亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M49",
   "subject": "person:wangmang",
   "predicate": "死亡",
   "value_text": "莽死",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "莽死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M47",
   "subject": "event:wm_9",
   "predicate": "参与者",
   "value_text": "绿林军攻破长安",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "绿林破长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "绿林为起义军，未在person白名单，故以event关联",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M46",
   "subject": "event:wm_reform",
   "predicate": "时间",
   "value_text": "始建国元年",
   "time": {
    "era_text": "始建国元年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "",
   "source": "synthesis",
   "quote": "始建国元年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M43",
   "subject": "event:wm_end",
   "predicate": "后果",
   "value_text": "战乱频仍",
   "time": {
    "era_text": "地皇四年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "",
   "source": "synthesis",
   "quote": "战乱频仍",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文直述，但为概括性描述，故标inference",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M43",
   "subject": "event:wm_9",
   "predicate": "结果",
   "value_text": "新朝灭亡",
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
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WANGMANGG01",
   "subject": "event:wm_9",
   "predicate": "史料缺环",
   "value_text": "此次改革的推行范围、受阻与实效，赞成与反对两方记载悬殊，相关评估存在缺口。",
   "time": {
    "era_text": "始建国",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "reform",
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
   "id": "WM_FX1",
   "subject": "event:wm_reform",
   "predicate": "利益冲击",
   "value_text": "王莽行王田制收田归公、禁奴婢买卖、设五均六筦国营，直接剥夺豪强地主的土地与蓄奴利益，关中、齐鲁豪族怨声载道。",
   "source": "han_shu_wm",
   "quote": "（王莽）更名天下田曰王田……奴婢曰私属，皆不得卖买。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "layer": "record",
   "time": {
    "era_text": "公元9年",
    "start": "9-01-01",
    "end": "9-12-31",
    "gregorian_year": 9
   },
   "place": "",
   "scale": "empire",
   "note": "改制派与豪强的根本利益对立",
   "_party": "官修史书",
   "_faction": "han_zongshi"
  },
  {
   "id": "WM_FX2",
   "subject": "event:wm_9",
   "predicate": "既得利益反扑",
   "value_text": "居摄元年安众侯刘崇、始建国二年东郡太守翟义先后起兵讨莽，皆为汉宗室与豪强对托古改制的武装抗拒。",
   "source": "han_shu_wm",
   "quote": "东郡太守翟义谋举兵西诛不当摄者。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "公元7年",
    "start": "7-01-01",
    "end": "7-12-31",
    "gregorian_year": 7
   },
   "place": "",
   "scale": "empire",
   "note": "宗室豪强是反莽主力",
   "_party": "官修史书",
   "_faction": "han_zongshi"
  },
  {
   "id": "WM_FX3",
   "subject": "event:wm_end",
   "predicate": "结构性冲突",
   "value_text": "新莽之亡非王莽一人之败，而是儒生理想主义改制与豪强地主私有利益不可调和的结局；绿林、赤眉皆以「复汉」为号，正是既得利益与正统叙事的合流。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "layer": "inference",
   "time": {
    "era_text": "公元23年",
    "start": "23-01-01",
    "end": "23-12-31",
    "gregorian_year": 23
   },
   "place": "",
   "scale": "empire",
   "note": "综合各方记载的因果判断",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "WANGMANGG01"
 ],
 "events": [
  {
   "id": "ev_wm_9",
   "subject": "event:wm_9",
   "year": 9,
   "era": "始建国元",
   "title": "代汉建新",
   "kind": "变局",
   "text": "王莽受禅称帝，国号新，托古改制。",
   "place": "changan"
  },
  {
   "id": "ev_wm_reform",
   "subject": "event:wm_reform",
   "year": 9,
   "era": "同年",
   "title": "王田五均",
   "kind": "变法",
   "text": "行王田、五均六筦、改币，扰民甚烈。",
   "place": "changan"
  },
  {
   "id": "ev_wm_end",
   "subject": "event:wm_end",
   "year": 23,
   "era": "地皇四",
   "title": "新莽亡",
   "kind": "结局",
   "text": "绿林破长安，王莽死，新亡。",
   "place": "changan"
  }
 ],
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
   "综合史料",
   "官修史书",
   "新朝官方"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "官修史书": "官修史书",
   "新朝官方": "新朝官方"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "官修史书": "#6d4c41",
   "新朝官方": "#8e44ad"
  },
  "legend": {},
  "faction_colors": {
   "waimang": "#8e44ad",
   "han_zongshi": "#c0392b"
  },
  "factions": {
   "waimang": {
    "name": "外戚儒生改制派（王莽集团）",
    "period": "居摄—始建国（公元6—23）",
    "interest": "以周公再世自任，托古改制：王田制收田归公、五均六筦国营、改币制与官名，借儒术重塑权力并安置拥莽官僚。",
    "key_figures": [
     "王莽",
     "刘歆",
     "王舜",
     "甄丰"
    ],
    "typical_sources": [
     "汉书·王莽传",
     "王莽诏令集"
    ],
    "bias_note": "新朝官方文献将改制包装为「奉天命、法周公」；王莽本人好引经义自辩，对失败与民变多诿于「符命未应」。"
   },
   "han_zongshi": {
    "name": "汉宗室·豪强地主",
    "period": "新莽全期（公元9—23）",
    "interest": "维护土地私有、奴婢买卖与既有等级特权；王田、五均直接剥夺其资产，故宗室与豪强最先起兵反莽。",
    "key_figures": [
     "刘崇",
     "翟义",
     "刘玄",
     "刘秀"
    ],
    "typical_sources": [
     "汉书",
     "后汉书"
    ],
    "bias_note": "东汉官修《汉书》以汉室为正统，将反莽豪强记为「义兵」，对新莽之失极力渲染；王莽的儒术理想被塑为「篡伪」。"
   }
  }
 }
};
