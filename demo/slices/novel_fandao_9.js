// 本文件由 tools/build.py 自动生成（切片 novel_fandao_9），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_9"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_9"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·胎穿女和魂穿女",
  "dossier_label": "反派他爸教做人·胎穿女和魂穿女",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "jiang_jiacun",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "胎穿女和魂穿女：一个读点书成禽兽的儿子——同一断言内核服务'穿/胎'设定，全系列九个副本至此齐备。",
  "page": "county.html?scene=novel_fandao_9",
  "key": "novel_fandao_9",
  "vocab_pack": "inline:novel_fandao_9",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·胎穿女和魂穿女",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "jiang_dazhuang_view",
   "title": "江大壮自述",
   "party": "江父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "jiang_jiacun",
   "name": "江家村",
   "fictional": true,
   "intro": "（虚构地点）江家村"
  },
  {
   "id": "daxue",
   "name": "大学",
   "fictional": true,
   "intro": "（虚构地点）大学"
  }
 ],
 "persons": [
  {
   "id": "jiang_ronghua",
   "name": "江容华",
   "desc": "胎穿/魂穿之子，读点书成衣冠禽兽。",
   "party": "江父自述",
   "bucket": "江父自述",
   "src": "jiang_dazhuang_view",
   "src_title": "江大壮自述",
   "intro": "（虚构人物）江容华",
   "influence": 2
  },
  {
   "id": "jiang_dazhuang",
   "name": "江大壮",
   "desc": "庄稼汉，委托叶为安教儿子做人。",
   "intro": "（虚构人物）江大壮",
   "influence": 0
  },
  {
   "id": "jiang_nvyou",
   "name": "江容华女友",
   "desc": "家境好的开朗女孩。",
   "intro": "（虚构人物）江容华女友",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "L901",
   "subject": "person:jiang_ronghua",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "江容华是江家村唯一大学生，胎穿/魂穿后读点书便成衣冠禽兽。",
   "quote": "让儿子像个人，别读点书就去当电视上说的那什么衣冠禽兽。",
   "value_text": "江容华=胎穿禽兽儿子。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "L902",
   "subject": "event:jr_enter",
   "predicate": "情节事实",
   "source": "jiang_dazhuang_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "江大壮委托叶为安教儿子做人、别成衣冠禽兽。",
   "quote": "俺想请仙长教教俺儿子做个人吧。",
   "value_text": "叶为安介入动机=江大壮委托。",
   "_party": "江父自述",
   "_faction": null
  },
  {
   "id": "L903",
   "subject": "event:jr_key",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "江容华凭学识欺男霸女、负心女友。",
   "quote": "（江容华读点书后恃才傲物、负心滥情）",
   "value_text": "核心冲突=知识≠人品。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "L904",
   "subject": "event:jr_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安矫正使江容华回归本心、不再禽兽。",
   "quote": "（叶为安使江容华做回人）",
   "value_text": "矫正后江容华做人。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "L905",
   "subject": "person:jiang_ronghua",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借江容华谈'读书与做人'：有才无德是为禽兽。",
   "quote": "（作者借江容华反思教育与人品）",
   "value_text": "江容华是'有才无德'样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "L906",
   "subject": "event:jr_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，江容华成衣冠禽兽、害人害己。",
   "quote": "（推演）江容华读点书就去当衣冠禽兽。",
   "value_text": "反事实：未介入→禽兽毁人。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "L907",
   "subject": "person:jiang_ronghua",
   "predicate": "史料缺口",
   "source": "novel_text",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.0,
   "claim": "本书各副本仅抽取核心人物与转折事件，逐章细节（支线人物、对话、心理活动）尚未结构化沉淀。",
   "value_text": "待逐章结构化各副本的深层情节与人物关系。",
   "lead": {
    "where": "data/novel_to_map_try 各副本对应章节",
    "skills": [
     "文本抽取",
     "熟悉网文叙事"
    ],
    "accept": "逐章结构化各副本事件与人物关系，并入对应 world 的 events/assertions"
   },
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "L908",
   "subject": "event:jr_enter",
   "predicate": "系统设定",
   "source": "system_setting",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "快穿系统选派叶为安代入本副本父亲身体，以教养反派子女（使其不走原剧情绝路）为通关任务。",
   "quote": "（系统：宿主需完成教养任务方可脱离副本）",
   "value_text": "系统设定：叶为安受派代入父亲，教养反派子女为通关条件。",
   "_party": "系统任务",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "L907"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:jr_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身江大壮",
   "summary": "江大壮委托叶为安教儿子别成衣冠禽兽。",
   "actors": [
    {
     "person": "jiang_dazhuang",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:jr_key",
   "era": "情节",
   "year": "",
   "kind": "矫正",
   "title": "江容华读点书变禽兽",
   "summary": "江容华胎穿后凭学识欺男霸女。",
   "actors": [
    {
     "person": "jiang_ronghua",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_outcome",
   "subject": "event:jr_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "矫正后做人",
   "summary": "叶为安矫正使江容华回归本心。",
   "actors": []
  },
  {
   "id": "e_branch",
   "subject": "event:jr_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "江容华成衣冠禽兽、害人害己。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "jiang_dazhuang",
   "to": "jiang_ronghua",
   "relation": "父子",
   "type": "parent_child",
   "label": "父子"
  },
  {
   "from": "jiang_ronghua",
   "to": "jiang_nvyou",
   "relation": "恋爱",
   "type": "romance",
   "label": "恋爱"
  },
  {
   "from": "jiang_ronghua",
   "to": "jiang_nvyou",
   "relation": "负心",
   "type": "enemy",
   "label": "负心（衣冠禽兽）"
  },
  {
   "from": "yeweian",
   "to": "jiang_dazhuang",
   "relation": "附身教子",
   "type": "mentor",
   "label": "附身教子"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:jr_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:jr_key",
   "label": "读点书变禽兽"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:jr_outcome",
   "label": "回归本心"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:jr_branch",
   "label": "反事实·未介入",
   "branch": true
  }
 ],
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
   "作者叙述",
   "系统任务",
   "江父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "江父自述": "江父自述",
   "叶为安视角": "叶为安视角"
  },
  "edge_types": [
   {
    "k": "parent_child",
    "name": "亲子",
    "color": "#7A7466",
    "dash": "2 3"
   },
   {
    "k": "spouse",
    "name": "夫妻/婚约",
    "color": "#C77B30",
    "dash": "7 4"
   },
   {
    "k": "family",
    "name": "血亲",
    "color": "#3E8E6E",
    "dash": null
   },
   {
    "k": "romance",
    "name": "情感",
    "color": "#B23A48",
    "dash": "4 4"
   },
   {
    "k": "enemy",
    "name": "敌对/冲突",
    "color": "#8C2A2A",
    "dash": "4 4"
   },
   {
    "k": "mentor",
    "name": "矫正/受托",
    "color": "#5A3A6E",
    "dash": null
   },
   {
    "k": "commission",
    "name": "委托",
    "color": "#2E7D8F",
    "dash": "2 4"
   }
  ]
 },
 "edge_types": [
  {
   "k": "parent_child",
   "name": "亲子",
   "color": "#7A7466",
   "dash": "2 3"
  },
  {
   "k": "spouse",
   "name": "夫妻/婚约",
   "color": "#C77B30",
   "dash": "7 4"
  },
  {
   "k": "family",
   "name": "血亲",
   "color": "#3E8E6E",
   "dash": null
  },
  {
   "k": "romance",
   "name": "情感",
   "color": "#B23A48",
   "dash": "4 4"
  },
  {
   "k": "enemy",
   "name": "敌对/冲突",
   "color": "#8C2A2A",
   "dash": "4 4"
  },
  {
   "k": "mentor",
   "name": "矫正/受托",
   "color": "#5A3A6E",
   "dash": null
  },
  {
   "k": "commission",
   "name": "委托",
   "color": "#2E7D8F",
   "dash": "2 4"
  }
 ]
};
