// 本文件由 tools/build.py 自动生成（切片 sui_daxing），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sui_daxing"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sui_daxing"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "隋大兴城",
  "dossier_label": "隋大兴城",
  "subtitle": "582 · 隋开皇",
  "primary_place": "changan",
  "dossier_event": "event:dx_582",
  "terrain_grid": "china_coarse",
  "lead": "隋文帝迁都，命宇文恺规划大兴城，中轴对称、里坊严整、规模宏阔，唐因之改为长安，为当时世界最大城市，影响东亚都城规制。",
  "parties_note": "营建据《隋书·宇文恺传》与考古复原综合。",
  "subject_names": {
   "person:yuwenkai": "宇文恺"
  },
  "page": "county.html?scene=sui_daxing",
  "key": "sui_daxing",
  "scene_id": "sui_daxing",
  "vocab_pack": "inline:sui_daxing"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "隋大兴城·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "营建据《隋书·宇文恺传》与考古复原综合。"
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
   "id": "yuwenkai",
   "name": "宇文恺",
   "side": "隋匠师",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dx_582",
   "subject": "event:dx_582",
   "predicate": "事件",
   "value_text": "宇文恺擘画大兴城，规整里坊、奠定中轴。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 582,
    "end": 582,
    "era_text": "开皇二"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dx_583",
   "subject": "event:dx_583",
   "predicate": "事件",
   "value_text": "隋文帝迁入大兴城，后唐改长安。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 583,
    "end": 583,
    "era_text": "开皇三"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M74",
   "subject": "event:dx_582",
   "predicate": "筑城",
   "value_text": "隋文帝命宇文恺筑大兴城",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "开皇二年，隋文帝命宇文恺筑大兴城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M74",
   "subject": "event:dx_582",
   "predicate": "规划",
   "value_text": "规画棋盘、坊市井然",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "规画棋盘、坊市井然",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M73",
   "subject": "event:dx_582",
   "predicate": "迁都",
   "value_text": "迁都于此",
   "time": {
    "era_text": "开皇三年",
    "start": "583-01-01",
    "end": "583-12-31",
    "gregorian_year": 583
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "开皇三年迁都于此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M75",
   "subject": "event:dx_582",
   "predicate": "奠基",
   "value_text": "为唐长安之基",
   "time": {
    "era_text": "开皇三年",
    "start": "583-01-01",
    "end": "583-12-31",
    "gregorian_year": 583
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "为唐长安之基",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说，但由'为唐长安之基'可推出大兴城对唐长安的奠基作用",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M73",
   "subject": "person:yuwenkai",
   "predicate": "主持筑城",
   "value_text": "宇文恺筑大兴城",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "隋文帝命宇文恺筑大兴城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M72",
   "subject": "event:dx_582",
   "predicate": "布局",
   "value_text": "棋盘式布局",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "规画棋盘",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "由'规画棋盘'推断为棋盘式布局",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M65",
   "subject": "event:dx_582",
   "predicate": "坊市制度",
   "value_text": "坊市井然",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "坊市井然",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M67",
   "subject": "event:dx_582",
   "predicate": "时间跨度",
   "value_text": "开皇二年至开皇三年",
   "time": {
    "era_text": "开皇二年",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": "changan",
   "source": "synthesis",
   "quote": "开皇二年...开皇三年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "由原文时间点推出筑城与迁都的时间跨度",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SUI_DAXINGG01",
   "subject": "event:dx_582",
   "predicate": "史料缺环",
   "value_text": "此工程的营造工期、用工与耗费，历代记载繁简不一，民间传说更增益其辞，细节存在缺口。",
   "time": {
    "era_text": "开皇",
    "start": "582-01-01",
    "end": "582-12-31",
    "gregorian_year": 582
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "engineering",
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
  "SUI_DAXINGG01"
 ],
 "events": [
  {
   "id": "ev_dx_582",
   "subject": "event:dx_582",
   "year": 582,
   "era": "开皇二",
   "title": "营建大兴城",
   "kind": "工程",
   "text": "宇文恺擘画大兴城，规整里坊、奠定中轴。",
   "place": "changan"
  },
  {
   "id": "ev_dx_583",
   "subject": "event:dx_583",
   "year": 583,
   "era": "开皇三",
   "title": "迁都新邑",
   "kind": "落成",
   "text": "隋文帝迁入大兴城，后唐改长安。",
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
