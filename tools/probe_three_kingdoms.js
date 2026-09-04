/* 三国双切片 加载探针（零依赖 CDP）
 * 验证：county.html?scene=guandu_llm / san_guo 加载无 JS 异常；事件列表/地图渲染；
 *       control 层已打包且为真多方；六维覆盖 = 1..6 全；跨源冲突已捕获。
 * 纪律：不硬编码场景专属数字（治所数/分支 id/endYear），只做「> 0」与「全覆盖」类稳定断言，
 *       避免把探针写成会随数据微调而变绿的假绿。
 */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const SHOT_DIR = path.join(os.tmpdir(), 'probe_3k_shots');
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SCENES = ['guandu_llm', 'san_guo'];

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
  if (!fs.existsSync(SHOT_DIR)) fs.mkdirSync(SHOT_DIR, { recursive: true });
  const child = spawn(EDGE, ['--headless=new', '--disable-gpu', '--no-first-run',
    '--no-default-browser-check', '--remote-debugging-port=' + PORT,
    '--user-data-dir=' + path.join(os.tmpdir(), 'probe3k-' + process.pid),
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
      const loc = d.stackTrace && d.stackTrace.callFrames[0];
      const where = loc ? (loc.url + ':' + loc.lineNumber) : (d.scriptId || '?');
      exceptions.push(((d.exception && d.exception.description) || d.text || 'unknown') + ' @ ' + where);
    }
  });
  await new Promise(r => ws.addEventListener('open', r));
  const send = (method, params = {}) => new Promise(res => { const mid = ++id; pending.set(mid, res);
    ws.send(JSON.stringify({ id: mid, method, params })); });
  const ev = async expr => (await send('Runtime.evaluate',
    { expression: expr, returnByValue: true })).result.result.value;
  await send('Page.enable'); await send('Runtime.enable');
  // 硬经验 #16：无头视口 ≠ window-size，必须强设 deviceMetrics，否则窄屏媒体查询会 display:none
  await send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1,
    mobile: false, screenWidth: 1440, screenHeight: 1000 }).catch(()=>{});

  async function goto(url) { exceptions.length = 0; await send('Page.navigate', { url }); await sleep(6500); }

  const SLICE = sc => `(function(){ try {
      return (window.SANDBOX_SLICES && SANDBOX_SLICES['${sc}']) ||
             (window.SANDBOX_DATA && SANDBOX_DATA.scenes && SANDBOX_DATA.scenes['${sc}']) || {};
    } catch(e){ return {}; } })()`;

  for (const sc of SCENES) {
    console.log('\n[场景] ' + sc);
    await goto(`http://127.0.0.1:${APP}/demo/county.html?scene=${sc}`);
    ok(exceptions.length === 0, '加载无 JS 异常' + (exceptions.length ? ' → ' + exceptions.join(' | ') : ''));

    const nEvt = await ev(`document.querySelectorAll('#eventsPane .ev').length`);
    ok((nEvt|0) > 0, '事件列表渲染出事件节点 (n=' + (nEvt|0) + ')');

    const hasMap = await ev(`!!(document.getElementById('map') && document.getElementById('map').getAttribute('viewBox'))`);
    ok(hasMap === true, '地图 SVG 已渲染 (viewBox 存在)');

    // 控制层：段数 > 0，且治理方多于一方（真多方，不是 auto-control 全归主方）
    const ctrl = await ev(`(function(){ var s = ${SLICE(sc)};
        var c = s.control || [], parties = {};
        c.forEach(function(x){ if (x && x.party) parties[x.party] = 1; });
        return JSON.stringify({control: c.length, seats: (s.control_seats||[]).length,
                               parties: Object.keys(parties)}); })()`);
    let cobj; try { cobj = JSON.parse(ctrl); } catch(_) { cobj = {}; }
    ok((cobj.control|0) > 0, '控制层 control 段已打包 (n=' + (cobj.control|0) + ')');
    ok((cobj.seats|0) > 0, '控制层 control_seats 已生成 (n=' + (cobj.seats|0) + ')');
    ok((cobj.parties||[]).length > 1, '控制层为真多方（party 数 ' + (cobj.parties||[]).length +
       '：' + (cobj.parties||[]).join('/') + '），非 auto-control 单方');

    // 六维覆盖
    const dims = await ev(`(function(){ var s = ${SLICE(sc)};
        var d = (s.meta && s.meta.dims) || s.dims || [];
        return Array.isArray(d) ? d.join(',') : String(d); })()`);
    console.log('  · 六维 dims 观测: [' + dims + ']');
    ok([1,2,3,4,5,6].every(n => (',' + dims + ',').indexOf(',' + n + ',') >= 0),
       '六维全覆盖 1..6');

    // 跨源冲突（只报告；san_guo 刻意构造了正统之争与人口两处冲突）
    const cf = await ev(`(function(){ var s = ${SLICE(sc)};
        var c = s.conflicts || [], x = s.crossConflicts || [];
        return JSON.stringify({conflicts: c.map(function(i){return i.id + ':' + i.kind;}),
                               cross: x.length, gaps: (s.gaps||[]).length}); })()`);
    let cfobj; try { cfobj = JSON.parse(cf); } catch(_) { cfobj = {}; }
    console.log('  · 冲突/缺口观测: conflicts=' + JSON.stringify(cfobj.conflicts) +
                ' | cross=' + cfobj.cross + ' | gaps=' + cfobj.gaps);
    if (sc === 'san_guo') {
      ok((cfobj.conflicts||[]).length > 0, 'san_guo 跨源冲突已被 build 捕获（正统之争 / 人口）');
      ok((cfobj.gaps|0) > 0, 'san_guo 诚实缺口已打包（蜀汉不置史官）');
    }

    // 截图证据
    const shot = await send('Page.captureScreenshot', { format: 'png' });
    const fp = path.join(SHOT_DIR, sc + '.png');
    if (shot.result && shot.result.data) {
      fs.writeFileSync(fp, Buffer.from(shot.result.data, 'base64'));
      console.log('  · 截图: ' + fp);
    }
  }

  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  // 无头 Edge 的 user-data-dir 用完即清，避免 .tmp/edge_udd_* 式堆积重演
  try { const udd = path.join(os.tmpdir(), 'probe3k-' + process.pid);
        fs.rmSync(udd, { recursive: true, force: true }); } catch (_) {}
  console.log('\n══════ 结果：' + PASS + ' PASS / ' + FAIL + ' FAIL ══════');
  if (FAIL) { console.log('失败项：\n - ' + FAILS.join('\n - ')); process.exit(1); }
  process.exit(0);
})().catch(e => { console.log('[ERROR] ' + (e && e.stack || e)); try{ server.close(); }catch(_){} process.exit(1); });
