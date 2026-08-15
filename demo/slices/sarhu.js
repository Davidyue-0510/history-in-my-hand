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
  "page": "sarhu.html",
  "key": "sarhu",
  "scene_id": "sarhu",
  "vocab_pack": "inline:sarhu",
  "terrain_grid": "liaodong"
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
   "influence": 1
  },
  {
   "id": "zhaomenglin",
   "name": "赵梦麟",
   "side": "ming",
   "role_hint": "原任总兵",
   "column": "west",
   "note": "西路副将",
   "influence": 1
  },
  {
   "id": "malin",
   "name": "马林",
   "side": "ming",
   "role_hint": "开原总兵",
   "column": "north",
   "note": "北路主将，名将马芳之子，文士气重",
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
   "influence": 1
  },
  {
   "id": "gongnian",
   "name": "龚念遂",
   "side": "ming",
   "role_hint": "游击",
   "column": "north",
   "note": "北路，掌辎重车营",
   "influence": 0
  },
  {
   "id": "liruobai",
   "name": "李如柏",
   "side": "ming",
   "role_hint": "辽东总兵",
   "column": "south",
   "note": "李成梁之子，南路主将，行动迟缓，战后自尽",
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
   "influence": 5
  },
  {
   "id": "qiaoyilang",
   "name": "乔一琦",
   "side": "ming",
   "role_hint": "监军道",
   "column": "east",
   "note": "东路，联络朝鲜军，兵败自尽",
   "influence": 0
  },
  {
   "id": "kanghonglip",
   "name": "姜弘立",
   "side": "joseon",
   "role_hint": "朝鲜五道都元帅",
   "column": "east",
   "note": "朝鲜援军统帅，富察之野降后金",
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
   "influence": 0
  },
  {
   "id": "liminhwan",
   "name": "李民寏",
   "side": "joseon",
   "role_hint": "从事官",
   "column": "east",
   "note": "《栅中日录》作者，被俘后记其所历",
   "influence": 0
  },
  {
   "id": "nurhaci",
   "name": "努尔哈赤",
   "side": "jin",
   "role_hint": "后金大汗",
   "column": null,
   "note": "亲自指挥，采取凭尔几路来我只一路去的集中打击方针",
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
   "influence": 0
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "side": "jin",
   "role_hint": "四贝勒",
   "column": null,
   "note": "参与诸战",
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
   "influence": 0
  },
  {
   "id": "jinyinghe",
   "name": "金应河",
   "side": "joseon",
   "role_hint": "朝鲜左营将",
   "column": "east",
   "note": "深河之战布拒马木力战，称'依柳将'，死之",
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
     "commander": "kanghongli",
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
     "commander": "liruibai",
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
   "后金",
   "明",
   "第三方",
   "清修·明臣",
   "明廷官方",
   "清修官史",
   "朝鲜·亲历",
   "明·私修",
   "学界",
   "朝鲜官方",
   "明·封疆奏议",
   "二手综述"
  ],
  "party_bucket": {
   "后金": "后金",
   "明": "明",
   "清修·明臣": "明",
   "明廷官方": "明",
   "清修官史": "后金",
   "朝鲜·亲历": "第三方",
   "明·私修": "明",
   "学界": "第三方",
   "朝鲜官方": "第三方",
   "明·封疆奏议": "明",
   "二手综述": "第三方"
  },
  "party_colors": {
   "后金": "#c0392b",
   "明": "#2b6cb0",
   "第三方": "#2E7D8F"
  },
  "factions": {
   "feng_jiang": {
    "name": "封疆奏议",
    "macro_party": "明·封疆奏议",
    "note": "auto"
   }
  },
  "legend": {
   "battle": [
    {
     "key": "jin",
     "label": "后金胜",
     "color": "#c0392b"
    },
    {
     "key": "ming",
     "label": "明胜",
     "color": "#2b6cb0"
    },
    {
     "key": "third",
     "label": "第三方视角",
     "color": "#2E7D8F"
    },
    {
     "key": "none",
     "label": "未接战",
     "color": "#7f8c8d"
    }
   ],
   "route": [
    {
     "key": "jin",
     "label": "后金行军路线",
     "color": "#c0392b"
    },
    {
     "key": "ming",
     "label": "明军行军路线",
     "color": "#2b6cb0"
    },
    {
     "key": "third",
     "label": "第三方行军路线",
     "color": "#2E7D8F"
    }
   ]
  }
 }
};
