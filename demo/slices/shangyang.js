// 本文件由 tools/build.py 自动生成（切片 shangyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shangyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shangyang"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "商鞅变法",
  "dossier_label": "商鞅变法",
  "subtitle": "前356—前338 · 秦孝公时",
  "primary_place": "xianyang",
  "dossier_event": "event:sy_356",
  "terrain_grid": "china_coarse",
  "lead": "商鞅徙木立信，废井田开阡陌、奖励军功、推行县制与连坐，秦国力骤强，为统一奠基；孝公死，商鞅车裂。",
  "parties_note": "变法内容据《史记·商君列传》《韩非子》综合，部分细节（如刑公子虔）有史家考辨。",
  "subject_names": {
   "person:shangyang": "商鞅",
   "person:xiaogong": "秦孝公"
  },
  "page": "county.html?scene=shangyang",
  "key": "shangyang",
  "scene_id": "shangyang",
  "vocab_pack": "inline:shangyang"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "商鞅变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "变法内容据《史记·商君列传》《韩非子》综合，部分细节（如刑公子虔）有史家考辨。"
  },
  {
   "id": "shangjunshu",
   "title": "《商君书》",
   "name": "《商君书》",
   "party": "法家典籍",
   "faction": "fajia",
   "bias_note": "法家变法派自述，系统陈述农战、刑赏、弱民强君之术。"
  },
  {
   "id": "shiji_sy",
   "title": "《史记·商君列传》",
   "name": "《史记·商君列传》",
   "party": "官修史书",
   "faction": "guizu",
   "bias_note": "司马迁记商鞅变法与宗室贵族（甘龙、杜挚、公子虔）之冲突，兼录反对言论。"
  }
 ],
 "places": [
  {
   "id": "xianyang",
   "name": "咸阳",
   "lon": 108.7,
   "lat": 34.33,
   "note": "秦都，变法推行中心",
   "elev": 434
  },
  {
   "id": "yueyang",
   "name": "栎阳",
   "lon": 109.2,
   "lat": 34.5,
   "note": "秦旧都，变法初行处",
   "elev": 398
  }
 ],
 "persons": [
  {
   "id": "shangyang",
   "name": "商鞅",
   "side": "秦",
   "influence": 1,
   "hometown": "卫"
  },
  {
   "id": "xiaogong",
   "name": "秦孝公",
   "side": "秦",
   "influence": 1,
   "hometown": "咸阳"
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_sy_356",
   "subject": "event:sy_356",
   "predicate": "事件",
   "value_text": "商鞅为左庶长，颁垦草、奖军功之法，徙木立信，秦民知令。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -356,
    "end": -356,
    "era_text": "秦孝公六年"
   },
   "place": "yueyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_350",
   "subject": "event:sy_350",
   "predicate": "事件",
   "value_text": "迁都咸阳，废井田、开阡陌，行县制、统一度量，禁父子同室。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -350,
    "end": -350,
    "era_text": "十二年"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_sy_338",
   "subject": "event:sy_338",
   "predicate": "事件",
   "value_text": "秦孝公死，惠文王立，宗室怨鞅，车裂以徇。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -338,
    "end": -338,
    "era_text": "二十四年"
   },
   "place": "xianyang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M46",
   "subject": "event:sy_356",
   "predicate": "变法",
   "value_text": "秦孝公任商鞅变法",
   "time": {
    "era_text": "周显王十三年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "source": "synthesis",
   "quote": "周显王十三年，秦孝公任商鞅变法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "变法事件，subject 用 event:sy_356",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M47",
   "subject": "event:sy_356",
   "predicate": "内容",
   "value_text": "废井田、奖耕战、明法令",
   "time": {
    "era_text": "周显王十三年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "source": "synthesis",
   "quote": "废井田、奖耕战、明法令",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "变法具体措施",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M45",
   "subject": "person:shangyang",
   "predicate": "主持变法",
   "value_text": "商鞅主持变法",
   "time": {
    "era_text": "周显王十三年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "source": "synthesis",
   "quote": "秦孝公任商鞅变法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "商鞅为变法主持者",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M47",
   "subject": "person:xiaogong",
   "predicate": "任用商鞅",
   "value_text": "秦孝公任用商鞅",
   "time": {
    "era_text": "周显王十三年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "source": "synthesis",
   "quote": "秦孝公任商鞅变法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "秦孝公为决策者",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M45",
   "subject": "event:sy_350",
   "predicate": "迁都",
   "value_text": "迁都咸阳",
   "time": {
    "era_text": "周显王十九年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "周显王十九年，迁咸阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "迁都事件，subject 用 event:sy_350",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M44",
   "subject": "event:sy_350",
   "predicate": "行县制",
   "value_text": "行县制",
   "time": {
    "era_text": "周显王十九年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "行县制",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "迁都后推行县制",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M42",
   "subject": "event:sy_350",
   "predicate": "统一度量",
   "value_text": "统一度量衡",
   "time": {
    "era_text": "周显王十九年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "统一度量",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "迁都后统一度量衡",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M42",
   "subject": "event:sy_338",
   "predicate": "国力增强",
   "value_text": "秦骤强",
   "time": {
    "era_text": "周显王十九年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "秦骤强",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "变法迁都后国力增强，subject 用 event:sy_338",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M33",
   "subject": "event:sy_338",
   "predicate": "结果",
   "value_text": "秦国迅速强盛",
   "time": {
    "era_text": "周显王十九年",
    "start": "-350-01-01",
    "end": "-350-12-31",
    "gregorian_year": -350
   },
   "place": "xianyang",
   "source": "synthesis",
   "quote": "秦骤强",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "由原文'秦骤强'合理推断",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SHANGYANGG01",
   "subject": "event:sy_350",
   "predicate": "史料缺环",
   "value_text": "此次改革的推行范围、受阻与实效，赞成与反对两方记载悬殊，相关评估存在缺口。",
   "time": {
    "era_text": "周显王",
    "start": "-355-01-01",
    "end": "-355-12-31",
    "gregorian_year": -355
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "reform",
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
   "id": "SY_FX1",
   "subject": "event:sy_356",
   "predicate": "派系对立",
   "value_text": "商鞅变法废世卿世禄、行军功爵，直接冲击秦国宗室贵族的世袭任官与免役特权，甘龙、杜挚当庭以「不法古而亡」力阻。",
   "source": "shangjunshu",
   "quote": "商君曰：「三代不同礼而王，五霸不同法而霸。」甘龙曰：「圣人不易民而教，知者不变法而治。」",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "layer": "record",
   "time": {
    "era_text": "前356年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "scale": "empire",
   "note": "变法派与旧贵族的首次正面交锋",
   "_party": "法家典籍",
   "_faction": "fajia"
  },
  {
   "id": "SY_FX2",
   "subject": "event:sy_356",
   "predicate": "利益受损",
   "value_text": "太子驷犯法，商鞅谓「法之不行，自上犯之」，刑其傅公子虔、黥其师公孙贾，以贵族之身立威，旧贵族怨谤益甚。",
   "source": "shiji_sy",
   "quote": "太子，君嗣也，不可施刑，刑其傅公子虔，黥其师公孙贾。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "前356年",
    "start": "-356-01-01",
    "end": "-356-12-31",
    "gregorian_year": -356
   },
   "place": "",
   "scale": "empire",
   "note": "以贵族之身立威，激化矛盾",
   "_party": "官修史书",
   "_faction": "guizu"
  },
  {
   "id": "SY_FX3",
   "subject": "event:sy_338",
   "predicate": "反扑",
   "value_text": "秦孝公崩，惠文王立，旧贵族公子虔等告商鞅「欲反」，车裂以徇——改革派领袖死于既得利益集团的政治反扑。",
   "source": "shiji_sy",
   "quote": "秦孝公卒，太子立。公子虔之徒告商君欲反，发吏捕商君……车裂商君以徇。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "layer": "record",
   "time": {
    "era_text": "前338年",
    "start": "-338-01-01",
    "end": "-338-12-31",
    "gregorian_year": -338
   },
   "place": "",
   "scale": "empire",
   "note": "旧贵族借新君即位翻案",
   "_party": "官修史书",
   "_faction": "guizu"
  },
  {
   "id": "SY_FX4",
   "subject": "event:sy_338",
   "predicate": "结构性冲突",
   "value_text": "商鞅之死非个人恩怨，而是耕战集权改革与世袭贵族特权之间的结构性利益冲突；新法因国强而存，其人因触贵而亡。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "layer": "inference",
   "time": {
    "era_text": "前338年",
    "start": "-338-01-01",
    "end": "-338-12-31",
    "gregorian_year": -338
   },
   "place": "",
   "scale": "empire",
   "note": "综合各方记载的因果判断",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SHANGYANGG01"
 ],
 "events": [
  {
   "id": "ev_sy_356",
   "subject": "event:sy_356",
   "year": -356,
   "era": "秦孝公六年",
   "title": "商鞅变法始",
   "kind": "变法",
   "text": "商鞅为左庶长，颁垦草、奖军功之法，徙木立信，秦民知令。",
   "place": "yueyang"
  },
  {
   "id": "ev_sy_350",
   "subject": "event:sy_350",
   "year": -350,
   "era": "十二年",
   "title": "徙都咸阳·再变法",
   "kind": "变法",
   "text": "迁都咸阳，废井田、开阡陌，行县制、统一度量，禁父子同室。",
   "place": "xianyang"
  },
  {
   "id": "ev_sy_338",
   "subject": "event:sy_338",
   "year": -338,
   "era": "二十四年",
   "title": "孝公崩·商鞅车裂",
   "kind": "结局",
   "text": "秦孝公死，惠文王立，宗室怨鞅，车裂以徇。",
   "place": "xianyang"
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
   "法家典籍",
   "官修史书"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "法家典籍": "法家典籍",
   "官修史书": "官修史书"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "法家典籍": "#2e7d32",
   "官修史书": "#6d4c41"
  },
  "legend": {},
  "faction_colors": {
   "fajia": "#2e7d32",
   "guizu": "#8d6e63"
  },
  "factions": {
   "fajia": {
    "name": "法家改革派（商鞅—秦孝公）",
    "period": "秦孝公六年—二十四年（前356—前338）",
    "interest": "以耕战立国、废世卿世禄、行县制与军功爵，打破贵族世袭，强化君权与国力。",
    "key_figures": [
     "商鞅",
     "秦孝公",
     "景监"
    ],
    "typical_sources": [
     "商君书",
     "史记·商君列传"
    ],
    "bias_note": "法家叙事以「强国」为最高善，淡化对宗室贵族权益的冲击；《商君书》对刑赏之严酷自陈不讳，但将阻力统称为「法之不行，自上犯之」。",
    "bases": [
     "卫",
     "雍城",
     "咸阳"
    ],
    "geo_note": "改革理论来自卫人商鞅（客卿），政治靠山为秦君（雍城→咸阳）；代表『君权+外来法术士』对本土贵族。"
   },
   "guizu": {
    "name": "秦国宗室·军功旧贵族",
    "period": "秦孝公—惠文王初",
    "interest": "世袭封君、免役特权与既得政治地位；变法触及其任官与免役垄断，故群起攻之。",
    "key_figures": [
     "甘龙",
     "杜挚",
     "公子虔",
     "太子驷"
    ],
    "typical_sources": [
     "史记·秦本纪",
     "战国策·秦策"
    ],
    "bias_note": "旧贵族立场多见于《史记》转述的反对言论（「不便者亦众」「恐天下之议己」），其完整诉求无专书传世，须据零散记载复原。",
    "bases": [
     "雍城",
     "咸阳"
    ],
    "geo_note": "秦国宗室与军功旧贵族，根基在秦都本土（雍城旧都、咸阳新都）。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "巴蜀（初设蜀郡）",
     "determination": "genuine_gap",
     "note": "变法时巴蜀初并入秦，尚未形成本土利益代言，属新拓边疆，无独立派系。"
    },
    {
     "region": "东方六国",
     "determination": "not_applicable",
     "note": "此争为秦国内争，六国非场景范围，不强行标注。"
    }
   ]
  }
 }
};
