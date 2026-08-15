// 本文件由 tools/build.py 自动生成（切片 shangyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shangyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shangyang"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "商鞅变法",
  "dossier_label": "商鞅变法",
  "subtitle": "前356—前338 · 秦孝公时",
  "primary_place": "xianyang",
  "dossier_event": "event:sy_356",
  "terrain_grid": "china_coarse",
  "lead": "商鞅徙木立信，废井田开阡陌、奖励军功、推行县制与连坐，秦国力骤强，为统一奠基；孝公死，商鞅车裂。",
  "parties_note": "变法内容据《史记·商君列传》《韩非子》综合，部分细节（如刑公子虔）有史家考辨。",
  "subject_names": {
   "person:shangyang": "商鞅",
   "person:xiaogong": "秦孝公"
  },
  "page": "county.html?scene=shangyang",
  "key": "shangyang",
  "scene_id": "shangyang",
  "vocab_pack": "inline:shangyang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "商鞅变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "变法内容据《史记·商君列传》《韩非子》综合，部分细节（如刑公子虔）有史家考辨。"
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都，变法推行中心",
   "elev": 434
  },
  {
   "id": "yueyang",
   "name": "栎阳",
   "lon": 109.2,
   "lat": 34.5,
   "note": "秦旧都，变法初行处",
   "elev": 398
  }
 ],
 "persons": [
  {
   "id": "shangyang",
   "name": "商鞅",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "xiaogong",
   "name": "秦孝公",
   "side": "秦",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sy_356",
   "subject": "event:sy_356",
   "predicate": "事件",
   "value_text": "商鞅为左庶长，颁垦草、奖军功之法，徙木立信，秦民知令。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -356,
    "end": -356,
    "era_text": "秦孝公六年"
   },
   "place": "yueyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_350",
   "subject": "event:sy_350",
   "predicate": "事件",
   "value_text": "迁都咸阳，废井田、开阡陌，行县制、统一度量，禁父子同室。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -350,
    "end": -350,
    "era_text": "十二年"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_338",
   "subject": "event:sy_338",
   "predicate": "事件",
   "value_text": "秦孝公死，惠文王立，宗室怨鞅，车裂以徇。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -338,
    "end": -338,
    "era_text": "二十四年"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_sy_356",
   "subject": "event:sy_356",
   "year": -356,
   "era": "秦孝公六年",
   "title": "商鞅变法始",
   "kind": "变法",
   "text": "商鞅为左庶长，颁垦草、奖军功之法，徙木立信，秦民知令。",
   "place": "yueyang"
  },
  {
   "id": "ev_sy_350",
   "subject": "event:sy_350",
   "year": -350,
   "era": "十二年",
   "title": "徙都咸阳·再变法",
   "kind": "变法",
   "text": "迁都咸阳，废井田、开阡陌，行县制、统一度量，禁父子同室。",
   "place": "xianyang"
  },
  {
   "id": "ev_sy_338",
   "subject": "event:sy_338",
   "year": -338,
   "era": "二十四年",
   "title": "孝公崩·商鞅车裂",
   "kind": "结局",
   "text": "秦孝公死，惠文王立，宗室怨鞅，车裂以徇。",
   "place": "xianyang"
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
