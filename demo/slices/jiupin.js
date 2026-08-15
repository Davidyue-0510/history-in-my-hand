// 本文件由 tools/build.py 自动生成（切片 jiupin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiupin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiupin"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "九品中正制",
  "dossier_label": "九品中正制",
  "subtitle": "220 · 曹魏",
  "primary_place": "yecheng",
  "dossier_event": "event:jp_220",
  "terrain_grid": "china_coarse",
  "lead": "延康元年（220）曹魏吏部尚书陈群立九品中正：州郡设中正，品第人物为上上至下下九等，据家世、才、德授官。初矫察举之弊，后中正多为世族把持，「上品无寒门」。",
  "parties_note": "九品中正据《通典·选举》与《三国志》注综合，其门阀化乃渐变非一夕。",
  "subject_names": {
   "person:chenqun": "陈群",
   "person:caocao": "曹操"
  },
  "page": "county.html?scene=jiupin",
  "key": "jiupin",
  "scene_id": "jiupin",
  "vocab_pack": "inline:jiupin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "九品中正制·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "九品中正据《通典·选举》与《三国志》注综合，其门阀化乃渐变非一夕。"
  }
 ],
 "places": [
  {
   "id": "yecheng",
   "name": "邺城",
   "lon": 114.08,
   "lat": 36.07,
   "note": "曹魏都",
   "elev": 334
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
   "id": "chenqun",
   "name": "陈群",
   "side": "魏",
   "influence": 0
  },
  {
   "id": "caocao",
   "name": "曹操",
   "side": "魏",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jp_220",
   "subject": "event:jp_220",
   "predicate": "事件",
   "value_text": "立中正品第人物，据家世才德授官，开魏晋选举之制。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 220,
    "end": 220,
    "era_text": "延康元"
   },
   "place": "yecheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jp_later",
   "subject": "event:jp_later",
   "predicate": "事件",
   "value_text": "中正归世族，寒门难进，「上品无寒门」成局。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 280,
    "end": 280,
    "era_text": "西晋"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_jp_220",
   "subject": "event:jp_220",
   "year": 220,
   "era": "延康元",
   "title": "陈群定九品",
   "kind": "制度",
   "text": "立中正品第人物，据家世才德授官，开魏晋选举之制。",
   "place": "yecheng"
  },
  {
   "id": "ev_jp_later",
   "subject": "event:jp_later",
   "year": 280,
   "era": "西晋",
   "title": "门阀固化",
   "kind": "结局",
   "text": "中正归世族，寒门难进，「上品无寒门」成局。",
   "place": "luoyang"
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
