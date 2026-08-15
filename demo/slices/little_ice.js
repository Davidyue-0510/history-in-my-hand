// 本文件由 tools/build.py 自动生成（切片 little_ice），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["little_ice"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["little_ice"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "明末小冰期饥荒",
  "dossier_label": "明末小冰期饥荒",
  "subtitle": "1580—1644 · 北中国连年亢旱",
  "primary_place": "beijing",
  "dossier_event": "event:li_1580",
  "terrain_grid": "china_coarse",
  "lead": "明末正值小冰期极盛，北方气温骤降、旱蝗相仍。陕北饥民从贼，李自成起；崇祯朝「十室九空」的奏报不绝，天灾与征敛合力倾明。",
  "parties_note": "气候重建据树木年轮与冰芯（如《中国近千年气候变化》），与史料旱蝗记载互证。",
  "subject_names": {
   "person:chongzhen": "崇祯帝",
   "person:lizicheng2": "李自成"
  },
  "page": "county.html?scene=little_ice",
  "key": "little_ice",
  "scene_id": "little_ice",
  "vocab_pack": "inline:little_ice"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "明末小冰期饥荒·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "气候重建据树木年轮与冰芯（如《中国近千年气候变化》），与史料旱蝗记载互证。"
  }
 ],
 "places": [
  {
   "id": "liaodong_ice",
   "name": "辽东",
   "lon": 123.43,
   "lat": 41.8,
   "note": "万历末已连年饥寒，边备渐弛",
   "elev": 43
  },
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "北直隶大旱中心",
   "elev": 44
  },
  {
   "id": "henan",
   "name": "河南",
   "lon": 113.65,
   "lat": 34.76,
   "note": "崇祯中连旱蝗",
   "elev": 110
  },
  {
   "id": "shaanxi",
   "name": "陕西",
   "lon": 108.94,
   "lat": 34.34,
   "note": "陕北民变策源",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "chongzhen",
   "name": "崇祯帝",
   "side": "明",
   "influence": 0
  },
  {
   "id": "lizicheng2",
   "name": "李自成",
   "side": "闯王",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_li_1580",
   "subject": "event:li_1580",
   "predicate": "事件",
   "value_text": "16 世纪后期全球降温，华北生长季缩短，粮食减产渐显。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1580,
    "end": 1580,
    "era_text": "万历前期"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_li_1637",
   "subject": "event:li_1637",
   "predicate": "事件",
   "value_text": "崇祯十年前后北直隶、山西连旱，麦禾尽枯，人相食。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1637,
    "end": 1637,
    "era_text": "崇祯十年"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_li_1640",
   "subject": "event:li_1640",
   "predicate": "事件",
   "value_text": "河南「人相食，村舍为墟」，饥民从李自成者日众。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1640,
    "end": 1640,
    "era_text": "崇祯十三年"
   },
   "place": "henan",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_li_1641",
   "subject": "event:li_1641",
   "predicate": "事件",
   "value_text": "陕北连旱，驿站裁撤失业者多投闯营；民变与天灾相互喂养。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1641,
    "end": 1641,
    "era_text": "崇祯十四年"
   },
   "place": "shaanxi",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_li_1644",
   "subject": "event:li_1644",
   "predicate": "事件",
   "value_text": "饥馑瓦解统治根基，同年李自成破北京、崇祯自缢，清入关。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1644,
    "end": 1644,
    "era_text": "崇祯十七年"
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
   "id": "ev_li_1580",
   "subject": "event:li_1580",
   "year": 1580,
   "era": "万历前期",
   "title": "气温转寒·北方早霜",
   "kind": "灾异",
   "text": "16 世纪后期全球降温，华北生长季缩短，粮食减产渐显。",
   "place": "beijing"
  },
  {
   "id": "ev_li_1637",
   "subject": "event:li_1637",
   "year": 1637,
   "era": "崇祯十年",
   "title": "北直隶大旱",
   "kind": "饥荒",
   "text": "崇祯十年前后北直隶、山西连旱，麦禾尽枯，人相食。",
   "place": "beijing"
  },
  {
   "id": "ev_li_1640",
   "subject": "event:li_1640",
   "year": 1640,
   "era": "崇祯十三年",
   "title": "河南连旱蝗",
   "kind": "饥荒",
   "text": "河南「人相食，村舍为墟」，饥民从李自成者日众。",
   "place": "henan"
  },
  {
   "id": "ev_li_1641",
   "subject": "event:li_1641",
   "year": 1641,
   "era": "崇祯十四年",
   "title": "陕西亢旱·流寇炽",
   "kind": "饥荒",
   "text": "陕北连旱，驿站裁撤失业者多投闯营；民变与天灾相互喂养。",
   "place": "shaanxi"
  },
  {
   "id": "ev_li_1644",
   "subject": "event:li_1644",
   "year": 1644,
   "era": "崇祯十七年",
   "title": "饥荒催化·明亡",
   "kind": "饥荒",
   "text": "饥馑瓦解统治根基，同年李自成破北京、崇祯自缢，清入关。",
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
