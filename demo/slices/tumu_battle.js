// 本文件由 tools/build.py 自动生成（切片 tumu_battle），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tumu_battle"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tumu_battle"] = {
 "meta": {
  "kind": "county",
  "region": "xibei",
  "title": "土木堡之变·北京保卫战",
  "dossier_label": "土木堡之变",
  "subtitle": "正统十四年—景泰元年（1449–1450）· 明 vs 瓦剌",
  "primary_place": "tumubao",
  "dossier_event": "event:beijing_baowei",
  "vocab_pack": "tumu_battle",
  "terrain_grid": "china_coarse",
  "lead": "正统十四年（1449）瓦剌也先破明军于土木堡、英宗北狩；于谦立景泰帝、列营九门死守北京，德胜门大破瓦剌，明祚不绝。实控区随事件年份由瓦剌入边（据居庸/紫荆/宣府/土木堡）翻回明守（北边复安）。",
  "parties_note": "本切片主干为后世官修史（明史），无明、瓦剌双方当代原始档案；双方实况经清修明史回溯叙述，缺口为一等公民。系统不裁决，只并列。",
  "subject_names": {
   "event:tumu_bian": "土木堡之变",
   "event:jingtai_li": "景泰即位",
   "event:beijing_baowei": "北京保卫战",
   "event:yexian_tui": "也先北退",
   "event:xuanfu_shao": "瓦剌掠宣大",
   "event:yingzong_huan": "英宗还銮",
   "event:beiuan_fu": "北边复安",
   "place:tumubao": "土木堡",
   "place:beijing": "北京",
   "place:juyong": "居庸关",
   "person:yuqian": "于谦",
   "person:yesian": "也先",
   "person:jingtai": "明代宗"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "ming",
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
    "note": "土木堡之变：朝堂凝聚力——于谦力主景泰即位、定固守拒迁，绝瓦剌挟帝之望"
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
    "note": "土木堡之变：后勤物力——列营九门、火器拒战；宣大边备残破致补给受胁"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "土木堡之变：人口动员——京师军民共命死守，北边民心系于关隘得失"
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
    "note": "土木堡之变：地缘战略——居庸/紫荆屏藩京师，瓦剌破关入边、北边控御易手"
   }
  },
  "province": "beijing",
  "related": [],
  "page": "county.html?scene=tumu_battle",
  "key": "tumu_battle",
  "scene_id": "tumu_battle"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷一七〇·于谦传 / 卷三二八·瓦剌传 / 卷一〇·英宗前纪",
   "compiler": "张廷玉 等",
   "compiled_year": 1739,
   "stance_label": "后朝官修",
   "distance_label": "成书 1739（清乾隆四年），距所记明清战事约百年",
   "party": "清修·明臣",
   "color": "#B23A48",
   "note": "本切片主干史料：取《英宗前纪》（土木堡亲征、英宗北狩、景泰即位）、《于谦传》（固守京师、德胜门破瓦剌）、《瓦剌传》（也先入寇、挟帝北归）。清修明史成书距事约百年，对明军败因的叙述受清初政治语境影响，瓦剌一方多经明方奏报转述。",
   "faction": null
  },
  {
   "id": "tumu_yanjiu",
   "title": "土木堡之变与北京保卫战研究（现代综述）",
   "party": "二手综述",
   "stance_label": "近现代考订",
   "distance_label": "现代土木堡与北京保卫战研究，距事六百余岁",
   "color": "#9B7B5A",
   "compiler": "近现代研究",
   "period": "现代",
   "note": "现代土木堡之变战史、兵力与边镇控御的二手综述，用于兵力区间、战术推演与缺口项；凡依赖此源的断言皆为待升级项，默认可关闭。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lat": 39.9,
   "lon": 116.4,
   "type": "city",
   "note": "京师顺天府，于谦列营九门拒瓦剌，北京保卫战主轴",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 44
  },
  {
   "id": "tumubao",
   "name": "土木堡",
   "lat": 40.45,
   "lon": 115.3,
   "type": "region",
   "note": "河北怀来西南土木镇，正统十四年明军溃败、英宗被俘处",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 603
  },
  {
   "id": "datong",
   "name": "大同",
   "lat": 40.08,
   "lon": 113.3,
   "type": "city",
   "note": "山西行都司治所，北边重镇，土木堡后瓦剌连岁入掠",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 1054
  },
  {
   "id": "xuanfu",
   "name": "宣府",
   "lat": 40.62,
   "lon": 115.03,
   "type": "city",
   "note": "宣府镇（今河北宣化），京师西北屏藩，瓦剌入边要冲",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 705
  },
  {
   "id": "juyong",
   "name": "居庸关",
   "lat": 40.27,
   "lon": 116.1,
   "type": "region",
   "note": "军都陉，北京西北门户，瓦剌破关入掠处",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 262
  },
  {
   "id": "zijing",
   "name": "紫荆关",
   "lat": 39.42,
   "lon": 115.2,
   "type": "region",
   "note": "河北易县西，太行八陉之一，瓦剌由此入掠京师",
   "geo_match": "approx",
   "geo_note": "现代公开地理数据，待CHGIS精修",
   "elev": 505
  }
 ],
 "persons": [
  {
   "id": "yingzong",
   "name": "明英宗",
   "party": "明",
   "note": "朱祁镇，正统帝，亲征土木堡被瓦剌所俘，后还銮为太上皇",
   "influence": 0
  },
  {
   "id": "jingtai",
   "name": "明代宗",
   "party": "明",
   "note": "朱祁钰，郕王，土木堡后于谦力主即位为景泰帝，固守京师",
   "influence": 0
  },
  {
   "id": "yuqian",
   "name": "于谦",
   "party": "明",
   "note": "兵部尚书，北京保卫战主帅，定固守拒迁之议、列营九门破瓦剌",
   "influence": 1
  },
  {
   "id": "shihong",
   "name": "石亨",
   "party": "明",
   "note": "总兵，德胜门督战大破瓦剌，北京保卫战前线主将",
   "influence": 0
  },
  {
   "id": "yesian",
   "name": "也先",
   "party": "瓦剌",
   "note": "瓦剌太师，土木堡破明军、挟英宗围北京，后北退",
   "influence": 0
  },
  {
   "id": "tuohuabu_hua",
   "name": "脱脱不花",
   "party": "瓦剌",
   "note": "瓦剌所立可汗（鞑靼裔），与也先共主蒙古，入寇之号",
   "influence": 0
  },
  {
   "id": "wangzhen",
   "name": "王振",
   "party": "明",
   "note": "司礼监掌印宦官，擅权力劝亲征，土木堡溃败之祸首",
   "influence": 0
  },
  {
   "id": "sunthenhou",
   "name": "孙太后",
   "party": "明",
   "note": "英宗母，土木堡后命郕王监国、促景泰即位以定国本",
   "influence": 0
  },
  {
   "id": "guodeng",
   "name": "郭登",
   "party": "明",
   "note": "大同镇将，收拾边备、屡拒瓦剌入掠",
   "influence": 0
  },
  {
   "id": "xining",
   "name": "喜宁",
   "party": "明",
   "note": "降瓦剌内侍，为也先导，尝挟英宗为质要挟边镇",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "TM001",
   "subject": "event:tumu_bian",
   "predicate": "土木堡溃败",
   "value_text": "瓦剌太师也先大举入寇，宦官王振力劝英宗亲征；明军仓促出师，于土木堡遭也先截击溃败，英宗被俘，扈从文武殒殆尽。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "tumubao",
   "source": "mingshi",
   "quote": "师溃，帝北狩，从臣死者数十人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：亲征溃败使明廷中枢一时无主，为北京保卫战之因。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM002",
   "subject": "event:beijing_baowei",
   "predicate": "列营九门",
   "value_text": "也先挟英宗破居庸、紫荆关入掠，兵临北京；于谦督石亨等列营九门、以火器拒战，德胜门大破瓦剌，京城得全。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "谦督诸将列营九门，以火器拒战，德胜门大破之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/技术维度（2）：列营九门、火器拒战是北京保卫战的核心战术，置信度最高。",
   "dims": [
    6,
    2
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM003",
   "subject": "event:yingzong_huan",
   "predicate": "英宗还銮",
   "value_text": "也先见挟帝无利、明已立景泰帝，乃遣使归英宗；景泰帝奉迎太上皇入南宫，兄弟同处，北使渐通。",
   "time": {
    "era_text": "景泰元年（1450）",
    "gregorian_year": 1450
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "也先遣使归上皇，帝奉迎入南宫",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：英宗还銮标志明—瓦剌由战转和，北边复安之转捩。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM004",
   "subject": "event:jingtai_li",
   "predicate": "景泰即位",
   "value_text": "孙太后命郕王祁钰监国，于谦力主即位以绝瓦剌挟帝要挟之念；祁钰遂即帝位（景泰帝），遥尊英宗为太上皇，定固守京师、拒南迁之议。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "于谦力请郕王即位，以绝也先之望",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：景泰即位是『另立新君、不坠国本』的继统决断。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM005",
   "subject": "event:yexian_tui",
   "predicate": "也先北退",
   "value_text": "瓦剌攻北京城下不得志，又惧各边援兵四集，乃挟英宗北归，解京师之围退走漠北，北边暂解严。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "也先攻城不克，乃拥上皇北去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：瓦剌解围北退，明暂解京师之危。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM006",
   "subject": "event:xuanfu_shao",
   "predicate": "瓦剌掠宣大",
   "value_text": "土木堡溃后宣府、大同边备空虚，瓦剌游骑连岁入掠，居庸、紫荆诸关与宣大沿线残破，明于北边一时失其有效控御。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "xuanfu",
   "source": "mingshi",
   "quote": "宣大残破，瓦剌游骑岁至",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/地理维度（1）：宣大边备空虚、瓦剌入边，北边控御一时易手。",
   "dims": [
    6,
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM007",
   "subject": "event:beiuan_fu",
   "predicate": "北边复安",
   "value_text": "明与瓦剌通使议和，于谦整顿宣大、蓟辽边备，居庸、紫荆诸关与宣府、大同次第复明之控御，北边暂安。",
   "time": {
    "era_text": "景泰元年（1450）",
    "gregorian_year": 1450
   },
   "place": "xuanfu",
   "source": "mingshi",
   "quote": "边备稍饬，宣大复明之控",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "事件维度（6）/制度维度（3）：通使议和、整顿边备，实控由瓦剌入边翻回明守。",
   "dims": [
    6,
    3
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM008",
   "subject": "place:tumubao",
   "predicate": "战场定位",
   "value_text": "土木堡在今河北怀来西南土木镇，地当宣府—大同间孔道，明军亲征北上是为此地所截。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "tumubao",
   "source": "mingshi",
   "quote": "土木堡在宣府南，地当孔道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：土木堡居宣大间孔道，是瓦剌截击明军的空间前提。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM009",
   "subject": "place:juyong",
   "predicate": "居庸地形",
   "value_text": "居庸关（军都陉）为北京西北门户，紫荆关为太行北口，二关屏藩京师；瓦剌破关而入，京师遂震。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "juyong",
   "source": "mingshi",
   "quote": "居庸、紫荆，京师肩背",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）/社会维度（4）：二关为京师屏障，其得失系北边安危与民心向背。",
   "dims": [
    1,
    4
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM010",
   "subject": "place:beijing",
   "predicate": "京师定位",
   "value_text": "北京为顺天府、明京师，于谦列营九门死守，瓦剌攻之不克，明祚賴以不绝。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "京师震，谦誓死守",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "地理维度（1）：北京为都城，其存否系明祚断续。",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM011",
   "subject": "event:tumu_bian",
   "predicate": "王振误国",
   "value_text": "司礼监掌印宦官王振擅权，力劝英宗亲征、进退失据，致明军仓促溃于土木堡，为败因之枢。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "tumubao",
   "source": "mingshi",
   "quote": "振擅权，劝亲征，师遂溃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "operational",
   "note": "事件维度（6）/思想维度（5）：宦官擅权、决策失宜，是亲征溃败的统帅层根源。",
   "dims": [
    6,
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM012",
   "subject": "person:yuqian",
   "predicate": "于谦守国",
   "value_text": "于谦为兵部尚书，定固守拒迁之议、拥景泰即位、列营九门破瓦剌，以社稷为己任，北京得全。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "mingshi",
   "quote": "谦以社稷为任，誓死守京师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "operational",
   "note": "思想维度（5）：于谦『社稷为重、君为轻』的决断，是北京保卫战存续的统帅层根源。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TM013",
   "subject": "event:beijing_baowei",
   "predicate": "兵力数考订",
   "value_text": "《明史》称明军土木堡『死伤数十万』、北京保卫战『石亨斩首甚众』，多为约数；现代研究多以为明方兵额经奏报夸大，瓦剌实骑数亦难核。",
   "time": {
    "era_text": "现代考订",
    "gregorian_year": 2000
   },
   "place": "beijing",
   "source": "tumu_yanjiu",
   "quote": "土木堡明军号称五十万，实数难核",
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
   "id": "TM014",
   "subject": "event:tumu_bian",
   "predicate": "优劣推演",
   "value_text": "按明军仓促出师、指挥乖方、瓦剌以逸待劳三项，模型推算瓦剌于土木堡以优势机动作战破明概率偏高（本项目推演，非史料原值）。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "tumubao",
   "source": "tumu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "技术维度（2）：基于出师仓促与机动优势的推断值，可复现。",
   "dims": [
    2
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "TM015",
   "subject": "place:juyong",
   "predicate": "补给推演",
   "value_text": "北京赖蓟辽、宣大援兵与粮饷南下；瓦剌破居庸、紫荆断二关，京师补给与援路俱受胁，利于速决围城而非持久。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "juyong",
   "source": "tumu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "operational",
   "note": "地理维度（1）/制度维度（3）：关隘得失与援兵补给推演。",
   "dims": [
    1,
    3
   ],
   "dim_source": "inference",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "TM016",
   "subject": "event:beijing_baowei",
   "predicate": "明军兵力缺口",
   "value_text": "北京保卫战明军实际兵额、各门部署与瓦剌攻城兵力无精确史料：《明史》仅给约数，瓦剌一方多经明方奏报转述，二者皆非可核实数，缺口即结论，仅能给区间而非定点数。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "beijing",
   "source": "tumu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "技术维度（2）/社会维度（4）：明军真实兵额与瓦剌攻城兵力为结构性未知。",
   "dims": [
    2,
    4
   ],
   "dim_source": "declared",
   "lead": {
    "where": "北京保卫战明军各门实际兵额与瓦剌攻城兵力",
    "skills": [
     "核《明史·于谦传》《英宗前纪》对兵额的表述",
     "比对《瓦剌传》与明方奏报的夸张成分",
     "查现代土木堡研究对兵力的估算区间"
    ],
    "accept": "明确北京保卫战兵力为结构性未知，仅能给区间而非定点数"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "TM017",
   "subject": "event:tumu_bian",
   "predicate": "决策视角缺口",
   "value_text": "亲征决策的内部过程（王振擅权、廷臣异议、英宗从征）主要经《明史》（清修）后向追述；土木堡溃败细节与瓦剌视角多依明方奏报，瓦剌一方原始叙述无存，决策细节与反对声多为后向建构。",
   "time": {
    "era_text": "正统十四年（1449）",
    "gregorian_year": 1449
   },
   "place": "tumubao",
   "source": "tumu_yanjiu",
   "quote": "",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0,
   "scale": "operational",
   "note": "思想维度（5）：亲征决策叙事的视角缺失与后向建构。",
   "dims": [
    5
   ],
   "dim_source": "declared",
   "lead": {
    "where": "亲征决策中的廷臣异议与王振擅权细节",
    "skills": [
     "比对《明史·英宗前纪》与《于谦传》对亲征的处理",
     "核明清双方史料不对称的结构性原因"
    ],
    "accept": "承认亲征决策细节在史料上为清修后向建构的弱证据"
   },
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "TM016",
  "TM017"
 ],
 "events": [
  {
   "id": "ev_tumu_bian",
   "subject": "event:tumu_bian",
   "year": 1449,
   "era": "正统十四年（1449）",
   "title": "土木堡之变·英宗北狩",
   "kind": "变局·御驾被俘",
   "text": "瓦剌太师也先大举入寇，宦官王振擅权力劝英宗亲征；明军仓促出师，于土木堡遭也先截击溃败，英宗被俘，扈从文武殒殆尽，明廷一时无主。"
  },
  {
   "id": "ev_jingtai_li",
   "subject": "event:jingtai_li",
   "year": 1449,
   "era": "正统十四年（1449）",
   "title": "景泰即位·于谦定守",
   "kind": "变局·继统",
   "text": "孙太后命郕王祁钰监国，于谦力主即位以绝瓦剌挟帝要挟之念；祁钰遂即帝位（景泰帝），遥尊英宗为太上皇，定固守京师、拒南迁之议。"
  },
  {
   "id": "ev_beijing_baowei",
   "subject": "event:beijing_baowei",
   "year": 1449,
   "era": "正统十四年（1449）",
   "title": "北京保卫战·德胜门大捷",
   "kind": "战事·都城保卫战",
   "text": "也先挟英宗破居庸、紫荆关入掠，兵临北京；于谦督石亨等列营九门、以火器拒战，德胜门大破瓦剌，京城得全，明祚賴以不绝。"
  },
  {
   "id": "ev_yexian_tui",
   "subject": "event:yexian_tui",
   "year": 1449,
   "era": "正统十四年（1449）",
   "title": "也先解围北退",
   "kind": "战事·退兵",
   "text": "瓦剌攻北京城下不得志，又惧各边援兵四集，乃挟英宗北归，解京师之围退走漠北，北边暂解严。"
  },
  {
   "id": "ev_xuanfu_shao",
   "subject": "event:xuanfu_shao",
   "year": 1449,
   "era": "正统十四年（1449）",
   "title": "瓦剌掠宣大",
   "kind": "战事·边患",
   "text": "土木堡溃后宣府、大同边备空虚，瓦剌游骑连岁入掠，居庸、紫荆诸关与宣大沿线残破，明于北边一时失其有效控御。"
  },
  {
   "id": "ev_yingzong_huan",
   "subject": "event:yingzong_huan",
   "year": 1450,
   "era": "景泰元年（1450）",
   "title": "英宗还銮",
   "kind": "变局·迎驾",
   "text": "也先见挟帝无利、明已立景泰帝，乃遣使归英宗；景泰帝奉迎太上皇入南宫，兄弟同处，北使渐通。"
  },
  {
   "id": "ev_beiuan_fu",
   "subject": "event:beiuan_fu",
   "year": 1450,
   "era": "景泰元年（1450）",
   "title": "北边复安·明收宣大",
   "kind": "变局·边镇收复",
   "text": "明与瓦剌通使议和，于谦整顿宣大、蓟辽边备，居庸、紫荆诸关与宣府、大同次第复明之控御，北边暂安，实控由瓦剌入边翻回明守。"
  }
 ],
 "edges": [
  {
   "from": "beijing",
   "to": "juyong",
   "type": "military",
   "label": "北京—居庸关（瓦剌破关入掠京师）"
  },
  {
   "from": "juyong",
   "to": "xuanfu",
   "type": "military",
   "label": "居庸—宣府（京师西北边镇链）"
  },
  {
   "from": "xuanfu",
   "to": "datong",
   "type": "military",
   "label": "宣府—大同（宣大联防）"
  },
  {
   "from": "datong",
   "to": "tumubao",
   "type": "military",
   "label": "大同—土木堡（英宗亲征溃败处）"
  },
  {
   "from": "beijing",
   "to": "zijing",
   "type": "military",
   "label": "北京—紫荆关（瓦剌入掠另一径）"
  },
  {
   "from": "zijing",
   "to": "xuanfu",
   "type": "military",
   "label": "紫荆关—宣府（太行北口联防）"
  },
  {
   "from": "tumubao",
   "to": "xuanfu",
   "type": "military",
   "label": "土木堡—宣府（瓦剌入边主线）"
  },
  {
   "from": "beijing",
   "to": "tumubao",
   "type": "military",
   "label": "英宗亲征：北京出师北上土木堡"
  },
  {
   "from": "datong",
   "to": "beijing",
   "type": "river",
   "label": "大同—北京（补给与援兵南下）"
  },
  {
   "from": "xuanfu",
   "to": "beijing",
   "type": "military",
   "label": "宣府屏藩京师（北边安危所系）"
  }
 ],
 "control": [
  {
   "place_id": "beijing",
   "party": "明",
   "start": 1449,
   "end": null,
   "basis": "京师顺天府，于谦列营九门死守，瓦剌攻之不克",
   "note": "明根本"
  },
  {
   "place_id": "datong",
   "party": "明",
   "start": 1449,
   "end": null,
   "basis": "大同镇城，郭登收拾边备，虽遭掠仍明控",
   "note": "明镇城"
  },
  {
   "place_id": "juyong",
   "party": "瓦剌",
   "start": 1449,
   "end": 1449,
   "basis": "也先破居庸关入掠京师，1449 底瓦剌据之",
   "note": "瓦剌入边"
  },
  {
   "place_id": "juyong",
   "party": "明",
   "start": 1450,
   "end": null,
   "basis": "1450 后明复守居庸，北边暂安",
   "note": "战后属明"
  },
  {
   "place_id": "zijing",
   "party": "瓦剌",
   "start": 1449,
   "end": 1449,
   "basis": "瓦剌取紫荆关入掠，1449 底据之",
   "note": "瓦剌入边"
  },
  {
   "place_id": "zijing",
   "party": "明",
   "start": 1450,
   "end": null,
   "basis": "1450 后明复守紫荆，太行北口归明",
   "note": "战后属明"
  },
  {
   "place_id": "xuanfu",
   "party": "瓦剌",
   "start": 1449,
   "end": 1449,
   "basis": "土木堡后宣府边备空虚，瓦剌游骑入掠，1449 底据之",
   "note": "瓦剌入边"
  },
  {
   "place_id": "xuanfu",
   "party": "明",
   "start": 1450,
   "end": null,
   "basis": "1450 后明整顿宣府边备，复其控御",
   "note": "战后属明"
  },
  {
   "place_id": "tumubao",
   "party": "瓦剌",
   "start": 1449,
   "end": 1449,
   "basis": "土木堡溃败处，瓦剌1449 据之",
   "note": "瓦剌入边"
  },
  {
   "place_id": "tumubao",
   "party": "明",
   "start": 1450,
   "end": null,
   "basis": "1450 后明收土木堡一带边地",
   "note": "战后属明"
  }
 ],
 "control_seats": [
  {
   "place_id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "region": "xibei"
  },
  {
   "place_id": "datong",
   "name": "大同",
   "lon": 113.3,
   "lat": 40.08,
   "region": "xibei"
  },
  {
   "place_id": "juyong",
   "name": "居庸关",
   "lon": 116.1,
   "lat": 40.27,
   "region": "xibei"
  },
  {
   "place_id": "zijing",
   "name": "紫荆关",
   "lon": 115.2,
   "lat": 39.42,
   "region": "xibei"
  },
  {
   "place_id": "xuanfu",
   "name": "宣府",
   "lon": 115.03,
   "lat": 40.62,
   "region": "xibei"
  },
  {
   "place_id": "tumubao",
   "name": "土木堡",
   "lon": 115.3,
   "lat": 40.45,
   "region": "xibei"
  }
 ],
 "control_years": [
  1449,
  1450
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
   "明",
   "瓦剌",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "清修·明臣": "后世官修",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "明": "#C0392B",
   "瓦剌": "#3D6B4F",
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
        112.3,
        38.42
       ],
       [
        112.3,
        41.62
       ],
       [
        117.4,
        41.62
       ],
       [
        117.4,
        38.42
       ],
       [
        112.3,
        38.42
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
         117.349,
         40.581
        ],
        [
         117.39,
         40.562
        ],
        [
         117.4,
         40.565
        ],
        [
         117.4,
         40.685
        ],
        [
         117.342,
         40.674
        ],
        [
         117.32,
         40.658
        ],
        [
         117.278,
         40.664
        ],
        [
         117.208,
         40.695
        ],
        [
         117.117,
         40.7
        ],
        [
         117.112,
         40.707
        ],
        [
         117.012,
         40.694
        ],
        [
         116.965,
         40.71
        ],
        [
         116.927,
         40.745
        ],
        [
         116.924,
         40.774
        ],
        [
         116.848,
         40.839
        ],
        [
         116.813,
         40.848
        ],
        [
         116.76,
         40.89
        ],
        [
         116.714,
         40.91
        ],
        [
         116.722,
         40.927
        ],
        [
         116.678,
         40.971
        ],
        [
         116.699,
         41.021
        ],
        [
         116.688,
         41.045
        ],
        [
         116.648,
         41.059
        ],
        [
         116.616,
         41.053
        ],
        [
         116.623,
         41.021
        ],
        [
         116.598,
         40.975
        ],
        [
         116.568,
         40.993
        ],
        [
         116.52,
         40.981
        ],
        [
         116.52,
         40.981
        ],
        [
         116.455,
         40.981
        ],
        [
         116.447,
         40.954
        ],
        [
         116.477,
         40.9
        ],
        [
         116.398,
         40.906
        ],
        [
         116.37,
         40.944
        ],
        [
         116.34,
         40.929
        ],
        [
         116.334,
         40.904
        ],
        [
         116.438,
         40.819
        ],
        [
         116.466,
         40.774
        ],
        [
         116.454,
         40.766
        ],
        [
         116.317,
         40.772
        ],
        [
         116.311,
         40.755
        ],
        [
         116.273,
         40.763
        ],
        [
         116.247,
         40.792
        ],
        [
         116.22,
         40.744
        ],
        [
         116.205,
         40.74
        ],
        [
         116.172,
         40.696
        ],
        [
         116.163,
         40.662
        ],
        [
         116.134,
         40.667
        ],
        [
         116.099,
         40.631
        ],
        [
         116.005,
         40.584
        ],
        [
         115.982,
         40.579
        ],
        [
         115.972,
         40.602
        ],
        [
         115.908,
         40.617
        ],
        [
         115.885,
         40.595
        ],
        [
         115.828,
         40.588
        ],
        [
         115.82,
         40.559
        ],
        [
         115.785,
         40.558
        ],
        [
         115.755,
         40.54
        ],
        [
         115.736,
         40.503
        ],
        [
         115.781,
         40.493
        ],
        [
         115.772,
         40.444
        ],
        [
         115.864,
         40.359
        ],
        [
         115.918,
         40.354
        ],
        [
         115.952,
         40.282
        ],
        [
         115.969,
         40.264
        ],
        [
         115.899,
         40.234
        ],
        [
         115.87,
         40.186
        ],
        [
         115.856,
         40.189
        ],
        [
         115.848,
         40.147
        ],
        [
         115.806,
         40.153
        ],
        [
         115.774,
         40.176
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.6,
         40.12
        ],
        [
         115.591,
         40.096
        ],
        [
         115.527,
         40.076
        ],
        [
         115.485,
         40.04
        ],
        [
         115.455,
         40.03
        ],
        [
         115.45,
         39.993
        ],
        [
         115.429,
         39.984
        ],
        [
         115.426,
         39.951
        ],
        [
         115.481,
         39.936
        ],
        [
         115.523,
         39.899
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.526,
         39.876
        ],
        [
         115.514,
         39.838
        ],
        [
         115.567,
         39.816
        ],
        [
         115.553,
         39.795
        ],
        [
         115.506,
         39.784
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.444,
         39.786
        ],
        [
         115.44,
         39.752
        ],
        [
         115.487,
         39.742
        ],
        [
         115.492,
         39.67
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.522,
         39.64
        ],
        [
         115.518,
         39.597
        ],
        [
         115.546,
         39.619
        ],
        [
         115.587,
         39.59
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.668,
         39.615
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.753,
         39.516
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.828,
         39.541
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.957,
         39.561
        ],
        [
         115.978,
         39.596
        ],
        [
         115.995,
         39.577
        ],
        [
         116.026,
         39.588
        ],
        [
         116.036,
         39.572
        ],
        [
         116.099,
         39.575
        ],
        [
         116.13,
         39.568
        ],
        [
         116.152,
         39.583
        ],
        [
         116.199,
         39.589
        ],
        [
         116.241,
         39.564
        ],
        [
         116.258,
         39.5
        ],
        [
         116.307,
         39.488
        ],
        [
         116.338,
         39.456
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.435,
         39.443
        ],
        [
         116.455,
         39.453
        ],
        [
         116.444,
         39.482
        ],
        [
         116.412,
         39.483
        ],
        [
         116.402,
         39.528
        ],
        [
         116.444,
         39.51
        ],
        [
         116.438,
         39.527
        ],
        [
         116.478,
         39.535
        ],
        [
         116.473,
         39.553
        ],
        [
         116.508,
         39.551
        ],
        [
         116.524,
         39.596
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.621,
         39.602
        ],
        [
         116.665,
         39.606
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.709,
         39.618
        ],
        [
         116.749,
         39.62
        ],
        [
         116.791,
         39.596
        ],
        [
         116.812,
         39.616
        ],
        [
         116.85,
         39.668
        ],
        [
         116.906,
         39.677
        ],
        [
         116.906,
         39.688
        ],
        [
         116.89,
         39.688
        ],
        [
         116.887,
         39.725
        ],
        [
         116.917,
         39.731
        ],
        [
         116.902,
         39.764
        ],
        [
         116.949,
         39.779
        ],
        [
         116.918,
         39.846
        ],
        [
         116.908,
         39.832
        ],
        [
         116.866,
         39.844
        ],
        [
         116.812,
         39.89
        ],
        [
         116.784,
         39.891
        ],
        [
         116.783,
         39.948
        ],
        [
         116.758,
         39.968
        ],
        [
         116.781,
         40.035
        ],
        [
         116.82,
         40.028
        ],
        [
         116.831,
         40.051
        ],
        [
         116.868,
         40.042
        ],
        [
         116.928,
         40.055
        ],
        [
         116.945,
         40.041
        ],
        [
         117.025,
         40.03
        ],
        [
         117.052,
         40.06
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.14,
         40.064
        ],
        [
         117.16,
         40.077
        ],
        [
         117.204,
         40.07
        ],
        [
         117.21,
         40.082
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.274,
         40.106
        ],
        [
         117.307,
         40.137
        ],
        [
         117.349,
         40.137
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.384,
         40.188
        ],
        [
         117.39,
         40.228
        ],
        [
         117.351,
         40.23
        ],
        [
         117.331,
         40.29
        ],
        [
         117.295,
         40.278
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.243,
         40.369
        ],
        [
         117.226,
         40.369
        ],
        [
         117.234,
         40.417
        ],
        [
         117.264,
         40.442
        ],
        [
         117.209,
         40.502
        ],
        [
         117.263,
         40.513
        ],
        [
         117.248,
         40.54
        ],
        [
         117.27,
         40.561
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ]
       ]
      ]
     ]
    },
    "n": "北京市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.4,
         40.236
        ],
        [
         117.39,
         40.228
        ],
        [
         117.384,
         40.188
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.367,
         40.173
        ],
        [
         117.349,
         40.137
        ],
        [
         117.307,
         40.137
        ],
        [
         117.274,
         40.106
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.255,
         40.115
        ],
        [
         117.224,
         40.095
        ],
        [
         117.224,
         40.095
        ],
        [
         117.21,
         40.082
        ],
        [
         117.192,
         40.066
        ],
        [
         117.198,
         39.993
        ],
        [
         117.151,
         39.945
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.228,
         39.853
        ],
        [
         117.248,
         39.861
        ],
        [
         117.252,
         39.834
        ],
        [
         117.192,
         39.833
        ],
        [
         117.156,
         39.817
        ],
        [
         117.158,
         39.797
        ],
        [
         117.206,
         39.764
        ],
        [
         117.162,
         39.749
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.178,
         39.645
        ],
        [
         117.153,
         39.624
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.016,
         39.654
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         116.964,
         39.643
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.906,
         39.688
        ],
        [
         116.906,
         39.677
        ],
        [
         116.85,
         39.668
        ],
        [
         116.812,
         39.616
        ],
        [
         116.808,
         39.576
        ],
        [
         116.787,
         39.554
        ],
        [
         116.82,
         39.529
        ],
        [
         116.821,
         39.482
        ],
        [
         116.785,
         39.466
        ],
        [
         116.832,
         39.436
        ],
        [
         116.876,
         39.435
        ],
        [
         116.84,
         39.413
        ],
        [
         116.84,
         39.378
        ],
        [
         116.818,
         39.374
        ],
        [
         116.829,
         39.339
        ],
        [
         116.871,
         39.358
        ],
        [
         116.89,
         39.338
        ],
        [
         116.872,
         39.291
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.856,
         39.216
        ],
        [
         116.87,
         39.154
        ],
        [
         116.909,
         39.151
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.872,
         39.055
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.755,
         39.003
        ],
        [
         116.728,
         38.975
        ],
        [
         116.708,
         38.932
        ],
        [
         116.722,
         38.897
        ],
        [
         116.723,
         38.853
        ],
        [
         116.751,
         38.831
        ],
        [
         116.738,
         38.785
        ],
        [
         116.746,
         38.754
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.859,
         38.741
        ],
        [
         116.877,
         38.681
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         117.039,
         38.688
        ],
        [
         117.068,
         38.681
        ],
        [
         117.055,
         38.639
        ],
        [
         117.071,
         38.608
        ],
        [
         117.11,
         38.585
        ],
        [
         117.151,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.238,
         38.581
        ],
        [
         117.253,
         38.556
        ],
        [
         117.369,
         38.565
        ],
        [
         117.4,
         38.583
        ],
        [
         117.4,
         40.236
        ]
       ]
      ]
     ]
    },
    "n": "天津市"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.4,
         40.565
        ],
        [
         117.39,
         40.562
        ],
        [
         117.349,
         40.581
        ],
        [
         117.349,
         40.581
        ],
        [
         117.27,
         40.561
        ],
        [
         117.248,
         40.54
        ],
        [
         117.263,
         40.513
        ],
        [
         117.209,
         40.502
        ],
        [
         117.264,
         40.442
        ],
        [
         117.234,
         40.417
        ],
        [
         117.226,
         40.369
        ],
        [
         117.243,
         40.369
        ],
        [
         117.272,
         40.325
        ],
        [
         117.272,
         40.325
        ],
        [
         117.295,
         40.278
        ],
        [
         117.331,
         40.29
        ],
        [
         117.351,
         40.23
        ],
        [
         117.39,
         40.228
        ],
        [
         117.4,
         40.236
        ],
        [
         117.4,
         41.62
        ],
        [
         115.361,
         41.62
        ],
        [
         115.378,
         41.603
        ],
        [
         115.31,
         41.593
        ],
        [
         115.292,
         41.62
        ],
        [
         115.28,
         41.62
        ],
        [
         115.266,
         41.616
        ],
        [
         115.257,
         41.581
        ],
        [
         115.204,
         41.571
        ],
        [
         115.195,
         41.602
        ],
        [
         115.116,
         41.62
        ],
        [
         115.092,
         41.62
        ],
        [
         115.056,
         41.602
        ],
        [
         115.016,
         41.615
        ],
        [
         114.861,
         41.601
        ],
        [
         114.879,
         41.62
        ],
        [
         114.243,
         41.62
        ],
        [
         114.226,
         41.617
        ],
        [
         114.221,
         41.582
        ],
        [
         114.231,
         41.514
        ],
        [
         114.101,
         41.538
        ],
        [
         114.032,
         41.53
        ],
        [
         113.977,
         41.506
        ],
        [
         113.954,
         41.484
        ],
        [
         113.933,
         41.487
        ],
        [
         113.92,
         41.454
        ],
        [
         113.878,
         41.431
        ],
        [
         113.871,
         41.413
        ],
        [
         113.945,
         41.392
        ],
        [
         113.925,
         41.326
        ],
        [
         113.899,
         41.316
        ],
        [
         113.915,
         41.295
        ],
        [
         113.951,
         41.283
        ],
        [
         113.971,
         41.24
        ],
        [
         113.992,
         41.27
        ],
        [
         114.016,
         41.232
        ],
        [
         113.997,
         41.192
        ],
        [
         113.961,
         41.171
        ],
        [
         113.92,
         41.172
        ],
        [
         113.878,
         41.116
        ],
        [
         113.819,
         41.098
        ],
        [
         113.869,
         41.069
        ],
        [
         113.973,
         40.983
        ],
        [
         113.995,
         40.939
        ],
        [
         114.058,
         40.925
        ],
        [
         114.042,
         40.918
        ],
        [
         114.055,
         40.868
        ],
        [
         114.074,
         40.857
        ],
        [
         114.045,
         40.831
        ],
        [
         114.08,
         40.79
        ],
        [
         114.104,
         40.798
        ],
        [
         114.103,
         40.771
        ],
        [
         114.135,
         40.737
        ],
        [
         114.162,
         40.714
        ],
        [
         114.183,
         40.672
        ],
        [
         114.236,
         40.607
        ],
        [
         114.283,
         40.591
        ],
        [
         114.274,
         40.553
        ],
        [
         114.294,
         40.552
        ],
        [
         114.282,
         40.495
        ],
        [
         114.267,
         40.474
        ],
        [
         114.3,
         40.44
        ],
        [
         114.286,
         40.425
        ],
        [
         114.312,
         40.373
        ],
        [
         114.381,
         40.363
        ],
        [
         114.39,
         40.351
        ],
        [
         114.439,
         40.372
        ],
        [
         114.481,
         40.348
        ],
        [
         114.531,
         40.345
        ],
        [
         114.511,
         40.303
        ],
        [
         114.47,
         40.268
        ],
        [
         114.406,
         40.246
        ],
        [
         114.363,
         40.25
        ],
        [
         114.293,
         40.23
        ],
        [
         114.255,
         40.236
        ],
        [
         114.236,
         40.198
        ],
        [
         114.18,
         40.191
        ],
        [
         114.136,
         40.175
        ],
        [
         114.098,
         40.194
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.102,
         40.1
        ],
        [
         114.087,
         40.072
        ],
        [
         114.046,
         40.057
        ],
        [
         114.018,
         40.104
        ],
        [
         113.989,
         40.112
        ],
        [
         113.959,
         40.033
        ],
        [
         113.91,
         40.016
        ],
        [
         114.029,
         39.986
        ],
        [
         114.028,
         39.959
        ],
        [
         114.047,
         39.916
        ],
        [
         114.068,
         39.923
        ],
        [
         114.174,
         39.898
        ],
        [
         114.212,
         39.919
        ],
        [
         114.229,
         39.9
        ],
        [
         114.204,
         39.885
        ],
        [
         114.216,
         39.862
        ],
        [
         114.287,
         39.871
        ],
        [
         114.286,
         39.858
        ],
        [
         114.395,
         39.867
        ],
        [
         114.407,
         39.833
        ],
        [
         114.39,
         39.819
        ],
        [
         114.417,
         39.776
        ],
        [
         114.41,
         39.762
        ],
        [
         114.408,
         39.652
        ],
        [
         114.432,
         39.614
        ],
        [
         114.496,
         39.608
        ],
        [
         114.515,
         39.565
        ],
        [
         114.569,
         39.574
        ],
        [
         114.533,
         39.486
        ],
        [
         114.502,
         39.477
        ],
        [
         114.497,
         39.438
        ],
        [
         114.469,
         39.401
        ],
        [
         114.467,
         39.33
        ],
        [
         114.431,
         39.308
        ],
        [
         114.437,
         39.259
        ],
        [
         114.416,
         39.243
        ],
        [
         114.476,
         39.216
        ],
        [
         114.444,
         39.174
        ],
        [
         114.388,
         39.177
        ],
        [
         114.361,
         39.134
        ],
        [
         114.37,
         39.108
        ],
        [
         114.346,
         39.075
        ],
        [
         114.252,
         39.074
        ],
        [
         114.181,
         39.049
        ],
        [
         114.157,
         39.061
        ],
        [
         114.109,
         39.052
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.064,
         39.094
        ],
        [
         114.051,
         39.136
        ],
        [
         114.007,
         39.123
        ],
        [
         113.995,
         39.096
        ],
        [
         113.962,
         39.101
        ],
        [
         113.93,
         39.064
        ],
        [
         113.898,
         39.068
        ],
        [
         113.807,
         38.99
        ],
        [
         113.777,
         38.987
        ],
        [
         113.768,
         38.96
        ],
        [
         113.776,
         38.886
        ],
        [
         113.795,
         38.861
        ],
        [
         113.856,
         38.829
        ],
        [
         113.837,
         38.796
        ],
        [
         113.84,
         38.758
        ],
        [
         113.803,
         38.763
        ],
        [
         113.776,
         38.71
        ],
        [
         113.721,
         38.713
        ],
        [
         113.702,
         38.652
        ],
        [
         113.613,
         38.646
        ],
        [
         113.603,
         38.587
        ],
        [
         113.562,
         38.558
        ],
        [
         113.546,
         38.493
        ],
        [
         113.583,
         38.46
        ],
        [
         113.54,
         38.42
        ],
        [
         117.4,
         38.42
        ],
        [
         117.4,
         38.583
        ],
        [
         117.369,
         38.565
        ],
        [
         117.253,
         38.556
        ],
        [
         117.238,
         38.581
        ],
        [
         117.259,
         38.608
        ],
        [
         117.259,
         38.608
        ],
        [
         117.213,
         38.64
        ],
        [
         117.213,
         38.64
        ],
        [
         117.184,
         38.618
        ],
        [
         117.184,
         38.618
        ],
        [
         117.151,
         38.618
        ],
        [
         117.11,
         38.585
        ],
        [
         117.071,
         38.608
        ],
        [
         117.055,
         38.639
        ],
        [
         117.068,
         38.681
        ],
        [
         117.039,
         38.688
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.951,
         38.689
        ],
        [
         116.949,
         38.689
        ],
        [
         116.877,
         38.681
        ],
        [
         116.859,
         38.741
        ],
        [
         116.794,
         38.744
        ],
        [
         116.794,
         38.744
        ],
        [
         116.746,
         38.754
        ],
        [
         116.738,
         38.785
        ],
        [
         116.751,
         38.831
        ],
        [
         116.723,
         38.853
        ],
        [
         116.722,
         38.897
        ],
        [
         116.708,
         38.932
        ],
        [
         116.728,
         38.975
        ],
        [
         116.755,
         39.003
        ],
        [
         116.754,
         39.035
        ],
        [
         116.754,
         39.035
        ],
        [
         116.783,
         39.051
        ],
        [
         116.783,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.813,
         39.051
        ],
        [
         116.872,
         39.055
        ],
        [
         116.913,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.912,
         39.111
        ],
        [
         116.913,
         39.111
        ],
        [
         116.909,
         39.151
        ],
        [
         116.87,
         39.154
        ],
        [
         116.856,
         39.216
        ],
        [
         116.882,
         39.226
        ],
        [
         116.882,
         39.226
        ],
        [
         116.872,
         39.291
        ],
        [
         116.89,
         39.338
        ],
        [
         116.871,
         39.358
        ],
        [
         116.829,
         39.339
        ],
        [
         116.818,
         39.374
        ],
        [
         116.84,
         39.378
        ],
        [
         116.84,
         39.413
        ],
        [
         116.876,
         39.435
        ],
        [
         116.832,
         39.436
        ],
        [
         116.785,
         39.466
        ],
        [
         116.821,
         39.482
        ],
        [
         116.82,
         39.529
        ],
        [
         116.787,
         39.554
        ],
        [
         116.808,
         39.576
        ],
        [
         116.812,
         39.616
        ],
        [
         116.791,
         39.596
        ],
        [
         116.749,
         39.62
        ],
        [
         116.709,
         39.618
        ],
        [
         116.727,
         39.595
        ],
        [
         116.727,
         39.595
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.724,
         39.593
        ],
        [
         116.723,
         39.593
        ],
        [
         116.665,
         39.606
        ],
        [
         116.621,
         39.602
        ],
        [
         116.592,
         39.621
        ],
        [
         116.592,
         39.621
        ],
        [
         116.524,
         39.596
        ],
        [
         116.508,
         39.551
        ],
        [
         116.473,
         39.553
        ],
        [
         116.478,
         39.535
        ],
        [
         116.438,
         39.527
        ],
        [
         116.444,
         39.51
        ],
        [
         116.402,
         39.528
        ],
        [
         116.412,
         39.483
        ],
        [
         116.444,
         39.482
        ],
        [
         116.455,
         39.453
        ],
        [
         116.435,
         39.443
        ],
        [
         116.362,
         39.455
        ],
        [
         116.362,
         39.455
        ],
        [
         116.338,
         39.456
        ],
        [
         116.307,
         39.488
        ],
        [
         116.258,
         39.5
        ],
        [
         116.241,
         39.564
        ],
        [
         116.199,
         39.589
        ],
        [
         116.152,
         39.583
        ],
        [
         116.13,
         39.568
        ],
        [
         116.099,
         39.575
        ],
        [
         116.036,
         39.572
        ],
        [
         116.026,
         39.588
        ],
        [
         115.995,
         39.577
        ],
        [
         115.978,
         39.596
        ],
        [
         115.957,
         39.561
        ],
        [
         115.91,
         39.6
        ],
        [
         115.91,
         39.6
        ],
        [
         115.915,
         39.583
        ],
        [
         115.915,
         39.583
        ],
        [
         115.868,
         39.547
        ],
        [
         115.868,
         39.547
        ],
        [
         115.828,
         39.541
        ],
        [
         115.821,
         39.523
        ],
        [
         115.821,
         39.523
        ],
        [
         115.806,
         39.51
        ],
        [
         115.806,
         39.51
        ],
        [
         115.753,
         39.516
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.739,
         39.54
        ],
        [
         115.725,
         39.544
        ],
        [
         115.725,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.544
        ],
        [
         115.723,
         39.544
        ],
        [
         115.721,
         39.551
        ],
        [
         115.721,
         39.551
        ],
        [
         115.719,
         39.554
        ],
        [
         115.719,
         39.554
        ],
        [
         115.717,
         39.56
        ],
        [
         115.717,
         39.56
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.57
        ],
        [
         115.699,
         39.578
        ],
        [
         115.699,
         39.578
        ],
        [
         115.668,
         39.615
        ],
        [
         115.634,
         39.6
        ],
        [
         115.634,
         39.6
        ],
        [
         115.587,
         39.59
        ],
        [
         115.546,
         39.619
        ],
        [
         115.518,
         39.597
        ],
        [
         115.522,
         39.64
        ],
        [
         115.479,
         39.651
        ],
        [
         115.479,
         39.651
        ],
        [
         115.492,
         39.67
        ],
        [
         115.487,
         39.742
        ],
        [
         115.44,
         39.752
        ],
        [
         115.444,
         39.786
        ],
        [
         115.484,
         39.798
        ],
        [
         115.484,
         39.798
        ],
        [
         115.506,
         39.784
        ],
        [
         115.553,
         39.795
        ],
        [
         115.567,
         39.816
        ],
        [
         115.514,
         39.838
        ],
        [
         115.526,
         39.876
        ],
        [
         115.516,
         39.892
        ],
        [
         115.516,
         39.892
        ],
        [
         115.523,
         39.899
        ],
        [
         115.481,
         39.936
        ],
        [
         115.426,
         39.951
        ],
        [
         115.429,
         39.984
        ],
        [
         115.45,
         39.993
        ],
        [
         115.455,
         40.03
        ],
        [
         115.485,
         40.04
        ],
        [
         115.527,
         40.076
        ],
        [
         115.591,
         40.096
        ],
        [
         115.6,
         40.12
        ],
        [
         115.755,
         40.146
        ],
        [
         115.755,
         40.146
        ],
        [
         115.774,
         40.176
        ],
        [
         115.806,
         40.153
        ],
        [
         115.848,
         40.147
        ],
        [
         115.856,
         40.189
        ],
        [
         115.87,
         40.186
        ],
        [
         115.899,
         40.234
        ],
        [
         115.969,
         40.264
        ],
        [
         115.952,
         40.282
        ],
        [
         115.918,
         40.354
        ],
        [
         115.864,
         40.359
        ],
        [
         115.772,
         40.444
        ],
        [
         115.781,
         40.493
        ],
        [
         115.736,
         40.503
        ],
        [
         115.755,
         40.54
        ],
        [
         115.785,
         40.558
        ],
        [
         115.82,
         40.559
        ],
        [
         115.828,
         40.588
        ],
        [
         115.885,
         40.595
        ],
        [
         115.908,
         40.617
        ],
        [
         115.972,
         40.602
        ],
        [
         115.982,
         40.579
        ],
        [
         116.005,
         40.584
        ],
        [
         116.099,
         40.631
        ],
        [
         116.134,
         40.667
        ],
        [
         116.163,
         40.662
        ],
        [
         116.172,
         40.696
        ],
        [
         116.205,
         40.74
        ],
        [
         116.22,
         40.744
        ],
        [
         116.247,
         40.792
        ],
        [
         116.273,
         40.763
        ],
        [
         116.311,
         40.755
        ],
        [
         116.317,
         40.772
        ],
        [
         116.454,
         40.766
        ],
        [
         116.466,
         40.774
        ],
        [
         116.438,
         40.819
        ],
        [
         116.334,
         40.904
        ],
        [
         116.34,
         40.929
        ],
        [
         116.37,
         40.944
        ],
        [
         116.398,
         40.906
        ],
        [
         116.477,
         40.9
        ],
        [
         116.447,
         40.954
        ],
        [
         116.455,
         40.981
        ],
        [
         116.52,
         40.981
        ],
        [
         116.52,
         40.981
        ],
        [
         116.568,
         40.993
        ],
        [
         116.598,
         40.975
        ],
        [
         116.623,
         41.021
        ],
        [
         116.616,
         41.053
        ],
        [
         116.648,
         41.059
        ],
        [
         116.688,
         41.045
        ],
        [
         116.699,
         41.021
        ],
        [
         116.678,
         40.971
        ],
        [
         116.722,
         40.927
        ],
        [
         116.714,
         40.91
        ],
        [
         116.76,
         40.89
        ],
        [
         116.813,
         40.848
        ],
        [
         116.848,
         40.839
        ],
        [
         116.924,
         40.774
        ],
        [
         116.927,
         40.745
        ],
        [
         116.965,
         40.71
        ],
        [
         117.012,
         40.694
        ],
        [
         117.112,
         40.707
        ],
        [
         117.117,
         40.7
        ],
        [
         117.208,
         40.695
        ],
        [
         117.278,
         40.664
        ],
        [
         117.32,
         40.658
        ],
        [
         117.342,
         40.674
        ],
        [
         117.4,
         40.685
        ],
        [
         117.4,
         40.565
        ]
       ]
      ],
      [
       [
        [
         117.21,
         40.082
        ],
        [
         117.204,
         40.07
        ],
        [
         117.16,
         40.077
        ],
        [
         117.14,
         40.064
        ],
        [
         117.105,
         40.074
        ],
        [
         117.105,
         40.074
        ],
        [
         117.052,
         40.06
        ],
        [
         117.025,
         40.03
        ],
        [
         116.945,
         40.041
        ],
        [
         116.928,
         40.055
        ],
        [
         116.868,
         40.042
        ],
        [
         116.831,
         40.051
        ],
        [
         116.82,
         40.028
        ],
        [
         116.781,
         40.035
        ],
        [
         116.758,
         39.968
        ],
        [
         116.783,
         39.948
        ],
        [
         116.784,
         39.891
        ],
        [
         116.812,
         39.89
        ],
        [
         116.866,
         39.844
        ],
        [
         116.908,
         39.832
        ],
        [
         116.918,
         39.846
        ],
        [
         116.949,
         39.779
        ],
        [
         116.902,
         39.764
        ],
        [
         116.917,
         39.731
        ],
        [
         116.887,
         39.725
        ],
        [
         116.89,
         39.688
        ],
        [
         116.906,
         39.688
        ],
        [
         116.932,
         39.706
        ],
        [
         116.932,
         39.706
        ],
        [
         116.945,
         39.695
        ],
        [
         116.945,
         39.695
        ],
        [
         116.949,
         39.681
        ],
        [
         116.949,
         39.681
        ],
        [
         116.964,
         39.643
        ],
        [
         116.983,
         39.639
        ],
        [
         116.983,
         39.639
        ],
        [
         117.016,
         39.654
        ],
        [
         117.109,
         39.625
        ],
        [
         117.109,
         39.625
        ],
        [
         117.153,
         39.624
        ],
        [
         117.178,
         39.645
        ],
        [
         117.165,
         39.719
        ],
        [
         117.165,
         39.719
        ],
        [
         117.162,
         39.749
        ],
        [
         117.206,
         39.764
        ],
        [
         117.158,
         39.797
        ],
        [
         117.156,
         39.817
        ],
        [
         117.192,
         39.833
        ],
        [
         117.252,
         39.834
        ],
        [
         117.248,
         39.861
        ],
        [
         117.228,
         39.853
        ],
        [
         117.163,
         39.877
        ],
        [
         117.163,
         39.877
        ],
        [
         117.151,
         39.945
        ],
        [
         117.198,
         39.993
        ],
        [
         117.192,
         40.066
        ],
        [
         117.21,
         40.082
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
         112.3,
         38.42
        ],
        [
         113.54,
         38.42
        ],
        [
         113.583,
         38.46
        ],
        [
         113.546,
         38.493
        ],
        [
         113.562,
         38.558
        ],
        [
         113.603,
         38.587
        ],
        [
         113.613,
         38.646
        ],
        [
         113.702,
         38.652
        ],
        [
         113.721,
         38.713
        ],
        [
         113.776,
         38.71
        ],
        [
         113.803,
         38.763
        ],
        [
         113.84,
         38.758
        ],
        [
         113.837,
         38.796
        ],
        [
         113.856,
         38.829
        ],
        [
         113.795,
         38.861
        ],
        [
         113.776,
         38.886
        ],
        [
         113.768,
         38.96
        ],
        [
         113.777,
         38.987
        ],
        [
         113.807,
         38.99
        ],
        [
         113.898,
         39.068
        ],
        [
         113.93,
         39.064
        ],
        [
         113.962,
         39.101
        ],
        [
         113.995,
         39.096
        ],
        [
         114.007,
         39.123
        ],
        [
         114.051,
         39.136
        ],
        [
         114.064,
         39.094
        ],
        [
         114.083,
         39.093
        ],
        [
         114.083,
         39.093
        ],
        [
         114.109,
         39.052
        ],
        [
         114.157,
         39.061
        ],
        [
         114.181,
         39.049
        ],
        [
         114.252,
         39.074
        ],
        [
         114.346,
         39.075
        ],
        [
         114.37,
         39.108
        ],
        [
         114.361,
         39.134
        ],
        [
         114.388,
         39.177
        ],
        [
         114.444,
         39.174
        ],
        [
         114.476,
         39.216
        ],
        [
         114.416,
         39.243
        ],
        [
         114.437,
         39.259
        ],
        [
         114.431,
         39.308
        ],
        [
         114.467,
         39.33
        ],
        [
         114.469,
         39.401
        ],
        [
         114.497,
         39.438
        ],
        [
         114.502,
         39.477
        ],
        [
         114.533,
         39.486
        ],
        [
         114.569,
         39.574
        ],
        [
         114.515,
         39.565
        ],
        [
         114.496,
         39.608
        ],
        [
         114.432,
         39.614
        ],
        [
         114.408,
         39.652
        ],
        [
         114.41,
         39.762
        ],
        [
         114.417,
         39.776
        ],
        [
         114.39,
         39.819
        ],
        [
         114.407,
         39.833
        ],
        [
         114.395,
         39.867
        ],
        [
         114.286,
         39.858
        ],
        [
         114.287,
         39.871
        ],
        [
         114.216,
         39.862
        ],
        [
         114.204,
         39.885
        ],
        [
         114.229,
         39.9
        ],
        [
         114.212,
         39.919
        ],
        [
         114.174,
         39.898
        ],
        [
         114.068,
         39.923
        ],
        [
         114.047,
         39.916
        ],
        [
         114.028,
         39.959
        ],
        [
         114.029,
         39.986
        ],
        [
         113.91,
         40.016
        ],
        [
         113.959,
         40.033
        ],
        [
         113.989,
         40.112
        ],
        [
         114.018,
         40.104
        ],
        [
         114.046,
         40.057
        ],
        [
         114.087,
         40.072
        ],
        [
         114.102,
         40.1
        ],
        [
         114.073,
         40.169
        ],
        [
         114.073,
         40.169
        ],
        [
         114.098,
         40.194
        ],
        [
         114.136,
         40.175
        ],
        [
         114.18,
         40.191
        ],
        [
         114.236,
         40.198
        ],
        [
         114.255,
         40.236
        ],
        [
         114.293,
         40.23
        ],
        [
         114.363,
         40.25
        ],
        [
         114.406,
         40.246
        ],
        [
         114.47,
         40.268
        ],
        [
         114.511,
         40.303
        ],
        [
         114.531,
         40.345
        ],
        [
         114.481,
         40.348
        ],
        [
         114.439,
         40.372
        ],
        [
         114.39,
         40.351
        ],
        [
         114.381,
         40.363
        ],
        [
         114.312,
         40.373
        ],
        [
         114.286,
         40.425
        ],
        [
         114.3,
         40.44
        ],
        [
         114.267,
         40.474
        ],
        [
         114.282,
         40.495
        ],
        [
         114.294,
         40.552
        ],
        [
         114.274,
         40.553
        ],
        [
         114.283,
         40.591
        ],
        [
         114.236,
         40.607
        ],
        [
         114.183,
         40.672
        ],
        [
         114.162,
         40.714
        ],
        [
         114.135,
         40.737
        ],
        [
         114.085,
         40.73
        ],
        [
         114.064,
         40.707
        ],
        [
         114.072,
         40.679
        ],
        [
         114.042,
         40.609
        ],
        [
         114.077,
         40.576
        ],
        [
         114.08,
         40.548
        ],
        [
         114.062,
         40.529
        ],
        [
         114.011,
         40.516
        ],
        [
         113.949,
         40.515
        ],
        [
         113.89,
         40.467
        ],
        [
         113.851,
         40.461
        ],
        [
         113.795,
         40.518
        ],
        [
         113.763,
         40.474
        ],
        [
         113.689,
         40.448
        ],
        [
         113.56,
         40.348
        ],
        [
         113.5,
         40.334
        ],
        [
         113.388,
         40.319
        ],
        [
         113.317,
         40.32
        ],
        [
         113.276,
         40.389
        ],
        [
         113.251,
         40.413
        ],
        [
         113.083,
         40.375
        ],
        [
         113.033,
         40.369
        ],
        [
         112.898,
         40.329
        ],
        [
         112.849,
         40.207
        ],
        [
         112.744,
         40.167
        ],
        [
         112.712,
         40.179
        ],
        [
         112.63,
         40.236
        ],
        [
         112.512,
         40.269
        ],
        [
         112.456,
         40.3
        ],
        [
         112.418,
         40.295
        ],
        [
         112.349,
         40.257
        ],
        [
         112.31,
         40.256
        ],
        [
         112.3,
         40.212
        ],
        [
         112.3,
         38.42
        ]
       ]
      ]
     ]
    },
    "n": "山西省"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        112.3,
        41.62
       ],
       [
        112.3,
        40.212
       ],
       [
        112.31,
        40.256
       ],
       [
        112.349,
        40.257
       ],
       [
        112.418,
        40.295
       ],
       [
        112.456,
        40.3
       ],
       [
        112.512,
        40.269
       ],
       [
        112.63,
        40.236
       ],
       [
        112.712,
        40.179
       ],
       [
        112.744,
        40.167
       ],
       [
        112.849,
        40.207
       ],
       [
        112.898,
        40.329
       ],
       [
        113.033,
        40.369
       ],
       [
        113.083,
        40.375
       ],
       [
        113.251,
        40.413
       ],
       [
        113.276,
        40.389
       ],
       [
        113.317,
        40.32
       ],
       [
        113.388,
        40.319
       ],
       [
        113.5,
        40.334
       ],
       [
        113.56,
        40.348
       ],
       [
        113.689,
        40.448
       ],
       [
        113.763,
        40.474
       ],
       [
        113.795,
        40.518
       ],
       [
        113.851,
        40.461
       ],
       [
        113.89,
        40.467
       ],
       [
        113.949,
        40.515
       ],
       [
        114.011,
        40.516
       ],
       [
        114.062,
        40.529
       ],
       [
        114.08,
        40.548
       ],
       [
        114.077,
        40.576
       ],
       [
        114.042,
        40.609
       ],
       [
        114.072,
        40.679
       ],
       [
        114.064,
        40.707
       ],
       [
        114.085,
        40.73
       ],
       [
        114.135,
        40.737
       ],
       [
        114.103,
        40.771
       ],
       [
        114.104,
        40.798
       ],
       [
        114.08,
        40.79
       ],
       [
        114.045,
        40.831
       ],
       [
        114.074,
        40.857
       ],
       [
        114.055,
        40.868
       ],
       [
        114.042,
        40.918
       ],
       [
        114.058,
        40.925
       ],
       [
        113.995,
        40.939
       ],
       [
        113.973,
        40.983
       ],
       [
        113.869,
        41.069
       ],
       [
        113.819,
        41.098
       ],
       [
        113.878,
        41.116
       ],
       [
        113.92,
        41.172
       ],
       [
        113.961,
        41.171
       ],
       [
        113.997,
        41.192
       ],
       [
        114.016,
        41.232
       ],
       [
        113.992,
        41.27
       ],
       [
        113.971,
        41.24
       ],
       [
        113.951,
        41.283
       ],
       [
        113.915,
        41.295
       ],
       [
        113.899,
        41.316
       ],
       [
        113.925,
        41.326
       ],
       [
        113.945,
        41.392
       ],
       [
        113.871,
        41.413
       ],
       [
        113.878,
        41.431
       ],
       [
        113.92,
        41.454
       ],
       [
        113.933,
        41.487
       ],
       [
        113.954,
        41.484
       ],
       [
        113.977,
        41.506
       ],
       [
        114.032,
        41.53
       ],
       [
        114.101,
        41.538
       ],
       [
        114.231,
        41.514
       ],
       [
        114.221,
        41.582
       ],
       [
        114.226,
        41.617
       ],
       [
        114.243,
        41.62
       ],
       [
        114.879,
        41.62
       ],
       [
        114.861,
        41.601
       ],
       [
        115.016,
        41.615
       ],
       [
        115.056,
        41.602
       ],
       [
        115.092,
        41.62
       ],
       [
        115.116,
        41.62
       ],
       [
        115.195,
        41.602
       ],
       [
        115.204,
        41.571
       ],
       [
        115.257,
        41.581
       ],
       [
        115.266,
        41.616
       ],
       [
        115.28,
        41.62
       ],
       [
        115.292,
        41.62
       ],
       [
        115.31,
        41.593
       ],
       [
        115.378,
        41.603
       ],
       [
        115.361,
        41.62
       ],
       [
        112.3,
        41.62
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   }
  ],
  "rivers": [],
  "lakes": [],
  "_bbox": [
   112.3,
   38.42,
   117.4,
   41.62
  ]
 }
};
