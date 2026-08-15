// 本文件由 tools/build.py 自动生成（切片 dunzun），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dunzun"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dunzun"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "独尊儒术",
  "dossier_label": "独尊儒术",
  "subtitle": "前134 · 汉武帝时",
  "primary_place": "changan_dz",
  "dossier_event": "event:dz_134",
  "terrain_grid": "china_coarse",
  "lead": "武帝即位，董仲舒上《天人三策》，请「诸不在六艺之科者罢去」，儒术定于一尊，立五经博士、兴太学，影响两千年。",
  "parties_note": "思想政策据《汉书·董仲舒传》《武帝纪》综合；「独尊」后百家并未尽绝，实为儒术官学化。",
  "subject_names": {
   "person:wudi": "汉武帝",
   "person:dongzhongshu": "董仲舒"
  },
  "page": "county.html?scene=dunzun",
  "key": "dunzun",
  "scene_id": "dunzun",
  "vocab_pack": "inline:dunzun"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "独尊儒术·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "思想政策据《汉书·董仲舒传》《武帝纪》综合；「独尊」后百家并未尽绝，实为儒术官学化。"
  }
 ],
 "places": [
  {
   "id": "changan_dz",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉都，策问之所",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "wudi",
   "name": "汉武帝",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "dongzhongshu",
   "name": "董仲舒",
   "side": "儒者",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dz_134",
   "subject": "event:dz_134",
   "predicate": "事件",
   "value_text": "武帝诏举贤良，董仲舒对天人三策，请罢黜百家、独尊儒术，立五经博士。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -134,
    "end": -134,
    "era_text": "元光元年"
   },
   "place": "changan_dz",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dz_taixue",
   "subject": "event:dz_taixue",
   "predicate": "事件",
   "value_text": "为五经博士置弟子员，太学兴，儒生入仕之途大开。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -124,
    "end": -124,
    "era_text": "元朔五年"
   },
   "place": "changan_dz",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_dz_134",
   "subject": "event:dz_134",
   "year": -134,
   "era": "元光元年",
   "title": "天人三策·独尊儒术",
   "kind": "文化",
   "text": "武帝诏举贤良，董仲舒对天人三策，请罢黜百家、独尊儒术，立五经博士。",
   "place": "changan_dz"
  },
  {
   "id": "ev_dz_taixue",
   "subject": "event:dz_taixue",
   "year": -124,
   "era": "元朔五年",
   "title": "兴太学",
   "kind": "制度",
   "text": "为五经博士置弟子员，太学兴，儒生入仕之途大开。",
   "place": "changan_dz"
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
