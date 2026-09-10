// 本文件由 tools/build.py 自动生成（切片 chuhai_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chuhai_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chuhai_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "qin_han",
  "title": "楚漢之爭·垓下之戰",
  "dossier_label": "chuhai_llm",
  "subtitle": "秦二世元年至漢五年（前207-前202）",
  "primary_place": "gaixia",
  "dossier_event": "event:ev_chuhai_llm_04",
  "vocab_pack": "chuhai_llm",
  "terrain_grid": "china_coarse",
  "lead": "楚漢相爭的收官戰役。垓下會戰，劉邦合韓信彭越等諸侯軍圍項羽；項王夜起悲歌「力拔山兮」，八百餘騎潰逃至烏江自刎，楚亡漢興。",
  "parties_note": "漢方(劉邦) vs 楚方(項羽)。史料以《史記·項羽本紀》為主(後世官修·西漢)；楚方獨立文獻《楚漢春秋》(陸賈)已佚(CHU_017 gap)。",
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "qin_han",
  "scale_tier": "strategic",
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
    "note": "制度+思想→楚方內部凝聚力（項羽分封裂楚、齊梁叛變、諸侯各懷；張良勸封策略瓦解楚聯盟）"
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
    "note": "技術↔生產力；漢軍以關中+巴蜀後勤，持續遠征楚地；楚方補給線拉長"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口動員；劉邦約40-60萬垓下合圍（含齊梁九江諸侯軍，CHU_016 考據），項羽800餘騎潰逃"
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
    "note": "地形/關隘/外交→戰略重心（關中-楚地東西對峙，滎陽拉鋸、垓下收官）"
   }
  },
  "subject_names": {
   "event:ev_chuhai_llm_01": "鴻門宴",
   "event:ev_chuhai_llm_02": "分封諸侯",
   "event:ev_chuhai_llm_03": "滎陽之圍",
   "event:ev_chuhai_llm_04": "垓下之戰",
   "event:ev_chuhai_llm_05": "烏江自刎",
   "place:hongmen": "鴻門",
   "place:bashang": "霸上",
   "place:pengcheng": "彭城",
   "place:hanzhong": "漢中",
   "place:xingyang": "滎陽",
   "place:gailing": "固陵",
   "place:gaixia": "垓下",
   "place:wujiang": "烏江",
   "place:chencang": "陳倉",
   "place:sangu": "三秦",
   "person:CHU__p01": "項羽",
   "person:CHU__p02": "劉邦",
   "person:CHU__p03": "韓信",
   "person:CHU__p04": "張良",
   "person:CHU__p05": "彭越",
   "person:CHU__p06": "虞姬",
   "person:CHU__p07": "項伯",
   "person:CHU__p08": "樊噲"
  },
  "province": "anhui",
  "page": "chuhai_llm.html",
  "key": "chuhai_llm",
  "scene_id": "chuhai_llm"
 },
 "sources": [
  {
   "id": "shiji_chuhai_llm",
   "title": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "party": "後世官修",
   "stance_label": "",
   "distance_label": "",
   "color": "#8C6239",
   "compiler": "司馬遷",
   "period": "西漢",
   "note": ""
  }
 ],
 "places": [
  {
   "id": "hongmen",
   "name": "鴻門",
   "type": "fortress",
   "modern": "今中國陝西臨潼",
   "note": "項羽駐軍地，鴻門宴發生處",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "bashang",
   "name": "霸上",
   "type": "region",
   "modern": "今中國陝西西安東",
   "note": "劉邦駐軍地",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "pengcheng",
   "name": "彭城",
   "type": "city",
   "modern": "今中國江蘇徐州",
   "note": "西楚霸王都城",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "hanzhong",
   "name": "漢中",
   "type": "region",
   "modern": "今中國陝西漢中",
   "note": "劉邦就國之地",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "xingyang",
   "name": "滎陽",
   "type": "city",
   "modern": "今中國河南滎陽",
   "note": "楚漢相持之地",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "gailing",
   "name": "固陵",
   "type": "city",
   "modern": "今中國河南淮陽",
   "note": "漢王追項王至固陵",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "gaixia",
   "name": "垓下",
   "type": "region",
   "modern": "今中國安徽靈璧",
   "note": "項羽被圍之地。坐标据地名志条目（别名 垓下→灵璧），标 approx。",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": 117.56,
   "lat": 33.53,
   "geo_match": "approx",
   "geo_note": "坐标据地名志条目（别名 垓下→灵璧）（诚实回填 v0.221）。",
   "elev": 19
  },
  {
   "id": "wujiang",
   "name": "烏江",
   "type": "port",
   "modern": "今中國安徽和縣",
   "note": "項羽自刎處",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "chencang",
   "name": "陳倉",
   "type": "city",
   "modern": "今中國陝西寶雞",
   "note": "韓信暗度之地",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  },
  {
   "id": "sangu",
   "name": "三秦",
   "type": "region",
   "modern": "今中國陝西關中",
   "note": "項羽分封秦地三王",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "lon": null,
   "lat": null,
   "geo_unresolved": true
  }
 ],
 "persons": [
  {
   "id": "CHU__p01",
   "name": "項羽",
   "role": "西楚霸王",
   "note": "楚漢之爭核心人物，垓下兵敗自刎",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHU__p02",
   "name": "劉邦",
   "role": "漢王",
   "note": "漢朝開國皇帝，與項羽爭天下",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHU__p03",
   "name": "韓信",
   "role": "齊王",
   "note": "漢軍大將，垓下之戰關鍵人物",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "CHU__p04",
   "name": "張良",
   "role": "漢謀士",
   "note": "勸劉邦封韓信彭越以破楚",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHU__p05",
   "name": "彭越",
   "role": "梁王",
   "note": "漢軍將領，受封後出兵助戰",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHU__p06",
   "name": "虞姬",
   "role": "項羽愛姬",
   "note": "垓下之圍中與項羽悲歌和之",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  },
  {
   "id": "CHU__p07",
   "name": "項伯",
   "role": "楚左尹",
   "note": "鴻門宴中翼蔽沛公劉邦",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 1
  },
  {
   "id": "CHU__p08",
   "name": "樊噲",
   "role": "漢將",
   "note": "鴻門宴中闖帳護主",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "CHU_001",
   "subject": "event:ev_chuhai_llm_01",
   "predicate": "事件性質",
   "value_text": "鴻門宴為項羽欲殺劉邦未遂",
   "time": {
    "era_text": "漢元年",
    "start": "-206"
   },
   "place": "hongmen",
   "source": "shiji_chuhai_llm",
   "quote": "項莊舞劍，意在沛公",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "province",
   "note": "",
   "dims": [
    4,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "項莊舞劍，意在沛公",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_002",
   "subject": "person:CHU__p07",
   "predicate": "保護行為",
   "value_text": "項伯翼蔽沛公使其脫險",
   "time": {
    "era_text": "漢元年",
    "start": "-206"
   },
   "place": "hongmen",
   "source": "shiji_chuhai_llm",
   "quote": "會項伯與張良有舊，翼蔽沛公",
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
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "會項伯與張良有舊，翼蔽沛公",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_003",
   "subject": "event:ev_chuhai_llm_02",
   "predicate": "分封結果",
   "value_text": "項羽自立西楚霸王都彭城",
   "time": {
    "era_text": "漢元年",
    "start": "-206"
   },
   "place": "pengcheng",
   "source": "shiji_chuhai_llm",
   "quote": "自立為西楚霸王，據九郡，都彭城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "自立為西楚霸王，據九郡，都彭城",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_004",
   "subject": "person:CHU__p03",
   "predicate": "任命",
   "value_text": "蕭何薦韓信為漢大將",
   "time": {
    "era_text": "漢元年",
    "start": "-206"
   },
   "place": "hanzhong",
   "source": "shiji_chuhai_llm",
   "quote": "蕭何薦韓信為大將",
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
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "蕭何薦韓信為大將",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_005",
   "subject": "event:ev_chuhai_llm_03",
   "predicate": "圍城結果",
   "value_text": "紀信誑楚使漢王脫困",
   "time": {
    "era_text": "漢二年",
    "start": "-205"
   },
   "place": "xingyang",
   "source": "shiji_chuhai_llm",
   "quote": "紀信誑楚，漢王得脫",
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
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "紀信誑楚，漢王得脫",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_006",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "兵力對比",
   "value_text": "漢軍圍項羽於垓下",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "漢軍圍項王垓下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    1,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "漢軍圍項王垓下",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_007",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "項羽悲歌",
   "value_text": "項羽夜飲慷慨悲歌",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "力拔山兮氣蓋世，時不利兮騅不逝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "力拔山兮氣蓋世，時不利兮騅不逝",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_008",
   "subject": "event:ev_chuhai_llm_05",
   "predicate": "項羽結局",
   "value_text": "項羽烏江自刎而死",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "wujiang",
   "source": "shiji_chuhai_llm",
   "quote": "天之亡我，非戰之罪",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.95,
   "scale": "theater",
   "note": "",
   "dims": [
    3,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "天之亡我，非戰之罪",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_009",
   "subject": "event:ev_chuhai_llm_05",
   "predicate": "渡江拒絕",
   "value_text": "項羽笑拒亭長渡江之請",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "wujiang",
   "source": "shiji_chuhai_llm",
   "quote": "亭長舣船待，項王笑曰",
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
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "亭長舣船待，項王笑曰",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_010",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "戰略決策",
   "value_text": "張良勸封韓信彭越以分楚",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gailing",
   "source": "shiji_chuhai_llm",
   "quote": "張良勸漢王封齊王信、更封彭越",
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
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "張良勸漢王封齊王信、更封彭越",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_011",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "兵力對比",
   "value_text": "項羽潰敗時僅八百餘騎",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "騎從者八百餘人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "",
   "dims": [
    4,
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "騎從者八百餘人",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_012",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "戰略決策",
   "value_text": "韓信彭越初不赴固陵之約",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gailing",
   "source": "shiji_chuhai_llm",
   "quote": "韓信、彭越不至",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "theater",
   "note": "",
   "dims": [
    5,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "韓信、彭越不至",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_013",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "戰略決策",
   "value_text": "韓信彭越受封後方出兵",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "楚遂分",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "theater",
   "note": "推斷受封後出兵",
   "dims": [
    3,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "楚遂分",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_014",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "兵力對比",
   "value_text": "漢軍兵力遠超楚軍",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "漢軍圍項王垓下",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "theater",
   "note": "史記未載具體兵力",
   "dims": [
    1,
    2,
    6
   ],
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "漢軍圍項王垓下",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_015",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "虞姬結局",
   "value_text": "虞姬和項羽歌後下落不明",
   "time": {
    "era_text": "漢五年",
    "start": "-202"
   },
   "place": "gaixia",
   "source": "shiji_chuhai_llm",
   "quote": "虞姬和之",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "史記未載虞姬結局",
   "dims": [
    5,
    6
   ],
   "lead": {
    "where": "gaixia",
    "skills": [
     "文獻考據",
     "考古發掘"
    ],
    "accept": "虞姬後續事蹟待考"
   },
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "_source_quote": "虞姬和之",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_016",
   "text": "垓下之戰漢軍合圍兵力，司馬遷未明載；學界據《史記·高祖本紀》「韓信、彭越、劉賈、黥布皆會」推估約40-60萬，含齊、梁、九江等諸侯軍。",
   "value_text": "垓下漢軍約四十萬至六十萬，含齊梁九江諸侯軍。",
   "subject": "event:ev_chuhai_llm_04",
   "source": "shiji_chuhai_llm",
   "layer": "scholarship",
   "confidence": 0.6,
   "dims": [
    1,
    2,
    6
   ],
   "quote_status": "paraphrase_unverified",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "predicate": "兵力對比",
   "dim_source": "declared",
   "_party": "後世官修",
   "_faction": null
  },
  {
   "id": "CHU_017",
   "text": "楚方獨立叙事缺位。司馬遷《項羽本紀》以悲劇英雄筆法敘楚方，仍歸漢方勝者為正統；楚方獨立文獻《楚漢春秋》（陸賈）已佚，僅存類書徵引。本場景以漢方視角為主，楚方立場靠後世戲曲/評書/考古補。",
   "value_text": "楚方獨立文獻《楚漢春秋》已佚，楚方立場靠後世戲曲/評書/考古補。",
   "subject": "place:gaixia",
   "source": "shiji_chuhai_llm",
   "layer": "gap",
   "confidence": 0.0,
   "dims": [
    4,
    5,
    6
   ],
   "quote_status": "generated",
   "lead": {
    "where": "楚方故地考古（馬王堆漢墓帛書、銀雀山漢簡、睡虎地秦簡等）+《楚漢春秋》（陸賈）佚文輯本",
    "skills": [
     "秦漢史",
     "出土文獻",
     "古文字（楚簡/帛書）"
    ],
    "accept": "楚方獨立視角的出土文獻或佚文考據成果，能與《史記·項羽本紀》形成楚方/漢方雙聲敘事"
   },
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null,
   "predicate": "史料立場",
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "後世官修",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:ev_chuhai_llm_04|兵力對比",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "兵力對比",
   "kind": "record_vs_scholarship",
   "count": 4,
   "spread": null,
   "assertion_ids": [
    "CHU_006",
    "CHU_011",
    "CHU_014",
    "CHU_016"
   ]
  },
  {
   "id": "cf:event:ev_chuhai_llm_04|戰略決策",
   "subject": "event:ev_chuhai_llm_04",
   "predicate": "戰略決策",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "CHU_010",
    "CHU_012",
    "CHU_013"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "CHU_015",
  "CHU_017"
 ],
 "events": [
  {
   "id": "ev_chuhai_llm_01",
   "subject": "event:ev_chuhai_llm_01",
   "year": -206,
   "era": "漢元年",
   "title": "鴻門宴",
   "kind": "外交",
   "text": "項羽欲擊劉邦，項伯翼蔽得脫",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chuhai_llm_02",
   "subject": "event:ev_chuhai_llm_02",
   "year": -206,
   "era": "漢元年",
   "title": "分封諸侯",
   "kind": "行政",
   "text": "項羽自立西楚霸王，都彭城",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chuhai_llm_03",
   "subject": "event:ev_chuhai_llm_03",
   "year": -205,
   "era": "漢二年",
   "title": "滎陽之圍",
   "kind": "戰事",
   "text": "項羽圍劉邦於滎陽，紀信誑楚",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chuhai_llm_04",
   "subject": "event:ev_chuhai_llm_04",
   "year": -202,
   "era": "漢五年",
   "title": "垓下之戰",
   "kind": "戰事",
   "text": "漢軍圍項羽於垓下，楚軍潰敗",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "id": "ev_chuhai_llm_05",
   "subject": "event:ev_chuhai_llm_05",
   "year": -202,
   "era": "漢五年",
   "title": "烏江自刎",
   "kind": "戰事",
   "text": "項羽至烏江，笑拒渡江自刎",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  }
 ],
 "edges": [
  {
   "from": "hongmen",
   "to": "bashang",
   "type": "battle",
   "label": "鴻門宴對峙",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "pengcheng",
   "to": "xingyang",
   "type": "military",
   "label": "項羽圍滎陽",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "hanzhong",
   "to": "chencang",
   "type": "military",
   "label": "暗度陳倉",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "gailing",
   "to": "gaixia",
   "type": "military",
   "label": "漢軍追擊",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  },
  {
   "from": "gaixia",
   "to": "wujiang",
   "type": "military",
   "label": "項羽突圍",
   "_source_idx": 0,
   "_source_name": "史記·項羽本紀（附高祖本紀楚漢段落）",
   "_source_party": "後世官修",
   "_source_credibility": null
  }
 ],
 "control": [
  {
   "place_id": "gaixia",
   "party": "漢方",
   "start": -202,
   "end": -195,
   "basis": "historical:垓下戰後漢方控"
  },
  {
   "place_id": "wujiang",
   "party": "漢方",
   "start": -202,
   "end": -195,
   "basis": "historical:烏江歸漢"
  },
  {
   "place_id": "pengcheng",
   "party": "漢方",
   "start": -202,
   "end": -195,
   "basis": "historical:漢定楚地"
  },
  {
   "place_id": "gailing",
   "party": "漢方",
   "start": -202,
   "end": -195,
   "basis": "historical:固陵漢軍控"
  },
  {
   "place_id": "xingyang",
   "party": "漢方",
   "start": -205,
   "end": -195,
   "basis": "historical:滎陽長期漢控"
  },
  {
   "place_id": "hongmen",
   "party": "漢方",
   "start": -206,
   "end": -195,
   "basis": "historical:關中漢方"
  },
  {
   "place_id": "bashang",
   "party": "漢方",
   "start": -206,
   "end": -195,
   "basis": "historical:關中漢方"
  },
  {
   "place_id": "hanzhong",
   "party": "漢方",
   "start": -206,
   "end": -195,
   "basis": "historical:劉邦就國漢中"
  },
  {
   "place_id": "chencang",
   "party": "漢方",
   "start": -206,
   "end": -195,
   "basis": "historical:漢定三秦（明修棧道暗度陳倉）"
  },
  {
   "place_id": "sangu",
   "party": "漢方",
   "start": -206,
   "end": -195,
   "basis": "historical:關中漢方"
  }
 ],
 "control_seats": [
  {
   "place_id": "gaixia",
   "name": "垓下",
   "lon": 117.56,
   "lat": 33.53,
   "region": "qin_han"
  }
 ],
 "control_years": [
  -206,
  -195
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
   "漢方",
   "楚方",
   "後世官修",
   "二手綜述"
  ],
  "party_bucket": {
   "漢方": "漢方",
   "楚方": "楚方",
   "後世官修": "後世官修",
   "二手綜述": "二手綜述"
  },
  "party_colors": {
   "漢方": "#2E86C1",
   "楚方": "#B23A48",
   "後世官修": "#6C7A89",
   "二手綜述": "#9B7B5A"
  },
  "factions": {
   "f_漢方": {
    "name": "漢方",
    "macro_party": "漢方",
    "note": "劉邦/韓信/張良/蕭何"
   },
   "f_楚方": {
    "name": "楚方",
    "macro_party": "楚方",
    "note": "項羽/項伯/范增；楚方叙事缺位(《楚漢春秋》已佚)"
   },
   "f_後世官修": {
    "name": "後世官修",
    "macro_party": "後世官修",
    "note": "司馬遷《史記》(西漢)"
   },
   "f_二手綜述": {
    "name": "二手綜述",
    "macro_party": "二手綜述",
    "note": "《漢書》《資治通鑑》"
   }
  },
  "faction_colors": {
   "f_漢方": "#2E86C1",
   "f_楚方": "#B23A48",
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
        116.56,
        32.53
       ],
       [
        116.56,
        34.53
       ],
       [
        118.56,
        34.53
       ],
       [
        118.56,
        32.53
       ],
       [
        116.56,
        32.53
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
         117.268,
         34.53
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
         117.14,
         34.53
        ],
        [
         116.564,
         34.53
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
         118.56,
         32.53
        ],
        [
         118.56,
         32.53
        ],
        [
         118.56,
         34.53
        ],
        [
         118.436,
         34.53
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
         118.178,
         34.53
        ],
        [
         117.8,
         34.53
        ],
        [
         117.802,
         34.519
        ],
        [
         117.756,
         34.53
        ],
        [
         117.675,
         34.53
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
         117.422,
         34.53
        ],
        [
         117.268,
         34.53
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
         116.56,
         33.886
        ],
        [
         116.56,
         32.53
        ],
        [
         118.56,
         32.53
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
         116.564,
         34.53
        ],
        [
         116.56,
         34.53
        ],
        [
         116.56,
         34.286
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
         116.56,
         34.251
        ],
        [
         116.56,
         34.178
        ],
        [
         116.566,
         34.169
        ],
        [
         116.56,
         34.166
        ],
        [
         116.56,
         34.087
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
         117.14,
         34.53
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
         34.53
        ],
        [
         117.422,
         34.53
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
         117.675,
         34.53
        ],
        [
         117.756,
         34.53
        ],
        [
         117.802,
         34.519
        ],
        [
         117.8,
         34.53
        ],
        [
         118.178,
         34.53
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
         118.436,
         34.53
        ],
        [
         117.14,
         34.53
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
         116.56,
         33.886
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
         116.56,
         34.087
        ],
        [
         116.56,
         34.166
        ],
        [
         116.566,
         34.169
        ],
        [
         116.56,
         34.178
        ],
        [
         116.56,
         34.251
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
         116.56,
         34.286
        ],
        [
         116.56,
         33.886
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.56,
        33.115
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
        118.56,
        33.376
       ],
       [
        118.56,
        33.424
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
        118.56,
        33.63
       ],
       [
        118.56,
        33.115
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
        117.277,
        34.53
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
        117.184,
        34.53
       ],
       [
        117.277,
        34.53
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   }
  ],
  "_bbox": [
   116.56,
   32.53,
   118.56,
   34.53
  ]
 }
};
