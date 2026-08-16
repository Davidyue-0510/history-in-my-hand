// 本文件由 tools/build.py 自动生成（切片 zijincheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zijincheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zijincheng"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "紫禁城营建",
  "dossier_label": "紫禁城营建",
  "subtitle": "1406—1420 · 明永乐",
  "primary_place": "beijing",
  "dossier_event": "event:zj_1406",
  "terrain_grid": "china_coarse",
  "lead": "永乐四年（1406）诏建北京宫殿，采木于川湖、陶甓于临清，役军民数十万，永乐十八年（1420）成。紫禁城据此奠定明清五百余年政治中枢。",
  "parties_note": "营建据《明史·成祖纪》与《工部厂库须知》综合，役夫数字为折中估计。",
  "subject_names": {
   "person:zhu_di": "明成祖",
   "person:kuai_xiang": "蒯祥"
  },
  "page": "county.html?scene=zijincheng",
  "key": "zijincheng",
  "scene_id": "zijincheng",
  "vocab_pack": "inline:zijincheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "紫禁城营建·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "营建据《明史·成祖纪》与《工部厂库须知》综合，役夫数字为折中估计。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "zhu_di",
   "name": "明成祖",
   "side": "明",
   "influence": 1
  },
  {
   "id": "kuai_xiang",
   "name": "蒯祥",
   "side": "明匠师",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zj_1406",
   "subject": "event:zj_1406",
   "predicate": "事件",
   "value_text": "营建北京宫殿，取材天下、征役军民数十万。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1406,
    "end": 1406,
    "era_text": "永乐四"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zj_1420",
   "subject": "event:zj_1420",
   "predicate": "事件",
   "value_text": "宫殿告成，次年迁都北京，定为京师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1420,
    "end": 1420,
    "era_text": "永乐十八"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M76",
   "subject": "event:zj_1406",
   "predicate": "诏建",
   "value_text": "明成祖诏建北京宫城",
   "time": {
    "era_text": "永乐四年",
    "start": "1406-01-01",
    "end": "1406-12-31",
    "gregorian_year": 1406
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "永乐四年，明成祖诏建北京宫城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M76",
   "subject": "event:zj_1420",
   "predicate": "建成",
   "value_text": "紫禁城成",
   "time": {
    "era_text": "永乐十八年",
    "start": "1420-01-01",
    "end": "1420-12-31",
    "gregorian_year": 1420
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "永乐十八年紫禁城成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M75",
   "subject": "event:zj_1420",
   "predicate": "迁都",
   "value_text": "次年迁都北京",
   "time": {
    "era_text": "永乐十九年",
    "start": "1421-01-01",
    "end": "1421-12-31",
    "gregorian_year": 1421
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "次年迁都北京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "原文未明言迁都具体年份，据'次年'推断为永乐十九年",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M77",
   "subject": "event:zj_1420",
   "predicate": "规制",
   "value_text": "宫殿巍峨，规制宏远",
   "time": {
    "era_text": "永乐十八年",
    "start": "1420-01-01",
    "end": "1420-12-31",
    "gregorian_year": 1420
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "宫殿巍峨，规制宏远",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M75",
   "subject": "person:zhu_di",
   "predicate": "决策",
   "value_text": "诏建北京宫城",
   "time": {
    "era_text": "永乐四年",
    "start": "1406-01-01",
    "end": "1406-12-31",
    "gregorian_year": 1406
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "明成祖诏建北京宫城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M74",
   "subject": "event:zj_1406",
   "predicate": "关联",
   "value_text": "为迁都奠定基础",
   "time": {
    "era_text": "永乐四年",
    "start": "1406-01-01",
    "end": "1406-12-31",
    "gregorian_year": 1406
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "诏建北京宫城",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明言，但由后续迁都事实合理推出",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M67",
   "subject": "event:zj_1420",
   "predicate": "影响",
   "value_text": "北京成为都城",
   "time": {
    "era_text": "永乐十九年",
    "start": "1421-01-01",
    "end": "1421-12-31",
    "gregorian_year": 1421
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "迁都北京",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "由迁都事实推出",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M69",
   "subject": "event:zj_1420",
   "predicate": "时间",
   "value_text": "迁都次年",
   "time": {
    "era_text": "永乐十九年",
    "start": "1421-01-01",
    "end": "1421-12-31",
    "gregorian_year": 1421
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "次年迁都北京",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文未明确迁都具体年份，仅称'次年'，需核验",
   "lead": {
    "where": "synthesis",
    "skills": [
     "史料考据"
    ],
    "accept": "确认迁都北京的具体年份"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZIJINCHENGG01",
   "subject": "event:zj_1420",
   "predicate": "史料缺环",
   "value_text": "此工程的营造工期、用工与耗费，历代记载繁简不一，民间传说更增益其辞，细节存在缺口。",
   "time": {
    "era_text": "永乐",
    "start": "1406-01-01",
    "end": "1406-12-31",
    "gregorian_year": 1406
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "engineering",
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
  "SX008_M69",
  "ZIJINCHENGG01"
 ],
 "events": [
  {
   "id": "ev_zj_1406",
   "subject": "event:zj_1406",
   "year": 1406,
   "era": "永乐四",
   "title": "诏建北京宫",
   "kind": "工程",
   "text": "营建北京宫殿，取材天下、征役军民数十万。",
   "place": "beijing"
  },
  {
   "id": "ev_zj_1420",
   "subject": "event:zj_1420",
   "year": 1420,
   "era": "永乐十八",
   "title": "紫禁城成",
   "kind": "落成",
   "text": "宫殿告成，次年迁都北京，定为京师。",
   "place": "beijing"
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
