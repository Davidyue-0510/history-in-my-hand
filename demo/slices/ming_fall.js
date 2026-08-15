// 本文件由 tools/build.py 自动生成（切片 ming_fall），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ming_fall"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ming_fall"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "明亡·崇祯自缢",
  "dossier_label": "明亡",
  "subtitle": "1644 · 内忧外患·国祚终结",
  "primary_place": "beijing",
  "dossier_event": "event:mf_1627",
  "terrain_grid": "china_coarse",
  "lead": "明末小冰期饥荒、加派辽饷、党争误国，民变蜂起。1644 李自成破北京，崇祯自缢；山海关吴三桂引清军入关，明亡清兴。",
  "parties_note": "明亡为内外交困之果，非单一缘由；此处综合《明史》《崇祯实录》与近代研究。",
  "subject_names": {
   "person:chongzhen": "崇祯帝",
   "person:lizicheng3": "李自成",
   "person:wu3gui": "吴三桂"
  },
  "page": "county.html?scene=ming_fall",
  "key": "ming_fall",
  "scene_id": "ming_fall",
  "vocab_pack": "inline:ming_fall"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "明亡·崇祯自缢·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "明亡为内外交困之果，非单一缘由；此处综合《明史》《崇祯实录》与近代研究。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "明都，崇祯自缢处",
   "elev": 44
  },
  {
   "id": "meishan",
   "name": "煤山",
   "lon": 116.39,
   "lat": 39.93,
   "note": "今景山，崇祯自缢",
   "elev": 45
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.75,
   "lat": 40.0,
   "note": "吴三桂引清兵入关处",
   "elev": 11
  },
  {
   "id": "xingshi",
   "name": "西安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "李自成称大顺皇帝",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "chongzhen",
   "name": "崇祯帝",
   "side": "明",
   "influence": 0
  },
  {
   "id": "lizicheng3",
   "name": "李自成",
   "side": "大顺",
   "influence": 0
  },
  {
   "id": "wu3gui",
   "name": "吴三桂",
   "side": "明降将",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_mf_1627",
   "subject": "event:mf_1627",
   "predicate": "事件",
   "value_text": "崇祯即位，朝政败坏、边饷告急，陕北已现民变苗头。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1627,
    "end": 1627,
    "era_text": "天启七—崇祯元"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_mf_1644_3",
   "subject": "event:mf_1644_3",
   "predicate": "事件",
   "value_text": "大顺军破京师，崇祯自缢煤山，明祚亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1644,
    "end": 1644,
    "era_text": "崇祯十七年三月"
   },
   "place": "meishan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_mf_1644_q",
   "subject": "event:mf_1644_q",
   "predicate": "事件",
   "value_text": "吴三桂降清、引兵入关，败大顺于一片石，清迁都北京。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1644,
    "end": 1644,
    "era_text": "崇祯十七年四月"
   },
   "place": "shanhaiguan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_mf_1627",
   "subject": "event:mf_1627",
   "year": 1627,
   "era": "天启七—崇祯元",
   "title": "崇祯即位·危局",
   "kind": "危局",
   "text": "崇祯即位，朝政败坏、边饷告急，陕北已现民变苗头。",
   "place": "beijing"
  },
  {
   "id": "ev_mf_1644_3",
   "subject": "event:mf_1644_3",
   "year": 1644,
   "era": "崇祯十七年三月",
   "title": "李自成破北京",
   "kind": "亡国",
   "text": "大顺军破京师，崇祯自缢煤山，明祚亡。",
   "place": "meishan"
  },
  {
   "id": "ev_mf_1644_q",
   "subject": "event:mf_1644_q",
   "year": 1644,
   "era": "崇祯十七年四月",
   "title": "清军入关",
   "kind": "变局",
   "text": "吴三桂降清、引兵入关，败大顺于一片石，清迁都北京。",
   "place": "shanhaiguan"
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
