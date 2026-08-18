// =====================================================================
// 确定性演化引擎「核心」——无 DOM、可复用（v0.62 抽取自 sim_engine.html）
// =====================================================================
// 为什么抽出来：sim_engine.html（模拟器）与 sim_map.html（沙盘+模拟器合体）
// 必须跑同一套裁决逻辑。若各自内联一份，就会重演项目里的「地图内核复制债」——
// 改一处忘另一处，两个页面对同一史料给出不同结论。核心只此一份。
//
// 契约（与 docs/04-evolution-rules.md 一致）：
//  · 纯确定性：不使用 Math.random，一切随机性来自 FNV-1a 哈希（可复现、可溯源）
//  · 默认参数（执行力/扩散=1、内耗/后勤=0）→ 逐帧精确重放史实，吻合度 100%
//  · 调参或选分支 → 确定性反事实分叉，同参数必然同结果
//  · 派系参数单一真值 = data/vocab/ming_qing.json（经 demo/_faction_ming.js 挂到 SIM_IC）
//
// 用法：
//   const CORE = SIM_CORE.create(SIM_CORE.sceneFromURL());
//   CORE.runTo(1644, 'B4_faction');  CORE.state / CORE.divergences / CORE.trace
// 依赖（须先于本文件加载）：_sim_*.js（SIM_DATA*）、sim_rules_*.js、_faction_ming.js、sim_ic_*.js
// =====================================================================
(function () {
  'use strict';

  const CORE_VERSION = 'v0.63';

  // ── 多场景命名空间：各场景三件套独立全局，互不覆盖（零侵入范式）──
  const SCENES = {
    liaodong: { d: 'SIM_DATA', r: 'SIM_RULES', ic: 'SIM_IC', label: '明末辽东—漠南（1616–1644）' },
    sarhu: { d: 'SIM_DATA_SARHU', r: 'SIM_RULES_SARHU', ic: 'SIM_IC_SARHU', label: '萨尔浒之战（1619）' }
  };
  function sceneFromURL(search) {
    const s = (new URLSearchParams(search !== undefined ? search : location.search)).get('scene') || 'liaodong';
    return SCENES[s] ? s : 'liaodong';
  }
  function resolveNS(scene) {
    const m = SCENES[scene] || SCENES.liaodong;
    return { d: window[m.d], r: window[m.r], ic: window[m.ic], name: m.d, label: m.label };
  }

  function create(scene) {
    scene = SCENES[scene] ? scene : 'liaodong';
    const ns = resolveNS(scene);
    const D = ns.d, R = ns.r, IC = ns.ic;
    if (!D || !R || !IC) {
      // 失败必须响亮：静默 return null 会让调用方在 CORE.D 处报 "reading 'D' of null"，
      // 掩盖真正病因（某个三件套文件语法错/未加载）。
      const miss = [!D && 'SIM_DATA', !R && 'SIM_RULES', !IC && 'SIM_IC'].filter(Boolean).join(', ');
      throw new Error('[SIM_CORE] 场景 ' + scene + ' 三件套未就绪，缺失：' + miss + '（检查对应 demo/*.js 是否语法错误或未引入）');
    }

    const PARTY = D.partyColors;
    const SEATS = D.seats;
    const seatById = {}; SEATS.forEach(s => seatById[s.id] = s);
    const COSMID = Math.cos(44 * Math.PI / 180);
    function hex(c) { return 'rgb(' + c[0] + ',' + c[1] + ',' + c[2] + ')'; }
    function neighbors(id) {
      const a = seatById[id]; if (!a) return [];
      return SEATS.filter(b => b.id !== id && Math.hypot((a.lon - b.lon) * COSMID, a.lat - b.lat) < 1.6).map(b => b.id);
    }

    // ════════════════════════════════════════════════════════════════
    // whatif 物理/后勤模型（同源 constants；确定性，无 RNG）
    // 把 whatif.html 的「后勤/行军/补给/季节」约束抽象为可复用单点判定，
    // 供 R7 对每条史实征服做攻击方投送可行性折扣。
    // ════════════════════════════════════════════════════════════════
    const PHYS = {
      rates: { forced: 60, cavalry: 80, foot: 40 },  // km/日：急行/骑兵/步卒（文献约值）
      winterRate: 0.75,        // 冬季路冻/雪阻，有效行军速 ×0.75
      ration: 1.8,             // kg/人/日 军粮（明制约 1.5–2.0）
      water: 4,                // L/人/日 饮水
      campEvery: 3,            // 每 3 日扎营一次
      waterMaxKm: 8,           // 扎营点须距水源 ≤8km，否则无水
      siegeDays: 10,           // 会战/围城 10 日
      supplyRadius: { ming: 300, qing: 400 },  // 补给半径 km
      overScale: 500,          // 超距惩罚尺度
      // 关键战役史载季节（公历月）：其余按 seedHash 确定性派生，UI 标注"示意"
      knownSeason: {
        '1618|fushun': 'summer', '1618|qinghe': 'summer',
        '1619|kaiyuan': 'spring', '1619|tieling': 'spring',
        '1621|shenyang': 'spring', '1621|liaoyang': 'spring', '1621|lushun': 'spring', '1621|fuzhou': 'spring',
        '1621|gaizhou': 'spring', '1621|haizhou': 'spring', '1621|niuzhuang': 'spring', '1621|xiongyue': 'spring', '1621|yaozhou': 'spring', '1621|jinzhou_dalian': 'spring',
        '1622|guangning': 'winter', '1622|yizhou': 'winter',
        '1624|horqin': 'summer',
        '1628|chahar': 'autumn', '1628|harqin': 'summer',
        '1631|dalinghe': 'autumn',
        '1632|tumed': 'summer',
        '1635|chahar': 'summer', '1635|ordos': 'summer',
        '1641|jinzhou': 'summer', '1641|songshan': 'summer', '1641|xingshan': 'summer',
        '1644|ningyuan': 'autumn', '1644|shanhaiquan': 'winter',
        // 萨尔浒之战（1619）：春/夏行军；赫图阿拉/界凡为后金出击基地
        '1619|hetuala': 'spring', '1619|jiefan': 'spring',
        '1619|sarhu': 'spring', '1619|shangjianya': 'spring', '1619|feifenshan': 'spring',
        '1619|niumaozhai': 'summer', '1619|abudaligang': 'summer', '1619|fucha': 'summer',
        '1619|yehe': 'summer'
      }
    };
    const SEASONS = ['spring', 'summer', 'autumn', 'winter'];
    const SEASON_CN = { spring: '春', summer: '夏', autumn: '秋', winter: '冬' };
    function haversine(a, b) {
      const Rk = 6371, toR = Math.PI / 180;
      const dLat = (b[1] - a[1]) * toR, dLon = (b[0] - a[0]) * toR, la1 = a[1] * toR, la2 = b[1] * toR;
      const h = Math.sin(dLat / 2) ** 2 + Math.cos(la1) * Math.cos(la2) * Math.sin(dLon / 2) ** 2;
      return 2 * Rk * Math.asin(Math.min(1, Math.sqrt(h)));
    }
    function clamp(v, a, b) { return Math.max(a, Math.min(b, v)); }
    function seasonCN(s) { return SEASON_CN[s] || s; }
    function seasonOf(Y, pid) {
      const k = Y + '|' + pid; if (PHYS.knownSeason[k]) return PHYS.knownSeason[k];
      const h = seedHash('season|' + k); return SEASONS[Math.floor(h * 4)];
    }

    // ── 朝堂内耗（R6 前置，确定性）──────────────────────────────
    // 派系参数单一真值 = data/vocab/ming_qing.json（→ _faction_ming.js → IC.factions）
    // 消费 power(朝堂影响力权重) / selfInterest(私利) / reinforce(增援意愿) / beliefNoFall(信「明不亡」)。
    // 用户洞察：明末各派皆以为明朝不会亡 → 谁都不肯为边患让出既得利益 →
    //          影响力越大的派系越把资源投向党争 → 前线执行力被折扣。
    function courtDetail(Y) {
      const fd = IC.factionDynamics; const all = IC.factions || [];
      const active = all.filter(f => f.side === 'ming' && Y >= f.period[0] && Y <= f.period[1]);
      if (!fd || !active.length) return { infight: 0, ids: [], n: 0, wSelf: 0, wReinf: 0, belief: 0, neglect: 0, drive: 0, diversity: 0, hash: 0 };
      const W = active.reduce((s, f) => s + (f.power || 0), 0) || active.length;
      const wgt = f => (f.power || 0) / W;
      let wSelf = 0, wReinf = 0, belief = 0;
      active.forEach(f => { wSelf += wgt(f) * (f.selfInterest || 0); wReinf += wgt(f) * (f.reinforce || 0); belief += wgt(f) * (f.beliefNoFall ? 1 : 0); });
      let varc = 0; active.forEach(f => { const d = (f.selfInterest || 0) - wSelf; varc += wgt(f) * d * d; });
      const frac = active.length / (all.length || 1);
      const diversity = clamp(0.5 * frac + 0.5 * Math.sqrt(varc), 0, 1);
      const neglect = clamp(belief * (1 - wReinf), 0, 1);      // 边患忽视度
      const drive = clamp(0.5 * wSelf + 0.5 * neglect, 0, 1);  // 内斗驱动力
      const h = seedHash('court|' + active.map(f => f.id).sort().join(','));
      const infight = clamp((1 - fd.courtCohesionBase) * (0.4 + 0.6 * diversity) * (0.6 + 0.8 * drive) * (0.5 + 0.5 * h), 0, 0.95);
      return { infight, ids: active.map(f => f.id), n: active.length, wSelf, wReinf, belief, neglect, drive, diversity, hash: h };
    }
    function courtInfighting(Y) { return courtDetail(Y).infight; }

    // ── 水源邻近（whatif 物理三约束②）：目标治所是否在某河流 waterMaxKm 内 ──
    const _waterCache = {};
    function nearestRiverDist(lon, lat) {
      const bm = (typeof window !== 'undefined') ? window.SIM_BASEMAP : null;
      if (!bm || !bm.rivers || !bm.rivers.length) return null;
      let best = Infinity;
      for (const f of bm.rivers) {
        let coords = [];
        if (f.g && f.g.type === 'LineString') coords = f.g.coordinates;
        else if (f.g && f.g.type === 'MultiLineString') { for (const ln of f.g.coordinates) coords = coords.concat(ln); }
        for (const p of coords) { const d = haversine([lon, lat], p); if (d < best) best = d; }
      }
      return best === Infinity ? null : best;
    }

    // ── 攻击方投送可行性（R7）：在 {factor,dist,base,radius,over,season,winter} 基础上，
    // 把 whatif 物理「三约束」提升为必开维度（v0.63）：
    //   ① 抵达时间窗：估算行军天数 vs 季节可行战役窗口
    //   ② 扎营水源：目标治所须在某河流 waterMaxKm 内（否则无水可扎营）
    //   ③ 粮草可持续：假定兵力 × 日耗 × 行军天数 vs 30 日可持续补给上限
    // 三约束始终可被计算/展示（物理维度真实存在，非缺口）；仅当 p.logisticsPenalty>0 时
    // 参与对攻击方执行力的折扣（默认=0 → 忠实重放史实，不破坏吻合度 100%）。
    function physicalFactor(t, Y, baseState) {
      const target = seatById[t.place_id];
      if (!target) return { factor: 1, dist: 0, base: null, radius: 0, over: 0, season: 'spring', winter: false, arrivalDays: 0, windowDays: 0, timeOver: 0, timePenalty: 0, waterDist: null, waterOK: true, waterPenalty: 0, foodDays: 0, foodOK: true, foodPenalty: 0 };
      const attacker = t.to;
      let best = 1e9, base = null;
      SEATS.forEach(s => {
        if ((baseState[s.id] || '?') === attacker) {
          const d = haversine([s.lon, s.lat], [target.lon, target.lat]);
          if (d < best) { best = d; base = s; }
        }
      });
      const radius = (attacker === '清方') ? PHYS.supplyRadius.qing : PHYS.supplyRadius.ming;
      let factor = 1; const over = Math.max(0, best - radius);
      if (over > 0) factor *= clamp(1 - over / PHYS.overScale, 0.3, 1);
      const season = seasonOf(Y, t.place_id); let winter = false;
      if (season === 'winter') { factor *= (params.winterPenalty || 0.75); winter = true; }

      // ① 抵达时间窗
      const marchRate = (attacker === '清方') ? PHYS.rates.cavalry : PHYS.rates.foot;
      const arrivalDays = best > 0 ? Math.ceil(best / (marchRate * (winter ? PHYS.winterRate : 1))) : 0;
      const windowDays = ({ spring: 70, summer: 50, autumn: 60, winter: 35 })[season] || 60;
      const timeOver = Math.max(0, arrivalDays - windowDays);
      const timePenalty = (timeOver > 0) ? clamp(timeOver / windowDays, 0, 0.3) : 0;
      // ② 扎营水源
      let waterDist = _waterCache[t.place_id];
      if (waterDist === undefined) { waterDist = nearestRiverDist(target.lon, target.lat); _waterCache[t.place_id] = waterDist; }
      const waterOK = (waterDist === null) ? true : (waterDist <= PHYS.waterMaxKm);
      const waterPenalty = waterOK ? 0 : 0.3;
      // ③ 粮草可持续（诚实假设：单次战役约 3 万兵力，whatif 同源量级）
      const ARMY = 30000;
      const foodDays = arrivalDays;
      const foodNeed = ARMY * PHYS.ration * Math.max(1, foodDays);
      const foodCap = ARMY * PHYS.ration * 30;
      const foodOK = foodNeed <= foodCap;
      const foodPenalty = foodOK ? 0 : clamp((foodNeed - foodCap) / foodCap, 0, 0.3);

      if (params.logisticsPenalty > 0) {
        factor *= (1 - timePenalty) * (1 - waterPenalty) * (1 - foodPenalty);
      }
      return { factor, dist: best, base: base ? base.name : null, radius, over, season, winter, arrivalDays, windowDays, timeOver, timePenalty, waterDist, waterOK, waterPenalty, foodDays, foodOK, foodPenalty };
    }

    // ---- 确定性哈希（无 Math.random）：FNV-1a → [0,1) ----
    function seedHash(str) {
      let h = 2166136261 >>> 0;
      for (let i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619) >>> 0; }
      return (h >>> 0) / 4294967296;
    }
    function intrinsicP(year_, place_id, to, salt) { return seedHash(year_ + '|' + place_id + '|' + to + '|' + (salt || 'a')); }

    // ---- 参数与可变态 ----
    let params = Object.assign({}, IC.params);
    let currentBranch = null;
    let state = {};
    let year = D.meta.startYear;
    let divergences = [];
    let trace = [];

    function effFor(party, p) {
      if (party === '清方') return p.qingExec;
      if (party === '明方') return p.mingExec;
      return 1.0;
    }
    function getBranch(id) { return (R.branches || []).find(b => b.id === id) || null; }
    // 原地重置参数（保持对象身份不变，UI 侧持有的引用继续有效）
    function resetParams() {
      Object.keys(params).forEach(k => { delete params[k]; });
      Object.assign(params, IC.params);
      return params;
    }
    function setParams(obj) { Object.assign(params, obj || {}); return params; }

    function resetSim(branchId) {
      state = Object.assign({}, IC.control);
      year = D.meta.startYear;
      divergences = [];
      trace = [];
      currentBranch = branchId || currentBranch;
    }

    // ── R1 战争裁决 + R6 党派内耗 + R7 后勤物理（逐年推进，全部确定性）──
    function applyYear(Y, p, branch) {
      const ts = D.transitions.filter(t => t.year === Y);
      const blocked = branch && branch.block ? branch.block : [];
      const infight = (p.factionInfightAmp > 0) ? courtInfighting(Y) : 0;  // 0..~0.95
      const baseState = Object.assign({}, state);  // 本年转移前快照（供 R7 最近基地判定）
      for (const t of ts) {
        if (blocked.some(b => b.year === t.year && b.place_id === t.place_id)) continue;
        let eff = effFor(t.to, p);
        let physPen = 0, infightPen = 0;
        // R7：后勤物理约束（whatif 同源）→ 攻击方投送可行性折扣
        if (p.logisticsPenalty > 0) {
          const pf = physicalFactor(t, Y, baseState);
          if (pf.over > 0) {
            // 超补给半径→投送不可达（确定性硬约束，whatif 同源：超出可持续补给线则战役无法维持）。
            // 仅保留极小 intrinsicP「奇迹」空间以诚实表达不确定性。
            physPen = p.logisticsPenalty;
            eff = Math.min(eff, 0.015);
          } else {
            // 半径内：距离衰减 + 基础辎重摩擦 + 冬季折扣
            const gentle = clamp(1 - (pf.dist / pf.radius) * 0.35, 0.45, 1);
            const f = pf.factor;                            // 含冬季折扣
            const baseFric = 1 - p.logisticsPenalty * 0.4;  // 基础投送摩擦：确定性，与距离无关
            physPen = p.logisticsPenalty * (1 - gentle * f * baseFric);
            eff *= gentle * f * baseFric;
          }
        }
        // R6：党派内耗→明方攻防均弱（防御侧：攻方更易得手）
        if (p.factionInfightAmp > 0 && (t.to === '明方' || t.from === '明方') && t.to !== 'contested') {
          infightPen = p.factionInfightAmp * infight;
          if (t.to === '明方') eff *= (1 - infightPen);
          else eff = Math.min(1, eff * (1 + infightPen * 0.6));
        }
        const ip = intrinsicP(t.year, t.place_id, t.to, 'a');
        let success = (t.to === 'contested') ? true : (ip < eff);
        if (success && p.spreadPref < 1.0 && t.to !== 'contested') {
          const hasN = neighbors(t.place_id).some(nid => state[nid] === t.to);
          if (!hasN) { const ip2 = intrinsicP(t.year, t.place_id, t.to, 'b'); success = (ip2 < p.spreadPref); }
        }
        trace.push({
          year: Y, place_id: t.place_id, name: seatById[t.place_id] ? seatById[t.place_id].name : '', from: t.from, to: t.to,
          rule: 'R1', mechanism: '战争裁决(04 §战争裁决)', intrinsicP: +ip.toFixed(4), eff: +eff.toFixed(3),
          physPen: +physPen.toFixed(3), infightPen: +infightPen.toFixed(3),
          success, seed: (t.year + '|' + t.place_id + '|' + t.to)
        });
        if (success) state[t.place_id] = t.to;
        else divergences.push({ year: Y, place: t.place_id, to: t.to, name: seatById[t.place_id] ? seatById[t.place_id].name : '' });
      }
      // R6：党派内耗→明方守土崩溃（模型推演，非史载转移）
      if (p.factionInfightAmp > 0) {
        const pen = p.factionInfightAmp * infight;
        SEATS.forEach(s => {
          if ((state[s.id] || '?') === '明方') {
            const h = seedHash('collapse|' + Y + '|' + s.id);
            if (h < pen * 0.5) {
              state[s.id] = 'contested';
              divergences.push({ year: Y, place: s.id, to: 'contested', name: s.name, faction: true });
              trace.push({
                year: Y, place_id: s.id, name: s.name, from: '明方', to: 'contested', rule: 'R6', mechanism: '党派内耗守土崩溃',
                intrinsicP: +h.toFixed(4), eff: +pen.toFixed(3), physPen: 0, infightPen: +pen.toFixed(3),
                success: true, factionCollapse: true, seed: 'collapse|' + Y + '|' + s.id
              });
            }
          }
        });
      }
    }

    function runTo(Y, branchId) {
      const br = branchId !== undefined ? getBranch(branchId) : getBranch(currentBranch);
      const p = Object.assign({}, params);
      if (br && br.override) Object.keys(br.override).forEach(k => p[k] = br.override[k]);
      resetSim(branchId);
      for (let y = D.meta.startYear + 1; y <= Y; y++) applyYear(y, p, br);
      year = Y;
    }
    // 单步推进（注意：与 runTo 一致保留历史行为——step 用全局 params，不合并分支 override）
    function step() {
      if (year >= D.meta.endYear) return false;
      year++;
      applyYear(year, Object.assign({}, params), getBranch(currentBranch));
      return true;
    }
    function matchCount() { return SEATS.filter(s => (state[s.id] || '') === (D.terminalReal[s.id] || '')).length; }

    // ── v0.57 分支事件模板（跨事件通用；纯函数派生，确定性）──
    const BE_KIND_LABEL = { divergence: '关键偏离', logistics: '后勤瓶颈', faction: '朝堂内耗', momentum: '势能转折', summary: '分支结局' };
    const BE_SEVERITY_LABEL = { info: '趋势', warn: '风险', bad: '危局' };
    function beKeySeats() {
      // 场景可在 SIM_RULES.keySeats 覆盖；缺省走辽东战略重镇（任何新历史事件直接复用）
      return (R && R.keySeats) || ['shenyang', 'liaoyang', 'guangning', 'jinzhou', 'ningyuan'];
    }
    // 有效参数：合并当前分支 override。任何按分支敏感派生的读取都必须走这里，
    // 否则 runTo 只改本地 p 而不动全局 params，模板会读到默认值（漏掉 logistics/faction 事件）。
    function effectiveParams() {
      const p = Object.assign({}, params);
      const br = currentBranch ? getBranch(currentBranch) : null;
      if (br && br.override) Object.keys(br.override).forEach(k => p[k] = br.override[k]);
      return p;
    }
    function beNarrative(ev) {
      const placeName = ev.place_name || '';
      const evYear = ev.year;
      const evd = ev.evidence || {};
      switch (ev.kind) {
        case 'divergence': {
          if (ev.severity === 'bad') return `${evYear}年，<span class="hl">${placeName}</span>脱离史实（${evd.rule || '裁决'}）：原${evd.real_to || '明方'} → 本分支${evd.new_to || '清方'}。`;
          if (ev.severity === 'warn') return `${evYear}年，${placeName}归属争议（contested），朝局或军势受压。`;
          return `${evYear}年，${placeName}回到史实阵营。`;
        }
        case 'logistics':
          return `${evYear}年投送${placeName}：${evd.dist.toFixed(0)}km / 半径${evd.radius}km${(evd.dist > evd.radius) ? '（<span class="hl">超距</span>）' : '（<span class="ok">在半径内</span>）'}，季节${seasonCN(evd.season)}${evd.winter ? '（冬×' + evd.winterPenalty + '）' : ''}，物理因子 <b>${evd.factor.toFixed(2)}</b>。`;
        case 'faction':
          return `${evYear}年朝堂内耗 <b>${(evd.amp * evd.inf).toFixed(2)}</b>（振幅 ${evd.amp.toFixed(2)} × 弹性 ${evd.inf.toFixed(2)}），活跃 ${evd.active} 派，明方执行力×<b>${(1 - evd.amp * evd.inf).toFixed(2)}</b>。`;
        case 'momentum':
          return `${evYear}年累计偏离已达 <span class="hl">${evd.cum} 处</span>（${evd.threshold}阈值触发），分支势能转向。`;
        case 'summary': {
          const c = evd.cum;
          const pct = Math.round(evd.match * 100 / evd.total);
          const verdict = c === 0 ? '与史实一致' : c < 10 ? '<span class="hl">小幅偏差</span>' : c < 20 ? '<span class="hl">明显偏差</span>' : '<span class="hl">大幅偏离史实</span>';
          return `${evYear}分支终局：${c} 处偏离（吻合 ${evd.match}/${evd.total}，${pct}%），${verdict}。`;
        }
        default: return ev.description || '';
      }
    }
    function computeBranchEvents() {
      const events = [];
      const ks = beKeySeats();
      const ep = effectiveParams();
      // 1) divergence（按年聚合关键偏离）
      const byYear = {};
      (divergences || []).forEach(d => { (byYear[d.year] = byYear[d.year] || []).push(d); });
      Object.keys(byYear).sort((a, b) => +a - +b).forEach(y => {
        const ds = byYear[y];
        const hit = ds.find(d => ks.includes(d.place));
        if (hit) {
          const tr = (trace || []).find(t => t.year === +y && t.place_id === hit.place);
          events.push({
            kind: 'divergence', year: +y, place_id: hit.place,
            place_name: seatById[hit.place] ? seatById[hit.place].name : hit.name,
            severity: 'bad',
            evidence: { rule: tr ? tr.rule : 'R1', real_to: tr ? tr.from : '史实', new_to: hit.to }
          });
        } else {
          events.push({
            kind: 'divergence', year: +y, place_id: ds[0].place,
            place_name: seatById[ds[0].place] ? seatById[ds[0].place].name : ds[0].name,
            severity: ds[0].faction ? 'warn' : 'info',
            evidence: { rule: ds[0].faction ? 'R6' : 'R1', summary: `${ds.length}处争议/弃守` }
          });
        }
      });
      // 2) momentum（每累计 5/10/15/20 处偏离）
      const thresholds = [5, 10, 15, 20];
      let cum = 0; const triggered = new Set();
      (divergences || []).slice().sort((a, b) => a.year - b.year).forEach(d => {
        cum++;
        thresholds.forEach(t => {
          if (cum === t && !triggered.has(t)) {
            triggered.add(t);
            events.push({ kind: 'momentum', year: d.year, severity: t >= 15 ? 'bad' : 'warn', evidence: { cum, threshold: t } });
          }
        });
      });
      // 3) logistics（启用后勤惩罚时，超距/冬季运输 → 风险/危局）
      if (ep.logisticsPenalty > 0) {
        const baseState = Object.assign({}, state);
        D.transitions.forEach(t => {
          const pf = physicalFactor(t, t.year, baseState);
          if (pf.factor < 0.95 && (pf.over > 0 || pf.winter)) {
            events.push({
              kind: 'logistics', year: t.year, place_id: t.place_id,
              place_name: seatById[t.place_id] ? seatById[t.place_id].name : t.place_id,
              severity: pf.factor < 0.7 ? 'bad' : 'warn',
              evidence: { factor: pf.factor, dist: pf.dist, radius: pf.radius, season: pf.season, winter: pf.winter, base: pf.base, winterPenalty: ep.winterPenalty }
            });
          }
        });
      }
      // 4) faction（启用内耗时扫全轴取峰值）
      if (ep.factionInfightAmp > 0) {
        const FACTION_PEN_THRESHOLD = 0.05;
        let peakY = year, peakPen = 0, peakInf = 0;
        for (let y = D.meta.startYear; y <= year; y++) {
          const inf = courtInfighting(y);
          const pen = ep.factionInfightAmp * inf;
          if (pen > peakPen) { peakPen = pen; peakY = y; peakInf = inf; }
        }
        if (peakPen > FACTION_PEN_THRESHOLD) {
          const active = (IC.factions || []).filter(f => f.side === 'ming' && peakY >= f.period[0] && peakY <= f.period[1]);
          events.push({
            kind: 'faction', year: peakY, faction: 'court',
            severity: peakPen > 0.5 ? 'bad' : (peakPen > 0.25 ? 'warn' : 'info'),
            evidence: { amp: ep.factionInfightAmp, inf: peakInf, pen: peakPen, active: active.length }
          });
        }
      }
      // 5) summary（终局）
      const cumDiv = (divergences || []).length;
      events.push({
        kind: 'summary', year: D.meta.endYear,
        severity: cumDiv === 0 ? 'info' : (cumDiv < 10 ? 'warn' : 'bad'),
        evidence: { cum: cumDiv, match: matchCount(), total: SEATS.length }
      });
      events.sort((a, b) => { if (a.kind === 'summary') return 1; if (b.kind === 'summary') return -1; return a.year - b.year; });
      return events;
    }

    return {
      version: CORE_VERSION, scene, ns, label: ns.label,
      D, R, IC, PARTY, SEATS, seatById, PHYS, SEASONS, SEASON_CN,
      hex, neighbors, haversine, clamp, seasonCN, seasonOf, seedHash, intrinsicP,
      courtDetail, courtInfighting, physicalFactor,
      effFor, getBranch, resetSim, resetParams, setParams, applyYear, runTo, step, matchCount,
      BE_KIND_LABEL, BE_SEVERITY_LABEL, beKeySeats, effectiveParams, beNarrative, computeBranchEvents,
      // 可变态：以核心为唯一真值；UI 侧只读镜像，写入一律走这里
      get params() { return params; },
      get state() { return state; },
      get year() { return year; }, set year(v) { year = v; },
      get divergences() { return divergences; },
      get trace() { return trace; },
      get currentBranch() { return currentBranch; }, set currentBranch(v) { currentBranch = v; },
      factionSource: () => (IC.factionSource || null)
    };
  }

  window.SIM_CORE = { version: CORE_VERSION, SCENES, sceneFromURL, resolveNS, create };
})();
