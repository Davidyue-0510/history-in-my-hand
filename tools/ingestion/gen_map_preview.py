#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""复刻 demo/whatif.html 的 drawMapSVG 投影，用场景真实坐标生成等价 SVG 预览工件。
不依赖浏览器，作为 CDP 截图不可用时的视觉证据。投影参数与 drawMapSVG 严格一致。
用法：python tools/ingestion/gen_map_preview.py <scene_id> [whatif|real] [out.svg]
"""
import json, sys, os

ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))

CHINA_OUTLINE = [
    [134.3,48.4],[133.0,45.3],[131.2,44.9],[130.6,42.9],[128.2,42.0],
    [126.0,41.0],[123.8,39.9],[121.6,38.7],[118.8,38.7],[119.2,37.4],
    [122.6,37.4],[120.8,34.3],[120.3,32.5],[121.9,31.0],[121.5,29.0],
    [120.1,27.2],[119.3,25.4],[117.5,23.7],[113.6,22.2],[110.4,21.0],
    [108.5,21.5],[106.7,22.4],[103.5,22.6],[101.5,21.2],[99.2,22.4],
    [97.7,24.2],[98.6,25.9],[97.5,28.4],[98.7,27.7],[95.5,29.0],
    [92.0,28.0],[88.8,27.8],[85.0,28.3],[81.5,30.2],[78.8,32.5],
    [79.5,34.5],[75.0,36.5],[73.5,39.5],[75.0,40.5],[80.5,42.5],
    [82.5,45.0],[85.0,47.0],[87.5,49.0],[91.0,47.8],[96.0,42.8],
    [100.0,42.5],[105.0,41.8],[111.0,43.5],[115.0,45.0],[119.0,46.5],
    [122.0,46.5],[126.0,48.5],[127.5,50.2],[124.0,53.0],[125.5,53.5],
    [127.5,50.5],[130.5,48.5],[134.3,48.4]
]
RIVER_HUANGHE = [[96,35],[99,36],[103,36],[105,37],[108,38],[109,40],[111,41],[112,40],[115,40],[117,37],[119,37],[119,38]]
RIVER_CHANGJIANG = [[91,33],[95,32],[100,31],[104,29],[107,30],[110,30],[113,30],[116,29.5],[118,32],[121,31]]

W,H,padL,padR,padT,padB = 720,400,44,18,16,30
LON0,LON1,LAT0,LAT1 = 73,135,18,54

def px(lon): return padL+(lon-LON0)/(LON1-LON0)*(W-padL-padR)
def py(lat): return padT+(LAT1-lat)/(LAT1-LAT0)*(H-padT-padB)

def color_scale(v):
    v=max(0,min(1,v))
    def hx(c): return [int(c[1:3],16),int(c[3:5],16),int(c[5:7],16)]
    def mix(a,b,t):
        A,B=hx(a),hx(b)
        return 'rgb(%d,%d,%d)'%(round(A[0]+(B[0]-A[0])*t),round(A[1]+(B[1]-A[1])*t),round(A[2]+(B[2]-A[2])*t))
    if v<0.5: return mix('#b5443a','#c8a24a',v/0.5)
    return mix('#c8a24a','#3f7d54',(v-0.5)/0.5)

def gen(scene, branch='whatif'):
    sp = os.path.join(ROOT,'data',scene,'places.json')
    with open(sp,encoding='utf-8') as f:
        P = json.load(f)
    places = P.get('places', P if isinstance(P,list) else [])
    coords=[p for p in places if p.get('lon') is not None and p.get('lat') is not None]
    # 读取 branch 年份（用于激活态）
    hist_file = os.path.join(ROOT,'data',scene,f'state_hist_{"whatif" if branch=="whatif" else "real"}.json')
    years=[]
    if os.path.exists(hist_file):
        with open(hist_file,encoding='utf-8') as f:
            HJ=json.load(f)
        yrs = HJ if isinstance(HJ,list) else HJ.get('state_hist',[])
        if isinstance(yrs,dict): yrs=yrs.get('state_hist',[])
        years=[s.get('year') for s in yrs if isinstance(s,dict) and 'year' in s]
    y0 = years[0] if years else 1000
    y1 = years[-1] if years else 1100
    n=len(coords)
    step = max(1, int((y1-y0)/(n-1))) if n>1 else 0
    nodes=[]
    for i,p in enumerate(coords):
        nodes.append({'name':p.get('name') or p.get('label') or p.get('id'),
                      'lon':p['lon'],'lat':p['lat'],
                      'adopt': y0 if i==0 else min(y1, y0+i*step)})
    # 组装 SVG
    op=' '.join('%s,%s'%(px(p[0]).__round__(1) if False else round(px(p[0]),1), round(py(p[1]),1)) for p in CHINA_OUTLINE)
    svg=[]
    svg.append('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 %d %d" preserveAspectRatio="xMidYMid meet">'%(W,H))
    svg.append('<polygon points="%s" fill="#f3ecd9" fill-opacity="0.55" stroke="#b9a87f" stroke-width="1.2"/>'%op)
    def rp(pts): return ' '.join('%s,%s'%(round(px(p[0]),1),round(py(p[1]),1)) for p in pts)
    svg.append('<polyline points="%s" fill="none" stroke="#7fa7c4" stroke-width="1.4" stroke-opacity="0.85"/>'%rp(RIVER_HUANGHE))
    svg.append('<polyline points="%s" fill="none" stroke="#7fa7c4" stroke-width="1.4" stroke-opacity="0.85"/>'%rp(RIVER_CHANGJIANG))
    for lo in [80,90,100,110,120,130]:
        x=px(lo)
        svg.append('<line x1="%.1f" y1="%d" x2="%.1f" y2="%d" stroke="#e3dccb"/>'%(x,padT,x,H-padB))
        svg.append('<text x="%.1f" y="%d" font-size="9" fill="#9a9286" text-anchor="middle">%d°E</text>'%(x,H-padB+12,lo))
    for la in [20,30,40,50]:
        y=py(la)
        svg.append('<line x1="%d" y1="%.1f" x2="%d" y2="%.1f" stroke="#e3dccb"/>'%(padL,y,W-padR,y))
        svg.append('<text x="%d" y="%.1f" font-size="9" fill="#9a9286" text-anchor="end">%d°N</text>'%(padL-4,y+3,la))
    svg.append('<rect x="%d" y="%d" width="%d" height="%d" fill="none" stroke="#c9bfa8"/>'%(padL,padT,W-padL-padR,H-padT-padB))
    for nd in nodes:
        x=px(nd['lon']); y=py(nd['lat'])
        fill='#c9bfa8'
        svg.append('<circle cx="%.1f" cy="%.1f" r="9" fill="%s" fill-opacity="0.92" stroke="#332d27" stroke-width="1"/>'%(x,y,fill))
        lx=x+11; ly=y+3
        svg.append('<text x="%.1f" y="%.1f" font-size="12" fill="#332d27">%s</text>'%(lx,ly,nd['name']))
        svg.append('<text x="%.1f" y="%.1f" font-size="9" fill="#9a9286">%d 激活</text>'%(lx,ly+11,nd['adopt']))
    svg.append('</svg>')
    return '\n'.join(svg), nodes

if __name__=='__main__':
    scene=sys.argv[1]
    branch=sys.argv[2] if len(sys.argv)>2 else 'whatif'
    out=sys.argv[3] if len(sys.argv)>3 else os.path.join(ROOT,'.tmp',f'{scene}_map_{branch}.svg')
    s,nodes=gen(scene,branch)
    with open(out,'w',encoding='utf-8') as f: f.write(s)
    print('SVG_SAVED', out, 'nodes=', len(nodes))
    for nd in nodes: print('  ', nd['name'], nd['lon'], nd['lat'], 'adopt', nd['adopt'])
