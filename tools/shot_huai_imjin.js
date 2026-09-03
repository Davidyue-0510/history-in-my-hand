/* 唐淮西 / imjin county 页无头截图（零依赖 CDP），仅出图作渲染证据。 */
const { spawn } = require('child_process');
const http = require('http');
const fs = require('fs');
const path = require('path');
const os = require('os');

const ROOT = path.resolve(__dirname, '..');
const PORT = 9222 + Math.floor(Math.random() * 400);
const APP = 8137 + Math.floor(Math.random() * 400);
const OUT = 'C:\\Users\\Lenovo\\AppData\\Local\\Temp\\himh_shots';
fs.mkdirSync(OUT, { recursive: true });
const sleep = ms => new Promise(r => setTimeout(r, ms));
const SCENES = ['tang_huai_xi', 'imjin'];
const EDGE = ['C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  'C:\\Program Files\\Microsoft\\Edge\\Application\\msedge.exe'].find(fs.existsSync);
const MIME = { '.html':'text/html', '.js':'application/javascript', '.json':'application/json',
  '.css':'text/css', '.png':'image/png', '.svg':'image/svg+xml' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]); if (p === '/') p = '/index.html';
  const fp = path.join(ROOT, p);
  if (!fp.startsWith(ROOT) || !fs.existsSync(fp) || fs.statSync(fp).isDirectory()) { res.writeHead(404); res.end('x'); return; }
  res.writeHead(200, { 'Content-Type': MIME[path.extname(fp)] || 'application/octet-stream', 'Cache-Control': 'no-store' });
  fs.createReadStream(fp).pipe(res);
});
server.listen(APP);

(async () => {
  const child = spawn(EDGE, ['--headless=new','--disable-gpu','--no-first-run','--no-default-browser-check',
    '--remote-debugging-port='+PORT,'--user-data-dir='+os.tmpdir()+'/shot-'+process.pid,'--window-size=1440,1000','about:blank'],{stdio:'ignore'});
  let wsUrl=null;
  for (let i=0;i<80&&!wsUrl;i++){ await sleep(350);
    try{ const l=await (await fetch('http://127.0.0.1:'+PORT+'/json/list')).json();
      const pg=l.find(t=>t.type==='page'&&t.webSocketDebuggerUrl); if(pg) wsUrl=pg.webSocketDebuggerUrl; }catch(e){} }
  const ws=new globalThis.WebSocket(wsUrl); let id=0; const pend=new Map();
  ws.addEventListener('message',e=>{const m=JSON.parse(e.data); if(m.id&&pend.has(m.id)){pend.get(m.id)(m);pend.delete(m.id);}});
  await new Promise(r=>ws.addEventListener('open',r));
  const send=(m,p={})=>new Promise(res=>{const mid=++id;pend.set(mid,res);ws.send(JSON.stringify({id:mid,method:m,params:p}));});
  await send('Page.enable'); await send('Runtime.enable');
  await send('Emulation.setDeviceMetricsOverride',{width:1440,height:1000,deviceScaleFactor:1,mobile:false,screenWidth:1440,screenHeight:1000}).catch(()=>{});
  for (const sc of SCENES){
    await send('Page.navigate',{url:`http://127.0.0.1:${APP}/demo/county.html?scene=${sc}`});
    await sleep(6000);
    const r=await send('Page.captureScreenshot',{format:'png',captureBeyondViewport:false});
    const b=Buffer.from(r.result.data,'base64');
    const fp=path.join(OUT, sc+'.png'); fs.writeFileSync(fp,b);
    console.log('saved', fp, b.length, 'bytes');
  }
  ws.close(); child.kill(); server.close(); process.exit(0);
})().catch(e=>{console.log('[ERR]',e);try{server.close()}catch(_){}process.exit(1);});
