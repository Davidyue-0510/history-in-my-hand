// 本文件由 tools/build.py 自动生成（切片 zhaozhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhaozhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhaozhou"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "赵州桥",
  "dossier_label": "赵州桥",
  "subtitle": "595 · 隋开皇",
  "primary_place": "zhaoxian",
  "dossier_event": "event:zz_595",
  "terrain_grid": "china_coarse",
  "lead": "隋开皇后期，匠师李春于洨河上建安济桥，首创敞肩拱，减重防洪、跨度逾卅七米，历一千四百年仍存，为世界桥梁史奇迹。",
  "parties_note": "建桥据唐张嘉贞《安济桥铭》与后世方志综合。",
  "subject_names": {
   "person:lichun": "李春"
  },
  "page": "county.html?scene=zhaozhou",
  "key": "zhaozhou",
  "scene_id": "zhaozhou",
  "vocab_pack": "inline:zhaozhou"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "赵州桥·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "建桥据唐张嘉贞《安济桥铭》与后世方志综合。"
  }
 ],
 "places": [
  {
   "id": "zhaoxian",
   "name": "赵县",
   "lon": 114.78,
   "lat": 37.76,
   "note": "赵州桥所在",
   "elev": 37
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
   "id": "lichun",
   "name": "李春",
   "side": "隋匠师",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zz_595",
   "subject": "event:zz_595",
   "predicate": "事件",
   "value_text": "李春建安济桥于洨河，敞肩拱减荷、利舟行。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 595,
    "end": 595,
    "era_text": "开皇十五"
   },
   "place": "zhaoxian",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zz_later",
   "subject": "event:zz_later",
   "predicate": "事件",
   "value_text": "桥成后通衢便利，唐人铭之，世代修缮沿用。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 605,
    "end": 605,
    "era_text": "大业元"
   },
   "place": "zhaoxian",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zz_595",
   "subject": "event:zz_595",
   "year": 595,
   "era": "开皇十五",
   "title": "李春造桥",
   "kind": "工程",
   "text": "李春建安济桥于洨河，敞肩拱减荷、利舟行。",
   "place": "zhaoxian"
  },
  {
   "id": "ev_zz_later",
   "subject": "event:zz_later",
   "year": 605,
   "era": "大业元",
   "title": "名动南北",
   "kind": "影响",
   "text": "桥成后通衢便利，唐人铭之，世代修缮沿用。",
   "place": "zhaoxian"
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
