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
  "label": "虚构/合成世界（非真实历史）",
  "status": "synthetic",
  "note": "由叙事/推演生成的架空世界；不对应真实朝代与地理，维度为内部分类占位。",
  "tech": {
   "productivity": {
    "value": "由设定决定",
    "layer": "synthetic"
   },
   "energy_base": {
    "value": "由设定决定",
    "layer": "synthetic"
   },
   "key_techs": [
    "叙事设定"
   ],
   "engineering": {
    "value": "由设定决定",
    "layer": "synthetic"
   }
  },
  "international": {
   "neighbors": [
    "由设定决定"
   ],
   "diplomatic_posture": "由设定决定",
   "external_threat": "由设定决定",
   "layer": "synthetic"
  },
  "economy": {
   "tax_system": "由设定决定",
   "currency": "由设定决定",
   "market_integration": "由设定决定",
   "fiscal_health": {
    "value": "由设定决定",
    "layer": "synthetic"
   }
  },
  "society": {
   "population_scale": "由设定决定",
   "social_structure": [
    "由设定决定"
   ],
   "standing_army_link": {
    "value": "由设定决定",
    "layer": "synthetic"
   },
   "livelihood": {
    "value": "由设定决定",
    "layer": "synthetic"
   }
  },
  "doctrine": {
   "dominant_ideology": "由设定决定",
   "state_religion": "由设定决定",
   "knowledge_system": "由设定决定",
   "public_opinion": "由设定决定",
   "layer": "synthetic"
  },
  "anchors": {
   "key_institutions": [
    "由设定决定"
   ],
   "geographic_pivots": [
    "由设定决定"
   ],
   "critical_nodes": [
    "由设定决定"
   ],
   "layer": "synthetic"
  },
  "strategic": {
   "grand_strategy": "由设定决定",
   "center_of_gravity": "由设定决定",
   "vulnerabilities": [
    "由设定决定"
   ],
   "windows": [
    "由设定决定"
   ],
   "layer": "synthetic"
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
  "status": "derived",
  "note": "帝制奠基：郡县、察举、独尊儒术；北击匈奴，南拓岭南，丝绸之路开通。",
  "tech": {
   "productivity": {
    "value": "铁器牛耕，代田法，水利(龙首渠)",
    "layer": "scholarship",
    "basis": "技术↔生产力：铁农具普及"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "造纸(蔡伦)",
    "冶铁官营",
    "长城/直道"
   ],
   "engineering": {
    "value": "长城/驰道/灵渠/漕渠",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "匈奴",
    "西域诸国",
    "朝鲜/越南"
   ],
   "diplomatic_posture": "和亲+征伐+都护",
   "external_threat": "匈奴",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "田租口赋+算缗",
   "currency": "五铢钱(汉)",
   "market_integration": "关中—江南+丝路",
   "fiscal_health": {
    "value": "汉武竭泽→昭宣休养",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：远征耗府库"
   }
  },
  "society": {
   "population_scale": "汉约5600万(峰值)",
   "social_structure": [
    "编户齐民",
    "豪强地主"
   ],
   "standing_army_link": {
    "value": "征发+屯田兵，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：屯田即兵源"
   },
   "livelihood": {
    "value": "武帝徭赋重→昭宣宽政",
    "layer": "inference"
   }
  },
  "doctrine": {
   "dominant_ideology": "黄老→独尊儒术(武帝)",
   "state_religion": "儒表+郊祀",
   "knowledge_system": "太学/察举",
   "public_opinion": "清议(东汉)",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "郡县",
    "刺史",
    "察举"
   ],
   "geographic_pivots": [
    "长安",
    "洛阳"
   ],
   "critical_nodes": [
    "河西四郡",
    "玉门关"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "强干弱枝，守北拓西",
   "center_of_gravity": "关中",
   "vulnerabilities": [
    "外戚宦官",
    "豪强",
    "武帝耗竭"
   ],
   "windows": [
    "前119 漠北决战"
   ],
   "layer": "inference"
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
  "label": "清—近现代（1840–1912）",
  "status": "derived",
  "note": "内忧外患：鸦片战争、洋务运动、甲午、新政；帝制终结，列强瓜分。",
  "tech": {
   "productivity": {
    "value": "洋务运动机器工业，铁路电报",
    "layer": "scholarship",
    "basis": "技术↔生产力：近代工业萌"
   },
   "energy_base": {
    "value": "生物能+蒸汽初入",
    "layer": "scholarship"
   },
   "key_techs": [
    "洋枪队",
    "江南制造局",
    "铁路"
   ],
   "engineering": {
    "value": "炮台/铁路/电报",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "英法俄日美等列强"
   ],
   "diplomatic_posture": "条约体系+朝贡残影",
   "external_threat": "割地赔款/瓜分",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "地丁银+关税(失自主)",
   "currency": "银铜并行+外币",
   "market_integration": "开埠通商口岸",
   "fiscal_health": {
    "value": "赔款巨债财政崩",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：赔款压垮"
   }
  },
  "society": {
   "population_scale": "约4亿(同治后)",
   "social_structure": [
    "旗民",
    "绅商",
    "农民起义"
   ],
   "standing_army_link": {
    "value": "八旗绿营溃→新军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：编练新军"
   },
   "livelihood": {
    "value": "太平天国+灾荒",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "儒术+中体西用",
   "state_religion": "儒教",
   "knowledge_system": "科举→废科举(1905)",
   "public_opinion": "维新/革命舆论",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "总理衙门",
    "督抚",
    "新军"
   ],
   "geographic_pivots": [
    "北京",
    "南京"
   ],
   "critical_nodes": [
    "通商口岸",
    "台湾"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "剿抚兼施，师夷长技",
   "center_of_gravity": "北京",
   "vulnerabilities": [
    "外债",
    "旗营腐",
    "革命"
   ],
   "windows": [
    "1894 甲午",
    "1911 辛亥"
   ],
   "layer": "inference"
  }
 },
 "guangzhong": {
  "label": "关中（周秦汉唐基业之地）",
  "status": "derived",
  "note": "四塞之地，膏壤沃野；周秦汉唐皆都于此，漕运依赖黄河—渭水。",
  "tech": {
   "productivity": {
    "value": "郑国渠/白渠溉田，垄作",
    "layer": "scholarship",
    "basis": "技术↔生产力：渠堰灌溉"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "渠堰",
    "长安城规"
   ],
   "engineering": {
    "value": "长城/驰道/运河关中段",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "河西/草原游牧"
   ],
   "diplomatic_posture": "据关中以临东方",
   "external_threat": "游牧南下(萧关/蒲津)",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "关中都漕依赖",
   "currency": "随朝代",
   "market_integration": "渭河水运",
   "fiscal_health": {
    "value": "漕运成本→东都洛阳分流",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：漕运供给京畿"
   }
  },
  "society": {
   "population_scale": "历代京畿稠密",
   "social_structure": [
    "京畿编户",
    "关陇集团(隋唐)"
   ],
   "standing_army_link": {
    "value": "府兵源地(关中本位)",
    "layer": "scholarship",
    "basis": "人口↔常驻军：关中府兵"
   },
   "livelihood": {
    "value": "漕运供给",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "随王朝",
   "state_religion": "随王朝",
   "knowledge_system": "京畿学宫",
   "public_opinion": "关陇集团",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "宗周/秦都/汉唐长安"
   ],
   "geographic_pivots": [
    "长安",
    "函谷/潼关"
   ],
   "critical_nodes": [
    "萧关",
    "蒲津渡"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "凭崤函据关中",
   "center_of_gravity": "长安",
   "vulnerabilities": [
    "漕运瓶颈",
    "东患"
   ],
   "windows": [
    "历代东出"
   ],
   "layer": "inference"
  }
 },
 "huabei": {
  "label": "华北（中原腹心）",
  "status": "derived",
  "note": "黄河中下游农耕核心，王朝更替主战场；大运河命脉，兵家必争。",
  "tech": {
   "productivity": {
    "value": "旱作(粟麦)，井渠",
    "layer": "scholarship",
    "basis": "技术↔生产力：旱作农业"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "黄河堤工",
    "大运河"
   ],
   "engineering": {
    "value": "黄河堤防/运河",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "游牧(北)",
    "江淮(南)"
   ],
   "diplomatic_posture": "南北枢纽",
   "external_threat": "北族南下/河患",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "田赋重区",
   "currency": "随朝代",
   "market_integration": "运河枢纽",
   "fiscal_health": {
    "value": "河患+军需",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：运河漕粮"
   }
  },
  "society": {
   "population_scale": "人口稠密",
   "social_structure": [
    "编户",
    "流民(河患)"
   ],
   "standing_army_link": {
    "value": "中原兵源",
    "layer": "scholarship",
    "basis": "人口↔常驻军：中原粮兵"
   },
   "livelihood": {
    "value": "黄河改道灾荒",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "随王朝",
   "state_religion": "随王朝",
   "knowledge_system": "中原儒学",
   "public_opinion": "随世",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "汴京/洛阳/燕京"
   ],
   "geographic_pivots": [
    "开封",
    "洛阳",
    "北京"
   ],
   "critical_nodes": [
    "黄河渡",
    "运河闸"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "控中原以制天下",
   "center_of_gravity": "中原",
   "vulnerabilities": [
    "河患",
    "南北拉锯"
   ],
   "windows": [
    "历代定都"
   ],
   "layer": "inference"
  }
 },
 "warring_states": {
  "label": "战国（前475–前221）",
  "status": "derived",
  "note": "七雄并立，变法图强；铁器牛耕普及，百家争鸣，征发兵役制。",
  "tech": {
   "productivity": {
    "value": "铁农具普及，垄作法",
    "layer": "scholarship",
    "basis": "技术↔生产力：铁器革命"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "铸铁",
    "都江堰/郑国渠",
    "弩"
   ],
   "engineering": {
    "value": "长城(秦赵燕)+水利",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "匈奴",
    "东胡",
    "百越"
   ],
   "diplomatic_posture": "合纵连横",
   "external_threat": "游牧南下",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "亩税/军赋",
   "currency": "刀布蚁鼻钱(列国异币)",
   "market_integration": "列国市易",
   "fiscal_health": {
    "value": "战费高昂→税重",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：远征耗国"
   }
  },
  "society": {
   "population_scale": "约2000–3000万",
   "social_structure": [
    "国人",
    "野人",
    "军功爵制"
   ],
   "standing_army_link": {
    "value": "征兵+军功爵，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：军功爵激励"
   },
   "livelihood": {
    "value": "战乱+赋重",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "百家争鸣(儒道墨法兵)",
   "state_religion": "宗庙祭祀",
   "knowledge_system": "私学兴起",
   "public_opinion": "士论活跃",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "郡县萌芽",
    "军功爵"
   ],
   "geographic_pivots": [
    "函谷关",
    "邯郸",
    "临淄"
   ],
   "critical_nodes": [
    "长平"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "变法强兵，兼并弱小",
   "center_of_gravity": "关中(秦)/中原",
   "vulnerabilities": [
    "国力耗竭",
    "民疲"
   ],
   "windows": [
    "前260 长平"
   ],
   "layer": "inference"
  }
 },
 "three_kingdoms": {
  "label": "三国（220–280）",
  "status": "derived",
  "note": "汉室崩裂，魏蜀吴鼎立；屯田养兵，门阀初起。",
  "tech": {
   "productivity": {
    "value": "战乱凋敝，陂塘灌溉",
    "layer": "scholarship",
    "basis": "技术↔生产力：屯田复耕"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "屯田制",
    "翻车(灌溉)",
    "马钧机械"
   ],
   "engineering": {
    "value": "运河/城垒",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "乌桓",
    "鲜卑",
    "山越",
    "辽东公孙"
   ],
   "diplomatic_posture": "联盟抗强(吴蜀)",
   "external_threat": "北方游牧",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "租调制(曹魏)",
   "currency": "五铢(魏)/大泉(吴)",
   "market_integration": "区域割据",
   "fiscal_health": {
    "value": "屯田支撑军需",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：屯田即补给"
   }
  },
  "society": {
   "population_scale": "骤减(东汉末大减，约560万户→锐减)",
   "social_structure": [
    "士族",
    "部曲",
    "流民"
   ],
   "standing_army_link": {
    "value": "世兵制+屯田兵，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：世兵承袭"
   },
   "livelihood": {
    "value": "战乱饥馑",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "名教崩坏，玄学萌孽",
   "state_religion": "儒表法里",
   "knowledge_system": "经学衰微",
   "public_opinion": "正统之争",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "丞相(蜀)",
    "都督(吴)",
    "中军(魏)"
   ],
   "geographic_pivots": [
    "长安/洛阳",
    "成都",
    "建业"
   ],
   "critical_nodes": [
    "赤壁",
    "街亭"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "魏守中原蓄力，吴蜀联盟制衡",
   "center_of_gravity": "中原(魏)",
   "vulnerabilities": [
    "蜀弱",
    "吴内斗"
   ],
   "windows": [
    "208 赤壁"
   ],
   "layer": "inference"
  }
 },
 "two_jin": {
  "label": "两晋（265–420）",
  "status": "derived",
  "note": "西晋短暂统一旋乱，永嘉南渡；门阀政治，五胡乱华。",
  "tech": {
   "productivity": {
    "value": "陂塘+深耕，江南开发始",
    "layer": "scholarship",
    "basis": "技术↔生产力：南扩"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "翻车普及",
    "造纸改进"
   ],
   "engineering": {
    "value": "运河",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "匈奴",
    "鲜卑",
    "羯",
    "氐",
    "羌(五胡)"
   ],
   "diplomatic_posture": "偏安妥协",
   "external_threat": "五胡内迁叛乱",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "占田课田制",
   "currency": "钱废谷帛交易",
   "market_integration": "北破南移",
   "fiscal_health": {
    "value": "士族兼并",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：田制崩"
   }
  },
  "society": {
   "population_scale": "南渡衣冠，人口大流动",
   "social_structure": [
    "门阀士族",
    "部曲佃客",
    "流民"
   ],
   "standing_army_link": {
    "value": "世兵溃散→私兵部曲",
    "layer": "scholarship",
    "basis": "人口↔常驻军：部曲化"
   },
   "livelihood": {
    "value": "永嘉之乱饥馑",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "玄学清谈+儒道交融",
   "state_religion": "佛道初兴",
   "knowledge_system": "九品中正",
   "public_opinion": "清谈误国论",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "九品中正",
    "门阀"
   ],
   "geographic_pivots": [
    "洛阳",
    "建康"
   ],
   "critical_nodes": [
    "淝水"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "门阀共治，北族牵制",
   "center_of_gravity": "江东(东晋)",
   "vulnerabilities": [
    "士族内斗",
    "流民帅"
   ],
   "windows": [
    "383 淝水"
   ],
   "layer": "inference"
  }
 },
 "sui_tang": {
  "label": "隋唐（581–907）",
  "status": "derived",
  "note": "重归一统的盛世框架：科举、运河、府兵、均田；开放包容，胡汉交融。",
  "tech": {
   "productivity": {
    "value": "曲辕犁，江南稻作，手工业鼎盛",
    "layer": "scholarship",
    "basis": "技术↔生产力：精耕+手工业"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "大运河",
    "雕版印刷",
    "唐三彩/丝绸"
   ],
   "engineering": {
    "value": "长安城/运河/驿道",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "突厥",
    "吐蕃",
    "高句丽",
    "日本/新罗",
    "大食"
   ],
   "diplomatic_posture": "天可汗宗藩+丝路",
   "external_threat": "突厥/吐蕃/安史内乱",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "租庸调→两税法(780)",
   "currency": "开元通宝",
   "market_integration": "运河+丝路商网",
   "fiscal_health": {
    "value": "安史后藩镇割据财竭",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：藩镇截留"
   }
  },
  "society": {
   "population_scale": "盛唐约8000万",
   "social_structure": [
    "士族衰落",
    "科举士大夫",
    "部曲"
   ],
   "standing_army_link": {
    "value": "府兵→募兵(彍骑)，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：府兵农战制"
   },
   "livelihood": {
    "value": "均田崩→客户流民",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "儒道释三教并行",
   "state_religion": "佛道鼎盛",
   "knowledge_system": "科举诗赋",
   "public_opinion": "谏官/清议",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "三省六部",
    "科举",
    "节度使"
   ],
   "geographic_pivots": [
    "长安",
    "洛阳",
    "范阳"
   ],
   "critical_nodes": [
    "安西四镇",
    "潼关"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "内重外轻→安史后外重内轻",
   "center_of_gravity": "长安—洛阳",
   "vulnerabilities": [
    "藩镇",
    "均田瓦解",
    "党争(牛李)"
   ],
   "windows": [
    "755 安史之乱"
   ],
   "layer": "inference"
  }
 },
 "yuan_ming": {
  "label": "元明（1271–1644）",
  "status": "derived",
  "note": "从游牧一统到汉人复国：行省→卫所，钞法→白银，海禁与朝贡贸易交替。",
  "tech": {
   "productivity": {
    "value": "棉纺普及，圩田，火器本土化",
    "layer": "scholarship",
    "basis": "技术↔生产力：棉纺+火器"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "卫所屯田",
    "水罗盘航海",
    "佛郎机炮"
   ],
   "engineering": {
    "value": "长城重修/漕运/郑和宝船",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "蒙古(北元)",
    "倭",
    "西洋诸国"
   ],
   "diplomatic_posture": "朝贡+海禁(明)",
   "external_threat": "北虏南倭",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "一条鞭法(明后期)",
   "currency": "白银本位(明)",
   "market_integration": "运河+朝贡海贸",
   "fiscal_health": {
    "value": "军费+宗藩赏赐重",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：九边军费"
   }
  },
  "society": {
   "population_scale": "明约1.5–2亿",
   "social_structure": [
    "军户",
    "民户",
    "商帮兴起"
   ],
   "standing_army_link": {
    "value": "卫所军制→募兵(明后期)",
    "layer": "scholarship",
    "basis": "人口↔常驻军：卫所农战"
   },
   "livelihood": {
    "value": "加派+灾荒→流民",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "程朱理学官学+心学(王守仁)",
   "state_religion": "儒教正统",
   "knowledge_system": "科举八股",
   "public_opinion": "清议/东林",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "行省(承元)",
    "卫所",
    "内阁"
   ],
   "geographic_pivots": [
    "大都/北京",
    "南京"
   ],
   "critical_nodes": [
    "山海关",
    "沿海卫所"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "守北御虏，海禁自守",
   "center_of_gravity": "北京",
   "vulnerabilities": [
    "卫所腐",
    "北虏南倭"
   ],
   "windows": [
    "1449 土木堡"
   ],
   "layer": "inference"
  }
 },
 "cross_dynastic": {
  "label": "跨朝代（长时段制度/技术演化）",
  "status": "derived",
  "note": "贯穿多朝的主题脉络：中央集权、科举、运河、兵制、赋税的演化主线。",
  "tech": {
   "productivity": {
    "value": "铁器→精耕→棉纺→近代机器",
    "layer": "scholarship",
    "basis": "技术↔生产力：长时段跃升"
   },
   "energy_base": {
    "value": "生物能→蒸汽",
    "layer": "scholarship"
   },
   "key_techs": [
    "造纸/印刷/火药/指南针(四大发明)"
   ],
   "engineering": {
    "value": "长城/运河/城防演进",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "草原/绿洲/海洋诸邻"
   ],
   "diplomatic_posture": "宗藩→条约",
   "external_threat": "游牧/列强交替",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "租庸调→两税→一条鞭→地丁",
   "currency": "铜钱→纸币→白银",
   "market_integration": "运河+丝路+海贸",
   "fiscal_health": {
    "value": "赋役主线演化",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：长时段"
   }
  },
  "society": {
   "population_scale": "2000万→4亿",
   "social_structure": [
    "编户→士族→士大夫→绅商"
   ],
   "standing_army_link": {
    "value": "征发→府兵→募兵→新军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：兵制演化"
   },
   "livelihood": {
    "value": "治乱循环",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "百家→独尊儒→三教合流→中体西用",
   "state_religion": "儒为正统",
   "knowledge_system": "察举→科举→学堂",
   "public_opinion": "清议→舆论",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "郡县→行省",
    "科举",
    "中枢(三公→三省→内阁)"
   ],
   "geographic_pivots": [
    "长安/洛阳/北京"
   ],
   "critical_nodes": [
    "运河/关隘"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "内重外轻→外重内轻循环",
   "center_of_gravity": "关中→中原→燕京",
   "vulnerabilities": [
    "边患/民变/财政"
   ],
   "windows": [
    "历代转折"
   ],
   "layer": "inference"
  }
 },
 "sui_yuan": {
  "label": "宋元（960–1368）",
  "status": "derived",
  "note": "文官政治巅峰与游牧征服：科举士大夫、市舶贸易、火药兵器；蒙元一统。",
  "tech": {
   "productivity": {
    "value": "梯田圩田，煤铁革命",
    "layer": "scholarship",
    "basis": "技术↔生产力：煤铁+农艺"
   },
   "energy_base": {
    "value": "生物能+煤",
    "layer": "scholarship"
   },
   "key_techs": [
    "活字印刷",
    "指南针航海",
    "火药武器",
    "水运仪象台"
   ],
   "engineering": {
    "value": "泉州港/大都/运河",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "辽金夏蒙",
    "高丽",
    "日本",
    "大食/波斯"
   ],
   "diplomatic_posture": "岁币+市舶+宗藩",
   "external_threat": "契丹女真蒙古依次南下",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "两税法→王安石变法→钞法(元)",
   "currency": "交子(世界第一纸币)/中统钞",
   "market_integration": "海上丝路+运河",
   "fiscal_health": {
    "value": "冗兵冗官/钞贬",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：养兵重"
   }
  },
  "society": {
   "population_scale": "宋约1亿，元约6000万",
   "social_structure": [
    "士大夫",
    "坊郭市户",
    "佃客"
   ],
   "standing_army_link": {
    "value": "募兵(宋)→探马赤军(元)",
    "layer": "scholarship",
    "basis": "人口↔常驻军：募兵制"
   },
   "livelihood": {
    "value": "王安石均输/客户增多",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "理学(程朱)确立",
   "state_religion": "儒释道合流",
   "knowledge_system": "书院+科举",
   "public_opinion": "党争(新旧)/士论",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "枢密院",
    "市舶司",
    "行省(元)"
   ],
   "geographic_pivots": [
    "汴京",
    "临安",
    "大都"
   ],
   "critical_nodes": [
    "襄阳",
    "崖山"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "守内虚外(宋)/行省控驭(元)",
   "center_of_gravity": "中原—江南",
   "vulnerabilities": [
    "重文轻武",
    "北族铁骑"
   ],
   "windows": [
    "1276 临安陷"
   ],
   "layer": "inference"
  }
 },
 "qin": {
  "label": "秦（前221–前207）",
  "status": "derived",
  "note": "六国尽灭，郡县一统；书同文车同轨，然急政暴敛二世而亡。",
  "tech": {
   "productivity": {
    "value": "低—铁器牛耕推广，郑国渠都江堰兴修",
    "layer": "scholarship",
    "basis": "技术↔生产力：农田水利初成"
   },
   "energy_base": {
    "value": "生物能(人畜)",
    "layer": "scholarship"
   },
   "key_techs": [
    "中央集权官僚制",
    "驰道驿传",
    "兵器标准化(物勒工名)"
   ],
   "engineering": {
    "value": "长城/直道/灵渠",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "匈奴"
   ],
   "diplomatic_posture": "北筑长城防御",
   "external_threat": "匈奴南侵",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "田租口赋力役繁重",
   "currency": "半两钱(圆形方孔)",
   "market_integration": "统一度量衡",
   "fiscal_health": {
    "value": "徭赋极重→民变",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：戍徭直接拖垮民力"
   }
  },
  "society": {
   "population_scale": "约2000万，六国遗民",
   "social_structure": [
    "黔首(编户齐民)",
    "刑徒"
   ],
   "standing_army_link": {
    "value": "征发制：耕战合一，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：军功爵激励农战"
   },
   "livelihood": {
    "value": "苛政+戍徭→陈胜吴广",
    "layer": "inference"
   }
  },
  "doctrine": {
   "dominant_ideology": "法家(焚书坑儒)",
   "state_religion": "无国教/山川祭祀",
   "knowledge_system": "以吏为师",
   "public_opinion": "坑儒禁议",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "郡县制",
    "三公九卿"
   ],
   "geographic_pivots": [
    "咸阳",
    "函谷关"
   ],
   "critical_nodes": [
    "长城北线"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "以法御天下，强干弱枝",
   "center_of_gravity": "关中—咸阳",
   "vulnerabilities": [
    "徭役过重",
    "六国余怨",
    "二世昏暴"
   ],
   "windows": [
    "前209 陈胜起义"
   ],
   "layer": "inference"
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
  "status": "derived",
  "note": "蒙元一统，行省建制；四等人制，钞法紊乱，红巾起义亡。",
  "tech": {
   "productivity": {
    "value": "屯田+棉纺(黄道婆)",
    "layer": "scholarship",
    "basis": "技术↔生产力：棉纺革命"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "火铳",
    "大都与运河",
    "海运漕粮"
   ],
   "engineering": {
    "value": "大都/运河/海运",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "钦察/察合台汗国",
    "高丽",
    "日本(征日)"
   ],
   "diplomatic_posture": "宗藩+驿站网",
   "external_threat": "内部汗国离心",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "税粮+科差",
   "currency": "中统钞/至元钞(滥发贬)",
   "market_integration": "驿站贯通欧亚",
   "fiscal_health": {
    "value": "钞法崩→财政危",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：钞贬失控"
   }
  },
  "society": {
   "population_scale": "约6000万",
   "social_structure": [
    "四等人(蒙色目汉南)",
    "驱口(奴)",
    "军户"
   ],
   "standing_army_link": {
    "value": "探马赤军+军户",
    "layer": "scholarship",
    "basis": "人口↔常驻军：军户世袭"
   },
   "livelihood": {
    "value": "灾荒+苛敛→红巾",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "儒术治国(后期)",
   "state_religion": "佛道萨满并用",
   "knowledge_system": "科举中断复行",
   "public_opinion": "士人边缘",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "中书省",
    "行省",
    "宣政院"
   ],
   "geographic_pivots": [
    "大都",
    "上都"
   ],
   "critical_nodes": [
    "运河枢纽"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "行省分权，以蒙制汉",
   "center_of_gravity": "大都",
   "vulnerabilities": [
    "四等矛盾",
    "钞贬民变"
   ],
   "windows": [
    "1351 红巾起"
   ],
   "layer": "inference"
  }
 },
 "sui": {
  "label": "隋（581–618）",
  "status": "derived",
  "note": "重归一统，创科举开运河；然三征高句丽、劳役过甚而速亡。",
  "tech": {
   "productivity": {
    "value": "均田制，江南开发",
    "layer": "scholarship",
    "basis": "技术↔生产力：运河贯通"
   },
   "energy_base": {
    "value": "生物能",
    "layer": "scholarship"
   },
   "key_techs": [
    "大运河",
    "赵州桥(李春)",
    "雕版雏形"
   ],
   "engineering": {
    "value": "大运河/长城/东都",
    "layer": "scholarship"
   }
  },
  "international": {
   "neighbors": [
    "突厥",
    "高句丽",
    "吐谷浑"
   ],
   "diplomatic_posture": "羁縻+征伐",
   "external_threat": "突厥分裂/高句丽抗命",
   "layer": "scholarship"
  },
  "economy": {
   "tax_system": "租庸调制",
   "currency": "五铢钱(统一)",
   "market_integration": "运河贯通南北",
   "fiscal_health": {
    "value": "役重财竭",
    "layer": "scholarship",
    "basis": "赋税↔后勤半径：征辽耗竭"
   }
  },
  "society": {
   "population_scale": "约4500万(大业)",
   "social_structure": [
    "均田农民",
    "坊郭户"
   ],
   "standing_army_link": {
    "value": "府兵雏形+征发，人口↔常驻军",
    "layer": "scholarship",
    "basis": "人口↔常驻军：府兵农战"
   },
   "livelihood": {
    "value": "征辽+营建→民变",
    "layer": "scholarship"
   }
  },
  "doctrine": {
   "dominant_ideology": "儒术复兴",
   "state_religion": "佛道并行",
   "knowledge_system": "科举制创",
   "public_opinion": "进士科争议",
   "layer": "scholarship"
  },
  "anchors": {
   "key_institutions": [
    "科举",
    "三省六部雏形"
   ],
   "geographic_pivots": [
    "大兴(长安)",
    "洛阳",
    "江都"
   ],
   "critical_nodes": [
    "涿郡(征辽基地)"
   ],
   "layer": "scholarship"
  },
  "strategic": {
   "grand_strategy": "居中驭四方，运河控江南",
   "center_of_gravity": "关中东都轴线",
   "vulnerabilities": [
    "三征高句丽",
    "徭役极重"
   ],
   "windows": [
    "612 征辽失利"
   ],
   "layer": "inference"
  }
 }
};
window.SANDBOX_DATA.epochs = window.SANDBOX_EPOCHS;
