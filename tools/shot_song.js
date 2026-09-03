/* 宋·澶渊之盟 截图（零依赖 CDP）—— 存系统 temp，不污染 workspace */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SCENE = 'song_chan_yuan';

function findEdge() {
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
  ];
  for (const c of cands) if (fs.existsSync(c)) return c;
  return null;
}
const MIME = { '.html':'text/html', '.js':'application/javascript', '.json':'application/json', '.css':'text/css' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end('x'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

(async () => {
  const EDGE = findEdge();
  if (!EDGE) { console.log('[SKIP] 无 Edge'); server.close(); process.exit(0); }
  const child = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=' + PORT, '--user-data-dir=' + os.tmpdir() + '/shot-' + process.pid,
    '--window-size=1440,1000', 'about:blank'], { stdio: 'ignore' });
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(350);
    try { const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl; } catch (e) {} }
  if (!wsUrl) { console.log('[FAIL] 无 CDP'); server.close(); child.kill(); process.exit(1); }
  const ws = new globalThis.WebSocket(wsUrl);
  let id = 0; const pending = new Map();
  ws.addEventListener('message', e => { const m = JSON.parse(e.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } });
  await new Promise(r => ws.addEventListener('open', r));
  const send = (method, params = {}) => new Promise(res => { const mid = ++id; pending.set(mid, res); ws.send(JSON.stringify({ id: mid, method, params })); });
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false }).catch(()=>{});
  await send('Page.navigate', { url: `http://127.0.0.1:${APP}/demo/county.html?scene=${SCENE}` });
  await sleep(7000);
  const out = path.join(os.tmpdir(), 'himh_shots', 'song_chan_yuan.png');
  fs.mkdirSync(path.dirname(out), { recursive: true });
  const r = await send('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true });
  fs.writeFileSync(out, Buffer.from(r.result.data, 'base64'));
  console.log('截图已存: ' + out);
  ws.close(); child.kill(); server.close(); process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try { server.close(); } catch(_){} process.exit(1); });
