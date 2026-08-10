// 本文件由 tools/build.py 自动生成（切片 novel_fandao_2），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_2"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_2"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·深情渣帝王儿子",
  "dossier_label": "反派他爸教做人·深情渣帝王儿子",
  "subtitle": "快穿文《反派他爸教做人[快穿]》第二副本 · 由文本导入生成",
  "primary_place": "daye_palace",
  "dossier_event": "event:he_lingchen_outcome",
  "back": "枢纽",
  "fictional": true,
  "lead": "「任意文字→一个世界」管线的第二个端到端验证：用 tools/ingest.py 把小说第二副本（深情渣帝王儿子）抽取为结构化 world。与前一副本共用断言内核——差异只在立场语义（作者叙述/系统任务/贺云章自述/叶为安视角/沈岚视角）且无真实地形。原时间线贺凌宸毁国、叶为安介入后大历存续，构成一条反事实分支。",
  "parties_note": "虚构世界立场派生于来源：作者叙述 / 系统任务 / 贺云章自述 / 叶为安视角 / 沈岚视角，全部定义在本 world 自己的 vocab.json，不污染全局词表。",
  "subject_names": {
   "event:he_commission": "贺云章立约",
   "event:he_enter": "叶为安入贺云章身",
   "event:he_lingchen_ruin": "原时间线·毁国过程",
   "event:he_lingchen_outcome": "贺凌宸结局（含反事实分支）",
   "person:yeweian": "叶为安",
   "person:he_yunzhang": "贺云章",
   "person:he_lingchen": "贺凌宸",
   "person:shen_lan": "沈岚"
  },
  "page": "county.html?scene=novel_fandao_2",
  "key": "novel_fandao_2",
  "scene_id": "novel_fandao_2",
  "vocab_pack": "inline:novel_fandao_2",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "小说正文《反派他爸教做人[快穿]》第二副本",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统任务设定（反事实对照）",
   "party": "系统任务"
  },
  {
   "id": "he_yunzhang_view",
   "title": "贺云章临终自述与立约",
   "party": "贺云章自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角（矫正者）",
   "party": "叶为安视角"
  },
  {
   "id": "shen_lan_view",
   "title": "沈岚视角（被掳的穿越者）",
   "party": "沈岚视角"
  }
 ],
 "places": [
  {
   "id": "daye_palace",
   "name": "大历皇宫",
   "fictional": true,
   "intro": "（虚构地点）大历皇宫"
  },
  {
   "id": "jiangjun_fu",
   "name": "将军府",
   "fictional": true,
   "intro": "（虚构地点）将军府"
  },
  {
   "id": "bianjiang",
   "name": "边疆",
   "fictional": true,
   "intro": "（虚构地点）边疆"
  },
  {
   "id": "shen_home",
   "name": "沈家（德宜圣皇后母族）",
   "fictional": true,
   "intro": "（虚构地点）沈家（德宜圣皇后母族）"
  }
 ],
 "persons": [
  {
   "id": "yeweian",
   "name": "叶为安",
   "desc": "大世界第一株桃树妖修，入小世界接『父亲对晚辈』委托积功德延寿；本副本占据贺云章身体执政。",
   "intro": "（虚构人物）叶为安",
   "influence": 1
  },
  {
   "id": "he_yunzhang",
   "name": "贺云章",
   "desc": "大历第三代皇帝，一代明君，励精图治；因子贺凌宸毁国而断子绝孙，死后与叶为安立约。",
   "intro": "（虚构人物）贺云章",
   "influence": 2
  },
  {
   "id": "he_lingchen",
   "name": "贺凌宸",
   "desc": "太子/嗣帝，贺云章独子；偏执『深情』，为沈岚解散后宫、杀妃嫔与己子，原时间线毁国。",
   "intro": "（虚构人物）贺凌宸",
   "influence": 1
  },
  {
   "id": "he_min",
   "name": "贺敏",
   "desc": "昭容，贺云章之女、贺凌宸之妹；曾助沈岚逃走，后被贺凌宸视为背叛。",
   "intro": "（虚构人物）贺敏",
   "influence": 0
  },
  {
   "id": "shen_ying",
   "name": "沈璎",
   "desc": "德宜圣皇后，贺云章唯一妻、贺凌宸与贺敏之母；本副本开场病逝。",
   "intro": "（虚构人物）沈璎",
   "influence": 0
  },
  {
   "id": "shen_lan",
   "name": "沈岚",
   "desc": "穿越者，身上带小世界碎片；被贺凌宸强掳入宫，心属少将军齐宁，并不爱贺凌宸。",
   "intro": "（虚构人物）沈岚",
   "influence": 1
  },
  {
   "id": "qi_ning",
   "name": "齐宁",
   "desc": "少将军，忠于皇室，与沈岚相爱；贺凌宸灭门将军府时逃过一劫，后逐戎族、斩贺凌宸。",
   "intro": "（虚构人物）齐宁",
   "influence": 0
  },
  {
   "id": "lu_youde",
   "name": "鲁有德",
   "desc": "太监，贺云章/叶为安身边的近侍。",
   "intro": "（虚构人物）鲁有德",
   "influence": 0
  },
  {
   "id": "shu_fei",
   "name": "淑妃",
   "desc": "贺云章妃嫔，曾育一子；知难逃便带子向太上皇求救，母子俱死于贺凌宸之手。",
   "intro": "（虚构人物）淑妃",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "C01",
   "subject": "person:he_yunzhang",
   "predicate": "评价",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "贺云章为一代明君，励精图治、吏治清明、天下太平，却因子贺凌宸毁国而断子绝孙。",
   "quote": "他一生为大历打下坚实的基础，却被他儿子一个人毁掉了，就连整个天下都易了姓氏，而他贺云章更是断子绝孙。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C02",
   "subject": "event:he_commission",
   "predicate": "事实",
   "source": "he_yunzhang_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "贺云章死后与叶为安立约：求仙长保宸儿守住大历、不绝贺家血脉传承。",
   "quote": "朕希望，仙长可以让宸儿保住大历，不要为了一个女人昏了头，别让贺家绝了血脉传承。",
   "_party": "贺云章自述",
   "_faction": null
  },
  {
   "id": "C03",
   "subject": "event:he_enter",
   "predicate": "事实",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "叶为安借沈璎病逝、贺云章病倒之机，进入贺云章身体执政。",
   "quote": "叶为安在一阵嘈杂中睁开眼，坐起身体掀开床帘，『外面什么人在喧哗？』",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "C04",
   "subject": "person:he_lingchen",
   "predicate": "事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "原时间线贺凌宸为沈岚解散后宫，杀不肯走的妃嫔及其子，气死贺云章。",
   "quote": "不愿意走的妃嫔都是阻碍他和沈岚在一起的障碍，就被除掉了。包括不小心旁观了全程的儿子。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C05",
   "subject": "person:shen_lan",
   "predicate": "事实",
   "source": "shen_lan_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "沈岚为穿越者，被贺凌宸强掳入宫，心有所爱（齐宁），并不爱贺凌宸。",
   "quote": "她有自己喜欢的人，是贺凌宸强行将她掳进宫的，更何况看过贺凌宸对待那些嫔妃的态度，她只要没傻就更加不可能喜欢他！",
   "_party": "沈岚视角",
   "_faction": null
  },
  {
   "id": "C06",
   "subject": "event:he_lingchen_ruin",
   "predicate": "事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "贺凌宸为寻沈岚灭将军府，齐宁逃；后戎族南下大历大乱，齐宁归斩贺凌宸。",
   "quote": "将忠于皇室的将军府直接拔除了……贺凌宸被朝中大臣送给了齐宁，被他一剑斩下了脑袋。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C07",
   "subject": "event:he_lingchen_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "叶为安介入后，贺凌宸被矫正、学会对他人的责任，大历得以存续。",
   "quote": "他准备让他去体会一下……普通百姓的日常生活。至少将来，他能多动动脑子。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "C08",
   "subject": "event:he_lingchen_outcome",
   "predicate": "结局",
   "source": "system_setting",
   "layer": "inference",
   "quote_status": "generated",
   "claim": "反事实（无叶为安介入）：贺凌宸沿原时间线毁国、被斩、大历易主、贺家绝嗣。",
   "value_text": "反事实：大历覆灭、贺家绝嗣",
   "_party": "系统任务",
   "_faction": null
  },
  {
   "id": "C09",
   "subject": "person:he_yunzhang",
   "predicate": "主题",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "claim": "作者借贺云章『对女人负责』的表率，反衬贺凌宸只学表面——只学独爱却学不会责任。",
   "quote": "贺云章做出的表率有问题吗？……他只是忘了教给贺凌宸什么叫做责任而已——对女人的责任。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C10",
   "subject": "person:yeweian",
   "predicate": "评价",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "claim": "作者借『小冰河』点明天灾非帝王不仁，呼应前副本明朝覆灭同样有气候因素。",
   "quote": "就像上个世界的明朝，也有相当一部分原因是小冰河的到来才会导致王朝颠覆。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C11",
   "subject": "person:he_lingchen",
   "predicate": "缺口",
   "source": "novel_text",
   "layer": "gap",
   "claim": "贺凌宸被叶为安矫正后的具体终极结局（后续章节）原文尚未完整抽取。",
   "value_text": "缺：贺凌宸矫正后人生终局细节",
   "lead": {
    "where": "第二副本后续章节",
    "skills": [
     "文本回查"
    ],
    "accept": "补全矫正后时间线，或标记为作者留白"
   },
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "C12",
   "subject": "person:he_min",
   "predicate": "缺口",
   "source": "novel_text",
   "layer": "gap",
   "claim": "贺敏（昭容）与沈岚在矫正后时间线的命运尚未抽取。",
   "value_text": "缺：贺敏/沈岚后续支线",
   "lead": {
    "where": "第二副本后续章节",
    "skills": [
     "文本回查"
    ],
    "accept": "补全支线，或并入本 world 的 events/assertions"
   },
   "_party": "作者叙述",
   "_faction": null
  }
 ],
 "conflicts": [
  {
   "id": "cf:event:he_lingchen_outcome|结局",
   "subject": "event:he_lingchen_outcome",
   "predicate": "结局",
   "kind": "record_vs_record",
   "count": 2,
   "spread": null,
   "assertion_ids": [
    "C07",
    "C08"
   ]
  }
 ],
 "gaps": [
  "C11",
  "C12"
 ],
 "events": [
  {
   "id": "ev_commission",
   "subject": "event:he_commission",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "贺云章立约",
   "summary": "贺云章死后与叶为安立约：保宸儿守大历、不绝贺家血脉。",
   "actors": [
    {
     "person": "he_yunzhang",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "ev_enter",
   "subject": "event:he_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安入贺云章身",
   "summary": "沈璎病逝、贺云章病倒，叶为安借机进入其身体执政。",
   "actors": [
    {
     "person": "yeweian",
     "role": "文本提及",
     "year": ""
    },
    {
     "person": "he_yunzhang",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "ev_ruin",
   "subject": "event:he_lingchen_ruin",
   "era": "原时间线",
   "year": "",
   "kind": "反事实",
   "title": "原时间线·毁国过程",
   "summary": "解散后宫、杀妃嫔与己子、气死贺云章、灭将军府、戎族南下。",
   "actors": []
  },
  {
   "id": "ev_outcome",
   "subject": "event:he_lingchen_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "贺凌宸结局",
   "summary": "矫正后大历存续 / 反事实无介入则大历覆灭。",
   "actors": [
    {
     "person": "he_lingchen",
     "role": "文本提及",
     "year": ""
    }
   ]
  }
 ],
 "edges": [
  {
   "from": "he_yunzhang",
   "to": "he_lingchen",
   "relation": "父子·委托矫正",
   "type": "parent_child",
   "label": "父子·委托矫正"
  },
  {
   "from": "he_yunzhang",
   "to": "he_min",
   "relation": "父女",
   "type": "parent_child",
   "label": "父女"
  },
  {
   "from": "he_lingchen",
   "to": "shen_lan",
   "relation": "偏执爱慕（强掳）",
   "type": "romance",
   "label": "偏执爱慕（强掳）"
  },
  {
   "from": "shen_lan",
   "to": "qi_ning",
   "relation": "相爱",
   "type": "romance",
   "label": "相爱"
  },
  {
   "from": "he_lingchen",
   "to": "qi_ning",
   "relation": "敌对·灭门",
   "type": "enemy",
   "label": "敌对·灭门"
  },
  {
   "from": "yeweian",
   "to": "he_lingchen",
   "relation": "矫正目标",
   "type": "mentor",
   "label": "矫正目标"
  },
  {
   "from": "shu_fei",
   "to": "he_lingchen",
   "relation": "母子（子被贺凌宸杀）",
   "type": "parent_child",
   "label": "母子（子被贺凌宸杀）"
  },
  {
   "from": "he_lingchen",
   "to": "he_min",
   "relation": "兄妹（后视为背叛）",
   "type": "enemy",
   "label": "兄妹（后视为背叛）"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": "立约",
   "subject": "event:he_commission",
   "label": "贺云章与叶为安立约"
  },
  {
   "id": "t2",
   "t": "沈璎病逝后",
   "subject": "event:he_enter",
   "label": "叶为安入贺云章身执政"
  },
  {
   "id": "t3",
   "t": "原时间线",
   "subject": "event:he_lingchen_ruin",
   "label": "毁国过程（解散后宫→灭将军府→戎族南下）"
  },
  {
   "id": "t4",
   "t": "结局",
   "subject": "event:he_lingchen_outcome",
   "label": "叶为安介入后：大历存续"
  },
  {
   "id": "t4_alt",
   "t": "结局(反事实)",
   "subject": "event:he_lingchen_outcome",
   "label": "无叶为安介入：大历覆灭、贺家绝嗣",
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
   "贺云章自述",
   "叶为安视角",
   "沈岚视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "贺云章自述": "贺云章自述",
   "叶为安视角": "叶为安视角",
   "沈岚视角": "沈岚视角"
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
    "name": "夫妻",
    "color": "#C77B30",
    "dash": "7 4"
   },
   {
    "k": "romance",
    "name": "情感",
    "color": "#B23A48",
    "dash": "4 4"
   },
   {
    "k": "enemy",
    "name": "敌对",
    "color": "#8C2A2A",
    "dash": "4 4"
   },
   {
    "k": "mentor",
    "name": "矫正",
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
   "name": "夫妻",
   "color": "#C77B30",
   "dash": "7 4"
  },
  {
   "k": "romance",
   "name": "情感",
   "color": "#B23A48",
   "dash": "4 4"
  },
  {
   "k": "enemy",
   "name": "敌对",
   "color": "#8C2A2A",
   "dash": "4 4"
  },
  {
   "k": "mentor",
   "name": "矫正",
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
