// 本文件由 tools/build.py 自动生成（切片 gaizhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["gaizhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["gaizhou"] = {
 "meta": {
  "kind": "county",
  "region": "liaonan",
  "title": "盖州",
  "dossier_label": "盖州",
  "subtitle": "辽南 · 盖州卫 · 天启元年 (1621) 陷落",
  "primary_place": "gaizhou_cheng",
  "dossier_event": "event:gaizhou_fall",
  "back": "枢纽",
  "lead": "盖州是辽南与海州并立的二大卫之一。天启元年 (1621) 海州陷后十日陷落, 盖州参将杨烈崛殉职。",
  "parties_note": "盖州之陷在三方史料中数字与死法略有出入, 是 1621 三月战役序列中较为被忽视的一环。",
  "subject_names": {
   "event:gaizhou_founded": "盖州卫建置",
   "event:gaizhou_fall": "盖州陷落",
   "place:gaizhou_cheng": "盖州城",
   "place:xiongyue": "熊岳堡",
   "person:yang_lieue": "杨烈崛",
   "person:huang_zhilong": "黄之骥",
   "person:nuerhaci": "努尔哈赤"
  },
  "page": "county.html?scene=gaizhou",
  "key": "gaizhou",
  "scene_id": "gaizhou",
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
   "id": "ming_xizong_shilu",
   "title": "明熹宗实录",
   "party": "明廷官方",
   "stance_label": "本朝官修·当代",
   "distance_label": "成书约 1630，距天启事约数年",
   "color": "#A0473A",
   "compiler": "明史馆",
   "period": "天启朝",
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
  }
 ],
 "places": [
  {
   "id": "gaizhou_cheng",
   "name": "盖州城",
   "lon": 121.97,
   "lat": 40.4,
   "type": "city",
   "modern": "辽宁盖州市",
   "note": "明盖州卫治, 在现地形网格外",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "xiongyue",
   "name": "熊岳堡",
   "lon": 122.1,
   "lat": 40.4,
   "type": "wei",
   "modern": "辽宁盖州市东北",
   "note": "盖州北卫",
   "_global_id": "xiongyue",
   "_other_scenes": [
    "haizhou"
   ],
   "elev": 0
  },
  {
   "id": "yingshui",
   "name": "营口",
   "lon": 122.23,
   "lat": 40.65,
   "type": "guan",
   "modern": "辽宁营口市",
   "note": "辽河入海口, 海运要塞",
   "elev": 11
  },
  {
   "id": "haizhou_cheng",
   "name": "海州",
   "lon": 122.75,
   "lat": 40.86,
   "type": "city",
   "modern": "辽宁海城市",
   "note": "盖州北向卫城",
   "elev": 32
  },
  {
   "id": "fuzhou_cheng",
   "name": "复州",
   "lon": 121.65,
   "lat": 39.75,
   "type": "city",
   "modern": "辽宁瓦房店市",
   "note": "盖州南向卫城",
   "_global_id": "fuzhou_cheng",
   "_other_scenes": [
    "jinzhouwei"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "jinzhou_cheng",
   "name": "金州",
   "lon": 121.72,
   "lat": 39.1,
   "type": "city",
   "modern": "辽宁大连市金州区",
   "note": "辽东半岛南端, 在地形网格外",
   "_global_id": "jinzhouwei_cheng",
   "_other_scenes": [
    "fuzhou"
   ],
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "yang_lieue",
   "name": "杨烈崛",
   "role": "盖州参将",
   "note": "天启元年守盖州, 城破殉职",
   "influence": 0
  },
  {
   "id": "huang_zhilong",
   "name": "黄之骥",
   "role": "盖州副将",
   "note": "1621 年盖州之战战死",
   "influence": 0
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1621 年命阿敏等取盖州、复州",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "guangning",
    "haizhou",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang",
    "ningyuan"
   ]
  }
 ],
 "assertions": [
  {
   "id": "G001",
   "subject": "event:gaizhou_founded",
   "predicate": "建置年",
   "value_text": "洪武四年 (1371) 始置盖州卫, 与海州卫并为辽南二大卫",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武四年",
   "place": "gaizhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武四年置盖州卫, 隶辽东都司。",
   "note": "盖州元代为盖州路, 明初降为卫。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "G002",
   "subject": "event:gaizhou_fall",
   "predicate": "陷落年份",
   "value_text": "天启元年三月, 海州陷后十日, 后金取盖州",
   "source": "ming_xizong_shilu",
   "layer": "record",
   "era": "天启元年三月",
   "place": "gaizhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "天启元年三月, 后金兵攻盖州, 副将黄之骥拒守, 城破, 死之。",
   "note": "盖州与海州陷落仅隔十日, 是后金同一战役序列。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "G003",
   "subject": "event:gaizhou_fall",
   "predicate": "陷落兵力",
   "value_text": "后金军号称四万, 实际兵力不详",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天启元年三月",
   "place": "gaizhou_cheng",
   "confidence": 0.5,
   "quote_status": "paraphrase_unverified",
   "quote": "上命四王、皇太极率兵四万攻盖州。",
   "note": "「四万」数字与「海州之战实际出动兵力」之比, 学界有质疑, 待考。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "G004",
   "subject": "place:gaizhou_cheng",
   "predicate": "建置年",
   "value_text": "学界综合：盖州元代为盖州路, 明初洪武四年 (1371) 降为盖州卫",
   "source": "modern",
   "layer": "scholarship",
   "era": "洪武四年",
   "place": "gaizhou_cheng",
   "confidence": 0.95,
   "quote_status": "paraphrase_unverified",
   "quote": "盖州元代为盖州路, 明洪武四年降路为卫。",
   "note": "学界对此无争议, 与明方《明太祖实录》记载一致。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "G010",
   "subject": "event:gaizhou_fall",
   "predicate": "杨烈崛死亡细节",
   "value_text": "盖州参将杨烈崛在城破时的具体死法 (阵亡 / 自刎 / 被俘后杀) 三方记载不一致",
   "source": "mingshi",
   "layer": "gap",
   "era": "天启元年三月",
   "place": "gaizhou_cheng",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》天启元年三月卷 / 《清太祖实录》天命六年三月 / 朝鲜《李朝实录》光海君日记 / 明方墓志铭 (若有)",
    "skills": [
     "古文",
     "朝鲜语"
    ],
    "accept": "从至少两方史料中找出杨烈崛死法的具体细节, 注明分歧",
    "effort": "1-2 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "G011",
   "subject": "place:xiongyue",
   "predicate": "熊岳堡军政沿革",
   "value_text": "熊岳堡军政沿革 (千户所至百户所至废) 的具体时间节点无明确记载",
   "source": "mingshi",
   "layer": "gap",
   "era": "嘉靖至万历",
   "place": "xiongyue",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "嘉靖《辽东志》卷 3 卫所 / 万历《辽东志》/ 《明神宗实录》万历朝逐月",
    "skills": [
     "古文"
    ],
    "accept": "梳理熊岳堡从明初建置到 1621 年陷落的完整卫所调整时间线",
    "effort": "2-3 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "G010",
  "G011"
 ],
 "events": [
  {
   "id": "gaizhou_founded",
   "subject": "event:gaizhou_founded",
   "year": 1371,
   "era": "洪武四年",
   "title": "盖州卫建置",
   "kind": "建置",
   "text": "明廷于辽阳以南置盖州卫, 与海州卫并为辽南二大卫。"
  },
  {
   "id": "gaizhou_fall",
   "subject": "event:gaizhou_fall",
   "year": 1621,
   "era": "天启元年三月",
   "title": "盖州陷落",
   "kind": "战事",
   "text": "海州陷后十日, 后金军取盖州, 杨烈崛战死。详见三方史料并列。"
  }
 ],
 "edges": [
  {
   "from": "gaizhou_cheng",
   "to": "haizhou_cheng",
   "type": "admin",
   "label": "盖州—海州驿道"
  },
  {
   "from": "gaizhou_cheng",
   "to": "xiongyue",
   "type": "admin",
   "label": "盖州—熊岳堡"
  },
  {
   "from": "gaizhou_cheng",
   "to": "fuzhou_cheng",
   "type": "admin",
   "label": "盖州—复州驿道"
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
