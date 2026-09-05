// 本文件由 tools/build.py 自动生成（切片 changping_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["changping_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["changping_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "warring_states",
  "title": "长平之战（LLM 抽取·人工校订）",
  "dossier_label": "长平之战（LLM 抽取落库）",
  "subtitle": "周赧王五十五年（前260）· 秦（白起） vs 赵（赵括）",
  "primary_place": "changping",
  "dossier_event": "event:ev_changping_llm_03",
  "vocab_pack": "changping_llm",
  "terrain_grid": "china_coarse",
  "lead": "长平之战（前260，周赧王五十五年）：秦将王龁攻韩取上党，上党民归赵；赵以廉颇坚壁拒秦，秦行反间使赵以赵括代廉颇；白起至，佯败绝粮道、射杀赵括，坑杀赵降卒（史记载前后斩首虏四十五万，含坑杀四十万，遗小者二百四十人归赵），赵国元气大伤、东方均势倾斜。本切片是「真实 LLM 抽取（DeepSeek）+ 人工校订落库」复用模式的第三例：LLM 依《史记·白起王翦列传》长平片段抽出 15 条断言（8 人/4 事/2 地/1 边），经 curate_emit 门禁报 BLOCK 0 / WARN 2（引文待核 1、缺控制层 1），再由人工逐条校订——把 5 条全为 dims=[6] 的 conform 兜底值改为按内容判定的真实维度（赵括战死/坑杀→技术+事件，斩首/坑杀人数→社会+事件，考异→思想+事件），并补显式坐标、注册现代学界考订源（坑杀人数争议，scholarship/paraphrase_unverified，可关闭）。未经校订的 LLM 产物一律不入库。立场分桶：赵方原始记载因秦火几近无存，本切片『赵方』声音本就缺位——缺口显式保留，不伪造。",
  "parties_note": "《史记·白起王翦列传》为西汉司马迁所撰，距长平约百余年，归『后世官修』；其长平记载主要来自秦国方面流传与汉初传闻整合，故全部断言 source 桶皆『后世官修』，秦方/赵方之分仅经叙事折射。赵方原始记载因秦火几近无存，『赵方』声音本就缺位——缺口显式保留，不伪造。现代学界对坑杀四十万之数的考异归『二手综述』（scholarship，可关闭）。立场分桶是产品核心：塞错即伪造立场；系统不裁决，只并列。",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "subject_names": {
   "event:ev_changping_llm_01": "秦攻韩取上党",
   "event:ev_changping_llm_02": "赵括代廉颇",
   "event:ev_changping_llm_03": "长平之战·白起破赵",
   "event:ev_changping_llm_04": "坑杀赵降卒",
   "place:shangdang": "上党",
   "place:changping": "长平",
   "person:CHA__p01": "王龁",
   "person:CHA__p02": "廉颇",
   "person:CHA__p03": "赵孝成王",
   "person:CHA__p04": "范雎（应侯）",
   "person:CHA__p05": "赵括",
   "person:CHA__p06": "蔺相如",
   "person:CHA__p07": "白起",
   "person:CHA__p08": "括母"
  },
  "epoch": "warring_states",
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
    "note": "制度+思想→朝堂凝聚力（赵王中反间、拒蔺相如/括母之谏，决策结构脆弱）"
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
    "note": "技术↔生产力；绝粮道→后勤半径崩溃"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；坑杀四十五万即动员潜力之毁灭"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "地形/关隘/外交→战略重心与窗口（上党归赵触发战端）"
   }
  },
  "province": null,
  "page": "changping_llm.html",
  "key": "changping_llm",
  "scene_id": "changping_llm"
 },
 "sources": [
  {
   "id": "shiji_baiqi",
   "title": "史记·白起王翦列传（长平片段）",
   "party": "后世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马迁（西汉）",
   "period": "西汉",
   "note": "本切片主干史料。司马迁去长平未远，叙事以编年夹议论；其长平记载主要来自秦国方面流传与汉初传闻整合，赵方原始记载因秦火几近无存，故『赵方』声音本就缺位——缺口显式保留，不伪造。"
  },
  {
   "id": "modern_scholarship",
   "title": "现代学界对坑杀人数的考订",
   "party": "二手综述",
   "stance_label": "近现代史学综合考订",
   "distance_label": "近现代学者，距事两千余年",
   "color": "#9B7B5A",
   "compiler": "近现代学者",
   "period": "近现代",
   "note": "对《史记》坑杀四十万之数的现代考异，多认为数字含夸大或系后世层累，属二手综述，可关闭。"
  }
 ],
 "places": [
  {
   "id": "shangdang",
   "name": "上党",
   "type": "region",
   "modern": "今中国山西省东南部",
   "note": "韩地，秦攻取后民归赵",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.86,
   "lat": 36.2,
   "elev": 961
  },
  {
   "id": "changping",
   "name": "长平",
   "type": "fortress",
   "modern": "今中国山西省高平市",
   "note": "赵军驻守之地，主战场",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "lon": 112.5,
   "lat": 35.78,
   "elev": 840
  }
 ],
 "persons": [
  {
   "id": "CHA__p01",
   "name": "王龁",
   "role": "秦左庶长",
   "note": "秦将，率军攻韩取上党",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p02",
   "name": "廉颇",
   "role": "赵将",
   "note": "赵军主帅，坚壁不出",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p03",
   "name": "赵王",
   "role": "赵王",
   "note": "赵孝成王，中反间计",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p04",
   "name": "应侯",
   "role": "秦相",
   "note": "范雎，行反间计",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p05",
   "name": "赵括",
   "role": "赵将",
   "note": "马服子，代廉颇为将",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p06",
   "name": "蔺相如",
   "role": "赵上卿",
   "note": "谏赵王勿用赵括",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "CHA__p07",
   "name": "白起",
   "role": "秦武安君",
   "note": "秦军主帅，坑杀赵卒",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHA__p08",
   "name": "括母",
   "role": "赵括之母",
   "note": "上书谏赵王不可使括",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "CHA_001",
   "subject": "event:ev_changping_llm_01",
   "predicate": "攻取",
   "value_text": "王龁攻韩取上党",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "shangdang",
   "source": "shiji_baiqi",
   "quote": "秦王使左庶长王龁攻韩，取上党",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.475,
   "scale": "province",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "秦王使左庶长王龁攻韩，取上党",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_002",
   "subject": "event:ev_changping_llm_01",
   "predicate": "民归",
   "value_text": "上党民不乐为秦而归赵",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "shangdang",
   "source": "shiji_baiqi",
   "quote": "上党民不乐为秦而归赵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "上党民不乐为秦而归赵",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_003",
   "subject": "event:ev_changping_llm_02",
   "predicate": "反间",
   "value_text": "应侯行千金为反间，言秦畏赵括",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "秦相应侯使人行千金于赵为反间",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "秦相应侯使人行千金于赵为反间",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_004",
   "subject": "event:ev_changping_llm_02",
   "predicate": "易将",
   "value_text": "赵王以括代廉颇将",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "赵王因以括代廉颇将",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赵王因以括代廉颇将",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_005",
   "subject": "person:CHA__p06",
   "predicate": "谏言",
   "value_text": "蔺相如谏王，言括徒能读父书传",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "王以名使括，若胶柱而鼓瑟耳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "王以名使括，若胶柱而鼓瑟耳",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_006",
   "subject": "person:CHA__p08",
   "predicate": "谏言",
   "value_text": "括母上书言括不可使",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "括母上书言括不可使",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "括母上书言括不可使",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_007",
   "subject": "event:ev_changping_llm_03",
   "predicate": "战术",
   "value_text": "白起佯败走，绝赵粮道",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "武安君白起至，佯败走，而绝赵粮道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "武安君白起至，佯败走，而绝赵粮道",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_008",
   "subject": "event:ev_changping_llm_03",
   "predicate": "围困",
   "value_text": "赵军分而为二，粮道绝",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "赵军分而为二，粮道绝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赵军分而为二，粮道绝",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_009",
   "subject": "event:ev_changping_llm_03",
   "predicate": "赵括战死",
   "value_text": "赵括出锐卒自搏战，被秦军射杀",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "秦军射杀赵括",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "秦军射杀赵括",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_010",
   "subject": "event:ev_changping_llm_04",
   "predicate": "坑杀",
   "value_text": "白起坑杀赵降卒四十万",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "乃挟诈而尽坑杀之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "乃挟诈而尽坑杀之",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_011",
   "subject": "event:ev_changping_llm_04",
   "predicate": "斩首数",
   "value_text": "前后斩首虏四十五万",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "前后斩首虏四十五万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "此数含坑杀及战死",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "前后斩首虏四十五万",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_012",
   "subject": "event:ev_changping_llm_04",
   "predicate": "坑杀人数",
   "value_text": "坑杀四十万，遗小者二百四十人归赵",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "遗其小者二百四十人归赵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "遗其小者二百四十人归赵",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_013",
   "subject": "event:ev_changping_llm_04",
   "predicate": "坑杀动机",
   "value_text": "白起恐赵卒反覆为乱，故尽坑杀",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "赵卒反覆，非尽杀之，恐为乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "赵卒反覆，非尽杀之，恐为乱",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CHA_014",
   "subject": "event:ev_changping_llm_04",
   "predicate": "坑杀人数考异",
   "value_text": "史记载坑杀四十万，或为夸大之辞",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "modern_scholarship",
   "quote": "四十万之数或为夸大",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "theater",
   "note": "现代学者对坑杀人数有争议",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "四十万之数或为夸大",
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "CHA_015",
   "subject": "event:ev_changping_llm_03",
   "predicate": "赵括能力",
   "value_text": "赵括实战能力缺乏证据，仅知纸上谈兵",
   "time": {
    "era_text": "周赧王五十五年",
    "start": "-260"
   },
   "place": "changping",
   "source": "shiji_baiqi",
   "quote": "括徒能读其父书传，不知合变也",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "赵括实际指挥能力缺乏直接史料",
   "dims": [
    5,
    6
   ],
   "lead": {
    "where": "长平之战相关考古遗址",
    "skills": [
     "考古学",
     "军事史"
    ],
    "accept": "赵括实际指挥能力"
   },
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null,
   "_source_quote": "括徒能读其父书传，不知合变也",
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CHA_015"
 ],
 "events": [
  {
   "id": "ev_changping_llm_01",
   "subject": "event:ev_changping_llm_01",
   "year": -260,
   "era": "周赧王五十五年",
   "title": "秦攻韩取上党",
   "kind": "战事",
   "text": "王龁攻韩取上党，上党民归赵",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_changping_llm_02",
   "subject": "event:ev_changping_llm_02",
   "year": -260,
   "era": "周赧王五十五年",
   "title": "赵括代廉颇",
   "kind": "行政",
   "text": "赵王中反间计，以赵括代廉颇",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_changping_llm_03",
   "subject": "event:ev_changping_llm_03",
   "year": -260,
   "era": "周赧王五十五年",
   "title": "长平之战",
   "kind": "战事",
   "text": "白起绝赵粮道，射杀赵括",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_changping_llm_04",
   "subject": "event:ev_changping_llm_04",
   "year": -260,
   "era": "周赧王五十五年",
   "title": "坑杀赵卒",
   "kind": "战事",
   "text": "白起坑杀赵降卒四十万",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "shangdang",
   "to": "changping",
   "type": "military",
   "label": "秦攻韩取上党后，赵军驻长平",
   "_source_idx": 0,
   "_source_name": "史记·白起王翦列传（长平片段）",
   "_source_party": "后世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "shangdang",
   "party": "秦方",
   "start": -260,
   "end": -259,
   "basis": "战前上党民归赵，白起胜后尽归秦",
   "note": "战前 transient 赵控，战后稳定秦控"
  },
  {
   "place_id": "changping",
   "party": "秦方",
   "start": -260,
   "end": -259,
   "basis": "赵军驻守，赵括败死后归秦",
   "note": "主战场终局归秦"
  }
 ],
 "control_seats": [
  {
   "place_id": "shangdang",
   "name": "上党",
   "lon": 112.86,
   "lat": 36.2,
   "region": "warring_states"
  },
  {
   "place_id": "changping",
   "name": "长平",
   "lon": 112.5,
   "lat": 35.78,
   "region": "warring_states"
  }
 ],
 "control_years": [
  -260,
  -259
 ],
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
   "秦方",
   "赵方",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "秦方": "#2E86C1",
   "赵方": "#B23A48",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
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
        111.5,
        34.78
       ],
       [
        111.5,
        37.2
       ],
       [
        113.86,
        37.2
       ],
       [
        113.86,
        34.78
       ],
       [
        111.5,
        34.78
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
         113.86,
         37.2
        ],
        [
         113.846,
         37.2
        ],
        [
         113.832,
         37.168
        ],
        [
         113.773,
         37.152
        ],
        [
         113.774,
         37.107
        ],
        [
         113.758,
         37.075
        ],
        [
         113.788,
         37.06
        ],
        [
         113.772,
         37.017
        ],
        [
         113.792,
         36.988
        ],
        [
         113.761,
         36.956
        ],
        [
         113.793,
         36.895
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.859
        ],
        [
         113.732,
         36.879
        ],
        [
         113.697,
         36.882
        ],
        [
         113.676,
         36.856
        ],
        [
         113.681,
         36.79
        ],
        [
         113.6,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.57,
         36.586
        ],
        [
         113.589,
         36.548
        ],
        [
         113.56,
         36.529
        ],
        [
         113.554,
         36.495
        ],
        [
         113.587,
         36.461
        ],
        [
         113.636,
         36.451
        ],
        [
         113.67,
         36.425
        ],
        [
         113.708,
         36.423
        ],
        [
         113.731,
         36.363
        ],
        [
         113.755,
         36.366
        ],
        [
         113.813,
         36.332
        ],
        [
         113.857,
         36.329
        ],
        [
         113.849,
         36.348
        ],
        [
         113.86,
         36.35
        ],
        [
         113.86,
         37.2
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
         111.5,
         37.2
        ],
        [
         111.5,
         34.83
        ],
        [
         111.503,
         34.83
        ],
        [
         111.544,
         34.853
        ],
        [
         111.57,
         34.843
        ],
        [
         111.592,
         34.881
        ],
        [
         111.618,
         34.895
        ],
        [
         111.647,
         34.939
        ],
        [
         111.682,
         34.951
        ],
        [
         111.664,
         34.984
        ],
        [
         111.74,
         35.005
        ],
        [
         111.807,
         35.033
        ],
        [
         111.81,
         35.062
        ],
        [
         111.933,
         35.083
        ],
        [
         111.978,
         35.067
        ],
        [
         112.019,
         35.069
        ],
        [
         112.039,
         35.046
        ],
        [
         112.062,
         35.056
        ],
        [
         112.056,
         35.099
        ],
        [
         112.066,
         35.153
        ],
        [
         112.04,
         35.194
        ],
        [
         112.079,
         35.219
        ],
        [
         112.059,
         35.28
        ],
        [
         112.138,
         35.271
        ],
        [
         112.217,
         35.253
        ],
        [
         112.242,
         35.235
        ],
        [
         112.305,
         35.252
        ],
        [
         112.288,
         35.22
        ],
        [
         112.368,
         35.22
        ],
        [
         112.391,
         35.239
        ],
        [
         112.513,
         35.218
        ],
        [
         112.637,
         35.226
        ],
        [
         112.628,
         35.263
        ],
        [
         112.72,
         35.206
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
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.638,
         35.87
        ],
        [
         113.654,
         35.932
        ],
        [
         113.649,
         35.994
        ],
        [
         113.679,
         35.986
        ],
        [
         113.695,
         36.027
        ],
        [
         113.66,
         36.035
        ],
        [
         113.686,
         36.056
        ],
        [
         113.671,
         36.116
        ],
        [
         113.655,
         36.125
        ],
        [
         113.713,
         36.13
        ],
        [
         113.706,
         36.149
        ],
        [
         113.651,
         36.174
        ],
        [
         113.698,
         36.182
        ],
        [
         113.682,
         36.216
        ],
        [
         113.716,
         36.262
        ],
        [
         113.712,
         36.303
        ],
        [
         113.736,
         36.325
        ],
        [
         113.731,
         36.363
        ],
        [
         113.708,
         36.423
        ],
        [
         113.67,
         36.425
        ],
        [
         113.636,
         36.451
        ],
        [
         113.587,
         36.461
        ],
        [
         113.554,
         36.495
        ],
        [
         113.56,
         36.529
        ],
        [
         113.589,
         36.548
        ],
        [
         113.57,
         36.586
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.6,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.676,
         36.856
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.879
        ],
        [
         113.732,
         36.859
        ],
        [
         113.773,
         36.855
        ],
        [
         113.793,
         36.895
        ],
        [
         113.761,
         36.956
        ],
        [
         113.792,
         36.988
        ],
        [
         113.772,
         37.017
        ],
        [
         113.788,
         37.06
        ],
        [
         113.758,
         37.075
        ],
        [
         113.774,
         37.107
        ],
        [
         113.773,
         37.152
        ],
        [
         113.832,
         37.168
        ],
        [
         113.846,
         37.2
        ],
        [
         111.5,
         37.2
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
         113.86,
         34.78
        ],
        [
         113.86,
         36.35
        ],
        [
         113.849,
         36.348
        ],
        [
         113.857,
         36.329
        ],
        [
         113.813,
         36.332
        ],
        [
         113.755,
         36.366
        ],
        [
         113.731,
         36.363
        ],
        [
         113.736,
         36.325
        ],
        [
         113.712,
         36.303
        ],
        [
         113.716,
         36.262
        ],
        [
         113.682,
         36.216
        ],
        [
         113.698,
         36.182
        ],
        [
         113.651,
         36.174
        ],
        [
         113.706,
         36.149
        ],
        [
         113.713,
         36.13
        ],
        [
         113.655,
         36.125
        ],
        [
         113.671,
         36.116
        ],
        [
         113.686,
         36.056
        ],
        [
         113.66,
         36.035
        ],
        [
         113.695,
         36.027
        ],
        [
         113.679,
         35.986
        ],
        [
         113.649,
         35.994
        ],
        [
         113.654,
         35.932
        ],
        [
         113.638,
         35.87
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
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
         112.72,
         35.206
        ],
        [
         112.628,
         35.263
        ],
        [
         112.637,
         35.226
        ],
        [
         112.513,
         35.218
        ],
        [
         112.391,
         35.239
        ],
        [
         112.368,
         35.22
        ],
        [
         112.288,
         35.22
        ],
        [
         112.305,
         35.252
        ],
        [
         112.242,
         35.235
        ],
        [
         112.217,
         35.253
        ],
        [
         112.138,
         35.271
        ],
        [
         112.059,
         35.28
        ],
        [
         112.079,
         35.219
        ],
        [
         112.04,
         35.194
        ],
        [
         112.066,
         35.153
        ],
        [
         112.056,
         35.099
        ],
        [
         112.062,
         35.056
        ],
        [
         112.039,
         35.046
        ],
        [
         112.019,
         35.069
        ],
        [
         111.978,
         35.067
        ],
        [
         111.933,
         35.083
        ],
        [
         111.81,
         35.062
        ],
        [
         111.807,
         35.033
        ],
        [
         111.74,
         35.005
        ],
        [
         111.664,
         34.984
        ],
        [
         111.682,
         34.951
        ],
        [
         111.647,
         34.939
        ],
        [
         111.618,
         34.895
        ],
        [
         111.592,
         34.881
        ],
        [
         111.57,
         34.843
        ],
        [
         111.544,
         34.853
        ],
        [
         111.503,
         34.83
        ],
        [
         111.5,
         34.83
        ],
        [
         111.5,
         34.78
        ],
        [
         113.86,
         34.78
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
        111.5,
        34.869
       ],
       [
        111.589,
        34.899
       ],
       [
        111.651,
        34.972
       ],
       [
        111.736,
        35.03
       ],
       [
        111.844,
        35.074
       ],
       [
        112.118,
        35.022
       ],
       [
        112.559,
        34.872
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
        113.86,
        34.897
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   111.5,
   34.78,
   113.86,
   37.2
  ]
 }
};
