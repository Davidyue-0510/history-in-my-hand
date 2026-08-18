// tools/smoke_sim_layer.js
// 快速 Node 冒烟测试：验证 SimLayer 把引擎年状态 → ControlLayer intervals 的编译逻辑，
// 且不依赖浏览器 DOM / ControlLayer 真实实现（用桩替代）。
// 重点断言：
//   1) realIntervals / simIntervals 都能产出非空区间；
//   2) 默认参数（=100% 重放）下 sim 与 real 完全一致（divergence 全 0）；
//   3) 任一反事实分支下 sim 与 real 出现偏离（divergence > 0）。
const fs = require('fs');
const vm = require('vm');

const ROOT = __dirname.replace(/[\\/]tools$/, '');
const window = {};
const ctx = { window, console, Math, Object, Array, JSON, Date, URLSearchParams, isNaN, parseInt, parseFloat, String, Number };
vm.createContext(ctx);
function load(file) {
  const p = ROOT + '/' + file;
  try { vm.runInContext(fs.readFileSync(p, 'utf8'), ctx, { filename: p }); return true; }
  catch (e) { console.warn('  [load fail] ' + file + ': ' + e.message); return false; }
}

const order = [
  'demo/_sim_liaodong.js',
  'demo/sim_basemap.js',
  'demo/_faction_ming.js',
  'demo/sim_rules_liaodong.js',
  'demo/sim_ic_liaodong.js',
  'demo/sim_engine.js',
  'demo/sim_layer.js'
];
console.log('=== load order ===');
order.forEach(f => console.log((load(f) ? '  ok  ' : '  FAIL') + ' ' + f));

const core = window.SIM_CORE.create('liaodong');
console.log('core version:', core.version, '| seats:', core.SEATS.length, '| yearRange:', core.D.meta.startYear + '-' + core.D.meta.endYear);

// 桩 ControlLayer：只记录 setup 调用，不真渲染
let setupCalls = [];
const fakeCL = {
  setup(o) { setupCalls.push(o); },
  setCoast() {}, draw() {}, drawDiff() {}, repaint() {}, clear() {}, isReady() { return true; }
};

const Sim = window.SimLayer;
const ok = Sim.setup({
  core, controlLayer: fakeCL,
  cv: {}, px: () => 0, py: () => 0, getView: () => ({}), getCw: () => 800, getDpr: () => 1
});
console.log('SimLayer.setup ->', ok, '| isReady:', Sim.isReady());

const [y0, y1] = Sim.years();
const real = Sim.realIntervals();
console.log('realIntervals:', real.length, '| simIntervals(default):', Sim.simIntervals().length);

// 断言 2：默认 = 100% 重放 → 任意年份 divergence 应全 0
let maxDivDefault = 0;
for (let y = y0; y <= y1; y++) maxDivDefault = Math.max(maxDivDefault, Sim.divergenceAt(y, null).length);
console.log('max divergence under default params (expect 0):', maxDivDefault);

// 断言 3：每个反事实分支都应产生偏离
const branches = (core.R.branches || []).map(b => b.id);
console.log('branches:', branches.join(', '));
let branchesWithDiv = 0, sample = {};
branches.forEach(bid => {
  const div = Sim.divergenceAt(y1, bid).length;
  if (div > 0) { branchesWithDiv++; sample[bid] = div; }
});
console.log('branches producing divergence @' + y1 + ':', branchesWithDiv + '/' + branches.length, JSON.stringify(sample));

// 汇总断言
const pass = real.length > 0 && Sim.simIntervals().length > 0 && maxDivDefault === 0 && branchesWithDiv > 0;
console.log('\n=== SMOKE RESULT:', pass ? 'PASS' : 'FAIL', '===');
process.exit(pass ? 0 : 1);
