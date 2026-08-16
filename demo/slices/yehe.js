// 本文件由 tools/build.py 自动生成（切片 yehe），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["yehe"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["yehe"] = {
 "meta": {
  "kind": "county",
  "region": "jianzhou",
  "title": "叶赫",
  "dossier_label": "叶赫",
  "subtitle": "扈伦四部之一 · 叶赫东城西城 · 1619 年亡于建州",
  "primary_place": "xiyehe",
  "dossier_event": "event:yehe_fall",
  "back": "枢纽",
  "lead": "叶赫是扈伦四部中势力最强的一部, 明廷敕封叶赫贝勒为都督以羁縻制衡建州。万历四十七年 (1619) 萨尔浒战后, 叶赫东城西城俱破, 布寨战死, 布扬古降, 叶赫亡。",
  "parties_note": "叶赫之亡标志着明廷羁縻体系的崩溃。叶赫起源 (蒙古/海西) 之争是 record_vs_scholarship 典型。",
  "subject_names": {
   "event:yehe_founded": "叶赫建国",
   "event:yehe_kaiyuan_attack": "叶赫攻开原",
   "event:yehe_fall": "叶赫亡",
   "place:xiyehe": "叶赫西城",
   "place:dongyehe": "叶赫东城",
   "person:ciyehala": "清佳砮",
   "person:bucai": "布寨",
   "person:buyanggu": "布扬古",
   "person:nuerhaci": "努尔哈赤"
  },
  "page": "county.html?scene=yehe",
  "key": "yehe",
  "scene_id": "yehe",
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
   "id": "qingshigao",
   "title": "清史稿",
   "party": "清修官史",
   "stance_label": "民国未定稿·清方立场",
   "distance_label": "成书 1928，距事件约 300 年",
   "color": "#7B5C3E",
   "compiler": "赵尔巽等",
   "period": "清末/民国",
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
  }
 ],
 "places": [
  {
   "id": "xiyehe",
   "name": "叶赫西城",
   "lon": 124.41,
   "lat": 43.1,
   "type": "capital",
   "modern": "吉林四平市梨树县东南",
   "note": "叶赫西城, 布扬古贝勒驻, 在地形网格外",
   "_global_id": "xiyehe",
   "_other_scenes": [
    "shenyang"
   ],
   "elev": 197
  },
  {
   "id": "dongyehe",
   "name": "叶赫东城",
   "lon": 124.61,
   "lat": 43.12,
   "type": "capital",
   "modern": "吉林四平市梨树县东南",
   "note": "叶赫东城, 布寨贝勒驻, 在地形网格外",
   "_global_id": "dongyehe",
   "_other_scenes": [
    "shenyang"
   ],
   "elev": 334
  },
  {
   "id": "kaiyuan_cheng",
   "name": "开原",
   "lon": 124.04,
   "lat": 42.55,
   "type": "city",
   "modern": "辽宁开原市",
   "note": "明辽北重镇, 叶赫受其节制",
   "_global_id": "kaiyuan",
   "_other_scenes": [
    "sarhu",
    "shenyang"
   ],
   "elev": 85
  },
  {
   "id": "hetuala",
   "name": "赫图阿拉",
   "lon": 124.85,
   "lat": 41.89,
   "type": "capital",
   "modern": "辽宁新宾县老城村",
   "note": "努尔哈赤起家之地, 建州根据地",
   "_global_id": "hetuala",
   "_other_scenes": [
    "fushun",
    "kaiyuan",
    "liaoyang",
    "sarhu",
    "shenyang",
    "tieling"
   ],
   "elev": 586
  },
  {
   "id": "sipingjie",
   "name": "四平街",
   "lon": 124.36,
   "lat": 43.17,
   "type": "city",
   "modern": "吉林四平市",
   "note": "叶赫活动区域, 在地形网格外",
   "_global_id": "sipingjie",
   "_other_scenes": [
    "shenyang"
   ],
   "elev": 175
  }
 ],
 "persons": [
  {
   "id": "ciyehala",
   "name": "清佳砮",
   "role": "叶赫部始祖",
   "note": "16 世纪中期叶赫部始祖",
   "influence": 0
  },
  {
   "id": "bucai",
   "name": "布寨",
   "role": "叶赫东城贝勒",
   "note": "叶赫东城主, 万历四十七年 (1619) 萨尔浒之战中战死",
   "influence": 0
  },
  {
   "id": "buyanggu",
   "name": "布扬古",
   "role": "叶赫西城贝勒",
   "note": "叶赫西城主, 1619 年八月城破降",
   "influence": 0
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "建州大汗",
   "note": "万历三十一年起五伐叶赫, 1619 年灭亡叶赫",
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
  }
 ],
 "assertions": [
  {
   "id": "Y001",
   "subject": "event:yehe_founded",
   "predicate": "叶赫部始祖",
   "value_text": "叶赫始祖为蒙古人星根达尔汉, 16 世纪中期因居叶赫勒河得名",
   "source": "qingshigao",
   "layer": "record",
   "era": "16 世纪中期",
   "place": "xiyehe",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "叶赫始祖星根达尔汉, 蒙古人也, 居叶赫勒河, 因以为氏。",
   "note": "学界对「蒙古人起源说」有争议 (也有认为是海西女真), 这是清史稿采信的说法。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "Y002",
   "subject": "event:yehe_kaiyuan_attack",
   "predicate": "叶赫攻开原",
   "value_text": "万历十一年 (1583) 叶赫与建州争夺敕书, 叶赫兵攻开原城",
   "source": "mingshi",
   "layer": "record",
   "era": "万历十一年",
   "place": "kaiyuan_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "十一年, 叶赫兵攻开原, 为官军所击, 退走。",
   "note": "具体兵力与战果在《明神宗实录》有专条, 待核。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "Y003",
   "subject": "event:yehe_fall",
   "predicate": "灭亡",
   "value_text": "万历四十七年八月, 萨尔浒战后, 努尔哈赤攻叶赫东城西城, 布寨战死, 布扬古降",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "万历四十七年八月",
   "place": "xiyehe",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "万历四十七年八月, 上亲率大兵攻叶赫, 布寨战死, 布扬古率西城降。",
   "note": "布扬古虽降, 但被努尔哈赤带走, 叶赫部由此彻底编入八旗。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "Y004",
   "subject": "event:yehe_fall",
   "predicate": "明廷应对",
   "value_text": "叶赫亡时, 明朝辽东已无兵可救, 巡抚袁应泰束手",
   "source": "mingshi",
   "layer": "record",
   "era": "万历四十七年八月",
   "place": "xiyehe",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "叶赫亡, 明廷不能救, 辽东自此门户洞开。",
   "note": "「叶赫亡, 明失北蔽」成为后世史学对萨尔浒战后格局的定论。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "Y005",
   "subject": "place:xiyehe",
   "predicate": "叶赫起源蒙古人",
   "value_text": "学界主流：叶赫与扈伦其他三部 (乌拉、辉发、哈达) 同为海西女真, 非蒙古",
   "source": "modern",
   "layer": "scholarship",
   "era": "16 世纪中期",
   "place": "xiyehe",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "叶赫为海西女真扈伦部之一, 与蒙古无关。",
   "note": "清史稿采「蒙古起源说」, 现代学界主流否认此说, 这是 record_vs_scholarship 冲突。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "Y010",
   "subject": "place:xiyehe",
   "predicate": "叶赫军事人口",
   "value_text": "叶赫亡时, 叶赫总人口 (含东西二城) 与八旗编入人数的对应关系未明确",
   "source": "qing_taizu_shilu",
   "layer": "gap",
   "era": "万历四十七年八月",
   "place": "xiyehe",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《清太祖实录》天命四年八月 / 《满洲实录》/ 《八旗通志》叶赫部分 / 清初满文档案",
    "skills": [
     "满语",
     "古文",
     "统计"
    ],
    "accept": "给出叶赫亡时人口估计 (约 X 万) 与被编入八旗的具体牛录数, 注明出处",
    "effort": "2-3 周"
   },
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "Y011",
   "subject": "event:yehe_kaiyuan_attack",
   "predicate": "叶赫开原之战的兵力",
   "value_text": "万历十一年叶赫兵攻开原的具体兵力 (数千 / 数百) 与战果在三方史料中数字不一",
   "source": "mingshi",
   "layer": "gap",
   "era": "万历十一年",
   "place": "kaiyuan_cheng",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明神宗实录》万历十一年逐月 / 《清太祖实录》 (努尔哈赤早期记忆可能有数处) / 朝鲜《李朝实录》",
    "skills": [
     "古文"
    ],
    "accept": "整理至少两方史料对万历十一年叶赫—开原之战的兵力数字, 标注分歧",
    "effort": "1-2 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "Y010",
  "Y011"
 ],
 "events": [
  {
   "id": "yehe_founded",
   "subject": "event:yehe_founded",
   "year": 1550,
   "era": "16 世纪中期",
   "title": "叶赫部建国",
   "kind": "建置",
   "text": "叶赫始祖清佳砮始建于叶赫河畔, 因居叶赫勒河得名。"
  },
  {
   "id": "yehe_kaiyuan_attack",
   "subject": "event:yehe_kaiyuan_attack",
   "year": 1583,
   "era": "万历十一年",
   "title": "叶赫攻开原",
   "kind": "战事",
   "text": "叶赫与建州争夺明朝敕书, 叶赫兵攻开原城下, 被明军击败。"
  },
  {
   "id": "yehe_fall",
   "subject": "event:yehe_fall",
   "year": 1619,
   "era": "万历四十七年八月",
   "title": "叶赫亡",
   "kind": "战事",
   "text": "萨尔浒之战后, 努尔哈赤攻叶赫东城西城, 布寨战死, 布扬古降, 叶赫亡。"
  }
 ],
 "edges": [
  {
   "from": "xiyehe",
   "to": "dongyehe",
   "type": "tribe",
   "label": "叶赫东西二城"
  },
  {
   "from": "xiyehe",
   "to": "hetuala",
   "type": "mil",
   "label": "叶赫—建州"
  },
  {
   "from": "xiyehe",
   "to": "kaiyuan_cheng",
   "type": "mashi",
   "label": "叶赫—开原马市"
  },
  {
   "from": "dongyehe",
   "to": "kaiyuan_cheng",
   "type": "mashi",
   "label": "叶赫东—开原马市"
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
 }
};
