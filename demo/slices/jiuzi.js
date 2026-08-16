// 本文件由 tools/build.py 自动生成（切片 jiuzi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jiuzi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jiuzi"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "九子夺嫡",
  "dossier_label": "九子夺嫡",
  "subtitle": "1712—1722 · 清康熙末",
  "primary_place": "beijing",
  "dossier_event": "event:jz_1712",
  "terrain_grid": "china_coarse",
  "lead": "康熙晚年储位久虚，胤礽两立两废，皇子结党（太子、大千岁、八爷等）争斗剧烈。1722 康熙崩，四子胤禛继位为雍正，即位之正否聚讼至今。",
  "parties_note": "夺嫡据《清圣祖实录》与清史稿综合，继位细节多传说与考辨。",
  "subject_names": {
   "person:kangxi3": "康熙帝",
   "person:yongzheng": "雍正帝"
  },
  "page": "county.html?scene=jiuzi",
  "key": "jiuzi",
  "scene_id": "jiuzi",
  "vocab_pack": "inline:jiuzi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "九子夺嫡·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "夺嫡据《清圣祖实录》与清史稿综合，继位细节多传说与考辨。"
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
   "id": "changan",
   "name": "长安",
   "lon": 108.94,
   "lat": 34.34,
   "note": "汉唐都城",
   "elev": 391
  }
 ],
 "persons": [
  {
   "id": "kangxi3",
   "name": "康熙帝",
   "side": "清",
   "influence": 0
  },
  {
   "id": "yongzheng",
   "name": "雍正帝",
   "side": "清",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_jz_1712",
   "subject": "event:jz_1712",
   "predicate": "事件",
   "value_text": "胤礽再废，储位久虚，诸皇子竞结党羽。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1712,
    "end": 1712,
    "era_text": "康熙五一"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_jz_1722",
   "subject": "event:jz_1722",
   "predicate": "事件",
   "value_text": "康熙崩，遗诏传四子胤禛，在位为雍正，夺嫡终局。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1722,
    "end": 1722,
    "era_text": "康熙六一"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M52",
   "subject": "event:jz_1712",
   "predicate": "废黜",
   "value_text": "皇太子胤礽再废",
   "time": {
    "era_text": "康熙五十一年",
    "start": "1712-01-01",
    "end": "1712-12-31",
    "gregorian_year": 1712
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "康熙五十一年，皇太子胤礽再废",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "直接描述废太子事件本身，subject 用 event:jz_1712",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M53",
   "subject": "event:jz_1722",
   "predicate": "即位",
   "value_text": "四子胤禛即位，是为雍正",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "康熙六十一年，四子胤禛即位，是为雍正",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "直接描述雍正即位事件，subject 用 event:jz_1722",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M51",
   "subject": "person:yongzheng",
   "predicate": "身份",
   "value_text": "康熙第四子，即位为雍正",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "四子胤禛即位，是为雍正",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "人物身份信息，用 person:yongzheng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M53",
   "subject": "event:jz_1722",
   "predicate": "兄弟相残",
   "value_text": "兄弟夺嫡相残",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "兄弟夺嫡相残",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "描述夺嫡事件的性质，subject 用 event:jz_1722",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M51",
   "subject": "event:jz_1722",
   "predicate": "圈禁",
   "value_text": "圈禁允禩、允禟",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "圈禁允禩、允禟",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "圈禁行为属于夺嫡事件的一部分，subject 用 event:jz_1722",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M50",
   "subject": "person:yongzheng",
   "predicate": "处置兄弟",
   "value_text": "圈禁允禩、允禟",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "圈禁允禩、允禟",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说圈禁是雍正下令，但可合理推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M47",
   "subject": "event:jz_1712",
   "predicate": "再废",
   "value_text": "胤礽第二次被废",
   "time": {
    "era_text": "康熙五十一年",
    "start": "1712-01-01",
    "end": "1712-12-31",
    "gregorian_year": 1712
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "皇太子胤礽再废",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.8,
   "scale": "empire",
   "note": "「再废」暗示此前已有一次废黜，此处为合理推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M47",
   "subject": "event:jz_1722",
   "predicate": "夺嫡结果",
   "value_text": "胤禛胜出，兄弟被圈禁",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "四子胤禛即位，是为雍正，兄弟夺嫡相残，圈禁允禩、允禟",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "从即位与圈禁可推出夺嫡以胤禛胜出告终",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M36",
   "subject": "event:jz_1712",
   "predicate": "废黜原因",
   "value_text": "原文未明说",
   "time": {
    "era_text": "康熙五十一年",
    "start": "1712-01-01",
    "end": "1712-12-31",
    "gregorian_year": 1712
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "皇太子胤礽再废",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文未交代再废的具体原因",
   "lead": {
    "where": "康熙五十一年再废太子的具体原因",
    "skills": [
     "史料考据"
    ],
    "accept": "补充再废的直接原因"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M31",
   "subject": "event:jz_1722",
   "predicate": "圈禁地点",
   "value_text": "原文未明说",
   "time": {
    "era_text": "康熙六十一年",
    "start": "1722-01-01",
    "end": "1722-12-31",
    "gregorian_year": 1722
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "圈禁允禩、允禟",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文未指明圈禁的具体地点",
   "lead": {
    "where": "允禩、允禟被圈禁的具体地点",
    "skills": [
     "史料考据"
    ],
    "accept": "补充圈禁地点"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "JIUZIG01",
   "subject": "event:jz_1722",
   "predicate": "史料缺环",
   "value_text": "此次宫廷政争的密谋、人数与处置，宫禁事秘，实录多所讳饰，相关细节存在缺口。",
   "time": {
    "era_text": "康熙",
    "start": "1712-01-01",
    "end": "1712-12-31",
    "gregorian_year": 1712
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
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX009_M36",
  "SX010_M31",
  "JIUZIG01"
 ],
 "events": [
  {
   "id": "ev_jz_1712",
   "subject": "event:jz_1712",
   "year": 1712,
   "era": "康熙五一",
   "title": "废太子·储位空",
   "kind": "变局",
   "text": "胤礽再废，储位久虚，诸皇子竞结党羽。",
   "place": "beijing"
  },
  {
   "id": "ev_jz_1722",
   "subject": "event:jz_1722",
   "year": 1722,
   "era": "康熙六一",
   "title": "雍正嗣位",
   "kind": "结局",
   "text": "康熙崩，遗诏传四子胤禛，在位为雍正，夺嫡终局。",
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
