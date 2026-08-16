// 本文件由 tools/build.py 自动生成（切片 xinhai），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xinhai"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xinhai"] = {
 "meta": {
  "kind": "dynasty",
  "region": "dynasty",
  "title": "辛亥革命",
  "dossier_label": "辛亥革命",
  "subtitle": "1911 · 帝制终结",
  "primary_place": "wuchang",
  "dossier_event": "event:xh_1010",
  "terrain_grid": "china_coarse",
  "lead": "1911 年 10 月 10 日武昌新军起义，各省相继独立。清廷起袁世凯讨伐，终逼宫逊位，1912 宣统退位，二百六十八年清祚与两千年帝制同终。",
  "parties_note": "首义与独立据《辛亥革命史》综合；袁世凯之角色为关键变量。",
  "subject_names": {
   "person:sun_yat": "孙中山",
   "person:yuan_shikai": "袁世凯"
  },
  "page": "county.html?scene=xinhai",
  "key": "xinhai",
  "scene_id": "xinhai",
  "vocab_pack": "inline:xinhai"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "辛亥革命·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "首义与独立据《辛亥革命史》综合；袁世凯之角色为关键变量。"
  }
 ],
 "places": [
  {
   "id": "wuchang",
   "name": "武昌",
   "lon": 114.3,
   "lat": 30.59,
   "note": "辛亥革命首义",
   "elev": 40
  },
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
   "id": "sun_yat",
   "name": "孙中山",
   "side": "革命党",
   "influence": 0
  },
  {
   "id": "yuan_shikai",
   "name": "袁世凯",
   "side": "清/北洋",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xh_1010",
   "subject": "event:xh_1010",
   "predicate": "战事",
   "value_text": "武昌新军起义，占楚望台、克督署，旋成立军政府。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1911,
    "end": 1911,
    "era_text": "辛亥八月十九"
   },
   "place": "wuchang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xh_res",
   "subject": "event:xh_res",
   "predicate": "战事",
   "value_text": "湘陕赣晋等省相继独立，清统治土崩。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1911,
    "end": 1911,
    "era_text": "其后两月"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xh_1912",
   "subject": "event:xh_1912",
   "predicate": "战事",
   "value_text": "宣统退位，帝制终结，共和肇建。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1912,
    "end": 1912,
    "era_text": "民国元"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M43",
   "subject": "event:xh_1010",
   "predicate": "爆发",
   "value_text": "武昌起义爆发",
   "time": {
    "era_text": "宣统三年",
    "start": "1911-01-01",
    "end": "1911-12-31",
    "gregorian_year": 1911
   },
   "place": "wuchang",
   "source": "synthesis",
   "quote": "宣统三年，武昌起义",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M44",
   "subject": "event:xh_1010",
   "predicate": "响应",
   "value_text": "各省响应",
   "time": {
    "era_text": "宣统三年",
    "start": "1911-01-01",
    "end": "1911-12-31",
    "gregorian_year": 1911
   },
   "place": "",
   "source": "synthesis",
   "quote": "各省响应",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "具体省份未列出，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M42",
   "subject": "event:xh_res",
   "predicate": "发生",
   "value_text": "清帝退位",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "民国元年，清帝退位",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M44",
   "subject": "event:xh_1912",
   "predicate": "建立",
   "value_text": "共和肇建",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "nanjing",
   "source": "synthesis",
   "quote": "共和肇建",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "共和政府成立地点未明说，推断为南京",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M42",
   "subject": "event:xh_1912",
   "predicate": "终结",
   "value_text": "二千余年帝制终结",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "",
   "source": "synthesis",
   "quote": "二千余年帝制终结",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "帝制终结为宏观概括，非具体事件",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M41",
   "subject": "person:yuan_shikai",
   "predicate": "参与",
   "value_text": "袁世凯促成清帝退位",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "清帝退位",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文未提袁世凯，但学界公认其作用",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M39",
   "subject": "person:sun_yat",
   "predicate": "领导",
   "value_text": "孙中山领导革命",
   "time": {
    "era_text": "宣统三年",
    "start": "1911-01-01",
    "end": "1911-12-31",
    "gregorian_year": 1911
   },
   "place": "",
   "source": "synthesis",
   "quote": "武昌起义",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "empire",
   "note": "原文未提孙中山，但学界公认其领导角色",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M39",
   "subject": "event:xh_1010",
   "predicate": "影响",
   "value_text": "各省响应导致清廷崩溃",
   "time": {
    "era_text": "宣统三年",
    "start": "1911-01-01",
    "end": "1911-12-31",
    "gregorian_year": 1911
   },
   "place": "",
   "source": "synthesis",
   "quote": "各省响应",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说因果关系，但可合理推出",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M32",
   "subject": "event:xh_1912",
   "predicate": "意义",
   "value_text": "共和制度建立",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "nanjing",
   "source": "synthesis",
   "quote": "共和肇建",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M29",
   "subject": "event:xh_res",
   "predicate": "结果",
   "value_text": "清帝退位结束帝制",
   "time": {
    "era_text": "民国元年",
    "start": "1912-01-01",
    "end": "1912-12-31",
    "gregorian_year": 1912
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "清帝退位",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XINHAIG01",
   "subject": "event:xh_1010",
   "predicate": "史料缺环",
   "value_text": "此次政权更迭的兵略、伤亡与后续处置，新朝国史多讳败饰胜，相关细节存在缺口。",
   "time": {
    "era_text": "宣统",
    "start": "1911-01-01",
    "end": "1911-12-31",
    "gregorian_year": 1911
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
  "XINHAIG01"
 ],
 "events": [
  {
   "id": "ev_xh_1010",
   "subject": "event:xh_1010",
   "year": 1911,
   "era": "辛亥八月十九",
   "title": "武昌首义",
   "kind": "战事",
   "text": "武昌新军起义，占楚望台、克督署，旋成立军政府。",
   "place": "wuchang"
  },
  {
   "id": "ev_xh_res",
   "subject": "event:xh_res",
   "year": 1911,
   "era": "其后两月",
   "title": "各省响应",
   "kind": "变局",
   "text": "湘陕赣晋等省相继独立，清统治土崩。",
   "place": "nanjing"
  },
  {
   "id": "ev_xh_1912",
   "subject": "event:xh_1912",
   "year": 1912,
   "era": "民国元",
   "title": "清帝逊位",
   "kind": "结局",
   "text": "宣统退位，帝制终结，共和肇建。",
   "place": "beijing"
  }
 ],
 "routes": [
  {
   "id": "rt_xh",
   "name": "首义→各省",
   "side": "a",
   "nodes": [
    {
     "place": "wuchang",
     "at": "1911",
     "label": "首义"
    },
    {
     "place": "nanjing",
     "at": "1911",
     "label": "独立响应"
    }
   ],
   "outcome": {
    "at": "1911",
    "type": "victory",
    "text": "共和初立"
   }
  }
 ],
 "timeline": [
  {
   "at": "1911",
   "era": "辛亥",
   "label": "武昌首义",
   "key": true
  },
  {
   "at": "1912",
   "era": "民国元",
   "label": "清帝逊位",
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
   "革命军",
   "清军",
   "综合史料"
  ],
  "party_bucket": {
   "革命军": "革命军",
   "清军": "清军",
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
     "label": "革命军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "清军胜",
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
     "label": "革命军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "清军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
