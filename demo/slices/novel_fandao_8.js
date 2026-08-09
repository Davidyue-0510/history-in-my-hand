// 本文件由 tools/build.py 自动生成（切片 novel_fandao_8），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_8"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_8"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·不听话的喵儿子",
  "dossier_label": "反派他爸教做人·不听话的喵儿子",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "mao_guo",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "不听话的喵儿子：一只小家子气的猫儿子——同一断言内核服务'寓言'子类，证明动物视角世界也可作输入。",
  "page": "county.html?scene=novel_fandao_8",
  "key": "novel_fandao_8",
  "vocab_pack": "inline:novel_fandao_8",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·不听话的喵儿子",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "hu_ban_view",
   "title": "虎斑猫自述",
   "party": "猫父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "mao_guo",
   "name": "猫国",
   "fictional": true,
   "intro": "（虚构地点）猫国"
  },
  {
   "id": "ren_jian",
   "name": "人间",
   "fictional": true,
   "intro": "（虚构地点）人间"
  }
 ],
 "persons": [
  {
   "id": "bao_bao",
   "name": "珠宝",
   "desc": "小猫儿子，小家子气、争风吃醋。",
   "party": "猫父自述",
   "bucket": "猫父自述",
   "src": "hu_ban_view",
   "src_title": "虎斑猫自述",
   "intro": "（虚构人物）珠宝",
   "influence": 2
  },
  {
   "id": "hu_ban",
   "name": "虎斑猫",
   "desc": "猫妖/自称朕，委托叶为安教儿子做猫。",
   "intro": "（虚构人物）虎斑猫",
   "influence": 0
  },
  {
   "id": "lu_dewei",
   "name": "路德维希",
   "desc": "狗，虎斑猫盟友。",
   "intro": "（虚构人物）路德维希",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "K801",
   "subject": "person:bao_bao",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "珠宝是小猫儿子，小家子气、因铲屎官有别猫而打别的猫。",
   "quote": "它居然跑上去将别的猫给打了！一个有别的猫的铲屎官，还留着干什么，当然是抛弃他了！",
   "value_text": "珠宝=不听话的喵儿子。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "K802",
   "subject": "event:bb_enter",
   "predicate": "情节事实",
   "source": "hu_ban_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "虎斑猫（猫妖）委托叶为安教儿子珠宝做猫。",
   "quote": "去不去？朕藏了一块小鱼干，可以给你当报酬！",
   "value_text": "叶为安介入动机=虎斑猫委托。",
   "_party": "猫父自述",
   "_faction": null
  },
  {
   "id": "K803",
   "subject": "event:bb_key",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "珠宝因铲屎官有别猫而打别的猫、小家子气。",
   "quote": "它居然跑上去将别的猫给打了！",
   "value_text": "核心冲突=小猫争宠。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "K804",
   "subject": "event:bb_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安教珠宝不再小家子气、大方做猫。",
   "quote": "（叶为安逗弄并教导小猫）",
   "value_text": "矫正后珠宝大气。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "K805",
   "subject": "person:bao_bao",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借猫儿子谈'器量'：连猫都忌小家子气，况人乎。",
   "quote": "（作者以猫喻人谈气量）",
   "value_text": "珠宝是'器量'寓言样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "K806",
   "subject": "event:bb_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，珠宝仍争风吃醋、失猫国体面。",
   "quote": "（推演）珠宝若无人教，始终是只小家子气的猫。",
   "value_text": "反事实：未介入→珠宝仍小气。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "K807",
   "subject": "person:bao_bao",
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
   "id": "K808",
   "subject": "event:bb_enter",
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
  "K807"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:bb_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "虎斑猫委托叶为安",
   "summary": "虎斑猫请叶为安教儿子珠宝做猫。",
   "actors": [
    {
     "person": "hu_ban",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:bb_key",
   "era": "情节",
   "year": "",
   "kind": "矫正",
   "title": "珠宝小家子气",
   "summary": "珠宝因铲屎官有别猫而打别的猫。",
   "actors": [
    {
     "person": "bao_bao",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_outcome",
   "subject": "event:bb_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "矫正后大气",
   "summary": "叶为安教珠宝不再小家子气。",
   "actors": []
  },
  {
   "id": "e_branch",
   "subject": "event:bb_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "珠宝仍争风吃醋、失体面。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "hu_ban",
   "to": "bao_bao",
   "relation": "父子（猫）",
   "type": "parent_child",
   "label": "父子（猫）"
  },
  {
   "from": "bao_bao",
   "to": "other_cat",
   "relation": "争宠打架",
   "type": "enemy",
   "label": "争宠打架"
  },
  {
   "from": "hu_ban",
   "to": "lu_dewei",
   "relation": "盟友",
   "type": "family",
   "label": "盟友（狗）"
  },
  {
   "from": "yeweian",
   "to": "hu_ban",
   "relation": "受托教猫",
   "type": "mentor",
   "label": "受托教猫"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:bb_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:bb_key",
   "label": "小家子气"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:bb_outcome",
   "label": "大气"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:bb_branch",
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
   "猫父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "猫父自述": "猫父自述",
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
