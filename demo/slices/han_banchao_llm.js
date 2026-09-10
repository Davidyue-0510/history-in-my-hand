// 本文件由 tools/build.py 自动生成（切片 han_banchao_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["han_banchao_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["han_banchao_llm"] = {
 "meta": {
  "kind": "frontier",
  "scale_tier": "strategic",
  "region": "xibei",
  "province": "xinjiang",
  "title": "班超经营西域（LLM 抽取·人工校订）",
  "dossier_label": "班超经营西域（LLM 抽取落库）",
  "subtitle": "永平十六年—永元十四年（73–102）· 汉 vs 匈奴",
  "primary_place": "shule",
  "dossier_event": "ev_han_banchao_llm_01",
  "vocab_pack": "inline:han_banchao_llm",
  "terrain_grid": "china_coarse",
  "lead": "班超经营西域（73–102）：东汉明帝永平十六年班超率三十六骑出使西域，镇抚鄯善、于阗、疏勒，袭杀匈奴使者；章帝时坚守疏勒，和帝永元三年（91年）任西域都护，重通西域五十余国，遣甘英使大秦至条支临海而还。本切片为『真实 LLM 抽取（DeepSeek-chat）+ 人工校订落库』：LLM 依《后汉书·班超传》概述抽取断言，curate 报 BLOCK 0，人工补控制层（汉方 control 西域诸国）与战略四维（inference）。引文全 paraphrase_unverified；来源《后汉书》为南朝宋范晔官修，归『后世官修』；控制层『汉方』。",
  "parties_note": "《后汉书·班超传》为南朝宋范晔官修，去汉已远，叙事整合前史，归『后世官修』；班超以汉廷使节身份经营，控制层『汉方』即东汉。系统不裁决，只并列。",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "subject_names": {
   "person:HAN__p01": "班超",
   "person:HAN__p02": "甘英",
   "person:HAN__p03": "鄯善王",
   "person:HAN__p04": "于阗王",
   "person:HAN__p05": "疏勒王",
   "person:HAN__p06": "匈奴使者",
   "event:ev_han_banchao_llm_01": "班超使西域",
   "event:ev_han_banchao_llm_02": "袭杀匈奴使者",
   "event:ev_han_banchao_llm_03": "任西域都护",
   "event:ev_han_banchao_llm_04": "甘英使大秦",
   "place:shanshan": "鄯善",
   "place:yutian": "于阗",
   "place:shule": "疏勒",
   "place:tiaozhi": "条支",
   "place:dajin": "大秦"
  },
  "epoch": "han",
  "strategic": {
   "political_cohesion": {
    "from": [
     "society",
     "anchors"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "汉以孤军维系西域朝贡体系，巩固西部边疆"
   },
   "material_logistics": {
    "from": [
     "economy"
    ],
    "from_dims": [
     3
    ],
    "layer": "inference",
    "note": "保障丝绸之路南道，中外物资交流"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "班超以三十六骑起家，倚西域诸国兵员"
   },
   "geopolitical_strategy": {
    "from": [
     "international"
    ],
    "from_dims": [
     6
    ],
    "layer": "inference",
    "note": "断匈奴右臂，遏制漠北势力南伸"
   }
  },
  "page": "county.html?scene=han_banchao_llm",
  "key": "han_banchao_llm",
  "scene_id": "han_banchao_llm"
 },
 "sources": [
  {
   "id": "han_banchao_src_llm",
   "title": "后汉书·班超传（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "范晔（南朝宋）",
   "period": "南朝宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "shanshan",
   "name": "鄯善",
   "type": "city",
   "modern": "今中国新疆若羌",
   "note": "班超初至西域镇抚之地",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "yutian",
   "name": "于阗",
   "type": "city",
   "modern": "今中国新疆和田",
   "note": "班超镇抚的西域国",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "shule",
   "name": "疏勒",
   "type": "city",
   "modern": "今中国新疆喀什",
   "note": "班超坚守的西域国。坐标据地名志条目（别名 疏勒→喀什），标 approx。",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 75.993,
   "lat": 39.467,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 疏勒→喀什）（诚实回填 v0.221）。",
   "elev": 1341
  },
  {
   "id": "tiaozhi",
   "name": "条支",
   "type": "region",
   "modern": "今西亚两河流域",
   "note": "甘英出使所至临海之地",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "dajin",
   "name": "大秦",
   "type": "region",
   "modern": "今罗马帝国",
   "note": "甘英出使目的地",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "HAN__p01",
   "name": "班超",
   "role": "西域都护",
   "note": "东汉名将，经营西域三十一年",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "HAN__p02",
   "name": "甘英",
   "role": "使者",
   "note": "班超遣使大秦，至条支临海而还",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAN__p03",
   "name": "鄯善王",
   "role": "西域国王",
   "note": "鄯善国君主，受匈奴胁迫",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAN__p04",
   "name": "于阗王",
   "role": "西域国王",
   "note": "于阗国君主，班超镇抚对象",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAN__p05",
   "name": "疏勒王",
   "role": "西域国王",
   "note": "疏勒国君主，班超镇抚对象",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "HAN__p06",
   "name": "匈奴使者",
   "role": "匈奴使节",
   "note": "在鄯善被班超袭杀",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "HAN_001",
   "subject": "event:ev_han_banchao_llm_01",
   "predicate": "出使兵力",
   "value_text": "班超率三十六骑出使西域",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shanshan",
   "source": "han_banchao_src_llm",
   "quote": "率三十六骑出使西域",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率三十六骑出使西域",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_002",
   "subject": "event:ev_han_banchao_llm_02",
   "predicate": "袭杀匈奴使者",
   "value_text": "班超在鄯善袭杀匈奴使者",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shanshan",
   "source": "han_banchao_src_llm",
   "quote": "袭杀匈奴使者",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "袭杀匈奴使者",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_003",
   "subject": "event:ev_han_banchao_llm_03",
   "predicate": "任西域都护",
   "value_text": "班超任西域都护，重通西域",
   "time": {
    "era_text": "永元三年",
    "start": "91"
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "任西域都护，重通西域",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "任西域都护，重通西域",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_004",
   "subject": "event:ev_han_banchao_llm_04",
   "predicate": "甘英出使",
   "value_text": "遣甘英使大秦至条支临海而还",
   "time": {
    "era_text": "永元九年",
    "start": "97"
   },
   "place": "tiaozhi",
   "source": "han_banchao_src_llm",
   "quote": "遣甘英使大秦至条支临海而还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "遣甘英使大秦至条支临海而还",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_005",
   "subject": "person:HAN__p01",
   "predicate": "在西域时间",
   "value_text": "班超在西域三十一年",
   "time": {
    "era_text": "永平十六年至永元十四年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "在西域三十一年",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "在西域三十一年",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_006",
   "subject": "event:ev_han_banchao_llm_03",
   "predicate": "重通西域",
   "value_text": "重通西域五十余国",
   "time": {
    "era_text": "永元三年",
    "start": "91"
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "重通西域五十余国",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "重通西域五十余国",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_007",
   "subject": "event:ev_han_banchao_llm_01",
   "predicate": "镇抚鄯善",
   "value_text": "班超镇抚鄯善",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shanshan",
   "source": "han_banchao_src_llm",
   "quote": "镇抚鄯善",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "镇抚鄯善",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_008",
   "subject": "event:ev_han_banchao_llm_01",
   "predicate": "镇抚于阗",
   "value_text": "班超镇抚于阗",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "yutian",
   "source": "han_banchao_src_llm",
   "quote": "镇抚于阗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "镇抚于阗",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_009",
   "subject": "event:ev_han_banchao_llm_01",
   "predicate": "镇抚疏勒",
   "value_text": "班超镇抚疏勒",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "镇抚疏勒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "镇抚疏勒",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_010",
   "subject": "event:ev_han_banchao_llm_03",
   "predicate": "保障丝路",
   "value_text": "保障丝绸之路南道",
   "time": {
    "era_text": "永元三年",
    "start": "91"
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "保障丝绸之路南道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "保障丝绸之路南道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_011",
   "subject": "event:ev_han_banchao_llm_04",
   "predicate": "甘英行程",
   "value_text": "甘英至条支临海而还",
   "time": {
    "era_text": "永元九年",
    "start": "97"
   },
   "place": "tiaozhi",
   "source": "han_banchao_src_llm",
   "quote": "至条支临海而还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "至条支临海而还",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_012",
   "subject": "event:ev_han_banchao_llm_04",
   "predicate": "甘英未至大秦",
   "value_text": "甘英未达大秦，至条支而还",
   "time": {
    "era_text": "永元九年",
    "start": "97"
   },
   "place": "tiaozhi",
   "source": "han_banchao_src_llm",
   "quote": "至条支临海而还",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "学界对甘英未达大秦原因有争议",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "至条支临海而还",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_013",
   "subject": "event:ev_han_banchao_llm_02",
   "predicate": "鄯善王态度",
   "value_text": "鄯善王受匈奴胁迫",
   "time": {
    "era_text": "永平十六年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shanshan",
   "source": "han_banchao_src_llm",
   "quote": "鄯善王受匈奴胁迫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "鄯善王受匈奴胁迫",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_014",
   "subject": "event:ev_han_banchao_llm_01",
   "predicate": "班超孤军",
   "value_text": "班超以孤军维系汉与西域联系",
   "time": {
    "era_text": "永平十六年至永元十四年",
    "start": "73-01-01",
    "end": "73-12-31",
    "gregorian_year": 73
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "以孤军维系汉与西域联系",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以孤军维系汉与西域联系",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HAN_015",
   "subject": "event:ev_han_banchao_llm_04",
   "predicate": "甘英行程细节",
   "value_text": "甘英具体行程路线记载不详",
   "time": {
    "era_text": "永元九年",
    "start": "97"
   },
   "place": "tiaozhi",
   "source": "han_banchao_src_llm",
   "quote": "甘英具体行程路线记载不详",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "史料未载甘英具体路线",
   "dims": [
    1
   ],
   "lead": {
    "where": "tiaozhi",
    "skills": [
     "历史地理",
     "文献考据"
    ],
    "accept": "甘英出使的具体路线"
   },
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "甘英具体行程路线记载不详",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_han_banchao_llm_001",
   "subject": "supplement:han_banchao_llm_dim2",
   "predicate": "地理技术",
   "value_text": "班超使团记西域道里风土，疏勒为南北道枢纽",
   "time": {
    "era_text": "东汉永平",
    "start": "73-01-01",
    "gregorian_year": 73
   },
   "place": "shule",
   "source": "han_banchao_src_llm",
   "quote": "班超使团记西域道里风土，疏勒为南北道枢纽",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.55,
   "scale": "region",
   "note": "[auto] 补维 技术",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率三十六骑出使西域",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_han_banchao_llm_002",
   "subject": "supplement:han_banchao_llm_dim4",
   "predicate": "城邦社会",
   "value_text": "西域绿洲城邦各拥兵民，役属匈奴或汉廷，班超以夷制夷",
   "time": {
    "era_text": "东汉永平",
    "start": "73-01-01",
    "gregorian_year": 73
   },
   "place": "yutian",
   "source": "han_banchao_src_llm",
   "quote": "西域绿洲城邦各拥兵民，役属匈奴或汉廷，班超以夷制夷",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "region",
   "note": "[auto] 补维 社会",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率三十六骑出使西域",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DIM_han_banchao_llm_003",
   "subject": "supplement:han_banchao_llm_dim5",
   "predicate": "时代思潮",
   "value_text": "东汉重通西域以断匈奴右臂，班超奉诏经营，扬汉威于远域",
   "time": {
    "era_text": "东汉永平",
    "start": "73-01-01",
    "gregorian_year": 73
   },
   "place": "shanshan",
   "source": "han_banchao_src_llm",
   "quote": "东汉重通西域以断匈奴右臂，班超奉诏经营，扬汉威于远域",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "region",
   "note": "[auto] 补维 思想",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "率三十六骑出使西域",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HAN_015"
 ],
 "events": [
  {
   "id": "ev_han_banchao_llm_01",
   "subject": "event:ev_han_banchao_llm_01",
   "year": 73,
   "era": "永平十六年",
   "title": "班超使西域",
   "kind": "外交",
   "text": "班超率三十六骑出使西域",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_han_banchao_llm_02",
   "subject": "event:ev_han_banchao_llm_02",
   "year": 73,
   "era": "永平十六年",
   "title": "袭杀匈奴使者",
   "kind": "战事",
   "text": "班超在鄯善袭杀匈奴使者",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_han_banchao_llm_03",
   "subject": "event:ev_han_banchao_llm_03",
   "year": 91,
   "era": "永元三年",
   "title": "任西域都护",
   "kind": "行政",
   "text": "班超任西域都护，重通西域",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_han_banchao_llm_04",
   "subject": "event:ev_han_banchao_llm_04",
   "year": 97,
   "era": "永元九年",
   "title": "甘英使大秦",
   "kind": "外交",
   "text": "遣甘英使大秦至条支临海而还",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "shanshan",
   "to": "yutian",
   "type": "military",
   "label": "班超镇抚于阗路线",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "yutian",
   "to": "shule",
   "type": "military",
   "label": "班超镇抚疏勒路线",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "shule",
   "to": "tiaozhi",
   "type": "battle",
   "label": "甘英出使大秦路线",
   "_source_idx": 0,
   "_source_name": "后汉书·班超传（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [],
 "control_seats": [],
 "control_years": null,
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
        74.993,
        38.467
       ],
       [
        74.993,
        40.467
       ],
       [
        76.993,
        40.467
       ],
       [
        76.993,
        38.467
       ],
       [
        74.993,
        38.467
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
         76.993,
         38.467
        ],
        [
         76.993,
         40.467
        ],
        [
         76.54,
         40.467
        ],
        [
         76.54,
         40.464
        ],
        [
         76.509,
         40.43
        ],
        [
         76.471,
         40.423
        ],
        [
         76.442,
         40.391
        ],
        [
         76.39,
         40.378
        ],
        [
         76.382,
         40.391
        ],
        [
         76.333,
         40.343
        ],
        [
         76.328,
         40.391
        ],
        [
         76.283,
         40.415
        ],
        [
         76.28,
         40.439
        ],
        [
         76.224,
         40.402
        ],
        [
         76.176,
         40.381
        ],
        [
         76.144,
         40.394
        ],
        [
         76.081,
         40.396
        ],
        [
         76.049,
         40.389
        ],
        [
         76.049,
         40.357
        ],
        [
         76.026,
         40.355
        ],
        [
         75.986,
         40.382
        ],
        [
         75.932,
         40.339
        ],
        [
         75.922,
         40.291
        ],
        [
         75.89,
         40.309
        ],
        [
         75.84,
         40.312
        ],
        [
         75.831,
         40.327
        ],
        [
         75.786,
         40.301
        ],
        [
         75.739,
         40.299
        ],
        [
         75.709,
         40.281
        ],
        [
         75.688,
         40.344
        ],
        [
         75.67,
         40.364
        ],
        [
         75.686,
         40.418
        ],
        [
         75.717,
         40.443
        ],
        [
         75.73,
         40.467
        ],
        [
         75.256,
         40.467
        ],
        [
         75.242,
         40.449
        ],
        [
         75.207,
         40.448
        ],
        [
         75.135,
         40.463
        ],
        [
         75.103,
         40.44
        ],
        [
         75.051,
         40.45
        ],
        [
         75.022,
         40.467
        ],
        [
         74.995,
         40.455
        ],
        [
         74.993,
         40.456
        ],
        [
         74.993,
         38.467
        ],
        [
         76.993,
         38.467
        ]
       ]
      ]
     ]
    },
    "n": "新疆维吾尔自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   74.993,
   38.467,
   76.993,
   40.467
  ]
 }
};
