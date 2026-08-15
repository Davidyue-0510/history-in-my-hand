// 本文件由 tools/build.py 自动生成（切片 wuxu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wuxu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wuxu"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "戊戌变法",
  "dossier_label": "戊戌变法",
  "subtitle": "1898 · 光绪廿四",
  "primary_place": "beijing",
  "dossier_event": "event:wx_0611",
  "terrain_grid": "china_coarse",
  "lead": "甲午惨败后，维新派倡学习西洋政教。1898 光绪帝下明定国是诏，行废八股、练新军、兴学堂诸法，触怒后党，慈禧发动政变，六君子死难，维新百日而终。",
  "parties_note": "维新据《戊戌变法史》综合；守旧与维新之争为近代转折关键。",
  "subject_names": {
   "person:guangxu": "光绪帝",
   "person:kang_youwei": "康有为"
  },
  "page": "county.html?scene=wuxu",
  "key": "wuxu",
  "scene_id": "wuxu",
  "vocab_pack": "inline:wuxu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "戊戌变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "维新据《戊戌变法史》综合；守旧与维新之争为近代转折关键。"
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
   "id": "guangxu",
   "name": "光绪帝",
   "side": "清",
   "influence": 0
  },
  {
   "id": "kang_youwei",
   "name": "康有为",
   "side": "维新派",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wx_0611",
   "subject": "event:wx_0611",
   "predicate": "事件",
   "value_text": "光绪颁诏变法，裁冗衙、废八股、奖工商。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1898,
    "end": 1898,
    "era_text": "光绪廿四·四月"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wx_0908",
   "subject": "event:wx_0908",
   "predicate": "事件",
   "value_text": "慈禧囚帝、捕杀六君子，新政尽废，维新败。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1898,
    "end": 1898,
    "era_text": "同年八月"
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
   "id": "ev_wx_0611",
   "subject": "event:wx_0611",
   "year": 1898,
   "era": "光绪廿四·四月",
   "title": "明定国是",
   "kind": "变法",
   "text": "光绪颁诏变法，裁冗衙、废八股、奖工商。",
   "place": "beijing"
  },
  {
   "id": "ev_wx_0908",
   "subject": "event:wx_0908",
   "year": 1898,
   "era": "同年八月",
   "title": "戊戌政变",
   "kind": "结局",
   "text": "慈禧囚帝、捕杀六君子，新政尽废，维新败。",
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
