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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
