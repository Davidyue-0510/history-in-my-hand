// 本文件由 tools/build.py 自动生成（切片 novel_fandao_6），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_6"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_6"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·同性恋骗婚儿子",
  "dossier_label": "反派他爸教做人·同性恋骗婚儿子",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "tu_jia",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "同性恋骗婚儿子：一个被误读的上辈子——同一断言内核服务'误判真相'主题，反事实分支呈现'若未介入则骗婚毁人'。",
  "page": "county.html?scene=novel_fandao_6",
  "key": "novel_fandao_6",
  "scene_id": "novel_fandao_6",
  "vocab_pack": "inline:novel_fandao_6",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·同性恋骗婚儿子",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "tu_shiqing_view",
   "title": "徒时卿自述",
   "party": "司徒父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "tu_jia",
   "name": "徒家",
   "fictional": true,
   "intro": "（虚构地点）徒家"
  },
  {
   "id": "gongsi",
   "name": "徒应琉公司",
   "fictional": true,
   "intro": "（虚构地点）徒应琉公司"
  }
 ],
 "persons": [
  {
   "id": "situ_rui",
   "name": "司徒锐",
   "desc": "同性恋儿子，与徒应琉相恋。",
   "party": "司徒父自述",
   "bucket": "司徒父自述",
   "src": "tu_shiqing_view",
   "src_title": "徒时卿自述",
   "intro": "（虚构人物）司徒锐",
   "influence": 2
  },
  {
   "id": "tu_shiqing",
   "name": "徒时卿",
   "desc": "司徒锐之父，委托叶为安理解儿子。",
   "intro": "（虚构人物）徒时卿",
   "influence": 0
  },
  {
   "id": "tu_yingliu",
   "name": "徒应琉",
   "desc": "上辈子'骗婚'者，实为假误会。",
   "intro": "（虚构人物）徒应琉",
   "influence": 0
  },
  {
   "id": "chu_xiuxiu",
   "name": "褚秀秀",
   "desc": "上辈子徒应琉之妻，带子而死。",
   "intro": "（虚构人物）褚秀秀",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "I601",
   "subject": "person:situ_rui",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "司徒锐是同性恋，与徒应琉相恋，家庭最终接纳。",
   "quote": "司徒锐和徒应琉，那张结婚证就不重要。",
   "value_text": "司徒锐=被接纳的同性恋儿子。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "I602",
   "subject": "event:sr_enter",
   "predicate": "情节事实",
   "source": "tu_shiqing_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "徒时卿因上辈子'骗婚'误解，委托叶为安理解儿子。",
   "quote": "徒时卿是什么时候知道徒应琉是个同性恋，对褚秀秀骗婚的？",
   "value_text": "叶为安介入动机=徒时卿求理解。",
   "_party": "司徒父自述",
   "_faction": null
  },
  {
   "id": "I603",
   "subject": "event:sr_key",
   "predicate": "情节事实",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.82,
   "claim": "褚秀秀日记揭徒应琉非骗婚，只是旁观同性恋的误会。",
   "quote": "褚秀秀围观两个同性恋的兴奋与激动……那日记上寥寥的几句话。",
   "value_text": "上辈子骗婚=误会，非丧心病狂。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "I604",
   "subject": "event:sr_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安厘清误会，今世司徒锐与徒应琉被家庭接纳。",
   "quote": "（叶为安与叶云紫拼出合情合理真相）",
   "value_text": "矫正后误会被化解。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "I605",
   "subject": "person:situ_rui",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借误会谈'眼见不为实'：以结果逆推真相最易误判。",
   "quote": "知道结果，然后进行逆推往往很简单，但如果一开始看到的真相就是假的呢？",
   "value_text": "司徒锐是'误判真相'样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "I606",
   "subject": "event:sr_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，上辈子徒应琉黑化骗婚，毁褚秀秀一生。",
   "quote": "（推演）徒应琉将褚秀秀骗得这么惨，毁了人家一辈子。",
   "value_text": "反事实：未介入→骗婚毁人。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "I607",
   "subject": "person:situ_rui",
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
   "id": "I608",
   "subject": "event:sr_enter",
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
  "I607"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:sr_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身徒时卿",
   "summary": "徒时卿因上辈子骗婚误解委托叶为安理解儿子。",
   "actors": [
    {
     "person": "tu_shiqing",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:sr_key",
   "era": "情节",
   "year": "",
   "kind": "反事实",
   "title": "上辈子骗婚真相",
   "summary": "褚秀秀日记揭徒应琉非骗婚，是旁观同性恋的误会。",
   "actors": []
  },
  {
   "id": "e_outcome",
   "subject": "event:sr_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "今世被接纳",
   "summary": "司徒锐与徒应琉被家庭接纳。",
   "actors": []
  },
  {
   "id": "e_branch",
   "subject": "event:sr_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "上辈子徒应琉黑化骗婚毁褚秀秀一生。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "tu_shiqing",
   "to": "situ_rui",
   "relation": "父子",
   "type": "parent_child",
   "label": "父子"
  },
  {
   "from": "tu_shiqing",
   "to": "tu_yingliu",
   "relation": "上辈子父子",
   "type": "parent_child",
   "label": "上辈子父子"
  },
  {
   "from": "tu_yingliu",
   "to": "chu_xiuxiu",
   "relation": "骗婚（误会）",
   "type": "spouse",
   "label": "骗婚（误会）"
  },
  {
   "from": "yeweian",
   "to": "tu_shiqing",
   "relation": "附身理解",
   "type": "mentor",
   "label": "附身理解"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:sr_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:sr_key",
   "label": "骗婚真相"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:sr_outcome",
   "label": "被接纳"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:sr_branch",
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
   "司徒父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "司徒父自述": "司徒父自述",
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
