// 本文件由 tools/build.py 自动生成（切片 zhaofen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhaofen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhaofen"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "昭君出塞",
  "dossier_label": "昭君出塞",
  "subtitle": "前33 · 汉元帝时",
  "primary_place": "hohhot",
  "dossier_event": "event:zf_33",
  "terrain_grid": "china_coarse",
  "lead": "竟宁元年（前33）匈奴呼韩邪单于入朝请婿，宫女王嫱（昭君）请行，嫁匈奴、号宁胡阏氏。汉匈和亲，边塞宁息数十年，汉匈文化互通。",
  "parties_note": "和亲据《汉书·匈奴传》综合，「落雁」等传说色彩浓。",
  "subject_names": {
   "person:wangzhaojun": "王昭君",
   "person:huhanye": "呼韩邪单于"
  },
  "layer_title": "汉匈和亲通道叠加",
  "timeline_title": "昭君出塞时间轴",
  "page": "county.html?scene=zhaofen",
  "key": "zhaofen",
  "scene_id": "zhaofen",
  "vocab_pack": "inline:zhaofen"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "昭君出塞·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "和亲据《汉书·匈奴传》综合，「落雁」等传说色彩浓。"
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
   "id": "hohhot",
   "name": "单于庭",
   "lon": 111.75,
   "lat": 40.84,
   "note": "昭君出塞所至，今呼和浩特",
   "elev": 1144
  }
 ],
 "persons": [
  {
   "id": "wangzhaojun",
   "name": "王昭君",
   "side": "汉",
   "influence": 0
  },
  {
   "id": "huhanye",
   "name": "呼韩邪单于",
   "side": "匈奴",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zf_33",
   "subject": "event:zf_33",
   "predicate": "事件",
   "value_text": "呼韩邪请婿，王昭君自请出塞，嫁匈奴。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -33,
    "end": -33,
    "era_text": "竟宁元"
   },
   "place": "changan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zf_peace",
   "subject": "event:zf_peace",
   "predicate": "事件",
   "value_text": "汉匈和亲，边烽少警，农牧互市渐通。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -33,
    "end": -33,
    "era_text": "同年"
   },
   "place": "hohhot",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_zf_33",
   "subject": "event:zf_33",
   "year": -33,
   "era": "竟宁元",
   "title": "昭君请行",
   "kind": "和亲",
   "text": "呼韩邪请婿，王昭君自请出塞，嫁匈奴。",
   "place": "changan"
  },
  {
   "id": "ev_zf_peace",
   "subject": "event:zf_peace",
   "year": -33,
   "era": "同年",
   "title": "边塞宁息",
   "kind": "融合",
   "text": "汉匈和亲，边烽少警，农牧互市渐通。",
   "place": "hohhot"
  }
 ],
 "routes": [
  {
   "id": "rt_zf",
   "name": "长安→塞北",
   "side": "b",
   "nodes": [
    {
     "place": "changan",
     "at": "-33",
     "label": "长安启程"
    },
    {
     "place": "hohhot",
     "at": "-33",
     "label": "至单于庭"
    }
   ],
   "outcome": {
    "at": "-33",
    "type": "none",
    "text": "汉匈和亲路"
   }
  }
 ],
 "timeline": [
  {
   "at": "-33",
   "era": "竟宁元",
   "label": "昭君出塞",
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
