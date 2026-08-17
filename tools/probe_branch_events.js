// 一次性探针：捕获 B6_both 分支下的「分支事件」面板（v0.57 模板）
const http = require('http');
const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const WebSocket = (()=>{ try { return require('ws'); } catch(e){ return global.WebSocket; } })();

const ROOT = path.resolve(__dirname, '..');
const DEMO = path.join(ROOT, 'demo');
const PORT = 8802;
const MIME = { '.html':'text/html', '.js':'text/javascript', '.json':'application/json', '.css':'text/css', '.jpg':'image/jpeg' };

function sleep(ms){ return new Promise(r=>setTimeout(r,ms)); }

function serve(){ return http.createServer((req,res)=>{
  let p = decodeURIComponent(req.url.split('?')[0]);
  if(p==='/') p='/sim_engine.html';
  const fp = path.join(DEMO, p);
  if(!fp.startsWith(DEMO) || !fs.existsSync(fp)){ res.writeHead(404); res.end('nf'); return; }
  res.writeHead(200, {'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream'});
  fs.createReadStream(fp).pipe(res);
});}

async function launch(){
  const os = require('os');
  const candidates = ['C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe','C:/Program Files/Microsoft/Edge/Application/msedge.exe'];
  let edge = candidates.find(p=>fs.existsSync(p));
  if(!edge) try{ edge = execSync('where msedge',{encoding:'utf8'}).trim().split('\n')[0]; }catch(e){}
  if(!edge) throw new Error('找不到 Edge');
  const port = 9240 + Math.floor(Math.random()*10);
  const child = require('child_process').spawn(edge, ['--headless=new','--disable-gpu','--no-sandbox','--no-first-run','--no-default-browser-check','--remote-debugging-port='+port,'--user-data-dir='+os.tmpdir()+'/probe-be-'+process.pid,'about:blank'], {stdio:'ignore'});
  let wsUrl=null;
  for(let i=0;i<80 && !wsUrl;i++){ await sleep(350);
    try{ const list = await fetch('http://127.0.0.1:'+port+'/json/list').then(r=>r.json());
      const pg = list.find(t=>t.type==='page' && t.webSocketDebuggerUrl); if(pg) wsUrl = pg.webSocketDebuggerUrl;
    }catch(e){}
  }
  if(!wsUrl) throw new Error('拿不到 CDP ws');
  const ws = new WebSocket(wsUrl);
  await new Promise((res,rej)=>{ ws.addEventListener('open',res); ws.addEventListener('error',rej); });
  let id=0; const pending=new Map();
  ws.onmessage = (ev)=>{ const m=JSON.parse(ev.data);
    if(m.id && pending.has(m.id)){ pending.get(m.id)(m); pending.delete(m.id); }
  };
  function send(method, params={}){ return new Promise((res,rej)=>{ const mid=++id; pending.set(mid, m=>{ if(m.error) rej(new Error(method+' '+JSON.stringify(m.error).slice(0,200))); else res(m); }); ws.send(JSON.stringify({id:mid,method,params})); });
  }
  await send('Page.enable'); await send('Runtime.enable');
  const page = {
    async goto(url){ await send('Page.navigate',{url}); await sleep(1200); },
    async evaluate(fn){ const expr='('+fn.toString()+')()'; const r=await send('Runtime.evaluate',{expression:expr,returnByValue:true,awaitPromise:true});
      if(!r.result) throw new Error('no result');
      if(r.result.exceptionDetails) throw new Error('exception: '+JSON.stringify(r.result.exceptionDetails).slice(0,400));
      return r.result.result.value;
    },
    async screenshot(file){ const r=await send('Page.captureScreenshot',{format:'png',fromSurface:true,captureBeyondViewport:false}); fs.writeFileSync(file, Buffer.from(r.result.data,'base64')); }
  };
  return { page, close:()=>{ try{child.kill();}catch(e){} try{ws.close();}catch(e){} } };
}

(async()=>{
  const server = serve(); server.listen(PORT);
  let browser, page;
  try {
    browser = await launch(); page = browser.page;
    await page.goto('http://localhost:'+PORT+'/sim_engine.html');
    // 等地形图加载
    let waited=0; while(waited<5000){ const r=await page.evaluate(()=>!!(window.SIM_ENGINE&&SIM_ENGINE.terrainReady())); if(r) break; await sleep(150); waited+=150; }
    // 切到 B6_both 分支
    await page.evaluate(()=>{ document.getElementById('br_B6_both').click(); });
    await sleep(400);
    // 校验事件
    const ev = await page.evaluate(()=>({
      kinds: SIM_ENGINE.branchEvents().reduce((m,e)=>{m[e.kind]=(m[e.kind]||0)+1; return m;},{}),
      panelLen: document.getElementById('be').innerHTML.length,
      be_html: document.getElementById('be').innerHTML.slice(0,300)
    }));
    console.log('B6_both 事件分类:', JSON.stringify(ev.kinds));
    console.log('面板 HTML 长度:', ev.panelLen);
    console.log('面板预览:', ev.be_html);
    fs.mkdirSync(path.join(ROOT,'.tmp'),{recursive:true});
    await page.screenshot(path.join(ROOT,'.tmp','sim_engine_branch_events.png'));
    console.log('截图已保存 → .tmp/sim_engine_branch_events.png');
  } catch(e){ console.error('异常:', e); process.exit(2); }
  finally { try{ browser && browser.close(); }catch(e){} server.close(); }
})();