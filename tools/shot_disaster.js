/* 截图：灾难场景影响范围层 + 入口总览页（验证视觉渲染，零依赖） */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');
const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random()*400);
const APP = 8137 + Math.floor(Math.random()*400);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const OUT = path.join(ROOT, '.tmp', 'shots');
fs.mkdirSync(OUT, { recursive: true });
function findEdge(){ const c=['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe','C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'];
  for(const x of c) if(fs.existsSync(x)) return x; return null; }
const MIME={'.html':'text/html','.js':'application/javascript','.json':'application/json','.geojson':'application/json','.css':'text/css'};
const server=http.createServer((req,res)=>{ let p=decodeURIComponent(req.url.split('?')[0]); if(p==='/')p='/demo/index.html';
  const fp=path.join(ROOT,p); if(!fp.startsWith(ROOT)||!fs.existsSync(fp)||fs.statSync(fp).isDirectory()){res.writeHead(404);res.end();return;}
  res.writeHead(200,{'Content-Type':MIME[path.extname(fp)]||'application/octet-stream','Cache-Control':'no-store'}); fs.createReadStream(fp).pipe(res); });
server.listen(APP);
(async()=>{
  const EDGE=findEdge(); if(!EDGE){console.log('[SKIP] 未找到 Edge');server.close();process.exit(0);}
  const child=spawn(EDGE,['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check','--remote-debugging-port='+PORT,
    '--user-data-dir='+os.tmpdir()+'/shot-'+process.pid,'--window-size=1440,1000','about:blank'],{stdio:'ignore'});
  let wsUrl=null;
  for(let i=0;i<80&&!wsUrl;i++){ await sleep(350);
    try{ const l=await (await fetch(`http://127.0.0.1:${PORT}/json/list`)).json(); const pg=l.find(t=>t.type==='page'&&t.webSocketDebuggerUrl); if(pg)wsUrl=pg.webSocketDebuggerUrl; }catch(e){} }
  const ws=new globalThis.WebSocket(wsUrl); let id=0; const pending=new Map();
  ws.addEventListener('message',e=>{const m=JSON.parse(e.data); if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}});
  await new Promise(r=>ws.addEventListener('open',r));
  const send=(method,params={})=>new Promise(res=>{const mid=++id;pending.set(mid,res);ws.send(JSON.stringify({id:mid,method,params}));});
  const ev=async x=>(await send('Runtime.evaluate',{expression:x,returnByValue:true})).result.result.value;
  await send('Page.enable'); await send('Runtime.enable'); await send('Page.setViewport',{width:1440,height:1000,deviceScaleFactor:1});

  async function shot(url, file, prep){
    await send('Page.navigate',{url}); await sleep(6000);
    if(prep) await prep();
    await sleep(800);
    const b64=(await send('Page.captureScreenshot',{format:'png'})).result.data;
    fs.writeFileSync(path.join(OUT,file), Buffer.from(b64,'base64'));
    console.log('  saved '+file);
  }

  console.log('[截图] 开封河决 灾难影响范围层（severity 默认 + 时间轴=1643）');
  await shot(`http://127.0.0.1:${APP}/demo/county.html?scene=kaifeng_juekou`, 'kaifeng_impact.png',
    async()=>{ await ev('if(window.ImpactLayer)ImpactLayer.draw(1643);'); });

  console.log('[截图] 入口总览页（分面 + 多标签卡片）');
  await shot(`http://127.0.0.1:${APP}/demo/index.html`, 'hub.png');

  await send('Page.close').catch(()=>{});
  ws.close(); child.kill(); server.close();
  console.log('截图目录: '+OUT);
  process.exit(0);
})().catch(e=>{console.log('[ERROR] '+(e&&e.stack||e));try{server.close();}catch(_){}process.exit(1);});
