// 本文件由 tools/build.py 自动生成（切片 guisui），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guisui"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guisui"] = {
 "meta": {
  "kind": "county",
  "region": "fusion",
  "province": "neimenggu",
  "title": "归绥（隆庆和议·旅蒙商·蒙汉交融）",
  "dossier_label": "归绥",
  "subtitle": "明隆庆和议 · 俺答筑归化城 · 大召弘法 · 清绥远城 · 张库大道枢纽",
  "primary_place": "guisui_cheng",
  "dossier_event": "event:ev_guisui_01",
  "vocab_pack": "guisui",
  "terrain_grid": "china_coarse",
  "lead": "归化城位于土默特川、阴山南麓，明隆庆和议后俺答汗受封顺义王、筑城弘法，清建绥远城以控漠南；张库大道（张家口—库伦—恰克图）以此为枢纽，旅蒙商号大盛魁纵横草原。下方为封贡、筑城、驻防三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以明史、明实录、蒙古源流、清史稿等后世官修为本，归绥县志、内蒙古通志、旅蒙商史料与地方志作补充，现代考订为学界视角；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_guisui_01": "隆庆和议",
   "event:ev_guisui_02": "筑归化城",
   "event:ev_guisui_03": "清建绥远城",
   "place:guisui_cheng": "归化城",
   "person:an_da": "俺答汗"
  },
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
    "note": "隆庆和议封贡互市、绥远军府建制，将漠南蒙古纳入中原王朝政治秩序"
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
    "note": "张库大道与马市构成草原—中原物流与商旅网络"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "板升聚落、晋商移民与蒙汉错居，形成北疆多元社会"
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
    "note": "阴山南麓控扼游牧—农耕过渡带，为明清北疆锁钥"
   }
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "page": "county.html?scene=guisui",
  "key": "guisui",
  "scene_id": "guisui"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百四十八·张春传／卷二百七十一·祖大寿传",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239",
   "note": "清修官史，记大凌河筑城、长山之败、祖大寿杀何可纲降清，偏清方视角。"
  },
  {
   "id": "qingshigao",
   "title": "清史稿",
   "party": "清修官史",
   "stance_label": "民国未定稿·清方立场",
   "distance_label": "成书 1928（民国未定稿），距所记明清战事约 280–300 年",
   "color": "#7B5C3E",
   "compiler": "赵尔巽等",
   "period": "清末/民国",
   "note": "藩部传、地理志、兵志载木兰秋狝、外八庙政治象征与土尔扈特东归，为后朝综合史料。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "潮州史与海上丝路综合研究",
   "color": "#2E7D8F",
   "period": "今"
  },
  {
   "id": "ming_shilu",
   "title": "明实录",
   "party": "明·官修",
   "stance_label": "明朝官修编年实录",
   "distance_label": "明代历朝官修，距所记时事近",
   "color": "#B23A48",
   "compiler": "明代史官（历朝实录）",
   "period": "明",
   "note": "明代历朝实录，记隆庆和议、俺答封贡、边政与板升农业，为明代当代/近当代官修史料。"
  },
  {
   "id": "guisui_zhi",
   "title": "归绥县志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距明清归化城数百年",
   "color": "#A0473A",
   "compiler": "《归绥县志》（清修）",
   "period": "清/民",
   "note": "归绥地方志，载归化城、绥远城、召庙、土默特川与社会沿革。"
  },
  {
   "id": "neimenggu_tongzhi",
   "title": "内蒙古通志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "近现代编纂，距明清土默特数百年",
   "color": "#A0473A",
   "compiler": "《内蒙古通志》",
   "period": "近现代",
   "note": "内蒙古通志，载民族分布、农牧交错与社会经济。"
  },
  {
   "id": "menggu_yuanliu",
   "title": "蒙古源流",
   "party": "清·官修",
   "stance_label": "蒙古编年史",
   "distance_label": "清康熙年间官修蒙文编年史，距蒙古帝国数百年",
   "color": "#6C7A89",
   "compiler": "萨囊彻辰等（清）",
   "period": "清",
   "note": "清康熙年间官修蒙文编年史，记蒙古源流、俺答汗事迹与土默特部史。"
  },
  {
   "id": "lvmengshang",
   "title": "旅蒙商史料·大盛魁",
   "party": "学界",
   "stance_label": "商业史/档案整理",
   "distance_label": "现代学界基于档案与口述整理，距清代商号百余年",
   "color": "#2E7D8F",
   "compiler": "大盛魁研究/晋商史料整理",
   "period": "今",
   "note": "旅蒙商大盛魁档案、晋商口述与商业史研究，为归绥作为张库大道枢纽的学界视角。"
  }
 ],
 "places": [
  {
   "id": "guisui_cheng",
   "name": "归化城（库库和屯·今呼和浩特老城）",
   "lon": 111.751,
   "lat": 40.841,
   "type": "capital",
   "modern": "今内蒙古呼和浩特市玉泉区、新城区一带",
   "note": "明隆庆和议后，俺答汗筑库库和屯，明赐名归化；清绥远城在其东北。蒙汉商贾辐辏，北疆军政与互市中心。坐标取呼和浩特老城，approx（城镇级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城镇级精度），待 CHGIS 精修",
   "elev": 1146
  },
  {
   "id": "dazhao",
   "name": "大召（无量寺）",
   "lon": 111.673,
   "lat": 40.795,
   "type": "religious",
   "modern": "今呼和浩特市玉泉区大召前街",
   "note": "明万历七年俺答汗主持兴建，为呼和浩特最早藏传佛教格鲁派寺院，蒙藏佛教与中原礼义交汇之地。坐标取大召，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（景区级精度），待 CHGIS 精修",
   "elev": 1091
  },
  {
   "id": "suiyuan_cheng",
   "name": "绥远城（将军衙署）",
   "lon": 111.773,
   "lat": 40.858,
   "type": "fort",
   "modern": "今呼和浩特市新城区绥远城旧址",
   "note": "清乾隆四年建绥远城，设绥远将军驻防，为清经略漠南蒙古、控扼归化的军政中心。坐标取将军衙署，approx。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城内点位精度），待 CHGIS 精修",
   "elev": 1180
  },
  {
   "id": "tumote_plain",
   "name": "土默特川（板升聚落）",
   "lon": 111.6,
   "lat": 40.65,
   "type": "settlement",
   "modern": "今内蒙古土默特左旗—托克托县一带",
   "note": "土默特部驻牧之地，明中叶后出现「板升」农业聚落，蒙汉错居、农牧并营。坐标取土默特川中部，approx（平原级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（平原级精度），待 CHGIS 精修",
   "elev": 1057
  },
  {
   "id": "yinshan",
   "name": "阴山（大青山段）",
   "lon": 111.3,
   "lat": 41.05,
   "type": "mountain",
   "modern": "今内蒙古大青山—阴山山脉中段",
   "note": "阴山横亘漠南，为游牧与农耕分界线，归化城屏其南。坐标取大青山中段，approx（山脉级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（山脉级精度），待 CHGIS 精修",
   "elev": 1650
  }
 ],
 "persons": [
  {
   "id": "an_da",
   "name": "俺答汗",
   "era": "明",
   "role": "土默特部首领·顺义王",
   "note": "土默特部杰出首领，隆庆五年受明封顺义王，筑归化城、开马市，推动蒙汉互市与藏传佛教在蒙古传播。",
   "influence": 1
  },
  {
   "id": "san_niangzi",
   "name": "三娘子",
   "era": "明",
   "role": "俺答汗妻·掌归化权柄",
   "note": "俺答汗妻，掌归化城权柄数十年，主互市、约束部众，为隆庆和议后蒙汉和平的关键人物。",
   "influence": 1
  },
  {
   "id": "ba_han_na_ji",
   "name": "把汉那吉",
   "era": "明",
   "role": "俺答孙·降明引发和议",
   "note": "俺答汗孙，因家内纠纷降明，引发明廷与俺答谈判，最终促成隆庆和议、封贡互市。",
   "influence": 0
  },
  {
   "id": "qian_long",
   "name": "乾隆帝",
   "era": "清",
   "role": "清高宗·建绥远城",
   "note": "清代皇帝，乾隆四年建绥远城、设绥远将军，强化对漠南蒙古的军政控制。",
   "influence": 0
  },
  {
   "id": "wang_xiangqing",
   "name": "王相卿",
   "era": "清",
   "role": "大盛魁创始人·旅蒙商",
   "note": "清代山西太谷人，随军贸易入蒙，后创办大盛魁商号，为归绥—库伦—恰克图张库大道上的旅蒙商代表。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "YG_R01",
   "subject": "event:ev_guisui_01",
   "predicate": "封贡互市",
   "value_text": "明隆庆五年封俺答汗为顺义王，开放大同、宣府、山西等处马市，蒙汉停战通商",
   "value": 1571,
   "source": "mingshi",
   "layer": "record",
   "era": "明隆庆五年",
   "place": "guisui_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史·鞑靼传：隆庆五年，封俺答为顺义王，开市大同、宣府、山西）",
   "note": "明史·鞑靼传",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "YG_R02",
   "subject": "event:ev_guisui_02",
   "predicate": "筑城弘法",
   "value_text": "明万历三年，俺答汗筑库库和屯，明赐名归化，城内建大召（无量寺），延请活佛赐名",
   "value": 1575,
   "source": "menggu_yuanliu",
   "layer": "record",
   "era": "明万历三年",
   "place": "guisui_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（蒙古源流：俺答汗建库库和屯，皈依佛法）",
   "note": "蒙古源流；明史·鞑靼传",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "清·官修",
   "_faction": null
  },
  {
   "id": "YG_R03",
   "subject": "event:ev_guisui_03",
   "predicate": "建城驻防",
   "value_text": "清乾隆四年于归化城东北建绥远城，设绥远将军、理事同知，统辖漠南蒙古西部诸盟旗",
   "value": 1739,
   "source": "qingshigao",
   "layer": "record",
   "era": "清乾隆四年",
   "place": "suiyuan_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（清史稿·地理志：绥远城，乾隆四年筑）",
   "note": "清史稿·地理志/兵志",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "YG_R04",
   "subject": "place:dazhao",
   "predicate": "召庙始建",
   "value_text": "大召（无量寺）为呼和浩特最早藏传佛教格鲁派寺院，明万历年间始建",
   "value": 1580,
   "source": "guisui_zhi",
   "layer": "record",
   "era": "明",
   "place": "dazhao",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（归绥县志：大召始建于明万历年间）",
   "note": "归绥县志；大召寺志",
   "dims": [
    5,
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YG_R05",
   "subject": "place:tumote_plain",
   "predicate": "板升农耕",
   "value_text": "土默特川在明中叶后出现「板升」农业聚落，蒙汉错居、农牧并营",
   "value": null,
   "source": "ming_shilu",
   "layer": "record",
   "era": "明",
   "place": "tumote_plain",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "（明实录：边外板升，华夷杂处，垦田为业）",
   "note": "明实录；明代蒙古史",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "明·官修",
   "_faction": null
  },
  {
   "id": "YG_R06",
   "subject": "place:suiyuan_cheng",
   "predicate": "军府",
   "value_text": "绥远城设绥远将军驻防，为清代北疆军政重镇，控扼归化与漠南蒙古",
   "value": null,
   "source": "qingshigao",
   "layer": "record",
   "era": "清",
   "place": "suiyuan_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（清史稿·兵志：绥远将军驻绥远城）",
   "note": "清史稿·兵志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "YG_S01",
   "subject": "place:guisui_cheng",
   "predicate": "民族融合",
   "value_text": "隆庆和议后归化城成为蒙汉互市中心，蒙藏佛教与中原礼义交汇，民族融合显著",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "归化城是明清北疆民族融合的典型场域。",
   "note": "学界考证：民族融合",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_S02",
   "subject": "place:dazhao",
   "predicate": "佛教中心",
   "value_text": "大召的建立使归化城成为漠南蒙古藏传佛教传播中心，影响及于蒙古诸部",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "dazhao",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "大召为漠南蒙古格鲁派传播重镇。",
   "note": "学界考证：蒙古佛教史",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_S03",
   "subject": "person:an_da",
   "predicate": "封贡",
   "value_text": "俺答汗受封顺义王、开马市，是明蒙关系由战争转向互市的关键",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "俺答封贡改变明蒙北疆格局。",
   "note": "学界考证：隆庆和议",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_S04",
   "subject": "place:tumote_plain",
   "predicate": "蒙汉农耕",
   "value_text": "土默特川板升聚落体现蒙汉农牧并营、族群错居的社会形态",
   "value": null,
   "source": "neimenggu_tongzhi",
   "layer": "scholarship",
   "era": "今",
   "place": "tumote_plain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "土默特川板升为蒙汉杂处、农牧交错。",
   "note": "内蒙古通志；社会史",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YG_S05",
   "subject": "person:wang_xiangqing",
   "predicate": "旅蒙商",
   "value_text": "王相卿创办大盛魁，以归绥为基地，经营归化—库伦—恰克图商路",
   "value": null,
   "source": "lvmengshang",
   "layer": "scholarship",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（大盛魁档案：王相卿创号于归化）",
   "note": "旅蒙商史料；晋商研究",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_S06",
   "subject": "person:san_niangzi",
   "predicate": "维护互市",
   "value_text": "三娘子掌归化权柄数十年，约束部众、维护马市，为隆庆和议后和平的保障",
   "value": null,
   "source": "mingshi",
   "layer": "scholarship",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史：三娘子主互市，诸部奉号令）",
   "note": "明史·鞑靼传",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "YG_S07",
   "subject": "place:yinshan",
   "predicate": "农牧交界",
   "value_text": "阴山—大青山为游牧与农耕地理分界线，归化城位于其南麓过渡带",
   "value": null,
   "source": "neimenggu_tongzhi",
   "layer": "scholarship",
   "era": "今",
   "place": "yinshan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "阴山为农牧分界线。",
   "note": "内蒙古通志；历史地理",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YG_I01",
   "subject": "place:guisui_cheng",
   "predicate": "商路枢纽",
   "value_text": "归化城位于张库大道（张家口—库伦—恰克图）南端，为草原丝绸之路与旅蒙商枢纽",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "guisui_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据晋商与旅蒙商史推断",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_I02",
   "subject": "place:suiyuan_cheng",
   "predicate": "军事地理",
   "value_text": "绥远城与归化城犄角相望，清以北疆军府控扼漠南蒙古与西北通道",
   "value": null,
   "source": "qingshigao",
   "layer": "inference",
   "era": "推算",
   "place": "suiyuan_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据清史稿·兵志推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "YG_I03",
   "subject": "place:tumote_plain",
   "predicate": "制度",
   "value_text": "板升农业聚落处于土默特部领地与明边之间，形成蒙汉共耕、土流并行的基层治理",
   "value": null,
   "source": "ming_shilu",
   "layer": "inference",
   "era": "推算",
   "place": "tumote_plain",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据明实录推断",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "明·官修",
   "_faction": null
  },
  {
   "id": "YG_I04",
   "subject": "place:guisui_cheng",
   "predicate": "社会",
   "value_text": "封贡互市吸引晋商、移民、工匠聚于归化，汉蒙满回杂处，市井与庙会并兴",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "guisui_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据城市社会史推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_I05",
   "subject": "person:an_da",
   "predicate": "思想符号",
   "value_text": "俺答汗皈依藏传佛教、延请活佛，使佛教成为凝聚蒙古诸部的思想纽带",
   "value": null,
   "source": "menggu_yuanliu",
   "layer": "inference",
   "era": "推算",
   "place": "guisui_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据蒙古源流推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "清·官修",
   "_faction": null
  },
  {
   "id": "YG_G01",
   "subject": "place:tumote_plain",
   "predicate": "早期板升",
   "value_text": "板升聚落早期人口构成、田亩与赋役制度史缺详载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "tumote_plain",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    4,
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "土默特川早期板升聚落",
    "skills": [
     "历史地理",
     "民族史"
    ],
    "accept": "需明实录、方志与考古互证"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YG_G02",
   "subject": "place:guisui_cheng",
   "predicate": "城址沿革",
   "value_text": "归化城与绥远城历代城垣范围、城门与街巷沿革无精确考古报告",
   "value": null,
   "source": "guisui_zhi",
   "layer": "gap",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "归绥城垣考古",
    "skills": [
     "考古",
     "方志"
    ],
    "accept": "需城市考古与测绘报告"
   },
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YG_G03",
   "subject": "person:wang_xiangqing",
   "predicate": "商号档案",
   "value_text": "大盛魁早期账本、信稿与合伙契约多有散佚，王相卿个人行迹多赖口述",
   "value": null,
   "source": "lvmengshang",
   "layer": "gap",
   "era": "今",
   "place": "guisui_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "大盛魁早期档案",
    "skills": [
     "商业史",
     "档案学"
    ],
    "accept": "需原始账册、碑刻与家族口述"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YG_G01",
  "YG_G02",
  "YG_G03"
 ],
 "events": [
  {
   "id": "ev_guisui_01",
   "year": 1571,
   "era": "明隆庆五年",
   "kind": "封贡互市",
   "title": "隆庆和议·俺答封贡",
   "place": "guisui_cheng",
   "text": "明隆庆五年，封俺答汗为顺义王，开放大同、宣府、山西等处马市；俺答汗接受明朝封号，俺答妻三娘子主互市，蒙汉停战通商。此为明代北疆「隆庆和议」，归化城遂为互市中心。",
   "subject": "event:ev_guisui_01"
  },
  {
   "id": "ev_guisui_02",
   "year": 1575,
   "era": "明万历三年",
   "kind": "建城弘法",
   "title": "俺答汗筑归化城",
   "place": "guisui_cheng",
   "text": "明万历三年，俺答汗于土默特川筑库库和屯（青色的城），明廷赐名归化。俺答汗皈依藏传佛教，于城内建大召（无量寺），延请索南嘉措活佛赐名，归化城成为漠南蒙古政治、宗教与商贸枢纽。",
   "subject": "event:ev_guisui_02"
  },
  {
   "id": "ev_guisui_03",
   "year": 1739,
   "era": "清乾隆四年",
   "kind": "建城驻防",
   "title": "清建绥远城",
   "place": "suiyuan_cheng",
   "text": "清乾隆四年，于归化城东北建绥远城，设绥远将军、理事同知，统辖漠南蒙古西部诸盟旗。绥远城为清代北疆军政重镇，与归化城并称「归绥」，旅蒙商号大盛魁等以此为大本营。",
   "subject": "event:ev_guisui_03"
  }
 ],
 "edges": [
  {
   "from": "guisui_cheng",
   "to": "dazhao",
   "type": "mem",
   "label": "大召在归化城内，为漠南蒙古最早格鲁派寺院"
  },
  {
   "from": "guisui_cheng",
   "to": "suiyuan_cheng",
   "type": "mil",
   "label": "绥远城在归化城东北，清北疆军府与归化城并称"
  },
  {
   "from": "guisui_cheng",
   "to": "tumote_plain",
   "type": "geo",
   "label": "归化城位于土默特川，板升农耕与游牧错居"
  },
  {
   "from": "guisui_cheng",
   "to": "yinshan",
   "type": "geo",
   "label": "阴山屏其北，为游牧—农耕过渡带"
  },
  {
   "from": "dazhao",
   "to": "suiyuan_cheng",
   "type": "mem",
   "label": "召庙与军府并立，宗教—军政共塑归绥"
  }
 ],
 "control": [],
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
   "清修·明臣",
   "清修官史",
   "学界",
   "明·官修",
   "后世官修",
   "清·官修"
  ],
  "party_bucket": {
   "清修·明臣": "清修·明臣",
   "清修官史": "清修官史",
   "学界": "学界",
   "明·官修": "明·官修",
   "后世官修": "后世官修",
   "清·官修": "清·官修"
  },
  "party_colors": {
   "清修·明臣": "#8C6239",
   "清修官史": "#7B5C3E",
   "学界": "#2E7D8F",
   "明·官修": "#B23A48",
   "后世官修": "#A0473A",
   "清·官修": "#6C7A89"
  },
  "factions": {
   "f_清修·明臣": {
    "name": "清修·明臣",
    "macro_party": "清修·明臣",
    "note": "auto"
   },
   "f_清修官史": {
    "name": "清修官史",
    "macro_party": "清修官史",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   },
   "f_明·官修": {
    "name": "明·官修",
    "macro_party": "明·官修",
    "note": "auto"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_清·官修": {
    "name": "清·官修",
    "macro_party": "清·官修",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_清修·明臣": "#8C6239",
   "f_清修官史": "#7B5C3E",
   "f_学界": "#2E7D8F",
   "f_明·官修": "#B23A48",
   "f_后世官修": "#A0473A",
   "f_清·官修": "#6C7A89"
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
        110.3,
        39.65
       ],
       [
        110.3,
        42.05
       ],
       [
        112.773,
        42.05
       ],
       [
        112.773,
        39.65
       ],
       [
        110.3,
        39.65
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
         112.773,
         39.65
        ],
        [
         112.773,
         40.178
        ],
        [
         112.744,
         40.167
        ],
        [
         112.712,
         40.179
        ],
        [
         112.63,
         40.236
        ],
        [
         112.512,
         40.269
        ],
        [
         112.456,
         40.3
        ],
        [
         112.418,
         40.295
        ],
        [
         112.349,
         40.257
        ],
        [
         112.31,
         40.256
        ],
        [
         112.3,
         40.211
        ],
        [
         112.233,
         40.17
        ],
        [
         112.232,
         40.133
        ],
        [
         112.183,
         40.084
        ],
        [
         112.182,
         40.061
        ],
        [
         112.142,
         40.027
        ],
        [
         112.133,
         40.002
        ],
        [
         112.076,
         39.919
        ],
        [
         112.042,
         39.886
        ],
        [
         112.013,
         39.827
        ],
        [
         111.97,
         39.797
        ],
        [
         111.96,
         39.693
        ],
        [
         111.925,
         39.667
        ],
        [
         111.93,
         39.65
        ],
        [
         111.568,
         39.65
        ],
        [
         111.526,
         39.662
        ],
        [
         111.497,
         39.662
        ],
        [
         111.469,
         39.65
        ],
        [
         112.773,
         39.65
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
        110.3,
        42.05
       ],
       [
        110.3,
        39.65
       ],
       [
        111.469,
        39.65
       ],
       [
        111.497,
        39.662
       ],
       [
        111.526,
        39.662
       ],
       [
        111.568,
        39.65
       ],
       [
        111.93,
        39.65
       ],
       [
        111.925,
        39.667
       ],
       [
        111.96,
        39.693
       ],
       [
        111.97,
        39.797
       ],
       [
        112.013,
        39.827
       ],
       [
        112.042,
        39.886
       ],
       [
        112.076,
        39.919
       ],
       [
        112.133,
        40.002
       ],
       [
        112.142,
        40.027
       ],
       [
        112.182,
        40.061
       ],
       [
        112.183,
        40.084
       ],
       [
        112.232,
        40.133
       ],
       [
        112.233,
        40.17
       ],
       [
        112.3,
        40.211
       ],
       [
        112.31,
        40.256
       ],
       [
        112.349,
        40.257
       ],
       [
        112.418,
        40.295
       ],
       [
        112.456,
        40.3
       ],
       [
        112.512,
        40.269
       ],
       [
        112.63,
        40.236
       ],
       [
        112.712,
        40.179
       ],
       [
        112.744,
        40.167
       ],
       [
        112.773,
        40.178
       ],
       [
        112.773,
        42.05
       ],
       [
        110.3,
        42.05
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.3,
        40.485
       ],
       [
        110.303,
        40.484
       ],
       [
        110.505,
        40.373
       ],
       [
        110.675,
        40.302
       ],
       [
        110.811,
        40.271
       ],
       [
        110.919,
        40.266
       ],
       [
        110.996,
        40.286
       ],
       [
        111.125,
        40.235
       ],
       [
        111.307,
        40.11
       ],
       [
        111.407,
        40.013
       ],
       [
        111.426,
        39.942
       ],
       [
        111.416,
        39.867
       ],
       [
        111.378,
        39.789
       ],
       [
        111.385,
        39.718
       ],
       [
        111.437,
        39.653
       ],
       [
        111.437,
        39.65
       ]
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   110.3,
   39.65,
   112.773,
   42.05
  ]
 }
};
