// 本文件由 tools/build.py 自动生成（切片 liaoyang），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["liaoyang"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["liaoyang"] = {
 "meta": {
  "kind": "county",
  "region": "liaodong",
  "title": "辽阳",
  "dossier_label": "辽阳",
  "subtitle": "辽东都司治所 · 东京辽阳府 · 天启元年改运",
  "primary_place": "liaoyang_cheng",
  "dossier_event": "event:liaoyang_fall",
  "back": "枢纽",
  "lead": "辽阳是辽东第一城：唐安东都护府、辽东京辽阳府、金大定帝登基地、明辽东都司治所；天启元年（1621）后金攻占、迁都；四年后再迁沈阳。下方为两千年的建置沿革。",
  "parties_note": "辽阳是王朝更迭的见证者：唐、辽、金、元、明、清、现代综述各有侧重；立场派生于 source.party。",
  "subject_names": {
   "event:liaoyang_fall": "辽阳陷落",
   "event:hunhe_zhan": "浑河之战",
   "event:timing": "迁都",
   "place:liaoyang_cheng": "辽阳城",
   "place:dongjing_cheng": "东京城",
   "place:dongdan_gong": "东丹王宫",
   "person:nuerhaci": "努尔哈赤",
   "person:huangtaiji": "皇太极",
   "person:yeluabuji": "耶律阿保机",
   "person:yelubei": "耶律倍",
   "person:wanyanyong": "完颜雍",
   "person:yuan_yingtai": "袁应泰",
   "person:ye_wang": "叶旺",
   "person:ma_yun": "马云",
   "person:chenjn": "陈策",
   "person:tongzhongkui": "童仲揆"
  },
  "terrain_grid": "liaodong",
  "dims": [
   1,
   6
  ],
  "page": "county.html?scene=liaoyang",
  "key": "liaoyang",
  "scene_id": "liaoyang",
  "vocab_pack": "ming_qing"
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
   "stance": "official_later_dynasty",
   "faction": null
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
   "id": "yuan_shi",
   "title": "元史",
   "party": "明修官史",
   "stance_label": "后朝官修·仓促成书",
   "distance_label": "1369 年修成，距元亡仅一年但史源杂糅未及考订",
   "color": "#6C5C3E",
   "compiler": "宋濂等",
   "period": "明修",
   "stance": "official_later_dynasty"
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
  },
  {
   "id": "sanchaoliao_shilu",
   "title": "三朝辽事实录",
   "juan": "卷四（沈阳/辽阳）",
   "compiler": "王在晋",
   "compiled_year": 1630,
   "stance": "private",
   "stance_label": "明方私修·亲历",
   "distance_label": "经略辽东者事后追记，距事约10年",
   "party": "明·封疆奏议",
   "color": "#8B6BA8",
   "note": "王在晋记辽阳围急、袁应泰殉城之明方视角；张铨疏论辽阳围急。",
   "faction": "feng_jiang"
  },
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "party": "二手综述",
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），距事约 250 年，综合实录奏议并附考异",
   "color": "#6C7A89",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "period": "晚清",
   "stance": "private_synthesis",
   "faction": null,
   "note": "已抓卷080(萨尔浒)/081(辽沈陷落)/082(广宁)。综述考订立场，与明清各方互参。"
  }
 ],
 "places": [
  {
   "id": "liaoyang_cheng",
   "name": "辽阳城",
   "lon": 123.18,
   "lat": 41.27,
   "type": "city",
   "modern": "辽宁省辽阳市",
   "note": "辽东都司治所, 明代东北第一城, 唐代安东都护府一度治此",
   "elev": 23
  },
  {
   "id": "dongjing_cheng",
   "name": "东京城",
   "lon": 123.2,
   "lat": 41.25,
   "type": "capital",
   "modern": "辽宁辽阳太子河东岸",
   "note": "1621 年努尔哈赤迁都辽阳后于太子河东五里新建都城, 1625 年随迁都沈阳而废",
   "elev": 24
  },
  {
   "id": "dongdan_gong",
   "name": "东丹王宫",
   "lon": 123.19,
   "lat": 41.28,
   "type": "city",
   "modern": "辽阳市老城东北隅",
   "note": "928 年辽迁东丹国首都至辽阳, 建东丹王宫",
   "elev": 22
  },
  {
   "id": "taizi_he",
   "name": "太子河",
   "lon": 123.1,
   "lat": 41.2,
   "type": "river",
   "modern": "辽宁辽阳地区",
   "note": "辽阳城南主要河流, 东京城建于其东岸",
   "elev": 32
  },
  {
   "id": "shenyang",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.81,
   "type": "city",
   "modern": "辽宁省沈阳市",
   "note": "1625 年后金迁都, 沈阳反超辽阳成为东北第一城",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "guangning",
    "haizhou",
    "kaiyuan",
    "tieling"
   ],
   "elev": 50
  },
  {
   "id": "tieling_cheng",
   "name": "铁岭城",
   "lon": 124.31,
   "lat": 42.3,
   "type": "city",
   "modern": "辽宁铁岭市银州区",
   "note": "辽东都司北路卫城, 1619 年与开原同年陷落",
   "_global_id": "tieling",
   "_other_scenes": [
    "kaiyuan",
    "tieling"
   ],
   "elev": 238
  },
  {
   "id": "kaiyuan_cheng",
   "name": "开原城",
   "lon": 124.04,
   "lat": 42.55,
   "type": "city",
   "modern": "辽宁开原市",
   "note": "辽东都司最北卫城, 1619 年陷落",
   "_global_id": "kaiyuan_cheng",
   "_other_scenes": [
    "kaiyuan",
    "tieling"
   ],
   "elev": 85
  },
  {
   "id": "fushun",
   "name": "抚顺",
   "lon": 123.94,
   "lat": 41.86,
   "type": "guan",
   "modern": "辽宁抚顺市",
   "note": "辽阳与建州女真之间的前哨, 万历四十六年(1618)先陷",
   "_global_id": "fushun",
   "_other_scenes": [
    "kaiyuan",
    "shenyang",
    "tieling"
   ],
   "elev": 76
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
    "sarhu",
    "shenyang",
    "tieling",
    "yehe"
   ],
   "elev": 586
  },
  {
   "id": "guangning",
   "name": "广宁",
   "lon": 121.79,
   "lat": 41.59,
   "type": "city",
   "modern": "辽宁北镇市",
   "note": "辽东总兵驻地, 辽东都司西边重镇 (超出投影范围, 仅作 admin 关系)",
   "_global_id": "guangning",
   "_other_scenes": [
    "jinzhou",
    "shenyang"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "shenyang_cheng",
   "name": "沈阳中卫",
   "lon": 123.43,
   "lat": 41.81,
   "type": "wei",
   "modern": "辽宁沈阳市",
   "note": "辽东都司下辖 25 卫之一, 1621 浑河之战主战场",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "shenyang"
   ],
   "elev": 50
  },
  {
   "id": "hun_he",
   "name": "浑河",
   "lon": 123.35,
   "lat": 41.7,
   "type": "river",
   "modern": "辽宁沈阳辽阳间",
   "note": "辽阳与沈阳之间的天然屏障, 1621 浑河之战发生在此",
   "elev": 32
  }
 ],
 "persons": [
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "side": "qing",
   "note": "建州女真首领, 1621 年攻占辽阳, 迁都于此, 建东京城",
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
    "ningyuan"
   ]
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "role": "后金大汗 (太宗)",
   "side": "qing",
   "note": "努尔哈赤第八子, 1626 年继位, 1636 年改国号大清",
   "influence": 0,
   "_global_id": "huangtaiji",
   "_other_scenes": [
    "jinzhou",
    "ningyuan",
    "sarhu",
    "shenyang"
   ]
  },
  {
   "id": "yeluabuji",
   "name": "耶律阿保机",
   "role": "辽太祖",
   "side": "liao",
   "note": "契丹首领, 辽朝建立者, 918 年攻占辽东城",
   "influence": 1
  },
  {
   "id": "yelubei",
   "name": "耶律倍",
   "role": "东丹王",
   "side": "liao",
   "note": "辽太祖长子, 契丹东丹国国王, 928 年迁国都至辽阳",
   "influence": 0
  },
  {
   "id": "wanyanyong",
   "name": "完颜雍",
   "role": "金世宗",
   "side": "jin",
   "note": "1161 年在辽阳拥兵称帝, 改元大定",
   "influence": 1
  },
  {
   "id": "yuan_yingtai",
   "name": "袁应泰",
   "role": "辽东经略",
   "side": "ming",
   "note": "接替熊廷弼任辽东经略, 1621 年浑河之战、辽阳陷落时在任",
   "faction": "feng_jiang",
   "influence": 16,
   "_global_id": "yuan_yingtai",
   "_other_scenes": [
    "shenyang"
   ]
  },
  {
   "id": "ye_wang",
   "name": "叶旺",
   "role": "辽东都指挥使",
   "side": "ming",
   "note": "洪武初年与马云出镇辽东, 设定辽都卫指挥使司",
   "influence": 0
  },
  {
   "id": "ma_yun",
   "name": "马云",
   "role": "辽东都指挥使",
   "side": "ming",
   "note": "洪武初年与叶旺共同出镇辽东, 奠定明代辽东防务",
   "faction": "feng_jiang",
   "influence": 0
  },
  {
   "id": "chenjn",
   "name": "陈策",
   "role": "总兵",
   "side": "ming",
   "note": "1621 浑河之战, 率川湖兵北上援沈阳, 阵亡",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "chenjn",
   "_other_scenes": [
    "shenyang"
   ]
  },
  {
   "id": "tongzhongkui",
   "name": "童仲揆",
   "role": "副总兵",
   "side": "ming",
   "note": "1621 浑河之战, 与陈策同援沈阳, 阵亡",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "tongzhongkui",
   "_other_scenes": [
    "shenyang"
   ]
  },
  {
   "id": "zhangquan",
   "name": "张铨",
   "side": "ming",
   "role_hint": "巡按辽东御史",
   "column": null,
   "note": "上疏论辽阳围急，辽阳陷后殉节",
   "faction": "feng_jiang",
   "influence": 1,
   "_global_id": "zhangquan",
   "_other_scenes": [
    "shenyang"
   ]
  },
  {
   "id": "chence",
   "name": "陈策",
   "side": "ming",
   "role_hint": "总兵（援沈阳）",
   "column": null,
   "note": "1621 援沈阳，浑河之战战死；辽阳围急时在城",
   "faction": "feng_jiang",
   "influence": 0,
   "_global_id": "chenjn",
   "_other_scenes": [
    "shenyang"
   ]
  },
  {
   "id": "zhangshengwu",
   "name": "张绳武",
   "role": "四川佥司（武举）",
   "side": "ming",
   "note": "本姓陈，一名神武，新建人。1621 辽阳急，率亲丁二百余赴援，至首山孤军无援战没",
   "faction": "feng_jiang",
   "influence": 1
  }
 ],
 "assertions": [
  {
   "id": "L001",
   "subject": "place:liaoyang_cheng",
   "predicate": "建置年",
   "value_text": "1375 年 (洪武 8 年) 设辽东都指挥使司, 治辽阳",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武八年",
   "place": "liaoyang_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武八年, 全国都卫均改为都司, 定辽都卫指挥使司改为辽东都指挥使司, 简称辽东都司, 治所在辽阳城中。",
   "note": "明初置辽东卫指挥使司于洪武四年(1371), 4 年后升为都司。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "L002",
   "subject": "place:liaoyang_cheng",
   "predicate": "辖境",
   "value_text": "辽东都司领 25 卫 2 州, 官军 19.03 万人",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武八年",
   "place": "liaoyang_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "领 25 卫, 自在州、安乐州, 128 个千户所, 官军十九万零三百人。",
   "note": "辽东都司东至鸭绿江, 西至山海关, 南至旅顺海口, 北至开原。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "L003",
   "subject": "place:liaoyang_cheng",
   "predicate": "北城扩建",
   "value_text": "1416 年 (永乐十四年) 辽阳北城包砖完砌",
   "source": "ming_taizu_shilu",
   "layer": "record",
   "era": "永乐十四年",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "永乐十四年, 都指挥使王真包砖完砌。新城南北宽 1 里, 东西长 4 里, 城墙高 3 丈, 开设东、西、北三座城门。",
   "note": "洪武十二年 (1379) 始建土城, 至此包砖形成南/北二城布局。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "L004",
   "subject": "place:liaoyang_cheng",
   "predicate": "唐代安东都护府",
   "value_text": "668 年 (唐高宗总章元年) 设安东都护府, 辽东城一度为治所",
   "source": "modern",
   "layer": "scholarship",
   "era": "唐总章元年",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "668 年 (唐高宗总章元年), 攻灭高句丽, 设安东都护府, 辽东城 (辽城州) 一度为都护府治所所在。",
   "note": "唐代安东都护府治所后迁至平壤, 辽阳为辽东城府。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L005",
   "subject": "place:liaoyang_cheng",
   "predicate": "辽代南京/东京",
   "value_text": "928 年辽改辽阳府为南京, 938 年改称东京",
   "source": "modern",
   "layer": "scholarship",
   "era": "辽会同元年",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "928 年, 辽太宗改辽阳府为南京, 迁东丹国首都于辽阳。938 年, 因幽州升为南京, 辽阳改称东京, 东京辽阳府遂为五京之一。",
   "note": "东京辽阳府为五京中人口最多的城市, 也是金朝东北的行政中心。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L006",
   "subject": "place:liaoyang_cheng",
   "predicate": "元代辽阳行省",
   "value_text": "1264 年 (元至元元年) 设辽阳行省, 统辖东北",
   "source": "yuan_shi",
   "layer": "record",
   "era": "元至元元年",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "至元二十四年 (1287), 元朝设辽阳等处行中书省, 统辖东北, 称为京师左臂。",
   "note": "辽阳行省下辖 7 路、1 府、12 州、10 县, 京师左臂。",
   "_party": "明修官史",
   "_faction": null
  },
  {
   "id": "L007",
   "subject": "person:wanyanyong",
   "predicate": "辽阳称帝",
   "value_text": "1161 年 (金正隆六年) 完颜雍在辽阳拥兵称帝, 改元大定",
   "source": "modern",
   "layer": "scholarship",
   "era": "金大定元年",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "1161 年 (金海陵王正隆六年或金世宗大定元年), 完颜雍在辽阳拥兵称帝, 史称金世宗, 并改元大定。",
   "note": "辽阳作为金朝东北政治中心的延续。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L008",
   "subject": "event:liaoyang_fall",
   "predicate": "陷落时间",
   "value_text": "1621 年 (明天启元年) 努尔哈赤攻占辽阳, 迁都",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天命六年",
   "place": "liaoyang_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "后金天命六年 (天启元年, 1621), 努尔哈赤统帅八旗劲旅, 一举攻下明朝的东北重镇辽阳, 随即迁都于此。",
   "note": "袁应泰任辽东经略时, 1621 年辽阳陷落, 此前 1621 浑河之战后沈阳先陷。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "L009",
   "subject": "place:dongjing_cheng",
   "predicate": "建城年",
   "value_text": "1621 年努尔哈赤在太子河东五里建东京城",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天命六年",
   "place": "dongjing_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "辽阳城年久失修, 颓圮不堪, 努尔哈赤决定在太子河东岸修筑新城, 即东京城。",
   "note": "东京城抚近门等遗址尚存。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "L010",
   "subject": "place:liaoyang_cheng",
   "predicate": "迁都沈阳",
   "value_text": "1625 年 (天启五年) 努尔哈赤迁都沈阳",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天命十年",
   "place": "liaoyang_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "天命十年 (天启五年), 努尔哈赤迁都沈阳, 扩建城池, 加固城垣, 修太庙、宫殿等。",
   "note": "沈阳反超辽阳, 是东北政治中心的一次决定性转移。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "L011",
   "subject": "event:liaoyang_fall",
   "predicate": "努尔哈赤评价",
   "value_text": "努尔哈赤攻占辽阳为后金『开国第一战』级的关键胜利",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天命六年",
   "place": "liaoyang_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "迁都辽阳, 改建东京城, 标志着后金从地方政权升格为可与明朝对峙的帝国。",
   "note": "清方评价, 与现代综述对『破坏—迁民—重建』评价有不同。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "L011b",
   "subject": "event:liaoyang_fall",
   "predicate": "努尔哈赤评价",
   "value_text": "努尔哈赤攻占辽阳过程中伴随对辽东都司区内大量军民伤亡与迁民",
   "source": "modern",
   "layer": "scholarship",
   "era": "现代综述",
   "place": "liaoyang_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "与 L011 清方记录形成 record_vs_scholarship 冲突; 立场派生, 不裁决。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L012",
   "subject": "place:liaoyang_cheng",
   "predicate": "沈阳反超辽阳",
   "value_text": "1625 年后沈阳反超辽阳, 至今辽阳地位一直低于沈阳",
   "source": "modern",
   "layer": "scholarship",
   "era": "天命十年后",
   "place": "liaoyang_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "清太祖迁都沈阳, 改变了辽阳与沈阳的命运, 从此辽阳地位一直在沈阳之下, 这个格局延续到今天。",
   "note": "现代综述, 1625 至今 400 年的格局。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L013",
   "subject": "event:hunhe_zhan",
   "predicate": "双方兵力",
   "value_text": "明军: 川湖兵约 7000 + 浙兵约 8000; 后金: 四旗精锐约 6000 + 主力 5 万余",
   "source": "mingshi",
   "layer": "record",
   "era": "天启元年三月",
   "place": "hun_he",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "北岸川湖等兵先后与后金红巴牙喇军、右翼四旗兵激战, 斩敌二三千人, 终因体力不支战败, 大部被歼。机动能力较差尾行最后的浙兵因北岸受阻被迫于南岸布车阵火器防御, 直至火药耗尽。",
   "note": "浑河之战实为辽阳陷落的前奏, 6 小时内明军步兵精锐折损大半。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "L014",
   "subject": "place:liaoyang_cheng",
   "predicate": "唐代辽东城",
   "value_text": "645 年 (唐贞观十九年) 唐太宗征辽东城克之",
   "source": "modern",
   "layer": "scholarship",
   "era": "唐贞观十九年",
   "place": "liaoyang_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "唐太宗李世民亲征, 克辽东城, 为辽城州首府。",
   "note": "辽阳古称襄平, 唐以此为辽东城。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L015",
   "subject": "person:yeluabuji",
   "predicate": "攻占辽东城",
   "value_text": "918 年 (辽神册三年) 耶律阿保机攻占辽东城",
   "source": "modern",
   "layer": "scholarship",
   "era": "辽神册三年",
   "place": "liaoyang_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "918 年, 辽太祖神册三年, 耶律阿保机攻占辽东城。",
   "note": "契丹开始对辽东的统治, 928 年后东丹国首都迁此。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L016",
   "subject": "event:liaoyang_fall",
   "predicate": "朝鲜视角",
   "value_text": "缺口：朝鲜实录对辽阳陷落的记载与反应，待核",
   "value": null,
   "source": "modern",
   "layer": "gap",
   "era": "天命六年",
   "place": "liaoyang_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "缺口: 朝鲜实录对辽阳陷落是否有针对记载, 待核查。",
   "lead": {
    "where": "朝鲜《李朝实录》光海君日记 天命六年(1621)条; 《栅中日录》李民寏(若其时仕辽); 《燃藜室记述》补证。",
    "skills": [
     "朝语",
     "古文"
    ],
    "accept": "录入朝鲜方对辽阳陷落的记载与朝方反应(是否派使、是否哀悼明之失辽东), 标注与明/清记载的偏差与情绪基调。",
    "effort": "1-2 周"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L017",
   "subject": "event:liaoyang_fall",
   "predicate": "辽阳陷落兵数详考",
   "value_text": "缺口：辽阳一战双方兵数与伤亡的具体数字——明清两方均无可交叉验证的细目",
   "value": null,
   "source": "qing_taizu_shilu",
   "layer": "gap",
   "era": "天命六年",
   "place": "liaoyang_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "缺口: 辽阳一战双方具体兵数伤亡, 待详考。",
   "lead": {
    "where": "《明熹宗实录》天启元年辽阳战事奏报; 《清太祖实录》天命六年辽阳攻防; 《满文老档》相应月档; 明方总兵(袁应泰/贺世贤)本传与塘报。",
    "skills": [
     "古文",
     "统计"
    ],
    "accept": "给出双方兵力与伤亡的区间估计, 标注口径差异(「兵」含不含有夫/辅兵/田卒), 并说明为何明清两方均无可交叉验证的细目。",
    "effort": "2-3 周"
   },
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "L018",
   "subject": "event:liaoyang_fall",
   "predicate": "明廷反应",
   "value_text": "辽阳陷落后, 魏忠贤乱政, 辽东巡抚王化贞等起用, 辽东防御体系名存实亡",
   "source": "modern",
   "layer": "scholarship",
   "era": "天启元年后续",
   "place": "liaoyang_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "从熊廷弼经略到袁应泰再到王化贞, 明廷内部斗争加速了辽东战事的崩溃。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "L019",
   "subject": "event:liaoyang_fall",
   "predicate": "三手综述",
   "value_text": "缺口：维基百科『辽阳之战』条已登记为可采信来源但未落地断言——三手综述只应用于交叉指路，不应单独支撑任何结论",
   "value": null,
   "source": "wiki",
   "layer": "gap",
   "era": "天命六年",
   "place": "liaoyang_cheng",
   "confidence": 0.0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "note": "保留此源的意义在于：读者可以在四层开关里单独打开『二手综述』，亲眼看到关掉它之后哪些结论会塌——这是对来源依赖度的可视化压力测试。",
   "lead": {
    "where": "中文/英文维基「辽阳之战」词条及其引用链; 比对其中一手/二手来源的可靠性标记。",
    "skills": [
     "数字人文",
     "文献学"
    ],
    "accept": "把维基词条拆解为「哪些结论有独立一手支撑 / 哪些仅靠二手综述」, 输出一张溯源表, 供本项目「来源依赖度」压力测试(关掉二手综述哪些结论会塌)使用。",
    "effort": "1 周"
   },
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "SX001",
   "subject": "person:yuan_yingtai",
   "predicate": "官职任命",
   "value_text": "代廷弼为经略",
   "time": {
    "era_text": "泰昌元年九月",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "代廷弼為經略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "原文未明确纪年，据上下文推断为泰昌元年九月。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX002",
   "subject": "person:yuan_yingtai",
   "predicate": "战略规划",
   "value_text": "议用兵十八万，大将十人",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "議用兵十八萬，大將十人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX003",
   "subject": "person:yuan_yingtai",
   "predicate": "招降政策",
   "value_text": "下令招降蒙古诸部",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "乃下令招降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "降人处之辽、沈二城。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX004",
   "subject": "person:yuan_yingtai",
   "predicate": "政策后果",
   "value_text": "降人潜行淫掠，居民苦之",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "潛行淫掠，居民苦之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "议者言收降过多，或为敌用。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX005",
   "subject": "war:liaoshen",
   "predicate": "爆发",
   "value_text": "大清兵来攻沈阳",
   "time": {
    "era_text": "天启元年三月十二日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "shenyang_cheng",
   "source": "mingshi",
   "quote": "我大清兵來攻瀋陽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006",
   "subject": "war:liaoshen",
   "predicate": "城破",
   "value_text": "降人内应，沈阳城破",
   "time": {
    "era_text": "天启元年三月十三日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "shenyang_cheng",
   "source": "mingshi",
   "quote": "降人果內應，城遂破",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "贺世贤、尤世功战死。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007",
   "subject": "person:yuan_yingtai",
   "predicate": "防御部署",
   "value_text": "撤奉集、威宁诸军，并力守辽阳",
   "time": {
    "era_text": "天启元年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "撤奉集、威甯諸軍，並力守遼陽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX008",
   "subject": "war:liaoshen",
   "predicate": "决战",
   "value_text": "大清兵临城，明军迎战败绩",
   "time": {
    "era_text": "天启元年三月十九日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "十有九日，大清兵臨城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁应泰督诸将出城五里迎战，军败多死。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009",
   "subject": "person:yuan_yingtai",
   "predicate": "阵亡",
   "value_text": "城破自缢死",
   "time": {
    "era_text": "天启元年三月廿一日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "遂佩劍印自縊死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "大清兵从小西门入，城中大乱。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011",
   "subject": "person:yuan_yingtai",
   "predicate": "招降动机",
   "value_text": "不急救则彼必归敌，是益之兵也",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "我不急救，則彼必歸敵，是益之兵也",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX012",
   "subject": "person:yuan_yingtai",
   "predicate": "誓师",
   "value_text": "刑白马祀神，誓以身委辽",
   "time": {
    "era_text": "泰昌元年九月",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "刑白馬祀神，誓以身委遼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX001_M1",
   "subject": "person:yuan_yingtai",
   "predicate": "官职",
   "value_text": "代廷弼为经略",
   "time": {
    "era_text": "泰昌元年九月",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "代廷弼為經略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁应泰接替熊廷弼任辽东经略",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006_M1",
   "subject": "person:yuan_yingtai",
   "predicate": "战略",
   "value_text": "议用兵十八万，大将十人",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "",
   "source": "mingshi",
   "quote": "議用兵十八萬，大將十人，上奏陳方略",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁应泰谋进取抚顺的方略",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007_M1",
   "subject": "person:yuan_yingtai",
   "predicate": "招降",
   "value_text": "下令招降蒙古诸部",
   "time": {
    "era_text": "泰昌元年",
    "start": "1620-01-01",
    "end": "1620-12-31",
    "gregorian_year": 1620
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "乃下令招降。於是歸者日眾，處之遼、瀋二城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁应泰招降蒙古饥民，安置于辽阳、沈阳",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX008_M1",
   "subject": "event:liaoyang_fall",
   "predicate": "城破",
   "value_text": "大清兵从小西门入，城破",
   "time": {
    "era_text": "天启元年三月十九日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "薄暮，譙樓火，大清兵從小西門入，城中大亂",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "辽阳城破，袁应泰自缢死",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009_M1",
   "subject": "event:liaoyang_fall",
   "predicate": "将领阵亡",
   "value_text": "贺世贤、尤世功战死",
   "time": {
    "era_text": "天启元年三月十二日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "shenyang_cheng",
   "source": "mingshi",
   "quote": "總兵官賀世賢、尤世功出城力戰，敗還。明日，降人果內應，城遂破，二將戰死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "沈阳城破，贺世贤、尤世功战死",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX010",
   "subject": "event:liaoyang_fall",
   "predicate": "将领阵亡",
   "value_text": "陈策、童仲揆赴援战死",
   "time": {
    "era_text": "天启元年三月十三日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "hun_he",
   "source": "mingshi",
   "quote": "總兵官陳策、童仲揆等赴援，亦戰死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "陈策、童仲揆援辽阳途中战死",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011_M1",
   "subject": "person:yuan_yingtai",
   "predicate": "死亡",
   "value_text": "佩剑印自缢死",
   "time": {
    "era_text": "天启元年三月二十一日",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingshi",
   "quote": "遂佩劍印自縊死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "袁应泰在辽阳城破后自缢",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX012_M1",
   "subject": "person:yuan_yingtai",
   "predicate": "评价",
   "value_text": "用兵非所长，规画颇疏",
   "time": {
    "era_text": "天启元年",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "",
   "source": "mingshi",
   "quote": "應泰曆官精敏強毅，用兵非所長，規畫頗疏",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "《明史》对袁应泰的军事能力评价",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX001_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "背景",
   "value_text": "贼盘据沈阳，辽阳以北居民逃走一空",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "賊盤據瀋陽，遼陽以北居民逃走一空",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "明方私修，立场为明方",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX002_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "集兵",
   "value_text": "撤奉集、威宁之兵，并力守辽",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "已撤奉集、威寧之兵，并力守遼",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX003_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "围城",
   "value_text": "辽阳围急",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "遼陽圍急",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX004_M2",
   "subject": "person:yuan_yingtai",
   "predicate": "督兵守城",
   "value_text": "经略袁应泰督兵守城",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "經略袁應泰督兵守城",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX005_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "指挥失当",
   "value_text": "应泰号令不一，分兵守御，兵力益单",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "應泰號令不一，分兵守禦，兵力益單",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "明方私修，对袁应泰有批评",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX006_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "攻防",
   "value_text": "贼乘破竹之势，并力攻辽阳",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "賊乘瀋陽破竹之勢，并力攻遼陽",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX007_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "出战不利",
   "value_text": "应泰出战不利，退保城内",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "應泰出戰不利，退保城內",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX008_M2",
   "subject": "person:yuan_yingtai",
   "predicate": "阵亡",
   "value_text": "城破，应泰自缢于镇远楼",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "城破，應泰自縊於鎮遠樓",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "明方私修，袁应泰死节",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX009_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "城陷",
   "value_text": "辽阳遂陷，辽河以东诸城望风奔溃",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "遼陽遂陷，遼河以東諸城望風奔潰",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX010_M2",
   "subject": "event:liaoyang_fall",
   "predicate": "败因分析",
   "value_text": "辽之亡在人情各异、议论烦多、经抚相争",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "sanchaoliao_shilu",
   "quote": "遼之亡也，在於人情之各異，議論之煩多",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.5,
   "scale": "province",
   "note": "王在晋私论，明方立场，非战役直接记录",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "MT_LY01",
   "subject": "event:hunhe_zhan",
   "predicate": "浑河之战明援军覆没",
   "value_text": "陈策统四川步兵二万渡浑河来援，大败，兵尽溺，策及张名世死之；李秉诚、朱万良、姜弼领骑兵三万来援，遇太宗文皇帝率百骑蹴之皆溃奔；周敦吉、秦邦屏、董仲贵、戚金、张名世帅浙兵三千营桥南，火药尽，大溃，副将至把总战死者百二十余人。",
   "source": "mingtongjian",
   "layer": "record",
   "era": "天启元年三月",
   "place": "shenyang_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "总兵陈策，统四川步兵二万渡浑河来援……大败，退至浑河，兵尽溺……李秉诚、朱万良、姜弼领骑兵三万来援……皆溃奔……周敦吉、秦邦屏、董仲贵、戚金、张名世等，帅浙兵三千营于桥南……大溃……副将至把总战死者百二十余人。",
   "note": "《明通鉴》卷081 浑河桥南北之战（简体转写）。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_LY02",
   "subject": "event:hunhe_zhan",
   "predicate": "明通鉴评「第一血战」",
   "value_text": "是役也，以万余人当大清兵数万之众，虽力屈军覆，为辽左用兵以来第一血战。",
   "source": "mingtongjian",
   "layer": "record",
   "era": "天启元年三月",
   "place": "shenyang_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "是役也，以万余人当大清兵数万之众，虽力屈军覆，为辽左用兵以来第一血战。",
   "note": "《明通鉴》卷081 对浑河之战的综评。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_LY03",
   "subject": "event:liaoyang_fall",
   "predicate": "辽阳城陷",
   "value_text": "庚申，大清兵规取辽阳，袁应泰撤奉集、威宁诸军并力守御，开太子河引水注濠。壬戌攻城急，谯楼火，大清兵自西门入，城中大乱。应泰佩剑印自缢死，巡按张铨被执不屈，亦自经死。",
   "source": "mingtongjian",
   "layer": "record",
   "era": "天启元年三月",
   "place": "liaoyang_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "庚申，大清兵乘驻长驱，规取辽阳……壬戌，大清兵攻城急……谯楼火，大清兵自西门入……应泰遂佩剑印自缢死……铨被执不屈……亦自经死。",
   "note": "《明通鉴》卷081 辽阳陷落（简体转写）。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_LY04",
   "subject": "event:liaoyang_fall",
   "predicate": "辽阳陷后河西震动",
   "value_text": "辽阳继失，河西军民尽奔，自塔山至闾阳二百余里，烟火断绝，京师大震。",
   "source": "mingtongjian",
   "layer": "record",
   "era": "天启元年",
   "place": "liaoyang_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "辽阳继失，河西军民尽奔，自塔山至闾阳二百余里，烟火断绝，京师大震。",
   "note": "《明通鉴》卷081，辽阳失陷之连锁震荡。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY001",
   "subject": "event:liaoyang_fall",
   "predicate": "爆发",
   "value_text": "大清兵乘驻长驱，规取辽阳",
   "time": {
    "era_text": "天命六年三月庚申",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "庚申，大清兵乘驻长驱，规取辽阳。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明方视角记录战役开始。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY002",
   "subject": "event:liaoyang_fall",
   "predicate": "守军兵力",
   "value_text": "总兵李怀信等率兵五万出城",
   "time": {
    "era_text": "天命六年三月庚申",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "总兵李怀信等率兵五万出城，五里结营",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "明军出城迎战兵力。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY003",
   "subject": "event:liaoyang_fall",
   "predicate": "战斗结果",
   "value_text": "明军大乱奔溃，大兵追击六十里",
   "time": {
    "era_text": "天命六年三月庚申",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "遂大乱，奔溃。大兵追击六十里。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明方记录野战失利。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY004",
   "subject": "event:liaoyang_fall",
   "predicate": "攻城",
   "value_text": "大清兵掘城西闸泄濠水，分兵塞城东水门",
   "time": {
    "era_text": "天命六年三月辛酉",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "辛酉，大清兵掘城西闸以泄濠水，分兵塞城东水门",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "后金军攻城战术。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY005",
   "subject": "event:liaoyang_fall",
   "predicate": "城破",
   "value_text": "大清兵自西门入，城中大乱",
   "time": {
    "era_text": "天命六年三月壬戌",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "薄暮，谯楼火，大清兵自西门入，城中大乱",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明方记录城破时间与路径。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY006",
   "subject": "person:yuan_yingtai",
   "predicate": "阵亡",
   "value_text": "应泰遂佩剑印自缢死",
   "time": {
    "era_text": "天命六年三月壬戌",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "应泰遂佩剑印自缢死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "经略袁应泰自杀殉城。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY007",
   "subject": "person:zhangquan",
   "predicate": "被俘不屈",
   "value_text": "铨被执不屈，引颈待刃，后自经死",
   "time": {
    "era_text": "天命六年三月壬戌",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "铨被执不屈，引颈待刃，太祖命赐死，以遂其志。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "巡按御史张铨不屈被杀。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY008",
   "subject": "event:liaoyang_fall",
   "predicate": "战后投降",
   "value_text": "辽东三河等五十寨及河东大小七十余城皆降",
   "time": {
    "era_text": "天命六年三月壬戌",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "辽东之三河等五十寨及河东大小七十余城，皆望风降。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "辽阳失陷后，辽东地区望风归降。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY009",
   "subject": "event:liaoyang_fall",
   "predicate": "阵亡将领",
   "value_text": "梁仲善、朱万良、杨宗业父子等战死",
   "time": {
    "era_text": "天命六年三月辛酉",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "总兵宫梁仲善、朱万良及援辽之总兵它杨宗业父子皆死之。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明方记录主要阵亡将领。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY010",
   "subject": "person:zhangshengwu",
   "predicate": "阵亡",
   "value_text": "绳武率亲丁二百余驰援，孤军无援战没",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "行至辽河，遇逃卒十馀万，绳武以忠义激其帅，欲与还战，帅不从，乃独帅所部渡河，抵首山，去辽阳十七里，而军士不食已一日。遇大清兵，疾呼奋击，孤军无援，遂战没。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "张绳武（陈绳武）率孤军赴援战死。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY011",
   "subject": "event:liaoyang_fall",
   "predicate": "阵亡时间考异",
   "value_text": "梁仲善、朱万良等阵亡于克城前一日",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "据此，则仲善、万良及宗业父子皆阵亡于克辽阳之前一日。",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "《考异》根据《明史》与《殉节录》修正《三编》记载。",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "LY012",
   "subject": "event:liaoyang_fall",
   "predicate": "阵亡名单考异",
   "value_text": "《三编》遗去朱万良及杨宗业父子之名",
   "time": {
    "era_text": "天命六年三月",
    "start": "1621-01-01",
    "end": "1621-12-31",
    "gregorian_year": 1621
   },
   "place": "liaoyang_cheng",
   "source": "mingtongjian",
   "quote": "而《三编》、《辑览》所载，乃遗去万良及宗业父子之名，今据《明史·单仲揆传》及《殉节录》增入",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "《考异》指出《三编》遗漏，并据他书增补。",
   "_party": "二手综述",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:liaoyang_fall|努尔哈赤评价",
   "subject": "event:liaoyang_fall",
   "predicate": "努尔哈赤评价",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "L011",
    "L011b"
   ]
  },
  {
   "id": "cf:person:yuan_yingtai|阵亡",
   "subject": "person:yuan_yingtai",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX009",
    "SX008_M2",
    "LY006"
   ]
  },
  {
   "id": "cf:event:liaoyang_fall|城破",
   "subject": "event:liaoyang_fall",
   "predicate": "城破",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX008_M1",
    "LY005"
   ]
  },
  {
   "id": "cf:event:liaoyang_fall|将领阵亡",
   "subject": "event:liaoyang_fall",
   "predicate": "将领阵亡",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX009_M1",
    "SX010"
   ]
  }
 ],
 "gaps": [
  "L016",
  "L017",
  "L019"
 ],
 "events": [
  {
   "id": "ev_liaoyang_tang",
   "era": "唐·贞观十九年",
   "year": 645,
   "title": "唐太宗征辽东城",
   "kind": "战事",
   "text": "唐太宗李世民亲征高句丽, 克辽东城, 为辽城州首府。668 年 (总章元年) 唐攻灭高句丽, 设安东都护府, 辽东城一度为都护府治所所在。"
  },
  {
   "id": "ev_liaoyang_liao",
   "era": "辽·天显元年",
   "year": 928,
   "title": "辽迁东丹国都至辽阳",
   "kind": "建置",
   "text": "辽太宗耶律德光采纳东丹国丞相耶律羽之建议, 改辽阳府为南京, 迁东丹国首都于辽阳, 建东丹王宫。"
  },
  {
   "id": "ev_liaoyang_dongjing",
   "era": "辽·会同元年",
   "year": 938,
   "title": "辽阳改称东京",
   "kind": "建置",
   "text": "因幽州升为南京, 辽阳改称东京, 东京辽阳府遂为五京之一。"
  },
  {
   "id": "ev_liaoyang_jin",
   "era": "金·天庆六年",
   "year": 1116,
   "title": "金攻占东京",
   "kind": "战事",
   "text": "金太祖完颜阿骨打攻占东京辽阳府, 取代辽朝在东北的统治。"
  },
  {
   "id": "ev_liaoyang_dading",
   "era": "金·大定元年",
   "year": 1161,
   "title": "金世宗完颜雍在辽阳称帝",
   "kind": "建置",
   "text": "海陵王完颜亮南征失败, 东京辽阳府留守完颜雍在辽阳拥兵称帝, 改元大定。"
  },
  {
   "id": "ev_liaoyang_yuan",
   "era": "元·至元元年",
   "year": 1264,
   "title": "元设辽阳行省",
   "kind": "建置",
   "text": "元朝设辽阳等处行中书省, 统辖东北, 称为京师左臂。下辖七路、一府、十二州、十县, 辖域广阔, 驿站通达四方。"
  },
  {
   "id": "ev_liaodongdusi",
   "era": "明·洪武四年",
   "year": 1371,
   "title": "明置辽东卫指挥使司",
   "kind": "建置",
   "text": "元平章刘益降明后, 朱元璋下诏设置辽东卫指挥使司, 任命刘益为指挥同知。刘益被部将杀害后, 朱元璋调叶旺、马云出镇辽东, 于辽阳设定辽都卫指挥使司, 以叶、马二人为都指挥使。"
  },
  {
   "id": "ev_ming_liaodongdusi",
   "era": "明·洪武八年",
   "year": 1375,
   "title": "改辽东都司, 治辽阳",
   "kind": "建置",
   "text": "全国都卫均改为都司, 定辽都卫指挥使司改为辽东都指挥使司, 简称辽东都司, 领 25 卫, 自在州、安乐州, 128 个千户所, 官军 19.03 万人, 治所在辽阳城中。"
  },
  {
   "id": "ev_ming_beicheng",
   "era": "明·永乐十四年",
   "year": 1416,
   "title": "辽阳北城包砖完砌",
   "kind": "建置",
   "text": "洪武十二年为安置内附少数民族, 辽阳城之北附筑了一座土城; 至永乐十四年, 都指挥使王真包砖完砌。新城南北宽 1 里, 东西长 4 里, 城墙高 3 丈, 开设东、西、北三座城门。"
  },
  {
   "id": "ev_liaoyang_fall",
   "era": "明·天启元年",
   "year": 1621,
   "title": "努尔哈赤攻占辽阳, 迁都",
   "kind": "战事",
   "text": "后金天命六年 (天启元年, 1621), 努尔哈赤统帅八旗劲旅, 一举攻下明朝的东北重镇辽阳, 随即迁都于此, 在太子河东五里新建都城东京城。",
   "subject": "event:liaoyang_fall"
  },
  {
   "id": "ev_dongjingcheng",
   "era": "明·天启元年",
   "year": 1621,
   "title": "东京城修筑",
   "kind": "建置",
   "text": "辽阳城年久失修, 颓圮不堪, 努尔哈赤决定在太子河东岸修筑新城, 即东京城。城门名抚近门等。东京城见证了后金迁都、转型的关键四年。"
  },
  {
   "id": "ev_hunhe_zhan",
   "era": "明·天启元年三月",
   "year": 1621,
   "title": "浑河之战, 川湖兵浙兵覆没",
   "kind": "战事",
   "text": "1621 年, 努尔哈赤率军围攻沈阳。明总兵陈策、童仲揆奉命率川湖兵北上援沈, 北岸川湖兵与后金红巴牙喇军、右翼四旗兵激战, 斩敌二三千人, 终因体力不支战败; 浙兵于南岸布车阵火器防御, 直至火药耗尽, 副将戚金等 120 余名将校阵亡。",
   "subject": "event:hunhe_zhan"
  },
  {
   "id": "ev_liaoyang_sheng",
   "era": "明·天启五年",
   "year": 1625,
   "title": "后金迁都沈阳, 辽阳地位下降",
   "kind": "建置",
   "text": "天命十年 (天启五年), 努尔哈赤迁都沈阳, 扩建城池, 加固城垣, 修太庙、宫殿等。这次迁都, 改变了辽阳与沈阳的命运。"
  }
 ],
 "edges": [
  {
   "from": "liaoyang_cheng",
   "to": "dongdan_gong",
   "type": "admin",
   "label": "辽阳—东丹王宫 (辽)"
  },
  {
   "from": "liaoyang_cheng",
   "to": "dongjing_cheng",
   "type": "admin",
   "label": "辽阳—东京城 (后金)"
  },
  {
   "from": "liaoyang_cheng",
   "to": "shenyang",
   "type": "admin",
   "label": "辽阳—沈阳 (辽东都司)"
  },
  {
   "from": "liaoyang_cheng",
   "to": "tieling_cheng",
   "type": "admin",
   "label": "辽阳—铁岭卫"
  },
  {
   "from": "liaoyang_cheng",
   "to": "kaiyuan_cheng",
   "type": "admin",
   "label": "辽阳—三万卫"
  },
  {
   "from": "liaoyang_cheng",
   "to": "tieling_cheng",
   "type": "mashi",
   "label": "辽东马市驿道"
  },
  {
   "from": "liaoyang_cheng",
   "to": "fushun",
   "type": "mil",
   "label": "萨尔浒之战: 辽阳经抚顺"
  },
  {
   "from": "shenyang",
   "to": "hetu_ala",
   "type": "mil",
   "label": "中路杜松军出沈阳"
  },
  {
   "from": "shenyang_cheng",
   "to": "liaoyang_cheng",
   "type": "mil",
   "label": "1621 浑河之战主战场"
  },
  {
   "from": "liaoyang_cheng",
   "to": "guangning",
   "type": "admin",
   "label": "辽东都司治—辽东总兵"
  },
  {
   "from": "taizi_he",
   "to": "dongjing_cheng",
   "type": "admin",
   "label": "太子河—东京城"
  }
 ],
 "faction_geo": {
  "donglin": {
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "geo_note": "东林以江南无锡东林书院为舆论中心（顾宪成、高攀龙），成员近三成出自南直隶，余布各省清流。",
   "points": [
    {
     "name": "无锡",
     "lon": 120.3,
     "lat": 31.57,
     "note": "顾宪成故里、东林书院所在，今江苏无锡",
     "resolved": true
    },
    {
     "name": "常州",
     "lon": 119.97,
     "lat": 31.81,
     "note": "吴中行故里，今江苏常州",
     "resolved": true
    },
    {
     "name": "苏州",
     "lon": null,
     "lat": null,
     "note": "",
     "resolved": false
    }
   ]
  },
  "eunuch": {
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "geo_note": "阉党依附魏忠贤（北直隶/河间）与客氏，核心是内廷宦官+北直隶依附官僚。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    },
    {
     "name": "赫图阿拉",
     "lon": 124.7,
     "lat": 41.6,
     "note": "后金/满洲发祥地，今辽宁新宾",
     "resolved": true
    }
   ]
  },
  "zhe_dang": {
   "name": "浙党",
   "color": "#B9770E",
   "geo_note": "浙党以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢。",
   "points": [
    {
     "name": "杭州",
     "lon": 120.15,
     "lat": 30.27,
     "note": "浙党核心，今浙江杭州",
     "resolved": true
    }
   ]
  },
  "chu_dang": {
   "name": "楚党",
   "color": "#CA6F1E",
   "geo_note": "楚党以楚籍官僚官应震、吴亮嗣为首，与浙党合攻东林。",
   "points": [
    {
     "name": "武昌",
     "lon": 114.3,
     "lat": 30.59,
     "note": "楚党核心，今湖北武汉",
     "resolved": true
    }
   ]
  },
  "qi_dang": {
   "name": "齐党",
   "color": "#B7950B",
   "geo_note": "齐党以齐籍官僚亓诗教、周永春为首，多居主兵中枢。",
   "points": [
    {
     "name": "济南",
     "lon": 117.0,
     "lat": 36.65,
     "note": "齐党核心，今山东济南",
     "resolved": true
    }
   ]
  },
  "xuan_kun": {
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "geo_note": "宣党（汤宾尹/宣城）与昆党（顾天埈/昆山）小集团，主要影响科举京察。",
   "points": [
    {
     "name": "宣城",
     "lon": 118.75,
     "lat": 30.94,
     "note": "宣党核心，今安徽宣城",
     "resolved": true
    },
    {
     "name": "昆山",
     "lon": 120.98,
     "lat": 31.39,
     "note": "昆党核心，今江苏昆山",
     "resolved": true
    }
   ]
  },
  "yan_shang": {
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "geo_note": "盐商/盐政利益以两淮（扬州）盐商及其利益相关官僚为主体。",
   "points": [
    {
     "name": "扬州",
     "lon": 119.41,
     "lat": 32.39,
     "note": "今江苏扬州",
     "resolved": true
    }
   ]
  },
  "nei_guan": {
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "geo_note": "内臣/宦官系统独立于阉党，监军镇守矿税监多出自内廷，北直隶为活动中心。",
   "points": [
    {
     "name": "幽州",
     "lon": 116.4,
     "lat": 39.9,
     "note": "今北京",
     "resolved": true
    }
   ]
  },
  "feng_jiang": {
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "geo_note": "封疆大吏/辽东经略系据辽东边镇（辽阳、沈阳），对败绩诿过、战功夸张。",
   "points": [
    {
     "name": "辽阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "唐安东都护府，今辽宁辽阳",
     "resolved": true
    },
    {
     "name": "沈阳",
     "lon": 123.43,
     "lat": 41.8,
     "note": "辽沈战役·沈阳解放",
     "resolved": true
    }
   ]
  }
 },
 "terrain": {
  "_grid_id": "liaodong",
  "lon0": 122.0,
  "lat0": 40.0,
  "step": 0.05,
  "nx": 97,
  "ny": 67,
  "elev": [
   38,
   53,
   55,
   121,
   521,
   340,
   522,
   526,
   241,
   233,
   81,
   158,
   231,
   262,
   173,
   241,
   274,
   129,
   278,
   241,
   110,
   74,
   86,
   47,
   71,
   149,
   161,
   249,
   437,
   76,
   27,
   9,
   5,
   18,
   14,
   9,
   23,
   28,
   7,
   9,
   7,
   11,
   20,
   9,
   26,
   10,
   12,
   8,
   8,
   9,
   25,
   36,
   47,
   46,
   231,
   353,
   222,
   240,
   149,
   253,
   188,
   439,
   390,
   674,
   222,
   81,
   179,
   224,
   165,
   120,
   109,
   176,
   141,
   335,
   460,
   440,
   88,
   116,
   128,
   110,
   289,
   190,
   165,
   167,
   392,
   230,
   860,
   1269,
   1239,
   727,
   667,
   896,
   963,
   463,
   651,
   630,
   808,
   18,
   33,
   42,
   84,
   206,
   309,
   207,
   385,
   258,
   211,
   86,
   167,
   298,
   185,
   325,
   251,
   617,
   449,
   322,
   165,
   161,
   77,
   108,
   195,
   265,
   324,
   436,
   177,
   84,
   95,
   254,
   33,
   75,
   6,
   2,
   8,
   10,
   44,
   71,
   79,
   151,
   49,
   97,
   21,
   10,
   44,
   27,
   10,
   7,
   22,
   63,
   20,
   10,
   43,
   207,
   111,
   211,
   194,
   120,
   263,
   213,
   332,
   410,
   549,
   211,
   279,
   292,
   166,
   131,
   167,
   141,
   163,
   483,
   399,
   109,
   182,
   100,
   71,
   182,
   407,
   150,
   168,
   151,
   101,
   129,
   644,
   657,
   1229,
   549,
   464,
   1084,
   1099,
   908,
   616,
   1022,
   1040,
   891,
   15,
   42,
   70,
   102,
   100,
   77,
   285,
   438,
   362,
   177,
   135,
   111,
   291,
   719,
   229,
   689,
   681,
   481,
   206,
   167,
   200,
   123,
   90,
   143,
   208,
   203,
   161,
   115,
   92,
   72,
   197,
   465,
   40,
   49,
   24,
   67,
   6,
   20,
   167,
   123,
   98,
   40,
   70,
   156,
   38,
   33,
   45,
   14,
   21,
   14,
   81,
   84,
   97,
   178,
   54,
   82,
   131,
   410,
   311,
   447,
   463,
   334,
   376,
   531,
   249,
   489,
   450,
   176,
   520,
   434,
   98,
   182,
   305,
   156,
   140,
   500,
   409,
   161,
   99,
   376,
   186,
   355,
   234,
   219,
   189,
   201,
   320,
   567,
   401,
   589,
   797,
   1137,
   1405,
   1094,
   651,
   819,
   1329,
   0,
   8,
   21,
   16,
   46,
   300,
   158,
   424,
   323,
   278,
   121,
   131,
   223,
   148,
   211,
   202,
   523,
   471,
   382,
   310,
   210,
   144,
   254,
   113,
   250,
   136,
   120,
   212,
   138,
   128,
   34,
   45,
   211,
   9,
   174,
   52,
   159,
   120,
   47,
   70,
   97,
   161,
   103,
   151,
   282,
   112,
   204,
   186,
   17,
   14,
   18,
   53,
   104,
   108,
   153,
   129,
   160,
   131,
   261,
   464,
   423,
   503,
   497,
   267,
   164,
   198,
   130,
   260,
   260,
   284,
   438,
   212,
   601,
   314,
   462,
   187,
   135,
   148,
   210,
   195,
   314,
   306,
   336,
   284,
   486,
   323,
   124,
   137,
   616,
   667,
   591,
   985,
   952,
   1141,
   1330,
   1127,
   1395,
   0,
   4,
   9,
   22,
   48,
   103,
   166,
   587,
   452,
   189,
   118,
   222,
   278,
   227,
   269,
   247,
   497,
   450,
   627,
   328,
   603,
   428,
   188,
   145,
   217,
   81,
   148,
   178,
   31,
   18,
   65,
   14,
   20,
   20,
   25,
   89,
   274,
   157,
   110,
   120,
   150,
   177,
   190,
   277,
   210,
   67,
   78,
   30,
   80,
   14,
   20,
   38,
   22,
   210,
   174,
   223,
   415,
   539,
   271,
   553,
   581,
   891,
   587,
   607,
   164,
   358,
   446,
   456,
   401,
   289,
   122,
   419,
   482,
   871,
   274,
   204,
   576,
   367,
   529,
   401,
   669,
   333,
   418,
   249,
   408,
   146,
   218,
   274,
   356,
   286,
   379,
   874,
   475,
   1076,
   753,
   1555,
   1784,
   0,
   0,
   0,
   11,
   35,
   94,
   125,
   439,
   318,
   239,
   200,
   170,
   189,
   491,
   366,
   406,
   416,
   479,
   515,
   675,
   433,
   367,
   236,
   146,
   117,
   70,
   58,
   59,
   88,
   118,
   120,
   48,
   198,
   132,
   63,
   23,
   107,
   89,
   191,
   162,
   149,
   197,
   214,
   199,
   83,
   61,
   80,
   48,
   78,
   299,
   12,
   49,
   18,
   27,
   156,
   190,
   164,
   274,
   484,
   372,
   563,
   373,
   421,
   312,
   181,
   270,
   406,
   504,
   548,
   333,
   150,
   371,
   310,
   506,
   533,
   700,
   603,
   730,
   1008,
   583,
   687,
   576,
   417,
   555,
   375,
   442,
   437,
   254,
   362,
   467,
   222,
   625,
   805,
   546,
   516,
   843,
   1105,
   0,
   0,
   0,
   91,
   11,
   140,
   122,
   277,
   185,
   213,
   174,
   245,
   326,
   554,
   830,
   795,
   437,
   448,
   413,
   381,
   311,
   174,
   415,
   117,
   94,
   81,
   233,
   165,
   230,
   199,
   120,
   128,
   43,
   216,
   431,
   36,
   124,
   29,
   122,
   150,
   248,
   187,
   133,
   131,
   43,
   66,
   318,
   46,
   51,
   109,
   255,
   257,
   325,
   14,
   99,
   169,
   131,
   181,
   323,
   213,
   803,
   428,
   696,
   383,
   307,
   357,
   526,
   801,
   471,
   249,
   497,
   575,
   472,
   802,
   889,
   526,
   982,
   586,
   478,
   444,
   675,
   433,
   743,
   477,
   581,
   558,
   513,
   587,
   511,
   735,
   533,
   379,
   475,
   400,
   506,
   714,
   1419,
   0,
   0,
   0,
   0,
   90,
   34,
   15,
   14,
   18,
   172,
   424,
   190,
   335,
   197,
   287,
   310,
   304,
   742,
   502,
   628,
   483,
   574,
   174,
   148,
   218,
   102,
   221,
   128,
   190,
   157,
   141,
   286,
   111,
   189,
   410,
   288,
   83,
   110,
   99,
   203,
   152,
   91,
   70,
   260,
   121,
   46,
   107,
   130,
   87,
   141,
   156,
   140,
   151,
   97,
   50,
   155,
   382,
   243,
   143,
   343,
   262,
   264,
   292,
   467,
   618,
   350,
   524,
   640,
   301,
   733,
   483,
   771,
   850,
   589,
   674,
   647,
   685,
   517,
   542,
   645,
   577,
   524,
   893,
   1008,
   523,
   653,
   531,
   913,
   628,
   628,
   419,
   567,
   895,
   508,
   676,
   1017,
   1280,
   0,
   0,
   0,
   0,
   0,
   42,
   18,
   16,
   14,
   55,
   69,
   100,
   273,
   192,
   106,
   134,
   287,
   234,
   474,
   461,
   497,
   468,
   235,
   204,
   340,
   264,
   412,
   295,
   108,
   137,
   95,
   124,
   402,
   220,
   217,
   464,
   193,
   188,
   93,
   105,
   161,
   117,
   207,
   81,
   43,
   141,
   138,
   35,
   102,
   162,
   252,
   239,
   404,
   44,
   410,
   182,
   28,
   102,
   104,
   412,
   113,
   206,
   226,
   390,
   336,
   652,
   396,
   713,
   612,
   808,
   885,
   507,
   728,
   400,
   769,
   697,
   440,
   450,
   575,
   530,
   375,
   611,
   663,
   633,
   929,
   950,
   952,
   894,
   883,
   491,
   753,
   489,
   727,
   1226,
   637,
   779,
   1486,
   0,
   0,
   0,
   0,
   0,
   0,
   11,
   25,
   21,
   41,
   38,
   129,
   41,
   94,
   212,
   325,
   238,
   314,
   383,
   409,
   476,
   467,
   386,
   329,
   174,
   194,
   350,
   326,
   220,
   220,
   107,
   119,
   318,
   430,
   313,
   362,
   160,
   197,
   388,
   164,
   163,
   63,
   50,
   48,
   73,
   186,
   129,
   55,
   102,
   276,
   229,
   326,
   139,
   168,
   282,
   187,
   86,
   164,
   230,
   40,
   402,
   103,
   184,
   730,
   388,
   486,
   945,
   1046,
   774,
   747,
   701,
   456,
   818,
   417,
   599,
   869,
   353,
   444,
   524,
   1175,
   1292,
   506,
   961,
   879,
   1062,
   934,
   855,
   762,
   730,
   1562,
   1048,
   1049,
   1443,
   961,
   1349,
   814,
   1152,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   9,
   72,
   24,
   84,
   117,
   85,
   153,
   284,
   273,
   243,
   258,
   448,
   624,
   479,
   260,
   213,
   380,
   248,
   265,
   273,
   173,
   124,
   350,
   132,
   249,
   272,
   362,
   679,
   299,
   333,
   158,
   149,
   242,
   131,
   66,
   48,
   51,
   189,
   127,
   142,
   196,
   390,
   351,
   236,
   208,
   162,
   234,
   416,
   140,
   191,
   50,
   276,
   81,
   81,
   179,
   599,
   231,
   589,
   846,
   711,
   548,
   350,
   472,
   535,
   787,
   607,
   363,
   243,
   488,
   295,
   1014,
   1243,
   1020,
   1021,
   682,
   1156,
   914,
   887,
   707,
   797,
   644,
   700,
   975,
   960,
   1481,
   739,
   930,
   810,
   736,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   13,
   17,
   21,
   35,
   75,
   84,
   77,
   156,
   197,
   253,
   376,
   266,
   213,
   501,
   419,
   376,
   499,
   235,
   389,
   188,
   280,
   151,
   275,
   247,
   297,
   479,
   414,
   983,
   309,
   595,
   314,
   149,
   145,
   106,
   274,
   124,
   103,
   63,
   116,
   217,
   312,
   497,
   434,
   294,
   228,
   173,
   173,
   500,
   273,
   251,
   95,
   88,
   183,
   81,
   90,
   196,
   164,
   362,
   454,
   446,
   464,
   392,
   182,
   310,
   539,
   449,
   459,
   339,
   349,
   563,
   827,
   439,
   852,
   1548,
   1074,
   1092,
   1117,
   1271,
   809,
   901,
   829,
   928,
   492,
   605,
   523,
   569,
   810,
   807,
   1215,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   0,
   8,
   12,
   13,
   16,
   90,
   87,
   182,
   150,
   252,
   117,
   191,
   195,
   355,
   248,
   605,
   604,
   620,
   425,
   213,
   159,
   190,
   290,
   130,
   221,
   162,
   248,
   353,
   367,
   461,
   183,
   299,
   97,
   94,
   247,
   200,
   140,
   141,
   56,
   218,
   266,
   377,
   365,
   368,
   168,
   159,
   166,
   219,
   363,
   237,
   331,
   369,
   317,
   245,
   294,
   319,
   222,
   81,
   81,
   228,
   230,
   228,
   253,
   508,
   323,
   469,
   656,
   474,
   418,
   309,
   622,
   489,
   551,
   493,
   842,
   1009,
   1305,
   1105,
   1279,
   1196,
   675,
   522,
   449,
   414,
   650,
   904,
   877,
   911,
   1110,
   781,
   0,
   0,
   0,
   0,
   10,
   11,
   0,
   10,
   12,
   11,
   12,
   107,
   183,
   191,
   128,
   171,
   174,
   99,
   159,
   75,
   293,
   322,
   472,
   570,
   439,
   408,
   193,
   150,
   594,
   538,
   323,
   246,
   348,
   217,
   336,
   413,
   349,
   369,
   234,
   189,
   202,
   117,
   230,
   163,
   262,
   267,
   178,
   327,
   255,
   331,
   331,
   338,
   238,
   257,
   177,
   439,
   222,
   478,
   335,
   333,
   236,
   182,
   258,
   121,
   282,
   138,
   81,
   81,
   341,
   388,
   126,
   278,
   500,
   305,
   138,
   334,
   349,
   758,
   471,
   574,
   799,
   1351,
   991,
   652,
   862,
   701,
   1068,
   716,
   819,
   439,
   574,
   1198,
   1281,
   1162,
   1085,
   1356,
   945,
   0,
   0,
   0,
   0,
   10,
   7,
   8,
   8,
   7,
   30,
   9,
   45,
   80,
   121,
   265,
   210,
   117,
   201,
   56,
   68,
   168,
   179,
   234,
   456,
   501,
   415,
   662,
   182,
   346,
   429,
   214,
   375,
   431,
   389,
   496,
   561,
   212,
   385,
   191,
   124,
   171,
   105,
   232,
   201,
   401,
   195,
   271,
   186,
   253,
   620,
   423,
   286,
   263,
   250,
   261,
   276,
   258,
   296,
   504,
   317,
   330,
   321,
   298,
   428,
   123,
   179,
   162,
   345,
   385,
   81,
   301,
   362,
   211,
   155,
   361,
   809,
   561,
   316,
   488,
   701,
   908,
   869,
   582,
   479,
   603,
   902,
   1055,
   813,
   513,
   641,
   579,
   1061,
   1104,
   941,
   1118,
   1283,
   1313,
   0,
   10,
   13,
   9,
   7,
   8,
   8,
   12,
   18,
   19,
   17,
   26,
   27,
   104,
   183,
   111,
   34,
   90,
   169,
   184,
   246,
   257,
   432,
   543,
   363,
   617,
   554,
   396,
   319,
   384,
   287,
   377,
   289,
   427,
   403,
   576,
   200,
   263,
   236,
   218,
   229,
   204,
   205,
   128,
   400,
   342,
   221,
   315,
   211,
   305,
   348,
   278,
   257,
   393,
   443,
   401,
   328,
   757,
   381,
   449,
   387,
   455,
   310,
   455,
   353,
   288,
   377,
   463,
   346,
   408,
   400,
   81,
   114,
   104,
   390,
   521,
   577,
   389,
   783,
   772,
   673,
   513,
   779,
   589,
   891,
   682,
   839,
   813,
   1243,
   1162,
   524,
   511,
   594,
   1319,
   680,
   1254,
   1104,
   7,
   8,
   11,
   8,
   9,
   15,
   18,
   11,
   14,
   13,
   14,
   12,
   30,
   62,
   25,
   17,
   79,
   43,
   60,
   116,
   95,
   188,
   511,
   252,
   333,
   250,
   268,
   399,
   538,
   739,
   473,
   690,
   521,
   328,
   592,
   262,
   387,
   576,
   259,
   344,
   452,
   254,
   248,
   147,
   472,
   254,
   450,
   305,
   452,
   127,
   151,
   277,
   508,
   252,
   396,
   333,
   472,
   589,
   350,
   303,
   504,
   316,
   251,
   426,
   306,
   548,
   337,
   446,
   490,
   448,
   410,
   425,
   227,
   137,
   282,
   275,
   196,
   266,
   430,
   614,
   302,
   567,
   733,
   522,
   526,
   412,
   564,
   501,
   877,
   1338,
   820,
   340,
   402,
   756,
   917,
   775,
   770,
   9,
   8,
   8,
   9,
   17,
   9,
   10,
   8,
   12,
   11,
   12,
   12,
   64,
   19,
   18,
   36,
   32,
   76,
   71,
   112,
   193,
   331,
   344,
   336,
   450,
   366,
   412,
   424,
   431,
   391,
   508,
   701,
   672,
   579,
   350,
   586,
   503,
   524,
   306,
   375,
   297,
   229,
   239,
   243,
   314,
   418,
   343,
   349,
   562,
   345,
   411,
   193,
   339,
   593,
   576,
   380,
   473,
   800,
   499,
   462,
   323,
   354,
   385,
   266,
   232,
   288,
   292,
   621,
   567,
   373,
   285,
   535,
   217,
   455,
   97,
   317,
   195,
   311,
   276,
   357,
   225,
   606,
   473,
   396,
   768,
   782,
   607,
   1099,
   683,
   804,
   594,
   495,
   1228,
   949,
   707,
   720,
   1443,
   14,
   7,
   12,
   13,
   10,
   7,
   10,
   11,
   12,
   13,
   15,
   20,
   13,
   23,
   17,
   15,
   14,
   35,
   56,
   135,
   224,
   293,
   301,
   288,
   405,
   251,
   490,
   397,
   525,
   305,
   610,
   451,
   563,
   460,
   575,
   460,
   428,
   615,
   282,
   315,
   205,
   343,
   357,
   252,
   555,
   337,
   500,
   426,
   384,
   209,
   255,
   174,
   354,
   292,
   617,
   831,
   814,
   604,
   434,
   840,
   444,
   449,
   224,
   270,
   210,
   211,
   658,
   423,
   560,
   213,
   283,
   231,
   108,
   318,
   281,
   248,
   197,
   310,
   109,
   290,
   229,
   160,
   333,
   365,
   382,
   681,
   928,
   1084,
   861,
   967,
   517,
   591,
   307,
   1045,
   1031,
   1129,
   974,
   8,
   9,
   5,
   5,
   8,
   7,
   8,
   9,
   11,
   13,
   12,
   14,
   12,
   12,
   13,
   19,
   26,
   51,
   90,
   52,
   206,
   209,
   462,
   323,
   282,
   151,
   272,
   166,
   320,
   182,
   428,
   383,
   335,
   769,
   589,
   404,
   490,
   392,
   546,
   456,
   315,
   278,
   285,
   427,
   338,
   292,
   409,
   424,
   496,
   340,
   372,
   259,
   401,
   254,
   373,
   792,
   821,
   433,
   553,
   426,
   445,
   277,
   376,
   537,
   274,
   158,
   248,
   259,
   433,
   160,
   186,
   322,
   205,
   386,
   482,
   185,
   520,
   225,
   288,
   456,
   523,
   160,
   167,
   161,
   319,
   662,
   498,
   431,
   679,
   442,
   827,
   619,
   291,
   432,
   836,
   877,
   979,
   11,
   10,
   9,
   11,
   9,
   10,
   14,
   7,
   15,
   15,
   9,
   12,
   11,
   16,
   17,
   24,
   16,
   50,
   48,
   36,
   73,
   124,
   181,
   199,
   242,
   159,
   100,
   170,
   115,
   274,
   575,
   265,
   396,
   430,
   433,
   276,
   296,
   385,
   697,
   556,
   293,
   422,
   387,
   309,
   283,
   391,
   396,
   382,
   406,
   368,
   421,
   322,
   439,
   515,
   268,
   567,
   578,
   650,
   478,
   479,
   500,
   451,
   302,
   249,
   347,
   305,
   466,
   224,
   210,
   426,
   315,
   150,
   424,
   344,
   387,
   230,
   462,
   355,
   330,
   313,
   416,
   447,
   297,
   443,
   406,
   398,
   358,
   562,
   589,
   328,
   367,
   290,
   566,
   440,
   569,
   755,
   994,
   10,
   7,
   6,
   10,
   8,
   9,
   8,
   7,
   10,
   8,
   15,
   10,
   11,
   14,
   10,
   11,
   12,
   21,
   60,
   16,
   120,
   64,
   228,
   139,
   188,
   164,
   105,
   227,
   166,
   187,
   401,
   239,
   375,
   503,
   529,
   333,
   533,
   744,
   794,
   743,
   643,
   363,
   440,
   569,
   538,
   577,
   701,
   483,
   580,
   538,
   898,
   468,
   735,
   345,
   448,
   353,
   420,
   518,
   477,
   839,
   527,
   390,
   395,
   398,
   802,
   345,
   471,
   578,
   232,
   242,
   295,
   297,
   492,
   310,
   397,
   310,
   316,
   354,
   377,
   291,
   446,
   254,
   387,
   233,
   502,
   454,
   329,
   434,
   438,
   767,
   710,
   818,
   501,
   547,
   630,
   606,
   672,
   15,
   7,
   6,
   7,
   10,
   11,
   7,
   7,
   8,
   8,
   10,
   10,
   15,
   18,
   33,
   10,
   26,
   15,
   18,
   30,
   43,
   90,
   70,
   200,
   159,
   167,
   120,
   167,
   182,
   327,
   390,
   208,
   319,
   677,
   286,
   216,
   379,
   645,
   536,
   856,
   398,
   568,
   858,
   432,
   800,
   815,
   684,
   390,
   409,
   585,
   577,
   820,
   796,
   799,
   506,
   582,
   504,
   761,
   540,
   694,
   625,
   724,
   625,
   758,
   1011,
   420,
   204,
   218,
   281,
   648,
   281,
   397,
   448,
   401,
   820,
   363,
   491,
   469,
   491,
   657,
   672,
   509,
   491,
   192,
   432,
   388,
   528,
   290,
   379,
   458,
   903,
   634,
   869,
   519,
   610,
   626,
   723,
   6,
   7,
   7,
   7,
   7,
   8,
   7,
   16,
   8,
   11,
   13,
   9,
   13,
   12,
   14,
   13,
   12,
   10,
   15,
   12,
   31,
   26,
   26,
   120,
   151,
   89,
   313,
   393,
   175,
   95,
   256,
   171,
   139,
   505,
   443,
   395,
   358,
   536,
   330,
   507,
   845,
   615,
   882,
   272,
   664,
   802,
   875,
   1075,
   491,
   420,
   615,
   363,
   478,
   664,
   763,
   723,
   684,
   906,
   720,
   793,
   691,
   360,
   341,
   885,
   1034,
   990,
   368,
   218,
   424,
   549,
   655,
   272,
   504,
   716,
   876,
   783,
   707,
   587,
   715,
   902,
   812,
   678,
   397,
   410,
   298,
   173,
   286,
   374,
   534,
   478,
   745,
   927,
   966,
   672,
   818,
   764,
   895,
   6,
   7,
   6,
   9,
   6,
   10,
   12,
   9,
   15,
   20,
   8,
   14,
   8,
   8,
   9,
   13,
   12,
   18,
   25,
   29,
   11,
   37,
   32,
   32,
   77,
   73,
   111,
   323,
   56,
   198,
   283,
   137,
   231,
   152,
   245,
   180,
   321,
   347,
   322,
   673,
   499,
   422,
   420,
   283,
   789,
   539,
   675,
   538,
   476,
   295,
   523,
   436,
   580,
   501,
   798,
   952,
   574,
   559,
   622,
   593,
   616,
   767,
   755,
   374,
   317,
   429,
   236,
   235,
   288,
   569,
   310,
   569,
   357,
   653,
   613,
   589,
   673,
   506,
   611,
   603,
   741,
   933,
   800,
   642,
   369,
   383,
   245,
   500,
   362,
   551,
   402,
   704,
   953,
   994,
   769,
   1045,
   1223,
   8,
   8,
   6,
   11,
   6,
   8,
   11,
   11,
   7,
   10,
   16,
   10,
   10,
   14,
   17,
   14,
   14,
   15,
   15,
   13,
   20,
   19,
   17,
   28,
   24,
   29,
   37,
   37,
   147,
   91,
   112,
   177,
   280,
   253,
   206,
   250,
   298,
   585,
   281,
   500,
   714,
   456,
   229,
   327,
   302,
   572,
   415,
   321,
   428,
   260,
   300,
   369,
   567,
   604,
   692,
   1045,
   891,
   566,
   526,
   719,
   666,
   950,
   1038,
   769,
   759,
   782,
   669,
   230,
   294,
   302,
   417,
   299,
   346,
   597,
   607,
   671,
   562,
   484,
   559,
   587,
   879,
   878,
   670,
   547,
   470,
   510,
   617,
   238,
   933,
   724,
   804,
   493,
   780,
   814,
   1015,
   1135,
   1091,
   9,
   8,
   9,
   7,
   7,
   6,
   13,
   11,
   9,
   11,
   13,
   13,
   9,
   13,
   26,
   12,
   12,
   20,
   16,
   9,
   14,
   12,
   15,
   22,
   19,
   22,
   55,
   111,
   42,
   72,
   87,
   139,
   93,
   299,
   141,
   128,
   127,
   277,
   286,
   362,
   622,
   236,
   292,
   386,
   311,
   965,
   400,
   383,
   532,
   403,
   416,
   534,
   450,
   710,
   590,
   698,
   854,
   749,
   788,
   706,
   591,
   477,
   489,
   768,
   1013,
   635,
   310,
   238,
   384,
   299,
   299,
   512,
   403,
   412,
   616,
   304,
   338,
   480,
   448,
   629,
   572,
   901,
   1007,
   711,
   789,
   698,
   400,
   645,
   374,
   733,
   1064,
   631,
   434,
   714,
   925,
   877,
   873,
   8,
   8,
   7,
   11,
   8,
   14,
   8,
   11,
   12,
   18,
   8,
   15,
   11,
   16,
   11,
   11,
   13,
   10,
   14,
   14,
   16,
   15,
   26,
   14,
   18,
   22,
   27,
   25,
   54,
   74,
   74,
   239,
   341,
   505,
   298,
   162,
   206,
   241,
   129,
   427,
   152,
   150,
   229,
   436,
   356,
   382,
   366,
   257,
   500,
   304,
   459,
   563,
   566,
   524,
   629,
   686,
   480,
   724,
   574,
   715,
   569,
   625,
   332,
   409,
   287,
   357,
   436,
   549,
   532,
   470,
   534,
   395,
   337,
   382,
   296,
   469,
   465,
   534,
   721,
   651,
   785,
   787,
   798,
   1038,
   1100,
   1219,
   625,
   490,
   686,
   276,
   229,
   447,
   634,
   480,
   929,
   822,
   505,
   8,
   7,
   8,
   11,
   11,
   6,
   8,
   14,
   9,
   23,
   9,
   16,
   18,
   17,
   12,
   15,
   18,
   11,
   12,
   14,
   13,
   10,
   21,
   14,
   15,
   17,
   24,
   38,
   40,
   62,
   141,
   225,
   254,
   324,
   340,
   194,
   332,
   275,
   255,
   139,
   277,
   229,
   746,
   430,
   546,
   268,
   284,
   414,
   293,
   480,
   355,
   431,
   382,
   713,
   700,
   523,
   511,
   523,
   752,
   596,
   416,
   347,
   397,
   480,
   624,
   703,
   601,
   396,
   376,
   574,
   302,
   350,
   330,
   297,
   493,
   610,
   620,
   666,
   522,
   615,
   629,
   706,
   1071,
   902,
   1237,
   902,
   786,
   634,
   616,
   314,
   284,
   462,
   374,
   624,
   684,
   591,
   672,
   8,
   10,
   14,
   7,
   21,
   11,
   11,
   16,
   12,
   21,
   23,
   23,
   12,
   11,
   13,
   18,
   12,
   11,
   14,
   22,
   11,
   14,
   15,
   12,
   15,
   21,
   23,
   41,
   42,
   41,
   61,
   66,
   222,
   280,
   136,
   306,
   214,
   288,
   220,
   228,
   370,
   202,
   326,
   418,
   284,
   362,
   246,
   370,
   457,
   351,
   485,
   360,
   546,
   379,
   589,
   569,
   446,
   620,
   618,
   726,
   518,
   526,
   470,
   526,
   578,
   565,
   496,
   477,
   411,
   350,
   423,
   496,
   422,
   376,
   311,
   424,
   409,
   625,
   491,
   435,
   767,
   542,
   953,
   1052,
   873,
   777,
   725,
   870,
   752,
   652,
   595,
   854,
   658,
   393,
   459,
   659,
   559,
   13,
   20,
   15,
   26,
   12,
   11,
   10,
   12,
   14,
   12,
   13,
   17,
   19,
   10,
   15,
   14,
   11,
   11,
   9,
   16,
   16,
   14,
   13,
   14,
   18,
   26,
   25,
   26,
   32,
   46,
   71,
   124,
   135,
   89,
   102,
   115,
   209,
   288,
   238,
   293,
   389,
   364,
   324,
   473,
   663,
   415,
   484,
   456,
   530,
   540,
   392,
   355,
   761,
   598,
   572,
   802,
   827,
   609,
   654,
   631,
   612,
   514,
   571,
   571,
   580,
   659,
   615,
   349,
   578,
   528,
   520,
   520,
   387,
   449,
   326,
   547,
   390,
   474,
   367,
   485,
   581,
   647,
   720,
   869,
   958,
   766,
   619,
   942,
   1172,
   530,
   865,
   284,
   647,
   311,
   710,
   588,
   770,
   11,
   15,
   8,
   13,
   9,
   8,
   13,
   21,
   12,
   9,
   15,
   12,
   21,
   15,
   13,
   20,
   29,
   15,
   34,
   14,
   13,
   20,
   43,
   16,
   31,
   30,
   30,
   41,
   47,
   41,
   50,
   63,
   68,
   91,
   226,
   146,
   160,
   325,
   353,
   440,
   452,
   527,
   417,
   612,
   622,
   434,
   464,
   332,
   357,
   546,
   376,
   652,
   540,
   625,
   593,
   755,
   692,
   531,
   431,
   527,
   703,
   633,
   449,
   507,
   567,
   486,
   440,
   358,
   478,
   787,
   556,
   383,
   444,
   577,
   567,
   563,
   459,
   380,
   550,
   736,
   576,
   935,
   1179,
   619,
   779,
   556,
   590,
   1220,
   957,
   630,
   559,
   683,
   398,
   846,
   608,
   693,
   800,
   14,
   46,
   11,
   8,
   12,
   16,
   13,
   16,
   12,
   34,
   19,
   19,
   11,
   17,
   23,
   12,
   28,
   17,
   16,
   29,
   29,
   13,
   30,
   19,
   15,
   22,
   26,
   30,
   40,
   39,
   47,
   67,
   104,
   129,
   123,
   216,
   242,
   227,
   178,
   233,
   219,
   278,
   311,
   430,
   414,
   450,
   512,
   394,
   726,
   623,
   638,
   573,
   514,
   607,
   528,
   425,
   396,
   414,
   580,
   377,
   497,
   776,
   622,
   502,
   804,
   759,
   482,
   386,
   462,
   1050,
   619,
   506,
   709,
   575,
   689,
   506,
   634,
   323,
   479,
   610,
   502,
   691,
   752,
   570,
   610,
   488,
   556,
   652,
   1449,
   688,
   397,
   306,
   522,
   761,
   666,
   821,
   809,
   15,
   23,
   22,
   19,
   25,
   23,
   12,
   15,
   11,
   15,
   16,
   19,
   14,
   19,
   21,
   11,
   21,
   31,
   10,
   15,
   25,
   24,
   11,
   25,
   16,
   42,
   31,
   22,
   41,
   37,
   53,
   67,
   69,
   130,
   120,
   140,
   156,
   131,
   142,
   297,
   168,
   200,
   315,
   332,
   379,
   317,
   584,
   510,
   648,
   995,
   646,
   376,
   412,
   320,
   390,
   369,
   321,
   386,
   332,
   387,
   540,
   480,
   595,
   434,
   578,
   484,
   477,
   471,
   558,
   816,
   942,
   606,
   568,
   612,
   443,
   425,
   589,
   527,
   479,
   562,
   748,
   665,
   638,
   463,
   577,
   601,
   812,
   777,
   736,
   670,
   528,
   821,
   322,
   363,
   387,
   873,
   828,
   54,
   34,
   35,
   40,
   12,
   26,
   13,
   16,
   12,
   23,
   20,
   18,
   15,
   16,
   13,
   14,
   12,
   19,
   13,
   12,
   19,
   18,
   26,
   23,
   20,
   23,
   20,
   32,
   38,
   33,
   45,
   70,
   58,
   88,
   112,
   102,
   153,
   167,
   130,
   277,
   258,
   140,
   264,
   273,
   203,
   212,
   317,
   475,
   459,
   412,
   487,
   358,
   286,
   242,
   244,
   241,
   262,
   271,
   378,
   298,
   462,
   393,
   356,
   413,
   459,
   472,
   469,
   510,
   603,
   680,
   623,
   560,
   406,
   409,
   479,
   475,
   457,
   655,
   394,
   505,
   442,
   599,
   646,
   480,
   427,
   749,
   786,
   713,
   826,
   605,
   863,
   589,
   933,
   727,
   368,
   601,
   319,
   22,
   38,
   49,
   18,
   19,
   16,
   15,
   13,
   20,
   29,
   14,
   17,
   10,
   20,
   22,
   22,
   23,
   22,
   12,
   15,
   14,
   22,
   21,
   26,
   28,
   25,
   24,
   39,
   56,
   37,
   40,
   44,
   57,
   78,
   82,
   105,
   105,
   125,
   156,
   219,
   134,
   215,
   227,
   195,
   143,
   428,
   395,
   234,
   332,
   426,
   344,
   401,
   514,
   387,
   489,
   446,
   337,
   376,
   333,
   425,
   315,
   321,
   483,
   575,
   498,
   468,
   471,
   467,
   541,
   554,
   533,
   466,
   528,
   575,
   528,
   502,
   637,
   622,
   556,
   370,
   419,
   405,
   635,
   409,
   449,
   699,
   912,
   829,
   701,
   719,
   1024,
   915,
   813,
   523,
   295,
   364,
   586,
   85,
   22,
   40,
   22,
   22,
   18,
   24,
   16,
   19,
   22,
   23,
   14,
   14,
   12,
   34,
   16,
   17,
   17,
   15,
   18,
   21,
   21,
   22,
   26,
   18,
   36,
   36,
   44,
   40,
   57,
   46,
   42,
   43,
   59,
   64,
   78,
   86,
   104,
   122,
   101,
   153,
   126,
   158,
   233,
   245,
   282,
   303,
   300,
   281,
   141,
   205,
   313,
   265,
   326,
   603,
   678,
   485,
   547,
   857,
   651,
   452,
   417,
   420,
   637,
   534,
   567,
   434,
   516,
   580,
   564,
   804,
   533,
   560,
   623,
   789,
   607,
   517,
   480,
   695,
   423,
   466,
   411,
   550,
   524,
   613,
   461,
   669,
   700,
   862,
   615,
   825,
   1136,
   752,
   874,
   659,
   533,
   579,
   50,
   56,
   46,
   33,
   27,
   29,
   25,
   21,
   15,
   38,
   16,
   40,
   10,
   17,
   17,
   46,
   16,
   15,
   24,
   12,
   19,
   22,
   15,
   24,
   21,
   39,
   37,
   40,
   52,
   50,
   62,
   64,
   75,
   59,
   55,
   58,
   62,
   79,
   20,
   64,
   83,
   180,
   165,
   116,
   192,
   193,
   204,
   180,
   114,
   177,
   275,
   385,
   616,
   520,
   742,
   543,
   819,
   682,
   731,
   613,
   752,
   711,
   699,
   605,
   651,
   558,
   588,
   565,
   575,
   637,
   747,
   537,
   567,
   793,
   679,
   708,
   1010,
   631,
   561,
   448,
   787,
   719,
   597,
   684,
   560,
   654,
   549,
   628,
   771,
   621,
   590,
   754,
   1221,
   1251,
   941,
   835,
   875,
   66,
   69,
   60,
   43,
   24,
   19,
   34,
   25,
   27,
   34,
   24,
   29,
   14,
   20,
   14,
   19,
   40,
   13,
   19,
   22,
   23,
   15,
   23,
   34,
   26,
   30,
   47,
   39,
   48,
   48,
   55,
   94,
   145,
   114,
   110,
   118,
   82,
   149,
   142,
   162,
   109,
   136,
   119,
   143,
   182,
   116,
   251,
   118,
   271,
   389,
   351,
   373,
   432,
   490,
   581,
   447,
   553,
   562,
   460,
   526,
   652,
   595,
   566,
   680,
   700,
   567,
   509,
   568,
   687,
   800,
   628,
   648,
   613,
   639,
   657,
   730,
   737,
   617,
   607,
   624,
   575,
   871,
   858,
   712,
   756,
   481,
   586,
   527,
   516,
   620,
   838,
   683,
   697,
   952,
   1053,
   738,
   789,
   79,
   120,
   54,
   34,
   12,
   29,
   34,
   45,
   17,
   35,
   16,
   32,
   68,
   26,
   27,
   48,
   28,
   12,
   16,
   20,
   14,
   21,
   25,
   20,
   25,
   20,
   30,
   46,
   58,
   50,
   64,
   56,
   58,
   86,
   99,
   161,
   97,
   197,
   152,
   155,
   117,
   185,
   156,
   212,
   218,
   190,
   116,
   133,
   305,
   276,
   222,
   415,
   287,
   258,
   480,
   434,
   487,
   447,
   517,
   495,
   532,
   444,
   478,
   596,
   830,
   749,
   564,
   489,
   488,
   782,
   773,
   789,
   536,
   539,
   510,
   474,
   734,
   619,
   531,
   550,
   477,
   721,
   1071,
   734,
   656,
   613,
   587,
   568,
   570,
   487,
   633,
   549,
   579,
   764,
   1038,
   921,
   679,
   161,
   79,
   68,
   42,
   54,
   41,
   64,
   30,
   46,
   53,
   21,
   31,
   41,
   27,
   20,
   14,
   32,
   21,
   18,
   19,
   28,
   21,
   25,
   36,
   29,
   22,
   26,
   43,
   62,
   60,
   51,
   66,
   80,
   73,
   123,
   119,
   209,
   141,
   304,
   359,
   380,
   237,
   153,
   167,
   143,
   281,
   303,
   302,
   177,
   201,
   241,
   200,
   185,
   205,
   234,
   366,
   285,
   431,
   429,
   566,
   463,
   490,
   591,
   679,
   635,
   822,
   664,
   644,
   568,
   445,
   628,
   680,
   623,
   591,
   427,
   470,
   546,
   664,
   890,
   820,
   544,
   763,
   737,
   657,
   690,
   983,
   652,
   860,
   537,
   733,
   547,
   525,
   578,
   793,
   878,
   813,
   924,
   144,
   71,
   69,
   68,
   67,
   15,
   38,
   40,
   49,
   44,
   18,
   33,
   35,
   20,
   29,
   21,
   33,
   28,
   19,
   41,
   40,
   25,
   16,
   20,
   27,
   36,
   31,
   37,
   32,
   22,
   51,
   42,
   75,
   173,
   156,
   269,
   236,
   211,
   266,
   267,
   176,
   406,
   203,
   274,
   255,
   186,
   224,
   293,
   351,
   286,
   400,
   426,
   374,
   459,
   207,
   243,
   231,
   405,
   306,
   558,
   423,
   610,
   511,
   617,
   438,
   455,
   447,
   663,
   621,
   442,
   434,
   609,
   580,
   519,
   423,
   408,
   407,
   690,
   669,
   826,
   667,
   647,
   640,
   654,
   683,
   869,
   877,
   926,
   1022,
   741,
   739,
   629,
   540,
   566,
   630,
   988,
   1040,
   113,
   122,
   139,
   114,
   88,
   50,
   61,
   55,
   18,
   66,
   83,
   43,
   42,
   17,
   32,
   51,
   20,
   20,
   24,
   23,
   35,
   38,
   21,
   28,
   45,
   27,
   45,
   26,
   31,
   36,
   43,
   43,
   53,
   62,
   69,
   89,
   243,
   161,
   152,
   413,
   381,
   414,
   299,
   395,
   328,
   197,
   187,
   247,
   356,
   382,
   386,
   440,
   501,
   399,
   384,
   381,
   298,
   395,
   290,
   241,
   404,
   461,
   511,
   502,
   423,
   456,
   516,
   598,
   688,
   692,
   489,
   416,
   715,
   613,
   504,
   422,
   387,
   412,
   610,
   793,
   866,
   631,
   628,
   757,
   767,
   676,
   870,
   737,
   1027,
   818,
   663,
   693,
   740,
   741,
   766,
   817,
   1120,
   175,
   131,
   136,
   148,
   92,
   67,
   86,
   77,
   76,
   51,
   29,
   53,
   50,
   40,
   46,
   36,
   36,
   34,
   28,
   52,
   35,
   17,
   34,
   33,
   30,
   29,
   39,
   35,
   36,
   38,
   48,
   44,
   49,
   49,
   64,
   71,
   131,
   107,
   107,
   130,
   161,
   194,
   135,
   154,
   158,
   307,
   256,
   347,
   289,
   287,
   366,
   594,
   404,
   456,
   700,
   548,
   462,
   476,
   394,
   402,
   357,
   390,
   409,
   439,
   538,
   520,
   525,
   446,
   456,
   593,
   596,
   503,
   382,
   1022,
   756,
   571,
   523,
   398,
   386,
   416,
   544,
   628,
   733,
   816,
   733,
   643,
   679,
   737,
   789,
   1225,
   992,
   1059,
   789,
   839,
   802,
   808,
   874,
   148,
   147,
   132,
   97,
   105,
   99,
   71,
   63,
   60,
   54,
   58,
   34,
   53,
   44,
   30,
   48,
   44,
   38,
   57,
   32,
   30,
   53,
   24,
   32,
   39,
   58,
   24,
   33,
   33,
   50,
   38,
   39,
   63,
   45,
   55,
   114,
   67,
   97,
   158,
   276,
   282,
   102,
   132,
   237,
   282,
   271,
   292,
   157,
   238,
   226,
   441,
   387,
   323,
   499,
   422,
   414,
   683,
   473,
   429,
   493,
   443,
   476,
   384,
   326,
   443,
   439,
   388,
   406,
   441,
   623,
   452,
   452,
   432,
   384,
   681,
   738,
   857,
   437,
   475,
   434,
   370,
   383,
   429,
   393,
   418,
   733,
   473,
   834,
   807,
   868,
   923,
   1070,
   1040,
   887,
   879,
   788,
   719,
   125,
   159,
   114,
   87,
   90,
   127,
   109,
   102,
   70,
   59,
   60,
   65,
   48,
   44,
   56,
   49,
   57,
   24,
   46,
   66,
   51,
   22,
   70,
   25,
   63,
   88,
   79,
   92,
   57,
   43,
   69,
   28,
   40,
   44,
   51,
   53,
   59,
   120,
   127,
   112,
   101,
   117,
   157,
   93,
   173,
   184,
   125,
   225,
   268,
   320,
   415,
   248,
   279,
   229,
   246,
   322,
   391,
   581,
   537,
   512,
   441,
   359,
   358,
   406,
   392,
   475,
   492,
   389,
   413,
   406,
   413,
   572,
   516,
   513,
   371,
   472,
   499,
   460,
   518,
   645,
   373,
   364,
   360,
   414,
   455,
   454,
   465,
   699,
   1023,
   974,
   1083,
   931,
   869,
   991,
   836,
   786,
   744,
   164,
   153,
   130,
   131,
   84,
   80,
   80,
   75,
   83,
   81,
   78,
   60,
   74,
   60,
   34,
   34,
   71,
   63,
   67,
   81,
   60,
   33,
   50,
   123,
   131,
   65,
   56,
   47,
   53,
   66,
   63,
   66,
   36,
   33,
   44,
   57,
   55,
   71,
   129,
   108,
   206,
   172,
   146,
   210,
   171,
   138,
   261,
   144,
   137,
   167,
   201,
   146,
   297,
   392,
   329,
   351,
   424,
   499,
   480,
   428,
   679,
   362,
   444,
   386,
   385,
   373,
   390,
   448,
   364,
   380,
   436,
   381,
   492,
   520,
   363,
   370,
   562,
   423,
   478,
   569,
   436,
   421,
   349,
   392,
   416,
   591,
   516,
   618,
   849,
   820,
   829,
   814,
   774,
   747,
   740,
   672,
   706,
   134,
   154,
   142,
   146,
   93,
   101,
   80,
   90,
   84,
   79,
   79,
   76,
   57,
   64,
   70,
   78,
   61,
   60,
   58,
   49,
   23,
   22,
   58,
   31,
   98,
   96,
   104,
   55,
   54,
   116,
   76,
   60,
   61,
   45,
   53,
   67,
   57,
   86,
   62,
   155,
   194,
   111,
   121,
   194,
   445,
   306,
   222,
   403,
   380,
   381,
   231,
   250,
   273,
   216,
   318,
   511,
   329,
   398,
   385,
   311,
   359,
   382,
   466,
   634,
   428,
   413,
   371,
   357,
   356,
   357,
   351,
   386,
   399,
   371,
   491,
   354,
   333,
   376,
   430,
   702,
   571,
   387,
   348,
   393,
   419,
   466,
   503,
   618,
   626,
   710,
   832,
   989,
   771,
   691,
   637,
   619,
   767,
   140,
   129,
   145,
   130,
   113,
   109,
   95,
   93,
   91,
   70,
   81,
   80,
   65,
   67,
   104,
   138,
   77,
   118,
   77,
   56,
   45,
   58,
   31,
   39,
   74,
   102,
   87,
   69,
   68,
   110,
   125,
   83,
   60,
   90,
   77,
   106,
   92,
   87,
   43,
   61,
   170,
   185,
   157,
   112,
   240,
   200,
   266,
   502,
   263,
   368,
   333,
   226,
   158,
   232,
   415,
   442,
   250,
   264,
   367,
   327,
   497,
   330,
   599,
   452,
   589,
   405,
   418,
   370,
   374,
   357,
   344,
   368,
   364,
   361,
   410,
   389,
   355,
   362,
   345,
   361,
   463,
   394,
   367,
   359,
   358,
   374,
   447,
   611,
   468,
   524,
   851,
   643,
   621,
   587,
   582,
   580,
   555,
   205,
   172,
   139,
   144,
   168,
   111,
   104,
   105,
   98,
   94,
   78,
   52,
   67,
   74,
   86,
   99,
   97,
   100,
   98,
   39,
   68,
   20,
   102,
   116,
   164,
   84,
   69,
   31,
   118,
   139,
   236,
   95,
   70,
   52,
   42,
   50,
   66,
   60,
   72,
   155,
   69,
   91,
   190,
   168,
   237,
   240,
   244,
   249,
   230,
   199,
   152,
   132,
   222,
   190,
   280,
   461,
   432,
   445,
   500,
   248,
   301,
   524,
   439,
   745,
   457,
   579,
   524,
   476,
   410,
   459,
   511,
   371,
   335,
   334,
   341,
   365,
   352,
   316,
   336,
   353,
   319,
   329,
   331,
   320,
   369,
   382,
   425,
   429,
   544,
   510,
   625,
   707,
   773,
   611,
   635,
   563,
   563,
   211,
   195,
   160,
   165,
   114,
   112,
   109,
   100,
   108,
   116,
   122,
   97,
   79,
   85,
   91,
   112,
   145,
   102,
   74,
   63,
   60,
   56,
   36,
   74,
   140,
   171,
   89,
   81,
   95,
   149,
   115,
   75,
   80,
   55,
   60,
   34,
   60,
   63,
   65,
   69,
   97,
   99,
   100,
   150,
   200,
   121,
   132,
   181,
   181,
   163,
   165,
   319,
   239,
   351,
   335,
   734,
   460,
   413,
   498,
   589,
   493,
   471,
   508,
   455,
   551,
   464,
   402,
   386,
   353,
   351,
   349,
   367,
   335,
   332,
   322,
   354,
   342,
   337,
   312,
   352,
   343,
   354,
   306,
   340,
   372,
   360,
   361,
   419,
   380,
   424,
   455,
   666,
   655,
   702,
   706,
   641,
   660,
   255,
   223,
   166,
   136,
   128,
   129,
   118,
   115,
   126,
   120,
   118,
   114,
   101,
   99,
   102,
   163,
   113,
   123,
   140,
   91,
   75,
   37,
   78,
   79,
   166,
   298,
   132,
   98,
   86,
   56,
   78,
   91,
   123,
   56,
   63,
   60,
   55,
   65,
   72,
   75,
   71,
   89,
   84,
   92,
   120,
   189,
   237,
   139,
   283,
   254,
   140,
   226,
   381,
   226,
   226,
   266,
   345,
   389,
   353,
   492,
   480,
   518,
   462,
   460,
   423,
   440,
   476,
   404,
   370,
   417,
   369,
   362,
   348,
   348,
   324,
   335,
   325,
   339,
   349,
   324,
   344,
   321,
   302,
   326,
   497,
   365,
   385,
   369,
   392,
   401,
   508,
   499,
   572,
   789,
   717,
   587,
   635,
   256,
   217,
   159,
   192,
   155,
   112,
   129,
   138,
   159,
   151,
   139,
   132,
   144,
   146,
   127,
   128,
   142,
   179,
   121,
   75,
   74,
   56,
   47,
   34,
   89,
   136,
   148,
   83,
   83,
   72,
   125,
   136,
   151,
   60,
   54,
   66,
   98,
   71,
   110,
   72,
   75,
   81,
   82,
   93,
   138,
   196,
   220,
   259,
   301,
   237,
   279,
   193,
   164,
   319,
   336,
   315,
   350,
   301,
   396,
   334,
   351,
   353,
   497,
   406,
   418,
   393,
   405,
   363,
   364,
   342,
   355,
   327,
   331,
   327,
   323,
   317,
   317,
   312,
   339,
   336,
   307,
   326,
   305,
   317,
   353,
   355,
   384,
   496,
   713,
   543,
   432,
   420,
   620,
   669,
   792,
   723,
   672,
   212,
   188,
   220,
   200,
   162,
   153,
   187,
   179,
   191,
   185,
   174,
   183,
   171,
   174,
   164,
   156,
   161,
   117,
   114,
   113,
   145,
   92,
   83,
   112,
   78,
   84,
   65,
   66,
   60,
   70,
   106,
   129,
   89,
   60,
   46,
   83,
   92,
   67,
   87,
   103,
   94,
   104,
   122,
   134,
   96,
   149,
   176,
   184,
   257,
   276,
   328,
   271,
   249,
   279,
   277,
   296,
   252,
   229,
   326,
   333,
   391,
   423,
   401,
   385,
   384,
   396,
   360,
   353,
   367,
   366,
   411,
   360,
   365,
   394,
   338,
   333,
   319,
   324,
   311,
   300,
   328,
   299,
   281,
   304,
   327,
   339,
   375,
   344,
   331,
   330,
   458,
   369,
   599,
   484,
   663,
   796,
   740,
   174,
   217,
   174,
   203,
   198,
   200,
   228,
   227,
   223,
   226,
   211,
   201,
   203,
   189,
   200,
   188,
   219,
   125,
   116,
   104,
   145,
   130,
   80,
   68,
   77,
   77,
   98,
   88,
   63,
   78,
   83,
   79,
   62,
   71,
   103,
   89,
   116,
   93,
   103,
   121,
   98,
   119,
   129,
   198,
   219,
   204,
   140,
   148,
   241,
   173,
   213,
   210,
   349,
   250,
   232,
   250,
   226,
   244,
   407,
   310,
   341,
   374,
   381,
   369,
   368,
   423,
   396,
   409,
   414,
   348,
   347,
   393,
   365,
   374,
   403,
   347,
   349,
   330,
   313,
   312,
   348,
   293,
   286,
   286,
   317,
   317,
   339,
   294,
   350,
   362,
   420,
   502,
   556,
   521,
   538,
   561,
   867,
   221,
   232,
   237,
   233,
   227,
   240,
   242,
   241,
   243,
   240,
   253,
   231,
   224,
   214,
   177,
   168,
   143,
   128,
   125,
   94,
   110,
   98,
   104,
   62,
   69,
   94,
   77,
   104,
   85,
   68,
   72,
   36,
   86,
   78,
   110,
   125,
   112,
   115,
   112,
   146,
   130,
   116,
   136,
   193,
   281,
   224,
   224,
   187,
   182,
   236,
   181,
   205,
   200,
   223,
   210,
   207,
   375,
   227,
   263,
   301,
   338,
   348,
   399,
   312,
   393,
   316,
   349,
   400,
   398,
   426,
   374,
   367,
   403,
   373,
   347,
   338,
   366,
   317,
   339,
   371,
   388,
   334,
   330,
   294,
   297,
   273,
   288,
   345,
   320,
   314,
   311,
   327,
   521,
   702,
   509,
   542,
   618,
   262,
   255,
   254,
   257,
   246,
   252,
   245,
   252,
   253,
   260,
   237,
   232,
   221,
   205,
   185,
   176,
   174,
   159,
   144,
   144,
   146,
   136,
   126,
   115,
   87,
   35,
   91,
   85,
   71,
   72,
   76,
   74,
   75,
   74,
   96,
   104,
   112,
   123,
   117,
   115,
   121,
   148,
   170,
   176,
   270,
   241,
   212,
   222,
   243,
   219,
   260,
   320,
   270,
   201,
   258,
   373,
   242,
   360,
   440,
   463,
   331,
   346,
   345,
   321,
   392,
   280,
   337,
   411,
   349,
   388,
   374,
   365,
   386,
   352,
   350,
   326,
   325,
   361,
   361,
   323,
   309,
   315,
   308,
   312,
   332,
   312,
   274,
   296,
   271,
   295,
   335,
   358,
   333,
   376,
   563,
   416,
   410,
   269,
   267,
   269,
   258,
   255,
   249,
   245,
   254,
   254,
   240,
   237,
   236,
   231,
   210,
   195,
   185,
   179,
   172,
   161,
   152,
   168,
   148,
   133,
   119,
   105,
   92,
   79,
   85,
   88,
   52,
   22,
   77,
   69,
   85,
   76,
   95,
   90,
   122,
   113,
   139,
   157,
   144,
   145,
   159,
   212,
   220,
   283,
   205,
   172,
   224,
   302,
   458,
   282,
   228,
   337,
   350,
   295,
   236,
   324,
   314,
   320,
   337,
   327,
   309,
   257,
   284,
   341,
   344,
   300,
   408,
   390,
   378,
   385,
   356,
   338,
   326,
   395,
   335,
   314,
   327,
   351,
   376,
   332,
   317,
   363,
   293,
   307,
   343,
   286,
   320,
   298,
   319,
   335,
   367,
   317,
   342,
   392,
   271,
   276,
   270,
   262,
   264,
   252,
   249,
   242,
   253,
   235,
   236,
   230,
   227,
   212,
   201,
   183,
   177,
   171,
   170,
   160,
   169,
   154,
   142,
   118,
   105,
   93,
   43,
   77,
   114,
   70,
   63,
   62,
   73,
   83,
   81,
   89,
   98,
   99,
   143,
   133,
   131,
   123,
   126,
   173,
   178,
   191,
   237,
   279,
   252,
   179,
   190,
   289,
   278,
   287,
   260,
   415,
   301,
   253,
   264,
   311,
   248,
   294,
   252,
   282,
   277,
   313,
   331,
   286,
   326,
   339,
   403,
   363,
   359,
   356,
   338,
   332,
   357,
   381,
   316,
   322,
   351,
   331,
   309,
   327,
   390,
   379,
   342,
   305,
   379,
   350,
   333,
   287,
   310,
   277,
   314,
   355,
   342,
   263,
   271,
   270,
   265,
   255,
   259,
   256,
   262,
   238,
   239,
   235,
   239,
   220,
   212,
   201,
   191,
   200,
   180,
   168,
   155,
   143,
   154,
   157,
   137,
   151,
   151,
   113,
   116,
   68,
   74,
   75,
   73,
   83,
   114,
   132,
   77,
   86,
   81,
   105,
   110,
   108,
   133,
   156,
   169,
   158,
   158,
   180,
   247,
   240,
   251,
   198,
   214,
   335,
   297,
   348,
   329,
   238,
   260,
   315,
   210,
   273,
   265,
   258,
   300,
   314,
   359,
   332,
   313,
   396,
   333,
   391,
   444,
   416,
   357,
   367,
   339,
   369,
   341,
   330,
   340,
   351,
   326,
   464,
   487,
   337,
   324,
   333,
   341,
   347,
   339,
   307,
   345,
   332,
   379,
   275,
   260,
   316,
   264,
   261,
   256,
   257,
   252,
   246,
   239,
   234,
   232,
   232,
   233,
   237,
   222,
   216,
   214,
   208,
   199,
   182,
   186,
   164,
   149,
   168,
   152,
   145,
   126,
   130,
   146,
   48,
   111,
   123,
   31,
   80,
   75,
   85,
   104,
   84,
   90,
   97,
   89,
   94,
   110,
   133,
   121,
   141,
   137,
   146,
   160,
   166,
   256,
   317,
   310,
   236,
   221,
   319,
   359,
   404,
   321,
   193,
   245,
   343,
   268,
   244,
   278,
   352,
   399,
   292,
   303,
   295,
   369,
   406,
   351,
   384,
   369,
   425,
   374,
   359,
   407,
   373,
   393,
   344,
   367,
   332,
   338,
   352,
   332,
   363,
   344,
   324,
   328,
   280,
   352,
   307,
   313,
   364,
   318,
   276,
   258,
   251,
   247,
   250,
   240,
   244,
   240,
   233,
   236,
   229,
   223,
   241,
   217,
   223,
   224,
   216,
   210,
   195,
   176,
   177,
   180,
   167,
   151,
   161,
   160,
   140,
   117,
   137,
   124,
   92,
   116,
   78,
   82,
   75,
   87,
   126,
   89,
   88,
   107,
   136,
   130,
   100,
   104,
   116,
   121,
   128,
   141,
   148,
   147,
   191,
   270,
   310,
   275,
   292,
   280,
   314,
   257,
   331,
   259,
   241,
   246,
   235,
   252,
   287,
   289,
   330,
   316,
   324,
   382,
   316,
   387,
   366,
   478,
   453,
   378,
   404,
   382,
   393,
   630,
   404,
   364,
   419,
   347,
   361,
   336,
   391,
   425,
   474,
   400,
   323,
   453,
   428,
   454,
   367,
   335,
   356,
   349,
   322,
   252,
   245,
   243,
   233,
   244,
   227,
   225,
   230,
   230,
   227,
   221,
   213,
   220,
   216,
   204,
   204,
   200,
   191,
   178,
   172,
   167,
   151,
   167,
   158,
   128,
   123,
   133,
   121,
   100,
   105,
   87,
   96,
   81,
   70,
   113,
   97,
   93,
   97,
   112,
   116,
   134,
   135,
   135,
   143,
   162,
   158,
   184,
   158,
   189,
   228,
   213,
   278,
   338,
   305,
   302,
   280,
   241,
   207,
   218,
   241,
   274,
   283,
   291,
   283,
   329,
   388,
   381,
   337,
   339,
   345,
   337,
   385,
   327,
   348,
   338,
   337,
   371,
   400,
   396,
   394,
   324,
   386,
   425,
   381,
   489,
   416,
   368,
   357,
   413,
   594,
   564,
   382,
   502,
   457,
   562,
   283,
   255,
   222,
   224,
   233,
   227,
   218,
   220,
   214,
   214,
   211,
   199,
   209,
   213,
   210,
   201,
   203,
   194,
   183,
   188,
   183,
   172,
   163,
   165,
   148,
   144,
   142,
   117,
   87,
   93,
   110,
   107,
   87,
   79,
   85,
   78,
   93,
   96,
   91,
   103,
   140,
   133,
   136,
   141,
   153,
   134,
   166,
   175,
   192,
   173,
   178,
   186,
   212,
   225,
   344,
   317,
   251,
   267,
   253,
   204,
   264,
   268,
   246,
   286,
   340,
   278,
   308,
   302,
   317,
   348,
   494,
   385,
   320,
   299,
   340,
   378,
   314,
   315,
   341,
   364,
   341,
   393,
   322,
   359,
   364,
   338,
   427,
   397,
   486,
   706,
   727,
   709,
   556,
   467,
   397,
   407,
   327,
   314,
   261,
   228,
   223,
   229,
   213,
   217,
   206,
   207,
   211,
   211,
   206,
   212,
   216,
   202,
   209,
   190,
   190,
   182,
   183,
   176,
   178,
   160,
   153,
   141,
   141,
   149,
   131,
   113,
   124,
   106,
   105,
   103,
   92,
   93,
   97,
   91,
   113,
   103,
   93,
   106,
   123,
   131,
   130,
   122,
   145,
   151,
   159,
   151,
   175,
   179,
   157,
   206,
   233,
   296,
   277,
   307,
   280,
   204,
   200,
   260,
   214,
   245,
   295,
   289,
   300,
   302,
   296,
   309,
   348,
   285,
   277,
   298,
   322,
   366,
   426,
   332,
   359,
   343,
   306,
   340,
   367,
   271,
   350,
   320,
   302,
   755,
   775,
   523,
   393,
   475,
   326,
   318,
   386,
   371,
   297,
   407,
   406,
   339,
   223,
   214,
   209,
   203,
   198,
   214,
   212,
   219,
   218,
   222,
   211,
   195,
   187,
   195,
   190,
   186,
   191,
   190,
   168,
   172,
   161,
   149,
   140,
   150,
   144,
   135,
   135,
   113,
   91,
   102,
   114,
   77,
   88,
   104,
   86,
   95,
   124,
   97,
   100,
   108,
   105,
   115,
   125,
   119,
   129,
   142,
   158,
   158,
   188,
   176,
   181,
   210,
   257,
   322,
   285,
   290,
   237,
   204,
   215,
   194,
   244,
   259,
   245,
   279,
   392,
   319,
   361,
   270,
   257,
   310,
   429,
   368,
   357,
   403,
   323,
   442,
   300,
   326,
   380,
   295,
   319,
   291,
   403,
   340,
   412,
   490,
   572,
   476,
   398,
   366,
   423,
   515,
   341,
   390,
   377,
   557,
   406,
   207,
   207,
   205,
   200,
   200,
   201,
   206,
   196,
   202,
   194,
   189,
   193,
   185,
   186,
   179,
   181,
   184,
   179,
   186,
   167,
   160,
   160,
   143,
   141,
   136,
   133,
   146,
   126,
   112,
   107,
   98,
   105,
   86,
   96,
   82,
   95,
   109,
   142,
   109,
   105,
   113,
   102,
   146,
   137,
   141,
   136,
   153,
   166,
   176,
   166,
   162,
   189,
   232,
   216,
   252,
   193,
   216,
   233,
   204,
   221,
   229,
   253,
   228,
   243,
   264,
   265,
   263,
   232,
   272,
   296,
   343,
   361,
   300,
   328,
   323,
   310,
   316,
   341,
   265,
   386,
   270,
   276,
   418,
   383,
   369,
   563,
   512,
   563,
   401,
   637,
   411,
   553,
   482,
   467,
   372,
   517,
   629
  ],
  "source": "ASTER GDEM v3 (NASA/METI), 经 OpenTopoData 公共实例采样",
  "source_url": "https://lpdaac.usgs.gov/products/astgtmv003/",
  "min": 0.0,
  "max": 1784.0,
  "bbox": [
   122.0,
   40.0,
   126.8,
   43.3
  ]
 },
 "basemap": {
  "coastline": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       124.89,
       39.602
      ],
      [
       124.846,
       39.559
      ],
      [
       124.849,
       39.508
      ],
      [
       124.905,
       39.536
      ],
      [
       124.935,
       39.608
      ],
      [
       124.89,
       39.602
      ]
     ]
    },
    "n": null
   },
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        120.79,
        40.606
       ],
       [
        120.841,
        40.649
       ],
       [
        120.922,
        40.683
       ],
       [
        121.003,
        40.749
       ],
       [
        121.086,
        40.842
       ],
       [
        121.175,
        40.901
       ],
       [
        121.537,
        40.878
       ],
       [
        121.599,
        40.843
       ],
       [
        121.729,
        40.846
       ],
       [
        121.766,
        40.876
       ],
       [
        121.809,
        40.969
       ],
       [
        121.835,
        40.974
       ],
       [
        121.859,
        40.842
       ],
       [
        122.14,
        40.688
       ],
       [
        122.179,
        40.603
       ],
       [
        122.275,
        40.542
       ],
       [
        122.264,
        40.5
       ],
       [
        122.203,
        40.396
       ],
       [
        122.191,
        40.358
       ],
       [
        121.983,
        40.136
       ],
       [
        121.869,
        40.046
       ],
       [
        121.801,
        39.951
       ],
       [
        121.517,
        39.845
       ],
       [
        121.474,
        39.755
       ],
       [
        121.514,
        39.685
       ],
       [
        121.518,
        39.639
       ],
       [
        121.47,
        39.64
       ],
       [
        121.406,
        39.621
       ],
       [
        121.267,
        39.545
       ],
       [
        121.286,
        39.519
       ],
       [
        121.3,
        39.452
       ],
       [
        121.275,
        39.385
       ],
       [
        121.356,
        39.377
       ],
       [
        121.513,
        39.375
       ],
       [
        121.785,
        39.401
       ],
       [
        121.818,
        39.387
       ],
       [
        121.758,
        39.348
       ],
       [
        121.665,
        39.269
       ],
       [
        121.628,
        39.22
       ],
       [
        121.68,
        39.109
       ],
       [
        121.375,
        39.0
       ],
       [
        121.674,
        39.0
       ],
       [
        121.677,
        39.003
       ],
       [
        121.745,
        39.01
       ],
       [
        121.777,
        39.0
       ],
       [
        121.869,
        39.0
       ],
       [
        121.923,
        39.037
       ],
       [
        121.982,
        39.053
       ],
       [
        122.048,
        39.094
       ],
       [
        122.121,
        39.152
       ],
       [
        122.225,
        39.267
       ],
       [
        122.335,
        39.366
       ],
       [
        122.84,
        39.601
       ],
       [
        122.961,
        39.62
       ],
       [
        123.032,
        39.674
       ],
       [
        123.227,
        39.687
       ],
       [
        123.269,
        39.727
       ],
       [
        123.348,
        39.763
       ],
       [
        123.49,
        39.768
       ],
       [
        123.581,
        39.786
       ],
       [
        123.611,
        39.841
       ],
       [
        123.651,
        39.882
       ],
       [
        123.76,
        39.822
       ],
       [
        124.106,
        39.841
       ],
       [
        124.267,
        39.924
       ],
       [
        124.35,
        40.012
       ],
       [
        124.362,
        40.004
       ],
       [
        124.375,
        39.996
       ],
       [
        124.349,
        39.907
       ],
       [
        124.404,
        39.866
       ],
       [
        124.557,
        39.791
       ],
       [
        124.608,
        39.717
       ],
       [
        124.638,
        39.615
       ],
       [
        124.699,
        39.632
       ],
       [
        124.732,
        39.652
       ],
       [
        124.739,
        39.742
       ],
       [
        124.775,
        39.758
       ],
       [
        124.868,
        39.702
       ],
       [
        125.1,
        39.59
       ],
       [
        125.18,
        39.583
       ],
       [
        125.361,
        39.527
       ],
       [
        125.374,
        39.428
       ],
       [
        125.413,
        39.326
       ],
       [
        125.41,
        39.288
       ],
       [
        125.235,
        39.0
       ],
       [
        127.8,
        39.07
       ],
       [
        127.786,
        39.084
       ],
       [
        127.699,
        39.125
       ],
       [
        127.581,
        39.143
       ],
       [
        127.497,
        39.179
       ],
       [
        127.395,
        39.208
       ],
       [
        127.383,
        39.296
       ],
       [
        127.422,
        39.374
       ],
       [
        127.457,
        39.401
       ],
       [
        127.523,
        39.377
       ],
       [
        127.549,
        39.461
       ],
       [
        127.547,
        39.563
       ],
       [
        127.527,
        39.696
       ],
       [
        127.568,
        39.782
       ],
       [
        127.8,
        39.87
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
        124.905,
        39.536
       ],
       [
        124.849,
        39.508
       ],
       [
        124.846,
        39.559
       ],
       [
        124.89,
        39.602
       ],
       [
        124.935,
        39.608
       ],
       [
        124.905,
        39.536
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
        120.79,
        39.0
       ],
       [
        120.79,
        44.3
       ],
       [
        127.8,
        44.3
       ],
       [
        127.8,
        39.87
       ],
       [
        127.568,
        39.782
       ],
       [
        127.527,
        39.696
       ],
       [
        127.547,
        39.563
       ],
       [
        127.549,
        39.461
       ],
       [
        127.523,
        39.377
       ],
       [
        127.457,
        39.401
       ],
       [
        127.422,
        39.374
       ],
       [
        127.383,
        39.296
       ],
       [
        127.395,
        39.208
       ],
       [
        127.497,
        39.179
       ],
       [
        127.581,
        39.143
       ],
       [
        127.699,
        39.125
       ],
       [
        127.786,
        39.084
       ],
       [
        127.8,
        39.07
       ],
       [
        127.8,
        39.0
       ],
       [
        125.235,
        39.0
       ],
       [
        125.41,
        39.288
       ],
       [
        125.413,
        39.326
       ],
       [
        125.374,
        39.428
       ],
       [
        125.361,
        39.527
       ],
       [
        125.18,
        39.583
       ],
       [
        125.1,
        39.59
       ],
       [
        124.868,
        39.702
       ],
       [
        124.775,
        39.758
       ],
       [
        124.739,
        39.742
       ],
       [
        124.732,
        39.652
       ],
       [
        124.699,
        39.632
       ],
       [
        124.638,
        39.615
       ],
       [
        124.608,
        39.717
       ],
       [
        124.557,
        39.791
       ],
       [
        124.404,
        39.866
       ],
       [
        124.349,
        39.907
       ],
       [
        124.375,
        39.996
       ],
       [
        124.362,
        40.004
       ],
       [
        124.35,
        40.012
       ],
       [
        124.267,
        39.924
       ],
       [
        124.106,
        39.841
       ],
       [
        123.76,
        39.822
       ],
       [
        123.651,
        39.882
       ],
       [
        123.611,
        39.841
       ],
       [
        123.581,
        39.786
       ],
       [
        123.49,
        39.768
       ],
       [
        123.348,
        39.763
       ],
       [
        123.269,
        39.727
       ],
       [
        123.227,
        39.687
       ],
       [
        123.032,
        39.674
       ],
       [
        122.961,
        39.62
       ],
       [
        122.84,
        39.601
       ],
       [
        122.335,
        39.366
       ],
       [
        122.225,
        39.267
       ],
       [
        122.121,
        39.152
       ],
       [
        122.048,
        39.094
       ],
       [
        121.982,
        39.053
       ],
       [
        121.923,
        39.037
       ],
       [
        121.869,
        39.0
       ],
       [
        121.777,
        39.0
       ],
       [
        121.745,
        39.01
       ],
       [
        121.677,
        39.003
       ],
       [
        121.674,
        39.0
       ],
       [
        121.375,
        39.0
       ],
       [
        121.68,
        39.109
       ],
       [
        121.628,
        39.22
       ],
       [
        121.665,
        39.269
       ],
       [
        121.758,
        39.348
       ],
       [
        121.818,
        39.387
       ],
       [
        121.785,
        39.401
       ],
       [
        121.513,
        39.375
       ],
       [
        121.356,
        39.377
       ],
       [
        121.275,
        39.385
       ],
       [
        121.3,
        39.452
       ],
       [
        121.286,
        39.519
       ],
       [
        121.267,
        39.545
       ],
       [
        121.406,
        39.621
       ],
       [
        121.47,
        39.64
       ],
       [
        121.518,
        39.639
       ],
       [
        121.514,
        39.685
       ],
       [
        121.474,
        39.755
       ],
       [
        121.517,
        39.845
       ],
       [
        121.801,
        39.951
       ],
       [
        121.869,
        40.046
       ],
       [
        121.983,
        40.136
       ],
       [
        122.191,
        40.358
       ],
       [
        122.203,
        40.396
       ],
       [
        122.264,
        40.5
       ],
       [
        122.275,
        40.542
       ],
       [
        122.179,
        40.603
       ],
       [
        122.14,
        40.688
       ],
       [
        121.859,
        40.842
       ],
       [
        121.835,
        40.974
       ],
       [
        121.809,
        40.969
       ],
       [
        121.766,
        40.876
       ],
       [
        121.729,
        40.846
       ],
       [
        121.599,
        40.843
       ],
       [
        121.537,
        40.878
       ],
       [
        121.175,
        40.901
       ],
       [
        121.086,
        40.842
       ],
       [
        121.003,
        40.749
       ],
       [
        120.922,
        40.683
       ],
       [
        120.841,
        40.649
       ],
       [
        120.79,
        40.606
       ],
       [
        120.79,
        39.0
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
     "type": "Polygon",
     "coordinates": [
      [
       [
        120.79,
        44.3
       ],
       [
        120.79,
        42.219
       ],
       [
        120.79,
        42.219
       ],
       [
        120.821,
        42.228
       ],
       [
        120.83,
        42.253
       ],
       [
        120.883,
        42.243
       ],
       [
        120.883,
        42.27
       ],
       [
        120.934,
        42.28
       ],
       [
        120.993,
        42.265
       ],
       [
        121.029,
        42.243
       ],
       [
        121.071,
        42.254
       ],
       [
        121.088,
        42.279
       ],
       [
        121.121,
        42.281
       ],
       [
        121.134,
        42.3
       ],
       [
        121.185,
        42.333
       ],
       [
        121.219,
        42.372
       ],
       [
        121.285,
        42.388
       ],
       [
        121.315,
        42.428
       ],
       [
        121.305,
        42.436
       ],
       [
        121.386,
        42.474
       ],
       [
        121.435,
        42.475
       ],
       [
        121.479,
        42.496
       ],
       [
        121.506,
        42.482
       ],
       [
        121.571,
        42.487
       ],
       [
        121.608,
        42.516
       ],
       [
        121.604,
        42.495
       ],
       [
        121.666,
        42.437
       ],
       [
        121.699,
        42.439
       ],
       [
        121.748,
        42.485
       ],
       [
        121.803,
        42.515
       ],
       [
        121.818,
        42.504
       ],
       [
        121.831,
        42.534
       ],
       [
        121.844,
        42.522
       ],
       [
        121.89,
        42.557
       ],
       [
        121.921,
        42.606
       ],
       [
        121.916,
        42.656
       ],
       [
        121.942,
        42.666
       ],
       [
        121.939,
        42.688
       ],
       [
        122.019,
        42.699
       ],
       [
        122.062,
        42.724
       ],
       [
        122.073,
        42.71
       ],
       [
        122.161,
        42.685
       ],
       [
        122.205,
        42.685
       ],
       [
        122.205,
        42.733
       ],
       [
        122.261,
        42.696
       ],
       [
        122.325,
        42.685
       ],
       [
        122.339,
        42.67
       ],
       [
        122.396,
        42.684
       ],
       [
        122.396,
        42.707
       ],
       [
        122.461,
        42.755
       ],
       [
        122.439,
        42.77
       ],
       [
        122.372,
        42.776
       ],
       [
        122.351,
        42.83
       ],
       [
        122.437,
        42.843
       ],
       [
        122.556,
        42.828
       ],
       [
        122.576,
        42.819
       ],
       [
        122.58,
        42.79
       ],
       [
        122.625,
        42.773
       ],
       [
        122.654,
        42.783
       ],
       [
        122.733,
        42.786
       ],
       [
        122.738,
        42.771
       ],
       [
        122.786,
        42.757
       ],
       [
        122.849,
        42.712
       ],
       [
        122.883,
        42.752
       ],
       [
        122.887,
        42.77
       ],
       [
        122.926,
        42.772
       ],
       [
        122.946,
        42.754
       ],
       [
        122.98,
        42.778
       ],
       [
        123.058,
        42.769
       ],
       [
        123.118,
        42.801
       ],
       [
        123.228,
        42.832
       ],
       [
        123.17,
        42.86
       ],
       [
        123.189,
        42.896
       ],
       [
        123.184,
        42.926
       ],
       [
        123.259,
        42.993
       ],
       [
        123.323,
        43.001
       ],
       [
        123.435,
        43.028
       ],
       [
        123.475,
        43.042
       ],
       [
        123.536,
        43.007
       ],
       [
        123.573,
        43.003
       ],
       [
        123.581,
        43.036
       ],
       [
        123.631,
        43.088
       ],
       [
        123.636,
        43.142
       ],
       [
        123.667,
        43.18
       ],
       [
        123.646,
        43.209
       ],
       [
        123.677,
        43.224
       ],
       [
        123.664,
        43.265
       ],
       [
        123.698,
        43.272
       ],
       [
        123.704,
        43.37
       ],
       [
        123.608,
        43.366
       ],
       [
        123.545,
        43.415
       ],
       [
        123.52,
        43.402
       ],
       [
        123.486,
        43.445
       ],
       [
        123.442,
        43.438
       ],
       [
        123.42,
        43.41
       ],
       [
        123.383,
        43.469
       ],
       [
        123.364,
        43.483
       ],
       [
        123.316,
        43.492
       ],
       [
        123.33,
        43.519
       ],
       [
        123.305,
        43.551
       ],
       [
        123.36,
        43.567
       ],
       [
        123.453,
        43.546
       ],
       [
        123.461,
        43.569
       ],
       [
        123.434,
        43.575
       ],
       [
        123.421,
        43.598
       ],
       [
        123.512,
        43.593
       ],
       [
        123.51,
        43.625
       ],
       [
        123.537,
        43.634
       ],
       [
        123.518,
        43.682
       ],
       [
        123.52,
        43.708
       ],
       [
        123.483,
        43.737
       ],
       [
        123.498,
        43.771
       ],
       [
        123.462,
        43.823
       ],
       [
        123.468,
        43.854
       ],
       [
        123.397,
        43.955
       ],
       [
        123.371,
        43.97
       ],
       [
        123.401,
        43.979
       ],
       [
        123.366,
        44.014
       ],
       [
        123.331,
        44.029
       ],
       [
        123.328,
        44.084
       ],
       [
        123.351,
        44.093
       ],
       [
        123.363,
        44.133
       ],
       [
        123.387,
        44.162
       ],
       [
        123.324,
        44.18
       ],
       [
        123.287,
        44.212
       ],
       [
        123.277,
        44.253
       ],
       [
        123.236,
        44.3
       ],
       [
        122.687,
        44.3
       ],
       [
        122.675,
        44.286
       ],
       [
        122.642,
        44.284
       ],
       [
        122.516,
        44.251
       ],
       [
        122.483,
        44.237
       ],
       [
        122.319,
        44.233
       ],
       [
        122.271,
        44.256
       ],
       [
        122.288,
        44.3
       ],
       [
        120.79,
        44.3
       ]
      ]
     ]
    },
    "n": "内蒙古自治区"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         123.534,
         39.788
        ],
        [
         123.547,
         39.756
        ],
        [
         123.579,
         39.781
        ],
        [
         123.613,
         39.775
        ],
        [
         123.642,
         39.796
        ],
        [
         123.645,
         39.824
        ],
        [
         123.675,
         39.827
        ],
        [
         123.688,
         39.808
        ],
        [
         123.795,
         39.823
        ],
        [
         123.812,
         39.831
        ],
        [
         123.951,
         39.818
        ],
        [
         124.003,
         39.8
        ],
        [
         124.103,
         39.823
        ],
        [
         124.099,
         39.777
        ],
        [
         124.151,
         39.746
        ],
        [
         124.173,
         39.841
        ],
        [
         124.214,
         39.865
        ],
        [
         124.215,
         39.883
        ],
        [
         124.217,
         39.894
        ],
        [
         124.218,
         39.896
        ],
        [
         124.219,
         39.899
        ],
        [
         124.242,
         39.928
        ],
        [
         124.287,
         39.932
        ],
        [
         124.288,
         39.963
        ],
        [
         124.349,
         39.989
        ],
        [
         124.372,
         40.022
        ],
        [
         124.336,
         40.05
        ],
        [
         124.347,
         40.08
        ],
        [
         124.428,
         40.144
        ],
        [
         124.458,
         40.178
        ],
        [
         124.49,
         40.184
        ],
        [
         124.514,
         40.218
        ],
        [
         124.515,
         40.22
        ],
        [
         124.627,
         40.292
        ],
        [
         124.723,
         40.322
        ],
        [
         124.739,
         40.372
        ],
        [
         124.834,
         40.423
        ],
        [
         124.914,
         40.482
        ],
        [
         124.946,
         40.456
        ],
        [
         124.986,
         40.475
        ],
        [
         125.044,
         40.467
        ],
        [
         125.043,
         40.484
        ],
        [
         125.005,
         40.496
        ],
        [
         125.016,
         40.534
        ],
        [
         125.077,
         40.562
        ],
        [
         125.114,
         40.569
        ],
        [
         125.182,
         40.611
        ],
        [
         125.263,
         40.62
        ],
        [
         125.279,
         40.655
        ],
        [
         125.305,
         40.661
        ],
        [
         125.329,
         40.644
        ],
        [
         125.376,
         40.658
        ],
        [
         125.422,
         40.636
        ],
        [
         125.419,
         40.673
        ],
        [
         125.454,
         40.677
        ],
        [
         125.46,
         40.707
        ],
        [
         125.496,
         40.729
        ],
        [
         125.545,
         40.73
        ],
        [
         125.551,
         40.762
        ],
        [
         125.586,
         40.789
        ],
        [
         125.617,
         40.764
        ],
        [
         125.685,
         40.769
        ],
        [
         125.676,
         40.788
        ],
        [
         125.641,
         40.799
        ],
        [
         125.648,
         40.826
        ],
        [
         125.708,
         40.867
        ],
        [
         125.688,
         40.898
        ],
        [
         125.652,
         40.916
        ],
        [
         125.584,
         40.892
        ],
        [
         125.589,
         40.931
        ],
        [
         125.635,
         40.942
        ],
        [
         125.65,
         40.971
        ],
        [
         125.675,
         40.975
        ],
        [
         125.684,
         41.022
        ],
        [
         125.727,
         41.055
        ],
        [
         125.74,
         41.089
        ],
        [
         125.712,
         41.095
        ],
        [
         125.734,
         41.126
        ],
        [
         125.76,
         41.133
        ],
        [
         125.791,
         41.168
        ],
        [
         125.738,
         41.178
        ],
        [
         125.759,
         41.232
        ],
        [
         125.749,
         41.245
        ],
        [
         125.695,
         41.245
        ],
        [
         125.685,
         41.274
        ],
        [
         125.647,
         41.264
        ],
        [
         125.642,
         41.296
        ],
        [
         125.62,
         41.318
        ],
        [
         125.637,
         41.344
        ],
        [
         125.61,
         41.365
        ],
        [
         125.59,
         41.359
        ],
        [
         125.581,
         41.397
        ],
        [
         125.548,
         41.401
        ],
        [
         125.534,
         41.429
        ],
        [
         125.533,
         41.479
        ],
        [
         125.493,
         41.509
        ],
        [
         125.507,
         41.534
        ],
        [
         125.48,
         41.545
        ],
        [
         125.45,
         41.598
        ],
        [
         125.461,
         41.643
        ],
        [
         125.447,
         41.676
        ],
        [
         125.412,
         41.691
        ],
        [
         125.344,
         41.672
        ],
        [
         125.317,
         41.677
        ],
        [
         125.332,
         41.711
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.295,
         41.823
        ],
        [
         125.308,
         41.925
        ],
        [
         125.352,
         41.928
        ],
        [
         125.292,
         41.959
        ],
        [
         125.299,
         41.974
        ],
        [
         125.37,
         42.003
        ],
        [
         125.363,
         42.017
        ],
        [
         125.416,
         42.064
        ],
        [
         125.414,
         42.102
        ],
        [
         125.446,
         42.098
        ],
        [
         125.49,
         42.136
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.414,
         42.156
        ],
        [
         125.368,
         42.183
        ],
        [
         125.357,
         42.145
        ],
        [
         125.306,
         42.146
        ],
        [
         125.313,
         42.197
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.22
        ],
        [
         125.276,
         42.231
        ],
        [
         125.276,
         42.267
        ],
        [
         125.299,
         42.29
        ],
        [
         125.264,
         42.313
        ],
        [
         125.224,
         42.301
        ],
        [
         125.175,
         42.308
        ],
        [
         125.167,
         42.352
        ],
        [
         125.204,
         42.367
        ],
        [
         125.186,
         42.382
        ],
        [
         125.186,
         42.428
        ],
        [
         125.14,
         42.447
        ],
        [
         125.15,
         42.459
        ],
        [
         125.105,
         42.491
        ],
        [
         125.069,
         42.499
        ],
        [
         125.091,
         42.516
        ],
        [
         125.067,
         42.535
        ],
        [
         125.09,
         42.568
        ],
        [
         125.083,
         42.591
        ],
        [
         125.097,
         42.622
        ],
        [
         125.039,
         42.615
        ],
        [
         125.011,
         42.632
        ],
        [
         125.015,
         42.666
        ],
        [
         124.991,
         42.677
        ],
        [
         124.968,
         42.723
        ],
        [
         124.997,
         42.745
        ],
        [
         124.975,
         42.803
        ],
        [
         124.928,
         42.82
        ],
        [
         124.898,
         42.788
        ],
        [
         124.874,
         42.79
        ],
        [
         124.857,
         42.824
        ],
        [
         124.85,
         42.883
        ],
        [
         124.872,
         42.962
        ],
        [
         124.87,
         42.988
        ],
        [
         124.841,
         43.032
        ],
        [
         124.889,
         43.075
        ],
        [
         124.883,
         43.134
        ],
        [
         124.785,
         43.117
        ],
        [
         124.755,
         43.074
        ],
        [
         124.72,
         43.07
        ],
        [
         124.687,
         43.051
        ],
        [
         124.678,
         43.002
        ],
        [
         124.659,
         42.973
        ],
        [
         124.635,
         42.973
        ],
        [
         124.632,
         42.95
        ],
        [
         124.607,
         42.937
        ],
        [
         124.587,
         42.905
        ],
        [
         124.466,
         42.847
        ],
        [
         124.436,
         42.881
        ],
        [
         124.372,
         42.881
        ],
        [
         124.381,
         42.913
        ],
        [
         124.432,
         42.931
        ],
        [
         124.442,
         42.959
        ],
        [
         124.423,
         42.975
        ],
        [
         124.37,
         42.973
        ],
        [
         124.333,
         42.997
        ],
        [
         124.426,
         43.076
        ],
        [
         124.366,
         43.122
        ],
        [
         124.274,
         43.179
        ],
        [
         124.287,
         43.208
        ],
        [
         124.276,
         43.233
        ],
        [
         124.229,
         43.235
        ],
        [
         124.215,
         43.256
        ],
        [
         124.168,
         43.244
        ],
        [
         124.114,
         43.247
        ],
        [
         124.117,
         43.277
        ],
        [
         124.099,
         43.293
        ],
        [
         124.033,
         43.281
        ],
        [
         123.964,
         43.341
        ],
        [
         123.896,
         43.361
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.852,
         43.406
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.797,
         43.49
        ],
        [
         123.748,
         43.472
        ],
        [
         123.749,
         43.439
        ],
        [
         123.71,
         43.417
        ],
        [
         123.704,
         43.37
        ],
        [
         123.698,
         43.272
        ],
        [
         123.664,
         43.265
        ],
        [
         123.677,
         43.224
        ],
        [
         123.646,
         43.209
        ],
        [
         123.667,
         43.18
        ],
        [
         123.636,
         43.142
        ],
        [
         123.631,
         43.088
        ],
        [
         123.581,
         43.036
        ],
        [
         123.573,
         43.003
        ],
        [
         123.536,
         43.007
        ],
        [
         123.475,
         43.042
        ],
        [
         123.435,
         43.028
        ],
        [
         123.323,
         43.001
        ],
        [
         123.259,
         42.993
        ],
        [
         123.184,
         42.926
        ],
        [
         123.189,
         42.896
        ],
        [
         123.17,
         42.86
        ],
        [
         123.228,
         42.832
        ],
        [
         123.118,
         42.801
        ],
        [
         123.058,
         42.769
        ],
        [
         122.98,
         42.778
        ],
        [
         122.946,
         42.754
        ],
        [
         122.926,
         42.772
        ],
        [
         122.887,
         42.77
        ],
        [
         122.883,
         42.752
        ],
        [
         122.883,
         42.752
        ],
        [
         122.849,
         42.712
        ],
        [
         122.849,
         42.712
        ],
        [
         122.786,
         42.757
        ],
        [
         122.738,
         42.771
        ],
        [
         122.733,
         42.786
        ],
        [
         122.654,
         42.783
        ],
        [
         122.625,
         42.773
        ],
        [
         122.58,
         42.79
        ],
        [
         122.576,
         42.819
        ],
        [
         122.556,
         42.828
        ],
        [
         122.437,
         42.843
        ],
        [
         122.351,
         42.83
        ],
        [
         122.372,
         42.776
        ],
        [
         122.439,
         42.77
        ],
        [
         122.461,
         42.755
        ],
        [
         122.396,
         42.707
        ],
        [
         122.396,
         42.684
        ],
        [
         122.339,
         42.67
        ],
        [
         122.325,
         42.685
        ],
        [
         122.261,
         42.696
        ],
        [
         122.205,
         42.733
        ],
        [
         122.205,
         42.685
        ],
        [
         122.161,
         42.685
        ],
        [
         122.073,
         42.71
        ],
        [
         122.062,
         42.724
        ],
        [
         122.019,
         42.699
        ],
        [
         121.939,
         42.688
        ],
        [
         121.942,
         42.666
        ],
        [
         121.916,
         42.656
        ],
        [
         121.921,
         42.606
        ],
        [
         121.89,
         42.557
        ],
        [
         121.844,
         42.522
        ],
        [
         121.831,
         42.534
        ],
        [
         121.818,
         42.504
        ],
        [
         121.803,
         42.515
        ],
        [
         121.748,
         42.485
        ],
        [
         121.699,
         42.439
        ],
        [
         121.666,
         42.437
        ],
        [
         121.604,
         42.495
        ],
        [
         121.608,
         42.516
        ],
        [
         121.571,
         42.487
        ],
        [
         121.506,
         42.482
        ],
        [
         121.479,
         42.496
        ],
        [
         121.435,
         42.475
        ],
        [
         121.386,
         42.474
        ],
        [
         121.305,
         42.436
        ],
        [
         121.315,
         42.428
        ],
        [
         121.285,
         42.388
        ],
        [
         121.219,
         42.372
        ],
        [
         121.185,
         42.333
        ],
        [
         121.134,
         42.3
        ],
        [
         121.121,
         42.281
        ],
        [
         121.088,
         42.279
        ],
        [
         121.071,
         42.254
        ],
        [
         121.029,
         42.243
        ],
        [
         120.993,
         42.265
        ],
        [
         120.934,
         42.28
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.27
        ],
        [
         120.883,
         42.243
        ],
        [
         120.83,
         42.253
        ],
        [
         120.821,
         42.228
        ],
        [
         120.79,
         42.219
        ],
        [
         120.79,
         42.219
        ],
        [
         120.79,
         40.575
        ],
        [
         120.823,
         40.594
        ],
        [
         120.837,
         40.644
        ],
        [
         120.83,
         40.671
        ],
        [
         120.861,
         40.685
        ],
        [
         120.94,
         40.687
        ],
        [
         120.983,
         40.713
        ],
        [
         121.033,
         40.709
        ],
        [
         121.029,
         40.746
        ],
        [
         120.991,
         40.744
        ],
        [
         120.98,
         40.766
        ],
        [
         120.994,
         40.791
        ],
        [
         120.972,
         40.806
        ],
        [
         121.007,
         40.808
        ],
        [
         121.011,
         40.784
        ],
        [
         121.087,
         40.798
        ],
        [
         121.077,
         40.816
        ],
        [
         121.097,
         40.84
        ],
        [
         121.126,
         40.869
        ],
        [
         121.178,
         40.874
        ],
        [
         121.236,
         40.851
        ],
        [
         121.291,
         40.851
        ],
        [
         121.439,
         40.83
        ],
        [
         121.44,
         40.882
        ],
        [
         121.499,
         40.88
        ],
        [
         121.527,
         40.852
        ],
        [
         121.555,
         40.85
        ],
        [
         121.553,
         40.818
        ],
        [
         121.576,
         40.838
        ],
        [
         121.626,
         40.844
        ],
        [
         121.683,
         40.83
        ],
        [
         121.732,
         40.847
        ],
        [
         121.735,
         40.862
        ],
        [
         121.778,
         40.887
        ],
        [
         121.816,
         40.895
        ],
        [
         121.843,
         40.832
        ],
        [
         121.884,
         40.802
        ],
        [
         121.934,
         40.798
        ],
        [
         121.936,
         40.711
        ],
        [
         121.952,
         40.681
        ],
        [
         122.025,
         40.674
        ],
        [
         122.066,
         40.649
        ],
        [
         122.122,
         40.657
        ],
        [
         122.149,
         40.672
        ],
        [
         122.134,
         40.614
        ],
        [
         122.15,
         40.588
        ],
        [
         122.246,
         40.52
        ],
        [
         122.231,
         40.505
        ],
        [
         122.265,
         40.48
        ],
        [
         122.222,
         40.481
        ],
        [
         122.24,
         40.461
        ],
        [
         122.251,
         40.446
        ],
        [
         122.229,
         40.424
        ],
        [
         122.187,
         40.423
        ],
        [
         122.199,
         40.382
        ],
        [
         122.152,
         40.358
        ],
        [
         122.136,
         40.375
        ],
        [
         122.111,
         40.349
        ],
        [
         122.138,
         40.339
        ],
        [
         122.11,
         40.316
        ],
        [
         122.08,
         40.333
        ],
        [
         122.04,
         40.322
        ],
        [
         122.04,
         40.26
        ],
        [
         122.027,
         40.245
        ],
        [
         121.94,
         40.242
        ],
        [
         121.95,
         40.204
        ],
        [
         121.981,
         40.173
        ],
        [
         122.003,
         40.172
        ],
        [
         121.995,
         40.128
        ],
        [
         121.956,
         40.133
        ],
        [
         121.91,
         40.073
        ],
        [
         121.825,
         40.026
        ],
        [
         121.796,
         39.999
        ],
        [
         121.779,
         39.943
        ],
        [
         121.764,
         39.934
        ],
        [
         121.7,
         39.937
        ],
        [
         121.627,
         39.883
        ],
        [
         121.572,
         39.865
        ],
        [
         121.542,
         39.874
        ],
        [
         121.53,
         39.851
        ],
        [
         121.472,
         39.802
        ],
        [
         121.487,
         39.76
        ],
        [
         121.459,
         39.748
        ],
        [
         121.503,
         39.703
        ],
        [
         121.483,
         39.659
        ],
        [
         121.452,
         39.658
        ],
        [
         121.45,
         39.625
        ],
        [
         121.326,
         39.601
        ],
        [
         121.299,
         39.606
        ],
        [
         121.264,
         39.59
        ],
        [
         121.227,
         39.555
        ],
        [
         121.225,
         39.519
        ],
        [
         121.268,
         39.483
        ],
        [
         121.287,
         39.507
        ],
        [
         121.302,
         39.476
        ],
        [
         121.246,
         39.457
        ],
        [
         121.27,
         39.434
        ],
        [
         121.247,
         39.421
        ],
        [
         121.246,
         39.389
        ],
        [
         121.27,
         39.374
        ],
        [
         121.308,
         39.391
        ],
        [
         121.324,
         39.371
        ],
        [
         121.355,
         39.378
        ],
        [
         121.433,
         39.358
        ],
        [
         121.436,
         39.33
        ],
        [
         121.467,
         39.32
        ],
        [
         121.475,
         39.296
        ],
        [
         121.509,
         39.292
        ],
        [
         121.515,
         39.287
        ],
        [
         121.562,
         39.323
        ],
        [
         121.621,
         39.326
        ],
        [
         121.725,
         39.364
        ],
        [
         121.712,
         39.34
        ],
        [
         121.719,
         39.32
        ],
        [
         121.668,
         39.311
        ],
        [
         121.673,
         39.276
        ],
        [
         121.624,
         39.286
        ],
        [
         121.589,
         39.263
        ],
        [
         121.631,
         39.226
        ],
        [
         121.591,
         39.229
        ],
        [
         121.587,
         39.194
        ],
        [
         121.604,
         39.166
        ],
        [
         121.639,
         39.166
        ],
        [
         121.682,
         39.118
        ],
        [
         121.632,
         39.078
        ],
        [
         121.606,
         39.081
        ],
        [
         121.642,
         39.12
        ],
        [
         121.591,
         39.155
        ],
        [
         121.562,
         39.127
        ],
        [
         121.599,
         39.099
        ],
        [
         121.582,
         39.076
        ],
        [
         121.508,
         39.034
        ],
        [
         121.431,
         39.027
        ],
        [
         121.371,
         39.06
        ],
        [
         121.317,
         39.012
        ],
        [
         121.327,
         39.0
        ],
        [
         121.669,
         39.0
        ],
        [
         121.671,
         39.01
        ],
        [
         121.732,
         39.0
        ],
        [
         121.739,
         39.0
        ],
        [
         121.757,
         39.026
        ],
        [
         121.79,
         39.023
        ],
        [
         121.797,
         39.0
        ],
        [
         121.902,
         39.0
        ],
        [
         121.853,
         39.036
        ],
        [
         121.889,
         39.027
        ],
        [
         121.929,
         39.025
        ],
        [
         121.907,
         39.056
        ],
        [
         121.923,
         39.054
        ],
        [
         121.963,
         39.03
        ],
        [
         122.014,
         39.073
        ],
        [
         122.062,
         39.06
        ],
        [
         122.072,
         39.074
        ],
        [
         122.048,
         39.101
        ],
        [
         122.088,
         39.112
        ],
        [
         122.128,
         39.145
        ],
        [
         122.167,
         39.159
        ],
        [
         122.124,
         39.173
        ],
        [
         122.117,
         39.214
        ],
        [
         122.16,
         39.238
        ],
        [
         122.243,
         39.268
        ],
        [
         122.275,
         39.322
        ],
        [
         122.309,
         39.346
        ],
        [
         122.366,
         39.37
        ],
        [
         122.413,
         39.412
        ],
        [
         122.455,
         39.408
        ],
        [
         122.468,
         39.403
        ],
        [
         122.512,
         39.413
        ],
        [
         122.533,
         39.42
        ],
        [
         122.582,
         39.464
        ],
        [
         122.637,
         39.489
        ],
        [
         122.649,
         39.517
        ],
        [
         122.683,
         39.515
        ],
        [
         122.809,
         39.56
        ],
        [
         122.847,
         39.582
        ],
        [
         122.861,
         39.605
        ],
        [
         122.942,
         39.605
        ],
        [
         122.973,
         39.595
        ],
        [
         122.979,
         39.616
        ],
        [
         123.021,
         39.643
        ],
        [
         123.011,
         39.655
        ],
        [
         123.103,
         39.677
        ],
        [
         123.146,
         39.647
        ],
        [
         123.167,
         39.674
        ],
        [
         123.213,
         39.666
        ],
        [
         123.215,
         39.697
        ],
        [
         123.253,
         39.69
        ],
        [
         123.287,
         39.704
        ],
        [
         123.27,
         39.715
        ],
        [
         123.275,
         39.754
        ],
        [
         123.351,
         39.751
        ],
        [
         123.389,
         39.747
        ],
        [
         123.393,
         39.724
        ],
        [
         123.478,
         39.747
        ],
        [
         123.522,
         39.773
        ],
        [
         123.534,
         39.788
        ]
       ]
      ],
      [
       [
        [
         122.64,
         39.286
        ],
        [
         122.593,
         39.278
        ],
        [
         122.539,
         39.308
        ],
        [
         122.509,
         39.29
        ],
        [
         122.577,
         39.27
        ],
        [
         122.679,
         39.269
        ],
        [
         122.673,
         39.27
        ],
        [
         122.663,
         39.274
        ],
        [
         122.656,
         39.277
        ],
        [
         122.641,
         39.288
        ],
        [
         122.64,
         39.286
        ]
       ]
      ],
      [
       [
        [
         122.319,
         39.171
        ],
        [
         122.345,
         39.145
        ],
        [
         122.366,
         39.175
        ],
        [
         122.399,
         39.162
        ],
        [
         122.383,
         39.191
        ],
        [
         122.393,
         39.213
        ],
        [
         122.343,
         39.203
        ],
        [
         122.322,
         39.177
        ],
        [
         122.323,
         39.174
        ],
        [
         122.319,
         39.172
        ],
        [
         122.319,
         39.171
        ]
       ]
      ],
      [
       [
        [
         122.692,
         39.233
        ],
        [
         122.697,
         39.206
        ],
        [
         122.752,
         39.23
        ],
        [
         122.741,
         39.249
        ],
        [
         122.636,
         39.242
        ],
        [
         122.628,
         39.232
        ],
        [
         122.69,
         39.235
        ],
        [
         122.691,
         39.234
        ],
        [
         122.692,
         39.233
        ]
       ]
      ],
      [
       [
        [
         122.739,
         39.035
        ],
        [
         122.705,
         39.044
        ],
        [
         122.733,
         39.014
        ],
        [
         122.758,
         39.01
        ],
        [
         122.739,
         39.037
        ],
        [
         122.739,
         39.035
        ]
       ]
      ],
      [
       [
        [
         123.023,
         39.547
        ],
        [
         122.961,
         39.551
        ],
        [
         122.945,
         39.52
        ],
        [
         122.996,
         39.495
        ],
        [
         123.036,
         39.533
        ],
        [
         123.023,
         39.547
        ]
       ]
      ],
      [
       [
        [
         122.503,
         39.241
        ],
        [
         122.502,
         39.224
        ],
        [
         122.548,
         39.229
        ],
        [
         122.503,
         39.241
        ]
       ]
      ],
      [
       [
        [
         120.79,
         40.475
        ],
        [
         120.833,
         40.492
        ],
        [
         120.83,
         40.516
        ],
        [
         120.805,
         40.526
        ],
        [
         120.79,
         40.503
        ],
        [
         120.79,
         40.475
        ]
       ]
      ],
      [
       [
        [
         123.087,
         39.427
        ],
        [
         123.09,
         39.451
        ],
        [
         123.054,
         39.458
        ],
        [
         123.087,
         39.427
        ]
       ]
      ],
      [
       [
        [
         123.161,
         39.025
        ],
        [
         123.206,
         39.057
        ],
        [
         123.201,
         39.078
        ],
        [
         123.146,
         39.092
        ],
        [
         123.144,
         39.039
        ],
        [
         123.161,
         39.025
        ]
       ]
      ],
      [
       [
        [
         123.717,
         39.745
        ],
        [
         123.757,
         39.754
        ],
        [
         123.72,
         39.763
        ],
        [
         123.717,
         39.745
        ]
       ]
      ]
     ]
    },
    "n": "辽宁省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         127.8,
         44.082
        ],
        [
         127.783,
         44.072
        ],
        [
         127.729,
         44.099
        ],
        [
         127.736,
         44.114
        ],
        [
         127.712,
         44.199
        ],
        [
         127.682,
         44.167
        ],
        [
         127.642,
         44.194
        ],
        [
         127.626,
         44.188
        ],
        [
         127.59,
         44.228
        ],
        [
         127.624,
         44.278
        ],
        [
         127.594,
         44.3
        ],
        [
         122.288,
         44.3
        ],
        [
         122.271,
         44.256
        ],
        [
         122.319,
         44.233
        ],
        [
         122.483,
         44.237
        ],
        [
         122.516,
         44.251
        ],
        [
         122.642,
         44.284
        ],
        [
         122.675,
         44.286
        ],
        [
         122.687,
         44.3
        ],
        [
         123.236,
         44.3
        ],
        [
         123.277,
         44.253
        ],
        [
         123.287,
         44.212
        ],
        [
         123.324,
         44.18
        ],
        [
         123.387,
         44.162
        ],
        [
         123.363,
         44.133
        ],
        [
         123.351,
         44.093
        ],
        [
         123.328,
         44.084
        ],
        [
         123.331,
         44.029
        ],
        [
         123.366,
         44.014
        ],
        [
         123.401,
         43.979
        ],
        [
         123.371,
         43.97
        ],
        [
         123.397,
         43.955
        ],
        [
         123.468,
         43.854
        ],
        [
         123.462,
         43.823
        ],
        [
         123.498,
         43.771
        ],
        [
         123.483,
         43.737
        ],
        [
         123.52,
         43.708
        ],
        [
         123.518,
         43.682
        ],
        [
         123.537,
         43.634
        ],
        [
         123.51,
         43.625
        ],
        [
         123.512,
         43.593
        ],
        [
         123.421,
         43.598
        ],
        [
         123.434,
         43.575
        ],
        [
         123.461,
         43.569
        ],
        [
         123.453,
         43.546
        ],
        [
         123.453,
         43.546
        ],
        [
         123.36,
         43.567
        ],
        [
         123.305,
         43.551
        ],
        [
         123.33,
         43.519
        ],
        [
         123.316,
         43.492
        ],
        [
         123.364,
         43.483
        ],
        [
         123.383,
         43.469
        ],
        [
         123.42,
         43.41
        ],
        [
         123.442,
         43.438
        ],
        [
         123.486,
         43.445
        ],
        [
         123.52,
         43.402
        ],
        [
         123.545,
         43.415
        ],
        [
         123.608,
         43.366
        ],
        [
         123.704,
         43.37
        ],
        [
         123.71,
         43.417
        ],
        [
         123.749,
         43.439
        ],
        [
         123.748,
         43.472
        ],
        [
         123.797,
         43.49
        ],
        [
         123.858,
         43.459
        ],
        [
         123.858,
         43.459
        ],
        [
         123.852,
         43.406
        ],
        [
         123.881,
         43.392
        ],
        [
         123.881,
         43.392
        ],
        [
         123.896,
         43.361
        ],
        [
         123.964,
         43.341
        ],
        [
         124.033,
         43.281
        ],
        [
         124.099,
         43.293
        ],
        [
         124.117,
         43.277
        ],
        [
         124.114,
         43.247
        ],
        [
         124.168,
         43.244
        ],
        [
         124.215,
         43.256
        ],
        [
         124.229,
         43.235
        ],
        [
         124.276,
         43.233
        ],
        [
         124.287,
         43.208
        ],
        [
         124.274,
         43.179
        ],
        [
         124.366,
         43.122
        ],
        [
         124.426,
         43.076
        ],
        [
         124.333,
         42.997
        ],
        [
         124.37,
         42.973
        ],
        [
         124.423,
         42.975
        ],
        [
         124.442,
         42.959
        ],
        [
         124.432,
         42.931
        ],
        [
         124.381,
         42.913
        ],
        [
         124.372,
         42.881
        ],
        [
         124.436,
         42.881
        ],
        [
         124.466,
         42.847
        ],
        [
         124.587,
         42.905
        ],
        [
         124.607,
         42.937
        ],
        [
         124.632,
         42.95
        ],
        [
         124.635,
         42.973
        ],
        [
         124.659,
         42.973
        ],
        [
         124.678,
         43.002
        ],
        [
         124.687,
         43.051
        ],
        [
         124.72,
         43.07
        ],
        [
         124.755,
         43.074
        ],
        [
         124.785,
         43.117
        ],
        [
         124.883,
         43.134
        ],
        [
         124.889,
         43.075
        ],
        [
         124.841,
         43.032
        ],
        [
         124.87,
         42.988
        ],
        [
         124.872,
         42.962
        ],
        [
         124.85,
         42.883
        ],
        [
         124.857,
         42.824
        ],
        [
         124.874,
         42.79
        ],
        [
         124.898,
         42.788
        ],
        [
         124.928,
         42.82
        ],
        [
         124.975,
         42.803
        ],
        [
         124.997,
         42.745
        ],
        [
         124.968,
         42.723
        ],
        [
         124.991,
         42.677
        ],
        [
         125.015,
         42.666
        ],
        [
         125.011,
         42.632
        ],
        [
         125.039,
         42.615
        ],
        [
         125.097,
         42.622
        ],
        [
         125.083,
         42.591
        ],
        [
         125.09,
         42.568
        ],
        [
         125.067,
         42.535
        ],
        [
         125.091,
         42.516
        ],
        [
         125.069,
         42.499
        ],
        [
         125.105,
         42.491
        ],
        [
         125.15,
         42.459
        ],
        [
         125.14,
         42.447
        ],
        [
         125.186,
         42.428
        ],
        [
         125.186,
         42.382
        ],
        [
         125.204,
         42.367
        ],
        [
         125.167,
         42.352
        ],
        [
         125.175,
         42.308
        ],
        [
         125.224,
         42.301
        ],
        [
         125.264,
         42.313
        ],
        [
         125.299,
         42.29
        ],
        [
         125.276,
         42.267
        ],
        [
         125.276,
         42.231
        ],
        [
         125.313,
         42.22
        ],
        [
         125.281,
         42.175
        ],
        [
         125.313,
         42.197
        ],
        [
         125.306,
         42.146
        ],
        [
         125.357,
         42.145
        ],
        [
         125.368,
         42.183
        ],
        [
         125.414,
         42.156
        ],
        [
         125.458,
         42.16
        ],
        [
         125.458,
         42.16
        ],
        [
         125.49,
         42.136
        ],
        [
         125.446,
         42.098
        ],
        [
         125.414,
         42.102
        ],
        [
         125.416,
         42.064
        ],
        [
         125.363,
         42.017
        ],
        [
         125.37,
         42.003
        ],
        [
         125.299,
         41.974
        ],
        [
         125.292,
         41.959
        ],
        [
         125.352,
         41.928
        ],
        [
         125.308,
         41.925
        ],
        [
         125.295,
         41.823
        ],
        [
         125.319,
         41.777
        ],
        [
         125.319,
         41.777
        ],
        [
         125.323,
         41.771
        ],
        [
         125.323,
         41.771
        ],
        [
         125.336,
         41.768
        ],
        [
         125.336,
         41.768
        ],
        [
         125.332,
         41.711
        ],
        [
         125.317,
         41.677
        ],
        [
         125.344,
         41.672
        ],
        [
         125.412,
         41.691
        ],
        [
         125.447,
         41.676
        ],
        [
         125.461,
         41.643
        ],
        [
         125.45,
         41.598
        ],
        [
         125.48,
         41.545
        ],
        [
         125.507,
         41.534
        ],
        [
         125.493,
         41.509
        ],
        [
         125.533,
         41.479
        ],
        [
         125.534,
         41.429
        ],
        [
         125.548,
         41.401
        ],
        [
         125.581,
         41.397
        ],
        [
         125.59,
         41.359
        ],
        [
         125.61,
         41.365
        ],
        [
         125.637,
         41.344
        ],
        [
         125.62,
         41.318
        ],
        [
         125.642,
         41.296
        ],
        [
         125.647,
         41.264
        ],
        [
         125.685,
         41.274
        ],
        [
         125.695,
         41.245
        ],
        [
         125.749,
         41.245
        ],
        [
         125.759,
         41.232
        ],
        [
         125.738,
         41.178
        ],
        [
         125.791,
         41.168
        ],
        [
         125.76,
         41.133
        ],
        [
         125.734,
         41.126
        ],
        [
         125.712,
         41.095
        ],
        [
         125.74,
         41.089
        ],
        [
         125.727,
         41.055
        ],
        [
         125.684,
         41.022
        ],
        [
         125.675,
         40.975
        ],
        [
         125.65,
         40.971
        ],
        [
         125.635,
         40.942
        ],
        [
         125.589,
         40.931
        ],
        [
         125.584,
         40.892
        ],
        [
         125.652,
         40.916
        ],
        [
         125.688,
         40.898
        ],
        [
         125.708,
         40.867
        ],
        [
         125.778,
         40.898
        ],
        [
         125.817,
         40.867
        ],
        [
         125.861,
         40.889
        ],
        [
         125.875,
         40.909
        ],
        [
         125.921,
         40.883
        ],
        [
         125.959,
         40.882
        ],
        [
         126.008,
         40.937
        ],
        [
         126.041,
         40.929
        ],
        [
         126.052,
         40.962
        ],
        [
         126.083,
         40.977
        ],
        [
         126.066,
         40.998
        ],
        [
         126.109,
         41.012
        ],
        [
         126.1,
         41.036
        ],
        [
         126.134,
         41.064
        ],
        [
         126.125,
         41.092
        ],
        [
         126.168,
         41.095
        ],
        [
         126.188,
         41.113
        ],
        [
         126.189,
         41.115
        ],
        [
         126.295,
         41.172
        ],
        [
         126.332,
         41.237
        ],
        [
         126.354,
         41.245
        ],
        [
         126.373,
         41.289
        ],
        [
         126.437,
         41.353
        ],
        [
         126.497,
         41.375
        ],
        [
         126.524,
         41.349
        ],
        [
         126.539,
         41.367
        ],
        [
         126.497,
         41.407
        ],
        [
         126.56,
         41.548
        ],
        [
         126.583,
         41.563
        ],
        [
         126.564,
         41.609
        ],
        [
         126.593,
         41.625
        ],
        [
         126.608,
         41.669
        ],
        [
         126.645,
         41.661
        ],
        [
         126.688,
         41.674
        ],
        [
         126.724,
         41.711
        ],
        [
         126.691,
         41.728
        ],
        [
         126.695,
         41.751
        ],
        [
         126.723,
         41.753
        ],
        [
         126.8,
         41.703
        ],
        [
         126.809,
         41.749
        ],
        [
         126.848,
         41.734
        ],
        [
         126.856,
         41.76
        ],
        [
         126.887,
         41.792
        ],
        [
         126.931,
         41.813
        ],
        [
         126.953,
         41.804
        ],
        [
         126.94,
         41.773
        ],
        [
         126.979,
         41.777
        ],
        [
         127.006,
         41.749
        ],
        [
         127.051,
         41.745
        ],
        [
         127.058,
         41.704
        ],
        [
         127.038,
         41.677
        ],
        [
         127.103,
         41.648
        ],
        [
         127.093,
         41.63
        ],
        [
         127.127,
         41.622
        ],
        [
         127.136,
         41.6
        ],
        [
         127.178,
         41.6
        ],
        [
         127.125,
         41.566
        ],
        [
         127.119,
         41.54
        ],
        [
         127.165,
         41.543
        ],
        [
         127.188,
         41.527
        ],
        [
         127.241,
         41.521
        ],
        [
         127.289,
         41.502
        ],
        [
         127.254,
         41.487
        ],
        [
         127.296,
         41.486
        ],
        [
         127.361,
         41.466
        ],
        [
         127.36,
         41.48
        ],
        [
         127.406,
         41.479
        ],
        [
         127.42,
         41.46
        ],
        [
         127.459,
         41.462
        ],
        [
         127.465,
         41.479
        ],
        [
         127.526,
         41.468
        ],
        [
         127.547,
         41.477
        ],
        [
         127.564,
         41.433
        ],
        [
         127.619,
         41.433
        ],
        [
         127.637,
         41.414
        ],
        [
         127.684,
         41.423
        ],
        [
         127.78,
         41.427
        ],
        [
         127.8,
         41.425
        ],
        [
         127.8,
         44.082
        ]
       ]
      ]
     ]
    },
    "n": "吉林省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         127.594,
         44.3
        ],
        [
         127.624,
         44.278
        ],
        [
         127.59,
         44.228
        ],
        [
         127.626,
         44.188
        ],
        [
         127.642,
         44.194
        ],
        [
         127.682,
         44.167
        ],
        [
         127.712,
         44.199
        ],
        [
         127.736,
         44.114
        ],
        [
         127.729,
         44.099
        ],
        [
         127.783,
         44.072
        ],
        [
         127.8,
         44.082
        ],
        [
         127.8,
         44.3
        ],
        [
         127.594,
         44.3
        ]
       ]
      ]
     ]
    },
    "n": "黑龙江省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       123.554,
       43.483
      ],
      [
       123.614,
       43.399
      ],
      [
       123.604,
       43.29
      ],
      [
       123.545,
       43.128
      ],
      [
       123.534,
       43.019
      ],
      [
       123.571,
       42.963
      ],
      [
       123.583,
       42.877
      ],
      [
       123.568,
       42.76
      ],
      [
       123.611,
       42.66
      ],
      [
       123.712,
       42.576
      ],
      [
       123.774,
       42.504
      ],
      [
       123.796,
       42.442
      ],
      [
       123.831,
       42.406
      ],
      [
       123.771,
       42.327
      ],
      [
       123.513,
       42.203
      ],
      [
       123.35,
       42.149
      ],
      [
       123.283,
       42.166
      ],
      [
       123.177,
       42.145
      ],
      [
       123.033,
       42.085
      ],
      [
       122.893,
       41.957
      ],
      [
       122.758,
       41.762
      ],
      [
       122.677,
       41.579
      ],
      [
       122.636,
       41.325
      ],
      [
       122.457,
       41.214
      ],
      [
       122.401,
       41.133
      ],
      [
       122.44,
       41.055
      ],
      [
       122.409,
       41.003
      ],
      [
       122.326,
       40.963
      ],
      [
       122.294,
       40.898
      ],
      [
       122.236,
       40.852
      ],
      [
       122.152,
       40.823
      ],
      [
       122.147,
       40.78
      ],
      [
       122.14,
       40.688
      ]
     ]
    },
    "n": "Liao"
   },
   {
    "g": {
     "type": "LineString",
     "coordinates": [
      [
       120.79,
       43.432
      ],
      [
       121.059,
       43.509
      ],
      [
       121.349,
       43.517
      ],
      [
       121.729,
       43.474
      ],
      [
       122.03,
       43.521
      ],
      [
       122.251,
       43.656
      ],
      [
       122.449,
       43.748
      ],
      [
       122.624,
       43.795
      ],
      [
       122.769,
       43.815
      ],
      [
       122.886,
       43.808
      ],
      [
       123.017,
       43.765
      ],
      [
       123.162,
       43.687
      ],
      [
       123.269,
       43.647
      ],
      [
       123.338,
       43.643
      ],
      [
       123.405,
       43.628
      ],
      [
       123.468,
       43.6
      ],
      [
       123.513,
       43.561
      ],
      [
       123.554,
       43.483
      ]
     ]
    },
    "n": "Xiliao"
   }
  ],
  "lakes": [],
  "_bbox": [
   120.79,
   39.0,
   127.8,
   44.3
  ]
 },
 "wall": {
  "_comment": "明代辽东镇边墙（九边之一）走向示意。非精确测绘，仅作历史地理标注。\n源出原 data/sarhu/places.json 的 wall 段（v0.38 抽出为独立资产，便于按场景注入）。\n只在 region ∈ 辽东体系 (liaobei/jianzhou/liaodong/liaonan/liaoxi) 的场景注入，\n避免唐/宋/壬辰等场景误显辽东边墙。",
  "id": "liaodong_bianqiang",
  "name": "辽东边墙",
  "note": "明代辽东镇边墙走向示意，非精确测绘",
  "path": [
   [
    124.6,
    43.05
   ],
   [
    124.35,
    42.7
   ],
   [
    124.15,
    42.45
   ],
   [
    124.05,
    42.2
   ],
   [
    124.2,
    41.98
   ],
   [
    124.3,
    41.92
   ],
   [
    124.15,
    41.75
   ],
   [
    124.3,
    41.55
   ],
   [
    124.45,
    41.42
   ],
   [
    124.55,
    41.2
   ],
   [
    124.75,
    40.95
   ],
   [
    124.85,
    40.7
   ],
   [
    124.45,
    40.3
   ]
  ]
 }
};
