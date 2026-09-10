// 本文件由 tools/build.py 自动生成（切片 hangzhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["hangzhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["hangzhou"] = {
 "meta": {
  "kind": "county",
  "region": "jiangnan",
  "province": "zhejiang",
  "title": "杭州（西湖·临安·吴越）",
  "dossier_label": "杭州",
  "subtitle": "江南运河南端 · 西湖十景 · 南宋行在 · 吴越保境",
  "primary_place": "west_lake",
  "dossier_event": "event:ev_hangzhou_03",
  "vocab_pack": "hangzhou",
  "terrain_grid": "china_coarse",
  "lead": "杭州位于浙江北部、钱塘江下游，隋凿江南河（610）使杭州为运河南端、运河—海港城市崛起；唐白居易、宋苏轼相继浚西湖、筑白堤苏堤；907年钱镠建吴越国定都杭州、保境安民；1138年南宋定都临安，西湖十景定型。西湖2011年列入UNESCO（1334）。",
  "parties_note": "史料以杭州府志、吴越国史为本，武林旧事/白氏长庆集/苏文忠公全集为宋唐私修，现代考订作补充；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_hangzhou_01": "隋凿江南河",
   "event:ev_hangzhou_02": "吴越定都",
   "event:ev_hangzhou_03": "南宋定都",
   "place:west_lake": "西湖",
   "person:su_shi": "苏轼"
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
    "note": "南宋行在制度+西湖山水意象+保境安民→杭州政治文化中心"
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
    "note": "江南运河+白堤苏堤水利+海塘→杭州运河—海港复合枢纽"
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
    "note": "市民文化+商旅网络+庙会→江南社会外向流动与文化繁荣"
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
    "note": "钱塘江海港+运河终端+南宋定都事件→杭州控江南与海上丝路"
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
  "page": "county.html?scene=hangzhou",
  "key": "hangzhou",
  "scene_id": "hangzhou"
 },
 "sources": [
  {
   "id": "hangzhou_fuzhi",
   "title": "杭州府志（西湖志）",
   "party": "后世官修",
   "distance_label": "明清屡修地方志，距西湖疏浚与临安事数百年至千余年",
   "stance_label": "地方志",
   "compiler": "《杭州府志》及西湖专志（明清官修）",
   "color": "#C0703A",
   "period": "明清"
  },
  {
   "id": "wu_yue_shi",
   "title": "吴越国史（吴越备史类）",
   "party": "后世官修",
   "distance_label": "后世辑录，距钱镠建都事约数百年",
   "stance_label": "割据国史",
   "compiler": "吴越国史事辑录（后世官修）",
   "color": "#C0703A",
   "period": "后世"
  },
  {
   "id": "wulin_jiu_shi",
   "title": "武林旧事",
   "party": "宋·私修",
   "distance_label": "周密（宋遗民）自撰，记临安事为当时人记当时事",
   "stance_label": "宋人笔记",
   "compiler": "周密（宋）",
   "color": "#8E7CC3",
   "period": "南宋"
  },
  {
   "id": "bai_juyi_ji",
   "title": "白氏长庆集",
   "party": "唐·私修",
   "distance_label": "白居易自撰，距刺杭事为当时人记当时事",
   "stance_label": "唐人诗文集",
   "compiler": "白居易（唐）",
   "color": "#9B7CC3",
   "period": "唐"
  },
  {
   "id": "su_shi_wenji",
   "title": "苏文忠公全集",
   "party": "宋·私修",
   "distance_label": "苏轼自撰及门人编，距知杭事为当时人记当时事",
   "stance_label": "宋人诗文集",
   "compiler": "苏轼（宋）及门人",
   "color": "#8E7CC3",
   "period": "宋"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "西湖与杭州城市史综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "west_lake",
   "name": "西湖",
   "lon": 120.1429,
   "lat": 30.2477,
   "type": "湖泊/文化景观",
   "modern": "浙江省杭州市西湖区",
   "note": "杭州城西潟湖，三面环山、一面临城，唐宋白居易苏轼相继疏浚，为中国山水文化景观典范；2011年列入UNESCO世界遗产（编号1334）。",
   "geo_match": "approx",
   "geo_note": "西湖中心近似坐标（30.2477, 120.1429），取自公开地理数据；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 118
  },
  {
   "id": "qiantang_river",
   "name": "钱塘江",
   "lon": 120.205,
   "lat": 30.183,
   "type": "河流",
   "modern": "杭州市南部",
   "note": "浙江下游，流经杭州城南入海，潮汐雄壮（钱塘潮），江海塘工程护卫城郭。",
   "geo_match": "approx",
   "geo_note": "钱塘江杭州段近似坐标（30.183, 120.205）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 113
  },
  {
   "id": "lin_an_city",
   "name": "临安城（南宋行在）",
   "lon": 120.1686,
   "lat": 30.2941,
   "type": "古城",
   "modern": "杭州市上城区、拱墅区一带",
   "note": "南宋行在临安府所在，宫廷与市井并峙，御街、皇城、瓦舍勾栏遍布，为当时天下都会（CHGIS V6 治所坐标，WGS84：临安府/杭州府）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：临安府/杭州府（南宋行在临安（杭州））",
   "elev": 73
  },
  {
   "id": "wushan",
   "name": "吴山（伍公山）",
   "lon": 120.17,
   "lat": 30.24,
   "type": "山/祠庙",
   "modern": "杭州市上城区吴山景区",
   "note": "杭州城中之山，伍公庙祀伍子胥、城隍庙香火甚盛，为市民游观与庙会中心。",
   "geo_match": "approx",
   "geo_note": "吴山近似坐标（30.240, 120.170）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 104
  },
  {
   "id": "bai_su_di",
   "name": "白堤·苏堤",
   "lon": 120.148,
   "lat": 30.255,
   "type": "堤/工程",
   "modern": "西湖景区",
   "note": "白堤传为白居易所筑、苏堤为苏轼以葑泥筑成，跨桥连岛，为西湖水利工程与景观骨架。",
   "geo_match": "approx",
   "geo_note": "苏堤（西湖中）近似坐标（30.255, 120.148）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 109
  },
  {
   "id": "grand_canal_hz",
   "name": "江南运河杭州段（拱宸桥）",
   "lon": 120.13,
   "lat": 30.29,
   "type": "运河",
   "modern": "杭州市拱墅区",
   "note": "南北大运河江南端，隋凿江南河至今，连通太湖水系与浙东运河，拱宸桥为标志性节点，使杭州兼运河枢纽与海港。",
   "geo_match": "approx",
   "geo_note": "江南运河杭州段（拱宸桥一带）近似坐标（30.290, 120.130）；CHGIS 未收录本要素，坐标据公开地理数据",
   "elev": 94
  }
 ],
 "persons": [
  {
   "id": "bai_juyi",
   "name": "白居易",
   "role": "唐·杭州刺史·西湖浚治",
   "side": "tang",
   "note": "（772—846）字乐天，唐代诗人、杭州刺史，筑白沙堤、浚西湖、开六井，利民至今，留白堤之咏。",
   "influence": 1
  },
  {
   "id": "su_shi",
   "name": "苏轼",
   "role": "宋·杭州知州·苏堤创建者",
   "side": "song",
   "note": "（1037—1101）字子瞻，北宋文豪，两知杭州，募浚西湖、以葑泥筑苏堤，西湖格局定型。",
   "influence": 1
  },
  {
   "id": "qian_liu",
   "name": "钱镠",
   "role": "吴越国武肃王·定都杭州",
   "side": "wuyue",
   "note": "（852—932）吴越国开国君主，定都杭州，保境安民、筑罗城海塘，奠定杭州「东南形胜」之基。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "HZ_R01",
   "subject": "place:west_lake",
   "predicate": "西湖为杭州城西潟湖，唐宋相继疏浚成文化景观",
   "value_text": "西湖位于杭州城西，三面环山、一面临城，本为潟湖；唐白居易、宋苏轼相继疏浚，融入堤桥亭榭，成中国山水文化景观典范。",
   "value": "",
   "source": "hangzhou_fuzhi",
   "layer": "record",
   "era": "唐—宋",
   "place": "west_lake",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "西湖在杭城西，唐白刺史、宋苏学士相继浚治，堤桥映带，为东南名胜（《杭州府志》/ 西湖志）。",
   "note": "地理形胜：潟湖—文化景观。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HZ_R02",
   "subject": "event:ev_hangzhou_01",
   "predicate": "隋凿江南河，杭州为运河南端",
   "value_text": "隋大业六年（610）凿江南河，自京口至余杭（今杭州），杭州为南北大运河江南端，运河—海港城市由此崛起。",
   "value": "",
   "source": "hangzhou_fuzhi",
   "layer": "record",
   "era": "隋",
   "place": "grand_canal_hz",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "大业六年，凿江南河，自京口至余杭，广十余丈，使可通漕，杭州由是通南北、接江海（《杭州府志》/ 隋书）。",
   "note": "事件 + 技术（运河）。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HZ_R03",
   "subject": "event:ev_hangzhou_02",
   "predicate": "钱镠建吴越国、定都杭州",
   "value_text": "唐天祐四年（907）钱镠建吴越国、定都杭州，筑罗城与江海塘，行「保境安民」之策，使杭州为五代乐土。",
   "value": "",
   "source": "wu_yue_shi",
   "layer": "record",
   "era": "吴越",
   "place": "lin_an_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "钱氏据有两浙，定都钱塘，缮罗城、筑海塘，境内安宁，杭民乐业（吴越国史/ 杭州府志）。",
   "note": "事件 + 制度（都城/海塘）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HZ_R04",
   "subject": "event:ev_hangzhou_03",
   "predicate": "南宋定都临安，西湖十景成型",
   "value_text": "南宋建炎三年（1129）升杭州为临安府，绍兴八年（1138）定都，西湖人文极盛，苏堤春晓等西湖十景于南宋定型。",
   "value": "",
   "source": "wulin_jiu_shi",
   "layer": "record",
   "era": "南宋",
   "place": "lin_an_city",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "绍兴八年，定都杭州，称行在，湖山游观之盛前所未有，西湖十景之名起于南宋（武林旧事）。",
   "note": "事件 + 制度（行在）。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "HZ_R05",
   "subject": "person:bai_juyi",
   "predicate": "白居易刺杭，筑白堤、浚西湖、治六井",
   "value_text": "白居易（772—846）任杭州刺史，筑白沙堤、浚西湖、开六井，水利惠民，西湖格局初定。",
   "value": "",
   "source": "bai_juyi_ji",
   "layer": "record",
   "era": "唐",
   "place": "bai_su_di",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "白公刺杭，浚西湖、筑堤蓄泄，民赖其利，留诗「最爱湖东行不足，绿杨阴里白沙堤」（白氏长庆集/ 杭州府志）。",
   "note": "技术（水利堤塘）+ 社会。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "唐·私修",
   "_faction": null
  },
  {
   "id": "HZ_R06",
   "subject": "person:su_shi",
   "predicate": "苏轼两知杭州，募浚西湖筑苏堤",
   "value_text": "苏轼（1037—1101）两知杭州，募民浚西湖、以葑泥筑苏堤，跨桥六座，西湖「淡妆浓抹」格局定型。",
   "value": "",
   "source": "su_shi_wenji",
   "layer": "record",
   "era": "宋",
   "place": "bai_su_di",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "轼知杭州，浚茭葑、创苏堤，西湖始复唐时之盛，民为立祠（苏文忠公全集/ 杭州府志）。",
   "note": "技术（苏堤工程）+ 地理。",
   "dims": [
    2,
    1
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "HZ_S01",
   "subject": "place:lin_an_city",
   "predicate": "南宋临安行在，宫廷市井二元繁盛",
   "value_text": "南宋临安为行在，宫廷与市井并峙，瓦舍勾栏、话本曲艺、夜市繁盛，奠定杭州市民文化。",
   "value": "",
   "source": "wulin_jiu_shi",
   "layer": "scholarship",
   "era": "南宋",
   "place": "lin_an_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "临安户口蕃盛，市井坊隅，瓦舍勾栏遍城，话本、杂剧、百戏竞陈（武林旧事/ 梦粱录研究）。",
   "note": "制度（行在）+ 社会（市民文化）。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "宋·私修",
   "_faction": null
  },
  {
   "id": "HZ_S02",
   "subject": "place:wushan",
   "predicate": "吴山伍公庙与城隍信仰为民间社会中心",
   "value_text": "吴山伍公庙祀伍子胥，城隍信仰为杭州民间社会中心，庙会香市延续至今，承载城市集体记忆。",
   "value": "",
   "source": "hangzhou_fuzhi",
   "layer": "scholarship",
   "era": "宋元—清",
   "place": "wushan",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "吴山伍公庙、城隍庙香火甚盛，岁时有庙会，为合城士女游观祈报之所（杭州府志/ 民俗研究）。",
   "note": "思想（民间信仰）+ 社会。",
   "dims": [
    5,
    4
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HZ_S03",
   "subject": "person:qian_liu",
   "predicate": "钱镠保境安民，奠基杭州文教",
   "value_text": "钱镠「善事中国、保境安民」，吴越为五代乱世乐土，兴学校、崇佛教，奠定杭州文教与「东南佛国」之基。",
   "value": "",
   "source": "wu_yue_shi",
   "layer": "scholarship",
   "era": "吴越",
   "place": "lin_an_city",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "钱王保境安民，境内安居，兴学崇佛，东南文教由是大兴（吴越国史/ 杭州文化研究）。",
   "note": "思想（保境安民）+ 制度。",
   "dims": [
    5,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "HZ_I01",
   "subject": "place:west_lake",
   "predicate": "湖山互塑，杭州「人间天堂」意象成型",
   "value_text": "西湖山水与人文互塑，堤桥亭榭嵌入湖山，使杭州「人间天堂」的城市意象自唐宋成型并延续。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—宋",
   "place": "west_lake",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "西湖以景入城、以文润景，湖山城市格局使「上有天堂下有苏杭」之誉自宋已著（学界文化史推论）。",
   "note": "地理 + 思想（城市意象）。",
   "dims": [
    1,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_I02",
   "subject": "place:grand_canal_hz",
   "predicate": "运河—海港双枢，塑造杭州商业网络",
   "value_text": "江南运河杭州段连通太湖与浙东运河，使杭州兼具运河枢纽与海港功能，商旅辐辏、网络远及海外。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "隋—宋",
   "place": "grand_canal_hz",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "杭州处运河终端、江海之会，漕运与市舶并举，为东南物资集散与海贸出发地（学界经济史推论）。",
   "note": "技术（运河）+ 社会（商业网络）。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_I03",
   "subject": "place:qiantang_river",
   "predicate": "钱塘江海塘与潮汐制约城市东扩",
   "value_text": "钱塘江潮汐与江海塘工程制约杭州向东拓展，江海之交塑造杭州港市与水利社会的性格。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "唐—清",
   "place": "qiantang_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "钱塘江潮大患频，历代修海塘以卫城，江海之交既限拓展亦成港市之利（学界历史地理推论）。",
   "note": "地理（江海）+ 技术（海塘）。",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_I04",
   "subject": "event:ev_hangzhou_03",
   "predicate": "南宋定都使文化重心南移、杭州成江南文化极",
   "value_text": "南宋定都临安，北方士民南渡、文化重心南移，杭州成为江南文化极与全国政治经济中心之一。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "南宋",
   "place": "lin_an_city",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "宋室南渡，衣冠文物萃于临安，江南文脉自此为天下首，杭州遂成文化重镇（学界历史推论）。",
   "note": "事件 + 社会（文化南移）。",
   "dims": [
    6,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_I05",
   "subject": "place:wushan",
   "predicate": "吴山游观与庙会传统强化市民认同",
   "value_text": "吴山为城中山，登高览胜、庙会香市的传统强化杭州山水城市的市民认同与公共生活。",
   "value": "",
   "source": "modern",
   "layer": "inference",
   "era": "宋元—清",
   "place": "wushan",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "吴山岁时有游观、香市，士女毕至，公共空间强化市民归属感（学界社会史推论）。",
   "note": "社会 + 思想（市民认同）。",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_G01",
   "subject": "place:west_lake",
   "predicate": "西湖历代疏浚工程量与堤岸年代数据有限",
   "value_text": "西湖历代疏浚的具体工程量、淤泥量与白堤苏堤堤岸的精确年代数据，公开有限。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "唐—清",
   "place": "west_lake",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：西湖疏浚工程史。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "西湖历代疏浚的工程量、淤泥方量与白堤苏堤堤岸年代",
    "skills": [
     "水利工程史",
     "历史地理",
     "考古测绘"
    ],
    "accept": "若有疏浚档案、古地图或堤岸测年，可补技术(2)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_G02",
   "subject": "place:lin_an_city",
   "predicate": "南宋临安城坊巷与皇城遗址 GIS 数据不足",
   "value_text": "南宋临安城坊巷布局、御街与皇城遗址的精确 GIS 空间数据，公开不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "南宋",
   "place": "lin_an_city",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：临安城历史空间。",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "南宋临安城坊巷、御街、皇城遗址的考古发掘与 GIS 矢量化数据",
    "skills": [
     "考古学",
     "历史地理",
     "GIS"
    ],
    "accept": "若有临安城遗址数字化或文物普查数据，可补制度(3)层断言"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "HZ_G03",
   "subject": "place:qiantang_river",
   "predicate": "吴越罗城与江海塘精确走向数据不足",
   "value_text": "吴越罗城范围与钱塘江海塘的精确走向、工程做法数据，公开不足。",
   "value": "",
   "source": "modern",
   "layer": "gap",
   "era": "吴越—清",
   "place": "qiantang_river",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口：罗城与海塘地理。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "lead": {
    "where": "吴越罗城范围、钱塘江海塘的精确走向与工程做法",
    "skills": [
     "历史地理",
     "水利工程史",
     "GIS"
    ],
    "accept": "若有罗城勘探或海塘调查资料，可补地理(1)层断言"
   },
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "HZ_G01",
  "HZ_G02",
  "HZ_G03"
 ],
 "events": [
  {
   "id": "ev_hangzhou_01",
   "year": 610,
   "era": "隋大业六年",
   "kind": "工程",
   "title": "隋凿江南河·杭州为运河南端",
   "place": "grand_canal_hz",
   "text": "隋大业六年（610）凿江南河，自京口至余杭（今杭州），广十余丈通漕运，杭州由此为南北大运河江南端，运河—海港城市崛起。",
   "subject": "event:ev_hangzhou_01"
  },
  {
   "id": "ev_hangzhou_02",
   "year": 907,
   "era": "唐天祐四年（吴越武肃王元年）",
   "kind": "建制",
   "title": "钱镠建吴越国·定都杭州",
   "place": "lin_an_city",
   "text": "907年钱镠建吴越国、定都杭州，缮罗城、筑江海塘，行「保境安民」之策，吴越为五代乱世乐土，杭州文教奠基。",
   "subject": "event:ev_hangzhou_02"
  },
  {
   "id": "ev_hangzhou_03",
   "year": 1138,
   "era": "南宋绍兴八年",
   "kind": "定都",
   "title": "南宋定都临安·西湖十景定型",
   "place": "lin_an_city",
   "text": "南宋建炎三年（1129）升杭州为临安府，绍兴八年（1138）定都，称行在；西湖人文极盛，苏堤春晓等西湖十景于南宋定型，临安为行在百余年。",
   "subject": "event:ev_hangzhou_03"
  }
 ],
 "edges": [
  {
   "from": "west_lake",
   "to": "lin_an_city",
   "kind": "adjacent",
   "note": "西湖在临安城西，为行在游观核心",
   "label": "",
   "type": "misc"
  },
  {
   "from": "bai_su_di",
   "to": "west_lake",
   "kind": "within",
   "note": "白堤苏堤为西湖堤桥骨架",
   "label": "",
   "type": "misc"
  },
  {
   "from": "wushan",
   "to": "lin_an_city",
   "kind": "within",
   "note": "吴山在临安城内，为市民中心",
   "label": "",
   "type": "misc"
  },
  {
   "from": "grand_canal_hz",
   "to": "lin_an_city",
   "kind": "near",
   "note": "江南运河杭州段通临安、接江海",
   "label": "",
   "type": "misc"
  },
  {
   "from": "qiantang_river",
   "to": "lin_an_city",
   "kind": "adjacent",
   "note": "钱塘江在临安城南，海塘卫城",
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
   "宋·私修",
   "唐·私修",
   "学界"
  ],
  "party_bucket": {
   "后世官修": "后世官修",
   "宋·私修": "宋·私修",
   "唐·私修": "唐·私修",
   "学界": "学界"
  },
  "party_colors": {
   "后世官修": "#C0703A",
   "宋·私修": "#8E7CC3",
   "唐·私修": "#9B7CC3",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_宋·私修": {
    "name": "宋·私修",
    "macro_party": "宋·私修",
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
   "f_后世官修": "#C0703A",
   "f_宋·私修": "#8E7CC3",
   "f_唐·私修": "#9B7CC3",
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
        121.205,
        30.303
       ],
       [
        121.159,
        30.302
       ],
       [
        120.904,
        30.161
       ],
       [
        120.633,
        30.133
       ],
       [
        120.495,
        30.303
       ],
       [
        120.353,
        30.247
       ],
       [
        120.261,
        30.263
       ],
       [
        120.229,
        30.25
       ],
       [
        120.195,
        30.241
       ],
       [
        120.246,
        30.284
       ],
       [
        120.45,
        30.388
       ],
       [
        120.63,
        30.391
       ],
       [
        120.821,
        30.355
       ],
       [
        120.897,
        30.393
       ],
       [
        120.938,
        30.47
       ],
       [
        120.998,
        30.558
       ],
       [
        121.205,
        30.652
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
        119.13,
        29.183
       ],
       [
        119.13,
        31.294
       ],
       [
        121.205,
        31.294
       ],
       [
        121.205,
        30.652
       ],
       [
        120.998,
        30.558
       ],
       [
        120.938,
        30.47
       ],
       [
        120.897,
        30.393
       ],
       [
        120.821,
        30.355
       ],
       [
        120.63,
        30.391
       ],
       [
        120.45,
        30.388
       ],
       [
        120.246,
        30.284
       ],
       [
        120.195,
        30.241
       ],
       [
        120.229,
        30.25
       ],
       [
        120.261,
        30.263
       ],
       [
        120.353,
        30.247
       ],
       [
        120.495,
        30.303
       ],
       [
        120.633,
        30.133
       ],
       [
        120.904,
        30.161
       ],
       [
        121.159,
        30.302
       ],
       [
        121.205,
        30.303
       ],
       [
        121.205,
        29.183
       ],
       [
        119.13,
        29.183
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
         120.901,
         31.017
        ],
        [
         120.94,
         31.01
        ],
        [
         120.949,
         31.03
        ],
        [
         120.989,
         31.014
        ],
        [
         121.001,
         30.938
        ],
        [
         120.993,
         30.89
        ],
        [
         121.02,
         30.872
        ],
        [
         120.992,
         30.837
        ],
        [
         121.038,
         30.814
        ],
        [
         121.06,
         30.845
        ],
        [
         121.098,
         30.857
        ],
        [
         121.138,
         30.826
        ],
        [
         121.123,
         30.779
        ],
        [
         121.175,
         30.772
        ],
        [
         121.205,
         30.782
        ],
        [
         121.205,
         31.294
        ],
        [
         121.139,
         31.294
        ],
        [
         121.143,
         31.275
        ],
        [
         121.09,
         31.292
        ],
        [
         121.06,
         31.245
        ],
        [
         121.077,
         31.158
        ],
        [
         121.018,
         31.134
        ],
        [
         120.93,
         31.141
        ],
        [
         120.881,
         31.135
        ],
        [
         120.859,
         31.1
        ],
        [
         120.891,
         31.094
        ],
        [
         120.901,
         31.017
        ]
       ]
      ]
     ]
    },
    "n": "上海市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.13,
         31.294
        ],
        [
         119.13,
         31.271
        ],
        [
         119.157,
         31.294
        ],
        [
         119.198,
         31.294
        ],
        [
         119.198,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.348,
         31.294
        ],
        [
         119.354,
         31.294
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.81,
         31.149
        ],
        [
         119.827,
         31.174
        ],
        [
         119.878,
         31.161
        ],
        [
         119.921,
         31.17
        ],
        [
         119.946,
         31.106
        ],
        [
         119.989,
         31.059
        ],
        [
         120.001,
         31.027
        ],
        [
         120.053,
         31.006
        ],
        [
         120.111,
         30.956
        ],
        [
         120.15,
         30.937
        ],
        [
         120.224,
         30.927
        ],
        [
         120.316,
         30.934
        ],
        [
         120.371,
         30.949
        ],
        [
         120.358,
         30.887
        ],
        [
         120.423,
         30.903
        ],
        [
         120.435,
         30.921
        ],
        [
         120.442,
         30.861
        ],
        [
         120.46,
         30.84
        ],
        [
         120.489,
         30.764
        ],
        [
         120.505,
         30.758
        ],
        [
         120.564,
         30.836
        ],
        [
         120.59,
         30.854
        ],
        [
         120.655,
         30.847
        ],
        [
         120.683,
         30.882
        ],
        [
         120.713,
         30.885
        ],
        [
         120.709,
         30.933
        ],
        [
         120.685,
         30.955
        ],
        [
         120.698,
         30.971
        ],
        [
         120.746,
         30.962
        ],
        [
         120.77,
         30.997
        ],
        [
         120.821,
         31.007
        ],
        [
         120.866,
         30.99
        ],
        [
         120.901,
         31.017
        ],
        [
         120.891,
         31.094
        ],
        [
         120.859,
         31.1
        ],
        [
         120.881,
         31.135
        ],
        [
         120.93,
         31.141
        ],
        [
         121.018,
         31.134
        ],
        [
         121.077,
         31.158
        ],
        [
         121.06,
         31.245
        ],
        [
         121.09,
         31.292
        ],
        [
         121.143,
         31.275
        ],
        [
         121.139,
         31.294
        ],
        [
         119.13,
         31.294
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
         119.13,
         29.183
        ],
        [
         121.205,
         29.183
        ],
        [
         121.205,
         30.419
        ],
        [
         121.183,
         30.434
        ],
        [
         121.093,
         30.516
        ],
        [
         121.058,
         30.564
        ],
        [
         121.149,
         30.6
        ],
        [
         121.189,
         30.633
        ],
        [
         121.205,
         30.638
        ],
        [
         121.205,
         30.782
        ],
        [
         121.175,
         30.772
        ],
        [
         121.123,
         30.779
        ],
        [
         121.138,
         30.826
        ],
        [
         121.098,
         30.857
        ],
        [
         121.06,
         30.845
        ],
        [
         121.038,
         30.814
        ],
        [
         120.992,
         30.837
        ],
        [
         121.02,
         30.872
        ],
        [
         120.993,
         30.89
        ],
        [
         121.001,
         30.938
        ],
        [
         120.989,
         31.014
        ],
        [
         120.949,
         31.03
        ],
        [
         120.94,
         31.01
        ],
        [
         120.901,
         31.017
        ],
        [
         120.866,
         30.99
        ],
        [
         120.821,
         31.007
        ],
        [
         120.77,
         30.997
        ],
        [
         120.746,
         30.962
        ],
        [
         120.698,
         30.971
        ],
        [
         120.685,
         30.955
        ],
        [
         120.709,
         30.933
        ],
        [
         120.713,
         30.885
        ],
        [
         120.683,
         30.882
        ],
        [
         120.655,
         30.847
        ],
        [
         120.59,
         30.854
        ],
        [
         120.564,
         30.836
        ],
        [
         120.505,
         30.758
        ],
        [
         120.489,
         30.764
        ],
        [
         120.46,
         30.84
        ],
        [
         120.442,
         30.861
        ],
        [
         120.435,
         30.921
        ],
        [
         120.423,
         30.903
        ],
        [
         120.358,
         30.887
        ],
        [
         120.371,
         30.949
        ],
        [
         120.316,
         30.934
        ],
        [
         120.224,
         30.927
        ],
        [
         120.15,
         30.937
        ],
        [
         120.111,
         30.956
        ],
        [
         120.053,
         31.006
        ],
        [
         120.001,
         31.027
        ],
        [
         119.989,
         31.059
        ],
        [
         119.946,
         31.106
        ],
        [
         119.921,
         31.17
        ],
        [
         119.878,
         31.161
        ],
        [
         119.827,
         31.174
        ],
        [
         119.81,
         31.149
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.634,
         31.019
        ],
        [
         119.58,
         30.967
        ],
        [
         119.582,
         30.932
        ],
        [
         119.564,
         30.919
        ],
        [
         119.557,
         30.874
        ],
        [
         119.576,
         30.83
        ],
        [
         119.554,
         30.826
        ],
        [
         119.527,
         30.779
        ],
        [
         119.48,
         30.772
        ],
        [
         119.483,
         30.704
        ],
        [
         119.445,
         30.65
        ],
        [
         119.408,
         30.645
        ],
        [
         119.39,
         30.686
        ],
        [
         119.343,
         30.664
        ],
        [
         119.323,
         30.63
        ],
        [
         119.239,
         30.609
        ],
        [
         119.265,
         30.575
        ],
        [
         119.237,
         30.547
        ],
        [
         119.272,
         30.51
        ],
        [
         119.326,
         30.533
        ],
        [
         119.336,
         30.509
        ],
        [
         119.335,
         30.448
        ],
        [
         119.368,
         30.385
        ],
        [
         119.403,
         30.375
        ],
        [
         119.349,
         30.349
        ],
        [
         119.326,
         30.372
        ],
        [
         119.277,
         30.341
        ],
        [
         119.247,
         30.341
        ],
        [
         119.236,
         30.297
        ],
        [
         119.201,
         30.291
        ],
        [
         119.13,
         30.304
        ],
        [
         119.13,
         29.183
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
         119.13,
         31.294
        ],
        [
         119.13,
         30.304
        ],
        [
         119.201,
         30.291
        ],
        [
         119.236,
         30.297
        ],
        [
         119.247,
         30.341
        ],
        [
         119.277,
         30.341
        ],
        [
         119.326,
         30.372
        ],
        [
         119.349,
         30.349
        ],
        [
         119.403,
         30.375
        ],
        [
         119.368,
         30.385
        ],
        [
         119.335,
         30.448
        ],
        [
         119.336,
         30.509
        ],
        [
         119.326,
         30.533
        ],
        [
         119.272,
         30.51
        ],
        [
         119.237,
         30.547
        ],
        [
         119.265,
         30.575
        ],
        [
         119.239,
         30.609
        ],
        [
         119.323,
         30.63
        ],
        [
         119.343,
         30.664
        ],
        [
         119.39,
         30.686
        ],
        [
         119.408,
         30.645
        ],
        [
         119.445,
         30.65
        ],
        [
         119.483,
         30.704
        ],
        [
         119.48,
         30.772
        ],
        [
         119.527,
         30.779
        ],
        [
         119.554,
         30.826
        ],
        [
         119.576,
         30.83
        ],
        [
         119.557,
         30.874
        ],
        [
         119.564,
         30.919
        ],
        [
         119.582,
         30.932
        ],
        [
         119.58,
         30.967
        ],
        [
         119.634,
         31.019
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.354,
         31.294
        ],
        [
         119.348,
         31.294
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.198,
         31.27
        ],
        [
         119.198,
         31.294
        ],
        [
         119.157,
         31.294
        ],
        [
         119.13,
         31.271
        ],
        [
         119.13,
         31.294
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
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
        120.602,
        31.087
       ],
       [
        120.394,
        30.971
       ],
       [
        120.236,
        30.936
       ],
       [
        120.103,
        30.973
       ],
       [
        119.978,
        31.091
       ],
       [
        119.939,
        31.253
       ],
       [
        119.954,
        31.294
       ],
       [
        120.342,
        31.294
       ],
       [
        120.357,
        31.27
       ],
       [
        120.391,
        31.227
       ],
       [
        120.431,
        31.2
       ],
       [
        120.44,
        31.153
       ],
       [
        120.395,
        31.1
       ],
       [
        120.423,
        31.083
       ],
       [
        120.461,
        31.081
       ],
       [
        120.54,
        31.127
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ],
       [
        120.602,
        31.087
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   }
  ],
  "_bbox": [
   119.13,
   29.183,
   121.205,
   31.294
  ]
 }
};
