// 本文件由 tools/build.py 自动生成（切片 beijiu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["beijiu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["beijiu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "杯酒释兵权",
  "dossier_label": "杯酒释兵权",
  "subtitle": "961 · 宋太祖",
  "primary_place": "kaofeng",
  "dossier_event": "event:bj_961",
  "terrain_grid": "china_coarse",
  "lead": "建隆二年（961）太祖宴石守信等宿将，以「君臣猜疑」为由劝其释兵权、出守藩镇，赏赉优厚。兵权归枢密、将不专兵，宋之「强干弱枝」自此而定。",
  "parties_note": "故事见《续资治通鉴长编》载，后世或疑其详，然抑武之势确然。",
  "subject_names": {
   "person:songtaizu": "宋太祖",
   "person:shishouxin": "石守信"
  },
  "page": "county.html?scene=beijiu",
  "key": "beijiu",
  "scene_id": "beijiu",
  "vocab_pack": "inline:beijiu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "杯酒释兵权·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "故事见《续资治通鉴长编》载，后世或疑其详，然抑武之势确然。"
  }
 ],
 "places": [
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
  },
  {
   "id": "chenqiao",
   "name": "陈桥驿",
   "lon": 114.2,
   "lat": 34.85,
   "note": "陈桥兵变地，开封东北",
   "elev": 74
  }
 ],
 "persons": [
  {
   "id": "songtaizu",
   "name": "宋太祖",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "shishouxin",
   "name": "石守信",
   "side": "宋将",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_bj_961",
   "subject": "event:bj_961",
   "predicate": "事件",
   "value_text": "太祖宴宿将，婉言劝释兵权，诸将拜辞就镇。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 961,
    "end": 961,
    "era_text": "建隆二"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_bj_eff",
   "subject": "event:bj_eff",
   "predicate": "事件",
   "value_text": "兵权归枢密、更戍法行，唐末藩镇之患渐弭。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 962,
    "end": 962,
    "era_text": "建隆三"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_bj_961",
   "subject": "event:bj_961",
   "year": 961,
   "era": "建隆二",
   "title": "宴饮释权",
   "kind": "权谋",
   "text": "太祖宴宿将，婉言劝释兵权，诸将拜辞就镇。",
   "place": "kaofeng"
  },
  {
   "id": "ev_bj_eff",
   "subject": "event:bj_eff",
   "year": 962,
   "era": "建隆三",
   "title": "崇文抑武",
   "kind": "结局",
   "text": "兵权归枢密、更戍法行，唐末藩镇之患渐弭。",
   "place": "kaofeng"
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
