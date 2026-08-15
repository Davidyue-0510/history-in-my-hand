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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
