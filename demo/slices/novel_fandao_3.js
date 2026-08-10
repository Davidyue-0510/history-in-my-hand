// 本文件由 tools/build.py 自动生成（切片 novel_fandao_3），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["novel_fandao_3"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["novel_fandao_3"] = {
 "meta": {
  "kind": "fiction",
  "region": "fiction",
  "title": "反派他爸教做人·拜金绝色女儿",
  "dossier_label": "反派他爸教做人·拜金绝色女儿",
  "subtitle": "小说导入的虚构世界（kind:fiction）",
  "primary_place": "xiaocheng",
  "dossier_event": null,
  "back": "枢纽",
  "fictional": true,
  "lead": "拜金绝色女儿：一个清醒拜金的女儿，与『九零家暴男儿子』同属『父亲委托叶为安矫正子女』系列——这是『任意文字→一个世界』的第三个小说副本。",
  "page": "county.html?scene=novel_fandao_3",
  "key": "novel_fandao_3",
  "scene_id": "novel_fandao_3",
  "vocab_pack": "inline:novel_fandao_3",
  "terrain_grid": "liaodong"
 },
 "sources": [
  {
   "id": "novel_text",
   "title": "反派他爸教做人·拜金绝色女儿",
   "party": "作者叙述"
  },
  {
   "id": "system_setting",
   "title": "快穿系统设定",
   "party": "系统任务"
  },
  {
   "id": "xie_zefei_view",
   "title": "谢泽非自述",
   "party": "谢父自述"
  },
  {
   "id": "yeweian_view",
   "title": "叶为安视角",
   "party": "叶为安视角"
  }
 ],
 "places": [
  {
   "id": "xiaocheng",
   "name": "偏远小县城",
   "fictional": true,
   "intro": "（虚构地点）偏远小县城"
  },
  {
   "id": "yulequan",
   "name": "娱乐圈",
   "fictional": true,
   "intro": "（虚构地点）娱乐圈"
  },
  {
   "id": "linju",
   "name": "邻居家",
   "fictional": true,
   "intro": "（虚构地点）邻居家"
  }
 ],
 "persons": [
  {
   "id": "xie_xilan",
   "name": "谢夕兰",
   "desc": "谢泽非与许雯之女，美貌清醒却拜金，进娱乐圈傍金主。",
   "intro": "（虚构人物）谢夕兰",
   "influence": 2
  },
  {
   "id": "xie_zefei",
   "name": "谢泽非",
   "desc": "中学老师，酗酒打女。",
   "intro": "（虚构人物）谢泽非",
   "influence": 1
  },
  {
   "id": "xu_wen",
   "name": "许雯",
   "desc": "谢夕兰之母，因贫离家。",
   "intro": "（虚构人物）许雯",
   "influence": 0
  },
  {
   "id": "hua_tiancheng",
   "name": "华天成",
   "desc": "高富帅金主。",
   "intro": "（虚构人物）华天成",
   "influence": 0
  },
  {
   "id": "zhenai",
   "name": "真爱女友",
   "desc": "华天成真爱，被谢夕兰坑害。",
   "intro": "（虚构人物）真爱女友",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "F301",
   "subject": "person:xie_xilan",
   "predicate": "人物设定",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.9,
   "claim": "谢夕兰拜金、有演技有颜值有情商，进娱乐圈傍高富帅金主。",
   "quote": "她很清醒，她和高富帅之间，就是单纯的金钱关系，没别的。",
   "value_text": "谢夕兰=拜金绝色女儿，以金钱关系傍金主。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "F302",
   "subject": "event:xf_enter",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "谢泽非因许雯离家酗酒，醉后首打六岁谢夕兰，叶为安介入。",
   "quote": "谢泽非拿着许雯留下来的信将自己关在房间一整夜……第一次动手打了谢夕兰。",
   "value_text": "叶为安介入时间点为谢泽非首次动手打女。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "F303",
   "subject": "event:xf_key",
   "predicate": "情节事实",
   "source": "novel_text",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.85,
   "claim": "谢夕兰为抢华天成坑害其真爱女友，曝光后成众矢之的。",
   "quote": "为了抢夺高富帅，谢夕兰做了不少事情……谢夕兰一夕之间成了众矢之的。",
   "value_text": "傍金主坑真爱女友是副本核心冲突。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "F304",
   "subject": "event:xf_outcome",
   "predicate": "结局",
   "source": "yeweian_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "叶为安矫正后谢夕兰认清自我、不再拜金毁人。",
   "quote": "（叶为安代入谢泽非教养谢夕兰，使其摆脱拜金执念）",
   "value_text": "矫正后谢夕兰清醒，未毁人毁己。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "F305",
   "subject": "person:xie_xilan",
   "predicate": "作者主题",
   "source": "novel_text",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.7,
   "claim": "作者借谢夕兰揭示拜金与人性：清醒的算计反而最易迷失。",
   "quote": "（作者借娱乐圈镜像反思金钱与自我）",
   "value_text": "谢夕兰是'拜金迷失'的文学样本。",
   "_party": "作者叙述",
   "_faction": null
  },
  {
   "id": "F306",
   "subject": "event:xf_branch",
   "predicate": "反事实推演",
   "source": "yeweian_view",
   "layer": "inference",
   "quote_status": "generated",
   "confidence": 0.5,
   "claim": "若无叶为安介入，谢夕兰坑害真爱曝光后身败名裂、人生尽毁。",
   "quote": "（推演）若未介入，谢夕兰一夕之间成了众矢之的。",
   "value_text": "反事实：未介入→谢夕兰身败名裂。",
   "_party": "叶为安视角",
   "_faction": null
  },
  {
   "id": "F307",
   "subject": "person:xie_xilan",
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
   "id": "F308",
   "subject": "event:xf_enter",
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
  },
  {
   "id": "F309",
   "subject": "person:xie_zefei",
   "predicate": "人物自述",
   "source": "xie_zefei_view",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "claim": "谢泽非自述：许雯离家后酗酒、首次动手打六岁谢夕兰，是其人生转折。",
   "quote": "（谢泽非自述：许雯走后我把自己关起来，第一次打了夕兰）",
   "value_text": "谢泽非自述承认家暴起点。",
   "_party": "谢父自述",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "F307"
 ],
 "events": [
  {
   "id": "e_enter",
   "subject": "event:xf_enter",
   "era": "副本开端",
   "year": "",
   "kind": "转折",
   "title": "叶为安附身谢泽非",
   "summary": "谢泽非醉酒首打六岁谢夕兰，叶为安介入代父教养。",
   "actors": [
    {
     "person": "xie_zefei",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_key",
   "subject": "event:xf_key",
   "era": "情节",
   "year": "",
   "kind": "矫正",
   "title": "谢夕兰傍金主坑真爱",
   "summary": "为抢华天成坑害其真爱女友，事败身败名裂。",
   "actors": [
    {
     "person": "xie_xilan",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_outcome",
   "subject": "event:xf_outcome",
   "era": "结局",
   "year": "",
   "kind": "结局",
   "title": "矫正后谢夕兰清醒",
   "summary": "叶为安矫正使其认清自我、不再拜金毁人。",
   "actors": [
    {
     "person": "xie_xilan",
     "role": "文本提及",
     "year": ""
    }
   ]
  },
  {
   "id": "e_branch",
   "subject": "event:xf_branch",
   "era": "反事实",
   "year": "",
   "kind": "反事实",
   "title": "若叶为安未介入",
   "summary": "谢夕兰一夕成众矢之的，人生尽毁。",
   "actors": []
  }
 ],
 "edges": [
  {
   "from": "xie_zefei",
   "to": "xie_xilan",
   "relation": "父女",
   "type": "parent_child",
   "label": "父女"
  },
  {
   "from": "xie_zefei",
   "to": "xu_wen",
   "relation": "夫妻（许雯离家）",
   "type": "spouse",
   "label": "夫妻（许雯离家）"
  },
  {
   "from": "xie_xilan",
   "to": "hua_tiancheng",
   "relation": "傍金主",
   "type": "romance",
   "label": "傍金主"
  },
  {
   "from": "xie_xilan",
   "to": "zhenai",
   "relation": "坑害真爱女友",
   "type": "enemy",
   "label": "坑害真爱女友"
  },
  {
   "from": "yeweian",
   "to": "xie_zefei",
   "relation": "附身矫正",
   "type": "mentor",
   "label": "附身矫正"
  }
 ],
 "timeline": [
  {
   "id": "t1",
   "t": 0,
   "subject": "event:xf_enter",
   "label": "叶为安介入"
  },
  {
   "id": "t2",
   "t": 1,
   "subject": "event:xf_key",
   "label": "傍金主坑真爱"
  },
  {
   "id": "t3",
   "t": 2,
   "subject": "event:xf_outcome",
   "label": "矫正清醒"
  },
  {
   "id": "t4",
   "t": 3,
   "subject": "event:xf_branch",
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
   "谢父自述",
   "叶为安视角"
  ],
  "party_bucket": {
   "作者叙述": "作者叙述",
   "系统任务": "系统任务",
   "谢父自述": "谢父自述",
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
