// 本文件由 tools/build.py 自动生成（切片 dali），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["dali"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["dali"] = {
 "meta": {
  "kind": "county",
  "region": "yunnan",
  "province": "yunnan",
  "title": "大理（苍洱之地·南诏大理国）",
  "dossier_label": "大理",
  "subtitle": "苍山洱海 · 南诏统一 · 大理国都 · 佛儒并存",
  "primary_place": "dali_cheng",
  "dossier_event": "event:ev_dali_02",
  "vocab_pack": "dali",
  "terrain_grid": "china_coarse",
  "lead": "大理地处云南西部苍洱之间，738 年南诏统一六诏、937 年段思平建大理国、1253 年蒙古灭大理。下方为统一、建国与灭亡三条主线。",
  "parties_note": "史料以大理府志、蛮书、元史为本，现代考订作学界补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_dali_01": "统一六诏",
   "event:ev_dali_02": "建大理国",
   "event:ev_dali_03": "蒙古灭大理",
   "place:dali_cheng": "大理城",
   "place:taihe_cheng": "太和城",
   "person:duansiping": "段思平"
  },
  "epoch": "song",
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
    "note": "佛儒并存+六赕/部落混合治理→南诏大理国长期维持边疆自治"
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
    "note": "苍山—洱海走廊的农耕/渔猎/冶金技术+都邑制度→支撑地方政权"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     3
    ],
    "layer": "inference",
    "note": "白蛮/乌蛮/三十七部多元族群+段高联姻→边疆贵族社会"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "苍洱形胜+唐/吐蕃/宋三方博弈→南诏大理维持西南缓冲"
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
  "page": "county.html?scene=dali",
  "key": "dali",
  "scene_id": "dali"
 },
 "sources": [
  {
   "id": "dali_fuzhi",
   "title": "大理府志",
   "party": "后世官修",
   "distance_label": "明/清屡修，距南诏大理事约 500–1000 年",
   "stance_label": "地方志·后世官修",
   "compiler": "《大理府志》（明李元阳本及清续修本）",
   "color": "#A0473A",
   "period": "明/清"
  },
  {
   "id": "man_shu",
   "title": "蛮书（云南志）",
   "party": "唐·私修",
   "distance_label": "唐樊绰撰（咸通，约 860），距南诏事约数十年至百余年",
   "stance_label": "唐私修西南边疆志",
   "compiler": "樊绰（唐）",
   "color": "#8E7CC3",
   "period": "唐"
  },
  {
   "id": "yuan_shi",
   "title": "元史",
   "party": "明修官史",
   "distance_label": "1369 年修成，距元亡仅一年但史源杂糅未及考订",
   "stance_label": "后朝官修·仓促成书",
   "compiler": "宋濂等",
   "color": "#6C5C3E",
   "period": "明修"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "南诏大理国与云南历史综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "dali_cheng",
   "name": "大理城（大理古城）",
   "lon": 100.267,
   "lat": 25.606,
   "type": "capital",
   "modern": "今云南大理白族自治州大理市大理镇",
   "note": "大理国后期都城所在，明清大理府城。古城核心在苍山—洱海之间。",
   "geo_note": "approx·公开地理数据（城市级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 2250
  },
  {
   "id": "yangjumie",
   "name": "羊苴咩城（大理国都）",
   "lon": 100.255,
   "lat": 25.603,
   "type": "capital",
   "modern": "今大理古城西北约一公里",
   "note": "大理国都城遗址，段思平937年定都于此。现存地表遗迹不彰。",
   "geo_note": "approx·公开地理数据（遗址级，地表遗迹不显），待考古精修",
   "geo_match": "approx",
   "elev": 2308
  },
  {
   "id": "taihe_cheng",
   "name": "太和城（南诏都城）",
   "lon": 100.197,
   "lat": 25.636,
   "type": "capital",
   "modern": "今大理市太和街道太和村西（苍山佛顶峰麓）",
   "note": "南诏统一六诏后都城，全国重点文物保护单位。坐标据大理市文物保护单位列表（25°38′10.50″N 100°11′49.52″E）。",
   "geo_note": "权威源·大理市文物保护单位列表/云南省全国重点文物保护单位列表，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 2548
  },
  {
   "id": "chongsheng_si",
   "name": "崇圣寺三塔",
   "lon": 100.146,
   "lat": 25.708,
   "type": "temple",
   "modern": "今大理市大理镇三文笔村北",
   "note": "南诏—大理国佛教建筑群，第一批全国重点文物保护单位。坐标据云南省全国重点文物保护单位列表（25°42′30.56″N 100°8′45.38″E）。",
   "geo_note": "权威源·云南省全国重点文物保护单位列表，精度遗址级",
   "geo_match": "exact_web_heritage_db",
   "elev": 2603
  },
  {
   "id": "cangshan",
   "name": "苍山",
   "lon": 100.1,
   "lat": 25.6,
   "type": "mountain",
   "modern": "今大理市西侧苍山山脉",
   "note": "大理城西侧屏障，点苍山为南诏大理国史事与景观核心。",
   "geo_note": "approx·公开地理数据（山脉级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 3069
  },
  {
   "id": "erhai",
   "name": "洱海",
   "lon": 100.2,
   "lat": 25.77,
   "type": "lake",
   "modern": "今大理白族自治州洱海",
   "note": "高原断陷湖，南诏大理都城均沿湖分布，为农耕、渔猎与交通所资。",
   "geo_note": "approx·公开地理数据（湖泊级），待CHGIS精修",
   "geo_match": "approx",
   "elev": 2378
  }
 ],
 "persons": [
  {
   "id": "piluoge",
   "name": "皮罗阁",
   "role": "南诏王·云南王",
   "side": "nanzhao",
   "note": "（？—748）南诏第四代王，唐开元二十六年（738）统一六诏，受唐玄宗册封云南王，迁都太和城。",
   "influence": 0
  },
  {
   "id": "duansiping",
   "name": "段思平",
   "role": "大理国太祖",
   "side": "dali",
   "note": "（893—944）大理国建立者，937年灭大义宁，定都羊苴咩城，以佛治国。",
   "influence": 0
  },
  {
   "id": "gaoshengtai",
   "name": "高升泰",
   "role": "大理国权臣·大中帝",
   "side": "dali",
   "note": "（？—1096）大理国权臣，1094年废段氏自立，改国号大中，1096年临终前还政段氏。",
   "influence": 0
  },
  {
   "id": "hubilie",
   "name": "忽必烈",
   "role": "元世祖",
   "side": "yuan",
   "note": "（1215—1294）元宪宗三年（1253）率军攻灭大理国，后开创元朝云南行省制度。",
   "influence": 0
  },
  {
   "id": "duanxingzhi",
   "name": "段兴智",
   "role": "大理国末代君主",
   "side": "dali",
   "note": "（？—1260）大理国末代国王，1253年降元，后任大理总管，段氏世袭云南总管始于此。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "DL_R01",
   "subject": "place:dali_cheng",
   "predicate": "地理形胜",
   "value_text": "大理城位于云南西部，苍山与洱海之间，为西南边陲形胜之地",
   "value": null,
   "source": "dali_fuzhi",
   "layer": "record",
   "era": "南诏大理",
   "place": "dali_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "大理……背负点苍，面临洱海。",
   "note": "大理府志·舆地；苍山洱海为城市骨架",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DL_R02",
   "subject": "event:ev_dali_01",
   "predicate": "统一六诏",
   "value_text": "唐开元二十六年（738），皮罗阁兼并五诏，统一六诏，唐玄宗册封其为云南王",
   "value": 738,
   "source": "man_shu",
   "layer": "record",
   "era": "开元二十六年",
   "place": "taihe_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "（皮罗阁）并五诏，封云南王。",
   "note": "樊绰蛮书·云南志；新唐书·南诏传",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "唐·私修",
   "_faction": null
  },
  {
   "id": "DL_R03",
   "subject": "event:ev_dali_02",
   "predicate": "建大理国",
   "value_text": "后晋天福二年（937），段思平灭大义宁，建大理国，定都羊苴咩城",
   "value": 937,
   "source": "dali_fuzhi",
   "layer": "record",
   "era": "天福二年",
   "place": "yangjumie",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "段思平立大理国，都羊苴咩城。",
   "note": "大理府志·沿革；转述待核",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DL_R04",
   "subject": "event:ev_dali_03",
   "predicate": "蒙古灭大理",
   "value_text": "元宪宗三年（1253），忽必烈率军攻灭大理国，段兴智降，后设云南行省",
   "value": 1253,
   "source": "yuan_shi",
   "layer": "record",
   "era": "宪宗三年",
   "place": "dali_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "（忽必烈）入大理，段兴智降。",
   "note": "元史·世祖纪；大理国亡",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "DL_R05",
   "subject": "place:chongsheng_si",
   "predicate": "佛教密宗",
   "value_text": "崇圣寺三塔始建于南诏劝丰佑时期，为佛教密宗（阿吒力教）兴盛之证",
   "value": null,
   "source": "dali_fuzhi",
   "layer": "record",
   "era": "南诏",
   "place": "chongsheng_si",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "三塔在崇圣寺前，南诏时建。",
   "note": "大理府志·寺观；全国重点文物保护单位",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DL_R06",
   "subject": "place:taihe_cheng",
   "predicate": "制度",
   "value_text": "南诏以六赕、部落与仿唐郡县混合治理大理地区",
   "value": null,
   "source": "man_shu",
   "layer": "record",
   "era": "唐",
   "place": "taihe_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "六赕，南诏所置也。",
   "note": "蛮书·云南志；转述待核",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "唐·私修",
   "_faction": null
  },
  {
   "id": "DL_S01",
   "subject": "place:dali_cheng",
   "predicate": "族群社会",
   "value_text": "白蛮、乌蛮及三十七部共同构成南诏大理多元族群社会",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "dali_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "学界民族史综合",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_S02",
   "subject": "place:chongsheng_si",
   "predicate": "思想底色",
   "value_text": "阿吒力教（滇密）在大理国为官方佛教，兼融儒释道",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "chongsheng_si",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "学界宗教史综合",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_S03",
   "subject": "event:ev_dali_02",
   "predicate": "高升泰篡位",
   "value_text": "1094年高升泰改国号大中，1096年临终前还政段氏",
   "value": 1094,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "dali_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "学界系年略有异说",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_I01",
   "subject": "place:erhai",
   "predicate": "地理形胜",
   "value_text": "苍山—洱海走廊兼具农耕、渔猎与军事防御功能，为都城选址根基",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "erhai",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据地形与南诏大理都城变迁推断",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_I02",
   "subject": "place:taihe_cheng",
   "predicate": "建筑技术",
   "value_text": "南诏大理佛塔与建筑技术承唐代风格，又具地方特色",
   "value": null,
   "source": "dali_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "taihe_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据崇圣寺三塔形制与建筑史推断",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "DL_I03",
   "subject": "person:duansiping",
   "predicate": "社会结构",
   "value_text": "段氏与高氏联姻构成大理国统治核心，反映边疆贵族政治",
   "value": null,
   "source": "yuan_shi",
   "layer": "inference",
   "era": "推算",
   "place": "dali_cheng",
   "confidence": 0.75,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据元史段氏传与大理世系推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "DL_I04",
   "subject": "place:dali_cheng",
   "predicate": "思想底色",
   "value_text": "本主信仰、佛教密宗与儒教并存，形成边疆融合思想格局",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "dali_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据多教遗迹与民族史推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_I05",
   "subject": "place:dali_cheng",
   "predicate": "制度",
   "value_text": "大理国以释儒阶层参与政务，体现边疆政权汉化与本土化并行",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "dali_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据大理国制度史研究推断",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_G01",
   "subject": "place:taihe_cheng",
   "predicate": "城址结构",
   "value_text": "太和城与羊苴咩城城墙、宫殿、街坊的具体结构与范围，考古与文献缺载",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "taihe_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    2,
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "太和城/羊苴咩城城址考古",
    "skills": [
     "考古",
     "方志"
    ],
    "accept": "需大理地区考古报告与方志互证"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_G02",
   "subject": "place:dali_cheng",
   "predicate": "三十七部",
   "value_text": "三十七部具体名称、分布与联盟机制史料残缺，仅见概称",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "今",
   "place": "dali_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "三十七部族名、地望与联盟",
    "skills": [
     "考据",
     "民族史"
    ],
    "accept": "需大理国碑刻、元史与地方志对勘"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "DL_G03",
   "subject": "event:ev_dali_03",
   "predicate": "入滇路线",
   "value_text": "1253年蒙古入大理之具体行军路线、兵力与战损不明",
   "value": null,
   "source": "yuan_shi",
   "layer": "gap",
   "era": "今",
   "place": "dali_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "蒙古灭大理行军路线与兵力",
    "skills": [
     "考据",
     "军事史"
    ],
    "accept": "需元史、地方志与GIS对勘"
   },
   "_party": "明修官史",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "DL_G01",
  "DL_G02",
  "DL_G03"
 ],
 "events": [
  {
   "id": "ev_dali_01",
   "year": 738,
   "era": "唐开元二十六年",
   "kind": "统一",
   "title": "南诏统一六诏·封云南王",
   "place": "taihe_cheng",
   "text": "南诏王皮罗阁在唐朝支持下兼并五诏，统一洱海地区。唐玄宗册封其为云南王，以太和城为都，开启南诏与唐、吐蕃三方博弈的西南格局。",
   "subject": "event:ev_dali_01"
  },
  {
   "id": "ev_dali_02",
   "year": 937,
   "era": "后晋天福二年",
   "kind": "建国",
   "title": "段思平建大理国",
   "place": "yangjumie",
   "text": "段思平灭大义宁，建大理国，定都羊苴咩城（今大理古城西北）。大理国承南诏疆域，以佛治国，与宋保持臣属而实则自治的关系。",
   "subject": "event:ev_dali_02"
  },
  {
   "id": "ev_dali_03",
   "year": 1253,
   "era": "元宪宗三年",
   "kind": "灭亡",
   "title": "蒙古灭大理·云南行省",
   "place": "dali_cheng",
   "text": "忽必烈率蒙古军迂回攻灭大理国，末代君主段兴智降。元朝随后设云南行省，大理结束地方政权独立地位，但段氏仍受世袭总管。",
   "subject": "event:ev_dali_03"
  }
 ],
 "edges": [
  {
   "from": "taihe_cheng",
   "to": "dali_cheng",
   "type": "admin",
   "label": "南诏自太和城向羊苴咩城—大理城一线迁都、扩展"
  },
  {
   "from": "yangjumie",
   "to": "dali_cheng",
   "type": "admin",
   "label": "大理国都城羊苴咩城即今大理古城西北"
  },
  {
   "from": "cangshan",
   "to": "dali_cheng",
   "type": "geo",
   "label": "苍山屏障大理城西侧"
  },
  {
   "from": "erhai",
   "to": "dali_cheng",
   "type": "geo",
   "label": "洱海供给农耕渔猎，都城沿湖选址"
  },
  {
   "from": "cangshan",
   "to": "erhai",
   "type": "geo",
   "label": "苍山—洱海走廊构成盆地核心"
  },
  {
   "from": "dali_cheng",
   "to": "chongsheng_si",
   "type": "mem",
   "label": "崇圣寺三塔为大理国佛教中心遗迹"
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
   "后世官修",
   "唐·私修",
   "明修官史",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "唐·私修": "唐·私修",
   "明修官史": "明修官史",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "唐·私修": "#8E7CC3",
   "明修官史": "#6C5C3E",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_唐·私修": {
    "name": "唐·私修",
    "macro_party": "唐·私修",
    "note": "auto"
   },
   "f_明修官史": {
    "name": "明修官史",
    "macro_party": "明修官史",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A",
   "f_唐·私修": "#8E7CC3",
   "f_明修官史": "#6C5C3E",
   "f_学界": "#2E7D8F"
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
        99.1,
        24.6
       ],
       [
        99.1,
        26.77
       ],
       [
        101.267,
        26.77
       ],
       [
        101.267,
        24.6
       ],
       [
        99.1,
        24.6
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
         101.267,
         24.6
        ],
        [
         101.267,
         26.77
        ],
        [
         99.1,
         26.77
        ],
        [
         99.1,
         24.6
        ],
        [
         101.267,
         24.6
        ]
       ]
      ]
     ]
    },
    "n": "云南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       101.175,
       24.6
      ],
      [
       101.118,
       24.655
      ],
      [
       100.931,
       24.891
      ],
      [
       100.812,
       25.003
      ],
      [
       100.76,
       24.993
      ],
      [
       100.642,
       25.021
      ],
      [
       100.459,
       25.088
      ],
      [
       100.351,
       25.15
      ],
      [
       100.303,
       25.235
      ],
      [
       100.183,
       25.443
      ]
     ]
    },
    "n": "Hong"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        100.409,
        26.77
       ],
       [
        100.411,
        26.691
       ],
       [
        100.444,
        26.499
       ],
       [
        100.449,
        26.378
       ],
       [
        100.425,
        26.326
       ],
       [
        100.428,
        26.279
       ],
       [
        100.459,
        26.236
       ],
       [
        100.582,
        26.203
       ],
       [
        100.798,
        26.178
       ],
       [
        100.961,
        26.211
       ],
       [
        101.071,
        26.301
       ],
       [
        101.2,
        26.357
       ],
       [
        101.267,
        26.368
       ]
      ]
     ]
    },
    "n": "Jinsha"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       99.158,
       26.77
      ],
      [
       99.124,
       26.632
      ],
      [
       99.114,
       26.531
      ],
      [
       99.135,
       26.498
      ],
      [
       99.141,
       26.38
      ],
      [
       99.134,
       26.176
      ],
      [
       99.139,
       26.021
      ],
      [
       99.157,
       25.918
      ],
      [
       99.213,
       25.792
      ],
      [
       99.31,
       25.644
      ],
      [
       99.341,
       25.521
      ],
      [
       99.308,
       25.423
      ],
      [
       99.341,
       25.315
      ],
      [
       99.44,
       25.198
      ],
      [
       99.525,
       25.129
      ],
      [
       99.599,
       25.109
      ],
      [
       99.7,
       25.017
      ],
      [
       99.828,
       24.853
      ],
      [
       99.939,
       24.762
      ],
      [
       100.031,
       24.743
      ],
      [
       100.087,
       24.718
      ],
      [
       100.106,
       24.687
      ],
      [
       100.14,
       24.69
      ],
      [
       100.187,
       24.727
      ],
      [
       100.251,
       24.747
      ],
      [
       100.332,
       24.75
      ],
      [
       100.418,
       24.682
      ],
      [
       100.474,
       24.6
      ]
     ]
    },
    "n": "Lancang"
   }
  ],
  "lakes": [],
  "_bbox": [
   99.1,
   24.6,
   101.267,
   26.77
  ]
 }
};
