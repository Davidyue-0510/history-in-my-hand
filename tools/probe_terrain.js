// 地形层 tan 块定位：量化 terrainCv 上 #EFECE2 底色的分布 bbox
const http = require('http'); const fs = require('fs'); const path = require('path'); const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (() => { try { return require('ws'); } catch (e) { return global.WebSocket; } })();
const errors = []; const ROOT = path.resolve(__dirname, '..'); const DEMO = path.join(ROOT, 'demo');
const PORT = 8810; const SCENE = process.env.SIM_SCENE || ''; const TARGET = '/sim_map.html' + (SCENE ? ('?scene=' + SCENE) : '');
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png' };
function serve() { return http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = TARGET; const fp = p.startsWith('/data/') ? path.join(ROOT, p) : path.join(DEMO, p); if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); res.end('nf'); return; } res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' }); fs.createReadStream(fp).pipe(res); }); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
async function main() {
  const server = serve(); server.listen(PORT);
  const browser = await launch(); const page = browser.page; page.on = () => {};
  await page.goto('http://localhost:' + PORT + TARGET); await sleep(1600);
  const diag = await page.evaluate(() => {
    const out = {}; const c = document.getElementById('terrainCv');
    if (!c) { out.noCanvas = true; return out; }
    out.cvW = c.width; out.cvH = c.height;
    const ctx = c.getContext('2d'); const d = ctx.getImageData(0, 0, c.width, c.height).data;
    let tan = 0, textured = 0; const TAN = [239, 236, 226];
    let tminx = c.width, tminy = c.height, tmaxx = 0, tmaxy = 0;
    let xminx = c.width, xminy = c.height, xmaxx = 0, xmaxy = 0;
    for (let y = 0; y < c.height; y += 2) for (let x = 0; x < c.width; x += 2) {
      const o = (y * c.width + x) * 4;
      const dr = Math.abs(d[o]-TAN[0]), dg = Math.abs(d[o+1]-TAN[1]), db = Math.abs(d[o+2]-TAN[2]);
      if (dr < 10 && dg < 10 && db < 10) { tan++; if (x<tminx)tminx=x; if(x>tmaxx)tmaxx=x; if(y<tminy)tminy=y; if(y>tmaxy)tmaxy=y; }
      else { textured++; if (x<xminx)xminx=x; if(x>xmaxx)xmaxx=x; if(y<xminy)xminy=y; if(y>xmaxy)xmaxy=y; }
    }
    out.tan = tan; out.textured = textured;
    out.tanBBox = tan ? (tminx+','+tminy+'—'+tmaxx+','+tmaxy) : 'none';
    out.texBBox = textured ? (xminx+','+xminy+'—'+xmaxx+','+xmaxy) : 'none';
    out.cvBBox = '0,0—'+c.width+','+c.height;
    return out;
  });
  console.log('\n=== 地形 tan 定位 · 场景=' + (SCENE || '默认') + ' ===');
  console.log(JSON.stringify(diag, null, 2));
  console.log('判定：tan(卡其底)占比=' + (diag.tan ? (100*diag.tan/(diag.tan+diag.textured)).toFixed(1) : '?') + '%');
  console.log('  canvas=' + diag.cvBBox + ' 地形纹理bbox=' + diag.texBBox + ' 卡其bbox=' + diag.tanBBox);
  await browser.close(); server.close(); process.exit(0);
}
async function launch() {
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', process.env.EDGE_BIN].filter(Boolean);
  let edge = null; for (const p of edgePaths) { if (fs.existsSync(p)) { edge = p; break; } }
  if (!edge) { try { edge = execSync('where msedge', { encoding: 'utf8' }).trim().split('\n')[0]; } catch (e) {} }
  if (!edge) throw new Error('找不到 Edge');
  const port = 9240 + Math.floor(Math.random() * 10);
  const child = require('child_process').spawn(edge, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=' + port, '--user-data-dir=' + os.tmpdir() + '/probe-terr-' + process.pid, 'about:blank'], { stdio: 'ignore' });
  let wsUrl = null; for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(350); try { const list = await fetch('http://127.0.0.1:' + port + '/json/list').then(r => r.json()); const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl; } catch (e) {} }
  if (!wsUrl) throw new Error('拿不到 page CDP ws');
  const wsClient = new WebSocket(wsUrl); await new Promise((res, rej) => { wsClient.addEventListener('open', res); wsClient.addEventListener('error', rej); });
  let id = 0; const pending = new Map();
  wsClient.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } else if (m.method === 'Runtime.exceptionThrown') { errors.push('exceptionThrown'); } };
  function send(method, params = {}) { return new Promise((res, rej) => { const mid = ++id; pending.set(mid, m => { if (m.error) rej(new Error(method)); else res(m); }); wsClient.send(JSON.stringify({ id: mid, method, params })); }); }
  await send('Page.enable'); await send('Runtime.enable');
  const page = { async goto(url) { await send('Page.navigate', { url }); await sleep(900); }, async evaluate(fn, ...args) { const expr = '(' + fn.toString() + ')(' + args.map(a => JSON.stringify(a)).join(',') + ')'; const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (!r.result) throw new Error('no result'); if (r.result.exceptionDetails) throw new Error('eval exc'); return r.result.result.value; }, async screenshot(file) { const r = await send('Page.captureScreenshot', { format: 'png', fromSurface: true }); fs.writeFileSync(file, Buffer.from(r.result.data, 'base64')); }, on() {} };
  return { page, close: () => { try { child.kill(); } catch (e) {} try { wsClient.close(); } catch (e) {} } };
}
main().catch(e => { console.error('探针异常:', e); process.exit(2); });
