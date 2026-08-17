/* 入口总览页（index.html / hub.js）· 无头 CDP 交互探针（零依赖）
 *
 * 验证 v0.6 重设计：
 *   1) 页面无 JS 异常；分面按钮由数据驱动生成（类型/朝代/地域）；
 *   2) 卡片带多标签 chip（类型/朝代/地域），且按朝代分组渲染；
 *   3) 筛选：点选类型滤波后可见卡片数下降、统计变「n/total 匹配」；清除后恢复；
 *   4) 面内多选 OR（选两个类型 → 并集 >= 单选）。
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
  const c = ['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
    'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'];
  for (const x of c) if (fs.existsSync(x)) return x; return null;
}
const MIME = { '.html':'text/html','.js':'application/javascript','.json':'application/json',
  '.geojson':'application/json','.css':'text/css' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/demo/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream', 'Cache-Control':'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

let PASS = 0, FAIL = 0; const FAILS = [];
function ok(c, m){ if(c){PASS++;console.log('  ✓ '+m);} else {FAIL++;FAILS.push(m);console.log('  ✗ '+m);} }

(async () => {
  const EDGE = findEdge();
  if (!EDGE) { console.log('[SKIP] 未找到 Edge'); server.close(); process.exit(0); }
  const child = spawn(EDGE, ['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check',
    '--remote-debugging-port='+PORT,'--user-data-dir='+os.tmpdir()+'/probeh-'+process.pid,
    '--window-size=1400,1100','about:blank'], { stdio:'ignore' });
  let wsUrl = null;
  for (let i=0;i<80&&!wsUrl;i++){ await sleep(350);
    try{ const l=await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json();
      const pg=l.find(t=>t.type==='page'&&t.webSocketDebuggerUrl); if(pg) wsUrl=pg.webSocketDebuggerUrl; }catch(e){} }
  if(!wsUrl){ console.log('[FAIL] 拿不到 CDP'); server.close(); child.kill(); process.exit(1); }
  const ws = new globalThis.WebSocket(wsUrl);
  let id=0; const pending=new Map(); const exc=[];
  ws.addEventListener('message', e=>{ const m=JSON.parse(e.data);
    if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}
    if(m.method==='Runtime.exceptionThrown'){ const d=m.params.exceptionDetails;
      exc.push((d.exception&&d.exception.description)||d.text||'unk'); } });
  await new Promise(r=>ws.addEventListener('open',r));
  const send=(method,params={})=>new Promise(res=>{const mid=++id;pending.set(mid,res);ws.send(JSON.stringify({id:mid,method,params}));});
  const ev=async x=>(await send('Runtime.evaluate',{expression:x,returnByValue:true})).result.result.value;
  await send('Page.enable'); await send('Runtime.enable');

  console.log('\n[入口] index.html 总览页');
  exc.length=0;
  await send('Page.navigate', { url:`http://127.0.0.1:${APP}/demo/index.html` });
  await sleep(3500);

  ok(exc.length===0, '加载无 JS 异常'+(exc.length?' → '+exc.join(' | '):''));

  const facet = await ev(`JSON.stringify({
    type: document.querySelectorAll('#fType .facet-btn').length,
    era:  document.querySelectorAll('#fEra .facet-btn').length,
    region:document.querySelectorAll('#fRegion .facet-btn').length })`);
  const F = JSON.parse(facet);
  ok(F.type>0 && F.era>0 && F.region>0,
     '分面按钮数据驱动生成：类型'+F.type+' / 朝代'+F.era+' / 地域'+F.region);

  const total = await ev(`document.querySelectorAll('#hubGrid .card').length`);
  ok(total>0, '卡片已渲染：'+total+' 张');
  const dynHeads = await ev(`document.querySelectorAll('#hubGrid .region-head b').length`);
  ok(dynHeads>0, '按朝代分组（region-head）：'+dynHeads+' 组');

  // 多标签：抽查首张卡片含 类型/朝代/地域 三类 chip
  const chips = await ev(`(function(){
    var c = document.querySelector('#hubGrid .card');
    if(!c) return null;
    return { k:!!c.querySelector('.chip-k'), e:!!c.querySelector('.chip-e'), r:!!c.querySelector('.chip-r'),
             n: c.querySelectorAll('.card-tags .chip').length };
  })()`);
  ok(chips && chips.k && chips.e && chips.r,
     '卡片多标签 chip 齐全（类型/朝代/地域）：'+(chips?('共'+chips.n+'个'):'无卡片'));

  // 筛选：点一个类型，可见卡片应减少；统计应显示「匹配」
  const before = await ev(`document.querySelectorAll('#hubGrid .card').length`);
  const tbtn = await ev(`(function(){ var b=document.querySelector('#fType .facet-btn');
    if(!b) return null; b.scrollIntoView({block:'center'}); var r=b.getBoundingClientRect();
    return { v:b.getAttribute('data-v'), cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2),
      hit: document.elementFromPoint(Math.round(r.x+r.width/2),Math.round(r.y+r.height/2))===b }; })()`);
  let filtered = before;
  if (tbtn && tbtn.hit) {
    await send('Input.dispatchMouseEvent',{type:'mousePressed',x:tbtn.cx,y:tbtn.cy,button:'left',buttons:1,clickCount:1});
    await sleep(60);
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:tbtn.cx,y:tbtn.cy,button:'left',buttons:0,clickCount:1});
    await sleep(400);
    filtered = await ev(`document.querySelectorAll('#hubGrid .card').length`);
    const stats = await ev(`document.getElementById('hubStats').textContent`);
    ok(filtered < before, '点选类型「'+tbtn.v+'」后卡片数下降：'+before+' → '+filtered);
    ok(/匹配/.test(stats||''), '统计显示「匹配」：'+(stats||'').replace(/\s+/g,' ').trim());
  } else { ok(false, '类型按钮未命中，无法点选'); }

  // 面内多选 OR：再加选一个类型，可见卡片应 >= 单选（并集）
  const tbtn2 = await ev(`(function(){ var bs=[].slice.call(document.querySelectorAll('#fType .facet-btn'));
    var off = bs.filter(function(b){ return !b.classList.contains('on'); })[0];
    if(!off) return null; off.scrollIntoView({block:'center'}); var r=off.getBoundingClientRect();
    return { v:off.getAttribute('data-v'), cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2),
      hit: document.elementFromPoint(Math.round(r.x+r.width/2),Math.round(r.y+r.height/2))===off }; })()`);
  if (tbtn2 && tbtn2.hit) {
    await send('Input.dispatchMouseEvent',{type:'mousePressed',x:tbtn2.cx,y:tbtn2.cy,button:'left',buttons:1,clickCount:1});
    await sleep(60);
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:tbtn2.cx,y:tbtn2.cy,button:'left',buttons:0,clickCount:1});
    await sleep(400);
    const both = await ev(`document.querySelectorAll('#hubGrid .card').length`);
    ok(both >= filtered, '面内多选 OR：再加「'+tbtn2.v+'」后卡片='+both+' ≥ 单选'+filtered);
  }

  // 清除筛选恢复总数
  const clearBtn = await ev(`(function(){ var b=document.getElementById('hubClear');
    if(!b) return null; b.scrollIntoView({block:'center'}); var r=b.getBoundingClientRect();
    return { cx:Math.round(r.x+r.width/2), cy:Math.round(r.y+r.height/2),
      hit: document.elementFromPoint(Math.round(r.x+r.width/2),Math.round(r.y+r.height/2))===b }; })()`);
  if (clearBtn && clearBtn.hit) {
    await send('Input.dispatchMouseEvent',{type:'mousePressed',x:clearBtn.cx,y:clearBtn.cy,button:'left',buttons:1,clickCount:1});
    await sleep(60);
    await send('Input.dispatchMouseEvent',{type:'mouseReleased',x:clearBtn.cx,y:clearBtn.cy,button:'left',buttons:0,clickCount:1});
    await sleep(400);
    const after = await ev(`document.querySelectorAll('#hubGrid .card').length`);
    ok(after === total, '清除筛选后恢复总数：'+after+' = '+total);
  } else { ok(false, '清除按钮未命中'); }

  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('\n══════ 结果：'+PASS+' PASS / '+FAIL+' FAIL ══════');
  if(FAIL){ console.log('失败项：\n - '+FAILS.join('\n - ')); process.exit(1); }
  process.exit(0);
})().catch(e=>{ console.log('[ERROR] '+(e&&e.stack||e)); try{server.close();}catch(_){} process.exit(1); });
