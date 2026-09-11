// 本文件由 tools/build.py 自动生成（切片 chongqing），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["chongqing"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["chongqing"] = {
 "meta": {
  "kind": "county",
  "region": "chuan_gui",
  "province": "chongqing",
  "title": "重庆府城/渝中（巴郡·山城·两江汇）",
  "dossier_label": "重庆府城",
  "subtitle": "东周巴蔓子 · 宋淳熙升府 · 明洪武筑城 · 两江山城",
  "primary_place": "chongqing_cheng",
  "dossier_event": "event:ev_chongqing_01",
  "vocab_pack": "chongqing",
  "terrain_grid": "china_coarse",
  "lead": "重庆府城踞渝中半岛，长江、嘉陵江夹城而过，三面环江、一面依山，为典型山城与西南军事重镇。东周巴蔓子刎头谢楚，忠义之典传为巴渝符号；宋淳熙十六年（1189）光宗以潜藩升恭州为重庆府，名城始著；明洪武四年（1371）指挥使戴鼎因旧址筑城，辟九开八闭十七门，山城格局由是定型。下为升府、筑城、巴蔓子三条主线，点时间轴或左栏跳转。",
  "parties_note": "史料以史记、华阳国志、宋史、明史、水经注为本，重庆府志、巴县志作补充，现代考订为学界视角；系统不裁决，只并列。",
  "subject_names": {
   "event:ev_chongqing_01": "升重庆府",
   "event:ev_chongqing_02": "戴鼎筑城",
   "event:ev_chongqing_03": "巴蔓子刎头",
   "place:chongqing_cheng": "重庆府城",
   "person:ba_manzi": "巴蔓子"
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
    "note": "宋光宗潜藩升府、戴鼎筑城，建制与治权嵌入重庆城市演进；巴蔓子忠义成巴渝地域认同符号"
   },
   "material_logistics": {
    "from": [
     "economy",
     "tech"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "长江、嘉陵江交汇朝天门，川江航运锁钥，重庆成西南水运与物资吞吐枢纽"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "山城梯坎聚落、沿江商帮与市镇网络，构成重庆社会底层肌理"
   },
   "geopolitical_strategy": {
    "from": [
     "strategic",
     "international"
    ],
    "from_dims": [
     6,
     5
    ],
    "layer": "inference",
    "note": "渝中半岛天然险塞、易守难攻，为西南军事重镇；两江锁钥控川江上下"
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
  "page": "county.html?scene=chongqing",
  "key": "chongqing",
  "scene_id": "chongqing"
 },
 "sources": [
  {
   "id": "shiji",
   "title": "史记",
   "party": "汉·官修",
   "stance_label": "汉人当代/近当代",
   "distance_label": "成书汉武帝时，距楚汉约百年",
   "color": "#B23A48",
   "compiler": "司马迁（西汉）"
  },
  {
   "id": "huayangguozhi",
   "title": "华阳国志",
   "party": "后世官修",
   "distance_label": "成书东晋（常璩，约 348—354），距事约 130 年",
   "stance_label": "东晋官修·地方志体",
   "compiler": "常璩（东晋）撰",
   "color": "#8C5A3C"
  },
  {
   "id": "songshi",
   "title": "宋史",
   "party": "元·官修",
   "stance_label": "后朝官修",
   "distance_label": "成书元顺帝至正五年（1345），距事约340年",
   "color": "#6C7A89",
   "compiler": "脱脱等（元）"
  },
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二百五十一·秦良玉传／卷二百四十二·戴鼎筑城",
   "compiler": "张廷玉等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#8C6239"
  },
  {
   "id": "shuijingzhu",
   "title": "水经注",
   "party": "北魏·官修",
   "stance_label": "北魏地理注",
   "distance_label": "成书北魏（约六世纪）",
   "color": "#8E7CC3",
   "compiler": "郦道元（北魏）"
  },
  {
   "id": "chongqing_fuzhi",
   "title": "重庆府志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距宋明府城事数百年",
   "color": "#7A6A52",
   "compiler": "《重庆府志》（清/民修）",
   "period": "清/民"
  },
  {
   "id": "baxian_zhi",
   "title": "巴县志",
   "party": "后世官修",
   "stance_label": "地方志",
   "distance_label": "清/民屡修，距明清巴县事数百年",
   "color": "#7A6A52",
   "compiler": "《巴县志》（清/民修）",
   "period": "清/民"
  },
  {
   "id": "modern",
   "title": "现代考订",
   "party": "学界",
   "distance_label": "现代学界综合研究，距事数百年，基于多方史料互证",
   "stance_label": "学界考证",
   "compiler": "重庆历史地理与巴渝文化综合研究",
   "color": "#2E7D8F",
   "period": "今"
  }
 ],
 "places": [
  {
   "id": "chongqing_cheng",
   "name": "重庆府城（老城厢·渝中半岛）",
   "lon": 106.56,
   "lat": 29.57,
   "type": "capital",
   "modern": "今重庆市渝中区老城厢一带",
   "note": "宋光宗潜藩升府后，重庆府治、巴县治皆在渝中半岛。明洪武四年戴鼎筑城，辟九开八闭十七门，城垣依山就势，为典型山城。坐标取渝中半岛中心，approx（城区级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（城区级精度），待 CHGIS 精修",
   "elev": 270
  },
  {
   "id": "chaotianmen",
   "name": "朝天门（两江交汇处）",
   "lon": 106.585,
   "lat": 29.575,
   "type": "port",
   "modern": "今重庆市渝中区朝天门",
   "note": "重庆府城东北门，襟带长江与嘉陵江交汇处，为府城水运总口，舟楫辐辏。坐标取朝天门广场一带，approx（街区级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（街区级精度），待 CHGIS 精修",
   "elev": 274
  },
  {
   "id": "jialing_river",
   "name": "嘉陵江（渝水）",
   "lon": 106.54,
   "lat": 29.61,
   "type": "river",
   "modern": "今嘉陵江重庆城区段",
   "note": "长江上游重要支流，自北而南绕渝中半岛西侧，于朝天门汇入长江。古亦称渝水，重庆简称「渝」所自。坐标取渝中半岛西侧江段，approx（江河级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江河级精度），待 CHGIS 精修",
   "elev": 286
  },
  {
   "id": "yangtze_river",
   "name": "长江（川江）",
   "lon": 106.6,
   "lat": 29.55,
   "type": "river",
   "modern": "今长江重庆城区段",
   "note": "长江自西南而来，绕渝中半岛东侧，与嘉陵江汇于朝天门。川江航运以此为锁钥，上连叙泸、下通荆楚。坐标取渝中半岛东侧江段，approx（江河级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（江河级精度），待 CHGIS 精修",
   "elev": 269
  },
  {
   "id": "ciqikou",
   "name": "磁器口（巴县古镇·水码头）",
   "lon": 106.45,
   "lat": 29.58,
   "type": "port",
   "modern": "今重庆市沙坪坝区磁器口古镇",
   "note": "明清巴县著名水码头与市镇，濒嘉陵江，商旅辐辏，为山城沿江聚落之代表。坐标取磁器口古镇，approx（镇级精度）。",
   "geo_match": "approx",
   "geo_note": "公开地理数据（镇级精度），待 CHGIS 精修",
   "elev": 278
  }
 ],
 "persons": [
  {
   "id": "song_guangzong",
   "name": "宋光宗（赵惇）",
   "era": "南宋",
   "role": "皇帝·升恭州为重庆府",
   "note": "宋孝宗第三子，先封恭王，淳熙十六年即位后升恭州为重庆府，「双重喜庆」之典由此而来。",
   "influence": 1
  },
  {
   "id": "dai_ding",
   "name": "戴鼎",
   "era": "明",
   "role": "指挥使·筑重庆城",
   "note": "明洪武初重庆卫指挥使，洪武四年因旧址筑重庆城，辟九开八闭十七门，奠定山城格局。",
   "influence": 0
  },
  {
   "id": "ba_manzi",
   "name": "巴蔓子",
   "era": "东周",
   "role": "巴国将军·忠义殉国",
   "note": "东周巴国将军，为平内乱向楚请师，许城三城；乱定后不愿割地，自刎以头谢楚，为巴渝忠义文化之祖。",
   "influence": 1
  },
  {
   "id": "ba_qing",
   "name": "巴清（巴寡妇清）",
   "era": "秦",
   "role": "巴郡女商人·丹砂之利",
   "note": "秦代巴郡寡妇，承夫业经营丹砂（水银）之利，家财富甲一方，受到秦始皇礼遇，为早期巴渝女性商业与社会影响力之代表。",
   "influence": 1
  },
  {
   "id": "qin_liangyu",
   "name": "秦良玉",
   "era": "明",
   "role": "石砫土司女将·忠州人",
   "note": "明季石砫宣抚司女将，忠州（今重庆忠县）人，率白杆兵援辽、平奢安之乱，为明末著名女帅，折射巴渝武风。",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "CQ_R01",
   "subject": "event:ev_chongqing_01",
   "predicate": "升府建制",
   "value_text": "宋淳熙十六年（1189），光宗以潜藩升恭州为重庆府，重庆之名始见",
   "value": 1189,
   "source": "songshi",
   "layer": "record",
   "era": "宋淳熙十六年",
   "place": "chongqing_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（宋史·光宗纪：恭王即位，升恭州为重庆府）",
   "note": "宋史·光宗纪；宋史·地理志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "CQ_R02",
   "subject": "event:ev_chongqing_02",
   "predicate": "筑城",
   "value_text": "明洪武四年（1371），指挥使戴鼎因旧址筑重庆城，辟九开八闭十七门",
   "value": 1371,
   "source": "mingshi",
   "layer": "record",
   "era": "明洪武四年",
   "place": "chongqing_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史·地理志：重庆府，洪武四年筑城）",
   "note": "明史·地理志",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "CQ_R03",
   "subject": "event:ev_chongqing_03",
   "predicate": "忠义殉国",
   "value_text": "东周巴国将军巴蔓子为平内乱向楚请师，许以三城；乱定后自刎以头谢楚，不愿割地",
   "value": -380,
   "source": "huayangguozhi",
   "layer": "record",
   "era": "东周（约公元前4世纪）",
   "place": "chongqing_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "（华阳国志·巴志：蔓子自刎，以头授楚使）",
   "note": "华阳国志·巴志",
   "dims": [
    4,
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_R04",
   "subject": "place:chongqing_cheng",
   "predicate": "形胜",
   "value_text": "重庆府城踞渝中半岛，两江环带，城垣依山就势，为西南山城重镇",
   "value": null,
   "source": "chongqing_fuzhi",
   "layer": "record",
   "era": "清",
   "place": "chongqing_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（重庆府志：渝中半岛，两江环带，城依山建）",
   "note": "重庆府志·舆地",
   "dims": [
    1,
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_R05",
   "subject": "place:chaotianmen",
   "predicate": "两江汇",
   "value_text": "朝天门为府城东北门，长江与嘉陵江交汇于此，是川江航运总口",
   "value": null,
   "source": "shuijingzhu",
   "layer": "record",
   "era": "北魏",
   "place": "chaotianmen",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（水经注：江水又东迳巴郡南，又东经枳县）",
   "note": "水经注·江水；重庆府志",
   "dims": [
    1,
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "北魏·官修",
   "_faction": null
  },
  {
   "id": "CQ_R06",
   "subject": "person:qin_liangyu",
   "predicate": "女将",
   "value_text": "明季石砫宣抚司女将秦良玉，忠州人，率白杆兵援辽、平奢安之乱",
   "value": null,
   "source": "mingshi",
   "layer": "record",
   "era": "明",
   "place": "chongqing_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "（明史·秦良玉传：良玉，忠州人，石砫宣抚使马千乘妻）",
   "note": "明史·秦良玉传",
   "dims": [
    3,
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "CQ_S01",
   "subject": "place:ciqikou",
   "predicate": "古镇码头",
   "value_text": "磁器口濒嘉陵江，明清以来为巴县著名水码头与市镇，商旅辐辏",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "ciqikou",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "磁器口为重庆传统水码头与市镇代表。",
   "note": "学界考证：重庆城市史",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CQ_S02",
   "subject": "place:chongqing_cheng",
   "predicate": "山城",
   "value_text": "重庆城依山而建，街巷梯坎纵横，建筑随坡就势，形成独特山城景观与社会空间",
   "value": null,
   "source": "modern",
   "layer": "scholarship",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "重庆是典型的山城聚落。",
   "note": "学界考证：重庆城市形态",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CQ_S03",
   "subject": "person:ba_qing",
   "predicate": "丹砂商人",
   "value_text": "秦代巴郡寡妇清承夫业经营丹砂之利，家财富甲一方，受秦始皇礼遇",
   "value": null,
   "source": "shiji",
   "layer": "scholarship",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（史记·货殖列传：巴寡妇清，其先得丹穴，而擅其利数世）",
   "note": "史记·货殖列传",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CQ_S04",
   "subject": "person:ba_manzi",
   "predicate": "忠义符号",
   "value_text": "巴蔓子刎头谢楚，成为巴渝忠义文化之象征，影响后世重庆社会伦理",
   "value": null,
   "source": "huayangguozhi",
   "layer": "scholarship",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "巴蔓子为巴渝忠义文化之祖。",
   "note": "学界考证：巴渝文化",
   "dims": [
    4,
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_S05",
   "subject": "place:chongqing_cheng",
   "predicate": "府城制度",
   "value_text": "重庆府为明清四川东路军政中心，府县同治于渝中，辖属巴县等州县",
   "value": null,
   "source": "chongqing_fuzhi",
   "layer": "scholarship",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（重庆府志：重庆府领州若干县若干）",
   "note": "重庆府志·建置",
   "dims": [
    3
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_S06",
   "subject": "place:yangtze_river",
   "predicate": "长江航运",
   "value_text": "长江川江段上连叙泸、下通荆楚，是重庆府城物资吞吐与军事调遣之脉",
   "value": null,
   "source": "shuijingzhu",
   "layer": "scholarship",
   "era": "今",
   "place": "yangtze_river",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（水经注：江水东迳巴郡，为巴蜀舟航所聚）",
   "note": "水经注·江水；四川航运史",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "_party": "北魏·官修",
   "_faction": null
  },
  {
   "id": "CQ_S07",
   "subject": "person:song_guangzong",
   "predicate": "潜藩升府",
   "value_text": "宋光宗以恭王潜藩升恭州为重庆府，双重喜庆之典，使重庆行政层级跃升",
   "value": null,
   "source": "songshi",
   "layer": "scholarship",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "（宋史·光宗纪：升恭州为重庆府）",
   "note": "宋史·光宗纪",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "元·官修",
   "_faction": null
  },
  {
   "id": "CQ_I01",
   "subject": "place:chaotianmen",
   "predicate": "航运枢纽",
   "value_text": "朝天门控长江、嘉陵江交汇，为川江航运枢纽与重庆水运门户",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "chaotianmen",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据重庆港史推断",
   "dims": [
    1,
    2,
    3
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CQ_I02",
   "subject": "place:chongqing_cheng",
   "predicate": "军事地理",
   "value_text": "渝中半岛三面环江、一面依山，天然险塞，易守难攻，为西南军事重镇",
   "value": null,
   "source": "chongqing_fuzhi",
   "layer": "inference",
   "era": "推算",
   "place": "chongqing_cheng",
   "confidence": 0.6,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据重庆府志与城防推断",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_I03",
   "subject": "place:ciqikou",
   "predicate": "商业聚落",
   "value_text": "磁器口因水而兴，形成市廛、码头、手工业聚落，是巴县沿江商业网络节点",
   "value": null,
   "source": "modern",
   "layer": "inference",
   "era": "推算",
   "place": "ciqikou",
   "confidence": 0.55,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据重庆商业史推断",
   "dims": [
    2,
    3,
    4
   ],
   "dim_source": "declared",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "CQ_I04",
   "subject": "person:ba_qing",
   "predicate": "社会网络",
   "value_text": "巴清以丹砂之利积聚财富并获秦廷礼遇，反映巴地女性与经济网络之特殊地位",
   "value": null,
   "source": "shiji",
   "layer": "inference",
   "era": "推算",
   "place": "chongqing_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据史记·货殖列传推断",
   "dims": [
    4
   ],
   "dim_source": "declared",
   "_party": "汉·官修",
   "_faction": null
  },
  {
   "id": "CQ_I05",
   "subject": "person:ba_manzi",
   "predicate": "思想符号",
   "value_text": "巴蔓子以身殉国的叙事，构成巴渝忠义精神与地域认同的核心符号",
   "value": null,
   "source": "huayangguozhi",
   "layer": "inference",
   "era": "推算",
   "place": "chongqing_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "据巴渝文化研究推断",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_G01",
   "subject": "place:chongqing_cheng",
   "predicate": "城墙沿革",
   "value_text": "明清重庆城墙历次重修、拆改与城门命名沿革，史料记载详略不一",
   "value": null,
   "source": "baxian_zhi",
   "layer": "gap",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    3
   ],
   "dim_source": "declared",
   "lead": {
    "where": "重庆城墙历代重修与城门沿革",
    "skills": [
     "历史地理",
     "方志"
    ],
    "accept": "需巴县志与重庆府志互证"
   },
   "_party": "后世官修",
   "_faction": null
  },
  {
   "id": "CQ_G02",
   "subject": "person:dai_ding",
   "predicate": "筑城细节",
   "value_text": "戴鼎筑城具体工役、城垣规模与九开八闭格局的早期史料较零散",
   "value": null,
   "source": "mingshi",
   "layer": "gap",
   "era": "今",
   "place": "chongqing_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "lead": {
    "where": "戴鼎筑重庆城原始档案",
    "skills": [
     "明史",
     "方志"
    ],
    "accept": "需明实录与地方志补证"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "CQ_G03",
   "subject": "place:jialing_river",
   "predicate": "古河道",
   "value_text": "嘉陵江重庆段河道变迁与古渡口位置，早期文献记载简略",
   "value": null,
   "source": "shuijingzhu",
   "layer": "gap",
   "era": "今",
   "place": "jialing_river",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "证据缺口",
   "dims": [
    1,
    2
   ],
   "dim_source": "declared",
   "lead": {
    "where": "嘉陵江重庆段河道变迁",
    "skills": [
     "历史地理",
     "水文"
    ],
    "accept": "需水经注疏证与考古"
   },
   "_party": "北魏·官修",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "CQ_G01",
  "CQ_G02",
  "CQ_G03"
 ],
 "events": [
  {
   "id": "ev_chongqing_01",
   "year": 1189,
   "era": "宋淳熙十六年",
   "kind": "升府建制",
   "title": "升恭州为重庆府",
   "place": "chongqing_cheng",
   "text": "宋淳熙十六年（1189），孝宗第三子赵惇先封恭王于恭州，即位为光宗后，以潜藩之故升恭州为重庆府，「重庆」之名始见。此举使巴县一带由州升为府，成为西南军政重镇。",
   "subject": "event:ev_chongqing_01"
  },
  {
   "id": "ev_chongqing_02",
   "year": 1371,
   "era": "明洪武四年",
   "kind": "筑城",
   "title": "戴鼎筑重庆城",
   "place": "chongqing_cheng",
   "text": "明洪武四年（1371），指挥使戴鼎因旧址修筑重庆府城，辟九开八闭十七门，城垣依山脊起伏，高二丈，周十余里。山城格局由此定型，为明清重庆府城之基。",
   "subject": "event:ev_chongqing_02"
  },
  {
   "id": "ev_chongqing_03",
   "year": -380,
   "era": "东周（约公元前4世纪，年份为约数）",
   "kind": "忠义殉国",
   "title": "巴蔓子刎头谢楚",
   "place": "chongqing_cheng",
   "text": "东周时，巴国内乱，将军巴蔓子向楚国请师平乱，许以三城。乱定后，楚使索城，蔓子以国土不可分，自刎以头谢楚。楚王叹其忠，以上卿礼葬其头。巴蔓子遂为巴渝忠义文化之象征。",
   "subject": "event:ev_chongqing_03"
  }
 ],
 "edges": [
  {
   "from": "chongqing_cheng",
   "to": "chaotianmen",
   "type": "geo",
   "label": "府城东北门，两江交汇之口"
  },
  {
   "from": "chongqing_cheng",
   "to": "jialing_river",
   "type": "geo",
   "label": "渝中半岛西侧临嘉陵江"
  },
  {
   "from": "chongqing_cheng",
   "to": "yangtze_river",
   "type": "geo",
   "label": "渝中半岛东侧临长江"
  },
  {
   "from": "ciqikou",
   "to": "jialing_river",
   "type": "geo",
   "label": "磁器口濒嘉陵江，为巴县水码头"
  },
  {
   "from": "chongqing_cheng",
   "to": "ciqikou",
   "type": "mil",
   "label": "府城与嘉陵江下游市镇互为犄角"
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
   "汉·官修",
   "后世官修",
   "元·官修",
   "清修·明臣",
   "北魏·官修",
   "学界"
  ],
  "party_bucket": {
   "汉·官修": "汉·官修",
   "后世官修": "后世官修",
   "元·官修": "元·官修",
   "清修·明臣": "清修·明臣",
   "北魏·官修": "北魏·官修",
   "学界": "学界"
  },
  "party_colors": {
   "汉·官修": "#B23A48",
   "后世官修": "#8C5A3C",
   "元·官修": "#6C7A89",
   "清修·明臣": "#8C6239",
   "北魏·官修": "#8E7CC3",
   "学界": "#2E7D8F"
  },
  "factions": {
   "f_汉·官修": {
    "name": "汉·官修",
    "macro_party": "汉·官修",
    "note": "auto"
   },
   "f_后世官修": {
    "name": "后世官修",
    "macro_party": "后世官修",
    "note": "auto"
   },
   "f_元·官修": {
    "name": "元·官修",
    "macro_party": "元·官修",
    "note": "auto"
   },
   "f_清修·明臣": {
    "name": "清修·明臣",
    "macro_party": "清修·明臣",
    "note": "auto"
   },
   "f_北魏·官修": {
    "name": "北魏·官修",
    "macro_party": "北魏·官修",
    "note": "auto"
   },
   "f_学界": {
    "name": "学界",
    "macro_party": "学界",
    "note": "auto"
   }
  },
  "faction_colors": {
   "f_汉·官修": "#B23A48",
   "f_后世官修": "#8C5A3C",
   "f_元·官修": "#6C7A89",
   "f_清修·明臣": "#8C6239",
   "f_北魏·官修": "#8E7CC3",
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
        105.45,
        28.55
       ],
       [
        105.45,
        30.61
       ],
       [
        107.6,
        30.61
       ],
       [
        107.6,
        28.55
       ],
       [
        105.45,
        28.55
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
         106.39,
         28.55
        ],
        [
         106.403,
         28.57
        ],
        [
         106.441,
         28.55
        ],
        [
         106.5,
         28.55
        ],
        [
         106.467,
         28.586
        ],
        [
         106.493,
         28.591
        ],
        [
         106.503,
         28.661
        ],
        [
         106.528,
         28.678
        ],
        [
         106.492,
         28.742
        ],
        [
         106.462,
         28.761
        ],
        [
         106.453,
         28.817
        ],
        [
         106.474,
         28.833
        ],
        [
         106.562,
         28.756
        ],
        [
         106.561,
         28.719
        ],
        [
         106.588,
         28.692
        ],
        [
         106.617,
         28.691
        ],
        [
         106.618,
         28.667
        ],
        [
         106.652,
         28.649
        ],
        [
         106.618,
         28.645
        ],
        [
         106.637,
         28.623
        ],
        [
         106.607,
         28.593
        ],
        [
         106.615,
         28.55
        ],
        [
         106.737,
         28.55
        ],
        [
         106.738,
         28.555
        ],
        [
         106.778,
         28.563
        ],
        [
         106.757,
         28.607
        ],
        [
         106.785,
         28.627
        ],
        [
         106.807,
         28.589
        ],
        [
         106.831,
         28.623
        ],
        [
         106.867,
         28.625
        ],
        [
         106.889,
         28.696
        ],
        [
         106.866,
         28.69
        ],
        [
         106.824,
         28.756
        ],
        [
         106.846,
         28.781
        ],
        [
         106.872,
         28.777
        ],
        [
         106.923,
         28.81
        ],
        [
         106.952,
         28.767
        ],
        [
         106.989,
         28.776
        ],
        [
         106.984,
         28.851
        ],
        [
         107.019,
         28.862
        ],
        [
         107.016,
         28.883
        ],
        [
         107.142,
         28.888
        ],
        [
         107.207,
         28.869
        ],
        [
         107.195,
         28.838
        ],
        [
         107.227,
         28.836
        ],
        [
         107.211,
         28.818
        ],
        [
         107.219,
         28.773
        ],
        [
         107.247,
         28.762
        ],
        [
         107.261,
         28.793
        ],
        [
         107.328,
         28.811
        ],
        [
         107.34,
         28.846
        ],
        [
         107.384,
         28.849
        ],
        [
         107.414,
         28.912
        ],
        [
         107.441,
         28.944
        ],
        [
         107.413,
         28.96
        ],
        [
         107.397,
         28.994
        ],
        [
         107.364,
         29.009
        ],
        [
         107.396,
         29.041
        ],
        [
         107.37,
         29.092
        ],
        [
         107.412,
         29.095
        ],
        [
         107.428,
         29.129
        ],
        [
         107.409,
         29.138
        ],
        [
         107.402,
         29.185
        ],
        [
         107.441,
         29.204
        ],
        [
         107.487,
         29.174
        ],
        [
         107.571,
         29.218
        ],
        [
         107.589,
         29.15
        ],
        [
         107.6,
         29.16
        ],
        [
         107.6,
         30.61
        ],
        [
         107.493,
         30.61
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
         107.443,
         30.533
        ],
        [
         107.409,
         30.522
        ],
        [
         107.369,
         30.469
        ],
        [
         107.339,
         30.386
        ],
        [
         107.288,
         30.337
        ],
        [
         107.258,
         30.267
        ],
        [
         107.221,
         30.214
        ],
        [
         107.103,
         30.09
        ],
        [
         107.08,
         30.094
        ],
        [
         107.085,
         30.064
        ],
        [
         107.058,
         30.043
        ],
        [
         107.056,
         30.04
        ],
        [
         107.054,
         30.041
        ],
        [
         107.054,
         30.044
        ],
        [
         107.021,
         30.037
        ],
        [
         106.982,
         30.085
        ],
        [
         106.976,
         30.083
        ],
        [
         106.945,
         30.037
        ],
        [
         106.913,
         30.025
        ],
        [
         106.862,
         30.033
        ],
        [
         106.837,
         30.05
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.785,
         30.017
        ],
        [
         106.732,
         30.027
        ],
        [
         106.724,
         30.059
        ],
        [
         106.7,
         30.074
        ],
        [
         106.7,
         30.112
        ],
        [
         106.673,
         30.122
        ],
        [
         106.677,
         30.157
        ],
        [
         106.632,
         30.186
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.642,
         30.246
        ],
        [
         106.612,
         30.292
        ],
        [
         106.56,
         30.315
        ],
        [
         106.545,
         30.297
        ],
        [
         106.499,
         30.296
        ],
        [
         106.44,
         30.308
        ],
        [
         106.429,
         30.255
        ],
        [
         106.402,
         30.242
        ],
        [
         106.349,
         30.245
        ],
        [
         106.334,
         30.226
        ],
        [
         106.307,
         30.238
        ],
        [
         106.296,
         30.206
        ],
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.197
        ],
        [
         106.233,
         30.186
        ],
        [
         106.18,
         30.233
        ],
        [
         106.169,
         30.304
        ],
        [
         106.132,
         30.324
        ],
        [
         106.133,
         30.303
        ],
        [
         106.073,
         30.334
        ],
        [
         106.032,
         30.374
        ],
        [
         105.943,
         30.372
        ],
        [
         105.901,
         30.405
        ],
        [
         105.847,
         30.41
        ],
        [
         105.826,
         30.436
        ],
        [
         105.792,
         30.427
        ],
        [
         105.76,
         30.384
        ],
        [
         105.755,
         30.343
        ],
        [
         105.715,
         30.323
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.67,
         30.254
        ],
        [
         105.625,
         30.276
        ],
        [
         105.62,
         30.234
        ],
        [
         105.662,
         30.21
        ],
        [
         105.643,
         30.186
        ],
        [
         105.561,
         30.184
        ],
        [
         105.551,
         30.179
        ],
        [
         105.536,
         30.153
        ],
        [
         105.596,
         30.159
        ],
        [
         105.574,
         30.131
        ],
        [
         105.58,
         30.13
        ],
        [
         105.583,
         30.127
        ],
        [
         105.583,
         30.124
        ],
        [
         105.642,
         30.101
        ],
        [
         105.639,
         30.076
        ],
        [
         105.677,
         30.068
        ],
        [
         105.687,
         30.039
        ],
        [
         105.72,
         30.043
        ],
        [
         105.754,
         30.018
        ],
        [
         105.723,
         29.975
        ],
        [
         105.731,
         29.958
        ],
        [
         105.702,
         29.925
        ],
        [
         105.717,
         29.894
        ],
        [
         105.739,
         29.891
        ],
        [
         105.708,
         29.841
        ],
        [
         105.611,
         29.837
        ],
        [
         105.583,
         29.819
        ],
        [
         105.575,
         29.744
        ],
        [
         105.529,
         29.708
        ],
        [
         105.482,
         29.718
        ],
        [
         105.477,
         29.675
        ],
        [
         105.45,
         29.681
        ],
        [
         105.45,
         29.319
        ],
        [
         105.465,
         29.323
        ],
        [
         105.459,
         29.289
        ],
        [
         105.513,
         29.283
        ],
        [
         105.521,
         29.265
        ],
        [
         105.558,
         29.279
        ],
        [
         105.632,
         29.28
        ],
        [
         105.648,
         29.253
        ],
        [
         105.695,
         29.287
        ],
        [
         105.712,
         29.219
        ],
        [
         105.704,
         29.177
        ],
        [
         105.729,
         29.134
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.106
        ],
        [
         105.758,
         29.069
        ],
        [
         105.742,
         29.039
        ],
        [
         105.766,
         29.014
        ],
        [
         105.762,
         28.991
        ],
        [
         105.802,
         28.958
        ],
        [
         105.797,
         28.936
        ],
        [
         105.831,
         28.945
        ],
        [
         105.853,
         28.927
        ],
        [
         105.91,
         28.92
        ],
        [
         105.969,
         28.966
        ],
        [
         106.001,
         28.974
        ],
        [
         106.041,
         28.955
        ],
        [
         106.049,
         28.906
        ],
        [
         106.071,
         28.92
        ],
        [
         106.102,
         28.899
        ],
        [
         106.148,
         28.902
        ],
        [
         106.173,
         28.92
        ],
        [
         106.207,
         28.905
        ],
        [
         106.265,
         28.846
        ],
        [
         106.246,
         28.818
        ],
        [
         106.268,
         28.779
        ],
        [
         106.274,
         28.739
        ],
        [
         106.305,
         28.704
        ],
        [
         106.304,
         28.65
        ],
        [
         106.347,
         28.584
        ],
        [
         106.332,
         28.553
        ],
        [
         106.337,
         28.55
        ],
        [
         106.39,
         28.55
        ]
       ]
      ],
      [
       [
        [
         105.583,
         30.124
        ],
        [
         105.583,
         30.127
        ],
        [
         105.58,
         30.13
        ],
        [
         105.574,
         30.131
        ],
        [
         105.583,
         30.124
        ]
       ]
      ],
      [
       [
        [
         107.058,
         30.043
        ],
        [
         107.054,
         30.044
        ],
        [
         107.054,
         30.041
        ],
        [
         107.056,
         30.04
        ],
        [
         107.058,
         30.043
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
         105.45,
         30.61
        ],
        [
         105.45,
         28.55
        ],
        [
         105.686,
         28.55
        ],
        [
         105.693,
         28.589
        ],
        [
         105.713,
         28.587
        ],
        [
         105.745,
         28.617
        ],
        [
         105.757,
         28.59
        ],
        [
         105.784,
         28.611
        ],
        [
         105.808,
         28.6
        ],
        [
         105.885,
         28.595
        ],
        [
         105.89,
         28.671
        ],
        [
         105.938,
         28.687
        ],
        [
         105.967,
         28.761
        ],
        [
         106.001,
         28.744
        ],
        [
         106.031,
         28.695
        ],
        [
         106.086,
         28.682
        ],
        [
         106.103,
         28.636
        ],
        [
         106.148,
         28.643
        ],
        [
         106.171,
         28.629
        ],
        [
         106.185,
         28.589
        ],
        [
         106.24,
         28.55
        ],
        [
         106.337,
         28.55
        ],
        [
         106.332,
         28.553
        ],
        [
         106.347,
         28.584
        ],
        [
         106.304,
         28.65
        ],
        [
         106.305,
         28.704
        ],
        [
         106.274,
         28.739
        ],
        [
         106.268,
         28.779
        ],
        [
         106.246,
         28.818
        ],
        [
         106.265,
         28.846
        ],
        [
         106.207,
         28.905
        ],
        [
         106.173,
         28.92
        ],
        [
         106.148,
         28.902
        ],
        [
         106.102,
         28.899
        ],
        [
         106.071,
         28.92
        ],
        [
         106.049,
         28.906
        ],
        [
         106.041,
         28.955
        ],
        [
         106.001,
         28.974
        ],
        [
         105.969,
         28.966
        ],
        [
         105.91,
         28.92
        ],
        [
         105.853,
         28.927
        ],
        [
         105.831,
         28.945
        ],
        [
         105.797,
         28.936
        ],
        [
         105.802,
         28.958
        ],
        [
         105.762,
         28.991
        ],
        [
         105.766,
         29.014
        ],
        [
         105.742,
         29.039
        ],
        [
         105.758,
         29.069
        ],
        [
         105.729,
         29.106
        ],
        [
         105.752,
         29.13
        ],
        [
         105.729,
         29.134
        ],
        [
         105.704,
         29.177
        ],
        [
         105.712,
         29.219
        ],
        [
         105.695,
         29.287
        ],
        [
         105.648,
         29.253
        ],
        [
         105.632,
         29.28
        ],
        [
         105.558,
         29.279
        ],
        [
         105.521,
         29.265
        ],
        [
         105.513,
         29.283
        ],
        [
         105.459,
         29.289
        ],
        [
         105.465,
         29.323
        ],
        [
         105.45,
         29.319
        ],
        [
         105.45,
         29.681
        ],
        [
         105.477,
         29.675
        ],
        [
         105.482,
         29.718
        ],
        [
         105.529,
         29.708
        ],
        [
         105.575,
         29.744
        ],
        [
         105.583,
         29.819
        ],
        [
         105.611,
         29.837
        ],
        [
         105.708,
         29.841
        ],
        [
         105.739,
         29.891
        ],
        [
         105.717,
         29.894
        ],
        [
         105.702,
         29.925
        ],
        [
         105.731,
         29.958
        ],
        [
         105.723,
         29.975
        ],
        [
         105.754,
         30.018
        ],
        [
         105.72,
         30.043
        ],
        [
         105.687,
         30.039
        ],
        [
         105.677,
         30.068
        ],
        [
         105.639,
         30.076
        ],
        [
         105.642,
         30.101
        ],
        [
         105.583,
         30.124
        ],
        [
         105.574,
         30.131
        ],
        [
         105.596,
         30.159
        ],
        [
         105.536,
         30.153
        ],
        [
         105.551,
         30.179
        ],
        [
         105.556,
         30.187
        ],
        [
         105.559,
         30.185
        ],
        [
         105.561,
         30.184
        ],
        [
         105.643,
         30.186
        ],
        [
         105.662,
         30.21
        ],
        [
         105.62,
         30.234
        ],
        [
         105.625,
         30.276
        ],
        [
         105.67,
         30.254
        ],
        [
         105.72,
         30.253
        ],
        [
         105.72,
         30.253
        ],
        [
         105.715,
         30.323
        ],
        [
         105.755,
         30.343
        ],
        [
         105.76,
         30.384
        ],
        [
         105.792,
         30.427
        ],
        [
         105.826,
         30.436
        ],
        [
         105.847,
         30.41
        ],
        [
         105.901,
         30.405
        ],
        [
         105.943,
         30.372
        ],
        [
         106.032,
         30.374
        ],
        [
         106.073,
         30.334
        ],
        [
         106.133,
         30.303
        ],
        [
         106.132,
         30.324
        ],
        [
         106.169,
         30.304
        ],
        [
         106.18,
         30.233
        ],
        [
         106.233,
         30.186
        ],
        [
         106.26,
         30.197
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.208
        ],
        [
         106.264,
         30.21
        ],
        [
         106.296,
         30.206
        ],
        [
         106.307,
         30.238
        ],
        [
         106.334,
         30.226
        ],
        [
         106.349,
         30.245
        ],
        [
         106.402,
         30.242
        ],
        [
         106.429,
         30.255
        ],
        [
         106.44,
         30.308
        ],
        [
         106.499,
         30.296
        ],
        [
         106.545,
         30.297
        ],
        [
         106.56,
         30.315
        ],
        [
         106.612,
         30.292
        ],
        [
         106.642,
         30.246
        ],
        [
         106.613,
         30.236
        ],
        [
         106.613,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.612,
         30.236
        ],
        [
         106.632,
         30.186
        ],
        [
         106.677,
         30.157
        ],
        [
         106.673,
         30.122
        ],
        [
         106.7,
         30.112
        ],
        [
         106.7,
         30.074
        ],
        [
         106.724,
         30.059
        ],
        [
         106.732,
         30.027
        ],
        [
         106.785,
         30.017
        ],
        [
         106.826,
         30.031
        ],
        [
         106.826,
         30.031
        ],
        [
         106.837,
         30.05
        ],
        [
         106.862,
         30.033
        ],
        [
         106.913,
         30.025
        ],
        [
         106.945,
         30.037
        ],
        [
         106.976,
         30.083
        ],
        [
         106.976,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.981,
         30.088
        ],
        [
         106.982,
         30.085
        ],
        [
         107.021,
         30.037
        ],
        [
         107.054,
         30.044
        ],
        [
         107.058,
         30.043
        ],
        [
         107.085,
         30.064
        ],
        [
         107.08,
         30.094
        ],
        [
         107.103,
         30.09
        ],
        [
         107.221,
         30.214
        ],
        [
         107.258,
         30.267
        ],
        [
         107.288,
         30.337
        ],
        [
         107.339,
         30.386
        ],
        [
         107.369,
         30.469
        ],
        [
         107.409,
         30.522
        ],
        [
         107.443,
         30.533
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
         107.493,
         30.61
        ],
        [
         105.45,
         30.61
        ]
       ]
      ],
      [
       [
        [
         106.264,
         30.21
        ],
        [
         106.26,
         30.208
        ],
        [
         106.26,
         30.204
        ],
        [
         106.26,
         30.197
        ],
        [
         106.264,
         30.21
        ]
       ]
      ],
      [
       [
        [
         106.977,
         30.088
        ],
        [
         106.976,
         30.088
        ],
        [
         106.976,
         30.083
        ],
        [
         106.982,
         30.085
        ],
        [
         106.981,
         30.088
        ],
        [
         106.98,
         30.088
        ],
        [
         106.979,
         30.088
        ],
        [
         106.977,
         30.088
        ],
        [
         106.977,
         30.088
        ]
       ]
      ],
      [
       [
        [
         105.559,
         30.185
        ],
        [
         105.556,
         30.187
        ],
        [
         105.551,
         30.179
        ],
        [
         105.561,
         30.184
        ],
        [
         105.559,
         30.185
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
         107.6,
         28.55
        ],
        [
         107.6,
         29.16
        ],
        [
         107.589,
         29.15
        ],
        [
         107.571,
         29.218
        ],
        [
         107.487,
         29.174
        ],
        [
         107.441,
         29.204
        ],
        [
         107.402,
         29.185
        ],
        [
         107.409,
         29.138
        ],
        [
         107.428,
         29.129
        ],
        [
         107.412,
         29.095
        ],
        [
         107.37,
         29.092
        ],
        [
         107.396,
         29.041
        ],
        [
         107.364,
         29.009
        ],
        [
         107.397,
         28.994
        ],
        [
         107.413,
         28.96
        ],
        [
         107.441,
         28.944
        ],
        [
         107.414,
         28.912
        ],
        [
         107.384,
         28.849
        ],
        [
         107.34,
         28.846
        ],
        [
         107.328,
         28.811
        ],
        [
         107.261,
         28.793
        ],
        [
         107.247,
         28.762
        ],
        [
         107.219,
         28.773
        ],
        [
         107.211,
         28.818
        ],
        [
         107.227,
         28.836
        ],
        [
         107.195,
         28.838
        ],
        [
         107.207,
         28.869
        ],
        [
         107.142,
         28.888
        ],
        [
         107.016,
         28.883
        ],
        [
         107.019,
         28.862
        ],
        [
         106.984,
         28.851
        ],
        [
         106.989,
         28.776
        ],
        [
         106.952,
         28.767
        ],
        [
         106.923,
         28.81
        ],
        [
         106.872,
         28.777
        ],
        [
         106.846,
         28.781
        ],
        [
         106.824,
         28.756
        ],
        [
         106.866,
         28.69
        ],
        [
         106.889,
         28.696
        ],
        [
         106.867,
         28.625
        ],
        [
         106.831,
         28.623
        ],
        [
         106.807,
         28.589
        ],
        [
         106.785,
         28.627
        ],
        [
         106.757,
         28.607
        ],
        [
         106.778,
         28.563
        ],
        [
         106.738,
         28.555
        ],
        [
         106.737,
         28.55
        ],
        [
         106.615,
         28.55
        ],
        [
         106.607,
         28.593
        ],
        [
         106.637,
         28.623
        ],
        [
         106.618,
         28.645
        ],
        [
         106.652,
         28.649
        ],
        [
         106.618,
         28.667
        ],
        [
         106.617,
         28.691
        ],
        [
         106.588,
         28.692
        ],
        [
         106.561,
         28.719
        ],
        [
         106.562,
         28.756
        ],
        [
         106.474,
         28.833
        ],
        [
         106.453,
         28.817
        ],
        [
         106.462,
         28.761
        ],
        [
         106.492,
         28.742
        ],
        [
         106.528,
         28.678
        ],
        [
         106.503,
         28.661
        ],
        [
         106.493,
         28.591
        ],
        [
         106.467,
         28.586
        ],
        [
         106.5,
         28.55
        ],
        [
         106.441,
         28.55
        ],
        [
         106.403,
         28.57
        ],
        [
         106.39,
         28.55
        ],
        [
         106.24,
         28.55
        ],
        [
         106.185,
         28.589
        ],
        [
         106.171,
         28.629
        ],
        [
         106.148,
         28.643
        ],
        [
         106.103,
         28.636
        ],
        [
         106.086,
         28.682
        ],
        [
         106.031,
         28.695
        ],
        [
         106.001,
         28.744
        ],
        [
         105.967,
         28.761
        ],
        [
         105.938,
         28.687
        ],
        [
         105.89,
         28.671
        ],
        [
         105.885,
         28.595
        ],
        [
         105.808,
         28.6
        ],
        [
         105.784,
         28.611
        ],
        [
         105.757,
         28.59
        ],
        [
         105.745,
         28.617
        ],
        [
         105.713,
         28.587
        ],
        [
         105.693,
         28.589
        ],
        [
         105.686,
         28.55
        ],
        [
         107.6,
         28.55
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
     "type": "LineString",
     "coordinates": [
      [
       105.45,
       28.882
      ],
      [
       105.503,
       28.892
      ],
      [
       105.547,
       28.915
      ],
      [
       105.577,
       28.922
      ],
      [
       105.619,
       28.906
      ],
      [
       105.673,
       28.898
      ],
      [
       105.741,
       28.918
      ],
      [
       105.785,
       28.906
      ],
      [
       105.803,
       28.862
      ],
      [
       105.829,
       28.839
      ],
      [
       105.861,
       28.837
      ],
      [
       105.882,
       28.852
      ],
      [
       105.89,
       28.884
      ],
      [
       105.876,
       28.915
      ],
      [
       105.838,
       28.943
      ],
      [
       105.834,
       28.98
      ],
      [
       105.865,
       29.025
      ],
      [
       105.946,
       29.058
      ],
      [
       106.076,
       29.08
      ],
      [
       106.146,
       29.125
      ],
      [
       106.157,
       29.195
      ],
      [
       106.253,
       29.274
      ],
      [
       106.434,
       29.363
      ],
      [
       106.518,
       29.426
      ],
      [
       106.505,
       29.462
      ],
      [
       106.523,
       29.516
      ],
      [
       106.572,
       29.589
      ],
      [
       106.618,
       29.612
      ],
      [
       106.66,
       29.586
      ],
      [
       106.721,
       29.578
      ],
      [
       106.802,
       29.588
      ],
      [
       106.894,
       29.65
      ],
      [
       106.998,
       29.763
      ],
      [
       107.084,
       29.787
      ],
      [
       107.15,
       29.721
      ],
      [
       107.237,
       29.699
      ],
      [
       107.345,
       29.718
      ],
      [
       107.419,
       29.771
      ],
      [
       107.458,
       29.856
      ],
      [
       107.53,
       29.89
      ],
      [
       107.6,
       29.879
      ]
     ]
    },
    "n": "Chang Jiang"
   }
  ],
  "lakes": [],
  "_bbox": [
   105.45,
   28.55,
   107.6,
   30.61
  ]
 }
};
