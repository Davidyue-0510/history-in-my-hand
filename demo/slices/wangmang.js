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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
