// 本文件由 tools/build.py 自动生成（切片 zijincheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zijincheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zijincheng"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "紫禁城营建",
  "dossier_label": "紫禁城营建",
  "subtitle": "1406—1420 · 明永乐",
  "primary_place": "beijing",
  "dossier_event": "event:zj_1406",
  "terrain_grid": "china_coarse",
  "lead": "永乐四年（1406）诏建北京宫殿，采木于川湖、陶甓于临清，役军民数十万，永乐十八年（1420）成。紫禁城据此奠定明清五百余年政治中枢。",
  "parties_note": "营建据《明史·成祖纪》与《工部厂库须知》综合，役夫数字为折中估计。",
  "subject_names": {
   "person:zhu_di": "明成祖",
   "person:kuai_xiang": "蒯祥"
  },
  "page": "county.html?scene=zijincheng",
  "key": "zijincheng",
  "scene_id": "zijincheng",
  "vocab_pack": "inline:zijincheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "紫禁城营建·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "营建据《明史·成祖纪》与《工部厂库须知》综合，役夫数字为折中估计。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "zhu_di",
   "name": "明成祖",
   "side": "明",
   "influence": 0
  },
  {
   "id": "kuai_xiang",
   "name": "蒯祥",
   "side": "明匠师",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zj_1406",
   "subject": "event:zj_1406",
   "predicate": "事件",
   "value_text": "营建北京宫殿，取材天下、征役军民数十万。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1406,
    "end": 1406,
    "era_text": "永乐四"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zj_1420",
   "subject": "event:zj_1420",
   "predicate": "事件",
   "value_text": "宫殿告成，次年迁都北京，定为京师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1420,
    "end": 1420,
    "era_text": "永乐十八"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zj_1406",
   "subject": "event:zj_1406",
   "year": 1406,
   "era": "永乐四",
   "title": "诏建北京宫",
   "kind": "工程",
   "text": "营建北京宫殿，取材天下、征役军民数十万。",
   "place": "beijing"
  },
  {
   "id": "ev_zj_1420",
   "subject": "event:zj_1420",
   "year": 1420,
   "era": "永乐十八",
   "title": "紫禁城成",
   "kind": "落成",
   "text": "宫殿告成，次年迁都北京，定为京师。",
   "place": "beijing"
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
