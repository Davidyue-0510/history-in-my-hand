// 明末辽东—漠南 推演初始条件（IC，维度#16）
// year0 = 1616 控制权快照（取自 SIM_DATA.startControl，真实史料基底）+ 参数锚定默认值
// + 真实人物按派系分组（#3）+ 三阶层指标初值（#13 反馈环输入）+ 缺失维度实例化 dist（#7/#9/#10）。
// 自包含：file:// 双击可用，不依赖运行时 fetch；闸门可逐项校验字段存在性。
window.SIM_IC = {
 "meta": {
  "scene": "liaodong",
  "year0": 1616,
  "derivedFrom": "SIM_DATA.startControl (data/control_liaodong.json)",
  "note": "初始控制态=史实1616年真实控制；参数默认值=锚定重放（执行力/扩散=1 → 100% 重放）"
 },

 // 初始控制权快照（place_id -> 控制方），36 治所
 "control": {
  "hetuala": "清方", "fushun": "明方", "qinghe": "明方", "kaiyuan": "明方", "tieling": "明方",
  "shenyang": "明方", "liaoyang": "明方", "gaizhou": "明方", "haizhou": "明方", "niuzhuang": "明方",
  "yaozhou": "明方", "xiongyue": "明方", "fuzhou": "明方", "jinzhou_dalian": "明方", "lushun": "明方",
  "guangning": "明方", "yizhou": "明方", "jinzhou": "明方", "dalinghe": "明方", "songshan": "明方",
  "xingshan": "明方", "ningyuan": "明方", "shanhaiquan": "明方", "horqin": "明方", "chahar": "明方",
  "harqin": "明方", "tumed": "明方", "ordos": "明方", "jizhou": "明方", "beijing": "明方",
  "xuanfu": "明方", "datong": "明方", "ningguta": "清方", "jilin": "清方", "qiqihar": "清方", "aigun": "清方"
 },

 // 参数锚定默认值（与 SIM_RULES.params[].default 同值；引擎以此初始化）
 "params": { "qingExec": 1.0, "mingExec": 1.0, "spreadPref": 1.0, "centerStability": 0.9, "localEduMono": 0.3, "grassrootMob": 0.1 },

 // 真实人物按派系分组（维度#3 派系/立场动因）：id 列表 + 计数
 "personsByFaction": {
  "feng_jiang": { "count": 10, "ids": ["yanggao","dusong","wangxuan","zhaomenglin","malin","panzongyan","gongnian","liruobai","liuting","qiaoyilang"], "side": "ming", "label": "明方·封疆" },
  "无派系": { "count": 8, "ids": ["kanghonglip","kimkyungsuh","liminhwan","jinyinghe","nurhaci","daishan","huangtaiji","eyidu"], "side": "mixed", "label": "无明确派系(后金宗室/朝鲜将)" }
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

 // 缺失维度实例化 dist：与 SIM_RULES.missing_dims 同构，此处给具体（退化/先验）值
 // 落实 unified_dimensions §4：隐藏维度"可以不显示但不能没有"，且必须带 dist。
 "missing_dims": {
  "probability": { "dim": 7, "status": "latent", "dist": { "type": "deterministic-hash", "family": "FNV-1a", "range": [0,1] } },
  "logistics":   { "dim": 9, "status": "partial", "dist": { "type": "prior", "mean": 0.6, "sd": 0.2 } },
  "population":  { "dim": 10, "status": "partial", "dist": { "type": "prior", "mean": 1.0, "sd": 0.3, "unit": "相对万户" } }
 }
};
