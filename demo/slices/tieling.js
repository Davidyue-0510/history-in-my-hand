// 本文件由 tools/build.py 自动生成（切片 tieling），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["tieling"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["tieling"] = {
 "meta": {
  "kind": "county",
  "region": "liaobei",
  "title": "铁岭",
  "dossier_label": "铁岭",
  "subtitle": "李成梁故里 · 辽东锁钥 · 万历四十七年陷落",
  "primary_place": "tieling_cheng",
  "dossier_event": "event:tieling_fall",
  "back": "枢纽",
  "lead": "铁岭是辽东锁钥：李成梁故里，明九边之首卫所；万历四十七年（1619）随开原同年陷落，李氏家族百年经营的防线就此终结。下方为建置沿革与关键事件。",
  "parties_note": "铁岭陷落（1619）与李成梁功过，在明、清、现代综述中各有侧重。系统不裁决，只并列。",
  "subject_names": {
   "event:tieling_fall": "铁岭陷落",
   "event:kuanbian_abandon": "弃宽甸六堡",
   "event:sarhu": "萨尔浒之战",
   "place:tieling_cheng": "铁岭城",
   "person:li_chengliang": "李成梁",
   "person:li_ruzhui": "李如柏",
   "person:wang_gao": "王杲",
   "person:yanghao": "杨镐",
   "person:xiongtingbing": "熊廷弼"
  },
  "page": "county.html?scene=tieling",
  "key": "tieling",
  "scene_id": "tieling",
  "vocab_pack": "ming_qing",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "party": "清修·明臣",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739，距事件约 120 年",
   "color": "#8C6239",
   "compiler": "张廷玉等",
   "period": "清修",
   "stance": "official_later_dynasty"
  },
  {
   "id": "ming_taizu_shilu",
   "title": "明太祖实录",
   "party": "明廷官方",
   "stance_label": "本朝官修·当代",
   "distance_label": "三修至 1418，距洪武建置约 30 年",
   "color": "#A0473A",
   "compiler": "明史馆",
   "period": "洪武朝",
   "stance": "official_contemporary"
  },
  {
   "id": "qing_taizu_shilu",
   "title": "清太祖实录",
   "party": "清修官史",
   "stance_label": "敌方官修",
   "distance_label": "初纂 1636 后屡经改窜，距事件 17 年以上",
   "color": "#7B5C3E",
   "compiler": "清实录馆",
   "period": "天命",
   "stance": "official_enemy"
  },
  {
   "id": "modern",
   "title": "现代史学综述",
   "party": "学界",
   "stance_label": "学界考证",
   "distance_label": "距事件 300 年以上，综合诸家",
   "color": "#2E7D8F",
   "compiler": "多家学术著作",
   "period": "现代",
   "stance": "scholarship"
  },
  {
   "id": "wiki",
   "title": "维基百科",
   "party": "二手综述",
   "stance_label": "三手综述",
   "distance_label": "当代，未经同行评议；任何依赖它的断言都是待升级项",
   "color": "#9B7B5A",
   "compiler": "公众编辑",
   "period": "现代",
   "stance": "tertiary"
  }
 ],
 "places": [
  {
   "id": "tieling_cheng",
   "name": "铁岭城",
   "lon": 124.31,
   "lat": 42.3,
   "type": "city",
   "modern": "辽宁省铁岭市银州区",
   "note": "明洪武二十六年(1393)徙铁岭卫治于此, 以辽代银州古城为依托",
   "_global_id": "tieling",
   "_other_scenes": [
    "kaiyuan",
    "liaoyang"
   ],
   "elev": 238
  },
  {
   "id": "fengjibao",
   "name": "奉集堡",
   "lon": 123.51,
   "lat": 41.69,
   "type": "wei",
   "modern": "沈阳市苏家屯区塔山一带",
   "note": "洪武二十一年(1388)铁岭卫最初设置地, 后徒至银州",
   "elev": 51
  },
  {
   "id": "kaiyuan_cheng",
   "name": "开原城",
   "lon": 124.04,
   "lat": 42.55,
   "type": "city",
   "modern": "辽宁省开原市",
   "note": "铁岭南向最近卫城, 萨尔浒之战马林北路军征调来自开原",
   "_global_id": "kaiyuan_cheng",
   "_other_scenes": [
    "kaiyuan",
    "liaoyang"
   ],
   "elev": 85
  },
  {
   "id": "shenyang",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.81,
   "type": "city",
   "modern": "辽宁省沈阳市",
   "note": "辽东重镇, 奉集堡在其东南, 萨尔浒之战西路杜松军从沈阳出",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "guangning",
    "haizhou",
    "kaiyuan",
    "liaoyang"
   ],
   "elev": 50
  },
  {
   "id": "fushun",
   "name": "抚顺",
   "lon": 123.94,
   "lat": 41.86,
   "type": "guan",
   "modern": "辽宁抚顺市",
   "note": "萨尔浒之战西路主攻出发地, 万历四十六年(1618)先陷",
   "_global_id": "fushun",
   "_other_scenes": [
    "kaiyuan",
    "liaoyang",
    "shenyang"
   ],
   "elev": 76
  },
  {
   "id": "yageguan",
   "name": "鸦鹘关",
   "lon": 124.3,
   "lat": 41.66,
   "type": "guan",
   "modern": "辽宁新宾满族自治县西南",
   "note": "萨尔浒之战南路李如柏军出鸦鹘关",
   "_global_id": "yahuguan",
   "_other_scenes": [
    "sarhu"
   ],
   "elev": 531
  },
  {
   "id": "hetu_ala",
   "name": "赫图阿拉",
   "lon": 124.85,
   "lat": 41.89,
   "type": "capital",
   "modern": "辽宁新宾满族自治县老城村",
   "note": "努尔哈赤起家之地, 萨尔浒之战明军四路围的目标",
   "_global_id": "hetuala",
   "_other_scenes": [
    "fushun",
    "kaiyuan",
    "liaoyang",
    "sarhu",
    "shenyang",
    "yehe"
   ],
   "elev": 586
  },
  {
   "id": "kuanbian",
   "name": "宽甸六堡",
   "lon": 124.3,
   "lat": 40.73,
   "type": "wei",
   "modern": "辽宁宽甸满族自治县一带",
   "note": "万历初李成梁献议兴建, 万历三十四年(1606)放弃, 迁民6万余户",
   "_global_id": "kuandian",
   "_other_scenes": [
    "fushun"
   ],
   "elev": 241
  },
  {
   "id": "liaoyang",
   "name": "辽阳",
   "lon": 123.18,
   "lat": 41.27,
   "type": "city",
   "modern": "辽宁省辽阳市",
   "note": "辽东都司治所, 铁岭后方的明代北南主轴",
   "_global_id": "liaoyang_cheng",
   "_other_scenes": [
    "haizhou",
    "kaiyuan",
    "shenyang"
   ],
   "elev": 23
  },
  {
   "id": "sarhu",
   "name": "萨尔浒",
   "lon": 124.32,
   "lat": 41.97,
   "type": "city",
   "modern": "辽宁抚顺东大伙房水库附近",
   "note": "萨尔浒之战主战场, 铁岭卫指挥使属北路军战区",
   "_global_id": "sarhu",
   "_other_scenes": [
    "kaiyuan",
    "sarhu"
   ],
   "elev": 195
  },
  {
   "id": "jinganbao",
   "name": "靖安堡",
   "lon": 124.2,
   "lat": 42.3,
   "type": "guan",
   "modern": "辽宁开原东边墙附近",
   "note": "萨尔浒之战北路马林军出开原后经此进",
   "elev": 171
  }
 ],
 "persons": [
  {
   "id": "li_chengliang",
   "name": "李成梁",
   "role": "辽东总兵",
   "side": "ming",
   "note": "铁岭卫人, 1526-1615, 镇辽30年, 先后十奏大捷. 高祖李英自朝鲜内附.",
   "influence": 7,
   "_global_id": "li_chengliang",
   "_other_scenes": [
    "fushun"
   ]
  },
  {
   "id": "li_rusong",
   "name": "李如松",
   "role": "总兵",
   "side": "ming",
   "note": "李成梁长子, 抗倭援朝, 宁夏哱拜之战, 万历二十六年(1598)蒙古入侵中伏阵亡",
   "influence": 0,
   "_global_id": "li_rusong",
   "_other_scenes": [
    "imjin"
   ]
  },
  {
   "id": "li_ruzhui",
   "name": "李如柏",
   "role": "辽东总兵",
   "side": "ming",
   "note": "李成梁次子, 萨尔浒之战南路军统帅, 因三路败未接战撤退, 天启元年(1621)被弹劾自杀",
   "influence": 1,
   "_global_id": "li_rubai",
   "_other_scenes": [
    "fushun",
    "sarhu"
   ]
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "side": "qing",
   "note": "建州女真首领, 1619年七月亲领兵攻占铁岭",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "guangning",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang"
   ]
  },
  {
   "id": "wang_gao",
   "name": "王杲",
   "role": "建州女真首领",
   "side": "jianzhou",
   "note": "李成梁万历二年(1574)讨之, 万历十年(1582)阿台在此被射死",
   "influence": 0
  },
  {
   "id": "xiongtingbing",
   "name": "熊廷弼",
   "role": "辽东经略",
   "side": "ming",
   "note": "巡按辽东, 勘奏弃宽甸六堡非策, 后任经略",
   "influence": 10,
   "_global_id": "xiongtingbing",
   "_other_scenes": [
    "guangning",
    "kaiyuan"
   ]
  },
  {
   "id": "yanghao",
   "name": "杨镐",
   "role": "辽东经略",
   "side": "ming",
   "note": "萨尔浒之战明军最高统帅, 三路败后李如柏撤回",
   "influence": 0,
   "_global_id": "yanggao",
   "_other_scenes": [
    "sarhu"
   ]
  },
  {
   "id": "dubao",
   "name": "杜松",
   "role": "山海关总兵 / 西路军主将",
   "side": "ming",
   "note": "西路军统帅出抚顺, 萨尔浒之战阵亡",
   "influence": 0,
   "_global_id": "dusong",
   "_other_scenes": [
    "sarhu"
   ]
  }
 ],
 "assertions": [
  {
   "id": "T001",
   "subject": "place:tieling_cheng",
   "predicate": "建置年",
   "value_text": "1388 年 (洪武 21 年三月) 置铁岭卫指挥使司, 初设奉集堡",
   "source": "ming_taizu_shilu",
   "layer": "record",
   "era": "洪武二十一年三月",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武二十一年三月, 置铁岭卫指挥使司于奉集堡。先是元将拔金完哥率其部属金千吉等来附, 至是, 遣指挥佥事李文、高颙, 镇抚杜锡, 置卫于奉集县, 以抚安其众。",
   "note": "依《明太祖实录》; 奉集堡与朝鲜铁岭系两地同名, 此铁岭卫与朝鲜半岛无关。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "T002",
   "subject": "place:tieling_cheng",
   "predicate": "徙治年",
   "value_text": "1393 年 (洪武 26 年四月) 徙铁岭卫治于古银州",
   "source": "ming_taizu_shilu",
   "layer": "record",
   "era": "洪武二十六年四月",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "徙辽东铁岭卫治于沈阳、开元两界古嚚州之地。",
   "note": "嚚州即银州, 今铁岭市银州区。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "T003",
   "subject": "person:li_chengliang",
   "predicate": "族裔",
   "value_text": "高祖李英自朝鲜内附, 授世铁岭卫指挥佥事, 遂家焉",
   "source": "mingshi",
   "layer": "record",
   "era": "明代正史",
   "place": "tieling_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "李成梁字汝契, 高祖英自朝鲜内附, 授世铁岭卫指挥佥事, 遂家焉。",
   "note": "李成梁的族裔身份 (朝鲜系) 是李如松辈争议的话题, 章炳麟《訄书》曾为李成梁作赞。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T004",
   "subject": "person:li_chengliang",
   "predicate": "任总兵",
   "value_text": "隆庆四年 (1570) 九月, 代殉职王治道任辽东总兵",
   "source": "mingshi",
   "layer": "record",
   "era": "隆庆四年九月",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "四年九月锡林阿大入辽东, 总兵王治道战死, 擢成梁署都督佥事代之。",
   "note": "辽东总兵驻节广宁 (今北镇), 非铁岭; 铁岭是李成梁故里与户籍。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T005",
   "subject": "person:li_chengliang",
   "predicate": "武功评价",
   "value_text": "镇辽 30 年, 先后十奏大捷, 边帅武功之盛 200 年来所未有",
   "source": "mingshi",
   "layer": "record",
   "era": "明代正史",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "成梁镇辽 22 年, 先后奏大捷者十, 帝辄祭告郊庙, 受廷臣贺。蟒衣金缯, 岁赐稠叠。边帅武功之盛, 二百年来未有也。",
   "note": "明史明方赞美; 现代综述批评其虚报战功、杀平民冒级, 构成 record_vs_scholarship 冲突。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T006",
   "subject": "event:kuanbian_abandon",
   "predicate": "弃宽甸六堡",
   "value_text": "万历 34 年 (1606) 弃宽甸六堡, 迁民 6 万余户",
   "source": "mingshi",
   "layer": "record",
   "era": "万历三十四年",
   "place": "kuanbian",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "三十四年成梁以地孤悬难守, 与督抚蹇达、赵楫建议弃之, 尽徙居民于内地。居民恋家室, 则以大军驱迫之, 死者狼籍。",
   "note": "六年累计生聚 6 万 4 千余户, 一夕尽弃。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T007",
   "subject": "event:kuanbian_abandon",
   "predicate": "弃地年间",
   "value": "1606",
   "source": "mingshi",
   "layer": "record",
   "era": "万历三十四年",
   "place": "kuanbian",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "万历三十四年，成梁以宽甸六堡孤悬难守，奏请弃之，徙其民六万余户于内地。",
   "note": "明史万历三十四年 (1606); 部份二手综述记万历三十六年 (1608), 数值上为冲突。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T007b",
   "subject": "event:kuanbian_abandon",
   "predicate": "弃地年间",
   "value": 1608,
   "source": "wiki",
   "layer": "scholarship",
   "era": "万历三十六年",
   "place": "kuanbian",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "维基记 1608; 与明史 1606 相差 2 年, 来源尚未点校核实。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "T008",
   "subject": "person:li_chengliang",
   "predicate": "后任更易",
   "value_text": "李成梁去辽十年间, 辽东更易八帅",
   "source": "mingshi",
   "layer": "record",
   "era": "万历十九年 (1591) 解任后",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "成梁去辽十年之间, 更易八帅, 边备益弛。",
   "note": "万历十九年解任, 二十六年成梁复镇, 期间如马林等八人。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T009",
   "subject": "person:li_chengliang",
   "predicate": "卒年",
   "value": 1615,
   "source": "mingshi",
   "layer": "record",
   "era": "万历四十三年",
   "place": "tieling_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "万历四十三年 (1615) 卒, 享年九十。",
   "note": "公历 1615 年; 明史本传数值。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T010",
   "subject": "person:li_ruzhui",
   "predicate": "南路军统帅",
   "value_text": "李如柏任辽东总兵, 率南路军 2.5 万人由清河出鸦鹘关",
   "source": "mingshi",
   "layer": "record",
   "era": "万历四十七年二月",
   "place": "yageguan",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "李如柏时任辽东总兵, 由清河出鸦鹘关, 指向兴京老城。",
   "note": "李如柏是李成梁次子, 萨尔浒之战南路军主将。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T011",
   "subject": "event:tieling_fall",
   "predicate": "陷落时间",
   "value_text": "1619 年 (万历 47 年) 七月, 努尔哈赤亲自领兵攻占铁岭",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "万历四十七年七月",
   "place": "tieling_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "七月, 努尔哈赤亲自领兵攻占铁岭。",
   "note": "开铁之战六月开原、七月铁岭, 实为同一次战事两阶段。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "T011b",
   "subject": "event:tieling_fall",
   "predicate": "陷落时间",
   "value_text": "1619 年 (万历 47 年) 七月, 明军来自铁岭的援兵被击败",
   "source": "modern",
   "layer": "scholarship",
   "era": "万历四十七年七月",
   "place": "tieling_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "明总兵马林战死, 来自铁岭的援兵也被击败。",
   "note": "现代综述补全了清实录中略写的明方动态。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "T012",
   "subject": "event:tieling_fall",
   "predicate": "陷落兵力",
   "value": 4,
   "source": "wiki",
   "layer": "scholarship",
   "era": "万历四十七年",
   "place": "tieling_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "维基记后金兵 4 万; 清实录原文仅记『万骑』。数字未严格对照。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "T013",
   "subject": "person:li_chengliang",
   "predicate": "现代评价",
   "value_text": "李成梁晚年位望益隆, 贵极而骄, 奢修无度, 虚报战功, 杀平民冒级",
   "source": "modern",
   "layer": "scholarship",
   "era": "现代综述",
   "place": "tieling_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "李成梁位望益隆, 贵极而骄, 奢修无度, 军资马价盐课市赏乾没不资, 虚报战功, 杀平民冒级。",
   "note": "与 T005 (明史赞美) 构成 record_vs_scholarship 冲突; 现代综述与明史立场差。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "T014",
   "subject": "person:li_chengliang",
   "predicate": "弃宽甸六堡评价",
   "value_text": "明朝熊廷弼、宋一韩勘奏弃宽甸六堡非策, 与李成梁意见对立",
   "source": "mingshi",
   "layer": "record",
   "era": "万历三十四年",
   "place": "kuanbian",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "兵科给事中宋一韩力言弃地非策, 巡按御史熊廷弼勘奏如一韩言。",
   "note": "事件认同, 评价对立; 可作为内部冲突对带出现。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "T015",
   "subject": "place:tieling_cheng",
   "predicate": "清初建置",
   "value_text": "1664 年 (康熙 3 年) 废铁岭卫设铁岭县, 属奉天府",
   "source": "modern",
   "layer": "scholarship",
   "era": "清康熙三年",
   "place": "tieling_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "清康熙三年废卫设县, 铁岭、开原县属奉天府。",
   "note": "铁岭卫→铁岭县转型, 民国起入辽宁省。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "T016",
   "subject": "event:tieling_fall",
   "predicate": "陷落兵数详考",
   "value_text": "缺口：铁岭陷落双方具体兵力与伤亡——清实录仅泛言「万骑」，明方奏报无细目",
   "value": null,
   "source": "qing_taizu_shilu",
   "layer": "gap",
   "era": "万历四十七年",
   "place": "tieling_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "缺口: 铁岭陷落时双方具体兵力伤亡数字, 清实录未明载, 仅有『万骑』出入。",
   "lead": {
    "where": "《明神宗实录》万历四十七年铁岭失事勘状; 《清太祖实录》天命四年「克铁岭」条; 明方辽东巡按/总督勘报; 《满文老档》相应月档。",
    "skills": [
     "古文",
     "统计"
    ],
    "accept": "给出双方兵力与伤亡区间, 澄清「万骑」的口径(是否为后金总动员而非攻铁岭专属兵力), 并说明明方奏报无细目的制度原因。",
    "effort": "2 周"
   },
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "T017",
   "subject": "event:tieling_fall",
   "predicate": "朝鲜视角",
   "value_text": "缺口：朝鲜实录对铁岭陷落是否有专条记载，待核（李成梁祖籍朝鲜，朝方或有关注）",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "万历四十七年",
   "place": "tieling_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "缺口: 李成梁为朝鲜族裔, 朝鲜实录对铁岭陷落是否有针对记载, 待核查。",
   "lead": {
    "where": "朝鲜《李朝实录》光海君日记 万历四十七年; 《朝鲜宣祖/光海君实录》中李成梁相关记事; 《燃藜室记述》。",
    "skills": [
     "朝语",
     "古文"
    ],
    "accept": "确认朝鲜实录是否对铁岭(李成梁起家地)陷落有专条, 录入其评价与情绪基调, 评估「朝鲜族裔将领故地」是否影响朝方叙事权重。",
    "effort": "1-2 周"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "T018",
   "subject": "event:tieling_fall",
   "predicate": "明廷反应",
   "value_text": "铁岭陷落后, 明廷起用熊廷弼为辽东经略, 采取『坚守进逼』策",
   "source": "modern",
   "layer": "scholarship",
   "era": "万历四十七年七月后",
   "place": "tieling_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "后金天命六年 (天启元年, 1621) 努尔哈赤亲自率领大军, 将板木云梯战车顺浑河而下, 水陆并进, 直取沈阳。",
   "note": "开铁陷落为熊廷弼复出背景。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "TX002",
   "subject": "person:xiongtingbing",
   "predicate": "经略辽东",
   "value_text": "代杨镐经略辽东",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "代鎬經略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX003",
   "subject": "event:tieling_fall",
   "predicate": "失陷",
   "value_text": "铁岭复失，沈阳及诸城堡军民尽窜",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "tieling_cheng",
   "source": "mingshi",
   "quote": "甫出关，铁岭复失，沈阳及诸城堡军民一时尽窜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "明史记熊廷弼出关时铁岭复失",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX004",
   "subject": "person:xiongtingbing",
   "predicate": "上言",
   "value_text": "开原为河东根本，不可弃",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kaiyuan_cheng",
   "source": "mingshi",
   "quote": "欲保遼東則開原必不可棄",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX005",
   "subject": "person:xiongtingbing",
   "predicate": "集兵",
   "value_text": "请集兵十八万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "請集兵十八萬",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "兵力部署计划",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX006",
   "subject": "person:xiongtingbing",
   "predicate": "巡历",
   "value_text": "自虎皮驿抵沈阳，乘雪夜赴抚顺",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "mingshi",
   "quote": "自虎皮驛抵瀋陽，復乘雪夜赴撫順",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX007",
   "subject": "person:xiongtingbing",
   "predicate": "斩逃将",
   "value_text": "斩逃将刘遇节等",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "斬逃將劉遇節、王捷、王文鼎",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX008",
   "subject": "person:xiongtingbing",
   "predicate": "守备",
   "value_text": "数月守备大固",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "令嚴法行，數月守備大固",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX009",
   "subject": "person:xiongtingbing",
   "predicate": "被劾",
   "value_text": "被姚宗文等弹劾",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "給事中姚宗文騰謗於朝",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "时间推断为泰昌元年",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX010",
   "subject": "person:xiongtingbing",
   "predicate": "乞罢",
   "value_text": "缴还尚方剑，力求罢斥",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "遂繳還尚方劍，力求罷斥",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX011",
   "subject": "person:xiongtingbing",
   "predicate": "功过",
   "value_text": "功在存辽，罪在负君",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang",
   "source": "mingshi",
   "quote": "廷弼功在存遼，微勞雖有可紀；罪在負君，大義實無所逃",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "朱童蒙评语",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "TX012",
   "subject": "person:xiongtingbing",
   "predicate": "性格",
   "value_text": "性刚负气，好谩骂",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "然性剛負氣，好謾駡，不為人下",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:kuanbian_abandon|弃地年间",
   "subject": "event:kuanbian_abandon",
   "predicate": "弃地年间",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "T007",
    "T007b"
   ]
  },
  {
   "id": "cf:event:tieling_fall|陷落时间",
   "subject": "event:tieling_fall",
   "predicate": "陷落时间",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "T011",
    "T011b"
   ]
  }
 ],
 "gaps": [
  "T016",
  "T017"
 ],
 "events": [
  {
   "id": "ev_yinzhou",
   "era": "辽·天显元年",
   "year": 928,
   "title": "辽置银州, 始有城邑",
   "kind": "建置",
   "text": "契丹辽太祖耶律阿保机次子耶律德光继位, 采纳东丹国丞相耶律羽之建议, 将渤海越喜故地怀远府银州府民迁至辽宁沈阳北至开原之间的铁岭一带, 置城邑仍以银州名之。"
  },
  {
   "id": "ev_tieling_guard",
   "era": "明·洪武二十一年三月",
   "year": 1388,
   "title": "铁岭卫指挥使司设于奉集堡",
   "kind": "建置",
   "text": "元将拔金完哥率其部属金千吉等来附, 明太祖遣指挥佥事李文、高颙, 镇抚杜锡, 置卫于奉集县(今沈阳市苏家屯塔山一带), 以抚安其众。"
  },
  {
   "id": "ev_yinzhou_reloc",
   "era": "明·洪武二十六年四月",
   "year": 1393,
   "title": "徙铁岭卫治于古银州",
   "kind": "建置",
   "text": "明太祖徙辽东铁岭卫治于沈阳与开原两界古银州之地 (今铁岭市银州区), 仍以铁岭卫名, 属辽东都指挥使司。"
  },
  {
   "id": "ev_li_zhenshuai",
   "era": "明·隆庆四年",
   "year": 1570,
   "title": "李成梁领辽东总兵, 大修戎备",
   "kind": "军政",
   "text": "辽东总兵王治道战死, 李成梁署都督佥事代之。大修戎备, 甄拔将校, 收召四方健儿给以厚饩, 用为选锋, 军声始振。"
  },
  {
   "id": "ev_li_wangguo",
   "era": "明·万历二年",
   "year": 1574,
   "title": "李成梁讨王杲, 诛之",
   "kind": "军政",
   "text": "建州都指挥王杲大举犯扰辽阳、沈阳, 李成梁督兵进剿王杲所在的古勒寨, 斩首一千余级。王杲再出兵犯边, 又为明军所败, 王杲被捕磔死。"
  },
  {
   "id": "ev_kuanbian_abandon",
   "era": "明·万历三十四年",
   "year": 1606,
   "title": "李成梁弃宽甸六堡, 迁民六万余户",
   "kind": "争议",
   "text": "万历初李成梁献议移建宽甸六堡, 至万历三十四年成梁以地孤悬难守, 与督抚蹇达、赵楫建议弃之, 尽徙居民于内地; 居民恋家室, 以大军驱迫, 死者狼籍。同一事实, 明史与兵科给事中宋一韩、巡按熊廷弼评价相反。",
   "subject": "event:kuanbian_abandon"
  },
  {
   "id": "ev_li_zhong",
   "era": "明·万历四十三年",
   "year": 1615,
   "title": "李成梁卒, 年九十",
   "kind": "人物",
   "text": "李成梁镇辽东 30 年 (初镇 22 年 + 复镇 8 年), 先后奏大捷十次。罢归后卒于第。明神宗下诏为其举行隆重丧礼。"
  },
  {
   "id": "ev_lirubai_south",
   "era": "明·万历四十七年三月",
   "year": 1619,
   "title": "萨尔浒南路: 李如柏出鸦鹘关",
   "kind": "战事",
   "text": "辽东总兵李如柏率南路军 2.5 万人, 由清河出鸦鹘关, 指向兴京老城。三路败后, 杨镐急檄李如柏撤军, 这是明军四路中唯一未接战的一支。"
  },
  {
   "id": "ev_tieling_fall",
   "era": "明·万历四十七年七月",
   "year": 1619,
   "title": "努尔哈赤攻占铁岭",
   "kind": "战事",
   "text": "开铁之战六月开原既下, 七月努尔哈赤亲领兵攻占铁岭。熊廷弼说:「开原, 河东根柢也」。开原、铁岭陷落, 辽东都司北部门户洞开。",
   "subject": "event:tieling_fall"
  },
  {
   "id": "ev_tieling_county",
   "era": "清·康熙三年",
   "year": 1664,
   "title": "废明铁岭卫, 始置铁岭县",
   "kind": "建置",
   "text": "清康熙三年废卫设县, 铁岭、开原县属奉天府, 时铁岭境域东北部 (西丰) 被封禁为大围场, 北部为内蒙古科尔沁部。"
  }
 ],
 "edges": [
  {
   "from": "tieling_cheng",
   "to": "shenyang",
   "type": "admin",
   "label": "铁岭卫—沈阳中卫"
  },
  {
   "from": "tieling_cheng",
   "to": "kaiyuan_cheng",
   "type": "admin",
   "label": "铁岭卫—三万卫"
  },
  {
   "from": "tieling_cheng",
   "to": "liaoyang",
   "type": "admin",
   "label": "铁岭卫—辽东都司"
  },
  {
   "from": "fengjibao",
   "to": "tieling_cheng",
   "type": "admin",
   "label": "奉集堡—银州 (迁徙)"
  },
  {
   "from": "tieling_cheng",
   "to": "fushun",
   "type": "mil",
   "label": "李成梁征王杲抚顺"
  },
  {
   "from": "tieling_cheng",
   "to": "hetu_ala",
   "type": "mil",
   "label": "1619 努尔哈赤南下攻铁岭"
  },
  {
   "from": "tieling_cheng",
   "to": "kuanbian",
   "type": "mil",
   "label": "李成梁弃宽甸六堡"
  },
  {
   "from": "yageguan",
   "to": "hetu_ala",
   "type": "mil",
   "label": "李如柏南路出鸦鹘关"
  },
  {
   "from": "jinganbao",
   "to": "sarhu",
   "type": "mil",
   "label": "马林北路经靖安堡"
  },
  {
   "from": "tieling_cheng",
   "to": "shenyang",
   "type": "mashi",
   "label": "明辽东马市驿站"
  }
 ]
};
