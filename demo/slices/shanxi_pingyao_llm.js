// 本文件由 tools/build.py 自动生成（切片 shanxi_pingyao_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shanxi_pingyao_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shanxi_pingyao_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "engineering",
  "province": "shanxi",
  "title": "平遥古城营建与城防（明）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "pingyao",
  "dossier_event": "event:ev_shanxi_pingyao_llm_01",
  "vocab_pack": "inline:shanxi_pingyao_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "ming",
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
    "note": "平遥古城营建与城防（明）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "平遥古城营建与城防（明）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "平遥古城营建与城防（明）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "平遥古城营建与城防（明）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   4,
   5,
   6
  ],
  "page": "county.html?scene=shanxi_pingyao_llm",
  "key": "shanxi_pingyao_llm",
  "scene_id": "shanxi_pingyao_llm"
 },
 "sources": [
  {
   "id": "pingyao_src",
   "title": "山西通志·城池（光绪）/ 平遥县志",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "山西通志局",
   "period": "清",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "pingyao",
   "name": "平遥",
   "type": "city",
   "modern": "中国山西省平遥县",
   "note": "古称古陶，北魏始筑城",
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.18,
   "lat": 37.2,
   "geo_note": "今山西平遥县",
   "elev": 787
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "朱元璋",
   "role": "明太祖",
   "note": "洪武三年下令重筑平遥城",
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "event:ev_shanxi_pingyao_llm_01",
   "predicate": "筑城时间",
   "value_text": "明洪武三年重筑砖城",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "明洪武三年（一三七零）重筑砖城",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明洪武三年（一三七零）重筑砖城",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "place:pingyao",
   "predicate": "城周长度",
   "value_text": "周袤十二里",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "周袤十二里",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[auto] 补层 inference",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "周袤十二里",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "place:pingyao",
   "predicate": "城墙高度",
   "value_text": "高三丈三尺",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "高三丈三尺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "高三丈三尺",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "place:pingyao",
   "predicate": "城防设施",
   "value_text": "设瓮城、敌楼、角楼、魁星楼",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "设瓮城、敌楼、角楼、魁星楼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "设瓮城、敌楼、角楼、魁星楼",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "place:pingyao",
   "predicate": "街道布局",
   "value_text": "四大街八小街七十二条蚰蜒巷",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "四大街八小街七十二条蚰蜒巷",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "四大街八小街七十二条蚰蜒巷",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "place:pingyao",
   "predicate": "城市形态",
   "value_text": "如龟背纹，称龟城",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "如龟背纹",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "如龟背纹",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:pingyao",
   "predicate": "营建范本",
   "value_text": "明清县城营建之范本",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "明清县城营建之范本",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "明清县城营建之范本",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:pingyao",
   "predicate": "保存状况",
   "value_text": "城垣完整如初",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "城垣完整如初",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "城垣完整如初",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "place:pingyao",
   "predicate": "建筑保存",
   "value_text": "城墙、街道、市楼、庙宇、民居一体保存",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "城墙、街道、市楼、庙宇、民居一体保存",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "城墙、街道、市楼、庙宇、民居一体保存",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:pingyao",
   "predicate": "历史价值",
   "value_text": "世所罕见",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "世所罕见",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "世所罕见",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:pingyao",
   "predicate": "始筑时间",
   "value_text": "北魏始筑城",
   "time": {
    "era_text": "北魏",
    "start": "386"
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "北魏始筑城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "北魏始筑城",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "place:pingyao",
   "predicate": "古称",
   "value_text": "古称古陶",
   "time": {
    "era_text": "北魏",
    "start": "386"
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "古称古陶",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "古称古陶",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "place:pingyao",
   "predicate": "市楼位置",
   "value_text": "市楼居中立",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "市楼居中立",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "市楼居中立",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "place:pingyao",
   "predicate": "城墙材料",
   "value_text": "重筑砖城",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "重筑砖城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    2
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "重筑砖城",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "place:pingyao",
   "predicate": "城墙保存",
   "value_text": "完整如初",
   "time": {
    "era_text": "明洪武三年",
    "start": "1370-01-01",
    "end": "1370-12-31",
    "gregorian_year": 1370
   },
   "place": "pingyao",
   "source": "pingyao_src",
   "quote": "完整如初",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "完整如初",
   "source_text": "平遥古称古陶，北魏始筑城，明洪武三年（一三七零）重筑砖城，周袤十二里，高三丈三尺，设瓮城、敌楼、角楼、魁星楼，市楼居中立，四大街八小街七十二条蚰蜒巷如龟背纹。城垣完整如初，'龟城'之制乃明清县城营建之范本，城墙、街道、市楼、庙宇、民居一体保存，世所罕见。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_shanxi_pingyao_llm_01",
   "subject": "event:ev_shanxi_pingyao_llm_01",
   "year": 1370,
   "era": "明洪武三年",
   "title": "重筑平遥砖城",
   "kind": "建置",
   "text": "明洪武三年重筑平遥砖城",
   "_source_idx": 0,
   "_source_name": "山西通志·城池（光绪）/ 平遥县志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "pingyao",
   "party": "后世官修",
   "start": 386,
   "end": 1370,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "pingyao",
   "name": "平遥",
   "lon": 112.18,
   "lat": 37.2,
   "region": "engineering"
  }
 ],
 "control_years": [
  386,
  1370
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
        111.18,
        36.2
       ],
       [
        111.18,
        38.2
       ],
       [
        113.18,
        38.2
       ],
       [
        113.18,
        36.2
       ],
       [
        111.18,
        36.2
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
         111.18,
         38.2
        ],
        [
         111.18,
         36.2
        ],
        [
         113.18,
         36.2
        ],
        [
         113.18,
         38.2
        ],
        [
         111.18,
         38.2
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   111.18,
   36.2,
   113.18,
   38.2
  ]
 }
};
