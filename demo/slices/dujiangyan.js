// 本文件由 tools/build.py 自动生成（切片 dujiangyan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dujiangyan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dujiangyan"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "都江堰",
  "dossier_label": "都江堰",
  "subtitle": "约公元前256 · 李冰筑",
  "primary_place": "dujiangyan",
  "dossier_event": "event:dj_256",
  "terrain_grid": "china_coarse",
  "lead": "秦昭襄王时蜀守李冰凿离堆、分岷江为内江外江，鱼嘴分水、飞沙堰泄洪、宝瓶口引水，成都平原「水旱从人，不知饥馑」。",
  "parties_note": "都江堰年代据《华阳国志》《水经注》综合，李冰父子身世细节史载有限。",
  "subject_names": {
   "person:libing": "李冰",
   "person:wengong": "文翁"
  },
  "page": "county.html?scene=dujiangyan",
  "key": "dujiangyan",
  "scene_id": "dujiangyan",
  "vocab_pack": "inline:dujiangyan"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "都江堰·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "都江堰年代据《华阳国志》《水经注》综合，李冰父子身世细节史载有限。"
  }
 ],
 "places": [
  {
   "id": "dujiangyan",
   "name": "都江堰",
   "lon": 103.62,
   "lat": 31.0,
   "note": "今四川都江堰市（原灌县）",
   "elev": 848
  },
  {
   "id": "chengdu",
   "name": "成都",
   "lon": 104.07,
   "lat": 30.67,
   "note": "受益的成都平原",
   "elev": 490
  },
  {
   "id": "minjiang",
   "name": "岷江",
   "lon": 103.6,
   "lat": 31.2,
   "note": "被分流的大江",
   "elev": 1575
  }
 ],
 "persons": [
  {
   "id": "libing",
   "name": "李冰",
   "side": "秦蜀守",
   "influence": 0
  },
  {
   "id": "wengong",
   "name": "文翁",
   "side": "西汉蜀守",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_dj_256",
   "subject": "event:dj_256",
   "predicate": "事件",
   "value_text": "蜀守李冰凿离堆、作堋江鱼嘴分岷为内外江，无坝引水，成都平原始免水患并获灌溉。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -256,
    "end": -256,
    "era_text": "秦昭襄王后期"
   },
   "place": "dujiangyan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dj_168",
   "subject": "event:dj_168",
   "predicate": "事件",
   "value_text": "蜀郡守文翁踵李冰迹，穿湔江、增灌田，都江堰体系渐成。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -168,
    "end": -168,
    "era_text": "西汉景帝"
   },
   "place": "chengdu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_dj_today",
   "subject": "event:dj_today",
   "predicate": "事件",
   "value_text": "2000 余年沿用至今，2000 年列入世界文化遗产，仍灌溉成都平原上千万亩。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 2000,
    "end": 2000,
    "era_text": "至今"
   },
   "place": "dujiangyan",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_dj_256",
   "subject": "event:dj_256",
   "year": -256,
   "era": "秦昭襄王后期",
   "title": "李冰筑都江堰",
   "kind": "工程",
   "text": "蜀守李冰凿离堆、作堋江鱼嘴分岷为内外江，无坝引水，成都平原始免水患并获灌溉。",
   "place": "dujiangyan"
  },
  {
   "id": "ev_dj_168",
   "subject": "event:dj_168",
   "year": -168,
   "era": "西汉景帝",
   "title": "文翁续修·灌区扩",
   "kind": "工程",
   "text": "蜀郡守文翁踵李冰迹，穿湔江、增灌田，都江堰体系渐成。",
   "place": "chengdu"
  },
  {
   "id": "ev_dj_today",
   "subject": "event:dj_today",
   "year": 2000,
   "era": "至今",
   "title": "列入世遗·仍灌田",
   "kind": "工程",
   "text": "2000 余年沿用至今，2000 年列入世界文化遗产，仍灌溉成都平原上千万亩。",
   "place": "dujiangyan"
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
