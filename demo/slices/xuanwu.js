// 本文件由 tools/build.py 自动生成（切片 xuanwu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["xuanwu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["xuanwu"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "玄武门之变",
  "dossier_label": "玄武门之变",
  "subtitle": "626 · 唐高祖武德九年",
  "primary_place": "xuanwumen",
  "dossier_event": "event:xx_626",
  "terrain_grid": "china_coarse",
  "lead": "秦王李世民与太子建成、齐王元吉争储。武德九年六月四日，世民伏兵玄武门，杀建成、元吉，迫高祖立己为太子，旋即位（太宗）。",
  "parties_note": "事据《旧唐书》《资治通鉴》综合；建成、元吉一方记载多经太宗朝删改。",
  "subject_names": {
   "person:limin2": "李世民",
   "person:jiancheng": "李建成",
   "person:gaozu": "唐高祖"
  },
  "page": "county.html?scene=xuanwu",
  "key": "xuanwu",
  "scene_id": "xuanwu",
  "vocab_pack": "inline:xuanwu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "玄武门之变·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "事据《旧唐书》《资治通鉴》综合；建成、元吉一方记载多经太宗朝删改。"
  },
  {
   "id": "jiu_tang_xx",
   "title": "《旧唐书·太宗纪》",
   "name": "《旧唐书·太宗纪》",
   "party": "官修史书",
   "faction": "qinwang",
   "bias_note": "唐官修，秦王视角，曲笔避血腥。"
  },
  {
   "id": "zztj_xx",
   "title": "《资治通鉴》",
   "name": "《资治通鉴》",
   "party": "编年史",
   "faction": "donggong",
   "bias_note": "司马光于建成、元吉多存同情，保留东宫叙事。"
  }
 ],
 "places": [
  {
   "id": "xuanwumen",
   "name": "玄武门",
   "lon": 108.95,
   "lat": 34.27,
   "note": "唐长安宫城北门，政变处",
   "elev": 436
  },
  {
   "id": "changan_xx",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "唐都",
   "elev": 391
  },
  {
   "id": "qianliang",
   "name": "太极宫",
   "lon": 108.94,
   "lat": 34.35,
   "note": "高祖临朝处",
   "elev": 386
  }
 ],
 "persons": [
  {
   "id": "limin2",
   "name": "李世民",
   "side": "秦王/太宗",
   "influence": 3
  },
  {
   "id": "jiancheng",
   "name": "李建成",
   "side": "太子",
   "influence": 1
  },
  {
   "id": "gaozu",
   "name": "唐高祖",
   "side": "唐",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_xx_626",
   "subject": "event:xx_626",
   "predicate": "事件",
   "value_text": "世民伏兵玄武门，建成、元吉入朝遇杀，党羽溃；尉迟敬德甲士入宫「宿卫」高祖。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 626,
    "end": 626,
    "era_text": "武德九年六月四"
   },
   "place": "xuanwumen",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_xx_after",
   "subject": "event:xx_after",
   "predicate": "事件",
   "value_text": "高祖立世民为太子，旋禅位，是为太宗，开启贞观之治。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 626,
    "end": 626,
    "era_text": "同年八月"
   },
   "place": "changan_xx",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M55",
   "subject": "event:xx_626",
   "predicate": "伏兵",
   "value_text": "李世民伏兵玄武门",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "李世民伏兵玄武门",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M56",
   "subject": "event:xx_626",
   "predicate": "杀",
   "value_text": "杀太子建成、齐王元吉",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成、齐王元吉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M54",
   "subject": "person:limin2",
   "predicate": "杀",
   "value_text": "杀太子建成",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "subject 用 event:xx_626 更合适，此处保留 person 以记录其行为",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M56",
   "subject": "person:jiancheng",
   "predicate": "被杀",
   "value_text": "太子建成被杀",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "xuanwumen",
   "source": "synthesis",
   "quote": "杀太子建成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M54",
   "subject": "event:xx_626",
   "predicate": "立为太子",
   "value_text": "高祖立为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "地点未明，留空",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M53",
   "subject": "person:limin2",
   "predicate": "立为太子",
   "value_text": "李世民被立为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M50",
   "subject": "event:xx_626",
   "predicate": "即位",
   "value_text": "旋即位",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "旋即位",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M50",
   "subject": "person:limin2",
   "predicate": "即位",
   "value_text": "李世民即位",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "旋即位",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M38",
   "subject": "person:gaozu",
   "predicate": "立太子",
   "value_text": "高祖立李世民为太子",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "高祖立为太子",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M33",
   "subject": "event:xx_after",
   "predicate": "太宗即位",
   "value_text": "是为太宗",
   "time": {
    "era_text": "武德九年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "source": "synthesis",
   "quote": "是为太宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "event:xx_after 表示即位后的事件",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "XUANWUG01",
   "subject": "event:xx_626",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "武德",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "court",
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
  },
  {
   "id": "XX_FX1",
   "subject": "event:xx_626",
   "predicate": "储位之争",
   "value_text": "武德末秦王与太子争储白热化：建成结元吉、引关陇元老固储位，世民倚山东豪杰与府兵骁将谋夺嫡，双方各树党羽、相互倾陷。",
   "source": "zztj_xx",
   "quote": "建成、元吉日夜谮诉世民于上（李渊）。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "layer": "record",
   "time": {
    "era_text": "公元626年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "两大利益集团的正面博弈",
   "_party": "编年史",
   "_faction": "donggong"
  },
  {
   "id": "XX_FX2",
   "subject": "event:xx_626",
   "predicate": "暴力解决",
   "value_text": "世民先发制人，伏兵玄武门射杀建成、元吉，随即逼父退位——关东军功集团以武力取代关陇元老支持的东宫正统。",
   "source": "jiu_tang_xx",
   "quote": "太宗手杀建成、元吉，馘其首。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "layer": "record",
   "time": {
    "era_text": "公元626年",
    "start": "626-06-01",
    "end": "626-06-30",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "派系冲突的暴力顶点",
   "_party": "官修史书",
   "_faction": "qinwang"
  },
  {
   "id": "XX_FX3",
   "subject": "event:xx_after",
   "predicate": "清洗与正统重塑",
   "value_text": "世民即位后，东宫党羽被清洗、魏徵等转仕新朝，官修史书将事变叙述为『自卫靖难』——胜利者重写利益之争的记忆。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "layer": "inference",
   "time": {
    "era_text": "公元626年",
    "start": "626-01-01",
    "end": "626-12-31",
    "gregorian_year": 626
   },
   "place": "",
   "scale": "empire",
   "note": "谁胜谁写史的诚实标注",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "XUANWUG01"
 ],
 "events": [
  {
   "id": "ev_xx_626",
   "subject": "event:xx_626",
   "year": 626,
   "era": "武德九年六月四",
   "title": "玄武门伏杀",
   "kind": "政变",
   "text": "世民伏兵玄武门，建成、元吉入朝遇杀，党羽溃；尉迟敬德甲士入宫「宿卫」高祖。",
   "place": "xuanwumen"
  },
  {
   "id": "ev_xx_after",
   "subject": "event:xx_after",
   "year": 626,
   "era": "同年八月",
   "title": "世民即位",
   "kind": "结局",
   "text": "高祖立世民为太子，旋禅位，是为太宗，开启贞观之治。",
   "place": "changan_xx"
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
   "综合史料",
   "官修史书",
   "编年史"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "官修史书": "官修史书",
   "编年史": "编年史"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "官修史书": "#6d4c41",
   "编年史": "#2980b9"
  },
  "legend": {},
  "faction_colors": {
   "qinwang": "#2980b9",
   "donggong": "#c0392b"
  },
  "factions": {
   "qinwang": {
    "name": "秦王府集团（天策系）",
    "period": "武德后期—贞观初（公元621—626）",
    "interest": "以李世民军功威望为资本，房玄龄、杜如晦谋夺储位；拥有关东山东豪杰与府兵骁将（尉迟敬德、秦叔宝），欲取东宫而代之。",
    "key_figures": [
     "李世民",
     "房玄龄",
     "杜如晦",
     "尉迟敬德",
     "长孙无忌"
    ],
    "typical_sources": [
     "旧唐书·太宗纪",
     "贞观政要"
    ],
    "bias_note": "贞观史官讳饰玄武门血腥，将秦王塑造为被迫自卫、顺天应人；对喋血禁门多曲笔。"
   },
   "donggong": {
    "name": "东宫—元老派（建成集团）",
    "period": "武德",
    "interest": "以太子名分与李渊父权为依凭，结纳齐王元吉与关陇元老（裴寂、封德彝），力保储君正统、压制功高震主的秦王。",
    "key_figures": [
     "李建成",
     "李元吉",
     "李渊",
     "裴寂",
     "魏徵（曾仕东宫）"
    ],
    "typical_sources": [
     "资治通鉴",
     "旧唐书·隐太子传"
    ],
    "bias_note": "司马光《通鉴》于建成、元吉多存同情之笔，记其『仁孝』『有干材』，与唐官修史书的贬抑形成对照。"
   }
  }
 }
};
