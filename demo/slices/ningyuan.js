// 本文件由 tools/build.py 自动生成（切片 ningyuan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["ningyuan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["ningyuan"] = {
 "meta": {
  "kind": "county",
  "region": "liaoxi",
  "title": "宁远",
  "dossier_label": "宁远",
  "subtitle": "关宁锦防线核心 · 宁远之战 (1626) · 袁崇焕",
  "primary_place": "ningyuan",
  "dossier_event": "event:ningyuan_battle",
  "back": "枢纽",
  "lead": "宁远是关宁锦防线核心：宣德三年 (1428) 置宁远卫。1626 宁远之战努尔哈赤受创而死，1627 宁锦大捷，1644 吴三桂弃宁远引清入关。明清对峙二十年的枢纽在此。",
  "parties_note": "宁远之战努尔哈赤死因、袁崇焕「五年平辽」部署，明、清、现代三方侧重不同（明方记「炮毙虏首」，清方讳言死因）。系统不裁决，只并列。",
  "subject_names": {
   "event:ningyuan_founded": "宁远卫建置",
   "event:ningyuan_battle": "宁远之战",
   "event:ningjin_dajie": "宁锦大捷",
   "event:ningyuan_wusangui": "吴三桂引清入关",
   "place:ningyuan": "宁远城",
   "person:yuan_chonghuan": "袁崇焕",
   "person:zu_dashou": "祖大寿",
   "person:huangtaiji": "皇太极",
   "person:nuerhaci": "努尔哈赤",
   "person:wu_sangui": "吴三桂",
   "person:zhao_shuaijiao": "赵率教"
  },
  "terrain_grid": "china_coarse",
  "dims": [
   1,
   2,
   3,
   4,
   6
  ],
  "epoch": "ming_qing",
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
    "note": "宁远：朝堂凝聚力——万二千"
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
    "note": "宁远：后勤物力——万二千"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "宁远：人口动员（详见场景史料）"
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
    "note": "宁远：地缘战略——守宁远"
   }
  },
  "province": "liaoning",
  "page": "county.html?scene=ningyuan",
  "key": "ningyuan",
  "scene_id": "ningyuan",
  "vocab_pack": "ming_qing"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "party": "清修·明臣",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清修"
  },
  {
   "id": "ming_xizong_shilu",
   "title": "明熹宗实录",
   "party": "明廷官方",
   "stance_label": "本朝官修·当代",
   "distance_label": "明当代官修，距天启事约数年",
   "color": "#A0473A",
   "compiler": "明史馆",
   "period": "天启朝"
  },
  {
   "id": "modern",
   "title": "现代史学综述",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "多家学术著作",
   "period": "现代"
  },
  {
   "id": "qing_taizong_shilu",
   "title": "清太宗实录",
   "party": "清修官史",
   "stance_label": "敌方官修",
   "distance_label": "初纂 1644 后屡经改窜，距皇太极事数年",
   "color": "#7B5C3E",
   "compiler": "清实录馆",
   "period": "天聪/崇德"
  },
  {
   "id": "chongzhen_shilu",
   "title": "明崇祯实录",
   "party": "明廷官方",
   "stance_label": "本朝官修·当代",
   "distance_label": "成书约 1645，距崇祯事约数年",
   "color": "#A0473A",
   "compiler": "明史馆",
   "period": "崇祯朝"
  }
 ],
 "places": [
  {
   "id": "ningyuan",
   "name": "宁远城",
   "lon": 120.7,
   "lat": 40.62,
   "type": "city",
   "modern": "辽宁兴城市",
   "note": "明宁远卫，关宁锦防线核心",
   "elev": 14
  },
  {
   "id": "juehua",
   "name": "觉华岛",
   "lon": 120.55,
   "lat": 40.48,
   "type": "island",
   "modern": "辽宁兴城菊花岛",
   "note": "明辽东囤粮岛，宁远之战被焚",
   "elev": 24
  },
  {
   "id": "jinzhou_cheng",
   "name": "锦州",
   "lon": 121.13,
   "lat": 41.1,
   "type": "city",
   "modern": "辽宁锦州市",
   "note": "宁远北向卫城",
   "elev": 51
  },
  {
   "id": "shanhaiguan",
   "name": "山海关",
   "lon": 119.75,
   "lat": 40.0,
   "type": "guan",
   "modern": "河北秦皇岛",
   "note": "宁远南向，走廊终端",
   "_global_id": "shanhaiguan",
   "_other_scenes": [
    "guangning",
    "jinzhou"
   ],
   "elev": 11
  }
 ],
 "persons": [
  {
   "id": "yuan_chonghuan",
   "name": "袁崇焕",
   "role": "蓟辽督师",
   "note": "宁远/宁锦拒清，后冤死；「五年平辽」",
   "influence": 17
  },
  {
   "id": "zu_dashou",
   "name": "祖大寿",
   "role": "宁远副总兵",
   "note": "袁崇焕部下，后两度降清",
   "influence": 0,
   "_global_id": "zu_dashou",
   "_other_scenes": [
    "jinzhou"
   ]
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "role": "清太宗",
   "note": "1627 宁锦、1629 己巳入塞",
   "influence": 0,
   "_global_id": "huangtaiji",
   "_other_scenes": [
    "jinzhou",
    "liaoyang",
    "sarhu",
    "shenyang"
   ]
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1626 攻宁远受伤，七月死",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "guangning",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang"
   ]
  },
  {
   "id": "wu_sangui",
   "name": "吴三桂",
   "role": "宁远总兵",
   "note": "崇祯末镇宁远，1644 引清兵入关",
   "influence": 0
  },
  {
   "id": "zhao_shuaijiao",
   "name": "赵率教",
   "role": "明总兵",
   "note": "宁锦之战守锦州，战死",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "N001",
   "subject": "event:ningyuan_founded",
   "predicate": "建置年",
   "value_text": "宣德三年 (1428) 始置宁远卫, 隶辽东都司",
   "source": "mingshi",
   "layer": "record",
   "era": "宣德三年",
   "place": "ningyuan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "宣德三年, 置宁远卫。",
   "note": "宁远为辽西最南大城, 关宁锦防线核心。",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "N002",
   "subject": "event:ningyuan_battle",
   "predicate": "宁远之战结果",
   "value_text": "天命十一年 (1626), 努尔哈赤攻宁远, 袁崇焕凭坚城与红夷大炮拒守, 努尔哈赤受创, 七月死",
   "source": "qing_taizong_shilu",
   "layer": "record",
   "era": "天命十一年",
   "place": "ningyuan",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "上攻宁远, 袁崇焕凭城固守, 炮伤甚, 七月崩。",
   "note": "明方记「炮毙虏首」, 清方讳言死因, 立场派生分歧明显。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "N003",
   "subject": "event:ningjin_dajie",
   "predicate": "宁锦大捷",
   "value_text": "天启七年 (1627), 皇太极攻宁远、锦州不利, 明军凭城固守获胜, 清退",
   "source": "ming_xizong_shilu",
   "layer": "record",
   "era": "天启七年",
   "place": "ningyuan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "天启七年, 清攻宁远、锦州, 袁崇焕御之, 清兵退。",
   "note": "宁锦之捷是袁崇焕督师期间对清的第二次大胜。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "N004",
   "subject": "event:ningyuan_wusangui",
   "predicate": "吴三桂引清入关",
   "value_text": "崇祯十七年 (1644), 李自成破北京, 吴三桂弃宁远入关, 引清兵入关击李自成",
   "source": "chongzhen_shilu",
   "layer": "record",
   "era": "崇祯十七年",
   "place": "ningyuan",
   "confidence": 0.92,
   "quote_status": "paraphrase_unverified",
   "quote": "崇祯十七年, 李自成陷北京, 吴三桂弃宁远, 引清兵入关。",
   "note": "关宁锦防线至此终结, 清兵由此入主中原。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "N005",
   "subject": "place:ningyuan",
   "predicate": "战略地位",
   "value_text": "学界主流：宁远是明清对峙二十年的枢纽, 关宁锦防线核心, 袁崇焕据此牵制后金南下",
   "source": "modern",
   "layer": "scholarship",
   "era": "1626–1644",
   "place": "ningyuan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "宁远一城, 牵制后金者二十年。",
   "note": "亦有观点认为明长期被动据城, 丧失野战主动权, 防线本质是消耗。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "N010",
   "subject": "event:ningyuan_battle",
   "predicate": "努尔哈赤死因",
   "value_text": "努尔哈赤是否确因宁远之伤致死, 医学与史料记载有分歧（有说疮发 / 有说背疽 / 有说忧愤）",
   "source": "mingshi",
   "layer": "gap",
   "era": "天命十一年",
   "place": "ningyuan",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明史·太祖本纪》/ 《清太祖实录》天命十一年 / 朝鲜《李朝实录》/ 现代医学史考证",
    "skills": [
     "古文",
     "医学史"
    ],
    "accept": "梳理努尔哈赤死因的各家说法与史料依据, 给出最可能结论及存疑点",
    "effort": "2-3 周"
   },
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "N011",
   "subject": "person:yuan_chonghuan",
   "predicate": "五年平辽部署",
   "value_text": "袁崇焕「五年平辽」的实际军事部署与朝中掣肘, 三方史料侧重不同",
   "source": "ming_xizong_shilu",
   "layer": "gap",
   "era": "天启至崇祯",
   "place": "ningyuan",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》《崇祯长编》/ 《明史·袁崇焕传》/ 朝鲜使臣报告",
    "skills": [
     "古文"
    ],
    "accept": "整理袁崇焕经略辽西的具体措施与所受制约, 分析其成败",
    "effort": "2-4 周"
   },
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "dist": {
    "type": "degenerate"
   },
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "SX001",
   "subject": "person:yuan_chonghuan",
   "predicate": "官职",
   "value_text": "兵部职方主事",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingshi",
   "quote": "御史侯恂請破格用之，遂擢兵部職方主事",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "侯恂推荐，破格提拔",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX002",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "予我軍馬錢穀，我一人足守此",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "shanhaiguan",
   "source": "mingshi",
   "quote": "予我軍馬錢穀，我一人足守此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "袁崇焕巡视关内外后，向朝廷表态",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX003",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "守宁远",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥主寧遠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "在孙承宗召集的军事会议上，袁崇焕主张守宁远",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX004",
   "subject": "place:ningyuan",
   "predicate": "修筑",
   "value_text": "高三丈二尺，雉高六尺，址廣三丈，上二丈四尺",
   "time": {
    "era_text": "天启三年九月",
    "start": "1623-01-01",
    "end": "1623-12-31",
    "gregorian_year": 1623
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥乃定規制：高三丈二尺，雉高六尺，址廣三丈，上二丈四尺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "袁崇焕制定宁远城修筑规格",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX005",
   "subject": "person:yuan_chonghuan",
   "predicate": "兵力",
   "value_text": "万二千",
   "time": {
    "era_text": "天启四年九月",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "",
   "source": "mingshi",
   "quote": "率水陸馬步軍萬二千，東巡廣寧",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕东巡广宁所率兵力",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "守锦州、右屯等城",
   "time": {
    "era_text": "天启五年夏",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "jinzhou_cheng",
   "source": "mingshi",
   "quote": "遣將分據錦州、松山、杏山、右屯及大、小淩河，繕城郭居之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕与孙承宗商议，派兵占据并修缮锦州等城",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "反对撤锦州、右屯等城",
   "time": {
    "era_text": "天启五年十月",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "jinzhou_cheng",
   "source": "mingshi",
   "quote": "兵法有進無退。三城已復，安可輕撤？",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕反对高第撤退锦州、右屯等城的命令",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX008",
   "subject": "person:yuan_chonghuan",
   "predicate": "官职",
   "value_text": "宁前道",
   "time": {
    "era_text": "天启五年十月",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "我寧前道也，官此當死此，我必不去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕拒绝撤离宁远、前屯",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009",
   "subject": "war:ningyuan",
   "predicate": "爆发",
   "value_text": "清军进攻宁远",
   "time": {
    "era_text": "天启六年正月二十三日",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "六年正月舉大軍西渡遼河，二十三日抵寧遠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "后金军进攻宁远",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX010",
   "subject": "war:ningyuan",
   "predicate": "结果",
   "value_text": "明军获胜，清军解围",
   "time": {
    "era_text": "天启六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "明日，再攻，復被卻，圍遂解",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "宁远之战，明军击退后金军",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011",
   "subject": "person:yuan_chonghuan",
   "predicate": "官职",
   "value_text": "右佥都御史",
   "time": {
    "era_text": "天启六年",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "",
   "source": "mingshi",
   "quote": "立擢崇煥右僉都御史，璽書獎勵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "宁远大捷后，袁崇焕升任右佥都御史",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX012",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "凭坚城、用大炮",
   "time": {
    "era_text": "天启六年冬",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "",
   "source": "mingshi",
   "quote": "兵不利野戰，只有憑堅城、用大砲一策",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕提出凭坚城用大炮的战略",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX001_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "擢升",
   "value_text": "擢兵部职方主事",
   "time": {
    "era_text": "天启二年正月",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "",
   "source": "mingshi",
   "quote": "御史侯恂请破格用之，遂擢兵部职方主事",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "袁崇焕因侯恂推荐破格提拔",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX002_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "单骑出阅",
   "value_text": "单骑出阅关内外",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "shanhaiguan",
   "source": "mingshi",
   "quote": "崇煥即單騎出閱關內外",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "广宁师溃后，袁崇焕独自考察关内外形势",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX003_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "予我军马钱谷，我一人足守此",
   "time": {
    "era_text": "天启二年",
    "start": "1622-01-01",
    "end": "1622-12-31",
    "gregorian_year": 1622
   },
   "place": "shanhaiguan",
   "source": "mingshi",
   "quote": "予我軍馬錢穀，我一人足守此",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕自请守关",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX004_M1",
   "subject": "event:ningyuan_founded",
   "predicate": "筑城",
   "value_text": "高三丈二尺，雉高六尺，址广三丈，上二丈四尺",
   "time": {
    "era_text": "天启三年九月",
    "start": "1623-01-01",
    "end": "1623-12-31",
    "gregorian_year": 1623
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥乃定規制：高三丈二尺，雉高六尺，址廣三丈，上二丈四尺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "袁崇焕制定宁远城规制，祖大寿原筑仅十一且疏薄",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX005_M1",
   "subject": "event:ningyuan_founded",
   "predicate": "竣工",
   "value_text": "明年迄工，遂为关外重镇",
   "time": {
    "era_text": "天启四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "明年迄工，遂為關外重鎮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "宁远城建成后成为关外重镇",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "东巡",
   "value_text": "率水陆马步军万二千，东巡广宁",
   "time": {
    "era_text": "天启四年九月",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "",
   "source": "mingshi",
   "quote": "偕大將馬世龍、王世欽率水陸馬步軍萬二千，東巡廣寧",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁崇焕率军东巡广宁，历十三山，抵右屯",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "反对撤军",
   "value_text": "兵法有进无退，三城已复，安可轻撤",
   "time": {
    "era_text": "天启五年十月",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "兵法有進無退。三城已復，安可輕撤？",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "高第令撤锦州、右屯等城，袁崇焕力爭不可",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX008_M1",
   "subject": "person:yuan_chonghuan",
   "predicate": "誓守",
   "value_text": "我宁前道也，官此当死此，我必不去",
   "time": {
    "era_text": "天启五年十月",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "我寧前道也，官此當死此，我必不去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "高第欲并撤宁、前二城，袁崇焕拒绝",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009_M1",
   "subject": "event:ningyuan_battle",
   "predicate": "爆发",
   "value_text": "大军西渡辽河，抵宁远",
   "time": {
    "era_text": "天启六年正月二十三日",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "六年正月舉大軍西渡遼河，二十三日抵寧遠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "后金军进攻宁远",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX010_M1",
   "subject": "event:ningyuan_battle",
   "predicate": "守城",
   "value_text": "集将士誓死守，刺血为书",
   "time": {
    "era_text": "天启六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥聞，即偕大將桂，副將左輔、硃梅，參將大壽，守備何可剛等集將士誓死守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "袁崇焕与满桂、祖大寿等誓死守城",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011_M1",
   "subject": "event:ningyuan_battle",
   "predicate": "获胜",
   "value_text": "发西洋巨炮，伤城外军，围遂解",
   "time": {
    "era_text": "天启六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥令閩卒羅立，發西洋巨砲，傷城外軍。明日，再攻，復被卻，圍遂解",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "宁远之战明军获胜，后金军解围",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX012_M1",
   "subject": "event:ningyuan_battle",
   "predicate": "擢升",
   "value_text": "擢崇焕右佥都御史，玺书奖励",
   "time": {
    "era_text": "天启六年",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "",
   "source": "mingshi",
   "quote": "舉朝大喜，立擢崇煥右僉都御史，璽書獎勵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "宁远大捷后袁崇焕升任右佥都御史",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY001",
   "subject": "event:ningyuan_battle",
   "predicate": "集兵",
   "value_text": "集將士誓死守",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥聞，即偕大將桂，副將左輔、硃梅，參將大壽，守備何可剛等集將士誓死守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY002",
   "subject": "event:ningyuan_battle",
   "predicate": "守城策略",
   "value_text": "焚城外民居，清野以待",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "乃盡焚城外民居，攜守具入城，清野以待",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY003",
   "subject": "event:ningyuan_battle",
   "predicate": "使用火器",
   "value_text": "發西洋巨砲，傷城外軍",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥令閩卒羅立，發西洋巨砲，傷城外軍",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY004",
   "subject": "event:ningyuan_battle",
   "predicate": "结果",
   "value_text": "圍遂解",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "明日，再攻，復被卻，圍遂解",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY005",
   "subject": "event:ningyuan_battle",
   "predicate": "伤亡",
   "value_text": "啟倧以然砲死",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "而啟倧亦以然砲死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "金啟倧为通判，死于炮火",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY006",
   "subject": "event:ningyuan_battle",
   "predicate": "后金分兵略地",
   "value_text": "分兵數萬略覺華島",
   "time": {
    "era_text": "天啟六年正月",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "juehua",
   "source": "mingshi",
   "quote": "我大清初解圍，分兵數萬略覺華島，殺參將金冠等及軍民數萬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY007",
   "subject": "person:yuan_chonghuan",
   "predicate": "官职升迁",
   "value_text": "擢右僉都御史",
   "time": {
    "era_text": "天啟六年",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "",
   "source": "mingshi",
   "quote": "立擢崇煥右僉都御史，璽書獎勵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY008",
   "subject": "event:ningyuan_founded",
   "predicate": "筑城",
   "value_text": "高三丈二尺，址廣三丈",
   "time": {
    "era_text": "天啟三年九月",
    "start": "1623-01-01",
    "end": "1623-12-31",
    "gregorian_year": 1623
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥乃定規制：高三丈二尺，雉高六尺，址廣三丈，上二丈四尺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY009",
   "subject": "event:ningyuan_founded",
   "predicate": "完工",
   "value_text": "明年迄工，遂為關外重鎮",
   "time": {
    "era_text": "天啟四年",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "大壽與參將高見、賀謙分督之，明年迄工，遂為關外重鎮",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY010",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "value_text": "官此當死此，我必不去",
   "time": {
    "era_text": "天啟五年",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "崇煥曰：「我寧前道也，官此當死此，我必不去。」",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY011",
   "subject": "event:ningjin_dajie",
   "predicate": "背景",
   "value_text": "高第撤錦州等城守具",
   "time": {
    "era_text": "天啟五年",
    "start": "1625-01-01",
    "end": "1625-12-31",
    "gregorian_year": 1625
   },
   "place": "jinzhou_cheng",
   "source": "mingshi",
   "quote": "乃撤錦州、右屯、大、小淩河及松山、杏山、塔山守具，盡驅屯兵入關",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "高第代孫承宗為經略，主張棄守關外",
   "dims": [
    1,
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NY012",
   "subject": "event:ningyuan_battle",
   "predicate": "明军兵力",
   "value_text": "萬二千",
   "time": {
    "era_text": "天啟四年九月",
    "start": "1624-01-01",
    "end": "1624-12-31",
    "gregorian_year": 1624
   },
   "place": "ningyuan",
   "source": "mingshi",
   "quote": "率水陸馬步軍萬二千，東巡廣寧",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "此为东巡兵力，非宁远之战守城兵力",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NINGYUAN_SOC2",
   "subject": "social:minzhu",
   "predicate": "商民协守",
   "value_text": "宁远商民倚坚城自保，袁崇焕编民为兵，城守赖商民协助，孤城得全。",
   "source": "mingshi",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "time": {
    "era_text": "天启六年（1626）",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "NINGYUAN_SOC3",
   "subject": "social:liumin",
   "predicate": "辽西流徙",
   "value_text": "辽西连兵，宁远以西民众流徙，孤城聚纳难民，市廛半为空舍。",
   "source": "ming_xizong_shilu",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.55,
   "time": {
    "era_text": "天启六年（1626）",
    "start": "1626-01-01",
    "end": "1626-12-31",
    "gregorian_year": 1626
   },
   "place": "ningyuan",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "明廷官方",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:person:yuan_chonghuan|官职",
   "subject": "person:yuan_chonghuan",
   "predicate": "官职",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX001",
    "SX008",
    "SX011"
   ]
  },
  {
   "id": "cf:person:yuan_chonghuan|主张",
   "subject": "person:yuan_chonghuan",
   "predicate": "主张",
   "kind": "record_vs_record",
   "count": 7,
   "spread": null,
   "assertion_ids": [
    "SX002",
    "SX003",
    "SX006",
    "SX007",
    "SX012",
    "SX003_M1",
    "NY010"
   ]
  },
  {
   "id": "cf:event:ningyuan_founded|筑城",
   "subject": "event:ningyuan_founded",
   "predicate": "筑城",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX004_M1",
    "NY008"
   ]
  }
 ],
 "crossConflicts": [],
 "gaps": [
  "N010",
  "N011"
 ],
 "events": [
  {
   "id": "ningyuan_founded",
   "subject": "event:ningyuan_founded",
   "year": 1428,
   "era": "宣德三年",
   "title": "宁远卫建置",
   "kind": "建置",
   "text": "明置宁远卫，隶辽东都司，为辽西最南大城。"
  },
  {
   "id": "ningyuan_battle",
   "subject": "event:ningyuan_battle",
   "year": 1626,
   "era": "天命十一年",
   "title": "宁远之战",
   "kind": "战事",
   "text": "努尔哈赤率军攻宁远，袁崇焕凭坚城与红夷大炮拒守，努尔哈赤受创，七月死。明清对峙转折点。"
  },
  {
   "id": "ningjin_dajie",
   "subject": "event:ningjin_dajie",
   "year": 1627,
   "era": "天启七年",
   "title": "宁锦大捷",
   "kind": "战事",
   "text": "皇太极攻宁远、锦州不利，明军凭城固守获胜，清退。"
  },
  {
   "id": "ningyuan_wusangui",
   "subject": "event:ningyuan_wusangui",
   "year": 1644,
   "era": "崇祯十七年",
   "title": "吴三桂引清入关",
   "kind": "战事",
   "text": "李自成破北京，吴三桂弃宁远入关，引清兵入关击李自成。关宁锦防线终结。"
  }
 ],
 "edges": [
  {
   "from": "ningyuan",
   "to": "jinzhou_cheng",
   "type": "admin",
   "label": "宁远—锦州"
  },
  {
   "from": "ningyuan",
   "to": "shanhaiguan",
   "type": "admin",
   "label": "宁远—山海关"
  }
 ],
 "rivers_override": [
  {
   "n": "浑河",
   "approx": true,
   "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.9,
      41.92
     ],
     [
      124.75,
      41.925
     ],
     [
      124.6,
      41.92
     ],
     [
      124.45,
      41.91
     ],
     [
      124.3,
      41.905
     ],
     [
      124.1,
      41.9
     ],
     [
      123.96,
      41.88
     ],
     [
      123.8,
      41.865
     ],
     [
      123.65,
      41.85
     ],
     [
      123.43,
      41.8
     ]
    ]
   }
  },
  {
   "n": "苏子河",
   "approx": true,
   "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      125.35,
      41.98
     ],
     [
      125.2,
      41.92
     ],
     [
      125.03,
      41.85
     ],
     [
      124.85,
      41.86
     ],
     [
      124.65,
      41.88
     ],
     [
      124.45,
      41.9
     ],
     [
      124.28,
      41.92
     ]
    ]
   }
  },
  {
   "n": "清河",
   "approx": true,
   "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      123.45,
      42.35
     ],
     [
      123.7,
      42.15
     ],
     [
      123.95,
      41.95
     ],
     [
      124.15,
      41.7
     ],
     [
      124.3,
      41.55
     ]
    ]
   }
  },
  {
   "n": "深河",
   "approx": true,
   "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。",
   "g": {
    "type": "LineString",
    "coordinates": [
     [
      124.6,
      41.95
     ],
     [
      124.8,
      41.75
     ],
     [
      125.0,
      41.55
     ],
     [
      125.15,
      41.35
     ]
    ]
   }
  }
 ],
 "faction_geo": {
  "donglin": {
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "geo_note": "东林以江南无锡东林书院为舆论中心（顾宪成、高攀龙），成员近三成出自南直隶，余布各省清流。",
   "points": [
    {
     "name": "无锡",
     "lon": 120.3,
     "lat": 31.57,
     "note": "顾宪成故里、东林书院所在，今江苏无锡",
     "resolved": true
    },
    {
     "name": "常州",
     "lon": 119.97,
     "lat": 31.81,
     "note": "吴中行故里，今江苏常州",
     "resolved": true
    },
    {
     "name": "苏州",
     "lon": 120.585,
     "lat": 31.299,
     "note": "吴县/平江府，今江苏苏州",
     "resolved": true
    }
   ]
  },
  "eunuch": {
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "geo_note": "阉党依附魏忠贤（北直隶/河间）与客氏，核心是内廷宦官+北直隶依附官僚。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "赫图阿拉",
     "lon": 124.7,
     "lat": 41.6,
     "note": "后金/满洲发祥地，今辽宁新宾",
     "resolved": true
    }
   ]
  },
  "zhe_dang": {
   "name": "浙党",
   "color": "#B9770E",
   "geo_note": "浙党以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢。",
   "points": [
    {
     "name": "杭州",
     "lon": 120.15,
     "lat": 30.27,
     "note": "浙党核心，今浙江杭州",
     "resolved": true
    }
   ]
  },
  "chu_dang": {
   "name": "楚党",
   "color": "#CA6F1E",
   "geo_note": "楚党以楚籍官僚官应震、吴亮嗣为首，与浙党合攻东林。",
   "points": [
    {
     "name": "武昌",
     "lon": 114.3,
     "lat": 30.59,
     "note": "楚党核心，今湖北武汉",
     "resolved": true
    }
   ]
  },
  "qi_dang": {
   "name": "齐党",
   "color": "#B7950B",
   "geo_note": "齐党以齐籍官僚亓诗教、周永春为首，多居主兵中枢。",
   "points": [
    {
     "name": "济南",
     "lon": 117.0,
     "lat": 36.65,
     "note": "齐党核心，今山东济南",
     "resolved": true
    }
   ]
  },
  "xuan_kun": {
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "geo_note": "宣党（汤宾尹/宣城）与昆党（顾天埈/昆山）小集团，主要影响科举京察。",
   "points": [
    {
     "name": "宣城",
     "lon": 118.75,
     "lat": 30.94,
     "note": "宣党核心，今安徽宣城",
     "resolved": true
    },
    {
     "name": "昆山",
     "lon": 120.98,
     "lat": 31.39,
     "note": "昆党核心，今江苏昆山",
     "resolved": true
    }
   ]
  },
  "yan_shang": {
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "geo_note": "盐商/盐政利益以两淮（扬州）盐商及其利益相关官僚为主体。",
   "points": [
    {
     "name": "扬州",
     "lon": 119.41,
     "lat": 32.39,
     "note": "今江苏扬州",
     "resolved": true
    }
   ]
  },
  "nei_guan": {
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "geo_note": "内臣/宦官系统独立于阉党，监军镇守矿税监多出自内廷，北直隶为活动中心。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    }
   ]
  },
  "feng_jiang": {
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "geo_note": "封疆大吏/辽东经略系据辽东边镇（辽阳、沈阳），对败绩诿过、战功夸张。",
   "points": [
    {
     "name": "辽阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "唐安东都护府，今辽宁辽阳",
     "resolved": true
    },
    {
     "name": "沈阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "辽沈战役·沈阳解放",
     "resolved": true
    }
   ]
  }
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.89,
       39.602
      ],
      [
       124.846,
       39.559
      ],
      [
       124.849,
       39.508
      ],
      [
       124.905,
       39.536
      ],
      [
       124.935,
       39.608
      ],
      [
       124.89,
       39.602
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
        118.75,
        39.161
       ],
       [
        118.752,
        39.16
       ],
       [
        118.826,
        39.172
       ],
       [
        118.912,
        39.166
       ],
       [
        118.977,
        39.183
       ],
       [
        119.04,
        39.222
       ],
       [
        119.225,
        39.408
       ],
       [
        119.261,
        39.561
       ],
       [
        119.322,
        39.662
       ],
       [
        119.391,
        39.752
       ],
       [
        119.591,
        39.903
       ],
       [
        119.85,
        39.987
       ],
       [
        120.369,
        40.204
       ],
       [
        120.479,
        40.231
       ],
       [
        120.771,
        40.589
       ],
       [
        120.841,
        40.649
       ],
       [
        120.922,
        40.683
       ],
       [
        121.003,
        40.749
       ],
       [
        121.086,
        40.842
       ],
       [
        121.175,
        40.901
       ],
       [
        121.537,
        40.878
       ],
       [
        121.599,
        40.843
       ],
       [
        121.729,
        40.846
       ],
       [
        121.766,
        40.876
       ],
       [
        121.809,
        40.969
       ],
       [
        121.835,
        40.974
       ],
       [
        121.859,
        40.842
       ],
       [
        122.14,
        40.688
       ],
       [
        122.179,
        40.603
       ],
       [
        122.275,
        40.542
       ],
       [
        122.264,
        40.5
       ],
       [
        122.203,
        40.396
       ],
       [
        122.191,
        40.358
       ],
       [
        121.983,
        40.136
       ],
       [
        121.869,
        40.046
       ],
       [
        121.801,
        39.951
       ],
       [
        121.517,
        39.845
       ],
       [
        121.474,
        39.755
       ],
       [
        121.514,
        39.685
       ],
       [
        121.518,
        39.639
       ],
       [
        121.47,
        39.64
       ],
       [
        121.406,
        39.621
       ],
       [
        121.267,
        39.545
       ],
       [
        121.286,
        39.519
       ],
       [
        121.3,
        39.452
       ],
       [
        121.275,
        39.385
       ],
       [
        121.356,
        39.377
       ],
       [
        121.513,
        39.375
       ],
       [
        121.785,
        39.401
       ],
       [
        121.818,
        39.387
       ],
       [
        121.758,
        39.348
       ],
       [
        121.665,
        39.269
       ],
       [
        121.628,
        39.22
       ],
       [
        121.68,
        39.109
       ],
       [
        121.375,
        39.0
       ],
       [
        121.674,
        39.0
       ],
       [
        121.677,
        39.003
       ],
       [
        121.745,
        39.01
       ],
       [
        121.777,
        39.0
       ],
       [
        121.869,
        39.0
       ],
       [
        121.923,
        39.037
       ],
       [
        121.982,
        39.053
       ],
       [
        122.048,
        39.094
       ],
       [
        122.121,
        39.152
       ],
       [
        122.225,
        39.267
       ],
       [
        122.335,
        39.366
       ],
       [
        122.84,
        39.601
       ],
       [
        122.961,
        39.62
       ],
       [
        123.032,
        39.674
       ],
       [
        123.227,
        39.687
       ],
       [
        123.269,
        39.727
       ],
       [
        123.348,
        39.763
       ],
       [
        123.49,
        39.768
       ],
       [
        123.581,
        39.786
       ],
       [
        123.611,
        39.841
       ],
       [
        123.651,
        39.882
       ],
       [
        123.76,
        39.822
       ],
       [
        124.106,
        39.841
       ],
       [
        124.267,
        39.924
       ],
       [
        124.35,
        40.012
       ],
       [
        124.362,
        40.004
       ],
       [
        124.375,
        39.996
       ],
       [
        124.349,
        39.907
       ],
       [
        124.404,
        39.866
       ],
       [
        124.557,
        39.791
       ],
       [
        124.608,
        39.717
       ],
       [
        124.638,
        39.615
       ],
       [
        124.699,
        39.632
       ],
       [
        124.732,
        39.652
       ],
       [
        124.739,
        39.742
       ],
       [
        124.775,
        39.758
       ],
       [
        124.868,
        39.702
       ],
       [
        125.1,
        39.59
       ],
       [
        125.18,
        39.583
       ],
       [
        125.361,
        39.527
       ],
       [
        125.374,
        39.428
       ],
       [
        125.413,
        39.326
       ],
       [
        125.41,
        39.288
       ],
       [
        125.235,
        39.0
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
        124.905,
        39.536
       ],
       [
        124.849,
        39.508
       ],
       [
        124.846,
        39.559
       ],
       [
        124.89,
        39.602
       ],
       [
        124.935,
        39.608
       ],
       [
        124.905,
        39.536
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
        118.75,
        39.0
       ],
       [
        118.75,
        43.35
       ],
       [
        126.35,
        43.35
       ],
       [
        126.35,
        39.0
       ],
       [
        125.235,
        39.0
       ],
       [
        125.41,
        39.288
       ],
       [
        125.413,
        39.326
       ],
       [
        125.374,
        39.428
       ],
       [
        125.361,
        39.527
       ],
       [
        125.18,
        39.583
       ],
       [
        125.1,
        39.59
       ],
       [
        124.868,
        39.702
       ],
       [
        124.775,
        39.758
       ],
       [
        124.739,
        39.742
       ],
       [
        124.732,
        39.652
       ],
       [
        124.699,
        39.632
       ],
       [
        124.638,
        39.615
       ],
       [
        124.608,
        39.717
       ],
       [
        124.557,
        39.791
       ],
       [
        124.404,
        39.866
       ],
       [
        124.349,
        39.907
       ],
       [
        124.375,
        39.996
       ],
       [
        124.362,
        40.004
       ],
       [
        124.35,
        40.012
       ],
       [
        124.267,
        39.924
       ],
       [
        124.106,
        39.841
       ],
       [
        123.76,
        39.822
       ],
       [
        123.651,
        39.882
       ],
       [
        123.611,
        39.841
       ],
       [
        123.581,
        39.786
       ],
       [
        123.49,
        39.768
       ],
       [
        123.348,
        39.763
       ],
       [
        123.269,
        39.727
       ],
       [
        123.227,
        39.687
       ],
       [
        123.032,
        39.674
       ],
       [
        122.961,
        39.62
       ],
       [
        122.84,
        39.601
       ],
       [
        122.335,
        39.366
       ],
       [
        122.225,
        39.267
       ],
       [
        122.121,
        39.152
       ],
       [
        122.048,
        39.094
       ],
       [
        121.982,
        39.053
       ],
       [
        121.923,
        39.037
       ],
       [
        121.869,
        39.0
       ],
       [
        121.777,
        39.0
       ],
       [
        121.745,
        39.01
       ],
       [
        121.677,
        39.003
       ],
       [
        121.674,
        39.0
       ],
       [
        121.375,
        39.0
       ],
       [
        121.68,
        39.109
       ],
       [
        121.628,
        39.22
       ],
       [
        121.665,
        39.269
       ],
       [
        121.758,
        39.348
       ],
       [
        121.818,
        39.387
       ],
       [
        121.785,
        39.401
       ],
       [
        121.513,
        39.375
       ],
       [
        121.356,
        39.377
       ],
       [
        121.275,
        39.385
       ],
       [
        121.3,
        39.452
       ],
       [
        121.286,
        39.519
       ],
       [
        121.267,
        39.545
       ],
       [
        121.406,
        39.621
       ],
       [
        121.47,
        39.64
       ],
       [
        121.518,
        39.639
       ],
       [
        121.514,
        39.685
       ],
       [
        121.474,
        39.755
       ],
       [
        121.517,
        39.845
       ],
       [
        121.801,
        39.951
       ],
       [
        121.869,
        40.046
       ],
       [
        121.983,
        40.136
       ],
       [
        122.191,
        40.358
       ],
       [
        122.203,
        40.396
       ],
       [
        122.264,
        40.5
       ],
       [
        122.275,
        40.542
       ],
       [
        122.179,
        40.603
       ],
       [
        122.14,
        40.688
       ],
       [
        121.859,
        40.842
       ],
       [
        121.835,
        40.974
       ],
       [
        121.809,
        40.969
       ],
       [
        121.766,
        40.876
       ],
       [
        121.729,
        40.846
       ],
       [
        121.599,
        40.843
       ],
       [
        121.537,
        40.878
       ],
       [
        121.175,
        40.901
       ],
       [
        121.086,
        40.842
       ],
       [
        121.003,
        40.749
       ],
       [
        120.922,
        40.683
       ],
       [
        120.841,
        40.649
       ],
       [
        120.771,
        40.589
       ],
       [
        120.479,
        40.231
       ],
       [
        120.369,
        40.204
       ],
       [
        119.85,
        39.987
       ],
       [
        119.591,
        39.903
       ],
       [
        119.391,
        39.752
       ],
       [
        119.322,
        39.662
       ],
       [
        119.261,
        39.561
       ],
       [
        119.225,
        39.408
       ],
       [
        119.04,
        39.222
       ],
       [
        118.977,
        39.183
       ],
       [
        118.912,
        39.166
       ],
       [
        118.826,
        39.172
       ],
       [
        118.752,
        39.16
       ],
       [
        118.75,
        39.161
       ],
       [
        118.75,
        39.0
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
         118.75,
         39.136
        ],
        [
         118.761,
         39.134
        ],
        [
         118.815,
         39.139
        ],
        [
         118.858,
         39.163
        ],
        [
         118.897,
         39.151
        ],
        [
         118.92,
         39.172
        ],
        [
         118.951,
         39.179
        ],
        [
         118.896,
         39.14
        ],
        [
         118.89,
         39.119
        ],
        [
         118.926,
         39.123
        ],
        [
         118.978,
         39.163
        ],
        [
         119.024,
         39.187
        ],
        [
         119.038,
         39.212
        ],
        [
         119.096,
         39.242
        ],
        [
         119.121,
         39.282
        ],
        [
         119.185,
         39.342
        ],
        [
         119.273,
         39.364
        ],
        [
         119.317,
         39.411
        ],
        [
         119.317,
         39.437
        ],
        [
         119.27,
         39.498
        ],
        [
         119.366,
         39.735
        ],
        [
         119.474,
         39.813
        ],
        [
         119.536,
         39.809
        ],
        [
         119.52,
         39.84
        ],
        [
         119.541,
         39.888
        ],
        [
         119.588,
         39.911
        ],
        [
         119.62,
         39.905
        ],
        [
         119.642,
         39.925
        ],
        [
         119.682,
         39.923
        ],
        [
         119.726,
         39.941
        ],
        [
         119.787,
         39.951
        ],
        [
         119.82,
         39.979
        ],
        [
         119.843,
         39.956
        ],
        [
         119.872,
         39.961
        ],
        [
         119.854,
         39.989
        ],
        [
         119.846,
         40.001
        ],
        [
         119.846,
         40.001
        ],
        [
         119.854,
         40.033
        ],
        [
         119.817,
         40.05
        ],
        [
         119.817,
         40.05
        ],
        [
         119.787,
         40.042
        ],
        [
         119.787,
         40.042
        ],
        [
         119.783,
         40.047
        ],
        [
         119.783,
         40.047
        ],
        [
         119.772,
         40.081
        ],
        [
         119.737,
         40.105
        ],
        [
         119.761,
         40.136
        ],
        [
         119.746,
         40.208
        ],
        [
         119.717,
         40.196
        ],
        [
         119.672,
         40.239
        ],
        [
         119.639,
         40.232
        ],
        [
         119.639,
         40.232
        ],
        [
         119.652,
         40.272
        ],
        [
         119.598,
         40.334
        ],
        [
         119.587,
         40.375
        ],
        [
         119.605,
         40.455
        ],
        [
         119.554,
         40.502
        ],
        [
         119.572,
         40.524
        ],
        [
         119.559,
         40.548
        ],
        [
         119.504,
         40.554
        ],
        [
         119.478,
         40.533
        ],
        [
         119.429,
         40.54
        ],
        [
         119.302,
         40.53
        ],
        [
         119.256,
         40.543
        ],
        [
         119.22,
         40.569
        ],
        [
         119.231,
         40.604
        ],
        [
         119.178,
         40.609
        ],
        [
         119.163,
         40.6
        ],
        [
         119.145,
         40.632
        ],
        [
         119.185,
         40.68
        ],
        [
         119.166,
         40.693
        ],
        [
         119.115,
         40.667
        ],
        [
         119.055,
         40.665
        ],
        [
         119.028,
         40.692
        ],
        [
         119.011,
         40.687
        ],
        [
         118.961,
         40.72
        ],
        [
         118.95,
         40.748
        ],
        [
         118.895,
         40.754
        ],
        [
         118.908,
         40.775
        ],
        [
         118.879,
         40.783
        ],
        [
         118.846,
         40.822
        ],
        [
         118.873,
         40.848
        ],
        [
         118.902,
         40.961
        ],
        [
         118.917,
         40.97
        ],
        [
         118.977,
         40.959
        ],
        [
         118.977,
         40.959
        ],
        [
         119.001,
         40.967
        ],
        [
         119.013,
         41.007
        ],
        [
         118.952,
         41.018
        ],
        [
         118.937,
         41.053
        ],
        [
         118.965,
         41.079
        ],
        [
         119.038,
         41.068
        ],
        [
         119.081,
         41.096
        ],
        [
         119.081,
         41.132
        ],
        [
         119.126,
         41.139
        ],
        [
         119.189,
         41.198
        ],
        [
         119.17,
         41.223
        ],
        [
         119.204,
         41.223
        ],
        [
         119.209,
         41.245
        ],
        [
         119.249,
         41.28
        ],
        [
         119.24,
         41.314
        ],
        [
         119.212,
         41.308
        ],
        [
         119.198,
         41.283
        ],
        [
         119.169,
         41.295
        ],
        [
         119.093,
         41.294
        ],
        [
         118.98,
         41.306
        ],
        [
         118.949,
         41.318
        ],
        [
         118.891,
         41.301
        ],
        [
         118.845,
         41.343
        ],
        [
         118.843,
         41.375
        ],
        [
         118.77,
         41.353
        ],
        [
         118.75,
         41.332
        ],
        [
         118.75,
         39.136
        ]
       ]
      ],
      [
       [
        [
         118.869,
         39.143
        ],
        [
         118.82,
         39.109
        ],
        [
         118.858,
         39.099
        ],
        [
         118.869,
         39.143
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.75,
        43.35
       ],
       [
        118.75,
        41.332
       ],
       [
        118.77,
        41.353
       ],
       [
        118.843,
        41.375
       ],
       [
        118.845,
        41.343
       ],
       [
        118.891,
        41.301
       ],
       [
        118.949,
        41.318
       ],
       [
        118.98,
        41.306
       ],
       [
        119.093,
        41.294
       ],
       [
        119.169,
        41.295
       ],
       [
        119.198,
        41.283
       ],
       [
        119.212,
        41.308
       ],
       [
        119.24,
        41.314
       ],
       [
        119.296,
        41.325
       ],
       [
        119.331,
        41.385
       ],
       [
        119.31,
        41.406
       ],
       [
        119.376,
        41.422
       ],
       [
        119.378,
        41.46
       ],
       [
        119.402,
        41.472
       ],
       [
        119.406,
        41.503
       ],
       [
        119.362,
        41.546
       ],
       [
        119.362,
        41.566
       ],
       [
        119.42,
        41.568
       ],
       [
        119.416,
        41.59
       ],
       [
        119.342,
        41.618
       ],
       [
        119.308,
        41.657
       ],
       [
        119.3,
        41.706
       ],
       [
        119.319,
        41.727
       ],
       [
        119.318,
        41.764
       ],
       [
        119.293,
        41.791
       ],
       [
        119.313,
        41.806
       ],
       [
        119.334,
        41.872
       ],
       [
        119.323,
        41.89
       ],
       [
        119.341,
        41.927
       ],
       [
        119.324,
        41.937
       ],
       [
        119.325,
        41.97
       ],
       [
        119.376,
        42.023
       ],
       [
        119.385,
        42.09
       ],
       [
        119.352,
        42.118
       ],
       [
        119.315,
        42.12
       ],
       [
        119.309,
        42.147
       ],
       [
        119.287,
        42.155
       ],
       [
        119.278,
        42.185
       ],
       [
        119.238,
        42.201
       ],
       [
        119.274,
        42.239
       ],
       [
        119.28,
        42.261
       ],
       [
        119.348,
        42.301
       ],
       [
        119.433,
        42.317
       ],
       [
        119.483,
        42.347
       ],
       [
        119.503,
        42.388
       ],
       [
        119.54,
        42.363
       ],
       [
        119.572,
        42.359
       ],
       [
        119.572,
        42.336
       ],
       [
        119.54,
        42.298
       ],
       [
        119.558,
        42.289
       ],
       [
        119.609,
        42.277
       ],
       [
        119.617,
        42.253
       ],
       [
        119.68,
        42.241
       ],
       [
        119.745,
        42.212
       ],
       [
        119.842,
        42.216
       ],
       [
        119.855,
        42.17
       ],
       [
        119.838,
        42.135
       ],
       [
        119.846,
        42.097
       ],
       [
        119.876,
        42.078
       ],
       [
        119.897,
        42.031
       ],
       [
        119.921,
        42.014
       ],
       [
        119.924,
        41.989
       ],
       [
        119.951,
        41.974
       ],
       [
        119.954,
        41.923
       ],
       [
        119.99,
        41.899
       ],
       [
        120.023,
        41.817
       ],
       [
        120.041,
        41.819
       ],
       [
        120.051,
        41.776
       ],
       [
        120.025,
        41.738
       ],
       [
        120.036,
        41.708
       ],
       [
        120.096,
        41.697
       ],
       [
        120.138,
        41.729
       ],
       [
        120.127,
        41.773
       ],
       [
        120.183,
        41.827
       ],
       [
        120.189,
        41.848
       ],
       [
        120.216,
        41.853
       ],
       [
        120.252,
        41.884
       ],
       [
        120.287,
        41.88
       ],
       [
        120.29,
        41.897
       ],
       [
        120.26,
        41.904
       ],
       [
        120.272,
        41.925
       ],
       [
        120.318,
        41.937
       ],
       [
        120.309,
        41.952
       ],
       [
        120.373,
        41.995
       ],
       [
        120.399,
        41.985
       ],
       [
        120.457,
        42.016
       ],
       [
        120.45,
        42.057
       ],
       [
        120.494,
        42.074
       ],
       [
        120.466,
        42.106
       ],
       [
        120.568,
        42.152
       ],
       [
        120.584,
        42.167
       ],
       [
        120.625,
        42.154
       ],
       [
        120.722,
        42.204
       ],
       [
        120.746,
        42.224
       ],
       [
        120.79,
        42.219
       ],
       [
        120.821,
        42.228
       ],
       [
        120.83,
        42.253
       ],
       [
        120.883,
        42.243
       ],
       [
        120.883,
        42.27
       ],
       [
        120.934,
        42.28
       ],
       [
        120.993,
        42.265
       ],
       [
        121.029,
        42.243
       ],
       [
        121.071,
        42.254
       ],
       [
        121.088,
        42.279
       ],
       [
        121.121,
        42.281
       ],
       [
        121.134,
        42.3
       ],
       [
        121.185,
        42.333
       ],
       [
        121.219,
        42.372
       ],
       [
        121.285,
        42.388
       ],
       [
        121.315,
        42.428
       ],
       [
        121.305,
        42.436
       ],
       [
        121.386,
        42.474
       ],
       [
        121.435,
        42.475
       ],
       [
        121.479,
        42.496
       ],
       [
        121.506,
        42.482
       ],
       [
        121.571,
        42.487
       ],
       [
        121.608,
        42.516
       ],
       [
        121.604,
        42.495
       ],
       [
        121.666,
        42.437
       ],
       [
        121.699,
        42.439
       ],
       [
        121.748,
        42.485
       ],
       [
        121.803,
        42.515
       ],
       [
        121.818,
        42.504
       ],
       [
        121.831,
        42.534
       ],
       [
        121.844,
        42.522
       ],
       [
        121.89,
        42.557
       ],
       [
        121.921,
        42.606
       ],
       [
        121.916,
        42.656
       ],
       [
        121.942,
        42.666
       ],
       [
        121.939,
        42.688
       ],
       [
        122.019,
        42.699
       ],
       [
        122.062,
        42.724
       ],
       [
        122.073,
        42.71
       ],
       [
        122.161,
        42.685
       ],
       [
        122.205,
        42.685
       ],
       [
        122.205,
        42.733
       ],
       [
        122.261,
        42.696
       ],
       [
        122.325,
        42.685
       ],
       [
        122.339,
        42.67
       ],
       [
        122.396,
        42.684
       ],
       [
        122.396,
        42.707
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.372,
        42.776
       ],
       [
        122.351,
        42.83
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.703,
        43.35
       ],
       [
        118.75,
        43.35
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
         123.534,
         39.788
        ],
        [
         123.547,
         39.756
        ],
        [
         123.579,
         39.781
        ],
        [
         123.613,
         39.775
        ],
        [
         123.642,
         39.796
        ],
        [
         123.645,
         39.824
        ],
        [
         123.675,
         39.827
        ],
        [
         123.688,
         39.808
        ],
        [
         123.795,
         39.823
        ],
        [
         123.812,
         39.831
        ],
        [
         123.951,
         39.818
        ],
        [
         124.003,
         39.8
        ],
        [
         124.103,
         39.823
        ],
        [
         124.099,
         39.777
        ],
        [
         124.151,
         39.746
        ],
        [
         124.173,
         39.841
        ],
        [
         124.214,
         39.865
        ],
        [
         124.215,
         39.883
        ],
        [
         124.217,
         39.894
        ],
        [
         124.218,
         39.896
        ],
        [
         124.219,
         39.899
        ],
        [
         124.242,
         39.928
        ],
        [
         124.287,
         39.932
        ],
        [
         124.288,
         39.963
        ],
        [
         124.349,
         39.989
        ],
        [
         124.372,
         40.022
        ],
        [
         124.336,
         40.05
        ],
        [
         124.347,
         40.08
        ],
        [
         124.428,
         40.144
        ],
        [
         124.458,
         40.178
        ],
        [
         124.49,
         40.184
        ],
        [
         124.514,
         40.218
        ],
        [
         124.515,
         40.22
        ],
        [
         124.627,
         40.292
        ],
        [
         124.723,
         40.322
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.934,
         43.35
        ],
        [
         123.703,
         43.35
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.351,
         42.83
        ],
        [
         122.372,
         42.776
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.396,
         42.707
        ],
        [
         122.396,
         42.684
        ],
        [
         122.339,
         42.67
        ],
        [
         122.325,
         42.685
        ],
        [
         122.261,
         42.696
        ],
        [
         122.205,
         42.733
        ],
        [
         122.205,
         42.685
        ],
        [
         122.161,
         42.685
        ],
        [
         122.073,
         42.71
        ],
        [
         122.062,
         42.724
        ],
        [
         122.019,
         42.699
        ],
        [
         121.939,
         42.688
        ],
        [
         121.942,
         42.666
        ],
        [
         121.916,
         42.656
        ],
        [
         121.921,
         42.606
        ],
        [
         121.89,
         42.557
        ],
        [
         121.844,
         42.522
        ],
        [
         121.831,
         42.534
        ],
        [
         121.818,
         42.504
        ],
        [
         121.803,
         42.515
        ],
        [
         121.748,
         42.485
        ],
        [
         121.699,
         42.439
        ],
        [
         121.666,
         42.437
        ],
        [
         121.604,
         42.495
        ],
        [
         121.608,
         42.516
        ],
        [
         121.571,
         42.487
        ],
        [
         121.506,
         42.482
        ],
        [
         121.479,
         42.496
        ],
        [
         121.435,
         42.475
        ],
        [
         121.386,
         42.474
        ],
        [
         121.305,
         42.436
        ],
        [
         121.315,
         42.428
        ],
        [
         121.285,
         42.388
        ],
        [
         121.219,
         42.372
        ],
        [
         121.185,
         42.333
        ],
        [
         121.134,
         42.3
        ],
        [
         121.121,
         42.281
        ],
        [
         121.088,
         42.279
        ],
        [
         121.071,
         42.254
        ],
        [
         121.029,
         42.243
        ],
        [
         120.993,
         42.265
        ],
        [
         120.934,
         42.28
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.243
        ],
        [
         120.83,
         42.253
        ],
        [
         120.821,
         42.228
        ],
        [
         120.79,
         42.219
        ],
        [
         120.746,
         42.224
        ],
        [
         120.722,
         42.204
        ],
        [
         120.625,
         42.154
        ],
        [
         120.584,
         42.167
        ],
        [
         120.568,
         42.152
        ],
        [
         120.466,
         42.106
        ],
        [
         120.494,
         42.074
        ],
        [
         120.45,
         42.057
        ],
        [
         120.457,
         42.016
        ],
        [
         120.399,
         41.985
        ],
        [
         120.373,
         41.995
        ],
        [
         120.309,
         41.952
        ],
        [
         120.318,
         41.937
        ],
        [
         120.272,
         41.925
        ],
        [
         120.26,
         41.904
        ],
        [
         120.29,
         41.897
        ],
        [
         120.287,
         41.88
        ],
        [
         120.252,
         41.884
        ],
        [
         120.216,
         41.853
        ],
        [
         120.189,
         41.848
        ],
        [
         120.183,
         41.827
        ],
        [
         120.127,
         41.773
        ],
        [
         120.138,
         41.729
        ],
        [
         120.096,
         41.697
        ],
        [
         120.036,
         41.708
        ],
        [
         120.025,
         41.738
        ],
        [
         120.051,
         41.776
        ],
        [
         120.041,
         41.819
        ],
        [
         120.023,
         41.817
        ],
        [
         119.99,
         41.899
        ],
        [
         119.954,
         41.923
        ],
        [
         119.951,
         41.974
        ],
        [
         119.924,
         41.989
        ],
        [
         119.921,
         42.014
        ],
        [
         119.897,
         42.031
        ],
        [
         119.876,
         42.078
        ],
        [
         119.846,
         42.097
        ],
        [
         119.838,
         42.135
        ],
        [
         119.855,
         42.17
        ],
        [
         119.842,
         42.216
        ],
        [
         119.745,
         42.212
        ],
        [
         119.68,
         42.241
        ],
        [
         119.617,
         42.253
        ],
        [
         119.609,
         42.277
        ],
        [
         119.558,
         42.289
        ],
        [
         119.558,
         42.289
        ],
        [
         119.54,
         42.298
        ],
        [
         119.572,
         42.336
        ],
        [
         119.572,
         42.359
        ],
        [
         119.54,
         42.363
        ],
        [
         119.503,
         42.388
        ],
        [
         119.483,
         42.347
        ],
        [
         119.433,
         42.317
        ],
        [
         119.348,
         42.301
        ],
        [
         119.28,
         42.261
        ],
        [
         119.274,
         42.239
        ],
        [
         119.238,
         42.201
        ],
        [
         119.278,
         42.185
        ],
        [
         119.287,
         42.155
        ],
        [
         119.309,
         42.147
        ],
        [
         119.315,
         42.12
        ],
        [
         119.352,
         42.118
        ],
        [
         119.385,
         42.09
        ],
        [
         119.376,
         42.023
        ],
        [
         119.325,
         41.97
        ],
        [
         119.324,
         41.937
        ],
        [
         119.341,
         41.927
        ],
        [
         119.323,
         41.89
        ],
        [
         119.334,
         41.872
        ],
        [
         119.313,
         41.806
        ],
        [
         119.293,
         41.791
        ],
        [
         119.318,
         41.764
        ],
        [
         119.319,
         41.727
        ],
        [
         119.3,
         41.706
        ],
        [
         119.308,
         41.657
        ],
        [
         119.342,
         41.618
        ],
        [
         119.416,
         41.59
        ],
        [
         119.42,
         41.568
        ],
        [
         119.362,
         41.566
        ],
        [
         119.362,
         41.546
        ],
        [
         119.406,
         41.503
        ],
        [
         119.402,
         41.472
        ],
        [
         119.378,
         41.46
        ],
        [
         119.376,
         41.422
        ],
        [
         119.31,
         41.406
        ],
        [
         119.331,
         41.385
        ],
        [
         119.296,
         41.325
        ],
        [
         119.24,
         41.314
        ],
        [
         119.249,
         41.28
        ],
        [
         119.209,
         41.245
        ],
        [
         119.204,
         41.223
        ],
        [
         119.17,
         41.223
        ],
        [
         119.189,
         41.198
        ],
        [
         119.126,
         41.139
        ],
        [
         119.081,
         41.132
        ],
        [
         119.081,
         41.096
        ],
        [
         119.038,
         41.068
        ],
        [
         118.965,
         41.079
        ],
        [
         118.937,
         41.053
        ],
        [
         118.952,
         41.018
        ],
        [
         119.013,
         41.007
        ],
        [
         119.001,
         40.967
        ],
        [
         118.977,
         40.959
        ],
        [
         118.977,
         40.959
        ],
        [
         118.917,
         40.97
        ],
        [
         118.902,
         40.961
        ],
        [
         118.873,
         40.848
        ],
        [
         118.846,
         40.822
        ],
        [
         118.879,
         40.783
        ],
        [
         118.908,
         40.775
        ],
        [
         118.895,
         40.754
        ],
        [
         118.95,
         40.748
        ],
        [
         118.961,
         40.72
        ],
        [
         119.011,
         40.687
        ],
        [
         119.028,
         40.692
        ],
        [
         119.055,
         40.665
        ],
        [
         119.115,
         40.667
        ],
        [
         119.166,
         40.693
        ],
        [
         119.185,
         40.68
        ],
        [
         119.145,
         40.632
        ],
        [
         119.163,
         40.6
        ],
        [
         119.178,
         40.609
        ],
        [
         119.231,
         40.604
        ],
        [
         119.22,
         40.569
        ],
        [
         119.256,
         40.543
        ],
        [
         119.302,
         40.53
        ],
        [
         119.429,
         40.54
        ],
        [
         119.478,
         40.533
        ],
        [
         119.504,
         40.554
        ],
        [
         119.559,
         40.548
        ],
        [
         119.572,
         40.524
        ],
        [
         119.554,
         40.502
        ],
        [
         119.605,
         40.455
        ],
        [
         119.587,
         40.375
        ],
        [
         119.598,
         40.334
        ],
        [
         119.652,
         40.272
        ],
        [
         119.639,
         40.232
        ],
        [
         119.639,
         40.232
        ],
        [
         119.672,
         40.239
        ],
        [
         119.717,
         40.196
        ],
        [
         119.746,
         40.208
        ],
        [
         119.761,
         40.136
        ],
        [
         119.737,
         40.105
        ],
        [
         119.772,
         40.081
        ],
        [
         119.783,
         40.047
        ],
        [
         119.783,
         40.047
        ],
        [
         119.787,
         40.042
        ],
        [
         119.787,
         40.042
        ],
        [
         119.817,
         40.05
        ],
        [
         119.817,
         40.05
        ],
        [
         119.854,
         40.033
        ],
        [
         119.846,
         40.001
        ],
        [
         119.846,
         40.001
        ],
        [
         119.854,
         39.989
        ],
        [
         119.918,
         39.99
        ],
        [
         119.942,
         40.01
        ],
        [
         119.947,
         40.04
        ],
        [
         120.092,
         40.077
        ],
        [
         120.135,
         40.075
        ],
        [
         120.162,
         40.096
        ],
        [
         120.273,
         40.127
        ],
        [
         120.372,
         40.174
        ],
        [
         120.451,
         40.178
        ],
        [
         120.492,
         40.2
        ],
        [
         120.524,
         40.257
        ],
        [
         120.522,
         40.305
        ],
        [
         120.537,
         40.325
        ],
        [
         120.603,
         40.361
        ],
        [
         120.596,
         40.399
        ],
        [
         120.617,
         40.42
        ],
        [
         120.616,
         40.445
        ],
        [
         120.619,
         40.46
        ],
        [
         120.667,
         40.467
        ],
        [
         120.694,
         40.506
        ],
        [
         120.722,
         40.516
        ],
        [
         120.728,
         40.539
        ],
        [
         120.823,
         40.594
        ],
        [
         120.837,
         40.644
        ],
        [
         120.83,
         40.671
        ],
        [
         120.861,
         40.685
        ],
        [
         120.94,
         40.687
        ],
        [
         120.983,
         40.713
        ],
        [
         121.033,
         40.709
        ],
        [
         121.029,
         40.746
        ],
        [
         120.991,
         40.744
        ],
        [
         120.98,
         40.766
        ],
        [
         120.994,
         40.791
        ],
        [
         120.972,
         40.806
        ],
        [
         121.007,
         40.808
        ],
        [
         121.011,
         40.784
        ],
        [
         121.087,
         40.798
        ],
        [
         121.077,
         40.816
        ],
        [
         121.097,
         40.84
        ],
        [
         121.126,
         40.869
        ],
        [
         121.178,
         40.874
        ],
        [
         121.236,
         40.851
        ],
        [
         121.291,
         40.851
        ],
        [
         121.439,
         40.83
        ],
        [
         121.44,
         40.882
        ],
        [
         121.499,
         40.88
        ],
        [
         121.527,
         40.852
        ],
        [
         121.555,
         40.85
        ],
        [
         121.553,
         40.818
        ],
        [
         121.576,
         40.838
        ],
        [
         121.626,
         40.844
        ],
        [
         121.683,
         40.83
        ],
        [
         121.732,
         40.847
        ],
        [
         121.735,
         40.862
        ],
        [
         121.778,
         40.887
        ],
        [
         121.816,
         40.895
        ],
        [
         121.843,
         40.832
        ],
        [
         121.884,
         40.802
        ],
        [
         121.934,
         40.798
        ],
        [
         121.936,
         40.711
        ],
        [
         121.952,
         40.681
        ],
        [
         122.025,
         40.674
        ],
        [
         122.066,
         40.649
        ],
        [
         122.122,
         40.657
        ],
        [
         122.149,
         40.672
        ],
        [
         122.134,
         40.614
        ],
        [
         122.15,
         40.588
        ],
        [
         122.246,
         40.52
        ],
        [
         122.231,
         40.505
        ],
        [
         122.265,
         40.48
        ],
        [
         122.222,
         40.481
        ],
        [
         122.24,
         40.461
        ],
        [
         122.251,
         40.446
        ],
        [
         122.229,
         40.424
        ],
        [
         122.187,
         40.423
        ],
        [
         122.199,
         40.382
        ],
        [
         122.152,
         40.358
        ],
        [
         122.136,
         40.375
        ],
        [
         122.111,
         40.349
        ],
        [
         122.138,
         40.339
        ],
        [
         122.11,
         40.316
        ],
        [
         122.08,
         40.333
        ],
        [
         122.04,
         40.322
        ],
        [
         122.04,
         40.26
        ],
        [
         122.027,
         40.245
        ],
        [
         121.94,
         40.242
        ],
        [
         121.95,
         40.204
        ],
        [
         121.981,
         40.173
        ],
        [
         122.003,
         40.172
        ],
        [
         121.995,
         40.128
        ],
        [
         121.956,
         40.133
        ],
        [
         121.91,
         40.073
        ],
        [
         121.825,
         40.026
        ],
        [
         121.796,
         39.999
        ],
        [
         121.779,
         39.943
        ],
        [
         121.764,
         39.934
        ],
        [
         121.7,
         39.937
        ],
        [
         121.627,
         39.883
        ],
        [
         121.572,
         39.865
        ],
        [
         121.542,
         39.874
        ],
        [
         121.53,
         39.851
        ],
        [
         121.472,
         39.802
        ],
        [
         121.487,
         39.76
        ],
        [
         121.459,
         39.748
        ],
        [
         121.503,
         39.703
        ],
        [
         121.483,
         39.659
        ],
        [
         121.452,
         39.658
        ],
        [
         121.45,
         39.625
        ],
        [
         121.326,
         39.601
        ],
        [
         121.299,
         39.606
        ],
        [
         121.264,
         39.59
        ],
        [
         121.227,
         39.555
        ],
        [
         121.225,
         39.519
        ],
        [
         121.268,
         39.483
        ],
        [
         121.287,
         39.507
        ],
        [
         121.302,
         39.476
        ],
        [
         121.246,
         39.457
        ],
        [
         121.27,
         39.434
        ],
        [
         121.247,
         39.421
        ],
        [
         121.246,
         39.389
        ],
        [
         121.27,
         39.374
        ],
        [
         121.308,
         39.391
        ],
        [
         121.324,
         39.371
        ],
        [
         121.355,
         39.378
        ],
        [
         121.433,
         39.358
        ],
        [
         121.436,
         39.33
        ],
        [
         121.467,
         39.32
        ],
        [
         121.475,
         39.296
        ],
        [
         121.509,
         39.292
        ],
        [
         121.515,
         39.287
        ],
        [
         121.562,
         39.323
        ],
        [
         121.621,
         39.326
        ],
        [
         121.725,
         39.364
        ],
        [
         121.712,
         39.34
        ],
        [
         121.719,
         39.32
        ],
        [
         121.668,
         39.311
        ],
        [
         121.673,
         39.276
        ],
        [
         121.624,
         39.286
        ],
        [
         121.589,
         39.263
        ],
        [
         121.631,
         39.226
        ],
        [
         121.591,
         39.229
        ],
        [
         121.587,
         39.194
        ],
        [
         121.604,
         39.166
        ],
        [
         121.639,
         39.166
        ],
        [
         121.682,
         39.118
        ],
        [
         121.632,
         39.078
        ],
        [
         121.606,
         39.081
        ],
        [
         121.642,
         39.12
        ],
        [
         121.591,
         39.155
        ],
        [
         121.562,
         39.127
        ],
        [
         121.599,
         39.099
        ],
        [
         121.582,
         39.076
        ],
        [
         121.508,
         39.034
        ],
        [
         121.431,
         39.027
        ],
        [
         121.371,
         39.06
        ],
        [
         121.317,
         39.012
        ],
        [
         121.327,
         39.0
        ],
        [
         121.669,
         39.0
        ],
        [
         121.671,
         39.01
        ],
        [
         121.732,
         39.0
        ],
        [
         121.739,
         39.0
        ],
        [
         121.757,
         39.026
        ],
        [
         121.79,
         39.023
        ],
        [
         121.797,
         39.0
        ],
        [
         121.902,
         39.0
        ],
        [
         121.853,
         39.036
        ],
        [
         121.889,
         39.027
        ],
        [
         121.929,
         39.025
        ],
        [
         121.907,
         39.056
        ],
        [
         121.923,
         39.054
        ],
        [
         121.963,
         39.03
        ],
        [
         122.014,
         39.073
        ],
        [
         122.062,
         39.06
        ],
        [
         122.072,
         39.074
        ],
        [
         122.048,
         39.101
        ],
        [
         122.088,
         39.112
        ],
        [
         122.128,
         39.145
        ],
        [
         122.167,
         39.159
        ],
        [
         122.124,
         39.173
        ],
        [
         122.117,
         39.214
        ],
        [
         122.16,
         39.238
        ],
        [
         122.243,
         39.268
        ],
        [
         122.275,
         39.322
        ],
        [
         122.309,
         39.346
        ],
        [
         122.366,
         39.37
        ],
        [
         122.413,
         39.412
        ],
        [
         122.455,
         39.408
        ],
        [
         122.468,
         39.403
        ],
        [
         122.512,
         39.413
        ],
        [
         122.533,
         39.42
        ],
        [
         122.582,
         39.464
        ],
        [
         122.637,
         39.489
        ],
        [
         122.649,
         39.517
        ],
        [
         122.683,
         39.515
        ],
        [
         122.809,
         39.56
        ],
        [
         122.847,
         39.582
        ],
        [
         122.861,
         39.605
        ],
        [
         122.942,
         39.605
        ],
        [
         122.973,
         39.595
        ],
        [
         122.979,
         39.616
        ],
        [
         123.021,
         39.643
        ],
        [
         123.011,
         39.655
        ],
        [
         123.103,
         39.677
        ],
        [
         123.146,
         39.647
        ],
        [
         123.167,
         39.674
        ],
        [
         123.213,
         39.666
        ],
        [
         123.215,
         39.697
        ],
        [
         123.253,
         39.69
        ],
        [
         123.287,
         39.704
        ],
        [
         123.27,
         39.715
        ],
        [
         123.275,
         39.754
        ],
        [
         123.351,
         39.751
        ],
        [
         123.389,
         39.747
        ],
        [
         123.393,
         39.724
        ],
        [
         123.478,
         39.747
        ],
        [
         123.522,
         39.773
        ],
        [
         123.534,
         39.788
        ]
       ]
      ],
      [
       [
        [
         122.64,
         39.286
        ],
        [
         122.593,
         39.278
        ],
        [
         122.539,
         39.308
        ],
        [
         122.509,
         39.29
        ],
        [
         122.577,
         39.27
        ],
        [
         122.679,
         39.269
        ],
        [
         122.673,
         39.27
        ],
        [
         122.663,
         39.274
        ],
        [
         122.656,
         39.277
        ],
        [
         122.641,
         39.288
        ],
        [
         122.64,
         39.286
        ]
       ]
      ],
      [
       [
        [
         122.319,
         39.171
        ],
        [
         122.345,
         39.145
        ],
        [
         122.366,
         39.175
        ],
        [
         122.399,
         39.162
        ],
        [
         122.383,
         39.191
        ],
        [
         122.393,
         39.213
        ],
        [
         122.343,
         39.203
        ],
        [
         122.322,
         39.177
        ],
        [
         122.323,
         39.174
        ],
        [
         122.319,
         39.172
        ],
        [
         122.319,
         39.171
        ]
       ]
      ],
      [
       [
        [
         122.692,
         39.233
        ],
        [
         122.697,
         39.206
        ],
        [
         122.752,
         39.23
        ],
        [
         122.741,
         39.249
        ],
        [
         122.636,
         39.242
        ],
        [
         122.628,
         39.232
        ],
        [
         122.69,
         39.235
        ],
        [
         122.691,
         39.234
        ],
        [
         122.692,
         39.233
        ]
       ]
      ],
      [
       [
        [
         122.739,
         39.035
        ],
        [
         122.705,
         39.044
        ],
        [
         122.733,
         39.014
        ],
        [
         122.758,
         39.01
        ],
        [
         122.739,
         39.037
        ],
        [
         122.739,
         39.035
        ]
       ]
      ],
      [
       [
        [
         123.023,
         39.547
        ],
        [
         122.961,
         39.551
        ],
        [
         122.945,
         39.52
        ],
        [
         122.996,
         39.495
        ],
        [
         123.036,
         39.533
        ],
        [
         123.023,
         39.547
        ]
       ]
      ],
      [
       [
        [
         122.503,
         39.241
        ],
        [
         122.502,
         39.224
        ],
        [
         122.548,
         39.229
        ],
        [
         122.503,
         39.241
        ]
       ]
      ],
      [
       [
        [
         120.787,
         40.474
        ],
        [
         120.833,
         40.492
        ],
        [
         120.83,
         40.516
        ],
        [
         120.805,
         40.526
        ],
        [
         120.774,
         40.48
        ],
        [
         120.787,
         40.474
        ]
       ]
      ],
      [
       [
        [
         123.087,
         39.427
        ],
        [
         123.09,
         39.451
        ],
        [
         123.054,
         39.458
        ],
        [
         123.087,
         39.427
        ]
       ]
      ],
      [
       [
        [
         123.161,
         39.025
        ],
        [
         123.206,
         39.057
        ],
        [
         123.201,
         39.078
        ],
        [
         123.146,
         39.092
        ],
        [
         123.144,
         39.039
        ],
        [
         123.161,
         39.025
        ]
       ]
      ],
      [
       [
        [
         123.717,
         39.745
        ],
        [
         123.757,
         39.754
        ],
        [
         123.72,
         39.763
        ],
        [
         123.717,
         39.745
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         126.35,
         43.35
        ],
        [
         123.934,
         43.35
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.35,
         41.243
        ],
        [
         126.35,
         43.35
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.9,
       41.92
      ],
      [
       124.75,
       41.925
      ],
      [
       124.6,
       41.92
      ],
      [
       124.45,
       41.91
      ],
      [
       124.3,
       41.905
      ],
      [
       124.1,
       41.9
      ],
      [
       123.96,
       41.88
      ],
      [
       123.8,
       41.865
      ],
      [
       123.65,
       41.85
      ],
      [
       123.43,
       41.8
      ]
     ]
    },
    "n": "浑河",
    "approx": true,
    "note": "辽东主水系。源出清原，经抚顺、沈阳，西南入辽河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       125.35,
       41.98
      ],
      [
       125.2,
       41.92
      ],
      [
       125.03,
       41.85
      ],
      [
       124.85,
       41.86
      ],
      [
       124.65,
       41.88
      ],
      [
       124.45,
       41.9
      ],
      [
       124.28,
       41.92
      ]
     ]
    },
    "n": "苏子河",
    "approx": true,
    "note": "浑河支流，流经新宾（赫图阿拉附近），于抚顺关以东汇入浑河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.45,
       42.35
      ],
      [
       123.7,
       42.15
      ],
      [
       123.95,
       41.95
      ],
      [
       124.15,
       41.7
      ],
      [
       124.3,
       41.55
      ]
     ]
    },
    "n": "清河",
    "approx": true,
    "note": "浑河支流，流经铁岭—开原间，于调兵山以南汇入浑河。萨尔浒之战明军北线（清河堡）依此水。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.6,
       41.95
      ],
      [
       124.8,
       41.75
      ],
      [
       125.0,
       41.55
      ],
      [
       125.15,
       41.35
      ]
     ]
    },
    "n": "深河",
    "approx": true,
    "note": "苏子河支流，流经新宾东南，于旺清门以东汇入苏子河。本线为公开地理数据近似。"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.609,
       43.35
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.401,
       41.133
      ],
      [
       122.44,
       41.055
      ],
      [
       122.409,
       41.003
      ],
      [
       122.326,
       40.963
      ],
      [
       122.294,
       40.898
      ],
      [
       122.236,
       40.852
      ],
      [
       122.152,
       40.823
      ],
      [
       122.147,
       40.78
      ],
      [
       122.14,
       40.688
      ]
     ]
    },
    "n": "Liao"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       118.75,
       43.251
      ],
      [
       118.911,
       43.237
      ],
      [
       119.22,
       43.229
      ],
      [
       119.484,
       43.262
      ],
      [
       120.178,
       43.35
      ]
     ]
    },
    "n": "Xar Moron"
   }
  ],
  "lakes": [],
  "_bbox": [
   118.75,
   39.0,
   126.35,
   43.35
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
