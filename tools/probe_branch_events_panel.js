// 一次性探针：渲染分支事件面板 → 单独截屏
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();
const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8803;
const MIME = { '.html':'text/html','.js':'text/javascript','.json':'application/json','.css':'text/css','.jpg':'image/jpeg' };
function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }
function serve(){ return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p='/sim_engine.html';
  const fp = path.join(DEMO, p);
  if(!fp.startsWith(DEMO) || !fs.existsSync(fp)){ res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200,{'Content-Type':MIME[path.extname(fp)]||'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});}
async function launch(){
  const os=require('os');
  const cs=['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe'];
  let edge=cs.find(p=>fs.existsSync(p));
  if(!edge) try{ edge=execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){}
  if(!edge) throw new Error('找不到 Edge');
  const port=9250+Math.floor(Math.random()*10);
  const child=require('child_process').spawn(edge,['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-be2-'+process.pid,'about:blank'],{stdio:'ignore'});
  let wsUrl=null;
  for(let i=0;i<80&&!wsUrl;i++){await sleep(350);
    try{const list=await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());
      const pg=list.find(t=>t.type==='page'&&t.webSocketDebuggerUrl);if(pg) wsUrl=pg.webSocketDebuggerUrl;}catch(e){}
  }
  if(!wsUrl) throw new Error('拿不到 CDP ws');
  const ws=new WebSocket(wsUrl);
  await new Promise((res,rej)=>{ws.addEventListener('open',res);ws.addEventListener('error',rej);});
  let id=0;const pending=new Map();
  ws.onmessage=(ev)=>{const m=JSON.parse(ev.data);if(m.id&&pending.has(m.id)){pending.get(m.id)(m);pending.delete(m.id);}};
  function send(method,params={}){return new Promise((res,rej)=>{const mid=++id;pending.set(mid,m=>{if(m.error)rej(new Error(method));else res(m);});ws.send(JSON.stringify({id:mid,method,params}));});
  }
  await send('Page.enable');await send('Runtime.enable');
  const page={async goto(url){await send('Page.navigate',{url});await sleep(1100);},
    async evaluate(fn){const expr='('+fn.toString()+')()';const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});if(r.result.exceptionDetails)throw new Error(JSON.stringify(r.result.exceptionDetails).slice(0,400));return r.result.result.value;},
    async screenshot(file){const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false});fs.writeFileSync(file,Buffer.from(r.result.data,'base64'));}
  };
  return {page,close:()=>{try{child.kill();}catch(e){}try{ws.close();}catch(e){}}};
}

(async()=>{
  const server=serve();server.listen(PORT);
  let browser;
  try{
    browser=await launch();
    await browser.page.goto('http://localhost:'+PORT+'/sim_engine.html');
    let waited=0;while(waited<5000){const r=await browser.page.evaluate(()=>!!(window.SIM_ENGINE&&SIM_ENGINE.terrainReady()));if(r)break;await sleep(150);waited+=150;}
    await browser.page.evaluate(()=>document.getElementById('br_B6_both').click());
    await sleep(500);
    const data=await browser.page.evaluate(()=>({
      be: document.getElementById('be').innerHTML,
      css: Array.from(document.styleSheets[0].cssRules).filter(r=>r.cssText&&(r.cssText.includes('be-')||r.cssText.includes('.hl{')||r.cssText.includes('.ok{'))).map(r=>r.cssText).join('\n')
    }));
    fs.mkdirSync(path.join(ROOT,'.tmp'),{recursive:true});
    fs.writeFileSync(path.join(ROOT,'.tmp','be_panel_b6.html'),
      '<!doctype html><html><head><meta charset="utf-8"><style>'+
      'body{background:#0d1117;color:#c9d1d9;font-family:-apple-system,Segoe UI,sans-serif;padding:8px;max-width:420px;margin:0;font-size:11px}'+
      'h3.head{margin:4px 0 6px 0;color:#58a6ff;font-size:13px}'+
      data.css+'\n</style></head><body>'+
      '<h3 class="head">🧩 分支事件（B6_both · 内耗+物理双开 · 25件）</h3>'+data.be+
      '</body></html>');
    const http2=http.createServer((req,res)=>{
      const fp=path.join(ROOT,'.tmp','be_panel_b6.html');
      res.writeHead(200,{'Content-Type':'text/html'});fs.createReadStream(fp).pipe(res);
    });
    http2.listen(8805);
    await browser.page.goto('http://localhost:8805/be_panel_b6.html');
    await sleep(500);
    await browser.page.screenshot(path.join(ROOT,'.tmp','sim_engine_branch_events.png'));
    http2.close();
    console.log('saved → .tmp/sim_engine_branch_events.png');
  }catch(e){console.error('异常:',e);process.exit(2);}
  finally{try{browser&&browser.close();}catch(e){}server.close();}
})();