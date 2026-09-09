// 本文件由 tools/build.py 自动生成（切片 fujian_zen_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fujian_zen_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fujian_zen_llm"] = {
 "meta": {
  "kind": "thought",
  "region": "thought",
  "province": "fujian",
  "title": "雪峰禅法与福建禅宗（唐—五代）",
  "dossier_label": null,
  "subtitle": null,
  "primary_place": "fuzhou",
  "dossier_event": "event:ev_fujian_zen_llm_01",
  "vocab_pack": "inline:fujian_zen_llm",
  "terrain_grid": "china_coarse",
  "lead": null,
  "parties_note": null,
  "subject_names": null,
  "epoch": "tang",
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
    "note": "雪峰禅法与福建禅宗（唐—五代）：political_cohesion（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "雪峰禅法与福建禅宗（唐—五代）：material_logistics（框架自动骨架，LLM 文献理解待补充推导）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "雪峰禅法与福建禅宗（唐—五代）：population_mobilization（框架自动骨架，LLM 文献理解待补充推导）"
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
    "note": "雪峰禅法与福建禅宗（唐—五代）：geopolitical_strategy（框架自动骨架，LLM 文献理解待补充推导）"
   }
  },
  "dims": [
   1,
   4,
   5,
   6
  ],
  "page": "county.html?scene=fujian_zen_llm",
  "key": "fujian_zen_llm",
  "scene_id": "fujian_zen_llm"
 },
 "sources": [
  {
   "id": "fujian_zen_src",
   "title": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "静、筠禅僧",
   "period": "五代",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "xuefeng",
   "name": "雪峰山",
   "type": "region",
   "modern": "今中国福建省福州市闽侯县",
   "note": "义存住持之地",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.2,
   "lat": 26.07,
   "geo_note": "今福建福州闽侯雪峰山",
   "elev": 369
  },
  {
   "id": "fuzhou",
   "name": "福州",
   "type": "city",
   "modern": "今中国福建省福州市",
   "note": "雪峰义存籍贯",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 119.3,
   "lat": 26.08,
   "geo_note": "今福建福州市",
   "elev": 179
  }
 ],
 "persons": [
  {
   "id": "FUJ__p01",
   "name": "雪峰义存",
   "role": "禅师",
   "note": "晚唐高僧，住福州雪峰山",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 5
  },
  {
   "id": "FUJ__p02",
   "name": "文偃",
   "role": "禅师",
   "note": "雪峰弟子，创云门宗",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  },
  {
   "id": "FUJ__p03",
   "name": "师备",
   "role": "禅师",
   "note": "雪峰弟子，下出法眼宗",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 2
  }
 ],
 "assertions": [
  {
   "id": "FUJ_001",
   "subject": "person:FUJ__p01",
   "predicate": "住地",
   "value_text": "住福州雪峰山",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "住福州雪峰山",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "province",
   "note": "[alias] person:雪峰义存 → FUJ__p01 (name_match) | [auto] 补层 inference",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "住福州雪峰山",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_002",
   "subject": "person:FUJ__p01",
   "predicate": "门徒规模",
   "value_text": "冬夏不减一千五百",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "四方来学，冬夏不减一千五百",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:雪峰义存 → FUJ__p01 (name_match)",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "四方来学，冬夏不减一千五百",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_003",
   "subject": "person:FUJ__p01",
   "predicate": "法嗣",
   "value_text": "德山嗣法",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "德山嗣法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "[alias] person:雪峰义存 → FUJ__p01 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "德山嗣法",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_004",
   "subject": "person:FUJ__p02",
   "predicate": "创宗",
   "value_text": "创云门宗",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "其徒文偃创云门宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:文偃 → FUJ__p02 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "其徒文偃创云门宗",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_005",
   "subject": "person:FUJ__p03",
   "predicate": "创宗",
   "value_text": "下出法眼宗",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "师备下出法眼宗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:师备 → FUJ__p03 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "师备下出法眼宗",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_006",
   "subject": "place:xuefeng",
   "predicate": "地位",
   "value_text": "东南禅学中心",
   "time": {
    "era_text": "晚唐五代",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "雪峰遂为晚唐五代东南禅学中心",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雪峰遂为晚唐五代东南禅学中心",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_007",
   "subject": "place:xuefeng",
   "predicate": "法席之盛",
   "value_text": "闽中法席之盛冠于其时",
   "time": {
    "era_text": "晚唐五代",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "闽中法席之盛冠于其时",
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
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "闽中法席之盛冠于其时",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_008",
   "subject": "event:ev_fujian_zen_llm_01",
   "predicate": "影响",
   "value_text": "宗风大振",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "宗风大振",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "宗风大振",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_009",
   "subject": "event:ev_fujian_zen_llm_02",
   "predicate": "结果",
   "value_text": "一灯分照，禅灯遍闽",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "一灯分照，禅灯遍闽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "一灯分照，禅灯遍闽",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_010",
   "subject": "person:FUJ__p01",
   "predicate": "生卒",
   "value_text": "八二二至九零八",
   "time": {
    "era_text": "唐末",
    "start": "822"
   },
   "place": "fuzhou",
   "source": "fujian_zen_src",
   "quote": "八二二—九零八",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:雪峰义存 → FUJ__p01 (name_match)",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "八二二—九零八",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_011",
   "subject": "person:FUJ__p01",
   "predicate": "籍贯",
   "value_text": "福州人",
   "time": {
    "era_text": "唐末",
    "start": "822"
   },
   "place": "fuzhou",
   "source": "fujian_zen_src",
   "quote": "福州人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:雪峰义存 → FUJ__p01 (name_match)",
   "dims": [
    1
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "福州人",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_012",
   "subject": "person:FUJ__p01",
   "predicate": "师承",
   "value_text": "嗣法德山",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "德山嗣法",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "德山即德山宣鉴 | [alias] person:雪峰义存 → FUJ__p01 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "德山嗣法",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_013",
   "subject": "person:FUJ__p02",
   "predicate": "师承",
   "value_text": "雪峰弟子",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "其徒文偃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:文偃 → FUJ__p02 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "其徒文偃",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_014",
   "subject": "person:FUJ__p03",
   "predicate": "师承",
   "value_text": "雪峰弟子",
   "time": {
    "era_text": "唐末",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "师备下出",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "[alias] person:师备 → FUJ__p03 (name_match)",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "师备下出",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FUJ_015",
   "subject": "place:xuefeng",
   "predicate": "中心地位",
   "value_text": "晚唐五代东南禅学中心",
   "time": {
    "era_text": "晚唐五代",
    "start": "900"
   },
   "place": "xuefeng",
   "source": "fujian_zen_src",
   "quote": "雪峰遂为晚唐五代东南禅学中心",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "具体影响范围待考",
   "dims": [
    5,
    6
   ],
   "lead": {
    "where": "雪峰山",
    "skills": [
     "禅宗史"
    ],
    "accept": "需进一步考证"
   },
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "雪峰遂为晚唐五代东南禅学中心",
   "source_text": "雪峰义存（八二二—九零八），福州人，住福州雪峰山，'四方来学，冬夏不减一千五百'，德山嗣法，宗风大振。其徒文偃创云门宗、师备下出法眼宗，'一灯分照，禅灯遍闽'。雪峰遂为晚唐五代东南禅学中心，闽中法席之盛冠于其时。",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FUJ_015"
 ],
 "events": [
  {
   "id": "ev_fujian_zen_llm_01",
   "subject": "event:ev_fujian_zen_llm_01",
   "year": 900,
   "era": "唐末",
   "title": "雪峰弘法",
   "kind": "其他",
   "text": "雪峰义存住福州雪峰山，四方来学",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_fujian_zen_llm_02",
   "subject": "event:ev_fujian_zen_llm_02",
   "year": 900,
   "era": "唐末",
   "title": "分灯立宗",
   "kind": "其他",
   "text": "文偃创云门宗，师备下出法眼宗",
   "_source_idx": 0,
   "_source_name": "祖堂集·雪峰义存（南唐）/ 五灯会元",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [],
 "control": [
  {
   "place_id": "xuefeng",
   "party": "后世官修",
   "start": 822,
   "end": 900,
   "timeline": "main"
  },
  {
   "place_id": "fuzhou",
   "party": "后世官修",
   "start": 822,
   "end": 900,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "xuefeng",
   "name": "雪峰山",
   "lon": 119.2,
   "lat": 26.07,
   "region": "thought"
  },
  {
   "place_id": "fuzhou",
   "name": "福州",
   "lon": 119.3,
   "lat": 26.08,
   "region": "thought"
  }
 ],
 "control_years": [
  822,
  900
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
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       119.797,
       25.623
      ],
      [
       119.778,
       25.653
      ],
      [
       119.723,
       25.639
      ],
      [
       119.696,
       25.591
      ],
      [
       119.723,
       25.551
      ],
      [
       119.699,
       25.495
      ],
      [
       119.7,
       25.433
      ],
      [
       119.747,
       25.411
      ],
      [
       119.821,
       25.457
      ],
      [
       119.832,
       25.48
      ],
      [
       119.809,
       25.508
      ],
      [
       119.839,
       25.56
      ],
      [
       119.838,
       25.591
      ],
      [
       119.829,
       25.607
      ],
      [
       119.797,
       25.623
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        118.934,
        25.07
       ],
       [
        118.914,
        25.127
       ],
       [
        118.978,
        25.209
       ],
       [
        119.025,
        25.223
       ],
       [
        119.236,
        25.206
       ],
       [
        119.286,
        25.232
       ],
       [
        119.244,
        25.307
       ],
       [
        119.169,
        25.356
       ],
       [
        119.146,
        25.414
       ],
       [
        119.18,
        25.45
       ],
       [
        119.263,
        25.468
       ],
       [
        119.344,
        25.446
       ],
       [
        119.422,
        25.46
       ],
       [
        119.499,
        25.409
       ],
       [
        119.593,
        25.368
       ],
       [
        119.622,
        25.391
       ],
       [
        119.619,
        25.437
       ],
       [
        119.539,
        25.591
       ],
       [
        119.553,
        25.699
       ],
       [
        119.617,
        25.823
       ],
       [
        119.648,
        25.919
       ],
       [
        119.619,
        26.004
       ],
       [
        119.501,
        26.009
       ],
       [
        119.418,
        25.954
       ],
       [
        119.332,
        25.949
       ],
       [
        119.264,
        25.975
       ],
       [
        119.139,
        26.122
       ],
       [
        119.232,
        26.104
       ],
       [
        119.313,
        26.063
       ],
       [
        119.37,
        26.054
       ],
       [
        119.463,
        26.055
       ],
       [
        119.567,
        26.127
       ],
       [
        119.693,
        26.236
       ],
       [
        119.797,
        26.3
       ],
       [
        119.881,
        26.334
       ],
       [
        119.876,
        26.371
       ],
       [
        119.84,
        26.414
       ],
       [
        119.831,
        26.45
       ],
       [
        119.785,
        26.547
       ],
       [
        119.726,
        26.609
       ],
       [
        119.638,
        26.621
       ],
       [
        119.624,
        26.676
       ],
       [
        119.59,
        26.73
       ],
       [
        119.588,
        26.785
       ],
       [
        119.652,
        26.747
       ],
       [
        119.71,
        26.729
       ],
       [
        119.767,
        26.775
       ],
       [
        119.789,
        26.831
       ],
       [
        119.824,
        26.846
       ],
       [
        119.815,
        26.798
       ],
       [
        119.821,
        26.737
       ],
       [
        119.842,
        26.689
       ],
       [
        119.879,
        26.683
       ],
       [
        119.882,
        26.61
       ],
       [
        119.968,
        26.586
       ],
       [
        120.043,
        26.634
       ],
       [
        120.087,
        26.672
       ],
       [
        120.097,
        26.781
       ],
       [
        120.139,
        26.886
       ],
       [
        120.267,
        27.08
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.821,
        25.457
       ],
       [
        119.747,
        25.411
       ],
       [
        119.7,
        25.433
       ],
       [
        119.699,
        25.495
       ],
       [
        119.723,
        25.551
       ],
       [
        119.696,
        25.591
       ],
       [
        119.723,
        25.639
       ],
       [
        119.778,
        25.653
       ],
       [
        119.797,
        25.623
       ],
       [
        119.829,
        25.607
       ],
       [
        119.838,
        25.591
       ],
       [
        119.839,
        25.56
       ],
       [
        119.809,
        25.508
       ],
       [
        119.832,
        25.48
       ],
       [
        119.821,
        25.457
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.2,
        25.07
       ],
       [
        118.2,
        27.08
       ],
       [
        120.267,
        27.08
       ],
       [
        120.139,
        26.886
       ],
       [
        120.097,
        26.781
       ],
       [
        120.087,
        26.672
       ],
       [
        120.043,
        26.634
       ],
       [
        119.968,
        26.586
       ],
       [
        119.882,
        26.61
       ],
       [
        119.879,
        26.683
       ],
       [
        119.842,
        26.689
       ],
       [
        119.821,
        26.737
       ],
       [
        119.815,
        26.798
       ],
       [
        119.824,
        26.846
       ],
       [
        119.789,
        26.831
       ],
       [
        119.767,
        26.775
       ],
       [
        119.71,
        26.729
       ],
       [
        119.652,
        26.747
       ],
       [
        119.588,
        26.785
       ],
       [
        119.59,
        26.73
       ],
       [
        119.624,
        26.676
       ],
       [
        119.638,
        26.621
       ],
       [
        119.726,
        26.609
       ],
       [
        119.785,
        26.547
       ],
       [
        119.831,
        26.45
       ],
       [
        119.84,
        26.414
       ],
       [
        119.876,
        26.371
       ],
       [
        119.881,
        26.334
       ],
       [
        119.797,
        26.3
       ],
       [
        119.693,
        26.236
       ],
       [
        119.567,
        26.127
       ],
       [
        119.463,
        26.055
       ],
       [
        119.37,
        26.054
       ],
       [
        119.313,
        26.063
       ],
       [
        119.232,
        26.104
       ],
       [
        119.139,
        26.122
       ],
       [
        119.264,
        25.975
       ],
       [
        119.332,
        25.949
       ],
       [
        119.418,
        25.954
       ],
       [
        119.501,
        26.009
       ],
       [
        119.619,
        26.004
       ],
       [
        119.648,
        25.919
       ],
       [
        119.617,
        25.823
       ],
       [
        119.553,
        25.699
       ],
       [
        119.539,
        25.591
       ],
       [
        119.619,
        25.437
       ],
       [
        119.622,
        25.391
       ],
       [
        119.593,
        25.368
       ],
       [
        119.499,
        25.409
       ],
       [
        119.422,
        25.46
       ],
       [
        119.344,
        25.446
       ],
       [
        119.263,
        25.468
       ],
       [
        119.18,
        25.45
       ],
       [
        119.146,
        25.414
       ],
       [
        119.169,
        25.356
       ],
       [
        119.244,
        25.307
       ],
       [
        119.286,
        25.232
       ],
       [
        119.236,
        25.206
       ],
       [
        119.025,
        25.223
       ],
       [
        118.978,
        25.209
       ],
       [
        118.914,
        25.127
       ],
       [
        118.934,
        25.07
       ],
       [
        118.2,
        25.07
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
         118.911,
         25.07
        ],
        [
         118.892,
         25.093
        ],
        [
         118.975,
         25.115
        ],
        [
         118.952,
         25.152
        ],
        [
         118.985,
         25.169
        ],
        [
         118.985,
         25.195
        ],
        [
         118.942,
         25.211
        ],
        [
         118.94,
         25.217
        ],
        [
         118.943,
         25.221
        ],
        [
         118.903,
         25.239
        ],
        [
         118.9,
         25.243
        ],
        [
         118.919,
         25.248
        ],
        [
         118.916,
         25.257
        ],
        [
         118.918,
         25.257
        ],
        [
         118.956,
         25.273
        ],
        [
         118.997,
         25.266
        ],
        [
         118.975,
         25.238
        ],
        [
         118.99,
         25.202
        ],
        [
         119.055,
         25.219
        ],
        [
         119.074,
         25.211
        ],
        [
         119.054,
         25.168
        ],
        [
         119.033,
         25.174
        ],
        [
         119.029,
         25.14
        ],
        [
         119.066,
         25.103
        ],
        [
         119.076,
         25.1
        ],
        [
         119.134,
         25.106
        ],
        [
         119.107,
         25.075
        ],
        [
         119.108,
         25.07
        ],
        [
         119.149,
         25.07
        ],
        [
         119.166,
         25.146
        ],
        [
         119.137,
         25.155
        ],
        [
         119.108,
         25.194
        ],
        [
         119.132,
         25.223
        ],
        [
         119.19,
         25.176
        ],
        [
         119.232,
         25.189
        ],
        [
         119.269,
         25.16
        ],
        [
         119.315,
         25.19
        ],
        [
         119.295,
         25.237
        ],
        [
         119.332,
         25.231
        ],
        [
         119.381,
         25.25
        ],
        [
         119.333,
         25.288
        ],
        [
         119.299,
         25.329
        ],
        [
         119.248,
         25.334
        ],
        [
         119.241,
         25.317
        ],
        [
         119.219,
         25.368
        ],
        [
         119.145,
         25.388
        ],
        [
         119.151,
         25.427
        ],
        [
         119.192,
         25.424
        ],
        [
         119.232,
         25.442
        ],
        [
         119.22,
         25.469
        ],
        [
         119.256,
         25.489
        ],
        [
         119.275,
         25.477
        ],
        [
         119.263,
         25.428
        ],
        [
         119.288,
         25.411
        ],
        [
         119.353,
         25.412
        ],
        [
         119.344,
         25.472
        ],
        [
         119.359,
         25.522
        ],
        [
         119.401,
         25.494
        ],
        [
         119.453,
         25.494
        ],
        [
         119.438,
         25.412
        ],
        [
         119.463,
         25.449
        ],
        [
         119.491,
         25.443
        ],
        [
         119.486,
         25.419
        ],
        [
         119.507,
         25.396
        ],
        [
         119.487,
         25.37
        ],
        [
         119.549,
         25.366
        ],
        [
         119.579,
         25.401
        ],
        [
         119.556,
         25.429
        ],
        [
         119.578,
         25.446
        ],
        [
         119.591,
         25.398
        ],
        [
         119.583,
         25.374
        ],
        [
         119.597,
         25.335
        ],
        [
         119.649,
         25.343
        ],
        [
         119.665,
         25.372
        ],
        [
         119.657,
         25.397
        ],
        [
         119.67,
         25.436
        ],
        [
         119.623,
         25.434
        ],
        [
         119.675,
         25.468
        ],
        [
         119.682,
         25.446
        ],
        [
         119.689,
         25.441
        ],
        [
         119.774,
         25.396
        ],
        [
         119.764,
         25.434
        ],
        [
         119.805,
         25.458
        ],
        [
         119.867,
         25.455
        ],
        [
         119.864,
         25.47
        ],
        [
         119.863,
         25.475
        ],
        [
         119.811,
         25.507
        ],
        [
         119.817,
         25.532
        ],
        [
         119.861,
         25.531
        ],
        [
         119.884,
         25.546
        ],
        [
         119.831,
         25.58
        ],
        [
         119.843,
         25.598
        ],
        [
         119.79,
         25.614
        ],
        [
         119.786,
         25.668
        ],
        [
         119.7,
         25.617
        ],
        [
         119.684,
         25.593
        ],
        [
         119.717,
         25.551
        ],
        [
         119.716,
         25.512
        ],
        [
         119.681,
         25.498
        ],
        [
         119.675,
         25.475
        ],
        [
         119.634,
         25.475
        ],
        [
         119.612,
         25.52
        ],
        [
         119.616,
         25.557
        ],
        [
         119.587,
         25.592
        ],
        [
         119.535,
         25.585
        ],
        [
         119.541,
         25.625
        ],
        [
         119.479,
         25.632
        ],
        [
         119.473,
         25.662
        ],
        [
         119.544,
         25.685
        ],
        [
         119.603,
         25.685
        ],
        [
         119.603,
         25.715
        ],
        [
         119.626,
         25.723
        ],
        [
         119.628,
         25.872
        ],
        [
         119.638,
         25.89
        ],
        [
         119.695,
         25.904
        ],
        [
         119.724,
         26.012
        ],
        [
         119.7,
         26.032
        ],
        [
         119.669,
         26.026
        ],
        [
         119.655,
         26.09
        ],
        [
         119.619,
         26.12
        ],
        [
         119.604,
         26.169
        ],
        [
         119.665,
         26.202
        ],
        [
         119.676,
         26.263
        ],
        [
         119.771,
         26.285
        ],
        [
         119.803,
         26.269
        ],
        [
         119.807,
         26.307
        ],
        [
         119.845,
         26.323
        ],
        [
         119.863,
         26.307
        ],
        [
         119.904,
         26.309
        ],
        [
         119.955,
         26.353
        ],
        [
         119.946,
         26.375
        ],
        [
         119.894,
         26.356
        ],
        [
         119.836,
         26.434
        ],
        [
         119.836,
         26.454
        ],
        [
         119.788,
         26.583
        ],
        [
         119.74,
         26.611
        ],
        [
         119.67,
         26.618
        ],
        [
         119.605,
         26.596
        ],
        [
         119.578,
         26.622
        ],
        [
         119.62,
         26.649
        ],
        [
         119.637,
         26.703
        ],
        [
         119.665,
         26.726
        ],
        [
         119.711,
         26.687
        ],
        [
         119.834,
         26.691
        ],
        [
         119.864,
         26.671
        ],
        [
         119.874,
         26.643
        ],
        [
         119.908,
         26.662
        ],
        [
         119.899,
         26.693
        ],
        [
         119.939,
         26.747
        ],
        [
         119.943,
         26.784
        ],
        [
         120.053,
         26.787
        ],
        [
         120.062,
         26.769
        ],
        [
         119.994,
         26.72
        ],
        [
         119.969,
         26.687
        ],
        [
         119.973,
         26.655
        ],
        [
         119.949,
         26.625
        ],
        [
         119.902,
         26.625
        ],
        [
         119.852,
         26.595
        ],
        [
         119.828,
         26.524
        ],
        [
         119.867,
         26.509
        ],
        [
         119.948,
         26.56
        ],
        [
         119.938,
         26.576
        ],
        [
         119.968,
         26.598
        ],
        [
         120.008,
         26.596
        ],
        [
         120.064,
         26.628
        ],
        [
         120.094,
         26.614
        ],
        [
         120.138,
         26.638
        ],
        [
         120.11,
         26.693
        ],
        [
         120.162,
         26.718
        ],
        [
         120.151,
         26.751
        ],
        [
         120.107,
         26.753
        ],
        [
         120.136,
         26.798
        ],
        [
         120.104,
         26.795
        ],
        [
         120.102,
         26.827
        ],
        [
         120.074,
         26.823
        ],
        [
         120.054,
         26.864
        ],
        [
         120.118,
         26.883
        ],
        [
         120.126,
         26.921
        ],
        [
         120.13,
         26.918
        ],
        [
         120.181,
         26.921
        ],
        [
         120.233,
         26.908
        ],
        [
         120.26,
         26.983
        ],
        [
         120.28,
         26.987
        ],
        [
         120.276,
         27.027
        ],
        [
         120.296,
         27.036
        ],
        [
         120.285,
         27.08
        ],
        [
         118.2,
         27.08
        ],
        [
         118.2,
         25.07
        ],
        [
         118.911,
         25.07
        ]
       ]
      ],
      [
       [
        [
         119.471,
         25.197
        ],
        [
         119.507,
         25.183
        ],
        [
         119.525,
         25.158
        ],
        [
         119.549,
         25.162
        ],
        [
         119.567,
         25.21
        ],
        [
         119.541,
         25.202
        ],
        [
         119.501,
         25.217
        ],
        [
         119.474,
         25.26
        ],
        [
         119.443,
         25.239
        ],
        [
         119.444,
         25.202
        ],
        [
         119.471,
         25.197
        ]
       ]
      ],
      [
       [
        [
         119.58,
         25.627
        ],
        [
         119.612,
         25.669
        ],
        [
         119.581,
         25.65
        ],
        [
         119.58,
         25.627
        ]
       ]
      ],
      [
       [
        [
         119.977,
         26.191
        ],
        [
         120.016,
         26.217
        ],
        [
         119.999,
         26.236
        ],
        [
         119.971,
         26.218
        ],
        [
         119.977,
         26.191
        ]
       ]
      ],
      [
       [
        [
         119.907,
         26.69
        ],
        [
         119.927,
         26.665
        ],
        [
         119.951,
         26.693
        ],
        [
         119.907,
         26.69
        ]
       ]
      ],
      [
       [
        [
         119.929,
         26.134
        ],
        [
         119.96,
         26.147
        ],
        [
         119.92,
         26.172
        ],
        [
         119.929,
         26.134
        ]
       ]
      ],
      [
       [
        [
         119.643,
         26.129
        ],
        [
         119.665,
         26.156
        ],
        [
         119.627,
         26.173
        ],
        [
         119.606,
         26.153
        ],
        [
         119.643,
         26.129
        ]
       ]
      ],
      [
       [
        [
         120.034,
         26.489
        ],
        [
         120.067,
         26.498
        ],
        [
         120.072,
         26.521
        ],
        [
         120.036,
         26.516
        ],
        [
         120.034,
         26.489
        ]
       ]
      ],
      [
       [
        [
         119.662,
         25.647
        ],
        [
         119.674,
         25.633
        ],
        [
         119.719,
         25.635
        ],
        [
         119.717,
         25.665
        ],
        [
         119.662,
         25.647
        ]
       ]
      ],
      [
       [
        [
         119.761,
         26.613
        ],
        [
         119.777,
         26.6
        ],
        [
         119.819,
         26.617
        ],
        [
         119.796,
         26.631
        ],
        [
         119.761,
         26.613
        ]
       ]
      ],
      [
       [
        [
         120.136,
         26.551
        ],
        [
         120.167,
         26.572
        ],
        [
         120.154,
         26.605
        ],
        [
         120.118,
         26.569
        ],
        [
         120.136,
         26.551
        ]
       ]
      ],
      [
       [
        [
         120.151,
         26.799
        ],
        [
         120.14,
         26.795
        ],
        [
         120.163,
         26.798
        ],
        [
         120.162,
         26.803
        ],
        [
         120.151,
         26.799
        ]
       ]
      ],
      [
       [
        [
         119.668,
         26.628
        ],
        [
         119.721,
         26.636
        ],
        [
         119.759,
         26.659
        ],
        [
         119.749,
         26.681
        ],
        [
         119.713,
         26.669
        ],
        [
         119.674,
         26.681
        ],
        [
         119.652,
         26.657
        ],
        [
         119.668,
         26.628
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   118.2,
   25.07,
   120.3,
   27.08
  ]
 }
};
