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
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
