// 本文件由 tools/build.py 自动生成（切片 feishui_llm），请勿手工编辑。
// 加载后把本切片 bundle 挂到 window.SANDBOX_SLICES["feishui_llm"]。
(window.SANDBOX_SLICES = window.SANDBOX_SLICES || {});
window.SANDBOX_SLICES["feishui_llm"] = {
 "meta": {
  "kind": "battle",
  "region": "two_jin",
  "title": "淝水之战（LLM 抽取·人工校订）",
  "dossier_label": "淝水之战（LLM 抽取落库）",
  "subtitle": "太元八年（383）· 东晋（谢安/谢玄） vs 前秦（苻坚）",
  "primary_place": "feishui",
  "dossier_event": "event:ev_feishui_llm_03",
  "vocab_pack": "feishui_llm",
  "terrain_grid": "china_coarse",
  "lead": "淝水之战（383，东晋太元八年／前秦建元十九年）：前秦苻坚统一北方后征大军南下，东晋以谢安总揽朝议、谢石/谢玄率北府兵御敌；洛涧刘牢之斩梁成首捷，淝水对峙中朱序阵后呼『秦军败矣』致秦军自溃，苻融死、苻坚中箭奔淮北，东晋以少胜多，前秦瓦解、北方再分裂。本切片是「真实 LLM 抽取（DeepSeek）+ 人工校订落库」复用模式的第二例：LLM 依《资治通鉴》淝水叙事抽出 15 条断言（8 人/3 事/6 地），经 curate_emit 门禁报 BLOCK 0 / WARN 23（引文待核 19、维度兜底 4），再由人工逐条校订——把全为 dims=[6] 的 conform 兜底值改为按内容判定的真实维度，把 LLM 误填的来源 party『北宋·官修』拆为参战方（东晋/前秦/第三方/诸胡），补显式坐标，并增 2 名诸胡人物（慕容垂/姚苌）与第 2 源《十六国春秋》辑本以承载前秦视角缺口。未经校订的 LLM 产物一律不入库。",
  "parties_note": "《资治通鉴》为北宋官修综合叙述，以东晋为叙事主轴，故『东晋』桶相对充实；前秦内部真实决策（如苻坚拒权翼、石越、苻融之谏）多经东晋/后世记载折射，独立声音缺位——缺口显式保留，不伪造。朱序原东晋襄阳守将、降前秦，淝水为晋内应，非前秦核心亦非东晋阵中，独立成『第三方』桶（与 guandu 刘备同逻辑）；慕容垂/姚苌为前秦内部鲜卑/羌首领，战后叛秦立国，独立成『诸胡』桶。立场分桶是产品核心，塞错即伪造立场（v0.87 已修同类暗病）。系统不裁决，只并列。",
  "subject_names": {
   "event:ev_feishui_llm_01": "洛涧之战",
   "event:ev_feishui_llm_02": "淝水对峙",
   "event:ev_feishui_llm_03": "淝水决战·秦军自溃",
   "event:ev_feishui_llm_04": "前秦瓦解·北方再分裂",
   "event:ev_feishui_llm_05": "谢安得捷报",
   "place:feishui": "淝水",
   "place:luojian": "洛涧",
   "place:shouyang": "寿阳",
   "place:bagongshan": "八公山",
   "place:huaibei": "淮北",
   "place:jiankang": "建康",
   "person:xie_an": "谢安",
   "person:xie_shi": "谢石",
   "person:xie_xuan": "谢玄",
   "person:liu_laozhi": "刘牢之",
   "person:fu_jian": "苻坚",
   "person:fu_rong": "苻融",
   "person:liang_cheng": "梁成",
   "person:zhu_xu": "朱序",
   "person:mu_rongchui": "慕容垂",
   "person:yao_chang": "姚苌"
  },
  "dims": [
   1,
   2,
   3,
   4,
   5,
   6
  ],
  "epoch": "two_jin",
  "scale_tier": "operational",
  "strategic": {
   "political_cohesion": {
    "from": [
     "strategic",
     "doctrine"
    ],
    "from_dims": [
     3,
     5
    ],
    "layer": "inference",
    "note": "制度+思想→朝堂凝聚力（R6 courtCohesion）"
   },
   "material_logistics": {
    "from": [
     "tech",
     "economy"
    ],
    "from_dims": [
     2,
     3
    ],
    "layer": "inference",
    "note": "技术↔生产力；赋税/漕运→后勤半径"
   },
   "population_mobilization": {
    "from": [
     "society"
    ],
    "from_dims": [
     4
    ],
    "layer": "inference",
    "note": "人口↔常驻军；部族动员潜力"
   },
   "geopolitical_strategy": {
    "from": [
     "international",
     "anchors"
    ],
    "from_dims": [
     1,
     6
    ],
    "layer": "inference",
    "note": "地形/关隘/外交→战略重心与窗口"
   }
  },
  "province": "anhui",
  "page": "feishui_llm.html",
  "key": "feishui_llm",
  "scene_id": "feishui_llm"
 },
 "sources": [
  {
   "id": "zztj",
   "title": "资治通鉴·晋纪（淝水之战）",
   "party": "北宋·官修",
   "stance_label": "北宋官修综合编年（距事约七百五十年）",
   "distance_label": "司马光北宋撰，距淝水之战约七百五十年",
   "color": "#8C6239",
   "compiler": "司马光（北宋）",
   "period": "北宋",
   "note": "本切片主干史料。司马光综合《晋书》《十六国春秋》等成此叙事，距事甚远但去取审慎；其淝水叙述以东晋为叙事主轴，前秦内部决策多经折射。使用时须记：这是后世北宋官修的『胜利方（东晋）视角』综合叙述。"
  },
  {
   "id": "shiliuguo_chunqiu",
   "title": "十六国春秋（辑本）",
   "party": "诸胡·后世辑",
   "stance_label": "北魏崔鸿原撰（已佚），今本清汤球辑佚",
   "distance_label": "崔鸿北魏撰，原书亡佚，今本为清人自《通鉴》《晋书》等回辑",
   "color": "#6C7A89",
   "compiler": "崔鸿（北魏）原撰／汤球（清）辑",
   "period": "北魏（原）／清（辑）",
   "note": "前秦／诸胡视角之名义来源。原书《十六国春秋》已佚，今传本为清人从《通鉴》《晋书》回辑，与《通鉴》同源，故其『前秦视角』独立价值有限——前秦内部真实决策（如苻坚拒权翼、石越、苻融之谏）仍主要经东晋／后世记载折射，缺口显式保留。"
  }
 ],
 "places": [
  {
   "id": "feishui",
   "name": "淝水",
   "lon": 116.78,
   "lat": 32.55,
   "type": "river",
   "note": "淮水支流（今东淝河，近安徽寿县）；东晋与前秦决战之地（坐标为今地推定）",
   "elev": 20
  },
  {
   "id": "luojian",
   "name": "洛涧",
   "lon": 117.02,
   "lat": 32.66,
   "type": "river",
   "note": "秦将梁成屯兵处（今安徽淮南洛河）；刘牢之破秦军处（坐标为今地推定）",
   "elev": 45
  },
  {
   "id": "shouyang",
   "name": "寿阳",
   "lon": 116.8,
   "lat": 32.57,
   "type": "city",
   "note": "前秦南下渡淮要冲（今安徽寿县）；战前被秦所占，淝水晋胜后收复（坐标为今地推定）",
   "elev": 21
  },
  {
   "id": "bagongshan",
   "name": "八公山",
   "lon": 116.85,
   "lat": 32.62,
   "type": "mountain",
   "note": "苻坚登城望见草木皆兵之处（今安徽淮南八公山；坐标为今地推定）",
   "elev": 24
  },
  {
   "id": "huaibei",
   "name": "淮北",
   "lon": 116.8,
   "lat": 33.2,
   "type": "region",
   "note": "淮河以北；苻坚败后单骑奔此，前秦残余退守之地（坐标为区域推定）",
   "elev": 17
  },
  {
   "id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "type": "city",
   "note": "东晋都城建康（今江苏南京）；谢安得捷报、矫情镇物之处",
   "elev": 17
  }
 ],
 "persons": [
  {
   "id": "xie_an",
   "name": "谢安",
   "party": "东晋",
   "note": "东晋宰相；淝水之战决策者，总揽朝议，得捷报时矫情镇物",
   "influence": 0
  },
  {
   "id": "xie_shi",
   "name": "谢石",
   "party": "东晋",
   "note": "谢安之弟；征讨大都督，东晋军统帅",
   "influence": 0
  },
  {
   "id": "xie_xuan",
   "name": "谢玄",
   "party": "东晋",
   "note": "谢安之侄；前锋都督，率北府兵与秦军决战",
   "influence": 0
  },
  {
   "id": "liu_laozhi",
   "name": "刘牢之",
   "party": "东晋",
   "note": "龙骧将军；率北府兵夜袭洛涧，斩秦将梁成",
   "influence": 0
  },
  {
   "id": "fu_jian",
   "name": "苻坚",
   "party": "前秦",
   "note": "前秦天王（氐族）；统一北方后南征，淝水败后中流矢单骑奔淮北，385 年为姚苌所杀",
   "influence": 0
  },
  {
   "id": "fu_rong",
   "name": "苻融",
   "party": "前秦",
   "note": "苻坚之弟，阳平公、征南大将军；淝水前线指挥，马倒被杀",
   "influence": 0
  },
  {
   "id": "liang_cheng",
   "name": "梁成",
   "party": "前秦",
   "note": "前秦将领；率五万兵屯洛涧，被刘牢之斩杀",
   "influence": 0
  },
  {
   "id": "zhu_xu",
   "name": "朱序",
   "party": "第三方",
   "note": "原东晋襄阳守将，降前秦；淝水阵后大呼『秦军败矣』为晋内应，致秦军溃。非前秦核心，亦非东晋阵中，独立成桶",
   "influence": 0
  },
  {
   "id": "mu_rongchui",
   "name": "慕容垂",
   "party": "诸胡",
   "note": "鲜卑首领，前秦部将；淝水战后叛秦立后燕，北方再分裂的关键人物",
   "influence": 0
  },
  {
   "id": "yao_chang",
   "name": "姚苌",
   "party": "诸胡",
   "note": "羌族首领，前秦部将；淝水战后叛秦立后秦，385 年杀苻坚",
   "influence": 0
  }
 ],
 "assertions": [
  {
   "id": "FEI_001",
   "subject": "event:ev_feishui_llm_01",
   "predicate": "战果",
   "value_text": "刘牢之率北府兵夜袭洛涧，斩秦将梁成，秦军溃退，洛涧之捷振奋晋军",
   "time": {
    "era_text": "东晋太元八年十月",
    "gregorian_year": 383
   },
   "place": "luojian",
   "source": "zztj",
   "quote": "斩梁成，秦军溃退",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "技术/战术维度（2）：北府兵精锐夜袭；事件维度（6）：淝水前哨捷",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_002",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "东晋决策体制",
   "value_text": "谢安为宰相总揽朝议，命弟谢石为征讨大都督、侄谢玄为前锋都督，东晋以门阀士族协同御敌",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "jiankang",
   "source": "zztj",
   "quote": "命弟谢石为征讨大都督、侄谢玄为前锋都督",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "empire",
   "note": "制度维度（3）：东晋门阀协同的战时决策结构",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_003",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "前秦兵力构成",
   "value_text": "苻坚征调大军号九十万（或云百万），多为新附各族（鲜卑、羌及诸部），民族成分复杂、向心力弱",
   "time": {
    "era_text": "建元十九年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "号九十万（或云百万）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "theater",
   "note": "社会/民族维度（4）：前秦多民族联军，向心力弱；『号九十万』为号称，实数有争议",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_004",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "东晋兵力",
   "value_text": "谢玄率北府兵约八万（北府兵为谢玄所练之精锐）御敌，以少胜多",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "东晋以少胜多",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.6,
   "scale": "theater",
   "note": "社会/人口维度（4）：北府兵精锐约八万，以少胜多；『八万』为常见记载，确数待考",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_005",
   "subject": "event:ev_feishui_llm_03",
   "predicate": "退兵之谋",
   "value_text": "晋将遣使说苻坚稍退军以决战，苻坚欲半渡击之而许退",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "苻坚欲半渡击之，许之",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "技术/战术维度（2）：半渡而击为经典战术；事件维度（6）：淝水退军之约",
   "dims": [
    2,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_006",
   "subject": "event:ev_feishui_llm_03",
   "predicate": "溃败内因",
   "value_text": "秦军多新附之众、本无斗志；降将朱序阵后大呼『秦军败矣』，军心崩溃自溃",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "秦军多新附之众、本无斗志；朱序在阵后大呼『秦军败矣』",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "社会维度（4）：军心离散+内应煽动；事件维度（6）",
   "dims": [
    4,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_007",
   "subject": "event:ev_feishui_llm_03",
   "predicate": "苻融之死",
   "value_text": "苻融马倒被杀，前秦前线指挥断绝",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "苻融马倒被杀",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "事件维度（6）",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_008",
   "subject": "event:ev_feishui_llm_03",
   "predicate": "苻坚败逃",
   "value_text": "苻坚中流矢，单骑奔淮北，前秦主力溃散",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "huaibei",
   "source": "zztj",
   "quote": "苻坚中流矢，单骑奔淮北",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "事件维度（6）",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_009",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "地理枢纽",
   "value_text": "淝水为淮水支流，两军夹岸对峙；寿阳（今寿县）为前秦南下渡淮要冲，八公山扼其西",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "shouyang",
   "source": "zztj",
   "quote": "两军夹淝水对峙；苻坚登寿阳城望晋阵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.8,
   "scale": "theater",
   "note": "地理维度（1）：淝水—淮河一线为东晋北疆屏障；事件维度（6）",
   "dims": [
    1,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_010",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "草木皆兵",
   "value_text": "苻坚登寿阳城望八公山草木，以为皆晋兵，始有惧色",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "bagongshan",
   "source": "zztj",
   "quote": "见八公山上草木，以为皆晋兵",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "思想/心理维度（5）：前秦统帅心理劣势；事件维度（6）",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_011",
   "subject": "event:ev_feishui_llm_03",
   "predicate": "风声鹤唳",
   "value_text": "败军闻风声鹤唳以为晋兵追至，昼夜不敢息",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "huaibei",
   "source": "zztj",
   "quote": "败军风声鹤唳，昼夜不敢息",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "theater",
   "note": "思想/心理维度（5）：溃败心理状态；事件维度（6）",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_012",
   "subject": "event:ev_feishui_llm_04",
   "predicate": "战后格局",
   "value_text": "淝水败后前秦土崩瓦解，慕容垂、姚苌相继叛秦立后燕、后秦，北方重陷分裂",
   "time": {
    "era_text": "东晋太元八年（战后）",
    "gregorian_year": 383
   },
   "place": "huaibei",
   "source": "zztj",
   "quote": "前秦土崩瓦解，北方重新陷入分裂（慕容垂、姚苌相继叛秦立国）",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "empire",
   "note": "事件维度（6）：南北格局转折",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_013",
   "subject": "event:ev_feishui_llm_04",
   "predicate": "前秦体制脆弱",
   "value_text": "前秦以氐族核心勉强统合多民族（鲜卑慕容氏、羌姚氏等），淝水溃败暴露其『兵多而心不齐』的体制脆弱",
   "time": {
    "era_text": "东晋太元八年（析因）",
    "gregorian_year": 383
   },
   "place": "huaibei",
   "source": "zztj",
   "quote": "秦军多新附之众、本无斗志",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "empire",
   "note": "制度维度（3）：多民族强制聚合政权的结构性脆弱；此为后世史论，归推断层",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_014",
   "subject": "event:ev_feishui_llm_05",
   "predicate": "谢安镇物",
   "value_text": "谢安得驿书了无喜色，围棋如故（矫情镇物）",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "jiankang",
   "source": "zztj",
   "quote": "了无喜色，围棋如故",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.9,
   "scale": "province",
   "note": "事件维度（6）：东晋朝堂反应",
   "dims": [
    6
   ],
   "dim_source": "fallback",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_015",
   "subject": "event:ev_feishui_llm_05",
   "predicate": "士族政治文化",
   "value_text": "谢安『矫情镇物』体现东晋门阀宰相以镇定安朝野的政治文化",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "jiankang",
   "source": "zztj",
   "quote": "了无喜色，围棋如故",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.6,
   "scale": "empire",
   "note": "思想/文化维度（5）：门阀政治文化；后世史评，归学界层",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_016",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "前秦统一北方",
   "value_text": "苻坚自升平元年（357）即位，至建元年间并前凉、灭代、取蜀，统一北方，遂有南窥之志",
   "time": {
    "era_text": "建元年间（战前）",
    "gregorian_year": 383
   },
   "place": "huaibei",
   "source": "shiliuguo_chunqiu",
   "quote": "苻坚已统一北方",
   "quote_status": "paraphrase_unverified",
   "layer": "record",
   "confidence": 0.7,
   "scale": "empire",
   "note": "制度/事件维度（6）：前秦南征的战略前提；名义取自《十六国春秋》视角，但原书已佚、今本清辑，与《通鉴》同源，前秦内部决策仍多经折射",
   "dims": [
    3,
    6
   ],
   "dim_source": "declared",
   "_party": "诸胡·后世辑",
   "_faction": null
  },
  {
   "id": "FEI_017",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "淮河防线",
   "value_text": "淝水属淮水水系，淝水—淮河一线为东晋北疆屏障，淮南失守则江防直接暴露",
   "time": {
    "era_text": "东晋太元八年",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "淮南（淝水一带）为江防屏障",
   "quote_status": "paraphrase_unverified",
   "layer": "inference",
   "confidence": 0.7,
   "scale": "theater",
   "note": "地理维度（1）：淝水—淮河防线的战略意义",
   "dims": [
    1
   ],
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_018",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "晋军确切兵力",
   "value_text": "《资治通鉴》未明言晋军总数；北府兵约八万为后世常见说法，确数待考",
   "time": {
    "era_text": "东晋太元八年（待考）",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "zztj",
   "quote": "",
   "quote_status": "paraphrase_unverified",
   "layer": "gap",
   "confidence": 0.0,
   "scale": "theater",
   "note": "诚实缺口：晋军总兵力《通鉴》未载，『八万』出自《谢玄传》等后世记载",
   "dims": [
    4,
    6
   ],
   "lead": {
    "where": "《晋书·谢玄传》或《资治通鉴》",
    "skills": [
     "文献考据",
     "数字辨析"
    ],
    "accept": "若能核到北府兵确切出战人数，可补此缺"
   },
   "dim_source": "declared",
   "_party": "北宋·官修",
   "_faction": null
  },
  {
   "id": "FEI_019",
   "subject": "event:ev_feishui_llm_02",
   "predicate": "兵力虚实存疑",
   "value_text": "史家多疑『九十万/百万』为虚张声势，实际可战兵力或远少于号称",
   "time": {
    "era_text": "后世考订",
    "gregorian_year": 383
   },
   "place": "feishui",
   "source": "shiliuguo_chunqiu",
   "quote": "号九十万（或云百万）",
   "quote_status": "paraphrase_unverified",
   "layer": "scholarship",
   "confidence": 0.4,
   "scale": "theater",
   "note": "思想/史学维度（5）：现代史学界对前秦兵力的考辨；原《十六国春秋》已佚、今本辑本价值有限",
   "dims": [
    5,
    6
   ],
   "dim_source": "declared",
   "_party": "诸胡·后世辑",
   "_faction": null
  }
 ],
 "conflicts": [],
 "crossConflicts": [],
 "gaps": [
  "FEI_018"
 ],
 "events": [
  {
   "id": "ev_feishui_llm_01",
   "subject": "event:ev_feishui_llm_01",
   "year": 383,
   "era": "东晋·太元八年",
   "title": "洛涧之战",
   "kind": "战事·前哨战",
   "text": "刘牢之率北府兵夜袭洛涧，斩秦将梁成，秦军溃退；洛涧之捷大振晋军士气，奠定淝水决战的心理优势",
   "place_id": "luojian"
  },
  {
   "id": "ev_feishui_llm_02",
   "subject": "event:ev_feishui_llm_02",
   "year": 383,
   "era": "东晋·太元八年",
   "title": "淝水对峙",
   "kind": "战事·会战",
   "text": "苻坚登寿阳城望八公山草木，疑皆晋兵（草木皆兵）；东晋遣使请秦军稍退以便决战，苻坚欲半渡击之而许之",
   "place_id": "feishui"
  },
  {
   "id": "ev_feishui_llm_03",
   "subject": "event:ev_feishui_llm_03",
   "year": 383,
   "era": "东晋·太元八年",
   "title": "淝水决战·秦军自溃",
   "kind": "战事·决战",
   "text": "秦军多新附之众本无斗志，甫退即自乱；降将朱序阵后大呼『秦军败矣』，军心崩溃自溃；苻融马倒被杀，前线指挥断绝；苻坚中流矢单骑奔淮北，『风声鹤唳，昼夜不敢息』",
   "place_id": "feishui"
  },
  {
   "id": "ev_feishui_llm_04",
   "subject": "event:ev_feishui_llm_04",
   "year": 383,
   "era": "东晋·太元八年（战后）",
   "title": "前秦瓦解·北方再分裂",
   "kind": "战后格局",
   "text": "淝水败后前秦土崩瓦解，慕容垂、姚苌相继叛秦立后燕、后秦，北方重新陷入分裂",
   "place_id": "huaibei"
  },
  {
   "id": "ev_feishui_llm_05",
   "subject": "event:ev_feishui_llm_05",
   "year": 383,
   "era": "东晋·太元八年",
   "title": "谢安得捷报（矫情镇物）",
   "kind": "战事·善后",
   "text": "谢安得驿书了无喜色，围棋如故，体现东晋门阀宰相以镇定安朝野的政治文化",
   "place_id": "jiankang"
  }
 ],
 "edges": [
  {
   "from": "shouyang",
   "to": "feishui",
   "type": "battle",
   "label": "秦军自寿阳至淝水列阵"
  },
  {
   "from": "luojian",
   "to": "feishui",
   "type": "military",
   "label": "晋军洛涧捷后进逼淝水"
  },
  {
   "from": "feishui",
   "to": "huaibei",
   "type": "military",
   "label": "苻坚败逃淮北"
  },
  {
   "from": "jiankang",
   "to": "shouyang",
   "type": "military",
   "label": "东晋自都城建康遣军北上御敌"
  }
 ],
 "control": [
  {
   "place_id": "jiankang",
   "party": "东晋",
   "start": 383,
   "end": 385,
   "basis": "东晋都城建康，根本之地，全程在晋控",
   "note": "东晋根本"
  },
  {
   "place_id": "shouyang",
   "party": "东晋",
   "start": 383,
   "end": 385,
   "basis": "战前被秦所占，淝水晋胜后收复，淮南重归晋",
   "note": "战前 transient 秦占，不绘为稳定秦控"
  },
  {
   "place_id": "feishui",
   "party": "东晋",
   "start": 383,
   "end": 385,
   "basis": "决战地在晋境，战后晋控",
   "note": "主战场终局归晋"
  },
  {
   "place_id": "luojian",
   "party": "东晋",
   "start": 383,
   "end": 385,
   "basis": "洛涧晋捷后巩固",
   "note": "淮南前哨"
  },
  {
   "place_id": "bagongshan",
   "party": "东晋",
   "start": 383,
   "end": 385,
   "basis": "八公山在晋境",
   "note": "淮南"
  },
  {
   "place_id": "huaibei",
   "party": "前秦",
   "start": 383,
   "end": 385,
   "basis": "秦残部北渡溃退，淮北（及以北）仍前秦控至其 385 年亡",
   "note": "北方并未随一战尽归晋；前秦残余+诸胡割据"
  }
 ],
 "control_seats": [
  {
   "place_id": "jiankang",
   "name": "建康",
   "lon": 118.8,
   "lat": 32.06,
   "region": "two_jin"
  },
  {
   "place_id": "shouyang",
   "name": "寿阳",
   "lon": 116.8,
   "lat": 32.57,
   "region": "two_jin"
  },
  {
   "place_id": "feishui",
   "name": "淝水",
   "lon": 116.78,
   "lat": 32.55,
   "region": "two_jin"
  },
  {
   "place_id": "luojian",
   "name": "洛涧",
   "lon": 117.02,
   "lat": 32.66,
   "region": "two_jin"
  },
  {
   "place_id": "bagongshan",
   "name": "八公山",
   "lon": 116.85,
   "lat": 32.62,
   "region": "two_jin"
  },
  {
   "place_id": "huaibei",
   "name": "淮北",
   "lon": 116.8,
   "lat": 33.2,
   "region": "two_jin"
  }
 ],
 "control_years": [
  383,
  385
 ],
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
   "东晋",
   "前秦",
   "第三方",
   "诸胡",
   "后世官修",
   "二手综述"
  ],
  "party_bucket": {
   "北宋·官修": "后世官修",
   "北宋·官修综合": "后世官修",
   "诸胡·后世辑": "诸胡",
   "第三方": "第三方",
   "东晋·官修": "东晋",
   "前秦·官修": "前秦",
   "二手综述": "二手综述"
  },
  "party_colors": {
   "东晋": "#B23A48",
   "前秦": "#2E86C1",
   "第三方": "#7D8B52",
   "诸胡": "#8E44AD",
   "后世官修": "#6C7A89",
   "二手综述": "#9B7B5A"
  }
 },
 "basemap": {
  "coastline": [],
  "land": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        115.78,
        31.06
       ],
       [
        115.78,
        34.2
       ],
       [
        119.8,
        34.2
       ],
       [
        119.8,
        31.06
       ],
       [
        115.78,
        31.06
       ]
      ]
     ]
    },
    "n": null
   }
  ],
  "admin1": [
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         117.041,
         34.2
        ],
        [
         117.025,
         34.167
        ],
        [
         117.047,
         34.152
        ],
        [
         117.124,
         34.128
        ],
        [
         117.131,
         34.102
        ],
        [
         117.192,
         34.069
        ],
        [
         117.257,
         34.066
        ],
        [
         117.277,
         34.079
        ],
        [
         117.312,
         34.068
        ],
        [
         117.357,
         34.088
        ],
        [
         117.404,
         34.032
        ],
        [
         117.435,
         34.028
        ],
        [
         117.515,
         34.061
        ],
        [
         117.543,
         34.039
        ],
        [
         117.569,
         33.985
        ],
        [
         117.613,
         34.0
        ],
        [
         117.629,
         34.029
        ],
        [
         117.671,
         33.992
        ],
        [
         117.673,
         33.935
        ],
        [
         117.715,
         33.879
        ],
        [
         117.754,
         33.891
        ],
        [
         117.759,
         33.874
        ],
        [
         117.74,
         33.758
        ],
        [
         117.725,
         33.75
        ],
        [
         117.75,
         33.711
        ],
        [
         117.791,
         33.734
        ],
        [
         117.844,
         33.736
        ],
        [
         117.902,
         33.72
        ],
        [
         117.973,
         33.75
        ],
        [
         118.02,
         33.739
        ],
        [
         118.066,
         33.766
        ],
        [
         118.118,
         33.766
        ],
        [
         118.161,
         33.736
        ],
        [
         118.168,
         33.663
        ],
        [
         118.112,
         33.617
        ],
        [
         118.118,
         33.595
        ],
        [
         118.107,
         33.475
        ],
        [
         118.051,
         33.492
        ],
        [
         118.027,
         33.455
        ],
        [
         118.017,
         33.403
        ],
        [
         118.029,
         33.375
        ],
        [
         117.993,
         33.333
        ],
        [
         117.974,
         33.279
        ],
        [
         117.939,
         33.262
        ],
        [
         117.942,
         33.225
        ],
        [
         117.977,
         33.226
        ],
        [
         117.989,
         33.181
        ],
        [
         118.037,
         33.152
        ],
        [
         118.038,
         33.135
        ],
        [
         118.149,
         33.169
        ],
        [
         118.178,
         33.218
        ],
        [
         118.217,
         33.192
        ],
        [
         118.22,
         33.114
        ],
        [
         118.244,
         33.028
        ],
        [
         118.245,
         32.998
        ],
        [
         118.269,
         32.969
        ],
        [
         118.304,
         32.969
        ],
        [
         118.292,
         32.946
        ],
        [
         118.252,
         32.937
        ],
        [
         118.233,
         32.914
        ],
        [
         118.25,
         32.848
        ],
        [
         118.301,
         32.846
        ],
        [
         118.3,
         32.783
        ],
        [
         118.334,
         32.762
        ],
        [
         118.363,
         32.771
        ],
        [
         118.375,
         32.719
        ],
        [
         118.411,
         32.716
        ],
        [
         118.451,
         32.744
        ],
        [
         118.484,
         32.721
        ],
        [
         118.56,
         32.73
        ],
        [
         118.572,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.707,
         32.72
        ],
        [
         118.757,
         32.737
        ],
        [
         118.738,
         32.773
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.81,
         32.854
        ],
        [
         118.821,
         32.921
        ],
        [
         118.847,
         32.922
        ],
        [
         118.849,
         32.957
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.893,
         32.941
        ],
        [
         118.934,
         32.939
        ],
        [
         118.993,
         32.958
        ],
        [
         119.021,
         32.956
        ],
        [
         119.055,
         32.875
        ],
        [
         119.113,
         32.823
        ],
        [
         119.185,
         32.826
        ],
        [
         119.212,
         32.708
        ],
        [
         119.209,
         32.641
        ],
        [
         119.231,
         32.607
        ],
        [
         119.22,
         32.577
        ],
        [
         119.153,
         32.558
        ],
        [
         119.168,
         32.536
        ],
        [
         119.142,
         32.5
        ],
        [
         119.085,
         32.453
        ],
        [
         119.041,
         32.515
        ],
        [
         118.976,
         32.505
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.891,
         32.553
        ],
        [
         118.908,
         32.592
        ],
        [
         118.843,
         32.568
        ],
        [
         118.821,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.757,
         32.604
        ],
        [
         118.735,
         32.589
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.689,
         32.588
        ],
        [
         118.659,
         32.594
        ],
        [
         118.633,
         32.578
        ],
        [
         118.597,
         32.601
        ],
        [
         118.569,
         32.586
        ],
        [
         118.564,
         32.562
        ],
        [
         118.609,
         32.537
        ],
        [
         118.592,
         32.481
        ],
        [
         118.629,
         32.468
        ],
        [
         118.691,
         32.472
        ],
        [
         118.685,
         32.404
        ],
        [
         118.703,
         32.329
        ],
        [
         118.657,
         32.301
        ],
        [
         118.675,
         32.25
        ],
        [
         118.644,
         32.21
        ],
        [
         118.511,
         32.194
        ],
        [
         118.495,
         32.165
        ],
        [
         118.501,
         32.122
        ],
        [
         118.434,
         32.087
        ],
        [
         118.394,
         32.076
        ],
        [
         118.39,
         31.985
        ],
        [
         118.364,
         31.93
        ],
        [
         118.472,
         31.88
        ],
        [
         118.467,
         31.858
        ],
        [
         118.505,
         31.842
        ],
        [
         118.482,
         31.778
        ],
        [
         118.534,
         31.767
        ],
        [
         118.522,
         31.743
        ],
        [
         118.558,
         31.73
        ],
        [
         118.572,
         31.746
        ],
        [
         118.641,
         31.759
        ],
        [
         118.654,
         31.73
        ],
        [
         118.698,
         31.71
        ],
        [
         118.643,
         31.672
        ],
        [
         118.643,
         31.65
        ],
        [
         118.736,
         31.633
        ],
        [
         118.748,
         31.676
        ],
        [
         118.774,
         31.683
        ],
        [
         118.803,
         31.619
        ],
        [
         118.859,
         31.624
        ],
        [
         118.882,
         31.564
        ],
        [
         118.886,
         31.519
        ],
        [
         118.884,
         31.5
        ],
        [
         118.852,
         31.394
        ],
        [
         118.824,
         31.376
        ],
        [
         118.768,
         31.364
        ],
        [
         118.746,
         31.373
        ],
        [
         118.721,
         31.323
        ],
        [
         118.726,
         31.282
        ],
        [
         118.757,
         31.28
        ],
        [
         118.795,
         31.229
        ],
        [
         118.871,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         119.015,
         31.242
        ],
        [
         119.105,
         31.235
        ],
        [
         119.107,
         31.251
        ],
        [
         119.158,
         31.295
        ],
        [
         119.198,
         31.295
        ],
        [
         119.198,
         31.27
        ],
        [
         119.267,
         31.25
        ],
        [
         119.294,
         31.263
        ],
        [
         119.338,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.374,
         31.259
        ],
        [
         119.36,
         31.213
        ],
        [
         119.392,
         31.174
        ],
        [
         119.439,
         31.177
        ],
        [
         119.461,
         31.156
        ],
        [
         119.533,
         31.159
        ],
        [
         119.6,
         31.109
        ],
        [
         119.624,
         31.13
        ],
        [
         119.678,
         31.168
        ],
        [
         119.706,
         31.153
        ],
        [
         119.716,
         31.17
        ],
        [
         119.78,
         31.179
        ],
        [
         119.8,
         31.158
        ],
        [
         119.8,
         34.2
        ],
        [
         117.041,
         34.2
        ]
       ]
      ]
     ]
    },
    "n": "江苏省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         119.8,
         31.06
        ],
        [
         119.8,
         31.158
        ],
        [
         119.78,
         31.179
        ],
        [
         119.716,
         31.17
        ],
        [
         119.706,
         31.153
        ],
        [
         119.678,
         31.168
        ],
        [
         119.624,
         31.13
        ],
        [
         119.649,
         31.105
        ],
        [
         119.629,
         31.086
        ],
        [
         119.631,
         31.06
        ],
        [
         119.8,
         31.06
        ]
       ]
      ]
     ]
    },
    "n": "浙江省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         116.6,
         34.014
        ],
        [
         116.642,
         33.978
        ],
        [
         116.643,
         33.897
        ],
        [
         116.631,
         33.888
        ],
        [
         116.567,
         33.908
        ],
        [
         116.558,
         33.881
        ],
        [
         116.486,
         33.87
        ],
        [
         116.438,
         33.846
        ],
        [
         116.437,
         33.801
        ],
        [
         116.408,
         33.806
        ],
        [
         116.394,
         33.783
        ],
        [
         116.317,
         33.771
        ],
        [
         116.263,
         33.73
        ],
        [
         116.23,
         33.735
        ],
        [
         116.156,
         33.71
        ],
        [
         116.133,
         33.752
        ],
        [
         116.1,
         33.783
        ],
        [
         116.074,
         33.781
        ],
        [
         116.056,
         33.805
        ],
        [
         116.059,
         33.861
        ],
        [
         115.982,
         33.917
        ],
        [
         116.0,
         33.965
        ],
        [
         115.958,
         34.008
        ],
        [
         115.904,
         34.01
        ],
        [
         115.877,
         34.029
        ],
        [
         115.877,
         34.003
        ],
        [
         115.85,
         34.005
        ],
        [
         115.846,
         34.029
        ],
        [
         115.809,
         34.062
        ],
        [
         115.78,
         34.062
        ],
        [
         115.78,
         32.488
        ],
        [
         115.789,
         32.469
        ],
        [
         115.861,
         32.537
        ],
        [
         115.891,
         32.576
        ],
        [
         115.91,
         32.567
        ],
        [
         115.876,
         32.542
        ],
        [
         115.846,
         32.502
        ],
        [
         115.883,
         32.488
        ],
        [
         115.865,
         32.459
        ],
        [
         115.899,
         32.391
        ],
        [
         115.913,
         32.228
        ],
        [
         115.942,
         32.166
        ],
        [
         115.922,
         32.05
        ],
        [
         115.929,
         32.003
        ],
        [
         115.909,
         31.943
        ],
        [
         115.92,
         31.92
        ],
        [
         115.895,
         31.865
        ],
        [
         115.894,
         31.832
        ],
        [
         115.915,
         31.815
        ],
        [
         115.886,
         31.776
        ],
        [
         115.852,
         31.787
        ],
        [
         115.808,
         31.77
        ],
        [
         115.808,
         31.77
        ],
        [
         115.78,
         31.782
        ],
        [
         115.78,
         31.113
        ],
        [
         115.798,
         31.128
        ],
        [
         115.838,
         31.127
        ],
        [
         115.867,
         31.148
        ],
        [
         115.888,
         31.109
        ],
        [
         115.94,
         31.072
        ],
        [
         115.939,
         31.06
        ],
        [
         119.631,
         31.06
        ],
        [
         119.629,
         31.086
        ],
        [
         119.649,
         31.105
        ],
        [
         119.624,
         31.13
        ],
        [
         119.6,
         31.109
        ],
        [
         119.533,
         31.159
        ],
        [
         119.461,
         31.156
        ],
        [
         119.439,
         31.177
        ],
        [
         119.392,
         31.174
        ],
        [
         119.36,
         31.213
        ],
        [
         119.374,
         31.259
        ],
        [
         119.35,
         31.301
        ],
        [
         119.338,
         31.259
        ],
        [
         119.294,
         31.263
        ],
        [
         119.267,
         31.25
        ],
        [
         119.198,
         31.27
        ],
        [
         119.198,
         31.295
        ],
        [
         119.158,
         31.295
        ],
        [
         119.107,
         31.251
        ],
        [
         119.105,
         31.235
        ],
        [
         119.015,
         31.242
        ],
        [
         118.985,
         31.237
        ],
        [
         118.871,
         31.242
        ],
        [
         118.795,
         31.229
        ],
        [
         118.757,
         31.28
        ],
        [
         118.726,
         31.282
        ],
        [
         118.721,
         31.323
        ],
        [
         118.746,
         31.373
        ],
        [
         118.768,
         31.364
        ],
        [
         118.824,
         31.376
        ],
        [
         118.852,
         31.394
        ],
        [
         118.884,
         31.5
        ],
        [
         118.857,
         31.506
        ],
        [
         118.866,
         31.519
        ],
        [
         118.886,
         31.519
        ],
        [
         118.882,
         31.564
        ],
        [
         118.859,
         31.624
        ],
        [
         118.803,
         31.619
        ],
        [
         118.774,
         31.683
        ],
        [
         118.748,
         31.676
        ],
        [
         118.736,
         31.633
        ],
        [
         118.643,
         31.65
        ],
        [
         118.643,
         31.672
        ],
        [
         118.698,
         31.71
        ],
        [
         118.654,
         31.73
        ],
        [
         118.641,
         31.759
        ],
        [
         118.572,
         31.746
        ],
        [
         118.558,
         31.73
        ],
        [
         118.522,
         31.743
        ],
        [
         118.534,
         31.767
        ],
        [
         118.482,
         31.778
        ],
        [
         118.505,
         31.842
        ],
        [
         118.467,
         31.858
        ],
        [
         118.472,
         31.88
        ],
        [
         118.364,
         31.93
        ],
        [
         118.39,
         31.985
        ],
        [
         118.394,
         32.076
        ],
        [
         118.434,
         32.087
        ],
        [
         118.501,
         32.122
        ],
        [
         118.495,
         32.165
        ],
        [
         118.511,
         32.194
        ],
        [
         118.644,
         32.21
        ],
        [
         118.675,
         32.25
        ],
        [
         118.657,
         32.301
        ],
        [
         118.703,
         32.329
        ],
        [
         118.685,
         32.404
        ],
        [
         118.691,
         32.472
        ],
        [
         118.629,
         32.468
        ],
        [
         118.592,
         32.481
        ],
        [
         118.609,
         32.537
        ],
        [
         118.564,
         32.562
        ],
        [
         118.569,
         32.586
        ],
        [
         118.597,
         32.601
        ],
        [
         118.633,
         32.578
        ],
        [
         118.659,
         32.594
        ],
        [
         118.689,
         32.588
        ],
        [
         118.719,
         32.614
        ],
        [
         118.719,
         32.614
        ],
        [
         118.735,
         32.589
        ],
        [
         118.757,
         32.604
        ],
        [
         118.785,
         32.582
        ],
        [
         118.821,
         32.604
        ],
        [
         118.843,
         32.568
        ],
        [
         118.908,
         32.592
        ],
        [
         118.891,
         32.553
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.922,
         32.557
        ],
        [
         118.976,
         32.505
        ],
        [
         119.041,
         32.515
        ],
        [
         119.085,
         32.453
        ],
        [
         119.142,
         32.5
        ],
        [
         119.168,
         32.536
        ],
        [
         119.153,
         32.558
        ],
        [
         119.22,
         32.577
        ],
        [
         119.231,
         32.607
        ],
        [
         119.209,
         32.641
        ],
        [
         119.212,
         32.708
        ],
        [
         119.185,
         32.826
        ],
        [
         119.113,
         32.823
        ],
        [
         119.055,
         32.875
        ],
        [
         119.021,
         32.956
        ],
        [
         118.993,
         32.958
        ],
        [
         118.934,
         32.939
        ],
        [
         118.893,
         32.941
        ],
        [
         118.896,
         32.958
        ],
        [
         118.896,
         32.958
        ],
        [
         118.849,
         32.957
        ],
        [
         118.847,
         32.922
        ],
        [
         118.821,
         32.921
        ],
        [
         118.81,
         32.854
        ],
        [
         118.743,
         32.853
        ],
        [
         118.743,
         32.853
        ],
        [
         118.738,
         32.773
        ],
        [
         118.757,
         32.737
        ],
        [
         118.707,
         32.72
        ],
        [
         118.643,
         32.745
        ],
        [
         118.572,
         32.72
        ],
        [
         118.56,
         32.73
        ],
        [
         118.484,
         32.721
        ],
        [
         118.451,
         32.744
        ],
        [
         118.411,
         32.716
        ],
        [
         118.375,
         32.719
        ],
        [
         118.363,
         32.771
        ],
        [
         118.334,
         32.762
        ],
        [
         118.3,
         32.783
        ],
        [
         118.301,
         32.846
        ],
        [
         118.25,
         32.848
        ],
        [
         118.233,
         32.914
        ],
        [
         118.252,
         32.937
        ],
        [
         118.292,
         32.946
        ],
        [
         118.304,
         32.969
        ],
        [
         118.269,
         32.969
        ],
        [
         118.245,
         32.998
        ],
        [
         118.244,
         33.028
        ],
        [
         118.22,
         33.114
        ],
        [
         118.217,
         33.192
        ],
        [
         118.178,
         33.218
        ],
        [
         118.149,
         33.169
        ],
        [
         118.038,
         33.135
        ],
        [
         118.037,
         33.152
        ],
        [
         117.989,
         33.181
        ],
        [
         117.977,
         33.226
        ],
        [
         117.942,
         33.225
        ],
        [
         117.939,
         33.262
        ],
        [
         117.974,
         33.279
        ],
        [
         117.993,
         33.333
        ],
        [
         118.029,
         33.375
        ],
        [
         118.017,
         33.403
        ],
        [
         118.027,
         33.455
        ],
        [
         118.051,
         33.492
        ],
        [
         118.107,
         33.475
        ],
        [
         118.118,
         33.595
        ],
        [
         118.112,
         33.617
        ],
        [
         118.168,
         33.663
        ],
        [
         118.161,
         33.736
        ],
        [
         118.118,
         33.766
        ],
        [
         118.066,
         33.766
        ],
        [
         118.02,
         33.739
        ],
        [
         117.973,
         33.75
        ],
        [
         117.902,
         33.72
        ],
        [
         117.844,
         33.736
        ],
        [
         117.791,
         33.734
        ],
        [
         117.75,
         33.711
        ],
        [
         117.725,
         33.75
        ],
        [
         117.74,
         33.758
        ],
        [
         117.759,
         33.874
        ],
        [
         117.754,
         33.891
        ],
        [
         117.715,
         33.879
        ],
        [
         117.673,
         33.935
        ],
        [
         117.671,
         33.992
        ],
        [
         117.629,
         34.029
        ],
        [
         117.613,
         34.0
        ],
        [
         117.569,
         33.985
        ],
        [
         117.543,
         34.039
        ],
        [
         117.515,
         34.061
        ],
        [
         117.435,
         34.028
        ],
        [
         117.404,
         34.032
        ],
        [
         117.357,
         34.088
        ],
        [
         117.312,
         34.068
        ],
        [
         117.277,
         34.079
        ],
        [
         117.257,
         34.066
        ],
        [
         117.192,
         34.069
        ],
        [
         117.131,
         34.102
        ],
        [
         117.124,
         34.128
        ],
        [
         117.047,
         34.152
        ],
        [
         117.025,
         34.167
        ],
        [
         117.041,
         34.2
        ],
        [
         116.545,
         34.2
        ],
        [
         116.566,
         34.169
        ],
        [
         116.536,
         34.151
        ],
        [
         116.528,
         34.123
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ]
       ]
      ],
      [
       [
        [
         118.866,
         31.519
        ],
        [
         118.857,
         31.506
        ],
        [
         118.884,
         31.5
        ],
        [
         118.886,
         31.519
        ],
        [
         118.866,
         31.519
        ]
       ]
      ]
     ]
    },
    "n": "安徽省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.78,
         34.2
        ],
        [
         115.78,
         31.782
        ],
        [
         115.808,
         31.77
        ],
        [
         115.808,
         31.77
        ],
        [
         115.852,
         31.787
        ],
        [
         115.886,
         31.776
        ],
        [
         115.915,
         31.815
        ],
        [
         115.894,
         31.832
        ],
        [
         115.895,
         31.865
        ],
        [
         115.92,
         31.92
        ],
        [
         115.909,
         31.943
        ],
        [
         115.929,
         32.003
        ],
        [
         115.922,
         32.05
        ],
        [
         115.942,
         32.166
        ],
        [
         115.913,
         32.228
        ],
        [
         115.899,
         32.391
        ],
        [
         115.865,
         32.459
        ],
        [
         115.883,
         32.488
        ],
        [
         115.846,
         32.502
        ],
        [
         115.876,
         32.542
        ],
        [
         115.91,
         32.567
        ],
        [
         115.891,
         32.576
        ],
        [
         115.861,
         32.537
        ],
        [
         115.789,
         32.469
        ],
        [
         115.78,
         32.488
        ],
        [
         115.78,
         34.062
        ],
        [
         115.809,
         34.062
        ],
        [
         115.846,
         34.029
        ],
        [
         115.85,
         34.005
        ],
        [
         115.877,
         34.003
        ],
        [
         115.877,
         34.029
        ],
        [
         115.904,
         34.01
        ],
        [
         115.958,
         34.008
        ],
        [
         116.0,
         33.965
        ],
        [
         115.982,
         33.917
        ],
        [
         116.059,
         33.861
        ],
        [
         116.056,
         33.805
        ],
        [
         116.074,
         33.781
        ],
        [
         116.1,
         33.783
        ],
        [
         116.133,
         33.752
        ],
        [
         116.156,
         33.71
        ],
        [
         116.23,
         33.735
        ],
        [
         116.263,
         33.73
        ],
        [
         116.317,
         33.771
        ],
        [
         116.394,
         33.783
        ],
        [
         116.408,
         33.806
        ],
        [
         116.437,
         33.801
        ],
        [
         116.438,
         33.846
        ],
        [
         116.486,
         33.87
        ],
        [
         116.558,
         33.881
        ],
        [
         116.567,
         33.908
        ],
        [
         116.631,
         33.888
        ],
        [
         116.643,
         33.897
        ],
        [
         116.642,
         33.978
        ],
        [
         116.6,
         34.014
        ],
        [
         116.6,
         34.014
        ],
        [
         116.576,
         34.069
        ],
        [
         116.576,
         34.069
        ],
        [
         116.528,
         34.123
        ],
        [
         116.536,
         34.151
        ],
        [
         116.566,
         34.169
        ],
        [
         116.545,
         34.2
        ],
        [
         115.78,
         34.2
        ]
       ]
      ]
     ]
    },
    "n": "河南省"
   },
   {
    "g": {
     "type": "MultiPolygon",
     "coordinates": [
      [
       [
        [
         115.78,
         31.06
        ],
        [
         115.939,
         31.06
        ],
        [
         115.94,
         31.072
        ],
        [
         115.888,
         31.109
        ],
        [
         115.867,
         31.148
        ],
        [
         115.838,
         31.127
        ],
        [
         115.798,
         31.128
        ],
        [
         115.78,
         31.113
        ],
        [
         115.78,
         31.06
        ]
       ]
      ]
     ]
    },
    "n": "湖北省"
   }
  ],
  "rivers": [
   {
    "g": {
     "type": "MultiLineString",
     "coordinates": [
      [
       [
        117.787,
        31.06
       ],
       [
        117.844,
        31.124
       ],
       [
        117.916,
        31.104
       ],
       [
        117.968,
        31.13
       ],
       [
        117.999,
        31.202
       ],
       [
        118.089,
        31.255
       ],
       [
        118.24,
        31.29
       ],
       [
        118.312,
        31.341
       ],
       [
        118.305,
        31.406
       ],
       [
        118.333,
        31.51
       ],
       [
        118.395,
        31.653
       ],
       [
        118.515,
        31.841
       ],
       [
        118.692,
        32.074
       ],
       [
        118.961,
        32.203
       ],
       [
        119.324,
        32.227
       ],
       [
        119.53,
        32.229
       ],
       [
        119.643,
        32.235
       ],
       [
        119.771,
        32.207
       ],
       [
        119.8,
        32.175
       ]
      ]
     ]
    },
    "n": "Yangtze"
   }
  ],
  "lakes": [
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.605,
        33.172
       ],
       [
        118.574,
        33.141
       ],
       [
        118.519,
        33.036
       ],
       [
        118.492,
        32.998
       ],
       [
        118.431,
        32.973
       ],
       [
        118.267,
        32.925
       ],
       [
        118.227,
        32.897
       ],
       [
        118.183,
        32.885
       ],
       [
        118.171,
        32.906
       ],
       [
        118.192,
        32.941
       ],
       [
        118.181,
        32.971
       ],
       [
        118.142,
        32.986
       ],
       [
        118.088,
        32.958
       ],
       [
        118.066,
        32.936
       ],
       [
        118.05,
        32.964
       ],
       [
        118.084,
        33.005
       ],
       [
        118.13,
        33.028
       ],
       [
        118.226,
        32.991
       ],
       [
        118.24,
        33.008
       ],
       [
        118.234,
        33.046
       ],
       [
        118.182,
        33.139
       ],
       [
        118.102,
        33.144
       ],
       [
        117.979,
        33.142
       ],
       [
        117.915,
        33.126
       ],
       [
        117.892,
        33.065
       ],
       [
        117.838,
        33.038
       ],
       [
        117.809,
        33.048
       ],
       [
        117.851,
        33.062
       ],
       [
        117.874,
        33.093
       ],
       [
        117.886,
        33.157
       ],
       [
        117.912,
        33.181
       ],
       [
        117.992,
        33.187
       ],
       [
        118.114,
        33.215
       ],
       [
        118.175,
        33.21
       ],
       [
        118.227,
        33.143
       ],
       [
        118.275,
        33.045
       ],
       [
        118.34,
        32.994
       ],
       [
        118.407,
        33.01
       ],
       [
        118.417,
        33.038
       ],
       [
        118.44,
        33.068
       ],
       [
        118.46,
        33.099
       ],
       [
        118.47,
        33.128
       ],
       [
        118.454,
        33.16
       ],
       [
        118.322,
        33.182
       ],
       [
        118.249,
        33.221
       ],
       [
        118.233,
        33.288
       ],
       [
        118.273,
        33.267
       ],
       [
        118.318,
        33.268
       ],
       [
        118.392,
        33.338
       ],
       [
        118.446,
        33.407
       ],
       [
        118.49,
        33.401
       ],
       [
        118.57,
        33.372
       ],
       [
        118.607,
        33.376
       ],
       [
        118.547,
        33.437
       ],
       [
        118.488,
        33.54
       ],
       [
        118.493,
        33.623
       ],
       [
        118.544,
        33.645
       ],
       [
        118.571,
        33.62
       ],
       [
        118.608,
        33.515
       ],
       [
        118.664,
        33.463
       ],
       [
        118.774,
        33.443
       ],
       [
        118.861,
        33.357
       ],
       [
        118.861,
        33.339
       ],
       [
        118.834,
        33.304
       ],
       [
        118.778,
        33.176
       ],
       [
        118.716,
        33.089
       ],
       [
        118.681,
        33.077
       ],
       [
        118.678,
        33.124
       ],
       [
        118.653,
        33.174
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ],
       [
        118.605,
        33.172
       ]
      ]
     ]
    },
    "n": "Hongze Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        119.407,
        32.794
       ],
       [
        119.392,
        32.751
       ],
       [
        119.35,
        32.749
       ],
       [
        119.3,
        32.748
       ],
       [
        119.253,
        32.736
       ],
       [
        119.201,
        32.691
       ],
       [
        119.173,
        32.686
       ],
       [
        119.165,
        32.706
       ],
       [
        119.147,
        32.753
       ],
       [
        119.125,
        32.798
       ],
       [
        119.092,
        32.836
       ],
       [
        119.079,
        32.855
       ],
       [
        119.084,
        32.866
       ],
       [
        119.13,
        32.877
       ],
       [
        119.188,
        32.878
       ],
       [
        119.229,
        32.882
       ],
       [
        119.242,
        32.896
       ],
       [
        119.241,
        32.919
       ],
       [
        119.253,
        32.943
       ],
       [
        119.251,
        32.978
       ],
       [
        119.245,
        33.013
       ],
       [
        119.264,
        33.034
       ],
       [
        119.296,
        33.041
       ],
       [
        119.314,
        33.054
       ],
       [
        119.303,
        33.085
       ],
       [
        119.269,
        33.121
       ],
       [
        119.237,
        33.154
       ],
       [
        119.215,
        33.156
       ],
       [
        119.18,
        33.148
       ],
       [
        119.168,
        33.118
       ],
       [
        119.164,
        33.09
       ],
       [
        119.154,
        33.065
       ],
       [
        119.099,
        33.027
       ],
       [
        119.035,
        33.031
       ],
       [
        118.966,
        33.038
       ],
       [
        118.907,
        33.058
       ],
       [
        118.882,
        33.077
       ],
       [
        118.957,
        33.071
       ],
       [
        119.059,
        33.058
       ],
       [
        119.102,
        33.069
       ],
       [
        119.135,
        33.144
       ],
       [
        119.17,
        33.186
       ],
       [
        119.226,
        33.2
       ],
       [
        119.254,
        33.201
       ],
       [
        119.304,
        33.164
       ],
       [
        119.349,
        33.078
       ],
       [
        119.346,
        33.024
       ],
       [
        119.372,
        33.0
       ],
       [
        119.397,
        32.916
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ],
       [
        119.407,
        32.794
       ]
      ]
     ]
    },
    "n": "Gaoyou Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        118.78,
        31.409
       ],
       [
        118.768,
        31.419
       ],
       [
        118.747,
        31.459
       ],
       [
        118.743,
        31.492
       ],
       [
        118.724,
        31.522
       ],
       [
        118.723,
        31.542
       ],
       [
        118.758,
        31.545
       ],
       [
        118.867,
        31.546
       ],
       [
        118.941,
        31.554
       ],
       [
        118.964,
        31.503
       ],
       [
        118.96,
        31.465
       ],
       [
        118.915,
        31.435
       ],
       [
        118.85,
        31.393
       ],
       [
        118.815,
        31.402
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ],
       [
        118.78,
        31.409
       ]
      ]
     ]
    },
    "n": "Shijiu Hu"
   },
   {
    "g": {
     "type": "Polygon",
     "coordinates": [
      [
       [
        117.941,
        31.521
       ],
       [
        117.912,
        31.522
       ],
       [
        117.83,
        31.57
       ],
       [
        117.784,
        31.579
       ],
       [
        117.706,
        31.524
       ],
       [
        117.623,
        31.455
       ],
       [
        117.563,
        31.445
       ],
       [
        117.468,
        31.467
       ],
       [
        117.382,
        31.536
       ],
       [
        117.317,
        31.592
       ],
       [
        117.297,
        31.65
       ],
       [
        117.315,
        31.697
       ],
       [
        117.366,
        31.709
       ],
       [
        117.413,
        31.694
       ],
       [
        117.434,
        31.651
       ],
       [
        117.448,
        31.61
       ],
       [
        117.487,
        31.593
       ],
       [
        117.543,
        31.591
       ],
       [
        117.594,
        31.609
       ],
       [
        117.652,
        31.654
       ],
       [
        117.733,
        31.66
       ],
       [
        117.81,
        31.621
       ],
       [
        117.919,
        31.551
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ],
       [
        117.941,
        31.521
       ]
      ]
     ]
    },
    "n": "Chao Hu"
   }
  ],
  "_bbox": [
   115.78,
   31.06,
   119.8,
   34.2
  ]
 }
};
