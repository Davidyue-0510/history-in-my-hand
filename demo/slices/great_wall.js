// 本文件由 tools/build.py 自动生成（切片 great_wall），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["great_wall"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["great_wall"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "title": "长城",
  "dossier_label": "长城",
  "subtitle": "前214—1644 · 秦连·明筑",
  "primary_place": "badaling",
  "dossier_event": "event:gw_qin",
  "terrain_grid": "china_coarse",
  "lead": "战国燕赵秦各筑北边；秦始皇连为万里；明自洪武至万历二百余年垒砖石、建敌台，成今日所见东起山海关、西至嘉峪关之巨防。地图线条为明长城主干示意。",
  "parties_note": "长城具体走向历代不同，此处为明代九边主干示意，非历代重合。",
  "subject_names": {
   "person:mengtian": "蒙恬",
   "person:mingtaizu": "明太祖"
  },
  "layer_title": "长城走向叠加",
  "timeline_title": "长城修筑时间轴",
  "page": "county.html?scene=great_wall",
  "key": "great_wall",
  "scene_id": "great_wall",
  "vocab_pack": "inline:great_wall"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "长城·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "长城具体走向历代不同，此处为明代九边主干示意，非历代重合。"
  }
 ],
 "places": [
  {
   "id": "lintao",
   "name": "临洮",
   "lon": 103.3,
   "lat": 35.4,
   "note": "秦长城西端",
   "elev": 2267
  },
  {
   "id": "jiayuguan",
   "name": "嘉峪关",
   "lon": 98.29,
   "lat": 39.77,
   "note": "明长城西端",
   "elev": 1687
  },
  {
   "id": "badaling",
   "name": "八达岭",
   "lon": 116.02,
   "lat": 40.36,
   "note": "明长城代表段（北京）",
   "elev": 525
  },
  {
   "id": "shanhai",
   "name": "山海关",
   "lon": 119.75,
   "lat": 40.0,
   "note": "明长城东端「天下第一关」",
   "elev": 11
  },
  {
   "id": "datong_w",
   "name": "大同",
   "lon": 113.3,
   "lat": 40.08,
   "note": "明九边·大同镇",
   "elev": 1054
  }
 ],
 "persons": [
  {
   "id": "mengtian",
   "name": "蒙恬",
   "side": "秦",
   "influence": 0
  },
  {
   "id": "mingtaizu",
   "name": "明太祖",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_gw_qin",
   "subject": "event:gw_qin",
   "predicate": "事件",
   "value_text": "始皇使蒙恬北逐匈奴，连燕、赵、秦故城，西起临洮东至辽东，为万里长城之始。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -214,
    "end": -214,
    "era_text": "秦始皇三十三年"
   },
   "place": "lintao",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gw_han",
   "subject": "event:gw_han",
   "predicate": "事件",
   "value_text": "汉逐匈奴据河西，筑令居以西障塞、长城，护丝绸之路。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -121,
    "end": -121,
    "era_text": "汉武帝元狩"
   },
   "place": "jiayuguan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_gw_ming",
   "subject": "event:gw_ming",
   "predicate": "事件",
   "value_text": "明自洪武至万历，于北边设九镇、垒砖石、建敌台，成今日所见万里巨防。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1474,
    "end": 1474,
    "era_text": "明成化—万历"
   },
   "place": "badaling",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M71",
   "subject": "event:gw_ming",
   "predicate": "重筑边墙",
   "value_text": "万历年间明重筑蓟镇边墙",
   "time": {
    "era_text": "万历年间",
    "start": "1573-01-01",
    "end": "1573-12-31",
    "gregorian_year": 1573
   },
   "place": "datong_w",
   "source": "synthesis",
   "quote": "万历年间明重筑蓟镇边墙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "蓟镇边墙未在本次白名单，暂以 datong_w 代指，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M70",
   "subject": "event:gw_ming",
   "predicate": "建材",
   "value_text": "砖石为垣",
   "time": {
    "era_text": "万历年间",
    "start": "1573-01-01",
    "end": "1573-12-31",
    "gregorian_year": 1573
   },
   "place": "datong_w",
   "source": "synthesis",
   "quote": "砖石为垣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "蓟镇边墙未在本次白名单，暂以 datong_w 代指，待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "GREAT_WALLG01",
   "subject": "event:gw_ming",
   "predicate": "史料缺环",
   "value_text": "此工程的营造工期、用工与耗费，历代记载繁简不一，民间传说更增益其辞，细节存在缺口。",
   "time": {
    "era_text": "秦始皇",
    "start": "-214-01-01",
    "end": "-214-12-31",
    "gregorian_year": -214
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
  "GREAT_WALLG01"
 ],
 "events": [
  {
   "id": "ev_gw_qin",
   "subject": "event:gw_qin",
   "year": -214,
   "era": "秦始皇三十三年",
   "title": "连秦赵燕长城",
   "kind": "工程",
   "text": "始皇使蒙恬北逐匈奴，连燕、赵、秦故城，西起临洮东至辽东，为万里长城之始。",
   "place": "lintao"
  },
  {
   "id": "ev_gw_han",
   "subject": "event:gw_han",
   "year": -121,
   "era": "汉武帝元狩",
   "title": "河西长城·障塞",
   "kind": "工程",
   "text": "汉逐匈奴据河西，筑令居以西障塞、长城，护丝绸之路。",
   "place": "jiayuguan"
  },
  {
   "id": "ev_gw_ming",
   "subject": "event:gw_ming",
   "year": 1474,
   "era": "明成化—万历",
   "title": "九边砖石长城",
   "kind": "工程",
   "text": "明自洪武至万历，于北边设九镇、垒砖石、建敌台，成今日所见万里巨防。",
   "place": "badaling"
  }
 ],
 "routes": [
  {
   "id": "rt_gw_line",
   "name": "明长城主干（示意）",
   "side": "b",
   "nodes": [
    {
     "place": "jiayuguan",
     "at": "1474",
     "label": "西端"
    },
    {
     "place": "datong_w",
     "at": "1474",
     "label": "大同镇"
    },
    {
     "place": "badaling",
     "at": "1474",
     "label": "北京段"
    },
    {
     "place": "shanhai",
     "at": "1474",
     "label": "东端山海关"
    }
   ],
   "outcome": {
    "at": "1474",
    "type": "none",
    "text": "九边巨防"
   }
  }
 ],
 "timeline": [
  {
   "at": "B214",
   "era": "秦始皇三十三",
   "label": "连秦赵燕为万里",
   "key": true
  },
  {
   "at": "B121",
   "era": "汉武帝元狩",
   "label": "河西障塞·护丝路",
   "key": false
  },
  {
   "at": "1474",
   "era": "明成化—万历",
   "label": "九边砖石长城",
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
