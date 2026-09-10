// 本文件由 tools/build.py 自动生成（切片 lushan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["lushan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["lushan"] = {
 "meta": {
  "kind": "county",
  "region": "jiangnan",
  "province": "jiangxi",
  "title": "庐山（净土祖庭·白鹿洞·牯岭）",
  "dossier_label": "庐山",
  "subtitle": "断块名山 · 净土源 · 白鹿洞书院 · 中西别墅",
  "primary_place": "lushan_mountain",
  "dossier_event": "event:ev_lushan_02",
  "vocab_pack": "lushan",
  "terrain_grid": "china_coarse",
  "lead": "庐山位于江西北临长江、东濒鄱阳湖，为地垒式断块山。东晋元兴元年（402）慧远于东林寺倡净土、结白莲社，庐山成中国净土宗发源地；南宋淳熙六年（1179）朱熹知南康军复兴白鹿洞书院、订《揭示》，成天下书院圭臬；清季九江开埠后西人建牯岭别墅群，庐山成近代中西交融避暑地。庐山1996年列入UNESCO（875）。",
  "parties_note": "史料以庐山志为本，慧远集/朱文公文集为东晋宋私修，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_lushan_01": "慧远立教",
   "event:ev_lushan_02": "朱熹兴学",
   "event:ev_lushan_03": "牯岭别墅",
   "place:lushan_mountain": "庐山",
   "person:zhu_xi": "朱熹"
  },
  "epoch": "cross_dynastic",
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
    "note": "书院学规+朱子理学+释道儒叠合→庐山文化圣山秩序"
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
    "note": "牯岭别墅+九江码头+江湖转运→庐山中西交融与转运枢纽"
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
    "note": "净土信众网络+书院文教+避暑社会→多元社会汇聚"
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
    "note": "长江—鄱阳湖口+立教兴学事件→庐山控赣北江湖与信仰重心"
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
  "page": "county.html?scene=lushan",
  "key": "lushan",
  "scene_id": "lushan"
 },
 "sources": [
  {
   "id": "lushan_zhi",
   "title": "庐山志",
   "party": "后世官修",
   "distance_label": "明清屡修山志，距东晋净土与南宋书院事数百年至千余年",
   "stance_label": "山志/地方志",
   "compiler": "《庐山志》及庐山专志（明清官修）",
   "color": "#C0703A",
   "period": "明清"
  },
  {
   "id": "huiyuan_ji",
   "title": "慧远集（东林典籍）",
   "party": "东晋·私修",
   "distance_label": "慧远（东晋）自撰及弟子辑，距净土立教事为当时人记当时事",
   "stance_label": "东晋僧人文集",
   "compiler": "慧远（东晋）及弟子",
   "color": "#9B7CC3",
   "period": "东晋"
  },
  {
   "id": "zhu_xi_ji",
   "title": "朱文公文集",
   "party": "宋·私修",
   "distance_label": "朱熹（宋）自撰及门人编，距白鹿洞书院事为当时人记当时事",
   "stance_label": "宋人文集",
   "compiler": "朱熹（宋）及门人",
   "color": "#8E7CC3",
   "period": "宋"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "庐山文化景观与宗教史综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "lushan_mountain",
   "name": "庐山（含牯岭）",
   "lon": 29.55,
   "lat": 115.98,
   "type": "山/文化景观",
   "modern": "江西省九江市庐山市",
   "note": "地垒式断块山，北临长江、东濒鄱阳湖，雄奇险秀，1996年作为文化景观列入UNESCO世界遗产（编号875）；自东晋起释道儒与近代中西名胜叠合。",
   "geo_match": "approx",
   "geo_note": "庐山（牯岭一带）近似坐标（29.55, 115.98），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "bailudong",
   "name": "白鹿洞书院",
   "lon": 29.47,
   "lat": 116.02,
   "type": "书院",
   "modern": "庐山市海会镇",
   "note": "南宋朱熹复兴，后世称「天下书院之首」，其《白鹿洞书院揭示》为天下学规圭臬。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "donglin_temple",
   "name": "东林寺",
   "lon": 29.58,
   "lat": 115.98,
   "type": "寺院",
   "modern": "庐山市温泉镇",
   "note": "东晋慧远驻锡之地，结白莲社、倡净土，被奉为净土宗祖庭。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "poyang_lake",
   "name": "鄱阳湖（含湖口）",
   "lon": 29.45,
   "lat": 116.05,
   "type": "湖泊",
   "modern": "江西省北部（庐山以东）",
   "note": "中国最大淡水湖，汇赣江等水入长江，湖口为江湖交汇处，扼赣北水利与转运。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "guling",
   "name": "牯岭（近代别墅群）",
   "lon": 29.57,
   "lat": 115.97,
   "type": "城镇/建筑群",
   "modern": "庐山牯岭镇",
   "note": "清季九江开埠后西人购地建避暑别墅群，集英、美、法等国样式，为中西建筑与避暑文化交汇标本。",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "jiujiang",
   "name": "九江（长江码头）",
   "lon": 29.72,
   "lat": 115.99,
   "type": "城/码头",
   "modern": "江西省九江市",
   "note": "当长江与鄱阳湖口，为赣北水陆枢纽、米茶集散与转运码头，扼江湖之咽。",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "hui_yuan",
   "name": "慧远",
   "role": "东晋·东林寺·净土宗初祖",
   "side": "dongjin",
   "note": "（334—416）雁门楼烦人，东晋高僧，驻锡庐山东林寺，倡弥陀净土、结白莲社，被奉为净土宗初祖。",
   "influence": 0
  },
  {
   "id": "zhu_xi",
   "name": "朱熹",
   "role": "南宋·白鹿洞书院·理学集大成",
   "side": "song",
   "note": "（1130—1200）婺源人，南宋理学家，淳熙间知南康军复兴白鹿洞书院、订《揭示》，奠定后世书院学规。",
   "influence": 1
  },
  {
   "id": "mao_zedong",
   "name": "毛泽东",
   "role": "现代·庐山会议",
   "side": "prc",
   "note": "（1893—1976）20世纪三次中共中央庐山会议（1959/1961/1970）均于庐山召开，使庐山兼具国是象征。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "LS_R01",
   "subject": "place:lushan_mountain",
   "predicate": "庐山为断块山，临江濒湖、雄奇险秀",
   "value_text": "庐山为地垒式断块山，北临长江、东濒鄱阳湖，云海峰峦雄奇险秀，自东晋起即为释道儒与近代中西名胜。",
   "value": "",
   "source": "lushan_zhi",
   "layer": "record",
   "era": "东晋—今",
   "place": "lushan_mountain",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "庐山据江汉之口，濒彭蠡之滨，奇秀甲天下，释道儒迹与近现代别墅并陈（《庐山志》/ 地志）。",
   "note": "地理形胜：断块山—江湖之会。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LS_R02",
   "subject": "event:ev_lushan_01",
   "predicate": "慧远倡净土、结白莲社，庐山成净土宗发源地",
   "value_text": "东晋元兴元年（402）慧远于东林寺倡弥陀净土、结白莲社，庐山遂为中国净土宗发源地。",
   "value": "",
   "source": "huiyuan_ji",
   "layer": "record",
   "era": "东晋",
   "place": "donglin_temple",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "慧远法师居东林，结白莲社，倡净土法门，后世奉为莲宗初祖，庐山由是称净土源（《慧远集》/ 庐山志）。",
   "note": "事件 + 思想（净土宗）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "东晋·私修",
   "_faction": null
  },
  {
   "id": "LS_R03",
   "subject": "event:ev_lushan_02",
   "predicate": "朱熹复兴白鹿洞书院、订《揭示》",
   "value_text": "南宋淳熙六年（1179）朱熹知南康军，复兴白鹿洞书院、订《白鹿洞书院揭示》，成天下书院学规圭臬。",
   "value": "",
   "source": "zhu_xi_ji",
   "layer": "record",
   "era": "南宋",
   "place": "bailudong",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "朱子守南康，兴复白鹿洞书院，揭「父子有亲、君臣有义」之教，为后世学规所宗（朱文公文集/ 庐山志）。",
   "note": "事件 + 思想（书院学规）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "LS_R04",
   "subject": "place:bailudong",
   "predicate": "白鹿洞书院为天下书院之首",
   "value_text": "白鹿洞书院经朱熹复兴，后世称「天下书院之首」，明清遍设书院多奉其学规。",
   "value": "",
   "source": "lushan_zhi",
   "layer": "record",
   "era": "南宋—清",
   "place": "bailudong",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "白鹿洞书院，朱子复兴，与睢阳、岳麓、应天并称，而规条独为天下式（《庐山志》/ 书院史）。",
   "note": "制度（书院）+ 思想。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LS_R05",
   "subject": "event:ev_lushan_03",
   "predicate": "九江开埠后西人建牯岭别墅群",
   "value_text": "清季九江开埠后，西人于牯岭购地建避暑别墅群，庐山成近代中西交融的避暑与疗养地。",
   "value": "",
   "source": "lushan_zhi",
   "layer": "record",
   "era": "清—近代",
   "place": "guling",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "九江开埠，西人避暑庐山，筑屋牯岭，中西庐舍错落，为江右通商以来新象（庐山志/ 近代史料）。",
   "note": "事件 + 社会（中西交融）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LS_R06",
   "subject": "place:jiujiang",
   "predicate": "九江当江湖之口，为赣北水陆枢纽",
   "value_text": "九江当长江与鄱阳湖口，为赣北水陆枢纽、米茶集散与转运码头，扼江湖之咽。",
   "value": "",
   "source": "lushan_zhi",
   "layer": "record",
   "era": "汉—清",
   "place": "jiujiang",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "九江控江汉之冲，通彭蠡之漕，米茶辐辏，为江右门户（《庐山志》/ 九江府志）。",
   "note": "地理（江湖枢纽）+ 技术（码头转运）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LS_S01",
   "subject": "place:donglin_temple",
   "predicate": "东林净土信仰远播东亚",
   "value_text": "东林寺与白莲社所倡净土信仰，影响远及日本、朝鲜，成东亚佛教一大宗，庐山为海外净土信众朝圣地。",
   "value": "",
   "source": "huiyuan_ji",
   "layer": "scholarship",
   "era": "东晋—今",
   "place": "donglin_temple",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "东林莲社之教，传于扶桑、三韩，净土一宗由庐阜而广，海外信众多诣山礼祖（佛教史/ 庐山研究）。",
   "note": "思想（净土）+ 社会（海外信仰网络）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "东晋·私修",
   "_faction": null
  },
  {
   "id": "LS_S02",
   "subject": "place:guling",
   "predicate": "牯岭别墅群为中西建筑交汇标本",
   "value_text": "牯岭别墅群集英、美、法、俄等国建筑风格，与本土山水并置，为近代中西建筑与避暑文化交汇的实物标本。",
   "value": "",
   "source": "lushan_zhi",
   "layer": "scholarship",
   "era": "近代",
   "place": "guling",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "牯岭西式别墅林立，各国样式杂陈，与云壑相映，学者以为中西建筑文化接触之标本（近代建筑史/ 庐山研究）。",
   "note": "技术（建筑）+ 社会（中西交融）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "LS_S03",
   "subject": "person:zhu_xi",
   "predicate": "朱子之教融伦常于书院，奠定乡约传统",
   "value_text": "朱熹以白鹿洞书院融儒学伦常于讲学育才，其学规下延为后世书院与乡约、社学之传统。",
   "value": "",
   "source": "zhu_xi_ji",
   "layer": "scholarship",
   "era": "南宋—清",
   "place": "bailudong",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "朱子白鹿之教，以伦常饬士，后世书院、乡约多奉为法，江南文教由是大行（朱文公文集/ 书院史）。",
   "note": "思想（理学）+ 制度。",
   "dims": [
    5,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "LS_I01",
   "subject": "place:poyang_lake",
   "predicate": "江湖交汇使九江—庐山成赣北枢纽",
   "value_text": "鄱阳湖水系与长江交汇，使九江—庐山一带成赣北自然与人文枢纽，舟楫灌溉便利、人文荟萃。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—今",
   "place": "poyang_lake",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "彭蠡汇江，舟楫通省，江湖之会既利转运亦聚人文，赣北因以为重（学界历史地理推论）。",
   "note": "地理 + 社会（人文枢纽）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_I02",
   "subject": "place:lushan_mountain",
   "predicate": "释道儒与山岳崇拜叠加成文化圣山",
   "value_text": "山岳崇拜与释道儒多层信仰叠加，使庐山成为多重信仰叠合的文化圣山，而非单一宗教之山。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "东晋—今",
   "place": "lushan_mountain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "释道儒迹与山灵崇拜共此一山，信众各有所诣，庐山遂为叠合之圣山（学界宗教史推论）。",
   "note": "地理 + 思想（叠合信仰）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_I03",
   "subject": "place:bailudong",
   "predicate": "书院制度下延辐射江南、塑造文教认同",
   "value_text": "白鹿洞书院学规与育才模式向下延伸，使庐山教化辐射江南，塑造地方文教认同与士人网络。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "南宋—清",
   "place": "bailudong",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "白鹿洞之规行于郡县书院，江南文教因以成脉，地方认同系于斯（学界教育史推论）。",
   "note": "制度 + 社会（文教网络）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_I04",
   "subject": "event:ev_lushan_03",
   "predicate": "避暑地与政治会议叠加，兼休闲与国是象征",
   "value_text": "近代避暑地功能与20世纪多次政治会议（庐山会议）叠加，使庐山兼具休闲胜地与国是象征的双重意义。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "近代—现代",
   "place": "guling",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "牯岭既为避暑名区，亦屡为国是所集，山因而兼闲适与政务之象征（学界近现代史推论）。",
   "note": "事件 + 社会（政治象征）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_I05",
   "subject": "place:guling",
   "predicate": "西式别墅与本土山水并置强化中西合璧意象",
   "value_text": "西式别墅群与本土峰壑山水并置，强化庐山「中西合璧」的现代意象，区别于传统名山。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "近代",
   "place": "guling",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "万国屋宇错落云中，与旧日禅林相望，庐山意象乃成中西合璧之新格（学界城市意象推论）。",
   "note": "技术（建筑）+ 思想（现代意象）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_G01",
   "subject": "place:lushan_mountain",
   "predicate": "历代寺庙书院别墅的精确分布与年代数据有限",
   "value_text": "庐山历代寺庙、书院与近代别墅的精确空间分布与营造年代数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "东晋—近代",
   "place": "lushan_mountain",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：庐山建筑史空间。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "庐山历代寺庙、书院、别墅的空间分布与营造年代",
    "skills": [
     "建筑史",
     "历史地理",
     "GIS"
    ],
    "accept": "若有古建勘察或山志地图，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_G02",
   "subject": "place:bailudong",
   "predicate": "白鹿洞书院历代修建与学田制度档案有限",
   "value_text": "白鹿洞书院历代修建次第与学田、祭田制度的详细档案，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "南宋—清",
   "place": "bailudong",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：书院制度史。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "白鹿洞书院历代修建记与学田、祭田制度档案",
    "skills": [
     "书院史",
     "教育史",
     "历史地理"
    ],
    "accept": "若有书院志或学田册籍，可补制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "LS_G03",
   "subject": "person:hui_yuan",
   "predicate": "慧远早期净土经典的文本流传考证有限",
   "value_text": "慧远东林结社与早期净土经典的文本流传、弟子谱系考证，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "东晋",
   "place": "donglin_temple",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：早期净土宗文献。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "慧远文集、东林结社弟子谱系与早期净土经典流传",
    "skills": [
     "佛教史",
     "文献学",
     "宗教学"
    ],
    "accept": "若有早期净土文献整理，可补思想(5)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "LS_G01",
  "LS_G02",
  "LS_G03"
 ],
 "events": [
  {
   "id": "ev_lushan_01",
   "year": 402,
   "era": "东晋元兴元年",
   "kind": "立教",
   "title": "慧远倡净土·结白莲社",
   "place": "donglin_temple",
   "text": "东晋元兴元年（402）慧远于东林寺倡弥陀净土法门、结白莲社，庐山遂为中国净土宗发源地，影响远播东亚。",
   "subject": "event:ev_lushan_01"
  },
  {
   "id": "ev_lushan_02",
   "year": 1179,
   "era": "南宋淳熙六年",
   "kind": "兴学",
   "title": "朱熹复兴白鹿洞书院·订《揭示》",
   "place": "bailudong",
   "text": "南宋淳熙六年（1179）朱熹知南康军，复兴白鹿洞书院、订《白鹿洞书院揭示》，其学规成后世天下书院圭臬，白鹿洞称「天下书院之首」。",
   "subject": "event:ev_lushan_02"
  },
  {
   "id": "ev_lushan_03",
   "year": 1895,
   "era": "清季—近代",
   "kind": "中西交融",
   "title": "九江开埠·西人建牯岭别墅群",
   "place": "guling",
   "text": "清季九江开埠后，西人于牯岭购地建避暑别墅群，庐山成近代中西交融的避暑与疗养地；20世纪多次政治会议（庐山会议）又叠加其国是象征意义。",
   "subject": "event:ev_lushan_03"
  }
 ],
 "edges": [
  {
   "from": "bailudong",
   "to": "lushan_mountain",
   "kind": "within",
   "note": "白鹿洞书院在庐山东南麓",
   "label": "",
   "type": "misc"
  },
  {
   "from": "donglin_temple",
   "to": "lushan_mountain",
   "kind": "within",
   "note": "东林寺在庐山西北麓",
   "label": "",
   "type": "misc"
  },
  {
   "from": "guling",
   "to": "lushan_mountain",
   "kind": "within",
   "note": "牯岭为庐山山顶市镇",
   "label": "",
   "type": "misc"
  },
  {
   "from": "poyang_lake",
   "to": "jiujiang",
   "kind": "adjacent",
   "note": "鄱阳湖于湖口入长江，近九江",
   "label": "",
   "type": "misc"
  },
  {
   "from": "jiujiang",
   "to": "lushan_mountain",
   "kind": "near",
   "note": "九江为庐山北麓门户，江湖之会",
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
   "东晋·私修",
   "宋·私修",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "东晋·私修": "东晋·私修",
   "宋·私修": "宋·私修",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#C0703A",
   "东晋·私修": "#9B7CC3",
   "宋·私修": "#8E7CC3",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_东晋·私修": {
    "name": "东晋·私修",
    "macro_party": "东晋·私修",
    "note": "auto"
   },
   "f_宋·私修": {
    "name": "宋·私修",
    "macro_party": "宋·私修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#C0703A",
   "f_东晋·私修": "#9B7CC3",
   "f_宋·私修": "#8E7CC3",
   "f_学界": "#2E7D8F"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [],
  "admin1": [],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   28.45,
   114.97,
   30.72,
   117.05
  ]
 }
};
