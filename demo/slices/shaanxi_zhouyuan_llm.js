// 本文件由 tools/build.py 自动生成（切片 shaanxi_zhouyuan_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shaanxi_zhouyuan_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shaanxi_zhouyuan_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "周原与西周封建肇基（西周）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "qi",
  "dossier_event": "event:ev_shaanxi_zhouyuan_llm_01",
  "vocab_pack": "inline:shaanxi_zhouyuan_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "guangzhong",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "周原与西周封建肇基（西周）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "周原与西周封建肇基（西周）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "周原与西周封建肇基（西周）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     6,
     5
    ],
    "layer": "inference",
    "note": "周原与西周封建肇基（西周）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   5,
   6
  ],
  "page": "county.html?scene=shaanxi_zhouyuan_llm",
  "key": "shaanxi_zhouyuan_llm",
  "scene_id": "shaanxi_zhouyuan_llm"
 },
 "sources": [
  {
   "id": "shaanxi_zhouyuan_src",
   "title": "诗·大雅·绵 / 尚书·周官",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "毛亨传",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "zhouyuan",
   "name": "周原",
   "type": "region",
   "modern": "今中国陕西岐山、扶风",
   "note": "周人新都所在",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 107.9,
   "lat": 34.4,
   "geo_note": "今陕西岐山、扶风周原",
   "elev": 588
  },
  {
   "id": "guanzhong",
   "name": "关中",
   "type": "region",
   "modern": "今中国陕西中部",
   "note": "周室根本",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.9,
   "lat": 34.3,
   "geo_note": "今陕西中部关中平原代表点",
   "elev": 383
  },
  {
   "id": "qi",
   "name": "邰",
   "type": "city",
   "modern": "今中国陕西武功",
   "note": "周人旧都",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.2,
   "lat": 34.3,
   "geo_note": "今陕西武功（后稷封邰）",
   "elev": 479
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "古公亶父",
   "role": "周族首领",
   "note": "自邰迁岐，营建周原",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "周文王",
   "role": "周族首领",
   "note": "演易，奠基灭商",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SHA__p03",
   "name": "周武王",
   "role": "周朝开国君主",
   "note": "伐纣灭商，封建亲戚",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shaanxi_zhouyuan_llm_01",
   "predicate": "迁都",
   "value_text": "古公亶父自邰迁岐",
   "time": {
    "era_text": "商代晚期",
    "start": "-1200"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "周人自邰迁岐",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周人自邰迁岐",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "place:zhouyuan",
   "predicate": "地理特征",
   "value_text": "周原膴膴，堇荼如饴",
   "time": {
    "era_text": "商代晚期",
    "start": "-1200"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "周原膴膴，堇荼如饴",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周原膴膴，堇荼如饴",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "person:SHA__p02",
   "predicate": "活动",
   "value_text": "文王在周原演易",
   "time": {
    "era_text": "商代晚期",
    "start": "-1100"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "文王演易",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文王演易",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "event:ev_shaanxi_zhouyuan_llm_03",
   "predicate": "战役结果",
   "value_text": "武王伐纣灭商",
   "time": {
    "era_text": "周武王四年",
    "start": "-1043-01-01",
    "end": "-1043-12-31",
    "gregorian_year": -1043
   },
   "place": "guanzhong",
   "source": "shaanxi_zhouyuan_src",
   "quote": "武王伐纣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武王伐纣",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "event:ev_shaanxi_zhouyuan_llm_03",
   "predicate": "制度影响",
   "value_text": "封建亲戚，以蕃屏周",
   "time": {
    "era_text": "周初",
    "start": "-1046"
   },
   "place": "guanzhong",
   "source": "shaanxi_zhouyuan_src",
   "quote": "封建亲戚，以蕃屏周",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "封建亲戚，以蕃屏周",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "place:guanzhong",
   "predicate": "地位",
   "value_text": "关中为周室根本",
   "time": {
    "era_text": "西周",
    "start": "-1046"
   },
   "place": "guanzhong",
   "source": "shaanxi_zhouyuan_src",
   "quote": "关中遂为周室根本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关中遂为周室根本",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:zhouyuan",
   "predicate": "制度起源",
   "value_text": "宗法井田礼乐肇始",
   "time": {
    "era_text": "西周",
    "start": "-1046"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "宗法、井田、礼乐之制肇于此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    5
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宗法、井田、礼乐之制肇于此",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "event:ev_shaanxi_zhouyuan_llm_01",
   "predicate": "迁都原因",
   "value_text": "周原肥沃适宜发展",
   "time": {
    "era_text": "商代晚期",
    "start": "-1200"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "周原膴膴",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周原膴膴",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shaanxi_zhouyuan_llm_03",
   "predicate": "战役性质",
   "value_text": "灭商之战，建立周朝",
   "time": {
    "era_text": "周武王四年",
    "start": "-1043-01-01",
    "end": "-1043-12-31",
    "gregorian_year": -1043
   },
   "place": "guanzhong",
   "source": "shaanxi_zhouyuan_src",
   "quote": "武王伐纣",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武王伐纣",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "person:SHA__p03",
   "predicate": "政策",
   "value_text": "封建亲戚，以蕃屏周",
   "time": {
    "era_text": "周初",
    "start": "-1046"
   },
   "place": "guanzhong",
   "source": "shaanxi_zhouyuan_src",
   "quote": "封建亲戚，以蕃屏周",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "封建亲戚，以蕃屏周",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:zhouyuan",
   "predicate": "考古发现",
   "value_text": "周原遗址有青铜器",
   "time": {
    "era_text": "现代",
    "start": "1950"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "周原遗址",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "考古证实",
   "dims": [
    1,
    2
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周原遗址",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "event:ev_shaanxi_zhouyuan_llm_02",
   "predicate": "文化影响",
   "value_text": "周易成书于周原",
   "time": {
    "era_text": "商代晚期",
    "start": "-1100"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "文王演易",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "文王演易",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "place:zhouyuan",
   "predicate": "都城性质",
   "value_text": "周原为西周都城",
   "time": {
    "era_text": "西周",
    "start": "-1046"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "周原",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "学界共识",
   "dims": [
    1,
    3
   ],
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周原",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "event:ev_shaanxi_zhouyuan_llm_01",
   "predicate": "迁都时间",
   "value_text": "具体年代不详",
   "time": {
    "era_text": "商代晚期",
    "start": "-1200"
   },
   "place": "zhouyuan",
   "source": "shaanxi_zhouyuan_src",
   "quote": "古公亶父",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "缺乏精确纪年",
   "dims": [
    6
   ],
   "lead": {
    "where": "周原遗址考古地层",
    "skills": [
     "碳十四测年",
     "考古类型学"
    ],
    "accept": "确定迁岐年代"
   },
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "古公亶父",
   "source_text": "周人自邰迁岐，『周原膴膴，堇荼如饴』（诗·绵）。古公亶父营周原，文王演易，武王伐纣，『封建亲戚，以蕃屏周』，宗法、井田、礼乐之制肇于此，关中遂为周室根本。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_014"
 ],
 "events": [
  {
   "id": "ev_shaanxi_zhouyuan_llm_01",
   "subject": "event:ev_shaanxi_zhouyuan_llm_01",
   "year": -1200,
   "era": "商代晚期",
   "title": "古公迁岐",
   "kind": "建置",
   "text": "古公亶父率周人迁居周原",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shaanxi_zhouyuan_llm_02",
   "subject": "event:ev_shaanxi_zhouyuan_llm_02",
   "year": -1100,
   "era": "商代晚期",
   "title": "文王演易",
   "kind": "其他",
   "text": "文王在周原演周易",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shaanxi_zhouyuan_llm_03",
   "subject": "event:ev_shaanxi_zhouyuan_llm_03",
   "year": -1046,
   "era": "周武王四年",
   "title": "武王伐纣",
   "kind": "战事",
   "text": "武王灭商，建立周朝",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "qi",
   "to": "zhouyuan",
   "type": "military",
   "label": "周人迁岐路线",
   "_source_idx": 0,
   "_source_name": "诗·大雅·绵 / 尚书·周官",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "zhouyuan",
   "party": "后世官修",
   "start": -1043,
   "end": 1950,
   "timeline": "main"
  },
  {
   "place_id": "guanzhong",
   "party": "后世官修",
   "start": -1043,
   "end": 1950,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "zhouyuan",
   "name": "周原",
   "lon": 107.9,
   "lat": 34.4,
   "region": "guangzhong"
  },
  {
   "place_id": "guanzhong",
   "name": "关中",
   "lon": 108.9,
   "lat": 34.3,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  -1043,
  1950
 ],
 "vocab": {
  "layers": {
   "record": "原始史料",
   "scholarship": "学界研究",
   "inference": "合理推断",
   "gap": "证据缺口"
  },
  "quote_status": {
   "verbatim": "直接引文",
   "paraphrase_unverified": "转述待核",
   "generated": "生成"
  },
  "parties": [
   "后世官修"
  ],
  "party_bucket": {
   "后世官修": "后世官修"
  },
  "party_colors": {
   "后世官修": "#A0473A"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        106.9,
        33.3
       ],
       [
        106.9,
        35.4
       ],
       [
        109.9,
        35.4
       ],
       [
        109.9,
        33.3
       ],
       [
        106.9,
        33.3
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.9,
         33.3
        ],
        [
         109.9,
         35.4
        ],
        [
         108.625,
         35.4
        ],
        [
         108.61,
         35.355
        ],
        [
         108.615,
         35.329
        ],
        [
         108.583,
         35.295
        ],
        [
         108.547,
         35.305
        ],
        [
         108.489,
         35.275
        ],
        [
         108.361,
         35.28
        ],
        [
         108.345,
         35.301
        ],
        [
         108.297,
         35.268
        ],
        [
         108.239,
         35.256
        ],
        [
         108.222,
         35.297
        ],
        [
         108.175,
         35.305
        ],
        [
         108.095,
         35.28
        ],
        [
         108.049,
         35.254
        ],
        [
         107.95,
         35.245
        ],
        [
         107.96,
         35.263
        ],
        [
         107.867,
         35.256
        ],
        [
         107.842,
         35.277
        ],
        [
         107.746,
         35.312
        ],
        [
         107.737,
         35.267
        ],
        [
         107.667,
         35.257
        ],
        [
         107.652,
         35.245
        ],
        [
         107.686,
         35.218
        ],
        [
         107.716,
         35.168
        ],
        [
         107.728,
         35.12
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.847,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.842,
         34.979
        ],
        [
         107.742,
         34.954
        ],
        [
         107.675,
         34.951
        ],
        [
         107.639,
         34.935
        ],
        [
         107.62,
         34.965
        ],
        [
         107.564,
         34.969
        ],
        [
         107.524,
         34.91
        ],
        [
         107.455,
         34.917
        ],
        [
         107.401,
         34.933
        ],
        [
         107.369,
         34.918
        ],
        [
         107.35,
         34.934
        ],
        [
         107.287,
         34.932
        ],
        [
         107.253,
         34.881
        ],
        [
         107.189,
         34.893
        ],
        [
         107.162,
         34.944
        ],
        [
         107.12,
         34.95
        ],
        [
         107.09,
         34.977
        ],
        [
         107.083,
         35.024
        ],
        [
         107.013,
         35.03
        ],
        [
         106.991,
         35.068
        ],
        [
         106.95,
         35.067
        ],
        [
         106.902,
         35.095
        ],
        [
         106.9,
         35.094
        ],
        [
         106.9,
         33.3
        ],
        [
         109.9,
         33.3
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         106.9,
         35.4
        ],
        [
         106.9,
         35.094
        ],
        [
         106.902,
         35.095
        ],
        [
         106.95,
         35.067
        ],
        [
         106.991,
         35.068
        ],
        [
         107.013,
         35.03
        ],
        [
         107.083,
         35.024
        ],
        [
         107.09,
         34.977
        ],
        [
         107.12,
         34.95
        ],
        [
         107.162,
         34.944
        ],
        [
         107.189,
         34.893
        ],
        [
         107.253,
         34.881
        ],
        [
         107.287,
         34.932
        ],
        [
         107.35,
         34.934
        ],
        [
         107.369,
         34.918
        ],
        [
         107.401,
         34.933
        ],
        [
         107.455,
         34.917
        ],
        [
         107.524,
         34.91
        ],
        [
         107.564,
         34.969
        ],
        [
         107.62,
         34.965
        ],
        [
         107.639,
         34.935
        ],
        [
         107.675,
         34.951
        ],
        [
         107.742,
         34.954
        ],
        [
         107.842,
         34.979
        ],
        [
         107.863,
         34.999
        ],
        [
         107.847,
         35.025
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.77,
         35.064
        ],
        [
         107.728,
         35.12
        ],
        [
         107.716,
         35.168
        ],
        [
         107.686,
         35.218
        ],
        [
         107.652,
         35.245
        ],
        [
         107.667,
         35.257
        ],
        [
         107.737,
         35.267
        ],
        [
         107.746,
         35.312
        ],
        [
         107.842,
         35.277
        ],
        [
         107.867,
         35.256
        ],
        [
         107.96,
         35.263
        ],
        [
         107.95,
         35.245
        ],
        [
         108.049,
         35.254
        ],
        [
         108.095,
         35.28
        ],
        [
         108.175,
         35.305
        ],
        [
         108.222,
         35.297
        ],
        [
         108.239,
         35.256
        ],
        [
         108.297,
         35.268
        ],
        [
         108.345,
         35.301
        ],
        [
         108.361,
         35.28
        ],
        [
         108.489,
         35.275
        ],
        [
         108.547,
         35.305
        ],
        [
         108.583,
         35.295
        ],
        [
         108.615,
         35.329
        ],
        [
         108.61,
         35.355
        ],
        [
         108.625,
         35.4
        ],
        [
         106.9,
         35.4
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   106.9,
   33.3,
   109.9,
   35.4
  ]
 }
};
