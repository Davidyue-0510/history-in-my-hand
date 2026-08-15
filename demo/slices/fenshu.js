// 本文件由 tools/build.py 自动生成（切片 fenshu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fenshu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fenshu"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "焚书坑儒",
  "dossier_label": "焚书坑儒",
  "subtitle": "前213—前212 · 秦",
  "primary_place": "xianyang",
  "dossier_event": "event:fs_213",
  "terrain_grid": "china_coarse",
  "lead": "始皇三十四年（前213）李斯请焚《诗》《书》百家语，以吏为师；次年方士卢生等求仙不成亡去，始皇怒坑术士儒生四百六十余人于咸阳。文化专制之烈，后世讥之。",
  "parties_note": "焚坑据《史记·秦始皇本纪》综合，坑儒人数与对象有考辨争议。",
  "subject_names": {
   "person:lisi2": "李斯",
   "person:qinshihuang3": "秦始皇"
  },
  "page": "county.html?scene=fenshu",
  "key": "fenshu",
  "scene_id": "fenshu",
  "vocab_pack": "inline:fenshu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "焚书坑儒·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "焚坑据《史记·秦始皇本纪》综合，坑儒人数与对象有考辨争议。"
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
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
   "id": "lisi2",
   "name": "李斯",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "qinshihuang3",
   "name": "秦始皇",
   "side": "秦",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_fs_213",
   "subject": "event:fs_213",
   "predicate": "事件",
   "value_text": "李斯请焚民间《诗》《书》百家语，欲以法家一统思想。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -213,
    "end": -213,
    "era_text": "始皇三四"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_fs_212",
   "subject": "event:fs_212",
   "predicate": "事件",
   "value_text": "方士亡去、谤议朝政，始皇坑儒生于咸阳。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -212,
    "end": -212,
    "era_text": "始皇三五"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_fs_213",
   "subject": "event:fs_213",
   "year": -213,
   "era": "始皇三四",
   "title": "焚诗书",
   "kind": "统制",
   "text": "李斯请焚民间《诗》《书》百家语，欲以法家一统思想。",
   "place": "xianyang"
  },
  {
   "id": "ev_fs_212",
   "subject": "event:fs_212",
   "year": -212,
   "era": "始皇三五",
   "title": "坑儒生",
   "kind": "惨案",
   "text": "方士亡去、谤议朝政，始皇坑儒生于咸阳。",
   "place": "xianyang"
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
