// 覆盖块诊断探针：量化 ControlLayer 的「无控制→伪党派」缺陷
// 用法: node tools/probe_block.js            (默认场景)
//      SIM_SCENE=sarhu node tools/probe_block.js
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (() => { try { return require('ws'); } catch (e) { return global.WebSocket; } })();

const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8809;
const SCENE = process.env.SIM_SCENE || '';
const TARGET = '/sim_map.html' + (SCENE ? ('?scene=' + SCENE) : '');
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png' };

function serve() { return http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/') p = TARGET;
  const fp = p.startsWith('/data/') ? path.join(ROOT, p) : path.join(DEMO, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' });
  fs.createReadStream(fp).pipe(res);
}); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const server = serve(); server.listen(PORT);
  const browser = await launch();
  const page = browser.page;
  page.on = () => {};
  await page.goto('http://localhost:' + PORT + TARGET);
  await sleep(1500);

  const diag = await page.evaluate(() => {
    const out = {};
    const CL = window.ControlLayer;
    if (!CL || !CL.isReady || !CL.isReady()) { out.ready = false; return out; }
    out.ready = true;
    const seats = CL.seats();
    out.seatCount = seats.length;
    const yr = CL.years(); out.years = yr;
    const midY = Math.floor((yr[0] + yr[1]) / 2);
    out.midYear = midY;
    let nullCount = 0; const partyTally = {};
    seats.forEach(s => {
      const p = CL.controllerAt(s.place_id, midY);
      if (p == null) nullCount++; else partyTally[p] = (partyTally[p] || 0) + 1;
    });
    out.nullControlSeats = nullCount;
    out.partyTally = partyTally;
    out.activeParties = CL.activeParties();

    const c = document.getElementById('ctrlCv');
    const ctx = c.getContext('2d');
    const W = c.width, H = c.height;
    const d = ctx.getImageData(0, 0, W, H).data;
    const hist = {}; let painted = 0;
    for (let y = 0; y < H; y += 4) {
      for (let x = 0; x < W; x += 4) {
        const o = (y * W + x) * 4;
        if (d[o + 3] < 10) continue;
        painted++;
        const key = (d[o] >> 5) + ',' + (d[o + 1] >> 5) + ',' + (d[o + 2] >> 5);
        hist[key] = (hist[key] || 0) + 1;
      }
    }
    out.painted = painted;
    out.topColors = Object.entries(hist).sort((a, b) => b[1] - a[1]).slice(0, 6)
      .map(e => ({ rgb: e[0].split(',').map(n => (+n) * 32), cnt: e[1] }));
    return out;
  });

  console.log('\n=== 覆盖块诊断 · 场景=' + (SCENE || '默认(liaodong)') + ' ===');
  console.log(JSON.stringify(diag, null, 2));

  // 判定：是否存在「不属于任何已知政权、却占了大量像素」的伪色
  const known = { '明方': [197,90,70], '清方': [67,122,91], '朝鲜': [70,120,170], '日本方': [150,90,160], 'contested': [128,122,112] };
  function near(rgb, ref, tol) { return Math.abs(rgb[0]-ref[0])<tol && Math.abs(rgb[1]-ref[1])<tol && Math.abs(rgb[2]-ref[2])<tol; }
  const anom = (diag.topColors || []).filter(c => {
    return !Object.keys(known).some(k => near(c.rgb, known[k], 40));
  });
  const anomPainted = (diag.topColors || []).filter(c => {
    return !Object.keys(known).some(k => near(c.rgb, known[k], 40));
  }).reduce((s, c) => s + c.cnt, 0);
  console.log('\n判定：异常伪色像素占比 = ' + (diag.painted ? (100*anomPainted/diag.painted).toFixed(1) : '?') + '%');
  console.log('异常伪色 top = ' + JSON.stringify(anom.map(c => c.rgb)));
  console.log('无控制治所 = ' + (diag.nullControlSeats) + '/' + (diag.seatCount));

  await browser.close(); server.close();
  process.exit(0);
}

async function launch() {
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', process.env.EDGE_BIN].filter(Boolean);
  let edge = null;
  for (const p of edgePaths) { if (fs.existsSync(p)) { edge = p; break; } }
  if (!edge) { try { edge = execSync('where msedge', { encoding: 'utf8' }).trim().split('\n')[0]; } catch (e) {} }
  if (!edge) throw new Error('找不到 Edge');
  const port = 9240 + Math.floor(Math.random() * 10);
  const child = require('child_process').spawn(edge, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=' + port, '--user-data-dir=' + os.tmpdir() + '/probe-block-' + process.pid, 'about:blank'], { stdio: 'ignore' });
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(350);
    try { const list = await fetch('http://127.0.0.1:' + port + '/json/list').then(r => r.json());
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl;
    } catch (e) {} }
  if (!wsUrl) throw new Error('拿不到 page CDP ws');
  const wsClient = new WebSocket(wsUrl);
  await new Promise((res, rej) => { wsClient.addEventListener('open', res); wsClient.addEventListener('error', rej); });
  let id = 0; const pending = new Map();
  wsClient.onmessage = (ev) => { const m = JSON.parse(ev.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    else if (m.method === 'Runtime.exceptionThrown') { errors.push('exceptionThrown: ' + ((m.params.exceptionDetails.exception && m.params.exceptionDetails.exception.description) || m.params.exceptionDetails.text)); }
  };
  function send(method, params = {}) { return new Promise((res, rej) => { const mid = ++id; pending.set(mid, m => { if (m.error) rej(new Error(method + ' 错误: ' + JSON.stringify(m.error).slice(0, 200))); else res(m); }); wsClient.send(JSON.stringify({ id: mid, method, params })); }); }
  await send('Page.enable'); await send('Runtime.enable');
  const page = {
    async goto(url) { await send('Page.navigate', { url }); await sleep(900); },
    async evaluate(fn, ...args) { const expr = '(' + fn.toString() + ')(' + args.map(a => JSON.stringify(a)).join(',') + ')'; const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true });
      if (!r.result) throw new Error('evaluate 无 result');
      if (r.result.exceptionDetails) { const ed = r.result.exceptionDetails; const desc = (ed.exception && (ed.exception.description || ed.exception.value)) || ed.text || ''; throw new Error('evaluate 异常: ' + String(desc).slice(0, 900)); }
      return r.result.result.value; },
    async screenshot(file) { const r = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false }); fs.writeFileSync(file, Buffer.from(r.result.data, 'base64')); },
    on() {},
  };
  return { page, close: () => { try { child.kill(); } catch (e) {} try { wsClient.close(); } catch (e) {} } };
}
main().catch(e => { console.error('探针异常:', e); process.exit(2); });
