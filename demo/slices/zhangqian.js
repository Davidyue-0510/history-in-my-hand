// 本文件由 tools/build.py 自动生成（切片 zhangqian），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhangqian"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhangqian"] = {
 "meta": {
  "kind": "frontier",
  "region": "exchange",
  "title": "张骞通西域",
  "dossier_label": "张骞通西域",
  "subtitle": "前138—前126 · 西汉",
  "primary_place": "changan",
  "dossier_event": "event:zq_138",
  "terrain_grid": "china_coarse",
  "lead": "汉武帝欲联大月氏夹击匈奴，前138 张骞应募西使，途中两度被拘、历十三年归汉，具言西域诸国。其后丝路畅通，物产文明东西交辉，西域自此入中华视野。",
  "parties_note": "凿空据《史记·大宛列传》《汉书·张骞传》综合，行程细节多采传闻。",
  "subject_names": {
   "person:zhangqian2": "张骞",
   "person:hanwu3": "汉武帝"
  },
  "layer_title": "丝绸之路叠加",
  "timeline_title": "张骞凿空时间轴",
  "page": "county.html?scene=zhangqian",
  "key": "zhangqian",
  "scene_id": "zhangqian",
  "vocab_pack": "inline:zhangqian"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "张骞通西域·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "凿空据《史记·大宛列传》《汉书·张骞传》综合，行程细节多采传闻。"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  },
  {
   "id": "loulan",
   "name": "楼兰",
   "lon": 89.8,
   "lat": 40.5,
   "note": "西域门户",
   "elev": 799
  }
 ],
 "persons": [
  {
   "id": "zhangqian2",
   "name": "张骞",
   "side": "西汉",
   "influence": 0
  },
  {
   "id": "hanwu3",
   "name": "汉武帝",
   "side": "汉",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zq_138",
   "subject": "event:zq_138",
   "predicate": "事件",
   "value_text": "张骞奉使大月氏，道经匈奴被留，伺机西遁。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -138,
    "end": -138,
    "era_text": "建元三"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zq_126",
   "subject": "event:zq_126",
   "predicate": "事件",
   "value_text": "骞归汉，具奏西域地形物产，丝路渐通。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -126,
    "end": -126,
    "era_text": "元朔三"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zq_138",
   "subject": "event:zq_138",
   "year": -138,
   "era": "建元三",
   "title": "张骞西使",
   "kind": "出使",
   "text": "张骞奉使大月氏，道经匈奴被留，伺机西遁。",
   "place": "changan"
  },
  {
   "id": "ev_zq_126",
   "subject": "event:zq_126",
   "year": -126,
   "era": "元朔三",
   "title": "归汉言西域",
   "kind": "沟通",
   "text": "骞归汉，具奏西域地形物产，丝路渐通。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_zq",
   "name": "长安→西域",
   "side": "b",
   "nodes": [
    {
     "place": "changan",
     "at": "-138",
     "label": "长安启程"
    },
    {
     "place": "loulan",
     "at": "-129",
     "label": "抵西域"
    }
   ],
   "outcome": {
    "at": "-138",
    "type": "none",
    "text": "凿空西域"
   }
  }
 ],
 "timeline": [
  {
   "at": "-138",
   "era": "建元三",
   "label": "张骞西使",
   "key": true
  },
  {
   "at": "-126",
   "era": "元朔三",
   "label": "归汉",
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
     "label": "丝绸之路",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
