// 本文件由 tools/build.py 自动生成（切片 baijia），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["baijia"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["baijia"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "title": "百家争鸣",
  "dossier_label": "百家争鸣",
  "subtitle": "前5—前3 世纪 · 战国",
  "primary_place": "linzi",
  "dossier_event": "event:bj_350",
  "terrain_grid": "china_coarse",
  "lead": "周室衰微、士阶层崛起，战国诸子各张其说：儒倡仁礼、墨主兼爱、道法自然、法任刑名。齐国稷下学宫聚天下辩士，百家争鸣，奠定此后两千年思想底盘。",
  "parties_note": "诸子据《史记》《汉书·艺文志》综合，学派源流有后世归纳成分。",
  "subject_names": {
   "person:mengzi": "孟子",
   "person:zhuangzi": "庄子"
  },
  "page": "county.html?scene=baijia",
  "key": "baijia",
  "scene_id": "baijia",
  "vocab_pack": "inline:baijia"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "百家争鸣·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "诸子据《史记》《汉书·艺文志》综合，学派源流有后世归纳成分。"
  }
 ],
 "places": [
  {
   "id": "linzi",
   "name": "临淄",
   "lon": 118.05,
   "lat": 36.81,
   "note": "齐国都，稷下学宫",
   "elev": 70
  },
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
   "id": "mengzi",
   "name": "孟子",
   "side": "儒",
   "influence": 0
  },
  {
   "id": "zhuangzi",
   "name": "庄子",
   "side": "道",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bj_350",
   "subject": "event:bj_350",
   "predicate": "事件",
   "value_text": "齐稷下学宫招贤，孟荀邹衍之徒并聚，论难不辍。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -350,
    "end": -350,
    "era_text": "战国中"
   },
   "place": "linzi",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_schools",
   "subject": "event:bj_schools",
   "predicate": "事件",
   "value_text": "儒墨显学对峙，道法渐兴，名农兵杂并出。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -300,
    "end": -300,
    "era_text": "战国中晚"
   },
   "place": "linzi",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_bj_350",
   "subject": "event:bj_350",
   "year": -350,
   "era": "战国中",
   "title": "稷下鼎盛",
   "kind": "思想",
   "text": "齐稷下学宫招贤，孟荀邹衍之徒并聚，论难不辍。",
   "place": "linzi"
  },
  {
   "id": "ev_bj_schools",
   "subject": "event:bj_schools",
   "year": -300,
   "era": "战国中晚",
   "title": "儒墨道法",
   "kind": "思想",
   "text": "儒墨显学对峙，道法渐兴，名农兵杂并出。",
   "place": "linzi"
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
