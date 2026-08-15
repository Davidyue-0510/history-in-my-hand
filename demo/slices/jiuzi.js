// 本文件由 tools/build.py 自动生成（切片 jiuzi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiuzi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiuzi"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "九子夺嫡",
  "dossier_label": "九子夺嫡",
  "subtitle": "1712—1722 · 清康熙末",
  "primary_place": "beijing",
  "dossier_event": "event:jz_1712",
  "terrain_grid": "china_coarse",
  "lead": "康熙晚年储位久虚，胤礽两立两废，皇子结党（太子、大千岁、八爷等）争斗剧烈。1722 康熙崩，四子胤禛继位为雍正，即位之正否聚讼至今。",
  "parties_note": "夺嫡据《清圣祖实录》与清史稿综合，继位细节多传说与考辨。",
  "subject_names": {
   "person:kangxi3": "康熙帝",
   "person:yongzheng": "雍正帝"
  },
  "page": "county.html?scene=jiuzi",
  "key": "jiuzi",
  "scene_id": "jiuzi",
  "vocab_pack": "inline:jiuzi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "九子夺嫡·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "夺嫡据《清圣祖实录》与清史稿综合，继位细节多传说与考辨。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
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
   "id": "kangxi3",
   "name": "康熙帝",
   "side": "清",
   "influence": 0
  },
  {
   "id": "yongzheng",
   "name": "雍正帝",
   "side": "清",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jz_1712",
   "subject": "event:jz_1712",
   "predicate": "事件",
   "value_text": "胤礽再废，储位久虚，诸皇子竞结党羽。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1712,
    "end": 1712,
    "era_text": "康熙五一"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jz_1722",
   "subject": "event:jz_1722",
   "predicate": "事件",
   "value_text": "康熙崩，遗诏传四子胤禛，在位为雍正，夺嫡终局。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1722,
    "end": 1722,
    "era_text": "康熙六一"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_jz_1712",
   "subject": "event:jz_1712",
   "year": 1712,
   "era": "康熙五一",
   "title": "废太子·储位空",
   "kind": "变局",
   "text": "胤礽再废，储位久虚，诸皇子竞结党羽。",
   "place": "beijing"
  },
  {
   "id": "ev_jz_1722",
   "subject": "event:jz_1722",
   "year": 1722,
   "era": "康熙六一",
   "title": "雍正嗣位",
   "kind": "结局",
   "text": "康熙崩，遗诏传四子胤禛，在位为雍正，夺嫡终局。",
   "place": "beijing"
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
