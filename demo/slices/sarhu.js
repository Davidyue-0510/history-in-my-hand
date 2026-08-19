// 本文件由 tools/build.py 自动生成（切片 sarhu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["sarhu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["sarhu"] = {
 "meta": {
  "kind": "battle",
  "region": "liaodong",
  "title": "萨尔浒之战",
  "dossier_label": "萨尔浒之战",
  "subtitle": "万历四十七年二月—三月 · 天命四年",
  "primary_place": "hetuala",
  "dossier_event": "event:sarhu",
  "lead": "四路明军分进合击，五日之内三路溃灭。本切片记录的不是「谁赢了」，而是四支部队各自走了多远、爬了多少米、史料说他们用了几天——以及这三个数字对不对得上。",
  "terrain_grid": "liaodong",
  "dims": [
   1,
   6
  ],
  "epoch": "ming_qing",
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
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion/infight）"
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
    "note": "技术↔生产力；赋税/漕运→后勤半径（R7）"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；流民→动员潜力"
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
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "page": "sarhu.html",
  "key": "sarhu",
  "scene_id": "sarhu",
  "vocab_pack": "ming_qing"
 },
 "sources": [
  {
   "id": "mingshi",
   "title": "明史",
   "juan": "卷二五九·杨镐传 / 卷二七一·杜松传",
   "compiler": "张廷玉 等",
   "compiled_year": 1739,
   "stance": "official_later_dynasty",
   "stance_label": "后朝官修",
   "distance_label": "成书 1739，距事件约 120 年",
   "party": "清修·明臣",
   "color": "#B23A48",
   "note": "清修明史，成书距事件 120 年。对明军败因的叙述受清初政治语境影响，兵力数字多沿袭明廷奏报。",
   "faction": null
  },
  {
   "id": "ming_shenzong_shilu",
   "title": "明神宗实录",
   "juan": "卷五七九—五八一（万历四十七年二月—三月）",
   "compiler": "明官修",
   "compiled_year": 1630,
   "stance": "official_contemporary",
   "stance_label": "本朝官修·当代",
   "distance_label": "成书约 1630，距万历末事约 10 年",
   "party": "明廷官方",
   "color": "#C77B30",
   "note": "距事件最近的明方官方记录，但实录本身是奏报的汇编，兵力与死伤数字带有官僚系统的自我修饰。"
  },
  {
   "id": "qing_taizu_shilu",
   "title": "清太祖武皇帝实录",
   "juan": "卷三",
   "compiler": "后金／清官修",
   "compiled_year": 1636,
   "stance": "official_enemy",
   "stance_label": "敌方官修",
   "distance_label": "初纂 1636 后屡经改窜，距事件 17 年以上",
   "party": "清修官史",
   "color": "#3D6B4F",
   "note": "胜方叙述。系统性夸大明军规模以彰显战功，但对后金一方的行军序列与日程记载最为细致。"
  },
  {
   "id": "zhazhong_rilu",
   "title": "栅中日录",
   "juan": "全一卷",
   "compiler": "李民寏（朝鲜从事官）",
   "compiled_year": 1620,
   "stance": "third_party_participant",
   "stance_label": "第三方·亲历（被俘逃回）",
   "distance_label": "1620 年成书，作者随刘綎军被俘逃回后追记",
   "party": "朝鲜·亲历",
   "color": "#4A6FA5",
   "note": "随东路刘綎军的朝鲜官员李民寏所记，被俘逃回朝鲜后写成。价值在于它是唯一第三方亲历视角，不受明清双方政治叙事约束。"
  },
  {
   "id": "guoque",
   "title": "国榷",
   "juan": "卷八三",
   "compiler": "谈迁",
   "compiled_year": 1653,
   "stance": "private",
   "stance_label": "私修编年",
   "distance_label": "成书约 1653，距事件约 34 年",
   "party": "明·私修",
   "color": "#8B6BA8",
   "note": "私家编年史，谈迁对官方数字多有校订，常保留实录不载的异说。"
  },
  {
   "id": "modern",
   "title": "现代学界考订",
   "juan": "综合诸家",
   "compiler": "近现代研究者",
   "compiled_year": 2000,
   "stance": "scholarship",
   "stance_label": "学界考证",
   "distance_label": "距事件 300 年以上，综合诸家",
   "party": "学界",
   "color": "#2E7D8F",
   "note": "综合明清双方档案、朝鲜史料与卫所兵额推算得出。占位条目，正式版需逐条落实到具体论著与页码。"
  },
  {
   "id": "huangqing_kaiguo_fanglue",
   "title": "皇清开国方略",
   "juan": "卷六（天命四年萨尔浒之战）",
   "compiler": "清官修",
   "compiled_year": 1784,
   "stance": "official_enemy",
   "stance_label": "敌方官修",
   "distance_label": "成书 1784，距事件约 165 年，屡经改窜",
   "party": "清修官史",
   "color": "#3D6B4F",
   "note": "清官修开国史，萨尔浒叙述以天命纪年。与《清太祖实录》同源但成书更晚，对后金行军序列记载详尽，兵力数字系统性夸大明军以彰显战功。ingest.py fixture 模式抽出的 7 条断言（IN001–IN007）即源自此卷。"
  },
  {
   "id": "guanghaijun_rilu",
   "title": "朝鲜王朝实录·光海君日记",
   "juan": "卷十一（己未，万历四十七年，萨尔浒之战）",
   "compiler": "朝鲜承政院史官",
   "compiled_year": 1620,
   "stance": "third_party_official",
   "stance_label": "第三方·官方实录",
   "distance_label": "当代编年，朝鲜官方记录",
   "party": "朝鲜官方",
   "color": "#4A6FA5",
   "note": "朝鲜王朝实录记载萨尔浒之战中朝鲜军东路（姜弘立）亲历，不受明清叙事约束，价值在第三方视角。",
   "faction": null
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
   "note": "王在晋以经略辽东之身记辽事，沈阳破、辽阳围急、浑河之战明方视角，常存实录不载之异说。",
   "faction": "feng_jiang"
  },
  {
   "id": "mingtongjian",
   "title": "明通鉴",
   "juan": "卷八十（万历四十七年·萨尔浒）／卷八十二（天启二年·广宁）",
   "compiler": "夏燮（清）",
   "compiled_year": 1873,
   "stance": "private_synthesis",
   "stance_label": "私修编年·综合",
   "distance_label": "成书清同治十二年（1873），距事约 250 年，综合实录奏议并附考异",
   "party": "二手综述",
   "color": "#6C7A89",
   "note": "夏燮私修明编年，广采实录、奏议、私史并附考异。叙事相对平允，但立场属后世综合，非当代当事人；其经抚不和、门户之争的记载尤可印证明内部派系互攻。",
   "faction": null,
   "availability": "fetched",
   "url": "https://zh.wikisource.org/wiki/%E6%98%8E%E9%80%9A%E9%91%91/%E5%8D%B7080",
   "cached_text": "已抓卷080（万历四十七年·萨尔浒）与卷082（天启二年·广宁）原文到 .tmp/mingtongjian_080.txt / _082.txt。",
   "period": "晚清"
  }
 ],
 "places": [
  {
   "id": "shenyang",
   "name": "沈阳（沈阳中卫）",
   "modern": "辽宁省沈阳市",
   "lon": 123.43,
   "lat": 41.8,
   "precision": "city",
   "type": "city",
   "note": "经略杨镐驻节地，四路军总调度中心",
   "elev": 50
  },
  {
   "id": "fushun",
   "name": "抚顺（抚顺所）",
   "modern": "辽宁省抚顺市",
   "lon": 123.96,
   "lat": 41.88,
   "precision": "city",
   "type": "fort",
   "note": "1618 年已为后金攻破",
   "elev": 118
  },
  {
   "id": "fushunguan",
   "name": "抚顺关",
   "modern": "抚顺市东，浑河北岸",
   "lon": 124.28,
   "lat": 41.92,
   "precision": "approx_10km",
   "type": "pass",
   "note": "辽东边墙关口，杜松西路出塞处",
   "_global_id": "fushunguan",
   "_other_scenes": [
    "fushun"
   ],
   "elev": 176
  },
  {
   "id": "sarhu",
   "name": "萨尔浒",
   "modern": "抚顺市大伙房水库淹没区一带",
   "lon": 124.1,
   "lat": 41.9,
   "precision": "approx_10km",
   "type": "battlefield",
   "note": "原址已沉入大伙房水库，现代定位存在争议",
   "_global_id": "sarhu",
   "_other_scenes": [
    "kaiyuan",
    "tieling"
   ],
   "elev": 119
  },
  {
   "id": "jilinya",
   "name": "吉林崖",
   "modern": "抚顺市东，铁背山西南",
   "lon": 124.18,
   "lat": 41.93,
   "precision": "approx_10km",
   "type": "battlefield",
   "note": "界凡筑城工地所在，杜松分兵攻此",
   "elev": 196
  },
  {
   "id": "jiefan",
   "name": "界凡（界藩城）",
   "modern": "抚顺县铁背山",
   "lon": 124.22,
   "lat": 41.94,
   "precision": "approx_5km",
   "type": "fort",
   "note": "后金新筑城，战时有筑城夫役一万五千人",
   "elev": 197
  },
  {
   "id": "hetuala",
   "name": "赫图阿拉",
   "modern": "抚顺市新宾满族自治县永陵镇老城",
   "lon": 125.03,
   "lat": 41.78,
   "precision": "site",
   "type": "capital",
   "note": "后金都城，明军四路合击的目标",
   "_global_id": "hetuala",
   "_other_scenes": [
    "fushun",
    "kaiyuan",
    "liaoyang",
    "shenyang",
    "tieling",
    "yehe"
   ],
   "elev": 386
  },
  {
   "id": "kaiyuan",
   "name": "开原",
   "modern": "辽宁省开原市",
   "lon": 124.03,
   "lat": 42.55,
   "precision": "city",
   "type": "city",
   "note": "马林北路出发地",
   "_global_id": "kaiyuan",
   "_other_scenes": [
    "shenyang",
    "yehe"
   ],
   "elev": 82
  },
  {
   "id": "sanchaer",
   "name": "三岔儿堡",
   "modern": "开原东南、铁岭东",
   "lon": 124.2,
   "lat": 42.2,
   "precision": "approx_20km",
   "type": "fort",
   "note": "北路军入塞路径，具体位置有异说",
   "elev": 282
  },
  {
   "id": "shangjianya",
   "name": "尚间崖",
   "modern": "抚顺市东北、浑河北",
   "lon": 124.3,
   "lat": 42.05,
   "precision": "approx_20km",
   "type": "battlefield",
   "note": "马林本部扎营处",
   "elev": 224
  },
  {
   "id": "feifenshan",
   "name": "斐芬山",
   "modern": "尚间崖东南",
   "lon": 124.38,
   "lat": 42.0,
   "precision": "approx_20km",
   "type": "battlefield",
   "note": "潘宗颜部扎营处，力战死",
   "elev": 227
  },
  {
   "id": "qinghe",
   "name": "清河（清河堡）",
   "modern": "辽宁省本溪市清河城镇",
   "lon": 124.2,
   "lat": 41.35,
   "precision": "town",
   "type": "fort",
   "note": "李如柏南路出发地，1618 年曾被后金攻破",
   "elev": 356
  },
  {
   "id": "yahuguan",
   "name": "鸦鹘关",
   "modern": "本溪市与新宾县交界",
   "lon": 124.6,
   "lat": 41.45,
   "precision": "approx_10km",
   "type": "pass",
   "note": "南路军出塞关口",
   "_global_id": "yahuguan",
   "_other_scenes": [
    "tieling"
   ],
   "elev": 546
  },
  {
   "id": "hulan",
   "name": "虎拦路（虎栏岗）",
   "modern": "新宾县西南",
   "lon": 124.78,
   "lat": 41.55,
   "precision": "approx_20km",
   "type": "waypoint",
   "note": "李如柏部最远抵达处，随即奉命撤退",
   "elev": 717
  },
  {
   "id": "kuandian",
   "name": "宽甸（宽奠堡）",
   "modern": "辽宁省丹东市宽甸满族自治县",
   "lon": 124.78,
   "lat": 40.73,
   "precision": "town",
   "type": "fort",
   "note": "刘綎东路出发地",
   "elev": 320
  },
  {
   "id": "liangmadian",
   "name": "亮马佃",
   "modern": "宽甸北",
   "lon": 124.85,
   "lat": 41.0,
   "precision": "approx_20km",
   "type": "waypoint",
   "note": "东路行军途经",
   "elev": 650
  },
  {
   "id": "shenhe",
   "name": "深河",
   "modern": "桓仁—新宾之间，浑江支流",
   "lon": 125.05,
   "lat": 41.25,
   "precision": "approx_20km",
   "type": "waypoint",
   "note": "朝鲜军营地，《栅中日录》记载详细",
   "elev": 950
  },
  {
   "id": "niumaozhai",
   "name": "牛毛寨",
   "modern": "桓仁满族自治县境",
   "lon": 125.15,
   "lat": 41.35,
   "precision": "approx_20km",
   "type": "battlefield",
   "note": "刘綎部前锋破后金小股守军处",
   "elev": 409
  },
  {
   "id": "abudaligang",
   "name": "阿布达里岗",
   "modern": "新宾县东南，赫图阿拉南",
   "lon": 125.0,
   "lat": 41.55,
   "precision": "approx_20km",
   "type": "battlefield",
   "note": "刘綎中伏战死处",
   "elev": 703
  },
  {
   "id": "fucha",
   "name": "富察之野",
   "modern": "阿布达里岗西南",
   "lon": 124.92,
   "lat": 41.5,
   "precision": "approx_20km",
   "type": "battlefield",
   "note": "朝鲜军被围投降处",
   "elev": 645
  },
  {
   "id": "yehe",
   "name": "叶赫",
   "modern": "吉林省四平市叶赫满族镇",
   "lon": 124.6,
   "lat": 43.05,
   "precision": "town",
   "type": "city",
   "note": "叶赫部，明之盟军，出兵一部随北路军",
   "_global_id": "yehe",
   "_other_scenes": [
    "kaiyuan"
   ],
   "elev": 292
  }
 ],
 "persons": [
  {
   "id": "yanggao",
   "name": "杨镐",
   "side": "ming",
   "role_hint": "辽东经略",
   "column": null,
   "note": "四路总调度，战后下狱，崇祯二年伏诛",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "cinC",
    "objective": "四路合击、按期会师于沈阳城下，一举捣毁后金老巢",
    "needs": [
     "各路严守约期同时并进",
     "避免任何一路抢功孤军深入",
     "后方粮道与斥候衔接不断"
    ],
    "info_quality": 0.35,
    "info_note": "分兵四路却无统一机动通讯；雪地行军更易迷路失联；对后金集中兵力毫无察觉",
    "assessment": "视此战为'以多击少'的捣巢速决，低估后金情报与机动能力，未料'凭尔几路来我只一路去'",
    "decision_style": "严令按期、重罚后期；以申军法维系合击节拍"
   },
   "influence": 8,
   "_global_id": "yanggao",
   "_other_scenes": [
    "tieling"
   ]
  },
  {
   "id": "dusong",
   "name": "杜松",
   "side": "ming",
   "role_hint": "山海关总兵",
   "column": "west",
   "note": "西路主将，绰号杜疯子，以勇著称",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "抢在诸路之前破敌立功，雪'杜疯子'之勇名",
    "needs": [
     "率先渡浑河直捣",
     "独吞首功不受掣肘"
    ],
    "info_quality": 0.4,
    "info_note": "愤激轻敌，雪天裸衣渡河；不待他路，孤军急进",
    "assessment": "以为后金可一鼓破之，轻敌冒进，未察埋伏",
    "decision_style": "贪功冒进、违期疾进"
   },
   "influence": 4,
   "_global_id": "dusong",
   "_other_scenes": [
    "tieling"
   ]
  },
  {
   "id": "wangxuan",
   "name": "王宣",
   "side": "ming",
   "role_hint": "保定总兵",
   "column": "west",
   "note": "西路副将",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随西路主将破敌，保身立功",
    "needs": [
     "紧跟主将",
     "稳守辎重"
    ],
    "info_quality": 0.4,
    "info_note": "随杜松同进退，信息同源",
    "assessment": "倚主将决断，自身无独立判断",
    "decision_style": "从主将、慎独断"
   },
   "influence": 1
  },
  {
   "id": "zhaomenglin",
   "name": "赵梦麟",
   "side": "ming",
   "role_hint": "原任总兵",
   "column": "west",
   "note": "西路副将",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随西路主将破敌",
    "needs": [
     "协防西路",
     "护辎重"
    ],
    "info_quality": 0.4,
    "info_note": "西路副将，随杜松",
    "assessment": "随主将进退",
    "decision_style": "从主将"
   },
   "influence": 1
  },
  {
   "id": "malin",
   "name": "马林",
   "side": "ming",
   "role_hint": "开原总兵",
   "column": "north",
   "note": "北路主将，名将马芳之子，文士气重",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "稳扎稳打、按约期与主力合击，不贪功",
    "needs": [
     "与他路协同",
     "保全所部",
     "倚车营自固"
    ],
    "info_quality": 0.45,
    "info_note": "文士气重，持重但怯战；北路地形生疏",
    "assessment": "偏于自保，闻杜松败讯即动摇，未能坚持合击节拍",
    "decision_style": "持重迟疑、闻败即退"
   },
   "influence": 5,
   "_global_id": "malin",
   "_other_scenes": [
    "kaiyuan"
   ]
  },
  {
   "id": "panzongyan",
   "name": "潘宗颜",
   "side": "ming",
   "role_hint": "开原道佥事",
   "column": "north",
   "note": "北路，斐芬山力战死",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "守斐芬山、护北路侧翼",
    "needs": [
     "坚壁拒马",
     "等主力"
    ],
    "info_quality": 0.45,
    "info_note": "北路裨将，随马林",
    "assessment": "力战死守",
    "decision_style": "死守待援"
   },
   "influence": 1
  },
  {
   "id": "gongnian",
   "name": "龚念遂",
   "side": "ming",
   "role_hint": "游击",
   "column": "north",
   "note": "北路，掌辎重车营",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "掌辎重车营、护北路后勤",
    "needs": [
     "护粮车",
     "依车营自固"
    ],
    "info_quality": 0.45,
    "info_note": "掌辎重，行动迟缓",
    "assessment": "后勤视角，重自保",
    "decision_style": "依车营结阵"
   },
   "influence": 0
  },
  {
   "id": "liruobai",
   "name": "李如柏",
   "side": "ming",
   "role_hint": "辽东总兵",
   "column": "south",
   "note": "李成梁之子，南路主将，行动迟缓，战后自尽",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "持重应变、保全所部，避免陷敌",
    "needs": [
     "观望待机",
     "不与敌硬拼"
    ],
    "info_quality": 0.3,
    "info_note": "李成梁之子，与努尔哈赤有旧；行动迟缓、有意逗留",
    "assessment": "深知后金之强，倾向持重自保，未按期进兵",
    "decision_style": "持重逗留、不欲力战"
   },
   "influence": 3,
   "_global_id": "li_rubai",
   "_other_scenes": [
    "fushun",
    "tieling"
   ]
  },
  {
   "id": "liuting",
   "name": "刘綎",
   "side": "ming",
   "role_hint": "辽阳总兵",
   "column": "east",
   "note": "东路主将，号刘大刀，宿将，阿布达里岗战死",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "远道深入、按期会师，立老将之功",
    "needs": [
     "道路给养",
     "与朝鲜军协同",
     "按时抵合击点"
    ],
    "info_quality": 0.35,
    "info_note": "东路最远、道路险阻；与朝鲜军协同但号令不一",
    "assessment": "宿将谨慎，但道远期促，且不知他路已败",
    "decision_style": "谨慎稳进、按期图功"
   },
   "influence": 5
  },
  {
   "id": "qiaoyilang",
   "name": "乔一琦",
   "side": "ming",
   "role_hint": "监军道",
   "column": "east",
   "note": "东路，联络朝鲜军，兵败自尽",
   "faction": "feng_jiang",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "监军东路、联络朝鲜",
    "needs": [
     "联络朝鲜",
     "督催进军"
    ],
    "info_quality": 0.4,
    "info_note": "监军，协同朝鲜军",
    "assessment": "夹在明军与朝鲜之间",
    "decision_style": "联络协调"
   },
   "influence": 0
  },
  {
   "id": "kanghonglip",
   "name": "姜弘立",
   "side": "joseon",
   "role_hint": "朝鲜五道都元帅",
   "column": "east",
   "note": "朝鲜援军统帅，富察之野降后金",
   "perspective": {
    "role_tier": "ally_cmd",
    "objective": "奉明命出援、保全朝鲜军，避免与后金死战",
    "needs": [
     "保存实力",
     "观望形势",
     "不被明方裹挟送死"
    ],
    "info_quality": 0.3,
    "info_note": "被迫出兵助明；与明军号令不一，信息隔阂",
    "assessment": "视此战为明人内战，不愿为明力战；富察之野兵败即降",
    "decision_style": "首鼠两端、兵败则降"
   },
   "influence": 1,
   "_global_id": "jianghongli",
   "_other_scenes": [
    "kaiyuan",
    "shenyang"
   ]
  },
  {
   "id": "kimkyungsuh",
   "name": "金景瑞",
   "side": "joseon",
   "role_hint": "平安兵使",
   "column": "east",
   "note": "朝鲜副元帅",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "副元帅，随姜弘立出援",
    "needs": [
     "协同元帅",
     "保军"
    ],
    "info_quality": 0.3,
    "info_note": "朝鲜副帅",
    "assessment": "随元帅进退",
    "decision_style": "从元帅"
   },
   "influence": 0
  },
  {
   "id": "liminhwan",
   "name": "李民寏",
   "side": "joseon",
   "role_hint": "从事官",
   "column": "east",
   "note": "《栅中日录》作者，被俘后记其所历",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随军记录、观察战局",
    "needs": [
     "记录战况"
    ],
    "info_quality": 0.3,
    "info_note": "《栅中日录》作者，被俘后记其所历",
    "assessment": "第三方亲历视角，不受明清双方叙事约束",
    "decision_style": "记录为主"
   },
   "influence": 0
  },
  {
   "id": "nurhaci",
   "name": "努尔哈赤",
   "side": "jin",
   "role_hint": "后金大汗",
   "column": null,
   "note": "亲自指挥，采取凭尔几路来我只一路去的集中打击方针",
   "perspective": {
    "role_tier": "enemy_cmd",
    "objective": "集中兵力、各个击破，歼灭明军主力",
    "needs": [
     "掌握明军分兵虚实",
     "以逸待劳",
     "速决"
    ],
    "info_quality": 0.9,
    "info_note": "本土作战、情报灵通（谍报+降人），熟悉地形",
    "assessment": "洞悉明军分进不合、号令不一，定下'凭尔几路来我只一路去'的集中打击方针",
    "decision_style": "集中优势、先破一路、连续转兵"
   },
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
   "id": "daishan",
   "name": "代善",
   "side": "jin",
   "role_hint": "大贝勒",
   "column": null,
   "note": "参与吉林崖、尚间崖、阿布达里岗诸战",
   "perspective": {
    "role_tier": "prince",
    "objective": "执行大汗集中打击方略，破明各路",
    "needs": [
     "协同大汗",
     "速战"
    ],
    "info_quality": 0.85,
    "info_note": "后金核心，参与诸战",
    "assessment": "执行集中打击",
    "decision_style": "依方略速决"
   },
   "influence": 0
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "side": "jin",
   "role_hint": "四贝勒",
   "column": null,
   "note": "参与诸战",
   "perspective": {
    "role_tier": "prince",
    "objective": "同代善，破明军",
    "needs": [
     "协同",
     "速战"
    ],
    "info_quality": 0.85,
    "info_note": "后金核心",
    "assessment": "执行方略",
    "decision_style": "依方略"
   },
   "influence": 0,
   "_global_id": "huangtaiji",
   "_other_scenes": [
    "jinzhou",
    "liaoyang",
    "ningyuan",
    "shenyang"
   ]
  },
  {
   "id": "eyidu",
   "name": "额亦都",
   "side": "jin",
   "role_hint": "五大臣",
   "column": null,
   "note": "后金重臣",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "为大汗前驱破敌",
    "needs": [
     "随大汗",
     "冲阵"
    ],
    "info_quality": 0.85,
    "info_note": "后金重臣",
    "assessment": "执行",
    "decision_style": "冲阵效死"
   },
   "influence": 0
  },
  {
   "id": "jinyinghe",
   "name": "金应河",
   "side": "joseon",
   "role_hint": "朝鲜左营将",
   "column": "east",
   "note": "深河之战布拒马木力战，称'依柳将'，死之",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "深河之战力战拒后金",
    "needs": [
     "布拒马木",
     "死守"
    ],
    "info_quality": 0.3,
    "info_note": "深河之战布拒马力战，称'依柳将'",
    "assessment": "力战殉国",
    "decision_style": "死战拒马"
   },
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "A001",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value": 470000,
   "value_text": "号四十七万",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "万历四十七年二三月间"
   },
   "place": "shenyang",
   "source": "mingshi",
   "quote": "镐会诸将于辽阳，分四路进兵，号称四十七万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.15,
   "scale": "empire",
   "note": "对外宣称的虚数，用以震慑后金与安抚朝议。几乎所有研究者都不采信此数。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A002",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value": 200000,
   "value_text": "明兵二十万",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "天命四年三月"
   },
   "place": "hetuala",
   "source": "qing_taizu_shilu",
   "quote": "明发兵二十万，分四路来侵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.25,
   "scale": "empire",
   "note": "胜方记述。夸大敌军规模以彰显战功，是所有军事史料的通病，与立场直接相关。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "A003",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value": 88000,
   "value_text": "明军实数约八万八千",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "shenyang",
   "source": "modern",
   "quote": "据卫所兵额、饷银发放与各路分兵数逆推",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "不含叶赫与朝鲜援军。占位数据，正式版需落实到具体论著与页码。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A004",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value": 110000,
   "value_text": "连叶赫、朝鲜共约十一万",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "shenyang",
   "source": "modern",
   "quote": "明军八万八千 + 叶赫约一万 + 朝鲜一万三千",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.65,
   "scale": "empire",
   "note": "合计口径。与 A003 不冲突，是不同的统计边界——这类分歧最容易被误读为矛盾。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A010",
   "subject": "army:jin_total",
   "predicate": "兵力",
   "value": 60000,
   "value_text": "八旗约六万",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "天命四年三月"
   },
   "place": "hetuala",
   "source": "modern",
   "quote": "八旗每旗约七千五百人，共六万上下",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "empire",
   "note": "后金以此兵力实现局部数倍于明军的兵力优势，是本役的战术核心。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A011",
   "subject": "army:jin_total",
   "predicate": "兵力",
   "value": 100000,
   "value_text": "十万",
   "unit": "人",
   "time": {
    "start": "1619-04-01",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "hetuala",
   "source": "mingshi",
   "quote": "奴众约十万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.2,
   "scale": "empire",
   "note": "败方对敌军规模的估计，同样存在夸大倾向——败得越惨，敌人越多。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A020",
   "subject": "army:ming_west",
   "predicate": "兵力",
   "value": 30000,
   "value_text": "三万",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-14",
    "era_text": "万历四十七年二月廿九"
   },
   "place": "fushunguan",
   "source": "modern",
   "quote": "西路为四路主力",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "province",
   "note": "通行说法。杜松部为明军精锐，配属车营与火器。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A021",
   "subject": "army:ming_north",
   "predicate": "兵力",
   "value": 15000,
   "value_text": "一万五千",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-15",
    "era_text": "万历四十七年二月末"
   },
   "place": "kaiyuan",
   "source": "modern",
   "quote": "北路马林部本部兵额",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.55,
   "scale": "province",
   "note": "不含叶赫援兵。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A022",
   "subject": "army:yehe",
   "predicate": "兵力",
   "value": 10000,
   "value_text": "叶赫兵约一万",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-15",
    "era_text": "万历四十七年三月初"
   },
   "place": "yehe",
   "source": "modern",
   "quote": "叶赫贝勒率部随北路军出",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.45,
   "scale": "province",
   "note": "叶赫兵闻杜松败即退回，实际未与后金交战。是否真到达战场，史料记载含糊。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A023",
   "subject": "army:ming_south",
   "predicate": "兵力",
   "value": 25000,
   "value_text": "二万五千",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月初"
   },
   "place": "qinghe",
   "source": "modern",
   "quote": "南路李如柏部",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.5,
   "scale": "province",
   "note": "几乎完整撤回，是四路中唯一保全建制者。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A024",
   "subject": "army:ming_east",
   "predicate": "兵力",
   "value": 10000,
   "value_text": "一万",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-17",
    "era_text": "万历四十七年二月末"
   },
   "place": "kuandian",
   "source": "modern",
   "quote": "东路刘綎部明军本部",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.55,
   "scale": "province",
   "note": "刘綎所部多为南兵与川兵，与辽东本地军序列不同。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A025",
   "subject": "army:joseon",
   "predicate": "兵力",
   "value": 13000,
   "value_text": "一万三千",
   "unit": "人",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-17",
    "era_text": "万历四十七年二月",
    "era_text_joseon": "光海君十一年"
   },
   "place": "kuandian",
   "source": "zhazhong_rilu",
   "quote": "我师一万三千，分为左右营",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "亲历者所记本方兵力，在所有兵力数据中可信度最高——记录者没有夸大或缩小的动机。",
   "_party": "朝鲜·亲历",
   "_faction": null
  },
  {
   "id": "A030",
   "subject": "casualty:ming",
   "predicate": "阵亡人数",
   "value": 45870,
   "value_text": "四万五千八百七十余人",
   "unit": "人",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "是役也，明兵死者四万五千八百七十余人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.4,
   "scale": "province",
   "note": "精确到个位的数字反而值得警惕——它来自战后清点缺额的奏报，而非战场统计。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A031",
   "subject": "casualty:ming_officers",
   "predicate": "阵亡将吏",
   "value": 310,
   "value_text": "三百一十余员",
   "unit": "人",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "将吏死者三百一十余人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.45,
   "scale": "province",
   "note": "军官损失比例极高，反映的是建制被整体歼灭而非溃散。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A032",
   "subject": "casualty:ming_horses",
   "predicate": "损失马骡",
   "value": 28600,
   "value_text": "二万八千六百余匹",
   "unit": "匹",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "亡失马骡二万八千六百余",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.4,
   "scale": "province",
   "note": "马骡损失数可与兵力数互校：若明军仅八万余，则骑兵与辎重损失近乎全灭。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A033",
   "subject": "casualty:joseon",
   "predicate": "阵亡人数",
   "value": 5000,
   "value_text": "死者数千",
   "unit": "人",
   "time": {
    "start": "1619-04-17",
    "end": "1619-04-17",
    "era_text": "万历四十七年三月初四"
   },
   "place": "fucha",
   "source": "zhazhong_rilu",
   "quote": "左营先溃，死者不可胜数",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "county",
   "note": "《栅中日录》多用概数而非确数，这本身是亲历记录的特征——身处其中的人反而数不清。",
   "_party": "朝鲜·亲历",
   "_faction": null
  },
  {
   "id": "A040",
   "subject": "event:sarhu_battle",
   "predicate": "发生时刻",
   "value": "1619-04-14",
   "value_text": "三月初一",
   "unit": "date",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-14",
    "era_text": "万历四十七年三月初一"
   },
   "place": "sarhu",
   "source": "ming_shenzong_shilu",
   "quote": "三月朔，杜松军覆于萨尔浒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "province",
   "note": "四路中主力最先被歼，此后战局已定。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "A041",
   "subject": "event:dusong_cross",
   "predicate": "渡浑河",
   "value": "1619-04-13",
   "value_text": "二月廿九日出抚顺关",
   "unit": "date",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-13",
    "era_text": "万历四十七年二月廿九"
   },
   "place": "fushunguan",
   "source": "ming_shenzong_shilu",
   "quote": "松出抚顺关，逾五岭",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.75,
   "scale": "province",
   "note": "比杨镐原定的三月初二会师期提前，是四路失去协同的起点。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "A042",
   "subject": "event:dusong_cross",
   "predicate": "渡河损失原因",
   "value": "轻进失器",
   "value_text": "贪功轻进，不待火器辎重，涉水人马漂没",
   "unit": "text",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-14",
    "era_text": "万历四十七年二月廿九—三月初一"
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "松素勇而寡谋，径渡浑河，士卒沾湿，火器多不能用",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "province",
   "note": "明方叙事将败因归于主将个人性格，这是官修史书处理败绩的典型手法——归咎于人，则制度无过。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A043",
   "subject": "event:dusong_cross",
   "predicate": "渡河损失原因",
   "value": "上游决水",
   "value_text": "后金于上游筑坝蓄水，明军半渡而决之",
   "unit": "text",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-14",
    "era_text": "天命四年二月末"
   },
   "place": "sarhu",
   "source": "qing_taizu_shilu",
   "quote": "预于上流筑坝，俟明兵半渡决之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.35,
   "scale": "province",
   "note": "与 A042 直接冲突。同一件事，明方记为主将莽撞，金方记为己方谋略——冲突本身比任何一方的说法都更有信息量。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "A050",
   "subject": "event:shangjianya",
   "predicate": "发生时刻",
   "value": "1619-04-15",
   "value_text": "三月初二",
   "unit": "date",
   "time": {
    "start": "1619-04-15",
    "end": "1619-04-15",
    "era_text": "万历四十七年三月初二"
   },
   "place": "shangjianya",
   "source": "ming_shenzong_shilu",
   "quote": "越日，马林军溃于尚间崖",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "马林部得知杜松败讯后就地结营三处，被逐个击破。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "A051",
   "subject": "person:panzongyan",
   "predicate": "结局",
   "value": "阵亡",
   "value_text": "力战死于斐芬山",
   "unit": "text",
   "time": {
    "start": "1619-04-15",
    "end": "1619-04-15",
    "era_text": "万历四十七年三月初二"
   },
   "place": "feifenshan",
   "source": "mingshi",
   "quote": "宗颜结阵斐芬山，力战死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.75,
   "scale": "county",
   "note": "文官统兵而死战，与主将马林单骑遁走形成对照，是明代史料中反复被强调的道德叙事。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A052",
   "subject": "person:malin",
   "predicate": "结局",
   "value": "逃脱",
   "value_text": "单骑走免，奔还开原",
   "unit": "text",
   "time": {
    "start": "1619-04-15",
    "end": "1619-04-15",
    "era_text": "万历四十七年三月初二"
   },
   "place": "kaiyuan",
   "source": "mingshi",
   "quote": "林独脱身走开原",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "county",
   "note": "同年六月开原陷落，马林战死于开原。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A060",
   "subject": "event:abudaligang",
   "predicate": "发生时刻",
   "value": "1619-04-17",
   "value_text": "三月初四",
   "unit": "date",
   "time": {
    "start": "1619-04-17",
    "end": "1619-04-17",
    "era_text": "万历四十七年三月初四"
   },
   "place": "abudaligang",
   "source": "zhazhong_rilu",
   "quote": "初四日，天阴风起，前营尽没",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "东路军距赫图阿拉最近，也最后被歼。",
   "_party": "朝鲜·亲历",
   "_faction": null
  },
  {
   "id": "A061",
   "subject": "event:abudaligang",
   "predicate": "致败关键",
   "value": "诈降诱敌",
   "value_text": "后金持杜松令箭伪为明使，绐刘綎速进",
   "unit": "text",
   "time": {
    "start": "1619-04-16",
    "end": "1619-04-17",
    "era_text": "万历四十七年三月初三—初四"
   },
   "place": "abudaligang",
   "source": "qing_taizu_shilu",
   "quote": "以所获松令箭，遣人诈为松使，趣綎兵前进",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.6,
   "scale": "province",
   "note": "罕见地为明金双方史料共同记载，可信度因此提高——立场相反的史料若说法一致，通常意味着事实本身较为坚实。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "A062",
   "subject": "person:liuting",
   "predicate": "结局",
   "value": "阵亡",
   "value_text": "战死于阿布达里岗",
   "unit": "text",
   "time": {
    "start": "1619-04-17",
    "end": "1619-04-17",
    "era_text": "万历四十七年三月初四"
   },
   "place": "abudaligang",
   "source": "mingshi",
   "quote": "綎面中一刀，犹左右冲突，格杀数十人而死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "county",
   "note": "刘綎时年六十余，为明末宿将中战功最著者之一。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A063",
   "subject": "person:kanghonglip",
   "predicate": "结局",
   "value": "投降",
   "value_text": "率余部降于富察之野",
   "unit": "text",
   "time": {
    "start": "1619-04-17",
    "end": "1619-04-17",
    "era_text": "万历四十七年三月初四"
   },
   "place": "fucha",
   "source": "zhazhong_rilu",
   "quote": "元帅遣译官请降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "county",
   "note": "朝鲜内部对姜弘立评价两极。光海君密令观望之说，是朝鲜史学界长期争论的问题。",
   "_party": "朝鲜·亲历",
   "_faction": null
  },
  {
   "id": "A070",
   "subject": "event:south_retreat",
   "predicate": "发生时刻",
   "value": "1619-04-18",
   "value_text": "三月初五",
   "unit": "date",
   "time": {
    "start": "1619-04-18",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月初五"
   },
   "place": "hulan",
   "source": "ming_shenzong_shilu",
   "quote": "镐檄如柏还师",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "杨镐得三路败讯后急檄南路撤兵。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "A071",
   "subject": "event:south_retreat",
   "predicate": "撤退损失",
   "value": 1000,
   "value_text": "自相蹂践死者千余人",
   "unit": "人",
   "time": {
    "start": "1619-04-18",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月初五"
   },
   "place": "hulan",
   "source": "mingshi",
   "quote": "敌哨骑二十人乘高鸣螺，明兵大惊，自相蹂践，死者千余人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.45,
   "scale": "county",
   "note": "二十名哨骑吓垮一路大军。此条若属实，说明的不是兵力问题而是士气问题。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A080",
   "subject": "army:jin_total",
   "predicate": "战术方针",
   "value": "集中兵力",
   "value_text": "凭尔几路来，我只一路去",
   "unit": "text",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-18",
    "era_text": "天命四年三月"
   },
   "place": "hetuala",
   "source": "qing_taizu_shilu",
   "quote": "任尔几路来，我只一路去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.65,
   "scale": "empire",
   "note": "这句话是否为努尔哈赤原话难以确证，但后金的实际行动完全符合此方针。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "A090",
   "subject": "army:ming_west",
   "predicate": "日行军速度",
   "value": 37,
   "value_text": "约每日三十至四十里",
   "unit": "里/日",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-14",
    "era_text": "万历四十七年二月末"
   },
   "place": "fushunguan",
   "source": "modern",
   "quote": "由抚顺关至萨尔浒直线约六十里，历一日夜",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.35,
   "scale": "province",
   "note": "AI 推演：由起讫地点与日期反推。未见任何史料直接记载行军速度，此值仅供想象战场节奏之用，不可引用。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A091",
   "subject": "event:sarhu_battle",
   "predicate": "天象",
   "value": "拂晓多雾",
   "value_text": "三月初一辽东日出约在卯时初，晨间河谷多雾",
   "unit": "text",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-14",
    "era_text": "万历四十七年三月初一"
   },
   "place": "sarhu",
   "source": "modern",
   "quote": "据纬度与节气推算日出时刻，结合浑河河谷春季气象特征",
   "quote_status": "generated",
   "layer": "inference",
   "confidence": 0.25,
   "scale": "county",
   "note": "AI 推演：纯属环境重建，无史料依据。此类断言的唯一价值是让场景可被想象，绝不可作为论据。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A092",
   "subject": "event:sarhu_battle",
   "predicate": "史料缺口",
   "value": "火器配属不明",
   "value_text": "杜松部车营与火器的具体编制、数量、损失情况，现存史料均无记载",
   "unit": "text",
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-14",
    "era_text": "万历四十七年三月初一"
   },
   "place": "sarhu",
   "source": "modern",
   "quote": "检索明清双方及朝鲜史料，未见西路军火器编制的直接记录",
   "quote_status": "generated",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "province",
   "note": "史料缺口标记。这类条目不提供信息，只指出信息在哪里缺失——它们是众包录入最该优先攻克的目标。",
   "lead": {
    "where": "《明神宗实录》万历四十七年萨尔浒出师敕谕与兵部题覆; 《武备志》茅元仪(车营/火器编制); 《明经世文编》相关奏疏; 朝鲜《栅中日录》记西路军装备。",
    "skills": [
     "军事史",
     "古文"
    ],
    "accept": "给出杜松西路军车营与火器的可能编制区间(参照同期车营成例), 说明「无直接记录」的原因(战殁无幸存详报、败军无勘状), 而非断言「无火器」。",
    "effort": "2-3 周"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A045",
   "subject": "terrain:liaodong_east",
   "predicate": "植被",
   "value": "林木茂密",
   "value_text": "边外皆山林，林木蔽日",
   "unit": null,
   "time": {
    "start": "1619-01-01",
    "end": "1619-12-31",
    "era_text": "万历四十七年"
   },
   "place": "kuandian",
   "source": "zhazhong_rilu",
   "quote": "入山以来，林木蔽天，人马不能成列，一日行不能三十里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.55,
   "scale": "province",
   "note": "这条断言解释了为什么东路刘綎走得最慢，也解释了为什么阿布达里岗设伏能成功。植被在本项目中不做栅格图层——历史植被没有可信的空间数据源，现代林地数据反映的是当代。它只能以文献断言的形式存在。",
   "_party": "朝鲜·亲历",
   "_faction": null
  },
  {
   "id": "A046",
   "subject": "terrain:hunhe_crossing",
   "predicate": "渡河条件",
   "value": "水深及肩",
   "value_text": "三月河水未解，深及马腹",
   "unit": null,
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-14",
    "era_text": "万历四十七年三月初一"
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "时河水方涨，士卒渡者衣甲尽湿，寒不能军",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.5,
   "scale": "county",
   "note": "这是『疲劳』这个抽象参数在史料中的实际形态。杜松部当日两渡浑河，接战时是湿透且受冻的状态。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A047",
   "subject": "terrain:route_jin",
   "predicate": "机动方式",
   "value": "骑兵",
   "value_text": "八旗以骑射为本",
   "unit": null,
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-18",
    "era_text": "天命四年三月"
   },
   "place": "hetuala",
   "source": "modern",
   "quote": "八旗兵制以骑兵为主体，机动力远高于明军步骑混编",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.75,
   "scale": "empire",
   "note": "本项目的地形行军模型以步兵速度为基准，因此算出后金机动『紧张度 2.64』。这个偏差不是史料造假，是模型缺了兵种维度——系统自动生成的问题，由这条断言回答。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A048",
   "subject": "person:liruobai",
   "predicate": "评价",
   "value": "逗留不进",
   "value_text": "素怯，逗留不进，全师而还",
   "unit": null,
   "time": {
    "start": "1619-04-13",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "hulan",
   "source": "mingshi",
   "quote": "如柏素怯，逗留不进，及闻三路败，遂引还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.4,
   "scale": "empire",
   "note": "李成梁之子，战后遭弹劾，天启元年自杀。地形模型显示南路五日走完模型需 6.4 日的路，紧张度 1.28——按地形算他并不算慢。『逗留』这个评价可能带有战后追责的政治色彩。这是系统自动对一个流传四百年的定论提出的质疑。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "A044",
   "subject": "event:sarhu_battle",
   "predicate": "胜负性质",
   "value": "局部优势累积",
   "value_text": "非以少胜多，乃逐次以众击寡",
   "unit": null,
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "sarhu",
   "source": "modern",
   "quote": "后金总兵力少于明军，然每一场接战均以数倍兵力击其一部",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.8,
   "scale": "empire",
   "note": "这条断言可由本系统的接战数据自动检验，不需要人为宣称——见『局部优势』面板。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "A049",
   "subject": "casualty:ming",
   "predicate": "阵亡人数",
   "value": 90000,
   "value_text": "丧师九万",
   "unit": "人",
   "time": {
    "start": "1619-04-14",
    "end": "1619-04-18",
    "era_text": "万历四十七年三月"
   },
   "place": "sarhu",
   "source": "guoque",
   "quote": "四路丧师九万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.35,
   "scale": "province",
   "note": "谈迁只记损失总数而不记出征人数，与《明史》『四万五千八百七十余』整整差一倍。两个数字未必矛盾——《明史》数的是『阵亡军丁』，谈迁的『丧师』可能含溃散失踪与朝鲜、叶赫附从之众。本系统不裁决，只把两条并列并标出这一解释路径。",
   "_party": "明·私修",
   "_faction": null
  },
  {
   "id": "IN001",
   "subject": "war:sarhu",
   "predicate": "明军集兵分四路来攻",
   "value_text": "辽东经略杨镐集兵沈阳，分四路来攻",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "明帝欲逞志于我（时万历四十七年），令辽东经略杨镐集兵沈阳，分四路来攻",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "empire",
   "note": "明方纪年「万历四十七年」与后金纪年「天命四年」指同一年（1619）。由 LLM 从《皇清开国方略》卷六抽出，经 ingest.py + reign_era 归一化。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN002",
   "subject": "army:ming_west",
   "predicate": "兵力与出击路线",
   "value_text": "杜松等率兵六万，由浑河出抚顺关",
   "time": {
    "era_text": "天命四年二月廿九",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "fushunguan",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "二十九日杜松等所率兵六万已乘夜列炬出抚顺关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "西路为四路主力；年号换算取「天命四年」对应公元 1619，月日（二月廿九）原样保留待农历模块。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN003",
   "subject": "war:sarhu",
   "predicate": "大破明兵于萨尔浒山",
   "value_text": "三月甲申朔，大破明兵于萨尔浒山",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "三月甲申朔，大破明兵于萨尔浒山",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "主战场节点；与 IN001 为同一事件的不同纪年表述。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN004",
   "subject": "person:dusong",
   "predicate": "阵亡",
   "value_text": "明总兵杜松、王宣、赵梦麟等皆没于阵",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "明总兵杜松、王宣、赵梦麟等皆没于阵，横尸亘山野，血流成渠",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.85,
   "scale": "empire",
   "note": "西路主将杜松战死，是萨尔浒西路崩溃的标志。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN005",
   "subject": "army:ming_total",
   "predicate": "宣称兵力",
   "value_text": "号称兵四十七万",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "杨镐……号称兵四十七万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.3,
   "scale": "empire",
   "note": "明方对外宣称的虚数（震慑 + 安抚朝议），研究者普遍不采信；与 IN006 后金记述的「二十万」同为夸大，立场相关。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN006",
   "subject": "army:jin_total",
   "predicate": "实录所载明军规模",
   "value_text": "明以二十万众，号四十七万",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "hetuala",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "明以二十万众，号四十七万，分四路并力来战，今我不逾时破之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.4,
   "scale": "empire",
   "note": "胜方（后金）记述，夸大敌军以彰显战功；与 IN005 不冲突，是不同立场的同一虚数的两面。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "IN007",
   "subject": "army:ming_total",
   "predicate": "实际兵力缺口",
   "value_text": "明军实数史料记载不一：号称四十七万 / 实录二十万 / 学界逆推约八万八千",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "modern",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "empire",
   "note": "三类数字口径不同（宣称/胜方记述/学界逆推），不能强行合并；应作为缺口汇入 leads，待 DH 落实具体论著与页码后定稿。",
   "lead": {
    "where": "明军萨尔浒实际兵力需落实到具体论著与页码",
    "skills": [
     "明清军事史",
     "卫所兵额与饷银考证"
    ],
    "accept": "认领后可补一条 scholarship 层断言（如 A003 式），把八万八千的推算来源写明"
   },
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SX005",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value_text": "兵六万（李如柏部）",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "右翼中路，以李如柏、贺世贤、阎鸣泰督兵六万，由清河出鸦鹘关",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX006",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value_text": "兵四万（马林部）",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "左翼北路，以马林、麻岩、潘宗颜督兵四万，由开原合叶赫兵出三岔口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX007",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value_text": "兵四万（刘綎部）",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "右翼南路，以刘綎、康应干督兵四万合朝鲜兵，出宽甸口",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX010",
   "subject": "person:yanggao",
   "predicate": "指挥",
   "value_text": "辽东经略杨镐",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "令辽东经略杨镐集兵沈阳",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX012",
   "subject": "person:wangxuan",
   "predicate": "阵亡",
   "value_text": "没于阵",
   "time": {
    "era_text": "天命四年三月甲申朔",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "明总兵杜松、王宣、赵梦麟等皆没于阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX013",
   "subject": "person:zhaomenglin",
   "predicate": "阵亡",
   "value_text": "没于阵",
   "time": {
    "era_text": "天命四年三月甲申朔",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "明总兵杜松、王宣、赵梦麟等皆没于阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX014",
   "subject": "person:liuting",
   "predicate": "阵亡",
   "value_text": "战死",
   "time": {
    "era_text": "天命四年三月丁亥",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "丁亥，大破明兵于栋鄂路（刘綎部，战死）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX017",
   "subject": "person:dusong",
   "predicate": "轻敌冒进",
   "value_text": "乘夜列炬出抚顺关",
   "time": {
    "era_text": "天命四年二月二十九日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "fushunguan",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "二十九日杜松等所率兵六万已乘夜列炬出抚顺关",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "county",
   "note": "原文未明说轻敌，但乘夜列炬暴露行踪可推",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX018",
   "subject": "army:houjin_defense",
   "predicate": "兵力",
   "value_text": "四百人（防卫筑城夫役）",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "我兵之防卫筑城夫役者仅四百人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX019",
   "subject": "army:houjin_total",
   "predicate": "集兵",
   "value_text": "过扎喀关，与大臣扈尔汉等集兵以待",
   "time": {
    "era_text": "天命四年三月甲申朔",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "fushunguan",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "过扎喀关，与大臣扈尔汉等集兵以待",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX020",
   "subject": "war:sarhu",
   "predicate": "结果",
   "value_text": "后金获全胜",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "今我不逾时破之，遂获全胜",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX021",
   "subject": "person:liruobai",
   "predicate": "撤退",
   "value_text": "自呼兰路遁归",
   "time": {
    "era_text": "天命四年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "如柏等自呼兰路遁归",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX022",
   "subject": "person:malin",
   "predicate": "助叶赫",
   "value_text": "率兵助叶赫",
   "time": {
    "era_text": "天命四年春正月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "马林率兵助叶赫，合兵出叶赫城四十里",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX023",
   "subject": "place:jiefan",
   "predicate": "筑城",
   "value_text": "令夫役万五千人赴界藩运石兴筑",
   "time": {
    "era_text": "天命四年二月己巳",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "jiefan",
   "source": "huangqing_kaiguo_fanglue",
   "quote": "令夫役万五千人赴界藩运石兴筑，以骑兵四百卫之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "SX001",
   "subject": "person:yanggao",
   "predicate": "任命",
   "value_text": "起兵部右侍郎往經略",
   "time": {
    "era_text": "万历四十六年",
    "start": "1618-01-01",
    "end": "1618-12-31",
    "gregorian_year": 1618
   },
   "place": "",
   "source": "mingshi",
   "quote": "廷議鎬熟諳遼事，起兵部右侍郎往經略。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "杨镐被任命为经略。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX002",
   "subject": "person:yanggao",
   "predicate": "集兵",
   "value_text": "征四方兵，圖大舉",
   "time": {
    "era_text": "万历四十六年",
    "start": "1618-01-01",
    "end": "1618-12-31",
    "gregorian_year": 1618
   },
   "place": "",
   "source": "mingshi",
   "quote": "既至，申明紀律，征四方兵，圖大舉。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX003",
   "subject": "war:sarhu",
   "predicate": "爆发",
   "value_text": "兵分四道",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "明年正月，鎬乃會總督汪可受、巡撫周永春、巡按陳王庭等定議，以二月十有一日誓師，二十一日出塞。兵分四道：總兵官馬林出開原攻北，杜松出撫順攻西，李如柏從鴉鶻關出趨清河攻南，東南則以劉綎出寬奠，由涼馬佃搗後，而以朝鮮兵助之。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "萨尔浒之战爆发，明军分四路进攻。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX004",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value_text": "號大兵四十七萬",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "號大兵四十七萬，期三月二日會二道關並進。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "此为号称兵力，实际兵力可能少于该数。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX005_M1",
   "subject": "person:dusong",
   "predicate": "出击路线",
   "value_text": "出撫順攻西",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "fushun",
   "source": "mingshi",
   "quote": "杜松出撫順攻西",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX006_M1",
   "subject": "person:malin",
   "predicate": "出击路线",
   "value_text": "出開原攻北",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kaiyuan",
   "source": "mingshi",
   "quote": "總兵官馬林出開原攻北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX007_M1",
   "subject": "person:liruobai",
   "predicate": "出击路线",
   "value_text": "從鴉鶻關出趨清河攻南",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "yahuguan",
   "source": "mingshi",
   "quote": "李如柏從鴉鶻關出趨清河攻南",
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
   "subject": "person:liuting",
   "predicate": "出击路线",
   "value_text": "出寬奠，由涼馬佃搗後",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "mingshi",
   "quote": "東南則以劉綎出寬奠，由涼馬佃搗後",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX009",
   "subject": "person:dusong",
   "predicate": "阵亡",
   "value_text": "軍盡覆",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "松欲立首功，先期渡渾河，進至二道關，伏發，軍盡覆。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "杜松军覆没。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX010_M1",
   "subject": "person:malin",
   "predicate": "战败",
   "value_text": "林不支，遂大敗，遁去",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sanchaer",
   "source": "mingshi",
   "quote": "林統開原兵從三岔口出，聞松敗，結營自固。大清兵乘高奮擊，林不支，遂大敗，遁去。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX011",
   "subject": "person:liuting",
   "predicate": "阵亡",
   "value_text": "綎力戰死",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "mingshi",
   "quote": "綎已深入三百里，至深河，大清兵擊之而不動。已，乃張松旗幟，被其衣甲，紿綎。既入營，營中大亂，綎力戰死。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "刘綎战死。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX012_M1",
   "subject": "war:sarhu",
   "predicate": "伤亡",
   "value_text": "文武將吏前後死者三百一十餘人，軍士四萬五千八百餘人",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingshi",
   "quote": "文武將吏前後死者三百一十餘人，軍士四萬五千八百餘人，亡失馬駝甲仗無算。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "明军总伤亡数字。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX013_M1",
   "subject": "person:yanggao",
   "predicate": "下狱",
   "value_text": "逮下詔獄，論死",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "言官交章劾鎬，逮下詔獄，論死。伏法。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "杨镐因战败被下狱处死。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX014_M1",
   "subject": "person:yanggao",
   "predicate": "战前准备",
   "value_text": "申明紀律，征四方兵",
   "time": {
    "era_text": "万历四十六年",
    "start": "1618-01-01",
    "end": "1618-12-31",
    "gregorian_year": 1618
   },
   "place": "",
   "source": "mingshi",
   "quote": "既至，申明紀律，征四方兵，圖大舉。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX015",
   "subject": "war:sarhu",
   "predicate": "兵力对比",
   "value_text": "號大兵四十七萬",
   "time": {
    "era_text": "万历四十七年二月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "",
   "source": "mingshi",
   "quote": "號大兵四十七萬",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "明史记载号称四十七万，但实际兵力可能远少于此，需进一步考证。",
   "lead": {
    "where": "mingshi",
    "skills": [
     "历史考证",
     "文献比对"
    ],
    "accept": "核实萨尔浒之战明军实际兵力"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX016",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大懼，狼狽先奔",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "鎬大懼，狼狽先奔，諸軍繼之。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "杨镐在蔚山之战中先逃。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX017_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬以如梅未至，不欲寅功出其上，遽鳴金收軍",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "及是，遊擊陳寅連破賊二柵，第三柵垂拔矣，鎬以如梅未至，不欲寅功出其上，遽鳴金收軍。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "杨镐因嫉妒而鸣金收兵，导致战败。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX018_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大怒，屏不奏，止稱百餘人",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "諸營上軍籍，士卒死亡殆二萬，鎬大怒，屏不奏，止稱百餘人。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "杨镐隐瞒伤亡数字。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX019_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大懼，狼狽先奔",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "鎬大懼，狼狽先奔，諸軍繼之。",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "杨镐在蔚山之战中先逃，导致明军溃败。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX020_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬以如梅未至，不欲寅功出其上，遽鳴金收軍",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "及是，遊擊陳寅連破賊二柵，第三柵垂拔矣，鎬以如梅未至，不欲寅功出其上，遽鳴金收軍。",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "杨镐因嫉妒而鸣金收兵，导致战败。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX021_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大怒，屏不奏，止稱百餘人",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "諸營上軍籍，士卒死亡殆二萬，鎬大怒，屏不奏，止稱百餘人。",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "杨镐隐瞒伤亡数字，导致朝廷无法了解真实情况。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX022_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大懼，狼狽先奔",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "鎬大懼，狼狽先奔，諸軍繼之。",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "杨镐在蔚山之战中先逃，但具体责任划分需进一步考证。",
   "lead": {
    "where": "mingshi",
    "skills": [
     "历史考证",
     "人物评价"
    ],
    "accept": "评估杨镐在蔚山之战中的具体责任"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX023_M1",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬以如梅未至，不欲寅功出其上，遽鳴金收軍",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "及是，遊擊陳寅連破賊二柵，第三柵垂拔矣，鎬以如梅未至，不欲寅功出其上，遽鳴金收軍。",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "杨镐因嫉妒而鸣金收兵，但具体动机需进一步考证。",
   "lead": {
    "where": "mingshi",
    "skills": [
     "历史考证",
     "人物评价"
    ],
    "accept": "评估杨镐在蔚山之战中的具体责任"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX024",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "value_text": "鎬大怒，屏不奏，止稱百餘人",
   "time": {
    "era_text": "万历二十六年",
    "start": "1598-01-01",
    "end": "1598-12-31",
    "gregorian_year": 1598
   },
   "place": "",
   "source": "mingshi",
   "quote": "諸營上軍籍，士卒死亡殆二萬，鎬大怒，屏不奏，止稱百餘人。",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "empire",
   "note": "杨镐隐瞒伤亡数字，但具体原因需进一步考证。",
   "lead": {
    "where": "mingshi",
    "skills": [
     "历史考证",
     "人物评价"
    ],
    "accept": "评估杨镐在蔚山之战中的具体责任"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "SX001_M2",
   "subject": "event:sarhu_battle",
   "predicate": "参战兵力",
   "value_text": "朝鲜三营兵马一万三千人",
   "time": {
    "era_text": "万历四十七年二月二十一日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "guanghaijun_rilu",
   "quote": "領三營兵馬一萬三千人，自昌城渡江",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "朝鲜军兵力，第三方视角",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX002_M2",
   "subject": "event:sarhu_battle",
   "predicate": "东路明军兵力",
   "value_text": "宽田一路主客官兵二万四千余人",
   "time": {
    "era_text": "万历四十七年二月二十五日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "guanghaijun_rilu",
   "quote": "寬田一路，主客官兵二萬四千餘人",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "刘綎东路兵力，朝鲜译官探报",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX003_M2",
   "subject": "event:sarhu_battle",
   "predicate": "东路明军实际兵力",
   "value_text": "不过万余",
   "time": {
    "era_text": "万历四十七年二月二十七日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "guanghaijun_rilu",
   "quote": "聲言三萬有餘，而以臣所見，不過萬餘名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "姜弘立目测东路明军实数，与宣称三万有出入",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX004_M2",
   "subject": "event:sarhu_battle",
   "predicate": "东路明军装备",
   "value_text": "器械龃龉，无大炮大器",
   "time": {
    "era_text": "万历四十七年二月二十六日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "guanghaijun_rilu",
   "quote": "器械齟齬，且無大炮、大器",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "姜弘立视察刘綎营壁所见",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX005_M2",
   "subject": "event:sarhu_battle",
   "predicate": "东路明军孤军",
   "value_text": "东路兵甚孤，刘綎与杨镐不和",
   "time": {
    "era_text": "万历四十七年二月二十六日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "guanghaijun_rilu",
   "quote": "楊爺與俺，自前不相好，必要致死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "刘綎自述与杨镐矛盾，致孤军",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX006_M2",
   "subject": "event:sarhu_battle",
   "predicate": "深河之战",
   "value_text": "朝鲜军与后金军交战，中死者殆半",
   "time": {
    "era_text": "万历四十七年三月初二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "guanghaijun_rilu",
   "quote": "雜以弓矢，鳥銃亂發，中死者殆半",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "朝鲜军与后金军初战，损失惨重",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX007_M2",
   "subject": "event:sarhu_battle",
   "predicate": "战役结果",
   "value_text": "天朝大兵及朝鲜三营兵初四日败绩于深河",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "guanghaijun_rilu",
   "quote": "天朝大兵及我三營兵，以初四日敗績於深河",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "朝鲜平安监司驰启，战役结果",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX008_M2",
   "subject": "event:sarhu_battle",
   "predicate": "刘綎阵亡",
   "value_text": "都督坐于火药包上放火自杀",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "guanghaijun_rilu",
   "quote": "都督等以下將官坐於火藥包上，放火自殺",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "刘綎战败自焚，朝鲜记载",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX009_M2",
   "subject": "event:sarhu_battle",
   "predicate": "金应河战死",
   "value_text": "金应河独依大树，以三大弓迭射，被称依柳将",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "guanghaijun_rilu",
   "quote": "應河獨依大樹，以三大弓迭射……稱之曰『依柳將』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "朝鲜左营将金应河英勇战死",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX010_M2",
   "subject": "event:sarhu_battle",
   "predicate": "朝鲜军投降",
   "value_text": "姜弘立、金景瑞率三营兵降后金",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenhe",
   "source": "guanghaijun_rilu",
   "quote": "弘立着便服，景瑞脫盔甲，詣虜陣……投戈釋甲，詣虜陣降",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "朝鲜军主帅降后金，第三方记载",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX011_M2",
   "subject": "event:sarhu_battle",
   "predicate": "杜松败亡",
   "value_text": "杜松贪功轻进，全军败没",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "guanghaijun_rilu",
   "quote": "開、鐵摠兵杜松貪功輕進，全軍敗沒",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "朝鲜记载杜松败亡，致后金专意东路",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX012_M2",
   "subject": "event:sarhu_battle",
   "predicate": "四路败绩",
   "value_text": "四路俱败绩",
   "time": {
    "era_text": "万历四十七年三月十二日",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "guanghaijun_rilu",
   "quote": "終致四路俱敗績",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "萨尔浒之战明军四路皆败",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "SX001_M3",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "value_text": "主客出塞官军共八万八千五百五十余员名",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "各路除丽兵外，主客出塞官军共八万八千五百五十余员名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "明方私修，最可信之明方记载",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX002_M3",
   "subject": "event:sarhu_battle",
   "predicate": "阵亡",
   "value_text": "阵亡军丁四万五千八百七十余名",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "阵亡军丁四万五千八百七十余名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX003_M3",
   "subject": "event:sarhu_battle",
   "predicate": "阵亡",
   "value_text": "阵亡道镇副协参游都司通判守备中军千把总等官共三百一十余员名",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "阵亡道镇副协参游都司通判守备中军千把总等官共三百一十余员名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX004_M3",
   "subject": "event:sarhu_battle",
   "predicate": "阵亡",
   "value_text": "阵失马骡驼共二万八千六百余匹头只",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "阵失马骡驼共二万八千六百余匹头只",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX005_M3",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "value_text": "阵回见在并招集官军共四万二千三百六十余员名",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "阵回见在并招集官军共四万二千三百六十余员名",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX006_M3",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "value_text": "奴酋精兵约六万余",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "hetuala",
   "source": "ming_shenzong_shilu",
   "quote": "奴酋精兵约六万余",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "明方估计，非实测",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "SX007_M3",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "value_text": "通共未满八万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "ming_shenzong_shilu",
   "quote": "通共未满八万",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "兵部尚书黄嘉善言，与三朝辽事实录八万八千有出入",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "SX008_M3",
   "subject": "event:sarhu_battle",
   "predicate": "集兵",
   "value_text": "分派数路，不免气势单薄",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "ming_shenzong_shilu",
   "quote": "将来分派数路，不免气势单薄",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "黄嘉善对分兵之担忧",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "SX009_M3",
   "subject": "event:sarhu_battle",
   "predicate": "出击路线",
   "value_text": "四路进兵，期会赫图阿拉",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "hetuala",
   "source": "sanchaoliao_shilu",
   "quote": "经略杨镐议四路进兵，期会赫图阿拉",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "province",
   "note": "",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX010_M3",
   "subject": "event:sarhu_battle",
   "predicate": "战略",
   "value_text": "凭尔几路来，我只一路去",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "hetuala",
   "source": "sanchaoliao_shilu",
   "quote": "凭尔几路来，我只一路去",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "province",
   "note": "后金方战略，明方记载转述",
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "SX011_M3",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "value_text": "明军实数约八万八千",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "modern",
   "quote": "明军实数约八万八千",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "现代研究对record的量化修正",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "SX012_M3",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "value_text": "号称四十七万 vs 实录二十万 vs 实数八万八千",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "sanchaoliao_shilu",
   "quote": "各路除丽兵外，主客出塞官军共八万八千五百五十余员名",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "province",
   "note": "明军兵力记载分歧，不强行合并",
   "lead": {
    "where": "sarhu_battle_force_discrepancy",
    "skills": [
     "史料考据",
     "数字校勘"
    ],
    "accept": "厘清明军实际出兵人数"
   },
   "_party": "明·封疆奏议",
   "_faction": "feng_jiang"
  },
  {
   "id": "MT_S01",
   "subject": "event:sarhu_battle",
   "predicate": "明军四路部署",
   "value_text": "杨镐分兵四道：杜松督六万由抚顺出西路，马林督四万出开原会叶赫兵二万（北路），李如柏督六万出鸦鹘关趋清河（南路），刘綎督四万会朝鲜兵二万入宽甸口（东路），期二十一日后分道出塞，会师二道关。",
   "quote": "镐议分兵四道……杜松，督兵六万由抚顺出西路；马林，督兵四万出北路，由开原会叶赫兵二万；李如柏，督兵六万出南路，田鸦鹘关趋清河；刘綎，督兵四万出东路，会朝鲜兵二万入宽甸口……期以二十一日后分道出塞，会师于二道关。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "万历四十七年二月",
   "place": "hetuala",
   "confidence": 0.8,
   "note": "《明通鉴》记杨镐四路分兵之原部署，可与清太祖实录、明神宗实录对读各路兵力。",
   "source": "mingtongjian",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S02",
   "subject": "event:sarhu_battle",
   "predicate": "杨镐结局",
   "value_text": "开原、铁岭相继失陷后，言官交章弹劾杨镐，杨镐下诏狱论死。",
   "quote": "初，四路总兵之败，御史扬州鹤劾镐失机，上不问。及是开原、铁岭相继失，言官交章劝镐，乃下诏狱论死。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "万历四十七年",
   "place": "hetuala",
   "confidence": 0.7,
   "note": "中枢（浙党方从哲等）先发红旗促战，败则诿过经略——派系诿过的典型。",
   "source": "mingtongjian",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S03",
   "subject": "event:sarhu_battle",
   "predicate": "战后余波·叶赫",
   "value_text": "萨尔浒战后，后金以叶赫助兵为由攻灭叶赫（北关）。",
   "quote": "时叶赫贝勒……大清以萨尔浒之役，叶赫助兵，故定计攻讨……于是叶赫属城俱下。",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "era": "万历四十七年八月",
   "place": "hetuala",
   "confidence": 0.7,
   "note": "叶赫为海西女真扈伦四部之一，萨尔浒中助明，战后被灭。",
   "source": "mingtongjian",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S04",
   "subject": "event:sarhu_battle",
   "predicate": "分兵四道",
   "value_text": "镐议分兵四道",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shenyang",
   "source": "mingtongjian",
   "quote": "镐议分兵四道",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "杨镐制定四路出击计划",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S05",
   "subject": "person:dusong",
   "predicate": "兵力",
   "value_text": "督兵六万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "fushun",
   "source": "mingtongjian",
   "quote": "总兵官杜松，督兵六万由抚顺出西路",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "西路兵力",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S06",
   "subject": "person:malin",
   "predicate": "兵力",
   "value_text": "督兵四万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kaiyuan",
   "source": "mingtongjian",
   "quote": "总兵官马林，督兵四万出北路",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "北路兵力",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S07",
   "subject": "person:liuting",
   "predicate": "兵力",
   "value_text": "督兵四万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "kuandian",
   "source": "mingtongjian",
   "quote": "总兵官刘綎，督兵四万出东路",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "东路兵力",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S08",
   "subject": "event:dusong_cross",
   "predicate": "渡河",
   "value_text": "先渡浑河",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingtongjian",
   "quote": "松欲立首功，先渡浑河",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "杜松急于立功，率先渡河",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S09",
   "subject": "event:dusong_cross",
   "predicate": "伏击",
   "value_text": "精骑尽伏谷口",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingtongjian",
   "quote": "精骑则尽伏谷口以待",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "后金设伏",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S10",
   "subject": "event:dusong_cross",
   "predicate": "阵亡",
   "value_text": "松与赵梦麟、王宣皆殁于阵",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingtongjian",
   "quote": "松与赵梦麟、王宣皆殁于阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "西路主将阵亡",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S11",
   "subject": "event:shangjianya",
   "predicate": "败绩",
   "value_text": "林兵大溃",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shangjianya",
   "source": "mingtongjian",
   "quote": "林兵大溃，副将麻岩等阵没，林仅以身免",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "北路马林大败",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S12",
   "subject": "event:shangjianya",
   "predicate": "阵亡",
   "value_text": "宗颜全军尽没",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "shangjianya",
   "source": "mingtongjian",
   "quote": "宗颜与游击窦永澄、守备江万春、通判董尔励及所部健丁冲突鏖战，自晨至午，力竭不支，全军尽没",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "潘宗颜部覆没",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S13",
   "subject": "event:south_retreat",
   "predicate": "撤军",
   "value_text": "如柏得檄还",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "qinghe",
   "source": "mingtongjian",
   "quote": "如柏得檄还",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "county",
   "note": "南路李如柏撤退",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S14",
   "subject": "event:sarhu_battle",
   "predicate": "结果",
   "value_text": "四路败三路",
   "time": {
    "era_text": "万历四十七年三月",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "mingtongjian",
   "quote": "庚寅，东路总兵官刘綎败绩",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "东路亦败，四路仅南路撤回",
   "_party": "二手综述",
   "_faction": null
  },
  {
   "id": "MT_S15",
   "subject": "event:sarhu_battle",
   "predicate": "兵力对比",
   "value_text": "明军约十六万，后金约六万",
   "time": {
    "era_text": "万历四十七年",
    "start": "1619-01-01",
    "end": "1619-12-31",
    "gregorian_year": 1619
   },
   "place": "sarhu",
   "source": "modern",
   "quote": "明军四路合计约十六万，后金兵力约六万",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.7,
   "scale": "province",
   "note": "现代学者估算，明军实数可能低于此数",
   "_party": "学界",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:army:ming_total|兵力",
   "subject": "army:ming_total",
   "predicate": "兵力",
   "kind": "record_vs_scholarship",
   "count": 9,
   "spread": 5.34,
   "assertion_ids": [
    "A001",
    "A002",
    "A003",
    "A004",
    "SX005",
    "SX006",
    "SX007",
    "SX004",
    "SX007_M3"
   ]
  },
  {
   "id": "cf:casualty:ming|阵亡人数",
   "subject": "casualty:ming",
   "predicate": "阵亡人数",
   "kind": "record_vs_record",
   "count": 2,
   "spread": 1.96,
   "assertion_ids": [
    "A030",
    "A049"
   ]
  },
  {
   "id": "cf:army:jin_total|兵力",
   "subject": "army:jin_total",
   "predicate": "兵力",
   "kind": "record_vs_scholarship",
   "count": 2,
   "spread": 1.67,
   "assertion_ids": [
    "A010",
    "A011"
   ]
  },
  {
   "id": "cf:event:dusong_cross|渡河损失原因",
   "subject": "event:dusong_cross",
   "predicate": "渡河损失原因",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "A042",
    "A043"
   ]
  },
  {
   "id": "cf:person:dusong|阵亡",
   "subject": "person:dusong",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "IN004",
    "SX009"
   ]
  },
  {
   "id": "cf:person:liuting|阵亡",
   "subject": "person:liuting",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX014",
    "SX011"
   ]
  },
  {
   "id": "cf:person:yanggao|战败责任",
   "subject": "person:yanggao",
   "predicate": "战败责任",
   "kind": "record_vs_record",
   "count": 6,
   "spread": null,
   "assertion_ids": [
    "SX016",
    "SX017_M1",
    "SX018_M1",
    "SX019_M1",
    "SX020_M1",
    "SX021_M1"
   ]
  },
  {
   "id": "cf:event:sarhu_battle|兵力",
   "subject": "event:sarhu_battle",
   "predicate": "兵力",
   "kind": "record_vs_scholarship",
   "count": 4,
   "spread": null,
   "assertion_ids": [
    "SX001_M3",
    "SX005_M3",
    "SX006_M3",
    "SX011_M3"
   ]
  },
  {
   "id": "cf:event:sarhu_battle|阵亡",
   "subject": "event:sarhu_battle",
   "predicate": "阵亡",
   "kind": "record_vs_record",
   "count": 3,
   "spread": null,
   "assertion_ids": [
    "SX002_M3",
    "SX003_M3",
    "SX004_M3"
   ]
  }
 ],
 "gaps": [
  "A092",
  "IN007",
  "SX015",
  "SX022_M1",
  "SX023_M1",
  "SX024",
  "SX012_M3"
 ],
 "routes": [
  {
   "id": "route_west",
   "column": "west",
   "name": "西路 · 杜松",
   "side": "ming",
   "source_support": [
    "shenzong_shilu",
    "mingshi"
   ],
   "confidence": 0.7,
   "nodes": [
    {
     "place": "shenyang",
     "at": "1619-04-11",
     "label": "出沈阳"
    },
    {
     "place": "fushun",
     "at": "1619-04-12",
     "label": "抵抚顺"
    },
    {
     "place": "fushunguan",
     "at": "1619-04-13",
     "label": "出抚顺关，逾五岭"
    },
    {
     "place": "sarhu",
     "at": "1619-04-14",
     "label": "渡浑河，主力驻萨尔浒"
    },
    {
     "place": "jilinya",
     "at": "1619-04-14",
     "label": "分兵攻吉林崖"
    }
   ],
   "outcome": {
    "at": "1619-04-14",
    "type": "annihilated",
    "text": "萨尔浒大营与吉林崖分兵先后被破，杜松、王宣、赵梦麟阵亡"
   }
  },
  {
   "id": "route_north",
   "column": "north",
   "name": "北路 · 马林",
   "side": "ming",
   "source_support": [
    "shenzong_shilu",
    "mingshi"
   ],
   "confidence": 0.6,
   "nodes": [
    {
     "place": "kaiyuan",
     "at": "1619-04-12",
     "label": "出开原"
    },
    {
     "place": "sanchaer",
     "at": "1619-04-13",
     "label": "经三岔儿堡入塞"
    },
    {
     "place": "shangjianya",
     "at": "1619-04-15",
     "label": "闻杜松败，就地结营三处"
    },
    {
     "place": "feifenshan",
     "at": "1619-04-15",
     "label": "潘宗颜别营斐芬山"
    }
   ],
   "outcome": {
    "at": "1619-04-15",
    "type": "routed",
    "text": "三营被逐个击破，潘宗颜、龚念遂战死，马林单骑走开原"
   }
  },
  {
   "id": "route_east",
   "column": "east",
   "name": "东路 · 刘綎（含朝鲜军）",
   "side": "ming",
   "source_support": [
    "zhazhong_rilu",
    "mingshi",
    "taizu_shilu"
   ],
   "confidence": 0.75,
   "nodes": [
    {
     "place": "kuandian",
     "at": "1619-04-11",
     "label": "出宽甸"
    },
    {
     "place": "liangmadian",
     "at": "1619-04-13",
     "label": "亮马佃"
    },
    {
     "place": "shenhe",
     "at": "1619-04-14",
     "label": "深河，朝鲜军扎营"
    },
    {
     "place": "niumaozhai",
     "at": "1619-04-15",
     "label": "破牛毛寨守军"
    },
    {
     "place": "abudaligang",
     "at": "1619-04-17",
     "label": "中伏于阿布达里岗"
    },
    {
     "place": "fucha",
     "at": "1619-04-17",
     "label": "朝鲜军被围于富察之野"
    }
   ],
   "outcome": {
    "at": "1619-04-17",
    "type": "annihilated",
    "text": "刘綎战死，乔一琦自尽；朝鲜都元帅姜弘立率余部降"
   }
  },
  {
   "id": "route_south",
   "column": "south",
   "name": "南路 · 李如柏",
   "side": "ming",
   "source_support": [
    "shenzong_shilu",
    "mingshi"
   ],
   "confidence": 0.5,
   "nodes": [
    {
     "place": "qinghe",
     "at": "1619-04-13",
     "label": "出清河"
    },
    {
     "place": "yahuguan",
     "at": "1619-04-15",
     "label": "出鸦鹘关，行动迟缓"
    },
    {
     "place": "hulan",
     "at": "1619-04-17",
     "label": "抵虎拦路，未接战"
    },
    {
     "place": "qinghe",
     "at": "1619-04-18",
     "label": "奉檄撤回"
    }
   ],
   "outcome": {
    "at": "1619-04-18",
    "type": "withdrawn",
    "text": "全师而还，撤退中因敌哨骑鸣螺自相蹂践，死千余人"
   }
  },
  {
   "id": "route_jin",
   "column": "jin",
   "name": "后金 · 努尔哈赤主力",
   "side": "jin",
   "source_support": [
    "taizu_shilu"
   ],
   "confidence": 0.65,
   "nodes": [
    {
     "place": "hetuala",
     "at": "1619-04-13",
     "label": "赫图阿拉集结，定策先击西路"
    },
    {
     "place": "jiefan",
     "at": "1619-04-14",
     "label": "驰援界凡，破杜松"
    },
    {
     "place": "shangjianya",
     "at": "1619-04-15",
     "label": "北上破马林"
    },
    {
     "place": "hetuala",
     "at": "1619-04-16",
     "label": "回师休整一日"
    },
    {
     "place": "abudaligang",
     "at": "1619-04-17",
     "label": "南下设伏，破刘綎"
    }
   ],
   "outcome": {
    "at": "1619-04-18",
    "type": "victory",
    "text": "五日之内往返机动约五百里，以六万之众逐次歼灭三路明军"
   }
  }
 ],
 "engagements": [
  {
   "id": "eng_sarhu_camp",
   "name": "萨尔浒大营",
   "at": "1619-04-14",
   "era": "三月初一 · 午后",
   "place": "sarhu",
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_west",
     "commander": "dusong",
     "committed_ratio": 0.66,
     "commit_basis": "杜松分兵：主力留萨尔浒立营，自率一部渡河攻吉林崖。分兵比例史无明文，此处按二比一推算。",
     "commit_confidence": 0.45,
     "fatigue": "exhausted",
     "fatigue_basis": "当日两渡浑河，时三月辽东未解冻，士卒衣甲尽湿；立营未固即遇攻。",
     "march_72h_li": 200,
     "posture": "立营未固"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "nurhaci",
     "committed_ratio": 0.75,
     "commit_basis": "《太祖实录》：命二旗助界凡，自将六旗攻萨尔浒大营。六旗即八分之六。",
     "commit_confidence": 0.72,
     "fatigue": "fresh",
     "fatigue_basis": "自赫图阿拉短距机动百里内，未经苦战。",
     "march_72h_li": 100,
     "posture": "自高处下击"
    }
   ],
   "winner": "jin",
   "outcome": "明军大营被冲破，溃卒渡河多溺死",
   "subject": "event:sarhu_battle"
  },
  {
   "id": "eng_jilinya",
   "name": "吉林崖",
   "at": "1619-04-14",
   "era": "三月初一 · 日暮",
   "place": "jilinya",
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_west",
     "commander": "dusong",
     "committed_ratio": 0.34,
     "commit_basis": "杜松亲率之攻城部队，即分兵之另一部。",
     "commit_confidence": 0.45,
     "fatigue": "exhausted",
     "fatigue_basis": "涉水后仰攻山崖，且大营已破、退路断绝。",
     "march_72h_li": 200,
     "posture": "仰攻，背水"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "nurhaci",
     "committed_ratio": 1.0,
     "commit_basis": "先以二旗助守，破大营后六旗回身合击，实为全军。此处最能体现内线机动之利：同一支部队在半日内打了两场，每一场都是多打少。",
     "commit_confidence": 0.6,
     "fatigue": "fresh",
     "fatigue_basis": "居高守险，且有界凡筑城夫役万五千人可为声势。",
     "march_72h_li": 100,
     "posture": "据险，且有援"
    }
   ],
   "winner": "jin",
   "outcome": "杜松、王宣、赵梦麟阵亡，西路全军覆没",
   "subject": "event:dusong_cross"
  },
  {
   "id": "eng_shangjianya",
   "name": "尚间崖",
   "at": "1619-04-15",
   "era": "三月初二",
   "place": "shangjianya",
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_north",
     "commander": "malin",
     "committed_ratio": 0.5,
     "commit_basis": "马林闻杜松败，就地结营三处：本部尚间崖、潘宗颜斐芬山、龚念遂后方辎重营。三营互不相救，本部约当全军之半。",
     "commit_confidence": 0.5,
     "fatigue": "marching",
     "fatigue_basis": "闻败仓促结营，掘壕列车营未成。",
     "march_72h_li": 250,
     "posture": "仓促结营，三分兵力"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "nurhaci",
     "committed_ratio": 0.9,
     "commit_basis": "破西路次日即北上，几以全军扑之。留少数看守界凡。",
     "commit_confidence": 0.55,
     "fatigue": "marching",
     "fatigue_basis": "昨日苦战，今日又行；但为胜兵，士气正锐。",
     "march_72h_li": 150,
     "posture": "乘胜，先夺山巅"
    }
   ],
   "winner": "jin",
   "outcome": "马林本部溃，马林单骑走开原",
   "subject": "event:shangjianya"
  },
  {
   "id": "eng_feifenshan",
   "name": "斐芬山",
   "at": "1619-04-15",
   "era": "三月初二 · 稍后",
   "place": "feifenshan",
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_north",
     "commander": "panzongyan",
     "committed_ratio": 0.33,
     "commit_basis": "潘宗颜别营，三营之一。",
     "commit_confidence": 0.45,
     "fatigue": "marching",
     "fatigue_basis": "孤军，主将已溃，无援。",
     "march_72h_li": 250,
     "posture": "孤营据山，火器犹存"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "nurhaci",
     "committed_ratio": 0.9,
     "commit_basis": "破马林本部后即移兵攻斐芬山，仍为全军。",
     "commit_confidence": 0.5,
     "fatigue": "marching",
     "fatigue_basis": "连战二场。",
     "march_72h_li": 160,
     "posture": "四面合围"
    }
   ],
   "winner": "jin",
   "outcome": "潘宗颜力战死，北路尽没",
   "subject": "event:shangjianya"
  },
  {
   "id": "eng_abudaligang",
   "name": "阿布达里岗",
   "at": "1619-04-17",
   "era": "三月初四",
   "place": "abudaligang",
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_east",
     "commander": "liuting",
     "committed_ratio": 0.4,
     "commit_basis": "山道行军，队伍前后拉长数十里。中伏时能接战者仅前锋一部。这是地形直接压低『有效投入兵力』的典型：名义一万，实际能同时挥刀的不足半数。",
     "commit_confidence": 0.35,
     "fatigue": "exhausted",
     "fatigue_basis": "自宽甸山道行军六日约三百五十里，且粮运不继。",
     "march_72h_li": 180,
     "posture": "行军纵队，遭伏"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "daishan",
     "committed_ratio": 0.55,
     "commit_basis": "代善、皇太极率部南下设伏，留一部备南路李如柏。",
     "commit_confidence": 0.45,
     "fatigue": "fresh",
     "fatigue_basis": "三月初三回赫图阿拉休整一日，以逸待劳。",
     "march_72h_li": 120,
     "posture": "设伏，且诈用明军令旗诱其轻进"
    }
   ],
   "winner": "jin",
   "outcome": "刘綎战死，东路溃",
   "subject": "event:abudaligang"
  },
  {
   "id": "eng_fucha",
   "name": "富察之野",
   "at": "1619-04-17",
   "era": "三月初四 · 次日",
   "place": "fucha",
   "sides": [
    {
     "side": "ming",
     "force": "army:joseon",
     "commander": "kanghonglip",
     "committed_ratio": 0.7,
     "commit_basis": "朝鲜三营，金应河左营先溃，姜弘立中营与右营被围。",
     "commit_confidence": 0.5,
     "fatigue": "exhausted",
     "fatigue_basis": "《栅中日录》记朝鲜军粮尽数日，士卒采松皮为食。",
     "march_72h_li": 150,
     "posture": "粮尽，孤立无援"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "daishan",
     "committed_ratio": 0.55,
     "commit_basis": "破刘綎之同一部队，转攻朝鲜军。",
     "commit_confidence": 0.4,
     "fatigue": "marching",
     "fatigue_basis": "连战。",
     "march_72h_li": 130,
     "posture": "围而招降"
    }
   ],
   "winner": "jin",
   "outcome": "姜弘立率余部降",
   "subject": "event:abudaligang"
  },
  {
   "id": "eng_south_none",
   "name": "南路 · 未接战",
   "at": "1619-04-18",
   "era": "三月初五",
   "place": "hulan",
   "no_contact": true,
   "sides": [
    {
     "side": "ming",
     "force": "army:ming_south",
     "commander": "liruobai",
     "committed_ratio": 0.0,
     "commit_basis": "全程未与后金主力接战，奉檄撤回。",
     "commit_confidence": 0.8,
     "fatigue": "fresh",
     "fatigue_basis": "行动迟缓，未经战。",
     "march_72h_li": 90,
     "posture": "观望后撤"
    },
    {
     "side": "jin",
     "force": "army:jin_total",
     "commander": "-",
     "committed_ratio": 0.0,
     "commit_basis": "仅以哨骑袭扰。",
     "commit_confidence": 0.7,
     "fatigue": "fresh",
     "fatigue_basis": "-",
     "march_72h_li": 0,
     "posture": "哨骑鸣螺"
    }
   ],
   "winner": null,
   "outcome": "全师而还，但撤退中自相蹂践死千余人。这一路的两万五千人，是明军总兵力里从未上过秤的一块。",
   "subject": "event:south_retreat"
  }
 ],
 "timeline": [
  {
   "at": "1619-04-11",
   "era": "万历四十七年二月廿七",
   "label": "四路陆续出发",
   "key": false
  },
  {
   "at": "1619-04-12",
   "era": "万历四十七年二月廿八",
   "label": "杜松抵抚顺",
   "key": false
  },
  {
   "at": "1619-04-13",
   "era": "万历四十七年二月廿九",
   "label": "杜松出关抢进，四路失去协同",
   "key": true
  },
  {
   "at": "1619-04-14",
   "era": "万历四十七年三月初一",
   "label": "萨尔浒 · 吉林崖 — 西路覆没",
   "key": true
  },
  {
   "at": "1619-04-15",
   "era": "万历四十七年三月初二",
   "label": "尚间崖 · 斐芬山 — 北路溃散",
   "key": true
  },
  {
   "at": "1619-04-16",
   "era": "万历四十七年三月初三",
   "label": "后金回师休整，东路仍在深入",
   "key": false
  },
  {
   "at": "1619-04-17",
   "era": "万历四十七年三月初四",
   "label": "阿布达里岗 · 富察 — 东路覆没，朝鲜军降",
   "key": true
  },
  {
   "at": "1619-04-18",
   "era": "万历四十七年三月初五",
   "label": "南路奉檄撤退，战事终结",
   "key": true
  }
 ],
 "columns": [
  {
   "id": "west",
   "name": "西路",
   "commander": "dusong",
   "from": "shenyang",
   "gate": "fushunguan",
   "color": "#C0392B"
  },
  {
   "id": "north",
   "name": "北路",
   "commander": "malin",
   "from": "kaiyuan",
   "gate": "sanchaer",
   "color": "#B7791F"
  },
  {
   "id": "east",
   "name": "东路",
   "commander": "liuting",
   "from": "kuandian",
   "gate": "liangmadian",
   "color": "#2E7D8F"
  },
  {
   "id": "south",
   "name": "南路",
   "commander": "liruobai",
   "from": "qinghe",
   "gate": "yahuguan",
   "color": "#6B7280"
  }
 ],
 "attrition": {
  "_comment": "逐次损耗。『优势逐渐累积』这句话要成立，必须能画出双方可用兵力随时间的交叉点。",
  "ming": [
   {
    "after": "1619-04-13",
    "lost": 0,
    "basis": "尚未接战"
   },
   {
    "after": "1619-04-14",
    "lost": 30000,
    "basis": "西路全军覆没（按现代考订西路三万计）"
   },
   {
    "after": "1619-04-15",
    "lost": 47000,
    "basis": "累计：西路 3 万 + 北路 1.5 万 + 叶赫兵一部"
   },
   {
    "after": "1619-04-17",
    "lost": 70000,
    "basis": "累计：再加东路刘綎万余与朝鲜军一万三千（多为被俘）"
   },
   {
    "after": "1619-04-18",
    "lost": 71000,
    "basis": "南路撤退自相蹂践千余人"
   }
  ],
  "jin": [
   {
    "after": "1619-04-13",
    "lost": 0,
    "basis": "-"
   },
   {
    "after": "1619-04-14",
    "lost": 1500,
    "basis": "现代考订推算。《太祖实录》几乎不记己方损失——这是史料立场的直接体现，胜方的记录里没有伤亡。"
   },
   {
    "after": "1619-04-15",
    "lost": 2500,
    "basis": "同上，推算"
   },
   {
    "after": "1619-04-17",
    "lost": 4000,
    "basis": "同上，推算"
   },
   {
    "after": "1619-04-18",
    "lost": 4000,
    "basis": "同上，推算"
   }
  ],
  "confidence": {
   "ming": 0.55,
   "jin": 0.2
  },
  "gap_note": "后金损失数字置信度仅 0.2。所有胜方史料都倾向于不记录己方伤亡，这不是疏漏，是体例。这条曲线的金方一侧，本质上是一条猜出来的线，界面必须让它看起来就是猜的。"
 },
 "fatigue_weight": {
  "_comment": "『以逸待劳』的量化尝试。这是一个模型参数，不是史实，可被替换。默认权重刻意保守：疲劳最多让有效兵力打七折，不允许它大到能单独解释胜负。",
  "fresh": 1.0,
  "marching": 0.85,
  "exhausted": 0.7
 },
 "events": [],
 "edges": [],
 "control": [
  {
   "place_id": "hetuala",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "jiefan",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "sarhu",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "jilinya",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "fushun",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "qinghe",
   "party": "清方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "shenyang",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "kaiyuan",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "kuandian",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "shangjianya",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "shangjianya",
   "party": "清方",
   "start": 1619,
   "end": 1619
  },
  {
   "place_id": "feifenshan",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "feifenshan",
   "party": "清方",
   "start": 1619,
   "end": 1619
  },
  {
   "place_id": "niumaozhai",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "niumaozhai",
   "party": "清方",
   "start": 1619,
   "end": 1619
  },
  {
   "place_id": "abudaligang",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "abudaligang",
   "party": "清方",
   "start": 1619,
   "end": 1619
  },
  {
   "place_id": "fucha",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "fucha",
   "party": "清方",
   "start": 1619,
   "end": 1619
  },
  {
   "place_id": "yehe",
   "party": "明方",
   "start": 1618,
   "end": 1619
  },
  {
   "place_id": "yehe",
   "party": "contested",
   "start": 1619,
   "end": 1619
  }
 ],
 "control_seats": [
  {
   "place_id": "hetuala",
   "name": "赫图阿拉",
   "lon": 125.03,
   "lat": 41.78,
   "region": "liaodong"
  },
  {
   "place_id": "jiefan",
   "name": "界凡（界藩城）",
   "lon": 124.22,
   "lat": 41.94,
   "region": "liaodong"
  },
  {
   "place_id": "sarhu",
   "name": "萨尔浒",
   "lon": 124.1,
   "lat": 41.9,
   "region": "liaodong"
  },
  {
   "place_id": "jilinya",
   "name": "吉林崖",
   "lon": 124.18,
   "lat": 41.93,
   "region": "liaodong"
  },
  {
   "place_id": "fushun",
   "name": "抚顺（抚顺所）",
   "lon": 123.96,
   "lat": 41.88,
   "region": "liaodong"
  },
  {
   "place_id": "qinghe",
   "name": "清河（清河堡）",
   "lon": 124.2,
   "lat": 41.35,
   "region": "liaodong"
  },
  {
   "place_id": "shenyang",
   "name": "沈阳（沈阳中卫）",
   "lon": 123.43,
   "lat": 41.8,
   "region": "liaodong"
  },
  {
   "place_id": "kaiyuan",
   "name": "开原",
   "lon": 124.03,
   "lat": 42.55,
   "region": "liaodong"
  },
  {
   "place_id": "kuandian",
   "name": "宽甸（宽奠堡）",
   "lon": 124.78,
   "lat": 40.73,
   "region": "liaodong"
  },
  {
   "place_id": "shangjianya",
   "name": "尚间崖",
   "lon": 124.3,
   "lat": 42.05,
   "region": "liaodong"
  },
  {
   "place_id": "feifenshan",
   "name": "斐芬山",
   "lon": 124.38,
   "lat": 42.0,
   "region": "liaodong"
  },
  {
   "place_id": "niumaozhai",
   "name": "牛毛寨",
   "lon": 125.15,
   "lat": 41.35,
   "region": "liaodong"
  },
  {
   "place_id": "abudaligang",
   "name": "阿布达里岗",
   "lon": 125.0,
   "lat": 41.55,
   "region": "liaodong"
  },
  {
   "place_id": "fucha",
   "name": "富察之野",
   "lon": 124.92,
   "lat": 41.5,
   "region": "liaodong"
  },
  {
   "place_id": "yehe",
   "name": "叶赫",
   "lon": 124.6,
   "lat": 43.05,
   "region": "liaodong"
  }
 ],
 "control_years": [
  1618,
  1619
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
        121.0,
        40.747
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
        121.0,
        39.0
       ],
       [
        121.0,
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
        121.0,
        40.747
       ],
       [
        121.0,
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
        121.0,
        44.3
       ],
       [
        121.0,
        42.26
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
        121.0,
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
         121.0,
         42.26
        ],
        [
         121.0,
         40.712
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
         121.0,
         40.745
        ],
        [
         121.0,
         40.807
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
       121.0,
       43.493
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
   121.0,
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
