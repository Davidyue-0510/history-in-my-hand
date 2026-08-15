// 本文件由 tools/build.py 自动生成（切片 wanganshi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wanganshi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wanganshi"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "王安石变法",
  "dossier_label": "王安石变法",
  "subtitle": "1069—1085 · 宋神宗时",
  "primary_place": "kaifeng",
  "dossier_event": "event:wa_1069",
  "terrain_grid": "china_coarse",
  "lead": "王安石任参知政事，行青苗、募役、市易、保甲诸法，意在富国强兵；新旧党争由此起，1085 神宗崩、哲宗立，新法渐废。",
  "parties_note": "新法利弊争议千年，司马光等旧党力诋；此处综合《宋史》与近代研究，不偏一方。",
  "subject_names": {
   "person:wanganshi": "王安石",
   "person:simaguang": "司马光"
  },
  "page": "county.html?scene=wanganshi",
  "key": "wanganshi",
  "scene_id": "wanganshi",
  "vocab_pack": "inline:wanganshi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "王安石变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "新法利弊争议千年，司马光等旧党力诋；此处综合《宋史》与近代研究，不偏一方。"
  }
 ],
 "places": [
  {
   "id": "kaifeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京，变法中枢",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "wanganshi",
   "name": "王安石",
   "side": "新党",
   "influence": 0
  },
  {
   "id": "simaguang",
   "name": "司马光",
   "side": "旧党",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wa_1069",
   "subject": "event:wa_1069",
   "predicate": "事件",
   "value_text": "王安石任参知政事，设制置三司条例司，颁青苗法，变法启动。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1069,
    "end": 1069,
    "era_text": "熙宁二年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wa_1070",
   "subject": "event:wa_1070",
   "predicate": "事件",
   "value_text": "王安石拜相，行募役、市易、保甲、农田水利诸法，朝廷分裂新旧党。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1070,
    "end": 1070,
    "era_text": "三年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wa_1085",
   "subject": "event:wa_1085",
   "predicate": "事件",
   "value_text": "神宗崩、哲宗立，高太后用司马光，新法次第罢废（「元祐更化」）。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1085,
    "end": 1085,
    "era_text": "元丰八年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_wa_1069",
   "subject": "event:wa_1069",
   "year": 1069,
   "era": "熙宁二年",
   "title": "王安石执政·变法始",
   "kind": "变法",
   "text": "王安石任参知政事，设制置三司条例司，颁青苗法，变法启动。",
   "place": "kaifeng"
  },
  {
   "id": "ev_wa_1070",
   "subject": "event:wa_1070",
   "year": 1070,
   "era": "三年",
   "title": "任宰相·推诸法",
   "kind": "变法",
   "text": "王安石拜相，行募役、市易、保甲、农田水利诸法，朝廷分裂新旧党。",
   "place": "kaifeng"
  },
  {
   "id": "ev_wa_1085",
   "subject": "event:wa_1085",
   "year": 1085,
   "era": "元丰八年",
   "title": "神宗崩·新法废",
   "kind": "结局",
   "text": "神宗崩、哲宗立，高太后用司马光，新法次第罢废（「元祐更化」）。",
   "place": "kaifeng"
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
