// 本文件由 tools/build.py 自动生成（切片 zhangheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhangheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhangheng"] = {
 "meta": {
  "kind": "tech",
  "region": "tech",
  "title": "张衡地动仪",
  "dossier_label": "张衡地动仪",
  "subtitle": "132 · 东汉阳嘉",
  "primary_place": "luoyang",
  "dossier_event": "event:zh_132",
  "terrain_grid": "china_coarse",
  "lead": "东汉阳嘉元年（132）张衡为太史令，铸候风地动仪，以精铜为之，外有八龙衔丸，地震则震方龙发机吐丸。曾测陇西地震，京师人服其妙，为世界测震器械之祖。",
  "parties_note": "地动仪据《后汉书·张衡传》综合，原器失传、复原方案有争议。",
  "subject_names": {
   "person:zhangheng2": "张衡"
  },
  "page": "county.html?scene=zhangheng",
  "key": "zhangheng",
  "scene_id": "zhangheng",
  "vocab_pack": "inline:zhangheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "张衡地动仪·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "地动仪据《后汉书·张衡传》综合，原器失传、复原方案有争议。"
  }
 ],
 "places": [
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "东汉/唐东都",
   "elev": 171
  },
  {
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "zhangheng2",
   "name": "张衡",
   "side": "东汉",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zh_132",
   "subject": "event:zh_132",
   "predicate": "事件",
   "value_text": "张衡铸铜仪，八龙衔丸，机关巧绝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 132,
    "end": 132,
    "era_text": "阳嘉元"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zh_test",
   "subject": "event:zh_test",
   "predicate": "事件",
   "value_text": "一龙发机而地动，驿至果报陇西震，众乃服。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 138,
    "end": 138,
    "era_text": "永和七"
   },
   "place": "luoyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M29",
   "subject": "event:zh_132",
   "predicate": "造",
   "value_text": "张衡造候风地动仪",
   "time": {
    "era_text": "公元132年",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "公元132年张衡造候风地动仪",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文用公元纪年，非年号纪年，保留原文表述",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M30",
   "subject": "event:zh_132",
   "predicate": "材质",
   "value_text": "以精铜铸",
   "time": {
    "era_text": "公元132年",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "以精铜铸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M28",
   "subject": "event:zh_132",
   "predicate": "意义",
   "value_text": "首开地震测报之先",
   "time": {
    "era_text": "公元132年",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "首开地震测报之先",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M30",
   "subject": "event:zh_test",
   "predicate": "应验",
   "value_text": "陇西地震，地动仪应验如神",
   "time": {
    "era_text": "公元138年",
    "start": "138-01-01",
    "end": "138-12-31",
    "gregorian_year": 138
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "公元138年陇西地震，地动仪应验如神",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "地震发生在陇西，但地动仪在洛阳，place 记录仪器所在地",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M29",
   "subject": "event:zh_test",
   "predicate": "方向",
   "value_text": "方向无误",
   "time": {
    "era_text": "公元138年",
    "start": "138-01-01",
    "end": "138-12-31",
    "gregorian_year": 138
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "方向无误",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M29",
   "subject": "person:zhangheng2",
   "predicate": "造物",
   "value_text": "张衡造候风地动仪",
   "time": {
    "era_text": "公元132年",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "张衡造候风地动仪",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M26",
   "subject": "event:zh_test",
   "predicate": "地震地点",
   "value_text": "陇西地震",
   "time": {
    "era_text": "公元138年",
    "start": "138-01-01",
    "end": "138-12-31",
    "gregorian_year": 138
   },
   "place": "",
   "source": "synthesis",
   "quote": "陇西地震",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "陇西不在白名单，未新建 place，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M27",
   "subject": "event:zh_132",
   "predicate": "时间",
   "value_text": "公元132年",
   "time": {
    "era_text": "公元132年",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": "luoyang",
   "source": "synthesis",
   "quote": "公元132年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZHANGHENGG01",
   "subject": "event:zh_132",
   "predicate": "史料缺环",
   "value_text": "此技术或发明的源流、改进与传播，古籍记载简略且间有附会，相关细节存在缺口。",
   "time": {
    "era_text": "阳嘉",
    "start": "132-01-01",
    "end": "132-12-31",
    "gregorian_year": 132
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "tech",
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
  "ZHANGHENGG01"
 ],
 "events": [
  {
   "id": "ev_zh_132",
   "subject": "event:zh_132",
   "year": 132,
   "era": "阳嘉元",
   "title": "候风地动仪成",
   "kind": "科技",
   "text": "张衡铸铜仪，八龙衔丸，机关巧绝。",
   "place": "luoyang"
  },
  {
   "id": "ev_zh_test",
   "subject": "event:zh_test",
   "year": 138,
   "era": "永和七",
   "title": "测陇西震",
   "kind": "验证",
   "text": "一龙发机而地动，驿至果报陇西震，众乃服。",
   "place": "luoyang"
  }
 ],
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
  "legend": {}
 }
};
