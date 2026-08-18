// 党派内耗（R6）校准器：复刻引擎纯函数 + 载入派系单源包，离线对比「旧公式 vs 新公式」。
// 目的：改 R6 之前先知道内耗量级会怎么变，避免盲跑无头探针（慢）后才发现分支偏离数失控。
// 用法：node tools/calib_faction.js [起年] [止年]
// 依赖：demo/_faction_ming.js（由 python tools/gen_faction_bundle.py 生成）
'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.dirname(__dirname);
const win = {};
(new Function('window', fs.readFileSync(path.join(ROOT, 'demo/_faction_ming.js'), 'utf8')))(win);
const V = win.FACTION_VOCAB;
if (!V) { console.error('[FAIL] 未载入 FACTION_VOCAB'); process.exit(1); }

const FACT = V.factions.map(f => Object.assign({}, f));
const DYN = V.dynamics;

function seedHash(str) {
  let h = 2166136261 >>> 0;
  for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
  return (h >>> 0) / 4294967296;
}
const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
const activeAt = Y => FACT.filter(f => f.side === 'ming' && Y >= f.period[0] && Y <= f.period[1]);

// 旧公式（v0.56）：仅「派系数 + 私利方差」，未用 power / reinforce / beliefNoFall
function oldInfight(Y) {
  const active = activeAt(Y);
  if (!active.length) return 0;
  const h = seedHash('court|' + active.map(f => f.id).sort().join(','));
  const frac = active.length / FACT.length;
  let mean = 0; active.forEach(f => mean += f.selfInterest); mean /= active.length;
  let varc = 0; active.forEach(f => varc += (f.selfInterest - mean) ** 2); varc /= active.length;
  const diversity = 0.5 * frac + 0.5 * Math.sqrt(varc);
  return clamp((1 - DYN.courtCohesionBase) * (0.4 + 0.6 * diversity) * (0.5 + 0.5 * h), 0, 0.95);
}

// 新公式（v0.62）：power 加权私利 + 「信明不亡 × 不愿增援」= 边患忽视度
function newDetail(Y) {
  const active = activeAt(Y);
  if (!active.length) return { infight: 0, n: 0, wSelf: 0, wReinf: 0, belief: 0, neglect: 0, drive: 0, diversity: 0 };
  const W = active.reduce((s, f) => s + f.power, 0) || active.length;
  const wgt = f => f.power / W;
  let wSelf = 0, wReinf = 0, belief = 0;
  active.forEach(f => { wSelf += wgt(f) * f.selfInterest; wReinf += wgt(f) * f.reinforce; belief += wgt(f) * (f.beliefNoFall ? 1 : 0); });
  let varc = 0; active.forEach(f => { varc += wgt(f) * (f.selfInterest - wSelf) ** 2; });
  const frac = active.length / FACT.length;
  const diversity = clamp(0.5 * frac + 0.5 * Math.sqrt(varc), 0, 1);
  const neglect = clamp(belief * (1 - wReinf), 0, 1);
  const drive = clamp(0.5 * wSelf + 0.5 * neglect, 0, 1);
  const h = seedHash('court|' + active.map(f => f.id).sort().join(','));
  const infight = clamp((1 - DYN.courtCohesionBase) * (0.4 + 0.6 * diversity) * (0.6 + 0.8 * drive) * (0.5 + 0.5 * h), 0, 0.95);
  return { infight, n: active.length, wSelf, wReinf, belief, neglect, drive, diversity };
}

const y0 = parseInt(process.argv[2] || '1616', 10);
const y1 = parseInt(process.argv[3] || '1644', 10);
const AMP = 0.45; // B4/B6 分支里 factionInfightAmp 的取值量级

console.log('派系单源：' + V.meta.source + '  九派=' + FACT.length + '  cohesion=' + DYN.courtCohesionBase + '  amp=' + DYN.infightAmp);
console.log('年份  活跃  旧infight  新infight   Δ      加权私利 加权增援 忽视度  明方执行力×(amp=' + AMP + ')');
let seen = new Set(), maxDelta = 0;
for (let Y = y0; Y <= y1; Y++) {
  const o = oldInfight(Y), d = newDetail(Y);
  const key = d.n + '|' + d.wSelf.toFixed(3);
  const delta = d.infight - o;
  if (Math.abs(delta) > Math.abs(maxDelta)) maxDelta = delta;
  if (!seen.has(key)) {                       // 只打印每个「活跃派系组合」的第一年，避免 29 行重复
    seen.add(key);
    console.log(String(Y) + '   ' + String(d.n).padStart(2) + '   ' +
      o.toFixed(4) + '     ' + d.infight.toFixed(4) + '   ' + (delta >= 0 ? '+' : '') + delta.toFixed(4) + '   ' +
      d.wSelf.toFixed(3) + '    ' + d.wReinf.toFixed(3) + '    ' + d.neglect.toFixed(3) + '    ' +
      (1 - AMP * d.infight).toFixed(3));
  }
}
console.log('组合数=' + seen.size + '  最大量级偏移 Δ=' + (maxDelta >= 0 ? '+' : '') + maxDelta.toFixed(4) +
  '（|Δ|<0.02 视为量级基本持平 → 分支 B4/B6 的偏离数不应剧变）');
