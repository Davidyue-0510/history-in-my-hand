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
  },
  {
   "id": "SX001_M68",
   "subject": "event:li_1640",
   "predicate": "背景",
   "value_text": "崇祯元年北方连荒，小冰期河冰可渡",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "shaanxi",
   "source": "synthesis",
   "quote": "崇祯元年，北方连荒，小冰期寒甚，河冰可渡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "小冰期气候背景，为李自成起事之远因",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M69",
   "subject": "event:li_1640",
   "predicate": "背景",
   "value_text": "崇祯十一年大旱蝗起，流民载道",
   "time": {
    "era_text": "崇祯十一年",
    "start": "1638-01-01",
    "end": "1638-12-31",
    "gregorian_year": 1638
   },
   "place": "henan",
   "source": "synthesis",
   "quote": "崇祯十一年，大旱蝗起，流民载道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "灾荒导致流民，为李自成势力壮大提供兵源",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M67",
   "subject": "event:li_1640",
   "predicate": "背景",
   "value_text": "饥馑荐臻，乱端萌焉",
   "time": {
    "era_text": "崇祯十一年",
    "start": "1638-01-01",
    "end": "1638-12-31",
    "gregorian_year": 1638
   },
   "place": "henan",
   "source": "synthesis",
   "quote": "饥馑荐臻，乱端萌焉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "饥荒引发动乱，为李自成起事之直接诱因",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M69",
   "subject": "event:li_1640",
   "predicate": "推断",
   "value_text": "小冰期气候加剧北方灾荒",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "shaanxi",
   "source": "synthesis",
   "quote": "小冰期寒甚",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "小冰期与灾荒的因果关系为现代气候史推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M67",
   "subject": "event:li_1640",
   "predicate": "推断",
   "value_text": "流民成为李自成军主要兵源",
   "time": {
    "era_text": "崇祯十一年",
    "start": "1638-01-01",
    "end": "1638-12-31",
    "gregorian_year": 1638
   },
   "place": "henan",
   "source": "synthesis",
   "quote": "流民载道",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "流民与李自成军的关系为学界共识，原文未明说",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M65",
   "subject": "event:li_1640",
   "predicate": "缺口",
   "value_text": "原文未载李自成具体活动",
   "time": {
    "era_text": "崇祯元年",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": "",
   "source": "synthesis",
   "quote": "乱端萌焉",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "史料仅述背景，未涉及李自成个人行迹",
   "lead": {
    "where": "event:li_1640",
    "skills": [
     "史料检索",
     "年号换算"
    ],
    "accept": "补充崇祯元年至十一年间李自成活动记录"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LITTLE_ICEG01",
   "subject": "event:li_1640",
   "predicate": "史料缺环",
   "value_text": "此次灾异的死亡与受灾范围，方志、奏报与私家记载互有出入，朝廷赈济之实效亦见仁见智，相关数字存在缺口。",
   "time": {
    "era_text": "崇祯",
    "start": "1628-01-01",
    "end": "1628-12-31",
    "gregorian_year": 1628
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "disaster",
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
 "conflicts": [
  {
   "id": "cf:event:li_1640|背景",
   "subject": "event:li_1640",
   "predicate": "背景",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX001_M68",
    "SX002_M69",
    "SX003_M67"
   ]
  },
  {
   "id": "cf:event:li_1640|推断",
   "subject": "event:li_1640",
   "predicate": "推断",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX004_M69",
    "SX005_M67"
   ]
  }
 ],
 "gaps": [
  "SX006_M65",
  "LITTLE_ICEG01"
 ],
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
