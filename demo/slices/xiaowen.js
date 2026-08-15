// 本文件由 tools/build.py 自动生成（切片 xiaowen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xiaowen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xiaowen"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "孝文帝汉化",
  "dossier_label": "孝文帝汉化",
  "subtitle": "493—496 · 北魏",
  "primary_place": "luoyang",
  "dossier_event": "event:xw_493",
  "terrain_grid": "china_coarse",
  "lead": "孝文帝自平城迁都洛阳，禁穿胡服、改说汉语、鲜卑姓改汉姓（拓跋→元）、与汉士族通婚，加速北魏政权与文化的华夏化。",
  "parties_note": "汉化措施据《魏书·高祖纪》与《资治通鉴》综合，守旧鲜卑贵族多反对。",
  "subject_names": {
   "person:xiaowen": "孝文帝",
   "person:fenghou": "冯太后"
  },
  "page": "county.html?scene=xiaowen",
  "key": "xiaowen",
  "scene_id": "xiaowen",
  "vocab_pack": "inline:xiaowen"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "孝文帝汉化·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "汉化措施据《魏书·高祖纪》与《资治通鉴》综合，守旧鲜卑贵族多反对。"
  }
 ],
 "places": [
  {
   "id": "pingcheng",
   "name": "平城",
   "lon": 113.3,
   "lat": 40.08,
   "note": "北魏旧都（今大同）",
   "elev": 1054
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "迁都后汉化中心",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "xiaowen",
   "name": "孝文帝",
   "side": "北魏",
   "influence": 0
  },
  {
   "id": "fenghou",
   "name": "冯太后",
   "side": "北魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xw_493",
   "subject": "event:xw_493",
   "predicate": "事件",
   "value_text": "孝文帝以南伐为名，率众自平城迁都洛阳，脱离鲜卑守旧势力。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 493,
    "end": 493,
    "era_text": "太和十七年"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xw_494",
   "subject": "event:xw_494",
   "predicate": "事件",
   "value_text": "诏禁士民穿胡服、朝廷说鲜卑语，违者黜官，从汉制。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 494,
    "end": 494,
    "era_text": "十八年"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xw_496",
   "subject": "event:xw_496",
   "predicate": "事件",
   "value_text": "改拓跋等鲜卑姓为汉姓（皇室拓跋→元），定姓族门第，与汉高门通婚。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 496,
    "end": 496,
    "era_text": "二十年"
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
   "id": "ev_xw_493",
   "subject": "event:xw_493",
   "year": 493,
   "era": "太和十七年",
   "title": "迁都洛阳",
   "kind": "改革",
   "text": "孝文帝以南伐为名，率众自平城迁都洛阳，脱离鲜卑守旧势力。",
   "place": "luoyang"
  },
  {
   "id": "ev_xw_494",
   "subject": "event:xw_494",
   "year": 494,
   "era": "十八年",
   "title": "禁胡服·改汉语",
   "kind": "改革",
   "text": "诏禁士民穿胡服、朝廷说鲜卑语，违者黜官，从汉制。",
   "place": "luoyang"
  },
  {
   "id": "ev_xw_496",
   "subject": "event:xw_496",
   "year": 496,
   "era": "二十年",
   "title": "改姓·定姓族",
   "kind": "改革",
   "text": "改拓跋等鲜卑姓为汉姓（皇室拓跋→元），定姓族门第，与汉高门通婚。",
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
