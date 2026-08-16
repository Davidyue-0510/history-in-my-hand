// 本文件由 tools/build.py 自动生成（切片 jianzhen），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jianzhen"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jianzhen"] = {
 "meta": {
  "kind": "frontier",
  "region": "exchange",
  "title": "鉴真东渡",
  "dossier_label": "鉴真东渡",
  "subtitle": "743—753 · 唐",
  "primary_place": "yangzhou",
  "dossier_event": "event:jz_743",
  "terrain_grid": "china_coarse",
  "lead": "扬州高僧鉴真应日僧之邀，六次东渡、双目失明而不辍，753 终抵平城京，于唐招提寺传律授戒，并携建筑、医药、工艺之术，盛唐文明遂植日本。",
  "parties_note": "东渡据《唐大和上东征传》综合，五次失败之艰备载。",
  "subject_names": {
   "person:jianzhen2": "鉴真",
   "person:rongrui": "荣叡"
  },
  "layer_title": "鉴真东渡路线叠加",
  "timeline_title": "鉴真东渡时间轴",
  "page": "county.html?scene=jianzhen",
  "key": "jianzhen",
  "scene_id": "jianzhen",
  "vocab_pack": "inline:jianzhen"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "鉴真东渡·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "东渡据《唐大和上东征传》综合，五次失败之艰备载。"
  }
 ],
 "places": [
  {
   "id": "yangzhou",
   "name": "扬州",
   "lon": 119.41,
   "lat": 32.39,
   "note": "鉴真东渡启程地",
   "elev": 10
  },
  {
   "id": "heijokyo",
   "name": "平城京",
   "lon": 135.8,
   "lat": 34.7,
   "note": "鉴真东渡所至，今奈良",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "jianzhen2",
   "name": "鉴真",
   "side": "唐",
   "influence": 0
  },
  {
   "id": "rongrui",
   "name": "荣叡",
   "side": "日僧",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jz_743",
   "subject": "event:jz_743",
   "predicate": "事件",
   "value_text": "鉴真受日僧荣叡、普照邀，首谋泛海赴日。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 743,
    "end": 743,
    "era_text": "天宝二"
   },
   "place": "yangzhou",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jz_753",
   "subject": "event:jz_753",
   "predicate": "事件",
   "value_text": "第六渡终抵日本，传戒建寺，唐风东被。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 753,
    "end": 753,
    "era_text": "天宝十二"
   },
   "place": "heijokyo",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ001",
   "subject": "event:jz_743",
   "predicate": "发起",
   "value_text": "日僧荣叡、普照请鉴真东渡",
   "time": {
    "era_text": "天宝元年",
    "start": "742-01-01",
    "end": "742-12-31",
    "gregorian_year": 742
   },
   "place": "",
   "source": "synthesis",
   "quote": "日僧荣叡、普照请鉴真东渡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "place 未在 whitelist，留空待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ002",
   "subject": "event:jz_753",
   "predicate": "抵达",
   "value_text": "鉴真抵日本",
   "time": {
    "era_text": "天宝十二载",
    "start": "753-01-01",
    "end": "753-12-31",
    "gregorian_year": 753
   },
   "place": "",
   "source": "synthesis",
   "quote": "鉴真抵日本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "place 未在 whitelist，留空待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ003",
   "subject": "event:jz_753",
   "predicate": "建寺",
   "value_text": "于奈良建唐招提寺",
   "time": {
    "era_text": "天宝十二载",
    "start": "753-01-01",
    "end": "753-12-31",
    "gregorian_year": 753
   },
   "place": "heijokyo",
   "source": "synthesis",
   "quote": "于奈良建唐招提寺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ004",
   "subject": "event:jz_753",
   "predicate": "传播",
   "value_text": "传律宗、医方",
   "time": {
    "era_text": "天宝十二载",
    "start": "753-01-01",
    "end": "753-12-31",
    "gregorian_year": 753
   },
   "place": "heijokyo",
   "source": "synthesis",
   "quote": "传律宗、医方",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ005",
   "subject": "event:jz_753",
   "predicate": "影响",
   "value_text": "文化东被",
   "time": {
    "era_text": "天宝十二载",
    "start": "753-01-01",
    "end": "753-12-31",
    "gregorian_year": 753
   },
   "place": "heijokyo",
   "source": "synthesis",
   "quote": "文化东被",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ006",
   "subject": "person:jianzhen2",
   "predicate": "身份",
   "value_text": "鉴真为律宗高僧",
   "time": {
    "era_text": "天宝元年",
    "start": "742-01-01",
    "end": "742-12-31",
    "gregorian_year": 742
   },
   "place": "",
   "source": "synthesis",
   "quote": "鉴真",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文未明说身份，据史实推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ007",
   "subject": "person:rongrui",
   "predicate": "身份",
   "value_text": "荣叡为日僧",
   "time": {
    "era_text": "天宝元年",
    "start": "742-01-01",
    "end": "742-12-31",
    "gregorian_year": 742
   },
   "place": "",
   "source": "synthesis",
   "quote": "日僧荣叡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JZ008",
   "subject": "event:jz_743",
   "predicate": "时间跨度",
   "value_text": "从请愿到抵达历时十二年",
   "time": {
    "era_text": "天宝元年",
    "start": "742-01-01",
    "end": "742-12-31",
    "gregorian_year": 742
   },
   "place": "",
   "source": "synthesis",
   "quote": "天宝元年…天宝十二载",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "由两时间点推算",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JIANZHENG01",
   "subject": "event:jz_753",
   "predicate": "史料缺环",
   "value_text": "此次交通或交往的路线、规模与影响，中外纪述互证不足，相关细节存在缺口。",
   "time": {
    "era_text": "天宝",
    "start": "742-01-01",
    "end": "742-12-31",
    "gregorian_year": 742
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
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
  "JIANZHENG01"
 ],
 "events": [
  {
   "id": "ev_jz_743",
   "subject": "event:jz_743",
   "year": 743,
   "era": "天宝二",
   "title": "首图东渡",
   "kind": "东渡",
   "text": "鉴真受日僧荣叡、普照邀，首谋泛海赴日。",
   "place": "yangzhou"
  },
  {
   "id": "ev_jz_753",
   "subject": "event:jz_753",
   "year": 753,
   "era": "天宝十二",
   "title": "抵平城京",
   "kind": "沟通",
   "text": "第六渡终抵日本，传戒建寺，唐风东被。",
   "place": "heijokyo"
  }
 ],
 "routes": [
  {
   "id": "rt_jz",
   "name": "扬州→平城京",
   "side": "b",
   "nodes": [
    {
     "place": "yangzhou",
     "at": "753",
     "label": "启航"
    },
    {
     "place": "heijokyo",
     "at": "753",
     "label": "抵日"
    }
   ],
   "outcome": {
    "at": "753",
    "type": "none",
    "text": "六渡终成"
   }
  }
 ],
 "timeline": [
  {
   "at": "743",
   "era": "天宝二",
   "label": "首谋东渡",
   "key": true
  },
  {
   "at": "753",
   "era": "天宝十二",
   "label": "抵日传法",
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
     "label": "鉴真东渡",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
