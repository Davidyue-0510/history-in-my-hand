// 本文件由 tools/build.py 自动生成（切片 shaqiu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shaqiu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shaqiu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "沙丘之变",
  "dossier_label": "沙丘之变",
  "subtitle": "前210 · 秦",
  "primary_place": "xingtai",
  "dossier_event": "event:sq_210",
  "terrain_grid": "china_coarse",
  "lead": "始皇三十七年（前210）巡游崩于沙丘，丞相李斯恐生变秘不发丧，赵高说李斯、矫诏立少子胡亥，赐死长子扶苏与蒙恬。秦之倾覆自此伏笔。",
  "parties_note": "沙丘之变据《史记·秦始皇本纪》综合，矫诏之详为秦亡关键转折。",
  "subject_names": {
   "person:qinshihuang2": "秦始皇",
   "person:zhao_gao": "赵高"
  },
  "page": "county.html?scene=shaqiu",
  "key": "shaqiu",
  "scene_id": "shaqiu",
  "vocab_pack": "inline:shaqiu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "沙丘之变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "沙丘之变据《史记·秦始皇本纪》综合，矫诏之详为秦亡关键转折。"
  }
 ],
 "places": [
  {
   "id": "xingtai",
   "name": "沙丘",
   "lon": 114.5,
   "lat": 37.07,
   "note": "沙丘之变，今邢台",
   "elev": 72
  },
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都",
   "elev": 434
  }
 ],
 "persons": [
  {
   "id": "qinshihuang2",
   "name": "秦始皇",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "zhao_gao",
   "name": "赵高",
   "side": "秦",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sq_210",
   "subject": "event:sq_210",
   "predicate": "事件",
   "value_text": "始皇巡游崩于沙丘平台，李斯赵高秘丧。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -210,
    "end": -210,
    "era_text": "始皇三七"
   },
   "place": "xingtai",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sq_false",
   "subject": "event:sq_false",
   "predicate": "事件",
   "value_text": "赵高说李斯矫诏，赐扶苏、蒙恬死，胡亥嗣位。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -210,
    "end": -210,
    "era_text": "同年"
   },
   "place": "xingtai",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M53",
   "subject": "event:sq_210",
   "predicate": "发生",
   "value_text": "始皇崩于沙丘平台",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "始皇崩于沙丘平台",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "沙丘平台位于今邢台，已映射至place:xingtai",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M54",
   "subject": "person:zhao_gao",
   "predicate": "参与矫诏",
   "value_text": "赵高、李斯矫诏立胡亥",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "赵高、李斯矫诏立胡亥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M52",
   "subject": "event:sq_210",
   "predicate": "矫诏立胡亥",
   "value_text": "矫诏立胡亥为帝",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "矫诏立胡亥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M54",
   "subject": "event:sq_210",
   "predicate": "赐死扶苏蒙恬",
   "value_text": "赐公子扶苏、蒙恬死",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "赐公子扶苏、蒙恬死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M52",
   "subject": "event:sq_210",
   "predicate": "导致秦政骤乱",
   "value_text": "秦政骤乱",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "秦政骤乱",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文为结果性描述，推断为矫诏引发的直接后果",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M51",
   "subject": "person:zhao_gao",
   "predicate": "主导矫诏",
   "value_text": "赵高为矫诏主谋",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "赵高、李斯矫诏",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文并列赵高李斯，未明说主谋，推断赵高主导",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M48",
   "subject": "event:sq_false",
   "predicate": "与sq_210关联",
   "value_text": "矫诏事件为sq_false",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "矫诏立胡亥",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "empire",
   "note": "sq_false为已登记事件，推断矫诏属此事件范畴",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M48",
   "subject": "event:sq_210",
   "predicate": "地点",
   "value_text": "崩于沙丘平台",
   "time": {
    "era_text": "公元前210年",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": "xingtai",
   "source": "synthesis",
   "quote": "崩于沙丘平台",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "沙丘平台具体位置待考，已映射至place:xingtai",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SHAQIUG01",
   "subject": "event:sq_210",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "秦始皇",
    "start": "-210-01-01",
    "end": "-210-12-31",
    "gregorian_year": -210
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "court",
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
  "SHAQIUG01"
 ],
 "events": [
  {
   "id": "ev_sq_210",
   "subject": "event:sq_210",
   "year": -210,
   "era": "始皇三七",
   "title": "始皇崩沙丘",
   "kind": "变局",
   "text": "始皇巡游崩于沙丘平台，李斯赵高秘丧。",
   "place": "xingtai"
  },
  {
   "id": "ev_sq_false",
   "subject": "event:sq_false",
   "year": -210,
   "era": "同年",
   "title": "矫诏立胡亥",
   "kind": "结局",
   "text": "赵高说李斯矫诏，赐扶苏、蒙恬死，胡亥嗣位。",
   "place": "xingtai"
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
