// 校准 R7 后勤物理惩罚强度：复制 sim_engine.html 的核心纯函数，
// 对 B5 分支(logisticsPenalty=0.4) 计算确定性反事实偏离数，找稳健的系数组合。
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const ROOT = 'E:/my civilization';
const src = fs.readFileSync(path.join(ROOT,'demo/_sim_liaodong.js'),'utf8');
const sandbox = { window:{} };
vm.runInNewContext(src, sandbox);
const D = sandbox.window.SIM_DATA;
const SEATS = D.seats;
const seatById = {}; SEATS.forEach(s=>seatById[s.id]=s);

const PHYS = {
  supplyRadius: { ming:300, qing:400 },
  overScale: 500,
  winterPenalty: 0.75,
  knownSeason: {
    '1618|fushun':'summer','1618|qinghe':'summer',
    '1619|kaiyuan':'spring','1619|tieling':'spring',
    '1621|shenyang':'spring','1621|liaoyang':'spring','1621|lushun':'spring','1621|fuzhou':'spring',
    '1621|gaizhou':'spring','1621|haizhou':'spring','1621|niuzhuang':'spring','1621|xiongyue':'spring','1621|yaozhou':'spring','1621|jinzhou_dalian':'spring',
    '1622|guangning':'winter','1622|yizhou':'winter',
    '1624|horqin':'summer',
    '1628|chahar':'autumn','1628|harqin':'summer',
    '1631|dalinghe':'autumn',
    '1632|tumed':'summer',
    '1635|chahar':'summer','1635|ordos':'summer',
    '1641|jinzhou':'summer','1641|songshan':'summer','1641|xingshan':'summer',
    '1644|ningyuan':'autumn','1644|shanhaiquan':'winter'
  }
};
const SEASONS=['spring','summer','autumn','winter'];
function seedHash(str){ let h=2166136261>>>0; for(let i=0;i<str.length;i++){h^=str.charCodeAt(i);h=Math.imul(h,16777619)>>>0;} return (h>>>0)/4294967296; }
function intrinsicP(year,place_id,to,salt){ return seedHash(year+'|'+place_id+'|'+to+'|'+(salt||'a')); }
function haversine(a,b){ const R=6371,toR=Math.PI/180; const dLat=(b[1]-a[1])*toR,dLon=(b[0]-a[0])*toR,la1=a[1]*toR,la2=b[1]*toR; const h=Math.sin(dLat/2)**2+Math.cos(la1)*Math.cos(la2)*Math.sin(dLon/2)**2; return 2*R*Math.asin(Math.min(1,Math.sqrt(h))); }
function clamp(v,a,b){ return Math.max(a,Math.min(b,v)); }
function seasonOf(Y,pid){ const k=Y+'|'+pid; if(PHYS.knownSeason[k]) return PHYS.knownSeason[k]; const h=seedHash('season|'+k); return SEASONS[Math.floor(h*4)]; }
function physicalFactor(t,Y,baseState){
  const target=seatById[t.place_id]; if(!target) return {factor:1,dist:0,base:null,radius:0,over:0,season:'spring',winter:false};
  const attacker=t.to; let best=1e9,base=null;
  SEATS.forEach(s=>{ if((baseState[s.id]||'?')===attacker){ const d=haversine([s.lon,s.lat],[target.lon,target.lat]); if(d<best){best=d;base=s;} } });
  const radius=(attacker==='清方')?PHYS.supplyRadius.qing:PHYS.supplyRadius.ming;
  let factor=1; const over=Math.max(0,best-radius);
  if(over>0) factor*=clamp(1-over/PHYS.overScale,0.3,1);
  const season=seasonOf(Y,t.place_id); let winter=false;
  if(season==='winter'){ factor*=(PHYS.winterPenalty||0.75); winter=true; }
  return {factor,dist:best,base:base?base.name:null,radius,over,season,winter};
}
function effFor(party,p){ if(party==='清方')return p.qingExec; if(party==='明方')return p.mingExec; return 1.0; }

function runB5(baseFricMul, distMul, floorArg){
  const p = { qingExec:1.0, mingExec:1.0, spreadPref:1.0, logisticsPenalty:0.4, winterPenalty:0.75 };
  let state = Object.assign({}, D.startControl);
  let divergences = [];
  for(let Y=D.meta.startYear+1; Y<=D.meta.endYear; Y++){
    const ts = D.transitions.filter(t=>t.year===Y);
    const baseState = Object.assign({}, state);
    for(const t of ts){
      let eff = effFor(t.to, p);
      const pf = physicalFactor(t,Y,baseState);
      if(pf.over>0){ eff=Math.min(eff,0.015); }
      else {
        const gentle = clamp(1 - (pf.dist/pf.radius)*distMul, floorArg, 1);
        const f = pf.factor;
        const baseFric = 1 - p.logisticsPenalty*baseFricMul;
        eff *= gentle*f*baseFric;
      }
      const ip = intrinsicP(t.year,t.place_id,t.to,'a');
      const success = (t.to==='contested') ? true : (ip < eff);
      if(!success) divergences.push({year:Y,place:t.place_id,to:t.to,ip:+ip.toFixed(3),eff:+eff.toFixed(3),hard:pf.over>0});
      if(success) state[t.place_id]=t.to;
    }
  }
  return { divergences };
}

console.log('总 transitions =', D.transitions.length, '; 非 contested =', D.transitions.filter(t=>t.to!=='contested').length);
for(const [bf,dm,fl] of [[0.3,0.15,0.7],[0.4,0.35,0.45],[0.45,0.35,0.45],[0.5,0.35,0.4],[0.45,0.3,0.5]]){
  const r = runB5(bf,dm,fl);
  const hard = r.divergences.filter(d=>d.hard).length;
  console.log(`baseFricMul=${bf} distMul=${dm} floor=${fl} → B5 偏离 ${r.divergences.length} 处 (硬失败=${hard}, 软失败=${r.divergences.length-hard})`);
  r.divergences.forEach(d=>console.log('   '+(d.hard?'⛔':'✗'), d.year, d.place, '→', d.to, 'ip='+d.ip, 'eff='+d.eff));
}
