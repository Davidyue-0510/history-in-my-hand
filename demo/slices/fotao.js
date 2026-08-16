// 本文件由 tools/build.py 自动生成（切片 fotao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fotao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fotao"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "佛教传入",
  "dossier_label": "佛教传入",
  "subtitle": "67 · 东汉永平",
  "primary_place": "luoyang",
  "dossier_event": "event:ft_67",
  "terrain_grid": "china_coarse",
  "lead": "永平年间（约67）汉明帝梦金人，遣使西域迎佛法，白马驮经至洛阳，建白马寺，译《四十二章经》。佛教自此东传，渐与儒道交融，成中华三大思想传统之一。",
  "parties_note": "传入据《后汉书·西域传》与《高僧传》综合，感梦迎僧含传说成分。",
  "subject_names": {
   "person:hanming": "汉明帝",
   "person:zhufalan": "竺法兰"
  },
  "page": "county.html?scene=fotao",
  "key": "fotao",
  "scene_id": "fotao",
  "vocab_pack": "inline:fotao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "佛教传入·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "传入据《后汉书·西域传》与《高僧传》综合，感梦迎僧含传说成分。"
  }
 ],
 "places": [
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "hanming",
   "name": "汉明帝",
   "side": "汉",
   "influence": 1
  },
  {
   "id": "zhufalan",
   "name": "竺法兰",
   "side": "天竺僧",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ft_67",
   "subject": "event:ft_67",
   "predicate": "事件",
   "value_text": "汉使迎竺法兰、摄摩腾，以白马载经至洛阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 67,
    "end": 67,
    "era_text": "永平十"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ft_temple",
   "subject": "event:ft_temple",
   "predicate": "事件",
   "value_text": "于洛阳建白马寺，译经其中，汉地伽蓝之始。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 68,
    "end": 68,
    "era_text": "永平十一"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M27",
   "subject": "event:ft_67",
   "predicate": "起因",
   "value_text": "汉明帝遣使西域求法",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "",
   "source": "synthesis",
   "quote": "汉明帝遣使西域求法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文未用年号纪年，直接使用公元纪年，此处保留原文表述",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M28",
   "subject": "event:ft_67",
   "predicate": "方式",
   "value_text": "白马驮经至洛阳",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "白马驮经至洛阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M26",
   "subject": "event:ft_67",
   "predicate": "结果",
   "value_text": "立白马寺",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "立白马寺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M28",
   "subject": "event:ft_67",
   "predicate": "意义",
   "value_text": "佛教始东传中土",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "",
   "source": "synthesis",
   "quote": "佛教始东传中土",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M27",
   "subject": "event:ft_temple",
   "predicate": "建置",
   "value_text": "白马寺建立",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "立白马寺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "county",
   "note": "白马寺为佛教东传标志性建筑",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M27",
   "subject": "person:hanming",
   "predicate": "行为",
   "value_text": "遣使西域求法",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "",
   "source": "synthesis",
   "quote": "汉明帝遣使西域求法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M27",
   "subject": "event:ft_67",
   "predicate": "时间定位",
   "value_text": "公元67年",
   "time": {
    "era_text": "公元67年",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元67年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文直接使用公元纪年，非年号纪年",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "FOTAOG01",
   "subject": "event:ft_67",
   "predicate": "史料缺环",
   "value_text": "此学派或议题的师承、著作与影响，诸子文献散佚、后世追述不一，相关脉络存在缺口。",
   "time": {
    "era_text": "永平",
    "start": "67-01-01",
    "end": "67-12-31",
    "gregorian_year": 67
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "thought",
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
  "FOTAOG01"
 ],
 "events": [
  {
   "id": "ev_ft_67",
   "subject": "event:ft_67",
   "year": 67,
   "era": "永平十",
   "title": "白马驮经",
   "kind": "传入",
   "text": "汉使迎竺法兰、摄摩腾，以白马载经至洛阳。",
   "place": "luoyang"
  },
  {
   "id": "ev_ft_temple",
   "subject": "event:ft_temple",
   "year": 68,
   "era": "永平十一",
   "title": "白马寺立",
   "kind": "本土化",
   "text": "于洛阳建白马寺，译经其中，汉地伽蓝之始。",
   "place": "luoyang"
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
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {}
 }
};
