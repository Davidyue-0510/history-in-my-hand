// 本文件由 tools/build.py 自动生成（切片 zhenghe），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["zhenghe"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["zhenghe"] = {
 "meta": {
  "kind": "frontier",
  "region": "exchange",
  "title": "郑和下西洋",
  "dossier_label": "郑和下西洋",
  "subtitle": "1405—1433 · 明永乐—宣德",
  "primary_place": "taicang",
  "dossier_event": "event:zh_1405",
  "terrain_grid": "china_coarse",
  "lead": "永乐三年（1405）郑和率宝船巨艦自刘家港启航，历占城、满剌加、锡兰、忽鲁谟斯诸国，凡七下西洋，耀威德、通贸易。其舰队的规模与技术，较欧人远航早近百年。",
  "parties_note": "远航据《明史·郑和传》与《瀛涯胜览》综合。",
  "subject_names": {
   "person:zhenghe2": "郑和",
   "person:yongle2": "明成祖"
  },
  "layer_title": "郑和航线叠加",
  "timeline_title": "郑和下西洋时间轴",
  "page": "county.html?scene=zhenghe",
  "key": "zhenghe",
  "scene_id": "zhenghe",
  "vocab_pack": "inline:zhenghe"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "郑和下西洋·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "远航据《明史·郑和传》与《瀛涯胜览》综合。"
  }
 ],
 "places": [
  {
   "id": "taicang",
   "name": "刘家港",
   "lon": 121.1,
   "lat": 31.45,
   "note": "郑和下西洋起锚地",
   "elev": 6
  },
  {
   "id": "zhancheng",
   "name": "占城",
   "lon": 108.0,
   "lat": 16.0,
   "note": "郑和西洋第一站",
   "elev": null,
   "off_grid": true
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
   "id": "zhenghe2",
   "name": "郑和",
   "side": "明",
   "influence": 1
  },
  {
   "id": "yongle2",
   "name": "明成祖",
   "side": "明",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_zh_1405",
   "subject": "event:zh_1405",
   "predicate": "事件",
   "value_text": "郑和率舟师自刘家港出发，遍历南洋诸国。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1405,
    "end": 1405,
    "era_text": "永乐三"
   },
   "place": "taicang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_zh_1433",
   "subject": "event:zh_1433",
   "predicate": "事件",
   "value_text": "第七次远航归，宝船之制渐弛，海洋经略中辍。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1433,
    "end": 1433,
    "era_text": "宣德八"
   },
   "place": "taicang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH001",
   "subject": "event:zh_1405",
   "predicate": "首航",
   "value_text": "永乐三年首下西洋",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "taicang",
   "source": "synthesis",
   "quote": "永乐三年，郑和首下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "出发地推测为太仓，原文未明言",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH002",
   "subject": "event:zh_1405",
   "predicate": "途经",
   "value_text": "至占城、爪哇",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "zhancheng",
   "source": "synthesis",
   "quote": "至占城、爪哇",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "占城为白名单地点，爪哇未登记，留待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH003",
   "subject": "event:zh_1405",
   "predicate": "统帅",
   "value_text": "郑和统领",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "",
   "source": "synthesis",
   "quote": "郑和首下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH004",
   "subject": "event:zh_1433",
   "predicate": "再航",
   "value_text": "永乐七年再航抵锡兰",
   "time": {
    "era_text": "永乐七年",
    "start": "1409-01-01",
    "end": "1409-12-31",
    "gregorian_year": 1409
   },
   "place": "",
   "source": "synthesis",
   "quote": "永乐七年再航抵锡兰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "锡兰未登记地点，留待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH005",
   "subject": "event:zh_1433",
   "predicate": "第七次远航",
   "value_text": "宣德六年第七次远航",
   "time": {
    "era_text": "宣德六年",
    "start": "1431-01-01",
    "end": "1431-12-31",
    "gregorian_year": 1431
   },
   "place": "",
   "source": "synthesis",
   "quote": "宣德六年第七次远航",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH006",
   "subject": "event:zh_1433",
   "predicate": "抵达",
   "value_text": "抵非洲东岸",
   "time": {
    "era_text": "宣德六年",
    "start": "1431-01-01",
    "end": "1431-12-31",
    "gregorian_year": 1431
   },
   "place": "",
   "source": "synthesis",
   "quote": "抵非洲东岸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "非洲东岸未登记地点，留待消歧",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH007",
   "subject": "event:zh_1405",
   "predicate": "影响",
   "value_text": "威航海宇",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "",
   "source": "synthesis",
   "quote": "威航海宇",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "原文为总结性评价，非具体事件，标为推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH008",
   "subject": "person:zhenghe2",
   "predicate": "身份",
   "value_text": "远航统帅",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "",
   "source": "synthesis",
   "quote": "郑和首下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH009",
   "subject": "event:zh_1405",
   "predicate": "次数",
   "value_text": "首航",
   "time": {
    "era_text": "永乐三年",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": "",
   "source": "synthesis",
   "quote": "首下西洋",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZH010",
   "subject": "event:zh_1433",
   "predicate": "次数",
   "value_text": "第七次",
   "time": {
    "era_text": "宣德六年",
    "start": "1431-01-01",
    "end": "1431-12-31",
    "gregorian_year": 1431
   },
   "place": "",
   "source": "synthesis",
   "quote": "第七次远航",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "ZHENGHEG01",
   "subject": "event:zh_1405",
   "predicate": "史料缺环",
   "value_text": "此次交通或交往的路线、规模与影响，中外纪述互证不足，相关细节存在缺口。",
   "time": {
    "era_text": "永乐",
    "start": "1405-01-01",
    "end": "1405-12-31",
    "gregorian_year": 1405
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "frontier",
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
  "ZHENGHEG01"
 ],
 "events": [
  {
   "id": "ev_zh_1405",
   "subject": "event:zh_1405",
   "year": 1405,
   "era": "永乐三",
   "title": "首航西洋",
   "kind": "远航",
   "text": "郑和率舟师自刘家港出发，遍历南洋诸国。",
   "place": "taicang"
  },
  {
   "id": "ev_zh_1433",
   "subject": "event:zh_1433",
   "year": 1433,
   "era": "宣德八",
   "title": "七下而止",
   "kind": "结局",
   "text": "第七次远航归，宝船之制渐弛，海洋经略中辍。",
   "place": "taicang"
  }
 ],
 "routes": [
  {
   "id": "rt_zh",
   "name": "刘家港→西洋",
   "side": "b",
   "nodes": [
    {
     "place": "taicang",
     "at": "1405",
     "label": "启航"
    },
    {
     "place": "zhancheng",
     "at": "1405",
     "label": "占城"
    },
    {
     "place": "beijing",
     "at": "1433",
     "label": "归报"
    }
   ],
   "outcome": {
    "at": "1405",
    "type": "none",
    "text": "七下西洋"
   }
  }
 ],
 "timeline": [
  {
   "at": "1405",
   "era": "永乐三",
   "label": "首航",
   "key": true
  },
  {
   "at": "1433",
   "era": "宣德八",
   "label": "七下止",
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
     "label": "郑和航线",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
