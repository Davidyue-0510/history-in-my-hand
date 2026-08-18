// 自动生成 —— 请勿手改。源：data/vocab/ming_qing.json
//   （factions[].sim + factions[].period_years + faction_colors + faction_dynamics）
// 生成器：python tools/gen_faction_bundle.py
// 用途：明末九派推演参数的**唯一**前端真值源。sim_ic_*.js 与 sim_engine/sim_map 只读这里，
//       禁止在任何 demo 文件里再硬编码 power/selfInterest/reinforce/beliefNoFall。
// file:// 可用（普通 script 标签，不走 fetch）。
window.FACTION_VOCAB = {
 "meta": {
  "source": "data/vocab/ming_qing.json",
  "generated_by": "tools/gen_faction_bundle.py",
  "count": 9,
  "schema": "faction-sim/1",
  "note": "明末九派推演参数单一真值。power=朝堂相对影响力(prior)；selfInterest=私利优先度；reinforce=愿向前线增援度；beliefNoFall=是否相信「明不亡」（九派皆真，历史 irony：正因不信会亡才内斗不止）。beliefNote 记录各派具体的自欺逻辑（心怀鬼胎）。三个 0–1 标量均为先验估计，故 SIM_RULES/SIM_IC 的 missing_dims.faction 带 dist 诚实标注。"
 },
 "factions": [
  {
   "id": "donglin",
   "name": "东林党（清流）",
   "color": "#1B7A5A",
   "side": "ming",
   "period": [
    1594,
    1644
   ],
   "power": 0.55,
   "selfInterest": 0.6,
   "reinforce": 0.65,
   "beliefNoFall": true,
   "beliefNote": "清流必胜论：以为只需扫除阉党、正君心，边患自平；故倾全力于京察与三案翻覆，视辽饷为权柄消息而非军需。",
   "interest": "士大夫清议集团，反对矿税宦官、与阉党死仇；以『清流』自任。",
   "biasNote": "东林叙事系统性贬阉党、褒清流：对己方人物（杨涟/熊廷弼/袁化中）多美化，对军事败绩常诿过阉党与浙党中枢；对『移宫』『红丸』三案的叙述高度立场化。",
   "bases": [
    "无锡",
    "常州",
    "苏州"
   ]
  },
  {
   "id": "eunuch",
   "name": "阉党（魏忠贤集团）",
   "color": "#7B241C",
   "side": "ming",
   "period": [
    1621,
    1627
   ],
   "power": 0.75,
   "selfInterest": 0.8,
   "reinforce": 0.4,
   "beliefNoFall": true,
   "beliefNote": "内廷可控论：以为兵权财权尽握内府即万无一失，边将存亡取决于是否附己；广宁失后先诿熊廷弼而不补边。",
   "interest": "宦官与依附官僚专政，打击东林、编《三朝要典》翻三案。",
   "biasNote": "阉党文献（《三朝要典》）系统性诬东林、为魏忠贤张目；对广宁之失诿过熊廷弼、为阉党边臣（王化贞等）开脱；对天启朝军事败绩尽量淡化。",
   "bases": [
    "幽州",
    "赫图阿拉"
   ]
  },
  {
   "id": "zhe_dang",
   "name": "浙党",
   "color": "#B9770E",
   "side": "ming",
   "period": [
    1596,
    1620
   ],
   "power": 0.6,
   "selfInterest": 0.65,
   "reinforce": 0.55,
   "beliefNoFall": true,
   "beliefNote": "中枢粉饰论：以为讳败即无败；萨尔浒丧师后压低损数、护杨镐，以保枢辅不倒。",
   "interest": "以沈一贯、方从哲为首的浙籍官僚，主导万历后期中枢，与东林争国本、争枚卜。",
   "biasNote": "浙党主导万历后期中枢与枢辅，对辽东兵事奏报多护短、讳败；萨尔浒丧师后中枢讳言真实损失数字，杨镐讳败即其例。",
   "bases": [
    "杭州"
   ]
  },
  {
   "id": "chu_dang",
   "name": "楚党",
   "color": "#CA6F1E",
   "side": "ming",
   "period": [
    1596,
    1620
   ],
   "power": 0.35,
   "selfInterest": 0.6,
   "reinforce": 0.55,
   "beliefNoFall": true,
   "beliefNote": "结盟自保论：以为附浙党即可长保中枢，边事只是攻东林的题目而非亡国之危。",
   "interest": "楚籍官僚（官应震、吴亮嗣），与浙党合、攻东林。",
   "biasNote": "楚党与浙党同盟，党争叙事中常护中枢、贬封疆，对辽东兵额奏销有修饰空间。",
   "bases": [
    "武昌"
   ]
  },
  {
   "id": "qi_dang",
   "name": "齐党",
   "color": "#B7950B",
   "side": "ming",
   "period": [
    1596,
    1620
   ],
   "power": 0.45,
   "selfInterest": 0.62,
   "reinforce": 0.55,
   "beliefNoFall": true,
   "beliefNote": "兵额账面论：身居主兵中枢，以为册上有兵即实有兵，讳言辽东缺额与逃亡。",
   "interest": "齐籍官僚（亓诗教、周永春），与浙楚合攻东林，多居主兵、中枢。",
   "biasNote": "齐党多在主兵中枢，对辽东兵额与奏销有修饰空间，讳言缺额。",
   "bases": [
    "济南"
   ]
  },
  {
   "id": "xuan_kun",
   "name": "宣党 / 昆党",
   "color": "#A04000",
   "side": "ming",
   "period": [
    1600,
    1620
   ],
   "power": 0.25,
   "selfInterest": 0.55,
   "reinforce": 0.6,
   "beliefNoFall": true,
   "beliefNote": "科场根本论：以为国本在科举座主而不在边墙，京察得手即万事可定。",
   "interest": "宣城汤宾尹、昆山顾天埈为首的小集团，主要影响科举与京察。",
   "biasNote": "小集团，主要污染科举与京察叙事，对辽东军务直接影响小。",
   "bases": [
    "宣城",
    "昆山"
   ]
  },
  {
   "id": "yan_shang",
   "name": "盐商 / 盐政利益",
   "color": "#2874A6",
   "side": "ming",
   "period": [
    1583,
    1644
   ],
   "power": 0.5,
   "selfInterest": 0.7,
   "reinforce": 0.7,
   "beliefNoFall": true,
   "beliefNote": "输饷即忠论：以为加派可无穷输、商民必乐输；不问加派激出的民变会先烧穿内地。",
   "interest": "两淮、长芦盐商及其利益相关官僚，是辽饷加派的重要来源。",
   "biasNote": "盐商是辽饷（镇压后金）的财政支柱，叙事倾向夸大捐输、讳言逋欠；对『辽饷加派』造成的民变与社会压力记载有利益倾向，常把加派说成『商民乐输』。",
   "bases": [
    "扬州"
   ]
  },
  {
   "id": "nei_guan",
   "name": "内臣 / 宦官（独立于阉党）",
   "color": "#5D6D7E",
   "side": "ming",
   "period": [
    1583,
    1644
   ],
   "power": 0.4,
   "selfInterest": 0.55,
   "reinforce": 0.5,
   "beliefNoFall": true,
   "beliefNote": "监军自利论：矿税监视辽东为利源（高淮乱辽），以为边军可榨而不溃。",
   "interest": "内廷宦官系统：监军、镇守、矿税监。",
   "biasNote": "辽东矿税监高淮横征激变、削弱边防，其记载与其他派系互相攻讦；刘若愚《酌中志》为内臣自述，价值在宫禁内部视角，但魏忠贤败后刘若愚自辩，亦带立场。",
   "bases": [
    "幽州"
   ]
  },
  {
   "id": "feng_jiang",
   "name": "封疆大吏 / 辽东经略系",
   "color": "#C0392B",
   "side": "ming",
   "period": [
    1583,
    1644
   ],
   "power": 0.7,
   "selfInterest": 0.75,
   "reinforce": 0.85,
   "beliefNoFall": true,
   "beliefNote": "本镇独存论：以为守住本镇即为功，败则诿邻镇/中枢、胜则夸报，宁内斗不协同。",
   "interest": "经略、总督、巡抚等前线主官及其幕僚，对败绩诿过、对战功夸张。",
   "biasNote": "前线主官文集/奏议天然护己：杨镐讳败、熊廷弼攻王化贞、袁崇焕夸大恢复、毛文龙虚报兵额——皆为立场来源。其价值在『当事人自述』，但须与敌对方、第三方对读。",
   "bases": [
    "辽阳",
    "沈阳"
   ]
  }
 ],
 "dynamics": {
  "courtCohesionBase": 0.85,
  "infightAmp": 0.45,
  "note": "朝堂内耗动力学单一真值（原 sim_ic_*.js 的 factionDynamics）。用户洞察：明末各派皆信『明不亡』，故把资源投向党内争斗而非边患→朝堂内耗确定性映射为明方执行力折扣与守土崩溃风险（SIM_RULES R6）。court_cohesion_base=朝堂基准凝聚度；infight_amp=内耗对前线的传导振幅上限。"
 }
};
(function(){ var B=window.FACTION_VOCAB; B.byId={};
 B.factions.forEach(function(f){ B.byId[f.id]=f; });
 B.activeAt=function(Y,side){ return B.factions.filter(function(f){
   return (!side || f.side===side) && Y>=f.period[0] && Y<=f.period[1]; }); };
 // 把单源派系挂到某个 SIM_IC 上（各场景 IC 共用同一份九派；深拷贝防跨场景串改）。
 B.attachTo=function(ic){
   if(!ic) return false;
   ic.factions = B.factions.map(function(f){ return Object.assign({}, f); });
   ic.factionDynamics = Object.assign({}, B.dynamics);
   ic.factionSource = B.meta.source;
   return true;
 };
})();
