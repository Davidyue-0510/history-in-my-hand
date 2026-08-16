// 本文件由 tools/build.py 自动生成（切片 hongjin），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hongjin"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hongjin"] = {
 "meta": {
  "kind": "uprising",
  "region": "uprising",
  "title": "红巾军",
  "dossier_label": "红巾军",
  "subtitle": "1351—1368 · 元末",
  "primary_place": "yingzhou",
  "dossier_event": "event:hj_1351",
  "terrain_grid": "china_coarse",
  "lead": "元末河患、民困，1351 韩山童、刘福通以白莲教聚众颍州，事泄山童死，福通立韩林儿号小明王。红巾遍起，朱元璋借此廓清群雄，终代元建明。",
  "parties_note": "红巾据《元史》《明史》综合，其宗教色彩与民族矛盾交织。",
  "subject_names": {
   "person:liufutong": "刘福通",
   "person:zhuyuanzhang": "朱元璋"
  },
  "page": "county.html?scene=hongjin",
  "key": "hongjin",
  "scene_id": "hongjin",
  "vocab_pack": "inline:hongjin"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "红巾军·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "红巾据《元史》《明史》综合，其宗教色彩与民族矛盾交织。"
  }
 ],
 "places": [
  {
   "id": "yingzhou",
   "name": "颍州",
   "lon": 115.81,
   "lat": 32.9,
   "note": "红巾军起义，今安徽阜阳",
   "elev": 33
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
   "id": "liufutong",
   "name": "刘福通",
   "side": "红巾",
   "influence": 2
  },
  {
   "id": "zhuyuanzhang",
   "name": "朱元璋",
   "side": "明",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hj_1351",
   "subject": "event:hj_1351",
   "predicate": "战事",
   "value_text": "刘福通等颍州起义，以红巾为号，据亳州立韩林儿。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1351,
    "end": 1351,
    "era_text": "至正十一"
   },
   "place": "yingzhou",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hj_1368",
   "subject": "event:hj_1368",
   "predicate": "战事",
   "value_text": "朱元璋并群雄、北伐，元顺帝北遁，明立。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1368,
    "end": 1368,
    "era_text": "洪武元"
   },
   "place": "nanjing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M59",
   "subject": "event:hj_1351",
   "predicate": "爆发",
   "value_text": "红巾军起于颍州",
   "time": {
    "era_text": "至正十一年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "yingzhou",
   "source": "synthesis",
   "quote": "至正十一年，韩山童、刘福通以白莲教倡言弥勒下生，红巾军起于颍州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "红巾军起义地点为颍州，已映射至白名单",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M60",
   "subject": "person:liufutong",
   "predicate": "倡言",
   "value_text": "以白莲教倡言弥勒下生",
   "time": {
    "era_text": "至正十一年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "yingzhou",
   "source": "synthesis",
   "quote": "韩山童、刘福通以白莲教倡言弥勒下生",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M58",
   "subject": "person:liufutong",
   "predicate": "参与",
   "value_text": "参与红巾军起义",
   "time": {
    "era_text": "至正十一年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "yingzhou",
   "source": "synthesis",
   "quote": "韩山童、刘福通以白莲教倡言弥勒下生，红巾军起于颍州",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M60",
   "subject": "event:hj_1368",
   "predicate": "建国",
   "value_text": "朱元璋代元，建国明",
   "time": {
    "era_text": "至正二十八年",
    "start": "1368-01-01",
    "end": "1368-12-31",
    "gregorian_year": 1368
   },
   "place": "nanjing",
   "source": "synthesis",
   "quote": "至正二十八年，朱元璋代元，建国明",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "建国地点未明说，按常识推断为南京，已映射至白名单",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M58",
   "subject": "person:zhuyuanzhang",
   "predicate": "代元",
   "value_text": "代元建国",
   "time": {
    "era_text": "至正二十八年",
    "start": "1368-01-01",
    "end": "1368-12-31",
    "gregorian_year": 1368
   },
   "place": "nanjing",
   "source": "synthesis",
   "quote": "朱元璋代元，建国明",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M57",
   "subject": "event:hj_1351",
   "predicate": "关联人物",
   "value_text": "韩山童、刘福通为首",
   "time": {
    "era_text": "至正十一年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "yingzhou",
   "source": "synthesis",
   "quote": "韩山童、刘福通以白莲教倡言弥勒下生",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M54",
   "subject": "event:hj_1351",
   "predicate": "性质",
   "value_text": "白莲教起义",
   "time": {
    "era_text": "至正十一年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "yingzhou",
   "source": "synthesis",
   "quote": "以白莲教倡言弥勒下生",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M54",
   "subject": "event:hj_1368",
   "predicate": "结果",
   "value_text": "明朝建立",
   "time": {
    "era_text": "至正二十八年",
    "start": "1368-01-01",
    "end": "1368-12-31",
    "gregorian_year": 1368
   },
   "place": "nanjing",
   "source": "synthesis",
   "quote": "建国明",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M40",
   "subject": "event:hj_1351",
   "predicate": "时间跨度",
   "value_text": "至正十一年至至正二十八年",
   "time": {
    "era_text": "至正十一年至至正二十八年",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": "",
   "source": "synthesis",
   "quote": "至正十一年……至正二十八年",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "从两事件时间推断红巾军至明朝建立的时间跨度",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M35",
   "subject": "event:hj_1351",
   "predicate": "影响",
   "value_text": "导致元朝灭亡",
   "time": {
    "era_text": "至正二十八年",
    "start": "1368-01-01",
    "end": "1368-12-31",
    "gregorian_year": 1368
   },
   "place": "",
   "source": "synthesis",
   "quote": "朱元璋代元",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说因果关系，但可合理推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "HONGJING01",
   "subject": "event:hj_1351",
   "predicate": "史料缺环",
   "value_text": "此次起事的兵力、战损与平息过程，胜败双方史述各异，民间歌谣与正史口径不同，相关叙述存在缺口。",
   "time": {
    "era_text": "至正",
    "start": "1351-01-01",
    "end": "1351-12-31",
    "gregorian_year": 1351
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "uprising",
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
  "HONGJING01"
 ],
 "events": [
  {
   "id": "ev_hj_1351",
   "subject": "event:hj_1351",
   "year": 1351,
   "era": "至正十一",
   "title": "颍州举事",
   "kind": "战事",
   "text": "刘福通等颍州起义，以红巾为号，据亳州立韩林儿。",
   "place": "yingzhou"
  },
  {
   "id": "ev_hj_1368",
   "subject": "event:hj_1368",
   "year": 1368,
   "era": "洪武元",
   "title": "朱明代元",
   "kind": "结局",
   "text": "朱元璋并群雄、北伐，元顺帝北遁，明立。",
   "place": "nanjing"
  }
 ],
 "routes": [
  {
   "id": "rt_hj",
   "name": "红巾北上",
   "side": "a",
   "nodes": [
    {
     "place": "yingzhou",
     "at": "1351",
     "label": "颍州起"
    },
    {
     "place": "beijing",
     "at": "1368",
     "label": "克大都"
    }
   ],
   "outcome": {
    "at": "1368",
    "type": "victory",
    "text": "驱元建明"
   }
  }
 ],
 "timeline": [
  {
   "at": "1351",
   "era": "至正十一",
   "label": "颍州举事",
   "key": true
  },
  {
   "at": "1368",
   "era": "洪武元",
   "label": "明立·元亡",
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
   "红巾军",
   "元军",
   "综合史料"
  ],
  "party_bucket": {
   "红巾军": "红巾军",
   "元军": "元军",
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
     "label": "红巾军胜",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "元军胜",
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
     "label": "红巾军行动",
     "color": "#c0392b"
    },
    {
     "key": "b",
     "label": "元军行动",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
