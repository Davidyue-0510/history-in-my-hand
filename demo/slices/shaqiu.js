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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
