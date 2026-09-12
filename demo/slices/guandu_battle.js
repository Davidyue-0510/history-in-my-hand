// 本文件由 tools/build.py 自动生成（切片 guandu_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["guandu_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["guandu_battle"] = {
 "meta": {
  "kind": "county",
  "region": "three_kingdoms",
  "title": "官渡之战·以少胜多",
  "dossier_label": "官渡之战",
  "subtitle": "建安五年（200）· 曹操 vs 袁绍",
  "primary_place": "guandu",
  "dossier_event": "event:yuanshao_kui",
  "vocab_pack": "guandu_battle",
  "terrain_grid": "china_coarse",
  "lead": "建安五年（200），袁绍率十万众南下，曹操于官渡以少胜多，奇袭乌巢焚粮、张郃高览降，大溃袁军，奠定统一北方之基。",
  "parties_note": "本切片主干为后世官修史（三国志/资治通鉴），无曹操、袁绍双方当代原始档案；双方实况经后世史官回溯叙述，缺口为一等公民。系统不裁决，只并列。",
  "subject_names": {
   "event:cao_juece": "曹操决策拒袁",
   "event:baima": "白马之战",
   "event:yanjin": "延津之战",
   "event:guandu_xiangchi": "官渡相持",
   "event:wuchao": "乌巢劫粮",
   "event:yuanshao_kui": "袁绍大溃",
   "event:cangting": "仓亭再破",
   "place:guandu": "官渡",
   "place:wuchao": "乌巢",
   "place:yellow_river": "黄河",
   "person:caocao": "曹操",
   "person:yuanshao": "袁绍",
   "person:guan_yu": "关羽"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "three_kingdoms",
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
    "note": "官渡之战：朝堂凝聚力——袁绍率十万众攻曹操，曹操以司空总揽许都军政"
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
    "note": "官渡之战：后勤物力——曹军粮尽欲退、乌巢焚粮断袁归路"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "官渡之战：人口动员——北兵南人地疏、河北四州兵源雄厚"
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
    "note": "官渡之战：地缘战略——黄河为轴，曹操据南岸扼袁绍渡河南下"
   }
  },
  "province": "henan",
  "related": [],
  "page": "county.html?scene=guandu_battle",
  "key": "guandu_battle",
  "scene_id": "guandu_battle"
 },
 "sources": [
  {
   "id": "sanguozhi",
   "title": "三国志（魏书/蜀书/吴书）",
   "party": "西晋·私修",
   "stance_label": "西晋陈寿私修史，整合三国",
   "distance_label": "西晋陈寿撰，距三国最近者数十年，最远者约六十年",
   "color": "#6C7A89",
   "compiler": "陈寿（西晋）",
   "period": "晋",
   "note": "本切片主干史料：取《武帝纪》（叙曹操拒袁、乌巢焚粮、张郃高览降）、《关羽传》（白马刺颜良）、《荀攸传》（饵敌分兵）、《袁绍传》（袁军部署）。陈寿身仕西晋，以魏为正统，叙官渡事带西晋回望式框架；其距事最近，为可核正史。"
  },
  {
   "id": "zizhi_tongjian",
   "title": "资治通鉴",
   "party": "宋·官修",
   "stance_label": "北宋官修编年通史",
   "distance_label": "宋司马光撰（1084 成书），距三国八百余年",
   "color": "#6C7A89",
   "compiler": "司马光（北宋）",
   "period": "宋",
   "note": "官渡部分在《通鉴》卷六十三，整合三国志与魏晋载记，叙事最完整，以魏纪年。其取舍依据北宋大一统修史者的正统判断，与三国志互为表里。"
  },
  {
   "id": "guandu_yanjiu",
   "title": "官渡战史与历史地理研究（现代综述）",
   "party": "二手综述",
   "stance_label": "近现代考订",
   "distance_label": "现代官渡战史与历史地理研究，距事一千八百余岁",
   "color": "#9B7B5A",
   "compiler": "近现代研究",
   "period": "现代",
   "note": "现代官渡战史与历史地理考订的二手综述，用于兵力区间、战术推演与缺口项；凡依赖此源的断言皆为待升级项，默认可关闭。"
  }
 ],
 "places": [
  {
   "id": "xuchang",
   "name": "许都",
   "lat": 34.04,
   "lon": 113.85,
   "type": "city",
   "note": "曹操迎献帝所都，官渡之战后方中枢与饷源（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 72
  },
  {
   "id": "guandu",
   "name": "官渡",
   "lat": 34.73,
   "lon": 113.95,
   "type": "city",
   "note": "主战场，今河南郑州中牟县东北，曹操拒袁之前线营垒（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 82
  },
  {
   "id": "yecheng",
   "name": "邺城",
   "lat": 36.35,
   "lon": 114.62,
   "type": "city",
   "note": "袁绍根本，冀州治所，今河北临漳西南（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 64
  },
  {
   "id": "baima",
   "name": "白马",
   "lat": 35.5351,
   "lon": 114.70915,
   "type": "city",
   "note": "黄河渡口，颜良围刘延于此，今河南滑县东（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：白马县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：白马县",
   "elev": 56
  },
  {
   "id": "yanjin",
   "name": "延津",
   "lat": 35.14276,
   "lon": 114.19469,
   "type": "city",
   "note": "袁绍西进渡口，文丑败死于此，今河南延津（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：延津县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：延津县",
   "elev": 65
  },
  {
   "id": "wuchao",
   "name": "乌巢",
   "lat": 35.0,
   "lon": 114.4,
   "type": "region",
   "note": "袁绍军粮屯聚处，曹操奇袭焚粮地，约今河南封丘西（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 71
  },
  {
   "id": "yellow_river",
   "name": "黄河",
   "lat": 35.2,
   "lon": 114.3,
   "type": "river",
   "note": "南北分界，袁绍自河北渡河南攻，曹操据南岸（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 62
  },
  {
   "id": "yangwu",
   "name": "阳武",
   "lat": 34.98309,
   "lon": 114.0983,
   "type": "city",
   "note": "官渡东南前哨，曹操北进所经，今河南原阳（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：阳武县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：阳武县",
   "elev": 72
  }
 ],
 "persons": [
  {
   "id": "caocao",
   "name": "曹操",
   "party": "曹操",
   "note": "魏王前身，官渡拒袁绍，以少胜多，奠定统一北方之基",
   "influence": 1
  },
  {
   "id": "yuanshao",
   "name": "袁绍",
   "party": "袁绍",
   "note": "四世三公，拥冀幽并青河北四州，率十万众南下攻曹，官渡大败",
   "influence": 0
  },
  {
   "id": "guan_yu",
   "name": "关羽",
   "party": "曹操",
   "note": "白马之战为曹军先锋，策马刺颜良于万众之中",
   "influence": 0
  },
  {
   "id": "xun_you",
   "name": "荀攸",
   "party": "曹操",
   "note": "曹操谋主，献饵敌分兵、诱斩文丑之策",
   "influence": 0
  },
  {
   "id": "xun_yu",
   "name": "荀彧",
   "party": "曹操",
   "note": "留守许都，供粮饷、稳后方，阻曹操退兵之念",
   "influence": 0
  },
  {
   "id": "zhang_he",
   "name": "张郃",
   "party": "袁绍",
   "note": "袁绍大将，乌巢溃后焚攻具降曹",
   "influence": 0
  },
  {
   "id": "gao_lan",
   "name": "高览",
   "party": "袁绍",
   "note": "袁绍大将，与张郃同降曹",
   "influence": 0
  },
  {
   "id": "xu_you",
   "name": "许攸",
   "party": "袁绍",
   "note": "袁绍谋士，受谗投曹，献袭乌巢烧粮之计",
   "influence": 0
  },
  {
   "id": "wen_chou",
   "name": "文丑",
   "party": "袁绍",
   "note": "袁绍骁将，延津之战为曹军所斩",
   "influence": 0
  },
  {
   "id": "yan_liang",
   "name": "颜良",
   "party": "袁绍",
   "note": "袁绍骁将，白马之战为关羽所斩",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "GD001",
   "subject": "event:cao_juece",
   "predicate": "列营拒袁",
   "value_text": "袁绍简精卒十万、骑万匹南下，曹操于官渡列营拒之；兵寡粮悬，荀彧留守许都供饷，荀攸从谋画策。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "sanguozhi",
   "quote": "绍简精卒十万，骑万匹，欲以攻许",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：曹操以司空录尚书事总揽军政，许都—官渡为拒袁主轴。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD002",
   "subject": "event:baima",
   "predicate": "刺良解围",
   "value_text": "袁绍遣颜良围曹将刘延于白马，曹操北救，使张辽关羽为先锋；关羽策马刺良于万众之中，斩其首还，解白马之围。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "baima",
   "source": "sanguozhi",
   "quote": "策马刺良于万众之中，斩其首还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：白马之战为前哨决胜，关羽突阵是著名战术片段，置信度最高。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD003",
   "subject": "event:yanjin",
   "predicate": "诱斩文丑",
   "value_text": "曹操南撤辐重诱袁绍分兵西逐，复还击斩文丑，袁军再挫，辎重南归官渡。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "yanjin",
   "source": "sanguozhi",
   "quote": "纵兵击，大破之，斩丑",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：延津诱敌是曹操运动歼敌的前哨续胜。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD004",
   "subject": "event:guandu_xiangchi",
   "predicate": "兵少粮尽",
   "value_text": "两军夹官渡数月，曹军兵少粮尽、士卒疲乏，袁军营连数十里，胜负未决，曹操几欲退兵。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "sanguozhi",
   "quote": "兵既少，粮亦尽，士卒疲乏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：相持阶段曹军后勤窘况，是乌巢奇袭的动因。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD005",
   "subject": "event:wuchao",
   "predicate": "焚粮定局",
   "value_text": "袁绍谋士许攸因受谗投曹，献袭乌巢烧粮之策；曹操自将步骑五千，皆用袁军旗帜，夜从间道焚其辎重。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "wuchao",
   "source": "sanguozhi",
   "quote": "自将步骑五千，皆用袁军旗帜，夜从间道，焚其辎重",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：乌巢劫粮为战役转折点，置信度最高。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD006",
   "subject": "event:yuanshao_kui",
   "predicate": "绍军大溃",
   "value_text": "乌巢粮尽，袁军营乱；张郃高览焚攻具诣曹营降，袁绍仅与八百骑北渡河走，官渡之败成定局。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "sanguozhi",
   "quote": "郃、览焚攻具，诣曹营降……绍仅与八百骑渡河",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：袁军中枢崩溃、大将倒戈，是决战收口。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD007",
   "subject": "event:cangting",
   "predicate": "仓亭再破",
   "value_text": "次年曹操渡河击袁绍，破之于仓亭；袁绍惭愤病死，其子争立，河北四州渐入曹操之手，统一北方之基成。",
   "time": {
    "era_text": "建安六年（201）",
    "gregorian_year": 201
   },
   "place": "yecheng",
   "source": "zizhi_tongjian",
   "quote": "渡河击绍，破之于仓亭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：官渡次年收口，曹操北扩至河北。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "GD008",
   "subject": "place:guandu",
   "predicate": "战场定位",
   "value_text": "官渡在阳武，约今河南郑州中牟县东北，为曹操拒袁之前线营垒，夹黄河而阵。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "sanguozhi",
   "quote": "官渡在阳武",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：官渡—黄河的相对位置是夹水相持的自然前提。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD009",
   "subject": "place:wuchao",
   "predicate": "粮屯定位",
   "value_text": "乌巢为袁绍军粮屯聚处，约今河南封丘西，距袁绍大营数十里，守备相对薄弱。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "wuchao",
   "source": "sanguozhi",
   "quote": "故市在乌巢",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：乌巢远离主力的布防缺陷，是曹操奇袭得手的空间条件。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD010",
   "subject": "place:yellow_river",
   "predicate": "渡河攻防",
   "value_text": "黄河为南北分界，袁绍自河北渡河南攻，曹操据南岸以逸待劳，渡口（白马/延津）为双方争夺要点。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "yellow_river",
   "source": "sanguozhi",
   "quote": "绍至延津，南向",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/社会维度（4）：黄河渡口的攻防是官渡兵力投放的命脉。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD011",
   "subject": "event:cao_juece",
   "predicate": "袁绍兵势",
   "value_text": "通鉴叙袁绍『简精卒十万，骑万匹，欲以攻许』，南北兵力悬殊，曹操以弱势拒强敌。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "xuchang",
   "source": "zizhi_tongjian",
   "quote": "绍简精卒十万，骑万匹，欲以攻许",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：通鉴以魏纪年，叙袁绍兵势为曹操弱势之背景。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "GD012",
   "subject": "person:caocao",
   "predicate": "用兵以少胜众",
   "value_text": "曹操善能用兵，官渡以寡敌众、奇袭乌巢而定胜局，为其统一北方的关键一战。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "sanguozhi",
   "quote": "善能用兵，以少胜众",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "思想维度（5）：曹操的用兵思想与决断，是『以少胜多』的统帅层根源。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "西晋·私修",
   "_faction": null
  },
  {
   "id": "GD013",
   "subject": "event:wuchao",
   "predicate": "兵力数考订",
   "value_text": "《武帝纪》称袁绍『众十余万』、曹操兵不过万，《通鉴》沿其说；现代研究多以为系约数，双方实数含郡县兵与义勇，难以精确核计。",
   "time": {
    "era_text": "现代考订",
    "gregorian_year": 2000
   },
   "place": "wuchao",
   "source": "guandu_yanjiu",
   "quote": "十万或十一万、曹操万余，多为约数",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "operational",
   "note": "技术维度（2）：史载兵力数经后世放大，需以现代考订折扣。",
   "dims": [
    2
   ],
   "dim_source": "declared",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD014",
   "subject": "event:yuanshao_kui",
   "predicate": "以少胜多推演",
   "value_text": "按曹操奇袭乌巢、断袁粮道、张郃高览倒戈三项，模型推算曹操以少胜多概率偏高（本项目推演，非史料原值）。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "guandu",
   "source": "guandu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于兵力/粮道/人心的推断值，可复现。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD015",
   "subject": "place:yellow_river",
   "predicate": "补给推演",
   "value_text": "袁绍自邺城远征、补给线沿河北—黄河拉长，曹操据许都—官渡以逸待劳，利于持久消耗与奇袭。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "yellow_river",
   "source": "guandu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "地理维度（1）/制度维度（3）：远征补给与主场优势推演。",
   "dims": [
    1,
    3
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD016",
   "subject": "event:wuchao",
   "predicate": "袁军兵力缺口",
   "value_text": "袁绍实际投入官渡前线的兵力、河北四州兵源构成与死伤数无精确史料：《武帝纪》仅给约数，《通鉴》沿之，二者皆非可核实数，缺口即结论，仅能给区间而非定点数。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "wuchao",
   "source": "guandu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：袁军真实兵力与族属构成为结构性未知。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "袁绍官渡前线实际兵力与河北四州兵源构成比例",
    "skills": [
     "核《三国志·袁绍传》对兵额的表述",
     "比对《资治通鉴》编年叙述的夸张成分",
     "查现代官渡研究对兵力的估算区间"
    ],
    "accept": "明确袁绍官渡前线兵力为结构性未知，仅能给区间而非定点数"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "GD017",
   "subject": "event:cao_juece",
   "predicate": "曹操决策视角缺口",
   "value_text": "曹操决意拒袁、几欲退兵又依荀彧谏而留的内部决策过程，主要经《三国志·武帝纪》后向追述，曹操自身幕府档案无存，决策细节与反对声多为西晋回望式建构。",
   "time": {
    "era_text": "建安五年（200）",
    "gregorian_year": 200
   },
   "place": "xuchang",
   "source": "guandu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：曹操决策叙事的视角缺失与后向建构。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "曹操拒袁决策中的谋主分歧与内部异议",
    "skills": [
     "比对《武帝纪》与《荀彧传》《荀攸传》对退兵与否的处理",
     "核袁曹双方史料不对称的结构性原因"
    ],
    "accept": "承认曹操决策细节在史料上为西晋后向建构的弱证据"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "GD016",
  "GD017"
 ],
 "events": [
  {
   "id": "ev_cao_juece",
   "subject": "event:cao_juece",
   "year": 200,
   "era": "建安五年（200）",
   "title": "曹操决策拒袁",
   "kind": "政治·决策",
   "text": "袁绍简精卒十万、骑万匹南下，曹操于官渡列营拒之；兵寡粮悬，荀彧留守许都供饷，荀攸从谋画策。"
  },
  {
   "id": "ev_baima",
   "subject": "event:baima",
   "year": 200,
   "era": "建安五年（200）",
   "title": "白马之战·关羽斩颜良",
   "kind": "战事·前哨战",
   "text": "袁绍遣颜良围曹将刘延于白马，曹操北救，使张辽关羽为先锋；关羽策马刺良于万众之中，斩其首还，解白马之围。"
  },
  {
   "id": "ev_yanjin",
   "subject": "event:yanjin",
   "year": 200,
   "era": "建安五年（200）",
   "title": "延津之战·诱敌斩文丑",
   "kind": "战事·诱敌战",
   "text": "曹操南撤辐重诱袁绍分兵西逐，复还击斩文丑，袁军再挫，辎重南归官渡。"
  },
  {
   "id": "ev_guandu_xiangchi",
   "subject": "event:guandu_xiangchi",
   "year": 200,
   "era": "建安五年（200）",
   "title": "官渡相持",
   "kind": "战事·对峙",
   "text": "两军夹官渡数月，曹军兵少粮尽、士卒疲乏，袁军营连数十里，胜负未决，曹操几欲退兵。"
  },
  {
   "id": "ev_wuchao",
   "subject": "event:wuchao",
   "year": 200,
   "era": "建安五年（200）",
   "title": "乌巢劫粮·许攸献计",
   "kind": "战事·奇袭",
   "text": "袁绍谋士许攸因受谗投曹，献袭乌巢烧粮之策；曹操自将步骑五千，皆用袁军旗帜，夜从间道焚其辎重。"
  },
  {
   "id": "ev_yuanshao_kui",
   "subject": "event:yuanshao_kui",
   "year": 200,
   "era": "建安五年（200）",
   "title": "袁绍大溃·张郃高览降",
   "kind": "战事·决战",
   "text": "乌巢粮尽，袁军营乱；张郃高览焚攻具诣曹营降，袁绍仅与八百骑北渡河走，官渡之败成定局。"
  },
  {
   "id": "ev_cangting",
   "subject": "event:cangting",
   "year": 201,
   "era": "建安六年（201）",
   "title": "仓亭再破·河北入曹",
   "kind": "战事·收复",
   "text": "次年曹操渡河击袁绍，破之于仓亭；袁绍惭愤病死，其子争立，河北四州渐入曹操之手，统一北方之基成。"
  }
 ],
 "edges": [
  {
   "from": "yecheng",
   "to": "baima",
   "type": "military",
   "label": "邺城—白马（袁绍南渡主线）"
  },
  {
   "from": "baima",
   "to": "yanjin",
   "type": "military",
   "label": "白马—延津（袁绍西进）"
  },
  {
   "from": "yanjin",
   "to": "guandu",
   "type": "military",
   "label": "延津—官渡（袁绍逼曹）"
  },
  {
   "from": "guandu",
   "to": "wuchao",
   "type": "military",
   "label": "官渡—乌巢（曹操奇袭粮屯）"
  },
  {
   "from": "xuchang",
   "to": "yangwu",
   "type": "military",
   "label": "许都—阳武（曹操北进）"
  },
  {
   "from": "yangwu",
   "to": "guandu",
   "type": "military",
   "label": "阳武—官渡（曹军前线）"
  },
  {
   "from": "xuchang",
   "to": "guandu",
   "type": "military",
   "label": "许都—官渡（曹操主力北上）"
  },
  {
   "from": "yellow_river",
   "to": "baima",
   "type": "river",
   "label": "黄河—白马（北岸渡口）"
  },
  {
   "from": "guandu",
   "to": "yellow_river",
   "type": "river",
   "label": "官渡临黄河"
  },
  {
   "from": "wuchao",
   "to": "yecheng",
   "type": "military",
   "label": "乌巢—邺城（袁绍后方粮道）"
  }
 ],
 "control": [
  {
   "place_id": "xuchang",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "曹操迎献帝所都，官渡后方中枢与饷源",
   "note": "曹操根本"
  },
  {
   "place_id": "yangwu",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "官渡东南前哨，曹操北进所经",
   "note": "曹操前哨"
  },
  {
   "place_id": "guandu",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "曹操拒袁之前线营垒，夹官渡而阵",
   "note": "曹操主战场"
  },
  {
   "place_id": "yellow_river",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "曹操据黄河南岸，袁绍渡河来攻",
   "note": "南岸属曹"
  },
  {
   "place_id": "yecheng",
   "party": "袁绍",
   "start": 200,
   "end": 200,
   "basis": "袁绍根本冀州治所，官渡战前",
   "note": "袁绍大本营"
  },
  {
   "place_id": "baima",
   "party": "袁绍",
   "start": 200,
   "end": 200,
   "basis": "袁绍南渡渡口，颜良围刘延于此",
   "note": "袁绍前哨"
  },
  {
   "place_id": "yanjin",
   "party": "袁绍",
   "start": 200,
   "end": 200,
   "basis": "袁绍西进渡口，文丑败死于此",
   "note": "袁绍前哨"
  },
  {
   "place_id": "wuchao",
   "party": "袁绍",
   "start": 200,
   "end": 200,
   "basis": "袁绍军粮屯聚处，战前属袁",
   "note": "袁绍粮屯"
  },
  {
   "place_id": "yecheng",
   "party": "曹操",
   "start": 201,
   "end": null,
   "basis": "仓亭再破后河北四州渐入曹手",
   "note": "201 年后属曹"
  },
  {
   "place_id": "baima",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "白马解围后曹操控河东南岸",
   "note": "战后属曹"
  },
  {
   "place_id": "yanjin",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "延津之战后曹操控此渡口",
   "note": "战后属曹"
  },
  {
   "place_id": "wuchao",
   "party": "曹操",
   "start": 200,
   "end": null,
   "basis": "乌巢焚粮后曹操据之，断袁归路",
   "note": "战后属曹"
  }
 ],
 "control_seats": [
  {
   "place_id": "xuchang",
   "name": "许都",
   "lon": 113.85,
   "lat": 34.04,
   "region": "three_kingdoms"
  },
  {
   "place_id": "yangwu",
   "name": "阳武",
   "lon": 114.0983,
   "lat": 34.98309,
   "region": "three_kingdoms"
  },
  {
   "place_id": "guandu",
   "name": "官渡",
   "lon": 113.95,
   "lat": 34.73,
   "region": "three_kingdoms"
  },
  {
   "place_id": "yellow_river",
   "name": "黄河",
   "lon": 114.3,
   "lat": 35.2,
   "region": "three_kingdoms"
  },
  {
   "place_id": "yecheng",
   "name": "邺城",
   "lon": 114.62,
   "lat": 36.35,
   "region": "three_kingdoms"
  },
  {
   "place_id": "baima",
   "name": "白马",
   "lon": 114.70915,
   "lat": 35.5351,
   "region": "three_kingdoms"
  },
  {
   "place_id": "yanjin",
   "name": "延津",
   "lon": 114.19469,
   "lat": 35.14276,
   "region": "three_kingdoms"
  },
  {
   "place_id": "wuchao",
   "name": "乌巢",
   "lon": 114.4,
   "lat": 35.0,
   "region": "three_kingdoms"
  }
 ],
 "control_years": [
  200,
  201
 ],
 "vocab": {
  "layers": [
   "record",
   "scholarship",
   "inference",
   "gap"
  ],
  "quote_status": [
   "verbatim",
   "paraphrase_unverified",
   "generated"
  ],
  "parties": [
   "曹操",
   "袁绍",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "西晋·私修": "后世官修",
   "宋·官修": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "曹操": "#8C3A2E",
   "袁绍": "#3E6B4F",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
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
        112.85,
        33.04
       ],
       [
        112.85,
        37.35
       ],
       [
        115.709,
        37.35
       ],
       [
        115.709,
        33.04
       ],
       [
        112.85,
        33.04
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
         113.955,
         37.35
        ],
        [
         113.902,
         37.31
        ],
        [
         113.886,
         37.239
        ],
        [
         113.853,
         37.215
        ],
        [
         113.832,
         37.168
        ],
        [
         113.773,
         37.152
        ],
        [
         113.774,
         37.107
        ],
        [
         113.758,
         37.075
        ],
        [
         113.788,
         37.06
        ],
        [
         113.772,
         37.017
        ],
        [
         113.792,
         36.988
        ],
        [
         113.761,
         36.956
        ],
        [
         113.793,
         36.895
        ],
        [
         113.773,
         36.855
        ],
        [
         113.732,
         36.859
        ],
        [
         113.732,
         36.879
        ],
        [
         113.697,
         36.882
        ],
        [
         113.676,
         36.856
        ],
        [
         113.681,
         36.79
        ],
        [
         113.6,
         36.753
        ],
        [
         113.549,
         36.753
        ],
        [
         113.536,
         36.732
        ],
        [
         113.5,
         36.741
        ],
        [
         113.465,
         36.708
        ],
        [
         113.507,
         36.705
        ],
        [
         113.477,
         36.655
        ],
        [
         113.487,
         36.635
        ],
        [
         113.545,
         36.623
        ],
        [
         113.54,
         36.594
        ],
        [
         113.57,
         36.586
        ],
        [
         113.589,
         36.548
        ],
        [
         113.56,
         36.529
        ],
        [
         113.554,
         36.495
        ],
        [
         113.587,
         36.461
        ],
        [
         113.636,
         36.451
        ],
        [
         113.67,
         36.425
        ],
        [
         113.708,
         36.423
        ],
        [
         113.731,
         36.363
        ],
        [
         113.755,
         36.366
        ],
        [
         113.813,
         36.332
        ],
        [
         113.857,
         36.329
        ],
        [
         113.849,
         36.348
        ],
        [
         113.882,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.963,
         36.354
        ],
        [
         113.982,
         36.318
        ],
        [
         114.003,
         36.334
        ],
        [
         114.056,
         36.329
        ],
        [
         114.043,
         36.303
        ],
        [
         114.08,
         36.27
        ],
        [
         114.129,
         36.28
        ],
        [
         114.176,
         36.265
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.203,
         36.245
        ],
        [
         114.21,
         36.273
        ],
        [
         114.241,
         36.251
        ],
        [
         114.258,
         36.264
        ],
        [
         114.299,
         36.246
        ],
        [
         114.345,
         36.256
        ],
        [
         114.356,
         36.23
        ],
        [
         114.408,
         36.225
        ],
        [
         114.417,
         36.206
        ],
        [
         114.466,
         36.198
        ],
        [
         114.48,
         36.178
        ],
        [
         114.533,
         36.172
        ],
        [
         114.587,
         36.141
        ],
        [
         114.589,
         36.118
        ],
        [
         114.64,
         36.137
        ],
        [
         114.72,
         36.14
        ],
        [
         114.735,
         36.156
        ],
        [
         114.772,
         36.125
        ],
        [
         114.858,
         36.128
        ],
        [
         114.858,
         36.145
        ],
        [
         114.913,
         36.141
        ],
        [
         114.927,
         36.089
        ],
        [
         114.914,
         36.052
        ],
        [
         114.998,
         36.07
        ],
        [
         115.046,
         36.113
        ],
        [
         115.049,
         36.162
        ],
        [
         115.063,
         36.178
        ],
        [
         115.105,
         36.172
        ],
        [
         115.125,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.242,
         36.191
        ],
        [
         115.279,
         36.138
        ],
        [
         115.302,
         36.128
        ],
        [
         115.313,
         36.088
        ],
        [
         115.366,
         36.099
        ],
        [
         115.377,
         36.128
        ],
        [
         115.451,
         36.152
        ],
        [
         115.465,
         36.17
        ],
        [
         115.484,
         36.149
        ],
        [
         115.475,
         36.248
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.463,
         36.276
        ],
        [
         115.417,
         36.293
        ],
        [
         115.423,
         36.322
        ],
        [
         115.367,
         36.309
        ],
        [
         115.369,
         36.342
        ],
        [
         115.34,
         36.398
        ],
        [
         115.298,
         36.413
        ],
        [
         115.317,
         36.454
        ],
        [
         115.291,
         36.46
        ],
        [
         115.273,
         36.497
        ],
        [
         115.331,
         36.55
        ],
        [
         115.355,
         36.627
        ],
        [
         115.366,
         36.622
        ],
        [
         115.42,
         36.687
        ],
        [
         115.452,
         36.702
        ],
        [
         115.48,
         36.76
        ],
        [
         115.525,
         36.764
        ],
        [
         115.684,
         36.808
        ],
        [
         115.709,
         36.876
        ],
        [
         115.709,
         37.35
        ],
        [
         113.955,
         37.35
        ]
       ]
      ]
     ]
    },
    "n": "河北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.85,
         37.35
        ],
        [
         112.85,
         35.252
        ],
        [
         112.884,
         35.244
        ],
        [
         112.934,
         35.263
        ],
        [
         112.936,
         35.284
        ],
        [
         112.992,
         35.296
        ],
        [
         112.986,
         35.34
        ],
        [
         112.996,
         35.362
        ],
        [
         113.067,
         35.354
        ],
        [
         113.126,
         35.332
        ],
        [
         113.149,
         35.351
        ],
        [
         113.165,
         35.413
        ],
        [
         113.185,
         35.409
        ],
        [
         113.19,
         35.449
        ],
        [
         113.243,
         35.449
        ],
        [
         113.304,
         35.427
        ],
        [
         113.312,
         35.481
        ],
        [
         113.348,
         35.468
        ],
        [
         113.392,
         35.507
        ],
        [
         113.439,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.514,
         35.574
        ],
        [
         113.558,
         35.622
        ],
        [
         113.548,
         35.657
        ],
        [
         113.578,
         35.633
        ],
        [
         113.625,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.593,
         35.692
        ],
        [
         113.588,
         35.737
        ],
        [
         113.605,
         35.798
        ],
        [
         113.583,
         35.818
        ],
        [
         113.661,
         35.837
        ],
        [
         113.638,
         35.87
        ],
        [
         113.654,
         35.932
        ],
        [
         113.649,
         35.994
        ],
        [
         113.679,
         35.986
        ],
        [
         113.695,
         36.027
        ],
        [
         113.66,
         36.035
        ],
        [
         113.686,
         36.056
        ],
        [
         113.671,
         36.116
        ],
        [
         113.655,
         36.125
        ],
        [
         113.713,
         36.13
        ],
        [
         113.706,
         36.149
        ],
        [
         113.651,
         36.174
        ],
        [
         113.698,
         36.182
        ],
        [
         113.682,
         36.216
        ],
        [
         113.716,
         36.262
        ],
        [
         113.712,
         36.303
        ],
        [
         113.736,
         36.325
        ],
        [
         113.731,
         36.363
        ],
        [
         113.708,
         36.423
        ],
        [
         113.67,
         36.425
        ],
        [
         113.636,
         36.451
        ],
        [
         113.587,
         36.461
        ],
        [
         113.554,
         36.495
        ],
        [
         113.56,
         36.529
        ],
        [
         113.589,
         36.548
        ],
        [
         113.57,
         36.586
        ],
        [
         113.54,
         36.594
        ],
        [
         113.545,
         36.623
        ],
        [
         113.487,
         36.635
        ],
        [
         113.477,
         36.655
        ],
        [
         113.507,
         36.705
        ],
        [
         113.465,
         36.708
        ],
        [
         113.5,
         36.741
        ],
        [
         113.536,
         36.732
        ],
        [
         113.549,
         36.753
        ],
        [
         113.6,
         36.753
        ],
        [
         113.681,
         36.79
        ],
        [
         113.676,
         36.856
        ],
        [
         113.697,
         36.882
        ],
        [
         113.732,
         36.879
        ],
        [
         113.732,
         36.859
        ],
        [
         113.773,
         36.855
        ],
        [
         113.793,
         36.895
        ],
        [
         113.761,
         36.956
        ],
        [
         113.792,
         36.988
        ],
        [
         113.772,
         37.017
        ],
        [
         113.788,
         37.06
        ],
        [
         113.758,
         37.075
        ],
        [
         113.774,
         37.107
        ],
        [
         113.773,
         37.152
        ],
        [
         113.832,
         37.168
        ],
        [
         113.853,
         37.215
        ],
        [
         113.886,
         37.239
        ],
        [
         113.902,
         37.31
        ],
        [
         113.955,
         37.35
        ],
        [
         112.85,
         37.35
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.709,
         33.04
        ],
        [
         115.709,
         34.062
        ],
        [
         115.706,
         34.06
        ],
        [
         115.658,
         34.061
        ],
        [
         115.642,
         34.032
        ],
        [
         115.607,
         34.03
        ],
        [
         115.579,
         33.974
        ],
        [
         115.578,
         33.95
        ],
        [
         115.548,
         33.875
        ],
        [
         115.632,
         33.87
        ],
        [
         115.614,
         33.776
        ],
        [
         115.577,
         33.788
        ],
        [
         115.563,
         33.773
        ],
        [
         115.602,
         33.719
        ],
        [
         115.601,
         33.659
        ],
        [
         115.64,
         33.585
        ],
        [
         115.565,
         33.576
        ],
        [
         115.511,
         33.553
        ],
        [
         115.464,
         33.567
        ],
        [
         115.423,
         33.557
        ],
        [
         115.395,
         33.506
        ],
        [
         115.367,
         33.523
        ],
        [
         115.346,
         33.503
        ],
        [
         115.346,
         33.45
        ],
        [
         115.325,
         33.457
        ],
        [
         115.315,
         33.431
        ],
        [
         115.329,
         33.403
        ],
        [
         115.314,
         33.377
        ],
        [
         115.342,
         33.371
        ],
        [
         115.365,
         33.336
        ],
        [
         115.362,
         33.298
        ],
        [
         115.335,
         33.298
        ],
        [
         115.34,
         33.261
        ],
        [
         115.301,
         33.204
        ],
        [
         115.304,
         33.15
        ],
        [
         115.29,
         33.132
        ],
        [
         115.245,
         33.136
        ],
        [
         115.195,
         33.121
        ],
        [
         115.168,
         33.089
        ],
        [
         115.041,
         33.087
        ],
        [
         114.991,
         33.102
        ],
        [
         114.966,
         33.147
        ],
        [
         114.933,
         33.154
        ],
        [
         114.903,
         33.13
        ],
        [
         114.897,
         33.087
        ],
        [
         114.913,
         33.083
        ],
        [
         114.921,
         33.04
        ],
        [
         115.709,
         33.04
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
         115.709,
         36.876
        ],
        [
         115.684,
         36.808
        ],
        [
         115.525,
         36.764
        ],
        [
         115.48,
         36.76
        ],
        [
         115.452,
         36.702
        ],
        [
         115.42,
         36.687
        ],
        [
         115.366,
         36.622
        ],
        [
         115.355,
         36.627
        ],
        [
         115.331,
         36.55
        ],
        [
         115.273,
         36.497
        ],
        [
         115.291,
         36.46
        ],
        [
         115.317,
         36.454
        ],
        [
         115.298,
         36.413
        ],
        [
         115.34,
         36.398
        ],
        [
         115.369,
         36.342
        ],
        [
         115.367,
         36.309
        ],
        [
         115.423,
         36.322
        ],
        [
         115.417,
         36.293
        ],
        [
         115.463,
         36.276
        ],
        [
         115.467,
         36.259
        ],
        [
         115.467,
         36.259
        ],
        [
         115.475,
         36.248
        ],
        [
         115.484,
         36.149
        ],
        [
         115.484,
         36.126
        ],
        [
         115.449,
         36.047
        ],
        [
         115.448,
         36.012
        ],
        [
         115.363,
         35.972
        ],
        [
         115.354,
         35.939
        ],
        [
         115.364,
         35.894
        ],
        [
         115.335,
         35.797
        ],
        [
         115.363,
         35.78
        ],
        [
         115.408,
         35.809
        ],
        [
         115.46,
         35.868
        ],
        [
         115.488,
         35.881
        ],
        [
         115.495,
         35.896
        ],
        [
         115.505,
         35.899
        ],
        [
         115.513,
         35.89
        ],
        [
         115.584,
         35.922
        ],
        [
         115.649,
         35.923
        ],
        [
         115.699,
         35.966
        ],
        [
         115.709,
         35.968
        ],
        [
         115.709,
         35.804
        ],
        [
         115.696,
         35.789
        ],
        [
         115.694,
         35.754
        ],
        [
         115.623,
         35.739
        ],
        [
         115.529,
         35.734
        ],
        [
         115.486,
         35.71
        ],
        [
         115.383,
         35.569
        ],
        [
         115.345,
         35.554
        ],
        [
         115.356,
         35.49
        ],
        [
         115.307,
         35.48
        ],
        [
         115.237,
         35.423
        ],
        [
         115.172,
         35.427
        ],
        [
         115.126,
         35.418
        ],
        [
         115.118,
         35.4
        ],
        [
         115.092,
         35.416
        ],
        [
         115.074,
         35.374
        ],
        [
         115.043,
         35.377
        ],
        [
         114.958,
         35.261
        ],
        [
         114.929,
         35.245
        ],
        [
         114.932,
         35.198
        ],
        [
         114.861,
         35.182
        ],
        [
         114.842,
         35.151
        ],
        [
         114.883,
         35.099
        ],
        [
         114.836,
         35.077
        ],
        [
         114.819,
         35.052
        ],
        [
         114.852,
         35.042
        ],
        [
         114.824,
         35.012
        ],
        [
         114.881,
         35.004
        ],
        [
         114.924,
         34.969
        ],
        [
         114.951,
         34.99
        ],
        [
         115.008,
         34.988
        ],
        [
         115.029,
         34.972
        ],
        [
         115.075,
         35.001
        ],
        [
         115.128,
         35.005
        ],
        [
         115.157,
         34.958
        ],
        [
         115.219,
         34.96
        ],
        [
         115.205,
         34.914
        ],
        [
         115.252,
         34.906
        ],
        [
         115.239,
         34.878
        ],
        [
         115.256,
         34.845
        ],
        [
         115.317,
         34.859
        ],
        [
         115.427,
         34.805
        ],
        [
         115.449,
         34.744
        ],
        [
         115.434,
         34.725
        ],
        [
         115.461,
         34.637
        ],
        [
         115.516,
         34.582
        ],
        [
         115.553,
         34.569
        ],
        [
         115.623,
         34.574
        ],
        [
         115.686,
         34.556
        ],
        [
         115.697,
         34.594
        ],
        [
         115.709,
         34.592
        ],
        [
         115.709,
         36.876
        ]
       ]
      ],
      [
       [
        [
         115.495,
         35.896
        ],
        [
         115.488,
         35.881
        ],
        [
         115.513,
         35.89
        ],
        [
         115.505,
         35.899
        ],
        [
         115.495,
         35.896
        ]
       ]
      ]
     ]
    },
    "n": "山东省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         112.85,
         33.04
        ],
        [
         114.921,
         33.04
        ],
        [
         114.913,
         33.083
        ],
        [
         114.897,
         33.087
        ],
        [
         114.903,
         33.13
        ],
        [
         114.933,
         33.154
        ],
        [
         114.966,
         33.147
        ],
        [
         114.991,
         33.102
        ],
        [
         115.041,
         33.087
        ],
        [
         115.168,
         33.089
        ],
        [
         115.195,
         33.121
        ],
        [
         115.245,
         33.136
        ],
        [
         115.29,
         33.132
        ],
        [
         115.304,
         33.15
        ],
        [
         115.301,
         33.204
        ],
        [
         115.34,
         33.261
        ],
        [
         115.335,
         33.298
        ],
        [
         115.362,
         33.298
        ],
        [
         115.365,
         33.336
        ],
        [
         115.342,
         33.371
        ],
        [
         115.314,
         33.377
        ],
        [
         115.329,
         33.403
        ],
        [
         115.315,
         33.431
        ],
        [
         115.325,
         33.457
        ],
        [
         115.346,
         33.45
        ],
        [
         115.346,
         33.503
        ],
        [
         115.367,
         33.523
        ],
        [
         115.395,
         33.506
        ],
        [
         115.423,
         33.557
        ],
        [
         115.464,
         33.567
        ],
        [
         115.511,
         33.553
        ],
        [
         115.565,
         33.576
        ],
        [
         115.64,
         33.585
        ],
        [
         115.601,
         33.659
        ],
        [
         115.602,
         33.719
        ],
        [
         115.563,
         33.773
        ],
        [
         115.577,
         33.788
        ],
        [
         115.614,
         33.776
        ],
        [
         115.632,
         33.87
        ],
        [
         115.548,
         33.875
        ],
        [
         115.578,
         33.95
        ],
        [
         115.579,
         33.974
        ],
        [
         115.607,
         34.03
        ],
        [
         115.642,
         34.032
        ],
        [
         115.658,
         34.061
        ],
        [
         115.706,
         34.06
        ],
        [
         115.709,
         34.062
        ],
        [
         115.709,
         34.592
        ],
        [
         115.697,
         34.594
        ],
        [
         115.686,
         34.556
        ],
        [
         115.623,
         34.574
        ],
        [
         115.553,
         34.569
        ],
        [
         115.516,
         34.582
        ],
        [
         115.461,
         34.637
        ],
        [
         115.434,
         34.725
        ],
        [
         115.449,
         34.744
        ],
        [
         115.427,
         34.805
        ],
        [
         115.317,
         34.859
        ],
        [
         115.256,
         34.845
        ],
        [
         115.239,
         34.878
        ],
        [
         115.252,
         34.906
        ],
        [
         115.205,
         34.914
        ],
        [
         115.219,
         34.96
        ],
        [
         115.157,
         34.958
        ],
        [
         115.128,
         35.005
        ],
        [
         115.075,
         35.001
        ],
        [
         115.029,
         34.972
        ],
        [
         115.008,
         34.988
        ],
        [
         114.951,
         34.99
        ],
        [
         114.924,
         34.969
        ],
        [
         114.881,
         35.004
        ],
        [
         114.824,
         35.012
        ],
        [
         114.852,
         35.042
        ],
        [
         114.819,
         35.052
        ],
        [
         114.836,
         35.077
        ],
        [
         114.883,
         35.099
        ],
        [
         114.842,
         35.151
        ],
        [
         114.861,
         35.182
        ],
        [
         114.932,
         35.198
        ],
        [
         114.929,
         35.245
        ],
        [
         114.958,
         35.261
        ],
        [
         115.043,
         35.377
        ],
        [
         115.074,
         35.374
        ],
        [
         115.092,
         35.416
        ],
        [
         115.118,
         35.4
        ],
        [
         115.126,
         35.418
        ],
        [
         115.172,
         35.427
        ],
        [
         115.237,
         35.423
        ],
        [
         115.307,
         35.48
        ],
        [
         115.356,
         35.49
        ],
        [
         115.345,
         35.554
        ],
        [
         115.383,
         35.569
        ],
        [
         115.486,
         35.71
        ],
        [
         115.529,
         35.734
        ],
        [
         115.623,
         35.739
        ],
        [
         115.694,
         35.754
        ],
        [
         115.696,
         35.789
        ],
        [
         115.709,
         35.804
        ],
        [
         115.709,
         35.968
        ],
        [
         115.699,
         35.966
        ],
        [
         115.649,
         35.923
        ],
        [
         115.584,
         35.922
        ],
        [
         115.513,
         35.89
        ],
        [
         115.488,
         35.881
        ],
        [
         115.46,
         35.868
        ],
        [
         115.408,
         35.809
        ],
        [
         115.363,
         35.78
        ],
        [
         115.335,
         35.797
        ],
        [
         115.364,
         35.894
        ],
        [
         115.354,
         35.939
        ],
        [
         115.363,
         35.972
        ],
        [
         115.448,
         36.012
        ],
        [
         115.449,
         36.047
        ],
        [
         115.484,
         36.126
        ],
        [
         115.484,
         36.149
        ],
        [
         115.465,
         36.17
        ],
        [
         115.451,
         36.152
        ],
        [
         115.377,
         36.128
        ],
        [
         115.366,
         36.099
        ],
        [
         115.313,
         36.088
        ],
        [
         115.302,
         36.128
        ],
        [
         115.279,
         36.138
        ],
        [
         115.242,
         36.191
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.203,
         36.209
        ],
        [
         115.201,
         36.21
        ],
        [
         115.201,
         36.21
        ],
        [
         115.184,
         36.193
        ],
        [
         115.125,
         36.21
        ],
        [
         115.105,
         36.172
        ],
        [
         115.063,
         36.178
        ],
        [
         115.049,
         36.162
        ],
        [
         115.046,
         36.113
        ],
        [
         114.998,
         36.07
        ],
        [
         114.914,
         36.052
        ],
        [
         114.927,
         36.089
        ],
        [
         114.913,
         36.141
        ],
        [
         114.858,
         36.145
        ],
        [
         114.858,
         36.128
        ],
        [
         114.772,
         36.125
        ],
        [
         114.735,
         36.156
        ],
        [
         114.72,
         36.14
        ],
        [
         114.64,
         36.137
        ],
        [
         114.589,
         36.118
        ],
        [
         114.587,
         36.141
        ],
        [
         114.533,
         36.172
        ],
        [
         114.48,
         36.178
        ],
        [
         114.466,
         36.198
        ],
        [
         114.417,
         36.206
        ],
        [
         114.408,
         36.225
        ],
        [
         114.356,
         36.23
        ],
        [
         114.345,
         36.256
        ],
        [
         114.299,
         36.246
        ],
        [
         114.258,
         36.264
        ],
        [
         114.241,
         36.251
        ],
        [
         114.21,
         36.273
        ],
        [
         114.203,
         36.245
        ],
        [
         114.17,
         36.246
        ],
        [
         114.17,
         36.246
        ],
        [
         114.176,
         36.265
        ],
        [
         114.129,
         36.28
        ],
        [
         114.08,
         36.27
        ],
        [
         114.043,
         36.303
        ],
        [
         114.056,
         36.329
        ],
        [
         114.003,
         36.334
        ],
        [
         113.982,
         36.318
        ],
        [
         113.963,
         36.354
        ],
        [
         113.911,
         36.315
        ],
        [
         113.882,
         36.354
        ],
        [
         113.849,
         36.348
        ],
        [
         113.857,
         36.329
        ],
        [
         113.813,
         36.332
        ],
        [
         113.755,
         36.366
        ],
        [
         113.731,
         36.363
        ],
        [
         113.736,
         36.325
        ],
        [
         113.712,
         36.303
        ],
        [
         113.716,
         36.262
        ],
        [
         113.682,
         36.216
        ],
        [
         113.698,
         36.182
        ],
        [
         113.651,
         36.174
        ],
        [
         113.706,
         36.149
        ],
        [
         113.713,
         36.13
        ],
        [
         113.655,
         36.125
        ],
        [
         113.671,
         36.116
        ],
        [
         113.686,
         36.056
        ],
        [
         113.66,
         36.035
        ],
        [
         113.695,
         36.027
        ],
        [
         113.679,
         35.986
        ],
        [
         113.649,
         35.994
        ],
        [
         113.654,
         35.932
        ],
        [
         113.638,
         35.87
        ],
        [
         113.661,
         35.837
        ],
        [
         113.583,
         35.818
        ],
        [
         113.605,
         35.798
        ],
        [
         113.588,
         35.737
        ],
        [
         113.593,
         35.692
        ],
        [
         113.623,
         35.675
        ],
        [
         113.625,
         35.633
        ],
        [
         113.578,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.558,
         35.622
        ],
        [
         113.514,
         35.574
        ],
        [
         113.499,
         35.532
        ],
        [
         113.439,
         35.507
        ],
        [
         113.392,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.312,
         35.481
        ],
        [
         113.304,
         35.427
        ],
        [
         113.243,
         35.449
        ],
        [
         113.19,
         35.449
        ],
        [
         113.185,
         35.409
        ],
        [
         113.165,
         35.413
        ],
        [
         113.149,
         35.351
        ],
        [
         113.126,
         35.332
        ],
        [
         113.067,
         35.354
        ],
        [
         112.996,
         35.362
        ],
        [
         112.986,
         35.34
        ],
        [
         112.992,
         35.296
        ],
        [
         112.936,
         35.284
        ],
        [
         112.934,
         35.263
        ],
        [
         112.884,
         35.244
        ],
        [
         112.85,
         35.252
        ],
        [
         112.85,
         33.04
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        112.85,
        34.81
       ],
       [
        112.857,
        34.809
       ],
       [
        113.012,
        34.831
       ],
       [
        113.156,
        34.875
       ],
       [
        113.288,
        34.94
       ],
       [
        113.399,
        34.974
       ],
       [
        113.489,
        34.978
       ],
       [
        113.617,
        34.954
       ],
       [
        113.784,
        34.902
       ],
       [
        113.9,
        34.895
       ],
       [
        113.965,
        34.931
       ],
       [
        114.156,
        34.936
       ],
       [
        114.473,
        34.91
       ],
       [
        114.681,
        34.928
       ],
       [
        114.798,
        34.978
       ],
       [
        114.831,
        35.02
       ]
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       114.838,
       35.02
      ],
      [
       114.862,
       35.061
      ],
      [
       114.866,
       35.145
      ],
      [
       114.905,
       35.229
      ],
      [
       115.014,
       35.33
      ],
      [
       115.136,
       35.406
      ],
      [
       115.272,
       35.459
      ],
      [
       115.34,
       35.503
      ],
      [
       115.341,
       35.538
      ],
      [
       115.382,
       35.597
      ],
      [
       115.463,
       35.681
      ],
      [
       115.596,
       35.758
      ],
      [
       115.709,
       35.802
      ]
     ]
    },
    "n": "Huang"
   }
  ],
  "lakes": [],
  "_bbox": [
   112.85,
   33.04,
   115.709,
   37.35
  ]
 }
};
