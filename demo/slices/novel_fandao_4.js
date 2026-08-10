// 本文件由 tools/build.py 自动生成（切片 novel_fandao_4），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_4"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_4"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·我的儿子是怪物",
  "dossier_label": "反派他爸教做人·我的儿子是怪物",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "mojie",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "我的儿子是怪物：末世兽化儿子与记忆篡改——同一断言内核服务科幻设定与亲情，证明『任意文字→世界』不限于现实题材。",
  "page": "county.html?scene=novel_fandao_4",
  "key": "novel_fandao_4",
  "scene_id": "novel_fandao_4",
  "vocab_pack": "inline:novel_fandao_4",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·我的儿子是怪物",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "ai_ruian_view",
   "title": "艾瑞安自述",
   "party": "艾父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "mojie",
   "name": "末世·艾家别墅",
   "fictional": true,
   "intro": "（虚构地点）末世·艾家别墅"
  },
  {
   "id": "yanshi",
   "name": "研究所",
   "fictional": true,
   "intro": "（虚构地点）研究所"
  }
 ],
 "persons": [
  {
   "id": "ai_zhe",
   "name": "艾哲",
   "desc": "宇航员，末世兽化异能者，记忆被篡改。",
   "intro": "（虚构人物）艾哲",
   "influence": 2
  },
  {
   "id": "ai_ruian",
   "name": "艾瑞安",
   "desc": "科学家，艾哲之父，死于艾哲爪下。",
   "intro": "（虚构人物）艾瑞安",
   "influence": 0
  },
  {
   "id": "tang_wanning",
   "name": "唐婉宁",
   "desc": "艾瑞安继室，唐心生母。",
   "intro": "（虚构人物）唐婉宁",
   "influence": 0
  },
  {
   "id": "tang_xin",
   "name": "唐心",
   "desc": "唐婉宁带来之女，无血缘妹，知艾哲真相。",
   "intro": "（虚构人物）唐心",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "G401",
   "subject": "person:ai_zhe",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "艾哲兽化异能者，从宇宙带回陌生能量辐射全球，引发末世。",
   "quote": "所谓末世到来并不是他们所以为的地球核变进化，而是艾哲从宇宙中带了陌生能量回来，辐射全球。",
   "value_text": "艾哲=末世能量源（非核变）。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "G402",
   "subject": "event:az_enter",
   "predicate": "情节事实",
   "source": "ai_ruian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "艾瑞安死前委托叶为安让兽化儿子变身后保持理智。",
   "quote": "你能让他恢复理智吗？变成怪兽的时候也保持理智。",
   "value_text": "叶为安介入动机=艾瑞安临终委托。",
   "_party": "艾父自述",
   "_faction": null
  },
  {
   "id": "G403",
   "subject": "event:az_key",
   "predicate": "情节事实",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "claim": "艾哲篡改众人对他的记忆，唯唐心见其完全体态而知真相。",
   "quote": "艾哲确实将所有人关于他的记忆都改变了，但只要见过艾哲完全状态，他想隐瞒的秘密就会开启。",
   "value_text": "唐心记忆=唯一真实。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "G404",
   "subject": "event:az_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安揭穿篡改，艾哲守住理智、唐心得救。",
   "quote": "（叶为安使艾哲保持清醒，护住唐心）",
   "value_text": "矫正后艾哲未疯狂。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "G405",
   "subject": "person:ai_zhe",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借艾哲反思'怪物'非天生：记忆篡改与孤独才是悲剧根源。",
   "quote": "（作者借末世兽化谈人性与孤独）",
   "value_text": "艾哲是'被改写的怪物'样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "G406",
   "subject": "event:az_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，艾哲疯狂囚禁唐心、二人同归于尽，末世真相无人知。",
   "quote": "（推演）唐心最后和艾哲同归于尽了……直到艾哲死后，异兽才不再那么疯狂。",
   "value_text": "反事实：未介入→同归于尽、真相湮灭。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "G407",
   "subject": "person:ai_zhe",
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
   "id": "G408",
   "subject": "event:az_enter",
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
  "G407"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:az_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身艾瑞安",
   "summary": "艾瑞安死前委托叶为安让兽化儿子保持理智。",
   "actors": [
    {
     "person": "ai_ruian",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:az_key",
   "era": "情节",
   "year": "",
   "kind": "反事实",
   "title": "艾哲记忆被篡改",
   "summary": "艾哲改众人对他的记忆，唐心知真相却不敢言。",
   "actors": [
    {
     "person": "ai_zhe",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_outcome",
   "subject": "event:az_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "矫正后艾哲守住理智",
   "summary": "叶为安揭穿篡改，艾哲未疯狂、唐心得救。",
   "actors": [
    {
     "person": "ai_zhe",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_branch",
   "subject": "event:az_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "艾哲疯狂囚禁唐心，二人同归于尽，末世辐射真相湮灭。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "ai_ruian",
   "to": "ai_zhe",
   "relation": "父子",
   "type": "parent_child",
   "label": "父子"
  },
  {
   "from": "tang_wanning",
   "to": "tang_xin",
   "relation": "母女",
   "type": "family",
   "label": "母女"
  },
  {
   "from": "ai_zhe",
   "to": "tang_xin",
   "relation": "兄妹（后囚禁）",
   "type": "enemy",
   "label": "兄妹（后囚禁）"
  },
  {
   "from": "tang_xin",
   "to": "nanyou",
   "relation": "相爱",
   "type": "romance",
   "label": "相爱（被阻挠）"
  },
  {
   "from": "yeweian",
   "to": "ai_ruian",
   "relation": "附身矫正",
   "type": "mentor",
   "label": "附身矫正"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:az_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:az_key",
   "label": "记忆篡改"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:az_outcome",
   "label": "守住理智"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:az_branch",
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
   "艾父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "艾父自述": "艾父自述",
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
