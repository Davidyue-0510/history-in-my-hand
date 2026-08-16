// 本文件由 tools/build.py 自动生成（切片 wuxu），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["wuxu"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["wuxu"] = {
 "meta": {
  "kind": "reform",
  "region": "reform",
  "title": "戊戌变法",
  "dossier_label": "戊戌变法",
  "subtitle": "1898 · 光绪廿四",
  "primary_place": "beijing",
  "dossier_event": "event:wx_0611",
  "terrain_grid": "china_coarse",
  "lead": "甲午惨败后，维新派倡学习西洋政教。1898 光绪帝下明定国是诏，行废八股、练新军、兴学堂诸法，触怒后党，慈禧发动政变，六君子死难，维新百日而终。",
  "parties_note": "维新据《戊戌变法史》综合；守旧与维新之争为近代转折关键。",
  "subject_names": {
   "person:guangxu": "光绪帝",
   "person:kang_youwei": "康有为"
  },
  "page": "county.html?scene=wuxu",
  "key": "wuxu",
  "scene_id": "wuxu",
  "vocab_pack": "inline:wuxu"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "戊戌变法·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "维新据《戊戌变法史》综合；守旧与维新之争为近代转折关键。"
  },
  {
   "id": "kang_nian_pu",
   "title": "康有为《自编年谱》",
   "name": "康有为《自编年谱》",
   "party": "帝党文献",
   "faction": "didang",
   "bias_note": "维新派核心文献，自述变法因缘与帝党困境。"
  },
  {
   "id": "qing_shi_gao_wx",
   "title": "《清史稿》",
   "name": "《清史稿》",
   "party": "官修史书",
   "faction": "houding",
   "bias_note": "民国初修，多沿后党立场，称变法为「乱政」。"
  }
 ],
 "places": [
  {
   "id": "beijing",
   "name": "北京",
   "lon": 116.4,
   "lat": 39.9,
   "note": "元大都/明京师",
   "elev": 44
  },
  {
   "id": "nanjing",
   "name": "南京",
   "lon": 118.8,
   "lat": 32.06,
   "note": "六朝古都·建康/应天",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "guangxu",
   "name": "光绪帝",
   "side": "清",
   "influence": 1
  },
  {
   "id": "kang_youwei",
   "name": "康有为",
   "side": "维新派",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_wx_0611",
   "subject": "event:wx_0611",
   "predicate": "事件",
   "value_text": "光绪颁诏变法，裁冗衙、废八股、奖工商。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1898,
    "end": 1898,
    "era_text": "光绪廿四·四月"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_wx_0908",
   "subject": "event:wx_0908",
   "predicate": "事件",
   "value_text": "慈禧囚帝、捕杀六君子，新政尽废，维新败。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1898,
    "end": 1898,
    "era_text": "同年八月"
   },
   "place": "beijing",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX001_M49",
   "subject": "event:wx_0611",
   "predicate": "下诏变法",
   "value_text": "光绪帝下诏变法",
   "time": {
    "era_text": "光绪二十四年",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "光绪帝下诏变法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX002_M50",
   "subject": "event:wx_0611",
   "predicate": "持续时间",
   "value_text": "行新政百余日",
   "time": {
    "era_text": "光绪二十四年",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "行新政百余日",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX003_M48",
   "subject": "event:wx_0908",
   "predicate": "慈禧训政",
   "value_text": "八月慈禧训政",
   "time": {
    "era_text": "光绪二十四年八月",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "八月慈禧训政",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX004_M50",
   "subject": "event:wx_0908",
   "predicate": "六君子死",
   "value_text": "谭嗣同等六君子死",
   "time": {
    "era_text": "光绪二十四年八月",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "谭嗣同等六君子死",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX005_M48",
   "subject": "event:wx_0908",
   "predicate": "变法失败",
   "value_text": "变法败",
   "time": {
    "era_text": "光绪二十四年八月",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "变法败",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX006_M47",
   "subject": "event:wx_0908",
   "predicate": "旧法复张",
   "value_text": "旧法复张",
   "time": {
    "era_text": "光绪二十四年八月",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "旧法复张",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX007_M44",
   "subject": "person:guangxu",
   "predicate": "下诏变法",
   "value_text": "光绪帝下诏变法",
   "time": {
    "era_text": "光绪二十四年",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "光绪帝下诏变法",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX008_M44",
   "subject": "person:kang_youwei",
   "predicate": "参与变法",
   "value_text": "康有为参与变法",
   "time": {
    "era_text": "光绪二十四年",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "康有为参与变法",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "原文未明说康有为，但学界公认其为变法核心人物",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX009_M34",
   "subject": "event:wx_0908",
   "predicate": "慈禧训政",
   "value_text": "慈禧训政",
   "time": {
    "era_text": "光绪二十四年八月",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "八月慈禧训政",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "SX010_M30",
   "subject": "event:wx_0611",
   "predicate": "新政内容",
   "value_text": "行新政百余日",
   "time": {
    "era_text": "光绪二十四年",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": "beijing",
   "source": "synthesis",
   "quote": "行新政百余日",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "具体新政内容未详述",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WUXUG01",
   "subject": "event:wx_0908",
   "predicate": "史料缺环",
   "value_text": "此次改革的推行范围、受阻与实效，赞成与反对两方记载悬殊，相关评估存在缺口。",
   "time": {
    "era_text": "光绪",
    "start": "1898-01-01",
    "end": "1898-12-31",
    "gregorian_year": 1898
   },
   "place": null,
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0,
   "scale": "reform",
   "note": "多源纪年需对读",
   "lead": {
    "where": "诸史原文对读",
    "skills": [
     "纪年校勘",
     "多源比对"
    ],
    "accept": "补各方视角与纪年异文"
   },
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "WX_FX1",
   "subject": "event:wx_0611",
   "predicate": "夺权尝试",
   "value_text": "光绪下《明定国是诏》启动变法，帝党以书生上书、擢用新进试图收揽权力；后党荣禄同期出任直隶总督兼北洋大臣，握京津兵权以相钳制。",
   "source": "kang_nian_pu",
   "quote": "上（光绪）乃召见康有为，商议变法。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "layer": "record",
   "time": {
    "era_text": "公元1898年",
    "start": "1898-06-11",
    "end": "1898-06-11",
    "gregorian_year": 1898
   },
   "place": "",
   "scale": "empire",
   "note": "帝党欲借变法收权，后党先握兵",
   "_party": "帝党文献",
   "_faction": "didang"
  },
  {
   "id": "WX_FX2",
   "subject": "event:wx_0611",
   "predicate": "权力失衡",
   "value_text": "帝党维新派多为词臣书生，无一兵一卒；袁世凯小站新军名义归荣禄节制，帝党密谋围园劫后却反被袁告密——双方实力悬殊决定结局。",
   "source": "qing_shi_gao_wx",
   "quote": "（袁世凯）告变于荣禄。",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "layer": "record",
   "time": {
    "era_text": "公元1898年",
    "start": "1898-09-01",
    "end": "1898-09-20",
    "gregorian_year": 1898
   },
   "place": "",
   "scale": "empire",
   "note": "枪杆子在谁手谁赢",
   "_party": "官修史书",
   "_faction": "houding"
  },
  {
   "id": "WX_FX3",
   "subject": "event:wx_0908",
   "predicate": "暴力收场",
   "value_text": "慈禧发动戊戌政变，囚光绪于瀛台、捕杀谭嗣同等六君子、尽废新法——后党以军事与宫廷优势扑灭帝党，维新百日而终，权力结构回归亲贵守旧。",
   "source": "synthesis",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.65,
   "layer": "inference",
   "time": {
    "era_text": "公元1898年",
    "start": "1898-09-21",
    "end": "1898-09-28",
    "gregorian_year": 1898
   },
   "place": "",
   "scale": "empire",
   "note": "利益集团较量以武力定鼎",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:wx_0908|慈禧训政",
   "subject": "event:wx_0908",
   "predicate": "慈禧训政",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "SX003_M48",
    "SX009_M34"
   ]
  }
 ],
 "gaps": [
  "WUXUG01"
 ],
 "events": [
  {
   "id": "ev_wx_0611",
   "subject": "event:wx_0611",
   "year": 1898,
   "era": "光绪廿四·四月",
   "title": "明定国是",
   "kind": "变法",
   "text": "光绪颁诏变法，裁冗衙、废八股、奖工商。",
   "place": "beijing"
  },
  {
   "id": "ev_wx_0908",
   "subject": "event:wx_0908",
   "year": 1898,
   "era": "同年八月",
   "title": "戊戌政变",
   "kind": "结局",
   "text": "慈禧囚帝、捕杀六君子，新政尽废，维新败。",
   "place": "beijing"
  }
 ],
 "edges": [],
 "control": [],
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
   "综合史料",
   "帝党文献",
   "官修史书"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "帝党文献": "帝党文献",
   "官修史书": "官修史书"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "帝党文献": "#2980b9",
   "官修史书": "#6d4c41"
  },
  "legend": {},
  "faction_colors": {
   "didang": "#2980b9",
   "houding": "#c0392b"
  },
  "factions": {
   "didang": {
    "name": "帝党（维新派）",
    "period": "戊戌（公元1898）",
    "interest": "光绪亲政无实权，欲借康有为等维新派推行君主立宪、练兵理财以收权于己并图自强；依赖无兵权的书生与少数新军同情者。",
    "key_figures": [
     "光绪帝",
     "康有为",
     "谭嗣同",
     "梁启超",
     "杨锐",
     "林旭"
    ],
    "typical_sources": [
     "康有为自编年谱",
     "戊戌奏稿",
     "梁启超·戊戌政变记"
    ],
    "bias_note": "维新派文献以「救亡图存、变法自强」为主轴，将自身塑造为悲壮的启蒙先驱，对帝后权力结构之脆弱着墨较少。"
   },
   "houding": {
    "name": "后党（守旧派）",
    "period": "戊戌",
    "interest": "慈禧与荣禄、刚毅等掌控北洋兵权与中枢，维护满洲亲贵与既得官僚利益；视变法为动摇国本、侵犯后党权柄，决意扑灭。",
    "key_figures": [
     "慈禧太后",
     "荣禄",
     "袁世凯",
     "刚毅",
     "李鸿章（暧昧）"
    ],
    "typical_sources": [
     "清史稿",
     "戊戌政变记（敌对方转述）",
     "慈禧列传"
    ],
    "bias_note": "清史稿为代表的后党叙事将变法斥为「乱法」，掩盖后党先发制人、囚帝训政之专断；对袁世凯告密之关键角色多回护。"
   }
  }
 }
};
