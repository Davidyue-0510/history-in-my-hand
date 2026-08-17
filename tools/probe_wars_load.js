/* 5 个加厚战争场景加载探针（零依赖 CDP）
 * 验证：county.html?scene=X 加载无 JS 异常，且时间轴至少渲染出事件节点。
 */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SCENES = ['chengpu', 'julu', 'chibi', 'canhebei', 'heshangyuan'];

function findEdge() {
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge Beta\\Application\\msedge.exe'
  ];
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}
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
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) {
    await sleep(350);
    try { const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl);
      if (pg) wsUrl = pg.webSocketDebuggerUrl; } catch (e) {}
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
  await send('Page.enable'); await send('Runtime.enable');

  async function goto(url) { exceptions.length = 0; await send('Page.navigate', { url }); await sleep(6000); }

  for (const sc of SCENES) {
    console.log('\n[场景] ' + sc);
    await goto(`http://127.0.0.1:${APP}/demo/county.html?scene=${sc}`);
    ok(exceptions.length === 0, '加载无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));
    const nEvt = await ev(`document.querySelectorAll('#eventsPane .ev').length`);
    ok((nEvt|0) > 0, '事件列表渲染出事件节点 (n=' + (nEvt|0) + ')');
    const hasMap = await ev(`!!(document.getElementById('map') && document.getElementById('map').getAttribute('viewBox'))`);
    ok(hasMap === true, '地图 SVG 已渲染 (viewBox 存在)');
    // 断言条数：SANDBOX_DATA 注入在 index 页 / 各切片 bundle 中，优先取 SANDBOX_DATA
    const nAssert = await ev(`(function(){
      try {
        if (window.SANDBOX_DATA && SANDBOX_DATA.assertions) return SANDBOX_DATA.assertions.length;
        if (window.SD && SD.assertions) return SD.assertions.length;
        return -1;
      } catch(e){ return -2; } })()`);
    console.log('  · 断言条数观测: ' + nAssert);
  }

  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('\n══════ 结果：' + PASS + ' PASS / ' + FAIL + ' FAIL ══════');
  if (FAIL) { console.log('失败项：\n - ' + FAILS.join('\n - ')); process.exit(1); }
  process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try{ server.close(); }catch(_){} process.exit(1); });
