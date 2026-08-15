// 本文件由 tools/build.py 自动生成（切片 taiping），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["taiping"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["taiping"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "太平天国",
  "dossier_label": "太平天国",
  "subtitle": "1851—1864 · 晚清",
  "primary_place": "guiping",
  "dossier_event": "event:tp_1851",
  "terrain_grid": "china_coarse",
  "lead": "鸦片战争后民生凋敝，1851 洪秀全于广西金田起义，建号太平天国。1853 克南京、定都天京，与清廷分庭抗礼，1864 天京陷、运动败。",
  "parties_note": "太平天国据《太平天国史》综合；宗教色彩与政治主张兼具，正反评价悬殊。",
  "subject_names": {
   "person:hongxiuquan": "洪秀全",
   "person:xiangrong": "向荣"
  },
  "page": "county.html?scene=taiping",
  "key": "taiping",
  "scene_id": "taiping",
  "vocab_pack": "inline:taiping"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "太平天国·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "太平天国据《太平天国史》综合；宗教色彩与政治主张兼具，正反评价悬殊。"
  }
 ],
 "places": [
  {
   "id": "guiping",
   "name": "金田",
   "lon": 110.08,
   "lat": 23.38,
   "note": "太平天国金田起义",
   "elev": 53
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  }
 ],
 "persons": [
  {
   "id": "hongxiuquan",
   "name": "洪秀全",
   "side": "太平天国",
   "influence": 0
  },
  {
   "id": "xiangrong",
   "name": "向荣",
   "side": "清",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_tp_1851",
   "subject": "event:tp_1851",
   "predicate": "战事",
   "value_text": "洪秀全、杨秀清等金田团营，建号太平天国。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1851,
    "end": 1851,
    "era_text": "咸丰元"
   },
   "place": "guiping",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tp_1853",
   "subject": "event:tp_1853",
   "predicate": "战事",
   "value_text": "太平军破南京，改名天京，与清对峙。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1853,
    "end": 1853,
    "era_text": "咸丰三"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_tp_1864",
   "subject": "event:tp_1864",
   "predicate": "战事",
   "value_text": "湘军克天京，太平天国败亡。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1864,
    "end": 1864,
    "era_text": "同治三"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_tp_1851",
   "subject": "event:tp_1851",
   "year": 1851,
   "era": "咸丰元",
   "title": "金田起义",
   "kind": "战事",
   "text": "洪秀全、杨秀清等金田团营，建号太平天国。",
   "place": "guiping"
  },
  {
   "id": "ev_tp_1853",
   "subject": "event:tp_1853",
   "year": 1853,
   "era": "咸丰三",
   "title": "定都天京",
   "kind": "战事",
   "text": "太平军破南京，改名天京，与清对峙。",
   "place": "nanjing"
  },
  {
   "id": "ev_tp_1864",
   "subject": "event:tp_1864",
   "year": 1864,
   "era": "同治三",
   "title": "天京陷落",
   "kind": "结局",
   "text": "湘军克天京，太平天国败亡。",
   "place": "nanjing"
  }
 ],
 "routes": [
  {
   "id": "rt_tp",
   "name": "太平军东进",
   "side": "a",
   "nodes": [
    {
     "place": "guiping",
     "at": "1851",
     "label": "金田起"
    },
    {
     "place": "nanjing",
     "at": "1853",
     "label": "定天京"
    }
   ],
   "outcome": {
    "at": "1853",
    "type": "victory",
    "text": "割据江南"
   }
  }
 ],
 "timeline": [
  {
   "at": "1851",
   "era": "咸丰元",
   "label": "金田起义",
   "key": true
  },
  {
   "at": "1853",
   "era": "咸丰三",
   "label": "定都天京",
   "key": true
  },
  {
   "at": "1864",
   "era": "同治三",
   "label": "天京陷",
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
   "太平军",
   "清军",
   "综合史料"
  ],
  "party_bucket": {
   "太平军": "太平军",
   "清军": "清军",
   "综合史料": "综合史料"
  },
  "party_colors": {
   "a": "#c0392b",
   "b": "#2b6cb0",
   "综合史料": "#7f8c8d"
  },
  "legend": {
   "battle": [
    {
     "key": "a",
     "label": "太平军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "清军胜",
     "color": "#2b6cb0"
    },
    {
     "key": "none",
     "label": "未分胜",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "a",
     "label": "太平军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "清军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
