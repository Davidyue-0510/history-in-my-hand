// 明末辽东—漠南 演化规则（声明式三阶层）
// 阶段2（04 Phase2）：单场景确定性推演。
// 把 agent_sim.html 的"土地兼并+教育垄断"双引擎重写为 04 三阶层模型的实例化，
// 抽出为声明式规则集——机制本体以 04 为权威（unified_dimensions.md §5）。
// 关键约束：确定性（无 Math.random）。每条史实征服在给定参数下"是否成功施加"
// 由 intrinsicP(seed) < eff(to) 决定，seed 由 (year,place_id,to) 确定性派生。
// 默认参数（执行力=1、扩散=1）→ 100% 精确重放史实（可验证）；调参=确定性反事实。
// 维度占位：隐藏维度（#6/#7/#9/#10/#11/#12/#13/#16）在契约里"可以不显示但不能没有"。
window.SIM_RULES = {
 "meta": {
  "title": "明末辽东—漠南 确定性推演规则（三阶层实例化）",
  "authority": "docs/04-evolution-rules.md（三阶层理性人模型）",
  "tick": 1,
  "tickUnit": "年",
  "engine": "deterministic-replay",
  "determinism": "intrinsicP(seed) 由 (year,place_id,to) 的 FNV-1a 哈希确定性派生，无 Math.random；同参同结果可复现"
 },

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
  { "id": "qingExec", "label": "清方执行力", "default": 1.0, "min": 0.3, "max": 1.0, "step": 0.05, "unit": "", "desc": "后金/清方每条征服成功阈值；=1 时 intrinsicP<1 恒成立→全部达成" },
  { "id": "mingExec", "label": "明方执行力", "default": 1.0, "min": 0.3, "max": 1.0, "step": 0.05, "unit": "", "desc": "明方守住/收复的阈值；=1 时恒达成" },
  { "id": "spreadPref", "label": "扩散偏好", "default": 1.0, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "非争议征服要求至少一邻格已属攻方才易取；<1 时无邻格需二次确定性抽检" },
  { "id": "centerStability", "label": "中枢稳定度(三阶层)", "default": 0.9, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "center 阶层指标，阶段2仅派生展示（#13 反馈环输入）" },
  { "id": "localEduMono", "label": "地方教育垄断(三阶层)", "default": 0.3, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "local 阶层指标；>0.7 持续3代→阶层固化（反馈环 R2）" },
  { "id": "grassrootMob", "label": "底层动员度(三阶层)", "default": 0.1, "min": 0.0, "max": 1.0, "step": 0.05, "unit": "", "desc": "grassroot 阶层指标；(1-eduMono)*贫困>0.8→革命（反馈环 R3）" }
 ],

 // 声明式规则集（引擎解释执行；部分规则在阶段2仅计算派生值，阶段3/4 反控控制图）
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
   "desc": "阶层固化循环：教育垄断指数 eduMono>0.7 持续 3 代→阶层固化（local 重新组织、胜利果实被窃取）。阶段2仅计算 eduMono 快照，阶段3/4 反控控制图。",
   "source": "04 §阶层固化与循环",
   "formula": "petrified = (localEduMono > 0.7) for >=3 consecutive ticks",
   "activeInPhase": "3"
  },
  {
   "id": "R3",
   "type": "feedback",
   "desc": "底层革命：动员度 = (1-eduMono) * 贫困；>0.8→底层革命爆发，随机夺取若干县（阶段2仅计算展示）。",
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
   "desc": "精英/家族利益：家族利益 = 控制县数×资源系数 + 官位权重；受 center 压制度约束（center 强→压制叛乱概率高）。阶段2仅计算展示。",
   "source": "04 §精英决策",
   "formula": "familyInterest = controlledCount * resCoef + officeWeight; constraint = centerStability",
   "activeInPhase": "3"
  }
 ],

 // 反事实分支（#12 分支管理）：override 参数 / block 抑制转移 / force 强制转移
 "branches": [
  {
   "id": "B1_guard_guangning",
   "label": "反事实 A：明方死守广宁",
   "desc": "1622 年广宁守军未被击溃，广宁维持明方（史实为弃守→contested）。其余按史实执行力推演。",
   "block": [ { "year": 1622, "place_id": "guangning" } ],
   "override": {}
  },
  {
   "id": "B2_weak_jin",
   "label": "反事实 B：后金执行力不足",
   "desc": "清方执行力降为 0.4，多数征服在确定性抽检下不达成，推演显著偏离史实。",
   "block": [],
   "override": { "qingExec": 0.4 }
  },
  {
   "id": "B3_strong_ming",
   "label": "反事实 C：明方固守 + 后金受挫",
   "desc": "明方执行力满格、后金执行力 0.5，辽东走廊更可能滞留明方。",
   "block": [],
   "override": { "mingExec": 1.0, "qingExec": 0.5 }
  }
 ],

 // 诚实占位：缺失/部分维度"可以不显示但不能没有"（#6/#7/#9/#10/#11/#13/#16）
 // 每个 latent 维度必须带 dist（概率/不确定性分布），落实 unified_dimensions §4 "假装确定"拦截。
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
   "desc": "后勤/补给约束：whatif.html 仅局部建模（辽东走廊补给线）。阶段2未全局化；此处挂占位 dist，待 data/<scene>/logistics.json。",
   "dist": { "type": "prior", "mean": 0.6, "sd": 0.2, "note": "占位先验，非实测" }
  },
  "population": {
   "dim": 10,
   "status": "partial",
   "desc": "人口/经济基底：impact.json 提供 deaths/mortality（灾变），但缺每治所人口基线；阶段2以 threeTier.poverty 派生代理。",
   "dist": { "type": "prior", "mean": 1.0, "sd": 0.3, "unit": "相对万户", "note": "占位先验" }
  }
 }
};
