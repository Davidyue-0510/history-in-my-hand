// 本文件由 tools/build.py 自动生成（切片 yixian），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yixian"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yixian"] = {
 "meta": {
  "kind": "county",
  "region": "jiangnan",
  "province": "anhui",
  "title": "黟县（皖南古村落·西递宏村·徽派）",
  "dossier_label": "黟县",
  "subtitle": "皖南山水 · 西递宏村 · 徽派建筑 · 儒商宗族",
  "primary_place": "yixian_cheng",
  "dossier_event": "event:ev_yixian_02",
  "vocab_pack": "yixian",
  "terrain_grid": "china_coarse",
  "lead": "黟县位于皖南山区，西递、宏村是明清徽州宗族聚落与徽派民居代表：1047 年胡氏建西递，1131 年汪氏营宏村并形成牛形水系，2000 年皖南古村落列入世界遗产。下方为建村、水系与申遗三条主线。",
  "parties_note": "史料以黟县志、徽州府志、新安理学辑录为本，UNESCO 为现代权威认定，学界考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_yixian_01": "西递胡氏建村",
   "event:ev_yixian_02": "宏村牛形水系",
   "event:ev_yixian_03": "皖南古村落列入世遗",
   "place:yixian_cheng": "黟县县城",
   "place:xidi": "西递",
   "place:hongcun": "宏村",
   "person:zhu_xi": "朱熹"
  },
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
    "note": "宗族制度+新安理学→徽州聚族而居、以礼制维系村落政治秩序"
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
    "note": "徽派建筑技术+牛形水系制度→黟县形成可防御、可耕作、可商贸的人居系统"
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
    "note": "徽商宗族+族田祠产→黟县人地紧张却保持社会稳定与文化再生产"
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
    "note": "皖南山间盆地+世界遗产认定→黟县从农业聚落转化为文化旅游节点"
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
  "page": "county.html?scene=yixian",
  "key": "yixian",
  "scene_id": "yixian"
 },
 "sources": [
  {
   "id": "yixian_zhi",
   "title": "黟县志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距明清村事约数十年至数百年",
   "stance_label": "地方志",
   "compiler": "《黟县志》（清/民及今纂）",
   "color": "#A0473A",
   "period": "清/民"
  },
  {
   "id": "huizhou_fuzhi",
   "title": "徽州府志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距明清徽商事约数十年至数百年",
   "stance_label": "地方志",
   "compiler": "《徽州府志》（清/民各版）",
   "color": "#A0473A",
   "period": "清/民"
  },
  {
   "id": "xin_an_lixue",
   "title": "徽州学术史·新安理学",
   "party": "后世官修",
   "distance_label": "近现代整理研究，距宋明理学事约数百年",
   "stance_label": "学术史辑录",
   "compiler": "新安理学与徽州学术史综合辑录",
   "color": "#A0473A",
   "period": "近现代"
  },
  {
   "id": "unesco_1002",
   "title": "UNESCO 皖南古村落 1002",
   "party": "国际机构",
   "distance_label": "2000 年认定，距村事为现代权威鉴定",
   "stance_label": "国际机构认定",
   "compiler": "UNESCO World Heritage Centre（编号 1002）",
   "color": "#5B7C99",
   "period": "今"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "徽州学与历史地理综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "xidi",
   "name": "西递",
   "lon": 117.9875,
   "lat": 29.904444,
   "type": "古村落",
   "modern": "安徽省黄山市黟县西递镇",
   "note": "UNESCO 皖南古村落 1002-001（N29°54′16.00″ E117°59′15.00″）。始建于北宋 1047，明清徽派民居、祠堂、牌坊保存完整。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心皖南古村落 1002-001 西递中心点",
   "elev": 420
  },
  {
   "id": "hongcun",
   "name": "宏村",
   "lon": 117.98408,
   "lat": 30.004863,
   "type": "古村落",
   "modern": "安徽省黄山市黟县宏村镇",
   "note": "UNESCO 皖南古村落 1002-002（N30°00′17.51″ E117°59′02.69″）。始建于南宋 1131，以牛形水系、月沼、南湖与徽派民居闻名。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心皖南古村落 1002-002 宏村中心点",
   "elev": 625
  },
  {
   "id": "yixian_cheng",
   "name": "黟县县城",
   "lon": 117.9302,
   "lat": 29.9331,
   "type": "县城",
   "modern": "安徽省黄山市黟县碧阳镇",
   "note": "黟县行政中心，处皖南山区盆地，西递、宏村分居县东南与东北（CHGIS V6 治所坐标，WGS84：黟县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：黟县（黟县治所）",
   "elev": 553
  },
  {
   "id": "huangshan",
   "name": "黄山",
   "lon": 118.155083,
   "lat": 30.145333,
   "type": "山脉",
   "modern": "安徽省黄山市黄山区",
   "note": "UNESCO 世界遗产 547bis（N30°08′43.20″ E118°09′18.30″），古称黟山，为皖南古村落的自然山水背景。",
   "geo_match": "unesco",
   "geo_note": "坐标取自 UNESCO 世界遗产中心黄山 547bis 中心点",
   "elev": 631
  },
  {
   "id": "xin_an_jiang",
   "name": "新安江",
   "lon": 117.95,
   "lat": 29.9,
   "type": "河流",
   "modern": "皖南出境至浙江千岛湖",
   "note": "新安江上游流经黟县一带，为皖南古村落提供水路通道与盆地灌溉。",
   "geo_match": "approx",
   "geo_note": "新安江上游黟县段近似坐标（117.95, 29.9）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 449
  },
  {
   "id": "leigangshan",
   "name": "雷岗山",
   "lon": 117.99,
   "lat": 30.01,
   "type": "山丘",
   "modern": "黟县宏村镇北侧",
   "note": "宏村北侧小山，宏村牛形水系布局中作“牛头”，与南湖、月沼共同构成风水格局。",
   "geo_match": "approx",
   "geo_note": "宏村北侧雷岗山近似坐标（117.99, 30.01）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 613
  }
 ],
 "persons": [
  {
   "id": "zhu_xi",
   "name": "朱熹",
   "role": "南宋·理学家·新安理学宗师",
   "side": "song",
   "note": "（1130–1200）祖籍徽州婺源，集理学之大成，创新安理学；其格物致知、修身齐家思想深刻影响徽州宗族伦理与徽商价值观。",
   "influence": 1
  },
  {
   "id": "bao_zhidao",
   "name": "鲍志道",
   "role": "清·徽州盐商代表",
   "side": "qing",
   "note": "（1723–1806）歙县棠樾人，清代著名盐商，以宗族网络经商致富，捐建祠堂、族田，体现徽商“贾而好儒”的社会理想；私人账本细节公开有限。",
   "influence": 1
  },
  {
   "id": "dai_zhen",
   "name": "戴震",
   "role": "清·考据学家·休宁人",
   "side": "qing",
   "note": "（1724–1777）休宁隆阜人，徽派朴学代表，精于考据、算学与音韵；其学术体现了徽州“儒商并重”地域文化中的理性批判传统。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "YX_R01",
   "subject": "place:yixian_cheng",
   "predicate": "位于皖南山区、黄山余脉西侧",
   "value_text": "黟县位于安徽省南端、黄山余脉西侧，西递处县东南部、宏村处县东北部，属皖南山区盆地。",
   "value": "",
   "source": "yixian_zhi",
   "layer": "record",
   "era": "明清",
   "place": "yixian_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "黟县位于安徽省南部、黄山市西麓，北接黄山区，南邻祁门，西递镇在县东南，宏村镇在县东北（《黟县志》/ 公开地理资料）。",
   "note": "地理形胜：皖南山间盆地。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_R02",
   "subject": "place:huangshan",
   "predicate": "黄山位于黟县东北、为古村自然背景",
   "value_text": "黄山（古称黟山）位于黟县东北，UNESCO 编号 547，为皖南古村落的自然山水背景。",
   "value": "",
   "source": "unesco_1002",
   "layer": "record",
   "era": "今",
   "place": "huangshan",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "Mount Huangshan（编号 547bis）位于中国安徽省，N30°08′43.20″ E118°09′18.30″，1990 年列入世界遗产名录（UNESCO World Heritage Centre）。",
   "note": "黄山古称黟山，黟县因山得名。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "国际机构",
   "_faction": null
  },
  {
   "id": "YX_R03",
   "subject": "event:ev_yixian_01",
   "predicate": "西递始建于北宋皇祐元年",
   "value_text": "西递始建于北宋皇祐元年（1047），胡氏族人迁入，明清徽派民居、祠堂、牌坊渐次扩建。",
   "value": "",
   "source": "yixian_zhi",
   "layer": "record",
   "era": "北宋",
   "place": "xidi",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "西递村始建于北宋皇祐元年（1047），胡氏始祖迁此，明清时期徽派民居大兴（《黟县志》/ 皖南古村落申遗文件）。",
   "note": "事件 + 建筑技术起点。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_R04",
   "subject": "event:ev_yixian_02",
   "predicate": "宏村始建于南宋绍兴元年并建牛形水系",
   "value_text": "宏村始建于南宋绍兴元年（1131），汪氏族人凿引西溪、建牛形水圳、月沼与南湖，为古代村落水系规划代表。",
   "value": "",
   "source": "yixian_zhi",
   "layer": "record",
   "era": "南宋",
   "place": "hongcun",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "宏村始建于南宋绍兴元年（1131），汪氏先祖凿引西溪之水，绕屋穿巷，成牛形水系，月沼为牛胃、南湖为牛肚（《黟县志》/ 申遗文件）。",
   "note": "事件 + 水利/规划技术。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_R05",
   "subject": "event:ev_yixian_03",
   "predicate": "皖南古村落列入世界遗产名录",
   "value_text": "2000 年 11 月皖南古村落（西递、宏村）列入 UNESCO《世界遗产名录》（编号 1002）。",
   "value": "",
   "source": "unesco_1002",
   "layer": "record",
   "era": "今",
   "place": "xidi",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "2000 年 11 月，皖南古村落—西递与宏村（编号 1002）列入《世界遗产名录》，首次将村落民居列入世界遗产（UNESCO World Heritage Centre）。",
   "note": "现代认定事件。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "国际机构",
   "_faction": null
  },
  {
   "id": "YX_R06",
   "subject": "place:xidi",
   "predicate": "西递以徽派民居、三雕、马头墙为特色",
   "value_text": "西递现存明清徽派民居、祠堂、牌坊，以砖雕、木雕、石雕（三雕）与马头墙为建筑特色。",
   "value": "",
   "source": "yixian_zhi",
   "layer": "record",
   "era": "明清",
   "place": "xidi",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "西递村保存明清古民居 124 幢，以黟县青石材、马头墙、砖木石雕为特色（《黟县志》/ 皖南古村落申遗文件）。",
   "note": "技术（建筑三雕）+ 思想（礼制空间）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_S01",
   "subject": "place:hongcun",
   "predicate": "宏村以牛形水系与天井民居闻名",
   "value_text": "宏村以牛形水系（水圳绕屋、月沼为中心、南湖为牛肚）与徽派天井民居闻名，体现风水与水利结合。",
   "value": "",
   "source": "xin_an_lixue",
   "layer": "scholarship",
   "era": "明清",
   "place": "hongcun",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "宏村水系呈牛形：雷岗山为牛头，古树为牛角，民居为牛身，水圳为牛肠，月沼为牛胃，南湖为牛肚，体现天人合一的风水理念（徽州建筑研究）。",
   "note": "技术（水系规划）+ 思想（风水）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_S02",
   "subject": "person:zhu_xi",
   "predicate": "新安理学以朱熹为宗、影响徽州宗族伦理",
   "value_text": "新安理学以朱熹为宗，强调格物致知、修身齐家，深刻影响徽州宗族伦理与社会规范。",
   "value": "",
   "source": "xin_an_lixue",
   "layer": "scholarship",
   "era": "南宋",
   "place": "yixian_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "朱熹祖籍徽州婺源，新安理学以程朱为宗，重义理、尚节孝，成为徽州宗族教化与社会规范的思想基础（徽州学术史）。",
   "note": "思想 + 制度（宗族伦理）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_S03",
   "subject": "person:bao_zhidao",
   "predicate": "徽商以宗族网络为纽带、贾而好儒",
   "value_text": "徽商以宗族网络为纽带，捐族田、建祠堂、兴文会，形成“贾而好儒”的商业社会。",
   "value": "",
   "source": "huizhou_fuzhi",
   "layer": "scholarship",
   "era": "清",
   "place": "yixian_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "徽商经商致富后，往往捐资助学、购置族田、修建祠堂，以宗族为网络，形成贾而好儒的社会风尚（《徽州府志》/ 徽商研究）。",
   "note": "社会（儒商宗族）。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "YX_I01",
   "subject": "place:yixian_cheng",
   "predicate": "山地盆地促使外出经商并回乡建聚落",
   "value_text": "黟县山地盆地相间、耕地有限，促使居民外出经商并回乡营建宗族聚落。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "yixian_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "黟县七山一水二分田，耕地紧张推动居民外出经商，盈利后返乡营建祠堂、民居与宗族聚落（学界综合推论）。",
   "note": "地理→制度/社会推力。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_I02",
   "subject": "place:hongcun",
   "predicate": "牛形水系也是宗族公产管理制度安排",
   "value_text": "宏村牛形水系不仅是水利技术，也是宗族共同管理公产（水圳、月沼、南湖）的制度安排。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "hongcun",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "宏村水系由汪氏宗族统一维护，月沼、南湖为公产，水圳放水有村规民约，体现技术工程与宗族制度的结合（学界综合推论）。",
   "note": "技术→制度。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_I03",
   "subject": "place:yixian_cheng",
   "predicate": "徽商以朱熹伦理为准则形成儒商理想",
   "value_text": "徽商“贾而好儒”，以朱熹伦理为行为准则，形成儒商结合的社会理想。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "yixian_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "徽商崇奉朱熹，以诚信、义利、节孝为经商伦理，形成“贾而好儒”的价值取向（学界综合推论）。",
   "note": "思想 + 社会。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_I04",
   "subject": "place:xidi",
   "predicate": "祠堂牌坊族田是宗族制度与礼制思想的物化空间",
   "value_text": "祠堂、牌坊、族田构成宗族制度与儒家礼制思想的物化空间，维系村落秩序。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "xidi",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "西递胡氏宗祠、刺史牌楼与族田共同构成宗法礼制的空间表达，强化宗族认同与社会秩序（学界综合推论）。",
   "note": "制度 + 思想。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_I05",
   "subject": "event:ev_yixian_03",
   "predicate": "世界遗产认定改变现代村落社会结构",
   "value_text": "世界遗产认定将西递宏村从农业聚落转化为文化旅游经济体，改变了现代村落社会结构。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "今",
   "place": "yixian_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "2000 年列入世遗后，西递宏村由传统农业聚落转向文化旅游地，居民生计、人口结构与村落治理随之变化（学界综合推论）。",
   "note": "事件 + 社会。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_G01",
   "subject": "place:xidi",
   "predicate": "西递早期民居营造匠作传承谱系缺系统考古报告",
   "value_text": "西递早期（北宋至明初）民居建筑的具体营造匠作与传承谱系，缺系统考古报告。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "xidi",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：早期营造史料的系统考古报告不足。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "西递北宋至明初民居的匠作源流、营造尺度与传承谱系",
    "skills": [
     "建筑史",
     "徽派建筑",
     "考古学"
    ],
    "accept": "若有早期建筑考古报告或匠作题记，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_G02",
   "subject": "place:yixian_cheng",
   "predicate": "明清族田契约原件公开不足",
   "value_text": "明清黟县宗族内部土地交易与族田管理的实际契约原件公开不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "yixian_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：族田/宗族经济的一手契约档案。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "明清黟县宗族族田、祠产与内部土地交易的原始契约",
    "skills": [
     "社会经济史",
     "契约文书",
     "徽州文书"
    ],
    "accept": "若有徽州文书数据库或黟县宗族契约整理，可补制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "YX_G03",
   "subject": "person:bao_zhidao",
   "predicate": "鲍志道私人文书账目与社交网络档案有限",
   "value_text": "鲍志道等个体徽商的私人文书、往来账目与社交网络细节，公开档案有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "清",
   "place": "yixian_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：个体徽商经营与网络细节。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "鲍志道等徽商个体盐商的私人文书、账簿与社交网络",
    "skills": [
     "徽商史",
     "盐业史",
     "人物传记"
    ],
    "accept": "若有私家账簿、往来书信或盐务档案整理，可补社会(4)层人物断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "YX_G01",
  "YX_G02",
  "YX_G03"
 ],
 "events": [
  {
   "id": "ev_yixian_01",
   "year": 1047,
   "era": "皇祐元年",
   "kind": "建村",
   "title": "西递胡氏建村",
   "place": "xidi",
   "text": "北宋皇祐元年（1047）胡氏族人迁入西递，历经宋元营建，明清时形成今日徽派民居、祠堂、牌坊林立的聚落格局。",
   "subject": "event:ev_yixian_01"
  },
  {
   "id": "ev_yixian_02",
   "year": 1131,
   "era": "绍兴元年",
   "kind": "建村",
   "title": "宏村始建与牛形水系",
   "place": "hongcun",
   "text": "南宋绍兴元年（1131）汪氏族人迁居宏村，历时数百年开凿引西溪之水，形成牛形水系（水圳为牛肠、月沼为牛胃、南湖为牛肚），为徽州村落水利规划之代表。",
   "subject": "event:ev_yixian_02"
  },
  {
   "id": "ev_yixian_03",
   "year": 2000,
   "era": "2000年",
   "kind": "认定",
   "title": "皖南古村落列入世界遗产",
   "place": "xidi",
   "text": "2000 年 11 月，联合国教科文组织将皖南古村落—西递与宏村列入《世界遗产名录》（编号 1002），首次把村落民居列入世界遗产，肯定其人居文化与徽派建筑价值。",
   "subject": "event:ev_yixian_03"
  }
 ],
 "edges": [
  {
   "from": "xidi",
   "to": "yixian_cheng",
   "kind": "within",
   "note": "西递位于黟县县城东南方向",
   "label": "",
   "type": "misc"
  },
  {
   "from": "hongcun",
   "to": "yixian_cheng",
   "kind": "within",
   "note": "宏村位于黟县县城东北方向",
   "label": "",
   "type": "misc"
  },
  {
   "from": "huangshan",
   "to": "yixian_cheng",
   "kind": "near",
   "note": "黄山位于黟县东北，为皖南古村落提供自然背景",
   "label": "",
   "type": "misc"
  },
  {
   "from": "xin_an_jiang",
   "to": "yixian_cheng",
   "kind": "drainage",
   "note": "新安江上游水系流经黟县盆地",
   "label": "",
   "type": "misc"
  },
  {
   "from": "leigangshan",
   "to": "hongcun",
   "kind": "adjacent",
   "note": "雷岗山位于宏村北侧，为牛形水系风水格局中的牛头",
   "label": "",
   "type": "misc"
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
   "国际机构",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "国际机构": "国际机构",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "国际机构": "#5B7C99",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_国际机构": {
    "name": "国际机构",
    "macro_party": "国际机构",
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
   "f_国际机构": "#5B7C99",
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
        116.93,
        28.9
       ],
       [
        116.93,
        31.145
       ],
       [
        119.155,
        31.145
       ],
       [
        119.155,
        28.9
       ],
       [
        116.93,
        28.9
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
         119.155,
         28.9
        ],
        [
         119.155,
         30.3
        ],
        [
         119.127,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.063,
         30.305
        ],
        [
         118.989,
         30.332
        ],
        [
         118.954,
         30.36
        ],
        [
         118.88,
         30.315
        ],
        [
         118.878,
         30.283
        ],
        [
         118.905,
         30.216
        ],
        [
         118.93,
         30.203
        ],
        [
         118.853,
         30.167
        ],
        [
         118.852,
         30.15
        ],
        [
         118.895,
         30.149
        ],
        [
         118.874,
         30.115
        ],
        [
         118.879,
         30.065
        ],
        [
         118.903,
         30.029
        ],
        [
         118.895,
         29.938
        ],
        [
         118.839,
         29.935
        ],
        [
         118.841,
         29.891
        ],
        [
         118.741,
         29.815
        ],
        [
         118.745,
         29.739
        ],
        [
         118.701,
         29.706
        ],
        [
         118.647,
         29.643
        ],
        [
         118.62,
         29.654
        ],
        [
         118.574,
         29.638
        ],
        [
         118.532,
         29.589
        ],
        [
         118.5,
         29.576
        ],
        [
         118.496,
         29.519
        ],
        [
         118.382,
         29.505
        ],
        [
         118.348,
         29.474
        ],
        [
         118.33,
         29.495
        ],
        [
         118.306,
         29.479
        ],
        [
         118.316,
         29.423
        ],
        [
         118.248,
         29.431
        ],
        [
         118.193,
         29.395
        ],
        [
         118.205,
         29.344
        ],
        [
         118.167,
         29.314
        ],
        [
         118.178,
         29.298
        ],
        [
         118.139,
         29.284
        ],
        [
         118.078,
         29.291
        ],
        [
         118.074,
         29.217
        ],
        [
         118.042,
         29.21
        ],
        [
         118.028,
         29.168
        ],
        [
         118.045,
         29.149
        ],
        [
         118.038,
         29.102
        ],
        [
         118.076,
         29.075
        ],
        [
         118.067,
         29.054
        ],
        [
         118.098,
         28.999
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.134,
         28.984
        ],
        [
         118.165,
         28.987
        ],
        [
         118.228,
         28.942
        ],
        [
         118.196,
         28.904
        ],
        [
         118.27,
         28.919
        ],
        [
         118.276,
         28.9
        ],
        [
         119.155,
         28.9
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
         116.93,
         31.145
        ],
        [
         116.93,
         29.643
        ],
        [
         116.94,
         29.649
        ],
        [
         116.975,
         29.657
        ],
        [
         116.996,
         29.683
        ],
        [
         117.042,
         29.681
        ],
        [
         117.113,
         29.712
        ],
        [
         117.108,
         29.752
        ],
        [
         117.137,
         29.775
        ],
        [
         117.123,
         29.799
        ],
        [
         117.073,
         29.832
        ],
        [
         117.127,
         29.862
        ],
        [
         117.13,
         29.899
        ],
        [
         117.172,
         29.921
        ],
        [
         117.217,
         29.927
        ],
        [
         117.246,
         29.915
        ],
        [
         117.262,
         29.881
        ],
        [
         117.253,
         29.835
        ],
        [
         117.293,
         29.823
        ],
        [
         117.339,
         29.848
        ],
        [
         117.359,
         29.813
        ],
        [
         117.382,
         29.841
        ],
        [
         117.415,
         29.851
        ],
        [
         117.409,
         29.802
        ],
        [
         117.455,
         29.749
        ],
        [
         117.454,
         29.688
        ],
        [
         117.49,
         29.66
        ],
        [
         117.53,
         29.654
        ],
        [
         117.524,
         29.63
        ],
        [
         117.543,
         29.589
        ],
        [
         117.609,
         29.591
        ],
        [
         117.648,
         29.615
        ],
        [
         117.679,
         29.595
        ],
        [
         117.69,
         29.556
        ],
        [
         117.73,
         29.55
        ],
        [
         117.795,
         29.571
        ],
        [
         117.873,
         29.548
        ],
        [
         117.934,
         29.549
        ],
        [
         118.004,
         29.578
        ],
        [
         118.043,
         29.566
        ],
        [
         118.051,
         29.543
        ],
        [
         118.095,
         29.534
        ],
        [
         118.144,
         29.49
        ],
        [
         118.128,
         29.472
        ],
        [
         118.136,
         29.419
        ],
        [
         118.193,
         29.395
        ],
        [
         118.248,
         29.431
        ],
        [
         118.316,
         29.423
        ],
        [
         118.306,
         29.479
        ],
        [
         118.33,
         29.495
        ],
        [
         118.348,
         29.474
        ],
        [
         118.382,
         29.505
        ],
        [
         118.496,
         29.519
        ],
        [
         118.5,
         29.576
        ],
        [
         118.532,
         29.589
        ],
        [
         118.574,
         29.638
        ],
        [
         118.62,
         29.654
        ],
        [
         118.647,
         29.643
        ],
        [
         118.701,
         29.706
        ],
        [
         118.745,
         29.739
        ],
        [
         118.741,
         29.815
        ],
        [
         118.841,
         29.891
        ],
        [
         118.839,
         29.935
        ],
        [
         118.895,
         29.938
        ],
        [
         118.903,
         30.029
        ],
        [
         118.879,
         30.065
        ],
        [
         118.874,
         30.115
        ],
        [
         118.895,
         30.149
        ],
        [
         118.852,
         30.15
        ],
        [
         118.853,
         30.167
        ],
        [
         118.93,
         30.203
        ],
        [
         118.905,
         30.216
        ],
        [
         118.878,
         30.283
        ],
        [
         118.88,
         30.315
        ],
        [
         118.954,
         30.36
        ],
        [
         118.989,
         30.332
        ],
        [
         119.063,
         30.305
        ],
        [
         119.092,
         30.324
        ],
        [
         119.127,
         30.305
        ],
        [
         119.155,
         30.3
        ],
        [
         119.155,
         31.145
        ],
        [
         116.93,
         31.145
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
         118.193,
         29.395
        ],
        [
         118.136,
         29.419
        ],
        [
         118.128,
         29.472
        ],
        [
         118.144,
         29.49
        ],
        [
         118.095,
         29.534
        ],
        [
         118.051,
         29.543
        ],
        [
         118.043,
         29.566
        ],
        [
         118.004,
         29.578
        ],
        [
         117.934,
         29.549
        ],
        [
         117.873,
         29.548
        ],
        [
         117.795,
         29.571
        ],
        [
         117.73,
         29.55
        ],
        [
         117.69,
         29.556
        ],
        [
         117.679,
         29.595
        ],
        [
         117.648,
         29.615
        ],
        [
         117.609,
         29.591
        ],
        [
         117.543,
         29.589
        ],
        [
         117.524,
         29.63
        ],
        [
         117.53,
         29.654
        ],
        [
         117.49,
         29.66
        ],
        [
         117.454,
         29.688
        ],
        [
         117.455,
         29.749
        ],
        [
         117.409,
         29.802
        ],
        [
         117.415,
         29.851
        ],
        [
         117.382,
         29.841
        ],
        [
         117.359,
         29.813
        ],
        [
         117.339,
         29.848
        ],
        [
         117.293,
         29.823
        ],
        [
         117.253,
         29.835
        ],
        [
         117.262,
         29.881
        ],
        [
         117.246,
         29.915
        ],
        [
         117.217,
         29.927
        ],
        [
         117.172,
         29.921
        ],
        [
         117.13,
         29.899
        ],
        [
         117.127,
         29.862
        ],
        [
         117.073,
         29.832
        ],
        [
         117.123,
         29.799
        ],
        [
         117.137,
         29.775
        ],
        [
         117.108,
         29.752
        ],
        [
         117.113,
         29.712
        ],
        [
         117.042,
         29.681
        ],
        [
         116.996,
         29.683
        ],
        [
         116.975,
         29.657
        ],
        [
         116.94,
         29.649
        ],
        [
         116.93,
         29.643
        ],
        [
         116.93,
         28.9
        ],
        [
         118.276,
         28.9
        ],
        [
         118.27,
         28.919
        ],
        [
         118.196,
         28.904
        ],
        [
         118.228,
         28.942
        ],
        [
         118.165,
         28.987
        ],
        [
         118.134,
         28.984
        ],
        [
         118.115,
         29.01
        ],
        [
         118.115,
         29.01
        ],
        [
         118.098,
         28.999
        ],
        [
         118.067,
         29.054
        ],
        [
         118.076,
         29.075
        ],
        [
         118.038,
         29.102
        ],
        [
         118.045,
         29.149
        ],
        [
         118.028,
         29.168
        ],
        [
         118.042,
         29.21
        ],
        [
         118.074,
         29.217
        ],
        [
         118.078,
         29.291
        ],
        [
         118.139,
         29.284
        ],
        [
         118.178,
         29.298
        ],
        [
         118.167,
         29.314
        ],
        [
         118.205,
         29.344
        ],
        [
         118.193,
         29.395
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        116.93,
        30.419
       ],
       [
        116.972,
        30.446
       ],
       [
        117.13,
        30.491
       ],
       [
        117.212,
        30.552
       ],
       [
        117.217,
        30.629
       ],
       [
        117.247,
        30.674
       ],
       [
        117.327,
        30.695
       ],
       [
        117.605,
        30.776
       ],
       [
        117.725,
        30.886
       ],
       [
        117.78,
        31.052
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
        117.975,
        31.145
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [],
  "_bbox": [
   116.93,
   28.9,
   119.155,
   31.145
  ]
 }
};
