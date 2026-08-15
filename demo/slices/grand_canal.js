// 本文件由 tools/build.py 自动生成（切片 grand_canal），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["grand_canal"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["grand_canal"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "大运河",
  "dossier_label": "大运河",
  "subtitle": "605—1293 · 隋唐凿通·元朝裁直",
  "primary_place": "hangzhou",
  "dossier_event": "event:gc_sui",
  "terrain_grid": "china_coarse",
  "lead": "隋炀帝开通济渠、邗沟沟通河淮江；元郭守敬开会通河、通惠河，弃绕洛阳、直穿山东，成今日京杭运河雏形。地图线条即运河走向。",
  "parties_note": "运河走向据《中国历史地图集》，具体渠口与年代有考订差异。",
  "subject_names": {
   "person:yangdi": "隋炀帝",
   "person:guoshoujing": "郭守敬"
  },
  "layer_title": "大运河河道叠加",
  "timeline_title": "大运河修凿时间轴",
  "page": "county.html?scene=grand_canal",
  "key": "grand_canal",
  "scene_id": "grand_canal",
  "vocab_pack": "inline:grand_canal"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "大运河·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "运河走向据《中国历史地图集》，具体渠口与年代有考订差异。"
  }
 ],
 "places": [
  {
   "id": "beijing_c",
   "name": "大都/北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "运河北端",
   "elev": 44
  },
  {
   "id": "luoyang_c",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "隋唐运河中枢（隋绕此）",
   "elev": 171
  },
  {
   "id": "huaian",
   "name": "淮安",
   "lon": 119.02,
   "lat": 33.5,
   "note": "黄淮交汇，运河要冲",
   "elev": 11
  },
  {
   "id": "yangzhou",
   "name": "扬州",
   "lon": 119.41,
   "lat": 32.39,
   "note": "邗沟入江口",
   "elev": 10
  },
  {
   "id": "hangzhou",
   "name": "杭州",
   "lon": 120.15,
   "lat": 30.27,
   "note": "运河南端（余杭）",
   "elev": 98
  },
  {
   "id": "linqing",
   "name": "临清",
   "lon": 115.97,
   "lat": 36.85,
   "note": "会通河关键枢纽（元裁直所经）",
   "elev": 25
  }
 ],
 "persons": [
  {
   "id": "yangdi",
   "name": "隋炀帝",
   "side": "隋",
   "influence": 0
  },
  {
   "id": "guoshoujing",
   "name": "郭守敬",
   "side": "元",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_gc_sui",
   "subject": "event:gc_sui",
   "predicate": "事件",
   "value_text": "炀帝发河南诸郡男女百万开通济渠（河入淮）、重浚邗沟（淮入江），沟通江淮南北。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 605,
    "end": 605,
    "era_text": "隋大业元年"
   },
   "place": "yangzhou",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gc_yuan",
   "subject": "event:gc_yuan",
   "predicate": "事件",
   "value_text": "郭守敬主持开会通河（汶泗至临清）、通惠河（通州入大都），运河弃绕洛阳、直贯山东，裁直近千里。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1283,
    "end": 1283,
    "era_text": "元至元二十年"
   },
   "place": "linqing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gc_ming",
   "subject": "event:gc_ming",
   "predicate": "事件",
   "value_text": "宋礼、陈瑄重浚会通河、建闸坝，罢海运行漕运，运河成明廷生命线。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1411,
    "end": 1411,
    "era_text": "明永乐九年"
   },
   "place": "linqing",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_gc_sui",
   "subject": "event:gc_sui",
   "year": 605,
   "era": "隋大业元年",
   "title": "通济渠·邗沟开通",
   "kind": "工程",
   "text": "炀帝发河南诸郡男女百万开通济渠（河入淮）、重浚邗沟（淮入江），沟通江淮南北。",
   "place": "yangzhou"
  },
  {
   "id": "ev_gc_yuan",
   "subject": "event:gc_yuan",
   "year": 1283,
   "era": "元至元二十年",
   "title": "会通河·通惠河成",
   "kind": "工程",
   "text": "郭守敬主持开会通河（汶泗至临清）、通惠河（通州入大都），运河弃绕洛阳、直贯山东，裁直近千里。",
   "place": "linqing"
  },
  {
   "id": "ev_gc_ming",
   "subject": "event:gc_ming",
   "year": 1411,
   "era": "明永乐九年",
   "title": "重浚会通河",
   "kind": "工程",
   "text": "宋礼、陈瑄重浚会通河、建闸坝，罢海运行漕运，运河成明廷生命线。",
   "place": "linqing"
  }
 ],
 "routes": [
  {
   "id": "rt_gc_line",
   "name": "京杭运河走向",
   "side": "b",
   "nodes": [
    {
     "place": "beijing_c",
     "at": "605",
     "label": "北端"
    },
    {
     "place": "linqing",
     "at": "1283",
     "label": "山东枢纽"
    },
    {
     "place": "huaian",
     "at": "605",
     "label": "黄淮交"
    },
    {
     "place": "yangzhou",
     "at": "605",
     "label": "入江"
    },
    {
     "place": "hangzhou",
     "at": "605",
     "label": "南端"
    }
   ],
   "outcome": {
    "at": "605",
    "type": "none",
    "text": "南北漕运主干"
   }
  }
 ],
 "timeline": [
  {
   "at": "605",
   "era": "隋大业元",
   "label": "通济渠·邗沟开通",
   "key": true
  },
  {
   "at": "1283",
   "era": "元至元二十",
   "label": "会通河·通惠河成",
   "key": true
  },
  {
   "at": "1411",
   "era": "明永乐九",
   "label": "重浚会通河",
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
