/* 实控区图层跟随拖动 · 截图对照探针（零依赖，Node >= 20）
 * 加载辽东战争场景 sarhu（auto ctrlOn → 控制层可见），截图地图区域：
 *   - 拖动前
 *   - 拖动后
 * 通过视觉对照判断控制层是否跟随地图移动。同时捕获 JS 异常。
 */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const OUT = path.join(ROOT, '.tmp', 'shots');
fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));

function findEdge() {
  const cands = [
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'
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
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

(async () => {
  const EDGE = findEdge();
  if (!EDGE) { console.log('[SKIP] 未找到 Edge'); server.close(); process.exit(0); }
  const child = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
    '--remote-debugging-port=' + PORT, '--user-data-dir=' + os.tmpdir() + '/probe-' + process.pid,
    '--window-size=1400,1000', 'about:blank'], { stdio: 'ignore' });
  let wsUrl = null;
  for (let i = 0; i < 80 && !wsUrl; i++) { await sleep(350);
    try { const list = await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg = list.find(t => t.type === 'page' && t.webSocketDebuggerUrl); if (pg) wsUrl = pg.webSocketDebuggerUrl;
    } catch (e) {} }
  if (!wsUrl) { console.log('[FAIL] 无 CDP'); server.close(); child.kill(); process.exit(1); }
  const ws = new globalThis.WebSocket(wsUrl);
  let id = 0; const pending = new Map(); const exceptions = [];
  ws.addEventListener('message', e => { const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) { pending.get(m.id)(m); pending.delete(m.id); }
    if (m.method === 'Runtime.exceptionThrown') { const d = m.params.exceptionDetails;
      exceptions.push((d.exception && d.exception.description) || d.text || 'unknown'); } });
  await new Promise(r => ws.addEventListener('open', r));
  const send = (method, params = {}) => new Promise(res => { const mid = ++id; pending.set(mid, res);
    ws.send(JSON.stringify({ id: mid, method, params })); });
  const ev = async expr => (await send('Runtime.evaluate', { expression: expr, returnByValue: true })).result.result.value;
  await send('Page.enable'); await send('Runtime.enable');
  await send('Page.navigate', { url: `http://127.0.0.1:${APP}/demo/county.html?scene=sarhu` });
  await sleep(7000);

  const rect = await ev(`(function(){ var w=document.getElementById('mapWrap'); if(!w) return null;
    var r=w.getBoundingClientRect(); return JSON.stringify({x:r.x,y:r.y,w:r.width,h:r.height}); })()`);
  const R = JSON.parse(rect);
  console.log('mapWrap rect:', JSON.stringify(R));

  async function shot(name) {
    const clip = { x: Math.round(R.x), y: Math.round(R.y), width: Math.round(R.w), height: Math.round(R.h), scale: 1 };
    const r = await send('Page.captureScreenshot', { format: 'png', clip, captureBeyondViewport: false });
    const buf = Buffer.from(r.result.data, 'base64');
    const fp = path.join(OUT, name);
    fs.writeFileSync(fp, buf);
    console.log('  ✓ 截图 ' + name + ' (' + buf.length + ' bytes)');
  }
  await shot('ctrl_drag_before.png');

  // 拖动地图（页内 PointerEvent）
  await ev(`(function(){
    var w=document.getElementById('mapWrap'); var r=w.getBoundingClientRect();
    function pe(t,x,y,b){ w.dispatchEvent(new PointerEvent(t,{button:0,buttons:b,pointerId:1,pointerType:'mouse',clientX:x,clientY:y,bubbles:true,cancelable:true})); }
    var sx=Math.round(r.x+r.width*0.42), sy=Math.round(r.y+r.height*0.42), dx=170, dy=120;
    pe('pointerdown',sx,sy,1);
    for(var i=1;i<=8;i++) pe('pointermove',Math.round(sx+dx*i/8),Math.round(sy+dy*i/8),1);
    pe('pointerup',Math.round(sx+dx),Math.round(sy+dy),0);
  })()`);
  await sleep(800);
  await shot('ctrl_drag_after.png');

  console.log('异常数：' + exceptions.length + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));
  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('完成：' + OUT);
  process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try{ server.close(); }catch(_){} process.exit(1); });
