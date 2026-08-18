// 萨尔浒之战（1619）推演初始条件（IC，维度#16）
// year0 = 1618 控制权快照（取自 SIM_DATA_SARHU.startControl，真实史料基底）+ 参数锚定默认值
// + 真实人物按派系分组（#3）+ 三阶层指标初值（#13 反馈环输入）+ 缺失维度实例化 dist（#7/#9/#10）。
// 与 SIM_IC（辽东）同构，仅 scene/year0/control/personsByFaction 改为萨尔浒；九派系动力学与三阶层初值复用。
// 自包含：file:// 双击可用，不依赖运行时 fetch；闸门可逐项校验字段存在性。
window.SIM_IC_SARHU = {
 "meta": {
  "scene": "sarhu",
  "year0": 1618,
  "derivedFrom": "SIM_DATA_SARHU.startControl (data/sarhu/control.json)",
  "note": "初始控制态=史实1618年真实控制（抚顺/清河已陷、赫图阿拉为后金都）；参数默认值=锚定重放（执行力/扩散=1 → 100% 重放四路尽墨）"
 },

 // 初始控制权快照（place_id -> 控制方），15 战略控制点
 "control": {
  "hetuala": "清方", "jiefan": "清方", "sarhu": "清方", "jilinya": "清方",
  "fushun": "清方", "qinghe": "清方",
  "shenyang": "明方", "kaiyuan": "明方", "kuandian": "明方",
  "shangjianya": "明方", "feifenshan": "明方", "niumaozhai": "明方",
  "abudaligang": "明方", "fucha": "明方", "yehe": "明方"
 },

 // 参数锚定默认值（与 SIM_RULES_SARHU.params[].default 同值；引擎以此初始化）
 "params": { "qingExec": 1.0, "mingExec": 1.0, "spreadPref": 1.0, "centerStability": 0.9, "localEduMono": 0.3, "grassrootMob": 0.1, "factionInfightAmp": 0.0, "logisticsPenalty": 0.0, "winterPenalty": 0.75 },

 // 真实人物按派系分组（维度#3 派系/立场动因）：id 列表 + 计数
 "personsByFaction": {
  "feng_jiang": { "count": 10, "ids": ["yanggao","dusong","wangxuan","zhaomenglin","malin","panzongyan","gongnian","liruobai","liuting","qiaoyilang"], "side": "ming", "label": "明方·封疆（萨尔浒四路主将及幕僚）" },
  "无派系": { "count": 8, "ids": ["kanghonglip","kimkyungsuh","liminhwan","jinyinghe","nurhaci","daishan","huangtaiji","eyidu"], "side": "mixed", "label": "无明确派系(后金宗室/朝鲜将)" }
 },

 // 明末九大利益派系（#3）与朝堂内耗动力学：
 // ⚠ 不在此硬编码。单一真值 = data/vocab/ming_qing.json（factions[].sim + faction_dynamics），
 //   经 tools/gen_faction_bundle.py 编译为 demo/_faction_ming.js，在文件末尾派生挂载。

 // 三阶层指标初值（#13 反馈环输入；阶段2仅派生展示，阶段3/4 反控控制图）
 "threeTier": {
  "centerStability": { "value": 0.9, "dist": { "type": "prior", "mean": 0.9, "sd": 0.1 } },
  "localEduMono":   { "value": 0.3, "dist": { "type": "prior", "mean": 0.3, "sd": 0.15 } },
  "grassrootMob":   { "value": 0.1, "dist": { "type": "prior", "mean": 0.1, "sd": 0.1 } },
  "legitimacy":     { "value": 0.9, "dist": { "type": "prior", "mean": 0.9, "sd": 0.1 } },
  "treasury":       { "value": 500, "dist": { "type": "prior", "mean": 500, "sd": 120 } },
  "milPower":       { "value": 100, "dist": { "type": "prior", "mean": 100, "sd": 30 } },
  "poverty":        { "value": 0.4, "dist": { "type": "prior", "mean": 0.4, "sd": 0.15 } }
 },

 // 缺失维度实例化 dist：与 SIM_RULES_SARHU.missing_dims 同构，此处给具体（退化/先验）值
 "missing_dims": {
  "probability": { "dim": 7, "status": "latent", "dist": { "type": "deterministic-hash", "family": "FNV-1a", "range": [0,1] } },
  "logistics":   { "dim": 9, "status": "implemented-required", "dist": { "type": "prior", "mean": 0.6, "sd": 0.2 }, "note": "物理维度提升为必开（v0.63）：R7 三约束——①超补给半径/冬季折扣 ②抵达时间窗 ③扎营水源(BM.rivers) ④粮草可持续，均整合进 sim_engine 物理层；折扣仅在 logisticsPenalty>0 时施加（=0→忠实重放）" },
  "population":  { "dim": 10, "status": "partial", "dist": { "type": "prior", "mean": 1.0, "sd": 0.3, "unit": "相对万户" } },
  "faction":     { "dim": 3, "status": "partial", "dist": { "type": "prior", "mean": 0.6, "sd": 0.2 }, "note": "九派系内斗→朝堂内耗（R6）：确定性映射为明方执行力折扣与守土崩溃风险；beliefs=各派皆信『明不亡』；参数单源=data/vocab/ming_qing.json" }
 }
};

// ── 派系单源挂载（#3）：见 demo/_faction_ming.js ──
(function(){
  var V = window.FACTION_VOCAB;
  if(!V || typeof V.attachTo!=='function'){
    console.error('[SIM_IC_SARHU] 缺少 _faction_ming.js（派系单一真值）：请先加载它并跑 python tools/gen_faction_bundle.py。');
    window.SIM_IC_SARHU.factions = [];
    window.SIM_IC_SARHU.factionDynamics = null;
    return;
  }
  V.attachTo(window.SIM_IC_SARHU);
})();
