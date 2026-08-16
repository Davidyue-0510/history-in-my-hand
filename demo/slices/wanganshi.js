// 本文件由 tools/build.py 自动生成（切片 wanganshi），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wanganshi"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wanganshi"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "王安石变法",
  "dossier_label": "王安石变法",
  "subtitle": "1069—1085 · 宋神宗时",
  "primary_place": "kaifeng",
  "dossier_event": "event:wa_1069",
  "terrain_grid": "china_coarse",
  "lead": "王安石任参知政事，行青苗、募役、市易、保甲诸法，意在富国强兵；新旧党争由此起，1085 神宗崩、哲宗立，新法渐废。",
  "parties_note": "新法利弊争议千年，司马光等旧党力诋；此处综合《宋史》与近代研究，不偏一方。",
  "subject_names": {
   "person:wanganshi": "王安石",
   "person:simaguang": "司马光"
  },
  "page": "county.html?scene=wanganshi",
  "key": "wanganshi",
  "scene_id": "wanganshi",
  "vocab_pack": "inline:wanganshi"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "王安石变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "新法利弊争议千年，司马光等旧党力诋；此处综合《宋史》与近代研究，不偏一方。"
  },
  {
   "id": "lin_chuan_ji",
   "title": "《临川先生文集》",
   "name": "《临川先生文集》",
   "party": "新党文献",
   "faction": "xindang",
   "bias_note": "王安石自著，系统陈述变法理念与理财主张。"
  },
  {
   "id": "wen_gong_ji",
   "title": "《温国文正司马公文集》",
   "name": "《温国文正司马公文集》",
   "party": "旧党文献",
   "faction": "jiudang",
   "bias_note": "司马光奏议，力陈新法之弊、请废诸法。"
  }
 ],
 "places": [
  {
   "id": "kaifeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京，变法中枢",
   "elev": 76
  }
 ],
 "persons": [
  {
   "id": "wanganshi",
   "name": "王安石",
   "side": "新党",
   "influence": 1,
   "hometown": "临川"
  },
  {
   "id": "simaguang",
   "name": "司马光",
   "side": "旧党",
   "influence": 0,
   "hometown": "夏县"
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wa_1069",
   "subject": "event:wa_1069",
   "predicate": "事件",
   "value_text": "王安石任参知政事，设制置三司条例司，颁青苗法，变法启动。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1069,
    "end": 1069,
    "era_text": "熙宁二年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wa_1070",
   "subject": "event:wa_1070",
   "predicate": "事件",
   "value_text": "王安石拜相，行募役、市易、保甲、农田水利诸法，朝廷分裂新旧党。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1070,
    "end": 1070,
    "era_text": "三年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wa_1085",
   "subject": "event:wa_1085",
   "predicate": "事件",
   "value_text": "神宗崩、哲宗立，高太后用司马光，新法次第罢废（「元祐更化」）。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1085,
    "end": 1085,
    "era_text": "元丰八年"
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M47",
   "subject": "event:wa_1069",
   "predicate": "开始变法",
   "value_text": "熙宁二年王安石任参知政事，行新法",
   "time": {
    "era_text": "熙宁二年",
    "start": "1069-01-01",
    "end": "1069-12-31",
    "gregorian_year": 1069
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "熙宁二年，宋神宗任王安石参知政事",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M48",
   "subject": "event:wa_1069",
   "predicate": "推行新法",
   "value_text": "行青苗、募役、农田水利、保甲诸法",
   "time": {
    "era_text": "熙宁二年",
    "start": "1069-01-01",
    "end": "1069-12-31",
    "gregorian_year": 1069
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "行青苗、募役、农田水利、保甲诸法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M46",
   "subject": "person:wanganshi",
   "predicate": "任职",
   "value_text": "任参知政事",
   "time": {
    "era_text": "熙宁二年",
    "start": "1069-01-01",
    "end": "1069-12-31",
    "gregorian_year": 1069
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "宋神宗任王安石参知政事",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M48",
   "subject": "event:wa_1070",
   "predicate": "罢相",
   "value_text": "熙宁七年罢相",
   "time": {
    "era_text": "熙宁七年",
    "start": "1074-01-01",
    "end": "1074-12-31",
    "gregorian_year": 1074
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "熙宁七年罢相",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M46",
   "subject": "event:wa_1070",
   "predicate": "新法渐弛",
   "value_text": "新法渐弛",
   "time": {
    "era_text": "熙宁七年",
    "start": "1074-01-01",
    "end": "1074-12-31",
    "gregorian_year": 1074
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "新法渐弛",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M45",
   "subject": "event:wa_1085",
   "predicate": "后续影响",
   "value_text": "新法渐弛后未明述结局",
   "time": {
    "era_text": "熙宁七年",
    "start": "1074-01-01",
    "end": "1074-12-31",
    "gregorian_year": 1074
   },
   "place": "kaifeng",
   "source": "synthesis",
   "quote": "新法渐弛",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "原文未述新法最终废止时间，需进一步史料",
   "lead": {
    "where": "event:wa_1085",
    "skills": [
     "史料考据"
    ],
    "accept": "补充新法废止的具体时间与过程"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WANGANSHIG01",
   "subject": "event:wa_1069",
   "predicate": "史料缺环",
   "value_text": "此次改革的推行范围、受阻与实效，赞成与反对两方记载悬殊，相关评估存在缺口。",
   "time": {
    "era_text": "熙宁",
    "start": "1069-01-01",
    "end": "1069-12-31",
    "gregorian_year": 1069
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
   "id": "WA_FX1",
   "subject": "event:wa_1069",
   "predicate": "路线对立",
   "value_text": "王安石任参知政事推行新法，司马光等以「祖宗之法不可变」「财利之事非所以示天下」力阻，熙宁党争自此开幕。",
   "source": "wen_gong_ji",
   "quote": "光曰：「祖宗之法不可变也。」安石曰：「变法度以治天下，何为不可？」",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "layer": "record",
   "time": {
    "era_text": "公元1069年",
    "start": "1069-01-01",
    "end": "1069-12-31",
    "gregorian_year": 1069
   },
   "place": "",
   "scale": "empire",
   "note": "新党与旧党的首次正面论战",
   "_party": "旧党文献",
   "_faction": "jiudang"
  },
  {
   "id": "WA_FX2",
   "subject": "event:wa_1070",
   "predicate": "制度博弈",
   "value_text": "王安石拜相全面推行诸法，旧党要员韩琦、富弼、苏轼等连章攻讦，或黜或贬；变法派借神宗乾纲独断压制异议，两党更替用事。",
   "source": "lin_chuan_ji",
   "quote": "（安石）上《三经新义》，一道德、同风俗。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "公元1070年",
    "start": "1070-01-01",
    "end": "1070-12-31",
    "gregorian_year": 1070
   },
   "place": "",
   "scale": "empire",
   "note": "皇权+新党 vs 官僚地主旧党的角力",
   "_party": "新党文献",
   "_faction": "xindang"
  },
  {
   "id": "WA_FX3",
   "subject": "event:wa_1085",
   "predicate": "反扑与反复",
   "value_text": "神宗崩、哲宗立，太皇太后高氏主政，旧党尽废新法（元祐更化）；及哲宗亲政复行新法（绍圣绍述）——党争由政见之争滑向意气与权位之争，延及北宋亡。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.65,
   "layer": "inference",
   "time": {
    "era_text": "公元1085年",
    "start": "1085-01-01",
    "end": "1085-12-31",
    "gregorian_year": 1085
   },
   "place": "",
   "scale": "empire",
   "note": "党争周期往复，拖累国势",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "SX006_M45",
  "WANGANSHIG01"
 ],
 "events": [
  {
   "id": "ev_wa_1069",
   "subject": "event:wa_1069",
   "year": 1069,
   "era": "熙宁二年",
   "title": "王安石执政·变法始",
   "kind": "变法",
   "text": "王安石任参知政事，设制置三司条例司，颁青苗法，变法启动。",
   "place": "kaifeng"
  },
  {
   "id": "ev_wa_1070",
   "subject": "event:wa_1070",
   "year": 1070,
   "era": "三年",
   "title": "任宰相·推诸法",
   "kind": "变法",
   "text": "王安石拜相，行募役、市易、保甲、农田水利诸法，朝廷分裂新旧党。",
   "place": "kaifeng"
  },
  {
   "id": "ev_wa_1085",
   "subject": "event:wa_1085",
   "year": 1085,
   "era": "元丰八年",
   "title": "神宗崩·新法废",
   "kind": "结局",
   "text": "神宗崩、哲宗立，高太后用司马光，新法次第罢废（「元祐更化」）。",
   "place": "kaifeng"
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
   "新党文献",
   "旧党文献"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "新党文献": "新党文献",
   "旧党文献": "旧党文献"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "新党文献": "#c0392b",
   "旧党文献": "#2980b9"
  },
  "legend": {},
  "faction_colors": {
   "xindang": "#c0392b",
   "jiudang": "#2980b9"
  },
  "factions": {
   "xindang": {
    "name": "新党（熙丰变法派）",
    "period": "熙宁—元丰（公元1069—1085）",
    "interest": "以「强兵富国」为号，行青苗、募役、市易、保甲诸法，强化中央财政与皇权对社会的直接控制；倚神宗支持压制反对。",
    "key_figures": [
     "王安石",
     "宋神宗",
     "吕惠卿",
     "蔡京",
     "章惇"
    ],
    "typical_sources": [
     "临川先生文集",
     "宋会要辑稿"
    ],
    "bias_note": "新党文献以「理财整军、雪耻强宋」为叙事主轴，将反对者归类为因循守旧、阻挠恢复。",
    "bases": [
     "临川",
     "泉州",
     "浦城",
     "仙游",
     "南丰"
    ],
    "geo_note": "新党多东南士人：王安石（临川/江西）、吕惠卿（泉州/福建）、章惇（浦城/福建）、蔡京（仙游/福建）、曾布（南丰/江西）——江南福建集团。"
   },
   "jiudang": {
    "name": "旧党（元祐更化派）",
    "period": "熙宁—元祐",
    "interest": "以司马光、文彦博为首，主张「祖宗之法不可变」，维护官僚—大地主既有的免役、差役与财政格局，反对国家深度介入民生。",
    "key_figures": [
     "司马光",
     "文彦博",
     "苏轼",
     "韩琦",
     "程颢"
    ],
    "typical_sources": [
     "温国文正司马公文集",
     "续资治通鉴长编（李焘所引旧党奏议）"
    ],
    "bias_note": "旧党著述强调「与民休息、防苛政」，对新法扰民、聚敛之弊多有指摘；其维护的亦是士大夫—地主阶层利益。",
    "bases": [
     "夏县",
     "介休",
     "安阳",
     "眉山",
     "洛阳"
    ],
    "geo_note": "旧党多中原—蜀士人：司马光（夏县/山西）、文彦博（介休/山西）、韩琦（安阳/河南）、苏轼（眉山/四川）、二程（洛阳/河南）——中原与蜀地联盟。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "关中/陕西",
     "determination": "affiliate:jiudang",
     "note": "宋关中士人稀少（唐末战乱后北方重心东移），多附洛阳旧党交游圈，无独立地域派系。"
    },
    {
     "region": "广南（岭南）",
     "determination": "genuine_gap",
     "note": "远疆，非党争核心；苏轼贬惠儋属被动流放，非本土代言。"
    },
    {
     "region": "湖湘",
     "determination": "genuine_gap",
     "note": "北宋党争期湖湘未出显著人才，南宋胡安国/岳飞方兴，此期 genuine_gap。"
    }
   ]
  }
 }
};
