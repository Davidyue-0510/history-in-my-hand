// 本文件由 tools/build.py 自动生成（切片 haizhou），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["haizhou"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["haizhou"] = {
 "meta": {
  "kind": "county",
  "region": "liaonan",
  "title": "海州",
  "dossier_label": "海州",
  "subtitle": "辽南重镇 · 海州卫 · 天启元年 (1621) 陷落",
  "primary_place": "haizhou_cheng",
  "dossier_event": "event:haizhou_fall",
  "back": "枢纽",
  "lead": "海州是辽南粮道咽喉, 朝鲜马市所在。天启元年 (1621) 沈阳陷后六日陷落, 毛文龙率 197 人逃入海中皮岛, 创东江镇。",
  "parties_note": "海州之陷与朝鲜使臣 (《通文馆志》) 记载路线高度一致, 但毛文龙东江的规模与作用, 明清两方评价截然不同。",
  "subject_names": {
   "event:haizhou_founded": "海州卫建置",
   "event:haizhou_mashi": "海州朝鲜马市",
   "event:haizhou_fall": "海州陷落",
   "place:haizhou_cheng": "海州城",
   "place:haizhou_wei": "海州卫",
   "place:niuzhuang": "牛庄",
   "person:liu_tingxian": "刘廷宪",
   "person:mao_wenlong": "毛文龙",
   "person:nuerhaci": "努尔哈赤",
   "person:amin": "阿敏"
  },
  "page": "county.html?scene=haizhou",
  "key": "haizhou",
  "scene_id": "haizhou",
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
   "id": "chao_xiandai",
   "title": "李朝实录·宣祖/光海日记",
   "party": "朝鲜官方",
   "stance_label": "第三国当代官修",
   "distance_label": "成书当代至 100 年内，与明清并行",
   "color": "#2E5C8F",
   "compiler": "李朝史官",
   "period": "万历",
   "stance": "official_contemporary"
  }
 ],
 "places": [
  {
   "id": "haizhou_cheng",
   "name": "海州城",
   "lon": 122.75,
   "lat": 40.86,
   "type": "city",
   "modern": "辽宁海城市",
   "note": "明海州卫, 辽南粮道咽喉",
   "elev": 32
  },
  {
   "id": "haizhou_wei",
   "name": "海州卫",
   "lon": 122.75,
   "lat": 40.86,
   "type": "wei",
   "modern": "海城城内",
   "note": "洪武九年置, 初治牛庄, 后迁海城",
   "elev": 32
  },
  {
   "id": "niuzhuang",
   "name": "牛庄",
   "lon": 122.55,
   "lat": 40.96,
   "type": "guan",
   "modern": "辽宁海城市西北",
   "note": "海州卫旧治, 辽河渡口",
   "elev": 14
  },
  {
   "id": "liaoyang_cheng",
   "name": "辽阳",
   "lon": 123.18,
   "lat": 41.28,
   "type": "city",
   "modern": "辽宁辽阳市",
   "note": "海州北向卫城",
   "_global_id": "liaoyang_cheng",
   "_other_scenes": [
    "kaiyuan",
    "shenyang",
    "tieling"
   ],
   "elev": 22
  },
  {
   "id": "shenyang_cheng",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.81,
   "type": "city",
   "modern": "辽宁沈阳市",
   "note": "辽东都司治所",
   "_global_id": "shenyang_cheng",
   "_other_scenes": [
    "fushun",
    "guangning",
    "kaiyuan",
    "liaoyang",
    "tieling"
   ],
   "elev": 50
  },
  {
   "id": "anshan",
   "name": "鞍山驿",
   "lon": 122.95,
   "lat": 41.12,
   "type": "guan",
   "modern": "辽宁鞍山市",
   "note": "辽阳—海州驿道中点",
   "elev": 23
  },
  {
   "id": "gaizhou_cheng",
   "name": "盖州",
   "lon": 121.97,
   "lat": 40.4,
   "type": "city",
   "modern": "辽宁盖州市",
   "note": "海州南向卫城, 在地形网格外",
   "_global_id": "gaizhou_cheng",
   "_other_scenes": [
    "fuzhou"
   ],
   "elev": null,
   "off_grid": true
  },
  {
   "id": "xingshan",
   "name": "熊岳堡",
   "lon": 122.1,
   "lat": 40.4,
   "type": "wei",
   "modern": "辽宁盖州市东北",
   "note": "盖州北卫, 在地形网格外",
   "_global_id": "xiongyue",
   "_other_scenes": [
    "gaizhou"
   ],
   "elev": 0
  }
 ],
 "persons": [
  {
   "id": "liu_tingxian",
   "name": "刘廷宪",
   "role": "海州参将",
   "note": "天启元年守海州, 城破殉职",
   "influence": 0
  },
  {
   "id": "mao_wenlong",
   "name": "毛文龙",
   "role": "都司/皮岛总兵",
   "note": "天启元年辽阳陷后, 率 197 人逃入海中皮岛, 开东江镇, 与海州/盖州失陷同期",
   "influence": 0,
   "_global_id": "mao_wenlong",
   "_other_scenes": [
    "fuzhou",
    "jinzhouwei"
   ]
  },
  {
   "id": "nuerhaci",
   "name": "努尔哈赤",
   "role": "后金大汗",
   "note": "1621 年三月取沈阳后, 复攻海州",
   "influence": 0,
   "_global_id": "nuerhaci",
   "_other_scenes": [
    "fushun",
    "fuzhou",
    "gaizhou",
    "guangning",
    "jinzhouwei",
    "kaiyuan",
    "liaoyang",
    "ningyuan"
   ]
  },
  {
   "id": "amin",
   "name": "阿敏",
   "role": "后金二贝勒",
   "note": "率兵南下取海州、盖州",
   "influence": 0,
   "_global_id": "amin",
   "_other_scenes": [
    "fuzhou",
    "jinzhouwei",
    "shenyang"
   ]
  }
 ],
 "assertions": [
  {
   "id": "H001",
   "subject": "event:haizhou_founded",
   "predicate": "建置年",
   "value_text": "洪武九年 (1376) 始置海州卫, 初治牛家庄",
   "source": "mingshi",
   "layer": "record",
   "era": "洪武九年",
   "place": "haizhou_cheng",
   "confidence": 0.85,
   "quote_status": "paraphrase_unverified",
   "quote": "洪武九年置海州卫, 初治牛家庄, 后徙今所。",
   "note": "初治牛庄的具体迁移年份 (永乐间徙今海城) 在《辽东志》有更细记载, 待核。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "H002",
   "subject": "event:haizhou_mashi",
   "predicate": "朝鲜马市",
   "value_text": "海州与朝鲜平安道设马市, 朝鲜贡马, 海州回赐丝绢",
   "source": "mingshi",
   "layer": "record",
   "era": "永乐年间",
   "place": "haizhou_cheng",
   "confidence": 0.8,
   "quote_status": "paraphrase_unverified",
   "quote": "海州卫与朝鲜平安道互市, 每岁以绢布易朝鲜马匹, 岁以为常。",
   "note": "朝鲜《通文馆志》载朝鲜使臣来往海州的具体路线, 可与明方对照。",
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "H003",
   "subject": "event:haizhou_fall",
   "predicate": "陷落年份",
   "value_text": "天启元年三月, 后金别将取海州, 参将刘廷宪战死",
   "source": "ming_xizong_shilu",
   "layer": "record",
   "era": "天启元年三月",
   "place": "haizhou_cheng",
   "confidence": 0.9,
   "quote_status": "paraphrase_unverified",
   "quote": "天启元年三月, 后金兵攻海州, 参将刘廷宪拒守, 城破, 死之。",
   "note": "海州陷与沈阳陷 (三月十三) 仅隔六日, 是后金同一战役序列。",
   "_party": "明廷官方",
   "_faction": null
  },
  {
   "id": "H004",
   "subject": "event:haizhou_fall",
   "predicate": "朝鲜视角",
   "value_text": "李朝接毛文龙急报, 知海州已陷, 议援明",
   "source": "chao_xiandai",
   "layer": "record",
   "era": "天启元年三月",
   "place": "haizhou_cheng",
   "confidence": 0.7,
   "quote_status": "paraphrase_unverified",
   "quote": "辽东巡抚袁应泰以海州已陷告急, 朝议援明与否, 终以兵疲财乏未遣。",
   "note": "与沈阳战役不同, 海州陷落时李朝并未实际出兵援助。",
   "_party": "朝鲜官方",
   "_faction": null
  },
  {
   "id": "H005",
   "subject": "event:haizhou_fall",
   "predicate": "毛文龙东江",
   "value_text": "海州陷后, 毛文龙率 197 人逃入海中皮岛, 创东江镇",
   "source": "qingshigao",
   "layer": "scholarship",
   "era": "天启元年",
   "place": "haizhou_cheng",
   "confidence": 0.92,
   "quote_status": "paraphrase_unverified",
   "quote": "文龙以海州已陷, 率从者 197 人, 浮海至皮岛, 收辽民为军, 遂开东江镇。",
   "note": "东江镇是后金侧翼长期困扰, 直至 1630 年毛文龙被袁崇焕诛杀。",
   "_party": "清修官史",
   "_faction": null
  },
  {
   "id": "H010",
   "subject": "place:haizhou_wei",
   "predicate": "海州卫初治牛庄的迁移",
   "value_text": "海州卫洪武九年 (1376) 置, 初治牛家庄, 后迁今海城——具体迁移年份在现存史料中未见明确记载",
   "source": "mingshi",
   "layer": "gap",
   "era": "洪武至永乐",
   "place": "haizhou_wei",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明太祖实录》洪武朝逐年卷 / 《辽东志》卷 1-2 (嘉靖十六年刻本, 辽海丛书有影印) / 嘉靖《辽东志》",
    "skills": [
     "古文",
     "GIS"
    ],
    "accept": "找到海州卫治所迁移的明确年份与诏令原文",
    "effort": "1-2 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  },
  {
   "id": "H011",
   "subject": "event:haizhou_fall",
   "predicate": "海州人口迁出",
   "value_text": "海州陷后, 当地百姓命运 (被杀 / 被俘 / 逃往山东 / 逃往朝鲜) 的分流比例无精确数字",
   "source": "mingshi",
   "layer": "gap",
   "era": "天启元年三月",
   "place": "haizhou_cheng",
   "confidence": 0,
   "quote_status": "paraphrase_unverified",
   "quote": "",
   "lead": {
    "where": "《明熹宗实录》天启元年三月卷 / 朝鲜《通文馆志》关于「辽民」渡江记录 / 1621-1625 年山东登州府接收辽民档案",
    "skills": [
     "古文",
     "统计"
    ],
    "accept": "给出海州人口约 X 万、其中约 Y% 逃往 Z 方向, 有具体出处",
    "effort": "2-3 周"
   },
   "_party": "清修·明臣",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "H010",
  "H011"
 ],
 "events": [
  {
   "id": "haizhou_founded",
   "subject": "event:haizhou_founded",
   "year": 1376,
   "era": "洪武九年",
   "title": "海州卫建置",
   "kind": "建置",
   "text": "明廷于辽阳以南置海州卫, 初治牛家庄, 后徙今海城。"
  },
  {
   "id": "haizhou_mashi",
   "subject": "event:haizhou_mashi",
   "year": 1404,
   "era": "永乐二年",
   "title": "海州设马市",
   "kind": "互市",
   "text": "海州与朝鲜平安道设马市, 每年开市一次, 朝鲜贡马。"
  },
  {
   "id": "haizhou_fall",
   "subject": "event:haizhou_fall",
   "year": 1621,
   "era": "天启元年三月",
   "title": "海州陷落",
   "kind": "战事",
   "text": "沈阳陷后六日, 后金别将攻海州, 参将刘廷宪战死, 城破。"
  }
 ],
 "edges": [
  {
   "from": "haizhou_cheng",
   "to": "liaoyang_cheng",
   "type": "admin",
   "label": "海州—辽阳驿道"
  },
  {
   "from": "haizhou_cheng",
   "to": "anshan",
   "type": "admin",
   "label": "海州—鞍山驿道"
  },
  {
   "from": "haizhou_cheng",
   "to": "gaizhou_cheng",
   "type": "admin",
   "label": "海州—盖州驿道"
  },
  {
   "from": "haizhou_cheng",
   "to": "niuzhuang",
   "type": "admin",
   "label": "海州卫—牛庄"
  }
 ]
};
