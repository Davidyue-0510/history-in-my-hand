/* 灾难影响范围层 · 无头 CDP 交互探针（零依赖，Node >= 20）
 *
 * 验证三件事（对齐用户要求「区分受灾/正常 + 按指标梯度上色 + 受灾区随时间变化」）：
 *   1) 灾难场景加载无 JS 异常，ImpactLayer 就绪，指标按钮可见；
 *   2) 受灾范围随时间变化（1642 vs 1644 命中治所数不同）；
 *   3) 三指标（severity/deaths/mortality）对同地给出不同 t 与颜色，色带端点正确；
 *   4) 普通（非灾难）场景回归无异常。
 */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400); // 本地静态服务端口
const sleep = ms => new Promise(r => setTimeout(r, ms));

// ── 找 Edge ──
function findEdge() {
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge Beta\\Application\\msedge.exe'
  ];
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}

// ── 静态服务（自带，Cache-Control: no-store，可重复）──
const MIME = { '.html':'text/html', '.js':'application/javascript', '.json':'application/json',
  '.geojson':'application/json', '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) {
    res.writeHead(404); res.end('not found'); return;
  }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream',
    'Cache-Control': 'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

// ── 结果累计 ──
let PASS = 0, FAIL = 0; const FAILS = [];
function ok(cond, msg) { if (cond) { PASS++; console.log('  ✓ ' + msg); }
  else { FAIL++; FAILS.push(msg); console.log('  ✗ ' + msg); } }

(async () => {
  const EDGE = findEdge();
  if (!EDGE) { console.log('[SKIP] 未找到 Edge，无法跑无头探针'); server.close(); process.exit(0); }

  const child = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=' + PORT,
    '--user-data-dir=' + os.tmpdir() + '/probe-' + process.pid,
    '--window-size=1400,1000', 'about:blank'], { stdio: 'ignore' });

  // 轮询调试地址
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) {
    await sleep(350);
    try {
      const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pg) wsUrl = pg.webSocketDebuggerUrl;
    } catch (e) {}
  }
  if (!wsUrl) { console.log('[FAIL] 拿不到 CDP WebSocket'); server.close(); child.kill(); process.exit(1); }

  const ws = new globalThis.WebSocket(wsUrl);
  let id = 0; const pending = new Map();
  const exceptions = [];
  ws.addEventListener('message', e => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') {
      const d = m.params.exceptionDetails;
      exceptions.push((d.exception && d.exception.description) || d.text || 'unknown');
    }
  });
  await new Promise(r => ws.addEventListener('open', r));
  const send = (method, params = {}) => new Promise(res => { const mid = ++id; pending.set(mid, res);
    ws.send(JSON.stringify({ id: mid, method, params })); });
  const ev = async expr => (await send('Runtime.evaluate',
    { expression: expr, returnByValue: true })).result.result.value;
  const evFull = async expr => (await send('Runtime.evaluate',
    { expression: expr, returnByValue: true })).result.result;

  await send('Page.enable'); await send('Runtime.enable');

  async function goto(url) {
    exceptions.length = 0;
    await send('Page.navigate', { url });
    await sleep(6500); // 等 terrain / CHGIS 2MB geojson / ImpactLayer setup
  }

  // ════════ 1) 灾难场景：开封河决 ════════
  console.log('\n[场景] 开封河决 (kaifeng_juekou)');
  await goto(`http://127.0.0.1:${APP}/demo/county.html?scene=kaifeng_juekou`);

  ok(exceptions.length === 0, '加载无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));
  ok(await ev('!!(window.ImpactLayer && ImpactLayer.isReady())') === true,
     'ImpactLayer 已就绪 (isReady=true)');
  const seatN = await ev('window.ImpactLayer.seats().length');
  ok(seatN === 7, '治所 seats = 7（实际 ' + seatN + '）');
  const yrs = await ev('JSON.stringify(window.ImpactLayer.years())');
  ok(yrs === '[1642,1644]', '影响年份区间 = [1642,1644]（实际 ' + yrs + '）');

  // 时间驱动：受灾区随年变化
  const aff = await ev(`(function(){
    var L = window.ImpactLayer, ss = L.seats();
    function cnt(y){ return ss.filter(function(s){ return !!L.entryAt(s.place_id, y); }).length; }
    return JSON.stringify({ y1642: cnt(1642), y1643: cnt(1643), y1644: cnt(1644) });
  })()`);
  const A = JSON.parse(aff);
  ok(A.y1642 === 2 && A.y1644 === 6 && A.y1642 !== A.y1644,
     '受灾范围随时间变化：1642→' + A.y1642 + ' 治所，1644→' + A.y1644 + ' 治所');

  // 色带端点（数学）
  const mc = await ev(`JSON.stringify({
    lo: window.ImpactLayer.metricColor(0),
    mid: window.ImpactLayer.metricColor(0.5),
    hi: window.ImpactLayer.metricColor(1) })`);
  const MC = JSON.parse(mc);
  ok(JSON.stringify(MC.lo) === '[245,222,178]', '色带浅端=浅琥珀 [245,222,178]（实际 ' + JSON.stringify(MC.lo) + '）');
  ok(JSON.stringify(MC.hi) === '[120,16,16]', '色带深端=深红 [120,16,16]（实际 ' + JSON.stringify(MC.hi) + '）');
  ok(JSON.stringify(MC.mid) === '[222,120,45]', '色带中段=橙 [222,120,45]（实际 ' + JSON.stringify(MC.mid) + '）');

  // 三指标对同一地给出不同 t/颜色（商邱 1643：level2/deaths60000/mortality0.3）
  const tri = await ev(`(function(){
    var L = window.ImpactLayer;
    L.setMetric('severity'); var s = L.intensityAt('shangqiu',1643).t;
    L.setMetric('deaths');   var d = L.intensityAt('shangqiu',1643).t;
    L.setMetric('mortality');var m = L.intensityAt('shangqiu',1643).t;
    return JSON.stringify({ s:s, d:d, m:m,
      cols: [ L.metricColor(s), L.metricColor(d), L.metricColor(m) ] });
  })()`);
  const T = JSON.parse(tri);
  ok(Math.abs(T.s - 2/3) < 1e-6, 'severity t=2/3（实际 ' + T.s + '）');
  ok(Math.abs(T.d - 60000/340000) < 1e-4, 'deaths t=60000/340000（实际 ' + T.d.toFixed(4) + '）');
  ok(Math.abs(T.m - 0.3) < 1e-6, 'mortality t=0.3（实际 ' + T.m + '）');
  const cols = T.cols.map(JSON.stringify);
  ok(cols[0] !== cols[1] && cols[1] !== cols[2] && cols[0] !== cols[2],
     '三指标颜色互不相同（severity/deaths/mortality 同地异色）');

  // 指标按钮可见 + 点击切换（真实鼠标事件）
  const boxDisp = await ev(`(function(){ var b=document.getElementById('ctrlMetric');
    return b ? getComputedStyle(b).display : 'none'; })()`);
  ok(boxDisp !== 'none', '指标选择器 #ctrlMetric 可见（display=' + boxDisp + '）');
  const btnInfo = await ev(`(function(){
    var box = document.getElementById('ctrlMetric');
    if (box) box.scrollIntoView({ block: 'center' });
    var btns = [].slice.call(document.querySelectorAll('#ctrlMetric button[data-m]'));
    return JSON.stringify(btns.map(function(b){ var r=b.getBoundingClientRect();
      return { m:b.getAttribute('data-m'), cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2),
        hit: document.elementFromPoint(Math.round(r.x+r.width/2), Math.round(r.y+r.height/2))===b }; }));
  })()`);
  const BTN = JSON.parse(btnInfo);
  ok(BTN.length === 3, '指标按钮数 = 3（实际 ' + BTN.length + '）');
  async function clickBtn(m) {
    const b = BTN.find(x => x.m === m);
    if (!b || !b.hit) { ok(false, '点击 ' + m + '：未命中'); return; }
    await send('Input.dispatchMouseEvent', { type:'mousePressed', x:b.cx, y:b.cy, button:'left', buttons:1, clickCount:1 });
    await sleep(60);
    await send('Input.dispatchMouseEvent', { type:'mouseReleased', x:b.cx, y:b.cy, button:'left', buttons:0, clickCount:1 });
    await sleep(500);
  }
  await clickBtn('deaths');
  ok(await ev('window.ImpactLayer.getMetric()') === 'deaths', '点击「死亡人口」→ getMetric=deaths');
  await clickBtn('mortality');
  ok(await ev('window.ImpactLayer.getMetric()') === 'mortality', '点击「死亡率」→ getMetric=mortality');

  // 切换年份重绘无异常
  exceptions.length = 0;
  await ev('window.ImpactLayer.draw(1644);');
  await sleep(300);
  ok(exceptions.length === 0, 'draw(1644) 重绘无异常');

  // ════════ 2) 普通场景回归：萨尔浒 ════════
  console.log('\n[回归] 萨尔浒 (sarhu，无灾难数据)');
  await goto(`http://127.0.0.1:${APP}/demo/county.html?scene=sarhu`);
  ok(exceptions.length === 0, '萨尔浒加载无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));
  ok(await ev('!!window.SANDBOX_DATA') === true, 'SANDBOX_DATA 已注入');
  ok(await ev('!!document.querySelector("canvas")') === true, '地图 canvas 已渲染');
  // 萨尔浒非灾难：ImpactLayer 应未就绪（无 impact 数据），但不应崩溃
  ok(await ev('!!window.ImpactLayer') === true, 'ImpactLayer 全局存在（即便未就绪）');

  // ── 收尾 ──
  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('\n══════ 结果：' + PASS + ' PASS / ' + FAIL + ' FAIL ══════');
  if (FAIL) { console.log('失败项：\n - ' + FAILS.join('\n - ')); process.exit(1); }
  process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try{ server.close(); }catch(_){} process.exit(1); });
