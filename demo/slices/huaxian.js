// 本文件由 tools/build.py 自动生成（切片 huaxian），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huaxian"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huaxian"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "华县大地震",
  "dossier_label": "华县大地震",
  "subtitle": "明嘉靖三十四年（1556）· 8级余",
  "primary_place": "huaxian",
  "dossier_event": "event:hx_main",
  "terrain_grid": "china_coarse",
  "lead": "1556 年腊月十二（公历 1 月 23 日）陕西华县发生约 8 级地震，震中烈度极高，陕晋豫三省波及，记载死亡约 83 万，为世界震害死亡人数之最。",
  "parties_note": "死亡数字据《明史·五行志》与方志，为当时奏报折中，实际恐更高。",
  "subject_names": {
   "person:jiajing": "嘉靖帝"
  },
  "page": "county.html?scene=huaxian",
  "key": "huaxian",
  "scene_id": "huaxian",
  "vocab_pack": "inline:huaxian"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "华县大地震·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "死亡数字据《明史·五行志》与方志，为当时奏报折中，实际恐更高。"
  }
 ],
 "places": [
  {
   "id": "huaxian",
   "name": "华县",
   "lon": 109.77,
   "lat": 34.5,
   "note": "震中，今陕西渭南华州区",
   "elev": 756
  },
  {
   "id": "xian",
   "name": "西安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "受灾重，城垣庙宇多圮",
   "elev": 391
  },
  {
   "id": "linfen",
   "name": "临汾",
   "lon": 111.52,
   "lat": 36.08,
   "note": "山西震区",
   "elev": 499
  },
  {
   "id": "changan_ming",
   "name": "渭南",
   "lon": 109.5,
   "lat": 34.5,
   "note": "震中附近",
   "elev": 487
  }
 ],
 "persons": [
  {
   "id": "jiajing",
   "name": "嘉靖帝",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hx_main",
   "subject": "event:hx_main",
   "predicate": "事件",
   "value_text": "子夜巨震，山川易形，压死奏报以数十万计，《五行志》谓「震压官吏军民奏报有名者八十三万有奇」。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1556,
    "end": 1556,
    "era_text": "嘉靖三十四年腊月十二"
   },
   "place": "huaxian",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hx_after",
   "subject": "event:hx_after",
   "predicate": "事件",
   "value_text": "震后饥疫相继，庐舍尽墟，灾情数岁未复。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1556,
    "end": 1556,
    "era_text": "震后"
   },
   "place": "xian",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hx_legacy",
   "subject": "event:hx_legacy",
   "predicate": "事件",
   "value_text": "明代将巨灾系于「窒阏元气」，朝野修省，亦促成地方赈济与城防重修。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1556,
    "end": 1556,
    "era_text": "嘉靖三十四年"
   },
   "place": "linfen",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hx_main",
   "subject": "event:hx_main",
   "year": 1556,
   "era": "嘉靖三十四年腊月十二",
   "title": "华县大地震",
   "kind": "地震",
   "text": "子夜巨震，山川易形，压死奏报以数十万计，《五行志》谓「震压官吏军民奏报有名者八十三万有奇」。",
   "place": "huaxian"
  },
  {
   "id": "ev_hx_after",
   "subject": "event:hx_after",
   "year": 1556,
   "era": "震后",
   "title": "余震经年·次生灾",
   "kind": "地震",
   "text": "震后饥疫相继，庐舍尽墟，灾情数岁未复。",
   "place": "xian"
  },
  {
   "id": "ev_hx_legacy",
   "subject": "event:hx_legacy",
   "year": 1556,
   "era": "嘉靖三十四年",
   "title": "灾异入史·天人感应",
   "kind": "灾异",
   "text": "明代将巨灾系于「窒阏元气」，朝野修省，亦促成地方赈济与城防重修。",
   "place": "linfen"
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
