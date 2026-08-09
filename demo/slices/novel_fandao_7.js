// 本文件由 tools/build.py 自动生成（切片 novel_fandao_7），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_7"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_7"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·爱情至上的女儿",
  "dossier_label": "反派他爸教做人·爱情至上的女儿",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "mu_jia",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "爱情至上的女儿：一个恋爱脑女儿——同一断言内核服务'情感盲目'主题，反事实分支呈现'若未介入则被渣男毁'。",
  "page": "county.html?scene=novel_fandao_7",
  "key": "novel_fandao_7",
  "vocab_pack": "inline:novel_fandao_7",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·爱情至上的女儿",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "mu_fu_view",
   "title": "慕父自述",
   "party": "慕父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "mu_jia",
   "name": "慕家",
   "fictional": true,
   "intro": "（虚构地点）慕家"
  },
  {
   "id": "xuexiao",
   "name": "学校",
   "fictional": true,
   "intro": "（虚构地点）学校"
  }
 ],
 "persons": [
  {
   "id": "mu_qing",
   "name": "慕情",
   "desc": "为爱情放弃学业家庭的女儿。",
   "party": "慕父自述",
   "bucket": "慕父自述",
   "src": "mu_fu_view",
   "src_title": "慕父自述",
   "intro": "（虚构人物）慕情",
   "influence": 2
  },
  {
   "id": "mu_fu",
   "name": "慕父",
   "desc": "委托叶为安让女儿清醒。",
   "intro": "（虚构人物）慕父",
   "influence": 0
  },
  {
   "id": "zha_nan",
   "name": "渣男",
   "desc": "利用慕情感情的男人。",
   "intro": "（虚构人物）渣男",
   "influence": 0
  },
  {
   "id": "mu_mu",
   "name": "慕母",
   "desc": "慕情之母。",
   "intro": "（虚构人物）慕母",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "J701",
   "subject": "person:mu_qing",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "慕情爱情至上，为渣男放弃学业与家庭。",
   "quote": "（慕情将爱情置于一切之上）",
   "value_text": "慕情=爱情至上的女儿。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "J702",
   "subject": "event:mq_enter",
   "predicate": "情节事实",
   "source": "mu_fu_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "慕父委托叶为安让女儿不再为爱盲目。",
   "quote": "（慕父求叶为安教女儿做人不被情迷）",
   "value_text": "叶为安介入动机=慕父委托。",
   "_party": "慕父自述",
   "_faction": null
  },
  {
   "id": "J703",
   "subject": "event:mq_key",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "慕情为渣男弃学业家庭，渐失自我。",
   "quote": "（慕情为爱情牺牲前途）",
   "value_text": "核心冲突=爱情盲目。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "J704",
   "subject": "event:mq_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安矫正后慕情重拾自我与学业。",
   "quote": "（叶为安使慕情清醒）",
   "value_text": "矫正后慕情未毁。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "J705",
   "subject": "person:mu_qing",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借慕情谈'爱情至上'的边界：爱不应吞没自我。",
   "quote": "（作者借慕情反思恋爱脑）",
   "value_text": "慕情是'恋爱脑'样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "J706",
   "subject": "event:mq_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，慕情被渣男骗财骗色、毁掉一生。",
   "quote": "（推演）慕情为爱情至上的女儿，若无人点醒则万劫不复。",
   "value_text": "反事实：未介入→被渣男毁。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "J707",
   "subject": "person:mu_qing",
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
   "id": "J708",
   "subject": "event:mq_enter",
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
  "J707"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:mq_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身慕父",
   "summary": "慕父委托叶为安让爱情至上的女儿清醒。",
   "actors": [
    {
     "person": "mu_fu",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:mq_key",
   "era": "情节",
   "year": "",
   "kind": "矫正",
   "title": "女儿为爱弃学业",
   "summary": "慕情为渣男放弃学业家庭。",
   "actors": []
  },
  {
   "id": "e_outcome",
   "subject": "event:mq_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "矫正后清醒",
   "summary": "叶为安矫正使慕情重拾自我。",
   "actors": []
  },
  {
   "id": "e_branch",
   "subject": "event:mq_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "慕情被渣男骗财骗色、毁掉一生。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "mu_fu",
   "to": "mu_qing",
   "relation": "父女",
   "type": "parent_child",
   "label": "父女"
  },
  {
   "from": "mu_fu",
   "to": "mu_mu",
   "relation": "夫妻",
   "type": "spouse",
   "label": "夫妻"
  },
  {
   "from": "mu_qing",
   "to": "zha_nan",
   "relation": "迷恋（被骗）",
   "type": "romance",
   "label": "迷恋（被骗）"
  },
  {
   "from": "mu_qing",
   "to": "zha_nan",
   "relation": "被毁",
   "type": "enemy",
   "label": "被渣男毁"
  },
  {
   "from": "yeweian",
   "to": "mu_fu",
   "relation": "附身矫正",
   "type": "mentor",
   "label": "附身矫正"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:mq_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:mq_key",
   "label": "为爱弃学业"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:mq_outcome",
   "label": "清醒"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:mq_branch",
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
   "慕父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "慕父自述": "慕父自述",
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
