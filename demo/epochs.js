// 本文件由 tools/build.py 自动生成，请勿手工编辑。
// 权威数据源：data/scenes.json 顶层 epochs（时代背景七维全局参数表，历史资料可视化上屏）。
// 懒加载 chunk：解析期由 data.js bootstrap document.write 同步装载，无需前端改动。
window.SANDBOX_EPOCHS = {
 "ming_qing": {
  "label": "明清之际（1570–1683）",
  "status": "derived",
  "note": "辽东走廊从萨尔浒到宁远、松锦的军政网络易手期；小冰期叠加卫所崩坏。",
  "tech": {
   "productivity": {
    "value": "低—人畜力为主，火器初兴",
    "layer": "scholarship",
    "basis": "技术↔生产力：辽东驻军依赖屯田与驿站，非农具革命"
   },
   "energy_base": {
    "value": "生物能（人/畜/风/水）",
    "layer": "scholarship"
   },
   "key_techs": [
    "卫所屯田",
    "佛郎机/红夷炮(渐入)",
    "驿站驿传"
   ],
   "engineering": {
    "value": "边墙+堡坞+漕运",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "蒙古(林丹汗)",
    "朝鲜(藩属)",
    "日本(丰臣朝鲜之役)"
   ],
   "diplomatic_posture": "宗藩+九边防御",
   "external_threat": "后金崛起 / 壬辰倭乱余波",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "一条鞭法(万历)",
   "currency": "白银本位(美洲流入)",
   "market_integration": "运河—海运漕运命脉",
   "fiscal_health": {
    "value": "辽东军费透支+加派(辽饷)",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：加派直接决定边镇补给"
   }
  },
  "society": {
   "population_scale": "辽东卫所军户+民户，小冰期灾荒",
   "social_structure": [
    "军户",
    "民户",
    "女真羁縻"
   ],
   "standing_army_link": {
    "value": "卫所军制→兵额与户均绑定，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：军户即兵源，户数衰减=战力衰减"
   },
   "livelihood": {
    "value": "灾荒+加派→流民(李自成之源)",
    "layer": "inference"
   }
  },
  "doctrine": {
   "dominant_ideology": "程朱理学(官学)",
   "state_religion": "儒教(非国教但正统)",
   "knowledge_system": "科举/实学萌芽",
   "public_opinion": "清议/东林",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "辽东都司",
    "奴儿干都司(废)",
    "九边"
   ],
   "geographic_pivots": [
    "广宁",
    "沈阳",
    "辽阳",
    "赫图阿拉"
   ],
   "critical_nodes": [
    "抚顺关",
    "山海关"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "凭边墙+屯田守辽东，以夷制夷",
   "center_of_gravity": "辽阳—沈阳防线",
   "vulnerabilities": [
    "卫所崩坏",
    "小冰期粮荒",
    "党争误国"
   ],
   "windows": [
    "1618 后金破抚顺"
   ],
   "layer": "inference"
  }
 },
 "fiction": {
  "label": "虚构世界",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "song": {
  "label": "宋（960–1279）",
  "status": "derived",
  "note": "宋代（火器萌芽、纸币、文人政治）。",
  "tech": {
   "productivity": {
    "value": "农业+手工业(瓷器/纺织)高峰，火药武器化",
    "layer": "scholarship",
    "basis": "技术↔生产力"
   },
   "key_techs": [
    "火药武器",
    "指南针航海",
    "活字印刷"
   ]
  },
  "international": {
   "neighbors": [
    "辽/金",
    "西夏",
    "大理"
   ],
   "diplomatic_posture": "岁币/盟约",
   "external_threat": "辽金蒙",
   "layer": "scholarship"
  },
  "economy": {
   "currency": "铜钱+交子(世界最早纸币)",
   "market_integration": "突破坊市制",
   "layer": "scholarship"
  },
  "society": {
   "standing_army_link": {
    "value": "募兵(禁军)+更戍法，财政养兵→人口↔常驻军(财政视角)",
    "layer": "scholarship",
    "basis": "人口↔常驻军"
   },
   "social_structure": [
    "士农工商",
    "厢军/乡兵"
   ]
  },
  "doctrine": {
   "dominant_ideology": "理学(程朱)成型",
   "layer": "scholarship"
  },
  "anchors": {
   "geographic_pivots": [
    "开封/临安",
    "燕云(失)"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "守内虚外、重文抑武",
   "layer": "inference"
  }
 },
 "qin_han": {
  "label": "秦汉（前221–220）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "tang": {
  "label": "唐（618–907）",
  "status": "derived",
  "note": "唐代（均田/府兵、盛世与藩镇）。",
  "tech": {
   "productivity": {
    "value": "曲辕犁+筒车，农业跃升",
    "layer": "scholarship",
    "basis": "技术↔生产力"
   },
   "key_techs": [
    "雕版印刷",
    "大运河(承隋)"
   ]
  },
  "international": {
   "neighbors": [
    "突厥",
    "吐蕃",
    "回纥",
    "新罗",
    "日本"
   ],
   "diplomatic_posture": "天可汗/羁縻",
   "external_threat": "安史后藩镇",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "租庸调制→两税法",
   "layer": "scholarship"
  },
  "society": {
   "standing_army_link": {
    "value": "府兵制：兵农合一，均田民户即兵源→人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军"
   }
  },
  "doctrine": {
   "dominant_ideology": "儒释道并流",
   "layer": "scholarship"
  },
  "anchors": {
   "geographic_pivots": [
    "长安",
    "洛阳",
    "节度使藩镇"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "羁縻+藩镇，安史后由盛转衰",
   "layer": "inference"
  }
 },
 "ming": {
  "label": "明（1368–1644）",
  "status": "derived",
  "note": "明代（含万历朝鲜之役、九边、江南、西南土司等切片）。",
  "tech": {
   "productivity": {
    "value": "农业精耕+棉纺，人畜力为主",
    "layer": "scholarship",
    "basis": "技术↔生产力"
   },
   "key_techs": [
    "夯土/砖包边墙",
    "漕运船闸",
    "火器(神机营)"
   ]
  },
  "international": {
   "neighbors": [
    "蒙古",
    "女真",
    "日本",
    "朝鲜(藩属)"
   ],
   "diplomatic_posture": "宗藩+朝贡",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "一条鞭法(后期)",
   "currency": "白银本位",
   "market_integration": "运河—海运",
   "layer": "scholarship"
  },
  "society": {
   "standing_army_link": {
    "value": "卫所军户制→兵农合一，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军"
   },
   "social_structure": [
    "军户",
    "民户",
    "匠户",
    "灶户"
   ]
  },
  "doctrine": {
   "dominant_ideology": "程朱理学(官学)/阳明心学(民间)",
   "layer": "scholarship"
  },
  "anchors": {
   "geographic_pivots": [
    "北京",
    "南京",
    "九边重镇"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "守内虚外、以文驭武",
   "layer": "inference"
  }
 },
 "qing_modern": {
  "label": "清及近代（1685–1900）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "guangzhong": {
  "label": "秦末（前209–前202）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "huabei": {
  "label": "近现代（1911–1950）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "warring_states": {
  "label": "战国（前475–前221）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "three_kingdoms": {
  "label": "三国（190–280）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "two_jin": {
  "label": "两晋南北朝（265–589）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "sui_tang": {
  "label": "隋唐（581–907）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "yuan_ming": {
  "label": "元明之际（1363±）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "cross_dynastic": {
  "label": "跨朝代（以黄河为例）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "sui_yuan": {
  "label": "隋唐—元（581–1368）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "qin": {
  "label": "秦（前230–前207）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 },
 "han": {
  "label": "汉（前202–220）",
  "status": "derived",
  "note": "汉代（含黄巾与流民）。",
  "tech": {
   "productivity": {
    "value": "牛耕普及+耧车，铁器推广",
    "layer": "scholarship",
    "basis": "技术↔生产力"
   }
  },
  "international": {
   "neighbors": [
    "匈奴",
    "西域诸国",
    "南越",
    "朝鲜"
   ],
   "diplomatic_posture": "和亲/征伐/通西域",
   "external_threat": "匈奴",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "田租+算赋口赋",
   "currency": "五铢钱",
   "market_integration": "盐铁官营",
   "layer": "scholarship"
  },
  "society": {
   "standing_army_link": {
    "value": "征兵(郡国兵)+东汉募兵，黄巾后军阀私兵→人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军"
   },
   "livelihood": {
    "value": "黄巾→流民，坞堡自保",
    "layer": "inference"
   }
  },
  "doctrine": {
   "dominant_ideology": "独尊儒术(汉武)",
   "layer": "scholarship"
  },
  "anchors": {
   "geographic_pivots": [
    "长安",
    "洛阳"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "强干弱枝、经略西域",
   "layer": "inference"
  }
 },
 "qing": {
  "label": "清（1644–1912）",
  "status": "derived",
  "note": "清代（入关后至近代）。",
  "tech": {
   "productivity": {
    "value": "承明农技，摊丁入亩促垦",
    "layer": "scholarship",
    "basis": "技术↔生产力"
   },
   "key_techs": [
    "绿营/八旗驻防",
    "火器渐制"
   ]
  },
  "international": {
   "neighbors": [
    "准噶尔",
    "俄罗斯",
    "藩属朝贡国"
   ],
   "diplomatic_posture": "天朝朝贡+条约(后期)",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "摊丁入亩",
   "currency": "白银+铜钱",
   "market_integration": "全国市场成型",
   "layer": "scholarship"
  },
  "society": {
   "standing_army_link": {
    "value": "八旗+绿营，旗民分治，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军"
   },
   "social_structure": [
    "旗人",
    "民人",
    "苗瑶土司"
   ]
  },
  "doctrine": {
   "dominant_ideology": "程朱理学+钦定典籍",
   "layer": "scholarship"
  },
  "anchors": {
   "geographic_pivots": [
    "北京",
    "承德",
    "边疆将军辖区"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "满汉并治、边疆封禁与拓张并行",
   "layer": "inference"
  }
 },
 "yuan": {
  "label": "元（1271–1368）",
  "status": "stub",
  "note": "待按史料扩展：技术↔生产力、人口↔常驻军 等关联推断（见 docs/unified_dimensions.md 扩展方法论）。",
  "tech": {
   "_gap": "待补：关键技术/生产力水平（技术↔生产力）"
  },
  "international": {
   "_gap": "待补：邻邦/外交态势"
  },
  "economy": {
   "_gap": "待补：赋税/货币/市场整合"
  },
  "society": {
   "_gap": "待补：人口规模/阶层/常驻军（人口↔常驻军）"
  },
  "doctrine": {
   "_gap": "待补：主流意识形态/知识体系"
  },
  "anchors": {
   "_gap": "待补：关键制度/地理支点"
  },
  "strategic": {
   "_gap": "待补：大战略/重心/脆弱性"
  }
 }
};
window.SANDBOX_DATA.epochs = window.SANDBOX_EPOCHS;
