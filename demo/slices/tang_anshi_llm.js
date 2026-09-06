// 本文件由 tools/build.py 自动生成（切片 tang_anshi_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tang_anshi_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tang_anshi_llm"] = {
 "meta": {
  "kind": "uprising",
  "scale_tier": "strategic",
  "region": "tang",
  "province": null,
  "title": "安史之乱（LLM 抽取·人工校订）",
  "dossier_label": "安史之乱（LLM 抽取落库）",
  "subtitle": "天宝十四载—宝应元年（755–763）· 唐 vs 安史叛军",
  "primary_place": "luoyang",
  "dossier_event": "ev_tang_anshi_llm_01",
  "vocab_pack": "inline:tang_anshi_llm",
  "terrain_grid": "china_coarse",
  "lead": "安史之乱（755–763）：唐玄宗天宝十四载安禄山于范阳起兵，陷洛阳、长安，玄宗奔蜀、肃宗灵武即位；唐借回纥兵于757年收复两京，763年史朝义败亡，叛乱始平。八年战乱黄河中下游残破、人口锐减，藩镇割据形成，唐由盛转衰。本切片为『真实 LLM 抽取（DeepSeek-chat）+ 人工校订落库』：LLM 依《资治通鉴·唐纪》概述抽取断言，curate 报 BLOCK 0，人工补控制层（唐方 control 两京）与战略四维（inference）。引文全 paraphrase_unverified；来源《资治通鉴》为北宋司马光官修，归『后世官修』；控制层『唐方』。",
  "parties_note": "《资治通鉴·唐纪》为北宋司马光官修，归『后世官修』；安史为叛军，控制层『唐方』即唐廷。安史方视角经叙事折射。系统不裁决，只并列。",
  "dims": [
   3,
   4,
   5,
   6
  ],
  "subject_names": {
   "person:TAN__p01": "安禄山",
   "person:TAN__p02": "杨国忠",
   "person:TAN__p03": "哥舒翰",
   "person:TAN__p04": "唐玄宗",
   "person:TAN__p05": "太子李亨",
   "person:TAN__p06": "安慶緒",
   "person:TAN__p07": "史思明",
   "person:TAN__p08": "史朝義",
   "event:ev_tang_anshi_llm_01": "安禄山起兵",
   "event:ev_tang_anshi_llm_02": "长安陷落",
   "event:ev_tang_anshi_llm_03": "肃宗灵武即位",
   "event:ev_tang_anshi_llm_04": "收复两京",
   "event:ev_tang_anshi_llm_05": "叛乱平定",
   "place:fanyang": "范阳",
   "place:luoyang": "洛阳",
   "place:changan": "长安",
   "place:tongguan": "潼关",
   "place:lingwu": "灵武",
   "place:shu": "蜀"
  },
  "epoch": "tang",
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
    "note": "安史之乱后藩镇割据形成，唐由盛转衰"
   },
   "material_logistics": {
    "from": [
     "economy"
    ],
    "from_dims": [
     3
    ],
    "layer": "inference",
    "note": "河北藩镇割据，漕运与赋税体系受损"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "唐廷征调朔方军并借回纥兵平叛"
   },
   "geopolitical_strategy": {
    "from": [
     "international"
    ],
    "from_dims": [
     6
    ],
    "layer": "inference",
    "note": "借回纥兵收复两京，羁縻外交代价"
   }
  },
  "page": "county.html?scene=tang_anshi_llm",
  "key": "tang_anshi_llm",
  "scene_id": "tang_anshi_llm"
 },
 "sources": [
  {
   "id": "tang_anshi_src_llm",
   "title": "资治通鉴·唐纪（现代概述）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马光等（北宋）",
   "period": "北宋",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "fanyang",
   "name": "范阳",
   "type": "city",
   "modern": "今中国北京",
   "note": "安禄山起兵地",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 116.4,
   "lat": 39.9,
   "geo_note": "今北京",
   "elev": 44
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "type": "city",
   "modern": "今中国河南洛阳",
   "note": "叛军目标",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.45,
   "lat": 34.62,
   "geo_note": "唐东都，今洛阳",
   "elev": 171
  },
  {
   "id": "changan",
   "name": "长安",
   "type": "city",
   "modern": "今中国陕西西安",
   "note": "唐都",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 108.95,
   "lat": 34.27,
   "geo_note": "唐都，今西安",
   "elev": 436
  },
  {
   "id": "tongguan",
   "name": "潼关",
   "type": "fortress",
   "modern": "今中国陕西潼关",
   "note": "哥舒翰守",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 110.27,
   "lat": 34.55,
   "geo_note": "今陕西潼关",
   "elev": 653
  },
  {
   "id": "lingwu",
   "name": "灵武",
   "type": "city",
   "modern": "今中国宁夏灵武",
   "note": "肃宗即位",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "shu",
   "name": "蜀",
   "type": "region",
   "modern": "今中国四川",
   "note": "玄宗奔蜀",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "TAN__p01",
   "name": "安禄山",
   "role": "平卢、范阳、河东三镇节度使",
   "note": "起兵叛乱",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p02",
   "name": "杨国忠",
   "role": "宰相",
   "note": "安禄山借口诛杀",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p03",
   "name": "哥舒翰",
   "role": "唐将",
   "note": "守潼关",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p04",
   "name": "唐玄宗",
   "role": "皇帝",
   "note": "奔蜀",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p05",
   "name": "太子李亨",
   "role": "太子",
   "note": "灵武即位",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p06",
   "name": "安慶緒",
   "role": "安禄山子",
   "note": "杀父",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p07",
   "name": "史思明",
   "role": "叛将",
   "note": "继起",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "TAN__p08",
   "name": "史朝義",
   "role": "史思明子",
   "note": "败亡",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TAN_001",
   "subject": "event:ev_tang_anshi_llm_01",
   "predicate": "起兵原因",
   "value_text": "以诛杨国忠为名",
   "time": {
    "era_text": "天宝十四载冬",
    "start": "755-01-01",
    "end": "755-12-31",
    "gregorian_year": 755
   },
   "place": "fanyang",
   "source": "tang_anshi_src_llm",
   "quote": "以诛杨国忠为名",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "以诛杨国忠为名",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_002",
   "subject": "event:ev_tang_anshi_llm_01",
   "predicate": "兵力",
   "value_text": "三镇兵力南下",
   "time": {
    "era_text": "天宝十四载冬",
    "start": "755-01-01",
    "end": "755-12-31",
    "gregorian_year": 755
   },
   "place": "fanyang",
   "source": "tang_anshi_src_llm",
   "quote": "三镇节度使",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "三镇节度使",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_003",
   "subject": "event:ev_tang_anshi_llm_02",
   "predicate": "战役结果",
   "value_text": "哥舒翰兵败，长安陷",
   "time": {
    "era_text": "天宝十五载六月",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "tongguan",
   "source": "tang_anshi_src_llm",
   "quote": "哥舒翰守潼关被迫出战兵败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "哥舒翰守潼关被迫出战兵败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_004",
   "subject": "event:ev_tang_anshi_llm_02",
   "predicate": "皇帝出逃",
   "value_text": "玄宗奔蜀",
   "time": {
    "era_text": "天宝十五载六月",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "玄宗奔蜀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "玄宗奔蜀",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_005",
   "subject": "event:ev_tang_anshi_llm_03",
   "predicate": "即位",
   "value_text": "太子李亨灵武即位",
   "time": {
    "era_text": "天宝十五载七月",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "lingwu",
   "source": "tang_anshi_src_llm",
   "quote": "太子李亨于灵武即位",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "太子李亨于灵武即位",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_006",
   "subject": "event:ev_tang_anshi_llm_04",
   "predicate": "收复两京",
   "value_text": "唐借回纥兵收复",
   "time": {
    "era_text": "至德二载",
    "start": "757-01-01",
    "end": "757-12-31",
    "gregorian_year": 757
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "唐借回纥兵收复两京",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐借回纥兵收复两京",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_007",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "结束时间",
   "value_text": "763年史朝义败亡",
   "time": {
    "era_text": "广德元年",
    "start": "763-01-01",
    "end": "763-12-31",
    "gregorian_year": 763
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "763年史朝义败亡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "763年史朝义败亡",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_008",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "影响",
   "value_text": "藩镇割据形成",
   "time": {
    "era_text": "广德元年",
    "start": "763-01-01",
    "end": "763-12-31",
    "gregorian_year": 763
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "藩镇割据自此形成",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "藩镇割据自此形成",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_009",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "影响",
   "value_text": "唐由盛转衰",
   "time": {
    "era_text": "广德元年",
    "start": "763-01-01",
    "end": "763-12-31",
    "gregorian_year": 763
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "唐由盛转衰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    5
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "唐由盛转衰",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_010",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "人口损失",
   "value_text": "黄河中下游人口锐减",
   "time": {
    "era_text": "广德元年",
    "start": "763-01-01",
    "end": "763-12-31",
    "gregorian_year": 763
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "人口锐减",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "dims": [
    4
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "人口锐减",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_011",
   "subject": "event:ev_tang_anshi_llm_01",
   "predicate": "安禄山被杀",
   "value_text": "为子庆绪所杀",
   "time": {
    "era_text": "天宝十五载",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "luoyang",
   "source": "tang_anshi_src_llm",
   "quote": "为子庆绪所杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "为子庆绪所杀",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_012",
   "subject": "event:ev_tang_anshi_llm_01",
   "predicate": "史思明继起",
   "value_text": "史思明继安禄山起",
   "time": {
    "era_text": "天宝十五载",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "fanyang",
   "source": "tang_anshi_src_llm",
   "quote": "史思明继起",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "史思明继起",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_013",
   "subject": "event:ev_tang_anshi_llm_02",
   "predicate": "战役损失",
   "value_text": "哥舒翰兵败被俘",
   "time": {
    "era_text": "天宝十五载六月",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "tongguan",
   "source": "tang_anshi_src_llm",
   "quote": "兵败",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "史载有异",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "兵败",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_014",
   "subject": "event:ev_tang_anshi_llm_02",
   "predicate": "战役损失",
   "value_text": "哥舒翰被部下执降",
   "time": {
    "era_text": "天宝十五载六月",
    "start": "756-01-01",
    "end": "756-12-31",
    "gregorian_year": 756
   },
   "place": "tongguan",
   "source": "tang_anshi_src_llm",
   "quote": "被迫出战",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "theater",
   "note": "另一说",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "被迫出战",
   "dim_source": "fallback",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "TAN_015",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "影响",
   "value_text": "黄河中下游残破",
   "time": {
    "era_text": "广德元年",
    "start": "763-01-01",
    "end": "763-12-31",
    "gregorian_year": 763
   },
   "place": "changan",
   "source": "tang_anshi_src_llm",
   "quote": "黄河中下游残破",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "具体数据缺失",
   "dims": [
    4
   ],
   "lead": {
    "where": "黄河中下游",
    "skills": [
     "人口统计"
    ],
    "accept": "需考古数据"
   },
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "黄河中下游残破",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_tang_anshi_llm_05|影响",
   "subject": "event:ev_tang_anshi_llm_05",
   "predicate": "影响",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "TAN_008",
    "TAN_009"
   ]
  },
  {
   "id": "cf:event:ev_tang_anshi_llm_02|战役损失",
   "subject": "event:ev_tang_anshi_llm_02",
   "predicate": "战役损失",
   "kind": "scholarly_divergence",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "TAN_013",
    "TAN_014"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "TAN_015"
 ],
 "events": [
  {
   "id": "ev_tang_anshi_llm_01",
   "subject": "event:ev_tang_anshi_llm_01",
   "year": 755,
   "era": "天宝十四载冬",
   "title": "安禄山起兵",
   "kind": "战事",
   "text": "安禄山范阳起兵南下",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tang_anshi_llm_02",
   "subject": "event:ev_tang_anshi_llm_02",
   "year": 756,
   "era": "天宝十五载六月",
   "title": "长安陷落",
   "kind": "战事",
   "text": "叛军陷长安，玄宗奔蜀",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tang_anshi_llm_03",
   "subject": "event:ev_tang_anshi_llm_03",
   "year": 756,
   "era": "天宝十五载七月",
   "title": "肃宗灵武即位",
   "kind": "行政",
   "text": "太子李亨灵武即位",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tang_anshi_llm_04",
   "subject": "event:ev_tang_anshi_llm_04",
   "year": 757,
   "era": "至德二载",
   "title": "收复两京",
   "kind": "战事",
   "text": "唐借回纥兵收复两京",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_tang_anshi_llm_05",
   "subject": "event:ev_tang_anshi_llm_05",
   "year": 763,
   "era": "广德元年",
   "title": "叛乱平定",
   "kind": "战事",
   "text": "史朝义败亡，乱平",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "fanyang",
   "to": "luoyang",
   "type": "military",
   "label": "叛军南下",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "luoyang",
   "to": "changan",
   "type": "military",
   "label": "叛军西进",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "from": "changan",
   "to": "shu",
   "type": "military",
   "label": "玄宗奔蜀",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（现代概述）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "fanyang",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  },
  {
   "place_id": "luoyang",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  },
  {
   "place_id": "changan",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  },
  {
   "place_id": "tongguan",
   "party": "后世官修",
   "start": 1900,
   "end": 2000,
   "basis": "auto-generated: all territory to 后世官修"
  }
 ],
 "control_seats": [
  {
   "place_id": "fanyang",
   "name": "范阳",
   "lon": 116.4,
   "lat": 39.9,
   "region": "tang"
  },
  {
   "place_id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "region": "tang"
  },
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.95,
   "lat": 34.27,
   "region": "tang"
  },
  {
   "place_id": "tongguan",
   "name": "潼关",
   "lon": 110.27,
   "lat": 34.55,
   "region": "tang"
  }
 ],
 "control_years": [
  1900,
  2000
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
        107.832,
        33.153
       ],
       [
        117.518,
        41.017
       ],
       [
        107.832,
        33.153
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
         117.349,
         40.581
        ],
        [
         117.43,
         40.576
        ],
        [
         117.467,
         40.65
        ],
        [
         117.501,
         40.637
        ],
        [
         117.494,
         40.675
        ],
        [
         117.342,
         40.674
        ],
        [
         117.278,
         40.664
        ],
        [
         117.117,
         40.7
        ],
        [
         117.012,
         40.694
        ],
        [
         116.927,
         40.745
        ],
        [
         116.848,
         40.839
        ],
        [
         116.76,
         40.89
        ],
        [
         116.722,
         40.927
        ],
        [
         116.697,
         41.017
        ],
        [
         116.598,
         40.975
        ],
        [
         116.52,
         40.981
        ],
        [
         116.455,
         40.981
        ],
        [
         116.477,
         40.9
        ],
        [
         116.37,
         40.944
        ],
        [
         116.334,
         40.904
        ],
        [
         116.466,
         40.774
        ],
        [
         116.317,
         40.772
        ],
        [
         116.273,
         40.763
        ],
        [
         116.22,
         40.744
        ],
        [
         116.172,
         40.696
        ],
        [
         116.134,
         40.667
        ],
        [
         116.005,
         40.584
        ],
        [
         115.972,
         40.602
        ],
        [
         115.885,
         40.595
        ],
        [
         115.82,
         40.559
        ],
        [
         115.755,
         40.54
        ],
        [
         115.781,
         40.493
        ],
        [
         115.864,
         40.359
        ],
        [
         115.952,
         40.282
        ],
        [
         115.899,
         40.234
        ],
        [
         115.856,
         40.189
        ],
        [
         115.806,
         40.153
        ],
        [
         115.755,
         40.146
        ],
        [
         115.6,
         40.12
        ],
        [
         115.527,
         40.076
        ],
        [
         115.455,
         40.03
        ],
        [
         115.429,
         39.984
        ],
        [
         115.481,
         39.936
        ],
        [
         115.516,
         39.892
        ],
        [
         115.526,
         39.876
        ],
        [
         115.567,
         39.816
        ],
        [
         115.506,
         39.784
        ],
        [
         115.484,
         39.798
        ],
        [
         115.44,
         39.752
        ],
        [
         115.492,
         39.67
        ],
        [
         115.479,
         39.651
        ],
        [
         115.518,
         39.597
        ],
        [
         115.587,
         39.59
        ],
        [
         115.634,
         39.6
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.57
        ],
        [
         115.717,
         39.56
        ],
        [
         115.719,
         39.554
        ],
        [
         115.721,
         39.551
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.753,
         39.516
        ],
        [
         115.806,
         39.51
        ],
        [
         115.821,
         39.523
        ],
        [
         115.868,
         39.547
        ],
        [
         115.915,
         39.583
        ],
        [
         115.91,
         39.6
        ],
        [
         115.957,
         39.561
        ],
        [
         115.995,
         39.577
        ],
        [
         116.036,
         39.572
        ],
        [
         116.13,
         39.568
        ],
        [
         116.199,
         39.589
        ],
        [
         116.258,
         39.5
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.455,
         39.453
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.51
        ],
        [
         116.478,
         39.535
        ],
        [
         116.508,
         39.551
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.723,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.791,
         39.596
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.902,
         39.764
        ],
        [
         116.918,
         39.846
        ],
        [
         116.866,
         39.844
        ],
        [
         116.784,
         39.891
        ],
        [
         116.758,
         39.968
        ],
        [
         116.82,
         40.028
        ],
        [
         116.868,
         40.042
        ],
        [
         116.945,
         40.041
        ],
        [
         117.052,
         40.06
        ],
        [
         117.105,
         40.074
        ],
        [
         117.16,
         40.077
        ],
        [
         117.21,
         40.082
        ],
        [
         117.224,
         40.095
        ],
        [
         117.255,
         40.115
        ],
        [
         117.274,
         40.106
        ],
        [
         117.349,
         40.137
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.39,
         40.228
        ],
        [
         117.331,
         40.29
        ],
        [
         117.272,
         40.325
        ],
        [
         117.243,
         40.369
        ],
        [
         117.234,
         40.417
        ],
        [
         117.209,
         40.502
        ],
        [
         117.248,
         40.54
        ],
        [
         117.349,
         40.581
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.518,
         39.883
        ],
        [
         117.508,
         39.902
        ],
        [
         117.512,
         39.909
        ],
        [
         117.513,
         39.911
        ],
        [
         117.518,
         39.948
        ],
        [
         117.505,
         40.227
        ],
        [
         117.416,
         40.249
        ],
        [
         117.384,
         40.188
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.307,
         40.137
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.224,
         40.095
        ],
        [
         117.192,
         40.066
        ],
        [
         117.151,
         39.945
        ],
        [
         117.163,
         39.877
        ],
        [
         117.248,
         39.861
        ],
        [
         117.192,
         39.833
        ],
        [
         117.158,
         39.797
        ],
        [
         117.162,
         39.749
        ],
        [
         117.165,
         39.719
        ],
        [
         117.153,
         39.624
        ],
        [
         117.109,
         39.625
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.677
        ],
        [
         116.812,
         39.616
        ],
        [
         116.787,
         39.554
        ],
        [
         116.821,
         39.482
        ],
        [
         116.832,
         39.436
        ],
        [
         116.84,
         39.413
        ],
        [
         116.818,
         39.374
        ],
        [
         116.871,
         39.358
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.87,
         39.154
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.728,
         38.975
        ],
        [
         116.722,
         38.897
        ],
        [
         116.751,
         38.831
        ],
        [
         116.746,
         38.754
        ],
        [
         116.794,
         38.744
        ],
        [
         116.877,
         38.681
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         117.068,
         38.681
        ],
        [
         117.071,
         38.608
        ],
        [
         117.151,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.213,
         38.64
        ],
        [
         117.259,
         38.608
        ],
        [
         117.253,
         38.556
        ],
        [
         117.432,
         38.602
        ],
        [
         117.518,
         38.615
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.467,
         40.65
        ],
        [
         117.43,
         40.576
        ],
        [
         117.349,
         40.581
        ],
        [
         117.27,
         40.561
        ],
        [
         117.263,
         40.513
        ],
        [
         117.264,
         40.442
        ],
        [
         117.226,
         40.369
        ],
        [
         117.272,
         40.325
        ],
        [
         117.295,
         40.278
        ],
        [
         117.351,
         40.23
        ],
        [
         117.416,
         40.249
        ],
        [
         117.505,
         40.227
        ],
        [
         117.518,
         39.948
        ],
        [
         117.513,
         39.911
        ],
        [
         117.512,
         39.909
        ],
        [
         117.508,
         39.902
        ],
        [
         117.518,
         39.883
        ],
        [
         113.931,
         41.017
        ],
        [
         113.995,
         40.939
        ],
        [
         114.042,
         40.918
        ],
        [
         114.074,
         40.857
        ],
        [
         114.08,
         40.79
        ],
        [
         114.103,
         40.771
        ],
        [
         114.162,
         40.714
        ],
        [
         114.236,
         40.607
        ],
        [
         114.274,
         40.553
        ],
        [
         114.282,
         40.495
        ],
        [
         114.3,
         40.44
        ],
        [
         114.312,
         40.373
        ],
        [
         114.39,
         40.351
        ],
        [
         114.481,
         40.348
        ],
        [
         114.511,
         40.303
        ],
        [
         114.406,
         40.246
        ],
        [
         114.293,
         40.23
        ],
        [
         114.236,
         40.198
        ],
        [
         114.136,
         40.175
        ],
        [
         114.073,
         40.169
        ],
        [
         114.102,
         40.1
        ],
        [
         114.046,
         40.057
        ],
        [
         113.989,
         40.112
        ],
        [
         113.91,
         40.016
        ],
        [
         114.028,
         39.959
        ],
        [
         114.068,
         39.923
        ],
        [
         114.212,
         39.919
        ],
        [
         114.204,
         39.885
        ],
        [
         114.287,
         39.871
        ],
        [
         114.395,
         39.867
        ],
        [
         114.39,
         39.819
        ],
        [
         114.41,
         39.762
        ],
        [
         114.432,
         39.614
        ],
        [
         114.515,
         39.565
        ],
        [
         114.533,
         39.486
        ],
        [
         114.497,
         39.438
        ],
        [
         114.467,
         39.33
        ],
        [
         114.437,
         39.259
        ],
        [
         114.476,
         39.216
        ],
        [
         114.388,
         39.177
        ],
        [
         114.37,
         39.108
        ],
        [
         114.252,
         39.074
        ],
        [
         114.157,
         39.061
        ],
        [
         114.083,
         39.093
        ],
        [
         114.064,
         39.094
        ],
        [
         114.007,
         39.123
        ],
        [
         113.962,
         39.101
        ],
        [
         113.898,
         39.068
        ],
        [
         113.777,
         38.987
        ],
        [
         113.776,
         38.886
        ],
        [
         113.856,
         38.829
        ],
        [
         113.84,
         38.758
        ],
        [
         113.776,
         38.71
        ],
        [
         113.702,
         38.652
        ],
        [
         113.603,
         38.587
        ],
        [
         113.546,
         38.493
        ],
        [
         113.538,
         38.418
        ],
        [
         113.558,
         38.343
        ],
        [
         113.57,
         38.237
        ],
        [
         113.643,
         38.232
        ],
        [
         113.711,
         38.214
        ],
        [
         113.797,
         38.163
        ],
        [
         113.811,
         38.118
        ],
        [
         113.872,
         37.99
        ],
        [
         113.936,
         37.923
        ],
        [
         113.977,
         37.817
        ],
        [
         114.045,
         37.762
        ],
        [
         113.994,
         37.707
        ],
        [
         114.128,
         37.698
        ],
        [
         114.116,
         37.62
        ],
        [
         114.037,
         37.494
        ],
        [
         113.974,
         37.403
        ],
        [
         113.902,
         37.31
        ],
        [
         113.853,
         37.215
        ],
        [
         113.773,
         37.152
        ],
        [
         113.758,
         37.075
        ],
        [
         113.772,
         37.017
        ],
        [
         113.761,
         36.956
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.879
        ],
        [
         113.676,
         36.856
        ],
        [
         113.6,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.465,
         36.708
        ],
        [
         113.477,
         36.655
        ],
        [
         113.545,
         36.623
        ],
        [
         113.57,
         36.586
        ],
        [
         113.56,
         36.529
        ],
        [
         113.587,
         36.461
        ],
        [
         113.67,
         36.425
        ],
        [
         113.731,
         36.363
        ],
        [
         113.813,
         36.332
        ],
        [
         113.849,
         36.348
        ],
        [
         113.911,
         36.315
        ],
        [
         113.982,
         36.318
        ],
        [
         114.056,
         36.329
        ],
        [
         114.08,
         36.27
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.21,
         36.273
        ],
        [
         114.258,
         36.264
        ],
        [
         114.345,
         36.256
        ],
        [
         114.408,
         36.225
        ],
        [
         114.466,
         36.198
        ],
        [
         114.533,
         36.172
        ],
        [
         114.589,
         36.118
        ],
        [
         114.72,
         36.14
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.145
        ],
        [
         114.927,
         36.089
        ],
        [
         114.998,
         36.07
        ],
        [
         115.049,
         36.162
        ],
        [
         115.105,
         36.172
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.279,
         36.138
        ],
        [
         115.313,
         36.088
        ],
        [
         115.377,
         36.128
        ],
        [
         115.465,
         36.17
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.417,
         36.293
        ],
        [
         115.367,
         36.309
        ],
        [
         115.34,
         36.398
        ],
        [
         115.317,
         36.454
        ],
        [
         115.273,
         36.497
        ],
        [
         115.355,
         36.627
        ],
        [
         115.42,
         36.687
        ],
        [
         115.48,
         36.76
        ],
        [
         115.684,
         36.808
        ],
        [
         115.758,
         36.902
        ],
        [
         115.777,
         36.993
        ],
        [
         115.888,
         37.112
        ],
        [
         115.912,
         37.177
        ],
        [
         115.97,
         37.24
        ],
        [
         116.024,
         37.36
        ],
        [
         116.106,
         37.369
        ],
        [
         116.193,
         37.366
        ],
        [
         116.285,
         37.404
        ],
        [
         116.243,
         37.448
        ],
        [
         116.241,
         37.49
        ],
        [
         116.276,
         37.467
        ],
        [
         116.279,
         37.525
        ],
        [
         116.336,
         37.581
        ],
        [
         116.38,
         37.522
        ],
        [
         116.38,
         37.522
        ],
        [
         116.434,
         37.473
        ],
        [
         116.483,
         37.522
        ],
        [
         116.605,
         37.625
        ],
        [
         116.679,
         37.729
        ],
        [
         116.754,
         37.77
        ],
        [
         116.805,
         37.849
        ],
        [
         116.919,
         37.846
        ],
        [
         117.075,
         37.849
        ],
        [
         117.185,
         37.85
        ],
        [
         117.32,
         37.862
        ],
        [
         117.439,
         37.854
        ],
        [
         117.513,
         37.943
        ],
        [
         117.518,
         38.615
        ],
        [
         117.432,
         38.602
        ],
        [
         117.253,
         38.556
        ],
        [
         117.259,
         38.608
        ],
        [
         117.213,
         38.64
        ],
        [
         117.184,
         38.618
        ],
        [
         117.151,
         38.618
        ],
        [
         117.071,
         38.608
        ],
        [
         117.068,
         38.681
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.877,
         38.681
        ],
        [
         116.794,
         38.744
        ],
        [
         116.746,
         38.754
        ],
        [
         116.751,
         38.831
        ],
        [
         116.722,
         38.897
        ],
        [
         116.728,
         38.975
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.87,
         39.154
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.871,
         39.358
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.413
        ],
        [
         116.832,
         39.436
        ],
        [
         116.821,
         39.482
        ],
        [
         116.787,
         39.554
        ],
        [
         116.812,
         39.616
        ],
        [
         116.749,
         39.62
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.473,
         39.553
        ],
        [
         116.438,
         39.527
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.482
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.307,
         39.488
        ],
        [
         116.241,
         39.564
        ],
        [
         116.152,
         39.583
        ],
        [
         116.099,
         39.575
        ],
        [
         116.026,
         39.588
        ],
        [
         115.978,
         39.596
        ],
        [
         115.91,
         39.6
        ],
        [
         115.915,
         39.583
        ],
        [
         115.868,
         39.547
        ],
        [
         115.828,
         39.541
        ],
        [
         115.821,
         39.523
        ],
        [
         115.806,
         39.51
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.725,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.721,
         39.551
        ],
        [
         115.719,
         39.554
        ],
        [
         115.717,
         39.56
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.578
        ],
        [
         115.668,
         39.615
        ],
        [
         115.634,
         39.6
        ],
        [
         115.546,
         39.619
        ],
        [
         115.522,
         39.64
        ],
        [
         115.479,
         39.651
        ],
        [
         115.487,
         39.742
        ],
        [
         115.444,
         39.786
        ],
        [
         115.484,
         39.798
        ],
        [
         115.553,
         39.795
        ],
        [
         115.514,
         39.838
        ],
        [
         115.516,
         39.892
        ],
        [
         115.523,
         39.899
        ],
        [
         115.426,
         39.951
        ],
        [
         115.45,
         39.993
        ],
        [
         115.485,
         40.04
        ],
        [
         115.591,
         40.096
        ],
        [
         115.755,
         40.146
        ],
        [
         115.774,
         40.176
        ],
        [
         115.848,
         40.147
        ],
        [
         115.87,
         40.186
        ],
        [
         115.969,
         40.264
        ],
        [
         115.918,
         40.354
        ],
        [
         115.772,
         40.444
        ],
        [
         115.736,
         40.503
        ],
        [
         115.785,
         40.558
        ],
        [
         115.828,
         40.588
        ],
        [
         115.908,
         40.617
        ],
        [
         115.982,
         40.579
        ],
        [
         116.099,
         40.631
        ],
        [
         116.163,
         40.662
        ],
        [
         116.205,
         40.74
        ],
        [
         116.247,
         40.792
        ],
        [
         116.311,
         40.755
        ],
        [
         116.454,
         40.766
        ],
        [
         116.438,
         40.819
        ],
        [
         116.34,
         40.929
        ],
        [
         116.398,
         40.906
        ],
        [
         116.447,
         40.954
        ],
        [
         116.52,
         40.981
        ],
        [
         116.568,
         40.993
        ],
        [
         116.621,
         41.017
        ],
        [
         116.678,
         40.971
        ],
        [
         116.714,
         40.91
        ],
        [
         116.813,
         40.848
        ],
        [
         116.924,
         40.774
        ],
        [
         116.965,
         40.71
        ],
        [
         117.112,
         40.707
        ],
        [
         117.208,
         40.695
        ],
        [
         117.32,
         40.658
        ],
        [
         117.409,
         40.687
        ],
        [
         117.515,
         40.66
        ],
        [
         117.467,
         40.65
        ]
       ]
      ],
      [
       [
        [
         117.21,
         40.082
        ],
        [
         117.16,
         40.077
        ],
        [
         117.105,
         40.074
        ],
        [
         117.052,
         40.06
        ],
        [
         116.945,
         40.041
        ],
        [
         116.868,
         40.042
        ],
        [
         116.82,
         40.028
        ],
        [
         116.758,
         39.968
        ],
        [
         116.784,
         39.891
        ],
        [
         116.866,
         39.844
        ],
        [
         116.918,
         39.846
        ],
        [
         116.902,
         39.764
        ],
        [
         116.887,
         39.725
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.983,
         39.639
        ],
        [
         117.016,
         39.654
        ],
        [
         117.109,
         39.625
        ],
        [
         117.178,
         39.645
        ],
        [
         117.165,
         39.719
        ],
        [
         117.206,
         39.764
        ],
        [
         117.156,
         39.817
        ],
        [
         117.252,
         39.834
        ],
        [
         117.228,
         39.853
        ],
        [
         117.163,
         39.877
        ],
        [
         117.198,
         39.993
        ],
        [
         117.21,
         40.082
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
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
         112.039,
         35.046
        ],
        [
         112.056,
         35.099
        ],
        [
         112.04,
         35.194
        ],
        [
         112.059,
         35.28
        ],
        [
         112.217,
         35.253
        ],
        [
         112.305,
         35.252
        ],
        [
         112.368,
         35.22
        ],
        [
         112.513,
         35.218
        ],
        [
         112.628,
         35.263
        ],
        [
         112.773,
         35.208
        ],
        [
         112.884,
         35.244
        ],
        [
         112.936,
         35.284
        ],
        [
         112.986,
         35.34
        ],
        [
         113.067,
         35.354
        ],
        [
         113.149,
         35.351
        ],
        [
         113.185,
         35.409
        ],
        [
         113.243,
         35.449
        ],
        [
         113.312,
         35.481
        ],
        [
         113.392,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.558,
         35.622
        ],
        [
         113.578,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.588,
         35.737
        ],
        [
         113.583,
         35.818
        ],
        [
         113.638,
         35.87
        ],
        [
         113.649,
         35.994
        ],
        [
         113.695,
         36.027
        ],
        [
         113.686,
         36.056
        ],
        [
         113.655,
         36.125
        ],
        [
         113.706,
         36.149
        ],
        [
         113.698,
         36.182
        ],
        [
         113.716,
         36.262
        ],
        [
         113.736,
         36.325
        ],
        [
         113.708,
         36.423
        ],
        [
         113.636,
         36.451
        ],
        [
         113.554,
         36.495
        ],
        [
         113.589,
         36.548
        ],
        [
         113.54,
         36.594
        ],
        [
         113.487,
         36.635
        ],
        [
         113.507,
         36.705
        ],
        [
         113.5,
         36.741
        ],
        [
         113.549,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.859
        ],
        [
         113.793,
         36.895
        ],
        [
         113.792,
         36.988
        ],
        [
         113.788,
         37.06
        ],
        [
         113.774,
         37.107
        ],
        [
         113.832,
         37.168
        ],
        [
         113.886,
         37.239
        ],
        [
         113.963,
         37.356
        ],
        [
         114.015,
         37.425
        ],
        [
         114.119,
         37.591
        ],
        [
         114.14,
         37.676
        ],
        [
         114.068,
         37.722
        ],
        [
         113.997,
         37.73
        ],
        [
         114.007,
         37.813
        ],
        [
         113.959,
         37.906
        ],
        [
         113.901,
         37.985
        ],
        [
         113.877,
         38.055
        ],
        [
         113.832,
         38.169
        ],
        [
         113.721,
         38.175
        ],
        [
         113.679,
         38.205
        ],
        [
         113.599,
         38.227
        ],
        [
         113.545,
         38.271
        ],
        [
         113.525,
         38.383
        ],
        [
         113.583,
         38.46
        ],
        [
         113.562,
         38.558
        ],
        [
         113.613,
         38.646
        ],
        [
         113.721,
         38.713
        ],
        [
         113.803,
         38.763
        ],
        [
         113.837,
         38.796
        ],
        [
         113.795,
         38.861
        ],
        [
         113.768,
         38.96
        ],
        [
         113.807,
         38.99
        ],
        [
         113.93,
         39.064
        ],
        [
         113.995,
         39.096
        ],
        [
         114.051,
         39.136
        ],
        [
         114.083,
         39.093
        ],
        [
         114.109,
         39.052
        ],
        [
         114.181,
         39.049
        ],
        [
         114.346,
         39.075
        ],
        [
         114.361,
         39.134
        ],
        [
         114.444,
         39.174
        ],
        [
         114.416,
         39.243
        ],
        [
         114.431,
         39.308
        ],
        [
         114.469,
         39.401
        ],
        [
         114.502,
         39.477
        ],
        [
         114.569,
         39.574
        ],
        [
         114.496,
         39.608
        ],
        [
         114.408,
         39.652
        ],
        [
         114.417,
         39.776
        ],
        [
         114.407,
         39.833
        ],
        [
         114.286,
         39.858
        ],
        [
         114.216,
         39.862
        ],
        [
         114.229,
         39.9
        ],
        [
         114.174,
         39.898
        ],
        [
         114.047,
         39.916
        ],
        [
         114.029,
         39.986
        ],
        [
         113.959,
         40.033
        ],
        [
         114.018,
         40.104
        ],
        [
         114.087,
         40.072
        ],
        [
         114.073,
         40.169
        ],
        [
         114.098,
         40.194
        ],
        [
         114.18,
         40.191
        ],
        [
         114.255,
         40.236
        ],
        [
         114.363,
         40.25
        ],
        [
         114.47,
         40.268
        ],
        [
         114.531,
         40.345
        ],
        [
         114.439,
         40.372
        ],
        [
         114.381,
         40.363
        ],
        [
         114.286,
         40.425
        ],
        [
         114.267,
         40.474
        ],
        [
         114.294,
         40.552
        ],
        [
         114.283,
         40.591
        ],
        [
         114.183,
         40.672
        ],
        [
         114.135,
         40.737
        ],
        [
         114.064,
         40.707
        ],
        [
         114.042,
         40.609
        ],
        [
         114.08,
         40.548
        ],
        [
         114.011,
         40.516
        ],
        [
         113.89,
         40.467
        ],
        [
         113.795,
         40.518
        ],
        [
         113.689,
         40.448
        ],
        [
         113.5,
         40.334
        ],
        [
         113.317,
         40.32
        ],
        [
         113.251,
         40.413
        ],
        [
         113.033,
         40.369
        ],
        [
         112.849,
         40.207
        ],
        [
         112.712,
         40.179
        ],
        [
         112.512,
         40.269
        ],
        [
         112.418,
         40.295
        ],
        [
         112.31,
         40.256
        ],
        [
         112.233,
         40.17
        ],
        [
         112.183,
         40.084
        ],
        [
         112.142,
         40.027
        ],
        [
         112.076,
         39.919
        ],
        [
         112.013,
         39.827
        ],
        [
         111.96,
         39.693
        ],
        [
         111.938,
         39.623
        ],
        [
         111.843,
         39.62
        ],
        [
         111.723,
         39.606
        ],
        [
         111.625,
         39.634
        ],
        [
         111.497,
         39.662
        ],
        [
         111.461,
         39.607
        ],
        [
         111.422,
         39.539
        ],
        [
         111.372,
         39.479
        ],
        [
         111.337,
         39.421
        ],
        [
         111.143,
         39.408
        ],
        [
         111.159,
         39.363
        ],
        [
         111.186,
         39.351
        ],
        [
         111.202,
         39.305
        ],
        [
         111.213,
         39.257
        ],
        [
         111.163,
         39.153
        ],
        [
         111.147,
         39.101
        ],
        [
         111.094,
         39.03
        ],
        [
         110.998,
         38.998
        ],
        [
         111.01,
         38.933
        ],
        [
         110.996,
         38.868
        ],
        [
         110.965,
         38.756
        ],
        [
         110.916,
         38.674
        ],
        [
         110.898,
         38.587
        ],
        [
         110.908,
         38.521
        ],
        [
         110.874,
         38.454
        ],
        [
         110.797,
         38.454
        ],
        [
         110.747,
         38.366
        ],
        [
         110.661,
         38.309
        ],
        [
         110.578,
         38.297
        ],
        [
         110.528,
         38.212
        ],
        [
         110.52,
         38.131
        ],
        [
         110.508,
         38.013
        ],
        [
         110.523,
         37.955
        ],
        [
         110.68,
         37.79
        ],
        [
         110.751,
         37.736
        ],
        [
         110.706,
         37.706
        ],
        [
         110.793,
         37.651
        ],
        [
         110.772,
         37.595
        ],
        [
         110.771,
         37.538
        ],
        [
         110.74,
         37.449
        ],
        [
         110.631,
         37.373
        ],
        [
         110.695,
         37.35
        ],
        [
         110.69,
         37.287
        ],
        [
         110.652,
         37.257
        ],
        [
         110.535,
         37.138
        ],
        [
         110.496,
         37.087
        ],
        [
         110.417,
         37.027
        ],
        [
         110.383,
         37.022
        ],
        [
         110.424,
         36.964
        ],
        [
         110.376,
         36.882
        ],
        [
         110.407,
         36.825
        ],
        [
         110.408,
         36.776
        ],
        [
         110.438,
         36.686
        ],
        [
         110.395,
         36.677
        ],
        [
         110.448,
         36.621
        ],
        [
         110.489,
         36.557
        ],
        [
         110.473,
         36.453
        ],
        [
         110.487,
         36.394
        ],
        [
         110.474,
         36.307
        ],
        [
         110.456,
         36.227
        ],
        [
         110.468,
         36.075
        ],
        [
         110.493,
         35.994
        ],
        [
         110.502,
         35.948
        ],
        [
         110.512,
         35.88
        ],
        [
         110.55,
         35.838
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        107.832,
        41.017
       ],
       [
        107.843,
        37.829
       ],
       [
        107.982,
        37.787
       ],
       [
        108.026,
        37.696
       ],
       [
        108.025,
        37.65
       ],
       [
        108.134,
        37.622
       ],
       [
        108.206,
        37.656
       ],
       [
        108.293,
        37.657
       ],
       [
        108.422,
        37.649
       ],
       [
        108.533,
        37.691
       ],
       [
        108.7,
        37.67
       ],
       [
        108.778,
        37.684
       ],
       [
        108.785,
        37.765
       ],
       [
        108.792,
        37.873
       ],
       [
        108.827,
        37.989
       ],
       [
        108.831,
        38.05
       ],
       [
        108.894,
        37.978
       ],
       [
        108.974,
        37.932
       ],
       [
        109.019,
        37.972
       ],
       [
        109.07,
        38.023
       ],
       [
        109.069,
        38.091
       ],
       [
        108.939,
        38.208
       ],
       [
        108.962,
        38.265
       ],
       [
        109.051,
        38.385
       ],
       [
        109.129,
        38.48
       ],
       [
        109.197,
        38.553
       ],
       [
        109.332,
        38.598
       ],
       [
        109.329,
        38.66
       ],
       [
        109.404,
        38.721
       ],
       [
        109.511,
        38.834
       ],
       [
        109.624,
        38.855
       ],
       [
        109.685,
        38.968
       ],
       [
        109.725,
        39.018
       ],
       [
        109.793,
        39.074
       ],
       [
        109.891,
        39.104
       ],
       [
        109.894,
        39.141
       ],
       [
        109.872,
        39.244
       ],
       [
        109.962,
        39.212
       ],
       [
        110.109,
        39.25
       ],
       [
        110.184,
        39.355
       ],
       [
        110.137,
        39.392
       ],
       [
        110.153,
        39.454
       ],
       [
        110.258,
        39.407
       ],
       [
        110.43,
        39.341
       ],
       [
        110.483,
        39.361
       ],
       [
        110.56,
        39.351
       ],
       [
        110.597,
        39.283
       ],
       [
        110.703,
        39.274
       ],
       [
        110.738,
        39.349
       ],
       [
        110.87,
        39.494
       ],
       [
        110.959,
        39.519
       ],
       [
        111.101,
        39.559
       ],
       [
        111.155,
        39.569
       ],
       [
        111.105,
        39.498
       ],
       [
        111.059,
        39.448
       ],
       [
        111.098,
        39.402
       ],
       [
        111.126,
        39.366
       ],
       [
        111.172,
        39.423
       ],
       [
        111.359,
        39.432
       ],
       [
        111.431,
        39.509
       ],
       [
        111.441,
        39.597
       ],
       [
        111.445,
        39.64
       ],
       [
        111.526,
        39.662
       ],
       [
        111.659,
        39.642
       ],
       [
        111.784,
        39.589
       ],
       [
        111.879,
        39.606
       ],
       [
        111.925,
        39.667
       ],
       [
        111.97,
        39.797
       ],
       [
        112.042,
        39.886
       ],
       [
        112.133,
        40.002
       ],
       [
        112.182,
        40.061
       ],
       [
        112.232,
        40.133
       ],
       [
        112.3,
        40.211
       ],
       [
        112.349,
        40.257
       ],
       [
        112.456,
        40.3
       ],
       [
        112.63,
        40.236
       ],
       [
        112.744,
        40.167
       ],
       [
        112.898,
        40.329
       ],
       [
        113.083,
        40.375
       ],
       [
        113.276,
        40.389
       ],
       [
        113.388,
        40.319
       ],
       [
        113.56,
        40.348
       ],
       [
        113.763,
        40.474
       ],
       [
        113.851,
        40.461
       ],
       [
        113.949,
        40.515
       ],
       [
        114.062,
        40.529
       ],
       [
        114.077,
        40.576
       ],
       [
        114.072,
        40.679
       ],
       [
        114.085,
        40.73
       ],
       [
        114.103,
        40.771
       ],
       [
        114.08,
        40.79
       ],
       [
        114.074,
        40.857
       ],
       [
        114.042,
        40.918
       ],
       [
        113.995,
        40.939
       ],
       [
        113.931,
        41.017
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.312,
         34.562
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.5
        ],
        [
         117.248,
         34.451
        ],
        [
         117.139,
         34.527
        ],
        [
         117.104,
         34.649
        ],
        [
         117.062,
         34.676
        ],
        [
         117.022,
         34.759
        ],
        [
         116.951,
         34.811
        ],
        [
         116.966,
         34.845
        ],
        [
         116.922,
         34.895
        ],
        [
         116.822,
         34.93
        ],
        [
         116.789,
         34.975
        ],
        [
         116.678,
         34.939
        ],
        [
         116.614,
         34.923
        ],
        [
         116.445,
         34.896
        ],
        [
         116.403,
         34.756
        ],
        [
         116.364,
         34.715
        ],
        [
         116.374,
         34.64
        ],
        [
         116.433,
         34.63
        ],
        [
         116.491,
         34.574
        ],
        [
         116.592,
         34.494
        ],
        [
         116.723,
         34.472
        ],
        [
         116.783,
         34.43
        ],
        [
         116.909,
         34.408
        ],
        [
         116.961,
         34.364
        ],
        [
         116.969,
         34.284
        ],
        [
         117.025,
         34.167
        ],
        [
         117.124,
         34.128
        ],
        [
         117.192,
         34.069
        ],
        [
         117.277,
         34.079
        ],
        [
         117.357,
         34.088
        ],
        [
         117.435,
         34.028
        ],
        [
         117.518,
         34.059
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.57
        ],
        [
         117.325,
         34.573
        ],
        [
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.6,
         34.014
        ],
        [
         116.643,
         33.897
        ],
        [
         116.567,
         33.908
        ],
        [
         116.486,
         33.87
        ],
        [
         116.437,
         33.801
        ],
        [
         116.394,
         33.783
        ],
        [
         116.263,
         33.73
        ],
        [
         116.156,
         33.71
        ],
        [
         116.1,
         33.783
        ],
        [
         116.056,
         33.805
        ],
        [
         115.982,
         33.917
        ],
        [
         115.958,
         34.008
        ],
        [
         115.877,
         34.029
        ],
        [
         115.85,
         34.005
        ],
        [
         115.809,
         34.062
        ],
        [
         115.736,
         34.077
        ],
        [
         115.658,
         34.061
        ],
        [
         115.607,
         34.03
        ],
        [
         115.578,
         33.95
        ],
        [
         115.632,
         33.87
        ],
        [
         115.577,
         33.788
        ],
        [
         115.602,
         33.719
        ],
        [
         115.64,
         33.585
        ],
        [
         115.511,
         33.553
        ],
        [
         115.423,
         33.557
        ],
        [
         115.367,
         33.523
        ],
        [
         115.346,
         33.45
        ],
        [
         115.315,
         33.431
        ],
        [
         115.314,
         33.377
        ],
        [
         115.365,
         33.336
        ],
        [
         115.335,
         33.298
        ],
        [
         115.301,
         33.204
        ],
        [
         114.94,
         33.153
        ],
        [
         114.931,
         33.153
        ],
        [
         117.518,
         34.059
        ],
        [
         117.435,
         34.028
        ],
        [
         117.357,
         34.088
        ],
        [
         117.277,
         34.079
        ],
        [
         117.192,
         34.069
        ],
        [
         117.124,
         34.128
        ],
        [
         117.025,
         34.167
        ],
        [
         116.969,
         34.284
        ],
        [
         116.961,
         34.364
        ],
        [
         116.909,
         34.408
        ],
        [
         116.783,
         34.43
        ],
        [
         116.723,
         34.472
        ],
        [
         116.592,
         34.494
        ],
        [
         116.491,
         34.574
        ],
        [
         116.433,
         34.63
        ],
        [
         116.374,
         34.64
        ],
        [
         116.325,
         34.601
        ],
        [
         116.248,
         34.552
        ],
        [
         116.191,
         34.536
        ],
        [
         116.178,
         34.496
        ],
        [
         116.179,
         34.43
        ],
        [
         116.213,
         34.382
        ],
        [
         116.302,
         34.342
        ],
        [
         116.372,
         34.266
        ],
        [
         116.409,
         34.274
        ],
        [
         116.516,
         34.296
        ],
        [
         116.582,
         34.266
        ],
        [
         116.543,
         34.204
        ],
        [
         116.536,
         34.151
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.374,
         34.64
        ],
        [
         116.364,
         34.715
        ],
        [
         116.403,
         34.756
        ],
        [
         116.445,
         34.896
        ],
        [
         116.614,
         34.923
        ],
        [
         116.678,
         34.939
        ],
        [
         116.789,
         34.975
        ],
        [
         116.822,
         34.93
        ],
        [
         116.922,
         34.895
        ],
        [
         116.966,
         34.845
        ],
        [
         116.951,
         34.811
        ],
        [
         117.022,
         34.759
        ],
        [
         117.062,
         34.676
        ],
        [
         117.104,
         34.649
        ],
        [
         117.139,
         34.527
        ],
        [
         117.248,
         34.451
        ],
        [
         117.273,
         34.5
        ],
        [
         117.304,
         34.542
        ],
        [
         117.312,
         34.562
        ],
        [
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
        ],
        [
         117.371,
         34.585
        ],
        [
         117.403,
         34.551
        ],
        [
         117.518,
         34.472
        ],
        [
         117.513,
         37.943
        ],
        [
         117.439,
         37.854
        ],
        [
         117.32,
         37.862
        ],
        [
         117.185,
         37.85
        ],
        [
         117.075,
         37.849
        ],
        [
         116.919,
         37.846
        ],
        [
         116.805,
         37.849
        ],
        [
         116.754,
         37.77
        ],
        [
         116.679,
         37.729
        ],
        [
         116.605,
         37.625
        ],
        [
         116.483,
         37.522
        ],
        [
         116.434,
         37.473
        ],
        [
         116.38,
         37.522
        ],
        [
         116.38,
         37.522
        ],
        [
         116.336,
         37.581
        ],
        [
         116.279,
         37.525
        ],
        [
         116.276,
         37.467
        ],
        [
         116.241,
         37.49
        ],
        [
         116.243,
         37.448
        ],
        [
         116.285,
         37.404
        ],
        [
         116.193,
         37.366
        ],
        [
         116.106,
         37.369
        ],
        [
         116.024,
         37.36
        ],
        [
         115.97,
         37.24
        ],
        [
         115.912,
         37.177
        ],
        [
         115.888,
         37.112
        ],
        [
         115.777,
         36.993
        ],
        [
         115.758,
         36.902
        ],
        [
         115.684,
         36.808
        ],
        [
         115.48,
         36.76
        ],
        [
         115.42,
         36.687
        ],
        [
         115.355,
         36.627
        ],
        [
         115.273,
         36.497
        ],
        [
         115.317,
         36.454
        ],
        [
         115.34,
         36.398
        ],
        [
         115.367,
         36.309
        ],
        [
         115.417,
         36.293
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.126
        ],
        [
         115.448,
         36.012
        ],
        [
         115.354,
         35.939
        ],
        [
         115.335,
         35.797
        ],
        [
         115.408,
         35.809
        ],
        [
         115.488,
         35.881
        ],
        [
         115.505,
         35.899
        ],
        [
         115.584,
         35.922
        ],
        [
         115.699,
         35.966
        ],
        [
         115.78,
         35.994
        ],
        [
         115.86,
         36.004
        ],
        [
         115.99,
         36.045
        ],
        [
         116.099,
         36.112
        ],
        [
         116.049,
         35.97
        ],
        [
         115.912,
         35.96
        ],
        [
         115.873,
         35.919
        ],
        [
         115.86,
         35.858
        ],
        [
         115.774,
         35.854
        ],
        [
         115.696,
         35.789
        ],
        [
         115.623,
         35.739
        ],
        [
         115.486,
         35.71
        ],
        [
         115.345,
         35.554
        ],
        [
         115.307,
         35.48
        ],
        [
         115.172,
         35.427
        ],
        [
         115.118,
         35.4
        ],
        [
         115.074,
         35.374
        ],
        [
         114.958,
         35.261
        ],
        [
         114.932,
         35.198
        ],
        [
         114.842,
         35.151
        ],
        [
         114.836,
         35.077
        ],
        [
         114.852,
         35.042
        ],
        [
         114.881,
         35.004
        ],
        [
         114.951,
         34.99
        ],
        [
         115.029,
         34.972
        ],
        [
         115.128,
         35.005
        ],
        [
         115.219,
         34.96
        ],
        [
         115.252,
         34.906
        ],
        [
         115.256,
         34.845
        ],
        [
         115.427,
         34.805
        ],
        [
         115.434,
         34.725
        ],
        [
         115.516,
         34.582
        ],
        [
         115.623,
         34.574
        ],
        [
         115.697,
         34.594
        ],
        [
         115.827,
         34.558
        ],
        [
         115.984,
         34.589
        ],
        [
         116.037,
         34.593
        ],
        [
         116.135,
         34.56
        ],
        [
         116.197,
         34.576
        ],
        [
         116.286,
         34.609
        ],
        [
         116.334,
         34.621
        ]
       ]
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.513,
         35.89
        ],
        [
         115.495,
         35.896
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         114.931,
         33.153
        ],
        [
         114.94,
         33.153
        ],
        [
         115.301,
         33.204
        ],
        [
         115.335,
         33.298
        ],
        [
         115.365,
         33.336
        ],
        [
         115.314,
         33.377
        ],
        [
         115.315,
         33.431
        ],
        [
         115.346,
         33.45
        ],
        [
         115.367,
         33.523
        ],
        [
         115.423,
         33.557
        ],
        [
         115.511,
         33.553
        ],
        [
         115.64,
         33.585
        ],
        [
         115.602,
         33.719
        ],
        [
         115.577,
         33.788
        ],
        [
         115.632,
         33.87
        ],
        [
         115.578,
         33.95
        ],
        [
         115.607,
         34.03
        ],
        [
         115.658,
         34.061
        ],
        [
         115.736,
         34.077
        ],
        [
         115.809,
         34.062
        ],
        [
         115.85,
         34.005
        ],
        [
         115.877,
         34.029
        ],
        [
         115.958,
         34.008
        ],
        [
         115.982,
         33.917
        ],
        [
         116.056,
         33.805
        ],
        [
         116.1,
         33.783
        ],
        [
         116.156,
         33.71
        ],
        [
         116.263,
         33.73
        ],
        [
         116.394,
         33.783
        ],
        [
         116.437,
         33.801
        ],
        [
         116.486,
         33.87
        ],
        [
         116.567,
         33.908
        ],
        [
         116.643,
         33.897
        ],
        [
         116.6,
         34.014
        ],
        [
         116.576,
         34.069
        ],
        [
         116.528,
         34.123
        ],
        [
         116.566,
         34.169
        ],
        [
         116.545,
         34.242
        ],
        [
         116.562,
         34.286
        ],
        [
         116.457,
         34.269
        ],
        [
         116.409,
         34.274
        ],
        [
         116.358,
         34.32
        ],
        [
         116.256,
         34.377
        ],
        [
         116.216,
         34.403
        ],
        [
         116.162,
         34.46
        ],
        [
         116.204,
         34.508
        ],
        [
         116.197,
         34.576
        ],
        [
         116.135,
         34.56
        ],
        [
         116.037,
         34.593
        ],
        [
         115.984,
         34.589
        ],
        [
         115.827,
         34.558
        ],
        [
         115.697,
         34.594
        ],
        [
         115.623,
         34.574
        ],
        [
         115.516,
         34.582
        ],
        [
         115.434,
         34.725
        ],
        [
         115.427,
         34.805
        ],
        [
         115.256,
         34.845
        ],
        [
         115.252,
         34.906
        ],
        [
         115.219,
         34.96
        ],
        [
         115.128,
         35.005
        ],
        [
         115.029,
         34.972
        ],
        [
         114.951,
         34.99
        ],
        [
         114.881,
         35.004
        ],
        [
         114.852,
         35.042
        ],
        [
         114.836,
         35.077
        ],
        [
         114.842,
         35.151
        ],
        [
         114.932,
         35.198
        ],
        [
         114.958,
         35.261
        ],
        [
         115.074,
         35.374
        ],
        [
         115.118,
         35.4
        ],
        [
         115.172,
         35.427
        ],
        [
         115.307,
         35.48
        ],
        [
         115.345,
         35.554
        ],
        [
         115.486,
         35.71
        ],
        [
         115.623,
         35.739
        ],
        [
         115.696,
         35.789
        ],
        [
         115.774,
         35.854
        ],
        [
         115.86,
         35.858
        ],
        [
         115.873,
         35.919
        ],
        [
         115.912,
         35.96
        ],
        [
         116.049,
         35.97
        ],
        [
         116.099,
         36.112
        ],
        [
         115.99,
         36.045
        ],
        [
         115.86,
         36.004
        ],
        [
         115.78,
         35.994
        ],
        [
         115.699,
         35.966
        ],
        [
         115.584,
         35.922
        ],
        [
         115.488,
         35.881
        ],
        [
         115.408,
         35.809
        ],
        [
         115.335,
         35.797
        ],
        [
         115.354,
         35.939
        ],
        [
         115.448,
         36.012
        ],
        [
         115.484,
         36.126
        ],
        [
         115.465,
         36.17
        ],
        [
         115.377,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.279,
         36.138
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.105,
         36.172
        ],
        [
         115.049,
         36.162
        ],
        [
         114.998,
         36.07
        ],
        [
         114.927,
         36.089
        ],
        [
         114.858,
         36.145
        ],
        [
         114.772,
         36.125
        ],
        [
         114.72,
         36.14
        ],
        [
         114.589,
         36.118
        ],
        [
         114.533,
         36.172
        ],
        [
         114.466,
         36.198
        ],
        [
         114.408,
         36.225
        ],
        [
         114.345,
         36.256
        ],
        [
         114.258,
         36.264
        ],
        [
         114.21,
         36.273
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.08,
         36.27
        ],
        [
         114.056,
         36.329
        ],
        [
         113.982,
         36.318
        ],
        [
         113.911,
         36.315
        ],
        [
         113.849,
         36.348
        ],
        [
         113.813,
         36.332
        ],
        [
         113.731,
         36.363
        ],
        [
         113.712,
         36.303
        ],
        [
         113.682,
         36.216
        ],
        [
         113.651,
         36.174
        ],
        [
         113.713,
         36.13
        ],
        [
         113.671,
         36.116
        ],
        [
         113.66,
         36.035
        ],
        [
         113.679,
         35.986
        ],
        [
         113.654,
         35.932
        ],
        [
         113.661,
         35.837
        ],
        [
         113.605,
         35.798
        ],
        [
         113.593,
         35.692
        ],
        [
         113.625,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.514,
         35.574
        ],
        [
         113.439,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.304,
         35.427
        ],
        [
         113.19,
         35.449
        ],
        [
         113.165,
         35.413
        ],
        [
         113.126,
         35.332
        ],
        [
         112.996,
         35.362
        ],
        [
         112.992,
         35.296
        ],
        [
         112.934,
         35.263
        ],
        [
         112.822,
         35.258
        ],
        [
         112.72,
         35.206
        ],
        [
         112.637,
         35.226
        ],
        [
         112.391,
         35.239
        ],
        [
         112.288,
         35.22
        ],
        [
         112.242,
         35.235
        ],
        [
         112.138,
         35.271
        ],
        [
         112.079,
         35.219
        ],
        [
         112.066,
         35.153
        ],
        [
         112.062,
         35.056
        ],
        [
         112.019,
         35.069
        ],
        [
         111.933,
         35.083
        ],
        [
         111.807,
         35.033
        ],
        [
         111.664,
         34.984
        ],
        [
         111.647,
         34.939
        ],
        [
         111.592,
         34.881
        ],
        [
         111.544,
         34.853
        ],
        [
         111.439,
         34.838
        ],
        [
         111.346,
         34.832
        ],
        [
         111.255,
         34.82
        ],
        [
         111.149,
         34.808
        ],
        [
         111.035,
         34.741
        ],
        [
         110.92,
         34.73
        ],
        [
         110.884,
         34.644
        ],
        [
         110.792,
         34.65
        ],
        [
         110.71,
         34.605
        ],
        [
         110.533,
         34.583
        ],
        [
         110.425,
         34.588
        ],
        [
         110.367,
         34.567
        ],
        [
         110.372,
         34.544
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.452,
         34.293
        ],
        [
         110.44,
         34.243
        ],
        [
         110.552,
         34.213
        ],
        [
         110.622,
         34.177
        ],
        [
         110.614,
         34.113
        ],
        [
         110.587,
         34.023
        ],
        [
         110.671,
         33.966
        ],
        [
         110.627,
         33.925
        ],
        [
         110.587,
         33.888
        ],
        [
         110.663,
         33.853
        ],
        [
         110.741,
         33.799
        ],
        [
         110.817,
         33.751
        ],
        [
         110.824,
         33.686
        ],
        [
         110.967,
         33.609
        ],
        [
         111.003,
         33.536
        ],
        [
         111.027,
         33.468
        ],
        [
         111.026,
         33.375
        ],
        [
         110.985,
         33.255
        ],
        [
         111.046,
         33.17
        ],
        [
         111.128,
         33.155
        ],
        [
         114.931,
         33.153
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
         111.046,
         33.17
        ],
        [
         111.036,
         33.188
        ],
        [
         110.985,
         33.255
        ],
        [
         110.922,
         33.204
        ],
        [
         110.829,
         33.201
        ],
        [
         110.773,
         33.153
        ],
        [
         110.651,
         33.157
        ],
        [
         110.613,
         33.153
        ],
        [
         110.578,
         33.25
        ],
        [
         110.471,
         33.171
        ],
        [
         110.398,
         33.177
        ],
        [
         110.338,
         33.16
        ],
        [
         110.218,
         33.163
        ],
        [
         110.031,
         33.192
        ],
        [
         109.973,
         33.204
        ],
        [
         109.852,
         33.248
        ],
        [
         109.733,
         33.231
        ],
        [
         109.65,
         33.251
        ],
        [
         109.607,
         33.236
        ],
        [
         109.498,
         33.207
        ],
        [
         111.13,
         33.153
        ],
        [
         111.089,
         33.182
        ]
       ]
      ],
      [
       [
        [
         111.047,
         33.203
        ],
        [
         111.034,
         33.178
        ],
        [
         111.047,
         33.203
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
         35.801
        ],
        [
         110.549,
         35.878
        ],
        [
         110.517,
         35.919
        ],
        [
         110.517,
         35.972
        ],
        [
         110.492,
         36.035
        ],
        [
         110.447,
         36.164
        ],
        [
         110.474,
         36.248
        ],
        [
         110.46,
         36.328
        ],
        [
         110.49,
         36.43
        ],
        [
         110.504,
         36.488
        ],
        [
         110.497,
         36.582
        ],
        [
         110.427,
         36.658
        ],
        [
         110.403,
         36.697
        ],
        [
         110.447,
         36.738
        ],
        [
         110.424,
         36.818
        ],
        [
         110.424,
         36.856
        ],
        [
         110.409,
         36.892
        ],
        [
         110.382,
         37.002
        ],
        [
         110.427,
         37.009
        ],
        [
         110.461,
         37.045
        ],
        [
         110.536,
         37.115
        ],
        [
         110.591,
         37.187
        ],
        [
         110.662,
         37.282
        ],
        [
         110.679,
         37.318
        ],
        [
         110.642,
         37.36
        ],
        [
         110.644,
         37.435
        ],
        [
         110.759,
         37.475
        ],
        [
         110.795,
         37.559
        ],
        [
         110.764,
         37.64
        ],
        [
         110.775,
         37.681
        ],
        [
         110.717,
         37.729
        ],
        [
         110.736,
         37.77
        ],
        [
         110.594,
         37.922
        ],
        [
         110.528,
         37.99
        ],
        [
         110.502,
         38.098
        ],
        [
         110.509,
         38.192
        ],
        [
         110.566,
         38.215
        ],
        [
         110.602,
         38.308
        ],
        [
         110.701,
         38.353
        ],
        [
         110.778,
         38.441
        ],
        [
         110.841,
         38.44
        ],
        [
         110.871,
         38.51
        ],
        [
         110.92,
         38.582
        ],
        [
         110.881,
         38.627
        ],
        [
         110.915,
         38.704
        ],
        [
         111.009,
         38.848
        ],
        [
         111.017,
         38.89
        ],
        [
         110.98,
         38.97
        ],
        [
         111.038,
         39.02
        ],
        [
         111.138,
         39.064
        ],
        [
         111.174,
         39.135
        ],
        [
         111.219,
         39.244
        ],
        [
         111.248,
         39.302
        ],
        [
         111.179,
         39.327
        ],
        [
         111.155,
         39.339
        ],
        [
         111.126,
         39.366
        ],
        [
         111.098,
         39.402
        ],
        [
         111.059,
         39.448
        ],
        [
         111.105,
         39.498
        ],
        [
         111.155,
         39.569
        ],
        [
         111.101,
         39.559
        ],
        [
         110.959,
         39.519
        ],
        [
         110.87,
         39.494
        ],
        [
         110.738,
         39.349
        ],
        [
         110.703,
         39.274
        ],
        [
         110.597,
         39.283
        ],
        [
         110.56,
         39.351
        ],
        [
         110.483,
         39.361
        ],
        [
         110.43,
         39.341
        ],
        [
         110.258,
         39.407
        ],
        [
         110.153,
         39.454
        ],
        [
         110.137,
         39.392
        ],
        [
         110.184,
         39.355
        ],
        [
         110.109,
         39.25
        ],
        [
         109.962,
         39.212
        ],
        [
         109.872,
         39.244
        ],
        [
         109.894,
         39.141
        ],
        [
         109.891,
         39.104
        ],
        [
         109.793,
         39.074
        ],
        [
         109.725,
         39.018
        ],
        [
         109.685,
         38.968
        ],
        [
         109.624,
         38.855
        ],
        [
         109.511,
         38.834
        ],
        [
         109.404,
         38.721
        ],
        [
         109.329,
         38.66
        ],
        [
         109.332,
         38.598
        ],
        [
         109.197,
         38.553
        ],
        [
         109.129,
         38.48
        ],
        [
         109.051,
         38.385
        ],
        [
         108.962,
         38.265
        ],
        [
         108.939,
         38.208
        ],
        [
         109.069,
         38.091
        ],
        [
         109.07,
         38.023
        ],
        [
         109.019,
         37.972
        ],
        [
         108.974,
         37.932
        ],
        [
         108.894,
         37.978
        ],
        [
         108.831,
         38.05
        ],
        [
         108.827,
         37.989
        ],
        [
         108.792,
         37.873
        ],
        [
         108.785,
         37.765
        ],
        [
         108.778,
         37.684
        ],
        [
         108.7,
         37.67
        ],
        [
         108.533,
         37.691
        ],
        [
         108.422,
         37.649
        ],
        [
         108.293,
         37.657
        ],
        [
         108.206,
         37.656
        ],
        [
         108.134,
         37.622
        ],
        [
         108.025,
         37.65
        ],
        [
         108.026,
         37.696
        ],
        [
         107.982,
         37.787
        ],
        [
         107.843,
         37.829
        ],
        [
         107.832,
         36.776
        ],
        [
         107.907,
         36.75
        ],
        [
         107.941,
         36.695
        ],
        [
         108.007,
         36.683
        ],
        [
         108.002,
         36.639
        ],
        [
         108.08,
         36.614
        ],
        [
         108.164,
         36.564
        ],
        [
         108.223,
         36.631
        ],
        [
         108.205,
         36.607
        ],
        [
         108.246,
         36.571
        ],
        [
         108.34,
         36.559
        ],
        [
         108.392,
         36.506
        ],
        [
         108.461,
         36.423
        ],
        [
         108.515,
         36.446
        ],
        [
         108.563,
         36.439
        ],
        [
         108.652,
         36.385
        ],
        [
         108.646,
         36.254
        ],
        [
         108.682,
         36.062
        ],
        [
         108.66,
         35.991
        ],
        [
         108.594,
         35.951
        ],
        [
         108.519,
         35.905
        ],
        [
         108.528,
         35.824
        ],
        [
         108.518,
         35.7
        ],
        [
         108.618,
         35.557
        ],
        [
         108.606,
         35.503
        ],
        [
         108.61,
         35.355
        ],
        [
         108.583,
         35.295
        ],
        [
         108.489,
         35.275
        ],
        [
         108.345,
         35.301
        ],
        [
         108.239,
         35.256
        ],
        [
         108.175,
         35.305
        ],
        [
         108.049,
         35.254
        ],
        [
         107.96,
         35.263
        ],
        [
         107.842,
         35.277
        ],
        [
         107.832,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.832,
         34.977
        ],
        [
         109.439,
         33.153
        ],
        [
         109.514,
         33.238
        ],
        [
         109.62,
         33.275
        ],
        [
         109.693,
         33.254
        ],
        [
         109.813,
         33.236
        ],
        [
         109.917,
         33.23
        ],
        [
         109.999,
         33.212
        ],
        [
         110.165,
         33.209
        ],
        [
         110.286,
         33.171
        ],
        [
         110.372,
         33.186
        ],
        [
         110.398,
         33.177
        ],
        [
         110.541,
         33.255
        ],
        [
         110.594,
         33.168
        ],
        [
         110.641,
         33.153
        ],
        [
         110.655,
         33.153
        ],
        [
         110.825,
         33.158
        ],
        [
         110.865,
         33.214
        ],
        [
         110.961,
         33.254
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
         107.832,
         34.977
        ],
        [
         107.863,
         34.999
        ],
        [
         107.832,
         35.025
        ],
        [
         107.842,
         35.277
        ],
        [
         107.96,
         35.263
        ],
        [
         108.049,
         35.254
        ],
        [
         108.175,
         35.305
        ],
        [
         108.239,
         35.256
        ],
        [
         108.345,
         35.301
        ],
        [
         108.489,
         35.275
        ],
        [
         108.583,
         35.295
        ],
        [
         108.61,
         35.355
        ],
        [
         108.606,
         35.503
        ],
        [
         108.618,
         35.557
        ],
        [
         108.518,
         35.7
        ],
        [
         108.528,
         35.824
        ],
        [
         108.519,
         35.905
        ],
        [
         108.594,
         35.951
        ],
        [
         108.66,
         35.991
        ],
        [
         108.682,
         36.062
        ],
        [
         108.646,
         36.254
        ],
        [
         108.652,
         36.385
        ],
        [
         108.563,
         36.439
        ],
        [
         108.515,
         36.446
        ],
        [
         108.461,
         36.423
        ],
        [
         108.392,
         36.506
        ],
        [
         108.34,
         36.559
        ],
        [
         108.246,
         36.571
        ],
        [
         108.205,
         36.607
        ],
        [
         108.223,
         36.631
        ],
        [
         108.164,
         36.564
        ],
        [
         108.08,
         36.614
        ],
        [
         108.002,
         36.639
        ],
        [
         108.007,
         36.683
        ],
        [
         107.941,
         36.695
        ],
        [
         107.907,
         36.75
        ],
        [
         107.832,
         36.776
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        107.832,
        33.199
       ],
       [
        107.905,
        33.234
       ],
       [
        107.956,
        33.175
       ]
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        107.832,
        40.858
       ],
       [
        108.07,
        40.875
       ],
       [
        108.224,
        40.83
       ],
       [
        108.389,
        40.816
       ],
       [
        108.553,
        40.7
       ],
       [
        108.77,
        40.573
       ],
       [
        108.992,
        40.554
       ],
       [
        109.309,
        40.49
       ],
       [
        109.555,
        40.53
       ],
       [
        109.687,
        40.494
       ],
       [
        110.08,
        40.524
       ],
       [
        110.505,
        40.373
       ],
       [
        110.811,
        40.271
       ],
       [
        110.996,
        40.286
       ],
       [
        111.307,
        40.11
       ],
       [
        111.426,
        39.942
       ],
       [
        111.378,
        39.789
       ],
       [
        111.437,
        39.653
       ],
       [
        111.373,
        39.488
       ],
       [
        111.212,
        39.414
       ],
       [
        111.156,
        39.37
       ],
       [
        111.192,
        39.297
       ],
       [
        111.145,
        39.125
       ],
       [
        111.009,
        38.997
       ],
       [
        110.996,
        38.92
       ],
       [
        110.904,
        38.692
       ],
       [
        110.891,
        38.557
       ],
       [
        110.599,
        38.258
       ],
       [
        110.511,
        38.008
       ],
       [
        110.725,
        37.732
       ],
       [
        110.758,
        37.525
       ],
       [
        110.664,
        37.434
       ],
       [
        110.658,
        37.316
       ],
       [
        110.5,
        37.087
       ],
       [
        110.391,
        37.019
       ],
       [
        110.407,
        36.98
       ],
       [
        110.387,
        36.823
       ],
       [
        110.425,
        36.739
       ],
       [
        110.403,
        36.698
       ],
       [
        110.471,
        36.566
       ],
       [
        110.46,
        36.237
       ],
       [
        110.576,
        35.733
       ],
       [
        110.459,
        35.343
       ],
       [
        110.316,
        35.135
       ],
       [
        110.262,
        34.868
       ],
       [
        110.465,
        34.597
       ],
       [
        110.795,
        34.645
       ],
       [
        110.97,
        34.724
       ],
       [
        111.101,
        34.795
       ],
       [
        111.453,
        34.852
       ],
       [
        111.651,
        34.972
       ],
       [
        111.844,
        35.074
       ],
       [
        112.559,
        34.872
       ],
       [
        113.012,
        34.831
       ],
       [
        113.288,
        34.94
       ],
       [
        113.489,
        34.978
       ],
       [
        113.784,
        34.902
       ],
       [
        113.965,
        34.931
       ],
       [
        114.473,
        34.91
       ],
       [
        114.798,
        34.978
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.866,
       35.145
      ],
      [
       115.014,
       35.33
      ],
      [
       115.272,
       35.459
      ],
      [
       115.341,
       35.538
      ],
      [
       115.463,
       35.681
      ],
      [
       115.781,
       35.83
      ],
      [
       115.866,
       35.91
      ],
      [
       115.924,
       35.966
      ],
      [
       116.036,
       36.071
      ],
      [
       116.116,
       36.143
      ],
      [
       116.451,
       36.339
      ],
      [
       116.593,
       36.49
      ],
      [
       116.735,
       36.656
      ],
      [
       117.024,
       36.773
      ],
      [
       117.24,
       36.994
      ],
      [
       117.485,
       37.127
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.326,
        34.587
       ],
       [
        117.25,
        34.502
       ],
       [
        117.174,
        34.543
       ],
       [
        117.128,
        34.663
       ],
       [
        117.179,
        34.719
       ],
       [
        117.318,
        34.621
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   107.832,
   33.153,
   117.518,
   41.017
  ]
 }
};
