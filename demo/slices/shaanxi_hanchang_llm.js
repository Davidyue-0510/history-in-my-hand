// 本文件由 tools/build.py 自动生成（切片 shaanxi_hanchang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["shaanxi_hanchang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["shaanxi_hanchang_llm"] = {
 "meta": {
  "kind": "engineering",
  "region": "guangzhong",
  "province": "shaanxi",
  "title": "汉长安与关中之漕（汉）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "changan",
  "dossier_event": "event:ev_shaanxi_hanchang_llm_01",
  "vocab_pack": "inline:shaanxi_hanchang_llm",
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
    "note": "汉长安与关中之漕（汉）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉长安与关中之漕（汉）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "汉长安与关中之漕（汉）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "汉长安与关中之漕（汉）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "page": "county.html?scene=shaanxi_hanchang_llm",
  "key": "shaanxi_hanchang_llm",
  "scene_id": "shaanxi_hanchang_llm"
 },
 "sources": [
  {
   "id": "shaanxi_hanchang_src",
   "title": "史记·货殖列传 / 汉书·沟洫志",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "班固",
   "period": "汉",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "guanzhong",
   "name": "关中",
   "type": "region",
   "modern": "今中国陕西中部",
   "note": "汉朝根本",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.9,
   "lat": 34.3,
   "geo_note": "今陕西中部关中平原代表点",
   "elev": 383
  },
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "今中国陕西西安",
   "note": "汉都",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  },
  {
   "id": "weishui",
   "name": "渭水",
   "type": "river",
   "modern": "今中国陕西渭河",
   "note": "漕运通道",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 104.5,
   "lat": 34.8,
   "geo_note": "今渭河（代表点）",
   "elev": 1986
  },
  {
   "id": "guandong",
   "name": "关东",
   "type": "region",
   "modern": "今中国函谷关以东",
   "note": "漕粮来源",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 111.0,
   "lat": 34.7,
   "geo_note": "今函谷关以东代表点",
   "elev": 587
  }
 ],
 "persons": [
  {
   "id": "SHA__p01",
   "name": "汉高祖",
   "role": "汉朝开国皇帝",
   "note": "定都长安",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SHA__p02",
   "name": "汉武帝",
   "role": "西汉皇帝",
   "note": "穿漕渠通渭",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SHA_001",
   "subject": "place:guanzhong",
   "predicate": "富庶程度",
   "value_text": "关中地占三分之一，富居十分之六",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_002",
   "subject": "event:ev_shaanxi_hanchang_llm_01",
   "predicate": "定都",
   "value_text": "汉高祖定都长安",
   "time": {
    "era_text": "汉高祖五年",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "汉高祖定都长安",
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
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖定都长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_003",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "predicate": "开凿漕渠",
   "value_text": "武帝穿漕渠通渭",
   "time": {
    "era_text": "元光六年",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "武帝穿漕渠通渭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武帝穿漕渠通渭",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_004",
   "subject": "place:changan",
   "predicate": "漕运功能",
   "value_text": "关东之粟水运抵长安",
   "time": {
    "era_text": "武帝时",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "关东之粟，水运抵长安",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关东之粟，水运抵长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_005",
   "subject": "place:guanzhong",
   "predicate": "水利灌溉",
   "value_text": "郑白之渠灌溉，衣食京师",
   "time": {
    "era_text": "武帝时",
    "start": "-129"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "郑白之渠，衣食京师，亿万之口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑白之渠，衣食京师，亿万之口",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_006",
   "subject": "place:guanzhong",
   "predicate": "地位",
   "value_text": "关中为本朝根本",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "关中为本朝根本",
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
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关中为本朝根本",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_007",
   "subject": "place:guanzhong",
   "predicate": "人口比例",
   "value_text": "人众不过什三",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "人众不过什三",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "人众不过什三",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_008",
   "subject": "place:guanzhong",
   "predicate": "经济贡献",
   "value_text": "量其富，什居其六",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "量其富，什居其六",
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
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_009",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "predicate": "目的",
   "value_text": "为漕运粮食",
   "time": {
    "era_text": "元光六年",
    "start": "-129"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "漕渠通渭",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "漕渠通渭",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_010",
   "subject": "place:changan",
   "predicate": "粮食供应",
   "value_text": "依赖关东漕运",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "关东之粟，水运抵长安",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "关东之粟，水运抵长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_011",
   "subject": "place:guanzhong",
   "predicate": "农业基础",
   "value_text": "郑白渠灌溉，农业发达",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "郑白之渠，衣食京师",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "郑白之渠，衣食京师",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_012",
   "subject": "place:guanzhong",
   "predicate": "战略地位",
   "value_text": "定都长安因关中富庶",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "汉高祖定都长安",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "汉高祖定都长安",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_013",
   "subject": "place:changan",
   "predicate": "漕运量",
   "value_text": "具体漕运量未载",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "changan",
   "source": "shaanxi_hanchang_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "",
   "dims": [
    1,
    6
   ],
   "lead": {
    "where": "汉长安城遗址",
    "skills": [
     "考古学",
     "历史地理"
    ],
    "accept": "考古发现漕渠遗迹"
   },
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_014",
   "subject": "place:guanzhong",
   "predicate": "郑白渠位置",
   "value_text": "郑白渠具体位置未明",
   "time": {
    "era_text": "汉",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    2
   ],
   "lead": {
    "where": "关中平原",
    "skills": [
     "水利史",
     "遥感考古"
    ],
    "accept": "遥感识别古渠道"
   },
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "SHA_015",
   "subject": "place:guanzhong",
   "predicate": "经济数据",
   "value_text": "富居十分之六为约数",
   "time": {
    "era_text": "汉高祖时",
    "start": "-202"
   },
   "place": "guanzhong",
   "source": "shaanxi_hanchang_src",
   "quote": "量其富，什居其六",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "学者认为夸大",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "量其富，什居其六",
   "source_text": "汉高祖定都长安，『关中之地，于天下三分之一，而人众不过什三，然量其富，什居其六』。武帝穿漕渠通渭，『关东之粟，水运抵长安』；郑白之渠，『衣食京师，亿万之口』，关中为本朝根本。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SHA_013",
  "SHA_014"
 ],
 "events": [
  {
   "id": "ev_shaanxi_hanchang_llm_01",
   "subject": "event:ev_shaanxi_hanchang_llm_01",
   "year": -202,
   "era": "汉高祖五年",
   "title": "定都长安",
   "kind": "建置",
   "text": "汉高祖定都长安",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_shaanxi_hanchang_llm_02",
   "subject": "event:ev_shaanxi_hanchang_llm_02",
   "year": -129,
   "era": "元光六年",
   "title": "穿漕渠",
   "kind": "工程",
   "text": "武帝穿漕渠通渭",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "guandong",
   "to": "changan",
   "type": "military",
   "label": "漕运路线",
   "_source_idx": 0,
   "_source_name": "史记·货殖列传 / 汉书·沟洫志",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "guanzhong",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  },
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": -200,
   "end": -100,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "guanzhong",
   "name": "关中",
   "lon": 108.9,
   "lat": 34.3,
   "region": "guangzhong"
  },
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "guangzhong"
  }
 ],
 "control_years": [
  -200,
  -100
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
        103.5,
        33.27
       ],
       [
        112.0,
        35.8
       ],
       [
        103.5,
        33.27
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
         110.379,
         34.601
        ],
        [
         110.488,
         34.611
        ],
        [
         110.611,
         34.608
        ],
        [
         110.749,
         34.652
        ],
        [
         110.825,
         34.616
        ],
        [
         110.903,
         34.669
        ],
        [
         110.976,
         34.706
        ],
        [
         111.118,
         34.757
        ],
        [
         111.233,
         34.79
        ],
        [
         111.292,
         34.807
        ],
        [
         111.389,
         34.815
        ],
        [
         111.503,
         34.83
        ],
        [
         111.57,
         34.843
        ],
        [
         111.618,
         34.895
        ],
        [
         111.682,
         34.951
        ],
        [
         111.74,
         35.005
        ],
        [
         111.81,
         35.062
        ],
        [
         111.978,
         35.067
        ],
        [
         112.0,
         35.8
        ],
        [
         110.578,
         35.702
        ],
        [
         110.589,
         35.602
        ],
        [
         110.531,
         35.511
        ],
        [
         110.45,
         35.328
        ],
        [
         110.379,
         35.211
        ],
        [
         110.374,
         35.134
        ],
        [
         110.262,
         34.944
        ],
        [
         110.247,
         34.789
        ],
        [
         110.23,
         34.693
        ],
        [
         110.295,
         34.611
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
         112.0,
         33.27
        ],
        [
         111.978,
         35.067
        ],
        [
         111.81,
         35.062
        ],
        [
         111.74,
         35.005
        ],
        [
         111.682,
         34.951
        ],
        [
         111.618,
         34.895
        ],
        [
         111.57,
         34.843
        ],
        [
         111.503,
         34.83
        ],
        [
         111.389,
         34.815
        ],
        [
         111.292,
         34.807
        ],
        [
         111.233,
         34.79
        ],
        [
         111.118,
         34.757
        ],
        [
         110.976,
         34.706
        ],
        [
         110.903,
         34.669
        ],
        [
         110.825,
         34.616
        ],
        [
         110.749,
         34.652
        ],
        [
         110.611,
         34.608
        ],
        [
         110.488,
         34.611
        ],
        [
         110.379,
         34.601
        ],
        [
         110.405,
         34.558
        ],
        [
         110.361,
         34.517
        ],
        [
         110.403,
         34.433
        ],
        [
         110.504,
         34.337
        ],
        [
         110.429,
         34.288
        ],
        [
         110.508,
         34.217
        ],
        [
         110.558,
         34.193
        ],
        [
         110.642,
         34.161
        ],
        [
         110.592,
         34.102
        ],
        [
         110.621,
         34.036
        ],
        [
         110.666,
         33.938
        ],
        [
         110.629,
         33.91
        ],
        [
         110.612,
         33.852
        ],
        [
         110.712,
         33.834
        ],
        [
         110.782,
         33.796
        ],
        [
         110.832,
         33.714
        ],
        [
         110.879,
         33.634
        ],
        [
         111.004,
         33.579
        ],
        [
         111.027,
         33.478
        ],
        [
         110.996,
         33.436
        ],
        [
         111.026,
         33.331
        ],
        [
         112.0,
         33.27
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.627,
         33.27
        ],
        [
         109.618,
         33.27
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         103.5,
         33.27
        ],
        [
         104.304,
         33.304
        ],
        [
         104.386,
         33.298
        ],
        [
         104.374,
         33.345
        ],
        [
         104.272,
         33.391
        ],
        [
         104.213,
         33.447
        ],
        [
         104.155,
         33.543
        ],
        [
         104.103,
         33.663
        ],
        [
         103.98,
         33.671
        ],
        [
         103.778,
         33.659
        ],
        [
         103.668,
         33.686
        ],
        [
         103.593,
         33.716
        ],
        [
         103.552,
         33.671
        ],
        [
         103.545,
         33.72
        ],
        [
         103.5,
         33.806
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.269,
         34.63
        ],
        [
         110.243,
         34.726
        ],
        [
         110.231,
         34.881
        ],
        [
         110.321,
         35.005
        ],
        [
         110.364,
         35.198
        ],
        [
         110.375,
         35.252
        ],
        [
         110.478,
         35.414
        ],
        [
         110.568,
         35.54
        ],
        [
         110.61,
         35.632
        ],
        [
         110.571,
         35.8
        ],
        [
         108.534,
         35.746
        ],
        [
         108.539,
         35.606
        ],
        [
         108.626,
         35.537
        ],
        [
         108.631,
         35.419
        ],
        [
         108.615,
         35.329
        ],
        [
         108.547,
         35.305
        ],
        [
         108.361,
         35.28
        ],
        [
         108.297,
         35.268
        ],
        [
         108.222,
         35.297
        ],
        [
         108.095,
         35.28
        ],
        [
         107.95,
         35.245
        ],
        [
         107.867,
         35.256
        ],
        [
         107.746,
         35.312
        ],
        [
         107.667,
         35.257
        ],
        [
         107.686,
         35.218
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
         107.773,
         35.061
        ],
        [
         107.847,
         35.025
        ],
        [
         107.842,
         34.979
        ],
        [
         107.675,
         34.951
        ],
        [
         107.62,
         34.965
        ],
        [
         107.524,
         34.91
        ],
        [
         107.401,
         34.933
        ],
        [
         107.35,
         34.934
        ],
        [
         107.253,
         34.881
        ],
        [
         107.162,
         34.944
        ],
        [
         107.09,
         34.977
        ],
        [
         107.013,
         35.03
        ],
        [
         106.95,
         35.067
        ],
        [
         106.838,
         35.08
        ],
        [
         106.706,
         35.082
        ],
        [
         106.577,
         35.089
        ],
        [
         106.522,
         35.028
        ],
        [
         106.495,
         35.006
        ],
        [
         106.493,
         34.941
        ],
        [
         106.556,
         34.861
        ],
        [
         106.575,
         34.77
        ],
        [
         106.506,
         34.747
        ],
        [
         106.457,
         34.704
        ],
        [
         106.471,
         34.634
        ],
        [
         106.314,
         34.579
        ],
        [
         106.334,
         34.518
        ],
        [
         106.514,
         34.512
        ],
        [
         106.559,
         34.488
        ],
        [
         106.638,
         34.391
        ],
        [
         106.691,
         34.338
        ],
        [
         106.682,
         34.256
        ],
        [
         106.634,
         34.26
        ],
        [
         106.577,
         34.281
        ],
        [
         106.496,
         34.238
        ],
        [
         106.558,
         34.23
        ],
        [
         106.56,
         34.11
        ],
        [
         106.506,
         34.056
        ],
        [
         106.474,
         33.971
        ],
        [
         106.428,
         33.866
        ],
        [
         106.491,
         33.835
        ],
        [
         106.488,
         33.758
        ],
        [
         106.535,
         33.695
        ],
        [
         106.581,
         33.576
        ],
        [
         106.457,
         33.533
        ],
        [
         106.385,
         33.612
        ],
        [
         106.304,
         33.605
        ],
        [
         106.187,
         33.547
        ],
        [
         106.118,
         33.603
        ],
        [
         106.047,
         33.61
        ],
        [
         105.94,
         33.571
        ],
        [
         105.871,
         33.511
        ],
        [
         105.831,
         33.452
        ],
        [
         105.827,
         33.38
        ],
        [
         105.755,
         33.329
        ],
        [
         105.792,
         33.278
        ],
        [
         109.618,
         33.27
        ],
        [
         109.627,
         33.27
        ],
        [
         111.026,
         33.331
        ],
        [
         110.996,
         33.436
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.478
        ],
        [
         111.004,
         33.579
        ],
        [
         110.879,
         33.634
        ],
        [
         110.832,
         33.714
        ],
        [
         110.782,
         33.796
        ],
        [
         110.712,
         33.834
        ],
        [
         110.612,
         33.852
        ],
        [
         110.629,
         33.91
        ],
        [
         110.666,
         33.938
        ],
        [
         110.621,
         34.036
        ],
        [
         110.592,
         34.102
        ],
        [
         110.642,
         34.161
        ],
        [
         110.558,
         34.193
        ],
        [
         110.508,
         34.217
        ],
        [
         110.429,
         34.288
        ],
        [
         110.504,
         34.337
        ],
        [
         110.403,
         34.433
        ],
        [
         110.361,
         34.517
        ],
        [
         110.405,
         34.558
        ],
        [
         110.379,
         34.601
        ]
       ]
      ],
      [
       [
        [
         111.027,
         33.478
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.478
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
         106.506,
         35.738
        ],
        [
         106.498,
         35.733
        ],
        [
         106.435,
         35.688
        ],
        [
         106.479,
         35.575
        ],
        [
         106.441,
         35.526
        ],
        [
         106.49,
         35.481
        ],
        [
         106.504,
         35.415
        ],
        [
         106.472,
         35.311
        ],
        [
         106.368,
         35.274
        ],
        [
         106.32,
         35.265
        ],
        [
         106.238,
         35.409
        ],
        [
         106.173,
         35.438
        ],
        [
         106.113,
         35.362
        ],
        [
         106.073,
         35.421
        ],
        [
         106.073,
         35.447
        ],
        [
         106.07,
         35.458
        ],
        [
         106.054,
         35.455
        ],
        [
         106.002,
         35.439
        ],
        [
         105.898,
         35.451
        ],
        [
         106.047,
         35.498
        ],
        [
         106.017,
         35.519
        ],
        [
         105.869,
         35.54
        ],
        [
         105.816,
         35.575
        ],
        [
         105.762,
         35.603
        ],
        [
         105.714,
         35.651
        ],
        [
         105.691,
         35.699
        ],
        [
         105.741,
         35.699
        ],
        [
         105.702,
         35.733
        ],
        [
         105.596,
         35.716
        ],
        [
         105.457,
         35.772
        ],
        [
         105.431,
         35.8
        ],
        [
         105.381,
         35.793
        ],
        [
         103.5,
         35.8
        ],
        [
         103.518,
         33.807
        ],
        [
         103.52,
         33.678
        ],
        [
         103.564,
         33.7
        ],
        [
         103.646,
         33.709
        ],
        [
         103.691,
         33.694
        ],
        [
         103.861,
         33.682
        ],
        [
         104.046,
         33.686
        ],
        [
         104.177,
         33.6
        ],
        [
         104.18,
         33.473
        ],
        [
         104.22,
         33.404
        ],
        [
         104.293,
         33.337
        ],
        [
         104.42,
         33.327
        ],
        [
         104.334,
         33.316
        ],
        [
         104.323,
         33.27
        ],
        [
         105.792,
         33.278
        ],
        [
         105.755,
         33.329
        ],
        [
         105.827,
         33.38
        ],
        [
         105.831,
         33.452
        ],
        [
         105.871,
         33.511
        ],
        [
         105.94,
         33.571
        ],
        [
         106.047,
         33.61
        ],
        [
         106.118,
         33.603
        ],
        [
         106.187,
         33.547
        ],
        [
         106.304,
         33.605
        ],
        [
         106.385,
         33.612
        ],
        [
         106.457,
         33.533
        ],
        [
         106.581,
         33.576
        ],
        [
         106.535,
         33.695
        ],
        [
         106.488,
         33.758
        ],
        [
         106.491,
         33.835
        ],
        [
         106.428,
         33.866
        ],
        [
         106.474,
         33.971
        ],
        [
         106.506,
         34.056
        ],
        [
         106.56,
         34.11
        ],
        [
         106.558,
         34.23
        ],
        [
         106.496,
         34.238
        ],
        [
         106.577,
         34.281
        ],
        [
         106.634,
         34.26
        ],
        [
         106.682,
         34.256
        ],
        [
         106.691,
         34.338
        ],
        [
         106.638,
         34.391
        ],
        [
         106.559,
         34.488
        ],
        [
         106.514,
         34.512
        ],
        [
         106.334,
         34.518
        ],
        [
         106.314,
         34.579
        ],
        [
         106.471,
         34.634
        ],
        [
         106.457,
         34.704
        ],
        [
         106.506,
         34.747
        ],
        [
         106.575,
         34.77
        ],
        [
         106.556,
         34.861
        ],
        [
         106.493,
         34.941
        ],
        [
         106.495,
         35.006
        ],
        [
         106.522,
         35.028
        ],
        [
         106.577,
         35.089
        ],
        [
         106.706,
         35.082
        ],
        [
         106.838,
         35.08
        ],
        [
         106.95,
         35.067
        ],
        [
         107.013,
         35.03
        ],
        [
         107.09,
         34.977
        ],
        [
         107.162,
         34.944
        ],
        [
         107.253,
         34.881
        ],
        [
         107.35,
         34.934
        ],
        [
         107.401,
         34.933
        ],
        [
         107.524,
         34.91
        ],
        [
         107.62,
         34.965
        ],
        [
         107.675,
         34.951
        ],
        [
         107.842,
         34.979
        ],
        [
         107.847,
         35.025
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
         107.728,
         35.12
        ],
        [
         107.686,
         35.218
        ],
        [
         107.667,
         35.257
        ],
        [
         107.746,
         35.312
        ],
        [
         107.867,
         35.256
        ],
        [
         107.95,
         35.245
        ],
        [
         108.095,
         35.28
        ],
        [
         108.222,
         35.297
        ],
        [
         108.297,
         35.268
        ],
        [
         108.361,
         35.28
        ],
        [
         108.547,
         35.305
        ],
        [
         108.615,
         35.329
        ],
        [
         108.631,
         35.419
        ],
        [
         108.626,
         35.537
        ],
        [
         108.539,
         35.606
        ],
        [
         108.534,
         35.746
        ],
        [
         106.921,
         35.8
        ],
        [
         106.868,
         35.772
        ],
        [
         106.819,
         35.745
        ],
        [
         106.751,
         35.725
        ],
        [
         106.675,
         35.728
        ],
        [
         106.633,
         35.715
        ],
        [
         106.596,
         35.727
        ],
        [
         106.506,
         35.738
        ]
       ]
      ],
      [
       [
        [
         106.047,
         35.498
        ],
        [
         106.054,
         35.455
        ],
        [
         106.079,
         35.51
        ]
       ]
      ],
      [
       [
        [
         106.073,
         35.447
        ],
        [
         106.073,
         35.421
        ],
        [
         106.073,
         35.447
        ]
       ]
      ],
      [
       [
        [
         106.504,
         35.736
        ],
        [
         106.493,
         35.733
        ],
        [
         106.504,
         35.736
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         105.38,
         35.8
        ],
        [
         105.388,
         35.8
        ],
        [
         105.432,
         35.788
        ],
        [
         105.482,
         35.727
        ],
        [
         105.667,
         35.75
        ],
        [
         105.759,
         35.725
        ],
        [
         105.724,
         35.726
        ],
        [
         105.723,
         35.673
        ],
        [
         105.759,
         35.634
        ],
        [
         105.8,
         35.565
        ],
        [
         105.847,
         35.49
        ],
        [
         105.9,
         35.547
        ],
        [
         106.023,
         35.494
        ],
        [
         106.079,
         35.51
        ],
        [
         106.07,
         35.458
        ],
        [
         106.073,
         35.45
        ],
        [
         106.073,
         35.447
        ],
        [
         106.113,
         35.362
        ],
        [
         106.173,
         35.438
        ],
        [
         106.238,
         35.409
        ],
        [
         106.32,
         35.265
        ],
        [
         106.368,
         35.274
        ],
        [
         106.472,
         35.311
        ],
        [
         106.504,
         35.415
        ],
        [
         106.49,
         35.481
        ],
        [
         106.441,
         35.526
        ],
        [
         106.479,
         35.575
        ],
        [
         106.435,
         35.688
        ],
        [
         106.506,
         35.738
        ],
        [
         106.596,
         35.727
        ],
        [
         106.633,
         35.715
        ],
        [
         106.675,
         35.728
        ],
        [
         106.751,
         35.725
        ],
        [
         106.819,
         35.745
        ],
        [
         106.868,
         35.772
        ],
        [
         106.921,
         35.8
        ]
       ]
      ],
      [
       [
        [
         106.049,
         35.489
        ],
        [
         105.895,
         35.414
        ],
        [
         106.034,
         35.469
        ],
        [
         106.049,
         35.489
        ]
       ]
      ],
      [
       [
        [
         106.074,
         35.455
        ],
        [
         106.071,
         35.449
        ],
        [
         106.074,
         35.455
        ]
       ]
      ]
     ]
    },
    "n": "宁夏回族自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.555,
        35.8
       ],
       [
        110.579,
        35.534
       ],
       [
        110.366,
        35.234
       ],
       [
        110.278,
        35.008
       ],
       [
        110.27,
        34.637
       ],
       [
        110.619,
        34.604
       ],
       [
        110.89,
        34.683
       ],
       [
        111.027,
        34.746
       ],
       [
        111.243,
        34.83
       ],
       [
        111.589,
        34.899
       ],
       [
        111.736,
        35.03
       ],
       [
        112.0,
        35.044
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   103.5,
   33.27,
   112.0,
   35.8
  ]
 }
};
