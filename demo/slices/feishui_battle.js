// 本文件由 tools/build.py 自动生成（切片 feishui_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["feishui_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["feishui_battle"] = {
 "meta": {
  "kind": "county",
  "region": "two_jin",
  "title": "淝水之战·风声鹤唳",
  "dossier_label": "淝水之战",
  "subtitle": "太元八年（383）· 前秦 vs 东晋",
  "primary_place": "feishui",
  "dossier_event": "event:feishui_zhanyi",
  "vocab_pack": "feishui_battle",
  "terrain_grid": "china_coarse",
  "lead": "太元八年（383），前秦苻坚倾国南侵，东晋谢安谢玄率北府兵拒敌于淝水，以少胜多大溃秦军，奠定南北对峙之势。",
  "parties_note": "本切片主干为后世官修史（晋书/资治通鉴），无前秦、东晋双方当代原始档案；双方实况经后世史官回溯叙述，缺口为一等公民。系统不裁决，只并列。",
  "subject_names": {
   "event:feishui_zhanyi": "淝水决战",
   "event:luojian": "洛涧之战",
   "event:feishui_duizhi": "淝水对峙",
   "event:dongjin_juece": "东晋决策抗秦",
   "event:dongjin_huishou": "东晋收复中原",
   "place:feishui": "淝水",
   "place:bagongshan": "八公山",
   "person:fujian": "苻坚",
   "person:xie_an": "谢安",
   "person:xie_xuan": "谢玄"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "two_jin",
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
    "note": "淝水之战：朝堂凝聚力——东晋谢安镇定总揽、北府兵为主力；前秦多民族兵源向心力弱"
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
    "note": "淝水之战：后勤物力——前秦自长安远征补给线过长、北府兵主场以逸待劳"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "淝水之战：人口动员——北府兵为流民骁锐、前秦多族杂糅"
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
    "note": "淝水之战：地缘战略——淝水—淮河为轴，东晋据南岸扼秦军南下"
   }
  },
  "province": "anhui",
  "related": [],
  "page": "county.html?scene=feishui_battle",
  "key": "feishui_battle",
  "scene_id": "feishui_battle"
 },
 "sources": [
  {
   "id": "jinshu",
   "title": "晋书",
   "party": "唐·官修",
   "stance_label": "唐代官修前朝史",
   "distance_label": "唐房玄龄等撰，距三国约三百五十年",
   "color": "#6C7A89",
   "compiler": "房玄龄等（唐）",
   "period": "唐",
   "note": "本切片主干史料：取《晋书·苻坚载记》（叙前秦南侵与淝水溃败）、《谢安传》《谢玄传》《刘牢之传》（叙东晋拒秦）。唐修晋史，距事二百六十余年，以唐人视角叙两晋之亡与东晋之胜，胜者与叙事者异代同调。"
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
   "note": "淝水部分在《通鉴》卷一百四—一百五，整合晋书与南北朝诸史，叙事最完整，明确以东晋纪年。其取舍依据北宋大一统修史者的正统判断，与晋书互为表里。"
  },
  {
   "id": "feishui_yanjiu",
   "title": "淝水战史与历史地理研究（现代综述）",
   "party": "二手综述",
   "stance_label": "近现代考订",
   "distance_label": "现代淝水战史与历史地理研究，距事一千六百余岁",
   "color": "#9B7B5A",
   "compiler": "近现代研究",
   "period": "现代",
   "note": "现代淝水战史与历史地理考订的二手综述，用于兵力区间、战术推演与缺口项；凡依赖此源的断言皆为待升级项，默认可关闭。"
  }
 ],
 "places": [
  {
   "id": "changan",
   "name": "长安",
   "lat": 34.24642,
   "lon": 108.90698,
   "type": "city",
   "note": "前秦都，苻坚发兵南侵起点（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：长安县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：长安县",
   "elev": 403
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lat": 32.05256,
   "lon": 118.76899,
   "type": "city",
   "note": "东晋都，谢安决策抗秦中枢（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：建康县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：建康县",
   "elev": 14
  },
  {
   "id": "shouyang",
   "name": "寿阳/寿春",
   "lat": 32.57,
   "lon": 116.78,
   "type": "city",
   "note": "淝水之战前秦苻融前哨，今安徽寿县（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 20
  },
  {
   "id": "feishui",
   "name": "淝水",
   "lat": 32.55,
   "lon": 116.8,
   "type": "river",
   "note": "东淝河，决战河道，今安徽寿县东南（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 20
  },
  {
   "id": "luojian",
   "name": "洛涧",
   "lat": 32.6,
   "lon": 117.02,
   "type": "city",
   "note": "洛涧水（今洛河），刘牢之破秦前哨战地，今安徽淮南东（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 55
  },
  {
   "id": "bagongshan",
   "name": "八公山",
   "lat": 32.66,
   "lon": 116.83,
   "type": "region",
   "note": "淝水之北，『风声鹤唳、草木皆兵』地，今安徽寿县北（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 23
  },
  {
   "id": "huai_river",
   "name": "淮河",
   "lat": 32.9,
   "lon": 116.5,
   "type": "river",
   "note": "南北界河，东晋据南岸、前秦渡河北来（近似坐标；CHGIS 仅收录历史政区治所，本要素不在其范围，坐标据公开地理数据）",
   "geo_match": "approx",
   "geo_note": "现代近似坐标（约1km级），非测绘级；CHGIS 未收录该地名，坐标据公开地理数据",
   "elev": 17
  },
  {
   "id": "hefei",
   "name": "合肥",
   "lat": 31.86446,
   "lon": 117.27646,
   "type": "city",
   "note": "江淮要冲，北府兵集结、谢玄北伐所经（CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：合肥县）",
   "geo_match": "chgis",
   "geo_note": "CHGIS V6 时间序列（Harvard Dataverse：府 DVN/WW1PD6、县 DVN/Q9VOF5；WGS84）：合肥县",
   "elev": 29
  }
 ],
 "persons": [
  {
   "id": "fujian",
   "name": "苻坚",
   "party": "前秦",
   "note": "前秦皇帝，倾国南侵，淝水败后北方崩解",
   "influence": 0
  },
  {
   "id": "furong",
   "name": "苻融",
   "party": "前秦",
   "note": "苻坚弟，前锋都督，屯寿阳，淝水阵中马倒被杀",
   "influence": 0
  },
  {
   "id": "xie_an",
   "name": "谢安",
   "party": "东晋",
   "note": "东晋宰相，镇之以静，总揽抗秦决策",
   "influence": 1
  },
  {
   "id": "xie_shi",
   "name": "谢石",
   "party": "东晋",
   "note": "征讨大都督，统全军拒秦",
   "influence": 0
  },
  {
   "id": "xie_xuan",
   "name": "谢玄",
   "party": "东晋",
   "note": "前锋都督，北府兵主帅，淝水实战指挥",
   "influence": 0
  },
  {
   "id": "liu_laozhi",
   "name": "刘牢之",
   "party": "东晋",
   "note": "北府骁将，洛涧夜袭破梁成",
   "influence": 0
  },
  {
   "id": "zhu_xu",
   "name": "朱序",
   "party": "东晋",
   "note": "原襄阳守将、降秦为内应，阵后呼『秦军败矣』乱秦军",
   "influence": 0
  },
  {
   "id": "huan_chong",
   "name": "桓冲",
   "party": "东晋",
   "note": "荆州刺史，上游策应、牵制秦军西翼",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "FS001",
   "subject": "event:dongjin_juece",
   "predicate": "建康决策抗秦",
   "value_text": "前秦大举南侵，东晋以谢安为统帅镇之以静，诏谢石为征讨大都督、谢玄为前锋都督，率北府兵北上拒敌。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "jiankang",
   "source": "jinshu",
   "quote": "坚遣其弟阳平公融镇守中都，以为大举之计",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "制度维度（3）/思想维度（5）：东晋朝堂以谢安总揽、北府兵为主力，是『镇之以静』的决策结构。",
   "dims": [
    3,
    5
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS002",
   "subject": "event:qin_nanqin",
   "predicate": "倾国南侵",
   "value_text": "苻坚自长安发兵，号称步骑六十余万、水陆并进，分三路南下，志在灭晋一统。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "changan",
   "source": "zizhi_tongjian",
   "quote": "坚发长安，戎卒六十余万，骑二十七万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：前秦以举国之力南征，兵力数字见 gap。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "FS003",
   "subject": "event:luojian",
   "predicate": "洛涧破敌",
   "value_text": "刘牢之率北府精兵夜袭洛涧，破前秦梁成军、斩梁成，晋军士气大振，水陆俱进逼淝水。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "luojian",
   "source": "jinshu",
   "quote": "牢之率精卒五千，夜袭梁成垒，斩成，秦兵败退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：北府兵精锐与夜袭战术是晋军前哨胜因。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS004",
   "subject": "event:feishui_duizhi",
   "predicate": "请秦小却",
   "value_text": "两军夹淝水而阵，谢玄遣使请秦军略向后移以便晋军渡水决战；苻坚欲半渡而击，许之。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "jinshu",
   "quote": "玄遣使谓融曰：『君悬军深入，而置陈逼水，此乃持久之计，非欲速战者也』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）：谢玄『移阵』之请是淝水决战的战术转折点。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS005",
   "subject": "event:feishui_zhanyi",
   "predicate": "淝水大溃",
   "value_text": "秦军后撤阵脚自乱，晋军乘势渡水奋击；朱序于阵后大呼『秦军败矣』，秦兵惊溃奔逃，苻融马倒被杀，秦军崩溃。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "jinshu",
   "quote": "序在陈后呼曰：『秦兵败矣！』众遂大奔",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：淝水决战为战役决定性事件，置信度最高。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS006",
   "subject": "event:fujian_beifan",
   "predicate": "单骑北还",
   "value_text": "苻坚中流矢，单骑北还长安，前秦元气大伤，北方旋即分崩离析。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "changan",
   "source": "jinshu",
   "quote": "坚中流矢，单骑走还淮北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）：苻坚败还，前秦统一努力瓦解。",
   "dims": [
    6
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS007",
   "subject": "event:dongjin_huishou",
   "predicate": "乘胜北伐",
   "value_text": "谢玄乘胜北伐，收复河南、山东及淮北诸郡，进军至河北，晋室疆域北扩至黄河南岸。",
   "time": {
    "era_text": "太元九年（384）",
    "gregorian_year": 384
   },
   "place": "hefei",
   "source": "zizhi_tongjian",
   "quote": "玄进据彭城，遣军攻青兖，所向风靡",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：淝水决胜后的战略扩张，东晋疆域北扩。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "FS008",
   "subject": "place:feishui",
   "predicate": "决战河道",
   "value_text": "淝水（东淝河）自西北向东南流经寿阳城下，与淮河相通，两岸仄狭，利守不利大兵团展开。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "jinshu",
   "quote": "淮水南，淝水出焉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：淝水—淮河的水系地形是夹水而阵与半渡决战的自然前提。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS009",
   "subject": "place:bagongshan",
   "predicate": "草木皆兵地",
   "value_text": "八公山在淝水之北，秦军阵于其麓；溃败时晋军疑山间草木皆秦兵，『风声鹤唳、草木皆兵』即此。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "bagongshan",
   "source": "jinshu",
   "quote": "望八公山上草木，皆以为晋兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/社会维度（4）：地形与溃兵心理叠加成『草木皆兵』之象。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS010",
   "subject": "event:feishui_zhanyi",
   "predicate": "阵后乱秦",
   "value_text": "朱序原为襄阳守将、降秦后为晋内应，于秦阵后大呼『秦军败矣』，直接诱发秦军阵脚大乱。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zizhi_tongjian",
   "quote": "序乃扬声曰：『秦兵败矣！』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "技术维度（2）/事件维度（6）：内应之呼是秦溃的临门一脚。",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "宋·官修",
   "_faction": null
  },
  {
   "id": "FS011",
   "subject": "event:qin_nanqin",
   "predicate": "多族杂糅",
   "value_text": "前秦兵源以氐族本部为骨干，杂以鲜卑、羌、匈奴与汉族降众，号令不一、向心力弱于东晋北府兵。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "changan",
   "source": "jinshu",
   "quote": "徙诸氐十五万户于方镇，鲜卑、羌、羯布满畿甸",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "制度维度（3）/社会维度（4）：前秦多民族兵源的整合难题，是败因之一。",
   "dims": [
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS012",
   "subject": "person:xie_an",
   "predicate": "围棋赌墅",
   "value_text": "谢安闻前方战报，神色如常，围棋赌墅，朝野恃以安定，体现魏晋名士的镇定风度。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "jiankang",
   "source": "jinshu",
   "quote": "既罢，还内，过户限，心喜甚，不觉屐齿之折",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "思想维度（5）：谢安的镇定是东晋决策层的心理锚点，亦见魏晋风度。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "唐·官修",
   "_faction": null
  },
  {
   "id": "FS013",
   "subject": "event:feishui_zhanyi",
   "predicate": "兵力数考订",
   "value_text": "《晋书》称秦军步骑六十余万、水陆百万，《通鉴》沿其说；现代研究多以为系夸张叙述，前秦实际可战之兵远少于此数。",
   "time": {
    "era_text": "现代考订",
    "gregorian_year": 2000
   },
   "place": "feishui",
   "source": "feishui_yanjiu",
   "quote": "六十余万/百万为夸张上限，实际可集中淝水前线者有限",
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
   "id": "FS014",
   "subject": "event:feishui_zhanyi",
   "predicate": "以少胜多推演",
   "value_text": "按北府兵精锐、主场地利、秦军多民族杂糅指挥不畅三项，模型推算东晋以少胜多概率偏高（本项目推演，非史料原值）。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "feishui_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于兵力/地形/指挥结构的推断值，可复现。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "FS015",
   "subject": "place:huai_river",
   "predicate": "补给推演",
   "value_text": "前秦自长安远征、补给线沿秦岭—淮河拉长，东晋据淮南岸以逸待劳，利于持久消耗。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "huai_river",
   "source": "feishui_yanjiu",
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
   "id": "FS016",
   "subject": "event:feishui_zhanyi",
   "predicate": "秦军兵力缺口",
   "value_text": "前秦实际投入淝水前线的兵力、鲜卑/羌族降众比例与死伤数无精确史料：《晋书》仅给夸张总数，《通鉴》沿之，二者皆非可核实数，缺口即结论，仅能给区间而非定点数。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "feishui_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：前秦真实兵力与族属构成为结构性未知。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "前秦淝水前线实际兵力与鲜卑/羌/汉构成比例",
    "skills": [
     "核《晋书·苻坚载记》对兵额的表述",
     "比对《资治通鉴》编年叙述的夸张成分",
     "查现代淝水研究对兵力的估算区间"
    ],
    "accept": "明确前秦淝水前线兵力为结构性未知，仅能给区间而非定点数"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "FS017",
   "subject": "event:qin_nanqin",
   "predicate": "前秦决策视角缺口",
   "value_text": "苻坚决意南征的内部决策过程，主要经《晋书·苻坚载记》后向追述，前秦自身档案无存，决策细节与反对声（权翼、苻融谏）多为晋人回望式建构。",
   "time": {
    "era_text": "太元八年（383）",
    "gregorian_year": 383
   },
   "place": "changan",
   "source": "feishui_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：前秦决策叙事的视角缺失与后向建构。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "苻坚南征决策的鲜卑/汉臣立场与内部异议",
    "skills": [
     "比对《载记》与《通鉴》对谏言的处理",
     "核前秦境内民族政治的结构性矛盾"
    ],
    "accept": "承认前秦决策细节在史料上为晋人后向建构的弱证据"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FS016",
  "FS017"
 ],
 "events": [
  {
   "id": "ev_dongjin_juece",
   "subject": "event:dongjin_juece",
   "year": 383,
   "era": "太元八年（383）",
   "title": "东晋决策抗秦",
   "kind": "政治·决策",
   "text": "前秦大举南侵，东晋以谢安为统帅镇之以静，诏谢石为征讨大都督、谢玄为前锋都督，率北府兵北上拒敌。"
  },
  {
   "id": "ev_qin_nanqin",
   "subject": "event:qin_nanqin",
   "year": 383,
   "era": "太元八年（383）",
   "title": "前秦南侵",
   "kind": "战事·入侵",
   "text": "苻坚自长安发兵，号称步骑六十余万、水陆并进，分三路南下，志在灭晋一统。"
  },
  {
   "id": "ev_luojian",
   "subject": "event:luojian",
   "year": 383,
   "era": "太元八年（383）",
   "title": "洛涧之战",
   "kind": "战事·前哨战",
   "text": "刘牢之率北府精兵夜袭洛涧，破前秦梁成军、斩梁成，晋军士气大振，水陆俱进逼淝水。"
  },
  {
   "id": "ev_feishui_duizhi",
   "subject": "event:feishui_duizhi",
   "year": 383,
   "era": "太元八年（383）",
   "title": "淝水对峙",
   "kind": "战事·对峙",
   "text": "两军夹淝水而阵，谢玄遣使请秦军略向后移以便晋军渡水决战；苻坚欲半渡而击，许之。"
  },
  {
   "id": "ev_feishui_zhanyi",
   "subject": "event:feishui_zhanyi",
   "year": 383,
   "era": "太元八年（383）",
   "title": "淝水决战·秦军大溃",
   "kind": "战事·决战",
   "text": "秦军后撤阵脚自乱，晋军乘势渡水奋击；朱序于阵后大呼『秦军败矣』，秦兵惊溃奔逃，风声鹤唳、草木皆兵，苻融马倒被杀，秦军崩溃。"
  },
  {
   "id": "ev_fujian_beifan",
   "subject": "event:fujian_beifan",
   "year": 383,
   "era": "太元八年（383）",
   "title": "苻坚北返",
   "kind": "战事·败退",
   "text": "苻坚中流矢，单骑北还长安，前秦元气大伤，北方旋即分崩离析。"
  },
  {
   "id": "ev_dongjin_huishou",
   "subject": "event:dongjin_huishou",
   "year": 384,
   "era": "太元九年（384）",
   "title": "东晋收复中原",
   "kind": "战事·收复",
   "text": "谢玄乘胜北伐，收复河南、山东及淮北诸郡，进军至河北，晋室疆域北扩至黄河南岸。"
  }
 ],
 "edges": [
  {
   "from": "changan",
   "to": "shouyang",
   "type": "military",
   "label": "长安—寿阳（前秦南侵主线）"
  },
  {
   "from": "shouyang",
   "to": "feishui",
   "type": "river",
   "label": "寿阳—淝水（夹水而阵）"
  },
  {
   "from": "feishui",
   "to": "bagongshan",
   "type": "military",
   "label": "淝水北岸—八公山（秦军阵地）"
  },
  {
   "from": "luojian",
   "to": "feishui",
   "type": "military",
   "label": "洛涧—淝水（晋军进逼）"
  },
  {
   "from": "jiankang",
   "to": "hefei",
   "type": "military",
   "label": "建康—合肥（东晋调兵北上）"
  },
  {
   "from": "hefei",
   "to": "luojian",
   "type": "military",
   "label": "合肥—洛涧（北府兵进逼）"
  },
  {
   "from": "huai_river",
   "to": "feishui",
   "type": "river",
   "label": "淮河—淝水（淮—淝水系）"
  },
  {
   "from": "shouyang",
   "to": "huai_river",
   "type": "river",
   "label": "寿阳临淮"
  },
  {
   "from": "jiankang",
   "to": "shouyang",
   "type": "military",
   "label": "建康—寿阳（晋廷遥制前敌）"
  },
  {
   "from": "changan",
   "to": "jiankang",
   "type": "military",
   "label": "长安—建康（秦灭晋之战略目标）"
  }
 ],
 "control": [
  {
   "place_id": "changan",
   "party": "前秦",
   "start": 383,
   "end": null,
   "basis": "前秦都，苻坚发兵后仍为秦根本",
   "note": "前秦都"
  },
  {
   "place_id": "shouyang",
   "party": "前秦",
   "start": 383,
   "end": 383,
   "basis": "苻融率前锋屯寿阳，淝水战前",
   "note": "前秦南侵前哨"
  },
  {
   "place_id": "luojian",
   "party": "前秦",
   "start": 383,
   "end": 383,
   "basis": "梁成屯洛涧，刘牢之破之",
   "note": ""
  },
  {
   "place_id": "feishui",
   "party": "前秦",
   "start": 383,
   "end": 383,
   "basis": "秦军夹淝水而阵（北岸）",
   "note": ""
  },
  {
   "place_id": "bagongshan",
   "party": "前秦",
   "start": 383,
   "end": 383,
   "basis": "秦军阵于八公山北",
   "note": ""
  },
  {
   "place_id": "jiankang",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "东晋都，谢安决策中枢",
   "note": ""
  },
  {
   "place_id": "hefei",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "北府兵集结、谢玄北伐所经",
   "note": ""
  },
  {
   "place_id": "huai_river",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "东晋据淮南岸",
   "note": ""
  },
  {
   "place_id": "shouyang",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "淝水溃后晋军收复寿阳",
   "note": ""
  },
  {
   "place_id": "luojian",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "洛涧大捷后晋控洛涧",
   "note": ""
  },
  {
   "place_id": "feishui",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "渡淝水击秦，收复北岸",
   "note": ""
  },
  {
   "place_id": "bagongshan",
   "party": "东晋",
   "start": 383,
   "end": null,
   "basis": "秦溃后晋军进据八公山南",
   "note": ""
  }
 ],
 "control_seats": [
  {
   "place_id": "changan",
   "name": "长安",
   "lon": 108.90698,
   "lat": 34.24642,
   "region": "two_jin"
  },
  {
   "place_id": "shouyang",
   "name": "寿阳/寿春",
   "lon": 116.78,
   "lat": 32.57,
   "region": "two_jin"
  },
  {
   "place_id": "luojian",
   "name": "洛涧",
   "lon": 117.02,
   "lat": 32.6,
   "region": "two_jin"
  },
  {
   "place_id": "feishui",
   "name": "淝水",
   "lon": 116.8,
   "lat": 32.55,
   "region": "two_jin"
  },
  {
   "place_id": "bagongshan",
   "name": "八公山",
   "lon": 116.83,
   "lat": 32.66,
   "region": "two_jin"
  },
  {
   "place_id": "jiankang",
   "name": "建康",
   "lon": 118.76899,
   "lat": 32.05256,
   "region": "two_jin"
  },
  {
   "place_id": "hefei",
   "name": "合肥",
   "lon": 117.27646,
   "lat": 31.86446,
   "region": "two_jin"
  },
  {
   "place_id": "huai_river",
   "name": "淮河",
   "lon": 116.5,
   "lat": 32.9,
   "region": "two_jin"
  }
 ],
 "control_years": [
  383,
  384
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
   "前秦",
   "东晋",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "唐·官修": "后世官修",
   "宋·官修": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "前秦": "#9C4A2E",
   "东晋": "#2E6F8F",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
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
        120.248,
        31.923
       ],
       [
        120.036,
        31.936
       ],
       [
        120.099,
        31.976
       ],
       [
        120.248,
        31.993
       ],
       [
        120.201,
        34.326
       ],
       [
        119.77,
        34.496
       ],
       [
        119.427,
        34.714
       ],
       [
        119.201,
        34.748
       ],
       [
        119.216,
        35.012
       ],
       [
        119.43,
        35.301
       ],
       [
        119.608,
        35.47
       ],
       [
        119.811,
        35.618
       ],
       [
        119.912,
        35.693
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
        107.428,
        30.385
       ],
       [
        119.958,
        35.726
       ],
       [
        119.866,
        35.644
       ],
       [
        119.72,
        35.589
       ],
       [
        119.526,
        35.359
       ],
       [
        119.353,
        35.114
       ],
       [
        119.165,
        34.849
       ],
       [
        119.351,
        34.749
       ],
       [
        119.583,
        34.582
       ],
       [
        119.964,
        34.448
       ],
       [
        120.248,
        34.289
       ],
       [
        120.184,
        31.966
       ],
       [
        120.074,
        31.96
       ],
       [
        120.192,
        31.906
       ],
       [
        120.248,
        30.385
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
         110.379,
         34.601
        ],
        [
         110.488,
         34.611
        ],
        [
         110.611,
         34.608
        ],
        [
         110.749,
         34.652
        ],
        [
         110.825,
         34.616
        ],
        [
         110.903,
         34.669
        ],
        [
         110.976,
         34.706
        ],
        [
         111.118,
         34.757
        ],
        [
         111.233,
         34.79
        ],
        [
         111.292,
         34.807
        ],
        [
         111.389,
         34.815
        ],
        [
         111.503,
         34.83
        ],
        [
         111.57,
         34.843
        ],
        [
         111.618,
         34.895
        ],
        [
         111.682,
         34.951
        ],
        [
         111.74,
         35.005
        ],
        [
         111.81,
         35.062
        ],
        [
         111.978,
         35.067
        ],
        [
         112.039,
         35.046
        ],
        [
         112.056,
         35.099
        ],
        [
         112.04,
         35.194
        ],
        [
         112.059,
         35.28
        ],
        [
         112.217,
         35.253
        ],
        [
         112.305,
         35.252
        ],
        [
         112.368,
         35.22
        ],
        [
         112.513,
         35.218
        ],
        [
         112.628,
         35.263
        ],
        [
         112.773,
         35.208
        ],
        [
         112.884,
         35.244
        ],
        [
         112.936,
         35.284
        ],
        [
         112.986,
         35.34
        ],
        [
         113.067,
         35.354
        ],
        [
         113.149,
         35.351
        ],
        [
         113.185,
         35.409
        ],
        [
         113.243,
         35.449
        ],
        [
         113.312,
         35.481
        ],
        [
         113.392,
         35.507
        ],
        [
         113.499,
         35.532
        ],
        [
         113.558,
         35.622
        ],
        [
         113.578,
         35.633
        ],
        [
         113.623,
         35.675
        ],
        [
         113.589,
         35.726
        ],
        [
         110.578,
         35.702
        ],
        [
         110.589,
         35.602
        ],
        [
         110.531,
         35.511
        ],
        [
         110.45,
         35.328
        ],
        [
         110.379,
         35.211
        ],
        [
         110.374,
         35.134
        ],
        [
         110.262,
         34.944
        ],
        [
         110.247,
         34.789
        ],
        [
         110.23,
         34.693
        ],
        [
         110.295,
         34.611
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
         117.312,
         34.562
        ],
        [
         117.304,
         34.542
        ],
        [
         117.273,
         34.5
        ],
        [
         117.248,
         34.451
        ],
        [
         117.139,
         34.527
        ],
        [
         117.104,
         34.649
        ],
        [
         117.062,
         34.676
        ],
        [
         117.022,
         34.759
        ],
        [
         116.951,
         34.811
        ],
        [
         116.966,
         34.845
        ],
        [
         116.922,
         34.895
        ],
        [
         116.822,
         34.93
        ],
        [
         116.789,
         34.975
        ],
        [
         116.678,
         34.939
        ],
        [
         116.614,
         34.923
        ],
        [
         116.445,
         34.896
        ],
        [
         116.403,
         34.756
        ],
        [
         116.364,
         34.715
        ],
        [
         116.374,
         34.64
        ],
        [
         116.433,
         34.63
        ],
        [
         116.491,
         34.574
        ],
        [
         116.592,
         34.494
        ],
        [
         116.723,
         34.472
        ],
        [
         116.783,
         34.43
        ],
        [
         116.909,
         34.408
        ],
        [
         116.961,
         34.364
        ],
        [
         116.969,
         34.284
        ],
        [
         117.025,
         34.167
        ],
        [
         117.124,
         34.128
        ],
        [
         117.192,
         34.069
        ],
        [
         117.277,
         34.079
        ],
        [
         117.357,
         34.088
        ],
        [
         117.435,
         34.028
        ],
        [
         117.543,
         34.039
        ],
        [
         117.613,
         34.0
        ],
        [
         117.671,
         33.992
        ],
        [
         117.715,
         33.879
        ],
        [
         117.759,
         33.874
        ],
        [
         117.725,
         33.75
        ],
        [
         117.791,
         33.734
        ],
        [
         117.902,
         33.72
        ],
        [
         118.02,
         33.739
        ],
        [
         118.118,
         33.766
        ],
        [
         118.168,
         33.663
        ],
        [
         118.118,
         33.595
        ],
        [
         118.051,
         33.492
        ],
        [
         118.017,
         33.403
        ],
        [
         117.993,
         33.333
        ],
        [
         117.939,
         33.262
        ],
        [
         117.977,
         33.226
        ],
        [
         118.037,
         33.152
        ],
        [
         118.149,
         33.169
        ],
        [
         118.217,
         33.192
        ],
        [
         118.244,
         33.028
        ],
        [
         118.269,
         32.969
        ],
        [
         118.292,
         32.946
        ],
        [
         118.233,
         32.914
        ],
        [
         118.301,
         32.846
        ],
        [
         118.334,
         32.762
        ],
        [
         118.375,
         32.719
        ],
        [
         118.451,
         32.744
        ],
        [
         118.56,
         32.73
        ],
        [
         118.643,
         32.745
        ],
        [
         118.757,
         32.737
        ],
        [
         118.743,
         32.853
        ],
        [
         118.81,
         32.854
        ],
        [
         118.847,
         32.922
        ],
        [
         118.896,
         32.958
        ],
        [
         118.893,
         32.941
        ],
        [
         118.993,
         32.958
        ],
        [
         119.055,
         32.875
        ],
        [
         119.185,
         32.826
        ],
        [
         119.209,
         32.641
        ],
        [
         119.22,
         32.577
        ],
        [
         119.168,
         32.536
        ],
        [
         119.085,
         32.453
        ],
        [
         118.976,
         32.505
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.908,
         32.592
        ],
        [
         118.821,
         32.604
        ],
        [
         118.757,
         32.604
        ],
        [
         118.719,
         32.614
        ],
        [
         118.689,
         32.588
        ],
        [
         118.633,
         32.578
        ],
        [
         118.569,
         32.586
        ],
        [
         118.609,
         32.537
        ],
        [
         118.629,
         32.468
        ],
        [
         118.685,
         32.404
        ],
        [
         118.657,
         32.301
        ],
        [
         118.644,
         32.21
        ],
        [
         118.495,
         32.165
        ],
        [
         118.434,
         32.087
        ],
        [
         118.39,
         31.985
        ],
        [
         118.472,
         31.88
        ],
        [
         118.505,
         31.842
        ],
        [
         118.534,
         31.767
        ],
        [
         118.558,
         31.73
        ],
        [
         118.641,
         31.759
        ],
        [
         118.698,
         31.71
        ],
        [
         118.643,
         31.65
        ],
        [
         118.748,
         31.676
        ],
        [
         118.803,
         31.619
        ],
        [
         118.882,
         31.564
        ],
        [
         118.884,
         31.5
        ],
        [
         118.824,
         31.376
        ],
        [
         118.746,
         31.373
        ],
        [
         118.726,
         31.282
        ],
        [
         118.795,
         31.229
        ],
        [
         118.985,
         31.237
        ],
        [
         119.105,
         31.235
        ],
        [
         119.158,
         31.295
        ],
        [
         119.198,
         31.27
        ],
        [
         119.294,
         31.263
        ],
        [
         119.35,
         31.301
        ],
        [
         119.36,
         31.213
        ],
        [
         119.439,
         31.177
        ],
        [
         119.533,
         31.159
        ],
        [
         119.624,
         31.13
        ],
        [
         119.706,
         31.153
        ],
        [
         119.78,
         31.179
        ],
        [
         119.827,
         31.174
        ],
        [
         119.921,
         31.17
        ],
        [
         119.989,
         31.059
        ],
        [
         120.053,
         31.006
        ],
        [
         120.15,
         30.937
        ],
        [
         120.248,
         30.928
        ],
        [
         120.104,
         34.391
        ],
        [
         119.812,
         34.486
        ],
        [
         119.641,
         34.569
        ],
        [
         119.569,
         34.615
        ],
        [
         119.526,
         34.734
        ],
        [
         119.382,
         34.752
        ],
        [
         119.497,
         34.754
        ],
        [
         119.441,
         34.769
        ],
        [
         119.313,
         34.775
        ],
        [
         119.238,
         34.799
        ],
        [
         119.203,
         34.89
        ],
        [
         119.211,
         34.982
        ],
        [
         119.285,
         35.068
        ],
        [
         119.307,
         35.033
        ],
        [
         119.306,
         35.077
        ],
        [
         119.25,
         35.125
        ],
        [
         119.138,
         35.096
        ],
        [
         119.027,
         35.056
        ],
        [
         118.928,
         35.051
        ],
        [
         118.861,
         34.944
        ],
        [
         118.8,
         34.843
        ],
        [
         118.739,
         34.793
        ],
        [
         118.764,
         34.74
        ],
        [
         118.739,
         34.694
        ],
        [
         118.664,
         34.694
        ],
        [
         118.601,
         34.714
        ],
        [
         118.461,
         34.656
        ],
        [
         118.439,
         34.626
        ],
        [
         118.439,
         34.508
        ],
        [
         118.405,
         34.428
        ],
        [
         118.29,
         34.425
        ],
        [
         118.22,
         34.406
        ],
        [
         118.18,
         34.38
        ],
        [
         118.133,
         34.483
        ],
        [
         118.185,
         34.544
        ],
        [
         118.115,
         34.614
        ],
        [
         118.054,
         34.651
        ],
        [
         117.91,
         34.671
        ],
        [
         117.794,
         34.652
        ],
        [
         117.802,
         34.519
        ],
        [
         117.659,
         34.501
        ],
        [
         117.593,
         34.463
        ],
        [
         117.465,
         34.485
        ],
        [
         117.403,
         34.57
        ],
        [
         117.325,
         34.573
        ],
        [
         117.322,
         34.567
        ],
        [
         117.312,
         34.562
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
         120.248,
         30.385
        ],
        [
         120.224,
         30.927
        ],
        [
         120.111,
         30.956
        ],
        [
         120.001,
         31.027
        ],
        [
         119.946,
         31.106
        ],
        [
         119.878,
         31.161
        ],
        [
         119.81,
         31.149
        ],
        [
         119.716,
         31.17
        ],
        [
         119.678,
         31.168
        ],
        [
         119.649,
         31.105
        ],
        [
         119.634,
         31.019
        ],
        [
         119.582,
         30.932
        ],
        [
         119.557,
         30.874
        ],
        [
         119.554,
         30.826
        ],
        [
         119.48,
         30.772
        ],
        [
         119.445,
         30.65
        ],
        [
         119.39,
         30.686
        ],
        [
         119.323,
         30.63
        ],
        [
         119.265,
         30.575
        ],
        [
         119.272,
         30.51
        ],
        [
         119.336,
         30.509
        ],
        [
         119.368,
         30.385
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
         116.6,
         34.014
        ],
        [
         116.643,
         33.897
        ],
        [
         116.567,
         33.908
        ],
        [
         116.486,
         33.87
        ],
        [
         116.437,
         33.801
        ],
        [
         116.394,
         33.783
        ],
        [
         116.263,
         33.73
        ],
        [
         116.156,
         33.71
        ],
        [
         116.1,
         33.783
        ],
        [
         116.056,
         33.805
        ],
        [
         115.982,
         33.917
        ],
        [
         115.958,
         34.008
        ],
        [
         115.877,
         34.029
        ],
        [
         115.85,
         34.005
        ],
        [
         115.809,
         34.062
        ],
        [
         115.736,
         34.077
        ],
        [
         115.658,
         34.061
        ],
        [
         115.607,
         34.03
        ],
        [
         115.578,
         33.95
        ],
        [
         115.632,
         33.87
        ],
        [
         115.577,
         33.788
        ],
        [
         115.602,
         33.719
        ],
        [
         115.64,
         33.585
        ],
        [
         115.511,
         33.553
        ],
        [
         115.423,
         33.557
        ],
        [
         115.367,
         33.523
        ],
        [
         115.346,
         33.45
        ],
        [
         115.315,
         33.431
        ],
        [
         115.314,
         33.377
        ],
        [
         115.365,
         33.336
        ],
        [
         115.335,
         33.298
        ],
        [
         115.301,
         33.204
        ],
        [
         115.29,
         33.132
        ],
        [
         115.195,
         33.121
        ],
        [
         115.041,
         33.087
        ],
        [
         114.966,
         33.147
        ],
        [
         114.903,
         33.13
        ],
        [
         114.913,
         33.083
        ],
        [
         114.892,
         33.02
        ],
        [
         114.916,
         32.971
        ],
        [
         115.009,
         32.94
        ],
        [
         115.03,
         32.907
        ],
        [
         115.156,
         32.865
        ],
        [
         115.19,
         32.812
        ],
        [
         115.19,
         32.771
        ],
        [
         115.183,
         32.667
        ],
        [
         115.243,
         32.593
        ],
        [
         115.306,
         32.583
        ],
        [
         115.411,
         32.575
        ],
        [
         115.498,
         32.492
        ],
        [
         115.511,
         32.469
        ],
        [
         115.511,
         32.468
        ],
        [
         115.523,
         32.442
        ],
        [
         115.604,
         32.426
        ],
        [
         115.658,
         32.429
        ],
        [
         115.705,
         32.495
        ],
        [
         115.772,
         32.505
        ],
        [
         115.861,
         32.537
        ],
        [
         115.91,
         32.567
        ],
        [
         115.846,
         32.502
        ],
        [
         115.865,
         32.459
        ],
        [
         115.913,
         32.228
        ],
        [
         115.922,
         32.05
        ],
        [
         115.909,
         31.943
        ],
        [
         115.895,
         31.865
        ],
        [
         115.915,
         31.815
        ],
        [
         115.852,
         31.787
        ],
        [
         115.808,
         31.77
        ],
        [
         115.731,
         31.767
        ],
        [
         115.554,
         31.695
        ],
        [
         115.495,
         31.673
        ],
        [
         115.485,
         31.609
        ],
        [
         115.416,
         31.526
        ],
        [
         115.39,
         31.45
        ],
        [
         115.393,
         31.39
        ],
        [
         115.407,
         31.338
        ],
        [
         115.473,
         31.265
        ],
        [
         115.54,
         31.232
        ],
        [
         115.586,
         31.144
        ],
        [
         115.655,
         31.211
        ],
        [
         115.779,
         31.112
        ],
        [
         115.838,
         31.127
        ],
        [
         115.888,
         31.109
        ],
        [
         115.939,
         31.047
        ],
        [
         116.015,
         31.012
        ],
        [
         116.072,
         30.957
        ],
        [
         115.976,
         30.932
        ],
        [
         115.865,
         30.864
        ],
        [
         115.864,
         30.816
        ],
        [
         115.783,
         30.752
        ],
        [
         115.814,
         30.637
        ],
        [
         115.849,
         30.602
        ],
        [
         115.888,
         30.543
        ],
        [
         115.895,
         30.453
        ],
        [
         115.891,
         30.385
        ],
        [
         119.335,
         30.448
        ],
        [
         119.326,
         30.533
        ],
        [
         119.237,
         30.547
        ],
        [
         119.239,
         30.609
        ],
        [
         119.343,
         30.664
        ],
        [
         119.408,
         30.645
        ],
        [
         119.483,
         30.704
        ],
        [
         119.527,
         30.779
        ],
        [
         119.576,
         30.83
        ],
        [
         119.564,
         30.919
        ],
        [
         119.58,
         30.967
        ],
        [
         119.629,
         31.086
        ],
        [
         119.624,
         31.13
        ],
        [
         119.533,
         31.159
        ],
        [
         119.439,
         31.177
        ],
        [
         119.36,
         31.213
        ],
        [
         119.35,
         31.301
        ],
        [
         119.294,
         31.263
        ],
        [
         119.198,
         31.27
        ],
        [
         119.158,
         31.295
        ],
        [
         119.105,
         31.235
        ],
        [
         118.985,
         31.237
        ],
        [
         118.795,
         31.229
        ],
        [
         118.726,
         31.282
        ],
        [
         118.746,
         31.373
        ],
        [
         118.824,
         31.376
        ],
        [
         118.884,
         31.5
        ],
        [
         118.866,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.803,
         31.619
        ],
        [
         118.748,
         31.676
        ],
        [
         118.643,
         31.65
        ],
        [
         118.698,
         31.71
        ],
        [
         118.641,
         31.759
        ],
        [
         118.558,
         31.73
        ],
        [
         118.534,
         31.767
        ],
        [
         118.505,
         31.842
        ],
        [
         118.472,
         31.88
        ],
        [
         118.39,
         31.985
        ],
        [
         118.434,
         32.087
        ],
        [
         118.495,
         32.165
        ],
        [
         118.644,
         32.21
        ],
        [
         118.657,
         32.301
        ],
        [
         118.685,
         32.404
        ],
        [
         118.629,
         32.468
        ],
        [
         118.609,
         32.537
        ],
        [
         118.569,
         32.586
        ],
        [
         118.633,
         32.578
        ],
        [
         118.689,
         32.588
        ],
        [
         118.719,
         32.614
        ],
        [
         118.757,
         32.604
        ],
        [
         118.821,
         32.604
        ],
        [
         118.908,
         32.592
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.976,
         32.505
        ],
        [
         119.085,
         32.453
        ],
        [
         119.168,
         32.536
        ],
        [
         119.22,
         32.577
        ],
        [
         119.209,
         32.641
        ],
        [
         119.185,
         32.826
        ],
        [
         119.055,
         32.875
        ],
        [
         118.993,
         32.958
        ],
        [
         118.893,
         32.941
        ],
        [
         118.896,
         32.958
        ],
        [
         118.847,
         32.922
        ],
        [
         118.81,
         32.854
        ],
        [
         118.743,
         32.853
        ],
        [
         118.757,
         32.737
        ],
        [
         118.643,
         32.745
        ],
        [
         118.56,
         32.73
        ],
        [
         118.451,
         32.744
        ],
        [
         118.375,
         32.719
        ],
        [
         118.334,
         32.762
        ],
        [
         118.301,
         32.846
        ],
        [
         118.233,
         32.914
        ],
        [
         118.292,
         32.946
        ],
        [
         118.269,
         32.969
        ],
        [
         118.244,
         33.028
        ],
        [
         118.217,
         33.192
        ],
        [
         118.149,
         33.169
        ],
        [
         118.037,
         33.152
        ],
        [
         117.977,
         33.226
        ],
        [
         117.939,
         33.262
        ],
        [
         117.993,
         33.333
        ],
        [
         118.017,
         33.403
        ],
        [
         118.051,
         33.492
        ],
        [
         118.118,
         33.595
        ],
        [
         118.168,
         33.663
        ],
        [
         118.118,
         33.766
        ],
        [
         118.02,
         33.739
        ],
        [
         117.902,
         33.72
        ],
        [
         117.791,
         33.734
        ],
        [
         117.725,
         33.75
        ],
        [
         117.759,
         33.874
        ],
        [
         117.715,
         33.879
        ],
        [
         117.671,
         33.992
        ],
        [
         117.613,
         34.0
        ],
        [
         117.543,
         34.039
        ],
        [
         117.435,
         34.028
        ],
        [
         117.357,
         34.088
        ],
        [
         117.277,
         34.079
        ],
        [
         117.192,
         34.069
        ],
        [
         117.124,
         34.128
        ],
        [
         117.025,
         34.167
        ],
        [
         116.969,
         34.284
        ],
        [
         116.961,
         34.364
        ],
        [
         116.909,
         34.408
        ],
        [
         116.783,
         34.43
        ],
        [
         116.723,
         34.472
        ],
        [
         116.592,
         34.494
        ],
        [
         116.491,
         34.574
        ],
        [
         116.433,
         34.63
        ],
        [
         116.374,
         34.64
        ],
        [
         116.325,
         34.601
        ],
        [
         116.248,
         34.552
        ],
        [
         116.191,
         34.536
        ],
        [
         116.178,
         34.496
        ],
        [
         116.179,
         34.43
        ],
        [
         116.213,
         34.382
        ],
        [
         116.302,
         34.342
        ],
        [
         116.372,
         34.266
        ],
        [
         116.409,
         34.274
        ],
        [
         116.516,
         34.296
        ],
        [
         116.582,
         34.266
        ],
        [
         116.543,
         34.204
        ],
        [
         116.536,
         34.151
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.866,
         31.519
        ]
       ]
      ],
      [
       [
        [
         115.509,
         32.469
        ],
        [
         115.511,
         32.468
        ],
        [
         115.511,
         32.469
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
         116.374,
         34.64
        ],
        [
         116.364,
         34.715
        ],
        [
         116.403,
         34.756
        ],
        [
         116.445,
         34.896
        ],
        [
         116.614,
         34.923
        ],
        [
         116.678,
         34.939
        ],
        [
         116.789,
         34.975
        ],
        [
         116.822,
         34.93
        ],
        [
         116.922,
         34.895
        ],
        [
         116.966,
         34.845
        ],
        [
         116.951,
         34.811
        ],
        [
         117.022,
         34.759
        ],
        [
         117.062,
         34.676
        ],
        [
         117.104,
         34.649
        ],
        [
         117.139,
         34.527
        ],
        [
         117.248,
         34.451
        ],
        [
         117.273,
         34.5
        ],
        [
         117.304,
         34.542
        ],
        [
         117.312,
         34.562
        ],
        [
         117.322,
         34.567
        ],
        [
         117.325,
         34.573
        ],
        [
         117.371,
         34.585
        ],
        [
         117.403,
         34.551
        ],
        [
         117.538,
         34.467
        ],
        [
         117.61,
         34.491
        ],
        [
         117.684,
         34.547
        ],
        [
         117.791,
         34.583
        ],
        [
         117.903,
         34.644
        ],
        [
         117.952,
         34.678
        ],
        [
         118.084,
         34.656
        ],
        [
         118.079,
         34.57
        ],
        [
         118.165,
         34.505
        ],
        [
         118.178,
         34.453
        ],
        [
         118.218,
         34.379
        ],
        [
         118.277,
         34.405
        ],
        [
         118.38,
         34.415
        ],
        [
         118.416,
         34.474
        ],
        [
         118.425,
         34.595
        ],
        [
         118.474,
         34.623
        ],
        [
         118.546,
         34.706
        ],
        [
         118.608,
         34.694
        ],
        [
         118.69,
         34.678
        ],
        [
         118.784,
         34.723
        ],
        [
         118.719,
         34.745
        ],
        [
         118.772,
         34.794
        ],
        [
         118.805,
         34.873
        ],
        [
         118.863,
         35.026
        ],
        [
         118.943,
         35.041
        ],
        [
         119.115,
         35.055
        ],
        [
         119.217,
         35.107
        ],
        [
         119.287,
         35.115
        ],
        [
         119.354,
         35.08
        ],
        [
         119.428,
         35.121
        ],
        [
         119.411,
         35.232
        ],
        [
         119.493,
         35.319
        ],
        [
         119.544,
         35.348
        ],
        [
         119.58,
         35.407
        ],
        [
         119.663,
         35.563
        ],
        [
         119.718,
         35.615
        ],
        [
         119.772,
         35.579
        ],
        [
         119.793,
         35.615
        ],
        [
         119.83,
         35.62
        ],
        [
         119.925,
         35.637
        ],
        [
         119.948,
         35.726
        ],
        [
         120.014,
         35.714
        ],
        [
         115.514,
         35.726
        ],
        [
         115.383,
         35.569
        ],
        [
         115.356,
         35.49
        ],
        [
         115.237,
         35.423
        ],
        [
         115.126,
         35.418
        ],
        [
         115.092,
         35.416
        ],
        [
         115.043,
         35.377
        ],
        [
         114.929,
         35.245
        ],
        [
         114.861,
         35.182
        ],
        [
         114.883,
         35.099
        ],
        [
         114.819,
         35.052
        ],
        [
         114.824,
         35.012
        ],
        [
         114.924,
         34.969
        ],
        [
         115.008,
         34.988
        ],
        [
         115.075,
         35.001
        ],
        [
         115.157,
         34.958
        ],
        [
         115.205,
         34.914
        ],
        [
         115.239,
         34.878
        ],
        [
         115.317,
         34.859
        ],
        [
         115.449,
         34.744
        ],
        [
         115.461,
         34.637
        ],
        [
         115.553,
         34.569
        ],
        [
         115.686,
         34.556
        ],
        [
         115.788,
         34.581
        ],
        [
         115.838,
         34.568
        ],
        [
         115.991,
         34.615
        ],
        [
         116.101,
         34.606
        ],
        [
         116.157,
         34.554
        ],
        [
         116.248,
         34.552
        ],
        [
         116.325,
         34.601
        ],
        [
         116.374,
         34.64
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
         112.717,
         32.358
        ],
        [
         112.776,
         32.359
        ],
        [
         112.889,
         32.377
        ],
        [
         112.992,
         32.378
        ],
        [
         113.026,
         32.425
        ],
        [
         113.108,
         32.399
        ],
        [
         113.156,
         32.381
        ],
        [
         113.212,
         32.432
        ],
        [
         113.334,
         32.336
        ],
        [
         113.354,
         32.295
        ],
        [
         113.429,
         32.271
        ],
        [
         113.625,
         32.361
        ],
        [
         113.7,
         32.421
        ],
        [
         113.768,
         32.37
        ],
        [
         113.769,
         32.301
        ],
        [
         113.758,
         32.277
        ],
        [
         113.739,
         32.256
        ],
        [
         113.782,
         32.185
        ],
        [
         113.723,
         32.124
        ],
        [
         113.792,
         32.036
        ],
        [
         113.817,
         31.964
        ],
        [
         113.832,
         31.919
        ],
        [
         113.854,
         31.843
        ],
        [
         113.915,
         31.877
        ],
        [
         113.952,
         31.794
        ],
        [
         114.018,
         31.771
        ],
        [
         114.122,
         31.809
        ],
        [
         114.192,
         31.852
        ],
        [
         114.293,
         31.753
        ],
        [
         114.403,
         31.747
        ],
        [
         114.531,
         31.743
        ],
        [
         114.586,
         31.762
        ],
        [
         114.548,
         31.624
        ],
        [
         114.573,
         31.554
        ],
        [
         114.642,
         31.582
        ],
        [
         114.779,
         31.521
        ],
        [
         114.83,
         31.459
        ],
        [
         114.884,
         31.469
        ],
        [
         114.995,
         31.471
        ],
        [
         115.096,
         31.508
        ],
        [
         115.107,
         31.568
        ],
        [
         115.164,
         31.605
        ],
        [
         115.236,
         31.555
        ],
        [
         115.211,
         31.442
        ],
        [
         115.251,
         31.392
        ],
        [
         115.339,
         31.404
        ],
        [
         115.39,
         31.45
        ],
        [
         115.416,
         31.526
        ],
        [
         115.485,
         31.609
        ],
        [
         115.495,
         31.673
        ],
        [
         115.554,
         31.695
        ],
        [
         115.731,
         31.767
        ],
        [
         115.808,
         31.77
        ],
        [
         115.852,
         31.787
        ],
        [
         115.915,
         31.815
        ],
        [
         115.895,
         31.865
        ],
        [
         115.909,
         31.943
        ],
        [
         115.922,
         32.05
        ],
        [
         115.913,
         32.228
        ],
        [
         115.865,
         32.459
        ],
        [
         115.846,
         32.502
        ],
        [
         115.91,
         32.567
        ],
        [
         115.861,
         32.537
        ],
        [
         115.772,
         32.505
        ],
        [
         115.705,
         32.495
        ],
        [
         115.658,
         32.429
        ],
        [
         115.604,
         32.426
        ],
        [
         115.523,
         32.442
        ],
        [
         115.509,
         32.469
        ],
        [
         115.409,
         32.549
        ],
        [
         115.305,
         32.553
        ],
        [
         115.267,
         32.578
        ],
        [
         115.201,
         32.592
        ],
        [
         115.179,
         32.726
        ],
        [
         115.211,
         32.786
        ],
        [
         115.197,
         32.856
        ],
        [
         115.139,
         32.898
        ],
        [
         115.035,
         32.933
        ],
        [
         114.943,
         32.935
        ],
        [
         114.883,
         32.99
        ],
        [
         114.926,
         33.017
        ],
        [
         114.897,
         33.087
        ],
        [
         114.933,
         33.154
        ],
        [
         114.991,
         33.102
        ],
        [
         115.168,
         33.089
        ],
        [
         115.245,
         33.136
        ],
        [
         115.304,
         33.15
        ],
        [
         115.34,
         33.261
        ],
        [
         115.362,
         33.298
        ],
        [
         115.342,
         33.371
        ],
        [
         115.329,
         33.403
        ],
        [
         115.325,
         33.457
        ],
        [
         115.346,
         33.503
        ],
        [
         115.395,
         33.506
        ],
        [
         115.464,
         33.567
        ],
        [
         115.565,
         33.576
        ],
        [
         115.601,
         33.659
        ],
        [
         115.563,
         33.773
        ],
        [
         115.614,
         33.776
        ],
        [
         115.548,
         33.875
        ],
        [
         115.579,
         33.974
        ],
        [
         115.642,
         34.032
        ],
        [
         115.706,
         34.06
        ],
        [
         115.769,
         34.062
        ],
        [
         115.846,
         34.029
        ],
        [
         115.877,
         34.003
        ],
        [
         115.904,
         34.01
        ],
        [
         116.0,
         33.965
        ],
        [
         116.059,
         33.861
        ],
        [
         116.074,
         33.781
        ],
        [
         116.133,
         33.752
        ],
        [
         116.23,
         33.735
        ],
        [
         116.317,
         33.771
        ],
        [
         116.408,
         33.806
        ],
        [
         116.438,
         33.846
        ],
        [
         116.558,
         33.881
        ],
        [
         116.631,
         33.888
        ],
        [
         116.642,
         33.978
        ],
        [
         116.6,
         34.014
        ],
        [
         116.576,
         34.069
        ],
        [
         116.536,
         34.151
        ],
        [
         116.543,
         34.204
        ],
        [
         116.582,
         34.266
        ],
        [
         116.516,
         34.296
        ],
        [
         116.409,
         34.274
        ],
        [
         116.372,
         34.266
        ],
        [
         116.302,
         34.342
        ],
        [
         116.213,
         34.382
        ],
        [
         116.179,
         34.43
        ],
        [
         116.178,
         34.496
        ],
        [
         116.191,
         34.536
        ],
        [
         116.157,
         34.554
        ],
        [
         116.101,
         34.606
        ],
        [
         115.991,
         34.615
        ],
        [
         115.838,
         34.568
        ],
        [
         115.788,
         34.581
        ],
        [
         115.686,
         34.556
        ],
        [
         115.553,
         34.569
        ],
        [
         115.461,
         34.637
        ],
        [
         115.449,
         34.744
        ],
        [
         115.317,
         34.859
        ],
        [
         115.239,
         34.878
        ],
        [
         115.205,
         34.914
        ],
        [
         115.157,
         34.958
        ],
        [
         115.075,
         35.001
        ],
        [
         115.008,
         34.988
        ],
        [
         114.924,
         34.969
        ],
        [
         114.824,
         35.012
        ],
        [
         114.819,
         35.052
        ],
        [
         114.883,
         35.099
        ],
        [
         114.861,
         35.182
        ],
        [
         114.929,
         35.245
        ],
        [
         115.043,
         35.377
        ],
        [
         115.092,
         35.416
        ],
        [
         115.126,
         35.418
        ],
        [
         115.237,
         35.423
        ],
        [
         115.356,
         35.49
        ],
        [
         115.383,
         35.569
        ],
        [
         115.514,
         35.726
        ],
        [
         113.593,
         35.692
        ],
        [
         113.625,
         35.633
        ],
        [
         113.548,
         35.657
        ],
        [
         113.514,
         35.574
        ],
        [
         113.439,
         35.507
        ],
        [
         113.348,
         35.468
        ],
        [
         113.304,
         35.427
        ],
        [
         113.19,
         35.449
        ],
        [
         113.165,
         35.413
        ],
        [
         113.126,
         35.332
        ],
        [
         112.996,
         35.362
        ],
        [
         112.992,
         35.296
        ],
        [
         112.934,
         35.263
        ],
        [
         112.822,
         35.258
        ],
        [
         112.72,
         35.206
        ],
        [
         112.637,
         35.226
        ],
        [
         112.391,
         35.239
        ],
        [
         112.288,
         35.22
        ],
        [
         112.242,
         35.235
        ],
        [
         112.138,
         35.271
        ],
        [
         112.079,
         35.219
        ],
        [
         112.066,
         35.153
        ],
        [
         112.062,
         35.056
        ],
        [
         112.019,
         35.069
        ],
        [
         111.933,
         35.083
        ],
        [
         111.807,
         35.033
        ],
        [
         111.664,
         34.984
        ],
        [
         111.647,
         34.939
        ],
        [
         111.592,
         34.881
        ],
        [
         111.544,
         34.853
        ],
        [
         111.439,
         34.838
        ],
        [
         111.346,
         34.832
        ],
        [
         111.255,
         34.82
        ],
        [
         111.149,
         34.808
        ],
        [
         111.035,
         34.741
        ],
        [
         110.92,
         34.73
        ],
        [
         110.884,
         34.644
        ],
        [
         110.792,
         34.65
        ],
        [
         110.71,
         34.605
        ],
        [
         110.533,
         34.583
        ],
        [
         110.425,
         34.588
        ],
        [
         110.367,
         34.567
        ],
        [
         110.372,
         34.544
        ],
        [
         110.403,
         34.433
        ],
        [
         110.473,
         34.393
        ],
        [
         110.452,
         34.293
        ],
        [
         110.44,
         34.243
        ],
        [
         110.552,
         34.213
        ],
        [
         110.622,
         34.177
        ],
        [
         110.614,
         34.113
        ],
        [
         110.587,
         34.023
        ],
        [
         110.671,
         33.966
        ],
        [
         110.627,
         33.925
        ],
        [
         110.587,
         33.888
        ],
        [
         110.663,
         33.853
        ],
        [
         110.741,
         33.799
        ],
        [
         110.817,
         33.751
        ],
        [
         110.824,
         33.686
        ],
        [
         110.967,
         33.609
        ],
        [
         111.003,
         33.536
        ],
        [
         111.027,
         33.468
        ],
        [
         111.026,
         33.375
        ],
        [
         110.985,
         33.255
        ],
        [
         111.046,
         33.17
        ],
        [
         111.128,
         33.155
        ],
        [
         111.179,
         33.115
        ],
        [
         111.153,
         33.04
        ],
        [
         111.259,
         33.006
        ],
        [
         111.243,
         32.931
        ],
        [
         111.276,
         32.903
        ],
        [
         111.38,
         32.829
        ],
        [
         111.476,
         32.76
        ],
        [
         111.513,
         32.674
        ],
        [
         111.578,
         32.593
        ],
        [
         111.646,
         32.606
        ],
        [
         111.809,
         32.537
        ],
        [
         111.89,
         32.503
        ],
        [
         111.976,
         32.472
        ],
        [
         112.064,
         32.474
        ],
        [
         112.156,
         32.377
        ],
        [
         112.173,
         32.385
        ],
        [
         112.328,
         32.322
        ],
        [
         112.391,
         32.371
        ],
        [
         112.477,
         32.381
        ],
        [
         112.546,
         32.404
        ],
        [
         112.612,
         32.387
        ],
        [
         112.717,
         32.358
        ]
       ]
      ],
      [
       [
        [
         113.768,
         32.284
        ],
        [
         113.749,
         32.273
        ],
        [
         113.768,
         32.284
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         111.046,
         33.17
        ],
        [
         111.036,
         33.188
        ],
        [
         110.985,
         33.255
        ],
        [
         110.922,
         33.204
        ],
        [
         110.829,
         33.201
        ],
        [
         110.753,
         33.15
        ],
        [
         110.651,
         33.157
        ],
        [
         110.594,
         33.168
        ],
        [
         110.541,
         33.255
        ],
        [
         110.398,
         33.177
        ],
        [
         110.372,
         33.186
        ],
        [
         110.286,
         33.171
        ],
        [
         110.165,
         33.209
        ],
        [
         109.999,
         33.212
        ],
        [
         109.917,
         33.23
        ],
        [
         109.813,
         33.236
        ],
        [
         109.693,
         33.254
        ],
        [
         109.62,
         33.275
        ],
        [
         109.514,
         33.238
        ],
        [
         109.439,
         33.152
        ],
        [
         109.522,
         33.139
        ],
        [
         109.688,
         33.117
        ],
        [
         109.795,
         33.067
        ],
        [
         109.765,
         32.909
        ],
        [
         109.848,
         32.893
        ],
        [
         109.907,
         32.904
        ],
        [
         109.989,
         32.886
        ],
        [
         110.105,
         32.833
        ],
        [
         110.127,
         32.778
        ],
        [
         110.157,
         32.683
        ],
        [
         110.154,
         32.593
        ],
        [
         110.09,
         32.617
        ],
        [
         110.018,
         32.547
        ],
        [
         109.911,
         32.593
        ],
        [
         109.746,
         32.595
        ],
        [
         109.632,
         32.6
        ],
        [
         109.637,
         32.541
        ],
        [
         109.527,
         32.433
        ],
        [
         109.503,
         32.389
        ],
        [
         109.495,
         32.3
        ],
        [
         109.55,
         32.225
        ],
        [
         109.604,
         32.199
        ],
        [
         109.622,
         32.107
        ],
        [
         109.591,
         32.013
        ],
        [
         109.62,
         31.928
        ],
        [
         109.604,
         31.886
        ],
        [
         109.634,
         31.804
        ],
        [
         109.586,
         31.727
        ],
        [
         109.683,
         31.72
        ],
        [
         109.737,
         31.629
        ],
        [
         109.745,
         31.598
        ],
        [
         109.838,
         31.555
        ],
        [
         109.97,
         31.509
        ],
        [
         109.988,
         31.475
        ],
        [
         110.054,
         31.411
        ],
        [
         110.162,
         31.314
        ],
        [
         110.18,
         31.18
        ],
        [
         110.18,
         31.122
        ],
        [
         110.12,
         31.089
        ],
        [
         110.14,
         31.031
        ],
        [
         110.173,
         30.979
        ],
        [
         110.152,
         30.912
        ],
        [
         110.048,
         30.801
        ],
        [
         110.008,
         30.883
        ],
        [
         109.895,
         30.9
        ],
        [
         109.781,
         30.848
        ],
        [
         109.657,
         30.761
        ],
        [
         109.625,
         30.703
        ],
        [
         109.574,
         30.647
        ],
        [
         109.535,
         30.665
        ],
        [
         109.418,
         30.56
        ],
        [
         109.337,
         30.522
        ],
        [
         109.314,
         30.6
        ],
        [
         109.245,
         30.581
        ],
        [
         109.192,
         30.546
        ],
        [
         109.104,
         30.566
        ],
        [
         109.106,
         30.611
        ],
        [
         109.071,
         30.64
        ],
        [
         109.006,
         30.627
        ],
        [
         108.894,
         30.565
        ],
        [
         108.809,
         30.491
        ],
        [
         108.744,
         30.495
        ],
        [
         108.689,
         30.588
        ],
        [
         108.65,
         30.539
        ],
        [
         108.556,
         30.488
        ],
        [
         108.473,
         30.487
        ],
        [
         108.411,
         30.439
        ],
        [
         108.408,
         30.385
        ],
        [
         115.921,
         30.416
        ],
        [
         115.91,
         30.519
        ],
        [
         115.877,
         30.582
        ],
        [
         115.819,
         30.598
        ],
        [
         115.763,
         30.685
        ],
        [
         115.851,
         30.757
        ],
        [
         115.849,
         30.828
        ],
        [
         115.933,
         30.89
        ],
        [
         116.04,
         30.958
        ],
        [
         116.059,
         31.013
        ],
        [
         116.006,
         31.035
        ],
        [
         115.94,
         31.072
        ],
        [
         115.867,
         31.148
        ],
        [
         115.798,
         31.128
        ],
        [
         115.701,
         31.201
        ],
        [
         115.604,
         31.174
        ],
        [
         115.54,
         31.195
        ],
        [
         115.508,
         31.268
        ],
        [
         115.444,
         31.344
        ],
        [
         115.372,
         31.349
        ],
        [
         115.374,
         31.406
        ],
        [
         115.301,
         31.384
        ],
        [
         115.253,
         31.422
        ],
        [
         115.218,
         31.515
        ],
        [
         115.213,
         31.555
        ],
        [
         115.125,
         31.599
        ],
        [
         115.115,
         31.53
        ],
        [
         115.023,
         31.528
        ],
        [
         114.962,
         31.495
        ],
        [
         114.87,
         31.479
        ],
        [
         114.789,
         31.48
        ],
        [
         114.696,
         31.526
        ],
        [
         114.617,
         31.585
        ],
        [
         114.561,
         31.561
        ],
        [
         114.571,
         31.661
        ],
        [
         114.55,
         31.767
        ],
        [
         114.444,
         31.728
        ],
        [
         114.35,
         31.756
        ],
        [
         114.236,
         31.833
        ],
        [
         114.134,
         31.843
        ],
        [
         114.087,
         31.782
        ],
        [
         113.989,
         31.75
        ],
        [
         113.958,
         31.853
        ],
        [
         113.894,
         31.847
        ],
        [
         113.831,
         31.879
        ],
        [
         113.806,
         31.929
        ],
        [
         113.758,
         31.99
        ],
        [
         113.729,
         32.083
        ],
        [
         113.75,
         32.116
        ],
        [
         113.753,
         32.216
        ],
        [
         113.749,
         32.273
        ],
        [
         113.754,
         32.328
        ],
        [
         113.736,
         32.411
        ],
        [
         113.651,
         32.413
        ],
        [
         113.512,
         32.317
        ],
        [
         113.376,
         32.298
        ],
        [
         113.318,
         32.327
        ],
        [
         113.237,
         32.407
        ],
        [
         113.159,
         32.411
        ],
        [
         113.119,
         32.376
        ],
        [
         113.079,
         32.395
        ],
        [
         113.001,
         32.417
        ],
        [
         112.912,
         32.391
        ],
        [
         112.861,
         32.396
        ],
        [
         112.736,
         32.356
        ],
        [
         112.724,
         32.359
        ],
        [
         112.645,
         32.368
        ],
        [
         112.589,
         32.381
        ],
        [
         112.531,
         32.377
        ],
        [
         112.449,
         32.343
        ],
        [
         112.36,
         32.366
        ],
        [
         112.206,
         32.393
        ],
        [
         112.15,
         32.412
        ],
        [
         112.081,
         32.426
        ],
        [
         112.015,
         32.45
        ],
        [
         111.949,
         32.517
        ],
        [
         111.858,
         32.529
        ],
        [
         111.713,
         32.606
        ],
        [
         111.641,
         32.635
        ],
        [
         111.53,
         32.628
        ],
        [
         111.458,
         32.726
        ],
        [
         111.413,
         32.757
        ],
        [
         111.293,
         32.859
        ],
        [
         111.255,
         32.884
        ],
        [
         111.274,
         32.972
        ],
        [
         111.222,
         33.043
        ],
        [
         111.193,
         33.072
        ],
        [
         111.146,
         33.124
        ],
        [
         111.089,
         33.182
        ]
       ]
      ],
      [
       [
        [
         109.106,
         30.571
        ],
        [
         109.099,
         30.579
        ]
       ]
      ],
      [
       [
        [
         111.047,
         33.203
        ],
        [
         111.034,
         33.178
        ],
        [
         111.047,
         33.203
        ]
       ]
      ],
      [
       [
        [
         112.717,
         32.358
        ],
        [
         112.734,
         32.357
        ],
        [
         112.717,
         32.358
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.428,
         30.385
        ],
        [
         108.43,
         30.416
        ],
        [
         108.427,
         30.492
        ],
        [
         108.513,
         30.502
        ],
        [
         108.568,
         30.469
        ],
        [
         108.643,
         30.579
        ],
        [
         108.699,
         30.545
        ],
        [
         108.79,
         30.513
        ],
        [
         108.839,
         30.503
        ],
        [
         108.972,
         30.628
        ],
        [
         109.043,
         30.656
        ],
        [
         109.112,
         30.646
        ],
        [
         109.105,
         30.586
        ],
        [
         109.101,
         30.579
        ],
        [
         109.104,
         30.566
        ],
        [
         109.192,
         30.546
        ],
        [
         109.245,
         30.581
        ],
        [
         109.314,
         30.6
        ],
        [
         109.337,
         30.522
        ],
        [
         109.418,
         30.56
        ],
        [
         109.535,
         30.665
        ],
        [
         109.574,
         30.647
        ],
        [
         109.625,
         30.703
        ],
        [
         109.657,
         30.761
        ],
        [
         109.781,
         30.848
        ],
        [
         109.895,
         30.9
        ],
        [
         110.008,
         30.883
        ],
        [
         110.048,
         30.801
        ],
        [
         110.152,
         30.912
        ],
        [
         110.173,
         30.979
        ],
        [
         110.14,
         31.031
        ],
        [
         110.12,
         31.089
        ],
        [
         110.18,
         31.122
        ],
        [
         110.18,
         31.18
        ],
        [
         110.162,
         31.314
        ],
        [
         110.054,
         31.411
        ],
        [
         109.988,
         31.475
        ],
        [
         109.97,
         31.509
        ],
        [
         109.838,
         31.555
        ],
        [
         109.745,
         31.598
        ],
        [
         109.737,
         31.629
        ],
        [
         109.683,
         31.72
        ],
        [
         109.586,
         31.727
        ],
        [
         109.503,
         31.716
        ],
        [
         109.381,
         31.705
        ],
        [
         109.283,
         31.743
        ],
        [
         109.28,
         31.776
        ],
        [
         109.195,
         31.818
        ],
        [
         109.123,
         31.893
        ],
        [
         108.987,
         31.98
        ],
        [
         108.838,
         32.039
        ],
        [
         108.751,
         32.076
        ],
        [
         108.677,
         32.103
        ],
        [
         108.544,
         32.178
        ],
        [
         108.48,
         32.183
        ],
        [
         108.37,
         32.172
        ],
        [
         108.38,
         32.154
        ],
        [
         108.379,
         32.154
        ],
        [
         108.453,
         32.09
        ],
        [
         108.373,
         32.077
        ],
        [
         108.362,
         32.036
        ],
        [
         108.37,
         31.989
        ],
        [
         108.307,
         31.997
        ],
        [
         108.344,
         31.861
        ],
        [
         108.391,
         31.83
        ],
        [
         108.455,
         31.814
        ],
        [
         108.535,
         31.758
        ],
        [
         108.515,
         31.694
        ],
        [
         108.519,
         31.666
        ],
        [
         108.443,
         31.634
        ],
        [
         108.386,
         31.544
        ],
        [
         108.344,
         31.513
        ],
        [
         108.234,
         31.507
        ],
        [
         108.193,
         31.468
        ],
        [
         108.216,
         31.41
        ],
        [
         108.186,
         31.337
        ],
        [
         108.039,
         31.253
        ],
        [
         108.076,
         31.232
        ],
        [
         108.026,
         31.116
        ],
        [
         108.027,
         31.062
        ],
        [
         108.004,
         31.026
        ],
        [
         107.943,
         30.989
        ],
        [
         107.995,
         30.909
        ],
        [
         107.851,
         30.793
        ],
        [
         107.764,
         30.817
        ],
        [
         107.74,
         30.884
        ],
        [
         107.645,
         30.821
        ],
        [
         107.516,
         30.855
        ],
        [
         107.499,
         30.809
        ],
        [
         107.454,
         30.772
        ],
        [
         107.428,
         30.737
        ],
        [
         107.478,
         30.665
        ],
        [
         107.486,
         30.598
        ],
        [
         107.428,
         30.547
        ],
        [
         107.428,
         30.528
        ]
       ]
      ],
      [
       [
        [
         109.105,
         30.586
        ],
        [
         109.093,
         30.579
        ],
        [
         109.101,
         30.579
        ],
        [
         109.105,
         30.586
        ]
       ]
      ],
      [
       [
        [
         109.099,
         30.579
        ],
        [
         109.104,
         30.566
        ],
        [
         109.099,
         30.579
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
         107.428,
         30.528
        ],
        [
         107.428,
         30.547
        ],
        [
         107.486,
         30.598
        ],
        [
         107.478,
         30.665
        ],
        [
         107.428,
         30.737
        ],
        [
         107.454,
         30.772
        ],
        [
         107.499,
         30.809
        ],
        [
         107.516,
         30.855
        ],
        [
         107.645,
         30.821
        ],
        [
         107.74,
         30.884
        ],
        [
         107.764,
         30.817
        ],
        [
         107.851,
         30.793
        ],
        [
         107.995,
         30.909
        ],
        [
         107.943,
         30.989
        ],
        [
         108.004,
         31.026
        ],
        [
         108.027,
         31.062
        ],
        [
         108.026,
         31.116
        ],
        [
         108.076,
         31.232
        ],
        [
         108.039,
         31.253
        ],
        [
         108.186,
         31.337
        ],
        [
         108.216,
         31.41
        ],
        [
         108.193,
         31.468
        ],
        [
         108.234,
         31.507
        ],
        [
         108.344,
         31.513
        ],
        [
         108.386,
         31.544
        ],
        [
         108.443,
         31.634
        ],
        [
         108.519,
         31.666
        ],
        [
         108.515,
         31.694
        ],
        [
         108.535,
         31.758
        ],
        [
         108.455,
         31.814
        ],
        [
         108.391,
         31.83
        ],
        [
         108.344,
         31.861
        ],
        [
         108.307,
         31.997
        ],
        [
         108.37,
         31.989
        ],
        [
         108.362,
         32.036
        ],
        [
         108.373,
         32.077
        ],
        [
         108.453,
         32.09
        ],
        [
         108.379,
         32.154
        ],
        [
         108.38,
         32.154
        ],
        [
         108.37,
         32.172
        ],
        [
         108.48,
         32.183
        ],
        [
         108.507,
         32.246
        ],
        [
         108.414,
         32.252
        ],
        [
         108.311,
         32.232
        ],
        [
         108.18,
         32.222
        ],
        [
         108.143,
         32.219
        ],
        [
         108.018,
         32.212
        ],
        [
         107.98,
         32.146
        ],
        [
         107.89,
         32.214
        ],
        [
         107.812,
         32.248
        ],
        [
         107.708,
         32.332
        ],
        [
         107.648,
         32.414
        ],
        [
         107.527,
         32.382
        ],
        [
         107.457,
         32.418
        ],
        [
         107.439,
         32.466
        ],
        [
         107.428,
         32.532
        ]
       ]
      ]
     ]
    },
    "n": "四川省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         110.379,
         34.601
        ],
        [
         110.269,
         34.63
        ],
        [
         110.243,
         34.726
        ],
        [
         110.231,
         34.881
        ],
        [
         110.321,
         35.005
        ],
        [
         110.364,
         35.198
        ],
        [
         110.375,
         35.252
        ],
        [
         110.478,
         35.414
        ],
        [
         110.568,
         35.54
        ],
        [
         110.61,
         35.632
        ],
        [
         110.576,
         35.726
        ],
        [
         108.518,
         35.7
        ],
        [
         108.618,
         35.557
        ],
        [
         108.606,
         35.503
        ],
        [
         108.61,
         35.355
        ],
        [
         108.583,
         35.295
        ],
        [
         108.489,
         35.275
        ],
        [
         108.345,
         35.301
        ],
        [
         108.239,
         35.256
        ],
        [
         108.175,
         35.305
        ],
        [
         108.049,
         35.254
        ],
        [
         107.96,
         35.263
        ],
        [
         107.842,
         35.277
        ],
        [
         107.737,
         35.267
        ],
        [
         107.652,
         35.245
        ],
        [
         107.716,
         35.168
        ],
        [
         107.77,
         35.064
        ],
        [
         107.773,
         35.061
        ],
        [
         107.814,
         35.025
        ],
        [
         107.863,
         34.999
        ],
        [
         107.742,
         34.954
        ],
        [
         107.639,
         34.935
        ],
        [
         107.564,
         34.969
        ],
        [
         107.455,
         34.917
        ],
        [
         107.428,
         32.532
        ],
        [
         107.439,
         32.466
        ],
        [
         107.457,
         32.418
        ],
        [
         107.527,
         32.382
        ],
        [
         107.648,
         32.414
        ],
        [
         107.708,
         32.332
        ],
        [
         107.812,
         32.248
        ],
        [
         107.89,
         32.214
        ],
        [
         107.98,
         32.146
        ],
        [
         108.018,
         32.212
        ],
        [
         108.143,
         32.219
        ],
        [
         108.18,
         32.222
        ],
        [
         108.311,
         32.232
        ],
        [
         108.414,
         32.252
        ],
        [
         108.507,
         32.246
        ],
        [
         108.544,
         32.178
        ],
        [
         108.677,
         32.103
        ],
        [
         108.751,
         32.076
        ],
        [
         108.838,
         32.039
        ],
        [
         108.987,
         31.98
        ],
        [
         109.123,
         31.893
        ],
        [
         109.195,
         31.818
        ],
        [
         109.28,
         31.776
        ],
        [
         109.283,
         31.743
        ],
        [
         109.381,
         31.705
        ],
        [
         109.503,
         31.716
        ],
        [
         109.586,
         31.727
        ],
        [
         109.634,
         31.804
        ],
        [
         109.604,
         31.886
        ],
        [
         109.62,
         31.928
        ],
        [
         109.591,
         32.013
        ],
        [
         109.622,
         32.107
        ],
        [
         109.604,
         32.199
        ],
        [
         109.55,
         32.225
        ],
        [
         109.495,
         32.3
        ],
        [
         109.503,
         32.389
        ],
        [
         109.527,
         32.433
        ],
        [
         109.637,
         32.541
        ],
        [
         109.632,
         32.6
        ],
        [
         109.746,
         32.595
        ],
        [
         109.911,
         32.593
        ],
        [
         110.018,
         32.547
        ],
        [
         110.09,
         32.617
        ],
        [
         110.154,
         32.593
        ],
        [
         110.157,
         32.683
        ],
        [
         110.127,
         32.778
        ],
        [
         110.105,
         32.833
        ],
        [
         109.989,
         32.886
        ],
        [
         109.907,
         32.904
        ],
        [
         109.848,
         32.893
        ],
        [
         109.765,
         32.909
        ],
        [
         109.795,
         33.067
        ],
        [
         109.688,
         33.117
        ],
        [
         109.522,
         33.139
        ],
        [
         109.439,
         33.152
        ],
        [
         109.514,
         33.238
        ],
        [
         109.62,
         33.275
        ],
        [
         109.693,
         33.254
        ],
        [
         109.813,
         33.236
        ],
        [
         109.917,
         33.23
        ],
        [
         109.999,
         33.212
        ],
        [
         110.165,
         33.209
        ],
        [
         110.286,
         33.171
        ],
        [
         110.372,
         33.186
        ],
        [
         110.398,
         33.177
        ],
        [
         110.541,
         33.255
        ],
        [
         110.594,
         33.168
        ],
        [
         110.651,
         33.157
        ],
        [
         110.753,
         33.15
        ],
        [
         110.829,
         33.201
        ],
        [
         110.922,
         33.204
        ],
        [
         110.985,
         33.255
        ],
        [
         111.026,
         33.375
        ],
        [
         111.027,
         33.468
        ],
        [
         111.022,
         33.476
        ],
        [
         111.003,
         33.536
        ],
        [
         110.967,
         33.609
        ],
        [
         110.824,
         33.686
        ],
        [
         110.817,
         33.751
        ],
        [
         110.741,
         33.799
        ],
        [
         110.663,
         33.853
        ],
        [
         110.587,
         33.888
        ],
        [
         110.627,
         33.925
        ],
        [
         110.671,
         33.966
        ],
        [
         110.587,
         34.023
        ],
        [
         110.614,
         34.113
        ],
        [
         110.622,
         34.177
        ],
        [
         110.552,
         34.213
        ],
        [
         110.44,
         34.243
        ],
        [
         110.452,
         34.293
        ],
        [
         110.473,
         34.393
        ],
        [
         110.403,
         34.433
        ],
        [
         110.372,
         34.544
        ],
        [
         110.367,
         34.567
        ]
       ]
      ],
      [
       [
        [
         111.027,
         33.478
        ],
        [
         111.021,
         33.471
        ],
        [
         111.027,
         33.478
        ]
       ]
      ]
     ]
    },
    "n": "陕西省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         107.428,
         35.726
        ],
        [
         107.455,
         34.917
        ],
        [
         107.564,
         34.969
        ],
        [
         107.639,
         34.935
        ],
        [
         107.742,
         34.954
        ],
        [
         107.863,
         34.999
        ],
        [
         107.814,
         35.025
        ],
        [
         107.773,
         35.061
        ],
        [
         107.77,
         35.064
        ],
        [
         107.716,
         35.168
        ],
        [
         107.652,
         35.245
        ],
        [
         107.737,
         35.267
        ],
        [
         107.842,
         35.277
        ],
        [
         107.96,
         35.263
        ],
        [
         108.049,
         35.254
        ],
        [
         108.175,
         35.305
        ],
        [
         108.239,
         35.256
        ],
        [
         108.345,
         35.301
        ],
        [
         108.489,
         35.275
        ],
        [
         108.583,
         35.295
        ],
        [
         108.61,
         35.355
        ],
        [
         108.606,
         35.503
        ],
        [
         108.618,
         35.557
        ],
        [
         108.518,
         35.7
        ],
        [
         107.428,
         35.726
        ]
       ]
      ]
     ]
    },
    "n": "甘肃省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       111.478,
       32.568
      ],
      [
       111.0,
       32.741
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       108.139,
       30.385
      ],
      [
       108.391,
       30.692
      ],
      [
       108.417,
       30.808
      ],
      [
       108.496,
       30.892
      ],
      [
       109.46,
       31.01
      ],
      [
       109.598,
       31.031
      ],
      [
       109.742,
       31.016
      ],
      [
       109.984,
       31.061
      ],
      [
       110.143,
       31.032
      ],
      [
       110.474,
       31.02
      ],
      [
       110.971,
       30.852
      ],
      [
       111.098,
       30.847
      ],
      [
       111.228,
       30.781
      ],
      [
       111.399,
       30.507
      ],
      [
       111.507,
       30.407
      ],
      [
       111.729,
       30.385
      ],
      [
       111.818,
       30.426
      ],
      [
       111.911,
       30.387
      ]
     ]
    },
    "n": "Chang Jiang"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        111.478,
        32.568
       ],
       [
        111.642,
        32.407
       ],
       [
        111.685,
        32.265
       ],
       [
        111.919,
        32.065
       ],
       [
        112.189,
        31.966
       ],
       [
        112.225,
        31.771
       ],
       [
        112.39,
        31.657
       ],
       [
        112.44,
        31.496
       ],
       [
        112.434,
        31.308
       ],
       [
        112.556,
        31.219
       ],
       [
        112.58,
        31.118
       ],
       [
        112.539,
        31.077
       ],
       [
        112.556,
        30.939
       ],
       [
        112.634,
        30.848
       ],
       [
        112.622,
        30.787
       ],
       [
        112.627,
        30.67
       ],
       [
        112.713,
        30.627
       ],
       [
        112.716,
        30.575
       ],
       [
        112.797,
        30.564
       ],
       [
        112.886,
        30.515
       ],
       [
        113.073,
        30.475
       ],
       [
        113.381,
        30.407
       ],
       [
        113.602,
        30.538
       ],
       [
        113.769,
        30.626
       ],
       [
        113.838,
        30.63
       ],
       [
        113.9,
        30.637
       ],
       [
        113.939,
        30.66
       ],
       [
        114.009,
        30.615
       ],
       [
        114.288,
        30.572
       ]
      ],
      [
       [
        107.428,
        33.166
       ],
       [
        107.718,
        33.171
       ],
       [
        107.861,
        33.222
       ],
       [
        107.939,
        33.216
       ],
       [
        107.956,
        33.112
       ],
       [
        108.195,
        33.024
       ],
       [
        108.247,
        32.881
       ],
       [
        108.388,
        32.753
       ],
       [
        108.411,
        32.709
       ],
       [
        108.512,
        32.55
       ],
       [
        108.718,
        32.528
       ],
       [
        108.782,
        32.614
       ],
       [
        108.819,
        32.609
       ],
       [
        108.855,
        32.608
       ],
       [
        109.063,
        32.735
       ],
       [
        109.257,
        32.757
       ],
       [
        109.377,
        32.838
       ],
       [
        109.716,
        32.934
       ],
       [
        109.767,
        32.934
       ],
       [
        110.305,
        32.807
       ],
       [
        110.475,
        32.843
       ],
       [
        110.715,
        32.815
       ],
       [
        110.808,
        32.848
       ],
       [
        110.967,
        32.788
       ],
       [
        111.0,
        32.741
       ]
      ]
     ]
    },
    "n": "Han"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        110.577,
        35.726
       ],
       [
        110.459,
        35.343
       ],
       [
        110.316,
        35.135
       ],
       [
        110.262,
        34.868
       ],
       [
        110.465,
        34.597
       ],
       [
        110.795,
        34.645
       ],
       [
        110.97,
        34.724
       ],
       [
        111.101,
        34.795
       ],
       [
        111.453,
        34.852
       ],
       [
        111.651,
        34.972
       ],
       [
        111.844,
        35.074
       ],
       [
        112.559,
        34.872
       ],
       [
        113.012,
        34.831
       ],
       [
        113.288,
        34.94
       ],
       [
        113.489,
        34.978
       ],
       [
        113.784,
        34.902
       ],
       [
        113.965,
        34.931
       ],
       [
        114.473,
        34.91
       ],
       [
        114.798,
        34.978
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
       114.866,
       35.145
      ],
      [
       115.014,
       35.33
      ],
      [
       115.272,
       35.459
      ],
      [
       115.341,
       35.538
      ],
      [
       115.463,
       35.681
      ]
     ]
    },
    "n": "Huang"
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        114.156,
        30.385
       ],
       [
        114.303,
        30.593
       ],
       [
        114.472,
        30.661
       ],
       [
        114.662,
        30.582
       ],
       [
        114.841,
        30.565
       ],
       [
        114.885,
        30.423
       ],
       [
        114.999,
        30.385
       ]
      ],
      [
       [
        116.903,
        30.385
       ],
       [
        116.972,
        30.446
       ],
       [
        117.212,
        30.552
       ],
       [
        117.247,
        30.674
       ],
       [
        117.605,
        30.776
       ],
       [
        117.78,
        31.052
       ],
       [
        117.916,
        31.104
       ],
       [
        117.999,
        31.202
       ],
       [
        118.24,
        31.29
       ],
       [
        118.305,
        31.406
       ],
       [
        118.395,
        31.653
       ],
       [
        118.692,
        32.074
       ],
       [
        119.324,
        32.227
       ],
       [
        119.643,
        32.235
       ],
       [
        119.867,
        32.1
       ],
       [
        120.074,
        31.96
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.605,
        33.172
       ],
       [
        118.519,
        33.036
       ],
       [
        118.431,
        32.973
       ],
       [
        118.227,
        32.897
       ],
       [
        118.171,
        32.906
       ],
       [
        118.181,
        32.971
       ],
       [
        118.088,
        32.958
       ],
       [
        118.05,
        32.964
       ],
       [
        118.13,
        33.028
       ],
       [
        118.24,
        33.008
       ],
       [
        118.182,
        33.139
       ],
       [
        117.979,
        33.142
       ],
       [
        117.892,
        33.065
       ],
       [
        117.809,
        33.048
       ],
       [
        117.874,
        33.093
       ],
       [
        117.912,
        33.181
       ],
       [
        118.114,
        33.215
       ],
       [
        118.227,
        33.143
       ],
       [
        118.34,
        32.994
       ],
       [
        118.417,
        33.038
       ],
       [
        118.46,
        33.099
       ],
       [
        118.454,
        33.16
       ],
       [
        118.249,
        33.221
       ],
       [
        118.273,
        33.267
       ],
       [
        118.392,
        33.338
       ],
       [
        118.49,
        33.401
       ],
       [
        118.607,
        33.376
       ],
       [
        118.488,
        33.54
       ],
       [
        118.544,
        33.645
       ],
       [
        118.608,
        33.515
       ],
       [
        118.774,
        33.443
       ],
       [
        118.861,
        33.339
       ],
       [
        118.778,
        33.176
       ],
       [
        118.681,
        33.077
       ],
       [
        118.653,
        33.174
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ]
      ]
     ]
    },
    "n": "Hongze Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.248,
        30.939
       ],
       [
        120.103,
        30.973
       ],
       [
        119.939,
        31.253
       ],
       [
        120.108,
        31.492
       ],
       [
        120.248,
        31.514
       ]
      ]
     ]
    },
    "n": "Tai Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.407,
        32.794
       ],
       [
        119.35,
        32.749
       ],
       [
        119.253,
        32.736
       ],
       [
        119.173,
        32.686
       ],
       [
        119.147,
        32.753
       ],
       [
        119.092,
        32.836
       ],
       [
        119.084,
        32.866
       ],
       [
        119.188,
        32.878
       ],
       [
        119.242,
        32.896
       ],
       [
        119.253,
        32.943
       ],
       [
        119.245,
        33.013
       ],
       [
        119.296,
        33.041
       ],
       [
        119.303,
        33.085
       ],
       [
        119.237,
        33.154
       ],
       [
        119.18,
        33.148
       ],
       [
        119.164,
        33.09
       ],
       [
        119.099,
        33.027
       ],
       [
        118.966,
        33.038
       ],
       [
        118.882,
        33.077
       ],
       [
        119.059,
        33.058
       ],
       [
        119.135,
        33.144
       ],
       [
        119.226,
        33.2
       ],
       [
        119.304,
        33.164
       ],
       [
        119.346,
        33.024
       ],
       [
        119.397,
        32.916
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ]
      ]
     ]
    },
    "n": "Gaoyou Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.78,
        31.409
       ],
       [
        118.747,
        31.459
       ],
       [
        118.724,
        31.522
       ],
       [
        118.758,
        31.545
       ],
       [
        118.941,
        31.554
       ],
       [
        118.96,
        31.465
       ],
       [
        118.85,
        31.393
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.941,
        31.521
       ],
       [
        117.83,
        31.57
       ],
       [
        117.706,
        31.524
       ],
       [
        117.563,
        31.445
       ],
       [
        117.382,
        31.536
       ],
       [
        117.297,
        31.65
       ],
       [
        117.366,
        31.709
       ],
       [
        117.434,
        31.651
       ],
       [
        117.487,
        31.593
       ],
       [
        117.594,
        31.609
       ],
       [
        117.733,
        31.66
       ],
       [
        117.919,
        31.551
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ]
      ]
     ]
    },
    "n": "Chao Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.601,
        30.662
       ],
       [
        114.64,
        30.66
       ],
       [
        114.646,
        30.715
       ],
       [
        114.703,
        30.735
       ],
       [
        114.746,
        30.738
       ],
       [
        114.786,
        30.663
       ],
       [
        114.696,
        30.613
       ],
       [
        114.584,
        30.65
       ],
       [
        114.601,
        30.662
       ],
       [
        114.601,
        30.662
       ]
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.326,
        34.587
       ],
       [
        117.25,
        34.502
       ],
       [
        117.174,
        34.543
       ],
       [
        117.128,
        34.663
       ],
       [
        117.179,
        34.719
       ],
       [
        117.318,
        34.621
       ],
       [
        117.326,
        34.587
       ],
       [
        117.326,
        34.587
       ]
      ]
     ]
    },
    "n": "Weishan Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        114.552,
        30.385
       ],
       [
        114.482,
        30.431
       ],
       [
        114.533,
        30.435
       ],
       [
        114.601,
        30.399
       ],
       [
        114.633,
        30.44
       ],
       [
        114.607,
        30.483
       ],
       [
        114.64,
        30.486
       ],
       [
        114.678,
        30.497
       ],
       [
        114.739,
        30.494
       ],
       [
        114.752,
        30.463
       ],
       [
        114.753,
        30.429
       ],
       [
        114.683,
        30.397
       ],
       [
        114.552,
        30.385
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "_bbox": [
   107.428,
   30.385,
   120.248,
   35.726
  ]
 }
};
