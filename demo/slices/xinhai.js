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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
