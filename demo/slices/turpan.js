// 本文件由 tools/build.py 自动生成（切片 turpan），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["turpan"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["turpan"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "province": "xinjiang",
  "title": "吐鲁番（高昌国·交河故城·坎儿井）",
  "dossier_label": "吐鲁番",
  "subtitle": "高昌故城 · 交河故城 · 坎儿井 · 丝路绿洲",
  "primary_place": "turpan_city",
  "dossier_event": "event:ev_turpan_01",
  "vocab_pack": "turpan",
  "terrain_grid": "china_coarse",
  "lead": "吐鲁番位于新疆天山东段南麓、吐鲁番盆地中心，是丝绸之路北道上的著名绿洲。汉代为车师前国地，交河城为其都城；公元502年麹氏高昌立国，以高昌城为都，历九世一百四十余年。640年唐灭高昌，置西州，设安西都护府于交河城。明清时期，当地逐步形成庞大的坎儿井地下灌溉网络，支撑了极端干旱环境下的绿洲农业。火焰山、艾丁湖（中国陆地最低点）与天山融水共同构成了吐鲁番独特的自然与人文景观。",
  "parties_note": "史料以汉书、旧唐书等官修为主，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_turpan_01": "唐灭高昌",
   "event:ev_turpan_02": "麹氏立国",
   "event:ev_turpan_03": "坎儿井成网",
   "place:turpan_city": "高昌故城",
   "person:xuanzang": "玄奘"
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
    "note": "麹氏高昌+唐西州+安西都护府+佛教传播→吐鲁番绿洲政治与宗教秩序"
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
    "note": "坎儿井水利+天山融水+葡萄园艺+丝路商旅→吐鲁番物资与交通枢纽"
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
    "note": "车师/高昌居民+汉军屯田+僧团商队+玄奘行旅→多族群绿洲社会"
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
    "note": "天山南麓+丝路北道+交河高昌→吐鲁番控西域门户",
    "layer": "inference"
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
  "page": "county.html?scene=turpan",
  "key": "turpan",
  "scene_id": "turpan"
 },
 "sources": [
  {
   "id": "hanshu",
   "title": "汉书",
   "party": "汉·后朝官修",
   "stance_label": "汉后朝官修",
   "distance_label": "成书东汉明帝—章帝时，距楚汉约二百余年",
   "color": "#C0584F",
   "compiler": "班固（东汉）",
   "period": "汉",
   "note": "西域传、车师传载交河城、车师前国与西域都护，为东汉官修西汉史。"
  },
  {
   "id": "jiu_tangshu",
   "title": "旧唐书",
   "party": "五代·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书后晋开运二年（945），距事约130年",
   "color": "#7A6A53",
   "compiler": "刘昫等（后晋）",
   "period": "五代",
   "note": "高昌传、西域传载麹氏高昌、唐灭高昌置西州、玄奘行经高昌等。"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "color": "#2E7D8F",
   "compiler": "吐鲁番学与丝绸之路综合研究",
   "period": "今",
   "note": "交河故城/高昌故城考古、坎儿井研究、吐鲁番文书与现代历史地理综合研究。"
  }
 ],
 "places": [
  {
   "id": "turpan_city",
   "name": "吐鲁番/高昌故城",
   "lon": 89.18,
   "lat": 42.95,
   "type": "古城/绿洲城市",
   "modern": "新疆吐鲁番市高昌区",
   "note": "古称高昌，汉唐西域重镇；640年唐灭高昌后设西州，是丝绸之路北道上的绿洲政治与经济中心。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "高昌故城近似坐标（89.18, 42.95），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 145
  },
  {
   "id": "jiaohe_ruins",
   "name": "交河故城",
   "lon": 89.05,
   "lat": 42.95,
   "type": "古城/遗址",
   "modern": "新疆吐鲁番市雅尔乡",
   "note": "车师前国都城，唐代安西都护府早期驻地之一；位于柳叶形河心台地上，是世界上保存最完好的生土建筑城市遗址之一。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "交河故城近似坐标（89.05, 42.95），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 74
  },
  {
   "id": "kanerjing",
   "name": "坎儿井",
   "lon": 89.1,
   "lat": 42.9,
   "type": "水利/工程遗址",
   "modern": "新疆吐鲁番盆地",
   "note": "干旱区地下引水灌溉工程，由竖井、地下渠道、涝坝组成，支撑吐鲁番绿洲农业与人口。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "吐鲁番坎儿井分布区近似坐标（89.10, 42.90），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": -6
  },
  {
   "id": "flaming_mountains",
   "name": "火焰山",
   "lon": 89.5,
   "lat": 42.9,
   "type": "山脉/自然景观",
   "modern": "新疆吐鲁番市高昌区北",
   "note": "天山东段南麓红砂岩褶皱山脉，因高温与赤红色山体著称，是吐鲁番盆地的自然边界与文学意象。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "火焰山近似坐标（89.50, 42.90），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 81
  },
  {
   "id": "tianshan_east",
   "name": "天山东段",
   "lon": 88.5,
   "lat": 43.0,
   "type": "山脉/自然屏障",
   "modern": "新疆吐鲁番市北与乌鲁木齐市南之间",
   "note": "天山山脉东段，分隔北疆准噶尔盆地与南疆塔里木盆地，吐鲁番盆地位于其南麓。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "天山东段近似坐标（88.50, 43.00），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 483
  },
  {
   "id": "ayding_lake",
   "name": "艾丁湖",
   "lon": 89.25,
   "lat": 42.67,
   "type": "湖泊/低地",
   "modern": "新疆吐鲁番市高昌区南",
   "note": "中国陆地最低点（湖面海拔约-154米），位于吐鲁番盆地南端，塑造了极端干旱的局地气候。（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "艾丁湖近似坐标（89.25, 42.67），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": -63
  }
 ],
 "persons": [
  {
   "id": "qu_jia",
   "name": "麹嘉",
   "era": "高昌/北魏",
   "role": "麹氏高昌开国君主",
   "note": "北魏景明年间自立为高昌王，建立麹氏高昌政权，定都高昌城，奠定了吐鲁番盆地一百四十余年的本土政治格局。",
   "influence": 0
  },
  {
   "id": "qu_wentai",
   "name": "麹文泰",
   "era": "高昌/唐",
   "role": "麹氏高昌末代君主",
   "note": "麹氏高昌后期国王，曾礼遇西行求法的玄奘；后因与西突厥结盟阻断西域贡道，640年被唐所灭。",
   "influence": 0
  },
  {
   "id": "xuanzang",
   "name": "玄奘",
   "era": "唐",
   "role": "高僧·西行求法者",
   "note": "贞观年间西行求法，途经高昌时受麹文泰礼遇，讲法月余；其《大唐西域记》记载了高昌及周边的风物。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "TP_R01",
   "subject": "event:ev_turpan_01",
   "predicate": "唐灭高昌，于其地置西州",
   "value_text": "640年，唐太宗派侯君集率军攻灭麹氏高昌，于其地置西州，并设安西都护府于交河城，吐鲁番正式纳入唐朝直接管辖。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "贞观十四年，侯君集讨高昌，灭之，以其地为西州，置安西都护府于交河城（旧唐书·高昌传）。",
   "note": "事件（灭国置州）+ 制度（州县）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_R02",
   "subject": "event:ev_turpan_02",
   "predicate": "麹嘉自立为高昌王，建立麹氏高昌",
   "value_text": "约公元502年，金城麹氏自立为王，建立麹氏高昌政权，以高昌城为都，历九世一百四十余年。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "高昌",
   "place": "turpan_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "景明中，麹嘉称王，据高昌城，自为王，世相承袭，至唐贞观十四年乃灭（旧唐书·高昌传）。",
   "note": "事件（建国）+ 制度（王位世袭）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_R03",
   "subject": "event:ev_turpan_03",
   "predicate": "明清时期吐鲁番坎儿井水利网络形成",
   "value_text": "明清时期，吐鲁番盆地在原有引水基础上逐步形成庞大的坎儿井地下灌溉网络，支撑绿洲农业与人口扩张。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "明清",
   "place": "kanerjing",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "吐鲁番盆地坎儿井至明清渐成规模，地下渠道纵横，引天山水灌溉葡萄、瓜果田（吐鲁番学与水利史研究）。",
   "note": "事件（水利发展）+ 技术（坎儿井）。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_R04",
   "subject": "place:turpan_city",
   "predicate": "高昌城为汉唐西域重镇与丝路绿洲都城",
   "value_text": "高昌城位于今新疆吐鲁番市东，是汉代车师、魏晋戊己校尉、麹氏高昌与唐西州的治所，为丝绸之路北道上的政治与经济中心。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "record",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "高昌国，汉车师前王之故地，汉元帝置戊己校尉，晋立高昌郡，后麹氏窃据，唐改为西州（旧唐书·高昌传）。",
   "note": "地理（都城）+ 制度（治所）。",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_R05",
   "subject": "place:jiaohe_ruins",
   "predicate": "交河故城为车师前国都城与唐初安西都护府驻地",
   "value_text": "交河故城位于吐鲁番市西约10公里的雅尔湖河心台地上，汉代为车师前国都城，唐初曾设安西都护府于此。",
   "value": "",
   "source": "hanshu",
   "layer": "record",
   "era": "汉—唐",
   "place": "jiaohe_ruins",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "车师前国，王治交河城，河水分流绕城下，故号交河（汉书·西域传）。",
   "note": "地理（古城）+ 事件（设府）。",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "TP_R06",
   "subject": "place:kanerjing",
   "predicate": "坎儿井是吐鲁番干旱区地下引水灌溉工程",
   "value_text": "坎儿井由竖井、地下渠道、涝坝组成，将天山地下水引入吐鲁番盆地绿洲，是当地适应极端干旱环境的水利创造。",
   "value": "",
   "source": "modern",
   "layer": "record",
   "era": "明清",
   "place": "kanerjing",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "坎儿井横绝沙碛，引地下水以溉田，吐鲁番赖之以成沃壤（吐鲁番水利史/ 现代考订）。",
   "note": "地理（水利分布）+ 技术（工程）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_S01",
   "subject": "place:kanerjing",
   "predicate": "坎儿井体现干旱区人群的水利智慧与生态适应",
   "value_text": "坎儿井通过地下渠道减少蒸发，将山地融水输送至绿洲，是吐鲁番居民在极端干旱环境中形成的水利技术与社会协作体系。",
   "value": "",
   "source": "modern",
   "layer": "scholarship",
   "era": "明清",
   "place": "kanerjing",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "坎儿井之设，因地制宜，竖井相望，暗渠通流，体现了干旱区社会的水利适应智慧（吐鲁番学研究）。",
   "note": "技术（水利）+ 社会（协作）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_S02",
   "subject": "place:tianshan_east",
   "predicate": "天山东段分隔南北疆，吐鲁番居其南麓",
   "value_text": "天山东段横亘于吐鲁番盆地北侧，既是北疆准噶尔盆地与南疆塔里木盆地的分水岭，也是吐鲁番绿洲水源的主要来源。",
   "value": "",
   "source": "hanshu",
   "layer": "scholarship",
   "era": "汉",
   "place": "tianshan_east",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "天山东西横亘，其东段南麓为车师、危须之地，汉使西出常取道于此（汉书·西域传/ 后世地理志研究）。",
   "note": "地理（山脉）+ 思想（空间认知）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "汉·后朝官修",
   "_faction": null
  },
  {
   "id": "TP_S03",
   "subject": "person:xuanzang",
   "predicate": "玄奘西行经高昌，留下中亚与西域行记",
   "value_text": "玄奘贞观年间西行求法，途经高昌受麹文泰礼遇，讲经月余；《大唐西域记》记录了高昌及周边城郭、物产与佛教状况。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "scholarship",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "玄奘至缚喝国……又经高昌，王麹文泰厚礼留之，奘为说法一月乃行（旧唐书·玄奘传/ 大唐西域记研究）。",
   "note": "思想（佛教）+ 社会（文化交流）。",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_I01",
   "subject": "place:ayding_lake",
   "predicate": "艾丁湖低洼盆地聚热形成极端干旱环境",
   "value_text": "艾丁湖位于吐鲁番盆地南端，海拔约-154米，为中国陆地最低点；其低洼封闭地形使热量集聚、降水稀少，塑造了极端干旱环境。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "当代",
   "place": "ayding_lake",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "艾丁湖湖面低于海平面百余米，盆地闭塞，气流下沉增温，形成典型暖温带极干旱气候（学界自然地理推论）。",
   "note": "地理（地貌）+ 技术（环境认知）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_I02",
   "subject": "place:flaming_mountains",
   "predicate": "火焰山红砂岩与高温塑造了绿洲边界与交通意象",
   "value_text": "火焰山由中生代红砂岩褶皱构成，夏季地表温度极高，成为吐鲁番盆地北缘的天然屏障，也是丝路商旅与文学中的显著意象。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "flaming_mountains",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "火焰山赤色砂岩延绵，夏季炎热，行人视为畏途；其北为博格达山，南为吐鲁番绿洲（学界地貌与交通史推论）。",
   "note": "地理（地貌）+ 社会（商旅意象）。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_I03",
   "subject": "place:turpan_city",
   "predicate": "高昌控丝绸之路北道与天山南麓交通节点",
   "value_text": "高昌位于天山南麓、吐鲁番盆地中心，东连河西，西接龟兹，南通楼兰，是丝绸之路北道上的关键中转站。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "inference",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "高昌当西域门户，东至伊吾，西抵焉耆，商旅往来多出其途（学界丝绸之路交通史推论）。",
   "note": "地理（节点）+ 制度（贸易）+ 社会（商旅）。",
   "dims": [
    1,
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_I04",
   "subject": "place:kanerjing",
   "predicate": "坎儿井支撑吐鲁番葡萄园艺与丝路商旅补给",
   "value_text": "坎儿井网络灌溉的葡萄园、瓜果园与农田，不仅为当地居民提供粮食，也为丝路商旅提供水源与补给。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "明清",
   "place": "kanerjing",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "吐鲁番葡萄、瓜果因灌溉而盛，坎儿井水稳定，商队经此得以休整补给（学界经济史推论）。",
   "note": "技术（灌溉）+ 社会（农商）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_I05",
   "subject": "person:qu_wentai",
   "predicate": "麹文泰礼遇玄奘，推动高昌佛教与唐蕃交流",
   "value_text": "麹文泰虽为唐所灭，但其对玄奘的礼遇与对佛教的护持，使高昌成为唐初西域佛教传播的重要节点。",
   "value": "",
   "source": "jiu_tangshu",
   "layer": "inference",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "文泰崇信佛教，延玄奘说法，都城讲席盛极一时，高昌佛教因此转盛（学界佛教史推论）。",
   "note": "思想（佛教）+ 事件（弘法）+ 社会（文化交流）。",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "五代·官修",
   "_faction": null
  },
  {
   "id": "TP_G01",
   "subject": "place:turpan_city",
   "predicate": "高昌故城晚期街区、民居与手工业作坊考古公开有限",
   "value_text": "高昌故城城墙、寺院与王宫遗址已有考古成果，但晚期街区布局、普通民居形制及手工业作坊区资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐",
   "place": "turpan_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：高昌城市社会史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "高昌故城晚期地层、民居基址与手工业作坊考古报告",
    "skills": [
     "城市考古",
     "丝绸之路考古",
     "唐代史"
    ],
    "accept": "若有街区测绘或作坊发掘报告，可补技术(2)/社会(4)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_G02",
   "subject": "place:jiaohe_ruins",
   "predicate": "交河故城官署、寺院内部布局与建筑分期公开有限",
   "value_text": "交河故城台地形态与城墙遗迹清晰，但官署区、佛教寺院内部空间布局及建筑分期资料公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "汉—唐",
   "place": "jiaohe_ruins",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：交河建筑考古。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "交河故城中央大寺、官署区与住宅区分期发掘",
    "skills": [
     "建筑考古",
     "西域史",
     "佛教考古"
    ],
    "accept": "若有寺院或官署基址测绘与分期报告，可补技术(2)/制度(3)/思想(5)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TP_G03",
   "subject": "place:kanerjing",
   "predicate": "古代坎儿井始建年代、技术传播路径与分布统计公开有限",
   "value_text": "坎儿井在吐鲁番大规模出现的具体年代、技术是否源自中亚或本土创新，以及历史分布数量等量化数据公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "明清",
   "place": "kanerjing",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：坎儿井历史技术史。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "吐鲁番古代坎儿井始建年代测定、技术比较与历史分布档案",
    "skills": [
     "水利史",
     "技术史",
     "中亚史"
    ],
    "accept": "若有碳十四测年、技术传播比较或清代水利档案，可补技术(2)/地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TP_G01",
  "TP_G02",
  "TP_G03"
 ],
 "events": [
  {
   "id": "ev_turpan_01",
   "year": 640,
   "era": "唐贞观十四年",
   "kind": "置州",
   "title": "唐灭高昌，置西州",
   "place": "turpan_city",
   "text": "640年，唐太宗派侯君集率军攻灭麹氏高昌，于其地置西州，并设安西都护府于交河城，吐鲁番正式纳入唐朝直接管辖。",
   "subject": "event:ev_turpan_01"
  },
  {
   "id": "ev_turpan_02",
   "year": 502,
   "era": "北魏景明三年",
   "kind": "建国",
   "title": "麹氏高昌立国",
   "place": "turpan_city",
   "text": "约公元502年，金城麹氏自立为王，建立麹氏高昌政权，以高昌城为都，历九世一百四十余年，是吐鲁番盆地最重要的本土政权。",
   "subject": "event:ev_turpan_02"
  },
  {
   "id": "ev_turpan_03",
   "year": 1700,
   "era": "清康熙前后",
   "kind": "水利",
   "title": "吐鲁番坎儿井水利网络形成",
   "place": "kanerjing",
   "text": "明清时期，吐鲁番盆地在原有引水基础上逐步形成庞大的坎儿井地下灌溉网络，支撑了绿洲农业与人口扩张。",
   "subject": "event:ev_turpan_03"
  }
 ],
 "edges": [
  {
   "from": "jiaohe_ruins",
   "to": "turpan_city",
   "relation": "高昌西北约10公里",
   "note": "交河故城位于高昌故城西北、雅尔湖河心台地上，唐初曾同为西州军政中心。",
   "label": "高昌西北约10公里",
   "type": "misc"
  },
  {
   "from": "kanerjing",
   "to": "turpan_city",
   "relation": "灌溉高昌绿洲",
   "note": "坎儿井网络分布于吐鲁番盆地，将天山雪水引入高昌城周边绿洲，支撑农业与商旅。",
   "label": "灌溉高昌绿洲",
   "type": "misc"
  },
  {
   "from": "flaming_mountains",
   "to": "turpan_city",
   "relation": "北屏",
   "note": "火焰山位于高昌故城以北，是天山南麓余脉，也是吐鲁番盆地北缘的显著地标。",
   "label": "北屏",
   "type": "misc"
  },
  {
   "from": "tianshan_east",
   "to": "turpan_city",
   "relation": "北侧水源",
   "note": "天山东段位于吐鲁番盆地以北，其冰川融水为坎儿井与绿洲提供水源。",
   "label": "北侧水源",
   "type": "misc"
  },
  {
   "from": "ayding_lake",
   "to": "turpan_city",
   "relation": "南侧约30公里",
   "note": "艾丁湖位于吐鲁番盆地南端，是中国陆地最低点，其低洼地形加剧了盆地干热气候。",
   "label": "南侧约30公里",
   "type": "misc"
  }
 ],
 "control": [
  {
   "place_id": "turpan_city",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  },
  {
   "place_id": "kanerjing",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  },
  {
   "place_id": "jiaohe_ruins",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  },
  {
   "place_id": "tianshan_east",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  },
  {
   "place_id": "ayding_lake",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  },
  {
   "place_id": "flaming_mountains",
   "party": "学界",
   "start": 502,
   "end": 1700,
   "timeline": "main"
  }
 ],
 "control_seats": [
  {
   "place_id": "turpan_city",
   "name": "吐鲁番/高昌故城",
   "lon": 89.18,
   "lat": 42.95,
   "region": "xibei"
  },
  {
   "place_id": "kanerjing",
   "name": "坎儿井",
   "lon": 89.1,
   "lat": 42.9,
   "region": "xibei"
  },
  {
   "place_id": "jiaohe_ruins",
   "name": "交河故城",
   "lon": 89.05,
   "lat": 42.95,
   "region": "xibei"
  },
  {
   "place_id": "tianshan_east",
   "name": "天山东段",
   "lon": 88.5,
   "lat": 43.0,
   "region": "xibei"
  },
  {
   "place_id": "ayding_lake",
   "name": "艾丁湖",
   "lon": 89.25,
   "lat": 42.67,
   "region": "xibei"
  },
  {
   "place_id": "flaming_mountains",
   "name": "火焰山",
   "lon": 89.5,
   "lat": 42.9,
   "region": "xibei"
  }
 ],
 "control_years": [
  502,
  1700
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
   "汉·后朝官修",
   "五代·官修",
   "学界"
  ],
  "party_bucket": {
   "汉·后朝官修": "汉·后朝官修",
   "五代·官修": "五代·官修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·后朝官修": "#C0584F",
   "五代·官修": "#7A6A53",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_汉·后朝官修": {
    "name": "汉·后朝官修",
    "macro_party": "汉·后朝官修",
    "note": "auto"
   },
   "f_五代·官修": {
    "name": "五代·官修",
    "macro_party": "五代·官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·后朝官修": "#C0584F",
   "f_五代·官修": "#7A6A53",
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
        87.5,
        41.67
       ],
       [
        87.5,
        44.0
       ],
       [
        90.5,
        44.0
       ],
       [
        90.5,
        41.67
       ],
       [
        87.5,
        41.67
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
         90.5,
         41.67
        ],
        [
         90.5,
         44.0
        ],
        [
         87.5,
         44.0
        ],
        [
         87.5,
         41.67
        ],
        [
         90.5,
         41.67
        ]
       ]
      ]
     ]
    },
    "n": "新疆维吾尔自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   87.5,
   41.67,
   90.5,
   44.0
  ]
 }
};
