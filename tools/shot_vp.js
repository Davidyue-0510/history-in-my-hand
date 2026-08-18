// 视角切换可视证据：截 sim_map.html?scene=sarhu —— 选杜松(明) / 努尔哈赤(后金) 两张
const http = require('http'); const fs = require('fs'); const path = require('path'); const os = require('os');
const WebSocket = (() => { try { return require('ws'); } catch (e) { return global.WebSocket; } })();
const ROOT = path.resolve(__dirname, '..'); const DEMO = path.join(ROOT, 'demo');
const PORT = 8826;
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png' };
function serve() { return http.createServer((req, res) => { let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/sim_map.html?scene=sarhu'; const fp = p.startsWith('/data/') ? path.join(ROOT, p) : path.join(DEMO, p); if (!fp.startsWith(ROOT) || !fs.existsSync(fp)) { res.writeHead(404); res.end('nf'); return; } res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream' }); fs.createReadStream(fp).pipe(res); }); }
function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
async function main() {
  const server = serve(); server.listen(PORT);
  const browser = await launch(); const page = browser.page; page.on = () => {};
  await page.goto('http://localhost:' + PORT + '/sim_map.html?scene=sarhu'); await sleep(2000);
  const branchId = await page.evaluate(() => { const c = SIM_CORE.create('sarhu'); return (c.R.branches[0] && c.R.branches[0].id) || null; });
  async function shot(vpId, file) {
    await page.evaluate((bid, v) => {
      if (bid) { const b = document.getElementById('br_' + bid); if (b) b.click(); }
      const s = document.getElementById('vpSel'); s.value = v; s.dispatchEvent(new Event('change', { bubbles: true }));
      const yr = document.getElementById('year'); yr.value = 1619; yr.dispatchEvent(new Event('input', { bubbles: true }));
      const f = document.querySelector('[data-zoom="fit"]'); if (f) f.click();
    }, branchId, vpId);
    await sleep(700);
    await page.screenshot(path.join(ROOT, 'tools', file));
    console.log('截好: ' + file);
  }
  await shot('dusong', 'shot_vp_dusong.png');
  await shot('nurhaci', 'shot_vp_nurhaci.png');
  await browser.close(); server.close(); process.exit(0);
}
async function launch() {
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe', 'C:/Program Files/Microsoft/Edge/Application/msedge.exe', process.env.EDGE_BIN].filter(Boolean);
  let edge = null; for (const p of edgePaths) { if (fs.existsSync(p)) { edge = p; break; } }
  if (!edge) throw new Error('找不到 Edge');
  const port = 9260 + Math.floor(Math.random() * 10);
  const child = require('child_process').spawn(edge, ['--headless=new', '--disable-gpu', '--no-sandbox', '--no-first-run', '--no-default-browser-check', '--remote-debugging-port=' + port, '--user-data-dir=' + os.tmpdir() + '/shotvp-' + process.pid, 'about:blank'], { stdio: 'ignore' });
  let wsUrl = null; for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(350); try { const list = await fetch('http://127.0.0.1:' + port + '/json/list').then(r => r.json()); const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl; } catch (e) {} }
  if (!wsUrl) throw new Error('拿不到 page CDP ws');
  const wsClient = new WebSocket(wsUrl); await new Promise((res, rej) => { wsClient.addEventListener('open', res); wsClient.addEventListener('error', rej); });
  let id = 0; const pending = new Map();
  wsClient.onmessage = (ev) => { const m = JSON.parse(ev.data); if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); } };
  function send(method, params = {}) { return new Promise((res, rej) => { const mid = ++id; pending.set(mid, m => { if (m.error) rej(new Error(method)); else res(m); }); wsClient.send(JSON.stringify({ id: mid, method, params })); }); }
  await send('Page.enable'); await send('Runtime.enable');
  const page = { async goto(url) { await send('Page.navigate', { url }); await sleep(900); }, async screenshot(file) { const r = await send('Page.captureScreenshot', { format: 'png', fromSurface: true, captureBeyondViewport: false }); fs.writeFileSync(file, Buffer.from(r.result.data, 'base64')); }, async evaluate(fn, ...args) { const expr = '(' + fn.toString() + ')(' + args.map(a => JSON.stringify(a)).join(',') + ')'; const r = await send('Runtime.evaluate', { expression: expr, returnByValue: true, awaitPromise: true }); if (!r.result) throw new Error('no result'); if (r.result.exceptionDetails) throw new Error('eval exc'); return r.result.result.value; }, on() {} };
  return { page, close: () => { try { child.kill(); } catch (e) {} try { wsClient.close(); } catch (e) {} } };
}
main().catch(e => { console.error('截图异常:', e); process.exit(2); });
