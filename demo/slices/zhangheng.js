// 本文件由 tools/build.py 自动生成（切片 zhangheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhangheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhangheng"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "张衡地动仪",
  "dossier_label": "张衡地动仪",
  "subtitle": "132 · 东汉阳嘉",
  "primary_place": "luoyang",
  "dossier_event": "event:zh_132",
  "terrain_grid": "china_coarse",
  "lead": "东汉阳嘉元年（132）张衡为太史令，铸候风地动仪，以精铜为之，外有八龙衔丸，地震则震方龙发机吐丸。曾测陇西地震，京师人服其妙，为世界测震器械之祖。",
  "parties_note": "地动仪据《后汉书·张衡传》综合，原器失传、复原方案有争议。",
  "subject_names": {
   "person:zhangheng2": "张衡"
  },
  "page": "county.html?scene=zhangheng",
  "key": "zhangheng",
  "scene_id": "zhangheng",
  "vocab_pack": "inline:zhangheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "张衡地动仪·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "地动仪据《后汉书·张衡传》综合，原器失传、复原方案有争议。"
  }
 ],
 "places": [
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
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
   "id": "zhangheng2",
   "name": "张衡",
   "side": "东汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zh_132",
   "subject": "event:zh_132",
   "predicate": "事件",
   "value_text": "张衡铸铜仪，八龙衔丸，机关巧绝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 132,
    "end": 132,
    "era_text": "阳嘉元"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zh_test",
   "subject": "event:zh_test",
   "predicate": "事件",
   "value_text": "一龙发机而地动，驿至果报陇西震，众乃服。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 138,
    "end": 138,
    "era_text": "永和七"
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
   "id": "ev_zh_132",
   "subject": "event:zh_132",
   "year": 132,
   "era": "阳嘉元",
   "title": "候风地动仪成",
   "kind": "科技",
   "text": "张衡铸铜仪，八龙衔丸，机关巧绝。",
   "place": "luoyang"
  },
  {
   "id": "ev_zh_test",
   "subject": "event:zh_test",
   "year": 138,
   "era": "永和七",
   "title": "测陇西震",
   "kind": "验证",
   "text": "一龙发机而地动，驿至果报陇西震，众乃服。",
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
