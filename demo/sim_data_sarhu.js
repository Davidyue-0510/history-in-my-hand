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
   "role": "辽东经略"
  },
  {
   "id": "dusong",
   "name": "杜松",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "山海关总兵"
  },
  {
   "id": "wangxuan",
   "name": "王宣",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "保定总兵"
  },
  {
   "id": "zhaomenglin",
   "name": "赵梦麟",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "原任总兵"
  },
  {
   "id": "malin",
   "name": "马林",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "开原总兵"
  },
  {
   "id": "panzongyan",
   "name": "潘宗颜",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "开原道佥事"
  },
  {
   "id": "gongnian",
   "name": "龚念遂",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "游击"
  },
  {
   "id": "liruobai",
   "name": "李如柏",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "辽东总兵"
  },
  {
   "id": "liuting",
   "name": "刘綎",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "辽阳总兵"
  },
  {
   "id": "qiaoyilang",
   "name": "乔一琦",
   "side": "ming",
   "faction": "feng_jiang",
   "role": "监军道"
  },
  {
   "id": "kanghonglip",
   "name": "姜弘立",
   "side": "joseon",
   "faction": null,
   "role": "朝鲜五道都元帅"
  },
  {
   "id": "kimkyungsuh",
   "name": "金景瑞",
   "side": "joseon",
   "faction": null,
   "role": "平安兵使"
  },
  {
   "id": "liminhwan",
   "name": "李民寏",
   "side": "joseon",
   "faction": null,
   "role": "从事官"
  },
  {
   "id": "nurhaci",
   "name": "努尔哈赤",
   "side": "jin",
   "faction": null,
   "role": "后金大汗"
  },
  {
   "id": "daishan",
   "name": "代善",
   "side": "jin",
   "faction": null,
   "role": "大贝勒"
  },
  {
   "id": "huangtaiji",
   "name": "皇太极",
   "side": "jin",
   "faction": null,
   "role": "四贝勒"
  },
  {
   "id": "eyidu",
   "name": "额亦都",
   "side": "jin",
   "faction": null,
   "role": "五大臣"
  },
  {
   "id": "jinyinghe",
   "name": "金应河",
   "side": "joseon",
   "faction": null,
   "role": "朝鲜左营将"
  }
 ]
};
