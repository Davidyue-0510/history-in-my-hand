// 本文件由 tools/build.py 自动生成（切片 lingqu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lingqu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lingqu"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "灵渠",
  "dossier_label": "灵渠",
  "subtitle": "前214 · 秦",
  "primary_place": "xingan",
  "dossier_event": "event:lq_214",
  "terrain_grid": "china_coarse",
  "lead": "秦始皇平百越，命史禄凿灵渠于今广西兴安，分湘水入漓江，舟楫得通岭南，军资转输无阻，为古代跨流域运河杰作。",
  "parties_note": "开凿据《史记·平准书》与后世方志综合，具体工期有考订差异。",
  "subject_names": {
   "person:shilu": "史禄"
  },
  "layer_title": "灵渠水道叠加",
  "timeline_title": "灵渠开凿时间轴",
  "page": "county.html?scene=lingqu",
  "key": "lingqu",
  "scene_id": "lingqu",
  "vocab_pack": "inline:lingqu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "灵渠·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "开凿据《史记·平准书》与后世方志综合，具体工期有考订差异。"
  }
 ],
 "places": [
  {
   "id": "xingan",
   "name": "兴安",
   "lon": 110.68,
   "lat": 25.63,
   "note": "灵渠所在，今广西兴安",
   "elev": 221
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
   "id": "shilu",
   "name": "史禄",
   "side": "秦监郡御史",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_lq_214",
   "subject": "event:lq_214",
   "predicate": "事件",
   "value_text": "史禄凿渠分湘入漓，沟通长江、珠江水系，转运岭南。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -214,
    "end": -214,
    "era_text": "始皇三十三"
   },
   "place": "xingan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_lq_use",
   "subject": "event:lq_use",
   "predicate": "事件",
   "value_text": "灵渠既通，秦军南平百越，岭南初入版图。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -214,
    "end": -214,
    "era_text": "同年"
   },
   "place": "xingan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_lq_214",
   "subject": "event:lq_214",
   "year": -214,
   "era": "始皇三十三",
   "title": "凿灵渠",
   "kind": "工程",
   "text": "史禄凿渠分湘入漓，沟通长江、珠江水系，转运岭南。",
   "place": "xingan"
  },
  {
   "id": "ev_lq_use",
   "subject": "event:lq_use",
   "year": -214,
   "era": "同年",
   "title": "通粮南征",
   "kind": "功用",
   "text": "灵渠既通，秦军南平百越，岭南初入版图。",
   "place": "xingan"
  }
 ],
 "routes": [
  {
   "id": "rt_lq",
   "name": "灵渠（湘→漓）",
   "side": "b",
   "nodes": [
    {
     "place": "xingan",
     "at": "-214",
     "label": "分水铧嘴"
    },
    {
     "place": "xingan",
     "at": "-214",
     "label": "入漓江南下"
    }
   ],
   "outcome": {
    "at": "-214",
    "type": "none",
    "text": "湘漓通津"
   }
  }
 ],
 "timeline": [
  {
   "at": "-214",
   "era": "始皇三十三",
   "label": "灵渠凿成",
   "key": true
  }
 ],
 "columns": [],
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
  "legend": {
   "route": [
    {
     "key": "b",
     "label": "河道/路线",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
