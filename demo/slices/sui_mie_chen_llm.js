// 本文件由 tools/build.py 自动生成（切片 sui_mie_chen_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sui_mie_chen_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sui_mie_chen_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "nan_bei_chao",
  "title": "隋滅陳·金陵之變",
  "dossier_label": "sui_mie_chen_llm",
  "subtitle": "",
  "primary_place": "jiankang",
  "dossier_event": "event:ev_sui_mie_chen_llm_04",
  "vocab_pack": "sui_mie_chen_llm",
  "terrain_grid": "china_coarse",
  "lead": "",
  "parties_note": "",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "sui",
  "scale_tier": "strategic",
  "subject_names": [
   "event:ev_sui_mie_chen_llm_01",
   "event:ev_sui_mie_chen_llm_02",
   "event:ev_sui_mie_chen_llm_03",
   "event:ev_sui_mie_chen_llm_04",
   "event:ev_sui_mie_chen_llm_05",
   "place:guangling",
   "place:caishi",
   "place:gushu",
   "place:zhongshan",
   "place:xinlin",
   "place:jiankang",
   "place:jiangnan",
   "place:lingnan",
   "place:shudi",
   "person:SUI__p01",
   "person:SUI__p02",
   "person:SUI__p03",
   "person:SUI__p04",
   "person:SUI__p05",
   "person:SUI__p06",
   "person:SUI__p07",
   "person:SUI__p08"
  ],
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
    "note": "制度+思想→隋方統一意志（文帝決策、晉王為帥凝聚諸軍）vs 陳後主荒淫失政、內部分裂"
   },
   "material_logistics": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技術+制度→八路兵分、楊素水軍、運河轉輸；陳恃長江天險失守（賀若弼廣陵、韓擒虎采石多點渡江）"
   },
   "population_mobilization": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "社會+制度→隋出兵五十一萬八千 vs 陳在籍兵六十萬（含地方軍非皆野戰，實際野戰兵力無確載）"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     1,
     3
    ],
    "layer": "inference",
    "note": "地理+制度→自廣陵／采石多點渡江，避實擊虛，建康速陷，南北復归一統"
   }
  },
  "province": "jiangsu",
  "page": "sui_mie_chen_llm.html",
  "key": "sui_mie_chen_llm",
  "scene_id": "sui_mie_chen_llm"
 },
 "sources": [
  {
   "id": "sui_shu_llm",
   "title": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "party": "後世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "魏徵等（唐）",
   "period": "唐",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "guangling",
   "name": "廣陵",
   "type": "city",
   "modern": "今中國江蘇揚州",
   "note": "賀若弼出發地",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "caishi",
   "name": "采石",
   "type": "fortress",
   "modern": "今中國安徽馬鞍山",
   "note": "韓擒虎夜渡處",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "gushu",
   "name": "姑孰",
   "type": "city",
   "modern": "今中國安徽當塗",
   "note": "韓擒虎攻克",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "zhongshan",
   "name": "鐘山",
   "type": "region",
   "modern": "今中國江蘇南京",
   "note": "賀若弼據此",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "xinlin",
   "name": "新林",
   "type": "yi",
   "modern": "今中國江蘇南京西南",
   "note": "韓擒虎進軍",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "jiankang",
   "name": "建康",
   "type": "city",
   "modern": "今中國江蘇南京",
   "note": "陳都。坐标据地名志条目（modern 含 南京→南京），标 gazetteer。",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": 118.78,
   "lat": 32.06,
   "geo_match": "gazetteer",
   "geo_note": "坐标据地名志条目（modern 含 南京→南京）（诚实回填 v0.221）。",
   "elev": 15
  },
  {
   "id": "jiangnan",
   "name": "江左",
   "type": "region",
   "modern": "今中國長江下游",
   "note": "隋平陳後歸屬",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "lingnan",
   "name": "嶺南",
   "type": "region",
   "modern": "今中國五嶺以南",
   "note": "隋平陳後歸屬",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "shudi",
   "name": "蜀地",
   "type": "region",
   "modern": "今中國四川",
   "note": "隋平陳後歸屬",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "SUI__p01",
   "name": "楊堅",
   "role": "隋文帝",
   "note": "下詔伐陳",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p02",
   "name": "楊廣",
   "role": "晉王，行軍元帥",
   "note": "總領伐陳",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p03",
   "name": "楊素",
   "role": "清河公，行軍元帥",
   "note": "率水軍",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p04",
   "name": "賀若弼",
   "role": "隋將",
   "note": "濟江克京口",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 3
  },
  {
   "id": "SUI__p05",
   "name": "韓擒虎",
   "role": "隋將",
   "note": "夜渡采石",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "SUI__p06",
   "name": "陳叔寶",
   "role": "陳後主",
   "note": "被俘",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p07",
   "name": "任忠",
   "role": "陳驍將",
   "note": "降隋引路",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "SUI__p08",
   "name": "魯廣達",
   "role": "陳都督",
   "note": "拒戰賀若弼",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "SUI_001",
   "subject": "event:ev_sui_mie_chen_llm_01",
   "predicate": "兵力",
   "value_text": "隋兵五十一萬八千",
   "time": {
    "era_text": "開皇八年冬十月",
    "start": "588-10"
   },
   "place": "guangling",
   "source": "sui_shu_llm",
   "quote": "兵五十一萬八千",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.45,
   "scale": "empire",
   "note": "[auto] 补层 inference",
   "dims": [
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "兵五十一萬八千",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_002",
   "subject": "event:ev_sui_mie_chen_llm_02",
   "predicate": "渡江",
   "value_text": "賀若弼濟江，陳不覺",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "guangling",
   "source": "sui_shu_llm",
   "quote": "賀若弼自廣陵引兵濟江，陳人弗之覺",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "賀若弼自廣陵引兵濟江，陳人弗之覺",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_003",
   "subject": "event:ev_sui_mie_chen_llm_03",
   "predicate": "夜渡",
   "value_text": "韓擒虎夜渡采石，克姑孰",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "caishi",
   "source": "sui_shu_llm",
   "quote": "韓擒虎將五百人自采石夜濟",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "韓擒虎將五百人自采石夜濟",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_004",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "predicate": "陷都",
   "value_text": "任忠引隋軍入建康",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "任忠率降卒迎之，引擒虎自南掖門入建康",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "任忠率降卒迎之，引擒虎自南掖門入建康",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_005",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "predicate": "陳主被俘",
   "value_text": "陳叔寶投井被執",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "陳叔寶與張貴妃、孔貴嬪俱投於井",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "陳叔寶與張貴妃、孔貴嬪俱投於井",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_006",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "統一",
   "value_text": "隋平陳，南北一統",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiangnan",
   "source": "sui_shu_llm",
   "quote": "南北復歸一統",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "南北復歸一統",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_007",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "戶口",
   "value_text": "收陳戶口五十萬",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiangnan",
   "source": "sui_shu_llm",
   "quote": "戶口五十萬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "戶口五十萬",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_008",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "兵籍",
   "value_text": "收陳兵籍六十萬",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiangnan",
   "source": "sui_shu_llm",
   "quote": "兵籍六十萬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    2,
    3
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "兵籍六十萬",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_009",
   "subject": "person:SUI__p04",
   "predicate": "戰績",
   "value_text": "賀若弼鐘山之戰險敗",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "zhongshan",
   "source": "sui_shu_llm",
   "quote": "弼幾為所敗",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "弼幾為所敗",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_010",
   "subject": "person:SUI__p05",
   "predicate": "戰績",
   "value_text": "韓擒虎先入建康",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "韓擒虎自新林進攻",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "韓擒虎自新林進攻",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_011",
   "subject": "person:SUI__p04",
   "predicate": "爭功",
   "value_text": "賀若弼韓擒虎爭功",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "賀若弼、韓擒虎爭功於帝前",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "賀若弼、韓擒虎爭功於帝前",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_012",
   "subject": "person:SUI__p04",
   "predicate": "功賞",
   "value_text": "文帝兩賞之",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "文帝兩賞之",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "文帝兩賞之",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_013",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "制度延續",
   "value_text": "陳地舊制多仍其俗",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiangnan",
   "source": "sui_shu_llm",
   "quote": "陳地舊制多仍其俗",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "dims": [
    3,
    4
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "陳地舊制多仍其俗",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_014",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "文化影響",
   "value_text": "虞世基兄弟入隋為官",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "虞世基、虞世南兄弟入隋為官",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "虞世基、虞世南兄弟入隋為官",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_015",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "predicate": "陳軍抵抗",
   "value_text": "魯廣達拒戰賀若弼",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "zhongshan",
   "source": "sui_shu_llm",
   "quote": "陳都督魯廣達拒戰",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "陳都督魯廣達拒戰",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_016",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "predicate": "陳軍投降",
   "value_text": "任忠降隋引路",
   "time": {
    "era_text": "九年春正月",
    "start": "589-01"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "任忠率降卒迎之",
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
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "任忠率降卒迎之",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_017",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "歷史意義",
   "value_text": "結束二百七十餘年分裂",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiangnan",
   "source": "sui_shu_llm",
   "quote": "距永嘉之亂凡二百七十餘年",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "史家評論",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "距永嘉之亂凡二百七十餘年",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_018",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "predicate": "陳軍人數",
   "value_text": "陳軍實際兵力不詳",
   "time": {
    "era_text": "九年",
    "start": "589"
   },
   "place": "jiankang",
   "source": "sui_shu_llm",
   "quote": "兵籍六十萬",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "兵籍數與實際不符",
   "dims": [
    2,
    3
   ],
   "lead": {
    "where": "隋書·高祖紀",
    "skills": [
     "考據"
    ],
    "accept": "需核實陳軍實際"
   },
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "兵籍六十萬",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_019",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "predicate": "兵力考訂",
   "value_text": "隋出兵五十一萬八千見《隋書》；陳在籍兵六十萬含地方軍非皆野戰，實際野戰兵力無確載",
   "layer": "scholarship",
   "dims": [
    2,
    3
   ],
   "quote_status": "paraphrase_unverified",
   "source": "sui_shu_llm",
   "confidence": 0.8,
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "SUI_020",
   "subject": "party:陳方",
   "predicate": "史料立場",
   "value_text": "陳方獨立叙事缺位，《陳書》為唐姚思廉撰，陳亡後由勝方修史",
   "layer": "gap",
   "dims": [
    4,
    5,
    6
   ],
   "quote_status": "generated",
   "confidence": 0,
   "source": "sui_shu_llm",
   "lead": {
    "where": "《陳書》（唐姚思廉）＋陳代出土墓誌／磚誌＋南朝詩文（陳叔寶《玉樹後庭花》等）",
    "skills": [
     "隋陳史",
     "出土墓誌",
     "南朝文學"
    ],
    "accept": "陳方視角的墓誌或詩文考據，能與《隋書》形成隋方／陳方雙聲敘事"
   },
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "後世官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "SUI_018",
  "SUI_020"
 ],
 "events": [
  {
   "id": "ev_sui_mie_chen_llm_01",
   "subject": "event:ev_sui_mie_chen_llm_01",
   "year": 588,
   "era": "開皇八年冬十月",
   "title": "隋文帝下詔伐陳",
   "kind": "戰事",
   "text": "隋發兵五十一萬八千，八路攻陳",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_mie_chen_llm_02",
   "subject": "event:ev_sui_mie_chen_llm_02",
   "year": 589,
   "era": "開皇九年春正月",
   "title": "賀若弼濟江",
   "kind": "戰事",
   "text": "賀若弼自廣陵渡江，陳不覺",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_mie_chen_llm_03",
   "subject": "event:ev_sui_mie_chen_llm_03",
   "year": 589,
   "era": "開皇九年春正月",
   "title": "韓擒虎克姑孰",
   "kind": "戰事",
   "text": "韓擒虎夜渡采石，克姑孰",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_mie_chen_llm_04",
   "subject": "event:ev_sui_mie_chen_llm_04",
   "year": 589,
   "era": "開皇九年春正月",
   "title": "建康陷落",
   "kind": "戰事",
   "text": "任忠引隋軍入建康，陳亡",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_sui_mie_chen_llm_05",
   "subject": "event:ev_sui_mie_chen_llm_05",
   "year": 589,
   "era": "開皇九年",
   "title": "隋并陳",
   "kind": "行政",
   "text": "陳地悉平，南北一統",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "guangling",
   "to": "jiankang",
   "type": "military",
   "label": "賀若弼渡江路線",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "caishi",
   "to": "gushu",
   "type": "military",
   "label": "韓擒虎夜渡",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "gushu",
   "to": "xinlin",
   "type": "military",
   "label": "韓擒虎進軍",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "xinlin",
   "to": "jiankang",
   "type": "military",
   "label": "韓擒虎入建康",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "zhongshan",
   "to": "jiankang",
   "type": "battle",
   "label": "賀若弼進逼",
   "_source_idx": 0,
   "_source_name": "隋書·高祖紀下（附資治通鑑陳亡段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "guangling",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控guangling"
  },
  {
   "place_id": "caishi",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控caishi"
  },
  {
   "place_id": "gushu",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控gushu"
  },
  {
   "place_id": "zhongshan",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控zhongshan"
  },
  {
   "place_id": "xinlin",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控xinlin"
  },
  {
   "place_id": "jiankang",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控jiankang"
  },
  {
   "place_id": "jiangnan",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控jiangnan"
  },
  {
   "place_id": "lingnan",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控lingnan"
  },
  {
   "place_id": "shudi",
   "party": "隋方",
   "start": 589,
   "end": 605,
   "basis": "historical:隋滅陳後控shudi"
  }
 ],
 "control_seats": [
  {
   "place_id": "jiankang",
   "name": "建康",
   "lon": 118.78,
   "lat": 32.06,
   "region": "nan_bei_chao"
  }
 ],
 "control_years": [
  589,
  605
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
   "隋方",
   "陳方",
   "後世官修",
   "二手綜述"
  ],
  "party_bucket": {
   "隋方": "隋方",
   "陳方": "陳方",
   "後世官修": "後世官修",
   "二手綜述": "二手綜述"
  },
  "party_colors": {
   "隋方": "#2E86C1",
   "陳方": "#B23A48",
   "後世官修": "#6C7A89",
   "二手綜述": "#9B7B5A"
  },
  "factions": {
   "f_隋方": {
    "name": "隋方",
    "macro_party": "隋方",
    "note": "楊堅／楊廣／楊素／賀若弼／韓擒虎"
   },
   "f_陳方": {
    "name": "陳方",
    "macro_party": "陳方",
    "note": "陳叔寶／任忠／魯廣達；陳方独立叙事缺位（陳書為唐修）"
   },
   "f_後世官修": {
    "name": "後世官修",
    "macro_party": "後世官修",
    "note": "魏徵等《隋書》（唐）"
   },
   "f_二手綜述": {
    "name": "二手綜述",
    "macro_party": "二手綜述",
    "note": "《資治通鑑》《陳書》"
   }
  },
  "faction_colors": {
   "f_隋方": "#2E86C1",
   "f_陳方": "#B23A48",
   "f_後世官修": "#6C7A89",
   "f_二手綜述": "#9B7B5A"
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
        117.78,
        31.06
       ],
       [
        117.78,
        33.06
       ],
       [
        119.78,
        33.06
       ],
       [
        119.78,
        31.06
       ],
       [
        117.78,
        31.06
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
         118.235,
         33.06
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
         119.185,
         32.826
        ],
        [
         119.212,
         32.708
        ],
        [
         119.209,
         32.641
        ],
        [
         119.231,
         32.607
        ],
        [
         119.22,
         32.577
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
         31.985
        ],
        [
         118.364,
         31.93
        ],
        [
         118.472,
         31.88
        ],
        [
         118.467,
         31.858
        ],
        [
         118.505,
         31.842
        ],
        [
         118.482,
         31.778
        ],
        [
         118.534,
         31.767
        ],
        [
         118.522,
         31.743
        ],
        [
         118.558,
         31.73
        ],
        [
         118.572,
         31.746
        ],
        [
         118.641,
         31.759
        ],
        [
         118.654,
         31.73
        ],
        [
         118.698,
         31.71
        ],
        [
         118.643,
         31.672
        ],
        [
         118.643,
         31.65
        ],
        [
         118.736,
         31.633
        ],
        [
         118.748,
         31.676
        ],
        [
         118.774,
         31.683
        ],
        [
         118.803,
         31.619
        ],
        [
         118.859,
         31.624
        ],
        [
         118.882,
         31.564
        ],
        [
         118.886,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.852,
         31.394
        ],
        [
         118.824,
         31.376
        ],
        [
         118.768,
         31.364
        ],
        [
         118.746,
         31.373
        ],
        [
         118.721,
         31.323
        ],
        [
         118.726,
         31.282
        ],
        [
         118.757,
         31.28
        ],
        [
         118.795,
         31.229
        ],
        [
         118.871,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         119.015,
         31.242
        ],
        [
         119.105,
         31.235
        ],
        [
         119.107,
         31.251
        ],
        [
         119.158,
         31.295
        ],
        [
         119.198,
         31.295
        ],
        [
         119.198,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.78,
         31.178
        ],
        [
         119.78,
         33.06
        ],
        [
         118.235,
         33.06
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
         119.78,
         31.06
        ],
        [
         119.78,
         31.178
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.631,
         31.06
        ],
        [
         119.78,
         31.06
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.78,
         33.06
        ],
        [
         117.78,
         31.06
        ],
        [
         119.631,
         31.06
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.198,
         31.27
        ],
        [
         119.198,
         31.295
        ],
        [
         119.158,
         31.295
        ],
        [
         119.107,
         31.251
        ],
        [
         119.105,
         31.235
        ],
        [
         119.015,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         118.871,
         31.242
        ],
        [
         118.795,
         31.229
        ],
        [
         118.757,
         31.28
        ],
        [
         118.726,
         31.282
        ],
        [
         118.721,
         31.323
        ],
        [
         118.746,
         31.373
        ],
        [
         118.768,
         31.364
        ],
        [
         118.824,
         31.376
        ],
        [
         118.852,
         31.394
        ],
        [
         118.884,
         31.5
        ],
        [
         118.857,
         31.506
        ],
        [
         118.866,
         31.519
        ],
        [
         118.886,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.859,
         31.624
        ],
        [
         118.803,
         31.619
        ],
        [
         118.774,
         31.683
        ],
        [
         118.748,
         31.676
        ],
        [
         118.736,
         31.633
        ],
        [
         118.643,
         31.65
        ],
        [
         118.643,
         31.672
        ],
        [
         118.698,
         31.71
        ],
        [
         118.654,
         31.73
        ],
        [
         118.641,
         31.759
        ],
        [
         118.572,
         31.746
        ],
        [
         118.558,
         31.73
        ],
        [
         118.522,
         31.743
        ],
        [
         118.534,
         31.767
        ],
        [
         118.482,
         31.778
        ],
        [
         118.505,
         31.842
        ],
        [
         118.467,
         31.858
        ],
        [
         118.472,
         31.88
        ],
        [
         118.364,
         31.93
        ],
        [
         118.39,
         31.985
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
         119.22,
         32.577
        ],
        [
         119.231,
         32.607
        ],
        [
         119.209,
         32.641
        ],
        [
         119.212,
         32.708
        ],
        [
         119.185,
         32.826
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
         118.235,
         33.06
        ],
        [
         117.78,
         33.06
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.857,
         31.506
        ],
        [
         118.884,
         31.5
        ],
        [
         118.886,
         31.519
        ],
        [
         118.866,
         31.519
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.787,
        31.06
       ],
       [
        117.844,
        31.124
       ],
       [
        117.916,
        31.104
       ],
       [
        117.968,
        31.13
       ],
       [
        117.999,
        31.202
       ],
       [
        118.089,
        31.255
       ],
       [
        118.24,
        31.29
       ],
       [
        118.312,
        31.341
       ],
       [
        118.305,
        31.406
       ],
       [
        118.333,
        31.51
       ],
       [
        118.395,
        31.653
       ],
       [
        118.515,
        31.841
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
        119.324,
        32.227
       ],
       [
        119.53,
        32.229
       ],
       [
        119.643,
        32.235
       ],
       [
        119.771,
        32.207
       ],
       [
        119.78,
        32.197
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
        118.531,
        33.06
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
        118.227,
        33.06
       ],
       [
        117.882,
        33.06
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
        117.845,
        33.06
       ],
       [
        118.267,
        33.06
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
        118.434,
        33.06
       ],
       [
        118.531,
        33.06
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
        119.407,
        32.794
       ],
       [
        119.392,
        32.751
       ],
       [
        119.35,
        32.749
       ],
       [
        119.3,
        32.748
       ],
       [
        119.253,
        32.736
       ],
       [
        119.201,
        32.691
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
        119.188,
        32.878
       ],
       [
        119.229,
        32.882
       ],
       [
        119.242,
        32.896
       ],
       [
        119.241,
        32.919
       ],
       [
        119.253,
        32.943
       ],
       [
        119.251,
        32.978
       ],
       [
        119.245,
        33.013
       ],
       [
        119.264,
        33.034
       ],
       [
        119.296,
        33.041
       ],
       [
        119.314,
        33.054
       ],
       [
        119.312,
        33.06
       ],
       [
        119.147,
        33.06
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
        118.904,
        33.06
       ],
       [
        119.043,
        33.06
       ],
       [
        119.059,
        33.058
       ],
       [
        119.067,
        33.06
       ],
       [
        119.348,
        33.06
       ],
       [
        119.346,
        33.024
       ],
       [
        119.372,
        33.0
       ],
       [
        119.397,
        32.916
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
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
        118.78,
        31.409
       ],
       [
        118.768,
        31.419
       ],
       [
        118.747,
        31.459
       ],
       [
        118.743,
        31.492
       ],
       [
        118.724,
        31.522
       ],
       [
        118.723,
        31.542
       ],
       [
        118.758,
        31.545
       ],
       [
        118.867,
        31.546
       ],
       [
        118.941,
        31.554
       ],
       [
        118.964,
        31.503
       ],
       [
        118.96,
        31.465
       ],
       [
        118.915,
        31.435
       ],
       [
        118.85,
        31.393
       ],
       [
        118.815,
        31.402
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.941,
        31.521
       ],
       [
        117.912,
        31.522
       ],
       [
        117.83,
        31.57
       ],
       [
        117.784,
        31.579
       ],
       [
        117.78,
        31.576
       ],
       [
        117.78,
        31.636
       ],
       [
        117.81,
        31.621
       ],
       [
        117.919,
        31.551
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ]
      ]
     ]
    },
    "n": "Chao Hu"
   }
  ],
  "_bbox": [
   117.78,
   31.06,
   119.78,
   33.06
  ]
 }
};
