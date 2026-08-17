/* 实控区图层「暂停时间轴拖动地图是否跟随」· 无头 CDP 探针（零依赖，Node >= 20）
 *
 * 复现并验证用户报告 bug：
 *   - 辽东剧场战争场景（如 sarhu）auto 开启 state.ctrlOn → 控制层可见，但 state.control.on 仍为 false。
 *   - 旧代码 applyView 用 state.control.on 门控 ControlLayer.repaint() → 拖动地图不重绘控制层（卡死），
 *     继续时间轴才刷新。
 *   - 修复：applyView 改用 state.ctrlOn 门控。
 *
 * 验证：加载无异常；控制层就绪且已绘制；模拟真实鼠标拖动后 #controlCv 像素签名变化（跟随地图）。
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

  await send('Page.enable'); await send('Runtime.enable');

  async function goto(url) {
    exceptions.length = 0;
    await send('Page.navigate', { url });
    await sleep(6500);
  }

  // 不透明像素包围盒（位置敏感，决定性）：返回 [minX,minY,maxX,maxY,n]，n=非透明像素数
  const ctrlBBox = async () => ev(`(function(){
    var c = document.getElementById('controlCv');
    if (!c) return 'nocanvas';
    var x = c.getContext('2d'), w = c.width, h = c.height;
    if (!w || !h) return 'zerosize';
    var d = x.getImageData(0, 0, w, h).data, minX=1e9, minY=1e9, maxX=-1, maxY=-1, n=0;
    for (var y = 0; y < h; y++) for (var xx = 0; xx < w; xx++) {
      if (d[(y*w+xx)*4+3] > 10) { n++; if(xx<minX)minX=xx; if(xx>maxX)maxX=xx; if(y<minY)minY=y; if(y>maxY)maxY=y; }
    }
    return JSON.stringify({ minX:minX, minY:minY, maxX:maxX, maxY:maxY, n:n, w:w, h:h });
  })()`);

  // ════════ 加载辽东战争场景（auto ctrlOn → 控制层可见） ════════
  console.log('\n[场景] 萨尔浒之战 (sarhu，辽东剧场 → 控制层自动开启)');
  await goto(`http://127.0.0.1:${APP}/demo/county.html?scene=sarhu`);

  ok(exceptions.length === 0, '加载无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));
  ok(await ev('!!(window.ControlLayer && ControlLayer.isReady())') === true,
     'ControlLayer 已就绪 (isReady=true)');
  const bb0 = JSON.parse(await ctrlBBox());
  ok(bb0 && bb0.n > 0, '控制层 canvas 已绘制（非透明像素 ' + (bb0 && bb0.n) + '，包围盒 ' +
     (bb0 ? ('[' + bb0.minX + ',' + bb0.minY + ']→[' + bb0.maxX + ',' + bb0.maxY + ']') : '?') + '）');
  const sig0 = JSON.stringify(bb0);

  // 确认 ctrlOn 已开、control.on 仍为 false（正是 bug 触发条件）
  const flags = await ev(`(function(){
    // state 是闭包变量，无法直接读；用可观测副作用判断：
    // ctrlOn 开 → #ctrlOn 勾选；control.on 由 #borderOn 控制，默认不勾。
    var cb = document.getElementById('ctrlOn');
    var bb = document.getElementById('borderOn');
    return JSON.stringify({ ctrlOnChecked: cb ? cb.checked : null,
      borderOnChecked: bb ? bb.checked : null,
      ctrlTimelineDisplay: (function(){ var t=document.getElementById('ctrlTimeline');
        return t ? getComputedStyle(t).display : 'none'; })() });
  })()`);
  const F = JSON.parse(flags);
  ok(F.ctrlOnChecked === true, '控制层主开关已勾选 (ctrlOn=true，可见条件成立)');
  console.log('  · 观测：borderOn.checked=' + F.borderOnChecked +
    ' / ctrlTimeline.display=' + F.ctrlTimelineDisplay);

  // ════════ 模拟真实鼠标拖动地图（暂停时间轴：不碰时间轴，只拖地图） ════════
  // 用页内 PointerEvent 派发，确保命中 wrap 的 pointerdown/move/up 监听（CDP Input 在 headless 未必合成 pointer 事件）。
  const dragInfo = await ev(`(function(){
    var w = document.getElementById('mapWrap');
    if (!w) return JSON.stringify({ err: 'no mapWrap' });
    var r = w.getBoundingClientRect();
    var svg = document.getElementById('map');
    var vb0 = svg ? svg.getAttribute('viewBox') : null;
    function pe(type, x, y, buttons){
      var e = new PointerEvent(type, { button:0, buttons:buttons, pointerId:1, pointerType:'mouse',
        clientX:x, clientY:y, bubbles:true, cancelable:true });
      w.dispatchEvent(e);
    }
    var sx = Math.round(r.x + r.width * 0.42), sy = Math.round(r.y + r.height * 0.42);
    var dx = 160, dy = 110;
    pe('pointerdown', sx, sy, 1);
    for (var i = 1; i <= 8; i++) pe('pointermove', Math.round(sx + dx*i/8), Math.round(sy + dy*i/8), 1);
    pe('pointerup', Math.round(sx+dx), Math.round(sy+dy), 0);
    return JSON.stringify({ vb0: vb0, vb1: svg ? svg.getAttribute('viewBox') : null });
  })()`);
  const DI = JSON.parse(dragInfo);
  ok(!DI.err, 'mapWrap 存在且可派发拖动' + (DI.err ? ' → ' + DI.err : ''));
  ok(DI.vb0 && DI.vb1 && DI.vb0 !== DI.vb1,
     '地图 viewBox 随拖动变化（底图确实移动了）：\n      拖动前 ' + DI.vb0 + '\n      拖动后 ' + DI.vb1);

  ok(exceptions.length === 0, '拖动过程无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));

  const bb1 = JSON.parse(await ctrlBBox());
  const sig1 = JSON.stringify(bb1);
  const moved = (bb1 && bb0) ? (bb1.minX !== bb0.minX || bb1.minY !== bb0.minY ||
                                bb1.maxX !== bb0.maxX || bb1.maxY !== bb0.maxY) : true;
  ok(moved, '拖动后控制层非透明包围盒变化 → 控制层**跟随地图移动**\n' +
     '      拖动前 [' + bb0.minX + ',' + bb0.minY + ']→[' + bb0.maxX + ',' + bb0.maxY + ']\n' +
     '      拖动后 [' + bb1.minX + ',' + bb1.minY + ']→[' + bb1.maxX + ',' + bb1.maxY + ']');

  // 诊断：拖动后手动调用 ControlLayer.repaint()，并读取 repaint 实际使用的 view（__clView 调试钩子）
  const sig1b = await ev(`(function(){ window.ControlLayer.repaint(); return JSON.stringify(window.__clView || null); })()`);
  const DIAG = JSON.parse(sig1b);
  console.log('  · __clView(repaint 实际 view)：' + sig1b +
    '  | SVG viewBox.x=' + DI.vb1.split(' ')[0]);

  // 反向拖回，包围盒应再变（进一步确认实时跟随而非偶发）
  const dragBack = await ev(`(function(){
    var w = document.getElementById('mapWrap'); var r = w.getBoundingClientRect();
    function pe(type, x, y, buttons){ w.dispatchEvent(new PointerEvent(type,
      { button:0, buttons:buttons, pointerId:1, pointerType:'mouse', clientX:x, clientY:y, bubbles:true, cancelable:true })); }
    var sx = Math.round(r.x + r.width * 0.42), sy = Math.round(r.y + r.height * 0.42);
    var dx = 160, dy = 110;
    pe('pointerdown', Math.round(sx+dx), Math.round(sy+dy), 1);
    for (var i = 1; i <= 8; i++) pe('pointermove', Math.round(sx + dx - dx*i/8), Math.round(sy + dy - dy*i/8), 1);
    pe('pointerup', sx, sy, 0);
    return 'ok';
  })()`);
  await sleep(600);
  const bb2 = JSON.parse(await ctrlBBox());
  const sig2 = JSON.stringify(bb2);
  const moved2 = (bb2 && bb1) ? (bb2.minX !== bb1.minX || bb2.minY !== bb1.minY ||
                                 bb2.maxX !== bb1.maxX || bb2.maxY !== bb1.maxY) : true;
  ok(moved2, '拖回后包围盒再次变化 → 实时跟随确认（' + sig1 + ' → ' + sig2 + '）');

  // ── 收尾 ──
  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('\n══════ 结果：' + PASS + ' PASS / ' + FAIL + ' FAIL ══════');
  if (FAIL) { console.log('失败项：\n - ' + FAILS.join('\n - ')); process.exit(1); }
  process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try{ server.close(); }catch(_){} process.exit(1); });
