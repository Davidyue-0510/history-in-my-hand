// 本文件由 tools/build.py 自动生成（切片 chanyuan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chanyuan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chanyuan"] = {
 "meta": {
  "kind": "fusion",
  "region": "fusion",
  "title": "澶渊之盟",
  "dossier_label": "澶渊之盟",
  "subtitle": "1005 · 辽宋",
  "primary_place": "puyang",
  "dossier_event": "event:cy_1004",
  "terrain_grid": "china_coarse",
  "lead": "宋真宗景德二年（1005）辽萧太后、圣宗大举南下，宋辽战于澶州。既而议和，约为兄弟之国，宋岁遗辽币帛，沿边互市，遂成百余年无大战之局，民族关系由战转和。",
  "parties_note": "盟约据《宋史·契丹传》综合，岁币之议宋人多有屈辱之感。",
  "subject_names": {
   "person:songzhen": "宋真宗",
   "person:liaosheng": "辽圣宗"
  },
  "page": "county.html?scene=chanyuan",
  "key": "chanyuan",
  "scene_id": "chanyuan",
  "vocab_pack": "inline:chanyuan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "澶渊之盟·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "盟约据《宋史·契丹传》综合，岁币之议宋人多有屈辱之感。"
  }
 ],
 "places": [
  {
   "id": "puyang",
   "name": "澶州",
   "lon": 115.03,
   "lat": 35.7,
   "note": "澶渊之盟，今河南濮阳",
   "elev": 52
  },
  {
   "id": "kaofeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京",
   "elev": 76
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
   "id": "songzhen",
   "name": "宋真宗",
   "side": "宋",
   "influence": 0
  },
  {
   "id": "liaosheng",
   "name": "辽圣宗",
   "side": "辽",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cy_1004",
   "subject": "event:cy_1004",
   "predicate": "战事",
   "value_text": "辽圣宗、萧太后亲征，围澶州，宋廷主战主和相持。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1004,
    "end": 1004,
    "era_text": "景德元"
   },
   "place": "puyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cy_1005",
   "subject": "event:cy_1005",
   "predicate": "战事",
   "value_text": "约为兄弟之国，宋岁遗辽银绢，沿边置榷场互市。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1005,
    "end": 1005,
    "era_text": "景德二"
   },
   "place": "puyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M34",
   "subject": "event:cy_1004",
   "predicate": "爆发",
   "value_text": "辽圣宗、萧太后南下攻宋",
   "time": {
    "era_text": "景德元年",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "",
   "source": "synthesis",
   "quote": "辽圣宗、萧太后南下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件主体为澶渊之盟前战事，地点未明，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M35",
   "subject": "event:cy_1004",
   "predicate": "亲征",
   "value_text": "宋真宗亲征至澶州",
   "time": {
    "era_text": "景德元年",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "puyang",
   "source": "synthesis",
   "quote": "宋真宗亲征至澶州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "澶州即今濮阳，映射至puyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M33",
   "subject": "event:cy_1005",
   "predicate": "订盟",
   "value_text": "宋辽订澶渊之盟",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "puyang",
   "source": "synthesis",
   "quote": "宋辽订澶渊之盟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "盟约地点在澶州，映射至puyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M35",
   "subject": "event:cy_1005",
   "predicate": "关系",
   "value_text": "约为兄弟之国",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "",
   "source": "synthesis",
   "quote": "约为兄弟之国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M33",
   "subject": "event:cy_1005",
   "predicate": "岁币",
   "value_text": "宋岁输银十万两、绢二十万匹",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "",
   "source": "synthesis",
   "quote": "宋岁输银十万两、绢二十万匹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M32",
   "subject": "event:cy_1005",
   "predicate": "结果",
   "value_text": "边陲息兵",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "",
   "source": "synthesis",
   "quote": "边陲息兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M30",
   "subject": "event:cy_1004",
   "predicate": "主帅",
   "value_text": "辽方主帅为圣宗与萧太后",
   "time": {
    "era_text": "景德元年",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "",
   "source": "synthesis",
   "quote": "辽圣宗、萧太后南下",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文未明言主帅，但南下由二人主导，合理推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M31",
   "subject": "event:cy_1005",
   "predicate": "性质",
   "value_text": "盟约确立兄弟之国关系",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "",
   "source": "synthesis",
   "quote": "约为兄弟之国",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "原文直述，但兄弟之国为关系定性，属推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M29",
   "subject": "event:cy_1005",
   "predicate": "岁币数额",
   "value_text": "岁币总额折银约三十万两",
   "time": {
    "era_text": "景德二年",
    "start": "1005-01-01",
    "end": "1005-12-31",
    "gregorian_year": 1005
   },
   "place": "",
   "source": "synthesis",
   "quote": "宋岁输银十万两、绢二十万匹",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界常将绢折银估算，非原文直述，故标scholarship",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M26",
   "subject": "event:cy_1004",
   "predicate": "宋方兵力",
   "value_text": "宋真宗亲征兵力未载",
   "time": {
    "era_text": "景德元年",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
   },
   "place": "",
   "source": "synthesis",
   "quote": "宋真宗亲征至澶州",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文未载宋方兵力，属证据缺口",
   "lead": {
    "where": "宋真宗亲征澶州之兵力规模",
    "skills": [
     "宋史",
     "军事史"
    ],
    "accept": "补充宋真宗亲征兵力数据或考证"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "CHANYUANG01",
   "subject": "event:cy_1005",
   "predicate": "史料缺环",
   "value_text": "此次民族融合的动因、过程与人口规模，各族纪述不一，相关叙述存在缺口。",
   "time": {
    "era_text": "景德",
    "start": "1004-01-01",
    "end": "1004-12-31",
    "gregorian_year": 1004
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
  "SX010_M26",
  "CHANYUANG01"
 ],
 "events": [
  {
   "id": "ev_cy_1004",
   "subject": "event:cy_1004",
   "year": 1004,
   "era": "景德元",
   "title": "辽军南下",
   "kind": "战事",
   "text": "辽圣宗、萧太后亲征，围澶州，宋廷主战主和相持。",
   "place": "puyang"
  },
  {
   "id": "ev_cy_1005",
   "subject": "event:cy_1005",
   "year": 1005,
   "era": "景德二",
   "title": "澶渊结盟",
   "kind": "和议",
   "text": "约为兄弟之国，宋岁遗辽银绢，沿边置榷场互市。",
   "place": "puyang"
  }
 ],
 "routes": [
  {
   "id": "rt_cy",
   "name": "辽师南进",
   "side": "b",
   "nodes": [
    {
     "place": "beijing",
     "at": "1004",
     "label": "辽都南征"
    },
    {
     "place": "puyang",
     "at": "1004",
     "label": "澶州对峙"
    }
   ],
   "outcome": {
    "at": "1005",
    "type": "none",
    "text": "澶渊之盟"
   }
  }
 ],
 "timeline": [
  {
   "at": "1004",
   "era": "景德元",
   "label": "辽南下·澶州",
   "key": true
  },
  {
   "at": "1005",
   "era": "景德二",
   "label": "结盟·互市",
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
   "宋",
   "辽",
   "综合史料"
  ],
  "party_bucket": {
   "宋": "宋",
   "辽": "辽",
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
     "label": "宋胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "辽胜",
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
     "label": "宋行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "辽行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
