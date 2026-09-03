/* 楚汉之争 无头截图（零依赖 CDP）→ 存 temp */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SCENE = 'chu_han';
const OUT = process.env.SHOT_OUT || path.join(os.tmpdir(), 'himh_shots', SCENE + '.png');

function findEdge() {
  const cands = ['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'];
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end('x'); return; }
  res.writeHead(200, { 'Content-Type': 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

(async () => {
  const EDGE = findEdge();
  if (!EDGE) { console.log('[SKIP] 未找到 Edge'); server.close(); process.exit(0); }
  const child = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=' + PORT,
    '--user-data-dir=' + os.tmpdir() + '/shot-' + process.pid, '--window-size=1400,1000', 'about:blank'],
    { stdio: 'ignore' });
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) {
    await sleep(350);
    try { const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl; } catch (e) {}
  }
  if (!wsUrl) { console.log('[FAIL] 拿不到 CDP'); server.close(); child.kill(); process.exit(1); }
  const ws = new globalThis.WebSocket(wsUrl);
  let id = 0; const pending = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  await new Promise(r => ws.addEventListener('open', r));
  const send = (method, params = {}) => new Promise(res => { const mid = ++id; pending.set(mid, res); ws.send(JSON.stringify({ id: mid, method, params })); });
  await send('Page.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1400, height: 1000, deviceScaleFactor: 1, mobile: false, screenWidth: 1400, screenHeight: 1000 }).catch(()=>{});
  await send('Page.navigate', { url: `http://127.0.0.1:${APP}/demo/county.html?scene=${SCENE}` });
  await sleep(6500);
  const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, Buffer.from(r.result.data, 'base64'));
  console.log('[OK] screenshot -> ' + OUT + ' (' + fs.statSync(OUT).size + ' bytes)');
  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close(); process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try { server.close(); } catch(_) {} process.exit(1); });
