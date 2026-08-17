// 萨尔浒之战（1619）确定性推演规则（声明式三阶层，与 SIM_RULES 同构）
// 复用辽东规则本体（R1-R7 确定性裁决、R6 党派内耗、R7 后勤物理），
// 仅把反事实分支 B1-B6 改为萨尔浒战局语义、keySeats 改为萨尔浒关键据点。
// 任何新历史事件直接复用本模板——同一契约、零改造引擎。
window.SIM_RULES_SARHU = {
 "meta": {
  "title": "萨尔浒之战 确定性推演规则（三阶层实例化）",
  "scene": "sarhu",
  "authority": "docs/04-evolution-rules.md（三阶层理性人模型）",
  "tick": 1,
  "tickUnit": "年",
  "engine": "deterministic-replay",
  "uiHint": "世界=萨尔浒之战（1619）真实史料（15 控制点 / 6 史实转移）。机制=04 三阶层实例化：每条史实征服按 <code>intrinsicP(seed)&lt;eff</code> 确定性裁决。默认=100% 重放「四路尽墨」；调参/分支=确定性反事实。萨尔浒是单次会战，故时间窗压缩为 1618（抚顺/清河已陷）→ 1619（四路覆没）。",
  "determinism": "intrinsicP(seed) 由 (year,place_id,to) 的 FNV-1a 哈希确定性派生，无 Math.random；同参同结果可复现"
 },

 // 萨尔浒关键据点（beKeySeats 覆盖；分支事件 divergence 优先在此取锚点）
 "keySeats": ["sarhu","shangjianya","abudaligang","fucha","hetuala"],

 // 推演状态变量（引擎逐 tick 维护；部分在阶段2仅作派生展示，阶段3/4 才反控控制图）
 "state_vars": {
  "control": "place_id -> 当前控制方（明方/清方/contested），主干状态",
  "centerStability": "中枢稳定度（center 利益：稳定/发展）",
  "localEduMono": "地方教育垄断指数（local 利益：话语权）",
  "grassrootMob": "底层动员度（grassroot 利益：日子有盼头）",
  "legitimacy": "政权合法性",
  "treasury": "国库（center 资源）",
  "milPower": "军队（center 资源）",
  "poverty": "贫困指数（grassroot 资源约束）"
 },

 // 可调参数：默认=锚定史实重放；调参=确定性反事实（#16 初始条件参数化）
 "params": [
  { "id": "qingExec", "label": "后金执行力", "default": 1.0, "min": 0.3, "max": 1.0, "step": 0.05, "unit": "", "desc": "后金每条征服成功阈值；=1 时 intrinsicP<1 恒成立→全部达成（重放史实）" },
  { "id": "mingExec", "label": "明方执行力", "default": 1.0, "min": 0.3, "max": 1.0, "step": 0.05, "unit": "", "desc": "明方守住/收复的阈值；=1 时恒达成" },
  { "id": "spreadPref", "label": "扩散偏好", "default": 1.0, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "非争议征服要求至少一邻格已属攻方才易取；<1 时无邻格需二次确定性抽检" },
  { "id": "centerStability", "label": "中枢稳定度(三阶层)", "default": 0.9, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "center 阶层指标，阶段2仅派生展示" },
  { "id": "localEduMono", "label": "地方教育垄断(三阶层)", "default": 0.3, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "local 阶层指标" },
  { "id": "grassrootMob", "label": "底层动员度(三阶层)", "default": 0.1, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "grassroot 阶层指标" },
  { "id": "factionInfightAmp", "label": "党派内耗强度", "default": 0.0, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "启用党派因素：朝堂内耗对明方执行力的折扣系数；=0 关闭→100%重放" },
  { "id": "logisticsPenalty", "label": "后勤物理约束", "default": 0.0, "min": 0.0, "max": 0.6, "step": 0.05, "unit": "", "desc": "启用 whatif 物理极限：超补给半径/冬季行军对攻击方执行力的折扣系数；=0 关闭→重放" },
  { "id": "winterPenalty", "label": "冬季行军系数", "default": 0.75, "min": 0.4, "max": 1.0, "step": 0.05, "unit": "", "desc": "冬季有效行军速×该系数（whatif 同源：雪阻路冻）；仅 logisticsPenalty>0 时生效" }
 ],

 // 声明式规则集（与辽东同构，阶段2主力 R1/R6/R7）
 "rules": [
  {
   "id": "R1",
   "type": "adjudicate_transition",
   "desc": "战争裁决：每条史实征服在给定执行力下是否'成功施加'。success = intrinsicP(seed) < eff(to)；争议(contested)必然发生。扩散偏好<1 且攻方非争议、目标无邻格属攻方时，需二次确定性抽检 intrinsicP2 < spreadPref。",
   "source": "04 §战争裁决 / §跨迭代状态",
   "formula": "success = (to=='contested') ? true : (intrinsicP(year,place_id,to) < eff(to)) && (spreadPref>=1 || to==contested || hasNeighbor(to) || intrinsicP2(year,place_id,to) < spreadPref)",
   "deterministic": true,
   "activeInPhase": "2"
  },
  {
   "id": "R2",
   "type": "feedback",
   "desc": "阶层固化循环：教育垄断指数 eduMono>0.7 持续 3 代→阶层固化（local 重新组织、胜利果实被窃取）。阶段2仅计算 eduMono 快照。",
   "source": "04 §阶层固化与循环",
   "formula": "petrified = (localEduMono > 0.7) for >=3 consecutive ticks",
   "activeInPhase": "3"
  },
  {
   "id": "R3",
   "type": "feedback",
   "desc": "底层革命：动员度 = (1-eduMono) * 贫困；>0.8→底层革命爆发。阶段2仅计算展示。",
   "source": "04 §阶层固化与循环",
   "formula": "mob = (1 - localEduMono) * poverty; revolt = mob > 0.8",
   "activeInPhase": "3"
  },
  {
   "id": "R4",
   "type": "compute_product",
   "desc": "局部兵力比：每格驻军=总兵力/控制县数×分配系数；局部兵力比=攻方投入/守方驻军；>1.5→胜。阶段2不独立重算（控制权来自史料转移），作为派生解释量。",
   "source": "04 §战争裁决",
   "formula": "localRatio = atkInvest / defGarrison; win = localRatio > 1.5",
   "activeInPhase": "3"
  },
  {
   "id": "R5",
   "type": "compute_linear",
   "desc": "精英/家族利益：家族利益 = 控制县数×资源系数 + 官位权重；受 center 压制度约束。阶段2仅计算展示。",
   "source": "04 §精英决策",
   "formula": "familyInterest = controlledCount * resCoef + officeWeight; constraint = centerStability",
   "activeInPhase": "3"
  },
  {
   "id": "R6",
   "type": "feedback_court",
   "desc": "党派内耗→明方削弱（#3延伸）：每年活跃派系(period 覆盖当年)越多、利益越分化、朝堂凝聚越低，内耗越高。① 对明方作场的转移，明方执行力 = mingExec×(1−infightAmp×内耗)；② 防御侧(明方为 from)攻方更易得手 eff×min(1,1+infightAmp×内耗×0.6)；③ 模型推演：内耗高时部分明方治所守军溃散降为 contested（确定性哈希命中，非史载转移）。全部确定性（无 RNG）。",
   "source": "用户洞察：各派皆信明不亡→党争优先于边患",
   "formula": "infight=(1−courtCohesion)·(0.4+0.6·diversity)·(0.5+0.5·hash(activeSet)); mingEff=mingExec·(1−amp·infight); collapse if hash('collapse|Y|id')<amp·infight·0.5",
   "activeInPhase": "2"
  },
  {
   "id": "R7",
   "type": "physical_logistics",
   "desc": "whatif 物理极限→攻击方投送折扣（后勤/行军模型同源）：攻击方需自最近已控治所投送兵力。两段模型——①超补给半径(明300km/清400km)：投送不可达，战役无法维持，执行力压至近似0（硬失败）；②半径内：距最近治所越远投送越难，叠加冬季雪阻路冻(winterPenalty)与基础辎重摩擦，按比例削减攻击方执行力（软失败）。季节按 seedHash 确定性派生，少量关键战役用史载月份。仅 logisticsPenalty>0 时生效（=0→重放）。",
   "source": "whatif.html 后勤/行军模型（RATES/RATION/WINTER_RATE/补给半径）",
   "formula": "if dist>radius: eff=min(eff,0.015); else: gentle=clamp(1-(dist/radius)*0.35,0.45,1); baseFric=1-logisticsPenalty*0.4; eff*= gentle * winterFactor * baseFric",
   "activeInPhase": "2"
  }
 ],

 // 反事实分支（#12 分支管理）：override 参数 / block 抑制转移 / force 强制转移
 // 全部锚定萨尔浒战局语义；B1=block 全部 1619 转移（四路合击成功），B2-B6=参数化反事实。
 "branches": [
  {
   "id": "B1_four_route",
   "label": "反事实 A：四路如期合击",
   "desc": "明军四路按原计划如期抵达、相互呼应（史实为杜松贪功冒进、诸路失期），后金无法『凭尔几路来我只一路去』集中打击。block 全部 6 处 1619 史实转移→明方控制线维持。",
   "block": [
     { "year": 1619, "place_id": "shangjianya" },
     { "year": 1619, "place_id": "feifenshan" },
     { "year": 1619, "place_id": "niumaozhai" },
     { "year": 1619, "place_id": "abudaligang" },
     { "year": 1619, "place_id": "fucha" },
     { "year": 1619, "place_id": "yehe" }
   ],
   "override": {}
  },
  {
   "id": "B2_dusong_prudent",
   "label": "反事实 B：杜松持重不冒进",
   "desc": "西路主将杜松不轻敌分兵攻吉林崖，建制完整地拖住后金主力，使后金执行力降为 0.4——多数征服在确定性抽检下不达成。",
   "block": [],
   "override": { "qingExec": 0.4 }
  },
  {
   "id": "B3_liuting_timely",
   "label": "反事实 C：刘綎东路及时赶到",
   "desc": "东路主将刘綎不为地形所阻、按期抵达阿布达里岗与北路军形成呼应，明方执行力满格、后金执行力 0.5，战场态势逆转。",
   "block": [],
   "override": { "mingExec": 1.0, "qingExec": 0.5 }
  },
  {
   "id": "B4_faction",
   "label": "反事实 D：党争误国",
   "desc": "启用党派因素（factionInfightAmp=0.6）：经略杨镐受朝堂掣肘、各路协调失灵、增援互不相救，明方执行力与守土被内耗削弱（模型推演额外崩溃）。",
   "block": [],
   "override": { "factionInfightAmp": 0.6 }
  },
  {
   "id": "B5_logistics",
   "label": "反事实 E：后金远征乏力",
   "desc": "启用 whatif 物理极限（logisticsPenalty=0.4）：后金新附诸部征调困难、补给线过长、春寒阻滞，部分史实征服在约束下不成立。",
   "block": [],
   "override": { "logisticsPenalty": 0.4 }
  },
  {
   "id": "B6_both",
   "label": "反事实 F：内耗+物理双开",
   "desc": "党派内耗(0.6)+后勤物理(0.4)同时开启，叠加反事实。",
   "block": [],
   "override": { "factionInfightAmp": 0.6, "logisticsPenalty": 0.4 }
  }
 ],

 // 诚实占位：缺失/部分维度"可以不显示但不能没有"（#6/#7/#9/#10/#11/#13/#16）
 "missing_dims": {
  "probability": {
   "dim": 7,
   "status": "latent",
   "desc": "每条史实征服的内在成功概率：intrinsicP(seed) 由 (year,place_id,to) 确定性派生，作为该转移的先验 dist。替代标量 confidence。",
   "dist": { "type": "deterministic-hash", "family": "FNV-1a", "range": [0, 1], "interpretation": "intrinsicP < eff(to) 则成功" }
  },
  "logistics": {
   "dim": 9,
   "status": "partial",
   "desc": "后勤/补给约束：已整合进 sim_engine 物理层(R7)，每处征服按最近已控基地投送距离+季节判定（超补给半径/冬季按比例削减攻击方执行力）；同源 whatif.html 行军/粮草模型。仍为 prior 而非逐营实测。",
   "dist": { "type": "prior", "mean": 0.6, "sd": 0.2, "note": "占位先验，非实测" }
  },
  "population": {
   "dim": 10,
   "status": "partial",
   "desc": "人口/经济基底：萨尔浒为单次会战，缺每据点人口基线；阶段2以 threeTier.poverty 派生代理。",
   "dist": { "type": "prior", "mean": 1.0, "sd": 0.3, "unit": "相对万户", "note": "占位先验" }
  }
 }
};
