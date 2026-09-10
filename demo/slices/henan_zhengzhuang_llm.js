// 本文件由 tools/build.py 自动生成（切片 henan_zhengzhuang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["henan_zhengzhuang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["henan_zhengzhuang_llm"] = {
 "meta": {
  "kind": "court",
  "region": "huabei",
  "province": "henan",
  "title": "郑庄公小霸与王纲解纽（春秋）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "zheng",
  "dossier_event": "event:ev_henan_zhengzhuang_llm_01",
  "vocab_pack": "inline:henan_zhengzhuang_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "spring_autumn",
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
    "note": "郑庄公小霸与王纲解纽（春秋）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "郑庄公小霸与王纲解纽（春秋）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "郑庄公小霸与王纲解纽（春秋）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "郑庄公小霸与王纲解纽（春秋）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=henan_zhengzhuang_llm",
  "key": "henan_zhengzhuang_llm",
  "scene_id": "henan_zhengzhuang_llm"
 },
 "sources": [
  {
   "id": "henan_zhengzhuang_src",
   "title": "左传·隐公 / 郑伯克段于鄢",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "左丘明传",
   "period": "春秋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "yan",
   "name": "鄢",
   "type": "city",
   "modern": "今中国河南省鄢陵县",
   "note": "共叔段败逃之地。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "zheng",
   "name": "郑",
   "type": "region",
   "modern": "今中国河南省新郑市一带",
   "note": "郑国都城所在。坐标据地名志条目（别名 郑→新郑），标 approx。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 113.73,
   "lat": 34.41,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 郑→新郑）（诚实回填 v0.221）。",
   "elev": 103
  },
  {
   "id": "xuge",
   "name": "繻葛",
   "type": "fortress",
   "modern": "今中国河南省长葛市",
   "note": "周郑交战之地。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HEN__p01",
   "name": "郑庄公",
   "role": "郑国国君",
   "note": "名寤生，春秋初期郑国君主，开创小霸局面。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 3
  },
  {
   "id": "HEN__p02",
   "name": "周桓王",
   "role": "东周天子",
   "note": "繻葛之战中被郑军射中肩膀，王权衰落标志。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "HEN__p03",
   "name": "共叔段",
   "role": "郑庄公之弟",
   "note": "封于京，叛乱被庄公击败于鄢。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HEN__p04",
   "name": "武姜",
   "role": "郑庄公之母",
   "note": "偏爱共叔段，与庄公不和，后黄泉见母。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HEN_001",
   "subject": "event:ev_henan_zhengzhuang_llm_01",
   "predicate": "事件性质",
   "value_text": "郑庄公平定共叔段叛乱",
   "time": {
    "era_text": "鲁隐公元年",
    "start": "-722-01-01",
    "end": "-722-12-31",
    "gregorian_year": -722
   },
   "place": "yan",
   "source": "henan_zhengzhuang_src",
   "quote": "克段于鄢",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "克段于鄢",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_002",
   "subject": "person:HEN__p01",
   "predicate": "母子关系",
   "value_text": "黄泉见母，母子隙平",
   "time": {
    "era_text": "鲁隐公元年",
    "start": "-722-01-01",
    "end": "-722-12-31",
    "gregorian_year": -722
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "黄泉见母",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "黄泉见母",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_003",
   "subject": "event:ev_henan_zhengzhuang_llm_02",
   "predicate": "外交事件",
   "value_text": "周郑互换人质，王纲解纽",
   "time": {
    "era_text": "鲁隐公三年",
    "start": "-720-01-01",
    "end": "-720-12-31",
    "gregorian_year": -720
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "周郑交质",
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
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周郑交质",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_004",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "战役结果",
   "value_text": "郑军射周桓王中肩",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "射王中肩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "射王中肩",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_005",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "历史意义",
   "value_text": "王纲解纽，诸侯恣行",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "王纲解纽",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后世史家评述",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王纲解纽",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_006",
   "subject": "person:HEN__p01",
   "predicate": "历史地位",
   "value_text": "郑庄公为春秋小霸",
   "time": {
    "era_text": "春秋初期",
    "start": "-770"
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "郑遂为春秋小霸",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑遂为春秋小霸",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_007",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "周军伤亡",
   "value_text": "周师败绩，桓王中箭",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "射王中肩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "射王中肩",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_008",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "郑军战术",
   "value_text": "鱼丽之阵，先击周师",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "鱼丽之阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "左传记载",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鱼丽之阵",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_009",
   "subject": "person:HEN__p02",
   "predicate": "王权衰落",
   "value_text": "周天子威信扫地",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "王纲解纽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王纲解纽",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_010",
   "subject": "person:HEN__p01",
   "predicate": "政治策略",
   "value_text": "假命伐宋，扩张势力",
   "time": {
    "era_text": "鲁隐公十年",
    "start": "-713-01-01",
    "end": "-713-12-31",
    "gregorian_year": -713
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "以王命讨不庭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以王命讨不庭",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_011",
   "subject": "event:ev_henan_zhengzhuang_llm_01",
   "predicate": "事件性质",
   "value_text": "郑庄公纵弟骄横",
   "time": {
    "era_text": "鲁隐公元年",
    "start": "-722-01-01",
    "end": "-722-12-31",
    "gregorian_year": -722
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "多行不义必自毙",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "左传评论",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "多行不义必自毙",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_012",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "战役影响",
   "value_text": "东周衰微之肇始",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "东周之衰肇见",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "东周之衰肇见",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_013",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "predicate": "周军兵力",
   "value_text": "周联军伐郑兵力不详",
   "time": {
    "era_text": "鲁桓公五年",
    "start": "-707-01-01",
    "end": "-707-12-31",
    "gregorian_year": -707
   },
   "place": "xuge",
   "source": "henan_zhengzhuang_src",
   "quote": "王以诸侯伐郑",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载具体兵力",
   "dims": [
    2
   ],
   "lead": {
    "where": "左传、史记相关篇章",
    "skills": [
     "军事史",
     "文献考据"
    ],
    "accept": "周联军具体兵力数字"
   },
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王以诸侯伐郑",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HEN_014",
   "subject": "person:HEN__p01",
   "predicate": "继位合法性",
   "value_text": "寤生继位存争议",
   "time": {
    "era_text": "郑武公二十七年",
    "start": "-744"
   },
   "place": "zheng",
   "source": "henan_zhengzhuang_src",
   "quote": "庄公寤生",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "寤生含义有异说",
   "dims": [
    4
   ],
   "lead": {
    "where": "春秋经传集解",
    "skills": [
     "训诂学",
     "先秦史"
    ],
    "accept": "寤生确切含义"
   },
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "庄公寤生",
   "source_text": "郑庄公寤生，『黄泉见母』平母子隙，克段于鄢。『周郑交质』，繻葛之战（前七〇七）『射王中肩』，王纲解纽，郑遂为春秋小霸，『诸侯恣行，政由方伯』之始，东周之衰肇见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_henan_zhengzhuang_llm_01|事件性质",
   "subject": "event:ev_henan_zhengzhuang_llm_01",
   "predicate": "事件性质",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "HEN_001",
    "HEN_011"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "HEN_013",
  "HEN_014"
 ],
 "events": [
  {
   "id": "ev_henan_zhengzhuang_llm_01",
   "subject": "event:ev_henan_zhengzhuang_llm_01",
   "year": -722,
   "era": "鲁隐公元年",
   "title": "克段于鄢",
   "kind": "战事",
   "text": "郑庄公平定共叔段叛乱。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_henan_zhengzhuang_llm_02",
   "subject": "event:ev_henan_zhengzhuang_llm_02",
   "year": -720,
   "era": "鲁隐公三年",
   "title": "周郑交质",
   "kind": "外交",
   "text": "周郑互换人质，王权开始下移。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_henan_zhengzhuang_llm_03",
   "subject": "event:ev_henan_zhengzhuang_llm_03",
   "year": -707,
   "era": "鲁桓公五年",
   "title": "繻葛之战",
   "kind": "战事",
   "text": "郑庄公击败周桓王，射王中肩。",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "zheng",
   "to": "yan",
   "type": "military",
   "label": "庄公伐段路线",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "zheng",
   "to": "xuge",
   "type": "battle",
   "label": "郑军迎击周师",
   "_source_idx": 0,
   "_source_name": "左传·隐公 / 郑伯克段于鄢",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "yan",
   "party": "后世官修",
   "start": -722,
   "end": -707,
   "timeline": "main"
  },
  {
   "place_id": "zheng",
   "party": "后世官修",
   "start": -722,
   "end": -707,
   "timeline": "main"
  },
  {
   "place_id": "xuge",
   "party": "后世官修",
   "start": -722,
   "end": -707,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "zheng",
   "name": "郑",
   "lon": 113.73,
   "lat": 34.41,
   "region": "huabei"
  }
 ],
 "control_years": [
  -722,
  -707
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
        112.73,
        33.41
       ],
       [
        112.73,
        35.41
       ],
       [
        114.73,
        35.41
       ],
       [
        114.73,
        33.41
       ],
       [
        112.73,
        33.41
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
         112.73,
         35.41
        ],
        [
         112.73,
         35.207
        ],
        [
         112.773,
         35.208
        ],
        [
         112.822,
         35.258
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.164,
         35.41
        ],
        [
         113.182,
         35.41
        ],
        [
         113.185,
         35.409
        ],
        [
         113.186,
         35.41
        ],
        [
         112.73,
         35.41
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.73,
         33.41
        ],
        [
         114.73,
         33.41
        ],
        [
         114.73,
         35.41
        ],
        [
         113.186,
         35.41
        ],
        [
         113.185,
         35.409
        ],
        [
         113.182,
         35.41
        ],
        [
         113.164,
         35.41
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.822,
         35.258
        ],
        [
         112.773,
         35.208
        ],
        [
         112.73,
         35.207
        ],
        [
         112.73,
         33.41
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.73,
        34.836
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.73,
        34.948
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.73,
   33.41,
   114.73,
   35.41
  ]
 }
};
