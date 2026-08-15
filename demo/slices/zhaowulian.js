// 本文件由 tools/build.py 自动生成（切片 zhaowulian），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhaowulian"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhaowulian"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "赵武灵王胡服骑射",
  "dossier_label": "赵武灵王胡服骑射",
  "subtitle": "前307 · 战国赵",
  "primary_place": "handan",
  "dossier_event": "event:zw_307",
  "terrain_grid": "china_coarse",
  "lead": "战国赵处北边，屡受胡骑侵扰。武灵王力排众议，令国人衣短装、习骑射，建骑兵、北拓云中雁门，开华夏大规模吸收游牧军事文化之先。",
  "parties_note": "胡服骑射据《史记·赵世家》综合，其「变俗」之议载于对话。",
  "subject_names": {
   "person:zhaowuling": "赵武灵王"
  },
  "page": "county.html?scene=zhaowulian",
  "key": "zhaowulian",
  "scene_id": "zhaowulian",
  "vocab_pack": "inline:zhaowulian"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "赵武灵王胡服骑射·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "胡服骑射据《史记·赵世家》综合，其「变俗」之议载于对话。"
  }
 ],
 "places": [
  {
   "id": "handan",
   "name": "邯郸",
   "lon": 114.49,
   "lat": 36.61,
   "note": "赵都，胡服骑射推行地",
   "elev": 76
  },
  {
   "id": "yecheng",
   "name": "邺城",
   "lon": 114.08,
   "lat": 36.07,
   "note": "曹魏都",
   "elev": 334
  }
 ],
 "persons": [
  {
   "id": "zhaowuling",
   "name": "赵武灵王",
   "side": "赵",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zw_307",
   "subject": "event:zw_307",
   "predicate": "事件",
   "value_text": "武灵王下令易胡服、习骑射，臣下多谏，王力持之。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -307,
    "end": -307,
    "era_text": "武灵王十九"
   },
   "place": "handan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zw_war",
   "subject": "event:zw_war",
   "predicate": "事件",
   "value_text": "赵筑长城、置云中雁门，胡汉武力交融。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -306,
    "end": -306,
    "era_text": "其后"
   },
   "place": "handan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zw_307",
   "subject": "event:zw_307",
   "year": -307,
   "era": "武灵王十九",
   "title": "胡服令下",
   "kind": "改革",
   "text": "武灵王下令易胡服、习骑射，臣下多谏，王力持之。",
   "place": "handan"
  },
  {
   "id": "ev_zw_war",
   "subject": "event:zw_war",
   "year": -306,
   "era": "其后",
   "title": "北拓云雁",
   "kind": "融合",
   "text": "赵筑长城、置云中雁门，胡汉武力交融。",
   "place": "handan"
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
