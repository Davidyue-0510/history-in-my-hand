// 本文件由 tools/build.py 自动生成（切片 shenkuo），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shenkuo"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shenkuo"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "沈括梦溪笔谈",
  "dossier_label": "沈括梦溪笔谈",
  "subtitle": "1088 · 北宋元祐",
  "primary_place": "zhenjiang",
  "dossier_event": "event:sk_1072",
  "terrain_grid": "china_coarse",
  "lead": "北宋沈括晚居润州梦溪园，撰《梦溪笔谈》二十六卷，记天文、历法、算数、地质、医药、技艺，最早记述磁偏角与活字，被誉为中国科学史里程碑。",
  "parties_note": "笔谈据《梦溪笔谈》原书及研究综合。",
  "subject_names": {
   "person:shenkuo2": "沈括"
  },
  "page": "county.html?scene=shenkuo",
  "key": "shenkuo",
  "scene_id": "shenkuo",
  "vocab_pack": "inline:shenkuo"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "沈括梦溪笔谈·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "笔谈据《梦溪笔谈》原书及研究综合。"
  }
 ],
 "places": [
  {
   "id": "zhenjiang",
   "name": "镇江",
   "lon": 119.45,
   "lat": 32.2,
   "note": "沈括梦溪所在地",
   "elev": 15
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "shenkuo2",
   "name": "沈括",
   "side": "北宋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sk_1072",
   "subject": "event:sk_1072",
   "predicate": "事件",
   "value_text": "沈括提举司天监、察访两浙，究水利舆地。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1072,
    "end": 1072,
    "era_text": "熙宁五"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sk_1088",
   "subject": "event:sk_1088",
   "predicate": "事件",
   "value_text": "隐居梦溪园，成《笔谈》，录格物之知。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1088,
    "end": 1088,
    "era_text": "元祐三"
   },
   "place": "zhenjiang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_sk_1072",
   "subject": "event:sk_1072",
   "year": 1072,
   "era": "熙宁五",
   "title": "奉使察访",
   "kind": "科学",
   "text": "沈括提举司天监、察访两浙，究水利舆地。",
   "place": "kaofeng"
  },
  {
   "id": "ev_sk_1088",
   "subject": "event:sk_1088",
   "year": 1088,
   "era": "元祐三",
   "title": "梦溪成书",
   "kind": "科技",
   "text": "隐居梦溪园，成《笔谈》，录格物之知。",
   "place": "zhenjiang"
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
