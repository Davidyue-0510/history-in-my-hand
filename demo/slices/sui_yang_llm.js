// 本文件由 tools/build.py 自动生成（切片 sui_yang_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sui_yang_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sui_yang_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "tang",
  "title": "唐·睢阳之战",
  "dossier_label": "sui_yang_llm",
  "subtitle": "唐至德二载（757）张巡许远守睢阳",
  "primary_place": "suiyang",
  "dossier_event": "event:ev_sui_yang_llm_01",
  "vocab_pack": "sui_yang_llm",
  "terrain_grid": "china_coarse",
  "epoch": "tang",
  "scale_tier": "strategic",
  "lead": "安史之乱中期，张巡许远以数千疲卒守睢阳，屏障江淮财赋之区，牵制燕军南下。城陷前粮尽，杀妾飨士、食老弱三万口，为唐代最惨烈之城守。",
  "parties_note": "唐方（张巡/许远/南霁云）守城 vs 燕方（安庆绪/尹子奇）围城；立场分桶见 vocab。贺兰进明拥兵不救为第三方失援。",
  "strategic": {
   "political_cohesion": {
    "from": [
     "doctrine",
     "strategic"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "唐廷号令能否贯注孤城，与燕方内部分裂对照"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     4
    ],
    "layer": "inference",
    "note": "孤城粮尽、食人维军，后勤崩溃即城破"
   },
   "population_mobilization": {
    "from": [
     "society",
     "anchors"
    ],
    "from_dims": [
     4,
     6
    ],
    "layer": "inference",
    "note": "城中老弱三万口被食，社会代价极端"
   },
   "geopolitical_strategy": {
    "from": [
     "anchors",
     "strategic"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "睢阳锁江淮，失则赋税重镇不保"
   }
  },
  "subject_names": [
   "张巡",
   "许远",
   "南霁云",
   "尹子奇",
   "安庆绪",
   "贺兰进明",
   "睢阳",
   "宁陵",
   "雍丘",
   "临淮",
   "邺"
  ],
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "province": null,
  "page": "sui_yang_llm.html",
  "key": "sui_yang_llm",
  "scene_id": "sui_yang_llm"
 },
 "sources": [
  {
   "id": "zztj_suiyang",
   "title": "资治通鉴·唐纪（睢阳之战）",
   "party": "宋·官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司马光（宋）",
   "period": "宋",
   "note": "重建语料：本 spec 之 source_text 据《资治通鉴》至德二载、《新唐书·张巡传》叙事重建，非逐字底本；抽取断言一律 paraphrase_unverified。"
  }
 ],
 "places": [
  {
   "id": "suiyang",
   "name": "睢阳",
   "type": "city",
   "modern": "今河南省商丘市",
   "note": "唐睢阳郡治",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "lon": 115.65,
   "lat": 34.41,
   "elev": 52
  },
  {
   "id": "ningling",
   "name": "宁陵",
   "type": "city",
   "modern": "今河南省宁陵县",
   "note": "张巡引兵出发地",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "lon": 115.3,
   "lat": 34.45,
   "elev": 51
  },
  {
   "id": "yongqiu",
   "name": "雍丘",
   "type": "city",
   "modern": "今河南省杞县",
   "note": "张巡旧守",
   "lon": 114.78,
   "lat": 34.55,
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "elev": 61
  },
  {
   "id": "linhuai",
   "name": "临淮",
   "type": "city",
   "modern": "今安徽省泗县一带（贺兰进明镇临淮）",
   "note": "贺兰进明屯兵不救处",
   "lon": 118.18,
   "lat": 33.0,
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "elev": 10
  },
  {
   "id": "ye",
   "name": "邺",
   "type": "city",
   "modern": "今河北省临漳县（安庆绪据此称帝）",
   "note": "燕都",
   "lon": 114.62,
   "lat": 36.35,
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "elev": 64
  }
 ],
 "persons": [
  {
   "id": "SUI__p01",
   "name": "张巡",
   "role": "睢阳守将",
   "note": "宁陵引兵入城，与许远合兵守睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p02",
   "name": "许远",
   "role": "睢阳太守",
   "note": "告急于张巡，共守睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SUI__p03",
   "name": "尹子奇",
   "role": "安庆绪部将",
   "note": "率兵围睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p04",
   "name": "南霁云",
   "role": "张巡部将",
   "note": "突围乞师于贺兰进明",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p05",
   "name": "贺兰进明",
   "role": "唐将",
   "note": "拥兵不救睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SUI__p06",
   "name": "安庆绪",
   "role": "叛军首领",
   "note": "遣尹子奇围睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SUI_001",
   "subject": "event:ev_sui_yang_llm_01",
   "predicate": "围城兵力",
   "value_text": "尹子奇率兵围睢阳",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "安庆绪遣将尹子奇率兵围睢阳",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "theater",
   "note": "[auto] 补层 scholarship",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "安庆绪遣将尹子奇率兵围睢阳",
   "dim_source": "fallback",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_002",
   "subject": "event:ev_sui_yang_llm_02",
   "predicate": "守城兵力",
   "value_text": "张巡许远合兵六千八百人",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "众才六千八百人",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.4,
   "scale": "theater",
   "note": "[auto] 补层 inference",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "众才六千八百人",
   "dim_source": "fallback",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_003",
   "subject": "event:ev_sui_yang_llm_01",
   "predicate": "战役结果",
   "value_text": "张巡射尹子奇几获之",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "射尹子奇，几获之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "射尹子奇，几获之",
   "dim_source": "fallback",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_004",
   "subject": "event:ev_sui_yang_llm_01",
   "predicate": "围城策略",
   "value_text": "尹子奇益兵久围",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "子奇益兵久围",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "子奇益兵久围",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_005",
   "subject": "event:ev_sui_yang_llm_01",
   "predicate": "城中粮尽",
   "value_text": "城中食尽，啖驴马食妇孺",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "城中食尽，初啖驴马，继食妇孺老弱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "城中食尽，初啖驴马，继食妇孺老弱",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_006",
   "subject": "event:ev_sui_yang_llm_04",
   "predicate": "行为",
   "value_text": "张巡杀爱妾烹以飨士",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "巡杀爱妾烹以飨士",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    4,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "巡杀爱妾烹以飨士",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_007",
   "subject": "person:SUI__p02",
   "predicate": "行为",
   "value_text": "许远杀僮奴，括城中老弱",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "远亦杀僮奴，括城中老弱凡食三万口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    4,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "远亦杀僮奴，括城中老弱凡食三万口",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_008",
   "subject": "event:ev_sui_yang_llm_05",
   "predicate": "乞师",
   "value_text": "南霁云突围乞师于贺兰进明",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "南霁云突围乞师于贺兰进明",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "南霁云突围乞师于贺兰进明",
   "dim_source": "fallback",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_009",
   "subject": "person:SUI__p05",
   "predicate": "不救",
   "value_text": "贺兰进明拥兵不救",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "进明拥兵不救",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "进明拥兵不救",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_010",
   "subject": "event:ev_sui_yang_llm_03",
   "predicate": "城陷",
   "value_text": "十月城陷，巡远被执",
   "time": {
    "era_text": "至德二载十月",
    "start": "757-10"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "十月城陷，巡、远俱被执",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "十月城陷，巡、远俱被执",
   "dim_source": "fallback",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_011",
   "subject": "event:ev_sui_yang_llm_03",
   "predicate": "殉国",
   "value_text": "张巡许远不屈被害",
   "time": {
    "era_text": "至德二载十月",
    "start": "757-10"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "不屈被害",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "不屈被害",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_012",
   "subject": "event:ev_sui_yang_llm_06",
   "predicate": "追赠",
   "value_text": "唐赠张巡扬州大都督",
   "time": {
    "era_text": "至德二载后",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "唐赠巡扬州大都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "唐赠巡扬州大都督",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_013",
   "subject": "event:ev_sui_yang_llm_06",
   "predicate": "追赠",
   "value_text": "唐赠许远荆州大都督",
   "time": {
    "era_text": "至德二载后",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "远荆州大都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "远荆州大都督",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_014",
   "subject": "event:ev_sui_yang_llm_03",
   "predicate": "战略意义",
   "value_text": "睢阳守障蔽江淮，贼不得南下",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "睢阳之守障蔽江淮，贼不得南下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "睢阳之守障蔽江淮，贼不得南下",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "SUI_015",
   "subject": "event:ev_sui_yang_llm_03",
   "predicate": "食人数量",
   "value_text": "括城中老弱凡食三万口",
   "time": {
    "era_text": "至德二载",
    "start": "757"
   },
   "place": "suiyang",
   "source": "zztj_suiyang",
   "quote": "括城中老弱凡食三万口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "theater",
   "note": "数字或有夸大",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null,
   "_source_quote": "括城中老弱凡食三万口",
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_sui_yang_llm_06|追赠",
   "subject": "event:ev_sui_yang_llm_06",
   "predicate": "追赠",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SUI_012",
    "SUI_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_sui_yang_llm_01",
   "subject": "event:ev_sui_yang_llm_01",
   "year": 757,
   "era": "至德二载",
   "title": "睢阳被围",
   "kind": "战事",
   "text": "尹子奇率兵围睢阳",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_yang_llm_02",
   "subject": "event:ev_sui_yang_llm_02",
   "year": 757,
   "era": "至德二载",
   "title": "张巡入城合兵",
   "kind": "战事",
   "text": "张巡自宁陵入睢阳与许远合兵",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_yang_llm_03",
   "subject": "event:ev_sui_yang_llm_03",
   "year": 757,
   "era": "至德二载",
   "title": "睢阳城陷",
   "kind": "战事",
   "text": "十月城陷，张巡许远被执",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_yang_llm_04",
   "subject": "event:ev_sui_yang_llm_04",
   "year": 757,
   "era": "至德二载",
   "title": "粮尽杀妾飨士",
   "kind": "战事",
   "text": "城中食尽，巡杀爱妾烹以飨士",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_yang_llm_05",
   "subject": "event:ev_sui_yang_llm_05",
   "year": 757,
   "era": "至德二载",
   "title": "南霁云乞师断指",
   "kind": "战事",
   "text": "霁云突围乞师于贺兰进明，进明拥兵不救，霁云断指明志",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_yang_llm_06",
   "subject": "event:ev_sui_yang_llm_06",
   "year": 757,
   "era": "至德二载后",
   "title": "唐追赠巡远",
   "kind": "封赠",
   "text": "唐赠张巡扬州大都督、许远荆州大都督",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "ningling",
   "to": "suiyang",
   "type": "military",
   "label": "张巡引兵入城",
   "_source_idx": 0,
   "_source_name": "资治通鉴·唐纪（睢阳之战）",
   "_source_party": "宋·官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "suiyang",
   "party": "唐方",
   "start": 757,
   "end": 757,
   "basis": "historical: 资治通鉴 至德二载 张巡许远合兵守睢阳"
  },
  {
   "place_id": "ningling",
   "party": "唐方",
   "start": 757,
   "end": 757,
   "basis": "historical: 张巡自宁陵引兵入睢阳"
  },
  {
   "place_id": "yongqiu",
   "party": "唐方",
   "start": 757,
   "end": 757,
   "basis": "historical: 雍丘为张巡旧守"
  },
  {
   "place_id": "suiyang",
   "party": "燕方",
   "start": 757,
   "end": 758,
   "basis": "historical: 尹子奇破城取睢阳，乾元初唐复取"
  }
 ],
 "control_seats": [
  {
   "place_id": "suiyang",
   "name": "睢阳",
   "lon": 115.65,
   "lat": 34.41,
   "region": "tang"
  },
  {
   "place_id": "ningling",
   "name": "宁陵",
   "lon": 115.3,
   "lat": 34.45,
   "region": "tang"
  },
  {
   "place_id": "yongqiu",
   "name": "雍丘",
   "lon": 114.78,
   "lat": 34.55,
   "region": "tang"
  }
 ],
 "control_years": [
  757,
  758
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
   "唐方",
   "燕方",
   "宋·官修",
   "后世官修",
   "二手綜述"
  ],
  "party_bucket": {
   "唐方": "唐方",
   "燕方": "燕方",
   "宋·官修": "宋·官修",
   "后世官修": "后世官修",
   "二手綜述": "二手綜述"
  },
  "party_colors": {
   "唐方": "#2E86C1",
   "燕方": "#B23A48",
   "宋·官修": "#8C6239",
   "后世官修": "#6C7A89",
   "二手綜述": "#9B7B5A"
  },
  "factions": {
   "f_唐方": {
    "name": "唐方",
    "macro_party": "唐方",
    "note": "张巡／许远／南霁云；唐军守城方"
   },
   "f_燕方": {
    "name": "燕方",
    "macro_party": "燕方",
    "note": "安庆绪／尹子奇；安史燕政权攻方"
   },
   "f_宋官修": {
    "name": "宋·官修",
    "macro_party": "宋·官修",
    "note": "司马光《资治通鉴》（北宋官修编年）叙唐事"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "《新唐书·张巡传》等后世官修叙事"
   },
   "f_二手綜述": {
    "name": "二手綜述",
    "macro_party": "二手綜述",
    "note": "现代综述与二手整合"
   }
  },
  "faction_colors": {
   "f_唐方": "#2E86C1",
   "f_燕方": "#B23A48",
   "f_宋官修": "#8C6239",
   "f_后世官修": "#6C7A89",
   "f_二手綜述": "#9B7B5A"
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        119.18,
        34.808
       ],
       [
        119.165,
        34.849
       ],
       [
        119.18,
        34.896
       ],
       [
        119.18,
        37.177
       ],
       [
        119.112,
        37.201
       ],
       [
        118.998,
        37.277
       ],
       [
        118.953,
        37.331
       ],
       [
        118.953,
        37.35
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
        113.62,
        32.0
       ],
       [
        113.62,
        37.35
       ],
       [
        118.953,
        37.35
       ],
       [
        118.953,
        37.331
       ],
       [
        118.998,
        37.277
       ],
       [
        119.112,
        37.201
       ],
       [
        119.18,
        37.177
       ],
       [
        119.18,
        34.896
       ],
       [
        119.165,
        34.849
       ],
       [
        119.18,
        34.808
       ],
       [
        119.18,
        32.0
       ],
       [
        113.62,
        32.0
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
         113.955,
         37.35
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
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
         113.62,
         36.762
        ],
        [
         113.62,
         36.454
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
         113.882,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.963,
         36.354
        ],
        [
         113.982,
         36.318
        ],
        [
         114.003,
         36.334
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
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
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
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
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
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
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.712,
         36.883
        ],
        [
         115.758,
         36.902
        ],
        [
         115.797,
         36.969
        ],
        [
         115.777,
         36.993
        ],
        [
         115.856,
         37.061
        ],
        [
         115.888,
         37.112
        ],
        [
         115.88,
         37.151
        ],
        [
         115.912,
         37.177
        ],
        [
         115.91,
         37.207
        ],
        [
         115.97,
         37.24
        ],
        [
         115.976,
         37.337
        ],
        [
         116.003,
         37.35
        ],
        [
         113.955,
         37.35
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
         113.62,
         37.35
        ],
        [
         113.62,
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
         113.62,
         35.676
        ],
        [
         113.62,
         35.827
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
         113.62,
         36.454
        ],
        [
         113.62,
         36.762
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
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.955,
         37.35
        ],
        [
         113.62,
         37.35
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
         117.312,
         34.562
        ],
        [
         117.273,
         34.557
        ],
        [
         117.304,
         34.542
        ],
        [
         117.268,
         34.533
        ],
        [
         117.273,
         34.5
        ],
        [
         117.253,
         34.487
        ],
        [
         117.248,
         34.451
        ],
        [
         117.166,
         34.434
        ],
        [
         117.139,
         34.527
        ],
        [
         117.152,
         34.559
        ],
        [
         117.104,
         34.649
        ],
        [
         117.073,
         34.639
        ],
        [
         117.062,
         34.676
        ],
        [
         117.07,
         34.714
        ],
        [
         117.022,
         34.759
        ],
        [
         116.969,
         34.772
        ],
        [
         116.951,
         34.811
        ],
        [
         116.979,
         34.815
        ],
        [
         116.966,
         34.845
        ],
        [
         116.929,
         34.843
        ],
        [
         116.922,
         34.895
        ],
        [
         116.858,
         34.929
        ],
        [
         116.822,
         34.93
        ],
        [
         116.816,
         34.965
        ],
        [
         116.789,
         34.975
        ],
        [
         116.781,
         34.917
        ],
        [
         116.678,
         34.939
        ],
        [
         116.622,
         34.94
        ],
        [
         116.614,
         34.923
        ],
        [
         116.558,
         34.909
        ],
        [
         116.445,
         34.896
        ],
        [
         116.408,
         34.851
        ],
        [
         116.403,
         34.756
        ],
        [
         116.369,
         34.749
        ],
        [
         116.364,
         34.715
        ],
        [
         116.392,
         34.71
        ],
        [
         116.374,
         34.64
        ],
        [
         116.43,
         34.651
        ],
        [
         116.433,
         34.63
        ],
        [
         116.477,
         34.615
        ],
        [
         116.491,
         34.574
        ],
        [
         116.594,
         34.512
        ],
        [
         116.592,
         34.494
        ],
        [
         116.662,
         34.473
        ],
        [
         116.723,
         34.472
        ],
        [
         116.774,
         34.454
        ],
        [
         116.783,
         34.43
        ],
        [
         116.828,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.969,
         34.389
        ],
        [
         116.961,
         34.364
        ],
        [
         116.983,
         34.348
        ],
        [
         116.969,
         34.284
        ],
        [
         117.051,
         34.221
        ],
        [
         117.025,
         34.167
        ],
        [
         117.047,
         34.152
        ],
        [
         117.124,
         34.128
        ],
        [
         117.131,
         34.102
        ],
        [
         117.192,
         34.069
        ],
        [
         117.257,
         34.066
        ],
        [
         117.277,
         34.079
        ],
        [
         117.312,
         34.068
        ],
        [
         117.357,
         34.088
        ],
        [
         117.404,
         34.032
        ],
        [
         117.435,
         34.028
        ],
        [
         117.515,
         34.061
        ],
        [
         117.543,
         34.039
        ],
        [
         117.569,
         33.985
        ],
        [
         117.613,
         34.0
        ],
        [
         117.629,
         34.029
        ],
        [
         117.671,
         33.992
        ],
        [
         117.673,
         33.935
        ],
        [
         117.715,
         33.879
        ],
        [
         117.754,
         33.891
        ],
        [
         117.759,
         33.874
        ],
        [
         117.74,
         33.758
        ],
        [
         117.725,
         33.75
        ],
        [
         117.75,
         33.711
        ],
        [
         117.791,
         33.734
        ],
        [
         117.844,
         33.736
        ],
        [
         117.902,
         33.72
        ],
        [
         117.973,
         33.75
        ],
        [
         118.02,
         33.739
        ],
        [
         118.066,
         33.766
        ],
        [
         118.118,
         33.766
        ],
        [
         118.161,
         33.736
        ],
        [
         118.168,
         33.663
        ],
        [
         118.112,
         33.617
        ],
        [
         118.118,
         33.595
        ],
        [
         118.107,
         33.475
        ],
        [
         118.051,
         33.492
        ],
        [
         118.027,
         33.455
        ],
        [
         118.017,
         33.403
        ],
        [
         118.029,
         33.375
        ],
        [
         117.993,
         33.333
        ],
        [
         117.974,
         33.279
        ],
        [
         117.939,
         33.262
        ],
        [
         117.942,
         33.225
        ],
        [
         117.977,
         33.226
        ],
        [
         117.989,
         33.181
        ],
        [
         118.037,
         33.152
        ],
        [
         118.038,
         33.135
        ],
        [
         118.149,
         33.169
        ],
        [
         118.178,
         33.218
        ],
        [
         118.217,
         33.192
        ],
        [
         118.22,
         33.114
        ],
        [
         118.244,
         33.028
        ],
        [
         118.245,
         32.998
        ],
        [
         118.269,
         32.969
        ],
        [
         118.304,
         32.969
        ],
        [
         118.292,
         32.946
        ],
        [
         118.252,
         32.937
        ],
        [
         118.233,
         32.914
        ],
        [
         118.25,
         32.848
        ],
        [
         118.301,
         32.846
        ],
        [
         118.3,
         32.783
        ],
        [
         118.334,
         32.762
        ],
        [
         118.363,
         32.771
        ],
        [
         118.375,
         32.719
        ],
        [
         118.411,
         32.716
        ],
        [
         118.451,
         32.744
        ],
        [
         118.484,
         32.721
        ],
        [
         118.56,
         32.73
        ],
        [
         118.572,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.707,
         32.72
        ],
        [
         118.757,
         32.737
        ],
        [
         118.738,
         32.773
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.81,
         32.854
        ],
        [
         118.821,
         32.921
        ],
        [
         118.847,
         32.922
        ],
        [
         118.849,
         32.957
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.893,
         32.941
        ],
        [
         118.934,
         32.939
        ],
        [
         118.993,
         32.958
        ],
        [
         119.021,
         32.956
        ],
        [
         119.055,
         32.875
        ],
        [
         119.113,
         32.823
        ],
        [
         119.18,
         32.825
        ],
        [
         119.18,
         32.565
        ],
        [
         119.153,
         32.558
        ],
        [
         119.168,
         32.536
        ],
        [
         119.142,
         32.5
        ],
        [
         119.085,
         32.453
        ],
        [
         119.041,
         32.515
        ],
        [
         118.976,
         32.505
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.891,
         32.553
        ],
        [
         118.908,
         32.592
        ],
        [
         118.843,
         32.568
        ],
        [
         118.821,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.757,
         32.604
        ],
        [
         118.735,
         32.589
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.689,
         32.588
        ],
        [
         118.659,
         32.594
        ],
        [
         118.633,
         32.578
        ],
        [
         118.597,
         32.601
        ],
        [
         118.569,
         32.586
        ],
        [
         118.564,
         32.562
        ],
        [
         118.609,
         32.537
        ],
        [
         118.592,
         32.481
        ],
        [
         118.629,
         32.468
        ],
        [
         118.691,
         32.472
        ],
        [
         118.685,
         32.404
        ],
        [
         118.703,
         32.329
        ],
        [
         118.657,
         32.301
        ],
        [
         118.675,
         32.25
        ],
        [
         118.644,
         32.21
        ],
        [
         118.511,
         32.194
        ],
        [
         118.495,
         32.165
        ],
        [
         118.501,
         32.122
        ],
        [
         118.434,
         32.087
        ],
        [
         118.394,
         32.076
        ],
        [
         118.39,
         32.0
        ],
        [
         119.18,
         32.0
        ],
        [
         119.18,
         35.102
        ],
        [
         119.138,
         35.096
        ],
        [
         119.115,
         35.055
        ],
        [
         119.027,
         35.056
        ],
        [
         118.943,
         35.041
        ],
        [
         118.928,
         35.051
        ],
        [
         118.863,
         35.026
        ],
        [
         118.861,
         34.944
        ],
        [
         118.805,
         34.873
        ],
        [
         118.8,
         34.843
        ],
        [
         118.772,
         34.794
        ],
        [
         118.739,
         34.793
        ],
        [
         118.719,
         34.745
        ],
        [
         118.764,
         34.74
        ],
        [
         118.784,
         34.723
        ],
        [
         118.739,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.664,
         34.694
        ],
        [
         118.608,
         34.694
        ],
        [
         118.601,
         34.714
        ],
        [
         118.546,
         34.706
        ],
        [
         118.461,
         34.656
        ],
        [
         118.474,
         34.623
        ],
        [
         118.439,
         34.626
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.508
        ],
        [
         118.416,
         34.474
        ],
        [
         118.405,
         34.428
        ],
        [
         118.38,
         34.415
        ],
        [
         118.29,
         34.425
        ],
        [
         118.277,
         34.405
        ],
        [
         118.22,
         34.406
        ],
        [
         118.218,
         34.379
        ],
        [
         118.18,
         34.38
        ],
        [
         118.178,
         34.453
        ],
        [
         118.133,
         34.483
        ],
        [
         118.165,
         34.505
        ],
        [
         118.185,
         34.544
        ],
        [
         118.079,
         34.57
        ],
        [
         118.115,
         34.614
        ],
        [
         118.084,
         34.656
        ],
        [
         118.054,
         34.651
        ],
        [
         117.952,
         34.678
        ],
        [
         117.91,
         34.671
        ],
        [
         117.903,
         34.644
        ],
        [
         117.794,
         34.652
        ],
        [
         117.791,
         34.583
        ],
        [
         117.802,
         34.519
        ],
        [
         117.684,
         34.547
        ],
        [
         117.659,
         34.501
        ],
        [
         117.61,
         34.491
        ],
        [
         117.593,
         34.463
        ],
        [
         117.538,
         34.467
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.551
        ],
        [
         117.403,
         34.57
        ],
        [
         117.371,
         34.585
        ],
        [
         117.325,
         34.573
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
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
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
         116.642,
         33.978
        ],
        [
         116.643,
         33.897
        ],
        [
         116.631,
         33.888
        ],
        [
         116.567,
         33.908
        ],
        [
         116.558,
         33.881
        ],
        [
         116.486,
         33.87
        ],
        [
         116.438,
         33.846
        ],
        [
         116.437,
         33.801
        ],
        [
         116.408,
         33.806
        ],
        [
         116.394,
         33.783
        ],
        [
         116.317,
         33.771
        ],
        [
         116.263,
         33.73
        ],
        [
         116.23,
         33.735
        ],
        [
         116.156,
         33.71
        ],
        [
         116.133,
         33.752
        ],
        [
         116.1,
         33.783
        ],
        [
         116.074,
         33.781
        ],
        [
         116.056,
         33.805
        ],
        [
         116.059,
         33.861
        ],
        [
         115.982,
         33.917
        ],
        [
         116.0,
         33.965
        ],
        [
         115.958,
         34.008
        ],
        [
         115.904,
         34.01
        ],
        [
         115.877,
         34.029
        ],
        [
         115.877,
         34.003
        ],
        [
         115.85,
         34.005
        ],
        [
         115.846,
         34.029
        ],
        [
         115.809,
         34.062
        ],
        [
         115.769,
         34.062
        ],
        [
         115.736,
         34.077
        ],
        [
         115.706,
         34.06
        ],
        [
         115.658,
         34.061
        ],
        [
         115.642,
         34.032
        ],
        [
         115.607,
         34.03
        ],
        [
         115.579,
         33.974
        ],
        [
         115.578,
         33.95
        ],
        [
         115.548,
         33.875
        ],
        [
         115.632,
         33.87
        ],
        [
         115.614,
         33.776
        ],
        [
         115.577,
         33.788
        ],
        [
         115.563,
         33.773
        ],
        [
         115.602,
         33.719
        ],
        [
         115.601,
         33.659
        ],
        [
         115.64,
         33.585
        ],
        [
         115.565,
         33.576
        ],
        [
         115.511,
         33.553
        ],
        [
         115.464,
         33.567
        ],
        [
         115.423,
         33.557
        ],
        [
         115.395,
         33.506
        ],
        [
         115.367,
         33.523
        ],
        [
         115.346,
         33.503
        ],
        [
         115.346,
         33.45
        ],
        [
         115.325,
         33.457
        ],
        [
         115.315,
         33.431
        ],
        [
         115.329,
         33.403
        ],
        [
         115.314,
         33.377
        ],
        [
         115.342,
         33.371
        ],
        [
         115.365,
         33.336
        ],
        [
         115.362,
         33.298
        ],
        [
         115.335,
         33.298
        ],
        [
         115.34,
         33.261
        ],
        [
         115.301,
         33.204
        ],
        [
         115.304,
         33.15
        ],
        [
         115.29,
         33.132
        ],
        [
         115.245,
         33.136
        ],
        [
         115.195,
         33.121
        ],
        [
         115.168,
         33.089
        ],
        [
         115.041,
         33.087
        ],
        [
         114.991,
         33.102
        ],
        [
         114.966,
         33.147
        ],
        [
         114.933,
         33.154
        ],
        [
         114.903,
         33.13
        ],
        [
         114.897,
         33.087
        ],
        [
         114.913,
         33.083
        ],
        [
         114.926,
         33.017
        ],
        [
         114.892,
         33.02
        ],
        [
         114.883,
         32.99
        ],
        [
         114.916,
         32.971
        ],
        [
         114.943,
         32.935
        ],
        [
         115.009,
         32.94
        ],
        [
         115.035,
         32.933
        ],
        [
         115.03,
         32.907
        ],
        [
         115.139,
         32.898
        ],
        [
         115.156,
         32.865
        ],
        [
         115.197,
         32.856
        ],
        [
         115.19,
         32.812
        ],
        [
         115.211,
         32.786
        ],
        [
         115.19,
         32.771
        ],
        [
         115.179,
         32.726
        ],
        [
         115.183,
         32.667
        ],
        [
         115.201,
         32.592
        ],
        [
         115.243,
         32.593
        ],
        [
         115.267,
         32.578
        ],
        [
         115.306,
         32.583
        ],
        [
         115.305,
         32.553
        ],
        [
         115.411,
         32.575
        ],
        [
         115.409,
         32.549
        ],
        [
         115.498,
         32.492
        ],
        [
         115.509,
         32.469
        ],
        [
         115.511,
         32.469
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.468
        ],
        [
         115.509,
         32.467
        ],
        [
         115.523,
         32.442
        ],
        [
         115.571,
         32.419
        ],
        [
         115.604,
         32.426
        ],
        [
         115.626,
         32.405
        ],
        [
         115.658,
         32.429
        ],
        [
         115.668,
         32.41
        ],
        [
         115.705,
         32.495
        ],
        [
         115.742,
         32.476
        ],
        [
         115.772,
         32.505
        ],
        [
         115.789,
         32.469
        ],
        [
         115.861,
         32.537
        ],
        [
         115.891,
         32.576
        ],
        [
         115.91,
         32.567
        ],
        [
         115.876,
         32.542
        ],
        [
         115.846,
         32.502
        ],
        [
         115.883,
         32.488
        ],
        [
         115.865,
         32.459
        ],
        [
         115.899,
         32.391
        ],
        [
         115.913,
         32.228
        ],
        [
         115.942,
         32.166
        ],
        [
         115.922,
         32.05
        ],
        [
         115.929,
         32.003
        ],
        [
         115.928,
         32.0
        ],
        [
         118.39,
         32.0
        ],
        [
         118.394,
         32.076
        ],
        [
         118.434,
         32.087
        ],
        [
         118.501,
         32.122
        ],
        [
         118.495,
         32.165
        ],
        [
         118.511,
         32.194
        ],
        [
         118.644,
         32.21
        ],
        [
         118.675,
         32.25
        ],
        [
         118.657,
         32.301
        ],
        [
         118.703,
         32.329
        ],
        [
         118.685,
         32.404
        ],
        [
         118.691,
         32.472
        ],
        [
         118.629,
         32.468
        ],
        [
         118.592,
         32.481
        ],
        [
         118.609,
         32.537
        ],
        [
         118.564,
         32.562
        ],
        [
         118.569,
         32.586
        ],
        [
         118.597,
         32.601
        ],
        [
         118.633,
         32.578
        ],
        [
         118.659,
         32.594
        ],
        [
         118.689,
         32.588
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.735,
         32.589
        ],
        [
         118.757,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.821,
         32.604
        ],
        [
         118.843,
         32.568
        ],
        [
         118.908,
         32.592
        ],
        [
         118.891,
         32.553
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.976,
         32.505
        ],
        [
         119.041,
         32.515
        ],
        [
         119.085,
         32.453
        ],
        [
         119.142,
         32.5
        ],
        [
         119.168,
         32.536
        ],
        [
         119.153,
         32.558
        ],
        [
         119.18,
         32.565
        ],
        [
         119.18,
         32.825
        ],
        [
         119.113,
         32.823
        ],
        [
         119.055,
         32.875
        ],
        [
         119.021,
         32.956
        ],
        [
         118.993,
         32.958
        ],
        [
         118.934,
         32.939
        ],
        [
         118.893,
         32.941
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.849,
         32.957
        ],
        [
         118.847,
         32.922
        ],
        [
         118.821,
         32.921
        ],
        [
         118.81,
         32.854
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.738,
         32.773
        ],
        [
         118.757,
         32.737
        ],
        [
         118.707,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.572,
         32.72
        ],
        [
         118.56,
         32.73
        ],
        [
         118.484,
         32.721
        ],
        [
         118.451,
         32.744
        ],
        [
         118.411,
         32.716
        ],
        [
         118.375,
         32.719
        ],
        [
         118.363,
         32.771
        ],
        [
         118.334,
         32.762
        ],
        [
         118.3,
         32.783
        ],
        [
         118.301,
         32.846
        ],
        [
         118.25,
         32.848
        ],
        [
         118.233,
         32.914
        ],
        [
         118.252,
         32.937
        ],
        [
         118.292,
         32.946
        ],
        [
         118.304,
         32.969
        ],
        [
         118.269,
         32.969
        ],
        [
         118.245,
         32.998
        ],
        [
         118.244,
         33.028
        ],
        [
         118.22,
         33.114
        ],
        [
         118.217,
         33.192
        ],
        [
         118.178,
         33.218
        ],
        [
         118.149,
         33.169
        ],
        [
         118.038,
         33.135
        ],
        [
         118.037,
         33.152
        ],
        [
         117.989,
         33.181
        ],
        [
         117.977,
         33.226
        ],
        [
         117.942,
         33.225
        ],
        [
         117.939,
         33.262
        ],
        [
         117.974,
         33.279
        ],
        [
         117.993,
         33.333
        ],
        [
         118.029,
         33.375
        ],
        [
         118.017,
         33.403
        ],
        [
         118.027,
         33.455
        ],
        [
         118.051,
         33.492
        ],
        [
         118.107,
         33.475
        ],
        [
         118.118,
         33.595
        ],
        [
         118.112,
         33.617
        ],
        [
         118.168,
         33.663
        ],
        [
         118.161,
         33.736
        ],
        [
         118.118,
         33.766
        ],
        [
         118.066,
         33.766
        ],
        [
         118.02,
         33.739
        ],
        [
         117.973,
         33.75
        ],
        [
         117.902,
         33.72
        ],
        [
         117.844,
         33.736
        ],
        [
         117.791,
         33.734
        ],
        [
         117.75,
         33.711
        ],
        [
         117.725,
         33.75
        ],
        [
         117.74,
         33.758
        ],
        [
         117.759,
         33.874
        ],
        [
         117.754,
         33.891
        ],
        [
         117.715,
         33.879
        ],
        [
         117.673,
         33.935
        ],
        [
         117.671,
         33.992
        ],
        [
         117.629,
         34.029
        ],
        [
         117.613,
         34.0
        ],
        [
         117.569,
         33.985
        ],
        [
         117.543,
         34.039
        ],
        [
         117.515,
         34.061
        ],
        [
         117.435,
         34.028
        ],
        [
         117.404,
         34.032
        ],
        [
         117.357,
         34.088
        ],
        [
         117.312,
         34.068
        ],
        [
         117.277,
         34.079
        ],
        [
         117.257,
         34.066
        ],
        [
         117.192,
         34.069
        ],
        [
         117.131,
         34.102
        ],
        [
         117.124,
         34.128
        ],
        [
         117.047,
         34.152
        ],
        [
         117.025,
         34.167
        ],
        [
         117.051,
         34.221
        ],
        [
         116.969,
         34.284
        ],
        [
         116.983,
         34.348
        ],
        [
         116.961,
         34.364
        ],
        [
         116.969,
         34.389
        ],
        [
         116.909,
         34.408
        ],
        [
         116.828,
         34.389
        ],
        [
         116.783,
         34.43
        ],
        [
         116.774,
         34.454
        ],
        [
         116.723,
         34.472
        ],
        [
         116.662,
         34.473
        ],
        [
         116.592,
         34.494
        ],
        [
         116.594,
         34.512
        ],
        [
         116.491,
         34.574
        ],
        [
         116.477,
         34.615
        ],
        [
         116.433,
         34.63
        ],
        [
         116.43,
         34.651
        ],
        [
         116.374,
         34.64
        ],
        [
         116.334,
         34.621
        ],
        [
         116.325,
         34.601
        ],
        [
         116.286,
         34.609
        ],
        [
         116.248,
         34.552
        ],
        [
         116.197,
         34.576
        ],
        [
         116.191,
         34.536
        ],
        [
         116.204,
         34.508
        ],
        [
         116.178,
         34.496
        ],
        [
         116.162,
         34.46
        ],
        [
         116.179,
         34.43
        ],
        [
         116.216,
         34.403
        ],
        [
         116.213,
         34.382
        ],
        [
         116.256,
         34.377
        ],
        [
         116.302,
         34.342
        ],
        [
         116.358,
         34.32
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
         116.409,
         34.274
        ],
        [
         116.457,
         34.269
        ],
        [
         116.516,
         34.296
        ],
        [
         116.562,
         34.286
        ],
        [
         116.582,
         34.266
        ],
        [
         116.545,
         34.242
        ],
        [
         116.543,
         34.204
        ],
        [
         116.566,
         34.169
        ],
        [
         116.536,
         34.151
        ],
        [
         116.528,
         34.123
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ]
       ]
      ],
      [
       [
        [
         115.509,
         32.469
        ],
        [
         115.509,
         32.467
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.469
        ],
        [
         115.509,
         32.469
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
         116.392,
         34.71
        ],
        [
         116.364,
         34.715
        ],
        [
         116.369,
         34.749
        ],
        [
         116.403,
         34.756
        ],
        [
         116.408,
         34.851
        ],
        [
         116.445,
         34.896
        ],
        [
         116.558,
         34.909
        ],
        [
         116.614,
         34.923
        ],
        [
         116.622,
         34.94
        ],
        [
         116.678,
         34.939
        ],
        [
         116.781,
         34.917
        ],
        [
         116.789,
         34.975
        ],
        [
         116.816,
         34.965
        ],
        [
         116.822,
         34.93
        ],
        [
         116.858,
         34.929
        ],
        [
         116.922,
         34.895
        ],
        [
         116.929,
         34.843
        ],
        [
         116.966,
         34.845
        ],
        [
         116.979,
         34.815
        ],
        [
         116.951,
         34.811
        ],
        [
         116.969,
         34.772
        ],
        [
         117.022,
         34.759
        ],
        [
         117.07,
         34.714
        ],
        [
         117.062,
         34.676
        ],
        [
         117.073,
         34.639
        ],
        [
         117.104,
         34.649
        ],
        [
         117.152,
         34.559
        ],
        [
         117.139,
         34.527
        ],
        [
         117.166,
         34.434
        ],
        [
         117.248,
         34.451
        ],
        [
         117.253,
         34.487
        ],
        [
         117.273,
         34.5
        ],
        [
         117.268,
         34.533
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.557
        ],
        [
         117.312,
         34.562
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
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
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
         34.57
        ],
        [
         117.403,
         34.551
        ],
        [
         117.465,
         34.485
        ],
        [
         117.538,
         34.467
        ],
        [
         117.593,
         34.463
        ],
        [
         117.61,
         34.491
        ],
        [
         117.659,
         34.501
        ],
        [
         117.684,
         34.547
        ],
        [
         117.802,
         34.519
        ],
        [
         117.791,
         34.583
        ],
        [
         117.794,
         34.652
        ],
        [
         117.903,
         34.644
        ],
        [
         117.91,
         34.671
        ],
        [
         117.952,
         34.678
        ],
        [
         118.054,
         34.651
        ],
        [
         118.084,
         34.656
        ],
        [
         118.115,
         34.614
        ],
        [
         118.079,
         34.57
        ],
        [
         118.185,
         34.544
        ],
        [
         118.165,
         34.505
        ],
        [
         118.133,
         34.483
        ],
        [
         118.178,
         34.453
        ],
        [
         118.18,
         34.38
        ],
        [
         118.218,
         34.379
        ],
        [
         118.22,
         34.406
        ],
        [
         118.277,
         34.405
        ],
        [
         118.29,
         34.425
        ],
        [
         118.38,
         34.415
        ],
        [
         118.405,
         34.428
        ],
        [
         118.416,
         34.474
        ],
        [
         118.439,
         34.508
        ],
        [
         118.425,
         34.595
        ],
        [
         118.439,
         34.626
        ],
        [
         118.474,
         34.623
        ],
        [
         118.461,
         34.656
        ],
        [
         118.546,
         34.706
        ],
        [
         118.601,
         34.714
        ],
        [
         118.608,
         34.694
        ],
        [
         118.664,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.739,
         34.694
        ],
        [
         118.784,
         34.723
        ],
        [
         118.764,
         34.74
        ],
        [
         118.719,
         34.745
        ],
        [
         118.739,
         34.793
        ],
        [
         118.772,
         34.794
        ],
        [
         118.8,
         34.843
        ],
        [
         118.805,
         34.873
        ],
        [
         118.861,
         34.944
        ],
        [
         118.863,
         35.026
        ],
        [
         118.928,
         35.051
        ],
        [
         118.943,
         35.041
        ],
        [
         119.027,
         35.056
        ],
        [
         119.115,
         35.055
        ],
        [
         119.138,
         35.096
        ],
        [
         119.18,
         35.102
        ],
        [
         119.18,
         37.262
        ],
        [
         119.137,
         37.231
        ],
        [
         119.128,
         37.255
        ],
        [
         119.091,
         37.258
        ],
        [
         119.084,
         37.24
        ],
        [
         119.054,
         37.255
        ],
        [
         119.04,
         37.304
        ],
        [
         119.001,
         37.319
        ],
        [
         118.991,
         37.35
        ],
        [
         116.003,
         37.35
        ],
        [
         115.976,
         37.337
        ],
        [
         115.97,
         37.24
        ],
        [
         115.91,
         37.207
        ],
        [
         115.912,
         37.177
        ],
        [
         115.88,
         37.151
        ],
        [
         115.888,
         37.112
        ],
        [
         115.856,
         37.061
        ],
        [
         115.777,
         36.993
        ],
        [
         115.797,
         36.969
        ],
        [
         115.758,
         36.902
        ],
        [
         115.712,
         36.883
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
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
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.335,
         35.797
        ],
        [
         115.363,
         35.78
        ],
        [
         115.408,
         35.809
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.495,
         35.896
        ],
        [
         115.505,
         35.899
        ],
        [
         115.513,
         35.89
        ],
        [
         115.584,
         35.922
        ],
        [
         115.649,
         35.923
        ],
        [
         115.699,
         35.966
        ],
        [
         115.775,
         35.975
        ],
        [
         115.78,
         35.994
        ],
        [
         115.817,
         36.013
        ],
        [
         115.86,
         36.004
        ],
        [
         115.899,
         36.027
        ],
        [
         115.99,
         36.045
        ],
        [
         116.058,
         36.105
        ],
        [
         116.099,
         36.112
        ],
        [
         116.063,
         36.029
        ],
        [
         116.049,
         35.97
        ],
        [
         115.985,
         35.974
        ],
        [
         115.912,
         35.96
        ],
        [
         115.908,
         35.927
        ],
        [
         115.873,
         35.919
        ],
        [
         115.883,
         35.88
        ],
        [
         115.86,
         35.858
        ],
        [
         115.817,
         35.844
        ],
        [
         115.774,
         35.854
        ],
        [
         115.735,
         35.833
        ],
        [
         115.696,
         35.789
        ],
        [
         115.694,
         35.754
        ],
        [
         115.623,
         35.739
        ],
        [
         115.529,
         35.734
        ],
        [
         115.486,
         35.71
        ],
        [
         115.383,
         35.569
        ],
        [
         115.345,
         35.554
        ],
        [
         115.356,
         35.49
        ],
        [
         115.307,
         35.48
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.317,
         34.859
        ],
        [
         115.427,
         34.805
        ],
        [
         115.449,
         34.744
        ],
        [
         115.434,
         34.725
        ],
        [
         115.461,
         34.637
        ],
        [
         115.516,
         34.582
        ],
        [
         115.553,
         34.569
        ],
        [
         115.623,
         34.574
        ],
        [
         115.686,
         34.556
        ],
        [
         115.697,
         34.594
        ],
        [
         115.788,
         34.581
        ],
        [
         115.827,
         34.558
        ],
        [
         115.838,
         34.568
        ],
        [
         115.984,
         34.589
        ],
        [
         115.991,
         34.615
        ],
        [
         116.037,
         34.593
        ],
        [
         116.101,
         34.606
        ],
        [
         116.135,
         34.56
        ],
        [
         116.157,
         34.554
        ],
        [
         116.197,
         34.576
        ],
        [
         116.248,
         34.552
        ],
        [
         116.286,
         34.609
        ],
        [
         116.325,
         34.601
        ],
        [
         116.334,
         34.621
        ],
        [
         116.374,
         34.64
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
         115.488,
         35.881
        ],
        [
         115.513,
         35.89
        ],
        [
         115.505,
         35.899
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
         113.62,
         32.359
        ],
        [
         113.625,
         32.361
        ],
        [
         113.651,
         32.413
        ],
        [
         113.7,
         32.421
        ],
        [
         113.736,
         32.411
        ],
        [
         113.768,
         32.37
        ],
        [
         113.754,
         32.328
        ],
        [
         113.769,
         32.301
        ],
        [
         113.768,
         32.284
        ],
        [
         113.758,
         32.277
        ],
        [
         113.749,
         32.273
        ],
        [
         113.739,
         32.256
        ],
        [
         113.753,
         32.216
        ],
        [
         113.782,
         32.185
        ],
        [
         113.75,
         32.116
        ],
        [
         113.723,
         32.124
        ],
        [
         113.729,
         32.083
        ],
        [
         113.792,
         32.036
        ],
        [
         113.765,
         32.0
        ],
        [
         115.928,
         32.0
        ],
        [
         115.929,
         32.003
        ],
        [
         115.922,
         32.05
        ],
        [
         115.942,
         32.166
        ],
        [
         115.913,
         32.228
        ],
        [
         115.899,
         32.391
        ],
        [
         115.865,
         32.459
        ],
        [
         115.883,
         32.488
        ],
        [
         115.846,
         32.502
        ],
        [
         115.876,
         32.542
        ],
        [
         115.91,
         32.567
        ],
        [
         115.891,
         32.576
        ],
        [
         115.861,
         32.537
        ],
        [
         115.789,
         32.469
        ],
        [
         115.772,
         32.505
        ],
        [
         115.742,
         32.476
        ],
        [
         115.705,
         32.495
        ],
        [
         115.668,
         32.41
        ],
        [
         115.658,
         32.429
        ],
        [
         115.626,
         32.405
        ],
        [
         115.604,
         32.426
        ],
        [
         115.571,
         32.419
        ],
        [
         115.523,
         32.442
        ],
        [
         115.509,
         32.467
        ],
        [
         115.509,
         32.469
        ],
        [
         115.498,
         32.492
        ],
        [
         115.409,
         32.549
        ],
        [
         115.411,
         32.575
        ],
        [
         115.305,
         32.553
        ],
        [
         115.306,
         32.583
        ],
        [
         115.267,
         32.578
        ],
        [
         115.243,
         32.593
        ],
        [
         115.201,
         32.592
        ],
        [
         115.183,
         32.667
        ],
        [
         115.179,
         32.726
        ],
        [
         115.19,
         32.771
        ],
        [
         115.211,
         32.786
        ],
        [
         115.19,
         32.812
        ],
        [
         115.197,
         32.856
        ],
        [
         115.156,
         32.865
        ],
        [
         115.139,
         32.898
        ],
        [
         115.03,
         32.907
        ],
        [
         115.035,
         32.933
        ],
        [
         115.009,
         32.94
        ],
        [
         114.943,
         32.935
        ],
        [
         114.916,
         32.971
        ],
        [
         114.883,
         32.99
        ],
        [
         114.892,
         33.02
        ],
        [
         114.926,
         33.017
        ],
        [
         114.913,
         33.083
        ],
        [
         114.897,
         33.087
        ],
        [
         114.903,
         33.13
        ],
        [
         114.933,
         33.154
        ],
        [
         114.966,
         33.147
        ],
        [
         114.991,
         33.102
        ],
        [
         115.041,
         33.087
        ],
        [
         115.168,
         33.089
        ],
        [
         115.195,
         33.121
        ],
        [
         115.245,
         33.136
        ],
        [
         115.29,
         33.132
        ],
        [
         115.304,
         33.15
        ],
        [
         115.301,
         33.204
        ],
        [
         115.34,
         33.261
        ],
        [
         115.335,
         33.298
        ],
        [
         115.362,
         33.298
        ],
        [
         115.365,
         33.336
        ],
        [
         115.342,
         33.371
        ],
        [
         115.314,
         33.377
        ],
        [
         115.329,
         33.403
        ],
        [
         115.315,
         33.431
        ],
        [
         115.325,
         33.457
        ],
        [
         115.346,
         33.45
        ],
        [
         115.346,
         33.503
        ],
        [
         115.367,
         33.523
        ],
        [
         115.395,
         33.506
        ],
        [
         115.423,
         33.557
        ],
        [
         115.464,
         33.567
        ],
        [
         115.511,
         33.553
        ],
        [
         115.565,
         33.576
        ],
        [
         115.64,
         33.585
        ],
        [
         115.601,
         33.659
        ],
        [
         115.602,
         33.719
        ],
        [
         115.563,
         33.773
        ],
        [
         115.577,
         33.788
        ],
        [
         115.614,
         33.776
        ],
        [
         115.632,
         33.87
        ],
        [
         115.548,
         33.875
        ],
        [
         115.578,
         33.95
        ],
        [
         115.579,
         33.974
        ],
        [
         115.607,
         34.03
        ],
        [
         115.642,
         34.032
        ],
        [
         115.658,
         34.061
        ],
        [
         115.706,
         34.06
        ],
        [
         115.736,
         34.077
        ],
        [
         115.769,
         34.062
        ],
        [
         115.809,
         34.062
        ],
        [
         115.846,
         34.029
        ],
        [
         115.85,
         34.005
        ],
        [
         115.877,
         34.003
        ],
        [
         115.877,
         34.029
        ],
        [
         115.904,
         34.01
        ],
        [
         115.958,
         34.008
        ],
        [
         116.0,
         33.965
        ],
        [
         115.982,
         33.917
        ],
        [
         116.059,
         33.861
        ],
        [
         116.056,
         33.805
        ],
        [
         116.074,
         33.781
        ],
        [
         116.1,
         33.783
        ],
        [
         116.133,
         33.752
        ],
        [
         116.156,
         33.71
        ],
        [
         116.23,
         33.735
        ],
        [
         116.263,
         33.73
        ],
        [
         116.317,
         33.771
        ],
        [
         116.394,
         33.783
        ],
        [
         116.408,
         33.806
        ],
        [
         116.437,
         33.801
        ],
        [
         116.438,
         33.846
        ],
        [
         116.486,
         33.87
        ],
        [
         116.558,
         33.881
        ],
        [
         116.567,
         33.908
        ],
        [
         116.631,
         33.888
        ],
        [
         116.643,
         33.897
        ],
        [
         116.642,
         33.978
        ],
        [
         116.6,
         34.014
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
         116.576,
         34.069
        ],
        [
         116.528,
         34.123
        ],
        [
         116.536,
         34.151
        ],
        [
         116.566,
         34.169
        ],
        [
         116.543,
         34.204
        ],
        [
         116.545,
         34.242
        ],
        [
         116.582,
         34.266
        ],
        [
         116.562,
         34.286
        ],
        [
         116.516,
         34.296
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
         116.409,
         34.274
        ],
        [
         116.372,
         34.266
        ],
        [
         116.358,
         34.32
        ],
        [
         116.302,
         34.342
        ],
        [
         116.256,
         34.377
        ],
        [
         116.213,
         34.382
        ],
        [
         116.216,
         34.403
        ],
        [
         116.179,
         34.43
        ],
        [
         116.162,
         34.46
        ],
        [
         116.178,
         34.496
        ],
        [
         116.204,
         34.508
        ],
        [
         116.191,
         34.536
        ],
        [
         116.197,
         34.576
        ],
        [
         116.157,
         34.554
        ],
        [
         116.135,
         34.56
        ],
        [
         116.101,
         34.606
        ],
        [
         116.037,
         34.593
        ],
        [
         115.991,
         34.615
        ],
        [
         115.984,
         34.589
        ],
        [
         115.838,
         34.568
        ],
        [
         115.827,
         34.558
        ],
        [
         115.788,
         34.581
        ],
        [
         115.697,
         34.594
        ],
        [
         115.686,
         34.556
        ],
        [
         115.623,
         34.574
        ],
        [
         115.553,
         34.569
        ],
        [
         115.516,
         34.582
        ],
        [
         115.461,
         34.637
        ],
        [
         115.434,
         34.725
        ],
        [
         115.449,
         34.744
        ],
        [
         115.427,
         34.805
        ],
        [
         115.317,
         34.859
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.307,
         35.48
        ],
        [
         115.356,
         35.49
        ],
        [
         115.345,
         35.554
        ],
        [
         115.383,
         35.569
        ],
        [
         115.486,
         35.71
        ],
        [
         115.529,
         35.734
        ],
        [
         115.623,
         35.739
        ],
        [
         115.694,
         35.754
        ],
        [
         115.696,
         35.789
        ],
        [
         115.735,
         35.833
        ],
        [
         115.774,
         35.854
        ],
        [
         115.817,
         35.844
        ],
        [
         115.86,
         35.858
        ],
        [
         115.883,
         35.88
        ],
        [
         115.873,
         35.919
        ],
        [
         115.908,
         35.927
        ],
        [
         115.912,
         35.96
        ],
        [
         115.985,
         35.974
        ],
        [
         116.049,
         35.97
        ],
        [
         116.063,
         36.029
        ],
        [
         116.099,
         36.112
        ],
        [
         116.058,
         36.105
        ],
        [
         115.99,
         36.045
        ],
        [
         115.899,
         36.027
        ],
        [
         115.86,
         36.004
        ],
        [
         115.817,
         36.013
        ],
        [
         115.78,
         35.994
        ],
        [
         115.775,
         35.975
        ],
        [
         115.699,
         35.966
        ],
        [
         115.649,
         35.923
        ],
        [
         115.584,
         35.922
        ],
        [
         115.513,
         35.89
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.408,
         35.809
        ],
        [
         115.363,
         35.78
        ],
        [
         115.335,
         35.797
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
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
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
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
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.003,
         36.334
        ],
        [
         113.982,
         36.318
        ],
        [
         113.963,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.882,
         36.354
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
         113.62,
         35.827
        ],
        [
         113.62,
         35.676
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
         113.62,
         35.633
        ],
        [
         113.62,
         32.359
        ]
       ]
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.769,
         32.301
        ],
        [
         113.749,
         32.273
        ],
        [
         113.758,
         32.277
        ],
        [
         113.768,
         32.284
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
         113.62,
         32.0
        ],
        [
         113.765,
         32.0
        ],
        [
         113.792,
         32.036
        ],
        [
         113.729,
         32.083
        ],
        [
         113.723,
         32.124
        ],
        [
         113.75,
         32.116
        ],
        [
         113.782,
         32.185
        ],
        [
         113.753,
         32.216
        ],
        [
         113.739,
         32.256
        ],
        [
         113.749,
         32.273
        ],
        [
         113.769,
         32.301
        ],
        [
         113.754,
         32.328
        ],
        [
         113.768,
         32.37
        ],
        [
         113.736,
         32.411
        ],
        [
         113.7,
         32.421
        ],
        [
         113.651,
         32.413
        ],
        [
         113.625,
         32.361
        ],
        [
         113.62,
         32.359
        ],
        [
         113.62,
         32.0
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        113.62,
        34.953
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
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
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
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.34,
       35.503
      ],
      [
       115.341,
       35.538
      ],
      [
       115.382,
       35.597
      ],
      [
       115.463,
       35.681
      ],
      [
       115.596,
       35.758
      ],
      [
       115.781,
       35.83
      ],
      [
       115.871,
       35.88
      ],
      [
       115.866,
       35.91
      ],
      [
       115.883,
       35.939
      ],
      [
       115.924,
       35.966
      ],
      [
       115.966,
       35.976
      ],
      [
       116.036,
       36.071
      ],
      [
       116.078,
       36.11
      ],
      [
       116.116,
       36.143
      ],
      [
       116.227,
       36.201
      ],
      [
       116.451,
       36.339
      ],
      [
       116.581,
       36.44
      ],
      [
       116.593,
       36.49
      ],
      [
       116.644,
       36.561
      ],
      [
       116.735,
       36.656
      ],
      [
       116.862,
       36.726
      ],
      [
       117.024,
       36.773
      ],
      [
       117.151,
       36.862
      ],
      [
       117.24,
       36.994
      ],
      [
       117.352,
       37.082
      ],
      [
       117.485,
       37.127
      ],
      [
       117.571,
       37.175
      ],
      [
       117.608,
       37.228
      ],
      [
       117.693,
       37.256
      ],
      [
       117.825,
       37.26
      ],
      [
       117.97,
       37.29
      ],
      [
       118.128,
       37.347
      ],
      [
       118.132,
       37.35
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        118.635,
        32.0
       ],
       [
        118.692,
        32.074
       ],
       [
        118.961,
        32.203
       ],
       [
        119.18,
        32.218
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.605,
        33.172
       ],
       [
        118.574,
        33.141
       ],
       [
        118.519,
        33.036
       ],
       [
        118.492,
        32.998
       ],
       [
        118.431,
        32.973
       ],
       [
        118.267,
        32.925
       ],
       [
        118.227,
        32.897
       ],
       [
        118.183,
        32.885
       ],
       [
        118.171,
        32.906
       ],
       [
        118.192,
        32.941
       ],
       [
        118.181,
        32.971
       ],
       [
        118.142,
        32.986
       ],
       [
        118.088,
        32.958
       ],
       [
        118.066,
        32.936
       ],
       [
        118.05,
        32.964
       ],
       [
        118.084,
        33.005
       ],
       [
        118.13,
        33.028
       ],
       [
        118.226,
        32.991
       ],
       [
        118.24,
        33.008
       ],
       [
        118.234,
        33.046
       ],
       [
        118.182,
        33.139
       ],
       [
        118.102,
        33.144
       ],
       [
        117.979,
        33.142
       ],
       [
        117.915,
        33.126
       ],
       [
        117.892,
        33.065
       ],
       [
        117.838,
        33.038
       ],
       [
        117.809,
        33.048
       ],
       [
        117.851,
        33.062
       ],
       [
        117.874,
        33.093
       ],
       [
        117.886,
        33.157
       ],
       [
        117.912,
        33.181
       ],
       [
        117.992,
        33.187
       ],
       [
        118.114,
        33.215
       ],
       [
        118.175,
        33.21
       ],
       [
        118.227,
        33.143
       ],
       [
        118.275,
        33.045
       ],
       [
        118.34,
        32.994
       ],
       [
        118.407,
        33.01
       ],
       [
        118.417,
        33.038
       ],
       [
        118.44,
        33.068
       ],
       [
        118.46,
        33.099
       ],
       [
        118.47,
        33.128
       ],
       [
        118.454,
        33.16
       ],
       [
        118.322,
        33.182
       ],
       [
        118.249,
        33.221
       ],
       [
        118.233,
        33.288
       ],
       [
        118.273,
        33.267
       ],
       [
        118.318,
        33.268
       ],
       [
        118.392,
        33.338
       ],
       [
        118.446,
        33.407
       ],
       [
        118.49,
        33.401
       ],
       [
        118.57,
        33.372
       ],
       [
        118.607,
        33.376
       ],
       [
        118.547,
        33.437
       ],
       [
        118.488,
        33.54
       ],
       [
        118.493,
        33.623
       ],
       [
        118.544,
        33.645
       ],
       [
        118.571,
        33.62
       ],
       [
        118.608,
        33.515
       ],
       [
        118.664,
        33.463
       ],
       [
        118.774,
        33.443
       ],
       [
        118.861,
        33.357
       ],
       [
        118.861,
        33.339
       ],
       [
        118.834,
        33.304
       ],
       [
        118.778,
        33.176
       ],
       [
        118.716,
        33.089
       ],
       [
        118.681,
        33.077
       ],
       [
        118.678,
        33.124
       ],
       [
        118.653,
        33.174
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ]
      ]
     ]
    },
    "n": "Hongze Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.18,
        32.687
       ],
       [
        119.173,
        32.686
       ],
       [
        119.165,
        32.706
       ],
       [
        119.147,
        32.753
       ],
       [
        119.125,
        32.798
       ],
       [
        119.092,
        32.836
       ],
       [
        119.079,
        32.855
       ],
       [
        119.084,
        32.866
       ],
       [
        119.13,
        32.877
       ],
       [
        119.18,
        32.878
       ],
       [
        119.18,
        33.148
       ],
       [
        119.18,
        33.148
       ],
       [
        119.168,
        33.118
       ],
       [
        119.164,
        33.09
       ],
       [
        119.154,
        33.065
       ],
       [
        119.099,
        33.027
       ],
       [
        119.035,
        33.031
       ],
       [
        118.966,
        33.038
       ],
       [
        118.907,
        33.058
       ],
       [
        118.882,
        33.077
       ],
       [
        118.957,
        33.071
       ],
       [
        119.059,
        33.058
       ],
       [
        119.102,
        33.069
       ],
       [
        119.135,
        33.144
       ],
       [
        119.17,
        33.186
       ],
       [
        119.18,
        33.189
       ],
       [
        119.18,
        32.687
       ]
      ]
     ]
    },
    "n": "Gaoyou Hu"
   },
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
        117.295,
        34.549
       ],
       [
        117.25,
        34.502
       ],
       [
        117.21,
        34.498
       ],
       [
        117.174,
        34.543
       ],
       [
        117.141,
        34.612
       ],
       [
        117.128,
        34.663
       ],
       [
        117.139,
        34.725
       ],
       [
        117.179,
        34.719
       ],
       [
        117.266,
        34.665
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
   113.62,
   32.0,
   119.18,
   37.35
  ]
 }
};
