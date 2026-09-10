// 本文件由 tools/build.py 自动生成（切片 chaozhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chaozhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chaozhou"] = {
 "meta": {
  "kind": "county",
  "region": "exchange",
  "province": "guangdong",
  "title": "潮州（海滨邹鲁·潮商·广济桥）",
  "dossier_label": "潮州",
  "subtitle": "韩江三角洲 · 广济桥 · 潮商网络 · 儒学南传",
  "primary_place": "chaozhou_fucheng",
  "dossier_event": "event:ev_chaozhou_02",
  "vocab_pack": "chaozhou",
  "terrain_grid": "china_coarse",
  "lead": "潮州位于粤东韩江三角洲，819 年韩愈贬潮兴学、1171 年丁允元建广济桥、明中后期潮商依托柘林湾出海，使这里成为“海滨邹鲁”与粤东商贸中心。下方为贬潮、建桥与海贸三条主线。",
  "parties_note": "史料以潮州府志、广济桥志为本，韩昌黎集为唐私修，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_chaozhou_01": "韩愈贬潮",
   "event:ev_chaozhou_02": "广济桥始建",
   "event:ev_chaozhou_03": "潮商兴起",
   "place:chaozhou_fucheng": "潮州府城",
   "place:guangji_qiao": "广济桥",
   "person:han_yu": "韩愈"
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
    "note": "潮州府制度+韩愈儒学南传+宗族祠堂→海滨邹鲁的社会政治秩序"
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
    "note": "广济桥技术+柘林湾海贸制度→潮州兼具内河交通与海上贸易功能"
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
    "note": "潮商宗族+海外移民+会馆→粤东社会外向流动与文化再生产"
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
    "note": "韩江三角洲+海上丝路事件→潮州控闽粤赣边区与南洋通道"
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
  "page": "county.html?scene=chaozhou",
  "key": "chaozhou",
  "scene_id": "chaozhou"
 },
 "sources": [
  {
   "id": "chaozhou_fuzhi",
   "title": "潮州府志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距明清府城事约数十年至数百年",
   "stance_label": "地方志",
   "compiler": "《潮州府志》（清/民各版及今纂）",
   "color": "#A0473A",
   "period": "清/民"
  },
  {
   "id": "guangji_qiao_zhi",
   "title": "广济桥志",
   "party": "后世官修",
   "distance_label": "近现代整理，距南宋建桥事约数百年至近千年",
   "stance_label": "专史辑录",
   "compiler": "《广济桥志》与桥史研究辑录",
   "color": "#A0473A",
   "period": "近现代"
  },
  {
   "id": "han_yu_quanji",
   "title": "韩昌黎集",
   "party": "唐·私修",
   "distance_label": "韩愈自撰，距贬潮事为当时人记当时事",
   "stance_label": "唐代私修诗文",
   "compiler": "韩愈（唐）",
   "color": "#8E7CC3",
   "period": "唐"
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
  }
 ],
 "places": [
  {
   "id": "chaozhou_fucheng",
   "name": "潮州府城",
   "lon": 116.6367,
   "lat": 23.6677,
   "type": "古城",
   "modern": "广东省潮州市湘桥区",
   "note": "潮州府与海阳县治所在，始建于宋代，城墙、牌坊街、开元寺等保存较好，为粤东历史文化名城（CHGIS V6 治所坐标，WGS84：潮州府）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：潮州府（潮州府治所）",
   "elev": 153
  },
  {
   "id": "guangji_qiao",
   "name": "广济桥",
   "lon": 116.65,
   "lat": 23.66,
   "type": "廊桥",
   "modern": "潮州市湘桥区韩江中段",
   "note": "中国四大古桥之一，东西段石梁、中段浮舟，可开可合，始建于南宋乾道七年。",
   "geo_match": "approx",
   "geo_note": "广济桥位于潮州古城东门外韩江上，取古城东门附近近似坐标（116.65, 23.66）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 141
  },
  {
   "id": "han_jiang",
   "name": "韩江",
   "lon": 116.65,
   "lat": 23.65,
   "type": "河流",
   "modern": "粤东沿海",
   "note": "韩江流经潮州府城，为粤东母亲河，也是潮州航运与农业灌溉的依托。",
   "geo_match": "approx",
   "geo_note": "韩江潮州府城段近似坐标（116.65, 23.65）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 120
  },
  {
   "id": "feng_huang_shan",
   "name": "凤凰山",
   "lon": 116.62,
   "lat": 23.55,
   "type": "山脉",
   "modern": "潮州市潮安区西北部",
   "note": "粤东名山，潮州凤凰单丛茶产区，为潮州府城北面自然屏障（近似坐标，CHGIS 不收录本要素，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "凤凰山（潮州）近似坐标（116.62, 23.55），据公开地理数据；CHGIS 未收录本要素",
   "elev": 14
  },
  {
   "id": "kaiyuan_si",
   "name": "开元寺",
   "lon": 116.65,
   "lat": 23.65,
   "type": "寺院",
   "modern": "潮州市湘桥区开元路",
   "note": "始建于唐开元二十六年（738），为粤东佛教重镇，存唐宋至明清建筑遗构。",
   "geo_match": "approx",
   "geo_note": "开元寺位于潮州古城内，取古城中心近似坐标（116.65, 23.65）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 120
  },
  {
   "id": "chaozhou_wan",
   "name": "潮州湾（柘林湾）",
   "lon": 117.0,
   "lat": 23.5,
   "type": "海湾",
   "modern": "潮州市饶平县柘林镇",
   "note": "粤东重要海港，明中后期潮商由此出海，陶瓷、盐、蔗糖输往南洋（近似坐标，CHGIS 不收录本要素，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "柘林湾/潮州湾近似坐标（117.0, 23.5），据公开地理数据；CHGIS 未收录本要素",
   "elev": 20
  }
 ],
 "persons": [
  {
   "id": "han_yu",
   "name": "韩愈",
   "role": "唐·潮州刺史·儒学南传",
   "side": "tang",
   "note": "（768–824）唐代文学家、思想家，元和十四年贬潮州刺史，兴学驱鳄，被后世潮州人尊为“吾潮导师”，深刻影响潮州儒学教育。",
   "influence": 1
  },
  {
   "id": "ding_yunyuan",
   "name": "丁允元",
   "role": "南宋·潮州知州·广济桥创建者",
   "side": "song",
   "note": "（生卒年不详）南宋潮州知州，乾道七年主持始建广济桥，是潮州标志性工程的主持者。",
   "influence": 0
  },
  {
   "id": "chen_cihong",
   "name": "陈慈黉",
   "role": "清·潮商·华侨领袖",
   "side": "qing",
   "note": "（1843–1921）澄海人，清末民初潮商巨贾，经商南洋，家族侨批网络遍布东南亚；其私人文书与账簿公开有限。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "CZ_R01",
   "subject": "place:chaozhou_fucheng",
   "predicate": "位于粤东韩江三角洲",
   "value_text": "潮州府城位于广东省东部韩江三角洲，北倚凤凰山、南临潮州湾，为粤东门户。",
   "value": "",
   "source": "chaozhou_fuzhi",
   "layer": "record",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "潮州府城倚凤凰山，临韩江，控粤东咽喉，为海阳县治与潮州府治所在（《潮州府志》/ 公开地理资料）。",
   "note": "地理形胜：韩江三角洲—粤东门户。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_R02",
   "subject": "event:ev_chaozhou_01",
   "predicate": "韩愈贬潮兴学驱鳄",
   "value_text": "元和十四年（819）韩愈贬潮州刺史，兴学驱鳄，被视为儒学南传潮州之始。",
   "value": "",
   "source": "han_yu_quanji",
   "layer": "record",
   "era": "唐",
   "place": "chaozhou_fucheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "元和十四年，愈贬潮州刺史，至则祭鳄鱼、兴州学，潮人至今思之（《韩昌黎集》/ 潮州府志）。",
   "note": "事件 + 思想（儒学南传）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "唐·私修",
   "_faction": null
  },
  {
   "id": "CZ_R03",
   "subject": "event:ev_chaozhou_02",
   "predicate": "丁允元主持建广济桥",
   "value_text": "乾道七年（1171）潮州知州丁允元主持建广济桥，后成浮梁结合之开合桥，为潮州标志。",
   "value": "",
   "source": "guangji_qiao_zhi",
   "layer": "record",
   "era": "南宋",
   "place": "guangji_qiao",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "乾道七年，知潮州军州事丁允元请于朝，造舟为梁，名曰广济，后东西段石梁、中段浮舟，启闭以通舟楫（《广济桥志》/ 潮州府志）。",
   "note": "事件 + 技术。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_R04",
   "subject": "event:ev_chaozhou_03",
   "predicate": "明中后期潮州商帮兴起",
   "value_text": "明中后期潮州商帮依托府城与柘林湾出海，形成远播东南亚的潮商网络。",
   "value": "",
   "source": "chaozhou_fuzhi",
   "layer": "record",
   "era": "明",
   "place": "chaozhou_wan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "明中叶以降，潮人贾于海，柘林、南澳诸港通暹罗、安南、爪哇，潮商网络渐成（《潮州府志》/ 海防文献）。",
   "note": "事件 + 社会（潮商）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_R05",
   "subject": "place:guangji_qiao",
   "predicate": "广济桥为浮梁结合的开合桥",
   "value_text": "广济桥集梁桥、浮桥于一体，东西段石桥中部以浮船相连，可开可合，为中国四大古桥之一。",
   "value": "",
   "source": "guangji_qiao_zhi",
   "layer": "record",
   "era": "南宋",
   "place": "guangji_qiao",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "广济桥东西两岸为石梁，中截以十八艘浮舟贯铁索而成，潮涨潮落可启闭通航（《广济桥志》）。",
   "note": "技术（桥梁工程）。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_R06",
   "subject": "place:kaiyuan_si",
   "predicate": "开元寺为粤东佛教重镇",
   "value_text": "开元寺始建于唐开元二十六年（738），为粤东佛教重镇，存唐宋至明清建筑遗构。",
   "value": "",
   "source": "chaozhou_fuzhi",
   "layer": "record",
   "era": "唐",
   "place": "kaiyuan_si",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "开元寺在府治北，唐开元二十六年敕建，历代重修，为岭东梵刹之首（《潮州府志》）。",
   "note": "思想（佛教）。",
   "dims": [
    2,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_S01",
   "subject": "place:chaozhou_fucheng",
   "predicate": "潮州府与海阳县构成粤东行政中心",
   "value_text": "潮州府与海阳县构成粤东行政中心，祠堂、会馆、宗族组织管理地方社会。",
   "value": "",
   "source": "chaozhou_fuzhi",
   "layer": "scholarship",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "潮州府领海阳等县，府城为政治、商业与宗族中心，会馆林立，祠产丰厚（潮州府志研究）。",
   "note": "制度（府县治理）。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_S02",
   "subject": "person:chen_cihong",
   "predicate": "潮商以宗族同乡为纽带远播东南亚",
   "value_text": "潮商以宗族、同乡为纽带，远播东南亚，形成“潮州帮”海外移民与商业网络。",
   "value": "",
   "source": "chaozhou_fuzhi",
   "layer": "scholarship",
   "era": "清",
   "place": "chaozhou_fucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "澄海陈慈黉家族经商南洋，置田建宅，侨批网络遍布暹罗、安南，为清末潮商代表（潮商研究）。",
   "note": "社会（海外移民/商业网络）。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CZ_S03",
   "subject": "person:han_yu",
   "predicate": "韩愈治潮推动儒学南传",
   "value_text": "韩愈治潮推动儒学南传，后世潮州人尊其为“吾潮导师”，影响地方教育伦理。",
   "value": "",
   "source": "han_yu_quanji",
   "layer": "scholarship",
   "era": "唐",
   "place": "chaozhou_fucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "韩愈来潮八月，兴学释奠，潮人立祠祀之，称“吾潮导师”，儒学自此深入民间（韩愈研究）。",
   "note": "思想（儒学教化）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "唐·私修",
   "_faction": null
  },
  {
   "id": "CZ_I01",
   "subject": "place:chaozhou_fucheng",
   "predicate": "韩江三角洲使潮州成为闽粤赣商品集散地",
   "value_text": "韩江三角洲平原与粤东沿海通道，使潮州成为闽粤赣边区商品集散地。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "潮州控韩江下游，上承闽赣山区物产，下通潮州湾与南洋，为粤东商品集散中心（学界综合推论）。",
   "note": "地理→社会/经济。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_I02",
   "subject": "place:chaozhou_fucheng",
   "predicate": "潮州工艺与祠庙海洋商贸需求互促",
   "value_text": "潮州木雕、陶瓷、嵌瓷等工艺技术与宗族祠庙、海洋商贸需求相互促进。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "潮州金漆木雕、枫溪陶瓷、嵌瓷等工艺兴盛，既用于祠堂庙宇装饰，也经海路外销（学界综合推论）。",
   "note": "技术 + 社会。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_I03",
   "subject": "place:chaozhou_fucheng",
   "predicate": "宗族祠堂与儒学教化形成海滨邹鲁",
   "value_text": "宗族祠堂制度与韩愈以来儒学教化结合，形成潮州“海滨邹鲁”的社会秩序。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "潮州祠堂遍布城乡，族规乡约与韩愈兴学传统结合，使滨海之地有“海滨邹鲁”之称（学界综合推论）。",
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
   "id": "CZ_I04",
   "subject": "event:ev_chaozhou_03",
   "predicate": "潮商海外移民强化潮州文化认同",
   "value_text": "潮商海外移民将工夫茶、潮剧、妈祖信仰带往东南亚，强化潮州文化认同。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "chaozhou_wan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "潮商移居暹罗、马来亚后，仍建潮州会馆、演潮剧、饮工夫茶，以文化符号维系族群认同（学界综合推论）。",
   "note": "社会 + 事件。",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_I05",
   "subject": "place:chaozhou_wan",
   "predicate": "潮州湾支撑潮商出海与陶瓷贸易",
   "value_text": "潮州湾/柘林湾为粤东重要海港，支撑潮商出海与陶瓷贸易的技术—地理基础。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "chaozhou_wan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "柘林湾、南澳港为潮州海舶停泊地，潮瓷、潮盐由此输往南洋，构成潮商海贸的技术地理条件（学界综合推论）。",
   "note": "地理 + 技术。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_G01",
   "subject": "place:guangji_qiao",
   "predicate": "广济桥浮船开合机制与木构件年代数据有限",
   "value_text": "广济桥历代浮船数量、开合机制与木构件年代的精确技术史数据公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "南宋",
   "place": "guangji_qiao",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：广济桥技术史细节。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "广济桥历代浮船数量、开合机构、木石构件年代与修缮记录",
    "skills": [
     "桥梁工程史",
     "古建筑测绘",
     "交通史"
    ],
    "accept": "若有历次修缮档案、结构测绘或考古报告，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_G02",
   "subject": "person:chen_cihong",
   "predicate": "陈慈黉家族账簿侨批档案公开有限",
   "value_text": "陈慈黉家族海外贸易网络、账簿与侨批原件，公开档案有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "清",
   "place": "chaozhou_fucheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：潮商个体经营档案。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "陈慈黉家族海外贸易账簿、侨批、商路网络",
    "skills": [
     "华侨史",
     "商业史",
     "侨批学"
    ],
    "accept": "若有私家账簿、侨批原件或家族档案整理，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CZ_G03",
   "subject": "place:chaozhou_fucheng",
   "predicate": "府城明清街坊与祠堂空间分布精确数据不足",
   "value_text": "潮州府城明清街坊布局与宗族祠堂空间分布的精确 GIS 数据不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "chaozhou_fucheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：府城历史空间数据。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "潮州府城明清街坊、祠堂、会馆的空间分布与 GIS 矢量化数据",
    "skills": [
     "历史地理",
     "城市史",
     "GIS"
    ],
    "accept": "若有历史地图数字化或文物普查空间数据，可补制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CZ_G01",
  "CZ_G02",
  "CZ_G03"
 ],
 "events": [
  {
   "id": "ev_chaozhou_01",
   "year": 819,
   "era": "元和十四年",
   "kind": "贬谪",
   "title": "韩愈贬潮州刺史",
   "place": "chaozhou_fucheng",
   "text": "元和十四年（819）韩愈贬潮州刺史，在潮八月，兴办州学、祭鳄鱼、荐士子，被视为儒学南传潮州之始，后世潮人尊其为“吾潮导师”。",
   "subject": "event:ev_chaozhou_01"
  },
  {
   "id": "ev_chaozhou_02",
   "year": 1171,
   "era": "乾道七年",
   "kind": "工程",
   "title": "广济桥始建",
   "place": "guangji_qiao",
   "text": "乾道七年（1171）潮州知州丁允元主持造舟为梁，始建广济桥；后历宋元明清多次修缮，形成东西石梁、中段浮舟的独特开合桥，成为中国四大古桥之一。",
   "subject": "event:ev_chaozhou_02"
  },
  {
   "id": "ev_chaozhou_03",
   "year": 1550,
   "era": "明中后期",
   "kind": "商贸",
   "title": "潮州商帮兴起",
   "place": "chaozhou_wan",
   "text": "明中后期，潮州人依托柘林湾、南澳等港口出海贸易，陶瓷、蔗糖、盐运销东南亚，形成“潮州帮”海外商业与移民网络。",
   "subject": "event:ev_chaozhou_03"
  }
 ],
 "edges": [
  {
   "from": "guangji_qiao",
   "to": "chaozhou_fucheng",
   "kind": "within",
   "note": "广济桥位于潮州府城东门外韩江上",
   "label": "",
   "type": "misc"
  },
  {
   "from": "han_jiang",
   "to": "chaozhou_fucheng",
   "kind": "adjacent",
   "note": "韩江流经潮州府城",
   "label": "",
   "type": "misc"
  },
  {
   "from": "feng_huang_shan",
   "to": "chaozhou_fucheng",
   "kind": "near",
   "note": "凤凰山位于潮州府城北面",
   "label": "",
   "type": "misc"
  },
  {
   "from": "kaiyuan_si",
   "to": "chaozhou_fucheng",
   "kind": "within",
   "note": "开元寺位于潮州府城内",
   "label": "",
   "type": "misc"
  },
  {
   "from": "chaozhou_wan",
   "to": "chaozhou_fucheng",
   "kind": "near",
   "note": "潮州湾/柘林湾为潮州府出海港",
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
   "唐·私修",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "唐·私修": "唐·私修",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "唐·私修": "#8E7CC3",
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
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_后世官修": "#A0473A",
   "f_唐·私修": "#8E7CC3",
   "f_学界": "#2E7D8F"
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
        115.62,
        22.846
       ],
       [
        115.64,
        22.853
       ],
       [
        115.756,
        22.824
       ],
       [
        115.852,
        22.802
       ],
       [
        116.063,
        22.879
       ],
       [
        116.157,
        22.887
       ],
       [
        116.206,
        22.919
       ],
       [
        116.222,
        22.95
       ],
       [
        116.252,
        22.981
       ],
       [
        116.346,
        22.941
       ],
       [
        116.471,
        22.946
       ],
       [
        116.52,
        23.007
       ],
       [
        116.538,
        23.18
       ],
       [
        116.586,
        23.218
       ],
       [
        116.669,
        23.228
       ],
       [
        116.699,
        23.278
       ],
       [
        116.682,
        23.327
       ],
       [
        116.629,
        23.354
       ],
       [
        116.712,
        23.36
       ],
       [
        116.76,
        23.383
       ],
       [
        116.861,
        23.453
       ],
       [
        116.911,
        23.647
       ],
       [
        117.033,
        23.623
       ],
       [
        117.083,
        23.579
       ],
       [
        117.148,
        23.599
       ],
       [
        117.225,
        23.647
       ],
       [
        117.291,
        23.714
       ],
       [
        117.331,
        23.709
       ],
       [
        117.347,
        23.636
       ],
       [
        117.368,
        23.589
       ],
       [
        117.417,
        23.621
       ],
       [
        117.462,
        23.736
       ],
       [
        117.46,
        23.771
       ],
       [
        117.433,
        23.792
       ],
       [
        117.466,
        23.841
       ],
       [
        117.579,
        23.857
       ],
       [
        117.628,
        23.837
       ],
       [
        117.668,
        23.939
       ],
       [
        117.742,
        24.015
       ],
       [
        117.839,
        24.012
       ],
       [
        117.904,
        24.106
       ],
       [
        118.0,
        24.195
       ],
       [
        118.0,
        24.382
       ],
       [
        117.879,
        24.396
       ],
       [
        117.848,
        24.432
       ],
       [
        117.843,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.935,
        24.474
       ],
       [
        118.0,
        24.481
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
        115.62,
        24.668
       ],
       [
        118.0,
        24.668
       ],
       [
        118.0,
        24.481
       ],
       [
        117.935,
        24.474
       ],
       [
        117.897,
        24.48
       ],
       [
        117.843,
        24.474
       ],
       [
        117.848,
        24.432
       ],
       [
        117.879,
        24.396
       ],
       [
        118.0,
        24.382
       ],
       [
        118.0,
        24.195
       ],
       [
        117.904,
        24.106
       ],
       [
        117.839,
        24.012
       ],
       [
        117.742,
        24.015
       ],
       [
        117.668,
        23.939
       ],
       [
        117.628,
        23.837
       ],
       [
        117.579,
        23.857
       ],
       [
        117.466,
        23.841
       ],
       [
        117.433,
        23.792
       ],
       [
        117.46,
        23.771
       ],
       [
        117.462,
        23.736
       ],
       [
        117.417,
        23.621
       ],
       [
        117.368,
        23.589
       ],
       [
        117.347,
        23.636
       ],
       [
        117.331,
        23.709
       ],
       [
        117.291,
        23.714
       ],
       [
        117.225,
        23.647
       ],
       [
        117.148,
        23.599
       ],
       [
        117.083,
        23.579
       ],
       [
        117.033,
        23.623
       ],
       [
        116.911,
        23.647
       ],
       [
        116.861,
        23.453
       ],
       [
        116.76,
        23.383
       ],
       [
        116.712,
        23.36
       ],
       [
        116.629,
        23.354
       ],
       [
        116.682,
        23.327
       ],
       [
        116.699,
        23.278
       ],
       [
        116.669,
        23.228
       ],
       [
        116.586,
        23.218
       ],
       [
        116.538,
        23.18
       ],
       [
        116.52,
        23.007
       ],
       [
        116.471,
        22.946
       ],
       [
        116.346,
        22.941
       ],
       [
        116.252,
        22.981
       ],
       [
        116.222,
        22.95
       ],
       [
        116.206,
        22.919
       ],
       [
        116.157,
        22.887
       ],
       [
        116.063,
        22.879
       ],
       [
        115.852,
        22.802
       ],
       [
        115.756,
        22.824
       ],
       [
        115.64,
        22.853
       ],
       [
        115.62,
        22.846
       ],
       [
        115.62,
        24.668
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
         118.0,
         24.668
        ],
        [
         116.51,
         24.668
        ],
        [
         116.518,
         24.652
        ],
        [
         116.507,
         24.621
        ],
        [
         116.53,
         24.605
        ],
        [
         116.571,
         24.622
        ],
        [
         116.601,
         24.654
        ],
        [
         116.623,
         24.642
        ],
        [
         116.667,
         24.659
        ],
        [
         116.715,
         24.668
        ],
        [
         116.796,
         24.668
        ],
        [
         116.815,
         24.655
        ],
        [
         116.761,
         24.583
        ],
        [
         116.759,
         24.546
        ],
        [
         116.797,
         24.502
        ],
        [
         116.833,
         24.497
        ],
        [
         116.861,
         24.46
        ],
        [
         116.839,
         24.442
        ],
        [
         116.904,
         24.37
        ],
        [
         116.896,
         24.351
        ],
        [
         116.919,
         24.321
        ],
        [
         116.914,
         24.288
        ],
        [
         116.938,
         24.281
        ],
        [
         116.933,
         24.22
        ],
        [
         116.956,
         24.217
        ],
        [
         116.999,
         24.179
        ],
        [
         116.935,
         24.127
        ],
        [
         116.93,
         24.065
        ],
        [
         116.953,
         24.008
        ],
        [
         116.982,
         23.999
        ],
        [
         116.977,
         23.932
        ],
        [
         116.956,
         23.922
        ],
        [
         116.982,
         23.856
        ],
        [
         117.012,
         23.855
        ],
        [
         117.019,
         23.802
        ],
        [
         117.048,
         23.759
        ],
        [
         117.055,
         23.694
        ],
        [
         117.124,
         23.647
        ],
        [
         117.147,
         23.654
        ],
        [
         117.193,
         23.629
        ],
        [
         117.193,
         23.562
        ],
        [
         117.291,
         23.571
        ],
        [
         117.302,
         23.55
        ],
        [
         117.387,
         23.555
        ],
        [
         117.464,
         23.585
        ],
        [
         117.455,
         23.628
        ],
        [
         117.493,
         23.643
        ],
        [
         117.501,
         23.704
        ],
        [
         117.544,
         23.716
        ],
        [
         117.602,
         23.702
        ],
        [
         117.66,
         23.789
        ],
        [
         117.652,
         23.815
        ],
        [
         117.672,
         23.878
        ],
        [
         117.691,
         23.889
        ],
        [
         117.763,
         23.887
        ],
        [
         117.793,
         23.906
        ],
        [
         117.807,
         23.948
        ],
        [
         117.865,
         24.005
        ],
        [
         117.91,
         24.012
        ],
        [
         117.928,
         24.04
        ],
        [
         117.936,
         24.1
        ],
        [
         118.0,
         24.152
        ],
        [
         118.0,
         24.668
        ]
       ]
      ]
     ]
    },
    "n": "福建省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.62,
         24.668
        ],
        [
         115.62,
         24.621
        ],
        [
         115.671,
         24.605
        ],
        [
         115.689,
         24.545
        ],
        [
         115.753,
         24.546
        ],
        [
         115.785,
         24.567
        ],
        [
         115.844,
         24.562
        ],
        [
         115.841,
         24.584
        ],
        [
         115.798,
         24.629
        ],
        [
         115.78,
         24.663
        ],
        [
         115.783,
         24.668
        ],
        [
         115.62,
         24.668
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.62,
         22.848
        ],
        [
         115.654,
         22.866
        ],
        [
         115.696,
         22.843
        ],
        [
         115.76,
         22.835
        ],
        [
         115.788,
         22.81
        ],
        [
         115.796,
         22.739
        ],
        [
         115.829,
         22.735
        ],
        [
         115.883,
         22.786
        ],
        [
         115.931,
         22.803
        ],
        [
         115.965,
         22.801
        ],
        [
         115.997,
         22.827
        ],
        [
         116.056,
         22.845
        ],
        [
         116.104,
         22.817
        ],
        [
         116.141,
         22.835
        ],
        [
         116.239,
         22.921
        ],
        [
         116.259,
         22.932
        ],
        [
         116.303,
         22.952
        ],
        [
         116.383,
         22.919
        ],
        [
         116.45,
         22.937
        ],
        [
         116.505,
         22.931
        ],
        [
         116.544,
         22.997
        ],
        [
         116.577,
         23.014
        ],
        [
         116.557,
         23.056
        ],
        [
         116.566,
         23.089
        ],
        [
         116.551,
         23.11
        ],
        [
         116.566,
         23.134
        ],
        [
         116.666,
         23.158
        ],
        [
         116.701,
         23.198
        ],
        [
         116.745,
         23.215
        ],
        [
         116.807,
         23.201
        ],
        [
         116.821,
         23.241
        ],
        [
         116.799,
         23.245
        ],
        [
         116.783,
         23.314
        ],
        [
         116.872,
         23.416
        ],
        [
         116.871,
         23.416
        ],
        [
         116.874,
         23.447
        ],
        [
         116.875,
         23.448
        ],
        [
         116.896,
         23.476
        ],
        [
         116.889,
         23.502
        ],
        [
         116.929,
         23.53
        ],
        [
         116.964,
         23.507
        ],
        [
         117.01,
         23.503
        ],
        [
         117.045,
         23.54
        ],
        [
         117.086,
         23.537
        ],
        [
         117.193,
         23.562
        ],
        [
         117.193,
         23.629
        ],
        [
         117.147,
         23.654
        ],
        [
         117.124,
         23.647
        ],
        [
         117.055,
         23.694
        ],
        [
         117.048,
         23.759
        ],
        [
         117.019,
         23.802
        ],
        [
         117.012,
         23.855
        ],
        [
         116.982,
         23.856
        ],
        [
         116.956,
         23.922
        ],
        [
         116.977,
         23.932
        ],
        [
         116.982,
         23.999
        ],
        [
         116.953,
         24.008
        ],
        [
         116.93,
         24.065
        ],
        [
         116.935,
         24.127
        ],
        [
         116.999,
         24.179
        ],
        [
         116.956,
         24.217
        ],
        [
         116.933,
         24.22
        ],
        [
         116.938,
         24.281
        ],
        [
         116.914,
         24.288
        ],
        [
         116.919,
         24.321
        ],
        [
         116.896,
         24.351
        ],
        [
         116.904,
         24.37
        ],
        [
         116.839,
         24.442
        ],
        [
         116.861,
         24.46
        ],
        [
         116.833,
         24.497
        ],
        [
         116.797,
         24.502
        ],
        [
         116.759,
         24.546
        ],
        [
         116.761,
         24.583
        ],
        [
         116.815,
         24.655
        ],
        [
         116.796,
         24.668
        ],
        [
         116.715,
         24.668
        ],
        [
         116.667,
         24.659
        ],
        [
         116.623,
         24.642
        ],
        [
         116.601,
         24.654
        ],
        [
         116.571,
         24.622
        ],
        [
         116.53,
         24.605
        ],
        [
         116.507,
         24.621
        ],
        [
         116.518,
         24.652
        ],
        [
         116.51,
         24.668
        ],
        [
         115.783,
         24.668
        ],
        [
         115.78,
         24.663
        ],
        [
         115.798,
         24.629
        ],
        [
         115.841,
         24.584
        ],
        [
         115.844,
         24.562
        ],
        [
         115.785,
         24.567
        ],
        [
         115.753,
         24.546
        ],
        [
         115.689,
         24.545
        ],
        [
         115.671,
         24.605
        ],
        [
         115.62,
         24.621
        ],
        [
         115.62,
         22.848
        ]
       ]
      ],
      [
       [
        [
         117.025,
         23.438
        ],
        [
         116.983,
         23.461
        ],
        [
         116.945,
         23.44
        ],
        [
         116.952,
         23.42
        ],
        [
         117.027,
         23.415
        ],
        [
         117.05,
         23.401
        ],
        [
         117.082,
         23.409
        ],
        [
         117.124,
         23.39
        ],
        [
         117.143,
         23.401
        ],
        [
         117.143,
         23.46
        ],
        [
         117.129,
         23.483
        ],
        [
         117.094,
         23.459
        ],
        [
         117.059,
         23.474
        ],
        [
         117.03,
         23.443
        ],
        [
         117.025,
         23.438
        ]
       ]
      ],
      [
       [
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.722
        ],
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ]
       ]
      ],
      [
       [
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ],
        [
         115.835,
         22.723
        ]
       ]
      ]
     ]
    },
    "n": "广东省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   115.62,
   22.5,
   118.0,
   24.668
  ]
 }
};
