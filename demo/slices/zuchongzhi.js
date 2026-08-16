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
   "influence": 2
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
  },
  {
   "id": "SX001_M30",
   "subject": "event:zc_463",
   "predicate": "算圆周率",
   "value_text": "得3.1415926与3.1415927之间",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元463年祖冲之算圆周率盈朒二限，得3.1415926与3.1415927之间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文无年号纪年，仅用公元纪年；place 未登记，留空",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M31",
   "subject": "event:zc_463",
   "predicate": "成就评价",
   "value_text": "千年无出其右",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "千年无出其右",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "此为后世评价，非当时记录，但原文直述，故标 record",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M29",
   "subject": "person:zuchongzhi2",
   "predicate": "造历法",
   "value_text": "造《大明历》",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "jiankang",
   "source": "synthesis",
   "quote": "又造《大明历》",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "祖冲之活动于建康，故 place 映射 jiankang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M31",
   "subject": "person:zuchongzhi2",
   "predicate": "定岁差",
   "value_text": "定岁差",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "jiankang",
   "source": "synthesis",
   "quote": "定岁差",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M30",
   "subject": "event:zc_pi",
   "predicate": "数值范围",
   "value_text": "介于3.1415926与3.1415927之间",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "得3.1415926与3.1415927之间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "event:zc_pi 为圆周率计算事件，与 event:zc_463 关联",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M30",
   "subject": "event:zc_463",
   "predicate": "时间关联",
   "value_text": "与造历同年",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元463年祖冲之算圆周率……又造《大明历》",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文并列叙述，推断为同年发生",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M27",
   "subject": "person:zuchongzhi2",
   "predicate": "活动地点",
   "value_text": "建康",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "jiankang",
   "source": "synthesis",
   "quote": "（原文未明言，据史实推断）",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文未提地点，据学界共识推断在建康",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M28",
   "subject": "event:zc_pi",
   "predicate": "精度评价",
   "value_text": "千年无出其右",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "千年无出其右",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文直述评价",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M28",
   "subject": "event:zc_463",
   "predicate": "史料缺失",
   "value_text": "原文无年号纪年",
   "time": {
    "era_text": "公元463年",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": "",
   "source": "synthesis",
   "quote": "公元463年",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文仅用公元纪年，未用年号，无法按年号换算",
   "lead": {
    "where": "原文时间表述",
    "skills": [
     "历史纪年"
    ],
    "accept": "补充年号纪年"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZUCHONGZHIG01",
   "subject": "event:zc_463",
   "predicate": "史料缺环",
   "value_text": "此技术或发明的源流、改进与传播，古籍记载简略且间有附会，相关细节存在缺口。",
   "time": {
    "era_text": "大明",
    "start": "463-01-01",
    "end": "463-12-31",
    "gregorian_year": 463
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "tech",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX009_M28",
  "ZUCHONGZHIG01"
 ],
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
