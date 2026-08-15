// 本文件由 tools/build.py 自动生成（切片 wencheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wencheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wencheng"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "文成公主入藏",
  "dossier_label": "文成公主入藏",
  "subtitle": "641 · 唐蕃和亲",
  "primary_place": "lhasa",
  "dossier_event": "event:wc_641",
  "terrain_grid": "china_coarse",
  "lead": "贞观十五年文成公主赴吐蕃，与松赞干布和亲，携释迦像、经卷、工技、种子入藏，奠定唐蕃「舅甥」之好，汉藏文化交流开启新篇。",
  "parties_note": "和亲事迹据《旧唐书·吐蕃传》与藏文史料综合，细节（如带物）有传说成分。",
  "subject_names": {
   "person:wencheng": "文成公主",
   "person:songzanganbu": "松赞干布"
  },
  "layer_title": "唐蕃通道叠加",
  "timeline_title": "唐蕃和亲时间轴",
  "page": "county.html?scene=wencheng",
  "key": "wencheng",
  "scene_id": "wencheng",
  "vocab_pack": "inline:wencheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "文成公主入藏·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "和亲事迹据《旧唐书·吐蕃传》与藏文史料综合，细节（如带物）有传说成分。"
  }
 ],
 "places": [
  {
   "id": "changan_wc",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐都，公主启程",
   "elev": 391
  },
  {
   "id": "lhasa",
   "name": "逻些",
   "lon": 91.11,
   "lat": 29.65,
   "note": "吐蕃都（今拉萨）",
   "elev": 4051
  },
  {
   "id": "songzhou",
   "name": "松州",
   "lon": 103.6,
   "lat": 32.9,
   "note": "唐蕃边界（今松潘）",
   "elev": 3633
  }
 ],
 "persons": [
  {
   "id": "wencheng",
   "name": "文成公主",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "songzanganbu",
   "name": "松赞干布",
   "side": "吐蕃",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wc_641",
   "subject": "event:wc_641",
   "predicate": "事件",
   "value_text": "文成公主赴吐蕃，与松赞干布和亲；携佛经、工技、谷物、工匠，唐蕃盟好。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 641,
    "end": 641,
    "era_text": "贞观十五年"
   },
   "place": "lhasa",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wc_temple",
   "subject": "event:wc_temple",
   "predicate": "事件",
   "value_text": "松赞干布建大昭寺供奉公主所带释迦像，汉地工技、历算、医药入藏。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 641,
    "end": 641,
    "era_text": "同年"
   },
   "place": "lhasa",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_wc_641",
   "subject": "event:wc_641",
   "year": 641,
   "era": "贞观十五年",
   "title": "文成入藏",
   "kind": "和亲",
   "text": "文成公主赴吐蕃，与松赞干布和亲；携佛经、工技、谷物、工匠，唐蕃盟好。",
   "place": "lhasa"
  },
  {
   "id": "ev_wc_temple",
   "subject": "event:wc_temple",
   "year": 641,
   "era": "同年",
   "title": "大昭寺·汉藏交融",
   "kind": "融合",
   "text": "松赞干布建大昭寺供奉公主所带释迦像，汉地工技、历算、医药入藏。",
   "place": "lhasa"
  }
 ],
 "routes": [
  {
   "id": "rt_wc_road",
   "name": "唐蕃道",
   "side": "b",
   "nodes": [
    {
     "place": "changan_wc",
     "at": "641",
     "label": "长安启程"
    },
    {
     "place": "songzhou",
     "at": "641",
     "label": "松州界"
    },
    {
     "place": "lhasa",
     "at": "641",
     "label": "逻些"
    }
   ],
   "outcome": {
    "at": "641",
    "type": "none",
    "text": "唐蕃和亲路"
   }
  }
 ],
 "timeline": [
  {
   "at": "641",
   "era": "贞观十五",
   "label": "文成入藏",
   "key": true
  },
  {
   "at": "641",
   "era": "同年",
   "label": "大昭寺·交融",
   "key": false
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
