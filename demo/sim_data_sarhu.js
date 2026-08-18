// 自动生成，勿手改；改 tools/gen_sarhu_bundle.py 后重跑。
window.SIM_DATA_SARHU = {
 "meta": {
  "title": "萨尔浒之战 实控演变（史实锚定）",
  "startYear": 1618,
  "endYear": 1619,
  "source": "《明史》卷二五九《杨镐传》/《清史稿·太祖本纪》/朝鲜《栅中日录》萨尔浒之战（1619）",
  "mechanism": "每条史实征服按参数'是否成功施加'；默认=精确重放史实（四路尽墨），调参=确定性反事实"
 },
 "partyColors": {
  "明方": [
   197,
   90,
   70
  ],
  "清方": [
   67,
   122,
   91
  ],
  "contested": [
   128,
   122,
   112
  ]
 },
 "seats": [
  {
   "id": "hetuala",
   "name": "赫图阿拉",
   "lon": 125.03,
   "lat": 41.78,
   "x": 0.6925,
   "y": 0.5474
  },
  {
   "id": "jiefan",
   "name": "界凡（界藩城）",
   "lon": 124.22,
   "lat": 41.94,
   "x": 0.3419,
   "y": 0.4784
  },
  {
   "id": "sarhu",
   "name": "萨尔浒",
   "lon": 124.1,
   "lat": 41.9,
   "x": 0.29,
   "y": 0.4957
  },
  {
   "id": "jilinya",
   "name": "吉林崖",
   "lon": 124.18,
   "lat": 41.93,
   "x": 0.3246,
   "y": 0.4828
  },
  {
   "id": "fushun",
   "name": "抚顺",
   "lon": 123.96,
   "lat": 41.88,
   "x": 0.2294,
   "y": 0.5043
  },
  {
   "id": "qinghe",
   "name": "清河堡",
   "lon": 124.2,
   "lat": 41.35,
   "x": 0.3333,
   "y": 0.7328
  },
  {
   "id": "shenyang",
   "name": "沈阳",
   "lon": 123.43,
   "lat": 41.8,
   "x": 0.0,
   "y": 0.5388
  },
  {
   "id": "kaiyuan",
   "name": "开原",
   "lon": 124.03,
   "lat": 42.55,
   "x": 0.2597,
   "y": 0.2155
  },
  {
   "id": "kuandian",
   "name": "宽甸",
   "lon": 124.78,
   "lat": 40.73,
   "x": 0.5843,
   "y": 1.0
  },
  {
   "id": "shangjianya",
   "name": "尚间崖",
   "lon": 124.3,
   "lat": 42.05,
   "x": 0.3765,
   "y": 0.431
  },
  {
   "id": "feifenshan",
   "name": "斐芬山",
   "lon": 124.38,
   "lat": 42.0,
   "x": 0.4112,
   "y": 0.4526
  },
  {
   "id": "niumaozhai",
   "name": "牛毛寨",
   "lon": 125.15,
   "lat": 41.35,
   "x": 0.7444,
   "y": 0.7328
  },
  {
   "id": "abudaligang",
   "name": "阿布达里岗",
   "lon": 125.0,
   "lat": 41.55,
   "x": 0.6795,
   "y": 0.6466
  },
  {
   "id": "fucha",
   "name": "富察之野",
   "lon": 124.92,
   "lat": 41.5,
   "x": 0.6449,
   "y": 0.6681
  },
  {
   "id": "yehe",
   "name": "叶赫",
   "lon": 124.6,
   "lat": 43.05,
   "x": 0.5064,
   "y": 0.0
  }
 ],
 "startControl": {
  "hetuala": "清方",
  "jiefan": "清方",
  "sarhu": "清方",
  "jilinya": "清方",
  "fushun": "清方",
  "qinghe": "清方",
  "shenyang": "明方",
  "kaiyuan": "明方",
  "kuandian": "明方",
  "shangjianya": "明方",
  "feifenshan": "明方",
  "niumaozhai": "明方",
  "abudaligang": "明方",
  "fucha": "明方",
  "yehe": "明方"
 },
 "terminalReal": {
  "hetuala": "清方",
  "jiefan": "清方",
  "sarhu": "清方",
  "jilinya": "清方",
  "fushun": "清方",
  "qinghe": "清方",
  "shenyang": "明方",
  "kaiyuan": "明方",
  "kuandian": "明方",
  "shangjianya": "清方",
  "feifenshan": "清方",
  "niumaozhai": "清方",
  "abudaligang": "清方",
  "fucha": "清方",
  "yehe": "contested"
 },
 "transitions": [
  {
   "year": 1619,
   "place_id": "abudaligang",
   "from": "明方",
   "to": "清方"
  },
  {
   "year": 1619,
   "place_id": "feifenshan",
   "from": "明方",
   "to": "清方"
  },
  {
   "year": 1619,
   "place_id": "fucha",
   "from": "明方",
   "to": "清方"
  },
  {
   "year": 1619,
   "place_id": "niumaozhai",
   "from": "明方",
   "to": "清方"
  },
  {
   "year": 1619,
   "place_id": "shangjianya",
   "from": "明方",
   "to": "清方"
  },
  {
   "year": 1619,
   "place_id": "yehe",
   "from": "明方",
   "to": "contested"
  }
 ],
 "persons": [
  {
   "id": "yanggao",
   "name": "杨镐",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "辽东经略",
   "perspective": {
    "role_tier": "cinC",
    "objective": "四路合击、按期会师于沈阳城下，一举捣毁后金老巢",
    "needs": [
     "各路严守约期同时并进",
     "避免任何一路抢功孤军深入",
     "后方粮道与斥候衔接不断"
    ],
    "info_quality": 0.35,
    "info_note": "分兵四路却无统一机动通讯；雪地行军更易迷路失联；对后金集中兵力毫无察觉",
    "assessment": "视此战为'以多击少'的捣巢速决，低估后金情报与机动能力，未料'凭尔几路来我只一路去'",
    "decision_style": "严令按期、重罚后期；以申军法维系合击节拍"
   }
  },
  {
   "id": "dusong",
   "name": "杜松",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "山海关总兵",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "抢在诸路之前破敌立功，雪'杜疯子'之勇名",
    "needs": [
     "率先渡浑河直捣",
     "独吞首功不受掣肘"
    ],
    "info_quality": 0.4,
    "info_note": "愤激轻敌，雪天裸衣渡河；不待他路，孤军急进",
    "assessment": "以为后金可一鼓破之，轻敌冒进，未察埋伏",
    "decision_style": "贪功冒进、违期疾进"
   }
  },
  {
   "id": "wangxuan",
   "name": "王宣",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "保定总兵",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随西路主将破敌，保身立功",
    "needs": [
     "紧跟主将",
     "稳守辎重"
    ],
    "info_quality": 0.4,
    "info_note": "随杜松同进退，信息同源",
    "assessment": "倚主将决断，自身无独立判断",
    "decision_style": "从主将、慎独断"
   }
  },
  {
   "id": "zhaomenglin",
   "name": "赵梦麟",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "原任总兵",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随西路主将破敌",
    "needs": [
     "协防西路",
     "护辎重"
    ],
    "info_quality": 0.4,
    "info_note": "西路副将，随杜松",
    "assessment": "随主将进退",
    "decision_style": "从主将"
   }
  },
  {
   "id": "malin",
   "name": "马林",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "开原总兵",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "稳扎稳打、按约期与主力合击，不贪功",
    "needs": [
     "与他路协同",
     "保全所部",
     "倚车营自固"
    ],
    "info_quality": 0.45,
    "info_note": "文士气重，持重但怯战；北路地形生疏",
    "assessment": "偏于自保，闻杜松败讯即动摇，未能坚持合击节拍",
    "decision_style": "持重迟疑、闻败即退"
   }
  },
  {
   "id": "panzongyan",
   "name": "潘宗颜",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "开原道佥事",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "守斐芬山、护北路侧翼",
    "needs": [
     "坚壁拒马",
     "等主力"
    ],
    "info_quality": 0.45,
    "info_note": "北路裨将，随马林",
    "assessment": "力战死守",
    "decision_style": "死守待援"
   }
  },
  {
   "id": "gongnian",
   "name": "龚念遂",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "游击",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "掌辎重车营、护北路后勤",
    "needs": [
     "护粮车",
     "依车营自固"
    ],
    "info_quality": 0.45,
    "info_note": "掌辎重，行动迟缓",
    "assessment": "后勤视角，重自保",
    "decision_style": "依车营结阵"
   }
  },
  {
   "id": "liruobai",
   "name": "李如柏",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "辽东总兵",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "持重应变、保全所部，避免陷敌",
    "needs": [
     "观望待机",
     "不与敌硬拼"
    ],
    "info_quality": 0.3,
    "info_note": "李成梁之子，与努尔哈赤有旧；行动迟缓、有意逗留",
    "assessment": "深知后金之强，倾向持重自保，未按期进兵",
    "decision_style": "持重逗留、不欲力战"
   }
  },
  {
   "id": "liuting",
   "name": "刘綎",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "辽阳总兵",
   "perspective": {
    "role_tier": "column_cmd",
    "objective": "远道深入、按期会师，立老将之功",
    "needs": [
     "道路给养",
     "与朝鲜军协同",
     "按时抵合击点"
    ],
    "info_quality": 0.35,
    "info_note": "东路最远、道路险阻；与朝鲜军协同但号令不一",
    "assessment": "宿将谨慎，但道远期促，且不知他路已败",
    "decision_style": "谨慎稳进、按期图功"
   }
  },
  {
   "id": "qiaoyilang",
   "name": "乔一琦",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "监军道",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "监军东路、联络朝鲜",
    "needs": [
     "联络朝鲜",
     "督催进军"
    ],
    "info_quality": 0.4,
    "info_note": "监军，协同朝鲜军",
    "assessment": "夹在明军与朝鲜之间",
    "decision_style": "联络协调"
   }
  },
  {
   "id": "kanghonglip",
   "name": "姜弘立",
   "side": "joseon",
   "faction": null,
   "role": "朝鲜五道都元帅",
   "perspective": {
    "role_tier": "ally_cmd",
    "objective": "奉明命出援、保全朝鲜军，避免与后金死战",
    "needs": [
     "保存实力",
     "观望形势",
     "不被明方裹挟送死"
    ],
    "info_quality": 0.3,
    "info_note": "被迫出兵助明；与明军号令不一，信息隔阂",
    "assessment": "视此战为明人内战，不愿为明力战；富察之野兵败即降",
    "decision_style": "首鼠两端、兵败则降"
   }
  },
  {
   "id": "kimkyungsuh",
   "name": "金景瑞",
   "side": "joseon",
   "faction": null,
   "role": "平安兵使",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "副元帅，随姜弘立出援",
    "needs": [
     "协同元帅",
     "保军"
    ],
    "info_quality": 0.3,
    "info_note": "朝鲜副帅",
    "assessment": "随元帅进退",
    "decision_style": "从元帅"
   }
  },
  {
   "id": "liminhwan",
   "name": "李民寏",
   "side": "joseon",
   "faction": null,
   "role": "从事官",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "随军记录、观察战局",
    "needs": [
     "记录战况"
    ],
    "info_quality": 0.3,
    "info_note": "《栅中日录》作者，被俘后记其所历",
    "assessment": "第三方亲历视角，不受明清双方叙事约束",
    "decision_style": "记录为主"
   }
  },
  {
   "id": "nurhaci",
   "name": "努尔哈赤",
   "side": "jin",
   "faction": null,
   "role": "后金大汗",
   "perspective": {
    "role_tier": "enemy_cmd",
    "objective": "集中兵力、各个击破，歼灭明军主力",
    "needs": [
     "掌握明军分兵虚实",
     "以逸待劳",
     "速决"
    ],
    "info_quality": 0.9,
    "info_note": "本土作战、情报灵通（谍报+降人），熟悉地形",
    "assessment": "洞悉明军分进不合、号令不一，定下'凭尔几路来我只一路去'的集中打击方针",
    "decision_style": "集中优势、先破一路、连续转兵"
   }
  },
  {
   "id": "daishan",
   "name": "代善",
   "side": "jin",
   "faction": null,
   "role": "大贝勒",
   "perspective": {
    "role_tier": "prince",
    "objective": "执行大汗集中打击方略，破明各路",
    "needs": [
     "协同大汗",
     "速战"
    ],
    "info_quality": 0.85,
    "info_note": "后金核心，参与诸战",
    "assessment": "执行集中打击",
    "decision_style": "依方略速决"
   }
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "side": "jin",
   "faction": null,
   "role": "四贝勒",
   "perspective": {
    "role_tier": "prince",
    "objective": "同代善，破明军",
    "needs": [
     "协同",
     "速战"
    ],
    "info_quality": 0.85,
    "info_note": "后金核心",
    "assessment": "执行方略",
    "decision_style": "依方略"
   }
  },
  {
   "id": "eyidu",
   "name": "额亦都",
   "side": "jin",
   "faction": null,
   "role": "五大臣",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "为大汗前驱破敌",
    "needs": [
     "随大汗",
     "冲阵"
    ],
    "info_quality": 0.85,
    "info_note": "后金重臣",
    "assessment": "执行",
    "decision_style": "冲阵效死"
   }
  },
  {
   "id": "jinyinghe",
   "name": "金应河",
   "side": "joseon",
   "faction": null,
   "role": "朝鲜左营将",
   "perspective": {
    "role_tier": "sub_cmd",
    "objective": "深河之战力战拒后金",
    "needs": [
     "布拒马木",
     "死守"
    ],
    "info_quality": 0.3,
    "info_note": "深河之战布拒马力战，称'依柳将'",
    "assessment": "力战殉国",
    "decision_style": "死战拒马"
   }
  }
 ]
};
