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
   "influence": 0
  },
  {
   "id": "jiancheng",
   "name": "李建成",
   "side": "太子",
   "influence": 0
  },
  {
   "id": "gaozu",
   "name": "唐高祖",
   "side": "唐",
   "influence": 0
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
  }
 ],
 "conflicts": [],
 "gaps": [],
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
