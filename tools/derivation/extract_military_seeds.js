#!/usr/bin/env node
// 一次性迁移工具：从手书 demo/sim_ic_*.js / sim_rules_*.js 抽取
//   (a) 通用块 _shared.json（单源，供 derive_military_sim.py 复用；明清华三阶层模型本体）
//   (b) 每场景种子 military_seeds/<scene>.json（仅场景专属字段，零手 authoring 引擎唯一输入）
//   (c) 零漂移基准 tools/tests/fixtures/sim_ic_<scene>.json / sim_rules_<scene>.json
//       （原始数据对象 + meta._auto_derived=true，作为生成器反漂移校验基准）
//
// 运行：node tools/derivation/extract_military_seeds.js   （ROOT 由 __dirname 解析，cwd 无关）
//
// 安全：抽取阶段用无操作 FACTION_VOCAB，使末尾挂载 IIFE 变为 no-op，
// 抓到的 window.X 即纯数据对象字面量（不含 factions/factionDynamics，与「剥离 IIFE 附加」一致）。
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const DEMO = path.join(ROOT, 'demo');
const SEED_DIR = path.join(__dirname, 'military_seeds');
const FIX_DIR = path.join(ROOT, 'tools', 'tests', 'fixtures');

function loadGlobals(file) {
  const code = fs.readFileSync(file, 'utf8');
  const window = {};
  window.FACTION_VOCAB = { attachTo: function () {} };  // 无派系挂载（抽取阶段不需要真实挂载）
  // eslint-disable-next-line no-new-func
  const fn = new Function('window', 'console', code);
  fn(window, console);
  return window;
}

// 仅抽取逐字节一致（两场景 review 已逐字段确认）的块进 _shared；
// missing_dims 的 note/desc 文本两场景不同，留在种子内逐场景专属。
const GENERIC_IC_KEYS = ['params', 'threeTier'];
const GENERIC_RULES_KEYS = ['state_vars'];

function strip(obj, keys) {
  const o = JSON.parse(JSON.stringify(obj));
  for (const k of keys) delete o[k];
  return o;
}
function clone(o) { return JSON.parse(JSON.stringify(o)); }
function writeJson(p, o) {
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, JSON.stringify(o, null, 2) + '\n', 'utf8');
}

const scenes = [
  { scene: 'liaodong', icFile: 'sim_ic_liaodong.js', rulesFile: 'sim_rules_liaodong.js', icGlobal: 'SIM_IC', rulesGlobal: 'SIM_RULES' },
  { scene: 'sarhu', icFile: 'sim_ic_sarhu.js', rulesFile: 'sim_rules_sarhu.js', icGlobal: 'SIM_IC_SARHU', rulesGlobal: 'SIM_RULES_SARHU' },
];

for (const s of scenes) {
  const ic = loadGlobals(path.join(DEMO, s.icFile))[s.icGlobal];
  const rules = loadGlobals(path.join(DEMO, s.rulesFile))[s.rulesGlobal];
  if (!ic) throw new Error('fail load ' + s.icGlobal);
  if (!rules) throw new Error('fail load ' + s.rulesGlobal);

  // (c) 基准 = 原始数据对象 + _auto_derived（meta），作为零漂移校验基准
  const icFix = clone(ic); icFix.meta._auto_derived = true;
  const rulesFix = clone(rules); rulesFix.meta._auto_derived = true;
  writeJson(path.join(FIX_DIR, 'sim_ic_' + s.scene + '.json'), icFix);
  writeJson(path.join(FIX_DIR, 'sim_rules_' + s.scene + '.json'), rulesFix);

  // (b) 种子 = 原始去掉通用块（仅场景专属）
  const seed = {
    ic_global: s.icGlobal,
    rules_global: s.rulesGlobal,
    ic: strip(ic, GENERIC_IC_KEYS),
    rules: strip(rules, GENERIC_RULES_KEYS),
  };
  writeJson(path.join(SEED_DIR, s.scene + '.json'), seed);

  // (a) 通用块取 liaodong（两场景通用块逐字节一致，已在 review 中确认）
  if (s.scene === 'liaodong') {
    const sh = {
      ic_params: ic.params,
      ic_threeTier: ic.threeTier,
      ic_missing_dims: ic.missing_dims,
      rules_state_vars: rules.state_vars,
      rules_missing_dims: rules.missing_dims,
    };
    writeJson(path.join(SEED_DIR, '_shared.json'), sh);
  }
  console.log('extracted', s.scene,
    '| ic keys', Object.keys(ic).join(','),
    '-> seed.ic', Object.keys(seed.ic).join(','),
    '| rules keys', Object.keys(rules).join(','),
    '-> seed.rules', Object.keys(seed.rules).join(','));
}
console.log('done: wrote _shared.json + 2 seeds + 4 fixtures');
