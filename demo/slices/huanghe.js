// 本文件由 tools/build.py 自动生成（切片 huanghe），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["huanghe"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["huanghe"] = {
 "meta": {
  "kind": "disaster",
  "region": "ecology",
  "title": "黄河改道",
  "dossier_label": "黄河改道",
  "subtitle": "前602—1855 · 六次大改道",
  "primary_place": "taohuayu",
  "dossier_event": "event:hh_yu",
  "terrain_grid": "china_coarse",
  "lead": "黄河下游河道在渤海与黄海之间反复摆动：先是北流入渤海，南宋初杜充决河阻金致其夺淮入海近七百年，1855 年铜瓦厢决口复北归。地图上线条即各时期下游故道。",
  "parties_note": "河道变迁据谭其骧《中国历史地图集》与《黄河志》综合，具体摆幅与年份学界仍有考订空间。",
  "subject_names": {
   "person:wangjing": "王景",
   "person:duchong": "杜充"
  },
  "layer_title": "黄河河道叠加",
  "timeline_title": "黄河改道时间轴",
  "page": "county.html?scene=huanghe",
  "key": "huanghe",
  "scene_id": "huanghe",
  "vocab_pack": "inline:huanghe"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "黄河改道·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "河道变迁据谭其骧《中国历史地图集》与《黄河志》综合，具体摆幅与年份学界仍有考订空间。"
  }
 ],
 "places": [
  {
   "id": "taohuayu",
   "name": "桃花峪",
   "lon": 113.6,
   "lat": 34.92,
   "note": "郑州西北，黄河下游起点（南北流向分界）",
   "elev": 89
  },
  {
   "id": "suxu",
   "name": "宿胥口",
   "lon": 114.2,
   "lat": 35.9,
   "note": "今河南淇县，周定王五年河决处",
   "elev": 230
  },
  {
   "id": "dapi",
   "name": "大伾山",
   "lon": 114.53,
   "lat": 35.7,
   "note": "今河南浚县，东汉北流河道所经",
   "elev": 51
  },
  {
   "id": "kaifeng",
   "name": "开封",
   "lon": 114.3,
   "lat": 34.79,
   "note": "北宋汴京，南流河道所经",
   "elev": 76
  },
  {
   "id": "tongwaxiang",
   "name": "铜瓦厢",
   "lon": 114.83,
   "lat": 34.78,
   "note": "今河南兰考，1855 决口北归处",
   "elev": 63
  },
  {
   "id": "huangkou_n",
   "name": "渤海口",
   "lon": 118.5,
   "lat": 38.0,
   "note": "北流入海口（天津以南）",
   "elev": 1
  },
  {
   "id": "huangkou_s",
   "name": "黄海口",
   "lon": 119.8,
   "lat": 34.2,
   "note": "南宋—1855 南流入海口（苏北）",
   "elev": 13
  },
  {
   "id": "lanzhou",
   "name": "兰州",
   "lon": 103.83,
   "lat": 36.06,
   "note": "黄河上游，各故道共同起点",
   "elev": 1891
  },
  {
   "id": "tongguan",
   "name": "潼关",
   "lon": 110.3,
   "lat": 34.6,
   "note": "黄河出晋陕峡谷处",
   "elev": 357
  }
 ],
 "persons": [
  {
   "id": "wangjing",
   "name": "王景",
   "side": "东汉河堤谒者",
   "influence": 0
  },
  {
   "id": "duchong",
   "name": "杜充",
   "side": "南宋东京留守",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "AX_ev_hh_yu",
   "subject": "event:hh_yu",
   "predicate": "事件",
   "value_text": "《汉书·沟洫志》载「河徙」宿胥口，禹河（走河北）改道，为文献首次明确的大改道。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": -602,
    "end": -602,
    "era_text": "周定王五年"
   },
   "place": "suxu",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hh_wangjing",
   "subject": "event:hh_wangjing",
   "predicate": "事件",
   "value_text": "王景修渠堤，黄河自此长期走今山东入渤海（「东汉故道」），安流约千年。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 11,
    "end": 11,
    "era_text": "东汉永平十二年"
   },
   "place": "dapi",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hh_1128",
   "subject": "event:hh_1128",
   "predicate": "事件",
   "value_text": "东京留守杜充决黄河自泗入淮以阻金兵，黄河开始南泛夺淮，为近七百年南流之始。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1128,
    "end": 1128,
    "era_text": "南宋建炎二年"
   },
   "place": "huangkou_s",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hh_1194",
   "subject": "event:hh_1194",
   "predicate": "事件",
   "value_text": "黄河主流彻底夺淮入海，淮南河患剧增，江淮之间水系大乱。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1194,
    "end": 1194,
    "era_text": "南宋绍熙五年"
   },
   "place": "huangkou_s",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hh_1494",
   "subject": "event:hh_1494",
   "predicate": "事件",
   "value_text": "筑断黄陵冈，黄河全由南流（泗、淮）入海，北流彻底断绝。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1494,
    "end": 1494,
    "era_text": "明弘治七年"
   },
   "place": "tongwaxiang",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "AX_ev_hh_1855",
   "subject": "event:hh_1855",
   "predicate": "事件",
   "value_text": "铜瓦厢（兰考）决口，黄河夺大清河复入渤海，奠定今日下游河道（「明清故道」北归）。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "start": 1855,
    "end": 1855,
    "era_text": "清咸丰五年"
   },
   "place": "tongwaxiang",
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [],
 "events": [
  {
   "id": "ev_hh_yu",
   "subject": "event:hh_yu",
   "year": -602,
   "era": "周定王五年",
   "title": "宿胥口决，大禹河改道",
   "kind": "改道",
   "text": "《汉书·沟洫志》载「河徙」宿胥口，禹河（走河北）改道，为文献首次明确的大改道。",
   "place": "suxu"
  },
  {
   "id": "ev_hh_wangjing",
   "subject": "event:hh_wangjing",
   "year": 11,
   "era": "东汉永平十二年",
   "title": "王景治河，河入渤海",
   "kind": "改道",
   "text": "王景修渠堤，黄河自此长期走今山东入渤海（「东汉故道」），安流约千年。",
   "place": "dapi"
  },
  {
   "id": "ev_hh_1128",
   "subject": "event:hh_1128",
   "year": 1128,
   "era": "南宋建炎二年",
   "title": "杜充决河阻金，河夺淮",
   "kind": "决溢",
   "text": "东京留守杜充决黄河自泗入淮以阻金兵，黄河开始南泛夺淮，为近七百年南流之始。",
   "place": "huangkou_s"
  },
  {
   "id": "ev_hh_1194",
   "subject": "event:hh_1194",
   "year": 1194,
   "era": "南宋绍熙五年",
   "title": "河全入淮",
   "kind": "改道",
   "text": "黄河主流彻底夺淮入海，淮南河患剧增，江淮之间水系大乱。",
   "place": "huangkou_s"
  },
  {
   "id": "ev_hh_1494",
   "subject": "event:hh_1494",
   "year": 1494,
   "era": "明弘治七年",
   "title": "刘大夏筑太行堤，断北流",
   "kind": "改道",
   "text": "筑断黄陵冈，黄河全由南流（泗、淮）入海，北流彻底断绝。",
   "place": "tongwaxiang"
  },
  {
   "id": "ev_hh_1855",
   "subject": "event:hh_1855",
   "year": 1855,
   "era": "清咸丰五年",
   "title": "铜瓦厢决口，河复北归",
   "kind": "决溢",
   "text": "铜瓦厢（兰考）决口，黄河夺大清河复入渤海，奠定今日下游河道（「明清故道」北归）。",
   "place": "tongwaxiang"
  }
 ],
 "routes": [
  {
   "id": "rt_hh_bei1",
   "name": "禹河/西汉故道（北流）",
   "side": "b",
   "nodes": [
    {
     "place": "lanzhou",
     "at": "B602",
     "label": "上游"
    },
    {
     "place": "tongguan",
     "at": "B602",
     "label": "出峡谷"
    },
    {
     "place": "suxu",
     "at": "B602",
     "label": "宿胥口"
    },
    {
     "place": "huangkou_n",
     "at": "B602",
     "label": "入渤海"
    }
   ],
   "outcome": {
    "at": "B602",
    "type": "none",
    "text": "前602 前长期北流"
   }
  },
  {
   "id": "rt_hh_bei2",
   "name": "东汉—北宋北流",
   "side": "b",
   "nodes": [
    {
     "place": "lanzhou",
     "at": "11",
     "label": "上游"
    },
    {
     "place": "tongguan",
     "at": "11",
     "label": "出峡谷"
    },
    {
     "place": "dapi",
     "at": "11",
     "label": "大伾山"
    },
    {
     "place": "huangkou_n",
     "at": "11",
     "label": "入渤海"
    }
   ],
   "outcome": {
    "at": "11",
    "type": "none",
    "text": "王景治河后千年北流"
   }
  },
  {
   "id": "rt_hh_nan",
   "name": "南宋—1855 南流（夺淮）",
   "side": "b",
   "nodes": [
    {
     "place": "lanzhou",
     "at": "1128",
     "label": "上游"
    },
    {
     "place": "tongguan",
     "at": "1128",
     "label": "出峡谷"
    },
    {
     "place": "kaifeng",
     "at": "1128",
     "label": "经汴"
    },
    {
     "place": "huangkou_s",
     "at": "1128",
     "label": "夺淮入黄海"
    }
   ],
   "outcome": {
    "at": "1128",
    "type": "none",
    "text": "杜充决河后南泛"
   }
  },
  {
   "id": "rt_hh_bei3",
   "name": "1855 后北归",
   "side": "b",
   "nodes": [
    {
     "place": "lanzhou",
     "at": "1855",
     "label": "上游"
    },
    {
     "place": "tongguan",
     "at": "1855",
     "label": "出峡谷"
    },
    {
     "place": "tongwaxiang",
     "at": "1855",
     "label": "铜瓦厢决"
    },
    {
     "place": "huangkou_n",
     "at": "1855",
     "label": "复入渤海"
    }
   ],
   "outcome": {
    "at": "1855",
    "type": "none",
    "text": "铜瓦厢决口北归"
   }
  }
 ],
 "timeline": [
  {
   "at": "B602",
   "era": "周定王五年",
   "label": "宿胥口决·禹河改道",
   "key": true
  },
  {
   "at": "11",
   "era": "东汉永平十二",
   "label": "王景治河·北流入渤海",
   "key": true
  },
  {
   "at": "1128",
   "era": "南宋建炎二",
   "label": "杜充决河·开始夺淮",
   "key": true
  },
  {
   "at": "1194",
   "era": "南宋绍熙五",
   "label": "河全入淮",
   "key": false
  },
  {
   "at": "1494",
   "era": "明弘治七",
   "label": "筑太行堤·断北流",
   "key": false
  },
  {
   "at": "1855",
   "era": "清咸丰五",
   "label": "铜瓦厢决·复北归",
   "key": true
  }
 ],
 "columns": [],
 "edges": [],
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
   "综合史料"
  ],
  "party_bucket": {
   "综合史料": "综合史料"
  },
  "party_colors": {
   "综合史料": "#7f8c8d"
  },
  "legend": {
   "route": [
    {
     "key": "b",
     "label": "河道/路线",
     "color": "#2b6cb0"
    }
   ]
  }
 }
};
