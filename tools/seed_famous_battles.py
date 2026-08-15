# -*- coding: utf-8 -*-
"""
批量生成「历史上著名战役」切片（确定性、零 token）。

每场战役产出 data/<id>/ 八件套：
  vocab.json（内联语境包，驱动数据驱动图例）/ places.json（地名坐标）/
  engagements.json（接战点）/ routes.json（行军路线+时间轴）/
  events.json（事件时间轴）/ sources.json / persons.json /
  assertions.jsonl（空，build.py 硬要求）。

并自动：在 data/scenes.json 的 regions 注入 era 分区、在 order/scenes 注入条目。
BC 日期约定：at 字段用 "B260"=公元前260、"B260-07"=前260年七月；events.year 用负 int。

用法：
  python tools/seed_famous_battles.py
"""
import json
import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
DATA = os.path.join(ROOT, "data")

# ── 配色（胜方红 / 败方蓝 / 未接战灰，图例由 vocab.legend 驱动）──
RED = "#c0392b"
BLUE = "#2b6cb0"
GREY = "#7f8c8d"

# 每个战役：紧凑元组结构，builder 转 dict。
# engagement: (id, name, at, era, place, winner[a/b/None], outcome, subject,
#              [(side, commander, committed_ratio, fatigue, march_72h_li, posture, commit_basis, commit_confidence), ...])
# route: (id, name, side[a/b], [(place, at, label), ...], {"at":..,"type":..,"text":..})
# event: (id, subject, year[int], era, title, kind, text, place)
# place: (id, name, lon, lat, note)

B = []

def battle(d):
    B.append(d)

# ══════════════ 战国 ══════════════
battle({
 "id":"changping","title":"长平之战","region":"warring_states","region_name":"战国",
 "region_note":"公元前260年前后，秦赵决战，战国兼并战争转折点。",
 "dossier_label":"长平之战","subtitle":"周赧王五十三—五十五年（前262—前260）· 秦 vs 赵",
 "primary_place":"changping","a_name":"秦军","b_name":"赵军","lead":"白起诱赵括出击，断粮道围歼赵军四十余万，坑杀降卒。战国规模最大的歼灭战。",
 "parties_note":"秦方纪功、赵方讳败；数字以现代考订折中。",
 "places":[("changping","长平","112.50","35.78","今山西高平西北长平村"),("danze","丹朱岭","112.62","35.85","长平之北屏障"),
   ("handan","邯郸","114.49","36.61","赵都"),("xianyang","咸阳","108.70","34.33","秦都"),("shangdang","上党","112.86","36.20","归赵引发战端")],
 "events":[("ev_cp_sd","event:cp_sd",-262,"周赧王五十三年","秦取上党","战事","秦受韩上党降，取南阳扼赵。",None),
   ("ev_cp_kr","event:cp_kr",-260,"周赧王五十五年","赵括代廉颇","战事","赵王以赵括代廉颇，改守为攻。","changping"),
   ("ev_cp_jz","event:cp_jz",-260,"周赧王五十五年九月","长平决战","战事","白起断粮围歼，赵军降卒被坑。","changping")],
 "engagements":[("eng_cp_main","长平决战","B260-09","周赧王五十五年九月","changping","a","白起诱敌出击后奇兵绝赵粮道，反包围长平，赵军被困四十六日，主将战死，四十余万降卒被坑杀。","event:cp_jz",
   [("a","白起",1.0,"fresh",190,"钳形反包围","秦军迂回绝赵粮道，以逸待劳。",0.55),("b","赵括",1.0,"exhausted",160,"突围","赵军被困粮尽，突围失败。",0.5)])],
 "routes":[("rt_cp_qin","秦军绝粮","a",[("changping","B260-08","出奇兵绝赵粮道"),("danze","B260-09","合围长平")],{"at":"B260-09","type":"victory","text":"秦军合围长平，赵军覆没"}),
   ("rt_cp_zhao","赵军出击","b",[("handan","B260-07","赵括率军赴长平"),("changping","B260-08","接战")],{"at":"B260-08","type":"defeat","text":"赵军改守为攻，陷入包围"})],
 "timeline":[("B260-07","周赧王五十五年七月","赵括赴长平",False),("B260-08","八月","秦绝赵粮道",True),("B260-09","九月","长平决战·赵军覆没",True)],
 "persons":[("baiqi","白起","秦"),("zhao_kuo","赵括","赵"),("lianpo","廉颇","赵")]})
# 桂陵
battle({
 "id":"guiling","title":"桂陵之战","region":"warring_states","region_name":"战国",
 "region_note":"前354年，齐魏之战，「围魏救赵」典出此役。","dossier_label":"桂陵之战",
 "subtitle":"周显王十五年（前354）· 齐 vs 魏","primary_place":"guiling","a_name":"齐军","b_name":"魏军",
 "lead":"齐将田忌、孙膑围魏救赵，袭大梁、邀魏军于桂陵，擒庞涓。","parties_note":"齐方叙孙膑谋略，魏方讳败。",
 "places":[("guiling","桂陵","114.67","35.20","今河南长垣北"),("daliang","大梁","114.30","34.80","魏都，今开封"),("linzi","临淄","118.05","36.81","齐都，今淄博"),("handan","邯郸","114.49","36.61","赵都")],
 "events":[("ev_gl_wei","event:gl_wei",-354,"周显王十五年","魏围邯郸","战事","魏拔邯郸，赵告急于齐。",None),
   ("ev_gl_qi","event:gl_qi",-353,"周显王十六年","齐围魏救赵","战事","孙膑袭大梁，魏军回救。","guiling"),
   ("ev_gl_jz","event:gl_jz",-353,"周显王十六年","桂陵擒庞涓","战事","齐邀魏军于桂陵，擒庞涓。","guiling")],
 "engagements":[("eng_gl_main","桂陵邀击","B353-11","周显王十六年十一月","guiling","a","孙膑避实击虚，齐军于桂陵邀击回救的魏军主力，庞涓被擒，魏军溃。","event:gl_jz",
   [("a","田忌/孙膑",1.0,"fresh",260,"截击","齐军轻兵袭大梁后回师设伏。",0.5),("b","庞涓",1.0,"exhausted",300,"回救","魏军攻坚后长途回救，师老兵疲。",0.5)])],
 "routes":[("rt_gl_qi","齐军袭大梁","a",[("linzi","B353-10","齐起兵"),("daliang","B353-11","袭大梁"),("guiling","B353-11","桂陵设伏")],{"at":"B353-11","type":"victory","text":"齐围魏救赵，桂陵破魏"}),
   ("rt_gl_wei","魏军回救","b",[("handan","B353-10","魏军围邯郸"),("guiling","B353-11","回救中伏")],{"at":"B353-10","type":"defeat","text":"魏军被迫弃邯郸回救"})],
 "timeline":[("B354-01","周显王十五年","魏围邯郸",False),("B353-10","十六年十月","齐起兵袭大梁",True),("B353-11","十一月","桂陵擒庞涓",True)],
 "persons":[("sunbin","孙膑","齐"),("pangjuan","庞涓","魏"),("tianji","田忌","齐")]})
# 马陵
battle({
 "id":"maling","title":"马陵之战","region":"warring_states","region_name":"战国",
 "region_note":"前341年，齐魏再战，孙膑减灶诱敌，庞涓死于此役。","dossier_label":"马陵之战",
 "subtitle":"周显王二十八—二十九年（前341—前340）· 齐 vs 魏","primary_place":"maling","a_name":"齐军","b_name":"魏军",
 "lead":"齐魏马陵道，孙膑减灶诱庞涓轻进，伏弩尽杀魏军，庞涓死、太子申虏。","parties_note":"齐方叙谋略，魏方讳败。",
 "places":[("maling","马陵","115.66","36.24","今山东莘县马陵道"),("daliang","大梁","114.30","34.80","魏都"),("linzi","临淄","118.05","36.81","齐都"),("xiang","大梁郊","114.30","34.80","魏军出境")],
 "events":[("ev_ml_wei","event:ml_wei",-341,"周显王二十八年","魏攻韩","战事","魏攻韩，韩请救于齐。",None),
   ("ev_ml_qi","event:ml_qi",-340,"周显王二十九年","齐救韩伐魏","战事","孙膑减灶诱敌。","maling"),
   ("ev_ml_jz","event:ml_jz",-340,"周显王二十九年","马陵伏击","战事","庞涓夜追中伏，魏军溃，庞涓死。","maling")],
 "engagements":[("eng_ml_main","马陵伏击","B340-03","周显王二十九年三月","maling","a","孙膑逐日减灶示弱，庞涓弃步军轻骑夜追，入马陵道伏弩齐发，魏军尽没。","event:ml_jz",
   [("a","田忌/孙膑",0.6,"fresh",220,"设伏","齐军据险待敌，弩手密布隘道。",0.55),("b","庞涓",1.0,"exhausted",260,"轻进","魏军轻骑冒进，入伏无援。",0.5)])],
 "routes":[("rt_ml_qi","齐军诱敌","a",[("linzi","B340-01","齐起兵救韩"),("maling","B340-03","减灶设伏")],{"at":"B340-03","type":"victory","text":"齐减灶诱敌，马陵破魏"}),
   ("rt_ml_wei","魏军轻进","b",[("xiang","B340-01","魏攻韩"),("maling","B340-03","轻骑夜追")],{"at":"B340-02","type":"defeat","text":"庞涓弃大军轻进中伏"})],
 "timeline":[("B341-01","周显王二十八年","魏攻韩",False),("B340-01","二十九年","齐救韩",False),("B340-03","三月","马陵伏击·庞涓死",True)],
 "persons":[("sunbin","孙膑","齐"),("pangjuan","庞涓","魏"),("tianji","田忌","齐")]})
# 城濮
battle({
 "id":"chengpu","title":"城濮之战","region":"warring_states","region_name":"战国",
 "region_note":"前632年，晋楚争霸第一战，晋文公「退避三舍」。","dossier_label":"城濮之战",
 "subtitle":"周襄王二十年（前632）· 晋 vs 楚","primary_place":"chengpu","a_name":"晋军","b_name":"楚军",
 "lead":"晋文公退避三舍后反击，城濮大败楚军，践土会盟称霸。","parties_note":"晋方叙尊王攘楚，楚方讳败。",
 "places":[("chengpu","城濮","115.49","35.59","今山东鄄城西南"),("ying","郢","112.24","30.33","楚都，今荆州"),("jiang","绛","111.69","35.63","晋都，今山西翼城"),("wen","践土","113.80","35.30","会盟地，今河南原阳")],
 "events":[("ev_cp_chu","event:cp_chu",-632,"周襄王二十年","楚围宋","战事","楚成王围宋，宋乞援于晋。",None),
   ("ev_cp_jin","event:cp_jin",-632,"周襄王二十年","晋伐曹卫","战事","晋文公退避三舍救宋。","chengpu"),
   ("ev_cp_jz","event:cp_jz",-632,"周襄王二十年","城濮大败楚","战事","晋军城濮破楚，践土会盟。","chengpu")],
 "engagements":[("eng_cp_main","城濮决战","B632-04","周襄王二十年四月","chengpu","a","晋军退避三舍后分击楚军左右翼，楚左师先溃，全军退。","event:cp_jz",
   [("a","晋文公/先轸",1.0,"fresh",240,"诱敌侧击","晋伪遁诱楚，集中击其弱翼。",0.5),("b","子玉",1.0,"marching",260,"冒进","楚军骄纵，两翼不协调。",0.5)])],
 "routes":[("rt_cp_jin","晋军救宋","a",[("jiang","B632-01","晋出兵"),("chengpu","B632-04","退避三舍后决战")],{"at":"B632-04","type":"victory","text":"晋退避三舍，城濮败楚"}),
   ("rt_cp_chu","楚军北上","b",[("ying","B632-01","楚围宋"),("chengpu","B632-04","决战")],{"at":"B632-03","type":"defeat","text":"楚军北上会战败北"})],
 "timeline":[("B632-01","周襄王二十年","晋楚对峙",False),("B632-03","三月","晋退避三舍",False),("B632-04","四月","城濮决战·楚败",True)],
 "persons":[("jinwen","晋文公","晋"),("ziyu","子玉","楚"),("xianzhen","先轸","晋")]})
# 柏举
battle({
 "id":"boju","title":"柏举之战","region":"warring_states","region_name":"战国",
 "region_note":"前506年，吴破楚入郢，春秋后期第一大战役。","dossier_label":"柏举之战",
 "subtitle":"周敬王十四年（前506）· 吴 vs 楚","primary_place":"boju","a_name":"吴军","b_name":"楚军",
 "lead":"吴王阖闾、孙武破楚，柏举大败楚军，五战入郢。","parties_note":"吴方叙孙武用兵，楚方讳败。",
 "places":[("boju","柏举","115.01","31.18","今湖北麻城"),("gusu","姑苏","120.58","31.30","吴都，今苏州"),("ying","郢","112.24","30.33","楚都，今荆州"),("hanshui","汉水","112.30","30.60","吴楚隔汉相持")],
 "events":[("ev_bj_wu","event:bj_wu",-506,"周敬王十四年","吴蔡唐联军","战事","吴联蔡、唐伐楚。",None),
   ("ev_bj_bj","event:bj_bj",-506,"周敬王十四年","柏举决战","战事","吴军柏举大败楚主力。","boju"),
   ("ev_bj_ruying","event:bj_ruying",-506,"周敬王十四年","吴入郢","战事","吴五战及郢，楚昭王奔随。","ying")],
 "engagements":[("eng_bj_main","柏举决战","B506-11","周敬王十四年十一月","boju","a","孙武以迂为直，吴军抢渡汉水、柏举击溃楚中军，楚师溃散。","event:bj_bj",
   [("a","阖闾/孙武",1.0,"fresh",300,"速决","吴军百里奔袭，抢渡击其懈。",0.5),("b","囊瓦",1.0,"marching",320,"被动","楚军沿汉布防，调度失机。",0.5)])],
 "routes":[("rt_bj_wu","吴军西进","a",[("gusu","B506-09","吴起兵"),("hanshui","B506-11","抢渡汉水"),("boju","B506-11","柏举决战"),("ying","B506-11","入郢")],{"at":"B506-11","type":"victory","text":"吴五战入郢"}),
   ("rt_bj_chu","楚军布防","b",[("ying","B506-09","楚调兵"),("hanshui","B506-11","沿汉防御")],{"at":"B506-10","type":"defeat","text":"楚军沿汉被动防御败北"})],
 "timeline":[("B506-09","周敬王十四年","吴联蔡唐伐楚",False),("B506-11","十一月","柏举决战",True),("B506-11","十一月","吴入郢",True)],
 "persons":[("sunwu","孙武","吴"),("helu","阖闾","吴"),("nangwa","囊瓦","楚")]})

# ══════════════ 秦汉 ══════════════
battle({
 "id":"julu","title":"巨鹿之战","region":"qin_han","region_name":"秦汉之际",
 "region_note":"前207年，项羽破釜沉舟灭秦主力。","dossier_label":"巨鹿之战",
 "subtitle":"秦二世三年（前207）· 楚（项羽） vs 秦","primary_place":"julu","a_name":"楚军","b_name":"秦军",
 "lead":"项羽破釜沉舟，巨鹿九战绝秦军甬道，俘王离、击走章邯。","parties_note":"楚方叙项羽勇决，秦方讳败。",
 "places":[("julu","巨鹿","115.04","37.07","今河北平乡"),("zhangshui","漳水","114.80","36.90","楚军北渡"),("xianyang","咸阳","108.70","34.33","秦都"),("pengcheng","彭城","117.18","34.26","楚怀王都")],
 "events":[("ev_jl_qin","event:jl_qin",-207,"秦二世三年","章邯围巨鹿","战事","秦将章邯、王离围巨鹿，赵乞援。",None),
   ("ev_jl_xiang","event:jl_xiang",-207,"秦二世三年","项羽渡河","战事","项羽破釜沉舟，渡漳救巨鹿。","julu"),
   ("ev_jl_jz","event:jl_jz",-207,"秦二世三年","巨鹿破秦","战事","九战绝甬道，俘王离。","julu")],
 "engagements":[("eng_jl_main","巨鹿围歼","B207-12","秦二世三年十二月","julu","a","项羽沉船破釜，九战楚军绝秦甬道，王离被俘、章邯西走，秦主力倾覆。","event:jl_jz",
   [("a","项羽",1.0,"fresh",200,"死战","破釜沉舟，士卒必死。",0.55),("b","王离/章邯",1.0,"marching",220,"分守","秦军分兵围城与护粮，势分。",0.5)])],
 "routes":[("rt_jl_xiang","楚军北上","a",[("pengcheng","B207-10","项羽北上"),("zhangshui","B207-12","渡漳"),("julu","B207-12","破釜决战")],{"at":"B207-12","type":"victory","text":"巨鹿破秦主力"}),
   ("rt_jl_qin","秦军围巨鹿","b",[("xianyang","B207-09","秦调兵"),("julu","B207-10","围城")],{"at":"B207-11","type":"defeat","text":"秦军围城反被破"})],
 "timeline":[("B207-09","秦二世三年","秦围巨鹿",False),("B207-12","十二月","项羽渡漳",True),("B207-12","十二月","巨鹿破秦",True)],
 "persons":[("xiangyu","项羽","楚"),("zhanghan","章邯","秦"),("wangli","王离","秦")]})
battle({
 "id":"gaixia","title":"垓下之战","region":"qin_han","region_name":"秦汉之际",
 "region_note":"前202年，刘邦合围项羽，楚汉终结。","dossier_label":"垓下之战",
 "subtitle":"汉高帝五年（前202）· 汉 vs 楚","primary_place":"gaixia","a_name":"汉军","b_name":"楚军",
 "lead":"韩信十面埋伏，垓下围项羽，四面楚歌，羽走乌江自刎。","parties_note":"汉方叙垓下合围，楚方叙项羽悲歌。",
 "places":[("gaixia","垓下","117.56","33.50","今安徽灵璧南"),("pengcheng","彭城","117.18","34.26","楚故都"),("jiangdong","江东","120.58","31.30","项羽起兵地"),("wujiang","乌江","118.25","31.87","羽自刎处")],
 "events":[("ev_gx_han","event:gx_han",-202,"汉高帝五年","汉围楚","战事","韩信率诸侯兵围羽于垓下。",None),
   ("ev_gx_ge","event:gx_ge",-202,"汉高帝五年","四面楚歌","战事","汉军夜歌楚声，楚军溃散。","gaixia"),
   ("ev_gx_wj","event:gx_wj",-202,"汉高帝五年","乌江自刎","战事","项羽突出重围至乌江自刎。","wujiang")],
 "engagements":[("eng_gx_main","垓下合围","B202-12","汉高帝五年十二月","gaixia","a","韩信布十面阵，汉军四面合围垓下，楚军夜溃，羽率八百骑走。","event:gx_wj",
   [("a","韩信/刘邦",1.0,"fresh",240,"十面埋伏","汉军数重围合，兵力绝对优势。",0.55),("b","项羽",1.0,"exhausted",200,"突围","楚军疲敝孤立，四面楚歌。",0.5)])],
 "routes":[("rt_gx_han","汉军合围","a",[("pengcheng","B202-10","汉起兵"),("gaixia","B202-12","垓下合围")],{"at":"B202-12","type":"victory","text":"垓下灭楚"}),
   ("rt_gx_chu","楚军东走","b",[("gaixia","B202-12","羽突出"),("wujiang","B202-12","乌江自刎")],{"at":"B202-12","type":"defeat","text":"羽走乌江自刎"})],
 "timeline":[("B202-10","汉高帝五年","汉围楚",False),("B202-12","十二月","四面楚歌",True),("B202-12","十二月","乌江自刎",True)],
 "persons":[("hanxin","韩信","汉"),("xiangyu","项羽","楚"),("liubang","刘邦","汉")]})
battle({
 "id":"mobai","title":"漠北之战","region":"qin_han","region_name":"秦汉之际",
 "region_note":"前119年，卫青霍去病出塞击匈奴，封狼居胥。","dossier_label":"漠北之战",
 "subtitle":"汉武帝元狩四年（前119）· 汉 vs 匈奴","primary_place":"mobei","a_name":"汉军","b_name":"匈奴",
 "lead":"卫青出定襄、霍去病出代郡，深入漠北击匈奴主力，霍去病封狼居胥。","parties_note":"汉方纪功，匈奴无文字记载。",
 "places":[("mobei","漠北","106.90","47.90","今蒙古高原"),("chang","长安","108.94","34.34","汉都"),("dai","代郡","115.00","39.40","汉北边"),("langjuxu","狼居胥","111.00","49.00","霍去病封禅处")],
 "events":[("ev_mb_chu","event:mb_chu",-119,"元狩四年","汉分道出塞","战事","卫青、霍去病各将五万骑出塞。",None),
   ("ev_mb_hq","event:mb_hq",-119,"元狩四年","霍去病封狼居胥","战事","霍去病绝大漠，封狼居胥而还。","langjuxu"),
   ("ev_mb_wq","event:mb_wq",-119,"元狩四年","卫青漠北破单于","战事","卫青出定襄击单于。","mobei")],
 "engagements":[("eng_mb_main","漠北决战","B119-06","元狩四年夏","mobei","a","汉军两路深入大漠，卫青击单于、霍去病歼左贤王，匈奴远遁漠北。","event:mb_wq",
   [("a","卫青/霍去病",1.0,"fresh",600,"远征","汉骑兵远程奔袭，补给艰难。",0.5),("b","伊稚斜单于",1.0,"marching",500,"退避","匈奴主动北撤，避汉锋。",0.5)])],
 "routes":[("rt_mb_hq","霍去病出代","a",[("dai","B119-04","出代郡"),("mobei","B119-06","绝漠"),("langjuxu","B119-06","封狼居胥")],{"at":"B119-06","type":"victory","text":"霍去病封狼居胥"}),
   ("rt_mb_wq","卫青出定襄","a",[("chang","B119-04","出定襄"),("mobei","B119-06","击单于")],{"at":"B119-06","type":"victory","text":"卫青漠北破单于"})],
 "timeline":[("B119-04","元狩四年","汉两道出塞",False),("B119-06","夏","漠北决战",True),("B119-06","夏","封狼居胥",True)],
 "persons":[("huoqb","霍去病","汉"),("weiqing","卫青","汉"),("yizhixie","伊稚斜单于","匈奴")]})
battle({
 "id":"kunyang","title":"昆阳之战","region":"qin_han","region_name":"秦汉之际",
 "region_note":"23年，刘秀以少破多灭新莽主力。","dossier_label":"昆阳之战",
 "subtitle":"新莽地皇四年（23）· 汉（刘秀） vs 新莽","primary_place":"kunyang","a_name":"汉军","b_name":"新莽军",
 "lead":"刘秀率数千骑突阵，昆阳内外夹击，莽军溃，王寻死、王邑走。","parties_note":"汉方叙刘秀勇略，莽方讳败。",
 "places":[("kunyang","昆阳","113.36","33.62","今河南叶县"),("wan","宛","112.53","32.99","汉军别部"),("changan","长安","108.94","34.34","新莽都"),("luoyang","洛阳","112.45","34.62","莽东方重镇")],
 "events":[("ev_ky_wan","event:ky_wan",23,"地皇四年","汉围宛","战事","绿林军立更始，围宛。",None),
   ("ev_ky_liu","event:ky_liu",23,"地皇四年","刘秀突阵","战事","刘秀率十三骑夜出，招兵还战。","kunyang"),
   ("ev_ky_jz","event:ky_jz",23,"地皇四年","昆阳破莽","战事","内外夹击，莽军溃，王寻死。","kunyang")],
 "engagements":[("eng_ky_main","昆阳决战","23-06","地皇四年六月","kunyang","a","刘秀以数千锐卒冲莽中军，昆阳守军鼓噪而出，莽军大溃，王寻战死、王邑遁。","event:ky_jz",
   [("a","刘秀",0.4,"fresh",120,"突阵","汉军锐卒集中冲其指挥，以少击众。",0.5),("b","王寻/王邑",1.0,"marching",150,"分守","莽军号称百万，指挥庞杂。",0.5)])],
 "routes":[("rt_ky_liu","刘秀赴援","a",[("wan","23-05","刘秀在宛"),("kunyang","23-06","突阵还战")],{"at":"23-06","type":"victory","text":"昆阳内外夹击破莽"}),
   ("rt_ky_mang","莽军围城","b",[("luoyang","23-04","莽军南下"),("kunyang","23-05","围城")],{"at":"23-05","type":"defeat","text":"莽军围城反溃"})],
 "timeline":[("23-04","地皇四年","莽军围昆阳",False),("23-05","五月","刘秀夜出",False),("23-06","六月","昆阳决战·莽溃",True)],
 "persons":[("liuxiu","刘秀","汉"),("wangxun","王寻","新莽"),("wangyi","王邑","新莽")]})

# ══════════════ 三国 ══════════════
battle({
 "id":"guandu","title":"官渡之战","region":"three_kingdoms","region_name":"三国",
 "region_note":"200年，曹操以少胜多败袁绍，统一北方奠基。","dossier_label":"官渡之战",
 "subtitle":"汉献帝建安五年（200）· 曹 vs 袁","primary_place":"guandu","a_name":"曹操军","b_name":"袁绍军",
 "lead":"曹操奇袭乌巢焚袁绍粮，官渡大败袁军，奠定统一北方。","parties_note":"曹方叙用奇，袁方叙刚愎。",
 "places":[("guandu","官渡","113.97","34.73","今河南中牟北"),("wuchao","乌巢","113.95","34.80","袁绍粮屯，今河南延津东南"),("xuchang","许昌","113.85","34.04","曹操据"),("liyang","黎阳","114.67","35.67","袁军渡河"),("ye","邺","114.62","36.35","袁绍治")],
 "events":[("ev_gd_yuan","event:gd_yuan",200,"建安五年","袁绍南渡","战事","袁绍率众屯黎阳，南攻许。",None),
   ("ev_gd_wuchao","event:gd_wuchao",200,"建安五年","乌巢焚粮","战事","曹操亲袭乌巢，焚袁粮。","guandu"),
   ("ev_gd_jz","event:gd_jz",200,"建安五年","官渡决战","战事","袁军闻粮尽溃，曹追破之。","guandu")],
 "engagements":[("eng_gd_main","官渡决战","200-10","建安五年十月","guandu","a","曹操以轻兵袭乌巢焚袁绍积谷，袁军心动摇溃散，坑卒七万。","event:gd_jz",
   [("a","曹操",1.0,"fresh",150,"奇袭","曹选锐卒夜袭粮屯，孤注一掷。",0.55),("b","袁绍",1.0,"marching",180,"分守","袁军势众而粮道疏，闻变自溃。",0.5)])],
 "routes":[("rt_gd_cao","曹袭乌巢","a",[("xuchang","200-09","曹屯官渡"),("guandu","200-10","正面相持"),("wuchao","200-10","奇袭乌巢")],{"at":"200-10","type":"victory","text":"焚袁粮，官渡破绍"}),
   ("rt_gd_yuan","袁军南下","b",[("ye","200-01","袁起兵"),("liyang","200-02","渡河"),("guandu","200-09","屯官渡")],{"at":"200-09","type":"defeat","text":"袁绍南攻受阻于官渡"})],
 "timeline":[("200-01","建安五年","袁绍南攻",False),("200-09","九月","官渡相持",False),("200-10","十月","乌巢焚粮·袁溃",True)],
 "persons":[("caocao","曹操","曹"),("yuanshao","袁绍","袁"),("xunyou","荀攸","曹")]})
battle({
 "id":"chibi","title":"赤壁之战","region":"three_kingdoms","region_name":"三国",
 "region_note":"208年，孙刘联军火攻破曹操，三分天下定局。","dossier_label":"赤壁之战",
 "subtitle":"汉献帝建安十三年（208）· 孙刘 vs 曹","primary_place":"chibi","a_name":"孙刘联军","b_name":"曹军",
 "lead":"周瑜黄盖火攻，赤壁大破曹操水师，操北还，三分始定。","parties_note":"吴方叙周瑜火攻，魏方讳败北。",
 "places":[("chibi","赤壁","113.92","29.72","今湖北赤壁市西北"),("wulin","乌林","113.90","29.85","曹军屯处，江北"),("jiangling","江陵","112.24","30.35","曹军基地"),("xiaokou","夏口","114.30","30.59","刘备屯"),("chaisang","柴桑","115.99","29.71","孙权治，周瑜出兵")],
 "events":[("ev_cb_cao","event:cb_cao",208,"建安十三年","曹操南下","战事","操取荆州，顺流东下。",None),
   ("ev_cb_lk","event:cb_lk",208,"建安十三年","孙刘结盟","战事","诸葛亮说权，孙刘联兵拒曹。","chibi"),
   ("ev_cb_jz","event:cb_jz",208,"建安十三年冬","赤壁火攻","战事","黄盖诈降火攻，曹军大溃。","chibi")],
 "engagements":[("eng_cb_main","赤壁火攻","208-12","建安十三年冬","chibi","a","黄盖以艨艟火攻曹连锁战舰，风猛火烈，曹军岸营尽焚，退走江陵。","event:cb_jz",
   [("a","周瑜/黄盖",1.0,"fresh",120,"火攻","联吴水军顺风纵火，击其连锁之舰。",0.55),("b","曹操",1.0,"marching",160,"不习水","北兵不服水土，舟连为疫所苦。",0.5)])],
 "routes":[("rt_cb_wu","孙刘西进","a",[("chaisang","208-11","周瑜率兵"),("xiaokou","208-11","会刘备"),("chibi","208-12","赤壁列阵")],{"at":"208-12","type":"victory","text":"赤壁火攻破曹"}),
   ("rt_cb_cao","曹军东下","b",[("jiangling","208-09","操据荆州"),("wulin","208-11","屯乌林"),("chibi","208-12","决战")],{"at":"208-11","type":"defeat","text":"曹军下江陵遇火攻败北"})],
 "timeline":[("208-09","建安十三年","曹操取荆州",False),("208-11","十一月","孙刘结盟",False),("208-12","冬","赤壁火攻·曹北还",True)],
 "persons":[("zhouyu","周瑜","吴"),("huanggai","黄盖","吴"),("caocao","曹操","曹"),("zhugeliang","诸葛亮","蜀")]})
battle({
 "id":"yiling","title":"夷陵之战","region":"three_kingdoms","region_name":"三国",
 "region_note":"222年，陆逊火烧连营破刘备，吴蜀边界定。","dossier_label":"夷陵之战",
 "subtitle":"章武二年（222）· 吴 vs 蜀","primary_place":"yiling","a_name":"吴军","b_name":"蜀军",
 "lead":"陆逊坚守待变，火烧蜀军连营七百里，刘备败走白帝。","parties_note":"吴方叙陆逊持重，蜀方叙复仇之师。",
 "places":[("yiling","夷陵","111.29","30.69","今湖北宜昌"),("zigui","秭归","110.78","30.83","蜀军出"),("xiaoting","猇亭","111.43","30.56","吴蜀相持"),("chengdu","成都","104.07","30.67","蜀都"),("jiangling","江陵","112.24","30.35","吴西路")],
 "events":[("ev_yl_liu","event:yl_liu",222,"章武二年","刘备东征","战事","刘备倾国伐吴，出秭归。",None),
   ("ev_yl_lu","event:yl_lu",222,"章武二年","陆逊坚守","战事","陆逊拒战，待蜀兵疲。","yiling"),
   ("ev_yl_jz","event:yl_jz",222,"章武二年","火烧连营","战事","吴军火攻蜀营，备走白帝。","xiaoting")],
 "engagements":[("eng_yl_main","猇亭火攻","222-06","章武二年六月","xiaoting","a","陆逊乘蜀军久驻士气懈，火攻连营，蜀军崩，刘备夜遁白帝。","event:yl_jz",
   [("a","陆逊",1.0,"fresh",140,"火攻","吴军据险蓄势，一击破其连营。",0.55),("b","刘备",1.0,"exhausted",160,"结营","蜀军夹江连营数百里，犯兵家忌。",0.5)])],
 "routes":[("rt_yl_wu","吴军西拒","a",[("jiangling","222-01","陆逊进驻"),("xiaoting","222-02","相持"),("yiling","222-06","火攻")],{"at":"222-06","type":"victory","text":"火烧连营破蜀"}),
   ("rt_yl_shu","蜀军东进","b",[("chengdu","221-07","刘备伐吴"),("zigui","222-01","出秭归"),("xiaoting","222-02","结营")],{"at":"222-05","type":"defeat","text":"蜀军东进遇火攻败北"})],
 "timeline":[("221-07","章武元年","刘备称帝伐吴",False),("222-02","二年二月","猇亭相持",False),("222-06","六月","火烧连营",True)],
 "persons":[("luxun","陆逊","吴"),("liubei","刘备","蜀"),("zhugeliang","诸葛亮","蜀")]})
battle({
 "id":"xiaoyaojin","title":"逍遥津之战","region":"three_kingdoms","region_name":"三国",
 "region_note":"215年，张辽以寡破众退孙权，合肥保卫战。","dossier_label":"逍遥津之战",
 "subtitle":"建安二十年（215）· 魏 vs 吴","primary_place":"xiaoyaojin","a_name":"魏军","b_name":"吴军",
 "lead":"张辽率八百步卒突击孙权大军，逍遥津退敌，孙权几不免。","parties_note":"魏方叙张辽骁勇，吴方讳败。",
 "places":[("xiaoyaojin","逍遥津","117.27","31.86","今安徽合肥"),("hefei","合肥","117.27","31.86","魏边镇"),("ruxu","濡须","117.60","31.40","吴军口"),("chaisang","柴桑","115.99","29.71","孙权治")],
 "events":[("ev_xy_cao","event:xy_cao",215,"建安二十年","曹征张鲁","战事","曹操西征，留张辽守合肥。",None),
   ("ev_xy_zl","event:xy_zl",215,"建安二十年","张辽突阵","战事","张辽率八百突击孙权营。","xiaoyaojin"),
   ("ev_xy_jz","event:xy_jz",215,"建安二十年","吴退走","战事","孙权攻合肥不克，退走。","xiaoyaojin")],
 "engagements":[("eng_xy_main","逍遥津突击","215-08","建安二十年八月","xiaoyaojin","a","张辽晨袭孙权大营，直贯至麾下，吴军惊溃，攻城旬日不克而退。","event:xy_jz",
   [("a","张辽",1.0,"fresh",80,"突阵","魏以寡兵趁吴立足未稳突击。",0.55),("b","孙权",1.0,"marching",120,"攻坚","吴军数万众攻孤城不克，遇袭自乱。",0.5)])],
 "routes":[("rt_xy_wei","魏守合肥","a",[("hefei","215-01","张辽守城"),("xiaoyaojin","215-08","突阵")],{"at":"215-08","type":"victory","text":"逍遥津退吴"}),
   ("rt_xy_wu","吴军北上","b",[("chaisang","215-07","孙权起兵"),("ruxu","215-08","北上"),("xiaoyaojin","215-08","攻合肥")],{"at":"215-08","type":"defeat","text":"吴攻合肥不克退走"})],
 "timeline":[("215-07","建安二十年","孙权攻合肥",False),("215-08","八月","张辽突阵",True),("215-08","八月","吴退走",True)],
 "persons":[("zhangliao","张辽","魏"),("sunquan","孙权","吴"),("liudian","李典","魏")]})

# ══════════════ 两晋南北朝 ══════════════
battle({
 "id":"feishui","title":"淝水之战","region":"two_jin","region_name":"两晋南北朝",
 "region_note":"383年，东晋以少胜多败前秦，南北对峙延续。","dossier_label":"淝水之战",
 "subtitle":"太元八年（383）· 东晋 vs 前秦","primary_place":"feishui","a_name":"东晋军","b_name":"前秦军",
 "lead":"谢玄率北府兵渡淝水击前秦，秦军自溃，苻坚北还。","parties_note":"晋方叙风声鹤唳，秦方叙恃众轻敌。",
 "places":[("feishui","淝水","116.78","32.57","今安徽寿县东南"),("shouyang","寿阳","116.78","32.57","秦军据"),("jiankang","建康","118.80","32.06","晋都"),("changan_qin","长安","108.94","34.34","前秦都")],
 "events":[("ev_fs_qin","event:fs_qin",383,"太元八年","苻坚南征","战事","前秦百万南侵，列阵淝水。",None),
   ("ev_fs_jin","event:fs_jin",383,"太元八年","晋请战","战事","谢玄请秦军小却，渡水决战。","feishui"),
   ("ev_fs_jz","event:fs_jz",383,"太元八年","淝水溃秦","战事","秦军却阵自溃，晋追击大破之。","feishui")],
 "engagements":[("eng_fs_main","淝水渡击","383-10","太元八年十月","feishui","a","谢玄趁秦军后撤阵脚移动，率锐渡水奋击，秦军自溃不可止。","event:fs_jz",
   [("a","谢玄",1.0,"fresh",90,"渡击","北府兵精锐，趁敌移阵突击。",0.55),("b","苻坚",1.0,"marching",120,"轻敌","秦军杂凑，一退而全军惊溃。",0.5)])],
 "routes":[("rt_fs_jin","晋军北拒","a",[("jiankang","383-08","晋备战"),("feishui","383-10","渡水决战")],{"at":"383-10","type":"victory","text":"淝水破前秦"}),
   ("rt_fs_qin","秦军南下","b",[("changan_qin","383-07","苻坚起兵"),("shouyang","383-09","据寿阳"),("feishui","383-10","决战")],{"at":"383-09","type":"defeat","text":"前秦南下自溃"})],
 "timeline":[("383-07","太元八年","前秦南侵",False),("383-10","十月","秦军小却",False),("383-10","十月","淝水溃秦",True)],
 "persons":[("xiexuan","谢玄","晋"),("fuijian","苻坚","前秦"),("xiean","谢安","晋")]})
battle({
 "id":"canhebei","title":"参合陂之战","region":"two_jin","region_name":"两晋南北朝",
 "region_note":"395年，北魏破后燕，奠定统一北方。","dossier_label":"参合陂之战",
 "subtitle":"北魏登国十年（395）· 北魏 vs 后燕","primary_place":"canhebei","a_name":"北魏军","b_name":"后燕军",
 "lead":"魏王珪设伏参合陂，大破燕太子慕容宝，坑降卒。","parties_note":"魏方叙设伏，燕方讳败。",
 "places":[("canhebei","参合陂","112.48","40.53","今内蒙古凉城东北"),("shengle","盛乐","111.83","40.38","北魏都"),("zhongshan","中山","115.01","38.51","后燕都")],
 "events":[("ev_ch_yan","event:ch_yan",395,"登国十年","燕伐魏","战事","慕容宝率燕军攻魏。",None),
   ("ev_ch_wei","event:ch_wei",395,"登国十年","魏诱敌","战事","魏王珪逐燕军疲，设伏。","canhebei"),
   ("ev_ch_jz","event:ch_jz",395,"登国十年","参合陂破燕","战事","魏军袭燕营，坑降卒四五万。","canhebei")],
 "engagements":[("eng_ch_main","参合陂伏击","395-11","登国十年十一月","canhebei","a","魏王珪佯退诱燕军深入，夜袭参合陂，燕营惊溃，降卒尽坑。","event:ch_jz",
   [("a","拓跋珪",1.0,"fresh",180,"设伏","魏军以退为进，乘夜袭营。",0.55),("b","慕容宝",1.0,"exhausted",200,"轻进","燕军久征士卒思归，遇袭自乱。",0.5)])],
 "routes":[("rt_ch_wei","魏军诱敌","a",[("shengle","395-09","魏佯退"),("canhebei","395-11","设伏")],{"at":"395-11","type":"victory","text":"参合陂破燕"}),
   ("rt_ch_yan","燕军攻魏","b",[("zhongshan","395-08","慕容宝出"),("canhebei","395-10","深入"),("canhebei","395-11","中伏")],{"at":"395-10","type":"defeat","text":"燕军深入中伏"})],
 "timeline":[("395-08","登国十年","燕伐魏",False),("395-11","十一月","魏诱敌",False),("395-11","十一月","参合陂破燕",True)],
 "persons":[("tuobagui","拓跋珪","北魏"),("murongbao","慕容宝","后燕")]})
battle({
 "id":"zhongli","title":"钟离之战","region":"two_jin","region_name":"两晋南北朝",
 "region_note":"507年，梁韦叡守钟离破北魏，淮上防线稳。","dossier_label":"钟离之战",
 "subtitle":"天监六年（507）· 梁 vs 北魏","primary_place":"zhongli","a_name":"梁军","b_name":"北魏军",
 "lead":"韦叡筑堰水攻，钟离内外夹击，大破魏军。","parties_note":"梁方叙韦叡方略，魏方讳败。",
 "places":[("zhongli","钟离","117.43","32.88","今安徽凤阳东"),("shouyang","寿阳","116.78","32.57","魏军据"),("jiankang","建康","118.80","32.06","梁都"),("luoyang_wei","洛阳","112.45","34.62","北魏都")],
 "events":[("ev_zl_wei","event:zl_wei",507,"天监六年","魏围钟离","战事","北魏中山王英围钟离。",None),
   ("ev_zl_wei2","event:zl_wei2",507,"天监六年","韦叡赴援","战事","韦叡率兵救钟离。","zhongli"),
   ("ev_zl_jz","event:zl_jz",507,"天监六年","钟离破魏","战事","梁军水陆夹击，魏军溃。","zhongli")],
 "engagements":[("eng_zl_main","钟离夹击","507-04","天监六年四月","zhongli","a","韦叡筑堰蓄水，战舰攻魏桥，城中守军出，内外夹击魏军大溃。","event:zl_jz",
   [("a","韦叡",1.0,"fresh",130,"水陆夹击","梁军据城以逸待劳，水攻破其浮桥。",0.55),("b","元英",1.0,"marching",150,"顿兵","魏军久围疲敝，浮桥为水所破。",0.5)])],
 "routes":[("rt_zl_liang","梁军救钟离","a",[("jiankang","507-02","韦叡起"),("zhongli","507-04","夹击")],{"at":"507-04","type":"victory","text":"钟离破魏"}),
   ("rt_zl_wei","魏军南下","b",[("luoyang_wei","507-01","魏起兵"),("shouyang","507-02","据寿阳"),("zhongli","507-03","围城")],{"at":"507-03","type":"defeat","text":"魏围钟离反溃"})],
 "timeline":[("507-01","天监六年","魏围钟离",False),("507-03","三月","韦叡赴援",False),("507-04","四月","钟离破魏",True)],
 "persons":[("weirui","韦叡","梁"),("yuanying","元英","北魏")]})

# ══════════════ 隋唐 ══════════════
battle({
 "id":"hulao","title":"虎牢关之战","region":"sui_tang","region_name":"隋唐",
 "region_note":"621年，李世民一战擒窦建德、降王世充，统一中原。","dossier_label":"虎牢关之战",
 "subtitle":"武德四年（621）· 唐 vs 郑/夏","primary_place":"hulao","a_name":"唐军","b_name":"郑夏联军",
 "lead":"李世民据虎牢扼窦建德援郑之师，一战擒建德，世充降。","parties_note":"唐方叙太宗用兵，郑夏讳败。",
 "places":[("hulao","虎牢关","113.27","34.59","今河南荥阳西北"),("luoyang_t","洛阳","112.45","34.62","王世充据"),("changan_tx","长安","108.94","34.34","唐都"),("shanzhou","陕州","111.40","34.78","窦建德出兵")],
 "events":[("ev_hl_shi","event:hl_shi",621,"武德四年","唐围洛阳","战事","李世民围王世充于洛阳。",None),
   ("ev_hl_wei","event:hl_wei",621,"武德四年","建德援郑","战事","窦建德率夏军救洛阳，屯虎牢东。","hulao"),
   ("ev_hl_jz","event:hl_jz",621,"武德四年","虎牢擒建德","战事","世民突阵擒建德，世充遂降。","hulao")],
 "engagements":[("eng_hl_main","虎牢决战","621-05","武德四年五月","hulao","a","世民按兵虎牢疲夏军，伺懈率骑突阵，擒建德，洛阳震恐降。","event:hl_jz",
   [("a","李世民",1.0,"fresh",110,"突阵","唐军据险蓄锐，一击擒其主。",0.55),("b","窦建德",1.0,"marching",140,"顿兵","夏军远来顿于坚城下，主将被擒则溃。",0.5)])],
 "routes":[("rt_hl_tang","唐军东扼","a",[("changan_tx","621-01","唐出兵"),("luoyang_t","621-03","围洛阳"),("hulao","621-05","据关擒建德")],{"at":"621-05","type":"victory","text":"虎牢擒建德，世充降"}),
   ("rt_hl_xia","夏军援郑","b",[("shanzhou","621-02","建德起"),("hulao","621-04","屯虎牢东")],{"at":"621-04","type":"defeat","text":"夏军援郑中伏被擒"})],
 "timeline":[("621-01","武德四年","唐围洛阳",False),("621-04","四月","建德屯虎牢",False),("621-05","五月","虎牢擒建德",True)],
 "persons":[("limin","李世民","唐"),("wangshichong","王世充","郑"),("doujiande","窦建德","夏")]})
battle({
 "id":"talas","title":"怛罗斯之战","region":"sui_tang","region_name":"隋唐",
 "region_note":"751年，唐与大食交锋，造纸术西传之役。","dossier_label":"怛罗斯之战",
 "subtitle":"天宝十载（751）· 唐 vs 大食（阿拔斯）","primary_place":"talas","a_name":"唐军","b_name":"大食军",
 "lead":"高仙芝远征怛罗斯，葛逻禄叛，唐军败于大食。","parties_note":"唐方叙高仙芝远征，大食叙胜。",
 "places":[("talas","怛罗斯","71.37","42.87","今哈萨克斯坦江布尔"),("suye","碎叶","75.23","42.84","唐安西重镇"),("anxi","安西","82.95","41.72","龟兹，安西都护"),("changan_tx","长安","108.94","34.34","唐都")],
 "events":[("ev_tl_tang","event:tl_tang",751,"天宝十载","高仙芝西征","战事","高仙芝率唐兵与蕃兵西进。",None),
   ("ev_tl_gel","event:tl_gel",751,"天宝十载","葛逻禄叛","战事","唐军蕃兵葛逻禄临阵叛。","talas"),
   ("ev_tl_jz","event:tl_jz",751,"天宝十载","怛罗斯败","战事","唐军为大食所败，纸术西传。","talas")],
 "engagements":[("eng_tl_main","怛罗斯决战","751-07","天宝十载七月","talas","b","唐军深入，葛逻禄叛离，侧背受敌，高仙芝夜走，唐退出中亚。","event:tl_jz",
   [("a","高仙芝",1.0,"exhausted",300,"远征","唐军越葱岭远征，兵疲粮远。",0.5),("b","阿布·穆斯林",1.0,"fresh",320,"以逸","大食本土之师，以众待劳。",0.5)])],
 "routes":[("rt_tl_tang","唐军西进","a",[("anxi","751-04","高仙芝起"),("suye","751-06","过碎叶"),("talas","751-07","决战")],{"at":"751-07","type":"defeat","text":"怛罗斯败于大食"}),
   ("rt_tl_dashi","大食东拒","b",[("talas","751-06","大食进军"),("talas","751-07","决战")],{"at":"751-07","type":"victory","text":"大食败唐于怛罗斯"})],
 "timeline":[("751-04","天宝十载","高仙芝西征",False),("751-07","七月","葛逻禄叛",True),("751-07","七月","怛罗斯败",True)],
 "persons":[("gaoxianzhi","高仙芝","唐"),("abumuslim","阿布·穆斯林","大食")]})
battle({
 "id":"suiyang","title":"睢阳之战","region":"sui_tang","region_name":"隋唐",
 "region_note":"757年，张巡死守睢阳阻安庆绪南下，江淮得全。","dossier_label":"睢阳之战",
 "subtitle":"至德二载（757）· 唐 vs 安史","primary_place":"suiyang","a_name":"唐守军","b_name":"安史军",
 "lead":"张巡、许远死守睢阳十月，城陷殉国，屏障江淮。","parties_note":"唐方叙张巡死节，叛方讳其顽强。",
 "places":[("suiyang","睢阳","115.65","34.41","今河南商丘"),("yongqiu","雍丘","114.78","34.56","张巡起"),("tang_du","唐都","108.94","34.34","长安（时已陷）"),("jianghuai","江淮","119.00","32.50","所屏障")],
 "events":[("ev_sy_zhang","event:sy_zhang",757,"至德二载","张巡守睢阳","战事","张巡、许远合守睢阳拒叛。",None),
   ("ev_sy_we","event:sy_we",757,"至德二载","叛军围城","战事","尹子奇率叛军围睢阳。","suiyang"),
   ("ev_sy_jz","event:sy_jz",757,"至德二载","城陷殉国","战事","粮尽城陷，巡、远死节。","suiyang")],
 "engagements":[("eng_sy_main","睢阳死守","757-10","至德二载十月","suiyang","b","张巡以少拒众守十月，叛军攻之不克，城陷粮尽，唐守将死节。","event:sy_jz",
   [("a","张巡/许远",1.0,"exhausted",60,"死守","孤城疲兵，以忠拒众。",0.5),("b","尹子奇",1.0,"marching",80,"顿兵","叛军数围不克，顿于坚城。",0.5)])],
 "routes":[("rt_sy_tang","唐军守城","a",[("yongqiu","757-01","张巡起兵"),("suiyang","757-03","入睢阳守")],{"at":"757-10","type":"defeat","text":"城陷，然屏障江淮"}),
   ("rt_sy_pan","叛军南下","b",[("tang_du","757-01","叛军西进"),("suiyang","757-02","围城")],{"at":"757-09","type":"victory","text":"叛军围睢阳，城终陷"})],
 "timeline":[("757-01","至德二载","张巡起兵",False),("757-03","三月","入睢阳",False),("757-10","十月","城陷殉国",True)],
 "persons":[("zhangxun","张巡","唐"),("xuyuan","许远","唐"),("yinziqi","尹子奇","安史")]})

# ══════════════ 宋 ══════════════
battle({
 "id":"chanyuan","title":"澶渊之战","region":"song","region_name":"宋",
 "region_note":"1004年，宋辽澶渊之盟，百年和平。","dossier_label":"澶渊之战",
 "subtitle":"景德元年（1004）· 宋 vs 辽","primary_place":"chanyuan","a_name":"宋军","b_name":"辽军",
 "lead":"辽萧太后南下，寇准主战，澶渊订盟，宋辽和。","parties_note":"宋方叙寇准主战，辽方叙萧太后亲征。",
 "places":[("chanyuan","澶州","115.03","35.70","今河南濮阳"),("bianjing","汴京","114.30","34.80","宋都开封"),("yingzhou","瀛州","116.08","38.45","辽南下"),("youzhou","幽州","116.40","39.90","辽南京")],
 "events":[("ev_cy_liao","event:cy_liao",1004,"景德元年","辽南下","战事","萧太后、辽圣宗亲征南下。",None),
   ("ev_cy_kou","event:cy_kou",1004,"景德元年","寇准主战","战事","寇准促真宗亲征澶州。","chanyuan"),
   ("ev_cy_meng","event:cy_meng",1004,"景德元年","澶渊之盟","战事","宋辽订盟，岁币和。","chanyuan")],
 "engagements":[("eng_cy_main","澶州对峙","1004-12","景德元年十二月","chanyuan","a","真宗渡河亲征，宋军士气振，辽将挞览中弩死，辽请和。","event:cy_meng",
   [("a","宋真宗/寇准",1.0,"fresh",80,"亲征","天子临河，三军气倍。",0.5),("b","萧太后",1.0,"marching",100,"顿兵","辽军深入而大将死，势沮请盟。",0.5)])],
 "routes":[("rt_cy_song","宋军北守","a",[("bianjing","1004-09","宋戒严"),("chanyuan","1004-11","真宗亲征")],{"at":"1004-12","type":"victory","text":"澶渊之盟，宋辽和"}),
   ("rt_cy_liao","辽军南下","b",[("youzhou","1004-09","辽起兵"),("yingzhou","1004-10","南下"),("chanyuan","1004-11","对峙")],{"at":"1004-11","type":"defeat","text":"辽南下订盟而还"})],
 "timeline":[("1004-09","景德元年","辽南下",False),("1004-11","十一月","真宗亲征",False),("1004-12","十二月","澶渊之盟",True)],
 "persons":[("kouzhun","寇准","宋"),("zhentong","宋真宗","宋"),("xiaotaihou","萧太后","辽")]})
battle({
 "id":"yancheng","title":"郾城之战","region":"song","region_name":"宋",
 "region_note":"1140年，岳飞破金兀术铁浮图，北伐高潮。","dossier_label":"郾城之战",
 "subtitle":"绍兴十年（1140）· 宋（岳家军） vs 金","primary_place":"yancheng","a_name":"岳家军","b_name":"金军",
 "lead":"岳飞以步破金骑，郾城大败兀术铁浮图、拐子马。","parties_note":"宋方叙岳飞用兵，金方讳败。",
 "places":[("yancheng","郾城","113.97","33.87","今河南漯河"),("yingchang","颍昌","113.85","34.04","岳军别部"),("linan","临安","120.15","30.27","宋都"),("zhuxian","朱仙镇","114.30","34.45","岳飞进抵")],
 "events":[("ev_yc_yue","event:yc_yue",1140,"绍兴十年","岳飞北伐","战事","岳飞自襄阳北上复颍昌、郾城。",None),
   ("ev_yc_wu","event:yc_wu",1140,"绍兴十年","兀术反扑","战事","金兀术率铁浮图攻郾城。","yancheng"),
   ("ev_yc_jz","event:yc_jz",1140,"绍兴十年","郾城破金","战事","岳以麻扎刀破铁浮图，金军溃。","yancheng")],
 "engagements":[("eng_yc_main","郾城破骑","1140-07","绍兴十年七月","yancheng","a","岳飞以步兵持麻扎刀入阵，上砍人下砍马，破金铁浮图、拐子马。","event:yc_jz",
   [("a","岳飞",1.0,"fresh",70,"步击骑","宋军以步克骑，专破其甲马。",0.55),("b","兀术",1.0,"marching",90,"铁骑","金军铁浮图重甲，机动为宋步所制。",0.5)])],
 "routes":[("rt_yc_yue","岳家军北上","a",[("linan","1140-05","岳飞起"),("yingchang","1140-06","复颍昌"),("yancheng","1140-07","郾城"),("zhuxian","1140-07","抵朱仙镇")],{"at":"1140-07","type":"victory","text":"郾城破金，兵临汴京"}),
   ("rt_yc_jin","金军反扑","b",[("zhuxian","1140-07","金南下"),("yancheng","1140-07","攻郾城")],{"at":"1140-07","type":"defeat","text":"金反扑遇步击骑败北"})],
 "timeline":[("1140-05","绍兴十年","岳飞北伐",False),("1140-07","七月","兀术攻郾城",False),("1140-07","七月","郾城破金",True)],
 "persons":[("yuefei","岳飞","宋"),("wuzhu","兀术","金"),("zhangxian","张宪","宋")]})
battle({
 "id":"heshangyuan","title":"和尚原之战","region":"song","region_name":"宋",
 "region_note":"1131年，吴玠扼和尚原破金兵入蜀。","dossier_label":"和尚原之战",
 "subtitle":"绍兴元年（1131）· 宋 vs 金","primary_place":"heshangyuan","a_name":"宋军","b_name":"金军",
 "lead":"吴玠、吴璘据和尚原险，金兀术兵败退。","parties_note":"宋方叙吴氏兄弟守险，金方讳败。",
 "places":[("heshangyuan","和尚原","106.95","34.35","今陕西宝鸡西南"),("baoji","宝鸡","107.24","34.36","宋边镇"),("fengxiang","凤翔","107.39","34.52","金据"),("linan","临安","120.15","30.27","宋都")],
 "events":[("ev_hs_jin","event:hs_jin",1131,"绍兴元年","金攻蜀","战事","金自凤翔攻和尚原图入蜀。",None),
   ("ev_hs_wu","event:hs_wu",1131,"绍兴元年","吴玠拒险","战事","吴玠据原设伏。","heshangyuan"),
   ("ev_hs_jz","event:hs_jz",1131,"绍兴元年","和尚原破金","战事","宋军断金粮道，金军溃退。","heshangyuan")],
 "engagements":[("eng_hs_main","和尚原拒险","1131-10","绍兴元年十月","heshangyuan","a","吴玠据险列栅，金军仰攻不利，宋断其粮道，金兵大溃。","event:hs_jz",
   [("a","吴玠/吴璘",1.0,"fresh",90,"据险","宋军扼隘设伏，以寡待众。",0.55),("b","兀术",1.0,"marching",110,"仰攻","金军攻坚于险地，粮道为断。",0.5)])],
 "routes":[("rt_hs_song","宋军西守","a",[("baoji","1131-09","吴玠进驻"),("heshangyuan","1131-10","设伏")],{"at":"1131-10","type":"victory","text":"和尚原破金"}),
   ("rt_hs_jin","金军攻蜀","b",[("fengxiang","1131-09","金起"),("heshangyuan","1131-10","仰攻")],{"at":"1131-10","type":"defeat","text":"金攻和尚原败退"})],
 "timeline":[("1131-09","绍兴元年","金攻和尚原",False),("1131-10","十月","吴玠设伏",False),("1131-10","十月","和尚原破金",True)],
 "persons":[("wuju","吴玠","宋"),("wulin","吴璘","宋"),("wuzhu","兀术","金")]})
battle({
 "id":"caishiji","title":"采石矶之战","region":"song","region_name":"宋",
 "region_note":"1161年，虞允文采石矶阻金渡江，完颜亮败。","dossier_label":"采石矶之战",
 "subtitle":"绍兴三十一年（1161）· 宋 vs 金","primary_place":"caishiji","a_name":"宋军","b_name":"金军",
 "lead":"虞允文临危督师，采石矶大败金舟师，完颜亮南侵挫。","parties_note":"宋方叙虞允文督战，金方讳败。",
 "places":[("caishiji","采石矶","118.47","31.66","今安徽马鞍山长江边"),("jiankang","建康","118.80","32.06","宋江防"),("guazhou","瓜洲","119.42","32.39","金渡口"),("linan","临安","120.15","30.27","宋都")],
 "events":[("ev_cs_jin","event:cs_jin",1161,"绍兴三十一年","金南侵","战事","完颜亮率金军至采石欲渡江。",None),
   ("ev_cs_yu","event:cs_yu",1161,"绍兴三十一年","虞允文督师","战事","虞允文犒师采石，整舟师。","caishiji"),
   ("ev_cs_jz","event:cs_jz",1161,"绍兴三十一年","采石破金","战事","宋舟师火攻破金渡，亮退瓜洲。","caishiji")],
 "engagements":[("eng_cs_main","采石水战","1161-11","绍兴三十一年十一月","caishiji","a","虞允文以海鳅船冲金舟，纵火焚其舰，金军不得渡，亮为部下所杀。","event:cs_jz",
   [("a","虞允文",1.0,"fresh",60,"水战","宋舟师乘势纵火，扼江而守。",0.55),("b","完颜亮",1.0,"marching",80,"强渡","金军舟小兵疲，强渡为火所败。",0.5)])],
 "routes":[("rt_cs_song","宋军守江","a",[("jiankang","1161-10","宋戒严"),("caishiji","1161-11","虞允文督战")],{"at":"1161-11","type":"victory","text":"采石破金舟"}),
   ("rt_cs_jin","金军渡江","b",[("guazhou","1161-10","金南下"),("caishiji","1161-11","强渡")],{"at":"1161-11","type":"defeat","text":"金渡江败于采石"})],
 "timeline":[("1161-10","绍兴三十一年","金南侵",False),("1161-11","十一月","虞允文督师",False),("1161-11","十一月","采石破金",True)],
 "persons":[("yuyunwen","虞允文","宋"),("wanyanliang","完颜亮","金")]})
battle({
 "id":"diaoyucheng","title":"钓鱼城之战","region":"song","region_name":"宋",
 "region_note":"1259年，钓鱼城击毙蒙哥，改世界史进程。","dossier_label":"钓鱼城之战",
 "subtitle":"开庆元年（1259）· 宋 vs 蒙古","primary_place":"diaoyucheng","a_name":"宋军","b_name":"蒙古军",
 "lead":"王坚、张珏死守钓鱼城，蒙哥汗战死城下，漠北争位。","parties_note":"宋方叙孤城死守，蒙古讳汗死。",
 "places":[("diaoyucheng","钓鱼城","106.30","30.00","今重庆合川东"),("hezhou","合州","106.27","30.03","宋州"),("chongqing","重庆","106.55","29.56","宋川蜀"),("dadu","大都","116.40","39.90","蒙古都")],
 "events":[("ev_dy_meng","event:dy_meng",1259,"开庆元年","蒙哥南征","战事","蒙哥自汉中攻四川，围钓鱼城。",None),
   ("ev_dy_wang","event:dy_wang",1259,"开庆元年","王坚守城","战事","王坚、张珏死守钓鱼城。","diaoyucheng"),
   ("ev_dy_jz","event:dy_jz",1259,"开庆元年","蒙哥死城下","战事","蒙哥汗攻城死，蒙古退师。","diaoyucheng")],
 "engagements":[("eng_dy_main","钓鱼城死守","1259-07","开庆元年七月","diaoyucheng","a","钓鱼城凭山筑垒，蒙古久攻不下，蒙哥中砲死，旭烈兀西征军东归争位。","event:dy_jz",
   [("a","王坚/张珏",1.0,"exhausted",40,"死守","孤城天险，军民死守岁余。",0.5),("b","蒙哥",1.0,"marching",60,"顿兵","蒙古顿于坚城，暑疫主将死。",0.5)])],
 "routes":[("rt_dy_song","宋军守城","a",[("hezhou","1258-01","王坚守合州"),("diaoyucheng","1259-01","据城死守")],{"at":"1259-07","type":"victory","text":"蒙哥死城下，蒙古退"}),
   ("rt_dy_meng","蒙古南下","b",[("dadu","1258-01","蒙哥起"),("diaoyucheng","1259-02","围城")],{"at":"1259-06","type":"defeat","text":"蒙古围钓鱼城，汗死退师"})],
 "timeline":[("1258-01","宝祐六年","蒙哥攻蜀",False),("1259-02","开庆元年","围钓鱼城",False),("1259-07","七月","蒙哥死城下",True)],
 "persons":[("wangjian","王坚","宋"),("zhangjue","张珏","宋"),("mengge","蒙哥","蒙古")]})
battle({
 "id":"yaoshan","title":"崖山海战","region":"song","region_name":"宋",
 "region_note":"1279年，宋元最后一战，陆秀夫负帝投海。","dossier_label":"崖山海战",
 "subtitle":"祥兴二年（1279）· 宋 vs 元","primary_place":"yaoshan","a_name":"宋军","b_name":"元军",
 "lead":"张世杰千舟连环，崖山为元所破，陆秀夫负幼帝投海。","parties_note":"宋方叙崖山殉国，元方叙灭宋。",
 "places":[("yaoshan","崖山","113.03","22.18","今广东新会南"),("linan","临安","120.15","30.27","宋故都"),("dadu","大都","116.40","39.90","元都"),("yamen","崖门","113.05","22.20","海战处")],
 "events":[("ev_ys_song","event:ys_song",1279,"祥兴二年","宋舟师退崖山","战事","张世杰奉幼帝退守崖山。",None),
   ("ev_ys_yuan","event:ys_yuan",1279,"祥兴二年","元舰围崖山","战事","张弘范率元舰围崖山。","yaoshan"),
   ("ev_ys_jz","event:ys_jz",1279,"祥兴二年","崖山败亡","战事","宋舟师溃，陆秀夫负帝投海。","yaoshan")],
 "engagements":[("eng_ys_main","崖山海战","1279-03","祥兴二年三月","yaoshan","b","元军断宋水寨汲路，火攻连环舟，宋师溃，陆秀夫负幼帝投海，宋亡。","event:ys_jz",
   [("a","张世杰",1.0,"exhausted",50,"连环","宋舟千艘连环，机动为元所制。",0.5),("b","张弘范",1.0,"fresh",60,"火攻","元军断汲路、纵火破其连环。",0.5)])],
 "routes":[("rt_ys_song","宋舟退守","a",[("linan","1276-01","宋退海上"),("yaoshan","1279-01","崖山"),("yamen","1279-03","决战")],{"at":"1279-03","type":"defeat","text":"崖山败，宋亡"}),
   ("rt_ys_yuan","元舰南追","b",[("dadu","1278-01","元南征"),("yamen","1279-02","围崖山")],{"at":"1279-03","type":"victory","text":"元破崖山灭宋"})],
 "timeline":[("1276-01","德祐二年","宋都陷",False),("1279-01","祥兴二年","崖山",False),("1279-03","三月","崖山败亡",True)],
 "persons":[("zhangshijie","张世杰","宋"),("luxiufu","陆秀夫","宋"),("zhanghongfan","张弘范","元")]})

# ══════════════ 元明 ══════════════
battle({
 "id":"poyanghu","title":"鄱阳湖之战","region":"yuan_ming","region_name":"元明之际",
 "region_note":"1363年，朱元璋火攻破陈友谅，定鼎江南。","dossier_label":"鄱阳湖之战",
 "subtitle":"龙凤九年（1363）· 朱 vs 陈","primary_place":"poyanghu","a_name":"朱军","b_name":"陈军",
 "lead":"朱元璋康郎山火攻，鄱阳湖大败陈友谅，友谅中流矢死。","parties_note":"朱方叙用火，陈方讳败。",
 "places":[("poyanghu","鄱阳湖","116.50","29.10","今江西鄱阳湖"),("nanchang","南昌","115.86","28.68","朱守城"),("yingtian","应天","118.80","32.06","朱据，今南京"),("kanglang","康郎山","116.35","29.05","湖中决战")],
 "events":[("ev_py_chen","event:py_chen",1363,"龙凤九年","陈友谅围南昌","战事","陈友谅率巨舰围南昌。",None),
   ("ev_py_zhu","event:py_zhu",1363,"龙凤九年","朱救南昌","战事","朱元璋率舟师入湖。","poyanghu"),
   ("ev_py_jz","event:py_jz",1363,"龙凤九年","鄱阳湖火攻","战事","朱以火舟破陈舰，友谅死。","kanglang")],
 "engagements":[("eng_py_main","鄱阳湖火战","1363-08","龙凤九年八月","kanglang","a","朱元璋以小船载荻火攻陈巨舰，风急火烈，陈军大溃，友谅中矢死。","event:py_jz",
   [("a","朱元璋",1.0,"fresh",70,"火攻","朱军小船灵活，乘风的火破其巨舰。",0.55),("b","陈友谅",1.0,"marching",90,"巨舰","陈舰高大相连，机动为火所制。",0.5)])],
 "routes":[("rt_py_zhu","朱军入湖","a",[("yingtian","1363-07","朱起兵"),("poyanghu","1363-08","入鄱阳湖"),("kanglang","1363-08","火战")],{"at":"1363-08","type":"victory","text":"鄱阳湖火攻破陈"}),
   ("rt_py_chen","陈军围南昌","b",[("poyanghu","1363-04","陈起兵"),("nanchang","1363-06","围南昌"),("kanglang","1363-08","决战")],{"at":"1363-07","type":"defeat","text":"陈围南昌遇火攻败死"})],
 "timeline":[("1363-04","龙凤九年","陈友谅起兵",False),("1363-08","八月","朱入湖",False),("1363-08","八月","鄱阳湖火攻",True)],
 "persons":[("zhuyuanzhang","朱元璋","明"),("chenyouliang","陈友谅","汉")]})
battle({
 "id":"tumu","title":"土木堡之变","region":"yuan_ming","region_name":"元明之际",
 "region_note":"1449年，明英宗亲征被俘于瓦剌。","dossier_label":"土木堡之变",
 "subtitle":"正统十四年（1449）· 明 vs 瓦剌","primary_place":"tumu","a_name":"明军","b_name":"瓦剌军",
 "lead":"王振挟英宗亲征，土木堡溃，英宗被俘，明军精锐丧。","parties_note":"明方叙王振乱政，瓦剌叙俘帝。",
 "places":[("tumu","土木堡","115.47","40.45","今河北怀来西"),("xuanfu","宣府","115.03","40.63","明北边"),("beijing","北京","116.40","39.90","明都"),("datong","大同","113.30","40.08","瓦剌入")],
 "events":[("ev_tm_ying","event:tm_ying",1449,"正统十四年","英宗亲征","战事","王振挟英宗亲征瓦剌。",None),
   ("ev_tm_wa","event:tm_wa",1449,"正统十四年","瓦剌南犯","战事","也先诱明军至土木堡。","tumu"),
   ("ev_tm_jz","event:tm_jz",1449,"正统十四年","土木堡溃","战事","明军溃，英宗被俘。","tumu")],
 "engagements":[("eng_tm_main","土木堡溃","1449-08","正统十四年八月","tumu","b","也先佯退诱明军移营，乘雨缺水解围，明军大溃，英宗被俘。","event:tm_jz",
   [("a","英宗/王振",1.0,"exhausted",80,"移营","明军仓皇移营，指挥乱。",0.5),("b","也先",1.0,"fresh",100,"诱击","瓦剌以逸待劳，乘懈合围。",0.5)])],
 "routes":[("rt_tm_ming","明军北征","a",[("beijing","1449-07","英宗出"),("datong","1449-08","至大同"),("tumu","1449-08","土木堡溃")],{"at":"1449-08","type":"defeat","text":"土木堡溃，帝被俘"}),
   ("rt_tm_wa","瓦剌南犯","b",[("datong","1449-08","瓦剌入"),("tumu","1449-08","合围")],{"at":"1449-08","type":"victory","text":"瓦剌俘明英宗"})],
 "timeline":[("1449-07","正统十四年","英宗亲征",False),("1449-08","八月","瓦剌诱敌",False),("1449-08","八月","土木堡溃",True)],
 "persons":[("zhengtong","明英宗","明"),("wangzhen","王振","明"),("yexian","也先","瓦剌")]})
battle({
 "id":"beijing","title":"北京保卫战","region":"yuan_ming","region_name":"元明之际",
 "region_note":"1449年，于谦固守北京退瓦剌。","dossier_label":"北京保卫战",
 "subtitle":"正统十四年（1449）· 明 vs 瓦剌","primary_place":"beijing","a_name":"明军","b_name":"瓦剌军",
 "lead":"于谦立景泰、励军民，北京九门拒瓦剌，敌退。","parties_note":"明方叙于谦社稷功，瓦剌讳攻城不下。",
 "places":[("beijing","北京","116.40","39.90","明都"),("desheng","德胜门","116.39","39.94","于谦拒敌"),("juyong","居庸关","116.07","40.30","北边要隘"),("tumu","土木堡","115.47","40.45","帝被俘处")],
 "events":[("ev_bj_yu","event:bj_yu",1449,"正统十四年","于谦主战","战事","于谦立景泰帝，誓守北京。",None),
   ("ev_bj_wa","event:bj_wa",1449,"正统十四年","瓦剌逼京","战事","也先挟英宗攻北京。","beijing"),
   ("ev_bj_jz","event:bj_jz",1449,"正统十四年","北京拒敌","战事","明军九门拒守，瓦剌退。","desheng")],
 "engagements":[("eng_bj_main","北京拒守","1449-10","正统十四年十月","desheng","a","于谦亲督军门，军民死守，瓦剌攻城不克，闻关外袭威胁退。","event:bj_jz",
   [("a","于谦",1.0,"fresh",60,"死守","明军据城励众，背城借一。",0.55),("b","也先",1.0,"marching",80,"顿兵","瓦剌挟帝攻坚不下，师老兵疲。",0.5)])],
 "routes":[("rt_bj_ming","明军守京","a",[("beijing","1449-09","于谦整军"),("desheng","1449-10","九门拒敌")],{"at":"1449-10","type":"victory","text":"北京拒瓦剌"}),
   ("rt_bj_wa","瓦剌逼京","b",[("tumu","1449-09","挟帝北还"),("juyong","1449-10","入关"),("desheng","1449-10","攻城")],{"at":"1449-10","type":"defeat","text":"瓦剌攻北京不克退"})],
 "timeline":[("1449-09","正统十四年","于谦主战",False),("1449-10","十月","瓦剌逼京",False),("1449-10","十月","北京拒敌",True)],
 "persons":[("yuqian","于谦","明"),("yexian","也先","瓦剌"),("jingtai","景泰帝","明")]})

# ══════════════ 清及近代 ══════════════
battle({
 "id":"yaksa","title":"雅克萨之战","region":"qing_modern","region_name":"清及近代",
 "region_note":"1685—1686年，清俄雅克萨之战，尼布楚条约前奏。","dossier_label":"雅克萨之战",
 "subtitle":"康熙二十四—二十五年（1685—1686）· 清 vs 沙俄","primary_place":"yaksa","a_name":"清军","b_name":"沙俄军",
 "lead":"清军两次围雅克萨，俄人退，订尼布楚条约。","parties_note":"清方叙守边，俄方叙开拓。",
 "places":[("yaksa","雅克萨","125.73","53.48","今黑龙江漠河对岸"),("aihui","瑷珲","127.53","50.25","清军集"),("beijing","北京","116.40","39.90","清都"),("niuman","牛满河","127.50","52.00","俄据点")],
 "events":[("ev_yk_qing","event:yk_qing",1685,"康熙二十四年","清军围雅克萨","战事","彭春率清军围雅克萨。",None),
   ("ev_yk_e","event:yk_e",1686,"康熙二十五年","再围雅克萨","战事","萨布素再围，俄乞盟。","yaksa"),
   ("ev_yk_meng","event:yk_meng",1689,"康熙二十八年","尼布楚条约","战事","中俄订尼布楚条约。",None)],
 "engagements":[("eng_yk_main","雅克萨围城","1686-07","康熙二十五年七月","yaksa","a","萨布素围雅克萨久攻，俄守军疫惫请盟，清允撤围议界。","event:yk_meng",
   [("a","萨布素",1.0,"fresh",120,"围城","清军据垒久围，断其接济。",0.5),("b","托尔布津",1.0,"marching",140,"孤守","俄军孤城援绝，疫惫请盟。",0.5)])],
 "routes":[("rt_yk_qing","清军北上","a",[("aihui","1685-05","彭春集兵"),("yaksa","1685-06","围雅克萨")],{"at":"1685-06","type":"victory","text":"清军围雅克萨"}),
   ("rt_yk_e","俄军据点","b",[("niuman","1685-01","俄据点"),("yaksa","1685-03","守城")],{"at":"1686-06","type":"defeat","text":"俄军守雅克萨请盟"})],
 "timeline":[("1685-05","康熙二十四年","清军围雅克萨",False),("1686-07","二十五年","再围",True),("1689-01","二十八年","尼布楚条约",True)],
 "persons":[("sabulv","萨布素","清"),("pengchun","彭春","清"),("tuoer","托尔布津","沙俄")]})
battle({
 "id":"tianjing","title":"天京保卫战","region":"qing_modern","region_name":"清及近代",
 "region_note":"1864年，湘军攻破天京，太平天国亡。","dossier_label":"天京保卫战",
 "subtitle":"同治三年（1864）· 太平军 vs 清（湘军）","primary_place":"tianjing","a_name":"太平军","b_name":"湘军",
 "lead":"曾国藩、曾国荃围天京，地堡破城，洪秀全已殁，城陷。","parties_note":"清方叙湘军苦战，太平方叙殉国。",
 "places":[("tianjing","天京","118.80","32.06","今南京，太平天国都"),("anqing","安庆","117.05","30.53","湘军上游据"),("yuhuatai","雨花台","118.78","32.03","湘军屯"),("zhenjiang","镇江","119.45","32.20","江防")],
 "events":[("ev_tj_xiang","event:tj_xiang",1862,"同治元年","湘军围天京","战事","曾国荃屯雨花台围天京。",None),
   ("ev_tj_di","event:tj_di",1864,"同治三年","地堡破城","战事","湘军地道轰城，天京陷。","tianjing"),
   ("ev_tj_wang","event:tj_wang",1864,"同治三年","太平天国亡","战事","洪秀全先殁，城陷国亡。","tianjing")],
 "engagements":[("eng_tj_main","天京破城","1864-07","同治三年七月","tianjing","b","曾国荃掘地道轰塌城墙，湘军入城，太平守军巷战溃，天京陷。","event:tj_wang",
   [("a","李秀成",1.0,"exhausted",50,"死守","太平据城粮尽援绝，巷战。",0.5),("b","曾国荃",1.0,"fresh",80,"攻城","湘军久围掘地道，以轰破城。",0.5)])],
 "routes":[("rt_tj_taiping","太平守城","a",[("anqing","1861-01","安庆陷"),("tianjing","1862-01","据天京守")],{"at":"1864-07","type":"defeat","text":"天京陷，太平天国亡"}),
   ("rt_tj_xiang","湘军东进","b",[("anqing","1861-01","湘军取安庆"),("yuhuatai","1862-05","屯雨花台"),("tianjing","1864-07","破城")],{"at":"1864-07","type":"victory","text":"湘军破天京"})],
 "timeline":[("1862-01","同治元年","湘军围天京",False),("1864-07","三年七月","地堡破城",True),("1864-07","七月","太平天国亡",True)],
 "persons":[("zengguofan","曾国藩","清"),("zengguoquan","曾国荃","清"),("lixiucheng","李秀成","太平")]})
battle({
 "id":"humen","title":"虎门之战","region":"qing_modern","region_name":"清及近代",
 "region_note":"1841年，鸦片战争虎门炮台失守。","dossier_label":"虎门之战",
 "subtitle":"道光二十一年（1841）· 清 vs 英","primary_place":"humen","a_name":"清军","b_name":"英军",
 "lead":"英舰破虎门炮台，关天培殉国，广州门户开。","parties_note":"清方叙关天培死节，英方叙船坚炮利。",
 "places":[("humen","虎门","113.58","22.81","今广东东莞珠江口"),("guangzhou","广州","113.26","23.13","清粤省"),("dinghai","定海","122.07","30.03","英占"),("ningbo","宁波","121.55","29.87","英占")],
 "events":[("ev_hm_ying","event:hm_ying",1841,"道光二十一年","英犯虎门","战事","英舰集珠江口。",None),
   ("ev_hm_guan","event:hm_guan",1841,"道光二十一年","关天培殉国","战事","英破虎门，关天培战死。","humen"),
   ("ev_hm_jz","event:hm_jz",1841,"道光二十一年","广州门户开","战事","虎门失，广州震动。","humen")],
 "engagements":[("eng_hm_main","虎门炮台","1841-02","道光二十一年二月","humen","b","英舰以蒸汽船破清炮台链，炮台相继陷，关天培殉国。","event:hm_jz",
   [("a","关天培",1.0,"exhausted",40,"死守","清炮台陈旧，兵力单弱。",0.5),("b","英远征军",1.0,"fresh",60,"舰炮","英舰船坚炮利，破其江防。",0.5)])],
 "routes":[("rt_hm_qing","清军守口","a",[("guangzhou","1841-01","清增防"),("humen","1841-02","炮台")],{"at":"1841-02","type":"defeat","text":"虎门炮台陷"}),
   ("rt_hm_ying","英舰北上","b",[("dinghai","1840-07","英占定海"),("ningbo","1841-01","英占宁波"),("humen","1841-02","破虎门")],{"at":"1841-02","type":"victory","text":"英破虎门炮台"})],
 "timeline":[("1840-07","道光二十年","英占定海",False),("1841-01","二十一年","英逼广州",False),("1841-02","二月","虎门陷",True)],
 "persons":[("guantianpei","关天培","清"),("linzeixu","林则徐","清"),("yilie","义律","英")]})


# ══════════════ 生成器 ══════════════
def to_eng(t):
    (eid, name, at, era, place, winner, outcome, subject, sides) = t
    return {
        "id": eid, "name": name, "at": at, "era": era, "place": place,
        "winner": winner, "outcome": outcome, "subject": subject,
        "sides": [{"side": s[0], "commander": s[1], "committed_ratio": s[2],
                   "fatigue": s[3], "march_72h_li": s[4], "posture": s[5],
                   "commit_basis": s[6], "commit_confidence": s[7]} for s in sides]
    }

def to_route(t):
    (rid, name, side, nodes, outcome) = t
    return {
        "id": rid, "name": name, "side": side,
        "nodes": [{"place": n[0], "at": n[1], "label": n[2]} for n in nodes],
        "outcome": outcome
    }

def to_event(t):
    (eid, subject, year, era, title, kind, text, place) = t
    return {"id": eid, "subject": subject, "year": year, "era": era,
            "title": title, "kind": kind, "text": text,
            "place": place} if place else {"id": eid, "subject": subject,
            "year": year, "era": era, "title": title, "kind": kind, "text": text}

def to_assertion(t):
    """由事件生成一条综合史料断言，使其 subject 被至少 1 条断言引用（满足 I9）。"""
    (eid, subject, year, era, title, kind, text, place) = t
    a = {
        "id": "AX_" + eid,
        "subject": subject,
        "predicate": "战事" if kind == "战事" else "经过",
        "value_text": text or title,
        "source": "synthesis",
        "layer": "scholarship",
        "quote_status": "paraphrase_unverified",
        "confidence": 0.4,
        "time": {"start": year, "end": year, "era_text": era},
    }
    if place:
        a["place"] = place
    return a

def to_place(t):
    (pid, name, lon, lat, note) = t
    return {"id": pid, "name": name, "lon": float(lon), "lat": float(lat), "note": note}

def build_one(d):
    sid = d["id"]
    ddir = os.path.join(DATA, sid)
    os.makedirs(ddir, exist_ok=True)
    a, b = d["a_name"], d["b_name"]
    ac, bc = d.get("a_color", RED), d.get("b_color", BLUE)

    # vocab.json（内联语境包，驱动数据驱动图例）
    # 注：「综合史料」作为本切片综合史料来源的统一 party，登记进内联包受控词表，
    # 既满足 E05（不静默丢弃），又是本切片局部键（ming_qing 默认包无此键），
    # 满足 test_vocab「内联包不得继承默认包桶」的隔离要求。
    vocab = {
        "_comment": "战例图例配置（本切片内联，驱动 battle_layer 数据驱动图例）。legend.battle/route 的 key 须与 engagements.winner / routes.side 取值一致（a/b/none）。",
        "parties": [a, b, "综合史料"],
        "party_bucket": {a: a, b: b, "综合史料": "综合史料"},
        "party_colors": {"a": ac, "b": bc, "综合史料": GREY},
        "legend": {
            "battle": [
                {"key": "a", "label": a + "胜", "color": ac},
                {"key": "b", "label": b + "胜", "color": bc},
                {"key": "none", "label": "未接战/不分胜", "color": GREY}
            ],
            "route": [
                {"key": "a", "label": a + "行军", "color": ac},
                {"key": "b", "label": b + "行军", "color": bc}
            ]
        }
    }
    # places（含 rivers/wall 占位，build 共享江河用 sarhu 的）
    places = {"places": [to_place(p) for p in d["places"]], "rivers": [], "wall": []}
    # engagements
    eng = {
        "_comment": "接战（engagement）。winner 取 a/b/none，与 vocab.legend.battle.key 一致。",
        "engagements": [to_eng(e) for e in d["engagements"]],
        "attrition": {
            "a": [{"after": d["timeline"][-1][0], "lost": 0, "basis": "胜方损失多无精确记载，待史料核实。"}],
            "b": [{"after": d["timeline"][-1][0], "lost": 0, "basis": "败方损失数字以现代考订折中，置信度待核。"}],
            "confidence": {"a": 0.4, "b": 0.4},
            "gap_note": "本切片为综合史料整理，胜败方损失数字多为估算，界面应视为待核实。"
        },
        "fatigue_weight": {"fresh": 1.0, "marching": 0.85, "exhausted": 0.7}
    }
    # routes + timeline
    routes = {"routes": [to_route(r) for r in d["routes"]], "timeline": [
        {"at": t[0], "era": t[1], "label": t[2], "key": t[3]} for t in d["timeline"]]}
    # events
    events = {"events": [to_event(e) for e in d["events"]]}
    # sources（诚实：综合史料，非逐源）。party 用本切片局部键「综合史料」（ming_qing 默认包无此键），
    # 既满足 E05（在受控词表内）又满足 E06（跨切片字面量一致）与 test_vocab（内联包隔离）。
    sources = {"sources": [{"id": "synthesis", "title": d["title"] + "·综合史料", "party": "综合史料",
                            "availability": "not_free",
                            "bias_note": d.get("parties_note", "本切片战例由综合史料整理，立场/胜负以主流史载为准，待逐源核对。")}]}
    # persons
    persons = {"persons": [{"id": p[0], "name": p[1], "side": p[2], "influence": 0} for p in d["persons"]]}
    # assertions（由事件生成综合史料断言，使其 subject 被引用，满足 I9；源为 synthesis）
    def write_json(name, obj):
        with open(os.path.join(ddir, name), "w", encoding="utf-8") as f:
            json.dump(obj, f, ensure_ascii=False, indent=1)
    write_json("vocab.json", vocab)
    write_json("places.json", places)
    write_json("engagements.json", eng)
    write_json("routes.json", routes)
    write_json("events.json", events)
    write_json("sources.json", sources)
    write_json("persons.json", persons)
    with open(os.path.join(ddir, "assertions.jsonl"), "w", encoding="utf-8") as f:
        for e in d["events"]:
            f.write(json.dumps(to_assertion(e), ensure_ascii=False) + "\n")

    # scenes.json 条目
    return {
        "kind": "battle", "region": d["region"], "title": d["title"],
        "dossier_label": d["dossier_label"], "subtitle": d["subtitle"],
        "primary_place": d["primary_place"], "dossier_event": d["events"][0][1] if d["events"][0][1].startswith("event:") else None,
        "terrain_grid": "china_coarse",
        "extra_files": ["events", "engagements", "routes", "places"],
        "lead": d["lead"], "parties_note": d.get("parties_note", ""),
        "subject_names": {("person:" + p[0]): p[1] for p in d["persons"]}
    }


def main():
    reg_path = os.path.join(DATA, "scenes.json")
    reg = json.load(open(reg_path, encoding="utf-8"))
    regions = reg.get("regions", [])
    scenes = reg["scenes"]
    order = reg.get("order", list(scenes.keys()))

    new_regions = {}
    for d in B:
        new_regions.setdefault(d["region"], (d["region_name"], d["region_note"]))

    # 注入 era region（不覆盖已有）
    existing = {r["id"]: r for r in regions}
    for rid, (name, note) in new_regions.items():
        if rid not in existing:
            regions.append({"id": rid, "name": name, "note": note})

    added = 0
    for d in B:
        sid = d["id"]
        if sid in scenes:
            # 覆盖式重生成：删除旧目录与注册条目，避免 lon/lat 类型等历史遗留
            old_dir = os.path.join(DATA, sid)
            if os.path.isdir(old_dir):
                import shutil
                shutil.rmtree(old_dir)
            scenes.pop(sid, None)
            if sid in order:
                order.remove(sid)
        scenes[sid] = build_one(d)
        order.append(sid)
        added += 1

    reg["regions"] = regions
    reg["order"] = order
    json.dump(reg, open(reg_path, "w", encoding="utf-8"), ensure_ascii=False, indent=2)
    print("已生成 %d 个著名战役切片，scenes.json 已更新（regions=%d, scenes=%d）"
          % (added, len(regions), len(scenes)))

if __name__ == "__main__":
    main()
