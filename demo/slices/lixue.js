// 本文件由 tools/build.py 自动生成（切片 lixue），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lixue"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lixue"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "宋明理学",
  "dossier_label": "宋明理学",
  "subtitle": "1175 · 鹅湖之会",
  "primary_place": "eqihu",
  "dossier_event": "event:lx_1175",
  "terrain_grid": "china_coarse",
  "lead": "两宋儒者融合佛老、重振孔孟。1175 吕祖谦邀朱熹、陆九渊会于鹅湖，论「道问学」与「尊德性」之分，朱陆异同自此显。朱熹《四书章句》后定为科举圭臬，理学统摄元明清。",
  "parties_note": "理学据《宋史·道学传》与《朱子年谱》综合，朱陆之争为理学内部张力。",
  "subject_names": {
   "person:zhuxi": "朱熹",
   "person:lujiuyuan": "陆九渊"
  },
  "page": "county.html?scene=lixue",
  "key": "lixue",
  "scene_id": "lixue",
  "vocab_pack": "inline:lixue"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "宋明理学·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "理学据《宋史·道学传》与《朱子年谱》综合，朱陆之争为理学内部张力。"
  }
 ],
 "places": [
  {
   "id": "eqihu",
   "name": "鹅湖",
   "lon": 117.7,
   "lat": 28.28,
   "note": "鹅湖之会，今江西铅山",
   "elev": 115
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
   "id": "zhuxi",
   "name": "朱熹",
   "side": "南宋",
   "influence": 0
  },
  {
   "id": "lujiuyuan",
   "name": "陆九渊",
   "side": "南宋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_lx_1175",
   "subject": "event:lx_1175",
   "predicate": "事件",
   "value_text": "朱陆会讲鹅湖，辩为学工夫，和而不同。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1175,
    "end": 1175,
    "era_text": "淳熙二"
   },
   "place": "eqihu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lx_1241",
   "subject": "event:lx_1241",
   "predicate": "事件",
   "value_text": "朱熹从祀孔庙，四书定为科举行文之本。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1241,
    "end": 1241,
    "era_text": "淳祐元"
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
   "id": "ev_lx_1175",
   "subject": "event:lx_1175",
   "year": 1175,
   "era": "淳熙二",
   "title": "鹅湖之会",
   "kind": "论辩",
   "text": "朱陆会讲鹅湖，辩为学工夫，和而不同。",
   "place": "eqihu"
  },
  {
   "id": "ev_lx_1241",
   "subject": "event:lx_1241",
   "year": 1241,
   "era": "淳祐元",
   "title": "理学官学化",
   "kind": "影响",
   "text": "朱熹从祀孔庙，四书定为科举行文之本。",
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
