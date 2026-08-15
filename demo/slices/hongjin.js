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
   "influence": 0
  },
  {
   "id": "zhuyuanzhang",
   "name": "朱元璋",
   "side": "明",
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
