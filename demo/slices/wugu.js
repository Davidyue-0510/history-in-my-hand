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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
