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
   "influence": 1
  },
  {
   "id": "songzanganbu",
   "name": "松赞干布",
   "side": "吐蕃",
   "influence": 1
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
  },
  {
   "id": "WC001",
   "subject": "event:wc_641",
   "predicate": "和亲",
   "value_text": "唐太宗以宗女文成公主妻吐蕃赞普松赞干布",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "changan_wc",
   "source": "synthesis",
   "quote": "唐太宗以宗女文成公主妻吐蕃赞普松赞干布",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC002",
   "subject": "event:wc_641",
   "predicate": "携带物品",
   "value_text": "携释迦像、百工典籍入藏",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "changan_wc",
   "source": "synthesis",
   "quote": "携释迦像、百工典籍入藏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC003",
   "subject": "event:wc_641",
   "predicate": "结果",
   "value_text": "汉藏通好，佛法渐兴于吐蕃",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "lhasa",
   "source": "synthesis",
   "quote": "汉藏通好，佛法渐兴于吐蕃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC004",
   "subject": "person:wencheng",
   "predicate": "身份",
   "value_text": "唐太宗宗女",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "changan_wc",
   "source": "synthesis",
   "quote": "宗女文成公主",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC005",
   "subject": "person:songzanganbu",
   "predicate": "身份",
   "value_text": "吐蕃赞普",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "lhasa",
   "source": "synthesis",
   "quote": "吐蕃赞普松赞干布",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC006",
   "subject": "event:wc_temple",
   "predicate": "建立背景",
   "value_text": "佛法渐兴于吐蕃",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "lhasa",
   "source": "synthesis",
   "quote": "佛法渐兴于吐蕃",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说建寺，但佛法渐兴为后续建寺之背景",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC007",
   "subject": "event:wc_641",
   "predicate": "影响",
   "value_text": "汉藏通好",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "changan_wc",
   "source": "synthesis",
   "quote": "汉藏通好",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WC008",
   "subject": "event:wc_641",
   "predicate": "路线",
   "value_text": "入藏",
   "time": {
    "era_text": "贞观十五年",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": "lhasa",
   "source": "synthesis",
   "quote": "入藏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "具体路线未详，仅知目的地为吐蕃",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WENCHENGG01",
   "subject": "event:wc_641",
   "predicate": "史料缺环",
   "value_text": "此次民族融合的动因、过程与人口规模，各族纪述不一，相关叙述存在缺口。",
   "time": {
    "era_text": "贞观",
    "start": "641-01-01",
    "end": "641-12-31",
    "gregorian_year": 641
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "fusion",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "WENCHENGG01"
 ],
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
