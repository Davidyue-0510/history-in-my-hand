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
 ]
};
