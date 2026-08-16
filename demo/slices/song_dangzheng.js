// 本文件由 tools/build.py 自动生成（切片 song_dangzheng），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["song_dangzheng"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["song_dangzheng"] = {
 "meta": {
  "kind": "court",
  "region": "court",
  "title": "洛蜀朔党争",
  "dossier_label": "洛蜀朔党争",
  "subtitle": "北宋元祐（1086—1093）· 洛党·蜀党·朔党",
  "primary_place": "kaifeng",
  "dossier_event": "event:ls_1086",
  "terrain_grid": "china_coarse",
  "lead": "元祐更化后，旧党内部再裂为三：程颐为首的「洛党」（洛阳理学）、苏轼兄弟为首的「蜀党」（眉山）、刘挚为首的「朔党」（河北）。一席之礼、一句之论皆可相攻。本切片把三营的 stakes 与籍贯（洛阳/眉山/东光—郓州）并列，叠到地形。",
  "parties_note": "洛党尚礼法、蜀党尚文采宽政、朔党居台谏攻讦；三方皆反新法，却互不相能。系统不裁决，只并列。",
  "page": "county.html?scene=song_dangzheng",
  "key": "song_dangzheng",
  "scene_id": "song_dangzheng",
  "vocab_pack": "inline:song_dangzheng"
 },
 "sources": [
  {
   "id": "synthesis",
   "title": "洛蜀朔党争·综合史料",
   "party": "综合史料",
   "availability": "not_free",
   "bias_note": "综合《宋史》《续资治通鉴长编》，三党互攻记载多经对方转述。",
   "stance_label": "私修编年·综合",
   "distance_label": "成书南宋至元（李焘《长编》1143 等），距事约 50–150 年"
  },
  {
   "id": "luo_wen",
   "title": "洛党文献",
   "name": "《程氏经说》等",
   "party": "洛党文献",
   "faction": "luo_dang",
   "bias_note": "洛党尚礼法，叙蜀党无礼。",
   "stance_label": "本朝·当方阵营文献",
   "distance_label": "北宋元祐时洛党奏议，距事极近"
  },
  {
   "id": "shu_wen",
   "title": "蜀党文献",
   "name": "《东坡全集》",
   "party": "蜀党文献",
   "faction": "shu_dang",
   "bias_note": "蜀党尚文采宽政，叙洛党峻刻。",
   "stance_label": "本朝·当方阵营文献",
   "distance_label": "北宋元祐时苏轼奏议，距事极近"
  },
  {
   "id": "shuo_wen",
   "title": "朔党文献",
   "name": "《宋史·刘挚传》等",
   "party": "朔党文献",
   "faction": "shuo_dang",
   "bias_note": "朔党居台谏，以弹劾为器。",
   "stance_label": "本朝·当方阵营文献",
   "distance_label": "北宋元祐时朔党奏议，距事极近"
  }
 ],
 "places": [
  {
   "id": "kaifeng",
   "name": "开封",
   "lon": 114.31,
   "lat": 34.8,
   "note": "北宋都，党争中枢",
   "elev": 76
  },
  {
   "id": "luoyang",
   "name": "洛阳",
   "lon": 112.45,
   "lat": 34.62,
   "note": "程颐故里·洛学",
   "elev": 171
  },
  {
   "id": "meishan",
   "name": "眉山",
   "lon": 103.83,
   "lat": 30.05,
   "note": "苏轼故里·蜀党",
   "elev": 445
  },
  {
   "id": "dongguang",
   "name": "东光",
   "lon": 116.55,
   "lat": 37.88,
   "note": "刘挚故里·朔党",
   "elev": 12
  },
  {
   "id": "yunzhou",
   "name": "郓州",
   "lon": 116.03,
   "lat": 35.9,
   "note": "梁焘故里·朔党",
   "elev": 40
  }
 ],
 "persons": [
  {
   "id": "chengyi",
   "name": "程颐",
   "side": "luo_dang",
   "influence": 0,
   "hometown": "洛阳"
  },
  {
   "id": "sushi",
   "name": "苏轼",
   "side": "shu_dang",
   "influence": 0,
   "hometown": "眉山"
  },
  {
   "id": "suzhe",
   "name": "苏辙",
   "side": "shu_dang",
   "influence": 0,
   "hometown": "眉山"
  },
  {
   "id": "liuzhi",
   "name": "刘挚",
   "side": "shuo_dang",
   "influence": 0,
   "hometown": "东光"
  },
  {
   "id": "liangtao",
   "name": "梁焘",
   "side": "shuo_dang",
   "influence": 0,
   "hometown": "郓州"
  }
 ],
 "assertions": [
  {
   "id": "LS_E1",
   "subject": "event:ls_1086",
   "predicate": "事件",
   "value_text": "元祐初旧党执政，洛（程颐）、蜀（苏轼）、朔（刘挚）三党并立，交攻不已。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "元祐元年",
    "start": 1086,
    "end": 1086,
    "gregorian_year": 1086
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LS_E2",
   "subject": "event:ls_1089",
   "predicate": "事件",
   "value_text": "程颐与苏轼因礼议事相攻，蜀洛之隙公开，朔党乘间。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "元祐四年",
    "start": 1089,
    "end": 1089,
    "gregorian_year": 1089
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LS_E3",
   "subject": "event:ls_1093",
   "predicate": "结局",
   "value_text": "元祐末朔党刘挚、梁焘居枢要，蜀洛并遭排挤。",
   "source": "synthesis",
   "layer": "scholarship",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.4,
   "time": {
    "era_text": "元祐八年",
    "start": 1093,
    "end": 1093,
    "gregorian_year": 1093
   },
   "place": "kaifeng",
   "_party": "综合史料",
   "_faction": null
  },
  {
   "id": "LS_FX1",
   "subject": "event:ls_1086",
   "predicate": "路线对立",
   "value_text": "洛党主礼法君尊臣卑，蜀党主宽政文治，朔党居台谏以弹劾为器——三方皆反新法却互不相能。",
   "source": "luo_wen",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "元祐",
    "start": 1086,
    "end": 1086,
    "gregorian_year": 1086
   },
   "place": "luoyang",
   "quote": "（洛党）以礼法绳人",
   "note": "理学 vs 文治的立场裂痕",
   "_party": "洛党文献",
   "_faction": "luo_dang"
  },
  {
   "id": "LS_FX2",
   "subject": "event:ls_1089",
   "predicate": "礼议相攻",
   "value_text": "苏轼讥程颐「迂阔」，程颐劾苏轼「放浪无礼」，一席之礼可成党祸。",
   "source": "shu_wen",
   "layer": "record",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.8,
   "time": {
    "era_text": "元祐四年",
    "start": 1089,
    "end": 1089,
    "gregorian_year": 1089
   },
   "place": "meishan",
   "quote": "（蜀党）以文采相高，讥洛党峻刻",
   "note": "党争下沉到礼仪细故",
   "_party": "蜀党文献",
   "_faction": "shu_dang"
  },
  {
   "id": "LS_FX3",
   "subject": "event:ls_1093",
   "predicate": "反扑与反复",
   "value_text": "朔党乘洛蜀之隙居枢要，旋随哲宗亲政绍述而俱败——旧党内耗加速北宋解体。",
   "source": "shuo_wen",
   "layer": "inference",
   "quote_status": "paraphrase_unverified",
   "confidence": 0.6,
   "time": {
    "era_text": "元祐八年",
    "start": 1093,
    "end": 1093,
    "gregorian_year": 1093
   },
   "place": "kaifeng",
   "note": "内斗削弱旧党整体",
   "_party": "朔党文献",
   "_faction": "shuo_dang"
  },
  {
   "id": "LS_GAP1",
   "subject": "event:ls_1086",
   "predicate": "史料缺环",
   "value_text": "洛蜀朔的「地缘阵营」在宋代史料中多为时人贬称，严格以籍贯划营易过度简化；三党更多是政见—师承网络而非铁板地域集团。",
   "source": "synthesis",
   "layer": "gap",
   "quote_status": "paraphrase_unverified",
   "confidence": 0,
   "time": {
    "era_text": "元祐",
    "start": 1086,
    "end": 1086,
    "gregorian_year": 1086
   },
   "place": null,
   "lead": {
    "where": "宋元学案/宋史列传对读",
    "skills": [
     "师承网络分析",
     "传记对读"
    ],
    "accept": "厘清三党人物确切师承与籍贯分布"
   },
   "_party": "综合史料",
   "_faction": null
  }
 ],
 "conflicts": [],
 "gaps": [
  "LS_GAP1"
 ],
 "events": [
  {
   "id": "ev_ls_1086",
   "subject": "event:ls_1086",
   "year": 1086,
   "era": "元祐元年",
   "title": "旧党执政·三党并立",
   "kind": "党争",
   "text": "司马光卒后，旧党内裂：洛党程颐、蜀党苏轼、朔党刘挚各树旗帜，交攻不已。",
   "place": "kaifeng"
  },
  {
   "id": "ev_ls_1089",
   "subject": "event:ls_1089",
   "year": 1089,
   "era": "元祐四年",
   "title": "蜀洛构怨",
   "kind": "党争",
   "text": "程颐与苏轼因礼议事相攻，洛蜀之隙公开化，朔党乘间攻之。",
   "place": "kaifeng"
  },
  {
   "id": "ev_ls_1093",
   "subject": "event:ls_1093",
   "year": 1093,
   "era": "元祐八年",
   "title": "朔党得势·蜀洛俱黜",
   "kind": "结局",
   "text": "高太后崩、哲宗亲政前，朔党刘挚、梁焘居枢要，蜀洛并遭排挤。",
   "place": "kaifeng"
  }
 ],
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
   "综合史料",
   "洛党文献",
   "蜀党文献",
   "朔党文献"
  ],
  "party_bucket": {
   "综合史料": "综合史料",
   "洛党文献": "洛党文献",
   "蜀党文献": "蜀党文献",
   "朔党文献": "朔党文献"
  },
  "party_colors": {
   "综合史料": "#7f8c8d",
   "洛党文献": "#8E44AD",
   "蜀党文献": "#c0392b",
   "朔党文献": "#2e7d32"
  },
  "faction_colors": {
   "luo_dang": "#8E44AD",
   "shu_dang": "#c0392b",
   "shuo_dang": "#2e7d32"
  },
  "factions": {
   "luo_dang": {
    "name": "洛党（程颐·洛阳理学）",
    "period": "元祐（1086—1093）",
    "interest": "程颐为首的洛中理学派，强调礼法、君尊臣卑，与蜀党苏轼论礼相攻。",
    "key_figures": [
     "程颐",
     "朱光庭",
     "贾易"
    ],
    "typical_sources": [
     "程氏经说",
     "宋元学案·伊川学案"
    ],
    "bias_note": "洛党尚严毅礼法，叙蜀党「放浪无礼」，立场带理学道统优越感。",
    "bases": [
     "洛阳"
    ],
    "geo_note": "程颐洛阳人，洛学根基在中原洛阳。"
   },
   "shu_dang": {
    "name": "蜀党（苏轼·眉山）",
    "period": "元祐（1086—1093）",
    "interest": "苏轼、苏辙兄弟为首的蜀士集团，文采风流、主张宽政，与洛党程颐论礼相争，亦与朔党不协。",
    "key_figures": [
     "苏轼",
     "苏辙",
     "吕陶"
    ],
    "typical_sources": [
     "东坡全集",
     "栾城集"
    ],
    "bias_note": "蜀党尚文采宽政，叙洛党「迂阔峻刻」；其立场代表巴蜀—江南文人网络。",
    "bases": [
     "眉山"
    ],
    "geo_note": "苏氏眉山人，蜀地士人集团。"
   },
   "shuo_dang": {
    "name": "朔党（刘挚·河北）",
    "period": "元祐（1086—1093）",
    "interest": "刘挚、梁焘为首的河北士人集团，元祐中附旧党而攻蜀、洛，多居台谏。",
    "key_figures": [
     "刘挚",
     "梁焘",
     "王岩叟"
    ],
    "typical_sources": [
     "宋史·刘挚传"
    ],
    "bias_note": "朔党居台谏，以弹劾为器，叙蜀洛「朋比」，立场代表河北士人清简务实。",
    "bases": [
     "东光",
     "郓州"
    ],
    "geo_note": "刘挚东光人、梁焘郓州人，朔党以河北士人为基。"
   }
  },
  "faction_geo": {
   "gaps": [
    {
     "region": "陕西/关中",
     "determination": "genuine_gap",
     "note": "北宋洛蜀朔党争期关中新党（如吕大防京兆）已并入旧党，独立地域不明显。"
    },
    {
     "region": "江南",
     "determination": "genuine_gap",
     "note": "此期江南士人尚未成显著党争代言，南宋方兴。"
    }
   ]
  }
 },
 "faction_geo": {
  "luo_dang": {
   "name": "洛党（程颐·洛阳理学）",
   "color": "#8E44AD",
   "geo_note": "程颐洛阳人，洛学根基在中原洛阳。",
   "points": [
    {
     "name": "洛阳",
     "lon": 112.45,
     "lat": 34.62,
     "note": "唐东都，今洛阳",
     "resolved": true
    }
   ]
  },
  "shu_dang": {
   "name": "蜀党（苏轼·眉山）",
   "color": "#c0392b",
   "geo_note": "苏氏眉山人，蜀地士人集团。",
   "points": [
    {
     "name": "眉山",
     "lon": 103.83,
     "lat": 30.05,
     "note": "苏轼故里，今四川眉山",
     "resolved": true
    }
   ]
  },
  "shuo_dang": {
   "name": "朔党（刘挚·河北）",
   "color": "#2e7d32",
   "geo_note": "刘挚东光人、梁焘郓州人，朔党以河北士人为基。",
   "points": [
    {
     "name": "东光",
     "lon": 116.55,
     "lat": 37.88,
     "note": "刘挚故里，今河北东光",
     "resolved": true
    },
    {
     "name": "郓州",
     "lon": 116.03,
     "lat": 35.9,
     "note": "梁焘故里，今山东东平",
     "resolved": true
    }
   ]
  }
 }
};
