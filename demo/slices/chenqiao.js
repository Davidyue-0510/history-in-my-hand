// 本文件由 tools/build.py 自动生成（切片 chenqiao），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chenqiao"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chenqiao"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "陈桥兵变",
  "dossier_label": "陈桥兵变",
  "subtitle": "960 · 宋太祖代周",
  "primary_place": "chenqiao",
  "dossier_event": "event:cq_960a",
  "terrain_grid": "china_coarse",
  "lead": "后周世宗崩、幼主临朝，殿前都点检赵匡胤掌禁军。960 出征契丹途中，军士拥之于陈桥驿，黄袍加身，回师开封，禅代而立宋，杯酒释兵权继之。",
  "parties_note": "兵变细节《宋史》多粉饰，后世多以为是预谋，此处综合诸史。",
  "subject_names": {
   "person:zhao_kuangyin": "赵匡胤",
   "person:chai_rong": "周世宗"
  },
  "page": "county.html?scene=chenqiao",
  "key": "chenqiao",
  "scene_id": "chenqiao",
  "vocab_pack": "inline:chenqiao"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "陈桥兵变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "兵变细节《宋史》多粉饰，后世多以为是预谋，此处综合诸史。"
  }
 ],
 "places": [
  {
   "id": "chenqiao",
   "name": "陈桥驿",
   "lon": 114.2,
   "lat": 34.85,
   "note": "陈桥兵变地，开封东北",
   "elev": 74
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
   "id": "zhao_kuangyin",
   "name": "赵匡胤",
   "side": "宋太祖",
   "influence": 2
  },
  {
   "id": "chai_rong",
   "name": "周世宗",
   "side": "后周",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_cq_960a",
   "subject": "event:cq_960a",
   "predicate": "战事",
   "value_text": "军中谋立，赵匡胤被掖黄袍，号恸而从，旋回师。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 960,
    "end": 960,
    "era_text": "建隆元·正月初"
   },
   "place": "chenqiao",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_cq_960b",
   "subject": "event:cq_960b",
   "predicate": "战事",
   "value_text": "回京师，恭帝禅位，赵匡胤即帝位，国号宋。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 960,
    "end": 960,
    "era_text": "建隆元·正月"
   },
   "place": "kaofeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M40",
   "subject": "event:cq_960a",
   "predicate": "爆发",
   "value_text": "赵匡胤陈桥兵变",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "chenqiao",
   "source": "synthesis",
   "quote": "公元960年殿前都点检赵匡胤陈桥兵变",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M41",
   "subject": "event:cq_960a",
   "predicate": "结果",
   "value_text": "黄袍加身，代后周称帝",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "chenqiao",
   "source": "synthesis",
   "quote": "黄袍加身，代后周称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M39",
   "subject": "event:cq_960b",
   "predicate": "定都",
   "value_text": "国号宋，定都开封",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "国号宋，定都开封",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M41",
   "subject": "event:cq_960b",
   "predicate": "集权措施",
   "value_text": "杯酒之间收藩镇之权",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "杯酒之间收藩镇之权",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M39",
   "subject": "person:zhao_kuangyin",
   "predicate": "官职",
   "value_text": "殿前都点检",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "",
   "source": "synthesis",
   "quote": "殿前都点检赵匡胤",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "place 未在史料中明确，留空待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M38",
   "subject": "person:zhao_kuangyin",
   "predicate": "称帝",
   "value_text": "代后周称帝",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "代后周称帝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M36",
   "subject": "event:cq_960a",
   "predicate": "地点",
   "value_text": "陈桥",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "chenqiao",
   "source": "synthesis",
   "quote": "陈桥兵变",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M36",
   "subject": "event:cq_960b",
   "predicate": "国号",
   "value_text": "宋",
   "time": {
    "era_text": "公元960年",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": "kaofeng",
   "source": "synthesis",
   "quote": "国号宋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "CHENQIAOG01",
   "subject": "event:cq_960a",
   "predicate": "史料缺环",
   "value_text": "此次政权更迭的兵略、伤亡与后续处置，新朝国史多讳败饰胜，相关细节存在缺口。",
   "time": {
    "era_text": "显德",
    "start": "960-01-01",
    "end": "960-12-31",
    "gregorian_year": 960
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "dynasty",
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
  "CHENQIAOG01"
 ],
 "events": [
  {
   "id": "ev_cq_960a",
   "subject": "event:cq_960a",
   "year": 960,
   "era": "建隆元·正月初",
   "title": "陈桥拥立",
   "kind": "政变",
   "text": "军中谋立，赵匡胤被掖黄袍，号恸而从，旋回师。",
   "place": "chenqiao"
  },
  {
   "id": "ev_cq_960b",
   "subject": "event:cq_960b",
   "year": 960,
   "era": "建隆元·正月",
   "title": "受禅建宋",
   "kind": "结局",
   "text": "回京师，恭帝禅位，赵匡胤即帝位，国号宋。",
   "place": "kaofeng"
  }
 ],
 "routes": [
  {
   "id": "rt_cq",
   "name": "陈桥→开封",
   "side": "a",
   "nodes": [
    {
     "place": "chenqiao",
     "at": "960",
     "label": "兵变处"
    },
    {
     "place": "kaofeng",
     "at": "960",
     "label": "入城受禅"
    }
   ],
   "outcome": {
    "at": "960",
    "type": "victory",
    "text": "黄袍加身"
   }
  }
 ],
 "timeline": [
  {
   "at": "960",
   "era": "建隆元",
   "label": "陈桥兵变·建宋",
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
   "殿前军",
   "后周",
   "综合史料"
  ],
  "party_bucket": {
   "殿前军": "殿前军",
   "后周": "后周",
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
     "label": "殿前军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "后周胜",
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
     "label": "殿前军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "后周行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
