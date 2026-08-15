// 本文件由 tools/build.py 自动生成（切片 xuanzang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xuanzang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xuanzang"] = {
 "meta": {
  "kind": "frontier",
  "region": "exchange",
  "title": "玄奘西行",
  "dossier_label": "玄奘西行",
  "subtitle": "629—645 · 唐",
  "primary_place": "changan",
  "dossier_event": "event:xz_629",
  "terrain_grid": "china_coarse",
  "lead": "贞观三年（629）玄奘为究瑜伽唯识，冒禁西行，越葱岭、历西域、抵天竺那烂陀，从戒贤学。645 携经论归长安，译经千卷，著《大唐西域记》，为中外文化交流巨擘。",
  "parties_note": "西行据《大慈恩寺三藏法师传》《大唐西域记》综合。",
  "subject_names": {
   "person:xuanzang2": "玄奘",
   "person:taizong2": "唐太宗"
  },
  "layer_title": "玄奘西行路线叠加",
  "timeline_title": "玄奘西行时间轴",
  "page": "county.html?scene=xuanzang",
  "key": "xuanzang",
  "scene_id": "xuanzang",
  "vocab_pack": "inline:xuanzang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "玄奘西行·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "西行据《大慈恩寺三藏法师传》《大唐西域记》综合。"
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
   "id": "nalanda",
   "name": "那烂陀",
   "lon": 85.0,
   "lat": 25.0,
   "note": "玄奘求学地",
   "elev": 80
  }
 ],
 "persons": [
  {
   "id": "xuanzang2",
   "name": "玄奘",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "taizong2",
   "name": "唐太宗",
   "side": "唐",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xz_629",
   "subject": "event:xz_629",
   "predicate": "事件",
   "value_text": "玄奘自长安出发，孤身涉险、西趋天竺。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 629,
    "end": 629,
    "era_text": "贞观三"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xz_645",
   "subject": "event:xz_645",
   "predicate": "事件",
   "value_text": "携梵本归长安，译经讲学，著《西域记》。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 645,
    "end": 645,
    "era_text": "贞观十九"
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
   "id": "ev_xz_629",
   "subject": "event:xz_629",
   "year": 629,
   "era": "贞观三",
   "title": "冒禁西行",
   "kind": "求法",
   "text": "玄奘自长安出发，孤身涉险、西趋天竺。",
   "place": "changan"
  },
  {
   "id": "ev_xz_645",
   "subject": "event:xz_645",
   "year": 645,
   "era": "贞观十九",
   "title": "归国译经",
   "kind": "沟通",
   "text": "携梵本归长安，译经讲学，著《西域记》。",
   "place": "changan"
  }
 ],
 "routes": [
  {
   "id": "rt_xz",
   "name": "长安→天竺",
   "side": "b",
   "nodes": [
    {
     "place": "changan",
     "at": "629",
     "label": "启程"
    },
    {
     "place": "nalanda",
     "at": "631",
     "label": "抵那烂陀"
    }
   ],
   "outcome": {
    "at": "629",
    "type": "none",
    "text": "西行求法"
   }
  }
 ],
 "timeline": [
  {
   "at": "629",
   "era": "贞观三",
   "label": "西行",
   "key": true
  },
  {
   "at": "645",
   "era": "贞观十九",
   "label": "归国",
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
     "label": "玄奘西行",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
