// 本文件由 tools/build.py 自动生成（切片 fenghuang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["fenghuang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["fenghuang"] = {
 "meta": {
  "kind": "county",
  "region": "hunan",
  "province": "hunan",
  "title": "凤凰（湘西边城·苗土风情）",
  "dossier_label": "凤凰",
  "subtitle": "武陵山麓 · 沱江吊脚楼 · 苗疆边墙 · 边城文学",
  "primary_place": "fenghuang_gucheng",
  "dossier_event": "event:ev_fenghuang_03",
  "vocab_pack": "fenghuang",
  "terrain_grid": "china_coarse",
  "lead": "凤凰古城位于湘西沱江之畔，1704 年设凤凰厅、1795–1806 年乾嘉苗民起义、1934 年沈从文《边城》发表，使这里成为苗疆军政重镇与现代文学中的“湘西边城”。下方为设厅、起义与文学三条主线。",
  "parties_note": "史料以凤凰厅志、湘西民族志为本，沈从文全集为现代私修，学界考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_fenghuang_01": "设凤凰厅",
   "event:ev_fenghuang_02": "乾嘉苗民起义",
   "event:ev_fenghuang_03": "《边城》发表",
   "place:fenghuang_gucheng": "凤凰古城",
   "place:tuo_jiang": "沱江",
   "person:shen_congwen": "沈从文"
  },
  "epoch": "qing_modern",
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
    "note": "凤凰厅制度+苗疆边墙+儒学教育→清廷以军政与教化维系苗疆秩序"
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
    "note": "吊脚楼建筑+虹桥廊桥+边墙碉卡→凤凰兼具人居、交通与山地防御功能"
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
    "note": "苗汉土家多元民族+士绅/军户/商贩→边城社会在冲突与交易中形成"
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
    "note": "武陵山—沱江通道+苗疆事件→凤凰控湘黔渝桂边区，军事地位突出"
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
  "page": "county.html?scene=fenghuang",
  "key": "fenghuang",
  "scene_id": "fenghuang"
 },
 "sources": [
  {
   "id": "fenghuang_tingzhi",
   "title": "凤凰厅志",
   "party": "后世官修",
   "distance_label": "清/民屡修，距明清城事约数十年至数百年",
   "stance_label": "地方志",
   "compiler": "《凤凰厅志》（清/民各版及今纂）",
   "color": "#A0473A",
   "period": "清/民"
  },
  {
   "id": "xiangxi_minzuzhi",
   "title": "湘西民族志",
   "party": "后世官修",
   "distance_label": "近现代整理，距清季苗民事约数十年至百余年",
   "stance_label": "民族史辑录",
   "compiler": "湘西民族史综合辑录",
   "color": "#A0473A",
   "period": "近现代"
  },
  {
   "id": "shen_congwen_quanji",
   "title": "沈从文全集",
   "party": "现代私修",
   "distance_label": "沈从文自撰，距民国文学事为当时人记当时事",
   "stance_label": "现代文学私修",
   "compiler": "沈从文（现代作家）",
   "color": "#7E8CA8",
   "period": "民国"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "湘西民族史与近现代文学综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "fenghuang_gucheng",
   "name": "凤凰古城",
   "lon": 109.604863,
   "lat": 27.947807,
   "type": "古城",
   "modern": "湖南省湘西土家族苗族自治州凤凰县沱江镇",
   "note": "位于沱江中游，国家历史文化名城、国家 5A 景区，始建于清康熙年间，吊脚楼沿沱江而建。",
   "geo_match": "approx",
   "geo_note": "坐标取自腾讯地图公开的凤凰古城旅游区位置（109.604863, 27.947807），待CHGIS精修",
   "elev": 388
  },
  {
   "id": "hong_qiao",
   "name": "虹桥",
   "lon": 109.6005,
   "lat": 27.947,
   "type": "廊桥",
   "modern": "凤凰古城内沱江中段",
   "note": "横跨沱江的风雨廊桥，始建于明洪武、清代重修，桥上建市肆，为古城标志性建筑。",
   "geo_match": "approx",
   "geo_note": "位于凤凰古城沱江中段，取古城中心近似坐标（109.6005, 27.947），待CHGIS精修",
   "elev": 388
  },
  {
   "id": "tuo_jiang",
   "name": "沱江",
   "lon": 109.6,
   "lat": 27.95,
   "type": "河流",
   "modern": "凤凰县境内，武水一级支流",
   "note": "沱江穿凤凰古城而过，是古城吊脚楼与虹桥的依托，也是湘西水运通道。",
   "geo_match": "approx",
   "geo_note": "沱江穿凤凰古城段近似坐标（109.6, 27.95），待CHGIS精修",
   "elev": 390
  },
  {
   "id": "nan_hua_shan",
   "name": "南华山",
   "lon": 109.6,
   "lat": 27.94,
   "type": "山丘",
   "modern": "凤凰古城南郊",
   "note": "位于凤凰古城南侧，为古城背景山丘，山麓有南华山国家森林公园。",
   "geo_match": "approx",
   "geo_note": "凤凰古城南华山近似坐标（109.60, 27.94），待CHGIS精修",
   "elev": 384
  },
  {
   "id": "miao_jiang",
   "name": "苗疆边墙（腊尔山段）",
   "lon": 109.5,
   "lat": 28.0,
   "type": "军事遗址",
   "modern": "凤凰县西北腊尔山—吉信一线",
   "note": "明清“苗疆边墙”遗址，沿腊尔山山脊修筑，连接碉卡哨堡，划分“生苗”与“熟苗”。",
   "geo_match": "approx",
   "geo_note": "苗疆边墙腊尔山段近似坐标（109.50, 28.00），走向与碉卡分布待CHGIS精修",
   "elev": 404
  },
  {
   "id": "wu_ling_shan",
   "name": "武陵山脉",
   "lon": 109.6,
   "lat": 28.0,
   "type": "山脉",
   "modern": "湘鄂渝黔交界",
   "note": "凤凰地处武陵山脉南段，山地与河谷交错，为湘西苗疆的自然地理背景。",
   "geo_match": "approx",
   "geo_note": "武陵山脉南段凤凰县附近近似坐标（109.60, 28.00），待CHGIS精修",
   "elev": 420
  }
 ],
 "persons": [
  {
   "id": "shen_congwen",
   "name": "沈从文",
   "role": "现代作家·湘西边城作者",
   "side": "republic",
   "note": "（1902–1988）湖南凤凰人，现代作家，代表作《边城》《湘行散记》，以凤凰/茶峒为背景建构现代湘西乡土想象。",
   "influence": 1
  },
  {
   "id": "xiong_xiling",
   "name": "熊希龄",
   "role": "民国总理·凤凰籍士绅",
   "side": "republic",
   "note": "（1870–1937）湖南凤凰人，光绪进士，曾任民国国务总理，热心教育与慈善事业，体现晚清湘西儒学教育与士绅公益传统。",
   "influence": 1
  },
  {
   "id": "wu_bayue",
   "name": "吴八月",
   "role": "乾嘉苗民起义领袖",
   "side": "miao",
   "note": "（约 1725–1796）湘黔苗民起义领袖之一，乾嘉起义中被推举为“吴王”，活动于凤凰、松桃一带；私人文书与活动网络细节稀缺。",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "FH_R01",
   "subject": "place:fenghuang_gucheng",
   "predicate": "位于武陵山脉南段、沱江穿城",
   "value_text": "凤凰古城位于湖南省湘西土家族苗族自治州，地处武陵山脉南段、云贵高原东侧，沱江自西向东穿城而过。",
   "value": "",
   "source": "fenghuang_tingzhi",
   "layer": "record",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "凤凰古城位于湖南省西部，地处武陵山脉南部、云贵高原东侧，沱江穿城而过，为湘西苗疆重镇（《凤凰厅志》/ 公开地理资料）。",
   "note": "地理形胜：武陵山—沱江走廊。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_R02",
   "subject": "event:ev_fenghuang_01",
   "predicate": "康熙四十三年设凤凰厅",
   "value_text": "康熙四十三年（1704）设凤凰厅，筑凤凰城，统辖湘西苗疆诸寨，成为湘西政治军事中心。",
   "value": "",
   "source": "fenghuang_tingzhi",
   "layer": "record",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "康熙四十三年（1704）设凤凰厅，治镇筸城，控苗疆要道，为辰沅永靖道所辖（《凤凰厅志》）。",
   "note": "建制事件 + 制度。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_R03",
   "subject": "event:ev_fenghuang_02",
   "predicate": "乾嘉苗民起义以凤凰为中心",
   "value_text": "乾隆六十年至嘉庆十一年（1795–1806）乾嘉苗民起义以凤凰、松桃、秀山等地为中心，震动湘黔渝边区。",
   "value": "",
   "source": "xiangxi_minzuzhi",
   "layer": "record",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "乾嘉苗民起义起于贵州松桃、湖南凤凰、永绥一带，吴八月等为领袖，持续十余年（《湘西民族志》/ 清实录）。",
   "note": "事件 + 社会（民族冲突）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_R04",
   "subject": "event:ev_fenghuang_03",
   "predicate": "1934年沈从文发表《边城》",
   "value_text": "1934 年沈从文发表中篇小说《边城》，以湘西茶峒为背景，塑造翠翠与爷爷的渡船意象。",
   "value": "",
   "source": "shen_congwen_quanji",
   "layer": "record",
   "era": "民国",
   "place": "fenghuang_gucheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "沈从文《边城》1934 年发表于《国闻周报》，小说以茶峒渡口为背景，写湘西人情与自然（《沈从文全集》）。",
   "note": "思想/文学事件。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "现代私修",
   "_faction": null
  },
  {
   "id": "FH_R05",
   "subject": "place:hong_qiao",
   "predicate": "虹桥为沱江上的风雨廊桥",
   "value_text": "虹桥始建于明洪武，清代重建，横跨沱江，为古城商业通道与风雨廊桥，是凤凰古城标志性建筑。",
   "value": "",
   "source": "fenghuang_tingzhi",
   "layer": "record",
   "era": "清",
   "place": "hong_qiao",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "虹桥始建于明洪武年间，清顺治与康熙间重修，为沱江上的风雨桥，桥上有市肆（《凤凰厅志》/ 凤凰古城保护规划）。",
   "note": "技术（廊桥）。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_R06",
   "subject": "place:fenghuang_gucheng",
   "predicate": "吊脚楼为湘西干栏式建筑代表",
   "value_text": "凤凰古城沱江两岸吊脚楼依崖临江而建，为苗族、土家族干栏式建筑典型，体现山地河谷人居技术。",
   "value": "",
   "source": "xiangxi_minzuzhi",
   "layer": "record",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "沱江两岸吊脚楼鳞次栉比，以木构架、悬空挑出、临江而建为特征，为湘西干栏式建筑代表（《湘西民族志》/ 建筑调查）。",
   "note": "技术 + 社会（民族建筑）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_S01",
   "subject": "place:fenghuang_gucheng",
   "predicate": "凤凰厅与苗疆边墙构成改土归流后治理网络",
   "value_text": "凤凰厅与苗疆边墙、屯堡、碉卡构成清代改土归流后对苗疆的军事行政制度网络。",
   "value": "",
   "source": "xiangxi_minzuzhi",
   "layer": "scholarship",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "清政府在湘西设厅治、筑边墙、建碉卡、驻屯军，形成对苗疆的军事—行政一体化控制（湘西民族史研究）。",
   "note": "制度（边疆治理）。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_S02",
   "subject": "person:shen_congwen",
   "predicate": "《边城》塑造现代湘西乡土社会想象",
   "value_text": "沈从文笔下“边城”意象塑造了现代湘西苗族、土家族多元文化并存的乡土社会想象。",
   "value": "",
   "source": "shen_congwen_quanji",
   "layer": "scholarship",
   "era": "民国",
   "place": "fenghuang_gucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "《边城》以茶峒为原型，将湘西的山水、渡船、吊脚楼与苗汉边民生活理想化，深刻影响现代人对凤凰/湘西的想象（文学评论）。",
   "note": "思想 + 社会。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "现代私修",
   "_faction": null
  },
  {
   "id": "FH_S03",
   "subject": "person:xiong_xiling",
   "predicate": "熊希龄体现湘西儒学教育与慈善思想",
   "value_text": "熊希龄等凤凰籍士绅兴办教育、慈善，体现晚清以来湘西儒学教育与慈善思想的传播。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "熊希龄出身凤凰，光绪年间进士，热心教育与慈善事业，回乡办慈幼院、学校，体现湘西士绅的儒化取向（近代人物研究）。",
   "note": "思想（儒学）+ 社会（士绅）。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FH_I01",
   "subject": "place:fenghuang_gucheng",
   "predicate": "湘黔渝边区通道促成多元民族交汇",
   "value_text": "凤凰地处湘黔渝边区通道，山地与河谷交错，促成苗、汉、土家多元民族交汇的社会形态。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "凤凰东控辰沅、西托云贵、南扼桂边、北制川鄂，为五方杂处之地，苗、汉、土家在此交易、通婚、冲突（学界综合推论）。",
   "note": "地理→社会。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FH_I02",
   "subject": "place:miao_jiang",
   "predicate": "苗疆边墙是制度与山地防御技术结合",
   "value_text": "苗疆边墙与碉卡是明清中央王朝在湘西“防苗”制度与山地防御技术的结合。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "miao_jiang",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "苗疆边墙沿山脊修筑，连接碉堡、哨卡，既划分“生苗”“熟苗”，也是封锁山地的军事工程（学界综合推论）。",
   "note": "技术 + 制度。",
   "dims": [
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FH_I03",
   "subject": "place:fenghuang_gucheng",
   "predicate": "苗族信仰与沈从文文学构成湘西文化认同",
   "value_text": "苗族信仰、赶秋节、傩戏等民俗与沈从文文学共同构成现代湘西文化认同的核心符号。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "近现代",
   "place": "fenghuang_gucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "凤凰的苗族祭祀、赶秋、银饰与沈从文笔下的边城意象相互叠加，成为湘西文化认同的双重来源（学界综合推论）。",
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
   "id": "FH_I04",
   "subject": "event:ev_fenghuang_02",
   "predicate": "起义推动清廷调整苗疆治理政策",
   "value_text": "乾嘉苗民起义推动清廷调整苗疆治理政策，凤凰厅军事行政功能进一步强化。",
   "value": "",
   "source": "xiangxi_minzuzhi",
   "layer": "inference",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "乾嘉起义后，清廷在湘西增修碉卡、改流官、设屯田，强化凤凰厅对苗疆的控制（湘西民族史研究）。",
   "note": "事件→制度。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "FH_I05",
   "subject": "event:ev_fenghuang_03",
   "predicate": "《边城》使凤凰成为文学文化符号",
   "value_text": "《边城》发表使凤凰成为中国现代文学中的“湘西边城”文化符号，推动了现代旅游想象。",
   "value": "",
   "source": "shen_congwen_quanji",
   "layer": "inference",
   "era": "民国",
   "place": "fenghuang_gucheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "《边城》出版后，凤凰与“边城”高度绑定，茶峒、渡船、翠翠成为湘西乃至中国现代性的文学符号（文学评论）。",
   "note": "思想 + 事件。",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "现代私修",
   "_faction": null
  },
  {
   "id": "FH_G01",
   "subject": "place:fenghuang_gucheng",
   "predicate": "古城墙与吊脚楼营造匠作数据公开有限",
   "value_text": "明清凤凰古城墙、城门与吊脚楼的营造匠作、木构架年代测定数据公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "fenghuang_gucheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：建筑考古与匠作传承资料不足。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "凤凰古城墙、城门、吊脚楼的木构架年代与营造匠作",
    "skills": [
     "建筑史",
     "民族建筑",
     "考古学"
    ],
    "accept": "若有古城墙修缮报告、木构件测年或匠人口述，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FH_G02",
   "subject": "place:miao_jiang",
   "predicate": "苗疆边墙精确走向与碉卡遗址数据不足",
   "value_text": "苗疆边墙具体走向、长度与碉卡遗址的精确空间数据，公开测绘不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "miao_jiang",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：边墙遗址系统测绘。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "湘西苗疆边墙遗址的精确走向、长度、碉卡分布与GIS数据",
    "skills": [
     "历史地理",
     "军事史",
     "GIS考古"
    ],
    "accept": "若有田野调查测绘或文物普查档案，可补技术/制度层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "FH_G03",
   "subject": "person:wu_bayue",
   "predicate": "吴八月等起义领袖私人文书稀缺",
   "value_text": "吴八月等苗民起义领袖的私人文书、活动网络细节，正史记载稀缺。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "清",
   "place": "fenghuang_gucheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：起义领袖个人档案。",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "吴八月等乾嘉苗民起义领袖的私人文书、活动网络与口述史",
    "skills": [
     "苗民史",
     "民族史",
     "口述史"
    ],
    "accept": "若有地方家谱、民间唱本或民族学调查，可补社会(4)层人物断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FH_G01",
  "FH_G02",
  "FH_G03"
 ],
 "events": [
  {
   "id": "ev_fenghuang_01",
   "year": 1704,
   "era": "康熙四十三年",
   "kind": "建制",
   "title": "设凤凰厅",
   "place": "fenghuang_gucheng",
   "text": "康熙四十三年（1704）清廷设凤凰厅，治镇筸城，统辖湘西苗疆诸寨，筑城置防，成为湘黔边区政治军事中心。",
   "subject": "event:ev_fenghuang_01"
  },
  {
   "id": "ev_fenghuang_02",
   "year": 1795,
   "era": "乾隆六十年",
   "kind": "民变",
   "title": "乾嘉苗民起义",
   "place": "miao_jiang",
   "text": "乾隆六十年（1795）湘黔苗民在吴八月、石柳邓等领导下起义，波及凤凰、松桃、永绥等地，持续至嘉庆十一年（1806），震动湘西苗疆。",
   "subject": "event:ev_fenghuang_02"
  },
  {
   "id": "ev_fenghuang_03",
   "year": 1934,
   "era": "民国二十三年",
   "kind": "文学",
   "title": "沈从文发表《边城》",
   "place": "fenghuang_gucheng",
   "text": "1934 年沈从文发表中篇小说《边城》，以湘西茶峒渡船为背景，塑造翠翠、爷爷与老船夫的意象，使凤凰成为中国现代文学中的“湘西边城”文化符号。",
   "subject": "event:ev_fenghuang_03"
  }
 ],
 "edges": [
  {
   "from": "hong_qiao",
   "to": "fenghuang_gucheng",
   "kind": "within",
   "note": "虹桥位于凤凰古城沱江中段",
   "label": "",
   "type": "misc"
  },
  {
   "from": "tuo_jiang",
   "to": "fenghuang_gucheng",
   "kind": "adjacent",
   "note": "沱江穿凤凰古城而过",
   "label": "",
   "type": "misc"
  },
  {
   "from": "nan_hua_shan",
   "to": "fenghuang_gucheng",
   "kind": "adjacent",
   "note": "南华山位于凤凰古城南郊",
   "label": "",
   "type": "misc"
  },
  {
   "from": "miao_jiang",
   "to": "fenghuang_gucheng",
   "kind": "near",
   "note": "苗疆边墙位于凤凰县西北，为古城军事屏障",
   "label": "",
   "type": "misc"
  },
  {
   "from": "wu_ling_shan",
   "to": "fenghuang_gucheng",
   "kind": "near",
   "note": "武陵山脉南段构成凤凰古城的自然地理背景",
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
   "现代私修",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "现代私修": "现代私修",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#A0473A",
   "现代私修": "#7E8CA8",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_现代私修": {
    "name": "现代私修",
    "macro_party": "现代私修",
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
   "f_现代私修": "#7E8CA8",
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
        108.5,
        26.94
       ],
       [
        108.5,
        29.0
       ],
       [
        110.605,
        29.0
       ],
       [
        110.605,
        26.94
       ],
       [
        108.5,
        26.94
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
         110.605,
         26.94
        ],
        [
         110.605,
         29.0
        ],
        [
         109.294,
         29.0
        ],
        [
         109.293,
         28.987
        ],
        [
         109.261,
         28.952
        ],
        [
         109.235,
         28.882
        ],
        [
         109.247,
         28.801
        ],
        [
         109.241,
         28.777
        ],
        [
         109.299,
         28.747
        ],
        [
         109.295,
         28.722
        ],
        [
         109.253,
         28.692
        ],
        [
         109.271,
         28.672
        ],
        [
         109.193,
         28.636
        ],
        [
         109.202,
         28.598
        ],
        [
         109.235,
         28.62
        ],
        [
         109.252,
         28.607
        ],
        [
         109.307,
         28.621
        ],
        [
         109.32,
         28.58
        ],
        [
         109.274,
         28.538
        ],
        [
         109.274,
         28.495
        ],
        [
         109.261,
         28.465
        ],
        [
         109.264,
         28.393
        ],
        [
         109.289,
         28.374
        ],
        [
         109.269,
         28.338
        ],
        [
         109.275,
         28.313
        ],
        [
         109.318,
         28.278
        ],
        [
         109.335,
         28.294
        ],
        [
         109.388,
         28.268
        ],
        [
         109.368,
         28.255
        ],
        [
         109.34,
         28.19
        ],
        [
         109.338,
         28.142
        ],
        [
         109.314,
         28.104
        ],
        [
         109.298,
         28.036
        ],
        [
         109.336,
         28.063
        ],
        [
         109.379,
         28.035
        ],
        [
         109.362,
         28.008
        ],
        [
         109.32,
         27.989
        ],
        [
         109.302,
         27.956
        ],
        [
         109.322,
         27.868
        ],
        [
         109.347,
         27.838
        ],
        [
         109.333,
         27.783
        ],
        [
         109.378,
         27.737
        ],
        [
         109.367,
         27.722
        ],
        [
         109.414,
         27.725
        ],
        [
         109.471,
         27.68
        ],
        [
         109.457,
         27.674
        ],
        [
         109.47,
         27.629
        ],
        [
         109.451,
         27.586
        ],
        [
         109.462,
         27.568
        ],
        [
         109.405,
         27.551
        ],
        [
         109.303,
         27.476
        ],
        [
         109.3,
         27.424
        ],
        [
         109.245,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.167,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.142,
         27.418
        ],
        [
         109.104,
         27.337
        ],
        [
         109.045,
         27.331
        ],
        [
         109.054,
         27.294
        ],
        [
         108.984,
         27.268
        ],
        [
         108.963,
         27.236
        ],
        [
         108.908,
         27.205
        ],
        [
         108.927,
         27.161
        ],
        [
         108.879,
         27.106
        ],
        [
         108.791,
         27.084
        ],
        [
         108.878,
         27.016
        ],
        [
         108.943,
         27.017
        ],
        [
         108.943,
         27.017
        ],
        [
         108.94,
         27.045
        ],
        [
         109.008,
         27.08
        ],
        [
         109.033,
         27.104
        ],
        [
         109.129,
         27.123
        ],
        [
         109.101,
         27.069
        ],
        [
         109.166,
         27.067
        ],
        [
         109.217,
         27.115
        ],
        [
         109.239,
         27.149
        ],
        [
         109.264,
         27.132
        ],
        [
         109.335,
         27.139
        ],
        [
         109.359,
         27.153
        ],
        [
         109.415,
         27.154
        ],
        [
         109.441,
         27.118
        ],
        [
         109.473,
         27.135
        ],
        [
         109.455,
         27.069
        ],
        [
         109.487,
         27.054
        ],
        [
         109.498,
         27.08
        ],
        [
         109.52,
         27.059
        ],
        [
         109.555,
         26.947
        ],
        [
         109.54,
         26.94
        ],
        [
         110.605,
         26.94
        ]
       ]
      ]
     ]
    },
    "n": "湖南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         108.5,
         29.0
        ],
        [
         108.5,
         28.627
        ],
        [
         108.501,
         28.627
        ],
        [
         108.502,
         28.638
        ],
        [
         108.576,
         28.66
        ],
        [
         108.636,
         28.621
        ],
        [
         108.605,
         28.591
        ],
        [
         108.611,
         28.539
        ],
        [
         108.574,
         28.531
        ],
        [
         108.587,
         28.464
        ],
        [
         108.61,
         28.436
        ],
        [
         108.609,
         28.407
        ],
        [
         108.576,
         28.386
        ],
        [
         108.58,
         28.343
        ],
        [
         108.612,
         28.325
        ],
        [
         108.668,
         28.334
        ],
        [
         108.656,
         28.36
        ],
        [
         108.697,
         28.401
        ],
        [
         108.689,
         28.422
        ],
        [
         108.64,
         28.457
        ],
        [
         108.657,
         28.477
        ],
        [
         108.7,
         28.482
        ],
        [
         108.709,
         28.501
        ],
        [
         108.746,
         28.451
        ],
        [
         108.78,
         28.426
        ],
        [
         108.76,
         28.39
        ],
        [
         108.783,
         28.381
        ],
        [
         108.762,
         28.304
        ],
        [
         108.727,
         28.282
        ],
        [
         108.738,
         28.228
        ],
        [
         108.773,
         28.213
        ],
        [
         108.822,
         28.245
        ],
        [
         108.855,
         28.2
        ],
        [
         108.895,
         28.22
        ],
        [
         108.924,
         28.217
        ],
        [
         108.93,
         28.19
        ],
        [
         109.006,
         28.163
        ],
        [
         109.027,
         28.22
        ],
        [
         109.086,
         28.184
        ],
        [
         109.102,
         28.202
        ],
        [
         109.081,
         28.248
        ],
        [
         109.117,
         28.278
        ],
        [
         109.152,
         28.35
        ],
        [
         109.154,
         28.417
        ],
        [
         109.192,
         28.471
        ],
        [
         109.234,
         28.475
        ],
        [
         109.274,
         28.495
        ],
        [
         109.274,
         28.538
        ],
        [
         109.32,
         28.58
        ],
        [
         109.307,
         28.621
        ],
        [
         109.252,
         28.607
        ],
        [
         109.235,
         28.62
        ],
        [
         109.202,
         28.598
        ],
        [
         109.193,
         28.636
        ],
        [
         109.271,
         28.672
        ],
        [
         109.253,
         28.692
        ],
        [
         109.295,
         28.722
        ],
        [
         109.299,
         28.747
        ],
        [
         109.241,
         28.777
        ],
        [
         109.247,
         28.801
        ],
        [
         109.235,
         28.882
        ],
        [
         109.261,
         28.952
        ],
        [
         109.293,
         28.987
        ],
        [
         109.294,
         29.0
        ],
        [
         108.5,
         29.0
        ]
       ]
      ]
     ]
    },
    "n": "重庆市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         109.274,
         28.495
        ],
        [
         109.234,
         28.475
        ],
        [
         109.192,
         28.471
        ],
        [
         109.154,
         28.417
        ],
        [
         109.152,
         28.35
        ],
        [
         109.117,
         28.278
        ],
        [
         109.081,
         28.248
        ],
        [
         109.102,
         28.202
        ],
        [
         109.086,
         28.184
        ],
        [
         109.027,
         28.22
        ],
        [
         109.006,
         28.163
        ],
        [
         108.93,
         28.19
        ],
        [
         108.924,
         28.217
        ],
        [
         108.895,
         28.22
        ],
        [
         108.855,
         28.2
        ],
        [
         108.822,
         28.245
        ],
        [
         108.773,
         28.213
        ],
        [
         108.738,
         28.228
        ],
        [
         108.727,
         28.282
        ],
        [
         108.762,
         28.304
        ],
        [
         108.783,
         28.381
        ],
        [
         108.76,
         28.39
        ],
        [
         108.78,
         28.426
        ],
        [
         108.746,
         28.451
        ],
        [
         108.709,
         28.501
        ],
        [
         108.7,
         28.482
        ],
        [
         108.657,
         28.477
        ],
        [
         108.64,
         28.457
        ],
        [
         108.689,
         28.422
        ],
        [
         108.697,
         28.401
        ],
        [
         108.656,
         28.36
        ],
        [
         108.668,
         28.334
        ],
        [
         108.612,
         28.325
        ],
        [
         108.58,
         28.343
        ],
        [
         108.576,
         28.386
        ],
        [
         108.609,
         28.407
        ],
        [
         108.61,
         28.436
        ],
        [
         108.587,
         28.464
        ],
        [
         108.574,
         28.531
        ],
        [
         108.611,
         28.539
        ],
        [
         108.605,
         28.591
        ],
        [
         108.636,
         28.621
        ],
        [
         108.576,
         28.66
        ],
        [
         108.502,
         28.638
        ],
        [
         108.501,
         28.627
        ],
        [
         108.5,
         28.627
        ],
        [
         108.5,
         26.94
        ],
        [
         109.54,
         26.94
        ],
        [
         109.555,
         26.947
        ],
        [
         109.52,
         27.059
        ],
        [
         109.498,
         27.08
        ],
        [
         109.487,
         27.054
        ],
        [
         109.455,
         27.069
        ],
        [
         109.473,
         27.135
        ],
        [
         109.441,
         27.118
        ],
        [
         109.415,
         27.154
        ],
        [
         109.359,
         27.153
        ],
        [
         109.335,
         27.139
        ],
        [
         109.264,
         27.132
        ],
        [
         109.239,
         27.149
        ],
        [
         109.217,
         27.115
        ],
        [
         109.166,
         27.067
        ],
        [
         109.101,
         27.069
        ],
        [
         109.129,
         27.123
        ],
        [
         109.033,
         27.104
        ],
        [
         109.008,
         27.08
        ],
        [
         108.94,
         27.045
        ],
        [
         108.943,
         27.017
        ],
        [
         108.943,
         27.017
        ],
        [
         108.878,
         27.016
        ],
        [
         108.791,
         27.084
        ],
        [
         108.879,
         27.106
        ],
        [
         108.927,
         27.161
        ],
        [
         108.908,
         27.205
        ],
        [
         108.963,
         27.236
        ],
        [
         108.984,
         27.268
        ],
        [
         109.054,
         27.294
        ],
        [
         109.045,
         27.331
        ],
        [
         109.104,
         27.337
        ],
        [
         109.142,
         27.418
        ],
        [
         109.142,
         27.448
        ],
        [
         109.167,
         27.418
        ],
        [
         109.202,
         27.45
        ],
        [
         109.245,
         27.418
        ],
        [
         109.3,
         27.424
        ],
        [
         109.303,
         27.476
        ],
        [
         109.405,
         27.551
        ],
        [
         109.462,
         27.568
        ],
        [
         109.451,
         27.586
        ],
        [
         109.47,
         27.629
        ],
        [
         109.457,
         27.674
        ],
        [
         109.471,
         27.68
        ],
        [
         109.414,
         27.725
        ],
        [
         109.367,
         27.722
        ],
        [
         109.378,
         27.737
        ],
        [
         109.333,
         27.783
        ],
        [
         109.347,
         27.838
        ],
        [
         109.322,
         27.868
        ],
        [
         109.302,
         27.956
        ],
        [
         109.32,
         27.989
        ],
        [
         109.362,
         28.008
        ],
        [
         109.379,
         28.035
        ],
        [
         109.336,
         28.063
        ],
        [
         109.298,
         28.036
        ],
        [
         109.314,
         28.104
        ],
        [
         109.338,
         28.142
        ],
        [
         109.34,
         28.19
        ],
        [
         109.368,
         28.255
        ],
        [
         109.388,
         28.268
        ],
        [
         109.335,
         28.294
        ],
        [
         109.318,
         28.278
        ],
        [
         109.275,
         28.313
        ],
        [
         109.269,
         28.338
        ],
        [
         109.289,
         28.374
        ],
        [
         109.264,
         28.393
        ],
        [
         109.261,
         28.465
        ],
        [
         109.274,
         28.495
        ]
       ]
      ]
     ]
    },
    "n": "贵州省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        109.442,
        26.94
       ],
       [
        109.444,
        26.954
       ],
       [
        109.424,
        27.038
       ],
       [
        109.441,
        27.08
       ],
       [
        109.494,
        27.079
       ],
       [
        109.556,
        27.107
       ],
       [
        109.628,
        27.165
       ],
       [
        109.667,
        27.177
       ],
       [
        109.675,
        27.144
       ],
       [
        109.692,
        27.128
       ],
       [
        109.719,
        27.131
       ],
       [
        109.74,
        27.152
       ],
       [
        109.755,
        27.19
       ],
       [
        109.823,
        27.189
       ],
       [
        109.943,
        27.147
       ],
       [
        110.051,
        27.19
       ],
       [
        110.217,
        27.423
       ],
       [
        110.264,
        27.504
       ],
       [
        110.284,
        27.566
       ],
       [
        110.277,
        27.611
       ],
       [
        110.299,
        27.653
       ],
       [
        110.351,
        27.694
       ],
       [
        110.367,
        27.729
       ],
       [
        110.347,
        27.758
       ],
       [
        110.348,
        27.791
       ],
       [
        110.371,
        27.828
       ],
       [
        110.347,
        27.863
       ],
       [
        110.275,
        27.896
       ],
       [
        110.251,
        27.927
       ],
       [
        110.275,
        27.955
       ],
       [
        110.252,
        27.981
       ],
       [
        110.182,
        28.005
       ],
       [
        110.135,
        28.036
       ],
       [
        110.113,
        28.076
       ],
       [
        110.128,
        28.128
       ],
       [
        110.179,
        28.193
       ],
       [
        110.195,
        28.242
       ],
       [
        110.175,
        28.275
       ],
       [
        110.182,
        28.289
       ],
       [
        110.216,
        28.286
       ],
       [
        110.272,
        28.32
       ],
       [
        110.351,
        28.393
       ],
       [
        110.419,
        28.486
       ],
       [
        110.477,
        28.602
       ],
       [
        110.605,
        28.674
       ]
      ]
     ]
    },
    "n": "Yuan"
   }
  ],
  "lakes": [],
  "_bbox": [
   108.5,
   26.94,
   110.605,
   29.0
  ]
 }
};
