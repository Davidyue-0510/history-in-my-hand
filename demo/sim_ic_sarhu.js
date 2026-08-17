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

 // 明末九大利益派系（party=明方内部二次立场；立场靠 vocab/ming_qing.json 派生）。
 // 用户洞察：各派皆"以为明朝不会亡"，故把资源投向党内争斗而非边患 → 朝堂内耗削弱前线执行力（#3 延伸）。
 // period=该派在中枢活跃年窗；power=相对朝堂影响力(prior)；selfInterest=私利优先度；reinforce=愿向前线增援度；
 // beliefNoFall=皆信"明不亡"（历史 irony：恰恰因不信会亡而内斗不止）。全部确定性，无 RNG。
 "factions": [
  { "id":"donglin",   "name":"东林(清流)",      "color":"#1B7A5A", "side":"ming", "period":[1594,1644], "power":0.55, "selfInterest":0.60, "reinforce":0.65, "beliefNoFall":true },
  { "id":"eunuch",    "name":"阉党(魏忠贤)",    "color":"#7B241C", "side":"ming", "period":[1621,1627], "power":0.75, "selfInterest":0.80, "reinforce":0.40, "beliefNoFall":true },
  { "id":"zhe_dang",  "name":"浙党",            "color":"#B9770E", "side":"ming", "period":[1596,1620], "power":0.60, "selfInterest":0.65, "reinforce":0.55, "beliefNoFall":true },
  { "id":"chu_dang",  "name":"楚党",            "color":"#CA6F1E", "side":"ming", "period":[1596,1620], "power":0.35, "selfInterest":0.60, "reinforce":0.55, "beliefNoFall":true },
  { "id":"qi_dang",   "name":"齐党",            "color":"#B7950B", "side":"ming", "period":[1596,1620], "power":0.45, "selfInterest":0.62, "reinforce":0.55, "beliefNoFall":true },
  { "id":"xuan_kun",  "name":"宣党/昆党",       "color":"#A04000", "side":"ming", "period":[1600,1620], "power":0.25, "selfInterest":0.55, "reinforce":0.60, "beliefNoFall":true },
  { "id":"yan_shang", "name":"盐商/盐政利益",   "color":"#2874A6", "side":"ming", "period":[1583,1644], "power":0.50, "selfInterest":0.70, "reinforce":0.70, "beliefNoFall":true },
  { "id":"nei_guan",  "name":"内臣/宦官(独立)","color":"#5D6D7E", "side":"ming", "period":[1583,1644], "power":0.40, "selfInterest":0.55, "reinforce":0.50, "beliefNoFall":true },
  { "id":"feng_jiang","name":"封疆大吏/辽东系","color":"#C0392B", "side":"ming", "period":[1583,1644], "power":0.70, "selfInterest":0.75, "reinforce":0.85, "beliefNoFall":true }
 ],

 // 朝堂内耗动力学（#3 延伸；确定性，无 RNG）：
 // 每年活跃派系数越多、利益越分化、朝堂凝聚越低 → 内耗越高 → 前线(明方)执行力被削弱 / 守土崩溃。
 "factionDynamics": {
  "courtCohesionBase": 0.85,
  "infightAmp": 0.45,
  "note": "各派皆信『明不亡』，故党争优先于边患；内耗确定性映射为明方执行力折扣与守土崩溃风险（R6）。"
 },

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
  "logistics":   { "dim": 9, "status": "partial", "dist": { "type": "prior", "mean": 0.6, "sd": 0.2 }, "note": "已整合进 sim_engine 物理层(R7)：每处征服按最近已控基地投送距离+季节判定，超补给半径/冬季按比例削减攻击方执行力" },
  "population":  { "dim": 10, "status": "partial", "dist": { "type": "prior", "mean": 1.0, "sd": 0.3, "unit": "相对万户" } },
  "faction":     { "dim": 3, "status": "partial", "dist": { "type": "prior", "mean": 0.6, "sd": 0.2 }, "note": "九派系内斗→朝堂内耗（R6）：确定性映射为明方执行力折扣与守土崩溃风险；beliefs=各派皆信『明不亡』" }
 }
};
