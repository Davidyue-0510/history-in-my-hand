// 本文件由 tools/build.py 自动生成（切片 zuchongzhi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zuchongzhi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zuchongzhi"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "祖冲之圆周率",
  "dossier_label": "祖冲之圆周率",
  "subtitle": "480 · 南朝",
  "primary_place": "jiankang",
  "dossier_event": "event:zc_463",
  "terrain_grid": "china_coarse",
  "lead": "南朝祖冲之精算数，以缀术求圆周率在 3.1415926 与 3.1415927 之间，并定约率 22/7、密率 355/113，此精度领先世界近千年；又造《大明历》、指南车。",
  "parties_note": "圆周率据《南史·祖冲之传》综合，密率 355/113 后称「祖率」。",
  "subject_names": {
   "person:zuchongzhi2": "祖冲之"
  },
  "page": "county.html?scene=zuchongzhi",
  "key": "zuchongzhi",
  "scene_id": "zuchongzhi",
  "vocab_pack": "inline:zuchongzhi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "祖冲之圆周率·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "圆周率据《南史·祖冲之传》综合，密率 355/113 后称「祖率」。"
  }
 ],
 "places": [
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "note": "南朝都，今南京",
   "elev": 17
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
   "id": "zuchongzhi2",
   "name": "祖冲之",
   "side": "南朝",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zc_463",
   "subject": "event:zc_463",
   "predicate": "事件",
   "value_text": "祖冲之进《大明历》，破旧历岁差之陋。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 463,
    "end": 463,
    "era_text": "宋大明七"
   },
   "place": "jiankang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zc_pi",
   "subject": "event:zc_pi",
   "predicate": "事件",
   "value_text": "算圆周至七位小数，定密率 355/113，旷古未有。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 480,
    "end": 480,
    "era_text": "齐建元"
   },
   "place": "jiankang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zc_463",
   "subject": "event:zc_463",
   "year": 463,
   "era": "宋大明七",
   "title": "上大明历",
   "kind": "历法",
   "text": "祖冲之进《大明历》，破旧历岁差之陋。",
   "place": "jiankang"
  },
  {
   "id": "ev_zc_pi",
   "subject": "event:zc_pi",
   "year": 480,
   "era": "齐建元",
   "title": "圆周率精算",
   "kind": "科技",
   "text": "算圆周至七位小数，定密率 355/113，旷古未有。",
   "place": "jiankang"
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
