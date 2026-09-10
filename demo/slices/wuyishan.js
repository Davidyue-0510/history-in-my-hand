// 本文件由 tools/build.py 自动生成（切片 wuyishan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wuyishan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wuyishan"] = {
 "meta": {
  "kind": "county",
  "region": "thought",
  "province": "fujian",
  "title": "武夷山（丹霞·朱子理学·红茶）",
  "dossier_label": "武夷山",
  "subtitle": "丹霞地貌 · 朱子理学 · 武夷红茶 · 万里茶道",
  "primary_place": "wuyi_mountain",
  "dossier_event": "event:ev_wuyishan_01",
  "vocab_pack": "wuyishan",
  "terrain_grid": "china_coarse",
  "lead": "武夷山位于福建西北部、闽赣交界，以丹霞地貌与中亚热带原生森林著称。南宋淳熙十年（1183）朱熹于五曲隐屏峰下建武夷精舍，讲学著述，使武夷山成为南宋理学传播中心，影响东亚书院文化数百年。清代桐木关一带创制正山小种红茶，经万里茶道远销欧亚，武夷山遂为茶道南端节点。城村汉城为西汉闽越国都城遗址。1999年武夷山列入UNESCO世界文化与自然双重遗产（编号911）。",
  "parties_note": "史料以朱子全书、宋史、续茶经等为主，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_wuyishan_01": "精舍始建",
   "event:ev_wuyishan_02": "列入世遗",
   "event:ev_wuyishan_03": "红茶兴起",
   "place:wuyi_mountain": "武夷山",
   "person:zhu_xi": "朱熹"
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
    "note": "书院制度+朱子理学话语→武夷文化认同与教化秩序"
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
    "note": "制茶技术+茶路商帮+桐木关物产→武夷茶业物资枢纽"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4,
     5
    ],
    "layer": "inference",
    "note": "书院学子+茶商网络+僧团宫观→多元社会汇聚"
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
    "note": "丹霞形胜+万里茶道+世界遗产→东南文化地标与对外节点"
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
  "page": "county.html?scene=wuyishan",
  "key": "wuyishan",
  "scene_id": "wuyishan"
 },
 "sources": [
  {
   "id": "zhuzi_quanshu",
   "title": "朱子全书",
   "party": "宋·私修",
   "stance_label": "宋人私修·当代",
   "distance_label": "朱熹著作及门人编语录，距武夷事 contemporaneous",
   "color": "#B23A48",
   "compiler": "朱熹及门人（南宋）",
   "period": "宋",
   "note": "朱熹文集、语类及年谱，载武夷精舍创建、讲学与理学传播，为朱熹 contemporaneous 记录。"
  },
  {
   "id": "songshi",
   "title": "宋史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正五年（1345），距事约340年",
   "color": "#6C7A89",
   "compiler": "脱脱等（元）",
   "period": "元",
   "note": "地理志、儒林传载闽中理学与朱熹事迹，元人修宋史，视角非宋当代。"
  },
  {
   "id": "xu_cha_jing",
   "title": "续茶经",
   "party": "清·私修",
   "stance_label": "清人私修·茶史专著",
   "distance_label": "清乾隆间陆廷灿撰，距明清茶事约数十年",
   "color": "#7B5C3E",
   "compiler": "陆廷灿（清）",
   "period": "清",
   "note": "清代茶史专著，载武夷岩茶、红茶品类与贡茶、外销历史，为茶业社会史核心史料。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "武夷山文化与自然遗产综合研究",
   "period": "今",
   "note": "历史地理、茶学、理学、遗产学等现代研究的综合推论，用于 inference 与 gap 层。"
  }
 ],
 "places": [
  {
   "id": "wuyi_mountain",
   "name": "武夷山（核心景区）",
   "lon": 117.95,
   "lat": 27.66,
   "type": "山脉/自然文化遗产",
   "modern": "福建省南平市武夷山市",
   "note": "中国东南丹霞地貌与中亚热带森林代表，1999年列入UNESCO世界文化与自然双重遗产（编号911），朱子理学与武夷茶文化发源地。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "武夷山核心景区近似坐标（117.95, 27.66），取自公开地理数据，待CHGIS精修",
   "elev": 338
  },
  {
   "id": "jiuqu_stream",
   "name": "九曲溪",
   "lon": 117.98,
   "lat": 27.7,
   "type": "河流/景观",
   "modern": "武夷山景区东部",
   "note": "蜿蜒于武夷群山之间，两岸丹霞峰岩、摩崖石刻与古刹书院错落，是武夷山自然与文化景观的核心廊道。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "九曲溪近似坐标（117.98, 27.70），取自公开地理数据，待CHGIS精修",
   "elev": 310
  },
  {
   "id": "wuyi_jingshe",
   "name": "武夷精舍遗址",
   "lon": 117.95,
   "lat": 27.66,
   "type": "书院/遗址",
   "modern": "武夷山五曲隐屏峰下",
   "note": "南宋淳熙十年（1183）朱熹创建，南宋理学传播中心，代表书院制度发展。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "武夷精舍遗址近似坐标（117.95, 27.66），取自公开地理数据，待CHGIS精修",
   "elev": 338
  },
  {
   "id": "dahongpao_mud_tree",
   "name": "大红袍母树/御茶园",
   "lon": 117.96,
   "lat": 27.67,
   "type": "茶园/文化遗产",
   "modern": "武夷山天心永乐禅寺附近",
   "note": "武夷岩茶代表大红袍母树所在，自明代入贡，清代商品化加剧，茶业社会网络节点。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "大红袍母树近似坐标（117.96, 27.67），取自公开地理数据，待CHGIS精修",
   "elev": 329
  },
  {
   "id": "chengcun_han_city",
   "name": "城村汉城遗址",
   "lon": 118.02,
   "lat": 27.53,
   "type": "古城/遗址",
   "modern": "武夷山市兴田镇城村",
   "note": "西汉闽越国东冶都城遗址，城墙与宫殿基址尚存，东南地区保存较完整的汉代王城遗址。（近似坐标，待 CHGIS 精修）",
   "geo_match": "approx",
   "geo_note": "城村汉城遗址近似坐标（118.02, 27.53），取自公开地理数据，待CHGIS精修",
   "elev": 262
  },
  {
   "id": "tongmu_guan",
   "name": "桐木关",
   "lon": 117.75,
   "lat": 27.85,
   "type": "山口/自然保护区",
   "modern": "武夷山市西北与江西交界",
   "note": "武夷山国家级自然保护区核心区域，正山小种红茶发源地，高海拔云雾环境造就独特茶品。（近似坐标，待 CHGIS 精修）",
   "elev": 935
  }
 ],
 "persons": [
  {
   "id": "zhu_xi",
   "name": "朱熹",
   "era": "南宋",
   "role": "理学集大成者·武夷精舍创建者",
   "note": "淳熙十年（1183）于武夷山建武夷精舍，讲学著述，使武夷山成为南宋理学传播中心，影响东亚书院文化。",
   "influence": 0
  },
  {
   "id": "cai_yuanding",
   "name": "蔡元定",
   "era": "南宋",
   "role": "朱子学友·律吕象数学者",
   "note": "建阳人，与朱熹交游讲论于武夷精舍，精象数、律吕、地理之学，为闽学重要人物。",
   "influence": 0
  },
  {
   "id": "xu_xiake",
   "name": "徐霞客",
   "era": "明",
   "role": "地理学家·游记作者",
   "note": "明代著名地理学家、旅行家，曾游历武夷山并详记九曲溪、天游峰等丹霞胜景，为早期科学考察文献。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "WY_R01",
   "subject": "event:ev_wuyishan_01",
   "predicate": "朱熹淳熙十年建武夷精舍，倡理学于闽北",
   "value_text": "南宋淳熙十年（1183）朱熹于武夷山五曲隐屏峰下建武夷精舍，讲学著述、会友论道，使武夷山成为南宋理学传播中心之一。",
   "value": "",
   "source": "zhuzi_quanshu",
   "layer": "record",
   "era": "南宋",
   "place": "wuyi_jingshe",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "淳熙十年，熹于武夷五曲筑精舍，聚徒讲习，阐发理要，闽中学者翕然从之（朱子全书/ 朱子年谱）。",
   "note": "事件（建精舍）+ 思想（理学传播）。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "WY_R02",
   "subject": "event:ev_wuyishan_02",
   "predicate": "武夷山1999年列入UNESCO世界文化与自然双重遗产",
   "value_text": "1999年武夷山被联合国教科文组织列入《世界遗产名录》，属文化与自然双重遗产，以生物多样性、丹霞地貌和理学文化价值获认。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "当代",
   "place": "wuyi_mountain",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "一九九九年，武夷山以文化与自然双重遗产列入世界遗产，其丹霞地貌、九曲溪胜与朱子理学文化并具突出普遍价值（UNESCO 世界遗产中心/ 中国世界遗产名录）。",
   "note": "事件（申遗成功）+ 地理（遗产地）。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_R03",
   "subject": "event:ev_wuyishan_03",
   "predicate": "清代武夷红茶兴起，经晋商远销欧亚",
   "value_text": "清代武夷山区桐木关一带创制正山小种红茶，经闽赣古道、恰克图茶道远销欧洲，成为清代外销茶重要品类。",
   "value": "",
   "source": "xu_cha_jing",
   "layer": "record",
   "era": "清",
   "place": "tongmu_guan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "桐木关所产红茶，色乌味醇，清初始盛，晋商挟之走恰克图，转输于欧土，号为武夷红（续茶经/ 闽茶曲）。",
   "note": "事件（红茶兴起）+ 社会（茶路商贸）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "WY_R04",
   "subject": "place:chengcun_han_city",
   "predicate": "城村汉城为西汉闽越国都城遗址，城墙规模宏大",
   "value_text": "城村汉城位于武夷山东南，为西汉闽越国东冶都城遗址，城墙夯筑、宫室基址尚存，是东南地区保存较完整的汉代王城遗址。",
   "value": "",
   "source": "songshi",
   "layer": "record",
   "era": "西汉",
   "place": "chengcun_han_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "汉城在崇安东南，土城周回数里，汉武灭闽越后设冶县，其城址至今犹存（宋史·地理志/ 福建通志）。",
   "note": "事件（汉城遗存）+ 制度（郡县设置）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "WY_R05",
   "subject": "place:jiuqu_stream",
   "predicate": "九曲溪两岸峰岩秀丽，寺院书院林立，为理学山水",
   "value_text": "九曲溪蜿蜒于武夷群山之间，两岸丹霞峰岩、摩崖题刻与古刹书院错落，朱熹及门人往来其间，形成独特的理学山水空间。",
   "value": "",
   "source": "zhuzi_quanshu",
   "layer": "record",
   "era": "南宋",
   "place": "jiuqu_stream",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "武夷山九曲之胜，溪流萦回，峰峦四合，精舍寺观倚岩而构，朱子与门人讲论其间，遂成理学之区（朱子文集/ 武夷棹歌）。",
   "note": "地理（溪谷）+ 思想（理学山水）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "WY_R06",
   "subject": "place:wuyi_mountain",
   "predicate": "武夷山生物多样性显著，为东南亚热带森林代表",
   "value_text": "武夷山保存有大面积中亚热带原生性森林，动植物种类繁多，珍稀孑遗物种丰富，是中国东南生物多样性关键地区。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "当代",
   "place": "wuyi_mountain",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "武夷山区森林郁闭，物种繁多，珍稀孑遗植物与特有类群富集，现代考察认定为中亚热带森林生态之典型（UNESCO 申报文件/ 生物多样性综合研究）。",
   "note": "地理（生态）+ 技术（生态认知）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_S01",
   "subject": "place:wuyi_jingshe",
   "predicate": "武夷精舍为南宋理学教育与书院制度典范",
   "value_text": "武夷精舍不仅是朱熹个人讲学之所，也代表了南宋书院制度的发展，其学规、讲会形式影响后世书院文化。",
   "value": "",
   "source": "zhuzi_quanshu",
   "layer": "scholarship",
   "era": "南宋",
   "place": "wuyi_jingshe",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "精舍之设，会友讲学、刊定经籍，实开南宋书院制度之先，后世白鹿、岳麓多循其矩（朱子全书/ 书院史研究）。",
   "note": "制度（书院）+ 思想（理学教育）。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "WY_S02",
   "subject": "place:dahongpao_mud_tree",
   "predicate": "大红袍御茶园见证武夷茶贡茶与商品化历史",
   "value_text": "武夷山天心永乐禅寺附近大红袍母树，自明代即被列为贡茶，清代商品化加剧，成为武夷岩茶符号与茶业社会网络节点。",
   "value": "",
   "source": "xu_cha_jing",
   "layer": "scholarship",
   "era": "明—清",
   "place": "dahongpao_mud_tree",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "武夷茶自宋元入贡，明始有岩茶之目，大红袍尤称上品，清季商贾云集，茶利甲于闽中（续茶经/ 茶史研究）。",
   "note": "社会（茶业）+ 制度（贡茶）。",
   "dims": [
    4,
    3
   ],
   "dim_source": "declared",
   "_party": "清·私修",
   "_faction": null
  },
  {
   "id": "WY_S03",
   "subject": "person:xu_xiake",
   "predicate": "徐霞客游记记载九曲溪与丹霞地貌，开实测先河",
   "value_text": "明代徐霞客游武夷山，详记九曲溪、天游峰、接笋峰等丹霞胜景，其观察与记述为武夷山早期科学考察文献。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "明",
   "place": "jiuqu_stream",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "霞客游武夷，详志九曲之源流、峰岩之奇崛，其文兼具游记与地学观察，为后世研究武夷地貌所重（徐霞客游记研究/ 地理学史）。",
   "note": "地理（地貌）+ 思想（游观）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_I01",
   "subject": "place:tongmu_guan",
   "predicate": "桐木关高海拔云雾环境造就正山小种独特风味",
   "value_text": "桐木关位于武夷山国家级自然保护区内，海拔高、云雾多、湿度大，其微环境使当地茶树内含物丰富，形成正山小种松烟香、桂圆汤的独特品质。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "tongmu_guan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "桐木关山深雾重、竹木翳然，所产茶叶经松烟熏焙，别具风味，茶界以为地理环境使然（学界茶学推论）。",
   "note": "地理（微环境）+ 技术（制茶）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_I02",
   "subject": "place:wuyi_mountain",
   "predicate": "晋商茶路将武夷红茶纳入万里茶道",
   "value_text": "清代武夷红茶经福建、江西、湖北北上，由晋商运至恰克图、俄属西伯利亚，武夷山遂为万里茶道南端重要节点。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "wuyi_mountain",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "闽红之销于北，晋商主之，自武夷下信江、越大庾、入汉水以达恰克图，万里茶道由此连缀（学界经济史推论）。",
   "note": "社会（茶路商帮）+ 地理（交通节点）。",
   "dims": [
    4,
    1
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_I03",
   "subject": "place:wuyi_jingshe",
   "predicate": "朱子理学通过武夷精舍影响东亚书院文化",
   "value_text": "朱熹在武夷精舍形成的讲学方式与理学话语，经高丽、日本学者吸收，对东亚书院制度、科举教育与社会伦理产生深远影响。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "南宋",
   "place": "wuyi_jingshe",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "武夷讲席既开，高丽李朝、日本镰仓以降儒者多循朱子之书，书院制度亦由此远播东国（学界思想史推论）。",
   "note": "制度（书院）+ 思想（理学东传）。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_I04",
   "subject": "place:jiuqu_stream",
   "predicate": "丹霞地貌与佛、道、儒三教寺庙并存折射多元信仰",
   "value_text": "九曲溪两岸既有佛教寺院、道教宫观，也有儒生书院与朱子祠，自然山水与多元信仰空间叠加，形成武夷独特的文化景观。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "宋—清",
   "place": "jiuqu_stream",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "九曲之区，释老儒冠错处，书院与梵宫相望，山容水态因人而文，信仰多元于此可见（学界文化地理推论）。",
   "note": "地理（溪谷）+ 思想（多元信仰）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_I05",
   "subject": "place:chengcun_han_city",
   "predicate": "城村汉城与朱子理学叠加使武夷山成持续千年的文化层",
   "value_text": "武夷山从西汉闽越国都城，到南宋朱子理学中心，再到明清茶乡与当代世界遗产，不同时代的文化层在此叠压，形成连续的历史地理剖面。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "汉—今",
   "place": "chengcun_han_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "自闽越王城迄朱子精舍、明清茶市，武夷一地数千年文脉相续，实为东南文化层累之标本（学界历史地理推论）。",
   "note": "思想（文化传承）+ 事件（层累）。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_G01",
   "subject": "place:wuyi_jingshe",
   "predicate": "武夷精舍原建筑形制与历代重修细节公开有限",
   "value_text": "武夷精舍初创时的建筑布局、屋宇规模与南宋以后各代重修、兴废的具体记录，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "南宋",
   "place": "wuyi_jingshe",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：精舍建筑史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "武夷精舍初创与历代重修的建筑考古、样式雷或地方志图档",
    "skills": [
     "建筑史",
     "书院史",
     "考古学"
    ],
    "accept": "若有南宋基址发掘报告或明清重修碑刻，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_G02",
   "subject": "place:wuyi_mountain",
   "predicate": "武夷茶清代外销的具体商帮、运量与价格数据公开有限",
   "value_text": "清代武夷红茶经万里茶道外销的商帮构成、年运量、沿途价格与终端市场分布等量化数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "清",
   "place": "wuyi_mountain",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：茶路贸易量化。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "清代武夷红茶外销的商帮账簿、关税档案、恰克图贸易统计",
    "skills": [
     "经济史",
     "茶史",
     "档案学"
    ],
    "accept": "若有清代商号账册或海关/理藩院贸易档案公开，可补社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "WY_G03",
   "subject": "place:chengcun_han_city",
   "predicate": "城村汉城西汉闽越国宫殿布局与行政档案公开有限",
   "value_text": "城村汉城内部宫殿区、宗庙、官署的具体布局，以及闽越国日常行政、户籍、赋役档案，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "西汉",
   "place": "chengcun_han_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：汉城内部结构与行政。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "城村汉城宫殿基址、官署遗址与闽越国文字/简牍考古",
    "skills": [
     "考古学",
     "秦汉史",
     "闽越国研究"
    ],
    "accept": "若有汉代简牍或宫殿基址测绘，可补地理(1)/制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "WY_G01",
  "WY_G02",
  "WY_G03"
 ],
 "events": [
  {
   "id": "ev_wuyishan_01",
   "year": 1183,
   "era": "南宋淳熙十年",
   "kind": "建院",
   "title": "朱熹建武夷精舍·理学南传",
   "place": "wuyi_jingshe",
   "text": "南宋淳熙十年（1183）朱熹于武夷山五曲隐屏峰下建武夷精舍，讲学著述、会友论道，使武夷山成为南宋理学传播中心之一，影响东亚书院文化数百年。",
   "subject": "event:ev_wuyishan_01"
  },
  {
   "id": "ev_wuyishan_02",
   "year": 1999,
   "era": "1999",
   "kind": "申遗",
   "title": "武夷山列入UNESCO世界文化与自然双重遗产",
   "place": "wuyi_mountain",
   "text": "1999年武夷山被联合国教科文组织列入《世界遗产名录》，成为中国第四处、福建首处世界文化与自然双重遗产，以生物多样性、丹霞地貌与理学文化价值获认。",
   "subject": "event:ev_wuyishan_02"
  },
  {
   "id": "ev_wuyishan_03",
   "year": 1650,
   "era": "清顺治前后",
   "kind": "茶业兴起",
   "title": "武夷红茶兴起·万里茶道南埠",
   "place": "tongmu_guan",
   "text": "清代武夷山区桐木关一带创制正山小种红茶，经闽赣古道、恰克图茶道远销欧洲，武夷山遂为万里茶道南端重要节点，晋商、闽商在此交汇。",
   "subject": "event:ev_wuyishan_03"
  }
 ],
 "edges": [
  {
   "from": "wuyi_jingshe",
   "to": "wuyi_mountain",
   "relation": "位于五曲隐屏峰下",
   "note": "武夷精舍位于武夷山五曲隐屏峰下，是山中理学与书院文化的核心节点。",
   "label": "位于五曲隐屏峰下",
   "type": "misc"
  },
  {
   "from": "jiuqu_stream",
   "to": "wuyi_mountain",
   "relation": "穿行景区",
   "note": "九曲溪蜿蜒穿行于武夷山景区东部，两岸峰岩、书院、寺庙错落，是景观与文化廊道。",
   "label": "穿行景区",
   "type": "misc"
  },
  {
   "from": "dahongpao_mud_tree",
   "to": "wuyi_mountain",
   "relation": "位于天心岩一带",
   "note": "大红袍母树位于武夷山天心永乐禅寺附近，是武夷岩茶与贡茶文化的物质见证。",
   "label": "位于天心岩一带",
   "type": "misc"
  },
  {
   "from": "tongmu_guan",
   "to": "wuyi_mountain",
   "relation": "西北保护区",
   "note": "桐木关位于武夷山国家级自然保护区西北，与江西交界，是正山小种红茶发源地。",
   "label": "西北保护区",
   "type": "misc"
  },
  {
   "from": "chengcun_han_city",
   "to": "wuyi_mountain",
   "relation": "东南约15公里",
   "note": "城村汉城遗址位于武夷山市东南兴田镇，与武夷山景区同属闽越国至宋明文化层。",
   "label": "东南约15公里",
   "type": "misc"
  }
 ],
 "control": [
  {
   "place_id": "wuyi_jingshe",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  },
  {
   "place_id": "wuyi_mountain",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  },
  {
   "place_id": "tongmu_guan",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  },
  {
   "place_id": "chengcun_han_city",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  },
  {
   "place_id": "jiuqu_stream",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  },
  {
   "place_id": "dahongpao_mud_tree",
   "party": "学界",
   "start": 1183,
   "end": 1999,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "wuyi_jingshe",
   "name": "武夷精舍遗址",
   "lon": 117.95,
   "lat": 27.66,
   "region": "thought"
  },
  {
   "place_id": "wuyi_mountain",
   "name": "武夷山（核心景区）",
   "lon": 117.95,
   "lat": 27.66,
   "region": "thought"
  },
  {
   "place_id": "tongmu_guan",
   "name": "桐木关",
   "lon": 117.75,
   "lat": 27.85,
   "region": "thought"
  },
  {
   "place_id": "chengcun_han_city",
   "name": "城村汉城遗址",
   "lon": 118.02,
   "lat": 27.53,
   "region": "thought"
  },
  {
   "place_id": "jiuqu_stream",
   "name": "九曲溪",
   "lon": 117.98,
   "lat": 27.7,
   "region": "thought"
  },
  {
   "place_id": "dahongpao_mud_tree",
   "name": "大红袍母树/御茶园",
   "lon": 117.96,
   "lat": 27.67,
   "region": "thought"
  }
 ],
 "control_years": [
  1183,
  1999
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
   "宋·私修",
   "元·官修",
   "清·私修",
   "学界"
  ],
  "party_bucket": {
   "宋·私修": "宋·私修",
   "元·官修": "元·官修",
   "清·私修": "清·私修",
   "学界": "学界"
  },
  "party_colors": {
   "宋·私修": "#B23A48",
   "元·官修": "#6C7A89",
   "清·私修": "#7B5C3E",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_宋·私修": {
    "name": "宋·私修",
    "macro_party": "宋·私修",
    "note": "auto"
   },
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_清·私修": {
    "name": "清·私修",
    "macro_party": "清·私修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_宋·私修": "#B23A48",
   "f_元·官修": "#6C7A89",
   "f_清·私修": "#7B5C3E",
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
        116.75,
        26.53
       ],
       [
        116.75,
        28.85
       ],
       [
        119.02,
        28.85
       ],
       [
        119.02,
        26.53
       ],
       [
        116.75,
        26.53
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
         118.434,
         28.288
        ],
        [
         118.444,
         28.254
        ],
        [
         118.491,
         28.238
        ],
        [
         118.493,
         28.263
        ],
        [
         118.588,
         28.283
        ],
        [
         118.595,
         28.258
        ],
        [
         118.651,
         28.277
        ],
        [
         118.675,
         28.271
        ],
        [
         118.699,
         28.31
        ],
        [
         118.72,
         28.312
        ],
        [
         118.756,
         28.252
        ],
        [
         118.802,
         28.24
        ],
        [
         118.804,
         28.208
        ],
        [
         118.771,
         28.189
        ],
        [
         118.806,
         28.155
        ],
        [
         118.802,
         28.117
        ],
        [
         118.768,
         28.106
        ],
        [
         118.719,
         28.064
        ],
        [
         118.734,
         28.028
        ],
        [
         118.73,
         27.971
        ],
        [
         118.754,
         27.948
        ],
        [
         118.818,
         27.917
        ],
        [
         118.829,
         27.848
        ],
        [
         118.874,
         27.734
        ],
        [
         118.88,
         27.668
        ],
        [
         118.914,
         27.62
        ],
        [
         118.909,
         27.568
        ],
        [
         118.869,
         27.54
        ],
        [
         118.908,
         27.461
        ],
        [
         118.956,
         27.45
        ],
        [
         118.986,
         27.476
        ],
        [
         118.983,
         27.499
        ],
        [
         119.02,
         27.498
        ],
        [
         119.02,
         28.85
        ],
        [
         118.292,
         28.85
        ],
        [
         118.3,
         28.826
        ],
        [
         118.364,
         28.813
        ],
        [
         118.403,
         28.703
        ],
        [
         118.428,
         28.681
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.412,
         28.557
        ],
        [
         118.43,
         28.515
        ],
        [
         118.415,
         28.497
        ],
        [
         118.475,
         28.479
        ],
        [
         118.457,
         28.425
        ],
        [
         118.432,
         28.402
        ],
        [
         118.455,
         28.384
        ],
        [
         118.48,
         28.327
        ],
        [
         118.434,
         28.288
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
         119.02,
         26.53
        ],
        [
         119.02,
         27.498
        ],
        [
         118.983,
         27.499
        ],
        [
         118.986,
         27.476
        ],
        [
         118.956,
         27.45
        ],
        [
         118.908,
         27.461
        ],
        [
         118.869,
         27.54
        ],
        [
         118.909,
         27.568
        ],
        [
         118.914,
         27.62
        ],
        [
         118.88,
         27.668
        ],
        [
         118.874,
         27.734
        ],
        [
         118.829,
         27.848
        ],
        [
         118.818,
         27.917
        ],
        [
         118.754,
         27.948
        ],
        [
         118.73,
         27.971
        ],
        [
         118.734,
         28.028
        ],
        [
         118.719,
         28.064
        ],
        [
         118.768,
         28.106
        ],
        [
         118.802,
         28.117
        ],
        [
         118.806,
         28.155
        ],
        [
         118.771,
         28.189
        ],
        [
         118.804,
         28.208
        ],
        [
         118.802,
         28.24
        ],
        [
         118.756,
         28.252
        ],
        [
         118.72,
         28.312
        ],
        [
         118.699,
         28.31
        ],
        [
         118.675,
         28.271
        ],
        [
         118.651,
         28.277
        ],
        [
         118.595,
         28.258
        ],
        [
         118.588,
         28.283
        ],
        [
         118.493,
         28.263
        ],
        [
         118.491,
         28.238
        ],
        [
         118.444,
         28.254
        ],
        [
         118.434,
         28.288
        ],
        [
         118.424,
         28.291
        ],
        [
         118.314,
         28.222
        ],
        [
         118.339,
         28.194
        ],
        [
         118.375,
         28.187
        ],
        [
         118.361,
         28.156
        ],
        [
         118.356,
         28.092
        ],
        [
         118.242,
         28.076
        ],
        [
         118.2,
         28.05
        ],
        [
         118.154,
         28.062
        ],
        [
         118.121,
         28.042
        ],
        [
         118.129,
         28.017
        ],
        [
         118.095,
         28.004
        ],
        [
         118.097,
         27.971
        ],
        [
         117.999,
         27.991
        ],
        [
         117.965,
         27.963
        ],
        [
         117.943,
         27.974
        ],
        [
         117.911,
         27.949
        ],
        [
         117.856,
         27.946
        ],
        [
         117.787,
         27.896
        ],
        [
         117.788,
         27.856
        ],
        [
         117.74,
         27.8
        ],
        [
         117.705,
         27.834
        ],
        [
         117.682,
         27.824
        ],
        [
         117.65,
         27.852
        ],
        [
         117.61,
         27.863
        ],
        [
         117.556,
         27.966
        ],
        [
         117.522,
         27.982
        ],
        [
         117.478,
         27.931
        ],
        [
         117.454,
         27.94
        ],
        [
         117.408,
         27.894
        ],
        [
         117.366,
         27.882
        ],
        [
         117.342,
         27.856
        ],
        [
         117.334,
         27.888
        ],
        [
         117.28,
         27.871
        ],
        [
         117.277,
         27.848
        ],
        [
         117.303,
         27.833
        ],
        [
         117.296,
         27.764
        ],
        [
         117.245,
         27.719
        ],
        [
         117.205,
         27.714
        ],
        [
         117.204,
         27.684
        ],
        [
         117.175,
         27.677
        ],
        [
         117.115,
         27.692
        ],
        [
         117.096,
         27.667
        ],
        [
         117.112,
         27.646
        ],
        [
         117.094,
         27.628
        ],
        [
         117.065,
         27.666
        ],
        [
         117.041,
         27.67
        ],
        [
         117.004,
         27.625
        ],
        [
         117.025,
         27.593
        ],
        [
         117.017,
         27.563
        ],
        [
         117.055,
         27.543
        ],
        [
         117.077,
         27.566
        ],
        [
         117.103,
         27.533
        ],
        [
         117.11,
         27.459
        ],
        [
         117.133,
         27.422
        ],
        [
         117.107,
         27.393
        ],
        [
         117.105,
         27.331
        ],
        [
         117.14,
         27.323
        ],
        [
         117.137,
         27.303
        ],
        [
         117.172,
         27.29
        ],
        [
         117.15,
         27.241
        ],
        [
         117.045,
         27.147
        ],
        [
         117.053,
         27.1
        ],
        [
         116.967,
         27.062
        ],
        [
         116.937,
         27.019
        ],
        [
         116.91,
         27.035
        ],
        [
         116.852,
         27.009
        ],
        [
         116.818,
         27.018
        ],
        [
         116.75,
         26.999
        ],
        [
         116.75,
         26.53
        ],
        [
         119.02,
         26.53
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
         116.75,
         28.85
        ],
        [
         116.75,
         26.999
        ],
        [
         116.818,
         27.018
        ],
        [
         116.852,
         27.009
        ],
        [
         116.91,
         27.035
        ],
        [
         116.937,
         27.019
        ],
        [
         116.967,
         27.062
        ],
        [
         117.053,
         27.1
        ],
        [
         117.045,
         27.147
        ],
        [
         117.15,
         27.241
        ],
        [
         117.172,
         27.29
        ],
        [
         117.137,
         27.303
        ],
        [
         117.14,
         27.323
        ],
        [
         117.105,
         27.331
        ],
        [
         117.107,
         27.393
        ],
        [
         117.133,
         27.422
        ],
        [
         117.11,
         27.459
        ],
        [
         117.103,
         27.533
        ],
        [
         117.077,
         27.566
        ],
        [
         117.055,
         27.543
        ],
        [
         117.017,
         27.563
        ],
        [
         117.025,
         27.593
        ],
        [
         117.004,
         27.625
        ],
        [
         117.041,
         27.67
        ],
        [
         117.065,
         27.666
        ],
        [
         117.094,
         27.628
        ],
        [
         117.112,
         27.646
        ],
        [
         117.096,
         27.667
        ],
        [
         117.115,
         27.692
        ],
        [
         117.175,
         27.677
        ],
        [
         117.204,
         27.684
        ],
        [
         117.205,
         27.714
        ],
        [
         117.245,
         27.719
        ],
        [
         117.296,
         27.764
        ],
        [
         117.303,
         27.833
        ],
        [
         117.277,
         27.848
        ],
        [
         117.28,
         27.871
        ],
        [
         117.334,
         27.888
        ],
        [
         117.342,
         27.856
        ],
        [
         117.366,
         27.882
        ],
        [
         117.408,
         27.894
        ],
        [
         117.454,
         27.94
        ],
        [
         117.478,
         27.931
        ],
        [
         117.522,
         27.982
        ],
        [
         117.556,
         27.966
        ],
        [
         117.61,
         27.863
        ],
        [
         117.65,
         27.852
        ],
        [
         117.682,
         27.824
        ],
        [
         117.705,
         27.834
        ],
        [
         117.74,
         27.8
        ],
        [
         117.788,
         27.856
        ],
        [
         117.787,
         27.896
        ],
        [
         117.856,
         27.946
        ],
        [
         117.911,
         27.949
        ],
        [
         117.943,
         27.974
        ],
        [
         117.965,
         27.963
        ],
        [
         117.999,
         27.991
        ],
        [
         118.097,
         27.971
        ],
        [
         118.095,
         28.004
        ],
        [
         118.129,
         28.017
        ],
        [
         118.121,
         28.042
        ],
        [
         118.154,
         28.062
        ],
        [
         118.2,
         28.05
        ],
        [
         118.242,
         28.076
        ],
        [
         118.356,
         28.092
        ],
        [
         118.361,
         28.156
        ],
        [
         118.375,
         28.187
        ],
        [
         118.339,
         28.194
        ],
        [
         118.314,
         28.222
        ],
        [
         118.424,
         28.291
        ],
        [
         118.434,
         28.288
        ],
        [
         118.48,
         28.327
        ],
        [
         118.455,
         28.384
        ],
        [
         118.432,
         28.402
        ],
        [
         118.457,
         28.425
        ],
        [
         118.475,
         28.479
        ],
        [
         118.415,
         28.497
        ],
        [
         118.43,
         28.515
        ],
        [
         118.412,
         28.557
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.617
        ],
        [
         118.428,
         28.681
        ],
        [
         118.403,
         28.703
        ],
        [
         118.364,
         28.813
        ],
        [
         118.3,
         28.826
        ],
        [
         118.292,
         28.85
        ],
        [
         116.75,
         28.85
        ]
       ]
      ]
     ]
    },
    "n": "江西省"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   116.75,
   26.53,
   119.02,
   28.85
  ]
 }
};
