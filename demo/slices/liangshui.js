// 本文件由 tools/build.py 自动生成（切片 liangshui），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["liangshui"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["liangshui"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "两税法",
  "dossier_label": "两税法",
  "subtitle": "780 · 唐建中",
  "primary_place": "changan",
  "dossier_event": "event:ls_780",
  "terrain_grid": "china_coarse",
  "lead": "安史乱后租庸调制坏，赋敛无准。780 宰相杨炎立两税法：户无主客、以见居为簿，人无丁中、以贫富为差，夏秋两征，税法由「税丁」转「税产」，影响及于明清。",
  "parties_note": "两税法据《旧唐书·杨炎传》《食货志》综合。",
  "subject_names": {
   "person:yangyan": "杨炎"
  },
  "page": "county.html?scene=liangshui",
  "key": "liangshui",
  "scene_id": "liangshui",
  "vocab_pack": "inline:liangshui"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "两税法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "两税法据《旧唐书·杨炎传》《食货志》综合。"
  }
 ],
 "places": [
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
   "id": "yangyan",
   "name": "杨炎",
   "side": "唐宰相",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_ls_780",
   "subject": "event:ls_780",
   "predicate": "事件",
   "value_text": "废租庸调，行两税，按资产定税、夏秋两征。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 780,
    "end": 780,
    "era_text": "建中元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_ls_eff",
   "subject": "event:ls_eff",
   "predicate": "事件",
   "value_text": "税基由人丁转财产，后世田赋因之。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 781,
    "end": 781,
    "era_text": "建中二"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_ls_780",
   "subject": "event:ls_780",
   "year": 780,
   "era": "建中元",
   "title": "杨炎立两税",
   "kind": "变法",
   "text": "废租庸调，行两税，按资产定税、夏秋两征。",
   "place": "changan"
  },
  {
   "id": "ev_ls_eff",
   "subject": "event:ls_eff",
   "year": 781,
   "era": "建中二",
   "title": "税制转型",
   "kind": "影响",
   "text": "税基由人丁转财产，后世田赋因之。",
   "place": "changan"
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
