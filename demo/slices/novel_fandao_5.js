// 本文件由 tools/build.py 自动生成（切片 novel_fandao_5），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_5"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_5"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·不负责的穿书女",
  "dossier_label": "反派他爸教做人·不负责的穿书女",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "hejiacun",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "不负责的穿书女：一个追梦母亲与留守女儿——同一断言内核服务'穿书'设定，证明虚构子类（穿书/系统/快穿）皆可作输入。",
  "page": "county.html?scene=novel_fandao_5",
  "key": "novel_fandao_5",
  "scene_id": "novel_fandao_5",
  "vocab_pack": "inline:novel_fandao_5",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·不负责的穿书女",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "he_yongan_view",
   "title": "何永安自述",
   "party": "何父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "hejiacun",
   "name": "何家村",
   "fictional": true,
   "intro": "（虚构地点）何家村"
  },
  {
   "id": "chengshi",
   "name": "京市",
   "fictional": true,
   "intro": "（虚构地点）京市"
  }
 ],
 "persons": [
  {
   "id": "he_xinran",
   "name": "何欣然",
   "desc": "穿书女/明星，将女儿巧妹托付父母后追梦。",
   "party": "何母自述",
   "bucket": "何母自述",
   "src": "he_xinran_view",
   "src_title": "何欣然视角",
   "intro": "（虚构人物）何欣然",
   "influence": 2
  },
  {
   "id": "he_yongan",
   "name": "何永安",
   "desc": "巧妹姥爷，委托叶为安护孙女。",
   "intro": "（虚构人物）何永安",
   "influence": 0
  },
  {
   "id": "qiao_mei",
   "name": "巧妹",
   "desc": "何欣然之女，由姥爷姥姥带大。",
   "intro": "（虚构人物）巧妹",
   "influence": 0
  },
  {
   "id": "lin_wenqi",
   "name": "林文启",
   "desc": "何欣然再婚对象（首富）。",
   "intro": "（虚构人物）林文启",
   "influence": 0
  },
  {
   "id": "xue_yiliang",
   "name": "薛宜良",
   "desc": "巧妹生父。",
   "intro": "（虚构人物）薛宜良",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "H501",
   "subject": "person:he_xinran",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "何欣然为穿书女/明星，将幼女巧妹托父母后赴外地拍戏追梦。",
   "quote": "何欣然突然打电话过来，说要去外地拍戏，巧妹太小了，没办法再照顾，因此只能将她送到父母身边。",
   "value_text": "何欣然=不负责任但非恶意之母。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "H502",
   "subject": "event:hx_enter",
   "predicate": "情节事实",
   "source": "he_yongan_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "何永安委托叶为安护巧妹，使其不在风言风语中长大。",
   "quote": "（何永安将巧妹托付，叶为安附身护其成长）",
   "value_text": "叶为安介入动机=何永安委托。",
   "_party": "何父自述",
   "_faction": null
  },
  {
   "id": "H503",
   "subject": "event:hx_key",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "何欣然嫁入林家（首富），曾为明星的身份被翻出但未被追究。",
   "quote": "欣欣嫁入林家后曾经是明星的事情确实被狗仔翻了出来……林家也不是，她就放心吧。",
   "value_text": "何欣然再婚首富，巧妹被接纳。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "H504",
   "subject": "event:hx_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安护巧妹于善意环境中健康成长。",
   "quote": "（叶为安与王莲居于何家村，巧妹快乐长大）",
   "value_text": "矫正后巧妹未受流言所伤。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "H505",
   "subject": "person:he_xinran",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借穿书女反思'追梦与尽责'的张力：爱不是缺席的借口。",
   "quote": "（作者借巧妹命运谈母爱与义务）",
   "value_text": "何欣然是'追梦母亲'样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "H506",
   "subject": "event:hx_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，巧妹在'她妈不安分'的流言中自我怀疑、童年被毁。",
   "quote": "（推演）龙生龙，凤生凤……谢夕兰保不准和她妈一样。",
   "value_text": "反事实：未介入→巧妹童年被流言毁。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "H507",
   "subject": "person:he_xinran",
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
   "id": "H508",
   "subject": "event:hx_enter",
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
  "H507"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:hx_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身何永安",
   "summary": "何永安委托叶为安护巧妹免于风言风语。",
   "actors": [
    {
     "person": "he_yongan",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:hx_key",
   "era": "情节",
   "year": "",
   "kind": "矫正",
   "title": "何欣然追梦托女",
   "summary": "何欣然穿书女身份、将巧妹托父母后追星途。",
   "actors": [
    {
     "person": "he_xinran",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_outcome",
   "subject": "event:hx_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "巧妹健康成长",
   "summary": "叶为安护巧妹在善意中长大。",
   "actors": [
    {
     "person": "qiao_mei",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_branch",
   "subject": "event:hx_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "巧妹在风言风语与流言中毁掉童年。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "he_yongan",
   "to": "qiao_mei",
   "relation": "姥爷-外孙女",
   "type": "parent_child",
   "label": "姥爷-外孙女"
  },
  {
   "from": "he_xinran",
   "to": "qiao_mei",
   "relation": "母女",
   "type": "parent_child",
   "label": "母女"
  },
  {
   "from": "he_xinran",
   "to": "lin_wenqi",
   "relation": "再婚",
   "type": "spouse",
   "label": "再婚（林文启）"
  },
  {
   "from": "he_xinran",
   "to": "xue_yiliang",
   "relation": "生父",
   "type": "spouse",
   "label": "生父（薛宜良）"
  },
  {
   "from": "yeweian",
   "to": "he_yongan",
   "relation": "附身护孙",
   "type": "mentor",
   "label": "附身护孙"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:hx_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:hx_key",
   "label": "托女追梦"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:hx_outcome",
   "label": "巧妹健康成长"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:hx_branch",
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
   "何父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "何父自述": "何父自述",
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
