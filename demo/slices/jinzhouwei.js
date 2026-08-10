// 本文件由 tools/build.py 自动生成（切片 jinzhouwei），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["jinzhouwei"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["jinzhouwei"] = {
 "meta": {
  "kind": "county",
  "region": "liaonan",
  "title": "金州",
  "dossier_label": "金州",
  "subtitle": "辽东半岛南端 · 金州卫 · 天启元年 (1621) 陷落",
  "primary_place": "jinzhouwei_cheng",
  "dossier_event": "event:jinzhouwei_fall",
  "back": "枢纽",
  "lead": "金州卫扼辽东半岛南端：洪武十年 (1377) 置，辖旅顺口，海运通登莱、朝鲜。天启元年 (1621) 后金取之，旋为毛文龙东江镇一度收复。辽南门户由此易手。",
  "parties_note": "金州海运通道与东江镇收复的次数，明清两方记载悬殊。系统不裁决，只并列。",
  "subject_names": {
   "event:jinzhouwei_founded": "金州卫建置",
   "event:jinzhouwei_fall": "金州陷落",
   "event:jinzhouwei_mao": "东江收复金州",
   "place:jinzhouwei_cheng": "金州城",
   "person:mao_wenlong": "毛文龙",
   "person:amin": "阿敏",
   "person:nuerhaci": "努尔哈赤"
  },
  "page": "county.html?scene=jinzhouwei",
  "key": "jinzhouwei",
  "scene_id": "jinzhouwei",
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
   "id": "chao_xiandai",
   "title": "李朝实录·宣祖/光海日记",
   "party": "朝鲜官方",
   "stance_label": "第三国当代官修",
   "distance_label": "成书当代至 100 年内，与明清并行",
   "color": "#2E5C8F",
   "compiler": "李朝史官",
   "period": "万历",
   "stance": "official_contemporary"
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
   "id": "jinzhouwei_cheng",
   "name": "金州城",
   "lon": 121.7,
   "lat": 39.09,
   "type": "city",
   "modern": "辽宁大连金州区",
   "note": "明金州卫，辖旅顺口，半岛南端",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "lvshun",
   "name": "旅顺口",
   "lon": 121.25,
   "lat": 38.8,
   "type": "guan",
   "modern": "辽宁大连旅顺口",
   "note": "金州卫辖，海运要塞",
   "elev": null,
   "off_grid": true
  },
  {
   "id": "fuzhou_cheng",
   "name": "复州",
   "lon": 121.97,
   "lat": 39.63,
   "type": "city",
   "modern": "辽宁瓦房店市",
   "note": "金州北向卫城",
   "_global_id": "fuzhou_cheng",
   "_other_scenes": [
    "gaizhou"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "pidao",
   "name": "皮岛",
   "lon": 124.5,
   "lat": 39.95,
   "type": "island",
   "modern": "朝鲜椴岛",
   "note": "毛文龙东江镇，一度收复金州/旅顺",
   "_global_id": "pidao",
   "_other_scenes": [
    "fuzhou"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "denglai",
   "name": "登莱",
   "lon": 120.5,
   "lat": 37.5,
   "type": "city",
   "modern": "山东蓬莱",
   "note": "金州海运对岸，明援辽通道",
   "elev": null,
   "off_grid": true
  }
 ],
 "persons": [
  {
   "id": "mao_wenlong",
   "name": "毛文龙",
   "role": "东江总兵",
   "note": "据皮岛，1621–1622 一度收复金州、旅顺",
   "influence": 0,
   "_global_id": "mao_wenlong",
   "_other_scenes": [
    "fuzhou",
    "haizhou"
   ]
  },
  {
   "id": "amin",
   "name": "阿敏",
   "role": "后金二贝勒",
   "note": "1621 取金州",
   "influence": 0,
   "_global_id": "amin",
   "_other_scenes": [
    "fuzhou",
    "haizhou",
    "shenyang"
   ]
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1621 取辽南",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "guangning",
    "haizhou",
    "kaiyuan",
    "liaoyang",
    "ningyuan"
   ]
  }
 ],
 "assertions": [
  {
   "id": "JN001",
   "subject": "event:jinzhouwei_founded",
   "predicate": "建置年",
   "value_text": "洪武十年 (1377) 始置金州卫, 辖旅顺口, 扼辽东半岛南端海运",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武十年",
   "place": "jinzhouwei_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武十年, 置金州卫, 辖旅顺口。",
   "note": "金州卫为辽东最南卫所, 海运通登莱、朝鲜。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "JN002",
   "subject": "event:jinzhouwei_fall",
   "predicate": "陷落年份",
   "value_text": "天启元年 (1621), 后金取辽南, 金州卫陷",
   "source": "qing_taizu_shilu",
   "layer": "record",
   "era": "天启元年",
   "place": "jinzhouwei_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "天命六年, 取金州。",
   "note": "金州陷后, 辽东半岛南端尽入后金, 唯沿海为东江镇所扰。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "JN003",
   "subject": "event:jinzhouwei_mao",
   "predicate": "东江收复",
   "value_text": "毛文龙据皮岛/铁山, 1621–1622 一度收复金州、旅顺, 牵制后金南翼",
   "source": "chao_xiandai",
   "layer": "record",
   "era": "天启元年至二年",
   "place": "pidao",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "毛文龙渡海, 复金州、旅顺, 旋复为后金所夺。",
   "note": "东江镇收复多为袭取, 未能久守, 但其牵制作用明方与清方评价悬殊。",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "JN004",
   "subject": "place:jinzhouwei_cheng",
   "predicate": "战略地位",
   "value_text": "学界综合：金州卫扼辽东半岛南端, 海运通登莱、朝鲜, 是辽南门户与明援辽通道",
   "source": "modern",
   "layer": "scholarship",
   "era": "明",
   "place": "jinzhouwei_cheng",
   "confidence": 0.88,
   "quote_status": "paraphrase_unverified",
   "quote": "金州卫控半岛南端, 海运通登莱, 援辽之喉。",
   "note": "海运通道使金州在 1621 后仍具战略价值。",
   "_party": "学界",
   "_faction": null
  },
  {
   "id": "JN010",
   "subject": "place:jinzhouwei_cheng",
   "predicate": "海运通道",
   "value_text": "金州卫经登莱至朝鲜的海运与互市具体路线、频次, 三方记载不详",
   "source": "mingshi",
   "layer": "gap",
   "era": "明",
   "place": "denglai",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明实录》海运逐条 / 《登州府志》/ 朝鲜《通文馆志》辽东往来",
    "skills": [
     "古文",
     "GIS"
    ],
    "accept": "复原金州—登莱—朝鲜海运路线与年频次, 标注史料缺口",
    "effort": "2-3 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "JN011",
   "subject": "event:jinzhouwei_mao",
   "predicate": "东江复金次数",
   "value_text": "毛文龙收复金州/旅顺的次数与持续时间, 明清两方记载悬殊",
   "source": "chao_xiandai",
   "layer": "gap",
   "era": "1621–1622",
   "place": "jinzhouwei_cheng",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》毛文龙疏 / 《清太祖实录》/ 朝鲜使臣皮岛见闻",
    "skills": [
     "古文"
    ],
    "accept": "核定东江镇收复金州/旅顺的次数与每次持续时间",
    "effort": "1-2 周"
   },
   "_party": "朝鲜官方",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "JN010",
  "JN011"
 ],
 "events": [
  {
   "id": "jinzhouwei_founded",
   "subject": "event:jinzhouwei_founded",
   "year": 1377,
   "era": "洪武十年",
   "title": "金州卫建置",
   "kind": "建置",
   "text": "明置金州卫，辖旅顺口，扼辽东半岛南端海运。"
  },
  {
   "id": "jinzhouwei_fall",
   "subject": "event:jinzhouwei_fall",
   "year": 1621,
   "era": "天启元年",
   "title": "金州陷落",
   "kind": "战事",
   "text": "后金取辽南，金州卫陷；旋为毛文龙东江镇一度收复。"
  },
  {
   "id": "jinzhouwei_mao",
   "subject": "event:jinzhouwei_mao",
   "year": 1621,
   "era": "天启元年至二年",
   "title": "东江收复金州",
   "kind": "战事",
   "text": "毛文龙据皮岛/铁山，渡海袭扰，一度收复金州、旅顺，牵制后金南翼。"
  }
 ],
 "edges": [
  {
   "from": "jinzhouwei_cheng",
   "to": "fuzhou_cheng",
   "type": "admin",
   "label": "金州—复州"
  },
  {
   "from": "jinzhouwei_cheng",
   "to": "pidao",
   "type": "mashi",
   "label": "金州—皮岛（东江）"
  },
  {
   "from": "jinzhouwei_cheng",
   "to": "denglai",
   "type": "mashi",
   "label": "金州—登莱（海运）"
  }
 ]
};
