// 截 index.html 枢纽页：验证新增的「沙盘模拟器·萨尔浒」+「萨尔浒之战→sarhu.html」入口
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();
const errors = [];
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8811;
const TARGET = '/index.html';
const MIME = { '.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css','.md':'text/markdown','.jpg':'image/jpeg','.png':'image/png' };
function serve(){return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p=TARGET;
  const fp = (p.startsWith('/data/')||p.startsWith('/docs/')) ? path.join(ROOT, p) : path.join(DEMO, p);
  if(!fp.startsWith(ROOT) || !fs.existsSync(fp)){res.writeHead(404);res.end('nf');return;}
  res.writeHead(200,{'Content-Type':MIME[path.extname(fp)]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});}
function sleep(ms){return new Promise(r=>setTimeout(r,ms));}
async function main(){
  const server = serve(); server.listen(PORT);
  const browser = await launch();
  const page = browser.page; page.on=()=>{};
  await page.goto('http://localhost:'+PORT+TARGET);
  await sleep(3500);
  const links = await page.evaluate(()=>({
    sarhuBattle: document.querySelector('a.mod-card[href="sarhu.html"]') ? 'OK' : 'MISSING',
    simMapSarhu: document.querySelector('a.mod-card[href="sim_map.html?scene=sarhu"]') ? 'OK' : 'MISSING',
    countySarhu: document.querySelector('a.mod-card[href="county.html?scene=sarhu"]') ? 'OK' : 'MISSING',
    hubCards: document.querySelectorAll('#hubGrid .card').length,
    simCardText: (document.querySelector('a.mod-card[href="sim_map.html?scene=sarhu"] .mod-title')||{}).textContent || ''
  }));
  await page.evaluate(()=>{ const e=document.querySelector('a.mod-card[href="sim_map.html?scene=sarhu"]'); if(e) e.scrollIntoView({block:'center'}); });
  await sleep(400);
  await page.screenshot(path.join(ROOT,'.tmp','index_hub.png'));
  await browser.close(); server.close();
  let pass=true; const ok=(c,m)=>{ console.log((c?'  ✓ ':'  ✗ ')+m); if(!c)pass=false; };
  console.log('== index.html 链接完整性 ==');
  ok(errors.length===0, '无 JS 异常'+(errors.length?' → '+errors.join(' | '):''));
  ok(links.sarhuBattle==='OK', '萨尔浒之战 → sarhu.html');
  ok(links.simMapSarhu==='OK', '沙盘模拟器·萨尔浒 → sim_map.html?scene=sarhu');
  ok(links.countySarhu==='OK', '史料×地图沙盘 → county.html?scene=sarhu');
  ok(links.hubCards>0, 'hubGrid 已渲染 ' + links.hubCards + ' 张切片卡（document.write 注入完成）');
  console.log('  [info] 新沙盘卡片标题 =', links.simCardText);
  console.log(pass?'\n✓ 全部通过':'\n✗ 存在失败');
  process.exit(pass?0:1);
}
async function launch(){
  const edgePaths = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe',process.env.EDGE_BIN].filter(Boolean);
  let edge=null;
  for(const p of edgePaths){ if(fs.existsSync(p)){edge=p;break;} }
  if(!edge){ try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){} }
  if(!edge) throw new Error('找不到 Edge');
  const port = 9270 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-idx-'+process.pid,'about:blank'], {stdio:'ignore'});
  let wsUrl=null;
  for(let i=0;i<80&&!wsUrl;i++){ await sleep(350);
    try{ const list = await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());
      const pg = list.find(t=>t.type==='page' && t.webSocketDebuggerUrl); if(pg) wsUrl = pg.webSocketDebuggerUrl;
    }catch(e){} }
  const ws = new WebSocket(wsUrl);
  await new Promise((res,rej)=>{ ws.addEventListener('open',res); ws.addEventListener('error',rej); });
  let id=0; const pending=new Map();
  ws.onmessage = (ev)=>{ const m=JSON.parse(ev.data);
    if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}
    else if(m.method==='Runtime.exceptionThrown'){ errors.push('exc: '+((m.params.exceptionDetails.exception&&m.params.exceptionDetails.exception.description)||m.params.exceptionDetails.text)); }
    else if(m.method==='Runtime.consoleAPICalled' && m.params.type==='error'){ errors.push('err: '+m.params.args.map(a=>a.value||a.description).join(' ')); }
  };
  function send(method,params={}){ return new Promise((res,rej)=>{ const mid=++id; pending.set(mid, m=>{ if(m.error) rej(new Error(method)); else res(m); }); ws.send(JSON.stringify({id:mid,method,params})); }); }
  await send('Page.enable'); await send('Runtime.enable');
  const page = {
    async goto(url){ await send('Page.navigate',{url}); await sleep(900); },
    async evaluate(fn, ...args){ const expr='('+fn.toString()+')('+args.map(a=>JSON.stringify(a)).join(',')+')'; const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});
      if(!r.result) throw new Error('no result'); if(r.result.exceptionDetails){ const ed=r.result.exceptionDetails; throw new Error('exc: '+((ed.exception&&(ed.exception.description||ed.exception.value))||ed.text)); }
      return r.result.result.value; },
    async screenshot(file, opts){ const clip=opts&&opts.clip; const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false,clip:clip?{x:clip.x,y:clip.y,width:clip.width,height:clip.height,scale:1}:undefined}); fs.writeFileSync(file, Buffer.from(r.result.data,'base64')); },
    on(){},
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{ws.close();}catch(e){} } };
}
main().catch(e=>{ console.error('异常:',e.message); process.exit(2); });