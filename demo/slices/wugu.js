// 本文件由 tools/build.py 自动生成（切片 wugu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wugu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wugu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "巫蛊之祸",
  "dossier_label": "巫蛊之祸",
  "subtitle": "前91 · 汉武帝晚年",
  "primary_place": "changan",
  "dossier_event": "event:wg_91",
  "terrain_grid": "china_coarse",
  "lead": "征和年间江充构陷太子据行巫蛊，武帝信谗、太子惶恐起兵，长安流血数日。太子兵败自尽，皇后卫子夫殉，牵连数万，武帝晚节丧其嗣，悔而建思子宫。",
  "parties_note": "巫蛊据《汉书·武帝纪》《戾太子传》综合，江充之谮为祸根。",
  "subject_names": {
   "person:hanwu2": "汉武帝",
   "person:litai": "卫太子据"
  },
  "page": "county.html?scene=wugu",
  "key": "wugu",
  "scene_id": "wugu",
  "vocab_pack": "inline:wugu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "巫蛊之祸·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "巫蛊据《汉书·武帝纪》《戾太子传》综合，江充之谮为祸根。"
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
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "hanwu2",
   "name": "汉武帝",
   "side": "汉",
   "influence": 4
  },
  {
   "id": "litai",
   "name": "卫太子据",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wg_91",
   "subject": "event:wg_91",
   "predicate": "事件",
   "value_text": "江充诬太子行巫蛊，掘蛊于宫，武帝怒、太子惧。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -91,
    "end": -91,
    "era_text": "征和二"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wg_war",
   "subject": "event:wg_war",
   "predicate": "事件",
   "value_text": "太子发兵捕江充、旋败走，自尽湖县，卫后殉。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -91,
    "end": -91,
    "era_text": "同年"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M54",
   "subject": "event:wg_war",
   "predicate": "起因",
   "value_text": "江充告太子据行巫蛊",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江充告太子据行巫蛊",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M55",
   "subject": "event:wg_war",
   "predicate": "结果",
   "value_text": "戾太子起兵败亡",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M53",
   "subject": "person:hanwu2",
   "predicate": "态度转变",
   "value_text": "武帝悟",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "武帝悟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M55",
   "subject": "person:hanwu2",
   "predicate": "处置",
   "value_text": "族江充",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "族江充",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M53",
   "subject": "person:hanwu2",
   "predicate": "纪念行为",
   "value_text": "作思子宫",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "作思子宫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M52",
   "subject": "person:hanwu2",
   "predicate": "悔过诏书",
   "value_text": "轮台诏悔过",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "轮台诏悔过",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M49",
   "subject": "event:wg_91",
   "predicate": "关联",
   "value_text": "巫蛊之祸引发太子兵变",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "江充告太子据行巫蛊，戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "推断巫蛊案与太子兵变的因果关系",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M49",
   "subject": "event:wg_war",
   "predicate": "时间跨度",
   "value_text": "征和二年至征和四年",
   "time": {
    "era_text": "征和二年至征和四年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "征和二年……征和四年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "从原文时间点推断事件延续",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M37",
   "subject": "event:wg_war",
   "predicate": "性质",
   "value_text": "宫廷政变",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "推断为宫廷内部权力斗争",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M32",
   "subject": "person:hanwu2",
   "predicate": "晚年政策转向",
   "value_text": "由征伐转向休养",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "轮台诏悔过",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界普遍认为轮台诏标志政策转向",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX011_M18",
   "subject": "event:wg_war",
   "predicate": "伤亡",
   "value_text": "太子败亡",
   "time": {
    "era_text": "征和二年",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "戾太子起兵败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX012_M13",
   "subject": "event:wg_war",
   "predicate": "后续影响",
   "value_text": "武帝悔悟并清算",
   "time": {
    "era_text": "征和四年",
    "start": "-89-01-01",
    "end": "-89-12-31",
    "gregorian_year": -89
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "武帝悟，族江充",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "从原文行为推断悔悟",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WUGUG01",
   "subject": "event:wg_war",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "征和",
    "start": "-91-01-01",
    "end": "-91-12-31",
    "gregorian_year": -91
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "court",
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
  "WUGUG01"
 ],
 "events": [
  {
   "id": "ev_wg_91",
   "subject": "event:wg_91",
   "year": -91,
   "era": "征和二",
   "title": "江充构陷",
   "kind": "冤狱",
   "text": "江充诬太子行巫蛊，掘蛊于宫，武帝怒、太子惧。",
   "place": "changan"
  },
  {
   "id": "ev_wg_war",
   "subject": "event:wg_war",
   "year": -91,
   "era": "同年",
   "title": "太子兵败",
   "kind": "结局",
   "text": "太子发兵捕江充、旋败走，自尽湖县，卫后殉。",
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
